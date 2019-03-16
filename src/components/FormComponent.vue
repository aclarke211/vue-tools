<template>
  <div class="vc form">
    <h1>This is a Form Component.</h1>
    <TextModule :text="'This is the text'" :textStyles="formTextStyles"  />

    <WindowSize  :showValues="true" @dimensions="(event) => { this.windowDimensions = event }" />
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

  computed: {
    formTextStyles() {
      if (this.windowDimensions.width <= 767) {
        return {
          color: 'red',
          'font-size': '2rem',
        };
      }

      return {
        color: 'blue',
        'font-size': '1.5rem',
      };
    },
  },
};
</script>
