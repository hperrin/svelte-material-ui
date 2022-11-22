import staticAdapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import hljs from 'highlight.js';
import hljs_svelte from 'highlightjs-svelte';
import slug from 'rehype-slug';

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

  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.svx', '.md'],
      rehypePlugins: [slug],
      highlight: { highlighter },
    }),
  ],

  kit: {
    adapter: staticAdapter(),
  },
};

export default config;
