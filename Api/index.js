import axios from "../Utils/Axios"
const cookie = JSON.parse(localStorage.getItem("token"))

/**
 *
 * 获取文口
 * @author Zero
 * @sice 2022
 */
export async function GetPost() {
  return await axios({
    method: "get",
    url: "/post",
    headers: { "Cache-Control": "no-cache" },
  })
}

/**
 *
 * 获取话题
 * @author Zero
 * @since 2022
 */
export async function GetTopic() {
  return await axios({
    method: "get",
    url: "/topic",
  })
}

/**
 *
 * 登录
 * @author Zero
 * @since 2022
 */
export async function Login(username, password) {
  return await axios({
    method: "get",
    params: {
      username,
      password,
    },
    url: "/newuser/login",
  })
}

/**
 *
 * 获取用户信息
 * @author Zero
 * @since 2022
 */
export async function UserInfo() {
  console.log(cookie.token)
  return await axios({
    method: "get",
    url: "/user",
    params: {
      cookie: cookie.token,
    },
  })
}
