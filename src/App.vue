<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: 'heebo-medium';
  src: url('../src/assets/fonts/heebo-medium.ttf');
}

// @font-face {
//   font-family: 'didact-gothic';
//   src: url('../src/assets/fonts/didact-gothic-regular.ttf');
// }

// @font-face {
//   font-family: 'abeezee';
//   src: url('../src/assets/fonts/abeezee-regular.ttf');
// }

// @font-face {
//   font-family: 'lato';
//   src: url('../src/assets/fonts/lato.ttf');
// }

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkslategrey;
  min-height: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

  a, abbr, acronym, address, applet, area, article, aside, audio, b, base, basefont, bdi, bdo, big,
  blockquote, br, button, canvas, caption, center, cite, code, col, colgroup, datalist, dd, del,
  details, dfn, dialog, dir, div, dl, dt, em, embed, fieldset, figcaption, figure, font, footer,
  form, frame, frameset, head, header, h1, h2, h3, h4, h5, h6, hr, i, iframe, img, input, ins, kbd,
  keygen, label, legend, li, link, main, map, mark, menu, menuitem, meta, meter, nav, noscript,
  object, ol, optgroup, option, output, param, progress, q, rp, rt, ruby, s, samp, script, section,
  select, small, source, span, strike, strong, style, sub, summary, sup, table, tbody, td, textarea,
  tfoot, th, thead, time, title, tr, track, tt, u, var, video, wbr {
    font-family: 'heebo-medium', 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
