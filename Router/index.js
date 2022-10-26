import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/Pages/Home.vue"),
    },
    {
      path: "/discover",
      component: () => import("@/Pages/Discover.vue"),
    },
  ],
})

export default router
