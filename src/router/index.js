import Vue from "vue";
import VueRouter from "vue-router";
import SearchMovies from "../views/SearchMovies.vue";
import MovieDetil from "../views/MovieDetil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SearchMovies",
    component: SearchMovies
  },
  {
    path: "/movie/:id",
    name: "MovieDetil",
    component: MovieDetil
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
