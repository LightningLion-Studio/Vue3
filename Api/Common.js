import axios from "../Utils/Axios"

export async function GetApp(name) {
  return await axios({
    method: "get",
    url: "/app",
    params: {
      name
    }
  })
}
