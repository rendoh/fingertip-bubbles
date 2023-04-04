(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Al(n){if(n.__esModule)return n;var t=n.default;if(typeof t=="function"){var e=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(t,s);return new i}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var s=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:function(){return n[r]}})}),e}var Il={};(function(){var n;function t(u){var h=0;return function(){return h<u.length?{done:!1,value:u[h++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,h,d){return u==Array.prototype||u==Object.prototype||(u[h]=d.value),u};function r(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ae=="object"&&ae];for(var h=0;h<u.length;++h){var d=u[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=r(this);function i(u,h){if(h)t:{var d=s;u=u.split(".");for(var y=0;y<u.length-1;y++){var N=u[y];if(!(N in d))break t;d=d[N]}u=u[u.length-1],y=d[u],h=h(y),h!=y&&h!=null&&e(d,u,{configurable:!0,writable:!0,value:h})}}i("Symbol",function(u){function h(x){if(this instanceof h)throw new TypeError("Symbol is not a constructor");return new d(y+(x||"")+"_"+N++,x)}function d(x,T){this.h=x,e(this,"description",{configurable:!0,writable:!0,value:T})}if(u)return u;d.prototype.toString=function(){return this.h};var y="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",N=0;return h}),i("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var h="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<h.length;d++){var y=s[h[d]];typeof y=="function"&&typeof y.prototype[u]!="function"&&e(y.prototype,u,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return u});function a(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function o(u){var h=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];return h?h.call(u):{next:t(u)}}function l(u){if(!(u instanceof Array)){u=o(u);for(var h,d=[];!(h=u.next()).done;)d.push(h.value);u=d}return u}var c=typeof Object.assign=="function"?Object.assign:function(u,h){for(var d=1;d<arguments.length;d++){var y=arguments[d];if(y)for(var N in y)Object.prototype.hasOwnProperty.call(y,N)&&(u[N]=y[N])}return u};i("Object.assign",function(u){return u||c});var p=typeof Object.create=="function"?Object.create:function(u){function h(){}return h.prototype=u,new h},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var g;t:{var b={a:!0},v={};try{v.__proto__=b,g=v.a;break t}catch{}g=!1}f=g?function(u,h){if(u.__proto__=h,u.__proto__!==h)throw new TypeError(u+" is not extensible");return u}:null}var S=f;function _(u,h){if(u.prototype=p(h.prototype),u.prototype.constructor=u,S)S(u,h);else for(var d in h)if(d!="prototype")if(Object.defineProperties){var y=Object.getOwnPropertyDescriptor(h,d);y&&Object.defineProperty(u,d,y)}else u[d]=h[d];u.ya=h.prototype}function k(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function P(u){if(u.m)throw new TypeError("Generator is already running");u.m=!0}k.prototype.u=function(u){this.i=u};function L(u,h){u.l={ma:h,na:!0},u.h=u.s||u.v}k.prototype.return=function(u){this.l={return:u},this.h=this.v};function D(u,h,d){return u.h=d,{value:h}}function C(u){this.h=new k,this.i=u}function B(u,h){P(u.h);var d=u.h.j;return d?H(u,"return"in d?d.return:function(y){return{value:y,done:!0}},h,u.h.return):(u.h.return(h),V(u))}function H(u,h,d,y){try{var N=h.call(u.h.j,d);if(!(N instanceof Object))throw new TypeError("Iterator result "+N+" is not an object");if(!N.done)return u.h.m=!1,N;var x=N.value}catch(T){return u.h.j=null,L(u.h,T),V(u)}return u.h.j=null,y.call(u.h,x),V(u)}function V(u){for(;u.h.h;)try{var h=u.i(u.h);if(h)return u.h.m=!1,{value:h.value,done:!1}}catch(d){u.h.i=void 0,L(u.h,d)}if(u.h.m=!1,u.h.l){if(h=u.h.l,u.h.l=null,h.na)throw h.ma;return{value:h.return,done:!0}}return{value:void 0,done:!0}}function z(u){this.next=function(h){return P(u.h),u.h.j?h=H(u,u.h.j.next,h,u.h.u):(u.h.u(h),h=V(u)),h},this.throw=function(h){return P(u.h),u.h.j?h=H(u,u.h.j.throw,h,u.h.u):(L(u.h,h),h=V(u)),h},this.return=function(h){return B(u,h)},this[Symbol.iterator]=function(){return this}}function U(u){function h(y){return u.next(y)}function d(y){return u.throw(y)}return new Promise(function(y,N){function x(T){T.done?y(T.value):Promise.resolve(T.value).then(h,d).then(x,N)}x(u.next())})}function j(u){return U(new z(new C(u)))}i("Promise",function(u){function h(T){this.i=0,this.j=void 0,this.h=[],this.u=!1;var A=this.l();try{T(A.resolve,A.reject)}catch(O){A.reject(O)}}function d(){this.h=null}function y(T){return T instanceof h?T:new h(function(A){A(T)})}if(u)return u;d.prototype.i=function(T){if(this.h==null){this.h=[];var A=this;this.j(function(){A.m()})}this.h.push(T)};var N=s.setTimeout;d.prototype.j=function(T){N(T,0)},d.prototype.m=function(){for(;this.h&&this.h.length;){var T=this.h;this.h=[];for(var A=0;A<T.length;++A){var O=T[A];T[A]=null;try{O()}catch(R){this.l(R)}}}this.h=null},d.prototype.l=function(T){this.j(function(){throw T})},h.prototype.l=function(){function T(R){return function(M){O||(O=!0,R.call(A,M))}}var A=this,O=!1;return{resolve:T(this.I),reject:T(this.m)}},h.prototype.I=function(T){if(T===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(T instanceof h)this.L(T);else{t:switch(typeof T){case"object":var A=T!=null;break t;case"function":A=!0;break t;default:A=!1}A?this.F(T):this.s(T)}},h.prototype.F=function(T){var A=void 0;try{A=T.then}catch(O){this.m(O);return}typeof A=="function"?this.M(A,T):this.s(T)},h.prototype.m=function(T){this.v(2,T)},h.prototype.s=function(T){this.v(1,T)},h.prototype.v=function(T,A){if(this.i!=0)throw Error("Cannot settle("+T+", "+A+"): Promise already settled in state"+this.i);this.i=T,this.j=A,this.i===2&&this.K(),this.H()},h.prototype.K=function(){var T=this;N(function(){if(T.D()){var A=s.console;typeof A<"u"&&A.error(T.j)}},1)},h.prototype.D=function(){if(this.u)return!1;var T=s.CustomEvent,A=s.Event,O=s.dispatchEvent;return typeof O>"u"?!0:(typeof T=="function"?T=new T("unhandledrejection",{cancelable:!0}):typeof A=="function"?T=new A("unhandledrejection",{cancelable:!0}):(T=s.document.createEvent("CustomEvent"),T.initCustomEvent("unhandledrejection",!1,!0,T)),T.promise=this,T.reason=this.j,O(T))},h.prototype.H=function(){if(this.h!=null){for(var T=0;T<this.h.length;++T)x.i(this.h[T]);this.h=null}};var x=new d;return h.prototype.L=function(T){var A=this.l();T.T(A.resolve,A.reject)},h.prototype.M=function(T,A){var O=this.l();try{T.call(A,O.resolve,O.reject)}catch(R){O.reject(R)}},h.prototype.then=function(T,A){function O(W,K){return typeof W=="function"?function(Y){try{R(W(Y))}catch(Q){M(Q)}}:K}var R,M,q=new h(function(W,K){R=W,M=K});return this.T(O(T,R),O(A,M)),q},h.prototype.catch=function(T){return this.then(void 0,T)},h.prototype.T=function(T,A){function O(){switch(R.i){case 1:T(R.j);break;case 2:A(R.j);break;default:throw Error("Unexpected state: "+R.i)}}var R=this;this.h==null?x.i(O):this.h.push(O),this.u=!0},h.resolve=y,h.reject=function(T){return new h(function(A,O){O(T)})},h.race=function(T){return new h(function(A,O){for(var R=o(T),M=R.next();!M.done;M=R.next())y(M.value).T(A,O)})},h.all=function(T){var A=o(T),O=A.next();return O.done?y([]):new h(function(R,M){function q(Y){return function(Q){W[Y]=Q,K--,K==0&&R(W)}}var W=[],K=0;do W.push(void 0),K++,y(O.value).T(q(W.length-1),M),O=A.next();while(!O.done)})},h});function Z(u,h){u instanceof String&&(u+="");var d=0,y=!1,N={next:function(){if(!y&&d<u.length){var x=d++;return{value:h(x,u[x]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.keys",function(u){return u||function(){return Z(this,function(h){return h})}}),i("Array.prototype.fill",function(u){return u||function(h,d,y){var N=this.length||0;for(0>d&&(d=Math.max(0,N+d)),(y==null||y>N)&&(y=N),y=Number(y),0>y&&(y=Math.max(0,N+y)),d=Number(d||0);d<y;d++)this[d]=h;return this}});function X(u){return u||Array.prototype.fill}i("Int8Array.prototype.fill",X),i("Uint8Array.prototype.fill",X),i("Uint8ClampedArray.prototype.fill",X),i("Int16Array.prototype.fill",X),i("Uint16Array.prototype.fill",X),i("Int32Array.prototype.fill",X),i("Uint32Array.prototype.fill",X),i("Float32Array.prototype.fill",X),i("Float64Array.prototype.fill",X),i("Object.is",function(u){return u||function(h,d){return h===d?h!==0||1/h===1/d:h!==h&&d!==d}}),i("Array.prototype.includes",function(u){return u||function(h,d){var y=this;y instanceof String&&(y=String(y));var N=y.length;for(d=d||0,0>d&&(d=Math.max(d+N,0));d<N;d++){var x=y[d];if(x===h||Object.is(x,h))return!0}return!1}}),i("String.prototype.includes",function(u){return u||function(h,d){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(h instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(h,d||0)!==-1}});var et=this||self;function nt(u,h){u=u.split(".");var d=et;u[0]in d||typeof d.execScript>"u"||d.execScript("var "+u[0]);for(var y;u.length&&(y=u.shift());)u.length||h===void 0?d[y]&&d[y]!==Object.prototype[y]?d=d[y]:d=d[y]={}:d[y]=h}function mt(u){var h;t:{if((h=et.navigator)&&(h=h.userAgent))break t;h=""}return h.indexOf(u)!=-1}var $t=Array.prototype.map?function(u,h){return Array.prototype.map.call(u,h,void 0)}:function(u,h){for(var d=u.length,y=Array(d),N=typeof u=="string"?u.split(""):u,x=0;x<d;x++)x in N&&(y[x]=h.call(void 0,N[x],x,u));return y},ce={},jt=null;function _r(u){var h=u.length,d=3*h/4;d%3?d=Math.floor(d):"=.".indexOf(u[h-1])!=-1&&(d="=.".indexOf(u[h-2])!=-1?d-2:d-1);var y=new Uint8Array(d),N=0;return Ru(u,function(x){y[N++]=x}),N!==d?y.subarray(0,N):y}function Ru(u,h){function d(O){for(;y<u.length;){var R=u.charAt(y++),M=jt[R];if(M!=null)return M;if(!/^[\s\xa0]*$/.test(R))throw Error("Unknown base64 encoding at char: "+R)}return O}Ti();for(var y=0;;){var N=d(-1),x=d(0),T=d(64),A=d(64);if(A===64&&N===-1)break;h(N<<2|x>>4),T!=64&&(h(x<<4&240|T>>2),A!=64&&h(T<<6&192|A))}}function Ti(){if(!jt){jt={};for(var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],d=0;5>d;d++){var y=u.concat(h[d].split(""));ce[d]=y;for(var N=0;N<y.length;N++){var x=y[N];jt[x]===void 0&&(jt[x]=N)}}}}var $r=typeof Uint8Array<"u",xi=!(mt("Trident")||mt("MSIE"))&&typeof et.btoa=="function";function Si(u){if(!xi){var h;h===void 0&&(h=0),Ti(),h=ce[h];for(var d=Array(Math.floor(u.length/3)),y=h[64]||"",N=0,x=0;N<u.length-2;N+=3){var T=u[N],A=u[N+1],O=u[N+2],R=h[T>>2];T=h[(T&3)<<4|A>>4],A=h[(A&15)<<2|O>>6],O=h[O&63],d[x++]=R+T+A+O}switch(R=0,O=y,u.length-N){case 2:R=u[N+1],O=h[(R&15)<<2]||y;case 1:u=u[N],d[x]=h[u>>2]+h[(u&3)<<4|R>>4]+O+y}return d.join("")}for(h="";10240<u.length;)h+=String.fromCharCode.apply(null,u.subarray(0,10240)),u=u.subarray(10240);return h+=String.fromCharCode.apply(null,u),btoa(h)}var Ei=RegExp("[-_.]","g");function zu(u){switch(u){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function _i(u){if(!xi)return _r(u);Ei.test(u)&&(u=u.replace(Ei,zu)),u=atob(u);for(var h=new Uint8Array(u.length),d=0;d<u.length;d++)h[d]=u.charCodeAt(d);return h}var $i;function kr(){return $i||($i=new Uint8Array(0))}var ln={},Vu=typeof Uint8Array.prototype.slice=="function",bt=0,Ot=0;function ki(u){var h=0>u;u=Math.abs(u);var d=u>>>0;u=Math.floor((u-d)/4294967296),h&&(d=o(Ai(d,u)),h=d.next().value,u=d.next().value,d=h),bt=d>>>0,Ot=u>>>0}var ju=typeof BigInt=="function";function Ai(u,h){return h=~h,u?u=~u+1:h+=1,[u,h]}function Ii(u,h){this.i=u>>>0,this.h=h>>>0}function Oi(u){if(!u)return Di||(Di=new Ii(0,0));if(!/^-?\d+$/.test(u))return null;if(16>u.length)ki(Number(u));else if(ju)u=BigInt(u),bt=Number(u&BigInt(4294967295))>>>0,Ot=Number(u>>BigInt(32)&BigInt(4294967295));else{var h=+(u[0]==="-");Ot=bt=0;for(var d=u.length,y=h,N=(d-h)%6+h;N<=d;y=N,N+=6)y=Number(u.slice(y,N)),Ot*=1e6,bt=1e6*bt+y,4294967296<=bt&&(Ot+=bt/4294967296|0,bt%=4294967296);h&&(h=o(Ai(bt,Ot)),u=h.next().value,h=h.next().value,bt=u,Ot=h)}return new Ii(bt,Ot)}var Di;function Ci(u,h){return Error("Invalid wire type: "+u+" (at position "+h+")")}function Ar(){return Error("Failed to read varint, encoding is invalid.")}function Fi(u,h){return Error("Tried to read past the end of the data "+h+" > "+u)}function De(){throw Error("Invalid UTF8")}function Li(u,h){return h=String.fromCharCode.apply(null,h),u==null?h:u+h}var Fn=void 0,Ir,Mu=typeof TextDecoder<"u",Pi,Hu=typeof TextEncoder<"u",Bi;function Ri(u){if(u!==ln)throw Error("illegal external caller")}function cn(u,h){if(Ri(h),this.V=u,u!=null&&u.length===0)throw Error("ByteString should be constructed with non-empty values")}function Or(){return Bi||(Bi=new cn(null,ln))}function zi(u){Ri(ln);var h=u.V;return h=h==null||$r&&h!=null&&h instanceof Uint8Array?h:typeof h=="string"?_i(h):null,h==null?h:u.V=h}function Uu(u){if(typeof u=="string")return{buffer:_i(u),C:!1};if(Array.isArray(u))return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Uint8Array)return{buffer:u,C:!1};if(u.constructor===ArrayBuffer)return{buffer:new Uint8Array(u),C:!1};if(u.constructor===cn)return{buffer:zi(u)||kr(),C:!0};if(u instanceof Uint8Array)return{buffer:new Uint8Array(u.buffer,u.byteOffset,u.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Vi(u,h){this.i=null,this.m=!1,this.h=this.j=this.l=0,Dr(this,u,h)}function Dr(u,h,d){d=d===void 0?{}:d,u.S=d.S===void 0?!1:d.S,h&&(h=Uu(h),u.i=h.buffer,u.m=h.C,u.l=0,u.j=u.i.length,u.h=u.l)}Vi.prototype.reset=function(){this.h=this.l};function Ce(u,h){if(u.h=h,h>u.j)throw Fi(u.j,h)}function hn(u){var h=u.i,d=u.h,y=h[d++],N=y&127;if(y&128&&(y=h[d++],N|=(y&127)<<7,y&128&&(y=h[d++],N|=(y&127)<<14,y&128&&(y=h[d++],N|=(y&127)<<21,y&128&&(y=h[d++],N|=y<<28,y&128&&h[d++]&128&&h[d++]&128&&h[d++]&128&&h[d++]&128&&h[d++]&128)))))throw Ar();return Ce(u,d),N}function ji(u,h){if(0>h)throw Error("Tried to read a negative byte length: "+h);var d=u.h,y=d+h;if(y>u.j)throw Fi(h,u.j-d);return u.h=y,d}var Mi=[];function Cr(){this.h=[]}Cr.prototype.length=function(){return this.h.length},Cr.prototype.end=function(){var u=this.h;return this.h=[],u};function Hi(u,h,d){for(;0<d||127<h;)u.h.push(h&127|128),h=(h>>>7|d<<25)>>>0,d>>>=7;u.h.push(h)}function Fe(u,h){for(;127<h;)u.h.push(h&127|128),h>>>=7;u.h.push(h)}function Fr(u,h){if(Mi.length){var d=Mi.pop();Dr(d,u,h),u=d}else u=new Vi(u,h);this.h=u,this.j=this.h.h,this.i=this.l=-1,this.setOptions(h)}Fr.prototype.setOptions=function(u){u=u===void 0?{}:u,this.ca=u.ca===void 0?!1:u.ca},Fr.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function Ui(u){var h=u.h;if(h.h==h.j)return!1;u.j=u.h.h;var d=hn(u.h)>>>0;if(h=d>>>3,d&=7,!(0<=d&&5>=d))throw Ci(d,u.j);if(1>h)throw Error("Invalid field number: "+h+" (at position "+u.j+")");return u.l=h,u.i=d,!0}function Ln(u){switch(u.i){case 0:if(u.i!=0)Ln(u);else t:{u=u.h;for(var h=u.h,d=h+10,y=u.i;h<d;)if(!(y[h++]&128)){Ce(u,h);break t}throw Ar()}break;case 1:u=u.h,Ce(u,u.h+8);break;case 2:u.i!=2?Ln(u):(h=hn(u.h)>>>0,u=u.h,Ce(u,u.h+h));break;case 5:u=u.h,Ce(u,u.h+4);break;case 3:h=u.l;do{if(!Ui(u))throw Error("Unmatched start-group tag: stream EOF");if(u.i==4){if(u.l!=h)throw Error("Unmatched end-group tag");break}Ln(u)}while(1);break;default:throw Ci(u.i,u.j)}}var Pn=[];function Ku(){this.j=[],this.i=0,this.h=new Cr}function qe(u,h){h.length!==0&&(u.j.push(h),u.i+=h.length)}function Wu(u,h){if(h=h.R){qe(u,u.h.end());for(var d=0;d<h.length;d++)qe(u,zi(h[d])||kr())}}var he=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Le(u,h){return he?u[he]|=h:u.A!==void 0?u.A|=h:(Object.defineProperties(u,{A:{value:h,configurable:!0,writable:!0,enumerable:!1}}),h)}function Ki(u,h){he?u[he]&&(u[he]&=~h):u.A!==void 0&&(u.A&=~h)}function gt(u){var h;return he?h=u[he]:h=u.A,h??0}function Qt(u,h){he?u[he]=h:u.A!==void 0?u.A=h:Object.defineProperties(u,{A:{value:h,configurable:!0,writable:!0,enumerable:!1}})}function Lr(u){return Le(u,1),u}function Gu(u,h){Qt(h,(u|0)&-51)}function Bn(u,h){Qt(h,(u|18)&-41)}var Pr={};function Rn(u){return u!==null&&typeof u=="object"&&!Array.isArray(u)&&u.constructor===Object}var pn,Wi=[];Qt(Wi,23),pn=Object.freeze(Wi);function Br(u){if(gt(u.o)&2)throw Error("Cannot mutate an immutable Message")}function Rr(u){var h=u.length;(h=h?u[h-1]:void 0)&&Rn(h)?h.g=1:(h={},u.push((h.g=1,h)))}function Gi(u){var h=u.i+u.G;return u.B||(u.B=u.o[h]={})}function Gt(u,h){return h===-1?null:h>=u.i?u.B?u.B[h]:void 0:u.o[h+u.G]}function te(u,h,d,y){Br(u),fn(u,h,d,y)}function fn(u,h,d,y){u.j&&(u.j=void 0),h>=u.i||y?Gi(u)[h]=d:(u.o[h+u.G]=d,(u=u.B)&&h in u&&delete u[h])}function zr(u,h,d,y){var N=Gt(u,h);Array.isArray(N)||(N=pn);var x=gt(N);if(x&1||Lr(N),y)x&2||Le(N,2),d&1||Object.freeze(N);else{y=!(d&2);var T=x&2;d&1||!T?y&&x&16&&!T&&Ki(N,16):(N=Lr(Array.prototype.slice.call(N)),fn(u,h,N))}return N}function Vr(u,h){var d=Gt(u,h),y=d==null?d:typeof d=="number"||d==="NaN"||d==="Infinity"||d==="-Infinity"?Number(d):void 0;return y!=null&&y!==d&&fn(u,h,y),y}function qi(u,h,d,y,N){u.h||(u.h={});var x=u.h[d],T=zr(u,d,3,N);if(!x){var A=T;x=[];var O=!!(gt(u.o)&16);T=!!(gt(A)&2);var R=A;!N&&T&&(A=Array.prototype.slice.call(A));for(var M=T,q=0;q<A.length;q++){var W=A[q],K=h,Y=!1;if(Y=Y===void 0?!1:Y,W=Array.isArray(W)?new K(W):Y?new K:void 0,W!==void 0){K=W.o;var Q=Y=gt(K);T&&(Q|=2),O&&(Q|=16),Q!=Y&&Qt(K,Q),K=Q,M=M||!!(2&K),x.push(W)}}return u.h[d]=x,O=gt(A),h=O|33,h=M?h&-9:h|8,O!=h&&(M=A,Object.isFrozen(M)&&(M=Array.prototype.slice.call(M)),Qt(M,h),A=M),R!==A&&fn(u,d,A),(N||y&&T)&&Le(x,2),y&&Object.freeze(x),x}return N||(N=Object.isFrozen(x),y&&!N?Object.freeze(x):!y&&N&&(x=Array.prototype.slice.call(x),u.h[d]=x)),x}function zn(u,h,d){var y=!!(gt(u.o)&2);if(h=qi(u,h,d,y,y),u=zr(u,d,3,y),!(y||gt(u)&8)){for(y=0;y<h.length;y++){if(d=h[y],gt(d.o)&2){var N=ta(d,!1);N.j=d}else N=d;d!==N&&(h[y]=N,u[y]=N.o)}Le(u,8)}return h}function ee(u,h,d){if(d!=null&&typeof d!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);te(u,h,d)}function Yi(u,h,d,y,N){Br(u);var x=qi(u,d,h,!1,!1);return d=y??new d,u=zr(u,h,2,!1),N!=null?(x.splice(N,0,d),u.splice(N,0,d.o)):(x.push(d),u.push(d.o)),d.C()&&Ki(u,8),d}function Vn(u,h){return u??h}function ne(u,h,d){return d=d===void 0?0:d,Vn(Vr(u,h),d)}var jn;function qu(u){switch(typeof u){case"number":return isFinite(u)?u:String(u);case"object":if(u)if(Array.isArray(u)){if(gt(u)&128)return u=Array.prototype.slice.call(u),Rr(u),u}else{if($r&&u!=null&&u instanceof Uint8Array)return Si(u);if(u instanceof cn){var h=u.V;return h==null?"":typeof h=="string"?h:u.V=Si(h)}}}return u}function Xi(u,h,d,y){if(u!=null){if(Array.isArray(u))u=jr(u,h,d,y!==void 0);else if(Rn(u)){var N={},x;for(x in u)N[x]=Xi(u[x],h,d,y);u=N}else u=h(u,y);return u}}function jr(u,h,d,y){var N=gt(u);y=y?!!(N&16):void 0,u=Array.prototype.slice.call(u);for(var x=0;x<u.length;x++)u[x]=Xi(u[x],h,d,y);return d(N,u),u}function Yu(u){return u.ja===Pr?u.toJSON():qu(u)}function Xu(u,h){u&128&&Rr(h)}function Ji(u,h,d){if(d=d===void 0?Bn:d,u!=null){if($r&&u instanceof Uint8Array)return u.length?new cn(new Uint8Array(u),ln):Or();if(Array.isArray(u)){var y=gt(u);return y&2?u:h&&!(y&32)&&(y&16||y===0)?(Qt(u,y|2),u):(u=jr(u,Ji,y&4?Bn:d,!0),h=gt(u),h&4&&h&2&&Object.freeze(u),u)}return u.ja===Pr?Qi(u):u}}function Zi(u,h,d,y,N,x,T){if(u=u.h&&u.h[d]){if(y=gt(u),y&2?y=u:(x=$t(u,Qi),Bn(y,x),Object.freeze(x),y=x),Br(h),T=y==null?pn:Lr([]),y!=null){for(x=!!y.length,u=0;u<y.length;u++){var A=y[u];x=x&&!(gt(A.o)&2),T[u]=A.o}x=(x?8:0)|1,u=gt(T),(u&x)!==x&&(Object.isFrozen(T)&&(T=Array.prototype.slice.call(T)),Qt(T,u|x)),h.h||(h.h={}),h.h[d]=y}else h.h&&(h.h[d]=void 0);fn(h,d,T,N)}else te(h,d,Ji(y,x,T),N)}function Qi(u){return gt(u.o)&2||(u=ta(u,!0),Le(u.o,2)),u}function ta(u,h){var d=u.o,y=[];Le(y,16);var N=u.constructor.h;if(N&&y.push(N),N=u.B,N){y.length=d.length,y.fill(void 0,y.length,d.length);var x={};y[y.length-1]=x}gt(d)&128&&Rr(y),h=h||u.C()?Bn:Gu,x=u.constructor,jn=y,y=new x(y),jn=void 0,u.R&&(y.R=u.R.slice()),x=!!(gt(d)&16);for(var T=N?d.length-1:d.length,A=0;A<T;A++)Zi(u,y,A-u.G,d[A],!1,x,h);if(N)for(var O in N)Zi(u,y,+O,N[O],!0,x,h);return y}function Lt(u,h,d){u==null&&(u=jn),jn=void 0;var y=this.constructor.i||0,N=0<y,x=this.constructor.h,T=!1;if(u==null){u=x?[x]:[];var A=48,O=!0;N&&(y=0,A|=128),Qt(u,A)}else{if(!Array.isArray(u)||x&&x!==u[0])throw Error();var R=A=Le(u,0);if((O=(16&R)!==0)&&((T=(32&R)!==0)||(R|=32)),N){if(128&R)y=0;else if(0<u.length){var M=u[u.length-1];if(Rn(M)&&"g"in M){y=0,R|=128,delete M.g;var q=!0,W;for(W in M){q=!1;break}q&&u.pop()}}}else if(128&R)throw Error();A!==R&&Qt(u,R)}this.G=(x?0:-1)-y,this.h=void 0,this.o=u;t:{if(x=this.o.length,y=x-1,x&&(x=this.o[y],Rn(x))){this.B=x,this.i=y-this.G;break t}h!==void 0&&-1<h?(this.i=Math.max(h,y+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!N&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(d){h=O&&!T&&!0,N=this.i;var K;for(O=0;O<d.length;O++)T=d[O],T<N?(T+=this.G,(y=u[T])?ea(y,h):u[T]=pn):(K||(K=Gi(this)),(y=K[T])?ea(y,h):K[T]=pn)}}Lt.prototype.toJSON=function(){return jr(this.o,Yu,Xu)},Lt.prototype.C=function(){return!!(gt(this.o)&2)};function ea(u,h){if(Array.isArray(u)){var d=gt(u),y=1;!h||d&2||(y|=16),(d&y)!==y&&Qt(u,d|y)}}Lt.prototype.ja=Pr,Lt.prototype.toString=function(){return this.o.toString()};function na(u,h,d){if(d){var y={},N;for(N in d){var x=d[N],T=x.qa;T||(y.J=x.wa||x.oa.W,x.ia?(y.aa=oa(x.ia),T=function(A){return function(O,R,M){return A.J(O,R,M,A.aa)}}(y)):x.ka?(y.Z=ua(x.da.P,x.ka),T=function(A){return function(O,R,M){return A.J(O,R,M,A.Z)}}(y)):T=y.J,x.qa=T),T(h,u,x.da),y={J:y.J,aa:y.aa,Z:y.Z}}}Wu(h,u)}var Mn=Symbol();function ra(u,h,d){return u[Mn]||(u[Mn]=function(y,N){return h(y,N,d)})}function sa(u){var h=u[Mn];if(!h){var d=Hr(u);h=function(y,N){return la(y,N,d)},u[Mn]=h}return h}function Ju(u){var h=u.ia;if(h)return sa(h);if(h=u.va)return ra(u.da.P,h,u.ka)}function Zu(u){var h=Ju(u),d=u.da,y=u.oa.U;return h?function(N,x){return y(N,x,d,h)}:function(N,x){return y(N,x,d)}}function ia(u,h){var d=u[h];return typeof d=="function"&&d.length===0&&(d=d(),u[h]=d),Array.isArray(d)&&(mn in d||dn in d||0<d.length&&typeof d[0]=="function")?d:void 0}function aa(u,h,d,y,N,x){h.P=u[0];var T=1;if(u.length>T&&typeof u[T]!="number"){var A=u[T++];d(h,A)}for(;T<u.length;){d=u[T++];for(var O=T+1;O<u.length&&typeof u[O]!="number";)O++;switch(A=u[T++],O-=T,O){case 0:y(h,d,A);break;case 1:(O=ia(u,T))?(T++,N(h,d,A,O)):y(h,d,A,u[T++]);break;case 2:O=T++,O=ia(u,O),N(h,d,A,O,u[T++]);break;case 3:x(h,d,A,u[T++],u[T++],u[T++]);break;case 4:x(h,d,A,u[T++],u[T++],u[T++],u[T++]);break;default:throw Error("unexpected number of binary field arguments: "+O)}}return h}var Hn=Symbol();function oa(u){var h=u[Hn];if(!h){var d=Mr(u);h=function(y,N){return ca(y,N,d)},u[Hn]=h}return h}function ua(u,h){var d=u[Hn];return d||(d=function(y,N){return na(y,N,h)},u[Hn]=d),d}var dn=Symbol();function Qu(u,h){u.push(h)}function tl(u,h,d){u.push(h,d.W)}function el(u,h,d,y){var N=oa(y),x=Mr(y).P,T=d.W;u.push(h,function(A,O,R){return T(A,O,R,x,N)})}function nl(u,h,d,y,N,x){var T=ua(y,x),A=d.W;u.push(h,function(O,R,M){return A(O,R,M,y,T)})}function Mr(u){var h=u[dn];return h||(h=aa(u,u[dn]=[],Qu,tl,el,nl),mn in u&&dn in u&&(u.length=0),h)}var mn=Symbol();function rl(u,h){u[0]=h}function sl(u,h,d,y){var N=d.U;u[h]=y?function(x,T,A){return N(x,T,A,y)}:N}function il(u,h,d,y,N){var x=d.U,T=sa(y),A=Hr(y).P;u[h]=function(O,R,M){return x(O,R,M,A,T,N)}}function al(u,h,d,y,N,x,T){var A=d.U,O=ra(y,N,x);u[h]=function(R,M,q){return A(R,M,q,y,O,T)}}function Hr(u){var h=u[mn];return h||(h=aa(u,u[mn]={},rl,sl,il,al),mn in u&&dn in u&&(u.length=0),h)}function la(u,h,d){for(;Ui(h)&&h.i!=4;){var y=h.l,N=d[y];if(!N){var x=d[0];x&&(x=x[y])&&(N=d[y]=Zu(x))}if(!N||!N(h,u,y)){N=h,y=u,x=N.j,Ln(N);var T=N;if(!T.ca){if(N=T.h.h-x,T.h.h=x,T=T.h,N==0)N=Or();else{if(x=ji(T,N),T.S&&T.m)N=T.i.subarray(x,x+N);else{T=T.i;var A=x;N=x+N,N=A===N?kr():Vu?T.slice(A,N):new Uint8Array(T.subarray(A,N))}N=N.length==0?Or():new cn(N,ln)}(x=y.R)?x.push(N):y.R=[N]}}}return u}function ca(u,h,d){for(var y=d.length,N=y%2==1,x=N?1:0;x<y;x+=2)(0,d[x+1])(h,u,d[x]);na(u,h,N?d[0]:void 0)}function gn(u,h){return{U:u,W:h}}var qt=gn(function(u,h,d){if(u.i!==5)return!1;u=u.h;var y=u.i,N=u.h,x=y[N],T=y[N+1],A=y[N+2];return y=y[N+3],Ce(u,u.h+4),T=(x<<0|T<<8|A<<16|y<<24)>>>0,u=2*(T>>31)+1,x=T>>>23&255,T&=8388607,te(h,d,x==255?T?NaN:1/0*u:x==0?u*Math.pow(2,-149)*T:u*Math.pow(2,x-150)*(T+Math.pow(2,23))),!0},function(u,h,d){if(h=Vr(h,d),h!=null){Fe(u.h,8*d+5),u=u.h;var y=+h;y===0?0<1/y?bt=Ot=0:(Ot=0,bt=2147483648):isNaN(y)?(Ot=0,bt=2147483647):(y=(d=0>y?-2147483648:0)?-y:y,34028234663852886e22<y?(Ot=0,bt=(d|2139095040)>>>0):11754943508222875e-54>y?(y=Math.round(y/Math.pow(2,-149)),Ot=0,bt=(d|y)>>>0):(h=Math.floor(Math.log(y)/Math.LN2),y*=Math.pow(2,-h),y=Math.round(8388608*y),16777216<=y&&++h,Ot=0,bt=(d|h+127<<23|y&8388607)>>>0)),d=bt,u.h.push(d>>>0&255),u.h.push(d>>>8&255),u.h.push(d>>>16&255),u.h.push(d>>>24&255)}}),ol=gn(function(u,h,d){if(u.i!==0)return!1;var y=u.h,N=0,x=u=0,T=y.i,A=y.h;do{var O=T[A++];N|=(O&127)<<x,x+=7}while(32>x&&O&128);for(32<x&&(u|=(O&127)>>4),x=3;32>x&&O&128;x+=7)O=T[A++],u|=(O&127)<<x;if(Ce(y,A),128>O)y=N>>>0,O=u>>>0,(u=O&2147483648)&&(y=~y+1>>>0,O=~O>>>0,y==0&&(O=O+1>>>0)),y=4294967296*O+(y>>>0);else throw Ar();return te(h,d,u?-y:y),!0},function(u,h,d){h=Gt(h,d),h!=null&&(typeof h=="string"&&Oi(h),h!=null&&(Fe(u.h,8*d),typeof h=="number"?(u=u.h,ki(h),Hi(u,bt,Ot)):(d=Oi(h),Hi(u.h,d.i,d.h))))}),ul=gn(function(u,h,d){return u.i!==0?!1:(te(h,d,hn(u.h)),!0)},function(u,h,d){if(h=Gt(h,d),h!=null&&h!=null)if(Fe(u.h,8*d),u=u.h,d=h,0<=d)Fe(u,d);else{for(h=0;9>h;h++)u.h.push(d&127|128),d>>=7;u.h.push(1)}}),ha=gn(function(u,h,d){if(u.i!==2)return!1;var y=hn(u.h)>>>0;u=u.h;var N=ji(u,y);if(u=u.i,Mu){var x=u,T;(T=Ir)||(T=Ir=new TextDecoder("utf-8",{fatal:!0})),u=N+y,x=N===0&&u===x.length?x:x.subarray(N,u);try{var A=T.decode(x)}catch(q){if(Fn===void 0){try{T.decode(new Uint8Array([128]))}catch{}try{T.decode(new Uint8Array([97])),Fn=!0}catch{Fn=!1}}throw!Fn&&(Ir=void 0),q}}else{A=N,y=A+y,N=[];for(var O=null,R,M;A<y;)R=u[A++],128>R?N.push(R):224>R?A>=y?De():(M=u[A++],194>R||(M&192)!==128?(A--,De()):N.push((R&31)<<6|M&63)):240>R?A>=y-1?De():(M=u[A++],(M&192)!==128||R===224&&160>M||R===237&&160<=M||((x=u[A++])&192)!==128?(A--,De()):N.push((R&15)<<12|(M&63)<<6|x&63)):244>=R?A>=y-2?De():(M=u[A++],(M&192)!==128||(R<<28)+(M-144)>>30||((x=u[A++])&192)!==128||((T=u[A++])&192)!==128?(A--,De()):(R=(R&7)<<18|(M&63)<<12|(x&63)<<6|T&63,R-=65536,N.push((R>>10&1023)+55296,(R&1023)+56320))):De(),8192<=N.length&&(O=Li(O,N),N.length=0);A=Li(O,N)}return te(h,d,A),!0},function(u,h,d){if(h=Gt(h,d),h!=null){var y=!1;if(y=y===void 0?!1:y,Hu){if(y&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(h))throw Error("Found an unpaired surrogate");h=(Pi||(Pi=new TextEncoder)).encode(h)}else{for(var N=0,x=new Uint8Array(3*h.length),T=0;T<h.length;T++){var A=h.charCodeAt(T);if(128>A)x[N++]=A;else{if(2048>A)x[N++]=A>>6|192;else{if(55296<=A&&57343>=A){if(56319>=A&&T<h.length){var O=h.charCodeAt(++T);if(56320<=O&&57343>=O){A=1024*(A-55296)+O-56320+65536,x[N++]=A>>18|240,x[N++]=A>>12&63|128,x[N++]=A>>6&63|128,x[N++]=A&63|128;continue}else T--}if(y)throw Error("Found an unpaired surrogate");A=65533}x[N++]=A>>12|224,x[N++]=A>>6&63|128}x[N++]=A&63|128}}h=N===x.length?x:x.subarray(0,N)}Fe(u.h,8*d+2),Fe(u.h,h.length),qe(u,u.h.end()),qe(u,h)}}),pa=gn(function(u,h,d,y,N){if(u.i!==2)return!1;h=Yi(h,d,y),d=u.h.j,y=hn(u.h)>>>0;var x=u.h.h+y,T=x-d;if(0>=T&&(u.h.j=x,N(h,u,void 0,void 0,void 0),T=x-u.h.h),T)throw Error("Message parsing ended unexpectedly. Expected to read "+(y+" bytes, instead read "+(y-T)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return u.h.h=x,u.h.j=d,!0},function(u,h,d,y,N){if(h=zn(h,y,d),h!=null)for(y=0;y<h.length;y++){var x=u;Fe(x.h,8*d+2);var T=x.h.end();qe(x,T),T.push(x.i),x=T,N(h[y],u),T=u;var A=x.pop();for(A=T.i+T.h.length()-A;127<A;)x.push(A&127|128),A>>>=7,T.i++;x.push(A),T.i++}});function Ur(u){return function(h,d){t:{if(Pn.length){var y=Pn.pop();y.setOptions(d),Dr(y.h,h,d),h=y}else h=new Fr(h,d);try{var N=Hr(u),x=la(new N.P,h,N);break t}finally{N=h.h,N.i=null,N.m=!1,N.l=0,N.j=0,N.h=0,N.S=!1,h.l=-1,h.i=-1,100>Pn.length&&Pn.push(h)}x=void 0}return x}}function Kr(u){return function(){var h=new Ku;ca(this,h,Mr(u)),qe(h,h.h.end());for(var d=new Uint8Array(h.i),y=h.j,N=y.length,x=0,T=0;T<N;T++){var A=y[T];d.set(A,x),x+=A.length}return h.j=[d],d}}function Ye(u){Lt.call(this,u)}_(Ye,Lt);var fa=[Ye,1,ul,2,qt,3,ha,4,ha];Ye.prototype.l=Kr(fa);function Wr(u){Lt.call(this,u,-1,ll)}_(Wr,Lt),Wr.prototype.addClassification=function(u,h){return Yi(this,1,Ye,u,h),this};var ll=[1],da=Ur([Wr,1,pa,fa]);function Xe(u){Lt.call(this,u)}_(Xe,Lt);var ma=[Xe,1,qt,2,qt,3,qt,4,qt,5,qt];Xe.prototype.l=Kr(ma);function ga(u){Lt.call(this,u,-1,cl)}_(ga,Lt);var cl=[1],ya=Ur([ga,1,pa,ma]);function Un(u){Lt.call(this,u)}_(Un,Lt);var ba=[Un,1,qt,2,qt,3,qt,4,qt,5,qt,6,ol],hl=Ur(ba);Un.prototype.l=Kr(ba);function wa(u,h,d){if(d=u.createShader(d===0?u.VERTEX_SHADER:u.FRAGMENT_SHADER),u.shaderSource(d,h),u.compileShader(d),!u.getShaderParameter(d,u.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+u.getShaderInfoLog(d));return d}function va(u){return zn(u,Ye,1).map(function(h){var d=Gt(h,1);return{index:d??0,score:ne(h,2),label:Gt(h,3)!=null?Vn(Gt(h,3),""):void 0,displayName:Gt(h,4)!=null?Vn(Gt(h,4),""):void 0}})}function Na(u){return{x:ne(u,1),y:ne(u,2),z:ne(u,3),visibility:Vr(u,4)!=null?ne(u,4):void 0}}function Ta(u){return u.map(function(h){return zn(ya(h),Xe,1).map(Na)})}function Gr(u,h){this.i=u,this.h=h,this.m=0}function xa(u,h,d){return pl(u,h),typeof u.h.canvas.transferToImageBitmap=="function"?Promise.resolve(u.h.canvas.transferToImageBitmap()):d?Promise.resolve(u.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(u.h.canvas):(u.j===void 0&&(u.j=document.createElement("canvas")),new Promise(function(y){u.j.height=u.h.canvas.height,u.j.width=u.h.canvas.width,u.j.getContext("2d",{}).drawImage(u.h.canvas,0,0,u.h.canvas.width,u.h.canvas.height),y(u.j)}))}function pl(u,h){var d=u.h;if(u.s===void 0){var y=wa(d,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),N=wa(d,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),x=d.createProgram();if(d.attachShader(x,y),d.attachShader(x,N),d.linkProgram(x),!d.getProgramParameter(x,d.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+d.getProgramInfoLog(x));y=u.s=x,d.useProgram(y),N=d.getUniformLocation(y,"sampler0"),u.l={O:d.getAttribLocation(y,"aVertex"),N:d.getAttribLocation(y,"aTex"),xa:N},u.v=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,u.v),d.enableVertexAttribArray(u.l.O),d.vertexAttribPointer(u.l.O,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),u.u=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,u.u),d.enableVertexAttribArray(u.l.N),d.vertexAttribPointer(u.l.N,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),d.uniform1i(N,0)}y=u.l,d.useProgram(u.s),d.canvas.width=h.width,d.canvas.height=h.height,d.viewport(0,0,h.width,h.height),d.activeTexture(d.TEXTURE0),u.i.bindTexture2d(h.glName),d.enableVertexAttribArray(y.O),d.bindBuffer(d.ARRAY_BUFFER,u.v),d.vertexAttribPointer(y.O,2,d.FLOAT,!1,0,0),d.enableVertexAttribArray(y.N),d.bindBuffer(d.ARRAY_BUFFER,u.u),d.vertexAttribPointer(y.N,2,d.FLOAT,!1,0,0),d.bindFramebuffer(d.DRAW_FRAMEBUFFER?d.DRAW_FRAMEBUFFER:d.FRAMEBUFFER,null),d.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT),d.colorMask(!0,!0,!0,!0),d.drawArrays(d.TRIANGLE_FAN,0,4),d.disableVertexAttribArray(y.O),d.disableVertexAttribArray(y.N),d.bindBuffer(d.ARRAY_BUFFER,null),u.i.bindTexture2d(0)}function fl(u){this.h=u}var dl=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function ml(u,h){return h+u}function Sa(u,h){window[u]=h}function gl(u){var h=document.createElement("script");return h.setAttribute("src",u),h.setAttribute("crossorigin","anonymous"),new Promise(function(d){h.addEventListener("load",function(){d()},!1),h.addEventListener("error",function(){d()},!1),document.body.appendChild(h)})}function yl(){return j(function(u){switch(u.h){case 1:return u.s=2,D(u,WebAssembly.instantiate(dl),4);case 4:u.h=3,u.s=0;break;case 2:return u.s=0,u.l=null,u.return(!1);case 3:return u.return(!0)}})}function qr(u){if(this.h=u,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=u&&u.locateFile||ml,typeof window=="object")var h=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")h=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=h,u.options){h=o(Object.keys(u.options));for(var d=h.next();!d.done;d=h.next()){d=d.value;var y=u.options[d].default;y!==void 0&&(this.l[d]=typeof y=="function"?y():y)}}}n=qr.prototype,n.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function bl(u){var h,d,y,N,x,T,A,O,R,M,q;return j(function(W){switch(W.h){case 1:return u.ga?(h=u.h.files===void 0?[]:typeof u.h.files=="function"?u.h.files(u.l):u.h.files,D(W,yl(),2)):W.return();case 2:if(d=W.i,typeof window=="object")return Sa("createMediapipeSolutionsWasm",{locateFile:u.locateFile}),Sa("createMediapipeSolutionsPackedAssets",{locateFile:u.locateFile}),T=h.filter(function(K){return K.data!==void 0}),A=h.filter(function(K){return K.data===void 0}),O=Promise.all(T.map(function(K){var Y=Kn(u,K.url);if(K.path!==void 0){var Q=K.path;Y=Y.then(function(ht){return u.overrideFile(Q,ht),Promise.resolve(ht)})}return Y})),R=Promise.all(A.map(function(K){return K.simd===void 0||K.simd&&d||!K.simd&&!d?gl(u.locateFile(K.url,u.ha)):Promise.resolve()})).then(function(){var K,Y,Q;return j(function(ht){if(ht.h==1)return K=window.createMediapipeSolutionsWasm,Y=window.createMediapipeSolutionsPackedAssets,Q=u,D(ht,K(Y),2);Q.i=ht.i,ht.h=0})}),M=function(){return j(function(K){return u.h.graph&&u.h.graph.url?K=D(K,Kn(u,u.h.graph.url),0):(K.h=0,K=void 0),K})}(),D(W,Promise.all([R,O,M]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return y=h.filter(function(K){return K.simd===void 0||K.simd&&d||!K.simd&&!d}).map(function(K){return u.locateFile(K.url,u.ha)}),importScripts.apply(null,l(y)),N=u,D(W,createMediapipeSolutionsWasm(Module),6);case 6:N.i=W.i,u.m=new OffscreenCanvas(1,1),u.i.canvas=u.m,x=u.i.GL.createContext(u.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),u.i.GL.makeContextCurrent(x),W.h=4;break;case 7:if(u.m=document.createElement("canvas"),q=u.m.getContext("webgl2",{}),!q&&(q=u.m.getContext("webgl",{}),!q))return alert("Failed to create WebGL canvas context when passing video frame."),W.return();u.K=q,u.i.canvas=u.m,u.i.createContext(u.m,!0,!0,{});case 4:u.j=new u.i.SolutionWasm,u.ga=!1,W.h=0}})}function wl(u){var h,d,y,N,x,T,A,O;return j(function(R){if(R.h==1){if(u.h.graph&&u.h.graph.url&&u.fa===u.h.graph.url)return R.return();if(u.u=!0,!u.h.graph||!u.h.graph.url){R.h=2;return}return u.fa=u.h.graph.url,D(R,Kn(u,u.h.graph.url),3)}for(R.h!=2&&(h=R.i,u.j.loadGraph(h)),d=o(Object.keys(u.D)),y=d.next();!y.done;y=d.next())N=y.value,u.j.overrideFile(N,u.D[N]);if(u.D={},u.h.listeners)for(x=o(u.h.listeners),T=x.next();!T.done;T=x.next())A=T.value,xl(u,A);O=u.l,u.l={},u.setOptions(O),R.h=0})}n.reset=function(){var u=this;return j(function(h){u.j&&(u.j.reset(),u.s={},u.v={}),h.h=0})},n.setOptions=function(u,h){var d=this;if(h=h||this.h.options){for(var y=[],N=[],x={},T=o(Object.keys(u)),A=T.next();!A.done;x={X:x.X,Y:x.Y},A=T.next())if(A=A.value,!(A in this.l&&this.l[A]===u[A])){this.l[A]=u[A];var O=h[A];O!==void 0&&(O.onChange&&(x.X=O.onChange,x.Y=u[A],y.push(function(R){return function(){var M;return j(function(q){if(q.h==1)return D(q,R.X(R.Y),2);M=q.i,M===!0&&(d.u=!0),q.h=0})}}(x))),O.graphOptionXref&&(A=Object.assign({},{calculatorName:"",calculatorIndex:0},O.graphOptionXref,{valueNumber:O.type===1?u[A]:0,valueBoolean:O.type===0?u[A]:!1,valueString:O.type===2?u[A]:""}),N.push(A)))}(y.length!==0||N.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(N),this.F=(this.F===void 0?[]:this.F).concat(y))}};function vl(u){var h,d,y,N,x,T,A;return j(function(O){switch(O.h){case 1:if(!u.u)return O.return();if(!u.F){O.h=2;break}h=o(u.F),d=h.next();case 3:if(d.done){O.h=5;break}return y=d.value,D(O,y(),4);case 4:d=h.next(),O.h=3;break;case 5:u.F=void 0;case 2:if(u.H){for(N=new u.i.GraphOptionChangeRequestList,x=o(u.H),T=x.next();!T.done;T=x.next())A=T.value,N.push_back(A);u.j.changeOptions(N),N.delete(),u.H=void 0}u.u=!1,O.h=0}})}n.initialize=function(){var u=this;return j(function(h){return h.h==1?D(h,bl(u),2):h.h!=3?D(h,wl(u),3):D(h,vl(u),0)})};function Kn(u,h){var d,y;return j(function(N){return h in u.L?N.return(u.L[h]):(d=u.locateFile(h,""),y=fetch(d).then(function(x){return x.arrayBuffer()}),u.L[h]=y,N.return(y))})}n.overrideFile=function(u,h){this.j?this.j.overrideFile(u,h):this.D[u]=h},n.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},n.send=function(u,h){var d=this,y,N,x,T,A,O,R,M,q;return j(function(W){switch(W.h){case 1:return d.h.inputs?(y=1e3*(h??performance.now()),D(W,d.I,2)):W.return();case 2:return D(W,d.initialize(),3);case 3:for(N=new d.i.PacketDataList,x=o(Object.keys(u)),T=x.next();!T.done;T=x.next())if(A=T.value,O=d.h.inputs[A]){t:{var K=u[A];switch(O.type){case"video":var Y=d.s[O.stream];if(Y||(Y=new Gr(d.i,d.K),d.s[O.stream]=Y),Y.m===0&&(Y.m=Y.i.createTexture()),typeof HTMLVideoElement<"u"&&K instanceof HTMLVideoElement)var Q=K.videoWidth,ht=K.videoHeight;else typeof HTMLImageElement<"u"&&K instanceof HTMLImageElement?(Q=K.naturalWidth,ht=K.naturalHeight):(Q=K.width,ht=K.height);ht={glName:Y.m,width:Q,height:ht},Q=Y.h,Q.canvas.width=ht.width,Q.canvas.height=ht.height,Q.activeTexture(Q.TEXTURE0),Y.i.bindTexture2d(Y.m),Q.texImage2D(Q.TEXTURE_2D,0,Q.RGBA,Q.RGBA,Q.UNSIGNED_BYTE,K),Y.i.bindTexture2d(0),Y=ht;break t;case"detections":for(Y=d.s[O.stream],Y||(Y=new fl(d.i),d.s[O.stream]=Y),Y.data||(Y.data=new Y.h.DetectionListData),Y.data.reset(K.length),ht=0;ht<K.length;++ht){Q=K[ht];var ut=Y.data,St=ut.setBoundingBox,Mt=ht,Pt=Q.la,st=new Un;if(ee(st,1,Pt.ra),ee(st,2,Pt.sa),ee(st,3,Pt.height),ee(st,4,Pt.width),ee(st,5,Pt.rotation),te(st,6,Pt.pa),Pt=st.l(),St.call(ut,Mt,Pt),Q.ea)for(ut=0;ut<Q.ea.length;++ut){st=Q.ea[ut],St=Y.data,Mt=St.addNormalizedLandmark,Pt=ht,st=Object.assign({},st,{visibility:st.visibility?st.visibility:0});var Et=new Xe;ee(Et,1,st.x),ee(Et,2,st.y),ee(Et,3,st.z),st.visibility&&ee(Et,4,st.visibility),st=Et.l(),Mt.call(St,Pt,st)}if(Q.ba)for(ut=0;ut<Q.ba.length;++ut)St=Y.data,Mt=St.addClassification,Pt=ht,st=Q.ba[ut],Et=new Ye,ee(Et,2,st.score),st.index&&te(Et,1,st.index),st.label&&te(Et,3,st.label),st.displayName&&te(Et,4,st.displayName),st=Et.l(),Mt.call(St,Pt,st)}Y=Y.data;break t;default:Y={}}}switch(R=Y,M=O.stream,O.type){case"video":N.pushTexture2d(Object.assign({},R,{stream:M,timestamp:y}));break;case"detections":q=R,q.stream=M,q.timestamp=y,N.pushDetectionList(q);break;default:throw Error("Unknown input config type: '"+O.type+"'")}}return d.j.send(N),D(W,d.I,4);case 4:N.delete(),W.h=0}})};function Nl(u,h,d){var y,N,x,T,A,O,R,M,q,W,K,Y,Q,ht;return j(function(ut){switch(ut.h){case 1:if(!d)return ut.return(h);for(y={},N=0,x=o(Object.keys(d)),T=x.next();!T.done;T=x.next())A=T.value,O=d[A],typeof O!="string"&&O.type==="texture"&&h[O.stream]!==void 0&&++N;1<N&&(u.M=!1),R=o(Object.keys(d)),T=R.next();case 2:if(T.done){ut.h=4;break}if(M=T.value,q=d[M],typeof q=="string")return Q=y,ht=M,D(ut,Tl(u,M,h[q]),14);if(W=h[q.stream],q.type==="detection_list"){if(W){for(var St=W.getRectList(),Mt=W.getLandmarksList(),Pt=W.getClassificationsList(),st=[],Et=0;Et<St.size();++Et){var xe=hl(St.get(Et)),Sl=ne(xe,1),El=ne(xe,2),_l=ne(xe,3),$l=ne(xe,4),kl=ne(xe,5,0),Wn=void 0;Wn=Wn===void 0?0:Wn,xe={la:{ra:Sl,sa:El,height:_l,width:$l,rotation:kl,pa:Vn(Gt(xe,6),Wn)},ea:zn(ya(Mt.get(Et)),Xe,1).map(Na),ba:va(da(Pt.get(Et)))},st.push(xe)}St=st}else St=[];y[M]=St,ut.h=7;break}if(q.type==="proto_list"){if(W){for(St=Array(W.size()),Mt=0;Mt<W.size();Mt++)St[Mt]=W.get(Mt);W.delete()}else St=[];y[M]=St,ut.h=7;break}if(W===void 0){ut.h=3;break}if(q.type==="float_list"){y[M]=W,ut.h=7;break}if(q.type==="proto"){y[M]=W,ut.h=7;break}if(q.type!=="texture")throw Error("Unknown output config type: '"+q.type+"'");return K=u.v[M],K||(K=new Gr(u.i,u.K),u.v[M]=K),D(ut,xa(K,W,u.M),13);case 13:Y=ut.i,y[M]=Y;case 7:q.transform&&y[M]&&(y[M]=q.transform(y[M])),ut.h=3;break;case 14:Q[ht]=ut.i;case 3:T=R.next(),ut.h=2;break;case 4:return ut.return(y)}})}function Tl(u,h,d){var y;return j(function(N){return typeof d=="number"||d instanceof Uint8Array||d instanceof u.i.Uint8BlobList?N.return(d):d instanceof u.i.Texture2dDataOut?(y=u.v[h],y||(y=new Gr(u.i,u.K),u.v[h]=y),N.return(xa(y,d,u.M))):N.return(void 0)})}function xl(u,h){for(var d=h.name||"$",y=[].concat(l(h.wants)),N=new u.i.StringList,x=o(h.wants),T=x.next();!T.done;T=x.next())N.push_back(T.value);x=u.i.PacketListener.implement({onResults:function(A){for(var O={},R=0;R<h.wants.length;++R)O[y[R]]=A.get(R);var M=u.listeners[d];M&&(u.I=Nl(u,O,h.outs).then(function(q){q=M(q);for(var W=0;W<h.wants.length;++W){var K=O[y[W]];typeof K=="object"&&K.hasOwnProperty&&K.hasOwnProperty("delete")&&K.delete()}q&&(u.I=q)}))}}),u.j.attachMultiListener(N,x),N.delete()}n.onResults=function(u,h){this.listeners[h||"$"]=u},nt("Solution",qr),nt("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ea(u){return u===void 0&&(u=0),u===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function _a(u){var h=this;u=u||{},this.h=new qr({locateFile:u.locateFile,files:function(d){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Ea(d.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Ta},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Ta},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(d){return d.map(function(y){return va(da(y))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(d){var y,N,x;return j(function(T){return T.h==1?(y=Ea(d),N="third_party/mediapipe/modules/hand_landmark/"+y,D(T,Kn(h.h,y),2)):(x=T.i,h.h.overrideFile(N,x),T.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}n=_a.prototype,n.close=function(){return this.h.close(),Promise.resolve()},n.onResults=function(u){this.h.onResults(u)},n.initialize=function(){var u=this;return j(function(h){return D(h,u.h.initialize(),0)})},n.reset=function(){this.h.reset()},n.send=function(u){var h=this;return j(function(d){return D(d,h.h.send(u),0)})},n.setOptions=function(u){this.h.setOptions(u)},nt("Hands",_a),nt("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),nt("VERSION","0.4.1675469240")}).call(ae);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ol=1e-7,Dl=1e-4;class Cl{refCount(t){return zt("refCount")}incRef(t){return zt("incRef")}timerAvailable(){return!0}time(t){return zt("time")}read(t){return zt("read")}readSync(t){return zt("readSync")}readToGPU(t,e){return zt("readToGPU")}numDataIds(){return zt("numDataIds")}disposeData(t,e){return zt("disposeData")}write(t,e,r){return zt("write")}move(t,e,r,s,i){return zt("move")}memory(){return zt("memory")}floatPrecision(){return zt("floatPrecision")}epsilon(){return this.floatPrecision()===32?Ol:Dl}dispose(){return zt("dispose")}}function zt(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Wt(n,t,e=""){E($e(n,t),()=>e+` Shapes ${n} and ${t} must match`)}function on(n){E(n!=null,()=>"The input to the tensor constructor must be a non-null value.")}function dr(n,t=[],e=!1){if(t==null&&(t=[]),Array.isArray(n)||le(n)&&!e)for(let r=0;r<n.length;++r)dr(n[r],t,e);else t.push(n);return t}function Nt(n){if(n.length===0)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function $e(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function En(n){return n%1===0}function Yn(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function mr(n,t){const e=t.length;return n=n==null?t.map((r,s)=>s):[].concat(n),E(n.every(r=>r>=-e&&r<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`),E(n.every(r=>En(r)),()=>`All values in axis param must be integers but got axis ${n}`),n.map(r=>r<0?e+r:r)}function Fl(n,t){const e=[],r=[],s=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||s?null:mr(t,n).sort();let a=0;for(let o=0;o<n.length;++o){if(i!=null){if(i[a]===o&&n[o]!==1)throw new Error(`Can't squeeze axis ${o} since its dim '${n[o]}' is not 1`);(i[a]==null||i[a]>o)&&n[o]===1&&(e.push(n[o]),r.push(o)),i[a]<=o&&a++}n[o]!==1&&(e.push(n[o]),r.push(o))}return{newShape:e,keptDims:r}}function Ll(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${n}`);return e}function Pl(n,t){let e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else if(n==="string")e=new Array(t);else throw new Error(`Unknown data type ${n}`);return e}function Bl(n,t){for(let e=0;e<n.length;e++){const r=n[e];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Rl(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function le(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}function $a(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error(`Unknown dtype ${n}`)}function zl(n){if(n==null)return 0;let t=0;return n.forEach(e=>t+=e.length),t}function Ws(n){return typeof n=="string"||n instanceof String}function Vl(n){return typeof n=="boolean"}function jl(n){return typeof n=="number"}function Gs(n){return Array.isArray(n)?Gs(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":jl(n)?"float32":Ws(n)?"string":Vl(n)?"bool":"float32"}function ka(n){return!!(n&&n.constructor&&n.call&&n.apply)}function qs(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function ho(n,t,e,r=!1){const s=new Array;if(t.length===1){const i=t[0]*(r?2:1);for(let a=0;a<i;a++)s[a]=e[n+a]}else{const i=t[0],a=t.slice(1),o=a.reduce((l,c)=>l*c)*(r?2:1);for(let l=0;l<i;l++)s[l]=ho(n+l*o,a,e,r)}return s}function us(n,t,e=!1){if(n.length===0)return t[0];const r=n.reduce((s,i)=>s*i)*(e?2:1);if(r===0)return[];if(r!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return ho(0,n,t,e)}function po(n,t){const e=Ys(n,t);for(let r=0;r<e.length;r++)e[r]=1;return e}function Ys(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function fo(n){n.forEach(t=>{E(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`)})}function nn(n){return n&&n.then&&typeof n.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Aa="tfjsflags";class Ml{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Hl,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(rt().getBool("IS_TEST")||rt().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){const s=this.urlFlags[t];rt().getBool("IS_TEST")||rt().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${s}.`),this.set(t,s)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const e=this.evaluateFlag(t);if(nn(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);Aa in t&&t[Aa].split(",").forEach(r=>{const[s,i]=r.split(":");this.urlFlags[s]=Kl(s,i)})}}function Hl(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...r)=>(Ul(t,r[0],r[1]),r.join("="))),t}function Ul(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function Kl(n,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}function rt(){return mo}let mo=null;function Wl(n){mo=n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Yr;function go(){if(Yr==null){let n;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else if(typeof self<"u")n=self;else throw new Error("Could not find a global object");Yr=n}return Yr}function Gl(){const n=go();return n._tfGlobals==null&&(n._tfGlobals=new Map),n._tfGlobals}function Xs(n,t){const e=Gl();if(e.has(n))return e.get(n);{const r=t();return e.set(n,r),e.get(n)}}const ql="Abs",Yl="Acos",Xl="Acosh",yo="Add",Jl="AddN",Zl="All",Ql="Any",tc="ArgMax",ec="ArgMin",nc="Asin",rc="Asinh",sc="Atan",ic="Atanh",ac="Atan2",oc="AvgPool",uc="AvgPool3D",lc="BatchMatMul",cc="BatchToSpaceND",hc="Bincount",pc="BroadcastArgs",bo="Cast",fc="Ceil",dc="ClipByValue",mc="Complex",gc="ComplexAbs",yc="Concat",bc="Conv2D",wc="Conv2DBackpropFilter",vc="Conv2DBackpropInput",Nc="Conv3D",Tc="Conv3DBackpropInputV2",xc="Cos",Sc="Cosh",Ec="Cumprod",_c="Cumsum",$c="CropAndResize",kc="DenseBincount",Ac="DepthToSpace",Ic="DepthwiseConv2dNative",Oc="DepthwiseConv2dNativeBackpropFilter",Dc="DepthwiseConv2dNativeBackpropInput",Cc="Diag",Fc="Dilation2D",Lc="RealDiv",Pc="Einsum",Bc="Elu",Rc="Erf",zc="Equal",Vc="Exp",jc="ExpandDims",Mc="Expm1",Hc="FFT",Uc="Fill",Kc="FlipLeftRight",Wc="Floor",Gc="FloorDiv",qc="FusedBatchNorm",Yc="GatherV2",Xc="GatherNd",Jc="Greater",Zc="GreaterEqual",wo="Identity",Qc="IFFT",th="Imag",eh="IsFinite",nh="IsInf",rh="IsNan",sh="LeakyRelu",ih="Less",ah="LessEqual",oh="LinSpace",uh="Log",lh="Log1p",ch="LogicalAnd",hh="LogicalNot",ph="LogicalOr",fh="LRN",dh="Max",mh="Maximum",gh="MaxPool",yh="MaxPool3D",bh="MaxPoolWithArgmax",wh="Mean",vh="Min",Nh="Minimum",Th="MirrorPad",xh="Mod",Sh="Multinomial",Eh="Multiply",_h="Neg",$h="NotEqual",kh="NonMaxSuppressionV3",Ah="NonMaxSuppressionV4",Ih="NonMaxSuppressionV5",Oh="OnesLike",Dh="OneHot",Ch="Pack",Fh="PadV2",Lh="Pow",Ph="Prelu",Bh="Prod",Rh="RaggedGather",zh="RaggedTensorToTensor",Vh="Range",jh="Real",Mh="Reciprocal",Hh="Relu",Uh="Reshape",Kh="ResizeNearestNeighbor",Wh="ResizeBilinear",Gh="Relu6",qh="Reverse",Yh="Round",Xh="Rsqrt",Jh="ScatterNd",Zh="SearchSorted",Qh="Select",tp="Selu",ep="Slice",np="Sin",rp="Sinh",sp="Sign",ip="Sigmoid",ap="Softplus",op="Sqrt",up="Sum",lp="SpaceToBatchND",cp="SplitV",hp="Softmax",pp="SparseFillEmptyRows",fp="SparseReshape",dp="SparseSegmentMean",mp="SparseSegmentSum",gp="SparseToDense",yp="SquaredDifference",bp="StridedSlice",wp="StringNGrams",vp="StringSplit",Np="StringToHashBucketFast",Tp="Sub",xp="Tan",Sp="Tanh",vo="Tile",Ep="TopK",_p="Transform",Xr="Transpose",$p="Unique",kp="Unpack",Ap="UnsortedSegmentSum",Ip="ZerosLike",Op="Step",Ia="FromPixels",Dp="RotateWithOffset",Oa="_FusedMatMul",Da="FusedConv2D",Ca="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yn(...n){rt().getBool("IS_TEST")||rt().getBool("PROD")||console.warn(...n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const No=Xs("kernelRegistry",()=>new Map),Cp=Xs("gradRegistry",()=>new Map);function ls(n,t){const e=Fp(n,t);return No.get(e)}function Fa(n){return Cp.get(n)}function La(n){const t=No.entries(),e=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[i,a]=s,[o]=i.split("_");o===n&&e.push(a)}return e}function Fp(n,t){return`${t}_${n}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lp(n,t){return n instanceof Float32Array&&t==="float32"||n instanceof Int32Array&&t==="int32"||n instanceof Uint8Array&&t==="bool"}function To(n,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=dr(n)),rt().getBool("DEBUG")&&Bl(n,t),Lp(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){const e=new Uint8Array(n.length);for(let r=0;r<e.length;++r)Math.round(n[r])!==0&&(e[r]=1);return e}else throw new Error(`Unknown data type ${t}`)}function tr(){return rt().platform.now()}function Pp(n,t="utf-8"){return t=t||"utf-8",rt().platform.encode(n,t)}function Pa(n,t="utf-8"){return t=t||"utf-8",rt().platform.decode(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bp{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new zp)}profileKernel(t,e,r){let s;const i=()=>{s=r()};let a;const o=tr();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(i);else{i();for(const c of s)c.dataSync();a=Promise.resolve({kernelMs:tr()-o})}if(rt().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<s.length;c++){const p=s[c];p.data().then(f=>{Rp(f,p.dtype,t)})}return{kernelName:t,outputs:s,inputs:e,timeMs:a.then(c=>c.kernelMs),extraInfo:a.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:e,outputs:r,timeMs:s,inputs:i,extraInfo:a}=t;r.forEach(o=>{Promise.all([o.data(),s,a]).then(l=>{this.logger.logKernelProfile(e,o,l[0],l[1],i,l[2])})})}}function Rp(n,t,e){if(t!=="float32")return!1;for(let r=0;r<n.length;r++){const s=n[r];if(isNaN(s)||!isFinite(s))return console.warn(`Found ${s} in the result of '${e}'`),!0}return!1}class zp{logKernelProfile(t,e,r,s,i,a){const o=typeof s=="number"?Yn(`${s}ms`,9):s.error,l=Yn(t,25),c=e.rank,p=e.size,f=Yn(e.shape.toString(),14);let g="";for(const b in i){const v=i[b];if(v!=null){const S=v.shape||e.shape,_=S.length;g+=`${b}: ${_}D ${_>0?S:""} `}}console.log(`%c${l}	%c${o}	%c${c}D ${f}	%c${p}	%c${g}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(n,t,e){const r={},s={};for(let l=0;l<t.length;l++)r[t[l].id]=!0;for(let l=0;l<n.length;l++){const c=n[l],p=c.inputs;for(const f in p){const g=p[f];let b=!1;for(let v=0;v<t.length;v++)if(r[g.id]){c.outputs.forEach(S=>r[S.id]=!0),b=!0,s[c.id]=!0;break}if(b)break}}const i={};i[e.id]=!0;const a={};for(let l=n.length-1;l>=0;l--){const c=n[l],p=c.inputs;for(let f=0;f<c.outputs.length;f++)if(i[c.outputs[f].id]){for(const g in p)i[p[g].id]=!0,a[c.id]=!0;break}}const o=[];for(let l=0;l<n.length;l++){const c=n[l];if(s[c.id]&&a[c.id]){const p={};for(const g in c.inputs){const b=c.inputs[g];r[b.id]&&(p[g]=b)}const f=Object.assign({},c);f.inputs=p,f.outputs=c.outputs,o.push(f)}}return o}function jp(n,t,e,r){for(let s=t.length-1;s>=0;s--){const i=t[s],a=[];if(i.outputs.forEach(l=>{const c=n[l.id];c!=null?a.push(c):a.push(null)}),i.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${i.kernelName}.`);const o=i.gradient(a);for(const l in i.inputs){if(!(l in o))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(o)}.`);const c=e(()=>o[l]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);const p=i.inputs[l];if(!$e(c.shape,p.shape))throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${p.shape}'`);if(n[p.id]==null)n[p.id]=c;else{const f=n[p.id];n[p.id]=r(f,c),f.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ba=20,bn=3,Jr=7;function Mp(n,t,e,r){const s=qs(t),i=Hp(n,t,e,s),a=t.length,o=Xn(n,t,e,s,i),l=["Tensor"];return r&&(l.push(`  dtype: ${e}`),l.push(`  rank: ${a}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(o.map(c=>"    "+c).join(`
`)),l.join(`
`)}function Hp(n,t,e,r){const s=Nt(t),i=r[r.length-1],a=new Array(i).fill(0),o=t.length,l=e==="complex64"?Nn(n):n;if(o>1)for(let c=0;c<s/i;c++){const p=c*i;for(let f=0;f<i;f++)a[f]=Math.max(a[f],vn(l[p+f],0,e).length)}return a}function vn(n,t,e){let r;return Array.isArray(n)?r=`${parseFloat(n[0].toFixed(Jr))} + ${parseFloat(n[1].toFixed(Jr))}j`:Ws(n)?r=`'${n}'`:e==="bool"?r=xo(n):r=parseFloat(n.toFixed(Jr)).toString(),Yn(r,t)}function xo(n){return n===0?"false":"true"}function Xn(n,t,e,r,s,i=!0){const a=e==="complex64"?2:1,o=t[0],l=t.length;if(l===0){if(e==="complex64"){const S=Nn(n);return[vn(S[0],0,e)]}return e==="bool"?[xo(n[0])]:[n[0].toString()]}if(l===1){if(o>Ba){const _=bn*a;let k=Array.from(n.slice(0,_)),P=Array.from(n.slice((o-bn)*a,o*a));return e==="complex64"&&(k=Nn(k),P=Nn(P)),["["+k.map((L,D)=>vn(L,s[D],e)).join(", ")+", ..., "+P.map((L,D)=>vn(L,s[o-bn+D],e)).join(", ")+"]"]}return["["+(e==="complex64"?Nn(n):Array.from(n)).map((_,k)=>vn(_,s[k],e)).join(", ")+"]"]}const c=t.slice(1),p=r.slice(1),f=r[0]*a,g=[];if(o>Ba){for(let S=0;S<bn;S++){const _=S*f,k=_+f;g.push(...Xn(n.slice(_,k),c,e,p,s,!1))}g.push("...");for(let S=o-bn;S<o;S++){const _=S*f,k=_+f;g.push(...Xn(n.slice(_,k),c,e,p,s,S===o-1))}}else for(let S=0;S<o;S++){const _=S*f,k=_+f;g.push(...Xn(n.slice(_,k),c,e,p,s,S===o-1))}const b=l===2?",":"";g[0]="["+g[0]+b;for(let S=1;S<g.length-1;S++)g[S]=" "+g[S]+b;let v=`,
`;for(let S=2;S<l;S++)v+=`
`;return g[g.length-1]=" "+g[g.length-1]+"]"+(i?"":v),g}function Nn(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cs{constructor(t,e,r){if(this.dtype=e,this.shape=t.slice(),this.size=Nt(t),r!=null){const s=r.length;E(s===this.size,()=>`Length of values '${s}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||Pl(e,this.size),this.strides=qs(t)}set(t,...e){e.length===0&&(e=[0]),E(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);const r=this.locToIndex(e);this.values[r]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(const s of t){if(s<0||s>=this.shape[e]){const i=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(i)}e++}let r=t[t.length-1];for(let s=0;s<t.length-1;++s)r+=this.strides[s]*t[s];return this.values[r]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const e=new Array(this.shape.length);for(let r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Yt().makeTensor(this.values,this.shape,this.dtype)}}let Yt=null,Je=null;function Up(n){Yt=n}function Kp(n){Je=n}class yt{constructor(t,e,r,s){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Nt(t),this.strides=qs(t),this.dataId=r,this.id=s,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return Je.buffer(this.shape,this.dtype,t)}bufferSync(){return Je.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return us(this.shape,t,this.dtype==="complex64")}arraySync(){return us(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=Yt().read(this.dataId);if(this.dtype==="string"){const e=await t;try{return e.map(r=>Pa(r))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Yt().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=Yt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Pa(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await Yt().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(Yt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Je.print(this,t)}clone(){return this.throwIfDisposed(),Je.clone(this)}toString(t=!1){const e=this.dataSync();return Mp(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Je.cast(this,t)}variable(t=!0,e,r){return this.throwIfDisposed(),Yt().makeVariable(this,t,e,r)}}Object.defineProperty(yt,Symbol.hasInstance,{value:n=>!!n&&n.data!=null&&n.dataSync!=null&&n.throwIfDisposed!=null});function Wp(){return Xs("Tensor",()=>yt)}Wp();class hs extends yt{constructor(t,e,r,s){super(t.shape,t.dtype,t.dataId,s),this.trainable=e,this.name=r}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!$e(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Yt().disposeTensor(this),this.dataId=t.dataId,Yt().incRef(this,null)}dispose(){Yt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(hs,Symbol.hasInstance,{value:n=>n instanceof yt&&n.assign!=null&&n.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ra;(function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"})(Ra||(Ra={}));var ps;(function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"})(ps||(ps={}));var fs;(function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"})(fs||(fs={}));var ds;(function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"})(ds||(ds={}));var ms;(function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"})(ms||(ms={}));const Gp={float32:ds,int32:ps,bool:fs,complex64:ms};function qp(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return Gp[n][t]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ft(n,t){if(n.dtype===t.dtype)return[n,t];const e=qp(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Yp(n,t){E(n.dtype===t.dtype,()=>`The dtypes of the first(${n.dtype}) and second(${t.dtype}) input must match`)}function So(n){const t=[];return Eo(n,t,new Set),t}function Eo(n,t,e){if(n==null)return;if(n instanceof yt){t.push(n);return}if(!Xp(n))return;const r=n;for(const s in r){const i=r[s];e.has(i)||(e.add(i),Eo(i,t,e))}}function Xp(n){return Array.isArray(n)||typeof n=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zr(n){return n.kernelName!=null}class za{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class rn{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new za}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const r=t[e];if(await this.initializeBackend(r).success){await this.setBackend(r);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,r=1){return t in this.registryFactory?(yn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:r},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:e,asyncInit:r}=this.initializeBackend(t);if(!(r?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Bp(this.backendInstance),!0}setupRegisteredKernels(){La(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){La(t).forEach(r=>{r.disposeFunc!=null&&r.disposeFunc(this.registry[t])})}initializeBackend(t){const e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const r=e.factory();if(r&&!(r instanceof Cl)&&typeof r.then=="function"){const s=++this.pendingBackendInitId,i=r.then(a=>s<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,yn(`Initialization of backend ${t} failed`),yn(a.stack||a.message)),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}else return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(r){return yn(`Initialization of backend ${t} failed`),yn(r.stack||r.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let e=0;e<t.length;e++){const r=t[e],{success:s,asyncInit:i}=this.initializeBackend(r);if(i||s)return{name:r,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){const r=this.state.tensorInfo.get(e),s=r.backend,i=this.readSync(e),a=s.refCount(e);s.disposeData(e,!0),r.backend=t,t.move(e,i,r.shape,r.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let r=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=t}let s;return this.scopedRun(()=>this.startScope(r),()=>this.endScope(s),()=>(s=e(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,e,r){t();try{const s=r();return e(),s}catch(s){throw e(),s}}nextTensorId(){return rn.nextTensorId++}nextVariableId(){return rn.nextVariableId++}clone(t){const e=I.runKernel(wo,{x:t}),r={x:t},s=a=>({x:()=>{const o="float32",l={x:a},c={dtype:o};return I.runKernel(bo,l,c)}}),i=[];return this.addTapeNode(this.state.activeScope.name,r,[e],s,i,{}),e}runKernel(t,e,r){if(this.backendName==null&&this.backend,!(ls(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:r})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,r){const s=this.backend.numDataIds();let i=0;r.forEach(l=>{i+=l.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=s-e-i-a;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${t}'`)}runKernelFunc(t){let e,r=[];const s=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName==null&&this.backend;let l;const c=Zr(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Zr(t)){const{kernelName:v,inputs:S,attrs:_}=t;this.backendName==null&&this.backend;const k=ls(v,this.backendName);E(k!=null,()=>`Cannot find registered kernel '${v}' for backend '${this.backendName}'`),o=()=>{const P=this.backend.numDataIds();l=k.kernelFunc({inputs:S,attrs:_,backend:this.backend});const L=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(v,P,L);const D=L.map(C=>C.rank!=null?C:this.makeTensorFromTensorInfo(C));if(s){const C=this.getTensorsForGradient(v,S,D);r=this.saveTensorsForBackwardMode(C)}return D}}else{const{forwardFunc:v}=t,S=_=>{s&&(r=_.map(k=>this.keep(this.clone(k))))};o=()=>{const _=this.backend.numDataIds();l=this.tidy(()=>v(this.backend,S));const k=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,_,k),k}}const{inputs:p,attrs:f}=t,g=Zr(t)?null:t.backwardsFunc;let b;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=o():(b=this.profiler.profileKernel(c,p,()=>o()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(b),e=b.outputs)}),s&&this.addTapeNode(c,p,e,g,r,f),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(v=>p[v]!=null?p[v].shape:null),outputShapes:e.map(v=>v.shape),kernelTimeMs:b.timeMs,extraInfo:b.extraInfo}),Array.isArray(l)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(r=>this.keep(this.clone(r)))}getTensorsForGradient(t,e,r){const s=Fa(t);if(s!=null){const i=s.inputsToSave||[],a=s.outputsToSave||[];let o;s.saveAllInputs?(E(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),o=Object.keys(e).map(c=>e[c])):o=i.map(c=>e[c]);const l=r.filter((c,p)=>a[p]);return o.concat(l)}return[]}makeTensor(t,e,r,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",s=s||this.backend;let i=t;r==="string"&&Ws(t[0])&&(i=t.map(l=>Pp(l)));const a=s.write(i,e,r),o=new yt(e,r,a,this.nextTensorId());if(this.trackTensor(o,s),r==="string"){const l=this.state.tensorInfo.get(a),c=zl(i);this.state.numBytes+=c-l.bytes,l.bytes=c}return o}makeTensorFromDataId(t,e,r,s){r=r||"float32";const i={dataId:t,shape:e,dtype:r};return this.makeTensorFromTensorInfo(i,s)}makeTensorFromTensorInfo(t,e){const{dataId:r,shape:s,dtype:i}=t,a=new yt(s,i,r,this.nextTensorId());return this.trackTensor(a,e),a}makeVariable(t,e=!0,r,s){r=r||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));const i=new hs(t,e,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let r=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(r=t.size*$a(t.dtype)),this.state.numBytes+=r,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:r})),t instanceof hs||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const r=t.size*$a(t.dtype);this.state.numBytes-=r}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const e=this.state.numBytes,r=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r;for(const s of this.state.activeProfile.kernels)s.kernelTimeMs=await s.kernelTimeMs,s.extraInfo=await s.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,r,s,i,a){const o={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:i},l=Fa(t);l!=null&&(s=l.gradFunc),s!=null&&(o.gradient=c=>(c=c.map((p,f)=>{if(p==null){const g=r[f],b=Ys(g.size,g.dtype);return this.makeTensor(b,g.shape,g.dtype)}return p}),s(c.length>1?c:c[0],i,a))),this.state.activeTape.push(o)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){const e=So(t),r=new Set(e.map(i=>i.id));for(let i=0;i<this.state.activeScope.track.length;i++){const a=this.state.activeScope.track[i];!a.kept&&!r.has(a.id)&&a.dispose()}const s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(i=>{!i.kept&&i.scopeId===s.id&&this.track(i)})}gradients(t,e,r,s=!1){if(E(e.length>0,()=>"gradients() received an empty list of xs."),r!=null&&r.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${r.dtype}'`);const i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));E(i instanceof yt,()=>"The result y returned by f() must be a tensor.");const a=Vp(this.state.activeTape,e,i);if(!s&&a.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const o={};o[i.id]=r??Jp(i.shape),jp(o,a,c=>this.tidy(c),Zp);const l=e.map(c=>o[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(const p of c.saved)p.dispose()}),this.state.activeTape=null),{value:i,grads:l}})}customGrad(t){return E(ka(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{E(e.every(o=>o instanceof yt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r;const s={};e.forEach((o,l)=>{s[l]=o});const i=(o,l)=>(r=t(...e,l),E(r.value instanceof yt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),E(ka(r.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),r.value),a=(o,l)=>{const c=r.gradFunc(o,l),p=Array.isArray(c)?c:[c];E(p.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),E(p.every(g=>g instanceof yt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const f={};return p.forEach((g,b)=>{f[b]=()=>g}),f};return this.runKernelFunc({forwardFunc:i,backwardsFunc:a,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){const e=tr(),r=await this.backend.time(t);return r.wallMs=tr()-e,r}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new za;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}rn.nextTensorId=0;rn.nextVariableId=0;function Jp(n){const t=po(Nt(n),"float32");return I.makeTensor(t,n,"float32")}function _o(){const n=go();if(n._tfengine==null){const t=new Ml(n);n._tfengine=new rn(t)}return Wl(n._tfengine.ENV),Up(()=>n._tfengine),n._tfengine}const I=_o();function Zp(n,t){const e={a:n,b:t};return I.runKernel(yo,e)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qp(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rt=rt();Rt.registerFlag("DEBUG",()=>!1,n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Rt.registerFlag("IS_BROWSER",()=>Qp());Rt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Rt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Rt.registerFlag("PROD",()=>!1);Rt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Rt.getBool("DEBUG"));Rt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Rt.registerFlag("IS_TEST",()=>!1);Rt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);Rt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Rt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);Rt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Rt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ae(n,t){let e=n;if(le(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];const r=[];for(;Array.isArray(e)||le(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&rt().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&$o(n,r,[]),r}function $o(n,t,e){if(e=e||[],!Array.isArray(n)&&!le(n)){E(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}E(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`),E(n.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`);const r=t.slice(1);for(let s=0;s<n.length;++s)$o(n[s],r,e.concat(s))}function Va(n,t,e,r){if(n!=="string_or_numeric"){if(n==null)throw new Error("Expected dtype cannot be null.");if(n!=="numeric"&&n!==t||n==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${r}' must be ${n} tensor, but got ${t} tensor`)}}function w(n,t,e,r="numeric"){if(n instanceof yt)return Va(r,n.dtype,t,e),n;let s=Gs(n);if(s!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),Va(r,s,t,e),n==null||!le(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){const l=n==null?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${l}'`)}const i=Ae(n,s);!le(n)&&!Array.isArray(n)&&(n=[n]);const o=s!=="string"?To(n,s):dr(n,[],!0);return I.makeTensor(o,i,s)}function er(n,t,e,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map((i,a)=>w(i,`${t}[${a}]`,e,r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ko="__op";function $(n){const t=Object.keys(n);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+ko;const s=(...i)=>{I.startScope(e);try{const a=r(...i);return nn(a)&&console.error("Cannot return a Promise inside of tidy."),I.endScope(a),a}catch(a){throw I.endScope(null),a}};return Object.defineProperty(s,"name",{value:e,configurable:!0}),s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tf(n,t){const e=w(n,"real","complex"),r=w(t,"imag","complex");Wt(e.shape,r.shape,`real and imag shapes, ${e.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:e,imag:r};return I.runKernel(mc,s)}const ke=$({complex_:tf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ie(n,t,e,r){if(r==null&&(r=Gs(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!le(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){fo(t);const s=Nt(t),i=Nt(e);E(s===i,()=>`Based on the provided shape, [${t}], the tensor should have ${s} values but has ${i}`);for(let a=0;a<e.length;++a){const o=e[a],l=a===e.length-1?o!==Nt(t.slice(a)):!0;E(e[a]===t[a]||!l,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!le(n)&&!Array.isArray(n)&&(n=[n]),t=t||e,n=r!=="string"?To(n,r):dr(n,[],!0),I.makeTensor(n,t,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oe(n,t,e){const r=Ae(n,e);return Ie(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gs={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nr=4;async function ef(n,t){const e=[],r=[],s=Array.isArray(n)?n.map(a=>a.name):Object.keys(n);for(let a=0;a<s.length;++a){const o=s[a],l=Array.isArray(n)?n[a].tensor:n[o];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${o}': ${l.dtype}`);const c={name:o,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){const p=new Promise(async f=>{const g=await l.bytes(),b=g.reduce((_,k)=>_+k.length,0)+nr*g.length,v=new Uint8Array(b);let S=0;for(let _=0;_<g.length;_++){const k=g[_],P=new Uint8Array(new Uint32Array([k.length]).buffer);v.set(P,S),S+=nr,v.set(k,S),S+=k.length}f(v)});r.push(p)}else r.push(l.data());t!=null&&(c.group=t),e.push(c)}const i=await Promise.all(r);return{data:nf(i),specs:e}}function Ao(n,t){const e={};let r,s=0;for(const i of t){const a=i.name,o=i.dtype,l=i.shape,c=Nt(l);let p;if("quantization"in i){const f=i.quantization;if(f.dtype==="uint8"||f.dtype==="uint16"){if(!("min"in f&&"scale"in f))throw new Error(`Weight ${i.name} with quantization ${f.dtype} doesn't have corresponding metadata min and scale.`)}else if(f.dtype==="float16"){if(o!=="float32")throw new Error(`Weight ${i.name} is quantized with ${f.dtype} which only supports weights of type float32 not ${o}.`)}else throw new Error(`Weight ${i.name} has unknown quantization dtype ${f.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const g=gs[f.dtype],b=n.slice(s,s+c*g),v=f.dtype==="uint8"?new Uint8Array(b):new Uint16Array(b);if(o==="float32")if(f.dtype==="uint8"||f.dtype==="uint16"){p=new Float32Array(v.length);for(let S=0;S<v.length;S++){const _=v[S];p[S]=_*f.scale+f.min}}else if(f.dtype==="float16")r===void 0&&(r=lf()),p=r(v);else throw new Error(`Unsupported quantization type ${f.dtype} for weight type float32.`);else if(o==="int32"){if(f.dtype!=="uint8"&&f.dtype!=="uint16")throw new Error(`Unsupported quantization type ${f.dtype} for weight type int32.`);p=new Int32Array(v.length);for(let S=0;S<v.length;S++){const _=v[S];p[S]=Math.round(_*f.scale+f.min)}}else throw new Error(`Unsupported dtype in weight '${a}': ${o}`);s+=c*g}else if(o==="string"){const f=Nt(i.shape);p=[];for(let g=0;g<f;g++){const b=new Uint32Array(n.slice(s,s+nr))[0];s+=nr;const v=new Uint8Array(n.slice(s,s+b));p.push(v),s+=b}}else{const f=gs[o],g=n.slice(s,s+c*f);if(o==="float32")p=new Float32Array(g);else if(o==="int32")p=new Int32Array(g);else if(o==="bool")p=new Uint8Array(g);else if(o==="complex64"){p=new Float32Array(g);const b=new Float32Array(p.length/2),v=new Float32Array(p.length/2);for(let k=0;k<b.length;k++)b[k]=p[k*2],v[k]=p[k*2+1];const S=oe(b,l,"float32"),_=oe(v,l,"float32");e[a]=ke(S,_),S.dispose(),_.dispose()}else throw new Error(`Unsupported dtype in weight '${a}': ${o}`);s+=c*f}o!=="complex64"&&(e[a]=oe(p,l,o))}return e}function nf(n){if(n===null)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach(i=>{if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${i.constructor.name}`)});const r=new Uint8Array(t);let s=0;return e.forEach(i=>{r.set(new Uint8Array(i.buffer),s),s+=i.byteLength}),r.buffer}const Js=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function ja(n){return Js?Buffer.byteLength(n):new Blob([n]).size}function rf(n){if(Js)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let r=0,s=t.length;r<s;r++)e+=String.fromCharCode(t[r]);return btoa(e)}function sf(n){if(Js){const r=Buffer.from(n,"base64");return r.buffer.slice(r.byteOffset,r.byteOffset+r.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let r=0;r<t.length;++r)e.set([t.charCodeAt(r)],r);return e.buffer}function Zs(n){if(n.length===1)return n[0];let t=0;n.forEach(s=>{t+=s.byteLength});const e=new Uint8Array(t);let r=0;return n.forEach(s=>{e.set(new Uint8Array(s),r),r+=s.byteLength}),e.buffer}function Ma(n){const t="/";for(n=n.trim();n.endsWith(t);)n=n.slice(0,n.length-1);const e=n.split(t);return e[e.length-1]}function Io(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return n.signature!=null&&(e.signature=n.signature),n.userDefinedMetadata!=null&&(e.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(e.modelInitializer=n.modelInitializer),n.trainingConfig!=null&&(e.trainingConfig=n.trainingConfig),e}function Oo(n,t,e){const r={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(n.trainingConfig!=null&&(r.trainingConfig=n.trainingConfig),n.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=e}return n.signature!=null&&(r.signature=n.signature),n.userDefinedMetadata!=null&&(r.userDefinedMetadata=n.userDefinedMetadata),n.modelInitializer!=null&&(r.modelInitializer=n.modelInitializer),r}async function Qs(n,t){let e,r;return n.weightsManifest!=null&&([e,r]=await t(n.weightsManifest)),Oo(n,e,r)}function On(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:ja(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:ja(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}function Do(n){const t=[];for(const e of n)t.push(...e.weights);return t}function af(){const n=e=>{let r=e<<13,s=0;for(;!(r&8388608);)s-=8388608,r<<=1;return r&=-8388609,s+=947912704,r|s},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function of(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}function uf(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}function lf(){const n=af(),t=of(),e=uf();return r=>{const s=new ArrayBuffer(4*r.length),i=new Uint32Array(s);for(let a=0;a<r.length;a++){const o=r[a],l=n[e[o>>10]+(o&1023)]+t[o>>10];i[a]=l}return new Float32Array(s)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class pt{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return pt.instance==null&&(pt.instance=new pt),pt.instance}static registerSaveRouter(t){pt.getInstance().saveRouters.push(t)}static registerLoadRouter(t){pt.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return pt.getHandlers(t,"save")}static getLoadHandlers(t,e){return pt.getHandlers(t,"load",e)}static getHandlers(t,e,r){const s=[];return(e==="load"?pt.getInstance().loadRouters:pt.getInstance().saveRouters).forEach(a=>{const o=a(t,r);o!==null&&s.push(o)}),s}}const cf=n=>pt.registerSaveRouter(n),hf=n=>pt.registerLoadRouter(n),pf=n=>pt.getSaveHandlers(n),ff=(n,t)=>pt.getLoadHandlers(n,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ys="tensorflowjs",bs=1,Be="models_store",Se="model_info_store";function Co(){if(!rt().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n=typeof window>"u"?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function ws(n){const t=n.result;t.createObjectStore(Be,{keyPath:"modelPath"}),t.createObjectStore(Se,{keyPath:"modelPath"})}class je{constructor(t){if(this.indexedDB=Co(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((r,s)=>{const i=this.indexedDB.open(ys,bs);i.onupgradeneeded=()=>ws(i),i.onsuccess=()=>{const a=i.result;if(e==null){const o=a.transaction(Be,"readonly"),c=o.objectStore(Be).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return a.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));r(c.result.modelArtifacts)},c.onerror=p=>(a.close(),s(c.error)),o.oncomplete=()=>a.close()}else{const o=On(e),l=a.transaction(Se,"readwrite");let c=l.objectStore(Se);const p=c.put({modelPath:this.modelPath,modelArtifactsInfo:o});let f;p.onsuccess=()=>{f=a.transaction(Be,"readwrite");const b=f.objectStore(Be).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:o});b.onsuccess=()=>r({modelArtifactsInfo:o}),b.onerror=v=>{c=l.objectStore(Se);const S=c.delete(this.modelPath);S.onsuccess=()=>(a.close(),s(b.error)),S.onerror=_=>(a.close(),s(b.error))}},p.onerror=g=>(a.close(),s(p.error)),l.oncomplete=()=>{f==null?a.close():f.oncomplete=()=>a.close()}}},i.onerror=a=>s(i.error)})}}je.URL_SCHEME="indexeddb://";const Fo=n=>rt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(je.URL_SCHEME)?df(n.slice(je.URL_SCHEME.length)):null;pt.registerSaveRouter(Fo);pt.registerLoadRouter(Fo);function df(n){return new je(n)}function mf(n){return n.startsWith(je.URL_SCHEME)?n.slice(je.URL_SCHEME.length):n}class gf{constructor(){this.indexedDB=Co()}async listModels(){return new Promise((t,e)=>{const r=this.indexedDB.open(ys,bs);r.onupgradeneeded=()=>ws(r),r.onsuccess=()=>{const s=r.result,i=s.transaction(Se,"readonly"),o=i.objectStore(Se).getAll();o.onsuccess=()=>{const l={};for(const c of o.result)l[c.modelPath]=c.modelArtifactsInfo;t(l)},o.onerror=l=>(s.close(),e(o.error)),i.oncomplete=()=>s.close()},r.onerror=s=>e(r.error)})}async removeModel(t){return t=mf(t),new Promise((e,r)=>{const s=this.indexedDB.open(ys,bs);s.onupgradeneeded=()=>ws(s),s.onsuccess=()=>{const i=s.result,a=i.transaction(Se,"readwrite"),o=a.objectStore(Se),l=o.get(t);let c;l.onsuccess=()=>{if(l.result==null)return i.close(),r(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const p=o.delete(t),f=()=>{c=i.transaction(Be,"readwrite");const b=c.objectStore(Be).delete(t);b.onsuccess=()=>e(l.result.modelArtifactsInfo),b.onerror=v=>r(l.error)};p.onsuccess=f,p.onerror=g=>(f(),i.close(),r(l.error))}},l.onerror=p=>(i.close(),r(l.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}},s.onerror=i=>r(s.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const me="/",Ze="tensorflowjs_models",Lo="info",yf="model_topology",bf="weight_specs",wf="weight_data",vf="model_metadata";function Po(n){return{info:[Ze,n,Lo].join(me),topology:[Ze,n,yf].join(me),weightSpecs:[Ze,n,bf].join(me),weightData:[Ze,n,wf].join(me),modelMetadata:[Ze,n,vf].join(me)}}function Bo(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function Nf(n){const t=n.split(me);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(me)}function Tf(n){return n.startsWith(Me.URL_SCHEME)?n.slice(Me.URL_SCHEME.length):n}class Me{constructor(t){if(!rt().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Po(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=On(t);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,rf(t.weightData));const i={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(i)),{modelArtifactsInfo:s}}catch{throw Bo(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const e={},r=JSON.parse(this.LS.getItem(this.keys.topology));if(r==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=r;const s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=s;const i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){const o=JSON.parse(i);e.format=o.format,e.generatedBy=o.generatedBy,e.convertedBy=o.convertedBy,o.signature!=null&&(e.signature=o.signature),o.userDefinedMetadata!=null&&(e.userDefinedMetadata=o.userDefinedMetadata),o.modelInitializer!=null&&(e.modelInitializer=o.modelInitializer),o.trainingConfig!=null&&(e.trainingConfig=o.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=sf(a),e}}Me.URL_SCHEME="localstorage://";const Ro=n=>rt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Me.URL_SCHEME)?xf(n.slice(Me.URL_SCHEME.length)):null;pt.registerSaveRouter(Ro);pt.registerLoadRouter(Ro);function xf(n){return new Me(n)}class Sf{constructor(){E(rt().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),E(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},e=Ze+me,r=me+Lo;for(let s=0;s<this.LS.length;++s){const i=this.LS.key(s);if(i.startsWith(e)&&i.endsWith(r)){const a=Nf(i);t[a]=JSON.parse(this.LS.getItem(i))}}return t}async removeModel(t){t=Tf(t);const e=Po(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(e.info));return Bo(e),r}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tn="://";class kt{constructor(){this.managers={}}static getInstance(){return kt.instance==null&&(kt.instance=new kt),kt.instance}static registerManager(t,e){E(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(tn)&&(t=t.slice(0,t.indexOf(tn))),E(t.length>0,()=>"scheme must not be an empty string.");const r=kt.getInstance();E(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=e}static getManager(t){const e=kt.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(kt.getInstance().managers)}}function Jn(n){if(n.indexOf(tn)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${kt.getSchemes().join(",")}`);return{scheme:n.split(tn)[0],path:n.split(tn)[1]}}async function zo(n,t,e=!1){E(n!==t,()=>`Old path and new path are the same: '${n}'`);const r=pt.getLoadHandlers(n);E(r.length>0,()=>`Copying failed because no load handler is found for source URL ${n}.`),E(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${n}.`);const s=r[0],i=pt.getSaveHandlers(t);E(i.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),E(i.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);const a=i[0],o=Jn(n).scheme,l=Jn(n).path,c=o===Jn(n).scheme,p=await s.load();e&&c&&await kt.getManager(o).removeModel(l);const f=await a.save(p);return e&&!c&&await kt.getManager(o).removeModel(l),f.modelArtifactsInfo}async function Ef(){const n=kt.getSchemes(),t={};for(const e of n){const r=await kt.getManager(e).listModels();for(const s in r){const i=e+tn+s;t[i]=r[s]}}return t}async function _f(n){const t=Jn(n);return kt.getManager(t.scheme).removeModel(t.path)}async function $f(n,t){return zo(n,t,!1)}async function kf(n,t){return zo(n,t,!0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Af{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(!window||!rt().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",r=>{if(r.source===window&&r.data.name===this.messageName){r.stopPropagation();const s=this.functionRefs[r.data.index];s(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}}if(rt().get("IS_BROWSER")){rt().setPlatform("browser",new Af);try{kt.registerManager(Me.URL_SCHEME,new Sf)}catch{}try{kt.registerManager(je.URL_SCHEME,new gf)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const If={importFetch:()=>require("node-fetch")};let Qr;class Of{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return rt().global.fetch!=null?rt().global.fetch(t,e):(Qr==null&&(Qr=If.importFetch()),Qr(t,e))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}}rt().get("IS_NODE")&&!rt().get("IS_BROWSER")&&rt().setPlatform("node",new Of);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ye(n,t="float32",e){return t=t||"float32",fo(n),new cs(n,t,e)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Df(n,t){const e=w(n,"x","cast");if(!Rl(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");const r={x:e},s={dtype:t};return I.runKernel(bo,r,s)}const dt=$({cast_:Df});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cf(n){const e={x:w(n,"x","clone","string_or_numeric")};return I.runKernel(wo,e)}const _e=$({clone_:Cf});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vo(n,t=!1){console.log(n.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */_o();const Ff={buffer:ye,cast:dt,clone:_e,print:Vo};Kp(Ff);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lf="model",Pf=".json",Bf=".weights.bin";function Ha(n){return new Promise(t=>setTimeout(t)).then(n)}class He{constructor(t){if(!rt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(He.URL_SCHEME)&&(t=t.slice(He.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Lf),this.modelJsonFileName=t+Pf,this.weightDataFileName=t+Bf}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],s=Io(t,r),i=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=i,await Ha(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const o=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;o.download=this.weightDataFileName,o.href=e,await Ha(()=>o.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:On(t)}}}}He.URL_SCHEME="downloads://";class Rf{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,e)=>{const r=new FileReader;r.onload=s=>{const i=JSON.parse(s.target.result),a=i.modelTopology;if(a==null){e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(i.weightsManifest==null){e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:a});return}const l=Qs(i,c=>this.loadWeights(c));t(l)},r.onerror=s=>e(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),r.readAsText(this.jsonFile)})}loadWeights(t){const e=[],r=[];for(const a of t)e.push(...a.weights),r.push(...a.paths);const s=this.checkManifestAndWeightFiles(t),i=r.map(a=>this.loadWeightsFile(a,s[a]));return Promise.all(i).then(a=>[e,Zs(a)])}loadWeightsFile(t,e){return new Promise((r,s)=>{const i=new FileReader;i.onload=a=>{const o=a.target.result;r(o)},i.onerror=a=>s(`Failed to weights data from file of path '${t}'.`),i.readAsArrayBuffer(e)})}checkManifestAndWeightFiles(t){const e=[],r=this.weightsFiles.map(i=>Ma(i.name)),s={};for(const i of t)i.paths.forEach(a=>{const o=Ma(a);if(e.indexOf(o)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);if(e.push(o),r.indexOf(o)===-1)throw new Error(`Weight file with basename '${o}' is not provided.`);s[a]=this.weightsFiles[r.indexOf(o)]});if(e.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return s}}const zf=n=>rt().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(He.URL_SCHEME)?Vf(n.slice(He.URL_SCHEME.length)):null;pt.registerSaveRouter(zf);function Vf(n="model"){return new He(n)}function jf(n){return new Rf(n)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ua(n,t,e,r){a(n),e=e??0,r=r??1,o(e,r);let s=0;const i=l=>(l.then(c=>{const p=e+ ++s/n.length*(r-e);return t(p),c}),l);function a(l){E(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function o(l,c){E(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),E(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),E(c>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${c}`)}return Promise.all(n.map(i))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function jo(n,t){t==null&&(t={});const e=t.fetchFunc==null?rt().platform.fetch:t.fetchFunc,r=n.map(f=>e(f,t.requestInit,{isBinary:!0})),s=0,i=.5,o=(t.onProgress==null?await Promise.all(r):await Ua(r,t.onProgress,s,i)).map(f=>f.arrayBuffer()),l=.5,c=1;return t.onProgress==null?await Promise.all(o):await Ua(o,t.onProgress,l,c)}async function Mf(n,t="",e,r){return Mo(a=>jo(a,{requestInit:r}))(n,t,e)}function Mo(n){return async(t,e="",r)=>{const s=t.map(()=>!1),i={},a=r!=null?r.map(()=>!1):[],o=[];if(t.forEach((b,v)=>{let S=0;b.weights.forEach(_=>{const k="quantization"in _?_.quantization.dtype:_.dtype,P=gs[k]*Nt(_.shape),L=()=>{s[v]=!0,i[v]==null&&(i[v]=[]),i[v].push({manifestEntry:_,groupOffset:S,sizeBytes:P})};r!=null?r.forEach((D,C)=>{D===_.name&&(L(),a[C]=!0)}):L(),o.push(_.name),S+=P})}),!a.every(b=>b)){const b=r.filter((v,S)=>!a[S]);throw new Error(`Could not find weights in manifest with names: ${b.join(", ")}. 
Manifest JSON has weights with names: ${o.join(", ")}.`)}const l=s.reduce((b,v,S)=>(v&&b.push(S),b),[]),c=[];l.forEach(b=>{t[b].paths.forEach(v=>{const S=e+(e.endsWith("/")?"":"/")+v;c.push(S)})});const p=await n(c),f={};let g=0;return l.forEach(b=>{const v=t[b].paths.length;let S=0;for(let D=0;D<v;D++)S+=p[g+D].byteLength;const _=new ArrayBuffer(S),k=new Uint8Array(_);let P=0;for(let D=0;D<v;D++){const C=new Uint8Array(p[g+D]);k.set(C,P),P+=C.byteLength}i[b].forEach(D=>{const C=_.slice(D.groupOffset,D.groupOffset+D.sizeBytes),B=Ao(C,[D.manifestEntry]);for(const H in B)f[H]=B[H]}),g+=v}),f}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hf="application/octet-stream",Uf="application/json";class ti{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=rt().platform.fetch,E(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&E(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=Io(t,r);e.body.append("model.json",new Blob([JSON.stringify(s)],{type:Uf}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:Hf}),"model.weights.bin");const i=await this.fetch(this.path,e);if(i.ok)return{modelArtifactsInfo:On(t),responses:[i]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${i.status}.`)}async load(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}const r=e.modelTopology,s=e.weightsManifest;if(r==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Qs(e,i=>this.loadWeights(i))}async loadWeights(t){const e=Array.isArray(this.path)?this.path[1]:this.path,[r,s]=Kf(e),i=this.weightPathPrefix||r,a=Do(t),o=[],l=[];for(const p of t)for(const f of p.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(f)):o.push(i+f+s);this.weightUrlConverter&&o.push(...await Promise.all(l));const c=await jo(o,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[a,Zs(c)]}}ti.URL_SCHEME_REGEX=/^https?:\/\//;function Kf(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),r=n.substring(0,t),s=e>t?n.substring(e):"";return[r+"/",s]}function vs(n){return n.match(ti.URL_SCHEME_REGEX)!=null}const Ho=(n,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(n)?e=n.every(r=>vs(r)):e=vs(n),e)return ei(n,t)}return null};pt.registerSaveRouter(Ho);pt.registerLoadRouter(Ho);function ei(n,t){return new ti(n,t)}function Wf(n,t){return ei(n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ts{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class Uo{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class Gf{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=e=>Promise.resolve(t.save(e)))}}function qf(n,t,e,r){const s=arguments;return new Gf(Ko(...s))}function Ko(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new ts(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ts({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ts({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))}function Yf(n){return new Uo(n)}function Xf(n){return new Uo(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wo=Object.freeze(Object.defineProperty({__proto__:null,browserFiles:jf,browserHTTPRequest:Wf,concatenateArrayBuffers:Zs,copyModel:$f,decodeWeights:Ao,encodeWeights:ef,fromMemory:qf,fromMemorySync:Ko,getLoadHandlers:ff,getModelArtifactsForJSON:Qs,getModelArtifactsForJSONSync:Oo,getModelArtifactsInfoForJSON:On,getSaveHandlers:pf,getWeightSpecs:Do,http:ei,isHTTPScheme:vs,listModels:Ef,loadWeights:Mf,moveModel:kf,registerLoadRouter:hf,registerSaveRouter:cf,removeModel:_f,weightsLoaderFactory:Mo,withSaveHandler:Yf,withSaveHandlerSync:Xf},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jf(n,t,e=!1,r=!1){let s=w(n,"a","matMul"),i=w(t,"b","matMul");[s,i]=ft(s,i);const a={a:s,b:i},o={transposeA:e,transposeB:r};return I.runKernel(lc,a,o)}const at=$({matMul_:Jf});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(n,t,e=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:w(n,"indices","oneHot","int32")},o={dtype:s,depth:t,onValue:e,offValue:r};return I.runKernel(Dh,a,o)}const Qf=$({oneHot_:Zf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tt(n,t){return I.tidy(n,t)}function se(n){So(n).forEach(e=>e.dispose())}function Ee(n){return I.keep(n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function td(n){const e={input:w(n,"input","imag")};return I.runKernel(th,e)}const gr=$({imag_:td});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ed(n){const e={x:w(n,"x","neg")};return I.runKernel(_h,e)}const ge=$({neg_:ed});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nd(n){const e={input:w(n,"input","real")};return I.runKernel(jh,e)}const _n=$({real_:nd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rd(n,t,e){const r=w(n,"x","transpose");if(t==null&&(t=r.shape.map((a,o)=>o).reverse()),E(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(a=>{E(a>=0&&a<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();const s={x:r},i={perm:t};return r.dtype==="complex64"?Tt(()=>{let a=_n(r),o=gr(r);return a=I.runKernel(Xr,{x:a},i),o=I.runKernel(Xr,{x:o},i),e&&(o=ge(o)),ke(a,o)}):I.runKernel(Xr,s,i)}const Ns=$({transpose_:rd});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sd(n,t){const e=[];for(let r=0;r<t.length;r++){const s=n[n.length-r-1],i=t.length-r-1,a=t[i];(s==null||s===1&&a>1)&&e.unshift(i)}return e}function wt(n,t){const e=[],r=Math.max(n.length,t.length);for(let s=0;s<r;s++){let i=n[n.length-s-1];i==null&&(i=1);let a=t[t.length-s-1];if(a==null&&(a=1),i===1)e.unshift(a);else if(a===1)e.unshift(i);else if(i!==a){const o=`Operands could not be broadcast together with shapes ${n} and ${t}.`;throw Error(o)}else e.unshift(i)}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Go(n,t,e){if(on(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const r=Ae(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ie(n,t,r,e)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Pe;function id(n,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,r=!1,s=!1,i=!1,a=!1,o=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)s=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)i=!0;else if(n.getContext!=null)a=!0;else if(typeof ImageBitmap<"u"&&n instanceof ImageBitmap)o=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);if(ls(Ia,I.backendName)!=null){const v={pixels:n},S={numChannels:t};return I.runKernel(Ia,v,S)}const[c,p]=s?[n.videoWidth,n.videoHeight]:[n.width,n.height];let f;if(a)f=n.getContext("2d").getImageData(0,0,c,p).data;else if(r||e)f=n.data;else if(i||s||o){if(Pe==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Pe=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Pe=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Pe.canvas.width=c,Pe.canvas.height=p,Pe.drawImage(n,0,0,c,p),f=Pe.getImageData(0,0,c,p).data}let g;if(t===4)g=new Int32Array(f);else{const v=c*p;g=new Int32Array(v*t);for(let S=0;S<v;S++)for(let _=0;_<t;++_)g[S*t+_]=f[S*4+_]}return Go(g,[p,c,t],"int32")}async function ad(n,t){let e=w(n,"img","toPixels");if(!(n instanceof yt)){const c=e;e=dt(c,"int32"),c.dispose()}if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[r,s]=e.shape.slice(0,2),i=e.rank===2?1:e.shape[2];if(i>4||i===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${i}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const a=await e.data(),o=e.dtype==="float32"?255:1,l=new Uint8ClampedArray(s*r*4);for(let c=0;c<r*s;++c){const p=[0,0,0,255];for(let g=0;g<i;g++){const b=a[c*i+g];if(e.dtype==="float32"){if(b<0||b>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${b}.`)}else if(e.dtype==="int32"&&(b<0||b>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${b}.`);i===1?(p[0]=b*o,p[1]=b*o,p[2]=b*o):p[g]=b*o}const f=c*4;l[f+0]=Math.round(p[0]),l[f+1]=Math.round(p[1]),l[f+2]=Math.round(p[2]),l[f+3]=Math.round(p[3])}if(t!=null){t.width=s,t.height=r;const c=t.getContext("2d"),p=new ImageData(l,s,r);c.putImageData(p,0,0)}return e!==n&&e.dispose(),l}const od=$({fromPixels_:id});function ud(n,t,e){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,i=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${s}.`;if(e.rank<s)throw new Error(i+` update.rank < ${s}. `);if(n.length<r+(e.rank-s))throw new Error(i+` Output shape length < ${r+(e.rank-s)}`);if(e.rank!==s+n.length-r)throw new Error(i+` update.rank != ${s+n.length-r}`);for(let a=0;a<s;++a)if(e.shape[a]!==t.shape[a])throw new Error(i+` updates.shape[${a}] (${e.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<e.rank-s;++a)if(e.shape[a+s]!==n[a+r])throw new Error(i+` updates.shape[${a+s}] (${e.shape[a+s]}) != shape[${a+s}] (${n[a+s]})`)}function ld(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(n.size===0)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}ud(e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(n,t){let e=w(n,"a","add"),r=w(t,"b","add");[e,r]=ft(e,r);const s={a:e,b:r};return I.runKernel(yo,s)}const lt=$({add_:cd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hd(n,t){let e=w(n,"a","floorDiv"),r=w(t,"b","floorDiv");[e,r]=ft(e,r);const s={a:e,b:r};return I.runKernel(Gc,s)}const qo=$({floorDiv_:hd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(n,t){let e=w(n,"a","div"),r=w(t,"b","div");if([e,r]=ft(e,r),e.dtype==="int32"&&r.dtype==="int32")return qo(e,r);const s={a:e,b:r},i={};return I.runKernel(Lc,s,i)}const ot=$({div_:pd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fd(n,t){let e=w(n,"a","mul"),r=w(t,"b","mul");[e,r]=ft(e,r);const s={a:e,b:r};return I.runKernel(Eh,s)}const G=$({mul_:fd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(n){const t=w(n,"x","abs");if(t.dtype==="complex64"){const e={x:t};return I.runKernel(gc,e)}else{const e={x:t};return I.runKernel(ql,e)}}const Ut=$({abs_:dd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function md(n){const e={x:w(n,"x","acos")};return I.runKernel(Yl,e)}const gd=$({acos_:md});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(n){const e={x:w(n,"x","acosh")};return I.runKernel(Xl,e)}const bd=$({acosh_:yd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wd(n){E(Array.isArray(n),()=>"The argument passed to tf.addN() must be a list of tensors"),E(n.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`);const t=n.map((s,i)=>w(s,`tensors${i}`,"addN")),e=t[0];t.forEach(s=>{if(s.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(s=>{if(!$e(s.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const r=t;return I.runKernel(Jl,r)}const vd=$({addN_:wd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(n,t=null,e=!1){const s={x:w(n,"x","all","bool")},i={axis:t,keepDims:e};return I.runKernel(Zl,s,i)}const Td=$({all_:Nd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xd(n,t=null,e=!1){const s={x:w(n,"x","any","bool")},i={axis:t,keepDims:e};return I.runKernel(Ql,s,i)}const Sd=$({any_:xd});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ed(n,t=0){const r={x:w(n,"x","argMax")},s={axis:t};return I.runKernel(tc,r,s)}const _d=$({argMax_:Ed});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $d(n,t=0){const r={x:w(n,"x","argMin")},s={axis:t};return I.runKernel(ec,r,s)}const kd=$({argMin_:$d});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ad(n){const e={x:w(n,"x","asin")};return I.runKernel(nc,e)}const Id=$({asin_:Ad});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Od(n){const e={x:w(n,"x","asinh")};return I.runKernel(rc,e)}const Dd=$({asinh_:Od});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cd(n){const e={x:w(n,"x","atan")};return I.runKernel(sc,e)}const Fd=$({atan_:Cd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ld(n,t){let e=w(n,"a","atan2"),r=w(t,"b","atan2");[e,r]=ft(e,r);const s={a:e,b:r};return I.runKernel(ac,s)}const Pd=$({atan2_:Ld});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bd(n){const e={x:w(n,"x","atanh")};return I.runKernel(ic,e)}const Rd=$({atanh_:Bd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zd(n,t,e,r,s,i,a="channelsLast"){const[o,l]=rr(t);let c;if(a==="channelsLast")c=[o,l,n[3],n[3]];else if(a==="channelsFirst")c=[o,l,n[1],n[1]];else throw new Error(`Unknown dataFormat ${a}`);return ni(n,c,e,r,s,i,!1,a)}function ni(n,t,e,r,s,i,a=!1,o="channelsLast"){let[l,c,p,f]=[-1,-1,-1,-1];if(o==="channelsLast")[l,c,p,f]=n;else if(o==="channelsFirst")[l,f,c,p]=n;else throw new Error(`Unknown dataFormat ${o}`);const[g,b,,v]=t,[S,_]=rr(e),[k,P]=rr(r),L=Ts(g,k),D=Ts(b,P),{padInfo:C,outHeight:B,outWidth:H}=Md(s,c,p,S,_,L,D,i,o),V=a?v*f:v;let z;return o==="channelsFirst"?z=[l,V,B,H]:o==="channelsLast"&&(z=[l,B,H,V]),{batchSize:l,dataFormat:o,inHeight:c,inWidth:p,inChannels:f,outHeight:B,outWidth:H,outChannels:V,padInfo:C,strideHeight:S,strideWidth:_,filterHeight:g,filterWidth:b,effectiveFilterHeight:L,effectiveFilterWidth:D,dilationHeight:k,dilationWidth:P,inShape:n,outShape:z,filterShape:t}}function Vd(n,t,e,r,s){r==null&&(r=jd(n,t,e));const i=n[0],a=n[1],o=sr((i-t+2*r)/e+1,s),l=sr((a-t+2*r)/e+1,s);return[o,l]}function jd(n,t,e,r=1){const s=Ts(t,r);return Math.floor((n[0]*(e-1)-e+s)/2)}function rr(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function Ts(n,t){return t<=1?n:n+(n-1)*(t-1)}function Md(n,t,e,r,s,i,a,o,l){let c,p,f;if(typeof n=="number"){c={top:n,bottom:n,left:n,right:n,type:n===0?"VALID":"NUMBER"};const b=Vd([t,e],i,r,n,o);p=b[0],f=b[1]}else if(n==="same"){p=Math.ceil(t/r),f=Math.ceil(e/s);const g=Math.max(0,(p-1)*r+i-t),b=Math.max(0,(f-1)*s+a-e),v=Math.floor(g/2),S=g-v,_=Math.floor(b/2),k=b-_;c={top:v,bottom:S,left:_,right:k,type:"SAME"}}else if(n==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((t-i+1)/r),f=Math.ceil((e-a+1)/s);else if(typeof n=="object"){const g=l==="channelsLast"?n[1][0]:n[2][0],b=l==="channelsLast"?n[1][1]:n[2][1],v=l==="channelsLast"?n[2][0]:n[3][0],S=l==="channelsLast"?n[2][1]:n[3][1];c={top:g,bottom:b,left:v,right:S,type:g===0&&b===0&&v===0&&S===0?"VALID":"EXPLICIT"},p=sr((t-i+g+b)/r+1,o),f=sr((e-a+v+S)/s+1,o)}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:c,outHeight:p,outWidth:f}}function sr(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function ir(n){const[t,e,r]=rr(n);return t===1&&e===1&&r===1}function Oe(n,t){return ir(n)||ir(t)}function Zt(n,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")E(En(t),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(r=>{r.forEach(s=>{E(En(s),()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${s}.`)})});else throw Error(`Error in ${n}: Unknown padding parameter: ${t}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hd(n,t){const r={x:w(n,"x","reshape","string_or_numeric")},s={shape:t};return I.runKernel(Uh,r,s)}const F=$({reshape_:Hd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ud(n,t,e,r,s){const i=w(n,"x","avgPool","float32"),a=1;E(Oe(e,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`);let o=i,l=!1;i.rank===3&&(l=!0,o=F(i,[1,i.shape[0],i.shape[1],i.shape[2]])),E(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),Zt("avgPool",r,s);const c={x:o},p={filterSize:t,strides:e,pad:r,dimRoundingMode:s};let f=I.runKernel(oc,c,p);return f=dt(f,i.dtype),l?F(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const Yo=$({avgPool_:Ud});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kd(n,t,e,r,s,i="NDHWC"){const a=w(n,"x","avgPool3d","float32");let o=a,l=!1;a.rank===4&&(l=!0,o=F(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),E(o.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${o.rank}.`),E(i==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),Zt("avgPool3d",r,s);const c={x:o},p={filterSize:t,strides:e,pad:r,dimRoundingMode:s,dataFormat:i};let f=I.runKernel(uc,c,p);return f=dt(f,o.dtype),l?F(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const Wd=$({avgPool3d_:Kd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(n,t=0){E(n.length>=1,()=>"Pass at least one tensor to concat");const e=er(n,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(i=>{if(i.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${i.dtype}. `)}),e.length===1)return _e(e[0]);const r=e,s={axis:t};return I.runKernel(yc,r,s)}const xt=$({concat_:Gd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qd(n){const e={x:w(n,"x","sigmoid","float32")};return I.runKernel(ip,e)}const ze=$({sigmoid_:qd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yd(n,t,e){const r=w(n,"x","slice","string_or_numeric");if(r.rank===0)throw new Error("Slicing scalar is not possible");const s={x:r},i={begin:t,size:e};return I.runKernel(ep,s,i)}const J=$({slice_:Yd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(n){const e={x:w(n,"x","tanh","float32")};return I.runKernel(Sp,e)}const xs=$({tanh_:Xd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jd(n,t,e,r,s,i){const a=w(n,"forgetBias","basicLSTMCell"),o=w(t,"lstmKernel","basicLSTMCell"),l=w(e,"lstmBias","basicLSTMCell"),c=w(r,"data","basicLSTMCell"),p=w(s,"c","basicLSTMCell"),f=w(i,"h","basicLSTMCell"),g=xt([c,f],1),b=at(g,o),v=lt(b,l),S=v.shape[0],_=v.shape[1]/4,k=[S,_],P=J(v,[0,0],k),L=J(v,[0,_],k),D=J(v,[0,_*2],k),C=J(v,[0,_*3],k),B=lt(G(ze(P),xs(L)),G(p,ze(lt(a,D)))),H=G(xs(B),ze(C));return[B,H]}const Zd=$({basicLSTMCell_:Jd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qd(n,t,e){const r=w(n,"x","batchToSpaceND"),s=t.reduce((o,l)=>o*l);E(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),E(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),E(r.shape[0]%s===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`);const i={x:r},a={blockShape:t,crops:e};return I.runKernel(cc,i,a)}const Xo=$({batchToSpaceND_:Qd});function tm(n){let t;return n.rank===0||n.rank===1?t=F(n,[1,1,1,n.size]):n.rank===2?t=F(n,[1,1,n.shape[0],n.shape[1]]):n.rank===3?t=F(n,[1,n.shape[0],n.shape[1],n.shape[2]]):t=n,t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function em(n,t,e,r,s,i){i==null&&(i=.001);const a=w(n,"x","batchNorm"),o=w(t,"mean","batchNorm"),l=w(e,"variance","batchNorm");let c;s!=null&&(c=w(s,"scale","batchNorm"));let p;r!=null&&(p=w(r,"offset","batchNorm")),E(o.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),E(p==null||o.rank===p.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),E(c==null||o.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const g={x:tm(a),scale:c,offset:p,mean:o,variance:l},b={varianceEpsilon:i},v=I.runKernel(qc,g,b);return F(v,a.shape)}const yr=$({batchNorm_:em});function nm(n,t,e,r,s,i){const a=w(n,"x","batchNorm"),o=w(t,"mean","batchNorm"),l=w(e,"variance","batchNorm");let c;s!=null&&(c=w(s,"scale","batchNorm"));let p;return r!=null&&(p=w(r,"offset","batchNorm")),E(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),E(o.rank===2||o.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${o.rank}.`),E(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&E(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),p!=null&&E(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),yr(a,o,l,p,c,i)}const rm=$({batchNorm2d_:nm});function sm(n,t,e,r,s,i){const a=w(n,"x","batchNorm"),o=w(t,"mean","batchNorm"),l=w(e,"variance","batchNorm");let c;s!=null&&(c=w(s,"scale","batchNorm"));let p;return r!=null&&(p=w(r,"offset","batchNorm")),E(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),E(o.rank===3||o.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${o.rank}.`),E(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&E(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),p!=null&&E(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),yr(a,o,l,p,c,i)}const im=$({batchNorm3d_:sm});function am(n,t,e,r,s,i){const a=w(n,"x","batchNorm"),o=w(t,"mean","batchNorm"),l=w(e,"variance","batchNorm");let c;s!=null&&(c=w(s,"scale","batchNorm"));let p;return r!=null&&(p=w(r,"offset","batchNorm")),E(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),E(o.rank===4||o.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${o.rank}.`),E(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&E(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),p!=null&&E(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),yr(a,o,l,p,c,i)}const om=$({batchNorm4d_:am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function um(n,t,e){const r=w(n,"x","bincount"),s=w(t,"weights","bincount");E(r.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),E(e>=0,()=>`size must be non-negative, but got ${e}.`),E(s.size===r.size||s.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`);const i={x:r,weights:s},a={size:e};return I.runKernel(hc,i,a)}const Jo=$({bincount_:um});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lm(n,t){const e=w(n,"s0","broadcastArgs","int32"),r=w(t,"s1","broadcastArgs","int32");if(e.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${e.rank}`);if(r.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:e,s1:r};return I.runKernel(pc,s)}const cm=$({broadcastArgs_:lm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(n,t){let e=w(n,"broadcastTo","x");const r=e.shape;if(t.some(c=>!(c>0)||c%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=F(e,c)}const s=e.shape,i=Array.from(t);for(let c=t.length-1;c>=0;c--)if(s[c]===t[c])i[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(i.map((c,p)=>c>1?p:-1).filter(c=>c>=0).length===0)return _e(e);const o={x:e},l={reps:i};return I.runKernel(vo,o,l)}const Zn=$({broadcastTo_:hm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pm(n){const e={x:w(n,"x","ceil","float32")};return I.runKernel(fc,e)}const fm=$({ceil_:pm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function br(n,t,e){const r={shape:n,value:t,dtype:e};return I.runKernel(Uc,{},r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(n,t,e){const r=w(n,"x","clipByValue");if(E(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return br(r.shape,t,r.dtype);const s={x:r},i={clipValueMin:t,clipValueMax:e};return I.runKernel(dc,s,i)}const Zo=$({clipByValue_:dm});function mm(n){return xt(n,0)}const gm=$({concat1d_:mm});function ym(n,t){return xt(n,t)}const bm=$({concat2d_:ym});function wm(n,t){return xt(n,t)}const vm=$({concat3d_:wm});function Nm(n,t){return xt(n,t)}const Tm=$({concat4d_:Nm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(n,t,e,r,s="NHWC",i=[1,1],a){const o=w(n,"x","conv2d","float32"),l=w(t,"filter","conv2d","float32");let c=o,p=!1;o.rank===3&&(p=!0,c=F(o,[1,o.shape[0],o.shape[1],o.shape[2]])),E(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),E(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Zt("conv2d",r,a);const f=s==="NHWC"?c.shape[3]:c.shape[1];E(f===l.shape[2],()=>`Error in conv2d: depth of input (${f}) must match input depth for filter ${l.shape[2]}.`),E(Oe(e,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);const g={x:c,filter:l},b={strides:e,pad:r,dataFormat:s,dilations:i,dimRoundingMode:a},v=I.runKernel(bc,g,b);return p?F(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const wr=$({conv2d_:xm});function Sm(n,t,e,r,s="NWC",i=1,a){const o=w(n,"x","conv1d"),l=w(t,"filter","conv1d");let c=o,p=!1;o.rank===2&&(p=!0,c=F(o,[1,o.shape[0],o.shape[1]])),E(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),E(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Zt("conv1d",r,a),E(c.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${l.shape[1]}.`),E(Oe(e,i),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${i}'`),E(s==="NWC",()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`);const f=F(l,[1,l.shape[0],l.shape[1],l.shape[2]]),g=F(c,[c.shape[0],1,c.shape[1],c.shape[2]]),_=wr(g,f,[1,e],r,"NHWC",[1,i],a);return p?F(_,[_.shape[2],_.shape[3]]):F(_,[_.shape[0],_.shape[2],_.shape[3]])}const Em=$({conv1d_:Sm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _m(n,t,e,r,s,i="NHWC",a){E(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let o=n,l=t,c=!1;t.rank===3&&(c=!0,l=F(t,[1,t.shape[0],t.shape[1],t.shape[2]]),o=[1,n[0],n[1],n[2]]),E(o.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${o.length}.`),E(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),E(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);const p=i==="NHWC"?o[3]:o[1],f=i==="NHWC"?l.shape[3]:l.shape[1];E(p===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${p}) must match input depth for filter ${e.shape[2]}.`),E(f===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${f}) must match output depth for filter ${e.shape[3]}.`),Zt("conv2dDerInput",s,a);const g={dy:l,filter:e},b={strides:r,pad:s,dataFormat:i,dimRoundingMode:a,inputShape:o},v=I.runKernel(vc,g,b);return c?F(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const Qo=$({conv2DBackpropInput_:_m});function $m(n,t,e,r,s,i){const a=w(n,"x","conv2dTranspose"),o=w(t,"filter","conv2dTranspose");return Qo(e,a,o,r,s,"NHWC",i)}const km=$({conv2dTranspose_:$m});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(n,t,e,r,s="NDHWC",i=[1,1,1]){const a=w(n,"x","conv3d"),o=w(t,"filter","conv3d");let l=a,c=!1;a.rank===4&&(c=!0,l=F(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),E(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),E(o.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${o.rank}.`),E(l.shape[4]===o.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${o.shape[3]}.`),E(Oe(e,i),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),E(s==="NDHWC",()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`);const p={x:l,filter:o},f={strides:e,pad:r,dataFormat:s,dilations:i},g=I.runKernel(Nc,p,f);return c?F(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const Im=$({conv3d_:Am});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Om(n,t,e,r,s){E(n.length===t.rank,()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`);let i=n,a=t,o=!1;t.rank===4&&(o=!0,a=F(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),i=[1,n[0],n[1],n[2],n[3]]);const l=i[4],c=a.shape[4];E(i.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${i.length}.`),E(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),E(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),E(l===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`),E(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);const p={dy:a,filter:e},f={pad:s,strides:r,inputShape:i},g=I.runKernel(Tc,p,f);return o?F(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}const Dm=$({conv3DBackpropInput_:Om});function Cm(n,t,e,r,s){const i=w(n,"x","conv3dTranspose"),a=w(t,"filter","conv3dTranspose");return Dm(e,i,a,r,s)}const Fm=$({conv3dTranspose_:Cm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lm(n){const e={x:w(n,"x","cos","float32")};return I.runKernel(xc,e)}const Pm=$({cos_:Lm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bm(n){const e={x:w(n,"x","cosh","float32")};return I.runKernel(Sc,e)}const Rm=$({cosh_:Bm});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zm(n,t=0,e=!1,r=!1){const i={x:w(n,"x","cumprod")},a={axis:t,exclusive:e,reverse:r};return I.runKernel(Ec,i,a)}const Vm=$({cumprod_:zm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jm(n,t=0,e=!1,r=!1){const i={x:w(n,"x","cumsum")},a={axis:t,exclusive:e,reverse:r};return I.runKernel(_c,i,a)}const Mm=$({cumsum_:jm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hm(n,t,e,r=!1){const s=w(n,"x","denseBincount"),i=w(t,"weights","denseBincount");E(s.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`),E(s.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`),E(e>=0,()=>`size must be non-negative, but got ${e}.`),E(i.size===s.size||i.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${i.shape}.`);const a={x:s,weights:i},o={size:e,binaryOutput:r};return I.runKernel(kc,a,o)}const Um=$({denseBincount_:Hm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Km(n,t,e="NHWC"){const r=w(n,"x","depthToSpace","float32"),s=e==="NHWC"?r.shape[1]:r.shape[2],i=e==="NHWC"?r.shape[2]:r.shape[3],a=e==="NHWC"?r.shape[3]:r.shape[1];E(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),E(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t}  for depthToSpace with input shape
    ${r.shape}`),E(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t} for depthToSpace with input shape
        ${r.shape}`),E(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${r.shape}`);const o={x:r},l={blockSize:t,dataFormat:e};return I.runKernel(Ac,o,l)}const Wm=$({depthToSpace_:Km});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gm(n,t,e,r,s="NHWC",i=[1,1],a){const o=w(n,"x","depthwiseConv2d","float32"),l=w(t,"filter","depthwiseConv2d","float32");let c=o,p=!1;o.rank===3&&(p=!0,c=F(o,[1,o.shape[0],o.shape[1],o.shape[2]])),E(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),E(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);const f=s==="NHWC"?c.shape[3]:c.shape[1];E(f===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${f}) must match the inChannels dimension in filter ${l.shape[2]}.`),Zt("depthwiseConv2d",r,a);const g={x:c,filter:l},b={strides:e,pad:r,dataFormat:s,dilations:i,dimRoundingMode:a},v=I.runKernel(Ic,g,b);return p?F(v,[v.shape[1],v.shape[2],v.shape[3]]):v}const ri=$({depthwiseConv2d_:Gm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qm(n){const e={x:w(n,"x","diag")};return I.runKernel(Cc,e)}const Ym=$({diag_:qm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xm(n,t,e,r,s=[1,1],i="NHWC"){const a=w(n,"x","dilation2d"),o=w(t,"filter","dilation2d");E(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),E(o.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${o.rank}.`),E(i==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${i}`);let l=a,c=!1;a.rank===3&&(l=F(a,[1,a.shape[0],a.shape[1],a.shape[2]]),c=!0);const p={x:l,filter:o},f={strides:e,pad:r,dilations:s},g=I.runKernel(Fc,p,f);return c?F(g,[g.shape[1],g.shape[2],g.shape[3]]):g}const Jm=$({dilation2d_:Xm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zm(n,t){let e=w(n,"a","equal","string_or_numeric"),r=w(t,"b","equal","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(zc,s)}const tu=$({equal_:Zm});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qm(n,t,e){const r=w(t,"a","where"),s=w(e,"b","where"),i=w(n,"condition","where","bool"),a=wt(wt(i.shape,r.shape),s.shape),o=Zn(i,a),l=Zn(r,a),c=Zn(s,a),p={condition:o,t:l,e:c};return I.runKernel(Qh,p)}const sn=$({where_:Qm});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tg(n){const e={x:w(n,"x","zerosLike")};return I.runKernel(Ip,e)}const si=$({zerosLike_:tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eg(n,t){let e=w(n,"a","div"),r=w(t,"b","div");[e,r]=ft(e,r);const s=ot(e,r),i=si(s),a=tu(r,i);return sn(a,i,s)}const ng=$({divNoNan_:eg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rg(n,t){const e=w(n,"t1","dot"),r=w(t,"t2","dot");E((e.rank===1||e.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${r.rank}.`);const s=e.rank===1?e.size:e.shape[1],i=r.rank===1?r.size:r.shape[0];if(E(s===i,()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${i}.`),e.rank===1&&r.rank===1){const a=F(e,[1,-1]),o=F(r,[-1,1]),l=at(a,o);return F(l,[])}else if(e.rank===1&&r.rank===2){const a=F(e,[1,-1]),o=F(r,[r.shape[0],r.shape[1]]),l=at(a,o);return F(l,[l.size])}else if(e.rank===2&&r.rank===1){const a=F(r,[-1,1]),o=at(e,a);return F(o,[o.size])}else{const a=F(r,[r.shape[0],r.shape[1]]);return at(e,a)}}const sg=$({dot_:rg});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ig(n,...t){const e=t.map((s,i)=>w(s,`tensors${i}`,"einsum")),r={equation:n};return I.runKernel(Pc,e,r)}const ag=$({einsum_:ig});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(n){const e={x:w(n,"x","elu","float32")};return I.runKernel(Bc,e)}const eu=$({elu_:og});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ug(n){let t=w(n,"x","erf");E(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=dt(t,"float32"));const e={x:t};return I.runKernel(Rc,e)}const lg=$({erf_:ug});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cg(n,t,e){const r=n.length+t.length,s=[];let i=0,a=0;for(let o=0;o<r;o++)e.indexOf(o)===-1?s.push(n[i++]):s.push(t[a++]);return s}function vr(n,t){const e=t.map(r=>1);return cg(n,e,t)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hg(n,t=null,e=!1){const s={x:w(n,"x","max")},i={reductionIndices:t,keepDims:e};return I.runKernel(dh,s,i)}const en=$({max_:hg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pg(n,t=null,e=!1){const s={x:w(n,"x","min")},i={axis:t,keepDims:e};return I.runKernel(vh,s,i)}const Ss=$({min_:pg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fg(n,t){let e=w(n,"base","pow"),r=w(t,"exp","pow");[e,r]=ft(e,r);const s={a:e,b:r};return I.runKernel(Lh,s)}const ii=$({pow_:fg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function it(n,t){if((le(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&le(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ie(n,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dg(n){const e={x:w(n,"x","sqrt","float32")};return I.runKernel(op,e)}const Es=$({sqrt_:dg});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mg(n){const t=w(n,"x","square"),e={};return I.runKernel("Square",{x:t},e)}const Nr=$({square_:mg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gg(n,t=null,e=!1){let r=w(n,"x","sum");r.dtype==="bool"&&(r=dt(r,"int32"));const s={x:r},i={axis:t,keepDims:e};return I.runKernel(up,s,i)}const ct=$({sum_:gg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yg(n,t="euclidean",e=null,r=!1){n=w(n,"x","norm");const s=nu(n,t,e);let i=s.shape;if(r){const a=mr(e,n.shape);i=vr(s.shape,a)}return F(s,i)}function nu(n,t,e=null){if(n.rank===0)return Ut(n);if(n.rank!==1&&e===null)return nu(F(n,[-1]),t,e);if(n.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return ct(Ut(n),e);if(t===1/0)return en(Ut(n),e);if(t===-1/0)return Ss(Ut(n),e);if(t==="euclidean"||t===2)return Es(ct(ii(Ut(n),it(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return en(ct(Ut(n),e[0]),e[1]-1);if(t===1/0)return en(ct(Ut(n),e[1]),e[0]);if(t===-1/0)return Ss(ct(Ut(n),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Es(ct(Nr(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const Tr=$({norm_:yg});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bg(n,t=null,e=!1){return Tr(n,"euclidean",t,e)}const wg=$({euclideanNorm_:bg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vg(n){const e={x:w(n,"x","exp")};return I.runKernel(Vc,e)}const be=$({exp_:vg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ng(n,t=0){const e=w(n,"x","expandDims","string_or_numeric");E(t<=e.rank,()=>"Axis must be <= rank of the tensor");const r={input:e},s={dim:t};return I.runKernel(jc,r,s)}const fe=$({expandDims_:Ng});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tg(n){const e={x:w(n,"x","expm1")};return I.runKernel(Mc,e)}const xg=$({expm1_:Tg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sg(n,t){const e=w(n,"x","tile","string_or_numeric");E(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);const r={x:e},s={reps:t};return I.runKernel(vo,r,s)}const Tn=$({tile_:Sg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eg(n,t,e,r="float32"){t==null&&(t=n);const s=ye([n,t],r),i=n<=t?n:t;for(let o=0;o<i;++o)s.set(1,o,o);const a=F(s.toTensor(),[n,t]);if(e==null)return a;if(e.length===1)return Tn(fe(a,0),[e[0],1,1]);if(e.length===2)return Tn(fe(fe(a,0),0),[e[0],e[1],1,1]);if(e.length===3)return Tn(fe(fe(fe(a,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}const ru=$({eye_:Eg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _g(n){const e={x:w(n,"x","floor","float32")};return I.runKernel(Wc,e)}const su=$({floor_:_g});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $g(n,t,e=0,r=0){const s=w(n,"x","gather"),i=w(t,"indices","gather","int32"),a={x:s,indices:i},o={axis:e,batchDims:r};return I.runKernel(Yc,a,o)}const iu=$({gather_:$g});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kg(n,t){let e=w(n,"a","greater","string_or_numeric"),r=w(t,"b","greater","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(Jc,s)}const xr=$({greater_:kg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ag(n,t){let e=w(n,"a","greaterEqual","string_or_numeric"),r=w(t,"b","greaterEqual","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(Zc,s)}const au=$({greaterEqual_:Ag});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ig(n){const e={x:w(n,"x","isFinite")};return I.runKernel(eh,e)}const Og=$({isFinite_:Ig});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dg(n){const e={x:w(n,"x","isInf")};return I.runKernel(nh,e)}const Cg=$({isInf_:Dg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fg(n){const e={x:w(n,"x","isNaN")};return I.runKernel(rh,e)}const Lg=$({isNaN_:Fg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pg(n,t=.2){const r={x:w(n,"x","leakyRelu")},s={alpha:t};return I.runKernel(sh,r,s)}const ou=$({leakyRelu_:Pg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bg(n,t){let e=w(n,"a","less","string_or_numeric"),r=w(t,"b","less","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(ih,s)}const Rg=$({less_:Bg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zg(n,t){let e=w(n,"a","lessEqual","string_or_numeric"),r=w(t,"b","lessEqual","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(ah,s)}const ai=$({lessEqual_:zg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vg(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");const r={start:n,stop:t,num:e};return I.runKernel(oh,{},r)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jg(n,t=5,e=1,r=1,s=.5){const i=w(n,"x","localResponseNormalization");E(i.rank===4||i.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${i.rank}.`),E(En(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=i,o=!1;i.rank===3&&(o=!0,a=F(i,[1,i.shape[0],i.shape[1],i.shape[2]]));const l={x:a},c={depthRadius:t,bias:e,alpha:r,beta:s},p=I.runKernel(fh,l,c);return o?F(p,[p.shape[1],p.shape[2],p.shape[3]]):p}const Mg=$({localResponseNormalization_:jg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hg(n){const e={x:w(n,"x","log","float32")};return I.runKernel(uh,e)}const $n=$({log_:Hg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ug(n){const e={x:w(n,"x","log1p")};return I.runKernel(lh,e)}const uu=$({log1p_:Ug});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function we(n){return I.customGrad(n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kg(n){const e={x:w(n,"x","softplus")};return I.runKernel(ap,e)}const lu=$({softplus_:Kg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wg(n){const t=w(n,"x","logSigmoid");return we(r=>({value:ge(lu(ge(r))),gradFunc:a=>G(a,ze(ge(r)))}))(t)}const Gg=$({logSigmoid_:Wg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qg(n,t){let e=w(n,"a","sub"),r=w(t,"b","sub");[e,r]=ft(e,r);const s={a:e,b:r};return I.runKernel(Tp,s)}const tt=$({sub_:qg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yg(n,t=-1){const e=w(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return we((s,i)=>{const o=en(s,t,!0),l=tt(s,o),c=tt(dt(l,"float32"),$n(ct(be(l),t,!0)));return i([c]),{value:c,gradFunc:(f,g)=>{const[b]=g,v=!0,S=be(b);return tt(f,G(ct(f,t,v),S))}}})(e)}const Xg=$({logSoftmax_:Yg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jg(n,t=null,e=!1){const r=w(n,"x","logSumExp"),s=mr(t,r.shape),i=en(r,s,!0),a=tt(r,i),o=be(a),l=ct(o,s),c=$n(l),p=lt(F(i,c.shape),c);if(e){const f=vr(p.shape,s);return F(p,f)}return p}const cu=$({logSumExp_:Jg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zg(n,t){const e=w(n,"a","logicalAnd","bool"),r=w(t,"b","logicalAnd","bool");wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(ch,s)}const ar=$({logicalAnd_:Zg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qg(n){const e={x:w(n,"x","logicalNot","bool")};return I.runKernel(hh,e)}const hu=$({logicalNot_:Qg});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ty(n,t){const e=w(n,"a","logicalOr","bool"),r=w(t,"b","logicalOr","bool");wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(ph,s)}const pu=$({logicalOr_:ty});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ey(n,t){const e=w(n,"a","logicalXor","bool"),r=w(t,"b","logicalXor","bool");return wt(e.shape,r.shape),ar(pu(n,t),hu(ar(n,t)))}const ny=$({logicalXor_:ey});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gn=2147483648;function ry(n,t,e="left"){const r=w(n,"sortedSequence","searchSorted"),s=w(t,"values","searchSorted"),i=r.shape[r.shape.length-1],a=s.shape[s.shape.length-1],o=F(r,[-1,i]),l=F(s,[-1,a]);if(o.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(o.shape[0]!==l.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Nt(l.shape)>=Gn)throw new Error(`values tensor size must less than ${Gn}`);if(o.shape[1]>=Gn)throw new Error(`trailing dim_size must less than ${Gn} for int32 output type, was ${o.shape[1]}`);const c={sortedSequence:o,values:l},p={side:e};return I.runKernel(Zh,c,p)}const oi=$({searchSorted_:ry});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sy(n,t){return oi(n,t,"left")}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iy(n,t,e,r,s){const i=w(n,"x","maxPool"),a=1;let o=i,l=!1;i.rank===3&&(l=!0,o=F(i,[1,i.shape[0],i.shape[1],i.shape[2]])),E(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),E(Oe(e,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`),Zt("maxPool",r,s);const c={x:o},p={filterSize:t,strides:e,pad:r,dimRoundingMode:s},f=I.runKernel(gh,c,p);return l?F(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const fu=$({maxPool_:iy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ay(n,t=[1,1,1],e,r,s,i="NDHWC"){const a=w(n,"x","maxPool3d");let o=a,l=!1;a.rank===4&&(l=!0,o=F(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),E(o.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${o.rank}.`),E(i==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${i}`),Zt("maxPool3d",r,s);const c={x:o},p={filterSize:t,strides:e,pad:r,dimRoundingMode:s,dataFormat:i},f=I.runKernel(yh,c,p);return l?F(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const oy=$({maxPool3d_:ay});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uy(n,t,e,r,s=!1){const a={x:w(n,"x","maxPoolWithArgmax")},o={filterSize:t,strides:e,pad:r,includeBatchInIndex:s},l=I.runKernel(bh,a,o);return{result:l[0],indexes:l[1]}}const ly=$({maxPoolWithArgmax_:uy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cy(n,t){let e=w(n,"a","maximum"),r=w(t,"b","maximum");[e,r]=ft(e,r),e.dtype==="bool"&&(e=dt(e,"int32"),r=dt(r,"int32")),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(mh,s)}const hy=$({maximum_:cy});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function py(n,t=null,e=!1){const s={x:w(n,"x","mean")},i={axis:t,keepDims:e};return I.runKernel(wh,s,i)}const or=$({mean_:py});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function an(n,t="float32"){if(t==="complex64"){const r=an(n,"float32"),s=an(n,"float32");return ke(r,s)}const e=Ys(Nt(n),t);return I.makeTensor(e,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Re(n,t="float32"){if(t==="complex64"){const r=Re(n,"float32"),s=an(n,"float32");return ke(r,s)}const e=po(Nt(n),t);return I.makeTensor(e,n,t)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fy(n,t,{indexing:e="xy"}={}){if(e!=="xy"&&e!=="ij")throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(n===void 0)return[];let r=w(n,"x","meshgrid",n instanceof yt?n.dtype:"float32");if(t===void 0)return[r];let s=w(t,"y","meshgrid",t instanceof yt?t.dtype:"float32");const i=Nt(r.shape),a=Nt(s.shape);return e==="xy"?(r=F(r,[1,-1]),s=F(s,[-1,1]),[at(Re([a,1],r.dtype),r),at(s,Re([1,i],s.dtype))]):(r=F(r,[-1,1]),s=F(s,[1,-1]),[at(r,Re([1,a],r.dtype)),at(Re([i,1],s.dtype),s)])}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dy(n,t){let e=w(n,"a","minimum"),r=w(t,"b","minimum");[e,r]=ft(e,r),e.dtype==="bool"&&(e=dt(e,"int32"),r=dt(r,"int32")),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel(Nh,s)}const du=$({minimum_:dy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function my(n,t,e){E(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);const r=w(n,"x","mirrorPad");if(r.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");E(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);const s=e==="reflect"?1:0;for(let o=0;o<r.rank;o++)E(t[o].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),E(t[o][0]>=0&&t[o][0]<=r.shape[o]-s&&t[o][1]>=0&&t[o][1]<=r.shape[o]-s,()=>`Padding in dimension ${o} cannot be greater than or equal to ${r.shape[o]-s} or less than 0 for input of shape ${r.shape}`);const i={paddings:t,mode:e},a={x:r};return I.runKernel(Th,a,i)}const gy=$({mirrorPad_:my});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yy(n,t){let e=w(n,"a","mod"),r=w(t,"b","mod");[e,r]=ft(e,r);const s={a:e,b:r};return I.runKernel(xh,s)}const by=$({mod_:yy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wy(n,t=null,e=!1){n=w(n,"x","moments");const r=mr(t,n.shape),s=or(n,r,e);let i=s.shape;e||(i=vr(s.shape,r));const a=Nr(tt(dt(n,"float32"),F(s,i))),o=or(a,r,e);return{mean:s,variance:o}}const vy=$({moments_:wy});function Ny(n,t,e,r){const s=w(t,"data","multiRNNCell"),i=er(e,"c","multiRNNCell"),a=er(r,"h","multiRNNCell");let o=s;const l=[];for(let f=0;f<n.length;f++){const g=n[f](o,i[f],a[f]);l.push(g[0]),l.push(g[1]),o=g[1]}const c=[],p=[];for(let f=0;f<l.length;f+=2)c.push(l[f]),p.push(l[f+1]);return[c,p]}const Ty=$({multiRNNCell_:Ny});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xy(n,t,e,r=!1){const s=w(n,"logits","multinomial"),i=s.size,a=s.rank;if(i<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${i}.`);if(a>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${a}`);e=e||Math.random();const l={logits:a===1?F(s,[1,-1]):s},c={numSamples:t,seed:e,normalized:r},p=I.runKernel(Sh,l,c);return a===1?F(p,[p.size]):p}const Sy=$({multinomial_:xy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ey(n,t){let e=w(n,"a","notEqual","string_or_numeric"),r=w(t,"b","notEqual","string_or_numeric");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r};return I.runKernel($h,s)}const mu=$({notEqual_:Ey});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _y(n){const e={x:w(n,"x","onesLike")};return I.runKernel(Oh,e)}const $y=$({onesLike_:_y});function ky(n,t){const e=w(n,"v1","outerProduct"),r=w(t,"v2","outerProduct");E(e.rank===1&&r.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${e.rank} and ${r.rank}.`);const s=F(e,[-1,1]),i=F(r,[1,-1]);return at(s,i)}const Ay=$({outerProduct_:ky});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iy(n,t,e=0){const r=w(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:e},i={x:r};return I.runKernel(Fh,i,s)}const Dn=$({pad_:Iy});function Oy(n,t,e=0){return E(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),Dn(n,[t],e)}const Dy=$({pad1d_:Oy});function Cy(n,t,e=0){return E(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Dn(n,t,e)}const Fy=$({pad2d_:Cy});function Ly(n,t,e=0){return E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Dn(n,t,e)}const Py=$({pad3d_:Ly});function By(n,t,e=0){return E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Dn(n,t,e)}const Ry=$({pad4d_:By});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zy(n,t,e){const r=w(n,"x","spaceToBatchND");E(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),E(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),E(r.shape.reduce((a,o,l)=>l>0&&l<=t.length?a&&(o+e[l-1][0]+e[l-1][1])%t[l-1]===0:a,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);const s={x:r},i={blockShape:t,paddings:e};return I.runKernel(lp,s,i)}const gu=$({spaceToBatchND_:zy});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vy(n,t,e,r,s,i,a){s==null&&(s=[1,1]),i==null&&(i=1),r===0&&(r="valid");const o=w(n,"x","maxPool");let l=o,c=!1;o.rank===3&&(c=!0,l=F(o,[1,o.shape[0],o.shape[1],o.shape[2]])),E(Oe(i,s),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${i} and dilations '${s}'`);const p=zd(l.shape,t,i,s,r),f=[p.dilationHeight,p.dilationWidth];let g;r==="same"?g=My([p.filterHeight,p.filterWidth],f):g=[[0,0],[0,0]];const b=f[0]===1&&f[1]===1,[v,S]=jy([p.inHeight,p.inWidth],f,g),_=b?r:"valid",k=b?l:gu(l,f,v),L=(e==="avg"?()=>Yo(k,t,i,_,a):()=>fu(k,t,i,_,a))(),D=b?L:Xo(L,f,S);return c?F(D,[D.shape[1],D.shape[2],D.shape[3]]):D}function jy(n,t,e){const r=e.map(p=>p[0]),s=e.map(p=>p[1]),i=n.concat(r,s),a=t.map((p,f)=>(p-i[f]%p)%p),o=s.map((p,f)=>p+a[f]),l=t.map((p,f)=>[r[f],o[f]]),c=t.map((p,f)=>[0,a[f]]);return[l,c]}function My(n,t){const r=n.map((a,o)=>a+(a-1)*(t[o]-1)).map(a=>a-1),s=r.map(a=>Math.floor(a/2)),i=r.map((a,o)=>a-s[o]);return r.map((a,o)=>[s[o],i[o]])}const Hy=$({pool_:Vy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uy(n,t){const e=w(n,"x","prelu"),r=w(t,"alpha","prelu"),s={x:e,alpha:r};return I.runKernel(Ph,s)}const yu=$({prelu_:Uy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ky(n,t=null,e=!1){let r=w(n,"x","prod");r.dtype==="bool"&&(r=dt(r,"int32"));const s={x:r},i={axis:t,keepDims:e};return I.runKernel(Bh,s,i)}const Wy=$({prod_:Ky});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gy(n,t,e,r){const s=n.map((p,f)=>w(p,`tensors${f}`,"raggedGather","int32")),i=w(t,"paramsDenseValues","raggedGather"),a=w(e,"indices","raggedGather","int32"),o={paramsNestedSplits:s,paramsDenseValues:i,indices:a},l={outputRaggedRank:r},c=I.runKernel(Rh,o,l);return{outputNestedSplits:c.slice(0,c.length-1),outputDenseValues:c[c.length-1]}}const qy=$({raggedGather_:Gy});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yy(n,t,e,r,s){const i=w(n,"shape","raggedTensorToTensor","int32"),a=w(t,"values","raggedTensorToTensor"),o=w(e,"defaultValue","raggedTensorToTensor",a.dtype),l=r.map((f,g)=>w(f,`tensors${g}`,"raggedTensorToTensor","int32")),c={shape:i,values:a,defaultValue:o,rowPartitionTensors:l},p={rowPartitionTypes:s};return I.runKernel(zh,c,p)}const Xy=$({raggedTensorToTensor_:Yy});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jy(n,t,e){const r=Nt(n);let s=null;if(e==null||e==="float32")s=new Float32Array(r);else if(e==="int32")s=new Int32Array(r);else if(e==="bool")s=new Uint8Array(r);else throw new Error(`Unknown data type ${e}`);for(let i=0;i<r;i++)s[i]=t();return I.makeTensor(s,n,e)}const Zy=$({rand_:Jy});var _s={},Qy={get exports(){return _s},set exports(n){_s=n}};(function(n){(function(t,e,r){function s(l){var c=this,p=o();c.next=function(){var f=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=f|0)},c.c=1,c.s0=p(" "),c.s1=p(" "),c.s2=p(" "),c.s0-=p(l),c.s0<0&&(c.s0+=1),c.s1-=p(l),c.s1<0&&(c.s1+=1),c.s2-=p(l),c.s2<0&&(c.s2+=1),p=null}function i(l,c){return c.c=l.c,c.s0=l.s0,c.s1=l.s1,c.s2=l.s2,c}function a(l,c){var p=new s(l),f=c&&c.state,g=p.next;return g.int32=function(){return p.next()*4294967296|0},g.double=function(){return g()+(g()*2097152|0)*11102230246251565e-32},g.quick=g,f&&(typeof f=="object"&&i(f,p),g.state=function(){return i(p,{})}),g}function o(){var l=4022871197,c=function(p){p=String(p);for(var f=0;f<p.length;f++){l+=p.charCodeAt(f);var g=.02519603282416938*l;l=g>>>0,g-=l,g*=l,l=g>>>0,g-=l,l+=g*4294967296}return(l>>>0)*23283064365386963e-26};return c}e&&e.exports?e.exports=a:r&&r.amd?r(function(){return a}):this.alea=a})(ae,n,!1)})(Qy);var $s={},tb={get exports(){return $s},set exports(n){$s=n}};(function(n){(function(t,e,r){function s(o){var l=this,c="";l.x=0,l.y=0,l.z=0,l.w=0,l.next=function(){var f=l.x^l.x<<11;return l.x=l.y,l.y=l.z,l.z=l.w,l.w^=l.w>>>19^f^f>>>8},o===(o|0)?l.x=o:c+=o;for(var p=0;p<c.length+64;p++)l.x^=c.charCodeAt(p)|0,l.next()}function i(o,l){return l.x=o.x,l.y=o.y,l.z=o.z,l.w=o.w,l}function a(o,l){var c=new s(o),p=l&&l.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var g=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(g+b)/(1<<21);while(v===0);return v},f.int32=c.next,f.quick=f,p&&(typeof p=="object"&&i(p,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:r&&r.amd?r(function(){return a}):this.xor128=a})(ae,n,!1)})(tb);var ks={},eb={get exports(){return ks},set exports(n){ks=n}};(function(n){(function(t,e,r){function s(o){var l=this,c="";l.next=function(){var f=l.x^l.x>>>2;return l.x=l.y,l.y=l.z,l.z=l.w,l.w=l.v,(l.d=l.d+362437|0)+(l.v=l.v^l.v<<4^(f^f<<1))|0},l.x=0,l.y=0,l.z=0,l.w=0,l.v=0,o===(o|0)?l.x=o:c+=o;for(var p=0;p<c.length+64;p++)l.x^=c.charCodeAt(p)|0,p==c.length&&(l.d=l.x<<10^l.x>>>4),l.next()}function i(o,l){return l.x=o.x,l.y=o.y,l.z=o.z,l.w=o.w,l.v=o.v,l.d=o.d,l}function a(o,l){var c=new s(o),p=l&&l.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var g=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(g+b)/(1<<21);while(v===0);return v},f.int32=c.next,f.quick=f,p&&(typeof p=="object"&&i(p,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:r&&r.amd?r(function(){return a}):this.xorwow=a})(ae,n,!1)})(eb);var As={},nb={get exports(){return As},set exports(n){As=n}};(function(n){(function(t,e,r){function s(o){var l=this;l.next=function(){var p=l.x,f=l.i,g,b;return g=p[f],g^=g>>>7,b=g^g<<24,g=p[f+1&7],b^=g^g>>>10,g=p[f+3&7],b^=g^g>>>3,g=p[f+4&7],b^=g^g<<7,g=p[f+7&7],g=g^g<<13,b^=g^g<<9,p[f]=b,l.i=f+1&7,b};function c(p,f){var g,b=[];if(f===(f|0))b[0]=f;else for(f=""+f,g=0;g<f.length;++g)b[g&7]=b[g&7]<<15^f.charCodeAt(g)+b[g+1&7]<<13;for(;b.length<8;)b.push(0);for(g=0;g<8&&b[g]===0;++g);for(g==8?b[7]=-1:b[g],p.x=b,p.i=0,g=256;g>0;--g)p.next()}c(l,o)}function i(o,l){return l.x=o.x.slice(),l.i=o.i,l}function a(o,l){o==null&&(o=+new Date);var c=new s(o),p=l&&l.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var g=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(g+b)/(1<<21);while(v===0);return v},f.int32=c.next,f.quick=f,p&&(p.x&&i(p,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:r&&r.amd?r(function(){return a}):this.xorshift7=a})(ae,n,!1)})(nb);var Is={},rb={get exports(){return Is},set exports(n){Is=n}};(function(n){(function(t,e,r){function s(o){var l=this;l.next=function(){var p=l.w,f=l.X,g=l.i,b,v;return l.w=p=p+1640531527|0,v=f[g+34&127],b=f[g=g+1&127],v^=v<<13,b^=b<<17,v^=v>>>15,b^=b>>>12,v=f[g]=v^b,l.i=g,v+(p^p>>>16)|0};function c(p,f){var g,b,v,S,_,k=[],P=128;for(f===(f|0)?(b=f,f=null):(f=f+"\0",b=0,P=Math.max(P,f.length)),v=0,S=-32;S<P;++S)f&&(b^=f.charCodeAt((S+32)%f.length)),S===0&&(_=b),b^=b<<10,b^=b>>>15,b^=b<<4,b^=b>>>13,S>=0&&(_=_+1640531527|0,g=k[S&127]^=b+_,v=g==0?v+1:0);for(v>=128&&(k[(f&&f.length||0)&127]=-1),v=127,S=4*128;S>0;--S)b=k[v+34&127],g=k[v=v+1&127],b^=b<<13,g^=g<<17,b^=b>>>15,g^=g>>>12,k[v]=b^g;p.w=_,p.X=k,p.i=v}c(l,o)}function i(o,l){return l.i=o.i,l.w=o.w,l.X=o.X.slice(),l}function a(o,l){o==null&&(o=+new Date);var c=new s(o),p=l&&l.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var g=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(g+b)/(1<<21);while(v===0);return v},f.int32=c.next,f.quick=f,p&&(p.X&&i(p,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:r&&r.amd?r(function(){return a}):this.xor4096=a})(ae,n,!1)})(rb);var Os={},sb={get exports(){return Os},set exports(n){Os=n}};(function(n){(function(t,e,r){function s(o){var l=this,c="";l.next=function(){var f=l.b,g=l.c,b=l.d,v=l.a;return f=f<<25^f>>>7^g,g=g-b|0,b=b<<24^b>>>8^v,v=v-f|0,l.b=f=f<<20^f>>>12^g,l.c=g=g-b|0,l.d=b<<16^g>>>16^v,l.a=v-f|0},l.a=0,l.b=0,l.c=-1640531527,l.d=1367130551,o===Math.floor(o)?(l.a=o/4294967296|0,l.b=o|0):c+=o;for(var p=0;p<c.length+20;p++)l.b^=c.charCodeAt(p)|0,l.next()}function i(o,l){return l.a=o.a,l.b=o.b,l.c=o.c,l.d=o.d,l}function a(o,l){var c=new s(o),p=l&&l.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var g=c.next()>>>11,b=(c.next()>>>0)/4294967296,v=(g+b)/(1<<21);while(v===0);return v},f.int32=c.next,f.quick=f,p&&(typeof p=="object"&&i(p,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:r&&r.amd?r(function(){return a}):this.tychei=a})(ae,n,!1)})(sb);var Ds={},ib={get exports(){return Ds},set exports(n){Ds=n}};const ab={},ob=Object.freeze(Object.defineProperty({__proto__:null,default:ab},Symbol.toStringTag,{value:"Module"})),ub=Al(ob);(function(n){(function(t,e,r){var s=256,i=6,a=52,o="random",l=r.pow(s,i),c=r.pow(2,a),p=c*2,f=s-1,g;function b(D,C,B){var H=[];C=C==!0?{entropy:!0}:C||{};var V=k(_(C.entropy?[D,L(e)]:D??P(),3),H),z=new v(H),U=function(){for(var j=z.g(i),Z=l,X=0;j<c;)j=(j+X)*s,Z*=s,X=z.g(1);for(;j>=p;)j/=2,Z/=2,X>>>=1;return(j+X)/Z};return U.int32=function(){return z.g(4)|0},U.quick=function(){return z.g(4)/4294967296},U.double=U,k(L(z.S),e),(C.pass||B||function(j,Z,X,et){return et&&(et.S&&S(et,z),j.state=function(){return S(z,{})}),X?(r[o]=j,Z):j})(U,V,"global"in C?C.global:this==r,C.state)}function v(D){var C,B=D.length,H=this,V=0,z=H.i=H.j=0,U=H.S=[];for(B||(D=[B++]);V<s;)U[V]=V++;for(V=0;V<s;V++)U[V]=U[z=f&z+D[V%B]+(C=U[V])],U[z]=C;(H.g=function(j){for(var Z,X=0,et=H.i,nt=H.j,mt=H.S;j--;)Z=mt[et=f&et+1],X=X*s+mt[f&(mt[et]=mt[nt=f&nt+Z])+(mt[nt]=Z)];return H.i=et,H.j=nt,X})(s)}function S(D,C){return C.i=D.i,C.j=D.j,C.S=D.S.slice(),C}function _(D,C){var B=[],H=typeof D,V;if(C&&H=="object")for(V in D)try{B.push(_(D[V],C-1))}catch{}return B.length?B:H=="string"?D:D+"\0"}function k(D,C){for(var B=D+"",H,V=0;V<B.length;)C[f&V]=f&(H^=C[f&V]*19)+B.charCodeAt(V++);return L(C)}function P(){try{var D;return g&&(D=g.randomBytes)?D=D(s):(D=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(D)),L(D)}catch{var C=t.navigator,B=C&&C.plugins;return[+new Date,t,B,t.screen,L(e)]}}function L(D){return String.fromCharCode.apply(0,D)}if(k(r.random(),e),n.exports){n.exports=b;try{g=ub}catch{}}else r["seed"+o]=b})(typeof self<"u"?self:ae,[],Math)})(ib);var lb=_s,cb=$s,hb=ks,pb=As,fb=Is,db=Os,We=Ds;We.alea=lb;We.xor128=cb;We.xorwow=hb;We.xorshift7=pb;We.xor4096=fb;We.tychei=db;var ui=We;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class li{constructor(t,e,r,s,i){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=s,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const a=i||Math.random();this.random=ui.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const s=this.nextVal;return this.nextVal=NaN,s}let t,e,r=!1;for(;!r;){let s,i,a;do s=2*this.random()-1,i=2*this.random()-1,a=s*s+i*i;while(a>=1||a===0);const o=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*s*o,e=this.mean+this.stdDev*i*o,(!this.truncated||this.isValidTruncated(t))&&(r=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class mb{constructor(t,e,r,s){this.alpha=t,this.beta=1/e,this.dtype=r;const i=s||Math.random();this.randu=ui.alea(i.toString()),this.randn=new li(0,1,r,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,r,s,i,a;for(;;){do s=this.randn.nextValue(),a=1+this.c*s;while(a<=0);if(a*=a*a,t=s*s,e=1-.331*t*t,r=.5*t+this.d*(1-a+Math.log(a)),i=this.randu(),i<e||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class gb{constructor(t=0,e=1,r,s){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=r,s==null&&(s=Math.random()),typeof s=="number"&&(s=s.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=ui.alea(s)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yb(n,t,e=1,r="float32",s){if(e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error(`Unsupported data type ${r}`);const i=new mb(t,e,r,s),a=ye(n,r);for(let o=0;o<a.values.length;o++)a.values[o]=i.nextValue();return a.toTensor()}const bb=$({randomGamma_:yb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wb(n,t=0,e=1,r,s){if(r!=null&&r==="bool")throw new Error(`Unsupported data type ${r}`);const i=new li(t,e,r,!1,s),a=ye(n,r);for(let o=0;o<a.values.length;o++)a.values[o]=i.nextValue();return a.toTensor()}const bu=$({randomNormal_:wb});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vb(n,t,e){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return bu(n,0,1,t,e)}const Nb=$({randomStandardNormal_:vb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Tb(n,t=0,e=1,r="float32",s){const i=ye(n,r),a=new gb(t,e,null,s);for(let o=0;o<i.values.length;o++)i.values[o]=a.nextValue();return i.toTensor()}const wu=$({randomUniform_:Tb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kn(n,t,e=1,r="float32"){if(e===0)throw new Error("Cannot have a step of zero");const s={start:n,stop:t,step:e,dtype:r};return I.runKernel(Vh,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xb(n){const e={x:w(n,"x","reciprocal")};return I.runKernel(Mh,e)}const Sb=$({reciprocal_:xb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eb(n){const e={x:w(n,"x","relu")};return I.runKernel(Hh,e)}const Sr=$({relu_:Eb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _b(n){const e={x:w(n,"x","relu6")};return I.runKernel(Gh,e)}const vu=$({relu6_:_b});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $b(n,t){const r={x:w(n,"x","reverse")},s={dims:t};return I.runKernel(qh,r,s)}const Ue=$({reverse_:$b});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kb(n){const t=w(n,"x","reverse");return E(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Ue(t,0)}const Ab=$({reverse1d_:kb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ib(n,t){const e=w(n,"x","reverse");return E(e.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${e.rank}.`),Ue(e,t)}const Ob=$({reverse2d_:Ib});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Db(n,t){const e=w(n,"x","reverse");return E(e.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${e.rank}.`),Ue(e,t)}const Cb=$({reverse3d_:Db});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fb(n,t){const e=w(n,"x","reverse");return E(e.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${e.rank}.`),Ue(e,t)}const Lb=$({reverse4d_:Fb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pb(n){const e={x:w(n,"x","round")};return I.runKernel(Yh,e)}const Nu=$({round_:Pb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bb(n){const e={x:w(n,"x","rsqrt","float32")};return I.runKernel(Xh,e)}const Rb=$({rsqrt_:Bb});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(n){const e={x:w(n,"x","selu")};return I.runKernel(tp,e)}const Vb=$({selu_:zb});function jb(n,t,e,r,s,i=[1,1],a="NHWC"){const o=w(n,"x","separableConv2d"),l=w(t,"depthwiseFilter","separableConv2d"),c=w(e,"pointwiseFilter","separableConv2d");let p=o,f=!1;if(o.rank===3&&(f=!0,p=F(o,[1,o.shape[0],o.shape[1],o.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(p.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),E(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),E(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),E(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),E(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);const g=l.shape[2],b=l.shape[3];E(c.shape[2]===g*b,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${g*b}, but got ${c.shape[2]}.`);const v=ri(p,l,r,s,a,i),_=wr(v,c,1,"valid",a);return f?F(_,[_.shape[1],_.shape[2],_.shape[3]]):_}const Mb=$({separableConv2d_:jb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Hb(n,t){const e=w(n,"x","setdiff1d"),r=w(t,"y","setdiff1d");E(e.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${e.dtype}) and y (${r.dtype}).`),E(e.rank===1,()=>`x should be 1D tensor, but got x (${e.shape}).`),E(r.rank===1,()=>`y should be 1D tensor, but got y (${r.shape}).`);const s=await e.data(),i=await r.data(),a=new Set(i);let o=0;for(let p=0;p<s.length;p++)a.has(s[p])||o++;const l=new cs([o],e.dtype),c=new cs([o],"int32");for(let p=0,f=0;p<s.length;p++)a.has(s[p])||(l.values[f]=s[p],c.values[f]=p,f++);return[l.toTensor(),c.toTensor()]}const Ub=Hb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kb(n){const e={x:w(n,"x","sign")};return I.runKernel(sp,e)}const Wb=$({sign_:Kb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gb(n){const e={x:w(n,"x","sin","float32")};return I.runKernel(np,e)}const qb=$({sin_:Gb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yb(n){const e={x:w(n,"x","sinh")};return I.runKernel(rp,e)}const Xb=$({sinh_:Yb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jb(n,t,e){const r=w(n,"x","slice1d");return E(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),J(r,[t],[e])}const Zb=$({slice1d_:Jb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qb(n,t,e){const r=w(n,"x","slice2d");return E(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),J(r,t,e)}const t0=$({slice2d_:Qb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e0(n,t,e){const r=w(n,"x","slice3d");return E(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),J(r,t,e)}const n0=$({slice3d_:e0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r0(n,t,e){const r=w(n,"x","slice4d");return E(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),J(r,t,e)}const s0=$({slice4d_:r0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function i0(n,t=-1){const e=w(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const r={logits:e},s={dim:t};return I.runKernel(hp,r,s)}const a0=$({softmax_:i0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function o0(n){E(n.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`);const t={input:n};return I.runKernel(Hc,t)}const ci=$({fft_:o0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u0(n){E(n.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`);const t={input:n};return I.runKernel(Qc,t)}const ur=$({ifft_:u0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l0(n){const t=n.shape[n.shape.length-1],e=n.size/t;let r;if(t<=2){const s=F(n,[e,t]);r=ur(s)}else{const s=[e,2*(t-1)],i=F(_n(n),[e,t]),a=F(gr(n),[e,t]),o=Ue(J(i,[0,1],[e,t-2]),1),l=G(Ue(J(a,[0,1],[e,t-2]),1),it(-1)),c=xt([i,o],1),p=xt([a,l],1),f=F(ke(c,p),[s[0],s[1]]);r=ur(f)}if(r=_n(r),n.rank===3&&n.shape[0]!==0){const s=r,i=n.shape[0];r=F(r,[i,r.shape[0]/i,r.shape[1]]),s.dispose()}return r}const Tu=$({irfft_:l0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c0(n,t,e=0){const s={x:w(n,"x","split")},i={numOrSizeSplits:t,axis:e};return I.runKernel(cp,s,i)}const An=$({split_:c0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function h0(n,t){E(n.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${n.dtype}`);let e=n.shape[n.shape.length-1];const r=n.size/e;let s;if(t!=null&&t<e){const v=n.shape.map(_=>0),S=n.shape.map(_=>_);S[n.shape.length-1]=t,s=J(n,v,S),e=t}else if(t!=null&&t>e){const v=n.shape.map(S=>S);v[n.shape.length-1]=t-e,s=xt([n,an(v)],n.shape.length-1),e=t}else s=n;const i=si(s),a=F(ke(s,i),[r,e]),o=ci(a),l=Math.floor(e/2)+1,c=_n(o),p=gr(o),f=An(c,[l,e-l],c.shape.length-1),g=An(p,[l,e-l],p.shape.length-1),b=s.shape.slice();return b[s.shape.length-1]=l,F(ke(f[0],g[0]),b)}const hi=$({rfft_:h0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function p0(n,t){let e=w(n,"a","squaredDifference"),r=w(t,"b","squaredDifference");[e,r]=ft(e,r),wt(e.shape,r.shape);const s={a:e,b:r},i={};return I.runKernel(yp,s,i)}const xu=$({squaredDifference_:p0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(n,t){const e=w(n,"x","squeeze","string_or_numeric");return F(e,Fl(e.shape,t).newShape)}const vt=$({squeeze_:f0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d0(n,t=0){const e=er(n,"tensors","stack","string_or_numeric");E(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&E(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");const r=e,s={axis:t};return I.runKernel(Ch,r,s)}const ve=$({stack_:d0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m0(n,t=0){const r={x:w(n,"x","step")},s={alpha:t};return I.runKernel(Op,r,s)}const Su=$({step_:m0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function g0(n,t,e,r,s=0,i=0,a=0,o=0,l=0){const p={x:w(n,"x","stridedSlice","string_or_numeric")},f={begin:t,end:e,strides:r,beginMask:s,endMask:i,ellipsisMask:a,newAxisMask:o,shrinkAxisMask:l};return I.runKernel(bp,p,f)}const y0=$({stridedSlice_:g0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b0(n){const e={x:w(n,"x","tan","float32")};return I.runKernel(xp,e)}const w0=$({tan_:b0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function It(n,t){on(n);const e=Ae(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ie(n,null,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ve(n,t,e){if(on(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const r=Ae(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ie(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function v0(n,t,e){if(on(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const r=Ae(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ie(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N0(n,t,e){if(on(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const r=Ae(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ie(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T0(n,t,e){if(on(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const r=Ae(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,Ie(n,t,r,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x0(n,t=1,e=!0){const r=w(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const i={x:r},a={k:t,sorted:e},[o,l]=I.runKernel(Ep,i,a);return{values:o,indices:l}}const S0=$({topk_:x0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E0(n,t=0,e=1,r,s){if(r!=null&&r==="bool")throw new Error("Unsupported data type $ { dtype }");const i=new li(t,e,r,!0,s),a=ye(n,r);for(let o=0;o<a.values.length;o++)a.values[o]=i.nextValue();return a.toTensor()}const _0=$({truncatedNormal_:E0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $0(n,t=0){const e=w(n,"x","unique","string_or_numeric");E(e.rank>0,()=>"The input tensor must be at least 1D");const r={x:e},s={axis:t},[i,a]=I.runKernel($p,r,s);return{values:i,indices:a}}const k0=$({unique_:$0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function A0(n,t,e){const r=w(n,"x","unsortedSegmentSum"),s=w(t,"segmentIds","unsortedSegmentSum","int32");E(En(e),()=>"numSegments must be of dtype int");const i={x:r,segmentIds:s},a={numSegments:e};return I.runKernel(Ap,i,a)}const I0=$({unsortedSegmentSum_:A0});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O0(n,t=0){const e=w(n,"x","unstack","string_or_numeric");E(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);const r={value:e},s={axis:t};return I.runKernel(kp,r,s)}const Ge=$({unstack_:O0});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D0(n,t){return oi(n,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function C0(n,t=!0,e,r){return I.makeVariable(n,t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function F0(n,t){const e=[];for(let i=0;i<t.length;i++)t[i]&&e.push(i);const r=ye(n,"int32"),s=ye([e.length,n.length],"int32");for(let i=0;i<e.length;i++){const a=r.indexToLoc(e[i]),o=i*n.length;s.values.set(a,o)}return s.toTensor()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function L0(n){const t=w(n,"condition","whereAsync","bool"),e=await t.data(),r=F0(t.shape,e);return n!==t&&t.dispose(),r}const Eu=L0;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function P0(n,t,e){const r=w(n,"tensor","boolMask"),s=w(t,"mask","boolMask","bool"),i=e??0,a=s.rank,o=r.shape;E(a>0,()=>"mask cannot be scalar"),Wt(o.slice(i,i+a),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let S=i;S<i+a;S++)l*=o[S];const c=o.slice(0,i).concat([l],o.slice(i+a)),p=F(r,c),f=F(s,[-1]),g=await Eu(f),b=vt(g,[1]),v=iu(p,b,i);return n!==r&&r.dispose(),t!==s&&s.dispose(),b.dispose(),p.dispose(),f.dispose(),g.dispose(),v}const B0=P0;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R0(n,t,e,r,s=!0){const i=w(n,"v","movingAverage"),a=w(t,"x","movingAverage"),o=w(e,"decay","movingAverage");Yp(i,a),E($e(i.shape,a.shape),()=>"Shape mismatch in v and x");const l=it(1),c=tt(l,o);let p=G(tt(a,i),c);if(s){E(r!=null,()=>"When using zeroDebias: true, step is required.");const f=w(r,"step","movingAverage");p=ot(p,tt(l,ii(o,f)))}return lt(i,p)}const z0=$({movingAverage_:R0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function V0(n,t,e){const r=w(n,"indices","scatterND","int32"),s=w(t,"updates","scatterND");ld(s,r,e);const i={indices:r,updates:s},a={shape:e};return I.runKernel(Jh,i,a)}const j0=$({scatterND_:V0});function M0(n,t,e,r){if(n.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const s=n.rank>0?n.shape[0]:1,i=n.rank>1?n.shape[1]:1;if(e.length!==i)throw new Error(`outputShape has incorrect number of elements:, ${e.length}, should be: ${i}.`);const a=t.size;if(!(t.rank===0||t.rank===1&&a===s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function H0(n,t,e,r=0){const s=w(n,"sparseIndices","sparseToDense","int32"),i=w(t,"sparseValues","sparseToDense","string_or_numeric"),a=w(r,"defaultValue","sparseToDense",i.dtype);M0(s,i,e,a);const o={sparseIndices:s,sparseValues:i,defaultValue:a},l={outputShape:e};return I.runKernel(gp,o,l)}const U0=$({sparseToDense_:H0});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K0(n,t){const e=w(t,"indices","gatherND","int32"),s={params:w(n,"x","gatherND","string_or_numeric"),indices:e};return I.runKernel(Xc,s)}const W0=$({gatherND_:K0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function G0(n,t){if(t==null)return n.shape.slice();if($e(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let r=0;r<n.shape.length;r++)t[r]==null&&n.shape[r]!=null?e.push(n.shape[r]):e.push(t[r]);return e}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q0(n,t,e,r){const s=w(n,"x","dropout");if(E(s.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`),E(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return n instanceof yt?s.clone():s;const i=G0(s,e),a=1-t,o=ot(su(lt(wu(i,0,1,"float32",r),a)),a);return G(s,o)}const Y0=$({dropout_:q0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _u(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function pi(n,t,e){const r=1-n%2,s=new Float32Array(n);for(let i=0;i<n;++i){const a=2*Math.PI*i/(n+r-1);s[i]=t-e*Math.cos(a)}return It(s,"float32")}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function X0(n,t,e=1){const r=w(n,"predictions","inTopK"),s=w(t,"targets","inTopK");E(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),E(r.rank-1===s.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`),Wt(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const i=r.shape[r.shape.length-1];E(e>0&&e<=i,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${i}), but got ${e}`);const a=await r.data(),o=await s.data(),[l,c]=[a.length/i,i],p=Ll("bool",l);for(let f=0;f<l;f++){const g=f*c,b=a.subarray(g,g+c),v=[];for(let S=0;S<b.length;S++)v.push({value:b[S],index:S});v.sort((S,_)=>_.value-S.value),p[f]=0;for(let S=0;S<e;S++)if(v[S].index===o[f]){p[f]=1;break}}return n!==r&&r.dispose(),t!==s&&s.dispose(),oe(p,s.shape,"bool")}const J0=X0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z0(n,t,e,r,s,i="NHWC",a){let o=n;n.rank===3&&(o=F(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=F(t,[1,t.shape[0],t.shape[1],t.shape[2]])),E(o.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${o.shape}.`),E(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),E(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);const c=i==="NHWC"?o.shape[3]:o.shape[1],p=i==="NHWC"?l.shape[3]:l.shape[1];E(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),E(p===e[3],()=>`Error in conv2dDerFilter: depth of dy (${p}) must match output depth for filter (${e[3]}).`),Zt("conv2dDerFilter",s,a);const f={x:o,dy:l},g={strides:r,pad:s,dataFormat:i,dimRoundingMode:a,filterShape:e};return I.runKernel(wc,f,g)}const Q0=$({conv2DBackpropFilter_:Z0});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fi(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return G(n,Su(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function di(n,t){let e=t;const r=sd(n.shape,t.shape);return r.length>0&&(e=ct(e,r)),F(e,n.shape)}function mi(n,t,e,r){if(t==="linear")return n;if(t==="relu")return Sr(n);if(t==="elu")return eu(n);if(t==="relu6")return vu(n);if(t==="prelu")return yu(n,e);if(t==="leakyrelu")return ou(n,r);if(t==="sigmoid")return ze(n);throw new Error(`Unknown fused activation ${t}.`)}const gi=(n,t)=>!(n>0)||t==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tw({x:n,filter:t,strides:e,pad:r,dataFormat:s="NHWC",dilations:i=[1,1],dimRoundingMode:a,bias:o,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:p}){if(l=l||"linear",gi(I.state.gradientDepth,l)===!1){E(s==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let B=wr(n,t,e,r,s,i,a);return o!=null&&(B=lt(B,o)),mi(B,l,c,p)}const f=w(n,"x","conv2d","float32"),g=w(t,"filter","conv2d","float32");let b=f,v=!1;f.rank===3&&(v=!0,b=F(f,[1,f.shape[0],f.shape[1],f.shape[2]])),E(b.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${b.rank}.`),E(g.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${g.rank}.`),Zt("fused conv2d",r,a);const S=s==="NHWC"?b.shape[3]:b.shape[1];E(g.shape[2]===S,()=>`Error in conv2d: depth of input (${S}) must match input depth for filter ${g.shape[2]}.`),E(Oe(e,i),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);const _=ni(b.shape,g.shape,e,i,r,a);let k;o!=null&&(k=w(o,"bias","fused conv2d"),[k]=ft(k,f),s==="NHWC"?wt(_.outShape,k.shape):(E(k.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${k.shape.length}.`),E(k.shape.length===0||k.shape[0]===_.outChannels||k.shape[0]===1,()=>`Error in fused conv2d: bias shape (${k.shape}) is not compatible with the number of output channels (${_.outChannels})`)));let P;if(c!=null){const B=c.shape;if(E(B.length<=1||B.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${B.length}.`),B.length===1)E(B[0]===1||B[0]===_.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${B}) is not compatible with the number of output channels (${_.outChannels}).`);else if(B.length===3)try{wt(B,_.outShape)}catch{const V=`Error in fused conv2d: PReLU activation weights (${B}) is not compatible with the output shape of the conv2d (${_.outShape}).`;throw Error(V)}P=w(c,"prelu weights","fused conv2d")}const L=(B,H)=>{E(s==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`);const[V,z,U,j]=H,Z=fi(B,U,l);E(ir(i),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${i}'`);const X=Qo(z.shape,Z,V,e,r),et=Q0(z,Z,V.shape,e,r),nt=[X,et];if(j!=null){const mt=di(j,Z);nt.push(mt)}return nt},D={x:b,filter:g,bias:k,preluActivationWeights:P},C={strides:e,pad:r,dataFormat:s,dilations:i,dimRoundingMode:a,activation:l,leakyreluAlpha:p};return o==null?we((H,V,z)=>{let U=I.runKernel(Da,D,C);return z([V,H,U]),v&&(U=F(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:L}})(b,g):we((H,V,z,U)=>{let j=I.runKernel(Da,D,C);return U([V,H,j,z]),v&&(j=F(j,[j.shape[1],j.shape[2],j.shape[3]])),{value:j,gradFunc:L}})(b,g,k)}const ew=$({fusedConv2d_:tw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nw(n,t,e,r,s,i=[1,1],a){let o=n;n.rank===3&&(o=F(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;l.rank===3&&(l=F(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={x:o,dy:l},p={strides:r,pad:s,dimRoundingMode:a,dilations:i,filterShape:e};return I.runKernel(Oc,c,p)}const rw=$({depthwiseConv2dNativeBackpropFilter_:nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(n,t,e,r,s,i=[1,1],a){let o=t,l=!1;t.rank===3&&(l=!0,o=F(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const c={dy:o,filter:e},p={strides:r,pad:s,dimRoundingMode:a,dilations:i,inputShape:n},f=I.runKernel(Dc,c,p);return l?F(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const iw=$({depthwiseConv2dNativeBackpropInput_:sw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function aw({x:n,filter:t,strides:e,pad:r,dataFormat:s="NHWC",dilations:i=[1,1],dimRoundingMode:a,bias:o,activation:l="linear",preluActivationWeights:c,leakyreluAlpha:p}){if(gi(I.state.gradientDepth,l)===!1){let C=ri(n,t,e,r,s,i,a);return o!=null&&(C=lt(C,o)),mi(C,l,c,p)}const f=w(n,"x","depthwiseConv2d","float32"),g=w(t,"filter","depthwiseConv2d","float32");let b=f,v=!1;f.rank===3&&(v=!0,b=F(f,[1,f.shape[0],f.shape[1],f.shape[2]])),E(b.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${b.rank}.`),E(g.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${g.rank}.`),E(b.shape[3]===g.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${b.shape[3]}) must match the inChannels dimension in filter ${g.shape[2]}.`),i==null&&(i=[1,1]),E(Oe(e,i),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),Zt("fused depthwiseConv2d",r,a);const S=ni(b.shape,g.shape,e,i,r,a,!0);let _;o!=null&&(_=w(o,"bias","fused conv2d"),[_]=ft(_,f),wt(S.outShape,_.shape));let k;c!=null&&(k=w(c,"prelu weights","fused depthwiseConv2d"));const P=(C,B)=>{E(ir(i),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${i}'`);const[H,V,z,U]=B,j=fi(C,z,l),Z=iw(V.shape,j,H,e,r,i,a),X=rw(V,j,H.shape,e,r,i,a);if(U!=null){const et=di(_,j);return[Z,X,et]}return[Z,X]},L={x:b,filter:g,bias:_,preluActivationWeights:k},D={strides:e,pad:r,dataFormat:s,dilations:i,dimRoundingMode:a,activation:l,leakyreluAlpha:p};return o==null?we((B,H,V)=>{let z=I.runKernel(Ca,L,D);return V([H,B,z]),v&&(z=F(z,[z.shape[1],z.shape[2],z.shape[3]])),{value:z,gradFunc:P}})(b,g):we((B,H,V,z)=>{let U=I.runKernel(Ca,L,D);return z([H,B,U,V]),v&&(U=F(U,[U.shape[1],U.shape[2],U.shape[3]])),{value:U,gradFunc:P}})(b,g,_)}const ow=$({fusedDepthwiseConv2d_:aw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uw({a:n,b:t,transposeA:e=!1,transposeB:r=!1,bias:s,activation:i="linear",preluActivationWeights:a,leakyreluAlpha:o=.2}){if(gi(I.state.gradientDepth,i)===!1){let j=at(n,t,e,r);return s!=null&&(j=lt(j,s)),mi(j,i,a,o)}let l=w(n,"a","fused matMul"),c=w(t,"b","fused matMul");[l,c]=ft(l,c);const p=e?l.shape[l.rank-2]:l.shape[l.rank-1],f=r?c.shape[c.rank-1]:c.shape[c.rank-2],g=e?l.shape[l.rank-1]:l.shape[l.rank-2],b=r?c.shape[c.rank-2]:c.shape[c.rank-1],v=l.shape.slice(0,-2),S=c.shape.slice(0,-2),_=Nt(v),k=Nt(S);E(p===f,()=>`Error in fused matMul: inner shapes (${p}) and (${f}) of Tensors with shapes ${l.shape} and ${c.shape} and transposeA=${e} and transposeB=${r} must match.`);const L=wt(l.shape.slice(0,-2),c.shape.slice(0,-2)).concat([g,b]),D=e?F(l,[_,p,g]):F(l,[_,g,p]),C=r?F(c,[k,b,f]):F(c,[k,f,b]);let B;s!=null&&(B=w(s,"bias","fused matMul"),[B]=ft(B,l),wt(L,B.shape));let H;a!=null&&(H=w(a,"prelu weights","fused matMul"));const V=(j,Z)=>{const[X,et,nt,mt]=Z,$t=fi(F(j,nt.shape),nt,i);let ce,jt;if(!e&&!r?(ce=at($t,et,!1,!0),jt=at(X,$t,!0,!1)):!e&&r?(ce=at($t,et,!1,!1),jt=at($t,X,!0,!1)):e&&!r?(ce=at(et,$t,!1,!0),jt=at(X,$t,!1,!1)):(ce=at(et,$t,!0,!0),jt=at($t,X,!0,!0)),s!=null){const _r=di(mt,$t);return[ce,jt,_r]}else return[ce,jt]},z={a:D,b:C,bias:B,preluActivationWeights:H},U={transposeA:e,transposeB:r,activation:i,leakyreluAlpha:o};return s==null?we((Z,X,et)=>{const nt=I.runKernel(Oa,z,U);return et([Z,X,nt]),{value:F(nt,L),gradFunc:V}})(D,C):we((Z,X,et,nt)=>{const mt=I.runKernel(Oa,z,U);return nt([Z,X,mt,et]),{value:F(mt,L),gradFunc:V}})(D,C,B)}const lw=$({fusedMatMul_:uw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cw=Object.freeze(Object.defineProperty({__proto__:null,conv2d:ew,depthwiseConv2d:ow,matMul:lw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hw(n){return pi(n,.54,.46)}const pw=$({hammingWindow_:hw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fw(n){return pi(n,.5,.5)}const $u=$({hannWindow_:fw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dw(n,t,e,r=!1,s=0){let i=0;const a=[];for(;i+t<=n.size;)a.push(J(n,i,t)),i+=e;if(r)for(;i<n.size;){const o=i+t-n.size,l=xt([J(n,i,t-o),br([o],s)]);a.push(l),i+=e}return a.length===0?Ve([],[0,t]):F(xt(a),[a.length,t])}const ku=$({frame_:dw});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mw(n,t,e,r,s=$u){r==null&&(r=_u(t));const i=ku(n,t,e),a=G(i,s(t));return hi(a,r)}const gw=$({stft_:mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yw(n,t,e,r,s="bilinear",i=0){const a=w(n,"image","cropAndResize"),o=w(t,"boxes","cropAndResize","float32"),l=w(e,"boxInd","cropAndResize","int32"),c=o.shape[0];E(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),E(o.rank===2&&o.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${o.shape}.`),E(l.rank===1&&l.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${o.shape}.`),E(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),E(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),E(s==="bilinear"||s==="nearest",()=>`method must be bilinear or nearest, but was ${s}`);const p={image:a,boxes:o,boxInd:l},f={method:s,extrapolationValue:i,cropSize:r};return I.runKernel($c,p,f)}const bw=$({cropAndResize_:yw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ww(n){const t=w(n,"image","flipLeftRight","float32");E(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const e={image:t};return I.runKernel(Kc,e,{})}const vw=$({flipLeftRight_:ww});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nw(n){const t=w(n,"image","grayscaleToRGB"),e=t.rank-1,r=t.shape[e];E(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),E(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);const s=new Array(t.rank);return s.fill(1,0,e),s[e]=3,Tn(t,s)}const Tw=$({grayscaleToRGB_:Nw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xw(n,t,e=0,r=.5){const s=w(n,"image","rotateWithOffset","float32");E(s.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`);const i={image:s},a={radians:t,fillValue:e,center:r};return I.runKernel(Dp,i,a)}const Sw=$({rotateWithOffset_:xw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function un(n,t,e,r,s,i){r==null&&(r=.5),s==null&&(s=Number.NEGATIVE_INFINITY),i==null&&(i=0);const a=n.shape[0];return e=Math.min(e,a),E(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),E(n.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`),E(n.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`),E(t.rank===1,()=>"scores must be a 1D tensor"),E(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),E(0<=i&&i<=1,()=>`softNmsSigma must be in [0, 1], but was '${i}'`),{maxOutputSize:e,iouThreshold:r,scoreThreshold:s,softNmsSigma:i}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ew(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY){const i=w(n,"boxes","nonMaxSuppression","float32"),a=w(t,"scores","nonMaxSuppression","float32"),o=un(i,a,e,r,s);e=o.maxOutputSize,r=o.iouThreshold,s=o.scoreThreshold;const l={maxOutputSize:e,iouThreshold:r,scoreThreshold:s};return I.runKernel(kh,{boxes:i,scores:a},l)}const _w=$({nonMaxSuppression_:Ew});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $w(n,t,e){const r=kw(n,t,e),s=r<0?-(r+1):r;n.splice(s,0,t)}function kw(n,t,e){return Iw(n,t,e||Aw)}function Aw(n,t){return n>t?1:n<t?-1:0}function Iw(n,t,e){let r=0,s=n.length,i=0,a=!1;for(;r<s;){i=r+(s-r>>>1);const o=e(t,n[i]);o>0?r=i+1:(s=i,a=!o)}return a?r:-r-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ow(n,t,e,r,s){return yi(n,t,e,r,s,0)}function Dw(n,t,e,r,s,i){return yi(n,t,e,r,s,0,!1,i,!0)}function Cw(n,t,e,r,s,i){return yi(n,t,e,r,s,i,!0)}function yi(n,t,e,r,s,i,a=!1,o=!1,l=!1){const c=[];for(let _=0;_<t.length;_++)t[_]>s&&c.push({score:t[_],boxIndex:_,suppressBeginIndex:0});c.sort(Ka);const p=i>0?-.5/i:0,f=[],g=[];for(;f.length<e&&c.length>0;){const _=c.pop(),{score:k,boxIndex:P,suppressBeginIndex:L}=_;if(k<s)break;let D=!1;for(let C=f.length-1;C>=L;--C){const B=Fw(n,P,f[C]);if(B>=r){D=!0;break}if(_.score=_.score*Lw(r,p,B),_.score<=s)break}_.suppressBeginIndex=f.length,D||(_.score===k?(f.push(P),g.push(_.score)):_.score>s&&$w(c,_,Ka))}const b=f.length,v=e-b;o&&v>0&&(f.push(...new Array(v).fill(0)),g.push(...new Array(v).fill(0)));const S={selectedIndices:f};return a&&(S.selectedScores=g),l&&(S.validOutputs=b),S}function Fw(n,t,e){const r=n.subarray(t*4,t*4+4),s=n.subarray(e*4,e*4+4),i=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),o=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),c=Math.min(s[0],s[2]),p=Math.min(s[1],s[3]),f=Math.max(s[0],s[2]),g=Math.max(s[1],s[3]),b=(o-i)*(l-a),v=(f-c)*(g-p);if(b<=0||v<=0)return 0;const S=Math.max(i,c),_=Math.max(a,p),k=Math.min(o,f),P=Math.min(l,g),L=Math.max(k-S,0)*Math.max(P-_,0);return L/(b+v-L)}function Lw(n,t,e){const r=Math.exp(t*e*e);return e<=n?r:0}function Ka(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Pw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY){const i=w(n,"boxes","nonMaxSuppressionAsync"),a=w(t,"scores","nonMaxSuppressionAsync"),o=un(i,a,e,r,s);e=o.maxOutputSize,r=o.iouThreshold,s=o.scoreThreshold;const l=await Promise.all([i.data(),a.data()]),c=l[0],p=l[1],{selectedIndices:f}=Ow(c,p,e,r,s);return i!==n&&i.dispose(),a!==t&&a.dispose(),It(f,"int32")}const Bw=Pw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,i=0){const a=w(n,"boxes","nonMaxSuppression"),o=w(t,"scores","nonMaxSuppression"),l=un(a,o,e,r,s,i);e=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,i=l.softNmsSigma;const c={boxes:a,scores:o},p={maxOutputSize:e,iouThreshold:r,scoreThreshold:s,softNmsSigma:i},f=I.runKernel(Ih,c,p);return{selectedIndices:f[0],selectedScores:f[1]}}const zw=$({nonMaxSuppressionWithScore_:Rw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Vw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,i=0){const a=w(n,"boxes","nonMaxSuppressionAsync"),o=w(t,"scores","nonMaxSuppressionAsync"),l=un(a,o,e,r,s,i);e=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold,i=l.softNmsSigma;const c=await Promise.all([a.data(),o.data()]),p=c[0],f=c[1],{selectedIndices:g,selectedScores:b}=Cw(p,f,e,r,s,i);return a!==n&&a.dispose(),o!==t&&o.dispose(),{selectedIndices:It(g,"int32"),selectedScores:It(b)}}const jw=Vw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,i=!1){const a=w(n,"boxes","nonMaxSuppression"),o=w(t,"scores","nonMaxSuppression"),l=un(a,o,e,r,s,null),c=l.maxOutputSize,p=l.iouThreshold,f=l.scoreThreshold,g={boxes:a,scores:o},b={maxOutputSize:c,iouThreshold:p,scoreThreshold:f,padToMaxOutputSize:i},v=I.runKernel(Ah,g,b);return{selectedIndices:v[0],validOutputs:v[1]}}const Hw=$({nonMaxSuppressionPadded_:Mw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Uw(n,t,e,r=.5,s=Number.NEGATIVE_INFINITY,i=!1){const a=w(n,"boxes","nonMaxSuppressionAsync"),o=w(t,"scores","nonMaxSuppressionAsync"),l=un(a,o,e,r,s,null),c=l.maxOutputSize,p=l.iouThreshold,f=l.scoreThreshold,[g,b]=await Promise.all([a.data(),o.data()]),{selectedIndices:v,validOutputs:S}=Dw(g,b,c,p,f,i);return a!==n&&a.dispose(),o!==t&&o.dispose(),{selectedIndices:It(v,"int32"),validOutputs:it(S,"int32")}}const Kw=Uw;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ww(n,t,e=!1,r=!1){const s=w(n,"images","resizeBilinear");E(s.rank===3||s.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`),E(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),E(r===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let i=s,a=!1;s.rank===3&&(a=!0,i=F(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const o={images:i},l={alignCorners:e,halfPixelCenters:r,size:t},c=I.runKernel(Wh,o,l);return a?F(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Gw=$({resizeBilinear_:Ww});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qw(n,t,e=!1,r=!1){const s=w(n,"images","resizeNearestNeighbor");E(s.rank===3||s.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`),E(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),E(s.dtype==="float32"||s.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),E(r===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let i=s,a=!1;s.rank===3&&(a=!0,i=F(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const o={images:i},l={alignCorners:e,halfPixelCenters:r,size:t},c=I.runKernel(Kh,o,l);return a?F(c,[c.shape[1],c.shape[2],c.shape[3]]):c}const Yw=$({resizeNearestNeighbor_:qw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xw(n,t="binary",e=!1,r=.5){const s=w(n,"image","threshold"),i=.2989,a=.587,o=.114,l=s.shape[0]*s.shape[1];let c=G(It([r]),255),p,f,g,b;if(E(s.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`),E(s.shape[2]===3||s.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`),E(s.dtype==="int32"||s.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`),E(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),s.shape[2]===3){[p,f,g]=An(s,[1,1,1],-1);const _=G(p,i),k=G(f,a),P=G(g,o);b=lt(lt(_,k),P)}else b=n;if(t==="otsu"){const _=Jo(dt(Nu(b),"int32"),oe([]),256);c=Jw(_,l)}const v=e?ai(b,c):xr(b,c);return dt(G(v,255),"int32")}function Jw(n,t){let e=It([-1]),r=It([0]),s=It([0]),i,a,o,l,c,p;for(let f=0;f<n.size-1;f++){i=J(n,0,f+1),a=J(n,f+1),c=ot(ct(i),t),p=ot(ct(a),t);const g=ct(G(i,kn(0,i.size)));o=ot(g,ct(i));const b=br(a.shape,i.size),v=lt(kn(0,a.size),b),S=G(a,v);l=ot(ct(S),ct(a));const _=tt(o,l),k=tt(o,l),P=G(c,p);s=G(G(P,_),k);const L=xr(s,r);r=sn(L,s,r),e=sn(L,It([f]),e)}return e}const Zw=$({threshold_:Xw});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qw(n,t,e="nearest",r="constant",s=0,i){const a=w(n,"image","transform","float32"),o=w(t,"transforms","transform","float32");E(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),E(o.rank===2&&(o.shape[0]===a.shape[0]||o.shape[0]===1)&&o.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),E(i==null||i.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${i}.`);const l={image:a,transforms:o},c={interpolation:e,fillMode:r,fillValue:s,outputShape:i};return I.runKernel(_p,l,c)}const tv=$({transform_:Qw});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ev(n,t,e){E(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),E(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`);const r=w(n,"a","bandPart");E(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);const s=r.shape,[i,a]=r.shape.slice(-2);if(!(t<=i))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${i}).`);if(!(e<=a))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${a}).`);t<0&&(t=i),e<0&&(e=a);const o=F(kn(0,i,1,"int32"),[-1,1]),l=kn(0,a,1,"int32"),c=tt(o,l),p=ar(ai(c,it(+t,"int32")),au(c,it(-e,"int32"))),f=an([i,a],r.dtype);return F(ve(Ge(F(r,[-1,i,a])).map(g=>sn(p,g,f))),s)}const nv=$({bandPart_:ev});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rv(n){let t;if(Array.isArray(n)){t=!1,E(n!=null&&n.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const s=n[0].shape[0];for(let i=1;i<n.length;++i)E(n[i].shape[0]===s,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[i].shape[0]} vs. ${s})`)}else t=!0,n=An(n,n.shape[0],0).map(s=>vt(s,[0]));E(n.length<=n[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`);const e=[],r=n;for(let s=0;s<n.length;++s)e.push(I.tidy(()=>{let i=r[s];if(s>0)for(let a=0;a<s;++a){const o=G(ct(G(e[a],i)),e[a]);i=tt(i,o)}return ot(i,Tr(i,"euclidean"))}));return t?ve(e,0):e}const sv=$({gramSchmidt_:rv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iv(n,t=!1){if(E(n.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`),n.rank===2)return Wa(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce((l,c)=>l*c),r=Ge(F(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),s=[],i=[];r.forEach(l=>{const[c,p]=Wa(l,t);s.push(c),i.push(p)});const a=F(ve(s,0),n.shape),o=F(ve(i,0),n.shape);return[a,o]}}function Wa(n,t=!1){return I.tidy(()=>{E(n.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`);const e=n.shape[0],r=n.shape[1];let s=ru(e),i=_e(n);const a=Ve([[1]],[1,1]);let o=_e(a);const l=e>=r?r:e;for(let c=0;c<l;++c){const p=i,f=o,g=s;[o,i,s]=I.tidy(()=>{const b=J(i,[c,c],[e-c,1]),v=Tr(b),S=J(i,[c,c],[1,1]),_=sn(xr(S,0),Ve([[-1]]),Ve([[1]])),k=tt(S,G(_,v)),P=ot(b,k);P.shape[0]===1?o=_e(a):o=xt([a,J(P,[1,0],[P.shape[0]-1,P.shape[1]])],0);const L=ge(ot(at(_,k),v)),D=J(i,[c,0],[e-c,r]),C=G(L,o),B=Ns(o);if(c===0)i=tt(D,at(C,at(B,D)));else{const z=tt(D,at(C,at(B,D)));i=xt([J(i,[0,0],[c,r]),z],0)}const H=Ns(C),V=J(s,[0,c],[e,s.shape[1]-c]);if(c===0)s=tt(V,at(at(V,o),H));else{const z=tt(V,at(at(V,o),H));s=xt([J(s,[0,0],[e,c]),z],1)}return[o,i,s]}),se([p,f,g])}return!t&&e>r&&(s=J(s,[0,0],[e,r]),i=J(i,[0,0],[r,r])),[s,i]})}const av=$({qr_:iv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ft;(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ft||(Ft={}));function ov(n,t,e=Ft.SUM_BY_NONZERO_WEIGHTS){const r=w(n,"losses","computeWeightedLoss");let s=null;t!=null&&(s=w(t,"weights","computeWeightedLoss"));const i=s==null?r:G(r,s);if(e===Ft.NONE)return i;if(e===Ft.SUM)return ct(i);if(e===Ft.MEAN){if(s==null)return or(i);{const a=r.size/s.size,o=ot(ct(i),ct(s));return a>1?ot(o,it(a)):o}}if(e===Ft.SUM_BY_NONZERO_WEIGHTS){if(s==null)return ot(ct(i),it(r.size));{const a=G(s,Re(r.shape)),o=dt(ct(mu(a,it(0))),"float32");return ot(ct(i),o)}}throw Error(`Unknown reduction: ${e}`)}const Te=$({computeWeightedLoss_:ov});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uv(n,t,e,r=Ft.SUM_BY_NONZERO_WEIGHTS){const s=w(n,"labels","absoluteDifference"),i=w(t,"predictions","absoluteDifference");let a=null;e!=null&&(a=w(e,"weights","absoluteDifference")),Wt(s.shape,i.shape,"Error in absoluteDifference: ");const o=Ut(tt(s,i));return Te(o,a,r)}const lv=$({absoluteDifference_:uv});function cv(n,t,e,r,s=Ft.SUM_BY_NONZERO_WEIGHTS){const i=w(n,"labels","cosineDistance"),a=w(t,"predictions","cosineDistance");let o=null;r!=null&&(o=w(r,"weights","cosineDistance")),Wt(i.shape,a.shape,"Error in cosineDistance: ");const l=it(1),c=tt(l,ct(G(i,a),e,!0));return Te(c,o,s)}const hv=$({cosineDistance_:cv});function pv(n,t,e,r=Ft.SUM_BY_NONZERO_WEIGHTS){let s=w(n,"labels","hingeLoss");const i=w(t,"predictions","hingeLoss");let a=null;e!=null&&(a=w(e,"weights","hingeLoss")),Wt(s.shape,i.shape,"Error in hingeLoss: ");const o=it(1);s=tt(G(it(2),s),o);const l=Sr(tt(o,G(s,i)));return Te(l,a,r)}const fv=$({hingeLoss_:pv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dv(n,t,e,r=1,s=Ft.SUM_BY_NONZERO_WEIGHTS){const i=w(n,"labels","huberLoss"),a=w(t,"predictions","huberLoss");let o=null;e!=null&&(o=w(e,"weights","huberLoss")),Wt(i.shape,a.shape,"Error in huberLoss: ");const l=it(r),c=Ut(tt(a,i)),p=du(c,l),f=tt(c,p),g=lt(G(it(.5),Nr(p)),G(l,f));return Te(g,o,s)}const mv=$({huberLoss_:dv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gv(n,t,e,r=1e-7,s=Ft.SUM_BY_NONZERO_WEIGHTS){const i=w(n,"labels","logLoss"),a=w(t,"predictions","logLoss");let o=null;e!=null&&(o=w(e,"weights","logLoss")),Wt(i.shape,a.shape,"Error in logLoss: ");const l=it(1),c=it(r),p=ge(G(i,$n(lt(a,c)))),f=G(tt(l,i),$n(lt(tt(l,a),c))),g=tt(p,f);return Te(g,o,s)}const yv=$({logLoss_:gv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bv(n,t,e,r=Ft.SUM_BY_NONZERO_WEIGHTS){const s=w(n,"labels","meanSquaredError"),i=w(t,"predictions","meanSquaredError");let a=null;e!=null&&(a=w(e,"weights","meanSquaredError")),Wt(s.shape,i.shape,"Error in meanSquaredError: ");const o=xu(s,i);return Te(o,a,r)}const wv=$({meanSquaredError_:bv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vv(n,t){const e=w(n,"labels","sigmoidCrossEntropyWithLogits"),r=w(t,"logits","sigmoidCrossEntropyWithLogits");Wt(e.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Sr(r),i=G(r,e),a=uu(be(ge(Ut(r))));return lt(tt(s,i),a)}function Nv(n,t,e,r=0,s=Ft.SUM_BY_NONZERO_WEIGHTS){let i=w(n,"multiClassLabels","sigmoidCrossEntropy");const a=w(t,"logits","sigmoidCrossEntropy");let o=null;if(e!=null&&(o=w(e,"weights","sigmoidCrossEntropy")),Wt(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){const c=it(r),p=it(1),f=it(.5);i=lt(G(i,tt(p,c)),G(f,c))}const l=vv(i,a);return Te(l,o,s)}const Tv=$({sigmoidCrossEntropy_:Nv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xv(n,t,e=-1){if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);return we((s,i,a)=>{const l=cu(i,[e],!0),c=tt(dt(i,"float32"),l);a([s,c]);const p=ge(G(c,s));return{value:ct(p,[e]),gradFunc:(b,v)=>{const[S,_]=v,k=vr(b.shape,[e]);return[G(F(b,k),tt(dt(S,"float32"),be(_))),G(F(b,k),tt(be(_),dt(S,"float32")))]}}})(n,t)}function Sv(n,t,e,r=0,s=Ft.SUM_BY_NONZERO_WEIGHTS){let i=w(n,"onehotLabels","softmaxCrossEntropy");const a=w(t,"logits","softmaxCrossEntropy");let o=null;if(e!=null&&(o=w(e,"weights","softmaxCrossEntropy")),Wt(i.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){const c=it(r),p=it(1),f=it(i.shape[1]);i=lt(G(i,tt(p,c)),ot(c,f))}const l=xv(i,a);return Te(l,o,s)}const Ev=$({softmaxCrossEntropy_:Sv});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _v(n,t,e,r){const s=w(n,"indices","sparseFillEmptyRows","int32"),i=w(t,"values","sparseFillEmptyRows"),a=w(e,"denseShape","sparseFillEmptyRows","int32"),o=w(r,"defaultValue","sparseFillEmptyRows",i.dtype);if(s.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${s.shape}`);if(i.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${i.shape}`);if(a.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${a.shape}`);if(o.rank!==0)throw new Error(`Default value should be a scalar but received shape ${o.shape}`);const l={indices:s,values:i,denseShape:a,defaultValue:o},c=I.runKernel(pp,l);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}const $v=$({sparseFillEmptyRows_:_v});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kv(n,t,e){const r=w(n,"inputIndices","sparseReshape","int32"),s=w(t,"inputShape","sparseReshape","int32"),i=w(e,"newShape","sparseReshape","int32");if(r.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(s.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(i.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${i.shape}`);const a={inputIndices:r,inputShape:s,newShape:i},o=I.runKernel(fp,a);return{outputIndices:o[0],outputShape:o[1]}}const Av=$({sparseReshape_:kv});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iv(n,t,e){const r=w(n,"data","sparseSegmentMean"),s=w(t,"indices","sparseSegmentMean","int32"),i=w(e,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${s.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${i.shape}`);const a={data:r,indices:s,segmentIds:i};return I.runKernel(dp,a)}const Ov=$({sparseSegmentMean_:Iv});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dv(n,t,e){const r=w(n,"data","sparseSegmentSum"),s=w(t,"indices","sparseSegmentSum","int32"),i=w(e,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(s.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${s.shape}`);if(i.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${i.shape}`);const a={data:r,indices:s,segmentIds:i};return I.runKernel(mp,a)}const Cv=$({sparseSegmentSum_:Dv});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fv(n,t,e,r,s,i,a,o){const l=w(n,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);const c=w(t,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const p={separator:e,nGramWidths:r,leftPad:s,rightPad:i,padWidth:a,preserveShortSequences:o},f={data:l,dataSplits:c},g=I.runKernel(wp,f,p);return{nGrams:g[0],nGramsSplits:g[1]}}const Lv=$({stringNGrams_:Fv});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pv(n,t,e=!0){const r=w(n,"input","stringSplit","string"),s=w(t,"delimiter","stringSplit","string");if(r.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(s.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const i={skipEmpty:e},a={input:r,delimiter:s},o=I.runKernel(vp,a,i);return{indices:o[0],values:o[1],shape:o[2]}}const Bv=$({stringSplit_:Pv});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rv(n,t){const e=w(n,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:e};return I.runKernel(Np,s,r)}const zv=$({stringToHashBucketFast_:Rv});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vv={fft:ci,ifft:ur,rfft:hi,irfft:Tu},jv={hammingWindow:pw,hannWindow:$u,frame:ku,stft:gw},Er={flipLeftRight:vw,grayscaleToRGB:Tw,resizeNearestNeighbor:Yw,resizeBilinear:Gw,rotateWithOffset:Sw,cropAndResize:bw,nonMaxSuppression:_w,nonMaxSuppressionAsync:Bw,nonMaxSuppressionWithScore:zw,nonMaxSuppressionWithScoreAsync:jw,nonMaxSuppressionPadded:Hw,nonMaxSuppressionPaddedAsync:Kw,threshold:Zw,transform:tv},Mv={bandPart:nv,gramSchmidt:sv,qr:av},Hv={absoluteDifference:lv,computeWeightedLoss:Te,cosineDistance:hv,hingeLoss:fv,huberLoss:mv,logLoss:yv,meanSquaredError:wv,sigmoidCrossEntropy:Tv,softmaxCrossEntropy:Ev},Uv={sparseFillEmptyRows:$v,sparseReshape:Av,sparseSegmentMean:Ov,sparseSegmentSum:Cv},Kv={stringNGrams:Lv,stringSplit:Bv,stringToHashBucketFast:zv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wv=rt();Wv.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,n=>{n&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */var Ht;(function(n){n[n.DT_INVALID=0]="DT_INVALID",n[n.DT_FLOAT=1]="DT_FLOAT",n[n.DT_DOUBLE=2]="DT_DOUBLE",n[n.DT_INT32=3]="DT_INT32",n[n.DT_UINT8=4]="DT_UINT8",n[n.DT_INT16=5]="DT_INT16",n[n.DT_INT8=6]="DT_INT8",n[n.DT_STRING=7]="DT_STRING",n[n.DT_COMPLEX64=8]="DT_COMPLEX64",n[n.DT_INT64=9]="DT_INT64",n[n.DT_BOOL=10]="DT_BOOL",n[n.DT_QINT8=11]="DT_QINT8",n[n.DT_QUINT8=12]="DT_QUINT8",n[n.DT_QINT32=13]="DT_QINT32",n[n.DT_BFLOAT16=14]="DT_BFLOAT16",n[n.DT_QINT16=15]="DT_QINT16",n[n.DT_QUINT16=16]="DT_QUINT16",n[n.DT_UINT16=17]="DT_UINT16",n[n.DT_COMPLEX128=18]="DT_COMPLEX128",n[n.DT_HALF=19]="DT_HALF",n[n.DT_RESOURCE=20]="DT_RESOURCE",n[n.DT_VARIANT=21]="DT_VARIANT",n[n.DT_UINT32=22]="DT_UINT32",n[n.DT_UINT64=23]="DT_UINT64",n[n.DT_FLOAT_REF=101]="DT_FLOAT_REF",n[n.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",n[n.DT_INT32_REF=103]="DT_INT32_REF",n[n.DT_UINT8_REF=104]="DT_UINT8_REF",n[n.DT_INT16_REF=105]="DT_INT16_REF",n[n.DT_INT8_REF=106]="DT_INT8_REF",n[n.DT_STRING_REF=107]="DT_STRING_REF",n[n.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",n[n.DT_INT64_REF=109]="DT_INT64_REF",n[n.DT_BOOL_REF=110]="DT_BOOL_REF",n[n.DT_QINT8_REF=111]="DT_QINT8_REF",n[n.DT_QUINT8_REF=112]="DT_QUINT8_REF",n[n.DT_QINT32_REF=113]="DT_QINT32_REF",n[n.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",n[n.DT_QINT16_REF=115]="DT_QINT16_REF",n[n.DT_QUINT16_REF=116]="DT_QUINT16_REF",n[n.DT_UINT16_REF=117]="DT_UINT16_REF",n[n.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",n[n.DT_HALF_REF=119]="DT_HALF_REF",n[n.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",n[n.DT_VARIANT_REF=121]="DT_VARIANT_REF",n[n.DT_UINT32_REF=122]="DT_UINT32_REF",n[n.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ht||(Ht={}));var Ga;(function(n){(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(n.CheckpointFormatVersion||(n.CheckpointFormatVersion={}))})(Ga||(Ga={}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gv={};function Au(n){return Gv[n]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m(n,t,e,r,s){const i=t.inputParams[n];if(i&&i.inputIndexStart!==void 0){const o=i.inputIndexStart,l=i.inputIndexEnd===0?void 0:i.inputIndexEnd===void 0?o+1:i.inputIndexEnd;if(i.type==="tensor")return At(t.inputNames[i.inputIndexStart],e,r,s);if(i.type==="tensors")return t.inputNames.slice(o,l).map(g=>At(g,e,r,s));const c=At(t.inputNames.slice(o)[0],e,r,s),p=c.dataSync();return i.type==="number"?p[0]:us(c.shape,p)}const a=t.attrParams[n];return a&&a.value}function At(n,t,e,r){const[s,i]=Bt(n);if(r!=null){const o=r.getHashTableHandleByName(s);if(o!=null)return o}const a=e.currentContextIds.find(o=>!!t[lr(s,o)]);return a!==void 0?t[lr(s,a)][i]:void 0}function qv(n,t,e){return t[lr(n,e.currentContextId)]}function ie(n,t){const[e,r,s]=Bt(n);return[lr(e,t&&t.currentContextId),r,s]}function lr(n,t){return t?`${n}-${t}`:n}function Bt(n){const t=n.split(":");if(t.length===1)return[n,0,void 0];const e=t[0],r=t.length===3?t[1]:void 0,s=Number(t[t.length-1]);return[e,s,r]}function Qn(n,t,e){let r=m("pad",n,t,e);if(r==="explicit"){r=m("explicitPaddings",n,t,e);const s=[[0,0],[0,0],[0,0],[0,0]];for(let i=0;i<4;i++)s[i][0]=r[i*2],s[i][1]=r[i*2+1];return s}return r}function de(n){return n.kept?n:_e(n)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yv=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Xv=Object.freeze(Object.defineProperty({__proto__:null,json:Yv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jv=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],Zv=Object.freeze(Object.defineProperty({__proto__:null,json:Jv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qv=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],t1=Object.freeze(Object.defineProperty({__proto__:null,json:Qv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const e1=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],n1=Object.freeze(Object.defineProperty({__proto__:null,json:e1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const r1=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],s1=Object.freeze(Object.defineProperty({__proto__:null,json:r1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i1=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],a1=Object.freeze(Object.defineProperty({__proto__:null,json:i1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o1=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],u1=Object.freeze(Object.defineProperty({__proto__:null,json:o1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const l1=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],c1=Object.freeze(Object.defineProperty({__proto__:null,json:l1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h1=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}],p1=Object.freeze(Object.defineProperty({__proto__:null,json:h1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f1=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],d1=Object.freeze(Object.defineProperty({__proto__:null,json:f1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const m1=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],g1=Object.freeze(Object.defineProperty({__proto__:null,json:m1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y1=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}],b1=Object.freeze(Object.defineProperty({__proto__:null,json:y1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w1=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}],v1=Object.freeze(Object.defineProperty({__proto__:null,json:w1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N1=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],T1=Object.freeze(Object.defineProperty({__proto__:null,json:N1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x1=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}],S1=Object.freeze(Object.defineProperty({__proto__:null,json:x1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const E1=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],_1=Object.freeze(Object.defineProperty({__proto__:null,json:E1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $1=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],k1=Object.freeze(Object.defineProperty({__proto__:null,json:$1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A1=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],I1=Object.freeze(Object.defineProperty({__proto__:null,json:A1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const O1=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}],D1=Object.freeze(Object.defineProperty({__proto__:null,json:O1},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qa{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[Xv,Zv,t1,n1,s1,a1,u1,c1,p1,d1,g1,b1,v1,T1,S1,_1,k1,I1,D1],e=[].concat(...t.map(r=>r.json));this.opMappers=e.reduce((r,s)=>(r[s.tfOpName]=s,r),{})}transformGraph(t,e={}){const r=t.node,s=[],i=[],a=[],o=r.reduce((S,_)=>(S[_.name]=this.mapNode(_),_.op.startsWith("Placeholder")?s.push(S[_.name]):_.op==="Const"?i.push(S[_.name]):(_.input==null||_.input.length===0)&&a.push(S[_.name]),S),{});let l=[];const c=[];let p={},f={};e!=null&&(p=this.mapSignatureEntries(e.inputs),f=this.mapSignatureEntries(e.outputs));const g=Object.keys(o);g.forEach(S=>{const _=o[S];_.inputNames.forEach((k,P)=>{const[L,,D]=ie(k),C=o[L];if(C.outputs!=null){const B=C.outputs.indexOf(D);if(B!==-1){const H=`${L}:${B}`;_.inputNames[P]=H}}_.inputs.push(C),C.children.push(_)})}),Object.keys(f).length===0?g.forEach(S=>{const _=o[S];_.children.length===0&&c.push(_)}):Object.keys(f).forEach(S=>{const[_]=ie(S),k=o[_];k!=null&&(k.signatureKey=f[S],c.push(k))}),Object.keys(p).length>0?Object.keys(p).forEach(S=>{const[_]=ie(S),k=o[_];k&&(k.signatureKey=p[S],l.push(k))}):l=s;let b={};t.library!=null&&t.library.function!=null&&(b=t.library.function.reduce((S,_)=>(S[_.signature.name]=this.mapFunction(_),S),{}));const v={nodes:o,inputs:l,outputs:c,weights:i,placeholders:s,signature:e,functions:b};return a.length>0&&(v.initNodes=a),v}mapSignatureEntries(t){return Object.keys(t||{}).reduce((e,r)=>(e[t[r].name]=r,e),{})}mapNode(t){const e=Au(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});const r={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(s=>s.startsWith("^")?s.slice(1):s),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return e.inputs!=null&&(r.inputParams=e.inputs.reduce((s,i)=>(s[i.name]={type:i.type,inputIndexStart:i.start,inputIndexEnd:i.end},s),{})),e.attrs!=null&&(r.attrParams=e.attrs.reduce((s,i)=>{const a=i.type;let o;switch(i.type){case"string":o=Cs(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=Cs(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"string[]":o=Vs(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=Vs(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"number":o=Ls(t.attr,i.tfName,i.defaultValue||0),o===void 0&&i.tfDeprecatedName&&(o=Ls(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"number[]":o=zs(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=zs(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"bool":o=Fs(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=Fs(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"bool[]":o=Ms(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=Ms(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"shape":o=Rs(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=Rs(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"shape[]":o=js(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=js(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"dtype":o=Ps(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=Ps(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"dtype[]":o=Bs(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=Bs(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"func":o=Ya(t.attr,i.tfName,i.defaultValue),o===void 0&&i.tfDeprecatedName&&(o=Ya(t.attr,i.tfDeprecatedName,i.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${i.type} for op: ${t.op}`)}return s[i.name]={value:o,type:a},s},{})),r}mapFunction(t){const e=t.nodeDef,r=[],s=[];let i={};e!=null&&(i=e.reduce((f,g)=>(f[g.name]=this.mapNode(g),g.op==="Const"&&s.push(f[g.name]),f),{}));const a=[],o=[];t.signature.inputArg.forEach(f=>{const[g]=ie(f.name),b={name:g,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:bi(f.type),type:"dtype"}},children:[]};b.signatureKey=f.name,a.push(b),i[g]=b}),Object.keys(i).forEach(f=>{const g=i[f];g.inputNames.forEach((b,v)=>{const[S,,_]=ie(b),k=i[S];if(k.outputs!=null){const P=k.outputs.indexOf(_);if(P!==-1){const L=`${S}:${P}`;g.inputNames[v]=L}}g.inputs.push(k),k.children.push(g)})});const c=t.ret;t.signature.outputArg.forEach(f=>{const[g,b]=ie(c[f.name]),v=i[g];v!=null&&(v.defaultOutput=b,o.push(v))});const p=this.mapArgsToSignature(t);return{nodes:i,inputs:a,outputs:o,weights:s,placeholders:r,signature:p}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((e,r)=>(e[r.name]=this.mapArgToTensorInfo(r),e),{}),outputs:t.signature.outputArg.reduce((e,r)=>(e[r.name]=this.mapArgToTensorInfo(r,t.ret),e),{})}}mapArgToTensorInfo(t,e){let r=t.name;return e!=null&&(r=e[r]),{name:r,dtype:t.type}}}function C1(n){const t=rt().global;if(typeof t.atob<"u")return t.atob(n);if(typeof Buffer<"u")return new Buffer(n,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Iu(n,t){const e=Array.isArray(n)?String.fromCharCode.apply(null,n):C1(n);return t?e:e.toLowerCase()}function Cs(n,t,e,r=!1){const s=n[t];return s!=null?Iu(s.s,r):e}function Fs(n,t,e){const r=n[t];return r?r.b:e}function Ls(n,t,e){const r=n[t]||{},s=r.i!=null?r.i:r.f!=null?r.f:e;return typeof s=="number"?s:parseInt(s,10)}function bi(n){switch(typeof n=="string"&&(n=Ht[n]),n){case Ht.DT_FLOAT:case Ht.DT_HALF:return"float32";case Ht.DT_INT32:case Ht.DT_INT64:case Ht.DT_INT8:case Ht.DT_UINT8:return"int32";case Ht.DT_BOOL:return"bool";case Ht.DT_DOUBLE:return"float32";case Ht.DT_STRING:return"string";default:return null}}function Ya(n,t,e){const r=n[t];return r&&r.func?r.func.name:e}function Ps(n,t,e){const r=n[t];return r&&r.type?bi(r.type):e}function Bs(n,t,e){const r=n[t];return r&&r.list&&r.list.type?r.list.type.map(s=>bi(s)):e}function Ou(n){if(!n.unknownRank)return n.dim!=null?n.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function Rs(n,t,e){const r=n[t];return r&&r.shape?Ou(r.shape):e}function zs(n,t,e){const r=n[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(s=>typeof s=="number"?s:parseInt(s,10)):e}function Vs(n,t,e,r=!1){const s=n[t];return s&&s.list&&s.list.s?s.list.s.map(i=>Iu(i,r)):e}function js(n,t,e){const r=n[t];return r&&r.list&&r.list.shape?r.list.shape.map(s=>Ou(s)):e}function Ms(n,t,e){const r=n[t];return r&&r.list&&r.list.b?r.list.b:e}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class F1{constructor(t,e,r){this.node=t,this.tensorMap=e,this.context=r,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(s=>this.getInput(s)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((s,i)=>(s[i]=this.getAttr(i),s),{}))}getInput(t){return At(t,this.tensorMap,this.context)}getAttr(t,e){const r=this.node.rawAttrs[t];if(r.tensor!=null)return At(t,this.tensorMap,this.context);if(r.i!=null||r.f!=null)return Ls(this.node.rawAttrs,t,e);if(r.s!=null)return Cs(this.node.rawAttrs,t,e);if(r.b!=null)return Fs(this.node.rawAttrs,t,e);if(r.shape!=null)return Rs(this.node.rawAttrs,t,e);if(r.type!=null)return Ps(this.node.rawAttrs,t,e);if(r.list!=null){if(r.list.i!=null||r.list.f!=null)return zs(this.node.rawAttrs,t,e);if(r.list.s!=null)return Vs(this.node.rawAttrs,t,e);if(r.list.shape!=null)return js(this.node.rawAttrs,t,e);if(r.list.b!=null)return Ms(this.node.rawAttrs,t,e);if(r.list.type!=null)return Bs(this.node.rawAttrs,t,e)}return e}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _t=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:ko,abs:Ut,acos:gd,acosh:bd,add:lt,addN:vd,all:Td,any:Sd,argMax:_d,argMin:kd,asin:Id,asinh:Dd,atan:Fd,atan2:Pd,atanh:Rd,avgPool:Yo,avgPool3d:Wd,basicLSTMCell:Zd,batchNorm:yr,batchNorm2d:rm,batchNorm3d:im,batchNorm4d:om,batchToSpaceND:Xo,bincount:Jo,booleanMaskAsync:B0,broadcastArgs:cm,broadcastTo:Zn,buffer:ye,cast:dt,ceil:fm,clipByValue:Zo,clone:_e,complex:ke,concat:xt,concat1d:gm,concat2d:bm,concat3d:vm,concat4d:Tm,conv1d:Em,conv2d:wr,conv2dTranspose:km,conv3d:Im,conv3dTranspose:Fm,cos:Pm,cosh:Rm,cosineWindow:pi,cumprod:Vm,cumsum:Mm,denseBincount:Um,depthToSpace:Wm,depthwiseConv2d:ri,diag:Ym,dilation2d:Jm,div:ot,divNoNan:ng,dot:sg,dropout:Y0,einsum:ag,elu:eu,enclosingPowerOfTwo:_u,equal:tu,erf:lg,euclideanNorm:wg,exp:be,expandDims:fe,expm1:xg,eye:ru,fft:ci,fill:br,floor:su,floorDiv:qo,fused:cw,gather:iu,gatherND:W0,greater:xr,greaterEqual:au,ifft:ur,imag:gr,image:Er,inTopKAsync:J0,irfft:Tu,isFinite:Og,isInf:Cg,isNaN:Lg,leakyRelu:ou,less:Rg,lessEqual:ai,linalg:Mv,linspace:Vg,localResponseNormalization:Mg,log:$n,log1p:uu,logSigmoid:Gg,logSoftmax:Xg,logSumExp:cu,logicalAnd:ar,logicalNot:hu,logicalOr:pu,logicalXor:ny,losses:Hv,lowerBound:sy,matMul:at,max:en,maxPool:fu,maxPool3d:oy,maxPoolWithArgmax:ly,maximum:hy,mean:or,meshgrid:fy,min:Ss,minimum:du,mirrorPad:gy,mod:by,moments:vy,movingAverage:z0,mul:G,multiRNNCell:Ty,multinomial:Sy,neg:ge,norm:Tr,notEqual:mu,oneHot:Qf,ones:Re,onesLike:$y,op:$,outerProduct:Ay,pad:Dn,pad1d:Dy,pad2d:Fy,pad3d:Py,pad4d:Ry,pool:Hy,pow:ii,prelu:yu,print:Vo,prod:Wy,raggedGather:qy,raggedTensorToTensor:Xy,rand:Zy,randomGamma:bb,randomNormal:bu,randomStandardNormal:Nb,randomUniform:wu,range:kn,real:_n,reciprocal:Sb,relu:Sr,relu6:vu,reshape:F,reverse:Ue,reverse1d:Ab,reverse2d:Ob,reverse3d:Cb,reverse4d:Lb,rfft:hi,round:Nu,rsqrt:Rb,scalar:it,scatterND:j0,searchSorted:oi,selu:Vb,separableConv2d:Mb,setdiff1dAsync:Ub,sigmoid:ze,sign:Wb,signal:jv,sin:qb,sinh:Xb,slice:J,slice1d:Zb,slice2d:t0,slice3d:n0,slice4d:s0,softmax:a0,softplus:lu,spaceToBatchND:gu,sparse:Uv,sparseToDense:U0,spectral:Vv,split:An,sqrt:Es,square:Nr,squaredDifference:xu,squeeze:vt,stack:ve,step:Su,stridedSlice:y0,string:Kv,sub:tt,sum:ct,tan:w0,tanh:xs,tensor:oe,tensor1d:It,tensor2d:Ve,tensor3d:Go,tensor4d:v0,tensor5d:N0,tensor6d:T0,tile:Tn,topk:S0,transpose:Ns,truncatedNormal:_0,unique:k0,unsortedSegmentSum:I0,unstack:Ge,upperBound:D0,variable:C0,where:sn,whereAsync:Eu,zeros:an,zerosLike:si},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L1=(n,t,e,r=_t)=>{switch(n.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(m("a",n,t,e),m("b",n,t,e))];case"AddN":return[r.addN(m("tensors",n,t,e))];case"FloorMod":case"Mod":return[r.mod(m("a",n,t,e),m("b",n,t,e))];case"Mul":return[r.mul(m("a",n,t,e),m("b",n,t,e))];case"RealDiv":case"Div":return[r.div(m("a",n,t,e),m("b",n,t,e))];case"DivNoNan":return[r.divNoNan(m("a",n,t,e),m("b",n,t,e))];case"FloorDiv":return[r.floorDiv(m("a",n,t,e),m("b",n,t,e))];case"Sub":return[r.sub(m("a",n,t,e),m("b",n,t,e))];case"Minimum":return[r.minimum(m("a",n,t,e),m("b",n,t,e))];case"Maximum":return[r.maximum(m("a",n,t,e),m("b",n,t,e))];case"Pow":return[r.pow(m("a",n,t,e),m("b",n,t,e))];case"SquaredDifference":return[r.squaredDifference(m("a",n,t,e),m("b",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const P1=(n,t,e,r=_t)=>{switch(n.op){case"Abs":case"ComplexAbs":return[r.abs(m("x",n,t,e))];case"Acos":return[r.acos(m("x",n,t,e))];case"Acosh":return[r.acosh(m("x",n,t,e))];case"Asin":return[r.asin(m("x",n,t,e))];case"Asinh":return[r.asinh(m("x",n,t,e))];case"Atan":return[r.atan(m("x",n,t,e))];case"Atan2":return[r.atan2(m("x",n,t,e),m("y",n,t,e))];case"Atanh":return[r.atanh(m("x",n,t,e))];case"Ceil":return[r.ceil(m("x",n,t,e))];case"Complex":return[r.complex(m("real",n,t,e),m("imag",n,t,e))];case"Cos":return[r.cos(m("x",n,t,e))];case"Cosh":return[r.cosh(m("x",n,t,e))];case"Elu":return[r.elu(m("x",n,t,e))];case"Erf":return[r.erf(m("x",n,t,e))];case"Exp":return[r.exp(m("x",n,t,e))];case"Expm1":return[r.expm1(m("x",n,t,e))];case"Floor":return[r.floor(m("x",n,t,e))];case"Log":return[r.log(m("x",n,t,e))];case"Log1p":return[r.log1p(m("x",n,t,e))];case"Imag":return[r.imag(m("x",n,t,e))];case"Neg":return[r.neg(m("x",n,t,e))];case"Reciprocal":return[r.reciprocal(m("x",n,t,e))];case"Real":return[r.real(m("x",n,t,e))];case"Relu":return[r.relu(m("x",n,t,e))];case"Round":return[r.round(m("x",n,t,e))];case"Selu":return[r.selu(m("x",n,t,e))];case"Sigmoid":return[r.sigmoid(m("x",n,t,e))];case"Sin":return[r.sin(m("x",n,t,e))];case"Sign":return[r.sign(m("x",n,t,e))];case"Sinh":return[r.sinh(m("x",n,t,e))];case"Softplus":return[r.softplus(m("x",n,t,e))];case"Sqrt":return[r.sqrt(m("x",n,t,e))];case"Square":return[r.square(m("x",n,t,e))];case"Tanh":return[r.tanh(m("x",n,t,e))];case"Tan":return[r.tan(m("x",n,t,e))];case"ClipByValue":return[r.clipByValue(m("x",n,t,e),m("clipValueMin",n,t,e),m("clipValueMax",n,t,e))];case"Relu6":return[r.relu6(m("x",n,t,e))];case"Rsqrt":return[r.rsqrt(At(n.inputNames[0],t,e))];case"Prod":return[r.prod(m("x",n,t,e),m("axes",n,t,e))];case"LeakyRelu":return[r.leakyRelu(m("x",n,t,e),m("alpha",n,t,e))];case"Prelu":return[r.prelu(m("x",n,t,e),m("alpha",n,t,e))];case"IsNan":return[r.isNaN(At(n.inputNames[0],t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kt(n,t,e=""){if(!(typeof n=="number"||typeof t=="number")){E(n.length===t.length,()=>e+` Shapes ${n} and ${t} must match`);for(let r=0;r<n.length;r++){const s=n[r],i=t[r];E(s<0||i<0||s===i,()=>e+` Shapes ${n} and ${t} must match`)}}}function Xa(n){return!(typeof n=="number"||n.some(t=>t<0))}function wn(n,t,e){let r=Hs(n,e);const s=!Xa(r);if(s&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&t.forEach(i=>{r=Hs(i.shape,r)}),!Xa(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Hs(n,t){if(typeof n=="number")return t;if(typeof t=="number")return n;if(n.length!==t.length)throw new Error(`Incompatible ranks during merge: ${n} vs. ${t}`);const e=[];for(let r=0;r<n.length;++r){const s=n[r],i=t[r];if(s>=0&&i>=0&&s!==i)throw new Error(`Incompatible shape during merge: ${n} vs. ${t}`);e[r]=s>=0?s:i}return e}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class B1{constructor(t,e,r,s,i,a,o){this.name=t,this.dtype=e,this.maxSize=r,this.elementShape=s,this.identicalElementShapes=i,this.dynamicSize=a,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=it(0),Ee(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.tensor.id))&&e.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map(e=>this.read(e))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const r=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=e.shape),Kt(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),r.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(r.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);r.tensor=e,Ee(e),r.written=!0,this.tensors[t]=r}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach((r,s)=>this.write(r,e[s]))}gather(t,e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let s=0;s<this.size();s++)t.push(s)}if(t.length===0)return oe([],[0].concat(this.elementShape));const r=this.readMany(t);return Kt(this.elementShape,r[0].shape,"TensorArray shape mismatch: "),ve(r,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return oe([],[0].concat(this.elementShape));const e=[];for(let s=0;s<this.size();s++)e.push(s);const r=this.readMany(e);return Kt(this.elementShape,r[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${r[0].shape})`),xt(r,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const r=Math.max(...t);if(!this.dynamicSize&&r>=this.maxSize)throw new Error(`Max index must be < array size (${r}  vs. ${this.maxSize})`);this.writeMany(t,Ge(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let r=0;const s=t.map(l=>(r+=l,r));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const i=r===0?0:e.size/r,a=[];Tt(()=>{e=F(e,[1,r,i]);for(let l=0;l<t.length;++l){const p=[0,l===0?0:s[l-1],0],f=[1,t[l],i];a[l]=F(J(e,p,f),this.elementShape)}return a});const o=[];for(let l=0;l<t.length;l++)o[l]=l;this.writeMany(o,a)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ke{constructor(t,e,r,s=-1){this.tensors=t,this.elementShape=e,this.elementDtype=r,t?.forEach(i=>{if(r!==i.dtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${i.dtype}`);Kt(e,i.shape,"TensorList shape mismatch: "),Ee(i)}),this.idTensor=it(0),this.maxNumElements=s,Ee(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Ke([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.id))&&e.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,r=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(r!==-1&&this.tensors.length!==r)throw new Error(`Operation expected a list with ${r} elements but got a list with ${this.tensors.length} elements.`);Kt(t,this.elementShape,"TensorList shape mismatch: ");const s=wn(this.elementShape,this.tensors,t);return Tt(()=>{const i=this.tensors.map(a=>F(a,s));return ve(i,0)})}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");const r=wn(this.elementShape,this.tensors,t),s=this.tensors.pop();return s.kept=!1,Kt(s.shape,t,"TensorList shape mismatch: "),F(s,r)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(Kt(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Ee(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const e=new Ke([],this.elementShape,this.elementDtype,this.maxNumElements);e.tensors.length=t;for(let r=0;r<Math.min(this.tensors.length,t);++r)e.tensors[r]=this.tensors[r];return e}getItem(t,e,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);Kt(this.tensors[t].shape,e,"TensorList shape mismatch: ");const s=wn(this.elementShape,this.tensors,e);return F(this.tensors[t],s)}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);Kt(this.elementShape,e.shape,"TensorList shape mismatch: "),Ee(e),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=e}gather(t,e,r){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);Kt(this.elementShape,r,"TensorList shape mismatch: "),t=t.slice(0,this.size());const s=wn(this.elementShape,this.tensors,r);return t.length===0?oe([],[0].concat(s)):Tt(()=>{const i=t.map(a=>F(this.tensors[a],s));return ve(i,0)})}concat(t,e){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);Kt(this.elementShape,e,"TensorList shape mismatch: ");const r=wn(this.elementShape,this.tensors,e);return this.size()===0?oe([],[0].concat(r)):Tt(()=>{const s=this.tensors.map(i=>F(i,r));return xt(s,0)})}}function R1(n,t,e){const r=n.dtype;if(n.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${n.shape}`);if(n.dtype!==e)throw new Error(`Invalid data types; op elements ${n.dtype}, but list elements ${e}`);const s=n.shape.slice(1);Kt(s,t,"TensorList shape mismatch: ");const i=Ge(n);return new Ke(i,t,r)}function z1(n,t,e,r){return new Ke([],n,t,r)}function V1(n,t,e,r){if(t.length!==n.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${n.shape[0]}`);const s=Math.max(...t);if(r!=null&&r!==-1&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const i=new Ke([],e,n.dtype,r),a=Ge(n,0);return t.forEach((o,l)=>{i.setItem(o,a[l])}),i}function j1(n,t,e){let r=0;const s=t.map(p=>(r+=p,r));if(r!==n.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${n.shape}`);const i=n.shape.slice(1),a=Hs(i,e),o=r===0?0:n.size/r,l=Tt(()=>{const p=[];n=F(n,[1,r,o]);for(let f=0;f<t.length;++f){const b=[0,f===0?0:s[f-1],0],v=[1,t[f],o];p[f]=F(J(n,b,v),a)}return n.dispose(),p}),c=new Ke([],e,n.dtype,t.length);for(let p=0;p<l.length;p++)c.setItem(p,l[p]);return c}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const M1=async(n,t,e)=>{switch(n.op){case"If":case"StatelessIf":{const r=m("thenBranch",n,t,e),s=m("elseBranch",n,t,e),i=m("cond",n,t,e),a=m("args",n,t,e);return(await i.data())[0]?e.functionMap[r].executeFunctionAsync(a,e.tensorArrayMap,e.tensorListMap):e.functionMap[s].executeFunctionAsync(a,e.tensorArrayMap,e.tensorListMap)}case"While":case"StatelessWhile":{const r=m("body",n,t,e),s=m("cond",n,t,e),i=m("args",n,t,e),a=await e.functionMap[s].executeFunctionAsync(i,e.tensorArrayMap,e.tensorListMap),o=i.map(p=>p.id);let l=await a[0].data();a.forEach(p=>{!p.kept&&o.indexOf(p.id)===-1&&p.dispose()});let c=i;for(;l[0];){const p=c;c=await e.functionMap[r].executeFunctionAsync(c,e.tensorArrayMap,e.tensorListMap);const f=c.map(b=>b.id);p.forEach(b=>{!b.kept&&o.indexOf(b.id)===-1&&f.indexOf(b.id)===-1&&b.dispose()});const g=await e.functionMap[s].executeFunctionAsync(c,e.tensorArrayMap,e.tensorListMap);l=await g[0].data(),g.forEach(b=>{!b.kept&&o.indexOf(b.id)===-1&&f.indexOf(b.id)===-1&&b.dispose()})}return c}case"LoopCond":{const r=m("pred",n,t,e);return[de(r)]}case"Switch":{const r=m("pred",n,t,e);let s=m("data",n,t,e);return s.kept||(s=de(s)),(await r.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const r=n.inputNames.find(s=>At(s,t,e)!==void 0);if(r){const s=At(r,t,e);return[de(s)]}return}case"Enter":{const r=m("frameName",n,t,e),s=m("tensor",n,t,e);return e.enterFrame(r),[de(s)]}case"Exit":{const r=m("tensor",n,t,e);return e.exitFrame(),[de(r)]}case"NextIteration":{const r=m("tensor",n,t,e);return e.nextIteration(),[de(r)]}case"TensorArrayV3":{const r=m("size",n,t,e),s=m("dtype",n,t,e),i=m("elementShape",n,t,e),a=m("dynamicSize",n,t,e),o=m("clearAfterRead",n,t,e),l=m("identicalElementShapes",n,t,e),c=m("name",n,t,e),p=new B1(c,s,r,i,l,a,o);return e.addTensorArray(p),[p.idTensor,it(1)]}case"TensorArrayWriteV3":{const r=m("tensorArrayId",n,t,e),s=m("index",n,t,e),i=m("tensor",n,t,e),a=e.getTensorArray(r.id);return a.write(s,i),[a.idTensor]}case"TensorArrayReadV3":{const r=m("tensorArrayId",n,t,e),s=m("index",n,t,e);return[e.getTensorArray(r.id).read(s)]}case"TensorArrayGatherV3":{const r=m("tensorArrayId",n,t,e),s=m("indices",n,t,e),i=m("dtype",n,t,e);return[e.getTensorArray(r.id).gather(s,i)]}case"TensorArrayScatterV3":{const r=m("tensorArrayId",n,t,e),s=m("indices",n,t,e),i=m("tensor",n,t,e),a=e.getTensorArray(r.id);return a.scatter(s,i),[a.idTensor]}case"TensorArrayConcatV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id),i=m("dtype",n,t,e);return[s.concat(i)]}case"TensorArraySplitV3":{const r=m("tensorArrayId",n,t,e),s=m("tensor",n,t,e),i=m("lengths",n,t,e),a=e.getTensorArray(r.id);return a.split(i,s),[a.idTensor]}case"TensorArraySizeV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id);return[it(s.size(),"int32")]}case"TensorArrayCloseV3":{const r=m("tensorArrayId",n,t,e),s=e.getTensorArray(r.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const r=m("tensorListId",n,t,e),s=m("index",n,t,e),i=m("tensor",n,t,e),a=e.getTensorList(r.id);return a.setItem(s,i),[a.idTensor]}case"TensorListGetItem":{const r=m("tensorListId",n,t,e),s=m("index",n,t,e),i=m("elementShape",n,t,e),a=m("elementDType",n,t,e);return[e.getTensorList(r.id).getItem(s,i,a)]}case"TensorListScatterV2":case"TensorListScatter":{const r=m("indices",n,t,e),s=m("tensor",n,t,e),i=m("elementShape",n,t,e),a=m("numElements",n,t,e),o=V1(s,r,i,a);return e.addTensorList(o),[o.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const r=m("elementShape",n,t,e),s=m("elementDType",n,t,e);let i;n.op==="TensorListReserve"?i="numElements":i="maxNumElements";const a=m(i,n,t,e),o=n.op==="TensorListReserve"?-1:a,l=z1(r,s,a,o);return e.addTensorList(l),[l.idTensor]}case"TensorListGather":{const r=m("tensorListId",n,t,e),s=m("indices",n,t,e),i=m("elementShape",n,t,e),a=m("elementDType",n,t,e);return[e.getTensorList(r.id).gather(s,a,i)]}case"TensorListStack":{const r=m("tensorListId",n,t,e),s=m("elementShape",n,t,e),i=m("elementDType",n,t,e),a=m("numElements",n,t,e);return[e.getTensorList(r.id).stack(s,i,a)]}case"TensorListFromTensor":{const r=m("tensor",n,t,e),s=m("elementShape",n,t,e),i=m("elementDType",n,t,e),a=R1(r,s,i);return e.addTensorList(a),[a.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const r=m("tensorListId",n,t,e),s=e.getTensorList(r.id),i=m("dtype",n,t,e),a=m("elementShape",n,t,e);return[s.concat(i,a)]}case"TensorListPushBack":{const r=m("tensorListId",n,t,e),s=m("tensor",n,t,e),i=e.getTensorList(r.id);return i.pushBack(s),[i.idTensor]}case"TensorListPopBack":{const r=m("tensorListId",n,t,e),s=m("elementShape",n,t,e),i=m("elementDType",n,t,e);return[e.getTensorList(r.id).popBack(s,i)]}case"TensorListSplit":{const r=m("tensor",n,t,e),s=m("elementShape",n,t,e),i=m("lengths",n,t,e),a=j1(r,i,s);return e.addTensorList(a),[a.idTensor]}case"TensorListLength":{const r=m("tensorListId",n,t,e),s=e.getTensorList(r.id);return[it(s.size(),"int32")]}case"TensorListResize":{const r=m("tensorListId",n,t,e),s=m("size",n,t,e),a=e.getTensorList(r.id).resize(s);return e.addTensorList(a),[a.idTensor]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ja(n,t,e){const[r,s]=m("fusedOps",n,t,e),i=r==="biasadd",a=!i,o=s==="prelu",l=r==="fusedbatchnorm",c=m("numArgs",n,t,e);if(i){if(o&&c!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&i&&c!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(l)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const p=m("strides",n,t,e),f=Qn(n,t,e),g=m("dataFormat",n,t,e).toUpperCase(),b=m("dilations",n,t,e);let[v,S]=m("args",n,t,e);a&&(S=v,v=void 0);const _=m("leakyreluAlpha",n,t,e);return{stride:p,pad:f,dataFormat:g,dilations:b,biasArg:v,preluArg:S,activationFunc:s,leakyreluAlpha:_}}const H1=(n,t,e,r=_t)=>{switch(n.op){case"Conv1D":{const s=m("stride",n,t,e),i=m("pad",n,t,e),a=m("dataFormat",n,t,e).toUpperCase(),o=m("dilation",n,t,e);return[r.conv1d(m("x",n,t,e),m("filter",n,t,e),s,i,a,o)]}case"Conv2D":{const s=m("strides",n,t,e),i=Qn(n,t,e),a=m("dataFormat",n,t,e).toUpperCase(),o=m("dilations",n,t,e);return[r.conv2d(m("x",n,t,e),m("filter",n,t,e),[s[1],s[2]],i,a,[o[1],o[2]])]}case"_FusedConv2D":{const{stride:s,pad:i,dataFormat:a,dilations:o,biasArg:l,preluArg:c,activationFunc:p,leakyreluAlpha:f}=Ja(n,t,e);return[r.fused.conv2d({x:m("x",n,t,e),filter:m("filter",n,t,e),strides:[s[1],s[2]],pad:i,dataFormat:a,dilations:[o[1],o[2]],bias:l,activation:p,preluActivationWeights:c,leakyreluAlpha:f})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:i,dataFormat:a,dilations:o,biasArg:l,preluArg:c,activationFunc:p,leakyreluAlpha:f}=Ja(n,t,e);return[r.fused.depthwiseConv2d({x:m("x",n,t,e),filter:m("filter",n,t,e),strides:[s[1],s[2]],pad:i,dataFormat:a,dilations:[o[1],o[2]],bias:l,activation:p,preluActivationWeights:c,leakyreluAlpha:f})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=m("outputShape",n,t,e),i=m("strides",n,t,e),a=Qn(n,t,e);return[r.conv2dTranspose(m("x",n,t,e),m("filter",n,t,e),s,[i[1],i[2]],a)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=m("strides",n,t,e),i=Qn(n,t,e),a=m("dilations",n,t,e),o=m("dataFormat",n,t,e).toUpperCase();return[r.depthwiseConv2d(m("input",n,t,e),m("filter",n,t,e),[s[1],s[2]],i,o,[a[1],a[2]])]}case"Conv3D":{const s=m("strides",n,t,e),i=m("pad",n,t,e),a=m("dataFormat",n,t,e).toUpperCase(),o=m("dilations",n,t,e);return[r.conv3d(m("x",n,t,e),m("filter",n,t,e),[s[1],s[2],s[3]],i,a,[o[1],o[2],o[3]])]}case"AvgPool":{const s=m("strides",n,t,e),i=m("pad",n,t,e),a=m("kernelSize",n,t,e);return[r.avgPool(m("x",n,t,e),[a[1],a[2]],[s[1],s[2]],i)]}case"MaxPool":{const s=m("strides",n,t,e),i=m("pad",n,t,e),a=m("kernelSize",n,t,e);return[r.maxPool(m("x",n,t,e),[a[1],a[2]],[s[1],s[2]],i)]}case"MaxPoolWithArgmax":{const s=m("strides",n,t,e),i=m("pad",n,t,e),a=m("kernelSize",n,t,e),o=m("includeBatchInIndex",n,t,e),{result:l,indexes:c}=r.maxPoolWithArgmax(m("x",n,t,e),[a[1],a[2]],[s[1],s[2]],i,o);return[l,c]}case"AvgPool3D":{const s=m("strides",n,t,e),i=m("pad",n,t,e),a=m("kernelSize",n,t,e);return[r.avgPool3d(m("x",n,t,e),[a[1],a[2],a[3]],[s[1],s[2],s[3]],i)]}case"MaxPool3D":{const s=m("strides",n,t,e),i=m("pad",n,t,e),a=m("kernelSize",n,t,e);return[r.maxPool3d(m("x",n,t,e),[a[1],a[2],a[3]],[s[1],s[2],s[3]],i)]}case"Dilation2D":{const s=m("strides",n,t,e),i=m("pad",n,t,e),a=m("dilations",n,t,e),o=s[1],l=s[2],c=a[1],p=a[2];return[r.dilation2d(m("x",n,t,e),m("filter",n,t,e),[o,l],i,[c,p],"NHWC")]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U1=(n,t,e,r=_t)=>{switch(n.op){case"Fill":{const s=m("shape",n,t,e),i=m("dtype",n,t,e),a=m("value",n,t,e);return[r.fill(s,a,i)]}case"LinSpace":{const s=m("start",n,t,e),i=m("stop",n,t,e),a=m("num",n,t,e);return[r.linspace(s,i,a)]}case"Multinomial":{const s=m("logits",n,t,e),i=m("numSamples",n,t,e),a=m("seed",n,t,e);return[r.multinomial(s,i,a)]}case"OneHot":{const s=m("indices",n,t,e),i=m("depth",n,t,e),a=m("onValue",n,t,e),o=m("offValue",n,t,e),l=m("dtype",n,t,e);return[r.oneHot(s,i,a,o,l)]}case"Ones":return[r.ones(m("shape",n,t,e),m("dtype",n,t,e))];case"OnesLike":return[r.onesLike(m("x",n,t,e))];case"RandomStandardNormal":return[r.randomStandardNormal(m("shape",n,t,e),m("dtype",n,t,e),m("seed",n,t,e))];case"RandomUniform":return[r.randomUniform(m("shape",n,t,e),m("minval",n,t,e),m("maxval",n,t,e),m("dtype",n,t,e))];case"Range":{const s=m("start",n,t,e),i=m("stop",n,t,e),a=m("step",n,t,e);return[r.range(s,i,a,m("dtype",n,t,e))]}case"TruncatedNormal":{const s=m("shape",n,t,e),i=m("mean",n,t,e),a=m("stdDev",n,t,e),o=m("seed",n,t,e);return[r.truncatedNormal(s,i,a,m("dtype",n,t,e),o)]}case"Zeros":return[r.zeros(m("shape",n,t,e),m("dtype",n,t,e))];case"ZerosLike":return[r.zerosLike(m("x",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function es(n,t,e){const r=m("boxes",n,t,e),s=m("scores",n,t,e),i=m("maxOutputSize",n,t,e),a=m("iouThreshold",n,t,e),o=m("scoreThreshold",n,t,e),l=m("softNmsSigma",n,t,e);return{boxes:r,scores:s,maxOutputSize:i,iouThreshold:a,scoreThreshold:o,softNmsSigma:l}}const K1=async(n,t,e,r,s=_t)=>{switch(n.op){case"NonMaxSuppressionV5":{const{boxes:i,scores:a,maxOutputSize:o,iouThreshold:l,scoreThreshold:c,softNmsSigma:p}=es(n,t,e),f=await s.image.nonMaxSuppressionWithScoreAsync(i,a,o,l,c,p);return[f.selectedIndices,f.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:i,scores:a,maxOutputSize:o,iouThreshold:l,scoreThreshold:c}=es(n,t,e),p=m("padToMaxOutputSize",n,t,e),f=await s.image.nonMaxSuppressionPaddedAsync(i,a,o,l,c,p);return[f.selectedIndices,f.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:i,scores:a,maxOutputSize:o,iouThreshold:l,scoreThreshold:c}=es(n,t,e);return[await s.image.nonMaxSuppressionAsync(i,a,o,l,c)]}case"Where":{const i=s.cast(m("condition",n,t,e),"bool"),a=[await s.whereAsync(i)];return i.dispose(),a}case"ListDiff":return s.setdiff1dAsync(m("x",n,t,e),m("y",n,t,e));default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const W1=(n,t,e,r=_t)=>{switch(n.op){case"LowerBound":{const s=m("sortedSequence",n,t,e),i=m("values",n,t,e);return[r.lowerBound(s,i)]}case"TopKV2":{const s=m("x",n,t,e),i=m("k",n,t,e),a=m("sorted",n,t,e),o=r.topk(s,i,a);return[o.values,o.indices]}case"UpperBound":{const s=m("sortedSequence",n,t,e),i=m("values",n,t,e);return[r.upperBound(s,i)]}case"Unique":{const s=m("x",n,t,e),i=r.unique(s);return[i.values,i.indices]}case"UniqueV2":{const s=m("x",n,t,e),i=m("axis",n,t,e),a=r.unique(s,i);return[a.values,a.indices]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G1=(n,t,e,r=_t)=>{switch(n.op){case"Const":return t[n.name];case"PlaceholderWithDefault":const s=m("default",n,t,e);return[At(n.name,t,e)||s];case"Placeholder":return[At(n.name,t,e)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{const p=m("x",n,t,e);return[de(p)]}case"IdentityN":return m("x",n,t,e).map(p=>de(p));case"Snapshot":const i=m("x",n,t,e);return[de(i)];case"Shape":return[r.tensor1d(m("x",n,t,e).shape,"int32")];case"ShapeN":return m("x",n,t,e).map(p=>r.tensor1d(p.shape));case"Size":return[r.scalar(m("x",n,t,e).size,"int32")];case"Rank":return[r.scalar(m("x",n,t,e).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const a=m("x",n,t,e),o=m("data",n,t,e),l=m("message",n,t,e),c=m("summarize",n,t,e);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(l);for(let p=0;p<o.length;p++)console.log(Array.prototype.slice.call(o[p].dataSync()).slice(0,c));return[a];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class q1{constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=it(0),this.tensorMap=new Map,Ee(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return it(this.size(),"int32")}async import(t,e){this.checkKeyAndValueTensor(t,e);const r=await t.data();return this.tensorMap.forEach(s=>s.dispose()),this.tensorMap.clear(),Tt(()=>{const s=Ge(e),i=r.length,a=s.length;E(i===a,()=>`The number of elements doesn't match, keys has ${i} elements, the values has ${a} elements.`);for(let o=0;o<i;o++){const l=r[o],c=s[o];Ee(c),this.tensorMap.set(l,c)}return this.handle})}async find(t,e){this.checkKeyAndValueTensor(t,e);const r=await t.data();return Tt(()=>{const s=[];for(let i=0;i<r.length;i++){const a=r[i],o=this.findWithDefault(a,e);s.push(o)}return ve(s)})}findWithDefault(t,e){const r=this.tensorMap.get(t);return r??e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Y1=async(n,t,e,r)=>{switch(n.op){case"HashTable":case"HashTableV2":{const s=m("keyDType",n,t,e),i=m("valueDType",n,t,e),a=new q1(s,i);return r.addHashTable(n.name,a),[a.handle]}case"LookupTableImport":case"LookupTableImportV2":{const s=m("tableHandle",n,t,e,r),i=m("keys",n,t,e),a=m("values",n,t,e);return[await r.getHashTableById(s.id).import(i,a)]}case"LookupTableFind":case"LookupTableFindV2":{const s=m("tableHandle",n,t,e,r),i=m("keys",n,t,e),a=m("defaultValue",n,t,e);return[await r.getHashTableById(s.id).find(i,a)]}case"LookupTableSize":case"LookupTableSizeV2":{const s=m("tableHandle",n,t,e,r);return[r.getHashTableById(s.id).tensorSize()]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const X1=(n,t,e,r=_t)=>{switch(n.op){case"ResizeBilinear":{const s=m("images",n,t,e),i=m("size",n,t,e),a=m("alignCorners",n,t,e),o=m("halfPixelCenters",n,t,e);return[r.image.resizeBilinear(s,[i[0],i[1]],a,o)]}case"ResizeNearestNeighbor":{const s=m("images",n,t,e),i=m("size",n,t,e),a=m("alignCorners",n,t,e),o=m("halfPixelCenters",n,t,e);return[r.image.resizeNearestNeighbor(s,[i[0],i[1]],a,o)]}case"CropAndResize":{const s=m("image",n,t,e),i=m("boxes",n,t,e),a=m("boxInd",n,t,e),o=m("cropSize",n,t,e),l=m("method",n,t,e),c=m("extrapolationValue",n,t,e);return[r.image.cropAndResize(s,i,a,o,l,c)]}case"ImageProjectiveTransformV3":{const s=m("images",n,t,e),i=m("transforms",n,t,e),a=m("outputShape",n,t,e),o=m("fillValue",n,t,e),l=m("interpolation",n,t,e),c=m("fillMode",n,t,e);return[r.image.transform(s,i,l.toLowerCase(),c.toLowerCase(),o,a)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const J1=(n,t,e,r=_t)=>{switch(n.op){case"Equal":return[r.equal(m("a",n,t,e),m("b",n,t,e))];case"NotEqual":return[r.notEqual(m("a",n,t,e),m("b",n,t,e))];case"Greater":return[r.greater(m("a",n,t,e),m("b",n,t,e))];case"GreaterEqual":return[r.greaterEqual(m("a",n,t,e),m("b",n,t,e))];case"Less":return[r.less(m("a",n,t,e),m("b",n,t,e))];case"LessEqual":return[r.lessEqual(m("a",n,t,e),m("b",n,t,e))];case"LogicalAnd":return[r.logicalAnd(m("a",n,t,e),m("b",n,t,e))];case"LogicalNot":return[r.logicalNot(m("a",n,t,e))];case"LogicalOr":return[r.logicalOr(m("a",n,t,e),m("b",n,t,e))];case"Select":case"SelectV2":return[r.where(m("condition",n,t,e),m("a",n,t,e),m("b",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z1=(n,t,e,r=_t)=>{switch(n.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(m("a",n,t,e),m("b",n,t,e),m("transposeA",n,t,e),m("transposeB",n,t,e))];case"Einsum":return[r.einsum(m("equation",n,t,e),...m("tensors",n,t,e))];case"Transpose":return[r.transpose(m("x",n,t,e),m("perm",n,t,e))];case"_FusedMatMul":const[s,i]=m("fusedOps",n,t,e),a=s==="biasadd",o=i==="prelu",l=m("numArgs",n,t,e),c=m("leakyreluAlpha",n,t,e);if(a){if(o&&l!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!o&&l!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[p,f]=m("args",n,t,e);return[r.fused.matMul({a:m("a",n,t,e),b:m("b",n,t,e),transposeA:m("transposeA",n,t,e),transposeB:m("transposeB",n,t,e),bias:p,activation:i,preluActivationWeights:f,leakyreluAlpha:c})];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Q1=(n,t,e,r=_t)=>{switch(n.op){case"EuclideanNorm":return[r.euclideanNorm(m("x",n,t,e),m("axis",n,t,e),m("keepDims",n,t,e))];case"FusedBatchNorm":case"FusedBatchNormV2":return[r.batchNorm(m("x",n,t,e),m("mean",n,t,e),m("variance",n,t,e),m("offset",n,t,e),m("scale",n,t,e),m("epsilon",n,t,e))];case"FusedBatchNormV3":return[r.batchNorm(m("x",n,t,e),m("mean",n,t,e),m("variance",n,t,e),m("offset",n,t,e),m("scale",n,t,e),m("epsilon",n,t,e))];case"LRN":return[r.localResponseNormalization(m("x",n,t,e),m("radius",n,t,e),m("bias",n,t,e),m("alpha",n,t,e),m("beta",n,t,e))];case"Softmax":return[r.softmax(m("x",n,t,e))];case"LogSoftmax":return[r.logSoftmax(m("x",n,t,e))];case"SparseToDense":return[r.sparseToDense(m("sparseIndices",n,t,e),m("outputShape",n,t,e),m("sparseValues",n,t,e),m("defaultValue",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tN=(n,t,e,r=_t)=>{switch(n.op){case"Max":{const o=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.max(m("x",n,t,e),o,l)]}case"Mean":{const o=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.mean(m("x",n,t,e),o,l)]}case"Min":{const o=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.min(m("x",n,t,e),o,l)]}case"Sum":{const o=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.sum(m("x",n,t,e),o,l)]}case"All":{const o=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.all(m("x",n,t,e),o,l)]}case"Any":{const o=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.any(m("x",n,t,e),o,l)]}case"ArgMax":{const o=m("axis",n,t,e);return[r.argMax(m("x",n,t,e),o)]}case"ArgMin":{const o=m("axis",n,t,e);return[r.argMin(m("x",n,t,e),o)]}case"Prod":{const o=m("axis",n,t,e),l=m("keepDims",n,t,e);return[r.prod(m("x",n,t,e),o,l)]}case"Cumprod":{const o=m("axis",n,t,e),l=m("exclusive",n,t,e),c=m("reverse",n,t,e);return[r.cumprod(m("x",n,t,e),o,l,c)]}case"Cumsum":{const o=m("axis",n,t,e),l=m("exclusive",n,t,e),c=m("reverse",n,t,e);return[r.cumsum(m("x",n,t,e),o,l,c)]}case"Bincount":const s=m("x",n,t,e),i=m("weights",n,t,e),a=m("size",n,t,e);return[r.bincount(s,i,a)];case"DenseBincount":{const o=m("x",n,t,e),l=m("weights",n,t,e),c=m("size",n,t,e),p=m("binaryOutput",n,t,e);return[r.denseBincount(o,l,c,p)]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eN=(n,t,e,r=_t)=>{switch(n.op){case"ConcatV2":case"Concat":{const s=m("n",n,t,e),i=m("axis",n,t,e);let a=m("tensors",n,t,e);return a=a.slice(0,s),[r.concat(a,i)]}case"Gather":{const s=m("x",n,t,e),i=m("indices",n,t,e);return[r.gather(s,r.cast(i,"int32"),0)]}case"GatherV2":{const s=m("axis",n,t,e),i=m("batchDims",n,t,e),a=m("x",n,t,e),o=m("indices",n,t,e);return[r.gather(a,r.cast(o,"int32"),s,i)]}case"Reverse":{const s=m("dims",n,t,e),i=[];for(let o=0;o<s.length;o++)s[o]&&i.push(o);const a=m("x",n,t,e);return[r.reverse(a,i)]}case"ReverseV2":{const s=m("axis",n,t,e),i=m("x",n,t,e);return[r.reverse(i,s)]}case"Slice":{const s=m("begin",n,t,e),i=m("size",n,t,e);return[r.slice(m("x",n,t,e),s,i)]}case"StridedSlice":{const s=m("begin",n,t,e),i=m("end",n,t,e),a=m("strides",n,t,e),o=m("beginMask",n,t,e),l=m("endMask",n,t,e),c=m("ellipsisMask",n,t,e),p=m("newAxisMask",n,t,e),f=m("shrinkAxisMask",n,t,e),g=m("x",n,t,e);return[r.stridedSlice(g,s,i,a,o,l,c,p,f)]}case"Pack":return Tt(()=>{const s=m("axis",n,t,e),i=m("tensors",n,t,e),a=i[0].shape,o=r.squeeze(i[0]).shape,l=i.map(c=>{const p=$e(c.shape,a);if(!p&&!$e(r.squeeze(c).shape,o))throw new Error("the input tensors shape does not match");return p?c:r.reshape(c,a)});return[r.stack(l,s)]});case"Unpack":{const s=m("axis",n,t,e),i=m("tensor",n,t,e);return r.unstack(i,s)}case"Tile":{const s=m("reps",n,t,e);return[r.tile(m("x",n,t,e),s)]}case"Split":case"SplitV":{const s=m("axis",n,t,e),i=m("numOrSizeSplits",n,t,e),a=m("x",n,t,e);return r.split(a,i,s)}case"ScatterNd":{const s=m("indices",n,t,e),i=m("values",n,t,e),a=m("shape",n,t,e);return[r.scatterND(s,i,a)]}case"GatherNd":{const s=m("x",n,t,e),i=m("indices",n,t,e);return[r.gatherND(s,i)]}case"SparseToDense":{const s=m("sparseIndices",n,t,e),i=m("outputShape",n,t,e),a=m("sparseValues",n,t,e),o=m("defaultValue",n,t,e);return[r.sparseToDense(s,a,i,a.dtype===o.dtype?o:r.cast(o,a.dtype))]}default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nN=(n,t,e,r=_t)=>{switch(n.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:i,emptyRowIndicator:a,reverseIndexMap:o}=r.sparse.sparseFillEmptyRows(m("indices",n,t,e),m("values",n,t,e),m("denseShape",n,t,e),m("defaultValue",n,t,e));return[s,i,a,o]}case"SparseReshape":{const{outputIndices:s,outputShape:i}=r.sparse.sparseReshape(m("inputIndices",n,t,e),m("inputShape",n,t,e),m("newShape",n,t,e));return[s,i]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(m("data",n,t,e),m("indices",n,t,e),m("segmentIds",n,t,e))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(m("data",n,t,e),m("indices",n,t,e),m("segmentIds",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rN=(n,t,e,r=_t)=>{switch(n.op){case"FFT":return[r.fft(m("x",n,t,e))];case"IFFT":return[r.ifft(m("x",n,t,e))];case"RFFT":return[r.rfft(m("x",n,t,e))];case"IRFFT":return[r.irfft(m("x",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sN=(n,t,e,r=_t)=>{switch(n.op){case"StringNGrams":{const{nGrams:s,nGramsSplits:i}=r.string.stringNGrams(m("data",n,t,e),m("dataSplits",n,t,e),m("separator",n,t,e),m("nGramWidths",n,t,e),m("leftPad",n,t,e),m("rightPad",n,t,e),m("padWidth",n,t,e),m("preserveShortSequences",n,t,e));return[s,i]}case"StringSplit":{const{indices:s,values:i,shape:a}=r.string.stringSplit(m("input",n,t,e),m("delimiter",n,t,e),m("skipEmpty",n,t,e));return[s,i,a]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(m("input",n,t,e),m("numBuckets",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iN=(n,t,e,r=_t)=>{switch(n.op){case"Cast":return[r.cast(m("x",n,t,e),m("dtype",n,t,e))];case"ExpandDims":{const s=m("axis",n,t,e);return[r.expandDims(m("x",n,t,e),s)]}case"Squeeze":{const s=m("axis",n,t,e);return[r.squeeze(m("x",n,t,e),s)]}case"Reshape":return[r.reshape(m("x",n,t,e),m("shape",n,t,e))];case"MirrorPad":return[r.mirrorPad(m("x",n,t,e),m("padding",n,t,e),m("mode",n,t,e))];case"PadV2":case"Pad":return[r.pad(m("x",n,t,e),m("padding",n,t,e),m("constantValue",n,t,e))];case"SpaceToBatchND":{const s=m("blockShape",n,t,e),i=m("paddings",n,t,e);return[r.spaceToBatchND(m("x",n,t,e),s,i)]}case"BatchToSpaceND":{const s=m("blockShape",n,t,e),i=m("crops",n,t,e);return[r.batchToSpaceND(m("x",n,t,e),s,i)]}case"DepthToSpace":{const s=m("blockSize",n,t,e),i=m("dataFormat",n,t,e).toUpperCase();return[r.depthToSpace(m("x",n,t,e),s,i)]}case"BroadcastTo":return[r.broadcastTo(m("x",n,t,e),m("shape",n,t,e))];case"BroadcastArgs":return[r.broadcastArgs(m("s0",n,t,e),m("s1",n,t,e))];default:throw TypeError(`Node type ${n.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Za(n,t,e,r,s=Tt){const i=((a,o,l)=>{switch(a.category){case"arithmetic":return s(()=>L1(a,o,l));case"basic_math":return s(()=>P1(a,o,l));case"control":return M1(a,o,l);case"convolution":return s(()=>H1(a,o,l));case"creation":return s(()=>U1(a,o,l));case"dynamic":return K1(a,o,l);case"evaluation":return s(()=>W1(a,o,l));case"image":return s(()=>X1(a,o,l));case"graph":return s(()=>G1(a,o,l));case"logical":return s(()=>J1(a,o,l));case"matrices":return s(()=>Z1(a,o,l));case"normalization":return s(()=>Q1(a,o,l));case"reduction":return s(()=>tN(a,o,l));case"slice_join":return s(()=>eN(a,o,l));case"sparse":return s(()=>nN(a,o,l));case"spectral":return s(()=>rN(a,o,l));case"string":return s(()=>sN(a,o,l));case"transformation":return s(()=>iN(a,o,l));case"hash_table":return Y1(a,o,l,r);case"custom":const c=Au(a.op);if(c&&c.customExecutor)return c.customExecutor(new F1(a,o,l));throw TypeError(`Custom op ${a.op} is not registered.`);default:throw TypeError(`Unknown op '${a.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(n,t,e);return nn(i)?i.then(a=>[].concat(a)):[].concat(i)}class Qa{constructor(t={},e={},r={},s={}){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=r,this.functionMap=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let e=0;e<this.contexts.length-1;e++){const r=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(r))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(e=>e.id===0&&e.iterationId===0?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(const e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function to(n,t,e,r){const s=new Set,i=[];let a=null,o=null;const l=new Set,c=Object.keys(n).map(g=>Bt(g)[0]);let p=[];r!=null&&(p=r.map(g=>Bt(g.name)[0]));const f=[...t];for(;f.length>0;){const g=f.pop();if((Du(g)||cN(g)||hN(g))&&a==null&&(a=g,o=a.children.map(b=>b.name).filter(b=>s.has(b))),s.add(g.name),e[g.name]==null&&c.indexOf(g.name)===-1&&p.indexOf(g.name)===-1){if(g.inputs.length===0){i.push(g.name);continue}g.inputs.forEach(b=>{l.has(b.name)||(l.add(b.name),f.push(b))})}}return{inputs:n,outputs:t,usedNodes:s,missingInputs:i,dynamicNode:a,syncInputs:o}}function aN(n,t,e){const{usedNodes:r,inputs:s}=e,i=[],a=Object.keys(s).map(p=>Bt(p)[0]).map(p=>n.nodes[p]),o=n.initNodes;a.forEach(p=>{r.has(p.name)&&i.push(p)}),n.weights.forEach(p=>{r.has(p.name)&&i.push(p)}),o?.forEach(p=>{r.has(p.name)&&i.push(p)});const l=new Set,c=[];for(;i.length>0;){const p=i.pop();l.add(p.name),t[p.name]||c.push(p),p.children.forEach(f=>{!l.has(f.name)&&r.has(f.name)&&f.inputs.every(g=>l.has(g.name))&&i.push(f)})}return c}const oN=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],uN=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],lN=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function Du(n){return oN.indexOf(n.op)>=0}function cN(n){return uN.indexOf(n.op)>=0}function hN(n){return lN.indexOf(n.op)>=0}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cr{constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(r=>{this._functionExecutorMap[r]=new cr(t.functions[r],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const e=Object.keys(t).map(r=>t[r].map(s=>s.id));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{const e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e})}get functions(){return Object.keys(this._functions).reduce((t,e)=>(t[e]=this._functions[e].signature,t),{})}getCompilationKey(t,e){const r=t.map(i=>i.name).sort(),s=e.map(i=>i.name).sort();return r.join(this.SEPERATOR)+"--"+s.join(this.SEPERATOR)}compile(t,e){const r=to(t,e,this.weightMap,this._initNodes),{missingInputs:s,dynamicNode:i,syncInputs:a}=r;if(i!=null)throw new Error(`This execution contains the node '${i.name}', which has the dynamic op '${i.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${a}]`);if(s.length>0){const o=e.map(c=>c.name),l=Object.keys(t);throw new Error(`Cannot compute the outputs [${o}] from the provided inputs [${l}]. Missing the following inputs: [${s}]`)}return aN(this.graph,this.weightMap,r)}execute(t,e){t=this.mapInputs(t);const r=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);const s=r.map(f=>this.graph.nodes[Bt(f)[0]]),i=e.map(f=>Bt(f)[0]);let a=i.map(f=>this.graph.nodes[f]);this.resetIntermediateTensors(),a.length===0&&(a=this._outputs);const o=this.getCompilationKey(s,a);let l=this.compiledMap.get(o);l==null&&(l=this.compile(t,a),this.compiledMap.set(o,l));const c={},p={};return Tt(()=>{const f=new Qa(this.weightMap,c,p,this.functionExecutorMap),g=Object.assign({},this.weightMap);Object.keys(t).forEach(S=>{const[_,k]=Bt(S),P=[];P[k]=t[S],g[_]=P});const b=this.getFrozenTensorIds(g),v={};for(let S=0;S<l.length;S++){const _=l[S];if(!g[_.name]){const k=Za(_,g,f,this._resourceManager);if(nn(k))throw new Error(`The execution of the op '${_.op}' returned a promise. Please use model.executeAsync() instead.`);g[_.name]=k,this.checkTensorForDisposal(_.name,_,g,f,b,i,v)}}return this.parent==null&&f.dispose(b),e.map(S=>At(S,g,f))})}getFrozenTensorIds(t){const e=[].concat.apply([],Object.keys(t).map(r=>t[r]).map(r=>r.map(s=>s.id)));return new Set(e)}checkTensorForDisposal(t,e,r,s,i,a,o){e.category==="control"||a.indexOf(t)!==-1||(r[t].forEach(l=>{l!=null&&(o[l.id]=(o[l.id]||0)+e.children.length)}),e.inputs.forEach(l=>{if(l.category!=="control"){const c=qv(l.name,r,s);c?.forEach(p=>{if(p&&!p.kept&&!i.has(p.id)){const f=o[p.id];if(f===1){if(!this.keepTensorForDebug)p.dispose();else{const[g,b]=ie(e.name,s);this.intermediateTensors[g]?this.intermediateTensors[g][b]=p:(this.intermediateTensors[g]=[],this.intermediateTensors[g][b]=p)}delete o[p.id]}else f!=null&&o[p.id]--}})}}))}async executeAsync(t,e){return this._executeAsync(t,e)}disposeIntermediateTensors(){this.intermediateTensors&&(Object.keys(this.intermediateTensors).forEach(t=>this.intermediateTensors[t].forEach(e=>e.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){this.tensorsMap&&Object.keys(this.tensorsMap).forEach(t=>{this.tensorsMap[t].forEach(r=>{r&&!r.kept&&!r.isDisposed&&!this.keepIds.has(r.id)&&r.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(const t in this.intermediateTensors)this.intermediateTensors[t].forEach(e=>e.dispose()),delete this.intermediateTensors[t]}async _executeAsync(t,e,r=!1,s={},i={}){r||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));try{this.keepTensorForDebug=rt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){console.warn(p.message)}this.resetIntermediateTensors();const a=new Qa(this.weightMap,s,i,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(t,a,e,r);const o=e.map(p=>At(p,this.tensorsMap,a)),l=o.map(p=>p.id),c=Object.keys(t).map(p=>t[p].id);return this.keepIds=new Set([...l,...c,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&a.dispose(this.keepIds),o}async executeFunctionAsync(t,e,r){const s=t.reduce((i,a,o)=>(i[this.inputs[o].name]=a,i),{});return this._executeAsync(s,this.outputNodes,!0,e,r)}async executeWithControlFlow(t,e,r,s){const i=Object.keys(t),a=i.map(L=>this.graph.nodes[Bt(L)[0]]),o=r.map(L=>Bt(L)[0]);let l=o.map(L=>this.graph.nodes[L]);l.length===0&&(l=this._outputs);const{usedNodes:c,missingInputs:p,dynamicNode:f,syncInputs:g}=to(t,l,this.weightMap,this._initNodes),b=[...a,...this.graph.weights,...this._initNodes||[]].map(L=>({node:L,contexts:e.currentContext})),v=Object.assign({},this.weightMap);Object.keys(t).forEach(L=>{const[D,C]=Bt(L),B=[];B[C]=t[L],v[D]=B});const S={},_=this.getFrozenTensorIds(v),k={};for(;b.length>0;){const L=this.processStack(a,b,e,v,k,_,o,S,c);await Promise.all(L)}f==null&&!s&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const P=l.filter(L=>!Du(L)&&!At(L.name,v,e)).map(L=>L.name);if(P.length>0){let L="";throw f!=null&&(L=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${g}]`),new Error(`Cannot compute the outputs [${P}] from the provided inputs [${i}]. Consider providing the following inputs: [${p}]. ${L}`)}return v}processStack(t,e,r,s,i,a,o,l,c){const p=[];for(;e.length>0;){const f=e.pop();r.currentContext=f.contexts;let g="";if(f.node.op==="Enter"&&m("isConstant",f.node,s,r)&&([g]=ie(f.node.name,r)),s[f.node.name]==null){const b=Za(f.node,s,r,this._resourceManager);g||([g]=ie(f.node.name,r));const v=r.currentContext;nn(b)?p.push(b.then(S=>(s[g]=S,r.currentContext=v,this.checkTensorForDisposal(g,f.node,s,r,a,o,l),this.processChildNodes(f.node,e,r,s,i,c),S))):(s[g]=b,this.checkTensorForDisposal(g,f.node,s,r,a,o,l),this.processChildNodes(f.node,e,r,s,i,c))}else this.processChildNodes(f.node,e,r,s,i,c)}return p}processChildNodes(t,e,r,s,i,a){t.children.forEach(o=>{const[l]=ie(o.name,r);i[l]||!a.has(o.name)||(o.op==="Merge"?o.inputNames.some(c=>!!At(c,s,r))&&(i[l]=!0,e.push({contexts:r.currentContext,node:o})):o.inputNames.every(c=>!!At(c,s,r))&&(i[l]=!0,e.push({contexts:r.currentContext,node:o})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(e=>e.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(e=>{const r=t[e],[s]=Bt(e),i=this.graph.nodes[s];if(i.attrParams.shape&&i.attrParams.shape.value){const a=i.attrParams.shape.value,o=a.length===r.shape.length&&r.shape.every((l,c)=>a[c]===-1||a[c]===l);E(o,()=>`The shape of dict['${i.name}'] provided in model.execute(dict) must be [${a}], but was [${r.shape}]`)}i.attrParams.dtype&&i.attrParams.dtype.value&&E(r.dtype===i.attrParams.dtype.value,()=>`The dtype of dict['${i.name}'] provided in model.execute(dict) must be ${i.attrParams.dtype.value}, but was ${r.dtype}`)})}mapInputs(t){const e={};for(const r in t)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[r]!=null){const s=this._signature.inputs[r];e[s.name]=t[r]}else e[r]=t[r];return e}checkInputs(t){const e=Object.keys(t).filter(r=>{const[s]=Bt(r);return this.graph.nodes[s]==null});if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map(e=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[e]!=null?this._signature.outputs[e].name:e,{})}checkOutputs(t){t.forEach(e=>{const[r]=Bt(e);if(!this.graph.nodes[r])throw new Error(`The output '${e}' is not found in the graph`)})}}class pN{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fN="?tfjs-format=file",dN="model.json";class mN{constructor(t,e={},r=Wo){this.modelUrl=t,this.loadOptions=e,this.version="n/a",this.io=r,e==null&&(this.loadOptions={}),this.resourceManager=new pN}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){const t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const e=this.io.getLoadHandlers(t,this.loadOptions);if(e.length===0)e.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return nn(t)?t.then(e=>this.loadSync(e)):this.loadSync(t)}loadSync(t){this.artifacts=t;const e=this.artifacts.modelTopology;let r=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){const i=this.artifacts.userDefinedMetadata;i.signature!=null&&(r=i.signature),i.structuredOutputKeys!=null&&(this.structuredOutputKeys=i.structuredOutputKeys)}this.signature=r,this.version=`${e.versions.producer}.${e.versions.minConsumer}`;const s=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new cr(qa.Instance.transformGraph(e,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(s),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){const i=qa.Instance.transformGraph(t.modelInitializer);this.initializer=new cr(i),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,e){if(typeof t=="string"){const r=this.io.getSaveHandlers(t);if(r.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(r.length>1)throw new Error(`Found more than one (${r.length}) save handlers for URL '${t}'`);t=r[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,e){const r=this.execute(t,this.outputNodes);if(this.structuredOutputKeys){const s=r instanceof yt?[r]:r,i={};return s.forEach((a,o)=>i[this.structuredOutputKeys[o]]=a),i}return r}normalizeInputs(t){if(!(t instanceof yt)&&!Array.isArray(t))return t;if(t=Array.isArray(t)?t:[t],t.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((e,r,s)=>(e[r]=t[s],e),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const r=this.executor.execute(t,e);return r.length>1?r:r[0]}async executeAsync(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const r=await this.executor.executeAsync(t,e);return r.length>1?r:r[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((e,r)=>(e[r]=[t[r]],e),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}}async function eo(n,t={},e=Wo){if(n==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof n=="string"&&(n=gN(n));const r=new mN(n,t,e);return await r.load(),r}function gN(n){return n.endsWith("/")||(n=n+"/"),`${n}${dN}${fN}`}/**
    * @license
    * Copyright 2022 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */var Ct=function(){return(Ct=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var s in t=arguments[e])Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s]);return n}).apply(this,arguments)};function Xt(n,t,e,r){return new(e||(e=Promise))(function(s,i){function a(c){try{l(r.next(c))}catch(p){i(p)}}function o(c){try{l(r.throw(c))}catch(p){i(p)}}function l(c){var p;c.done?s(c.value):(p=c.value,p instanceof e?p:new e(function(f){f(p)})).then(a,o)}l((r=r.apply(n,t||[])).next())})}function Jt(n,t){var e,r,s,i,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(l){return function(c){return function(p){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(s=2&p[0]?r.return:p[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,p[1])).done)return s;switch(r=0,s&&(p=[2&p[0],s.value]),p[0]){case 0:case 1:s=p;break;case 4:return a.label++,{value:p[1],done:!1};case 5:a.label++,r=p[1],p=[0];continue;case 7:p=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!((s=s.length>0&&s[s.length-1])||p[0]!==6&&p[0]!==2)){a=0;continue}if(p[0]===3&&(!s||p[1]>s[0]&&p[1]<s[3])){a.label=p[1];break}if(p[0]===6&&a.label<s[1]){a.label=s[1],s=p;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(p);break}s[2]&&a.ops.pop(),a.trys.pop();continue}p=t.call(n,a)}catch(f){p=[6,f],r=0}finally{e=s=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([l,c])}}}var hr=["wrist","thumb_cmc","thumb_mcp","thumb_ip","thumb_tip","index_finger_mcp","index_finger_pip","index_finger_dip","index_finger_tip","middle_finger_mcp","middle_finger_pip","middle_finger_dip","middle_finger_tip","ring_finger_mcp","ring_finger_pip","ring_finger_dip","ring_finger_tip","pinky_finger_mcp","pinky_finger_pip","pinky_finger_dip","pinky_finger_tip"],ns={runtime:"mediapipe",maxHands:2,modelType:"full"},yN=function(){function n(t){var e,r=this;switch(this.width=0,this.height=0,this.selfieMode=!1,this.handsSolution=new Il.Hands({locateFile:function(s,i){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+s:i+"/"+s}}),t.modelType){case"lite":e=0;break;case"full":default:e=1}this.handsSolution.setOptions({modelComplexity:e,selfieMode:this.selfieMode,maxNumHands:t.maxHands}),this.handsSolution.onResults(function(s){if(r.height=s.image.height,r.width=s.image.width,r.hands=[],s.multiHandLandmarks!==null)for(var i=s.multiHandedness,a=s.multiHandLandmarks,o=s.multiHandWorldLandmarks,l=0;l<i.length;l++)r.hands.push(Ct(Ct({},r.translateOutput(a[l],o[l])),{score:i[l].score,handedness:i[l].label}))})}return n.prototype.translateOutput=function(t,e){var r=this;return{keypoints:t.map(function(s,i){return{x:s.x*r.width,y:s.y*r.height,score:s.visibility,name:hr[i]}}),keypoints3D:e.map(function(s,i){return{x:s.x,y:s.y,z:s.z,score:s.visibility,name:hr[i]}})}},n.prototype.estimateHands=function(t,e){return Xt(this,void 0,void 0,function(){var r,s;return Jt(this,function(i){switch(i.label){case 0:return e&&e.flipHorizontal&&e.flipHorizontal!==this.selfieMode&&(this.selfieMode=e.flipHorizontal,this.handsSolution.setOptions({selfieMode:this.selfieMode})),t instanceof yt?(s=ImageData.bind,[4,ad(t)]):[3,2];case 1:return r=new(s.apply(ImageData,[void 0,i.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:r=t,i.label=3;case 3:return t=r,[4,this.handsSolution.send({image:t})];case 4:return i.sent(),[2,this.hands]}})})},n.prototype.dispose=function(){this.handsSolution.close()},n.prototype.reset=function(){this.handsSolution.reset(),this.width=0,this.height=0,this.hands=null,this.selfieMode=!1},n.prototype.initialize=function(){return this.handsSolution.initialize()},n}();function bN(n){return Xt(this,void 0,void 0,function(){var t,e;return Jt(this,function(r){switch(r.label){case 0:return t=function(s){if(s==null)return Ct({},ns);var i=Ct({},s);return i.runtime="mediapipe",i.maxHands==null&&(i.maxHands=ns.maxHands),i.modelType==null&&(i.modelType=ns.modelType),i}(n),[4,(e=new yN(t)).initialize()];case 1:return r.sent(),[2,e]}})})}function rs(n){return n.width*n.height}function no(n){var t=n.xCenter-n.width/2,e=t+n.width,r=n.yCenter-n.height/2;return{xMin:t,xMax:e,yMin:r,yMax:r+n.height,width:n.width,height:n.height}}function wN(n,t){var e=no(n),r=no(t);if(!function(a,o){return!(a.xMax<o.xMin||o.xMax<a.xMin||a.yMax<o.yMin||o.yMax<a.yMin)}(e,r))return 0;var s=rs(function(a,o){var l=Math.max(a.xMin,o.xMin),c=Math.min(a.xMax,o.xMax),p=Math.max(a.yMin,o.yMin),f=Math.min(a.yMax,o.yMax);return{xMin:l,xMax:c,yMin:p,yMax:f,width:Math.max(c-l,0),height:Math.max(f-p,0)}}(e,r)),i=rs(e)+rs(r)-s;return i>0?s/i:0}function vN(n,t,e,r){var s=n.width,i=n.height,a=r?-1:1,o=Math.cos(n.rotation),l=Math.sin(n.rotation),c=n.xCenter,p=n.yCenter,f=1/t,g=1/e,b=new Array(16);return b[0]=s*o*a*f,b[1]=-i*l*f,b[2]=0,b[3]=(-.5*s*o*a+.5*i*l+c)*f,b[4]=s*l*a*g,b[5]=i*o*g,b[6]=0,b[7]=(-.5*i*o-.5*s*l*a+p)*g,b[8]=0,b[9]=0,b[10]=s*f,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,function(v){if(v.length!==16)throw new Error("Array length must be 16 but got "+v.length);return[[v[0],v[1],v[2],v[3]],[v[4],v[5],v[6],v[7]],[v[8],v[9],v[10],v[11]],[v[12],v[13],v[14],v[15]]]}(b)}function Cu(n){return n instanceof yt?{height:n.shape[0],width:n.shape[1]}:{height:n.height,width:n.width}}function pr(n){return n-2*Math.PI*Math.floor((n+Math.PI)/(2*Math.PI))}function Fu(n){return n instanceof yt?n:od(n)}function ss(n,t){E(n.width!==0,function(){return t+" width cannot be 0."}),E(n.height!==0,function(){return t+" height cannot be 0."})}function NN(n,t){var e=function(r,s,i,a){var o=s-r,l=a-i;if(o===0)throw new Error("Original min and max are both "+r+", range cannot be 0.");var c=l/o;return{scale:c,offset:i-r*c}}(0,255,t[0],t[1]);return Tt(function(){return lt(G(n,e.scale),e.offset)})}function ro(n,t,e){var r=t.outputTensorSize,s=t.keepAspectRatio,i=t.borderMode,a=t.outputTensorFloatRange,o=Cu(n),l=function(f,g){return g?{xCenter:g.xCenter*f.width,yCenter:g.yCenter*f.height,width:g.width*f.width,height:g.height*f.height,rotation:g.rotation}:{xCenter:.5*f.width,yCenter:.5*f.height,width:f.width,height:f.height,rotation:0}}(o,e),c=function(f,g,b){if(b===void 0&&(b=!1),!b)return{top:0,left:0,right:0,bottom:0};var v=g.height,S=g.width;ss(g,"targetSize"),ss(f,"roi");var _,k,P=v/S,L=f.height/f.width,D=0,C=0;return P>L?(_=f.width,k=f.width*P,C=(1-L/P)/2):(_=f.height/P,k=f.height,D=(1-P/L)/2),f.width=_,f.height=k,{top:C,left:D,right:D,bottom:C}}(l,r,s),p=vN(l,o.width,o.height,!1);return{imageTensor:Tt(function(){var f=Fu(n),g=Ve(function(S,_,k){return ss(k,"inputResolution"),[1/k.width*S[0][0]*_.width,1/k.height*S[0][1]*_.width,S[0][3]*_.width,1/k.width*S[1][0]*_.height,1/k.height*S[1][1]*_.height,S[1][3]*_.height,0,0]}(p,o,r),[1,8]),b=i==="zero"?"constant":"nearest",v=Er.transform(fe(dt(f,"float32")),g,"bilinear",b,0,[r.height,r.width]);return a!=null?NN(v,a):v}),padding:c,transformationMatrix:p}}function so(n,t,e,r){return r===1?.5*(n+t):n+(t-n)*e/(r-1)}function io(n){return{xCenter:n.xMin+n.width/2,yCenter:n.yMin+n.height/2,width:n.width,height:n.height}}function ao(n){var t=n.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var e=Number.MAX_VALUE,r=Number.MAX_VALUE,s=Number.MIN_VALUE,i=Number.MIN_VALUE;return t.forEach(function(a){e=Math.min(e,a.x),s=Math.max(s,a.x),r=Math.min(r,a.y),i=Math.max(i,a.y)}),{xCenter:(e+s)/2,yCenter:(r+i)/2,width:s-e,height:i-r}}function TN(n,t,e,r,s){var i=e==="rect"?function(a,o,l){var c,p=a.locationData;if(o==="boundingbox")c=io(p.boundingBox);else{c=ao(p);var f=l.width,g=l.height;c.xCenter=Math.round(c.xCenter*f),c.yCenter=Math.round(c.yCenter*g),c.width=Math.round(c.width*f),c.height=Math.round(c.height*g)}return c}(n,t,r):function(a,o){var l=a.locationData;return o==="boundingbox"?io(l.relativeBoundingBox):ao(l)}(n,t);return s&&(i.rotation=function(a,o,l){var c,p=a.locationData,f=l.rotationVectorStartKeypointIndex,g=l.rotationVectorEndKeypointIndex;c=l.rotationVectorTargetAngle?l.rotationVectorTargetAngle:Math.PI*l.rotationVectorTargetAngleDegree/180;var b=p.relativeKeypoints[f].x*o.width,v=p.relativeKeypoints[f].y*o.height,S=p.relativeKeypoints[g].x*o.width,_=p.relativeKeypoints[g].y*o.height;return pr(c-Math.atan2(-(_-v),S-b))}(n,r,s)),i}function xN(n){return Tt(function(){var t=function(s){return Tt(function(){return[J(s,[0,0,0],[1,-1,1]),J(s,[0,0,1],[1,-1,-1])]})}(n),e=t[0],r=t[1];return{boxes:vt(r),logits:vt(e)}})}function SN(n,t,e,r){return Xt(this,void 0,void 0,function(){var s,i,a,o,l;return Jt(this,function(c){switch(c.label){case 0:return n.sort(function(p,f){return Math.max.apply(Math,f.score)-Math.max.apply(Math,p.score)}),s=Ve(n.map(function(p){return[p.locationData.relativeBoundingBox.yMin,p.locationData.relativeBoundingBox.xMin,p.locationData.relativeBoundingBox.yMax,p.locationData.relativeBoundingBox.xMax]})),i=It(n.map(function(p){return p.score[0]})),[4,Er.nonMaxSuppressionAsync(s,i,t,e)];case 1:return[4,(a=c.sent()).array()];case 2:return o=c.sent(),l=n.filter(function(p,f){return o.indexOf(f)>-1}),se([s,i,a]),[2,l]}})})}function EN(n,t){return n.map(function(e){var r=Ct(Ct({},e),{x:e.x*t.width,y:e.y*t.height});return e.z!=null&&(r.z=e.z*t.width),r})}function _N(n,t,e){return Xt(this,void 0,void 0,function(){var r,s,i,a,o;return Jt(this,function(l){switch(l.label){case 0:return r=n[0],s=n[1],i=function(c,p,f){return Tt(function(){var g,b,v,S;f.reverseOutputOrder?(b=vt(J(c,[0,f.boxCoordOffset+0],[-1,1])),g=vt(J(c,[0,f.boxCoordOffset+1],[-1,1])),S=vt(J(c,[0,f.boxCoordOffset+2],[-1,1])),v=vt(J(c,[0,f.boxCoordOffset+3],[-1,1]))):(g=vt(J(c,[0,f.boxCoordOffset+0],[-1,1])),b=vt(J(c,[0,f.boxCoordOffset+1],[-1,1])),v=vt(J(c,[0,f.boxCoordOffset+2],[-1,1])),S=vt(J(c,[0,f.boxCoordOffset+3],[-1,1]))),b=lt(G(ot(b,f.xScale),p.w),p.x),g=lt(G(ot(g,f.yScale),p.h),p.y),f.applyExponentialOnBoxSize?(v=G(be(ot(v,f.hScale)),p.h),S=G(be(ot(S,f.wScale)),p.w)):(v=G(ot(v,f.hScale),p.h),S=G(ot(S,f.wScale),p.h));var _=tt(g,ot(v,2)),k=tt(b,ot(S,2)),P=lt(g,ot(v,2)),L=lt(b,ot(S,2)),D=xt([F(_,[f.numBoxes,1]),F(k,[f.numBoxes,1]),F(P,[f.numBoxes,1]),F(L,[f.numBoxes,1])],1);if(f.numKeypoints)for(var C=0;C<f.numKeypoints;++C){var B=f.keypointCoordOffset+C*f.numValuesPerKeypoint,H=void 0,V=void 0;f.reverseOutputOrder?(H=vt(J(c,[0,B],[-1,1])),V=vt(J(c,[0,B+1],[-1,1]))):(V=vt(J(c,[0,B],[-1,1])),H=vt(J(c,[0,B+1],[-1,1])));var z=lt(G(ot(H,f.xScale),p.w),p.x),U=lt(G(ot(V,f.yScale),p.h),p.y);D=xt([D,F(z,[f.numBoxes,1]),F(U,[f.numBoxes,1])],1)}return D})}(s,t,e),a=Tt(function(){var c=r;return e.sigmoidScore?(e.scoreClippingThresh!=null&&(c=Zo(r,-e.scoreClippingThresh,e.scoreClippingThresh)),c=ze(c)):c}),[4,$N(i,a,e)];case 1:return o=l.sent(),se([i,a]),[2,o]}})})}function $N(n,t,e){return Xt(this,void 0,void 0,function(){var r,s,i,a,o,l,c,p,f,g,b,v;return Jt(this,function(S){switch(S.label){case 0:return r=[],[4,n.data()];case 1:return s=S.sent(),[4,t.data()];case 2:for(i=S.sent(),a=0;a<e.numBoxes;++a)if(!(e.minScoreThresh!=null&&i[a]<e.minScoreThresh||(o=a*e.numCoords,l=kN(s[o+0],s[o+1],s[o+2],s[o+3],i[a],e.flipVertically,a),(c=l.locationData.relativeBoundingBox).width<0||c.height<0))){if(e.numKeypoints>0)for((p=l.locationData).relativeKeypoints=[],f=e.numKeypoints*e.numValuesPerKeypoint,g=0;g<f;g+=e.numValuesPerKeypoint)b=o+e.keypointCoordOffset+g,v={x:s[b+0],y:e.flipVertically?1-s[b+1]:s[b+1]},p.relativeKeypoints.push(v);r.push(l)}return[2,r]}})})}function kN(n,t,e,r,s,i,a){return{score:[s],ind:a,locationData:{relativeBoundingBox:{xMin:t,yMin:i?1-e:n,xMax:r,yMax:i?1-n:e,width:r-t,height:e-n}}}}function AN(n,t){return n==="none"?t:function(e){return 1/(1+Math.exp(-e))}(t)}function oo(n,t,e,r){return Xt(this,void 0,void 0,function(){var s,i,a,o,l,c,p,f;return Jt(this,function(g){switch(g.label){case 0:return e=e||t.flipHorizontally||!1,r=r||t.flipVertically||!1,s=n.size,i=s/t.numLandmarks,[4,n.data()];case 1:for(a=g.sent(),o=[],l=0;l<t.numLandmarks;++l)c=l*i,(f={x:0,y:0}).x=e?t.inputImageWidth-a[c]:a[c],i>1&&(f.y=r?t.inputImageHeight-a[c+1]:a[c+1]),i>2&&(f.z=a[c+2]),i>3&&(f.score=AN(t.visibilityActivation,a[c+3])),o.push(f);for(p=0;p<o.length;++p)(f=o[p]).x=f.x/t.inputImageWidth,f.y=f.y/t.inputImageHeight,f.z=f.z/t.inputImageWidth/(t.normalizeZ||1);return[2,o]}})})}function uo(n,t,e){var r=n.width,s=n.height,i=n.rotation;if(e.rotation==null&&e.rotationDegree==null||(i=function(p,f){return f.rotation!=null?p+=f.rotation:f.rotationDegree!=null&&(p+=Math.PI*f.rotationDegree/180),pr(p)}(i,e)),i===0)n.xCenter=n.xCenter+r*e.shiftX,n.yCenter=n.yCenter+s*e.shiftY;else{var a=(t.width*r*e.shiftX*Math.cos(i)-t.height*s*e.shiftY*Math.sin(i))/t.width,o=(t.width*r*e.shiftX*Math.sin(i)+t.height*s*e.shiftY*Math.cos(i))/t.height;n.xCenter=n.xCenter+a,n.yCenter=n.yCenter+o}if(e.squareLong){var l=Math.max(r*t.width,s*t.height);r=l/t.width,s=l/t.height}else if(e.squareShort){var c=Math.min(r*t.width,s*t.height);r=c/t.width,s=c/t.height}return n.width=r*e.scaleX,n.height=s*e.scaleY,n}function IN(n,t){for(var e=function(j,Z){var X=j[0].x*Z.width,et=j[0].y*Z.height,nt=(j[4].x+j[8].x)/2,mt=(j[4].y+j[8].y)/2;return nt=(nt+j[6].x)/2*Z.width,mt=(mt+j[6].y)/2*Z.height,pr(Math.PI/2-Math.atan2(-(mt-et),nt-X))}(n,t),r=pr(-e),s=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,l=0,c=n;l<c.length;l++){var p=(_=c[l]).x,f=_.y;s=Math.min(s,p),i=Math.max(i,p),a=Math.min(a,f),o=Math.max(o,f)}var g=(i+s)/2,b=(o+a)/2;s=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(var v=0,S=n;v<S.length;v++){var _,k=((_=S[v]).x-g)*t.width,P=(_.y-b)*t.height,L=k*Math.cos(r)-P*Math.sin(r),D=k*Math.sin(r)+P*Math.cos(r);s=Math.min(s,L),i=Math.max(i,L),a=Math.min(a,D),o=Math.max(o,D)}var C=(i+s)/2,B=(o+a)/2,H=C*Math.cos(e)-B*Math.sin(e)+t.width*g,V=C*Math.sin(e)+B*Math.cos(e)+t.height*b,z=(i-s)/t.width,U=(o-a)/t.height;return{xCenter:H/t.width,yCenter:V/t.height,width:z,height:U,rotation:e}}var ON={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},is={runtime:"tfjs",modelType:"full",maxHands:2,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"},as={flipHorizontal:!1,staticImageMode:!1},DN={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2016,numCoords:18,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:7,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.5},CN=.3,FN={shiftX:0,shiftY:-.5,scaleX:2.6,scaleY:2.6,squareLong:!0},LN={shiftX:0,shiftY:-.1,scaleX:2,scaleY:2,squareLong:!0},PN={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},BN={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},RN={numLandmarks:21,inputImageWidth:224,inputImageHeight:224,normalizeZ:.4,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},zN={numLandmarks:21,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},fr,VN=function(){function n(t,e,r){this.detectorModel=t,this.landmarkModel=e,this.maxHands=r,this.prevHandRectsFromLandmarks=null,this.anchors=function(l){l.reduceBoxesInLowestLayer==null&&(l.reduceBoxesInLowestLayer=!1),l.interpolatedScaleAspectRatio==null&&(l.interpolatedScaleAspectRatio=1),l.fixedAnchorSize==null&&(l.fixedAnchorSize=!1);for(var c=[],p=0;p<l.numLayers;){for(var f=[],g=[],b=[],v=[],S=p;S<l.strides.length&&l.strides[S]===l.strides[p];){var _=so(l.minScale,l.maxScale,S,l.strides.length);if(S===0&&l.reduceBoxesInLowestLayer)b.push(1),b.push(2),b.push(.5),v.push(.1),v.push(_),v.push(_);else{for(var k=0;k<l.aspectRatios.length;++k)b.push(l.aspectRatios[k]),v.push(_);if(l.interpolatedScaleAspectRatio>0){var P=S===l.strides.length-1?1:so(l.minScale,l.maxScale,S+1,l.strides.length);v.push(Math.sqrt(_*P)),b.push(l.interpolatedScaleAspectRatio)}}S++}for(var L=0;L<b.length;++L){var D=Math.sqrt(b[L]);f.push(v[L]/D),g.push(v[L]*D)}var C=0,B=0;if(l.featureMapHeight.length>0)C=l.featureMapHeight[p],B=l.featureMapWidth[p];else{var H=l.strides[p];C=Math.ceil(l.inputSizeHeight/H),B=Math.ceil(l.inputSizeWidth/H)}for(var V=0;V<C;++V)for(var z=0;z<B;++z)for(var U=0;U<f.length;++U){var j={xCenter:(z+l.anchorOffsetX)/B,yCenter:(V+l.anchorOffsetY)/C,width:0,height:0};l.fixedAnchorSize?(j.width=1,j.height=1):(j.width=g[U],j.height=f[U]),c.push(j)}p=S}return c}(ON);var s=It(this.anchors.map(function(l){return l.width})),i=It(this.anchors.map(function(l){return l.height})),a=It(this.anchors.map(function(l){return l.xCenter})),o=It(this.anchors.map(function(l){return l.yCenter}));this.anchorTensor={x:a,y:o,w:s,h:i}}return n.prototype.estimateHands=function(t,e){return Xt(this,void 0,void 0,function(){var r,s,i,a,o,l,c,p,f,g,b,v,S,_,k,P,L,D,C=this;return Jt(this,function(B){switch(B.label){case 0:return r=function(z){if(z==null)return Ct({},as);var U=Ct({},z);return U.flipHorizontal==null&&(U.flipHorizontal=as.flipHorizontal),U.staticImageMode==null&&(U.staticImageMode=as.staticImageMode),U}(e),t==null?(this.reset(),[2,[]]):(s=Cu(t),i=Tt(function(){var z=dt(Fu(t),"float32");return r.flipHorizontal&&(z=vt(Er.flipLeftRight(fe(z,0)),[0])),z}),a=this.prevHandRectsFromLandmarks,r.staticImageMode||a==null||a.length<this.maxHands?[4,this.detectPalm(i)]:[3,2]);case 1:return(l=B.sent()).length===0?(this.reset(),i.dispose(),[2,[]]):(c=l.map(function(z){return C.palmDetectionToRoi(z,s)}),o=c,[3,3]);case 2:o=a,B.label=3;case 3:return H=.5,V=[],[o].forEach(function(z){return z.forEach(function(U){(V=V.filter(function(j){return wN(U,j)<=H})).push(U)})}),o=V,[4,Promise.all(o.map(function(z){return C.handLandmarks(z,i)}))];case 4:for(p=B.sent(),f=[],this.prevHandRectsFromLandmarks=[],g=0,b=p;g<b.length;g++)(v=b[g])!=null&&(S=v.landmarks,_=v.worldLandmarks,k=v.handScore,P=v.handedness,this.prevHandRectsFromLandmarks.push(this.handLandmarksToRoi(S,s)),(L=EN(S,s))!=null&&L.forEach(function(z,U){delete z.z,z.name=hr[U]}),(D=_)!=null&&D.forEach(function(z,U){z.name=hr[U]}),f.push({keypoints:L,keypoints3D:D,handedness:P,score:k}));return i.dispose(),[2,f]}var H,V})})},n.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),se([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},n.prototype.reset=function(){this.prevHandRectsFromLandmarks=null},n.prototype.detectPalm=function(t){return Xt(this,void 0,void 0,function(){var e,r,s,i,a,o,l,c,p,f;return Jt(this,function(g){switch(g.label){case 0:return e=ro(t,PN),r=e.imageTensor,s=e.padding,i=this.detectorModel.predict(r),a=xN(i),o=a.boxes,[4,_N([l=a.logits,o],this.anchorTensor,DN)];case 1:return(c=g.sent()).length===0?(se([r,i,l,o]),[2,c]):[4,SN(c,this.maxHands,CN)];case 2:return p=g.sent(),f=function(b,v){b===void 0&&(b=[]);for(var S=v.left,_=v.top,k=v.left+v.right,P=v.top+v.bottom,L=0;L<b.length;L++){var D=b[L],C=D.locationData.relativeBoundingBox,B=(C.xMin-S)/(1-k),H=(C.yMin-_)/(1-P),V=C.width/(1-k),z=C.height/(1-P);C.xMin=B,C.yMin=H,C.width=V,C.height=z,C.xMax=B+V,C.yMax=H+z;var U=D.locationData.relativeKeypoints;U&&U.forEach(function(j){var Z=(j.x-S)/(1-k),X=(j.y-_)/(1-P);j.x=Z,j.y=X})}return b}(p,s),se([r,i,l,o]),[2,f]}})})},n.prototype.palmDetectionToRoi=function(t,e){return uo(TN(t,"boundingbox","normRect",e,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:2,rotationVectorTargetAngleDegree:90}),e,FN)},n.prototype.handLandmarks=function(t,e){return Xt(this,void 0,void 0,function(){var r,s,i,a,o,l,c,p,f,g,b,v,S,_,k,P;return Jt(this,function(L){switch(L.label){case 0:return r=ro(e,BN,t),s=r.imageTensor,i=r.padding,a=this.landmarkModel.execute(s,["Identity_2:0","Identity_1:0","Identity:0","Identity_3:0"]),o=a[0],l=a[1],c=a[2],p=a[3],[4,l.data()];case 1:return(f=L.sent()[0])<.5?(se(a),se(s),[2,null]):[4,c.data()];case 2:return g=L.sent()[0],b=g>=.5?"Left":"Right",[4,oo(o,RN)];case 3:return v=L.sent(),[4,oo(p,zN)];case 4:return S=L.sent(),_=function(D,C){var B=C.left,H=C.top,V=C.left+C.right,z=C.top+C.bottom;return D.map(function(U){return Ct(Ct({},U),{x:(U.x-B)/(1-V),y:(U.y-H)/(1-z),z:U.z/(1-V)})})}(v,i),k=function(D,C,B){B===void 0&&(B={ignoreRotation:!1});for(var H=[],V=0,z=D;V<z.length;V++){var U=z[V],j=U.x-.5,Z=U.y-.5,X=B.ignoreRotation?0:C.rotation,et=Math.cos(X)*j-Math.sin(X)*Z,nt=Math.sin(X)*j+Math.cos(X)*Z;et=et*C.width+C.xCenter,nt=nt*C.height+C.yCenter;var mt=U.z*C.width,$t=Ct({},U);$t.x=et,$t.y=nt,$t.z=mt,H.push($t)}return H}(_,t),P=function(D,C){for(var B=[],H=0,V=D;H<V.length;H++){var z=V[H],U=z.x,j=z.y,Z=C.rotation,X=Math.cos(Z)*U-Math.sin(Z)*j,et=Math.sin(Z)*U+Math.cos(Z)*j,nt=Ct({},z);nt.x=X,nt.y=et,B.push(nt)}return B}(S,t),se(a),se(s),[2,{landmarks:k,worldLandmarks:P,handScore:f,handedness:b}]}})})},n.prototype.handLandmarksToRoi=function(t,e){return uo(IN([].concat(t.slice(0,4),t.slice(5,7),t.slice(9,11),t.slice(13,15),t.slice(17,19)),e),e,LN)},n}();function jN(n){return Xt(this,void 0,void 0,function(){var t,e,r,s,i,a;return Jt(this,function(o){switch(o.label){case 0:return t=function(l){if(l==null)return Ct({},is);var c=Ct({},l);if(c.runtime="tfjs",c.maxHands==null&&(c.maxHands=is.maxHands),c.modelType==null&&(c.modelType=is.modelType),c.modelType!=="lite"&&c.modelType!=="full")throw new Error("Model type must be one of lite or full, but got "+c.modelType);if(c.detectorModelUrl==null)switch(c.modelType){case"lite":c.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/lite/1";break;case"full":default:c.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1"}if(c.landmarkModelUrl==null)switch(c.modelType){case"lite":c.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/lite/1";break;case"full":default:c.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1"}return c}(n),e=t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r=t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([eo(t.detectorModelUrl,{fromTFHub:e}),eo(t.landmarkModelUrl,{fromTFHub:r})])];case 1:return s=o.sent(),i=s[0],a=s[1],[2,new VN(i,a,t.maxHands)]}})})}function MN(n,t){return Xt(this,void 0,void 0,function(){var e,r;return Jt(this,function(s){switch(n){case fr.MediaPipeHands:if(r=void 0,(e=t)!=null){if(e.runtime==="tfjs")return[2,jN(e)];if(e.runtime==="mediapipe")return[2,bN(e)];r=e.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+r);default:throw new Error(n+" is not a supported model name.")}})})}(function(n){n.MediaPipeHands="MediaPipeHands"})(fr||(fr={}));/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class ue{constructor(t,e,r,s,i="div"){this.parent=t,this.object=e,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),ue.nextNameID=ue.nextNameID||0,this.$name.id=`lil-gui-name-${++ue.nextNameID}`,this.$widget=document.createElement(i),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class HN extends ue{constructor(t,e,r){super(t,e,r,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Us(n){let t,e;return(t=n.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const UN={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Us,toHexString:Us},In={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},KN={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,t,e=1){const r=In.fromHexString(n);t[0]=(r>>16&255)/255*e,t[1]=(r>>8&255)/255*e,t[2]=(r&255)/255*e},toHexString([n,t,e],r=1){r=255/r;const s=n*r<<16^t*r<<8^e*r<<0;return In.toHexString(s)}},WN={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,t,e=1){const r=In.fromHexString(n);t.r=(r>>16&255)/255*e,t.g=(r>>8&255)/255*e,t.b=(r&255)/255*e},toHexString({r:n,g:t,b:e},r=1){r=255/r;const s=n*r<<16^t*r<<8^e*r<<0;return In.toHexString(s)}},GN=[UN,In,KN,WN];function qN(n){return GN.find(t=>t.match(n))}class YN extends ue{constructor(t,e,r,s){super(t,e,r,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=qN(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const i=Us(this.$text.value);i&&this._setValueFromHexString(i)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class os extends ue{constructor(t,e,r){super(t,e,r,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class XN extends ue{constructor(t,e,r,s,i,a){super(t,e,r,"number"),this._initInput(),this.min(s),this.max(i);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let k=parseFloat(this.$input.value);isNaN(k)||(this._stepExplicit&&(k=this._snap(k)),this.setValue(this._clamp(k)))},e=k=>{const P=parseFloat(this.$input.value);isNaN(P)||(this._snapClampSetValue(P+k),this.$input.value=this.getValue())},r=k=>{k.code==="Enter"&&this.$input.blur(),k.code==="ArrowUp"&&(k.preventDefault(),e(this._step*this._arrowKeyMultiplier(k))),k.code==="ArrowDown"&&(k.preventDefault(),e(this._step*this._arrowKeyMultiplier(k)*-1))},s=k=>{this._inputFocused&&(k.preventDefault(),e(this._step*this._normalizeMouseWheel(k)))};let i=!1,a,o,l,c,p;const f=5,g=k=>{a=k.clientX,o=l=k.clientY,i=!0,c=this.getValue(),p=0,window.addEventListener("mousemove",b),window.addEventListener("mouseup",v)},b=k=>{if(i){const P=k.clientX-a,L=k.clientY-o;Math.abs(L)>f?(k.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(P)>f&&v()}if(!i){const P=k.clientY-l;p-=P*this._step*this._arrowKeyMultiplier(k),c+p>this._max?p=this._max-c:c+p<this._min&&(p=this._min-c),this._snapClampSetValue(c+p)}l=k.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",v)},S=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",g),this.$input.addEventListener("focus",S),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(k,P,L,D,C)=>(k-P)/(L-P)*(C-D)+D,e=k=>{const P=this.$slider.getBoundingClientRect();let L=t(k,P.left,P.right,this._min,this._max);this._snapClampSetValue(L)},r=k=>{this._setDraggingStyle(!0),e(k.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",i)},s=k=>{e(k.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",i)};let a=!1,o,l;const c=k=>{k.preventDefault(),this._setDraggingStyle(!0),e(k.touches[0].clientX),a=!1},p=k=>{k.touches.length>1||(this._hasScrollBar?(o=k.touches[0].clientX,l=k.touches[0].clientY,a=!0):c(k),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",g))},f=k=>{if(a){const P=k.touches[0].clientX-o,L=k.touches[0].clientY-l;Math.abs(P)>Math.abs(L)?c(k):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",g))}else k.preventDefault(),e(k.touches[0].clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",g)},b=this._callOnFinishChange.bind(this),v=400;let S;const _=k=>{if(Math.abs(k.deltaX)<Math.abs(k.deltaY)&&this._hasScrollBar)return;k.preventDefault();const L=this._normalizeMouseWheel(k)*this._step;this._snapClampSetValue(this.getValue()+L),this.$input.value=this.getValue(),clearTimeout(S),S=setTimeout(b,v)};this.$slider.addEventListener("mousedown",r),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",_,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:r}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,r=-t.wheelDelta/120,r*=this._stepExplicit?1:10),e+-r}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class JN extends ue{constructor(t,e,r,s){super(t,e,r,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(i=>{const a=document.createElement("option");a.innerHTML=i,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class ZN extends ue{constructor(t,e,r){super(t,e,r,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const QN=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function tT(n){const t=document.createElement("style");t.innerHTML=n;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let lo=!1;class wi{constructor({parent:t,autoPlace:e=t===void 0,container:r,width:s,title:i="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),l&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!lo&&o&&(tT(QN),lo=!0),r?r.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a,this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,e,r,s,i){if(Object(r)===r)return new JN(this,t,e,r);const a=t[e];switch(typeof a){case"number":return new XN(this,t,e,r,s,i);case"boolean":return new HN(this,t,e);case"string":return new ZN(this,t,e);case"function":return new os(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,r=1){return new YN(this,t,e,r)}addFolder(t){const e=new wi({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(r=>{r instanceof os||r._name in t.controllers&&r.load(t.controllers[r._name])}),e&&t.folders&&this.folders.forEach(r=>{r._title in t.folders&&r.load(t.folders[r._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(r=>{if(!(r instanceof os)){if(r._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${r._name}"`);e.controllers[r._name]=r.save()}}),t&&this.folders.forEach(r=>{if(r._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${r._title}"`);e.folders[r._title]=r.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const r=i=>{i.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",r))};this.$children.addEventListener("transitionend",r);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(r=>r.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const eT=wi;class nT extends EventTarget{elapsed=0;delta=16;id;constructor(){super(),this.tick(0)}tick(t){this.delta=t-this.elapsed,this.elapsed=t,this.dispatchEvent(new CustomEvent("tick",{detail:{elapsed:this.elapsed,delta:this.delta}})),this.id=requestAnimationFrame(e=>{this.tick(e)})}dispose(){this.id!=null&&cancelAnimationFrame(this.id)}}const Lu=new nT;class rT extends EventTarget{r=Math.min(window.devicePixelRatio,2);w=window.innerWidth*this.r;h=window.innerHeight*this.r;handleResize=this.update.bind(this);constructor(){super(),window.addEventListener("resize",this.handleResize)}update(){this.r=Math.min(window.devicePixelRatio,2),this.w=window.innerWidth*this.r,this.h=window.innerHeight*this.r,this.dispatchEvent(new CustomEvent("resize"))}dispose(){window.removeEventListener("resize",this.handleResize)}}const Ne=new rT,Cn=new eT,Vt={color:"#ff0000",width:2,showVideo:!0,backgroundColor:"#ffffff",clear:fT};Cn.addColor(Vt,"color");Cn.add(Vt,"width",1,20,1);Cn.add(Vt,"showVideo").name("Show video").onChange(n=>{Ni.style.display=n?"block":"none",Bu.style.backgroundColor=n?"transparent":Vt.backgroundColor});Cn.addColor(Vt,"backgroundColor").onChange(n=>{Vt.showVideo||(Bu.style.backgroundColor=n)});Cn.add(Vt,"clear");const sT=fr.MediaPipeHands,iT=await MN(sT,{runtime:"mediapipe",modelType:"full",solutionPath:"/fingertip-bubbles/hands"}),xn=1280,Sn=720,Pu=xn/Sn,Ks=document.createElement("video");navigator.mediaDevices.getUserMedia({video:{width:xn,height:Sn,aspectRatio:{exact:Pu}},audio:!1}).then(n=>{Ks.srcObject=n,Ks.play()});function vi(){const n=document.createElement("canvas");document.body.appendChild(n),n.style.display="block",n.style.position="fixed",n.style.top="0",n.style.left="0";const t=()=>{const{w:e,h:r,r:s}=Ne;n.width=e,n.height=r,n.style.width=`${e/s}px`,n.style.height=`${r/s}px`};return t(),Ne.addEventListener("resize",t),{canvas:n,ctx:n.getContext("2d")}}Lu.addEventListener("tick",dT);const Dt={x:Ne.w/2,y:Ne.h/2,active:!1,inView:!1},{canvas:Ni,ctx:Qe}=vi();Ni.style.display=Vt.showVideo?"block":"none";function aT(){const{w:n,h:t}=Ne;Qe.save(),Qe.scale(-1,1),Qe.translate(-n,0);const e=n/t,{sx:r,sy:s,sw:i,sh:a}=(()=>{if(e>=Pu){const o=n/xn,l=0,c=(Sn*o-t)/o/2,p=xn,f=t/o;return{sx:l,sy:c,sw:p,sh:f}}else{const o=t/Sn,l=(xn*o-n)/o/2,c=0,p=n/o;return{sx:l,sy:c,sw:p,sh:Sn}}})();Qe.drawImage(Ks,r,s,i,a,0,0,n,t),Qe.restore()}function co(n,t,e){return n+(t-n)*e}function oT(){iT.estimateHands(Ni).then(n=>{const t=n.find(e=>e.handedness==="Right"&&e.score>.8);if(Dt.inView=!!t,t){const[,,,,e,,,,r]=t.keypoints,s=.3,i=16,a=1-Math.pow(1-s,Lu.delta/i);Dt.x=co(Dt.x,r.x,a),Dt.y=co(Dt.y,r.y,a);const o=Math.sqrt((e.x-r.x)**2+(e.y-r.y)**2);Dt.active=o<(Dt.active?70:30)}else Dt.active=!1})}function uT(){const{w:n,h:t}=Ne;Qe.clearRect(0,0,n,t),aT(),oT()}const{ctx:re,canvas:lT}=vi();lT.style.zIndex="1";function cT(){const{x:n,y:t,active:e,inView:r}=Dt;r&&(re.save(),re.beginPath(),re.arc(n,t,Math.max(Vt.width/2,4),0,Math.PI*2),re.fillStyle=e?Vt.color:"black",re.strokeStyle=e?Vt.color:"white",re.lineWidth=1,re.fill(),re.stroke(),re.restore())}function hT(){const{w:n,h:t}=Ne;re.clearRect(0,0,n,t),cT()}const{ctx:pe,canvas:Bu}=vi();let qn=!1;function pT(){if(!Dt.active){qn&&(qn=!1,pe.closePath());return}pe.lineWidth=Vt.width,pe.strokeStyle=Vt.color,pe.lineCap="round",Dt.active&&qn===!1?(qn=!0,pe.beginPath(),pe.moveTo(Dt.x,Dt.y)):pe.lineTo(Dt.x,Dt.y),pe.stroke()}function fT(){pe.clearRect(0,0,Ne.w,Ne.h)}function dT(){uT(),hT(),pT()}
