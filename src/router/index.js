import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Layout from '../Layout'
import Login from '../views/Login.vue'
import Welcome from '../views/Welcome.vue'
import Stock from '../views/Stock.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Login',
    component: Login
  },

  {

    path: '/',
    redirect: 'welcome',
    name: 'Layout',
    component: Layout,

    beforeEnter: (to, from, next) => {
      const isLogin =  store.getters['login/isLogin'];
      isLogin ? next() : next({ path: '/home' })
    },

    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome
      },
      {
        path: '/stock',
        name: 'Stock',
        component: Stock
      },
      {
        path: '/list',
        name: 'List',
        component: List
      },
    ]

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
