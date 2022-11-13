import axios from "../Utils/Axios"
import storage from "../Utils/Storage";
const cookie = storage.parse("token")

/**
 * 获取话题
 *
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetTopic(order:Number, limit:Number, offset:Number):Promise<object> {
  return await axios({
    method: "get",
    url: "/topic",
    params: { order, limit, offset },
  })
}
