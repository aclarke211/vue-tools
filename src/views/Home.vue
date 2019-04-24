<template>
  <div :class="className">
    <h1 :class="`${className}__title`">{{ titleText }}</h1>

    <div class="tool-types">
      <div
        class="type"
        v-for="(toolType, typeKey) in toolTypes"
        :key="typeKey">
          <h2 class="type__title">{{ toolType.name }}</h2>
          <div
            :class="['category']"
            v-for="(category, catKey) in getCategories(toolType)"
            :key="catKey">
             <h3 class="category__title">{{ category }}</h3>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
// import { routes } from '../router';
import modulesList from '../modules/base/modules-list';

export default {
  name: 'home',
  data: () => ({
    className: 'home',
    titleText: 'Vue Tools',
  }),

  computed: {
    toolTypes() {
      return [
        {
          name: 'Modules',
          list: modulesList,
        },
      ];
    },
  },

  methods: {
    // formattedName(name) {
    //   return (name.charAt(0).toUpperCase() +
    //     name.slice(1)).match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
    // },
    // getRoutes(catName, subCatName) {
    //   return routes.filter(routeName => routeName.path.includes(`/${catName.toLowerCase()
    //    .replace(' ', '-')}/${subCatName.toLowerCase().replace(' ', '-')}/`));
    // },
    getCategories(toolType) {
      const categories = toolType.list.map(category => category.category);

      // eslint-disable-next-line
      console.log(categories);

      return categories;
    },
  },
};
</script>

<style lang="scss">
</style>
