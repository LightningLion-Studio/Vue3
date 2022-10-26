import axios from "axios"

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 100000,
  auth: {
    username: import.meta.env.VITE_APP_ID,
    password: import.meta.env.VITE_APP_SECRET,
  },
})

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

request.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log(response)
    return response
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)
export default request
