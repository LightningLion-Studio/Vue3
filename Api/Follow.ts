import axios from "../Utils/Axios"
import storage from "../Utils/Storage"
import type { TypeCookie, TypeRequest } from "../Types/main"
const cookie:TypeCookie = storage.parse("token")

export async function GetUserFollowList(id:number = cookie.id,type:'follow' | 'fans',limit:number,offset:number) {
  return await axios({
    url: '/follow',
    params: {
      cookie: cookie.token,
      type, limit, offset
    }
  })
}
