const state = { 
  stock: {name: 'null'}
}

const getters = {
  stock: (state) => state.stock
}

const mutations = {
  setStock (state, stock) {
    state.stock = stock
  }
}

const actions = {
  setStock ({commit}, stock) {
    commit('setStock', stock)
  }
}

const methods = {
  setS(stock) {
    this.$store.dispatch('setStock', stock)
  }
}



export default { 
  mutations,
  getters,
  state,
  actions,
  methods
}
