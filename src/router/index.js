import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import About from '@/components/About'
import Srce from '@/components/Srce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Srce',
      component: Srce
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/srce',
      name: 'Srce',
      component: Srce
    }
  ]
})
