<template>
  <div class="header-type">
    <div
      class="item"
      :class="{ active: index === activeIndex }"
      v-for="(item, index) in types"
      :key="item.id"
      @click="handleClick(item,index)"
    >
      {{ item.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderType',
  data () {
    return {
      // 当前选中的数组元素的下标
      activeIndex: 0
    }
  },
  props: {
    types: {
      type: Array
      // 属性类型为引用类型时要设置默认值必须要写成函数返回对象的形式
      // default () { return [] }
    }
  },
  methods: {
    handleClick (type, index) { // type接受的是方法传递来的item值
      // 接收点击的元素的索引，把它赋给定义好的用来判断的变量，为真则拥有active类名
      this.activeIndex = index
      // 子父通信-1，通过方法触发一个自定义事件并传递参数，通知父组件
      // payload 传递多个值时要以对象的形式
      this.$emit('click', { type, index })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.header-type {
  @include border-bottom;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 20%;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #000;
    &.active {
      color: #e7370c;
    }
  }
}
</style>
