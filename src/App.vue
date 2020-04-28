<template>
  <div id="app">
    <!-- 多组件过渡,路由切换动画时，入场出场动画相同 -->
    <!-- <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft"
      mode="in-out"
    >
      <router-view />
    </transition> -->

    <!--
      需求：
        1. 分类页，入场使用 slideInRight
                  出场使用 slideOutRight
        2. 排行榜页面，入场使用 slideInDown
                      出场使用 slideOutUp

      需求解决尝试方案一、
          单独在具体页面中使用动画，效果可以出现，但是有瑕疵，会出现空白。
      需求解决尝试方案二、
          多元素/多组件过渡动画
     -->
    <transition
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      enterActiveClass: '',
      leaveActiveClass: ''
    }
  },
  watch: {
    $route (to, from) {
      console.log(to.meta.enterActiveClass)
      this.leaveActiveClass = from.meta.leaveActiveClass
      this.enterActiveClass = to.meta.enterActiveClass
    }
  }
}

</script>
