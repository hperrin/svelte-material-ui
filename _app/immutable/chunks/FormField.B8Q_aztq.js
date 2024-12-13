import{a as q,t as B}from"./disclose-version.B3RRTx8Z.js";import{p as N,e as b,h as g,g as n,n as M,t as z,a as G,b as y,c as R,s as J,r as C,d as k}from"./runtime.DwlehcF5.js";import{s as S,b as x,u as E,d as H,c as K}from"./useActions.dWwaU660.js";import{p as l,a as O,o as Q,b as w,r as V}from"./index-client.BDIqpeZ8.js";import{e as X,p as Y}from"./prefixFilter.OhiPYEKz.js";import{S as Z}from"./IconButton.CkPA9NQ0.js";import{_ as $,a as A,M as ee}from"./dispatch.CwJSP0lB.js";/**
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
 */var te={ROOT:"mdc-form-field"},ne={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var ae=function(u){$(e,u);function e(s){var o=u.call(this,A(A({},e.defaultAdapter),s))||this;return o.click=function(){o.handleClick()},o}return Object.defineProperty(e,"cssClasses",{get:function(){return te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var s=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){s.adapter.deactivateInputRipple()})},e}(ee);let ie=0;var re=B("<div><!> <label><!></label></div>");function pe(u,e){N(e,!0);let s=l(e,"use",19,()=>[]),o=l(e,"class",3,""),P=l(e,"align",3,"start"),U=l(e,"noWrap",3,!1),v=l(e,"inputId",19,()=>"SMUI-form-field-"+((ie+=1)-1)),j=l(e,"label$use",19,()=>[]),h=V(e,["$$slots","$$events","$$legacy","use","class","align","noWrap","inputId","label$use","children","label"]),f,p=y(void 0),m=new Z,c,i=y(void 0);b("SMUI:generic:input:props",{id:v()}),b("SMUI:generic:input:mount",t=>{g(i,O(t))}),b("SMUI:generic:input:unmount",()=>{g(i,void 0)}),Q(()=>(g(p,O(new ae({activateInputRipple:()=>{n(i)&&n(i).activateRipple()},deactivateInputRipple:()=>{n(i)&&n(i).deactivateRipple()},deregisterInteractionHandler:(t,a)=>m.off(c,t,a),registerInteractionHandler:(t,a)=>m.on(c,t,a)}))),n(p).init(),()=>{var t;(t=n(p))==null||t.destroy(),m.clear()}));function D(){return f}var r=re();const L=k(()=>X(h,["label$"]));let I;var _=R(r);S(_,()=>e.children??M);var d=J(_,2);const W=k(()=>Y(h,"label$"));let F;var T=R(d);return S(T,()=>e.label??M),C(d),w(d,t=>c=t,()=>c),x(d,(t,a)=>E(t,a),j),C(r),w(r,t=>f=t,()=>f),x(r,(t,a)=>E(t,a),s),z(()=>{I=H(r,I,{class:K({[o()]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":P()==="end","mdc-form-field--nowrap":U()}),...n(L)}),F=H(d,F,{for:v(),...n(W)})}),q(u,r),G({getElement:D})}export{pe as F};
