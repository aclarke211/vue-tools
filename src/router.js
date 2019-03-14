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
  {
    path: '/utils/general/manage-stylesheets',
    name: 'manageStylesheets',
    component: () => import(/* webpackChunkName: "manageStylesheets" */ './components/utils/examples/manageStylesheets.vue'),
  },
];

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export { routes };
