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
 */var r="mdc-dom-focus-sentinel",c=function(){function n(e,i){i===void 0&&(i={}),this.root=e,this.options=i,this.elFocusedBeforeTrapFocus=null}return n.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},n.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+r)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},n.prototype.wrapTabFocus=function(e){var i=this,t=this.createSentinel(),s=this.createSentinel();t.addEventListener("focus",function(){var o=i.getFocusableElements(e);o.length>0&&o[o.length-1].focus()}),s.addEventListener("focus",function(){var o=i.getFocusableElements(e);o.length>0&&o[0].focus()}),e.insertBefore(t,e.children[0]),e.appendChild(s)},n.prototype.focusInitialElement=function(e,i){var t=0;i&&(t=Math.max(e.indexOf(i),0)),e[t].focus()},n.prototype.getFocusableElements=function(e){var i=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return i.filter(function(t){var s=t.getAttribute("aria-disabled")==="true"||t.getAttribute("disabled")!=null||t.getAttribute("hidden")!=null||t.getAttribute("aria-hidden")==="true",o=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains(r)&&!s,a=!1;if(o){var u=getComputedStyle(t);a=u.display==="none"||u.visibility==="hidden"}return o&&!a})},n.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(r),e},n}();const l=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:c},Symbol.toStringTag,{value:"Module"}));export{l as d};
