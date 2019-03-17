<template>
  <div :class="`${className}__container`" v-if="showValues">
    <h1 :class="`${className}__title`">Window Size Module</h1>
    <div :class="`${className}__info`">
      <h2 :class="`${className}__value`">Window Width: {{ dimensions.width }}</h2>
      <h2 :class="`${className}__value`">Window Height: {{ dimensions.height }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WindowSize',

  data: () => ({
    className: 'window-size',
    dimensions: {
      width: undefined,
      height: undefined,
    },
  }),

  props: {
    showValues: {
      type: Boolean,
      default: true,
    },

    calculateSizes: {
      type: Boolean,
      default: true,
    },
  },

  mounted() {
    if (this.calculateSizes) {
      window.addEventListener('resize', this.debounce(this.handleResize));
    }
    this.debounce(this.handleResize);
  },

  methods: {
    handleResize() {
      this.$nextTick(() => {
        this.dimensions.width = window.innerWidth;
        this.dimensions.height = window.innerHeight;
        this.$emit('dimensions', this.dimensions);
      });
    },

    debounce(functionToLimit, delay = 300) {
      let debounceThrottleTimer;
      return () => {
        // Reset the throttle timer when we call the debounce function
        clearTimeout(debounceThrottleTimer);
        // If the throttle timer resets before the delay time has passed, it will not run
        debounceThrottleTimer = setTimeout(functionToLimit.bind(this), delay);
      };
    },
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.debounce(this.handleResize));
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
