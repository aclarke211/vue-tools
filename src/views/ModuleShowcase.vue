<template>
  <div :class="className">
     <h1 :class="`${className}__title`">{{ titleText }}</h1>
     <h2>This is the {{ routeModuleName }}</h2>

     <component
      :is="componentImport" />
  </div>
</template>

<script>
import modulesList from '../modules/base/modules-list';

export default {
  name: 'ModuleShowcase',

  components: modulesList,

  props: {
    componentImport: {
      type: Function,
      default: modulesList.text[0].srcFile,
    },
  },

  data: () => ({
    className: 'module-showcase',
    titleText: 'Module Showcase',
  }),

  computed: {
    routeModuleName() {
      return this.$route.params.moduleName;
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
