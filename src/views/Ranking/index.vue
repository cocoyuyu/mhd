<template>
  <div class="page-ranking">
    <!-- 公共头部start -->
    <NormalHeader title=" 排行榜 "></NormalHeader>
    <!-- 父子通信，监听子组件的自定义事件 -->
    <HeaderType :types="types" @click="onTypeChange"></HeaderType>
    <!-- 公共头部 end -->

    <div class="ranking-main">
      <CartoonList :list="list"></CartoonList>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'

import { getRankList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelper' // 引入解码数据工具

export default {
  name: 'Ranking',
  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  },

  data () {
    return {
      // 排行榜分类信息不知道从哪里得到写死好了，据分析下方列表根据ranktype不同请求不同的数据
      types: [
        { id: '1', description: '热搜榜', ranktype: 6 },
        { id: '2', description: '人气榜', ranktype: 1 },
        { id: '3', description: '畅销榜', ranktype: 4 },
        { id: '4', description: '新书榜', ranktype: 2 },
        { id: '5', description: '完结榜', ranktype: 5 },
        { id: '6', description: '免费榜', ranktype: 3 }
      ],
      list: []
    }
  },

  methods: {
    // 根据 ranktype 发请求找数据
    getRankList (ranktype) {
      getRankList(ranktype)
        .then(res => {
          if (res.code === 200) {
            // 解密 res.info ，并将得到的 JSON 字符串转换为对象
            const info = JSON.parse(unformat(res.info))
            // console.log(info)
            this.list = info.ranklist
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    // 切换分类类型时触发
    onTypeChange (payload) {
      // console.log(payload)
      // 取出 payload 中的type 中的 ranktype
      const ranktype = payload.type.ranktype
      // 重新发送 B 接口请求并携带参数
      this.getRankList(ranktype)
    }
  },

  created () {
    this.getRankList(this.types[0].ranktype)
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
