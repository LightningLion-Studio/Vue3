import axios from "../Utils/Axios"

/**
 * 获取app详细信息
 * @param name
 * @constructor
 */
export async function GetApp(name: string): Promise<object> {
  return await axios({
    method: "get",
    url: "/app",
    params: { name },
  })
}

/**
 * 获取公告
 *
 * @params
 * @returns [object]
 * @author Zero
 * @since 2022
 */
export async function GetAnnouncement():Promise<object> {
  return await axios.get("/announcement")
}
