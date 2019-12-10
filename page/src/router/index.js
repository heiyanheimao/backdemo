import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './routers/login.js'
import Test from './routers/test.js'
Vue.use(VueRouter)
const routes = [
  {
    name: 'index',
    path: '/',
    redirect: '/login'
  },
  Login,
  Test
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // 设置title
    window.document.title = to.meta.title
  }
  next()
})
export default router
