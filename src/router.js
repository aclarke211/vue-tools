import Vue from 'vue';
import Router from 'vue-router';

const generalRoutes = [
  {
    path: '*',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue'),
  },
];

const moduleRoutes = [
  {
    path: '/modules/general/text-module',
    name: 'textModule',
    component: () => import(/* webpackChunkName: "TextModule" */ './components/modules/TextModule.vue'),
  },
];

const componentRoutes = [
  {
    path: '/components/general/form',
    name: 'formComponent',
    component: () => import(/* webpackChunkName: "FormComponent" */ './components/FormComponent.vue'),
  },
];

const utilRoutes = [
  {
    path: '/utils/styling/manage-stylesheets',
    name: 'manageStylesheets',
    component: () => import(/* webpackChunkName: "manageStylesheets" */ './components/utils/examples/manageStylesheets.vue'),
  },
];

const routes = [...generalRoutes, ...moduleRoutes, ...componentRoutes, ...utilRoutes];

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export { routes };
