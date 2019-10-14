<template>
    <p
    v-if="text"
    :class="[className, config.className, textAlignment]"
    v-html="text" />
</template>

<script>
import config from '../../config/default.json';

export default {
  name: 'TextModule',

  data: () => ({
    config,
    className: 'text-module',
  }),

  props: {
    text: {
      type: String,
      default: 'Text Module',
    },
    align: {
      /**
       * String or Object here so we have the option to
      add the 'options' property, which can be used in a select box
       */
      type: [String, Object],
      default: () => ({
        current: 'left',
        options: [
          {
            text: 'Option 1',
            value: 'option-1',
          },
        ],
      }),
    },
  },

  computed: {
    textAlignment() {
      if (this.align.current) {
        return this.align.current;
      }
      return this.align;
    },
  },
};
</script>

<style lang="scss">
.text-module {
  display: flex;
  font-size: 1rem;
  padding: 0;
  margin: 0;

  &.left {
      justify-content: flex-start;
      align-items: flex-start;
    }

    &.center {
      justify-content: center;
      align-items: center;
    }

    &.right {
      justify-content: flex-end;
      align-items: flex-end;
    }
}
</style>
