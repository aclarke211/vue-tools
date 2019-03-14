// Append an external stylesheet to a page
export function appendStylesheet(stylesPath) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = stylesPath;
  document.head.appendChild(link);
  // eslint-disable-next-line
  console.info(`%cAdded stylesheet: ${stylesPath}.`, 'font-size: .75rem; color: slategrey');
}

export function addStyles() {
  // Need to add user inputted styles as a stylesheet
}
