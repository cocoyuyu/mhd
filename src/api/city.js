// 专门处理 城市相关 接口请求
// 注意： 城市相关接口是找 卖座网 拿来的，不能使用专门针对漫画岛封装的axios请求

// 直接使用 axios

import axios from 'axios'

export const getCityList = () => {
  // 返回 请求后 需要的 promise 对象，在axios方法中传入配置项
  return axios({
    url: '/maizuo/gateway?k=5283770',
    // 必传请求头才能拿到数据
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15853617601030792151428","bc":"150200"}',
      'X-Host': 'mall.film-ticket.city.list'
    },
    method: 'GET'
  })
}
