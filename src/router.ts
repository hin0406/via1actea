import routes from "~pages";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./pages/HomePage/index.vue"),
    },
    ...routes,
  ],
});

export { router };
