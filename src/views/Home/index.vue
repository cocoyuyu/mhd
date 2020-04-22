<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <!-- 首页头部 end -->
    <!-- 轮播图 begin -->
    <Swiper class="my-swiper" @change="onChange" v-if="bannerList.length > 0">
      <!-- 组件标签里的内容是插槽内容 -->
      <SwiperItem v-for="item in bannerList" :key="item.id">
        <img
          :src="item.imageurl"
          alt
        />
      </SwiperItem>
    </Swiper>
    <!-- 轮播图 end -->
  </div>
</template>

<script>
// 引入封装的 swiper 组件，使用/src文件夹的别名@
// 引入方式一
// import Swiper from '@/components/Swiper/Swiper'
// import SwiperItem from '@/components/Swiper/SwiperItem'

// 引入方式二
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner } from '@/api/cartoon'
export default {
  name: 'Home',
  data () {
    return {
      bannerList: []
    }
  },
  components: {
    // 注册为局部组件
    Swiper,
    SwiperItem
  },
  methods: {
    onChange (index) {
      // console.log('hello', index)
    }
  },
  // 模拟跨域请求咪咕影院数据，注意要通过 * 代理中间层地址拼上定义的统一的前缀 *，去拿目标数据
  // created () {
  //   fetch('http://localhost:8080/migu/lovev/miguMovie/data/seeFilmData.jsp', { method: 'POST' }).then(response => { response.json() }).then(res => console.log(res))
  // }
  // 在 created 钩子函数中调用向接口发送请求的方法，拿到axios 返回的 Promise 对象
  created () {
    getBanner()
      .then(res => {
      // 漫画岛项目的每个接口都有 code 字段，字段值为200，这个接口才ok
        if (res.code === 200) {
        // ok
          // console.log(res)
          this.bannerList = res.info
        } else {
        // no ok
        // todo, 目前先使用丑陋的 alert，后面可用vant组件库中的组件优化
          alert(res.code_msg)
        }
      })
      .catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
  }
}
</script>

<style lang="scss" scoped>
// 引入共用minxins.scss 文件，低版本的引入@符号前要加~
@import '@/assets/styles/mixins.scss';
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-header {
    // 在对应位置使用相应的 minxin
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    height: 44px;
    .user-btn {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/user.png") no-repeat;
      background-size: 100%;
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url("../../assets/logo.png") no-repeat;
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/search.png") no-repeat;
      background-size: 100%;
    }
  }

  .my-swiper img{
    width: 100%;
    height: 100%
  }
}
</style>
