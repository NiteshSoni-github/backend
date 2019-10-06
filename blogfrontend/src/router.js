import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/middlebar.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/showblog',
      name: 'showblog',
      component: () => import('./components/showblogs.vue')
    },
    {
      path: '/middlebar',
      name: 'middlebar',
      component: () => import('./components/middlebar.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/register.vue')
    },
    {
      path: '/createblog',
      name: 'createblog',
      component: () => import('./components/blogcreator.vue')
    },
    {
      path: '/readblog',
      name: 'readblog',
      component: () => import('./components/readblog.vue')
    }
  ]
})
