import axios from "../Utils/Axios"
import storage from "../Utils/Storage"
import { TypeRequest } from "../Types/main"
const cookie = storage.parse("token")

/**
 * 登录
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function Login(
  username: String,
  password: String,
): Promise<object> {
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
export async function UserInfo(): Promise<object> {
  return await axios.get("/user", {
    params: {
      cookie: cookie.token,
    },
  })
}

/**
 * 注册：检查用户名是否重复
 *
 * @param username {string} 用户名
 * @constructor
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function CheckName(username: String): Promise<object> {
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
export async function SendMail(email: String): Promise<object> {
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
interface RegisterParams {
  username: String
  password: String
  email: String
  code: String
}
export async function Register(data: RegisterParams): Promise<TypeRequest> {
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

/**
 * 获取用户信息
 *
 * @author Zero
 * @since 2022
 */
export async function GetUserSingleInfo(id: number): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/user/info",
    params: { id },
  })
}
