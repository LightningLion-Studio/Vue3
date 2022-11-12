import axios from "../Utils/Axios"

export async function GetApp(name:string):Promise<unknown> {
  return await axios({
    method: "get",
    url: "/app",
    params: { name },
  })
}
