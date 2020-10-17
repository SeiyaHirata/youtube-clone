import Vue from "vue";
import VueRouter from "vue-router";
import SearchMovies from "../views/SearchMovies.vue";
// import MovieDetil from "../views/MovieDetil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SearchMovies",
    component: SearchMovies
  },
  // {
  //   path: "/movie/:id",
  //   name: "MovieDetil",
  //   component: MovieDetil
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
