<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          @click="toSearchMovies"
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          style="cursor:pointer;"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>YouTube App</v-toolbar-title>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
  methods: {
    toSearchMovies() {
      this.$router.push({ name: "SearchMovies" });
    }
  }
};
</script>
