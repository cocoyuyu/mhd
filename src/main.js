import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/base.scss'

Vue.config.productionTip = false

// 全局定义一个过滤器
Vue.filter('formatYi', (value) => { // 接收的第一个参数是要过滤显示的数据，必须有返回值
  console.log('value', value)
  const test = (value / 100000000).toFixed(2)
  return `${test}亿`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
