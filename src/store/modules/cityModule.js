// 拆分出来的 城市相关的  仓库子模块
const city = window.sessionStorage.getItem('city')
// 相关配置
const state = {
  // 数据当前结构 => { cityId: 1111, name: 北京}
  curCity: city ? JSON.parse(city) : null
}

const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}

const mutations = {
  SET_CURCITY (state, payload) {
    state.curCity = payload
    // 为了不关闭浏览器刷新页面仓库数据一直在，需做本地存储操作
    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}

// 暴露相关属性及配置
export default {
  namespaced: true,
  state,
  getters,
  mutations
}
