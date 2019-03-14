// Append an external stylesheet to a page
export function appendStylesheet(stylesPath) {
  // eslint-disable-next-line
  console.log(stylesPath);
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = stylesPath;

  document.head.appendChild(link);
}

export function addStyles() {
  // Need to add user inputted styles as a stylesheet
}
