import axios from "../Utils/Axios"

export async function GetPost() {
  return await axios({
    method: "get",
    url: "/post",
  })
}
