// const node = require('@sveltejs/adapter-node');
import static from '@sveltejs/adapter-static';
import pkg from './package.json';
import { mdsvex } from 'mdsvex';
import slug from 'remark-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],

  kit: {
    adapter: static(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
      resolve: {
        alias: {
          svelte: '../node_modules/svelte',
        },
        dedupe: ['@material', '@smui'],
      },
    },
  },

  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: mdsvex({
    extensions: ['.svx', '.md'],
    highlight: {
      alias: { svelte: 'html' },
    },
    remarkPlugins: [slug],
  }),
};

export default config;
