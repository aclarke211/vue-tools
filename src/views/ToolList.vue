<template>
  <div :class="className">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ $route.params.toolName }}</h2>

    <pre>{{ toolList }}</pre>
  </div>
</template>

<script>
import modulesList from '../modules/base/modules-list';
import utilsList from '../utils/base/utils-list';

export default {
  name: 'ToolList',

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
    className: 'tool-list',
    title: 'Tool List',
  }),
};
</script>
