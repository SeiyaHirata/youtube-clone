<template>
  <div class="about">
    <youtube :video-id="id" />
    <v-card>
      <v-card-title v-if="checkApi">
        {{ checkApi }}
      </v-card-title>

      <v-card-title>
        {{ results.snippet.title }}
      </v-card-title>
      <p>
        {{ results }}
      </p>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import VueYoutube from "vue-youtube";
import axios from "axios";
import testDetilData from "../../detilData.json";
Vue.use(VueYoutube);

export default {
  name: "MovieDetil",
  components: {},
  created() {
    this.searchVideo();
  },
  data() {
    return {
      results: [],
      id: this.$route.params.id,
      params: {
        part: "snippet,contentDetails,statistics,status",
        key: this.checkKey(),
        id: this.$route.params.id
      },
      checkApi: ""
    };
  },
  methods: {
    searchVideo() {
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
            this.results = testDetilData.items[0];
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
