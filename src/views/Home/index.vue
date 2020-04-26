<template>
  <div class="page-home">
    <!-- 首页头部 begin -->
    <IndexHeader></IndexHeader>
    <!-- 首页头部 end -->
    <div class="index-main">
      <!-- 轮播图 begin -->
      <Swiper class="my-swiper" @change="onChange" v-if="bannerList.length > 0">
        <!-- 组件标签里的内容是插槽内容 -->
        <SwiperItem v-for="item in bannerList" :key="item.id">
          <img :src="item.imageurl" alt />
        </SwiperItem>
      </Swiper>
      <!-- 轮播图 end -->

      <!-- nav start -->
      <IndexNav></IndexNav>
      <!-- nav end -->

      <!-- section start -->
      <!-- <index-recommend></index-recommend> -->
      <!-- 父子通信-调用子组件IndexRecommend时传递值给info这个prop，值是动态的，所以要加v-bind -->
      <IndexRecommend
        v-for="item in recommendList"
        :key="item.specialid"
        :info="item"
      ></IndexRecommend>
      <!-- section end -->
    </div>
  </div>
</template>

<script>
// 引入封装的 swiper 组件，使用/src文件夹的别名@
// 引入方式一
// import Swiper from '@/components/Swiper/Swiper'
// import SwiperItem from '@/components/Swiper/SwiperItem'

// 引入方式二
import { Swiper, SwiperItem } from '@/components/Swiper'
import IndexHeader from '@/views/Home/components/IndexHeader'
import IndexNav from '@/views/Home/components/IndexNav'
import IndexRecommend from '@/views/Home/components/IndexRecommend'
import { getBanner, getIndexRecommend } from '@/api/cartoon'
export default {
  name: 'Home',
  data () {
    return {
      bannerList: [],
      recommendList: []
    }
  },
  components: {
    // 注册为局部组件
    Swiper,
    SwiperItem,
    IndexNav,
    IndexRecommend,
    IndexHeader
  },
  methods: {
    onChange (index) {
      // console.log('hello', index)
    },
    getBanner () {
      getBanner().then(res => {
        // 漫画岛项目的每个接口都有 code 字段，字段值为200，这个接口才ok
        // ok
        // console.log(res)
        this.bannerList = res.info
      })
    },
    getIndexRecommend () {
      getIndexRecommend().then(res => {
        // ok
        // console.log(res)
        this.recommendList = res.info
      })
    }
  },
  // 模拟跨域请求咪咕影院数据，注意要通过 * 代理中间层地址拼上定义的统一的前缀 *，去拿目标数据
  // created () {
  //   fetch('http://localhost:8080/migu/lovev/miguMovie/data/seeFilmData.jsp', { method: 'POST' }).then(response => { response.json() }).then(res => console.log(res))
  // }
  // 在 created 钩子函数中调用向接口发送请求的方法，拿到axios 返回的 Promise 对象
  created () {
    this.getBanner()
    this.getIndexRecommend()
  }
}
</script>

<style lang="scss" scoped>
// 引入共用minxins.scss 文件，低版本的引入@符号前要加~
// @import "@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-main {
    flex: 1;
    overflow-y: auto; // 如果溢出框，则应该提供滚动机制
  }
  .my-swiper img {
    width: 100%;
    height: 100%;
  }
}
</style>
