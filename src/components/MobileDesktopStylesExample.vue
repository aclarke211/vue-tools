<template>
  <div class="vc form">
    <h1>Mobile / Desktop Styles Example</h1>
    <TextModule :text="'This is a Text Module'" :textStyles="dynamicTextStyles"  />

    <WindowSize  :showValues="false"
      :calculateSizes="true" @dimensions="(event) => { this.windowDimensions = event }" />
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
