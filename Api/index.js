import axios from "axios"

export async function GetPost() {
  return await axios({
    method: "post",
    url: "/post",
  })
}
