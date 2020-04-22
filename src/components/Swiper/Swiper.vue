<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 组件模板里指定插槽位置 -->
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入 Swiper 核心与 Swiper样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Swiper',
  props: {
    autoplay: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    // new 之前的this 是指当前组件的实例
    const that = this
    /* eslint-disable */
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 分页器
      pagination: {
        el: ".swiper-pagination"
      },
      // 自动轮播(属性配置)
      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true
      } : false,
      on: {
        // 此处的 this 指向Swiper的实例
        slideChangeTransitionEnd: function(){
          // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          // realIndex 不会将 loop 复制的块计算在内
          // console.log(this.realIndex)
          // 用当前组件的实例去调用自定义事件
          that.$emit('change', this.realIndex)
        },
      },
    });
    /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 180px;
}
.swiper-pagination-bullet {
  opacity: 1;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.7);
}
.swiper-pagination-bullet-active {
  width: 20px;
  height: 10px;
  background: url("../../assets/icon/dot.png") no-repeat;
  background-size: 100%;
}
</style>
