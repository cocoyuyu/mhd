// 专门处理漫画相关的接口请求

// 引入封装好的 axios 实例
import request from '@/utils/request'

// 引入 apiHelper 加密获取首页推荐数据请求的请求体数据(data)
import { format } from '@/utils/apiHelper'

/**
 * 获取轮播图数据
 */

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

/**
 *  获取首页推荐数据
 */
export const getIndexRecommend = () => {
  return request({
    url: '/api/comic_v2/customerview',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: ' web-app',
      viewtype: 1
    }
  })
}

/**
 *  获取公共头部分类类型
 */
export const getTypes = () => {
  return request({
    url: 'api/comic_v2/getproad',
    method: 'GET',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: ' web-app',
      adgroupid: 125
    }
  })
}
/**
 *  获取首页推荐分类详情
 *  @param {String} subject 分类id
 *  @param {Number} pageno 当前页码
 *  @param {Number} pagesize 每页显示条数
 */
export const getTypeList = (subject, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: ' web-app'
    },
    data: format({
      subject,
      pageno,
      pagesize
    })
  })
}
