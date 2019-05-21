export default [
  {
    category: 'Browser Specs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/GTK_logo.svg/949px-GTK_logo.svg.png',
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
    image: 'https://cdn.pixabay.com/photo/2016/07/19/08/52/hand-1527793_960_720.png',
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
