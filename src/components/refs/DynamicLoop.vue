<template>
  <div class="content">
    <div
      v-for="(contentObj, key) in content"
      v-if="disableLinks"
      :key="key"
      class="contentObj._identifier"
      @mouseenter.stop="livePreviewHoverEnter(contentObj._identifier)"
      @mouseleave.stop="livePreviewHoverLeave(contentObj._identifier)"
      @click.stop.prevent="livePreviewClick(contentObj._identifier)"
    >
      <DynamicComponent
        :component-name="contentObj._component"
        :class="[`t-${contentObj._component.toLowerCase()}`, contentObj._identifier]"
        :component-props="contentObj.content"
      />
    </div>

    <DynamicComponent
      v-for="(contentObj, key) in content"
      v-if="!disableLinks"
      :component-name="contentObj._component"
      :key="key"
      :class="[`t-${contentObj._component.toLowerCase()}`, contentObj._identifier]"
      :component-props="contentObj.content"
    />
  </div>
</template>

<script>
import DynamicComponent from './DynamicComponent.vue';

export default {
  components: {
    DynamicComponent,
  },

  inheritAttrs: false,

  props: {
    /**
     * Object containing the imported definitions of components
     */
    components: {
      type: Object,
      default: () => {},
    },

    /**
     * array of objects containing component data
     */
    content: {
      type: Array,
      default: () => [],
    },

    /**
     * Toggle to enable/disable links within the components
     */
    disableLinks: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    pascalCase(string) {
      return string
        .split(/(?=[A-Z][a-z]+)|-|\s/)
        .map(w => `${w[0].toUpperCase()}${w.slice(1).toLowerCase()}`)
        .join('');
    },

    // setComponentsOpacity(opacityValue) {
    //   Object.keys(this.$refs).forEach((ref) => {
    //     this.$refs[ref][0].style.opacity = opacityValue;
    //   });
    // },

    livePreviewHoverEnter(identifier) {
      if (this.disableLinks) {
        const elem = document.getElementsByClassName(identifier)[0];

        // this.setComponentsOpacity(0.5);

        elem.style.transition = 'all .5s';
        elem.style.borderRadius = '.25rem';
        elem.style.border = '4px solid black';
        elem.style.cursor = 'pointer';
        elem.style.opacity = 1;
      }
    },

    livePreviewHoverLeave(identifier) {
      const elem = document.getElementsByClassName(identifier)[0];

      if (this.disableLinks) {
        elem.style.border = '0 solid transparent';
        elem.style.border = 'initial';
        // this.setComponentsOpacity('initial');
      }
    },

    livePreviewClick(identifier) {
      if (this.disableLinks) {
        this.content.forEach((component) => {
          document
            // eslint-disable-next-line
            .getElementsByClassName(`${component._identifier}__editor`)[0]
            .classList.remove('preview-highlight');
        });

        const elem = document.getElementsByClassName(
          `${identifier}__editor`,
        )[0];

        elem.classList.add('preview-highlight');
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>
