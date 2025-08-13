import"./Bzak7iHL.js";import{b as te,c as ne,s as b}from"./Bu45w55_.js";import{p as P,s as M,a as ae,i as j,u as H,g as t,h as _,j as ie,b as F,d as k,k as re,n as L,r as se,c as A,f as D,e as oe}from"./BwguTo01.js";import{a as ce,c as K,b as de,u as le}from"./DBhbQkAD.js";import{p as v,r as x,b as G,c as q}from"./CMyoTnZX.js";import{d as ue}from"./-axVTpnA.js";import{_ as z,a as B,M as me,d as V}from"./qG3zDIF3.js";import{S as fe}from"./D3YavpxM.js";import{C as J}from"./3oDDhym3.js";import{c as he}from"./B_50IHOT.js";import{S as Ce}from"./BsQP9Hxh.js";/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},ve={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Q=(function(o){z(e,o);function e(r){var a=o.call(this,B(B({},e.defaultAdapter),r))||this;return a.animationFrame=0,a.animationTimer=0,a}return Object.defineProperty(e,"strings",{get:function(){return ve},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var r=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(d.OPEN),this.adapter.addClass(d.ANIMATE),this.runNextAnimationFrame(function(){r.adapter.addClass(d.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(d.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(d.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(d.OPENING)||this.adapter.hasClass(d.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(d.CLOSING)},e.prototype.handleKeydown=function(r){var a=r.keyCode,u=r.key,s=u==="Escape"||a===27;s&&this.close()},e.prototype.handleTransitionEnd=function(r){var a=d.OPENING,u=d.CLOSING,s=d.OPEN,p=d.ANIMATE,m=d.ROOT,c=this.isElement(r.target)&&this.adapter.elementHasClass(r.target,m);c&&(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(p),this.adapter.removeClass(a),this.adapter.removeClass(u))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(r){var a=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){a.animationFrame=0,clearTimeout(a.animationTimer),a.animationTimer=setTimeout(r,0)})},e.prototype.isElement=function(r){return!!r.classList},e})(me);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pe=(function(o){z(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e})(Q),ge=ie("<aside><!></aside>");function Ae(o,e){P(e,!0);const{FocusTrap:r}=ue;let a=v(e,"use",19,()=>[]),u=v(e,"class",3,""),s=v(e,"open",15,!1),p=v(e,"fixed",3,!0),m=x(e,["$$slots","$$events","$$legacy","use","class","variant","open","fixed","children"]),c,i=M(void 0),g=new fe,l=M(ae({})),S=M(null),E,h=M(!1);j("SMUI:list:nav",!0),j("SMUI:list:item:nav",!0),j("SMUI:list:wrapFocus",!0),H(()=>{t(i)&&t(i).isOpen()!==s()&&(s()?t(i).open():t(i).close())});let N=e.variant;H(()=>{N!==e.variant&&(N=e.variant,t(i)&&t(i).destroy(),_(l,{},!0),_(i,C(),!0),t(i)&&t(i).init())}),te(()=>{E=new r(c,{skipInitialFocus:!0}),_(i,C(),!0),t(i)&&t(i).init()}),ne(()=>{t(i)&&t(i).destroy(),t(h)&&g.off(t(h),"SMUIDrawerScrimClick",U),g.clear()});function C(){var f;t(h)&&g.off(t(h),"SMUIDrawerScrimClick",U),e.variant==="modal"&&(_(h,((f=y().parentNode)==null?void 0:f.querySelector(".mdc-drawer-scrim"))??!1,!0),t(h)&&g.on(t(h),"SMUIDrawerScrimClick",U));const n=e.variant==="dismissible"?Q:e.variant==="modal"?pe:void 0;return n?new n({addClass:T,removeClass:R,hasClass:I,elementHasClass:(O,ee)=>O.classList.contains(ee),saveFocus:()=>_(S,document.activeElement,!0),restoreFocus:()=>{t(S)&&"focus"in t(S)&&y().contains(document.activeElement)&&t(S).focus()},focusActiveNavigationItem:()=>{const O=y().querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");O&&O.focus()},notifyClose:()=>{s(!1),V(y(),"SMUIDrawerClosed")},notifyOpen:()=>{s(!0),V(y(),"SMUIDrawerOpened")},trapFocus:()=>E.trapFocus(),releaseFocus:()=>E.releaseFocus()}):void 0}function I(n){return n in t(l)?t(l)[n]:y().classList.contains(n)}function T(n){t(l)[n]||(t(l)[n]=!0)}function R(n){(!(n in t(l))||t(l)[n])&&(t(l)[n]=!1)}function U(){t(i)&&"handleScrimClick"in t(i)&&t(i).handleScrimClick()}function W(n){s(n)}function X(){return s()}function y(){return c}var w=ge(),Y=n=>{var f;t(i)&&t(i).handleKeydown(n),(f=e.onkeydown)==null||f.call(e,n)},Z=n=>{var f;t(i)&&t(i).handleTransitionEnd(n),(f=e.ontransitionend)==null||f.call(e,n)};ce(w,n=>({class:n,...m,onkeydown:Y,ontransitionend:Z}),[()=>K({"mdc-drawer":!0,"mdc-drawer--dismissible":e.variant==="dismissible","mdc-drawer--modal":e.variant==="modal","smui-drawer__absolute":e.variant==="modal"&&!p(),...t(l),[u()]:!0})]);var $=re(w);return b($,()=>e.children??L),se(w),G(w,n=>c=n,()=>c),de(w,(n,f)=>{var O;return(O=le)==null?void 0:O(n,f)},a),F(o,w),k({setOpen:W,isOpen:X,getElement:y})}function De(o,e){P(e,!0);let r=x(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return G(J(o,q({_smuiClass:"mdc-drawer-app-content",tag:"div"},()=>r,{children:(s,p)=>{var m=A(),c=D(m);b(c,()=>e.children??L),F(s,m)},$$slots:{default:!0}})),s=>a=s,()=>a),k({getElement:u})}function be(o,e){P(e,!0);let r=x(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return G(J(o,q({_smuiClass:"mdc-drawer__content",tag:"div"},()=>r,{children:(s,p)=>{var m=A(),c=D(m);b(c,()=>e.children??L),F(s,m)},$$slots:{default:!0}})),s=>a=s,()=>a),k({getElement:u})}function Pe(o,e){P(e,!0);let r=v(e,"use",19,()=>[]),a=v(e,"class",3,""),u=v(e,"fixed",3,!0),s=v(e,"component",3,Ce),p=v(e,"tag",3,"div"),m=x(e,["$$slots","$$events","$$legacy","use","class","fixed","component","tag","children"]),c;function i(E){V(g(),"SMUIDrawerScrimClick",E)}function g(){return c.getElement()}var l=A(),S=D(l);{let E=oe(()=>K({"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!u(),[a()]:!0}));he(S,s,(h,N)=>{G(N(h,q({get tag(){return p()},get use(){return r()},get class(){return t(E)}},()=>m,{onclick:C=>{var I;i(C),(I=e.onclick)==null||I.call(e,C)},children:(C,I)=>{var T=A(),R=D(T);b(R,()=>e.children??L),F(C,T)},$$slots:{default:!0}})),C=>c=C,()=>c)})}return F(o,l),k({getElement:g})}export{De as A,be as C,Ae as D,Pe as S};
