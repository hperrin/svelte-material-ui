/**
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
 */var E={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},A=new Set;A.add(E.BACKSPACE);A.add(E.ENTER);A.add(E.SPACEBAR);A.add(E.PAGE_UP);A.add(E.PAGE_DOWN);A.add(E.END);A.add(E.HOME);A.add(E.ARROW_LEFT);A.add(E.ARROW_UP);A.add(E.ARROW_RIGHT);A.add(E.ARROW_DOWN);A.add(E.DELETE);A.add(E.ESCAPE);A.add(E.TAB);var a={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},R=new Map;R.set(a.BACKSPACE,E.BACKSPACE);R.set(a.ENTER,E.ENTER);R.set(a.SPACEBAR,E.SPACEBAR);R.set(a.PAGE_UP,E.PAGE_UP);R.set(a.PAGE_DOWN,E.PAGE_DOWN);R.set(a.END,E.END);R.set(a.HOME,E.HOME);R.set(a.ARROW_LEFT,E.ARROW_LEFT);R.set(a.ARROW_UP,E.ARROW_UP);R.set(a.ARROW_RIGHT,E.ARROW_RIGHT);R.set(a.ARROW_DOWN,E.ARROW_DOWN);R.set(a.DELETE,E.DELETE);R.set(a.ESCAPE,E.ESCAPE);R.set(a.TAB,E.TAB);var d=new Set;d.add(E.PAGE_UP);d.add(E.PAGE_DOWN);d.add(E.END);d.add(E.HOME);d.add(E.ARROW_LEFT);d.add(E.ARROW_UP);d.add(E.ARROW_RIGHT);d.add(E.ARROW_DOWN);function W(e){var O=e.key;if(A.has(O))return O;var P=R.get(e.keyCode);return P||E.UNKNOWN}function _(e){return d.has(W(e))}export{E as K,_ as i,W as n};
