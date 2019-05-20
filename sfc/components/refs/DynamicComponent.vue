<template>
  <component
    :is="componentName"
    :class="componentName"
    v-bind="componentProps" />
</template>

<script>
// import dynamicComponents from './utils/dynamic-component-list';

/**
 * Example of 'dynamic-component-list.js'
 * export default {
      MainBanner: () => import('../MainBanner.vue'),
      SpotList: () => import('../SpotList.vue'),
    };
  */

export default {
  name: 'DynamicComponent',

  // components: dynamicComponents,

  props: {
    /**
     * The name of the component to render (from dynamic-components-list)
     * i.e. 'MainBanner'
     */
    componentName: {
      type: String,
      default: '',
    },

    /**
     * The 'props' to be passed to each component
     */
    componentProps: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
