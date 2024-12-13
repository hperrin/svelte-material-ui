import{b as f,a as i,t as k}from"../chunks/disclose-version.B3RRTx8Z.js";import"../chunks/legacy.DjbHF6v5.js";import{f as R,g as n,h as m,t as P,b as _,s as o,c as x,i as g,r as h,$ as C}from"../chunks/runtime.DwlehcF5.js";import{h as E}from"../chunks/svelte-head.D-HkJy3f.js";import{D}from"../chunks/Demo.Bfwjb-lf.js";import{s as S}from"../chunks/render.DfrYEMuQ.js";import{a as b,i as F}from"../chunks/index-client.BDIqpeZ8.js";import{S as M}from"../chunks/Slider.DLCa9k_B.js";import{F as T}from"../chunks/FormField.B8Q_aztq.js";import{B as y}from"../chunks/Button.C8xi94DV.js";var A=k('<span style="padding-inline-end: 12px; width: max-content; display: block;">Amount of Wonder</span>'),B=k("<p>No wonder.</p>"),I=k('<!> <!> <div><!></div> <pre class="status"> </pre>',1);function W(u){let e=_(50);var t=I(),r=R(t);T(r,{align:"end",style:"display: flex;",label:l=>{var p=A();i(l,p)},children:(l,p)=>{M(l,{style:"flex-grow: 1;",get value(){return n(e)},set value(c){m(e,b(c))}})},$$slots:{label:!0,default:!0}});var a=o(r,2);F(a,()=>n(e)==0,$=>{var l=B();i($,l)});var s=o(a,2),d=x(s);y(d,{onclick:()=>m(e,100),children:($,l)=>{g();var p=f("Maximum Wonder!");i($,p)},$$slots:{default:!0}}),h(s);var v=o(s,2),V=x(v);h(v),P(()=>S(V,`Value: ${n(e)??""}`)),i(u,t)}var L=k('<!> <pre class="status"> </pre>',1);function N(u){let e=_(0);var t=L(),r=R(t);M(r,{get value(){return n(e)},set value(d){m(e,b(d))},min:-10,max:10,step:.001,"input$aria-label":"Continuous slider"});var a=o(r,2),s=x(a);h(a),P(()=>S(s,`Value: ${n(e)??""}`)),i(u,t)}var U=k('<!> <pre class="status"> </pre>',1);function j(u){let e=_(0);var t=U(),r=R(t);M(r,{get value(){return n(e)},set value(d){m(e,b(d))},min:-10,max:10,step:2,discrete:!0,"input$aria-label":"Discrete slider"});var a=o(r,2),s=x(a);h(a),P(()=>S(s,`Value: ${n(e)??""}`)),i(u,t)}var q=k('<!> <pre class="status"> </pre>',1);function z(u){let e=_(0);var t=q(),r=R(t);M(r,{get value(){return n(e)},set value(d){m(e,b(d))},min:-100,max:100,step:5,discrete:!0,tickMarks:!0,"input$aria-label":"Tick mark slider"});var a=o(r,2),s=x(a);h(a),P(()=>S(s,`Value: ${n(e)??""}`)),i(u,t)}var G=k('<!> <div><!></div> <pre class="status"> </pre>',1);function H(u){let e=_(1),t=_(4);var r=G(),a=R(r);M(a,{range:!0,get start(){return n(e)},set start($){m(e,b($))},get end(){return n(t)},set end($){m(t,b($))},min:0,max:10,step:.1,"input$aria-label":"Range slider"});var s=o(a,2),d=x(s);y(d,{onclick:()=>{m(e,0),m(t,10)},children:($,l)=>{g();var p=f("Maximum Range!");i($,p)},$$slots:{default:!0}}),h(s);var v=o(s,2),V=x(v);h(v),P(()=>S(V,`Value: ${n(e)??""} - ${n(t)??""}`)),i(u,r)}var J=k('<!> <pre class="status"> </pre>',1);function K(u){let e=_(1),t=_(4);var r=J(),a=R(r);M(a,{range:!0,get start(){return n(e)},set start(v){m(e,b(v))},get end(){return n(t)},set end(v){m(t,b(v))},min:0,max:10,step:.1,minRange:1,"input$aria-label":"Min range slider"});var s=o(a,2),d=x(s);h(s),P(()=>S(d,`Value: ${n(e)??""} - ${n(t)??""}`)),i(u,r)}var O=k('<!> <pre class="status"> </pre>',1);function Q(u){let e=_(4),t=_(6);var r=O(),a=R(r);M(a,{range:!0,get start(){return n(e)},set start(v){m(e,b(v))},get end(){return n(t)},set end(v){m(t,b(v))},min:0,max:10,step:1,discrete:!0,tickMarks:!0,"input$aria-label":"Range slider"});var s=o(a,2),d=x(s);h(s),P(()=>S(d,`Value: ${n(e)??""} - ${n(t)??""}`)),i(u,r)}function X(u){M(u,{disabled:!0,value:5})}var Y=k('<section><h2>Slider</h2> <h5>Installation</h5> <pre class="demo-spaced">npm i -D @smui/slider</pre> <h5>Demos</h5> <!> <!> <!> <!> <!> <!> <!> <!></section>');function ue(u){var e=Y();E(l=>{C.title="Slider - SMUI"});var t=o(x(e),8);D(t,{component:W,file:"slider/_Simple.svelte"});var r=o(t,2);D(r,{component:N,file:"slider/_Continuous.svelte",children:(l,p)=>{g();var c=f("Continuous");i(l,c)},$$slots:{default:!0}});var a=o(r,2);D(a,{component:j,file:"slider/_Discrete.svelte",children:(l,p)=>{g();var c=f("Discrete with min/max/step");i(l,c)},$$slots:{default:!0}});var s=o(a,2);D(s,{component:z,file:"slider/_TickMarks.svelte",children:(l,p)=>{g();var c=f("Adding tick marks to discrete");i(l,c)},$$slots:{default:!0}});var d=o(s,2);D(d,{component:H,file:"slider/_Range.svelte",children:(l,p)=>{g();var c=f("Range slider");i(l,c)},$$slots:{default:!0}});var v=o(d,2);D(v,{component:K,file:"slider/_MinRange.svelte",subtitle:p=>{g();var c=f("Limit the range the user can select to a minimum value.");i(p,c)},children:(p,c)=>{g();var w=f("Min range slider");i(p,w)},$$slots:{subtitle:!0,default:!0}});var V=o(v,2);D(V,{component:Q,file:"slider/_DiscreteRange.svelte",children:(l,p)=>{g();var c=f("Discrete range slider with tick marks");i(l,c)},$$slots:{default:!0}});var $=o(V,2);D($,{component:X,file:"slider/_Disabled.svelte",children:(l,p)=>{g();var c=f("Disabled");i(l,c)},$$slots:{default:!0}}),h(e),i(u,e)}export{ue as component};
