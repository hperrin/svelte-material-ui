import{a as p,t as n}from"../chunks/disclose-version.Bsnu83OK.js";import"../chunks/legacy.BG3nWsJQ.js";import{n as t,a3 as e,c as o,r}from"../chunks/runtime.SXGrDfxi.js";import{h}from"../chunks/svelte-head.C25JiT13.js";var c=n(`<h1 id="material-typography">Material Typography</h1> <p>If you’d like to style your entire app using Material’s typography, you can add Sass like this to your <code>_smui-theme.scss</code> files.</p> <pre class="highlight"><code class="language-scss"><span class="hljs-comment">// Import the mixins.</span>
<span class="hljs-keyword">@use</span> <span class="hljs-string">'@material/typography/index'</span> as typography;

<span class="hljs-selector-tag">html</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">'body1'</span>);
}

<span class="hljs-selector-tag">h1</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">'headline1'</span>);
}

<span class="hljs-selector-tag">h2</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">'headline2'</span>);
}

<span class="hljs-selector-tag">h3</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">'headline3'</span>);
}

<span class="hljs-selector-tag">h4</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">'headline4'</span>);
}

<span class="hljs-selector-tag">h5</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">'headline5'</span>);
}

<span class="hljs-selector-tag">h6</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">'headline6'</span>);
}

<span class="hljs-selector-tag">caption</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">'caption'</span>);
}

<span class="hljs-selector-tag">code</span>,
pre {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">'Roboto Mono'</span>, monospace;
}

small {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0.9em</span>;
}

big {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">1.1em</span>;
}

<span class="hljs-selector-tag">b</span>,
<span class="hljs-selector-tag">strong</span> {
  <span class="hljs-attribute">font-weight</span>: bold;
}</code></pre>`,1);function i(a){var s=c();t(4),p(a,s)}var y=n('<section class="markdown svelte-1xoo2bu"><!></section>');function f(a){var s=y();h(g=>{e.title="Typography - SMUI"});var l=o(s);i(l),r(s),p(a,s)}export{f as component};
