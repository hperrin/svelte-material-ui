import{a as L,t as $,c as tt}from"./disclose-version.L5AxZWdJ.js";import{p as M,s as O,u as I,t as et,a as R,c as B,g as o,a4 as q,n as H,e as at,r as rt,f as ot,b as J}from"./runtime.W_ZEMHic.js";import{e as K}from"./events.mn8lDwC8.js";import{s as P,b as nt,u as st,d as it,c as lt}from"./useActions.kHGJbmCA.js";import{p as d,a as g,b as z,r as x,c as pt}from"./props.Ce4KWaWc.js";import{o as At}from"./index-client.CM1w6q3L.js";import{r as Ct}from"./index.DeUYx9cd.js";import{_ as F,a as Q,M as _t,d as yt}from"./dispatch.KCohpohh.js";import{S as bt}from"./IconButton.TWSmi4tO.js";import{C as ct}from"./ClassAdder.Ck-mTZey.js";/**
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
 */var S={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},D={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},vt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
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
 */var Y=function(s){F(t,s);function t(e){return s.call(this,Q(Q({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return vt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return D},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(_t);/**
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
 */var w=0,j=function(s){F(t,s);function t(e){var a=s.call(this,e)||this;return a.wasDocked=!0,a.isDockedShowing=!0,a.currentAppBarOffsetTop=0,a.isCurrentlyBeingResized=!1,a.resizeThrottleId=w,a.resizeDebounceId=w,a.lastScrollPosition=a.adapter.getViewportScrollY(),a.topAppBarHeight=a.adapter.getTopAppBarHeight(),a}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),a=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=a,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=w,e.throttledResizeHandler()},D.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=w},D.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,a=this.currentAppBarOffsetTop<0,c=this.currentAppBarOffsetTop>e,l=a&&c;if(l)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==c)return this.isDockedShowing=c,!0}else return this.wasDocked=!0,!0;return l},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-D.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(Y);/**
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
 */var Bt=function(s){F(t,s);function t(){var e=s!==null&&s.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(S.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(S.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(j);/**
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
 */var Et=function(s){F(t,s);function t(e){var a=s.call(this,e)||this;return a.collapsed=!1,a.isAlwaysCollapsed=!1,a}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){s.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(S.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(S.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(S.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(S.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(Y),Ot=$("<header><!></header>");function Nt(s,t){M(t,!0);let e=()=>{};function a(r){return r===e}let c=d(t,"use",19,()=>[]),l=d(t,"class",3,""),C=d(t,"style",3,""),n=d(t,"variant",3,"standard"),h=d(t,"color",3,"primary"),p=d(t,"collapsed",15,e),T=d(t,"prominent",3,!1),_=d(t,"dense",3,!1),y=x(t,["$$slots","$$events","$$legacy","use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","children"]);const N=!a(p())&&!!p();a(p())&&p(!1);let m,i=O(void 0),k=new bt,f=O(g({})),b=O(g({})),V=O(void 0),dt=Ct({variant:n(),prominent:T(),dense:_()},r=>{B(V,g(r))});I(()=>{o(V)&&o(V)({variant:n(),prominent:T(),dense:_()})}),I(()=>{o(i)&&n()==="short"&&"setAlwaysCollapsed"in o(i)&&o(i).setAlwaysCollapsed(N)});let E;I(()=>{E!==t.scrollTarget&&(E&&k.off(E,"scroll",U),t.scrollTarget&&k.on(t.scrollTarget,"scroll",U),E=t.scrollTarget)});let X=n();I(()=>{X!==n()&&o(i)&&(X=n(),o(i).destroy(),B(f,g({})),B(b,g({})),B(i,g(G())),o(i).init())}),At(()=>(B(i,g(G())),o(i).init(),()=>{var r;(r=o(i))==null||r.destroy(),k.clear()}));function G(){const r={static:Y,short:Et,fixed:Bt,standard:j}[n()]||j;return new r({hasClass:ut,addClass:ft,removeClass:ht,setStyle:gt,getTopAppBarHeight:()=>v().clientHeight,notifyNavigationIconClicked:()=>yt(v(),"SMUITopAppBarNav"),getViewportScrollY:()=>t.scrollTarget==null?window.pageYOffset:t.scrollTarget.scrollTop,getTotalActionItems:()=>v().querySelectorAll(".mdc-top-app-bar__action-item").length})}function ut(r){return r in o(f)?o(f)[r]:v().classList.contains(r)}function ft(r){o(f)[r]||(o(f)[r]=!0)}function ht(r){(!(r in o(f))||o(f)[r])&&(o(f)[r]=!1)}function gt(r,u){o(b)[r]!=u&&(u===""||u==null?delete o(b)[r]:o(b)[r]=u)}function U(){o(i)&&(o(i).handleTargetScroll(),n()==="short"&&p("isCollapsed"in o(i)&&o(i).isCollapsed))}function St(){return dt}function v(){return m}var A=Ot();K("resize",q,()=>n()!=="short"&&n()!=="fixed"&&o(i)&&o(i).handleWindowResize()),K("scroll",q,()=>t.scrollTarget==null&&U());var Tt=r=>{var u;o(i)&&o(i).handleNavigationClick(),(u=t.onSMUITopAppBarIconButtonNav)==null||u.call(t,r)};let W;var mt=at(A);return P(mt,()=>t.children??H),rt(A),z(A,r=>m=r,()=>m),nt(A,(r,u)=>{var Z;return(Z=st)==null?void 0:Z(r,u)},c),et(()=>W=it(A,W,{class:lt({[l()]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":n()==="short","mdc-top-app-bar--short-collapsed":p(),"mdc-top-app-bar--fixed":n()==="fixed","smui-top-app-bar--static":n()==="static","smui-top-app-bar--color-secondary":h()==="secondary","mdc-top-app-bar--prominent":T(),"mdc-top-app-bar--dense":_(),...o(f)}),style:Object.entries(o(b)).map(([r,u])=>`${r}: ${u};`).concat([C()]).join(" "),...y,onSMUITopAppBarIconButtonNav:Tt})),L(s,A),R({getPropStore:St,getElement:v})}function kt(s,t){M(t,!0);let e=x(t,["$$slots","$$events","$$legacy","children"]),a;function c(){return a.getElement()}return z(ct(s,pt({_smuiClass:"mdc-top-app-bar__row",tag:"div"},()=>e,{children:(l,C)=>{var n=tt(),h=ot(n);P(h,()=>t.children??H),L(l,n)},$$slots:{default:!0}})),l=>a=l,()=>a),R({getElement:c})}var It=$("<section><!></section>");function Vt(s,t){M(t,!0);let e=d(t,"use",19,()=>[]),a=d(t,"class",3,""),c=d(t,"align",3,"start"),l=d(t,"toolbar",3,!1),C=x(t,["$$slots","$$events","$$legacy","use","class","align","toolbar","children"]),n;J("SMUI:icon-button:context",l()?"top-app-bar:action":"top-app-bar:navigation"),J("SMUI:button:context",l()?"top-app-bar:action":"top-app-bar:navigation");function h(){return n}var p=It();let T;var _=at(p);return P(_,()=>t.children??H),rt(p),z(p,y=>n=y,()=>n),nt(p,(y,N)=>{var m;return(m=st)==null?void 0:m(y,N)},e),et(()=>T=it(p,T,{class:lt({[a()]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":c()==="start","mdc-top-app-bar__section--align-end":c()==="end"}),...l()?{role:"toolbar"}:{},...C})),L(s,p),R({getElement:h})}function Ut(s,t){M(t,!0);let e=x(t,["$$slots","$$events","$$legacy","children"]),a;function c(){return a.getElement()}return z(ct(s,pt({_smuiClass:"mdc-top-app-bar__title",tag:"span"},()=>e,{children:(l,C)=>{var n=tt(),h=ot(n);P(h,()=>t.children??H),L(l,n)},$$slots:{default:!0}})),l=>a=l,()=>a),R({getElement:c})}export{kt as R,Vt as S,Nt as T,Ut as a};
