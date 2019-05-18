import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue'),
    },
    {
      path: '/module/:name',
      name: 'modulesShowcase',
      component: () => import(/* webpackChunkName: "ModulesShowcase" */ './views/showcases/ModulesShowcase.vue'),
      props: true,
    },
    {
      path: '/util/:name',
      name: 'utilsShowcase',
      component: () => import(/* webpackChunkName: "UtilsShowcase" */ './views/showcases/UtilsShowcase.vue'),
      props: true,
    },
  ],
});
