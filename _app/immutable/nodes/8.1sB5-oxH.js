import{s as x,n as i}from"../chunks/scheduler.Y0SF-lgF.js";import{S as k,i as w,g as y,s as m,h as g,E as u,c as j,k as f,a as c,f as o,r as b,x as v,j as $,u as M,v as T,d as C,t as H,w as E}from"../chunks/index.NFc0pX0t.js";function P(d){let s,p="Material Typography",e,n,a="If you’d like to style your entire app using Material’s typography, you can add Sass like this to your <code>_smui-theme.scss</code> files.",r,l,_=`<code class="language-scss"><span class="hljs-comment">// Import the mixins.</span>
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#39;@material/typography/index&#39;</span> as typography;

<span class="hljs-selector-tag">html</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#39;body1&#39;</span>);
}

<span class="hljs-selector-tag">h1</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#39;headline1&#39;</span>);
}

<span class="hljs-selector-tag">h2</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#39;headline2&#39;</span>);
}

<span class="hljs-selector-tag">h3</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#39;headline3&#39;</span>);
}

<span class="hljs-selector-tag">h4</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#39;headline4&#39;</span>);
}

<span class="hljs-selector-tag">h5</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#39;headline5&#39;</span>);
}

<span class="hljs-selector-tag">h6</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#39;headline6&#39;</span>);
}

<span class="hljs-selector-tag">caption</span> {
  <span class="hljs-keyword">@include</span> typography.typography(<span class="hljs-string">&#39;caption&#39;</span>);
}

<span class="hljs-selector-tag">code</span>,
pre {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;Roboto Mono&#39;</span>, monospace;
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
}</code>`;return{c(){s=y("h1"),s.textContent=p,e=m(),n=y("p"),n.innerHTML=a,r=m(),l=y("pre"),l.innerHTML=_,this.h()},l(t){s=g(t,"H1",{id:!0,"data-svelte-h":!0}),u(s)!=="svelte-rz246p"&&(s.textContent=p),e=j(t),n=g(t,"P",{"data-svelte-h":!0}),u(n)!=="svelte-jpe587"&&(n.innerHTML=a),r=j(t),l=g(t,"PRE",{class:!0,"data-svelte-h":!0}),u(l)!=="svelte-157hi9o"&&(l.innerHTML=_),this.h()},h(){f(s,"id","material-typography"),f(l,"class","highlight")},m(t,h){c(t,s,h),c(t,e,h),c(t,n,h),c(t,r,h),c(t,l,h)},p:i,i,o:i,d(t){t&&(o(s),o(e),o(n),o(r),o(l))}}}class S extends k{constructor(s){super(),w(this,s,null,P,x,{})}}function I(d){let s,p,e,n;return e=new S({}),{c(){s=m(),p=y("section"),b(e.$$.fragment),this.h()},l(a){v("svelte-19qn0g1",document.head).forEach(o),s=j(a),p=g(a,"SECTION",{class:!0});var l=$(p);M(e.$$.fragment,l),l.forEach(o),this.h()},h(){document.title="Typography - SMUI",f(p,"class","markdown svelte-1xoo2bu")},m(a,r){c(a,s,r),c(a,p,r),T(e,p,null),n=!0},p:i,i(a){n||(C(e.$$.fragment,a),n=!0)},o(a){H(e.$$.fragment,a),n=!1},d(a){a&&(o(s),o(p)),E(e)}}}class R extends k{constructor(s){super(),w(this,s,null,I,x,{})}}export{R as component};
