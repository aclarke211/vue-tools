<template>
  <div :class="['container', 'util', className]">
    <h1 :class="['title', className]">{{ title }}</h1>
    <p :class="['description', 'text', className]">{{ description }}</p>
    <input :class="['text-field', className]" type="text"
      :placeholder="stylesheetInputPlaceholder" v-model="currentStylesheet">
    <button :class="['btn', 'add-styles', className]" @click="addStylesheet()">
      {{ addStylesBtn.text }}
    </button>
    <button :class="['btn', 'remove-appended-styles', className]" @click="removeAppendedStyles()">
      {{ removeAppendedStylesBtn.text }}
    </button>
    <button :class="['btn', 'remove-all-styles', className]" @click="removeStyles()">
      {{ removeAllStylesBtn.text }}
    </button>
  </div>
</template>

<script>
import {
  appendStylesheet,
  removeAppendedStylesheets,
  removeAllStylesheets,
} from '@/components/utils/manageStylesheets';

export default {
  name: 'manageStylesheets',
  data: () => ({
    className: 'manage-stylesheets',
    title: 'Manage Stylesheets',
    description: 'Dynamically add and remove stylesheets after a page has been loaded.',
    currentStylesheet: 'https://www.jdsports.co.uk/skins/jdsports-desktop/public/dist/app.css?d7e6aa',
    stylesheetInputPlaceholder: 'Add the path to an external stylesheet.',
    addStylesBtn: {
      text: 'APPEND STYLESHEET',
    },
    removeAppendedStylesBtn: {
      text: 'REMOVE APPENDED STYLESHEETS',
    },
    removeAllStylesBtn: {
      text: 'REMOVE ALL STYLESHEETS',
    },
  }),

  methods: {
    addStylesheet() {
      appendStylesheet(this.currentStylesheet);
    },

    removeAppendedStyles() {
      removeAppendedStylesheets();
    },

    removeStyles() {
      removeAllStylesheets();
    },
  },
};
</script>

<style lang="scss" scoped>
  .manage-stylesheets {
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

    .remove-appended-styles {
      $btnColor: sandybrown;

      background: $btnColor;
      &:hover {
        background: lighten($btnColor, 6%);
      }
    }

    .remove-all-styles {
      $btnColor: crimson;

      background: $btnColor;
      &:hover {
        background: lighten($btnColor, 6%);
      }
    }
  }
</style>
