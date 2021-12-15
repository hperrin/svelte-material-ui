import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import hljs from 'highlight.js';
import hljs_svelte from 'highlightjs-svelte';
import slug from 'remark-slug';
import path from 'path';

const { typescript } = preprocess;
hljs_svelte(hljs);

function highlighter(code, lang) {
  return `<pre class="highlight"><code class="language-${
    lang || 'plaintext'
  }">${hljs
    .highlight(code, { language: lang || 'plaintext' })
    .value.replace(/\{/g, () => '&#123;')
    .replace(/\}/g, () => '&#125;')}</code></pre>`;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],

  kit: {
    adapter: staticAdapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: ['tinygesture', /^@material\//, /^@smui(?:-extra)?\//],
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
    mdsvex({
      extensions: ['.svx', '.md'],
      remarkPlugins: [slug],
      highlight: { highlighter },
    }),
  ],
};

export default config;
