import{c as he,a as F,t as W}from"./disclose-version.B3RRTx8Z.js";import{p as ne,k as Z,u as $,h as j,g as l,f as pe,n as ee,t as w,a as ae,b as q,c as V,r as x,e as le,s as ve,i as Ee,d as me}from"./runtime.DwlehcF5.js";import{p as m,a as A,o as ie,i as ce,b as G,r as re}from"./index-client.BDIqpeZ8.js";import{s as te,b as K,u as Q,d as z,c as J,a as ge}from"./useActions.dWwaU660.js";import{S as ue}from"./IconButton.CkPA9NQ0.js";import{_ as se,a as U,M as oe}from"./dispatch.CwJSP0lB.js";/**
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
 */var be={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var Ce=function(p){se(e,p);function e(i){var r=p.call(this,U(U({},e.defaultAdapter),i))||this;return r.shakeAnimationEndHandler=function(){r.handleShakeAnimationEnd()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return be},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(i){var r=e.cssClasses.LABEL_SHAKE;i?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.float=function(i){var r=e.cssClasses,L=r.LABEL_FLOAT_ABOVE,v=r.LABEL_SHAKE;i?this.adapter.addClass(L):(this.adapter.removeClass(L),this.adapter.removeClass(v))},e.prototype.setRequired=function(i){var r=e.cssClasses.LABEL_REQUIRED;i?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleShakeAnimationEnd=function(){var i=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(i)},e}(oe);/**
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
 */var Le=function(p){se(e,p);function e(i){var r=p.call(this,U(U({},e.defaultAdapter),i))||this;return r.transitionEndHandler=function(L){r.handleTransitionEnd(L)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return H},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(H.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(H.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(i){this.adapter.setStyle("transform-origin",i+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(H.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(i){var r=this.adapter.hasClass(H.LINE_RIPPLE_DEACTIVATING);i.propertyName==="opacity"&&r&&(this.adapter.removeClass(H.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(H.LINE_RIPPLE_DEACTIVATING))},e}(oe);/**
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
 */var _e={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},de={NOTCH_ELEMENT_PADDING:8},ye={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var Ae=function(p){se(e,p);function e(i){return p.call(this,U(U({},e.defaultAdapter),i))||this}return Object.defineProperty(e,"strings",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ye},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return de},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(i){var r=e.cssClasses.OUTLINE_NOTCHED;i>0&&(i+=de.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(i),this.adapter.addClass(r)},e.prototype.closeNotch=function(){var i=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(i),this.adapter.removeNotchWidthProperty()},e}(oe),Ie=W("<span><!></span>"),Ne=W("<label><!></label>");function Ue(p,e){ne(e,!0);let i=m(e,"use",19,()=>[]),r=m(e,"class",3,""),L=m(e,"style",3,""),v=m(e,"floatAbove",15,!1),_=m(e,"required",15,!1),I=m(e,"wrapped",3,!1),f=re(e,["$$slots","$$events","$$legacy","use","class","style","for","floatAbove","required","wrapped","children"]),d,s=q(void 0),h=new ue,b=A({}),C=A({}),O=Z("SMUI:generic:input:props")??{},S=v();$(()=>{l(s)&&S!==v()&&(S=v(),l(s).float(v()))});let D=_();$(()=>{l(s)&&D!==_()&&(D=_(),l(s).setRequired(_()))});const R=Z("SMUI:floating-label:mount"),M=Z("SMUI:floating-label:unmount");ie(()=>{j(s,A(new Ce({addClass:N,removeClass:g,getWidth:()=>{var E,y;const a=T(),u=a.cloneNode(!0);(E=a.parentNode)==null||E.appendChild(u),u.classList.add("smui-floating-label--remove-transition"),u.classList.add("smui-floating-label--force-size"),u.classList.remove("mdc-floating-label--float-above");const B=u.scrollWidth;return(y=a.parentNode)==null||y.removeChild(u),B},registerInteractionHandler:(a,u)=>h.on(T(),a,u),deregisterInteractionHandler:(a,u)=>h.off(T(),a,u)})));const o={get element(){return T()},addStyle:P,removeStyle:n};return R&&R(o),l(s).init(),()=>{var a;M&&M(o),(a=l(s))==null||a.destroy(),h.clear()}});function N(o){b[o]||(b[o]=!0)}function g(o){(!(o in b)||b[o])&&(b[o]=!1)}function P(o,a){C[o]!=a&&(a===""||a==null?delete C[o]:C[o]=a)}function n(o){o in C&&delete C[o]}function t(o){var a;(a=l(s))==null||a.shake(o)}function c(o){v(o)}function X(o){_(o)}function Y(){if(l(s)==null)throw new Error("Instance is undefined.");return l(s).getWidth()}function T(){return d}var k=he(),fe=pe(k);return ce(fe,I,o=>{var a=Ie();let u;var B=V(a);te(B,()=>e.children??ee),x(a),G(a,E=>d=E,()=>d),K(a,(E,y)=>Q(E,y),i),w(()=>u=z(a,u,{class:J({[r()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":v(),"mdc-floating-label--required":_(),...b}),style:Object.entries(C).map(([E,y])=>`${E}: ${y};`).concat([L()]).join(" "),...f})),F(o,a)},o=>{var a=Ne();let u;var B=V(a);te(B,()=>e.children??ee),x(a),G(a,E=>d=E,()=>d),K(a,(E,y)=>Q(E,y),i),w(()=>u=z(a,u,{class:J({[r()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":v(),"mdc-floating-label--required":_(),...b}),style:Object.entries(C).map(([E,y])=>`${E}: ${y};`).concat([L()]).join(" "),for:e.for||(O?O.id:void 0),...f})),F(o,a)}),F(p,k),ae({shake:t,float:c,setRequired:X,getWidth:Y,getElement:T})}var Oe=W("<div></div>");function Be(p,e){ne(e,!0);let i=m(e,"use",19,()=>[]),r=m(e,"class",3,""),L=m(e,"style",3,""),v=m(e,"active",3,!1),_=re(e,["$$slots","$$events","$$legacy","use","class","style","active"]),I,f=q(void 0),d=new ue,s=A({}),h=A({});ie(()=>(j(f,A(new Le({addClass:C,removeClass:O,hasClass:b,setStyle:S,registerEventHandler:(n,t)=>d.on(N(),n,t),deregisterEventHandler:(n,t)=>d.off(N(),n,t)}))),l(f).init(),()=>{var n;(n=l(f))==null||n.destroy(),d.clear()}));function b(n){return n in s?s[n]:N().classList.contains(n)}function C(n){s[n]||(s[n]=!0)}function O(n){(!(n in s)||s[n])&&(s[n]=!1)}function S(n,t){h[n]!=t&&(t===""||t==null?delete h[n]:h[n]=t)}function D(){var n;(n=l(f))==null||n.activate()}function R(){var n;(n=l(f))==null||n.deactivate()}function M(n){var t;(t=l(f))==null||t.setRippleCenter(n)}function N(){return I}var g=Oe();let P;return G(g,n=>I=n,()=>I),K(g,(n,t)=>Q(n,t),i),w(()=>P=z(g,P,{class:J({[r()]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":v(),...s}),style:Object.entries(h).map(([n,t])=>`${n}: ${t};`).concat([L()]).join(" "),..._})),F(p,g),ae({activate:D,deactivate:R,setRippleCenter:M,getElement:N})}var Pe=W('<div class="mdc-notched-outline__notch"><!></div>'),Te=W('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');function je(p,e){ne(e,!0);let i=m(e,"use",19,()=>[]),r=m(e,"class",3,""),L=m(e,"notched",3,!1),v=m(e,"noLabel",3,!1),_=re(e,["$$slots","$$events","$$legacy","use","class","notched","noLabel","children"]),I,f=q(void 0),d=q(void 0),s=A({}),h=A({}),b;$(()=>{l(d)!==b&&(l(d)?(l(d).addStyle("transition-duration","0s"),C("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{l(d)&&l(d).removeStyle("transition-duration")})):O("mdc-notched-outline--upgraded"),b=l(d))}),le("SMUI:floating-label:mount",t=>{j(d,A(t))}),le("SMUI:floating-label:unmount",()=>{j(d,void 0)}),ie(()=>(j(f,A(new Ae({addClass:C,removeClass:O,setNotchWidthProperty:t=>S("width",t+"px"),removeNotchWidthProperty:()=>D("width")}))),l(f).init(),()=>{var t;(t=l(f))==null||t.destroy()}));function C(t){s[t]||(s[t]=!0)}function O(t){(!(t in s)||s[t])&&(s[t]=!1)}function S(t,c){h[t]!=c&&(c===""||c==null?delete h[t]:h[t]=c)}function D(t){t in h&&delete h[t]}function R(t){var c;(c=l(f))==null||c.notch(t)}function M(){var t;(t=l(f))==null||t.closeNotch()}function N(){return I}var g=Te();let P;var n=ve(V(g),2);return ce(n,()=>!v(),t=>{var c=Pe();const X=me(()=>Object.entries(h).map(([T,k])=>`${T}: ${k};`).join(" "));var Y=V(c);te(Y,()=>e.children??ee),x(c),w(()=>ge(c,"style",l(X))),F(t,c)}),Ee(2),x(g),G(g,t=>I=t,()=>I),K(g,(t,c)=>Q(t,c),i),w(()=>P=z(g,P,{class:J({[r()]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":L(),"mdc-notched-outline--no-label":v(),...s}),..._})),F(p,g),ae({notch:R,closeNotch:M,getElement:N})}export{Ue as F,Be as L,je as N};
