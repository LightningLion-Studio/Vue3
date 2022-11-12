import axios from "../Utils/Axios"
const cookie:Object = JSON.parse(localStorage.getItem("token"))

/**
 * 获取话题
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetTopic(order:Number, limit:Number, offset:Number) {
  return await axios({
    method: "get",
    url: "/topic",
    params: { order, limit, offset },
  })
}
