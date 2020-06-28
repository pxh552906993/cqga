import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/shiju.vue'
import Index2 from '../views/Home.vue'
import Index3 from '../views/Home2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/Index2',
    name: 'Index2',
    component: Index2
  },
  {
    path: '/Index3',
    name: 'Index3',
    component: Index3
  }
]

const router = new VueRouter({
  mode: '',
  base: process.env.BASE_URL,
  routes
})

export default router
