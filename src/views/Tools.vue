<template>
  <div :class="className">
    <h2 class="subtitle">{{ $route.params.toolName }}</h2>

    <div class="tool-list">
      <div
      v-for="(tool, toolKey) in toolList"
      :key="toolKey"
      class="category">
        <p class="category__name">{{ tool.category }}</p>
        <router-link
        v-for="(item, itemKey) in tool.items"
        :key="itemKey"
        class="item"
        :to="{
          name: `${$route.params.toolName}Showcase`,
          params: {
            name: item.name || null,
            importRef: item.srcFile || null,
            additionalTemplates: item.additionalTemplates || null,
            additionalScripts: item.additionalScripts || null,
          }
        }">
        <p class="item__name">{{ item.name }}</p>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
import modulesList from '../../sfc/modules/_base/modules-list';
import utilsList from '../../sfc/utils/_base/utils-list';

export default {
  name: 'Tools',

  data: () => ({
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
  },
};
</script>

<style lang="scss">
  .tools {
    .tool-list {
      .category {
        &__name {
          font-size: 1.5rem;
        }

        .item {
          &__name {
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>
