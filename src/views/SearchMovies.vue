<template>
  <div class="home">
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-text-field label="検索" v-model="keyword"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-btn
          fab
          dark
          small
          color="primary"
          @click="searchVideo"
          :disabled="!keyword || loading > 0"
          :loading="loading > 0"
        >
          <v-icon dark>
            mdi-magnify
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

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
            @click="toMovieDetil(result.id.videoId)"
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
      results: [],
      keyword: "アップスターツ",
      loading: 0,
      params: {
        q: "", // 検索クエリを指定します。
        part: "snippet",
        type: "video",
        maxResults: "20", // 最大検索数
        key: this.checkKey()
      }
    };
  },
  methods: {
    toMovieDetil(videoId) {
      this.$router.push({ name: "MovieDetil", params: { id: videoId } });
    },
    searchVideo() {
      this.params.q = this.keyword;
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params
        })
        .then(res => {
          console.log(res.data.items);
          this.results = res.data.items;
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
