import{a as W,t as Z}from"./disclose-version.Bsnu83OK.js";import"./legacy.BG3nWsJQ.js";import{p as Oe,o as J,m as y,g as t,d as E,i as I,l as De,b as Me,t as le,a as xe,s as U,c as K,r as N,e as Q,h as ce}from"./runtime.SXGrDfxi.js";import{l as de,p as m,o as Pe,b as ue,i as he}from"./index-client.CjaGIm_K.js";import{d as X,b as fe,u as ve,e as pe,c as ge}from"./useActions.D2nM91eX.js";import{i as Ie}from"./lifecycle.ty5dbg6f.js";import{a as ke,b as F,_ as V,c as Re,f as Le,M as Ue,d as Y}from"./dispatch.S85s6hKV.js";import{e as Fe,p as Ge}from"./prefixFilter.OhiPYEKz.js";import{R as Te}from"./IconButton.DbDaMNQ7.js";/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var x;(function(r){r.PROCESSING="mdc-switch--processing",r.SELECTED="mdc-switch--selected",r.UNSELECTED="mdc-switch--unselected"})(x||(x={}));var be;(function(r){r.RIPPLE=".mdc-switch__ripple"})(be||(be={}));/**
 * @license
 * Copyright 2021 Google Inc.
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
 */function ze(r,e,a){var i=Ae(r,e),n=i.getObservers(e);return n.push(a),function(){n.splice(n.indexOf(a),1)}}var G=new WeakMap;function Ae(r,e){var a=new Map;G.has(r)||G.set(r,{isEnabled:!0,getObservers:function(u){var g=a.get(u)||[];return a.has(u)||a.set(u,g),g},installedProperties:new Set});var i=G.get(r);if(i.installedProperties.has(e))return i;var n=je(r,e)||{configurable:!0,enumerable:!0,value:r[e],writable:!0},l=ke({},n),p=n.get,_=n.set;if("value"in n){delete l.value,delete l.writable;var v=n.value;p=function(){return v},n.writable&&(_=function(u){v=u})}return p&&(l.get=function(){return p.call(this)}),_&&(l.set=function(u){var g,c,h=p?p.call(this):u;if(_.call(this,u),i.isEnabled&&(!p||u!==h))try{for(var d=F(i.getObservers(e)),b=d.next();!b.done;b=d.next()){var O=b.value;O(u,h)}}catch(C){g={error:C}}finally{try{b&&!b.done&&(c=d.return)&&c.call(d)}finally{if(g)throw g.error}}}),i.installedProperties.add(e),Object.defineProperty(r,e,l),i}function je(r,e){for(var a=r,i;a&&(i=Object.getOwnPropertyDescriptor(a,e),!i);)a=Object.getPrototypeOf(a);return i}function Be(r,e){var a=G.get(r);a&&(a.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var qe=function(r){V(e,r);function e(a){var i=r.call(this,a)||this;return i.unobserves=new Set,i}return e.prototype.destroy=function(){r.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(a,i){var n,l,p=this,_=[];try{for(var v=F(Object.keys(i)),u=v.next();!u.done;u=v.next()){var g=u.value,c=i[g].bind(this);_.push(this.observeProperty(a,g,c))}}catch(d){n={error:d}}finally{try{u&&!u.done&&(l=v.return)&&l.call(v)}finally{if(n)throw n.error}}var h=function(){var d,b;try{for(var O=F(_),C=O.next();!C.done;C=O.next()){var T=C.value;T()}}catch(k){d={error:k}}finally{try{C&&!C.done&&(b=O.return)&&b.call(O)}finally{if(d)throw d.error}}p.unobserves.delete(h)};return this.unobserves.add(h),h},e.prototype.observeProperty=function(a,i,n){return ze(a,i,n)},e.prototype.setObserversEnabled=function(a,i){Be(a,i)},e.prototype.unobserve=function(){var a,i;try{for(var n=F(Re([],Le(this.unobserves))),l=n.next();!l.done;l=n.next()){var p=l.value;p()}}catch(_){a={error:_}}finally{try{l&&!l.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}},e}(Ue);/**
 * @license
 * Copyright 2021 Google Inc.
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
 */var He=function(r){V(e,r);function e(a){var i=r.call(this,a)||this;return i.handleClick=i.handleClick.bind(i),i}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(qe),We=function(r){V(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.init=function(){r.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(x.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(x.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,x.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,x.SELECTED),this.toggleClass(!this.adapter.state.selected,x.UNSELECTED)},e.prototype.toggleClass=function(a,i){a?this.adapter.addClass(i):this.adapter.removeClass(i)},e}(He),Je=Z('<div><svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24"><path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"></path></svg> <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24"><path d="M20 13H4v-2h16v2z"></path></svg></div>'),Ke=Z('<div class="mdc-switch__focus-ring-wrapper"><div class="mdc-switch__focus-ring"></div></div>'),Ne=Z('<button><div class="mdc-switch__track"></div> <div class="mdc-switch__handle-track"><div class="mdc-switch__handle"><div class="mdc-switch__shadow"><div class="mdc-elevation-overlay"></div></div> <div class="mdc-switch__ripple"></div> <!></div></div> <!></button>');function it(r,e){const a=de(e,["children","$$slots","$$events","$$legacy"]),i=de(a,["getId","getElement","use","class","disabled","focusRing","color","group","checked","value","processing","icons","icons$use","icons$class"]);Oe(e,!1);let n=()=>{};function l(s){return s===n}let p=m(e,"use",24,()=>[]),_=m(e,"class",8,""),v=m(e,"disabled",12,!1),u=m(e,"focusRing",8,!1),g=m(e,"color",8,"primary"),c=m(e,"group",12,n),h=m(e,"checked",12,n),d=m(e,"value",8,null),b=m(e,"processing",12,!1),O=m(e,"icons",8,!0),C=m(e,"icons$use",24,()=>[]),T=m(e,"icons$class",8,""),k=y(),P=y(),w=y({}),z=y(),A=y(!1),j=J("SMUI:generic:input:props")??{},f=y(l(c())?l(h())?!1:h():c().indexOf(d())!==-1),S=y({get disabled(){return v()},set disabled(s){v(s)},get processing(){return b()},set processing(s){b(s)},get selected(){return t(f)},set selected(s){E(f,s)}}),B=y(h()),q=y(l(c())?[]:[...c()]),R=y(t(f));const $=J("SMUI:generic:input:mount"),ee=J("SMUI:generic:input:unmount");Pe(()=>{E(P,new We({addClass:te,hasClass:me,isDisabled:()=>v(),removeClass:se,setAriaChecked:()=>{},setDisabled:o=>{v(o)},state:t(S)}));const s={get element(){return D()},get checked(){return t(f)},set checked(o){t(f)!==o&&(I(S,t(S).selected=o),D()&&Y(D(),"SMUISwitchChange",{selected:o,value:d()}))},activateRipple(){v()||E(A,!0)},deactivateRipple(){E(A,!1)}};return $&&$(s),t(P).init(),t(P).initFromDOM(),()=>{ee&&ee(s),t(P).destroy()}});function me(s){return s in t(w)?t(w)[s]:D().classList.contains(s)}function te(s){t(w)[s]||I(w,t(w)[s]=!0)}function se(s){(!(s in t(w))||t(w)[s])&&I(w,t(w)[s]=!1)}function ie(){return j&&j.id}function D(){return t(k)}De(()=>(Q(c()),t(R),t(f),Q(d()),t(q),Q(h()),t(B),Y),()=>{let s=!1;if(!l(c()))if(t(R)!==t(f)){const o=c().indexOf(d());t(f)&&o===-1?(c().push(d()),c(c())):!t(f)&&o!==-1&&(c().splice(o,1),c(c())),s=!0}else{const o=t(q).indexOf(d()),L=c().indexOf(d());o>-1&&L===-1?I(S,t(S).selected=!1):L>-1&&o===-1&&I(S,t(S).selected=!0)}l(h())?t(R)!==t(f)&&(s=!0):h()!==t(f)&&(h()===t(B)?(h(t(f)),s=!0):I(S,t(S).selected=h())),E(B,h()),E(q,l(c())?[]:[...c()]),E(R,t(f)),s&&D()&&Y(D(),"SMUISwitchChange",{selected:t(f),value:d()})}),Me(),Ie();var M=Ne();const _e=ce(()=>Fe(i,["icons$"]));var we=s=>{var o;t(P)&&t(P).handleClick(),(o=i.onclick)==null||o.call(i,s)};let re;var H=U(K(M),2),ae=K(H),ne=U(K(ae),2);ue(ne,s=>E(z,s),()=>t(z));var ye=U(ne,2);he(ye,O,s=>{var o=Je();const L=ce(()=>Ge(i,"icons$"));let oe;X(o,(Se,Ee)=>ve(Se,Ee),C),le(()=>oe=pe(o,oe,{class:ge({[T()]:!0,"mdc-switch__icons":!0}),...t(L)})),W(s,o)}),N(ae),N(H);var Ce=U(H,2);return he(Ce,u,s=>{var o=Ke();W(s,o)}),N(M),ue(M,s=>E(k,s),()=>t(k)),X(M,(s,o)=>ve(s,o),p),X(M,(s,o)=>Te(s,o),()=>({unbounded:!0,color:g(),active:t(A),rippleElement:t(z),disabled:v(),addClass:te,removeClass:se})),le(()=>re=pe(M,re,{class:ge({[_()]:!0,"mdc-switch":!0,"mdc-switch--unselected":!t(f),"mdc-switch--selected":t(f),"mdc-switch--processing":b(),"smui-switch--color-secondary":g()==="secondary",...t(w)}),type:"button",role:"switch","aria-checked":t(f)?"true":"false",disabled:v(),...j,...t(_e),onclick:we})),W(r,M),fe(e,"getId",ie),fe(e,"getElement",D),xe({getId:ie,getElement:D})}export{it as S};
