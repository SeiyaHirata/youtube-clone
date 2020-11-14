import Vue from "vue";
import VueRouter from "vue-router";
import MovieDetil from "../views/MovieDetil.vue";
import SearchMovies from "../views/SearchMovies.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/movie:id",
    name: "MovieDetil",
    component: MovieDetil
  },
  {
    path: "/",
    name: "SearchMovies",
    component: SearchMovies
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
