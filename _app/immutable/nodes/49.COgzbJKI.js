import{a as A,t as B,c as St,b as M}from"../chunks/disclose-version.Bsnu83OK.js";import"../chunks/legacy.BG3nWsJQ.js";import{p as Nt,m as y,d as T,g as t,l as Pt,b as ae,c as K,r as N,t as U,a as Ft,i as j,e as Ot,h as D,o as Ut,j as $t,f as nt,s as H,n as x,k as jt,a8 as _t,a3 as Te}from"../chunks/runtime.SXGrDfxi.js";import{h as Ae}from"../chunks/svelte-head.C25JiT13.js";import{D as mt}from"../chunks/Demo.-xg5M6FF.js";import{s as Z}from"../chunks/render.Cu_Ad_nF.js";import{l as dt,p as R,o as Xt,b as Q,s as Bt,i as Kt}from"../chunks/index-client.CjaGIm_K.js";import{_ as it,a as ut,M as Gt,d as fe,f as Ce,p as _e,e as he,i as ye}from"../chunks/dispatch.S85s6hKV.js";import{s as Mt,d as bt,u as Tt,b as Y,e as At,c as st}from"../chunks/useActions.D2nM91eX.js";import{c as Ie}from"../chunks/svelte-component.u_-kTajJ.js";import{i as Vt}from"../chunks/lifecycle.ty5dbg6f.js";import{e as zt,p as Ct}from"../chunks/prefixFilter.OhiPYEKz.js";import{R as Ee}from"../chunks/IconButton.DbDaMNQ7.js";import{S as se}from"../chunks/SmuiElement.Dnklo9Kq.js";import{C as ft}from"../chunks/CommonLabel.BzZiQThA.js";import{B as Re}from"../chunks/Button.BAj3xP9J.js";import{P as ee}from"../chunks/Paper.D9dydNdv.js";import{C as re}from"../chunks/Content.C1egkSPR.js";import{C as ve}from"../chunks/Svg.B7rXRjyi.js";/**
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
 */var Le={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Oe={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var lt=function(d){it(e,d);function e(n){return d.call(this,ut(ut({},e.defaultAdapter),n))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Le},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Oe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(Gt);/**
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
 */var $e=function(d){it(e,d);function e(){return d!==null&&d.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(lt.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(lt.cssClasses.ACTIVE)},e}(lt);/**
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
 */var de=function(d){it(e,d);function e(){return d!==null&&d.apply(this,arguments)||this}return e.prototype.activate=function(n){if(!n){this.adapter.addClass(lt.cssClasses.ACTIVE);return}var r=this.computeContentClientRect(),a=n.width/r.width,c=n.left-r.left;this.adapter.addClass(lt.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+c+"px) scaleX("+a+")"),this.computeContentClientRect(),this.adapter.removeClass(lt.cssClasses.NO_TRANSITION),this.adapter.addClass(lt.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(lt.cssClasses.ACTIVE)},e}(lt);/**
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
 */var kt={ACTIVE:"mdc-tab--active"},Wt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var Pe=function(d){it(e,d);function e(n){var r=d.call(this,ut(ut({},e.defaultAdapter),n))||this;return r.focusOnActivate=!0,r}return Object.defineProperty(e,"cssClasses",{get:function(){return kt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(kt.ACTIVE)},e.prototype.setFocusOnActivate=function(n){this.focusOnActivate=n},e.prototype.activate=function(n){this.adapter.addClass(kt.ACTIVE),this.adapter.setAttr(Wt.ARIA_SELECTED,"true"),this.adapter.setAttr(Wt.TABINDEX,"0"),this.adapter.activateIndicator(n),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(kt.ACTIVE),this.adapter.setAttr(Wt.ARIA_SELECTED,"false"),this.adapter.setAttr(Wt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var n=this.adapter.getOffsetWidth(),r=this.adapter.getOffsetLeft(),a=this.adapter.getContentOffsetWidth(),c=this.adapter.getContentOffsetLeft();return{contentLeft:r+c,contentRight:r+c+a,rootLeft:r,rootRight:r+n}},e}(Gt),Me=B("<span><span><!></span></span>");function ue(d,e){const n=dt(e,["children","$$slots","$$events","$$legacy"]),r=dt(n,["activate","deactivate","computeContentClientRect","getElement","use","class","active","type","transition","content$use","content$class"]);Nt(e,!1);let a=R(e,"use",24,()=>[]),c=R(e,"class",8,""),o=R(e,"active",12,!1),s=R(e,"type",8,"underline"),h=R(e,"transition",8,"slide"),u=R(e,"content$use",24,()=>[]),S=R(e,"content$class",8,""),f=y(),I=y(),b=y(),g=y({}),_=y({}),v=y([]),P=y(h());Xt(()=>(T(I,E()),t(I).init(),()=>{t(I).destroy()}));function E(){const p={fade:$e,slide:de}[h()]||de;return new p({addClass:(...L)=>O(()=>W(...L)),removeClass:(...L)=>O(()=>tt(...L)),computeContentClientRect:V,setContentStyleProperty:(...L)=>O(()=>ct(...L))})}function O(p){t(v).length?t(v)[t(v).length-1].push(p):p()}function W(p){t(g)[p]||j(g,t(g)[p]=!0)}function tt(p){(!(p in t(g))||t(g)[p])&&j(g,t(g)[p]=!1)}function ct(p,L){t(_)[p]!=L&&(L===""||L==null?(delete t(_)[p],T(_,t(_))):j(_,t(_)[p]=L))}function F(p){o(!0),t(I).activate(p)}function X(){o(!1),t(I).deactivate()}function V(){return t(v).push([]),T(v,t(v)),t(b).getBoundingClientRect()}function at(){return t(f)}Pt(()=>(t(P),Ot(h()),t(I)),()=>{t(P)!==h()&&(T(P,h()),t(I)&&t(I).destroy(),T(g,{}),T(_,{}),T(I,E()),t(I).init())}),Pt(()=>t(v),()=>{t(v).length&&requestAnimationFrame(()=>{const p=t(v).shift()??[];T(v,t(v));for(const L of p)L()})}),ae(),Vt();var k=Me();const ot=D(()=>zt(r,["content$"]));let et;var G=K(k);const z=D(()=>Ct(r,"content$"));let i;var C=K(G);return Mt(C,e,"default",{},null),N(G),Q(G,p=>T(b,p),()=>t(b)),bt(G,(p,L)=>Tt(p,L),u),N(k),Q(k,p=>T(f,p),()=>t(f)),bt(k,(p,L)=>Tt(p,L),a),U(()=>{et=At(k,et,{class:st({[c()]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":o(),"mdc-tab-indicator--fade":h()==="fade",...t(g)}),...t(ot)}),i=At(G,i,{class:st({[S()]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":s()==="underline","mdc-tab-indicator__content--icon":s()==="icon"}),style:Object.entries(t(_)).map(([p,L])=>`${p}: ${L};`).join(" "),"aria-hidden":s()==="icon"?"true":void 0,...t(z)})}),A(d,k),Y(e,"activate",F),Y(e,"deactivate",X),Y(e,"computeContentClientRect",V),Y(e,"getElement",at),Ft({activate:F,deactivate:X,computeContentClientRect:V,getElement:at})}var De=B('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>',1);function yt(d,e){const n=dt(e,["children","$$slots","$$events","$$legacy"]),r=dt(n,["activate","deactivate","focus","getElement","use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag"]);Nt(e,!1);let a=R(e,"use",24,()=>[]),c=R(e,"class",8,""),o=R(e,"style",8,""),s=R(e,"tab",8),h=R(e,"ripple",8,!0),u=R(e,"stacked",8,!1),S=R(e,"minWidth",8,!1),f=R(e,"indicatorSpanOnlyContent",8,!1),I=R(e,"href",8,void 0),b=R(e,"content$use",24,()=>[]),g=R(e,"content$class",8,""),_=y(),v=y(),P=y(),E=y(),O=y({}),W=y({}),tt=y({}),ct=Ut("SMUI:tab:focusOnActivate"),F=y(s()===Ut("SMUI:tab:initialActive")),X=y(!1),V=R(e,"component",8,se),at=R(e,"tag",24,()=>V()===se?I()==null?"button":"a":void 0);if($t("SMUI:label:context","tab"),$t("SMUI:icon:context","tab"),!s())throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");const k=Ut("SMUI:tab:mount"),ot=Ut("SMUI:tab:unmount");Xt(()=>{T(v,new Pe({setAttr:C,addClass:G,removeClass:z,hasClass:et,activateIndicator:l=>t(E).activate(l),deactivateIndicator:()=>t(E).deactivate(),notifyInteracted:()=>fe(q(),"SMUITabInteracted",{tabId:s()}),getOffsetLeft:()=>q().offsetLeft,getOffsetWidth:()=>q().offsetWidth,getContentOffsetLeft:()=>t(P).offsetLeft,getContentOffsetWidth:()=>t(P).offsetWidth,focus:rt}));const $={tabId:s(),get element(){return q()},get active(){return t(F)},forceAccessible(l){T(X,l)},computeIndicatorClientRect:()=>t(E).computeContentClientRect(),computeDimensions:()=>t(v).computeDimensions(),focus:rt,activate:p,deactivate:L};return k&&k($),t(v).init(),()=>{ot&&ot($),t(v).destroy()}});function et($){return $ in t(O)?t(O)[$]:q().classList.contains($)}function G($){t(O)[$]||j(O,t(O)[$]=!0)}function z($){(!($ in t(O))||t(O)[$])&&j(O,t(O)[$]=!1)}function i($,l){t(W)[$]!=l&&(l===""||l==null?(delete t(W)[$],T(W,t(W))):j(W,t(W)[$]=l))}function C($,l){t(tt)[$]!==l&&j(tt,t(tt)[$]=l)}function p($,l){T(F,!0),l&&t(v).setFocusOnActivate(!1),t(v).activate($),l&&t(v).setFocusOnActivate(ct)}function L(){T(F,!1),t(v).deactivate()}function rt(){q().focus()}function q(){return t(_).getElement()}Pt(()=>t(v),()=>{t(v)&&t(v).setFocusOnActivate(ct)}),ae(),Vt();var ht=St(),Dt=nt(ht),qt=D(()=>[[Ee,{ripple:h(),unbounded:!1,addClass:G,removeClass:z,addStyle:i}],...a()]),Ht=D(()=>st({[c()]:!0,"mdc-tab":!0,"mdc-tab--active":t(F),"mdc-tab--stacked":u(),"mdc-tab--min-width":S(),...t(O)})),vt=D(()=>Object.entries(t(W)).map(([$,l])=>`${$}: ${l};`).concat([o()]).join(" ")),Jt=D(()=>t(F)?"true":"false"),Qt=D(()=>t(F)||t(X)?"0":"-1"),Yt=jt(()=>zt(r,["content$","tabIndicator$"]));return Ie(Dt,V,($,l)=>{Q(l($,Bt({get tag(){return at()},get use(){return t(qt)},get class(){return t(Ht)},get style(){return t(vt)},role:"tab",get"aria-selected"(){return t(Jt)},get tabindex(){return t(Qt)},get href(){return I()}},()=>t(tt),()=>t(Yt),{onclick:m=>{var Zt;(Zt=r.onclick)==null||Zt.call(r,m),!m.defaultPrevented&&t(v)&&t(v).handleClick()},children:(m,Zt)=>{var le=De(),Lt=nt(le);const ge=D(()=>Ct(r,"content$"));let ie;var ce=K(Lt);Mt(ce,e,"default",{},null);var me=H(ce,2);Kt(me,f,pt=>{var xt=jt(()=>Ct(r,"tabIndicator$"));Q(ue(pt,Bt({get active(){return t(F)}},()=>t(xt),{children:(gt,be)=>{var wt=St(),te=nt(wt);Mt(te,e,"tab-indicator",{},null),A(gt,wt)},$$slots:{default:!0},$$legacy:!0})),gt=>T(E,gt),()=>t(E))}),N(Lt),Q(Lt,pt=>T(P,pt),()=>t(P)),bt(Lt,(pt,xt)=>Tt(pt,xt),b);var Se=H(Lt,2);Kt(Se,()=>!f(),pt=>{var xt=jt(()=>Ct(r,"tabIndicator$"));Q(ue(pt,Bt({get active(){return t(F)}},()=>t(xt),{children:(gt,be)=>{var wt=St(),te=nt(wt);Mt(te,e,"tab-indicator",{},null),A(gt,wt)},$$slots:{default:!0},$$legacy:!0})),gt=>T(E,gt),()=>t(E))}),x(2),U(()=>ie=At(Lt,ie,{class:st({[g()]:!0,"mdc-tab__content":!0}),...t(ge)})),A(m,le)},$$slots:{default:!0},$$legacy:!0})),m=>T(_,m),()=>t(_))}),A(d,ht),Y(e,"activate",p),Y(e,"deactivate",L),Y(e,"focus",rt),Y(e,"getElement",q),Ft({activate:p,deactivate:L,focus:rt,getElement:q})}/**
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
 */var pe={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},xe={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var oe=function(){function d(e){this.adapter=e}return d}();/**
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
 */var we=function(d){it(e,d);function e(){return d!==null&&d.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var n=this.adapter.getScrollAreaScrollLeft(),r=this.calculateScrollEdges().right;return Math.round(r-n)},e.prototype.scrollToRTL=function(n){var r=this.calculateScrollEdges(),a=this.adapter.getScrollAreaScrollLeft(),c=this.clampScrollValue(r.right-n);return{finalScrollPosition:c,scrollDelta:c-a}},e.prototype.incrementScrollRTL=function(n){var r=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(r-n);return{finalScrollPosition:a,scrollDelta:a-r}},e.prototype.getAnimatingScrollPosition=function(n){return n},e.prototype.calculateScrollEdges=function(){var n=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:n-r}},e.prototype.clampScrollValue=function(n){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,n),r.right)},e}(oe);/**
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
 */var We=function(d){it(e,d);function e(){return d!==null&&d.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(n){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(n-r)},e.prototype.scrollToRTL=function(n){var r=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(-n);return{finalScrollPosition:a,scrollDelta:a-r}},e.prototype.incrementScrollRTL=function(n){var r=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(r-n);return{finalScrollPosition:a,scrollDelta:a-r}},e.prototype.getAnimatingScrollPosition=function(n,r){return n-r},e.prototype.calculateScrollEdges=function(){var n=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:r-n,right:0}},e.prototype.clampScrollValue=function(n){var r=this.calculateScrollEdges();return Math.max(Math.min(r.right,n),r.left)},e}(oe);/**
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
 */var Ke=function(d){it(e,d);function e(){return d!==null&&d.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(n){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(r-n)},e.prototype.scrollToRTL=function(n){var r=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(n);return{finalScrollPosition:a,scrollDelta:r-a}},e.prototype.incrementScrollRTL=function(n){var r=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(r+n);return{finalScrollPosition:a,scrollDelta:r-a}},e.prototype.getAnimatingScrollPosition=function(n,r){return n+r},e.prototype.calculateScrollEdges=function(){var n=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:n-r,right:0}},e.prototype.clampScrollValue=function(n){var r=this.calculateScrollEdges();return Math.min(Math.max(r.right,n),r.left)},e}(oe);/**
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
 */var Ne=function(d){it(e,d);function e(n){var r=d.call(this,ut(ut({},e.defaultAdapter),n))||this;return r.isAnimating=!1,r}return Object.defineProperty(e,"cssClasses",{get:function(){return pe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return xe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-n+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var n=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return r-n},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(n){var r=n.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(r,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(n){n!==0&&this.animate(this.getIncrementScrollOperation(n))},e.prototype.incrementScrollImmediate=function(n){if(n!==0){var r=this.getIncrementScrollOperation(n);r.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition))}},e.prototype.scrollTo=function(n){if(this.isRTL()){this.scrollToImplRTL(n);return}this.scrollToImpl(n)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var n=this.adapter.getScrollContentStyleValue("transform");if(n==="none")return 0;var r=/\((.+?)\)/.exec(n);if(!r)return 0;var a=r[1],c=Ce(a.split(","),6);c[0],c[1],c[2],c[3];var o=c[4];return c[5],parseFloat(o)},e.prototype.clampScrollValue=function(n){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,n),r.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var n=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(n)},e.prototype.calculateScrollEdges=function(){var n=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:n-r}},e.prototype.scrollToImpl=function(n){var r=this.getScrollPosition(),a=this.clampScrollValue(n),c=a-r;this.animate({finalScrollPosition:a,scrollDelta:c})},e.prototype.scrollToImplRTL=function(n){var r=this.getRTLScroller().scrollToRTL(n);this.animate(r)},e.prototype.getIncrementScrollOperation=function(n){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(n);var r=this.getScrollPosition(),a=n+r,c=this.clampScrollValue(a),o=c-r;return{finalScrollPosition:c,scrollDelta:o}},e.prototype.animate=function(n){var r=this;n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+n.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){r.adapter.addClass(e.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var n=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(n)},e.prototype.getAnimatingScrollPosition=function(){var n=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(r,n):r-n},e.prototype.rtlScrollerFactory=function(){var n=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(n-1);var r=this.adapter.getScrollAreaScrollLeft();if(r<0)return this.adapter.setScrollAreaScrollLeft(n),new We(this.adapter);var a=this.adapter.computeScrollAreaClientRect(),c=this.adapter.computeScrollContentClientRect(),o=Math.round(c.right-a.right);return this.adapter.setScrollAreaScrollLeft(n),o===r?new Ke(this.adapter):new we(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(Gt);/**
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
 */var ne;function Fe(d,e){if(e===void 0&&(e=!0),e&&typeof ne<"u")return ne;var n=d.createElement("div");n.classList.add(pe.SCROLL_TEST),d.body.appendChild(n);var r=n.offsetHeight-n.clientHeight;return d.body.removeChild(n),e&&(ne=r),r}/**
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
 */var w={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},J={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var It=new Set;It.add(w.ARROW_LEFT_KEY);It.add(w.ARROW_RIGHT_KEY);It.add(w.END_KEY);It.add(w.HOME_KEY);It.add(w.ENTER_KEY);It.add(w.SPACE_KEY);var Et=new Map;Et.set(J.ARROW_LEFT_KEYCODE,w.ARROW_LEFT_KEY);Et.set(J.ARROW_RIGHT_KEYCODE,w.ARROW_RIGHT_KEY);Et.set(J.END_KEYCODE,w.END_KEY);Et.set(J.HOME_KEYCODE,w.HOME_KEY);Et.set(J.ENTER_KEYCODE,w.ENTER_KEY);Et.set(J.SPACE_KEYCODE,w.SPACE_KEY);var Ve=function(d){it(e,d);function e(n){var r=d.call(this,ut(ut({},e.defaultAdapter),n))||this;return r.useAutomaticActivation=!1,r}return Object.defineProperty(e,"strings",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return J},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(n){this.useAutomaticActivation=n},e.prototype.activateTab=function(n){var r=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(n)||n===r)){var a;r!==-1&&(this.adapter.deactivateTabAtIndex(r),a=this.adapter.getTabIndicatorClientRectAtIndex(r)),this.adapter.activateTabAtIndex(n,a),this.scrollIntoView(n),this.adapter.notifyTabActivated(n)}},e.prototype.handleKeyDown=function(n){var r=this.getKeyFromEvent(n);if(r!==void 0)if(this.isActivationKey(r)||n.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(r))return;var a=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),r);this.adapter.setActiveTab(a),this.scrollIntoView(a)}else{var c=this.adapter.getFocusedTabIndex();if(this.isActivationKey(r))this.adapter.setActiveTab(c);else{var a=this.determineTargetFromKey(c,r);this.adapter.focusTabAtIndex(a),this.scrollIntoView(a)}}},e.prototype.handleTabInteraction=function(n){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(n.detail.tabId))},e.prototype.scrollIntoView=function(n){if(this.indexIsInRange(n)){if(n===0){this.adapter.scrollTo(0);return}if(n===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(n);return}this.scrollIntoViewImpl(n)}},e.prototype.determineTargetFromKey=function(n,r){var a=this.isRTL(),c=this.adapter.getTabListLength()-1,o=r===w.END_KEY,s=r===w.ARROW_LEFT_KEY&&!a||r===w.ARROW_RIGHT_KEY&&a,h=r===w.ARROW_RIGHT_KEY&&!a||r===w.ARROW_LEFT_KEY&&a,u=n;return o?u=c:s?u-=1:h?u+=1:u=0,u<0?u=c:u>c&&(u=0),u},e.prototype.calculateScrollIncrement=function(n,r,a,c){var o=this.adapter.getTabDimensionsAtIndex(r),s=o.contentLeft-a-c,h=o.contentRight-a,u=h-J.EXTRA_SCROLL_AMOUNT,S=s+J.EXTRA_SCROLL_AMOUNT;return r<n?Math.min(u,0):Math.max(S,0)},e.prototype.calculateScrollIncrementRTL=function(n,r,a,c,o){var s=this.adapter.getTabDimensionsAtIndex(r),h=o-s.contentLeft-a,u=o-s.contentRight-a-c,S=u+J.EXTRA_SCROLL_AMOUNT,f=h-J.EXTRA_SCROLL_AMOUNT;return r>n?Math.max(S,0):Math.min(f,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(n,r,a,c){var o=r.rootLeft-a,s=r.rootRight-a-c,h=o+s,u=o<0||h<0,S=s>0||h>0;return u?n-1:S?n+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(n,r,a,c,o){var s=o-r.rootLeft-c-a,h=o-r.rootRight-a,u=s+h,S=s>0||u>0,f=h<0||u<0;return S?n+1:f?n-1:-1},e.prototype.getKeyFromEvent=function(n){return It.has(n.key)?n.key:Et.get(n.keyCode)},e.prototype.isActivationKey=function(n){return n===w.SPACE_KEY||n===w.ENTER_KEY},e.prototype.indexIsInRange=function(n){return n>=0&&n<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(n){var r=this.adapter.getScrollPosition(),a=this.adapter.getOffsetWidth(),c=this.adapter.getTabDimensionsAtIndex(n),o=this.findAdjacentTabIndexClosestToEdge(n,c,r,a);if(this.indexIsInRange(o)){var s=this.calculateScrollIncrement(n,o,r,a);this.adapter.incrementScroll(s)}},e.prototype.scrollIntoViewImplRTL=function(n){var r=this.adapter.getScrollPosition(),a=this.adapter.getOffsetWidth(),c=this.adapter.getTabDimensionsAtIndex(n),o=this.adapter.getScrollContentWidth(),s=this.findAdjacentTabIndexClosestToEdgeRTL(n,c,r,a,o);if(this.indexIsInRange(s)){var h=this.calculateScrollIncrementRTL(n,s,r,a,o);this.adapter.incrementScroll(h)}},e}(Gt),He=B("<div><div><div><!></div></div></div>");function Ye(d,e){const n=dt(e,["children","$$slots","$$events","$$legacy"]),r=dt(n,["getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement","use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class"]);Nt(e,!1);const{matches:a}=_e;let c=R(e,"use",24,()=>[]),o=R(e,"class",8,""),s=R(e,"align",8,void 0),h=R(e,"scrollArea$use",24,()=>[]),u=R(e,"scrollArea$class",8,""),S=R(e,"scrollContent$use",24,()=>[]),f=R(e,"scrollContent$class",8,""),I=y(),b=y(),g=y(),_=y(),v=y({}),P=y({}),E=y({}),O=y({});Xt(()=>(T(b,new Ne({eventTargetMatchesSelector:(l,m)=>a(l,m),addClass:W,removeClass:tt,addScrollAreaClass:ct,setScrollAreaStyleProperty:F,setScrollContentStyleProperty:X,getScrollContentStyleValue:V,setScrollAreaScrollLeft:l=>j(g,t(g).scrollLeft=l),getScrollAreaScrollLeft:()=>t(g).scrollLeft,getScrollContentOffsetWidth:()=>t(_).offsetWidth,getScrollAreaOffsetWidth:()=>t(g).offsetWidth,computeScrollAreaClientRect:()=>t(g).getBoundingClientRect(),computeScrollContentClientRect:()=>t(_).getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>Fe(document)})),t(b).init(),()=>{t(b).destroy()}));function W(l){t(v)[l]||j(v,t(v)[l]=!0)}function tt(l){(!(l in t(v))||t(v)[l])&&j(v,t(v)[l]=!1)}function ct(l){t(P)[l]||j(P,t(P)[l]=!0)}function F(l,m){t(E)[l]!=m&&(m===""||m==null?(delete t(E)[l],T(E,t(E))):j(E,t(E)[l]=m))}function X(l,m){t(O)[l]!=m&&(m===""||m==null?(delete t(O)[l],T(O,t(O))):j(O,t(O)[l]=m))}function V(l){return l in t(O)?t(O)[l]:getComputedStyle(t(_)).getPropertyValue(l)}function at(){return t(b).getScrollPosition()}function k(){return t(_).offsetWidth}function ot(l){t(b).incrementScroll(l)}function et(l){t(b).scrollTo(l)}function G(){return t(I)}Vt();var z=He();const i=D(()=>zt(r,["scrollArea$","scrollContent$"]));let C;var p=K(z);const L=D(()=>Ct(r,"scrollArea$"));var rt=l=>{var m;t(b)&&t(b).handleInteraction(),(m=r.scrollArea$onwheel)==null||m.call(r,l)},q=l=>{var m;t(b)&&t(b).handleInteraction(),(m=r.scrollArea$ontouchstart)==null||m.call(r,l)},ht=l=>{var m;t(b)&&t(b).handleInteraction(),(m=r.scrollArea$onpointerdown)==null||m.call(r,l)},Dt=l=>{var m;t(b)&&t(b).handleInteraction(),(m=r.scrollArea$onmousedown)==null||m.call(r,l)},qt=l=>{var m;t(b)&&t(b).handleInteraction(),(m=r.scrollArea$onkeydown)==null||m.call(r,l)};let Ht;var vt=K(p);const Jt=D(()=>Ct(r,"scrollContent$"));var Qt=l=>{var m;t(b)&&t(b).handleTransitionEnd(l),(m=r.scrollContent$ontransitionend)==null||m.call(r,l)};let Yt;var $=K(vt);return Mt($,e,"default",{},null),N(vt),Q(vt,l=>T(_,l),()=>t(_)),bt(vt,(l,m)=>Tt(l,m),S),N(p),Q(p,l=>T(g,l),()=>t(g)),bt(p,(l,m)=>Tt(l,m),h),N(z),Q(z,l=>T(I,l),()=>t(I)),bt(z,(l,m)=>Tt(l,m),c),U(()=>{C=At(z,C,{class:st({[o()]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":s()==="start","mdc-tab-scroller--align-end":s()==="end","mdc-tab-scroller--align-center":s()==="center",...t(v)}),...t(i)}),Ht=At(p,Ht,{class:st({[u()]:!0,"mdc-tab-scroller__scroll-area":!0,...t(P)}),style:Object.entries(t(E)).map(([l,m])=>`${l}: ${m};`).join(" "),...t(L),onwheel:rt,ontouchstart:q,onpointerdown:ht,onmousedown:Dt,onkeydown:qt}),Yt=At(vt,Yt,{class:st({[f()]:!0,"mdc-tab-scroller__scroll-content":!0}),style:Object.entries(t(O)).map(([l,m])=>`${l}: ${m};`).join(" "),...t(Jt),ontransitionend:Qt})}),A(d,z),Y(e,"getScrollPosition",at),Y(e,"getScrollContentWidth",k),Y(e,"incrementScroll",ot),Y(e,"scrollTo",et),Y(e,"getElement",G),Ft({getScrollPosition:at,getScrollContentWidth:k,incrementScroll:ot,scrollTo:et,getElement:G})}var Ue=B("<div><!></div>");function Rt(d,e){const n=dt(e,["children","$$slots","$$events","$$legacy"]),r=dt(n,["scrollIntoView","getElement","use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","tabindex"]);Nt(e,!1);let a=R(e,"use",24,()=>[]),c=R(e,"class",8,""),o=R(e,"tabs",24,()=>[]),s=R(e,"key",8,i=>i),h=R(e,"focusOnActivate",8,!0),u=R(e,"focusOnProgrammatic",8,!1),S=R(e,"useAutomaticActivation",8,!0),f=R(e,"active",12,void 0),I=R(e,"tabindex",8,0),b=y(),g=y(),_=y(),v=y(o().indexOf(f())),P=y({}),E=y(new WeakMap),O=y(!1);$t("SMUI:tab:focusOnActivate",h()),$t("SMUI:tab:initialActive",f()),$t("SMUI:tab:mount",i=>{tt(i.tabId,i)}),$t("SMUI:tab:unmount",i=>{ct(i.tabId)}),Xt(()=>(T(g,new Ve({scrollTo:i=>t(_).scrollTo(i),incrementScroll:i=>t(_).incrementScroll(i),getScrollPosition:()=>t(_).getScrollPosition(),getScrollContentWidth:()=>t(_).getScrollContentWidth(),getOffsetWidth:()=>X().offsetWidth,isRTL:()=>getComputedStyle(X()).getPropertyValue("direction")==="rtl",setActiveTab:i=>{f(o()[i]),T(v,i),t(g).activateTab(i)},activateTabAtIndex:(i,C)=>{var p;return(p=W(o()[i]))==null?void 0:p.activate(C,t(O))},deactivateTabAtIndex:i=>{var C;return(C=W(o()[i]))==null?void 0:C.deactivate()},focusTabAtIndex:i=>{var C;return(C=W(o()[i]))==null?void 0:C.focus()},getTabIndicatorClientRectAtIndex:i=>{var C;return((C=W(o()[i]))==null?void 0:C.computeIndicatorClientRect())??new DOMRect},getTabDimensionsAtIndex:i=>{var C;return((C=W(o()[i]))==null?void 0:C.computeDimensions())??{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var i;for(let C=0;C<o().length;(C+=1)-1)if((i=W(o()[C]))!=null&&i.active)return C;return-1},getFocusedTabIndex:()=>{const i=o().map(p=>{var L;return(L=W(p))==null?void 0:L.element}),C=document.activeElement;return i.indexOf(C)},getIndexOfTabById:i=>o().indexOf(i),getTabListLength:()=>o().length,notifyTabActivated:i=>fe(X(),"SMUITabBarActivated",{index:i})})),t(g).init(),()=>{t(g).destroy()}));function W(i){return i instanceof Object?t(E).get(i):t(P)[i]}function tt(i,C){i instanceof Object?(t(E).set(i,C),T(E,t(E))):(j(P,t(P)[i]=C),T(P,t(P)))}function ct(i){i instanceof Object?(t(E).delete(i),T(E,t(E))):(delete t(P)[i],T(P,t(P)))}function F(i){t(g).scrollIntoView(i)}function X(){return t(b)}Pt(()=>(Ot(f()),Ot(o()),t(v),t(g),Ot(u())),()=>{f()!==o()[t(v)]&&(T(v,o().indexOf(f())),t(g)&&(T(O,!u()),t(g).activateTab(t(v)),T(O,!1)))}),Pt(()=>(Ot(o()),t(E),t(P),t(v)),()=>{if(o().length){const i=o()[0]instanceof Object?t(E).get(o()[0]):t(P)[o()[0]];i&&i.forceAccessible(t(v)===-1)}}),Pt(()=>(t(g),Ot(S())),()=>{t(g)&&t(g).setUseAutomaticActivation(S())}),ae(),Vt();var V=Ue();const at=D(()=>zt(r,["tabScroller$"]));var k=i=>{var C;t(g)&&t(g).handleKeyDown(i),(C=r.onkeydown)==null||C.call(r,i)},ot=i=>{var C;t(g)&&t(g).handleTabInteraction(i),(C=r.onSMUITabInteracted)==null||C.call(r,i)};let et;var G=K(V),z=jt(()=>Ct(r,"tabScroller$"));return Q(Ye(G,Bt(()=>t(z),{children:(i,C)=>{var p=St(),L=nt(p);he(L,1,o,rt=>s()(rt),(rt,q)=>{var ht=St(),Dt=nt(ht);Mt(Dt,e,"default",{get tab(){return t(q)}},null),A(rt,ht)}),A(i,p)},$$slots:{default:!0},$$legacy:!0})),i=>T(_,i),()=>t(_)),N(V),Q(V,i=>T(b,i),()=>t(b)),bt(V,(i,C)=>Tt(i,C),a),U(()=>et=At(V,et,{class:st({[c()]:!0,"mdc-tab-bar":!0}),role:"tablist",tabindex:I(),...t(at),onkeydown:k,onSMUITabInteracted:ot})),A(d,V),Y(e,"scrollIntoView",F),Y(e,"getElement",X),Ft({scrollIntoView:F,getElement:X})}var ke=B('<div><!> <!> <div style="margin-top: 1em;"><div>Programmatically select:</div> <!></div></div>');function je(d){let e=y("Home");var n=ke(),r=K(n);Rt(r,{tabs:["Home","Merchandise","About Us"],get active(){return t(e)},set active(s){T(e,s)},children:_t,$$slots:{default:(s,h)=>{const u=D(()=>h.tab);yt(s,{get tab(){return t(u)},children:(S,f)=>{ft(S,{children:(I,b)=>{x();var g=M();U(()=>Z(g,t(u))),A(I,g)},$$slots:{default:!0}})},$$slots:{default:!0}})}},$$legacy:!0});var a=H(r,2);Kt(a,()=>t(e)==="Home",s=>{ee(s,{variant:"unelevated",children:(h,u)=>{re(h,{children:(S,f)=>{x();var I=M("Welcome to the Home page! I hope you like SMUI!");A(S,I)},$$slots:{default:!0}})},$$slots:{default:!0}})},s=>{var h=St(),u=nt(h);Kt(u,()=>t(e)==="Merchandise",S=>{ee(S,{variant:"unelevated",children:(f,I)=>{re(f,{children:(b,g)=>{x();var _=M(`You want merch? We got so much cool merch! We got SMUI toilet paper,
        SMUI ironing boards, SMUI gas pedals! Come and get 'em!`);A(b,_)},$$slots:{default:!0}})},$$slots:{default:!0}})},S=>{var f=St(),I=nt(f);Kt(I,()=>t(e)==="About Us",b=>{ee(b,{variant:"unelevated",children:(g,_)=>{re(g,{children:(v,P)=>{x();var E=M(`We are a boutique UI library, ready to get you up and running on
        whatever your project is. Whether you're building a web UI for an
        automated toaster or a web UI for an automated coffee maker, SMUI is
        ready for you!`);A(v,E)},$$slots:{default:!0}})},$$slots:{default:!0}})},null,!0),A(S,f)},!0),A(s,h)});var c=H(a,2),o=H(K(c),2);he(o,0,()=>["Home","Merchandise","About Us"],ye,(s,h)=>{Re(s,{onclick:()=>T(e,h),children:(u,S)=>{ft(u,{children:(f,I)=>{x();var b=M();U(()=>Z(b,h)),A(f,b)},$$slots:{default:!0}})},$$slots:{default:!0}})}),N(c),N(n),A(d,n)}var Be=B("<!> <!>",1),Xe=B("<div><!></div>");function Ge(d){let e=[{icon:"access_time",label:"Recents"},{icon:"near_me",label:"Nearby"},{icon:"favorite",label:"Favorites"}],n=y(e[0]);var r=Xe(),a=K(r);Rt(a,{tabs:e,get active(){return t(n)},set active(c){T(n,c)},children:_t,$$slots:{default:(c,o)=>{const s=D(()=>o.tab);yt(c,{get tab(){return t(s)},children:(h,u)=>{var S=Be(),f=nt(S);ve(f,{class:"material-icons",children:(b,g)=>{x();var _=M();U(()=>Z(_,t(s).icon)),A(b,_)},$$slots:{default:!0}});var I=H(f,2);ft(I,{children:(b,g)=>{x();var _=M();U(()=>Z(_,t(s).label)),A(b,_)},$$slots:{default:!0}}),A(h,S)},$$slots:{default:!0}})}},$$legacy:!0}),N(r),A(d,r)}var ze=B("<!> <!>",1),qe=B('<div><!> <pre class="status"> </pre></div>');function Je(d){const e=h=>h.k;let n=[{k:1,icon:"code",label:"Code"},{k:2,icon:"code",label:"Code"},{k:3,icon:"code",label:"Code"},{k:4,icon:"code",label:"Code"}],r=y(n[2]);var a=qe(),c=K(a);Rt(c,{tabs:n,key:e,get active(){return t(r)},set active(h){T(r,h)},children:_t,$$slots:{default:(h,u)=>{const S=D(()=>u.tab);yt(h,{get tab(){return t(S)},stacked:!0,indicatorSpanOnlyContent:!0,tabIndicator$transition:"fade",children:(f,I)=>{var b=ze(),g=nt(b);ve(g,{class:"material-icons",children:(v,P)=>{x();var E=M();U(()=>Z(E,t(S).icon)),A(v,E)},$$slots:{default:!0}});var _=H(g,2);ft(_,{children:(v,P)=>{x();var E=M();U(()=>Z(E,t(S).label)),A(v,E)},$$slots:{default:!0}}),A(f,b)},$$slots:{default:!0}})}},$$legacy:!0});var o=H(c,2),s=K(o);N(o),N(a),U(()=>Z(s,`Selected: ${t(r).k??""}`)),A(d,a)}var Qe=B("<div><!></div>");function Ze(d,e){Nt(e,!1),Vt();var n=Qe(),r=K(n),a=D(()=>[...Array(20)].map((c,o)=>o+1));Rt(r,{get tabs(){return t(a)},children:_t,$$slots:{default:(c,o)=>{const s=D(()=>o.tab);yt(c,{get tab(){return t(s)},children:(h,u)=>{ft(h,{children:(S,f)=>{x();var I=M();U(()=>Z(I,`Tab ${t(s)??""}`)),A(S,I)},$$slots:{default:!0}})},$$slots:{default:!0}})}}}),N(n),A(d,n),Ft()}var tr=B("<div><!></div>");function er(d){let e=y("Home");var n=tr(),r=K(n);Rt(r,{tabs:["Home","Merchandise","About Us"],get active(){return t(e)},set active(a){T(e,a)},children:_t,$$slots:{default:(a,c)=>{const o=D(()=>c.tab);yt(a,{get tab(){return t(o)},minWidth:!0,children:(s,h)=>{ft(s,{children:(u,S)=>{x();var f=M();U(()=>Z(f,t(o))),A(u,f)},$$slots:{default:!0}})},$$slots:{default:!0}})}},$$legacy:!0}),N(n),A(d,n)}var rr=B('<div class="icon-indicators svelte-qoao06"><!></div>');function nr(d){let e=y("Home");var n=rr(),r=K(n);Rt(r,{tabs:["Home","Merchandise","About Us"],get active(){return t(e)},set active(a){T(e,a)},children:_t,$$slots:{default:(a,c)=>{const o=D(()=>c.tab);yt(a,{get tab(){return t(o)},tabIndicator$type:"icon",tabIndicator$content$class:"material-icons",children:(s,h)=>{ft(s,{children:(u,S)=>{x();var f=M();U(()=>Z(f,t(o))),A(u,f)},$$slots:{default:!0}})},$$slots:{default:!0,"tab-indicator":(s,h)=>{var u=M("star");A(s,u)}}})}},$$legacy:!0}),N(n),A(d,n)}var ar=B('<div><!> <iframe src="https://en.wikipedia.org/wiki/Home" title="Selected Tab" name="href-tabs-frame" style="width: 100%; height: 400px; border: 0;"></iframe></div>');function or(d){let e=y("Home");var n=ar(),r=K(n);Rt(r,{tabs:["Home","Merchandise","About Us"],get active(){return t(e)},set active(a){T(e,a)},children:_t,$$slots:{default:(a,c)=>{const o=D(()=>c.tab);var s=D(()=>`https://en.wikipedia.org/wiki/${t(o).replace(/ /g,"_")??""}`);yt(a,{get tab(){return t(o)},get href(){return t(s)},target:"href-tabs-frame",children:(h,u)=>{ft(h,{children:(S,f)=>{x();var I=M();U(()=>Z(I,t(o))),A(S,I)},$$slots:{default:!0}})},$$slots:{default:!0}})}},$$legacy:!0}),x(2),N(n),A(d,n)}var lr=B('<section class="svelte-w2pbwc"><h2>Tabs</h2> <h5>Installation</h5> <pre class="demo-spaced">npm i -D @smui/tab @smui/tab-bar</pre> <h5>Demos</h5> <!> <!> <!> <!> <!> <!> <!></section>');function Er(d){var e=lr();Ae(u=>{Te.title="Tabs - SMUI"});var n=H(K(e),8);mt(n,{component:je,file:"tabs/_Simple.svelte"});var r=H(n,2);mt(r,{component:Ge,file:"tabs/_Icons.svelte",children:(u,S)=>{x();var f=M("Tabs with icons next to labels");A(u,f)},$$slots:{default:!0}});var a=H(r,2);mt(a,{component:Je,file:"tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte",children:(u,S)=>{x();var f=M(`Keyed tabs with icons above labels, indicators restricted to content, and
    fade transition`);A(u,f)},$$slots:{default:!0}});var c=H(a,2);mt(c,{component:Ze,file:"tabs/_ScrollingNoInitialActive.svelte",children:(u,S)=>{x();var f=M("Scrolling tabs with no initial active tab");A(u,f)},$$slots:{default:!0}});var o=H(c,2);mt(o,{component:er,file:"tabs/_MinWidth.svelte",children:(u,S)=>{x();var f=M("Min width tabs");A(u,f)},$$slots:{default:!0}});var s=H(o,2);mt(s,{component:nr,file:"tabs/_IconIndicators.svelte",children:(u,S)=>{x();var f=M("Icon indicators");A(u,f)},$$slots:{default:!0}});var h=H(s,2);mt(h,{component:or,file:"tabs/_HrefAnchors.svelte",children:(u,S)=>{x();var f=M("Tabs with href attributes render as anchor elements");A(u,f)},$$slots:{default:!0,subtitle:(u,S)=>{var f=M(`But they don't activate through keyboard arrow keys. They need to be
      activated with the enter key.`);A(u,f)}}}),N(e),A(d,e)}export{Er as component};
