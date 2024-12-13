import{b as i,a as t,t as G}from"../chunks/disclose-version.B3RRTx8Z.js";import"../chunks/legacy.DjbHF6v5.js";import{f as z,h as D,t as B,g as p,r as f,s as u,c as g,i as n,b as I,$ as j}from"../chunks/runtime.DwlehcF5.js";import{h as q}from"../chunks/svelte-head.D-HkJy3f.js";import{D as T}from"../chunks/Demo.Bfwjb-lf.js";import{s as O}from"../chunks/render.DfrYEMuQ.js";import{e as H,i as M}from"../chunks/dispatch.CwJSP0lB.js";import{a as S}from"../chunks/index-client.BDIqpeZ8.js";import{R as $}from"../chunks/Radio.DZxNPsmQ.js";import{F as m}from"../chunks/FormField.B8Q_aztq.js";import{B as w}from"../chunks/Button.C8xi94DV.js";var A=G('<div class="radio-demo svelte-t4otdb"></div> <div style="margin-top: 1em;"><!></div> <pre class="status"> </pre>',1);function E(_){let a=[{name:"Bashful",disabled:!1},{name:"Doc",disabled:!0},{name:"Dopey",disabled:!1},{name:"Happy",disabled:!1},{name:"Sleepy",disabled:!1},{name:"Sneezy",disabled:!1},{name:"Grumpy",disabled:!1}],r=I("Grumpy");var c=A(),v=z(c);H(v,21,()=>a,M,(b,d)=>{m(b,{label:R=>{n();var C=i();B(()=>O(C,`${p(d).name??""}${(p(d).disabled?" (disabled)":"")??""}`)),t(R,C)},children:(R,C)=>{$(R,{get group(){return p(r)},set group(k){D(r,S(k))},get value(){return p(d).name},get disabled(){return p(d).disabled}})},$$slots:{label:!0,default:!0}})}),f(v);var o=u(v,2),h=g(o);w(h,{onclick:()=>{D(r,"Doc")},children:(b,d)=>{n();var x=i("Select Doc Programmatically");t(b,x)},$$slots:{default:!0}}),f(o);var s=u(o,2),F=g(s);f(s),B(()=>O(F,`Selected: ${p(r)??""}`)),t(_,c)}var J=G('<div class="radio-demo svelte-t4otdb"></div> <pre class="status"> </pre>',1);function K(_){let a=I("On");var r=J(),c=z(r);H(c,20,()=>["On","Off"],M,(h,s)=>{m(h,{label:b=>{n();var d=i();B(()=>O(d,s)),t(b,d)},children:(b,d)=>{$(b,{get group(){return p(a)},set group(x){D(a,S(x))},get value(){return s},touch:!0})},$$slots:{label:!0,default:!0}})}),f(c);var v=u(c,2),o=g(v);f(v),B(()=>O(o,`Selected: ${p(a)??""}`)),t(_,r)}var L=G("<div><!> <!></div> <div><!> <!></div> <br><br> <div><!> <!></div> <div><!> <!></div>",1);function N(_){let a=I("on"),r=I("on");var c=L(),v=z(c),o=g(v);m(o,{label:e=>{n();var l=i("Custom");t(e,l)},children:(e,l)=>{$(e,{class:"my-colored-radio",get group(){return p(a)},set group(P){D(a,S(P))},value:"on"})},$$slots:{label:!0,default:!0}});var h=u(o,2);m(h,{label:e=>{n();var l=i("Color");t(e,l)},children:(e,l)=>{$(e,{class:"my-colored-radio",get group(){return p(a)},set group(P){D(a,S(P))},value:"off"})},$$slots:{label:!0,default:!0}}),f(v);var s=u(v,2),F=g(s);m(F,{label:e=>{n();var l=i("Disabled");t(e,l)},children:(e,l)=>{$(e,{class:"my-colored-radio",disabled:!0,group:"off",value:"on"})},$$slots:{label:!0,default:!0}});var b=u(F,2);m(b,{label:e=>{n();var l=i("Checked");t(e,l)},children:(e,l)=>{$(e,{class:"my-colored-radio",disabled:!0,group:"on",value:"on"})},$$slots:{label:!0,default:!0}}),f(s);var d=u(s,5),x=g(d);m(x,{label:e=>{n();var l=i("Fully");t(e,l)},children:(e,l)=>{$(e,{class:"my-fully-colored-radio",get group(){return p(r)},set group(P){D(r,S(P))},value:"on"})},$$slots:{label:!0,default:!0}});var R=u(x,2);m(R,{label:e=>{n();var l=i("Colored");t(e,l)},children:(e,l)=>{$(e,{class:"my-fully-colored-radio",get group(){return p(r)},set group(P){D(r,S(P))},value:"off"})},$$slots:{label:!0,default:!0}}),f(d);var C=u(d,2),k=g(C);m(k,{label:e=>{n();var l=i("Disabled");t(e,l)},children:(e,l)=>{$(e,{class:"my-fully-colored-radio",disabled:!0,group:"off",value:"on"})},$$slots:{label:!0,default:!0}});var U=u(k,2);m(U,{label:e=>{n();var l=i("Checked");t(e,l)},children:(e,l)=>{$(e,{class:"my-fully-colored-radio",disabled:!0,group:"on",value:"on"})},$$slots:{label:!0,default:!0}}),f(C),t(_,c)}var Q=G('<section><h2>Radio</h2> <h5>Installation</h5> <pre class="demo-spaced">npm i -D @smui/radio</pre> <h5>Demos</h5> <!> <!> <!></section>');function se(_){var a=Q();q(o=>{j.title="Radio - SMUI"});var r=u(g(a),8);T(r,{component:E,file:"radio/_Simple.svelte"});var c=u(r,2);T(c,{component:K,file:"radio/_Touch.svelte",children:(o,h)=>{n();var s=i("Increased touch target");t(o,s)},$$slots:{default:!0}});var v=u(c,2);T(v,{component:N,files:["radio/_Colored.svelte","radio/_Colored.scss"],children:(o,h)=>{n();var s=i("Colored (using Sass mixins)");t(o,s)},$$slots:{default:!0}}),f(a),t(_,a)}export{se as component};
