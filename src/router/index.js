import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import WaterQuality from '@/components/WaterQuality'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WaterQuality',
      component: WaterQuality
    }
  ]
})
