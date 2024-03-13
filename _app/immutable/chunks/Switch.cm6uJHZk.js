import{s as Ee,i as Q,j as W,k as $,n as ne,r as ye,l as le,m as De,x as Se,o as we,p as Oe,b as ae}from"./scheduler.Y0SF-lgF.js";import{S as ke,i as Ie,g as R,s as V,h as L,j as M,f as w,c as z,E as he,k,F as X,a as ee,y as S,z as Me,C as H,D as q}from"./index.NFc0pX0t.js";import{c as Y,u as ve,g as ge,f as Pe}from"./useActions.v1s1ANSX.js";import{a as Re,f as J,_ as te,g as Le,h as Te,M as Fe,d as N}from"./dispatch.qs32LN2H.js";import{e as oe,p as ce}from"./prefixFilter.eMlqEcSK.js";import{R as Ue}from"./IconButton.vWaY4QCo.js";/**
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
 */var T;(function(s){s.PROCESSING="mdc-switch--processing",s.SELECTED="mdc-switch--selected",s.UNSELECTED="mdc-switch--unselected"})(T||(T={}));var ue;(function(s){s.RIPPLE=".mdc-switch__ripple"})(ue||(ue={}));/**
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
 */function Ae(s,e,t){var r=Ge(s,e),o=r.getObservers(e);return o.push(t),function(){o.splice(o.indexOf(t),1)}}var K=new WeakMap;function Ge(s,e){var t=new Map;K.has(s)||K.set(s,{isEnabled:!0,getObservers:function(u){var _=t.get(u)||[];return t.has(u)||t.set(u,_),_},installedProperties:new Set});var r=K.get(s);if(r.installedProperties.has(e))return r;var o=je(s,e)||{configurable:!0,enumerable:!0,value:s[e],writable:!0},a=Re({},o),h=o.get,b=o.set;if("value"in o){delete a.value,delete a.writable;var g=o.value;h=function(){return g},o.writable&&(b=function(u){g=u})}return h&&(a.get=function(){return h.call(this)}),b&&(a.set=function(u){var _,m,C=h?h.call(this):u;if(b.call(this,u),r.isEnabled&&(!h||u!==C))try{for(var c=J(r.getObservers(e)),n=c.next();!n.done;n=c.next()){var d=n.value;d(u,C)}}catch(v){_={error:v}}finally{try{n&&!n.done&&(m=c.return)&&m.call(c)}finally{if(_)throw _.error}}}),r.installedProperties.add(e),Object.defineProperty(s,e,a),r}function je(s,e){for(var t=s,r;t&&(r=Object.getOwnPropertyDescriptor(t,e),!r);)t=Object.getPrototypeOf(t);return r}function Be(s,e){var t=K.get(s);t&&(t.isEnabled=e)}/**
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
 */var Ve=function(s){te(e,s);function e(t){var r=s.call(this,t)||this;return r.unobserves=new Set,r}return e.prototype.destroy=function(){s.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,r){var o,a,h=this,b=[];try{for(var g=J(Object.keys(r)),u=g.next();!u.done;u=g.next()){var _=u.value,m=r[_].bind(this);b.push(this.observeProperty(t,_,m))}}catch(c){o={error:c}}finally{try{u&&!u.done&&(a=g.return)&&a.call(g)}finally{if(o)throw o.error}}var C=function(){var c,n;try{for(var d=J(b),v=d.next();!v.done;v=d.next()){var P=v.value;P()}}catch(p){c={error:p}}finally{try{v&&!v.done&&(n=d.return)&&n.call(d)}finally{if(c)throw c.error}}h.unobserves.delete(C)};return this.unobserves.add(C),C},e.prototype.observeProperty=function(t,r,o){return Ae(t,r,o)},e.prototype.setObserversEnabled=function(t,r){Be(t,r)},e.prototype.unobserve=function(){var t,r;try{for(var o=J(Te([],Le(this.unobserves))),a=o.next();!a.done;a=o.next()){var h=a.value;h()}}catch(b){t={error:b}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},e}(Fe);/**
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
 */var ze=function(s){te(e,s);function e(t){var r=s.call(this,t)||this;return r.handleClick=r.handleClick.bind(r),r}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(Ve),He=function(s){te(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.init=function(){s.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(T.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(T.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,T.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,T.SELECTED),this.toggleClass(!this.adapter.state.selected,T.UNSELECTED)},e.prototype.toggleClass=function(t,r){t?this.adapter.addClass(r):this.adapter.removeClass(r)},e}(ze);function de(s){let e,t,r,o,a,h,b,g,u,_,m=[{class:b=Y({[s[8]]:!0,"mdc-switch__icons":!0})},ce(s[19],"icons$")],C={};for(let c=0;c<m.length;c+=1)C=Q(C,m[c]);return{c(){e=R("div"),t=H("svg"),r=H("path"),o=V(),a=H("svg"),h=H("path"),this.h()},l(c){e=L(c,"DIV",{class:!0});var n=M(e);t=q(n,"svg",{class:!0,viewBox:!0});var d=M(t);r=q(d,"path",{d:!0}),M(r).forEach(w),d.forEach(w),o=z(n),a=q(n,"svg",{class:!0,viewBox:!0});var v=M(a);h=q(v,"path",{d:!0}),M(h).forEach(w),v.forEach(w),n.forEach(w),this.h()},h(){k(r,"d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"),k(t,"class","mdc-switch__icon mdc-switch__icon--on"),k(t,"viewBox","0 0 24 24"),k(h,"d","M20 13H4v-2h16v2z"),k(a,"class","mdc-switch__icon mdc-switch__icon--off"),k(a,"viewBox","0 0 24 24"),X(e,C)},m(c,n){ee(c,e,n),S(e,t),S(t,r),S(e,o),S(e,a),S(a,h),u||(_=W(g=ve.call(null,e,s[7])),u=!0)},p(c,n){X(e,C=ge(m,[n[0]&256&&b!==(b=Y({[c[8]]:!0,"mdc-switch__icons":!0}))&&{class:b},n[0]&524288&&ce(c[19],"icons$")])),g&&$(g.update)&&n[0]&128&&g.update.call(null,c[7])},d(c){c&&w(e),u=!1,_()}}}function fe(s){let e,t='<div class="mdc-switch__focus-ring"></div>';return{c(){e=R("div"),e.innerHTML=t,this.h()},l(r){e=L(r,"DIV",{class:!0,"data-svelte-h":!0}),he(e)!=="svelte-1dop874"&&(e.innerHTML=t),this.h()},h(){k(e,"class","mdc-switch__focus-ring-wrapper")},m(r,o){ee(r,e,o)},d(r){r&&w(e)}}}function qe(s){let e,t,r,o,a,h,b='<div class="mdc-elevation-overlay"></div>',g,u,_,m,C,c,n,d,v,P,p=s[6]&&de(s),E=s[4]&&fe(),F=[{class:C=Y({[s[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!s[10],"mdc-switch--selected":s[10],"mdc-switch--processing":s[1],"smui-switch--color-secondary":s[5]==="secondary",...s[12]})},{type:"button"},{role:"switch"},{"aria-checked":c=s[10]?"true":"false"},{disabled:s[0]},s[16],oe(s[19],["icons$"])],y={};for(let l=0;l<F.length;l+=1)y=Q(y,F[l]);return{c(){e=R("button"),t=R("div"),r=V(),o=R("div"),a=R("div"),h=R("div"),h.innerHTML=b,g=V(),u=R("div"),_=V(),p&&p.c(),m=V(),E&&E.c(),this.h()},l(l){e=L(l,"BUTTON",{class:!0,type:!0,role:!0,"aria-checked":!0});var f=M(e);t=L(f,"DIV",{class:!0}),M(t).forEach(w),r=z(f),o=L(f,"DIV",{class:!0});var U=M(o);a=L(U,"DIV",{class:!0});var I=M(a);h=L(I,"DIV",{class:!0,"data-svelte-h":!0}),he(h)!=="svelte-fnhar4"&&(h.innerHTML=b),g=z(I),u=L(I,"DIV",{class:!0}),M(u).forEach(w),_=z(I),p&&p.l(I),I.forEach(w),U.forEach(w),m=z(f),E&&E.l(f),f.forEach(w),this.h()},h(){k(t,"class","mdc-switch__track"),k(h,"class","mdc-switch__shadow"),k(u,"class","mdc-switch__ripple"),k(a,"class","mdc-switch__handle"),k(o,"class","mdc-switch__handle-track"),X(e,y)},m(l,f){ee(l,e,f),S(e,t),S(e,r),S(e,o),S(o,a),S(a,h),S(a,g),S(a,u),s[28](u),S(a,_),p&&p.m(a,null),S(e,m),E&&E.m(e,null),e.autofocus&&e.focus(),s[29](e),v||(P=[W(n=ve.call(null,e,s[2])),W(s[15].call(null,e)),W(d=Ue.call(null,e,{unbounded:!0,color:s[5],active:s[14],rippleElement:s[13],disabled:s[0],addClass:s[17],removeClass:s[18]})),Me(e,"click",s[30])],v=!0)},p(l,f){l[6]?p?p.p(l,f):(p=de(l),p.c(),p.m(a,null)):p&&(p.d(1),p=null),l[4]?E||(E=fe(),E.c(),E.m(e,null)):E&&(E.d(1),E=null),X(e,y=ge(F,[f[0]&5162&&C!==(C=Y({[l[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!l[10],"mdc-switch--selected":l[10],"mdc-switch--processing":l[1],"smui-switch--color-secondary":l[5]==="secondary",...l[12]}))&&{class:C},{type:"button"},{role:"switch"},f[0]&1024&&c!==(c=l[10]?"true":"false")&&{"aria-checked":c},f[0]&1&&{disabled:l[0]},l[16],f[0]&524288&&oe(l[19],["icons$"])])),n&&$(n.update)&&f[0]&4&&n.update.call(null,l[2]),d&&$(d.update)&&f[0]&24609&&d.update.call(null,{unbounded:!0,color:l[5],active:l[14],rippleElement:l[13],disabled:l[0],addClass:l[17],removeClass:l[18]})},i:ne,o:ne,d(l){l&&w(e),s[28](null),p&&p.d(),E&&E.d(),s[29](null),v=!1,ye(P)}}}function Ne(s,e,t){const r=["use","class","disabled","focusRing","color","group","checked","value","processing","icons","icons$use","icons$class","getId","getElement"];let o=le(e,r);var a;const h=Pe(De());let b=()=>{};function g(i){return i===b}let{use:u=[]}=e,{class:_=""}=e,{disabled:m=!1}=e,{focusRing:C=!1}=e,{color:c="primary"}=e,{group:n=b}=e,{checked:d=b}=e,{value:v=null}=e,{processing:P=!1}=e,{icons:p=!0}=e,{icons$use:E=[]}=e,{icons$class:F=""}=e,y,l,f={},U,I=!1,Z=(a=Se("SMUI:generic:input:props"))!==null&&a!==void 0?a:{},D=g(n)?g(d)?!1:d:n.indexOf(v)!==-1,G={get disabled(){return m},set disabled(i){t(0,m=i)},get processing(){return P},set processing(i){t(1,P=i)},get selected(){return D},set selected(i){t(10,D=i)}},j=d,B=g(n)?[]:[...n],A=D;we(()=>{t(11,l=new He({addClass:se,hasClass:pe,isDisabled:()=>m,removeClass:ie,setAriaChecked:()=>{},setDisabled:O=>{t(0,m=O)},state:G}));const i={get element(){return x()},get checked(){return D},set checked(O){D!==O&&(G.selected=O,y&&N(y,"SMUISwitch:change",{selected:O,value:v}))},activateRipple(){m||t(14,I=!0)},deactivateRipple(){t(14,I=!1)}};return N(y,"SMUIGenericInput:mount",i),l.init(),l.initFromDOM(),()=>{N(y,"SMUIGenericInput:unmount",i),l.destroy()}});function pe(i){return i in f?f[i]:x().classList.contains(i)}function se(i){f[i]||t(12,f[i]=!0,f)}function ie(i){(!(i in f)||f[i])&&t(12,f[i]=!1,f)}function be(){return Z&&Z.id}function x(){return y}function me(i){ae[i?"unshift":"push"](()=>{U=i,t(13,U)})}function _e(i){ae[i?"unshift":"push"](()=>{y=i,t(9,y)})}const Ce=()=>l&&l.handleClick();return s.$$set=i=>{e=Q(Q({},e),Oe(i)),t(19,o=le(e,r)),"use"in i&&t(2,u=i.use),"class"in i&&t(3,_=i.class),"disabled"in i&&t(0,m=i.disabled),"focusRing"in i&&t(4,C=i.focusRing),"color"in i&&t(5,c=i.color),"group"in i&&t(20,n=i.group),"checked"in i&&t(21,d=i.checked),"value"in i&&t(22,v=i.value),"processing"in i&&t(1,P=i.processing),"icons"in i&&t(6,p=i.icons),"icons$use"in i&&t(7,E=i.icons$use),"icons$class"in i&&t(8,F=i.icons$class)},s.$$.update=()=>{if(s.$$.dirty[0]&242222592){let i=!1;if(!g(n))if(A!==D){const O=n.indexOf(v);D&&O===-1?(n.push(v),t(20,n),t(27,A),t(10,D),t(22,v),t(26,B),t(21,d),t(25,j),t(9,y)):!D&&O!==-1&&(n.splice(O,1),t(20,n),t(27,A),t(10,D),t(22,v),t(26,B),t(21,d),t(25,j),t(9,y)),i=!0}else{const O=B.indexOf(v),re=n.indexOf(v);O>-1&&re===-1?G.selected=!1:re>-1&&O===-1&&(G.selected=!0)}g(d)?A!==D&&(i=!0):d!==D&&(d===j?(t(21,d=D),i=!0):G.selected=d),t(25,j=d),t(26,B=g(n)?[]:[...n]),t(27,A=D),i&&y&&N(y,"SMUISwitch:change",{selected:D,value:v})}},[m,P,u,_,C,c,p,E,F,y,D,l,f,U,I,h,Z,se,ie,o,n,d,v,be,x,j,B,A,me,_e,Ce]}class Ze extends ke{constructor(e){super(),Ie(this,e,Ne,qe,Ee,{use:2,class:3,disabled:0,focusRing:4,color:5,group:20,checked:21,value:22,processing:1,icons:6,icons$use:7,icons$class:8,getId:23,getElement:24},null,[-1,-1])}get getId(){return this.$$.ctx[23]}get getElement(){return this.$$.ctx[24]}}export{Ze as S};
