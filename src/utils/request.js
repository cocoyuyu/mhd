// axios 二次封装
// 引入 axios
import axios from 'axios'
// 引入 vant UI 组件库中的 Notify 方法, 替换掉原来比较丑的alert方法
import { Notify } from 'vant'

// 创建一个 axios 实例对象
const instance = axios.create({
  // 配置基准路径,使用 环境变量控制
  baseURL: process.env.NODE_ENV === 'production' ? 'http://111.230.200.247' : 'http://localhost:8080',
  // 超时时间设置 ms -> 超过这个时间未从接口拿到数据就报错
  timeout: 5000
})
// 添加请求拦截器 ! 用创建的实例去调用拦截器 ！
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
// 响应两种状态：成功 又分状态码不同的情况
//              失败
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么
  const res = response.data
  if (res.code !== 200) {
    // 如果状态码不是200就提示错误信息并报错，代码不再继续
    Notify(res.code_msg)
    return Promise.reject(new Error(res.code_msg))
  }
  return response.data
}, (error) => {
  // 对响应错误做点什么
  console.log(error)
  Notify('网络异常，请稍后重试')
  return Promise.reject(error)
})
// 暴露这个实例
export default instance
