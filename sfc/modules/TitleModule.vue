<template>
  <div
    v-if="title || subtitle"
    :class="[`${className}-container`, textAlignment]">
    <h1
    v-if="title"
    :class="[className, config.className, {'no-subtitle': !subtitle}, {'underline': underline}]"
    v-html="title" />
    <h2
    v-if="subtitle"
    :class="['subtitle', config.className, {'no-title': !title}, {'underline': underline}]"
    v-html="subtitle" />
  </div>
</template>

<script>
import config from '../../config/default.json';

export default {
  name: 'TitleModule',

  data: () => ({
    config,
    className: 'title-module',
  }),

  props: {
    title: {
      type: String,
      default: 'Title Module',
    },
    subtitle: {
      type: String,
      default: 'Subtitle',
    },
    align: {
      /**
       * String or Object here so we have the option to
      add the 'options' property, which can be used in a select box
       */
      type: [String, Object],
      default: () => ({
        current: 'center',
        options: [
          {
            text: 'Option 1',
            value: 'option-1',
          },
        ],
      }),
    },
    underline: {
      type: Boolean,
      default: true,
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
.title-module {
  font-size: 2rem;
  font-weight: 600;
  padding: 0;
  margin: 1rem 0 0;

  &-container {
    display: flex;
    flex-direction: column;

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

  &.no-subtitle {
    margin: 1rem 0;
  }
}
.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0;
  margin: .25rem 0 .5rem 0;

  &.no-title {
    margin: .5rem 0;
  }
}

.title-module, .subtitle {
  &.underline {
    border-bottom: 2px solid black;
  }
}
</style>
