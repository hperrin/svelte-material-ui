import{a as N,t as ae,c as D}from"./disclose-version.L5AxZWdJ.js";import{p as P,s as A,b as j,u as K,c as F,g as t,n as k,t as ie,a as L,e as re,r as se,f as b,d as oe}from"./runtime.W_ZEMHic.js";import{s as x,b as ce,u as de,d as le,c as J}from"./useActions.kHGJbmCA.js";import{p as C,a as w,b as G,r as R,c as H}from"./props.Ce4KWaWc.js";import{o as ue,a as me}from"./index-client.CM1w6q3L.js";import{d as fe}from"./focus-trap.BKtJZaA4.js";import{_ as Q,a as z,M as he,d as q}from"./dispatch.KCohpohh.js";import{S as ve}from"./IconButton.TWSmi4tO.js";import{C as W}from"./ClassAdder.Ck-mTZey.js";import{c as Ce}from"./svelte-component.DzrVSg9R.js";import{S as pe}from"./SmuiElement.BxZKRkXS.js";/**
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
 */var d={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},ge={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var X=function(o){Q(e,o);function e(r){var a=o.call(this,z(z({},e.defaultAdapter),r))||this;return a.animationFrame=0,a.animationTimer=0,a}return Object.defineProperty(e,"strings",{get:function(){return ge},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var r=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(d.OPEN),this.adapter.addClass(d.ANIMATE),this.runNextAnimationFrame(function(){r.adapter.addClass(d.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(d.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(d.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(d.OPENING)||this.adapter.hasClass(d.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(d.CLOSING)},e.prototype.handleKeydown=function(r){var a=r.keyCode,u=r.key,s=u==="Escape"||a===27;s&&this.close()},e.prototype.handleTransitionEnd=function(r){var a=d.OPENING,u=d.CLOSING,s=d.OPEN,p=d.ANIMATE,m=d.ROOT,c=this.isElement(r.target)&&this.adapter.elementHasClass(r.target,m);c&&(this.isClosing()?(this.adapter.removeClass(s),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(p),this.adapter.removeClass(a),this.adapter.removeClass(u))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(r){var a=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){a.animationFrame=0,clearTimeout(a.animationTimer),a.animationTimer=setTimeout(r,0)})},e.prototype.isElement=function(r){return!!r.classList},e}(he);/**
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
 */var Ee=function(o){Q(e,o);function e(){return o!==null&&o.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(X),ye=ae("<aside><!></aside>");function be(o,e){P(e,!0);const{FocusTrap:r}=fe;let a=C(e,"use",19,()=>[]),u=C(e,"class",3,""),s=C(e,"open",15,!1),p=C(e,"fixed",3,!0),m=R(e,["$$slots","$$events","$$legacy","use","class","variant","open","fixed","children"]),c,i=A(void 0),g=new ve,l=A(w({})),O=A(null),I,f=A(!1);j("SMUI:list:nav",!0),j("SMUI:list:item:nav",!0),j("SMUI:list:wrapFocus",!0),K(()=>{t(i)&&t(i).isOpen()!==s()&&(s()?t(i).open():t(i).close())});let T=e.variant;K(()=>{T!==e.variant&&(T=e.variant,t(i)&&t(i).destroy(),F(l,w({})),F(i,w(v())),t(i)&&t(i).init())}),ue(()=>{I=new r(c,{skipInitialFocus:!0}),F(i,w(v())),t(i)&&t(i).init()}),me(()=>{t(i)&&t(i).destroy(),t(f)&&g.off(t(f),"SMUIDrawerScrimClick",V),g.clear()});function v(){var h;t(f)&&g.off(t(f),"SMUIDrawerScrimClick",V),e.variant==="modal"&&(F(f,w(((h=E().parentNode)==null?void 0:h.querySelector(".mdc-drawer-scrim"))??!1)),t(f)&&g.on(t(f),"SMUIDrawerScrimClick",V));const n=e.variant==="dismissible"?X:e.variant==="modal"?Ee:void 0;return n?new n({addClass:M,removeClass:U,hasClass:_,elementHasClass:(y,ne)=>y.classList.contains(ne),saveFocus:()=>F(O,w(document.activeElement)),restoreFocus:()=>{t(O)&&"focus"in t(O)&&E().contains(document.activeElement)&&t(O).focus()},focusActiveNavigationItem:()=>{const y=E().querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");y&&y.focus()},notifyClose:()=>{s(!1),q(E(),"SMUIDrawerClosed")},notifyOpen:()=>{s(!0),q(E(),"SMUIDrawerOpened")},trapFocus:()=>I.trapFocus(),releaseFocus:()=>I.releaseFocus()}):void 0}function _(n){return n in t(l)?t(l)[n]:E().classList.contains(n)}function M(n){t(l)[n]||(t(l)[n]=!0)}function U(n){(!(n in t(l))||t(l)[n])&&(t(l)[n]=!1)}function V(){t(i)&&"handleScrimClick"in t(i)&&t(i).handleScrimClick()}function Y(n){s(n)}function Z(){return s()}function E(){return c}var S=ye(),$=n=>{var h;t(i)&&t(i).handleKeydown(n),(h=e.onkeydown)==null||h.call(e,n)},ee=n=>{var h;t(i)&&t(i).handleTransitionEnd(n),(h=e.ontransitionend)==null||h.call(e,n)};let B;var te=re(S);return x(te,()=>e.children??k),se(S),G(S,n=>c=n,()=>c),ce(S,(n,h)=>{var y;return(y=de)==null?void 0:y(n,h)},a),ie(()=>B=le(S,B,{class:J({[u()]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":e.variant==="dismissible","mdc-drawer--modal":e.variant==="modal","smui-drawer__absolute":e.variant==="modal"&&!p(),...t(l)}),...m,onkeydown:$,ontransitionend:ee})),N(o,S),L({setOpen:Y,isOpen:Z,getElement:E})}function Pe(o,e){P(e,!0);let r=R(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return G(W(o,H({_smuiClass:"mdc-drawer-app-content",tag:"div"},()=>r,{children:(s,p)=>{var m=D(),c=b(m);x(c,()=>e.children??k),N(s,m)},$$slots:{default:!0}})),s=>a=s,()=>a),L({getElement:u})}function ke(o,e){P(e,!0);let r=R(e,["$$slots","$$events","$$legacy","children"]),a;function u(){return a.getElement()}return G(W(o,H({_smuiClass:"mdc-drawer__content",tag:"div"},()=>r,{children:(s,p)=>{var m=D(),c=b(m);x(c,()=>e.children??k),N(s,m)},$$slots:{default:!0}})),s=>a=s,()=>a),L({getElement:u})}function Le(o,e){P(e,!0);let r=C(e,"use",19,()=>[]),a=C(e,"class",3,""),u=C(e,"fixed",3,!0),s=C(e,"component",3,pe),p=C(e,"tag",3,"div"),m=R(e,["$$slots","$$events","$$legacy","use","class","fixed","component","tag","children"]),c;function i(f){q(g(),"SMUIDrawerScrimClick",f)}function g(){return c.getElement()}var l=D(),O=b(l),I=oe(()=>J({[a()]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!u()}));return Ce(O,s,(f,T)=>{G(T(f,H({get tag(){return p()},get use(){return r()},get class(){return t(I)}},()=>m,{onclick:v=>{var _;i(v),(_=e.onclick)==null||_.call(e,v)},children:(v,_)=>{var M=D(),U=b(M);x(U,()=>e.children??k),N(v,M)},$$slots:{default:!0}})),v=>c=v,()=>c)}),N(o,l),L({getElement:g})}export{Pe as A,ke as C,be as D,Le as S};
