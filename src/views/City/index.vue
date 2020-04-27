<template>
  <div class="page-city">
    <NormalHeader :title="`当前城市-${curCityName}`" :showRight="false"></NormalHeader>
    <div class="city-main">
      <div class="left" ref="scrollLeft">
        <div
          class="city-index-section"
          :ref="`section-${item.cityInitial}`"
          v-for="item in cityList"
          :key="item.cityInitial"
        >
          <p>{{ item.cityInitial }}</p>
          <ul>
            <li v-for="city in item.list" :key="city.cityId" @click="handleStore(city)">
              {{ city.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in indexs" :key="item" @click="handleIndex(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
// 引入 vuex 辅助函数
import { mapMutations, mapGetters } from 'vuex'
import { getCityList } from '@/api/city.js'
export default {
  name: 'City',
  data () {
    return {
      cities: []
    }
  },
  methods: {
    ...mapMutations('city', ['SET_CURCITY']),
    getCityList () {
      getCityList()
        .then(res => {
          // console.log(res.data)
          // if (res.data.status === 0) {
          //   this.cities = res.data.data.cities
          // } else {
          //   alert(res.data.msg)
          // }
          const data = res.data
          if (data.status === 0) {
            this.cities = data.data.cities
          } else {
            alert(data.msg)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },

    // 点击右侧字母，左侧对应dom元素置顶 scrollLeft
    handleIndex (cityInitial) {
      // console.log(cityInitial)
      // ref 标记时，如果标记在 v-for 上，得到的将是一个数组,下标为[0]的元素才是目标dom元素
      // console.log(this.$refs[`section-${cityInitial}`][0])

      // 根据 cityInitial 获取左侧对应元素的dom对象
      const targetEl = this.$refs[`section-${cityInitial}`][0]
      // 计算该 dom 元素 距离左侧顶部的距离
      const offsetTop = targetEl.offsetTop
      // 修改左侧滚动元素的 scrollTop 属性的值,让其滚动到顶部
      this.$refs.scrollLeft.scrollTop = offsetTop
    },

    // 修改vuex 仓库数据
    handleStore (city) {
      // 1. 调用mutation改变仓库数据
      this.SET_CURCITY(city)
      // 2. 获取之前要去的页面地址。如果没有要指定要去的地址就去首页
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  },
  computed: {
    ...mapGetters('city', ['curCityName']),
    // 拿到的数据要经过处理才能使用
    cityList () {
      // 最终结果搜集
      const result = []
      this.cities.forEach(item => {
        // 获取当前城市首字母
        const cityInitial = item.pinyin.substr(0, 1).toUpperCase()
        // 通过 能否在 result 中找到当前首字母的索引，判断其是否已存在
        const index = result.findIndex(item => {
          return item.cityInitial === cityInitial
        })
        if (index > -1) {
          // 存在
          result[index].list.push(item)
        } else {
          // 不存在
          result.push({
            cityInitial: cityInitial,
            list: [item]
          })
        }
      })
      return result.sort((a, b) => {
        // a-b 升序
        return a.cityInitial.charCodeAt() - b.cityInitial.charCodeAt()
      })
    },
    // 基于cityList再次计算拿到右侧字母集合
    indexs () {
      return this.cityList.map(item => item.cityInitial)
    }
  },
  components: {
    NormalHeader
  },
  created () {
    this.getCityList()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";

.page-city {
  display: flex;
  flex-direction: column;
  height: 100%;

  .city-main {
    flex: 1;
    display: flex;
    overflow: hidden;
    position: relative;

    .left {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      position: relative;
      .city-index-section {
        // @include border-bottom;
        padding: 15px;
        p {
          @include border-bottom;
          height: 36px;
          line-height: 36px;
          font-size: 16px;
        }
        li {
          @include border-bottom;
          height: 30px;
          line-height: 30px;
          padding-left: 20px;
          font-size: 16px;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      width: 20px;
      height: 100%;
      li {
        width: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>
