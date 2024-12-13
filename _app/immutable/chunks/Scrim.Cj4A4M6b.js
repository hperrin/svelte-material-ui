import{a as P,t as ne,c as x}from"./disclose-version.B3RRTx8Z.js";import{p as V,b as _,e as b,u as G,h as F,g as t,n as j,t as ae,a as q,c as ie,r as se,f as R,d as re}from"./runtime.DwlehcF5.js";import{s as B,b as oe,u as ce,d as de,c as H}from"./useActions.dWwaU660.js";import{p as h,a as O,o as le,d as ue,b as K,r as z,s as me}from"./index-client.BDIqpeZ8.js";import{d as fe}from"./focus-trap.BKtJZaA4.js";import{_ as J,a as U,M as he,d as k}from"./dispatch.CwJSP0lB.js";import{S as Ce}from"./IconButton.CkPA9NQ0.js";import{c as Q}from"./classAdderBuilder.Btis2bDi.js";import{c as pe}from"./svelte-component.D6MkyJ-E.js";import{S as ve}from"./SmuiElement.BnumFtpb.js";/**
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
 */var r={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},Ee={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var W=function(l){J(e,l);function e(i){var s=l.call(this,U(U({},e.defaultAdapter),i))||this;return s.animationFrame=0,s.animationTimer=0,s}return Object.defineProperty(e,"strings",{get:function(){return Ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return r},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var i=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(r.OPEN),this.adapter.addClass(r.ANIMATE),this.runNextAnimationFrame(function(){i.adapter.addClass(r.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(r.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(r.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(r.OPENING)||this.adapter.hasClass(r.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(r.CLOSING)},e.prototype.handleKeydown=function(i){var s=i.keyCode,C=i.key,o=C==="Escape"||s===27;o&&this.close()},e.prototype.handleTransitionEnd=function(i){var s=r.OPENING,C=r.CLOSING,o=r.OPEN,y=r.ANIMATE,S=r.ROOT,u=this.isElement(i.target)&&this.adapter.elementHasClass(i.target,S);u&&(this.isClosing()?(this.adapter.removeClass(o),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(y),this.adapter.removeClass(s),this.adapter.removeClass(C))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(i){var s=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){s.animationFrame=0,clearTimeout(s.animationTimer),s.animationTimer=setTimeout(i,0)})},e.prototype.isElement=function(i){return!!i.classList},e}(he);/**
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
 */var ge=function(l){J(e,l);function e(){return l!==null&&l.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(W),Oe=ne("<aside><!></aside>");function De(l,e){V(e,!0);const{FocusTrap:i}=fe;let s=h(e,"use",19,()=>[]),C=h(e,"class",3,""),o=h(e,"open",15,!1),y=h(e,"fixed",3,!0),S=z(e,["$$slots","$$events","$$legacy","use","class","variant","open","fixed","children"]),u,a=_(void 0),p=new Ce,c=_(O({})),E=_(null),w,d=_(!1);b("SMUI:list:nav",!0),b("SMUI:list:item:nav",!0),b("SMUI:list:wrapFocus",!0),G(()=>{t(a)&&t(a).isOpen()!==o()&&(o()?t(a).open():t(a).close())});let N=e.variant;G(()=>{N!==e.variant&&(N=e.variant,t(a)&&t(a).destroy(),F(c,O({})),F(a,O(f())),t(a)&&t(a).init())}),le(()=>{w=new i(u,{skipInitialFocus:!0}),F(a,O(f())),t(a)&&t(a).init()}),ue(()=>{t(a)&&t(a).destroy(),t(d)&&p.off(t(d),"SMUIDrawerScrimClick",D),p.clear()});function f(){var m;t(d)&&p.off(t(d),"SMUIDrawerScrimClick",D),e.variant==="modal"&&(F(d,O(((m=v().parentNode)==null?void 0:m.querySelector(".mdc-drawer-scrim"))??!1)),t(d)&&p.on(t(d),"SMUIDrawerScrimClick",D));const n=e.variant==="dismissible"?W:e.variant==="modal"?ge:void 0;return n?new n({addClass:T,removeClass:A,hasClass:I,elementHasClass:(M,te)=>M.classList.contains(te),saveFocus:()=>F(E,O(document.activeElement)),restoreFocus:()=>{t(E)&&"focus"in t(E)&&v().contains(document.activeElement)&&t(E).focus()},focusActiveNavigationItem:()=>{const M=v().querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");M&&M.focus()},notifyClose:()=>{o(!1),k(v(),"SMUIDrawerClosed")},notifyOpen:()=>{o(!0),k(v(),"SMUIDrawerOpened")},trapFocus:()=>w.trapFocus(),releaseFocus:()=>w.releaseFocus()}):void 0}function I(n){return n in t(c)?t(c)[n]:v().classList.contains(n)}function T(n){t(c)[n]||(t(c)[n]=!0)}function A(n){(!(n in t(c))||t(c)[n])&&(t(c)[n]=!1)}function D(){t(a)&&"handleScrimClick"in t(a)&&t(a).handleScrimClick()}function X(n){o(n)}function Y(){return o()}function v(){return u}var g=Oe(),Z=n=>{var m;t(a)&&t(a).handleKeydown(n),(m=e.onkeydown)==null||m.call(e,n)},$=n=>{var m;t(a)&&t(a).handleTransitionEnd(n),(m=e.ontransitionend)==null||m.call(e,n)};let L;var ee=ie(g);return B(ee,()=>e.children??j),se(g),K(g,n=>u=n,()=>u),oe(g,(n,m)=>ce(n,m),s),ae(()=>L=de(g,L,{class:H({[C()]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":e.variant==="dismissible","mdc-drawer--modal":e.variant==="modal","smui-drawer__absolute":e.variant==="modal"&&!y(),...t(c)}),...S,onkeydown:Z,ontransitionend:$})),P(l,g),q({setOpen:X,isOpen:Y,getElement:v})}const be=Q({class:"mdc-drawer-app-content",tag:"div"}),Pe=Q({class:"mdc-drawer__content",tag:"div"});function ke(l,e){V(e,!0);let i=h(e,"use",19,()=>[]),s=h(e,"class",3,""),C=h(e,"fixed",3,!0),o=h(e,"component",3,ve),y=h(e,"tag",3,"div"),S=z(e,["$$slots","$$events","$$legacy","use","class","fixed","component","tag","children"]),u;function a(d){k(p(),"SMUIDrawerScrimClick",d)}function p(){return u.getElement()}var c=x(),E=R(c),w=re(()=>H({[s()]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!C()}));return pe(E,o,(d,N)=>{K(N(d,me({get tag(){return y()},get use(){return i()},get class(){return t(w)}},()=>S,{onclick:f=>{var I;a(f),(I=e.onclick)==null||I.call(e,f)},children:(f,I)=>{var T=x(),A=R(T);B(A,()=>e.children??j),P(f,T)},$$slots:{default:!0}})),f=>u=f,()=>u)}),P(l,c),q({getElement:p})}export{be as A,Pe as C,De as D,ke as S};
