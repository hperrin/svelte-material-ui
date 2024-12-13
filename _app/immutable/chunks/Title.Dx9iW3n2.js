import{a as X,t as G}from"./disclose-version.B3RRTx8Z.js";import{p as W,b as v,u as B,t as Z,a as q,h as y,g as r,a0 as V,n as J,c as K,r as Q,e as U}from"./runtime.DwlehcF5.js";import{e as j}from"./store.wXOX-S52.js";import{s as $,b as tt,u as et,d as at,c as rt}from"./useActions.dWwaU660.js";import{p,a as h,o as St,b as ot,r as it}from"./index-client.BDIqpeZ8.js";import{r as Tt}from"./index.BnJoPGWA.js";import{_ as E,a as Y,M as gt,d as At}from"./dispatch.CwJSP0lB.js";import{S as Ct}from"./IconButton.CkPA9NQ0.js";import{c as st}from"./classAdderBuilder.Btis2bDi.js";/**
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
 */var S={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},I={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},_t={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var x=function(i){E(t,i);function t(e){return i.call(this,Y(Y({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return _t},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(gt);/**
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
 */var O=0,z=function(i){E(t,i);function t(e){var o=i.call(this,e)||this;return o.wasDocked=!0,o.isDockedShowing=!0,o.currentAppBarOffsetTop=0,o.isCurrentlyBeingResized=!1,o.resizeThrottleId=O,o.resizeDebounceId=O,o.lastScrollPosition=o.adapter.getViewportScrollY(),o.topAppBarHeight=o.adapter.getTopAppBarHeight(),o}return t.prototype.destroy=function(){i.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),o=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=o,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=O,e.throttledResizeHandler()},I.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=O},I.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,o=this.currentAppBarOffsetTop<0,u=this.currentAppBarOffsetTop>e,f=o&&u;if(f)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==u)return this.isDockedShowing=u,!0}else return this.wasDocked=!0,!0;return f},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-I.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(x);/**
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
 */var mt=function(i){E(t,i);function t(){var e=i!==null&&i.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(S.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(S.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(z);/**
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
 */var yt=function(i){E(t,i);function t(e){var o=i.call(this,e)||this;return o.collapsed=!1,o.isAlwaysCollapsed=!1,o}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){i.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(S.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(S.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(S.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(S.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(x),bt=G("<header><!></header>");function Ht(i,t){W(t,!0);let e=()=>{};function o(a){return a===e}let u=p(t,"use",19,()=>[]),f=p(t,"class",3,""),w=p(t,"style",3,""),n=p(t,"variant",3,"standard"),D=p(t,"color",3,"primary"),l=p(t,"collapsed",15,e),T=p(t,"prominent",3,!1),A=p(t,"dense",3,!1),C=it(t,["$$slots","$$events","$$legacy","use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","children"]);const L=!o(l())&&!!l();o(l())&&l(!1);let M,s=v(void 0),R=new Ct,d=v(h({})),_=v(h({})),H=v(void 0),nt=Tt({variant:n(),prominent:T(),dense:A()},a=>{y(H,h(a))});B(()=>{r(H)&&r(H)({variant:n(),prominent:T(),dense:A()})}),B(()=>{r(s)&&n()==="short"&&"setAlwaysCollapsed"in r(s)&&r(s).setAlwaysCollapsed(L)});let b;B(()=>{b!==t.scrollTarget&&(b&&R.off(b,"scroll",P),t.scrollTarget&&R.on(t.scrollTarget,"scroll",P),b=t.scrollTarget)});let F=n();B(()=>{F!==n()&&r(s)&&(F=n(),r(s).destroy(),y(d,h({})),y(_,h({})),y(s,h(N())),r(s).init())}),St(()=>(y(s,h(N())),r(s).init(),()=>{var a;(a=r(s))==null||a.destroy(),R.clear()}));function N(){const a={static:x,short:yt,fixed:mt,standard:z}[n()]||z;return new a({hasClass:lt,addClass:pt,removeClass:ct,setStyle:dt,getTopAppBarHeight:()=>m().clientHeight,notifyNavigationIconClicked:()=>At(m(),"SMUITopAppBarNav"),getViewportScrollY:()=>t.scrollTarget==null?window.pageYOffset:t.scrollTarget.scrollTop,getTotalActionItems:()=>m().querySelectorAll(".mdc-top-app-bar__action-item").length})}function lt(a){return a in r(d)?r(d)[a]:m().classList.contains(a)}function pt(a){r(d)[a]||(r(d)[a]=!0)}function ct(a){(!(a in r(d))||r(d)[a])&&(r(d)[a]=!1)}function dt(a,c){r(_)[a]!=c&&(c===""||c==null?delete r(_)[a]:r(_)[a]=c)}function P(){r(s)&&(r(s).handleTargetScroll(),n()==="short"&&l("isCollapsed"in r(s)&&r(s).isCollapsed))}function ut(){return nt}function m(){return M}var g=bt();j("resize",V,()=>n()!=="short"&&n()!=="fixed"&&r(s)&&r(s).handleWindowResize()),j("scroll",V,()=>t.scrollTarget==null&&P());var ft=a=>{var c;r(s)&&r(s).handleNavigationClick(),(c=t.onSMUITopAppBarIconButtonNav)==null||c.call(t,a)};let k;var ht=K(g);return $(ht,()=>t.children??J),Q(g),ot(g,a=>M=a,()=>M),tt(g,(a,c)=>et(a,c),u),Z(()=>k=at(g,k,{class:rt({[f()]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":n()==="short","mdc-top-app-bar--short-collapsed":l(),"mdc-top-app-bar--fixed":n()==="fixed","smui-top-app-bar--static":n()==="static","smui-top-app-bar--color-secondary":D()==="secondary","mdc-top-app-bar--prominent":T(),"mdc-top-app-bar--dense":A(),...r(d)}),style:Object.entries(r(_)).map(([a,c])=>`${a}: ${c};`).concat([w()]).join(" "),...C,onSMUITopAppBarIconButtonNav:ft})),X(i,g),q({getPropStore:ut,getElement:m})}const Pt=st({class:"mdc-top-app-bar__row",tag:"div"});var vt=G("<section><!></section>");function zt(i,t){W(t,!0);let e=p(t,"use",19,()=>[]),o=p(t,"class",3,""),u=p(t,"align",3,"start"),f=p(t,"toolbar",3,!1),w=it(t,["$$slots","$$events","$$legacy","use","class","align","toolbar","children"]),n;U("SMUI:icon-button:context",f()?"top-app-bar:action":"top-app-bar:navigation"),U("SMUI:button:context",f()?"top-app-bar:action":"top-app-bar:navigation");function D(){return n}var l=vt();let T;var A=K(l);return $(A,()=>t.children??J),Q(l),ot(l,C=>n=C,()=>n),tt(l,(C,L)=>et(C,L),e),Z(()=>T=at(l,T,{class:rt({[o()]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":u()==="start","mdc-top-app-bar__section--align-end":u()==="end"}),...f()?{role:"toolbar"}:{},...w})),X(i,l),q({getElement:D})}const xt=st({class:"mdc-top-app-bar__title",tag:"span"});export{Pt as R,zt as S,Ht as T,xt as a};
