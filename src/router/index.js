import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Apitest from '@/components/Apitest'
import Todolist from '@/components/Todolist'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/apitest',
      name: 'Apitest',
      component: Apitest
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist
    }
  ]
})
