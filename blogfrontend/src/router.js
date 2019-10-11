import Vue from 'vue'
import Router from 'vue-router'
import store from './store'; 
Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/home.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./components/profile.vue')
    },
     {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
       // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/register.vue')
    },
    {
      path: '/showblog',
      name: 'showblog',
      component: () => import('./components/showblogs.vue')
    },
    {
      path: '/createblog',
      name: 'createblog',
      component: () => import('./components/blogcreator.vue')
    },
    {
      path: '/readblog/:id',
      name: 'readblog',
      component: () => import('./components/readblog.vue'),
      props: true
    },
    {
      path: '/manageblog',
      name: 'manageblog',
      component: () => import('./components/manageblog.vue')
    },
    {
      path: '/editblog',
      name: 'editblog',
      component: () => import('./components/editblog.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  store.dispatch('fetchAccessToken');
  if (to.fullPath === '/login') {
    if (store.state.accessToken) {
      next('/');
    }
  }
  next();
});
export default router;