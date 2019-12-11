var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{u(t.next(e))}catch(r){i(r)}}function o(e){try{u(t["throw"](e))}catch(r){i(r)}}function u(e){e.done?n(e.value):a(e.value).then(s,o)}u((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return u([e,r])}}function u(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=r.call(e,n)}catch(o){s=[6,o];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)t[a]=i[s];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="zilver-ui";var a=0;var i=false;var s;var o;var u=false;var l=window;var f=document;var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var $=function(){return!!f.documentElement.attachShadow}();var v=function(){var e=false;try{f.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var h=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var d=new WeakMap;var m=function(e){return d.get(e)};var p=e("r",(function(e,r){return d.set(r.$lazyInstance$=e,r)}));var g=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return d.set(e,r)};var y=function(e,r){return r in e};var b=function(e){return console.error(e)};var w=new Map;var _=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=w.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{w.set(i,e)}return e[a]}),b)};var S=new Map;var R=[];var L=[];var j=[];var E=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&c.$flags$&4){A(x)}else{c.raf(x)}}}};var C=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){b(n)}}e.length=0};var N=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){b(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var x=function(){a++;C(R);var e=(c.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;N(L,e);N(j,e);if(L.length>0){j.push.apply(j,L);L.length=0}if(i=R.length+L.length+j.length>0){c.raf(x)}else{a=0}};var A=function(e){return Promise.resolve().then(e)};var O=E(L,true);var P={};var U=function(e){return e!=null};var k=function(e){e=typeof e;return e==="object"||e==="function"};var M=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var q=e("a",(function(){if(!(l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){c.$cssShim$=l.__stencil_cssshim;if(c.$cssShim$){return c.$cssShim$.initShim()}}))}return Promise.resolve()}));var B=e("p",(function(){return __awaiter(n,void 0,void 0,(function(){var e,n,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{c.$cssShim$=l.__stencil_cssshim}e=r.meta.url;n=new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(f.querySelectorAll("script")).find((function(e){return n.test(e.src)||e.getAttribute("data-stencil-namespace")===t}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,l.location.href));I(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var I=function(e){var r=M(t);try{l[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var n=new Map;l[r]=function(t){var a=new URL(t,e).href;var i=n.get(a);if(!i){var s=f.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(l[r].m);s.remove()}}));n.set(a,i);f.head.appendChild(s)}return i}}};var T=function(e,r){if(e!=null&&!k(e)){if(r&1){return String(e)}return e}return e};var z="hydrated";var H=function(e,r){if(r===void 0){r=""}{return function(){return}}};var V=function(e,r){{return function(){return}}};var F=new WeakMap;var W=function(e,r,n){var t=S.get(e);if(h&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}S.set(e,t)};var G=function(e,r,n,t){var a=D(r.$tagName$);var i=S.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var s=F.get(e);var o=void 0;if(!s){F.set(e,s=new Set)}if(!s.has(a)){{if(c.$cssShim$){o=c.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var u=o["s-sc"];if(u){a=u;s=null}}else{o=f.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var Q=function(e,r,n){var t=H("attachStyles",r.$tagName$);var a=G($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,n,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}t()};var D=function(e,r){return"sc-"+e};var J=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=false;var s=false;var o=[];var u=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!k(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?K(null,a):a)}s=i}}};u(n);var l=K(e,null);l.$attrs$=r;if(o.length>0){l.$children$=o}return l}));var K=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}return n};var X={};var Y=function(e){return e&&e.$tag$===X};var Z=function(e,r,n,t,a,i){if(n===t){return}var s=y(e,r);var o=r.toLowerCase();{var u=k(t);if((s||u&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var l=t==null?"":t;if(r==="list"){s=false}else if(n==null||e[r]!=l){e[r]=l}}else{e[r]=t}}catch(f){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!u){t=t===true?"":t;{e.setAttribute(r,t)}}}};var ee=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||P;var s=r.$attrs$||P;{for(t in i){if(!(t in s)){Z(a,t,i[t],undefined,n,r.$flags$)}}}for(t in s){Z(a,t,i[t],s[t],n,r.$flags$)}};var re=function(e,r,n,t){var a=r.$children$[n];var i=0;var o;var l;{o=a.$elm$=f.createElement(a.$tag$);{ee(null,a,u)}if(U(s)&&o["s-si"]!==s){o.classList.add(o["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=re(e,a,i);if(l){o.appendChild(l)}}}}return o};var ne=function(e,r,n,t,a,i){var s=e;var u;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(t[a]){u=re(null,n,a);if(u){t[a].$elm$=u;s.insertBefore(u,r)}}}};var te=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var ae=function(e,r,n,t){var a=0;var i=0;var s=r.length-1;var o=r[0];var u=r[s];var l=t.length-1;var f=t[0];var c=t[l];var $;while(a<=s&&i<=l){if(o==null){o=r[++a]}else if(u==null){u=r[--s]}else if(f==null){f=t[++i]}else if(c==null){c=t[--l]}else if(ie(o,f)){se(o,f);o=r[++a];f=t[++i]}else if(ie(u,c)){se(u,c);u=r[--s];c=t[--l]}else if(ie(o,c)){se(o,c);e.insertBefore(o.$elm$,u.$elm$.nextSibling);o=r[++a];c=t[--l]}else if(ie(u,f)){se(u,f);e.insertBefore(u.$elm$,o.$elm$);u=r[--s];f=t[++i]}else{{$=re(r&&r[i],n,i);f=t[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){ne(e,t[l+1]==null?null:t[l+1].$elm$,n,t,i,l)}else if(i>l){te(r,a,s)}};var ie=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var se=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;{{{ee(e,r,u)}}if(t!==null&&a!==null){ae(n,t,r,a)}else if(a!==null){ne(n,null,r,a,0,a.length-1)}else if(t!==null){te(t,0,t.length-1)}}};var oe=function(e,r,n,t){o=e.tagName;var a=r.$vnode$||K(null,null);var i=Y(t)?t:J(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}se(a,i)};var ue=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var le=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=H("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return fe(e,r,n,s,t)};ue(r,i);var u;if(t){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],n=e[1];return he(s,r,n)}));r.$queuedListeners$=null}}}a();return de(u,(function(){return O(o)}))};var fe=function(e,r,n,t,a){var i=H("update",n.$tagName$);var s=e["s-rc"];if(a){Q(e,n,r.$modeName$)}var o=H("render",n.$tagName$);{{try{oe(e,r,n,t.render())}catch(f){b(f)}}}if(c.$cssShim$){c.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var u=e["s-p"];var l=function(){return ce(e,r,n)};if(u.length===0){l()}else{Promise.all(u).then(l);r.$flags$|=4;u.length=0}}};var ce=function(e,r,n){var t=H("postUpdate",n.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(z)}t();{r.$onReadyResolve$(e);if(!a){ve()}}}else{t()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){A((function(){return le(e,r,n,false)}))}r.$flags$&=~(4|512)}};var $e=function(e,r){{var n=m(e);if((n.$flags$&(2|16))===2){le(e,n,r,false)}}};var ve=function(e){{f.documentElement.classList.add(z)}{c.$flags$|=2}};var he=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){b(t)}}return undefined};var de=function(e,r){return e&&e.then?e.then(r):r()};var me=function(e,r){return m(e).$instanceValues$.get(r)};var pe=function(e,r,n,t){var a=m(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var u=a.$lazyInstance$;n=T(n,t.$members$[r][0]);if(n!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,n);if(u){if((o&(2|16))===2){le(i,a,t,false)}}}};var ge=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return me(this,t)},set:function(e){pe(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;c.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var ye=function(e,r,n){r.$queuedListeners$=r.$queuedListeners$||[];var t=n.map((function(n){var t=n[0],a=n[1],i=n[2];var s=e;var o=be(r,i);var u=we(t);c.ael(s,a,o,u);return function(){return c.rel(s,a,o,u)}}));return function(){return t.forEach((function(e){return e()}))}};var be=function(e,r){return function(n){{if(e.$flags$&256){e.$lazyInstance$[r](n)}else{e.$queuedListeners$.push([r,n])}}}};var we=function(e){return v?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var _e=function(e,t,a,i,s){return __awaiter(n,void 0,void 0,(function(){var n,i,o,u,l,f,c;return __generator(this,(function($){switch($.label){case 0:if(!((t.$flags$&32)===0))return[3,5];t.$flags$|=32;s=_(a);if(!s.then)return[3,2];n=V();return[4,s];case 1:s=$.sent();n();$.label=2;case 2:if(!s.isProxied){ge(s,a,2);s.isProxied=true}i=H("createInstance",a.$tagName$);{t.$flags$|=8}try{new s(t)}catch(v){b(v)}{t.$flags$&=~8}i();o=D(a.$tagName$);if(!(!S.has(o)&&s.style))return[3,5];u=H("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(l,o,false)}))];case 3:l=$.sent();$.label=4;case 4:W(o,l,!!(a.$flags$&1));u();$.label=5;case 5:f=t.$ancestorComponent$;c=function(){return le(e,t,a,true)};if(f&&f["s-rc"]){f["s-rc"].push(c)}else{c()}return[2]}}))}))};var Se=function(e,r){if((c.$flags$&1)===0){var n=H("connectedCallback",r.$tagName$);var t=m(e);if(r.$listeners$){t.$rmListeners$=ye(e,t,r.$listeners$)}if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ue(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{A((function(){return _e(e,t,r)}))}}n()}};var Re=function(e){if((c.$flags$&1)===0){var r=m(e);{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var Le=e("b",(function(e,r){if(r===void 0){r={}}var n=H();var t=[];var a=r.exclude||[];var i=f.head;var s=l.customElements;var o=i.querySelector("meta[charset]");var u=f.createElement("style");var v=[];var h;var d=true;Object.assign(c,r);c.$resourcesUrl$=new URL(r.resourcesUrl||"./",f.baseURI).href;if(r.syncQueue){c.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}{n.$listeners$=r[3]}if(!$&&n.$flags$&1){n.$flags$|=8}var i=n.$tagName$;var o=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;g(r);if(n.$flags$&1){if($){r.attachShadow({mode:"open"})}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return t}r.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(d){v.push(this)}else{c.jmp((function(){return Se(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return Re(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){$e(this,n)};r.prototype.componentOnReady=function(){return m(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){t.push(i);s.define(i,ge(o,n,1))}}))}));u.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";u.setAttribute("data-styles","");i.insertBefore(u,o?o.nextSibling:i.firstChild);d=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{c.jmp((function(){return h=setTimeout(ve,30,"timeout")}))}n()}))}}}));