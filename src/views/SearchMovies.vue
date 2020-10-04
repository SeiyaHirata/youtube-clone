<template>
  <div class="home">
    <h1>検索一覧</h1>
    <v-slider
      v-model="id"
      label="thumb-color"
      thumb-color="red"
      thumb-label="always"
    ></v-slider>
    <v-btn @click="MovieDetil" color="primary">詳細へ{{ id }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "SearchMovies",
  components: {},
  data() {
    return {
      id: ""
    };
  },
  methods: {
    MovieDetil() {
      this.$router.push({ name: "MovieDetil", params: { id: this.id } });
    }
  }
};
</script>
