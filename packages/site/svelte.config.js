import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import mdsvex from 'mdsvex';
import slug from 'remark-slug';
import path from 'path';

const { typescript } = preprocess;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],

  kit: {
    adapter: staticAdapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: [
          '@material/animation',
          '@material/banner',
          '@material/button',
          '@material/card',
          '@material/checkbox',
          '@material/chips',
          '@material/circular-progress',
          '@material/data-table',
          '@material/density',
          '@material/dialog',
          '@material/dom',
          '@material/drawer',
          '@material/elevation',
          '@material/fab',
          '@material/feature-targeting',
          '@material/floating-label',
          '@material/form-field',
          '@material/icon-button',
          '@material/image-list',
          '@material/layout-grid',
          '@material/line-ripple',
          '@material/linear-progress',
          '@material/list',
          '@material/menu',
          '@material/menu-surface',
          '@material/notched-outline',
          '@material/progress-indicator',
          '@material/radio',
          '@material/ripple',
          '@material/rtl',
          '@material/segmented-button',
          '@material/select',
          '@material/shape',
          '@material/slider',
          '@material/snackbar',
          '@material/switch',
          '@material/tab',
          '@material/tab-bar',
          '@material/tab-indicator',
          '@material/tab-scroller',
          '@material/textfield',
          '@material/theme',
          '@material/tooltip',
          '@material/top-app-bar',
          '@material/touch-target',
          '@material/typography',
          '@mdi/js',
          'tinygesture',
        ],
      },
      resolve: {
        alias: {
          svelte: path.resolve('../../node_modules/svelte'),
        },
      },
    },
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: [
    typescript(),
    mdsvex.mdsvex({
      extensions: ['.svx', '.md'],
      highlight: {
        alias: { svelte: 'html' },
      },
      remarkPlugins: [slug],
    }),
  ],
};

export default config;
