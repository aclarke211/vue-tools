<template>
  <div
    :class="['vc', className]">
    <p
    class="text"
    :style="[initialTextStyles, textStyles]">
      {{ text }}
    </p>
    <p
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

  computed: {
    initialTextStyles() {
      return {
        'font-size': '1.25rem',
        margin: 0,
        padding: 0,
      };
    },

    initialSubtextStyles() {
      return {
        'font-size': '.85rem',
        margin: 0,
        padding: 0,
      };
    },
  },

  props: {
    text: {
      type: String,
      default: 'Text Module',
    },

    subtext: {
      type: String,
      default: 'Subtext Module',
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
};
</script>
