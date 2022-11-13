import axios from "../Utils/Axios"
// @ts-ignore
const cookie:Object = JSON.parse(localStorage.getItem("token"))

/**
 * 获取文章接口
 *
 * @api
 * @param {order} 1|2|3|4|5 参考文档
 * @param {limit} Number 限制
 * @param {offset} Number 偏移 用于懒加载翻页
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetPost(order:Number, limit:Number, offset:Number):Promise<object> {
  return await axios({
    method: "get",
    url: "/post",
    params: { order, limit, offset },
  })
}
