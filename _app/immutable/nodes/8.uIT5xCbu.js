import{a as p,t as n}from"../chunks/disclose-version.L5AxZWdJ.js";import"../chunks/legacy.BD6Y8N1p.js";import{j as t,a3 as e,e as o,r}from"../chunks/runtime.W_ZEMHic.js";import{h}from"../chunks/svelte-head.CjyVSp6W.js";var c=n(`<h1 id="material-typography">Material Typography</h1> <p>If you’d like to style your entire app using Material’s typography, you can add Sass like this to your <code>_smui-theme.scss</code> files.</p> <pre class="highlight"><code class="language-scss"><span class="hljs-comment">// Import the mixins.</span>
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@material/typography/index&#x27;</span> as typography;

<span class="hljs-selector-tag">html</span> &#123;
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#x27;body1&#x27;</span>);
&#125;

<span class="hljs-selector-tag">h1</span> &#123;
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#x27;headline1&#x27;</span>);
&#125;

<span class="hljs-selector-tag">h2</span> &#123;
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#x27;headline2&#x27;</span>);
&#125;

<span class="hljs-selector-tag">h3</span> &#123;
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#x27;headline3&#x27;</span>);
&#125;

<span class="hljs-selector-tag">h4</span> &#123;
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#x27;headline4&#x27;</span>);
&#125;

<span class="hljs-selector-tag">h5</span> &#123;
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#x27;headline5&#x27;</span>);
&#125;

<span class="hljs-selector-tag">h6</span> &#123;
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#x27;headline6&#x27;</span>);
&#125;

<span class="hljs-selector-tag">caption</span> &#123;
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#x27;caption&#x27;</span>);
&#125;

<span class="hljs-selector-tag">code</span>,
pre &#123;
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#x27;Roboto Mono&#x27;</span>, monospace;
&#125;

small &#123;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0.9em</span>;
&#125;

big &#123;
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.1em</span>;
&#125;

<span class="hljs-selector-tag">b</span>,
<span class="hljs-selector-tag">strong</span> &#123;
  <span class="hljs-attribute">font-weight</span>: bold;
&#125;</code></pre>`,1);function i(a){var s=c();t(4),p(a,s)}var y=n('<section class="markdown svelte-1xoo2bu"><!></section>');function x(a){var s=y();h(g=>{e.title="Typography - SMUI"});var l=o(s);i(l),r(s),p(a,s)}export{x as component};
