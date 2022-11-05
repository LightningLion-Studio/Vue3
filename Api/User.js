import axios from "../Utils/Axios"
const cookie = JSON.parse(localStorage.getItem("token"))

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

export async function CheckName(username) {
  return await axios({
    method: "get",
    url: "/newuser/checkname",
    params: {
      username,
    },
  })
}
