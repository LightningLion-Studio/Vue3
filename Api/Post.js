import axios from "../Utils/Axios"
const cookie = JSON.parse(localStorage.getItem("token"))

/**
 *
 * 获取文章接口
 * @author Zero
 * @since 2022
 */
export async function GetPost(order, limit, offset) {
  return await axios({
    method: "get",
    url: "/post",
    params: { order, limit, offset },
  })
}
