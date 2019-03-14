<template>
  <div class="home">
    <div class="component-list">
      <div class="category" v-for="(category, catKey) in categories" :key="catKey">
        <h1 class="category__title">{{ category.name }}</h1>
        <div class="subcategory" v-for="(subcategory, subKey) in category.subcategories"
        :key="subKey">
          <h2 class="subcategory__title">{{ subcategory.name }}</h2>
          <ul class="subcategory__routes">
            <li
              class="subcategory__route"
              v-for="route in getRoutes(subcategory.pathid)"
              :key="route.path">
              <router-link
                :to="route.path">
                {{ formattedName(route.name) }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from '../router';

export default {
  name: 'home',
  data: () => ({
    routes,
    categories: [
      {
        name: 'Components',
        subcategories: [
          {
            name: 'General',
            pathid: '/components/general',
          },
        ],
      },
      {
        name: 'Utils',
        subcategories: [
          {
            name: 'General',
            pathid: '/components/utils',
          },
        ],
      },
    ],
  }),
  methods: {
    formattedName(name) {
      return (name.charAt(0).toUpperCase() + name.slice(1)).match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
    },
    getRoutes(pathid) {
      return routes.filter(routeName => routeName.path.includes(pathid));
    },
  },
};
</script>
