import{a as A,t as k,c as Ot,b as D}from"../chunks/disclose-version.L5AxZWdJ.js";import"../chunks/legacy.BD6Y8N1p.js";import{p as Wt,s as N,u as Dt,g as a,c as P,X as he,e as $,n as tt,r as K,t as Y,a as $t,d as F,k as Nt,b as Lt,f as st,h as U,j as O,aO as ve,a3 as me}from"../chunks/runtime.W_ZEMHic.js";import{h as ge}from"../chunks/svelte-head.CjyVSp6W.js";import{D as St}from"../chunks/Demo.GmEJ1ln4.js";import{s as Z}from"../chunks/render.CKVW2_jY.js";import{p as I,a as y,b as nt,r as Ht,c as Jt,i as xt}from"../chunks/props.Ce4KWaWc.js";import{_ as ct,a as vt,M as Ut,d as ne,f as pe,p as be,e as ae,i as Se}from"../chunks/dispatch.KCohpohh.js";import{s as wt,b as At,u as Tt,d as Ct,c as ht}from"../chunks/useActions.kHGJbmCA.js";import{c as Ae}from"../chunks/svelte-component.DzrVSg9R.js";import{o as Yt}from"../chunks/index-client.CM1w6q3L.js";import{e as kt,p as Pt}from"../chunks/prefixFilter.OhiPYEKz.js";import{R as Te}from"../chunks/IconButton.TWSmi4tO.js";import{S as Ce}from"../chunks/SmuiElement.BxZKRkXS.js";import{C as mt}from"../chunks/CommonLabel.Ciev27VL.js";import{B as _e}from"../chunks/Button.D6PakGQs.js";import{P as Gt}from"../chunks/Paper.CWMtkqV2.js";import{C as zt}from"../chunks/Content.DFIakTGx.js";import{C as oe}from"../chunks/Svg.CokoKx7a.js";import{i as Ie}from"../chunks/lifecycle.u6KjKakg.js";/**
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
 */var ye={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Ee={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var lt=function(f){ct(t,f);function t(e){return f.call(this,vt(vt({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return ye},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ee},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),t.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},t}(Ut);/**
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
 */var Re=function(f){ct(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.activate=function(){this.adapter.addClass(lt.cssClasses.ACTIVE)},t.prototype.deactivate=function(){this.adapter.removeClass(lt.cssClasses.ACTIVE)},t}(lt);/**
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
 */var re=function(f){ct(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.activate=function(e){if(!e){this.adapter.addClass(lt.cssClasses.ACTIVE);return}var r=this.computeContentClientRect(),n=e.width/r.width,o=e.left-r.left;this.adapter.addClass(lt.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+o+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter.removeClass(lt.cssClasses.NO_TRANSITION),this.adapter.addClass(lt.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},t.prototype.deactivate=function(){this.adapter.removeClass(lt.cssClasses.ACTIVE)},t}(lt);/**
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
 */var Le=function(f){ct(t,f);function t(e){var r=f.call(this,vt(vt({},t.defaultAdapter),e))||this;return r.focusOnActivate=!0,r}return Object.defineProperty(t,"cssClasses",{get:function(){return Vt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.handleClick=function(){this.adapter.notifyInteracted()},t.prototype.isActive=function(){return this.adapter.hasClass(Vt.ACTIVE)},t.prototype.setFocusOnActivate=function(e){this.focusOnActivate=e},t.prototype.activate=function(e){this.adapter.addClass(Vt.ACTIVE),this.adapter.setAttr(Mt.ARIA_SELECTED,"true"),this.adapter.setAttr(Mt.TABINDEX,"0"),this.adapter.activateIndicator(e),this.focusOnActivate&&this.adapter.focus()},t.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(Vt.ACTIVE),this.adapter.setAttr(Mt.ARIA_SELECTED,"false"),this.adapter.setAttr(Mt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},t.prototype.computeDimensions=function(){var e=this.adapter.getOffsetWidth(),r=this.adapter.getOffsetLeft(),n=this.adapter.getContentOffsetWidth(),o=this.adapter.getContentOffsetLeft();return{contentLeft:r+o,contentRight:r+o+n,rootLeft:r,rootRight:r+e}},t}(Ut),Oe=k("<span><span><!></span></span>");function Pe(f,t){Wt(t,!0);let e=I(t,"use",19,()=>[]),r=I(t,"class",3,""),n=I(t,"active",15,!1),o=I(t,"type",3,"underline"),d=I(t,"transition",3,"slide"),g=I(t,"content$use",19,()=>[]),S=I(t,"content$class",3,""),c=Ht(t,["$$slots","$$events","$$legacy","use","class","active","type","transition","content$use","content$class","children"]),h,v=N(void 0),m,b=N(y({})),C=N(y({})),p=y([]),L=d();Dt(()=>{L!==d()&&(L=d(),a(v)&&a(v).destroy(),P(b,y({})),P(C,y({})),P(v,y(T())),a(v).init())}),he(()=>{p.length&&requestAnimationFrame(()=>{const i=p.shift()??[];for(const _ of i)_()})}),Yt(()=>(P(v,y(T())),a(v).init(),()=>{var i;(i=a(v))==null||i.destroy()}));function T(){const i={fade:Re,slide:re}[d()]||re;return new i({addClass:(..._)=>R(()=>W(..._)),removeClass:(..._)=>R(()=>M(..._)),computeContentClientRect:j,setContentStyleProperty:(..._)=>R(()=>G(..._))})}function R(i){p.length?p[p.length-1].push(i):i()}function W(i){a(b)[i]||(a(b)[i]=!0)}function M(i){(!(i in a(b))||a(b)[i])&&(a(b)[i]=!1)}function G(i,_){a(C)[i]!=_&&(_===""||_==null?delete a(C)[i]:a(C)[i]=_)}function et(i){var _;n(!0),(_=a(v))==null||_.activate(i)}function rt(){var i;n(!1),(i=a(v))==null||i.deactivate()}function j(){return p.push([]),m.getBoundingClientRect()}function w(){return h}var B=Oe();const at=F(()=>kt(c,["content$"]));let ot;var X=$(B);const z=F(()=>Pt(c,"content$"));let it;var l=$(X);return wt(l,()=>t.children??tt),K(X),nt(X,i=>m=i,()=>m),At(X,(i,_)=>{var V;return(V=Tt)==null?void 0:V(i,_)},g),K(B),nt(B,i=>h=i,()=>h),At(B,(i,_)=>{var V;return(V=Tt)==null?void 0:V(i,_)},e),Y(()=>{ot=Ct(B,ot,{class:ht({[r()]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":n(),"mdc-tab-indicator--fade":d()==="fade",...a(b)}),...a(at)}),it=Ct(X,it,{class:ht({[S()]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":o()==="underline","mdc-tab-indicator__content--icon":o()==="icon"}),style:Object.entries(a(C)).map(([i,_])=>`${i}: ${_};`).join(" "),"aria-hidden":o()==="icon"?"true":void 0,...a(z)})}),A(f,B),$t({activate:et,deactivate:rt,computeContentClientRect:j,getElement:w})}var Me=k('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>',1);function _t(f,t){Wt(t,!0);const e=s=>{var E=F(()=>Pt(p,"tabIndicator$"));nt(Pe(s,Jt(()=>a(E),{get active(){return a(w)},set active(H){P(w,y(H))},children:(H,bt)=>{var ut=Ot(),ft=st(ut);wt(ft,()=>t.tabIndicator??tt),A(H,ut)},$$slots:{default:!0}})),H=>W=H,()=>W)};let r=I(t,"use",19,()=>[]),n=I(t,"class",3,""),o=I(t,"style",3,""),d=I(t,"ripple",3,!0),g=I(t,"stacked",3,!1),S=I(t,"minWidth",3,!1),c=I(t,"indicatorSpanOnlyContent",3,!1),h=I(t,"href",3,void 0),v=I(t,"content$use",19,()=>[]),m=I(t,"content$class",3,""),b=I(t,"component",3,Ce),C=I(t,"tag",19,()=>h()==null?"button":"a"),p=Ht(t,["$$slots","$$events","$$legacy","use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","children","tabIndicator"]),L,T=N(void 0),R,W,M=y({}),G=y({}),et=y({}),rt=Nt("SMUI:tab:focusOnActivate");const j=Nt("SMUI:tab:initialActive");let w=N(y(j.active!=null&&j.key(t.tab)===j.active)),B=N(!1);if(Lt("SMUI:label:context","tab"),Lt("SMUI:icon:context","tab"),!t.tab)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");let at=!1;Dt(()=>{if(!a(T)){at=!1;return}at||(at=!0,a(T).setFocusOnActivate(rt))});const ot=Nt("SMUI:tab:mount"),X=Nt("SMUI:tab:unmount");Yt(()=>{P(T,y(new Le({setAttr:_,addClass:it,removeClass:l,hasClass:z,activateIndicator:E=>W.activate(E),deactivateIndicator:()=>W.deactivate(),notifyInteracted:()=>ne(q(),"SMUITabInteracted",{tabId:t.tab}),getOffsetLeft:()=>q().offsetLeft,getOffsetWidth:()=>q().offsetWidth,getContentOffsetLeft:()=>R.offsetLeft,getContentOffsetWidth:()=>R.offsetWidth,focus:gt})));const s={tabId:t.tab,get element(){return q()},get active(){return a(w)},forceAccessible(E){P(B,y(E))},computeIndicatorClientRect:()=>W.computeContentClientRect(),computeDimensions:()=>{if(a(T)==null)throw new Error("Instance is undefined.");return a(T).computeDimensions()},focus:gt,activate:V,deactivate:dt};return ot&&ot(s),a(T).init(),()=>{var E;X&&X(s),(E=a(T))==null||E.destroy()}});function z(s){return s in M?M[s]:q().classList.contains(s)}function it(s){M[s]||(M[s]=!0)}function l(s){(!(s in M)||M[s])&&(M[s]=!1)}function i(s,E){G[s]!=E&&(E===""||E==null?delete G[s]:G[s]=E)}function _(s,E){et[s]!==E&&(et[s]=E)}function V(s,E){var H,bt,ut;P(w,!0),E&&((H=a(T))==null||H.setFocusOnActivate(!1)),(bt=a(T))==null||bt.activate(s),E&&((ut=a(T))==null||ut.setFocusOnActivate(rt))}function dt(){var s;P(w,!1),(s=a(T))==null||s.deactivate()}function gt(){q().focus()}function q(){return L.getElement()}var Rt=Ot(),Kt=st(Rt),pt=F(()=>[[Te,{ripple:d(),unbounded:!1,addClass:it,removeClass:l,addStyle:i}],...r()]),jt=F(()=>ht({[n()]:!0,"mdc-tab":!0,"mdc-tab--active":a(w),"mdc-tab--stacked":g(),"mdc-tab--min-width":S(),...M})),Bt=F(()=>Object.entries(G).map(([s,E])=>`${s}: ${E};`).concat([o()]).join(" ")),Ft=F(()=>a(w)?"true":"false"),Xt=F(()=>a(w)||a(B)?"0":"-1"),u=F(()=>kt(p,["content$","tabIndicator$"]));return Ae(Kt,b,(s,E)=>{nt(E(s,Jt({get tag(){return C()},get use(){return a(pt)},get class(){return a(jt)},get style(){return a(Bt)},role:"tab",get"aria-selected"(){return a(Ft)},get tabindex(){return a(Xt)},get href(){return h()}},()=>et,()=>a(u),{onclick:H=>{var bt;(bt=t.onclick)==null||bt.call(t,H),!H.defaultPrevented&&a(T)&&a(T).handleClick()},children:(H,bt)=>{var ut=Me(),ft=st(ut);const le=F(()=>Pt(p,"content$"));let Zt;var te=$(ft);wt(te,()=>t.children??tt);var se=U(te,2);{var ce=J=>{e(J)};xt(se,J=>{c()&&J(ce)})}K(ft),nt(ft,J=>R=J,()=>R),At(ft,(J,fe)=>{var ee;return(ee=Tt)==null?void 0:ee(J,fe)},v);var de=U(ft,2);{var ue=J=>{e(J)};xt(de,J=>{c()||J(ue)})}O(2),Y(()=>Zt=Ct(ft,Zt,{class:ht({[m()]:!0,"mdc-tab__content":!0}),...a(le)})),A(H,ut)},$$slots:{default:!0}})),H=>L=H,()=>L)}),A(f,Rt),$t({activate:V,deactivate:dt,focus:gt,getElement:q})}/**
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
 */var ie={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},De={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var xe=function(f){ct(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(){var e=this.adapter.getScrollAreaScrollLeft(),r=this.calculateScrollEdges().right;return Math.round(r-e)},t.prototype.scrollToRTL=function(e){var r=this.calculateScrollEdges(),n=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue(r.right-e);return{finalScrollPosition:o,scrollDelta:o-n}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-e);return{finalScrollPosition:n,scrollDelta:n-r}},t.prototype.getAnimatingScrollPosition=function(e){return e},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-r}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,e),r.right)},t}(Qt);/**
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
 */var we=function(f){ct(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(e-r)},t.prototype.scrollToRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(-e);return{finalScrollPosition:n,scrollDelta:n-r}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r-e);return{finalScrollPosition:n,scrollDelta:n-r}},t.prototype.getAnimatingScrollPosition=function(e,r){return e-r},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:r-e,right:0}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.max(Math.min(r.right,e),r.left)},t}(Qt);/**
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
 */var We=function(f){ct(t,f);function t(){return f!==null&&f.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft();return Math.round(r-e)},t.prototype.scrollToRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e);return{finalScrollPosition:n,scrollDelta:r-n}},t.prototype.incrementScrollRTL=function(e){var r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(r+e);return{finalScrollPosition:n,scrollDelta:r-n}},t.prototype.getAnimatingScrollPosition=function(e,r){return e+r},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:e-r,right:0}},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.right,e),r.left)},t}(Qt);/**
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
 */var $e=function(f){ct(t,f);function t(e){var r=f.call(this,vt(vt({},t.defaultAdapter),e))||this;return r.isAnimating=!1,r}return Object.defineProperty(t,"cssClasses",{get:function(){return ie},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return De},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-e+"px"),this.adapter.addScrollAreaClass(t.cssClasses.SCROLL_AREA_SCROLL)},t.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var e=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return r-e},t.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},t.prototype.handleTransitionEnd=function(e){var r=e.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(r,t.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(t.cssClasses.ANIMATING))},t.prototype.incrementScroll=function(e){e!==0&&this.animate(this.getIncrementScrollOperation(e))},t.prototype.incrementScrollImmediate=function(e){if(e!==0){var r=this.getIncrementScrollOperation(e);r.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition))}},t.prototype.scrollTo=function(e){if(this.isRTL()){this.scrollToImplRTL(e);return}this.scrollToImpl(e)},t.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},t.prototype.calculateCurrentTranslateX=function(){var e=this.adapter.getScrollContentStyleValue("transform");if(e==="none")return 0;var r=/\((.+?)\)/.exec(e);if(!r)return 0;var n=r[1],o=pe(n.split(","),6);o[0],o[1],o[2],o[3];var d=o[4];return o[5],parseFloat(d)},t.prototype.clampScrollValue=function(e){var r=this.calculateScrollEdges();return Math.min(Math.max(r.left,e),r.right)},t.prototype.computeCurrentScrollPositionRTL=function(){var e=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(e)},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),r=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-r}},t.prototype.scrollToImpl=function(e){var r=this.getScrollPosition(),n=this.clampScrollValue(e),o=n-r;this.animate({finalScrollPosition:n,scrollDelta:o})},t.prototype.scrollToImplRTL=function(e){var r=this.getRTLScroller().scrollToRTL(e);this.animate(r)},t.prototype.getIncrementScrollOperation=function(e){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(e);var r=this.getScrollPosition(),n=e+r,o=this.clampScrollValue(n),d=o-r;return{finalScrollPosition:o,scrollDelta:d}},t.prototype.animate=function(e){var r=this;e.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+e.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){r.adapter.addClass(t.cssClasses.ANIMATING),r.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},t.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var e=this.getAnimatingScrollPosition();this.adapter.removeClass(t.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(e)},t.prototype.getAnimatingScrollPosition=function(){var e=this.calculateCurrentTranslateX(),r=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(r,e):r-e},t.prototype.rtlScrollerFactory=function(){var e=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(e-1);var r=this.adapter.getScrollAreaScrollLeft();if(r<0)return this.adapter.setScrollAreaScrollLeft(e),new we(this.adapter);var n=this.adapter.computeScrollAreaClientRect(),o=this.adapter.computeScrollContentClientRect(),d=Math.round(o.right-n.right);return this.adapter.setScrollAreaScrollLeft(e),d===r?new We(this.adapter):new xe(this.adapter)},t.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},t}(Ut);/**
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
 */var qt;function Ke(f,t){if(t===void 0&&(t=!0),t&&typeof qt<"u")return qt;var e=f.createElement("div");e.classList.add(ie.SCROLL_TEST),f.body.appendChild(e);var r=e.offsetHeight-e.clientHeight;return f.body.removeChild(e),t&&(qt=r),r}/**
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
 */var x={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Q={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var It=new Set;It.add(x.ARROW_LEFT_KEY);It.add(x.ARROW_RIGHT_KEY);It.add(x.END_KEY);It.add(x.HOME_KEY);It.add(x.ENTER_KEY);It.add(x.SPACE_KEY);var yt=new Map;yt.set(Q.ARROW_LEFT_KEYCODE,x.ARROW_LEFT_KEY);yt.set(Q.ARROW_RIGHT_KEYCODE,x.ARROW_RIGHT_KEY);yt.set(Q.END_KEYCODE,x.END_KEY);yt.set(Q.HOME_KEYCODE,x.HOME_KEY);yt.set(Q.ENTER_KEYCODE,x.ENTER_KEY);yt.set(Q.SPACE_KEYCODE,x.SPACE_KEY);var Fe=function(f){ct(t,f);function t(e){var r=f.call(this,vt(vt({},t.defaultAdapter),e))||this;return r.useAutomaticActivation=!1,r}return Object.defineProperty(t,"strings",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Q},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setUseAutomaticActivation=function(e){this.useAutomaticActivation=e},t.prototype.activateTab=function(e){var r=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(e)||e===r)){var n;r!==-1&&(this.adapter.deactivateTabAtIndex(r),n=this.adapter.getTabIndicatorClientRectAtIndex(r)),this.adapter.activateTabAtIndex(e,n),this.scrollIntoView(e),this.adapter.notifyTabActivated(e)}},t.prototype.handleKeyDown=function(e){var r=this.getKeyFromEvent(e);if(r!==void 0)if(this.isActivationKey(r)||e.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(r))return;var n=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),r);this.adapter.setActiveTab(n),this.scrollIntoView(n)}else{var o=this.adapter.getFocusedTabIndex();if(this.isActivationKey(r))this.adapter.setActiveTab(o);else{var n=this.determineTargetFromKey(o,r);this.adapter.focusTabAtIndex(n),this.scrollIntoView(n)}}},t.prototype.handleTabInteraction=function(e){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId))},t.prototype.scrollIntoView=function(e){if(this.indexIsInRange(e)){if(e===0){this.adapter.scrollTo(0);return}if(e===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(e);return}this.scrollIntoViewImpl(e)}},t.prototype.determineTargetFromKey=function(e,r){var n=this.isRTL(),o=this.adapter.getTabListLength()-1,d=r===x.END_KEY,g=r===x.ARROW_LEFT_KEY&&!n||r===x.ARROW_RIGHT_KEY&&n,S=r===x.ARROW_RIGHT_KEY&&!n||r===x.ARROW_LEFT_KEY&&n,c=e;return d?c=o:g?c-=1:S?c+=1:c=0,c<0?c=o:c>o&&(c=0),c},t.prototype.calculateScrollIncrement=function(e,r,n,o){var d=this.adapter.getTabDimensionsAtIndex(r),g=d.contentLeft-n-o,S=d.contentRight-n,c=S-Q.EXTRA_SCROLL_AMOUNT,h=g+Q.EXTRA_SCROLL_AMOUNT;return r<e?Math.min(c,0):Math.max(h,0)},t.prototype.calculateScrollIncrementRTL=function(e,r,n,o,d){var g=this.adapter.getTabDimensionsAtIndex(r),S=d-g.contentLeft-n,c=d-g.contentRight-n-o,h=c+Q.EXTRA_SCROLL_AMOUNT,v=S-Q.EXTRA_SCROLL_AMOUNT;return r>e?Math.max(h,0):Math.min(v,0)},t.prototype.findAdjacentTabIndexClosestToEdge=function(e,r,n,o){var d=r.rootLeft-n,g=r.rootRight-n-o,S=d+g,c=d<0||S<0,h=g>0||S>0;return c?e-1:h?e+1:-1},t.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(e,r,n,o,d){var g=d-r.rootLeft-o-n,S=d-r.rootRight-n,c=g+S,h=g>0||c>0,v=S<0||c<0;return h?e+1:v?e-1:-1},t.prototype.getKeyFromEvent=function(e){return It.has(e.key)?e.key:yt.get(e.keyCode)},t.prototype.isActivationKey=function(e){return e===x.SPACE_KEY||e===x.ENTER_KEY},t.prototype.indexIsInRange=function(e){return e>=0&&e<this.adapter.getTabListLength()},t.prototype.isRTL=function(){return this.adapter.isRTL()},t.prototype.scrollIntoViewImpl=function(e){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),o=this.adapter.getTabDimensionsAtIndex(e),d=this.findAdjacentTabIndexClosestToEdge(e,o,r,n);if(this.indexIsInRange(d)){var g=this.calculateScrollIncrement(e,d,r,n);this.adapter.incrementScroll(g)}},t.prototype.scrollIntoViewImplRTL=function(e){var r=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),o=this.adapter.getTabDimensionsAtIndex(e),d=this.adapter.getScrollContentWidth(),g=this.findAdjacentTabIndexClosestToEdgeRTL(e,o,r,n,d);if(this.indexIsInRange(g)){var S=this.calculateScrollIncrementRTL(e,g,r,n,d);this.adapter.incrementScroll(S)}},t}(Ut),Ne=k("<div><div><div><!></div></div></div>");function Ve(f,t){Wt(t,!0);const{matches:e}=be;let r=I(t,"use",19,()=>[]),n=I(t,"class",3,""),o=I(t,"align",3,void 0),d=I(t,"scrollArea$use",19,()=>[]),g=I(t,"scrollArea$class",3,""),S=I(t,"scrollContent$use",19,()=>[]),c=I(t,"scrollContent$class",3,""),h=Ht(t,["$$slots","$$events","$$legacy","use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","children"]),v,m=N(void 0),b,C,p=y({}),L=y({}),T=y({}),R=y({});Yt(()=>(P(m,y(new $e({eventTargetMatchesSelector:(u,s)=>e(u,s),addClass:W,removeClass:M,addScrollAreaClass:G,setScrollAreaStyleProperty:et,setScrollContentStyleProperty:rt,getScrollContentStyleValue:j,setScrollAreaScrollLeft:u=>b.scrollLeft=u,getScrollAreaScrollLeft:()=>b.scrollLeft,getScrollContentOffsetWidth:()=>C.offsetWidth,getScrollAreaOffsetWidth:()=>b.offsetWidth,computeScrollAreaClientRect:()=>b.getBoundingClientRect(),computeScrollContentClientRect:()=>C.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>Ke(document)}))),a(m).init(),()=>{var u;(u=a(m))==null||u.destroy()}));function W(u){p[u]||(p[u]=!0)}function M(u){(!(u in p)||p[u])&&(p[u]=!1)}function G(u){L[u]||(L[u]=!0)}function et(u,s){T[u]!=s&&(s===""||s==null?delete T[u]:T[u]=s)}function rt(u,s){R[u]!=s&&(s===""||s==null?delete R[u]:R[u]=s)}function j(u){return u in R?R[u]:getComputedStyle(C).getPropertyValue(u)}function w(){if(a(m)==null)throw new Error("Instance is undefined.");return a(m).getScrollPosition()}function B(){return C.offsetWidth}function at(u){var s;(s=a(m))==null||s.incrementScroll(u)}function ot(u){var s;(s=a(m))==null||s.scrollTo(u)}function X(){return v}var z=Ne();const it=F(()=>kt(h,["scrollArea$","scrollContent$"]));let l;var i=$(z);const _=F(()=>Pt(h,"scrollArea$"));var V=u=>{var s;a(m)&&a(m).handleInteraction(),(s=t.scrollArea$onwheel)==null||s.call(t,u)},dt=u=>{var s;a(m)&&a(m).handleInteraction(),(s=t.scrollArea$ontouchstart)==null||s.call(t,u)},gt=u=>{var s;a(m)&&a(m).handleInteraction(),(s=t.scrollArea$onpointerdown)==null||s.call(t,u)},q=u=>{var s;a(m)&&a(m).handleInteraction(),(s=t.scrollArea$onmousedown)==null||s.call(t,u)},Rt=u=>{var s;a(m)&&a(m).handleInteraction(),(s=t.scrollArea$onkeydown)==null||s.call(t,u)};let Kt;var pt=$(i);const jt=F(()=>Pt(h,"scrollContent$"));var Bt=u=>{var s;a(m)&&a(m).handleTransitionEnd(u),(s=t.scrollContent$ontransitionend)==null||s.call(t,u)};let Ft;var Xt=$(pt);return wt(Xt,()=>t.children??tt),K(pt),nt(pt,u=>C=u,()=>C),At(pt,(u,s)=>{var E;return(E=Tt)==null?void 0:E(u,s)},S),K(i),nt(i,u=>b=u,()=>b),At(i,(u,s)=>{var E;return(E=Tt)==null?void 0:E(u,s)},d),K(z),nt(z,u=>v=u,()=>v),At(z,(u,s)=>{var E;return(E=Tt)==null?void 0:E(u,s)},r),Y(()=>{l=Ct(z,l,{class:ht({[n()]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":o()==="start","mdc-tab-scroller--align-end":o()==="end","mdc-tab-scroller--align-center":o()==="center",...p}),...a(it)}),Kt=Ct(i,Kt,{class:ht({[g()]:!0,"mdc-tab-scroller__scroll-area":!0,...L}),style:Object.entries(T).map(([u,s])=>`${u}: ${s};`).join(" "),...a(_),onwheel:V,ontouchstart:dt,onpointerdown:gt,onmousedown:q,onkeydown:Rt}),Ft=Ct(pt,Ft,{class:ht({[c()]:!0,"mdc-tab-scroller__scroll-content":!0}),style:Object.entries(R).map(([u,s])=>`${u}: ${s};`).join(" "),...a(jt),ontransitionend:Bt})}),A(f,z),$t({getScrollPosition:w,getScrollContentWidth:B,incrementScroll:at,scrollTo:ot,getElement:X})}var He=k("<div><!></div>");function Et(f,t){Wt(t,!0);let e=I(t,"use",19,()=>[]),r=I(t,"class",3,""),n=I(t,"tabs",19,()=>[]),o=I(t,"key",3,l=>l),d=I(t,"focusOnActivate",3,!0),g=I(t,"focusOnProgrammatic",3,!1),S=I(t,"useAutomaticActivation",3,!0),c=I(t,"active",15),h=I(t,"tabindex",3,0),v=Ht(t,["$$slots","$$events","$$legacy","use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","tabindex","tab"]),m,b=N(void 0),C,p=N(y(c()==null?-1:n().findIndex(l=>c()&&o()(l)===o()(c())))),L=y({}),T=N(new WeakMap),R=!1;Lt("SMUI:tab:focusOnActivate",d()),Lt("SMUI:tab:initialActive",{active:c()==null?null:o()(c()),key:o()}),Dt(()=>{(c()==null&&a(p)!==-1||c()!=null&&a(p)===-1||c()!=null&&o()(c())!==o()(n()[a(p)]))&&(P(p,y(n().findIndex(l=>c()&&o()(l)===o()(c())))),a(b)&&(R=!g(),a(b).activateTab(a(p)),R=!1))}),Dt(()=>{if(n().length){const l=n()[0]instanceof Object?a(T).get(n()[0]):L[n()[0]];l&&l.forceAccessible(a(p)===-1)}});let W=!1;Dt(()=>{if(!a(b)){W=!1;return}W||(W=!0,a(b).setUseAutomaticActivation(S()))}),Lt("SMUI:tab:mount",l=>{G(l.tabId,l)}),Lt("SMUI:tab:unmount",l=>{et(l.tabId)}),Yt(()=>(P(b,y(new Fe({scrollTo:l=>C.scrollTo(l),incrementScroll:l=>C.incrementScroll(l),getScrollPosition:()=>C.getScrollPosition(),getScrollContentWidth:()=>C.getScrollContentWidth(),getOffsetWidth:()=>j().offsetWidth,isRTL:()=>getComputedStyle(j()).getPropertyValue("direction")==="rtl",setActiveTab:l=>{var i;c(n()[l]),P(p,y(l)),(i=a(b))==null||i.activateTab(l)},activateTabAtIndex:(l,i)=>{var _;return(_=M(n()[l]))==null?void 0:_.activate(i,R)},deactivateTabAtIndex:l=>{var i;return(i=M(n()[l]))==null?void 0:i.deactivate()},focusTabAtIndex:l=>{var i;return(i=M(n()[l]))==null?void 0:i.focus()},getTabIndicatorClientRectAtIndex:l=>{var i;return((i=M(n()[l]))==null?void 0:i.computeIndicatorClientRect())??new DOMRect},getTabDimensionsAtIndex:l=>{var i;return((i=M(n()[l]))==null?void 0:i.computeDimensions())??{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var l;for(let i=0;i<n().length;i++)if((l=M(n()[i]))!=null&&l.active)return i;return-1},getFocusedTabIndex:()=>{const l=n().map(_=>{var V;return(V=M(_))==null?void 0:V.element}),i=document.activeElement;return l.indexOf(i)},getIndexOfTabById:l=>n().findIndex(i=>o()(i)===o()(l)),getTabListLength:()=>n().length,notifyTabActivated:l=>ne(j(),"SMUITabBarActivated",{index:l})}))),a(b).init(),()=>{var l;(l=a(b))==null||l.destroy()}));function M(l){return l instanceof Object?a(T).get(l):L[l]}function G(l,i){l instanceof Object?(a(T).set(l,i),P(T,a(T))):L[l]=i}function et(l){l instanceof Object?(a(T).delete(l),P(T,a(T))):delete L[l]}function rt(l){var i;(i=a(b))==null||i.scrollIntoView(l)}function j(){return m}var w=He();const B=F(()=>kt(v,["tabScroller$"]));var at=l=>{var i;a(b)&&a(b).handleKeyDown(l),(i=t.onkeydown)==null||i.call(t,l)},ot=l=>{var i;a(b)&&a(b).handleTabInteraction(l),(i=t.onSMUITabInteracted)==null||i.call(t,l)};let X;var z=$(w),it=F(()=>Pt(v,"tabScroller$"));return nt(Ve(z,Jt(()=>a(it),{children:(l,i)=>{var _=Ot(),V=st(_);ae(V,17,n,dt=>o()(dt),(dt,gt)=>{var q=Ot(),Rt=st(q);wt(Rt,()=>t.tab,()=>a(gt)),A(dt,q)}),A(l,_)},$$slots:{default:!0}})),l=>C=l,()=>C),K(w),nt(w,l=>m=l,()=>m),At(w,(l,i)=>{var _;return(_=Tt)==null?void 0:_(l,i)},e),Y(()=>X=Ct(w,X,{class:ht({[r()]:!0,"mdc-tab-bar":!0}),role:"tablist",tabindex:h(),...a(B),onkeydown:at,onSMUITabInteracted:ot})),A(f,w),$t({scrollIntoView:rt,getElement:j})}var Ue=k('<div><!> <!> <div style="margin-top: 1em;"><div>Programmatically select:</div> <!></div></div>');function Ye(f){let t=N("Home");var e=Ue(),r=$(e);Et(r,{tabs:["Home","Merchandise","About Us"],get active(){return a(t)},set active(h){P(t,y(h))},tab:(h,v=tt)=>{_t(h,{get tab(){return v()},children:(m,b)=>{mt(m,{children:(C,p)=>{O();var L=D();Y(()=>Z(L,v())),A(C,L)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}});var n=U(r,2);{var o=c=>{Gt(c,{role:"tabpanel",variant:"unelevated",children:(h,v)=>{zt(h,{children:(m,b)=>{O();var C=D("Welcome to the Home page! I hope you like SMUI!");A(m,C)},$$slots:{default:!0}})},$$slots:{default:!0}})},d=c=>{var h=Ot(),v=st(h);{var m=C=>{Gt(C,{role:"tabpanel",variant:"unelevated",children:(p,L)=>{zt(p,{children:(T,R)=>{O();var W=D(`You want merch? We got so much cool merch! We got SMUI toilet paper,
        SMUI ironing boards, SMUI gas pedals! Come and get 'em!`);A(T,W)},$$slots:{default:!0}})},$$slots:{default:!0}})},b=C=>{var p=Ot(),L=st(p);{var T=R=>{Gt(R,{role:"tabpanel",variant:"unelevated",children:(W,M)=>{zt(W,{children:(G,et)=>{O();var rt=D(`We are a boutique UI library, ready to get you up and running on
        whatever your project is. Whether you're building a web UI for an
        automated toaster or a web UI for an automated coffee maker, SMUI is
        ready for you!`);A(G,rt)},$$slots:{default:!0}})},$$slots:{default:!0}})};xt(L,R=>{a(t)==="About Us"&&R(T)},!0)}A(C,p)};xt(v,C=>{a(t)==="Merchandise"?C(m):C(b,!1)},!0)}A(c,h)};xt(n,c=>{a(t)==="Home"?c(o):c(d,!1)})}var g=U(n,2),S=U($(g),2);ae(S,16,()=>["Home","Merchandise","About Us"],Se,(c,h)=>{_e(c,{onclick:()=>P(t,y(h)),children:(v,m)=>{mt(v,{children:(b,C)=>{O();var p=D();Y(()=>Z(p,h)),A(b,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}),K(g),K(e),A(f,e)}var ke=k("<!> <!>",1),je=k("<div><!></div>");function Be(f){let t=[{icon:"access_time",label:"Recents"},{icon:"near_me",label:"Nearby"},{icon:"favorite",label:"Favorites"}],e=N(y(t[0]));var r=je(),n=$(r);Et(n,{tabs:t,key:d=>d.label,get active(){return a(e)},set active(d){P(e,y(d))},tab:(d,g=tt)=>{_t(d,{get tab(){return g()},children:(S,c)=>{var h=ke(),v=st(h);oe(v,{class:"material-icons",children:(b,C)=>{O();var p=D();Y(()=>Z(p,g().icon)),A(b,p)},$$slots:{default:!0}});var m=U(v,2);mt(m,{children:(b,C)=>{O();var p=D();Y(()=>Z(p,g().label)),A(b,p)},$$slots:{default:!0}}),A(S,h)},$$slots:{default:!0}})},$$slots:{tab:!0}}),K(r),A(f,r)}var Xe=k("<!> <!>",1),Ge=k('<div><!> <pre class="status"> </pre></div>');function ze(f){let t=[{k:1,icon:"code",label:"Code"},{k:2,icon:"code",label:"Code"},{k:3,icon:"code",label:"Code"},{k:4,icon:"code",label:"Code"}],e=N(y(t[2]));var r=Ge(),n=$(r);Et(n,{tabs:t,key:S=>S.k,get active(){return a(e)},set active(S){P(e,y(S))},tab:(S,c=tt)=>{_t(S,{get tab(){return c()},stacked:!0,indicatorSpanOnlyContent:!0,tabIndicator$transition:"fade",children:(h,v)=>{var m=Xe(),b=st(m);oe(b,{class:"material-icons",children:(p,L)=>{O();var T=D();Y(()=>Z(T,c().icon)),A(p,T)},$$slots:{default:!0}});var C=U(b,2);mt(C,{children:(p,L)=>{O();var T=D();Y(()=>Z(T,c().label)),A(p,T)},$$slots:{default:!0}}),A(h,m)},$$slots:{default:!0}})},$$slots:{tab:!0}});var o=U(n,2),d=$(o);K(o),K(r),Y(()=>Z(d,`Selected: ${a(e).k??""}`)),A(f,r)}var qe=k("<div><!></div>");function Je(f,t){Wt(t,!1),Ie();var e=qe(),r=$(e),n=ve(()=>[...Array(20)].map((o,d)=>d+1));Et(r,{get tabs(){return a(n)},tab:(d,g=tt)=>{_t(d,{get tab(){return g()},children:(S,c)=>{mt(S,{children:(h,v)=>{O();var m=D();Y(()=>Z(m,`Tab ${g()??""}`)),A(h,m)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}}),K(e),A(f,e),$t()}var Qe=k("<div><!></div>");function Ze(f){let t=N("Home");var e=Qe(),r=$(e);Et(r,{tabs:["Home","Merchandise","About Us"],get active(){return a(t)},set active(o){P(t,y(o))},tab:(o,d=tt)=>{_t(o,{get tab(){return d()},minWidth:!0,children:(g,S)=>{mt(g,{children:(c,h)=>{O();var v=D();Y(()=>Z(v,d())),A(c,v)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}}),K(e),A(f,e)}var tr=k('<div class="icon-indicators svelte-qoao06"><!></div>');function er(f){let t=N("Home");var e=tr(),r=$(e);Et(r,{tabs:["Home","Merchandise","About Us"],get active(){return a(t)},set active(o){P(t,y(o))},tab:(o,d=tt)=>{_t(o,{get tab(){return d()},tabIndicator$type:"icon",tabIndicator$content$class:"material-icons",tabIndicator:S=>{O();var c=D("star");A(S,c)},children:(S,c)=>{mt(S,{children:(h,v)=>{O();var m=D();Y(()=>Z(m,d())),A(h,m)},$$slots:{default:!0}})},$$slots:{tabIndicator:!0,default:!0}})},$$slots:{tab:!0}}),K(e),A(f,e)}var rr=k('<div><!> <iframe src="https://en.wikipedia.org/wiki/Home" title="Selected Tab" name="href-tabs-frame" style="width: 100%; height: 400px; border: 0;" role="tabpanel"></iframe></div>');function nr(f){let t=N("Home");var e=rr(),r=$(e);Et(r,{tabs:["Home","Merchandise","About Us"],get active(){return a(t)},set active(o){P(t,y(o))},tab:(o,d=tt)=>{var g=F(()=>`https://en.wikipedia.org/wiki/${d().replace(/ /g,"_")??""}`);_t(o,{get tab(){return d()},get href(){return a(g)},target:"href-tabs-frame",children:(S,c)=>{mt(S,{children:(h,v)=>{O();var m=D();Y(()=>Z(m,d())),A(h,m)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{tab:!0}}),O(2),K(e),A(f,e)}var ar=k('<section class="svelte-w2pbwc"><h2>Tabs</h2> <h5>Installation</h5> <pre class="demo-spaced">npm i -D @smui/tab @smui/tab-bar</pre> <h5>Demos</h5> <!> <!> <!> <!> <!> <!> <!></section>');function yr(f){var t=ar();ge(c=>{me.title="Tabs - SMUI"});var e=U($(t),8);St(e,{component:Ye,file:"tabs/_Simple.svelte"});var r=U(e,2);St(r,{component:Be,file:"tabs/_Icons.svelte",children:(c,h)=>{O();var v=D("Tabs with icons next to labels");A(c,v)},$$slots:{default:!0}});var n=U(r,2);St(n,{component:ze,file:"tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte",children:(c,h)=>{O();var v=D(`Keyed tabs with icons above labels, indicators restricted to content, and
    fade transition`);A(c,v)},$$slots:{default:!0}});var o=U(n,2);St(o,{component:Je,file:"tabs/_ScrollingNoInitialActive.svelte",children:(c,h)=>{O();var v=D("Scrolling tabs with no initial active tab");A(c,v)},$$slots:{default:!0}});var d=U(o,2);St(d,{component:Ze,file:"tabs/_MinWidth.svelte",children:(c,h)=>{O();var v=D("Min width tabs");A(c,v)},$$slots:{default:!0}});var g=U(d,2);St(g,{component:er,file:"tabs/_IconIndicators.svelte",children:(c,h)=>{O();var v=D("Icon indicators");A(c,v)},$$slots:{default:!0}});var S=U(g,2);St(S,{component:nr,file:"tabs/_HrefAnchors.svelte",subtitle:h=>{O();var v=D(`But they don't activate through keyboard arrow keys. They need to be
      activated with the enter key.`);A(h,v)},children:(h,v)=>{O();var m=D("Tabs with href attributes render as anchor elements");A(h,m)},$$slots:{subtitle:!0,default:!0}}),K(t),A(f,t)}export{yr as component};
