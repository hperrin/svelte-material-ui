import{a as r,t as k,b as p}from"../chunks/disclose-version.B3RRTx8Z.js";import"../chunks/legacy.DjbHF6v5.js";import{p as R,k as O,c as M,n as E,r as T,t as C,a as q,f as N,j as le,i as h,s as f,b as D,g as c,h as y,$ as ae}from"../chunks/runtime.DwlehcF5.js";import{h as ie}from"../chunks/svelte-head.D-HkJy3f.js";import{D as w}from"../chunks/Demo.Bfwjb-lf.js";import{s as b}from"../chunks/render.DfrYEMuQ.js";import{p as L,b as V,r as W,i as z,a as A}from"../chunks/index-client.BDIqpeZ8.js";import{S as K,C as U,T as B}from"../chunks/Text.12BrrgiO.js";import{s as X,b as Y,u as Z,d as ee,c as te}from"../chunks/useActions.dWwaU660.js";import{s as ne,a as J}from"../chunks/store.wXOX-S52.js";import{B as F}from"../chunks/Button.C8xi94DV.js";import{C as j}from"../chunks/CommonLabel.5WGQzEOd.js";import{e as G,i as Q}from"../chunks/dispatch.CwJSP0lB.js";import{T as se}from"../chunks/TrailingAction.D8Uz5Jem.js";var ce=k("<i><!></i>");function re(S,o){R(o,!0);const t=ne(),$=()=>J(i,"$filter",t),m=()=>J(_,"$isSelected",t),v=()=>J(e,"$leadingIconClasses",t);let g=L(o,"use",19,()=>[]),d=L(o,"class",3,""),a=W(o,["$$slots","$$events","$$legacy","use","class","children"]);const i=O("SMUI:chips:filter"),_=O("SMUI:chips:chip:isSelected"),e=O("SMUI:chips:chip:leadingIconClasses");let s;function l(){return s}var u=ce();let n;var x=M(u);return X(x,()=>o.children??E),T(u),V(u,P=>s=P,()=>s),Y(u,(P,I)=>Z(P,I),g),C(()=>n=ee(u,n,{class:te({[d()]:!0,"mdc-chip__icon":!0,"mdc-chip__icon--leading":!0,"mdc-chip__icon--leading-hidden":$()&&m(),...v()}),...a})),r(S,u),q({getElement:l})}var $e=k('<span role="gridcell"><i><!></i></span>');function de(S,o){R(o,!0);let t=L(o,"use",19,()=>[]),$=L(o,"class",3,""),m=W(o,["$$slots","$$events","$$legacy","use","class","children"]),v;function g(){return v}var d=$e(),a=M(d);let i;var _=M(a);return X(_,()=>o.children??E),T(a),T(d),V(d,e=>v=e,()=>v),Y(d,(e,s)=>Z(e,s),t),C(()=>i=ee(a,i,{class:te({[$()]:!0,"mdc-chip__icon":!0,"mdc-chip__icon--trailing":!0}),...m})),r(S,d),q({getElement:g})}var ue=k("<!> <!> <!>",1),pe=k('<!> <pre class="status"> </pre>',1);function he(S){let o=D(0);var t=pe(),$=N(t);K($,{chips:["one","two","three","four","five"],chip:(d,a=E)=>{U(d,{get chip(){return a()},shouldRemoveOnTrailingIconClick:!1,onclick:()=>le(o),children:(i,_)=>{var e=ue(),s=N(e);z(s,()=>a()==="four",n=>{re(n,{class:"material-icons",children:(x,P)=>{h();var I=p("book");r(x,I)},$$slots:{default:!0}})});var l=f(s,2);B(l,{tabindex:0,children:(n,x)=>{h();var P=p();C(()=>b(P,a())),r(n,P)},$$slots:{default:!0}});var u=f(l,2);z(u,()=>a()==="five",n=>{de(n,{class:"material-icons",children:(x,P)=>{h();var I=p("commute");r(x,I)},$$slots:{default:!0}})}),r(i,e)},$$slots:{default:!0}})},$$slots:{chip:!0}});var m=f($,2),v=M(m);T(m),C(()=>b(v,`Clicked: ${c(o)??""}`)),r(S,t)}function ve(S){K(S,{chips:["one","two","three","four","five"],nonInteractive:!0,chip:(t,$=E)=>{U(t,{get chip(){return $()},children:(m,v)=>{B(m,{children:(g,d)=>{h();var a=p();C(()=>b(a,$())),r(g,a)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{chip:!0}})}var fe=k('<!> <div style="margin-top: 1em;">Programmatically select:</div> <!> <!> <!> <!> <pre class="status"> </pre>',1);function me(S){let o=["Morning","Afternoon","Evening","Night"],t=D("Morning");var $=fe(),m=N($);K(m,{chips:o,choice:!0,get selected(){return c(t)},set selected(s){y(t,A(s))},chip:(s,l=E)=>{U(s,{get chip(){return l()},children:(u,n)=>{B(u,{children:(x,P)=>{h();var I=p();C(()=>b(I,l())),r(x,I)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{chip:!0}});var v=f(m,4);F(v,{onclick:()=>y(t,"Morning"),children:(e,s)=>{j(e,{children:(l,u)=>{h();var n=p("Morning");r(l,n)},$$slots:{default:!0}})},$$slots:{default:!0}});var g=f(v,2);F(g,{onclick:()=>y(t,"Afternoon"),children:(e,s)=>{j(e,{children:(l,u)=>{h();var n=p("Afternoon");r(l,n)},$$slots:{default:!0}})},$$slots:{default:!0}});var d=f(g,2);F(d,{onclick:()=>y(t,"Evening"),children:(e,s)=>{j(e,{children:(l,u)=>{h();var n=p("Evening");r(l,n)},$$slots:{default:!0}})},$$slots:{default:!0}});var a=f(d,2);F(a,{onclick:()=>y(t,"Night"),children:(e,s)=>{j(e,{children:(l,u)=>{h();var n=p("Night");r(l,n)},$$slots:{default:!0}})},$$slots:{default:!0}});var i=f(a,2),_=M(i);T(i),C(()=>b(_,`Selected: ${c(t)??""}`)),r(S,$)}var _e=k('<!> <div style="margin-top: 1em;">Programmatically add:</div> <!> <div style="margin-top: 1em;">Programmatically remove:</div> <!> <pre class="status"> </pre>',1);function ge(S){let o=["Shoes","Pants","Shirts","Hats","Coats"],t=D(A(["Shoes","Shirts","Coats"]));function $(e){c(t).findIndex(l=>l===e)===-1&&c(t).push(e)}function m(e){const s=c(t).findIndex(l=>l===e);s!==-1&&c(t).splice(s,1)}var v=_e(),g=N(v);K(g,{chips:o,filter:!0,get selected(){return c(t)},set selected(s){y(t,A(s))},chip:(s,l=E)=>{U(s,{get chip(){return l()},touch:!0,children:(u,n)=>{B(u,{children:(x,P)=>{h();var I=p();C(()=>b(I,l())),r(x,I)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{chip:!0}});var d=f(g,4);G(d,17,()=>o,Q,(e,s)=>{F(e,{onclick:()=>$(c(s)),children:(l,u)=>{j(l,{children:(n,x)=>{h();var P=p();C(()=>b(P,c(s))),r(n,P)},$$slots:{default:!0}})},$$slots:{default:!0}})});var a=f(d,4);G(a,17,()=>o,Q,(e,s)=>{F(e,{onclick:()=>m(c(s)),children:(l,u)=>{j(l,{children:(n,x)=>{h();var P=p();C(()=>b(P,c(s))),r(n,P)},$$slots:{default:!0}})},$$slots:{default:!0}})});var i=f(a,2),_=M(i);C(()=>b(_,`Selected: ${c(t).join(", ")??""}`)),T(i),r(S,v)}var Pe=k("<!> <!>",1),xe=k('<!> <pre class="status"> </pre>',1);function Se(S){let o=["Shoes","Pants","Shirts","Hats","Coats"],t=D(A(["Shoes","Shirts","Coats"]));var $=xe(),m=N($);K(m,{chips:o,filter:!0,get selected(){return c(t)},set selected(a){y(t,A(a))},chip:(a,i=E)=>{U(a,{get chip(){return i()},touch:!0,children:(_,e)=>{var s=Pe(),l=N(s);re(l,{class:"material-icons",children:(n,x)=>{h();var P=p("checkroom");r(n,P)},$$slots:{default:!0}});var u=f(l,2);B(u,{children:(n,x)=>{h();var P=p();C(()=>b(P,i())),r(n,P)},$$slots:{default:!0}}),r(_,s)},$$slots:{default:!0}})},$$slots:{chip:!0}});var v=f(m,2),g=M(v);C(()=>b(g,`Selected: ${c(t).join(", ")??""}`)),T(v),r(S,$)}var Ce=k("<!> <!>",1),Ie=k("<!> <!>",1);function be(S){let o=D(A([1,2,3,4]));function t(){c(o).length?c(o).push(c(o)[c(o).length-1]+1):c(o).push(1)}var $=Ie(),m=N($);K(m,{get chips(){return c(o)},set chips(d){y(o,A(d))},input:!0,chip:(d,a=E)=>{U(d,{get chip(){return a()},children:(i,_)=>{var e=Ce(),s=N(e);B(s,{children:(u,n)=>{h();var x=p();C(()=>b(x,a())),r(u,x)},$$slots:{default:!0}});var l=f(s,2);se(l,{icon$class:"material-icons",children:(u,n)=>{h();var x=p("cancel");r(u,x)},$$slots:{default:!0}}),r(i,e)},$$slots:{default:!0}})},$$slots:{chip:!0}});var v=f(m,2);F(v,{onclick:t,children:(g,d)=>{j(g,{children:(a,i)=>{h();var _=p("Add");r(a,_)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(S,$)}var ke=k("<!> <!>",1),ye=k('<!> <!> <pre class="status"> </pre>',1);function Ae(S,o){R(o,!0);let t=D(A([{i:1,label:"Apple"},{i:2,label:"Apple"},{i:3,label:"Apple"},{i:4,label:"Apple"}])),$=D(void 0);function m(){c(t).length?c(t).push({i:c(t)[c(t).length-1].i+1,label:"Apple"}):c(t).push({i:1,label:"Apple"})}var v=ye(),g=N(v);K(g,{get chips(){return c(t)},set chips(e){y(t,A(e))},get selected(){return c($)},set selected(e){y($,A(e))},key:e=>`${e.i}`,filter:!0,input:!0,chip:(e,s=E)=>{U(e,{get chip(){return s()},children:(l,u)=>{var n=ke(),x=N(n);B(x,{children:(I,oe)=>{h();var H=p();C(()=>b(H,s().label)),r(I,H)},$$slots:{default:!0}});var P=f(x,2);se(P,{icon$class:"material-icons",children:(I,oe)=>{h();var H=p("cancel");r(I,H)},$$slots:{default:!0}}),r(l,n)},$$slots:{default:!0}})},$$slots:{chip:!0}});var d=f(g,2);F(d,{onclick:m,children:(_,e)=>{j(_,{children:(s,l)=>{h();var u=p("Add");r(s,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var a=f(d,2),i=M(a);C(()=>b(i,`Selected: ${(c($)&&c($).length?c($).map(_=>JSON.stringify(_)).join(", "):"None")??""}`)),T(a),r(S,v),q()}var Ne=k('<section><h2>Chips</h2> <h5>Installation</h5> <pre class="demo-spaced">npm i -D @smui/chips</pre> <h5>Demos</h5> <!> <!> <!> <!> <!> <!> <!></section>');function Re(S){var o=Ne();ie(i=>{ae.title="Chips - SMUI"});var t=f(M(o),8);w(t,{component:he,file:"chips/_Simple.svelte"});var $=f(t,2);w($,{component:ve,file:"chips/_NonInteractive.svelte",children:(i,_)=>{h();var e=p("Non-interactive chips");r(i,e)},$$slots:{default:!0}});var m=f($,2);w(m,{component:me,file:"chips/_Choice.svelte",children:(i,_)=>{h();var e=p("Choice chips");r(i,e)},$$slots:{default:!0}});var v=f(m,2);w(v,{component:ge,file:"chips/_Filter.svelte",children:(i,_)=>{h();var e=p("Filter chips with increased touch target");r(i,e)},$$slots:{default:!0}});var g=f(v,2);w(g,{component:Se,file:"chips/_FilterIcons.svelte",children:(i,_)=>{h();var e=p("The same, but with leading icons");r(i,e)},$$slots:{default:!0}});var d=f(g,2);w(d,{component:be,file:"chips/_Input.svelte",children:(i,_)=>{h();var e=p("Input chips");r(i,e)},$$slots:{default:!0}});var a=f(d,2);w(a,{component:Ae,file:"chips/_Keyed.svelte",children:(i,_)=>{h();var e=p("Keyed filter input chips");r(i,e)},$$slots:{default:!0}}),T(o),r(S,o)}export{Re as component};
