// 专门处理漫画相关的接口请求

// 引入封装好的 axios 实例
import request from '@/utils/request'

// 获取轮播图

export const getBanner = () => {
  // return 的是接口调用之后，axios 返回的 Promise 对象
  return request({
    url: '/api/comic_v2/getproad',
    method: 'GET',
    // 需要请求体参数，就提供 data
    // 需要查询字符串参数，就提供 params
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: 'web-app',
      adgroupid: 123
    }
  })
}
