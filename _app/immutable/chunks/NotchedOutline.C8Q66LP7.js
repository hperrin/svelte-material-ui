import{c as Ee,a as j,t as V}from"./disclose-version.L5AxZWdJ.js";import{p as ie,k as ee,u as te,g as l,c as k,f as me,a as re,s as G,e as K,n as ne,r as Q,t as q,b as ce,h as ge,j as be,d as Ce}from"./runtime.W_ZEMHic.js";import{p as g,a as I,i as fe,b as z,r as se}from"./props.Ce4KWaWc.js";import{s as ae,b as J,u as X,d as Y,c as Z,a as Le}from"./useActions.kHGJbmCA.js";import{o as oe}from"./index-client.CM1w6q3L.js";import{S as he}from"./IconButton.TWSmi4tO.js";import{_ as le,a as B,M as de}from"./dispatch.KCohpohh.js";/**
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
 */var _e={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var ye=function(v){le(e,v);function e(i){var s=v.call(this,B(B({},e.defaultAdapter),i))||this;return s.shakeAnimationEndHandler=function(){s.handleShakeAnimationEnd()},s}return Object.defineProperty(e,"cssClasses",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(i){var s=e.cssClasses.LABEL_SHAKE;i?this.adapter.addClass(s):this.adapter.removeClass(s)},e.prototype.float=function(i){var s=e.cssClasses,_=s.LABEL_FLOAT_ABOVE,E=s.LABEL_SHAKE;i?this.adapter.addClass(_):(this.adapter.removeClass(_),this.adapter.removeClass(E))},e.prototype.setRequired=function(i){var s=e.cssClasses.LABEL_REQUIRED;i?this.adapter.addClass(s):this.adapter.removeClass(s)},e.prototype.handleShakeAnimationEnd=function(){var i=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(i)},e}(de);/**
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
 */var S={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var Ae=function(v){le(e,v);function e(i){var s=v.call(this,B(B({},e.defaultAdapter),i))||this;return s.transitionEndHandler=function(_){s.handleTransitionEnd(_)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(S.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(S.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(i){this.adapter.setStyle("transform-origin",i+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(S.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(i){var s=this.adapter.hasClass(S.LINE_RIPPLE_DEACTIVATING);i.propertyName==="opacity"&&s&&(this.adapter.removeClass(S.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(S.LINE_RIPPLE_DEACTIVATING))},e}(de);/**
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
 */var Ie={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},ue={NOTCH_ELEMENT_PADDING:8},Ne={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var Oe=function(v){le(e,v);function e(i){return v.call(this,B(B({},e.defaultAdapter),i))||this}return Object.defineProperty(e,"strings",{get:function(){return Ie},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ue},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(i){var s=e.cssClasses.OUTLINE_NOTCHED;i>0&&(i+=ue.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(i),this.adapter.addClass(s)},e.prototype.closeNotch=function(){var i=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(i),this.adapter.removeNotchWidthProperty()},e}(de),Pe=V("<span><!></span>"),Te=V("<label><!></label>");function We(v,e){ie(e,!0);let i=g(e,"use",19,()=>[]),s=g(e,"class",3,""),_=g(e,"style",3,""),E=g(e,"floatAbove",15,!1),y=g(e,"required",15,!1),N=g(e,"wrapped",3,!1),h=se(e,["$$slots","$$events","$$legacy","use","class","style","for","floatAbove","required","wrapped","children"]),c,o=G(void 0),p=new he,C=I({}),L=I({}),P=ee("SMUI:generic:input:props")??{},D=E();te(()=>{l(o)&&D!==E()&&(D=E(),l(o).float(E()))});let R=y();te(()=>{l(o)&&R!==y()&&(R=y(),l(o).setRequired(y()))});const M=ee("SMUI:floating-label:mount"),F=ee("SMUI:floating-label:unmount");oe(()=>{k(o,I(new ye({addClass:O,removeClass:b,getWidth:()=>{var m,A;const a=H(),f=a.cloneNode(!0);(m=a.parentNode)==null||m.appendChild(f),f.classList.add("smui-floating-label--remove-transition"),f.classList.add("smui-floating-label--force-size"),f.classList.remove("mdc-floating-label--float-above");const w=f.scrollWidth;return(A=a.parentNode)==null||A.removeChild(f),w},registerInteractionHandler:(a,f)=>p.on(H(),a,f),deregisterInteractionHandler:(a,f)=>p.off(H(),a,f)})));const r={get element(){return H()},addStyle:T,removeStyle:t};return M&&M(r),l(o).init(),()=>{var a;F&&F(r),(a=l(o))==null||a.destroy(),p.clear()}});function O(r){C[r]||(C[r]=!0)}function b(r){(!(r in C)||C[r])&&(C[r]=!1)}function T(r,a){L[r]!=a&&(a===""||a==null?delete L[r]:L[r]=a)}function t(r){r in L&&delete L[r]}function d(r){var a;(a=l(o))==null||a.shake(r)}function n(r){E(r)}function u(r){y(r)}function U(){if(l(o)==null)throw new Error("Instance is undefined.");return l(o).getWidth()}function H(){return c}var x=Ee(),$=me(x);{var pe=r=>{var a=Pe();let f;var w=K(a);ae(w,()=>e.children??ne),Q(a),z(a,m=>c=m,()=>c),J(a,(m,A)=>{var W;return(W=X)==null?void 0:W(m,A)},i),q(()=>f=Y(a,f,{class:Z({[s()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":E(),"mdc-floating-label--required":y(),...C}),style:Object.entries(L).map(([m,A])=>`${m}: ${A};`).concat([_()]).join(" "),...h})),j(r,a)},ve=r=>{var a=Te();let f;var w=K(a);ae(w,()=>e.children??ne),Q(a),z(a,m=>c=m,()=>c),J(a,(m,A)=>{var W;return(W=X)==null?void 0:W(m,A)},i),q(()=>f=Y(a,f,{class:Z({[s()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":E(),"mdc-floating-label--required":y(),...C}),style:Object.entries(L).map(([m,A])=>`${m}: ${A};`).concat([_()]).join(" "),for:e.for||(P?P.id:void 0),...h})),j(r,a)};fe($,r=>{N()?r(pe):r(ve,!1)})}return j(v,x),re({shake:d,float:n,setRequired:u,getWidth:U,getElement:H})}var He=V("<div></div>");function ke(v,e){ie(e,!0);let i=g(e,"use",19,()=>[]),s=g(e,"class",3,""),_=g(e,"style",3,""),E=g(e,"active",3,!1),y=se(e,["$$slots","$$events","$$legacy","use","class","style","active"]),N,h=G(void 0),c=new he,o=I({}),p=I({});oe(()=>(k(h,I(new Ae({addClass:L,removeClass:P,hasClass:C,setStyle:D,registerEventHandler:(t,d)=>c.on(O(),t,d),deregisterEventHandler:(t,d)=>c.off(O(),t,d)}))),l(h).init(),()=>{var t;(t=l(h))==null||t.destroy(),c.clear()}));function C(t){return t in o?o[t]:O().classList.contains(t)}function L(t){o[t]||(o[t]=!0)}function P(t){(!(t in o)||o[t])&&(o[t]=!1)}function D(t,d){p[t]!=d&&(d===""||d==null?delete p[t]:p[t]=d)}function R(){var t;(t=l(h))==null||t.activate()}function M(){var t;(t=l(h))==null||t.deactivate()}function F(t){var d;(d=l(h))==null||d.setRippleCenter(t)}function O(){return N}var b=He();let T;return z(b,t=>N=t,()=>N),J(b,(t,d)=>{var n;return(n=X)==null?void 0:n(t,d)},i),q(()=>T=Y(b,T,{class:Z({[s()]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":E(),...o}),style:Object.entries(p).map(([t,d])=>`${t}: ${d};`).concat([_()]).join(" "),...y})),j(v,b),re({activate:R,deactivate:M,setRippleCenter:F,getElement:O})}var Se=V('<div class="mdc-notched-outline__notch"><!></div>'),De=V('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');function qe(v,e){ie(e,!0);let i=g(e,"use",19,()=>[]),s=g(e,"class",3,""),_=g(e,"notched",3,!1),E=g(e,"noLabel",3,!1),y=se(e,["$$slots","$$events","$$legacy","use","class","notched","noLabel","children"]),N,h=G(void 0),c=G(void 0),o=I({}),p=I({}),C;te(()=>{l(c)!==C&&(l(c)?(l(c).addStyle("transition-duration","0s"),L("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{l(c)&&l(c).removeStyle("transition-duration")})):P("mdc-notched-outline--upgraded"),C=l(c))}),ce("SMUI:floating-label:mount",n=>{k(c,I(n))}),ce("SMUI:floating-label:unmount",()=>{k(c,void 0)}),oe(()=>(k(h,I(new Oe({addClass:L,removeClass:P,setNotchWidthProperty:n=>D("width",n+"px"),removeNotchWidthProperty:()=>R("width")}))),l(h).init(),()=>{var n;(n=l(h))==null||n.destroy()}));function L(n){o[n]||(o[n]=!0)}function P(n){(!(n in o)||o[n])&&(o[n]=!1)}function D(n,u){p[n]!=u&&(u===""||u==null?delete p[n]:p[n]=u)}function R(n){n in p&&delete p[n]}function M(n){var u;(u=l(h))==null||u.notch(n)}function F(){var n;(n=l(h))==null||n.closeNotch()}function O(){return N}var b=De();let T;var t=ge(K(b),2);{var d=n=>{var u=Se();const U=Ce(()=>Object.entries(p).map(([x,$])=>`${x}: ${$};`).join(" "));var H=K(u);ae(H,()=>e.children??ne),Q(u),q(()=>Le(u,"style",l(U))),j(n,u)};fe(t,n=>{E()||n(d)})}return be(2),Q(b),z(b,n=>N=n,()=>N),J(b,(n,u)=>{var U;return(U=X)==null?void 0:U(n,u)},i),q(()=>T=Y(b,T,{class:Z({[s()]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":_(),"mdc-notched-outline--no-label":E(),...o}),...y})),j(v,b),re({notch:M,closeNotch:F,getElement:O})}export{We as F,ke as L,qe as N};
