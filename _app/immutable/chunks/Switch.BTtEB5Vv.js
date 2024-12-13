import{a as H,t as N}from"./disclose-version.B3RRTx8Z.js";import{p as Ce,k as W,b as L,g as o,u as _e,h as k,t as re,a as Se,s as U,c as q,r as J,d as ae}from"./runtime.DwlehcF5.js";import{p,a as R,o as Ee,b as ne,i as oe,r as De}from"./index-client.BDIqpeZ8.js";import{b as K,u as ce,d as le,c as de}from"./useActions.dWwaU660.js";import{a as Oe,b as F,_ as Q,c as Me,f as xe,M as Pe,d as ue}from"./dispatch.CwJSP0lB.js";import{e as Ie,p as ke}from"./prefixFilter.OhiPYEKz.js";import{R as Re}from"./IconButton.CkPA9NQ0.js";/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var O;(function(r){r.PROCESSING="mdc-switch--processing",r.SELECTED="mdc-switch--selected",r.UNSELECTED="mdc-switch--unselected"})(O||(O={}));var he;(function(r){r.RIPPLE=".mdc-switch__ripple"})(he||(he={}));/**
 * @license
 * Copyright 2021 Google Inc.
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
 */function Le(r,e,i){var s=Ue(r,e),c=s.getObservers(e);return c.push(i),function(){c.splice(c.indexOf(i),1)}}var G=new WeakMap;function Ue(r,e){var i=new Map;G.has(r)||G.set(r,{isEnabled:!0,getObservers:function(a){var l=i.get(a)||[];return i.has(a)||i.set(a,l),l},installedProperties:new Set});var s=G.get(r);if(s.installedProperties.has(e))return s;var c=Fe(r,e)||{configurable:!0,enumerable:!0,value:r[e],writable:!0},u=Oe({},c),d=c.get,g=c.set;if("value"in c){delete u.value,delete u.writable;var b=c.value;d=function(){return b},c.writable&&(g=function(a){b=a})}return d&&(u.get=function(){return d.call(this)}),g&&(u.set=function(a){var l,f,m=d?d.call(this):a;if(g.call(this,a),s.isEnabled&&(!d||a!==m))try{for(var v=F(s.getObservers(e)),w=v.next();!w.done;w=v.next()){var C=w.value;C(a,m)}}catch(y){l={error:y}}finally{try{w&&!w.done&&(f=v.return)&&f.call(v)}finally{if(l)throw l.error}}}),s.installedProperties.add(e),Object.defineProperty(r,e,u),s}function Fe(r,e){for(var i=r,s;i&&(s=Object.getOwnPropertyDescriptor(i,e),!s);)i=Object.getPrototypeOf(i);return s}function Ge(r,e){var i=G.get(r);i&&(i.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var Te=function(r){Q(e,r);function e(i){var s=r.call(this,i)||this;return s.unobserves=new Set,s}return e.prototype.destroy=function(){r.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(i,s){var c,u,d=this,g=[];try{for(var b=F(Object.keys(s)),a=b.next();!a.done;a=b.next()){var l=a.value,f=s[l].bind(this);g.push(this.observeProperty(i,l,f))}}catch(v){c={error:v}}finally{try{a&&!a.done&&(u=b.return)&&u.call(b)}finally{if(c)throw c.error}}var m=function(){var v,w;try{for(var C=F(g),y=C.next();!y.done;y=C.next()){var P=y.value;P()}}catch(_){v={error:_}}finally{try{y&&!y.done&&(w=C.return)&&w.call(C)}finally{if(v)throw v.error}}d.unobserves.delete(m)};return this.unobserves.add(m),m},e.prototype.observeProperty=function(i,s,c){return Le(i,s,c)},e.prototype.setObserversEnabled=function(i,s){Ge(i,s)},e.prototype.unobserve=function(){var i,s;try{for(var c=F(Me([],xe(this.unobserves))),u=c.next();!u.done;u=c.next()){var d=u.value;d()}}catch(g){i={error:g}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(i)throw i.error}}},e}(Pe);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var Ae=function(r){Q(e,r);function e(i){var s=r.call(this,i)||this;return s.handleClick=s.handleClick.bind(s),s}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(Te),je=function(r){Q(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.init=function(){r.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(O.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(O.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,O.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,O.SELECTED),this.toggleClass(!this.adapter.state.selected,O.UNSELECTED)},e.prototype.toggleClass=function(i,s){i?this.adapter.addClass(s):this.adapter.removeClass(s)},e}(Ae),ze=N('<div><svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24"><path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path></svg> <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24"><path d="M20 13H4v-2h16v2z"></path></svg></div>'),Be=N('<div class="mdc-switch__focus-ring-wrapper"><div class="mdc-switch__focus-ring"></div></div>'),He=N('<button><div class="mdc-switch__track"></div> <div class="mdc-switch__handle-track"><div class="mdc-switch__handle"><div class="mdc-switch__shadow"><div class="mdc-elevation-overlay"></div></div> <div class="mdc-switch__ripple"></div> <!></div></div> <!></button>');function Ye(r,e){Ce(e,!0);let i=()=>{};function s(t){return t===i}let c=p(e,"use",19,()=>[]),u=p(e,"class",3,""),d=p(e,"disabled",15,!1),g=p(e,"focusRing",3,!1),b=p(e,"color",3,"primary"),a=p(e,"group",11,i),l=p(e,"checked",15,i),f=p(e,"value",3,null),m=p(e,"processing",7,!1),v=p(e,"icons",3,!0),w=p(e,"icons$use",19,()=>[]),C=p(e,"icons$class",3,""),y=De(e,["$$slots","$$events","$$legacy","use","class","disabled","focusRing","color","group","checked","value","processing","icons","icons$use","icons$class"]),P,_=L(void 0),S=R({}),T=L(void 0),A=L(!1),j=R(W("SMUI:generic:input:props")??{}),h=L(R(s(a())?s(l())?!1:l():a().findIndex(t=>t===f())!==-1)),I={get disabled(){return d()},set disabled(t){d(t)},get processing(){return m()},set processing(t){m(t)},get selected(){return o(h)},set selected(t){k(h,R(t))}},X=l(),Y=s(a())?[]:[...a()],z=o(h);_e(()=>{let t=!1;if(!s(a()))if(z!==o(h)){const n=a().findIndex(M=>M===f());o(h)&&n===-1?a().push(f()):!o(h)&&n!==-1&&a().splice(n,1),t=!0}else{const n=Y.findIndex(x=>x===f()),M=a().findIndex(x=>x===f());n>-1&&M===-1?I.selected=!1:M>-1&&n===-1&&(I.selected=!0)}s(l())?z!==o(h)&&(t=!0):l()!==o(h)&&(l()===X?(l(o(h)),t=!0):I.selected=l()),X=l(),Y=s(a())?[]:[...a()],z=o(h),t&&E()&&ue(E(),"SMUISwitchChange",{selected:o(h),value:f()})});const Z=W("SMUI:generic:input:mount"),V=W("SMUI:generic:input:unmount");Ee(()=>{k(_,R(new je({addClass:$,hasClass:fe,isDisabled:()=>d(),removeClass:ee,setAriaChecked:()=>{},setDisabled:n=>{d(n)},state:I})));const t={get element(){return E()},get checked(){return o(h)},set checked(n){o(h)!==n&&(I.selected=n,E()&&ue(E(),"SMUISwitchChange",{selected:n,value:f()}))},activateRipple(){d()||k(A,!0)},deactivateRipple(){k(A,!1)}};return Z&&Z(t),o(_).init(),o(_).initFromDOM(),()=>{var n;V&&V(t),(n=o(_))==null||n.destroy()}});function fe(t){return t in S?S[t]:E().classList.contains(t)}function $(t){S[t]||(S[t]=!0)}function ee(t){(!(t in S)||S[t])&&(S[t]=!1)}function ve(){return j&&j.id}function E(){return P}var D=He();const pe=ae(()=>Ie(y,["icons$"]));var ge=t=>{var n;o(_)&&o(_).handleClick(),(n=e.onclick)==null||n.call(e,t)};let te;var B=U(q(D),2),se=q(B),ie=U(q(se),2);ne(ie,t=>k(T,t),()=>o(T));var be=U(ie,2);oe(be,v,t=>{var n=ze();const M=ae(()=>ke(y,"icons$"));let x;K(n,(we,ye)=>ce(we,ye),w),re(()=>x=le(n,x,{class:de({[C()]:!0,"mdc-switch__icons":!0}),...o(M)})),H(t,n)}),J(se),J(B);var me=U(B,2);return oe(me,g,t=>{var n=Be();H(t,n)}),J(D),ne(D,t=>P=t,()=>P),K(D,(t,n)=>ce(t,n),c),K(D,(t,n)=>Re(t,n),()=>({unbounded:!0,color:b(),active:o(A),rippleElement:o(T),disabled:d(),addClass:$,removeClass:ee})),re(()=>te=le(D,te,{class:de({[u()]:!0,"mdc-switch":!0,"mdc-switch--unselected":!o(h),"mdc-switch--selected":o(h),"mdc-switch--processing":m(),"smui-switch--color-secondary":b()==="secondary",...S}),type:"button",role:"switch","aria-checked":o(h)?"true":"false",disabled:d(),...j,...o(pe),onclick:ge})),H(r,D),Se({getId:ve,getElement:E})}export{Ye as S};
