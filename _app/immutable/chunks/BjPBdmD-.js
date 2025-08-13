import"./Bzak7iHL.js";import{b as G,s as j,a as w}from"./Bu45w55_.js";import{p as k,a as C,v,j as q,b as m,d as z,k as B,r as J,h as S,s as M,g as l,c as K,f as Q,n as W,o as Y,t as Z}from"./BwguTo01.js";import{p,r as $,i as tt,b as et}from"./CMyoTnZX.js";import{a as rt,c as st,b as nt,u as it}from"./DBhbQkAD.js";import{_ as at,a as L,M as ot}from"./qG3zDIF3.js";/**
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
 */var n={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},i={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+n.ROOT};/**
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
 */var lt=(function(c){at(e,c);function e(r){return c.call(this,L(L({},e.defaultAdapter),r))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(i.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(r){this.adapter.setContent(r)},e.prototype.isPersistent=function(){return this.adapter.hasClass(n.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(r){r?this.adapter.addClass(n.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(n.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(n.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(r){r?this.adapter.addClass(n.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(n.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(i.ARIA_HIDDEN)},e.prototype.setValidity=function(r){var E=this.adapter.hasClass(n.HELPER_TEXT_PERSISTENT),h=this.adapter.hasClass(n.HELPER_TEXT_VALIDATION_MSG),f=h&&!r;f?(this.showToScreenReader(),this.adapter.getAttr(i.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(i.ROLE,"alert")):this.adapter.removeAttr(i.ROLE),!E&&!f&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(i.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var r=this;this.adapter.removeAttr(i.ROLE),requestAnimationFrame(function(){r.adapter.setAttr(i.ROLE,"alert")})},e})(ot);let dt=0;var ut=q("<div><!></div>");function _t(c,e){k(e,!0);let r=p(e,"use",19,()=>[]),E=p(e,"class",3,""),h=p(e,"id",19,()=>"SMUI-textfield-helper-text-"+dt++),f=p(e,"persistent",3,!1),P=p(e,"validationMsg",3,!1),H=$(e,["$$slots","$$events","$$legacy","use","class","id","persistent","validationMsg","children"]),_,d=M(void 0),a=C({}),o=C({}),A=M(void 0);const I=v("SMUI:textfield:helper-text:id"),R=v("SMUI:textfield:helper-text:mount"),g=v("SMUI:textfield:helper-text:unmount");G(()=>(S(d,new lt({addClass:y,removeClass:b,hasClass:O,getAttr:D,setAttr:N,removeAttr:V,setContent:t=>{S(A,t,!0)}}),!0),I&&I(h()),R&&R(l(d)),l(d).init(),()=>{var t;g&&l(d)&&g(l(d)),(t=l(d))==null||t.destroy()}));function O(t){return t in a?a[t]:x().classList.contains(t)}function y(t){a[t]||(a[t]=!0)}function b(t){(!(t in a)||a[t])&&(a[t]=!1)}function D(t){return t in o?o[t]??null:x().getAttribute(t)}function N(t,s){o[t]!==s&&(o[t]=s)}function V(t){(!(t in o)||o[t]!=null)&&(o[t]=void 0)}function x(){return _}var u=ut();rt(u,t=>({class:t,"aria-hidden":f()?void 0:"true",id:h(),...o,...H}),[()=>st({"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":f(),"mdc-text-field-helper-text--validation-msg":P(),...a,[E()]:!0})]);var X=B(u);{var U=t=>{var s=K(),T=Q(s);j(T,()=>e.children??W),m(t,s)},F=t=>{var s=Y();Z(()=>w(s,l(A))),m(t,s)};tt(X,t=>{l(A)==null?t(U):t(F,!1)})}return J(u),et(u,t=>_=t,()=>_),nt(u,(t,s)=>{var T;return(T=it)==null?void 0:T(t,s)},r),m(c,u),z({getElement:x})}export{_t as H};
