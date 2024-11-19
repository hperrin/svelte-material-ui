import{a as n,t as l}from"../chunks/disclose-version.Bsnu83OK.js";import"../chunks/legacy.BG3nWsJQ.js";import{n as t,a3 as e,c,r as h}from"../chunks/runtime.SXGrDfxi.js";import{h as o}from"../chunks/svelte-head.C25JiT13.js";var r=l(`<h1 id="using-smui-in-the-svelte-repl">Using SMUI in the Svelte REPL</h1> <p>Check out an <a href="https://svelte.dev/repl/aa857c3bb5eb478cbe6b1fd6c6da522a" rel="nofollow">example REPL</a>.</p> <p>SMUI components provide “bare.css” files to use in the REPL. In a <code>&lt;svelte:head></code> section, load from a CDN like UNPKG the CSS files for the fonts, for Material typography, and for SMUI:</p> <pre class="highlight"><code class="language-svelte"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">svelte:head</span>></span>
  </span><span class="hljs-comment">&lt;!-- Fonts --></span><span class="language-xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span>
    <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
    <span class="hljs-attr">href</span>=<span class="hljs-string">"https://fonts.googleapis.com/icon?family=Material+Icons"</span>
  /></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span>
    <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
    <span class="hljs-attr">href</span>=<span class="hljs-string">"https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"</span>
  /></span>

  </span><span class="hljs-comment">&lt;!-- Material Typography --></span><span class="language-xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span>
    <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>
    <span class="hljs-attr">href</span>=<span class="hljs-string">"https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"</span>
  /></span>

  </span><span class="hljs-comment">&lt;!-- SMUI --></span><span class="language-xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://unpkg.com/svelte-material-ui/bare.css"</span> /></span>
<span class="hljs-tag">&lt;/<span class="hljs-name">svelte:head</span>></span></span></code></pre> <p>Now load the Components, from within a <code>&lt;script></code> section, and you can use them:</p> <pre class="highlight"><code class="language-svelte"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">on:click</span>=</span></span><span class="language-javascript">{<span class="hljs-function">() =></span> <span class="hljs-title function_">alert</span>(<span class="hljs-string">'See, I told you.'</span>)}</span><span class="language-xml"><span class="hljs-tag">></span>This is a button!<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>></span>

<span class="hljs-tag">&lt;<span class="hljs-name">Card</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 360px; margin: 2em auto;"</span>></span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Content</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mdc-typography--body2"</span>></span>This is a card!<span class="hljs-tag">&lt;/<span class="hljs-name">Content</span>></span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Card</span>></span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>></span></span><span class="language-javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">'@smui/button'</span>;
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Card</span>, { <span class="hljs-title class_">Content</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'@smui/card'</span>;
</span><span class="language-xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>></span></span></code></pre>`,1);function i(a){var s=r();t(10),n(a,s)}var g=l('<section class="markdown svelte-1xoo2bu"><!></section>');function y(a){var s=g();o(j=>{e.title="REPL - SMUI"});var p=c(s);i(p),h(s),n(a,s)}export{y as component};
