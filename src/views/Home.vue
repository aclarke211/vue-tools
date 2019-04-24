<template>
  <div :class="className">
    <h1 :class="`${className}__title`">{{ titleText }}</h1>

    <div class="tool-types">
      <div
        class="type"
        v-for="(type, typeKey) in toolTypes"
        :key="typeKey">
          <h2 class="type__title">{{ type.name }}</h2>
          <!-- <div
            :class="['category', tool.name]"
            v-for="(category, toolKey) in category.list"
            :key="toolKey">

          </div> -->
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
  },
};
</script>

<style lang="scss">
</style>
