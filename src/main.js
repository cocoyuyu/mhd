import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'

import './assets/styles/base.scss'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载高度，此处设置为1.3倍的视口高度
  error: require('./assets/logo.png'), // 加载真实图片出错时，显示的替代图片
  // error: '/logo.png',  // public文件夹下有logo.png 时可这么用
  loading: require('./assets/logo.png'),
  attempt: 1 // 尝试加载真实图片的次数
  // error 与 loading 可使用线上图片链接，也可使用本地图片链接，注意：
  // 1. 如果地址是 src 文件夹中的图片，需要使用 require 引入
  // 2. 如果地址是 public 文件夹中的，可以将 public 看成 / 去组织 url 地址
})

// 全局定义一个过滤器
Vue.filter('formatYi', (value) => { // 接收的第一个参数是要过滤显示的数据，必须有返回值
  // console.log('value', value)
  const test = (value / 100000000).toFixed(2)
  return `${test}亿`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
