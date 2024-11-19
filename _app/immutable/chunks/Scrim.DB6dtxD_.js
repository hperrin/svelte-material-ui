import{a as P,t as re,c as j}from"./disclose-version.Bsnu83OK.js";import"./legacy.BG3nWsJQ.js";import{p as J,j as k,m as F,g as t,d as _,i as q,l as V,b as oe,t as ce,a as Q,c as de,r as le,e as B,f as H,h as ue}from"./runtime.SXGrDfxi.js";import{s as W,d as me,b as M,u as fe,e as pe,c as X}from"./useActions.D2nM91eX.js";import{l as A,p as f,o as he,a as Ce,b as Y,s as ve}from"./index-client.CjaGIm_K.js";import{i as Z}from"./lifecycle.ty5dbg6f.js";import{d as Ee}from"./focus-trap.BKtJZaA4.js";import{_ as $,a as z,M as ge,d as x}from"./dispatch.S85s6hKV.js";import{c as ee}from"./classAdderBuilder.cB7Ghhqr.js";import{c as Oe}from"./svelte-component.u_-kTajJ.js";import{S as K}from"./SmuiElement.Dnklo9Kq.js";/**
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
 */var c={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},_e={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
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
 */var te=function(u){$(e,u);function e(s){var i=u.call(this,z(z({},e.defaultAdapter),s))||this;return i.animationFrame=0,i.animationTimer=0,i}return Object.defineProperty(e,"strings",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var s=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(c.OPEN),this.adapter.addClass(c.ANIMATE),this.runNextAnimationFrame(function(){s.adapter.addClass(c.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(c.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(c.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(c.OPENING)||this.adapter.hasClass(c.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(c.CLOSING)},e.prototype.handleKeydown=function(s){var i=s.keyCode,C=s.key,v=C==="Escape"||i===27;v&&this.close()},e.prototype.handleTransitionEnd=function(s){var i=c.OPENING,C=c.CLOSING,v=c.OPEN,y=c.ANIMATE,r=c.ROOT,d=this.isElement(s.target)&&this.adapter.elementHasClass(s.target,r);d&&(this.isClosing()?(this.adapter.removeClass(v),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(y),this.adapter.removeClass(i),this.adapter.removeClass(C))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(s){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(s,0)})},e.prototype.isElement=function(s){return!!s.classList},e}(ge);/**
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
 */var ye=function(u){$(e,u);function e(){return u!==null&&u.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(te),Se=re("<aside><!></aside>");function Pe(u,e){const s=A(e,["children","$$slots","$$events","$$legacy"]),i=A(s,["setOpen","isOpen","getElement","use","class","variant","open","fixed"]);J(e,!1);const{FocusTrap:C}=Ee;let v=f(e,"use",24,()=>[]),y=f(e,"class",8,""),r=f(e,"variant",8,void 0),d=f(e,"open",12,!1),D=f(e,"fixed",8,!0),E=F(),n=F(void 0),o=F({}),g=null,S,l=!1;k("SMUI:list:nav",!0),k("SMUI:list:item:nav",!0),k("SMUI:list:wrapFocus",!0);let w=F(r());he(()=>{S=new C(t(E),{skipInitialFocus:!0}),_(n,p()),t(n)&&t(n).init()}),Ce(()=>{t(n)&&t(n).destroy(),l&&l.removeEventListener("SMUIDrawerScrimClick",L)});function p(){var m;l&&l.removeEventListener("SMUIDrawerScrimClick",L),r()==="modal"&&(l=((m=h().parentNode)==null?void 0:m.querySelector(".mdc-drawer-scrim"))??!1,l&&l.addEventListener("SMUIDrawerScrimClick",L));const a=r()==="dismissible"?te:r()==="modal"?ye:void 0;return a?new a({addClass:N,removeClass:b,hasClass:I,elementHasClass:(T,se)=>T.classList.contains(se),saveFocus:()=>g=document.activeElement,restoreFocus:()=>{g&&"focus"in g&&h().contains(document.activeElement)&&g.focus()},focusActiveNavigationItem:()=>{const T=h().querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");T&&T.focus()},notifyClose:()=>{d(!1),x(h(),"SMUIDrawerClosed")},notifyOpen:()=>{d(!0),x(h(),"SMUIDrawerOpened")},trapFocus:()=>S.trapFocus(),releaseFocus:()=>S.releaseFocus()}):void 0}function I(a){return a in t(o)?t(o)[a]:h().classList.contains(a)}function N(a){t(o)[a]||q(o,t(o)[a]=!0)}function b(a){(!(a in t(o))||t(o)[a])&&q(o,t(o)[a]=!1)}function L(){t(n)&&"handleScrimClick"in t(n)&&t(n).handleScrimClick()}function G(a){d(a)}function R(){return d()}function h(){return t(E)}V(()=>(t(w),B(r()),t(n)),()=>{t(w)!==r()&&(_(w,r()),t(n)&&t(n).destroy(),_(o,{}),_(n,p()),t(n)&&t(n).init())}),V(()=>(t(n),B(d())),()=>{t(n)&&t(n).isOpen()!==d()&&(d()?t(n).open():t(n).close())}),oe(),Z();var O=Se(),ne=a=>{var m;t(n)&&t(n).handleKeydown(a),(m=i.onkeydown)==null||m.call(i,a)},ae=a=>{var m;t(n)&&t(n).handleTransitionEnd(a),(m=i.ontransitionend)==null||m.call(i,a)};let U;var ie=de(O);return W(ie,e,"default",{},null),le(O),Y(O,a=>_(E,a),()=>t(E)),me(O,(a,m)=>fe(a,m),v),ce(()=>U=pe(O,U,{class:X({[y()]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":r()==="dismissible","mdc-drawer--modal":r()==="modal","smui-drawer__absolute":r()==="modal"&&!D(),...t(o)}),...i,onkeydown:ne,ontransitionend:ae})),P(u,O),M(e,"setOpen",G),M(e,"isOpen",R),M(e,"getElement",h),Q({setOpen:G,isOpen:R,getElement:h})}const xe=ee({class:"mdc-drawer-app-content",tag:"div"}),Ge=ee({class:"mdc-drawer__content",tag:"div"});function Re(u,e){const s=A(e,["children","$$slots","$$events","$$legacy"]),i=A(s,["getElement","use","class","fixed","component","tag"]);J(e,!1);let C=f(e,"use",24,()=>[]),v=f(e,"class",8,""),y=f(e,"fixed",8,!0),r=F(),d=f(e,"component",8,K),D=f(e,"tag",24,()=>d()===K?"div":void 0);function E(l){x(n(),"SMUIDrawerScrimClick",l)}function n(){return t(r).getElement()}Z();var o=j(),g=H(o),S=ue(()=>X({[v()]:!0,"mdc-drawer-scrim":!0,"smui-drawer-scrim__absolute":!y()}));return Oe(g,d,(l,w)=>{Y(w(l,ve({get tag(){return D()},get use(){return C()},get class(){return t(S)}},()=>i,{onclick:p=>{var I;E(p),(I=i.onclick)==null||I.call(i,p)},children:(p,I)=>{var N=j(),b=H(N);W(b,e,"default",{},null),P(p,N)},$$slots:{default:!0},$$legacy:!0})),p=>_(r,p),()=>t(r))}),P(u,o),M(e,"getElement",n),Q({getElement:n})}export{xe as A,Ge as C,Pe as D,Re as S};
