import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Profile from '@/components/Profile'
import Landing from '@/components/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Mona Lisa',
      component: Profile
    },
    {
      path: '/',
      name: 'Landing',
      component: Landing
    }
  ]
})
