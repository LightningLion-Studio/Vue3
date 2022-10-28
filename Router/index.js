import { createRouter, createWebHistory } from "vue-router"
import empty from "@/Utils/Empty"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("@/Pages/Home.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "/discover",
      component: () => import("@/Pages/Discover.vue"),
      meta: {
        title: "发现",
      },
    },
    {
      path: "/user",
      component: () => import("@/Pages/User.vue"),
      meta: {
        title: "我的",
      },
    },
  ],
})

router.beforeEach(to => {
  if (to.path == "/user") {
    if (empty(localStorage.getItem("token"))) {
      return { name: "Home" }
    }
  }
  
  document.title = to.meta.title + " - 心电社区"
})

export default router
