export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'playing',
      component: () => import('@/components/Playing')
    },
    {
      path: 'willPlay',
      component: () => import('@/components/WillPlay')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
    {
      path: '/movie',
      redirect: '/movie/playing'
    }
  ]
}