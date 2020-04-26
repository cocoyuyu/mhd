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

/**
 *  获取分类数据
 */
export const getRankList = (ranktype, pageno = 1, pagesize = 20) => {
  return request({
    url: '/api/comic_v2/comicsrank',
    method: 'POST',
    params: {
      apptype: 8,
      appversion: '1.0',
      channel: ' web-app'
    },
    data: format({
      ranktype,
      pageno,
      pagesize
    })
  })
}

/**
 *  获取 vip 数据
 */
export const getVIPList = () => {
  return request({
    url: '/api/comic_v2/comicsfilterlist_v2?apptype=8&appversion=1.0&channel=web-app',
    method: 'POST',
    data: format({
      pageno: 1,
      pagesize: 15,
      special: 892
    })
  })
}

/**
 *  获取 热门搜索 数据
 */
export const getHotSearch = () => {
  return request({
    url: '/api/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8',
    method: 'GET'
  })
}
/**
 *  根据 搜索关键字 获取联想词
 * @param {String} name 关键字
 */
export const getSearchExpand = (name) => {
  return request({
    url: `/api/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&name=${name}&type=2`,
    method: 'GET'
  })
}

/**
 *  获取搜索结果页面数据
 */
export const getSearchResult = (name) => {
  return request({
    url: '/api/comic_v2/searchbookauthor?apptype=8&appversion=1.0&channel=web-app&type=2&pageno=1&pagesize=100',
    method: 'GET',
    params: {
      name
    }
  })
}
