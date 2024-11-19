import{c as me,a as B,t as w}from"./disclose-version.Bsnu83OK.js";import"./legacy.BG3nWsJQ.js";import{p as ae,o as ee,m as L,d as b,g as t,i as P,l as te,b as he,f as pe,t as V,a as ie,c as z,r as Q,e as ce,j as ue,s as ge,n as _e,h as be}from"./runtime.SXGrDfxi.js";import{l as q,p as v,o as re,i as Ee,b as J}from"./index-client.CjaGIm_K.js";import{s as ne,d as X,b as y,u as Y,e as Z,c as $,a as Ce}from"./useActions.D2nM91eX.js";import{i as se}from"./lifecycle.ty5dbg6f.js";import{_ as le,a as W,M as oe}from"./dispatch.S85s6hKV.js";/**
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
 */var Le={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var ye=function(m){le(e,m);function e(i){var r=m.call(this,W(W({},e.defaultAdapter),i))||this;return r.shakeAnimationEndHandler=function(){r.handleShakeAnimationEnd()},r}return Object.defineProperty(e,"cssClasses",{get:function(){return Le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(i){var r=e.cssClasses.LABEL_SHAKE;i?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.float=function(i){var r=e.cssClasses,A=r.LABEL_FLOAT_ABOVE,T=r.LABEL_SHAKE;i?this.adapter.addClass(A):(this.adapter.removeClass(A),this.adapter.removeClass(T))},e.prototype.setRequired=function(i){var r=e.cssClasses.LABEL_REQUIRED;i?this.adapter.addClass(r):this.adapter.removeClass(r)},e.prototype.handleShakeAnimationEnd=function(){var i=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(i)},e}(oe);/**
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
 */var M={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var Ae=function(m){le(e,m);function e(i){var r=m.call(this,W(W({},e.defaultAdapter),i))||this;return r.transitionEndHandler=function(A){r.handleTransitionEnd(A)},r}return Object.defineProperty(e,"cssClasses",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(M.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(M.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(i){this.adapter.setStyle("transform-origin",i+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(M.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(i){var r=this.adapter.hasClass(M.LINE_RIPPLE_DEACTIVATING);i.propertyName==="opacity"&&r&&(this.adapter.removeClass(M.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(M.LINE_RIPPLE_DEACTIVATING))},e}(oe);/**
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
 */var Ie={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},fe={NOTCH_ELEMENT_PADDING:8},Ne={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var Oe=function(m){le(e,m);function e(i){return m.call(this,W(W({},e.defaultAdapter),i))||this}return Object.defineProperty(e,"strings",{get:function(){return Ie},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(i){var r=e.cssClasses.OUTLINE_NOTCHED;i>0&&(i+=fe.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(i),this.adapter.addClass(r)},e.prototype.closeNotch=function(){var i=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(i),this.adapter.removeNotchWidthProperty()},e}(oe),Pe=w("<span><!></span>"),Te=w("<label><!></label>");function We(m,e){const i=q(e,["children","$$slots","$$events","$$legacy"]),r=q(i,["shake","float","setRequired","getWidth","getElement","use","class","style","for","floatAbove","required","wrapped"]);ae(e,!1);let A=v(e,"use",24,()=>[]),T=v(e,"class",8,""),F=v(e,"style",8,""),U=v(e,"for",8,void 0),h=v(e,"floatAbove",12,!1),c=v(e,"required",12,!1),u=v(e,"wrapped",8,!1),d=L(),o=L(),p=L({}),f=L({}),j=ee("SMUI:generic:input:props")??{},H=L(h()),O=L(c());const R=ee("SMUI:floating-label:mount"),I=ee("SMUI:floating-label:unmount");re(()=>{b(o,new ye({addClass:C,removeClass:D,getWidth:()=>{var _,N;const l=S(),E=l.cloneNode(!0);(_=l.parentNode)==null||_.appendChild(E),E.classList.add("smui-floating-label--remove-transition"),E.classList.add("smui-floating-label--force-size"),E.classList.remove("mdc-floating-label--float-above");const k=E.scrollWidth;return(N=l.parentNode)==null||N.removeChild(E),k},registerInteractionHandler:(l,E)=>S().addEventListener(l,E),deregisterInteractionHandler:(l,E)=>S().removeEventListener(l,E)}));const s={get element(){return S()},addStyle:a,removeStyle:n};return R&&R(s),t(o).init(),()=>{I&&I(s),t(o).destroy()}});function C(s){t(p)[s]||P(p,t(p)[s]=!0)}function D(s){(!(s in t(p))||t(p)[s])&&P(p,t(p)[s]=!1)}function a(s,l){t(f)[s]!=l&&(l===""||l==null?(delete t(f)[s],b(f,t(f))):P(f,t(f)[s]=l))}function n(s){s in t(f)&&(delete t(f)[s],b(f,t(f)))}function g(s){t(o).shake(s)}function G(s){h(s)}function x(s){c(s)}function K(){return t(o).getWidth()}function S(){return t(d)}te(()=>(t(o),t(H),ce(h())),()=>{t(o)&&t(H)!==h()&&(b(H,h()),t(o).float(h()))}),te(()=>(t(o),t(O),ce(c())),()=>{t(o)&&t(O)!==c()&&(b(O,c()),t(o).setRequired(c()))}),he(),se();var de=me(),ve=pe(de);return Ee(ve,u,s=>{var l=Pe();let E;var k=z(l);ne(k,e,"default",{},null),Q(l),J(l,_=>b(d,_),()=>t(d)),X(l,(_,N)=>Y(_,N),A),V(()=>E=Z(l,E,{class:$({[T()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":h(),"mdc-floating-label--required":c(),...t(p)}),style:Object.entries(t(f)).map(([_,N])=>`${_}: ${N};`).concat([F()]).join(" "),...r})),B(s,l)},s=>{var l=Te();let E;var k=z(l);ne(k,e,"default",{},null),Q(l),J(l,_=>b(d,_),()=>t(d)),X(l,(_,N)=>Y(_,N),A),V(()=>E=Z(l,E,{class:$({[T()]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":h(),"mdc-floating-label--required":c(),...t(p)}),style:Object.entries(t(f)).map(([_,N])=>`${_}: ${N};`).concat([F()]).join(" "),for:U()||(j?j.id:void 0),...r})),B(s,l)}),B(m,de),y(e,"shake",g),y(e,"float",G),y(e,"setRequired",x),y(e,"getWidth",K),y(e,"getElement",S),ie({shake:g,float:G,setRequired:x,getWidth:K,getElement:S})}var He=w("<div></div>");function ke(m,e){const i=q(e,["children","$$slots","$$events","$$legacy"]),r=q(i,["activate","deactivate","setRippleCenter","getElement","use","class","style","active"]);ae(e,!1);let A=v(e,"use",24,()=>[]),T=v(e,"class",8,""),F=v(e,"style",8,""),U=v(e,"active",8,!1),h=L(),c,u=L({}),d=L({});re(()=>(c=new Ae({addClass:p,removeClass:f,hasClass:o,setStyle:j,registerEventHandler:(a,n)=>I().addEventListener(a,n),deregisterEventHandler:(a,n)=>I().removeEventListener(a,n)}),c.init(),()=>{c.destroy()}));function o(a){return a in t(u)?t(u)[a]:I().classList.contains(a)}function p(a){t(u)[a]||P(u,t(u)[a]=!0)}function f(a){(!(a in t(u))||t(u)[a])&&P(u,t(u)[a]=!1)}function j(a,n){t(d)[a]!=n&&(n===""||n==null?(delete t(d)[a],b(d,t(d))):P(d,t(d)[a]=n))}function H(){c.activate()}function O(){c.deactivate()}function R(a){c.setRippleCenter(a)}function I(){return t(h)}se();var C=He();let D;return J(C,a=>b(h,a),()=>t(h)),X(C,(a,n)=>Y(a,n),A),V(()=>D=Z(C,D,{class:$({[T()]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":U(),...t(u)}),style:Object.entries(t(d)).map(([a,n])=>`${a}: ${n};`).concat([F()]).join(" "),...r})),B(m,C),y(e,"activate",H),y(e,"deactivate",O),y(e,"setRippleCenter",R),y(e,"getElement",I),ie({activate:H,deactivate:O,setRippleCenter:R,getElement:I})}var Re=w('<div class="mdc-notched-outline__notch"><!></div>'),Se=w('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');function Ve(m,e){const i=q(e,["children","$$slots","$$events","$$legacy"]),r=q(i,["notch","closeNotch","getElement","use","class","notched","noLabel"]);ae(e,!1);let A=v(e,"use",24,()=>[]),T=v(e,"class",8,""),F=v(e,"notched",8,!1),U=v(e,"noLabel",8,!1),h=L(),c,u=L(),d=L({}),o=L({});ue("SMUI:floating-label:mount",n=>{b(u,n)}),ue("SMUI:floating-label:unmount",()=>{b(u,void 0)}),re(()=>(c=new Oe({addClass:p,removeClass:f,setNotchWidthProperty:n=>j("width",n+"px"),removeNotchWidthProperty:()=>H("width")}),c.init(),()=>{c.destroy()}));function p(n){t(d)[n]||P(d,t(d)[n]=!0)}function f(n){(!(n in t(d))||t(d)[n])&&P(d,t(d)[n]=!1)}function j(n,g){t(o)[n]!=g&&(g===""||g==null?(delete t(o)[n],b(o,t(o))):P(o,t(o)[n]=g))}function H(n){n in t(o)&&(delete t(o)[n],b(o,t(o)))}function O(n){c.notch(n)}function R(){c.closeNotch()}function I(){return t(h)}te(()=>t(u),()=>{t(u)?(t(u).addStyle("transition-duration","0s"),p("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{t(u)&&t(u).removeStyle("transition-duration")})):f("mdc-notched-outline--upgraded")}),he(),se();var C=Se();let D;var a=ge(z(C),2);return Ee(a,()=>!U(),n=>{var g=Re();const G=be(()=>Object.entries(t(o)).map(([K,S])=>`${K}: ${S};`).join(" "));var x=z(g);ne(x,e,"default",{},null),Q(g),V(()=>Ce(g,"style",t(G))),B(n,g)}),_e(2),Q(C),J(C,n=>b(h,n),()=>t(h)),X(C,(n,g)=>Y(n,g),A),V(()=>D=Z(C,D,{class:$({[T()]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":F(),"mdc-notched-outline--no-label":U(),...t(d)}),...r})),B(m,C),y(e,"notch",O),y(e,"closeNotch",R),y(e,"getElement",I),ie({notch:O,closeNotch:R,getElement:I})}export{We as F,ke as L,Ve as N};
