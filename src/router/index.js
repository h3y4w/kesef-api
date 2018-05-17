import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Signup from '@/components/signupp'
import Stock from '@/components/stock'
import Market from '@/components/market'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/stock/:stockId',
      name: 'stock',
      component: Stock
    }
  ]
})
