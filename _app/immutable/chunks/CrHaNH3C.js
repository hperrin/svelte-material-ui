import"./Bzak7iHL.js";import{b as w,s as F}from"./Bu45w55_.js";import{p as D,i as b,j as L,l as W,b as T,d as q,h as v,k as M,s as R,g as r,n as y,r as C}from"./BwguTo01.js";import{a as k,c as B,b as S,u as E}from"./DBhbQkAD.js";import{p as l,b as H,r as N}from"./CMyoTnZX.js";import{e as z,p as G}from"./OhiPYEKz.js";import{S as J}from"./D3YavpxM.js";import{_ as K,a as O,M as Q}from"./qG3zDIF3.js";/**
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
 */var V={ROOT:"mdc-form-field"},X={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var Y=(function(d){K(e,d);function e(s){var o=d.call(this,O(O({},e.defaultAdapter),s))||this;return o.click=function(){o.handleClick()},o}return Object.defineProperty(e,"cssClasses",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return X},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var s=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){s.adapter.deactivateInputRipple()})},e})(Q);let Z=0;var $=L("<div><!> <label><!></label></div>");function oe(d,e){D(e,!0);let s=l(e,"use",19,()=>[]),o=l(e,"class",3,""),x=l(e,"align",3,"start"),A=l(e,"noWrap",3,!1),h=l(e,"inputId",19,()=>"SMUI-form-field-"+Z++),j=l(e,"label$use",19,()=>[]),I=N(e,["$$slots","$$events","$$legacy","use","class","align","noWrap","inputId","label$use","children","label"]),p,m=R(void 0),g=new J,f,a=R(void 0);b("SMUI:generic:input:props",{id:h()}),b("SMUI:generic:input:mount",t=>{v(a,t,!0)}),b("SMUI:generic:input:unmount",()=>{v(a,void 0)}),w(()=>(v(m,new Y({activateInputRipple:()=>{r(a)&&r(a).activateRipple()},deactivateInputRipple:()=>{r(a)&&r(a).deactivateRipple()},deregisterInteractionHandler:(t,n)=>g.off(f,t,n),registerInteractionHandler:(t,n)=>g.on(f,t,n)}),!0),r(m).init(),()=>{var t;(t=r(m))==null||t.destroy(),g.clear()}));function P(){return p}var i=$();k(i,(t,n)=>({class:t,...n}),[()=>B({"mdc-form-field":!0,"mdc-form-field--align-end":x()==="end","mdc-form-field--nowrap":A(),[o()]:!0}),()=>z(I,["label$"])]);var _=M(i);F(_,()=>e.children??y);var u=W(_,2);k(u,t=>({for:h(),...t}),[()=>G(I,"label$")]);var U=M(u);return F(U,()=>e.label??y),C(u),H(u,t=>f=t,()=>f),S(u,(t,n)=>{var c;return(c=E)==null?void 0:c(t,n)},j),C(i),H(i,t=>p=t,()=>p),S(i,(t,n)=>{var c;return(c=E)==null?void 0:c(t,n)},s),T(d,i),q({getElement:P})}export{oe as F};
