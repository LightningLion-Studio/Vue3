import axios from "../Utils/Axios"
import { TypeCookie } from "../Types/main"

const cookie: TypeCookie = JSON.parse(localStorage.getItem("token")!)

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
export async function GetPost(
  order: Number,
  limit: Number,
  offset: Number,
): Promise<object> {
  return await axios({
    method: "get",
    url: "/post",
    params: { order, limit, offset },
  })
}

/**
 * 获取单篇文章
 *
 * @param id 文章id
 * @constructor
 */
export async function GetSinglePost(id: any): Promise<object> {
  return await axios({
    method: "get",
    url: "/post/single",
    params: { id },
  })
}

/**
 * 发布草稿
 *
 * @params title, data, comment, cookie, poster
 * @returns
 * @author Zero
 * @since 2022
 */
export async function newDraft(
  title: string,
  data: string,
  comment: string,
  poster: string,
  id: number,
  category: number,
) {
  return await axios({
    method: "post",
    url: "/postcreate",
    params: { cookie: cookie.token },
    data: { title, data, comment, poster, id, category },
  })
}
