<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- <horizontal-scroll :style="`height:${windowSize.y}px `"> -->

    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- </horizontal-scroll> -->
  </v-app>
</template>

<script>
// import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  name: "App",

  components: {
    // HorizontalScroll
  },
  data() {
    return {
      windowSize: {
        x: 0,
        y: 0
      }
    };
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    }
  },
  mounted() {
    this.onResize();
  }
};
</script>

<style lang="css">
.v-main__wrap {
  /* background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg"); */
  background-color: lightgrey;
}
</style>
