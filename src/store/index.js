import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import moduleStock from './modules/stock'

import signupPageModule from './modules/signupPage'


// import chatModule from './modules/chat'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stock: moduleStock,
    //user: userModule,
    signupPage: signupPageModule
  }
})
