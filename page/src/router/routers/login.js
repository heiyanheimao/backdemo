/**
 *  登录视图
 */
export default {
  name: 'Login',
  path: '/login',
  component: () => import('views/login/Login'),
  meta: { title: '登录' }
}
