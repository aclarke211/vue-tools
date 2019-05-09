export default {
  browserSpecs: [
    {
      name: 'debounceThrottle',
      srcFile: () => import('../debounceThrottle'),
      additionalTemplates: [
        '<h2>The debounceThrottle can be used for...</h2>',
      ],
      additionalScripts: [
        // eslint-disable-next-line
        () => { alert('Need to run the script for the util here.') }
      ],
    },
  ],
};
