import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Test = () => import('views/test/Test')
const routes = [
  {
    path: '/test',
    component: Test
  }
]

const router = new VueRouter({
  routes
})

export default router
