<template>
    <!-- Aspect Ratio Box -->
  <div
    :class="`${defaultClass}-picture`"
    v-if="images" >
    <!-- Picture element to switch between desktop and mobile images -->
    <picture class="aspect__container"
      :style="applyAspectRatio"
    >
      <source
        :media="`(max-width: ${breakpoints.tablet})`"
        :srcset="images.mobile"
        v-if="images.mobile" >
      <img
        :class="`${defaultClass}-img`"
        :src="images.desktop"
        v-if="images.desktop" >
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Picture',

  data: () => ({
    defaultClass: 'vc',
    breakpoints: {
      tablet: '767px',
    },
  }),

  props: {
    images: {
      type: Object,
      default: () => ({
        mobile: 'https://via.placeholder.com/640x800/d9efff/?text=Mobile',
        desktop: 'https://via.placeholder.com/1160x600/ffe9b2/?text=Desktop',
      }),
    },

    aspectRatio: {
      type: Object,
      default: () => ({
        desktop: [1600, 900],
        mobile: [640, 800],
      }),
    },
  },

  computed: {
    // initialCustomStyles() {
    //   return {
    //     'font-size': '1.25rem',
    //     margin: 0,
    //     padding: 0,
    //     transition: 'all .5s',
    //   };
    // },

    // 'padding-top': `${this.aspectRatio.mobile[1]} / ${this.aspectRatio.mobile[0]} * ${100}%`,
    applyAspectRatio() {
      return {
        'padding-top': `${this.aspectRatio.mobile[1] / this.aspectRatio.mobile[0] * 100}%`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.vc-picture {
  border: 2px solid darkslategrey;
  margin: 2rem auto;

  .aspect__container {
    background: gainsboro;
    display: block;
    height: 0;
    overflow: hidden;
    position: relative;

    @media screen and (min-width: 767px) {
      padding-top: calc(600 / 1160 * 100%);
    }
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
