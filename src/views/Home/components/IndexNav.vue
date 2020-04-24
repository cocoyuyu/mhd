<template>
  <nav class="index-nav">
    <Router-link to="/classify">
      <div class="nav-item">
        <span class="icon iconfont icon-auto"></span>
        <p class="nav-text font-24">分类</p>
      </div>
    </Router-link>
    <Router-link to="/ranking">
      <div class="nav-item">
        <span class="iconfont icon-all"></span>
        <p class="nav-text font-24">排行</p>
      </div>
    </Router-link>
    <Router-link to="/vip">
      <div class="nav-item">
        <span class="iconfont icon-bussiness-man"></span>
        <p class="nav-text font-24">VIP专区</p>
      </div>
    </Router-link>
    <Router-link to="/hello/history">
      <div class="nav-item">
        <span class="iconfont icon-location"></span>
        <p class="nav-text font-24">历史</p>
      </div>
    </Router-link>
  </nav>
</template>

<script>
export default {
  name: 'IndexNav'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.index-nav {
  @include border-bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  .nav-item {
    .iconfont {
      font-size: 52px;
      line-height: 1.2;
    }
    .nav-text {
      color: #8d8d8d;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
