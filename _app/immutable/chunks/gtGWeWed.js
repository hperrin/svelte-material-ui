import"./Bzak7iHL.js";import{r as Tt,b as mt,e as W,s as I}from"./Bu45w55_.js";import{p as w,s as B,a as Z,u as E,g as o,h as y,j as Q,b as D,d as L,Y as q,k as $,n as M,r as tt,c as et,f as at,i as J}from"./BwguTo01.js";import{a as rt,b as ot,c as nt,u as it}from"./DBhbQkAD.js";import{p as u,b as R,r as H,c as st}from"./CMyoTnZX.js";import{_ as P,a as K,M as At,d as Ct}from"./qG3zDIF3.js";import{S as _t}from"./D3YavpxM.js";import{C as lt}from"./3oDDhym3.js";/**
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
 */var S={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},V={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},yt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var j=(function(i){P(t,i);function t(e){return i.call(this,K(K({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return yt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return V},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t})(At);/**
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
 */var O=0,U=(function(i){P(t,i);function t(e){var r=i.call(this,e)||this;return r.wasDocked=!0,r.isDockedShowing=!0,r.currentAppBarOffsetTop=0,r.isCurrentlyBeingResized=!1,r.resizeThrottleId=O,r.resizeDebounceId=O,r.lastScrollPosition=r.adapter.getViewportScrollY(),r.topAppBarHeight=r.adapter.getTopAppBarHeight(),r}return t.prototype.destroy=function(){i.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),r=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=r,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=O,e.throttledResizeHandler()},V.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=O},V.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,r=this.currentAppBarOffsetTop<0,d=this.currentAppBarOffsetTop>e,l=r&&d;if(l)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==d)return this.isDockedShowing=d,!0}else return this.wasDocked=!0,!0;return l},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-128),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t})(j);/**
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
 */var bt=(function(i){P(t,i);function t(){var e=i!==null&&i.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(S.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(S.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t})(U);/**
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
 */var vt=(function(i){P(t,i);function t(e){var r=i.call(this,e)||this;return r.collapsed=!1,r.isAlwaysCollapsed=!1,r}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){i.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(S.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(S.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(S.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(S.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t})(j),Bt=Q("<header><!></header>");function Pt(i,t){w(t,!0);let e=()=>{};function r(a){return a===e}let d=u(t,"use",19,()=>[]),l=u(t,"class",3,""),m=u(t,"style",3,""),n=u(t,"variant",3,"standard"),g=u(t,"color",3,"primary"),p=u(t,"collapsed",15,e),A=u(t,"prominent",3,!1),f=u(t,"dense",3,!1),z=H(t,["$$slots","$$events","$$legacy","use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","children"]);const b=!r(p())&&!!p();r(p())&&p(!1);let x,s=B(void 0),F=new _t,h=B(Z({})),C=B(Z({})),N=B(void 0),pt=Tt({variant:n(),prominent:A(),dense:f()},a=>{y(N,a,!0)});E(()=>{o(N)&&o(N)({variant:n(),prominent:A(),dense:f()})}),E(()=>{o(s)&&n()==="short"&&"setAlwaysCollapsed"in o(s)&&o(s).setAlwaysCollapsed(b)});let v;E(()=>{v!==t.scrollTarget&&(v&&F.off(v,"scroll",k),t.scrollTarget&&F.on(t.scrollTarget,"scroll",k),v=t.scrollTarget)});let Y=n();E(()=>{Y!==n()&&o(s)&&(Y=n(),o(s).destroy(),y(h,{},!0),y(C,{},!0),y(s,X(),!0),o(s).init())}),mt(()=>(y(s,X(),!0),o(s).init(),()=>{var a;(a=o(s))==null||a.destroy(),F.clear()}));function X(){const a={static:j,short:vt,fixed:bt,standard:U}[n()]||U;return new a({hasClass:ct,addClass:dt,removeClass:ut,setStyle:ft,getTopAppBarHeight:()=>_().clientHeight,notifyNavigationIconClicked:()=>Ct(_(),"SMUITopAppBarNav"),getViewportScrollY:()=>t.scrollTarget==null?window.pageYOffset:t.scrollTarget.scrollTop,getTotalActionItems:()=>_().querySelectorAll(".mdc-top-app-bar__action-item").length})}function ct(a){return a in o(h)?o(h)[a]:_().classList.contains(a)}function dt(a){o(h)[a]||(o(h)[a]=!0)}function ut(a){(!(a in o(h))||o(h)[a])&&(o(h)[a]=!1)}function ft(a,c){o(C)[a]!=c&&(c===""||c==null?delete o(C)[a]:o(C)[a]=c)}function k(){o(s)&&(o(s).handleTargetScroll(),n()==="short"&&p("isCollapsed"in o(s)&&o(s).isCollapsed))}function ht(){return pt}function _(){return x}var T=Bt();W("resize",q,()=>n()!=="short"&&n()!=="fixed"&&o(s)&&o(s).handleWindowResize()),W("scroll",q,()=>t.scrollTarget==null&&k());var gt=a=>{var c;o(s)&&o(s).handleNavigationClick(),(c=t.onSMUITopAppBarIconButtonNav)==null||c.call(t,a)};rt(T,(a,c)=>({class:a,style:c,...z,onSMUITopAppBarIconButtonNav:gt}),[()=>nt({"mdc-top-app-bar":!0,"mdc-top-app-bar--short":n()==="short","mdc-top-app-bar--short-collapsed":p(),"mdc-top-app-bar--fixed":n()==="fixed","smui-top-app-bar--static":n()==="static","smui-top-app-bar--color-secondary":g()==="secondary","mdc-top-app-bar--prominent":A(),"mdc-top-app-bar--dense":f(),...o(h),[l()]:!0}),()=>Object.entries(o(C)).map(([a,c])=>`${a}: ${c};`).concat([m()]).join(" ")]);var St=$(T);return I(St,()=>t.children??M),tt(T),R(T,a=>x=a,()=>x),ot(T,(a,c)=>{var G;return(G=it)==null?void 0:G(a,c)},d),D(i,T),L({getPropStore:ht,getElement:_})}function zt(i,t){w(t,!0);let e=H(t,["$$slots","$$events","$$legacy","children"]),r;function d(){return r.getElement()}return R(lt(i,st({_smuiClass:"mdc-top-app-bar__row",tag:"div"},()=>e,{children:(l,m)=>{var n=et(),g=at(n);I(g,()=>t.children??M),D(l,n)},$$slots:{default:!0}})),l=>r=l,()=>r),L({getElement:d})}var Et=Q("<section><!></section>");function xt(i,t){w(t,!0);let e=u(t,"use",19,()=>[]),r=u(t,"class",3,""),d=u(t,"align",3,"start"),l=u(t,"toolbar",3,!1),m=H(t,["$$slots","$$events","$$legacy","use","class","align","toolbar","children"]),n;J("SMUI:icon-button:context",l()?"top-app-bar:action":"top-app-bar:navigation"),J("SMUI:button:context",l()?"top-app-bar:action":"top-app-bar:navigation");function g(){return n}var p=Et();rt(p,f=>({class:f,...l()?{role:"toolbar"}:{},...m}),[()=>nt({"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":d()==="start","mdc-top-app-bar__section--align-end":d()==="end",[r()]:!0})]);var A=$(p);return I(A,()=>t.children??M),tt(p),R(p,f=>n=f,()=>n),ot(p,(f,z)=>{var b;return(b=it)==null?void 0:b(f,z)},e),D(i,p),L({getElement:g})}function Ft(i,t){w(t,!0);let e=H(t,["$$slots","$$events","$$legacy","children"]),r;function d(){return r.getElement()}return R(lt(i,st({_smuiClass:"mdc-top-app-bar__title",tag:"span"},()=>e,{children:(l,m)=>{var n=et(),g=at(n);I(g,()=>t.children??M),D(l,n)},$$slots:{default:!0}})),l=>r=l,()=>r),L({getElement:d})}export{zt as R,xt as S,Pt as T,Ft as a};
