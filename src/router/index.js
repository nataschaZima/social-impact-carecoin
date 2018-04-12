import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Mona Lisa',
      component: Profile
    }
  ]
})
