import axios from "../Utils/Axios"

export async function GetPost() {
  return await axios({
    method: "pos",
    url: "/post",
  })
}
