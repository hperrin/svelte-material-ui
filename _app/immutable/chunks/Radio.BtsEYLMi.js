import{a as te,t as ie}from"./disclose-version.Bsnu83OK.js";import"./legacy.BG3nWsJQ.js";import{p as ae,o as D,g as a,i as M,a9 as ne,t as se,a as re,m as b,d as g,c as le,n as ue,r as de,h as T}from"./runtime.SXGrDfxi.js";import{d as R,b as w,r as oe,u as z,e as B,c as K}from"./useActions.D2nM91eX.js";import{b as ce}from"./input.VD51qMSw.js";import{l as N,p as s,o as fe,b as pe}from"./index-client.CjaGIm_K.js";import{i as me}from"./lifecycle.ty5dbg6f.js";import{_ as _e,a as V,M as ve,d as k}from"./dispatch.S85s6hKV.js";import{e as be,p as ge}from"./prefixFilter.OhiPYEKz.js";import{R as he}from"./IconButton.DbDaMNQ7.js";/**
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
 */var Ce={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},ye={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var Ie=function(p){_e(t,p);function t(o){return p.call(this,V(V({},t.defaultAdapter),o))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return ye},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ce},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setDisabled=function(o){var n=t.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(o),o?this.adapter.addClass(n):this.adapter.removeClass(n)},t}(ve),De=ie('<div><input> <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div></div>');function Fe(p,t){const o=N(t,["children","$$slots","$$events","$$legacy"]),n=N(o,["getId","getElement","use","class","style","disabled","touch","group","value","valueKey","input$use","input$class"]);ae(t,!1);const G=[];let S=()=>{};function E(e){return e===S}let q=s(t,"use",24,()=>[]),P=s(t,"class",8,""),H=s(t,"style",8,""),m=s(t,"disabled",12,!1),J=s(t,"touch",8,!1),l=s(t,"group",12,void 0),c=s(t,"value",8,null),_=s(t,"valueKey",8,S),Q=s(t,"input$use",24,()=>[]),W=s(t,"input$class",8,""),h=b(),C,r=b({}),u=b({}),y=b(!1),I=D("SMUI:generic:input:props")??{};const O=D("SMUI:generic:input:mount"),A=D("SMUI:generic:input:unmount");fe(()=>{C=new Ie({addClass:U,removeClass:x,setNativeControlDisabled:i=>m(i)});const e={_smui_radio_accessor:!0,get element(){return f()},get checked(){return l()===c()},set checked(i){i&&l()!==c()?l(c()):!i&&l()===c()&&l(void 0)},activateRipple(){m()||g(y,!0)},deactivateRipple(){g(y,!1)}};return O&&O(e),C.init(),()=>{A&&A(e),C.destroy()}});function U(e){a(r)[e]||M(r,a(r)[e]=!0)}function x(e){(!(e in a(r))||a(r)[e])&&M(r,a(r)[e]=!1)}function X(e,i){a(u)[e]!=i&&(i===""||i==null?(delete a(u)[e],g(u,a(u))):M(u,a(u)[e]=i))}function j(){return I&&I.id}function f(){return a(h)}me();var d=De();const Y=T(()=>be(n,["input$"]));let L;var v=le(d);oe(v);const Z=T(()=>ge(n,"input$"));var $=e=>{var i;k(f(),"blur",e),(i=n.input$onblur)==null||i.call(n,e)},ee=e=>{var i;k(f(),"focus",e),(i=n.input$onfocus)==null||i.call(n,e)};let F;return R(v,(e,i)=>z(e,i),Q),ne(()=>ce(G,[],v,()=>(E(_())?c():_(),l()),l)),ue(4),de(d),pe(d,e=>g(h,e),()=>a(h)),R(d,(e,i)=>he(e,i),()=>({unbounded:!0,active:a(y),addClass:U,removeClass:x,addStyle:X})),R(d,(e,i)=>z(e,i),q),se(()=>{L=B(d,L,{class:K({[P()]:!0,"mdc-radio":!0,"mdc-radio--disabled":m(),"mdc-radio--touch":J(),...a(r)}),style:Object.entries(a(u)).map(([e,i])=>`${e}: ${i};`).concat([H()]).join(" "),...a(Y)}),F=B(v,F,{class:K({[W()]:!0,"mdc-radio__native-control":!0}),type:"radio",...I,disabled:m(),value:E(_())?c():_(),...a(Z),onblur:$,onfocus:ee})}),te(p,d),w(t,"getId",j),w(t,"getElement",f),re({getId:j,getElement:f})}export{Fe as R};
