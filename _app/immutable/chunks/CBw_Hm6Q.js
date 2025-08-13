import"./Bzak7iHL.js";import{b as me}from"./Bu45w55_.js";import{p as we,a as B,v as H,s as R,g as c,u as ye,j as N,l as L,b as W,d as Ce,h as k,k as q,r as J}from"./BwguTo01.js";import{p as g,b as re,i as ae,r as Se}from"./CMyoTnZX.js";import{a as ne,c as oe,b as K,u as ce}from"./DBhbQkAD.js";import{a as _e,b as U,_ as Q,c as Ee,f as De,M as Oe,d as le}from"./qG3zDIF3.js";import{e as Me,p as xe}from"./OhiPYEKz.js";import{R as Pe}from"./D3YavpxM.js";/**
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
 */var x;(function(r){r.PROCESSING="mdc-switch--processing",r.SELECTED="mdc-switch--selected",r.UNSELECTED="mdc-switch--unselected"})(x||(x={}));var de;(function(r){r.RIPPLE=".mdc-switch__ripple"})(de||(de={}));/**
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
 */function Ie(r,e,i){var s=ke(r,e),o=s.getObservers(e);return o.push(i),function(){o.splice(o.indexOf(i),1)}}var F=new WeakMap;function ke(r,e){var i=new Map;F.has(r)||F.set(r,{isEnabled:!0,getObservers:function(n){var l=i.get(n)||[];return i.has(n)||i.set(n,l),l},installedProperties:new Set});var s=F.get(r);if(s.installedProperties.has(e))return s;var o=Re(r,e)||{configurable:!0,enumerable:!0,value:r[e],writable:!0},u=_e({},o),d=o.get,b=o.set;if("value"in o){delete u.value,delete u.writable;var m=o.value;d=function(){return m},o.writable&&(b=function(n){m=n})}return d&&(u.get=function(){return d.call(this)}),b&&(u.set=function(n){var l,f,w=d?d.call(this):n;if(b.call(this,n),s.isEnabled&&(!d||n!==w))try{for(var p=U(s.getObservers(e)),y=p.next();!y.done;y=p.next()){var S=y.value;S(n,w)}}catch(C){l={error:C}}finally{try{y&&!y.done&&(f=p.return)&&f.call(p)}finally{if(l)throw l.error}}}),s.installedProperties.add(e),Object.defineProperty(r,e,u),s}function Re(r,e){for(var i=r,s;i&&(s=Object.getOwnPropertyDescriptor(i,e),!s);)i=Object.getPrototypeOf(i);return s}function Le(r,e){var i=F.get(r);i&&(i.isEnabled=e)}/**
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
 */var Ue=(function(r){Q(e,r);function e(i){var s=r.call(this,i)||this;return s.unobserves=new Set,s}return e.prototype.destroy=function(){r.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(i,s){var o,u,d=this,b=[];try{for(var m=U(Object.keys(s)),n=m.next();!n.done;n=m.next()){var l=n.value,f=s[l].bind(this);b.push(this.observeProperty(i,l,f))}}catch(p){o={error:p}}finally{try{n&&!n.done&&(u=m.return)&&u.call(m)}finally{if(o)throw o.error}}var w=function(){var p,y;try{for(var S=U(b),C=S.next();!C.done;C=S.next()){var P=C.value;P()}}catch(_){p={error:_}}finally{try{C&&!C.done&&(y=S.return)&&y.call(S)}finally{if(p)throw p.error}}d.unobserves.delete(w)};return this.unobserves.add(w),w},e.prototype.observeProperty=function(i,s,o){return Ie(i,s,o)},e.prototype.setObserversEnabled=function(i,s){Le(i,s)},e.prototype.unobserve=function(){var i,s;try{for(var o=U(Ee([],De(this.unobserves))),u=o.next();!u.done;u=o.next()){var d=u.value;d()}}catch(b){i={error:b}}finally{try{u&&!u.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}},e})(Oe);/**
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
 */var Fe=(function(r){Q(e,r);function e(i){var s=r.call(this,i)||this;return s.handleClick=s.handleClick.bind(s),s}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e})(Ue),Ge=(function(r){Q(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.init=function(){r.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(x.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(x.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,x.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,x.SELECTED),this.toggleClass(!this.adapter.state.selected,x.UNSELECTED)},e.prototype.toggleClass=function(i,s){i?this.adapter.addClass(s):this.adapter.removeClass(s)},e})(Fe),Te=N('<div><svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24"><path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path></svg> <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24"><path d="M20 13H4v-2h16v2z"></path></svg></div>'),je=N('<div class="mdc-switch__focus-ring-wrapper"><div class="mdc-switch__focus-ring"></div></div>'),Ae=N('<button><div class="mdc-switch__track"></div> <div class="mdc-switch__handle-track"><div class="mdc-switch__handle"><div class="mdc-switch__shadow"><div class="mdc-elevation-overlay"></div></div> <div class="mdc-switch__ripple"></div> <!></div></div> <!></button>');function Qe(r,e){we(e,!0);let i=()=>{};function s(t){return t===i}let o=g(e,"use",19,()=>[]),u=g(e,"class",3,""),d=g(e,"disabled",15,!1),b=g(e,"focusRing",3,!1),m=g(e,"color",3,"primary"),n=g(e,"group",11,i),l=g(e,"checked",15,i),f=g(e,"value",3,null),w=g(e,"processing",7,!1),p=g(e,"icons",3,!0),y=g(e,"icons$use",19,()=>[]),S=g(e,"icons$class",3,""),C=Se(e,["$$slots","$$events","$$legacy","use","class","disabled","focusRing","color","group","checked","value","processing","icons","icons$use","icons$class"]),P,_=R(void 0),E=B({}),G=R(void 0),T=R(!1),j=B(H("SMUI:generic:input:props")??{}),h=R(B(s(n())?s(l())?!1:l():n().findIndex(t=>t===f())!==-1)),I={get disabled(){return d()},set disabled(t){d(t)},get processing(){return w()},set processing(t){w(t)},get selected(){return c(h)},set selected(t){k(h,t,!0)}},X=l(),Y=s(n())?[]:[...n()],A=c(h);ye(()=>{let t=!1;if(!s(n()))if(A!==c(h)){const a=n().findIndex(v=>v===f());c(h)&&a===-1?n().push(f()):!c(h)&&a!==-1&&n().splice(a,1),t=!0}else{const a=Y.findIndex(M=>M===f()),v=n().findIndex(M=>M===f());a>-1&&v===-1?I.selected=!1:v>-1&&a===-1&&(I.selected=!0)}s(l())?A!==c(h)&&(t=!0):l()!==c(h)&&(l()===X?(l(c(h)),t=!0):I.selected=l()),X=l(),Y=s(n())?[]:[...n()],A=c(h),t&&D()&&le(D(),"SMUISwitchChange",{selected:c(h),value:f()})});const Z=H("SMUI:generic:input:mount"),V=H("SMUI:generic:input:unmount");me(()=>{k(_,new Ge({addClass:$,hasClass:ue,isDisabled:()=>d(),removeClass:ee,setAriaChecked:()=>{},setDisabled:a=>{d(a)},state:I}),!0);const t={get element(){return D()},get checked(){return c(h)},set checked(a){c(h)!==a&&(I.selected=a,D()&&le(D(),"SMUISwitchChange",{selected:a,value:f()}))},activateRipple(){d()||k(T,!0)},deactivateRipple(){k(T,!1)}};return Z&&Z(t),c(_).init(),c(_).initFromDOM(),()=>{var a;V&&V(t),(a=c(_))==null||a.destroy()}});function ue(t){return t in E?E[t]:D().classList.contains(t)}function $(t){E[t]||(E[t]=!0)}function ee(t){(!(t in E)||E[t])&&(E[t]=!1)}function he(){return j&&j.id}function D(){return P}var O=Ae(),ve=t=>{var a;c(_)&&c(_).handleClick(),(a=e.onclick)==null||a.call(e,t)};ne(O,(t,a)=>({class:t,type:"button",role:"switch","aria-checked":c(h)?"true":"false",disabled:d(),...j,...a,onclick:ve}),[()=>oe({"mdc-switch":!0,"mdc-switch--unselected":!c(h),"mdc-switch--selected":c(h),"mdc-switch--processing":w(),"smui-switch--color-secondary":m()==="secondary",...E,[u()]:!0}),()=>Me(C,["icons$"])]);var z=L(q(O),2),te=q(z),se=L(q(te),2);re(se,t=>k(G,t),()=>c(G));var fe=L(se,2);{var pe=t=>{var a=Te();ne(a,(v,M)=>({class:v,...M}),[()=>oe({"mdc-switch__icons":!0,[S()]:!0}),()=>xe(C,"icons$")]),K(a,(v,M)=>{var ie;return(ie=ce)==null?void 0:ie(v,M)},y),W(t,a)};ae(fe,t=>{p()&&t(pe)})}J(te),J(z);var ge=L(z,2);{var be=t=>{var a=je();W(t,a)};ae(ge,t=>{b()&&t(be)})}return J(O),re(O,t=>P=t,()=>P),K(O,(t,a)=>{var v;return(v=ce)==null?void 0:v(t,a)},o),K(O,(t,a)=>{var v;return(v=Pe)==null?void 0:v(t,a)},()=>({unbounded:!0,color:m(),active:c(T),rippleElement:c(G),disabled:d(),addClass:$,removeClass:ee})),W(r,O),Ce({getId:he,getElement:D})}export{Qe as S};
