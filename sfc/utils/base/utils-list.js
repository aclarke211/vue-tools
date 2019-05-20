export default [
  {
    category: 'Browser Specs',
    items: [
      {
        name: 'debounceThrottle',
        srcFile: () => import('../debounceThrottle'),
        additionalTemplates: ['<h2>The debounceThrottle can be used for...</h2>'],
        additionalScripts: [
          () => {
            // eslint-disable-next-line
            alert('Need to run the script for the util here.');
          },
        ],
      },
    ],
  },
  {
    category: 'Styling',
    items: [
      {
        name: 'manageStylesheets',
        srcFile: () => import('../manageStylesheets'),
        additionalTemplates: ['<h2>Manage Stylesheets can do many things...</h2>'],
        additionalScripts: [
          () => {
          // eslint-disable-next-line
          alert('Need to run the script for the util here.');
          },
        ],
      },
    ],
  },
];
