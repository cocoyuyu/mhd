<template>
  <div class="page-vip">
    <!-- 公共头部start -->
    <NormalHeader title=" VIP专区 "></NormalHeader>
    <HeaderType></HeaderType>
    <!-- 公共头部 end -->

    <div class="vip-main">
      <CartoonList></CartoonList>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
export default {
  name: 'Vip',
  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  }
}
</script>

<style lang="scss" scoped>
.page-vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
