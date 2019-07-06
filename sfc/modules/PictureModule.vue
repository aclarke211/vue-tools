<template>
    <!-- Aspect Ratio Box -->
  <div
    :class="[className, config.className]"
    v-if="images" >
    <!-- Picture element to switch between desktop and mobile images -->
    <picture class="aspect__container"
      :style="[desktopRatio, mobileRatio]"
    >
      <source
        :media="`(max-width: ${breakpoints.tablet})`"
        :ref="'mobileImage'"
        :srcset="images.mobile"
        v-if="images.mobile" >
      <img
        class="img"
        :src="images.desktop"
        v-if="images.desktop" >
    </picture>
  </div>
</template>

<script>
import config from '../../config/default.json';

export default {
  name: 'Picture',

  data: () => ({
    config,
    className: 'picture',
    breakpoints: {
      tablet: '767px',
    },
  }),

  props: {
    images: {
      type: Object,
      default: () => ({
        mobile: 'https://via.placeholder.com/640x800/d9efff/?text=Mobile+Image',
        desktop: 'https://via.placeholder.com/1160x600/ffe9b2/?text=Desktop+Image',
      }),
    },

    aspectRatio: {
      type: Object,
      default: () => ({
        desktop: [1160, 600],
        mobile: [640, 800],
      }),
    },
  },

  computed: {
    mobileRatio() {
      return {
        'padding-top': `${this.aspectRatio.mobile[1] / this.aspectRatio.mobile[0] * 100}%`,
      };
    },

    desktopRatio() {
      return {
        'padding-top': `${this.aspectRatio.desktop[1] / this.aspectRatio.desktop[0] * 100}%`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.vc-picture {
  margin: 2rem auto;

  .aspect__container {
    background: gainsboro;
    display: block;
    height: 0;
    overflow: hidden;
    position: relative;
  }

  .vc-img {
    display: block;
    height: auto;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
