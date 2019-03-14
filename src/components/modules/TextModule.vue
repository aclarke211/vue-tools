<template>
  <div :class="['vc', className]">
    <p :class="['text', className]">Text</p>
    <p :class="['subtext', className]">Subtext</p>
  </div>
</template>

<script>
export default {
  name: 'TextModule',
  data: () => ({
    className: 'text-module',
  }),
};
</script>
