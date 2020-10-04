<template>
  <div class="about">
    <youtube video-id="abLjAVtX2do" />
    <v-card>
      <p>
        {{ results.snippet.title }}
      </p>
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
      }
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
          alert(error);
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
