import axios from "../Utils/Axios"
import storage from "../Utils/Storage"
import { TypeRequest, TypeCookie } from "../Types/main"
import { RouteParamValue } from "vue-router"
const cookie: TypeCookie = storage.parse("token")

/**
 * 获取帖子列表
 *
 * @return {Promise<TypeRequest>}
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetTopic(
  order: Number,
  limit: Number,
  offset: Number,
): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/topic",
    params: { order, limit, offset },
  })
}

/**
 * 获取话题列表
 *
 * @return {Promise<TypeRequest>}
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */

export async function GetTag(
  order: Number,
  limit: Number,
  offset: Number,
): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/tag",
    params: { order, limit, offset },
  })
}

/**
 * 获取单个帖子
 *
 * @return {Promise<TypeRequest>}
 * @author Zero <1203970284@qq.com>
 * @since 2022
 */
export async function GetSingleTopic(
  id: string | RouteParamValue[] | number,
): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/topic/single",
    params: { id },
  })
}
