<template>
  <section class="go-top font-20" v-show="visible" @click="handleClick">
    <div class="icon-arrow-up"></div>
    <span>顶部</span>
  </section>
</template>

<script>
export default {
  name: 'GoTop',

  data () {
    return {
      visible: false
    }
  },

  methods: {
    handleClick () {
      console.log(123123)
      // 让当前组件的DOM对象的父元素的scrollTop 设置为 0
      this.$el.parentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.go-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  text-align: center;
  position: fixed;
  z-index: 999;
  bottom: 50px;
  right: 5px;
  color: #fff;
  .icon-arrow-up {
    width: 16px;
    height: 10px;
    margin-bottom: 4px;
    background: url("./assets/icon-arrow-up.png") no-repeat;
    background-size: 100%;
  }
}
</style>
