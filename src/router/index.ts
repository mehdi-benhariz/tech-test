import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
    // import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/max",
    name: "Max",
    component: () => import(/* webpackChunkName: "about" */ "../views/Max.vue"),
  },
  {
    path: "/kleed",
    name: "Kleed",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Kleed.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
