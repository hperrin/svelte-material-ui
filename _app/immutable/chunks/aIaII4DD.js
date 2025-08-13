import"./Bzak7iHL.js";import{b as fe,s as Y}from"./Bu45w55_.js";import{p as z,a as _e,i as Te,u as C,g as r,s as Ee,j as Se,b as H,d as J,k as R,h as Ae,n as Q,r as U,c as Ie,f as he}from"./BwguTo01.js";import{a as P,c as F,b as V,u as B}from"./DBhbQkAD.js";import{p as l,b as W,r as Z,c as Ce}from"./CMyoTnZX.js";import{_ as Oe,a as w,M as Me,p as pe,d as O}from"./qG3zDIF3.js";import{e as be,p as Ne}from"./OhiPYEKz.js";import{C as ve}from"./3oDDhym3.js";/**
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
 */var m={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},M={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},u={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var ge=u.ARIA_LIVE_DELAY_MS,G=M.ARIA_LIVE_LABEL_TEXT_ATTR;function ke(o,e){e===void 0&&(e=o);var n=o.getAttribute("aria-live"),i=e.textContent.trim();if(!(!i||!n)){o.setAttribute("aria-live","off"),e.textContent="";var c=document.createElement("span");c.setAttribute("style","display: inline-block; width: 0; height: 1px;"),c.textContent=" ",e.appendChild(c),e.setAttribute(G,i),setTimeout(function(){o.setAttribute("aria-live",n),e.removeAttribute(G),e.textContent=i},ge)}}/**
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
 */var K=m.OPENING,j=m.OPEN,X=m.CLOSING,ye=M.REASON_ACTION,k=M.REASON_DISMISS,De=(function(o){Oe(e,o);function e(n){var i=o.call(this,w(w({},e.defaultAdapter),n))||this;return i.opened=!1,i.animationFrame=0,i.animationTimer=0,i.autoDismissTimer=0,i.autoDismissTimeoutMs=u.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,i.closeOnEscape=!0,i}return Object.defineProperty(e,"cssClasses",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(K),this.adapter.removeClass(j),this.adapter.removeClass(X)},e.prototype.open=function(){var n=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(X),this.adapter.addClass(K),this.adapter.announce(),this.runNextAnimationFrame(function(){n.adapter.addClass(j),n.animationTimer=setTimeout(function(){var i=n.getTimeoutMs();n.handleAnimationTimerEnd(),n.adapter.notifyOpened(),i!==u.INDETERMINATE&&(n.autoDismissTimer=setTimeout(function(){n.close(k)},i))},u.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(n){var i=this;n===void 0&&(n=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(m.CLOSING),this.adapter.removeClass(m.OPEN),this.adapter.removeClass(m.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){i.handleAnimationTimerEnd(),i.adapter.notifyClosed(n)},u.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(n){var i=u.MIN_AUTO_DISMISS_TIMEOUT_MS,c=u.MAX_AUTO_DISMISS_TIMEOUT_MS,d=u.INDETERMINATE;if(n===u.INDETERMINATE||n<=c&&n>=i)this.autoDismissTimeoutMs=n;else throw new Error(`
        timeoutMs must be an integer in the range `+i+"–"+c+`
        (or `+d+" to disable), but got '"+n+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(n){this.closeOnEscape=n},e.prototype.handleKeyDown=function(n){var i=n.key==="Escape"||n.keyCode===27;i&&this.getCloseOnEscape()&&this.close(k)},e.prototype.handleActionButtonClick=function(n){this.close(ye)},e.prototype.handleActionIconClick=function(n){this.close(k)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(m.OPENING),this.adapter.removeClass(m.CLOSING)},e.prototype.runNextAnimationFrame=function(n){var i=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){i.animationFrame=0,clearTimeout(i.animationTimer),i.animationTimer=setTimeout(n,0)})},e})(Me);let q=Promise.resolve();var Le=Se("<aside><div><!></div></aside>");function Ge(o,e){z(e,!0);const{closest:n}=pe;let i=()=>{};function c(t){return t===i}let d=l(e,"use",19,()=>[]),y=l(e,"class",3,""),S=l(e,"leading",3,!1),A=l(e,"timeoutMs",3,5e3),D=l(e,"closeOnEscape",3,!0),p=l(e,"labelText",3,i),b=l(e,"actionButtonText",3,i),$=l(e,"surface$use",19,()=>[]),ee=l(e,"surface$class",3,""),L=Z(e,["$$slots","$$events","$$legacy","use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$use","surface$class","children"]),N,s=Ee(void 0),_=_e({}),v,x=new Promise(t=>v=t);Te("SMUI:label:context","snackbar"),C(()=>{r(s)&&r(s).getTimeoutMs()!==A()&&r(s).setTimeoutMs(A())}),C(()=>{r(s)&&r(s).getCloseOnEscape()!==D()&&r(s).setCloseOnEscape(D())}),C(()=>{r(s)&&!c(p())&&I().textContent!==p()&&(I().textContent=p())}),C(()=>{r(s)&&!c(b())&&g().textContent!==b()&&(g().textContent=b())}),fe(()=>(Ae(s,new De({addClass:te,announce:()=>ke(I()),notifyClosed:t=>O(f(),"SMUISnackbarClosed",t?{reason:t}:{}),notifyClosing:t=>O(f(),"SMUISnackbarClosing",t?{reason:t}:{}),notifyOpened:()=>O(f(),"SMUISnackbarOpened"),notifyOpening:()=>O(f(),"SMUISnackbarOpening"),removeClass:ne}),!0),r(s).init(),()=>{var t;(t=r(s))==null||t.destroy()}));function te(t){_[t]||(_[t]=!0)}function ne(t){(!(t in _)||_[t])&&(_[t]=!1)}function ie(t){const a=t.target;r(s)&&(n(a,".mdc-snackbar__action")?r(s).handleActionButtonClick(t):n(a,".mdc-snackbar__dismiss")&&r(s).handleActionIconClick(t))}function ae(){v(),x=new Promise(t=>v=t)}function se(){q=q.then(()=>{var t;return(t=r(s))==null||t.open(),x})}function re(){var t;return(t=r(s))==null?void 0:t.open()}function oe(t){var a;return(a=r(s))==null?void 0:a.close(t)}function ce(){if(r(s)==null)throw new Error("Instance is undefined.");return r(s).isOpen()}function I(){return f().querySelector(".mdc-snackbar__label")??document.createElement("div")}function g(){return f().querySelector(".mdc-snackbar__action")??document.createElement("button")}function f(){return N}var T=Le(),ue=t=>{var a;r(s)&&r(s).handleKeyDown(t),(a=e.onkeydown)==null||a.call(e,t)},le=t=>{var a;ae(),(a=e.onSMUISnackbarClosed)==null||a.call(e,t)};P(T,(t,a)=>({class:t,...a,onkeydown:ue,onSMUISnackbarClosed:le}),[()=>F({"mdc-snackbar":!0,"mdc-snackbar--stacked":e.variant==="stacked","mdc-snackbar--leading":S(),..._,[y()]:!0}),()=>be(L,["surface$"])]);var h=R(T),me=t=>{var a;ie(t),(a=e.surface$onclick)==null||a.call(e,t)};P(h,(t,a)=>({class:t,role:"status","aria-relevant":"additions",...a,onclick:me}),[()=>F({"mdc-snackbar__surface":!0,[ee()]:!0}),()=>Ne(L,"surface$")]);var de=R(h);return Y(de,()=>e.children??Q),U(h),V(h,(t,a)=>{var E;return(E=B)==null?void 0:E(t,a)},$),U(T),W(T,t=>N=t,()=>N),V(T,(t,a)=>{var E;return(E=B)==null?void 0:E(t,a)},d),H(o,T),J({open:se,forceOpen:re,close:oe,isOpen:ce,getLabelElement:I,getActionButtonElement:g,getElement:f})}function Ke(o,e){z(e,!0);let n=Z(e,["$$slots","$$events","$$legacy","children"]),i;function c(){return i.getElement()}return W(ve(o,Ce({_smuiClass:"mdc-snackbar__actions",_smuiProps:{"aria-atomic":"true"},_smuiContexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0},tag:"div"},()=>n,{children:(d,y)=>{var S=Ie(),A=he(S);Y(A,()=>e.children??Q),H(d,S)},$$slots:{default:!0}})),d=>i=d,()=>i),J({getElement:c})}export{Ke as A,Ge as S};
