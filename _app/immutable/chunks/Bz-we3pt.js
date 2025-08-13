import"./Bzak7iHL.js";import{b as Q}from"./Bu45w55_.js";import{p as W,a as y,v as D,j as X,ad as Y,b as Z,d as $,k as ee,h as I,s as j,g as M,m as te,r as ie}from"./BwguTo01.js";import{a as L,c as P,b as R,r as ne,u as F}from"./DBhbQkAD.js";import{a as ae}from"./Cnqk_yvq.js";import{p as a,b as se,r as re}from"./CMyoTnZX.js";import{_ as ue,a as T,M as de,d as k}from"./qG3zDIF3.js";import{e as le,p as oe}from"./OhiPYEKz.js";import{R as ce}from"./D3YavpxM.js";/**
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
 */var fe={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},me={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var ve=(function(c){ue(i,c);function i(u){return c.call(this,T(T({},i.defaultAdapter),u))||this}return Object.defineProperty(i,"cssClasses",{get:function(){return me},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),i.prototype.setDisabled=function(u){var o=i.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(u),u?this.adapter.addClass(o):this.adapter.removeClass(o)},i})(de),pe=X('<div><input/> <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div></div>');function Re(c,i){W(i,!0);const u=[];let o=()=>{};function S(e){return e===o}let B=a(i,"use",19,()=>[]),K=a(i,"class",3,""),N=a(i,"style",3,""),f=a(i,"disabled",15,!1),V=a(i,"touch",3,!1),s=a(i,"group",15),d=a(i,"value",3,null),m=a(i,"valueKey",3,o),z=a(i,"input$use",19,()=>[]),G=a(i,"input$class",3,""),O=re(i,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","group","value","valueKey","input$use","input$class"]),_,g=j(void 0),l=y({}),v=y({}),C=j(!1),h=y(D("SMUI:generic:input:props")??{});const A=D("SMUI:generic:input:mount"),x=D("SMUI:generic:input:unmount");Q(()=>{I(g,new ve({addClass:E,removeClass:U,setNativeControlDisabled:t=>f(t)}),!0);const e={_smui_radio_accessor:!0,get element(){return p()},get checked(){return s()===d()},set checked(t){t&&s()!==d()?s(d()):!t&&s()===d()&&s(void 0)},activateRipple(){f()||I(C,!0)},deactivateRipple(){I(C,!1)}};return A&&A(e),M(g).init(),()=>{var t;x&&x(e),(t=M(g))==null||t.destroy()}});function E(e){l[e]||(l[e]=!0)}function U(e){(!(e in l)||l[e])&&(l[e]=!1)}function w(e,t){v[e]!=t&&(t===""||t==null?delete v[e]:v[e]=t)}function q(){return h&&h.id}function p(){return _}var r=pe();L(r,(e,t,n)=>({class:e,style:t,...n}),[()=>P({"mdc-radio":!0,"mdc-radio--disabled":f(),"mdc-radio--touch":V(),...l,[K()]:!0}),()=>Object.entries(v).map(([e,t])=>`${e}: ${t};`).concat([N()]).join(" "),()=>le(O,["input$"])]);var b=ee(r);ne(b);var H=e=>{var t;k(p(),"blur",e),(t=i.input$onblur)==null||t.call(i,e)},J=e=>{var t;k(p(),"focus",e),(t=i.input$onfocus)==null||t.call(i,e)};return L(b,(e,t,n)=>({class:e,type:"radio",...h,disabled:f(),value:t,...n,onblur:H,onfocus:J}),[()=>P({"mdc-radio__native-control":!0,[G()]:!0}),()=>S(m())?d():m(),()=>oe(O,"input$")]),R(b,(e,t)=>{var n;return(n=F)==null?void 0:n(e,t)},z),Y(()=>ae(u,[],b,()=>(S(m())?d():m(),s()),s)),te(4),ie(r),se(r,e=>_=e,()=>_),R(r,(e,t)=>{var n;return(n=ce)==null?void 0:n(e,t)},()=>({unbounded:!0,active:M(C),addClass:E,removeClass:U,addStyle:w})),R(r,(e,t)=>{var n;return(n=F)==null?void 0:n(e,t)},B),Z(c,r),$({getId:q,getElement:p})}export{Re as R};
