import{Et as e,I as t,R as n,Tt as r,X as i,it as a,nt as o,w as s}from"../chunks/Bf_DJP33.js";import"../chunks/xihTtKlq.js";import"../chunks/B_anq4TC.js";var c=n(`<h1 id="material-typography">Material Typography</h1> <p>If you’d like to style your entire app using Material’s typography, you can add this Sass to your <code>_smui-theme.scss</code> files.</p> <pre class="highlight"><code class="language-scss"><span class="hljs-comment">// Import the mixins.</span>
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@smui/common/typography/index&#x27;</span> as typography;

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
&#125;</code></pre>`,1);function l(e){var n=c();r(4),t(e,n)}var u=n(`<section class="markdown svelte-l8orkv"><!></section>`);function d(n){var r=u();s(`l8orkv`,e=>{i(()=>{o.title=`Typography - SMUI`})}),l(a(r),{}),e(r),t(n,r)}export{d as component};