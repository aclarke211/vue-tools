<template>
  <div :class="`${className}__container`" v-if="!emitOnly">
    <h1 :class="`${className}__title`">Window Size Module</h1>
    <div :class="`${className}__info`">
      <h2 :class="`${className}__value`">Window Width: {{ windowWidth }}</h2>
      <h2 :class="`${className}__value`">Window Height: {{ windowHeight }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WindowSize',

  data: () => ({
    className: 'window-size',
    windowWidth: undefined,
    windowHeight: undefined,
  }),

  props: {
    emitOnly: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  methods: {
    handleResize() {
      this.$nextTick(() => {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
      });
    },
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
  .window-size {
    &__info {
      display: inline-flex;
      flex-wrap: wrap;
    }

    &__value {
      margin: 1rem;
    }
  }
</style>
