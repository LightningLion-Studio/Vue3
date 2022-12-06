/**
 * Token存储定义
 *
 * @author Zero
 * @since 2022
 */
interface TypeCookie {
  id: number
  data: string
  token: string
}

/**
 * 基础数据返回结构定义
 *
 * @returns Promise<object>
 * @author Zero
 * @since 2022
 */
interface TypeRequest {
  data: {
    id: number
    message: string
    data: void
  }
  config: {
    params: object
    data: object
    url: string
    baseURL: string
  }
}

export { TypeCookie, TypeRequest }
