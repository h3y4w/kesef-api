import { fetchUser } from '@/api/user'

const defaultState = {
  basicFirstName: '',
  basicLastName: ''
}

const actions = {
  setBasicFirstName: (context, val) => {
    context.commit('basicFirstName_Update', val)
  },
  setBasicFirstName: (context, val) => {
    context.commit('basicLastName_Update', val)
  }

}

const mutations = {
  basicFirstName_UPDATE: (state, basicFirstName) => {
    state.basicFirstName = basicFirstName
  },
  basicLastName_UPDATE: (state, basicLastName) => {
    state.basicLastName = basicLastName
  }

}

const getters = {
  basicFirstName: state => basicFirstName,
  basicLastName: state => basicLastName
}

export default {
  state: defaultState,
  actions,
  getters,
  mutations
}
