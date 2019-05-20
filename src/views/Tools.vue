<template>
  <div :class="className">
    <h2 class="subtitle">{{ $route.params.toolName }}</h2>

    <div class="tool-list">
      <div
      v-for="(tool, toolKey) in toolList"
      :key="toolKey"
      class="category">
        <p class="category__name">{{ tool.category }}</p>
        <div
        v-for="(item, itemKey) in tool.items"
        :key="itemKey"
        class="">
        {{ item.name }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import modulesList from '../../sfc/modules/base/modules-list';
import utilsList from '../../sfc/utils/base/utils-list';

export default {
  name: 'Tools',

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

  data: () => ({
    className: 'tools',
  }),
};
</script>
