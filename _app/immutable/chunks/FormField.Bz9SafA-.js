import{a as q,t as T}from"./disclose-version.Bsnu83OK.js";import"./legacy.BG3nWsJQ.js";import{p as z,j as m,g as a,t as B,a as N,m as I,c as F,s as G,r as y,d as M,h as R}from"./runtime.SXGrDfxi.js";import{s as C,d as E,b as J,u as k,e as H,c as K}from"./useActions.D2nM91eX.js";import{l as O,p as s,o as Q,b as x}from"./index-client.CjaGIm_K.js";import{i as V}from"./lifecycle.ty5dbg6f.js";import{e as X,p as Y}from"./prefixFilter.OhiPYEKz.js";import{_ as Z,a as A,M as $}from"./dispatch.S85s6hKV.js";/**
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
 */var ee={ROOT:"mdc-form-field"},te={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var ne=function(d){Z(e,d);function e(o){var i=d.call(this,A(A({},e.defaultAdapter),o))||this;return i.click=function(){i.handleClick()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var o=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){o.adapter.deactivateInputRipple()})},e}($);let ae=0;var ie=T("<div><!> <label><!></label></div>");function pe(d,e){const o=O(e,["children","$$slots","$$events","$$legacy"]),i=O(o,["getElement","use","class","align","noWrap","inputId","label$use"]);z(e,!1);let L=s(e,"use",24,()=>[]),S=s(e,"class",8,""),j=s(e,"align",8,"start"),w=s(e,"noWrap",8,!1),g=s(e,"inputId",24,()=>"SMUI-form-field-"+((ae+=1)-1)),P=s(e,"label$use",24,()=>[]),f=I(),p,c=I(),r;m("SMUI:generic:input:props",{id:g()}),m("SMUI:generic:input:mount",t=>{r=t}),m("SMUI:generic:input:unmount",()=>{r=void 0}),Q(()=>(p=new ne({activateInputRipple:()=>{r&&r.activateRipple()},deactivateInputRipple:()=>{r&&r.deactivateRipple()},deregisterInteractionHandler:(t,n)=>{a(c).removeEventListener(t,n)},registerInteractionHandler:(t,n)=>{a(c).addEventListener(t,n)}}),p.init(),()=>{p.destroy()}));function b(){return a(f)}V();var l=ie();const U=R(()=>X(i,["label$"]));let v;var _=F(l);C(_,e,"default",{},null);var u=G(_,2);const D=R(()=>Y(i,"label$"));let h;var W=F(u);return C(W,e,"label",{},null),y(u),x(u,t=>M(c,t),()=>a(c)),E(u,(t,n)=>k(t,n),P),y(l),x(l,t=>M(f,t),()=>a(f)),E(l,(t,n)=>k(t,n),L),B(()=>{v=H(l,v,{class:K({[S()]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":j()==="end","mdc-form-field--nowrap":w()}),...a(U)}),h=H(u,h,{for:g(),...a(D)})}),q(d,l),J(e,"getElement",b),N({getElement:b})}export{pe as F};
