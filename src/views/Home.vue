<template>
  <div class="home">
    <h1 class="home__title">{{ homeTitle }}</h1>
    <div class="category-list">
      <div class="category" v-for="(category, catKey) in categories" :key="catKey">
        <h1 class="category__title">{{ category.name }}</h1>
        <div class="subcategory" v-for="(subcategory, subKey) in category.subcategories"
        :key="subKey">
          <h2 class="subcategory__title">{{ subcategory.name }}</h2>
          <ul class="subcategory__routes">
            <li
              class="subcategory__route"
              v-for="route in getRoutes(category.name, subcategory.name)"
              :key="route.path">
              <router-link
                class="subcategory__link"
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
    homeTitle: 'Vue Components',
    categories: [
      {
        name: 'Components',
        subcategories: [
          {
            name: 'General',
          },
        ],
      },
      {
        name: 'Modules',
        subcategories: [
          {
            name: 'General',
          },
        ],
      },
      {
        name: 'Utils',
        subcategories: [
          {
            name: 'General',
          },
        ],
      },
    ],
  }),
  methods: {
    formattedName(name) {
      return (name.charAt(0).toUpperCase() + name.slice(1)).match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
    },
    getRoutes(catName, subCatName) {
      return routes.filter(routeName => routeName.path.includes(`/${catName.toLowerCase().replace(' ', '-')}/${subCatName.toLowerCase().replace(' ', '-')}/`));
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &__title {
    align-self: center;
    border-bottom: .3rem solid darkslategrey;
    font-size: 2.25rem;
    margin-bottom: 2rem;
  }

  .category-list {
    display: flex;
    flex-wrap: wrap;
    border-radius: .3rem;
    padding: 0 1rem;
    justify-content: center;
  }

  .category {
    margin: 1rem;
    flex: 0 0 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 767px) {
      flex: 0 0 30%;
    }

    &__title {
      font-size: 2rem;
      margin: .5rem;
      padding: 0;
    }
  }

  .subcategory {
    &__title {
      font-size: 1.5rem;
      margin: .5rem;
      padding: 0;
    }

    &__routes {
      margin: 1rem;
      padding: 0;
    }

    &__route {
      list-style-type: none;
      margin: 2rem;
      padding: 0;
    }

    &__link {
      $linkColor: steelblue;
      $hoverLinkTextColor: white;

      font-size: 1.1rem;
      color: $linkColor;
      text-decoration: none;
      padding: .5rem 1.25rem;
      border-radius: .25rem;
      border: 1px solid $linkColor;
      transition: all .5s;
      white-space: nowrap;

      &:hover {
        background-color: $linkColor;
        color: $hoverLinkTextColor;
      }
    }
  }
}
</style>
