<template>
  <div
    v-if="text || subtext"
    :class="['vc', className]">
    <p
    v-if="text"
    class="text"
    :style="[initialTextStyles, textStyles]">
      {{ text }}
    </p>
    <p
    v-if="subtext"
    class="subtext"
    :style="[initialSubtextStyles, subtextStyles]">
      {{ subtext}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextModule',

  data: () => ({
    className: 'text-module',
  }),

  props: {
    text: {
      type: String,
      default: 'Text Module',
    },

    subtext: {
      type: String,
      default: '',
    },

    textStyles: {
      type: Object,
      default: () => {},
    },

    subtextStyles: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    initialTextStyles() {
      return {
        'font-size': '1.25rem',
        margin: 0,
        padding: 0,
        transition: 'all .5s',
      };
    },

    initialSubtextStyles() {
      return {
        'font-size': '.85rem',
        margin: 0,
        padding: 0,
        transition: 'all .5s',
      };
    },
  },
};
</script>
