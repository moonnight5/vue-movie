import Vue from 'vue'
import Router from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movie'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    cinemaRouter,
    mineRouter,
    movieRouter
  ],
  mode: 'history'
})
