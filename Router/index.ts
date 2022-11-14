import { createRouter, createWebHistory } from "vue-router"
import { createDiscreteApi, darkTheme } from "naive-ui"
import empty from "@/Utils/Empty"

const { message, loadingBar } = createDiscreteApi(["message", "loadingBar"], {
  configProviderProps: {
    theme: darkTheme,
  },
})

const router = createRouter({
  // @ts-ignore
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
      name: "app",
      path: "/apps/:e",
      component: () => import("@/Pages/Apps.vue"),
      meta: {
        title: "App",
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
    {
      name: "newdraft",
      path: "/post/newdraft",
      component: () => import("@/Pages/Post/NewDraft.vue"),
      meta: {
        title: "新建草稿",
      },
    },
    {
      name: "single",
      path: "/post/:id",
      component: () => import("@/Pages/Post/SinglePost.vue"),
      meta: {
        title: "文章详情",
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
      message.error("您当前正处于此页面")
    }
  } else {
    loadingBar.finish()
  }
})

export default router
