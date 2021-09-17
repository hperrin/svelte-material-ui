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
