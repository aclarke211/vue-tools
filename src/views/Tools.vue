<template>
  <div :class="[className, config.className]">
    <h2
      v-if="toolData.title"
      :class="`${className}__title`">
      {{ toolData.title }}
    </h2>

    <p
      v-if="toolData.description"
      :class="`${className}__description`">
      {{ toolData.description }}
    </p>

    <div class="tool-list">
      <div
      v-for="(tool, toolKey) in toolList"
      :key="toolKey"
      class="category">
        <img
          v-if="tool.icon"
          class="category__img"
          :src="tool.icon">
        <p class="category__name">{{ tool.category }}</p>
        <router-link
        v-for="(item, itemKey) in tool.items"
        :key="itemKey"
        class="item"
        :to="{
          name: `${$route.params.toolName}Showcase`,
          params: {
            name: item.name || null,
            className: `${$route.params.toolName}-showcase` || null,
            titleText: `${$route.params.toolName} Showcase` || null,
            importRef: item.srcFile || null,
            additionalTemplates: item.additionalTemplates || null,
            additionalScripts: item.additionalScripts || null,
            props: item.props || null
          }
        }">
        <p class="item__name">{{ item.name }}</p>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import config from '../../config/default.json';
import modulesList from '../../sfc/modules/_base/modules-list';
import utilsList from '../../sfc/utils/_base/utils-list';

export default {
  name: 'Tools',

  data: () => ({
    config,
    className: 'tools',
  }),

  computed: {
    toolList() {
      switch (this.$route.params.toolName) {
        case 'modules': {
          return modulesList;
        }

        case 'utils': {
          return utilsList;
        }

        default: {
          return 'Not Found';
        }
      }
    },

    toolData() {
      return config.tools[this.$route.params.toolName];
    },
  },
};
</script>

<style lang="scss">
@import '../../sfc/css/_base/mixins.scss';

  .tools {

    &__title {
      text-align: center;
      margin: 2rem 1rem 0;
      padding: 1rem;
      font-size: 1.75rem;
    }

    &__description {
      color: darkgrey;
      font-size: 1rem;
      text-align: center;
      padding: 1rem;
      margin: 0 1rem 4rem;
    }

    .tool-list {
      @include flexbox;

      .category {
        @include flexbox;
        flex-direction: column;
        flex: 0 0 45%;

        @include tablet {
          flex: 0 0 25%;
        }

        &__img {
          $imgSize: 5rem;

          display: block;
          height: $imgSize;
          width: $imgSize;
          object-fit: contain;
        }

        &__name {
          font-size: 1.5rem;
          margin: .5rem;
        }

        .item {
          text-decoration: none;
          margin: 1.25rem;
          transition: all .5s;
          cursor: pointer;

          &:hover .item__name {
            border-bottom-color: darkslategrey;
          }

          &__name {
            font-size: 1.25rem;
            border-bottom: 2px solid transparent;
            color: slategrey;
            margin: 0;
            padding: 0 0 .25rem;
            transition: all .5s;
          }
        }
      }
    }
  }
</style>
