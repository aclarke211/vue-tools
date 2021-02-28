<template>
    <!-- Container for the component -->
  <div :class="className">
    <!-- Showing a Prop value as plain text -->
    <h2 class="title__container" :style="{color: randomColour}">{{ exampleProp.text.title }}</h2>
    <!-- Allowing HTML to be inputted as the value -->
    <div class="subtitle__container" v-html="exampleProp.text.subtitle" />
    <!-- Outputting Computed property values -->
    <pre>{{ exampleComputedProperty }}</pre>
  </div>
</template>

<script>
/* import AnotherComponent from '@/components/component-name'; */

export default {
  name: 'ExampleComponent',

  props: {
    exampleProp: {
      type: Object,
      default: () => ({
        text: {
          title: 'Component Name',
          subtitle: '<h3>Subtitle</h3><p>This is a example Vue component.</p>',
        },
      }),
    },
  },

  data: () => ({
    className: 'example-component',
  }),

  computed: {
    exampleComputedProperty() {
      return `Computed Text: ${this.exampleProp.text.title} ${this.exampleProp.text.subtitle}`;
    },

    randomColour() {
      const hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const defaultColourValues = ['0', '0', '0', '0', '0', '0'];

      const color = defaultColourValues.map((char) => {
        let hexValue = char;
        const hexIndex = Math.floor(Math.random() * (hex.length) - 0) + 0;

        hexValue = hex[hexIndex];
        return hexValue;
      });

      return `#${color.toString().replaceAll(',', '')}`;
    },
  },

  methods: {
    exampleMethod() {
      return 'Ran example method.';
    },
  },

  mounted() {
    // eslint-disable-next-line
     console.log('Component Mounted:', this.exampleMethod());
  },
};
</script>

<style lang="scss">
/* Sass Variables */
$className: ".example-component";

/* Component Container */
#{$className} {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
}
</style>
