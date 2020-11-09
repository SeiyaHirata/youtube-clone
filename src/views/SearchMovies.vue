<template>
  <div class="home">
    <v-row>
      <v-col cols="8" sm="6" md="4">
        <v-text-field
          label="検索"
          v-model="keyword"
          :disabled="loading > 0 || checkApi != ''"
        >
        </v-text-field>
      </v-col>
      <v-col cols="4" sm="6" md="4">
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
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SearchMovies",
  components: {},
  data() {
    return {
      results: [],
      keyword: "プログラミン！！",
      loading: 0,
      params: {
        q: "",
        part: "snippet",
        type: "video",
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
    searchVideo() {
      this.params.q = this.keyword;
    },
    checkKey() {
      if (process.env.VUE_APP_YOUTUBE_KEY)
        return process.env.VUE_APP_YOUTUBE_KEY;
      alert("アクセスキーを設定していません");
    }
  }
};
</script>
