(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function RS(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $f={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function CS(){if(Tg)return Oo;Tg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Ag;function wS(){return Ag||(Ag=1,$f.exports=CS()),$f.exports}var wt=wS(),td={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function DS(){if(Rg)return le;Rg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(N,K,gt){this.props=N,this.context=K,this.refs=y,this.updater=gt||b}x.prototype.isReactComponent={},x.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=x.prototype;function U(N,K,gt){this.props=N,this.context=K,this.refs=y,this.updater=gt||b}var O=U.prototype=new D;O.constructor=U,C(O,x.prototype),O.isPureReactComponent=!0;var V=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function I(N,K,gt){var At=gt.ref;return{$$typeof:s,type:N,key:K,ref:At!==void 0?At:null,props:gt}}function Z(N,K){return I(N.type,K,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function Q(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return K[gt]})}var ut=/\/+/g;function mt(N,K){return typeof N=="object"&&N!==null&&N.key!=null?Q(""+N.key):K.toString(36)}function X(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(P,P):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function L(N,K,gt,At,Tt){var tt=typeof N;(tt==="undefined"||tt==="boolean")&&(N=null);var Et=!1;if(N===null)Et=!0;else switch(tt){case"bigint":case"string":case"number":Et=!0;break;case"object":switch(N.$$typeof){case s:case e:Et=!0;break;case S:return Et=N._init,L(Et(N._payload),K,gt,At,Tt)}}if(Et)return Tt=Tt(N),Et=At===""?"."+mt(N,0):At,V(Tt)?(gt="",Et!=null&&(gt=Et.replace(ut,"$&/")+"/"),L(Tt,K,gt,"",function(te){return te})):Tt!=null&&(H(Tt)&&(Tt=Z(Tt,gt+(Tt.key==null||N&&N.key===Tt.key?"":(""+Tt.key).replace(ut,"$&/")+"/")+Et)),K.push(Tt)),1;Et=0;var Rt=At===""?".":At+":";if(V(N))for(var Ft=0;Ft<N.length;Ft++)At=N[Ft],tt=Rt+mt(At,Ft),Et+=L(At,K,gt,tt,Tt);else if(Ft=M(N),typeof Ft=="function")for(N=Ft.call(N),Ft=0;!(At=N.next()).done;)At=At.value,tt=Rt+mt(At,Ft++),Et+=L(At,K,gt,tt,Tt);else if(tt==="object"){if(typeof N.then=="function")return L(X(N),K,gt,At,Tt);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Et}function z(N,K,gt){if(N==null)return N;var At=[],Tt=0;return L(N,At,"","",function(tt){return K.call(gt,tt,Tt++)}),At}function st(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(gt){(N._status===0||N._status===-1)&&(N._status=1,N._result=gt)},function(gt){(N._status===0||N._status===-1)&&(N._status=2,N._result=gt)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var dt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Mt={map:z,forEach:function(N,K,gt){z(N,function(){K.apply(this,arguments)},gt)},count:function(N){var K=0;return z(N,function(){K++}),K},toArray:function(N){return z(N,function(K){return K})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return le.Activity=v,le.Children=Mt,le.Component=x,le.Fragment=i,le.Profiler=l,le.PureComponent=U,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,le.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},le.cache=function(N){return function(){return N.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(N,K,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=C({},N.props),Tt=N.key;if(K!=null)for(tt in K.key!==void 0&&(Tt=""+K.key),K)!T.call(K,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&K.ref===void 0||(At[tt]=K[tt]);var tt=arguments.length-2;if(tt===1)At.children=gt;else if(1<tt){for(var Et=Array(tt),Rt=0;Rt<tt;Rt++)Et[Rt]=arguments[Rt+2];At.children=Et}return I(N.type,Tt,At)},le.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},le.createElement=function(N,K,gt){var At,Tt={},tt=null;if(K!=null)for(At in K.key!==void 0&&(tt=""+K.key),K)T.call(K,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Tt[At]=K[At]);var Et=arguments.length-2;if(Et===1)Tt.children=gt;else if(1<Et){for(var Rt=Array(Et),Ft=0;Ft<Et;Ft++)Rt[Ft]=arguments[Ft+2];Tt.children=Rt}if(N&&N.defaultProps)for(At in Et=N.defaultProps,Et)Tt[At]===void 0&&(Tt[At]=Et[At]);return I(N,tt,Tt)},le.createRef=function(){return{current:null}},le.forwardRef=function(N){return{$$typeof:p,render:N}},le.isValidElement=H,le.lazy=function(N){return{$$typeof:S,_payload:{_status:-1,_result:N},_init:st}},le.memo=function(N,K){return{$$typeof:h,type:N,compare:K===void 0?null:K}},le.startTransition=function(N){var K=F.T,gt={};F.T=gt;try{var At=N(),Tt=F.S;Tt!==null&&Tt(gt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(P,dt)}catch(tt){dt(tt)}finally{K!==null&&gt.types!==null&&(K.types=gt.types),F.T=K}},le.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},le.use=function(N){return F.H.use(N)},le.useActionState=function(N,K,gt){return F.H.useActionState(N,K,gt)},le.useCallback=function(N,K){return F.H.useCallback(N,K)},le.useContext=function(N){return F.H.useContext(N)},le.useDebugValue=function(){},le.useDeferredValue=function(N,K){return F.H.useDeferredValue(N,K)},le.useEffect=function(N,K){return F.H.useEffect(N,K)},le.useEffectEvent=function(N){return F.H.useEffectEvent(N)},le.useId=function(){return F.H.useId()},le.useImperativeHandle=function(N,K,gt){return F.H.useImperativeHandle(N,K,gt)},le.useInsertionEffect=function(N,K){return F.H.useInsertionEffect(N,K)},le.useLayoutEffect=function(N,K){return F.H.useLayoutEffect(N,K)},le.useMemo=function(N,K){return F.H.useMemo(N,K)},le.useOptimistic=function(N,K){return F.H.useOptimistic(N,K)},le.useReducer=function(N,K,gt){return F.H.useReducer(N,K,gt)},le.useRef=function(N){return F.H.useRef(N)},le.useState=function(N){return F.H.useState(N)},le.useSyncExternalStore=function(N,K,gt){return F.H.useSyncExternalStore(N,K,gt)},le.useTransition=function(){return F.H.useTransition()},le.version="19.2.7",le}var Cg;function Uh(){return Cg||(Cg=1,td.exports=DS()),td.exports}var ee=Uh();const US=RS(ee);var ed={exports:{}},Po={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function NS(){return wg||(wg=1,(function(s){function e(L,z){var st=L.length;L.push(z);t:for(;0<st;){var dt=st-1>>>1,Mt=L[dt];if(0<l(Mt,z))L[dt]=z,L[st]=Mt,st=dt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var z=L[0],st=L.pop();if(st!==z){L[0]=st;t:for(var dt=0,Mt=L.length,N=Mt>>>1;dt<N;){var K=2*(dt+1)-1,gt=L[K],At=K+1,Tt=L[At];if(0>l(gt,st))At<Mt&&0>l(Tt,gt)?(L[dt]=Tt,L[At]=st,dt=At):(L[dt]=gt,L[K]=st,dt=K);else if(At<Mt&&0>l(Tt,st))L[dt]=Tt,L[At]=st,dt=At;else break t}}return z}function l(L,z){var st=L.sortIndex-z.sortIndex;return st!==0?st:L.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,v=null,g=3,M=!1,b=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function O(L){for(var z=i(h);z!==null;){if(z.callback===null)r(h);else if(z.startTime<=L)r(h),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(h)}}function V(L){if(C=!1,O(L),!b)if(i(m)!==null)b=!0,P||(P=!0,Q());else{var z=i(h);z!==null&&X(V,z.startTime-L)}}var P=!1,F=-1,T=5,I=-1;function Z(){return y?!0:!(s.unstable_now()-I<T)}function H(){if(y=!1,P){var L=s.unstable_now();I=L;var z=!0;try{t:{b=!1,C&&(C=!1,D(F),F=-1),M=!0;var st=g;try{e:{for(O(L),v=i(m);v!==null&&!(v.expirationTime>L&&Z());){var dt=v.callback;if(typeof dt=="function"){v.callback=null,g=v.priorityLevel;var Mt=dt(v.expirationTime<=L);if(L=s.unstable_now(),typeof Mt=="function"){v.callback=Mt,O(L),z=!0;break e}v===i(m)&&r(m),O(L)}else r(m);v=i(m)}if(v!==null)z=!0;else{var N=i(h);N!==null&&X(V,N.startTime-L),z=!1}}break t}finally{v=null,g=st,M=!1}z=void 0}}finally{z?Q():P=!1}}}var Q;if(typeof U=="function")Q=function(){U(H)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,mt=ut.port2;ut.port1.onmessage=H,Q=function(){mt.postMessage(null)}}else Q=function(){x(H,0)};function X(L,z){F=x(function(){L(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L){L.callback=null},s.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(L){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var st=g;g=z;try{return L()}finally{g=st}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var st=g;g=L;try{return z()}finally{g=st}},s.unstable_scheduleCallback=function(L,z,st){var dt=s.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?dt+st:dt):st=dt,L){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=st+Mt,L={id:S++,callback:z,priorityLevel:L,startTime:st,expirationTime:Mt,sortIndex:-1},st>dt?(L.sortIndex=st,e(h,L),i(m)===null&&L===i(h)&&(C?(D(F),F=-1):C=!0,X(V,st-dt))):(L.sortIndex=Mt,e(m,L),b||M||(b=!0,P||(P=!0,Q()))),L},s.unstable_shouldYield=Z,s.unstable_wrapCallback=function(L){var z=g;return function(){var st=g;g=z;try{return L.apply(this,arguments)}finally{g=st}}}})(id)),id}var Dg;function LS(){return Dg||(Dg=1,nd.exports=NS()),nd.exports}var ad={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function OS(){if(Ug)return zn;Ug=1;var s=Uh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:S}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,zn.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,S)},zn.flushSync=function(m){var h=d.T,S=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=S,r.d.f()}},zn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},zn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},zn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,v=p(S,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):S==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},zn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},zn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,v=p(S,h.crossOrigin);r.d.L(m,S,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},zn.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},zn.requestFormReset=function(m){r.d.r(m)},zn.unstable_batchedUpdates=function(m,h){return m(h)},zn.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},zn.useFormStatus=function(){return d.H.useHostTransitionStatus()},zn.version="19.2.7",zn}var Ng;function PS(){if(Ng)return ad.exports;Ng=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ad.exports=OS(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function IS(){if(Lg)return Po;Lg=1;var s=LS(),e=Uh(),i=PS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,o=f;break}if(R===o){_=!0,o=c,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,o=c;break}if(R===o){_=!0,o=f,a=c;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case P:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var X=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},dt=[],Mt=-1;function N(t){return{current:t}}function K(t){0>Mt||(t.current=dt[Mt],dt[Mt]=null,Mt--)}function gt(t,n){Mt++,dt[Mt]=t.current,t.current=n}var At=N(null),Tt=N(null),tt=N(null),Et=N(null);function Rt(t,n){switch(gt(tt,n),gt(Tt,t),gt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?j0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=j0(n),t=Z0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(At),gt(At,t)}function Ft(){K(At),K(Tt),K(tt)}function te(t){t.memoizedState!==null&&gt(Et,t);var n=At.current,a=Z0(n,t.type);n!==a&&(gt(Tt,t),gt(At,a))}function Qt(t){Tt.current===t&&(K(At),K(Tt)),Et.current===t&&(K(Et),Do._currentValue=st)}var Pe,ue;function pe(t){if(Pe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Pe=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+t+ue}var Re=!1;function oe(t,n){if(!t||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var at=lt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(lt){at=lt}t.call(xt.prototype)}}else{try{throw Error()}catch(lt){at=lt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var B=_.split(`
`),$=R.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===$.length)for(o=B.length-1,c=$.length-1;1<=o&&0<=c&&B[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==$[c]){var pt=`
`+B[o].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=o&&0<=c);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function Qe(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return oe(t.type,!1);case 11:return oe(t.type.render,!1);case 1:return oe(t.type,!0);case 31:return pe("Activity");default:return""}}function Ie(t){try{var n="",a=null;do n+=Qe(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var dn=Object.prototype.hasOwnProperty,W=s.unstable_scheduleCallback,Je=s.unstable_cancelCallback,bt=s.unstable_shouldYield,Ht=s.unstable_requestPaint,St=s.unstable_now,me=s.unstable_getCurrentPriorityLevel,w=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,Y=s.unstable_NormalPriority,ft=s.unstable_LowPriority,yt=s.unstable_IdlePriority,Dt=s.log,Nt=s.unstable_setDisableYieldValue,ot=null,ct=null;function Pt(t){if(typeof Dt=="function"&&Nt(t),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(ot,t)}catch{}}var It=Math.clz32?Math.clz32:re,Lt=Math.log,Ut=Math.LN2;function re(t){return t>>>=0,t===0?32:31-(Lt(t)/Ut|0)|0}var ne=256,fe=262144,G=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ht(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?c=Ct(o):(_&=R,_!==0?c=Ct(_):a||(a=R&~t,a!==0&&(c=Ct(a))))):(R=o&~f,R!==0?c=Ct(R):_!==0?c=Ct(_):a||(a=o&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ot(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(){var t=G;return G<<=1,(G&62914560)===0&&(G=4194304),t}function qt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ie(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $e(t,n,a,o,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=_&~a;0<a;){var pt=31-It(a),xt=1<<pt;R[pt]=0,B[pt]=-1;var at=$[pt];if(at!==null)for($[pt]=null,pt=0;pt<at.length;pt++){var lt=at[pt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}o!==0&&we(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function we(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-It(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Vn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-It(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Ln(t,n){var a=n&-n;return a=(a&42)!==0?1:Ii(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ii(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Da(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:vg(t.type))}function $i(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var Tn=Math.random().toString(36).slice(2),nn="__reactFiber$"+Tn,hn="__reactProps$"+Tn,Ei="__reactContainer$"+Tn,Fi="__reactEvents$"+Tn,qr="__reactListeners$"+Tn,Ua="__reactHandles$"+Tn,Na="__reactResources$"+Tn,Me="__reactMarker$"+Tn;function On(t){delete t[nn],delete t[hn],delete t[Fi],delete t[qr],delete t[Ua]}function Pn(t){var n=t[nn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ei]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=ng(t);t!==null;){if(a=t[nn])return a;t=ng(t)}return n}t=a,a=t.parentNode}return null}function La(t){if(t=t[nn]||t[Ei]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function pr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Oa(t){var n=t[Na];return n||(n=t[Na]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(t){t[Me]=!0}var Qo=new Set,A={};function q(t,n){it(t,n),it(t+"Capture",n)}function it(t,n){for(A[t]=n,t=0;t<n.length;t++)Qo.add(n[t])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},Gt={};function Xt(t){return dn.call(Gt,t)?!0:dn.call(nt,t)?!1:et.test(t)?Gt[t]=!0:(nt[t]=!0,!1)}function zt(t,n,a){if(Xt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Yt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Wt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Jt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function de(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ue(t){if(!t._valueTracker){var n=de(t)?"checked":"value";t._valueTracker=Kt(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=de(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Ze(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Fe=/[\n"\\]/g;function Be(t){return t.replace(Fe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function kt(t,n,a,o,c,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Jt(n)):t.value!==""+Jt(n)&&(t.value=""+Jt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?ve(t,_,Jt(n)):a!=null?ve(t,_,Jt(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Jt(R):t.removeAttribute("name")}function In(t,n,a,o,c,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ue(t);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ue(t)}function ve(t,n,a){n==="number"&&Ze(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function ti(t,n,a){if(n!=null&&(n=""+Jt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Jt(a):""}function bi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(X(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Jt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ue(t)}function ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var He=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||He.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ti(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&rn(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&rn(t,f,n[f])}function ze(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mr(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var Zc=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,jr=null;function Yh(t){var n=La(t);if(n&&(t=n.stateNode)){var a=t[hn]||null;t:switch(t=n.stateNode,n.type){case"input":if(kt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Be(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[hn]||null;if(!c)throw Error(r(90));kt(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break t;case"textarea":ti(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Mn(t,!!a.multiple,n,!1)}}}var Qc=!1;function jh(t,n,a){if(Qc)return t(n,a);Qc=!0;try{var o=t(n);return o}finally{if(Qc=!1,(Yr!==null||jr!==null)&&(Fl(),Yr&&(n=Yr,t=jr,jr=Yr=null,Yh(n),t)))for(n=0;n<t.length;n++)Yh(t[n])}}function qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[hn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(ea)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Jc=!1}var Ia=null,$c=null,Jo=null;function Zh(){if(Jo)return Jo;var t,n=$c,a=n.length,o,c="value"in Ia?Ia.value:Ia.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===c[f-o];o++);return Jo=c.slice(t,1<o?1-o:void 0)}function $o(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Kh(){return!1}function Wn(t){function n(a,o,c,f,_){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Kh,this.isPropagationStopped=Kh,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Wn(gr),js=v({},gr,{view:0,detail:0}),Tv=Wn(js),tu,eu,Zs,nl=v({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(tu=t.screenX-Zs.screenX,eu=t.screenY-Zs.screenY):eu=tu=0,Zs=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Qh=Wn(nl),Av=v({},nl,{dataTransfer:0}),Rv=Wn(Av),Cv=v({},js,{relatedTarget:0}),nu=Wn(Cv),wv=v({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=Wn(wv),Uv=v({},gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nv=Wn(Uv),Lv=v({},gr,{data:0}),Jh=Wn(Lv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Iv[t])?!!n[t]:!1}function iu(){return zv}var Fv=v({},js,{key:function(t){if(t.key){var n=Ov[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=Wn(Fv),Hv=v({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Wn(Hv),Gv=v({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Vv=Wn(Gv),kv=v({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=Wn(kv),Wv=v({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Wn(Wv),Yv=v({},gr,{newState:0,oldState:0}),jv=Wn(Yv),Zv=[9,13,27,32],au=ea&&"CompositionEvent"in window,Ks=null;ea&&"documentMode"in document&&(Ks=document.documentMode);var Kv=ea&&"TextEvent"in window&&!Ks,tp=ea&&(!au||Ks&&8<Ks&&11>=Ks),ep=" ",np=!1;function ip(t,n){switch(t){case"keyup":return Zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function Qv(t,n){switch(t){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return t=n.data,t===ep&&np?null:t;default:return null}}function Jv(t,n){if(Zr)return t==="compositionend"||!au&&ip(t,n)?(t=Zh(),Jo=$c=Ia=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$v[t.type]:n==="textarea"}function sp(t,n,a,o){Yr?jr?jr.push(o):jr=[o]:Yr=o,n=Wl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Qs=null,Js=null;function tx(t){V0(t,0)}function il(t){var n=pr(t);if(an(n))return t}function op(t,n){if(t==="change")return n}var lp=!1;if(ea){var ru;if(ea){var su="oninput"in document;if(!su){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),su=typeof cp.oninput=="function"}ru=su}else ru=!1;lp=ru&&(!document.documentMode||9<document.documentMode)}function up(){Qs&&(Qs.detachEvent("onpropertychange",fp),Js=Qs=null)}function fp(t){if(t.propertyName==="value"&&il(Js)){var n=[];sp(n,Js,t,Kc(t)),jh(tx,n)}}function ex(t,n,a){t==="focusin"?(up(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",fp)):t==="focusout"&&up()}function nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(Js)}function ix(t,n){if(t==="click")return il(n)}function ax(t,n){if(t==="input"||t==="change")return il(n)}function rx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:rx;function $s(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!dn.call(n,c)||!ni(t[c],n[c]))return!1}return!0}function dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,n){var a=dp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=dp(a)}}function pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ze(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ze(t.document)}return n}function ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var sx=ea&&"documentMode"in document&&11>=document.documentMode,Kr=null,lu=null,to=null,cu=!1;function gp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Kr==null||Kr!==Ze(o)||(o=Kr,"selectionStart"in o&&ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&$s(to,o)||(to=o,o=Wl(lu,"onSelect"),0<o.length&&(n=new el("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Kr)))}function _r(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Qr={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},uu={},_p={};ea&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function vr(t){if(uu[t])return uu[t];if(!Qr[t])return t;var n=Qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return uu[t]=n[a];return t}var vp=vr("animationend"),xp=vr("animationiteration"),Sp=vr("animationstart"),ox=vr("transitionrun"),lx=vr("transitionstart"),cx=vr("transitioncancel"),Mp=vr("transitionend"),yp=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function Ai(t,n){yp.set(t,n),q(n,[t])}var al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],Jr=0,du=0;function rl(){for(var t=Jr,n=du=Jr=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var c=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}f!==0&&Ep(a,c,f)}}function sl(t,n,a,o){fi[Jr++]=t,fi[Jr++]=n,fi[Jr++]=a,fi[Jr++]=o,du|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function hu(t,n,a,o){return sl(t,n,a,o),ol(t)}function xr(t,n){return sl(t,null,null,n),ol(t)}function Ep(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-It(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ol(t){if(50<Eo)throw Eo=0,Ef=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $r={};function ux(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,n,a,o){return new ux(t,n,a,o)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var a=t.alternate;return a===null?(a=ii(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ll(t,n,a,o,c,f){var _=0;if(o=t,typeof t=="function")pu(t)&&(_=1);else if(typeof t=="string")_=mS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case I:return t=ii(31,a,n,c),t.elementType=I,t.lanes=f,t;case C:return Sr(a.children,c,f,n);case y:_=8,c|=24;break;case x:return t=ii(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case V:return t=ii(13,a,n,c),t.elementType=V,t.lanes=f,t;case P:return t=ii(19,a,n,c),t.elementType=P,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:_=10;break t;case D:_=9;break t;case O:_=11;break t;case F:_=14;break t;case T:_=16,o=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ii(_,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function Sr(t,n,a,o){return t=ii(7,t,o,n),t.lanes=a,t}function mu(t,n,a){return t=ii(6,t,null,n),t.lanes=a,t}function Tp(t){var n=ii(18,null,null,0);return n.stateNode=t,n}function gu(t,n,a){return n=ii(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ap=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ie(n)},Ap.set(t,n),n)}return{value:t,source:n,stack:Ie(n)}}var ts=[],es=0,cl=null,eo=0,hi=[],pi=0,za=null,Hi=1,Gi="";function ia(t,n){ts[es++]=eo,ts[es++]=cl,cl=t,eo=n}function Rp(t,n,a){hi[pi++]=Hi,hi[pi++]=Gi,hi[pi++]=za,za=t;var o=Hi;t=Gi;var c=32-It(o)-1;o&=~(1<<c),a+=1;var f=32-It(n)+c;if(30<f){var _=c-c%5;f=(o&(1<<_)-1).toString(32),o>>=_,c-=_,Hi=1<<32-It(n)+c|a<<c|o,Gi=f+t}else Hi=1<<f|a<<c|o,Gi=t}function _u(t){t.return!==null&&(ia(t,1),Rp(t,1,0))}function vu(t){for(;t===cl;)cl=ts[--es],ts[es]=null,eo=ts[--es],ts[es]=null;for(;t===za;)za=hi[--pi],hi[pi]=null,Gi=hi[--pi],hi[pi]=null,Hi=hi[--pi],hi[pi]=null}function Cp(t,n){hi[pi++]=Hi,hi[pi++]=Gi,hi[pi++]=za,Hi=n.id,Gi=n.overflow,za=t}var Cn=null,tn=null,be=!1,Fa=null,mi=!1,xu=Error(r(519));function Ba(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(di(n,t)),xu}function wp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[nn]=t,n[hn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)Se(To[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||q0(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Ba(t,!0)}function Dp(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Cn=Cn.return}}function ns(t){if(t!==Cn)return!1;if(!be)return Dp(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ff(t.type,t.memoizedProps)),a=!a),a&&tn&&Ba(t),Dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=eg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=eg(t)}else n===27?(n=tn,$a(t.type)?(t=kf,kf=null,tn=t):tn=n):tn=Cn?_i(t.stateNode.nextSibling):null;return!0}function Mr(){tn=Cn=null,be=!1}function Su(){var t=Fa;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Fa=null),t}function no(t){Fa===null?Fa=[t]:Fa.push(t)}var Mu=N(null),yr=null,aa=null;function Ha(t,n,a){gt(Mu,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=Mu.current,K(Mu)}function yu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Eu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),yu(f.return,a,t),o||(_=null);break t}f=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),yu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function is(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=c.type;ni(c.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(c===Et.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}c=c.return}t!==null&&Eu(n,t,a,o),n.flags|=262144}function ul(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){yr=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Up(yr,t)}function fl(t,n){return yr===null&&Er(t),Up(t,n)}function Up(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(r(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var fx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},dx=s.unstable_scheduleCallback,hx=s.unstable_NormalPriority,mn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new fx,data:new Map,refCount:0}}function io(t){t.refCount--,t.refCount===0&&dx(hx,function(){t.controller.abort()})}var ao=null,Tu=0,as=0,rs=null;function px(t,n){if(ao===null){var a=ao=[];Tu=0,as=wf(),rs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Tu++,n.then(Np,Np),n}function Np(){if(--Tu===0&&ao!==null){rs!==null&&(rs.status="fulfilled");var t=ao;ao=null,as=0,rs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Lp=L.S;L.S=function(t,n){g0=St(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&px(t,n),Lp!==null&&Lp(t,n)};var br=N(null);function Au(){var t=br.current;return t!==null?t:Ke.pooledCache}function dl(t,n){n===null?gt(br,br.current):gt(br,n.pool)}function Op(){var t=Au();return t===null?null:{parent:mn._currentValue,pool:t}}var ss=Error(r(460)),Ru=Error(r(474)),hl=Error(r(542)),pl={then:function(){}};function Pp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ip(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fp(t),t;default:if(typeof n.status=="string")n.then(ta,ta);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fp(t),t}throw Ar=n,ss}}function Tr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ar=a,ss):a}}var Ar=null;function zp(){if(Ar===null)throw Error(r(459));var t=Ar;return Ar=null,t}function Fp(t){if(t===ss||t===hl)throw Error(r(483))}var os=null,ro=0;function ml(t){var n=ro;return ro+=1,os===null&&(os=[]),Ip(os,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bp(t){function n(j,k){if(t){var J=j.deletions;J===null?(j.deletions=[k],j.flags|=16):J.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function c(j,k){return j=na(j,k),j.index=0,j.sibling=null,j}function f(j,k,J){return j.index=J,t?(J=j.alternate,J!==null?(J=J.index,J<k?(j.flags|=67108866,k):J):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function _(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,k,J,_t){return k===null||k.tag!==6?(k=mu(J,j.mode,_t),k.return=j,k):(k=c(k,J),k.return=j,k)}function B(j,k,J,_t){var $t=J.type;return $t===C?pt(j,k,J.props.children,_t,J.key):k!==null&&(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Tr($t)===k.type)?(k=c(k,J.props),so(k,J),k.return=j,k):(k=ll(J.type,J.key,J.props,null,j.mode,_t),so(k,J),k.return=j,k)}function $(j,k,J,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=gu(J,j.mode,_t),k.return=j,k):(k=c(k,J.children||[]),k.return=j,k)}function pt(j,k,J,_t,$t){return k===null||k.tag!==7?(k=Sr(J,j.mode,_t,$t),k.return=j,k):(k=c(k,J),k.return=j,k)}function xt(j,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=mu(""+k,j.mode,J),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=ll(k.type,k.key,k.props,null,j.mode,J),so(J,k),J.return=j,J;case b:return k=gu(k,j.mode,J),k.return=j,k;case T:return k=Tr(k),xt(j,k,J)}if(X(k)||Q(k))return k=Sr(k,j.mode,J,null),k.return=j,k;if(typeof k.then=="function")return xt(j,ml(k),J);if(k.$$typeof===U)return xt(j,fl(j,k),J);gl(j,k)}return null}function at(j,k,J,_t){var $t=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return $t!==null?null:R(j,k,""+J,_t);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===$t?B(j,k,J,_t):null;case b:return J.key===$t?$(j,k,J,_t):null;case T:return J=Tr(J),at(j,k,J,_t)}if(X(J)||Q(J))return $t!==null?null:pt(j,k,J,_t,null);if(typeof J.then=="function")return at(j,k,ml(J),_t);if(J.$$typeof===U)return at(j,k,fl(j,J),_t);gl(j,J)}return null}function lt(j,k,J,_t,$t){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return j=j.get(J)||null,R(k,j,""+_t,$t);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return j=j.get(_t.key===null?J:_t.key)||null,B(k,j,_t,$t);case b:return j=j.get(_t.key===null?J:_t.key)||null,$(k,j,_t,$t);case T:return _t=Tr(_t),lt(j,k,J,_t,$t)}if(X(_t)||Q(_t))return j=j.get(J)||null,pt(k,j,_t,$t,null);if(typeof _t.then=="function")return lt(j,k,J,ml(_t),$t);if(_t.$$typeof===U)return lt(j,k,J,fl(k,_t),$t);gl(k,_t)}return null}function jt(j,k,J,_t){for(var $t=null,Ne=null,Zt=k,ge=k=0,Ee=null;Zt!==null&&ge<J.length;ge++){Zt.index>ge?(Ee=Zt,Zt=null):Ee=Zt.sibling;var Le=at(j,Zt,J[ge],_t);if(Le===null){Zt===null&&(Zt=Ee);break}t&&Zt&&Le.alternate===null&&n(j,Zt),k=f(Le,k,ge),Ne===null?$t=Le:Ne.sibling=Le,Ne=Le,Zt=Ee}if(ge===J.length)return a(j,Zt),be&&ia(j,ge),$t;if(Zt===null){for(;ge<J.length;ge++)Zt=xt(j,J[ge],_t),Zt!==null&&(k=f(Zt,k,ge),Ne===null?$t=Zt:Ne.sibling=Zt,Ne=Zt);return be&&ia(j,ge),$t}for(Zt=o(Zt);ge<J.length;ge++)Ee=lt(Zt,j,ge,J[ge],_t),Ee!==null&&(t&&Ee.alternate!==null&&Zt.delete(Ee.key===null?ge:Ee.key),k=f(Ee,k,ge),Ne===null?$t=Ee:Ne.sibling=Ee,Ne=Ee);return t&&Zt.forEach(function(ar){return n(j,ar)}),be&&ia(j,ge),$t}function ae(j,k,J,_t){if(J==null)throw Error(r(151));for(var $t=null,Ne=null,Zt=k,ge=k=0,Ee=null,Le=J.next();Zt!==null&&!Le.done;ge++,Le=J.next()){Zt.index>ge?(Ee=Zt,Zt=null):Ee=Zt.sibling;var ar=at(j,Zt,Le.value,_t);if(ar===null){Zt===null&&(Zt=Ee);break}t&&Zt&&ar.alternate===null&&n(j,Zt),k=f(ar,k,ge),Ne===null?$t=ar:Ne.sibling=ar,Ne=ar,Zt=Ee}if(Le.done)return a(j,Zt),be&&ia(j,ge),$t;if(Zt===null){for(;!Le.done;ge++,Le=J.next())Le=xt(j,Le.value,_t),Le!==null&&(k=f(Le,k,ge),Ne===null?$t=Le:Ne.sibling=Le,Ne=Le);return be&&ia(j,ge),$t}for(Zt=o(Zt);!Le.done;ge++,Le=J.next())Le=lt(Zt,j,ge,Le.value,_t),Le!==null&&(t&&Le.alternate!==null&&Zt.delete(Le.key===null?ge:Le.key),k=f(Le,k,ge),Ne===null?$t=Le:Ne.sibling=Le,Ne=Le);return t&&Zt.forEach(function(AS){return n(j,AS)}),be&&ia(j,ge),$t}function Ye(j,k,J,_t){if(typeof J=="object"&&J!==null&&J.type===C&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var $t=J.key;k!==null;){if(k.key===$t){if($t=J.type,$t===C){if(k.tag===7){a(j,k.sibling),_t=c(k,J.props.children),_t.return=j,j=_t;break t}}else if(k.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===T&&Tr($t)===k.type){a(j,k.sibling),_t=c(k,J.props),so(_t,J),_t.return=j,j=_t;break t}a(j,k);break}else n(j,k);k=k.sibling}J.type===C?(_t=Sr(J.props.children,j.mode,_t,J.key),_t.return=j,j=_t):(_t=ll(J.type,J.key,J.props,null,j.mode,_t),so(_t,J),_t.return=j,j=_t)}return _(j);case b:t:{for($t=J.key;k!==null;){if(k.key===$t)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(j,k.sibling),_t=c(k,J.children||[]),_t.return=j,j=_t;break t}else{a(j,k);break}else n(j,k);k=k.sibling}_t=gu(J,j.mode,_t),_t.return=j,j=_t}return _(j);case T:return J=Tr(J),Ye(j,k,J,_t)}if(X(J))return jt(j,k,J,_t);if(Q(J)){if($t=Q(J),typeof $t!="function")throw Error(r(150));return J=$t.call(J),ae(j,k,J,_t)}if(typeof J.then=="function")return Ye(j,k,ml(J),_t);if(J.$$typeof===U)return Ye(j,k,fl(j,J),_t);gl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(j,k.sibling),_t=c(k,J),_t.return=j,j=_t):(a(j,k),_t=mu(J,j.mode,_t),_t.return=j,j=_t),_(j)):a(j,k)}return function(j,k,J,_t){try{ro=0;var $t=Ye(j,k,J,_t);return os=null,$t}catch(Zt){if(Zt===ss||Zt===hl)throw Zt;var Ne=ii(29,Zt,null,j.mode);return Ne.lanes=_t,Ne.return=j,Ne}finally{}}}var Rr=Bp(!0),Hp=Bp(!1),Ga=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ol(t),Ep(t,null,a),n}return sl(t,o,n,a),ol(t)}function oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Vn(t,a)}}function Du(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Uu=!1;function lo(){if(Uu){var t=rs;if(t!==null)throw t}}function co(t,n,a,o){Uu=!1;var c=t.updateQueue;Ga=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var B=R,$=B.next;B.next=null,_===null?f=$:_.next=$,_=B;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==_&&(R===null?pt.firstBaseUpdate=$:R.next=$,pt.lastBaseUpdate=B))}if(f!==null){var xt=c.baseState;_=0,pt=$=B=null,R=f;do{var at=R.lane&-536870913,lt=at!==R.lane;if(lt?(ye&at)===at:(o&at)===at){at!==0&&at===as&&(Uu=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var jt=t,ae=R;at=n;var Ye=a;switch(ae.tag){case 1:if(jt=ae.payload,typeof jt=="function"){xt=jt.call(Ye,xt,at);break t}xt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ae.payload,at=typeof jt=="function"?jt.call(Ye,xt,at):jt,at==null)break t;xt=v({},xt,at);break t;case 2:Ga=!0}}at=R.callback,at!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?($=pt=lt,B=xt):pt=pt.next=lt,_|=at;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);pt===null&&(B=xt),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),ja|=_,t.lanes=_,t.memoizedState=xt}}function Gp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Vp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gp(a[t],n)}var ls=N(null),_l=N(0);function kp(t,n){t=pa,gt(_l,t),gt(ls,n),pa=t|n.baseLanes}function Nu(){gt(_l,pa),gt(ls,ls.current)}function Lu(){pa=_l.current,K(ls),K(_l)}var ai=N(null),gi=null;function Xa(t){var n=t.alternate;gt(cn,cn.current&1),gt(ai,t),gi===null&&(n===null||ls.current!==null||n.memoizedState!==null)&&(gi=t)}function Ou(t){gt(cn,cn.current),gt(ai,t),gi===null&&(gi=t)}function Xp(t){t.tag===22?(gt(cn,cn.current),gt(ai,t),gi===null&&(gi=t)):Wa()}function Wa(){gt(cn,cn.current),gt(ai,ai.current)}function ri(t){K(ai),gi===t&&(gi=null),K(cn)}var cn=N(0);function vl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gf(a)||Vf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,he=null,We=null,gn=null,xl=!1,cs=!1,Cr=!1,Sl=0,uo=0,us=null,gx=0;function on(){throw Error(r(321))}function Pu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Iu(t,n,a,o,c,f){return sa=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Rm:Qu,Cr=!1,f=a(o,c),Cr=!1,cs&&(f=qp(n,a,o,c)),Wp(t),f}function Wp(t){L.H=po;var n=We!==null&&We.next!==null;if(sa=0,gn=We=he=null,xl=!1,uo=0,us=null,n)throw Error(r(300));t===null||_n||(t=t.dependencies,t!==null&&ul(t)&&(_n=!0))}function qp(t,n,a,o){he=t;var c=0;do{if(cs&&(us=null),uo=0,cs=!1,25<=c)throw Error(r(301));if(c+=1,gn=We=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Cm,f=n(a,o)}while(cs);return f}function _x(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?fo(n):n,t=t.useState()[0],(We!==null?We.memoizedState:null)!==t&&(he.flags|=1024),n}function zu(){var t=Sl!==0;return Sl=0,t}function Fu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Bu(t){if(xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xl=!1}sa=0,gn=We=he=null,cs=!1,uo=Sl=0,us=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?he.memoizedState=gn=t:gn=gn.next=t,gn}function un(){if(We===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var n=gn===null?he.memoizedState:gn.next;if(n!==null)gn=n,We=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},gn===null?he.memoizedState=gn=t:gn=gn.next=t}return gn}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(t){var n=uo;return uo+=1,us===null&&(us=[]),t=Ip(us,t,n),n=he,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Rm:Qu),t}function yl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fo(t);if(t.$$typeof===U)return wn(t)}throw Error(r(438,String(t)))}function Hu(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Z;return n.index++,a}function oa(t,n){return typeof n=="function"?n(t):n}function El(t){var n=un();return Gu(n,We,t)}function Gu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=_=null,B=null,$=n,pt=!1;do{var xt=$.lane&-536870913;if(xt!==$.lane?(ye&xt)===xt:(sa&xt)===xt){var at=$.revertLane;if(at===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xt===as&&(pt=!0);else if((sa&at)===at){$=$.next,at===as&&(pt=!0);continue}else xt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(R=B=xt,_=f):B=B.next=xt,he.lanes|=at,ja|=at;xt=$.action,Cr&&a(f,xt),f=$.hasEagerState?$.eagerState:a(f,xt)}else at={lane:xt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(R=B=at,_=f):B=B.next=at,he.lanes|=xt,ja|=xt;$=$.next}while($!==null&&$!==n);if(B===null?_=f:B.next=R,!ni(f,t.memoizedState)&&(_n=!0,pt&&(a=rs,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Vu(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);ni(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Yp(t,n,a){var o=he,c=un(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ni((We||c).memoizedState,a);if(_&&(c.memoizedState=a,_n=!0),c=c.queue,Wu(Kp.bind(null,o,c,t),[t]),c.getSnapshot!==n||_||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,fs(9,{destroy:void 0},Zp.bind(null,o,c,a,n),null),Ke===null)throw Error(r(349));f||(sa&127)!==0||jp(o,n,a)}return a}function jp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Ml(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Zp(t,n,a,o){n.value=a,n.getSnapshot=o,Qp(n)&&Jp(t)}function Kp(t,n,a){return a(function(){Qp(n)&&Jp(t)})}function Qp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function Jp(t){var n=xr(t,2);n!==null&&Kn(n,t,2)}function ku(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Cr){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function $p(t,n,a,o){return t.baseState=a,Gu(t,We,typeof o=="function"?o:oa)}function vx(t,n,a,o,c){if(Al(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,tm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=L.T,_={};L.T=_;try{var R=a(c,o),B=L.S;B!==null&&B(_,R),em(t,n,R)}catch($){Xu(t,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),L.T=f}}else try{f=a(c,o),em(t,n,f)}catch($){Xu(t,n,$)}}function em(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){nm(t,n,o)},function(o){return Xu(t,n,o)}):nm(t,n,a)}function nm(t,n,a){n.status="fulfilled",n.value=a,im(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tm(t,a)))}function Xu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==o)}t.action=null}function im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function am(t,n){return n}function rm(t,n){if(be){var a=Ke.formState;if(a!==null){t:{var o=he;if(be){if(tn){e:{for(var c=tn,f=mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=_i(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){tn=_i(c.nextSibling),o=c.data==="F!";break t}}Ba(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=o,a=bm.bind(null,he,o),o.dispatch=a,o=ku(!1),f=Ku.bind(null,he,!1,o.queue),o=kn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=vx.bind(null,he,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function sm(t){var n=un();return om(n,We,t)}function om(t,n,a){if(n=Gu(t,n,am)[0],t=El(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=fo(n)}catch(_){throw _===ss?hl:_}else o=n;n=un();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,fs(9,{destroy:void 0},xx.bind(null,c,a),null)),[o,f,t]}function xx(t,n){t.action=n}function lm(t){var n=un(),a=We;if(a!==null)return om(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function fs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Ml(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function cm(){return un().memoizedState}function bl(t,n,a,o){var c=kn();he.flags|=t,c.memoizedState=fs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Tl(t,n,a,o){var c=un();o=o===void 0?null:o;var f=c.memoizedState.inst;We!==null&&o!==null&&Pu(o,We.memoizedState.deps)?c.memoizedState=fs(n,f,a,o):(he.flags|=t,c.memoizedState=fs(1|n,f,a,o))}function um(t,n){bl(8390656,8,t,n)}function Wu(t,n){Tl(2048,8,t,n)}function Sx(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=Ml(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function fm(t){var n=un().memoizedState;return Sx({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function dm(t,n){return Tl(4,2,t,n)}function hm(t,n){return Tl(4,4,t,n)}function pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mm(t,n,a){a=a!=null?a.concat([t]):null,Tl(4,4,pm.bind(null,n,t),a)}function qu(){}function gm(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function _m(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pu(n,o[1]))return o[0];if(o=t(),Cr){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[o,n],o}function Yu(t,n,a){return a===void 0||(sa&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=v0(),he.lanes|=t,ja|=t,a)}function vm(t,n,a,o){return ni(a,n)?a:ls.current!==null?(t=Yu(t,a,o),ni(t,n)||(_n=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(ye&261930)===0?(_n=!0,t.memoizedState=a):(t=v0(),he.lanes|=t,ja|=t,n)}function xm(t,n,a,o,c){var f=z.p;z.p=f!==0&&8>f?f:8;var _=L.T,R={};L.T=R,Ku(t,!1,n,a);try{var B=c(),$=L.S;if($!==null&&$(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=mx(B,o);ho(t,n,pt,li(t))}else ho(t,n,o,li(t))}catch(xt){ho(t,n,{then:function(){},status:"rejected",reason:xt},li())}finally{z.p=f,_!==null&&R.types!==null&&(_.types=R.types),L.T=_}}function Mx(){}function ju(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Sm(t).queue;xm(t,c,n,st,a===null?Mx:function(){return Mm(t),a(o)})}function Sm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mm(t){var n=Sm(t);n.next===null&&(n=t.alternate.memoizedState),ho(t,n.next.queue,{},li())}function Zu(){return wn(Do)}function ym(){return un().memoizedState}function Em(){return un().memoizedState}function yx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Va(a);var o=ka(n,t,a);o!==null&&(Kn(o,n,a),oo(o,n,a)),n={cache:bu()},t.payload=n;return}n=n.return}}function Ex(t,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?Tm(n,a):(a=hu(t,n,a,o),a!==null&&(Kn(a,t,o),Am(a,n,o)))}function bm(t,n,a){var o=li();ho(t,n,a,o)}function ho(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))Tm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(c.hasEagerState=!0,c.eagerState=R,ni(R,_))return sl(t,n,c,0),Ke===null&&rl(),!1}catch{}finally{}if(a=hu(t,n,c,o),a!==null)return Kn(a,t,o),Am(a,n,o),!0}return!1}function Ku(t,n,a,o){if(o={lane:2,revertLane:wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(r(479))}else n=hu(t,a,o,2),n!==null&&Kn(n,t,2)}function Al(t){var n=t.alternate;return t===he||n!==null&&n===he}function Tm(t,n){cs=xl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Am(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Vn(t,a)}}var po={readContext:wn,use:yl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};po.useEffectEvent=on;var Rm={readContext:wn,use:yl,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:um,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var o=t();if(Cr){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=kn();if(a!==void 0){var c=a(n);if(Cr){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=Ex.bind(null,he,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=ku(t);var n=t.queue,a=bm.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(t,n){var a=kn();return Yu(a,t,n)},useTransition:function(){var t=ku(!1);return t=xm.bind(null,he,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=he,c=kn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ke===null)throw Error(r(349));(ye&127)!==0||jp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,um(Kp.bind(null,o,f,t),[t]),o.flags|=2048,fs(9,{destroy:void 0},Zp.bind(null,o,f,a,n),null),a},useId:function(){var t=kn(),n=Ke.identifierPrefix;if(be){var a=Gi,o=Hi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Zu,useFormState:rm,useActionState:rm,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Hu,useCacheRefresh:function(){return kn().memoizedState=yx.bind(null,he)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:wn,use:yl,useCallback:gm,useContext:wn,useEffect:Wu,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:_m,useReducer:El,useRef:cm,useState:function(){return El(oa)},useDebugValue:qu,useDeferredValue:function(t,n){var a=un();return vm(a,We.memoizedState,t,n)},useTransition:function(){var t=El(oa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:Yp,useId:ym,useHostTransitionStatus:Zu,useFormState:sm,useActionState:sm,useOptimistic:function(t,n){var a=un();return $p(a,We,t,n)},useMemoCache:Hu,useCacheRefresh:Em};Qu.useEffectEvent=fm;var Cm={readContext:wn,use:yl,useCallback:gm,useContext:wn,useEffect:Wu,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:_m,useReducer:Vu,useRef:cm,useState:function(){return Vu(oa)},useDebugValue:qu,useDeferredValue:function(t,n){var a=un();return We===null?Yu(a,t,n):vm(a,We.memoizedState,t,n)},useTransition:function(){var t=Vu(oa)[0],n=un().memoizedState;return[typeof t=="boolean"?t:fo(t),n]},useSyncExternalStore:Yp,useId:ym,useHostTransitionStatus:Zu,useFormState:lm,useActionState:lm,useOptimistic:function(t,n){var a=un();return We!==null?$p(a,We,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Em};Cm.useEffectEvent=fm;function Ju(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $u={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=li(),c=Va(o);c.payload=n,a!=null&&(c.callback=a),n=ka(t,c,o),n!==null&&(Kn(n,t,o),oo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=li(),c=Va(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ka(t,c,o),n!==null&&(Kn(n,t,o),oo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,a),n!==null&&(Kn(n,t,a),oo(n,t,a))}};function wm(t,n,a,o,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!$s(a,o)||!$s(c,f):!0}function Dm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&$u.enqueueReplaceState(n,n.state,null)}function wr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Um(t){al(t)}function Nm(t){console.error(t)}function Lm(t){al(t)}function Rl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Om(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function tf(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(t,n)},a}function Pm(t){return t=Va(t),t.tag=3,t}function Im(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Om(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Om(n,a,o),typeof c!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function bx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&is(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?Bl():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(t,o,c)),!1;case 22:return a.flags|=65536,o===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(t,o,c)),!1}throw Error(r(435,a.tag))}return Af(t,o,c),Bl(),!1}if(be)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==xu&&(t=Error(r(422),{cause:o}),no(di(t,a)))):(o!==xu&&(n=Error(r(423),{cause:o}),no(di(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=di(o,a),c=tf(t.stateNode,o,c),Du(t,c),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:o});if(f=di(f,a),yo===null?yo=[f]:yo.push(f),ln!==4&&(ln=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=tf(a.stateNode,o,t),Du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Za===null||!Za.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Pm(c),Im(c,t,a,o),Du(a,c),!1}a=a.return}while(a!==null);return!1}var ef=Error(r(461)),_n=!1;function Dn(t,n,a,o){n.child=t===null?Hp(n,null,a,o):Rr(n,t.child,a,o)}function zm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var R in o)R!=="ref"&&(_[R]=o[R])}else _=o;return Er(n),o=Iu(t,n,a,_,f,c),R=zu(),t!==null&&!_n?(Fu(t,n,c),la(t,n,c)):(be&&R&&_u(n),n.flags|=1,Dn(t,n,o,c),n.child)}function Fm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(t,n,f,o,c)):(t=ll(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!uf(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(_,o)&&t.ref===n.ref)return la(t,n,c)}return n.flags|=1,t=na(f,o),t.ref=n.ref,t.return=n,n.child=t}function Bm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if($s(f,o)&&t.ref===n.ref)if(_n=!1,n.pendingProps=o=f,uf(t,c))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,la(t,n,c)}return nf(t,n,a,o,c)}function Hm(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Gm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,f!==null?f.cachePool:null),f!==null?kp(n,f):Nu(),Xp(n);else return o=n.lanes=536870912,Gm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(dl(n,f.cachePool),kp(n,f),Wa(),n.memoizedState=null):(t!==null&&dl(n,null),Nu(),Wa());return Dn(t,n,c,a),n.child}function mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(t,n,a,o,c){var f=Au();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dl(n,null),Nu(),Xp(n),t!==null&&is(t,n,o,!0),n.childLanes=c,null}function Cl(t,n){return n=Dl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vm(t,n,a){return Rr(n,t.child,null,a),t=Cl(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Tx(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(o.mode==="hidden")return t=Cl(n,o),n.lanes=536870912,mo(null,t);if(Ou(n),(t=tn)?(t=tg(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Tp(t),a.return=n,n.child=a,Cn=n,tn=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return Cl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Ou(n),c)if(n.flags&256)n.flags&=-257,n=Vm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(_n||is(t,n,a,!1),c=(a&t.childLanes)!==0,_n||c){if(o=Ke,o!==null&&(_=Ln(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,xr(t,_),Kn(o,t,_),ef;Bl(),n=Vm(t,n,a)}else t=f.treeContext,tn=_i(_.nextSibling),Cn=n,be=!0,Fa=null,mi=!1,t!==null&&Cp(n,t),n=Cl(n,o),n.flags|=4096;return n}return t=na(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function nf(t,n,a,o,c){return Er(n),a=Iu(t,n,a,o,void 0,c),o=zu(),t!==null&&!_n?(Fu(t,n,c),la(t,n,c)):(be&&o&&_u(n),n.flags|=1,Dn(t,n,a,c),n.child)}function km(t,n,a,o,c,f){return Er(n),n.updateQueue=null,a=qp(n,o,a,c),Wp(t),o=zu(),t!==null&&!_n?(Fu(t,n,f),la(t,n,f)):(be&&o&&_u(n),n.flags|=1,Dn(t,n,a,f),n.child)}function Xm(t,n,a,o,c){if(Er(n),n.stateNode===null){var f=$r,_=a.contextType;typeof _=="object"&&_!==null&&(f=wn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Cu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?wn(_):$r,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Ju(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&$u.enqueueReplaceState(f,f.state,null),co(n,o,f,c),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,B=wr(a,R);f.props=B;var $=f.context,pt=a.contextType;_=$r,typeof pt=="object"&&pt!==null&&(_=wn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||$!==_)&&Dm(n,f,o,_),Ga=!1;var at=n.memoizedState;f.state=at,co(n,o,f,c),lo(),$=n.memoizedState,R||at!==$||Ga?(typeof xt=="function"&&(Ju(n,a,xt,o),$=n.memoizedState),(B=Ga||wm(n,a,B,o,at,$,_))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=_,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,wu(t,n),_=n.memoizedProps,pt=wr(a,_),f.props=pt,xt=n.pendingProps,at=f.context,$=a.contextType,B=$r,typeof $=="object"&&$!==null&&(B=wn($)),R=a.getDerivedStateFromProps,($=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xt||at!==B)&&Dm(n,f,o,B),Ga=!1,at=n.memoizedState,f.state=at,co(n,o,f,c),lo();var lt=n.memoizedState;_!==xt||at!==lt||Ga||t!==null&&t.dependencies!==null&&ul(t.dependencies)?(typeof R=="function"&&(Ju(n,a,R,o),lt=n.memoizedState),(pt=Ga||wm(n,a,pt,o,at,lt,B)||t!==null&&t.dependencies!==null&&ul(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=B,o=pt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,wl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Rr(n,t.child,null,c),n.child=Rr(n,null,a,c)):Dn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=la(t,n,c),t}function Wm(t,n,a,o){return Mr(),n.flags|=256,Dn(t,n,a,o),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(t){return{baseLanes:t,cachePool:Op()}}function sf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function qm(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?Xa(n):Wa(),(t=tn)?(t=tg(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Tp(t),a.return=n,n.child=a,Cn=n,tn=null)):t=null,t===null)throw Ba(n);return Vf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(Wa(),c=n.mode,R=Dl({mode:"hidden",children:R},c),o=Sr(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=rf(a),o.childLanes=sf(t,_,a),n.memoizedState=af,mo(null,o)):(Xa(n),of(n,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(Xa(n),n.flags&=-257,n=lf(t,n,a)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,n=null):(Wa(),R=o.fallback,c=n.mode,o=Dl({mode:"visible",children:o.children},c),R=Sr(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Rr(n,t.child,null,a),o=n.child,o.memoizedState=rf(a),o.childLanes=sf(t,_,a),n.memoizedState=af,n=mo(null,o));else if(Xa(n),Vf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var $=_.dgst;_=$,o=Error(r(419)),o.stack="",o.digest=_,no({value:o,source:null,stack:null}),n=lf(t,n,a)}else if(_n||is(t,n,a,!1),_=(a&t.childLanes)!==0,_n||_){if(_=Ke,_!==null&&(o=Ln(_,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,xr(t,o),Kn(_,t,o),ef;Gf(R)||Bl(),n=lf(t,n,a)}else Gf(R)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,tn=_i(R.nextSibling),Cn=n,be=!0,Fa=null,mi=!1,t!==null&&Cp(n,t),n=of(n,o.children),n.flags|=4096);return n}return c?(Wa(),R=o.fallback,c=n.mode,B=t.child,$=B.sibling,o=na(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?R=na($,R):(R=Sr(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,mo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=rf(a):(c=R.cachePool,c!==null?(B=mn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Op(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=sf(t,_,a),n.memoizedState=af,mo(t.child,o)):(Xa(n),a=t.child,t=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function of(t,n){return n=Dl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Dl(t,n){return t=ii(22,t,null,n),t.lanes=0,t}function lf(t,n,a){return Rr(n,t.child,null,a),t=of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ym(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),yu(t.return,n,a)}function cf(t,n,a,o,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function jm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var _=cn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,gt(cn,_),Dn(t,n,o,a),o=be?eo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,a,n);else if(t.tag===19)Ym(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&vl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),cf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&vl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}cf(n,!0,a,null,f,o);break;case"together":cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=na(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=na(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ul(t)))}function Ax(t,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),Ha(n,mn,t.memoizedState.cache),Mr();break;case 27:case 5:te(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ou(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(t,n,a):(Xa(n),t=la(t,n,a),t!==null?t.sibling:null);Xa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(is(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return jm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(cn,cn.current),o)break;return null;case 22:return n.lanes=0,Hm(t,n,a,n.pendingProps);case 24:Ha(n,mn,t.memoizedState.cache)}return la(t,n,a)}function Zm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!uf(t,a)&&(n.flags&128)===0)return _n=!1,Ax(t,n,a);_n=(t.flags&131072)!==0}else _n=!1,be&&(n.flags&1048576)!==0&&Rp(n,eo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=Tr(n.elementType),n.type=t,typeof t=="function")pu(t)?(o=wr(t,o),n.tag=1,n=Xm(null,n,t,o,a)):(n.tag=0,n=nf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=zm(null,n,t,o,a);break t}else if(c===F){n.tag=14,n=Fm(null,n,t,o,a);break t}}throw n=mt(t)||t,Error(r(306,n,""))}}return n;case 0:return nf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=wr(o,n.pendingProps),Xm(t,n,o,c,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,wu(t,n),co(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ha(n,mn,o),o!==f.cache&&Eu(n,[mn],a,!0),lo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wm(t,n,o,a);break t}else if(o!==c){c=di(Error(r(424)),n),no(c),n=Wm(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tn=_i(t.firstChild),Cn=n,be=!0,Fa=null,mi=!0,a=Hp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Mr(),o===c){n=la(t,n,a);break t}Dn(t,n,o,a)}n=n.child}return n;case 26:return wl(t,n),t===null?(a=sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,o=ql(tt.current).createElement(a),o[nn]=n,o[hn]=t,Un(o,a,t),pn(o),n.stateNode=o):n.memoizedState=sg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return te(n),t===null&&be&&(o=n.stateNode=ig(n.type,n.pendingProps,tt.current),Cn=n,mi=!0,c=tn,$a(n.type)?(kf=c,tn=_i(o.firstChild)):tn=c),Dn(t,n,n.pendingProps.children,a),wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=o=tn)&&(o=nS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Cn=n,tn=_i(o.firstChild),mi=!1,c=!0):c=!1),c||Ba(n)),te(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Ff(c,f)?o=null:_!==null&&Ff(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Iu(t,n,_x,null,null,a),Do._currentValue=c),wl(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&be&&((t=a=tn)&&(a=iS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Cn=n,tn=null,t=!0):t=!1),t||Ba(n)),null;case 13:return qm(t,n,a);case 4:return Rt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rr(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return zm(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Er(n),c=wn(c),o=o(c),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return Fm(t,n,n.type,n.pendingProps,a);case 15:return Bm(t,n,n.type,n.pendingProps,a);case 19:return jm(t,n,a);case 31:return Tx(t,n,a);case 22:return Hm(t,n,a,n.pendingProps);case 24:return Er(n),o=wn(mn),t===null?(c=Au(),c===null&&(c=Ke,f=bu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Cu(n),Ha(n,mn,c)):((t.lanes&a)!==0&&(wu(t,n),co(n,null,null,a),lo()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ha(n,mn,o)):(o=f.cache,Ha(n,mn,o),o!==c.cache&&Eu(n,[mn],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ca(t){t.flags|=4}function ff(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(y0())t.flags|=8192;else throw Ar=pl,Ru}else t.flags&=-16777217}function Km(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fg(n))if(y0())t.flags|=8192;else throw Ar=pl,Ru}function Ul(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?vt():536870912,t.lanes|=n,ms|=n)}function go(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Rx(t,n,a){var o=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(mn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ns(n)?ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),en(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ca(n),f!==null?(en(n),Km(n,f)):(en(n),ff(n,c,null,o,a))):f?f!==t.memoizedState?(ca(n),en(n),Km(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ca(n),en(n),ff(n,c,t,o,a)),null;case 27:if(Qt(n),a=tt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}t=At.current,ns(n)?wp(n):(t=ig(c,o,a),n.stateNode=t,ca(n))}return en(n),null;case 5:if(Qt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(f=At.current,ns(n))wp(n);else{var _=ql(tt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(c,{is:o.is}):_.createElement(c)}}f[nn]=n,f[hn]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Un(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ca(n)}}return en(n),ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=tt.current,ns(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[nn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||q0(t.nodeValue,a)),t||Ba(n,!0)}else t=ql(t).createTextNode(o),t[nn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ns(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[nn]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ns(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[nn]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),c=!1}else c=Su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),en(n),null);case 4:return Ft(),t===null&&Lf(n.stateNode.containerInfo),en(n),null;case 10:return ra(n.type),en(n),null;case 19:if(K(cn),o=n.memoizedState,o===null)return en(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)go(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=vl(t),f!==null){for(n.flags|=128,go(o,!1),t=f.updateQueue,n.updateQueue=t,Ul(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)bp(a,t),a=a.sibling;return gt(cn,cn.current&1|2),be&&ia(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&St()>Il&&(n.flags|=128,c=!0,go(o,!1),n.lanes=4194304)}else{if(!c)if(t=vl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ul(n,t),go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!be)return en(n),null}else 2*St()-o.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,c=!0,go(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=St(),t.sibling=null,a=cn.current,gt(cn,c?a&1|2:a&1),be&&ia(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return ri(n),Lu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&K(br),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(mn),en(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Cx(t,n){switch(vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(mn),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(cn),null;case 4:return Ft(),null;case 10:return ra(n.type),null;case 22:case 23:return ri(n),Lu(),t!==null&&K(br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(mn),null;case 25:return null;default:return null}}function Qm(t,n){switch(vu(n),n.tag){case 3:ra(mn),Ft();break;case 26:case 27:case 5:Qt(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:K(cn);break;case 10:ra(n.type);break;case 22:case 23:ri(n),Lu(),t!==null&&K(br);break;case 24:ra(mn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==c)}}catch(R){Ve(n,n.return,R)}}function qa(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var _=o.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var B=a,$=R;try{$()}catch(pt){Ve(c,B,pt)}}}o=o.next}while(o!==f)}}catch(pt){Ve(n,n.return,pt)}}function Jm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vp(n,a)}catch(o){Ve(t,t.return,o)}}}function $m(t,n,a){a.props=wr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(t,n,o)}}function vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Ve(t,n,c)}}function Vi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ve(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ve(t,n,c)}else a.current=null}function t0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ve(t,t.return,c)}}function df(t,n,a){try{var o=t.stateNode;Kx(o,t.type,a,n),o[hn]=n}catch(c){Ve(t,t.return,c)}}function e0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function hf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(pf(t,n,a),t=t.sibling;t!==null;)pf(t,n,a),t=t.sibling}function Nl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Nl(t,n,a),t=t.sibling;t!==null;)Nl(t,n,a),t=t.sibling}function n0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Un(n,o,a),n[nn]=t,n[hn]=a}catch(f){Ve(t,t.return,f)}}var ua=!1,vn=!1,mf=!1,i0=typeof WeakSet=="function"?WeakSet:Set,An=null;function wx(t,n){if(t=t.containerInfo,If=$l,t=mp(t),ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,R=-1,B=-1,$=0,pt=0,xt=t,at=null;e:for(;;){for(var lt;xt!==a||c!==0&&xt.nodeType!==3||(R=_+c),xt!==f||o!==0&&xt.nodeType!==3||(B=_+o),xt.nodeType===3&&(_+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)at=xt,xt=lt;for(;;){if(xt===t)break e;if(at===a&&++$===c&&(R=_),at===f&&++pt===o&&(B=_),(lt=xt.nextSibling)!==null)break;xt=at,at=xt.parentNode}xt=lt}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:t,selectionRange:a},$l=!1,An=n;An!==null;)if(n=An,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,An=t;else for(;An!==null;){switch(n=An,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var jt=wr(a.type,c);t=o.getSnapshotBeforeUpdate(jt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ae){Ve(a,a.return,ae)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Hf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,An=t;break}An=n.return}}function a0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),o&4&&_o(5,a);break;case 1:if(da(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ve(a,a.return,_)}else{var c=wr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ve(a,a.return,_)}}o&64&&Jm(a),o&512&&vo(a,a.return);break;case 3:if(da(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(t,n)}catch(_){Ve(a,a.return,_)}}break;case 27:n===null&&o&4&&n0(a);case 26:case 5:da(t,a),n===null&&o&4&&t0(a),o&512&&vo(a,a.return);break;case 12:da(t,a);break;case 31:da(t,a),o&4&&o0(t,a);break;case 13:da(t,a),o&4&&l0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fx.bind(null,a),aS(t,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||vn,c=ua;var f=vn;ua=o,(vn=n)&&!f?ha(t,a,(a.subtreeFlags&8772)!==0):da(t,a),ua=c,vn=f}break;case 30:break;default:da(t,a)}}function r0(t){var n=t.alternate;n!==null&&(t.alternate=null,r0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&On(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,qn=!1;function fa(t,n,a){for(a=a.child;a!==null;)s0(t,n,a),a=a.sibling}function s0(t,n,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 26:vn||Vi(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||Vi(a,n);var o=sn,c=qn;$a(a.type)&&(sn=a.stateNode,qn=!1),fa(t,n,a),Ro(a.stateNode),sn=o,qn=c;break;case 5:vn||Vi(a,n);case 6:if(o=sn,c=qn,sn=null,fa(t,n,a),sn=o,qn=c,sn!==null)if(qn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode)}catch(f){Ve(a,n,f)}else try{sn.removeChild(a.stateNode)}catch(f){Ve(a,n,f)}break;case 18:sn!==null&&(qn?(t=sn,J0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Es(t)):J0(sn,a.stateNode));break;case 4:o=sn,c=qn,sn=a.stateNode.containerInfo,qn=!0,fa(t,n,a),sn=o,qn=c;break;case 0:case 11:case 14:case 15:qa(2,a,n),vn||qa(4,a,n),fa(t,n,a);break;case 1:vn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&$m(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,fa(t,n,a),vn=o;break;default:fa(t,n,a)}}function o0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(a){Ve(n,n.return,a)}}}function l0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(a){Ve(n,n.return,a)}}function Dx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new i0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new i0),n;default:throw Error(r(435,t.tag))}}function Ll(t,n){var a=Dx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Bx.bind(null,t,o);o.then(c,c)}})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,_=n,R=_;t:for(;R!==null;){switch(R.tag){case 27:if($a(R.type)){sn=R.stateNode,qn=!1;break t}break;case 5:sn=R.stateNode,qn=!1;break t;case 3:case 4:sn=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(sn===null)throw Error(r(160));s0(f,_,c),sn=null,qn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)c0(n,t),n=n.sibling}var Ri=null;function c0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),jn(t),o&4&&(qa(3,t,t.return),_o(3,t),qa(5,t,t.return));break;case 1:Yn(n,t),jn(t),o&512&&(vn||a===null||Vi(a,a.return)),o&64&&ua&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ri;if(Yn(n,t),jn(t),o&512&&(vn||a===null||Vi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Me]||f[nn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Un(f,o,a),f[nn]=t,pn(f),o=f;break t;case"link":var _=cg("link","href",c).get(o+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break e}}f=c.createElement(o),Un(f,o,a),c.head.appendChild(f);break;case"meta":if(_=cg("meta","content",c).get(o+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break e}}f=c.createElement(o),Un(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[nn]=t,pn(f),o=f}t.stateNode=o}else ug(c,t.type,t.stateNode);else t.stateNode=lg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?ug(c,t.type,t.stateNode):lg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&df(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),jn(t),o&512&&(vn||a===null||Vi(a,a.return)),a!==null&&o&4&&df(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),jn(t),o&512&&(vn||a===null||Vi(a,a.return)),t.flags&32){c=t.stateNode;try{ei(c,"")}catch(jt){Ve(t,t.return,jt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,df(t,c,a!==null?a.memoizedProps:c)),o&1024&&(mf=!0);break;case 6:if(Yn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(jt){Ve(t,t.return,jt)}}break;case 3:if(Zl=null,c=Ri,Ri=Yl(n.containerInfo),Yn(n,t),Ri=c,jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(jt){Ve(t,t.return,jt)}mf&&(mf=!1,u0(t));break;case 4:o=Ri,Ri=Yl(t.stateNode.containerInfo),Yn(n,t),jn(t),Ri=o;break;case 12:Yn(n,t),jn(t);break;case 31:Yn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ll(t,o)));break;case 13:Yn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=St()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ll(t,o)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=ua,pt=vn;if(ua=$||c,vn=pt||B,Yn(n,t),vn=pt,ua=$,jn(t),o&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ua||vn||Dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=B.stateNode;var xt=B.memoizedProps.style,at=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(jt){Ve(B,B.return,jt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(jt){Ve(B,B.return,jt)}}}else if(n.tag===18){if(a===null){B=n;try{var lt=B.stateNode;c?$0(lt,!0):$0(B.stateNode,!1)}catch(jt){Ve(B,B.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ll(t,a))));break;case 19:Yn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ll(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(e0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=hf(t);Nl(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(ei(_,""),a.flags&=-33);var R=hf(t);Nl(t,R,_);break;case 3:case 4:var B=a.stateNode.containerInfo,$=hf(t);pf(t,$,B);break;default:throw Error(r(161))}}catch(pt){Ve(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function u0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;u0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)a0(t,n.alternate,n),n=n.sibling}function Dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Dr(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),Dr(n);break;case 27:Ro(n.stateNode);case 26:case 5:Vi(n,n.return),Dr(n);break;case 22:n.memoizedState===null&&Dr(n);break;case 30:Dr(n);break;default:Dr(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ha(c,f,a),_o(4,f);break;case 1:if(ha(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ve(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var R=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Gp(B[c],R)}catch($){Ve(o,o.return,$)}}a&&_&64&&Jm(f),vo(f,f.return);break;case 27:n0(f);case 26:case 5:ha(c,f,a),a&&o===null&&_&4&&t0(f),vo(f,f.return);break;case 12:ha(c,f,a);break;case 31:ha(c,f,a),a&&_&4&&o0(c,f);break;case 13:ha(c,f,a),a&&_&4&&l0(c,f);break;case 22:f.memoizedState===null&&ha(c,f,a),vo(f,f.return);break;case 30:break;default:ha(c,f,a)}n=n.sibling}}function gf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&io(a))}function _f(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)f0(t,n,a,o),n=n.sibling}function f0(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),c&2048&&_o(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&io(t)));break;case 12:if(c&2048){Ci(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ve(n,n.return,B)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(t,n,a,o):xo(t,n):f._visibility&2?Ci(t,n,a,o):(f._visibility|=2,ds(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&gf(_,n);break;case 24:Ci(t,n,a,o),c&2048&&_f(n.alternate,n);break;default:Ci(t,n,a,o)}}function ds(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,B=o,$=_.flags;switch(_.tag){case 0:case 11:case 15:ds(f,_,R,B,c),_o(8,_);break;case 23:break;case 22:var pt=_.stateNode;_.memoizedState!==null?pt._visibility&2?ds(f,_,R,B,c):xo(f,_):(pt._visibility|=2,ds(f,_,R,B,c)),c&&$&2048&&gf(_.alternate,_);break;case 24:ds(f,_,R,B,c),c&&$&2048&&_f(_.alternate,_);break;default:ds(f,_,R,B,c)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:xo(a,o),c&2048&&gf(o.alternate,o);break;case 24:xo(a,o),c&2048&&_f(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var So=8192;function hs(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)d0(t,n,a),t=t.sibling}function d0(t,n,a){switch(t.tag){case 26:hs(t,n,a),t.flags&So&&t.memoizedState!==null&&gS(a,Ri,t.memoizedState,t.memoizedProps);break;case 5:hs(t,n,a);break;case 3:case 4:var o=Ri;Ri=Yl(t.stateNode.containerInfo),hs(t,n,a),Ri=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,hs(t,n,a),So=o):hs(t,n,a));break;default:hs(t,n,a)}}function h0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,m0(o,t)}h0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)p0(t),t=t.sibling}function p0(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&qa(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ol(t)):Mo(t);break;default:Mo(t)}}function Ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,m0(o,t)}h0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}t=t.sibling}}function m0(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:io(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,An=o;else t:for(a=t;An!==null;){o=An;var c=o.sibling,f=o.return;if(r0(o),o===a){An=null;break t}if(c!==null){c.return=f,An=c;break t}An=f}}}var Ux={getCacheForType:function(t){var n=wn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(mn).controller.signal}},Nx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ke=null,xe=null,ye=0,Ge=0,si=null,Ya=!1,ps=!1,vf=!1,pa=0,ln=0,ja=0,Ur=0,xf=0,oi=0,ms=0,yo=null,Zn=null,Sf=!1,Pl=0,g0=0,Il=1/0,zl=null,Za=null,yn=0,Ka=null,gs=null,ma=0,Mf=0,yf=null,_0=null,Eo=0,Ef=null;function li(){return(Oe&2)!==0&&ye!==0?ye&-ye:L.T!==null?wf():Da()}function v0(){if(oi===0)if((ye&536870912)===0||be){var t=fe;fe<<=1,(fe&3932160)===0&&(fe=262144),oi=t}else oi=536870912;return t=ai.current,t!==null&&(t.flags|=32),oi}function Kn(t,n,a){(t===Ke&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(_s(t,0),Qa(t,ye,oi,!1)),ie(t,a),((Oe&2)===0||t!==Ke)&&(t===Ke&&((Oe&2)===0&&(Ur|=a),ln===4&&Qa(t,ye,oi,!1)),ki(t))}function x0(t,n,a){if((Oe&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),c=o?Px(t,n):Tf(t,n,!0),f=o;do{if(c===0){ps&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Lx(a)){c=Tf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=t;c=yo;var B=R.current.memoizedState.isDehydrated;if(B&&(_s(R,_).flags|=256),_=Tf(R,_,!1),_!==2){if(vf&&!B){R.errorRecoveryDisabledLanes|=f,Ur|=f,c=4;break t}f=Zn,Zn=c,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){_s(t,0),Qa(t,n,0,!0);break}t:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,oi,!Ya);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Pl+300-St(),10<c)){if(Qa(o,n,oi,!Ya),ht(o,0,!0)!==0)break t;ma=n,o.timeoutHandle=K0(S0.bind(null,o,a,Zn,zl,Sf,n,oi,Ur,ms,Ya,f,"Throttled",-0,0),c);break t}S0(o,a,Zn,zl,Sf,n,oi,Ur,ms,Ya,f,null,-0,0)}}break}while(!0);ki(t)}function S0(t,n,a,o,c,f,_,R,B,$,pt,xt,at,lt){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},d0(n,f,xt);var jt=(f&62914560)===f?Pl-St():(f&4194048)===f?g0-St():0;if(jt=_S(xt,jt),jt!==null){ma=f,t.cancelPendingCommit=jt(C0.bind(null,t,n,f,a,o,c,_,R,B,pt,xt,null,at,lt)),Qa(t,f,_,!$);return}}C0(t,n,f,a,o,c,_,R,B)}function Lx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!ni(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~xf,n&=~Ur,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-It(c),_=1<<f;o[f]=-1,c&=~_}a!==0&&we(t,a,n)}function Fl(){return(Oe&6)===0?(bo(0),!1):!0}function bf(){if(xe!==null){if(Ge===0)var t=xe.return;else t=xe,aa=yr=null,Bu(t),os=null,ro=0,t=xe;for(;t!==null;)Qm(t.alternate,t),t=t.return;xe=null}}function _s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$x(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ma=0,bf(),Ke=t,xe=a=na(t.current,null),ye=n,Ge=0,si=null,Ya=!1,ps=Bt(t,n),vf=!1,ms=oi=xf=Ur=ja=ln=0,Zn=yo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-It(o),f=1<<c;n|=t[c],o&=~f}return pa=n,rl(),a}function M0(t,n){he=null,L.H=po,n===ss||n===hl?(n=zp(),Ge=3):n===Ru?(n=zp(),Ge=4):Ge=n===ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,xe===null&&(ln=1,Rl(t,di(n,t.current)))}function y0(){var t=ai.current;return t===null?!0:(ye&4194048)===ye?gi===null:(ye&62914560)===ye||(ye&536870912)!==0?t===gi:!1}function E0(){var t=L.H;return L.H=po,t===null?po:t}function b0(){var t=L.A;return L.A=Ux,t}function Bl(){ln=4,Ya||(ye&4194048)!==ye&&ai.current!==null||(ps=!0),(ja&134217727)===0&&(Ur&134217727)===0||Ke===null||Qa(Ke,ye,oi,!1)}function Tf(t,n,a){var o=Oe;Oe|=2;var c=E0(),f=b0();(Ke!==t||ye!==n)&&(zl=null,_s(t,n)),n=!1;var _=ln;t:do try{if(Ge!==0&&xe!==null){var R=xe,B=si;switch(Ge){case 8:bf(),_=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var $=Ge;if(Ge=0,si=null,vs(t,R,B,$),a&&ps){_=0;break t}break;default:$=Ge,Ge=0,si=null,vs(t,R,B,$)}}Ox(),_=ln;break}catch(pt){M0(t,pt)}while(!0);return n&&t.shellSuspendCounter++,aa=yr=null,Oe=o,L.H=c,L.A=f,xe===null&&(Ke=null,ye=0,rl()),_}function Ox(){for(;xe!==null;)T0(xe)}function Px(t,n){var a=Oe;Oe|=2;var o=E0(),c=b0();Ke!==t||ye!==n?(zl=null,Il=St()+500,_s(t,n)):ps=Bt(t,n);t:do try{if(Ge!==0&&xe!==null){n=xe;var f=si;e:switch(Ge){case 1:Ge=0,si=null,vs(t,n,f,1);break;case 2:case 9:if(Pp(f)){Ge=0,si=null,A0(n);break}n=function(){Ge!==2&&Ge!==9||Ke!==t||(Ge=7),ki(t)},f.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Pp(f)?(Ge=0,si=null,A0(n)):(Ge=0,si=null,vs(t,n,f,7));break;case 5:var _=null;switch(xe.tag){case 26:_=xe.memoizedState;case 5:case 27:var R=xe;if(_?fg(_):R.stateNode.complete){Ge=0,si=null;var B=R.sibling;if(B!==null)xe=B;else{var $=R.return;$!==null?(xe=$,Hl($)):xe=null}break e}}Ge=0,si=null,vs(t,n,f,5);break;case 6:Ge=0,si=null,vs(t,n,f,6);break;case 8:bf(),ln=6;break t;default:throw Error(r(462))}}Ix();break}catch(pt){M0(t,pt)}while(!0);return aa=yr=null,L.H=o,L.A=c,Oe=a,xe!==null?0:(Ke=null,ye=0,rl(),ln)}function Ix(){for(;xe!==null&&!bt();)T0(xe)}function T0(t){var n=Zm(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?Hl(t):xe=n}function A0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=km(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=km(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Bu(n);default:Qm(a,n),n=xe=bp(n,pa),n=Zm(a,n,pa)}t.memoizedProps=t.pendingProps,n===null?Hl(t):xe=n}function vs(t,n,a,o){aa=yr=null,Bu(n),os=null,ro=0;var c=n.return;try{if(bx(t,c,n,a,ye)){ln=1,Rl(t,di(a,t.current)),xe=null;return}}catch(f){if(c!==null)throw xe=c,f;ln=1,Rl(t,di(a,t.current)),xe=null;return}n.flags&32768?(be||o===1?t=!0:ps||(ye&536870912)!==0?t=!1:(Ya=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),R0(n,t)):Hl(n)}function Hl(t){var n=t;do{if((n.flags&32768)!==0){R0(n,Ya);return}t=n.return;var a=Rx(n.alternate,n,pa);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);ln===0&&(ln=5)}function R0(t,n){do{var a=Cx(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);ln=6,xe=null}function C0(t,n,a,o,c,f,_,R,B){t.cancelPendingCommit=null;do Gl();while(yn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=du,$e(t,a,f,_,R,B),t===Ke&&(xe=Ke=null,ye=0),gs=n,Ka=t,ma=a,Mf=f,yf=c,_0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hx(Y,function(){return L0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,c=z.p,z.p=2,_=Oe,Oe|=4;try{wx(t,n,a)}finally{Oe=_,z.p=c,L.T=o}}yn=1,w0(),D0(),U0()}}function w0(){if(yn===1){yn=0;var t=Ka,n=gs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=z.p;z.p=2;var c=Oe;Oe|=4;try{c0(n,t);var f=zf,_=mp(t.containerInfo),R=f.focusedElem,B=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&pp(R.ownerDocument.documentElement,R)){if(B!==null&&ou(R)){var $=B.start,pt=B.end;if(pt===void 0&&(pt=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(pt,R.value.length);else{var xt=R.ownerDocument||document,at=xt&&xt.defaultView||window;if(at.getSelection){var lt=at.getSelection(),jt=R.textContent.length,ae=Math.min(B.start,jt),Ye=B.end===void 0?ae:Math.min(B.end,jt);!lt.extend&&ae>Ye&&(_=Ye,Ye=ae,ae=_);var j=hp(R,ae),k=hp(R,Ye);if(j&&k&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var J=xt.createRange();J.setStart(j.node,j.offset),lt.removeAllRanges(),ae>Ye?(lt.addRange(J),lt.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),lt.addRange(J))}}}}for(xt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var _t=xt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}$l=!!If,zf=If=null}finally{Oe=c,z.p=o,L.T=a}}t.current=n,yn=2}}function D0(){if(yn===2){yn=0;var t=Ka,n=gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=z.p;z.p=2;var c=Oe;Oe|=4;try{a0(t,n.alternate,n)}finally{Oe=c,z.p=o,L.T=a}}yn=3}}function U0(){if(yn===4||yn===3){yn=0,Ht();var t=Ka,n=gs,a=ma,o=_0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?yn=5:(yn=0,gs=Ka=null,N0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Za=null),zi(a),n=n.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,c=z.p,z.p=2,L.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var R=o[_];f(R.value,{componentStack:R.stack})}}finally{L.T=n,z.p=c}}(ma&3)!==0&&Gl(),ki(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Ef?Eo++:(Eo=0,Ef=t):Eo=0,bo(0)}}function N0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,io(n)))}function Gl(){return w0(),D0(),U0(),L0()}function L0(){if(yn!==5)return!1;var t=Ka,n=Mf;Mf=0;var a=zi(ma),o=L.T,c=z.p;try{z.p=32>a?32:a,L.T=null,a=yf,yf=null;var f=Ka,_=ma;if(yn=0,gs=Ka=null,ma=0,(Oe&6)!==0)throw Error(r(331));var R=Oe;if(Oe|=4,p0(f.current),f0(f,f.current,_,a),Oe=R,bo(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(ot,f)}catch{}return!0}finally{z.p=c,L.T=o,N0(t,n)}}function O0(t,n,a){n=di(a,n),n=tf(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(ie(t,2),ki(t))}function Ve(t,n,a){if(t.tag===3)O0(t,t,a);else for(;n!==null;){if(n.tag===3){O0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=di(a,t),a=Pm(2),o=ka(n,a,2),o!==null&&(Im(a,o,n,t),ie(o,2),ki(o));break}}n=n.return}}function Af(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Nx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(vf=!0,c.add(a),t=zx.bind(null,t,n,a),n.then(t,t))}function zx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ke===t&&(ye&a)===a&&(ln===4||ln===3&&(ye&62914560)===ye&&300>St()-Pl?(Oe&2)===0&&_s(t,0):xf|=a,ms===ye&&(ms=0)),ki(t)}function P0(t,n){n===0&&(n=vt()),t=xr(t,n),t!==null&&(ie(t,n),ki(t))}function Fx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),P0(t,a)}function Bx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),P0(t,a)}function Hx(t,n){return W(t,n)}var Vl=null,xs=null,Rf=!1,kl=!1,Cf=!1,Ja=0;function ki(t){t!==xs&&t.next===null&&(xs===null?Vl=xs=t:xs=xs.next=t),kl=!0,Rf||(Rf=!0,Vx())}function bo(t,n){if(!Cf&&kl){Cf=!0;do for(var a=!1,o=Vl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var _=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-It(42|t)+1)-1,f&=c&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,B0(o,f))}else f=ye,f=ht(o,o===Ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bt(o,f)||(a=!0,B0(o,f));o=o.next}while(a);Cf=!1}}function Gx(){I0()}function I0(){kl=Rf=!1;var t=0;Ja!==0&&Jx()&&(t=Ja);for(var n=St(),a=null,o=Vl;o!==null;){var c=o.next,f=z0(o,n);f===0?(o.next=null,a===null?Vl=c:a.next=c,c===null&&(xs=a)):(a=o,(t!==0||(f&3)!==0)&&(kl=!0)),o=c}yn!==0&&yn!==5||bo(t),Ja!==0&&(Ja=0)}function z0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-It(f),R=1<<_,B=c[_];B===-1?((R&a)===0||(R&o)!==0)&&(c[_]=Ot(R,n)):B<=n&&(t.expiredLanes|=R),f&=~R}if(n=Ke,a=ye,a=ht(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Je(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Je(o),zi(a)){case 2:case 8:a=E;break;case 32:a=Y;break;case 268435456:a=yt;break;default:a=Y}return o=F0.bind(null,t),a=W(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Je(o),t.callbackPriority=2,t.callbackNode=null,2}function F0(t,n){if(yn!==0&&yn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gl()&&t.callbackNode!==a)return null;var o=ye;return o=ht(t,t===Ke?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(x0(t,o,n),z0(t,St()),t.callbackNode!=null&&t.callbackNode===a?F0.bind(null,t):null)}function B0(t,n){if(Gl())return null;x0(t,n,!0)}function Vx(){tS(function(){(Oe&6)!==0?W(w,Gx):I0()})}function wf(){if(Ja===0){var t=as;t===0&&(t=ne,ne<<=1,(ne&261888)===0&&(ne=256)),Ja=t}return Ja}function H0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:mr(""+t)}function G0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function kx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=H0((c[hn]||null).action),_=o.submitter;_&&(n=(n=_[hn]||null)?H0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new el("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var B=_?G0(c,_):new FormData(c);ju(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=_?G0(c,_):new FormData(c),ju(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Df=0;Df<fu.length;Df++){var Uf=fu[Df],Xx=Uf.toLowerCase(),Wx=Uf[0].toUpperCase()+Uf.slice(1);Ai(Xx,"on"+Wx)}Ai(vp,"onAnimationEnd"),Ai(xp,"onAnimationIteration"),Ai(Sp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(ox,"onTransitionRun"),Ai(lx,"onTransitionStart"),Ai(cx,"onTransitionCancel"),Ai(Mp,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function V0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var R=o[_],B=R.instance,$=R.currentTarget;if(R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=$;try{f(c)}catch(pt){al(pt)}c.currentTarget=null,f=B}else for(_=0;_<o.length;_++){if(R=o[_],B=R.instance,$=R.currentTarget,R=R.listener,B!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=$;try{f(c)}catch(pt){al(pt)}c.currentTarget=null,f=B}}}}function Se(t,n){var a=n[Fi];a===void 0&&(a=n[Fi]=new Set);var o=t+"__bubble";a.has(o)||(k0(n,t,2,!1),a.add(o))}function Nf(t,n,a){var o=0;n&&(o|=4),k0(a,t,o,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Lf(t){if(!t[Xl]){t[Xl]=!0,Qo.forEach(function(a){a!=="selectionchange"&&(qx.has(a)||Nf(a,!1,t),Nf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Nf("selectionchange",!1,n))}}function k0(t,n,a,o){switch(vg(n)){case 2:var c=SS;break;case 8:c=MS;break;default:c=jf}a=c.bind(null,n,a,t),c=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Of(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var R=o.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=o.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=Pn(R),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){o=f=_;continue t}R=R.parentNode}}o=o.return}jh(function(){var $=f,pt=Kc(a),xt=[];t:{var at=yp.get(t);if(at!==void 0){var lt=el,jt=t;switch(t){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":lt=Bv;break;case"focusin":jt="focus",lt=nu;break;case"focusout":jt="blur",lt=nu;break;case"beforeblur":case"afterblur":lt=nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Vv;break;case vp:case xp:case Sp:lt=Dv;break;case Mp:lt=Xv;break;case"scroll":case"scrollend":lt=Tv;break;case"wheel":lt=qv;break;case"copy":case"cut":case"paste":lt=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=$h;break;case"toggle":case"beforetoggle":lt=jv}var ae=(n&4)!==0,Ye=!ae&&(t==="scroll"||t==="scrollend"),j=ae?at!==null?at+"Capture":null:at;ae=[];for(var k=$,J;k!==null;){var _t=k;if(J=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||J===null||j===null||(_t=qs(k,j),_t!=null&&ae.push(Ao(k,_t,J))),Ye)break;k=k.return}0<ae.length&&(at=new lt(at,jt,null,a,pt),xt.push({event:at,listeners:ae}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",at&&a!==Zc&&(jt=a.relatedTarget||a.fromElement)&&(Pn(jt)||jt[Ei]))break t;if((lt||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(jt=a.relatedTarget||a.toElement,lt=$,jt=jt?Pn(jt):null,jt!==null&&(Ye=u(jt),ae=jt.tag,jt!==Ye||ae!==5&&ae!==27&&ae!==6)&&(jt=null)):(lt=null,jt=$),lt!==jt)){if(ae=Qh,_t="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(ae=$h,_t="onPointerLeave",j="onPointerEnter",k="pointer"),Ye=lt==null?at:pr(lt),J=jt==null?at:pr(jt),at=new ae(_t,k+"leave",lt,a,pt),at.target=Ye,at.relatedTarget=J,_t=null,Pn(pt)===$&&(ae=new ae(j,k+"enter",jt,a,pt),ae.target=J,ae.relatedTarget=Ye,_t=ae),Ye=_t,lt&&jt)e:{for(ae=Yx,j=lt,k=jt,J=0,_t=j;_t;_t=ae(_t))J++;_t=0;for(var $t=k;$t;$t=ae($t))_t++;for(;0<J-_t;)j=ae(j),J--;for(;0<_t-J;)k=ae(k),_t--;for(;J--;){if(j===k||k!==null&&j===k.alternate){ae=j;break e}j=ae(j),k=ae(k)}ae=null}else ae=null;lt!==null&&X0(xt,at,lt,ae,!1),jt!==null&&Ye!==null&&X0(xt,Ye,jt,ae,!0)}}t:{if(at=$?pr($):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var Ne=op;else if(rp(at))if(lp)Ne=ax;else{Ne=nx;var Zt=ex}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&ze($.elementType)&&(Ne=op):Ne=ix;if(Ne&&(Ne=Ne(t,$))){sp(xt,Ne,a,pt);break t}Zt&&Zt(t,at,$),t==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&ve(at,"number",at.value)}switch(Zt=$?pr($):window,t){case"focusin":(rp(Zt)||Zt.contentEditable==="true")&&(Kr=Zt,lu=$,to=null);break;case"focusout":to=lu=Kr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,gp(xt,a,pt);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":gp(xt,a,pt)}var ge;if(au)t:{switch(t){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Zr?ip(t,a)&&(Ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(tp&&a.locale!=="ko"&&(Zr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Zr&&(ge=Zh()):(Ia=pt,$c="value"in Ia?Ia.value:Ia.textContent,Zr=!0)),Zt=Wl($,Ee),0<Zt.length&&(Ee=new Jh(Ee,t,null,a,pt),xt.push({event:Ee,listeners:Zt}),ge?Ee.data=ge:(ge=ap(a),ge!==null&&(Ee.data=ge)))),(ge=Kv?Qv(t,a):Jv(t,a))&&(Ee=Wl($,"onBeforeInput"),0<Ee.length&&(Zt=new Jh("onBeforeInput","beforeinput",null,a,pt),xt.push({event:Zt,listeners:Ee}),Zt.data=ge)),kx(xt,t,$,a,pt)}V0(xt,n)})}function Ao(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=qs(t,a),c!=null&&o.unshift(Ao(t,c,f)),c=qs(t,n),c!=null&&o.push(Ao(t,c,f))),t.tag===3)return o;t=t.return}return[]}function Yx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function X0(t,n,a,o,c){for(var f=n._reactName,_=[];a!==null&&a!==o;){var R=a,B=R.alternate,$=R.stateNode;if(R=R.tag,B!==null&&B===o)break;R!==5&&R!==26&&R!==27||$===null||(B=$,c?($=qs(a,f),$!=null&&_.unshift(Ao(a,$,B))):c||($=qs(a,f),$!=null&&_.push(Ao(a,$,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var jx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function W0(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(Zx,"")}function q0(t,n){return n=W0(n),W0(t)===n}function qe(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ei(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ei(t,""+o);break;case"className":Yt(t,"class",o);break;case"tabIndex":Yt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Yt(t,a,o);break;case"style":Ti(t,o,f);break;case"data":if(n!=="object"){Yt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=mr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qe(t,n,"name",c.name,c,null),qe(t,n,"formEncType",c.formEncType,c,null),qe(t,n,"formMethod",c.formMethod,c,null),qe(t,n,"formTarget",c.formTarget,c,null)):(qe(t,n,"encType",c.encType,c,null),qe(t,n,"method",c.method,c,null),qe(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=mr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ta);break;case"onScroll":o!=null&&Se("scroll",t);break;case"onScrollEnd":o!=null&&Se("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=mr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Se("beforetoggle",t),Se("toggle",t),zt(t,"popover",o);break;case"xlinkActuate":Wt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":zt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,zt(t,a,o))}}function Pf(t,n,a,o,c,f){switch(a){case"style":Ti(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ei(t,o):(typeof o=="number"||typeof o=="bigint")&&ei(t,""+o);break;case"onScroll":o!=null&&Se("scroll",t);break;case"onScrollEnd":o!=null&&Se("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):zt(t,a,o)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qe(t,n,f,_,a,null)}}c&&qe(t,n,"srcSet",a.srcSet,a,null),o&&qe(t,n,"src",a.src,a,null);return;case"input":Se("invalid",t);var R=f=_=c=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":c=pt;break;case"type":_=pt;break;case"checked":B=pt;break;case"defaultChecked":$=pt;break;case"value":f=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:qe(t,n,o,pt,a,null)}}In(t,f,R,B,$,_,c,!1);return;case"select":Se("invalid",t),o=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":o=R;default:qe(t,n,c,R,a,null)}n=f,a=_,t.multiple=!!o,n!=null?Mn(t,!!o,n,!1):a!=null&&Mn(t,!!o,a,!0);return;case"textarea":Se("invalid",t),f=c=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":o=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:qe(t,n,_,R,a,null)}bi(t,o,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qe(t,n,B,o,a,null)}return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)Se(To[o],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qe(t,n,$,o,a,null)}return;default:if(ze(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Pf(t,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&qe(t,n,R,o,a,null))}function Kx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,R=null,B=null,$=null,pt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=xt;default:o.hasOwnProperty(lt)||qe(t,n,lt,null,o,xt)}}for(var at in o){var lt=o[at];if(xt=a[at],o.hasOwnProperty(at)&&(lt!=null||xt!=null))switch(at){case"type":f=lt;break;case"name":c=lt;break;case"checked":$=lt;break;case"defaultChecked":pt=lt;break;case"value":_=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==xt&&qe(t,n,at,lt,o,xt)}}kt(t,_,R,B,$,pt,f,c);return;case"select":lt=_=R=at=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":lt=B;default:o.hasOwnProperty(f)||qe(t,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":at=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==B&&qe(t,n,c,f,o,B)}n=R,a=_,o=lt,at!=null?Mn(t,!!a,at,!1):!!o!=!!a&&(n!=null?Mn(t,!!a,n,!0):Mn(t,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qe(t,n,R,null,o,c)}for(_ in o)if(c=o[_],f=a[_],o.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":at=c;break;case"defaultValue":lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&qe(t,n,_,c,o,f)}ti(t,at,lt);return;case"option":for(var jt in a)if(at=a[jt],a.hasOwnProperty(jt)&&at!=null&&!o.hasOwnProperty(jt))switch(jt){case"selected":t.selected=!1;break;default:qe(t,n,jt,null,o,at)}for(B in o)if(at=o[B],lt=a[B],o.hasOwnProperty(B)&&at!==lt&&(at!=null||lt!=null))switch(B){case"selected":t.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:qe(t,n,B,at,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)at=a[ae],a.hasOwnProperty(ae)&&at!=null&&!o.hasOwnProperty(ae)&&qe(t,n,ae,null,o,at);for($ in o)if(at=o[$],lt=a[$],o.hasOwnProperty($)&&at!==lt&&(at!=null||lt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:qe(t,n,$,at,o,lt)}return;default:if(ze(n)){for(var Ye in a)at=a[Ye],a.hasOwnProperty(Ye)&&at!==void 0&&!o.hasOwnProperty(Ye)&&Pf(t,n,Ye,void 0,o,at);for(pt in o)at=o[pt],lt=a[pt],!o.hasOwnProperty(pt)||at===lt||at===void 0&&lt===void 0||Pf(t,n,pt,at,o,lt);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!o.hasOwnProperty(j)&&qe(t,n,j,null,o,at);for(xt in o)at=o[xt],lt=a[xt],!o.hasOwnProperty(xt)||at===lt||at==null&&lt==null||qe(t,n,xt,at,o,lt)}function Y0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,_=c.initiatorType,R=c.duration;if(f&&R&&Y0(_)){for(_=0,R=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>R)break;var pt=B.transferSize,xt=B.initiatorType;pt&&Y0(xt)&&(B=B.responseEnd,_+=pt*(B<R?1:(R-$)/(B-$)))}if(--o,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var If=null,zf=null;function ql(t){return t.nodeType===9?t:t.ownerDocument}function j0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ff(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function Jx(){var t=window.event;return t&&t.type==="popstate"?t===Bf?!1:(Bf=t,!0):(Bf=null,!1)}var K0=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,Q0=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof Q0<"u"?function(t){return Q0.resolve(null).then(t).catch(eS)}:K0;function eS(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function J0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),Es(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ro(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Me]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Ro(t.ownerDocument.body);a=c}while(a);Es(n)}function $0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),On(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Me])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function iS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function tg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function Gf(t){return t.data==="$?"||t.data==="$~"}function Vf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function aS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var kf=null;function eg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function ng(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function ig(t,n,a){switch(n=ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ro(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);On(t)}var vi=new Map,ag=new Set;function Yl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=z.d;z.d={f:rS,r:sS,D:oS,C:lS,L:cS,m:uS,X:dS,S:fS,M:hS};function rS(){var t=ga.f(),n=Fl();return t||n}function sS(t){var n=La(t);n!==null&&n.tag===5&&n.type==="form"?Mm(n):ga.r(t)}var Ss=typeof document>"u"?null:document;function rg(t,n,a){var o=Ss;if(o&&typeof n=="string"&&n){var c=Be(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ag.has(c)||(ag.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Un(n,"link",t),pn(n),o.head.appendChild(n)))}}function oS(t){ga.D(t),rg("dns-prefetch",t,null)}function lS(t,n){ga.C(t,n),rg("preconnect",t,n)}function cS(t,n,a){ga.L(t,n,a);var o=Ss;if(o&&t&&n){var c='link[rel="preload"][as="'+Be(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Be(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Be(a.imageSizes)+'"]')):c+='[href="'+Be(t)+'"]';var f=c;switch(n){case"style":f=Ms(t);break;case"script":f=ys(t)}vi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Co(f))||n==="script"&&o.querySelector(wo(f))||(n=o.createElement("link"),Un(n,"link",t),pn(n),o.head.appendChild(n)))}}function uS(t,n){ga.m(t,n);var a=Ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Be(o)+'"][href="'+Be(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ys(t)}if(!vi.has(f)&&(t=v({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}o=a.createElement("link"),Un(o,"link",t),pn(o),a.head.appendChild(o)}}}function fS(t,n,a){ga.S(t,n,a);var o=Ss;if(o&&t){var c=Oa(o).hoistableStyles,f=Ms(t);n=n||"default";var _=c.get(f);if(!_){var R={loading:0,preload:null};if(_=o.querySelector(Co(f)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&Xf(t,a);var B=_=o.createElement("link");pn(B),Un(B,"link",t),B._p=new Promise(function($,pt){B.onload=$,B.onerror=pt}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,jl(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(f,_)}}}function dS(t,n){ga.X(t,n);var a=Ss;if(a&&t){var o=Oa(a).hoistableScripts,c=ys(t),f=o.get(c);f||(f=a.querySelector(wo(c)),f||(t=v({src:t,async:!0},n),(n=vi.get(c))&&Wf(t,n),f=a.createElement("script"),pn(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function hS(t,n){ga.M(t,n);var a=Ss;if(a&&t){var o=Oa(a).hoistableScripts,c=ys(t),f=o.get(c);f||(f=a.querySelector(wo(c)),f||(t=v({src:t,async:!0,type:"module"},n),(n=vi.get(c))&&Wf(t,n),f=a.createElement("script"),pn(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function sg(t,n,a,o){var c=(c=tt.current)?Yl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=Oa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var f=Oa(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(Co(t)))&&!f._p&&(_.instance=f,_.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),f||pS(c,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ys(a),a=Oa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+Be(t)+'"'}function Co(t){return'link[rel="stylesheet"]['+t+"]"}function og(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function pS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),pn(n),t.head.appendChild(n))}function ys(t){return'[src="'+Be(t)+'"]'}function wo(t){return"script[async]"+t}function lg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Be(a.href)+'"]');if(o)return n.instance=o,pn(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),pn(o),Un(o,"style",c),jl(o,a.precedence,t),n.instance=o;case"stylesheet":c=Ms(a.href);var f=t.querySelector(Co(c));if(f)return n.state.loading|=4,n.instance=f,pn(f),f;o=og(a),(c=vi.get(c))&&Xf(o,c),f=(t.ownerDocument||t).createElement("link"),pn(f);var _=f;return _._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),Un(f,"link",o),n.state.loading|=4,jl(f,a.precedence,t),n.instance=f;case"script":return f=ys(a.src),(c=t.querySelector(wo(f)))?(n.instance=c,pn(c),c):(o=a,(c=vi.get(f))&&(o=v({},a),Wf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),pn(c),Un(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,jl(o,a.precedence,t));return n.instance}function jl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,_=0;_<o.length;_++){var R=o[_];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Zl=null;function cg(t,n,a){if(Zl===null){var o=new Map,c=Zl=new Map;c.set(a,o)}else c=Zl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Me]||f[nn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=o.get(_);R?R.push(f):o.set(_,[f])}}return o}function ug(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ms(o.href),f=n.querySelector(Co(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,pn(f);return}f=n.ownerDocument||n,o=og(o),(c=vi.get(c))&&Xf(o,c),f=f.createElement("link"),pn(f);var _=f;_._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),Un(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var qf=0;function _S(t,n){return t.stylesheets&&t.count===0&&Jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&qf===0&&(qf=62500*Qx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ql=null;function Jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ql=new Map,n.forEach(vS,t),Ql=null,Kl.call(t))}function vS(t,n){if(!(n.state.loading&4)){var a=Ql.get(t);if(a)var o=a.get(null);else{a=new Map,Ql.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,c),a.set(_,c),this.count++,o=Kl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:U,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function xS(t,n,a,o,c,f,_,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function dg(t,n,a,o,c,f,_,R,B,$,pt,xt){return t=new xS(t,n,a,_,B,$,pt,xt,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),t.current=f,f.stateNode=t,n=bu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Cu(f),t}function hg(t){return t?(t=$r,t):$r}function pg(t,n,a,o,c,f){c=hg(c),o.context===null?o.context=c:o.pendingContext=c,o=Va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ka(t,o,n),a!==null&&(Kn(a,t,n),oo(a,t,n))}function mg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Yf(t,n){mg(t,n),(t=t.alternate)&&mg(t,n)}function gg(t){if(t.tag===13||t.tag===31){var n=xr(t,67108864);n!==null&&Kn(n,t,67108864),Yf(t,67108864)}}function _g(t){if(t.tag===13||t.tag===31){var n=li();n=Ii(n);var a=xr(t,n);a!==null&&Kn(a,t,n),Yf(t,n)}}var $l=!0;function SS(t,n,a,o){var c=L.T;L.T=null;var f=z.p;try{z.p=2,jf(t,n,a,o)}finally{z.p=f,L.T=c}}function MS(t,n,a,o){var c=L.T;L.T=null;var f=z.p;try{z.p=8,jf(t,n,a,o)}finally{z.p=f,L.T=c}}function jf(t,n,a,o){if($l){var c=Zf(o);if(c===null)Of(t,n,o,tc,a),xg(t,o);else if(ES(c,t,n,a,o))o.stopPropagation();else if(xg(t,o),n&4&&-1<yS.indexOf(t)){for(;c!==null;){var f=La(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ct(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var B=1<<31-It(_);R.entanglements[1]|=B,_&=~B}ki(f),(Oe&6)===0&&(Il=St()+500,bo(0))}}break;case 31:case 13:R=xr(f,2),R!==null&&Kn(R,f,2),Fl(),Yf(f,2)}if(f=Zf(o),f===null&&Of(t,n,o,tc,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Of(t,n,o,null,a)}}function Zf(t){return t=Kc(t),Kf(t)}var tc=null;function Kf(t){if(tc=null,t=Pn(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function vg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(me()){case w:return 2;case E:return 8;case Y:case ft:return 32;case yt:return 268435456;default:return 32}default:return 32}}var Qf=!1,tr=null,er=null,nr=null,Uo=new Map,No=new Map,ir=[],yS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(t,n){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Lo(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=La(n),n!==null&&gg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function ES(t,n,a,o,c){switch(n){case"focusin":return tr=Lo(tr,t,n,a,o,c),!0;case"dragenter":return er=Lo(er,t,n,a,o,c),!0;case"mouseover":return nr=Lo(nr,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Uo.set(f,Lo(Uo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,No.set(f,Lo(No.get(f)||null,t,n,a,o,c)),!0}return!1}function Sg(t){var n=Pn(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,$i(t.priority,function(){_g(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,$i(t.priority,function(){_g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Zf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Zc=o,a.target.dispatchEvent(o),Zc=null}else return n=La(a),n!==null&&gg(n),t.blockedOn=a,!1;n.shift()}return!0}function Mg(t,n,a){ec(t)&&a.delete(n)}function bS(){Qf=!1,tr!==null&&ec(tr)&&(tr=null),er!==null&&ec(er)&&(er=null),nr!==null&&ec(nr)&&(nr=null),Uo.forEach(Mg),No.forEach(Mg)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,Qf||(Qf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,bS)))}var ic=null;function yg(t){ic!==t&&(ic=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Kf(o||a)===null)continue;break}var f=La(a);f!==null&&(t.splice(n,3),n-=3,ju(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Es(t){function n(B){return nc(B,t)}tr!==null&&nc(tr,t),er!==null&&nc(er,t),nr!==null&&nc(nr,t),Uo.forEach(n),No.forEach(n);for(var a=0;a<ir.length;a++){var o=ir[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Sg(a),a.blockedOn===null&&ir.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],_=c[hn]||null;if(typeof f=="function")_||yg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[hn]||null)R=_.formAction;else if(Kf(c)!==null)continue}else R=_.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),yg(a)}}}function Eg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Jf(t){this._internalRoot=t}ac.prototype.render=Jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=li();pg(a,o,t,n,null,null)},ac.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;pg(t.current,2,null,t,null,null),Fl(),n[Ei]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=Da();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ir.length&&n!==0&&n<ir[a].priority;a++);ir.splice(a,0,t),a===0&&Sg(t)}};var bg=e.version;if(bg!=="19.2.7")throw Error(r(527,bg,"19.2.7"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var TS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{ot=rc.inject(TS),ct=rc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Um,f=Nm,_=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=dg(t,1,!1,null,null,a,o,null,c,f,_,Eg),t[Ei]=n.current,Lf(t),new Jf(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Um,_=Nm,R=Lm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=dg(t,1,!0,n,a??null,o,c,B,f,_,R,Eg),n.context=hg(null),a=n.current,o=li(),o=Ii(o),c=Va(o),c.callback=null,ka(a,c,o),a=o,n.current.lanes=a,ie(n,a),ki(n),t[Ei]=n.current,Lf(t),new ac(n)},Po.version="19.2.7",Po}var Og;function zS(){if(Og)return ed.exports;Og=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ed.exports=IS(),ed.exports}var FS=zS();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HS=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Pg=s=>{const e=HS(s);return e.charAt(0).toUpperCase()+e.slice(1)},z_=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),GS=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=ee.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:d,...p},m)=>ee.createElement("svg",{ref:m,...VS,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:z_("lucide",l),...!u&&!GS(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,S])=>ee.createElement(h,S)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=(s,e)=>{const i=ee.forwardRef(({className:r,...l},u)=>ee.createElement(kS,{ref:u,iconNode:e,className:z_(`lucide-${BS(Pg(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Pg(s),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],F_=Xr("arrow-left",XS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],qS=Xr("circle-alert",WS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],jS=Xr("download",YS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],KS=Xr("mail",ZS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],JS=Xr("play",QS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],B_=Xr("refresh-cw",$S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],eM=Xr("sparkles",tM);/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */var Ce=(s=>(s.IDLE="idle",s.LOADING="loading",s.ACTIVE="active",s.ALIGNED="aligned",s.STAGE2="stage2",s.STAGE3="stage3",s))(Ce||{});/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Ig={top:"35%",left:"30%",width:"180px",height:"180px",borderRadius:"50%",title:"專屬明信片",subtitle:"專屬明信片",buttonText:"查收呢份礼物",successMessage:"感恩这份奇妙的相遇，献上我最温暖的祝福！",initialUrl:"/assets/Y/Y1.jpg",resultUrl:"/assets/Y/Y2.jpg",finalUrl:"/assets/Y/Y3.jpg",avatarUrl:"/assets/Y/Y0.png",postcardPhotoUrl:"/assets/Y/Y4.jpg",postcardText:`感恩这份奇妙的相遇，
献上我最温暖的祝福！
愿你的每一步都充满阳光。`,guideTip:"「请将面部放入框线内，用于代入角色」"},zg={alice:{top:"30%",left:"50%",width:"200px",height:"200px",borderRadius:"50%",initialUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",resultUrl:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1200",finalUrl:"https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-falling-glitter-41595-large.mp4",title:"给 Alice 的魔法惊喜",subtitle:"对齐你的脸庞 🌟 看看发生什么",buttonText:"查收这份礼物",successMessage:"亲爱的 Alice，祝你生日快乐！希望这份魔法变装礼物能带给你满满的欢笑！🎂🎉",postcardPhotoUrl:"https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800&h=1200",postcardText:`致亲爱的 Alice：
愿这份星光魔法常伴你左右，
每天都顺心如意，
生活甜如蜜！🌸✨`},bob:{top:"40%",left:"48%",width:"220px",height:"280px",borderRadius:"24px",initialUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",resultUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1200",finalUrl:"https://assets.mixkit.co/videos/preview/mixkit-retro-futuristic-tunnel-loop-42866-large.mp4",title:"Bob 的魔法冒险队",subtitle:"启动认证 Face ID 进入异世界",buttonText:"启动变身密码",successMessage:"Bob！恭喜完成今日冒险！这是属于你的荣誉变身成果！🎖️🔥",postcardPhotoUrl:"https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=800&h=1200",postcardText:`冒险家 Bob：
祝你在全新的一年里，
劈波斩浪，勇往直前！
这张魔法明信片记下你帅气的瞬间！🦸‍♂️🔥`},y:{top:"35%",left:"30%",width:"180px",height:"180px",borderRadius:"50%",initialUrl:"/assets/Y/Y1.jpg",resultUrl:"/assets/Y/Y2.jpg",finalUrl:"/assets/Y/Y3.jpg",postcardPhotoUrl:"/assets/Y/Y4.jpg",avatarUrl:"/assets/Y/Y0.png",title:"阿浚~ 为你打打气！",guideTip:"「想象下，呢個時候吉伊心中諗緊乜嘢呢~」",postcardText:`阿浚，
感恩你恒常传递嘅温暖同关爱，你设身处地为我着想，我亦同样为你守望。正如你所share嘅，小八同吉伊讲，"一起去喔~"
面对近日嘅堂庆、邨中寻、探望基层等事奉，同埋你嘅返工、长途攞中药之付出，
想借着呢份心意，浚仔为阿浚打打气！
祈求主保守你内心享有平安，
愿主赐福与你！

"要彼此同心" 罗马书 12:16`},l:{top:"35%",left:"30%",width:"180px",height:"180px",borderRadius:"50%",initialUrl:"/assets/L/L1.png",resultUrl:"/assets/L/L2.png",finalUrl:"/assets/L/L3.mp4",postcardPhotoUrl:"/assets/L/L4.png",avatarUrl:"/assets/L/L0.png",title:"雪儿~ 为你打打气！",guideTip:"「想象下，呢個畫面襯邊位呢~」",postcardText:`雪儿，
感恩每次相遇！
平日好好照顾自己，
用喜乐之心，爱生活、爱兔仔，
愿主的恩典，
随住你对生命嘅热爱，
时刻陪伴住你！
守护你平安、健康、喜乐~ 

"喜乐的心乃是良药" 箴言 17:22`}};function nM(){if(typeof window>"u")return Ig;const s=new URLSearchParams(window.location.search),e=s.get("friend")||s.get("u");let i={...Ig};e&&zg[e.toLowerCase()]&&(i={...i,...zg[e.toLowerCase()]});const r=s.get("top"),l=s.get("left"),u=s.get("width"),d=s.get("height"),p=s.get("radius")||s.get("borderRadius");return r&&(i.top=r.includes("%")||r.includes("px")?r:`${r}%`),l&&(i.left=l.includes("%")||l.includes("px")?l:`${l}%`),u&&(i.width=u.includes("%")||u.includes("px")?u:`${u}px`),d&&(i.height=d.includes("%")||d.includes("px")?d:`${d}px`),p&&(i.borderRadius=p.includes("%")||p.includes("px")?p:`${p}`),i}const iM=({config:s})=>wt.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none z-10",children:[wt.jsx("div",{id:"mask-cutout-hole",className:"transition-all duration-300",style:{position:"absolute",top:s.top,left:s.left,width:s.width,height:s.height,borderRadius:s.borderRadius,transform:"translate(-50%, -50%)",boxShadow:"0 0 0 1000px rgba(250, 246, 238, 0.94)",border:"1.5px dashed rgba(220, 203, 175, 0.9)"}}),wt.jsx("div",{style:{position:"absolute",top:s.top,left:s.left,width:`calc(${s.width} + 12px)`,height:`calc(${s.height} + 12px)`,borderRadius:`calc(${s.borderRadius} + 6px)`,transform:"translate(-50%, -50%)",border:"1px solid rgba(220, 203, 175, 0.4)"}})]}),aM=({config:s})=>wt.jsxs("div",{className:"absolute inset-0 bg-neutral-950 flex flex-col items-center justify-between p-6 overflow-hidden",children:[wt.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"}),wt.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),wt.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),wt.jsx("div",{className:"relative flex-grow w-full flex items-center justify-center",children:wt.jsxs("div",{className:"relative overflow-hidden flex items-center justify-center border border-emerald-500/30 bg-radial from-emerald-500/10 to-transparent",style:{position:"absolute",top:s.top,left:s.left,width:s.width,height:s.height,borderRadius:s.borderRadius,transform:"translate(-50%, -50%)"},children:[wt.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent h-[200%] animate-[pulse_3s_infinite]"}),wt.jsx("svg",{className:"w-1/2 h-1/2 text-emerald-400 opacity-80",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:wt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25zm0 3.75h.008v.008H12v-.008zM9.75 8.25h.008v.008H9.75V8.25zm0 3.75h.008v.008H9.75v-.008zm4.5-3.75h.008v.008h-.008V8.25zm0 3.75h.008v.008h-.008v-.008z"})}),wt.jsx("div",{className:"absolute inset-2 border border-dashed border-emerald-400/20 rounded-full animate-[spin_20s_linear_infinite]"})]})})]}),rM=({isActive:s})=>{const e=ee.useRef(null);return ee.useEffect(()=>{var g,M;if(!s)return;const i=e.current;if(!i)return;const r=i.getContext("2d");if(!r)return;let l,u=i.width=((g=i.parentElement)==null?void 0:g.clientWidth)||360,d=i.height=((M=i.parentElement)==null?void 0:M.clientHeight)||640;const p=[],m=["rgba(14, 165, 233, 0.7)","rgba(52, 211, 153, 0.7)","rgba(139, 92, 246, 0.7)","rgba(244, 63, 94, 0.7)"],h=()=>({x:Math.random()*u,y:d+Math.random()*20,radius:Math.random()*2.5+.8,color:m[Math.floor(Math.random()*m.length)],speed:Math.random()*1.5+.5,angle:-Math.PI/2+(Math.random()*.2-.1),cosAmplitude:Math.random()*25+5,frequency:Math.random()*.02+.005,phase:Math.random()*Math.PI*2,decay:Math.random()*.005+.002,alpha:Math.random()*.5+.5});for(let b=0;b<40;b++){const C=h();C.y=Math.random()*d,p.push(C)}const S=new ResizeObserver(b=>{for(const C of b)u=i.width=C.contentRect.width,d=i.height=C.contentRect.height});i.parentElement&&S.observe(i.parentElement);const v=()=>{r.fillStyle="rgba(9, 9, 11, 0.12)",r.fillRect(0,0,u,d),r.strokeStyle="rgba(255, 255, 255, 0.02)",r.lineWidth=.5;for(let b=50;b<u;b+=50)r.beginPath(),r.moveTo(b,0),r.lineTo(b,d),r.stroke();for(let b=50;b<d;b+=50)r.beginPath(),r.moveTo(0,b),r.lineTo(u,b),r.stroke();for(let b=p.length-1;b>=0;b--){const C=p[b];C.y-=C.speed,C.alpha-=C.decay;const y=Math.sin((d-C.y)*C.frequency+C.phase)*C.cosAmplitude,x=C.x+y;r.beginPath(),r.arc(x,C.y,C.radius,0,Math.PI*2),r.shadowBlur=C.radius*3,r.shadowColor=C.color,r.fillStyle=C.color,r.fill(),r.shadowBlur=0,(C.y<-10||C.alpha<=0)&&(p[b]=h())}r.strokeStyle="rgba(14, 165, 233, 0.05)",r.lineWidth=1,r.beginPath(),r.arc(u/2,d*.35,120,0,Math.PI*2),r.stroke(),l=requestAnimationFrame(v)};return v(),()=>{cancelAnimationFrame(l),S.disconnect()}},[s]),wt.jsx("div",{className:"absolute inset-0 bg-neutral-950",children:wt.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full"})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nh="184",sM=0,Fg=1,oM=2,Uc=1,lM=2,ko=3,hr=0,Jn=1,ya=2,ba=0,Fs=1,Fd=2,Bg=3,Hg=4,cM=5,zr=100,uM=101,fM=102,dM=103,hM=104,pM=200,mM=201,gM=202,_M=203,Bd=204,Hd=205,vM=206,xM=207,SM=208,MM=209,yM=210,EM=211,bM=212,TM=213,AM=214,Gd=0,Vd=1,kd=2,Hs=3,Xd=4,Wd=5,qd=6,Yd=7,H_=0,RM=1,CM=2,Zi=0,G_=1,V_=2,k_=3,X_=4,W_=5,q_=6,Y_=7,j_=300,Gr=301,Gs=302,rd=303,sd=304,Xc=306,jd=1e3,Ea=1001,Zd=1002,Nn=1003,wM=1004,sc=1005,Hn=1006,od=1007,Br=1008,yi=1009,Z_=1010,K_=1011,Wo=1012,Lh=1013,Qi=1014,Yi=1015,Ra=1016,Oh=1017,Ph=1018,qo=1020,Q_=35902,J_=35899,$_=1021,tv=1022,Li=1023,Ca=1026,Hr=1027,ev=1028,Ih=1029,Vr=1030,zh=1031,Fh=1033,Nc=33776,Lc=33777,Oc=33778,Pc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37488,ah=37489,zc=37490,rh=37491,sh=37808,oh=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,hh=37815,ph=37816,mh=37817,gh=37818,_h=37819,vh=37820,xh=37821,Sh=36492,Mh=36494,yh=36495,Eh=36283,bh=36284,Fc=36285,Th=36286,DM=3200,Gg=0,UM=1,fr="",Si="srgb",Bc="srgb-linear",Hc="linear",ke="srgb",bs=7680,Vg=519,NM=512,LM=513,OM=514,Bh=515,PM=516,IM=517,Hh=518,zM=519,kg=35044,Xg="300 es",ji=2e3,Gc=2001;function FM(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function BM(){const s=Vc("canvas");return s.style.display="block",s}const Wg={};function qg(...s){const e="THREE."+s.shift();console.log(e,...s)}function nv(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function se(...s){s=nv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function De(...s){s=nv(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Ah(...s){const e=s.join(" ");e in Wg||(Wg[e]=!0,se(...s))}function HM(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const GM={[Gd]:Vd,[kd]:qd,[Xd]:Yd,[Hs]:Wd,[Vd]:Gd,[qd]:kd,[Yd]:Xd,[Wd]:Hs};class Wr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,Rh=180/Math.PI;function Yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Ae(s,e,i){return Math.max(e,Math.min(i,s))}function VM(s,e){return(s%e+e)%e}function cd(s,e,i){return(1-i)*s+i*e}function Io(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vh=class Vh{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ae(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vh.prototype.isVector2=!0;let je=Vh;class Xs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,p){let m=r[l+0],h=r[l+1],S=r[l+2],v=r[l+3],g=u[d+0],M=u[d+1],b=u[d+2],C=u[d+3];if(v!==C||m!==g||h!==M||S!==b){let y=m*g+h*M+S*b+v*C;y<0&&(g=-g,M=-M,b=-b,C=-C,y=-y);let x=1-p;if(y<.9995){const D=Math.acos(y),U=Math.sin(D);x=Math.sin(x*D)/U,p=Math.sin(p*D)/U,m=m*x+g*p,h=h*x+M*p,S=S*x+b*p,v=v*x+C*p}else{m=m*x+g*p,h=h*x+M*p,S=S*x+b*p,v=v*x+C*p;const D=1/Math.sqrt(m*m+h*h+S*S+v*v);m*=D,h*=D,S*=D,v*=D}}e[i]=m,e[i+1]=h,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const p=r[l],m=r[l+1],h=r[l+2],S=r[l+3],v=u[d],g=u[d+1],M=u[d+2],b=u[d+3];return e[i]=p*b+S*v+m*M-h*g,e[i+1]=m*b+S*g+h*v-p*M,e[i+2]=h*b+S*M+p*g-m*v,e[i+3]=S*b-p*v-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),S=p(l/2),v=p(u/2),g=m(r/2),M=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=g*S*v+h*M*b,this._y=h*M*v-g*S*b,this._z=h*S*b+g*M*v,this._w=h*S*v-g*M*b;break;case"YXZ":this._x=g*S*v+h*M*b,this._y=h*M*v-g*S*b,this._z=h*S*b-g*M*v,this._w=h*S*v+g*M*b;break;case"ZXY":this._x=g*S*v-h*M*b,this._y=h*M*v+g*S*b,this._z=h*S*b+g*M*v,this._w=h*S*v-g*M*b;break;case"ZYX":this._x=g*S*v-h*M*b,this._y=h*M*v+g*S*b,this._z=h*S*b-g*M*v,this._w=h*S*v+g*M*b;break;case"YZX":this._x=g*S*v+h*M*b,this._y=h*M*v+g*S*b,this._z=h*S*b-g*M*v,this._w=h*S*v-g*M*b;break;case"XZY":this._x=g*S*v-h*M*b,this._y=h*M*v-g*S*b,this._z=h*S*b+g*M*v,this._w=h*S*v+g*M*b;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],v=i[10],g=r+p+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(S-m)*M,this._y=(u-h)*M,this._z=(d-l)*M}else if(r>p&&r>v){const M=2*Math.sqrt(1+r-p-v);this._w=(S-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+h)/M}else if(p>v){const M=2*Math.sqrt(1+p-r-v);this._w=(u-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+v-r-p);this._w=(d-l)/M,this._x=(u+h)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ae(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=r*S+d*p+l*h-u*m,this._y=l*S+d*m+u*p-r*h,this._z=u*S+d*h+r*m-l*p,this._w=d*S-r*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kh=class kh{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Yg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Yg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),S=2*(p*i-u*l),v=2*(u*r-d*i);return this.x=i+m*h+d*v-p*S,this.y=r+m*S+p*h-u*v,this.z=l+m*v+u*S-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ae(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kh.prototype.isVector3=!0;let rt=kh;const ud=new rt,Yg=new Xs,Xh=class Xh{constructor(e,i,r,l,u,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h)}set(e,i,r,l,u,d,p,m,h){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=u,S[5]=m,S[6]=r,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],S=r[4],v=r[7],g=r[2],M=r[5],b=r[8],C=l[0],y=l[3],x=l[6],D=l[1],U=l[4],O=l[7],V=l[2],P=l[5],F=l[8];return u[0]=d*C+p*D+m*V,u[3]=d*y+p*U+m*P,u[6]=d*x+p*O+m*F,u[1]=h*C+S*D+v*V,u[4]=h*y+S*U+v*P,u[7]=h*x+S*O+v*F,u[2]=g*C+M*D+b*V,u[5]=g*y+M*U+b*P,u[8]=g*x+M*O+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8];return i*d*S-i*p*h-r*u*S+r*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],v=S*d-p*h,g=p*m-S*u,M=h*u-d*m,b=i*v+r*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(l*h-S*r)*C,e[2]=(p*r-l*d)*C,e[3]=g*C,e[4]=(S*i-l*m)*C,e[5]=(l*u-p*i)*C,e[6]=M*C,e[7]=(r*m-h*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(fd.makeScale(e,i)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,i){return this.premultiply(fd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xh.prototype.isMatrix3=!0;let ce=Xh;const fd=new ce,jg=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zg=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kM(){const s={enabled:!0,workingColorSpace:Bc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===ke&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===ke&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fr?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ah("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ah("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bc]:{primaries:e,whitePoint:r,transfer:Hc,toXYZ:jg,fromXYZ:Zg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:r,transfer:ke,toXYZ:jg,fromXYZ:Zg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const Te=kM();function Ta(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class XM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ts===void 0&&(Ts=Vc("canvas")),Ts.width=e.width,Ts.height=e.height;const l=Ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ta(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ta(i[r]/255)*255):i[r]=Ta(i[r]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WM=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(dd(l[d].image)):u.push(dd(l[d]))}else u=dd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?XM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let qM=0;const hd=new rt;class Gn extends Wr{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=Ea,l=Ea,u=Hn,d=Br,p=Li,m=yi,h=Gn.DEFAULT_ANISOTROPY,S=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Yo(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jd:e.x=e.x-Math.floor(e.x);break;case Ea:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jd:e.y=e.y-Math.floor(e.y);break;case Ea:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=j_;Gn.DEFAULT_ANISOTROPY=1;const Wh=class Wh{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,h=m[0],S=m[4],v=m[8],g=m[1],M=m[5],b=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(S-g)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(S+g)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,O=(M+1)/2,V=(x+1)/2,P=(S+g)/4,F=(v+C)/4,T=(b+y)/4;return U>O&&U>V?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=P/r,u=F/r):O>V?O<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),r=P/l,u=T/l):V<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),r=F/u,l=T/u),this.set(r,l,u,i),this}let D=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(g-S)*(g-S));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(v-C)/D,this.z=(g-S)/D,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this.w=Ae(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this.w=Ae(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;let fn=Wh;class YM extends Wr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Gn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Gh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends YM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class iv extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jM extends Gn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=class kc{constructor(e,i,r,l,u,d,p,m,h,S,v,g,M,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,p,m,h,S,v,g,M,b,C,y)}set(e,i,r,l,u,d,p,m,h,S,v,g,M,b,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=S,x[10]=v,x[14]=g,x[3]=M,x[7]=b,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/As.setFromMatrixColumn(e,0).length(),u=1/As.setFromMatrixColumn(e,1).length(),d=1/As.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),S=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const g=d*S,M=d*v,b=p*S,C=p*v;i[0]=m*S,i[4]=-m*v,i[8]=h,i[1]=M+b*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=b+M*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*S,M=m*v,b=h*S,C=h*v;i[0]=g+C*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*v,i[5]=d*S,i[9]=-p,i[2]=M*p-b,i[6]=C+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*S,M=m*v,b=h*S,C=h*v;i[0]=g-C*p,i[4]=-d*v,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*S,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*S,M=d*v,b=p*S,C=p*v;i[0]=m*S,i[4]=b*h-M,i[8]=g*h+C,i[1]=m*v,i[5]=C*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,M=d*h,b=p*m,C=p*h;i[0]=m*S,i[4]=C-g*v,i[8]=b*v+M,i[1]=v,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=M*v+b,i[10]=g-C*v}else if(e.order==="XZY"){const g=d*m,M=d*h,b=p*m,C=p*h;i[0]=m*S,i[4]=-v,i[8]=h*S,i[1]=g*v+C,i[5]=d*S,i[9]=M*v-b,i[2]=b*v-M,i[6]=p*S,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZM,e,KM)}lookAt(e,i,r){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),rr.crossVectors(r,ci),rr.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),rr.crossVectors(r,ci)),rr.normalize(),oc.crossVectors(ci,rr),l[0]=rr.x,l[4]=oc.x,l[8]=ci.x,l[1]=rr.y,l[5]=oc.y,l[9]=ci.y,l[2]=rr.z,l[6]=oc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],S=r[1],v=r[5],g=r[9],M=r[13],b=r[2],C=r[6],y=r[10],x=r[14],D=r[3],U=r[7],O=r[11],V=r[15],P=l[0],F=l[4],T=l[8],I=l[12],Z=l[1],H=l[5],Q=l[9],ut=l[13],mt=l[2],X=l[6],L=l[10],z=l[14],st=l[3],dt=l[7],Mt=l[11],N=l[15];return u[0]=d*P+p*Z+m*mt+h*st,u[4]=d*F+p*H+m*X+h*dt,u[8]=d*T+p*Q+m*L+h*Mt,u[12]=d*I+p*ut+m*z+h*N,u[1]=S*P+v*Z+g*mt+M*st,u[5]=S*F+v*H+g*X+M*dt,u[9]=S*T+v*Q+g*L+M*Mt,u[13]=S*I+v*ut+g*z+M*N,u[2]=b*P+C*Z+y*mt+x*st,u[6]=b*F+C*H+y*X+x*dt,u[10]=b*T+C*Q+y*L+x*Mt,u[14]=b*I+C*ut+y*z+x*N,u[3]=D*P+U*Z+O*mt+V*st,u[7]=D*F+U*H+O*X+V*dt,u[11]=D*T+U*Q+O*L+V*Mt,u[15]=D*I+U*ut+O*z+V*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],S=e[2],v=e[6],g=e[10],M=e[14],b=e[3],C=e[7],y=e[11],x=e[15],D=m*M-h*g,U=p*M-h*v,O=p*g-m*v,V=d*M-h*S,P=d*g-m*S,F=d*v-p*S;return i*(C*D-y*U+x*O)-r*(b*D-y*V+x*P)+l*(b*U-C*V+x*F)-u*(b*O-C*P+y*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],v=e[9],g=e[10],M=e[11],b=e[12],C=e[13],y=e[14],x=e[15],D=i*p-r*d,U=i*m-l*d,O=i*h-u*d,V=r*m-l*p,P=r*h-u*p,F=l*h-u*m,T=S*C-v*b,I=S*y-g*b,Z=S*x-M*b,H=v*y-g*C,Q=v*x-M*C,ut=g*x-M*y,mt=D*ut-U*Q+O*H+V*Z-P*I+F*T;if(mt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/mt;return e[0]=(p*ut-m*Q+h*H)*X,e[1]=(l*Q-r*ut-u*H)*X,e[2]=(C*F-y*P+x*V)*X,e[3]=(g*P-v*F-M*V)*X,e[4]=(m*Z-d*ut-h*I)*X,e[5]=(i*ut-l*Z+u*I)*X,e[6]=(y*O-b*F-x*U)*X,e[7]=(S*F-g*O+M*U)*X,e[8]=(d*Q-p*Z+h*T)*X,e[9]=(r*Z-i*Q-u*T)*X,e[10]=(b*P-C*O+x*D)*X,e[11]=(v*O-S*P-M*D)*X,e[12]=(p*I-d*H-m*T)*X,e[13]=(i*H-r*I+l*T)*X,e[14]=(C*U-b*V-y*D)*X,e[15]=(S*V-v*U+g*D)*X,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,p=e.y,m=e.z,h=u*d,S=u*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+r,S*m-l*d,0,h*m-l*p,S*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,S=d+d,v=p+p,g=u*h,M=u*S,b=u*v,C=d*S,y=d*v,x=p*v,D=m*h,U=m*S,O=m*v,V=r.x,P=r.y,F=r.z;return l[0]=(1-(C+x))*V,l[1]=(M+O)*V,l[2]=(b-U)*V,l[3]=0,l[4]=(M-O)*P,l[5]=(1-(g+x))*P,l[6]=(y+D)*P,l[7]=0,l[8]=(b+U)*F,l[9]=(y-D)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let d=As.set(l[0],l[1],l[2]).length();const p=As.set(l[4],l[5],l[6]).length(),m=As.set(l[8],l[9],l[10]).length();u<0&&(d=-d),wi.copy(this);const h=1/d,S=1/p,v=1/m;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=S,wi.elements[5]*=S,wi.elements[6]*=S,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,i.setFromRotationMatrix(wi),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,u,d,p=ji,m=!1){const h=this.elements,S=2*u/(i-e),v=2*u/(r-l),g=(i+e)/(i-e),M=(r+l)/(r-l);let b,C;if(m)b=u/(d-u),C=d*u/(d-u);else if(p===ji)b=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(p===Gc)b=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,u,d,p=ji,m=!1){const h=this.elements,S=2/(i-e),v=2/(r-l),g=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,C;if(m)b=1/(d-u),C=d/(d-u);else if(p===ji)b=-2/(d-u),C=-(d+u)/(d-u);else if(p===Gc)b=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};kc.prototype.isMatrix4=!0;let Sn=kc;const As=new rt,wi=new Sn,ZM=new rt(0,0,0),KM=new rt(1,1,1),rr=new rt,oc=new rt,ci=new rt,Kg=new Sn,Qg=new Xs;class kr{constructor(e=0,i=0,r=0,l=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-S,M),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QM=0;const Jg=new rt,Rs=new Xs,_a=new Sn,lc=new rt,zo=new rt,JM=new rt,$M=new Xs,$g=new rt(1,0,0),t_=new rt(0,1,0),e_=new rt(0,0,1),n_={type:"added"},ty={type:"removed"},Cs={type:"childadded",child:null},pd={type:"childremoved",child:null};class $n extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new rt,i=new kr,r=new Xs,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Sn},normalMatrix:{value:new ce}}),this.matrix=new Sn,this.matrixWorld=new Sn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,i){return Rs.setFromAxisAngle(e,i),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis($g,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($g,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?lc.copy(e):lc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(zo,lc,this.up):_a.lookAt(lc,zo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Rs.setFromRotationMatrix(_a),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n_),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ty),pd.child=e,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n_),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,JM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,$M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const v=m[h];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),S=d(e.images),v=d(e.shapes),g=d(e.skeletons),M=d(e.animations),b=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),S.length>0&&(r.images=S),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}$n.DEFAULT_UP=new rt(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cc extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(h,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const S=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=S.position.distanceTo(v.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new cc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},uc={h:0,s:0,l:0};function gd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Xe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Te.workingColorSpace){return this.r=e,this.g=i,this.b=r,Te.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Te.workingColorSpace){if(e=VM(e,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=gd(d,u,e+1/3),this.g=gd(d,u,e),this.b=gd(d,u,e-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function r(u){u!==void 0&&parseFloat(u)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=rv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Te.workingToColorSpace(Bn.copy(this),e),Math.round(Ae(Bn.r*255,0,255))*65536+Math.round(Ae(Bn.g*255,0,255))*256+Math.round(Ae(Bn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Te.workingColorSpace){Te.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,l=Bn.g,u=Bn.b,d=Math.max(r,l,u),p=Math.min(r,l,u);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const v=d-p;switch(h=S<=.5?v/(d+p):v/(2-d-p),d){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=S,e}getRGB(e,i=Te.workingColorSpace){return Te.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Si){Te.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,r=Bn.g,l=Bn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+i,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(sr),e.getHSL(uc);const r=cd(sr.h,uc.h,i),l=cd(sr.s,uc.s,i),u=cd(sr.l,uc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Xe;Xe.NAMES=rv;class ny extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new rt,va=new rt,_d=new rt,xa=new rt,ws=new rt,Ds=new rt,i_=new rt,vd=new rt,xd=new rt,Sd=new rt,Md=new fn,yd=new fn,Ed=new fn;class Ni{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Di.subVectors(e,i),l.cross(Di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Di.subVectors(l,i),va.subVectors(r,i),_d.subVectors(e,i);const d=Di.dot(Di),p=Di.dot(va),m=Di.dot(_d),h=va.dot(va),S=va.dot(_d),v=d*h-p*p;if(v===0)return u.set(0,0,0),null;const g=1/v,M=(h*m-p*S)*g,b=(d*S-p*m)*g;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,i,r,l,u,d,p,m){return this.getBarycoord(e,i,r,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,xa.x),m.addScaledVector(d,xa.y),m.addScaledVector(p,xa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return Md.setScalar(0),yd.setScalar(0),Ed.setScalar(0),Md.fromBufferAttribute(e,i),yd.fromBufferAttribute(e,r),Ed.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Md,u.x),d.addScaledVector(yd,u.y),d.addScaledVector(Ed,u.z),d}static isFrontFacing(e,i,r,l){return Di.subVectors(r,i),va.subVectors(e,i),Di.cross(va).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Di.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ni.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,p;ws.subVectors(l,r),Ds.subVectors(u,r),vd.subVectors(e,r);const m=ws.dot(vd),h=Ds.dot(vd);if(m<=0&&h<=0)return i.copy(r);xd.subVectors(e,l);const S=ws.dot(xd),v=Ds.dot(xd);if(S>=0&&v<=S)return i.copy(l);const g=m*v-S*h;if(g<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(r).addScaledVector(ws,d);Sd.subVectors(e,u);const M=ws.dot(Sd),b=Ds.dot(Sd);if(b>=0&&M<=b)return i.copy(u);const C=M*h-m*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(Ds,p);const y=S*b-M*v;if(y<=0&&v-S>=0&&M-b>=0)return i_.subVectors(u,l),p=(v-S)/(v-S+(M-b)),i.copy(l).addScaledVector(i_,p);const x=1/(y+C+g);return d=C*x,p=g*x,i.copy(r).addScaledVector(ws,d).addScaledVector(Ds,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ui):Ui.fromBufferAttribute(u,d),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fc.copy(r.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),dc.subVectors(this.max,Fo),Us.subVectors(e.a,Fo),Ns.subVectors(e.b,Fo),Ls.subVectors(e.c,Fo),or.subVectors(Ns,Us),lr.subVectors(Ls,Ns),Nr.subVectors(Us,Ls);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Nr.z,Nr.y,or.z,0,-or.x,lr.z,0,-lr.x,Nr.z,0,-Nr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Nr.y,Nr.x,0];return!bd(i,Us,Ns,Ls,dc)||(i=[1,0,0,0,1,0,0,0,1],!bd(i,Us,Ns,Ls,dc))?!1:(hc.crossVectors(or,lr),i=[hc.x,hc.y,hc.z],bd(i,Us,Ns,Ls,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Ui=new rt,fc=new jo,Us=new rt,Ns=new rt,Ls=new rt,or=new rt,lr=new rt,Nr=new rt,Fo=new rt,dc=new rt,hc=new rt,Lr=new rt;function bd(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){Lr.fromArray(s,u);const p=l.x*Math.abs(Lr.x)+l.y*Math.abs(Lr.y)+l.z*Math.abs(Lr.z),m=e.dot(Lr),h=i.dot(Lr),S=r.dot(Lr);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const xn=new rt,pc=new je;let iy=0;class Oi extends Wr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kg,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(e),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),l=Qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),r=Qn(r,this.array),l=Qn(l,this.array),u=Qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sv extends Oi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class ov extends Oi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Aa extends Oi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const ay=new jo,Bo=new rt,Td=new rt;class Wc{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ay.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Td)),this.expandByPoint(Bo.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ry=0;const xi=new Sn,Ad=new $n,Os=new rt,ui=new jo,Ho=new jo,Rn=new rt;class Pi extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FM(e)?ov:sv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ce().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Aa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ui.setFromBufferAttribute(u),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];Ho.setFromBufferAttribute(p),this.morphTargetsRelative?(Rn.addVectors(ui.min,Ho.min),ui.expandByPoint(Rn),Rn.addVectors(ui.max,Ho.max),ui.expandByPoint(Rn)):(ui.expandByPoint(Ho.min),ui.expandByPoint(Ho.max))}ui.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Rn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)Rn.fromBufferAttribute(p,h),m&&(Os.fromBufferAttribute(e,h),Rn.add(Os)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new rt,m[T]=new rt;const h=new rt,S=new rt,v=new rt,g=new je,M=new je,b=new je,C=new rt,y=new rt;function x(T,I,Z){h.fromBufferAttribute(r,T),S.fromBufferAttribute(r,I),v.fromBufferAttribute(r,Z),g.fromBufferAttribute(u,T),M.fromBufferAttribute(u,I),b.fromBufferAttribute(u,Z),S.sub(h),v.sub(h),M.sub(g),b.sub(g);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(C.copy(S).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(S,-b.x).multiplyScalar(H),p[T].add(C),p[I].add(C),p[Z].add(C),m[T].add(y),m[I].add(y),m[Z].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,I=D.length;T<I;++T){const Z=D[T],H=Z.start,Q=Z.count;for(let ut=H,mt=H+Q;ut<mt;ut+=3)x(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const U=new rt,O=new rt,V=new rt,P=new rt;function F(T){V.fromBufferAttribute(l,T),P.copy(V);const I=p[T];U.copy(I),U.sub(V.multiplyScalar(V.dot(I))).normalize(),O.crossVectors(P,I);const H=O.dot(m[T])<0?-1:1;d.setXYZW(T,U.x,U.y,U.z,H)}for(let T=0,I=D.length;T<I;++T){const Z=D[T],H=Z.start,Q=Z.count;for(let ut=H,mt=H+Q;ut<mt;ut+=3)F(e.getX(ut+0)),F(e.getX(ut+1)),F(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const l=new rt,u=new rt,d=new rt,p=new rt,m=new rt,h=new rt,S=new rt,v=new rt;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),S.subVectors(d,u),v.subVectors(l,u),S.cross(v),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),p.add(S),m.add(S),h.add(S),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),u.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),S.subVectors(d,u),v.subVectors(l,u),S.cross(v),r.setXYZ(g+0,S.x,S.y,S.z),r.setXYZ(g+1,S.x,S.y,S.z),r.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(p,m){const h=p.array,S=p.itemSize,v=p.normalized,g=new h.constructor(m.length*S);let M=0,b=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*S;for(let x=0;x<S;x++)g[b++]=h[M++]}return new Oi(g,S,v)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let S=0,v=h.length;S<v;S++){const g=h[S],M=e(g,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let v=0,g=h.length;v<g;v++){const M=h[v];S.push(M.toJSON(e.data))}S.length>0&&(l[m]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const u=e.morphAttributes;for(const h in u){const S=[],v=u[h];for(let g=0,M=v.length;g<M;g++)S.push(v[g].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,S=d.length;h<S;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sy=0;class Zo extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Fs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Hd,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Hd&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ma=new rt,Rd=new rt,mc=new rt,cr=new rt,Cd=new rt,gc=new rt,wd=new rt;class lv{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Rd.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),cr.copy(this.origin).sub(Rd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(mc),p=cr.dot(this.direction),m=-cr.dot(mc),h=cr.lengthSq(),S=Math.abs(1-d*d);let v,g,M,b;if(S>0)if(v=d*m-p,g=d*p-m,b=u*S,v>=0)if(g>=-b)if(g<=b){const C=1/S;v*=C,g*=C,M=v*(v+d*g+2*p)+g*(d*v+g+2*m)+h}else g=u,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;else g=-u,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;else g<=-b?(v=Math.max(0,-(-d*u+p)),g=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+g*(g+2*m)+h):g<=b?(v=0,g=Math.min(Math.max(-u,-m),u),M=g*(g+2*m)+h):(v=Math.max(0,-(d*u+p)),g=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+g*(g+2*m)+h);else g=d>0?-u:u,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Rd).addScaledVector(mc,g),M}intersectSphere(e,i){Ma.subVectors(e.center,this.origin);const r=Ma.dot(this.direction),l=Ma.dot(Ma)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),S>=0?(u=(e.min.y-g.y)*S,d=(e.max.y-g.y)*S):(u=(e.max.y-g.y)*S,d=(e.min.y-g.y)*S),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ma)!==null}intersectTriangle(e,i,r,l,u){Cd.subVectors(i,e),gc.subVectors(r,e),wd.crossVectors(Cd,gc);let d=this.direction.dot(wd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;cr.subVectors(this.origin,e);const m=p*this.direction.dot(gc.crossVectors(cr,gc));if(m<0)return null;const h=p*this.direction.dot(Cd.cross(cr));if(h<0||m+h>d)return null;const S=-p*cr.dot(wd);return S<0?null:this.at(S/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cv extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a_=new Sn,Or=new lv,_c=new Wc,r_=new rt,vc=new rt,xc=new rt,Sc=new rt,Dd=new rt,Mc=new rt,s_=new rt,yc=new rt;class wa extends $n{constructor(e=new Pi,i=new cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Mc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const S=p[m],v=u[m];S!==0&&(Dd.fromBufferAttribute(v,e),d?Mc.addScaledVector(Dd,S):Mc.addScaledVector(Dd.sub(i),S))}i.add(Mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(_c.containsPoint(Or.origin)===!1&&(Or.intersectSphere(_c,r_)===null||Or.origin.distanceToSquared(r_)>(e.far-e.near)**2))&&(a_.copy(u).invert(),Or.copy(e.ray).applyMatrix4(a_),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Or)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,S=u.attributes.uv1,v=u.attributes.normal,g=u.groups,M=u.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,C=g.length;b<C;b++){const y=g[b],x=d[y.materialIndex],D=Math.max(y.start,M.start),U=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let O=D,V=U;O<V;O+=3){const P=p.getX(O),F=p.getX(O+1),T=p.getX(O+2);l=Ec(this,x,e,r,h,S,v,P,F,T),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=b,x=C;y<x;y+=3){const D=p.getX(y),U=p.getX(y+1),O=p.getX(y+2);l=Ec(this,d,e,r,h,S,v,D,U,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,C=g.length;b<C;b++){const y=g[b],x=d[y.materialIndex],D=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=D,V=U;O<V;O+=3){const P=O,F=O+1,T=O+2;l=Ec(this,x,e,r,h,S,v,P,F,T),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,x=C;y<x;y+=3){const D=y,U=y+1,O=y+2;l=Ec(this,d,e,r,h,S,v,D,U,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function oy(s,e,i,r,l,u,d,p){let m;if(e.side===Jn?m=r.intersectTriangle(d,u,l,!0,p):m=r.intersectTriangle(l,u,d,e.side===hr,p),m===null)return null;yc.copy(p),yc.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(yc);return h<i.near||h>i.far?null:{distance:h,point:yc.clone(),object:s}}function Ec(s,e,i,r,l,u,d,p,m,h){s.getVertexPosition(p,vc),s.getVertexPosition(m,xc),s.getVertexPosition(h,Sc);const S=oy(s,e,i,r,vc,xc,Sc,s_);if(S){const v=new rt;Ni.getBarycoord(s_,vc,xc,Sc,v),l&&(S.uv=Ni.getInterpolatedAttribute(l,p,m,h,v,new je)),u&&(S.uv1=Ni.getInterpolatedAttribute(u,p,m,h,v,new je)),d&&(S.normal=Ni.getInterpolatedAttribute(d,p,m,h,v,new rt),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new rt,materialIndex:0};Ni.getNormal(vc,xc,Sc,g.normal),S.face=g,S.barycoord=v}return S}class ly extends Gn{constructor(e=null,i=1,r=1,l,u,d,p,m,h=Nn,S=Nn,v,g){super(null,d,p,m,h,S,l,u,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ud=new rt,cy=new rt,uy=new ce;class Ir{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ud.subVectors(r,i).cross(cy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Ud),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||uy.getNormalMatrix(e),l=this.coplanarPoint(Ud).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Wc,fy=new je(.5,.5),bc=new rt;class uv{constructor(e=new Ir,i=new Ir,r=new Ir,l=new Ir,u=new Ir,d=new Ir){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ji,r=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],S=u[4],v=u[5],g=u[6],M=u[7],b=u[8],C=u[9],y=u[10],x=u[11],D=u[12],U=u[13],O=u[14],V=u[15];if(l[0].setComponents(h-d,M-S,x-b,V-D).normalize(),l[1].setComponents(h+d,M+S,x+b,V+D).normalize(),l[2].setComponents(h+p,M+v,x+C,V+U).normalize(),l[3].setComponents(h-p,M-v,x-C,V-U).normalize(),r)l[4].setComponents(m,g,y,O).normalize(),l[5].setComponents(h-m,M-g,x-y,V-O).normalize();else if(l[4].setComponents(h-m,M-g,x-y,V-O).normalize(),i===ji)l[5].setComponents(h+m,M+g,x+y,V+O).normalize();else if(i===Gc)l[5].setComponents(m,g,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);const i=fy.distanceTo(e.center);return Pr.radius=.7071067811865476+i,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(bc.x=l.normal.x>0?e.max.x:e.min.x,bc.y=l.normal.y>0?e.max.y:e.min.y,bc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fv extends Zo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const o_=new Sn,Ch=new lv,Tc=new Wc,Ac=new rt;class dy extends $n{constructor(e=new Pi,i=new fv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=u,e.ray.intersectsSphere(Tc)===!1)return;o_.copy(l).invert(),Ch.copy(e.ray).applyMatrix4(o_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=r.index,v=r.attributes.position;if(h!==null){const g=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let b=g,C=M;b<C;b++){const y=h.getX(b);Ac.fromBufferAttribute(v,y),l_(Ac,y,m,l,e,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(v.count,d.start+d.count);for(let b=g,C=M;b<C;b++)Ac.fromBufferAttribute(v,b),l_(Ac,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function l_(s,e,i,r,l,u,d){const p=Ch.distanceSqToPoint(s);if(p<i){const m=new rt;Ch.closestPointToPoint(s,m),m.applyMatrix4(r);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;u.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class dv extends Gn{constructor(e=[],i=Gr,r,l,u,d,p,m,h,S){super(e,i,r,l,u,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hy extends Gn{constructor(e,i,r,l,u,d,p,m,h){super(e,i,r,l,u,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends Gn{constructor(e,i,r=Qi,l,u,d,p=Nn,m=Nn,h,S=Ca,v=1){if(S!==Ca&&S!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,u,d,p,m,S,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class py extends Vs{constructor(e,i=Qi,r=Gr,l,u,d=Nn,p=Nn,m,h=Ca){const S={width:e,height:e,depth:1},v=[S,S,S,S,S,S];super(e,e,i,r,l,u,d,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hv extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends Pi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],S=[],v=[];let g=0,M=0;b("z","y","x",-1,-1,r,i,e,d,u,0),b("z","y","x",1,-1,r,i,-e,d,u,1),b("x","z","y",1,1,e,r,i,l,d,2),b("x","z","y",1,-1,e,r,-i,l,d,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Aa(h,3)),this.setAttribute("normal",new Aa(S,3)),this.setAttribute("uv",new Aa(v,2));function b(C,y,x,D,U,O,V,P,F,T,I){const Z=O/F,H=V/T,Q=O/2,ut=V/2,mt=P/2,X=F+1,L=T+1;let z=0,st=0;const dt=new rt;for(let Mt=0;Mt<L;Mt++){const N=Mt*H-ut;for(let K=0;K<X;K++){const gt=K*Z-Q;dt[C]=gt*D,dt[y]=N*U,dt[x]=mt,h.push(dt.x,dt.y,dt.z),dt[C]=0,dt[y]=0,dt[x]=P>0?1:-1,S.push(dt.x,dt.y,dt.z),v.push(K/F),v.push(1-Mt/T),z+=1}}for(let Mt=0;Mt<T;Mt++)for(let N=0;N<F;N++){const K=g+N+X*Mt,gt=g+N+X*(Mt+1),At=g+(N+1)+X*(Mt+1),Tt=g+(N+1)+X*Mt;m.push(K,gt,Tt),m.push(gt,At,Tt),st+=6}p.addGroup(M,st,I),M+=st,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qc extends Pi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,S=m+1,v=e/p,g=i/m,M=[],b=[],C=[],y=[];for(let x=0;x<S;x++){const D=x*g-d;for(let U=0;U<h;U++){const O=U*v-u;b.push(O,-D,0),C.push(0,0,1),y.push(U/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<p;D++){const U=D+h*x,O=D+h*(x+1),V=D+1+h*(x+1),P=D+1+h*x;M.push(U,O,P),M.push(O,V,P)}this.setIndex(M),this.setAttribute("position",new Aa(b,3)),this.setAttribute("normal",new Aa(C,3)),this.setAttribute("uv",new Aa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ks(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(c_(l))l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(c_(l[0])){const u=[];for(let d=0,p=l.length;d<p;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Xn(s){const e={};for(let i=0;i<s.length;i++){const r=ks(s[i]);for(const l in r)e[l]=r[l]}return e}function c_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function my(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function pv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Te.workingColorSpace}const gy={clone:ks,merge:Xn};var _y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=my(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class xy extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sy extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class My extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rc=new rt,Cc=new Xs,Xi=new rt;class mv extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Sn,this.projectionMatrix=new Sn,this.projectionMatrixInverse=new Sn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rc,Cc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Rc,Cc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Cc,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new rt,u_=new je,f_=new je;class Mi extends mv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rh*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,i){return this.getViewBounds(e,u_,f_),i.subVectors(f_,u_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ld*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class gv extends mv{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ps=-90,Is=1;class yy extends $n{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Ps,Is,e,i);l.layers=this.layers,this.add(l);const u=new Mi(Ps,Is,e,i);u.layers=this.layers,this.add(u);const d=new Mi(Ps,Is,e,i);d.layers=this.layers,this.add(d);const p=new Mi(Ps,Is,e,i);p.layers=this.layers,this.add(p);const m=new Mi(Ps,Is,e,i);m.layers=this.layers,this.add(m);const h=new Mi(Ps,Is,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,S]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(v,g,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Ey extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qh=class qh{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};qh.prototype.isMatrix2=!0;let d_=qh;function h_(s,e,i,r){const l=by(r);switch(i){case $_:return s*e;case ev:return s*e/l.components*l.byteLength;case Ih:return s*e/l.components*l.byteLength;case Vr:return s*e*2/l.components*l.byteLength;case zh:return s*e*2/l.components*l.byteLength;case tv:return s*e*3/l.components*l.byteLength;case Li:return s*e*4/l.components*l.byteLength;case Fh:return s*e*4/l.components*l.byteLength;case Nc:case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qd:case $d:return Math.max(s,16)*Math.max(e,8)/4;case Kd:case Jd:return Math.max(s,8)*Math.max(e,8)/2;case th:case eh:case ih:case ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nh:case zc:case rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case uh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sh:case Mh:case yh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Eh:case bh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fc:case Th:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function by(s){switch(s){case yi:case Z_:return{byteLength:1,components:1};case Wo:case K_:case Ra:return{byteLength:2,components:1};case Oh:case Ph:return{byteLength:2,components:4};case Qi:case Lh:case Yi:return{byteLength:4,components:1};case Q_:case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _v(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function Ty(s){const e=new WeakMap;function i(p,m){const h=p.array,S=p.usage,v=h.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,h,S),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,m,h){const S=m.array,v=m.updateRanges;if(s.bindBuffer(h,p),v.length===0)s.bufferSubData(h,0,S);else{v.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<v.length;M++){const b=v[g],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,v[g]=C)}v.length=g+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];s.bufferSubData(h,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(s.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var Ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ny=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,By=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nE="gl_FragColor = linearToOutputTexel( gl_FragColor );",iE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_E=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ME=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,db=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:Ay,alphahash_pars_fragment:Ry,alphamap_fragment:Cy,alphamap_pars_fragment:wy,alphatest_fragment:Dy,alphatest_pars_fragment:Uy,aomap_fragment:Ny,aomap_pars_fragment:Ly,batching_pars_vertex:Oy,batching_vertex:Py,begin_vertex:Iy,beginnormal_vertex:zy,bsdfs:Fy,iridescence_fragment:By,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Gy,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:ky,clipping_planes_vertex:Xy,color_fragment:Wy,color_pars_fragment:qy,color_pars_vertex:Yy,color_vertex:jy,common:Zy,cube_uv_reflection_fragment:Ky,defaultnormal_vertex:Qy,displacementmap_pars_vertex:Jy,displacementmap_vertex:$y,emissivemap_fragment:tE,emissivemap_pars_fragment:eE,colorspace_fragment:nE,colorspace_pars_fragment:iE,envmap_fragment:aE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:vE,envmap_vertex:lE,fog_vertex:cE,fog_pars_vertex:uE,fog_fragment:fE,fog_pars_fragment:dE,gradientmap_pars_fragment:hE,lightmap_pars_fragment:pE,lights_lambert_fragment:mE,lights_lambert_pars_fragment:gE,lights_pars_begin:_E,lights_toon_fragment:xE,lights_toon_pars_fragment:SE,lights_phong_fragment:ME,lights_phong_pars_fragment:yE,lights_physical_fragment:EE,lights_physical_pars_fragment:bE,lights_fragment_begin:TE,lights_fragment_maps:AE,lights_fragment_end:RE,lightprobes_pars_fragment:CE,logdepthbuf_fragment:wE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:NE,map_fragment:LE,map_pars_fragment:OE,map_particle_fragment:PE,map_particle_pars_fragment:IE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:FE,morphinstance_vertex:BE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:kE,normal_fragment_begin:XE,normal_fragment_maps:WE,normal_pars_fragment:qE,normal_pars_vertex:YE,normal_vertex:jE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:tb,packing:eb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:ab,dithering_pars_fragment:rb,roughnessmap_fragment:sb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:ub,shadowmask_pars_fragment:fb,skinbase_vertex:db,skinning_pars_vertex:hb,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:_b,tonemapping_fragment:vb,tonemapping_pars_fragment:xb,transmission_fragment:Sb,transmission_pars_fragment:Mb,uv_pars_fragment:yb,uv_pars_vertex:Eb,uv_vertex:bb,worldpos_vertex:Tb,background_vert:Ab,background_frag:Rb,backgroundCube_vert:Cb,backgroundCube_frag:wb,cube_vert:Db,cube_frag:Ub,depth_vert:Nb,depth_frag:Lb,distance_vert:Ob,distance_frag:Pb,equirect_vert:Ib,equirect_frag:zb,linedashed_vert:Fb,linedashed_frag:Bb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Vb,meshlambert_frag:kb,meshmatcap_vert:Xb,meshmatcap_frag:Wb,meshnormal_vert:qb,meshnormal_frag:Yb,meshphong_vert:jb,meshphong_frag:Zb,meshphysical_vert:Kb,meshphysical_frag:Qb,meshtoon_vert:Jb,meshtoon_frag:$b,points_vert:t1,points_frag:e1,shadow_vert:n1,shadow_frag:i1,sprite_vert:a1,sprite_frag:r1},Vt={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new rt},probesMax:{value:new rt},probesResolution:{value:new rt}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},qi={basic:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Xn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Xn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Xe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Xn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Xn([Vt.points,Vt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Xn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Xn([Vt.common,Vt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Xn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Xn([Vt.sprite,Vt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Xn([Vt.common,Vt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Xn([Vt.lights,Vt.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};qi.physical={uniforms:Xn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const wc={r:0,b:0,g:0},s1=new Sn,vv=new ce;vv.set(-1,0,0,0,1,0,0,0,1);function o1(s,e,i,r,l,u){const d=new Xe(0);let p=l===!0?0:1,m,h,S=null,v=0,g=null;function M(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const O=D.backgroundBlurriness>0;U=e.get(U,O)}return U}function b(D){let U=!1;const O=M(D);O===null?y(d,p):O&&O.isColor&&(y(O,1),U=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(D,U){const O=M(U);O&&(O.isCubeTexture||O.mapping===Xc)?(h===void 0&&(h=new wa(new Ko(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:ks(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=O,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s1.makeRotationFromEuler(U.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(vv),h.material.toneMapped=Te.getTransfer(O.colorSpace)!==ke,(S!==O||v!==O.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,S=O,v=O.version,g=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new wa(new qc(2,2),new Ji({name:"BackgroundMaterial",uniforms:ks(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Te.getTransfer(O.colorSpace)!==ke,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(S!==O||v!==O.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,S=O,v=O.version,g=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,U){D.getRGB(wc,pv(s)),i.buffers.color.setClear(wc.r,wc.g,wc.b,U,u)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,U=1){d.set(D),p=U,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(d,p)},render:b,addToRenderList:C,dispose:x}}function l1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let u=l,d=!1;function p(H,Q,ut,mt,X){let L=!1;const z=v(H,mt,ut,Q);u!==z&&(u=z,h(u.object)),L=M(H,mt,ut,X),L&&b(H,mt,ut,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(L||d)&&(d=!1,O(H,Q,ut,mt),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return s.createVertexArray()}function h(H){return s.bindVertexArray(H)}function S(H){return s.deleteVertexArray(H)}function v(H,Q,ut,mt){const X=mt.wireframe===!0;let L=r[Q.id];L===void 0&&(L={},r[Q.id]=L);const z=H.isInstancedMesh===!0?H.id:0;let st=L[z];st===void 0&&(st={},L[z]=st);let dt=st[ut.id];dt===void 0&&(dt={},st[ut.id]=dt);let Mt=dt[X];return Mt===void 0&&(Mt=g(m()),dt[X]=Mt),Mt}function g(H){const Q=[],ut=[],mt=[];for(let X=0;X<i;X++)Q[X]=0,ut[X]=0,mt[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ut,attributeDivisors:mt,object:H,attributes:{},index:null}}function M(H,Q,ut,mt){const X=u.attributes,L=Q.attributes;let z=0;const st=ut.getAttributes();for(const dt in st)if(st[dt].location>=0){const N=X[dt];let K=L[dt];if(K===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;z++}return u.attributesNum!==z||u.index!==mt}function b(H,Q,ut,mt){const X={},L=Q.attributes;let z=0;const st=ut.getAttributes();for(const dt in st)if(st[dt].location>=0){let N=L[dt];N===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(N=H.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),X[dt]=K,z++}u.attributes=X,u.attributesNum=z,u.index=mt}function C(){const H=u.newAttributes;for(let Q=0,ut=H.length;Q<ut;Q++)H[Q]=0}function y(H){x(H,0)}function x(H,Q){const ut=u.newAttributes,mt=u.enabledAttributes,X=u.attributeDivisors;ut[H]=1,mt[H]===0&&(s.enableVertexAttribArray(H),mt[H]=1),X[H]!==Q&&(s.vertexAttribDivisor(H,Q),X[H]=Q)}function D(){const H=u.newAttributes,Q=u.enabledAttributes;for(let ut=0,mt=Q.length;ut<mt;ut++)Q[ut]!==H[ut]&&(s.disableVertexAttribArray(ut),Q[ut]=0)}function U(H,Q,ut,mt,X,L,z){z===!0?s.vertexAttribIPointer(H,Q,ut,X,L):s.vertexAttribPointer(H,Q,ut,mt,X,L)}function O(H,Q,ut,mt){C();const X=mt.attributes,L=ut.getAttributes(),z=Q.defaultAttributeValues;for(const st in L){const dt=L[st];if(dt.location>=0){let Mt=X[st];if(Mt===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(Mt=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(Mt=H.instanceColor)),Mt!==void 0){const N=Mt.normalized,K=Mt.itemSize,gt=e.get(Mt);if(gt===void 0)continue;const At=gt.buffer,Tt=gt.type,tt=gt.bytesPerElement,Et=Tt===s.INT||Tt===s.UNSIGNED_INT||Mt.gpuType===Lh;if(Mt.isInterleavedBufferAttribute){const Rt=Mt.data,Ft=Rt.stride,te=Mt.offset;if(Rt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<dt.locationSize;Qt++)x(dt.location+Qt,Rt.meshPerAttribute);H.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let Qt=0;Qt<dt.locationSize;Qt++)y(dt.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Qt=0;Qt<dt.locationSize;Qt++)U(dt.location+Qt,K/dt.locationSize,Tt,N,Ft*tt,(te+K/dt.locationSize*Qt)*tt,Et)}else{if(Mt.isInstancedBufferAttribute){for(let Rt=0;Rt<dt.locationSize;Rt++)x(dt.location+Rt,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&mt._maxInstanceCount===void 0&&(mt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Rt=0;Rt<dt.locationSize;Rt++)y(dt.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Rt=0;Rt<dt.locationSize;Rt++)U(dt.location+Rt,K/dt.locationSize,Tt,N,K*tt,K/dt.locationSize*Rt*tt,Et)}}else if(z!==void 0){const N=z[st];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(dt.location,N);break;case 3:s.vertexAttrib3fv(dt.location,N);break;case 4:s.vertexAttrib4fv(dt.location,N);break;default:s.vertexAttrib1fv(dt.location,N)}}}}D()}function V(){I();for(const H in r){const Q=r[H];for(const ut in Q){const mt=Q[ut];for(const X in mt){const L=mt[X];for(const z in L)S(L[z].object),delete L[z];delete mt[X]}}delete r[H]}}function P(H){if(r[H.id]===void 0)return;const Q=r[H.id];for(const ut in Q){const mt=Q[ut];for(const X in mt){const L=mt[X];for(const z in L)S(L[z].object),delete L[z];delete mt[X]}}delete r[H.id]}function F(H){for(const Q in r){const ut=r[Q];for(const mt in ut){const X=ut[mt];if(X[H.id]===void 0)continue;const L=X[H.id];for(const z in L)S(L[z].object),delete L[z];delete X[H.id]}}}function T(H){for(const Q in r){const ut=r[Q],mt=H.isInstancedMesh===!0?H.id:0,X=ut[mt];if(X!==void 0){for(const L in X){const z=X[L];for(const st in z)S(z[st].object),delete z[st];delete X[L]}delete ut[mt],Object.keys(ut).length===0&&delete r[Q]}}}function I(){Z(),d=!0,u!==l&&(u=l,h(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:I,resetDefaultState:Z,dispose:V,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function c1(s,e,i){let r;function l(m){r=m}function u(m,h){s.drawArrays(r,m,h),i.update(h,r,1)}function d(m,h,S){S!==0&&(s.drawArraysInstanced(r,m,h,S),i.update(h,r,S))}function p(m,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,S);let g=0;for(let M=0;M<S;M++)g+=h[M];i.update(g,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function u1(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Li&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==yi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Yi&&!T)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(se("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:O,maxSamples:V,samples:P}}function f1(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ir,p=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||r!==0||l;return l=g,r=v.length,M},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,g){i=S(v,g,0)},this.setState=function(v,g,M){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!l||b===null||b.length===0||u&&!y)u?S(null):h();else{const D=u?0:r,U=D*4;let O=x.clippingState||null;m.value=O,O=S(b,g,U,M);for(let V=0;V!==U;++V)O[V]=i[V];x.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(v,g,M,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,b!==!0||y===null){const x=M+C*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let U=0,O=M;U!==C;++U,O+=4)d.copy(v[U]).applyMatrix4(D,p),d.normal.toArray(y,O),y[O+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const dr=4,p_=[.125,.215,.35,.446,.526,.582],Fr=20,d1=256,Go=new gv,m_=new Xe;let Nd=null,Ld=0,Od=0,Pd=!1;const h1=new rt;class g_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:p=h1}=u;Nd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Ld,Od),this._renderer.xr.enabled=Pd,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gr||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ra,format:Li,colorSpace:Bc,depthBuffer:!1},l=__(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=p1(u)),this._blurMaterial=g1(u,e,i),this._ggxMaterial=m1(u,e,i)}return l}_compileMaterial(e){const i=new wa(new Pi,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,r,l,u){const m=new Mi(90,1,i,r),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(m_),v.toneMapping=Zi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wa(new Ko,new cv({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,x=!0):(y.color.copy(m_),x=!0);for(let U=0;U<6;U++){const O=U%3;O===0?(m.up.set(0,h[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[U],u.y,u.z)):O===1?(m.up.set(0,0,h[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[U],u.z)):(m.up.set(0,h[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[U]));const V=this._cubeSize;zs(l,O*V,U>2?V:0,V,V),v.setRenderTarget(l),x&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Gr||e.mapping===Gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=x_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;zs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-S*S),g=0+h*1.25,M=v*g,{_lodMax:b}=this,C=this._sizeLods[r],y=3*C*(r>b-dr?r-b+dr:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,zs(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(p,Go),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,zs(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(p,Go)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const S=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Fr-1),C=u/b,y=isFinite(u)?1+Math.floor(S*C):Fr;y>Fr&&se(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Fr}`);const x=[];let D=0;for(let F=0;F<Fr;++F){const T=F/C,I=Math.exp(-T*T/2);x.push(I),F===0?D+=I:F<y&&(D+=2*I)}for(let F=0;F<x.length;F++)x[F]=x[F]/D;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:U}=this;g.dTheta.value=b,g.mipInt.value=U-r;const O=this._sizeLods[l],V=3*O*(l>U-dr?l-U+dr:0),P=4*(this._cubeSize-O);zs(i,V,P,3*O,2*O),m.setRenderTarget(i),m.render(v,Go)}}function p1(s){const e=[],i=[],r=[];let l=s;const u=s-dr+1+p_.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>s-dr?m=p_[d-s+dr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,v=1+h,g=[S,S,v,S,v,v,S,S,v,v,S,v],M=6,b=6,C=3,y=2,x=1,D=new Float32Array(C*b*M),U=new Float32Array(y*b*M),O=new Float32Array(x*b*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,T=P>2?0:-1,I=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];D.set(I,C*b*P),U.set(g,y*b*P);const Z=[P,P,P,P,P,P];O.set(Z,x*b*P)}const V=new Pi;V.setAttribute("position",new Oi(D,C)),V.setAttribute("uv",new Oi(U,y)),V.setAttribute("faceIndex",new Oi(O,x)),r.push(new wa(V,null)),l>dr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function __(s,e,i){const r=new Ki(s,e,i);return r.texture.mapping=Xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function m1(s,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:d1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function g1(s,e,i){const r=new Float32Array(Fr),l=new rt(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function v_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function x_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function Yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xv extends Ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),u=new Ji({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:ba});u.uniforms.tEquirect.value=i;const d=new wa(l,u),p=i.minFilter;return i.minFilter===Br&&(i.minFilter=Hn),new yy(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function _1(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,M=!1){return g==null?null:M?d(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===rd||M===sd)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new xv(b.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===rd||M===sd,C=M===Gr||M===Gs;if(b||C){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new g_(s)),y=b?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const D=g.image;return b&&D&&D.height>0||C&&D&&m(D)?(r===null&&(r=new g_(s)),y=b?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",S),y.texture):null}}}return g}function p(g,M){return M===rd?g.mapping=Gr:M===sd&&(g.mapping=Gs),g}function m(g){let M=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function S(g){const M=g.target;M.removeEventListener("dispose",S);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function v1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ah("WebGLRenderer: "+r+" extension not supported."),l}}}function x1(s,e,i,r){const l={},u=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=u.get(g);M&&(e.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function h(v){const g=[],M=v.index,b=v.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const D=M.array;C=M.version;for(let U=0,O=D.length;U<O;U+=3){const V=D[U+0],P=D[U+1],F=D[U+2];g.push(V,P,P,F,F,V)}}else{const D=b.array;C=b.version;for(let U=0,O=D.length/3-1;U<O;U+=3){const V=U+0,P=U+1,F=U+2;g.push(V,P,P,F,F,V)}}const y=new(b.count>=65535?ov:sv)(g,1);y.version=C;const x=u.get(v);x&&e.remove(x),u.set(v,y)}function S(v){const g=u.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&h(v)}else h(v);return u.get(v)}return{get:p,update:m,getWireframeAttribute:S}}function S1(s,e,i){let r;function l(v){r=v}let u,d;function p(v){u=v.type,d=v.bytesPerElement}function m(v,g){s.drawElements(r,g,u,v*d),i.update(g,r,1)}function h(v,g,M){M!==0&&(s.drawElementsInstanced(r,g,u,v*d,M),i.update(g,r,M))}function S(v,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,v,0,M);let C=0;for(let y=0;y<M;y++)C+=g[y];i.update(C,r,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function M1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,p){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=p*(u/3);break;case s.LINES:i.lines+=p*(u/2);break;case s.LINE_STRIP:i.lines+=p*(u-1);break;case s.LINE_LOOP:i.lines+=p*u;break;case s.POINTS:i.points+=p*u;break;default:De("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function y1(s,e,i){const r=new WeakMap,l=new fn;function u(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=S!==void 0?S.length:0;let g=r.get(p);if(g===void 0||g.count!==v){let Z=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",Z)};var M=Z;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let O=0;b===!0&&(O=1),C===!0&&(O=2),y===!0&&(O=3);let V=p.attributes.position.count*O,P=1;V>e.maxTextureSize&&(P=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*P*4*v),T=new iv(F,V,P,v);T.type=Yi,T.needsUpdate=!0;const I=O*4;for(let H=0;H<v;H++){const Q=x[H],ut=D[H],mt=U[H],X=V*P*4*H;for(let L=0;L<Q.count;L++){const z=L*I;b===!0&&(l.fromBufferAttribute(Q,L),F[X+z+0]=l.x,F[X+z+1]=l.y,F[X+z+2]=l.z,F[X+z+3]=0),C===!0&&(l.fromBufferAttribute(ut,L),F[X+z+4]=l.x,F[X+z+5]=l.y,F[X+z+6]=l.z,F[X+z+7]=0),y===!0&&(l.fromBufferAttribute(mt,L),F[X+z+8]=l.x,F[X+z+9]=l.y,F[X+z+10]=l.z,F[X+z+11]=mt.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new je(V,P)},r.set(p,g),p.addEventListener("dispose",Z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function E1(s,e,i,r,l){let u=new WeakMap;function d(h){const S=l.render.frame,v=h.geometry,g=e.get(h,v);if(u.get(g)!==S&&(e.update(g),u.set(g,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==S&&(i.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,s.ARRAY_BUFFER),u.set(h,S))),h.isSkinnedMesh){const M=h.skeleton;u.get(M)!==S&&(M.update(),u.set(M,S))}return g}function p(){u=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const b1={[G_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[k_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[q_]:"AGX_TONE_MAPPING",[Y_]:"NEUTRAL_TONE_MAPPING",[W_]:"CUSTOM_TONE_MAPPING"};function T1(s,e,i,r,l){const u=new Ki(e,i,{type:s,depthBuffer:r,stencilBuffer:l,depthTexture:r?new Vs(e,i):void 0}),d=new Ki(e,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),p=new Pi;p.setAttribute("position",new Aa([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Aa([0,2,0,0,2,0],2));const m=new xy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new wa(p,m),S=new gv(-1,1,1,-1,0,1);let v=null,g=null,M=!1,b,C=null,y=[],x=!1;this.setSize=function(D,U){u.setSize(D,U),d.setSize(D,U);for(let O=0;O<y.length;O++){const V=y[O];V.setSize&&V.setSize(D,U)}},this.setEffects=function(D){y=D,x=y.length>0&&y[0].isRenderPass===!0;const U=u.width,O=u.height;for(let V=0;V<y.length;V++){const P=y[V];P.setSize&&P.setSize(U,O)}},this.begin=function(D,U){if(M||D.toneMapping===Zi&&y.length===0)return!1;if(C=U,U!==null){const O=U.width,V=U.height;(u.width!==O||u.height!==V)&&this.setSize(O,V)}return x===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=Zi,!0},this.hasRenderPass=function(){return x},this.end=function(D,U){D.toneMapping=b,M=!0;let O=u,V=d;for(let P=0;P<y.length;P++){const F=y[P];if(F.enabled!==!1&&(F.render(D,V,O,U),F.needsSwap!==!1)){const T=O;O=V,V=T}}if(v!==D.outputColorSpace||g!==D.toneMapping){v=D.outputColorSpace,g=D.toneMapping,m.defines={},Te.getTransfer(v)===ke&&(m.defines.SRGB_TRANSFER="");const P=b1[g];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,D.setRenderTarget(C),D.render(h,S),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Sv=new Gn,wh=new Vs(1,1),Mv=new iv,yv=new jM,Ev=new dv,S_=[],M_=[],y_=new Float32Array(16),E_=new Float32Array(9),b_=new Float32Array(4);function Ws(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=S_[l];if(u===void 0&&(u=new Float32Array(l),S_[l]=u),e!==0){r.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,s[d].toArray(u,p)}return u}function En(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function bn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function jc(s,e){let i=M_[e];i===void 0&&(i=new Int32Array(e),M_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function A1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function R1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;s.uniform2fv(this.addr,e),bn(i,e)}}function C1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;s.uniform3fv(this.addr,e),bn(i,e)}}function w1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;s.uniform4fv(this.addr,e),bn(i,e)}}function D1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(En(i,r))return;b_.set(r),s.uniformMatrix2fv(this.addr,!1,b_),bn(i,r)}}function U1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(En(i,r))return;E_.set(r),s.uniformMatrix3fv(this.addr,!1,E_),bn(i,r)}}function N1(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(En(i,r))return;y_.set(r),s.uniformMatrix4fv(this.addr,!1,y_),bn(i,r)}}function L1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function O1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;s.uniform2iv(this.addr,e),bn(i,e)}}function P1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;s.uniform3iv(this.addr,e),bn(i,e)}}function I1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;s.uniform4iv(this.addr,e),bn(i,e)}}function z1(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function F1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;s.uniform2uiv(this.addr,e),bn(i,e)}}function B1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;s.uniform3uiv(this.addr,e),bn(i,e)}}function H1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;s.uniform4uiv(this.addr,e),bn(i,e)}}function G1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(wh.compareFunction=i.isReversedDepthBuffer()?Hh:Bh,u=wh):u=Sv,i.setTexture2D(e||u,l)}function V1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||yv,l)}function k1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Ev,l)}function X1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Mv,l)}function W1(s){switch(s){case 5126:return A1;case 35664:return R1;case 35665:return C1;case 35666:return w1;case 35674:return D1;case 35675:return U1;case 35676:return N1;case 5124:case 35670:return L1;case 35667:case 35671:return O1;case 35668:case 35672:return P1;case 35669:case 35673:return I1;case 5125:return z1;case 36294:return F1;case 36295:return B1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return X1}}function q1(s,e){s.uniform1fv(this.addr,e)}function Y1(s,e){const i=Ws(e,this.size,2);s.uniform2fv(this.addr,i)}function j1(s,e){const i=Ws(e,this.size,3);s.uniform3fv(this.addr,i)}function Z1(s,e){const i=Ws(e,this.size,4);s.uniform4fv(this.addr,i)}function K1(s,e){const i=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Q1(s,e){const i=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function J1(s,e){const i=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function $1(s,e){s.uniform1iv(this.addr,e)}function tT(s,e){s.uniform2iv(this.addr,e)}function eT(s,e){s.uniform3iv(this.addr,e)}function nT(s,e){s.uniform4iv(this.addr,e)}function iT(s,e){s.uniform1uiv(this.addr,e)}function aT(s,e){s.uniform2uiv(this.addr,e)}function rT(s,e){s.uniform3uiv(this.addr,e)}function sT(s,e){s.uniform4uiv(this.addr,e)}function oT(s,e,i){const r=this.cache,l=e.length,u=jc(i,l);En(r,u)||(s.uniform1iv(this.addr,u),bn(r,u));let d;this.type===s.SAMPLER_2D_SHADOW?d=wh:d=Sv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function lT(s,e,i){const r=this.cache,l=e.length,u=jc(i,l);En(r,u)||(s.uniform1iv(this.addr,u),bn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||yv,u[d])}function cT(s,e,i){const r=this.cache,l=e.length,u=jc(i,l);En(r,u)||(s.uniform1iv(this.addr,u),bn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Ev,u[d])}function uT(s,e,i){const r=this.cache,l=e.length,u=jc(i,l);En(r,u)||(s.uniform1iv(this.addr,u),bn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Mv,u[d])}function fT(s){switch(s){case 5126:return q1;case 35664:return Y1;case 35665:return j1;case 35666:return Z1;case 35674:return K1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return $1;case 35667:case 35671:return tT;case 35668:case 35672:return eT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return aT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}class dT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=W1(i.type)}}class hT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fT(i.type)}}class pT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],r)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function T_(s,e){s.seq.push(e),s.map[e.id]=e}function mT(s,e,i){const r=s.name,l=r.length;for(Id.lastIndex=0;;){const u=Id.exec(r),d=Id.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){T_(i,h===void 0?new dT(p,s,e):new hT(p,s,e));break}else{let v=i.map[p];v===void 0&&(v=new pT(p),T_(i,v)),i=v}}}class Ic{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);mT(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function A_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const gT=37297;let _T=0;function vT(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const R_=new ce;function xT(s){Te._getMatrix(R_,Te.workingColorSpace,s);const e=`mat3( ${R_.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(s)){case Hc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function C_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+vT(s.getShaderSource(e),p)}else return u}function ST(s,e){const i=xT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const MT={[G_]:"Linear",[V_]:"Reinhard",[k_]:"Cineon",[X_]:"ACESFilmic",[q_]:"AgX",[Y_]:"Neutral",[W_]:"Custom"};function yT(s,e){const i=MT[e];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new rt;function ET(){Te.getLuminanceCoefficients(Dc);const s=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function TT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function AT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let p=1;u.type===s.FLOAT_MAT2&&(p=2),u.type===s.FLOAT_MAT3&&(p=3),u.type===s.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:p}}return i}function Xo(s){return s!==""}function w_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(s){return s.replace(RT,wT)}const CT=new Map;function wT(s,e){let i=_e[e];if(i===void 0){const r=CT.get(e);if(r!==void 0)i=_e[r],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Dh(i)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U_(s){return s.replace(DT,UT)}function UT(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function N_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const NT={[Uc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function LT(s){return NT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OT={[Gr]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function PT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":OT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const IT={[Gs]:"ENVMAP_MODE_REFRACTION"};function zT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":IT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FT={[H_]:"ENVMAP_BLENDING_MULTIPLY",[RM]:"ENVMAP_BLENDING_MIX",[CM]:"ENVMAP_BLENDING_ADD"};function BT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":FT[s.combine]||"ENVMAP_BLENDING_NONE"}function HT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function GT(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=LT(i),h=PT(i),S=zT(i),v=BT(i),g=HT(i),M=bT(i),b=TT(u),C=l.createProgram();let y,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(y=[N_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[N_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?_e.tonemapping_pars_fragment:"",i.toneMapping!==Zi?yT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,ST("linearToOutputTexel",i.outputColorSpace),ET(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Dh(d),d=w_(d,i),d=D_(d,i),p=Dh(p),p=w_(p,i),p=D_(p,i),d=U_(d),p=U_(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=D+y+d,O=D+x+p,V=A_(l,l.VERTEX_SHADER,U),P=A_(l,l.FRAGMENT_SHADER,O);l.attachShader(C,V),l.attachShader(C,P),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(H){if(s.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",ut=l.getShaderInfoLog(V)||"",mt=l.getShaderInfoLog(P)||"",X=Q.trim(),L=ut.trim(),z=mt.trim();let st=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,V,P);else{const Mt=C_(l,V,"vertex"),N=C_(l,P,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+Mt+`
`+N)}else X!==""?se("WebGLProgram: Program Info Log:",X):(L===""||z==="")&&(dt=!1);dt&&(H.diagnostics={runnable:st,programLog:X,vertexShader:{log:L,prefix:y},fragmentShader:{log:z,prefix:x}})}l.deleteShader(V),l.deleteShader(P),T=new Ic(l,C),I=AT(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let Z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=l.getProgramParameter(C,gT)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_T++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=P,this}let VT=0;class kT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new XT(e),i.set(e,r)),r}}class XT{constructor(e){this.id=VT++,this.code=e,this.usedTimes=0}}function WT(s){return s===Vr||s===zc||s===Fc}function qT(s,e,i,r,l,u){const d=new av,p=new kT,m=new Set,h=[],S=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,I,Z,H,Q,ut){const mt=H.fog,X=Q.geometry,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,st=e.get(T.envMap||L,z),dt=st&&st.mapping===Xc?st.image.height:null,Mt=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&se("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,K=N!==void 0?N.length:0;let gt=0;X.morphAttributes.position!==void 0&&(gt=1),X.morphAttributes.normal!==void 0&&(gt=2),X.morphAttributes.color!==void 0&&(gt=3);let At,Tt,tt,Et;if(Mt){const ie=qi[Mt];At=ie.vertexShader,Tt=ie.fragmentShader}else At=T.vertexShader,Tt=T.fragmentShader,p.update(T),tt=p.getVertexShaderID(T),Et=p.getFragmentShaderID(T);const Rt=s.getRenderTarget(),Ft=s.state.buffers.depth.getReversed(),te=Q.isInstancedMesh===!0,Qt=Q.isBatchedMesh===!0,Pe=!!T.map,ue=!!T.matcap,pe=!!st,Re=!!T.aoMap,oe=!!T.lightMap,Qe=!!T.bumpMap,Ie=!!T.normalMap,dn=!!T.displacementMap,W=!!T.emissiveMap,Je=!!T.metalnessMap,bt=!!T.roughnessMap,Ht=T.anisotropy>0,St=T.clearcoat>0,me=T.dispersion>0,w=T.iridescence>0,E=T.sheen>0,Y=T.transmission>0,ft=Ht&&!!T.anisotropyMap,yt=St&&!!T.clearcoatMap,Dt=St&&!!T.clearcoatNormalMap,Nt=St&&!!T.clearcoatRoughnessMap,ot=w&&!!T.iridescenceMap,ct=w&&!!T.iridescenceThicknessMap,Pt=E&&!!T.sheenColorMap,It=E&&!!T.sheenRoughnessMap,Lt=!!T.specularMap,Ut=!!T.specularColorMap,re=!!T.specularIntensityMap,ne=Y&&!!T.transmissionMap,fe=Y&&!!T.thicknessMap,G=!!T.gradientMap,Ct=!!T.alphaMap,ht=T.alphaTest>0,Bt=!!T.alphaHash,Ot=!!T.extensions;let vt=Zi;T.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(vt=s.toneMapping);const qt={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:At,fragmentShader:Tt,defines:T.defines,customVertexShaderID:tt,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&Q._colorsTexture!==null,instancing:te,instancingColor:te&&Q.instanceColor!==null,instancingMorph:te&&Q.morphTexture!==null,outputColorSpace:Rt===null?s.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Pe,matcap:ue,envMap:pe,envMapMode:pe&&st.mapping,envMapCubeUVHeight:dt,aoMap:Re,lightMap:oe,bumpMap:Qe,normalMap:Ie,displacementMap:dn,emissiveMap:W,normalMapObjectSpace:Ie&&T.normalMapType===UM,normalMapTangentSpace:Ie&&T.normalMapType===Gg,packedNormalMap:Ie&&T.normalMapType===Gg&&WT(T.normalMap.format),metalnessMap:Je,roughnessMap:bt,anisotropy:Ht,anisotropyMap:ft,clearcoat:St,clearcoatMap:yt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Nt,dispersion:me,iridescence:w,iridescenceMap:ot,iridescenceThicknessMap:ct,sheen:E,sheenColorMap:Pt,sheenRoughnessMap:It,specularMap:Lt,specularColorMap:Ut,specularIntensityMap:re,transmission:Y,transmissionMap:ne,thicknessMap:fe,gradientMap:G,opaque:T.transparent===!1&&T.blending===Fs&&T.alphaToCoverage===!1,alphaMap:Ct,alphaTest:ht,alphaHash:Bt,combine:T.combine,mapUv:Pe&&b(T.map.channel),aoMapUv:Re&&b(T.aoMap.channel),lightMapUv:oe&&b(T.lightMap.channel),bumpMapUv:Qe&&b(T.bumpMap.channel),normalMapUv:Ie&&b(T.normalMap.channel),displacementMapUv:dn&&b(T.displacementMap.channel),emissiveMapUv:W&&b(T.emissiveMap.channel),metalnessMapUv:Je&&b(T.metalnessMap.channel),roughnessMapUv:bt&&b(T.roughnessMap.channel),anisotropyMapUv:ft&&b(T.anisotropyMap.channel),clearcoatMapUv:yt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(T.sheenRoughnessMap.channel),specularMapUv:Lt&&b(T.specularMap.channel),specularColorMapUv:Ut&&b(T.specularColorMap.channel),specularIntensityMapUv:re&&b(T.specularIntensityMap.channel),transmissionMapUv:ne&&b(T.transmissionMap.channel),thicknessMapUv:fe&&b(T.thicknessMap.channel),alphaMapUv:Ct&&b(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ie||Ht),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!X.attributes.uv&&(Pe||Ct),fog:!!mt,useFog:T.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&Ie===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ft,skinning:Q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:gt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:vt,decodeVideoTexture:Pe&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===ke,decodeVideoTextureEmissive:W&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===ke,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ya,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function y(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)I.push(Z),I.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(x(I,T),D(I,T),I.push(s.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function x(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function D(T,I){d.disableAll(),I.instancing&&d.enable(0),I.instancingColor&&d.enable(1),I.instancingMorph&&d.enable(2),I.matcap&&d.enable(3),I.envMap&&d.enable(4),I.normalMapObjectSpace&&d.enable(5),I.normalMapTangentSpace&&d.enable(6),I.clearcoat&&d.enable(7),I.iridescence&&d.enable(8),I.alphaTest&&d.enable(9),I.vertexColors&&d.enable(10),I.vertexAlphas&&d.enable(11),I.vertexUv1s&&d.enable(12),I.vertexUv2s&&d.enable(13),I.vertexUv3s&&d.enable(14),I.vertexTangents&&d.enable(15),I.anisotropy&&d.enable(16),I.alphaHash&&d.enable(17),I.batching&&d.enable(18),I.dispersion&&d.enable(19),I.batchingColor&&d.enable(20),I.gradientMap&&d.enable(21),I.packedNormalMap&&d.enable(22),I.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),I.fog&&d.enable(0),I.useFog&&d.enable(1),I.flatShading&&d.enable(2),I.logarithmicDepthBuffer&&d.enable(3),I.reversedDepthBuffer&&d.enable(4),I.skinning&&d.enable(5),I.morphTargets&&d.enable(6),I.morphNormals&&d.enable(7),I.morphColors&&d.enable(8),I.premultipliedAlpha&&d.enable(9),I.shadowMapEnabled&&d.enable(10),I.doubleSided&&d.enable(11),I.flipSided&&d.enable(12),I.useDepthPacking&&d.enable(13),I.dithering&&d.enable(14),I.transmission&&d.enable(15),I.sheen&&d.enable(16),I.opaque&&d.enable(17),I.pointsUvs&&d.enable(18),I.decodeVideoTexture&&d.enable(19),I.decodeVideoTextureEmissive&&d.enable(20),I.alphaToCoverage&&d.enable(21),I.numLightProbeGrids>0&&d.enable(22),T.push(d.mask)}function U(T){const I=M[T.type];let Z;if(I){const H=qi[I];Z=gy.clone(H.uniforms)}else Z=T.uniforms;return Z}function O(T,I){let Z=S.get(I);return Z!==void 0?++Z.usedTimes:(Z=new GT(s,I,T,l),h.push(Z),S.set(I,Z)),Z}function V(T){if(--T.usedTimes===0){const I=h.indexOf(T);h[I]=h[h.length-1],h.pop(),S.delete(T.cacheKey),T.destroy()}}function P(T){p.remove(T)}function F(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:U,acquireProgram:O,releaseProgram:V,releaseShaderCache:P,programs:h,dispose:F}}function YT(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function l(d,p,m){s.get(d)[p]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function jT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function L_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function O_(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,C,y,x){let D=s[e];return D===void 0?(D={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:x},s[e]=D):(D.id=g.id,D.object=g,D.geometry=M,D.material=b,D.materialVariant=d(g),D.groupOrder=C,D.renderOrder=g.renderOrder,D.z=y,D.group=x),e++,D}function m(g,M,b,C,y,x){const D=p(g,M,b,C,y,x);b.transmission>0?r.push(D):b.transparent===!0?l.push(D):i.push(D)}function h(g,M,b,C,y,x){const D=p(g,M,b,C,y,x);b.transmission>0?r.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function S(g,M){i.length>1&&i.sort(g||jT),r.length>1&&r.sort(M||L_),l.length>1&&l.sort(M||L_)}function v(){for(let g=e,M=s.length;g<M;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:h,finish:v,sort:S}}function ZT(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new O_,s.set(r,[d])):l>=u.length?(d=new O_,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function KT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Xe};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":i={color:new Xe,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[e.id]=i,i}}}function QT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let JT=0;function $T(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tA(s){const e=new KT,i=QT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new rt);const l=new rt,u=new Sn,d=new Sn;function p(h){let S=0,v=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let M=0,b=0,C=0,y=0,x=0,D=0,U=0,O=0,V=0,P=0,F=0;h.sort($T);for(let I=0,Z=h.length;I<Z;I++){const H=h[I],Q=H.color,ut=H.intensity,mt=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Vr?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)S+=Q.r*ut,v+=Q.g*ut,g+=Q.b*ut;else if(H.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(H.sh.coefficients[L],ut);F++}else if(H.isDirectionalLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,st=i.get(H);st.shadowIntensity=z.intensity,st.shadowBias=z.bias,st.shadowNormalBias=z.normalBias,st.shadowRadius=z.radius,st.shadowMapSize=z.mapSize,r.directionalShadow[M]=st,r.directionalShadowMap[M]=X,r.directionalShadowMatrix[M]=H.shadow.matrix,D++}r.directional[M]=L,M++}else if(H.isSpotLight){const L=e.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(Q).multiplyScalar(ut),L.distance=mt,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,r.spot[C]=L;const z=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,z.updateMatrices(H),H.castShadow&&P++),r.spotLightMatrix[C]=z.matrix,H.castShadow){const st=i.get(H);st.shadowIntensity=z.intensity,st.shadowBias=z.bias,st.shadowNormalBias=z.normalBias,st.shadowRadius=z.radius,st.shadowMapSize=z.mapSize,r.spotShadow[C]=st,r.spotShadowMap[C]=X,O++}C++}else if(H.isRectAreaLight){const L=e.get(H);L.color.copy(Q).multiplyScalar(ut),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=L,y++}else if(H.isPointLight){const L=e.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const z=H.shadow,st=i.get(H);st.shadowIntensity=z.intensity,st.shadowBias=z.bias,st.shadowNormalBias=z.normalBias,st.shadowRadius=z.radius,st.shadowMapSize=z.mapSize,st.shadowCameraNear=z.camera.near,st.shadowCameraFar=z.camera.far,r.pointShadow[b]=st,r.pointShadowMap[b]=X,r.pointShadowMatrix[b]=H.shadow.matrix,U++}r.point[b]=L,b++}else if(H.isHemisphereLight){const L=e.get(H);L.skyColor.copy(H.color).multiplyScalar(ut),L.groundColor.copy(H.groundColor).multiplyScalar(ut),r.hemi[x]=L,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Vt.LTC_FLOAT_1,r.rectAreaLTC2=Vt.LTC_FLOAT_2):(r.rectAreaLTC1=Vt.LTC_HALF_1,r.rectAreaLTC2=Vt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==D||T.numPointShadows!==U||T.numSpotShadows!==O||T.numSpotMaps!==V||T.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=O+V-P,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=D,T.numPointShadows=U,T.numSpotShadows=O,T.numSpotMaps=V,T.numLightProbes=F,r.version=JT++)}function m(h,S){let v=0,g=0,M=0,b=0,C=0;const y=S.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const U=h[x];if(U.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),v++}else if(U.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const O=r.rectArea[b];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),d.identity(),u.copy(U.matrixWorld),u.premultiply(y),d.extractRotation(u),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const O=r.point[g];O.position.setFromMatrixPosition(U.matrixWorld),O.position.applyMatrix4(y),g++}else if(U.isHemisphereLight){const O=r.hemi[C];O.direction.setFromMatrixPosition(U.matrixWorld),O.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:r}}function P_(s){const e=new tA(s),i=[],r=[],l=[];function u(g){v.camera=g,i.length=0,r.length=0,l.length=0}function d(g){i.push(g)}function p(g){r.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function S(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function eA(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new P_(s),e.set(l,[p])):u>=d.length?(p=new P_(s),d.push(p)):p=d[u],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const nA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aA=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],rA=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],I_=new Sn,Vo=new rt,zd=new rt;function sA(s,e,i){let r=new uv;const l=new je,u=new je,d=new fn,p=new Sy,m=new My,h={},S=i.maxTextureSize,v={[hr]:Jn,[Jn]:hr,[ya]:ya},g=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:nA,fragmentShader:iA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Pi;b.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new wa(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let x=this.type;this.render=function(P,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===lM&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uc);const I=s.getRenderTarget(),Z=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ba),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ut=x!==this.type;ut&&F.traverse(function(mt){mt.material&&(Array.isArray(mt.material)?mt.material.forEach(X=>X.needsUpdate=!0):mt.material.needsUpdate=!0)});for(let mt=0,X=P.length;mt<X;mt++){const L=P[mt],z=L.shadow;if(z===void 0){se("WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const st=z.getFrameExtents();l.multiply(st),u.copy(z.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/st.x),l.x=u.x*st.x,z.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/st.y),l.y=u.y*st.y,z.mapSize.y=u.y));const dt=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=dt,z.map===null||ut===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ko){if(L.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ki(l.x,l.y,{format:Vr,type:Ra,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),z.map.texture.name=L.name+".shadowMap",z.map.depthTexture=new Vs(l.x,l.y,Yi),z.map.depthTexture.name=L.name+".shadowMapDepth",z.map.depthTexture.format=Ca,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nn,z.map.depthTexture.magFilter=Nn}else L.isPointLight?(z.map=new xv(l.x),z.map.depthTexture=new py(l.x,Qi)):(z.map=new Ki(l.x,l.y),z.map.depthTexture=new Vs(l.x,l.y,Qi)),z.map.depthTexture.name=L.name+".shadowMap",z.map.depthTexture.format=Ca,this.type===Uc?(z.map.depthTexture.compareFunction=dt?Hh:Bh,z.map.depthTexture.minFilter=Hn,z.map.depthTexture.magFilter=Hn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Nn,z.map.depthTexture.magFilter=Nn);z.camera.updateProjectionMatrix()}const Mt=z.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<Mt;N++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,N),s.clear();else{N===0&&(s.setRenderTarget(z.map),s.clear());const K=z.getViewport(N);d.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),Q.viewport(d)}if(L.isPointLight){const K=z.camera,gt=z.matrix,At=L.distance||K.far;At!==K.far&&(K.far=At,K.updateProjectionMatrix()),Vo.setFromMatrixPosition(L.matrixWorld),K.position.copy(Vo),zd.copy(K.position),zd.add(aA[N]),K.up.copy(rA[N]),K.lookAt(zd),K.updateMatrixWorld(),gt.makeTranslation(-Vo.x,-Vo.y,-Vo.z),I_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z._frustum.setFromProjectionMatrix(I_,K.coordinateSystem,K.reversedDepth)}else z.updateMatrices(L);r=z.getFrustum(),O(F,T,z.camera,L,this.type)}z.isPointLightShadow!==!0&&this.type===ko&&D(z,T),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(I,Z,H)};function D(P,F){const T=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ki(l.x,l.y,{format:Vr,type:Ra})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,T,g,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,T,M,C,null)}function U(P,F,T,I){let Z=null;const H=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)Z=H;else if(Z=T.isPointLight===!0?m:p,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=Z.uuid,ut=F.uuid;let mt=h[Q];mt===void 0&&(mt={},h[Q]=mt);let X=mt[ut];X===void 0&&(X=Z.clone(),mt[ut]=X,F.addEventListener("dispose",V)),Z=X}if(Z.visible=F.visible,Z.wireframe=F.wireframe,I===ko?Z.side=F.shadowSide!==null?F.shadowSide:F.side:Z.side=F.shadowSide!==null?F.shadowSide:v[F.side],Z.alphaMap=F.alphaMap,Z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Z.map=F.map,Z.clipShadows=F.clipShadows,Z.clippingPlanes=F.clippingPlanes,Z.clipIntersection=F.clipIntersection,Z.displacementMap=F.displacementMap,Z.displacementScale=F.displacementScale,Z.displacementBias=F.displacementBias,Z.wireframeLinewidth=F.wireframeLinewidth,Z.linewidth=F.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const Q=s.properties.get(Z);Q.light=T}return Z}function O(P,F,T,I,Z){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Z===ko)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ut=e.update(P),mt=P.material;if(Array.isArray(mt)){const X=ut.groups;for(let L=0,z=X.length;L<z;L++){const st=X[L],dt=mt[st.materialIndex];if(dt&&dt.visible){const Mt=U(P,dt,I,Z);P.onBeforeShadow(s,P,F,T,ut,Mt,st),s.renderBufferDirect(T,null,ut,Mt,P,st),P.onAfterShadow(s,P,F,T,ut,Mt,st)}}}else if(mt.visible){const X=U(P,mt,I,Z);P.onBeforeShadow(s,P,F,T,ut,X,null),s.renderBufferDirect(T,null,ut,X,P,null),P.onAfterShadow(s,P,F,T,ut,X,null)}}const Q=P.children;for(let ut=0,mt=Q.length;ut<mt;ut++)O(Q[ut],F,T,I,Z)}function V(P){P.target.removeEventListener("dispose",V);for(const T in h){const I=h[T],Z=P.target.uuid;Z in I&&(I[Z].dispose(),delete I[Z])}}}function oA(s,e){function i(){let G=!1;const Ct=new fn;let ht=null;const Bt=new fn(0,0,0,0);return{setMask:function(Ot){ht!==Ot&&!G&&(s.colorMask(Ot,Ot,Ot,Ot),ht=Ot)},setLocked:function(Ot){G=Ot},setClear:function(Ot,vt,qt,ie,$e){$e===!0&&(Ot*=ie,vt*=ie,qt*=ie),Ct.set(Ot,vt,qt,ie),Bt.equals(Ct)===!1&&(s.clearColor(Ot,vt,qt,ie),Bt.copy(Ct))},reset:function(){G=!1,ht=null,Bt.set(-1,0,0,0)}}}function r(){let G=!1,Ct=!1,ht=null,Bt=null,Ot=null;return{setReversed:function(vt){if(Ct!==vt){const qt=e.get("EXT_clip_control");vt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Ct=vt;const ie=Ot;Ot=null,this.setClear(ie)}},getReversed:function(){return Ct},setTest:function(vt){vt?Rt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(vt){ht!==vt&&!G&&(s.depthMask(vt),ht=vt)},setFunc:function(vt){if(Ct&&(vt=GM[vt]),Bt!==vt){switch(vt){case Gd:s.depthFunc(s.NEVER);break;case Vd:s.depthFunc(s.ALWAYS);break;case kd:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Xd:s.depthFunc(s.EQUAL);break;case Wd:s.depthFunc(s.GEQUAL);break;case qd:s.depthFunc(s.GREATER);break;case Yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=vt}},setLocked:function(vt){G=vt},setClear:function(vt){Ot!==vt&&(Ot=vt,Ct&&(vt=1-vt),s.clearDepth(vt))},reset:function(){G=!1,ht=null,Bt=null,Ot=null,Ct=!1}}}function l(){let G=!1,Ct=null,ht=null,Bt=null,Ot=null,vt=null,qt=null,ie=null,$e=null;return{setTest:function(we){G||(we?Rt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(we){Ct!==we&&!G&&(s.stencilMask(we),Ct=we)},setFunc:function(we,Vn,Ln){(ht!==we||Bt!==Vn||Ot!==Ln)&&(s.stencilFunc(we,Vn,Ln),ht=we,Bt=Vn,Ot=Ln)},setOp:function(we,Vn,Ln){(vt!==we||qt!==Vn||ie!==Ln)&&(s.stencilOp(we,Vn,Ln),vt=we,qt=Vn,ie=Ln)},setLocked:function(we){G=we},setClear:function(we){$e!==we&&(s.clearStencil(we),$e=we)},reset:function(){G=!1,Ct=null,ht=null,Bt=null,Ot=null,vt=null,qt=null,ie=null,$e=null}}}const u=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let S={},v={},g={},M=new WeakMap,b=[],C=null,y=!1,x=null,D=null,U=null,O=null,V=null,P=null,F=null,T=new Xe(0,0,0),I=0,Z=!1,H=null,Q=null,ut=null,mt=null,X=null;const L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,st=0;const dt=s.getParameter(s.VERSION);dt.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(dt)[1]),z=st>=1):dt.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),z=st>=2);let Mt=null,N={};const K=s.getParameter(s.SCISSOR_BOX),gt=s.getParameter(s.VIEWPORT),At=new fn().fromArray(K),Tt=new fn().fromArray(gt);function tt(G,Ct,ht,Bt){const Ot=new Uint8Array(4),vt=s.createTexture();s.bindTexture(G,vt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<ht;qt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Ot):s.texImage2D(Ct+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ot);return vt}const Et={};Et[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Rt(s.DEPTH_TEST),d.setFunc(Hs),Qe(!1),Ie(Fg),Rt(s.CULL_FACE),Re(ba);function Rt(G){S[G]!==!0&&(s.enable(G),S[G]=!0)}function Ft(G){S[G]!==!1&&(s.disable(G),S[G]=!1)}function te(G,Ct){return g[G]!==Ct?(s.bindFramebuffer(G,Ct),g[G]=Ct,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ct),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Qt(G,Ct){let ht=b,Bt=!1;if(G){ht=M.get(Ct),ht===void 0&&(ht=[],M.set(Ct,ht));const Ot=G.textures;if(ht.length!==Ot.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,qt=Ot.length;vt<qt;vt++)ht[vt]=s.COLOR_ATTACHMENT0+vt;ht.length=Ot.length,Bt=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(ht)}function Pe(G){return C!==G?(s.useProgram(G),C=G,!0):!1}const ue={[zr]:s.FUNC_ADD,[uM]:s.FUNC_SUBTRACT,[fM]:s.FUNC_REVERSE_SUBTRACT};ue[dM]=s.MIN,ue[hM]=s.MAX;const pe={[pM]:s.ZERO,[mM]:s.ONE,[gM]:s.SRC_COLOR,[Bd]:s.SRC_ALPHA,[yM]:s.SRC_ALPHA_SATURATE,[SM]:s.DST_COLOR,[vM]:s.DST_ALPHA,[_M]:s.ONE_MINUS_SRC_COLOR,[Hd]:s.ONE_MINUS_SRC_ALPHA,[MM]:s.ONE_MINUS_DST_COLOR,[xM]:s.ONE_MINUS_DST_ALPHA,[EM]:s.CONSTANT_COLOR,[bM]:s.ONE_MINUS_CONSTANT_COLOR,[TM]:s.CONSTANT_ALPHA,[AM]:s.ONE_MINUS_CONSTANT_ALPHA};function Re(G,Ct,ht,Bt,Ot,vt,qt,ie,$e,we){if(G===ba){y===!0&&(Ft(s.BLEND),y=!1);return}if(y===!1&&(Rt(s.BLEND),y=!0),G!==cM){if(G!==x||we!==Z){if((D!==zr||V!==zr)&&(s.blendEquation(s.FUNC_ADD),D=zr,V=zr),we)switch(G){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fd:s.blendFunc(s.ONE,s.ONE);break;case Bg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:De("WebGLState: Invalid blending: ",G);break}else switch(G){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bg:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hg:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",G);break}U=null,O=null,P=null,F=null,T.set(0,0,0),I=0,x=G,Z=we}return}Ot=Ot||Ct,vt=vt||ht,qt=qt||Bt,(Ct!==D||Ot!==V)&&(s.blendEquationSeparate(ue[Ct],ue[Ot]),D=Ct,V=Ot),(ht!==U||Bt!==O||vt!==P||qt!==F)&&(s.blendFuncSeparate(pe[ht],pe[Bt],pe[vt],pe[qt]),U=ht,O=Bt,P=vt,F=qt),(ie.equals(T)===!1||$e!==I)&&(s.blendColor(ie.r,ie.g,ie.b,$e),T.copy(ie),I=$e),x=G,Z=!1}function oe(G,Ct){G.side===ya?Ft(s.CULL_FACE):Rt(s.CULL_FACE);let ht=G.side===Jn;Ct&&(ht=!ht),Qe(ht),G.blending===Fs&&G.transparent===!1?Re(ba):Re(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Bt=G.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),W(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(G){H!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),H=G)}function Ie(G){G!==sM?(Rt(s.CULL_FACE),G!==Q&&(G===Fg?s.cullFace(s.BACK):G===oM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),Q=G}function dn(G){G!==ut&&(z&&s.lineWidth(G),ut=G)}function W(G,Ct,ht){G?(Rt(s.POLYGON_OFFSET_FILL),(mt!==Ct||X!==ht)&&(mt=Ct,X=ht,d.getReversed()&&(Ct=-Ct),s.polygonOffset(Ct,ht))):Ft(s.POLYGON_OFFSET_FILL)}function Je(G){G?Rt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function bt(G){G===void 0&&(G=s.TEXTURE0+L-1),Mt!==G&&(s.activeTexture(G),Mt=G)}function Ht(G,Ct,ht){ht===void 0&&(Mt===null?ht=s.TEXTURE0+L-1:ht=Mt);let Bt=N[ht];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[ht]=Bt),(Bt.type!==G||Bt.texture!==Ct)&&(Mt!==ht&&(s.activeTexture(ht),Mt=ht),s.bindTexture(G,Ct||Et[G]),Bt.type=G,Bt.texture=Ct)}function St(){const G=N[Mt];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(G){De("WebGLState:",G)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(G){De("WebGLState:",G)}}function E(){try{s.texSubImage2D(...arguments)}catch(G){De("WebGLState:",G)}}function Y(){try{s.texSubImage3D(...arguments)}catch(G){De("WebGLState:",G)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(G){De("WebGLState:",G)}}function yt(){try{s.compressedTexSubImage3D(...arguments)}catch(G){De("WebGLState:",G)}}function Dt(){try{s.texStorage2D(...arguments)}catch(G){De("WebGLState:",G)}}function Nt(){try{s.texStorage3D(...arguments)}catch(G){De("WebGLState:",G)}}function ot(){try{s.texImage2D(...arguments)}catch(G){De("WebGLState:",G)}}function ct(){try{s.texImage3D(...arguments)}catch(G){De("WebGLState:",G)}}function Pt(G){return v[G]!==void 0?v[G]:s.getParameter(G)}function It(G,Ct){v[G]!==Ct&&(s.pixelStorei(G,Ct),v[G]=Ct)}function Lt(G){At.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),At.copy(G))}function Ut(G){Tt.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Tt.copy(G))}function re(G,Ct){let ht=h.get(Ct);ht===void 0&&(ht=new WeakMap,h.set(Ct,ht));let Bt=ht.get(G);Bt===void 0&&(Bt=s.getUniformBlockIndex(Ct,G.name),ht.set(G,Bt))}function ne(G,Ct){const Bt=h.get(Ct).get(G);m.get(Ct)!==Bt&&(s.uniformBlockBinding(Ct,Bt,G.__bindingPointIndex),m.set(Ct,Bt))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),S={},v={},Mt=null,N={},g={},M=new WeakMap,b=[],C=null,y=!1,x=null,D=null,U=null,O=null,V=null,P=null,F=null,T=new Xe(0,0,0),I=0,Z=!1,H=null,Q=null,ut=null,mt=null,X=null,At.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:Rt,disable:Ft,bindFramebuffer:te,drawBuffers:Qt,useProgram:Pe,setBlending:Re,setMaterial:oe,setFlipSided:Qe,setCullFace:Ie,setLineWidth:dn,setPolygonOffset:W,setScissorTest:Je,activeTexture:bt,bindTexture:Ht,unbindTexture:St,compressedTexImage2D:me,compressedTexImage3D:w,texImage2D:ot,texImage3D:ct,pixelStorei:It,getParameter:Pt,updateUBOMapping:re,uniformBlockBinding:ne,texStorage2D:Dt,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:Y,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:Lt,viewport:Ut,reset:fe}}function lA(s,e,i,r,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new je,S=new WeakMap,v=new Set;let g;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(w,E){return b?new OffscreenCanvas(w,E):Vc("canvas")}function y(w,E,Y){let ft=1;const yt=me(w);if((yt.width>Y||yt.height>Y)&&(ft=Y/Math.max(yt.width,yt.height)),ft<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Dt=Math.floor(ft*yt.width),Nt=Math.floor(ft*yt.height);g===void 0&&(g=C(Dt,Nt));const ot=E?C(Dt,Nt):g;return ot.width=Dt,ot.height=Nt,ot.getContext("2d").drawImage(w,0,0,Dt,Nt),se("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+Dt+"x"+Nt+")."),ot}else return"data"in w&&se("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),w;return w}function x(w){return w.generateMipmaps}function D(w){s.generateMipmap(w)}function U(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(w,E,Y,ft,yt,Dt=!1){if(w!==null){if(s[w]!==void 0)return s[w];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Nt;ft&&(Nt=e.get("EXT_texture_norm16"),Nt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=E;if(E===s.RED&&(Y===s.FLOAT&&(ot=s.R32F),Y===s.HALF_FLOAT&&(ot=s.R16F),Y===s.UNSIGNED_BYTE&&(ot=s.R8),Y===s.UNSIGNED_SHORT&&Nt&&(ot=Nt.R16_EXT),Y===s.SHORT&&Nt&&(ot=Nt.R16_SNORM_EXT)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ot=s.R8UI),Y===s.UNSIGNED_SHORT&&(ot=s.R16UI),Y===s.UNSIGNED_INT&&(ot=s.R32UI),Y===s.BYTE&&(ot=s.R8I),Y===s.SHORT&&(ot=s.R16I),Y===s.INT&&(ot=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(ot=s.RG32F),Y===s.HALF_FLOAT&&(ot=s.RG16F),Y===s.UNSIGNED_BYTE&&(ot=s.RG8),Y===s.UNSIGNED_SHORT&&Nt&&(ot=Nt.RG16_EXT),Y===s.SHORT&&Nt&&(ot=Nt.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ot=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ot=s.RG16UI),Y===s.UNSIGNED_INT&&(ot=s.RG32UI),Y===s.BYTE&&(ot=s.RG8I),Y===s.SHORT&&(ot=s.RG16I),Y===s.INT&&(ot=s.RG32I)),E===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),Y===s.UNSIGNED_INT&&(ot=s.RGB32UI),Y===s.BYTE&&(ot=s.RGB8I),Y===s.SHORT&&(ot=s.RGB16I),Y===s.INT&&(ot=s.RGB32I)),E===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ot=s.RGBA32UI),Y===s.BYTE&&(ot=s.RGBA8I),Y===s.SHORT&&(ot=s.RGBA16I),Y===s.INT&&(ot=s.RGBA32I)),E===s.RGB&&(Y===s.UNSIGNED_SHORT&&Nt&&(ot=Nt.RGB16_EXT),Y===s.SHORT&&Nt&&(ot=Nt.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(ot=s.R11F_G11F_B10F)),E===s.RGBA){const ct=Dt?Hc:Te.getTransfer(yt);Y===s.FLOAT&&(ot=s.RGBA32F),Y===s.HALF_FLOAT&&(ot=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ot=ct===ke?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&Nt&&(ot=Nt.RGBA16_EXT),Y===s.SHORT&&Nt&&(ot=Nt.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function V(w,E){let Y;return w?E===null||E===Qi||E===qo?Y=s.DEPTH24_STENCIL8:E===Yi?Y=s.DEPTH32F_STENCIL8:E===Wo&&(Y=s.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qi||E===qo?Y=s.DEPTH_COMPONENT24:E===Yi?Y=s.DEPTH_COMPONENT32F:E===Wo&&(Y=s.DEPTH_COMPONENT16),Y}function P(w,E){return x(w)===!0||w.isFramebufferTexture&&w.minFilter!==Nn&&w.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function F(w){const E=w.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&v.delete(E)}function T(w){const E=w.target;E.removeEventListener("dispose",T),H(E)}function I(w){const E=r.get(w);if(E.__webglInit===void 0)return;const Y=w.source,ft=M.get(Y);if(ft){const yt=ft[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&Z(w),Object.keys(ft).length===0&&M.delete(Y)}r.remove(w)}function Z(w){const E=r.get(w);s.deleteTexture(E.__webglTexture);const Y=w.source,ft=M.get(Y);delete ft[E.__cacheKey],d.memory.textures--}function H(w){const E=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let yt=0;yt<E.__webglFramebuffer[ft].length;yt++)s.deleteFramebuffer(E.__webglFramebuffer[ft][yt]);else s.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)s.deleteFramebuffer(E.__webglFramebuffer[ft]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=w.textures;for(let ft=0,yt=Y.length;ft<yt;ft++){const Dt=r.get(Y[ft]);Dt.__webglTexture&&(s.deleteTexture(Dt.__webglTexture),d.memory.textures--),r.remove(Y[ft])}r.remove(w)}let Q=0;function ut(){Q=0}function mt(){return Q}function X(w){Q=w}function L(){const w=Q;return w>=l.maxTextures&&se("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),Q+=1,w}function z(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function st(w,E){const Y=r.get(w);if(w.isVideoTexture&&Ht(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&Y.__version!==w.version){const ft=w.image;if(ft===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(Y,w,E);return}}else w.isExternalTexture&&(Y.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function dt(w,E){const Y=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){Ft(Y,w,E);return}else w.isExternalTexture&&(Y.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function Mt(w,E){const Y=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Y.__version!==w.version){Ft(Y,w,E);return}i.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function N(w,E){const Y=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&Y.__version!==w.version){te(Y,w,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const K={[jd]:s.REPEAT,[Ea]:s.CLAMP_TO_EDGE,[Zd]:s.MIRRORED_REPEAT},gt={[Nn]:s.NEAREST,[wM]:s.NEAREST_MIPMAP_NEAREST,[sc]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[od]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},At={[NM]:s.NEVER,[zM]:s.ALWAYS,[LM]:s.LESS,[Bh]:s.LEQUAL,[OM]:s.EQUAL,[Hh]:s.GEQUAL,[PM]:s.GREATER,[IM]:s.NOTEQUAL};function Tt(w,E){if(E.type===Yi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===od||E.magFilter===sc||E.magFilter===Br||E.minFilter===Hn||E.minFilter===od||E.minFilter===sc||E.minFilter===Br)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,K[E.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,gt[E.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==sc&&E.minFilter!==Br||E.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function tt(w,E){let Y=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",F));const ft=E.source;let yt=M.get(ft);yt===void 0&&(yt={},M.set(ft,yt));const Dt=z(E);if(Dt!==w.__cacheKey){yt[Dt]===void 0&&(yt[Dt]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),yt[Dt].usedTimes++;const Nt=yt[w.__cacheKey];Nt!==void 0&&(yt[w.__cacheKey].usedTimes--,Nt.usedTimes===0&&Z(E)),w.__cacheKey=Dt,w.__webglTexture=yt[Dt].texture}return Y}function Et(w,E,Y){return Math.floor(Math.floor(w/Y)/E)}function Rt(w,E,Y,ft){const Dt=w.updateRanges;if(Dt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Y,ft,E.data);else{Dt.sort((It,Lt)=>It.start-Lt.start);let Nt=0;for(let It=1;It<Dt.length;It++){const Lt=Dt[Nt],Ut=Dt[It],re=Lt.start+Lt.count,ne=Et(Ut.start,E.width,4),fe=Et(Lt.start,E.width,4);Ut.start<=re+1&&ne===fe&&Et(Ut.start+Ut.count-1,E.width,4)===ne?Lt.count=Math.max(Lt.count,Ut.start+Ut.count-Lt.start):(++Nt,Dt[Nt]=Ut)}Dt.length=Nt+1;const ot=i.getParameter(s.UNPACK_ROW_LENGTH),ct=i.getParameter(s.UNPACK_SKIP_PIXELS),Pt=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let It=0,Lt=Dt.length;It<Lt;It++){const Ut=Dt[It],re=Math.floor(Ut.start/4),ne=Math.ceil(Ut.count/4),fe=re%E.width,G=Math.floor(re/E.width),Ct=ne,ht=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(s.UNPACK_SKIP_ROWS,G),i.texSubImage2D(s.TEXTURE_2D,0,fe,G,Ct,ht,Y,ft,E.data)}w.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ot),i.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(s.UNPACK_SKIP_ROWS,Pt)}}function Ft(w,E,Y){let ft=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=s.TEXTURE_3D);const yt=tt(w,E),Dt=E.source;i.bindTexture(ft,w.__webglTexture,s.TEXTURE0+Y);const Nt=r.get(Dt);if(Dt.version!==Nt.__version||yt===!0){if(i.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ht=Te.getPrimaries(Te.workingColorSpace),Bt=E.colorSpace===fr?null:Te.getPrimaries(E.colorSpace),Ot=E.colorSpace===fr||ht===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ct=y(E.image,!1,l.maxTextureSize);ct=St(E,ct);const Pt=u.convert(E.format,E.colorSpace),It=u.convert(E.type);let Lt=O(E.internalFormat,Pt,It,E.normalized,E.colorSpace,E.isVideoTexture);Tt(ft,E);let Ut;const re=E.mipmaps,ne=E.isVideoTexture!==!0,fe=Nt.__version===void 0||yt===!0,G=Dt.dataReady,Ct=P(E,ct);if(E.isDepthTexture)Lt=V(E.format===Hr,E.type),fe&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Lt,ct.width,ct.height):i.texImage2D(s.TEXTURE_2D,0,Lt,ct.width,ct.height,0,Pt,It,null));else if(E.isDataTexture)if(re.length>0){ne&&fe&&i.texStorage2D(s.TEXTURE_2D,Ct,Lt,re[0].width,re[0].height);for(let ht=0,Bt=re.length;ht<Bt;ht++)Ut=re[ht],ne?G&&i.texSubImage2D(s.TEXTURE_2D,ht,0,0,Ut.width,Ut.height,Pt,It,Ut.data):i.texImage2D(s.TEXTURE_2D,ht,Lt,Ut.width,Ut.height,0,Pt,It,Ut.data);E.generateMipmaps=!1}else ne?(fe&&i.texStorage2D(s.TEXTURE_2D,Ct,Lt,ct.width,ct.height),G&&Rt(E,ct,Pt,It)):i.texImage2D(s.TEXTURE_2D,0,Lt,ct.width,ct.height,0,Pt,It,ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&fe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Lt,re[0].width,re[0].height,ct.depth);for(let ht=0,Bt=re.length;ht<Bt;ht++)if(Ut=re[ht],E.format!==Li)if(Pt!==null)if(ne){if(G)if(E.layerUpdates.size>0){const Ot=h_(Ut.width,Ut.height,E.format,E.type);for(const vt of E.layerUpdates){const qt=Ut.data.subarray(vt*Ot/Ut.data.BYTES_PER_ELEMENT,(vt+1)*Ot/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,vt,Ut.width,Ut.height,1,Pt,qt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Ut.width,Ut.height,ct.depth,Pt,Ut.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,Lt,Ut.width,Ut.height,ct.depth,0,Ut.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?G&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Ut.width,Ut.height,ct.depth,Pt,It,Ut.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ht,Lt,Ut.width,Ut.height,ct.depth,0,Pt,It,Ut.data)}else{ne&&fe&&i.texStorage2D(s.TEXTURE_2D,Ct,Lt,re[0].width,re[0].height);for(let ht=0,Bt=re.length;ht<Bt;ht++)Ut=re[ht],E.format!==Li?Pt!==null?ne?G&&i.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,Ut.width,Ut.height,Pt,Ut.data):i.compressedTexImage2D(s.TEXTURE_2D,ht,Lt,Ut.width,Ut.height,0,Ut.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?G&&i.texSubImage2D(s.TEXTURE_2D,ht,0,0,Ut.width,Ut.height,Pt,It,Ut.data):i.texImage2D(s.TEXTURE_2D,ht,Lt,Ut.width,Ut.height,0,Pt,It,Ut.data)}else if(E.isDataArrayTexture)if(ne){if(fe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Lt,ct.width,ct.height,ct.depth),G)if(E.layerUpdates.size>0){const ht=h_(ct.width,ct.height,E.format,E.type);for(const Bt of E.layerUpdates){const Ot=ct.data.subarray(Bt*ht/ct.data.BYTES_PER_ELEMENT,(Bt+1)*ht/ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Bt,ct.width,ct.height,1,Pt,It,Ot)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Pt,It,ct.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,ct.width,ct.height,ct.depth,0,Pt,It,ct.data);else if(E.isData3DTexture)ne?(fe&&i.texStorage3D(s.TEXTURE_3D,Ct,Lt,ct.width,ct.height,ct.depth),G&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Pt,It,ct.data)):i.texImage3D(s.TEXTURE_3D,0,Lt,ct.width,ct.height,ct.depth,0,Pt,It,ct.data);else if(E.isFramebufferTexture){if(fe)if(ne)i.texStorage2D(s.TEXTURE_2D,Ct,Lt,ct.width,ct.height);else{let ht=ct.width,Bt=ct.height;for(let Ot=0;Ot<Ct;Ot++)i.texImage2D(s.TEXTURE_2D,Ot,Lt,ht,Bt,0,Pt,It,null),ht>>=1,Bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ht=s.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ct.parentNode!==ht){ht.appendChild(ct),v.add(E),ht.onpaint=ie=>{const $e=ie.changedElements;for(const we of v)$e.includes(we.image)&&(we.needsUpdate=!0)},ht.requestPaint();return}const Bt=0,Ot=s.RGBA,vt=s.RGBA,qt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Bt,Ot,vt,qt,ct),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(re.length>0){if(ne&&fe){const ht=me(re[0]);i.texStorage2D(s.TEXTURE_2D,Ct,Lt,ht.width,ht.height)}for(let ht=0,Bt=re.length;ht<Bt;ht++)Ut=re[ht],ne?G&&i.texSubImage2D(s.TEXTURE_2D,ht,0,0,Pt,It,Ut):i.texImage2D(s.TEXTURE_2D,ht,Lt,Pt,It,Ut);E.generateMipmaps=!1}else if(ne){if(fe){const ht=me(ct);i.texStorage2D(s.TEXTURE_2D,Ct,Lt,ht.width,ht.height)}G&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,It,ct)}else i.texImage2D(s.TEXTURE_2D,0,Lt,Pt,It,ct);x(E)&&D(ft),Nt.__version=Dt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function te(w,E,Y){if(E.image.length!==6)return;const ft=tt(w,E),yt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+Y);const Dt=r.get(yt);if(yt.version!==Dt.__version||ft===!0){i.activeTexture(s.TEXTURE0+Y);const Nt=Te.getPrimaries(Te.workingColorSpace),ot=E.colorSpace===fr?null:Te.getPrimaries(E.colorSpace),ct=E.colorSpace===fr||Nt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let vt=0;vt<6;vt++)!Pt&&!It?Lt[vt]=y(E.image[vt],!0,l.maxCubemapSize):Lt[vt]=It?E.image[vt].image:E.image[vt],Lt[vt]=St(E,Lt[vt]);const Ut=Lt[0],re=u.convert(E.format,E.colorSpace),ne=u.convert(E.type),fe=O(E.internalFormat,re,ne,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Ct=Dt.__version===void 0||ft===!0,ht=yt.dataReady;let Bt=P(E,Ut);Tt(s.TEXTURE_CUBE_MAP,E);let Ot;if(Pt){G&&Ct&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,fe,Ut.width,Ut.height);for(let vt=0;vt<6;vt++){Ot=Lt[vt].mipmaps;for(let qt=0;qt<Ot.length;qt++){const ie=Ot[qt];E.format!==Li?re!==null?G?ht&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt,0,0,ie.width,ie.height,re,ie.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt,fe,ie.width,ie.height,0,ie.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ht&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt,0,0,ie.width,ie.height,re,ne,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt,fe,ie.width,ie.height,0,re,ne,ie.data)}}}else{if(Ot=E.mipmaps,G&&Ct){Ot.length>0&&Bt++;const vt=me(Lt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,fe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(It){G?ht&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Lt[vt].width,Lt[vt].height,re,ne,Lt[vt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,Lt[vt].width,Lt[vt].height,0,re,ne,Lt[vt].data);for(let qt=0;qt<Ot.length;qt++){const $e=Ot[qt].image[vt].image;G?ht&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt+1,0,0,$e.width,$e.height,re,ne,$e.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt+1,fe,$e.width,$e.height,0,re,ne,$e.data)}}else{G?ht&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,re,ne,Lt[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,re,ne,Lt[vt]);for(let qt=0;qt<Ot.length;qt++){const ie=Ot[qt];G?ht&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt+1,0,0,re,ne,ie.image[vt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,qt+1,fe,re,ne,ie.image[vt])}}}x(E)&&D(s.TEXTURE_CUBE_MAP),Dt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Qt(w,E,Y,ft,yt,Dt){const Nt=u.convert(Y.format,Y.colorSpace),ot=u.convert(Y.type),ct=O(Y.internalFormat,Nt,ot,Y.normalized,Y.colorSpace),Pt=r.get(E),It=r.get(Y);if(It.__renderTarget=E,!Pt.__hasExternalTextures){const Lt=Math.max(1,E.width>>Dt),Ut=Math.max(1,E.height>>Dt);yt===s.TEXTURE_3D||yt===s.TEXTURE_2D_ARRAY?i.texImage3D(yt,Dt,ct,Lt,Ut,E.depth,0,Nt,ot,null):i.texImage2D(yt,Dt,ct,Lt,Ut,0,Nt,ot,null)}i.bindFramebuffer(s.FRAMEBUFFER,w),bt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,yt,It.__webglTexture,0,Je(E)):(yt===s.TEXTURE_2D||yt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,yt,It.__webglTexture,Dt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(w,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,w),E.depthBuffer){const ft=E.depthTexture,yt=ft&&ft.isDepthTexture?ft.type:null,Dt=V(E.stencilBuffer,yt),Nt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;bt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je(E),Dt,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je(E),Dt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Dt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,w)}else{const ft=E.textures;for(let yt=0;yt<ft.length;yt++){const Dt=ft[yt],Nt=u.convert(Dt.format,Dt.colorSpace),ot=u.convert(Dt.type),ct=O(Dt.internalFormat,Nt,ot,Dt.normalized,Dt.colorSpace);bt(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je(E),ct,E.width,E.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je(E),ct,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ct,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(w,E,Y){const ft=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=r.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),yt.__webglTexture===void 0){yt.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E.depthTexture);const Pt=u.convert(E.depthTexture.format),It=u.convert(E.depthTexture.type);let Lt;E.depthTexture.format===Ca?Lt=s.DEPTH_COMPONENT24:E.depthTexture.format===Hr&&(Lt=s.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Lt,E.width,E.height,0,Pt,It,null)}}else st(E.depthTexture,0);const Dt=yt.__webglTexture,Nt=Je(E),ot=ft?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,ct=E.depthTexture.format===Hr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ca)bt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,ot,Dt,0,Nt):s.framebufferTexture2D(s.FRAMEBUFFER,ct,ot,Dt,0);else if(E.depthTexture.format===Hr)bt(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,ot,Dt,0,Nt):s.framebufferTexture2D(s.FRAMEBUFFER,ct,ot,Dt,0);else throw new Error("Unknown depthTexture format")}function pe(w){const E=r.get(w),Y=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const ft=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",yt)};ft.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=ft}if(w.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let ft=0;ft<6;ft++)ue(E.__webglFramebuffer[ft],w,ft);else{const ft=w.texture.mipmaps;ft&&ft.length>0?ue(E.__webglFramebuffer[0],w,0):ue(E.__webglFramebuffer,w,0)}else if(Y){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=s.createRenderbuffer(),Pe(E.__webglDepthbuffer[ft],w,!1);else{const yt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,Dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,Dt)}}else{const ft=w.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Pe(E.__webglDepthbuffer,w,!1);else{const yt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,Dt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(w,E,Y){const ft=r.get(w);E!==void 0&&Qt(ft.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&pe(w)}function oe(w){const E=w.texture,Y=r.get(w),ft=r.get(E);w.addEventListener("dispose",T);const yt=w.textures,Dt=w.isWebGLCubeRenderTarget===!0,Nt=yt.length>1;if(Nt||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=E.version,d.memory.textures++),Dt){Y.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[ot]=[];for(let ct=0;ct<E.mipmaps.length;ct++)Y.__webglFramebuffer[ot][ct]=s.createFramebuffer()}else Y.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ot=0;ot<E.mipmaps.length;ot++)Y.__webglFramebuffer[ot]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Nt)for(let ot=0,ct=yt.length;ot<ct;ot++){const Pt=r.get(yt[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),d.memory.textures++)}if(w.samples>0&&bt(w)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ot=0;ot<yt.length;ot++){const ct=yt[ot];Y.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ot]);const Pt=u.convert(ct.format,ct.colorSpace),It=u.convert(ct.type),Lt=O(ct.internalFormat,Pt,It,ct.normalized,ct.colorSpace,w.isXRRenderTarget===!0),Ut=Je(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,Lt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(Y.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Dt){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E);for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)Qt(Y.__webglFramebuffer[ot][ct],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else Qt(Y.__webglFramebuffer[ot],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);x(E)&&D(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let ot=0,ct=yt.length;ot<ct;ot++){const Pt=yt[ot],It=r.get(Pt);let Lt=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Lt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,It.__webglTexture),Tt(Lt,Pt),Qt(Y.__webglFramebuffer,w,Pt,s.COLOR_ATTACHMENT0+ot,Lt,0),x(Pt)&&D(Lt)}i.unbindTexture()}else{let ot=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ot=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ot,ft.__webglTexture),Tt(ot,E),E.mipmaps&&E.mipmaps.length>0)for(let ct=0;ct<E.mipmaps.length;ct++)Qt(Y.__webglFramebuffer[ct],w,E,s.COLOR_ATTACHMENT0,ot,ct);else Qt(Y.__webglFramebuffer,w,E,s.COLOR_ATTACHMENT0,ot,0);x(E)&&D(ot),i.unbindTexture()}w.depthBuffer&&pe(w)}function Qe(w){const E=w.textures;for(let Y=0,ft=E.length;Y<ft;Y++){const yt=E[Y];if(x(yt)){const Dt=U(w),Nt=r.get(yt).__webglTexture;i.bindTexture(Dt,Nt),D(Dt),i.unbindTexture()}}}const Ie=[],dn=[];function W(w){if(w.samples>0){if(bt(w)===!1){const E=w.textures,Y=w.width,ft=w.height;let yt=s.COLOR_BUFFER_BIT;const Dt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=r.get(w),ot=E.length>1;if(ot)for(let Pt=0;Pt<E.length;Pt++)i.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const ct=w.texture.mipmaps;ct&&ct.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(yt|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(yt|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);const It=r.get(E[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,Y,ft,0,0,Y,ft,yt,s.NEAREST),m===!0&&(Ie.length=0,dn.length=0,Ie.push(s.COLOR_ATTACHMENT0+Pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ie.push(Dt),dn.push(Dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,dn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ie))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let Pt=0;Pt<E.length;Pt++){i.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[Pt]);const It=r.get(E[Pt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,It,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const E=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Je(w){return Math.min(l.maxSamples,w.samples)}function bt(w){const E=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(w){const E=d.render.frame;S.get(w)!==E&&(S.set(w,E),w.update())}function St(w,E){const Y=w.colorSpace,ft=w.format,yt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Y!==Bc&&Y!==fr&&(Te.getTransfer(Y)===ke?(ft!==Li||yt!==yi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",Y)),E}function me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=L,this.resetTextureUnits=ut,this.getTextureUnits=mt,this.setTextureUnits=X,this.setTexture2D=st,this.setTexture2DArray=dt,this.setTexture3D=Mt,this.setTextureCube=N,this.rebindTextures=Re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function cA(s,e){function i(r,l=fr){let u;const d=Te.getTransfer(l);if(r===yi)return s.UNSIGNED_BYTE;if(r===Oh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ph)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Q_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===J_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Z_)return s.BYTE;if(r===K_)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Lh)return s.INT;if(r===Qi)return s.UNSIGNED_INT;if(r===Yi)return s.FLOAT;if(r===Ra)return s.HALF_FLOAT;if(r===$_)return s.ALPHA;if(r===tv)return s.RGB;if(r===Li)return s.RGBA;if(r===Ca)return s.DEPTH_COMPONENT;if(r===Hr)return s.DEPTH_STENCIL;if(r===ev)return s.RED;if(r===Ih)return s.RED_INTEGER;if(r===Vr)return s.RG;if(r===zh)return s.RG_INTEGER;if(r===Fh)return s.RGBA_INTEGER;if(r===Nc||r===Lc||r===Oc||r===Pc)if(d===ke)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Nc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Nc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh||r===ih||r===ah||r===zc||r===rh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===th||r===eh)return d===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===ih)return u.COMPRESSED_R11_EAC;if(r===ah)return u.COMPRESSED_SIGNED_R11_EAC;if(r===zc)return u.COMPRESSED_RG11_EAC;if(r===rh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===sh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_h)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xh)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sh||r===Mh||r===yh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Sh)return d===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Eh||r===bh||r===Fc||r===Th)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Eh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Th)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const uA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new hv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ji({vertexShader:uA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wa(new qc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hA extends Wr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,S=null,v=null,g=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new dA,x={},D=i.getContextAttributes();let U=null,O=null;const V=[],P=[],F=new je;let T=null;const I=new Mi;I.viewport=new fn;const Z=new Mi;Z.viewport=new fn;const H=[I,Z],Q=new Ey;let ut=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Et=V[tt];return Et===void 0&&(Et=new md,V[tt]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(tt){let Et=V[tt];return Et===void 0&&(Et=new md,V[tt]=Et),Et.getGripSpace()},this.getHand=function(tt){let Et=V[tt];return Et===void 0&&(Et=new md,V[tt]=Et),Et.getHandSpace()};function X(tt){const Et=P.indexOf(tt.inputSource);if(Et===-1)return;const Rt=V[Et];Rt!==void 0&&(Rt.update(tt.inputSource,tt.frame,h||d),Rt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function L(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",z);for(let tt=0;tt<V.length;tt++){const Et=P[tt];Et!==null&&(P[tt]=null,V[tt].disconnect(Et))}ut=null,mt=null,y.reset();for(const tt in x)delete x[tt];e.setRenderTarget(U),M=null,g=null,v=null,l=null,O=null,Tt.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,r.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){p=tt,r.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(tt){h=tt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",L),l.addEventListener("inputsourceschange",z),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ft=null,te=null;D.depth&&(te=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=D.stencil?Hr:Ca,Ft=D.stencil?qo:Qi);const Qt={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:u};v=this.getBinding(),g=v.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),O=new Ki(g.textureWidth,g.textureHeight,{format:Li,type:yi,depthTexture:new Vs(g.textureWidth,g.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Rt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Ki(M.framebufferWidth,M.framebufferHeight,{format:Li,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Tt.setContext(l),Tt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(tt){for(let Et=0;Et<tt.removed.length;Et++){const Rt=tt.removed[Et],Ft=P.indexOf(Rt);Ft>=0&&(P[Ft]=null,V[Ft].disconnect(Rt))}for(let Et=0;Et<tt.added.length;Et++){const Rt=tt.added[Et];let Ft=P.indexOf(Rt);if(Ft===-1){for(let Qt=0;Qt<V.length;Qt++)if(Qt>=P.length){P.push(Rt),Ft=Qt;break}else if(P[Qt]===null){P[Qt]=Rt,Ft=Qt;break}if(Ft===-1)break}const te=V[Ft];te&&te.connect(Rt)}}const st=new rt,dt=new rt;function Mt(tt,Et,Rt){st.setFromMatrixPosition(Et.matrixWorld),dt.setFromMatrixPosition(Rt.matrixWorld);const Ft=st.distanceTo(dt),te=Et.projectionMatrix.elements,Qt=Rt.projectionMatrix.elements,Pe=te[14]/(te[10]-1),ue=te[14]/(te[10]+1),pe=(te[9]+1)/te[5],Re=(te[9]-1)/te[5],oe=(te[8]-1)/te[0],Qe=(Qt[8]+1)/Qt[0],Ie=Pe*oe,dn=Pe*Qe,W=Ft/(-oe+Qe),Je=W*-oe;if(Et.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Je),tt.translateZ(W),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),te[10]===-1)tt.projectionMatrix.copy(Et.projectionMatrix),tt.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{const bt=Pe+W,Ht=ue+W,St=Ie-Je,me=dn+(Ft-Je),w=pe*ue/Ht*bt,E=Re*ue/Ht*bt;tt.projectionMatrix.makePerspective(St,me,w,E,bt,Ht),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function N(tt,Et){Et===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Et.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let Et=tt.near,Rt=tt.far;y.texture!==null&&(y.depthNear>0&&(Et=y.depthNear),y.depthFar>0&&(Rt=y.depthFar)),Q.near=Z.near=I.near=Et,Q.far=Z.far=I.far=Rt,(ut!==Q.near||mt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ut=Q.near,mt=Q.far),Q.layers.mask=tt.layers.mask|6,I.layers.mask=Q.layers.mask&-5,Z.layers.mask=Q.layers.mask&-3;const Ft=tt.parent,te=Q.cameras;N(Q,Ft);for(let Qt=0;Qt<te.length;Qt++)N(te[Qt],Ft);te.length===2?Mt(Q,I,Z):Q.projectionMatrix.copy(I.projectionMatrix),K(tt,Q,Ft)};function K(tt,Et,Rt){Rt===null?tt.matrix.copy(Et.matrixWorld):(tt.matrix.copy(Rt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Et.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Et.projectionMatrix),tt.projectionMatrixInverse.copy(Et.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Rh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(tt){m=tt,g!==null&&(g.fixedFoveation=tt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=tt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(tt){return x[tt]};let gt=null;function At(tt,Et){if(S=Et.getViewerPose(h||d),b=Et,S!==null){const Rt=S.views;M!==null&&(e.setRenderTargetFramebuffer(O,M.framebuffer),e.setRenderTarget(O));let Ft=!1;Rt.length!==Q.cameras.length&&(Q.cameras.length=0,Ft=!0);for(let ue=0;ue<Rt.length;ue++){const pe=Rt[ue];let Re=null;if(M!==null)Re=M.getViewport(pe);else{const Qe=v.getViewSubImage(g,pe);Re=Qe.viewport,ue===0&&(e.setRenderTargetTextures(O,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(O))}let oe=H[ue];oe===void 0&&(oe=new Mi,oe.layers.enable(ue),oe.viewport=new fn,H[ue]=oe),oe.matrix.fromArray(pe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(pe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Re.x,Re.y,Re.width,Re.height),ue===0&&(Q.matrix.copy(oe.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ft===!0&&Q.cameras.push(oe)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const ue=v.getDepthInformation(Rt[0]);ue&&ue.isValid&&ue.texture&&y.init(ue,l.renderState)}if(te&&te.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let ue=0;ue<Rt.length;ue++){const pe=Rt[ue].camera;if(pe){let Re=x[pe];Re||(Re=new hv,x[pe]=Re);const oe=v.getCameraImage(pe);Re.sourceTexture=oe}}}}for(let Rt=0;Rt<V.length;Rt++){const Ft=P[Rt],te=V[Rt];Ft!==null&&te!==void 0&&te.update(Ft,Et,h||d)}gt&&gt(tt,Et),Et.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Et}),b=null}const Tt=new _v;Tt.setAnimationLoop(At),this.setAnimationLoop=function(tt){gt=tt},this.dispose=function(){}}}const pA=new Sn,bv=new ce;bv.set(-1,0,0,0,1,0,0,0,1);function mA(s,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,pv(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,D,U,O){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?u(y,x):x.isMeshLambertMaterial?(u(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(y,x),v(y,x)):x.isMeshPhongMaterial?(u(y,x),S(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(y,x),g(y,x),x.isMeshPhysicalMaterial&&M(y,x,O)):x.isMeshMatcapMaterial?(u(y,x),b(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,D,U):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),U=D.envMap,O=D.envMapRotation;U&&(y.envMap.value=U,y.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(O)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(bv),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,D,U){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=U*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function S(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function gA(s,e,i,r){let l={},u={},d=[];const p=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const O=U.program;r.uniformBlockBinding(D,O)}function h(D,U){let O=l[D.id];O===void 0&&(b(D),O=S(D),l[D.id]=O,D.addEventListener("dispose",y));const V=U.program;r.updateUBOMapping(D,V);const P=e.render.frame;u[D.id]!==P&&(g(D),u[D.id]=P)}function S(D){const U=v();D.__bindingPointIndex=U;const O=s.createBuffer(),V=D.__size,P=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,V,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,O),O}function v(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const U=l[D.id],O=D.uniforms,V=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let P=0,F=O.length;P<F;P++){const T=Array.isArray(O[P])?O[P]:[O[P]];for(let I=0,Z=T.length;I<Z;I++){const H=T[I];if(M(H,P,I,V)===!0){const Q=H.__offset,ut=Array.isArray(H.value)?H.value:[H.value];let mt=0;for(let X=0;X<ut.length;X++){const L=ut[X],z=C(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,Q+mt,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):ArrayBuffer.isView(L)?H.__data.set(new L.constructor(L.buffer,L.byteOffset,H.__data.length)):(L.toArray(H.__data,mt),mt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(D,U,O,V){const P=D.value,F=U+"_"+O;if(V[F]===void 0)return typeof P=="number"||typeof P=="boolean"?V[F]=P:ArrayBuffer.isView(P)?V[F]=P.slice():V[F]=P.clone(),!0;{const T=V[F];if(typeof P=="number"||typeof P=="boolean"){if(T!==P)return V[F]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(T.equals(P)===!1)return T.copy(P),!0}}return!1}function b(D){const U=D.uniforms;let O=0;const V=16;for(let F=0,T=U.length;F<T;F++){const I=Array.isArray(U[F])?U[F]:[U[F]];for(let Z=0,H=I.length;Z<H;Z++){const Q=I[Z],ut=Array.isArray(Q.value)?Q.value:[Q.value];for(let mt=0,X=ut.length;mt<X;mt++){const L=ut[mt],z=C(L),st=O%V,dt=st%z.boundary,Mt=st+dt;O+=dt,Mt!==0&&V-Mt<z.storage&&(O+=V-Mt),Q.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=O,O+=z.storage}}}const P=O%V;return P>0&&(O+=V-P),D.__size=O,D.__cache={},this}function C(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(U.boundary=16,U.storage=D.byteLength):se("WebGLRenderer: Unsupported uniform value type.",D),U}function y(D){const U=D.target;U.removeEventListener("dispose",y);const O=d.indexOf(U.__bindingPointIndex);d.splice(O,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function x(){for(const D in l)s.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:m,update:h,dispose:x}}const _A=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function vA(){return Wi===null&&(Wi=new ly(_A,16,16,Vr,Ra),Wi.name="DFG_LUT",Wi.minFilter=Hn,Wi.magFilter=Hn,Wi.wrapS=Ea,Wi.wrapT=Ea,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class xA{constructor(e={}){const{canvas:i=BM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=yi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const C=M,y=new Set([Fh,zh,Ih]),x=new Set([yi,Qi,Wo,qo,Oh,Ph]),D=new Uint32Array(4),U=new Int32Array(4),O=new rt;let V=null,P=null;const F=[],T=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Z=this;let H=!1,Q=null;this._outputColorSpace=Si;let ut=0,mt=0,X=null,L=-1,z=null;const st=new fn,dt=new fn;let Mt=null;const N=new Xe(0);let K=0,gt=i.width,At=i.height,Tt=1,tt=null,Et=null;const Rt=new fn(0,0,gt,At),Ft=new fn(0,0,gt,At);let te=!1;const Qt=new uv;let Pe=!1,ue=!1;const pe=new Sn,Re=new rt,oe=new fn,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function dn(){return X===null?Tt:1}let W=r;function Je(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nh}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",ie,!1),W===null){const q="webgl2";if(W=Je(q,A),W===null)throw Je(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw De("WebGLRenderer: "+A.message),A}let bt,Ht,St,me,w,E,Y,ft,yt,Dt,Nt,ot,ct,Pt,It,Lt,Ut,re,ne,fe,G,Ct,ht;function Bt(){bt=new v1(W),bt.init(),G=new cA(W,bt),Ht=new u1(W,bt,e,G),St=new oA(W,bt),Ht.reversedDepthBuffer&&g&&St.buffers.depth.setReversed(!0),me=new M1(W),w=new YT,E=new lA(W,bt,St,w,Ht,G,me),Y=new _1(Z),ft=new Ty(W),Ct=new l1(W,ft),yt=new x1(W,ft,me,Ct),Dt=new E1(W,yt,ft,Ct,me),re=new y1(W,Ht,E),It=new f1(w),Nt=new qT(Z,Y,bt,Ht,Ct,It),ot=new mA(Z,w),ct=new ZT,Pt=new eA(bt),Ut=new o1(Z,Y,St,Dt,b,m),Lt=new sA(Z,Dt,Ht),ht=new gA(W,me,Ht,St),ne=new c1(W,bt,me),fe=new S1(W,bt,me),me.programs=Nt.programs,Z.capabilities=Ht,Z.extensions=bt,Z.properties=w,Z.renderLists=ct,Z.shadowMap=Lt,Z.state=St,Z.info=me}Bt(),C!==yi&&(I=new T1(C,i.width,i.height,l,u));const Ot=new hA(Z,W);this.xr=Ot,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(A){A!==void 0&&(Tt=A,this.setSize(gt,At,!1))},this.getSize=function(A){return A.set(gt,At)},this.setSize=function(A,q,it=!0){if(Ot.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=A,At=q,i.width=Math.floor(A*Tt),i.height=Math.floor(q*Tt),it===!0&&(i.style.width=A+"px",i.style.height=q+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(gt*Tt,At*Tt).floor()},this.setDrawingBufferSize=function(A,q,it){gt=A,At=q,Tt=it,i.width=Math.floor(A*it),i.height=Math.floor(q*it),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===yi){De("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){se("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(st)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,q,it,et){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,q,it,et),St.viewport(st.copy(Rt).multiplyScalar(Tt).round())},this.getScissor=function(A){return A.copy(Ft)},this.setScissor=function(A,q,it,et){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,q,it,et),St.scissor(dt.copy(Ft).multiplyScalar(Tt).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){St.setScissorTest(te=A)},this.setOpaqueSort=function(A){tt=A},this.setTransparentSort=function(A){Et=A},this.getClearColor=function(A){return A.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,it=!0){let et=0;if(A){let nt=!1;if(X!==null){const Gt=X.texture.format;nt=y.has(Gt)}if(nt){const Gt=X.texture.type,Xt=x.has(Gt),zt=Ut.getClearColor(),Yt=Ut.getClearAlpha(),Wt=zt.r,Jt=zt.g,de=zt.b;Xt?(D[0]=Wt,D[1]=Jt,D[2]=de,D[3]=Yt,W.clearBufferuiv(W.COLOR,0,D)):(U[0]=Wt,U[1]=Jt,U[2]=de,U[3]=Yt,W.clearBufferiv(W.COLOR,0,U))}else et|=W.COLOR_BUFFER_BIT}q&&(et|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(et|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&W.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",ie,!1),Ut.dispose(),ct.dispose(),Pt.dispose(),w.dispose(),Y.dispose(),Dt.dispose(),Ct.dispose(),ht.dispose(),Nt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Da),Ot.removeEventListener("sessionend",$i),Tn.stop()};function vt(A){A.preventDefault(),qg("WebGLRenderer: Context Lost."),H=!0}function qt(){qg("WebGLRenderer: Context Restored."),H=!1;const A=me.autoReset,q=Lt.enabled,it=Lt.autoUpdate,et=Lt.needsUpdate,nt=Lt.type;Bt(),me.autoReset=A,Lt.enabled=q,Lt.autoUpdate=it,Lt.needsUpdate=et,Lt.type=nt}function ie(A){De("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const q=A.target;q.removeEventListener("dispose",$e),we(q)}function we(A){Vn(A),w.remove(A)}function Vn(A){const q=w.get(A).programs;q!==void 0&&(q.forEach(function(it){Nt.releaseProgram(it)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,it,et,nt,Gt){q===null&&(q=Qe);const Xt=nt.isMesh&&nt.matrixWorld.determinant()<0,zt=Pn(A,q,it,et,nt);St.setMaterial(et,Xt);let Yt=it.index,Wt=1;if(et.wireframe===!0){if(Yt=yt.getWireframeAttribute(it),Yt===void 0)return;Wt=2}const Jt=it.drawRange,de=it.attributes.position;let Kt=Jt.start*Wt,Ue=(Jt.start+Jt.count)*Wt;Gt!==null&&(Kt=Math.max(Kt,Gt.start*Wt),Ue=Math.min(Ue,(Gt.start+Gt.count)*Wt)),Yt!==null?(Kt=Math.max(Kt,0),Ue=Math.min(Ue,Yt.count)):de!=null&&(Kt=Math.max(Kt,0),Ue=Math.min(Ue,de.count));const an=Ue-Kt;if(an<0||an===1/0)return;Ct.setup(nt,et,zt,it,Yt);let Ze,Fe=ne;if(Yt!==null&&(Ze=ft.get(Yt),Fe=fe,Fe.setIndex(Ze)),nt.isMesh)et.wireframe===!0?(St.setLineWidth(et.wireframeLinewidth*dn()),Fe.setMode(W.LINES)):Fe.setMode(W.TRIANGLES);else if(nt.isLine){let Be=et.linewidth;Be===void 0&&(Be=1),St.setLineWidth(Be*dn()),nt.isLineSegments?Fe.setMode(W.LINES):nt.isLineLoop?Fe.setMode(W.LINE_LOOP):Fe.setMode(W.LINE_STRIP)}else nt.isPoints?Fe.setMode(W.POINTS):nt.isSprite&&Fe.setMode(W.TRIANGLES);if(nt.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Be=nt._multiDrawStarts,kt=nt._multiDrawCounts,In=nt._multiDrawCount,ve=Yt?ft.get(Yt).bytesPerElement:1,Mn=w.get(et).currentProgram.getUniforms();for(let ti=0;ti<In;ti++)Mn.setValue(W,"_gl_DrawID",ti),Fe.render(Be[ti]/ve,kt[ti])}else if(nt.isInstancedMesh)Fe.renderInstances(Kt,an,nt.count);else if(it.isInstancedBufferGeometry){const Be=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,kt=Math.min(it.instanceCount,Be);Fe.renderInstances(Kt,an,kt)}else Fe.render(Kt,an)};function Ln(A,q,it){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,Ua(A,q,it),A.side=hr,A.needsUpdate=!0,Ua(A,q,it),A.side=ya):Ua(A,q,it)}this.compile=function(A,q,it=null){it===null&&(it=A),P=Pt.get(it),P.init(q),T.push(P),it.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(P.pushLight(nt),nt.castShadow&&P.pushShadow(nt))}),A!==it&&A.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(P.pushLight(nt),nt.castShadow&&P.pushShadow(nt))}),P.setupLights();const et=new Set;return A.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Gt=nt.material;if(Gt)if(Array.isArray(Gt))for(let Xt=0;Xt<Gt.length;Xt++){const zt=Gt[Xt];Ln(zt,it,nt),et.add(zt)}else Ln(Gt,it,nt),et.add(Gt)}),P=T.pop(),et},this.compileAsync=function(A,q,it=null){const et=this.compile(A,q,it);return new Promise(nt=>{function Gt(){if(et.forEach(function(Xt){w.get(Xt).currentProgram.isReady()&&et.delete(Xt)}),et.size===0){nt(A);return}setTimeout(Gt,10)}bt.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let Ii=null;function zi(A){Ii&&Ii(A)}function Da(){Tn.stop()}function $i(){Tn.start()}const Tn=new _v;Tn.setAnimationLoop(zi),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(A){Ii=A,Ot.setAnimationLoop(A),A===null?Tn.stop():Tn.start()},Ot.addEventListener("sessionstart",Da),Ot.addEventListener("sessionend",$i),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Q!==null&&Q.renderStart(A,q);const it=Ot.enabled===!0&&Ot.isPresenting===!0,et=I!==null&&(X===null||it)&&I.begin(Z,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(q),q=Ot.getCamera()),A.isScene===!0&&A.onBeforeRender(Z,A,q,X),P=Pt.get(A,T.length),P.init(q),P.state.textureUnits=E.getTextureUnits(),T.push(P),pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Qt.setFromProjectionMatrix(pe,ji,q.reversedDepth),ue=this.localClippingEnabled,Pe=It.init(this.clippingPlanes,ue),V=ct.get(A,F.length),V.init(),F.push(V),Ot.enabled===!0&&Ot.isPresenting===!0){const Xt=Z.xr.getDepthSensingMesh();Xt!==null&&nn(Xt,q,-1/0,Z.sortObjects)}nn(A,q,0,Z.sortObjects),V.finish(),Z.sortObjects===!0&&V.sort(tt,Et),Ie=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Ie&&Ut.addToRenderList(V,A),this.info.render.frame++,Pe===!0&&It.beginShadows();const nt=P.state.shadowsArray;if(Lt.render(nt,A,q),Pe===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&I.hasRenderPass())===!1){const Xt=V.opaque,zt=V.transmissive;if(P.setupLights(),q.isArrayCamera){const Yt=q.cameras;if(zt.length>0)for(let Wt=0,Jt=Yt.length;Wt<Jt;Wt++){const de=Yt[Wt];Ei(Xt,zt,A,de)}Ie&&Ut.render(A);for(let Wt=0,Jt=Yt.length;Wt<Jt;Wt++){const de=Yt[Wt];hn(V,A,de,de.viewport)}}else zt.length>0&&Ei(Xt,zt,A,q),Ie&&Ut.render(A),hn(V,A,q)}X!==null&&mt===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),et&&I.end(Z),A.isScene===!0&&A.onAfterRender(Z,A,q),Ct.resetDefaultState(),L=-1,z=null,T.pop(),T.length>0?(P=T[T.length-1],E.setTextureUnits(P.state.textureUnits),Pe===!0&&It.setGlobalState(Z.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?V=F[F.length-1]:V=null,Q!==null&&Q.renderEnd()};function nn(A,q,it,et){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){et&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const Xt=Dt.update(A),zt=A.material;zt.visible&&V.push(A,Xt,zt,it,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){const Xt=Dt.update(A),zt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),oe.copy(Xt.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(zt)){const Yt=Xt.groups;for(let Wt=0,Jt=Yt.length;Wt<Jt;Wt++){const de=Yt[Wt],Kt=zt[de.materialIndex];Kt&&Kt.visible&&V.push(A,Xt,Kt,it,oe.z,de)}}else zt.visible&&V.push(A,Xt,zt,it,oe.z,null)}}const Gt=A.children;for(let Xt=0,zt=Gt.length;Xt<zt;Xt++)nn(Gt[Xt],q,it,et)}function hn(A,q,it,et){const{opaque:nt,transmissive:Gt,transparent:Xt}=A;P.setupLightsView(it),Pe===!0&&It.setGlobalState(Z.clippingPlanes,it),et&&St.viewport(st.copy(et)),nt.length>0&&Fi(nt,q,it),Gt.length>0&&Fi(Gt,q,it),Xt.length>0&&Fi(Xt,q,it),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ei(A,q,it,et){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[et.id]===void 0){const Kt=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[et.id]=new Ki(1,1,{generateMipmaps:!0,type:Kt?Ra:yi,minFilter:Br,samples:Math.max(4,Ht.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Gt=P.state.transmissionRenderTarget[et.id],Xt=et.viewport||st;Gt.setSize(Xt.z*Z.transmissionResolutionScale,Xt.w*Z.transmissionResolutionScale);const zt=Z.getRenderTarget(),Yt=Z.getActiveCubeFace(),Wt=Z.getActiveMipmapLevel();Z.setRenderTarget(Gt),Z.getClearColor(N),K=Z.getClearAlpha(),K<1&&Z.setClearColor(16777215,.5),Z.clear(),Ie&&Ut.render(it);const Jt=Z.toneMapping;Z.toneMapping=Zi;const de=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),P.setupLightsView(et),Pe===!0&&It.setGlobalState(Z.clippingPlanes,et),Fi(A,it,et),E.updateMultisampleRenderTarget(Gt),E.updateRenderTargetMipmap(Gt),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ue=0,an=q.length;Ue<an;Ue++){const Ze=q[Ue],{object:Fe,geometry:Be,material:kt,group:In}=Ze;if(kt.side===ya&&Fe.layers.test(et.layers)){const ve=kt.side;kt.side=Jn,kt.needsUpdate=!0,qr(Fe,it,et,Be,kt,In),kt.side=ve,kt.needsUpdate=!0,Kt=!0}}Kt===!0&&(E.updateMultisampleRenderTarget(Gt),E.updateRenderTargetMipmap(Gt))}Z.setRenderTarget(zt,Yt,Wt),Z.setClearColor(N,K),de!==void 0&&(et.viewport=de),Z.toneMapping=Jt}function Fi(A,q,it){const et=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,Gt=A.length;nt<Gt;nt++){const Xt=A[nt],{object:zt,geometry:Yt,group:Wt}=Xt;let Jt=Xt.material;Jt.allowOverride===!0&&et!==null&&(Jt=et),zt.layers.test(it.layers)&&qr(zt,q,it,Yt,Jt,Wt)}}function qr(A,q,it,et,nt,Gt){A.onBeforeRender(Z,q,it,et,nt,Gt),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),nt.onBeforeRender(Z,q,it,et,A,Gt),nt.transparent===!0&&nt.side===ya&&nt.forceSinglePass===!1?(nt.side=Jn,nt.needsUpdate=!0,Z.renderBufferDirect(it,q,et,nt,A,Gt),nt.side=hr,nt.needsUpdate=!0,Z.renderBufferDirect(it,q,et,nt,A,Gt),nt.side=ya):Z.renderBufferDirect(it,q,et,nt,A,Gt),A.onAfterRender(Z,q,it,et,nt,Gt)}function Ua(A,q,it){q.isScene!==!0&&(q=Qe);const et=w.get(A),nt=P.state.lights,Gt=P.state.shadowsArray,Xt=nt.state.version,zt=Nt.getParameters(A,nt.state,Gt,q,it,P.state.lightProbeGridArray),Yt=Nt.getProgramCacheKey(zt);let Wt=et.programs;et.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,et.fog=q.fog;const Jt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;et.envMap=Y.get(A.envMap||et.environment,Jt),et.envMapRotation=et.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",$e),Wt=new Map,et.programs=Wt);let de=Wt.get(Yt);if(de!==void 0){if(et.currentProgram===de&&et.lightsStateVersion===Xt)return Me(A,zt),de}else zt.uniforms=Nt.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,it,zt),A.onBeforeCompile(zt,Z),de=Nt.acquireProgram(zt,Yt),Wt.set(Yt,de),et.uniforms=zt.uniforms;const Kt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=It.uniform),Me(A,zt),et.needsLights=pr(A),et.lightsStateVersion=Xt,et.needsLights&&(Kt.ambientLightColor.value=nt.state.ambient,Kt.lightProbe.value=nt.state.probe,Kt.directionalLights.value=nt.state.directional,Kt.directionalLightShadows.value=nt.state.directionalShadow,Kt.spotLights.value=nt.state.spot,Kt.spotLightShadows.value=nt.state.spotShadow,Kt.rectAreaLights.value=nt.state.rectArea,Kt.ltc_1.value=nt.state.rectAreaLTC1,Kt.ltc_2.value=nt.state.rectAreaLTC2,Kt.pointLights.value=nt.state.point,Kt.pointLightShadows.value=nt.state.pointShadow,Kt.hemisphereLights.value=nt.state.hemi,Kt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=nt.state.spotLightMatrix,Kt.spotLightMap.value=nt.state.spotLightMap,Kt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=P.state.lightProbeGridArray.length>0,et.currentProgram=de,et.uniformsList=null,de}function Na(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Ic.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Me(A,q){const it=w.get(A);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function On(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;O.setFromMatrixPosition(q.matrixWorld);for(let it=0,et=A.length;it<et;it++){const nt=A[it];if(nt.texture!==null&&nt.boundingBox.containsPoint(O))return nt}return null}function Pn(A,q,it,et,nt){q.isScene!==!0&&(q=Qe),E.resetTextureUnits();const Gt=q.fog,Xt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?q.environment:null,zt=X===null?Z.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Te.workingColorSpace,Yt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Wt=Y.get(et.envMap||Xt,Yt),Jt=et.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,de=!!it.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Kt=!!it.morphAttributes.position,Ue=!!it.morphAttributes.normal,an=!!it.morphAttributes.color;let Ze=Zi;et.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ze=Z.toneMapping);const Fe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Be=Fe!==void 0?Fe.length:0,kt=w.get(et),In=P.state.lights;if(Pe===!0&&(ue===!0||A!==z)){const ze=A===z&&et.id===L;It.setState(et,A,ze)}let ve=!1;et.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==In.state.version||kt.outputColorSpace!==zt||nt.isBatchedMesh&&kt.batching===!1||!nt.isBatchedMesh&&kt.batching===!0||nt.isBatchedMesh&&kt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&kt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&kt.instancing===!1||!nt.isInstancedMesh&&kt.instancing===!0||nt.isSkinnedMesh&&kt.skinning===!1||!nt.isSkinnedMesh&&kt.skinning===!0||nt.isInstancedMesh&&kt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&kt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&kt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&kt.instancingMorph===!1&&nt.morphTexture!==null||kt.envMap!==Wt||et.fog===!0&&kt.fog!==Gt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==It.numPlanes||kt.numIntersection!==It.numIntersection)||kt.vertexAlphas!==Jt||kt.vertexTangents!==de||kt.morphTargets!==Kt||kt.morphNormals!==Ue||kt.morphColors!==an||kt.toneMapping!==Ze||kt.morphTargetsCount!==Be||!!kt.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,kt.__version=et.version);let Mn=kt.currentProgram;ve===!0&&(Mn=Ua(et,q,nt),Q&&et.isNodeMaterial&&Q.onUpdateProgram(et,Mn,kt));let ti=!1,bi=!1,ei=!1;const He=Mn.getUniforms(),rn=kt.uniforms;if(St.useProgram(Mn.program)&&(ti=!0,bi=!0,ei=!0),et.id!==L&&(L=et.id,bi=!0),kt.needsLights){const ze=On(P.state.lightProbeGridArray,nt);kt.lightProbeGrid!==ze&&(kt.lightProbeGrid=ze,bi=!0)}if(ti||z!==A){St.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),He.setValue(W,"projectionMatrix",A.projectionMatrix),He.setValue(W,"viewMatrix",A.matrixWorldInverse);const Bi=He.map.cameraPosition;Bi!==void 0&&Bi.setValue(W,Re.setFromMatrixPosition(A.matrixWorld)),Ht.logarithmicDepthBuffer&&He.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&He.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,bi=!0,ei=!0)}if(kt.needsLights&&(In.state.directionalShadowMap.length>0&&He.setValue(W,"directionalShadowMap",In.state.directionalShadowMap,E),In.state.spotShadowMap.length>0&&He.setValue(W,"spotShadowMap",In.state.spotShadowMap,E),In.state.pointShadowMap.length>0&&He.setValue(W,"pointShadowMap",In.state.pointShadowMap,E)),nt.isSkinnedMesh){He.setOptional(W,nt,"bindMatrix"),He.setOptional(W,nt,"bindMatrixInverse");const ze=nt.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),He.setValue(W,"boneTexture",ze.boneTexture,E))}nt.isBatchedMesh&&(He.setOptional(W,nt,"batchingTexture"),He.setValue(W,"batchingTexture",nt._matricesTexture,E),He.setOptional(W,nt,"batchingIdTexture"),He.setValue(W,"batchingIdTexture",nt._indirectTexture,E),He.setOptional(W,nt,"batchingColorTexture"),nt._colorsTexture!==null&&He.setValue(W,"batchingColorTexture",nt._colorsTexture,E));const Ti=it.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&re.update(nt,it,Mn),(bi||kt.receiveShadow!==nt.receiveShadow)&&(kt.receiveShadow=nt.receiveShadow,He.setValue(W,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&q.environment!==null&&(rn.envMapIntensity.value=q.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=vA()),bi){if(He.setValue(W,"toneMappingExposure",Z.toneMappingExposure),kt.needsLights&&La(rn,ei),Gt&&et.fog===!0&&ot.refreshFogUniforms(rn,Gt),ot.refreshMaterialUniforms(rn,et,Tt,At,P.state.transmissionRenderTarget[A.id]),kt.needsLights&&kt.lightProbeGrid){const ze=kt.lightProbeGrid;rn.probesSH.value=ze.texture,rn.probesMin.value.copy(ze.boundingBox.min),rn.probesMax.value.copy(ze.boundingBox.max),rn.probesResolution.value.copy(ze.resolution)}Ic.upload(W,Na(kt),rn,E)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ic.upload(W,Na(kt),rn,E),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&He.setValue(W,"center",nt.center),He.setValue(W,"modelViewMatrix",nt.modelViewMatrix),He.setValue(W,"normalMatrix",nt.normalMatrix),He.setValue(W,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const ze=et.uniformsGroups;for(let Bi=0,Pa=ze.length;Bi<Pa;Bi++){const mr=ze[Bi];ht.update(mr,Mn),ht.bind(mr,Mn)}}return Mn}function La(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function pr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return mt},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,it){const et=w.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=q,w.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:it,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const it=w.get(A);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0};const Oa=W.createFramebuffer();this.setRenderTarget=function(A,q=0,it=0){X=A,ut=q,mt=it;let et=null,nt=!1,Gt=!1;if(A){const zt=w.get(A);if(zt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(W.FRAMEBUFFER,zt.__webglFramebuffer),st.copy(A.viewport),dt.copy(A.scissor),Mt=A.scissorTest,St.viewport(st),St.scissor(dt),St.setScissorTest(Mt),L=-1;return}else if(zt.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(zt.__hasExternalTextures)E.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(zt.__boundDepthTexture!==Jt){if(Jt!==null&&w.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Gt=!0);const Wt=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?et=Wt[q][it]:et=Wt[q],nt=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?et=w.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?et=Wt[it]:et=Wt,st.copy(A.viewport),dt.copy(A.scissor),Mt=A.scissorTest}else st.copy(Rt).multiplyScalar(Tt).floor(),dt.copy(Ft).multiplyScalar(Tt).floor(),Mt=te;if(it!==0&&(et=Oa),St.bindFramebuffer(W.FRAMEBUFFER,et)&&St.drawBuffers(A,et),St.viewport(st),St.scissor(dt),St.setScissorTest(Mt),nt){const zt=w.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,it)}else if(Gt){const zt=q;for(let Yt=0;Yt<A.textures.length;Yt++){const Wt=w.get(A.textures[Yt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Yt,Wt.__webglTexture,it,zt)}}else if(A!==null&&it!==0){const zt=w.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,zt.__webglTexture,it)}L=-1},this.readRenderTargetPixels=function(A,q,it,et,nt,Gt,Xt,zt=0){if(!(A&&A.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt){St.bindFramebuffer(W.FRAMEBUFFER,Yt);try{const Wt=A.textures[zt],Jt=Wt.format,de=Wt.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+zt),!Ht.textureFormatReadable(Jt)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(de)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-et&&it>=0&&it<=A.height-nt&&W.readPixels(q,it,et,nt,G.convert(Jt),G.convert(de),Gt)}finally{const Wt=X!==null?w.get(X).__webglFramebuffer:null;St.bindFramebuffer(W.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,q,it,et,nt,Gt,Xt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt)if(q>=0&&q<=A.width-et&&it>=0&&it<=A.height-nt){St.bindFramebuffer(W.FRAMEBUFFER,Yt);const Wt=A.textures[zt],Jt=Wt.format,de=Wt.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+zt),!Ht.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Kt),W.bufferData(W.PIXEL_PACK_BUFFER,Gt.byteLength,W.STREAM_READ),W.readPixels(q,it,et,nt,G.convert(Jt),G.convert(de),0);const Ue=X!==null?w.get(X).__webglFramebuffer:null;St.bindFramebuffer(W.FRAMEBUFFER,Ue);const an=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await HM(W,an,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Kt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Gt),W.deleteBuffer(Kt),W.deleteSync(an),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,it=0){const et=Math.pow(2,-it),nt=Math.floor(A.image.width*et),Gt=Math.floor(A.image.height*et),Xt=q!==null?q.x:0,zt=q!==null?q.y:0;E.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,it,0,0,Xt,zt,nt,Gt),St.unbindTexture()};const pn=W.createFramebuffer(),Qo=W.createFramebuffer();this.copyTextureToTexture=function(A,q,it=null,et=null,nt=0,Gt=0){let Xt,zt,Yt,Wt,Jt,de,Kt,Ue,an;const Ze=A.isCompressedTexture?A.mipmaps[Gt]:A.image;if(it!==null)Xt=it.max.x-it.min.x,zt=it.max.y-it.min.y,Yt=it.isBox3?it.max.z-it.min.z:1,Wt=it.min.x,Jt=it.min.y,de=it.isBox3?it.min.z:0;else{const rn=Math.pow(2,-nt);Xt=Math.floor(Ze.width*rn),zt=Math.floor(Ze.height*rn),A.isDataArrayTexture?Yt=Ze.depth:A.isData3DTexture?Yt=Math.floor(Ze.depth*rn):Yt=1,Wt=0,Jt=0,de=0}et!==null?(Kt=et.x,Ue=et.y,an=et.z):(Kt=0,Ue=0,an=0);const Fe=G.convert(q.format),Be=G.convert(q.type);let kt;q.isData3DTexture?(E.setTexture3D(q,0),kt=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(E.setTexture2DArray(q,0),kt=W.TEXTURE_2D_ARRAY):(E.setTexture2D(q,0),kt=W.TEXTURE_2D),St.activeTexture(W.TEXTURE0),St.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),St.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),St.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const In=St.getParameter(W.UNPACK_ROW_LENGTH),ve=St.getParameter(W.UNPACK_IMAGE_HEIGHT),Mn=St.getParameter(W.UNPACK_SKIP_PIXELS),ti=St.getParameter(W.UNPACK_SKIP_ROWS),bi=St.getParameter(W.UNPACK_SKIP_IMAGES);St.pixelStorei(W.UNPACK_ROW_LENGTH,Ze.width),St.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ze.height),St.pixelStorei(W.UNPACK_SKIP_PIXELS,Wt),St.pixelStorei(W.UNPACK_SKIP_ROWS,Jt),St.pixelStorei(W.UNPACK_SKIP_IMAGES,de);const ei=A.isDataArrayTexture||A.isData3DTexture,He=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const rn=w.get(A),Ti=w.get(q),ze=w.get(rn.__renderTarget),Bi=w.get(Ti.__renderTarget);St.bindFramebuffer(W.READ_FRAMEBUFFER,ze.__webglFramebuffer),St.bindFramebuffer(W.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Pa=0;Pa<Yt;Pa++)ei&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,w.get(A).__webglTexture,nt,de+Pa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,w.get(q).__webglTexture,Gt,an+Pa)),W.blitFramebuffer(Wt,Jt,Xt,zt,Kt,Ue,Xt,zt,W.DEPTH_BUFFER_BIT,W.NEAREST);St.bindFramebuffer(W.READ_FRAMEBUFFER,null),St.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(nt!==0||A.isRenderTargetTexture||w.has(A)){const rn=w.get(A),Ti=w.get(q);St.bindFramebuffer(W.READ_FRAMEBUFFER,pn),St.bindFramebuffer(W.DRAW_FRAMEBUFFER,Qo);for(let ze=0;ze<Yt;ze++)ei?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,rn.__webglTexture,nt,de+ze):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,rn.__webglTexture,nt),He?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ti.__webglTexture,Gt,an+ze):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ti.__webglTexture,Gt),nt!==0?W.blitFramebuffer(Wt,Jt,Xt,zt,Kt,Ue,Xt,zt,W.COLOR_BUFFER_BIT,W.NEAREST):He?W.copyTexSubImage3D(kt,Gt,Kt,Ue,an+ze,Wt,Jt,Xt,zt):W.copyTexSubImage2D(kt,Gt,Kt,Ue,Wt,Jt,Xt,zt);St.bindFramebuffer(W.READ_FRAMEBUFFER,null),St.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else He?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(kt,Gt,Kt,Ue,an,Xt,zt,Yt,Fe,Be,Ze.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(kt,Gt,Kt,Ue,an,Xt,zt,Yt,Fe,Ze.data):W.texSubImage3D(kt,Gt,Kt,Ue,an,Xt,zt,Yt,Fe,Be,Ze):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Gt,Kt,Ue,Xt,zt,Fe,Be,Ze.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Gt,Kt,Ue,Ze.width,Ze.height,Fe,Ze.data):W.texSubImage2D(W.TEXTURE_2D,Gt,Kt,Ue,Xt,zt,Fe,Be,Ze);St.pixelStorei(W.UNPACK_ROW_LENGTH,In),St.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ve),St.pixelStorei(W.UNPACK_SKIP_PIXELS,Mn),St.pixelStorei(W.UNPACK_SKIP_ROWS,ti),St.pixelStorei(W.UNPACK_SKIP_IMAGES,bi),Gt===0&&q.generateMipmaps&&W.generateMipmap(kt),St.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),St.unbindTexture()},this.resetState=function(){ut=0,mt=0,X=null,St.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(e),i.unpackColorSpace=Te._getUnpackColorSpace()}}const SA=()=>{const s=ee.useRef(null);return ee.useEffect(()=>{const e=s.current;if(!e)return;const i=new ny,r=e.clientWidth||window.innerWidth,l=e.clientHeight||window.innerHeight,u=new Mi(60,r/l,.1,100);u.position.z=5;const d=new xA({alpha:!0,antialias:!0});d.setSize(r,l),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(d.domElement);const p=180,m=new Pi,h=new Float32Array(p*3),S=[];for(let U=0;U<p;U++)h[U*3]=(Math.random()-.5)*8,h[U*3+1]=(Math.random()-.5)*12,h[U*3+2]=(Math.random()-.5)*4,S.push(Math.random()*.015+.005);m.setAttribute("position",new Oi(h,3));const v=document.createElement("canvas");v.width=16,v.height=16;const g=v.getContext("2d");if(g){const U=g.createRadialGradient(8,8,0,8,8,8);U.addColorStop(0,"rgba(255, 235, 170, 1)"),U.addColorStop(.3,"rgba(220, 170, 75, 0.8)"),U.addColorStop(1,"rgba(220, 170, 75, 0)"),g.fillStyle=U,g.fillRect(0,0,16,16)}const M=new hy(v),b=new fv({size:.16,map:M,transparent:!0,blending:Fd,depthWrite:!1}),C=new dy(m,b);i.add(C);let y;const x=()=>{const U=m.attributes.position.array;for(let O=0;O<p;O++)U[O*3+1]+=S[O],U[O*3]+=Math.sin(Date.now()*8e-4+O)*.0015,U[O*3+1]>6&&(U[O*3+1]=-6,U[O*3]=(Math.random()-.5)*8);m.attributes.position.needsUpdate=!0,C.rotation.y+=.001,C.rotation.x+=4e-4,d.render(i,u),y=requestAnimationFrame(x)};x();const D=()=>{if(!e)return;const U=e.clientWidth,O=e.clientHeight;u.aspect=U/O,u.updateProjectionMatrix(),d.setSize(U,O)};return window.addEventListener("resize",D),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",D),e&&d.domElement.parentNode===e&&e.removeChild(d.domElement),m.dispose(),b.dispose(),M.dispose()}},[]),wt.jsx("div",{ref:s,className:"absolute inset-0 pointer-events-none z-0"})},MA=({isOpen:s,onClose:e,config:i})=>{const[r,l]=ee.useState(null),[u,d]=ee.useState(!0),[p,m]=ee.useState(null);ee.useEffect(()=>{if(s)try{const v=window.AudioContext||window.webkitAudioContext;if(v){const g=new v,M=g.currentTime;[659.25,880,1109.73,1318.51].forEach((C,y)=>{const x=g.createOscillator(),D=g.createGain();x.type="sine",x.frequency.setValueAtTime(C,M+y*.08),D.gain.setValueAtTime(0,M+y*.08),D.gain.linearRampToValueAtTime(.2,M+y*.08+.03),D.gain.exponentialRampToValueAtTime(.001,M+y*.08+.5),x.connect(D),D.connect(g.destination),x.start(M+y*.08),x.stop(M+y*.08+.6)})}}catch(v){console.warn("瀏覽器不支援 Web Audio 或尚未授權播音：",v)}},[s]),ee.useEffect(()=>{if(!s){l(null);return}d(!0),m(null);const v=i.avatarUrl||i.postcardPhotoUrl||i.resultUrl||"./assets/result.png",g=i.postcardText||i.successMessage||"送上一份誠摯的驚喜，祝你魔法般的一天！";i.title;const M=new Image;M.crossOrigin="anonymous",M.src=v,M.onload=()=>{try{const b=document.createElement("canvas"),C=b.getContext("2d");if(!C)throw new Error("無法初始化 2D Canvas");const y='bold 24px "Inter", "Microsoft JhengHei", sans-serif';C.font=y;const x=18,D=[];g.split(`
`).forEach(At=>{if(At.length===0)D.push("");else for(let Tt=0;Tt<At.length;Tt+=x)D.push(At.substring(Tt,Tt+x))});const O=D.length*48+60,V=Math.max(1100,810+O);b.width=800,b.height=V,C.font=y,C.fillStyle="#FAF7F0",C.fillRect(0,0,800,V);const P=C.createRadialGradient(400,V/2,100,400,V/2,800);P.addColorStop(0,"rgba(255, 255, 255, 0.25)"),P.addColorStop(.7,"rgba(235, 225, 205, 0.15)"),P.addColorStop(1,"rgba(215, 201, 178, 0.38)"),C.fillStyle=P,C.fillRect(0,0,800,V);const F=120,T=110,I=560,Z=560,H=24;C.save(),C.beginPath(),C.roundRect(F,T,I,Z,H),C.clip();const Q=M.width,ut=M.height,mt=I/Z,X=Q/ut;let L=0,z=0,st=Q,dt=ut;X>mt?(st=ut*mt,L=(Q-st)/2):(dt=Q/mt,z=(ut-dt)/2),C.drawImage(M,L,z,st,dt,F,T,I,Z),C.restore(),C.strokeStyle="rgba(197, 177, 142, 0.25)",C.lineWidth=2,C.beginPath(),C.roundRect(F,T,I,Z,H),C.stroke(),C.textAlign="center";const Mt=C.createLinearGradient(150,0,650,0);Mt.addColorStop(0,"rgba(177, 131, 33, 0)"),Mt.addColorStop(.3,"rgba(177, 131, 33, 0.45)"),Mt.addColorStop(.5,"#ebd080"),Mt.addColorStop(.7,"rgba(177, 131, 33, 0.45)"),Mt.addColorStop(1,"rgba(177, 131, 33, 0)"),C.strokeStyle=Mt,C.lineWidth=1.5,C.beginPath(),C.moveTo(150,715),C.lineTo(650,715),C.stroke();const N=C.createLinearGradient(0,700,0,800);N.addColorStop(0,"#be8f2a"),N.addColorStop(.5,"#fdf7c3"),N.addColorStop(1,"#9e721d"),C.fillStyle=N,C.font="22px serif",C.fillText("✦",400,722);const K=C.createLinearGradient(0,810,0,810+O);K.addColorStop(0,"#9e7520"),K.addColorStop(1,"#614914"),C.fillStyle=K,C.font='bold 24px "Inter", "Microsoft JhengHei", sans-serif',C.letterSpacing="4px",D.forEach((At,Tt)=>{C.fillText(At,400,835+Tt*48)});const gt=b.toDataURL("image/jpeg",.93);l(gt),d(!1)}catch(b){console.error("明信片渲染出錯:",b),m("明信片加載失敗，請重試！可能由於自定義照片尚未成功上傳"),d(!1)}},M.onerror=()=>{v!=="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800&h=1200"?M.src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800&h=1200":(m("明信片背景圖加載失敗，請連線網路再試。"),d(!1))}},[s,i]);const h=()=>{if(!r)return;const v=document.createElement("a");v.href=r,v.download=`postcard_${i.title||"friend"}.jpg`,document.body.appendChild(v),v.click(),document.body.removeChild(v)};if(!s)return null;const S=i.avatarUrl||i.postcardPhotoUrl||i.resultUrl||"./assets/result.png";return wt.jsxs("div",{className:"absolute inset-0 z-[100] bg-black/55 backdrop-blur-md flex items-center justify-center p-3.5 pointer-events-auto select-none animate-[fadeIn_0.3s_ease-out] overflow-hidden",children:[wt.jsx(SA,{}),wt.jsxs("div",{className:"w-[330px] max-h-[85vh] bg-[#FAF7F0] rounded-[24px] border border-[#e3dac9] shadow-[0_24px_55px_rgba(50,45,35,0.28)] flex flex-col justify-between relative overflow-hidden animate-scaleUp z-10",children:[wt.jsx("button",{onClick:e,className:"absolute top-4 right-4 z-[60] w-8 h-8 rounded-full bg-[#fbfbfa] hover:bg-[#f5f2eb] text-[#85704a] border border-[#dfd4be] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.06),_0_2px_5px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.08),_0_1px_3px_rgba(0,0,0,0.03)] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer",title:"返回",children:wt.jsx(F_,{className:"w-3.5 h-3.5 stroke-[2.5]"})}),wt.jsxs("div",{className:"flex-1 flex flex-col pt-6 px-6 overflow-y-auto min-h-0",children:[wt.jsx("div",{className:"w-full aspect-square rounded-xl overflow-hidden border border-[#eeddbb]/30 shadow-[0_4px_12px_rgba(0,0,0,0.03)] bg-stone-100 flex items-center justify-center relative mt-3 shrink-0",children:u?wt.jsxs("div",{className:"flex flex-col items-center gap-1.5 py-6",children:[wt.jsx(B_,{className:"w-6 h-6 text-[#9a7d46] animate-spin"}),wt.jsx("span",{className:"text-[10px] text-amber-900/40",children:"製作印製中..."})]}):p?wt.jsx("span",{className:"text-xs text-red-400 p-4 text-center",children:p}):wt.jsx("img",{src:S,alt:"你的專屬明信片",className:"w-full h-full object-cover",referrerPolicy:"no-referrer"})}),wt.jsxs("div",{className:"flex flex-col items-center text-center mt-3 pb-4",children:[wt.jsxs("div",{className:"flex items-center gap-2 mb-2.5 opacity-75",children:[wt.jsx("div",{className:"w-8 h-[1px] bg-gradient-to-r from-transparent to-[#bba06a]"}),wt.jsx("span",{className:"text-[#c59c50] text-[10px]",children:"✦"}),wt.jsx("div",{className:"w-8 h-[1px] bg-gradient-to-l from-transparent to-[#bba06a]"})]}),wt.jsx("p",{className:"mt-1 text-[11px] leading-relaxed font-semibold bg-gradient-to-b from-[#8f6d21] to-[#604914] bg-clip-text text-transparent px-1 select-text max-w-[240px] drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.6)] whitespace-pre-line",children:i.postcardText||"感恩這份奇妙的相遇，獻上我最溫暖的祝福！願你的每一步都充滿陽光。"})]})]}),!u&&!p&&wt.jsxs("button",{onClick:h,className:"w-full h-12 bg-[#2d2522] hover:bg-[#201a18] active:bg-[#1a1413] text-[#ebdfd5] font-sans text-xs font-semibold tracking-[2px] uppercase shadow-[inset_0_2.5px_5px_rgba(0,0,0,0.4),_0_1px_0.5px_rgba(255,255,255,0.08)] flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-200 border-t border-[#1e1917]",children:[wt.jsx(jS,{className:"w-3.5 h-3.5 text-[#ebd9cc] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"}),wt.jsx("span",{children:"儲存明信片"})]})]})]})};function yA(){const[s,e]=ee.useState(Ce.IDLE),i=ee.useRef(s);ee.useEffect(()=>{i.current=s},[s]);const[r,l]=ee.useState(null),[u,d]=ee.useState(!1),[p,m]=ee.useState(!1),[h,S]=ee.useState(!1),[v,g]=ee.useState(!1),M=US.useMemo(()=>nM(),[]),{top:b,left:C,width:y,height:x,borderRadius:D}=M,[U,O]=ee.useState(()=>M.initialUrl||"./assets/initial.png"),[V,P]=ee.useState(()=>M.resultUrl||"./assets/result.png"),[F,T]=ee.useState(()=>M.finalUrl||"./assets/final.mp4");ee.useEffect(()=>{O(M.initialUrl||"./assets/initial.png"),P(M.resultUrl||"./assets/result.png"),T(M.finalUrl||"./assets/final.mp4"),m(!1),S(!1),g(!1),M.title&&(document.title=M.title)},[M]),ee.useEffect(()=>{const bt=[U,V,F];M.avatarUrl&&bt.push(M.avatarUrl),M.postcardPhotoUrl&&bt.push(M.postcardPhotoUrl),bt.forEach(Ht=>{if(Ht&&!pe(Ht)){const St=new Image;St.src=Ht}})},[U,V,F,M]);const I=()=>{U.startsWith("./assets/")||U.startsWith("/assets/")?O("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"):m(!0)},Z=()=>{V.startsWith("./assets/")||V.startsWith("/assets/")?P("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1200"):S(!0)},H=()=>{F.startsWith("./assets/")||F.startsWith("/assets/")?T("https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-falling-glitter-41595-large.mp4"):g(!0)};ee.useEffect(()=>{(async()=>{let Ht=0;for(;!window.FaceMesh&&Ht<100;)await new Promise(St=>setTimeout(St,50)),Ht++;window.FaceMesh&&console.log("✅ MediaPipe FaceMesh 已預加載")})()},[]);const[Q,ut]=ee.useState(!1),[mt,X]=ee.useState(!1),[L,z]=ee.useState(0),[st,dt]=ee.useState(()=>`點擊下方的「${M.buttonText}」開始體驗`),[Mt,N]=ee.useState({x:0,y:0,scale:1,detected:!1,roll:0,yaw:0,pitch:0}),K=ee.useRef(null),gt=ee.useRef(null),At=ee.useRef(null),Tt=ee.useRef(null),tt=ee.useRef(null),Et=ee.useRef(null),Rt=ee.useRef(!1),Ft=ee.useRef(null),te=ee.useRef(0),[Qt,Pe]=ee.useState(!1),ue=ee.useCallback(()=>{try{const bt=window.AudioContext||window.webkitAudioContext;if(!bt)return;const Ht=new bt,St=Ht.currentTime;[659.25,880,1109.73,1318.51].forEach((w,E)=>{const Y=Ht.createOscillator(),ft=Ht.createGain();Y.type="sine",Y.frequency.setValueAtTime(w,St+E*.08),ft.gain.setValueAtTime(0,St+E*.08),ft.gain.linearRampToValueAtTime(.2,St+E*.08+.03),ft.gain.exponentialRampToValueAtTime(.001,St+E*.08+.5),Y.connect(ft),ft.connect(Ht.destination),Y.start(St+E*.08),Y.stop(St+E*.08+.6)})}catch(bt){console.warn("瀏覽器不支援 Web Audio 或尚未授權播音：",bt instanceof Error?bt.message:String(bt))}},[]),pe=bt=>{if(!bt)return!1;const Ht=bt.toLowerCase();return Ht.endsWith(".mp4")||Ht.endsWith(".webm")||Ht.endsWith(".mov")||Ht.endsWith(".m4v")||Ht.endsWith(".avi")||Ht.endsWith(".mkv")||Ht.endsWith(".3gp")||Ht.endsWith(".ogg")||Ht.includes("video")||Ht.includes("mp4")||Ht.includes("mov")||Ht.includes("webm")},Re=(bt,Ht)=>bt.endsWith("%")?parseFloat(bt)/100*Ht:(bt.endsWith("px"),parseFloat(bt)),oe=ee.useCallback(()=>{const bt=K.current;if(!bt)return null;const Ht=bt.getBoundingClientRect(),St=Re(y,Ht.width),me=Re(x,Ht.height),w=Re(C,Ht.width),E=Re(b,Ht.height),Y=w-St/2,ft=E-me/2;return{x:Y,y:ft,width:St,height:me,centerX:w,centerY:E}},[b,C,y,x]),Qe=ee.useCallback((bt,Ht,St,me)=>{const w=St.videoWidth,E=St.videoHeight;if(!w||!E)return{x:0,y:0};const Y=me.getBoundingClientRect(),ft=Y.width,yt=Y.height,Dt=w/E,Nt=ft/yt;let ot=1,ct=0,Pt=0;Dt>Nt?(ot=yt/E,ct=(ft-w*ot)/2):(ot=ft/w,Pt=(yt-E*ot)/2);const It=(1-bt)*w*ot+ct,Lt=Ht*E*ot+Pt;return{x:It,y:Lt}},[]),Ie=ee.useCallback(()=>{e(Ce.STAGE2),Pe(!0),ue(),setTimeout(()=>{Pe(!1)},600),setTimeout(()=>{if(tt.current){try{tt.current.stop()}catch(w){console.warn("相機停止異常:",w instanceof Error?w.message:String(w))}tt.current=null}Tt.current&&(Tt.current.getTracks().forEach(w=>w.stop()),Tt.current=null)},1500);const bt=new URLSearchParams(window.location.search),Ht=bt.get("friend")||bt.get("u"),me=(Ht==null?void 0:Ht.toLowerCase())==="y"?3e3:2200;setTimeout(()=>{e(Ce.STAGE3)},me)},[ue]);ee.useCallback(bt=>{const Ht=gt.current,St=K.current;if(i.current!==Ce.ACTIVE||!Ht||!St){ut(!1),X(!1),N(Me=>({...Me,detected:!1}));return}if(!bt.multiFaceLandmarks||bt.multiFaceLandmarks.length===0){ut(!1),X(!1),N(Me=>({...Me,detected:!1})),dt("🔍 尋找人臉中... (人像尚未放入圈圈 ❌)"),Ft.current&&(Ft.current=null,z(0));return}ut(!0);const me=bt.multiFaceLandmarks[0];let w=1,E=0,Y=1,ft=0;for(const Me of me)Me.x<w&&(w=Me.x),Me.x>E&&(E=Me.x),Me.y<Y&&(Y=Me.y),Me.y>ft&&(ft=Me.y);let yt=0;const Dt=me[130],Nt=me[359];if(Dt&&Nt){const Me=Nt.y-Dt.y,On=Nt.x-Dt.x;yt=Math.atan2(Me,On)*(180/Math.PI)}let ot=0;const ct=me[4],Pt=me[234],It=me[454];if(ct&&Pt&&It){const Me=Math.abs(ct.x-Pt.x),On=Math.abs(ct.x-It.x),Pn=Me+On;Pn>0&&(ot=(Me/Pn-.5)*-75)}let Lt=0;const Ut=me[10],re=me[152];if(ct&&Ut&&re){const Me=Math.abs(ct.y-Ut.y),On=Math.abs(ct.y-re.y),Pn=Me+On;Pn>0&&(Lt=(Me/Pn-.45)*55)}const ne=Qe(w,Y,Ht,St),fe=Qe(E,ft,Ht,St),G=Math.min(ne.x,fe.x),Ct=Math.min(ne.y,fe.y),ht=Math.max(ne.x,fe.x)-G,Bt=Math.max(ne.y,fe.y)-Ct,Ot={x:G+ht/2,y:Ct+Bt/2},vt=oe();if(!vt)return;const qt=Ot.x-vt.centerX,ie=Ot.y-vt.centerY,$e=vt.width*.65,we=vt.height*.65,Vn=Math.abs(qt),Ln=Math.abs(ie),Ii=Vn<=$e&&Ln<=we,zi=ht/vt.width,Da=Bt/vt.height,$i=zi>=.25&&zi<=2.5&&Da>=.25&&Da<=2.5,Tn=Ii&&$i,nn=vt.width*2,hn=vt.height*2;let Ei=qt,Fi=ie;const qr=Math.max(-nn,Math.min(nn,Ei)),Ua=Math.max(-hn,Math.min(hn,Fi)),Na=performance.now();if(Na-te.current>35&&(te.current=Na,N({x:qr,y:Ua,scale:$i?zi:1,detected:!0,roll:yt,yaw:ot,pitch:Lt})),Tn){X(!0),Ft.current||(Ft.current=Date.now());const Me=Date.now()-Ft.current,On=Math.min(100,Math.round(Me/1500*100));z(On),dt(`✅ [人像已成功在框框內]！保持別動 ${On}% ...`),Me>=1500&&Ie()}else{X(!1),Ft.current=null,z(0);let Me="";if(Ii)$i||(Me=zi<.45?"請走近一點鏡頭":"請稍微站遠一點");else{const On=Ot.x<vt.centerX?"請稍往右移":"請稍往左移",Pn=Ot.y<vt.centerY?"請稍往下移":"請稍往上移";Me=Vn>Ln*1.5?On:Pn}dt(`❌ 提示：人像尚未對齊！(${Me||"請將臉部放入對齊框中"})`)}},[s,Qe,oe,Ie]);const dn=async()=>{l(null),e(Ce.LOADING),dt("⌛ 正在授權喚醒相機...");try{const bt=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280,min:320},height:{ideal:1280,min:240}},audio:!1});if(Tt.current=bt,gt.current){gt.current.srcObject=bt,gt.current.setAttribute("playsinline","true"),gt.current.setAttribute("autoplay","true"),gt.current.setAttribute("muted","true");const Ht=gt.current.play();if(Ht!==void 0)try{await Ht}catch(St){console.warn("相機流播放被中斷或被瀏覽器阻止:",St)}}e(Ce.ACTIVE),dt("🎯 請將您的臉龐置於框線中心")}catch(bt){console.error("開啟相機失敗:",bt),e(Ce.ACTIVE),l(bt.message||"相機調用受限（若處於沙盒預覽中，請開新視窗授權）"),dt("⚠️ 已為您開通「靜態對位模式」，直接點擊下方藍色膠囊即可進入下一步！")}},W=()=>{if(Rt.current=!1,Et.current&&(cancelAnimationFrame(Et.current),Et.current=null),tt.current){try{tt.current.stop()}catch{}tt.current=null}Tt.current&&(Tt.current.getTracks().forEach(bt=>bt.stop()),Tt.current=null),gt.current&&(gt.current.srcObject=null),e(Ce.IDLE),ut(!1),X(!1),z(0),l(null),d(!1),dt(`點擊下方的「${M.buttonText||"查收這份禮物"}」開始體驗`)},Je=()=>{s===Ce.ACTIVE?W():s===Ce.STAGE2||s===Ce.STAGE3?dn():W()};return ee.useEffect(()=>()=>{if(tt.current)try{tt.current.stop()}catch{}Tt.current&&Tt.current.getTracks().forEach(bt=>bt.stop())},[]),ee.useEffect(()=>{const bt=At.current;if(bt)if(s===Ce.STAGE3)bt.play().catch(Ht=>{console.warn("最終變裝影片播放被中斷或受限制 (自適應重試):",Ht)});else try{bt.pause()}catch{}},[s]),wt.jsxs("div",{className:"h-[100dvh] w-full bg-[#fcf9f2] flex flex-col items-center justify-center font-sans overflow-hidden relative select-none",children:[wt.jsxs("div",{className:"absolute inset-0 opacity-60 pointer-events-none overflow-hidden",children:[wt.jsx("div",{className:"absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-amber-200/40 rounded-full blur-[130px]"}),wt.jsx("div",{className:"absolute bottom-[5%] right-[5%] w-[45%] h-[45%] bg-orange-100/30 rounded-full blur-[100px]"}),wt.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(44,40,36,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(44,40,36,0.025)_1px,transparent_1px)] bg-[size:32px_32px]"})]}),wt.jsxs("div",{id:"camera-container",ref:K,className:"w-full max-w-md h-[100dvh] md:h-[90vh] md:max-h-[850px] md:rounded-[36px] bg-[#fdfbf6] overflow-hidden shadow-[0_20px_50px_rgba(43,39,31,0.12)] border border-[#eaddc5]/60 relative z-10 flex flex-col",children:[wt.jsx("div",{className:"absolute inset-0 z-40 transition-opacity duration-1000 ease-in-out",style:{opacity:s===Ce.STAGE3?1:0},children:v?wt.jsx(rM,{isActive:s===Ce.STAGE3}):(()=>{const bt=F;return pe(bt)?wt.jsx("video",{ref:At,src:bt,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,onError:H,className:"w-full h-full object-contain"},bt):wt.jsx("img",{src:bt,onError:H,className:"w-full h-full object-contain",alt:"魔法變裝最終圖"},bt)})()}),wt.jsx("div",{className:"absolute inset-0 z-30 transition-opacity duration-1000 ease-in-out",style:{opacity:s===Ce.STAGE2?1:0},children:h?wt.jsx(aM,{config:M}):(()=>{const bt=V;return pe(bt)?wt.jsx("video",{src:bt,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,onError:Z,className:"w-full h-full object-contain"},bt):wt.jsx("img",{src:bt,onError:Z,className:"w-full h-full object-contain",alt:"魔法變裝結果圖"},bt)})()}),wt.jsxs("div",{className:"absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out",style:{opacity:s===Ce.ACTIVE||s===Ce.LOADING||s===Ce.ALIGNED?1:0,backgroundColor:"#fbf9f4"},children:[wt.jsx("div",{className:"absolute inset-0 bg-[#fbf9f4] pointer-events-none z-0"}),wt.jsx("div",{className:"absolute top-1/2 left-1/2 pointer-events-none select-none flex items-center justify-center z-10",style:{width:"200px",height:"200px",position:"absolute",top:b,left:C,transform:"translate(-50%, -50%)"},children:wt.jsx("div",{className:"flex items-center justify-center",children:wt.jsx("div",{className:"flex flex-col items-center justify-center relative",children:wt.jsx("img",{src:M.avatarUrl||"./assets/Y/Y0.png",referrerPolicy:"no-referrer",className:"w-[90px] h-[90px] object-contain drop-shadow-[0_4px_10px_rgba(110,95,70,0.25)]",alt:"3D 隱私保護替身",onError:bt=>{bt.currentTarget.src="./assets/Y/Y0.png"}})})})}),wt.jsx("video",{ref:gt,playsInline:!0,autoPlay:!0,muted:!0,crossOrigin:"anonymous",className:"absolute inset-0 w-full h-full object-cover pointer-events-none z-20",style:{opacity:.01}}),wt.jsx("div",{className:"absolute pointer-events-none transition-all duration-300 z-30",style:{top:b,left:C,width:y,height:x,borderRadius:D,transform:"translate(-50%, -50%)",boxShadow:"0 0 0 9999px rgba(251, 249, 244, 0.4)"}})]}),wt.jsx("div",{className:"absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000 ease-in-out",style:{opacity:s===Ce.IDLE||s===Ce.LOADING||s===Ce.ACTIVE?1:0},children:p?wt.jsx(iM,{config:M}):(()=>{const bt=U;return pe(bt)?wt.jsx("video",{src:bt,loop:!0,muted:!0,playsInline:!0,autoPlay:!0,onError:I,className:"w-full h-full object-contain"},bt):wt.jsx("img",{src:bt,onError:I,className:"w-full h-full object-contain",alt:"最初呈獻定位遮罩"},bt)})()}),wt.jsxs("div",{className:"absolute inset-0 z-50 flex flex-col justify-between p-6 pb-[calc(env(safe-area-inset-bottom)+20px)] pointer-events-none",children:[wt.jsx("div",{className:"flex-1 min-h-0 relative pointer-events-none w-full"}),s===Ce.IDLE&&wt.jsxs("div",{className:"absolute inset-0 z-[60] flex flex-col items-center justify-between p-8 bg-[#faf6ee]/98 animate-[fadeIn_0.5s_ease-out] pointer-events-auto",children:[wt.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-200/50 to-orange-100/30 rounded-full blur-[80px] pointer-events-none"}),wt.jsxs("div",{className:"w-full flex flex-col items-center text-center gap-2 mt-16 select-none relative z-10",children:[wt.jsx("div",{className:"p-3 bg-[#f5ecd5]/60 border border-[#dfc99b]/40 rounded-[24px] shadow-[0_12px_24px_rgba(223,201,155,0.2)] mb-3 animate-[bounce_3s_infinite]",children:wt.jsx(eM,{className:"w-6 h-6 text-amber-700"})}),wt.jsx("h1",{className:"font-display text-2xl font-black text-[#2d2824] tracking-[4px] uppercase break-words px-2 max-w-full drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]",children:M.title}),wt.jsx("p",{className:"text-[10px] text-amber-800 font-mono uppercase tracking-[3px] font-bold",children:M.subtitle})]}),wt.jsx("div",{className:"w-full flex justify-center py-10 relative z-10",children:wt.jsxs("button",{onClick:dn,className:"w-full max-w-[230px] py-3 px-5 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-sans text-xs font-bold tracking-[2.5px] uppercase rounded-full shadow-[0_12px_28px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-103 active:scale-97 flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer animate-[pulse_2.5s_infinite]",children:[wt.jsx(JS,{className:"w-3.5 h-3.5 fill-current text-white animate-pulse"}),M.buttonText," 🎁"]})})]}),wt.jsx("div",{className:"absolute top-[calc(env(safe-area-inset-top)+18px)] right-6 z-50 pointer-events-auto select-none",children:(s===Ce.ACTIVE||s===Ce.STAGE2||s===Ce.STAGE3)&&wt.jsx("button",{onClick:Je,className:"w-8 h-8 rounded-full bg-white/70 hover:bg-white/90 border border-neutral-200/50 flex items-center justify-center text-neutral-600 hover:text-neutral-950 shadow-sm transition-all active:scale-90 cursor-pointer",title:"返回上一級",children:wt.jsx(F_,{className:"w-4 h-4"})})}),(s===Ce.ACTIVE||s===Ce.LOADING)&&wt.jsx("div",{className:"absolute z-50 text-center pointer-events-none transition-all duration-300",style:{top:`calc(${b} - (${x} / 2) - 20px)`,left:"50%",transform:"translate(-50%, -100%)",width:"100%",maxWidth:"280px"},children:wt.jsx("p",{className:"text-[14px] font-sans text-white/75 font-semibold tracking-wide drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] leading-relaxed",children:M.guideTip||"「請將面部放入框線內，用於代入角色」"})}),wt.jsxs("div",{className:"w-full flex flex-col gap-3 pointer-events-auto mt-auto relative z-50 shrink-0",children:[s===Ce.ACTIVE&&wt.jsx("button",{onClick:Ie,className:"w-[82%] mx-auto py-2.5 bg-[#007aff] hover:bg-[#0066d6] text-white font-sans text-xs font-semibold tracking-wider rounded-full shadow-[0_4px_12px_rgba(0,122,255,0.2)] transition-all duration-200 active:scale-[0.98] active:opacity-90 flex items-center justify-center cursor-pointer pointer-events-auto border border-white/5",children:"我已代入角色，直接進入下一步"}),s===Ce.STAGE3&&wt.jsxs("button",{onClick:()=>d(!0),className:"w-[82%] mx-auto py-2.5 bg-[#007aff] hover:bg-[#0066d6] text-white font-sans text-xs font-semibold tracking-wider rounded-full shadow-[0_4px_12px_rgba(0,122,255,0.2)] transition-all duration-200 active:scale-[0.98] active:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer pointer-events-auto border border-white/5",children:[wt.jsx(KS,{className:"w-3.5 h-3.5 text-white"}),"查收明信片"]}),s===Ce.LOADING&&wt.jsxs("div",{className:"w-full py-4 bg-white/5 border border-white/10 text-white/85 font-sans text-xs rounded-2xl backdrop-blur-md flex items-center justify-center gap-2.5 shadow-lg",children:[wt.jsx(B_,{className:"w-4 h-4 animate-spin text-orange-400"}),"連鏡頭並載入人臉定位算法中..."]}),r&&wt.jsxs("div",{className:"p-3.5 bg-red-500/10 border border-red-500/25 rounded-2xl text-[10px] text-red-400 flex items-start gap-2 max-w-full",children:[wt.jsx(qS,{className:"w-3.5 h-3.5 shrink-0 mt-0.5"}),wt.jsxs("span",{children:[wt.jsx("strong",{children:"引導錯誤："}),r,"。",wt.jsx("br",{}),"請確認您在瀏覽器彈窗中允許了「相機授權」，若是在不支援 WebRTC 的 iframe 預覽中，點擊編輯器右上角 「在新分頁開啟 / Open in New Tab」即可解除權限限制！"]})]})]}),(s===Ce.ACTIVE||s===Ce.STAGE2||s===Ce.STAGE3)&&wt.jsx("div",{className:"w-full shrink-0 pointer-events-none select-none",style:{height:"env(safe-area-inset-bottom, 16px)"}})]}),wt.jsx(MA,{isOpen:u,onClose:()=>d(!1),config:M}),wt.jsx("div",{className:`absolute inset-0 z-50 pointer-events-none ${Qt?"animate-flash":"opacity-0"}`,style:{mixBlendMode:"screen"}})]})]})}FS.createRoot(document.getElementById("root")).render(wt.jsx(ee.StrictMode,{children:wt.jsx(yA,{})}));
