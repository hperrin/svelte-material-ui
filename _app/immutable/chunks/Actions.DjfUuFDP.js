import{a as de,t as me}from"./disclose-version.B3RRTx8Z.js";import{p as fe,e as _e,u as S,h as Te,g as i,n as Ee,t as Se,a as Ae,b as Ie,c as x,r as R,d as U}from"./runtime.DwlehcF5.js";import{s as he,b as P,u as F,d as w,c as B}from"./useActions.dWwaU660.js";import{p as l,a as V,o as Ce,b as Oe,r as pe}from"./index-client.BDIqpeZ8.js";import{_ as Me,a as G,M as be,d as A,p as Ne}from"./dispatch.CwJSP0lB.js";import{e as ve,p as ge}from"./prefixFilter.OhiPYEKz.js";import{c as ke}from"./classAdderBuilder.Btis2bDi.js";/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var d={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},I={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},r={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var ye=r.ARIA_LIVE_DELAY_MS,K=I.ARIA_LIVE_LABEL_TEXT_ATTR;function De(c,e){e===void 0&&(e=c);var n=c.getAttribute("aria-live"),a=e.textContent.trim();if(!(!a||!n)){c.setAttribute("aria-live","off"),e.textContent="";var u=document.createElement("span");u.setAttribute("style","display: inline-block; width: 0; height: 1px;"),u.textContent=" ",e.appendChild(u),e.setAttribute(K,a),setTimeout(function(){c.setAttribute("aria-live",n),e.removeAttribute(K),e.textContent=a},ye)}}/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var X=d.OPENING,j=d.OPEN,q=d.CLOSING,Le=I.REASON_ACTION,N=I.REASON_DISMISS,xe=function(c){Me(e,c);function e(n){var a=c.call(this,G(G({},e.defaultAdapter),n))||this;return a.opened=!1,a.animationFrame=0,a.animationTimer=0,a.autoDismissTimer=0,a.autoDismissTimeoutMs=r.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,a.closeOnEscape=!0,a}return Object.defineProperty(e,"cssClasses",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return r},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(X),this.adapter.removeClass(j),this.adapter.removeClass(q)},e.prototype.open=function(){var n=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(q),this.adapter.addClass(X),this.adapter.announce(),this.runNextAnimationFrame(function(){n.adapter.addClass(j),n.animationTimer=setTimeout(function(){var a=n.getTimeoutMs();n.handleAnimationTimerEnd(),n.adapter.notifyOpened(),a!==r.INDETERMINATE&&(n.autoDismissTimer=setTimeout(function(){n.close(N)},a))},r.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(n){var a=this;n===void 0&&(n=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(d.CLOSING),this.adapter.removeClass(d.OPEN),this.adapter.removeClass(d.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){a.handleAnimationTimerEnd(),a.adapter.notifyClosed(n)},r.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(n){var a=r.MIN_AUTO_DISMISS_TIMEOUT_MS,u=r.MAX_AUTO_DISMISS_TIMEOUT_MS,h=r.INDETERMINATE;if(n===r.INDETERMINATE||n<=u&&n>=a)this.autoDismissTimeoutMs=n;else throw new Error(`
        timeoutMs must be an integer in the range `+a+"–"+u+`
        (or `+h+" to disable), but got '"+n+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(n){this.closeOnEscape=n},e.prototype.handleKeyDown=function(n){var a=n.key==="Escape"||n.keyCode===27;a&&this.getCloseOnEscape()&&this.close(N)},e.prototype.handleActionButtonClick=function(n){this.close(Le)},e.prototype.handleActionIconClick=function(n){this.close(N)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(d.OPENING),this.adapter.removeClass(d.CLOSING)},e.prototype.runNextAnimationFrame=function(n){var a=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){a.animationFrame=0,clearTimeout(a.animationTimer),a.animationTimer=setTimeout(n,0)})},e}(be);let Y=Promise.resolve();var Re=me("<aside><div><!></div></aside>");function Ke(c,e){fe(e,!0);const{closest:n}=Ne;let a=()=>{};function u(t){return t===a}let h=l(e,"use",19,()=>[]),z=l(e,"class",3,""),H=l(e,"leading",3,!1),v=l(e,"timeoutMs",3,5e3),g=l(e,"closeOnEscape",3,!0),C=l(e,"labelText",3,a),O=l(e,"actionButtonText",3,a),J=l(e,"surface$use",19,()=>[]),Q=l(e,"surface$class",3,""),k=pe(e,["$$slots","$$events","$$legacy","use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$use","surface$class","children"]),p,s=Ie(void 0),f=V({}),M,y=new Promise(t=>M=t);_e("SMUI:label:context","snackbar"),S(()=>{i(s)&&i(s).getTimeoutMs()!==v()&&i(s).setTimeoutMs(v())}),S(()=>{i(s)&&i(s).getCloseOnEscape()!==g()&&i(s).setCloseOnEscape(g())}),S(()=>{i(s)&&!u(C())&&T().textContent!==C()&&(T().textContent=C())}),S(()=>{i(s)&&!u(O())&&b().textContent!==O()&&(b().textContent=O())}),Ce(()=>(Te(s,V(new xe({addClass:W,announce:()=>De(T()),notifyClosed:t=>A(m(),"SMUISnackbarClosed",t?{reason:t}:{}),notifyClosing:t=>A(m(),"SMUISnackbarClosing",t?{reason:t}:{}),notifyOpened:()=>A(m(),"SMUISnackbarOpened"),notifyOpening:()=>A(m(),"SMUISnackbarOpening"),removeClass:Z}))),i(s).init(),()=>{var t;(t=i(s))==null||t.destroy()}));function W(t){f[t]||(f[t]=!0)}function Z(t){(!(t in f)||f[t])&&(f[t]=!1)}function $(t){const o=t.target;i(s)&&(n(o,".mdc-snackbar__action")?i(s).handleActionButtonClick(t):n(o,".mdc-snackbar__dismiss")&&i(s).handleActionIconClick(t))}function ee(){M(),y=new Promise(t=>M=t)}function te(){Y=Y.then(()=>{var t;return(t=i(s))==null||t.open(),y})}function ne(){var t;return(t=i(s))==null?void 0:t.open()}function ae(t){var o;return(o=i(s))==null?void 0:o.close(t)}function ie(){if(i(s)==null)throw new Error("Instance is undefined.");return i(s).isOpen()}function T(){return m().querySelector(".mdc-snackbar__label")??document.createElement("div")}function b(){return m().querySelector(".mdc-snackbar__action")??document.createElement("button")}function m(){return p}var _=Re();const se=U(()=>ve(k,["surface$"]));var oe=t=>{var o;i(s)&&i(s).handleKeyDown(t),(o=e.onkeydown)==null||o.call(e,t)},re=t=>{var o;ee(),(o=e.onSMUISnackbarClosed)==null||o.call(e,t)};let D;var E=x(_);const ce=U(()=>ge(k,"surface$"));var ue=t=>{var o;$(t),(o=e.surface$onclick)==null||o.call(e,t)};let L;var le=x(E);return he(le,()=>e.children??Ee),R(E),P(E,(t,o)=>F(t,o),J),R(_),Oe(_,t=>p=t,()=>p),P(_,(t,o)=>F(t,o),h),Se(()=>{D=w(_,D,{class:B({[z()]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":e.variant==="stacked","mdc-snackbar--leading":H(),...f}),...i(se),onkeydown:oe,onSMUISnackbarClosed:re}),L=w(E,L,{class:B({[Q()]:!0,"mdc-snackbar__surface":!0}),role:"status","aria-relevant":"additions",...i(ce),onclick:ue})}),de(c,_),Ae({open:te,forceOpen:ne,close:ae,isOpen:ie,getLabelElement:T,getActionButtonElement:b,getElement:m})}const Xe=ke({class:"mdc-snackbar__actions",tag:"div",props:{"aria-atomic":"true"},contexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0}});export{Xe as A,Ke as S};
