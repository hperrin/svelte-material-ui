import{t as l,y as N,z as T,Z as h,_ as v,F as D,a0 as G,a1 as S,a2 as U,a3 as c,a4 as C,a5 as B,a6 as m,a7 as i}from"./BwguTo01.js";function K(r,n,s=!1,o=!1,u=!1){var W=r,P="";l(()=>{var t=h;if(P===(P=n()??"")){N&&T();return}if(t.nodes_start!==null&&(v(t.nodes_start,t.nodes_end),t.nodes_start=t.nodes_end=null),P!==""){if(N){D.data;for(var A=T(),f=A;A!==null&&(A.nodeType!==G||A.data!=="");)f=A,A=S(A);if(A===null)throw U(),c;C(D,f),W=B(A);return}var O=P+"";s?O=`<svg>${O}</svg>`:o&&(O=`<math>${O}</math>`);var _=m(O);if((s||o)&&(_=i(_)),C(i(_),_.lastChild),s||o)for(;i(_);)W.before(i(_));else W.before(_)}})}/**
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
 */var a={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},e=new Set;e.add(a.BACKSPACE);e.add(a.ENTER);e.add(a.SPACEBAR);e.add(a.PAGE_UP);e.add(a.PAGE_DOWN);e.add(a.END);e.add(a.HOME);e.add(a.ARROW_LEFT);e.add(a.ARROW_UP);e.add(a.ARROW_RIGHT);e.add(a.ARROW_DOWN);e.add(a.DELETE);e.add(a.ESCAPE);e.add(a.TAB);var d={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},E=new Map;E.set(d.BACKSPACE,a.BACKSPACE);E.set(d.ENTER,a.ENTER);E.set(d.SPACEBAR,a.SPACEBAR);E.set(d.PAGE_UP,a.PAGE_UP);E.set(d.PAGE_DOWN,a.PAGE_DOWN);E.set(d.END,a.END);E.set(d.HOME,a.HOME);E.set(d.ARROW_LEFT,a.ARROW_LEFT);E.set(d.ARROW_UP,a.ARROW_UP);E.set(d.ARROW_RIGHT,a.ARROW_RIGHT);E.set(d.ARROW_DOWN,a.ARROW_DOWN);E.set(d.DELETE,a.DELETE);E.set(d.ESCAPE,a.ESCAPE);E.set(d.TAB,a.TAB);var R=new Set;R.add(a.PAGE_UP);R.add(a.PAGE_DOWN);R.add(a.END);R.add(a.HOME);R.add(a.ARROW_LEFT);R.add(a.ARROW_UP);R.add(a.ARROW_RIGHT);R.add(a.ARROW_DOWN);function p(r){var n=r.key;if(e.has(n))return n;var s=E.get(r.keyCode);return s||a.UNKNOWN}function w(r){return R.has(p(r))}export{a as K,K as h,w as i,p as n};
