import{a as J,t as K}from"./disclose-version.Bsnu83OK.js";import"./legacy.BG3nWsJQ.js";import{p as Q,m as A,l as L,b as At,t as $,a as tt,d,g as e,i as x,a4 as G,c as et,r as at,e as v,j as W}from"./runtime.SXGrDfxi.js";import{e as Z}from"./store.BA39LtCi.js";import{s as rt,d as ot,b as k,u as it,e as st,c as nt}from"./useActions.D2nM91eX.js";import{l as H,p as l,o as _t,b as lt}from"./index-client.CjaGIm_K.js";import{i as pt}from"./lifecycle.ty5dbg6f.js";import{r as mt}from"./index.CoKcQlQp.js";import{_ as M,a as q,M as Ct,d as yt}from"./dispatch.S85s6hKV.js";import{c as ct}from"./classAdderBuilder.cB7Ghhqr.js";/**
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
 */var m={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},R={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},bt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var U=function(n){M(t,n);function t(a){return n.call(this,q(q({},t.defaultAdapter),a))||this}return Object.defineProperty(t,"strings",{get:function(){return bt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return m},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return R},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(Ct);/**
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
 */var D=0,V=function(n){M(t,n);function t(a){var o=n.call(this,a)||this;return o.wasDocked=!0,o.isDockedShowing=!0,o.currentAppBarOffsetTop=0,o.isCurrentlyBeingResized=!1,o.resizeThrottleId=D,o.resizeDebounceId=D,o.lastScrollPosition=o.adapter.getViewportScrollY(),o.topAppBarHeight=o.adapter.getTopAppBarHeight(),o}return t.prototype.destroy=function(){n.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var a=Math.max(this.adapter.getViewportScrollY(),0),o=a-this.lastScrollPosition;this.lastScrollPosition=a,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=o,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var a=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){a.resizeThrottleId=D,a.throttledResizeHandler()},R.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){a.handleTargetScroll(),a.isCurrentlyBeingResized=!1,a.resizeDebounceId=D},R.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var a=-this.topAppBarHeight,o=this.currentAppBarOffsetTop<0,f=this.currentAppBarOffsetTop>a,_=o&&f;if(_)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==f)return this.isDockedShowing=f,!0}else return this.wasDocked=!0,!0;return _},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var a=this.currentAppBarOffsetTop;Math.abs(a)>=this.topAppBarHeight&&(a=-R.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",a+"px")}},t.prototype.throttledResizeHandler=function(){var a=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==a&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-a,this.topAppBarHeight=a),this.handleTargetScroll()},t}(U);/**
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
 */var vt=function(n){M(t,n);function t(){var a=n!==null&&n.apply(this,arguments)||this;return a.wasScrolled=!1,a}return t.prototype.handleTargetScroll=function(){var a=this.adapter.getViewportScrollY();a<=0?this.wasScrolled&&(this.adapter.removeClass(m.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(m.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(V);/**
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
 */var Bt=function(n){M(t,n);function t(a){var o=n.call(this,a)||this;return o.collapsed=!1,o.isAlwaysCollapsed=!1,o}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){n.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(m.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(m.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(a){this.isAlwaysCollapsed=!!a,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var a=this.adapter.getViewportScrollY();a<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(m.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(m.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(U),Et=K("<header><!></header>");function Nt(n,t){const a=H(t,["children","$$slots","$$events","$$legacy"]),o=H(a,["getPropStore","getElement","use","class","style","variant","color","collapsed","prominent","dense","scrollTarget"]);Q(t,!1);let f=()=>{};function _(r){return r===f}let I=l(t,"use",24,()=>[]),B=l(t,"class",8,""),E=l(t,"style",8,""),s=l(t,"variant",8,"standard"),h=l(t,"color",8,"primary"),u=l(t,"collapsed",12,f);const P=!_(u())&&!!u();_(u())&&u(!1);let S=l(t,"prominent",8,!1),C=l(t,"dense",8,!1),g=l(t,"scrollTarget",8,void 0),z=A(),i=A(),p=A({}),T=A({}),w=A(),dt=mt({variant:s(),prominent:S(),dense:C()},r=>{d(w,r)}),O=A(void 0),F=A(s());_t(()=>(d(i,j()),e(i).init(),()=>{e(i).destroy()}));function j(){const r={static:U,short:Bt,fixed:vt,standard:V}[s()]||V;return new r({hasClass:ut,addClass:ft,removeClass:ht,setStyle:St,getTopAppBarHeight:()=>y().clientHeight,notifyNavigationIconClicked:()=>yt(y(),"SMUITopAppBarNav"),getViewportScrollY:()=>g()==null?window.pageYOffset:g().scrollTop,getTotalActionItems:()=>y().querySelectorAll(".mdc-top-app-bar__action-item").length})}function ut(r){return r in e(p)?e(p)[r]:y().classList.contains(r)}function ft(r){e(p)[r]||x(p,e(p)[r]=!0)}function ht(r){(!(r in e(p))||e(p)[r])&&x(p,e(p)[r]=!1)}function St(r,c){e(T)[r]!=c&&(c===""||c==null?(delete e(T)[r],d(T,e(T))):x(T,e(T)[r]=c))}function N(){e(i)&&(e(i).handleTargetScroll(),s()==="short"&&u("isCollapsed"in e(i)&&e(i).isCollapsed))}function Y(){return dt}function y(){return e(z)}L(()=>(e(w),v(s()),v(S()),v(C())),()=>{e(w)&&e(w)({variant:s(),prominent:S(),dense:C()})}),L(()=>(e(F),v(s()),e(i)),()=>{e(F)!==s()&&e(i)&&(d(F,s()),e(i).destroy(),d(p,{}),d(T,{}),d(i,j()),e(i).init())}),L(()=>(e(i),v(s())),()=>{e(i)&&s()==="short"&&"setAlwaysCollapsed"in e(i)&&e(i).setAlwaysCollapsed(P)}),L(()=>(e(O),v(g())),()=>{e(O)!==g()&&(e(O)&&e(O).removeEventListener("scroll",N),g()&&g().addEventListener("scroll",N),d(O,g()))}),At(),pt();var b=Et();Z("resize",G,()=>s()!=="short"&&s()!=="fixed"&&e(i)&&e(i).handleWindowResize()),Z("scroll",G,()=>g()==null&&N());var gt=r=>{var c;e(i)&&e(i).handleNavigationClick(),(c=o.onSMUITopAppBarIconButtonNav)==null||c.call(o,r)};let X;var Tt=et(b);return rt(Tt,t,"default",{},null),at(b),lt(b,r=>d(z,r),()=>e(z)),ot(b,(r,c)=>it(r,c),I),$(()=>X=st(b,X,{class:nt({[B()]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s()==="short","mdc-top-app-bar--short-collapsed":u(),"mdc-top-app-bar--fixed":s()==="fixed","smui-top-app-bar--static":s()==="static","smui-top-app-bar--color-secondary":h()==="secondary","mdc-top-app-bar--prominent":S(),"mdc-top-app-bar--dense":C(),...e(p)}),style:Object.entries(e(T)).map(([r,c])=>`${r}: ${c};`).concat([E()]).join(" "),...o,onSMUITopAppBarIconButtonNav:gt})),J(n,b),k(t,"getPropStore",Y),k(t,"getElement",y),tt({getPropStore:Y,getElement:y})}const xt=ct({class:"mdc-top-app-bar__row",tag:"div"});var Ot=K("<section><!></section>");function kt(n,t){const a=H(t,["children","$$slots","$$events","$$legacy"]),o=H(a,["getElement","use","class","align","toolbar"]);Q(t,!1);let f=l(t,"use",24,()=>[]),_=l(t,"class",8,""),I=l(t,"align",8,"start"),B=l(t,"toolbar",8,!1),E=A();W("SMUI:icon-button:context",B()?"top-app-bar:action":"top-app-bar:navigation"),W("SMUI:button:context",B()?"top-app-bar:action":"top-app-bar:navigation");function s(){return e(E)}pt();var h=Ot();let u;var P=et(h);return rt(P,t,"default",{},null),at(h),lt(h,S=>d(E,S),()=>e(E)),ot(h,(S,C)=>it(S,C),f),$(()=>u=st(h,u,{class:nt({[_()]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":I()==="start","mdc-top-app-bar__section--align-end":I()==="end"}),...B()?{role:"toolbar"}:{},...o})),J(n,h),k(t,"getElement",s),tt({getElement:s})}const Vt=ct({class:"mdc-top-app-bar__title",tag:"span"});export{xt as R,kt as S,Nt as T,Vt as a};
