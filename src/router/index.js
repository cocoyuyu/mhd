import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
import Hello from '../views/Hello'
import Favorite from '../views/Hello/Favorite'
import History from '../views/Hello/History'
import Login from '../views/Login'
import Register from '../views/Register'
import Ranking from '../views/Ranking'
import My from '../views/My'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'

// 调用路由
Vue.use(VueRouter)

// 配置路由规则
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/hello',
    component: Hello,
    children: [
      {
        path: 'favorite',
        component: Favorite
      },
      {
        path: 'history',
        component: History
      },
      {
        path: '',
        redirect: '/history'
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/ranking',
    component: Ranking
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/searchResult',
    component: SearchResult
  },
  {
    path: '/vip',
    component: Vip
  },
  {
    path: '/',
    redirect: '/home'
  }

]

// 实例化路由配置规则
const router = new VueRouter({
  routes
})

export default router
