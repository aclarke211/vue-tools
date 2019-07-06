<template>
  <div :class="className">
     <h1 :class="`${className}__title`">{{ titleText }}</h1>
     <h2>This is the {{ routeModuleName }}</h2>

     <div
      v-for="(additionalTemplate, addTempKey) in additionalTemplates"
      :key="addTempKey"
      v-html="additionalTemplate" />
  </div>
</template>

<script>
export default {
  name: 'UtilsShowcase',

  props: {
    importRef: {
      type: Function,
      default: () => ({}),
    },

    additionalTemplates: {
      type: Array,
      default: () => (['<h3>No additional template found.</h3>']),
    },

    additionalScripts: {
      type: [Array, Function],
      default: () => [],
    },
  },

  data: () => ({
    className: 'util-showcase',
    titleText: 'Utils Showcase',
  }),

  computed: {
    routeModuleName() {
      return this.$route.params.name;
    },
  },

  methods: {
    runAdditionalScripts() {
      if (this.additionalScripts.length) {
        this.additionalScripts.forEach((additionalScript) => {
          additionalScript();
        });
      }
    },
  },

  mounted() {
    this.runAdditionalScripts();
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
