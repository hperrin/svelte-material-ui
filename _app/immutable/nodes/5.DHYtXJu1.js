import{Et as e,I as t,R as n,Tt as r,X as i,it as a,nt as o,w as s}from"../chunks/Bf_DJP33.js";import"../chunks/xihTtKlq.js";import"../chunks/B_anq4TC.js";var c=n(`<h1 id="using-smui-in-the-svelte-repl">Using SMUI in the Svelte REPL</h1> <p>Check out an <a href="https://svelte.dev/repl/aa857c3bb5eb478cbe6b1fd6c6da522a" rel="nofollow">example REPL</a>.</p> <p>SMUI components provide “bare.css” files to use in the REPL. In a <code>&lt;svelte:head&gt;</code> section, load from a CDN like UNPKG the CSS files for the fonts, for Material typography, and for SMUI:</p> <pre class="highlight"><code class="language-svelte"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">svelte:head</span>&gt;</span>
  </span><span class="hljs-comment">&lt;!-- Fonts --&gt;</span><span class="language-xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span>
    <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span>
    <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://fonts.googleapis.com/icon?family=Material+Icons&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span>
    <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span>
    <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&quot;</span>
  /&gt;</span>

  </span><span class="hljs-comment">&lt;!-- Common CSS --&gt;</span><span class="language-xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://unpkg.com/@smui/common/bare.css&quot;</span> /&gt;</span>

  </span><span class="hljs-comment">&lt;!-- SMUI --&gt;</span><span class="language-xml">
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://unpkg.com/svelte-material-ui/bare.css&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">svelte:head</span>&gt;</span></span></code></pre> <p>Now load the Components, from within a <code>&lt;script&gt;</code> section, and you can use them:</p> <pre class="highlight"><code class="language-svelte"><span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">on:click</span>=</span></span><span class="language-javascript">&#123;<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#x27;See, I told you.&#x27;</span>)&#125;</span><span class="language-xml"><span class="hljs-tag">&gt;</span>This is a button!<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">Card</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 360px; margin: 2em auto;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Content</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mdc-typography--body2&quot;</span>&gt;</span>This is a card!<span class="hljs-tag">&lt;/<span class="hljs-name">Content</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Card</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="language-javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Button</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@smui/button&#x27;</span>;
  <span class="hljs-keyword">import</span> <span class="hljs-title class_">Card</span>, &#123; <span class="hljs-title class_">Content</span> &#125; <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@smui/card&#x27;</span>;
</span><span class="language-xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span></code></pre>`,1);function l(e){var n=c();r(10),t(e,n)}var u=n(`<section class="markdown svelte-p7n4sf"><!></section>`);function d(n){var r=u();s(`p7n4sf`,e=>{i(()=>{o.title=`REPL - SMUI`})}),l(a(r),{}),e(r),t(n,r)}export{d as component};