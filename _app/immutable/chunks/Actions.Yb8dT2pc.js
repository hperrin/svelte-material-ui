import{a as Ae,t as Se}from"./disclose-version.Bsnu83OK.js";import"./legacy.BG3nWsJQ.js";import{p as Ie,j as Oe,d as w,g as i,i as G,l as h,b as he,t as Ce,a as be,m as k,c as K,r as j,e as C,h as X}from"./runtime.SXGrDfxi.js";import{s as Me,d as q,b as _,u as z,e as Y,c as H}from"./useActions.D2nM91eX.js";import{l as J,p as r,o as Ne,b as ve}from"./index-client.CjaGIm_K.js";import{i as ge}from"./lifecycle.ty5dbg6f.js";import{_ as ye,a as Q,M as ke,d as b,p as De}from"./dispatch.S85s6hKV.js";import{e as Le,p as xe}from"./prefixFilter.OhiPYEKz.js";import{c as Re}from"./classAdderBuilder.cB7Ghhqr.js";/**
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
 */var m={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},M={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},c={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
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
 */var Ue=c.ARIA_LIVE_DELAY_MS,W=M.ARIA_LIVE_LABEL_TEXT_ATTR;function Fe(u,e){e===void 0&&(e=u);var a=u.getAttribute("aria-live"),t=e.textContent.trim();if(!(!t||!a)){u.setAttribute("aria-live","off"),e.textContent="";var l=document.createElement("span");l.setAttribute("style","display: inline-block; width: 0; height: 1px;"),l.textContent=" ",e.appendChild(l),e.setAttribute(W,t),setTimeout(function(){u.setAttribute("aria-live",a),e.removeAttribute(W),e.textContent=t},Ue)}}/**
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
 */var Z=m.OPENING,$=m.OPEN,ee=m.CLOSING,Be=M.REASON_ACTION,D=M.REASON_DISMISS,Pe=function(u){ye(e,u);function e(a){var t=u.call(this,Q(Q({},e.defaultAdapter),a))||this;return t.opened=!1,t.animationFrame=0,t.animationTimer=0,t.autoDismissTimer=0,t.autoDismissTimeoutMs=c.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,t.closeOnEscape=!0,t}return Object.defineProperty(e,"cssClasses",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Z),this.adapter.removeClass($),this.adapter.removeClass(ee)},e.prototype.open=function(){var a=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(ee),this.adapter.addClass(Z),this.adapter.announce(),this.runNextAnimationFrame(function(){a.adapter.addClass($),a.animationTimer=setTimeout(function(){var t=a.getTimeoutMs();a.handleAnimationTimerEnd(),a.adapter.notifyOpened(),t!==c.INDETERMINATE&&(a.autoDismissTimer=setTimeout(function(){a.close(D)},t))},c.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(a){var t=this;a===void 0&&(a=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(a),this.adapter.addClass(m.CLOSING),this.adapter.removeClass(m.OPEN),this.adapter.removeClass(m.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){t.handleAnimationTimerEnd(),t.adapter.notifyClosed(a)},c.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(a){var t=c.MIN_AUTO_DISMISS_TIMEOUT_MS,l=c.MAX_AUTO_DISMISS_TIMEOUT_MS,E=c.INDETERMINATE;if(a===c.INDETERMINATE||a<=l&&a>=t)this.autoDismissTimeoutMs=a;else throw new Error(`
        timeoutMs must be an integer in the range `+t+"–"+l+`
        (or `+E+" to disable), but got '"+a+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(a){this.closeOnEscape=a},e.prototype.handleKeyDown=function(a){var t=a.key==="Escape"||a.keyCode===27;t&&this.getCloseOnEscape()&&this.close(D)},e.prototype.handleActionButtonClick=function(a){this.close(Be)},e.prototype.handleActionIconClick=function(a){this.close(D)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(m.OPENING),this.adapter.removeClass(m.CLOSING)},e.prototype.runNextAnimationFrame=function(a){var t=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){t.animationFrame=0,clearTimeout(t.animationTimer),t.animationTimer=setTimeout(a,0)})},e}(ke);let te=Promise.resolve();var Ve=Se("<aside><div><!></div></aside>");function Je(u,e){const a=J(e,["children","$$slots","$$events","$$legacy"]),t=J(a,["open","forceOpen","close","isOpen","getLabelElement","getActionButtonElement","getElement","use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$class","surface$use"]);Ie(e,!1);const{closest:l}=De;let E=()=>{};function L(n){return n===E}let ne=r(e,"use",24,()=>[]),ae=r(e,"class",8,""),ie=r(e,"variant",8,""),se=r(e,"leading",8,!1),N=r(e,"timeoutMs",8,5e3),v=r(e,"closeOnEscape",8,!0),A=r(e,"labelText",8,E),S=r(e,"actionButtonText",8,E),oe=r(e,"surface$class",8,""),re=r(e,"surface$use",24,()=>[]),g=k(),s=k(),d=k({}),y,x=new Promise(n=>y=n);Oe("SMUI:label:context","snackbar"),Ne(()=>(w(s,new Pe({addClass:ce,announce:()=>Fe(p()),notifyClosed:n=>b(f(),"SMUISnackbarClosed",n?{reason:n}:{}),notifyClosing:n=>b(f(),"SMUISnackbarClosing",n?{reason:n}:{}),notifyOpened:()=>b(f(),"SMUISnackbarOpened"),notifyOpening:()=>b(f(),"SMUISnackbarOpening"),removeClass:ue})),i(s).init(),()=>{i(s).destroy()}));function ce(n){i(d)[n]||G(d,i(d)[n]=!0)}function ue(n){(!(n in i(d))||i(d)[n])&&G(d,i(d)[n]=!1)}function le(n){const o=n.target;i(s)&&(l(o,".mdc-snackbar__action")?i(s).handleActionButtonClick(n):l(o,".mdc-snackbar__dismiss")&&i(s).handleActionIconClick(n))}function me(){y(),x=new Promise(n=>y=n)}function R(){te=te.then(()=>(i(s).open(),x))}function U(){return i(s).open()}function F(n){return i(s).close(n)}function B(){return i(s).isOpen()}function p(){return f().querySelector(".mdc-snackbar__label")??document.createElement("div")}function I(){return f().querySelector(".mdc-snackbar__action")??document.createElement("button")}function f(){return i(g)}h(()=>(i(s),C(N())),()=>{i(s)&&i(s).getTimeoutMs()!==N()&&i(s).setTimeoutMs(N())}),h(()=>(i(s),C(v())),()=>{i(s)&&i(s).getCloseOnEscape()!==v()&&i(s).setCloseOnEscape(v())}),h(()=>(i(s),C(A())),()=>{i(s)&&!L(A())&&p().textContent!==A()&&(p().textContent=A())}),h(()=>(i(s),C(S())),()=>{i(s)&&!L(S())&&I().textContent!==S()&&(I().textContent=S())}),he(),ge();var T=Ve();const de=X(()=>Le(t,["surface$"]));var fe=n=>{var o;i(s)&&i(s).handleKeyDown(n),(o=t.onkeydown)==null||o.call(t,n)},_e=n=>{var o;me(),(o=t.onSMUISnackbarClosed)==null||o.call(t,n)};let P;var O=K(T);const Te=X(()=>xe(t,"surface$"));var Ee=n=>{var o;le(n),(o=t.surface$onclick)==null||o.call(t,n)};let V;var pe=K(O);return Me(pe,e,"default",{},null),j(O),q(O,(n,o)=>z(n,o),re),j(T),ve(T,n=>w(g,n),()=>i(g)),q(T,(n,o)=>z(n,o),ne),Ce(()=>{P=Y(T,P,{class:H({[ae()]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":ie()==="stacked","mdc-snackbar--leading":se(),...i(d)}),...i(de),onkeydown:fe,onSMUISnackbarClosed:_e}),V=Y(O,V,{class:H({[oe()]:!0,"mdc-snackbar__surface":!0}),role:"status","aria-relevant":"additions",...i(Te),onclick:Ee})}),Ae(u,T),_(e,"open",R),_(e,"forceOpen",U),_(e,"close",F),_(e,"isOpen",B),_(e,"getLabelElement",p),_(e,"getActionButtonElement",I),_(e,"getElement",f),be({open:R,forceOpen:U,close:F,isOpen:B,getLabelElement:p,getActionButtonElement:I,getElement:f})}const Qe=Re({class:"mdc-snackbar__actions",tag:"div",props:{"aria-atomic":"true"},contexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0}});export{Qe as A,Je as S};
