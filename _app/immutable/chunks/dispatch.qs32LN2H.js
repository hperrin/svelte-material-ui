import{t as C,d as A}from"./index.NFc0pX0t.js";import{r as W}from"./scheduler.Y0SF-lgF.js";function z(e){return e?.length!==void 0?e:Array.from(e)}function G(e,r){C(e,1,1,()=>{r.delete(e.key)})}function I(e,r,t,i,a,n,s,d,v,o,c,b){let h=e.length,p=n.length,y=h;const g={};for(;y--;)g[e[y].key]=y;const w=[],m=new Map,S=new Map,j=[];for(y=p;y--;){const u=b(a,n,y),l=t(u);let f=s.get(l);f?i&&j.push(()=>f.p(u,r)):(f=o(l,u),f.c()),m.set(l,w[y]=f),l in g&&S.set(l,Math.abs(y-g[l]))}const x=new Set,M=new Set;function E(u){A(u,1),u.m(d,c),s.set(u.key,u),c=u.first,p--}for(;h&&p;){const u=w[p-1],l=e[h-1],f=u.key,_=l.key;u===l?(c=u.first,h--,p--):m.has(_)?!s.has(f)||x.has(f)?E(u):M.has(_)?h--:S.get(f)>S.get(_)?(M.add(f),E(u)):(x.add(_),h--):(v(l,s),h--)}for(;h--;){const u=e[h];m.has(u.key)||v(u,s)}for(;p;)E(w[p-1]);return W(j),w}var O=function(e,r){return O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])},O(e,r)};function N(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");O(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var P=function(){return P=Object.assign||function(r){for(var t,i=1,a=arguments.length;i<a;i++){t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},P.apply(this,arguments)};function q(e,r,t,i){function a(n){return n instanceof t?n:new t(function(s){s(n)})}return new(t||(t=Promise))(function(n,s){function d(c){try{o(i.next(c))}catch(b){s(b)}}function v(c){try{o(i.throw(c))}catch(b){s(b)}}function o(c){c.done?n(c.value):a(c.value).then(d,v)}o((i=i.apply(e,r||[])).next())})}function B(e,r){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,a,n,s;return s={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function d(o){return function(c){return v([o,c])}}function v(o){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(t=0)),t;)try{if(i=1,a&&(n=o[0]&2?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[o[0]&2,n.value]),o[0]){case 0:case 1:n=o;break;case 4:return t.label++,{value:o[1],done:!1};case 5:t.label++,a=o[1],o=[0];continue;case 7:o=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!n||o[1]>n[0]&&o[1]<n[3])){t.label=o[1];break}if(o[0]===6&&t.label<n[1]){t.label=n[1],n=o;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(o);break}n[2]&&t.ops.pop(),t.trys.pop();continue}o=r.call(e,t)}catch(c){o=[6,c],a=0}finally{i=n=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}function H(e){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&e[r],i=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function J(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var i=t.call(e),a,n=[],s;try{for(;(r===void 0||r-- >0)&&!(a=i.next()).done;)n.push(a.value)}catch(d){s={error:d}}finally{try{a&&!a.done&&(t=i.return)&&t.call(i)}finally{if(s)throw s.error}}return n}function K(e,r,t){if(t||arguments.length===2)for(var i=0,a=r.length,n;i<a;i++)(n||!(i in r))&&(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return e.concat(n||Array.prototype.slice.call(r))}/**
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
 */var L=function(){function e(r){r===void 0&&(r={}),this.adapter=r}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();/**
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
 */function D(e,r){if(e.closest)return e.closest(r);for(var t=e;t;){if(k(t,r))return t;t=t.parentElement}return null}function k(e,r){var t=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return t.call(e,r)}function T(e){var r=e;if(r.offsetParent!==null)return r.scrollWidth;var t=r.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var i=t.scrollWidth;return document.documentElement.removeChild(t),i}const Q=Object.freeze(Object.defineProperty({__proto__:null,closest:D,estimateScrollWidth:T,matches:k},Symbol.toStringTag,{value:"Module"}));function R(e,r,t,i={bubbles:!0},a=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!e)throw new Error("Tried to dipatch event without element.");const n=new CustomEvent(r,Object.assign(Object.assign({},i),{detail:t}));if(e?.dispatchEvent(n),a&&r.startsWith("SMUI")){const s=new CustomEvent(r.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},i),{detail:t}));e?.dispatchEvent(s),s.defaultPrevented&&n.preventDefault()}return n}export{L as M,N as _,P as a,q as b,B as c,R as d,z as e,H as f,J as g,K as h,k as m,G as o,Q as p,I as u};
