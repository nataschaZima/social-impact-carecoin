import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/register'
import Profile from '@/components/Profile'
import Landing from '@/components/Landing'
import Calculate from '@/components/Calculate'
import Result from '@/components/Result'

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
    },
    {
      path: '/calculation',
      name: 'Calculate',
      component: Calculate
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
