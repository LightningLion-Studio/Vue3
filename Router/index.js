import { createRouter, createWebHistory } from "vue-router"
import { createDiscreteApi, darkTheme } from "naive-ui"
import empty from "@/Utils/Empty"

const { message, loadingBar } = createDiscreteApi(["message", "loadingBar"], {
  configProviderProps: {
    theme: darkTheme,
  },
})

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
      name: "login",
      path: "/login",
      component: () => import("@/Pages/User/Login.vue"),
      meta: {
        title: "登录",
      },
    },
    {
      name: "user",
      path: "/user",
      component: () => import("@/Pages/User/Center.vue"),
      meta: {
        title: "我的",
      },
    },
  ],
})

router.beforeEach(to => {
  loadingBar.start()
  if (to.path == "/user") {
    if (empty(localStorage.getItem("token"))) {
      message.warning("请先登录")
      return { name: "login" }
    }
  }

  document.title = to.meta.title + " - 心电社区"
})

router.afterEach((to, from, failure) => {
  if (failure) {
    loadingBar.error()
    if (to.path == from.path) {
      message.failure("错误")
    }
    console.log(from)
  } else {
    loadingBar.finish()
  }
})

export default router
