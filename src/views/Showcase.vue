<template>
  <div :class="[className, config.className]">
     <h1 :class="`${className}__title`">{{ titleText }}</h1>
     <h2>This is the {{ routeName }}</h2>

     <div
      v-for="(additionalTemplate, addTempKey) in additionalTemplates"
      :key="addTempKey"
      v-html="additionalTemplate" />

     <component
      v-if="importRef"
      :is="importRef"
      v-bind="props" />
  </div>
</template>

<script>
import config from '../../config/default.json';

export default {
  name: 'Showcase',

  props: {
    className: {
      type: String,
      default: 'showcase',
    },

    titleText: {
      type: String,
      default: 'Showcase',
    },

    props: {
      type: Object,
      default: () => {},
    },

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
    config,
  }),

  computed: {
    routeName() {
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
