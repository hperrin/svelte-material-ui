import{a as B,t as N}from"./disclose-version.L5AxZWdJ.js";import{p as z,b as g,c as v,g as n,n as y,t as G,a as J,s as R,e as C,h as K,r as k,d as S}from"./runtime.W_ZEMHic.js";import{s as x,b as E,u as H,d as O,c as Q}from"./useActions.kHGJbmCA.js";import{p as l,a as w,b as A,r as V}from"./props.Ce4KWaWc.js";import{o as X}from"./index-client.CM1w6q3L.js";import{e as Y,p as Z}from"./prefixFilter.OhiPYEKz.js";import{S as $}from"./IconButton.TWSmi4tO.js";import{_ as ee,a as P,M as te}from"./dispatch.KCohpohh.js";/**
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
 */var ne={ROOT:"mdc-form-field"},ae={LABEL_SELECTOR:".mdc-form-field > label"};/**
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
 */var ie=function(c){ee(e,c);function e(s){var o=c.call(this,P(P({},e.defaultAdapter),s))||this;return o.click=function(){o.handleClick()},o}return Object.defineProperty(e,"cssClasses",{get:function(){return ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var s=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){s.adapter.deactivateInputRipple()})},e}(te);let re=0;var le=N("<div><!> <label><!></label></div>");function be(c,e){z(e,!0);let s=l(e,"use",19,()=>[]),o=l(e,"class",3,""),U=l(e,"align",3,"start"),j=l(e,"noWrap",3,!1),h=l(e,"inputId",19,()=>"SMUI-form-field-"+re++),D=l(e,"label$use",19,()=>[]),I=V(e,["$$slots","$$events","$$legacy","use","class","align","noWrap","inputId","label$use","children","label"]),p,m=R(void 0),b=new $,f,i=R(void 0);g("SMUI:generic:input:props",{id:h()}),g("SMUI:generic:input:mount",t=>{v(i,w(t))}),g("SMUI:generic:input:unmount",()=>{v(i,void 0)}),X(()=>(v(m,w(new ie({activateInputRipple:()=>{n(i)&&n(i).activateRipple()},deactivateInputRipple:()=>{n(i)&&n(i).deactivateRipple()},deregisterInteractionHandler:(t,a)=>b.off(f,t,a),registerInteractionHandler:(t,a)=>b.on(f,t,a)}))),n(m).init(),()=>{var t;(t=n(m))==null||t.destroy(),b.clear()}));function L(){return p}var r=le();const W=S(()=>Y(I,["label$"]));let _;var F=C(r);x(F,()=>e.children??y);var d=K(F,2);const T=S(()=>Z(I,"label$"));let M;var q=C(d);return x(q,()=>e.label??y),k(d),A(d,t=>f=t,()=>f),E(d,(t,a)=>{var u;return(u=H)==null?void 0:u(t,a)},D),k(r),A(r,t=>p=t,()=>p),E(r,(t,a)=>{var u;return(u=H)==null?void 0:u(t,a)},s),G(()=>{_=O(r,_,{class:Q({[o()]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":U()==="end","mdc-form-field--nowrap":j()}),...n(W)}),M=O(d,M,{for:h(),...n(T)})}),B(c,r),J({getElement:L})}export{be as F};
