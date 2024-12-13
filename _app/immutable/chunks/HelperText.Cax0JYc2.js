import{b as G,a as m,c as j,t as w}from"./disclose-version.B3RRTx8Z.js";import{p as k,k as I,h as S,g as l,c as q,t as M,f as z,n as B,r as J,a as K,b as L}from"./runtime.DwlehcF5.js";import{s as Q}from"./render.DfrYEMuQ.js";import{p,a as T,o as W,i as Y,b as Z,r as $}from"./index-client.BDIqpeZ8.js";import{s as tt,b as et,u as rt,d as nt,c as st}from"./useActions.dWwaU660.js";import{_ as it,a as P,M as at}from"./dispatch.CwJSP0lB.js";/**
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
 */var s={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},i={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+s.ROOT};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var ot=function(c){it(e,c);function e(r){return c.call(this,P(P({},e.defaultAdapter),r))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(i.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(r){this.adapter.setContent(r)},e.prototype.isPersistent=function(){return this.adapter.hasClass(s.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(r){r?this.adapter.addClass(s.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(s.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(s.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(r){r?this.adapter.addClass(s.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(s.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(i.ARIA_HIDDEN)},e.prototype.setValidity=function(r){var E=this.adapter.hasClass(s.HELPER_TEXT_PERSISTENT),h=this.adapter.hasClass(s.HELPER_TEXT_VALIDATION_MSG),f=h&&!r;f?(this.showToScreenReader(),this.adapter.getAttr(i.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(i.ROLE,"alert")):this.adapter.removeAttr(i.ROLE),!E&&!f&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(i.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var r=this;this.adapter.removeAttr(i.ROLE),requestAnimationFrame(function(){r.adapter.setAttr(i.ROLE,"alert")})},e}(at);let lt=0;var dt=w("<div><!></div>");function Et(c,e){k(e,!0);let r=p(e,"use",19,()=>[]),E=p(e,"class",3,""),h=p(e,"id",19,()=>"SMUI-textfield-helper-text-"+((lt+=1)-1)),f=p(e,"persistent",3,!1),H=p(e,"validationMsg",3,!1),O=$(e,["$$slots","$$events","$$legacy","use","class","id","persistent","validationMsg","children"]),_,d=L(void 0),a=T({}),o=T({}),A=L(void 0);const R=I("SMUI:textfield:helper-text:id"),v=I("SMUI:textfield:helper-text:mount"),g=I("SMUI:textfield:helper-text:unmount");W(()=>(S(d,T(new ot({addClass:y,removeClass:D,hasClass:b,getAttr:N,setAttr:V,removeAttr:X,setContent:t=>{S(A,T(t))}}))),R&&R(h()),v&&v(l(d)),l(d).init(),()=>{var t;g&&l(d)&&g(l(d)),(t=l(d))==null||t.destroy()}));function b(t){return t in a?a[t]:x().classList.contains(t)}function y(t){a[t]||(a[t]=!0)}function D(t){(!(t in a)||a[t])&&(a[t]=!1)}function N(t){return t in o?o[t]??null:x().getAttribute(t)}function V(t,n){o[t]!==n&&(o[t]=n)}function X(t){(!(t in o)||o[t]!=null)&&(o[t]=void 0)}function x(){return _}var u=dt();let C;var U=q(u);return Y(U,()=>l(A)==null,t=>{var n=j(),F=z(n);tt(F,()=>e.children??B),m(t,n)},t=>{var n=G();M(()=>Q(n,l(A))),m(t,n)}),J(u),Z(u,t=>_=t,()=>_),et(u,(t,n)=>rt(t,n),r),M(()=>C=nt(u,C,{class:st({[E()]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":f(),"mdc-text-field-helper-text--validation-msg":H(),...a}),"aria-hidden":f()?void 0:"true",id:h(),...o,...O})),m(c,u),K({getElement:x})}export{Et as H};
