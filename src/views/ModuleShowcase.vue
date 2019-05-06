<template>
  <div :class="className">
     <h1 :class="`${className}__title`">{{ titleText }}</h1>
     <h2>This is the {{ routeModuleName }}</h2>

     <component
      :is="componentName" />
  </div>
</template>

<script>
import modulesList from '../modules/base/modules-list';

export default {
  name: 'ModuleShowcase',

  components: modulesList,

  data: () => ({
    className: 'module-showcase',
    titleText: 'Module Showcase',
  }),

  computed: {
    routeModuleName() {
      return this.$route.params.moduleName;
    },

    componentName() {
      return modulesList.text[0].srcFile;
    },
  },
};
</script>

<style lang="scss">
  .module-showcase {
    border: solid seagreen;

    &__title {
      font-size: 2.25rem;
      color: blue;
      text-decoration: underline;
    }
  }
</style>
