import axios from "../Utils/Axios"

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
