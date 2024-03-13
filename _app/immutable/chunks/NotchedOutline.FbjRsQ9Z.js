import{s as ne,l as V,m as le,x as ke,o as se,i as O,p as ie,b as X,f as ae,j as T,u as re,g as oe,h as ue,k as Y,r as Z,n as _e}from"./scheduler.Y0SF-lgF.js";import{S as de,i as ce,e as ge,a as G,p as Oe,t as q,b as Pe,d as P,f as A,g as j,h as F,j as M,F as H,s as Ee,c as be,k as z,y as J,z as pe}from"./index.NFc0pX0t.js";import{f as fe,c as R,u as w,g as x}from"./useActions.v1s1ANSX.js";import{_ as he,a as W,M as me,d as ve}from"./dispatch.qs32LN2H.js";/**
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
 */var je={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
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
 */var Fe=function(n){he(e,n);function e(t){var s=n.call(this,W(W({},e.defaultAdapter),t))||this;return s.shakeAnimationEndHandler=function(){s.handleShakeAnimationEnd()},s}return Object.defineProperty(e,"cssClasses",{get:function(){return je},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var s=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(s):this.adapter.removeClass(s)},e.prototype.float=function(t){var s=e.cssClasses,c=s.LABEL_FLOAT_ABOVE,u=s.LABEL_SHAKE;t?this.adapter.addClass(c):(this.adapter.removeClass(c),this.adapter.removeClass(u))},e.prototype.setRequired=function(t){var s=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(s):this.adapter.removeClass(s)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(me);/**
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
 */var k={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
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
 */var Me=function(n){he(e,n);function e(t){var s=n.call(this,W(W({},e.defaultAdapter),t))||this;return s.transitionEndHandler=function(c){s.handleTransitionEnd(c)},s}return Object.defineProperty(e,"cssClasses",{get:function(){return k},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(k.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(k.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(k.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var s=this.adapter.hasClass(k.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&s&&(this.adapter.removeClass(k.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(k.LINE_RIPPLE_DEACTIVATING))},e}(me);/**
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
 */var qe={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},Le={NOTCH_ELEMENT_PADDING:8},Be={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
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
 */var Ue=function(n){he(e,n);function e(t){return n.call(this,W(W({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return qe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Be},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var s=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=Le.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(s)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(me);function Ve(n){let e,t,s,c,u,i,g,f;const a=n[22].default,h=ae(a,n,n[21],null);let m=[{class:t=R({[n[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":n[0],"mdc-floating-label--required":n[1],...n[8]})},{style:s=Object.entries(n[9]).map(Ae).concat([n[4]]).join(" ")},{for:c=n[5]||(n[11]?n[11].id:void 0)},n[12]],r={};for(let l=0;l<m.length;l+=1)r=O(r,m[l]);return{c(){e=j("label"),h&&h.c(),this.h()},l(l){e=F(l,"LABEL",{class:!0,style:!0,for:!0});var o=M(e);h&&h.l(o),o.forEach(A),this.h()},h(){H(e,r)},m(l,o){G(l,e,o),h&&h.m(e,null),n[24](e),i=!0,g||(f=[T(u=w.call(null,e,n[2])),T(n[10].call(null,e))],g=!0)},p(l,o){h&&h.p&&(!i||o&2097152)&&re(h,a,l,l[21],i?ue(a,l[21],o,null):oe(l[21]),null),H(e,r=x(m,[(!i||o&267&&t!==(t=R({[l[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":l[0],"mdc-floating-label--required":l[1],...l[8]})))&&{class:t},(!i||o&528&&s!==(s=Object.entries(l[9]).map(Ae).concat([l[4]]).join(" ")))&&{style:s},(!i||o&32&&c!==(c=l[5]||(l[11]?l[11].id:void 0)))&&{for:c},o&4096&&l[12]])),u&&Y(u.update)&&o&4&&u.update.call(null,l[2])},i(l){i||(P(h,l),i=!0)},o(l){q(h,l),i=!1},d(l){l&&A(e),h&&h.d(l),n[24](null),g=!1,Z(f)}}}function We(n){let e,t,s,c,u,i,g;const f=n[22].default,a=ae(f,n,n[21],null);let h=[{class:t=R({[n[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":n[0],"mdc-floating-label--required":n[1],...n[8]})},{style:s=Object.entries(n[9]).map(Ce).concat([n[4]]).join(" ")},n[12]],m={};for(let r=0;r<h.length;r+=1)m=O(m,h[r]);return{c(){e=j("span"),a&&a.c(),this.h()},l(r){e=F(r,"SPAN",{class:!0,style:!0});var l=M(e);a&&a.l(l),l.forEach(A),this.h()},h(){H(e,m)},m(r,l){G(r,e,l),a&&a.m(e,null),n[23](e),u=!0,i||(g=[T(c=w.call(null,e,n[2])),T(n[10].call(null,e))],i=!0)},p(r,l){a&&a.p&&(!u||l&2097152)&&re(a,f,r,r[21],u?ue(f,r[21],l,null):oe(r[21]),null),H(e,m=x(h,[(!u||l&267&&t!==(t=R({[r[3]]:!0,"mdc-floating-label":!0,"mdc-floating-label--float-above":r[0],"mdc-floating-label--required":r[1],...r[8]})))&&{class:t},(!u||l&528&&s!==(s=Object.entries(r[9]).map(Ce).concat([r[4]]).join(" ")))&&{style:s},l&4096&&r[12]])),c&&Y(c.update)&&l&4&&c.update.call(null,r[2])},i(r){u||(P(a,r),u=!0)},o(r){q(a,r),u=!1},d(r){r&&A(e),a&&a.d(r),n[23](null),i=!1,Z(g)}}}function Ge(n){let e,t,s,c;const u=[We,Ve],i=[];function g(f,a){return f[6]?0:1}return e=g(n),t=i[e]=u[e](n),{c(){t.c(),s=ge()},l(f){t.l(f),s=ge()},m(f,a){i[e].m(f,a),G(f,s,a),c=!0},p(f,[a]){let h=e;e=g(f),e===h?i[e].p(f,a):(Oe(),q(i[h],1,1,()=>{i[h]=null}),Pe(),t=i[e],t?t.p(f,a):(t=i[e]=u[e](f),t.c()),P(t,1),t.m(s.parentNode,s))},i(f){c||(P(t),c=!0)},o(f){q(t),c=!1},d(f){f&&A(s),i[e].d(f)}}}const Ce=([n,e])=>`${n}: ${e};`,Ae=([n,e])=>`${n}: ${e};`;function Ke(n,e,t){const s=["use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"];let c=V(e,s),{$$slots:u={},$$scope:i}=e;var g;const f=fe(le());let{use:a=[]}=e,{class:h=""}=e,{style:m=""}=e,{for:r=void 0}=e,{floatAbove:l=!1}=e,{required:o=!1}=e,{wrapped:b=!1}=e,p,v,C={},L={},K=(g=ke("SMUI:generic:input:props"))!==null&&g!==void 0?g:{},N=l,D=o;se(()=>{t(18,v=new Fe({addClass:_,removeClass:y,getWidth:()=>{var I,S;const te=Q(),U=te.cloneNode(!0);(I=te.parentNode)===null||I===void 0||I.appendChild(U),U.classList.add("smui-floating-label--remove-transition"),U.classList.add("smui-floating-label--force-size"),U.classList.remove("mdc-floating-label--float-above");const Se=U.scrollWidth;return(S=te.parentNode)===null||S===void 0||S.removeChild(U),Se},registerInteractionHandler:(I,S)=>Q().addEventListener(I,S),deregisterInteractionHandler:(I,S)=>Q().removeEventListener(I,S)}));const d={get element(){return Q()},addStyle:$,removeStyle:ee};return ve(p,"SMUIFloatingLabel:mount",d),v.init(),()=>{ve(p,"SMUIFloatingLabel:unmount",d),v.destroy()}});function _(d){C[d]||t(8,C[d]=!0,C)}function y(d){(!(d in C)||C[d])&&t(8,C[d]=!1,C)}function $(d,I){L[d]!=I&&(I===""||I==null?(delete L[d],t(9,L)):t(9,L[d]=I,L))}function ee(d){d in L&&(delete L[d],t(9,L))}function E(d){v.shake(d)}function B(d){t(0,l=d)}function Te(d){t(1,o=d)}function He(){return v.getWidth()}function Q(){return p}function Re(d){X[d?"unshift":"push"](()=>{p=d,t(7,p)})}function De(d){X[d?"unshift":"push"](()=>{p=d,t(7,p)})}return n.$$set=d=>{e=O(O({},e),ie(d)),t(12,c=V(e,s)),"use"in d&&t(2,a=d.use),"class"in d&&t(3,h=d.class),"style"in d&&t(4,m=d.style),"for"in d&&t(5,r=d.for),"floatAbove"in d&&t(0,l=d.floatAbove),"required"in d&&t(1,o=d.required),"wrapped"in d&&t(6,b=d.wrapped),"$$scope"in d&&t(21,i=d.$$scope)},n.$$.update=()=>{n.$$.dirty&786433&&v&&N!==l&&(t(19,N=l),v.float(l)),n.$$.dirty&1310722&&v&&D!==o&&(t(20,D=o),v.setRequired(o))},[l,o,a,h,m,r,b,p,C,L,f,K,c,E,B,Te,He,Q,v,N,D,i,u,Re,De]}class $e extends de{constructor(e){super(),ce(this,e,Ke,Ge,ne,{use:2,class:3,style:4,for:5,floatAbove:0,required:1,wrapped:6,shake:13,float:14,setRequired:15,getWidth:16,getElement:17})}get shake(){return this.$$.ctx[13]}get float(){return this.$$.ctx[14]}get setRequired(){return this.$$.ctx[15]}get getWidth(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function Qe(n){let e,t,s,c,u,i,g=[{class:t=R({[n[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":n[3],...n[5]})},{style:s=Object.entries(n[6]).map(ye).concat([n[2]]).join(" ")},n[8]],f={};for(let a=0;a<g.length;a+=1)f=O(f,g[a]);return{c(){e=j("div"),this.h()},l(a){e=F(a,"DIV",{class:!0,style:!0}),M(e).forEach(A),this.h()},h(){H(e,f)},m(a,h){G(a,e,h),n[13](e),u||(i=[T(c=w.call(null,e,n[0])),T(n[7].call(null,e))],u=!0)},p(a,[h]){H(e,f=x(g,[h&42&&t!==(t=R({[a[1]]:!0,"mdc-line-ripple":!0,"mdc-line-ripple--active":a[3],...a[5]}))&&{class:t},h&68&&s!==(s=Object.entries(a[6]).map(ye).concat([a[2]]).join(" "))&&{style:s},h&256&&a[8]])),c&&Y(c.update)&&h&1&&c.update.call(null,a[0])},i:_e,o:_e,d(a){a&&A(e),n[13](null),u=!1,Z(i)}}}const ye=([n,e])=>`${n}: ${e};`;function ze(n,e,t){const s=["use","class","style","active","activate","deactivate","setRippleCenter","getElement"];let c=V(e,s);const u=fe(le());let{use:i=[]}=e,{class:g=""}=e,{style:f=""}=e,{active:a=!1}=e,h,m,r={},l={};se(()=>(m=new Me({addClass:b,removeClass:p,hasClass:o,setStyle:v,registerEventHandler:(_,y)=>N().addEventListener(_,y),deregisterEventHandler:(_,y)=>N().removeEventListener(_,y)}),m.init(),()=>{m.destroy()}));function o(_){return _ in r?r[_]:N().classList.contains(_)}function b(_){r[_]||t(5,r[_]=!0,r)}function p(_){(!(_ in r)||r[_])&&t(5,r[_]=!1,r)}function v(_,y){l[_]!=y&&(y===""||y==null?(delete l[_],t(6,l)):t(6,l[_]=y,l))}function C(){m.activate()}function L(){m.deactivate()}function K(_){m.setRippleCenter(_)}function N(){return h}function D(_){X[_?"unshift":"push"](()=>{h=_,t(4,h)})}return n.$$set=_=>{e=O(O({},e),ie(_)),t(8,c=V(e,s)),"use"in _&&t(0,i=_.use),"class"in _&&t(1,g=_.class),"style"in _&&t(2,f=_.style),"active"in _&&t(3,a=_.active)},[i,g,f,a,h,r,l,u,c,C,L,K,N,D]}class et extends de{constructor(e){super(),ce(this,e,ze,Qe,ne,{use:0,class:1,style:2,active:3,activate:9,deactivate:10,setRippleCenter:11,getElement:12})}get activate(){return this.$$.ctx[9]}get deactivate(){return this.$$.ctx[10]}get setRippleCenter(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function Ie(n){let e,t,s;const c=n[15].default,u=ae(c,n,n[14],null);return{c(){e=j("div"),u&&u.c(),this.h()},l(i){e=F(i,"DIV",{class:!0,style:!0});var g=M(e);u&&u.l(g),g.forEach(A),this.h()},h(){z(e,"class","mdc-notched-outline__notch"),z(e,"style",t=Object.entries(n[7]).map(Ne).join(" "))},m(i,g){G(i,e,g),u&&u.m(e,null),s=!0},p(i,g){u&&u.p&&(!s||g&16384)&&re(u,c,i,i[14],s?ue(c,i[14],g,null):oe(i[14]),null),(!s||g&128&&t!==(t=Object.entries(i[7]).map(Ne).join(" ")))&&z(e,"style",t)},i(i){s||(P(u,i),s=!0)},o(i){q(u,i),s=!1},d(i){i&&A(e),u&&u.d(i)}}}function Je(n){let e,t,s,c,u,i,g,f,a,h,m=!n[3]&&Ie(n),r=[{class:i=R({[n[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":n[2],"mdc-notched-outline--no-label":n[3],...n[6]})},n[10]],l={};for(let o=0;o<r.length;o+=1)l=O(l,r[o]);return{c(){e=j("div"),t=j("div"),s=Ee(),m&&m.c(),c=Ee(),u=j("div"),this.h()},l(o){e=F(o,"DIV",{class:!0});var b=M(e);t=F(b,"DIV",{class:!0}),M(t).forEach(A),s=be(b),m&&m.l(b),c=be(b),u=F(b,"DIV",{class:!0}),M(u).forEach(A),b.forEach(A),this.h()},h(){z(t,"class","mdc-notched-outline__leading"),z(u,"class","mdc-notched-outline__trailing"),H(e,l)},m(o,b){G(o,e,b),J(e,t),J(e,s),m&&m.m(e,null),J(e,c),J(e,u),n[16](e),f=!0,a||(h=[T(g=w.call(null,e,n[0])),T(n[8].call(null,e)),pe(e,"SMUIFloatingLabel:mount",n[9]),pe(e,"SMUIFloatingLabel:unmount",n[17])],a=!0)},p(o,[b]){o[3]?m&&(Oe(),q(m,1,1,()=>{m=null}),Pe()):m?(m.p(o,b),b&8&&P(m,1)):(m=Ie(o),m.c(),P(m,1),m.m(e,c)),H(e,l=x(r,[(!f||b&78&&i!==(i=R({[o[1]]:!0,"mdc-notched-outline":!0,"mdc-notched-outline--notched":o[2],"mdc-notched-outline--no-label":o[3],...o[6]})))&&{class:i},b&1024&&o[10]])),g&&Y(g.update)&&b&1&&g.update.call(null,o[0])},i(o){f||(P(m),f=!0)},o(o){q(m),f=!1},d(o){o&&A(e),m&&m.d(),n[16](null),a=!1,Z(h)}}}const Ne=([n,e])=>`${n}: ${e};`;function Xe(n,e,t){const s=["use","class","notched","noLabel","notch","closeNotch","getElement"];let c=V(e,s),{$$slots:u={},$$scope:i}=e;const g=fe(le());let{use:f=[]}=e,{class:a=""}=e,{notched:h=!1}=e,{noLabel:m=!1}=e,r,l,o,b={},p={};se(()=>(l=new Ue({addClass:C,removeClass:L,setNotchWidthProperty:E=>K("width",E+"px"),removeNotchWidthProperty:()=>N("width")}),l.init(),()=>{l.destroy()}));function v(E){t(4,o=E.detail)}function C(E){b[E]||t(6,b[E]=!0,b)}function L(E){(!(E in b)||b[E])&&t(6,b[E]=!1,b)}function K(E,B){p[E]!=B&&(B===""||B==null?(delete p[E],t(7,p)):t(7,p[E]=B,p))}function N(E){E in p&&(delete p[E],t(7,p))}function D(E){l.notch(E)}function _(){l.closeNotch()}function y(){return r}function $(E){X[E?"unshift":"push"](()=>{r=E,t(5,r)})}const ee=()=>t(4,o=void 0);return n.$$set=E=>{e=O(O({},e),ie(E)),t(10,c=V(e,s)),"use"in E&&t(0,f=E.use),"class"in E&&t(1,a=E.class),"notched"in E&&t(2,h=E.notched),"noLabel"in E&&t(3,m=E.noLabel),"$$scope"in E&&t(14,i=E.$$scope)},n.$$.update=()=>{n.$$.dirty&16&&(o?(o.addStyle("transition-duration","0s"),C("mdc-notched-outline--upgraded"),requestAnimationFrame(()=>{o&&o.removeStyle("transition-duration")})):L("mdc-notched-outline--upgraded"))},[f,a,h,m,o,r,b,p,g,v,c,D,_,y,i,u,$,ee]}class tt extends de{constructor(e){super(),ce(this,e,Xe,Je,ne,{use:0,class:1,notched:2,noLabel:3,notch:11,closeNotch:12,getElement:13})}get notch(){return this.$$.ctx[11]}get closeNotch(){return this.$$.ctx[12]}get getElement(){return this.$$.ctx[13]}}export{$e as F,et as L,tt as N};
