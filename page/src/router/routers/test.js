/**
 *  测试视图
 */
export default {
  name: 'Test',
  path: '/test',
  component: () => import('views/test/Test'),
  meta: { title: '测试' }
}
