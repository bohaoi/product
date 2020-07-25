import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        path: "/",
        name: "index",
        component: ()=>import('../views/index/index.vue')
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
