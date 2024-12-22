import{a as H,t as N}from"./disclose-version.L5AxZWdJ.js";import{p as Ee,k as W,s as L,g as o,u as De,c as k,t as ae,a as Oe,h as U,e as q,r as J,d as ne}from"./runtime.W_ZEMHic.js";import{p as g,a as R,b as oe,i as ce,r as Me}from"./props.Ce4KWaWc.js";import{b as K,u as le,d as de,c as ue}from"./useActions.kHGJbmCA.js";import{o as xe}from"./index-client.CM1w6q3L.js";import{a as Pe,b as F,_ as Q,c as Ie,f as ke,M as Re,d as he}from"./dispatch.KCohpohh.js";import{e as Le,p as Ue}from"./prefixFilter.OhiPYEKz.js";import{R as Fe}from"./IconButton.TWSmi4tO.js";/**
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
 */var M;(function(r){r.PROCESSING="mdc-switch--processing",r.SELECTED="mdc-switch--selected",r.UNSELECTED="mdc-switch--unselected"})(M||(M={}));var fe;(function(r){r.RIPPLE=".mdc-switch__ripple"})(fe||(fe={}));/**
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
 */function Ge(r,e,i){var s=Te(r,e),c=s.getObservers(e);return c.push(i),function(){c.splice(c.indexOf(i),1)}}var G=new WeakMap;function Te(r,e){var i=new Map;G.has(r)||G.set(r,{isEnabled:!0,getObservers:function(a){var l=i.get(a)||[];return i.has(a)||i.set(a,l),l},installedProperties:new Set});var s=G.get(r);if(s.installedProperties.has(e))return s;var c=Ae(r,e)||{configurable:!0,enumerable:!0,value:r[e],writable:!0},u=Pe({},c),d=c.get,b=c.set;if("value"in c){delete u.value,delete u.writable;var m=c.value;d=function(){return m},c.writable&&(b=function(a){m=a})}return d&&(u.get=function(){return d.call(this)}),b&&(u.set=function(a){var l,f,w=d?d.call(this):a;if(b.call(this,a),s.isEnabled&&(!d||a!==w))try{for(var v=F(s.getObservers(e)),y=v.next();!y.done;y=v.next()){var _=y.value;_(a,w)}}catch(C){l={error:C}}finally{try{y&&!y.done&&(f=v.return)&&f.call(v)}finally{if(l)throw l.error}}}),s.installedProperties.add(e),Object.defineProperty(r,e,u),s}function Ae(r,e){for(var i=r,s;i&&(s=Object.getOwnPropertyDescriptor(i,e),!s);)i=Object.getPrototypeOf(i);return s}function je(r,e){var i=G.get(r);i&&(i.isEnabled=e)}/**
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
 */var ze=function(r){Q(e,r);function e(i){var s=r.call(this,i)||this;return s.unobserves=new Set,s}return e.prototype.destroy=function(){r.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(i,s){var c,u,d=this,b=[];try{for(var m=F(Object.keys(s)),a=m.next();!a.done;a=m.next()){var l=a.value,f=s[l].bind(this);b.push(this.observeProperty(i,l,f))}}catch(v){c={error:v}}finally{try{a&&!a.done&&(u=m.return)&&u.call(m)}finally{if(c)throw c.error}}var w=function(){var v,y;try{for(var _=F(b),C=_.next();!C.done;C=_.next()){var P=C.value;P()}}catch(S){v={error:S}}finally{try{C&&!C.done&&(y=_.return)&&y.call(_)}finally{if(v)throw v.error}}d.unobserves.delete(w)};return this.unobserves.add(w),w},e.prototype.observeProperty=function(i,s,c){return Ge(i,s,c)},e.prototype.setObserversEnabled=function(i,s){je(i,s)},e.prototype.unobserve=function(){var i,s;try{for(var c=F(Ie([],ke(this.unobserves))),u=c.next();!u.done;u=c.next()){var d=u.value;d()}}catch(b){i={error:b}}finally{try{u&&!u.done&&(s=c.return)&&s.call(c)}finally{if(i)throw i.error}}},e}(Re);/**
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
 */var Be=function(r){Q(e,r);function e(i){var s=r.call(this,i)||this;return s.handleClick=s.handleClick.bind(s),s}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(ze),He=function(r){Q(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.init=function(){r.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(M.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(M.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,M.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,M.SELECTED),this.toggleClass(!this.adapter.state.selected,M.UNSELECTED)},e.prototype.toggleClass=function(i,s){i?this.adapter.addClass(s):this.adapter.removeClass(s)},e}(Be),We=N('<div><svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24"><path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path></svg> <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24"><path d="M20 13H4v-2h16v2z"></path></svg></div>'),qe=N('<div class="mdc-switch__focus-ring-wrapper"><div class="mdc-switch__focus-ring"></div></div>'),Je=N('<button><div class="mdc-switch__track"></div> <div class="mdc-switch__handle-track"><div class="mdc-switch__handle"><div class="mdc-switch__shadow"><div class="mdc-elevation-overlay"></div></div> <div class="mdc-switch__ripple"></div> <!></div></div> <!></button>');function et(r,e){Ee(e,!0);let i=()=>{};function s(t){return t===i}let c=g(e,"use",19,()=>[]),u=g(e,"class",3,""),d=g(e,"disabled",15,!1),b=g(e,"focusRing",3,!1),m=g(e,"color",3,"primary"),a=g(e,"group",11,i),l=g(e,"checked",15,i),f=g(e,"value",3,null),w=g(e,"processing",7,!1),v=g(e,"icons",3,!0),y=g(e,"icons$use",19,()=>[]),_=g(e,"icons$class",3,""),C=Me(e,["$$slots","$$events","$$legacy","use","class","disabled","focusRing","color","group","checked","value","processing","icons","icons$use","icons$class"]),P,S=L(void 0),E=R({}),T=L(void 0),A=L(!1),j=R(W("SMUI:generic:input:props")??{}),h=L(R(s(a())?s(l())?!1:l():a().findIndex(t=>t===f())!==-1)),I={get disabled(){return d()},set disabled(t){d(t)},get processing(){return w()},set processing(t){w(t)},get selected(){return o(h)},set selected(t){k(h,R(t))}},X=l(),Y=s(a())?[]:[...a()],z=o(h);De(()=>{let t=!1;if(!s(a()))if(z!==o(h)){const n=a().findIndex(p=>p===f());o(h)&&n===-1?a().push(f()):!o(h)&&n!==-1&&a().splice(n,1),t=!0}else{const n=Y.findIndex(x=>x===f()),p=a().findIndex(x=>x===f());n>-1&&p===-1?I.selected=!1:p>-1&&n===-1&&(I.selected=!0)}s(l())?z!==o(h)&&(t=!0):l()!==o(h)&&(l()===X?(l(o(h)),t=!0):I.selected=l()),X=l(),Y=s(a())?[]:[...a()],z=o(h),t&&D()&&he(D(),"SMUISwitchChange",{selected:o(h),value:f()})});const Z=W("SMUI:generic:input:mount"),V=W("SMUI:generic:input:unmount");xe(()=>{k(S,R(new He({addClass:$,hasClass:ve,isDisabled:()=>d(),removeClass:ee,setAriaChecked:()=>{},setDisabled:n=>{d(n)},state:I})));const t={get element(){return D()},get checked(){return o(h)},set checked(n){o(h)!==n&&(I.selected=n,D()&&he(D(),"SMUISwitchChange",{selected:n,value:f()}))},activateRipple(){d()||k(A,!0)},deactivateRipple(){k(A,!1)}};return Z&&Z(t),o(S).init(),o(S).initFromDOM(),()=>{var n;V&&V(t),(n=o(S))==null||n.destroy()}});function ve(t){return t in E?E[t]:D().classList.contains(t)}function $(t){E[t]||(E[t]=!0)}function ee(t){(!(t in E)||E[t])&&(E[t]=!1)}function pe(){return j&&j.id}function D(){return P}var O=Je();const ge=ne(()=>Le(C,["icons$"]));var be=t=>{var n;o(S)&&o(S).handleClick(),(n=e.onclick)==null||n.call(e,t)};let te;var B=U(q(O),2),se=q(B),ie=U(q(se),2);oe(ie,t=>k(T,t),()=>o(T));var me=U(ie,2);{var we=t=>{var n=We();const p=ne(()=>Ue(C,"icons$"));let x;K(n,(_e,Se)=>{var re;return(re=le)==null?void 0:re(_e,Se)},y),ae(()=>x=de(n,x,{class:ue({[_()]:!0,"mdc-switch__icons":!0}),...o(p)})),H(t,n)};ce(me,t=>{v()&&t(we)})}J(se),J(B);var ye=U(B,2);{var Ce=t=>{var n=qe();H(t,n)};ce(ye,t=>{b()&&t(Ce)})}return J(O),oe(O,t=>P=t,()=>P),K(O,(t,n)=>{var p;return(p=le)==null?void 0:p(t,n)},c),K(O,(t,n)=>{var p;return(p=Fe)==null?void 0:p(t,n)},()=>({unbounded:!0,color:m(),active:o(A),rippleElement:o(T),disabled:d(),addClass:$,removeClass:ee})),ae(()=>te=de(O,te,{class:ue({[u()]:!0,"mdc-switch":!0,"mdc-switch--unselected":!o(h),"mdc-switch--selected":o(h),"mdc-switch--processing":w(),"smui-switch--color-secondary":m()==="secondary",...E}),type:"button",role:"switch","aria-checked":o(h)?"true":"false",disabled:d(),...j,...o(ge),onclick:be})),H(r,O),Oe({getId:pe,getElement:D})}export{et as S};
