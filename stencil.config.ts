import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'online-assessment-test',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, 
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
