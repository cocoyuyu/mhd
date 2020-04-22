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
    <Swiper class="my-swiper" @change="onChange">
      <!-- 组件标签里的内容是插槽内容 -->
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup201906/9315f7dd68b346928219f29bd9c89e60.jpg"
          alt
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup201903/22b43c03a0f943cda001c5338fe0ddd9.jpg"
          alt
        />
      </SwiperItem>
      <SwiperItem>
        <img
          src="https://img.manhuadao.cn/upload/AdGroup202003/dda50e4233e34186910fd490aea1cd91.jpg"
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

export default {
  name: 'Home',
  components: {
    // 注册为局部组件
    Swiper,
    SwiperItem
  },
  methods: {
    onChange (index) {
      console.log('hello', index)
    }
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
