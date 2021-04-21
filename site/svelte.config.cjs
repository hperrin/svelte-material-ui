// const node = require('@sveltejs/adapter-node');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');
const path = require('path');
const { mdsvex } = require('mdsvex');
const slug = require('remark-slug');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
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
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
        alias: {
          'smui-theme': path.resolve(__dirname, 'src/theme/_smui-theme.scss'),
        },
        dedupe: ['svelte', '@material', '@smui'],
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
