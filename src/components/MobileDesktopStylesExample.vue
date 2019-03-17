<template>
  <div class="vc form">
    <WindowSize
      :calculateSizes="true"
      :showValues="false"
      @dimensions="(event) => { this.windowDimensions = event }"
    />

    <h1>Mobile / Desktop Styles Example</h1>

    <TextModule
      :text="'This is a Text Module'"
      :textStyles="dynamicTextStyles"
    />
  </div>
</template>

<script>
import TextModule from '@/components/modules/TextModule.vue';
import WindowSize from '@/components/modules/WindowSize.vue';

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
