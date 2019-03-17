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
  {
    path: '/modules/logic/window-size',
    name: 'windowSize',
    component: () => import(/* webpackChunkName: "windowSize" */ './components/modules/WindowSize.vue'),
  },
];

const componentRoutes = [
  {
    path: '/components/general/mobile-desktop-styles-examples',
    name: 'mobileDesktopStylesExample',
    component: () => import(/* webpackChunkName: "MobileDesktopStylesExample" */ './components/MobileDesktopStylesExample.vue'),
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
