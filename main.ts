import { createApp } from "vue"
import { createPinia } from "pinia"

// 通用字体
import "vfonts/Lato.css"
// 等宽字体
import "vfonts/FiraCode.css"

import naive from "naive-ui"

import App from "./App.vue"
import router from "./Router"

import "./Assets/style.less"

const app = createApp(App)
import { createDiscreteApi, darkTheme } from "naive-ui"

const { message, dialog } = createDiscreteApi(["message", "dialog"], {
  configProviderProps: {
    theme: darkTheme,
  },
})

app.config.globalProperties.$message = message
app.config.globalProperties.$dialog = dialog

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount("#app")

export default app
