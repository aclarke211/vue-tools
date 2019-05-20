export default [
  {
    category: 'Text',
    items: [
      {
        name: 'TextModule',
        srcFile: () => import('../TextModule.vue'),
      },
    ],
  },
  {
    category: 'Picture',
    items: [
      {
        name: 'PictureModule',
        srcFile: () => import('../PictureModule.vue'),
      },
    ],
  },
];
