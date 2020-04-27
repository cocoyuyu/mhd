import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// 同步引入路由页面组件
// import Home from '../views/Home'
// import Classify from '../views/Classify'
// import Hello from '../views/Hello'
// import Favorite from '../views/Hello/Favorite'
// import History from '../views/Hello/History'
// import Login from '../views/Login'
// import Register from '../views/Register'
// import Ranking from '../views/Ranking'
// import My from '../views/My'
// import Search from '../views/Search'
// import SearchResult from '../views/SearchResult'
// import Vip from '../views/Vip'
// import City from '../views/City'

// 异步引入路由页面组件(路由懒加载)
// 改造：定义变量接收一个函数，把引入的文件返回
// const Home = () => import('../views/Home')
const Classify = () => import('../views/Classify')
const Hello = () => import('../views/Hello')
const Favorite = () => import('../views/Hello/Favorite')
const History = () => import('../views/Hello/History')
const Login = () => import('../views/Login')
const Register = () => import('../views/Register')
const Ranking = () => import('../views/Ranking')
const My = () => import('../views/My')
const Search = () => import('../views/Search')
const SearchResult = () => import('../views/SearchResult')
const Vip = () => import('../views/Vip')
const City = () => import('../views/City')

// 调用路由
Vue.use(VueRouter)

// 配置路由规则
const routes = [
  {
    path: '/home',
    // /* webpackChunkName:"home" */ 给拆分出去的js文件取个名字
    component: () => import(/* webpackChunkName:"home" */ '../views/Home')
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/city',
    component: City
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
    path: '/search-result',
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

router.beforeEach((to, from, next) => {
  // 根据 sessionStorage 或 store 判断 (state相应属性名字是否有值)即当前是否选择了城市
  if (!store.state.city.curCity && to.path !== '/city') {
    // 先去城市列表页面
    next({
      path: '/city',
      // 携带要去的页面的fullPath
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    // 否则爱去哪去哪
    next()
  }
})
export default router
