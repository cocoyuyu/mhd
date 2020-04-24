<template>
  <div class="page-ranking">
    <!-- 公共头部start -->
    <NormalHeader title=" 排行榜 "></NormalHeader>
    <HeaderType></HeaderType>
    <!-- 公共头部 end -->

    <div class="ranking-main">
      <CartoonList></CartoonList>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
export default {
  name: 'Ranking',
  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  }
}
</script>

<style lang="scss" scoped>
.page-ranking {
  display: flex;
  flex-direction: column;
  height: 100%;

  .ranking-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
