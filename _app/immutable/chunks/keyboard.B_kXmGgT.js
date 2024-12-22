import{S as C,Q as i,F as o,P as f,G as N,B as h,J as G,C as S,E as m,A as v,a5 as l}from"./runtime.W_ZEMHic.js";import{d as T,e as B}from"./disclose-version.L5AxZWdJ.js";function K(r,_,O,c,p){var P=r,t="",s;C(()=>{if(t===(t=_()??"")){i&&o();return}s!==void 0&&(l(s),s=void 0),t!==""&&(s=f(()=>{if(i){N.data;for(var d=o(),W=d;d!==null&&(d.nodeType!==8||d.data!=="");)W=d,d=h(d);if(d===null)throw G(),S;T(N,W),P=m(d);return}var D=t+"",n=B(D);T(v(n),n.lastChild),P.before(n)}))})}/**
 * @license
 * Copyright 2020 Google Inc.
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
 */var a={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},E=new Set;E.add(a.BACKSPACE);E.add(a.ENTER);E.add(a.SPACEBAR);E.add(a.PAGE_UP);E.add(a.PAGE_DOWN);E.add(a.END);E.add(a.HOME);E.add(a.ARROW_LEFT);E.add(a.ARROW_UP);E.add(a.ARROW_RIGHT);E.add(a.ARROW_DOWN);E.add(a.DELETE);E.add(a.ESCAPE);E.add(a.TAB);var A={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},e=new Map;e.set(A.BACKSPACE,a.BACKSPACE);e.set(A.ENTER,a.ENTER);e.set(A.SPACEBAR,a.SPACEBAR);e.set(A.PAGE_UP,a.PAGE_UP);e.set(A.PAGE_DOWN,a.PAGE_DOWN);e.set(A.END,a.END);e.set(A.HOME,a.HOME);e.set(A.ARROW_LEFT,a.ARROW_LEFT);e.set(A.ARROW_UP,a.ARROW_UP);e.set(A.ARROW_RIGHT,a.ARROW_RIGHT);e.set(A.ARROW_DOWN,a.ARROW_DOWN);e.set(A.DELETE,a.DELETE);e.set(A.ESCAPE,a.ESCAPE);e.set(A.TAB,a.TAB);var R=new Set;R.add(a.PAGE_UP);R.add(a.PAGE_DOWN);R.add(a.END);R.add(a.HOME);R.add(a.ARROW_LEFT);R.add(a.ARROW_UP);R.add(a.ARROW_RIGHT);R.add(a.ARROW_DOWN);function U(r){var _=r.key;if(E.has(_))return _;var O=e.get(r.keyCode);return O||a.UNKNOWN}function g(r){return R.has(U(r))}export{a as K,K as h,g as i,U as n};
