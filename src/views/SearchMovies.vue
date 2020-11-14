<template>
  <div class="home">
    <v-row>
      <v-col cols="6" md="4">
        <v-text-field
          label="検索"
          v-model="keyword"
          :disabled="loading > 0 || checkApi != ''"
        >
        </v-text-field>
      </v-col>
      <v-col cols="2" md="1">
        <v-btn
          fab
          dark
          small
          color="primary"
          @click="searchVideo"
          :disabled="!keyword || loading > 0 || checkApi != ''"
          :loading="loading > 0"
        >
          <v-icon dark>
            mdi-magnify
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4" md="2">
        <v-select
          item-text="label"
          item-value="value"
          :items="options"
          label="表示順"
          v-model="selected"
        />
      </v-col>
    </v-row>
    {{ checkApi }}
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        xl="3"
        v-for="(result, index) in results"
        :key="index"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto my-2"
            @click="toMovieDetil(result.id.videoId || result.id)"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img :src="result.snippet.thumbnails.medium.url"></v-img>
            <v-card-title>
              {{ result.snippet.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ result.snippet.channelTitle }}
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchMovies",
  components: {},
  data() {
    return {
      selected: "relevance",
      options: [
        { label: "関連度順", value: "relevance" },
        { label: "アップロード日", value: "date" },
        { label: "視聴回数", value: "viewCount" },
        { label: "評価", value: "rating" }
      ],
      results: [],
      keyword: "キズナアイ",
      loading: 0,
      params: {
        q: "",
        part: "snippet",
        type: "video",
        order: "relevance",
        maxResults: "10",
        key: this.checkKey()
      },
      checkApi: ""
    };
  },
  created() {
    this.searchVideo();
  },
  methods: {
    toMovieDetail(videoId) {
      this.$router.push({ name: "MovieDetail", params: { id: videoId } });
    },
    searchVideo() {
      console.log("発動！");
      this.params.q = this.keyword;
      this.params.order = this.selected;
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params
        })
        .then(res => {
          this.results = res.data.items;
          console.log(this.results);
        })
        .catch(error => {
          console.log(error);
          if (error.response.status == "403") {
            this.checkApi =
              "本日のYouTubeAPIの使用上限に達しました、現在ダミーデータを使用しています、検索機能は使用できません";
          }
        });
    },
    checkKey() {
      if (process.env.VUE_APP_YOUTUBE_KEY)
        return process.env.VUE_APP_YOUTUBE_KEY;
      alert("アクセスキーを設定していません");
    }
  }
};
</script>
