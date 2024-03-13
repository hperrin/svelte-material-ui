import{s as m,n as r}from"./scheduler.Y0SF-lgF.js";import{S as d,i as p,e as s,a as c,f as u,B as f,g as _,h,E as x}from"./index.NFc0pX0t.js";import{e as g}from"./dispatch.qs32LN2H.js";function v(o,i,n){const e=o.slice();return e[0]=i[n],e}function q(o){let i,n=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;return{c(){i=_("p"),i.textContent=n},l(e){i=h(e,"P",{"data-svelte-h":!0}),x(i)!=="svelte-wzcqnk"&&(i.textContent=n)},m(e,t){c(e,i,t)},p:r,d(e){e&&u(i)}}}function b(o){let i,n=g(Array(2)),e=[];for(let t=0;t<n.length;t+=1)e[t]=q(v(o,n,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();i=s()},l(t){for(let a=0;a<e.length;a+=1)e[a].l(t);i=s()},m(t,a){for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,a);c(t,i,a)},p:r,i:r,o:r,d(t){t&&u(i),f(e,t)}}}class L extends d{constructor(i){super(),p(this,i,null,b,m,{})}}export{L};
