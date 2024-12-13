import{a as S,t as U,c as Ot,b as P}from"../chunks/disclose-version.B3RRTx8Z.js";import"../chunks/legacy.DjbHF6v5.js";import{p as Wt,b as F,u as Dt,g as a,h as L,S as de,c as W,n as J,r as $,t as H,a as $t,d as K,k as Nt,e as Lt,f as it,s as V,i as R,av as ue,$ as fe}from"../chunks/runtime.DwlehcF5.js";import{h as he}from"../chunks/svelte-head.D-HkJy3f.js";import{D as St}from"../chunks/Demo.Bfwjb-lf.js";import{s as q}from"../chunks/render.DfrYEMuQ.js";import{p as C,a as I,o as Ht,b as Z,r as Ut,s as Jt,i as xt}from"../chunks/index-client.BDIqpeZ8.js";import{_ as lt,a as ht,M as Yt,d as re,f as ve,p as me,e as ne,i as ge}from"../chunks/dispatch.CwJSP0lB.js";import{s as wt,b as At,u as Tt,d as Ct,c as ft}from"../chunks/useActions.dWwaU660.js";import{c as pe}from"../chunks/svelte-component.D6MkyJ-E.js";import{e as kt,p as Pt}from"../chunks/prefixFilter.OhiPYEKz.js";import{R as be}from"../chunks/IconButton.CkPA9NQ0.js";import{S as Se}from"../chunks/SmuiElement.BnumFtpb.js";import{C as vt}from"../chunks/CommonLabel.5WGQzEOd.js";import{B as Ae}from"../chunks/Button.C8xi94DV.js";import{P as Gt}from"../chunks/Paper.i95GTKhE.js";import{C as zt}from"../chunks/Content.DRfd3rp3.js";import{C as ae}from"../chunks/Svg.D6p-_t7C.js";import{i as Te}from"../chunks/lifecycle.BF7I3Ruh.js";/**
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
 */var Ce={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},_e={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var ot=function(f){lt(t,f);function t(e){return f.call(this,ht(ht({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return Ce},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return _e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),t.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},t}(Yt);/**
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
 */var Ie=function(f){lt(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.activate=function(){this.adapter.addClass(ot.cssClasses.ACTIVE)},t.prototype.deactivate=function(){this.adapter.removeClass(ot.cssClasses.ACTIVE)},t}(ot);/**
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
 */var ee=function(f){lt(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.activate=function(e){if(!e){this.adapter.addClass(ot.cssClasses.ACTIVE);return}var r=this.computeContentClientRect(),n=e.width/r.width,o=e.left-r.left;this.adapter.addClass(ot.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+o+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter.removeClass(ot.cssClasses.NO_TRANSITION),this.adapter.addClass(ot.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},t.prototype.deactivate=function(){this.adapter.removeClass(ot.cssClasses.ACTIVE)},t}(ot);/**
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
 */var Vt={ACTIVE:"mdc-tab--active"},Mt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var ye=function(f){lt(t,f);function t(e){var r=f.call(this,ht(ht({},t.defaultAdapter),e))||this;return r.focusOnActivate=!0,r}return Object.defineProperty(t,"cssClasses",{get:function(){return Vt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.handleClick=function(){this.adapter.notifyInteracted()},t.prototype.isActive=function(){return this.adapter.hasClass(Vt.ACTIVE)},t.prototype.setFocusOnActivate=function(e){this.focusOnActivate=e},t.prototype.activate=function(e){this.adapter.addClass(Vt.ACTIVE),this.adapter.setAttr(Mt.ARIA_SELECTED,"true"),this.adapter.setAttr(Mt.TABINDEX,"0"),this.adapter.activateIndicator(e),this.focusOnActivate&&this.adapter.focus()},t.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(Vt.ACTIVE),this.adapter.setAttr(Mt.ARIA_SELECTED,"false"),this.adapter.setAttr(Mt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},t.prototype.computeDimensions=function(){var e=this.adapter.getOffsetWidth(),r=this.adapter.getOffsetLeft(),n=this.adapter.getContentOffsetWidth(),o=this.adapter.getContentOffsetLeft();return{contentLeft:r+o,contentRight:r+o+n,rootLeft:r,rootRight:r+e}},t}(Yt),Ee=U("<span><span><!></span></span>");function Re(f,t){Wt(t,!0);let e=C(t,"use",19,()=>[]),r=C(t,"class",3,""),n=C(t,"active",15,!1),o=C(t,"type",3,"underline"),d=C(t,"transition",3,"slide"),p=C(t,"content$use",19,()=>[]),m=C(t,"content$class",3,""),c=Ut(t,["$$slots","$$events","$$legacy","use","class","active","type","transition","content$use","content$class","children"]),g,h=F(void 0),v,b=F(I({})),y=F(I({})),A=I([]),x=d();Dt(()=>{x!==d()&&(x=d(),a(h)&&a(h).destroy(),L(b,I({})),L(y,I({})),L(h,I(T())),a(h).init())}),de(()=>{A.length&&requestAnimationFrame(()=>{const i=A.shift()??[];for(const _ of i)_()})}),Ht(()=>(L(h,I(T())),a(h).init(),()=>{var i;(i=a(h))==null||i.destroy()}));function T(){const i={fade:Ie,slide:ee}[d()]||ee;return new i({addClass:(..._)=>O(()=>Y(..._)),removeClass:(..._)=>O(()=>M(..._)),computeContentClientRect:k,setContentStyleProperty:(..._)=>O(()=>Q(..._))})}function O(i){A.length?A[A.length-1].push(i):i()}function Y(i){a(b)[i]||(a(b)[i]=!0)}function M(i){(!(i in a(b))||a(b)[i])&&(a(b)[i]=!1)}function Q(i,_){a(y)[i]!=_&&(_===""||_==null?delete a(y)[i]:a(y)[i]=_)}function tt(i){var _;n(!0),(_=a(h))==null||_.activate(i)}function st(){var i;n(!1),(i=a(h))==null||i.deactivate()}function k(){return A.push([]),v.getBoundingClientRect()}function w(){return g}var j=Ee();const et=K(()=>kt(c,["content$"]));let rt;var B=W(j);const X=K(()=>Pt(c,"content$"));let nt;var l=W(B);return wt(l,()=>t.children??J),$(B),Z(B,i=>v=i,()=>v),At(B,(i,_)=>Tt(i,_),p),$(j),Z(j,i=>g=i,()=>g),At(j,(i,_)=>Tt(i,_),e),H(()=>{rt=Ct(j,rt,{class:ft({[r()]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":n(),"mdc-tab-indicator--fade":d()==="fade",...a(b)}),...a(et)}),nt=Ct(B,nt,{class:ft({[m()]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":o()==="underline","mdc-tab-indicator__content--icon":o()==="icon"}),style:Object.entries(a(y)).map(([i,_])=>`${i}: ${_};`).join(" "),"aria-hidden":o()==="icon"?"true":void 0,...a(X)})}),S(f,j),$t({activate:tt,deactivate:st,computeContentClientRect:k,getElement:w})}var Le=U('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>',1);function _t(f,t){Wt(t,!0);const e=s=>{var E=K(()=>Pt(A,"tabIndicator$"));Z(Re(s,Jt({get active(){return a(w)},set active(N){L(w,I(N))}},()=>a(E),{children:(N,pt)=>{var dt=Ot(),ut=it(dt);wt(ut,()=>t.tabIndicator??J),S(N,dt)},$$slots:{default:!0}})),N=>Y=N,()=>Y)};let r=C(t,"use",19,()=>[]),n=C(t,"class",3,""),o=C(t,"style",3,""),d=C(t,"ripple",3,!0),p=C(t,"stacked",3,!1),m=C(t,"minWidth",3,!1),c=C(t,"indicatorSpanOnlyContent",3,!1),g=C(t,"href",3,void 0),h=C(t,"content$use",19,()=>[]),v=C(t,"content$class",3,""),b=C(t,"component",3,Se),y=C(t,"tag",19,()=>g()==null?"button":"a"),A=Ut(t,["$$slots","$$events","$$legacy","use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","children","tabIndicator"]),x,T=F(void 0),O,Y,M=I({}),Q=I({}),tt=I({}),st=Nt("SMUI:tab:focusOnActivate");const k=Nt("SMUI:tab:initialActive");let w=F(I(k.active!=null&&k.key(t.tab)===k.active)),j=F(!1);if(Lt("SMUI:label:context","tab"),Lt("SMUI:icon:context","tab"),!t.tab)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");let et=!1;Dt(()=>{if(!a(T)){et=!1;return}et||(et=!0,a(T).setFocusOnActivate(st))});const rt=Nt("SMUI:tab:mount"),B=Nt("SMUI:tab:unmount");Ht(()=>{L(T,I(new ye({setAttr:_,addClass:nt,removeClass:l,hasClass:X,activateIndicator:E=>Y.activate(E),deactivateIndicator:()=>Y.deactivate(),notifyInteracted:()=>re(G(),"SMUITabInteracted",{tabId:t.tab}),getOffsetLeft:()=>G().offsetLeft,getOffsetWidth:()=>G().offsetWidth,getContentOffsetLeft:()=>O.offsetLeft,getContentOffsetWidth:()=>O.offsetWidth,focus:mt})));const s={tabId:t.tab,get element(){return G()},get active(){return a(w)},forceAccessible(E){L(j,I(E))},computeIndicatorClientRect:()=>Y.computeContentClientRect(),computeDimensions:()=>{if(a(T)==null)throw new Error("Instance is undefined.");return a(T).computeDimensions()},focus:mt,activate:at,deactivate:ct};return rt&&rt(s),a(T).init(),()=>{var E;B&&B(s),(E=a(T))==null||E.destroy()}});function X(s){return s in M?M[s]:G().classList.contains(s)}function nt(s){M[s]||(M[s]=!0)}function l(s){(!(s in M)||M[s])&&(M[s]=!1)}function i(s,E){Q[s]!=E&&(E===""||E==null?delete Q[s]:Q[s]=E)}function _(s,E){tt[s]!==E&&(tt[s]=E)}function at(s,E){var N,pt,dt;L(w,!0),E&&((N=a(T))==null||N.setFocusOnActivate(!1)),(pt=a(T))==null||pt.activate(s),E&&((dt=a(T))==null||dt.setFocusOnActivate(st))}function ct(){var s;L(w,!1),(s=a(T))==null||s.deactivate()}function mt(){G().focus()}function G(){return x.getElement()}var Rt=Ot(),Kt=it(Rt),gt=K(()=>[[be,{ripple:d(),unbounded:!1,addClass:nt,removeClass:l,addStyle:i}],...r()]),jt=K(()=>ft({[n()]:!0,"mdc-tab":!0,"mdc-tab--active":a(w),"mdc-tab--stacked":p(),"mdc-tab--min-width":m(),...M})),Bt=K(()=>Object.entries(Q).map(([s,E])=>`${s}: ${E};`).concat([o()]).join(" ")),Ft=K(()=>a(w)?"true":"false"),Xt=K(()=>a(w)||a(j)?"0":"-1"),u=K(()=>kt(A,["content$","tabIndicator$"]));return pe(Kt,b,(s,E)=>{Z(E(s,Jt({get tag(){return y()},get use(){return a(gt)},get class(){return a(jt)},get style(){return a(Bt)},role:"tab",get"aria-selected"(){return a(Ft)},get tabindex(){return a(Xt)},get href(){return g()}},()=>tt,()=>a(u),{onclick:N=>{var pt;(pt=t.onclick)==null||pt.call(t,N),!N.defaultPrevented&&a(T)&&a(T).handleClick()},children:(N,pt)=>{var dt=Le(),ut=it(dt);const ie=K(()=>Pt(A,"content$"));let Zt;var te=W(ut);wt(te,()=>t.children??J);var le=V(te,2);xt(le,c,bt=>{e(bt)}),$(ut),Z(ut,bt=>O=bt,()=>O),At(ut,(bt,ce)=>Tt(bt,ce),h);var se=V(ut,2);xt(se,()=>!c(),bt=>{e(bt)}),R(2),H(()=>Zt=Ct(ut,Zt,{class:ft({[v()]:!0,"mdc-tab__content":!0}),...a(ie)})),S(N,dt)},$$slots:{default:!0}})),N=>x=N,()=>x)}),S(f,Rt),$t({activate:at,deactivate:ct,focus:mt,getElement:G})}/**
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
 */var oe={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},Oe={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var Qt=function(){function f(t){this.adapter=t}return f}();/**
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
 */var Pe=function(f){lt(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(){var e=this.adapter.getScrollAreaScrollLeft(),r=this.calculateScrollEdges().right;return Math.round(r-e)},t.prototype.scrollToRTL=function(e){var r=this.calculateScrollEdges(),n=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue(r.right-e);return{finalScrollPosition:o,scrollDelta:o-n}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-e);return{finalScrollPosition:n,scrollDelta:n-r}},t.prototype.getAnimatingScrollPosition=function(e){return e},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-r}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,e),r.right)},t}(Qt);/**
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
 */var Me=function(f){lt(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(e-r)},t.prototype.scrollToRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(-e);return{finalScrollPosition:n,scrollDelta:n-r}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-e);return{finalScrollPosition:n,scrollDelta:n-r}},t.prototype.getAnimatingScrollPosition=function(e,r){return e-r},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:r-e,right:0}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.max(Math.min(r.right,e),r.left)},t}(Qt);/**
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
 */var De=function(f){lt(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(r-e)},t.prototype.scrollToRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e);return{finalScrollPosition:n,scrollDelta:r-n}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r+e);return{finalScrollPosition:n,scrollDelta:r-n}},t.prototype.getAnimatingScrollPosition=function(e,r){return e+r},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:e-r,right:0}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.right,e),r.left)},t}(Qt);/**
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
 */var xe=function(f){lt(t,f);function t(e){var r=f.call(this,ht(ht({},t.defaultAdapter),e))||this;return r.isAnimating=!1,r}return Object.defineProperty(t,"cssClasses",{get:function(){return oe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Oe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-e+"px"),this.adapter.addScrollAreaClass(t.cssClasses.SCROLL_AREA_SCROLL)},t.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var e=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return r-e},t.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},t.prototype.handleTransitionEnd=function(e){var r=e.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(r,t.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(t.cssClasses.ANIMATING))},t.prototype.incrementScroll=function(e){e!==0&&this.animate(this.getIncrementScrollOperation(e))},t.prototype.incrementScrollImmediate=function(e){if(e!==0){var r=this.getIncrementScrollOperation(e);r.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition))}},t.prototype.scrollTo=function(e){if(this.isRTL()){this.scrollToImplRTL(e);return}this.scrollToImpl(e)},t.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},t.prototype.calculateCurrentTranslateX=function(){var e=this.adapter.getScrollContentStyleValue("transform");if(e==="none")return 0;var r=/\((.+?)\)/.exec(e);if(!r)return 0;var n=r[1],o=ve(n.split(","),6);o[0],o[1],o[2],o[3];var d=o[4];return o[5],parseFloat(d)},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,e),r.right)},t.prototype.computeCurrentScrollPositionRTL=function(){var e=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(e)},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-r}},t.prototype.scrollToImpl=function(e){var r=this.getScrollPosition(),n=this.clampScrollValue(e),o=n-r;this.animate({finalScrollPosition:n,scrollDelta:o})},t.prototype.scrollToImplRTL=function(e){var r=this.getRTLScroller().scrollToRTL(e);this.animate(r)},t.prototype.getIncrementScrollOperation=function(e){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(e);var r=this.getScrollPosition(),n=e+r,o=this.clampScrollValue(n),d=o-r;return{finalScrollPosition:o,scrollDelta:d}},t.prototype.animate=function(e){var r=this;e.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+e.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){r.adapter.addClass(t.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},t.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var e=this.getAnimatingScrollPosition();this.adapter.removeClass(t.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(e)},t.prototype.getAnimatingScrollPosition=function(){var e=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(r,e):r-e},t.prototype.rtlScrollerFactory=function(){var e=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(e-1);var r=this.adapter.getScrollAreaScrollLeft();if(r<0)return this.adapter.setScrollAreaScrollLeft(e),new Me(this.adapter);var n=this.adapter.computeScrollAreaClientRect(),o=this.adapter.computeScrollContentClientRect(),d=Math.round(o.right-n.right);return this.adapter.setScrollAreaScrollLeft(e),d===r?new De(this.adapter):new Pe(this.adapter)},t.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},t}(Yt);/**
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
 */var qt;function we(f,t){if(t===void 0&&(t=!0),t&&typeof qt<"u")return qt;var e=f.createElement("div");e.classList.add(oe.SCROLL_TEST),f.body.appendChild(e);var r=e.offsetHeight-e.clientHeight;return f.body.removeChild(e),t&&(qt=r),r}/**
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
 */var D={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},z={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var It=new Set;It.add(D.ARROW_LEFT_KEY);It.add(D.ARROW_RIGHT_KEY);It.add(D.END_KEY);It.add(D.HOME_KEY);It.add(D.ENTER_KEY);It.add(D.SPACE_KEY);var yt=new Map;yt.set(z.ARROW_LEFT_KEYCODE,D.ARROW_LEFT_KEY);yt.set(z.ARROW_RIGHT_KEYCODE,D.ARROW_RIGHT_KEY);yt.set(z.END_KEYCODE,D.END_KEY);yt.set(z.HOME_KEYCODE,D.HOME_KEY);yt.set(z.ENTER_KEYCODE,D.ENTER_KEY);yt.set(z.SPACE_KEYCODE,D.SPACE_KEY);var We=function(f){lt(t,f);function t(e){var r=f.call(this,ht(ht({},t.defaultAdapter),e))||this;return r.useAutomaticActivation=!1,r}return Object.defineProperty(t,"strings",{get:function(){return D},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return z},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setUseAutomaticActivation=function(e){this.useAutomaticActivation=e},t.prototype.activateTab=function(e){var r=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(e)||e===r)){var n;r!==-1&&(this.adapter.deactivateTabAtIndex(r),n=this.adapter.getTabIndicatorClientRectAtIndex(r)),this.adapter.activateTabAtIndex(e,n),this.scrollIntoView(e),this.adapter.notifyTabActivated(e)}},t.prototype.handleKeyDown=function(e){var r=this.getKeyFromEvent(e);if(r!==void 0)if(this.isActivationKey(r)||e.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(r))return;var n=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),r);this.adapter.setActiveTab(n),this.scrollIntoView(n)}else{var o=this.adapter.getFocusedTabIndex();if(this.isActivationKey(r))this.adapter.setActiveTab(o);else{var n=this.determineTargetFromKey(o,r);this.adapter.focusTabAtIndex(n),this.scrollIntoView(n)}}},t.prototype.handleTabInteraction=function(e){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId))},t.prototype.scrollIntoView=function(e){if(this.indexIsInRange(e)){if(e===0){this.adapter.scrollTo(0);return}if(e===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(e);return}this.scrollIntoViewImpl(e)}},t.prototype.determineTargetFromKey=function(e,r){var n=this.isRTL(),o=this.adapter.getTabListLength()-1,d=r===D.END_KEY,p=r===D.ARROW_LEFT_KEY&&!n||r===D.ARROW_RIGHT_KEY&&n,m=r===D.ARROW_RIGHT_KEY&&!n||r===D.ARROW_LEFT_KEY&&n,c=e;return d?c=o:p?c-=1:m?c+=1:c=0,c<0?c=o:c>o&&(c=0),c},t.prototype.calculateScrollIncrement=function(e,r,n,o){var d=this.adapter.getTabDimensionsAtIndex(r),p=d.contentLeft-n-o,m=d.contentRight-n,c=m-z.EXTRA_SCROLL_AMOUNT,g=p+z.EXTRA_SCROLL_AMOUNT;return r<e?Math.min(c,0):Math.max(g,0)},t.prototype.calculateScrollIncrementRTL=function(e,r,n,o,d){var p=this.adapter.getTabDimensionsAtIndex(r),m=d-p.contentLeft-n,c=d-p.contentRight-n-o,g=c+z.EXTRA_SCROLL_AMOUNT,h=m-z.EXTRA_SCROLL_AMOUNT;return r>e?Math.max(g,0):Math.min(h,0)},t.prototype.findAdjacentTabIndexClosestToEdge=function(e,r,n,o){var d=r.rootLeft-n,p=r.rootRight-n-o,m=d+p,c=d<0||m<0,g=p>0||m>0;return c?e-1:g?e+1:-1},t.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(e,r,n,o,d){var p=d-r.rootLeft-o-n,m=d-r.rootRight-n,c=p+m,g=p>0||c>0,h=m<0||c<0;return g?e+1:h?e-1:-1},t.prototype.getKeyFromEvent=function(e){return It.has(e.key)?e.key:yt.get(e.keyCode)},t.prototype.isActivationKey=function(e){return e===D.SPACE_KEY||e===D.ENTER_KEY},t.prototype.indexIsInRange=function(e){return e>=0&&e<this.adapter.getTabListLength()},t.prototype.isRTL=function(){return this.adapter.isRTL()},t.prototype.scrollIntoViewImpl=function(e){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),o=this.adapter.getTabDimensionsAtIndex(e),d=this.findAdjacentTabIndexClosestToEdge(e,o,r,n);if(this.indexIsInRange(d)){var p=this.calculateScrollIncrement(e,d,r,n);this.adapter.incrementScroll(p)}},t.prototype.scrollIntoViewImplRTL=function(e){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),o=this.adapter.getTabDimensionsAtIndex(e),d=this.adapter.getScrollContentWidth(),p=this.findAdjacentTabIndexClosestToEdgeRTL(e,o,r,n,d);if(this.indexIsInRange(p)){var m=this.calculateScrollIncrementRTL(e,p,r,n,d);this.adapter.incrementScroll(m)}},t}(Yt),$e=U("<div><div><div><!></div></div></div>");function Ke(f,t){Wt(t,!0);const{matches:e}=me;let r=C(t,"use",19,()=>[]),n=C(t,"class",3,""),o=C(t,"align",3,void 0),d=C(t,"scrollArea$use",19,()=>[]),p=C(t,"scrollArea$class",3,""),m=C(t,"scrollContent$use",19,()=>[]),c=C(t,"scrollContent$class",3,""),g=Ut(t,["$$slots","$$events","$$legacy","use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","children"]),h,v=F(void 0),b,y,A=I({}),x=I({}),T=I({}),O=I({});Ht(()=>(L(v,I(new xe({eventTargetMatchesSelector:(u,s)=>e(u,s),addClass:Y,removeClass:M,addScrollAreaClass:Q,setScrollAreaStyleProperty:tt,setScrollContentStyleProperty:st,getScrollContentStyleValue:k,setScrollAreaScrollLeft:u=>b.scrollLeft=u,getScrollAreaScrollLeft:()=>b.scrollLeft,getScrollContentOffsetWidth:()=>y.offsetWidth,getScrollAreaOffsetWidth:()=>b.offsetWidth,computeScrollAreaClientRect:()=>b.getBoundingClientRect(),computeScrollContentClientRect:()=>y.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>we(document)}))),a(v).init(),()=>{var u;(u=a(v))==null||u.destroy()}));function Y(u){A[u]||(A[u]=!0)}function M(u){(!(u in A)||A[u])&&(A[u]=!1)}function Q(u){x[u]||(x[u]=!0)}function tt(u,s){T[u]!=s&&(s===""||s==null?delete T[u]:T[u]=s)}function st(u,s){O[u]!=s&&(s===""||s==null?delete O[u]:O[u]=s)}function k(u){return u in O?O[u]:getComputedStyle(y).getPropertyValue(u)}function w(){if(a(v)==null)throw new Error("Instance is undefined.");return a(v).getScrollPosition()}function j(){return y.offsetWidth}function et(u){var s;(s=a(v))==null||s.incrementScroll(u)}function rt(u){var s;(s=a(v))==null||s.scrollTo(u)}function B(){return h}var X=$e();const nt=K(()=>kt(g,["scrollArea$","scrollContent$"]));let l;var i=W(X);const _=K(()=>Pt(g,"scrollArea$"));var at=u=>{var s;a(v)&&a(v).handleInteraction(),(s=t.scrollArea$onwheel)==null||s.call(t,u)},ct=u=>{var s;a(v)&&a(v).handleInteraction(),(s=t.scrollArea$ontouchstart)==null||s.call(t,u)},mt=u=>{var s;a(v)&&a(v).handleInteraction(),(s=t.scrollArea$onpointerdown)==null||s.call(t,u)},G=u=>{var s;a(v)&&a(v).handleInteraction(),(s=t.scrollArea$onmousedown)==null||s.call(t,u)},Rt=u=>{var s;a(v)&&a(v).handleInteraction(),(s=t.scrollArea$onkeydown)==null||s.call(t,u)};let Kt;var gt=W(i);const jt=K(()=>Pt(g,"scrollContent$"));var Bt=u=>{var s;a(v)&&a(v).handleTransitionEnd(u),(s=t.scrollContent$ontransitionend)==null||s.call(t,u)};let Ft;var Xt=W(gt);return wt(Xt,()=>t.children??J),$(gt),Z(gt,u=>y=u,()=>y),At(gt,(u,s)=>Tt(u,s),m),$(i),Z(i,u=>b=u,()=>b),At(i,(u,s)=>Tt(u,s),d),$(X),Z(X,u=>h=u,()=>h),At(X,(u,s)=>Tt(u,s),r),H(()=>{l=Ct(X,l,{class:ft({[n()]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":o()==="start","mdc-tab-scroller--align-end":o()==="end","mdc-tab-scroller--align-center":o()==="center",...A}),...a(nt)}),Kt=Ct(i,Kt,{class:ft({[p()]:!0,"mdc-tab-scroller__scroll-area":!0,...x}),style:Object.entries(T).map(([u,s])=>`${u}: ${s};`).join(" "),...a(_),onwheel:at,ontouchstart:ct,onpointerdown:mt,onmousedown:G,onkeydown:Rt}),Ft=Ct(gt,Ft,{class:ft({[c()]:!0,"mdc-tab-scroller__scroll-content":!0}),style:Object.entries(O).map(([u,s])=>`${u}: ${s};`).join(" "),...a(jt),ontransitionend:Bt})}),S(f,X),$t({getScrollPosition:w,getScrollContentWidth:j,incrementScroll:et,scrollTo:rt,getElement:B})}var Fe=U("<div><!></div>");function Et(f,t){Wt(t,!0);let e=C(t,"use",19,()=>[]),r=C(t,"class",3,""),n=C(t,"tabs",19,()=>[]),o=C(t,"key",3,l=>l),d=C(t,"focusOnActivate",3,!0),p=C(t,"focusOnProgrammatic",3,!1),m=C(t,"useAutomaticActivation",3,!0),c=C(t,"active",15),g=C(t,"tabindex",3,0),h=Ut(t,["$$slots","$$events","$$legacy","use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","tabindex","tab"]),v,b=F(void 0),y,A=F(I(c()==null?-1:n().findIndex(l=>c()&&o()(l)===o()(c())))),x=I({}),T=F(new WeakMap),O=!1;Lt("SMUI:tab:focusOnActivate",d()),Lt("SMUI:tab:initialActive",{active:c()==null?null:o()(c()),key:o()}),Dt(()=>{(c()==null&&a(A)!==-1||c()!=null&&a(A)===-1||c()!=null&&o()(c())!==o()(n()[a(A)]))&&(L(A,I(n().findIndex(l=>c()&&o()(l)===o()(c())))),a(b)&&(O=!p(),a(b).activateTab(a(A)),O=!1))}),Dt(()=>{if(n().length){const l=n()[0]instanceof Object?a(T).get(n()[0]):x[n()[0]];l&&l.forceAccessible(a(A)===-1)}});let Y=!1;Dt(()=>{if(!a(b)){Y=!1;return}Y||(Y=!0,a(b).setUseAutomaticActivation(m()))}),Lt("SMUI:tab:mount",l=>{Q(l.tabId,l)}),Lt("SMUI:tab:unmount",l=>{tt(l.tabId)}),Ht(()=>(L(b,I(new We({scrollTo:l=>y.scrollTo(l),incrementScroll:l=>y.incrementScroll(l),getScrollPosition:()=>y.getScrollPosition(),getScrollContentWidth:()=>y.getScrollContentWidth(),getOffsetWidth:()=>k().offsetWidth,isRTL:()=>getComputedStyle(k()).getPropertyValue("direction")==="rtl",setActiveTab:l=>{var i;c(n()[l]),L(A,I(l)),(i=a(b))==null||i.activateTab(l)},activateTabAtIndex:(l,i)=>{var _;return(_=M(n()[l]))==null?void 0:_.activate(i,O)},deactivateTabAtIndex:l=>{var i;return(i=M(n()[l]))==null?void 0:i.deactivate()},focusTabAtIndex:l=>{var i;return(i=M(n()[l]))==null?void 0:i.focus()},getTabIndicatorClientRectAtIndex:l=>{var i;return((i=M(n()[l]))==null?void 0:i.computeIndicatorClientRect())??new DOMRect},getTabDimensionsAtIndex:l=>{var i;return((i=M(n()[l]))==null?void 0:i.computeDimensions())??{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var l;for(let i=0;i<n().length;(i+=1)-1)if((l=M(n()[i]))!=null&&l.active)return i;return-1},getFocusedTabIndex:()=>{const l=n().map(_=>{var at;return(at=M(_))==null?void 0:at.element}),i=document.activeElement;return l.indexOf(i)},getIndexOfTabById:l=>n().findIndex(i=>o()(i)===o()(l)),getTabListLength:()=>n().length,notifyTabActivated:l=>re(k(),"SMUITabBarActivated",{index:l})}))),a(b).init(),()=>{var l;(l=a(b))==null||l.destroy()}));function M(l){return l instanceof Object?a(T).get(l):x[l]}function Q(l,i){l instanceof Object?(a(T).set(l,i),L(T,a(T))):x[l]=i}function tt(l){l instanceof Object?(a(T).delete(l),L(T,a(T))):delete x[l]}function st(l){var i;(i=a(b))==null||i.scrollIntoView(l)}function k(){return v}var w=Fe();const j=K(()=>kt(h,["tabScroller$"]));var et=l=>{var i;a(b)&&a(b).handleKeyDown(l),(i=t.onkeydown)==null||i.call(t,l)},rt=l=>{var i;a(b)&&a(b).handleTabInteraction(l),(i=t.onSMUITabInteracted)==null||i.call(t,l)};let B;var X=W(w),nt=K(()=>Pt(h,"tabScroller$"));return Z(Ke(X,Jt(()=>a(nt),{children:(l,i)=>{var _=Ot(),at=it(_);ne(at,17,n,ct=>o()(ct),(ct,mt)=>{var G=Ot(),Rt=it(G);wt(Rt,()=>t.tab,()=>a(mt)),S(ct,G)}),S(l,_)},$$slots:{default:!0}})),l=>y=l,()=>y),$(w),Z(w,l=>v=l,()=>v),At(w,(l,i)=>Tt(l,i),e),H(()=>B=Ct(w,B,{class:ft({[r()]:!0,"mdc-tab-bar":!0}),role:"tablist",tabindex:g(),...a(j),onkeydown:et,onSMUITabInteracted:rt})),S(f,w),$t({scrollIntoView:st,getElement:k})}var Ne=U('<div><!> <!> <div style="margin-top: 1em;"><div>Programmatically select:</div> <!></div></div>');function Ve(f){let t=F("Home");var e=Ne(),r=W(e);Et(r,{tabs:["Home","Merchandise","About Us"],get active(){return a(t)},set active(m){L(t,I(m))},tab:(m,c=J)=>{_t(m,{get tab(){return c()},children:(g,h)=>{vt(g,{children:(v,b)=>{R();var y=P();H(()=>q(y,c())),S(v,y)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}});var n=V(r,2);xt(n,()=>a(t)==="Home",p=>{Gt(p,{role:"tabpanel",variant:"unelevated",children:(m,c)=>{zt(m,{children:(g,h)=>{R();var v=P("Welcome to the Home page! I hope you like SMUI!");S(g,v)},$$slots:{default:!0}})},$$slots:{default:!0}})},p=>{var m=Ot(),c=it(m);xt(c,()=>a(t)==="Merchandise",g=>{Gt(g,{role:"tabpanel",variant:"unelevated",children:(h,v)=>{zt(h,{children:(b,y)=>{R();var A=P(`You want merch? We got so much cool merch! We got SMUI toilet paper,
        SMUI ironing boards, SMUI gas pedals! Come and get 'em!`);S(b,A)},$$slots:{default:!0}})},$$slots:{default:!0}})},g=>{var h=Ot(),v=it(h);xt(v,()=>a(t)==="About Us",b=>{Gt(b,{role:"tabpanel",variant:"unelevated",children:(y,A)=>{zt(y,{children:(x,T)=>{R();var O=P(`We are a boutique UI library, ready to get you up and running on
        whatever your project is. Whether you're building a web UI for an
        automated toaster or a web UI for an automated coffee maker, SMUI is
        ready for you!`);S(x,O)},$$slots:{default:!0}})},$$slots:{default:!0}})},null,!0),S(g,h)},!0),S(p,m)});var o=V(n,2),d=V(W(o),2);ne(d,16,()=>["Home","Merchandise","About Us"],ge,(p,m)=>{Ae(p,{onclick:()=>L(t,I(m)),children:(c,g)=>{vt(c,{children:(h,v)=>{R();var b=P();H(()=>q(b,m)),S(h,b)},$$slots:{default:!0}})},$$slots:{default:!0}})}),$(o),$(e),S(f,e)}var He=U("<!> <!>",1),Ue=U("<div><!></div>");function Ye(f){let t=[{icon:"access_time",label:"Recents"},{icon:"near_me",label:"Nearby"},{icon:"favorite",label:"Favorites"}],e=F(I(t[0]));var r=Ue(),n=W(r);Et(n,{tabs:t,key:d=>d.label,get active(){return a(e)},set active(d){L(e,I(d))},tab:(d,p=J)=>{_t(d,{get tab(){return p()},children:(m,c)=>{var g=He(),h=it(g);ae(h,{class:"material-icons",children:(b,y)=>{R();var A=P();H(()=>q(A,p().icon)),S(b,A)},$$slots:{default:!0}});var v=V(h,2);vt(v,{children:(b,y)=>{R();var A=P();H(()=>q(A,p().label)),S(b,A)},$$slots:{default:!0}}),S(m,g)},$$slots:{default:!0}})},$$slots:{tab:!0}}),$(r),S(f,r)}var ke=U("<!> <!>",1),je=U('<div><!> <pre class="status"> </pre></div>');function Be(f){let t=[{k:1,icon:"code",label:"Code"},{k:2,icon:"code",label:"Code"},{k:3,icon:"code",label:"Code"},{k:4,icon:"code",label:"Code"}],e=F(I(t[2]));var r=je(),n=W(r);Et(n,{tabs:t,key:m=>m.k,get active(){return a(e)},set active(m){L(e,I(m))},tab:(m,c=J)=>{_t(m,{get tab(){return c()},stacked:!0,indicatorSpanOnlyContent:!0,tabIndicator$transition:"fade",children:(g,h)=>{var v=ke(),b=it(v);ae(b,{class:"material-icons",children:(A,x)=>{R();var T=P();H(()=>q(T,c().icon)),S(A,T)},$$slots:{default:!0}});var y=V(b,2);vt(y,{children:(A,x)=>{R();var T=P();H(()=>q(T,c().label)),S(A,T)},$$slots:{default:!0}}),S(g,v)},$$slots:{default:!0}})},$$slots:{tab:!0}});var o=V(n,2),d=W(o);$(o),$(r),H(()=>q(d,`Selected: ${a(e).k??""}`)),S(f,r)}var Xe=U("<div><!></div>");function Ge(f,t){Wt(t,!1),Te();var e=Xe(),r=W(e),n=ue(()=>[...Array(20)].map((o,d)=>d+1));Et(r,{get tabs(){return a(n)},tab:(d,p=J)=>{_t(d,{get tab(){return p()},children:(m,c)=>{vt(m,{children:(g,h)=>{R();var v=P();H(()=>q(v,`Tab ${p()??""}`)),S(g,v)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}}),$(e),S(f,e),$t()}var ze=U("<div><!></div>");function qe(f){let t=F("Home");var e=ze(),r=W(e);Et(r,{tabs:["Home","Merchandise","About Us"],get active(){return a(t)},set active(o){L(t,I(o))},tab:(o,d=J)=>{_t(o,{get tab(){return d()},minWidth:!0,children:(p,m)=>{vt(p,{children:(c,g)=>{R();var h=P();H(()=>q(h,d())),S(c,h)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}}),$(e),S(f,e)}var Je=U('<div class="icon-indicators svelte-qoao06"><!></div>');function Qe(f){let t=F("Home");var e=Je(),r=W(e);Et(r,{tabs:["Home","Merchandise","About Us"],get active(){return a(t)},set active(o){L(t,I(o))},tab:(o,d=J)=>{_t(o,{get tab(){return d()},tabIndicator$type:"icon",tabIndicator$content$class:"material-icons",tabIndicator:m=>{R();var c=P("star");S(m,c)},children:(m,c)=>{vt(m,{children:(g,h)=>{R();var v=P();H(()=>q(v,d())),S(g,v)},$$slots:{default:!0}})},$$slots:{tabIndicator:!0,default:!0}})},$$slots:{tab:!0}}),$(e),S(f,e)}var Ze=U('<div><!> <iframe src="https://en.wikipedia.org/wiki/Home" title="Selected Tab" name="href-tabs-frame" style="width: 100%; height: 400px; border: 0;" role="tabpanel"></iframe></div>');function tr(f){let t=F("Home");var e=Ze(),r=W(e);Et(r,{tabs:["Home","Merchandise","About Us"],get active(){return a(t)},set active(o){L(t,I(o))},tab:(o,d=J)=>{var p=K(()=>`https://en.wikipedia.org/wiki/${d().replace(/ /g,"_")??""}`);_t(o,{get tab(){return d()},get href(){return a(p)},target:"href-tabs-frame",children:(m,c)=>{vt(m,{children:(g,h)=>{R();var v=P();H(()=>q(v,d())),S(g,v)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}}),R(2),$(e),S(f,e)}var er=U('<section class="svelte-w2pbwc"><h2>Tabs</h2> <h5>Installation</h5> <pre class="demo-spaced">npm i -D @smui/tab @smui/tab-bar</pre> <h5>Demos</h5> <!> <!> <!> <!> <!> <!> <!></section>');function Tr(f){var t=er();he(c=>{fe.title="Tabs - SMUI"});var e=V(W(t),8);St(e,{component:Ve,file:"tabs/_Simple.svelte"});var r=V(e,2);St(r,{component:Ye,file:"tabs/_Icons.svelte",children:(c,g)=>{R();var h=P("Tabs with icons next to labels");S(c,h)},$$slots:{default:!0}});var n=V(r,2);St(n,{component:Be,file:"tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte",children:(c,g)=>{R();var h=P(`Keyed tabs with icons above labels, indicators restricted to content, and
    fade transition`);S(c,h)},$$slots:{default:!0}});var o=V(n,2);St(o,{component:Ge,file:"tabs/_ScrollingNoInitialActive.svelte",children:(c,g)=>{R();var h=P("Scrolling tabs with no initial active tab");S(c,h)},$$slots:{default:!0}});var d=V(o,2);St(d,{component:qe,file:"tabs/_MinWidth.svelte",children:(c,g)=>{R();var h=P("Min width tabs");S(c,h)},$$slots:{default:!0}});var p=V(d,2);St(p,{component:Qe,file:"tabs/_IconIndicators.svelte",children:(c,g)=>{R();var h=P("Icon indicators");S(c,h)},$$slots:{default:!0}});var m=V(p,2);St(m,{component:tr,file:"tabs/_HrefAnchors.svelte",subtitle:g=>{R();var h=P(`But they don't activate through keyboard arrow keys. They need to be
      activated with the enter key.`);S(g,h)},children:(g,h)=>{R();var v=P("Tabs with href attributes render as anchor elements");S(g,v)},$$slots:{subtitle:!0,default:!0}}),$(t),S(f,t)}export{Tr as component};
