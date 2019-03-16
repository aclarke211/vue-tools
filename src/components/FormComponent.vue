<template>
  <div class="vc form">
    <WindowSize  :showValues="true"
      :calculateSizes="true" @dimensions="(event) => { this.windowDimensions = event }" />
    <h1>This is a Form Component.</h1>
    <TextModule :text="'This is the text'" :textStyles="dynamicTextStyles"  />

  </div>
</template>

<script>
import TextModule from '@/components/modules/TextModule.vue';
import WindowSize from '@/components/modules/logic/WindowSize.vue';

export default {
  name: 'FormComponent',

  data: () => ({
    windowDimensions: {},
  }),

  components: {
    TextModule,
    WindowSize,
  },

  props: {
    formTextStyles: {
      type: Object,
      default: () => ({
        color: 'crimson',
        'font-size': '2rem',
      }),
    },
    formTextStylesDesktop: {
      type: Object,
      default: () => ({
        color: 'royalblue',
        'font-size': '3rem',
      }),
    },
  },

  computed: {
    dynamicTextStyles() {
      if (this.windowDimensions.width <= 767) {
        return this.formTextStyles;
      }
      return this.formTextStylesDesktop;
    },
  },
};
</script>
