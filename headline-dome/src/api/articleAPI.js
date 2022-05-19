// 复用接口 文章列表接口 传参_page, _limit
// 导入 request.js
import request from '@/utils/request.js'

// 向外按需导出一个 API 函数
export const getArticleListAPI = function (_page, _limit) {
  return request.get('/articles', {
    // 请求参数
    params: {
      // _page:_page,
      // _limit:_limit 当形参实参命名一致 可简写为：
      _page,
      _limit

    }
  })
}
