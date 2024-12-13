import{c as Ct,a as j,t as nt}from"./disclose-version.B3RRTx8Z.js";import{k as V,p as St,b as K,u as q,e as _t,f as Q,a as Rt,s as N,n as Dt,g as h,d as x,h as Y}from"./runtime.DwlehcF5.js";import{p as _,a as B,d as wt,b as Ft,s as Mt,i as Lt,r as Ht}from"./index-client.BDIqpeZ8.js";import{s as xt,c as It}from"./useActions.dWwaU660.js";import{c as Bt}from"./svelte-component.D6MkyJ-E.js";import{_ as rt,a as O,b as U,M as st,p as Ot,d as $}from"./dispatch.CwJSP0lB.js";import{o as Ut}from"./store.wXOX-S52.js";import{S as zt}from"./SmuiElement.BnumFtpb.js";/**
 * @license
 * Copyright 2019 Google Inc.
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
 */function Gt(s){return s===void 0&&(s=window),kt(s)?{passive:!0}:!1}function kt(s){s===void 0&&(s=window);var t=!1;try{var e={get passive(){return t=!0,!1}},a=function(){};s.document.addEventListener("test",a,e),s.document.removeEventListener("test",a,e)}catch{t=!1}return t}const Pt=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Gt},Symbol.toStringTag,{value:"Module"}));/**
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
 */var Xt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},jt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},tt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},z;function qt(s,t){t===void 0&&(t=!1);var e=s.CSS,a=z;if(typeof z=="boolean"&&!t)return z;var i=e&&typeof e.supports=="function";if(!i)return!1;var n=e.supports("--css-vars","yes"),r=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return a=n||r,t||(z=a),a}function Vt(s,t,e){if(!s)return{x:0,y:0};var a=t.x,i=t.y,n=a+e.left,r=i+e.top,c,u;if(s.type==="touchstart"){var f=s;c=f.changedTouches[0].pageX-n,u=f.changedTouches[0].pageY-r}else{var y=s;c=y.pageX-n,u=y.pageY-r}return{x:c,y:u}}/**
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
 */var et=["touchstart","pointerdown","mousedown","keydown"],at=["touchend","pointerup","mouseup","contextmenu"],G=[],Tt=function(s){rt(t,s);function t(e){var a=s.call(this,O(O({},t.defaultAdapter),e))||this;return a.activationAnimationHasEnded=!1,a.activationTimer=0,a.fgDeactivationRemovalTimer=0,a.fgScale="0",a.frame={width:0,height:0},a.initialSize=0,a.layoutFrame=0,a.maxRadius=0,a.unboundedCoords={left:0,top:0},a.activationState=a.defaultActivationState(),a.activationTimerCallback=function(){a.activationAnimationHasEnded=!0,a.runDeactivationUXLogicIfReady()},a.activateHandler=function(i){a.activateImpl(i)},a.deactivateHandler=function(){a.deactivateImpl()},a.focusHandler=function(){a.handleFocus()},a.blurHandler=function(){a.handleBlur()},a.resizeHandler=function(){a.layout()},a}return Object.defineProperty(t,"cssClasses",{get:function(){return Xt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return jt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return tt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,a=this.supportsPressRipple();if(this.registerRootHandlers(a),a){var i=t.cssClasses,n=i.ROOT,r=i.UNBOUNDED;requestAnimationFrame(function(){e.adapter.addClass(n),e.adapter.isUnbounded()&&(e.adapter.addClass(r),e.layoutInternal())})}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var a=t.cssClasses,i=a.ROOT,n=a.UNBOUNDED;requestAnimationFrame(function(){e.adapter.removeClass(i),e.adapter.removeClass(n),e.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){e.layoutInternal(),e.layoutFrame=0})},t.prototype.setUnbounded=function(e){var a=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(a):this.adapter.removeClass(a)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame(function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)})},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame(function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)})},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var a,i;if(e){try{for(var n=U(et),r=n.next();!r.done;r=n.next()){var c=r.value;this.adapter.registerInteractionHandler(c,this.activateHandler)}}catch(u){a={error:u}}finally{try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var a,i;if(e.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var n=U(at),r=n.next();!r.done;r=n.next()){var c=r.value;this.adapter.registerDocumentInteractionHandler(c,this.deactivateHandler)}}catch(u){a={error:u}}finally{try{r&&!r.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}},t.prototype.deregisterRootHandlers=function(){var e,a;try{for(var i=U(et),n=i.next();!n.done;n=i.next()){var r=n.value;this.adapter.deregisterInteractionHandler(r,this.activateHandler)}}catch(c){e={error:c}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,a;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=U(at),n=i.next();!n.done;n=i.next()){var r=n.value;this.adapter.deregisterDocumentInteractionHandler(r,this.deactivateHandler)}}catch(c){e={error:c}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,a=t.strings,i=Object.keys(a);i.forEach(function(n){n.indexOf("VAR_")===0&&e.adapter.updateCssVariable(a[n],null)})},t.prototype.activateImpl=function(e){var a=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var n=this.previousActivationEvent,r=n&&e!==void 0&&n.type!==e.type;if(!r){i.isActivated=!0,i.isProgrammatic=e===void 0,i.activationEvent=e,i.wasActivatedByPointer=i.isProgrammatic?!1:e!==void 0&&(e.type==="mousedown"||e.type==="touchstart"||e.type==="pointerdown");var c=e!==void 0&&G.length>0&&G.some(function(u){return a.adapter.containsEventTarget(u)});if(c){this.resetActivationState();return}e!==void 0&&(G.push(e.target),this.registerDeactivationHandlers(e)),i.wasElementMadeActive=this.checkElementMadeActive(e),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){G=[],!i.wasElementMadeActive&&e!==void 0&&(e.key===" "||e.keyCode===32)&&(i.wasElementMadeActive=a.checkElementMadeActive(e),i.wasElementMadeActive&&a.animateActivation()),i.wasElementMadeActive||(a.activationState=a.defaultActivationState())})}}}},t.prototype.checkElementMadeActive=function(e){return e!==void 0&&e.type==="keydown"?this.adapter.isSurfaceActive():!0},t.prototype.animateActivation=function(){var e=this,a=t.strings,i=a.VAR_FG_TRANSLATE_START,n=a.VAR_FG_TRANSLATE_END,r=t.cssClasses,c=r.FG_DEACTIVATION,u=r.FG_ACTIVATION,f=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var y="",v="";if(!this.adapter.isUnbounded()){var R=this.getFgTranslationCoordinates(),F=R.startPoint,d=R.endPoint;y=F.x+"px, "+F.y+"px",v=d.x+"px, "+d.y+"px"}this.adapter.updateCssVariable(i,y),this.adapter.updateCssVariable(n,v),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(c),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){e.activationTimerCallback()},f)},t.prototype.getFgTranslationCoordinates=function(){var e=this.activationState,a=e.activationEvent,i=e.wasActivatedByPointer,n;i?n=Vt(a,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):n={x:this.frame.width/2,y:this.frame.height/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2};var r={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:n,endPoint:r}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,a=t.cssClasses.FG_DEACTIVATION,i=this.activationState,n=i.hasDeactivationUXRun,r=i.isActivated,c=n||!r;c&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(a),this.fgDeactivationRemovalTimer=setTimeout(function(){e.adapter.removeClass(a)},tt.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return e.previousActivationEvent=void 0},t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,a=this.activationState;if(a.isActivated){var i=O({},a);a.isProgrammatic?(requestAnimationFrame(function(){e.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(i),e.resetActivationState()}))}},t.prototype.animateDeactivation=function(e){var a=e.wasActivatedByPointer,i=e.wasElementMadeActive;(a||i)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var a=Math.max(this.frame.height,this.frame.width),i=function(){var r=Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2));return r+t.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?a:i();var n=Math.floor(a*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!==0?this.initialSize=n-1:this.initialSize=n,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,a=e.VAR_FG_SIZE,i=e.VAR_LEFT,n=e.VAR_TOP,r=e.VAR_FG_SCALE;this.adapter.updateCssVariable(a,this.initialSize+"px"),this.adapter.updateCssVariable(r,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},t}(st);class Et{constructor(){this.elementMap=new Map}on(t,e,a,i){this.elementMap.has(t)||this.elementMap.set(t,{});const n=this.elementMap.get(t);if(n==null)throw new Error("Event map couldn't be created.");e in n||(n[e]=new Map),n[e].set(a,Ut(t,e,a,i))}off(t,e,a){const i=this.elementMap.get(t);if(i==null||!(e in i))return;const n=i[e],r=n.get(a);r!=null&&(r(),n.delete(a),n.size===0&&(delete i[e],Object.keys(i).length===0&&this.elementMap.delete(t)))}clear(){this.elementMap.forEach((t,e)=>{for(let[a,i]of Object.entries(t))i.forEach((n,r)=>{n()})}),this.elementMap.clear()}}/**
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
 */var k={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},w={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
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
 */var Wt=function(s){rt(t,s);function t(e){var a=s.call(this,O(O({},t.defaultAdapter),e))||this;return a.hasToggledAriaLabel=!1,a}return Object.defineProperty(t,"cssClasses",{get:function(){return k},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this.adapter.getAttr(w.DATA_ARIA_LABEL_ON),a=this.adapter.getAttr(w.DATA_ARIA_LABEL_OFF);if(e&&a){if(this.adapter.getAttr(w.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(w.ARIA_PRESSED,String(this.isOn()))},t.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},t.prototype.isOn=function(){return this.adapter.hasClass(k.ICON_BUTTON_ON)},t.prototype.toggle=function(e){if(e===void 0&&(e=!this.isOn()),e?this.adapter.addClass(k.ICON_BUTTON_ON):this.adapter.removeClass(k.ICON_BUTTON_ON),this.hasToggledAriaLabel){var a=e?this.adapter.getAttr(w.DATA_ARIA_LABEL_ON):this.adapter.getAttr(w.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(w.ARIA_LABEL,a||"")}else this.adapter.setAttr(w.ARIA_PRESSED,""+e)},t}(st);const{applyPassive:it}=Pt,{matches:Zt}=Ot;function Jt(s,{ripple:t=!0,surface:e=!1,unbounded:a=!1,disabled:i=!1,color:n,active:r,rippleElement:c,eventTarget:u,activeTarget:f,addClass:y=d=>s.classList.add(d),removeClass:v=d=>s.classList.remove(d),addStyle:R=(d,C)=>s.style.setProperty(d,C),initPromise:F=Promise.resolve()}={}){let d,C=new Et,M=V("SMUI:addLayoutListener"),m,A=r,L=u,D=f;function g(){e?(y("mdc-ripple-surface"),n==="primary"?(y("smui-ripple-surface--primary"),v("smui-ripple-surface--secondary")):n==="secondary"?(v("smui-ripple-surface--primary"),y("smui-ripple-surface--secondary")):(v("smui-ripple-surface--primary"),v("smui-ripple-surface--secondary"))):(v("mdc-ripple-surface"),v("smui-ripple-surface--primary"),v("smui-ripple-surface--secondary")),d&&A!==r&&(A=r,r?d.activate():r===!1&&d.deactivate()),t&&!d?(d=new Tt({addClass:y,browserSupportsCssVars:()=>qt(window),computeBoundingRect:()=>(c||s).getBoundingClientRect(),containsEventTarget:l=>s.contains(l),deregisterDocumentInteractionHandler:(l,p)=>C.off(document.documentElement,l,p),deregisterInteractionHandler:(l,p)=>C.off(u||s,l,p),deregisterResizeHandler:l=>window.removeEventListener("resize",l),getWindowPageOffset:()=>{var l,p;return{x:(l=window.pageXOffset)!==null&&l!==void 0?l:window.scrollX,y:(p=window.pageYOffset)!==null&&p!==void 0?p:window.scrollY}},isSurfaceActive:()=>r??Zt(f||s,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!a,registerDocumentInteractionHandler:(l,p)=>{const b=it();C.on(document.documentElement,l,p,typeof b=="boolean"?{capture:b}:b)},registerInteractionHandler:(l,p)=>{const b=it();C.on(u||s,l,p,typeof b=="boolean"?{capture:b}:b)},registerResizeHandler:l=>C.on(window,"resize",l),removeClass:v,updateCssVariable:R}),F.then(()=>{d&&(d.init(),d.setUnbounded(a))})):d&&!t&&F.then(()=>{d&&(d.destroy(),d=void 0,C.clear())}),d&&(L!==u||D!==f)&&(L=u,D=f,d.destroy(),requestAnimationFrame(()=>{d&&(d.init(),d.setUnbounded(a))})),!t&&a&&y("mdc-ripple-upgraded--unbounded")}g(),M&&(m=M(P));function P(){d&&d.layout()}return{update(l){({ripple:t,surface:e,unbounded:a,disabled:i,color:n,active:r,rippleElement:c,eventTarget:u,activeTarget:f,addClass:y,removeClass:v,addStyle:R,initPromise:F}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:p=>s.classList.add(p),removeClass:p=>s.classList.remove(p),addStyle:(p,b)=>s.style.setProperty(p,b),initPromise:Promise.resolve()},l)),g()},destroy(){d&&(d.destroy(),d=void 0,C.clear(),v("mdc-ripple-surface"),v("smui-ripple-surface--primary"),v("smui-ripple-surface--secondary")),m&&m()}}}var Kt=nt('<div class="mdc-icon-button__touch"></div>'),Qt=nt('<div class="mdc-icon-button__ripple"></div> <!><!>',1);function re(s,t){St(t,!0);let e=()=>{};function a(o){return o===e}let i=_(t,"use",19,()=>[]),n=_(t,"class",3,""),r=_(t,"style",3,""),c=_(t,"ripple",3,!0),u=_(t,"toggle",3,!1),f=_(t,"pressed",15,e),y=_(t,"touch",3,!1),v=_(t,"displayFlex",3,!0),R=_(t,"size",3,"normal"),F=_(t,"component",3,zt),d=_(t,"tag",19,()=>t.href==null?"button":"a"),C=Ht(t,["$$slots","$$events","$$legacy","use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","tag","children"]),M,m,A=K(B({})),L=B({}),D=K(B({})),g=V("SMUI:icon-button:context"),P=V("SMUI:icon-button:aria-describedby");const l=x(()=>{if(g==="data-table:pagination")switch(t.action){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return g==="dialog:header"||g==="dialog:sheet"?{"data-mdc-dialog-action":t.action}:{action:t.action}});let p=!!t.disabled;q(()=>{if(p!=!!t.disabled){if(M){const o=H();"blur"in o&&o.blur()}p=!!t.disabled}}),_t("SMUI:icon:context","icon-button");let b=null;q(()=>{M&&H()&&u()!==b&&(u()&&!m?(m=new Wt({addClass:T,hasClass:ot,notifyChange:o=>{lt(o),$(H(),"SMUIIconButtonToggleChange",o)},removeClass:E,getAttr:ut,setAttr:ct}),m.init()):!u()&&m&&(m.destroy(),m=void 0,Y(A,B({})),Y(D,B({}))),b=u())}),q(()=>{m&&!a(f())&&m.isOn()!==f()&&m.toggle(f())}),wt(()=>{m&&m.destroy()});function ot(o){return o in h(A)?h(A)[o]:H().classList.contains(o)}function T(o){h(A)[o]||(h(A)[o]=!0)}function E(o){(!(o in h(A))||h(A)[o])&&(h(A)[o]=!1)}function dt(o,S){L[o]!=S&&(S===""||S==null?delete L[o]:L[o]=S)}function ut(o){return o in h(D)?h(D)[o]??null:H().getAttribute(o)}function ct(o,S){h(D)[o]!==S&&(h(D)[o]=S)}function lt(o){f(o.isOn)}function H(){return M.getElement()}var W=Ct(),ft=Q(W),pt=x(()=>[[Jt,{ripple:c(),unbounded:!0,color:t.color,disabled:!!t.disabled,addClass:T,removeClass:E,addStyle:dt}],...i()]),ht=x(()=>It({[n()]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!a(f())&&f(),"mdc-icon-button--touch":y(),"mdc-icon-button--display-flex":v(),"smui-icon-button--size-button":R()==="button","smui-icon-button--size-mini":R()==="mini","mdc-icon-button--reduced-size":R()==="mini"||R()==="button","mdc-card__action":g==="card:action","mdc-card__action--icon":g==="card:action","mdc-top-app-bar__navigation-icon":g==="top-app-bar:navigation","mdc-top-app-bar__action-item":g==="top-app-bar:action","mdc-snackbar__dismiss":g==="snackbar:actions","mdc-data-table__pagination-button":g==="data-table:pagination","mdc-data-table__sort-icon-button":g==="data-table:sortable-header-cell","mdc-dialog__close":(g==="dialog:header"||g==="dialog:sheet")&&t.action==="close",...h(A)})),vt=x(()=>Object.entries(L).map(([o,S])=>`${o}: ${S};`).concat([r()]).join(" ")),mt=x(()=>a(f())?null:f()?"true":"false"),gt=x(()=>f()?t.ariaLabelOn:t.ariaLabelOff);return Bt(ft,F,(o,S)=>{Ft(S(o,Mt({get tag(){return d()},get use(){return h(pt)},get class(){return h(ht)},get style(){return h(vt)},get"aria-pressed"(){return h(mt)},get"aria-label"(){return h(gt)},get"data-aria-label-on"(){return t.ariaLabelOn},get"data-aria-label-off"(){return t.ariaLabelOff},"aria-describedby":P,get href(){return t.href}},()=>h(l),()=>h(D),()=>C,{onclick:I=>{var X;m&&m.handleClick(),g==="top-app-bar:navigation"&&$(H(),"SMUITopAppBarIconButtonNav"),(X=t.onclick)==null||X.call(t,I)},children:(I,X)=>{var Z=Qt(),J=N(Q(Z),2);xt(J,()=>t.children??Dt);var yt=N(J);Lt(yt,y,At=>{var bt=Kt();j(At,bt)}),j(I,Z)},$$slots:{default:!0}})),I=>M=I,()=>M)}),j(s,W),Rt({getElement:H})}export{re as I,Tt as M,Jt as R,Et as S,Gt as a,Pt as e,qt as s};
