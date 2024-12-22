import{a as Q,t as Ie,c as he}from"./disclose-version.L5AxZWdJ.js";import{p as W,b as Ce,u as C,c as Oe,g as i,n as Z,t as pe,a as $,s as Me,e as P,r as F,d as w,f as be}from"./runtime.W_ZEMHic.js";import{s as ee,b as V,u as B,d as G,c as K}from"./useActions.kHGJbmCA.js";import{p as l,a as X,b as te,r as ne,c as Ne}from"./props.Ce4KWaWc.js";import{o as ve}from"./index-client.CM1w6q3L.js";import{_ as ge,a as j,M as ye,d as O,p as ke}from"./dispatch.KCohpohh.js";import{e as De,p as Le}from"./prefixFilter.OhiPYEKz.js";import{C as xe}from"./ClassAdder.Ck-mTZey.js";/**
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
 */var d={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},p={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},u={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var Re=u.ARIA_LIVE_DELAY_MS,q=p.ARIA_LIVE_LABEL_TEXT_ATTR;function Ue(o,e){e===void 0&&(e=o);var n=o.getAttribute("aria-live"),a=e.textContent.trim();if(!(!a||!n)){o.setAttribute("aria-live","off"),e.textContent="";var c=document.createElement("span");c.setAttribute("style","display: inline-block; width: 0; height: 1px;"),c.textContent=" ",e.appendChild(c),e.setAttribute(q,a),setTimeout(function(){o.setAttribute("aria-live",n),e.removeAttribute(q),e.textContent=a},Re)}}/**
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
 */var Y=d.OPENING,z=d.OPEN,H=d.CLOSING,Pe=p.REASON_ACTION,y=p.REASON_DISMISS,Fe=function(o){ge(e,o);function e(n){var a=o.call(this,j(j({},e.defaultAdapter),n))||this;return a.opened=!1,a.animationFrame=0,a.animationTimer=0,a.autoDismissTimer=0,a.autoDismissTimeoutMs=u.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,a.closeOnEscape=!0,a}return Object.defineProperty(e,"cssClasses",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Y),this.adapter.removeClass(z),this.adapter.removeClass(H)},e.prototype.open=function(){var n=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(H),this.adapter.addClass(Y),this.adapter.announce(),this.runNextAnimationFrame(function(){n.adapter.addClass(z),n.animationTimer=setTimeout(function(){var a=n.getTimeoutMs();n.handleAnimationTimerEnd(),n.adapter.notifyOpened(),a!==u.INDETERMINATE&&(n.autoDismissTimer=setTimeout(function(){n.close(y)},a))},u.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(n){var a=this;n===void 0&&(n=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(n),this.adapter.addClass(d.CLOSING),this.adapter.removeClass(d.OPEN),this.adapter.removeClass(d.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){a.handleAnimationTimerEnd(),a.adapter.notifyClosed(n)},u.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(n){var a=u.MIN_AUTO_DISMISS_TIMEOUT_MS,c=u.MAX_AUTO_DISMISS_TIMEOUT_MS,m=u.INDETERMINATE;if(n===u.INDETERMINATE||n<=c&&n>=a)this.autoDismissTimeoutMs=n;else throw new Error(`
        timeoutMs must be an integer in the range `+a+"–"+c+`
        (or `+m+" to disable), but got '"+n+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(n){this.closeOnEscape=n},e.prototype.handleKeyDown=function(n){var a=n.key==="Escape"||n.keyCode===27;a&&this.getCloseOnEscape()&&this.close(y)},e.prototype.handleActionButtonClick=function(n){this.close(Pe)},e.prototype.handleActionIconClick=function(n){this.close(y)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(d.OPENING),this.adapter.removeClass(d.CLOSING)},e.prototype.runNextAnimationFrame=function(n){var a=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){a.animationFrame=0,clearTimeout(a.animationTimer),a.animationTimer=setTimeout(n,0)})},e}(ye);let J=Promise.resolve();var we=Ie("<aside><div><!></div></aside>");function ze(o,e){W(e,!0);const{closest:n}=ke;let a=()=>{};function c(t){return t===a}let m=l(e,"use",19,()=>[]),k=l(e,"class",3,""),S=l(e,"leading",3,!1),A=l(e,"timeoutMs",3,5e3),D=l(e,"closeOnEscape",3,!0),M=l(e,"labelText",3,a),b=l(e,"actionButtonText",3,a),ae=l(e,"surface$use",19,()=>[]),ie=l(e,"surface$class",3,""),L=ne(e,["$$slots","$$events","$$legacy","use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$use","surface$class","children"]),N,s=Me(void 0),_=X({}),v,x=new Promise(t=>v=t);Ce("SMUI:label:context","snackbar"),C(()=>{i(s)&&i(s).getTimeoutMs()!==A()&&i(s).setTimeoutMs(A())}),C(()=>{i(s)&&i(s).getCloseOnEscape()!==D()&&i(s).setCloseOnEscape(D())}),C(()=>{i(s)&&!c(M())&&I().textContent!==M()&&(I().textContent=M())}),C(()=>{i(s)&&!c(b())&&g().textContent!==b()&&(g().textContent=b())}),ve(()=>(Oe(s,X(new Fe({addClass:se,announce:()=>Ue(I()),notifyClosed:t=>O(f(),"SMUISnackbarClosed",t?{reason:t}:{}),notifyClosing:t=>O(f(),"SMUISnackbarClosing",t?{reason:t}:{}),notifyOpened:()=>O(f(),"SMUISnackbarOpened"),notifyOpening:()=>O(f(),"SMUISnackbarOpening"),removeClass:re}))),i(s).init(),()=>{var t;(t=i(s))==null||t.destroy()}));function se(t){_[t]||(_[t]=!0)}function re(t){(!(t in _)||_[t])&&(_[t]=!1)}function oe(t){const r=t.target;i(s)&&(n(r,".mdc-snackbar__action")?i(s).handleActionButtonClick(t):n(r,".mdc-snackbar__dismiss")&&i(s).handleActionIconClick(t))}function ce(){v(),x=new Promise(t=>v=t)}function ue(){J=J.then(()=>{var t;return(t=i(s))==null||t.open(),x})}function le(){var t;return(t=i(s))==null?void 0:t.open()}function de(t){var r;return(r=i(s))==null?void 0:r.close(t)}function me(){if(i(s)==null)throw new Error("Instance is undefined.");return i(s).isOpen()}function I(){return f().querySelector(".mdc-snackbar__label")??document.createElement("div")}function g(){return f().querySelector(".mdc-snackbar__action")??document.createElement("button")}function f(){return N}var T=we();const fe=w(()=>De(L,["surface$"]));var _e=t=>{var r;i(s)&&i(s).handleKeyDown(t),(r=e.onkeydown)==null||r.call(e,t)},Te=t=>{var r;ce(),(r=e.onSMUISnackbarClosed)==null||r.call(e,t)};let R;var h=P(T);const Ee=w(()=>Le(L,"surface$"));var Se=t=>{var r;oe(t),(r=e.surface$onclick)==null||r.call(e,t)};let U;var Ae=P(h);return ee(Ae,()=>e.children??Z),F(h),V(h,(t,r)=>{var E;return(E=B)==null?void 0:E(t,r)},ae),F(T),te(T,t=>N=t,()=>N),V(T,(t,r)=>{var E;return(E=B)==null?void 0:E(t,r)},m),pe(()=>{R=G(T,R,{class:K({[k()]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":e.variant==="stacked","mdc-snackbar--leading":S(),..._}),...i(fe),onkeydown:_e,onSMUISnackbarClosed:Te}),U=G(h,U,{class:K({[ie()]:!0,"mdc-snackbar__surface":!0}),role:"status","aria-relevant":"additions",...i(Ee),onclick:Se})}),Q(o,T),$({open:ue,forceOpen:le,close:de,isOpen:me,getLabelElement:I,getActionButtonElement:g,getElement:f})}function He(o,e){W(e,!0);let n=ne(e,["$$slots","$$events","$$legacy","children"]),a;function c(){return a.getElement()}return te(xe(o,Ne({_smuiClass:"mdc-snackbar__actions",_smuiProps:{"aria-atomic":"true"},_smuiContexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0},tag:"div"},()=>n,{children:(m,k)=>{var S=he(),A=be(S);ee(A,()=>e.children??Z),Q(m,S)},$$slots:{default:!0}})),m=>a=m,()=>a),$({getElement:c})}export{He as A,ze as S};
