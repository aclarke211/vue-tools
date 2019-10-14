<template>
  <div
    v-if="title || subtitle"
    :class="`${className}-container`">
    <h1
    v-if="title"
    :class="[className, config.className, {'no-subtitle': !subtitle}]"
    v-html="title" />
    <h2
    v-if="subtitle"
    :class="['subtitle', config.className, {'no-title': !title}]"
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
  },
};
</script>

<style lang="scss">
.title-module {
  font-size: 2rem;
  font-weight: 600;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;

  &-container {
    border: 2px solid blue;
    margin: 6rem;
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
</style>
