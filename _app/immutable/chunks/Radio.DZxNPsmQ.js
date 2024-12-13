import{a as Z,t as $}from"./disclose-version.B3RRTx8Z.js";import{p as ee,k as D,h as I,g as o,a4 as te,t as ae,a as ie,b as L,c as ne,i as se,r as re,d as P}from"./runtime.DwlehcF5.js";import{b as M,r as ue,u as F,d as T,c as k}from"./useActions.dWwaU660.js";import{a as le}from"./input.CcGXxqCd.js";import{p as i,a as b,o as de,b as oe,r as ce}from"./index-client.BDIqpeZ8.js";import{_ as fe,a as w,M as ve,d as B}from"./dispatch.CwJSP0lB.js";import{e as me,p as _e}from"./prefixFilter.OhiPYEKz.js";import{R as pe}from"./IconButton.CkPA9NQ0.js";/**
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
 */var be={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},ge={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var he=function(c){fe(t,c);function t(r){return c.call(this,w(w({},t.defaultAdapter),r))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return ge},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return be},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setDisabled=function(r){var d=t.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(r),r?this.adapter.addClass(d):this.adapter.removeClass(d)},t}(ve),Ce=$('<div><input> <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div></div>');function xe(c,t){ee(t,!0);const r=[];let d=()=>{};function R(e){return e===d}let K=i(t,"use",19,()=>[]),N=i(t,"class",3,""),V=i(t,"style",3,""),f=i(t,"disabled",15,!1),z=i(t,"touch",3,!1),n=i(t,"group",15),u=i(t,"value",3,null),v=i(t,"valueKey",3,d),G=i(t,"input$use",19,()=>[]),q=i(t,"input$class",3,""),S=ce(t,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","group","value","valueKey","input$use","input$class"]),g,h=L(void 0),l=b({}),m=b({}),C=L(!1),y=b(D("SMUI:generic:input:props")??{});const O=D("SMUI:generic:input:mount"),A=D("SMUI:generic:input:unmount");de(()=>{I(h,b(new he({addClass:x,removeClass:E,setNativeControlDisabled:a=>f(a)})));const e={_smui_radio_accessor:!0,get element(){return _()},get checked(){return n()===u()},set checked(a){a&&n()!==u()?n(u()):!a&&n()===u()&&n(void 0)},activateRipple(){f()||I(C,!0)},deactivateRipple(){I(C,!1)}};return O&&O(e),o(h).init(),()=>{var a;A&&A(e),(a=o(h))==null||a.destroy()}});function x(e){l[e]||(l[e]=!0)}function E(e){(!(e in l)||l[e])&&(l[e]=!1)}function H(e,a){m[e]!=a&&(a===""||a==null?delete m[e]:m[e]=a)}function J(){return y&&y.id}function _(){return g}var s=Ce();const Q=P(()=>me(S,["input$"]));let U;var p=ne(s);ue(p);const W=P(()=>_e(S,"input$"));var X=e=>{var a;B(_(),"blur",e),(a=t.input$onblur)==null||a.call(t,e)},Y=e=>{var a;B(_(),"focus",e),(a=t.input$onfocus)==null||a.call(t,e)};let j;return M(p,(e,a)=>F(e,a),G),te(()=>le(r,[],p,()=>(R(v())?u():v(),n()),n)),se(4),re(s),oe(s,e=>g=e,()=>g),M(s,(e,a)=>pe(e,a),()=>({unbounded:!0,active:o(C),addClass:x,removeClass:E,addStyle:H})),M(s,(e,a)=>F(e,a),K),ae(()=>{U=T(s,U,{class:k({[N()]:!0,"mdc-radio":!0,"mdc-radio--disabled":f(),"mdc-radio--touch":z(),...l}),style:Object.entries(m).map(([e,a])=>`${e}: ${a};`).concat([V()]).join(" "),...o(Q)}),j=T(p,j,{class:k({[q()]:!0,"mdc-radio__native-control":!0}),type:"radio",...y,disabled:f(),value:R(v())?u():v(),...o(W),onblur:X,onfocus:Y})}),Z(c,s),ie({getId:J,getElement:_})}export{xe as R};
