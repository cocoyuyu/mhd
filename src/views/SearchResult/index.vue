<template>
  <div class="page-search-result">
    <NormalHeader :title="keyword" :showRight="false"></NormalHeader>

    <div class="search-result-main">
      <CartoonList :list="cartoonList"></CartoonList>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'

import { getSearchResult } from '@/api/cartoon'
export default {
  name: 'SearchResult',
  data () {
    return {
      keyword: this.$route.query.keyword,
      list: []
    }
  },
  computed: {
    cartoonList () {
      return this.list.map(item => {
        return {
          id: item.id,
          coverurl: item.coverurl,
          name: item.name,
          author: item.author,
          view: 123456789  // 占位数据
        }
      })
    }
  },
  methods: {
    getSearchResult (name) {
      getSearchResult(name)
        .then(res => {
          if (res.code === 200) {
            // console.log(res)
            this.list = res.info
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    }
  },
  components: {
    NormalHeader,
    CartoonList
  },
  created () {
    this.getSearchResult(this.keyword)
  }
}
</script>

<style lang="scss" scoped>
.page-search-result {
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-result-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
