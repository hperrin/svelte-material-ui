// import nodeAdapter from '@sveltejs/adapter-node';
import staticAdapter from '@sveltejs/adapter-static';
import mdsvex from 'mdsvex';
import slug from 'remark-slug';
import fs from 'fs';
import path from 'path';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

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
          '@smui/banner',
          '@smui/button',
          '@smui/card',
          '@smui/checkbox',
          '@smui/chips',
          '@smui/circular-progress',
          '@smui/common',
          '@smui/data-table',
          '@smui/dialog',
          '@smui/drawer',
          '@smui/fab',
          '@smui/floating-label',
          '@smui/form-field',
          '@smui/icon-button',
          '@smui/image-list',
          '@smui/layout-grid',
          '@smui/line-ripple',
          '@smui/linear-progress',
          '@smui/list',
          '@smui/menu',
          '@smui/menu-surface',
          '@smui/notched-outline',
          '@smui/paper',
          '@smui/radio',
          '@smui/ripple',
          '@smui/segmented-button',
          '@smui/select',
          '@smui/slider',
          '@smui/snackbar',
          '@smui/switch',
          '@smui/tab',
          '@smui/tab-bar',
          '@smui/tab-indicator',
          '@smui/tab-scroller',
          '@smui/textfield',
          '@smui/tooltip',
          '@smui/top-app-bar',
          '@smui/touch-target',
          '@mdi/js',
          'tinygesture',
        ],
      },
      resolve: {
        dedupe: ['@material', '@smui'],
        alias: {
          svelte: path.resolve('./node_moduels/svelte'),
        },
      },
    },
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: mdsvex.mdsvex({
    extensions: ['.svx', '.md'],
    highlight: {
      alias: { svelte: 'html' },
    },
    remarkPlugins: [slug],
  }),
};

export default config;
