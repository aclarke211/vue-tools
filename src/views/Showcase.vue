<template>
  <div :class="[className, config.className]">
     <h1 :class="`${className}__title`">{{ titleText }}</h1>
     <h2
      :class="`${className}__name`">
      {{ routeName }}
    </h2>

     <div
      v-for="(additionalTemplate, addTempKey) in additionalTemplates"
      :key="addTempKey"
      class="additional-template"
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
    className: 'showcase',
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
  .showcase {
    border: 1px solid gainsboro;
    margin: 0;
    padding: 2rem;

    &__title {
      font-size: .75rem;
      color: silver;
      text-decoration: underline;
      text-align: right;
    }

    .additional-template {
      margin: 0 0 4rem;
    }
  }
</style>
