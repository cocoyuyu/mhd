<template>
  <section class="cartoon-list">
    <div class="list-item" v-for="item in list" :key="item.bigbook_id">
      <div
        class="item-pic"
        :style="`background-image: url('${item.coverurl}')`"
      ></div>
      <div class="item-info">
        <div class="info-book font-30">{{item.bigbook_name}}</div>
        <div class="info-author font-26">作者：{{item.bigbook_author}}</div>
        <div class="info-fans font-26">人气：{{item.bigbookview | formatYi}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartoonList',
  props: {
    list: { // 接收父组件传递来的prop
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.cartoon-list {
  @include border-bottom;
  .list-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 124px;
    padding-left: 10px;
    position: relative;
    .item-pic {
      flex-shrink: 0;
      width: 80px;
      height: 106px;
      border-radius: 3px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top;
    }
    .item-info {
      flex: 1;
      margin-left: 10px;
      color: #999;
      overflow: hidden;
      .info-book,
      .info-author,
      .info-fans {
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .info-book {
        color: #333;
      }
      .info-book,
      .info-author {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
