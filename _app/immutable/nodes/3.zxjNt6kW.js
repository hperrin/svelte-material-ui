import{a as e,t as l}from"../chunks/disclose-version.Bsnu83OK.js";import"../chunks/legacy.BG3nWsJQ.js";import{n,a3 as o,c as p,r as c}from"../chunks/runtime.SXGrDfxi.js";import{h as i}from"../chunks/svelte-head.C25JiT13.js";var r=l(`<h1 id="installation">Installation</h1> <p>To get started, install the SMUI packages you need.</p> <pre class="highlight"><code class="language-sh">npm install --save-dev @smui/button
npm install --save-dev @smui/card
<span class="hljs-comment"># etc...</span></code></pre> <p>You can also <a href="/REPL.md">use SMUI in the Svelte REPL</a>.</p> <h2 id="sveltekit">SvelteKit</h2> <p>For SvelteKit, check out the <a href="/SVELTEKIT.md">SvelteKit instructions</a>. Otherwise, read on.</p> <h2 id="importing-components">Importing Components</h2> <p><strong>Please note that these imports require a theme. See the default or custom theme below.</strong></p> <p>You will always import Svelte components from the individual packages.</p> <pre class="highlight"><code class="language-svelte"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>></span></span><span class="language-javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'@smui/button'</span>;
</span><span class="language-xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>></span></span></code></pre> <h2 id="fonts">Fonts</h2> <p>Material uses the Roboto fonts, so be sure to include these stylesheets (or include them from a package).</p> <pre class="highlight"><code class="language-html"><span class="hljs-comment">&lt;!-- Hint where we get fonts from. --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"preconnect"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://fonts.googleapis.com"</span> /></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"preconnect"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://fonts.gstatic.com"</span> <span class="hljs-attr">crossorigin</span> /></span>

<span class="hljs-comment">&lt;!-- Roboto, and Roboto Mono fonts --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@0;1&amp;family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap"</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
/></span></code></pre> <h2 id="icons">Icons</h2> <p>The easiest way to get Material icons is the font. If you’d like to use the Material Icons font, include that, also in the <code>head</code> section.</p> <pre class="highlight"><code class="language-html"><span class="hljs-comment">&lt;!-- Material Icons fonts --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">"https://fonts.googleapis.com/css2?family=Material+Icons&amp;display=swap"</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
/></span></code></pre> <p>However, you can get a greatly expanded icon library and reduce over-the-wire sizes by using <a href="https://pictogrammers.com/library/mdi/" rel="nofollow">the MDI library</a> instead.</p> <pre class="highlight"><code class="language-sh">npm install --save-dev @mdi/js</code></pre> <p>You can see how to use these icons on the “Using SVGs” demo on the <a href="https://sveltematerialui.com/demo/icon-button/" rel="nofollow">Icon Button demo page</a>.</p> <h2 id="installing-a-theme">Installing a Theme</h2> <h3 id="a-custom-theme">A Custom Theme</h3> <p>Check out the <a href="/THEMING.md">theming instructions</a> for setting up a custom theme.</p> <h3 id="the-default-theme">The Default Theme</h3> <p>You can use the prebuilt “bare.css” file from the “svelte-material-ui” package. If you use this option you <em>can</em> mostly customize your theme, but your <a href="/THEMING.md#theming-the-bare-css">theming options</a> are more limited.</p> <pre class="highlight"><code class="language-sh">npm install --save svelte-material-ui</code></pre> <pre class="highlight"><code class="language-html"><span class="hljs-comment">&lt;!-- SMUI Styles --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"node_modules/svelte-material-ui/bare.css"</span> /></span></code></pre> <p>If that’s not working (probably because your dependencies aren’t copied to your build folder), you can also use a CDN. Just be sure you update the version here when you update to a new version of SMUI. <strong>This is already an outdated version, so update it now too.</strong></p> <pre class="highlight"><code class="language-html"><span class="hljs-comment">&lt;!-- SMUI Styles --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/bare.min.css"</span>
/></span></code></pre> <p>You can also use the “bare.css” files from the individual packages if you don’t use many components and want smaller file sizes.</p> <h3 id="a-premade-theme">A Premade Theme</h3> <p>There are some premade themes as well in the “svelte-material-ui” package, including dark mode versions. These are the same themes that appear on the <a href="https://sveltematerialui.com/" rel="nofollow">demo site</a>. You won’t find the CSS in the repo, because they’re not git tracked, but here’s a list.</p> <ul><li><code>themes/svelte.css</code></li> <li><code>themes/svelte-dark.css</code></li> <li><code>themes/material.css</code></li> <li><code>themes/material-dark.css</code></li> <li><code>themes/fixation.css</code></li> <li><code>themes/fixation-dark.css</code></li> <li><code>themes/bubblegum.css</code></li> <li><code>themes/bubblegum-dark.css</code></li> <li><code>themes/metro.css</code></li> <li><code>themes/metro-dark.css</code></li> <li><code>themes/unity.css</code></li> <li><code>themes/unity-dark.css</code></li></ul> <pre class="highlight"><code class="language-sh">npm install --save svelte-material-ui</code></pre> <pre class="highlight"><code class="language-html"><span class="hljs-comment">&lt;!-- SMUI Styles --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">"node_modules/svelte-material-ui/themes/svelte.css"</span>
  <span class="hljs-attr">media</span>=<span class="hljs-string">"(prefers-color-scheme: light)"</span>
/></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">"node_modules/svelte-material-ui/themes/svelte-dark.css"</span>
  <span class="hljs-attr">media</span>=<span class="hljs-string">"screen and (prefers-color-scheme: dark)"</span>
/></span></code></pre> <p>Or with a CDN. <strong>Remember to update the version!</strong></p> <pre class="highlight"><code class="language-html"><span class="hljs-comment">&lt;!-- SMUI Styles --></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/themes/svelte.min.css"</span>
  <span class="hljs-attr">media</span>=<span class="hljs-string">"(prefers-color-scheme: light)"</span>
/></span>
<span class="hljs-tag">&lt;<span class="hljs-name">link</span>
  <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
  <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/svelte-material-ui@7.0.0/themes/svelte-dark.min.css"</span>
  <span class="hljs-attr">media</span>=<span class="hljs-string">"screen and (prefers-color-scheme: dark)"</span>
/></span></code></pre> <h2 id="making-your-tooling-svelte-aware">Making Your Tooling Svelte-Aware</h2> <p>A lot of tooling is already Svelte-aware, but if you are installing into a Rollup or Webpack project, you will need to configure its export conditions names to see Svelte libraries correctly.</p> <h3 id="rollup">Rollup</h3> <p>You will need to add <code>'svelte'</code> to the <a href="https://github.com/rollup/plugins/tree/master/packages/node-resolve#exportconditions" rel="nofollow"><code>exportConditions</code> config</a> of <code>nodeResolve</code>.</p> <pre class="highlight"><code class="language-js"><span class="hljs-comment">// ...</span>
<span class="hljs-keyword">import</span> { nodeResolve } <span class="hljs-keyword">from</span> <span class="hljs-string">'@rollup/plugin-node-resolve'</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-comment">// ...</span>
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-comment">// ...</span>
    <span class="hljs-title function_">nodeResolve</span>({
      <span class="hljs-comment">// ...</span>
      <span class="hljs-attr">exportConditions</span>: [<span class="hljs-string">'svelte'</span>],
    }),
  ],
};</code></pre> <h3 id="webpack">Webpack</h3> <p>You will need to add <code>'svelte'</code> to the <a href="https://webpack.js.org/configuration/resolve/#resolveconditionnames" rel="nofollow"><code>resolve.conditionNames</code> config</a>.</p> <pre class="highlight"><code class="language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-comment">// ...</span>
  <span class="hljs-attr">resolve</span>: {
    <span class="hljs-comment">// ...</span>
    <span class="hljs-attr">conditionNames</span>: [<span class="hljs-string">'svelte'</span>, <span class="hljs-string">'require'</span>, <span class="hljs-string">'node'</span>],
  },
};</code></pre>`,1);function h(a){var s=r();n(86),e(a,s)}var m=l('<section class="markdown svelte-1xoo2bu"><!></section>');function v(a){var s=m();i(d=>{o.title="Installation - SMUI"});var t=p(s);h(t),c(s),e(a,s)}export{v as component};
