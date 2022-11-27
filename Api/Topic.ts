import axios from "../Utils/Axios"
import storage from "../Utils/Storage"
import { TypeRequest, TypeCookie } from "../Types/main"
import { RouteParamValue } from "vue-router"
const cookie: TypeCookie = storage.parse("token")

/**
 * 获取话题
 *
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

export async function GetSingleTopic(
  id: string | RouteParamValue[] | number,
): Promise<TypeRequest> {
  return await axios({
    method: "get",
    url: "/topic/single",
    params: { id },
  })
}
