import Vue from 'vue';
import Router from 'vue-router';

const routes = [
  {
    path: '*',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue'),
  },
  {
    path: '/components/general/form',
    name: 'formComponent',
    component: () => import(/* webpackChunkName: "FormComponent" */ './components/FormComponent.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  // },
  {
    path: '/components/utils/append-stylesheet',
    name: 'appendStylesheet',
    component: () => import(/* webpackChunkName: "appendStylesheet" */ './views/utilsInfo/appendStylesheet.vue'),
  },
];

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export { routes };
