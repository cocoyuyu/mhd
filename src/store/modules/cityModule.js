// 拆分出来的 城市相关的  仓库子模块
// 相关配置
const state = {
  curCity: null // 数据当前结构 => { cityId: 1111, name: 北京}
}

const getters = {
  curCityName (state) {
    return state.curCity ? state.curCity.name : ''
  }
}

const mutations = {
  SET_CURCITY (state, payload) {
    state.curCity = payload
  }
}

// 暴露相关属性及配置
export default {
  namespaced: true,
  state,
  getters,
  mutations
}
