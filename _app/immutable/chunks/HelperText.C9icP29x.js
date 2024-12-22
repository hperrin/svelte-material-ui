import{a as I,t as w,c as k,b as q}from"./disclose-version.L5AxZWdJ.js";import{p as z,k as v,c as M,g as l,e as B,r as J,t as L,a as K,s as P,f as Q,n as W}from"./runtime.W_ZEMHic.js";import{s as Y}from"./render.CKVW2_jY.js";import{p,a as E,i as Z,b as $,r as tt}from"./props.Ce4KWaWc.js";import{b as et,u as rt,s as st,d as nt,c as it}from"./useActions.kHGJbmCA.js";import{o as at}from"./index-client.CM1w6q3L.js";import{_ as ot,a as H,M as lt}from"./dispatch.KCohpohh.js";/**
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
 */var dt=function(c){ot(e,c);function e(r){return c.call(this,H(H({},e.defaultAdapter),r))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return n},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return i},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(i.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(r){this.adapter.setContent(r)},e.prototype.isPersistent=function(){return this.adapter.hasClass(n.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(r){r?this.adapter.addClass(n.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(n.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(n.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(r){r?this.adapter.addClass(n.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(n.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(i.ARIA_HIDDEN)},e.prototype.setValidity=function(r){var _=this.adapter.hasClass(n.HELPER_TEXT_PERSISTENT),h=this.adapter.hasClass(n.HELPER_TEXT_VALIDATION_MSG),f=h&&!r;f?(this.showToScreenReader(),this.adapter.getAttr(i.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(i.ROLE,"alert")):this.adapter.removeAttr(i.ROLE),!_&&!f&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(i.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var r=this;this.adapter.removeAttr(i.ROLE),requestAnimationFrame(function(){r.adapter.setAttr(i.ROLE,"alert")})},e}(lt);let ut=0;var ft=w("<div><!></div>");function xt(c,e){z(e,!0);let r=p(e,"use",19,()=>[]),_=p(e,"class",3,""),h=p(e,"id",19,()=>"SMUI-textfield-helper-text-"+ut++),f=p(e,"persistent",3,!1),O=p(e,"validationMsg",3,!1),y=tt(e,["$$slots","$$events","$$legacy","use","class","id","persistent","validationMsg","children"]),A,d=P(void 0),a=E({}),o=E({}),x=P(void 0);const R=v("SMUI:textfield:helper-text:id"),g=v("SMUI:textfield:helper-text:mount"),C=v("SMUI:textfield:helper-text:unmount");at(()=>(M(d,E(new dt({addClass:D,removeClass:N,hasClass:b,getAttr:V,setAttr:X,removeAttr:U,setContent:t=>{M(x,E(t))}}))),R&&R(h()),g&&g(l(d)),l(d).init(),()=>{var t;C&&l(d)&&C(l(d)),(t=l(d))==null||t.destroy()}));function b(t){return t in a?a[t]:m().classList.contains(t)}function D(t){a[t]||(a[t]=!0)}function N(t){(!(t in a)||a[t])&&(a[t]=!1)}function V(t){return t in o?o[t]??null:m().getAttribute(t)}function X(t,s){o[t]!==s&&(o[t]=s)}function U(t){(!(t in o)||o[t]!=null)&&(o[t]=void 0)}function m(){return A}var u=ft();let S;var F=B(u);{var G=t=>{var s=k(),T=Q(s);st(T,()=>e.children??W),I(t,s)},j=t=>{var s=q();L(()=>Y(s,l(x))),I(t,s)};Z(F,t=>{l(x)==null?t(G):t(j,!1)})}return J(u),$(u,t=>A=t,()=>A),et(u,(t,s)=>{var T;return(T=rt)==null?void 0:T(t,s)},r),L(()=>S=nt(u,S,{class:it({[_()]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":f(),"mdc-text-field-helper-text--validation-msg":O(),...a}),"aria-hidden":f()?void 0:"true",id:h(),...o,...y})),I(c,u),K({getElement:m})}export{xt as H};
