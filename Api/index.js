import axios from "../Utils/Axios"
const cookie = JSON.parse(localStorage.getItem("token"))

export async function GetPost() {
  return await axios({
    method: "get",
    url: "/post",
    headers: { "Cache-Control": "no-cache" },
  })
}

export async function GetTopic() {
  return await axios({
    method: "get",
    url: "/topic",
  })
}

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
