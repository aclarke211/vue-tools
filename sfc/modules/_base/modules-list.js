export default [
  {
    category: 'Text',
    icon: 'https://cdn.pixabay.com/photo/2012/04/11/10/30/text-27354_960_720.png',
    items: [
      {
        name: 'TextModule',
        srcFile: () => import('../TextModule.vue'),
        props: {
          text: 'This is the updated Text Module text.',
        },
        additionalTemplates: ['<h2>The <span>TEXT MODULE</span> can be used for...</h2>'],
        additionalScripts: [
          () => {
            // eslint-disable-next-line
            console.log('[TEXT MODULE] Loaded.')
          },
        ],
      },
      {
        name: 'TitleModule',
        srcFile: () => import('../TitleModule.vue'),
        props: {
          text: 'This is the updated TITLE Module text.',
        },
        additionalTemplates: ['<h2>The <span>TITLE MODULE</span> can also have a subtitle.</h2>'],
        additionalScripts: [
          () => {
            // eslint-disable-next-line
            console.log('[TITLE MODULE] Loaded.')
          },
        ],
      },
    ],
  },
  {
    category: 'Picture',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Picture_icon-72a7cf.svg/1024px-Picture_icon-72a7cf.svg.png',
    items: [
      {
        name: 'PictureModule',
        srcFile: () => import('../PictureModule.vue'),
        additionalScripts: [
          () => {
            // eslint-disable-next-line
            console.log('[PICTURE MODULE] Loaded')
          },
        ],
      },
    ],
  },
];
