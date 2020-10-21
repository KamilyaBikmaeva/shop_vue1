import Vue from 'vue'
import Router from 'vue-router'
import index from '@/sections/index'
import cart from '@/sections/cart'
import belts from '@/sections/belts'
import rings from '@/sections/rings'
import SideMainLayout from '@/layout/SideMainLayout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: SideMainLayout,
      children: [
        {
          path: '/',
          component: index
        },
        {
          path: '/belts',
          name: 'belts',
          component: belts
        },
        {
          path: '/rings',
          name: 'rings',
          component: rings
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
