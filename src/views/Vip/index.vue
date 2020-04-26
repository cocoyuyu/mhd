<template>
  <div class="page-vip">
    <!-- 公共头部start -->
    <NormalHeader title=" VIP专区 "></NormalHeader>
    <!-- 公共头部 end -->

    <div class="vip-main">
      <CartoonList :list="cartoonList"></CartoonList>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'

import { getVIPList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelper'

export default {
  name: 'Vip',
  components: {
    NormalHeader,
    CartoonList
  },
  data () {
    return {
      VIPList: []
    }
  },

  computed: {
    cartoonList () {
      // [{bigbook_id:~, bigbook_name:~,}] => [{id:~, name:~}]
      // arr.map()方法->返回值：是一个集合，每一次循环的返回值的集合
      return this.VIPList.map(item => {
        // 循环时指定需要返回的字段与值,就是改变它的值~
        return {
          id: item.bigbook_id,
          coverurl: item.coverurl,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview
        }
      })
    }
  },

  methods: {
    getVIPList () {
      getVIPList().then(res => {
        // 解密 res.info ，并将得到的 JSON 字符串转换为对象
        const info = JSON.parse(unformat(res.info))
        console.log(info)
        this.VIPList = info.comicsList
      })
    }
  },
  created () {
    this.getVIPList()
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
