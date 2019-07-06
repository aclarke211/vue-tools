<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../sfc/css/_base/mixins.scss';

@font-face {
  font-family: 'heebo-medium';
  src: url('../src/assets/fonts/heebo-medium.ttf');
}

@include setFont('heebo-medium');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkslategrey;
  min-height: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>
