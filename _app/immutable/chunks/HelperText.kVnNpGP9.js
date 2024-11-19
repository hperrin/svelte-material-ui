import{b as w,a as I,c as k,t as q}from"./disclose-version.Bsnu83OK.js";import"./legacy.BG3nWsJQ.js";import{p as z,o as R,d as P,g as r,i as E,t as H,f as B,a as J,m as T,c as K,r as Q}from"./runtime.SXGrDfxi.js";import{s as W}from"./render.Cu_Ad_nF.js";import{l as O,p as f,o as Y,i as Z,b as $}from"./index-client.CjaGIm_K.js";import{s as tt,d as et,b as rt,u as st,e as nt,c as it}from"./useActions.D2nM91eX.js";import{i as at}from"./lifecycle.ty5dbg6f.js";import{_ as ot,a as b,M as lt}from"./dispatch.S85s6hKV.js";/**
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
 */var o={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},l={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+o.ROOT};/**
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
 */var dt=function(p){ot(e,p);function e(s){return p.call(this,b(b({},e.defaultAdapter),s))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(l.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(s){this.adapter.setContent(s)},e.prototype.isPersistent=function(){return this.adapter.hasClass(o.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(s){s?this.adapter.addClass(o.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(o.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(o.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(s){s?this.adapter.addClass(o.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(o.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(l.ARIA_HIDDEN)},e.prototype.setValidity=function(s){var _=this.adapter.hasClass(o.HELPER_TEXT_PERSISTENT),m=this.adapter.hasClass(o.HELPER_TEXT_VALIDATION_MSG),c=m&&!s;c?(this.showToScreenReader(),this.adapter.getAttr(l.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(l.ROLE,"alert")):this.adapter.removeAttr(l.ROLE),!_&&!c&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(l.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var s=this;this.adapter.removeAttr(l.ROLE),requestAnimationFrame(function(){s.adapter.setAttr(l.ROLE,"alert")})},e}(lt);let ut=0;var ft=q("<div><!></div>");function xt(p,e){const s=O(e,["children","$$slots","$$events","$$legacy"]),_=O(s,["getElement","use","class","id","persistent","validationMsg"]);z(e,!1);let m=f(e,"use",24,()=>[]),c=f(e,"class",8,""),g=f(e,"id",24,()=>"SMUI-textfield-helper-text-"+((ut+=1)-1)),v=f(e,"persistent",8,!1),y=f(e,"validationMsg",8,!1),A=T(),u,n=T({}),i=T({}),x=T(void 0);const C=R("SMUI:textfield:helper-text:id"),S=R("SMUI:textfield:helper-text:mount"),M=R("SMUI:textfield:helper-text:unmount");Y(()=>(u=new dt({addClass:N,removeClass:V,hasClass:D,getAttr:X,setAttr:U,removeAttr:F,setContent:t=>{P(x,t)}}),C&&C(g()),S&&S(u),u.init(),()=>{M&&M(u),u.destroy()}));function D(t){return t in r(n)?r(n)[t]:h().classList.contains(t)}function N(t){r(n)[t]||E(n,r(n)[t]=!0)}function V(t){(!(t in r(n))||r(n)[t])&&E(n,r(n)[t]=!1)}function X(t){return t in r(i)?r(i)[t]??null:h().getAttribute(t)}function U(t,a){r(i)[t]!==a&&E(i,r(i)[t]=a)}function F(t){(!(t in r(i))||r(i)[t]!=null)&&E(i,r(i)[t]=void 0)}function h(){return r(A)}at();var d=ft();let L;var G=K(d);return Z(G,()=>r(x)==null,t=>{var a=k(),j=B(a);tt(j,e,"default",{},null),I(t,a)},t=>{var a=w();H(()=>W(a,r(x))),I(t,a)}),Q(d),$(d,t=>P(A,t),()=>r(A)),et(d,(t,a)=>st(t,a),m),H(()=>L=nt(d,L,{class:it({[c()]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":v(),"mdc-text-field-helper-text--validation-msg":y(),...r(n)}),"aria-hidden":v()?void 0:"true",id:g(),...r(i),..._})),I(p,d),rt(e,"getElement",h),J({getElement:h})}export{xt as H};
