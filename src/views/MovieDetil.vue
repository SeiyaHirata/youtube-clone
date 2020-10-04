<template>
  <div class="about">
    <h1>詳細画面</h1>
    <h1>ID:{{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "MovieDetil",
  components: {},
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>
