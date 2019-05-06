<template>
  <div :class="['container', 'util', className]">
    <h1 :class="['title', className]">{{ title }}</h1>
    <p :class="['description', 'text', className]">{{ description }}</p>
    <p :class="['example-code', 'import', 'text', className]">{{ codeExamples.importText }}</p>
    <p :class="['example-code', 'methods', 'text', className]">{{ codeExamples.methodsText }}</p>
  </div>
</template>

<script>
import debounceFunction from '@/utils/debounceThrottle';

export default {
  name: 'debounceThrottle',

  data: () => ({
    className: 'debounce-throttle',
    title: 'Debounce Throttle',
    description: 'This limits the amount of times a frequently called function (such as window.resize) can be executed. If the debounceFunction() is called again before the delay timer has been reached, the function call will be ignored.',
    codeExamples: {
      importText: `
        import debounceFunction from '@/components/utils/debounceThrottle';
      `,
      methodsText: `
        debounceFunction(() => {
          // Run frequently called function here...
        }, 500);
      `,
    },
  }),

  methods: {
    debounce() {
      debounceFunction(() => {
        // Run frequently called method here...
      }, 500);
    },
  },
};
</script>

<style lang="scss">

.debounce-throttle {
  .example-code {
    background: #eee;
    display: flex;
    font-family: 'courier';
    padding: .5rem;
    max-width: 55%;
  }

 .btn {
   $btnBGColor: cornflowerblue;
   $btnColor: white;

   background: $btnBGColor;
   border: none;
   border-radius: .25rem;
   color: $btnColor;
   cursor: pointer;
   margin: 1rem;
   padding: .75rem 2rem;
   transition: all .5s;

   &:hover {
     background: lighten($btnBGColor, 10%);
   }
 }
}
</style>
