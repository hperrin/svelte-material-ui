import{a as $,t as ee}from"./disclose-version.L5AxZWdJ.js";import{p as te,k as I,c as M,g as c,a8 as ae,t as ie,a as ne,s as P,e as se,j as re,r as ue,d as F}from"./runtime.W_ZEMHic.js";import{b as R,r as le,u as T,d as k,c as w}from"./useActions.kHGJbmCA.js";import{a as de}from"./input.BQIM_y-Z.js";import{p as i,a as g,b as oe,r as ce}from"./props.Ce4KWaWc.js";import{o as fe}from"./index-client.CM1w6q3L.js";import{_ as me,a as B,M as ve,d as K}from"./dispatch.KCohpohh.js";import{e as _e,p as pe}from"./prefixFilter.OhiPYEKz.js";import{R as be}from"./IconButton.TWSmi4tO.js";/**
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
 */var ge={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},Ce={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
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
 */var he=function(f){me(t,f);function t(u){return f.call(this,B(B({},t.defaultAdapter),u))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return Ce},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return ge},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setDisabled=function(u){var o=t.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(u),u?this.adapter.addClass(o):this.adapter.removeClass(o)},t}(ve),ye=ee('<div><input> <div class="mdc-radio__background"><div class="mdc-radio__outer-circle"></div> <div class="mdc-radio__inner-circle"></div></div> <div class="mdc-radio__ripple"></div></div>');function Ue(f,t){te(t,!0);const u=[];let o=()=>{};function S(e){return e===o}let N=i(t,"use",19,()=>[]),V=i(t,"class",3,""),z=i(t,"style",3,""),m=i(t,"disabled",15,!1),G=i(t,"touch",3,!1),s=i(t,"group",15),l=i(t,"value",3,null),v=i(t,"valueKey",3,o),q=i(t,"input$use",19,()=>[]),H=i(t,"input$class",3,""),O=ce(t,["$$slots","$$events","$$legacy","use","class","style","disabled","touch","group","value","valueKey","input$use","input$class"]),C,h=P(void 0),d=g({}),_=g({}),y=P(!1),D=g(I("SMUI:generic:input:props")??{});const A=I("SMUI:generic:input:mount"),x=I("SMUI:generic:input:unmount");fe(()=>{M(h,g(new he({addClass:E,removeClass:U,setNativeControlDisabled:a=>m(a)})));const e={_smui_radio_accessor:!0,get element(){return p()},get checked(){return s()===l()},set checked(a){a&&s()!==l()?s(l()):!a&&s()===l()&&s(void 0)},activateRipple(){m()||M(y,!0)},deactivateRipple(){M(y,!1)}};return A&&A(e),c(h).init(),()=>{var a;x&&x(e),(a=c(h))==null||a.destroy()}});function E(e){d[e]||(d[e]=!0)}function U(e){(!(e in d)||d[e])&&(d[e]=!1)}function J(e,a){_[e]!=a&&(a===""||a==null?delete _[e]:_[e]=a)}function Q(){return D&&D.id}function p(){return C}var r=ye();const W=F(()=>_e(O,["input$"]));let j;var b=se(r);le(b);const X=F(()=>pe(O,"input$"));var Y=e=>{var a;K(p(),"blur",e),(a=t.input$onblur)==null||a.call(t,e)},Z=e=>{var a;K(p(),"focus",e),(a=t.input$onfocus)==null||a.call(t,e)};let L;return R(b,(e,a)=>{var n;return(n=T)==null?void 0:n(e,a)},q),ae(()=>de(u,[],b,()=>(S(v())?l():v(),s()),s)),re(4),ue(r),oe(r,e=>C=e,()=>C),R(r,(e,a)=>{var n;return(n=be)==null?void 0:n(e,a)},()=>({unbounded:!0,active:c(y),addClass:E,removeClass:U,addStyle:J})),R(r,(e,a)=>{var n;return(n=T)==null?void 0:n(e,a)},N),ie(()=>{j=k(r,j,{class:w({[V()]:!0,"mdc-radio":!0,"mdc-radio--disabled":m(),"mdc-radio--touch":G(),...d}),style:Object.entries(_).map(([e,a])=>`${e}: ${a};`).concat([z()]).join(" "),...c(W)}),L=k(b,L,{class:w({[H()]:!0,"mdc-radio__native-control":!0}),type:"radio",...D,disabled:m(),value:S(v())?l():v(),...c(X),onblur:Y,onfocus:Z})}),$(f,r),ne({getId:Q,getElement:p})}export{Ue as R};
