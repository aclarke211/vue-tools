const stylesheetsClassName = 'external-stylesheet';

// Append an external stylesheet to a page
export function appendStylesheet(stylesPath) {
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = stylesPath;
  link.className = stylesheetsClassName;
  document.head.appendChild(link);
  // eslint-disable-next-line
  console.info(`%cAdded stylesheet: ${stylesPath}.`, 'font-size: .75rem; color: slategrey');
}

export function removeStylesheet(stylesPath) {
  // eslint-disable-next-line
  console.log('Removing Stylesheet');
  // eslint-disable-next-line
  console.log(stylesPath);

  const sheet = document.querySelector(`link[href="${stylesPath}"][class="external-stylesheet"]`);

  // eslint-disable-next-line
  console.log(sheet);

  try {
    sheet.parentNode.removeChild(sheet);
  } catch (err) {
    // eslint-disable-next-line
    console.info(`%cCould not remove stylesheet: ${sheet}.`, 'font-size: .75rem; color: slategrey');
  }
}

export function removeAppendedStylesheets() {
  const sheets = document.querySelectorAll(`.${stylesheetsClassName}`);

  sheets.forEach((sheet) => {
    try {
      sheet.parentNode.removeChild(sheet);
    } catch (err) {
      // eslint-disable-next-line
      console.info(`%cCould not remove stylesheet: ${sheet}.`, 'font-size: .75rem; color: slategrey');
    }
  });
}

export function removeAllStylesheets() {
  const sheets = document.querySelectorAll('style,[rel="stylesheet"],[type="text/css"]');

  sheets.forEach((sheet) => {
    try {
      sheet.parentNode.removeChild(sheet);
    } catch (err) {
      // eslint-disable-next-line
      console.info(`%cCould not remove stylesheet: ${sheet}.`, 'font-size: .75rem; color: slategrey');
    }
  });
}
