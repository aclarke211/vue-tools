<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->


    <div class="component-list">
      <h1>Select a Page</h1>
      <p>Available pages:</p>
      <ul>
        <li
          v-for="componentRoute in componentRoutes"
          :key="componentRoute.path">
          <router-link :to="componentRoute.path">{{ componentRoute.path }}</router-link>
        </li>
      </ul>
    </div>

    <!-- <div class="link" v-for="(vueRoute, routeKey) in vueRoutes" :key="routeKey">
      {{ 'Hey' }}
    </div> -->

    <FormModule/>
  </div>
</template>

<script>
// import Vue from 'vue';
import { routes } from '../router';
import FormModule from '@/components/modules/FormModule.vue';


export default {
  name: 'home',
  components: {
    FormModule,
  },
  data: () => ({
    routes,
  }),
  computed: {
    componentRoutes() {
      return routes.filter(routeName => routeName.path.includes('/'));
    },
  },
};
</script>
