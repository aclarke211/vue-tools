<template>
  <div :class="className">
     <h1 :class="`${className}__title`">{{ titleText }}</h1>
     <h2>This is the {{ routeModuleName }}</h2>

     <component
      :is="importRef" />
  </div>
</template>

<script>
export default {
  name: 'ModulesShowcase',

  props: {
    importRef: {
      type: Function,
      default: () => ({}),
    },
  },

  data: () => ({
    className: 'module-showcase',
    titleText: 'Module Showcase',
  }),

  computed: {
    routeModuleName() {
      return this.$route.params.name;
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
