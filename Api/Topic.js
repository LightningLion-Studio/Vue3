import axios from "../Utils/Axios"
const cookie = JSON.parse(localStorage.getItem("token"))

/**
 * 获取话题
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetTopic(order, limit, offset) {
  return await axios({
    method: "get",
    url: "/topic",
    params: { order, limit, offset },
  })
}
