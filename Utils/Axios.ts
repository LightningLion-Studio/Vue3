import axios from "axios"
import { createDiscreteApi, darkTheme } from "naive-ui"
import router from "../Router"

const { message } = createDiscreteApi(["message"], {
  configProviderProps: {
    theme: darkTheme,
  },
})

const request: any = axios.create({
  baseURL: "/apis",
  timeout: 100000,
  auth: {
    // @ts-ignore
    username: import.meta.env.VITE_APP_ID,
    // @ts-ignore
    password: import.meta.env.VITE_APP_SECRET,
  },
})

/**
 * 请求拦截器
 *
 * @author Zero <1203970294@qq.com>
 * @since 2022
 */
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

/**
 *
 * 回调拦截器
 *
 * @api
 * @apiDescription 主要用来判断需要登录的接口是否已经登录
 * @author Zero <1203970294@qq.com>
 * @since 2022
 */
request.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.message == "您未登录 请先登录") {
      message.error(response.data.message)
      router.push("/")
    }
    return response
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)
export default request
