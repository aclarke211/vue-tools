<template>
    <p
    v-if="text"
    :class="[className, config.className]"
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
  },
};
</script>

<style lang="scss">
.text-module {
  font-size: 1rem;
  padding: 0;
  margin: 0;
}
</style>
