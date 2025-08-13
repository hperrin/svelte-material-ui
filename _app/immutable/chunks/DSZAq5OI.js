import"./Bzak7iHL.js";import{b as ee,s as Y}from"./Bu45w55_.js";import{p as te,a as j,v as X,u as Z,g as l,s as q,c as pe,f as ve,b as U,d as ne,h as W,j as k,k as V,n as $,r as x,i as oe,l as Ee,m as me,t as ge}from"./BwguTo01.js";import{p as b,i as de,r as ae,b as G}from"./CMyoTnZX.js";import{a as K,c as Q,b as z,u as J,d as be}from"./DBhbQkAD.js";import{S as ce}from"./D3YavpxM.js";import{_ as ie,a as B,M as re}from"./qG3zDIF3.js";/**
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
 */var Ce={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var Le=(function(v){ie(e,v);function e(i){var s=v.call(this,B(B({},e.defaultAdapter),i))||this;return s.shakeAnimationEndHandler=function(){s.handleShakeAnimationEnd()},s}return Object.defineProperty(e,"cssClasses",{get:function(){return Ce},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(i){var s=e.cssClasses.LABEL_SHAKE;i?this.adapter.addClass(s):this.adapter.removeClass(s)},e.prototype.float=function(i){var s=e.cssClasses,y=s.LABEL_FLOAT_ABOVE,E=s.LABEL_SHAKE;i?this.adapter.addClass(y):(this.adapter.removeClass(y),this.adapter.removeClass(E))},e.prototype.setRequired=function(i){var s=e.cssClasses.LABEL_REQUIRED;i?this.adapter.addClass(s):this.adapter.removeClass(s)},e.prototype.handleShakeAnimationEnd=function(){var i=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(i)},e})(re);/**
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
 */var H={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var _e=(function(v){ie(e,v);function e(i){var s=v.call(this,B(B({},e.defaultAdapter),i))||this;return s.transitionEndHandler=function(y){s.handleTransitionEnd(y)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(H.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(H.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(i){this.adapter.setStyle("transform-origin",i+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(H.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(i){var s=this.adapter.hasClass(H.LINE_RIPPLE_DEACTIVATING);i.propertyName==="opacity"&&s&&(this.adapter.removeClass(H.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(H.LINE_RIPPLE_DEACTIVATING))},e})(re);/**
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
 */var ye={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},le={NOTCH_ELEMENT_PADDING:8},Ae={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var Ie=(function(v){ie(e,v);function e(i){return v.call(this,B(B({},e.defaultAdapter),i))||this}return Object.defineProperty(e,"strings",{get:function(){return ye},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(i){var s=e.cssClasses.OUTLINE_NOTCHED;i>0&&(i+=le.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(i),this.adapter.addClass(s)},e.prototype.closeNotch=function(){var i=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(i),this.adapter.removeNotchWidthProperty()},e})(re),Ne=k("<span><!></span>"),Oe=k("<label><!></label>");function Be(v,e){te(e,!0);let i=b(e,"use",19,()=>[]),s=b(e,"class",3,""),y=b(e,"style",3,""),E=b(e,"floatAbove",15,!1),A=b(e,"required",15,!1),I=b(e,"wrapped",3,!1),h=ae(e,["$$slots","$$events","$$legacy","use","class","style","for","floatAbove","required","wrapped","children"]),c,o=q(void 0),p=new ce,L=j({}),_=j({}),P=X("SMUI:generic:input:props")??{},S=E();Z(()=>{l(o)&&S!==E()&&(S=E(),l(o).float(E()))});let D=A();Z(()=>{l(o)&&D!==A()&&(D=A(),l(o).setRequired(A()))});const R=X("SMUI:floating-label:mount"),M=X("SMUI:floating-label:unmount");ee(()=>{W(o,new Le({addClass:N,removeClass:C,getWidth:()=>{var g,O;const a=T(),m=a.cloneNode(!0);(g=a.parentNode)==null||g.appendChild(m),m.classList.add("smui-floating-label--remove-transition"),m.classList.add("smui-floating-label--force-size"),m.classList.remove("mdc-floating-label--float-above");const u=m.scrollWidth;return(O=a.parentNode)==null||O.removeChild(m),u},registerInteractionHandler:(a,m)=>p.on(T(),a,m),deregisterInteractionHandler:(a,m)=>p.off(T(),a,m)}),!0);const r={get element(){return T()},addStyle:t,removeStyle:d};return R&&R(r),l(o).init(),()=>{var a;M&&M(r),(a=l(o))==null||a.destroy(),p.clear()}});function N(r){L[r]||(L[r]=!0)}function C(r){(!(r in L)||L[r])&&(L[r]=!1)}function t(r,a){_[r]!=a&&(a===""||a==null?delete _[r]:_[r]=a)}function d(r){r in _&&delete _[r]}function n(r){var a;(a=l(o))==null||a.shake(r)}function f(r){E(r)}function F(r){A(r)}function w(){if(l(o)==null)throw new Error("Instance is undefined.");return l(o).getWidth()}function T(){return c}var se=pe(),ue=ve(se);{var fe=r=>{var a=Ne();K(a,(u,g)=>({class:u,style:g,...h}),[()=>Q({"mdc-floating-label":!0,"mdc-floating-label--float-above":E(),"mdc-floating-label--required":A(),...L,[s()]:!0}),()=>Object.entries(_).map(([u,g])=>`${u}: ${g};`).concat([y()]).join(" ")]);var m=V(a);Y(m,()=>e.children??$),x(a),G(a,u=>c=u,()=>c),z(a,(u,g)=>{var O;return(O=J)==null?void 0:O(u,g)},i),U(r,a)},he=r=>{var a=Oe();K(a,(u,g)=>({class:u,style:g,for:e.for||(P?P.id:void 0),...h}),[()=>Q({"mdc-floating-label":!0,"mdc-floating-label--float-above":E(),"mdc-floating-label--required":A(),...L,[s()]:!0}),()=>Object.entries(_).map(([u,g])=>`${u}: ${g};`).concat([y()]).join(" ")]);var m=V(a);Y(m,()=>e.children??$),x(a),G(a,u=>c=u,()=>c),z(a,(u,g)=>{var O;return(O=J)==null?void 0:O(u,g)},i),U(r,a)};de(ue,r=>{I()?r(fe):r(he,!1)})}return U(v,se),ne({shake:n,float:f,setRequired:F,getWidth:w,getElement:T})}var Pe=k("<div></div>");function we(v,e){te(e,!0);let i=b(e,"use",19,()=>[]),s=b(e,"class",3,""),y=b(e,"style",3,""),E=b(e,"active",3,!1),A=ae(e,["$$slots","$$events","$$legacy","use","class","style","active"]),I,h=q(void 0),c=new ce,o=j({}),p=j({});ee(()=>(W(h,new _e({addClass:_,removeClass:P,hasClass:L,setStyle:S,registerEventHandler:(t,d)=>c.on(N(),t,d),deregisterEventHandler:(t,d)=>c.off(N(),t,d)}),!0),l(h).init(),()=>{var t;(t=l(h))==null||t.destroy(),c.clear()}));function L(t){return t in o?o[t]:N().classList.contains(t)}function _(t){o[t]||(o[t]=!0)}function P(t){(!(t in o)||o[t])&&(o[t]=!1)}function S(t,d){p[t]!=d&&(d===""||d==null?delete p[t]:p[t]=d)}function D(){var t;(t=l(h))==null||t.activate()}function R(){var t;(t=l(h))==null||t.deactivate()}function M(t){var d;(d=l(h))==null||d.setRippleCenter(t)}function N(){return I}var C=Pe();return K(C,(t,d)=>({class:t,style:d,...A}),[()=>Q({"mdc-line-ripple":!0,"mdc-line-ripple--active":E(),...o,[s()]:!0}),()=>Object.entries(p).map(([t,d])=>`${t}: ${d};`).concat([y()]).join(" ")]),G(C,t=>I=t,()=>I),z(C,(t,d)=>{var n;return(n=J)==null?void 0:n(t,d)},i),U(v,C),ne({activate:D,deactivate:R,setRippleCenter:M,getElement:N})}var Te=k('<div class="mdc-notched-outline__notch"><!></div>'),He=k('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');function We(v,e){te(e,!0);let i=b(e,"use",19,()=>[]),s=b(e,"class",3,""),y=b(e,"notched",3,!1),E=b(e,"noLabel",3,!1),A=ae(e,["$$slots","$$events","$$legacy","use","class","notched","noLabel","children"]),I,h=q(void 0),c=q(void 0),o=j({}),p=j({}),L;Z(()=>{l(c)!==L&&(l(c)?(l(c).addStyle("transition-duration","0s"),_("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{l(c)&&l(c).removeStyle("transition-duration")})):P("mdc-notched-outline--upgraded"),L=l(c))}),oe("SMUI:floating-label:mount",n=>{W(c,n,!0)}),oe("SMUI:floating-label:unmount",()=>{W(c,void 0)}),ee(()=>(W(h,new Ie({addClass:_,removeClass:P,setNotchWidthProperty:n=>S("width",n+"px"),removeNotchWidthProperty:()=>D("width")}),!0),l(h).init(),()=>{var n;(n=l(h))==null||n.destroy()}));function _(n){o[n]||(o[n]=!0)}function P(n){(!(n in o)||o[n])&&(o[n]=!1)}function S(n,f){p[n]!=f&&(f===""||f==null?delete p[n]:p[n]=f)}function D(n){n in p&&delete p[n]}function R(n){var f;(f=l(h))==null||f.notch(n)}function M(){var n;(n=l(h))==null||n.closeNotch()}function N(){return I}var C=He();K(C,n=>({class:n,...A}),[()=>Q({"mdc-notched-outline":!0,"mdc-notched-outline--notched":y(),"mdc-notched-outline--no-label":E(),...o,[s()]:!0})]);var t=Ee(V(C),2);{var d=n=>{var f=Te(),F=V(f);Y(F,()=>e.children??$),x(f),ge(w=>be(f,w),[()=>Object.entries(p).map(([w,T])=>`${w}: ${T};`).join(" ")]),U(n,f)};de(t,n=>{E()||n(d)})}return me(2),x(C),G(C,n=>I=n,()=>I),z(C,(n,f)=>{var F;return(F=J)==null?void 0:F(n,f)},i),U(v,C),ne({notch:R,closeNotch:M,getElement:N})}export{Be as F,we as L,We as N};
