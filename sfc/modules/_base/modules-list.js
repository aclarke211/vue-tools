export default [
  {
    category: 'Text',
    image: 'https://cdn.pixabay.com/photo/2012/04/11/10/30/text-27354_960_720.png',
    items: [
      {
        name: 'TextModule',
        srcFile: () => import('../TextModule.vue'),
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
    category: 'Picture',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Picture_icon-72a7cf.svg/1024px-Picture_icon-72a7cf.svg.png',
    items: [
      {
        name: 'PictureModule',
        srcFile: () => import('../PictureModule.vue'),
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
