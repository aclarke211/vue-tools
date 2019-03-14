<template>
  <div :class="['container', 'utils-info', className]">
    <h1 :class="['title', className]">{{ title }}</h1>
    <p :class="['description', 'text', className]">{{ description }}</p>
    <input :class="['text-field', className]" type="text"
      placeholder="Add a stylesheet" v-model="currentStylesheet">
    <button :class="['btn', 'add-styles', className]" @click="buttonClicked()">{{ btnText }}</button>
  </div>
</template>

<script>
import { appendStylesheet } from '@/components/utils/appendStylesheet';

export default {
  name: 'appendStylesheet',
  data: () => ({
    className: 'append-stylesheet',
    title: 'Append Stylesheet',
    description: 'Dynamically add a stylesheet after a page has been loaded.',
    currentStylesheet: 'https://www.jdsports.co.uk/skins/jdsports-desktop/public/dist/app.css?d7e6aa"',
    currentStylesheetPlaceholder: '',
    btnText: 'ADD STYLESHEET',
  }),

  methods: {
    buttonClicked() {
      // eslint-disable-next-line
      console.info('Adding stylesheet');
      appendStylesheet(this.currentStylesheet);
    },
  },
};
</script>

<style lang="scss" scoped>
  .append-stylesheet {
    &.container {
      padding: 2rem;
    }

    .title {
      margin: 0;
      color: darkslategrey;
    }

    .text {
      color: slategrey;
    }

    .text-field {
      border: 1px solid lightslategrey;
      border-radius: 5px;
      font-size: .85rem;
      margin: 1rem;
      padding: .5rem 1rem;
      min-width: 20%;
    }

    .btn {
      $btnColor: seagreen;
      $btnTextColor: white;

      align-items: center;
      background: $btnColor;
      border: 2px solid transparent;
      border-radius: 5px;
      box-sizing: border-box;
      color: $btnTextColor;
      cursor: pointer;
      display: inline-flex;
      font-size: .85rem;
      font-weight: 600;
      justify-content: center;
      margin: 1rem;
      padding: .75rem 2rem;
      transition: all .5s;

      &:hover {
        background: lighten($btnColor, 6%);
      }
    }

    .add-styles {

    }
  }
</style>
