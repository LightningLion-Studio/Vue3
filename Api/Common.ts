import axios from "../Utils/Axios"

/**
 *
 * @param name
 * @constructor
 */
export async function GetApp(name:string):Promise<object> {
  return await axios({
    method: "get",
    url: "/app",
    params: { name },
  })
}
