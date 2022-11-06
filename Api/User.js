import axios from "../Utils/Axios"
const cookie = JSON.parse(localStorage.getItem("token"))

/**
 * 登录
 *
 * @author Zero <1203970284@qq.com>
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
 * 获取用户信息
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function UserInfo() {
  return await axios.get("/user", {
    params: {
      cookie: cookie.token,
    },
  })
}

/**
 * 注册：检查用户名是否重复
 *
 * @param {username} String 用户名
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function CheckName(username) {
  return await axios({
    method: "get",
    url: "/newuser/checkname",
    params: {
      username,
    },
  })
}

/**
 * 注册：邮箱验证码
 *
 * @param {mail} String email
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function SendMail(email) {
  return await axios({
    method: "get",
    url: "/newuser/sendmail",
    params: {
      email,
    },
  })
}

/**
 * 注册
 *
 * @param {data} Object username,password,email,code
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function Register(data) {
  return await axios({
    method: "get",
    url: "/newuser/register",
    params: {
      username: data.username,
      password: data.password,
      email: data.email,
      code: data.code,
    },
  })
}
