export default {
  path: '/cinema',
  component: () => import('@/views/Cinema'),
  children: [
    {
      path: 'quancheng',
      component: () => import('@/components/CMQuanCheng')
    },
    {
      path: '/cinema',
      redirect: '/cinema/quancheng'
    }
  ]
}