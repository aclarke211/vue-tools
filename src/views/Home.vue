<template>
  <div class="home">
    <div class="component-list">
      <h1>Components</h1>
      <p>General:</p>
      <ul>
        <li
          v-for="componentRoute in componentRoutes"
          :key="componentRoute.path">
          <router-link
            :to="componentRoute.path">
            {{ formattedName(componentRoute.name) }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { routes } from '../router';

export default {
  name: 'home',
  data: () => ({
    routes,
  }),
  computed: {
    componentRoutes() {
      return routes.filter(routeName => routeName.path.includes('/'));
    },
  },
  methods: {
    formattedName(name) {
      return (name.charAt(0).toUpperCase() + name.slice(1)).match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
    },
  },
};
</script>
