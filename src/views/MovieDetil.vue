<template>
  <div>
    <!-- 768px以上で表示 -->
    <v-navigation-drawer
      app
      :permanent="768 < width"
      right
      :width="width * 0.3"
    >
      <v-container>
        <h4>次の動画(ここはダミーデータです)</h4>
        <span v-for="(movie, index) in moviesData" :key="index">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              class="mb-2"
              @click="toMovieDetil(movie.id.videoId)"
            >
              <v-img :src="movie.snippet.thumbnails.medium.url"></v-img>
              <v-card-subtitle>
                {{ movie.snippet.title }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ movie.snippet.channelTitle }}
              </v-card-subtitle>
            </v-card>
          </v-hover>
        </span>
      </v-container>
    </v-navigation-drawer>
    <youtube
      :video-id="id"
      :width="768 >= width ? width * 0.9 : width * 0.6"
      :height="768 >= width ? (width * 0.9) / 2 : (width * 0.6) / 2"
    />
    <v-card-title v-if="checkApi">
      {{ checkApi }}
    </v-card-title>
    <v-card-title>
      {{ results.snippet.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ results.snippet.channelTitle }}
    </v-card-subtitle>
    <v-divider inset></v-divider>
    <!-- 768px以下で表示 -->
    <v-container v-if="768 >= width">
      <h4>次の動画(ここはダミーデータです)</h4>
      <v-row>
        <v-col v-for="(movie, index) in moviesData" :key="index">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              class="mb-2"
              @click="toMovieDetil(movie.id.videoId)"
            >
              <v-img :src="movie.snippet.thumbnails.medium.url"></v-img>
              <v-card-subtitle>
                {{ movie.snippet.title }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ movie.snippet.channelTitle }}
              </v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import VueYoutube from "vue-youtube";
import axios from "axios";
import detilData from "../../dummy-data/detilData.json";
import moviesData from "../../dummy-data/movies.json";

Vue.use(VueYoutube);

export default {
  name: "MovieDetil",
  components: {},
  created() {
    this.searchVideo();
  },
  data() {
    return {
      results: {},
      id: this.$route.params.id,
      params: {
        part: "snippet,contentDetails,statistics,status",
        key: this.checkKey(),
        id: this.$route.params.id
      },
      checkApi: "",
      val: "",
      width: window.innerWidth,
      moviesData: moviesData.items
    };
  },
  watch: {
    $route() {
      location.reload();
    }
  },
  methods: {
    async searchVideo() {
      axios
        .get("https://www.googleapis.com/youtube/v3/videos", {
          params: this.params
        })
        .then(res => {
          this.results = res.data.items[0];
        })
        .catch(error => {
          console.log(error);
          if (error.response.status == "403") {
            this.checkApi =
              "本日のYouTubeAPIの使用上限に達しました、現在ダミーデータを使用しています、検索機能は使用できません";
            this.results = detilData.items[0];
          }
        });
    },
    handleResize() {
      this.width = window.innerWidth;
    },
    checkKey() {
      if (process.env.VUE_APP_YOUTUBE_KEY)
        return process.env.VUE_APP_YOUTUBE_KEY;
      alert("アクセスキーを設定していません");
    },
    toMovieDetil(videoId) {
      this.$router.push({ name: "MovieDetil", params: { id: videoId } });
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>
