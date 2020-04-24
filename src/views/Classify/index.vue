<template>
  <div class="page-classify">
    <!-- 公共头部start -->
    <NormalHeader title=" 分类 "></NormalHeader>
    <!-- 子父通信，监听子组件的自定义事件 -->
    <HeaderType :types="types" @click="onTypeChange"></HeaderType>
    <!-- 公共头部 end -->

    <div class="classify-main">
      <!-- 父子通信，通过属性绑定传递给子组件 -->
      <CartoonList :list="list"></CartoonList>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'

import { unformat } from '@/utils/apiHelper.js' // 引入解码数据工具
import { getTypes, getTypeList } from '@/api/cartoon'

export default {
  name: 'Classify',
  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  },
  data () {
    return {
      types: [], // 类型数据
      list: []
    }
  },
  methods: {
    a () {
      return getTypes()
        .then(res => {
          if (res.code === 200) {
            this.types = res.info
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络错误，请稍后重试')
        })
    },
    b (subject) {
      getTypeList(subject)
        .then(res => {
          if (res.code === 200) {
            // 解密 res.info ，并将得到的 JSON 字符串转换为对象
            const info = JSON.parse(unformat(res.info))
            // console.log(info)
            this.list = info.comicsList
          } else {
            alert(res.code_msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络错误，请稍后重试')
        })
    },
    // 切换分类类型时触发
    // 自定义事件处理函数, $event 是触发这个事件时，传递过来的 payload 即其形参就是触发事件传递来的payload
    onTypeChange (payload) {
      console.log(payload)
      // 取出 payload 中的type 中的 targetargument
      const subject = payload.type.targetargument
      // 重新发送 B 接口请求并携带参数
      this.b(subject)
    }
  },
  async created () {
    // a b 两个接口，b 接口的参数需要从a接口的返回值中去获取，借助async/await语法
    await this.a() // await 后要跟promise 对象
    // console.log(this.types[0])
    this.b(this.types[0].targetargument)
  }
}
</script>

<style lang="scss" scoped>
.page-classify {
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
