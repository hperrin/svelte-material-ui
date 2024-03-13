import{s as U,i as b,j as M,k as q,r as B,l as P,m as W,o as z,p as J,b as K,n as H,f as Q,u as Y,g as Z,h as w}from"./scheduler.Y0SF-lgF.js";import{S as $,i as ee,g as te,h as se,j as ne,f as C,F as O,a as x,p as ie,t as S,b as re,d as L,m as le,n as ae,o as oe}from"./index.NFc0pX0t.js";import{c as D,u as ue,g as de,f as fe}from"./useActions.v1s1ANSX.js";import{_ as ce,a as y,M as _e,d as v}from"./dispatch.qs32LN2H.js";/**
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
 */var f={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},_={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+f.ROOT};/**
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
 */var he=function(r){ce(e,r);function e(t){return r.call(this,y(y({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!1,configurable:!0}),e.prototype.getId=function(){return this.adapter.getAttr("id")},e.prototype.isVisible=function(){return this.adapter.getAttr(_.ARIA_HIDDEN)!=="true"},e.prototype.setContent=function(t){this.adapter.setContent(t)},e.prototype.isPersistent=function(){return this.adapter.hasClass(f.HELPER_TEXT_PERSISTENT)},e.prototype.setPersistent=function(t){t?this.adapter.addClass(f.HELPER_TEXT_PERSISTENT):this.adapter.removeClass(f.HELPER_TEXT_PERSISTENT)},e.prototype.isValidation=function(){return this.adapter.hasClass(f.HELPER_TEXT_VALIDATION_MSG)},e.prototype.setValidation=function(t){t?this.adapter.addClass(f.HELPER_TEXT_VALIDATION_MSG):this.adapter.removeClass(f.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter.removeAttr(_.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var i=this.adapter.hasClass(f.HELPER_TEXT_PERSISTENT),a=this.adapter.hasClass(f.HELPER_TEXT_VALIDATION_MSG),o=a&&!t;o?(this.showToScreenReader(),this.adapter.getAttr(_.ROLE)==="alert"?this.refreshAlertRole():this.adapter.setAttr(_.ROLE,"alert")):this.adapter.removeAttr(_.ROLE),!i&&!o&&this.hide()},e.prototype.hide=function(){this.adapter.setAttr(_.ARIA_HIDDEN,"true")},e.prototype.refreshAlertRole=function(){var t=this;this.adapter.removeAttr(_.ROLE),requestAnimationFrame(function(){t.adapter.setAttr(_.ROLE,"alert")})},e}(_e);function pe(r){let e;return{c(){e=le(r[8])},l(t){e=ae(t,r[8])},m(t,i){x(t,e,i)},p(t,i){i&256&&oe(e,t[8])},i:H,o:H,d(t){t&&C(e)}}}function Ee(r){let e;const t=r[13].default,i=Q(t,r,r[12],null);return{c(){i&&i.c()},l(a){i&&i.l(a)},m(a,o){i&&i.m(a,o),e=!0},p(a,o){i&&i.p&&(!e||o&4096)&&Y(i,t,a,a[12],e?w(t,a[12],o,null):Z(a[12]),null)},i(a){e||(L(i,a),e=!0)},o(a){S(i,a),e=!1},d(a){i&&i.d(a)}}}function Te(r){let e,t,i,a,o,p,c,T,R;const E=[Ee,pe],u=[];function I(n,l){return n[8]==null?0:1}t=I(r),i=u[t]=E[t](r);let h=[{class:a=D({[r[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":r[3],"mdc-text-field-helper-text--validation-msg":r[4],...r[6]})},{"aria-hidden":o=r[3]?void 0:"true"},{id:r[2]},r[7],r[10]],d={};for(let n=0;n<h.length;n+=1)d=b(d,h[n]);return{c(){e=te("div"),i.c(),this.h()},l(n){e=se(n,"DIV",{class:!0,"aria-hidden":!0,id:!0});var l=ne(e);i.l(l),l.forEach(C),this.h()},h(){O(e,d)},m(n,l){x(n,e,l),u[t].m(e,null),r[14](e),c=!0,T||(R=[M(p=ue.call(null,e,r[0])),M(r[9].call(null,e))],T=!0)},p(n,[l]){let m=t;t=I(n),t===m?u[t].p(n,l):(ie(),S(u[m],1,1,()=>{u[m]=null}),re(),i=u[t],i?i.p(n,l):(i=u[t]=E[t](n),i.c()),L(i,1),i.m(e,null)),O(e,d=de(h,[(!c||l&90&&a!==(a=D({[n[1]]:!0,"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":n[3],"mdc-text-field-helper-text--validation-msg":n[4],...n[6]})))&&{class:a},(!c||l&8&&o!==(o=n[3]?void 0:"true"))&&{"aria-hidden":o},(!c||l&4)&&{id:n[2]},l&128&&n[7],l&1024&&n[10]])),p&&q(p.update)&&l&1&&p.update.call(null,n[0])},i(n){c||(L(i),c=!0)},o(n){S(i),c=!1},d(n){n&&C(e),u[t].d(),r[14](null),T=!1,B(R)}}}let me=0;function ge(r,e,t){const i=["use","class","id","persistent","validationMsg","getElement"];let a=P(e,i),{$$slots:o={},$$scope:p}=e;const c=fe(W());let{use:T=[]}=e,{class:R=""}=e,{id:E="SMUI-textfield-helper-text-"+me++}=e,{persistent:u=!1}=e,{validationMsg:I=!1}=e,h,d,n={},l={},m;z(()=>(d=new he({addClass:N,removeClass:V,hasClass:k,getAttr:X,setAttr:F,removeAttr:j,setContent:s=>{t(8,m=s)}}),E.startsWith("SMUI-textfield-helper-text-")&&v(g(),"SMUITextfieldHelperText:id",E),v(g(),"SMUITextfieldHelperText:mount",d),d.init(),()=>{v(g(),"SMUITextfieldHelperText:unmount",d),d.destroy()}));function k(s){return s in n?n[s]:g().classList.contains(s)}function N(s){n[s]||t(6,n[s]=!0,n)}function V(s){(!(s in n)||n[s])&&t(6,n[s]=!1,n)}function X(s){var A;return s in l?(A=l[s])!==null&&A!==void 0?A:null:g().getAttribute(s)}function F(s,A){l[s]!==A&&t(7,l[s]=A,l)}function j(s){(!(s in l)||l[s]!=null)&&t(7,l[s]=void 0,l)}function g(){return h}function G(s){K[s?"unshift":"push"](()=>{h=s,t(5,h)})}return r.$$set=s=>{e=b(b({},e),J(s)),t(10,a=P(e,i)),"use"in s&&t(0,T=s.use),"class"in s&&t(1,R=s.class),"id"in s&&t(2,E=s.id),"persistent"in s&&t(3,u=s.persistent),"validationMsg"in s&&t(4,I=s.validationMsg),"$$scope"in s&&t(12,p=s.$$scope)},[T,R,E,u,I,h,n,l,m,c,a,g,p,o,G]}class be extends ${constructor(e){super(),ee(this,e,ge,Te,U,{use:0,class:1,id:2,persistent:3,validationMsg:4,getElement:11})}get getElement(){return this.$$.ctx[11]}}export{be as H};
