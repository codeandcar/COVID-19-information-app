import Vue from 'vue'
import VueRouter from 'vue-router'
import NationView from '../views/NationView.vue'
import LocalView from '../views/LocalView.vue'
import OtherView from '../views/OtherView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'nation',
    component: NationView
  },
  {
    path: '/local',
    name: 'local',
    component: LocalView
  },
  {
    path: '/other',
    name: 'other',
    component: OtherView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
