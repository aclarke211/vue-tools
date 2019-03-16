<template>
  <div class="window-size__container">
    <h1>Window Size Module</h1>
    <h2>{{ windowWidth }}</h2>
  </div>
</template>

<script>
export default {
  name: 'WindowSize',

  data: () => ({
    windowWidth: undefined,
    windowHeight: undefined,
  }),

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },

  methods: {
    handleResize() {
      this.$nextTick(() => {
        this.windowWidth = window.innerWidth;
      });
    },
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
