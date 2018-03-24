import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SocijalnaKarta from '@/components/pages/socijalnaKarta/SocijalnaKarta'
import Pristupnica from '@/components/pages/pristupnica/Pristupnica'
import Volontiranje from '@/components/pages/volontiranje/Volontiranje'
import Donacije from '@/components/pages/donacije/Donacije'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/social-card',
      name: 'SocijalnaKarta',
      component: SocijalnaKarta
    },
    {
      path: '/access-card',
      name: 'Pristupnica',
      component: Pristupnica
    },
    {
      path: '/volunteering',
      name: 'Volontiranje',
      component: Volontiranje
    },
    {
      path: '/donations',
      name: 'Donacije',
      component: Donacije
    }
  ]
})
