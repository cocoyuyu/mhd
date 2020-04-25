<template>
  <header class="index-header">
    <router-link to="/my">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </router-link>
    <div class="header-logo"></div>
    <router-link to="/search">
      <div class="header-search"></div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style lang="scss" scoped>
.index-header {
  @import "@/assets/styles/mixins.scss";
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
    background: url("~@/assets/icon/user.png") no-repeat;
    background-size: 100%;
  }
  .header-logo {
    width: 92px;
    height: 28px;
    background: url("~@/assets/logo.png") no-repeat;
    background-size: 100%;
  }
  .header-search {
    width: 25px;
    height: 25px;
    background: url("~@/assets/icon/search.png") no-repeat;
    background-size: 100%;
  }
}
</style>
