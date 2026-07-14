(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var U1={exports:{}},_0={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=Symbol.for("react.transitional.element"),rh=Symbol.for("react.fragment");function L1(e,a,t){var n=null;if(t!==void 0&&(n=""+t),a.key!==void 0&&(n=""+a.key),"key"in a){t={};for(var r in a)r!=="key"&&(t[r]=a[r])}else t=a;return a=t.ref,{$$typeof:nh,type:e,key:n,ref:a!==void 0?a:null,props:t}}_0.Fragment=rh;_0.jsx=L1;_0.jsxs=L1;U1.exports=_0;var o=U1.exports,H1={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=Symbol.for("react.transitional.element"),ih=Symbol.for("react.portal"),lh=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),oh=Symbol.for("react.profiler"),ch=Symbol.for("react.consumer"),uh=Symbol.for("react.context"),dh=Symbol.for("react.forward_ref"),mh=Symbol.for("react.suspense"),fh=Symbol.for("react.memo"),G1=Symbol.for("react.lazy"),ph=Symbol.for("react.activity"),xd=Symbol.iterator;function hh(e){return e===null||typeof e!="object"?null:(e=xd&&e[xd]||e["@@iterator"],typeof e=="function"?e:null)}var Q1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y1=Object.assign,V1={};function Ur(e,a,t){this.props=e,this.context=a,this.refs=V1,this.updater=t||Q1}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function X1(){}X1.prototype=Ur.prototype;function Lc(e,a,t){this.props=e,this.context=a,this.refs=V1,this.updater=t||Q1}var Hc=Lc.prototype=new X1;Hc.constructor=Lc;Y1(Hc,Ur.prototype);Hc.isPureReactComponent=!0;var Sd=Array.isArray;function zo(){}var we={H:null,A:null,T:null,S:null},Z1=Object.prototype.hasOwnProperty;function Gc(e,a,t){var n=t.ref;return{$$typeof:Uc,type:e,key:a,ref:n!==void 0?n:null,props:t}}function vh(e,a){return Gc(e.type,a,e.props)}function Qc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Uc}function gh(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return a[t]})}var zd=/\/+/g;function vs(e,a){return typeof e=="object"&&e!==null&&e.key!=null?gh(""+e.key):a.toString(36)}function bh(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(zo,zo):(e.status="pending",e.then(function(a){e.status==="pending"&&(e.status="fulfilled",e.value=a)},function(a){e.status==="pending"&&(e.status="rejected",e.reason=a)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function tr(e,a,t,n,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Uc:case ih:l=!0;break;case G1:return l=e._init,tr(l(e._payload),a,t,n,r)}}if(l)return r=r(e),l=n===""?"."+vs(e,0):n,Sd(r)?(t="",l!=null&&(t=l.replace(zd,"$&/")+"/"),tr(r,a,t,"",function(m){return m})):r!=null&&(Qc(r)&&(r=vh(r,t+(r.key==null||e&&e.key===r.key?"":(""+r.key).replace(zd,"$&/")+"/")+l)),a.push(r)),1;l=0;var s=n===""?".":n+":";if(Sd(e))for(var u=0;u<e.length;u++)n=e[u],i=s+vs(n,u),l+=tr(n,a,t,i,r);else if(u=hh(e),typeof u=="function")for(e=u.call(e),u=0;!(n=e.next()).done;)n=n.value,i=s+vs(n,u++),l+=tr(n,a,t,i,r);else if(i==="object"){if(typeof e.then=="function")return tr(bh(e),a,t,n,r);throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return l}function ul(e,a,t){if(e==null)return e;var n=[],r=0;return tr(e,n,"","",function(i){return a.call(t,i,r++)}),n}function yh(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var wd=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xh={map:ul,forEach:function(e,a,t){ul(e,function(){a.apply(this,arguments)},t)},count:function(e){var a=0;return ul(e,function(){a++}),a},toArray:function(e){return ul(e,function(a){return a})||[]},only:function(e){if(!Qc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Activity=ph;J.Children=xh;J.Component=Ur;J.Fragment=lh;J.Profiler=oh;J.PureComponent=Lc;J.StrictMode=sh;J.Suspense=mh;J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;J.__COMPILER_RUNTIME={__proto__:null,c:function(e){return we.H.useMemoCache(e)}};J.cache=function(e){return function(){return e.apply(null,arguments)}};J.cacheSignal=function(){return null};J.cloneElement=function(e,a,t){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=Y1({},e.props),r=e.key;if(a!=null)for(i in a.key!==void 0&&(r=""+a.key),a)!Z1.call(a,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&a.ref===void 0||(n[i]=a[i]);var i=arguments.length-2;if(i===1)n.children=t;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];n.children=l}return Gc(e.type,r,n)};J.createContext=function(e){return e={$$typeof:uh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ch,_context:e},e};J.createElement=function(e,a,t){var n,r={},i=null;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)Z1.call(a,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(r[n]=a[n]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)r[n]===void 0&&(r[n]=l[n]);return Gc(e,i,r)};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:dh,render:e}};J.isValidElement=Qc;J.lazy=function(e){return{$$typeof:G1,_payload:{_status:-1,_result:e},_init:yh}};J.memo=function(e,a){return{$$typeof:fh,type:e,compare:a===void 0?null:a}};J.startTransition=function(e){var a=we.T,t={};we.T=t;try{var n=e(),r=we.S;r!==null&&r(t,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(zo,wd)}catch(i){wd(i)}finally{a!==null&&t.types!==null&&(a.types=t.types),we.T=a}};J.unstable_useCacheRefresh=function(){return we.H.useCacheRefresh()};J.use=function(e){return we.H.use(e)};J.useActionState=function(e,a,t){return we.H.useActionState(e,a,t)};J.useCallback=function(e,a){return we.H.useCallback(e,a)};J.useContext=function(e){return we.H.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e,a){return we.H.useDeferredValue(e,a)};J.useEffect=function(e,a){return we.H.useEffect(e,a)};J.useEffectEvent=function(e){return we.H.useEffectEvent(e)};J.useId=function(){return we.H.useId()};J.useImperativeHandle=function(e,a,t){return we.H.useImperativeHandle(e,a,t)};J.useInsertionEffect=function(e,a){return we.H.useInsertionEffect(e,a)};J.useLayoutEffect=function(e,a){return we.H.useLayoutEffect(e,a)};J.useMemo=function(e,a){return we.H.useMemo(e,a)};J.useOptimistic=function(e,a){return we.H.useOptimistic(e,a)};J.useReducer=function(e,a,t){return we.H.useReducer(e,a,t)};J.useRef=function(e){return we.H.useRef(e)};J.useState=function(e){return we.H.useState(e)};J.useSyncExternalStore=function(e,a,t){return we.H.useSyncExternalStore(e,a,t)};J.useTransition=function(){return we.H.useTransition()};J.version="19.2.0";H1.exports=J;var ja=H1.exports,F1={exports:{}},O0={},K1={exports:{}},J1={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(R,K){var Z=R.length;R.push(K);e:for(;0<Z;){var xe=Z-1>>>1,pe=R[xe];if(0<r(pe,K))R[xe]=K,R[Z]=pe,Z=xe;else break e}}function t(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var K=R[0],Z=R.pop();if(Z!==K){R[0]=Z;e:for(var xe=0,pe=R.length,xa=pe>>>1;xe<xa;){var tt=2*(xe+1)-1,na=R[tt],Ba=tt+1,An=R[Ba];if(0>r(na,Z))Ba<pe&&0>r(An,na)?(R[xe]=An,R[Ba]=Z,xe=Ba):(R[xe]=na,R[tt]=Z,xe=tt);else if(Ba<pe&&0>r(An,Z))R[xe]=An,R[Ba]=Z,xe=Ba;else break e}}return K}function r(R,K){var Z=R.sortIndex-K.sortIndex;return Z!==0?Z:R.id-K.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],m=[],p=1,g=null,v=3,b=!1,A=!1,N=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function j(R){for(var K=t(m);K!==null;){if(K.callback===null)n(m);else if(K.startTime<=R)n(m),K.sortIndex=K.expirationTime,a(u,K);else break;K=t(m)}}function $(R){if(N=!1,j(R),!A)if(t(u)!==null)A=!0,B||(B=!0,oe());else{var K=t(m);K!==null&&ta($,K.startTime-R)}}var B=!1,C=-1,U=5,L=-1;function Y(){return M?!0:!(e.unstable_now()-L<U)}function be(){if(M=!1,B){var R=e.unstable_now();L=R;var K=!0;try{e:{A=!1,N&&(N=!1,y(C),C=-1),b=!0;var Z=v;try{a:{for(j(R),g=t(u);g!==null&&!(g.expirationTime>R&&Y());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,v=g.priorityLevel;var pe=xe(g.expirationTime<=R);if(R=e.unstable_now(),typeof pe=="function"){g.callback=pe,j(R),K=!0;break a}g===t(u)&&n(u),j(R)}else n(u);g=t(u)}if(g!==null)K=!0;else{var xa=t(m);xa!==null&&ta($,xa.startTime-R),K=!1}}break e}finally{g=null,v=Z,b=!1}K=void 0}}finally{K?oe():B=!1}}}var oe;if(typeof w=="function")oe=function(){w(be)};else if(typeof MessageChannel<"u"){var Gt=new MessageChannel,Oa=Gt.port2;Gt.port1.onmessage=be,oe=function(){Oa.postMessage(null)}}else oe=function(){x(be,0)};function ta(R,K){C=x(function(){R(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(R){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Z=v;v=K;try{return R()}finally{v=Z}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(R,K){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Z=v;v=R;try{return K()}finally{v=Z}},e.unstable_scheduleCallback=function(R,K,Z){var xe=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xe+Z:xe):Z=xe,R){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Z+pe,R={id:p++,callback:K,priorityLevel:R,startTime:Z,expirationTime:pe,sortIndex:-1},Z>xe?(R.sortIndex=Z,a(m,R),t(u)===null&&R===t(m)&&(N?(y(C),C=-1):N=!0,ta($,Z-xe))):(R.sortIndex=pe,a(u,R),A||b||(A=!0,B||(B=!0,oe()))),R},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(R){var K=v;return function(){var Z=v;v=K;try{return R.apply(this,arguments)}finally{v=Z}}}})(J1);K1.exports=J1;var Sh=K1.exports,P1={exports:{}},ca={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh=ja;function I1(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Qt(){}var sa={d:{f:Qt,r:function(){throw Error(I1(522))},D:Qt,C:Qt,L:Qt,m:Qt,X:Qt,S:Qt,M:Qt},p:0,findDOMNode:null},wh=Symbol.for("react.portal");function Eh(e,a,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wh,key:n==null?null:""+n,children:e,containerInfo:a,implementation:t}}var di=zh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B0(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}ca.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=sa;ca.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(I1(299));return Eh(e,a,null,t)};ca.flushSync=function(e){var a=di.T,t=sa.p;try{if(di.T=null,sa.p=2,e)return e()}finally{di.T=a,sa.p=t,sa.d.f()}};ca.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,sa.d.C(e,a))};ca.prefetchDNS=function(e){typeof e=="string"&&sa.d.D(e)};ca.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var t=a.as,n=B0(t,a.crossOrigin),r=typeof a.integrity=="string"?a.integrity:void 0,i=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;t==="style"?sa.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:n,integrity:r,fetchPriority:i}):t==="script"&&sa.d.X(e,{crossOrigin:n,integrity:r,fetchPriority:i,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};ca.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var t=B0(a.as,a.crossOrigin);sa.d.M(e,{crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&sa.d.M(e)};ca.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var t=a.as,n=B0(t,a.crossOrigin);sa.d.L(e,t,{crossOrigin:n,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};ca.preloadModule=function(e,a){if(typeof e=="string")if(a){var t=B0(a.as,a.crossOrigin);sa.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else sa.d.m(e)};ca.requestFormReset=function(e){sa.d.r(e)};ca.unstable_batchedUpdates=function(e,a){return e(a)};ca.useFormState=function(e,a,t){return di.H.useFormState(e,a,t)};ca.useFormStatus=function(){return di.H.useHostTransitionStatus()};ca.version="19.2.0";function W1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W1)}catch(e){console.error(e)}}W1(),P1.exports=ca;var jh=P1.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=Sh,ef=ja,Ah=jh;function q(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function af(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vi(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function tf(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function nf(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Ed(e){if(Vi(e)!==e)throw Error(q(188))}function Nh(e){var a=e.alternate;if(!a){if(a=Vi(e),a===null)throw Error(q(188));return a!==e?null:e}for(var t=e,n=a;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(n=r.return,n!==null){t=n;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Ed(r),e;if(i===n)return Ed(r),a;i=i.sibling}throw Error(q(188))}if(t.return!==n.return)t=r,n=i;else{for(var l=!1,s=r.child;s;){if(s===t){l=!0,t=r,n=i;break}if(s===n){l=!0,n=r,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,n=r;break}if(s===n){l=!0,n=i,t=r;break}s=s.sibling}if(!l)throw Error(q(189))}}if(t.alternate!==n)throw Error(q(190))}if(t.tag!==3)throw Error(q(188));return t.stateNode.current===t?e:a}function rf(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=rf(e),a!==null)return a;e=e.sibling}return null}var Ee=Object.assign,qh=Symbol.for("react.element"),dl=Symbol.for("react.transitional.element"),ii=Symbol.for("react.portal"),ir=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),wo=Symbol.for("react.profiler"),sf=Symbol.for("react.consumer"),jt=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Eo=Symbol.for("react.suspense"),jo=Symbol.for("react.suspense_list"),Vc=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Ao=Symbol.for("react.activity"),Mh=Symbol.for("react.memo_cache_sentinel"),jd=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=jd&&e[jd]||e["@@iterator"],typeof e=="function"?e:null)}var Th=Symbol.for("react.client.reference");function No(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Th?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ir:return"Fragment";case wo:return"Profiler";case lf:return"StrictMode";case Eo:return"Suspense";case jo:return"SuspenseList";case Ao:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ii:return"Portal";case jt:return e.displayName||"Context";case sf:return(e._context.displayName||"Context")+".Consumer";case Yc:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vc:return a=e.displayName||null,a!==null?a:No(e.type)||"Memo";case Xt:a=e._payload,e=e._init;try{return No(e(a))}catch{}}return null}var li=Array.isArray,X=ef.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=Ah.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_n={pending:!1,data:null,method:null,action:null},qo=[],lr=-1;function ut(e){return{current:e}}function Ke(e){0>lr||(e.current=qo[lr],qo[lr]=null,lr--)}function ye(e,a){lr++,qo[lr]=e.current,e.current=a}var ot=ut(null),Ai=ut(null),rn=ut(null),e0=ut(null);function a0(e,a){switch(ye(rn,a),ye(Ai,e),ye(ot,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Cm(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Cm(a),e=N2(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ke(ot),ye(ot,e)}function jr(){Ke(ot),Ke(Ai),Ke(rn)}function Mo(e){e.memoizedState!==null&&ye(e0,e);var a=ot.current,t=N2(a,e.type);a!==t&&(ye(Ai,e),ye(ot,t))}function t0(e){Ai.current===e&&(Ke(ot),Ke(Ai)),e0.current===e&&(Ke(e0),Bi._currentValue=_n)}var gs,Ad;function Tn(e){if(gs===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);gs=a&&a[1]||"",Ad=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gs+e+Ad}var bs=!1;function ys(e,a){if(!e||bs)return"";bs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(b){var v=b}Reflect.construct(e,[],g)}else{try{g.call()}catch(b){v=b}e.call(g.prototype)}}else{try{throw Error()}catch(b){v=b}(g=e())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(b){if(b&&v&&typeof b.stack=="string")return[b.stack,v.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),l=i[0],s=i[1];if(l&&s){var u=l.split(`
`),m=s.split(`
`);for(r=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;r<m.length&&!m[r].includes("DetermineComponentFrameRoot");)r++;if(n===u.length||r===m.length)for(n=u.length-1,r=m.length-1;1<=n&&0<=r&&u[n]!==m[r];)r--;for(;1<=n&&0<=r;n--,r--)if(u[n]!==m[r]){if(n!==1||r!==1)do if(n--,r--,0>r||u[n]!==m[r]){var p=`
`+u[n].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=n&&0<=r);break}}}finally{bs=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Tn(t):""}function Ch(e,a){switch(e.tag){case 26:case 27:case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return e.child!==a&&a!==null?Tn("Suspense Fallback"):Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 15:return ys(e.type,!1);case 11:return ys(e.type.render,!1);case 1:return ys(e.type,!0);case 31:return Tn("Activity");default:return""}}function Nd(e){try{var a="",t=null;do a+=Ch(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var To=Object.prototype.hasOwnProperty,Xc=Ve.unstable_scheduleCallback,xs=Ve.unstable_cancelCallback,Dh=Ve.unstable_shouldYield,$h=Ve.unstable_requestPaint,Aa=Ve.unstable_now,kh=Ve.unstable_getCurrentPriorityLevel,of=Ve.unstable_ImmediatePriority,cf=Ve.unstable_UserBlockingPriority,n0=Ve.unstable_NormalPriority,_h=Ve.unstable_LowPriority,uf=Ve.unstable_IdlePriority,Oh=Ve.log,Bh=Ve.unstable_setDisableYieldValue,Xi=null,Na=null;function It(e){if(typeof Oh=="function"&&Bh(e),Na&&typeof Na.setStrictMode=="function")try{Na.setStrictMode(Xi,e)}catch{}}var qa=Math.clz32?Math.clz32:Lh,Rh=Math.log,Uh=Math.LN2;function Lh(e){return e>>>=0,e===0?32:31-(Rh(e)/Uh|0)|0}var ml=256,fl=262144,pl=4194304;function Cn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function R0(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~i,n!==0?r=Cn(n):(l&=s,l!==0?r=Cn(l):t||(t=s&~e,t!==0&&(r=Cn(t))))):(s=n&~i,s!==0?r=Cn(s):l!==0?r=Cn(l):t||(t=n&~e,t!==0&&(r=Cn(t)))),r===0?0:a!==0&&a!==r&&!(a&i)&&(i=r&-r,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:r}function Zi(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Hh(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function df(){var e=pl;return pl<<=1,!(pl&62914560)&&(pl=4194304),e}function Ss(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Fi(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Gh(e,a,t,n,r,i){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,u=e.expirationTimes,m=e.hiddenUpdates;for(t=l&~t;0<t;){var p=31-qa(t),g=1<<p;s[p]=0,u[p]=-1;var v=m[p];if(v!==null)for(m[p]=null,p=0;p<v.length;p++){var b=v[p];b!==null&&(b.lane&=-536870913)}t&=~g}n!==0&&mf(e,n,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(l&~a))}function mf(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-qa(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function ff(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-qa(t),r=1<<n;r&a|e[n]&a&&(e[n]|=a),t&=~r}}function pf(e,a){var t=a&-a;return t=t&42?1:Zc(t),t&(e.suspendedLanes|a)?0:t}function Zc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fc(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function hf(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:R2(e.type))}function qd(e,a){var t=le.p;try{return le.p=e,a()}finally{le.p=t}}var wn=Math.random().toString(36).slice(2),Pe="__reactFiber$"+wn,ba="__reactProps$"+wn,Lr="__reactContainer$"+wn,Co="__reactEvents$"+wn,Qh="__reactListeners$"+wn,Yh="__reactHandles$"+wn,Md="__reactResources$"+wn,Ki="__reactMarker$"+wn;function Kc(e){delete e[Pe],delete e[ba],delete e[Co],delete e[Qh],delete e[Yh]}function sr(e){var a=e[Pe];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Lr]||t[Pe]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Om(e);e!==null;){if(t=e[Pe])return t;e=Om(e)}return a}e=t,t=e.parentNode}return null}function Hr(e){if(e=e[Pe]||e[Lr]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function si(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(q(33))}function gr(e){var a=e[Md];return a||(a=e[Md]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Fe(e){e[Ki]=!0}var vf=new Set,gf={};function Vn(e,a){Ar(e,a),Ar(e+"Capture",a)}function Ar(e,a){for(gf[e]=a,e=0;e<a.length;e++)vf.add(a[e])}var Vh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Td={},Cd={};function Xh(e){return To.call(Cd,e)?!0:To.call(Td,e)?!1:Vh.test(e)?Cd[e]=!0:(Td[e]=!0,!1)}function Bl(e,a,t){if(Xh(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function hl(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function vt(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function Ua(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bf(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Zh(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return r.call(this)},set:function(l){t=""+l,i.call(this,l)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Do(e){if(!e._valueTracker){var a=bf(e)?"checked":"value";e._valueTracker=Zh(e,a,""+e[a])}}function yf(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=bf(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function r0(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fh=/[\n"\\]/g;function Ga(e){return e.replace(Fh,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function $o(e,a,t,n,r,i,l,s){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ua(a)):e.value!==""+Ua(a)&&(e.value=""+Ua(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?ko(e,l,Ua(a)):t!=null?ko(e,l,Ua(t)):n!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ua(s):e.removeAttribute("name")}function xf(e,a,t,n,r,i,l,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||a!=null)){Do(e);return}t=t!=null?""+Ua(t):"",a=a!=null?""+Ua(a):t,s||a===e.value||(e.value=a),e.defaultValue=a}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),Do(e)}function ko(e,a,t){a==="number"&&r0(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function br(e,a,t,n){if(e=e.options,a){a={};for(var r=0;r<t.length;r++)a["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=a.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Ua(t),a=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}a!==null||e[r].disabled||(a=e[r])}a!==null&&(a.selected=!0)}}function Sf(e,a,t){if(a!=null&&(a=""+Ua(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ua(t):""}function zf(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(q(92));if(li(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Ua(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),Do(e)}function Nr(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Kh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dd(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||Kh.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function wf(e,a,t){if(a!=null&&typeof a!="object")throw Error(q(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in a)n=a[r],a.hasOwnProperty(r)&&t[r]!==n&&Dd(e,r,n)}else for(var i in a)a.hasOwnProperty(i)&&Dd(e,i,a[i])}function Jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ph=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return Ph.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function At(){}var _o=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var or=null,yr=null;function $d(e){var a=Hr(e);if(a&&(e=a.stateNode)){var t=e[ba]||null;e:switch(e=a.stateNode,a.type){case"input":if($o(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ga(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var r=n[ba]||null;if(!r)throw Error(q(90));$o(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&yf(n)}break e;case"textarea":Sf(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&br(e,!!t.multiple,a,!1)}}}var zs=!1;function Ef(e,a,t){if(zs)return e(a,t);zs=!0;try{var n=e(a);return n}finally{if(zs=!1,(or!==null||yr!==null)&&(J0(),or&&(a=or,e=yr,yr=or=null,$d(a),e)))for(a=0;a<e.length;a++)$d(e[a])}}function Ni(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ba]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(q(231,a,typeof t));return t}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=!1;if(Dt)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Oo=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Oo=!1}var Wt=null,Ic=null,Ul=null;function jf(){if(Ul)return Ul;var e,a=Ic,t=a.length,n,r="value"in Wt?Wt.value:Wt.textContent,i=r.length;for(e=0;e<t&&a[e]===r[e];e++);var l=t-e;for(n=1;n<=l&&a[t-n]===r[i-n];n++);return Ul=r.slice(e,1<n?1-n:void 0)}function Ll(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function kd(){return!1}function ya(e){function a(t,n,r,i,l){this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vl:kd,this.isPropagationStopped=kd,this}return Ee(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),a}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},U0=ya(Xn),Ji=Ee({},Xn,{view:0,detail:0}),Ih=ya(Ji),ws,Es,Wr,L0=Ee({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(ws=e.screenX-Wr.screenX,Es=e.screenY-Wr.screenY):Es=ws=0,Wr=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:Es}}),_d=ya(L0),Wh=Ee({},L0,{dataTransfer:0}),e5=ya(Wh),a5=Ee({},Ji,{relatedTarget:0}),js=ya(a5),t5=Ee({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),n5=ya(t5),r5=Ee({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i5=ya(r5),l5=Ee({},Xn,{data:0}),Od=ya(l5),s5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u5(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=c5[e])?!!a[e]:!1}function Wc(){return u5}var d5=Ee({},Ji,{key:function(e){if(e.key){var a=s5[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?o5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?Ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m5=ya(d5),f5=Ee({},L0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=ya(f5),p5=Ee({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),h5=ya(p5),v5=Ee({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),g5=ya(v5),b5=Ee({},L0,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y5=ya(b5),x5=Ee({},Xn,{newState:0,oldState:0}),S5=ya(x5),z5=[9,13,27,32],eu=Dt&&"CompositionEvent"in window,mi=null;Dt&&"documentMode"in document&&(mi=document.documentMode);var w5=Dt&&"TextEvent"in window&&!mi,Af=Dt&&(!eu||mi&&8<mi&&11>=mi),Rd=" ",Ud=!1;function Nf(e,a){switch(e){case"keyup":return z5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function E5(e,a){switch(e){case"compositionend":return qf(a);case"keypress":return a.which!==32?null:(Ud=!0,Rd);case"textInput":return e=a.data,e===Rd&&Ud?null:e;default:return null}}function j5(e,a){if(cr)return e==="compositionend"||!eu&&Nf(e,a)?(e=jf(),Ul=Ic=Wt=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Af&&a.locale!=="ko"?null:a.data;default:return null}}var A5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!A5[e.type]:a==="textarea"}function Mf(e,a,t,n){or?yr?yr.push(n):yr=[n]:or=n,a=z0(a,"onChange"),0<a.length&&(t=new U0("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var fi=null,qi=null;function N5(e){E2(e,0)}function H0(e){var a=si(e);if(yf(a))return e}function Hd(e,a){if(e==="change")return a}var Tf=!1;if(Dt){var As;if(Dt){var Ns="oninput"in document;if(!Ns){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Ns=typeof Gd.oninput=="function"}As=Ns}else As=!1;Tf=As&&(!document.documentMode||9<document.documentMode)}function Qd(){fi&&(fi.detachEvent("onpropertychange",Cf),qi=fi=null)}function Cf(e){if(e.propertyName==="value"&&H0(qi)){var a=[];Mf(a,qi,e,Pc(e)),Ef(N5,a)}}function q5(e,a,t){e==="focusin"?(Qd(),fi=a,qi=t,fi.attachEvent("onpropertychange",Cf)):e==="focusout"&&Qd()}function M5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return H0(qi)}function T5(e,a){if(e==="click")return H0(a)}function C5(e,a){if(e==="input"||e==="change")return H0(a)}function D5(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ca=typeof Object.is=="function"?Object.is:D5;function Mi(e,a){if(Ca(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var r=t[n];if(!To.call(a,r)||!Ca(e[r],a[r]))return!1}return!0}function Yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,a){var t=Yd(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Yd(t)}}function Df(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Df(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function $f(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=r0(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=r0(e.document)}return a}function au(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var $5=Dt&&"documentMode"in document&&11>=document.documentMode,ur=null,Bo=null,pi=null,Ro=!1;function Xd(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ro||ur==null||ur!==r0(n)||(n=ur,"selectionStart"in n&&au(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),pi&&Mi(pi,n)||(pi=n,n=z0(Bo,"onSelect"),0<n.length&&(a=new U0("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=ur)))}function Nn(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var dr={animationend:Nn("Animation","AnimationEnd"),animationiteration:Nn("Animation","AnimationIteration"),animationstart:Nn("Animation","AnimationStart"),transitionrun:Nn("Transition","TransitionRun"),transitionstart:Nn("Transition","TransitionStart"),transitioncancel:Nn("Transition","TransitionCancel"),transitionend:Nn("Transition","TransitionEnd")},qs={},kf={};Dt&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Zn(e){if(qs[e])return qs[e];if(!dr[e])return e;var a=dr[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in kf)return qs[e]=a[t];return e}var _f=Zn("animationend"),Of=Zn("animationiteration"),Bf=Zn("animationstart"),k5=Zn("transitionrun"),_5=Zn("transitionstart"),O5=Zn("transitioncancel"),Rf=Zn("transitionend"),Uf=new Map,Uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uo.push("scrollEnd");function et(e,a){Uf.set(e,a),Vn(a,[e])}var i0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ra=[],mr=0,tu=0;function G0(){for(var e=mr,a=tu=mr=0;a<e;){var t=Ra[a];Ra[a++]=null;var n=Ra[a];Ra[a++]=null;var r=Ra[a];Ra[a++]=null;var i=Ra[a];if(Ra[a++]=null,n!==null&&r!==null){var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}i!==0&&Lf(t,r,i)}}function Q0(e,a,t,n){Ra[mr++]=e,Ra[mr++]=a,Ra[mr++]=t,Ra[mr++]=n,tu|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function nu(e,a,t,n){return Q0(e,a,t,n),l0(e)}function Fn(e,a){return Q0(e,null,null,a),l0(e)}function Lf(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var r=!1,i=e.return;i!==null;)i.childLanes|=t,n=i.alternate,n!==null&&(n.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&a!==null&&(r=31-qa(t),e=i.hiddenUpdates,n=e[r],n===null?e[r]=[a]:n.push(a),a.lane=t|536870912),i):null}function l0(e){if(50<wi)throw wi=0,lc=null,Error(q(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var fr={};function B5(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wa(e,a,t,n){return new B5(e,a,t,n)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,a){var t=e.alternate;return t===null?(t=wa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Hf(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Hl(e,a,t,n,r,i){var l=0;if(n=e,typeof e=="function")ru(e)&&(l=1);else if(typeof e=="string")l=G3(e,t,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ao:return e=wa(31,t,a,r),e.elementType=Ao,e.lanes=i,e;case ir:return On(t.children,r,i,a);case lf:l=8,r|=24;break;case wo:return e=wa(12,t,a,r|2),e.elementType=wo,e.lanes=i,e;case Eo:return e=wa(13,t,a,r),e.elementType=Eo,e.lanes=i,e;case jo:return e=wa(19,t,a,r),e.elementType=jo,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jt:l=10;break e;case sf:l=9;break e;case Yc:l=11;break e;case Vc:l=14;break e;case Xt:l=16,n=null;break e}l=29,t=Error(q(130,e===null?"null":typeof e,"")),n=null}return a=wa(l,t,a,r),a.elementType=e,a.type=n,a.lanes=i,a}function On(e,a,t,n){return e=wa(7,e,n,a),e.lanes=t,e}function Ms(e,a,t){return e=wa(6,e,null,a),e.lanes=t,e}function Gf(e){var a=wa(18,null,null,0);return a.stateNode=e,a}function Ts(e,a,t){return a=wa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Zd=new WeakMap;function Qa(e,a){if(typeof e=="object"&&e!==null){var t=Zd.get(e);return t!==void 0?t:(a={value:e,source:a,stack:Nd(a)},Zd.set(e,a),a)}return{value:e,source:a,stack:Nd(a)}}var pr=[],hr=0,s0=null,Ti=0,La=[],Ha=0,pn=null,rt=1,it="";function zt(e,a){pr[hr++]=Ti,pr[hr++]=s0,s0=e,Ti=a}function Qf(e,a,t){La[Ha++]=rt,La[Ha++]=it,La[Ha++]=pn,pn=e;var n=rt;e=it;var r=32-qa(n)-1;n&=~(1<<r),t+=1;var i=32-qa(a)+r;if(30<i){var l=r-r%5;i=(n&(1<<l)-1).toString(32),n>>=l,r-=l,rt=1<<32-qa(a)+r|t<<r|n,it=i+e}else rt=1<<i|t<<r|n,it=e}function iu(e){e.return!==null&&(zt(e,1),Qf(e,1,0))}function lu(e){for(;e===s0;)s0=pr[--hr],pr[hr]=null,Ti=pr[--hr],pr[hr]=null;for(;e===pn;)pn=La[--Ha],La[Ha]=null,it=La[--Ha],La[Ha]=null,rt=La[--Ha],La[Ha]=null}function Yf(e,a){La[Ha++]=rt,La[Ha++]=it,La[Ha++]=pn,rt=a.id,it=a.overflow,pn=e}var Ie=null,ze=null,te=!1,ln=null,Ya=!1,Lo=Error(q(519));function hn(e){var a=Error(q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ci(Qa(a,e)),Lo}function Fd(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[Pe]=e,a[ba]=n,t){case"dialog":W("cancel",a),W("close",a);break;case"iframe":case"object":case"embed":W("load",a);break;case"video":case"audio":for(t=0;t<_i.length;t++)W(_i[t],a);break;case"source":W("error",a);break;case"img":case"image":case"link":W("error",a),W("load",a);break;case"details":W("toggle",a);break;case"input":W("invalid",a),xf(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":W("invalid",a);break;case"textarea":W("invalid",a),zf(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||A2(a.textContent,t)?(n.popover!=null&&(W("beforetoggle",a),W("toggle",a)),n.onScroll!=null&&W("scroll",a),n.onScrollEnd!=null&&W("scrollend",a),n.onClick!=null&&(a.onclick=At),a=!0):a=!1,a||hn(e,!0)}function Kd(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Ya=!1;return;case 27:case 3:Ya=!0;return;default:Ie=Ie.return}}function Wn(e){if(e!==Ie)return!1;if(!te)return Kd(e),te=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||dc(e.type,e.memoizedProps)),t=!t),t&&ze&&hn(e),Kd(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));ze=_m(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));ze=_m(e)}else a===27?(a=ze,En(e.type)?(e=hc,hc=null,ze=e):ze=a):ze=Ie?Za(e.stateNode.nextSibling):null;return!0}function Ln(){ze=Ie=null,te=!1}function Cs(){var e=ln;return e!==null&&(pa===null?pa=e:pa.push.apply(pa,e),ln=null),e}function Ci(e){ln===null?ln=[e]:ln.push(e)}var Ho=ut(null),Kn=null,Nt=null;function Ft(e,a,t){ye(Ho,a._currentValue),a._currentValue=t}function Mt(e){e._currentValue=Ho.current,Ke(Ho)}function Go(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Qo(e,a,t,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var l=r.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=r;for(var u=0;u<a.length;u++)if(s.context===a[u]){i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),Go(i.return,t,e),n||(l=null);break e}i=s.next}}else if(r.tag===18){if(l=r.return,l===null)throw Error(q(341));l.lanes|=t,i=l.alternate,i!==null&&(i.lanes|=t),Go(l,t,e),l=null}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===e){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}}function Gr(e,a,t,n){e=null;for(var r=a,i=!1;r!==null;){if(!i){if(r.flags&524288)i=!0;else if(r.flags&262144)break}if(r.tag===10){var l=r.alternate;if(l===null)throw Error(q(387));if(l=l.memoizedProps,l!==null){var s=r.type;Ca(r.pendingProps.value,l.value)||(e!==null?e.push(s):e=[s])}}else if(r===e0.current){if(l=r.alternate,l===null)throw Error(q(387));l.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Bi):e=[Bi])}r=r.return}e!==null&&Qo(a,e,t,n),a.flags|=262144}function o0(e){for(e=e.firstContext;e!==null;){if(!Ca(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hn(e){Kn=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Vf(Kn,e)}function gl(e,a){return Kn===null&&Hn(e),Vf(e,a)}function Vf(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Nt===null){if(e===null)throw Error(q(308));Nt=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Nt=Nt.next=a;return t}var R5=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},U5=Ve.unstable_scheduleCallback,L5=Ve.unstable_NormalPriority,Re={$$typeof:jt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function su(){return{controller:new R5,data:new Map,refCount:0}}function Pi(e){e.refCount--,e.refCount===0&&U5(L5,function(){e.controller.abort()})}var hi=null,Yo=0,qr=0,xr=null;function H5(e,a){if(hi===null){var t=hi=[];Yo=0,qr=Du(),xr={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Yo++,a.then(Jd,Jd),a}function Jd(){if(--Yo===0&&hi!==null){xr!==null&&(xr.status="fulfilled");var e=hi;hi=null,qr=0,xr=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function G5(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var r=0;r<t.length;r++)(0,t[r])(a)},function(r){for(n.status="rejected",n.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),n}var Pd=X.S;X.S=function(e,a){i2=Aa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&H5(e,a),Pd!==null&&Pd(e,a)};var Bn=ut(null);function ou(){var e=Bn.current;return e!==null?e:ve.pooledCache}function Gl(e,a){a===null?ye(Bn,Bn.current):ye(Bn,a.pool)}function Xf(){var e=ou();return e===null?null:{parent:Re._currentValue,pool:e}}var Qr=Error(q(460)),cu=Error(q(474)),Y0=Error(q(542)),c0={then:function(){}};function Id(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zf(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(At,At),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,em(e),e;default:if(typeof a.status=="string")a.then(At,At);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(q(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var r=a;r.status="fulfilled",r.value=n}},function(n){if(a.status==="pending"){var r=a;r.status="rejected",r.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,em(e),e}throw Rn=a,Qr}}function Dn(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Rn=t,Qr):t}}var Rn=null;function Wd(){if(Rn===null)throw Error(q(459));var e=Rn;return Rn=null,e}function em(e){if(e===Qr||e===Y0)throw Error(q(483))}var Sr=null,Di=0;function bl(e){var a=Di;return Di+=1,Sr===null&&(Sr=[]),Zf(Sr,e,a)}function ei(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function yl(e,a){throw a.$$typeof===qh?Error(q(525)):(e=Object.prototype.toString.call(a),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Ff(e){function a(x,y){if(e){var w=x.deletions;w===null?(x.deletions=[y],x.flags|=16):w.push(y)}}function t(x,y){if(!e)return null;for(;y!==null;)a(x,y),y=y.sibling;return null}function n(x){for(var y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function r(x,y){return x=qt(x,y),x.index=0,x.sibling=null,x}function i(x,y,w){return x.index=w,e?(w=x.alternate,w!==null?(w=w.index,w<y?(x.flags|=67108866,y):w):(x.flags|=67108866,y)):(x.flags|=1048576,y)}function l(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function s(x,y,w,j){return y===null||y.tag!==6?(y=Ms(w,x.mode,j),y.return=x,y):(y=r(y,w),y.return=x,y)}function u(x,y,w,j){var $=w.type;return $===ir?p(x,y,w.props.children,j,w.key):y!==null&&(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Xt&&Dn($)===y.type)?(y=r(y,w.props),ei(y,w),y.return=x,y):(y=Hl(w.type,w.key,w.props,null,x.mode,j),ei(y,w),y.return=x,y)}function m(x,y,w,j){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=Ts(w,x.mode,j),y.return=x,y):(y=r(y,w.children||[]),y.return=x,y)}function p(x,y,w,j,$){return y===null||y.tag!==7?(y=On(w,x.mode,j,$),y.return=x,y):(y=r(y,w),y.return=x,y)}function g(x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Ms(""+y,x.mode,w),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case dl:return w=Hl(y.type,y.key,y.props,null,x.mode,w),ei(w,y),w.return=x,w;case ii:return y=Ts(y,x.mode,w),y.return=x,y;case Xt:return y=Dn(y),g(x,y,w)}if(li(y)||Pr(y))return y=On(y,x.mode,w,null),y.return=x,y;if(typeof y.then=="function")return g(x,bl(y),w);if(y.$$typeof===jt)return g(x,gl(x,y),w);yl(x,y)}return null}function v(x,y,w,j){var $=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return $!==null?null:s(x,y,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case dl:return w.key===$?u(x,y,w,j):null;case ii:return w.key===$?m(x,y,w,j):null;case Xt:return w=Dn(w),v(x,y,w,j)}if(li(w)||Pr(w))return $!==null?null:p(x,y,w,j,null);if(typeof w.then=="function")return v(x,y,bl(w),j);if(w.$$typeof===jt)return v(x,y,gl(x,w),j);yl(x,w)}return null}function b(x,y,w,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return x=x.get(w)||null,s(y,x,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case dl:return x=x.get(j.key===null?w:j.key)||null,u(y,x,j,$);case ii:return x=x.get(j.key===null?w:j.key)||null,m(y,x,j,$);case Xt:return j=Dn(j),b(x,y,w,j,$)}if(li(j)||Pr(j))return x=x.get(w)||null,p(y,x,j,$,null);if(typeof j.then=="function")return b(x,y,w,bl(j),$);if(j.$$typeof===jt)return b(x,y,w,gl(y,j),$);yl(y,j)}return null}function A(x,y,w,j){for(var $=null,B=null,C=y,U=y=0,L=null;C!==null&&U<w.length;U++){C.index>U?(L=C,C=null):L=C.sibling;var Y=v(x,C,w[U],j);if(Y===null){C===null&&(C=L);break}e&&C&&Y.alternate===null&&a(x,C),y=i(Y,y,U),B===null?$=Y:B.sibling=Y,B=Y,C=L}if(U===w.length)return t(x,C),te&&zt(x,U),$;if(C===null){for(;U<w.length;U++)C=g(x,w[U],j),C!==null&&(y=i(C,y,U),B===null?$=C:B.sibling=C,B=C);return te&&zt(x,U),$}for(C=n(C);U<w.length;U++)L=b(C,x,U,w[U],j),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?U:L.key),y=i(L,y,U),B===null?$=L:B.sibling=L,B=L);return e&&C.forEach(function(be){return a(x,be)}),te&&zt(x,U),$}function N(x,y,w,j){if(w==null)throw Error(q(151));for(var $=null,B=null,C=y,U=y=0,L=null,Y=w.next();C!==null&&!Y.done;U++,Y=w.next()){C.index>U?(L=C,C=null):L=C.sibling;var be=v(x,C,Y.value,j);if(be===null){C===null&&(C=L);break}e&&C&&be.alternate===null&&a(x,C),y=i(be,y,U),B===null?$=be:B.sibling=be,B=be,C=L}if(Y.done)return t(x,C),te&&zt(x,U),$;if(C===null){for(;!Y.done;U++,Y=w.next())Y=g(x,Y.value,j),Y!==null&&(y=i(Y,y,U),B===null?$=Y:B.sibling=Y,B=Y);return te&&zt(x,U),$}for(C=n(C);!Y.done;U++,Y=w.next())Y=b(C,x,U,Y.value,j),Y!==null&&(e&&Y.alternate!==null&&C.delete(Y.key===null?U:Y.key),y=i(Y,y,U),B===null?$=Y:B.sibling=Y,B=Y);return e&&C.forEach(function(oe){return a(x,oe)}),te&&zt(x,U),$}function M(x,y,w,j){if(typeof w=="object"&&w!==null&&w.type===ir&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case dl:e:{for(var $=w.key;y!==null;){if(y.key===$){if($=w.type,$===ir){if(y.tag===7){t(x,y.sibling),j=r(y,w.props.children),j.return=x,x=j;break e}}else if(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Xt&&Dn($)===y.type){t(x,y.sibling),j=r(y,w.props),ei(j,w),j.return=x,x=j;break e}t(x,y);break}else a(x,y);y=y.sibling}w.type===ir?(j=On(w.props.children,x.mode,j,w.key),j.return=x,x=j):(j=Hl(w.type,w.key,w.props,null,x.mode,j),ei(j,w),j.return=x,x=j)}return l(x);case ii:e:{for($=w.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){t(x,y.sibling),j=r(y,w.children||[]),j.return=x,x=j;break e}else{t(x,y);break}else a(x,y);y=y.sibling}j=Ts(w,x.mode,j),j.return=x,x=j}return l(x);case Xt:return w=Dn(w),M(x,y,w,j)}if(li(w))return A(x,y,w,j);if(Pr(w)){if($=Pr(w),typeof $!="function")throw Error(q(150));return w=$.call(w),N(x,y,w,j)}if(typeof w.then=="function")return M(x,y,bl(w),j);if(w.$$typeof===jt)return M(x,y,gl(x,w),j);yl(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,y!==null&&y.tag===6?(t(x,y.sibling),j=r(y,w),j.return=x,x=j):(t(x,y),j=Ms(w,x.mode,j),j.return=x,x=j),l(x)):t(x,y)}return function(x,y,w,j){try{Di=0;var $=M(x,y,w,j);return Sr=null,$}catch(C){if(C===Qr||C===Y0)throw C;var B=wa(29,C,null,x.mode);return B.lanes=j,B.return=x,B}finally{}}}var Gn=Ff(!0),Kf=Ff(!1),Zt=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vo(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function on(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,re&2){var r=n.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),n.pending=a,a=l0(e),Lf(e,null,t),a}return Q0(e,n,a,t),l0(e)}function vi(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,ff(e,t)}}function Ds(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?r=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?r=i=a:i=i.next=a}else r=i=a;t={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Xo=!1;function gi(){if(Xo){var e=xr;if(e!==null)throw e}}function bi(e,a,t,n){Xo=!1;var r=e.updateQueue;Zt=!1;var i=r.firstBaseUpdate,l=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var u=s,m=u.next;u.next=null,l===null?i=m:l.next=m,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=m:s.next=m,p.lastBaseUpdate=u))}if(i!==null){var g=r.baseState;l=0,p=m=u=null,s=i;do{var v=s.lane&-536870913,b=v!==s.lane;if(b?(ae&v)===v:(n&v)===v){v!==0&&v===qr&&(Xo=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var A=e,N=s;v=a;var M=t;switch(N.tag){case 1:if(A=N.payload,typeof A=="function"){g=A.call(M,g,v);break e}g=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=N.payload,v=typeof A=="function"?A.call(M,g,v):A,v==null)break e;g=Ee({},g,v);break e;case 2:Zt=!0}}v=s.callback,v!==null&&(e.flags|=64,b&&(e.flags|=8192),b=r.callbacks,b===null?r.callbacks=[v]:b.push(v))}else b={lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(m=p=b,u=g):p=p.next=b,l|=v;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;b=s,s=b.next,b.next=null,r.lastBaseUpdate=b,r.shared.pending=null}}while(!0);p===null&&(u=g),r.baseState=u,r.firstBaseUpdate=m,r.lastBaseUpdate=p,i===null&&(r.shared.lanes=0),gn|=l,e.lanes=l,e.memoizedState=g}}function Jf(e,a){if(typeof e!="function")throw Error(q(191,e));e.call(a)}function Pf(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Jf(t[e],a)}var Mr=ut(null),u0=ut(0);function am(e,a){e=Ot,ye(u0,e),ye(Mr,a),Ot=e|a.baseLanes}function Zo(){ye(u0,Ot),ye(Mr,Mr.current)}function du(){Ot=u0.current,Ke(Mr),Ke(u0)}var Da=ut(null),Xa=null;function Kt(e){var a=e.alternate;ye(ke,ke.current&1),ye(Da,e),Xa===null&&(a===null||Mr.current!==null||a.memoizedState!==null)&&(Xa=e)}function Fo(e){ye(ke,ke.current),ye(Da,e),Xa===null&&(Xa=e)}function If(e){e.tag===22?(ye(ke,ke.current),ye(Da,e),Xa===null&&(Xa=e)):Jt()}function Jt(){ye(ke,ke.current),ye(Da,Da.current)}function za(e){Ke(Da),Xa===e&&(Xa=null),Ke(ke)}var ke=ut(0);function d0(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||fc(t)||pc(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var $t=0,P=null,me=null,Oe=null,m0=!1,zr=!1,Qn=!1,f0=0,$i=0,wr=null,Q5=0;function Ce(){throw Error(q(321))}function mu(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Ca(e[t],a[t]))return!1;return!0}function fu(e,a,t,n,r,i){return $t=i,P=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,X.H=e===null||e.memoizedState===null?M4:Eu,Qn=!1,i=t(n,r),Qn=!1,zr&&(i=e4(a,t,n,r)),Wf(e),i}function Wf(e){X.H=ki;var a=me!==null&&me.next!==null;if($t=0,Oe=me=P=null,m0=!1,$i=0,wr=null,a)throw Error(q(300));e===null||Ue||(e=e.dependencies,e!==null&&o0(e)&&(Ue=!0))}function e4(e,a,t,n){P=e;var r=0;do{if(zr&&(wr=null),$i=0,zr=!1,25<=r)throw Error(q(301));if(r+=1,Oe=me=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}X.H=T4,i=a(t,n)}while(zr);return i}function Y5(){var e=X.H,a=e.useState()[0];return a=typeof a.then=="function"?Ii(a):a,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(P.flags|=1024),a}function pu(){var e=f0!==0;return f0=0,e}function hu(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function vu(e){if(m0){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}m0=!1}$t=0,Oe=me=P=null,zr=!1,$i=f0=0,wr=null}function ia(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?P.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function _e(){if(me===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var a=Oe===null?P.memoizedState:Oe.next;if(a!==null)Oe=a,me=e;else{if(e===null)throw P.alternate===null?Error(q(467)):Error(q(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},Oe===null?P.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function V0(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ii(e){var a=$i;return $i+=1,wr===null&&(wr=[]),e=Zf(wr,e,a),a=P,(Oe===null?a.memoizedState:Oe.next)===null&&(a=a.alternate,X.H=a===null||a.memoizedState===null?M4:Eu),e}function X0(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ii(e);if(e.$$typeof===jt)return We(e)}throw Error(q(438,String(e)))}function gu(e){var a=null,t=P.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=P.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(r){return r.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=V0(),P.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=Mh;return a.index++,t}function kt(e,a){return typeof a=="function"?a(e):a}function Ql(e){var a=_e();return bu(a,me,e)}function bu(e,a,t){var n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=e.baseQueue,i=n.pending;if(i!==null){if(r!==null){var l=r.next;r.next=i.next,i.next=l}a.baseQueue=r=i,n.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{a=r.next;var s=l=null,u=null,m=a,p=!1;do{var g=m.lane&-536870913;if(g!==m.lane?(ae&g)===g:($t&g)===g){var v=m.revertLane;if(v===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),g===qr&&(p=!0);else if(($t&v)===v){m=m.next,v===qr&&(p=!0);continue}else g={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=g,l=i):u=u.next=g,P.lanes|=v,gn|=v;g=m.action,Qn&&t(i,g),i=m.hasEagerState?m.eagerState:t(i,g)}else v={lane:g,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=v,l=i):u=u.next=v,P.lanes|=g,gn|=g;m=m.next}while(m!==null&&m!==a);if(u===null?l=i:u.next=s,!Ca(i,e.memoizedState)&&(Ue=!0,p&&(t=xr,t!==null)))throw t;e.memoizedState=i,e.baseState=l,e.baseQueue=u,n.lastRenderedState=i}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function $s(e){var a=_e(),t=a.queue;if(t===null)throw Error(q(311));t.lastRenderedReducer=e;var n=t.dispatch,r=t.pending,i=a.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do i=e(i,l.action),l=l.next;while(l!==r);Ca(i,a.memoizedState)||(Ue=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i}return[i,n]}function a4(e,a,t){var n=P,r=_e(),i=te;if(i){if(t===void 0)throw Error(q(407));t=t()}else t=a();var l=!Ca((me||r).memoizedState,t);if(l&&(r.memoizedState=t,Ue=!0),r=r.queue,yu(r4.bind(null,n,r,e),[e]),r.getSnapshot!==a||l||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Tr(9,{destroy:void 0},n4.bind(null,n,r,t,a),null),ve===null)throw Error(q(349));i||$t&127||t4(n,a,t)}return t}function t4(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=P.updateQueue,a===null?(a=V0(),P.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function n4(e,a,t,n){a.value=t,a.getSnapshot=n,i4(a)&&l4(e)}function r4(e,a,t){return t(function(){i4(a)&&l4(e)})}function i4(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Ca(e,t)}catch{return!0}}function l4(e){var a=Fn(e,2);a!==null&&ga(a,e,2)}function Ko(e){var a=ia();if(typeof e=="function"){var t=e;if(e=t(),Qn){It(!0);try{t()}finally{It(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},a}function s4(e,a,t,n){return e.baseState=t,bu(e,me,typeof n=="function"?n:kt)}function V5(e,a,t,n,r){if(F0(e))throw Error(q(485));if(e=a.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){i.listeners.push(l)}};X.T!==null?t(!0):i.isTransition=!1,n(i),t=a.pending,t===null?(i.next=a.pending=i,o4(a,i)):(i.next=t.next,a.pending=t.next=i)}}function o4(e,a){var t=a.action,n=a.payload,r=e.state;if(a.isTransition){var i=X.T,l={};X.T=l;try{var s=t(r,n),u=X.S;u!==null&&u(l,s),tm(e,a,s)}catch(m){Jo(e,a,m)}finally{i!==null&&l.types!==null&&(i.types=l.types),X.T=i}}else try{i=t(r,n),tm(e,a,i)}catch(m){Jo(e,a,m)}}function tm(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){nm(e,a,n)},function(n){return Jo(e,a,n)}):nm(e,a,t)}function nm(e,a,t){a.status="fulfilled",a.value=t,c4(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,o4(e,t)))}function Jo(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,c4(a),a=a.next;while(a!==n)}e.action=null}function c4(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function u4(e,a){return a}function rm(e,a){if(te){var t=ve.formState;if(t!==null){e:{var n=P;if(te){if(ze){a:{for(var r=ze,i=Ya;r.nodeType!==8;){if(!i){r=null;break a}if(r=Za(r.nextSibling),r===null){r=null;break a}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){ze=Za(r.nextSibling),n=r.data==="F!";break e}}hn(n)}n=!1}n&&(a=t[0])}}return t=ia(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:u4,lastRenderedState:a},t.queue=n,t=A4.bind(null,P,n),n.dispatch=t,n=Ko(!1),i=wu.bind(null,P,!1,n.queue),n=ia(),r={state:a,dispatch:null,action:e,pending:null},n.queue=r,t=V5.bind(null,P,r,i,t),r.dispatch=t,n.memoizedState=e,[a,t,!1]}function im(e){var a=_e();return d4(a,me,e)}function d4(e,a,t){if(a=bu(e,a,u4)[0],e=Ql(kt)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=Ii(a)}catch(l){throw l===Qr?Y0:l}else n=a;a=_e();var r=a.queue,i=r.dispatch;return t!==a.memoizedState&&(P.flags|=2048,Tr(9,{destroy:void 0},X5.bind(null,r,t),null)),[n,i,e]}function X5(e,a){e.action=a}function lm(e){var a=_e(),t=me;if(t!==null)return d4(a,t,e);_e(),a=a.memoizedState,t=_e();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function Tr(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=P.updateQueue,a===null&&(a=V0(),P.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function m4(){return _e().memoizedState}function Yl(e,a,t,n){var r=ia();P.flags|=e,r.memoizedState=Tr(1|a,{destroy:void 0},t,n===void 0?null:n)}function Z0(e,a,t,n){var r=_e();n=n===void 0?null:n;var i=r.memoizedState.inst;me!==null&&n!==null&&mu(n,me.memoizedState.deps)?r.memoizedState=Tr(a,i,t,n):(P.flags|=e,r.memoizedState=Tr(1|a,i,t,n))}function sm(e,a){Yl(8390656,8,e,a)}function yu(e,a){Z0(2048,8,e,a)}function Z5(e){P.flags|=4;var a=P.updateQueue;if(a===null)a=V0(),P.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function f4(e){var a=_e().memoizedState;return Z5({ref:a,nextImpl:e}),function(){if(re&2)throw Error(q(440));return a.impl.apply(void 0,arguments)}}function p4(e,a){return Z0(4,2,e,a)}function h4(e,a){return Z0(4,4,e,a)}function v4(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function g4(e,a,t){t=t!=null?t.concat([e]):null,Z0(4,4,v4.bind(null,a,e),t)}function xu(){}function b4(e,a){var t=_e();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&mu(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function y4(e,a){var t=_e();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&mu(a,n[1]))return n[0];if(n=e(),Qn){It(!0);try{e()}finally{It(!1)}}return t.memoizedState=[n,a],n}function Su(e,a,t){return t===void 0||$t&1073741824&&!(ae&261930)?e.memoizedState=a:(e.memoizedState=t,e=s2(),P.lanes|=e,gn|=e,t)}function x4(e,a,t,n){return Ca(t,a)?t:Mr.current!==null?(e=Su(e,t,n),Ca(e,a)||(Ue=!0),e):!($t&42)||$t&1073741824&&!(ae&261930)?(Ue=!0,e.memoizedState=t):(e=s2(),P.lanes|=e,gn|=e,a)}function S4(e,a,t,n,r){var i=le.p;le.p=i!==0&&8>i?i:8;var l=X.T,s={};X.T=s,wu(e,!1,a,t);try{var u=r(),m=X.S;if(m!==null&&m(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=G5(u,n);yi(e,a,p,Ma(e))}else yi(e,a,n,Ma(e))}catch(g){yi(e,a,{then:function(){},status:"rejected",reason:g},Ma())}finally{le.p=i,l!==null&&s.types!==null&&(l.types=s.types),X.T=l}}function F5(){}function Po(e,a,t,n){if(e.tag!==5)throw Error(q(476));var r=z4(e).queue;S4(e,r,a,_n,t===null?F5:function(){return w4(e),t(n)})}function z4(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:_n,baseState:_n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:_n},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function w4(e){var a=z4(e);a.next===null&&(a=e.alternate.memoizedState),yi(e,a.next.queue,{},Ma())}function zu(){return We(Bi)}function E4(){return _e().memoizedState}function j4(){return _e().memoizedState}function K5(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Ma();e=sn(t);var n=on(a,e,t);n!==null&&(ga(n,a,t),vi(n,a,t)),a={cache:su()},e.payload=a;return}a=a.return}}function J5(e,a,t){var n=Ma();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},F0(e)?N4(a,t):(t=nu(e,a,t,n),t!==null&&(ga(t,e,n),q4(t,a,n)))}function A4(e,a,t){var n=Ma();yi(e,a,t,n)}function yi(e,a,t,n){var r={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(F0(e))N4(a,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var l=a.lastRenderedState,s=i(l,t);if(r.hasEagerState=!0,r.eagerState=s,Ca(s,l))return Q0(e,a,r,0),ve===null&&G0(),!1}catch{}finally{}if(t=nu(e,a,r,n),t!==null)return ga(t,e,n),q4(t,a,n),!0}return!1}function wu(e,a,t,n){if(n={lane:2,revertLane:Du(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},F0(e)){if(a)throw Error(q(479))}else a=nu(e,t,n,2),a!==null&&ga(a,e,2)}function F0(e){var a=e.alternate;return e===P||a!==null&&a===P}function N4(e,a){zr=m0=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function q4(e,a,t){if(t&4194048){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,ff(e,t)}}var ki={readContext:We,use:X0,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};ki.useEffectEvent=Ce;var M4={readContext:We,use:X0,useCallback:function(e,a){return ia().memoizedState=[e,a===void 0?null:a],e},useContext:We,useEffect:sm,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Yl(4194308,4,v4.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Yl(4194308,4,e,a)},useInsertionEffect:function(e,a){Yl(4,2,e,a)},useMemo:function(e,a){var t=ia();a=a===void 0?null:a;var n=e();if(Qn){It(!0);try{e()}finally{It(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=ia();if(t!==void 0){var r=t(a);if(Qn){It(!0);try{t(a)}finally{It(!1)}}}else r=a;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=J5.bind(null,P,e),[n.memoizedState,e]},useRef:function(e){var a=ia();return e={current:e},a.memoizedState=e},useState:function(e){e=Ko(e);var a=e.queue,t=A4.bind(null,P,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:xu,useDeferredValue:function(e,a){var t=ia();return Su(t,e,a)},useTransition:function(){var e=Ko(!1);return e=S4.bind(null,P,e.queue,!0,!1),ia().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=P,r=ia();if(te){if(t===void 0)throw Error(q(407));t=t()}else{if(t=a(),ve===null)throw Error(q(349));ae&127||t4(n,a,t)}r.memoizedState=t;var i={value:t,getSnapshot:a};return r.queue=i,sm(r4.bind(null,n,i,e),[e]),n.flags|=2048,Tr(9,{destroy:void 0},n4.bind(null,n,i,t,a),null),t},useId:function(){var e=ia(),a=ve.identifierPrefix;if(te){var t=it,n=rt;t=(n&~(1<<32-qa(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=f0++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Q5++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:zu,useFormState:rm,useActionState:rm,useOptimistic:function(e){var a=ia();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=wu.bind(null,P,!0,t),t.dispatch=a,[e,a]},useMemoCache:gu,useCacheRefresh:function(){return ia().memoizedState=K5.bind(null,P)},useEffectEvent:function(e){var a=ia(),t={impl:e};return a.memoizedState=t,function(){if(re&2)throw Error(q(440));return t.impl.apply(void 0,arguments)}}},Eu={readContext:We,use:X0,useCallback:b4,useContext:We,useEffect:yu,useImperativeHandle:g4,useInsertionEffect:p4,useLayoutEffect:h4,useMemo:y4,useReducer:Ql,useRef:m4,useState:function(){return Ql(kt)},useDebugValue:xu,useDeferredValue:function(e,a){var t=_e();return x4(t,me.memoizedState,e,a)},useTransition:function(){var e=Ql(kt)[0],a=_e().memoizedState;return[typeof e=="boolean"?e:Ii(e),a]},useSyncExternalStore:a4,useId:E4,useHostTransitionStatus:zu,useFormState:im,useActionState:im,useOptimistic:function(e,a){var t=_e();return s4(t,me,e,a)},useMemoCache:gu,useCacheRefresh:j4};Eu.useEffectEvent=f4;var T4={readContext:We,use:X0,useCallback:b4,useContext:We,useEffect:yu,useImperativeHandle:g4,useInsertionEffect:p4,useLayoutEffect:h4,useMemo:y4,useReducer:$s,useRef:m4,useState:function(){return $s(kt)},useDebugValue:xu,useDeferredValue:function(e,a){var t=_e();return me===null?Su(t,e,a):x4(t,me.memoizedState,e,a)},useTransition:function(){var e=$s(kt)[0],a=_e().memoizedState;return[typeof e=="boolean"?e:Ii(e),a]},useSyncExternalStore:a4,useId:E4,useHostTransitionStatus:zu,useFormState:lm,useActionState:lm,useOptimistic:function(e,a){var t=_e();return me!==null?s4(t,me,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:gu,useCacheRefresh:j4};T4.useEffectEvent=f4;function ks(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:Ee({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Io={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Ma(),r=sn(n);r.payload=a,t!=null&&(r.callback=t),a=on(e,r,n),a!==null&&(ga(a,e,n),vi(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Ma(),r=sn(n);r.tag=1,r.payload=a,t!=null&&(r.callback=t),a=on(e,r,n),a!==null&&(ga(a,e,n),vi(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Ma(),n=sn(t);n.tag=2,a!=null&&(n.callback=a),a=on(e,n,t),a!==null&&(ga(a,e,t),vi(a,e,t))}};function om(e,a,t,n,r,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):a.prototype&&a.prototype.isPureReactComponent?!Mi(t,n)||!Mi(r,i):!0}function cm(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&Io.enqueueReplaceState(a,a.state,null)}function Yn(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=Ee({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function C4(e){i0(e)}function D4(e){console.error(e)}function $4(e){i0(e)}function p0(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function um(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Wo(e,a,t){return t=sn(t),t.tag=3,t.payload={element:null},t.callback=function(){p0(e,a)},t}function k4(e){return e=sn(e),e.tag=3,e}function _4(e,a,t,n){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;e.payload=function(){return r(i)},e.callback=function(){um(a,t,n)}}var l=t.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){um(a,t,n),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function P5(e,a,t,n,r){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&Gr(a,t,r,!0),t=Da.current,t!==null){switch(t.tag){case 31:case 13:return Xa===null?y0():t.alternate===null&&$e===0&&($e=3),t.flags&=-257,t.flags|=65536,t.lanes=r,n===c0?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),Vs(e,n,r)),!1;case 22:return t.flags|=65536,n===c0?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),Vs(e,n,r)),!1}throw Error(q(435,t.tag))}return Vs(e,n,r),y0(),!1}if(te)return a=Da.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=r,n!==Lo&&(e=Error(q(422),{cause:n}),Ci(Qa(e,t)))):(n!==Lo&&(a=Error(q(423),{cause:n}),Ci(Qa(a,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=Qa(n,t),r=Wo(e.stateNode,n,r),Ds(e,r),$e!==4&&($e=2)),!1;var i=Error(q(520),{cause:n});if(i=Qa(i,t),zi===null?zi=[i]:zi.push(i),$e!==4&&($e=2),a===null)return!0;n=Qa(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=Wo(t.stateNode,n,e),Ds(t,e),!1;case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(cn===null||!cn.has(i))))return t.flags|=65536,r&=-r,t.lanes|=r,r=k4(r),_4(r,e,t,n),Ds(t,r),!1}t=t.return}while(t!==null);return!1}var ju=Error(q(461)),Ue=!1;function Je(e,a,t,n){a.child=e===null?Kf(a,null,t,n):Gn(a,e.child,t,n)}function dm(e,a,t,n,r){t=t.render;var i=a.ref;if("ref"in n){var l={};for(var s in n)s!=="ref"&&(l[s]=n[s])}else l=n;return Hn(a),n=fu(e,a,t,l,i,r),s=pu(),e!==null&&!Ue?(hu(e,a,r),_t(e,a,r)):(te&&s&&iu(a),a.flags|=1,Je(e,a,n,r),a.child)}function mm(e,a,t,n,r){if(e===null){var i=t.type;return typeof i=="function"&&!ru(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,O4(e,a,i,n,r)):(e=Hl(t.type,null,n,a,a.mode,r),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,!Au(e,r)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Mi,t(l,n)&&e.ref===a.ref)return _t(e,a,r)}return a.flags|=1,e=qt(i,n),e.ref=a.ref,e.return=a,a.child=e}function O4(e,a,t,n,r){if(e!==null){var i=e.memoizedProps;if(Mi(i,n)&&e.ref===a.ref)if(Ue=!1,a.pendingProps=n=i,Au(e,r))e.flags&131072&&(Ue=!0);else return a.lanes=e.lanes,_t(e,a,r)}return ec(e,a,t,n,r)}function B4(e,a,t,n){var r=n.children,i=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(a.flags&128){if(i=i!==null?i.baseLanes|t:t,e!==null){for(n=a.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~i}else n=0,a.child=null;return fm(e,a,i,t,n)}if(t&536870912)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gl(a,i!==null?i.cachePool:null),i!==null?am(a,i):Zo(),If(a);else return n=a.lanes=536870912,fm(e,a,i!==null?i.baseLanes|t:t,t,n)}else i!==null?(Gl(a,i.cachePool),am(a,i),Jt(),a.memoizedState=null):(e!==null&&Gl(a,null),Zo(),Jt());return Je(e,a,r,t),a.child}function oi(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function fm(e,a,t,n,r){var i=ou();return i=i===null?null:{parent:Re._currentValue,pool:i},a.memoizedState={baseLanes:t,cachePool:i},e!==null&&Gl(a,null),Zo(),If(a),e!==null&&Gr(e,a,n,!0),a.childLanes=r,null}function Vl(e,a){return a=h0({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function pm(e,a,t){return Gn(a,e.child,null,t),e=Vl(a,a.pendingProps),e.flags|=2,za(a),a.memoizedState=null,e}function I5(e,a,t){var n=a.pendingProps,r=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(te){if(n.mode==="hidden")return e=Vl(a,n),a.lanes=536870912,oi(null,e);if(Fo(a),(e=ze)?(e=M2(e,Ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:pn!==null?{id:rt,overflow:it}:null,retryLane:536870912,hydrationErrors:null},t=Gf(e),t.return=a,a.child=t,Ie=a,ze=null)):e=null,e===null)throw hn(a);return a.lanes=536870912,null}return Vl(a,n)}var i=e.memoizedState;if(i!==null){var l=i.dehydrated;if(Fo(a),r)if(a.flags&256)a.flags&=-257,a=pm(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(q(558));else if(Ue||Gr(e,a,t,!1),r=(t&e.childLanes)!==0,Ue||r){if(n=ve,n!==null&&(l=pf(n,t),l!==0&&l!==i.retryLane))throw i.retryLane=l,Fn(e,l),ga(n,e,l),ju;y0(),a=pm(e,a,t)}else e=i.treeContext,ze=Za(l.nextSibling),Ie=a,te=!0,ln=null,Ya=!1,e!==null&&Yf(a,e),a=Vl(a,n),a.flags|=4096;return a}return e=qt(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Xl(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(q(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function ec(e,a,t,n,r){return Hn(a),t=fu(e,a,t,n,void 0,r),n=pu(),e!==null&&!Ue?(hu(e,a,r),_t(e,a,r)):(te&&n&&iu(a),a.flags|=1,Je(e,a,t,r),a.child)}function hm(e,a,t,n,r,i){return Hn(a),a.updateQueue=null,t=e4(a,n,t,r),Wf(e),n=pu(),e!==null&&!Ue?(hu(e,a,i),_t(e,a,i)):(te&&n&&iu(a),a.flags|=1,Je(e,a,t,i),a.child)}function vm(e,a,t,n,r){if(Hn(a),a.stateNode===null){var i=fr,l=t.contextType;typeof l=="object"&&l!==null&&(i=We(l)),i=new t(n,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Io,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=n,i.state=a.memoizedState,i.refs={},uu(a),l=t.contextType,i.context=typeof l=="object"&&l!==null?We(l):fr,i.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ks(a,t,l,n),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(l=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),l!==i.state&&Io.enqueueReplaceState(i,i.state,null),bi(a,n,i,r),gi(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){i=a.stateNode;var s=a.memoizedProps,u=Yn(t,s);i.props=u;var m=i.context,p=t.contextType;l=fr,typeof p=="object"&&p!==null&&(l=We(p));var g=t.getDerivedStateFromProps;p=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||m!==l)&&cm(a,i,n,l),Zt=!1;var v=a.memoizedState;i.state=v,bi(a,n,i,r),gi(),m=a.memoizedState,s||v!==m||Zt?(typeof g=="function"&&(ks(a,t,g,n),m=a.memoizedState),(u=Zt||om(a,t,u,n,v,m,l))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=m),i.props=n,i.state=m,i.context=l,n=u):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{i=a.stateNode,Vo(e,a),l=a.memoizedProps,p=Yn(t,l),i.props=p,g=a.pendingProps,v=i.context,m=t.contextType,u=fr,typeof m=="object"&&m!==null&&(u=We(m)),s=t.getDerivedStateFromProps,(m=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==g||v!==u)&&cm(a,i,n,u),Zt=!1,v=a.memoizedState,i.state=v,bi(a,n,i,r),gi();var b=a.memoizedState;l!==g||v!==b||Zt||e!==null&&e.dependencies!==null&&o0(e.dependencies)?(typeof s=="function"&&(ks(a,t,s,n),b=a.memoizedState),(p=Zt||om(a,t,p,n,v,b,u)||e!==null&&e.dependencies!==null&&o0(e.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,b,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,b,u)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=b),i.props=n,i.state=b,i.context=u,n=p):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),n=!1)}return i=n,Xl(e,a),n=(a.flags&128)!==0,i||n?(i=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&n?(a.child=Gn(a,e.child,null,r),a.child=Gn(a,null,t,r)):Je(e,a,t,r),a.memoizedState=i.state,e=a.child):e=_t(e,a,r),e}function gm(e,a,t,n){return Ln(),a.flags|=256,Je(e,a,t,n),a.child}var _s={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Os(e){return{baseLanes:e,cachePool:Xf()}}function Bs(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Ea),e}function R4(e,a,t){var n=a.pendingProps,r=!1,i=(a.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),l&&(r=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(te){if(r?Kt(a):Jt(),(e=ze)?(e=M2(e,Ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:pn!==null?{id:rt,overflow:it}:null,retryLane:536870912,hydrationErrors:null},t=Gf(e),t.return=a,a.child=t,Ie=a,ze=null)):e=null,e===null)throw hn(a);return pc(e)?a.lanes=32:a.lanes=536870912,null}var s=n.children;return n=n.fallback,r?(Jt(),r=a.mode,s=h0({mode:"hidden",children:s},r),n=On(n,r,t,null),s.return=a,n.return=a,s.sibling=n,a.child=s,n=a.child,n.memoizedState=Os(t),n.childLanes=Bs(e,l,t),a.memoizedState=_s,oi(null,n)):(Kt(a),ac(a,s))}var u=e.memoizedState;if(u!==null&&(s=u.dehydrated,s!==null)){if(i)a.flags&256?(Kt(a),a.flags&=-257,a=Rs(e,a,t)):a.memoizedState!==null?(Jt(),a.child=e.child,a.flags|=128,a=null):(Jt(),s=n.fallback,r=a.mode,n=h0({mode:"visible",children:n.children},r),s=On(s,r,t,null),s.flags|=2,n.return=a,s.return=a,n.sibling=s,a.child=n,Gn(a,e.child,null,t),n=a.child,n.memoizedState=Os(t),n.childLanes=Bs(e,l,t),a.memoizedState=_s,a=oi(null,n));else if(Kt(a),pc(s)){if(l=s.nextSibling&&s.nextSibling.dataset,l)var m=l.dgst;l=m,n=Error(q(419)),n.stack="",n.digest=l,Ci({value:n,source:null,stack:null}),a=Rs(e,a,t)}else if(Ue||Gr(e,a,t,!1),l=(t&e.childLanes)!==0,Ue||l){if(l=ve,l!==null&&(n=pf(l,t),n!==0&&n!==u.retryLane))throw u.retryLane=n,Fn(e,n),ga(l,e,n),ju;fc(s)||y0(),a=Rs(e,a,t)}else fc(s)?(a.flags|=192,a.child=e.child,a=null):(e=u.treeContext,ze=Za(s.nextSibling),Ie=a,te=!0,ln=null,Ya=!1,e!==null&&Yf(a,e),a=ac(a,n.children),a.flags|=4096);return a}return r?(Jt(),s=n.fallback,r=a.mode,u=e.child,m=u.sibling,n=qt(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,m!==null?s=qt(m,s):(s=On(s,r,t,null),s.flags|=2),s.return=a,n.return=a,n.sibling=s,a.child=n,oi(null,n),n=a.child,s=e.child.memoizedState,s===null?s=Os(t):(r=s.cachePool,r!==null?(u=Re._currentValue,r=r.parent!==u?{parent:u,pool:u}:r):r=Xf(),s={baseLanes:s.baseLanes|t,cachePool:r}),n.memoizedState=s,n.childLanes=Bs(e,l,t),a.memoizedState=_s,oi(e.child,n)):(Kt(a),t=e.child,e=t.sibling,t=qt(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=t,a.memoizedState=null,t)}function ac(e,a){return a=h0({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function h0(e,a){return e=wa(22,e,null,a),e.lanes=0,e}function Rs(e,a,t){return Gn(a,e.child,null,t),e=ac(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function bm(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),Go(e.return,a,t)}function Us(e,a,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:r,treeForkCount:i}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=r,l.treeForkCount=i)}function U4(e,a,t){var n=a.pendingProps,r=n.revealOrder,i=n.tail;n=n.children;var l=ke.current,s=(l&2)!==0;if(s?(l=l&1|2,a.flags|=128):l&=1,ye(ke,l),Je(e,a,n,t),n=te?Ti:0,!s&&e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,t,a);else if(e.tag===19)bm(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=a.child,r=null;t!==null;)e=t.alternate,e!==null&&d0(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=a.child,a.child=null):(r=t.sibling,t.sibling=null),Us(a,!1,r,t,i,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=a.child,a.child=null;r!==null;){if(e=r.alternate,e!==null&&d0(e)===null){a.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Us(a,!0,t,null,i,n);break;case"together":Us(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function _t(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),gn|=a.lanes,!(t&a.childLanes))if(e!==null){if(Gr(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(q(153));if(a.child!==null){for(e=a.child,t=qt(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=qt(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Au(e,a){return e.lanes&a?!0:(e=e.dependencies,!!(e!==null&&o0(e)))}function W5(e,a,t){switch(a.tag){case 3:a0(a,a.stateNode.containerInfo),Ft(a,Re,e.memoizedState.cache),Ln();break;case 27:case 5:Mo(a);break;case 4:a0(a,a.stateNode.containerInfo);break;case 10:Ft(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Fo(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(Kt(a),a.flags|=128,null):t&a.child.childLanes?R4(e,a,t):(Kt(a),e=_t(e,a,t),e!==null?e.sibling:null);Kt(a);break;case 19:var r=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(Gr(e,a,t,!1),n=(t&a.childLanes)!==0),r){if(n)return U4(e,a,t);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ye(ke,ke.current),n)break;return null;case 22:return a.lanes=0,B4(e,a,t,a.pendingProps);case 24:Ft(a,Re,e.memoizedState.cache)}return _t(e,a,t)}function L4(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ue=!0;else{if(!Au(e,t)&&!(a.flags&128))return Ue=!1,W5(e,a,t);Ue=!!(e.flags&131072)}else Ue=!1,te&&a.flags&1048576&&Qf(a,Ti,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Dn(a.elementType),a.type=e,typeof e=="function")ru(e)?(n=Yn(e,n),a.tag=1,a=vm(null,a,e,n,t)):(a.tag=0,a=ec(null,a,e,n,t));else{if(e!=null){var r=e.$$typeof;if(r===Yc){a.tag=11,a=dm(null,a,e,n,t);break e}else if(r===Vc){a.tag=14,a=mm(null,a,e,n,t);break e}}throw a=No(e)||e,Error(q(306,a,""))}}return a;case 0:return ec(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,r=Yn(n,a.pendingProps),vm(e,a,n,r,t);case 3:e:{if(a0(a,a.stateNode.containerInfo),e===null)throw Error(q(387));n=a.pendingProps;var i=a.memoizedState;r=i.element,Vo(e,a),bi(a,n,null,t);var l=a.memoizedState;if(n=l.cache,Ft(a,Re,n),n!==i.cache&&Qo(a,[Re],t,!0),gi(),n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){a=gm(e,a,n,t);break e}else if(n!==r){r=Qa(Error(q(424)),a),Ci(r),a=gm(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ze=Za(e.firstChild),Ie=a,te=!0,ln=null,Ya=!0,t=Kf(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ln(),n===r){a=_t(e,a,t);break e}Je(e,a,n,t)}a=a.child}return a;case 26:return Xl(e,a),e===null?(t=Rm(a.type,null,a.pendingProps,null))?a.memoizedState=t:te||(t=a.type,e=a.pendingProps,n=w0(rn.current).createElement(t),n[Pe]=a,n[ba]=e,ea(n,t,e),Fe(n),a.stateNode=n):a.memoizedState=Rm(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Mo(a),e===null&&te&&(n=a.stateNode=T2(a.type,a.pendingProps,rn.current),Ie=a,Ya=!0,r=ze,En(a.type)?(hc=r,ze=Za(n.firstChild)):ze=r),Je(e,a,a.pendingProps.children,t),Xl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&te&&((r=n=ze)&&(n=M3(n,a.type,a.pendingProps,Ya),n!==null?(a.stateNode=n,Ie=a,ze=Za(n.firstChild),Ya=!1,r=!0):r=!1),r||hn(a)),Mo(a),r=a.type,i=a.pendingProps,l=e!==null?e.memoizedProps:null,n=i.children,dc(r,i)?n=null:l!==null&&dc(r,l)&&(a.flags|=32),a.memoizedState!==null&&(r=fu(e,a,Y5,null,null,t),Bi._currentValue=r),Xl(e,a),Je(e,a,n,t),a.child;case 6:return e===null&&te&&((e=t=ze)&&(t=T3(t,a.pendingProps,Ya),t!==null?(a.stateNode=t,Ie=a,ze=null,e=!0):e=!1),e||hn(a)),null;case 13:return R4(e,a,t);case 4:return a0(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Gn(a,null,n,t):Je(e,a,n,t),a.child;case 11:return dm(e,a,a.type,a.pendingProps,t);case 7:return Je(e,a,a.pendingProps,t),a.child;case 8:return Je(e,a,a.pendingProps.children,t),a.child;case 12:return Je(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,Ft(a,a.type,n.value),Je(e,a,n.children,t),a.child;case 9:return r=a.type._context,n=a.pendingProps.children,Hn(a),r=We(r),n=n(r),a.flags|=1,Je(e,a,n,t),a.child;case 14:return mm(e,a,a.type,a.pendingProps,t);case 15:return O4(e,a,a.type,a.pendingProps,t);case 19:return U4(e,a,t);case 31:return I5(e,a,t);case 22:return B4(e,a,t,a.pendingProps);case 24:return Hn(a),n=We(Re),e===null?(r=ou(),r===null&&(r=ve,i=su(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=t),r=i),a.memoizedState={parent:n,cache:r},uu(a),Ft(a,Re,r)):(e.lanes&t&&(Vo(e,a),bi(a,null,null,t),gi()),r=e.memoizedState,i=a.memoizedState,r.parent!==n?(r={parent:n,cache:n},a.memoizedState=r,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=r),Ft(a,Re,n)):(n=i.cache,Ft(a,Re,n),n!==r.cache&&Qo(a,[Re],t,!0))),Je(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(q(156,a.tag))}function gt(e){e.flags|=4}function Ls(e,a,t,n,r){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(u2())e.flags|=8192;else throw Rn=c0,cu}else e.flags&=-16777217}function ym(e,a){if(a.type!=="stylesheet"||a.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!$2(a))if(u2())e.flags|=8192;else throw Rn=c0,cu}function xl(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?df():536870912,e.lanes|=a,Cr|=a)}function ai(e,a){if(!te)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Se(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function e3(e,a,t){var n=a.pendingProps;switch(lu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(a),null;case 1:return Se(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Mt(Re),jr(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Wn(a)?gt(a):e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,Cs())),Se(a),null;case 26:var r=a.type,i=a.memoizedState;return e===null?(gt(a),i!==null?(Se(a),ym(a,i)):(Se(a),Ls(a,r,null,n,t))):i?i!==e.memoizedState?(gt(a),Se(a),ym(a,i)):(Se(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&gt(a),Se(a),Ls(a,r,e,n,t)),null;case 27:if(t0(a),t=rn.current,r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&gt(a);else{if(!n){if(a.stateNode===null)throw Error(q(166));return Se(a),null}e=ot.current,Wn(a)?Fd(a):(e=T2(r,n,t),a.stateNode=e,gt(a))}return Se(a),null;case 5:if(t0(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&gt(a);else{if(!n){if(a.stateNode===null)throw Error(q(166));return Se(a),null}if(i=ot.current,Wn(a))Fd(a);else{var l=w0(rn.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=l.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?l.createElement(r,{is:n.is}):l.createElement(r)}}i[Pe]=a,i[ba]=n;e:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=i;e:switch(ea(i,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&gt(a)}}return Se(a),Ls(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&gt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(q(166));if(e=rn.current,Wn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,r=Ie,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[Pe]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||A2(e.nodeValue,t)),e||hn(a,!0)}else e=w0(e).createTextNode(n),e[Pe]=a,a.stateNode=e}return Se(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=Wn(a),t!==null){if(e===null){if(!n)throw Error(q(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(557));e[Pe]=a}else Ln(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Se(a),e=!1}else t=Cs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(za(a),a):(za(a),null);if(a.flags&128)throw Error(q(558))}return Se(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Wn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(q(318));if(r=a.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(q(317));r[Pe]=a}else Ln(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Se(a),r=!1}else r=Cs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return a.flags&256?(za(a),a):(za(a),null)}return za(a),a.flags&128?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==r&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),xl(a,a.updateQueue),Se(a),null);case 4:return jr(),e===null&&$u(a.stateNode.containerInfo),Se(a),null;case 10:return Mt(a.type),Se(a),null;case 19:if(Ke(ke),n=a.memoizedState,n===null)return Se(a),null;if(r=(a.flags&128)!==0,i=n.rendering,i===null)if(r)ai(n,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(i=d0(e),i!==null){for(a.flags|=128,ai(n,!1),e=i.updateQueue,a.updateQueue=e,xl(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Hf(t,e),t=t.sibling;return ye(ke,ke.current&1|2),te&&zt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&Aa()>g0&&(a.flags|=128,r=!0,ai(n,!1),a.lanes=4194304)}else{if(!r)if(e=d0(i),e!==null){if(a.flags|=128,r=!0,e=e.updateQueue,a.updateQueue=e,xl(a,e),ai(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!te)return Se(a),null}else 2*Aa()-n.renderingStartTime>g0&&t!==536870912&&(a.flags|=128,r=!0,ai(n,!1),a.lanes=4194304);n.isBackwards?(i.sibling=a.child,a.child=i):(e=n.last,e!==null?e.sibling=i:a.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Aa(),e.sibling=null,t=ke.current,ye(ke,r?t&1|2:t&1),te&&zt(a,n.treeForkCount),e):(Se(a),null);case 22:case 23:return za(a),du(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?t&536870912&&!(a.flags&128)&&(Se(a),a.subtreeFlags&6&&(a.flags|=8192)):Se(a),t=a.updateQueue,t!==null&&xl(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&Ke(Bn),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Mt(Re),Se(a),null;case 25:return null;case 30:return null}throw Error(q(156,a.tag))}function a3(e,a){switch(lu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Mt(Re),jr(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return t0(a),null;case 31:if(a.memoizedState!==null){if(za(a),a.alternate===null)throw Error(q(340));Ln()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(za(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(q(340));Ln()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Ke(ke),null;case 4:return jr(),null;case 10:return Mt(a.type),null;case 22:case 23:return za(a),du(),e!==null&&Ke(Bn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Mt(Re),null;case 25:return null;default:return null}}function H4(e,a){switch(lu(a),a.tag){case 3:Mt(Re),jr();break;case 26:case 27:case 5:t0(a);break;case 4:jr();break;case 31:a.memoizedState!==null&&za(a);break;case 13:za(a);break;case 19:Ke(ke);break;case 10:Mt(a.type);break;case 22:case 23:za(a),du(),e!==null&&Ke(Bn);break;case 24:Mt(Re)}}function Wi(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var r=n.next;t=r;do{if((t.tag&e)===e){n=void 0;var i=t.create,l=t.inst;n=i(),l.destroy=n}t=t.next}while(t!==r)}}catch(s){ue(a,a.return,s)}}function vn(e,a,t){try{var n=a.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){var l=n.inst,s=l.destroy;if(s!==void 0){l.destroy=void 0,r=a;var u=t,m=s;try{m()}catch(p){ue(r,u,p)}}}n=n.next}while(n!==i)}}catch(p){ue(a,a.return,p)}}function G4(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Pf(a,t)}catch(n){ue(e,e.return,n)}}}function Q4(e,a,t){t.props=Yn(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){ue(e,a,n)}}function xi(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(r){ue(e,a,r)}}function lt(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(r){ue(e,a,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){ue(e,a,r)}else t.current=null}function Y4(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(r){ue(e,e.return,r)}}function Hs(e,a,t){try{var n=e.stateNode;w3(n,e.type,t,a),n[ba]=a}catch(r){ue(e,e.return,r)}}function V4(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&En(e.type)||e.tag===4}function Gs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||V4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&En(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tc(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=At));else if(n!==4&&(n===27&&En(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(tc(e,a,t),e=e.sibling;e!==null;)tc(e,a,t),e=e.sibling}function v0(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&En(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(v0(e,a,t),e=e.sibling;e!==null;)v0(e,a,t),e=e.sibling}function X4(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);ea(a,n,t),a[Pe]=e,a[ba]=t}catch(i){ue(e,e.return,i)}}var Et=!1,Be=!1,Qs=!1,xm=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function t3(e,a){if(e=e.containerInfo,cc=N0,e=$f(e),au(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var r=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,u=-1,m=0,p=0,g=e,v=null;a:for(;;){for(var b;g!==t||r!==0&&g.nodeType!==3||(s=l+r),g!==i||n!==0&&g.nodeType!==3||(u=l+n),g.nodeType===3&&(l+=g.nodeValue.length),(b=g.firstChild)!==null;)v=g,g=b;for(;;){if(g===e)break a;if(v===t&&++m===r&&(s=l),v===i&&++p===n&&(u=l),(b=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=b}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(uc={focusedElem:e,selectionRange:t},N0=!1,Ze=a;Ze!==null;)if(a=Ze,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ze=e;else for(;Ze!==null;){switch(a=Ze,i=a.alternate,e=a.flags,a.tag){case 0:if(e&4&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,t=a,r=i.memoizedProps,i=i.memoizedState,n=t.stateNode;try{var A=Yn(t.type,r);e=n.getSnapshotBeforeUpdate(A,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(N){ue(t,t.return,N)}}break;case 3:if(e&1024){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)mc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":mc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(q(163))}if(e=a.sibling,e!==null){e.return=a.return,Ze=e;break}Ze=a.return}}function Z4(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:yt(e,t),n&4&&Wi(5,t);break;case 1:if(yt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(l){ue(t,t.return,l)}else{var r=Yn(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(r,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){ue(t,t.return,l)}}n&64&&G4(t),n&512&&xi(t,t.return);break;case 3:if(yt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Pf(e,a)}catch(l){ue(t,t.return,l)}}break;case 27:a===null&&n&4&&X4(t);case 26:case 5:yt(e,t),a===null&&n&4&&Y4(t),n&512&&xi(t,t.return);break;case 12:yt(e,t);break;case 31:yt(e,t),n&4&&J4(e,t);break;case 13:yt(e,t),n&4&&P4(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=d3.bind(null,t),C3(e,t))));break;case 22:if(n=t.memoizedState!==null||Et,!n){a=a!==null&&a.memoizedState!==null||Be,r=Et;var i=Be;Et=n,(Be=a)&&!i?St(e,t,(t.subtreeFlags&8772)!==0):yt(e,t),Et=r,Be=i}break;case 30:break;default:yt(e,t)}}function F4(e){var a=e.alternate;a!==null&&(e.alternate=null,F4(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Kc(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,fa=!1;function bt(e,a,t){for(t=t.child;t!==null;)K4(e,a,t),t=t.sibling}function K4(e,a,t){if(Na&&typeof Na.onCommitFiberUnmount=="function")try{Na.onCommitFiberUnmount(Xi,t)}catch{}switch(t.tag){case 26:Be||lt(t,a),bt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Be||lt(t,a);var n=je,r=fa;En(t.type)&&(je=t.stateNode,fa=!1),bt(e,a,t),Ei(t.stateNode),je=n,fa=r;break;case 5:Be||lt(t,a);case 6:if(n=je,r=fa,je=null,bt(e,a,t),je=n,fa=r,je!==null)if(fa)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(t.stateNode)}catch(i){ue(t,a,i)}else try{je.removeChild(t.stateNode)}catch(i){ue(t,a,i)}break;case 18:je!==null&&(fa?(e=je,$m(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),_r(e)):$m(je,t.stateNode));break;case 4:n=je,r=fa,je=t.stateNode.containerInfo,fa=!0,bt(e,a,t),je=n,fa=r;break;case 0:case 11:case 14:case 15:vn(2,t,a),Be||vn(4,t,a),bt(e,a,t);break;case 1:Be||(lt(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Q4(t,a,n)),bt(e,a,t);break;case 21:bt(e,a,t);break;case 22:Be=(n=Be)||t.memoizedState!==null,bt(e,a,t),Be=n;break;default:bt(e,a,t)}}function J4(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_r(e)}catch(t){ue(a,a.return,t)}}}function P4(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_r(e)}catch(t){ue(a,a.return,t)}}function n3(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new xm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new xm),a;default:throw Error(q(435,e.tag))}}function Sl(e,a){var t=n3(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var r=m3.bind(null,e,n);n.then(r,r)}})}function da(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var r=t[n],i=e,l=a,s=l;e:for(;s!==null;){switch(s.tag){case 27:if(En(s.type)){je=s.stateNode,fa=!1;break e}break;case 5:je=s.stateNode,fa=!1;break e;case 3:case 4:je=s.stateNode.containerInfo,fa=!0;break e}s=s.return}if(je===null)throw Error(q(160));K4(i,l,r),je=null,fa=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)I4(a,e),a=a.sibling}var Wa=null;function I4(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:da(a,e),ma(e),n&4&&(vn(3,e,e.return),Wi(3,e),vn(5,e,e.return));break;case 1:da(a,e),ma(e),n&512&&(Be||t===null||lt(t,t.return)),n&64&&Et&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var r=Wa;if(da(a,e),ma(e),n&512&&(Be||t===null||lt(t,t.return)),n&4){var i=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,r=r.ownerDocument||r;a:switch(n){case"title":i=r.getElementsByTagName("title")[0],(!i||i[Ki]||i[Pe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(n),r.head.insertBefore(i,r.querySelector("head > title"))),ea(i,n,t),i[Pe]=e,Fe(i),n=i;break e;case"link":var l=Lm("link","href",r).get(n+(t.href||""));if(l){for(var s=0;s<l.length;s++)if(i=l[s],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(s,1);break a}}i=r.createElement(n),ea(i,n,t),r.head.appendChild(i);break;case"meta":if(l=Lm("meta","content",r).get(n+(t.content||""))){for(s=0;s<l.length;s++)if(i=l[s],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(s,1);break a}}i=r.createElement(n),ea(i,n,t),r.head.appendChild(i);break;default:throw Error(q(468,n))}i[Pe]=e,Fe(i),n=i}e.stateNode=n}else Hm(r,e.type,e.stateNode);else e.stateNode=Um(r,n,e.memoizedProps);else i!==n?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,n===null?Hm(r,e.type,e.stateNode):Um(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Hs(e,e.memoizedProps,t.memoizedProps)}break;case 27:da(a,e),ma(e),n&512&&(Be||t===null||lt(t,t.return)),t!==null&&n&4&&Hs(e,e.memoizedProps,t.memoizedProps);break;case 5:if(da(a,e),ma(e),n&512&&(Be||t===null||lt(t,t.return)),e.flags&32){r=e.stateNode;try{Nr(r,"")}catch(A){ue(e,e.return,A)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,Hs(e,r,t!==null?t.memoizedProps:r)),n&1024&&(Qs=!0);break;case 6:if(da(a,e),ma(e),n&4){if(e.stateNode===null)throw Error(q(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(A){ue(e,e.return,A)}}break;case 3:if(Kl=null,r=Wa,Wa=E0(a.containerInfo),da(a,e),Wa=r,ma(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{_r(a.containerInfo)}catch(A){ue(e,e.return,A)}Qs&&(Qs=!1,W4(e));break;case 4:n=Wa,Wa=E0(e.stateNode.containerInfo),da(a,e),ma(e),Wa=n;break;case 12:da(a,e),ma(e);break;case 31:da(a,e),ma(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sl(e,n)));break;case 13:da(a,e),ma(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(K0=Aa()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sl(e,n)));break;case 22:r=e.memoizedState!==null;var u=t!==null&&t.memoizedState!==null,m=Et,p=Be;if(Et=m||r,Be=p||u,da(a,e),Be=p,Et=m,ma(e),n&8192)e:for(a=e.stateNode,a._visibility=r?a._visibility&-2:a._visibility|1,r&&(t===null||u||Et||Be||$n(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){u=t=a;try{if(i=u.stateNode,r)l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{s=u.stateNode;var g=u.memoizedProps.style,v=g!=null&&g.hasOwnProperty("display")?g.display:null;s.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(A){ue(u,u.return,A)}}}else if(a.tag===6){if(t===null){u=a;try{u.stateNode.nodeValue=r?"":u.memoizedProps}catch(A){ue(u,u.return,A)}}}else if(a.tag===18){if(t===null){u=a;try{var b=u.stateNode;r?km(b,!0):km(u.stateNode,!1)}catch(A){ue(u,u.return,A)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,Sl(e,t))));break;case 19:da(a,e),ma(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Sl(e,n)));break;case 30:break;case 21:break;default:da(a,e),ma(e)}}function ma(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(V4(n)){t=n;break}n=n.return}if(t==null)throw Error(q(160));switch(t.tag){case 27:var r=t.stateNode,i=Gs(e);v0(e,i,r);break;case 5:var l=t.stateNode;t.flags&32&&(Nr(l,""),t.flags&=-33);var s=Gs(e);v0(e,s,l);break;case 3:case 4:var u=t.stateNode.containerInfo,m=Gs(e);tc(e,m,u);break;default:throw Error(q(161))}}catch(p){ue(e,e.return,p)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function W4(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;W4(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function yt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Z4(e,a.alternate,a),a=a.sibling}function $n(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:vn(4,a,a.return),$n(a);break;case 1:lt(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Q4(a,a.return,t),$n(a);break;case 27:Ei(a.stateNode);case 26:case 5:lt(a,a.return),$n(a);break;case 22:a.memoizedState===null&&$n(a);break;case 30:$n(a);break;default:$n(a)}e=e.sibling}}function St(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,r=e,i=a,l=i.flags;switch(i.tag){case 0:case 11:case 15:St(r,i,t),Wi(4,i);break;case 1:if(St(r,i,t),n=i,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(m){ue(n,n.return,m)}if(n=i,r=n.updateQueue,r!==null){var s=n.stateNode;try{var u=r.shared.hiddenCallbacks;if(u!==null)for(r.shared.hiddenCallbacks=null,r=0;r<u.length;r++)Jf(u[r],s)}catch(m){ue(n,n.return,m)}}t&&l&64&&G4(i),xi(i,i.return);break;case 27:X4(i);case 26:case 5:St(r,i,t),t&&n===null&&l&4&&Y4(i),xi(i,i.return);break;case 12:St(r,i,t);break;case 31:St(r,i,t),t&&l&4&&J4(r,i);break;case 13:St(r,i,t),t&&l&4&&P4(r,i);break;case 22:i.memoizedState===null&&St(r,i,t),xi(i,i.return);break;case 30:break;default:St(r,i,t)}a=a.sibling}}function Nu(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Pi(t))}function qu(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Pi(e))}function Pa(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)e2(e,a,t,n),a=a.sibling}function e2(e,a,t,n){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Pa(e,a,t,n),r&2048&&Wi(9,a);break;case 1:Pa(e,a,t,n);break;case 3:Pa(e,a,t,n),r&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Pi(e)));break;case 12:if(r&2048){Pa(e,a,t,n),e=a.stateNode;try{var i=a.memoizedProps,l=i.id,s=i.onPostCommit;typeof s=="function"&&s(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){ue(a,a.return,u)}}else Pa(e,a,t,n);break;case 31:Pa(e,a,t,n);break;case 13:Pa(e,a,t,n);break;case 23:break;case 22:i=a.stateNode,l=a.alternate,a.memoizedState!==null?i._visibility&2?Pa(e,a,t,n):Si(e,a):i._visibility&2?Pa(e,a,t,n):(i._visibility|=2,nr(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),r&2048&&Nu(l,a);break;case 24:Pa(e,a,t,n),r&2048&&qu(a.alternate,a);break;default:Pa(e,a,t,n)}}function nr(e,a,t,n,r){for(r=r&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var i=e,l=a,s=t,u=n,m=l.flags;switch(l.tag){case 0:case 11:case 15:nr(i,l,s,u,r),Wi(8,l);break;case 23:break;case 22:var p=l.stateNode;l.memoizedState!==null?p._visibility&2?nr(i,l,s,u,r):Si(i,l):(p._visibility|=2,nr(i,l,s,u,r)),r&&m&2048&&Nu(l.alternate,l);break;case 24:nr(i,l,s,u,r),r&&m&2048&&qu(l.alternate,l);break;default:nr(i,l,s,u,r)}a=a.sibling}}function Si(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,r=n.flags;switch(n.tag){case 22:Si(t,n),r&2048&&Nu(n.alternate,n);break;case 24:Si(t,n),r&2048&&qu(n.alternate,n);break;default:Si(t,n)}a=a.sibling}}var ci=8192;function er(e,a,t){if(e.subtreeFlags&ci)for(e=e.child;e!==null;)a2(e,a,t),e=e.sibling}function a2(e,a,t){switch(e.tag){case 26:er(e,a,t),e.flags&ci&&e.memoizedState!==null&&Q3(t,Wa,e.memoizedState,e.memoizedProps);break;case 5:er(e,a,t);break;case 3:case 4:var n=Wa;Wa=E0(e.stateNode.containerInfo),er(e,a,t),Wa=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ci,ci=16777216,er(e,a,t),ci=n):er(e,a,t));break;default:er(e,a,t)}}function t2(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ti(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ze=n,r2(n,e)}t2(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)n2(e),e=e.sibling}function n2(e){switch(e.tag){case 0:case 11:case 15:ti(e),e.flags&2048&&vn(9,e,e.return);break;case 3:ti(e);break;case 12:ti(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Zl(e)):ti(e);break;default:ti(e)}}function Zl(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ze=n,r2(n,e)}t2(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:vn(8,a,a.return),Zl(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Zl(a));break;default:Zl(a)}e=e.sibling}}function r2(e,a){for(;Ze!==null;){var t=Ze;switch(t.tag){case 0:case 11:case 15:vn(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Pi(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Ze=n;else e:for(t=e;Ze!==null;){n=Ze;var r=n.sibling,i=n.return;if(F4(n),n===t){Ze=null;break e}if(r!==null){r.return=i,Ze=r;break e}Ze=i}}}var r3={getCacheForType:function(e){var a=We(Re),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return We(Re).controller.signal}},i3=typeof WeakMap=="function"?WeakMap:Map,re=0,ve=null,ee=null,ae=0,ce=0,Sa=null,en=!1,Yr=!1,Mu=!1,Ot=0,$e=0,gn=0,Un=0,Tu=0,Ea=0,Cr=0,zi=null,pa=null,nc=!1,K0=0,i2=0,g0=1/0,b0=null,cn=null,Ye=0,un=null,Dr=null,Tt=0,rc=0,ic=null,l2=null,wi=0,lc=null;function Ma(){return re&2&&ae!==0?ae&-ae:X.T!==null?Du():hf()}function s2(){if(Ea===0)if(!(ae&536870912)||te){var e=fl;fl<<=1,!(fl&3932160)&&(fl=262144),Ea=e}else Ea=536870912;return e=Da.current,e!==null&&(e.flags|=32),Ea}function ga(e,a,t){(e===ve&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&($r(e,0),an(e,ae,Ea,!1)),Fi(e,t),(!(re&2)||e!==ve)&&(e===ve&&(!(re&2)&&(Un|=t),$e===4&&an(e,ae,Ea,!1)),dt(e))}function o2(e,a,t){if(re&6)throw Error(q(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Zi(e,a),r=n?o3(e,a):Ys(e,a,!0),i=n;do{if(r===0){Yr&&!n&&an(e,a,0,!1);break}else{if(t=e.current.alternate,i&&!l3(t)){r=Ys(e,a,!1),i=!1;continue}if(r===2){if(i=a,e.errorRecoveryDisabledLanes&i)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var s=e;r=zi;var u=s.current.memoizedState.isDehydrated;if(u&&($r(s,l).flags|=256),l=Ys(s,l,!1),l!==2){if(Mu&&!u){s.errorRecoveryDisabledLanes|=i,Un|=i,r=4;break e}i=pa,pa=r,i!==null&&(pa===null?pa=i:pa.push.apply(pa,i))}r=l}if(i=!1,r!==2)continue}}if(r===1){$r(e,0),an(e,a,0,!0);break}e:{switch(n=e,i=r,i){case 0:case 1:throw Error(q(345));case 4:if((a&4194048)!==a)break;case 6:an(n,a,Ea,!en);break e;case 2:pa=null;break;case 3:case 5:break;default:throw Error(q(329))}if((a&62914560)===a&&(r=K0+300-Aa(),10<r)){if(an(n,a,Ea,!en),R0(n,0,!0)!==0)break e;Tt=a,n.timeoutHandle=q2(Sm.bind(null,n,t,pa,b0,nc,a,Ea,Un,Cr,en,i,"Throttled",-0,0),r);break e}Sm(n,t,pa,b0,nc,a,Ea,Un,Cr,en,i,null,-0,0)}}break}while(!0);dt(e)}function Sm(e,a,t,n,r,i,l,s,u,m,p,g,v,b){if(e.timeoutHandle=-1,g=a.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:At},a2(a,i,g);var A=(i&62914560)===i?K0-Aa():(i&4194048)===i?i2-Aa():0;if(A=Y3(g,A),A!==null){Tt=i,e.cancelPendingCommit=A(wm.bind(null,e,a,i,t,n,r,l,s,u,p,g,null,v,b)),an(e,i,l,!m);return}}wm(e,a,i,t,n,r,l,s,u)}function l3(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var r=t[n],i=r.getSnapshot;r=r.value;try{if(!Ca(i(),r))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function an(e,a,t,n){a&=~Tu,a&=~Un,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var r=a;0<r;){var i=31-qa(r),l=1<<i;n[i]=-1,r&=~l}t!==0&&mf(e,t,a)}function J0(){return re&6?!0:(el(0),!1)}function Cu(){if(ee!==null){if(ce===0)var e=ee.return;else e=ee,Nt=Kn=null,vu(e),Sr=null,Di=0,e=ee;for(;e!==null;)H4(e.alternate,e),e=e.return;ee=null}}function $r(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,A3(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Tt=0,Cu(),ve=e,ee=t=qt(e.current,null),ae=a,ce=0,Sa=null,en=!1,Yr=Zi(e,a),Mu=!1,Cr=Ea=Tu=Un=gn=$e=0,pa=zi=null,nc=!1,a&8&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var r=31-qa(n),i=1<<r;a|=e[r],n&=~i}return Ot=a,G0(),t}function c2(e,a){P=null,X.H=ki,a===Qr||a===Y0?(a=Wd(),ce=3):a===cu?(a=Wd(),ce=4):ce=a===ju?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Sa=a,ee===null&&($e=1,p0(e,Qa(a,e.current)))}function u2(){var e=Da.current;return e===null?!0:(ae&4194048)===ae?Xa===null:(ae&62914560)===ae||ae&536870912?e===Xa:!1}function d2(){var e=X.H;return X.H=ki,e===null?ki:e}function m2(){var e=X.A;return X.A=r3,e}function y0(){$e=4,en||(ae&4194048)!==ae&&Da.current!==null||(Yr=!0),!(gn&134217727)&&!(Un&134217727)||ve===null||an(ve,ae,Ea,!1)}function Ys(e,a,t){var n=re;re|=2;var r=d2(),i=m2();(ve!==e||ae!==a)&&(b0=null,$r(e,a)),a=!1;var l=$e;e:do try{if(ce!==0&&ee!==null){var s=ee,u=Sa;switch(ce){case 8:Cu(),l=6;break e;case 3:case 2:case 9:case 6:Da.current===null&&(a=!0);var m=ce;if(ce=0,Sa=null,vr(e,s,u,m),t&&Yr){l=0;break e}break;default:m=ce,ce=0,Sa=null,vr(e,s,u,m)}}s3(),l=$e;break}catch(p){c2(e,p)}while(!0);return a&&e.shellSuspendCounter++,Nt=Kn=null,re=n,X.H=r,X.A=i,ee===null&&(ve=null,ae=0,G0()),l}function s3(){for(;ee!==null;)f2(ee)}function o3(e,a){var t=re;re|=2;var n=d2(),r=m2();ve!==e||ae!==a?(b0=null,g0=Aa()+500,$r(e,a)):Yr=Zi(e,a);e:do try{if(ce!==0&&ee!==null){a=ee;var i=Sa;a:switch(ce){case 1:ce=0,Sa=null,vr(e,a,i,1);break;case 2:case 9:if(Id(i)){ce=0,Sa=null,zm(a);break}a=function(){ce!==2&&ce!==9||ve!==e||(ce=7),dt(e)},i.then(a,a);break e;case 3:ce=7;break e;case 4:ce=5;break e;case 7:Id(i)?(ce=0,Sa=null,zm(a)):(ce=0,Sa=null,vr(e,a,i,7));break;case 5:var l=null;switch(ee.tag){case 26:l=ee.memoizedState;case 5:case 27:var s=ee;if(l?$2(l):s.stateNode.complete){ce=0,Sa=null;var u=s.sibling;if(u!==null)ee=u;else{var m=s.return;m!==null?(ee=m,P0(m)):ee=null}break a}}ce=0,Sa=null,vr(e,a,i,5);break;case 6:ce=0,Sa=null,vr(e,a,i,6);break;case 8:Cu(),$e=6;break e;default:throw Error(q(462))}}c3();break}catch(p){c2(e,p)}while(!0);return Nt=Kn=null,X.H=n,X.A=r,re=t,ee!==null?0:(ve=null,ae=0,G0(),$e)}function c3(){for(;ee!==null&&!Dh();)f2(ee)}function f2(e){var a=L4(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,a===null?P0(e):ee=a}function zm(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=hm(t,a,a.pendingProps,a.type,void 0,ae);break;case 11:a=hm(t,a,a.pendingProps,a.type.render,a.ref,ae);break;case 5:vu(a);default:H4(t,a),a=ee=Hf(a,Ot),a=L4(t,a,Ot)}e.memoizedProps=e.pendingProps,a===null?P0(e):ee=a}function vr(e,a,t,n){Nt=Kn=null,vu(a),Sr=null,Di=0;var r=a.return;try{if(P5(e,r,a,t,ae)){$e=1,p0(e,Qa(t,e.current)),ee=null;return}}catch(i){if(r!==null)throw ee=r,i;$e=1,p0(e,Qa(t,e.current)),ee=null;return}a.flags&32768?(te||n===1?e=!0:Yr||ae&536870912?e=!1:(en=e=!0,(n===2||n===9||n===3||n===6)&&(n=Da.current,n!==null&&n.tag===13&&(n.flags|=16384))),p2(a,e)):P0(a)}function P0(e){var a=e;do{if(a.flags&32768){p2(a,en);return}e=a.return;var t=e3(a.alternate,a,Ot);if(t!==null){ee=t;return}if(a=a.sibling,a!==null){ee=a;return}ee=a=e}while(a!==null);$e===0&&($e=5)}function p2(e,a){do{var t=a3(e.alternate,e);if(t!==null){t.flags&=32767,ee=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ee=e;return}ee=e=t}while(e!==null);$e=6,ee=null}function wm(e,a,t,n,r,i,l,s,u){e.cancelPendingCommit=null;do I0();while(Ye!==0);if(re&6)throw Error(q(327));if(a!==null){if(a===e.current)throw Error(q(177));if(i=a.lanes|a.childLanes,i|=tu,Gh(e,t,i,l,s,u),e===ve&&(ee=ve=null,ae=0),Dr=a,un=e,Tt=t,rc=i,ic=r,l2=n,a.subtreeFlags&10256||a.flags&10256?(e.callbackNode=null,e.callbackPriority=0,f3(n0,function(){return y2(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,a.subtreeFlags&13878||n){n=X.T,X.T=null,r=le.p,le.p=2,l=re,re|=4;try{t3(e,a,t)}finally{re=l,le.p=r,X.T=n}}Ye=1,h2(),v2(),g2()}}function h2(){if(Ye===1){Ye=0;var e=un,a=Dr,t=(a.flags&13878)!==0;if(a.subtreeFlags&13878||t){t=X.T,X.T=null;var n=le.p;le.p=2;var r=re;re|=4;try{I4(a,e);var i=uc,l=$f(e.containerInfo),s=i.focusedElem,u=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&Df(s.ownerDocument.documentElement,s)){if(u!==null&&au(s)){var m=u.start,p=u.end;if(p===void 0&&(p=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(p,s.value.length);else{var g=s.ownerDocument||document,v=g&&g.defaultView||window;if(v.getSelection){var b=v.getSelection(),A=s.textContent.length,N=Math.min(u.start,A),M=u.end===void 0?N:Math.min(u.end,A);!b.extend&&N>M&&(l=M,M=N,N=l);var x=Vd(s,N),y=Vd(s,M);if(x&&y&&(b.rangeCount!==1||b.anchorNode!==x.node||b.anchorOffset!==x.offset||b.focusNode!==y.node||b.focusOffset!==y.offset)){var w=g.createRange();w.setStart(x.node,x.offset),b.removeAllRanges(),N>M?(b.addRange(w),b.extend(y.node,y.offset)):(w.setEnd(y.node,y.offset),b.addRange(w))}}}}for(g=[],b=s;b=b.parentNode;)b.nodeType===1&&g.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<g.length;s++){var j=g[s];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}N0=!!cc,uc=cc=null}finally{re=r,le.p=n,X.T=t}}e.current=a,Ye=2}}function v2(){if(Ye===2){Ye=0;var e=un,a=Dr,t=(a.flags&8772)!==0;if(a.subtreeFlags&8772||t){t=X.T,X.T=null;var n=le.p;le.p=2;var r=re;re|=4;try{Z4(e,a.alternate,a)}finally{re=r,le.p=n,X.T=t}}Ye=3}}function g2(){if(Ye===4||Ye===3){Ye=0,$h();var e=un,a=Dr,t=Tt,n=l2;a.subtreeFlags&10256||a.flags&10256?Ye=5:(Ye=0,Dr=un=null,b2(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(cn=null),Fc(t),a=a.stateNode,Na&&typeof Na.onCommitFiberRoot=="function")try{Na.onCommitFiberRoot(Xi,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=X.T,r=le.p,le.p=2,X.T=null;try{for(var i=e.onRecoverableError,l=0;l<n.length;l++){var s=n[l];i(s.value,{componentStack:s.stack})}}finally{X.T=a,le.p=r}}Tt&3&&I0(),dt(e),r=e.pendingLanes,t&261930&&r&42?e===lc?wi++:(wi=0,lc=e):wi=0,el(0)}}function b2(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Pi(a)))}function I0(){return h2(),v2(),g2(),y2()}function y2(){if(Ye!==5)return!1;var e=un,a=rc;rc=0;var t=Fc(Tt),n=X.T,r=le.p;try{le.p=32>t?32:t,X.T=null,t=ic,ic=null;var i=un,l=Tt;if(Ye=0,Dr=un=null,Tt=0,re&6)throw Error(q(331));var s=re;if(re|=4,n2(i.current),e2(i,i.current,l,t),re=s,el(0,!1),Na&&typeof Na.onPostCommitFiberRoot=="function")try{Na.onPostCommitFiberRoot(Xi,i)}catch{}return!0}finally{le.p=r,X.T=n,b2(e,a)}}function Em(e,a,t){a=Qa(t,a),a=Wo(e.stateNode,a,2),e=on(e,a,2),e!==null&&(Fi(e,2),dt(e))}function ue(e,a,t){if(e.tag===3)Em(e,e,t);else for(;a!==null;){if(a.tag===3){Em(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(cn===null||!cn.has(n))){e=Qa(t,e),t=k4(2),n=on(a,t,2),n!==null&&(_4(t,n,a,e),Fi(n,2),dt(n));break}}a=a.return}}function Vs(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new i3;var r=new Set;n.set(a,r)}else r=n.get(a),r===void 0&&(r=new Set,n.set(a,r));r.has(t)||(Mu=!0,r.add(t),e=u3.bind(null,e,a,t),a.then(e,e))}function u3(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ve===e&&(ae&t)===t&&($e===4||$e===3&&(ae&62914560)===ae&&300>Aa()-K0?!(re&2)&&$r(e,0):Tu|=t,Cr===ae&&(Cr=0)),dt(e)}function x2(e,a){a===0&&(a=df()),e=Fn(e,a),e!==null&&(Fi(e,a),dt(e))}function d3(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),x2(e,t)}function m3(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(q(314))}n!==null&&n.delete(a),x2(e,t)}function f3(e,a){return Xc(e,a)}var x0=null,rr=null,sc=!1,S0=!1,Xs=!1,tn=0;function dt(e){e!==rr&&e.next===null&&(rr===null?x0=rr=e:rr=rr.next=e),S0=!0,sc||(sc=!0,h3())}function el(e,a){if(!Xs&&S0){Xs=!0;do for(var t=!1,n=x0;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var i=0;else{var l=n.suspendedLanes,s=n.pingedLanes;i=(1<<31-qa(42|e)+1)-1,i&=r&~(l&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,jm(n,i))}else i=ae,i=R0(n,n===ve?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(i&3)||Zi(n,i)||(t=!0,jm(n,i));n=n.next}while(t);Xs=!1}}function p3(){S2()}function S2(){S0=sc=!1;var e=0;tn!==0&&j3()&&(e=tn);for(var a=Aa(),t=null,n=x0;n!==null;){var r=n.next,i=z2(n,a);i===0?(n.next=null,t===null?x0=r:t.next=r,r===null&&(rr=t)):(t=n,(e!==0||i&3)&&(S0=!0)),n=r}Ye!==0&&Ye!==5||el(e),tn!==0&&(tn=0)}function z2(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var l=31-qa(i),s=1<<l,u=r[l];u===-1?(!(s&t)||s&n)&&(r[l]=Hh(s,a)):u<=a&&(e.expiredLanes|=s),i&=~s}if(a=ve,t=ae,t=R0(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&xs(n),e.callbackNode=null,e.callbackPriority=0;if(!(t&3)||Zi(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&xs(n),Fc(t)){case 2:case 8:t=cf;break;case 32:t=n0;break;case 268435456:t=uf;break;default:t=n0}return n=w2.bind(null,e),t=Xc(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&xs(n),e.callbackPriority=2,e.callbackNode=null,2}function w2(e,a){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(I0()&&e.callbackNode!==t)return null;var n=ae;return n=R0(e,e===ve?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(o2(e,n,a),z2(e,Aa()),e.callbackNode!=null&&e.callbackNode===t?w2.bind(null,e):null)}function jm(e,a){if(I0())return null;o2(e,a,!0)}function h3(){N3(function(){re&6?Xc(of,p3):S2()})}function Du(){if(tn===0){var e=qr;e===0&&(e=ml,ml<<=1,!(ml&261888)&&(ml=256)),tn=e}return tn}function Am(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(""+e)}function Nm(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function v3(e,a,t,n,r){if(a==="submit"&&t&&t.stateNode===r){var i=Am((r[ba]||null).action),l=n.submitter;l&&(a=(a=l[ba]||null)?Am(a.formAction):l.getAttribute("formAction"),a!==null&&(i=a,l=null));var s=new U0("action","action",null,n,r);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(tn!==0){var u=l?Nm(r,l):new FormData(r);Po(t,{pending:!0,data:u,method:r.method,action:i},null,u)}}else typeof i=="function"&&(s.preventDefault(),u=l?Nm(r,l):new FormData(r),Po(t,{pending:!0,data:u,method:r.method,action:i},i,u))},currentTarget:r}]})}}for(var Zs=0;Zs<Uo.length;Zs++){var Fs=Uo[Zs],g3=Fs.toLowerCase(),b3=Fs[0].toUpperCase()+Fs.slice(1);et(g3,"on"+b3)}et(_f,"onAnimationEnd");et(Of,"onAnimationIteration");et(Bf,"onAnimationStart");et("dblclick","onDoubleClick");et("focusin","onFocus");et("focusout","onBlur");et(k5,"onTransitionRun");et(_5,"onTransitionStart");et(O5,"onTransitionCancel");et(Rf,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_i));function E2(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],r=n.event;n=n.listeners;e:{var i=void 0;if(a)for(var l=n.length-1;0<=l;l--){var s=n[l],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==i&&r.isPropagationStopped())break e;i=s,r.currentTarget=m;try{i(r)}catch(p){i0(p)}r.currentTarget=null,i=u}else for(l=0;l<n.length;l++){if(s=n[l],u=s.instance,m=s.currentTarget,s=s.listener,u!==i&&r.isPropagationStopped())break e;i=s,r.currentTarget=m;try{i(r)}catch(p){i0(p)}r.currentTarget=null,i=u}}}}function W(e,a){var t=a[Co];t===void 0&&(t=a[Co]=new Set);var n=e+"__bubble";t.has(n)||(j2(a,e,2,!1),t.add(n))}function Ks(e,a,t){var n=0;a&&(n|=4),j2(t,e,n,a)}var zl="_reactListening"+Math.random().toString(36).slice(2);function $u(e){if(!e[zl]){e[zl]=!0,vf.forEach(function(t){t!=="selectionchange"&&(y3.has(t)||Ks(t,!1,e),Ks(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[zl]||(a[zl]=!0,Ks("selectionchange",!1,a))}}function j2(e,a,t,n){switch(R2(a)){case 2:var r=Z3;break;case 8:r=F3;break;default:r=Bu}t=r.bind(null,a,t,e),r=void 0,!Oo||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(a,t,{capture:!0,passive:r}):e.addEventListener(a,t,!0):r!==void 0?e.addEventListener(a,t,{passive:r}):e.addEventListener(a,t,!1)}function Js(e,a,t,n,r){var i=n;if(!(a&1)&&!(a&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===r)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&l.stateNode.containerInfo===r)return;l=l.return}for(;s!==null;){if(l=sr(s),l===null)return;if(u=l.tag,u===5||u===6||u===26||u===27){n=i=l;continue e}s=s.parentNode}}n=n.return}Ef(function(){var m=i,p=Pc(t),g=[];e:{var v=Uf.get(e);if(v!==void 0){var b=U0,A=e;switch(e){case"keypress":if(Ll(t)===0)break e;case"keydown":case"keyup":b=m5;break;case"focusin":A="focus",b=js;break;case"focusout":A="blur",b=js;break;case"beforeblur":case"afterblur":b=js;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=_d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=e5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=h5;break;case _f:case Of:case Bf:b=n5;break;case Rf:b=g5;break;case"scroll":case"scrollend":b=Ih;break;case"wheel":b=y5;break;case"copy":case"cut":case"paste":b=i5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Bd;break;case"toggle":case"beforetoggle":b=S5}var N=(a&4)!==0,M=!N&&(e==="scroll"||e==="scrollend"),x=N?v!==null?v+"Capture":null:v;N=[];for(var y=m,w;y!==null;){var j=y;if(w=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||w===null||x===null||(j=Ni(y,x),j!=null&&N.push(Oi(y,j,w))),M)break;y=y.return}0<N.length&&(v=new b(v,A,null,t,p),g.push({event:v,listeners:N}))}}if(!(a&7)){e:{if(v=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",v&&t!==_o&&(A=t.relatedTarget||t.fromElement)&&(sr(A)||A[Lr]))break e;if((b||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,b?(A=t.relatedTarget||t.toElement,b=m,A=A?sr(A):null,A!==null&&(M=Vi(A),N=A.tag,A!==M||N!==5&&N!==27&&N!==6)&&(A=null)):(b=null,A=m),b!==A)){if(N=_d,j="onMouseLeave",x="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(N=Bd,j="onPointerLeave",x="onPointerEnter",y="pointer"),M=b==null?v:si(b),w=A==null?v:si(A),v=new N(j,y+"leave",b,t,p),v.target=M,v.relatedTarget=w,j=null,sr(p)===m&&(N=new N(x,y+"enter",A,t,p),N.target=w,N.relatedTarget=M,j=N),M=j,b&&A)a:{for(N=x3,x=b,y=A,w=0,j=x;j;j=N(j))w++;j=0;for(var $=y;$;$=N($))j++;for(;0<w-j;)x=N(x),w--;for(;0<j-w;)y=N(y),j--;for(;w--;){if(x===y||y!==null&&x===y.alternate){N=x;break a}x=N(x),y=N(y)}N=null}else N=null;b!==null&&qm(g,v,b,N,!1),A!==null&&M!==null&&qm(g,M,A,N,!0)}}e:{if(v=m?si(m):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var B=Hd;else if(Ld(v))if(Tf)B=C5;else{B=M5;var C=q5}else b=v.nodeName,!b||b.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?m&&Jc(m.elementType)&&(B=Hd):B=T5;if(B&&(B=B(e,m))){Mf(g,B,t,p);break e}C&&C(e,v,m),e==="focusout"&&m&&v.type==="number"&&m.memoizedProps.value!=null&&ko(v,"number",v.value)}switch(C=m?si(m):window,e){case"focusin":(Ld(C)||C.contentEditable==="true")&&(ur=C,Bo=m,pi=null);break;case"focusout":pi=Bo=ur=null;break;case"mousedown":Ro=!0;break;case"contextmenu":case"mouseup":case"dragend":Ro=!1,Xd(g,t,p);break;case"selectionchange":if($5)break;case"keydown":case"keyup":Xd(g,t,p)}var U;if(eu)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else cr?Nf(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Af&&t.locale!=="ko"&&(cr||L!=="onCompositionStart"?L==="onCompositionEnd"&&cr&&(U=jf()):(Wt=p,Ic="value"in Wt?Wt.value:Wt.textContent,cr=!0)),C=z0(m,L),0<C.length&&(L=new Od(L,e,null,t,p),g.push({event:L,listeners:C}),U?L.data=U:(U=qf(t),U!==null&&(L.data=U)))),(U=w5?E5(e,t):j5(e,t))&&(L=z0(m,"onBeforeInput"),0<L.length&&(C=new Od("onBeforeInput","beforeinput",null,t,p),g.push({event:C,listeners:L}),C.data=U)),v3(g,e,m,t,p)}E2(g,a)})}function Oi(e,a,t){return{instance:e,listener:a,currentTarget:t}}function z0(e,a){for(var t=a+"Capture",n=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Ni(e,t),r!=null&&n.unshift(Oi(e,r,i)),r=Ni(e,a),r!=null&&n.push(Oi(e,r,i))),e.tag===3)return n;e=e.return}return[]}function x3(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qm(e,a,t,n,r){for(var i=a._reactName,l=[];t!==null&&t!==n;){var s=t,u=s.alternate,m=s.stateNode;if(s=s.tag,u!==null&&u===n)break;s!==5&&s!==26&&s!==27||m===null||(u=m,r?(m=Ni(t,i),m!=null&&l.unshift(Oi(t,m,u))):r||(m=Ni(t,i),m!=null&&l.push(Oi(t,m,u)))),t=t.return}l.length!==0&&e.push({event:a,listeners:l})}var S3=/\r\n?/g,z3=/\u0000|\uFFFD/g;function Mm(e){return(typeof e=="string"?e:""+e).replace(S3,`
`).replace(z3,"")}function A2(e,a){return a=Mm(a),Mm(e)===a}function de(e,a,t,n,r,i){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||Nr(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&Nr(e,""+n);break;case"className":hl(e,"class",n);break;case"tabIndex":hl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":hl(e,t,n);break;case"style":wf(e,n,i);break;case"data":if(a!=="object"){hl(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Rl(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(a!=="input"&&de(e,a,"name",r.name,r,null),de(e,a,"formEncType",r.formEncType,r,null),de(e,a,"formMethod",r.formMethod,r,null),de(e,a,"formTarget",r.formTarget,r,null)):(de(e,a,"encType",r.encType,r,null),de(e,a,"method",r.method,r,null),de(e,a,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Rl(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=At);break;case"onScroll":n!=null&&W("scroll",e);break;case"onScrollEnd":n!=null&&W("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(q(61));if(t=n.__html,t!=null){if(r.children!=null)throw Error(q(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=Rl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":W("beforetoggle",e),W("toggle",e),Bl(e,"popover",n);break;case"xlinkActuate":vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":vt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":vt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":vt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":vt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Bl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Jh.get(t)||t,Bl(e,t,n))}}function oc(e,a,t,n,r,i){switch(t){case"style":wf(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(q(61));if(t=n.__html,t!=null){if(r.children!=null)throw Error(q(60));e.innerHTML=t}}break;case"children":typeof n=="string"?Nr(e,n):(typeof n=="number"||typeof n=="bigint")&&Nr(e,""+n);break;case"onScroll":n!=null&&W("scroll",e);break;case"onScrollEnd":n!=null&&W("scrollend",e);break;case"onClick":n!=null&&(e.onclick=At);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gf.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),a=t.slice(2,r?t.length-7:void 0),i=e[ba]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(a,i,r),typeof n=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,r);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):Bl(e,t,n)}}}function ea(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",e),W("load",e);var n=!1,r=!1,i;for(i in t)if(t.hasOwnProperty(i)){var l=t[i];if(l!=null)switch(i){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(q(137,a));default:de(e,a,i,l,t,null)}}r&&de(e,a,"srcSet",t.srcSet,t,null),n&&de(e,a,"src",t.src,t,null);return;case"input":W("invalid",e);var s=i=l=r=null,u=null,m=null;for(n in t)if(t.hasOwnProperty(n)){var p=t[n];if(p!=null)switch(n){case"name":r=p;break;case"type":l=p;break;case"checked":u=p;break;case"defaultChecked":m=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(q(137,a));break;default:de(e,a,n,p,t,null)}}xf(e,i,s,u,m,l,r,!1);return;case"select":W("invalid",e),n=l=i=null;for(r in t)if(t.hasOwnProperty(r)&&(s=t[r],s!=null))switch(r){case"value":i=s;break;case"defaultValue":l=s;break;case"multiple":n=s;default:de(e,a,r,s,t,null)}a=i,t=l,e.multiple=!!n,a!=null?br(e,!!n,a,!1):t!=null&&br(e,!!n,t,!0);return;case"textarea":W("invalid",e),i=r=n=null;for(l in t)if(t.hasOwnProperty(l)&&(s=t[l],s!=null))switch(l){case"value":n=s;break;case"defaultValue":r=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(q(91));break;default:de(e,a,l,s,t,null)}zf(e,n,r,i);return;case"option":for(u in t)if(t.hasOwnProperty(u)&&(n=t[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:de(e,a,u,n,t,null)}return;case"dialog":W("beforetoggle",e),W("toggle",e),W("cancel",e),W("close",e);break;case"iframe":case"object":W("load",e);break;case"video":case"audio":for(n=0;n<_i.length;n++)W(_i[n],e);break;case"image":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"embed":case"source":case"link":W("error",e),W("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in t)if(t.hasOwnProperty(m)&&(n=t[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(q(137,a));default:de(e,a,m,n,t,null)}return;default:if(Jc(a)){for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!==void 0&&oc(e,a,p,n,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(n=t[s],n!=null&&de(e,a,s,n,t,null))}function w3(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,l=null,s=null,u=null,m=null,p=null;for(b in t){var g=t[b];if(t.hasOwnProperty(b)&&g!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":u=g;default:n.hasOwnProperty(b)||de(e,a,b,null,n,g)}}for(var v in n){var b=n[v];if(g=t[v],n.hasOwnProperty(v)&&(b!=null||g!=null))switch(v){case"type":i=b;break;case"name":r=b;break;case"checked":m=b;break;case"defaultChecked":p=b;break;case"value":l=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(q(137,a));break;default:b!==g&&de(e,a,v,b,n,g)}}$o(e,l,s,u,m,p,i,r);return;case"select":b=l=s=v=null;for(i in t)if(u=t[i],t.hasOwnProperty(i)&&u!=null)switch(i){case"value":break;case"multiple":b=u;default:n.hasOwnProperty(i)||de(e,a,i,null,n,u)}for(r in n)if(i=n[r],u=t[r],n.hasOwnProperty(r)&&(i!=null||u!=null))switch(r){case"value":v=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==u&&de(e,a,r,i,n,u)}a=s,t=l,n=b,v!=null?br(e,!!t,v,!1):!!n!=!!t&&(a!=null?br(e,!!t,a,!0):br(e,!!t,t?[]:"",!1));return;case"textarea":b=v=null;for(s in t)if(r=t[s],t.hasOwnProperty(s)&&r!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:de(e,a,s,null,n,r)}for(l in n)if(r=n[l],i=t[l],n.hasOwnProperty(l)&&(r!=null||i!=null))switch(l){case"value":v=r;break;case"defaultValue":b=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(q(91));break;default:r!==i&&de(e,a,l,r,n,i)}Sf(e,v,b);return;case"option":for(var A in t)if(v=t[A],t.hasOwnProperty(A)&&v!=null&&!n.hasOwnProperty(A))switch(A){case"selected":e.selected=!1;break;default:de(e,a,A,null,n,v)}for(u in n)if(v=n[u],b=t[u],n.hasOwnProperty(u)&&v!==b&&(v!=null||b!=null))switch(u){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:de(e,a,u,v,n,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in t)v=t[N],t.hasOwnProperty(N)&&v!=null&&!n.hasOwnProperty(N)&&de(e,a,N,null,n,v);for(m in n)if(v=n[m],b=t[m],n.hasOwnProperty(m)&&v!==b&&(v!=null||b!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(q(137,a));break;default:de(e,a,m,v,n,b)}return;default:if(Jc(a)){for(var M in t)v=t[M],t.hasOwnProperty(M)&&v!==void 0&&!n.hasOwnProperty(M)&&oc(e,a,M,void 0,n,v);for(p in n)v=n[p],b=t[p],!n.hasOwnProperty(p)||v===b||v===void 0&&b===void 0||oc(e,a,p,v,n,b);return}}for(var x in t)v=t[x],t.hasOwnProperty(x)&&v!=null&&!n.hasOwnProperty(x)&&de(e,a,x,null,n,v);for(g in n)v=n[g],b=t[g],!n.hasOwnProperty(g)||v===b||v==null&&b==null||de(e,a,g,v,n,b)}function Tm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function E3(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var r=t[n],i=r.transferSize,l=r.initiatorType,s=r.duration;if(i&&s&&Tm(l)){for(l=0,s=r.responseEnd,n+=1;n<t.length;n++){var u=t[n],m=u.startTime;if(m>s)break;var p=u.transferSize,g=u.initiatorType;p&&Tm(g)&&(u=u.responseEnd,l+=p*(u<s?1:(s-m)/(u-m)))}if(--n,a+=8*(i+l)/(r.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cc=null,uc=null;function w0(e){return e.nodeType===9?e:e.ownerDocument}function Cm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N2(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function dc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ps=null;function j3(){var e=window.event;return e&&e.type==="popstate"?e===Ps?!1:(Ps=e,!0):(Ps=null,!1)}var q2=typeof setTimeout=="function"?setTimeout:void 0,A3=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,N3=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(e){return Dm.resolve(null).then(e).catch(q3)}:q2;function q3(e){setTimeout(function(){throw e})}function En(e){return e==="head"}function $m(e,a){var t=a,n=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(r),_r(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Ei(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ei(t);for(var i=t.firstChild;i;){var l=i.nextSibling,s=i.nodeName;i[Ki]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=l}}else t==="body"&&Ei(e.ownerDocument.body);t=r}while(t);_r(a)}function km(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function mc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":mc(t),Kc(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function M3(e,a,t,n){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ki])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Za(e.nextSibling),e===null)break}return null}function T3(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Za(e.nextSibling),e===null))return null;return e}function M2(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Za(e.nextSibling),e===null))return null;return e}function fc(e){return e.data==="$?"||e.data==="$~"}function pc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function C3(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Za(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var hc=null;function _m(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Za(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Om(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function T2(e,a,t){switch(a=w0(t),e){case"html":if(e=a.documentElement,!e)throw Error(q(452));return e;case"head":if(e=a.head,!e)throw Error(q(453));return e;case"body":if(e=a.body,!e)throw Error(q(454));return e;default:throw Error(q(451))}}function Ei(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Kc(e)}var Fa=new Map,Bm=new Set;function E0(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rt=le.d;le.d={f:D3,r:$3,D:k3,C:_3,L:O3,m:B3,X:U3,S:R3,M:L3};function D3(){var e=Rt.f(),a=J0();return e||a}function $3(e){var a=Hr(e);a!==null&&a.tag===5&&a.type==="form"?w4(a):Rt.r(e)}var Vr=typeof document>"u"?null:document;function C2(e,a,t){var n=Vr;if(n&&typeof a=="string"&&a){var r=Ga(a);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),Bm.has(r)||(Bm.add(r),e={rel:e,crossOrigin:t,href:a},n.querySelector(r)===null&&(a=n.createElement("link"),ea(a,"link",e),Fe(a),n.head.appendChild(a)))}}function k3(e){Rt.D(e),C2("dns-prefetch",e,null)}function _3(e,a){Rt.C(e,a),C2("preconnect",e,a)}function O3(e,a,t){Rt.L(e,a,t);var n=Vr;if(n&&e&&a){var r='link[rel="preload"][as="'+Ga(a)+'"]';a==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+Ga(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+Ga(t.imageSizes)+'"]')):r+='[href="'+Ga(e)+'"]';var i=r;switch(a){case"style":i=kr(e);break;case"script":i=Xr(e)}Fa.has(i)||(e=Ee({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Fa.set(i,e),n.querySelector(r)!==null||a==="style"&&n.querySelector(al(i))||a==="script"&&n.querySelector(tl(i))||(a=n.createElement("link"),ea(a,"link",e),Fe(a),n.head.appendChild(a)))}}function B3(e,a){Rt.m(e,a);var t=Vr;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",r='link[rel="modulepreload"][as="'+Ga(n)+'"][href="'+Ga(e)+'"]',i=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Xr(e)}if(!Fa.has(i)&&(e=Ee({rel:"modulepreload",href:e},a),Fa.set(i,e),t.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(tl(i)))return}n=t.createElement("link"),ea(n,"link",e),Fe(n),t.head.appendChild(n)}}}function R3(e,a,t){Rt.S(e,a,t);var n=Vr;if(n&&e){var r=gr(n).hoistableStyles,i=kr(e);a=a||"default";var l=r.get(i);if(!l){var s={loading:0,preload:null};if(l=n.querySelector(al(i)))s.loading=5;else{e=Ee({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Fa.get(i))&&ku(e,t);var u=l=n.createElement("link");Fe(u),ea(u,"link",e),u._p=new Promise(function(m,p){u.onload=m,u.onerror=p}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Fl(l,a,n)}l={type:"stylesheet",instance:l,count:1,state:s},r.set(i,l)}}}function U3(e,a){Rt.X(e,a);var t=Vr;if(t&&e){var n=gr(t).hoistableScripts,r=Xr(e),i=n.get(r);i||(i=t.querySelector(tl(r)),i||(e=Ee({src:e,async:!0},a),(a=Fa.get(r))&&_u(e,a),i=t.createElement("script"),Fe(i),ea(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(r,i))}}function L3(e,a){Rt.M(e,a);var t=Vr;if(t&&e){var n=gr(t).hoistableScripts,r=Xr(e),i=n.get(r);i||(i=t.querySelector(tl(r)),i||(e=Ee({src:e,async:!0,type:"module"},a),(a=Fa.get(r))&&_u(e,a),i=t.createElement("script"),Fe(i),ea(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(r,i))}}function Rm(e,a,t,n){var r=(r=rn.current)?E0(r):null;if(!r)throw Error(q(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=kr(t.href),t=gr(r).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=kr(t.href);var i=gr(r).hoistableStyles,l=i.get(e);if(l||(r=r.ownerDocument||r,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,l),(i=r.querySelector(al(e)))&&!i._p&&(l.instance=i,l.state.loading=5),Fa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Fa.set(e,t),i||H3(r,e,t,l.state))),a&&n===null)throw Error(q(528,""));return l}if(a&&n!==null)throw Error(q(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Xr(t),t=gr(r).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(q(444,e))}}function kr(e){return'href="'+Ga(e)+'"'}function al(e){return'link[rel="stylesheet"]['+e+"]"}function D2(e){return Ee({},e,{"data-precedence":e.precedence,precedence:null})}function H3(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),ea(a,"link",t),Fe(a),e.head.appendChild(a))}function Xr(e){return'[src="'+Ga(e)+'"]'}function tl(e){return"script[async]"+e}function Um(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ga(t.href)+'"]');if(n)return a.instance=n,Fe(n),n;var r=Ee({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),ea(n,"style",r),Fl(n,t.precedence,e),a.instance=n;case"stylesheet":r=kr(t.href);var i=e.querySelector(al(r));if(i)return a.state.loading|=4,a.instance=i,Fe(i),i;n=D2(t),(r=Fa.get(r))&&ku(n,r),i=(e.ownerDocument||e).createElement("link"),Fe(i);var l=i;return l._p=new Promise(function(s,u){l.onload=s,l.onerror=u}),ea(i,"link",n),a.state.loading|=4,Fl(i,t.precedence,e),a.instance=i;case"script":return i=Xr(t.src),(r=e.querySelector(tl(i)))?(a.instance=r,Fe(r),r):(n=t,(r=Fa.get(i))&&(n=Ee({},t),_u(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),Fe(r),ea(r,"link",n),e.head.appendChild(r),a.instance=r);case"void":return null;default:throw Error(q(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(n=a.instance,a.state.loading|=4,Fl(n,t.precedence,e));return a.instance}function Fl(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,i=r,l=0;l<n.length;l++){var s=n[l];if(s.dataset.precedence===a)i=s;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function ku(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function _u(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Kl=null;function Lm(e,a,t){if(Kl===null){var n=new Map,r=Kl=new Map;r.set(t,n)}else r=Kl,n=r.get(t),n||(n=new Map,r.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var i=t[r];if(!(i[Ki]||i[Pe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var l=i.getAttribute(a)||"";l=e+l;var s=n.get(l);s?s.push(i):n.set(l,[i])}}return n}function Hm(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function G3(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function $2(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Q3(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var r=kr(n.href),i=a.querySelector(al(r));if(i){a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=j0.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,Fe(i);return}i=a.ownerDocument||a,n=D2(n),(r=Fa.get(r))&&ku(n,r),i=i.createElement("link"),Fe(i);var l=i;l._p=new Promise(function(s,u){l.onload=s,l.onerror=u}),ea(i,"link",n),t.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&!(t.state.loading&3)&&(e.count++,t=j0.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var Is=0;function Y3(e,a){return e.stylesheets&&e.count===0&&Jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+a);0<e.imgBytes&&Is===0&&(Is=62500*E3());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Is?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function j0(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var A0=null;function Jl(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,A0=new Map,a.forEach(V3,e),A0=null,j0.call(e))}function V3(e,a){if(!(a.state.loading&4)){var t=A0.get(e);if(t)var n=t.get(null);else{t=new Map,A0.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var l=r[i];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(t.set(l.dataset.precedence,l),n=l)}n&&t.set(null,n)}r=a.instance,l=r.getAttribute("data-precedence"),i=t.get(l)||n,i===n&&t.set(null,r),t.set(l,r),this.count++,n=j0.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),a.state.loading|=4}}var Bi={$$typeof:jt,Provider:null,Consumer:null,_currentValue:_n,_currentValue2:_n,_threadCount:0};function X3(e,a,t,n,r,i,l,s,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.hiddenUpdates=Ss(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function k2(e,a,t,n,r,i,l,s,u,m,p,g){return e=new X3(e,a,t,l,u,m,p,g,s),a=1,i===!0&&(a|=24),i=wa(3,null,null,a),e.current=i,i.stateNode=e,a=su(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState={element:n,isDehydrated:t,cache:a},uu(i),e}function _2(e){return e?(e=fr,e):fr}function O2(e,a,t,n,r,i){r=_2(r),n.context===null?n.context=r:n.pendingContext=r,n=sn(a),n.payload={element:t},i=i===void 0?null:i,i!==null&&(n.callback=i),t=on(e,n,a),t!==null&&(ga(t,e,a),vi(t,e,a))}function Gm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Ou(e,a){Gm(e,a),(e=e.alternate)&&Gm(e,a)}function B2(e){if(e.tag===13||e.tag===31){var a=Fn(e,67108864);a!==null&&ga(a,e,67108864),Ou(e,67108864)}}function Qm(e){if(e.tag===13||e.tag===31){var a=Ma();a=Zc(a);var t=Fn(e,a);t!==null&&ga(t,e,a),Ou(e,a)}}var N0=!0;function Z3(e,a,t,n){var r=X.T;X.T=null;var i=le.p;try{le.p=2,Bu(e,a,t,n)}finally{le.p=i,X.T=r}}function F3(e,a,t,n){var r=X.T;X.T=null;var i=le.p;try{le.p=8,Bu(e,a,t,n)}finally{le.p=i,X.T=r}}function Bu(e,a,t,n){if(N0){var r=vc(n);if(r===null)Js(e,a,n,q0,t),Ym(e,n);else if(J3(r,e,a,t,n))n.stopPropagation();else if(Ym(e,n),a&4&&-1<K3.indexOf(e)){for(;r!==null;){var i=Hr(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var l=Cn(i.pendingLanes);if(l!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;l;){var u=1<<31-qa(l);s.entanglements[1]|=u,l&=~u}dt(i),!(re&6)&&(g0=Aa()+500,el(0))}}break;case 31:case 13:s=Fn(i,2),s!==null&&ga(s,i,2),J0(),Ou(i,2)}if(i=vc(n),i===null&&Js(e,a,n,q0,t),i===r)break;r=i}r!==null&&n.stopPropagation()}else Js(e,a,n,null,t)}}function vc(e){return e=Pc(e),Ru(e)}var q0=null;function Ru(e){if(q0=null,e=sr(e),e!==null){var a=Vi(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=tf(a),e!==null)return e;e=null}else if(t===31){if(e=nf(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return q0=e,null}function R2(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kh()){case of:return 2;case cf:return 8;case n0:case _h:return 32;case uf:return 268435456;default:return 32}default:return 32}}var gc=!1,dn=null,mn=null,fn=null,Ri=new Map,Ui=new Map,Pt=[],K3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ym(e,a){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Ri.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(a.pointerId)}}function ni(e,a,t,n,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:i,targetContainers:[r]},a!==null&&(a=Hr(a),a!==null&&B2(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),e)}function J3(e,a,t,n,r){switch(a){case"focusin":return dn=ni(dn,e,a,t,n,r),!0;case"dragenter":return mn=ni(mn,e,a,t,n,r),!0;case"mouseover":return fn=ni(fn,e,a,t,n,r),!0;case"pointerover":var i=r.pointerId;return Ri.set(i,ni(Ri.get(i)||null,e,a,t,n,r)),!0;case"gotpointercapture":return i=r.pointerId,Ui.set(i,ni(Ui.get(i)||null,e,a,t,n,r)),!0}return!1}function U2(e){var a=sr(e.target);if(a!==null){var t=Vi(a);if(t!==null){if(a=t.tag,a===13){if(a=tf(t),a!==null){e.blockedOn=a,qd(e.priority,function(){Qm(t)});return}}else if(a===31){if(a=nf(t),a!==null){e.blockedOn=a,qd(e.priority,function(){Qm(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=vc(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);_o=n,t.target.dispatchEvent(n),_o=null}else return a=Hr(t),a!==null&&B2(a),e.blockedOn=t,!1;a.shift()}return!0}function Vm(e,a,t){Pl(e)&&t.delete(a)}function P3(){gc=!1,dn!==null&&Pl(dn)&&(dn=null),mn!==null&&Pl(mn)&&(mn=null),fn!==null&&Pl(fn)&&(fn=null),Ri.forEach(Vm),Ui.forEach(Vm)}function wl(e,a){e.blockedOn===a&&(e.blockedOn=null,gc||(gc=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,P3)))}var El=null;function Xm(e){El!==e&&(El=e,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,function(){El===e&&(El=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],r=e[a+2];if(typeof n!="function"){if(Ru(n||t)===null)continue;break}var i=Hr(t);i!==null&&(e.splice(a,3),a-=3,Po(i,{pending:!0,data:r,method:t.method,action:n},n,r))}}))}function _r(e){function a(u){return wl(u,e)}dn!==null&&wl(dn,e),mn!==null&&wl(mn,e),fn!==null&&wl(fn,e),Ri.forEach(a),Ui.forEach(a);for(var t=0;t<Pt.length;t++){var n=Pt[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Pt.length&&(t=Pt[0],t.blockedOn===null);)U2(t),t.blockedOn===null&&Pt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var r=t[n],i=t[n+1],l=r[ba]||null;if(typeof i=="function")l||Xm(t);else if(l){var s=null;if(i&&i.hasAttribute("formAction")){if(r=i,l=i[ba]||null)s=l.formAction;else if(Ru(r)!==null)continue}else s=l.action;typeof s=="function"?t[n+1]=s:(t.splice(n,3),n-=3),Xm(t)}}}function L2(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(l){return r=l})},focusReset:"manual",scroll:"manual"})}function a(){r!==null&&(r(),r=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),r!==null&&(r(),r=null)}}}function Uu(e){this._internalRoot=e}W0.prototype.render=Uu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(q(409));var t=a.current,n=Ma();O2(t,n,e,a,null,null)};W0.prototype.unmount=Uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;O2(e.current,2,null,e,null,null),J0(),a[Lr]=null}};function W0(e){this._internalRoot=e}W0.prototype.unstable_scheduleHydration=function(e){if(e){var a=hf();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Pt.length&&a!==0&&a<Pt[t].priority;t++);Pt.splice(t,0,e),t===0&&U2(e)}};var Zm=ef.version;if(Zm!=="19.2.0")throw Error(q(527,Zm,"19.2.0"));le.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=Nh(a),e=e!==null?rf(e):null,e=e===null?null:e.stateNode,e};var I3={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Xi=jl.inject(I3),Na=jl}catch{}}O0.createRoot=function(e,a){if(!af(e))throw Error(q(299));var t=!1,n="",r=C4,i=D4,l=$4;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=k2(e,1,!1,null,null,t,n,null,r,i,l,L2),e[Lr]=a.current,$u(e),new Uu(a)};O0.hydrateRoot=function(e,a,t){if(!af(e))throw Error(q(299));var n=!1,r="",i=C4,l=D4,s=$4,u=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(u=t.formState)),a=k2(e,1,!0,a,t??null,n,r,u,i,l,s,L2),a.context=_2(null),t=a.current,n=Ma(),n=Zc(n),r=sn(n),r.callback=null,on(t,r,n),t=n,a.current.lanes=t,Fi(a,t),dt(a),e[Lr]=a.current,$u(e),new W0(a)};O0.version="19.2.0";function H2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H2)}catch(e){console.error(e)}}H2(),F1.exports=O0;var W3=F1.exports;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=(...e)=>e.filter((a,t,n)=>!!a&&a.trim()!==""&&n.indexOf(a)===t).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,t,n)=>n?n.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=e=>{const a=a6(e);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var t6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=ja.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:r="",children:i,iconNode:l,...s},u)=>ja.createElement("svg",{ref:u,...t6,width:a,height:a,stroke:e,strokeWidth:n?Number(t)*24/Number(a):t,className:G2("lucide",r),...!i&&!n6(s)&&{"aria-hidden":"true"},...s},[...l.map(([m,p])=>ja.createElement(m,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(e,a)=>{const t=ja.forwardRef(({className:n,...r},i)=>ja.createElement(r6,{ref:i,iconNode:a,className:G2(`lucide-${e6(Fm(e))}`,`lucide-${e}`,n),...r}));return t.displayName=Fm(e),t};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Lu=fe("arrow-left",i6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],bn=fe("arrow-right",l6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],o6=fe("atom",s6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Hu=fe("book-open",c6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],Q2=fe("brain-circuit",u6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],m6=fe("calendar-days",d6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Gu=fe("calendar",f6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],h6=fe("chart-line",p6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],g6=fe("check",v6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],y6=fe("chevron-down",b6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nl=fe("circle-check",x6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],z6=fe("clipboard-list",S6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],E6=fe("clock",w6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],A6=fe("code-xml",j6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],Y2=fe("compass",N6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],M6=fe("copy",q6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],C6=fe("flask-conical",T6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],$6=fe("graduation-cap",D6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],V2=fe("instagram",k6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Qu=fe("mail",_6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],es=fe("message-circle",O6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],R6=fe("quote",B6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],L6=fe("repeat",U6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],G6=fe("shield-check",H6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Y6=fe("sparkles",Q6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],X6=fe("star",V6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],F6=fe("target",Z6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],J6=fe("trophy",K6),Yu="+34 684 73 17 62",P6="+34684731762",as="admisionesnebula@gmail.com",Vu=`mailto:${as}?subject=${encodeURIComponent("Solicitud de diagnóstico — Nebula")}`,X2="https://instagram.com/nebula.lambda";function ts(){const[e,a]=ja.useState(!1);return{copied:e,copy:async()=>{try{await navigator.clipboard.writeText(P6),a(!0),setTimeout(()=>a(!1),2e3)}catch{}}}}const I6={displayName:"Método Nebula",url:"https://metodonebula.es",language:"es-ES",logo:"/favicon.svg",author:{knowsAbout:["Matemáticas","Física","Química","ESO","Bachillerato","Estadística","Programación","Economía","Inteligencia Artificial"]}},W6=[{path:"/",kind:"home",title:"Clases particulares desde ESO hasta Universidad | Método Nebula",description:"Clases particulares premium desde ESO, Bachillerato y Selectividad hasta universidad, IB, GCSE y transición IT con diagnóstico, plan y seguimiento.",h1:"Clases particulares desde ESO hasta Universidad, Selectividad y objetivos exigentes",intro:"Método Nebula acompaña a alumnos de ESO, Bachillerato, Universidad y programas internacionales con rigor académico, planificación y seguimiento individual.",priority:"1.0"},{path:"/blog/",kind:"blog",title:"Blog de Matemáticas, Ciencia y Estudio | Método Nebula",description:"Guías prácticas sobre matemáticas, ciencia, ESO, Bachillerato, universidad, Selectividad, programación y carrera tecnológica escritas desde el método Nebula.",h1:"Blog de matemáticas, ciencia, estudio y carrera tecnológica",intro:"Artículos para estudiar con método, preparar exámenes con calendario y tomar decisiones académicas con más criterio.",priority:"0.8"},{path:"/sobre-nebula/",kind:"about",title:"Sobre Método Nebula | Mentoría académica y profesional",description:"Conoce el enfoque de Método Nebula: formación matemática, experiencia tecnológica y acompañamiento personalizado desde ESO hasta Universidad.",h1:"Sobre Método Nebula",intro:"Ayudamos a estudiantes y profesionales a ordenar asignaturas exigentes, entender el razonamiento de fondo y avanzar con un plan claro.",priority:"0.6"},{path:"/metodologia/",kind:"method",title:"Metodología de estudio y seguimiento | Método Nebula",description:"La metodología Nebula ordena el estudio en diagnóstico, plan, clases, material propio, práctica y seguimiento semanal.",h1:"Metodología Nebula",intro:"El objetivo no es sumar horas, sino convertir cada sesión en una decisión dentro de un plan medible.",priority:"0.6"},{path:"/contacto/",kind:"contact",title:"Contacto y diagnóstico académico | Método Nebula",description:"Contacta con Método Nebula para explicar tu asignatura, examen o cambio profesional y recibir una propuesta de trabajo personalizada.",h1:"Contacto y diagnóstico",intro:"El primer paso es una conversación breve para entender objetivo, punto de partida, calendario y encaje real del acompañamiento.",priority:"0.6"}],e7=[{name:"Matemáticas universitarias",slug:"matematicas-universitarias",description:"Cálculo, álgebra, demostraciones y estrategias para estudiar asignaturas cuantitativas con método."},{name:"Estadística",slug:"estadistica",description:"Inferencia, probabilidad, modelos, TFG y TFM con lectura crítica de resultados."},{name:"Programación y datos",slug:"programacion-y-datos",description:"Python, SQL, proyectos, fundamentos de software y preparación técnica."},{name:"Física y Química",slug:"fisica-y-quimica",description:"Problemas tipo, unidades, razonamiento físico y química para exámenes."},{name:"Economía y ADE",slug:"economia-y-ade",description:"Matemáticas, estadística, microeconomía y modelos aplicados a grados de empresa."},{name:"Selectividad",slug:"selectividad",description:"Calendarios, simulacros y estrategia para PAU y pruebas de acceso."},{name:"Exámenes internacionales",slug:"examenes-internacionales",description:"IB, GCSE e IGCSE con foco en rúbricas, práctica y gestión del tiempo."},{name:"Carrera tecnológica",slug:"carrera-tecnologica",description:"Rutas de aprendizaje, portfolio, entrevistas y transición profesional a tecnología."}],a7={path:"/clases-particulares/universidad/",kind:"service-overview",title:"Clases particulares por etapa y asignatura | Método Nebula",description:"Clases particulares de matemáticas, estadística, programación, física, química y economía para ESO, Bachillerato, Selectividad y Universidad.",h1:"Clases particulares desde ESO hasta Universidad",intro:"Para alumnos de ESO, Bachillerato, Selectividad, programas internacionales y Universidad que necesitan ordenar una asignatura, preparar un examen o recuperar criterio.",priority:"0.8"},t7=[{path:"/clases-particulares/matematicas-universidad/",title:"Clases particulares de Matemáticas desde ESO hasta Universidad | Método Nebula",description:"Clases de matemáticas para ESO, Bachillerato, Selectividad y Universidad: base, problemas, Cálculo, Álgebra y asignaturas cuantitativas.",h1:"Clases particulares de Matemáticas desde ESO hasta Universidad",audience:"Para alumnos de ESO, Bachillerato, Selectividad y Universidad que entienden partes sueltas del temario, pero se bloquean al resolver ejercicios nuevos.",problems:["Memorizar fórmulas sin saber cuándo aplicarlas.","Perderse en los cambios de variable, límites, derivadas o integrales.","No reconocer el método adecuado ante un problema de examen.","Llegar a prácticas o parciales sin mapa de temas."],topics:["Matemáticas de ESO y Bachillerato","Matemáticas II y aplicadas a Ciencias Sociales","Cálculo diferencial e integral","Álgebra lineal","Ecuaciones diferenciales","Optimización","Problemas tipo de examen"],method:["Diagnóstico de lagunas por bloques.","Mapa de métodos y condiciones de uso.","Resolución guiada de problemas representativos.","Ejercicios propios para repetir el razonamiento sin copiar soluciones.","Seguimiento semanal hasta ganar autonomía."],profile:"En Método Nebula trabajamos las matemáticas desde el razonamiento: entender por qué aparece cada paso antes de automatizarlo.",faq:[{q:"¿Sirve si empiezo desde muy bajo?",a:"Sí, siempre que haya calendario suficiente. El diagnóstico separa lo urgente de lo estructural."},{q:"¿Preparáis exámenes concretos?",a:"Se trabaja con el temario, ejercicios tipo y formato de examen que aporte el alumno."}],relatedPosts:["como-estudiar-matematicas-sin-memorizar","que-son-las-derivadas-y-para-que-se-utilizan","que-son-las-integrales-y-para-que-se-utilizan"],priority:"0.75"},{path:"/clases-particulares/estadistica-universidad/",title:"Clases particulares de Estadística y Probabilidad | Método Nebula",description:"Clases de estadística y probabilidad para Bachillerato, Universidad, ADE, Psicología, TFG, TFM y análisis de datos con interpretación rigurosa.",h1:"Clases particulares de Estadística y Probabilidad",audience:"Para alumnos de Bachillerato, Universidad o trabajos cuantitativos que necesitan entender qué prueba utilizar, cómo interpretar resultados y cómo evitar aplicar recetas sin criterio.",problems:["Confundir probabilidad, inferencia y descriptiva.","Elegir contrastes sin comprobar supuestos.","Interpretar p-valores o intervalos de confianza de forma mecánica.","No saber traducir un enunciado a hipótesis y variables."],topics:["Probabilidad","Variables aleatorias","Estimación e intervalos","Contrastes de hipótesis","Regresión","Estadística para TFG y TFM"],method:["Diagnóstico de notación, conceptos y software.","Árbol de decisión para elegir técnicas.","Ejemplos con interpretación verbal.","Práctica con ejercicios y resultados.","Revisión de errores frecuentes antes de examen."],profile:"El enfoque prioriza entender qué pregunta responde cada técnica y qué conclusiones se pueden defender.",faq:[{q:"¿Ayudáis con software estadístico?",a:"Se puede trabajar la lógica del análisis y el uso de herramientas cuando el alumno aporta el entorno de la asignatura."},{q:"¿Hacéis trabajos por el alumno?",a:"No. Se orienta, explica y revisa el razonamiento, sin sustituir el trabajo académico del estudiante."}],relatedPosts:["estadistica-desde-cero-para-elegir-contrastes"],priority:"0.7"},{path:"/clases-particulares/programacion-universidad/",title:"Clases particulares de Programación desde cero | Método Nebula",description:"Clases de programación desde cero para ESO, Bachillerato, FP, Universidad, Python, SQL, fundamentos, proyectos y asignaturas de informática.",h1:"Clases particulares de Programación desde cero",audience:"Para alumnos de ESO, Bachillerato, FP o Universidad que se atascan al pasar de ver ejemplos a escribir código propio, depurar errores y explicar decisiones técnicas.",problems:["Copiar código sin entender el flujo.","Bloquearse ante errores de compilación o ejecución.","No saber dividir un problema en funciones.","Llegar a prácticas sin hábito de depuración."],topics:["Python y fundamentos","SQL","Estructuras de datos","APIs y Git","Proyectos pequeños completos","Preparación de entrevistas básicas"],method:["Diagnóstico de nivel y lenguaje.","Problemas pequeños con feedback inmediato.","Lectura de errores y depuración guiada.","Refactorización para mejorar claridad.","Proyecto o práctica defendible por el alumno."],profile:"La programación se trabaja como pensamiento estructurado, no como colección de sintaxis.",faq:[{q:"¿Puedo empezar sin base?",a:"Sí. Se empieza por variables, control de flujo, funciones y lectura de errores."},{q:"¿Preparáis prácticas o proyectos?",a:"Se explica el enfoque y se revisan dudas, pero no se entrega trabajo que deba realizar el alumno."}],relatedPosts:["python-y-sql-para-empezar-en-datos","transicion-al-sector-it-en-6-meses"],priority:"0.7"},{path:"/clases-particulares/fisica-ingenieria/",title:"Clases particulares de Física para Bachillerato e Ingeniería | Método Nebula",description:"Clases de física para ESO, Bachillerato, Selectividad e Ingeniería con foco en problemas, unidades, modelos y preparación de exámenes.",h1:"Clases particulares de Física para Bachillerato e Ingeniería",audience:"Para alumnos de ESO, Bachillerato, Selectividad o primeros cursos de Ingeniería que necesitan pasar de fórmulas aisladas a modelos físicos claros.",problems:["No identificar fuerzas, sistema o energía relevante.","Mezclar unidades o signos sin control.","Aprender fórmulas sin interpretar el fenómeno.","No saber plantear el diagrama inicial."],topics:["Mecánica","Electricidad y magnetismo","Ondas","Termodinámica","Física general","Problemas de examen"],method:["Diagnóstico de conceptos y herramientas matemáticas.","Planteamiento gráfico antes de calcular.","Control de unidades y órdenes de magnitud.","Práctica guiada con variantes.","Simulacros parciales."],profile:"El trabajo busca que el alumno sepa justificar el modelo antes de operar.",faq:[{q:"¿Se trabaja desde apuntes de mi centro o universidad?",a:"Sí, se parte del temario, libro, apuntes y formato de ejercicios de la asignatura."},{q:"¿La física requiere reforzar matemáticas?",a:"A menudo sí. Se integran las herramientas necesarias sin convertirlo en otra asignatura."}],relatedPosts:["fisica-y-quimica-como-plantear-problemas"],priority:"0.68"},{path:"/clases-particulares/economia-ade/",title:"Clases particulares de Economía y ADE | Método Nebula",description:"Apoyo en Economía de Bachillerato, ADE, matemáticas financieras, estadística, microeconomía y asignaturas cuantitativas de empresa.",h1:"Clases particulares de Economía y ADE",audience:"Para alumnos de Bachillerato, ADE, Economía o dobles grados que necesitan ordenar la parte cuantitativa y entender modelos.",problems:["Ver las matemáticas como obstáculo separado de la economía.","No entender gráficas, derivadas o elasticidades.","Confundir procedimientos de estadística aplicada.","Estudiar teoría sin practicar problemas representativos."],topics:["Matemáticas para ADE","Microeconomía","Estadística aplicada","Econometría introductoria","Matemática financiera","Optimización"],method:["Diagnóstico de base matematica.","Conexión entre modelo, gráfica y cálculo.","Problemas tipo con interpretación económica.","Material de repaso por bloques.","Plan de examen con prioridades."],profile:"Se busca que el alumno entienda qué representa cada fórmula dentro del problema económico.",faq:[{q:"¿Sirve para grados no técnicos?",a:"Sí, especialmente cuando la dificultad está en traducir matemáticas a decisiones económicas."},{q:"¿Preparáis recuperaciones?",a:"Si el calendario lo permite, se priorizan los bloques con mayor impacto en examen."}],relatedPosts:["economia-ade-matematicas-sin-perderse"],priority:"0.68"},{path:"/clases-particulares/quimica/",title:"Clases particulares de Química | Método Nebula",description:"Clases de química para ESO, Bachillerato, Selectividad, universidad inicial y preparación de exámenes con razonamiento, ejercicios y seguimiento.",h1:"Clases particulares de Química",audience:"Para alumnos de ESO, Bachillerato, Selectividad o universidad inicial que necesitan entender reacciones, equilibrio, cálculos y teoría antes de memorizar procedimientos.",problems:["Confundir fórmulas con significado quimico.","No controlar estequiometria o unidades.","Perderse en equilibrio, ácido-base o redox.","Estudiar teoría sin suficientes problemas corregidos."],topics:["Estequiometria","Enlace y estructura","Equilibrio quimico","Ácido-base","Redox","Química para exámenes"],method:["Diagnóstico de conceptos básicos.","Traducción del enunciado a datos y reacción.","Ejercicios graduados.","Corrección de pasos y unidades.","Repaso final con problemas mixtos."],profile:"El enfoque evita memorizar reacciones sin entender condiciones, magnitudes y conservación.",faq:[{q:"¿Se prepara Selectividad de Química?",a:"Sí, cuando se trabaja con calendario, ejercicios de examen y revisión de errores."},{q:"¿También universidad?",a:"Se atienden asignaturas introductorias si encajan con el temario y calendario."}],relatedPosts:["fisica-y-quimica-como-plantear-problemas"],priority:"0.65"},{path:"/clases-particulares/selectividad/",title:"Clases particulares para Selectividad y PAU | Método Nebula",description:"Preparación de Selectividad y PAU con calendario, simulacros, bloques de estudio y seguimiento hasta el examen.",h1:"Clases particulares para Selectividad y PAU",audience:"Para alumnos que necesitan convertir el temario de bachillerato en un plan semanal realista hasta el examen.",problems:["Estudiar lo cómodo y evitar lo que baja nota.","No saber repartir asignaturas por semanas.","Dejar simulacros para el final.","Llegar al examen sin estrategia de tiempo."],topics:["Matemáticas II","Matemáticas aplicadas","Física","Química","Calendario PAU","Simulacros y corrección"],method:["Diagnóstico de asignaturas y nota objetivo.","Calendario inverso desde las fechas de examen.","Bloques de contenido y ejercicios tipo.","Simulacros cronometrados.","Ajustes semanales según progreso."],profile:"El acompañamiento se centra en convertir presión y temario en decisiones semanales concretas.",faq:[{q:"¿Cuánto antes conviene empezar?",a:"Cuanto antes, más margen para consolidar. Con poco tiempo se prioriza lo que más impacto tiene."},{q:"¿Se trabaja con exámenes de años anteriores?",a:"Sí, como entrenamiento y diagnóstico, no solo como repaso final."}],relatedPosts:["preparar-selectividad-con-calendario"],priority:"0.75"},{path:"/clases-particulares/gcse-ib/",title:"Clases particulares para GCSE, IGCSE e IB | Método Nebula",description:"Preparación personalizada para GCSE, IGCSE e IB en asignaturas cuantitativas con rúbrica, calendario y práctica guiada.",h1:"Clases particulares para GCSE, IGCSE e IB",audience:"For students who need structured academic support in international programmes while keeping explanations clear in Spanish or English when needed.",problems:["No entender la rúbrica o el tipo de respuesta esperado.","Practicar ejercicios sin medir tiempo ni criterio.","Cambiar entre currículos y terminología.","Llegar a mocks sin revisión de errores acumulados."],topics:["Mathematics","Physics","Chemistry","Exam technique","Internal assessment support","Revisión planning"],method:["Diagnostic review of syllabus, level and exam board.","Calendar aligned with mocks and final exams.","Worked examples and independent practice.","Rubric-aware feedback.","Progress tracking until exam week."],profile:"El enfoque combina estructura académica y claridad bilingüe cuando el programa lo requiere.",faq:[{q:"¿Las clases pueden adaptarse al temario internacional?",a:"Sí, siempre partiendo del syllabus y materiales concretos que aporte el alumno."},{q:"¿Se trabaja técnica de examen?",a:"Sí. Se práctica contenido, tiempo, rúbrica y forma de justificar respuestas."}],relatedPosts:["ib-gcse-como-preparar-examenes-internacionales"],priority:"0.65"}],n7={site:I6,corePages:W6,blogCategories:e7,serviceOverview:a7,servicePages:t7},ne=n7,r7=ne.site.url;function bc(e){if(e==="/")return"/";const[a,t=""]=e.split("#"),n=`${a.replace(/\/+$/,"")}/`;return t?`${n}#${t}`:n}function De(e){return/^https?:\/\//.test(e)?e:`${r7}${bc(e)==="/"?"/":bc(e)}`}function Xu(e){return`/blog/categoria/${e}/`}function Al(e){return e<=1?"/blog/":`/blog/pagina/${e}/`}function Nl(e,a){return a<=1?Xu(e):`/blog/categoria/${e}/pagina/${a}/`}function i7(e){return ne.blogCategories.find(a=>a.slug===e)}function l7(e){const a=bc(e);return ne.servicePages.find(t=>t.path===a)}function Ia(e,a){let t=document.head.querySelector(e);t||(t=document.createElement("meta"),document.head.appendChild(t));for(const[n,r]of Object.entries(a))t.setAttribute(n,r)}function Z2(e,a){let t=document.head.querySelector(`link[rel="${e}"]`);t||(t=document.createElement("link"),t.setAttribute("rel",e),document.head.appendChild(t)),t.setAttribute("href",a)}function Km(e,a){const t=document.head.querySelector(`link[rel="${e}"]`);if(!a){t==null||t.remove();return}Z2(e,a)}function Ja({title:e,description:a,path:t,type:n="website",image:r=ne.site.logo,robots:i="index,follow",prevPath:l,nextPath:s}){ja.useEffect(()=>{const u=De(t),m=De(r);document.title=e,document.documentElement.lang=ne.site.language,Ia('meta[name="description"]',{name:"description",content:a}),Ia('meta[name="robots"]',{name:"robots",content:i}),Ia('meta[property="og:title"]',{property:"og:title",content:e}),Ia('meta[property="og:description"]',{property:"og:description",content:a}),Ia('meta[property="og:url"]',{property:"og:url",content:u}),Ia('meta[property="og:type"]',{property:"og:type",content:n}),Ia('meta[property="og:image"]',{property:"og:image",content:m}),Ia('meta[name="twitter:card"]',{name:"twitter:card",content:"summary_large_image"}),Ia('meta[name="twitter:title"]',{name:"twitter:title",content:e}),Ia('meta[name="twitter:description"]',{name:"twitter:description",content:a}),Ia('meta[name="twitter:image"]',{name:"twitter:image",content:m}),Z2("canonical",u),Km("prev",l?De(l):void 0),Km("next",s?De(s):void 0)},[a,r,s,t,l,i,e,n])}function s7(e){return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}function o7(){return window.location.pathname}function c7(){return ja.useSyncExternalStore(s7,o7,()=>"/")}function u7(e){e!==window.location.pathname+window.location.hash&&(window.history.pushState(null,"",e),window.dispatchEvent(new PopStateEvent("popstate")),window.scrollTo({top:0,left:0}))}function he({to:e,children:a,onClick:t,...n}){const r=i=>{t==null||t(i),!(i.defaultPrevented||i.button!==0||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey)&&(!e.startsWith("/")||e.includes("#")||(i.preventDefault(),u7(e)))};return o.jsx("a",{href:e,onClick:r,...n,children:a})}function at({children:e}){return o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-spark/30 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-spark"}),e]})}function ct({href:e,children:a,className:t=""}){return o.jsxs("a",{href:e,className:`group inline-flex items-center justify-center gap-2 rounded-full bg-action px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.7)] transition-all hover:translate-y-[-1px] hover:bg-action/90 ${t}`,children:[a,o.jsx(bn,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]})}function d7({href:e,children:a,className:t=""}){return o.jsx("a",{href:e,className:`inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/[0.05] ${t}`,children:a})}function Zu({className:e=""}){return o.jsxs("svg",{viewBox:"0 0 32 32",className:e,"aria-hidden":"true",children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"ng",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#2F6BFF"}),o.jsx("stop",{offset:"60%",stopColor:"#7C5CFF"}),o.jsx("stop",{offset:"100%",stopColor:"#D6B15E"})]})}),o.jsx("circle",{cx:"16",cy:"16",r:"14",fill:"none",stroke:"url(#ng)",strokeWidth:"1.2"}),o.jsx("circle",{cx:"16",cy:"16",r:"3",fill:"url(#ng)"}),o.jsx("circle",{cx:"26",cy:"10",r:"1.5",fill:"#D6B15E"}),o.jsx("circle",{cx:"6",cy:"22",r:"1",fill:"#2CEBFF"})]})}const Jm=[{href:"/metodologia/",label:"Método"},{href:"/clases-particulares/universidad/",label:"Servicios"},{href:"/sobre-nebula/",label:"Sobre Nebula"},{href:"/blog/",label:"Blog"},{href:"/contacto/",label:"Contacto"}];function mt({children:e}){return o.jsxs("div",{className:"min-h-screen bg-background text-foreground antialiased",children:[o.jsx(F2,{}),o.jsx("main",{children:e}),o.jsx(Fu,{}),o.jsx(K2,{})]})}function F2(){const[e,a]=ja.useState(!1);return o.jsxs("header",{className:"sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl",children:[o.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-6 py-4",children:[o.jsxs(he,{to:"/",className:"flex items-center gap-2",children:[o.jsx(Zu,{className:"h-7 w-7"}),o.jsx("span",{className:"font-display text-lg font-semibold tracking-tight",children:"Nebula"})]}),o.jsx("nav",{className:"hidden items-center gap-8 md:flex",children:Jm.map(t=>o.jsx(he,{to:t.href,className:"text-sm text-muted-foreground transition-colors hover:text-link",children:t.label},t.href))}),o.jsx("div",{className:"hidden md:block",children:o.jsx(ct,{href:"/contacto/",children:"Reservar diagnóstico"})}),o.jsxs("button",{onClick:()=>a(t=>!t),className:"rounded-md border border-white/10 p-2 md:hidden","aria-label":"Menu",children:[o.jsx("div",{className:"h-0.5 w-5 bg-foreground"}),o.jsx("div",{className:"mt-1 h-0.5 w-5 bg-foreground"}),o.jsx("div",{className:"mt-1 h-0.5 w-5 bg-foreground"})]})]}),e&&o.jsx("div",{className:"border-t border-white/5 bg-background/95 md:hidden",children:o.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4",children:[Jm.map(t=>o.jsx(he,{to:t.href,onClick:()=>a(!1),className:"text-sm text-muted-foreground transition-colors hover:text-link",children:t.label},t.href)),o.jsx(ct,{href:"/contacto/",className:"w-full",children:"Reservar diagnóstico"})]})})]})}function Fu(){const{copy:e}=ts();return o.jsx("footer",{className:"border-t border-white/5 bg-background py-16",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Zu,{className:"h-7 w-7"}),o.jsx("span",{className:"font-display text-lg font-semibold",children:"Nebula"})]}),o.jsx("p",{className:"mt-4 max-w-sm text-sm text-muted-foreground",children:"Enseñanza privada premium desde ESO hasta Universidad y objetivos profesionales exigentes."}),o.jsx("p",{className:"mt-6 text-xs text-muted-foreground",children:"Rigor académico con visión tecnológica."})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Navegación"}),o.jsx("ul",{className:"mt-4 space-y-2 text-sm",children:[["/metodologia/","Método"],["/clases-particulares/universidad/","Clases desde ESO"],["/sobre-nebula/","Sobre Nebula"],["/blog/","Blog"],["/mapa-del-sitio/","Mapa del sitio"],["/contacto/","Contacto"]].map(([a,t])=>o.jsx("li",{children:o.jsx(he,{to:a,className:"text-link transition-colors hover:text-link",children:t})},a))})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Contacto"}),o.jsxs("ul",{className:"mt-4 space-y-2 text-sm",children:[o.jsx("li",{children:o.jsxs("a",{href:X2,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-link transition-colors hover:text-link",children:[o.jsx(V2,{className:"h-4 w-4 text-action"}),"@nebula.lambda"]})}),o.jsx("li",{children:o.jsxs("button",{onClick:e,className:"inline-flex items-center gap-2 text-link transition-colors hover:text-link",children:[o.jsx(es,{className:"h-4 w-4 text-action"}),Yu]})}),o.jsx("li",{children:o.jsxs("a",{href:Vu,className:"inline-flex items-center gap-2 text-link transition-colors hover:text-link",children:[o.jsx(Qu,{className:"h-4 w-4 text-action"}),as]})})]})]})]}),o.jsxs("div",{className:"mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center",children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," Nebula. Todos los derechos reservados."]}),o.jsxs("div",{className:"flex gap-5",children:[o.jsx("a",{href:"/contacto/",className:"text-link transition-colors hover:text-link",children:"Aviso legal"}),o.jsx("a",{href:"/contacto/",className:"text-link transition-colors hover:text-link",children:"Privacidad"}),o.jsx("a",{href:"/contacto/",className:"text-link transition-colors hover:text-link",children:"Cookies"})]})]})]})})}function K2(){const{copied:e,copy:a}=ts();return o.jsxs("button",{onClick:a,"aria-label":"Copiar número de WhatsApp",className:"fixed bottom-6 right-6 z-40 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-3 text-sm font-medium shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.8)] backdrop-blur-md transition-all hover:translate-y-[-1px] hover:border-white/30",children:[o.jsx(es,{className:"h-4 w-4 text-action"}),e?"Copiado":"Copiar teléfono"]})}function m7(){const e=ne.corePages.find(a=>a.kind==="home");return Ja({title:e.title,description:e.description,path:e.path}),o.jsxs("div",{className:"min-h-screen bg-background text-foreground antialiased",children:[o.jsx(F2,{}),o.jsxs("main",{children:[o.jsx(f7,{}),o.jsx(p7,{}),o.jsx(h7,{}),o.jsx(g7,{}),o.jsx(b7,{}),o.jsx(y7,{}),o.jsx(x7,{}),o.jsx(S7,{}),o.jsx(z7,{}),o.jsx(w7,{})]}),o.jsx(Fu,{}),o.jsx(K2,{})]})}function f7(){return o.jsxs("section",{id:"top",className:"relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 nebula-aurora pointer-events-none"}),o.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36",children:[o.jsxs("div",{className:"mx-auto max-w-4xl text-center",children:[o.jsx(at,{children:"Bienvenido a Nebula"}),o.jsxs("h1",{className:"mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl",children:["Cuando la asignatura, el examen o la entrevista"," ",o.jsx("span",{className:"nebula-gradient-text",children:"no admite improvisación."})]}),o.jsx("p",{className:"mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg",children:"Enseñanza privada desde ESO y Bachillerato hasta Universidad, exámenes internacionales, Selectividad y transición al sector IT. Diagnóstico claro, plan de trabajo con fechas y un mentor que sostiene el proceso de principio a fin."}),o.jsxs("div",{className:"mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",children:[o.jsx(ct,{href:"/contacto/",children:"Reservar diagnóstico"}),o.jsx(d7,{href:"/clases-particulares/universidad/",children:"Ver programas"})]}),o.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground",children:[o.jsx(Ws,{label:"Matemático"}),o.jsx("span",{className:"opacity-30",children:"·"}),o.jsx(Ws,{label:"+6 años enseñando"}),o.jsx("span",{className:"opacity-30",children:"·"}),o.jsx(Ws,{label:"Profesional del sector tecnológico"})]})]}),o.jsx("div",{className:"mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4",children:[{icon:Hu,label:"ESO · Bachillerato"},{icon:Gu,label:"PAU · IB · GCSE"},{icon:$6,label:"Universidad"},{icon:A6,label:"Programación · IA"}].map(e=>o.jsxs("div",{className:"nebula-card flex items-center gap-3 rounded-2xl px-4 py-3",children:[o.jsx(e.icon,{className:"h-5 w-5 text-action"}),o.jsx("span",{className:"text-sm text-foreground/90",children:e.label})]},e.label))})]})]})}function Ws({label:e}){return o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(G6,{className:"h-3.5 w-3.5 text-action"}),e]})}function p7(){const e=[{icon:Y2,title:"Diagnóstico antes de empezar",text:"Antes de la primera clase entendemos tu nivel real, tus lagunas y la distancia exacta hasta el objetivo. Nada de empezar a ciegas."},{icon:z6,title:"Plan con fechas",text:"Cada sesión tiene un porqué dentro de un calendario claro: aprobar, subir nota, llegar al examen o cerrar un cambio profesional."},{icon:L6,title:"Seguimiento que sostiene",text:"Material propio, ejercicios, simulacros y revisión semanal de progreso. No te quedas solo entre clase y clase."}];return o.jsx("section",{className:"relative border-y border-white/5 bg-background py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(at,{children:"¿Por qué Nebula?"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Si ya has probado academias y clases sueltas,"," ",o.jsx("span",{className:"nebula-gradient-text",children:"ya sabes por qué no funcionan"})]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"Más horas no resuelven el problema. Lo que falta casi siempre es diagnóstico, método y alguien que te ordene el camino. Nebula nace justo para eso: convertir esfuerzo disperso en progreso medible."})]}),o.jsx("div",{className:"mt-12 grid gap-5 md:grid-cols-3",children:e.map(a=>o.jsxs("div",{className:"nebula-card group rounded-3xl p-7 transition-transform hover:-translate-y-1",children:[o.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-action/15 ring-1 ring-action/30",children:o.jsx(a.icon,{className:"h-5 w-5 text-action"})}),o.jsx("h3",{className:"mt-5 text-lg font-semibold",children:a.title}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:a.text})]},a.title))})]})})}function h7(){const e=[{tag:"Servicio 01",icon:o6,title:"Clases particulares premium",subtitle:"Para alumnos desde ESO hasta Universidad que arrastran una asignatura técnica y necesitan dejar de ir a remolque del temario.",list:{label:"Asignaturas",items:["ESO: Matemáticas, Física y Química","Bachillerato: Matemáticas, Física, Química y Economía","Universidad: Cálculo, Álgebra, Estadística y asignaturas técnicas","Programación","Economía y ADE","Inteligencia Artificial"]},pain:["Voy perdido desde la segunda semana del curso.","Entiendo en clase, pero al sentarme solo no sé empezar.","Me bloqueo justo en el paso clave del problema.","Tengo el examen cerca y no llego con lo que estudio por mi cuenta."],promise:"Pasas de estudiar a ciegas a tener un mapa de la asignatura: qué cae, cómo se piensa y qué pasos seguir en cada problema tipo.",cta:"Quiero preparar una asignatura",accent:"primary"},{tag:"Servicio 02",icon:Gu,title:"Preparación con calendario",subtitle:"Para alumnos con fecha encima donde cada semana mal usada se nota en la nota final.",list:{label:"Procesos",items:["IB / Bachillerato Internacional","GCSE / IGCSE","Selectividad / PAU","TFG / TFM","GMAT","Exámenes finales","Recuperaciones","Pruebas de acceso"]},pain:["Sé qué tengo que estudiar, pero no en qué orden ni cuándo.","Cada vez que abro el temario me agobio y cambio de tema.","Llevo semanas estudiando y no sé si voy bien o voy tarde.","Me juego el curso (o la carrera) en este examen."],promise:"Convertimos un calendario tenso en una hoja de ruta semanal con prioridades, simulacros y revisión, para que llegues al examen con margen, no con prisa.",mini:["Diagnóstico","Calendario","Bloques de contenido","Simulacros","Revisión","Ajuste final"],cta:"Quiero preparar un examen",accent:"gold"},{tag:"Servicio 03",icon:Q2,title:"Formación para entrar o crecer en IT",subtitle:"Para profesionales que quieren cambiar de sector o subir de nivel sin perderse entre 200 cursos sueltos.",list:{label:"Stack & skills",items:["Python","SQL","Data Engineering","Inteligencia Artificial","AWS · GCP","Git · Docker · APIs","Proyectos reales · GitHub","CV · LinkedIn · Portfolio","Entrevistas técnicas","Soft skills"]},pain:["Llevo años en un trabajo que ya no me motiva ni me paga lo que valgo.","Quiero entrar en IT, pero no sé si estudiar data, dev, cloud o IA.","He hecho cursos sueltos y sigo sin un proyecto del que hablar.","Llego a las entrevistas técnicas y no sé estructurar la respuesta."],promise:"Construimos una ruta realista a 3-6 meses: qué aprender, qué proyecto construir, cómo contarlo en LinkedIn y cómo defenderlo en una entrevista técnica.",cta:"Quiero mejorar mi perfil IT",accent:"electric"}];return o.jsx("section",{id:"servicios",className:"relative py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",children:[o.jsxs("div",{className:"max-w-2xl",children:[o.jsx(at,{children:"Lo que hacemos por ti"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["No vendemos horas. ",o.jsx("span",{className:"nebula-gradient-text",children:"Diseñamos planes."})]})]}),o.jsx("p",{className:"max-w-md text-sm text-muted-foreground",children:"Tres caminos según tu objetivo: una asignatura de ESO, Bachillerato o Universidad, un examen con fecha o un cambio profesional al sector IT."})]}),o.jsx("div",{className:"mt-14 space-y-6",children:e.map(a=>o.jsx(v7,{service:a},a.title))})]})})}function J2(e){switch(e){case"gold":return{dot:"bg-action",text:"text-action",ring:"ring-action/30",soft:"bg-action/10"};case"electric":return{dot:"bg-action",text:"text-action",ring:"ring-action/30",soft:"bg-action/10"};default:return{dot:"bg-action",text:"text-action",ring:"ring-action/30",soft:"bg-action/10"}}}function v7({service:e}){const a=J2(e.accent),t=e.icon;return o.jsxs("article",{className:"nebula-card relative overflow-hidden rounded-3xl p-7 md:p-10",children:[o.jsx("div",{className:"absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 via-violet/10 to-transparent blur-3xl"}),o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[1.1fr_1fr]",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",children:e.tag}),o.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${a.dot}`})]}),o.jsxs("div",{className:"mt-4 flex items-start gap-4",children:[o.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${a.soft} ring-1 ${a.ring}`,children:o.jsx(t,{className:`h-6 w-6 ${a.text}`})}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("h3",{className:"font-display text-2xl font-semibold md:text-3xl",children:e.title}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground md:text-base",children:e.subtitle})]})]}),o.jsxs("div",{className:"mt-7",children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",children:e.list.label}),o.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:e.list.items.map(n=>o.jsx("span",{className:"rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/85",children:n},n))})]}),e.mini&&o.jsxs("div",{className:"mt-7",children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",children:"Proceso"}),o.jsx("ol",{className:"mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",children:e.mini.map((n,r)=>o.jsxs("li",{className:"flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2 text-xs",children:[o.jsxs("span",{className:`font-display text-sm font-semibold ${a.text}`,children:["0",r+1]}),o.jsx("span",{className:"text-foreground/85",children:n})]},n))})]})]}),o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",children:"Si te suena esto…"}),o.jsx("ul",{className:"mt-3 space-y-2",children:e.pain.map(n=>o.jsxs("li",{className:"flex items-start gap-2 text-sm text-foreground/80",children:[o.jsx(R6,{className:`mt-0.5 h-3.5 w-3.5 shrink-0 ${a.text}`}),o.jsxs("span",{className:"italic",children:['"',n,'"']})]},n))})]}),o.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.02] p-5",children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",children:"Cómo trabajamos contigo"}),o.jsx("p",{className:"mt-2 text-base text-foreground",children:e.promise})]}),o.jsx("div",{className:"mt-auto",children:o.jsx(ct,{href:"/contacto/",children:e.cta})})]})]})]})}function g7(){const e=[{n:"01",icon:Y2,title:"Diagnóstico",text:"Sesión inicial para entender tu punto de partida real, tu objetivo concreto y la fecha en la que se juega."},{n:"02",icon:F6,title:"Estrategia",text:"Te entregamos un plan escrito: qué trabajar cada semana, en qué orden y con qué entregable medible."},{n:"03",icon:Y6,title:"Clases de alto impacto",text:"Cada sesión tiene objetivo, explicación, práctica guiada y ejercicio para resolver solo. Nada de relleno."},{n:"04",icon:Hu,title:"Material propio",text:"Apuntes, esquemas, ejercicios y simulacros diseñados para tu asignatura o examen, no PDFs genéricos."},{n:"05",icon:h6,title:"Seguimiento",text:"Revisamos progreso semana a semana y ajustamos el plan donde aparece la fricción real, no donde tocaba en el guion."},{n:"06",icon:J6,title:"Resultado",text:"Aprobar, subir nota, defender un TFG, cerrar un examen con fecha o entrar en tu primera oferta IT."}];return o.jsxs("section",{id:"metodo",className:"relative border-y border-white/5 py-24",children:[o.jsx("div",{className:"absolute inset-0 nebula-aurora opacity-60 pointer-events-none"}),o.jsxs("div",{className:"relative mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(at,{children:"Cómo trabajamos"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["El método ",o.jsx("span",{className:"nebula-gradient-text",children:"Nebula"})]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"Aprender bien no es estudiar más: es estudiar con dirección. Estos seis pasos son los mismos en todos los planes, lo que cambia es a quién se aplican y con qué intensidad."})]}),o.jsx("ol",{className:"mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3",children:e.map(a=>o.jsxs("li",{className:"nebula-card group relative rounded-3xl p-7",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-display text-3xl font-bold text-action/80",children:a.n}),o.jsx(a.icon,{className:"h-5 w-5 text-action"})]}),o.jsx("h3",{className:"mt-4 text-lg font-semibold",children:a.title}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:a.text}),o.jsx("div",{className:"mt-6 nebula-hairline h-px w-full"})]},a.n))}),o.jsxs("div",{className:"mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:flex-row md:items-center",children:[o.jsxs("p",{className:"text-sm text-muted-foreground",children:[o.jsx("span",{className:"text-foreground",children:"Preparación sin improvisación."})," Método, calendario y seguimiento."]}),o.jsx(ct,{href:"/contacto/",children:"Reservar diagnóstico"})]})]})]})}function b7(){const e=["Graduado en Matemáticas.","Máster en Big Data e Inteligencia Artificial.","Experiencia profesional en tecnología.","Más de 6 años dando clases.","Alumnos desde ESO y Bachillerato hasta Universidad, exámenes internacionales y perfiles técnicos.","Especialización en asignaturas difíciles y procesos exigentes."];return o.jsx("section",{className:"py-24",children:o.jsx("div",{className:"mx-auto max-w-7xl px-6",children:o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16",children:[o.jsxs("div",{children:[o.jsx(at,{children:"Conoce a Nebula"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Formación con ",o.jsx("span",{className:"nebula-gradient-text",children:"rigor académico"})," y visión real del sector tecnológico"]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"No es lo mismo aprender con alguien que solo explica la asignatura que con alguien que la usa todos los días en el trabajo. Aquí entran la matemática, la ciencia, la programación y cómo se aplican de verdad fuera del aula."})]}),o.jsxs("div",{className:"nebula-card nebula-glow relative overflow-hidden rounded-3xl p-8 md:p-10",children:[o.jsx("div",{className:"absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-primary/30 via-violet/20 to-transparent blur-3xl"}),o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet ring-1 ring-white/20",children:o.jsx("span",{className:"font-display text-xl font-bold text-white",children:"N"})}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Perfil"}),o.jsx("p",{className:"font-display text-lg font-semibold",children:"Mentor académico & profesional"})]})]}),o.jsx("ul",{className:"mt-8 grid gap-3 sm:grid-cols-2",children:e.map(a=>o.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[o.jsx(nl,{className:"mt-0.5 h-4 w-4 shrink-0 text-action"}),o.jsx("span",{className:"text-foreground/90",children:a})]},a))}),o.jsx("div",{className:"mt-8 flex flex-wrap gap-2",children:["Matemáticas","Física","Química","Python","IA","Cloud","GMAT","IB"].map(a=>o.jsx("span",{className:"rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/80",children:a},a))})]})]})]})})})}function y7(){const e=["Grupos grandes","Ritmo estándar","Mismo material para todos","Poca personalización","Foco en cubrir temario","Difícil seguimiento individual"],a=["Enseñanza privada","Diagnóstico individual","Plan adaptado","Material personalizado","Foco en el objetivo","Seguimiento y calendario","Explicación profunda y práctica"];return o.jsx("section",{className:"border-y border-white/5 bg-background py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(at,{children:"Nebula vs lo habitual"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["¿Por qué Nebula no funciona como una"," ",o.jsx("span",{className:"text-muted-foreground line-through decoration-action/40",children:"academia"}),"?"]})]}),o.jsxs("div",{className:"mt-12 grid gap-5 md:grid-cols-2",children:[o.jsxs("div",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-7",children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Academia tradicional"}),o.jsx("h3",{className:"mt-2 font-display text-xl font-semibold text-foreground/70",children:"Modelo de masas"}),o.jsx("ul",{className:"mt-6 space-y-3",children:e.map(t=>o.jsxs("li",{className:"flex items-start gap-3 text-sm text-muted-foreground",children:[o.jsx("span",{className:"mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40"}),t]},t))})]}),o.jsxs("div",{className:"nebula-card nebula-glow rounded-3xl p-7",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Zu,{className:"h-5 w-5"}),o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-spark",children:"Modelo Nebula"})]}),o.jsx("h3",{className:"mt-2 font-display text-xl font-semibold",children:"Enseñanza privada premium"}),o.jsx("ul",{className:"mt-6 space-y-3",children:a.map(t=>o.jsxs("li",{className:"flex items-start gap-3 text-sm text-foreground/90",children:[o.jsx(nl,{className:"mt-0.5 h-4 w-4 shrink-0 text-action"}),t]},t))})]})]})]})})}function x7(){const e=[{quote:"Contactamos con Nebula para ayudar a nuestro hijo Igor. Empezó ingeniería informática y no lo llevaba nada bien. Nos presentaron un método para aprender desde cero y han conseguido que Igor se interese mucho en la carrera. Contaremos con ellos para este curso y el siguiente. 100% recomendable.",name:"Luis",date:"Junio de 2026",meta:"Padre de alumno · Ingeniería Informática"},{quote:"Muy buen profesor, da muy buenos apuntes y su modelo de trabajo a largo plazo me ha servido mucho más que clases sueltas.",name:"Iván",date:"Junio de 2026",meta:"Alumno universitario"},{quote:"Contacté con Nebula para repaso de matemáticas de mi hija; la experiencia ha sido muy muy satisfactoria. Mi hija ha mejorado mucho con la asignatura y ahora disfruta y le gusta la materia. Saben transmitir bien al alumno, aportan los recursos necesarios y explican con paciencia los contenidos hasta asegurar su comprensión. Se preocupan por sus resultados. Lo recomiendo 100%.",name:"Cristina H L",date:"Junio de 2026",meta:"Madre de alumna · Matemáticas"},{quote:"Muy buena experiencia con Nebula. Explican los conceptos de forma clara y ordenada, incluso los temas más complejos. Hay paciencia para resolver dudas y se nota el dominio de la materia. Sus clases y material me han ayudado para preparar los exámenes de la uni y he ganado más confianza al hacer ejercicios y proyectos. Recomiendo totalmente sus clases.",name:"Álvaro Cebrián Sierra",date:"Junio de 2026",meta:"Alumno universitario"}];return o.jsx("section",{className:"py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",children:[o.jsxs("div",{className:"max-w-2xl",children:[o.jsx(at,{children:"Resultados reales"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Historias de ",o.jsx("span",{className:"nebula-gradient-text",children:"progreso"})]})]}),o.jsx("a",{href:"https://www.tusclasesparticulares.com/profesores/nebula-lambda.htm",target:"_blank",rel:"noreferrer",className:"text-xs uppercase tracking-[0.18em] text-muted-foreground underline-offset-4 transition-colors hover:text-link hover:underline",children:"Opiniones verificadas en TusClasesParticulares"})]}),o.jsx("div",{className:"mt-12 grid gap-5 md:grid-cols-2",children:e.map(a=>o.jsxs("figure",{className:"nebula-card flex h-full flex-col justify-between rounded-3xl p-7",children:[o.jsxs("div",{children:[o.jsx("div",{className:"flex items-center gap-1 text-foreground/70",children:Array.from({length:5}).map((t,n)=>o.jsx(X6,{className:"h-4 w-4 fill-current"},n))}),o.jsxs("blockquote",{className:"mt-4 text-sm leading-relaxed text-foreground/90",children:['"',a.quote,'"']})]}),o.jsxs("figcaption",{className:"mt-6 flex items-center justify-between gap-4",children:[o.jsx("span",{className:"font-display text-sm font-semibold",children:a.name}),o.jsxs("span",{className:"text-xs text-muted-foreground",children:[a.date," · ",a.meta]})]})]},a.name))})]})})}function S7(){const e=[{name:"Plan Asignatura",tagline:"Para dejar de ir a remolque de una asignatura y llegar al examen con criterio propio.",icon:C6,items:["Diagnóstico inicial de la asignatura","Clases semanales con objetivo claro","Material y ejercicios propios","Repaso de problemas tipo de examen","Revisión final antes de la prueba"],accent:"primary"},{name:"Plan Examen",tagline:"Para IB, GCSE, Selectividad, GMAT o TFG/TFM cuando la fecha ya no se mueve.",icon:Gu,items:["Calendario realista hasta el día del examen","Simulacros con corrección","Seguimiento semanal escrito","Priorización de temario por impacto","Estrategia final y gestión del día D"],accent:"gold",featured:!0},{name:"Plan IT Career",tagline:"Para entrar al sector tech o subir de nivel sin perderte entre cursos sueltos.",icon:Q2,items:["Ruta personalizada a 3-6 meses","Formación técnica enfocada (Python, SQL, Data, IA)","Proyecto real para GitHub y portfolio","Revisión de CV y LinkedIn","Simulacros de entrevistas técnicas","Soft skills y storytelling profesional"],accent:"electric"}];return o.jsx("section",{id:"programas",className:"border-y border-white/5 py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(at,{children:"Elige tu camino"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Planes personalizados según"," ",o.jsx("span",{className:"nebula-gradient-text",children:"objetivo, nivel y calendario"})]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"Tres marcos de trabajo. Uno se elige tras la llamada de diagnóstico, no antes: primero entendemos tu caso, luego proponemos el plan."})]}),o.jsx("div",{className:"mt-14 grid gap-5 lg:grid-cols-3",children:e.map(a=>{const t=J2(a.accent);return o.jsxs("article",{className:`nebula-card relative flex h-full flex-col overflow-hidden rounded-3xl p-8 ${a.featured?"nebula-glow ring-1 ring-action/30":""}`,children:[a.featured&&o.jsx("span",{className:"absolute right-5 top-5 rounded-full border border-spark/40 bg-spark/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-spark",children:"Más solicitado"}),o.jsx("div",{className:`flex h-12 w-12 items-center justify-center rounded-2xl ${t.soft} ring-1 ${t.ring}`,children:o.jsx(a.icon,{className:`h-6 w-6 ${t.text}`})}),o.jsx("h3",{className:"mt-6 font-display text-2xl font-semibold",children:a.name}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:a.tagline}),o.jsx("ul",{className:"mt-6 grow space-y-2.5",children:a.items.map(n=>o.jsxs("li",{className:"flex items-start gap-2 text-sm text-foreground/90",children:[o.jsx(nl,{className:`mt-0.5 h-4 w-4 shrink-0 ${t.text}`}),n]},n))}),o.jsxs("div",{className:"mt-auto border-t border-white/8 pt-6",children:[o.jsx("p",{className:"text-xs text-muted-foreground",children:"Planes personalizados según objetivo, nivel y calendario."}),o.jsxs("a",{href:"/contacto/",className:"mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/[0.06]",children:["Solicitar diagnóstico",o.jsx(bn,{className:"h-4 w-4"})]})]})]},a.name)})})]})})}function z7(){const{copied:e,copy:a}=ts();return o.jsxs("section",{id:"contacto",className:"relative py-24",children:[o.jsx("div",{className:"absolute inset-0 nebula-aurora opacity-60 pointer-events-none"}),o.jsx("div",{className:"relative mx-auto max-w-7xl px-6",children:o.jsxs("div",{className:"mx-auto max-w-3xl",children:[o.jsx(at,{children:"Hablemos"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Empieza con una ",o.jsx("span",{className:"nebula-gradient-text",children:"llamada de diagnóstico"})]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"Una conversación corta para entender tu objetivo, tu punto de partida y tu fecha. Si Nebula encaja, te enviamos una propuesta concreta. Si no, te decimos qué haríamos en tu lugar."}),o.jsxs("div",{className:"mt-8 space-y-3",children:[o.jsxs("button",{onClick:a,className:"flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors hover:border-white/25 hover:bg-white/[0.06]",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(es,{className:"h-5 w-5 text-action"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-semibold",children:"Copiar número de WhatsApp"}),o.jsxs("p",{className:"text-xs text-muted-foreground",children:[Yu," · respuesta el mismo día"]})]})]}),e?o.jsx(g6,{className:"h-4 w-4 text-green-400"}):o.jsx(M6,{className:"h-4 w-4 text-muted-foreground"})]}),o.jsxs("a",{href:Vu,className:"flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(Qu,{className:"h-5 w-5 text-action"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-semibold",children:"Email de admisiones"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:as})]})]}),o.jsx(bn,{className:"h-4 w-4 text-muted-foreground"})]}),o.jsxs("a",{href:X2,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(V2,{className:"h-5 w-5 text-action"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-semibold",children:"@nebula.lambda"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:"Instagram"})]})]}),o.jsx(bn,{className:"h-4 w-4 text-muted-foreground"})]})]})]})})]})}function w7(){const e=[{q:"¿Das clases online o presenciales?",a:"Trabajamos principalmente online para flexibilidad y eficiencia. Sesiones presenciales puntuales según ubicación y necesidad."},{q:"¿Desde qué curso das clase?",a:"Trabajamos desde ESO en adelante: ESO, Bachillerato, Selectividad, programas internacionales, FP, Universidad y perfiles técnicos."},{q:"¿Puedo preparar un examen con poco tiempo?",a:"Sí, pero el diagnóstico decide qué es realista. Diseñamos un plan honesto según fecha, nivel y temario."},{q:"¿Ayudas con TFG/TFM?",a:"Sí, especialmente en TFG/TFM de áreas cuantitativas, data, IA, ingeniería o economía aplicada."},{q:"¿Preparas entrevistas técnicas?",a:"Sí. Algoritmos, SQL, system design, casos de data/IA, comportamiento y simulacros completos."},{q:"¿Las clases incluyen material?",a:"Sí. Apuntes, ejercicios, esquemas, simulacros y guías adaptadas a tu objetivo."},{q:"¿Cómo sé qué plan necesito?",a:"La llamada de diagnóstico lo resuelve. Te proponemos el plan tras entender tu contexto."},{q:"¿Cuánto cuesta?",a:"Los planes se personalizan según objetivo, alcance y calendario. Te enviamos una propuesta tras el diagnóstico."},{q:"¿Puedo hacer una primera llamada de diagnóstico?",a:"Sí. Es el punto de partida. Es donde definimos si Nebula encaja con tu objetivo."}];return o.jsx("section",{className:"border-t border-white/5 py-24",children:o.jsxs("div",{className:"mx-auto max-w-4xl px-6",children:[o.jsxs("div",{className:"text-center",children:[o.jsx(at,{children:"FAQ"}),o.jsx("h2",{className:"mt-5 text-3xl font-semibold md:text-5xl",children:"Preguntas frecuentes"})]}),o.jsx("div",{className:"mt-12 divide-y divide-white/8 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]",children:e.map((a,t)=>o.jsx(E7,{q:a.q,a:a.a,defaultOpen:t===0},a.q))}),o.jsx("div",{className:"mt-10 text-center",children:o.jsx(ct,{href:"/contacto/",children:"Reservar diagnóstico"})})]})})}function E7({q:e,a,defaultOpen:t}){const[n,r]=ja.useState(!!t);return o.jsxs("div",{children:[o.jsxs("button",{onClick:()=>r(i=>!i),className:"flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]",children:[o.jsx("span",{className:"text-base font-medium text-foreground",children:e}),o.jsx(y6,{className:`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${n?"rotate-180":""}`})]}),n&&o.jsx("div",{className:"px-6 pb-6 text-sm leading-relaxed text-muted-foreground",children:a})]})}class k extends Error{constructor(a,t){var n="KaTeX parse error: "+a,r,i,l=t&&t.loc;if(l&&l.start<=l.end){var s=l.lexer.input;r=l.start,i=l.end,r===s.length?n+=" at end of input: ":n+=" at position "+(r+1)+": ";var u=s.slice(r,i).replace(/[^]/g,"$&̲"),m;r>15?m="…"+s.slice(r-15,r):m=s.slice(0,r);var p;i+15<s.length?p=s.slice(i,i+15)+"…":p=s.slice(i),n+=m+u+p}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,k.prototype),this.position=r,r!=null&&i!=null&&(this.length=i-r),this.rawMessage=a}}var j7=/([A-Z])/g,A7=e=>e.replace(j7,"-$1").toLowerCase(),N7={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},q7=/[&><"']/g,aa=e=>String(e).replace(q7,a=>N7[a]),Il=e=>e.type==="ordgroup"||e.type==="color"?e.body.length===1?Il(e.body[0]):e:e.type==="font"?Il(e.body):e,M7=new Set(["mathord","textord","atom"]),Ut=e=>M7.has(Il(e).type),T7=e=>{var a=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return a?a[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(a[1])?null:a[1].toLowerCase():"_relative"},yc={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,a)=>(a.push(e),a)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function C7(e){if(typeof e!="string")return e.enum[0];switch(e){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function D7(e){if(e.default!==void 0)return e.default;var a=Array.isArray(e.type)?e.type[0]:e.type;return C7(a)}function $7(e,a,t,n){var r=t[a];e[a]=r!==void 0?n.processor?n.processor(r):r:D7(n)}class Ku{constructor(a){a===void 0&&(a={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,a=a||{};for(var t of Object.keys(yc)){var n=yc[t];n&&$7(this,t,a,n)}}reportNonstrict(a,t,n){var r=this.strict;if(typeof r=="function"&&(r=r(a,t,n)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new k("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+a+"]"),n);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+a+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+a+"]"))}}useStrictBehavior(a,t,n){var r=this.strict;if(typeof r=="function")try{r=r(a,t,n)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+a+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+a+"]")),!1)}isTrusted(a){if("url"in a&&a.url&&!a.protocol){var t=T7(a.url);if(t==null)return!1;a.protocol=t}var n=typeof this.trust=="function"?this.trust(a):this.trust;return!!n}}class Yt{constructor(a,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=a,this.size=t,this.cramped=n}sup(){return nt[k7[this.id]]}sub(){return nt[_7[this.id]]}fracNum(){return nt[O7[this.id]]}fracDen(){return nt[B7[this.id]]}cramp(){return nt[R7[this.id]]}text(){return nt[U7[this.id]]}isTight(){return this.size>=2}}var Ju=0,M0=1,Er=2,Ct=3,Li=4,Va=5,Or=6,oa=7,nt=[new Yt(Ju,0,!1),new Yt(M0,0,!0),new Yt(Er,1,!1),new Yt(Ct,1,!0),new Yt(Li,2,!1),new Yt(Va,2,!0),new Yt(Or,3,!1),new Yt(oa,3,!0)],k7=[Li,Va,Li,Va,Or,oa,Or,oa],_7=[Va,Va,Va,Va,oa,oa,oa,oa],O7=[Er,Ct,Li,Va,Or,oa,Or,oa],B7=[Ct,Ct,Va,Va,oa,oa,oa,oa],R7=[M0,M0,Ct,Ct,Va,Va,oa,oa],U7=[Ju,M0,Er,Ct,Er,Ct,Er,Ct],F={DISPLAY:nt[Ju],TEXT:nt[Er],SCRIPT:nt[Li],SCRIPTSCRIPT:nt[Or]},xc=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function L7(e){for(var a=0;a<xc.length;a++)for(var t=xc[a],n=0;n<t.blocks.length;n++){var r=t.blocks[n];if(e>=r[0]&&e<=r[1])return t.name}return null}var Wl=[];xc.forEach(e=>e.blocks.forEach(a=>Wl.push(...a)));function P2(e){for(var a=0;a<Wl.length;a+=2)if(e>=Wl[a]&&e<=Wl[a+1])return!0;return!1}var Qe=e=>e+" "+e,ar=80,H7=function(a,t){return"M95,"+(622+a+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+a/2.075+" -"+a+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+a)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+a)+" "+t+"h400000v"+(40+a)+"h-400000z"},G7=function(a,t){return"M263,"+(601+a+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+a/2.084+" -"+a+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+a)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+a)+" "+t+"h400000v"+(40+a)+"h-400000z"},Q7=function(a,t){return"M983 "+(10+a+t)+`
l`+a/3.13+" -"+a+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+a)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+a)+" "+t+"h400000v"+(40+a)+"h-400000z"},Y7=function(a,t){return"M424,"+(2398+a+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+a/4.223+" -"+a+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+a)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+a)+" "+t+`
h400000v`+(40+a)+"h-400000z"},V7=function(a,t){return"M473,"+(2713+a+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+a/5.298+" -"+a+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+a)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+a)+" "+t+"h400000v"+(40+a)+"H1017.7z"},X7=function(a){var t=a/2;return"M400000 "+a+" H0 L"+t+" 0 l65 45 L145 "+(a-80)+" H400000z"},Z7=function(a,t,n){var r=n-54-t-a;return"M702 "+(a+t)+"H400000"+(40+a)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+a)+"H742z"},F7=function(a,t,n){t=1e3*t;var r="";switch(a){case"sqrtMain":r=H7(t,ar);break;case"sqrtSize1":r=G7(t,ar);break;case"sqrtSize2":r=Q7(t,ar);break;case"sqrtSize3":r=Y7(t,ar);break;case"sqrtSize4":r=V7(t,ar);break;case"sqrtTall":r=Z7(t,ar,n)}return r},K7=function(a,t){switch(a){case"⎜":return Qe("M291 0 H417 V"+t+" H291z");case"∣":return Qe("M145 0 H188 V"+t+" H145z");case"∥":return Qe("M145 0 H188 V"+t+" H145z")+Qe("M367 0 H410 V"+t+" H367z");case"⎟":return Qe("M457 0 H583 V"+t+" H457z");case"⎢":return Qe("M319 0 H403 V"+t+" H319z");case"⎥":return Qe("M263 0 H347 V"+t+" H263z");case"⎪":return Qe("M384 0 H504 V"+t+" H384z");case"⏐":return Qe("M312 0 H355 V"+t+" H312z");case"‖":return Qe("M257 0 H300 V"+t+" H257z")+Qe("M478 0 H521 V"+t+" H478z");default:return""}},Pm={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:Qe("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:Qe("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:Qe("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:Qe("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:Qe("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:Qe("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:Qe("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:Qe("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},J7=function(a,t){switch(a){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function P7(e){return"toText"in e}class Zr{constructor(a){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=a,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(a){return this.classes.includes(a)}toNode(){for(var a=document.createDocumentFragment(),t=0;t<this.children.length;t++)a.appendChild(this.children[t].toNode());return a}toMarkup(){for(var a="",t=0;t<this.children.length;t++)a+=this.children[t].toMarkup();return a}toText(){return this.children.map(a=>{if(P7(a))return a.toText();throw new Error("Expected MathDomNode with toText, got "+a.constructor.name)}).join("")}}var Sc={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},I7={ex:!0,em:!0,mu:!0},I2=function(a){return typeof a!="string"&&(a=a.unit),a in Sc||a in I7||a==="ex"},Me=function(a,t){var n;if(a.unit in Sc)n=Sc[a.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(a.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,a.unit==="ex")n=r.fontMetrics().xHeight;else if(a.unit==="em")n=r.fontMetrics().quad;else throw new k("Invalid unit: '"+a.unit+"'");r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(a.number*n,t.maxSize)},O=function(a){return+a.toFixed(4)+"em"},yn=function(a){return a.filter(t=>t).join(" ")},Pu=function(a){var t="";for(var n of Object.keys(a)){var r=a[n];r!==void 0&&(t+=A7(n)+":"+r+";")}return t},W2=function(a,t,n){if(this.classes=a||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},ep=function(a){var t=document.createElement(a);t.className=yn(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t},W7=/[\s"'>/=\x00-\x1f]/,ap=function(a){var t="<"+a;this.classes.length&&(t+=' class="'+aa(yn(this.classes))+'"');var n=Pu(this.style);n&&(t+=' style="'+aa(n)+'"');for(var r of Object.keys(this.attributes)){if(W7.test(r))throw new k("Invalid attribute name '"+r+"'");t+=" "+r+'="'+aa(this.attributes[r])+'"'}t+=">";for(var i=0;i<this.children.length;i++)t+=this.children[i].toMarkup();return t+="</"+a+">",t};class Fr{constructor(a,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,W2.call(this,a,n,r),this.children=t||[]}setAttribute(a,t){this.attributes[a]=t}hasClass(a){return this.classes.includes(a)}toNode(){return ep.call(this,"span")}toMarkup(){return ap.call(this,"span")}}class ns{constructor(a,t,n,r){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,W2.call(this,t,r),this.children=n||[],this.setAttribute("href",a)}setAttribute(a,t){this.attributes[a]=t}hasClass(a){return this.classes.includes(a)}toNode(){return ep.call(this,"a")}toMarkup(){return ap.call(this,"a")}}class ev{constructor(a,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=a,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(a){return this.classes.includes(a)}toNode(){var a=document.createElement("img");return a.src=this.src,a.alt=this.alt,a.className="mord",Object.assign(a.style,this.style),a}toMarkup(){var a='<img src="'+aa(this.src)+'"'+(' alt="'+aa(this.alt)+'"'),t=Pu(this.style);return t&&(a+=' style="'+aa(t)+'"'),a+="'/>",a}}var av={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class $a{constructor(a,t,n,r,i,l,s,u){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=a,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=i||0,this.width=l||0,this.classes=s||[],this.style=u||{},this.maxFontSize=0;var m=L7(this.text.charCodeAt(0));m&&this.classes.push(m+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=av[this.text])}hasClass(a){return this.classes.includes(a)}toNode(){var a=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement("span"),t.style.marginRight=O(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=yn(this.classes)),Object.keys(this.style).length>0&&(t=t||document.createElement("span"),Object.assign(t.style,this.style)),t?(t.appendChild(a),t):a}toMarkup(){var a=!1,t="<span";this.classes.length&&(a=!0,t+=' class="',t+=aa(yn(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+O(this.italic)+";"),n+=Pu(this.style),n&&(a=!0,t+=' style="'+aa(n)+'"');var r=aa(this.text);return a?(t+=">",t+=r,t+="</span>",t):r}}class Bt{constructor(a,t){this.children=void 0,this.attributes=void 0,this.children=a||[],this.attributes=t||{}}toNode(){var a="http://www.w3.org/2000/svg",t=document.createElementNS(a,"svg");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var a='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))a+=" "+t+'="'+aa(this.attributes[t])+'"';a+=">";for(var n=0;n<this.children.length;n++)a+=this.children[n].toMarkup();return a+="</svg>",a}}class xn{constructor(a,t){this.pathName=void 0,this.alternate=void 0,this.pathName=a,this.alternate=t}toNode(){var a="http://www.w3.org/2000/svg",t=document.createElementNS(a,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",Pm[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+aa(this.alternate)+'"/>':'<path d="'+aa(Pm[this.pathName])+'"/>'}}class zc{constructor(a){this.attributes=void 0,this.attributes=a||{}}toNode(){var a="http://www.w3.org/2000/svg",t=document.createElementNS(a,"line");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var a="<line";for(var t of Object.keys(this.attributes))a+=" "+t+'="'+aa(this.attributes[t])+'"';return a+="/>",a}}function tv(e){if(e instanceof $a)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function nv(e){if(e instanceof Fr)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var rv=e=>e instanceof Fr||e instanceof ns||e instanceof Zr,st={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},ql={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Im={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function iv(e,a){st[e]=a}function Iu(e,a,t){if(!st[a])throw new Error("Font metrics not found for font: "+a+".");var n=e.charCodeAt(0),r=st[a][n];if(!r&&e[0]in Im&&(n=Im[e[0]].charCodeAt(0),r=st[a][n]),!r&&t==="text"&&P2(n)&&(r=st[a][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var eo={};function lv(e){var a;if(e>=5?a=0:e>=3?a=1:a=2,!eo[a]){var t=eo[a]={cssEmPerMu:ql.quad[a]/18};for(var n in ql)ql.hasOwnProperty(n)&&(t[n]=ql[n][a])}return eo[a]}var Ae={math:{},text:{}};function c(e,a,t,n,r,i){Ae[e][r]={font:a,group:t,replace:n},i&&n&&(Ae[e][n]=Ae[e][r])}var d="math",T="text",f="main",S="ams",Ne="accent-token",G="bin",ua="close",Kr="inner",Q="mathord",Ge="op-token",ka="open",rl="punct",z="rel",Lt="spacing",E="textord";c(d,f,z,"≡","\\equiv",!0);c(d,f,z,"≺","\\prec",!0);c(d,f,z,"≻","\\succ",!0);c(d,f,z,"∼","\\sim",!0);c(d,f,z,"⊥","\\perp");c(d,f,z,"⪯","\\preceq",!0);c(d,f,z,"⪰","\\succeq",!0);c(d,f,z,"≃","\\simeq",!0);c(d,f,z,"∣","\\mid",!0);c(d,f,z,"≪","\\ll",!0);c(d,f,z,"≫","\\gg",!0);c(d,f,z,"≍","\\asymp",!0);c(d,f,z,"∥","\\parallel");c(d,f,z,"⋈","\\bowtie",!0);c(d,f,z,"⌣","\\smile",!0);c(d,f,z,"⊑","\\sqsubseteq",!0);c(d,f,z,"⊒","\\sqsupseteq",!0);c(d,f,z,"≐","\\doteq",!0);c(d,f,z,"⌢","\\frown",!0);c(d,f,z,"∋","\\ni",!0);c(d,f,z,"∝","\\propto",!0);c(d,f,z,"⊢","\\vdash",!0);c(d,f,z,"⊣","\\dashv",!0);c(d,f,z,"∋","\\owns");c(d,f,rl,".","\\ldotp");c(d,f,rl,"⋅","\\cdotp");c(d,f,rl,"⋅","·");c(T,f,E,"⋅","·");c(d,f,E,"#","\\#");c(T,f,E,"#","\\#");c(d,f,E,"&","\\&");c(T,f,E,"&","\\&");c(d,f,E,"ℵ","\\aleph",!0);c(d,f,E,"∀","\\forall",!0);c(d,f,E,"ℏ","\\hbar",!0);c(d,f,E,"∃","\\exists",!0);c(d,f,E,"∇","\\nabla",!0);c(d,f,E,"♭","\\flat",!0);c(d,f,E,"ℓ","\\ell",!0);c(d,f,E,"♮","\\natural",!0);c(d,f,E,"♣","\\clubsuit",!0);c(d,f,E,"℘","\\wp",!0);c(d,f,E,"♯","\\sharp",!0);c(d,f,E,"♢","\\diamondsuit",!0);c(d,f,E,"ℜ","\\Re",!0);c(d,f,E,"♡","\\heartsuit",!0);c(d,f,E,"ℑ","\\Im",!0);c(d,f,E,"♠","\\spadesuit",!0);c(d,f,E,"§","\\S",!0);c(T,f,E,"§","\\S");c(d,f,E,"¶","\\P",!0);c(T,f,E,"¶","\\P");c(d,f,E,"†","\\dag");c(T,f,E,"†","\\dag");c(T,f,E,"†","\\textdagger");c(d,f,E,"‡","\\ddag");c(T,f,E,"‡","\\ddag");c(T,f,E,"‡","\\textdaggerdbl");c(d,f,ua,"⎱","\\rmoustache",!0);c(d,f,ka,"⎰","\\lmoustache",!0);c(d,f,ua,"⟯","\\rgroup",!0);c(d,f,ka,"⟮","\\lgroup",!0);c(d,f,G,"∓","\\mp",!0);c(d,f,G,"⊖","\\ominus",!0);c(d,f,G,"⊎","\\uplus",!0);c(d,f,G,"⊓","\\sqcap",!0);c(d,f,G,"∗","\\ast");c(d,f,G,"⊔","\\sqcup",!0);c(d,f,G,"◯","\\bigcirc",!0);c(d,f,G,"∙","\\bullet",!0);c(d,f,G,"‡","\\ddagger");c(d,f,G,"≀","\\wr",!0);c(d,f,G,"⨿","\\amalg");c(d,f,G,"&","\\And");c(d,f,z,"⟵","\\longleftarrow",!0);c(d,f,z,"⇐","\\Leftarrow",!0);c(d,f,z,"⟸","\\Longleftarrow",!0);c(d,f,z,"⟶","\\longrightarrow",!0);c(d,f,z,"⇒","\\Rightarrow",!0);c(d,f,z,"⟹","\\Longrightarrow",!0);c(d,f,z,"↔","\\leftrightarrow",!0);c(d,f,z,"⟷","\\longleftrightarrow",!0);c(d,f,z,"⇔","\\Leftrightarrow",!0);c(d,f,z,"⟺","\\Longleftrightarrow",!0);c(d,f,z,"↦","\\mapsto",!0);c(d,f,z,"⟼","\\longmapsto",!0);c(d,f,z,"↗","\\nearrow",!0);c(d,f,z,"↩","\\hookleftarrow",!0);c(d,f,z,"↪","\\hookrightarrow",!0);c(d,f,z,"↘","\\searrow",!0);c(d,f,z,"↼","\\leftharpoonup",!0);c(d,f,z,"⇀","\\rightharpoonup",!0);c(d,f,z,"↙","\\swarrow",!0);c(d,f,z,"↽","\\leftharpoondown",!0);c(d,f,z,"⇁","\\rightharpoondown",!0);c(d,f,z,"↖","\\nwarrow",!0);c(d,f,z,"⇌","\\rightleftharpoons",!0);c(d,S,z,"≮","\\nless",!0);c(d,S,z,"","\\@nleqslant");c(d,S,z,"","\\@nleqq");c(d,S,z,"⪇","\\lneq",!0);c(d,S,z,"≨","\\lneqq",!0);c(d,S,z,"","\\@lvertneqq");c(d,S,z,"⋦","\\lnsim",!0);c(d,S,z,"⪉","\\lnapprox",!0);c(d,S,z,"⊀","\\nprec",!0);c(d,S,z,"⋠","\\npreceq",!0);c(d,S,z,"⋨","\\precnsim",!0);c(d,S,z,"⪹","\\precnapprox",!0);c(d,S,z,"≁","\\nsim",!0);c(d,S,z,"","\\@nshortmid");c(d,S,z,"∤","\\nmid",!0);c(d,S,z,"⊬","\\nvdash",!0);c(d,S,z,"⊭","\\nvDash",!0);c(d,S,z,"⋪","\\ntriangleleft");c(d,S,z,"⋬","\\ntrianglelefteq",!0);c(d,S,z,"⊊","\\subsetneq",!0);c(d,S,z,"","\\@varsubsetneq");c(d,S,z,"⫋","\\subsetneqq",!0);c(d,S,z,"","\\@varsubsetneqq");c(d,S,z,"≯","\\ngtr",!0);c(d,S,z,"","\\@ngeqslant");c(d,S,z,"","\\@ngeqq");c(d,S,z,"⪈","\\gneq",!0);c(d,S,z,"≩","\\gneqq",!0);c(d,S,z,"","\\@gvertneqq");c(d,S,z,"⋧","\\gnsim",!0);c(d,S,z,"⪊","\\gnapprox",!0);c(d,S,z,"⊁","\\nsucc",!0);c(d,S,z,"⋡","\\nsucceq",!0);c(d,S,z,"⋩","\\succnsim",!0);c(d,S,z,"⪺","\\succnapprox",!0);c(d,S,z,"≆","\\ncong",!0);c(d,S,z,"","\\@nshortparallel");c(d,S,z,"∦","\\nparallel",!0);c(d,S,z,"⊯","\\nVDash",!0);c(d,S,z,"⋫","\\ntriangleright");c(d,S,z,"⋭","\\ntrianglerighteq",!0);c(d,S,z,"","\\@nsupseteqq");c(d,S,z,"⊋","\\supsetneq",!0);c(d,S,z,"","\\@varsupsetneq");c(d,S,z,"⫌","\\supsetneqq",!0);c(d,S,z,"","\\@varsupsetneqq");c(d,S,z,"⊮","\\nVdash",!0);c(d,S,z,"⪵","\\precneqq",!0);c(d,S,z,"⪶","\\succneqq",!0);c(d,S,z,"","\\@nsubseteqq");c(d,S,G,"⊴","\\unlhd");c(d,S,G,"⊵","\\unrhd");c(d,S,z,"↚","\\nleftarrow",!0);c(d,S,z,"↛","\\nrightarrow",!0);c(d,S,z,"⇍","\\nLeftarrow",!0);c(d,S,z,"⇏","\\nRightarrow",!0);c(d,S,z,"↮","\\nleftrightarrow",!0);c(d,S,z,"⇎","\\nLeftrightarrow",!0);c(d,S,z,"△","\\vartriangle");c(d,S,E,"ℏ","\\hslash");c(d,S,E,"▽","\\triangledown");c(d,S,E,"◊","\\lozenge");c(d,S,E,"Ⓢ","\\circledS");c(d,S,E,"®","\\circledR");c(T,S,E,"®","\\circledR");c(d,S,E,"∡","\\measuredangle",!0);c(d,S,E,"∄","\\nexists");c(d,S,E,"℧","\\mho");c(d,S,E,"Ⅎ","\\Finv",!0);c(d,S,E,"⅁","\\Game",!0);c(d,S,E,"‵","\\backprime");c(d,S,E,"▲","\\blacktriangle");c(d,S,E,"▼","\\blacktriangledown");c(d,S,E,"■","\\blacksquare");c(d,S,E,"⧫","\\blacklozenge");c(d,S,E,"★","\\bigstar");c(d,S,E,"∢","\\sphericalangle",!0);c(d,S,E,"∁","\\complement",!0);c(d,S,E,"ð","\\eth",!0);c(T,f,E,"ð","ð");c(d,S,E,"╱","\\diagup");c(d,S,E,"╲","\\diagdown");c(d,S,E,"□","\\square");c(d,S,E,"□","\\Box");c(d,S,E,"◊","\\Diamond");c(d,S,E,"¥","\\yen",!0);c(T,S,E,"¥","\\yen",!0);c(d,S,E,"✓","\\checkmark",!0);c(T,S,E,"✓","\\checkmark");c(d,S,E,"ℶ","\\beth",!0);c(d,S,E,"ℸ","\\daleth",!0);c(d,S,E,"ℷ","\\gimel",!0);c(d,S,E,"ϝ","\\digamma",!0);c(d,S,E,"ϰ","\\varkappa");c(d,S,ka,"┌","\\@ulcorner",!0);c(d,S,ua,"┐","\\@urcorner",!0);c(d,S,ka,"└","\\@llcorner",!0);c(d,S,ua,"┘","\\@lrcorner",!0);c(d,S,z,"≦","\\leqq",!0);c(d,S,z,"⩽","\\leqslant",!0);c(d,S,z,"⪕","\\eqslantless",!0);c(d,S,z,"≲","\\lesssim",!0);c(d,S,z,"⪅","\\lessapprox",!0);c(d,S,z,"≊","\\approxeq",!0);c(d,S,G,"⋖","\\lessdot");c(d,S,z,"⋘","\\lll",!0);c(d,S,z,"≶","\\lessgtr",!0);c(d,S,z,"⋚","\\lesseqgtr",!0);c(d,S,z,"⪋","\\lesseqqgtr",!0);c(d,S,z,"≑","\\doteqdot");c(d,S,z,"≓","\\risingdotseq",!0);c(d,S,z,"≒","\\fallingdotseq",!0);c(d,S,z,"∽","\\backsim",!0);c(d,S,z,"⋍","\\backsimeq",!0);c(d,S,z,"⫅","\\subseteqq",!0);c(d,S,z,"⋐","\\Subset",!0);c(d,S,z,"⊏","\\sqsubset",!0);c(d,S,z,"≼","\\preccurlyeq",!0);c(d,S,z,"⋞","\\curlyeqprec",!0);c(d,S,z,"≾","\\precsim",!0);c(d,S,z,"⪷","\\precapprox",!0);c(d,S,z,"⊲","\\vartriangleleft");c(d,S,z,"⊴","\\trianglelefteq");c(d,S,z,"⊨","\\vDash",!0);c(d,S,z,"⊪","\\Vvdash",!0);c(d,S,z,"⌣","\\smallsmile");c(d,S,z,"⌢","\\smallfrown");c(d,S,z,"≏","\\bumpeq",!0);c(d,S,z,"≎","\\Bumpeq",!0);c(d,S,z,"≧","\\geqq",!0);c(d,S,z,"⩾","\\geqslant",!0);c(d,S,z,"⪖","\\eqslantgtr",!0);c(d,S,z,"≳","\\gtrsim",!0);c(d,S,z,"⪆","\\gtrapprox",!0);c(d,S,G,"⋗","\\gtrdot");c(d,S,z,"⋙","\\ggg",!0);c(d,S,z,"≷","\\gtrless",!0);c(d,S,z,"⋛","\\gtreqless",!0);c(d,S,z,"⪌","\\gtreqqless",!0);c(d,S,z,"≖","\\eqcirc",!0);c(d,S,z,"≗","\\circeq",!0);c(d,S,z,"≜","\\triangleq",!0);c(d,S,z,"∼","\\thicksim");c(d,S,z,"≈","\\thickapprox");c(d,S,z,"⫆","\\supseteqq",!0);c(d,S,z,"⋑","\\Supset",!0);c(d,S,z,"⊐","\\sqsupset",!0);c(d,S,z,"≽","\\succcurlyeq",!0);c(d,S,z,"⋟","\\curlyeqsucc",!0);c(d,S,z,"≿","\\succsim",!0);c(d,S,z,"⪸","\\succapprox",!0);c(d,S,z,"⊳","\\vartriangleright");c(d,S,z,"⊵","\\trianglerighteq");c(d,S,z,"⊩","\\Vdash",!0);c(d,S,z,"∣","\\shortmid");c(d,S,z,"∥","\\shortparallel");c(d,S,z,"≬","\\between",!0);c(d,S,z,"⋔","\\pitchfork",!0);c(d,S,z,"∝","\\varpropto");c(d,S,z,"◀","\\blacktriangleleft");c(d,S,z,"∴","\\therefore",!0);c(d,S,z,"∍","\\backepsilon");c(d,S,z,"▶","\\blacktriangleright");c(d,S,z,"∵","\\because",!0);c(d,S,z,"⋘","\\llless");c(d,S,z,"⋙","\\gggtr");c(d,S,G,"⊲","\\lhd");c(d,S,G,"⊳","\\rhd");c(d,S,z,"≂","\\eqsim",!0);c(d,f,z,"⋈","\\Join");c(d,S,z,"≑","\\Doteq",!0);c(d,S,G,"∔","\\dotplus",!0);c(d,S,G,"∖","\\smallsetminus");c(d,S,G,"⋒","\\Cap",!0);c(d,S,G,"⋓","\\Cup",!0);c(d,S,G,"⩞","\\doublebarwedge",!0);c(d,S,G,"⊟","\\boxminus",!0);c(d,S,G,"⊞","\\boxplus",!0);c(d,S,G,"⋇","\\divideontimes",!0);c(d,S,G,"⋉","\\ltimes",!0);c(d,S,G,"⋊","\\rtimes",!0);c(d,S,G,"⋋","\\leftthreetimes",!0);c(d,S,G,"⋌","\\rightthreetimes",!0);c(d,S,G,"⋏","\\curlywedge",!0);c(d,S,G,"⋎","\\curlyvee",!0);c(d,S,G,"⊝","\\circleddash",!0);c(d,S,G,"⊛","\\circledast",!0);c(d,S,G,"⋅","\\centerdot");c(d,S,G,"⊺","\\intercal",!0);c(d,S,G,"⋒","\\doublecap");c(d,S,G,"⋓","\\doublecup");c(d,S,G,"⊠","\\boxtimes",!0);c(d,S,z,"⇢","\\dashrightarrow",!0);c(d,S,z,"⇠","\\dashleftarrow",!0);c(d,S,z,"⇇","\\leftleftarrows",!0);c(d,S,z,"⇆","\\leftrightarrows",!0);c(d,S,z,"⇚","\\Lleftarrow",!0);c(d,S,z,"↞","\\twoheadleftarrow",!0);c(d,S,z,"↢","\\leftarrowtail",!0);c(d,S,z,"↫","\\looparrowleft",!0);c(d,S,z,"⇋","\\leftrightharpoons",!0);c(d,S,z,"↶","\\curvearrowleft",!0);c(d,S,z,"↺","\\circlearrowleft",!0);c(d,S,z,"↰","\\Lsh",!0);c(d,S,z,"⇈","\\upuparrows",!0);c(d,S,z,"↿","\\upharpoonleft",!0);c(d,S,z,"⇃","\\downharpoonleft",!0);c(d,f,z,"⊶","\\origof",!0);c(d,f,z,"⊷","\\imageof",!0);c(d,S,z,"⊸","\\multimap",!0);c(d,S,z,"↭","\\leftrightsquigarrow",!0);c(d,S,z,"⇉","\\rightrightarrows",!0);c(d,S,z,"⇄","\\rightleftarrows",!0);c(d,S,z,"↠","\\twoheadrightarrow",!0);c(d,S,z,"↣","\\rightarrowtail",!0);c(d,S,z,"↬","\\looparrowright",!0);c(d,S,z,"↷","\\curvearrowright",!0);c(d,S,z,"↻","\\circlearrowright",!0);c(d,S,z,"↱","\\Rsh",!0);c(d,S,z,"⇊","\\downdownarrows",!0);c(d,S,z,"↾","\\upharpoonright",!0);c(d,S,z,"⇂","\\downharpoonright",!0);c(d,S,z,"⇝","\\rightsquigarrow",!0);c(d,S,z,"⇝","\\leadsto");c(d,S,z,"⇛","\\Rrightarrow",!0);c(d,S,z,"↾","\\restriction");c(d,f,E,"‘","`");c(d,f,E,"$","\\$");c(T,f,E,"$","\\$");c(T,f,E,"$","\\textdollar");c(d,f,E,"%","\\%");c(T,f,E,"%","\\%");c(d,f,E,"_","\\_");c(T,f,E,"_","\\_");c(T,f,E,"_","\\textunderscore");c(d,f,E,"∠","\\angle",!0);c(d,f,E,"∞","\\infty",!0);c(d,f,E,"′","\\prime");c(d,f,E,"△","\\triangle");c(d,f,E,"Γ","\\Gamma",!0);c(d,f,E,"Δ","\\Delta",!0);c(d,f,E,"Θ","\\Theta",!0);c(d,f,E,"Λ","\\Lambda",!0);c(d,f,E,"Ξ","\\Xi",!0);c(d,f,E,"Π","\\Pi",!0);c(d,f,E,"Σ","\\Sigma",!0);c(d,f,E,"Υ","\\Upsilon",!0);c(d,f,E,"Φ","\\Phi",!0);c(d,f,E,"Ψ","\\Psi",!0);c(d,f,E,"Ω","\\Omega",!0);c(d,f,E,"A","Α");c(d,f,E,"B","Β");c(d,f,E,"E","Ε");c(d,f,E,"Z","Ζ");c(d,f,E,"H","Η");c(d,f,E,"I","Ι");c(d,f,E,"K","Κ");c(d,f,E,"M","Μ");c(d,f,E,"N","Ν");c(d,f,E,"O","Ο");c(d,f,E,"P","Ρ");c(d,f,E,"T","Τ");c(d,f,E,"X","Χ");c(d,f,E,"¬","\\neg",!0);c(d,f,E,"¬","\\lnot");c(d,f,E,"⊤","\\top");c(d,f,E,"⊥","\\bot");c(d,f,E,"∅","\\emptyset");c(d,S,E,"∅","\\varnothing");c(d,f,Q,"α","\\alpha",!0);c(d,f,Q,"β","\\beta",!0);c(d,f,Q,"γ","\\gamma",!0);c(d,f,Q,"δ","\\delta",!0);c(d,f,Q,"ϵ","\\epsilon",!0);c(d,f,Q,"ζ","\\zeta",!0);c(d,f,Q,"η","\\eta",!0);c(d,f,Q,"θ","\\theta",!0);c(d,f,Q,"ι","\\iota",!0);c(d,f,Q,"κ","\\kappa",!0);c(d,f,Q,"λ","\\lambda",!0);c(d,f,Q,"μ","\\mu",!0);c(d,f,Q,"ν","\\nu",!0);c(d,f,Q,"ξ","\\xi",!0);c(d,f,Q,"ο","\\omicron",!0);c(d,f,Q,"π","\\pi",!0);c(d,f,Q,"ρ","\\rho",!0);c(d,f,Q,"σ","\\sigma",!0);c(d,f,Q,"τ","\\tau",!0);c(d,f,Q,"υ","\\upsilon",!0);c(d,f,Q,"ϕ","\\phi",!0);c(d,f,Q,"χ","\\chi",!0);c(d,f,Q,"ψ","\\psi",!0);c(d,f,Q,"ω","\\omega",!0);c(d,f,Q,"ε","\\varepsilon",!0);c(d,f,Q,"ϑ","\\vartheta",!0);c(d,f,Q,"ϖ","\\varpi",!0);c(d,f,Q,"ϱ","\\varrho",!0);c(d,f,Q,"ς","\\varsigma",!0);c(d,f,Q,"φ","\\varphi",!0);c(d,f,G,"∗","*",!0);c(d,f,G,"+","+");c(d,f,G,"−","-",!0);c(d,f,G,"⋅","\\cdot",!0);c(d,f,G,"∘","\\circ",!0);c(d,f,G,"÷","\\div",!0);c(d,f,G,"±","\\pm",!0);c(d,f,G,"×","\\times",!0);c(d,f,G,"∩","\\cap",!0);c(d,f,G,"∪","\\cup",!0);c(d,f,G,"∖","\\setminus",!0);c(d,f,G,"∧","\\land");c(d,f,G,"∨","\\lor");c(d,f,G,"∧","\\wedge",!0);c(d,f,G,"∨","\\vee",!0);c(d,f,E,"√","\\surd");c(d,f,ka,"⟨","\\langle",!0);c(d,f,ka,"∣","\\lvert");c(d,f,ka,"∥","\\lVert");c(d,f,ua,"?","?");c(d,f,ua,"!","!");c(d,f,ua,"⟩","\\rangle",!0);c(d,f,ua,"∣","\\rvert");c(d,f,ua,"∥","\\rVert");c(d,f,z,"=","=");c(d,f,z,":",":");c(d,f,z,"≈","\\approx",!0);c(d,f,z,"≅","\\cong",!0);c(d,f,z,"≥","\\ge");c(d,f,z,"≥","\\geq",!0);c(d,f,z,"←","\\gets");c(d,f,z,">","\\gt",!0);c(d,f,z,"∈","\\in",!0);c(d,f,z,"","\\@not");c(d,f,z,"⊂","\\subset",!0);c(d,f,z,"⊃","\\supset",!0);c(d,f,z,"⊆","\\subseteq",!0);c(d,f,z,"⊇","\\supseteq",!0);c(d,S,z,"⊈","\\nsubseteq",!0);c(d,S,z,"⊉","\\nsupseteq",!0);c(d,f,z,"⊨","\\models");c(d,f,z,"←","\\leftarrow",!0);c(d,f,z,"≤","\\le");c(d,f,z,"≤","\\leq",!0);c(d,f,z,"<","\\lt",!0);c(d,f,z,"→","\\rightarrow",!0);c(d,f,z,"→","\\to");c(d,S,z,"≱","\\ngeq",!0);c(d,S,z,"≰","\\nleq",!0);c(d,f,Lt," ","\\ ");c(d,f,Lt," ","\\space");c(d,f,Lt," ","\\nobreakspace");c(T,f,Lt," ","\\ ");c(T,f,Lt," "," ");c(T,f,Lt," ","\\space");c(T,f,Lt," ","\\nobreakspace");c(d,f,Lt,"","\\nobreak");c(d,f,Lt,"","\\allowbreak");c(d,f,rl,",",",");c(d,f,rl,";",";");c(d,S,G,"⊼","\\barwedge",!0);c(d,S,G,"⊻","\\veebar",!0);c(d,f,G,"⊙","\\odot",!0);c(d,f,G,"⊕","\\oplus",!0);c(d,f,G,"⊗","\\otimes",!0);c(d,f,E,"∂","\\partial",!0);c(d,f,G,"⊘","\\oslash",!0);c(d,S,G,"⊚","\\circledcirc",!0);c(d,S,G,"⊡","\\boxdot",!0);c(d,f,G,"△","\\bigtriangleup");c(d,f,G,"▽","\\bigtriangledown");c(d,f,G,"†","\\dagger");c(d,f,G,"⋄","\\diamond");c(d,f,G,"⋆","\\star");c(d,f,G,"◃","\\triangleleft");c(d,f,G,"▹","\\triangleright");c(d,f,ka,"{","\\{");c(T,f,E,"{","\\{");c(T,f,E,"{","\\textbraceleft");c(d,f,ua,"}","\\}");c(T,f,E,"}","\\}");c(T,f,E,"}","\\textbraceright");c(d,f,ka,"{","\\lbrace");c(d,f,ua,"}","\\rbrace");c(d,f,ka,"[","\\lbrack",!0);c(T,f,E,"[","\\lbrack",!0);c(d,f,ua,"]","\\rbrack",!0);c(T,f,E,"]","\\rbrack",!0);c(d,f,ka,"(","\\lparen",!0);c(d,f,ua,")","\\rparen",!0);c(T,f,E,"<","\\textless",!0);c(T,f,E,">","\\textgreater",!0);c(d,f,ka,"⌊","\\lfloor",!0);c(d,f,ua,"⌋","\\rfloor",!0);c(d,f,ka,"⌈","\\lceil",!0);c(d,f,ua,"⌉","\\rceil",!0);c(d,f,E,"\\","\\backslash");c(d,f,E,"∣","|");c(d,f,E,"∣","\\vert");c(T,f,E,"|","\\textbar",!0);c(d,f,E,"∥","\\|");c(d,f,E,"∥","\\Vert");c(T,f,E,"∥","\\textbardbl");c(T,f,E,"~","\\textasciitilde");c(T,f,E,"\\","\\textbackslash");c(T,f,E,"^","\\textasciicircum");c(d,f,z,"↑","\\uparrow",!0);c(d,f,z,"⇑","\\Uparrow",!0);c(d,f,z,"↓","\\downarrow",!0);c(d,f,z,"⇓","\\Downarrow",!0);c(d,f,z,"↕","\\updownarrow",!0);c(d,f,z,"⇕","\\Updownarrow",!0);c(d,f,Ge,"∐","\\coprod");c(d,f,Ge,"⋁","\\bigvee");c(d,f,Ge,"⋀","\\bigwedge");c(d,f,Ge,"⨄","\\biguplus");c(d,f,Ge,"⋂","\\bigcap");c(d,f,Ge,"⋃","\\bigcup");c(d,f,Ge,"∫","\\int");c(d,f,Ge,"∫","\\intop");c(d,f,Ge,"∬","\\iint");c(d,f,Ge,"∭","\\iiint");c(d,f,Ge,"∏","\\prod");c(d,f,Ge,"∑","\\sum");c(d,f,Ge,"⨂","\\bigotimes");c(d,f,Ge,"⨁","\\bigoplus");c(d,f,Ge,"⨀","\\bigodot");c(d,f,Ge,"∮","\\oint");c(d,f,Ge,"∯","\\oiint");c(d,f,Ge,"∰","\\oiiint");c(d,f,Ge,"⨆","\\bigsqcup");c(d,f,Ge,"∫","\\smallint");c(T,f,Kr,"…","\\textellipsis");c(d,f,Kr,"…","\\mathellipsis");c(T,f,Kr,"…","\\ldots",!0);c(d,f,Kr,"…","\\ldots",!0);c(d,f,Kr,"⋯","\\@cdots",!0);c(d,f,Kr,"⋱","\\ddots",!0);c(d,f,E,"⋮","\\varvdots");c(T,f,E,"⋮","\\varvdots");c(d,f,Ne,"ˊ","\\acute");c(d,f,Ne,"ˋ","\\grave");c(d,f,Ne,"¨","\\ddot");c(d,f,Ne,"~","\\tilde");c(d,f,Ne,"ˉ","\\bar");c(d,f,Ne,"˘","\\breve");c(d,f,Ne,"ˇ","\\check");c(d,f,Ne,"^","\\hat");c(d,f,Ne,"⃗","\\vec");c(d,f,Ne,"˙","\\dot");c(d,f,Ne,"˚","\\mathring");c(d,f,Q,"","\\@imath");c(d,f,Q,"","\\@jmath");c(d,f,E,"ı","ı");c(d,f,E,"ȷ","ȷ");c(T,f,E,"ı","\\i",!0);c(T,f,E,"ȷ","\\j",!0);c(T,f,E,"ß","\\ss",!0);c(T,f,E,"æ","\\ae",!0);c(T,f,E,"œ","\\oe",!0);c(T,f,E,"ø","\\o",!0);c(T,f,E,"Æ","\\AE",!0);c(T,f,E,"Œ","\\OE",!0);c(T,f,E,"Ø","\\O",!0);c(T,f,Ne,"ˊ","\\'");c(T,f,Ne,"ˋ","\\`");c(T,f,Ne,"ˆ","\\^");c(T,f,Ne,"˜","\\~");c(T,f,Ne,"ˉ","\\=");c(T,f,Ne,"˘","\\u");c(T,f,Ne,"˙","\\.");c(T,f,Ne,"¸","\\c");c(T,f,Ne,"˚","\\r");c(T,f,Ne,"ˇ","\\v");c(T,f,Ne,"¨",'\\"');c(T,f,Ne,"˝","\\H");c(T,f,Ne,"◯","\\textcircled");var tp={"--":!0,"---":!0,"``":!0,"''":!0};c(T,f,E,"–","--",!0);c(T,f,E,"–","\\textendash");c(T,f,E,"—","---",!0);c(T,f,E,"—","\\textemdash");c(T,f,E,"‘","`",!0);c(T,f,E,"‘","\\textquoteleft");c(T,f,E,"’","'",!0);c(T,f,E,"’","\\textquoteright");c(T,f,E,"“","``",!0);c(T,f,E,"“","\\textquotedblleft");c(T,f,E,"”","''",!0);c(T,f,E,"”","\\textquotedblright");c(d,f,E,"°","\\degree",!0);c(T,f,E,"°","\\degree");c(T,f,E,"°","\\textdegree",!0);c(d,f,E,"£","\\pounds");c(d,f,E,"£","\\mathsterling",!0);c(T,f,E,"£","\\pounds");c(T,f,E,"£","\\textsterling",!0);c(d,S,E,"✠","\\maltese");c(T,S,E,"✠","\\maltese");var Wm='0123456789/@."';for(var ao=0;ao<Wm.length;ao++){var e1=Wm.charAt(ao);c(d,f,E,e1,e1)}var a1='0123456789!@*()-=+";:?/.,';for(var to=0;to<a1.length;to++){var t1=a1.charAt(to);c(T,f,E,t1,t1)}var T0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var no=0;no<T0.length;no++){var Ml=T0.charAt(no);c(d,f,Q,Ml,Ml),c(T,f,E,Ml,Ml)}c(d,S,E,"C","ℂ");c(T,S,E,"C","ℂ");c(d,S,E,"H","ℍ");c(T,S,E,"H","ℍ");c(d,S,E,"N","ℕ");c(T,S,E,"N","ℕ");c(d,S,E,"P","ℙ");c(T,S,E,"P","ℙ");c(d,S,E,"Q","ℚ");c(T,S,E,"Q","ℚ");c(d,S,E,"R","ℝ");c(T,S,E,"R","ℝ");c(d,S,E,"Z","ℤ");c(T,S,E,"Z","ℤ");c(d,f,Q,"h","ℎ");c(T,f,Q,"h","ℎ");var V;for(var ra=0;ra<T0.length;ra++){var Te=T0.charAt(ra);V=String.fromCharCode(55349,56320+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56372+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56424+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56580+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56684+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56736+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56788+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56840+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56944+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),ra<26&&(V=String.fromCharCode(55349,56632+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V),V=String.fromCharCode(55349,56476+ra),c(d,f,Q,Te,V),c(T,f,E,Te,V))}V="𝕜";c(d,f,Q,"k",V);c(T,f,E,"k",V);for(var qn=0;qn<10;qn++){var Vt=qn.toString();V=String.fromCharCode(55349,57294+qn),c(d,f,Q,Vt,V),c(T,f,E,Vt,V),V=String.fromCharCode(55349,57314+qn),c(d,f,Q,Vt,V),c(T,f,E,Vt,V),V=String.fromCharCode(55349,57324+qn),c(d,f,Q,Vt,V),c(T,f,E,Vt,V),V=String.fromCharCode(55349,57334+qn),c(d,f,Q,Vt,V),c(T,f,E,Vt,V)}var wc="ÐÞþ";for(var ro=0;ro<wc.length;ro++){var Tl=wc.charAt(ro);c(d,f,Q,Tl,Tl),c(T,f,E,Tl,Tl)}var Ec={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},n1={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},r1={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},sv={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},kn={mathClass:"",textClass:"",font:""},i1={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},l1={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},s1={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},jc={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},Ac={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},o1={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},Nc={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},c1=[Ec,Ec,n1,n1,r1,r1,sv,kn,kn,kn,i1,i1,l1,l1,s1,s1,jc,jc,Ac,Ac,o1,o1,kn,kn,Nc,Nc],ov=[Ec,kn,jc,Ac,Nc],cv=e=>{var a=e.charCodeAt(0),t=e.charCodeAt(1),n=(a-55296)*1024+(t-56320)+65536;if(119808<=n&&n<120484){var r=Math.floor((n-119808)/26);return c1[r]}else if(120782<=n&&n<=120831){var i=Math.floor((n-120782)/10);return ov[i]}else{if(n===120485||n===120486)return c1[0];if(120486<n&&n<120782)return kn;throw new k("Unsupported character: "+e)}},rs=function(a,t,n){if(Ae[n][a]){var r=Ae[n][a].replace;r&&(a=r)}return{value:a,metrics:Iu(a,t,n)}},la=function(a,t,n,r,i){var l=rs(a,t,n),s=l.metrics;a=l.value;var u;if(s){var m=s.italic;(n==="text"||r&&r.font==="mathit")&&(m=0),u=new $a(a,s.height,s.depth,m,s.skew,s.width,i)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+a+"' in style '"+t+"' and mode '"+n+"'")),u=new $a(a,0,0,0,0,0,i);if(r){u.maxFontSize=r.sizeMultiplier,r.style.isTight()&&u.classes.push("mtight");var p=r.getColor();p&&(u.style.color=p)}return u},Wu=function(a,t,n,r){return r===void 0&&(r=[]),n.font==="boldsymbol"&&rs(a,"Main-Bold",t).metrics?la(a,"Main-Bold",t,n,r.concat(["mathbf"])):a==="\\"||Ae[t][a].font==="main"?la(a,"Main-Regular",t,n,r):la(a,"AMS-Regular",t,n,r.concat(["amsrm"]))},uv=function(a,t,n){return n!=="textord"&&rs(a,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},is=function(a,t){var n=a.type==="mathord"?"mathord":"textord",r=a.mode,i=a.text,l=["mord"],{font:s,fontFamily:u,fontWeight:m,fontShape:p}=t,g=r==="math"||r==="text"&&!!s,v=g?s:u,b="",A="";if(i.charCodeAt(0)===55349){var N=cv(i);b=N.font,A=N[r+"Class"]}if(b)return la(i,b,r,t,l.concat(A));if(v){var M,x;if(v==="boldsymbol"){var y=uv(i,r,n);M=y.fontName,x=[y.fontClass]}else g?(M=qc[s].fontName,x=[s]):(M=Cl(u,m,p),x=[u,m,p]);if(rs(i,M,r).metrics)return la(i,M,r,t,l.concat(x));if(tp.hasOwnProperty(i)&&M.slice(0,10)==="Typewriter"){for(var w=[],j=0;j<i.length;j++)w.push(la(i[j],M,r,t,l.concat(x)));return Ht(w)}}if(n==="mathord")return la(i,"Math-Italic",r,t,l.concat(["mathnormal"]));if(n==="textord"){var $=Ae[r][i]&&Ae[r][i].font;if($==="ams"){var B=Cl("amsrm",m,p);return la(i,B,r,t,l.concat("amsrm",m,p))}else if($==="main"||!$){var C=Cl("textrm",m,p);return la(i,C,r,t,l.concat(m,p))}else{var U=Cl($,m,p);return la(i,U,r,t,l.concat(U,m,p))}}else throw new Error("unexpected type: "+n+" in makeOrd")},dv=(e,a)=>{if(yn(e.classes)!==yn(a.classes)||e.skew!==a.skew||e.maxFontSize!==a.maxFontSize||e.italic!==0&&e.hasClass("mathnormal"))return!1;if(e.classes.length===1){var t=e.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n of Object.keys(e.style))if(e.style[n]!==a.style[n])return!1;for(var r of Object.keys(a.style))if(e.style[r]!==a.style[r])return!1;return!0},np=e=>{for(var a=0;a<e.length-1;a++){var t=e[a],n=e[a+1];t instanceof $a&&n instanceof $a&&dv(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,e.splice(a+1,1),a--)}return e},ed=function(a){for(var t=0,n=0,r=0,i=0;i<a.children.length;i++){var l=a.children[i];l.height>t&&(t=l.height),l.depth>n&&(n=l.depth),l.maxFontSize>r&&(r=l.maxFontSize)}a.height=t,a.depth=n,a.maxFontSize=r},D=function(a,t,n,r){var i=new Fr(a,t,n,r);return ed(i),i},Sn=(e,a,t,n)=>new Fr(e,a,t,n),Br=function(a,t,n){var r=D([a],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=O(r.height),r.maxFontSize=1,r},mv=function(a,t,n,r){var i=new ns(a,t,n,r);return ed(i),i},Ht=function(a){var t=new Zr(a);return ed(t),t},Rr=function(a,t){return a instanceof Zr?D([],[a],t):a},fv=function(a){if(a.positionType==="individualShift"){for(var t=a.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,i=r,l=1;l<t.length;l++){var s=-t[l].shift-i-t[l].elem.depth,u=s-(t[l-1].elem.height+t[l-1].elem.depth);i=i+s,n.push({type:"kern",size:u}),n.push(t[l])}return{children:n,depth:r}}var m;if(a.positionType==="top"){for(var p=a.positionData,g=0;g<a.children.length;g++){var v=a.children[g];p-=v.type==="kern"?v.size:v.elem.height+v.elem.depth}m=p}else if(a.positionType==="bottom")m=-a.positionData;else{var b=a.children[0];if(b.type!=="elem")throw new Error('First child must have type "elem".');if(a.positionType==="shift")m=-b.elem.depth-a.positionData;else if(a.positionType==="firstBaseline")m=-b.elem.depth;else throw new Error("Invalid positionType "+a.positionType+".")}return{children:a.children,depth:m}},ie=function(a,t){for(var{children:n,depth:r}=fv(a),i=0,l=0;l<n.length;l++){var s=n[l];if(s.type==="elem"){var u=s.elem;i=Math.max(i,u.maxFontSize,u.height)}}i+=2;var m=D(["pstrut"],[]);m.style.height=O(i);for(var p=[],g=r,v=r,b=r,A=0;A<n.length;A++){var N=n[A];if(N.type==="kern")b+=N.size;else{var M=N.elem,x=N.wrapperClasses||[],y=N.wrapperStyle||{},w=D(x,[m,M],void 0,y);w.style.top=O(-i-b-M.depth),N.marginLeft&&(w.style.marginLeft=N.marginLeft),N.marginRight&&(w.style.marginRight=N.marginRight),p.push(w),b+=M.height+M.depth}g=Math.min(g,b),v=Math.max(v,b)}var j=D(["vlist"],p);j.style.height=O(v);var $;if(g<0){var B=D([],[]),C=D(["vlist"],[B]);C.style.height=O(-g);var U=D(["vlist-s"],[new $a("​")]);$=[D(["vlist-r"],[j,U]),D(["vlist-r"],[C])]}else $=[D(["vlist-r"],[j])];var L=D(["vlist-t"],$);return $.length===2&&L.classes.push("vlist-t2"),L.height=v,L.depth=-g,L},rp=(e,a)=>{var t=D(["mspace"],[],a),n=Me(e,a);return t.style.marginRight=O(n),t},Cl=(e,a,t)=>{var n,r;switch(e){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=e}return a==="textbf"&&t==="textit"?r="BoldItalic":a==="textbf"?r="Bold":t==="textit"?r="Italic":r="Regular",n+"-"+r},qc={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},ip={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},lp=function(a,t){var[n,r,i]=ip[a],l=new xn(n),s=new Bt([l],{width:O(r),height:O(i),style:"width:"+O(r),viewBox:"0 0 "+1e3*r+" "+1e3*i,preserveAspectRatio:"xMinYMin"}),u=Sn(["overlay"],[s],t);return u.height=i,u.style.height=O(i),u.style.width=O(r),u},qe={number:3,unit:"mu"},Mn={number:4,unit:"mu"},xt={number:5,unit:"mu"},pv={mord:{mop:qe,mbin:Mn,mrel:xt,minner:qe},mop:{mord:qe,mop:qe,mrel:xt,minner:qe},mbin:{mord:Mn,mop:Mn,mopen:Mn,minner:Mn},mrel:{mord:xt,mop:xt,mopen:xt,minner:xt},mopen:{},mclose:{mop:qe,mbin:Mn,mrel:xt,minner:qe},mpunct:{mord:qe,mop:qe,mrel:xt,mopen:qe,mclose:qe,mpunct:qe,minner:qe},minner:{mord:qe,mop:qe,mbin:Mn,mrel:xt,mopen:qe,mpunct:qe,minner:qe}},hv={mord:{mop:qe},mop:{mord:qe,mop:qe},mbin:{},mrel:{},mopen:{},mclose:{mop:qe},mpunct:{},minner:{mop:qe}},sp={},Hi={},Gi={};function H(e){for(var{type:a,names:t,htmlBuilder:n,mathmlBuilder:r}=e,i=0;i<t.length;++i)sp[t[i]]=e;a&&(n&&(Hi[a]=n),r&&(Gi[a]=r))}function Jn(e){var{type:a,htmlBuilder:t,mathmlBuilder:n}=e;t&&(Hi[a]=t),n&&(Gi[a]=n)}var C0=function(a){return a.type==="ordgroup"&&a.body.length===1?a.body[0]:a},Le=function(a){return a.type==="ordgroup"?a.body:[a]},vv=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),gv=new Set(["rightmost","mrel","mclose","mpunct"]),bv={display:F.DISPLAY,text:F.TEXT,script:F.SCRIPT,scriptscript:F.SCRIPTSCRIPT},yv={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Xe=function(a,t,n,r){r===void 0&&(r=[null,null]);for(var i=[],l=0;l<a.length;l++){var s=se(a[l],t);if(s instanceof Zr){var u=s.children;i.push(...u)}else i.push(s)}if(np(i),!n)return i;var m=t;if(a.length===1){var p=a[0];p.type==="sizing"?m=t.havingSize(p.size):p.type==="styling"&&(m=t.havingStyle(bv[p.style]))}var g=D([r[0]||"leftmost"],[],t),v=D([r[1]||"rightmost"],[],t),b=n==="root";return Mc(i,(A,N)=>{var M=N.classes[0],x=A.classes[0];M==="mbin"&&gv.has(x)?N.classes[0]="mord":x==="mbin"&&vv.has(M)&&(A.classes[0]="mord")},{node:g},v,b),Mc(i,(A,N)=>{var M,x,y=Cc(N),w=Cc(A),j=y&&w?A.hasClass("mtight")?(M=hv[y])==null?void 0:M[w]:(x=pv[y])==null?void 0:x[w]:null;if(j)return rp(j,m)},{node:g},v,b),i},Mc=function(a,t,n,r,i){r&&a.push(r);for(var l=0;l<a.length;l++){var s=a[l],u=op(s);if(u){Mc(u.children,t,n,null,i);continue}var m=!s.hasClass("mspace");if(m){var p=t(s,n.node);p&&(n.insertAfter?n.insertAfter(p):(a.unshift(p),l++))}m?n.node=s:i&&s.hasClass("newline")&&(n.node=D(["leftmost"])),n.insertAfter=(g=>v=>{a.splice(g+1,0,v),l++})(l)}r&&a.pop()},op=function(a){return a instanceof Zr||a instanceof ns||a instanceof Fr&&a.hasClass("enclosing")?a:null},Tc=function(a,t){var n=op(a);if(n){var r=n.children;if(r.length){if(t==="right")return Tc(r[r.length-1],"right");if(t==="left")return Tc(r[0],"left")}}return a},Cc=function(a,t){if(!a)return null;t&&(a=Tc(a,t));var n=a.classes[0];return yv[n]||null},Qi=function(a,t){var n=["nulldelimiter"].concat(a.baseSizingClasses());return D(t.concat(n))},se=function(a,t,n){if(!a)return D();if(Hi[a.type]){var r=Hi[a.type](a,t);if(n&&t.size!==n.size){r=D(t.sizingClasses(n),[r],t);var i=t.sizeMultiplier/n.sizeMultiplier;r.height*=i,r.depth*=i}return r}else throw new k("Got group of unknown type: '"+a.type+"'")};function Dl(e,a){var t=D(["base"],e,a),n=D(["strut"]);return n.style.height=O(t.height+t.depth),t.depth&&(n.style.verticalAlign=O(-t.depth)),t.children.unshift(n),t}function Dc(e,a){var t=null;e.length===1&&e[0].type==="tag"&&(t=e[0].tag,e=e[0].body);var n=Xe(e,a,"root"),r;n.length===2&&n[1].hasClass("tag")&&(r=n.pop());for(var i=[],l=[],s=0;s<n.length;s++)if(l.push(n[s]),n[s].hasClass("mbin")||n[s].hasClass("mrel")||n[s].hasClass("allowbreak")){for(var u=!1;s<n.length-1&&n[s+1].hasClass("mspace")&&!n[s+1].hasClass("newline");)s++,l.push(n[s]),n[s].hasClass("nobreak")&&(u=!0);u||(i.push(Dl(l,a)),l=[])}else n[s].hasClass("newline")&&(l.pop(),l.length>0&&(i.push(Dl(l,a)),l=[]),i.push(n[s]));l.length>0&&i.push(Dl(l,a));var m;t?(m=Dl(Xe(t,a,!0),a),m.classes=["tag"],i.push(m)):r&&i.push(r);var p=D(["katex-html"],i);if(p.setAttribute("aria-hidden","true"),m){var g=m.children[0];g.style.height=O(p.height+p.depth),p.depth&&(g.style.verticalAlign=O(-p.depth))}return p}function cp(e){return new Zr(e)}class _{constructor(a,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=a,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(a,t){this.attributes[a]=t}getAttribute(a){return this.attributes[a]}toNode(){var a=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&a.setAttribute(t,this.attributes[t]);this.classes.length>0&&(a.className=yn(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof He&&this.children[n+1]instanceof He){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof He;)r+=this.children[++n].toText();a.appendChild(new He(r).toNode())}else a.appendChild(this.children[n].toNode());return a}toMarkup(){var a="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(a+=" "+t+'="',a+=aa(this.attributes[t]),a+='"');this.classes.length>0&&(a+=' class ="'+aa(yn(this.classes))+'"'),a+=">";for(var n=0;n<this.children.length;n++)a+=this.children[n].toMarkup();return a+="</"+this.type+">",a}toText(){return this.children.map(a=>a.toText()).join("")}}class He{constructor(a){this.text=void 0,this.text=a}toNode(){return document.createTextNode(this.text)}toMarkup(){return aa(this.toText())}toText(){return this.text}}class up{constructor(a){this.width=void 0,this.character=void 0,this.width=a,a>=.05555&&a<=.05556?this.character=" ":a>=.1666&&a<=.1667?this.character=" ":a>=.2222&&a<=.2223?this.character=" ":a>=.2777&&a<=.2778?this.character="  ":a>=-.05556&&a<=-.05555?this.character=" ⁣":a>=-.1667&&a<=-.1666?this.character=" ⁣":a>=-.2223&&a<=-.2222?this.character=" ⁣":a>=-.2778&&a<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var a=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return a.setAttribute("width",O(this.width)),a}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+O(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var xv=new Set(["\\imath","\\jmath"]),Sv=new Set(["mrow","mtable"]),Ka=function(a,t,n){return Ae[t][a]&&Ae[t][a].replace&&a.charCodeAt(0)!==55349&&!(tp.hasOwnProperty(a)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(a=Ae[t][a].replace),new He(a)},ad=function(a){return a.length===1?a[0]:new _("mrow",a)},zv={mathit:"italic",boldsymbol:e=>e.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},td=(e,a)=>{if(e.mode==="text"){if(a.fontFamily==="texttt")return"monospace";if(a.fontFamily==="textsf")return a.fontShape==="textit"&&a.fontWeight==="textbf"?"sans-serif-bold-italic":a.fontShape==="textit"?"sans-serif-italic":a.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(a.fontShape==="textit"&&a.fontWeight==="textbf")return"bold-italic";if(a.fontShape==="textit")return"italic";if(a.fontWeight==="textbf")return"bold"}var t=a.font;if(!t||t==="mathnormal")return null;var n=e.mode,r=zv[t];if(r)return typeof r=="function"?r(e):r;var i=e.text;if(xv.has(i))return null;if(Ae[n][i]){var l=Ae[n][i].replace;l&&(i=l)}var s=qc[t].fontName;return Iu(i,s,n)?qc[t].variant:null};function io(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var a=e.children[0];return a instanceof He&&a.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var t=e.children[0];return t instanceof He&&t.text===","}else return!1}var _a=function(a,t,n){if(a.length===1){var r=ge(a[0],t);return n&&r instanceof _&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var i=[],l,s=0;s<a.length;s++){var u=ge(a[s],t);if(u instanceof _&&l instanceof _){if(u.type==="mtext"&&l.type==="mtext"&&u.getAttribute("mathvariant")===l.getAttribute("mathvariant")){l.children.push(...u.children);continue}else if(u.type==="mn"&&l.type==="mn"){l.children.push(...u.children);continue}else if(io(u)&&l.type==="mn"){l.children.push(...u.children);continue}else if(u.type==="mn"&&io(l))u.children=[...l.children,...u.children],i.pop();else if((u.type==="msup"||u.type==="msub")&&u.children.length>=1&&(l.type==="mn"||io(l))){var m=u.children[0];m instanceof _&&m.type==="mn"&&(m.children=[...l.children,...m.children],i.pop())}else if(l.type==="mi"&&l.children.length===1){var p=l.children[0];if(p instanceof He&&p.text==="̸"&&(u.type==="mo"||u.type==="mi"||u.type==="mn")){var g=u.children[0];g instanceof He&&g.text.length>0&&(g.text=g.text.slice(0,1)+"̸"+g.text.slice(1),i.pop())}}}i.push(u),l=u}return i},zn=function(a,t,n){return ad(_a(a,t,n))},ge=function(a,t){if(!a)return new _("mrow");if(Gi[a.type])return Gi[a.type](a,t);throw new k("Got group of unknown type: '"+a.type+"'")};function u1(e,a,t,n,r){var i=_a(e,t),l;i.length===1&&i[0]instanceof _&&Sv.has(i[0].type)?l=i[0]:l=new _("mrow",i);var s=new _("annotation",[new He(a)]);s.setAttribute("encoding","application/x-tex");var u=new _("semantics",[l,s]),m=new _("math",[u]);m.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&m.setAttribute("display","block");var p=r?"katex":"katex-mathml";return D([p],[m])}var wv=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],d1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],m1=function(a,t){return t.size<2?a:wv[a-1][t.size-1]};class wt{constructor(a){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=a.style,this.color=a.color,this.size=a.size||wt.BASESIZE,this.textSize=a.textSize||this.size,this.phantom=!!a.phantom,this.font=a.font||"",this.fontFamily=a.fontFamily||"",this.fontWeight=a.fontWeight||"",this.fontShape=a.fontShape||"",this.sizeMultiplier=d1[this.size-1],this.maxSize=a.maxSize,this.minRuleThickness=a.minRuleThickness,this._fontMetrics=void 0}extend(a){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(t,a),new wt(t)}havingStyle(a){return this.style===a?this:this.extend({style:a,size:m1(this.textSize,a)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(a){return this.size===a&&this.textSize===a?this:this.extend({style:this.style.text(),size:a,textSize:a,sizeMultiplier:d1[a-1]})}havingBaseStyle(a){a=a||this.style.text();var t=m1(wt.BASESIZE,a);return this.size===t&&this.textSize===wt.BASESIZE&&this.style===a?this:this.extend({style:a,size:t})}havingBaseSizing(){var a;switch(this.style.id){case 4:case 5:a=3;break;case 6:case 7:a=1;break;default:a=6}return this.extend({style:this.style.text(),size:a})}withColor(a){return this.extend({color:a})}withPhantom(){return this.extend({phantom:!0})}withFont(a){return this.extend({font:a})}withTextFontFamily(a){return this.extend({fontFamily:a,font:""})}withTextFontWeight(a){return this.extend({fontWeight:a,font:""})}withTextFontShape(a){return this.extend({fontShape:a,font:""})}sizingClasses(a){return a.size!==this.size?["sizing","reset-size"+a.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==wt.BASESIZE?["sizing","reset-size"+this.size,"size"+wt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=lv(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}wt.BASESIZE=6;var dp=function(a){return new wt({style:a.displayMode?F.DISPLAY:F.TEXT,maxSize:a.maxSize,minRuleThickness:a.minRuleThickness})},mp=function(a,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),a=D(n,[a])}return a},Ev=function(a,t,n){var r=dp(n),i;if(n.output==="mathml")return u1(a,t,r,n.displayMode,!0);if(n.output==="html"){var l=Dc(a,r);i=D(["katex"],[l])}else{var s=u1(a,t,r,n.displayMode,!1),u=Dc(a,r);i=D(["katex"],[s,u])}return mp(i,n)},jv=function(a,t,n){var r=dp(n),i=Dc(a,r),l=D(["katex"],[i]);return mp(l,n)},Av={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},ls=function(a){var t=new _("mo",[new He(Av[a.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},Nv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},qv=new Set(["widehat","widecheck","widetilde","utilde"]),ss=function(a,t){function n(){var s=4e5,u=a.label.slice(1);if(qv.has(u)&&"base"in a){var m=a.base.type==="ordgroup"?a.base.body.length:1,p,g,v;if(m>5)u==="widehat"||u==="widecheck"?(p=420,s=2364,v=.42,g=u+"4"):(p=312,s=2340,v=.34,g="tilde4");else{var b=[1,1,2,2,3,3][m];u==="widehat"||u==="widecheck"?(s=[0,1062,2364,2364,2364][b],p=[0,239,300,360,420][b],v=[0,.24,.3,.3,.36,.42][b],g=u+b):(s=[0,600,1033,2339,2340][b],p=[0,260,286,306,312][b],v=[0,.26,.286,.3,.306,.34][b],g="tilde"+b)}var A=new xn(g),N=new Bt([A],{width:"100%",height:O(v),viewBox:"0 0 "+s+" "+p,preserveAspectRatio:"none"});return{span:Sn([],[N],t),minWidth:0,height:v}}else{var M=[],x=Nv[u];if(!x)throw new Error('No SVG data for "'+u+'".');var[y,w,j]=x,$=j/1e3,B=y.length,C,U;if(B===1){if(x.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+u+'".');C=["hide-tail"],U=[x[3]]}else if(B===2)C=["halfarrow-left","halfarrow-right"],U=["xMinYMin","xMaxYMin"];else if(B===3)C=["brace-left","brace-center","brace-right"],U=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+B+" children.");for(var L=0;L<B;L++){var Y=new xn(y[L]),be=new Bt([Y],{width:"400em",height:O($),viewBox:"0 0 "+s+" "+j,preserveAspectRatio:U[L]+" slice"}),oe=Sn([C[L]],[be],t);if(B===1)return{span:oe,minWidth:w,height:$};oe.style.height=O($),M.push(oe)}return{span:D(["stretchy"],M,t),minWidth:w,height:$}}}var{span:r,minWidth:i,height:l}=n();return r.height=l,r.style.height=O(l),i>0&&(r.style.minWidth=O(i)),r},Mv=function(a,t,n,r,i){var l,s=a.height+a.depth+n+r;if(/fbox|color|angl/.test(t)){if(l=D(["stretchy",t],[],i),t==="fbox"){var u=i.color&&i.getColor();u&&(l.style.borderColor=u)}}else{var m=[];/^[bx]cancel$/.test(t)&&m.push(new zc({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&m.push(new zc({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var p=new Bt(m,{width:"100%",height:O(s)});l=Sn([],[p],i)}return l.height=s,l.style.height=O(s),l},Tv={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Cv={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function Dv(e){return e in Tv}function I(e,a){if(!e||e.type!==a)throw new Error("Expected node of type "+a+", but got "+(e?"node of type "+e.type:String(e)));return e}function os(e){var a=cs(e);if(!a)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return a}function cs(e){return e&&(e.type==="atom"||Cv.hasOwnProperty(e.type))?e:null}var fp=e=>{if(e instanceof $a)return e;if(rv(e)&&e.children.length===1)return fp(e.children[0])},pp=(e,a)=>{var t,n,r;e&&e.type==="supsub"?(n=I(e.base,"accent"),t=n.base,e.base=t,r=nv(se(e,a)),e.base=n):(n=I(e,"accent"),t=n.base);var i=se(t,a.havingCrampedStyle()),l=n.isShifty&&Ut(t),s=0;if(l){var u,m;s=(u=(m=fp(i))==null?void 0:m.skew)!=null?u:0}var p=n.label==="\\c",g=p?i.height+i.depth:Math.min(i.height,a.fontMetrics().xHeight),v;if(n.isStretchy)v=ss(n,a),v=ie({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"elem",elem:v,wrapperClasses:["svg-align"],wrapperStyle:s>0?{width:"calc(100% - "+O(2*s)+")",marginLeft:O(2*s)}:void 0}]});else{var b,A;n.label==="\\vec"?(b=lp("vec",a),A=ip.vec[1]):(b=is({type:"textord",mode:n.mode,text:n.label},a),b=tv(b),b.italic=0,A=b.width,p&&(g+=b.depth)),v=D(["accent-body"],[b]);var N=n.label==="\\textcircled";N&&(v.classes.push("accent-full"),g=i.height);var M=s;N||(M-=A/2),v.style.left=O(M),n.label==="\\textcircled"&&(v.style.top=".2em"),v=ie({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:-g},{type:"elem",elem:v}]})}var x=D(["mord","accent"],[v],a);return r?(r.children[0]=x,r.height=Math.max(x.height,r.height),r.classes[0]="mord",r):x},$v=(e,a)=>{var t=e.isStretchy?ls(e.label):new _("mo",[Ka(e.label,e.mode)]),n=new _("mover",[ge(e.base,a),t]);return n.setAttribute("accent","true"),n},kv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));H({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],numArgs:1,handler:(e,a)=>{var t=C0(a[0]),n=!kv.test(e.funcName),r=!n||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:n,isShifty:r,base:t}},htmlBuilder:pp,mathmlBuilder:$v});H({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"],handler:(e,a)=>{var t=a[0],n=e.parser.mode;return n==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:e.funcName,isStretchy:!1,isShifty:!0,base:t}}});H({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],numArgs:1,handler:(e,a)=>{var{parser:t,funcName:n}=e,r=a[0];return{type:"accentUnder",mode:t.mode,label:n,base:r}},htmlBuilder:(e,a)=>{var t=se(e.base,a),n=ss(e,a),r=e.label==="\\utilde"?.12:0,i=ie({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]});return D(["mord","accentunder"],[i],a)},mathmlBuilder:(e,a)=>{var t=ls(e.label),n=new _("munder",[ge(e.base,a),t]);return n.setAttribute("accentunder","true"),n}});var $l=e=>{var a=new _("mpadded",e?[e]:[]);return a.setAttribute("width","+0.6em"),a.setAttribute("lspace","0.3em"),a};H({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],numArgs:1,numOptionalArgs:1,handler(e,a,t){var{parser:n,funcName:r}=e;return{type:"xArrow",mode:n.mode,label:r,body:a[0],below:t[0]}},htmlBuilder(e,a){var t=a.style,n=a.havingStyle(t.sup()),r=Rr(se(e.body,n,a),a),i=e.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(i+"-arrow-pad");var l;e.below&&(n=a.havingStyle(t.sub()),l=Rr(se(e.below,n,a),a),l.classes.push(i+"-arrow-pad"));var s=ss(e,a),u=-a.fontMetrics().axisHeight+.5*s.height,m=-a.fontMetrics().axisHeight-.5*s.height-.111;(r.depth>.25||e.label==="\\xleftequilibrium")&&(m-=r.depth);var p;if(l){var g=-a.fontMetrics().axisHeight+l.height+.5*s.height+.111;p=ie({positionType:"individualShift",children:[{type:"elem",elem:r,shift:m},{type:"elem",elem:s,shift:u,wrapperClasses:["svg-align"]},{type:"elem",elem:l,shift:g}]})}else p=ie({positionType:"individualShift",children:[{type:"elem",elem:r,shift:m},{type:"elem",elem:s,shift:u,wrapperClasses:["svg-align"]}]});return D(["mrel","x-arrow"],[p],a)},mathmlBuilder(e,a){var t=ls(e.label);t.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(e.body){var r=$l(ge(e.body,a));if(e.below){var i=$l(ge(e.below,a));n=new _("munderover",[t,i,r])}else n=new _("mover",[t,r])}else if(e.below){var l=$l(ge(e.below,a));n=new _("munder",[t,l])}else n=$l(),n=new _("mover",[t,n]);return n}});function _v(e,a){var t=Xe(e.body,a,!0);return D([e.mclass],t,a)}function Ov(e,a){var t,n=_a(e.body,a);return e.mclass==="minner"?t=new _("mpadded",n):e.mclass==="mord"?e.isCharacterBox?(t=n[0],t.type="mi"):t=new _("mi",n):(e.isCharacterBox?(t=n[0],t.type="mo"):t=new _("mo",n),e.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):e.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):(e.mclass==="mopen"||e.mclass==="mclose")&&(t.attributes.lspace="0em",t.attributes.rspace="0em")),t}H({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],numArgs:1,primitive:!0,handler(e,a){var{parser:t,funcName:n}=e,r=a[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:Le(r),isCharacterBox:Ut(r)}},htmlBuilder:_v,mathmlBuilder:Ov});var us=e=>{var a=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return a.type==="atom"&&(a.family==="bin"||a.family==="rel")?"m"+a.family:"mord"};H({type:"mclass",names:["\\@binrel"],numArgs:2,handler(e,a){var{parser:t}=e;return{type:"mclass",mode:t.mode,mclass:us(a[0]),body:Le(a[1]),isCharacterBox:Ut(a[1])}}});H({type:"mclass",names:["\\stackrel","\\overset","\\underset"],numArgs:2,handler(e,a){var{parser:t,funcName:n}=e,r=a[1],i=a[0],l;n!=="\\stackrel"?l=us(r):l="mrel";var s={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Le(r)},u=n==="\\underset"?{type:"supsub",mode:i.mode,base:s,sub:i}:{type:"supsub",mode:i.mode,base:s,sup:i};return{type:"mclass",mode:t.mode,mclass:l,body:[u],isCharacterBox:Ut(u)}}});H({type:"pmb",names:["\\pmb"],numArgs:1,allowedInText:!0,handler(e,a){var{parser:t}=e;return{type:"pmb",mode:t.mode,mclass:us(a[0]),body:Le(a[0])}},htmlBuilder(e,a){var t=Xe(e.body,a,!0),n=D([e.mclass],t,a);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(e,a){var t=_a(e.body,a),n=new _("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var Bv={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},f1=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),p1=e=>e.type==="textord"&&e.text==="@",Rv=(e,a)=>(e.type==="mathord"||e.type==="atom")&&e.text===a;function Uv(e,a,t){var n=Bv[e];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[a[0]],[a[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[a[0]],[]),i={type:"atom",text:n,mode:"math",family:"rel"},l=t.callFunction("\\Big",[i],[]),s=t.callFunction("\\\\cdright",[a[1]],[]),u={type:"ordgroup",mode:"math",body:[r,l,s]};return t.callFunction("\\\\cdparent",[u],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var m={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[m],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Lv(e){var a=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){a.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var t=e.fetch().text;if(t==="&"||t==="\\\\")e.consume();else if(t==="\\end"){a[a.length-1].length===0&&a.pop();break}else throw new k("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var n=[],r=[n],i=0;i<a.length;i++){for(var l=a[i],s=f1(),u=0;u<l.length;u++)if(!p1(l[u]))s.body.push(l[u]);else{n.push(s),u+=1;var m=os(l[u]).text,p=new Array(2);if(p[0]={type:"ordgroup",mode:"math",body:[]},p[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(m))if("<>AV".includes(m))for(var g=0;g<2;g++){for(var v=!0,b=u+1;b<l.length;b++){if(Rv(l[b],m)){v=!1,u=b;break}if(p1(l[b]))throw new k("Missing a "+m+" character to complete a CD arrow.",l[b]);p[g].body.push(l[b])}if(v)throw new k("Missing a "+m+" character to complete a CD arrow.",l[u])}else throw new k('Expected one of "<>AV=|." after @',l[u]);var A=Uv(m,p,e),N={type:"styling",body:[A],mode:"math",style:"display",resetFont:!0};n.push(N),s=f1()}i%2===0?n.push(s):n.shift(),n=[],r.push(n)}e.gullet.endGroup(),e.gullet.endGroup();var M=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:M,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}H({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],numArgs:1,handler(e,a){var{parser:t,funcName:n}=e;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:a[0]}},htmlBuilder(e,a){var t=a.havingStyle(a.style.sup()),n=Rr(se(e.label,t,a),a);return n.classes.push("cd-label-"+e.side),n.style.bottom=O(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(e,a){var t=new _("mrow",[ge(e.label,a)]);return t=new _("mpadded",[t]),t.setAttribute("width","0"),e.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new _("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});H({type:"cdlabelparent",names:["\\\\cdparent"],numArgs:1,handler(e,a){var{parser:t}=e;return{type:"cdlabelparent",mode:t.mode,fragment:a[0]}},htmlBuilder(e,a){var t=Rr(se(e.fragment,a),a);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(e,a){return new _("mrow",[ge(e.fragment,a)])}});H({type:"textord",names:["\\@char"],numArgs:1,allowedInText:!0,handler(e,a){for(var{parser:t}=e,n=I(a[0],"ordgroup"),r=n.body,i="",l=0;l<r.length;l++){var s=I(r[l],"textord");i+=s.text}var u=parseInt(i),m;if(isNaN(u))throw new k("\\@char has non-numeric argument "+i);if(u<0||u>=1114111)throw new k("\\@char with invalid code point "+i);return u<=65535?m=String.fromCharCode(u):(u-=65536,m=String.fromCharCode((u>>10)+55296,(u&1023)+56320)),{type:"textord",mode:t.mode,text:m}}});var Hv=(e,a)=>{var t=Xe(e.body,a.withColor(e.color),!1);return Ht(t)},Gv=(e,a)=>{var t=_a(e.body,a.withColor(e.color)),n=new _("mstyle",t);return n.setAttribute("mathcolor",e.color),n};H({type:"color",names:["\\textcolor"],numArgs:2,allowedInText:!0,argTypes:["color","original"],handler(e,a){var{parser:t}=e,n=I(a[0],"color-token").color,r=a[1];return{type:"color",mode:t.mode,color:n,body:Le(r)}},htmlBuilder:Hv,mathmlBuilder:Gv});H({type:"color",names:["\\color"],numArgs:1,allowedInText:!0,argTypes:["color"],handler(e,a){var{parser:t,breakOnTokenText:n}=e,r=I(a[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var i=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:r,body:i}}});H({type:"cr",names:["\\\\"],numArgs:0,numOptionalArgs:0,allowedInText:!0,handler(e,a,t){var{parser:n}=e,r=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,i=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:i,size:r&&I(r,"size").value}},htmlBuilder(e,a){var t=D(["mspace"],[],a);return e.newLine&&(t.classes.push("newline"),e.size&&(t.style.marginTop=O(Me(e.size,a)))),t},mathmlBuilder(e,a){var t=new _("mspace");return e.newLine&&(t.setAttribute("linebreak","newline"),e.size&&t.setAttribute("height",O(Me(e.size,a)))),t}});var $c={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},hp=e=>{var a=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new k("Expected a control sequence",e);return a},Qv=e=>{var a=e.gullet.popToken();return a.text==="="&&(a=e.gullet.popToken(),a.text===" "&&(a=e.gullet.popToken())),a},vp=(e,a,t,n)=>{var r=e.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!e.gullet.isExpandable(t.text)}),e.gullet.macros.set(a,r,n)};H({type:"internal",names:["\\global","\\long","\\\\globallong"],numArgs:0,allowedInText:!0,handler(e){var{parser:a,funcName:t}=e;a.consumeSpaces();var n=a.fetch();if($c[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=$c[n.text]),I(a.parseFunction(),"internal");throw new k("Invalid token after macro prefix",n)}});H({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var{parser:a,funcName:t}=e,n=a.gullet.popToken(),r=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new k("Expected a control sequence",n);for(var i=0,l,s=[[]];a.gullet.future().text!=="{";)if(n=a.gullet.popToken(),n.text==="#"){if(a.gullet.future().text==="{"){l=a.gullet.future(),s[i].push("{");break}if(n=a.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new k('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==i+1)throw new k('Argument number "'+n.text+'" out of order');i++,s.push([])}else{if(n.text==="EOF")throw new k("Expected a macro definition");s[i].push(n.text)}var{tokens:u}=a.gullet.consumeArg();return l&&u.unshift(l),(t==="\\edef"||t==="\\xdef")&&(u=a.gullet.expandTokens(u),u.reverse()),a.gullet.macros.set(r,{tokens:u,numArgs:i,delimiters:s},t===$c[t]),{type:"internal",mode:a.mode}}});H({type:"internal",names:["\\let","\\\\globallet"],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var{parser:a,funcName:t}=e,n=hp(a.gullet.popToken());a.gullet.consumeSpaces();var r=Qv(a);return vp(a,n,r,t==="\\\\globallet"),{type:"internal",mode:a.mode}}});H({type:"internal",names:["\\futurelet","\\\\globalfuture"],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var{parser:a,funcName:t}=e,n=hp(a.gullet.popToken()),r=a.gullet.popToken(),i=a.gullet.popToken();return vp(a,n,i,t==="\\\\globalfuture"),a.gullet.pushToken(i),a.gullet.pushToken(r),{type:"internal",mode:a.mode}}});var ui=function(a,t,n){var r=Ae.math[a]&&Ae.math[a].replace,i=Iu(r||a,t,n);if(!i)throw new Error("Unsupported symbol "+a+" and font size "+t+".");return i},nd=function(a,t,n,r){var i=n.havingBaseStyle(t),l=D(r.concat(i.sizingClasses(n)),[a],n),s=i.sizeMultiplier/n.sizeMultiplier;return l.height*=s,l.depth*=s,l.maxFontSize=i.sizeMultiplier,l},gp=function(a,t,n){var r=t.havingBaseStyle(n),i=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;a.classes.push("delimcenter"),a.style.top=O(i),a.height-=i,a.depth+=i},Yv=function(a,t,n,r,i,l){var s=la(a,"Main-Regular",i,r),u=nd(s,t,r,l);return gp(u,r,t),u},Vv=function(a,t,n,r){return la(a,"Size"+t+"-Regular",n,r)},bp=function(a,t,n,r,i,l){var s=Vv(a,t,i,r),u=nd(D(["delimsizing","size"+t],[s],r),F.TEXT,r,l);return n&&gp(u,r,F.TEXT),u},lo=function(a,t,n){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var i=D(["delimsizinginner",r],[D([],[la(a,t,n)])]);return{type:"elem",elem:i}},so=function(a,t,n){var r=st["Size4-Regular"][a.charCodeAt(0)]?st["Size4-Regular"][a.charCodeAt(0)][4]:st["Size1-Regular"][a.charCodeAt(0)][4],i=new xn("inner",K7(a,Math.round(1e3*t))),l=new Bt([i],{width:O(r),height:O(t),style:"width:"+O(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),s=Sn([],[l],n);return s.height=t,s.style.height=O(t),s.style.width=O(r),{type:"elem",elem:s}},kc=.008,kl={type:"kern",size:-1*kc},Xv=new Set(["|","\\lvert","\\rvert","\\vert"]),Zv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),yp=function(a,t,n,r,i,l){var s,u,m,p,g="",v=0;s=m=p=a,u=null;var b="Size1-Regular";a==="\\uparrow"?m=p="⏐":a==="\\Uparrow"?m=p="‖":a==="\\downarrow"?s=m="⏐":a==="\\Downarrow"?s=m="‖":a==="\\updownarrow"?(s="\\uparrow",m="⏐",p="\\downarrow"):a==="\\Updownarrow"?(s="\\Uparrow",m="‖",p="\\Downarrow"):Xv.has(a)?(m="∣",g="vert",v=333):Zv.has(a)?(m="∥",g="doublevert",v=556):a==="["||a==="\\lbrack"?(s="⎡",m="⎢",p="⎣",b="Size4-Regular",g="lbrack",v=667):a==="]"||a==="\\rbrack"?(s="⎤",m="⎥",p="⎦",b="Size4-Regular",g="rbrack",v=667):a==="\\lfloor"||a==="⌊"?(m=s="⎢",p="⎣",b="Size4-Regular",g="lfloor",v=667):a==="\\lceil"||a==="⌈"?(s="⎡",m=p="⎢",b="Size4-Regular",g="lceil",v=667):a==="\\rfloor"||a==="⌋"?(m=s="⎥",p="⎦",b="Size4-Regular",g="rfloor",v=667):a==="\\rceil"||a==="⌉"?(s="⎤",m=p="⎥",b="Size4-Regular",g="rceil",v=667):a==="("||a==="\\lparen"?(s="⎛",m="⎜",p="⎝",b="Size4-Regular",g="lparen",v=875):a===")"||a==="\\rparen"?(s="⎞",m="⎟",p="⎠",b="Size4-Regular",g="rparen",v=875):a==="\\{"||a==="\\lbrace"?(s="⎧",u="⎨",p="⎩",m="⎪",b="Size4-Regular"):a==="\\}"||a==="\\rbrace"?(s="⎫",u="⎬",p="⎭",m="⎪",b="Size4-Regular"):a==="\\lgroup"||a==="⟮"?(s="⎧",p="⎩",m="⎪",b="Size4-Regular"):a==="\\rgroup"||a==="⟯"?(s="⎫",p="⎭",m="⎪",b="Size4-Regular"):a==="\\lmoustache"||a==="⎰"?(s="⎧",p="⎭",m="⎪",b="Size4-Regular"):(a==="\\rmoustache"||a==="⎱")&&(s="⎫",p="⎩",m="⎪",b="Size4-Regular");var A=ui(s,b,i),N=A.height+A.depth,M=ui(m,b,i),x=M.height+M.depth,y=ui(p,b,i),w=y.height+y.depth,j=0,$=1;if(u!==null){var B=ui(u,b,i);j=B.height+B.depth,$=2}var C=N+w+j,U=Math.max(0,Math.ceil((t-C)/($*x))),L=C+U*$*x,Y=r.fontMetrics().axisHeight;n&&(Y*=r.sizeMultiplier);var be=L/2-Y,oe=[];if(g.length>0){var Gt=L-N-w,Oa=Math.round(L*1e3),ta=J7(g,Math.round(Gt*1e3)),R=new xn(g,ta),K=O(v/1e3),Z=O(Oa/1e3),xe=new Bt([R],{width:K,height:Z,viewBox:"0 0 "+v+" "+Oa}),pe=Sn([],[xe],r);pe.height=Oa/1e3,pe.style.width=K,pe.style.height=Z,oe.push({type:"elem",elem:pe})}else{if(oe.push(lo(p,b,i)),oe.push(kl),u===null){var xa=L-N-w+2*kc;oe.push(so(m,xa,r))}else{var tt=(L-N-w-j)/2+2*kc;oe.push(so(m,tt,r)),oe.push(kl),oe.push(lo(u,b,i)),oe.push(kl),oe.push(so(m,tt,r))}oe.push(kl),oe.push(lo(s,b,i))}var na=r.havingBaseStyle(F.TEXT),Ba=ie({positionType:"bottom",positionData:be,children:oe});return nd(D(["delimsizing","mult"],[Ba],na),F.TEXT,r,l)},oo=80,co=.08,uo=function(a,t,n,r,i){var l=F7(a,r,n),s=new xn(a,l),u=new Bt([s],{width:"400em",height:O(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return Sn(["hide-tail"],[u],i)},Fv=function(a,t){var n=t.havingBaseSizing(),r=Ep("\\surd",a*n.sizeMultiplier,wp,n),i=n.sizeMultiplier,l=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),s,u,m,p,g;return r.type==="small"?(p=1e3+1e3*l+oo,a<1?i=1:a<1.4&&(i=.7),u=(1+l+co)/i,m=(1+l)/i,s=uo("sqrtMain",u,p,l,t),s.style.minWidth="0.853em",g=.833/i):r.type==="large"?(p=(1e3+oo)*ji[r.size],m=(ji[r.size]+l)/i,u=(ji[r.size]+l+co)/i,s=uo("sqrtSize"+r.size,u,p,l,t),s.style.minWidth="1.02em",g=1/i):(u=a+l+co,m=a+l,p=Math.floor(1e3*a+l)+oo,s=uo("sqrtTall",u,p,l,t),s.style.minWidth="0.742em",g=1.056),s.height=m,s.style.height=O(u),{span:s,advanceWidth:g,ruleWidth:(t.fontMetrics().sqrtRuleThickness+l)*i}},xp=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),Kv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Sp=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),ji=[0,1.2,1.8,2.4,3],zp=function(a,t,n,r,i){if(a==="<"||a==="\\lt"||a==="⟨"?a="\\langle":(a===">"||a==="\\gt"||a==="⟩")&&(a="\\rangle"),xp.has(a)||Sp.has(a))return bp(a,t,!1,n,r,i);if(Kv.has(a))return yp(a,ji[t],!1,n,r,i);throw new k("Illegal delimiter: '"+a+"'")},Jv=[{type:"small",style:F.SCRIPTSCRIPT},{type:"small",style:F.SCRIPT},{type:"small",style:F.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Pv=[{type:"small",style:F.SCRIPTSCRIPT},{type:"small",style:F.SCRIPT},{type:"small",style:F.TEXT},{type:"stack"}],wp=[{type:"small",style:F.SCRIPTSCRIPT},{type:"small",style:F.SCRIPT},{type:"small",style:F.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Iv=function(a){if(a.type==="small")return"Main-Regular";if(a.type==="large")return"Size"+a.size+"-Regular";if(a.type==="stack")return"Size4-Regular";var t=a.type;throw new Error("Add support for delim type '"+t+"' here.")},Ep=function(a,t,n,r){for(var i=Math.min(2,3-r.style.size),l=i;l<n.length;l++){var s=n[l];if(s.type==="stack")break;var u=ui(a,Iv(s),"math"),m=u.height+u.depth;if(s.type==="small"){var p=r.havingBaseStyle(s.style);m*=p.sizeMultiplier}if(m>t)return s}return n[n.length-1]},_c=function(a,t,n,r,i,l){a==="<"||a==="\\lt"||a==="⟨"?a="\\langle":(a===">"||a==="\\gt"||a==="⟩")&&(a="\\rangle");var s;Sp.has(a)?s=Jv:xp.has(a)?s=wp:s=Pv;var u=Ep(a,t,s,r);return u.type==="small"?Yv(a,u.style,n,r,i,l):u.type==="large"?bp(a,u.size,n,r,i,l):yp(a,t,n,r,i,l)},mo=function(a,t,n,r,i,l){var s=r.fontMetrics().axisHeight*r.sizeMultiplier,u=901,m=5/r.fontMetrics().ptPerEm,p=Math.max(t-s,n+s),g=Math.max(p/500*u,2*p-m);return _c(a,g,!0,r,i,l)},h1={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},Wv=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function v1(e){return"isMiddle"in e}function ds(e,a){var t=cs(e);if(t&&Wv.has(t.text))return t;throw t?new k("Invalid delimiter '"+t.text+"' after '"+a.funcName+"'",e):new k("Invalid delimiter type '"+e.type+"'",e)}H({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],numArgs:1,argTypes:["primitive"],handler:(e,a)=>{var t=ds(a[0],e);return{type:"delimsizing",mode:e.parser.mode,size:h1[e.funcName].size,mclass:h1[e.funcName].mclass,delim:t.text}},htmlBuilder:(e,a)=>e.delim==="."?D([e.mclass]):zp(e.delim,e.size,a,e.mode,[e.mclass]),mathmlBuilder:e=>{var a=[];e.delim!=="."&&a.push(Ka(e.delim,e.mode));var t=new _("mo",a);e.mclass==="mopen"||e.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=O(ji[e.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function g1(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}H({type:"leftright-right",names:["\\right"],numArgs:1,primitive:!0,handler:(e,a)=>{var t=e.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new k("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:ds(a[0],e).text,color:t}}});H({type:"leftright",names:["\\left"],numArgs:1,primitive:!0,handler:(e,a)=>{var t=ds(a[0],e),n=e.parser;++n.leftrightDepth;var r=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var i=I(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:r,left:t.text,right:i.delim,rightColor:i.color}},htmlBuilder:(e,a)=>{g1(e);for(var t=Xe(e.body,a,!0,["mopen","mclose"]),n=0,r=0,i=!1,l=0;l<t.length;l++){var s=t[l];v1(s)?i=!0:(n=Math.max(t[l].height,n),r=Math.max(t[l].depth,r))}n*=a.sizeMultiplier,r*=a.sizeMultiplier;var u;if(e.left==="."?u=Qi(a,["mopen"]):u=mo(e.left,n,r,a,e.mode,["mopen"]),t.unshift(u),i)for(var m=1;m<t.length;m++){var p=t[m];if(v1(p)){var g=p.isMiddle;t[m]=mo(g.delim,n,r,g.options,e.mode,[])}}var v;if(e.right===".")v=Qi(a,["mclose"]);else{var b=e.rightColor?a.withColor(e.rightColor):a;v=mo(e.right,n,r,b,e.mode,["mclose"])}return t.push(v),D(["minner"],t,a)},mathmlBuilder:(e,a)=>{g1(e);var t=_a(e.body,a);if(e.left!=="."){var n=new _("mo",[Ka(e.left,e.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(e.right!=="."){var r=new _("mo",[Ka(e.right,e.mode)]);r.setAttribute("fence","true"),e.rightColor&&r.setAttribute("mathcolor",e.rightColor),t.push(r)}return ad(t)}});H({type:"middle",names:["\\middle"],numArgs:1,primitive:!0,handler:(e,a)=>{var t=ds(a[0],e);if(!e.parser.leftrightDepth)throw new k("\\middle without preceding \\left",t);return{type:"middle",mode:e.parser.mode,delim:t.text}},htmlBuilder:(e,a)=>{var t;return e.delim==="."?t=Qi(a,[]):(t=zp(e.delim,1,a,e.mode,[]),t.isMiddle={delim:e.delim,options:a}),t},mathmlBuilder:(e,a)=>{var t=e.delim==="\\vert"||e.delim==="|"?Ka("|","text"):Ka(e.delim,e.mode),n=new _("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var e8=(e,a)=>{var t=Rr(se(e.body,a),a),n=e.label.slice(1),r=a.sizeMultiplier,i,l,s=Ut(e.body);if(n==="sout")i=D(["stretchy","sout"]),i.height=a.fontMetrics().defaultRuleThickness/r,l=-.5*a.fontMetrics().xHeight;else if(n==="phase"){var u=Me({number:.6,unit:"pt"},a),m=Me({number:.35,unit:"ex"},a),p=a.havingBaseSizing();r=r/p.sizeMultiplier;var g=t.height+t.depth+u+m;t.style.paddingLeft=O(g/2+u);var v=Math.floor(1e3*g*r),b=X7(v),A=new Bt([new xn("phase",b)],{width:"400em",height:O(v/1e3),viewBox:"0 0 400000 "+v,preserveAspectRatio:"xMinYMin slice"});i=Sn(["hide-tail"],[A],a),i.style.height=O(g),l=t.depth+u+m}else{/cancel/.test(n)?s||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var N,M,x=0;/box/.test(n)?(x=Math.max(a.fontMetrics().fboxrule,a.minRuleThickness),N=a.fontMetrics().fboxsep+(n==="colorbox"?0:x),M=N):n==="angl"?(x=Math.max(a.fontMetrics().defaultRuleThickness,a.minRuleThickness),N=4*x,M=Math.max(0,.25-t.depth)):(N=s?.2:0,M=N),i=Mv(t,n,N,M,a),/fbox|boxed|fcolorbox/.test(n)?(i.style.borderStyle="solid",i.style.borderWidth=O(x)):n==="angl"&&x!==.049&&(i.style.borderTopWidth=O(x),i.style.borderRightWidth=O(x)),l=t.depth+M,e.backgroundColor&&(i.style.backgroundColor=e.backgroundColor,e.borderColor&&(i.style.borderColor=e.borderColor))}var y;if(e.backgroundColor)y=ie({positionType:"individualShift",children:[{type:"elem",elem:i,shift:l},{type:"elem",elem:t,shift:0}]});else{var w=/cancel|phase/.test(n)?["svg-align"]:[];y=ie({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:i,shift:l,wrapperClasses:w}]})}return/cancel/.test(n)&&(y.height=t.height,y.depth=t.depth),/cancel/.test(n)&&!s?D(["mord","cancel-lap"],[y],a):D(["mord"],[y],a)},a8=(e,a)=>{var t,n=new _(e.label.includes("colorbox")?"mpadded":"menclose",[ge(e.body,a)]);switch(e.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=a.fontMetrics().fboxsep*a.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),e.label==="\\fcolorbox"){var r=Math.max(a.fontMetrics().fboxrule,a.minRuleThickness);n.setAttribute("style","border: "+O(r)+" solid "+e.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&n.setAttribute("mathbackground",e.backgroundColor),n};H({type:"enclose",names:["\\colorbox"],numArgs:2,allowedInText:!0,argTypes:["color","hbox"],handler(e,a,t){var{parser:n,funcName:r}=e,i=I(a[0],"color-token").color,l=a[1];return{type:"enclose",mode:n.mode,label:r,backgroundColor:i,body:l}},htmlBuilder:e8,mathmlBuilder:a8});H({type:"enclose",names:["\\fcolorbox"],numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"],handler(e,a,t){var{parser:n,funcName:r}=e,i=I(a[0],"color-token").color,l=I(a[1],"color-token").color,s=a[2];return{type:"enclose",mode:n.mode,label:r,backgroundColor:l,borderColor:i,body:s}}});H({type:"enclose",names:["\\fbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler(e,a){var{parser:t}=e;return{type:"enclose",mode:t.mode,label:"\\fbox",body:a[0]}}});H({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],numArgs:1,handler(e,a){var{parser:t,funcName:n}=e,r=a[0];return{type:"enclose",mode:t.mode,label:n,body:r}}});H({type:"enclose",names:["\\sout"],numArgs:1,allowedInText:!0,handler(e,a){var{parser:t,funcName:n}=e;t.mode==="math"&&t.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var r=a[0];return{type:"enclose",mode:t.mode,label:n,body:r}}});H({type:"enclose",names:["\\angl"],numArgs:1,argTypes:["hbox"],allowedInText:!1,handler(e,a){var{parser:t}=e;return{type:"enclose",mode:t.mode,label:"\\angl",body:a[0]}}});var jp={};function ft(e){for(var{type:a,names:t,props:n,handler:r,htmlBuilder:i,mathmlBuilder:l}=e,s={type:a,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},u=0;u<t.length;++u)jp[t[u]]=s;i&&(Hi[a]=i),l&&(Gi[a]=l)}var Ap={};function h(e,a){Ap[e]=a}class ha{constructor(a,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=a,this.start=t,this.end=n}static range(a,t){return t?!a||!a.loc||!t.loc||a.loc.lexer!==t.loc.lexer?null:new ha(a.loc.lexer,a.loc.start,t.loc.end):a&&a.loc}}class Ta{constructor(a,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=a,this.loc=t}range(a,t){return new Ta(t,ha.range(this,a))}}function b1(e){var a=[];e.consumeSpaces();var t=e.fetch().text;for(t==="\\relax"&&(e.consume(),e.consumeSpaces(),t=e.fetch().text);t==="\\hline"||t==="\\hdashline";)e.consume(),a.push(t==="\\hdashline"),e.consumeSpaces(),t=e.fetch().text;return a}var ms=e=>{var a=e.parser.settings;if(!a.displayMode)throw new k("{"+e.envName+"} can be used only in display mode.")},t8=new Set(["gather","gather*"]);function rd(e){if(!e.includes("ed"))return!e.includes("*")}function jn(e,a,t){var{hskipBeforeAndAfter:n,addJot:r,cols:i,arraystretch:l,colSeparationType:s,autoTag:u,singleRow:m,emptySingleRow:p,maxNumCols:g,leqno:v}=a;if(e.gullet.beginGroup(),m||e.gullet.macros.set("\\cr","\\\\\\relax"),!l){var b=e.gullet.expandMacroAsText("\\arraystretch");if(b==null)l=1;else if(l=parseFloat(b),!l||l<0)throw new k("Invalid \\arraystretch: "+b)}e.gullet.beginGroup();var A=[],N=[A],M=[],x=[],y=u!=null?[]:void 0;function w(){u&&e.gullet.macros.set("\\@eqnsw","1",!0)}function j(){y&&(e.gullet.macros.get("\\df@tag")?(y.push(e.subparse([new Ta("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):y.push(!!u&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(w(),x.push(b1(e));;){var $=e.parseExpression(!1,m?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup();var B={type:"ordgroup",mode:e.mode,body:$};t&&(B={type:"styling",mode:e.mode,style:t,resetFont:!0,body:[B]}),A.push(B);var C=e.fetch().text;if(C==="&"){if(g&&A.length===g){if(m||s)throw new k("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(C==="\\end"){j(),A.length===1&&B.type==="styling"&&B.body.length===1&&B.body[0].type==="ordgroup"&&B.body[0].body.length===0&&(N.length>1||!p)&&N.pop(),x.length<N.length+1&&x.push([]);break}else if(C==="\\\\"){e.consume();var U=void 0;e.gullet.future().text!==" "&&(U=e.parseSizeGroup(!0)),M.push(U?U.value:null),j(),x.push(b1(e)),A=[],N.push(A),w()}else throw new k("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:r,arraystretch:l,body:N,cols:i,rowGaps:M,hskipBeforeAndAfter:n,hLinesBeforeRow:x,colSeparationType:s,tags:y,leqno:v}}function id(e){return e.slice(0,1)==="d"?"display":"text"}var pt=function(a,t){var n,r,i=a.body.length,l=a.hLinesBeforeRow,s=0,u=new Array(i),m=[],p=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),g=1/t.fontMetrics().ptPerEm,v=5*g;if(a.colSeparationType&&a.colSeparationType==="small"){var b=t.havingStyle(F.SCRIPT).sizeMultiplier;v=.2778*(b/t.sizeMultiplier)}var A=a.colSeparationType==="CD"?Me({number:3,unit:"ex"},t):12*g,N=3*g,M=a.arraystretch*A,x=.7*M,y=.3*M,w=0;function j(ol){for(var cl=0;cl<ol.length;++cl)cl>0&&(w+=.25),m.push({pos:w,isDashed:ol[cl]})}for(j(l[0]),n=0;n<a.body.length;++n){var $=a.body[n],B=x,C=y;s<$.length&&(s=$.length);var U={cells:new Array($.length),height:0,depth:0,pos:0};for(r=0;r<$.length;++r){var L=se($[r],t);C<L.depth&&(C=L.depth),B<L.height&&(B=L.height),U.cells[r]=L}var Y=a.rowGaps[n],be=0;Y&&(be=Me(Y,t),be>0&&(be+=y,C<be&&(C=be),be=0)),a.addJot&&n<a.body.length-1&&(C+=N),U.height=B,U.depth=C,w+=B,U.pos=w,w+=C+be,u[n]=U,j(l[n+1])}var oe=w/2+t.fontMetrics().axisHeight,Gt=a.cols||[],Oa=[],ta,R,K=[];if(a.tags&&a.tags.some(ol=>ol))for(n=0;n<i;++n){var Z=u[n],xe=Z.pos-oe,pe=a.tags[n],xa=void 0;pe===!0?xa=D(["eqn-num"],[],t):pe===!1?xa=D([],[],t):xa=D([],Xe(pe,t,!0),t),xa.depth=Z.depth,xa.height=Z.height,K.push({type:"elem",elem:xa,shift:xe})}for(r=0,R=0;r<s||R<Gt.length;++r,++R){for(var tt,na=Gt[R],Ba=!0;((An=na)==null?void 0:An.type)==="separator";){var An;if(Ba||(ta=D(["arraycolsep"],[]),ta.style.width=O(t.fontMetrics().doubleRuleSep),Oa.push(ta)),na.separator==="|"||na.separator===":"){var Kp=na.separator==="|"?"solid":"dashed",Pn=D(["vertical-separator"],[],t);Pn.style.height=O(w),Pn.style.borderRightWidth=O(p),Pn.style.borderRightStyle=Kp,Pn.style.margin="0 "+O(-p/2);var md=w-oe;md&&(Pn.style.verticalAlign=O(-md)),Oa.push(Pn)}else throw new k("Invalid separator type: "+na.separator);R++,na=Gt[R],Ba=!1}if(!(r>=s)){var In=void 0;if(r>0||a.hskipBeforeAndAfter){var fd,pd;In=(fd=(pd=na)==null?void 0:pd.pregap)!=null?fd:v,In!==0&&(ta=D(["arraycolsep"],[]),ta.style.width=O(In),Oa.push(ta))}var hd=[];for(n=0;n<i;++n){var il=u[n],ll=il.cells[r];if(ll){var Jp=il.pos-oe;ll.depth=il.depth,ll.height=il.height,hd.push({type:"elem",elem:ll,shift:Jp})}}var Pp=ie({positionType:"individualShift",children:hd}),Ip=D(["col-align-"+(((tt=na)==null?void 0:tt.align)||"c")],[Pp]);if(Oa.push(Ip),r<s-1||a.hskipBeforeAndAfter){var vd,gd;In=(vd=(gd=na)==null?void 0:gd.postgap)!=null?vd:v,In!==0&&(ta=D(["arraycolsep"],[]),ta.style.width=O(In),Oa.push(ta))}}}var sl=D(["mtable"],Oa);if(m.length>0){for(var Wp=Br("hline",t,p),eh=Br("hdashline",t,p),hs=[{type:"elem",elem:sl,shift:0}];m.length>0;){var bd=m.pop(),yd=bd.pos-oe;bd.isDashed?hs.push({type:"elem",elem:eh,shift:yd}):hs.push({type:"elem",elem:Wp,shift:yd})}sl=ie({positionType:"individualShift",children:hs})}if(K.length===0)return D(["mord"],[sl],t);var ah=ie({positionType:"individualShift",children:K}),th=D(["tag"],[ah],t);return Ht([sl,th])},n8={c:"center ",l:"left ",r:"right "},ht=function(a,t){for(var n=[],r=new _("mtd",[],["mtr-glue"]),i=new _("mtd",[],["mml-eqn-num"]),l=0;l<a.body.length;l++){for(var s=a.body[l],u=[],m=0;m<s.length;m++)u.push(new _("mtd",[ge(s[m],t)]));a.tags&&a.tags[l]&&(u.unshift(r),u.push(r),a.leqno?u.unshift(i):u.push(i)),n.push(new _("mtr",u))}var p=new _("mtable",n),g=a.arraystretch===.5?.1:.16+a.arraystretch-1+(a.addJot?.09:0);p.setAttribute("rowspacing",O(g));var v="",b="";if(a.cols&&a.cols.length>0){var A=a.cols,N="",M=!1,x=0,y=A.length;A[0].type==="separator"&&(v+="top ",x=1),A[A.length-1].type==="separator"&&(v+="bottom ",y-=1);for(var w=x;w<y;w++){var j=A[w];j.type==="align"?(b+=n8[j.align],M&&(N+="none "),M=!0):j.type==="separator"&&M&&(N+=j.separator==="|"?"solid ":"dashed ",M=!1)}p.setAttribute("columnalign",b.trim()),/[sd]/.test(N)&&p.setAttribute("columnlines",N.trim())}if(a.colSeparationType==="align"){for(var $=a.cols||[],B="",C=1;C<$.length;C++)B+=C%2?"0em ":"1em ";p.setAttribute("columnspacing",B.trim())}else a.colSeparationType==="alignat"||a.colSeparationType==="gather"?p.setAttribute("columnspacing","0em"):a.colSeparationType==="small"?p.setAttribute("columnspacing","0.2778em"):a.colSeparationType==="CD"?p.setAttribute("columnspacing","0.5em"):p.setAttribute("columnspacing","1em");var U="",L=a.hLinesBeforeRow;v+=L[0].length>0?"left ":"",v+=L[L.length-1].length>0?"right ":"";for(var Y=1;Y<L.length-1;Y++)U+=L[Y].length===0?"none ":L[Y][0]?"dashed ":"solid ";return/[sd]/.test(U)&&p.setAttribute("rowlines",U.trim()),v!==""&&(p=new _("menclose",[p]),p.setAttribute("notation",v.trim())),a.arraystretch&&a.arraystretch<1&&(p=new _("mstyle",[p]),p.setAttribute("scriptlevel","1")),p},Np=function(a,t){a.envName.includes("ed")||ms(a);var n=[],r=a.envName==="split",i=jn(a.parser,{cols:n,addJot:!0,autoTag:r?void 0:rd(a.envName),emptySingleRow:!0,colSeparationType:a.envName.includes("at")?"alignat":"align",maxNumCols:r?2:void 0,leqno:a.parser.settings.leqno},"display"),l=0,s=0,u={type:"ordgroup",mode:a.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var m="",p=0;p<t[0].body.length;p++){var g=I(t[0].body[p],"textord");m+=g.text}l=Number(m),s=l*2}var v=!s;i.body.forEach(function(M){for(var x=1;x<M.length;x+=2){var y=I(M[x],"styling"),w=I(y.body[0],"ordgroup");w.body.unshift(u)}if(v)s<M.length&&(s=M.length);else{var j=M.length/2;if(l<j)throw new k("Too many math in a row: "+("expected "+l+", but got "+j),M[0])}});for(var b=0;b<s;++b){var A="r",N=0;b%2===1?A="l":b>0&&v&&(N=1),n[b]={type:"align",align:A,pregap:N,postgap:0}}return i.colSeparationType=v?"align":"alignat",i};ft({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,a){var t=cs(a[0]),n=t?[a[0]]:I(a[0],"ordgroup").body,r=n.map(function(l){var s=os(l),u=s.text;if("lcr".includes(u))return{type:"align",align:u};if(u==="|")return{type:"separator",separator:"|"};if(u===":")return{type:"separator",separator:":"};throw new k("Unknown column alignment: "+u,l)}),i={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return jn(e.parser,i,id(e.envName))},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var a={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(e.envName.charAt(e.envName.length-1)==="*"){var r=e.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,!"lcr".includes(t))throw new k("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),n.cols=[{type:"align",align:t}]}}var i=jn(e.parser,n,id(e.envName)),l=Math.max(0,...i.body.map(s=>s.length));return i.cols=new Array(l).fill({type:"align",align:t}),a?{type:"leftright",mode:e.mode,body:[i],left:a[0],right:a[1],rightColor:void 0}:i},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var a={arraystretch:.5},t=jn(e.parser,a,"script");return t.colSeparationType="small",t},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["subarray"],props:{numArgs:1},handler(e,a){var t=cs(a[0]),n=t?[a[0]]:I(a[0],"ordgroup").body,r=n.map(function(s){var u=os(s),m=u.text;if("lc".includes(m))return{type:"align",align:m};throw new k("Unknown column alignment: "+m,s)});if(r.length>1)throw new k("{subarray} can contain only one column");var i={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5},l=jn(e.parser,i,"script");if(l.body.length>0&&l.body[0].length>1)throw new k("{subarray} can contain only one column");return l},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var a={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=jn(e.parser,a,id(e.envName));return{type:"leftright",mode:e.mode,body:[t],left:e.envName.includes("r")?".":"\\{",right:e.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Np,htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){t8.has(e.envName)&&ms(e);var a={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:rd(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return jn(e.parser,a,"display")},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Np,htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){ms(e);var a={autoTag:rd(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return jn(e.parser,a,"display")},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["CD"],props:{numArgs:0},handler(e){return ms(e),Lv(e.parser)},htmlBuilder:pt,mathmlBuilder:ht});h("\\nonumber","\\gdef\\@eqnsw{0}");h("\\notag","\\nonumber");H({type:"text",names:["\\hline","\\hdashline"],numArgs:0,allowedInText:!0,allowedInMath:!0,handler(e,a){throw new k(e.funcName+" valid only within array environment")}});var y1=jp;H({type:"environment",names:["\\begin","\\end"],numArgs:1,argTypes:["text"],handler(e,a){var{parser:t,funcName:n}=e,r=a[0];if(r.type!=="ordgroup")throw new k("Invalid environment name",r);for(var i="",l=0;l<r.body.length;++l)i+=I(r.body[l],"textord").text;if(n==="\\begin"){if(!y1.hasOwnProperty(i))throw new k("No such environment: "+i,r);var s=y1[i],{args:u,optArgs:m}=t.parseArguments("\\begin{"+i+"}",s),p={mode:t.mode,envName:i,parser:t},g=s.handler(p,u,m);t.expect("\\end",!1);var v=t.nextToken,b=I(t.parseFunction(),"environment");if(b.name!==i)throw new k("Mismatch: \\begin{"+i+"} matched by \\end{"+b.name+"}",v);return g}return{type:"environment",mode:t.mode,name:i,nameGroup:r}}});var r8=(e,a)=>{var t=e.font,n=a.withFont(t);return se(e.body,n)},i8=(e,a)=>{var t=e.font,n=a.withFont(t);return ge(e.body,n)},x1={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};H({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],numArgs:1,allowedInArgument:!0,handler:(e,a)=>{var{parser:t,funcName:n}=e,r=C0(a[0]),i=n in x1?x1[n]:n;return{type:"font",mode:t.mode,font:i.slice(1),body:r}},htmlBuilder:r8,mathmlBuilder:i8});H({type:"mclass",names:["\\boldsymbol","\\bm"],numArgs:1,handler:(e,a)=>{var{parser:t}=e,n=a[0];return{type:"mclass",mode:t.mode,mclass:us(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:Ut(n)}}});H({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],numArgs:0,allowedInText:!0,handler:(e,a)=>{var{parser:t,funcName:n,breakOnTokenText:r}=e,{mode:i}=t,l=t.parseExpression(!0,r);return{type:"font",mode:i,font:"math"+n.slice(1),body:{type:"ordgroup",mode:t.mode,body:l}}}});var l8=(e,a)=>{var t=a.style,n=t.fracNum(),r=t.fracDen(),i;i=a.havingStyle(n);var l=se(e.numer,i,a);if(e.continued){var s=8.5/a.fontMetrics().ptPerEm,u=3.5/a.fontMetrics().ptPerEm;l.height=l.height<s?s:l.height,l.depth=l.depth<u?u:l.depth}i=a.havingStyle(r);var m=se(e.denom,i,a),p,g,v;e.hasBarLine?(e.barSize?(g=Me(e.barSize,a),p=Br("frac-line",a,g)):p=Br("frac-line",a),g=p.height,v=p.height):(p=null,g=0,v=a.fontMetrics().defaultRuleThickness);var b,A,N;t.size===F.DISPLAY.size?(b=a.fontMetrics().num1,g>0?A=3*v:A=7*v,N=a.fontMetrics().denom1):(g>0?(b=a.fontMetrics().num2,A=v):(b=a.fontMetrics().num3,A=3*v),N=a.fontMetrics().denom2);var M;if(p){var y=a.fontMetrics().axisHeight;b-l.depth-(y+.5*g)<A&&(b+=A-(b-l.depth-(y+.5*g))),y-.5*g-(m.height-N)<A&&(N+=A-(y-.5*g-(m.height-N)));var w=-(y-.5*g);M=ie({positionType:"individualShift",children:[{type:"elem",elem:m,shift:N},{type:"elem",elem:p,shift:w},{type:"elem",elem:l,shift:-b}]})}else{var x=b-l.depth-(m.height-N);x<A&&(b+=.5*(A-x),N+=.5*(A-x)),M=ie({positionType:"individualShift",children:[{type:"elem",elem:m,shift:N},{type:"elem",elem:l,shift:-b}]})}i=a.havingStyle(t),M.height*=i.sizeMultiplier/a.sizeMultiplier,M.depth*=i.sizeMultiplier/a.sizeMultiplier;var j;t.size===F.DISPLAY.size?j=a.fontMetrics().delim1:t.size===F.SCRIPTSCRIPT.size?j=a.havingStyle(F.SCRIPT).fontMetrics().delim2:j=a.fontMetrics().delim2;var $,B;return e.leftDelim==null?$=Qi(a,["mopen"]):$=_c(e.leftDelim,j,!0,a.havingStyle(t),e.mode,["mopen"]),e.continued?B=D([]):e.rightDelim==null?B=Qi(a,["mclose"]):B=_c(e.rightDelim,j,!0,a.havingStyle(t),e.mode,["mclose"]),D(["mord"].concat(i.sizingClasses(a)),[$,D(["mfrac"],[M]),B],a)},s8=(e,a)=>{var t=new _("mfrac",[ge(e.numer,a),ge(e.denom,a)]);if(!e.hasBarLine)t.setAttribute("linethickness","0px");else if(e.barSize){var n=Me(e.barSize,a);t.setAttribute("linethickness",O(n))}if(e.leftDelim!=null||e.rightDelim!=null){var r=[];if(e.leftDelim!=null){var i=new _("mo",[new He(e.leftDelim.replace("\\",""))]);i.setAttribute("fence","true"),r.push(i)}if(r.push(t),e.rightDelim!=null){var l=new _("mo",[new He(e.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),r.push(l)}return ad(r)}return t},qp=(e,a)=>{if(!a)return e;var t={type:"styling",mode:e.mode,style:a,body:[e]};return t};H({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],numArgs:2,allowedInArgument:!0,handler:(e,a)=>{var{parser:t,funcName:n}=e,r=a[0],i=a[1],l,s=null,u=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":l=!0;break;case"\\\\atopfrac":l=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":l=!1,s="(",u=")";break;case"\\\\bracefrac":l=!1,s="\\{",u="\\}";break;case"\\\\brackfrac":l=!1,s="[",u="]";break;default:throw new Error("Unrecognized genfrac command")}var m=n==="\\cfrac",p=null;return m||n.startsWith("\\d")?p="display":n.startsWith("\\t")&&(p="text"),qp({type:"genfrac",mode:t.mode,numer:r,denom:i,continued:m,hasBarLine:l,leftDelim:s,rightDelim:u,barSize:null},p)},htmlBuilder:l8,mathmlBuilder:s8});H({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],numArgs:0,infix:!0,handler(e){var{parser:a,funcName:t,token:n}=e,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:a.mode,replaceWith:r,token:n}}});var S1=["display","text","script","scriptscript"],z1=function(a){var t=null;return a.length>0&&(t=a,t=t==="."?null:t),t};H({type:"genfrac",names:["\\genfrac"],numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"],handler(e,a){var{parser:t}=e,n=a[4],r=a[5],i=C0(a[0]),l=i.type==="atom"&&i.family==="open"?z1(i.text):null,s=C0(a[1]),u=s.type==="atom"&&s.family==="close"?z1(s.text):null,m=I(a[2],"size"),p,g=null;m.isBlank?p=!0:(g=m.value,p=g.number>0);var v=null,b=a[3];if(b.type==="ordgroup"){if(b.body.length>0){var A=I(b.body[0],"textord");v=S1[Number(A.text)]}}else b=I(b,"textord"),v=S1[Number(b.text)];return qp({type:"genfrac",mode:t.mode,numer:n,denom:r,continued:!1,hasBarLine:p,barSize:g,leftDelim:l,rightDelim:u},v)}});H({type:"infix",names:["\\above"],numArgs:1,argTypes:["size"],infix:!0,handler(e,a){var{parser:t,funcName:n,token:r}=e;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:I(a[0],"size").value,token:r}}});H({type:"genfrac",names:["\\\\abovefrac"],numArgs:3,argTypes:["math","size","math"],handler:(e,a)=>{var{parser:t,funcName:n}=e,r=a[0],i=I(a[1],"infix").size;if(!i)throw new Error("\\\\abovefrac expected size, but got "+String(i));var l=a[2],s=i.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:l,continued:!1,hasBarLine:s,barSize:i,leftDelim:null,rightDelim:null}}});var Mp=(e,a)=>{var t=a.style,n,r;e.type==="supsub"?(n=e.sup?se(e.sup,a.havingStyle(t.sup()),a):se(e.sub,a.havingStyle(t.sub()),a),r=I(e.base,"horizBrace")):r=I(e,"horizBrace");var i=se(r.base,a.havingBaseStyle(F.DISPLAY)),l=ss(r,a),s;if(r.isOver?s=ie({positionType:"firstBaseline",children:[{type:"elem",elem:i},{type:"kern",size:.1},{type:"elem",elem:l,wrapperClasses:["svg-align"]}]}):s=ie({positionType:"bottom",positionData:i.depth+.1+l.height,children:[{type:"elem",elem:l,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:i}]}),n){var u=D(["minner",r.isOver?"mover":"munder"],[s],a);r.isOver?s=ie({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.2},{type:"elem",elem:n}]}):s=ie({positionType:"bottom",positionData:u.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:u}]})}return D(["minner",r.isOver?"mover":"munder"],[s],a)},o8=(e,a)=>{var t=ls(e.label);return new _(e.isOver?"mover":"munder",[ge(e.base,a),t])};H({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],numArgs:1,handler(e,a){var{parser:t,funcName:n}=e;return{type:"horizBrace",mode:t.mode,label:n,isOver:n.includes("\\over"),base:a[0]}},htmlBuilder:Mp,mathmlBuilder:o8});H({type:"href",names:["\\href"],numArgs:2,argTypes:["url","original"],allowedInText:!0,handler:(e,a)=>{var{parser:t}=e,n=a[1],r=I(a[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:Le(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(e,a)=>{var t=Xe(e.body,a,!1);return mv(e.href,[],t,a)},mathmlBuilder:(e,a)=>{var t=zn(e.body,a);return t instanceof _||(t=new _("mrow",[t])),t.setAttribute("href",e.href),t}});H({type:"href",names:["\\url"],numArgs:1,argTypes:["url"],allowedInText:!0,handler:(e,a)=>{var{parser:t}=e,n=I(a[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var r=[],i=0;i<n.length;i++){var l=n[i];l==="~"&&(l="\\textasciitilde"),r.push({type:"textord",mode:"text",text:l})}var s={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:n,body:Le(s)}}});H({type:"hbox",names:["\\hbox"],numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0,handler(e,a){var{parser:t}=e;return{type:"hbox",mode:t.mode,body:Le(a[0])}},htmlBuilder(e,a){var t=Xe(e.body,a.withFont(""),!1);return Ht(t)},mathmlBuilder(e,a){return new _("mrow",_a(e.body,a.withFont("")))}});H({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],numArgs:2,argTypes:["raw","original"],allowedInText:!0,handler:(e,a)=>{var{parser:t,funcName:n,token:r}=e,i=I(a[0],"raw").string,l=a[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var s,u={};switch(n){case"\\htmlClass":u.class=i,s={command:"\\htmlClass",class:i};break;case"\\htmlId":u.id=i,s={command:"\\htmlId",id:i};break;case"\\htmlStyle":u.style=i,s={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var m=i.split(","),p=0;p<m.length;p++){var g=m[p],v=g.indexOf("=");if(v<0)throw new k("\\htmlData key/value '"+g+"' missing equals sign");var b=g.slice(0,v),A=g.slice(v+1);u["data-"+b.trim()]=A}s={command:"\\htmlData",attributes:u};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(s)?{type:"html",mode:t.mode,attributes:u,body:Le(l)}:t.formatUnsupportedCmd(n)},htmlBuilder:(e,a)=>{var t=Xe(e.body,a,!1),n=["enclosing"];e.attributes.class&&n.push(...e.attributes.class.trim().split(/\s+/));var r=D(n,t,a);for(var i in e.attributes)i!=="class"&&e.attributes.hasOwnProperty(i)&&r.setAttribute(i,e.attributes[i]);return r},mathmlBuilder:(e,a)=>zn(e.body,a)});H({type:"htmlmathml",names:["\\html@mathml"],numArgs:2,allowedInArgument:!0,allowedInText:!0,handler:(e,a)=>{var{parser:t}=e;return{type:"htmlmathml",mode:t.mode,html:Le(a[0]),mathml:Le(a[1])}},htmlBuilder:(e,a)=>{var t=Xe(e.html,a,!1);return Ht(t)},mathmlBuilder:(e,a)=>zn(e.mathml,a)});var fo=function(a){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(a))return{number:+a,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(a);if(!t)throw new k("Invalid size: '"+a+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!I2(n))throw new k("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};H({type:"includegraphics",names:["\\includegraphics"],numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1,handler:(e,a,t)=>{var{parser:n}=e,r={number:0,unit:"em"},i={number:.9,unit:"em"},l={number:0,unit:"em"},s="";if(t[0])for(var u=I(t[0],"raw").string,m=u.split(","),p=0;p<m.length;p++){var g=m[p].split("=");if(g.length===2){var v=g[1].trim();switch(g[0].trim()){case"alt":s=v;break;case"width":r=fo(v);break;case"height":i=fo(v);break;case"totalheight":l=fo(v);break;default:throw new k("Invalid key: '"+g[0]+"' in \\includegraphics.")}}}var b=I(a[0],"url").url;return s===""&&(s=b,s=s.replace(/^.*[\\/]/,""),s=s.substring(0,s.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:b})?{type:"includegraphics",mode:n.mode,alt:s,width:r,height:i,totalheight:l,src:b}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,a)=>{var t=Me(e.height,a),n=0;e.totalheight.number>0&&(n=Me(e.totalheight,a)-t);var r=0;e.width.number>0&&(r=Me(e.width,a));var i={height:O(t+n)};r>0&&(i.width=O(r)),n>0&&(i.verticalAlign=O(-n));var l=new ev(e.src,e.alt,i);return l.height=t,l.depth=n,l},mathmlBuilder:(e,a)=>{var t=new _("mglyph",[]);t.setAttribute("alt",e.alt);var n=Me(e.height,a),r=0;if(e.totalheight.number>0&&(r=Me(e.totalheight,a)-n,t.setAttribute("valign",O(-r))),t.setAttribute("height",O(n+r)),e.width.number>0){var i=Me(e.width,a);t.setAttribute("width",O(i))}return t.setAttribute("src",e.src),t}});H({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0,handler(e,a){var{parser:t,funcName:n}=e,r=I(a[0],"size");if(t.settings.strict){var i=n[1]==="m",l=r.value.unit==="mu";i?(l||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):l&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(e,a){return rp(e.dimension,a)},mathmlBuilder(e,a){var t=Me(e.dimension,a);return new up(t)}});H({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],numArgs:1,allowedInText:!0,handler:(e,a)=>{var{parser:t,funcName:n}=e,r=a[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:r}},htmlBuilder:(e,a)=>{var t;e.alignment==="clap"?(t=D([],[se(e.body,a)]),t=D(["inner"],[t],a)):t=D(["inner"],[se(e.body,a)]);var n=D(["fix"],[]),r=D([e.alignment],[t,n],a),i=D(["strut"]);return i.style.height=O(r.height+r.depth),r.depth&&(i.style.verticalAlign=O(-r.depth)),r.children.unshift(i),r=D(["thinbox"],[r],a),D(["mord","vbox"],[r],a)},mathmlBuilder:(e,a)=>{var t=new _("mpadded",[ge(e.body,a)]);if(e.alignment!=="rlap"){var n=e.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});H({type:"styling",names:["\\(","$"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(e,a){var{funcName:t,parser:n}=e,r=n.mode;n.switchMode("math");var i=t==="\\("?"\\)":"$",l=n.parseExpression(!1,i);return n.expect(i),n.switchMode(r),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:l}}});H({type:"text",names:["\\)","\\]"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(e,a){throw new k("Mismatched "+e.funcName)}});var w1=(e,a)=>{switch(a.style.size){case F.DISPLAY.size:return e.display;case F.TEXT.size:return e.text;case F.SCRIPT.size:return e.script;case F.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};H({type:"mathchoice",names:["\\mathchoice"],numArgs:4,primitive:!0,handler:(e,a)=>{var{parser:t}=e;return{type:"mathchoice",mode:t.mode,display:Le(a[0]),text:Le(a[1]),script:Le(a[2]),scriptscript:Le(a[3])}},htmlBuilder:(e,a)=>{var t=w1(e,a),n=Xe(t,a,!1);return Ht(n)},mathmlBuilder:(e,a)=>{var t=w1(e,a);return zn(t,a)}});var Tp=(e,a,t,n,r,i,l)=>{e=D([],[e]);var s=t&&Ut(t),u,m;if(a){var p=se(a,n.havingStyle(r.sup()),n);m={elem:p,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-p.depth)}}if(t){var g=se(t,n.havingStyle(r.sub()),n);u={elem:g,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-g.height)}}var v;if(m&&u){var b=n.fontMetrics().bigOpSpacing5+u.elem.height+u.elem.depth+u.kern+e.depth+l;v=ie({positionType:"bottom",positionData:b,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:u.elem,marginLeft:O(-i)},{type:"kern",size:u.kern},{type:"elem",elem:e},{type:"kern",size:m.kern},{type:"elem",elem:m.elem,marginLeft:O(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(u){var A=e.height-l;v=ie({positionType:"top",positionData:A,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:u.elem,marginLeft:O(-i)},{type:"kern",size:u.kern},{type:"elem",elem:e}]})}else if(m){var N=e.depth+l;v=ie({positionType:"bottom",positionData:N,children:[{type:"elem",elem:e},{type:"kern",size:m.kern},{type:"elem",elem:m.elem,marginLeft:O(i)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return e;var M=[v];if(u&&i!==0&&!s){var x=D(["mspace"],[],n);x.style.marginRight=O(i),M.unshift(x)}return D(["mop","op-limits"],M,n)},Cp=new Set(["\\smallint"]),Dp=(e,a)=>{var t,n,r=!1,i;e.type==="supsub"?(t=e.sup,n=e.sub,i=I(e.base,"op"),r=!0):i=I(e,"op");var l=a.style,s=!1;l.size===F.DISPLAY.size&&i.symbol&&!Cp.has(i.name)&&(s=!0);var u,m;if(i.symbol){var p=s?"Size2-Regular":"Size1-Regular",g="";if((i.name==="\\oiint"||i.name==="\\oiiint")&&(g=i.name.slice(1),i.name=g==="oiint"?"\\iint":"\\iiint"),u=la(i.name,p,"math",a,["mop","op-symbol",s?"large-op":"small-op"]),m=u.italic,g.length>0){var v=lp(g+"Size"+(s?"2":"1"),a);u=ie({positionType:"individualShift",children:[{type:"elem",elem:u,shift:0},{type:"elem",elem:v,shift:s?.08:0}]}),i.name="\\"+g,u.classes.unshift("mop"),u.italic=m}}else if(i.body){var b=Xe(i.body,a,!0);b.length===1&&b[0]instanceof $a?(u=b[0],u.classes[0]="mop"):u=D(["mop"],b,a)}else{for(var A=[],N=1;N<i.name.length;N++)A.push(Wu(i.name[N],i.mode,a));u=D(["mop"],A,a)}var M=0,x=0;if((u instanceof $a||i.name==="\\oiint"||i.name==="\\oiiint")&&!i.suppressBaseShift){var y;M=(u.height-u.depth)/2-a.fontMetrics().axisHeight,x=(y=u.italic)!=null?y:0}return r?Tp(u,t,n,a,l,x,M):(M&&(u.style.position="relative",u.style.top=O(M)),u)},c8=(e,a)=>{var t;if(e.symbol)t=new _("mo",[Ka(e.name,e.mode)]),Cp.has(e.name)&&t.setAttribute("largeop","false");else if(e.body)t=new _("mo",_a(e.body,a));else{t=new _("mi",[new He(e.name.slice(1))]);var n=new _("mo",[Ka("⁡","text")]);e.parentIsSupSub?t=new _("mrow",[t,n]):t=cp([t,n])}return t},u8={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};H({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],numArgs:0,handler:(e,a)=>{var{parser:t,funcName:n}=e,r=n;return r.length===1&&(r=u8[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Dp,mathmlBuilder:c8});H({type:"op",names:["\\mathop"],numArgs:1,primitive:!0,handler:(e,a)=>{var{parser:t}=e,n=a[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Le(n)}}});var d8={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};H({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],numArgs:0,handler(e){var{parser:a,funcName:t}=e;return{type:"op",mode:a.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}}});H({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],numArgs:0,handler(e){var{parser:a,funcName:t}=e;return{type:"op",mode:a.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}}});H({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],numArgs:0,allowedInArgument:!0,handler(e){var{parser:a,funcName:t}=e,n=t;return n.length===1&&(n=d8[n]),{type:"op",mode:a.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}}});var $p=(e,a)=>{var t,n,r=!1,i;e.type==="supsub"?(t=e.sup,n=e.sub,i=I(e.base,"operatorname"),r=!0):i=I(e,"operatorname");var l;if(i.body.length>0){for(var s=i.body.map(g=>{var v="text"in g?g.text:void 0;return typeof v=="string"?{type:"textord",mode:g.mode,text:v}:g}),u=Xe(s,a.withFont("mathrm"),!0),m=0;m<u.length;m++){var p=u[m];p instanceof $a&&(p.text=p.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}l=D(["mop"],u,a)}else l=D(["mop"],[],a);return r?Tp(l,t,n,a,a.style,0,0):l},m8=(e,a)=>{for(var t=_a(e.body,a.withFont("mathrm")),n=!0,r=0;r<t.length;r++){var i=t[r];if(!(i instanceof up))if(i instanceof _)switch(i.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var l=i.children[0];i.children.length===1&&l instanceof He?l.text=l.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var s=t.map(p=>p.toText()).join("");t=[new He(s)]}var u=new _("mi",t);u.setAttribute("mathvariant","normal");var m=new _("mo",[Ka("⁡","text")]);return e.parentIsSupSub?new _("mrow",[u,m]):cp([u,m])};H({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],numArgs:1,handler:(e,a)=>{var{parser:t,funcName:n}=e,r=a[0];return{type:"operatorname",mode:t.mode,body:Le(r),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:$p,mathmlBuilder:m8});h("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Jn({type:"ordgroup",htmlBuilder(e,a){return e.semisimple?Ht(Xe(e.body,a,!1)):D(["mord"],Xe(e.body,a,!0),a)},mathmlBuilder(e,a){return zn(e.body,a,!0)}});H({type:"overline",names:["\\overline"],numArgs:1,handler(e,a){var{parser:t}=e,n=a[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(e,a){var t=se(e.body,a.havingCrampedStyle()),n=Br("overline-line",a),r=a.fontMetrics().defaultRuleThickness,i=ie({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:n},{type:"kern",size:r}]});return D(["mord","overline"],[i],a)},mathmlBuilder(e,a){var t=new _("mo",[new He("‾")]);t.setAttribute("stretchy","true");var n=new _("mover",[ge(e.body,a),t]);return n.setAttribute("accent","true"),n}});H({type:"phantom",names:["\\phantom"],numArgs:1,allowedInText:!0,handler:(e,a)=>{var{parser:t}=e,n=a[0];return{type:"phantom",mode:t.mode,body:Le(n)}},htmlBuilder:(e,a)=>{var t=Xe(e.body,a.withPhantom(),!1);return Ht(t)},mathmlBuilder:(e,a)=>{var t=_a(e.body,a);return new _("mphantom",t)}});h("\\hphantom","\\smash{\\phantom{#1}}");H({type:"vphantom",names:["\\vphantom"],numArgs:1,allowedInText:!0,handler:(e,a)=>{var{parser:t}=e,n=a[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(e,a)=>{var t=D(["inner"],[se(e.body,a.withPhantom())]),n=D(["fix"],[]);return D(["mord","rlap"],[t,n],a)},mathmlBuilder:(e,a)=>{var t=_a(Le(e.body),a),n=new _("mphantom",t),r=new _("mpadded",[n]);return r.setAttribute("width","0px"),r}});H({type:"raisebox",names:["\\raisebox"],numArgs:2,argTypes:["size","hbox"],allowedInText:!0,handler(e,a){var{parser:t}=e,n=I(a[0],"size").value,r=a[1];return{type:"raisebox",mode:t.mode,dy:n,body:r}},htmlBuilder(e,a){var t=se(e.body,a),n=Me(e.dy,a);return ie({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]})},mathmlBuilder(e,a){var t=new _("mpadded",[ge(e.body,a)]),n=e.dy.number+e.dy.unit;return t.setAttribute("voffset",n),t}});H({type:"internal",names:["\\relax"],numArgs:0,allowedInText:!0,allowedInArgument:!0,handler(e){var{parser:a}=e;return{type:"internal",mode:a.mode}}});H({type:"rule",names:["\\rule"],numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"],handler(e,a,t){var{parser:n}=e,r=t[0],i=I(a[0],"size"),l=I(a[1],"size");return{type:"rule",mode:n.mode,shift:r&&I(r,"size").value,width:i.value,height:l.value}},htmlBuilder(e,a){var t=D(["mord","rule"],[],a),n=Me(e.width,a),r=Me(e.height,a),i=e.shift?Me(e.shift,a):0;return t.style.borderRightWidth=O(n),t.style.borderTopWidth=O(r),t.style.bottom=O(i),t.width=n,t.height=r+i,t.depth=-i,t.maxFontSize=r*1.125*a.sizeMultiplier,t},mathmlBuilder(e,a){var t=Me(e.width,a),n=Me(e.height,a),r=e.shift?Me(e.shift,a):0,i=a.color&&a.getColor()||"black",l=new _("mspace");l.setAttribute("mathbackground",i),l.setAttribute("width",O(t)),l.setAttribute("height",O(n));var s=new _("mpadded",[l]);return r>=0?s.setAttribute("height",O(r)):(s.setAttribute("height",O(r)),s.setAttribute("depth",O(-r))),s.setAttribute("voffset",O(r)),s}});function kp(e,a,t){for(var n=Xe(e,a,!1),r=a.sizeMultiplier/t.sizeMultiplier,i=0;i<n.length;i++){var l=n[i].classes.indexOf("sizing");l<0?Array.prototype.push.apply(n[i].classes,a.sizingClasses(t)):n[i].classes[l+1]==="reset-size"+a.size&&(n[i].classes[l+1]="reset-size"+t.size),n[i].height*=r,n[i].depth*=r}return Ht(n)}var E1=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],f8=(e,a)=>{var t=a.havingSize(e.size);return kp(e.body,t,a)};H({type:"sizing",names:E1,numArgs:0,allowedInText:!0,handler:(e,a)=>{var{breakOnTokenText:t,funcName:n,parser:r}=e,i=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:E1.indexOf(n)+1,body:i}},htmlBuilder:f8,mathmlBuilder:(e,a)=>{var t=a.havingSize(e.size),n=_a(e.body,t),r=new _("mstyle",n);return r.setAttribute("mathsize",O(t.sizeMultiplier)),r}});H({type:"smash",names:["\\smash"],numArgs:1,numOptionalArgs:1,allowedInText:!0,handler:(e,a,t)=>{var{parser:n}=e,r=!1,i=!1,l=t[0]&&I(t[0],"ordgroup");if(l)for(var s,u=0;u<l.body.length;++u){var m=l.body[u];if(s=os(m).text,s==="t")r=!0;else if(s==="b")i=!0;else{r=!1,i=!1;break}}else r=!0,i=!0;var p=a[0];return{type:"smash",mode:n.mode,body:p,smashHeight:r,smashDepth:i}},htmlBuilder:(e,a)=>{var t=D([],[se(e.body,a)]);if(!e.smashHeight&&!e.smashDepth)return t;if(e.smashHeight&&(t.height=0),e.smashDepth&&(t.depth=0),e.smashHeight&&e.smashDepth)return D(["mord","smash"],[t],a);if(t.children)for(var n=0;n<t.children.length;n++)e.smashHeight&&(t.children[n].height=0),e.smashDepth&&(t.children[n].depth=0);var r=ie({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return D(["mord"],[r],a)},mathmlBuilder:(e,a)=>{var t=new _("mpadded",[ge(e.body,a)]);return e.smashHeight&&t.setAttribute("height","0px"),e.smashDepth&&t.setAttribute("depth","0px"),t}});H({type:"sqrt",names:["\\sqrt"],numArgs:1,numOptionalArgs:1,handler(e,a,t){var{parser:n}=e,r=t[0],i=a[0];return{type:"sqrt",mode:n.mode,body:i,index:r}},htmlBuilder(e,a){var t=se(e.body,a.havingCrampedStyle());t.height===0&&(t.height=a.fontMetrics().xHeight),t=Rr(t,a);var n=a.fontMetrics(),r=n.defaultRuleThickness,i=r;a.style.id<F.TEXT.id&&(i=a.fontMetrics().xHeight);var l=r+i/4,s=t.height+t.depth+l+r,{span:u,ruleWidth:m,advanceWidth:p}=Fv(s,a),g=u.height-m;g>t.height+t.depth+l&&(l=(l+g-t.height-t.depth)/2);var v=u.height-t.height-l-m;t.style.paddingLeft=O(p);var b=ie({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+v)},{type:"elem",elem:u},{type:"kern",size:m}]});if(e.index){var A=a.havingStyle(F.SCRIPTSCRIPT),N=se(e.index,A,a),M=.6*(b.height-b.depth),x=ie({positionType:"shift",positionData:-M,children:[{type:"elem",elem:N}]}),y=D(["root"],[x]);return D(["mord","sqrt"],[y,b],a)}else return D(["mord","sqrt"],[b],a)},mathmlBuilder(e,a){var{body:t,index:n}=e;return n?new _("mroot",[ge(t,a),ge(n,a)]):new _("msqrt",[ge(t,a)])}});var Oc={display:F.DISPLAY,text:F.TEXT,script:F.SCRIPT,scriptscript:F.SCRIPTSCRIPT};function p8(e){return e in Oc}H({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],numArgs:0,allowedInText:!0,primitive:!0,handler(e,a){var{breakOnTokenText:t,funcName:n,parser:r}=e,i=r.parseExpression(!0,t),l=n.slice(1,n.length-5);if(!p8(l))throw new Error("Unknown style: "+l);return{type:"styling",mode:r.mode,style:l,body:i}},htmlBuilder(e,a){var t=Oc[e.style],n=a.havingStyle(t);return e.resetFont&&(n=n.withFont("")),kp(e.body,n,a)},mathmlBuilder(e,a){var t=Oc[e.style],n=a.havingStyle(t);e.resetFont&&(n=n.withFont(""));var r=_a(e.body,n),i=new _("mstyle",r),l={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},s=l[e.style];return i.setAttribute("scriptlevel",s[0]),i.setAttribute("displaystyle",s[1]),i}});var h8=function(a,t){var n=a.base;if(n)if(n.type==="op"){var r=n.limits&&(t.style.size===F.DISPLAY.size||n.alwaysHandleSupSub);return r?Dp:null}else if(n.type==="operatorname"){var i=n.alwaysHandleSupSub&&(t.style.size===F.DISPLAY.size||n.limits);return i?$p:null}else{if(n.type==="accent")return Ut(n.base)?pp:null;if(n.type==="horizBrace"){var l=!a.sub;return l===n.isOver?Mp:null}else return null}else return null};Jn({type:"supsub",htmlBuilder(e,a){var t=h8(e,a);if(t)return t(e,a);var{base:n,sup:r,sub:i}=e,l=se(n,a),s,u,m=a.fontMetrics(),p=0,g=0,v=n&&Ut(n);if(r){var b=a.havingStyle(a.style.sup());s=se(r,b,a),v||(p=l.height-b.fontMetrics().supDrop*b.sizeMultiplier/a.sizeMultiplier)}if(i){var A=a.havingStyle(a.style.sub());u=se(i,A,a),v||(g=l.depth+A.fontMetrics().subDrop*A.sizeMultiplier/a.sizeMultiplier)}var N;a.style===F.DISPLAY?N=m.sup1:a.style.cramped?N=m.sup3:N=m.sup2;var M=a.sizeMultiplier,x=O(.5/m.ptPerEm/M),y=null;if(u){var w=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");if(l instanceof $a||w){var j;y=O(-((j=l.italic)!=null?j:0))}}var $;if(s&&u){p=Math.max(p,N,s.depth+.25*m.xHeight),g=Math.max(g,m.sub2);var B=m.defaultRuleThickness,C=4*B;if(p-s.depth-(u.height-g)<C){g=C-(p-s.depth)+u.height;var U=.8*m.xHeight-(p-s.depth);U>0&&(p+=U,g-=U)}var L=[{type:"elem",elem:u,shift:g,marginRight:x,marginLeft:y},{type:"elem",elem:s,shift:-p,marginRight:x}];$=ie({positionType:"individualShift",children:L})}else if(u){g=Math.max(g,m.sub1,u.height-.8*m.xHeight);var Y=[{type:"elem",elem:u,marginLeft:y,marginRight:x}];$=ie({positionType:"shift",positionData:g,children:Y})}else if(s)p=Math.max(p,N,s.depth+.25*m.xHeight),$=ie({positionType:"shift",positionData:-p,children:[{type:"elem",elem:s,marginRight:x}]});else throw new Error("supsub must have either sup or sub.");var be=Cc(l,"right")||"mord";return D([be],[l,D(["msupsub"],[$])],a)},mathmlBuilder(e,a){var t=!1,n,r;e.base&&e.base.type==="horizBrace"&&(r=!!e.sup,r===e.base.isOver&&(t=!0,n=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var i=[ge(e.base,a)];e.sub&&i.push(ge(e.sub,a)),e.sup&&i.push(ge(e.sup,a));var l;if(t)l=n?"mover":"munder";else if(e.sub)if(e.sup){var m=e.base;m&&m.type==="op"&&m.limits&&a.style===F.DISPLAY||m&&m.type==="operatorname"&&m.alwaysHandleSupSub&&(a.style===F.DISPLAY||m.limits)?l="munderover":l="msubsup"}else{var u=e.base;u&&u.type==="op"&&u.limits&&(a.style===F.DISPLAY||u.alwaysHandleSupSub)||u&&u.type==="operatorname"&&u.alwaysHandleSupSub&&(u.limits||a.style===F.DISPLAY)?l="munder":l="msub"}else{var s=e.base;s&&s.type==="op"&&s.limits&&(a.style===F.DISPLAY||s.alwaysHandleSupSub)||s&&s.type==="operatorname"&&s.alwaysHandleSupSub&&(s.limits||a.style===F.DISPLAY)?l="mover":l="msup"}return new _(l,i)}});Jn({type:"atom",htmlBuilder(e,a){return Wu(e.text,e.mode,a,["m"+e.family])},mathmlBuilder(e,a){var t=new _("mo",[Ka(e.text,e.mode)]);if(e.family==="bin"){var n=td(e,a);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else e.family==="punct"?t.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&t.setAttribute("stretchy","false");return t}});var _p={mi:"italic",mn:"normal",mtext:"normal"};Jn({type:"mathord",htmlBuilder(e,a){return is(e,a)},mathmlBuilder(e,a){var t=new _("mi",[Ka(e.text,e.mode,a)]),n=td(e,a)||"italic";return n!==_p[t.type]&&t.setAttribute("mathvariant",n),t}});Jn({type:"textord",htmlBuilder(e,a){return is(e,a)},mathmlBuilder(e,a){var t=Ka(e.text,e.mode,a),n=td(e,a)||"normal",r;return e.mode==="text"?r=new _("mtext",[t]):/[0-9]/.test(e.text)?r=new _("mn",[t]):e.text==="\\prime"?r=new _("mo",[t]):r=new _("mi",[t]),n!==_p[r.type]&&r.setAttribute("mathvariant",n),r}});var po={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},ho={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Jn({type:"spacing",htmlBuilder(e,a){if(ho.hasOwnProperty(e.text)){var t=ho[e.text].className||"";if(e.mode==="text"){var n=is(e,a);return n.classes.push(t),n}else return D(["mspace",t],[Wu(e.text,e.mode,a)],a)}else{if(po.hasOwnProperty(e.text))return D(["mspace",po[e.text]],[],a);throw new k('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,a){var t;if(ho.hasOwnProperty(e.text))t=new _("mtext",[new He(" ")]);else{if(po.hasOwnProperty(e.text))return new _("mspace");throw new k('Unknown type of space "'+e.text+'"')}return t}});var j1=()=>{var e=new _("mtd",[]);return e.setAttribute("width","50%"),e};Jn({type:"tag",mathmlBuilder(e,a){var t=new _("mtable",[new _("mtr",[j1(),new _("mtd",[zn(e.body,a)]),j1(),new _("mtd",[zn(e.tag,a)])])]);return t.setAttribute("width","100%"),t}});var A1={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},N1={"\\textbf":"textbf","\\textmd":"textmd"},v8={"\\textit":"textit","\\textup":"textup"},q1=(e,a)=>{var t=e.font;if(t){if(A1[t])return a.withTextFontFamily(A1[t]);if(N1[t])return a.withTextFontWeight(N1[t]);if(t==="\\emph")return a.fontShape==="textit"?a.withTextFontShape("textup"):a.withTextFontShape("textit")}else return a;return a.withTextFontShape(v8[t])};H({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0,handler(e,a){var{parser:t,funcName:n}=e,r=a[0];return{type:"text",mode:t.mode,body:Le(r),font:n}},htmlBuilder(e,a){var t=q1(e,a),n=Xe(e.body,t,!0);return D(["mord","text"],n,t)},mathmlBuilder(e,a){var t=q1(e,a);return zn(e.body,t)}});H({type:"underline",names:["\\underline"],numArgs:1,allowedInText:!0,handler(e,a){var{parser:t}=e;return{type:"underline",mode:t.mode,body:a[0]}},htmlBuilder(e,a){var t=se(e.body,a),n=Br("underline-line",a),r=a.fontMetrics().defaultRuleThickness,i=ie({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:n},{type:"kern",size:3*r},{type:"elem",elem:t}]});return D(["mord","underline"],[i],a)},mathmlBuilder(e,a){var t=new _("mo",[new He("‾")]);t.setAttribute("stretchy","true");var n=new _("munder",[ge(e.body,a),t]);return n.setAttribute("accentunder","true"),n}});H({type:"vcenter",names:["\\vcenter"],numArgs:1,argTypes:["original"],allowedInText:!1,handler(e,a){var{parser:t}=e;return{type:"vcenter",mode:t.mode,body:a[0]}},htmlBuilder(e,a){var t=se(e.body,a),n=a.fontMetrics().axisHeight,r=.5*(t.height-n-(t.depth+n));return ie({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]})},mathmlBuilder(e,a){var t=new _("mpadded",[ge(e.body,a)],["vcenter"]);return new _("mrow",[t])}});H({type:"verb",names:["\\verb"],numArgs:0,allowedInText:!0,handler(e,a,t){throw new k("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,a){for(var t=M1(e),n=[],r=a.havingStyle(a.style.text()),i=0;i<t.length;i++){var l=t[i];l==="~"&&(l="\\textasciitilde"),n.push(la(l,"Typewriter-Regular",e.mode,r,["mord","texttt"]))}return D(["mord","text"].concat(r.sizingClasses(a)),np(n),r)},mathmlBuilder(e,a){var t=new He(M1(e)),n=new _("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var M1=e=>e.body.replace(/ /g,e.star?"␣":" "),nn=sp,Op=`[ \r
	]`,g8="\\\\[a-zA-Z@]+",b8="\\\\[^\uD800-\uDFFF]",y8="("+g8+")"+Op+"*",x8=`\\\\(
|[ \r	]+
?)[ \r	]*`,Bc="[̀-ͯ]",S8=new RegExp(Bc+"+$"),z8="("+Op+"+)|"+(x8+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Bc+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Bc+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+y8)+("|"+b8+")");class T1{constructor(a,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=a,this.settings=t,this.tokenRegex=new RegExp(z8,"g"),this.catcodes={"%":14,"~":13}}setCatcode(a,t){this.catcodes[a]=t}lex(){var a=this.input,t=this.tokenRegex.lastIndex;if(t===a.length)return new Ta("EOF",new ha(this,t,t));var n=this.tokenRegex.exec(a);if(n===null||n.index!==t)throw new k("Unexpected character: '"+a[t]+"'",new Ta(a[t],new ha(this,t,t+1)));var r=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[r]===14){var i=a.indexOf(`
`,this.tokenRegex.lastIndex);return i===-1?(this.tokenRegex.lastIndex=a.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=i+1,this.lex()}return new Ta(r,new ha(this,t,this.tokenRegex.lastIndex))}}class w8{constructor(a,t){a===void 0&&(a={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=a,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new k("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var a=this.undefStack.pop();for(var t in a)a.hasOwnProperty(t)&&(a[t]==null?delete this.current[t]:this.current[t]=a[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(a){return this.current.hasOwnProperty(a)||this.builtins.hasOwnProperty(a)}get(a){return this.current.hasOwnProperty(a)?this.current[a]:this.builtins[a]}set(a,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][a];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][a]=t)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(a)&&(i[a]=this.current[a])}t==null?delete this.current[a]:this.current[a]=t}}var E8=Ap;h("\\noexpand",function(e){var a=e.popToken();return e.isExpandable(a.text)&&(a.noexpand=!0,a.treatAsRelax=!0),{tokens:[a],numArgs:0}});h("\\expandafter",function(e){var a=e.popToken();return e.expandOnce(!0),{tokens:[a],numArgs:0}});h("\\@firstoftwo",function(e){var a=e.consumeArgs(2);return{tokens:a[0],numArgs:0}});h("\\@secondoftwo",function(e){var a=e.consumeArgs(2);return{tokens:a[1],numArgs:0}});h("\\@ifnextchar",function(e){var a=e.consumeArgs(3);e.consumeSpaces();var t=e.future();return a[0].length===1&&a[0][0].text===t.text?{tokens:a[1],numArgs:0}:{tokens:a[2],numArgs:0}});h("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");h("\\TextOrMath",function(e){var a=e.consumeArgs(2);return e.mode==="text"?{tokens:a[0],numArgs:0}:{tokens:a[1],numArgs:0}});var C1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};h("\\char",function(e){var a=e.popToken(),t,n=0;if(a.text==="'")t=8,a=e.popToken();else if(a.text==='"')t=16,a=e.popToken();else if(a.text==="`")if(a=e.popToken(),a.text[0]==="\\")n=a.text.charCodeAt(1);else{if(a.text==="EOF")throw new k("\\char` missing argument");n=a.text.charCodeAt(0)}else t=10;if(t){if(n=C1[a.text],n==null||n>=t)throw new k("Invalid base-"+t+" digit "+a.text);for(var r;(r=C1[e.future().text])!=null&&r<t;)n*=t,n+=r,e.popToken()}return"\\@char{"+n+"}"});var ld=(e,a,t,n)=>{var r=e.consumeArg().tokens;if(r.length!==1)throw new k("\\newcommand's first argument must be a macro name");var i=r[0].text,l=e.isDefined(i);if(l&&!a)throw new k("\\newcommand{"+i+"} attempting to redefine "+(i+"; use \\renewcommand"));if(!l&&!t)throw new k("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var s=0;if(r=e.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var u="",m=e.expandNextToken();m.text!=="]"&&m.text!=="EOF";)u+=m.text,m=e.expandNextToken();if(!u.match(/^\s*[0-9]+\s*$/))throw new k("Invalid number of arguments: "+u);s=parseInt(u),r=e.consumeArg().tokens}return l&&n||e.macros.set(i,{tokens:r,numArgs:s}),""};h("\\newcommand",e=>ld(e,!1,!0,!1));h("\\renewcommand",e=>ld(e,!0,!1,!1));h("\\providecommand",e=>ld(e,!0,!0,!0));h("\\message",e=>{var a=e.consumeArgs(1)[0];return console.log(a.reverse().map(t=>t.text).join("")),""});h("\\errmessage",e=>{var a=e.consumeArgs(1)[0];return console.error(a.reverse().map(t=>t.text).join("")),""});h("\\show",e=>{var a=e.popToken(),t=a.text;return console.log(a,e.macros.get(t),nn[t],Ae.math[t],Ae.text[t]),""});h("\\bgroup","{");h("\\egroup","}");h("~","\\nobreakspace");h("\\lq","`");h("\\rq","'");h("\\aa","\\r a");h("\\AA","\\r A");h("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");h("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");h("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");h("ℬ","\\mathscr{B}");h("ℰ","\\mathscr{E}");h("ℱ","\\mathscr{F}");h("ℋ","\\mathscr{H}");h("ℐ","\\mathscr{I}");h("ℒ","\\mathscr{L}");h("ℳ","\\mathscr{M}");h("ℛ","\\mathscr{R}");h("ℭ","\\mathfrak{C}");h("ℌ","\\mathfrak{H}");h("ℨ","\\mathfrak{Z}");h("\\Bbbk","\\Bbb{k}");h("\\llap","\\mathllap{\\textrm{#1}}");h("\\rlap","\\mathrlap{\\textrm{#1}}");h("\\clap","\\mathclap{\\textrm{#1}}");h("\\mathstrut","\\vphantom{(}");h("\\underbar","\\underline{\\text{#1}}");h("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');h("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");h("\\ne","\\neq");h("≠","\\neq");h("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");h("∉","\\notin");h("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");h("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");h("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");h("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");h("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");h("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");h("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");h("⟂","\\perp");h("‼","\\mathclose{!\\mkern-0.8mu!}");h("∌","\\notni");h("⌜","\\ulcorner");h("⌝","\\urcorner");h("⌞","\\llcorner");h("⌟","\\lrcorner");h("©","\\copyright");h("®","\\textregistered");h("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');h("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');h("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');h("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');h("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");h("⋮","\\vdots");h("\\varGamma","\\mathit{\\Gamma}");h("\\varDelta","\\mathit{\\Delta}");h("\\varTheta","\\mathit{\\Theta}");h("\\varLambda","\\mathit{\\Lambda}");h("\\varXi","\\mathit{\\Xi}");h("\\varPi","\\mathit{\\Pi}");h("\\varSigma","\\mathit{\\Sigma}");h("\\varUpsilon","\\mathit{\\Upsilon}");h("\\varPhi","\\mathit{\\Phi}");h("\\varPsi","\\mathit{\\Psi}");h("\\varOmega","\\mathit{\\Omega}");h("\\substack","\\begin{subarray}{c}#1\\end{subarray}");h("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");h("\\boxed","\\fbox{$\\displaystyle{#1}$}");h("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");h("\\implies","\\DOTSB\\;\\Longrightarrow\\;");h("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");h("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");h("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var D1={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},j8=new Set(["bin","rel"]);h("\\dots",function(e){var a="\\dotso",t=e.expandAfterFuture().text;return t in D1?a=D1[t]:(t.slice(0,4)==="\\not"||t in Ae.math&&j8.has(Ae.math[t].group))&&(a="\\dotsb"),a});var sd={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};h("\\dotso",function(e){var a=e.future().text;return a in sd?"\\ldots\\,":"\\ldots"});h("\\dotsc",function(e){var a=e.future().text;return a in sd&&a!==","?"\\ldots\\,":"\\ldots"});h("\\cdots",function(e){var a=e.future().text;return a in sd?"\\@cdots\\,":"\\@cdots"});h("\\dotsb","\\cdots");h("\\dotsm","\\cdots");h("\\dotsi","\\!\\cdots");h("\\dotsx","\\ldots\\,");h("\\DOTSI","\\relax");h("\\DOTSB","\\relax");h("\\DOTSX","\\relax");h("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");h("\\,","\\tmspace+{3mu}{.1667em}");h("\\thinspace","\\,");h("\\>","\\mskip{4mu}");h("\\:","\\tmspace+{4mu}{.2222em}");h("\\medspace","\\:");h("\\;","\\tmspace+{5mu}{.2777em}");h("\\thickspace","\\;");h("\\!","\\tmspace-{3mu}{.1667em}");h("\\negthinspace","\\!");h("\\negmedspace","\\tmspace-{4mu}{.2222em}");h("\\negthickspace","\\tmspace-{5mu}{.277em}");h("\\enspace","\\kern.5em ");h("\\enskip","\\hskip.5em\\relax");h("\\quad","\\hskip1em\\relax");h("\\qquad","\\hskip2em\\relax");h("\\tag","\\@ifstar\\tag@literal\\tag@paren");h("\\tag@paren","\\tag@literal{({#1})}");h("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new k("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});h("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");h("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");h("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");h("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");h("\\newline","\\\\\\relax");h("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Bp=O(st["Main-Regular"][84][1]-.7*st["Main-Regular"][65][1]);h("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Bp+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");h("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Bp+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");h("\\hspace","\\@ifstar\\@hspacer\\@hspace");h("\\@hspace","\\hskip #1\\relax");h("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");h("\\ordinarycolon",":");h("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");h("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');h("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');h("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');h("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');h("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');h("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');h("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');h("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');h("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');h("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');h("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');h("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');h("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');h("∷","\\dblcolon");h("∹","\\eqcolon");h("≔","\\coloneqq");h("≕","\\eqqcolon");h("⩴","\\Coloneqq");h("\\ratio","\\vcentcolon");h("\\coloncolon","\\dblcolon");h("\\colonequals","\\coloneqq");h("\\coloncolonequals","\\Coloneqq");h("\\equalscolon","\\eqqcolon");h("\\equalscoloncolon","\\Eqqcolon");h("\\colonminus","\\coloneq");h("\\coloncolonminus","\\Coloneq");h("\\minuscolon","\\eqcolon");h("\\minuscoloncolon","\\Eqcolon");h("\\coloncolonapprox","\\Colonapprox");h("\\coloncolonsim","\\Colonsim");h("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");h("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");h("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");h("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");h("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");h("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");h("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");h("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");h("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");h("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");h("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");h("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");h("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");h("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");h("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");h("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");h("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");h("\\nleqq","\\html@mathml{\\@nleqq}{≰}");h("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");h("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");h("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");h("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");h("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");h("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");h("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");h("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");h("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");h("\\imath","\\html@mathml{\\@imath}{ı}");h("\\jmath","\\html@mathml{\\@jmath}{ȷ}");h("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");h("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");h("⟦","\\llbracket");h("⟧","\\rrbracket");h("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");h("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");h("⦃","\\lBrace");h("⦄","\\rBrace");h("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");h("⦵","\\minuso");h("\\darr","\\downarrow");h("\\dArr","\\Downarrow");h("\\Darr","\\Downarrow");h("\\lang","\\langle");h("\\rang","\\rangle");h("\\uarr","\\uparrow");h("\\uArr","\\Uparrow");h("\\Uarr","\\Uparrow");h("\\N","\\mathbb{N}");h("\\R","\\mathbb{R}");h("\\Z","\\mathbb{Z}");h("\\alef","\\aleph");h("\\alefsym","\\aleph");h("\\Alpha","\\mathrm{A}");h("\\Beta","\\mathrm{B}");h("\\bull","\\bullet");h("\\Chi","\\mathrm{X}");h("\\clubs","\\clubsuit");h("\\cnums","\\mathbb{C}");h("\\Complex","\\mathbb{C}");h("\\Dagger","\\ddagger");h("\\diamonds","\\diamondsuit");h("\\empty","\\emptyset");h("\\Epsilon","\\mathrm{E}");h("\\Eta","\\mathrm{H}");h("\\exist","\\exists");h("\\harr","\\leftrightarrow");h("\\hArr","\\Leftrightarrow");h("\\Harr","\\Leftrightarrow");h("\\hearts","\\heartsuit");h("\\image","\\Im");h("\\infin","\\infty");h("\\Iota","\\mathrm{I}");h("\\isin","\\in");h("\\Kappa","\\mathrm{K}");h("\\larr","\\leftarrow");h("\\lArr","\\Leftarrow");h("\\Larr","\\Leftarrow");h("\\lrarr","\\leftrightarrow");h("\\lrArr","\\Leftrightarrow");h("\\Lrarr","\\Leftrightarrow");h("\\Mu","\\mathrm{M}");h("\\natnums","\\mathbb{N}");h("\\Nu","\\mathrm{N}");h("\\Omicron","\\mathrm{O}");h("\\plusmn","\\pm");h("\\rarr","\\rightarrow");h("\\rArr","\\Rightarrow");h("\\Rarr","\\Rightarrow");h("\\real","\\Re");h("\\reals","\\mathbb{R}");h("\\Reals","\\mathbb{R}");h("\\Rho","\\mathrm{P}");h("\\sdot","\\cdot");h("\\sect","\\S");h("\\spades","\\spadesuit");h("\\sub","\\subset");h("\\sube","\\subseteq");h("\\supe","\\supseteq");h("\\Tau","\\mathrm{T}");h("\\thetasym","\\vartheta");h("\\weierp","\\wp");h("\\Zeta","\\mathrm{Z}");h("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");h("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");h("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");h("\\bra","\\mathinner{\\langle{#1}|}");h("\\ket","\\mathinner{|{#1}\\rangle}");h("\\braket","\\mathinner{\\langle{#1}\\rangle}");h("\\Bra","\\left\\langle#1\\right|");h("\\Ket","\\left|#1\\right\\rangle");var Rp=e=>a=>{var t=a.consumeArg().tokens,n=a.consumeArg().tokens,r=a.consumeArg().tokens,i=a.consumeArg().tokens,l=a.macros.get("|"),s=a.macros.get("\\|");a.macros.beginGroup();var u=g=>v=>{e&&(v.macros.set("|",l),r.length&&v.macros.set("\\|",s));var b=g;if(!g&&r.length){var A=v.future();A.text==="|"&&(v.popToken(),b=!0)}return{tokens:b?r:n,numArgs:0}};a.macros.set("|",u(!1)),r.length&&a.macros.set("\\|",u(!0));var m=a.consumeArg().tokens,p=a.expandTokens([...i,...m,...t]);return a.macros.endGroup(),{tokens:p.reverse(),numArgs:0}};h("\\bra@ket",Rp(!1));h("\\bra@set",Rp(!0));h("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");h("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");h("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");h("\\angln","{\\angl n}");h("\\blue","\\textcolor{##6495ed}{#1}");h("\\orange","\\textcolor{##ffa500}{#1}");h("\\pink","\\textcolor{##ff00af}{#1}");h("\\red","\\textcolor{##df0030}{#1}");h("\\green","\\textcolor{##28ae7b}{#1}");h("\\gray","\\textcolor{gray}{#1}");h("\\purple","\\textcolor{##9d38bd}{#1}");h("\\blueA","\\textcolor{##ccfaff}{#1}");h("\\blueB","\\textcolor{##80f6ff}{#1}");h("\\blueC","\\textcolor{##63d9ea}{#1}");h("\\blueD","\\textcolor{##11accd}{#1}");h("\\blueE","\\textcolor{##0c7f99}{#1}");h("\\tealA","\\textcolor{##94fff5}{#1}");h("\\tealB","\\textcolor{##26edd5}{#1}");h("\\tealC","\\textcolor{##01d1c1}{#1}");h("\\tealD","\\textcolor{##01a995}{#1}");h("\\tealE","\\textcolor{##208170}{#1}");h("\\greenA","\\textcolor{##b6ffb0}{#1}");h("\\greenB","\\textcolor{##8af281}{#1}");h("\\greenC","\\textcolor{##74cf70}{#1}");h("\\greenD","\\textcolor{##1fab54}{#1}");h("\\greenE","\\textcolor{##0d923f}{#1}");h("\\goldA","\\textcolor{##ffd0a9}{#1}");h("\\goldB","\\textcolor{##ffbb71}{#1}");h("\\goldC","\\textcolor{##ff9c39}{#1}");h("\\goldD","\\textcolor{##e07d10}{#1}");h("\\goldE","\\textcolor{##a75a05}{#1}");h("\\redA","\\textcolor{##fca9a9}{#1}");h("\\redB","\\textcolor{##ff8482}{#1}");h("\\redC","\\textcolor{##f9685d}{#1}");h("\\redD","\\textcolor{##e84d39}{#1}");h("\\redE","\\textcolor{##bc2612}{#1}");h("\\maroonA","\\textcolor{##ffbde0}{#1}");h("\\maroonB","\\textcolor{##ff92c6}{#1}");h("\\maroonC","\\textcolor{##ed5fa6}{#1}");h("\\maroonD","\\textcolor{##ca337c}{#1}");h("\\maroonE","\\textcolor{##9e034e}{#1}");h("\\purpleA","\\textcolor{##ddd7ff}{#1}");h("\\purpleB","\\textcolor{##c6b9fc}{#1}");h("\\purpleC","\\textcolor{##aa87ff}{#1}");h("\\purpleD","\\textcolor{##7854ab}{#1}");h("\\purpleE","\\textcolor{##543b78}{#1}");h("\\mintA","\\textcolor{##f5f9e8}{#1}");h("\\mintB","\\textcolor{##edf2df}{#1}");h("\\mintC","\\textcolor{##e0e5cc}{#1}");h("\\grayA","\\textcolor{##f6f7f7}{#1}");h("\\grayB","\\textcolor{##f0f1f2}{#1}");h("\\grayC","\\textcolor{##e3e5e6}{#1}");h("\\grayD","\\textcolor{##d6d8da}{#1}");h("\\grayE","\\textcolor{##babec2}{#1}");h("\\grayF","\\textcolor{##888d93}{#1}");h("\\grayG","\\textcolor{##626569}{#1}");h("\\grayH","\\textcolor{##3b3e40}{#1}");h("\\grayI","\\textcolor{##21242c}{#1}");h("\\kaBlue","\\textcolor{##314453}{#1}");h("\\kaGreen","\\textcolor{##71B307}{#1}");var Up={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class A8{constructor(a,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(a),this.macros=new w8(E8,t.macros),this.mode=n,this.stack=[]}feed(a){this.lexer=new T1(a,this.settings)}switchMode(a){this.mode=a}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(a){this.stack.push(a)}pushTokens(a){this.stack.push(...a)}scanArgument(a){var t,n,r;if(a){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg(["]"])}else({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new Ta("EOF",n.loc)),this.pushTokens(r),new Ta("",ha.range(t,n))}consumeSpaces(){for(;;){var a=this.future();if(a.text===" ")this.stack.pop();else break}}consumeArg(a){var t=[],n=a&&a.length>0;n||this.consumeSpaces();var r=this.future(),i,l=0,s=0;do{if(i=this.popToken(),t.push(i),i.text==="{")++l;else if(i.text==="}"){if(--l,l===-1)throw new k("Extra }",i)}else if(i.text==="EOF")throw new k("Unexpected end of input in a macro argument, expected '"+(a&&n?a[s]:"}")+"'",i);if(a&&n)if((l===0||l===1&&a[s]==="{")&&i.text===a[s]){if(++s,s===a.length){t.splice(-s,s);break}}else s=0}while(l!==0||n);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:i}}consumeArgs(a,t){if(t){if(t.length!==a+1)throw new k("The length of delimiters doesn't match the number of args!");for(var n=t[0],r=0;r<n.length;r++){var i=this.popToken();if(n[r]!==i.text)throw new k("Use of the macro doesn't match its definition",i)}}for(var l=[],s=0;s<a;s++)l.push(this.consumeArg(t&&t[s+1]).tokens);return l}countExpansion(a){if(this.expansionCount+=a,this.expansionCount>this.settings.maxExpand)throw new k("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(a){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||a&&r.unexpandable){if(a&&r==null&&n[0]==="\\"&&!this.isDefined(n))throw new k("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var i=r.tokens,l=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){i=i.slice();for(var s=i.length-1;s>=0;--s){var u=i[s];if(u.text==="#"){if(s===0)throw new k("Incomplete placeholder at end of macro body",u);if(u=i[--s],u.text==="#")i.splice(s+1,1);else if(/^[1-9]$/.test(u.text))i.splice(s,2,...l[+u.text-1]);else throw new k("Not a valid argument number",u)}}}return this.pushTokens(i),i.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var a=this.stack.pop();return a.treatAsRelax&&(a.text="\\relax"),a}}expandMacro(a){return this.macros.has(a)?this.expandTokens([new Ta(a)]):void 0}expandTokens(a){var t=[],n=this.stack.length;for(this.pushTokens(a);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(a){var t=this.expandMacro(a);return t&&t.map(n=>n.text).join("")}_getExpansion(a){var t=this.macros.get(a);if(t==null)return t;if(a.length===1){var n=this.lexer.catcodes[a];if(n!=null&&n!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var i=0;if(r.includes("#"))for(var l=r.replace(/##/g,"");l.includes("#"+(i+1));)++i;for(var s=new T1(r,this.settings),u=[],m=s.lex();m.text!=="EOF";)u.push(m),m=s.lex();u.reverse();var p={tokens:u,numArgs:i};return p}return r}isDefined(a){return this.macros.has(a)||nn.hasOwnProperty(a)||Ae.math.hasOwnProperty(a)||Ae.text.hasOwnProperty(a)||Up.hasOwnProperty(a)}isExpandable(a){var t=this.macros.get(a);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:nn.hasOwnProperty(a)&&!nn[a].primitive}}var $1=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,_l=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),vo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},k1={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class fs{constructor(a,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new A8(a,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(a,t){if(t===void 0&&(t=!0),this.fetch().text!==a)throw new k("Expected '"+a+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(a){this.mode=a,this.gullet.switchMode(a)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var a=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),a}finally{this.gullet.endGroups()}}subparse(a){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Ta("}")),this.gullet.pushTokens(a);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(a,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(fs.endOfExpression.has(r.text)||t&&r.text===t||a&&nn[r.text]&&nn[r.text].infix)break;var i=this.parseAtom(t);if(i){if(i.type==="internal")continue}else break;n.push(i)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(a){for(var t=-1,n,r=0;r<a.length;r++){var i=a[r];if(i.type==="infix"){if(t!==-1)throw new k("only one infix operator per group",i.token);t=r,n=i.replaceWith}}if(t!==-1&&n){var l,s,u=a.slice(0,t),m=a.slice(t+1);u.length===1&&u[0].type==="ordgroup"?l=u[0]:l={type:"ordgroup",mode:this.mode,body:u},m.length===1&&m[0].type==="ordgroup"?s=m[0]:s={type:"ordgroup",mode:this.mode,body:m};var p;return n==="\\\\abovefrac"?p=this.callFunction(n,[l,a[t],s],[]):p=this.callFunction(n,[l,s],[]),[p]}else return a}handleSupSubscript(a){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do{var i;r=this.parseGroup(a)}while(((i=r)==null?void 0:i.type)==="internal");if(!r)throw new k("Expected group after '"+n+"'",t);return r}formatUnsupportedCmd(a){for(var t=[],n=0;n<a.length;n++)t.push({type:"textord",mode:"text",text:a[n]});var r={type:"text",mode:this.mode,body:t},i={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return i}parseAtom(a){var t=this.parseGroup("atom",a);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var n,r;;){this.consumeSpaces();var i=this.fetch();if(i.text==="\\limits"||i.text==="\\nolimits"){if(t&&t.type==="op")t.limits=i.text==="\\limits",t.alwaysHandleSupSub=!0;else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=i.text==="\\limits");else throw new k("Limit controls must follow a math operator",i);this.consume()}else if(i.text==="^"){if(n)throw new k("Double superscript",i);n=this.handleSupSubscript("superscript")}else if(i.text==="_"){if(r)throw new k("Double subscript",i);r=this.handleSupSubscript("subscript")}else if(i.text==="'"){if(n)throw new k("Double superscript",i);var l={type:"textord",mode:this.mode,text:"\\prime"},s=[l];for(this.consume();this.fetch().text==="'";)s.push(l),this.consume();this.fetch().text==="^"&&s.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:s}}else if(_l[i.text]){var u=$1.test(i.text),m=[];for(m.push(new Ta(_l[i.text])),this.consume();;){var p=this.fetch().text;if(!_l[p]||$1.test(p)!==u)break;m.unshift(new Ta(_l[p])),this.consume()}var g=this.subparse(m);u?r={type:"ordgroup",mode:"math",body:g}:n={type:"ordgroup",mode:"math",body:g}}else break}return n&&r?{type:"supsub",mode:this.mode,base:t,sup:n,sub:r}:n?{type:"supsub",mode:this.mode,base:t,sup:n}:r?{type:"supsub",mode:this.mode,base:t,sub:r}:t}parseFunction(a,t){var n=this.fetch(),r=n.text,i=nn[r];if(!i)return null;if(this.consume(),t&&t!=="atom"&&!i.allowedInArgument)throw new k("Got function '"+r+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!i.allowedInText)throw new k("Can't use function '"+r+"' in text mode",n);if(this.mode==="math"&&i.allowedInMath===!1)throw new k("Can't use function '"+r+"' in math mode",n);var{args:l,optArgs:s}=this.parseArguments(r,i);return this.callFunction(r,l,s,n,a)}callFunction(a,t,n,r,i){var l={funcName:a,parser:this,token:r,breakOnTokenText:i},s=nn[a];if(s&&s.handler)return s.handler(l,t,n);throw new k("No function handler for "+a)}parseArguments(a,t){var n,r=(n=t.numOptionalArgs)!=null?n:0,i=t.numArgs+r;if(i===0)return{args:[],optArgs:[]};for(var l=[],s=[],u=0;u<i;u++){var m,p=(m=t.argTypes)==null?void 0:m[u],g=u<r;("primitive"in t&&t.primitive&&p==null||t.type==="sqrt"&&u===1&&s[0]==null)&&(p="primitive");var v=this.parseGroupOfType("argument to '"+a+"'",p,g);if(g)s.push(v);else if(v!=null)l.push(v);else throw new k("Null argument, please report this as a bug")}return{args:l,optArgs:s}}parseGroupOfType(a,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var r=this.parseArgumentGroup(n,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text",resetFont:!0}:null}case"raw":{var i=this.parseStringGroup(n);return i!=null?{type:"raw",mode:"text",string:i.text}:null}case"primitive":{if(n)throw new k("A primitive argument cannot be optional");var l=this.parseGroup(a);if(l==null)throw new k("Expected group as "+a,this.fetch());return l}case"original":case void 0:return this.parseArgumentGroup(n);default:throw new k("Unknown group type as "+a,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(a){var t=this.gullet.scanArgument(a);if(t==null)return null;for(var n="",r;(r=this.fetch()).text!=="EOF";)n+=r.text,this.consume();return this.consume(),t.text=n,t}parseRegexGroup(a,t){for(var n=this.fetch(),r=n,i="",l;(l=this.fetch()).text!=="EOF"&&a.test(i+l.text);)r=l,i+=r.text,this.consume();if(i==="")throw new k("Invalid "+t+": '"+n.text+"'",n);return n.range(r,i)}parseColorGroup(a){var t=this.parseStringGroup(a);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new k("Invalid color: '"+t.text+"'",t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(a){var t,n=!1;if(this.gullet.consumeSpaces(),!a&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup(a),!t)return null;!a&&t.text.length===0&&(t.text="0pt",n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new k("Invalid size: '"+t.text+"'",t);var i={number:+(r[1]+r[2]),unit:r[3]};if(!I2(i))throw new k("Invalid unit: '"+i.unit+"'",t);return{type:"size",mode:this.mode,value:i,isBlank:n}}parseUrlGroup(a){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup(a);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(a,t){var n=this.gullet.scanArgument(a);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var i=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var l={type:"ordgroup",mode:this.mode,loc:n.loc,body:i};return t&&this.switchMode(r),l}parseGroup(a,t){var n=this.fetch(),r=n.text,i;if(r==="{"||r==="\\begingroup"){this.consume();var l=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var s=this.parseExpression(!1,l),u=this.fetch();this.expect(l),this.gullet.endGroup(),i={type:"ordgroup",mode:this.mode,loc:ha.range(n,u),body:s,semisimple:r==="\\begingroup"||void 0}}else if(i=this.parseFunction(t,a)||this.parseSymbol(),i==null&&r[0]==="\\"&&!Up.hasOwnProperty(r)){if(this.settings.throwOnError)throw new k("Undefined control sequence: "+r,n);i=this.formatUnsupportedCmd(r),this.consume()}return i}formLigatures(a){for(var t=a.length-1,n=0;n<t;++n){var r=a[n];if(r.type==="textord"){var i=r.text,l=a[n+1];if(!(!l||l.type!=="textord")){if(i==="-"&&l.text==="-"){var s=a[n+2];n+1<t&&s&&s.type==="textord"&&s.text==="-"?(a.splice(n,3,{type:"textord",mode:"text",loc:ha.range(r,s),text:"---"}),t-=2):(a.splice(n,2,{type:"textord",mode:"text",loc:ha.range(r,l),text:"--"}),t-=1)}(i==="'"||i==="`")&&l.text===i&&(a.splice(n,2,{type:"textord",mode:"text",loc:ha.range(r,l),text:i+i}),t-=1)}}}}parseSymbol(){var a=this.fetch(),t=a.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)==="*";if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new k(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:r}}k1.hasOwnProperty(t[0])&&!Ae[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',a),t=k1[t[0]]+t.slice(1));var i=S8.exec(t);i&&(t=t.substring(0,i.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var l;if(Ae[this.mode][t]){this.settings.strict&&this.mode==="math"&&wc.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',a);var s=Ae[this.mode][t].group,u=ha.range(a),m;Dv(s)?m={type:"atom",mode:this.mode,family:s,loc:u,text:t}:m={type:s,mode:this.mode,loc:u,text:t},l=m}else if(t.charCodeAt(0)>=128)this.settings.strict&&(P2(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',a):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),a)),l={type:"textord",mode:"text",loc:ha.range(a),text:t};else return null;if(this.consume(),i)for(var p=0;p<i[0].length;p++){var g=i[0][p];if(!vo[g])throw new k("Unknown accent ' "+g+"'",a);var v=vo[g][this.mode]||vo[g].text;if(!v)throw new k("Accent "+g+" unsupported in "+this.mode+" mode",a);l={type:"accent",mode:this.mode,loc:ha.range(a),label:v,isStretchy:!1,isShifty:!0,base:l}}return l}}fs.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var od=function(a,t){if(!(typeof a=="string"||a instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new fs(a,t);delete n.gullet.macros.current["\\df@tag"];var r=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new k("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:n.subparse([new Ta("\\df@tag")])}]}return r},Lp=function(a,t,n){t.textContent="";var r=cd(a,n).toNode();t.appendChild(r)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Lp=function(){throw new k("KaTeX doesn't work in quirks mode.")});var N8=function(a,t){var n=cd(a,t).toMarkup();return n},q8=function(a,t){var n=new Ku(t);return od(a,n)},Hp=function(a,t,n){if(n.throwOnError||!(a instanceof k))throw a;var r=D(["katex-error"],[new $a(t)]);return r.setAttribute("title",a.toString()),r.setAttribute("style","color:"+n.errorColor),r},cd=function(a,t){var n=new Ku(t);try{var r=od(a,n);return Ev(r,a,n)}catch(i){return Hp(i,a,n)}},M8=function(a,t){var n=new Ku(t);try{var r=od(a,n);return jv(r,a,n)}catch(i){return Hp(i,a,n)}},T8="0.17.0",C8={Span:Fr,Anchor:ns,SymbolNode:$a,SvgNode:Bt,PathNode:xn,LineNode:zc},D8={version:T8,render:Lp,renderToString:N8,ParseError:k,SETTINGS_SCHEMA:yc,__parse:q8,__renderToDomTree:cd,__renderToHTMLTree:M8,__setFontMetrics:iv,__defineSymbol:c,__defineFunction:H,__defineMacro:h,__domTree:C8};const _1=/(\\\([\s\S]+?\\\))|(\$[^$\n]+\$)|(!\[[^\]]*\]\([^)]+\))|(\[[^\]]+\]\([^)]+\))|(`[^`]+`)|(\*\*[^*]+\*\*)|(__[^_]+__)|(\*[^*]+\*)|(_[^_]+_)/g;function $8(e,a=!1){return D8.renderToString(e,{displayMode:a,throwOnError:!1,strict:!1,trust:!1})}function Rc({tex:e,displayMode:a=!1}){const t=$8(e,a);return a?o.jsx("div",{className:"nebula-math my-7 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center",dangerouslySetInnerHTML:{__html:t}}):o.jsx("span",{className:"mx-0.5 whitespace-nowrap align-baseline",dangerouslySetInnerHTML:{__html:t}})}function k8(e){return e.startsWith("/assets/latex/")&&e.endsWith(".svg")}function Gp({src:e,alt:a}){return k8(e)?o.jsxs("figure",{"data-graph":"latex",className:"mx-auto my-8 max-w-2xl rounded-2xl border border-white/10 bg-white p-4 shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.35)]",children:[o.jsx("img",{src:e,alt:a,loading:"lazy",className:"mx-auto max-h-[420px] w-full object-contain"}),a&&o.jsx("figcaption",{className:"mt-3 text-center text-xs leading-relaxed text-slate-700",children:a})]}):o.jsx("img",{src:e,alt:a,loading:"lazy",className:"my-6 w-full rounded-2xl border border-white/10"})}function ri(e){const a=[];let t=0,n=0,r;for(;(r=_1.exec(e))!==null;){r.index>t&&a.push(e.slice(t,r.index));const i=r[0];if(i.startsWith("\\("))a.push(o.jsx(Rc,{tex:i.slice(2,-2)},n));else if(i.startsWith("$"))a.push(o.jsx(Rc,{tex:i.slice(1,-1)},n));else if(i.startsWith("![")){const l=/!\[([^\]]*)\]\(([^)]+)\)/.exec(i);a.push(o.jsx(Gp,{src:l[2],alt:l[1]},n))}else if(i.startsWith("[")){const l=/\[([^\]]+)\]\(([^)]+)\)/.exec(i),s=l[2],u=/^https?:\/\//.test(s);a.push(o.jsx("a",{href:s,className:"font-medium text-link underline underline-offset-4 transition-colors hover:text-link",...u?{target:"_blank",rel:"noreferrer"}:{},children:l[1]},n))}else i.startsWith("`")?a.push(o.jsx("code",{className:"rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground",children:i.slice(1,-1)},n)):i.startsWith("**")||i.startsWith("__")?a.push(o.jsx("strong",{className:"font-semibold text-foreground",children:i.slice(2,-2)},n)):a.push(o.jsx("em",{children:i.slice(1,-1)},n));t=_1.lastIndex,n++}return t<e.length&&a.push(e.slice(t)),a}const O1=e=>e.trim()==="",_8=e=>/^#{1,6}\s+/.test(e),go=e=>e.trim().startsWith("```"),bo=e=>e.trim().startsWith(">"),yo=e=>/^\s*[-*]\s+/.test(e),xo=e=>/^\s*\d+\.\s+/.test(e),B1=e=>/^(-{3,}|\*{3,}|_{3,})$/.test(e.trim());function O8(e){const a=e.replace(/\r\n/g,`
`).split(`
`),t=[];let n=0,r=0;for(;n<a.length;){const i=a[n];if(O1(i)){n++;continue}if(i.trim().startsWith("$$")||i.trim().startsWith("\\[")){const m=i.trim().startsWith("$$")?"$$":"\\[",p=m==="$$"?"$$":"\\]",g=[];let v=i.trim().slice(m.length);if(v.endsWith(p)&&v.length>p.length)g.push(v.slice(0,-p.length)),n++;else for(v&&g.push(v),n++;n<a.length;){if(v=a[n].trim(),v.endsWith(p)){g.push(v.slice(0,-p.length)),n++;break}g.push(a[n]),n++}t.push(o.jsx(Rc,{tex:g.join(`
`).trim(),displayMode:!0},r++));continue}const l=/^!\[([^\]]*)\]\(([^)]+)\)\s*$/.exec(i.trim());if(l){t.push(o.jsx(Gp,{src:l[2],alt:l[1]},r++)),n++;continue}if(go(i)){const m=[];for(n++;n<a.length&&!go(a[n]);)m.push(a[n]),n++;n++,t.push(o.jsx("pre",{className:"my-6 w-full max-w-full overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm",children:o.jsx("code",{className:"block min-w-0 whitespace-pre-wrap break-words font-mono text-foreground/90",children:m.join(`
`)})},r++));continue}const s=/^(#{1,6})\s+(.*)$/.exec(i);if(s){const m=s[1].length,p=ri(s[2].trim());m<=2?t.push(o.jsx("h2",{className:"mt-12 mb-4 border-l-2 border-action pl-4 font-display text-2xl font-semibold nebula-heading-text md:text-3xl",children:p},r++)):m===3?t.push(o.jsx("h3",{className:"mt-10 mb-3 font-display text-xl font-semibold nebula-subheading-text",children:p},r++)):t.push(o.jsx("h4",{className:"mt-8 mb-2 font-display text-lg font-semibold text-muted-foreground",children:p},r++)),n++;continue}if(B1(i)){t.push(o.jsx("hr",{className:"my-10 border-white/10"},r++)),n++;continue}if(bo(i)){const m=[];for(;n<a.length&&bo(a[n]);)m.push(a[n].replace(/^\s*>\s?/,"")),n++;t.push(o.jsx("blockquote",{className:"my-6 border-l-2 border-action/70 bg-white/[0.02] py-2 pr-4 pl-5 text-foreground/80 italic",children:ri(m.join(" "))},r++));continue}if(yo(i)){const m=[];for(;n<a.length&&yo(a[n]);)m.push(a[n].replace(/^\s*[-*]\s+/,"")),n++;t.push(o.jsx("ul",{className:"my-5 space-y-2 pl-1",children:m.map((p,g)=>o.jsxs("li",{className:"flex items-start gap-3 text-foreground/85",children:[o.jsx("span",{className:"mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-action"}),o.jsx("span",{children:ri(p)})]},g))},r++));continue}if(xo(i)){const m=[];for(;n<a.length&&xo(a[n]);)m.push(a[n].replace(/^\s*\d+\.\s+/,"")),n++;t.push(o.jsx("ol",{className:"my-5 space-y-2",children:m.map((p,g)=>o.jsxs("li",{className:"flex items-start gap-3 text-foreground/85",children:[o.jsxs("span",{className:"font-display text-sm font-semibold text-action",children:[g+1,"."]}),o.jsx("span",{children:ri(p)})]},g))},r++));continue}const u=[];for(;n<a.length&&!O1(a[n])&&!_8(a[n])&&!go(a[n])&&!bo(a[n])&&!yo(a[n])&&!xo(a[n])&&!B1(a[n]);)u.push(a[n]),n++;t.push(o.jsx("p",{className:"my-5 leading-relaxed text-foreground/85",children:ri(u.join(" "))},r++))}return t}function B8({markdown:e}){return o.jsx(o.Fragment,{children:O8(e)})}const R8=`---
title: Álgebra Lineal en la universidad: qué estudiar primero y qué errores penalizan más
date: 2026-06-15
updated: 2026-06-15
description: Guía para estudiar Álgebra Lineal en la universidad: orden de temas, matrices, espacios vectoriales, diagonalización y errores frecuentes.
tag: Álgebra Lineal
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: matrices-determinantes-sistemas-ecuaciones-guia,como-estudiar-matematicas-sin-memorizar,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Álgebra Lineal suele ser una de las primeras asignaturas donde muchos estudiantes universitarios descubren que saber operar no basta. Puedes hacer reducciones por filas correctamente y, aun así, no entender qué significa una base, una dimensión o una aplicación lineal.

La forma más eficiente de estudiar Álgebra Lineal es construir el temario en capas. Si saltas directamente a diagonalización sin dominar sistemas, rango y subespacios, cada ejercicio parece distinto aunque use las mismas ideas.

## Qué estudiar primero

El orden recomendado es:

1. Sistemas de ecuaciones y método de Gauss.
2. Matrices, rango y operaciones elementales.
3. Determinantes e inversa.
4. Vectores, combinaciones lineales y dependencia.
5. Espacios vectoriales, subespacios, bases y dimensión.
6. Aplicaciones lineales, núcleo e imagen.
7. Autovalores, autovectores y diagonalización.

Este orden no es casual. El método de Gauss aparece en casi todo: resolver sistemas, calcular rango, estudiar independencia, encontrar bases, hallar el núcleo de una aplicación y comprobar diagonalización.

## La idea central: rango, dimensión y libertad

Una matriz no es solo una tabla de números. Resume relaciones entre variables. El rango mide cuánta información independiente hay.

Si un sistema tiene matriz de coeficientes \\(A\\) y matriz ampliada \\((A|b)\\), el criterio de compatibilidad se expresa así:

$$
\\operatorname{rg}(A)=\\operatorname{rg}(A|b)
$$

Si además ese rango coincide con el número de incógnitas, el sistema tiene solución única. Si es menor, hay infinitas soluciones.

Esta idea conecta con bases y dimensión: cuantas menos restricciones independientes, más grados de libertad quedan.

## Errores que penalizan mucho

### 1. Hacer Gauss sin justificar operaciones

Las operaciones elementales por filas son válidas, pero deben ser claras. Cambiar filas, sumar múltiplos o multiplicar por escalares no nulos no cambia el conjunto de soluciones de forma arbitraria. Si el examen pide razonamiento, no basta con escribir matrices sueltas.

### 2. Confundir filas con columnas

La independencia de columnas y la independencia de filas están relacionadas por el rango, pero no siempre responden a la misma pregunta del enunciado. Si te piden si unos vectores generan un subespacio, identifica primero si esos vectores están colocados como filas o columnas.

### 3. Usar determinantes cuando no toca

El determinante solo existe para matrices cuadradas. Además, no siempre es la herramienta más eficiente. Para estudiar un conjunto de vectores en \\(\\mathbb{R}^4\\), muchas veces Gauss es más claro que buscar determinantes menores sin orden.

### 4. No distinguir base de conjunto generador

Una base debe cumplir dos condiciones: generar el espacio y ser linealmente independiente. Un conjunto con demasiados vectores puede generar, pero no ser base. Un conjunto con pocos vectores puede ser independiente, pero no generar.

### 5. Diagonalizar sin comprobar

Para diagonalizar una matriz \\(A\\), necesitas suficientes autovectores independientes. No basta con encontrar autovalores.

$$
A=PDP^{-1}
$$

Aquí \\(D\\) contiene los autovalores y \\(P\\) contiene autovectores independientes. Si \\(P\\) no es invertible, la diagonalización falla.

## Ejercicio resuelto: dependencia lineal

Estudia si los vectores \\(v_1=(1,2,1)\\), \\(v_2=(2,4,2)\\) y \\(v_3=(0,1,1)\\) son linealmente independientes.

Planteamos:

$$
a v_1+b v_2+c v_3=0
$$

Como \\(v_2=2v_1\\), ya existe una relación no trivial:

$$
-2v_1+v_2+0v_3=0
$$

Por tanto, el conjunto es linealmente dependiente. No hace falta seguir operando: detectar relaciones evidentes ahorra tiempo.

## Cómo estudiar para examen

Cada bloque debe acabar con tres tipos de ejercicios:

- Uno mecánico para asegurar técnica.
- Uno conceptual para explicar qué significa el resultado.
- Uno mixto de examen donde tengas que elegir herramienta.

Por ejemplo, después de estudiar rango, no hagas solo reducciones por filas. Pregúntate también qué implica el rango para soluciones, dimensión, independencia o existencia de inversa.

## Checklist antes del examen

Antes del examen deberías poder responder sin mirar apuntes:

- Qué significa que un conjunto sea linealmente independiente.
- Cómo encontrar una base de un subespacio.
- Cuándo una matriz tiene inversa.
- Qué mide el rango.
- Cómo se calcula el núcleo de una aplicación lineal.
- Qué condición permite diagonalizar.

Si alguno de estos puntos solo lo reconoces cuando ves una solución, todavía no está consolidado.

Para trabajar Álgebra Lineal con problemas guiados y corrección de errores, puedes revisar la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,U8=`---
title: Circuitos eléctricos de corriente continua: problemas resueltos de nivel universitario
date: 2026-07-03
updated: 2026-07-03
description: Problemas resueltos de circuitos de corriente continua: ley de Ohm, resistencias equivalentes, Kirchhoff, potencia y errores habituales.
tag: Física
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas,diagramas-cuerpo-libre-metodo-errores-frecuentes,fisica-y-quimica-como-plantear-problemas
image: /favicon.svg
---

Los circuitos eléctricos de corriente continua suelen parecer una lista de fórmulas: ley de Ohm, resistencias en serie, resistencias en paralelo, potencia y leyes de Kirchhoff. Pero los problemas universitarios se aprueban entendiendo qué magnitud se conserva y cómo se reparte la corriente o la tensión.

## Ley de Ohm

La relación básica es:

$$
V=IR
$$

donde \\(V\\) es la diferencia de potencial, \\(I\\) la intensidad y \\(R\\) la resistencia. Esta fórmula no se usa sola: debe aplicarse a un elemento concreto del circuito.

## Problema 1: resistencias en serie

Tres resistencias de \\(2\\,\\Omega\\), \\(4\\,\\Omega\\) y \\(6\\,\\Omega\\) están en serie conectadas a una fuente de \\(24\\,V\\). Calcula la corriente.

En serie, la resistencia equivalente es:

$$
R_{eq}=R_1+R_2+R_3
$$

Por tanto:

$$
R_{eq}=2+4+6=12\\,\\Omega
$$

Aplicamos Ohm al circuito completo:

$$
I=\\frac{V}{R_{eq}}=\\frac{24}{12}=2\\,A
$$

En serie, la corriente es la misma en todas las resistencias.

## Problema 2: resistencias en paralelo

Dos resistencias de \\(6\\,\\Omega\\) y \\(3\\,\\Omega\\) están en paralelo conectadas a \\(12\\,V\\). Calcula la resistencia equivalente y la corriente total.

En paralelo:

$$
\\frac{1}{R_{eq}}=\\frac{1}{R_1}+\\frac{1}{R_2}
$$

Entonces:

$$
\\frac{1}{R_{eq}}=\\frac{1}{6}+\\frac{1}{3}=\\frac{1}{2}
$$

Por tanto:

$$
R_{eq}=2\\,\\Omega
$$

La corriente total:

$$
I=\\frac{12}{2}=6\\,A
$$

En paralelo, la tensión es la misma en cada rama.

## Problema 3: potencia disipada

Una resistencia de \\(8\\,\\Omega\\) conduce una corriente de \\(3\\,A\\). Calcula la potencia.

La potencia puede escribirse como:

$$
P=VI
$$

También:

$$
P=I^2R
$$

Sustituyendo:

$$
P=3^2\\cdot 8=72\\,W
$$

La unidad final debe ser vatios. Si no aparece una unidad de potencia, revisa dimensiones.

## Problema 4: ley de Kirchhoff de tensiones

En una malla con una batería de \\(10\\,V\\) y dos resistencias en serie \\(R_1=2\\,\\Omega\\), \\(R_2=3\\,\\Omega\\), calcula la corriente.

Kirchhoff dice que la suma algebraica de tensiones en una malla cerrada es cero:

$$
10-2I-3I=0
$$

Entonces:

$$
10=5I
$$

Por tanto:

$$
I=2\\,A
$$

Es el mismo resultado que usando resistencia equivalente, pero Kirchhoff prepara problemas más complejos.

## Método para problemas universitarios

Sigue este orden:

1. Identifica nodos y ramas.
2. Marca si hay serie, paralelo o mezcla.
3. Reduce si el circuito lo permite.
4. Si no se puede reducir fácilmente, usa Kirchhoff.
5. Define sentidos de corriente.
6. Escribe ecuaciones y resuelve.
7. Comprueba unidades y signos.

Un signo negativo en una corriente no significa que el problema esté mal: significa que el sentido real es contrario al que supusiste.

## Errores frecuentes

- Tratar resistencias en paralelo como si estuvieran en serie.
- Olvidar que en paralelo la tensión es común.
- Aplicar \\(V=IR\\) al circuito completo cuando \\(R\\) es solo una rama.
- No definir sentido de corrientes antes de Kirchhoff.
- Confundir potencia con energía.

Si estás preparando circuitos dentro de Física I o Electricidad, puedes revisar [clases particulares de Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/) y practicar primero la guía de [cómo plantear problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/).
`,L8=`---
title: Cómo aprobar Cálculo I en primero de Ingeniería: plan de estudio de seis semanas
date: 2026-06-13
updated: 2026-06-13
description: Plan de seis semanas para aprobar Cálculo I en Ingeniería: límites, derivadas, integrales, práctica y simulacros de examen.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,que-son-las-integrales-y-para-que-se-utilizan,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos
image: /favicon.svg
---

Aprobar Cálculo I en primero de Ingeniería no depende solo de hacer muchos ejercicios. Depende de estudiar en el orden correcto, detectar los bloqueos reales y llegar al examen habiendo practicado problemas completos, no solo técnicas sueltas.

Este plan de seis semanas está pensado para estudiantes que tienen poco margen, un temario amplio y la sensación de que cada tema nuevo se apoya en algo que todavía no está firme.

## Antes de empezar: diagnóstico rápido

Dedica una sesión a revisar cuatro bloques:

- Límites y continuidad.
- Derivadas y estudio de funciones.
- Integrales inmediatas, cambio de variable y partes.
- Problemas de examen mezclados.

No busques acertarlo todo. Busca saber dónde se rompe el razonamiento. Un buen diagnóstico separa tres casos: no recuerdas una técnica, no entiendes el concepto o no sabes elegir el método.

## Semana 1: límites, continuidad y lenguaje

El primer objetivo es leer funciones con calma. Trabaja límites laterales, indeterminaciones, continuidad y asíntotas. No memorices listas de límites sin saber qué significan.

Un ejercicio mínimo que debes dominar es:

$$
\\lim_{x\\to 0}\\frac{\\sqrt{1+x}-1}{x}
$$

Racionalizando:

$$
\\frac{\\sqrt{1+x}-1}{x}\\cdot\\frac{\\sqrt{1+x}+1}{\\sqrt{1+x}+1}
=\\frac{1}{\\sqrt{1+x}+1}
$$

Por tanto:

$$
\\lim_{x\\to 0}\\frac{\\sqrt{1+x}-1}{x}=\\frac{1}{2}
$$

La idea importante no es el resultado, sino reconocer la indeterminación y elegir una transformación limpia.

## Semana 2: derivadas con interpretación

En la segunda semana repasa reglas de derivación, derivada implícita, recta tangente, crecimiento y extremos. Cada derivada debe responder a una pregunta: cómo cambia una función, dónde crece, dónde se aplana o dónde cambia de comportamiento.

La recta tangente en \\(x=a\\) se escribe así:

$$
y=f(a)+f'(a)(x-a)
$$

Si esta fórmula parece mecánica, reescríbela en palabras: parto del valor de la función y avanzo con la pendiente local. Esa interpretación evita muchos errores en problemas de aproximación lineal.

## Semana 3: estudio de funciones y problemas completos

Aquí conviene unir límites y derivadas. Practica dominio, cortes, asíntotas, monotonía, extremos, concavidad y representación cualitativa. En Cálculo I, un estudio de función mal ordenado suele costar muchos puntos aunque las derivadas estén bien.

Orden recomendado:

1. Dominio.
2. Simetrías si son evidentes.
3. Cortes con ejes.
4. Límites en puntos críticos e infinito.
5. Derivada primera: crecimiento y extremos.
6. Derivada segunda: concavidad e inflexión.
7. Gráfica coherente con todo lo anterior.

El error más caro es dibujar antes de tener restricciones. La gráfica debe ser consecuencia del análisis, no una intuición.

## Semana 4: integrales sin perderse

La cuarta semana debe centrarse en reconocer patrones. Una integral no se resuelve probando técnicas al azar: primero se mira si es inmediata, si pide cambio de variable, si encaja con integración por partes o si necesita descomposición.

Ejemplo de cambio de variable:

$$
\\int 2x\\cos(x^2)\\,dx
$$

Tomando \\(u=x^2\\), queda \\(du=2x\\,dx\\). Entonces:

$$
\\begin{aligned}
\\int 2x\\cos(x^2)\\,dx
&=\\int \\cos(u)\\,du \\\\
&=\\sin(u)+C \\\\
&=\\sin(x^2)+C
\\end{aligned}
$$

La clave está en ver la derivada de la función interna. Si no buscas esa relación, el cambio parece magia.

## Semana 5: temas finales y mezcla

Según la universidad, esta semana puede incluir integrales impropias, series, aproximaciones o aplicaciones. El objetivo no es abrir temas nuevos sin control, sino mezclar bloques:

- Un límite que usa Taylor o equivalentes.
- Una integral con interpretación geométrica.
- Un problema de optimización con dominio.
- Un estudio de función con asíntotas y extremos.

Haz ejercicios de examen antiguos. Si no los tienes, crea simulacros mezclando dos problemas de cada bloque.

## Semana 6: simulacros y corrección de errores

La última semana no es para releer apuntes. Es para hacer simulacros cronometrados, corregirlos y escribir una lista de errores repetidos.

Clasifica cada fallo:

- Error de concepto.
- Error de elección de método.
- Error algebraico.
- Error de presentación.
- Error por falta de tiempo.

Después decide qué se entrena. No se corrige igual no saber derivar que perder un signo en una matriz de operaciones auxiliares.

## Rutina semanal realista

Una rutina sostenible para aprobar Cálculo I puede ser:

- 3 días de teoría activa y problemas guiados.
- 2 días de problemas sin mirar soluciones.
- 1 día de corrección profunda.
- 1 bloque corto de repaso acumulado.

La corrección profunda es la parte que más alumnos evitan. También es la que más sube la nota.

## Señales de que vas bien

Vas bien cuando puedes explicar qué método usar antes de empezar a operar, cuando detectas dominios y restricciones sin que te lo recuerden, y cuando tus soluciones tienen una línea narrativa clara: planteamiento, método, cálculo e interpretación.

Si necesitas convertir este plan en un calendario adaptado a tu asignatura concreta, revisa la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/) o [cuéntanos tu caso](/contacto/).
`,H8=`---
title: Cómo aprobar Estadística en Psicología sin tener una buena base matemática
date: 2026-07-08
updated: 2026-07-08
description: Guía para aprobar Estadística en Psicología aunque tengas poca base matemática: conceptos, pruebas, interpretación y plan de estudio.
tag: Psicología
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: que-prueba-estadistica-utilizar-guia-test-correcto,p-valor-intervalo-confianza-tamano-efecto-ejemplo,errores-comunes-inferencia-estadistica
image: /favicon.svg
---

Aprobar Estadística en Psicología no exige ser brillante en matemáticas. Exige entender qué pregunta plantea cada análisis, qué significan los datos y cómo se interpreta el resultado en lenguaje psicológico.

El problema de muchos estudiantes no es la falta de capacidad. Es que intentan estudiar Estadística como una lista de fórmulas sueltas: media, desviación típica, t de Student, ANOVA, correlación, regresión, p-valor. Así todo parece desconectado.

## Cambia la pregunta: de calcular a interpretar

En Psicología, la Estadística sirve para responder preguntas como:

- ¿Ha mejorado un grupo después de una intervención?
- ¿Hay diferencias entre dos tratamientos?
- ¿Existe relación entre ansiedad y horas de sueño?
- ¿Puede una variable predecir otra?
- ¿El resultado observado podría explicarse por azar muestral?

Cuando estudias desde estas preguntas, las pruebas dejan de ser fórmulas misteriosas.

## Lo mínimo que debes dominar

Antes de entrar en pruebas estadísticas, necesitas cuatro ideas:

1. **Variable:** qué estás midiendo.
2. **Muestra:** a quién has medido.
3. **Distribución:** cómo se reparten los valores.
4. **Comparación:** qué diferencia o relación quieres evaluar.

Por ejemplo, si comparas ansiedad antes y después de una terapia, la variable es ansiedad, la muestra son los participantes y la comparación es dentro de las mismas personas.

## Media y desviación típica sin miedo

La media resume el centro:

$$
\\bar{x}=\\frac{x_1+x_2+\\cdots+x_n}{n}
$$

La desviación típica resume dispersión: cuánto se alejan los datos de la media. No hace falta memorizar la fórmula desde el primer día. Primero entiende la idea: dos grupos pueden tener la misma media y comportarse de forma muy distinta si uno es mucho más variable.

## El mapa de pruebas más útil

Para aprobar, organiza los test por tipo de pregunta:

- Comparar una media con un valor: t de una muestra.
- Comparar dos grupos independientes: t de muestras independientes.
- Comparar antes y después en las mismas personas: t de muestras relacionadas.
- Comparar tres o más grupos: ANOVA.
- Relacionar dos variables cuantitativas: correlación.
- Predecir una variable cuantitativa: regresión lineal.
- Relacionar variables categóricas: chi-cuadrado.

Este mapa vale más que memorizar diez fórmulas sin contexto.

## Ejemplo sencillo

Un grupo de estudiantes hace un programa de reducción de ansiedad. Medimos ansiedad antes y después. Como son las mismas personas en dos momentos, no usamos una t de grupos independientes. Usamos una prueba para muestras relacionadas.

La pregunta no es solo si las medias son distintas. La pregunta completa es:

> ¿La diferencia media observada es suficientemente clara, teniendo en cuenta la variabilidad y el tamaño de la muestra?

Ahí entra el contraste estadístico.

## Plan de estudio de cuatro semanas

### Semana 1: descriptiva

Media, mediana, desviación típica, gráficos, tipos de variables y lectura de tablas.

### Semana 2: inferencia básica

Hipótesis nula, hipótesis alternativa, p-valor, intervalo de confianza y tamaño del efecto.

### Semana 3: pruebas frecuentes

t de Student, ANOVA, correlación y chi-cuadrado. No estudies cada prueba aislada: estudia cuándo se usa.

### Semana 4: interpretación y software

Practica salidas de SPSS, Jamovi, R o Python. Aprende a escribir conclusiones: resultado estadístico, dirección del efecto, tamaño e interpretación psicológica.

## Errores frecuentes

- Intentar memorizar fórmulas sin entender la pregunta.
- No distinguir grupos independientes y medidas repetidas.
- Creer que \\(p<0.05\\) significa que el resultado es importante.
- No mirar gráficos antes de hacer pruebas.
- Copiar salidas de software sin saber qué línea interpretar.

## Cómo saber si vas bien

Vas bien cuando puedes mirar un enunciado y decir:

1. Qué variable se mide.
2. Cuántos grupos o momentos hay.
3. Si las muestras son independientes o relacionadas.
4. Qué prueba encaja.
5. Cómo escribirías la conclusión.

Para seguir con el mapa de decisión, lee [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/) o revisa [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,G8=`---
title: Cómo aprobar Física I en Ingeniería sin memorizar todas las fórmulas
date: 2026-06-29
updated: 2026-06-29
description: Método para aprobar Física I en Ingeniería entendiendo modelos, unidades, diagramas y leyes básicas sin depender de memorizar fórmulas.
tag: Física
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: diagramas-cuerpo-libre-metodo-errores-frecuentes,circuitos-corriente-continua-problemas-resueltos-universidad,fisica-y-quimica-como-plantear-problemas
image: /favicon.svg
---

Aprobar Física I en Ingeniería no consiste en memorizar todas las fórmulas del formulario. Consiste en reconocer qué modelo describe el problema, qué magnitudes intervienen y qué ley física conecta los datos con lo que se pide.

La mayoría de suspensos no aparecen porque falte una fórmula aislada. Aparecen porque se mezclan ejes, se ignoran unidades, se dibujan mal las fuerzas o se aplica energía cuando el problema pedía dinámica.

## Empieza por los modelos, no por las fórmulas

En Física I suelen repetirse varios bloques:

- Cinemática: posición, velocidad y aceleración.
- Dinámica: fuerzas y leyes de Newton.
- Trabajo y energía.
- Cantidad de movimiento e impulso.
- Movimiento circular.
- Sólido rígido si entra en tu programa.

Cada bloque responde a una pregunta distinta. Si el enunciado habla de fuerzas, aceleración y contacto, probablemente estás en dinámica. Si compara alturas, velocidades y rozamiento, quizá conviene energía. Si hay choques, piensa en cantidad de movimiento.

## La fórmula sale del modelo

Una expresión como:

$$
\\sum F = ma
$$

no es una receta. Significa que la fuerza neta sobre el sistema determina su aceleración. Antes de usarla debes decidir:

- Qué objeto es el sistema.
- Qué fuerzas actúan.
- Qué eje eliges como positivo.
- Si hay aceleración y en qué dirección.

Cuando esto está claro, las fórmulas dejan de ser una lista y empiezan a ser consecuencias del dibujo.

## Método de estudio en cuatro fases

### 1. Lectura física del enunciado

Subraya magnitudes y condiciones. No copies números sin unidad. Es distinto \\(5\\,\\text{m}\\), \\(5\\,\\text{m/s}\\) y \\(5\\,\\text{N}\\). Si confundes unidades, el planteamiento ya nace roto.

### 2. Dibujo o esquema

En dinámica, haz diagrama de cuerpo libre. En energía, marca alturas y puntos inicial/final. En cinemática, define eje, origen y sentido positivo.

### 3. Ley principal

Elige una ley central. Por ejemplo:

$$
E_m=K+U
$$

o:

$$
W_{\\text{neto}}=\\Delta K
$$

No empieces por sustituir datos. Primero escribe la relación simbólica.

### 4. Cálculo y comprobación

Al final revisa signo, unidades y orden de magnitud. Si un bloque de \\(2\\,\\text{kg}\\) en una mesa acelera a \\(500\\,\\text{m/s}^2\\), algo no cuadra.

## Ejemplo: bloque con rozamiento

Un bloque de masa \\(m\\) se mueve sobre una superficie horizontal con coeficiente de rozamiento \\(\\mu\\). Se aplica una fuerza horizontal \\(F\\). La fuerza de rozamiento vale:

$$
F_r=\\mu N
$$

Como no hay aceleración vertical:

$$
N=mg
$$

En el eje horizontal:

$$
F-F_r=ma
$$

Sustituyendo:

$$
F-\\mu mg=ma
$$

Por tanto:

$$
a=\\frac{F-\\mu mg}{m}
$$

La fórmula final importa menos que el camino: dibujo, normal, rozamiento, eje horizontal y segunda ley de Newton.

## Errores que más penalizan

- Usar \\(mg\\) como fuerza en cualquier dirección.
- Poner rozamiento siempre hacia la izquierda sin pensar el movimiento relativo.
- Mezclar energía con fuerzas sin justificar.
- Olvidar que la normal no siempre vale \\(mg\\).
- Sustituir datos antes de tener una ecuación simbólica.
- No indicar unidades en el resultado final.

## Cómo organizar seis semanas de estudio

Si tienes un examen cerca, usa esta distribución:

1. Cinemática y unidades.
2. Leyes de Newton y diagramas.
3. Rozamiento, planos inclinados y poleas.
4. Trabajo, energía y potencia.
5. Choques, impulso y cantidad de movimiento.
6. Simulacros mezclados y corrección de errores.

La clave está en mezclar temas en la última fase. En examen no te dicen "este problema es de energía"; tienes que reconocerlo.

Si necesitas convertir tu temario en un plan de estudio concreto, revisa [clases particulares de Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/) o la guía de [cómo plantear problemas de Física y Química](/blog/fisica-y-quimica-como-plantear-problemas/).
`,Q8=`---
title: Cómo aprobar Matemáticas I en ADE y Economía
date: 2026-07-04
updated: 2026-07-04
description: Guía para aprobar Matemáticas I en ADE y Economía: funciones, derivadas, optimización, elasticidad, matrices y estrategia de examen.
tag: Economía
category: Economía y ADE
relatedService: /clases-particulares/economia-ade/
relatedPosts: economia-ade-matematicas-sin-perderse,microeconomia-i-tipos-problemas-examen,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos
image: /favicon.svg
---

Matemáticas I en ADE y Economía suele mezclar cálculo, álgebra y aplicaciones económicas. El error más común es estudiar como si fuera una asignatura puramente mecánica: derivar, despejar y sustituir sin interpretar.

Para aprobar, necesitas dos capas: técnica matemática y lectura económica del resultado.

## Qué temas suelen entrar

Aunque cada universidad tiene su programa, los bloques habituales son:

- Funciones de una variable.
- Límites y continuidad.
- Derivadas.
- Optimización.
- Elasticidad.
- Integrales básicas si el programa las incluye.
- Matrices y sistemas lineales.
- Aplicaciones a costes, ingresos, beneficio y demanda.

No todos los temas pesan igual. Derivadas, optimización y matrices suelen aparecer mucho en exámenes de primero.

## Derivadas con sentido económico

Si tienes una función de coste \\(C(q)\\), la derivada:

$$
C'(q)
$$

representa el coste marginal: cuánto cambia el coste cuando aumenta la producción en una unidad aproximada.

Si tienes ingresos:

$$
I(q)=p(q)q
$$

y beneficio:

$$
\\pi(q)=I(q)-C(q)
$$

la condición de máximo interior suele ser:

$$
\\pi'(q)=0
$$

Pero no basta con resolver. Debes comprobar si el punto tiene sentido económico y si está dentro del dominio.

## Optimización: el bloque más rentable

Un problema típico pide maximizar beneficio o minimizar coste. El método:

1. Define la variable de decisión.
2. Escribe la función objetivo.
3. Calcula la derivada.
4. Resuelve la condición de primer orden.
5. Comprueba segunda derivada o comportamiento.
6. Interpreta el resultado.

Ejemplo:

$$
\\pi(q)=-q^2+20q-36
$$

Derivamos:

$$
\\pi'(q)=-2q+20
$$

Igualamos a cero:

$$
-2q+20=0 \\Rightarrow q=10
$$

Como:

$$
\\pi''(q)=-2<0
$$

el punto es un máximo. La producción óptima es \\(q=10\\).

## Matrices y sistemas

En ADE y Economía, las matrices suelen aparecer en sistemas lineales, modelos input-output o ejercicios de equilibrio.

Un sistema:

$$
Ax=b
$$

puede resolverse por Gauss, por inversa si existe o mediante discusión de rangos. Lo importante es interpretar \\(x\\): precios, cantidades, producción o variables del modelo.

## Cómo estudiar sin perder tiempo

Divide cada sesión en tres partes:

- Técnica: practicar derivadas, sistemas o límites.
- Problema aplicado: leer un enunciado económico.
- Interpretación: escribir una frase final con unidades y sentido.

No dejes la interpretación para el final del curso. Muchos exámenes penalizan resultados sin explicación.

## Errores frecuentes

- Derivar bien y no saber qué representa la derivada.
- Optimizar sin comprobar dominio.
- Confundir ingreso medio, marginal y total.
- Resolver sistemas sin interpretar variables.
- Estudiar ejercicios sueltos sin agruparlos por tipo.

## Plan de repaso de dos semanas

Si tienes poco tiempo:

1. Días 1-2: funciones, dominio y gráficas básicas.
2. Días 3-5: derivadas y elasticidad.
3. Días 6-8: optimización económica.
4. Días 9-10: matrices y sistemas.
5. Días 11-12: exámenes antiguos.
6. Días 13-14: simulacro y corrección de errores.

Para reforzar este bloque con ejercicios adaptados a tu grado, revisa [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) y la guía de [Economía y ADE sin perder el sentido económico](/blog/economia-ade-matematicas-sin-perderse/).
`,Y8=`---
title: Cómo estudiar matemáticas sin memorizar fórmulas
date: 2026-05-20
updated: 2026-05-20
description: Un método práctico para dejar de estudiar matemáticas a base de memoria: concepto, problema tipo, explicación en voz alta y variaciones.
tag: Método
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,que-son-las-integrales-y-para-que-se-utilizan
image: /favicon.svg
---

Muchos alumnos llegan a Matemáticas con una sensación muy concreta: han estudiado, han hecho ejercicios parecidos, reconocen las fórmulas, pero en el examen se bloquean cuando cambia el enunciado.

El problema casi nunca es la memoria. Es no haber entendido **cuándo** usar cada herramienta, **por qué** aparece cada paso y **qué condición** hace válido el procedimiento.

## El error más común

> "Entiendo la teoría en clase, pero cuando me siento solo delante del problema no sé ni por dónde empezar."

Esa frase suele señalar una diferencia importante: ver una solución no es lo mismo que poder reconstruirla. Si solo memorizas el camino de un ejercicio, dependes de que el examen sea casi idéntico. Si entiendes el mapa, puedes adaptarte.

## Un método en cuatro fases

Para estudiar una asignatura cuantitativa conviene trabajar cada bloque así:

1. **Concepto.** Antes de operar, define qué mide la herramienta y qué pregunta responde.
2. **Problema tipo.** Revisa un ejercicio representativo y marca la decisión que activa cada paso.
3. **Reproducción.** Cierra la solución e intenta rehacerlo explicando en voz alta por qué haces cada operación.
4. **Variación.** Cambia un dato, una condición o el formato del enunciado para comprobar que el razonamiento aguanta.

La fase más incómoda es la tercera, pero también es la que más revela. Si no puedes explicar un paso sin mirar, todavía no está consolidado.

## Ejemplo: optimización antes de derivar

Imagina un ejercicio de optimización: "encuentra el área máxima". Muchos alumnos empiezan derivando cualquier expresión que aparece. El orden correcto es otro:

1. Define la variable que realmente puedes mover.
2. Escribe la magnitud que quieres maximizar.
3. Usa las restricciones para dejar una sola variable.
4. Deriva solo cuando la función ya representa el objetivo.
5. Comprueba dominio, unidades y sentido del resultado.

Una forma compacta de verlo es escribir la condición de óptimo como \\(A'(x)=0\\), pero solo después de haber construido la función objetivo:

$$
\\begin{aligned}
A(x)&=x(20-2x)\\\\
A'(x)&=20-4x
\\end{aligned}
$$

La gráfica resume la idea: primero se construye la función, después se estudia dónde cambia su crecimiento y, por último, se interpreta el punto crítico dentro del contexto del problema.

![Parábola de área con máximo en el vértice](/assets/latex/quadratic-optimization.svg)

## Errores que conviene detectar

- Resolver mirando la solución y creer que ya se domina el método.
- Saltarse dominio, unidades o interpretación de signos.
- Hacer diez ejercicios iguales y ninguno con una variación real.
- Corregir solo el resultado final, no el punto donde se rompió el razonamiento.
- Memorizar una lista de fórmulas sin asociarlas a preguntas concretas.

## Qué hacer esta semana

Elige un ejercicio que te salió mal y aplícale las cuatro fases. No busques hacer veinte problemas. Haz uno solo, pero de verdad: explica cada paso, cambia un dato y revisa si el método sigue funcionando.

Si el bloqueo aparece en matemáticas de ESO, Bachillerato, Cálculo, Álgebra, Ecuaciones Diferenciales u otra asignatura cuantitativa, revisa la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/) o [cuéntanos tu caso](/contacto/) para plantear un diagnóstico.
`,V8=`---
title: Derivadas e integrales universitarias: prueba de nivel con ejercicios resueltos
date: 2026-06-23
updated: 2026-06-23
description: Prueba de nivel de derivadas e integrales universitarias con ejercicios resueltos para detectar errores antes del examen de Cálculo.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,que-son-las-integrales-y-para-que-se-utilizan,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Esta prueba de nivel de derivadas e integrales universitarias sirve para saber si tienes la base de Cálculo suficientemente firme antes de entrar en problemas más largos. No mide velocidad. Mide criterio.

Haz primero los ejercicios sin mirar la solución. Después revisa no solo el resultado, sino el método elegido.

## Ejercicio 1: derivada con regla de la cadena

Calcula:

$$
f(x)=\\ln(1+x^2)
$$

Solución:

$$
f'(x)=\\frac{1}{1+x^2}\\cdot 2x=\\frac{2x}{1+x^2}
$$

Qué comprueba: si reconoces que el logaritmo tiene una función interna. El error habitual es escribir \\(1/(1+x^2)\\) y olvidar multiplicar por \\(2x\\).

## Ejercicio 2: recta tangente

Encuentra la recta tangente a \\(f(x)=x^3-2x\\) en \\(x=1\\).

Primero:

$$
f(1)=1-2=-1
$$

La derivada es:

$$
f'(x)=3x^2-2
$$

Por tanto:

$$
f'(1)=1
$$

La recta tangente:

$$
y=f(1)+f'(1)(x-1)
$$

queda:

$$
y=-1+(x-1)=x-2
$$

Qué comprueba: interpretación de la derivada como pendiente local.

## Ejercicio 3: integral inmediata con cambio de variable

Calcula:

$$
\\int 3x^2 e^{x^3}\\,dx
$$

Tomamos:

$$
u=x^3,\\quad du=3x^2\\,dx
$$

Entonces:

$$
\\int 3x^2 e^{x^3}\\,dx=\\int e^u\\,du=e^u+C=e^{x^3}+C
$$

Qué comprueba: si sabes detectar una función y su derivada dentro de la integral.

## Ejercicio 4: integración por partes

Calcula:

$$
\\int x e^x\\,dx
$$

Usamos:

$$
\\int u\\,dv=uv-\\int v\\,du
$$

Elige \\(u=x\\) y \\(dv=e^x dx\\). Entonces \\(du=dx\\) y \\(v=e^x\\). Por tanto:

$$
\\int x e^x\\,dx=xe^x-\\int e^x\\,dx=xe^x-e^x+C
$$

Resultado:

$$
\\int x e^x\\,dx=e^x(x-1)+C
$$

Qué comprueba: elección razonable de \\(u\\). En general, conviene derivar la parte que se simplifica.

## Ejercicio 5: área bajo una curva

Calcula el área bajo \\(f(x)=2x\\) entre \\(x=0\\) y \\(x=3\\).

$$
\\int_0^3 2x\\,dx=\\left[x^2\\right]_0^3=9
$$

El área es \\(9\\). No basta con integrar: hay que interpretar la integral definida como acumulación en un intervalo.

## Ejercicio 6: integral con signo

Calcula:

$$
\\int_{-1}^{1} x^3\\,dx
$$

La función \\(x^3\\) es impar, así que el área positiva y negativa se compensan:

$$
\\int_{-1}^{1} x^3\\,dx=0
$$

También se puede calcular:

$$
\\left[\\frac{x^4}{4}\\right]_{-1}^{1}=\\frac{1}{4}-\\frac{1}{4}=0
$$

Qué comprueba: diferencia entre integral definida y área geométrica total. Si te piden área encerrada, habría que partir intervalos y tomar valores absolutos cuando corresponda.

## Cómo interpretar tu resultado

Si has fallado ejercicios 1 o 3, el problema principal es regla de la cadena. Si has fallado 2, falta interpretación geométrica de la derivada. Si has fallado 4, necesitas practicar elección de técnica. Si has fallado 5 o 6, revisa integrales definidas y significado de signo.

## Nivel mínimo antes de un examen universitario

Antes de enfrentarte a problemas de Cálculo I deberías poder:

- Derivar funciones compuestas sin perder factores.
- Construir rectas tangentes.
- Reconocer cambios de variable sencillos.
- Aplicar integración por partes.
- Interpretar integrales definidas.
- Revisar si un resultado tiene sentido por signo, unidades o gráfica.

Para profundizar, puedes leer las guías sobre [qué son las derivadas](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) y [qué son las integrales](/blog/que-son-las-integrales-y-para-que-se-utilizan/). Si quieres un diagnóstico más completo, revisa [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,X8=`---
title: Diagramas de cuerpo libre: método paso a paso con errores frecuentes
date: 2026-07-01
updated: 2026-07-01
description: Aprende a hacer diagramas de cuerpo libre paso a paso: fuerzas reales, ejes, normal, rozamiento, tensión y errores frecuentes en Ingeniería.
tag: Física
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas,circuitos-corriente-continua-problemas-resueltos-universidad,fisica-y-quimica-como-plantear-problemas
image: /favicon.svg
---

El diagrama de cuerpo libre es una de las herramientas más importantes de Física I. Si el diagrama está mal, las ecuaciones salen mal aunque sepas derivar, despejar o sustituir datos.

Un buen diagrama no es un dibujo bonito. Es una representación clara de todas las fuerzas reales que actúan sobre un cuerpo concreto.

## Paso 1: elige un solo cuerpo

Antes de dibujar, decide qué objeto estás aislando. Puede ser un bloque, una masa colgante, un coche, una partícula o una barra. No mezcles fuerzas de varios cuerpos en el mismo diagrama.

Pregunta guía:

> ¿Sobre qué cuerpo estoy escribiendo \\(\\sum F=ma\\)?

Esa pregunta evita muchos errores.

## Paso 2: dibuja solo fuerzas reales

Las fuerzas habituales son:

- Peso: \\(P=mg\\), siempre vertical hacia abajo.
- Normal: perpendicular a la superficie de contacto.
- Tensión: en la dirección de la cuerda.
- Rozamiento: opuesto al movimiento o a la tendencia de movimiento relativo.
- Fuerza aplicada: según indique el enunciado.
- Fuerza elástica: \\(F=kx\\), opuesta a la deformación.

No dibujes "la fuerza centrípeta" como fuerza adicional si ya tienes las fuerzas reales. La centrípeta es el resultado neto hacia el centro:

$$
\\sum F_{\\text{radial}}=\\frac{mv^2}{r}
$$

## Paso 3: elige ejes útiles

Los ejes no tienen que ser horizontal y vertical por costumbre. En un plano inclinado suele convenir un eje paralelo al plano y otro perpendicular.

Para un plano de ángulo \\(\\theta\\), el peso se descompone como:

$$
mg\\sin\\theta
$$

en la dirección paralela al plano, y:

$$
mg\\cos\\theta
$$

en la dirección perpendicular.

El error frecuente es intercambiar seno y coseno. Para comprobarlo, piensa en casos extremos: si \\(\\theta=0\\), no debería haber componente del peso bajando por el plano.

## Paso 4: escribe ecuaciones por eje

Después del diagrama, escribe una ecuación por eje:

$$
\\sum F_x=ma_x
$$

$$
\\sum F_y=ma_y
$$

Si no hay movimiento perpendicular a la superficie, normalmente \\(a_y=0\\). Eso permite encontrar la normal.

## Ejemplo: bloque en plano inclinado con rozamiento

Un bloque baja por un plano inclinado de ángulo \\(\\theta\\) con rozamiento \\(\\mu\\).

Fuerzas:

- Peso \\(mg\\).
- Normal \\(N\\).
- Rozamiento \\(F_r=\\mu N\\), hacia arriba del plano si el bloque baja.

Eje perpendicular:

$$
N-mg\\cos\\theta=0
$$

Por tanto:

$$
N=mg\\cos\\theta
$$

Eje paralelo:

$$
mg\\sin\\theta-\\mu N=ma
$$

Sustituyendo:

$$
mg\\sin\\theta-\\mu mg\\cos\\theta=ma
$$

Luego:

$$
a=g(\\sin\\theta-\\mu\\cos\\theta)
$$

## Errores frecuentes

### 1. Dibujar la normal siempre vertical

La normal es perpendicular a la superficie, no necesariamente vertical. En un plano inclinado, la normal está inclinada.

### 2. Poner el rozamiento en sentido arbitrario

El rozamiento se opone al movimiento relativo o a la tendencia de movimiento. Si el bloque tendería a bajar, el rozamiento apunta hacia arriba del plano.

### 3. Olvidar fuerzas de contacto

Si hay contacto con una superficie, revisa si hay normal y si puede haber rozamiento.

### 4. Mezclar fuerzas internas

Si estudias un sistema completo, algunas tensiones internas no aparecen en la ecuación global. Si estudias cada cuerpo por separado, sí aparecen.

### 5. Usar \\(F=ma\\) sin ejes

La segunda ley se aplica vectorialmente. En problemas reales, casi siempre necesitas descomponer por ejes.

## Checklist de examen

Antes de resolver, revisa:

- He aislado un cuerpo concreto.
- Todas las fuerzas dibujadas son reales.
- Cada fuerza tiene dirección clara.
- Los ejes simplifican el problema.
- La aceleración está en el eje correcto.
- La normal y el rozamiento están justificados.

Si este paso te cuesta, vuelve a la guía de [Física I sin memorizar fórmulas](/blog/como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas/) o revisa [clases particulares de Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/).
`,Z8=`---
title: Econometría desde cero: cómo interpretar una regresión correctamente
date: 2026-07-06
updated: 2026-07-06
description: Guía de Econometría desde cero para interpretar una regresión: coeficientes, significación, R², supuestos y errores frecuentes.
tag: Econometría
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: estadistica-desde-cero-para-elegir-contrastes,probabilidad-condicionada-bayes-problemas-resueltos,microeconomia-i-tipos-problemas-examen
image: /favicon.svg
---

Econometría no consiste solo en ejecutar una regresión y mirar si salen asteriscos. Una regresión se interpreta correctamente cuando conectas pregunta, modelo, coeficientes, incertidumbre y supuestos.

El modelo lineal simple se escribe así:

$$
y_i=\\beta_0+\\beta_1x_i+u_i
$$

donde \\(y_i\\) es la variable explicada, \\(x_i\\) la variable explicativa y \\(u_i\\) recoge factores no observados.

## Qué significa un coeficiente

En una regresión lineal, \\(\\beta_1\\) mide el cambio esperado en \\(y\\) cuando \\(x\\) aumenta una unidad, manteniendo el resto constante si hay más variables.

Por ejemplo:

$$
salario_i=\\beta_0+\\beta_1 educacion_i+u_i
$$

Si \\(\\hat{\\beta}\\_1=1200\\), una interpretación posible es: un año adicional de educación se asocia con 1200 unidades monetarias más de salario esperado, según el modelo.

La palabra "se asocia" importa. Para hablar de causalidad necesitas supuestos más fuertes.

## Significación estadística

Un contraste típico es:

$$
H_0:\\beta_1=0
$$

frente a:

$$
H_1:\\beta_1\\neq 0
$$

Si el p-valor es pequeño, hay evidencia estadística contra \\(H_0\\). Pero significación no implica relevancia económica. Un efecto puede ser estadísticamente significativo y económicamente pequeño.

## R²: qué dice y qué no dice

El \\(R^2\\) mide qué proporción de variabilidad de \\(y\\) queda explicada por el modelo:

$$
R^2=1-\\frac{SCR}{SCT}
$$

Un \\(R^2\\) alto no demuestra causalidad. Un \\(R^2\\) bajo no invalida automáticamente un modelo si la pregunta es estimar un efecto concreto.

## Regresión múltiple

En un modelo:

$$
y_i=\\beta_0+\\beta_1x_{1i}+\\beta_2x_{2i}+u_i
$$

el coeficiente \\(\\beta_1\\) se interpreta manteniendo \\(x_2\\) constante. Esta frase es central en Econometría. Si no la incluyes, la interpretación queda incompleta.

## Supuestos que debes revisar

Antes de confiar en una regresión, piensa en:

- Linealidad del modelo.
- Variables omitidas relevantes.
- Exogeneidad.
- Heterocedasticidad.
- Multicolinealidad.
- Tamaño muestral.
- Interpretación causal o solo predictiva.

No todos los cursos piden el mismo nivel, pero todos penalizan interpretar coeficientes sin contexto.

## Ejemplo interpretado

Modelo:

$$
nota_i=3.2+0.45 horas_i
$$

Interpretación: una hora adicional de estudio se asocia con 0.45 puntos más en la nota esperada, según este modelo lineal.

Si el p-valor de \\(horas\\) es 0.01, diríamos que hay evidencia estadística de asociación al 5%. Pero todavía habría que preguntarse si quienes estudian más también tienen otras características que explican la nota.

## Errores frecuentes

- Decir que un coeficiente "causa" algo sin justificar causalidad.
- Mirar solo el p-valor.
- Confundir significación estadística con importancia práctica.
- Interpretar \\(\\beta_0\\) aunque \\(x=0\\) no tenga sentido.
- No mencionar unidades.
- Ignorar variables omitidas.

## Cómo responder en un examen

Una buena respuesta incluye:

1. Variable dependiente y explicativas.
2. Signo del coeficiente.
3. Magnitud y unidades.
4. Significación si se pide.
5. Interpretación económica.
6. Cautela sobre causalidad y supuestos.

Para reforzar la base estadística, revisa [Estadística desde cero para elegir contrastes](/blog/estadistica-desde-cero-para-elegir-contrastes/) y [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,F8=`---
title: Economía y ADE: cómo estudiar matemáticas sin perder el sentido económico
date: 2026-05-26
updated: 2026-05-26
description: Cómo estudiar matemáticas, estadística y modelos de Economía y ADE conectando gráfica, fórmula e interpretación.
tag: Economía
category: Economía y ADE
relatedService: /clases-particulares/economia-ade/
relatedPosts: estadistica-desde-cero-para-elegir-contrastes,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

En Economía y ADE, las matemáticas no deberían estudiarse como una asignatura aislada. Una derivada, una elasticidad, una regresión o una función de costes tienen sentido porque responden a una pregunta económica.

El problema aparece cuando se estudia solo el procedimiento y se pierde la interpretación.

## Une gráfica, fórmula y frase

Cada concepto debería poder explicarse en tres formatos:

- **Gráfica:** qué forma tiene y qué cambia.
- **Fórmula:** qué variables aparecen y cómo se relacionan.
- **Frase:** qué decisión o fenómeno representa.

Si solo dominas uno de los tres, el examen puede cambiar el formato y dejarte bloqueado.

## No memorices modelos como recetas

En microeconomía, matemáticas financieras o estadística aplicada, pregunta siempre:

1. Qué representa la variable.
2. Qué supuesto estoy aceptando.
3. Qué conclusión puedo defender.
4. Qué pasaría si cambia una condición.

Por ejemplo, una expresión como \\(\\pi(q)=IT(q)-CT(q)\\) no es solo una fórmula: conecta ingresos, costes, producción y decisión.

## Practica con problemas mixtos

Los ejercicios reales mezclan lectura, cálculo e interpretación. Por eso conviene entrenar secuencias completas:

- Leer el enunciado.
- Dibujar o resumir el modelo.
- Calcular.
- Interpretar el resultado.
- Comprobar si tiene sentido económico.

## Qué evitar

- Resolver derivadas sin decir qué variable cambia.
- Aprender elasticidades como una tabla de fórmulas.
- Copiar procedimientos de estadística sin revisar supuestos.
- Separar teoría y problemas hasta la víspera del examen.

No se trata de convertirte en matemático. Se trata de que la parte cuantitativa no te impida entender economía, empresa o análisis de datos.

## Cómo repasar antes del examen

Una buena sesión de repaso debería mezclar:

1. Un problema de cálculo.
2. Una interpretación escrita.
3. Una gráfica o tabla.
4. Un caso con datos cambiados.

Si solo practicas la parte mecánica, el examen puede penalizarte en la explicación. Si solo estudias teoría, el cálculo llega inseguro. La clave está en unir ambas cosas.

Si ese es tu caso, puedes revisar [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) o escribirnos desde [contacto](/contacto/).
`,K8=`---
title: Ecuaciones diferenciales: cómo identificar el método correcto paso a paso
date: 2026-06-17
updated: 2026-06-17
description: Aprende a identificar el método correcto en ecuaciones diferenciales: separables, lineales, exactas y de segundo orden con ejemplos.
tag: Ecuaciones diferenciales
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: como-aprobar-calculo-i-ingenieria-seis-semanas,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

En Ecuaciones Diferenciales, el bloqueo más frecuente no es resolver una integral concreta. Es mirar una ecuación y no saber qué método aplicar. Por eso conviene estudiar la asignatura como un árbol de decisión, no como una lista de recetas.

Una ecuación diferencial relaciona una función desconocida con sus derivadas. El primer paso siempre es clasificarla: orden, linealidad, variables y forma.

## Paso 1: identifica el orden

El orden es la derivada más alta que aparece.

$$
y'=2xy
$$

es de primer orden. En cambio:

$$
y''-3y'+2y=0
$$

es de segundo orden. Esta distinción decide la familia de métodos que tiene sentido.

## Paso 2: mira si es separable

Una ecuación de primer orden es separable si puedes escribirla como:

$$
\\frac{dy}{dx}=g(x)h(y)
$$

Entonces separas:

$$
\\frac{1}{h(y)}\\,dy=g(x)\\,dx
$$

Ejemplo:

$$
y'=2xy
$$

Si \\(y\\neq 0\\):

$$
\\frac{1}{y}\\,dy=2x\\,dx
$$

Integramos:

$$
\\ln|y|=x^2+C
$$

Por tanto:

$$
y=Ce^{x^2}
$$

La señal clara es que todos los términos con \\(y\\) pueden quedar a un lado y todos los de \\(x\\) al otro.

## Paso 3: si no es separable, prueba forma lineal

Una ecuación lineal de primer orden tiene forma:

$$
y'+p(x)y=q(x)
$$

Se resuelve con factor integrante:

$$
\\mu(x)=e^{\\int p(x)\\,dx}
$$

Ejemplo:

$$
y'+2y=e^x
$$

Aquí \\(p(x)=2\\), así que:

$$
\\mu(x)=e^{2x}
$$

Multiplicamos:

$$
e^{2x}y'+2e^{2x}y=e^{3x}
$$

El lado izquierdo es la derivada de \\(e^{2x}y\\):

$$
(e^{2x}y)'=e^{3x}
$$

Integramos:

$$
e^{2x}y=\\frac{1}{3}e^{3x}+C
$$

Luego:

$$
y=\\frac{1}{3}e^x+Ce^{-2x}
$$

## Paso 4: comprueba si es exacta

Si la ecuación aparece como:

$$
M(x,y)\\,dx+N(x,y)\\,dy=0
$$

comprueba:

$$
\\frac{\\partial M}{\\partial y}=\\frac{\\partial N}{\\partial x}
$$

Si se cumple, existe una función potencial \\(F(x,y)\\) tal que:

$$
dF=M\\,dx+N\\,dy
$$

La solución queda implícita como:

$$
F(x,y)=C
$$

Este método suele penalizar mucho si no se verifica la condición de exactitud antes de integrar.

## Paso 5: segundo orden con coeficientes constantes

Para ecuaciones como:

$$
ay''+by'+cy=0
$$

se plantea la ecuación característica:

$$
ar^2+br+c=0
$$

Ejemplo:

$$
y''-3y'+2y=0
$$

La característica es:

$$
r^2-3r+2=0
$$

Factorizando:

$$
(r-1)(r-2)=0
$$

Por tanto:

$$
y=C_1e^x+C_2e^{2x}
$$

Si hay raíces repetidas o complejas, cambia la forma de la solución, pero la lógica de partida es la misma.

## Árbol de decisión práctico

Cuando tengas una ecuación delante, sigue este orden:

1. ¿Cuál es el orden?
2. ¿Es lineal o no lineal?
3. Si es de primer orden, ¿se puede separar?
4. Si no se separa, ¿tiene forma \\(y'+p(x)y=q(x)\\)?
5. Si está en diferenciales, ¿es exacta?
6. Si es de segundo orden con coeficientes constantes, ¿puedo usar característica?
7. Si hay condición inicial, ¿ya tengo la solución general antes de sustituir?

La condición inicial se aplica al final, no al principio. Primero se encuentra la familia de soluciones; después se elige la curva concreta.

## Errores comunes

- Separar variables cuando \\(x\\) e \\(y\\) no están realmente separadas.
- Olvidar soluciones constantes al dividir por \\(y\\).
- Usar factor integrante sin poner la ecuación en forma lineal.
- Integrar una exacta sin comprobar exactitud.
- Sustituir condiciones iniciales antes de terminar la solución general.

Si necesitas practicar con una colección ordenada de problemas, puedes empezar por la guía de [cómo estudiar matemáticas sin memorizar fórmulas](/blog/como-estudiar-matematicas-sin-memorizar/) o pedir un diagnóstico en [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,J8=`---
title: Errores más comunes en Inferencia Estadística
date: 2026-07-12
updated: 2026-07-12
description: Lista explicada de errores frecuentes en Inferencia Estadística: hipótesis, p-valores, intervalos, supuestos, tamaño muestral e interpretación.
tag: Inferencia
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: p-valor-intervalo-confianza-tamano-efecto-ejemplo,que-prueba-estadistica-utilizar-guia-test-correcto,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Inferencia Estadística es el bloque donde muchos estudiantes pasan de calcular a decidir. Ya no basta con obtener una media o una desviación típica: hay que sacar conclusiones sobre una población a partir de una muestra.

Estos son los errores más comunes y cómo evitarlos.

## 1. No escribir las hipótesis antes de calcular

Un contraste debe empezar con hipótesis claras:

$$
H_0:\\mu_1=\\mu_2
$$

$$
H_1:\\mu_1\\neq\\mu_2
$$

Si no sabes qué hipótesis estás contrastando, el p-valor no tiene significado.

## 2. Confundir muestra y población

La muestra es lo que observas. La población es aquello sobre lo que quieres concluir. Inferir es pasar de una a otra con incertidumbre.

La media muestral \\(\\bar{x}\\) estima la media poblacional \\(\\mu\\), pero no son lo mismo.

## 3. Interpretar mal el p-valor

El p-valor no es:

- La probabilidad de que \\(H_0\\) sea cierta.
- La probabilidad de que el resultado sea fruto del azar.
- Una medida del tamaño del efecto.

El p-valor mide compatibilidad entre los datos observados y la hipótesis nula bajo un modelo.

## 4. Usar 0.05 como frontera mágica

Un resultado con \\(p=0.049\\) y otro con \\(p=0.051\\) no son mundos distintos. La interpretación debe considerar tamaño del efecto, intervalo de confianza, diseño, muestra y contexto.

## 5. Ignorar el intervalo de confianza

Un intervalo de confianza aporta rango e incertidumbre:

$$
\\hat{\\theta}\\pm z_{\\alpha/2}\\cdot SE
$$

Si el intervalo es muy amplio, el resultado puede ser poco preciso aunque el p-valor parezca atractivo.

## 6. No revisar supuestos

Cada prueba descansa en condiciones. Algunas habituales:

- Independencia.
- Normalidad aproximada.
- Homogeneidad de varianzas.
- Tamaño muestral suficiente.
- Ausencia de valores extremos influyentes.

No siempre se cumplen perfectamente, pero hay que saber si el incumplimiento afecta mucho.

## 7. Elegir la prueba por costumbre

No todo se resuelve con t de Student ni todo con ANOVA. La prueba depende de la pregunta, el tipo de variable, el número de grupos y el diseño.

Si dudas, vuelve al mapa de [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/).

## 8. Confundir significación con importancia

Con muestras grandes, diferencias pequeñas pueden ser significativas. Con muestras pequeñas, efectos relevantes pueden no alcanzar significación. Por eso conviene informar también tamaño del efecto.

## 9. No corregir por comparaciones múltiples

Si haces muchos contrastes, aumenta la probabilidad de encontrar algún resultado significativo por azar. En diseños con muchas comparaciones, revisa si se piden correcciones o comparaciones post hoc.

## 10. Redactar conclusiones incompletas

Una conclusión estadística completa debería incluir:

1. Qué se comparó o analizó.
2. Qué prueba se usó.
3. Resultado principal.
4. p-valor o intervalo.
5. Tamaño del efecto si procede.
6. Interpretación en lenguaje del problema.

## Ejemplo de buena conclusión

> El grupo de intervención obtuvo menor ansiedad media que el grupo control. La diferencia fue estadísticamente significativa, \\(p=0.02\\), y el tamaño del efecto fue moderado. Esto sugiere que la intervención se asocia con menor ansiedad, aunque la interpretación causal depende del diseño del estudio.

La última frase importa: no prometas más de lo que el diseño permite.

Para reforzar este bloque, revisa [p-valor, intervalo de confianza y tamaño del efecto](/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo/) o [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,P8=`---
title: Estadística desde cero: cómo elegir un contraste sin aplicar recetas
date: 2026-05-29
updated: 2026-05-29
description: Una guía práctica para elegir pruebas estadísticas a partir de la pregunta, las variables, los supuestos y la interpretación.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: economia-ade-matematicas-sin-perderse,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

En Estadística muchos alumnos no se bloquean al calcular, sino al decidir. Conocen varias pruebas, han visto tablas y fórmulas, pero cuando aparece un enunciado nuevo no saben si toca comparar medias, proporciones, una regresión o un contraste de independencia.

La solución no es memorizar otra lista. Es construir una secuencia de decisión.

## Empieza por la pregunta

Antes de elegir técnica, escribe en una frase qué quieres responder:

1. Comparar dos medias.
2. Estimar un parámetro con incertidumbre.
3. Comprobar si dos variables categóricas están relacionadas.
4. Explicar una variable mediante otra.

Sin esa frase, cualquier contraste parece posible. Con ella, el abanico se reduce mucho.

## Identifica variables y muestra

El segundo filtro es la estructura de los datos:

- Variable cuantitativa o categórica.
- Una muestra, dos muestras o más de dos grupos.
- Muestras independientes o emparejadas.
- Tamaño muestral y supuestos razonables.

No se elige una prueba por el capítulo del temario. Se elige por la pregunta y por la forma de los datos.

## Hipótesis antes que cálculo

Un contraste se entiende mejor cuando las hipótesis están escritas antes de operar. Por ejemplo:

$$
H_0:\\mu_1=\\mu_2, \\qquad H_1:\\mu_1\\neq\\mu_2
$$

Después puedes calcular, pero el resultado debe volver a una frase: qué evidencia hay, qué decisión tomas y qué limitación mantiene la conclusión.

## Interpreta el p-valor

Un p-valor no significa "probabilidad de que la hipótesis nula sea cierta". Significa que, si el modelo y \\(H_0\\) fueran adecuados, observar un resultado tan extremo sería más o menos compatible con lo esperado.

Por eso conviene terminar cada ejercicio con interpretación:

- Qué hipótesis comparaste.
- Qué criterio de decisión usaste.
- Qué conclusión práctica puedes defender.
- Qué supuestos podrían cambiar la lectura.

## Protocolo simple

Cuando no sepas qué hacer, sigue este orden:

1. Redacta la pregunta.
2. Identifica variable respuesta y variable explicativa.
3. Clasifica el tipo de variables.
4. Revisa independencia, normalidad o tamaño muestral.
5. Elige técnica.
6. Interpreta en lenguaje natural.

## Señales de que estás aplicando recetas

Hay algunos avisos claros:

- Empiezas por buscar una fórmula antes de leer la pregunta.
- No sabes decir qué representa cada variable.
- El resultado numérico no termina en una conclusión escrita.
- Cambia el enunciado y ya no sabes si el mismo contraste sigue siendo válido.
- Te aprendes "si pasa esto, hago aquello" sin revisar supuestos.

La estadística universitaria se vuelve mucho más manejable cuando separas decisión, cálculo e interpretación. Cada parte tiene su dificultad, pero también su método de estudio.

Si estás preparando probabilidad, inferencia, regresión o estadística para Bachillerato, Universidad, TFG o TFM, revisa [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/) o [cuéntanos tu caso](/contacto/).
`,I8=`---
title: Estequiometría universitaria: ejercicios resueltos de dificultad progresiva
date: 2026-07-07
updated: 2026-07-07
description: Ejercicios resueltos de estequiometría universitaria con masa molar, reactivo limitante, rendimiento, disoluciones y errores frecuentes.
tag: Química
category: Física y Química
relatedService: /clases-particulares/quimica/
relatedPosts: fisica-y-quimica-como-plantear-problemas,como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas,circuitos-corriente-continua-problemas-resueltos-universidad
image: /favicon.svg
---

La estequiometría universitaria se basa en una idea sencilla: una reacción química ajustada indica proporciones entre moles. La dificultad aparece al convertir masas, volúmenes, concentraciones y rendimientos sin perder el hilo.

El método general es:

1. Ajustar la reacción.
2. Convertir datos a moles.
3. Usar la proporción estequiométrica.
4. Convertir al formato pedido.
5. Revisar unidades y sentido químico.

## Ejercicio 1: masa a moles

Calcula los moles de \\(18\\,g\\) de agua. La masa molar del agua es:

$$
M(H_2O)=18\\,g/mol
$$

Entonces:

$$
n=\\frac{m}{M}=\\frac{18}{18}=1\\,mol
$$

Este paso parece básico, pero es la base de todos los problemas posteriores.

## Ejercicio 2: reacción ajustada

Considera la combustión del metano:

$$
CH_4+2O_2\\rightarrow CO_2+2H_2O
$$

Si reaccionan \\(3\\,mol\\) de \\(CH_4\\) con oxígeno suficiente, ¿cuántos moles de \\(CO_2\\) se forman?

La proporción es:

$$
1\\,mol\\,CH_4 \\rightarrow 1\\,mol\\,CO_2
$$

Por tanto:

$$
3\\,mol\\,CH_4 \\rightarrow 3\\,mol\\,CO_2
$$

## Ejercicio 3: reactivo limitante

Reacción:

$$
2H_2+O_2\\rightarrow 2H_2O
$$

Disponemos de \\(5\\,mol\\) de \\(H_2\\) y \\(2\\,mol\\) de \\(O_2\\). ¿Cuál es el reactivo limitante?

La reacción exige:

$$
2\\,mol\\,H_2 \\quad \\text{por cada} \\quad 1\\,mol\\,O_2
$$

Para consumir \\(2\\,mol\\) de \\(O_2\\), harían falta:

$$
4\\,mol\\,H_2
$$

Tenemos \\(5\\,mol\\), así que sobra \\(H_2\\). El reactivo limitante es \\(O_2\\).

## Ejercicio 4: rendimiento

Si una reacción debería producir \\(10\\,g\\) de producto, pero experimentalmente se obtienen \\(8\\,g\\), el rendimiento es:

$$
\\%R=\\frac{\\text{cantidad real}}{\\text{cantidad teórica}}\\cdot 100
$$

Sustituyendo:

$$
\\%R=\\frac{8}{10}\\cdot 100=80\\%
$$

El rendimiento nunca debe superar el 100% salvo que haya impurezas, errores de medida o producto húmedo.

## Ejercicio 5: disoluciones

Calcula los moles de soluto en \\(250\\,mL\\) de una disolución \\(0.5\\,M\\).

La molaridad es:

$$
M=\\frac{n}{V}
$$

con \\(V\\) en litros. Convertimos:

$$
250\\,mL=0.250\\,L
$$

Entonces:

$$
n=MV=0.5\\cdot 0.250=0.125\\,mol
$$

## Dificultad progresiva: cómo estudiar

Ordena los ejercicios así:

1. Conversiones masa-mol.
2. Reacciones ajustadas.
3. Reactivo limitante.
4. Rendimiento.
5. Disoluciones.
6. Problemas mixtos con pureza o concentración.

Si saltas directamente a problemas mixtos, es fácil no saber si el error está en el ajuste, la conversión o la proporción.

## Errores frecuentes

- Usar gramos directamente en proporciones estequiométricas.
- No ajustar la reacción.
- Confundir masa molar con masa del compuesto.
- No convertir mililitros a litros en molaridad.
- Elegir el reactivo limitante por cantidad mayor o menor sin comparar proporciones.
- Redondear demasiado pronto.

## Checklist final

Antes de entregar, revisa:

- La reacción está ajustada.
- Todos los datos están en unidades coherentes.
- Las proporciones se hacen en moles.
- El resultado responde exactamente a lo pedido.
- La unidad final es correcta.

Para seguir practicando, revisa la guía de [Física y Química: cómo plantear problemas antes de calcular](/blog/fisica-y-quimica-como-plantear-problemas/) o la página de [clases particulares de Química](/clases-particulares/quimica/).
`,W8=`---
title: Física y Química: cómo plantear problemas antes de calcular
date: 2026-05-23
updated: 2026-05-23
description: Un método común para problemas de Física y Química: datos, magnitudes, modelo, unidades y comprobación final.
tag: Ciencia
category: Física y Química
relatedService: /clases-particulares/fisica-ingenieria/
relatedPosts: preparar-selectividad-con-calendario,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

En Física y Química muchos errores nacen antes del primer cálculo. El alumno reconoce fórmulas, pero no sabe qué representa cada magnitud, qué modelo está usando ni qué resultado tendría sentido.

Por eso el planteamiento vale tanto como la operación.

## Datos no es copiar números

Copiar datos del enunciado no basta. Hay que traducirlos:

- Qué sistema estoy estudiando.
- Qué magnitudes aparecen.
- Qué unidades tienen.
- Qué se conserva o qué cambia.
- Qué se pide exactamente.

En Física puede ser energía, fuerzas, movimiento o campo. En Química puede ser reacción, cantidad de sustancia, equilibrio o concentración.

## El modelo manda

Antes de calcular, decide el marco:

1. En Física: diagrama, fuerzas, energía, campo o circuito.
2. En Química: reacción ajustada, estequiometría, equilibrio, ácido-base o redox.
3. En ambos casos: unidades coherentes y resultado esperable.

Una fórmula como \\(F=ma\\) no es una receta aislada. Exige saber qué fuerza neta estás considerando, qué masa pertenece al sistema y en qué eje estás trabajando.

## Comprobación final

Al terminar, revisa:

- Unidad del resultado.
- Signo.
- Orden de magnitud.
- Coherencia con el enunciado.
- Si has usado todos los datos necesarios.

Este paso parece pequeño, pero detecta muchos fallos de examen: masas en gramos cuando deberían estar en kilogramos, concentraciones mal convertidas o signos aceptados sin interpretación.

## Entrena variantes

No repitas diez problemas idénticos. Cambia una condición: otra unidad, otro reactivo limitante, otro eje, otro tipo de dato. Así compruebas si sabes razonar o solo reconoces una plantilla.

## Un esquema para el cuaderno

Para cada problema, deja siempre la misma estructura:

1. Dibujo, reacción o sistema.
2. Datos con unidades.
3. Magnitud que se busca.
4. Modelo elegido.
5. Cálculo.
6. Comprobación final.

Parece lento al principio, pero acelera mucho cuando el examen mezcla temas. El objetivo es reducir decisiones improvisadas.

Si necesitas apoyo en problemas técnicos, revisa [Física para Bachillerato e Ingeniería](/clases-particulares/fisica-ingenieria/), [Química](/clases-particulares/quimica/) o [contacta](/contacto/) para organizar un plan.
`,eg=`---
title: IB y GCSE: cómo preparar exámenes internacionales con rúbrica y calendario
date: 2026-06-10
updated: 2026-06-10
description: Una forma ordenada de preparar IB, GCSE e IGCSE: syllabus, rúbrica, práctica cronometrada, errores y revisión semanal.
tag: Exámenes
category: Exámenes internacionales
relatedService: /clases-particulares/gcse-ib/
relatedPosts: preparar-selectividad-con-calendario,fisica-y-quimica-como-plantear-problemas
image: /favicon.svg
---

Los exámenes internacionales no se preparan solo estudiando contenido. En IB, GCSE e IGCSE importa mucho entender el syllabus, la rúbrica, el tipo de respuesta y el tiempo disponible.

La preparación debe combinar conocimiento, técnica de examen y revisión de errores.

## Empieza por el syllabus

Antes de hacer ejercicios al azar, marca:

- Temas incluidos.
- Peso de cada bloque.
- Formato de pregunta.
- Calculadora permitida o no.
- Criterios de corrección.

Esto evita dedicar demasiado tiempo a contenido que no tiene el mismo impacto.

## Entrena con rúbrica

Una respuesta buena no siempre es la más larga. Debe responder a lo que se pide y mostrar el razonamiento que la rúbrica valora.

Después de cada práctica, revisa:

1. Dónde perdiste puntos.
2. Si fue contenido, tiempo o forma de justificar.
3. Qué patrón se repite.
4. Qué vas a cambiar en el siguiente intento.

## Simulacros antes del final

Los mocks no deben aparecer la última semana. Hay que probar tiempo y presión cuando todavía queda margen para corregir.

Un calendario razonable mezcla repaso, ejercicios tipo, simulacros cortos y revisión de errores. Si solo haces ejercicios sin medir tiempo, no estás entrenando el examen completo.

## Idioma y terminología

Si estudias en inglés pero piensas mejor en español, conviene traducir conceptos clave sin perder terminología oficial. La meta es que entiendas el concepto y puedas responder en el idioma del examen.

## Qué debe quedar por escrito

- Lista de temas dominados y temas débiles.
- Errores recurrentes.
- Fórmulas o definiciones que conviene justificar.
- Preguntas tipo que consumen demasiado tiempo.
- Próximo simulacro y criterio de corrección.

## Revisión semanal

Cada semana conviene responder tres preguntas:

1. Qué tema ha mejorado.
2. Qué error se repite.
3. Qué práctica cronometrada toca después.

Esta revisión evita estudiar por inercia. En programas internacionales, donde el formato importa mucho, una preparación sin feedback acaba dejando puntos fáciles por el camino.

Para organizar esa preparación puedes ver [clases para GCSE, IGCSE e IB](/clases-particulares/gcse-ib/) o [contactar](/contacto/) para revisar syllabus, fecha y objetivo.
`,ag=`---
title: Matrices, determinantes y sistemas de ecuaciones: guía completa para primero de carrera
date: 2026-06-25
updated: 2026-06-25
description: Guía de matrices, determinantes y sistemas de ecuaciones para primero de carrera: rango, Gauss, inversa y discusión de soluciones.
tag: Álgebra Lineal
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: algebra-lineal-universidad-que-estudiar-primero-errores,como-estudiar-matematicas-sin-memorizar,como-aprobar-calculo-i-ingenieria-seis-semanas
image: /favicon.svg
---

Matrices, determinantes y sistemas de ecuaciones forman el núcleo operativo del Álgebra Lineal de primero de carrera. Si dominas este bloque, muchos temas posteriores dejan de parecer aislados: bases, dimensión, aplicaciones lineales, autovalores y diagonalización vuelven una y otra vez al rango y al método de Gauss.

## Qué representa una matriz

Una matriz organiza datos, coeficientes o transformaciones. En un sistema lineal:

$$
\\begin{cases}
x+2y=5\\\\
3x-y=4
\\end{cases}
$$

la matriz de coeficientes es:

$$
A=\\begin{pmatrix}
1 & 2\\\\
3 & -1
\\end{pmatrix}
$$

y la matriz ampliada:

$$
(A|b)=
\\begin{pmatrix}
1 & 2 & 5\\\\
3 & -1 & 4
\\end{pmatrix}
$$

El sistema se estudia operando con filas para mantener las mismas soluciones.

## Método de Gauss

El método de Gauss busca una forma escalonada. Las operaciones permitidas son:

- Intercambiar dos filas.
- Multiplicar una fila por un número no nulo.
- Sumar a una fila un múltiplo de otra.

Estas operaciones no son decoración: son la razón por la que el sistema equivalente conserva soluciones.

Para el sistema anterior:

$$
\\begin{pmatrix}
1 & 2 & 5\\\\
3 & -1 & 4
\\end{pmatrix}
$$

Hacemos \\(F_2\\leftarrow F_2-3F_1\\):

$$
\\begin{pmatrix}
1 & 2 & 5\\\\
0 & -7 & -11
\\end{pmatrix}
$$

Entonces:

$$
y=\\frac{11}{7}
$$

y sustituyendo en la primera ecuación:

$$
x+2\\cdot \\frac{11}{7}=5
$$

Por tanto:

$$
x=\\frac{13}{7}
$$

## Rango y discusión de sistemas

El rango mide el número de filas o columnas independientes. Para discutir sistemas se usa el teorema de Rouché-Frobenius:

$$
\\operatorname{rg}(A)=\\operatorname{rg}(A|b)
$$

Si los rangos son distintos, el sistema no tiene solución. Si son iguales, hay solución. Si además coinciden con el número de incógnitas, la solución es única. Si son menores, hay infinitas soluciones.

## Determinantes: cuándo usarlos

El determinante se define para matrices cuadradas. En una matriz \\(2\\times 2\\):

$$
\\det
\\begin{pmatrix}
a & b\\\\
c & d
\\end{pmatrix}
=ad-bc
$$

Si \\(\\det(A)\\neq 0\\), la matriz es invertible y el sistema \\(Ax=b\\) tiene solución única.

Pero cuidado: usar determinantes para todo puede ser lento. Para sistemas grandes, Gauss suele ser más eficiente y menos propenso a errores.

## Matriz inversa

La inversa de \\(A\\), si existe, cumple:

$$
AA^{-1}=I
$$

En sistemas, si \\(A\\) es invertible:

$$
Ax=b \\Rightarrow x=A^{-1}b
$$

Esto es útil conceptualmente, pero en cálculo manual muchas veces se resuelve antes con Gauss que calculando toda la inversa.

## Ejercicio resuelto con parámetro

Discute según \\(a\\):

$$
\\begin{cases}
x+y=1\\\\
2x+2y=a
\\end{cases}
$$

La segunda ecuación tiene el mismo lado izquierdo que el doble de la primera. Si multiplicamos la primera por 2:

$$
2x+2y=2
$$

Para que el sistema sea compatible, debe cumplirse \\(a=2\\).

Si \\(a=2\\), hay infinitas soluciones porque las dos ecuaciones representan la misma recta. Si \\(a\\neq 2\\), no hay solución.

## Errores típicos en primero de carrera

- Dividir por un parámetro sin estudiar el caso en que vale cero.
- Calcular determinantes de matrices que no son cuadradas.
- Confundir matriz de coeficientes y matriz ampliada.
- Hacer operaciones por columnas al resolver un sistema por filas.
- No interpretar el resultado final: única, ninguna o infinitas soluciones.

## Cómo practicar bien

No hagas solo sistemas numéricos. Mezcla:

- Sistemas con parámetro.
- Cálculo de rango.
- Determinantes sencillos.
- Matriz inversa.
- Problemas donde haya que decidir si usar Gauss, determinante o interpretación geométrica.

Si este bloque te cuesta, empieza por [Álgebra Lineal en la universidad](/blog/algebra-lineal-universidad-que-estudiar-primero-errores/) y revisa la página de [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,tg=`---
title: Microeconomía I: diez tipos de problemas que debes dominar antes del examen
date: 2026-07-05
updated: 2026-07-05
description: Diez tipos de problemas de Microeconomía I para preparar el examen: demanda, elasticidad, consumidor, costes, competencia y monopolio.
tag: Microeconomía
category: Economía y ADE
relatedService: /clases-particulares/economia-ade/
relatedPosts: como-aprobar-matematicas-i-ade-economia,economia-ade-matematicas-sin-perderse,econometria-desde-cero-interpretar-regresion
image: /favicon.svg
---

Microeconomía I se aprueba cuando sabes pasar de una gráfica a una fórmula y de una fórmula a una decisión económica. No basta con memorizar definiciones: el examen suele pedir calcular, representar e interpretar.

Estos son diez tipos de problemas que conviene dominar antes del examen.

## 1. Oferta, demanda y equilibrio

Debes saber encontrar el punto de equilibrio resolviendo:

$$
Q_d(P)=Q_s(P)
$$

Si:

$$
Q_d=100-2P,\\qquad Q_s=20+2P
$$

entonces:

$$
100-2P=20+2P
$$

Por tanto:

$$
P=20,\\quad Q=60
$$

## 2. Cambios en curvas

No confundas movimiento a lo largo de una curva con desplazamiento de la curva. Un cambio en el precio mueve sobre la curva. Un cambio en renta, costes, tecnología o preferencias puede desplazarla.

## 3. Elasticidad precio de la demanda

La elasticidad precio mide sensibilidad:

$$
E_p=\\frac{dQ}{dP}\\cdot\\frac{P}{Q}
$$

Si \\(|E_p|>1\\), la demanda es elástica. Si \\(|E_p|<1\\), es inelástica. El signo importa, pero la interpretación suele fijarse en el valor absoluto.

## 4. Restricción presupuestaria

La restricción del consumidor se escribe:

$$
p_xx+p_yy=m
$$

Debes saber representarla, calcular pendientes e interpretar cambios de renta o precios.

## 5. Utilidad y elección óptima

En problemas básicos, el óptimo interior cumple:

$$
\\frac{MU_x}{MU_y}=\\frac{p_x}{p_y}
$$

La lectura económica es clara: la relación marginal de sustitución se iguala al precio relativo.

## 6. Efecto renta y efecto sustitución

Estos problemas penalizan mucho si solo dibujas. Debes explicar qué parte del cambio en consumo viene del precio relativo y qué parte del poder adquisitivo.

## 7. Función de producción

Una función como:

$$
q=f(L,K)
$$

relaciona factores productivos con producción. Revisa producto medio, producto marginal y rendimientos.

## 8. Costes a corto plazo

Debes distinguir coste fijo, coste variable, coste total, coste medio y coste marginal:

$$
CMg(q)=\\frac{dC(q)}{dq}
$$

No memorices curvas sin entender qué decisión representa cada una.

## 9. Competencia perfecta

En competencia perfecta, la empresa toma el precio como dado y produce donde:

$$
P=CMg
$$

siempre revisando condiciones de cierre y beneficio.

## 10. Monopolio

En monopolio, la condición típica es:

$$
IMg=CMg
$$

Después se usa la demanda para encontrar el precio. Un error común es igualar directamente precio y coste marginal como en competencia perfecta.

## Cómo preparar estos diez bloques

Para cada tipo de problema, prepara una ficha:

- Qué pregunta plantea.
- Qué fórmula o gráfica aparece.
- Qué pasos se repiten.
- Qué error suele penalizar.
- Cómo se interpreta el resultado.

## Errores frecuentes

- Aprender gráficos sin saber calcular.
- Calcular sin escribir conclusión económica.
- Confundir coste medio y coste marginal.
- Usar condiciones de competencia perfecta en monopolio.
- No distinguir demanda individual y demanda de mercado.

Si quieres trabajar Microeconomía I desde ejercicios reales, revisa [clases particulares de Economía y ADE](/clases-particulares/economia-ade/) y la guía de [Matemáticas I en ADE y Economía](/blog/como-aprobar-matematicas-i-ade-economia/).
`,ng=`---
title: p-valor, intervalo de confianza y tamaño del efecto explicados con un mismo ejemplo
date: 2026-07-10
updated: 2026-07-10
description: Explicación clara de p-valor, intervalo de confianza y tamaño del efecto usando un mismo ejemplo aplicado a Psicología y Estadística.
tag: Inferencia
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: como-aprobar-estadistica-psicologia-sin-base-matematica,errores-comunes-inferencia-estadistica,que-prueba-estadistica-utilizar-guia-test-correcto
image: /favicon.svg
---

El p-valor, el intervalo de confianza y el tamaño del efecto suelen estudiarse por separado. Eso hace que muchos estudiantes los memoricen sin entender cómo se complementan.

Vamos a explicarlos con un mismo ejemplo.

## El ejemplo

Queremos evaluar si un programa de estudio reduce la ansiedad antes de un examen. Medimos ansiedad antes y después en el mismo grupo. Calculamos la diferencia:

$$
d_i=ansiedad\\ antes_i-ansiedad\\ después_i
$$

Si \\(d_i>0\\), la ansiedad ha bajado. Supongamos que la diferencia media observada es:

$$
\\bar{d}=4.2
$$

Es decir, de media, el grupo baja 4.2 puntos en ansiedad.

## Qué pregunta responde el p-valor

El p-valor responde a una pregunta condicional:

> Si en realidad el programa no tuviera efecto, ¿sería raro observar una diferencia como la encontrada o más extrema?

No es la probabilidad de que la hipótesis nula sea cierta. Tampoco es la probabilidad de que el resultado sea casual en lenguaje cotidiano.

Si planteamos:

$$
H_0:\\mu_d=0
$$

y obtenemos \\(p=0.03\\), diríamos que, bajo \\(H_0\\), el resultado observado sería poco compatible con una diferencia media nula al nivel del 5%.

## Qué aporta el intervalo de confianza

Un intervalo de confianza da un rango plausible para el efecto. Por ejemplo:

$$
IC_{95\\%}=[0.6,\\ 7.8]
$$

Esto indica que la reducción media compatible con los datos podría estar entre 0.6 y 7.8 puntos, bajo el procedimiento usado.

El intervalo aporta algo que el p-valor no da: magnitud e incertidumbre.

## Qué aporta el tamaño del efecto

El tamaño del efecto intenta responder:

> ¿La diferencia es pequeña, moderada o grande en términos prácticos?

Una medida frecuente es:

$$
d_z=\\frac{\\bar{d}}{s_d}
$$

donde \\(s_d\\) es la desviación típica de las diferencias. Si \\(\\bar{d}=4.2\\) y \\(s_d=8.4\\):

$$
d_z=\\frac{4.2}{8.4}=0.5
$$

Podríamos interpretarlo como un efecto moderado, aunque siempre depende del contexto y del área.

## Cómo se complementan

Los tres indicadores responden a preguntas distintas:

- p-valor: evidencia contra la hipótesis nula.
- Intervalo de confianza: rango plausible del efecto.
- Tamaño del efecto: magnitud práctica del cambio.

Un buen informe no se queda en "p menor que 0.05". Debe explicar cuánto cambia la variable y si ese cambio importa.

## Ejemplo de redacción

Una conclusión razonable sería:

> El programa se asoció con una reducción media de 4.2 puntos en ansiedad. La diferencia fue estadísticamente significativa, \\(p=0.03\\), con un intervalo de confianza del 95% entre 0.6 y 7.8 puntos. El tamaño del efecto fue moderado, \\(d_z=0.5\\).

Esa frase informa de dirección, evidencia, incertidumbre y magnitud.

## Errores frecuentes

- Decir que \\(p=0.03\\) significa un 3% de probabilidad de que \\(H_0\\) sea cierta.
- Informar solo "significativo" o "no significativo".
- Ignorar el tamaño del efecto.
- No mirar si el intervalo incluye valores poco relevantes.
- Confundir significación estadística con importancia clínica o práctica.

## Qué mirar en un examen

Si te dan una salida de software, localiza:

1. La diferencia o coeficiente estimado.
2. El p-valor.
3. El intervalo de confianza.
4. El tamaño del efecto si aparece.
5. La frase de interpretación.

Para evitar confusiones habituales, lee también [errores más comunes en Inferencia Estadística](/blog/errores-comunes-inferencia-estadistica/) y [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/).
`,rg=`---
title: Preparar la Selectividad con un calendario que sí se cumple
date: 2026-06-07
updated: 2026-06-07
description: Cómo convertir el temario de Selectividad o PAU en una hoja de ruta semanal con bloques, simulacros y margen real.
tag: Exámenes
category: Selectividad
relatedService: /clases-particulares/selectividad/
relatedPosts: como-estudiar-matematicas-sin-memorizar,ib-gcse-como-preparar-examenes-internacionales
image: /favicon.svg
---

Cuando se acerca la Selectividad, el riesgo no es solo tener mucho temario. El riesgo es estudiar sin dirección: repasar lo que ya sale bien, aplazar lo difícil y llegar a los simulacros demasiado tarde.

Un calendario útil no es una tabla bonita. Es un sistema de decisiones: qué toca esta semana, qué evidencia demuestra progreso y qué se corrige antes de seguir.

## Empieza por el final

Antes de repartir temas, fija tres datos:

- Fecha de cada examen.
- Nota objetivo y margen realista.
- Semanas disponibles hasta la prueba.

Con eso puedes trabajar hacia atrás desde el día del examen. No todas las asignaturas necesitan el mismo peso y no todos los temas tienen el mismo retorno. El calendario debe reflejarlo.

## Bloques pequeños y medibles

Un bloque de estudio productivo debería terminar con una salida concreta:

1. Resumen activo del tema sin copiar apuntes.
2. Ejercicios tipo examen.
3. Corrección con lista de errores.
4. Un mini objetivo para la siguiente sesión.

La pregunta no es "¿cuántas horas he estudiado?", sino "¿qué soy capaz de resolver mejor que ayer?".

## Simulacros antes de la última semana

Dejar los exámenes de años anteriores para el final es un error frecuente. Los simulacros sirven para entrenar tiempo, presión, formato y gestión de errores. Si aparecen tarde, ya no hay margen para corregir patrones.

Empieza con simulacros parciales y aumenta la duración cuando el contenido esté más asentado. Después de cada simulacro, separa fallos en tres grupos: concepto, procedimiento y tiempo.

## Ejemplo de semana

Una semana razonable podría organizarse así:

1. Lunes: repaso activo y formulario de un tema.
2. Martes: ejercicios tipo examen del mismo bloque.
3. Miércoles: corrección y lista de errores.
4. Jueves: segundo bloque o tema débil.
5. Viernes: mini simulacro cronometrado.
6. Fin de semana: recuperación de retrasos o repaso ligero.

El calendario debe tener colchón. Si no hay huecos, se romperá el primer día que un tema sea más difícil de lo previsto.

## Señales de que el plan no funciona

- Avanzas temas sin corregir ejercicios.
- Repasas siempre lo que ya dominas.
- No sabes qué errores se repiten.
- Los simulacros llegan al final.
- El plan exige una energía que no puedes sostener.

## Cómo lo trabajamos

En Nebula el calendario se construye con asignaturas, nota objetivo, fechas y punto de partida. Después se revisa semanalmente para ajustar prioridades.

Si necesitas preparar PAU, Matemáticas, Física, Química u otra materia con un plan medible, revisa [clases particulares para Selectividad y PAU](/clases-particulares/selectividad/) o [reserva un diagnóstico](/contacto/).
`,ig=`---
title: Probabilidad condicionada y teorema de Bayes: problemas universitarios resueltos
date: 2026-06-27
updated: 2026-06-27
description: Problemas resueltos de probabilidad condicionada y teorema de Bayes para universidad, con fórmulas, árboles y errores frecuentes.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: estadistica-desde-cero-para-elegir-contrastes,como-estudiar-matematicas-sin-memorizar,derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos
image: /favicon.svg
---

La probabilidad condicionada y el teorema de Bayes aparecen en asignaturas de Estadística, Ingeniería, Economía, Ciencia de Datos y Biomedicina. El problema no suele ser la fórmula, sino saber qué evento está condicionado por cuál.

La probabilidad condicionada se define como:

$$
P(A|B)=\\frac{P(A\\cap B)}{P(B)}
$$

siempre que \\(P(B)>0\\). Se lee: probabilidad de \\(A\\) sabiendo que ha ocurrido \\(B\\).

## Teorema de Bayes

El teorema de Bayes permite invertir una condición:

$$
P(A|B)=\\frac{P(B|A)P(A)}{P(B)}
$$

Cuando \\(B\\) puede ocurrir bajo varios escenarios \\(A_1,A_2,\\ldots,A_n\\), se usa:

$$
P(A_i|B)=\\frac{P(B|A_i)P(A_i)}{\\sum_{j=1}^{n}P(B|A_j)P(A_j)}
$$

La parte difícil suele estar en calcular bien el denominador: la probabilidad total de observar \\(B\\).

## Problema 1: test médico

Una enfermedad afecta al 2% de la población. Un test da positivo en el 95% de los enfermos y también da positivo en el 4% de los sanos. Si una persona da positivo, ¿cuál es la probabilidad de que esté enferma?

Definimos:

- \\(E\\): estar enfermo.
- \\(+\\): test positivo.

Datos:

$$
P(E)=0.02,\\quad P(+|E)=0.95,\\quad P(+|\\overline{E})=0.04
$$

Aplicamos Bayes:

$$
P(E|+)=\\frac{P(+|E)P(E)}{P(+|E)P(E)+P(+|\\overline{E})P(\\overline{E})}
$$

Sustituimos:

$$
P(E|+)=\\frac{0.95\\cdot 0.02}{0.95\\cdot 0.02+0.04\\cdot 0.98}
$$

Calculando:

$$
P(E|+)=\\frac{0.019}{0.0582}\\approx 0.326
$$

La probabilidad es aproximadamente 32.6%. El resultado sorprende porque la enfermedad es poco frecuente: la prevalencia importa.

## Problema 2: urnas

Hay dos urnas. La urna 1 tiene 3 bolas rojas y 2 azules. La urna 2 tiene 1 bola roja y 4 azules. Se elige una urna al azar y después se extrae una bola. Si la bola es roja, ¿cuál es la probabilidad de haber elegido la urna 1?

Definimos:

- \\(U_1\\): elegir urna 1.
- \\(U_2\\): elegir urna 2.
- \\(R\\): extraer bola roja.

Datos:

$$
P(U_1)=P(U_2)=\\frac{1}{2}
$$

Además:

$$
P(R|U_1)=\\frac{3}{5},\\quad P(R|U_2)=\\frac{1}{5}
$$

Bayes:

$$
P(U_1|R)=\\frac{P(R|U_1)P(U_1)}{P(R|U_1)P(U_1)+P(R|U_2)P(U_2)}
$$

Sustituyendo:

$$
P(U_1|R)=\\frac{\\frac{3}{5}\\cdot\\frac{1}{2}}{\\frac{3}{5}\\cdot\\frac{1}{2}+\\frac{1}{5}\\cdot\\frac{1}{2}}
=\\frac{3}{4}
$$

La probabilidad es 75%.

## Problema 3: producción defectuosa

Una fábrica tiene dos máquinas. La máquina A produce el 70% de las piezas y la máquina B el 30%. A tiene una tasa de defectos del 3% y B del 8%. Si una pieza es defectuosa, ¿cuál es la probabilidad de que venga de B?

Datos:

$$
P(A)=0.7,\\quad P(B)=0.3
$$

$$
P(D|A)=0.03,\\quad P(D|B)=0.08
$$

Aplicamos:

$$
P(B|D)=\\frac{P(D|B)P(B)}{P(D|A)P(A)+P(D|B)P(B)}
$$

Sustituimos:

$$
P(B|D)=\\frac{0.08\\cdot 0.3}{0.03\\cdot 0.7+0.08\\cdot 0.3}
=\\frac{0.024}{0.045}\\approx 0.533
$$

Aunque B produce menos piezas, explica aproximadamente el 53.3% de las defectuosas porque su tasa de defectos es mayor.

## Errores frecuentes

- Confundir \\(P(A|B)\\) con \\(P(B|A)\\).
- Ignorar la probabilidad base o prevalencia.
- Calcular el denominador con un solo caso.
- No definir eventos antes de operar.
- Pasar porcentajes a decimales de forma incorrecta.

## Método para resolver problemas de Bayes

Sigue siempre estos pasos:

1. Define eventos con letras claras.
2. Escribe lo que te dan como probabilidades condicionadas o marginales.
3. Identifica qué probabilidad te piden.
4. Construye el denominador con probabilidad total.
5. Interpreta el resultado en el contexto.

Si estás preparando Estadística, también puedes leer [Estadística desde cero para elegir contrastes](/blog/estadistica-desde-cero-para-elegir-contrastes/) o revisar la página de [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,lg=`---
title: Python y SQL para empezar en datos: qué aprender primero
date: 2026-06-01
updated: 2026-06-01
description: Una ruta inicial para estudiar programación y datos sin saltar entre cursos: SQL, Python, fundamentos y un proyecto pequeño.
tag: Programación
category: Programación y datos
relatedService: /clases-particulares/programacion-universidad/
relatedPosts: transicion-al-sector-it-en-6-meses,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Aprender datos suele empezar con una duda razonable: ¿qué estudio primero, Python, SQL, estadística, Power BI, cloud o machine learning? La confusión aparece cuando intentas estudiar todo a la vez y no cierras nada.

Para construir una base sólida, conviene ordenar la ruta.

## Empieza por SQL

SQL te obliga a pensar en tablas, filtros, agrupaciones y relaciones. Es directo, muy usado y permite comprobar rápido si entiendes los datos.

Los primeros bloques deberían ser:

- Seleccionar columnas.
- Filtrar filas.
- Agrupar y resumir.
- Unir tablas.
- Leer resultados con criterio.

Si no entiendes una tabla, Python no va a arreglar el análisis. Solo hará que el error tenga más código alrededor.

## Usa Python como herramienta

Después entra Python, pero con foco:

1. Variables, listas, diccionarios y funciones.
2. Lectura de errores.
3. Pandas para cargar y transformar datos.
4. Gráficos sencillos para responder preguntas.
5. Scripts o notebooks reproducibles.

No hace falta aprender todo el lenguaje para empezar. Hace falta resolver problemas pequeños sin copiar y saber explicar cada decisión.

## Construye un proyecto mínimo

Un primer proyecto de datos puede ser suficiente si está cerrado:

- Dataset limpio y documentado.
- Tres preguntas concretas.
- Consultas SQL o transformaciones en Python.
- Visualizaciones básicas.
- README con decisiones, limitaciones y próximos pasos.

El objetivo no es impresionar por tamaño. Es demostrar que puedes pasar de una pregunta a una respuesta defendible.

## Evita la dispersión

Una ruta razonable puede ser:

1. Dos semanas de SQL.
2. Dos semanas de Python básico.
3. Dos semanas de mini proyecto.
4. Una semana para documentar y explicar.

Si una semana no produce una salida visible, reduce alcance. Mejor terminar algo pequeño que abandonar algo enorme.

## Cómo saber si avanzas

No midas el progreso por horas de vídeo. Mídelo por entregables:

- Puedes escribir una consulta sin mirar una solución.
- Lees un error de Python y entiendes dónde buscar.
- Tu notebook se ejecuta desde arriba hasta abajo.
- El README explica qué hiciste y por qué.
- Puedes contar el proyecto en tres minutos sin perderte en detalles.

Esa evidencia es la que convierte el estudio en una base profesional.

Para acompañar esta base puedes revisar [clases particulares de Programación desde cero](/clases-particulares/programacion-universidad/) o leer la ruta de [transición al sector IT en 6 meses](/blog/transicion-al-sector-it-en-6-meses/).
`,sg=`---
title: Qué prueba estadística utilizar: guía para elegir el test correcto
date: 2026-07-09
updated: 2026-07-09
description: Guía práctica para elegir la prueba estadística correcta según la pregunta, el tipo de variable, el número de grupos y el diseño del estudio.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: como-aprobar-estadistica-psicologia-sin-base-matematica,regresion-lineal-anova-cuando-utilizar-interpretar-resultados,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Elegir la prueba estadística correcta es una de las partes más difíciles para estudiantes universitarios. Muchas veces conocen la t de Student, ANOVA, chi-cuadrado o regresión, pero no saben cuál usar ante un enunciado nuevo.

La clave es no empezar por el nombre del test. Empieza por la pregunta y por el tipo de variables.

## Paso 1: identifica la pregunta

Casi todos los análisis responden a una de estas preguntas:

- ¿Quiero comparar una media?
- ¿Quiero comparar varios grupos?
- ¿Quiero estudiar una relación?
- ¿Quiero predecir una variable?
- ¿Quiero analizar frecuencias o categorías?

Si no puedes escribir la pregunta en una frase, todavía no estás listo para elegir prueba.

## Paso 2: clasifica la variable dependiente

La variable dependiente es lo que quieres explicar, comparar o predecir.

Puede ser:

- Cuantitativa: puntuación, edad, tiempo, nota, ansiedad en escala.
- Categórica: grupo, diagnóstico, respuesta sí/no, condición experimental.

Si la variable dependiente es cuantitativa, suelen aparecer t, ANOVA, correlación o regresión. Si es categórica, suelen aparecer chi-cuadrado o modelos específicos.

## Paso 3: cuenta grupos o condiciones

Si comparas medias:

- Una media contra un valor: t de una muestra.
- Dos grupos independientes: t de muestras independientes.
- Dos medidas en las mismas personas: t de muestras relacionadas.
- Tres o más grupos independientes: ANOVA de un factor.
- Tres o más medidas repetidas: ANOVA de medidas repetidas.

La diferencia entre independiente y relacionado es crucial. No es lo mismo comparar dos grupos de personas que comparar a las mismas personas antes y después.

## Paso 4: si estudias relación, mira el tipo de variables

Si tienes dos variables cuantitativas, puede encajar una correlación:

$$
r=\\frac{\\operatorname{cov}(X,Y)}{s_Xs_Y}
$$

Si además quieres predecir \\(Y\\) a partir de \\(X\\), puedes usar regresión lineal:

$$
Y=\\beta_0+\\beta_1X+\\varepsilon
$$

Si las variables son categóricas, puede encajar chi-cuadrado:

$$
\\chi^2=\\sum \\frac{(O-E)^2}{E}
$$

donde \\(O\\) son frecuencias observadas y \\(E\\) frecuencias esperadas.

## Guía rápida por escenarios

### Tengo dos grupos y una variable cuantitativa

Usa t de Student para muestras independientes si los grupos son distintos. Ejemplo: ansiedad en grupo control frente a grupo intervención.

### Tengo antes y después en las mismas personas

Usa t de muestras relacionadas si solo hay dos momentos. Ejemplo: estrés antes y después de un programa.

### Tengo tres grupos

Usa ANOVA si comparas medias entre tres o más grupos. Ejemplo: rendimiento en tres métodos de estudio.

### Tengo dos variables cuantitativas

Usa correlación si quieres medir asociación. Usa regresión si quieres predecir o modelizar una variable dependiente.

### Tengo variables categóricas

Usa chi-cuadrado si quieres estudiar asociación entre categorías. Ejemplo: género y elección de tratamiento.

## Supuestos: el filtro que no puedes saltarte

Elegir el test no termina el trabajo. Revisa:

- Independencia de observaciones.
- Escala de medida.
- Normalidad cuando corresponda.
- Homogeneidad de varianzas.
- Tamaño muestral.
- Presencia de valores extremos.

Los supuestos no son un trámite. Pueden cambiar la prueba o la interpretación.

## Error típico: elegir por capítulo

Muchos alumnos usan el test del tema que están estudiando. Si el examen mezcla contenidos, esa estrategia falla. El criterio debe ser la estructura del problema, no el orden del temario.

## Plantilla de decisión

Antes de elegir prueba, completa:

1. Mi variable dependiente es...
2. Es cuantitativa o categórica...
3. Tengo tantos grupos o condiciones...
4. Las observaciones son independientes o relacionadas...
5. Quiero comparar, asociar o predecir...
6. Por tanto, la prueba candidata es...

Para practicar la interpretación, continúa con [p-valor, intervalo de confianza y tamaño del efecto](/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo/) o revisa [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,og=`---
title: Qué son las derivadas y para qué se utilizan
date: 2026-06-19
updated: 2026-06-19
description: Una guía clara para entender las derivadas como pendiente, ritmo de cambio y herramienta para optimizar funciones.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: que-son-las-integrales-y-para-que-se-utilizan,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

Una derivada mide **cómo cambia una magnitud cuando cambia otra**. En una gráfica, esa idea se ve como la pendiente de la curva en un punto concreto. En un problema real, puede representar velocidad, crecimiento, coste marginal, sensibilidad de un modelo o el punto donde una función deja de subir y empieza a bajar.

La dificultad no está solo en aplicar reglas. Está en entender qué pregunta responde la derivada.

## La idea básica

Si una función \\(f(x)\\) describe una relación entre dos variables, la derivada \\(f'(x)\\) mide el cambio instantáneo de \\(f\\) respecto a \\(x\\).

La definición formal es:

$$
f'(x)=\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}
$$

Ese cociente compara cuánto cambia la función cuando \\(x\\) aumenta una cantidad pequeña \\(h\\). El límite hace que esa cantidad sea cada vez más pequeña hasta capturar el cambio en un punto.

## Pendiente de la tangente

En una curva suave, la derivada en \\(x_0\\) coincide con la pendiente de la recta tangente:

$$
f'(x_0)=m_{\\text{tangente}}
$$

![Curva con recta tangente en un punto](/assets/latex/derivative-tangent.svg)

Si la pendiente es positiva, la función crece en ese punto. Si es negativa, decrece. Si vale cero, puede haber un máximo, un mínimo o una zona plana que conviene estudiar con más contexto.

## Para qué se utilizan

Las derivadas aparecen en muchos problemas porque permiten estudiar cambios:

1. **Velocidad.** Si \\(s(t)\\) es la posición, entonces \\(s'(t)\\) es la velocidad.
2. **Optimización.** Para maximizar beneficios, minimizar costes o encontrar el mejor diseño, se buscan puntos donde \\(f'(x)=0\\).
3. **Economía y empresa.** El coste marginal o ingreso marginal se interpreta como una derivada.
4. **Ciencia e ingeniería.** Cambios de temperatura, presión, carga, concentración o energía se modelan con derivadas.
5. **Datos e inteligencia artificial.** Muchos algoritmos ajustan parámetros siguiendo pendientes de una función de error.

## Reglas útiles, pero con sentido

Al estudiar derivadas conviene conocer reglas, pero no memorizarlas sin interpretación:

$$
\\frac{d}{dx}x^n=nx^{n-1}
$$

$$
\\begin{aligned}
(f+g)'&=f'+g'\\\\
(fg)'&=f'g+fg'
\\end{aligned}
$$

$$
(f\\circ g)'(x)=f'(g(x))\\,g'(x)
$$

La regla de la cadena, por ejemplo, no es un truco. Dice que si una variable depende de otra de forma indirecta, el cambio total combina los cambios intermedios.

## Un ejemplo rápido

Para la función:

$$
f(x)=x^2-4x+3
$$

su derivada es:

$$
f'(x)=2x-4
$$

El punto crítico se obtiene con:

$$
2x-4=0 \\Rightarrow x=2
$$

Después no basta con decir "sale 2". Hay que interpretar qué representa ese punto en el problema: un mínimo, un máximo, un cambio de tendencia o una condición que debe compararse con el dominio.

## Cómo estudiarlas mejor

Para dominar derivadas, trabaja cada ejercicio en tres capas:

- Qué significa la función.
- Qué mide la derivada.
- Qué interpretación tiene el resultado.

Si solo practicas reglas, cualquier enunciado nuevo parece distinto. Si entiendes la derivada como ritmo de cambio, las reglas empiezan a tener dirección.

Puedes continuar con [qué son las integrales y para qué se utilizan](/blog/que-son-las-integrales-y-para-que-se-utilizan/) o revisar [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,cg=`---
title: Qué son las integrales y para qué se utilizan
date: 2026-06-21
updated: 2026-06-21
description: Una explicación práctica de las integrales como acumulación, área bajo la curva y herramienta para medir cantidades totales.
tag: Cálculo
category: Matemáticas universitarias
relatedService: /clases-particulares/matematicas-universidad/
relatedPosts: que-son-las-derivadas-y-para-que-se-utilizan,como-estudiar-matematicas-sin-memorizar
image: /favicon.svg
---

Una integral mide **acumulación**. Si la derivada responde a "a qué ritmo cambia algo", la integral responde a "cuánto se ha acumulado en total".

Por eso las integrales aparecen cuando queremos calcular áreas, distancias recorridas, trabajo, masa, probabilidad acumulada, consumo total o cualquier cantidad que se obtiene sumando pequeñas contribuciones.

## La idea geométrica

La integral definida de una función positiva entre \\(a\\) y \\(b\\) representa el área bajo la curva:

$$
\\int_a^b f(x)\\,dx
$$

![Área bajo una curva entre dos límites](/assets/latex/integral-area.svg)

La notación \\(dx\\) recuerda que estamos acumulando tiras muy estrechas. Cada tira tiene una altura aproximada \\(f(x)\\) y una anchura muy pequeña.

## La idea de acumulación

Si \\(v(t)\\) es una velocidad, entonces:

$$
\\int_{t_1}^{t_2} v(t)\\,dt
$$

representa la distancia acumulada entre los instantes \\(t_1\\) y \\(t_2\\), siempre que la velocidad sea positiva. Si una máquina consume energía a una tasa \\(p(t)\\), la integral de \\(p(t)\\) calcula el consumo total.

La integral no solo mira un punto: suma lo que ocurre en todo un intervalo.

## Relación con las derivadas

Derivadas e integrales están conectadas por el teorema fundamental del cálculo. Si \\(F\\) es una primitiva de \\(f\\), es decir, si:

$$
F'(x)=f(x)
$$

entonces:

$$
\\int_a^b f(x)\\,dx = F(b)-F(a)
$$

Esto permite calcular acumulaciones sin sumar infinitas tiras una por una.

## Para qué se utilizan

Las integrales se usan en contextos muy distintos:

1. **Física.** Trabajo, energía, carga eléctrica, centro de masa o distancia recorrida.
2. **Economía.** Costes acumulados, ingresos totales o excedente del consumidor.
3. **Estadística.** Probabilidad acumulada en distribuciones continuas.
4. **Ingeniería.** Flujos, señales, presión acumulada y modelos continuos.
5. **Datos.** Medidas agregadas cuando una magnitud cambia de forma continua.

## Ejemplo básico

Si:

$$
f(x)=2x
$$

una primitiva es:

$$
F(x)=x^2
$$

Por tanto:

$$
\\begin{aligned}
\\int_1^3 2x\\,dx &= F(3)-F(1)\\\\
&=9-1=8
\\end{aligned}
$$

El resultado no es solo un número. Representa la acumulación de \\(2x\\) entre \\(1\\) y \\(3\\), o el área bajo esa recta en ese intervalo.

## Cómo estudiarlas mejor

Antes de resolver, pregúntate:

- Qué se está acumulando.
- Entre qué límites ocurre.
- Qué unidades tiene el resultado.
- Si la integral representa área, distancia, probabilidad, coste u otra magnitud.

Cuando entiendes la integral como acumulación, las técnicas de cálculo dejan de parecer recetas sueltas y empiezan a tener sentido.

Puedes leer también [qué son las derivadas y para qué se utilizan](/blog/que-son-las-derivadas-y-para-que-se-utilizan/) o revisar [clases particulares de Matemáticas](/clases-particulares/matematicas-universidad/).
`,ug=`---
title: R, SPSS, Jamovi o Python: qué programa estadístico conviene usar en la universidad
date: 2026-07-14
updated: 2026-07-14
description: Comparativa práctica entre R, SPSS, Jamovi y Python para Estadística universitaria: ventajas, límites y cuál elegir según asignatura.
tag: Software estadístico
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: como-aprobar-estadistica-psicologia-sin-base-matematica,que-prueba-estadistica-utilizar-guia-test-correcto,econometria-desde-cero-interpretar-regresion
image: /favicon.svg
---

Elegir entre R, SPSS, Jamovi o Python depende de tu carrera, tu asignatura y tu objetivo. No hay una herramienta perfecta para todo. Hay herramientas más cómodas para aprender, más potentes para investigar y más útiles para programar.

Lo importante es no confundir saber hacer clic con entender Estadística. El programa ayuda, pero la interpretación sigue siendo tu responsabilidad.

## SPSS: útil si tu grado lo pide

SPSS es frecuente en Psicología, Educación, Ciencias Sociales y algunas asignaturas aplicadas. Su ventaja principal es la interfaz gráfica: puedes hacer descriptivos, t de Student, ANOVA, correlaciones y regresiones sin programar.

Ventajas:

- Interfaz guiada.
- Muy usado en grados de Psicología.
- Salidas reconocibles en exámenes.
- Bueno para empezar si la asignatura lo exige.

Limitaciones:

- Menos flexible que R o Python.
- Puede fomentar copiar salidas sin entenderlas.
- Licencia dependiente de la universidad.

SPSS conviene si tu profesor lo usa, si el examen pide interpretar sus tablas o si estás empezando desde cero.

## Jamovi: amable para aprender

Jamovi es una opción muy cómoda para aprender Estadística aplicada. Tiene interfaz visual, resultados claros y una curva de entrada más suave que R.

Ventajas:

- Gratuito.
- Salidas limpias.
- Ideal para t, ANOVA, correlación, regresión y descriptiva.
- Menos intimidante para estudiantes sin base técnica.

Limitaciones:

- Menos flexible para análisis avanzados.
- No sustituye una buena comprensión de supuestos.

Jamovi suele ser buena elección para Psicología, Educación y primeros cursos con mucha interpretación.

## R: potente para Estadística y análisis reproducible

R es uno de los lenguajes más usados en Estadística. Permite análisis reproducibles y gráficos de alta calidad.

Una regresión lineal básica en R puede escribirse así:

\`\`\`r
modelo <- lm(nota ~ horas, data = datos)
summary(modelo)
\`\`\`

Ventajas:

- Muy potente para Estadística.
- Gran ecosistema de paquetes.
- Ideal para investigación, TFG, TFM y análisis reproducible.
- Excelente para gráficos.

Limitaciones:

- Requiere aprender sintaxis.
- Al principio puede distraer de la interpretación.

R conviene si quieres ir más allá de aprobar la asignatura y ganar una herramienta sólida para datos.

## Python: útil si conectas Estadística con programación

Python es muy usado en ciencia de datos, machine learning y automatización. Para Estadística universitaria puede ser excelente si ya tienes base de programación o si tu carrera conecta con datos.

Una regresión simple puede hacerse con \`statsmodels\`:

\`\`\`python
import statsmodels.formula.api as smf

modelo = smf.ols("nota ~ horas", data=datos).fit()
print(modelo.summary())
\`\`\`

Ventajas:

- Muy útil para programación y datos.
- Conecta con pandas, NumPy, scikit-learn y visualización.
- Buena opción para perfiles técnicos.

Limitaciones:

- Menos directo que Jamovi o SPSS para empezar.
- Puede ser excesivo si solo necesitas interpretar pruebas básicas.

Python conviene si tu objetivo incluye análisis de datos, automatización o carrera tecnológica.

## Qué elegir según tu caso

Si tu asignatura usa SPSS, empieza por SPSS. Si quieres aprender con una herramienta clara y gratuita, Jamovi es una gran opción. Si te interesa Estadística en serio, aprende R. Si quieres conectar Estadística con programación y datos, aprende Python.

La decisión práctica:

- Psicología de primero: Jamovi o SPSS.
- Psicología con investigación/TFG: Jamovi y después R.
- Economía, ADE o Econometría: R o Python, según profesor.
- Ciencia de datos o ingeniería: Python y R.
- Asignatura con examen de software concreto: usa el programa del profesor.

## Lo que debes saber aunque cambie el programa

Independientemente del software, debes poder:

- Elegir la prueba correcta.
- Identificar variables.
- Revisar supuestos.
- Leer p-valores e intervalos.
- Interpretar tamaño del efecto.
- Redactar una conclusión.

El software cambia; el razonamiento estadístico permanece.

Para decidir qué análisis hacer antes de abrir ningún programa, lee [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/) o revisa [clases particulares de Estadística y Probabilidad](/clases-particulares/estadistica-universidad/).
`,dg=`---
title: Regresión lineal y ANOVA: cuándo utilizar cada método y cómo interpretar los resultados
date: 2026-07-11
updated: 2026-07-11
description: Diferencias entre regresión lineal y ANOVA: cuándo usar cada método, cómo interpretar coeficientes, medias, F y resultados en universidad.
tag: Estadística
category: Estadística
relatedService: /clases-particulares/estadistica-universidad/
relatedPosts: econometria-desde-cero-interpretar-regresion,que-prueba-estadistica-utilizar-guia-test-correcto,p-valor-intervalo-confianza-tamano-efecto-ejemplo
image: /favicon.svg
---

Regresión lineal y ANOVA aparecen en muchas asignaturas de Estadística, Psicología, ADE, Economía, Biología e Ingeniería. A veces se estudian como técnicas separadas, pero están más relacionadas de lo que parece.

La pregunta práctica es: ¿cuándo uso cada una y cómo interpreto el resultado?

## Cuándo usar ANOVA

Usa ANOVA cuando quieres comparar la media de una variable cuantitativa entre tres o más grupos.

Ejemplo:

- Variable dependiente: nota en un test de memoria.
- Factor: método de estudio con tres grupos.
- Pregunta: ¿hay diferencias medias entre métodos?

ANOVA contrasta:

$$
H_0:\\mu_1=\\mu_2=\\mu_3
$$

frente a que al menos una media sea distinta.

El estadístico principal es:

$$
F=\\frac{\\text{variabilidad entre grupos}}{\\text{variabilidad dentro de grupos}}
$$

Si la variabilidad entre grupos es grande respecto a la interna, hay evidencia de diferencias.

## Cuándo usar regresión lineal

Usa regresión lineal cuando quieres explicar o predecir una variable cuantitativa a partir de una o más variables.

El modelo simple es:

$$
Y=\\beta_0+\\beta_1X+\\varepsilon
$$

Ejemplo:

- Variable dependiente: nota.
- Variable explicativa: horas de estudio.
- Pregunta: ¿cómo cambia la nota esperada por cada hora adicional?

Si \\(\\hat{\\beta}\\_1=0.4\\), interpretamos que una hora adicional se asocia con 0.4 puntos más en la nota esperada, según el modelo.

## La conexión entre ANOVA y regresión

ANOVA puede verse como una regresión donde las variables explicativas son categóricas. Si tienes tres métodos de estudio, puedes crear variables indicadoras para comparar grupos.

Por eso ambas técnicas pertenecen al marco del modelo lineal. La diferencia está en cómo formulas la pregunta y qué tipo de predictores usas.

## Interpretar ANOVA correctamente

Un resultado significativo en ANOVA no dice automáticamente qué grupos difieren. Solo indica que no todas las medias parecen iguales.

Después necesitas comparaciones post hoc o contrastes planificados.

Una redacción básica:

> Se encontraron diferencias estadísticamente significativas entre métodos de estudio, \\(F(2,57)=5.31\\), \\(p=0.008\\). Las comparaciones posteriores indicaron que el método A obtuvo una media superior al método C.

## Interpretar regresión correctamente

En regresión, no basta con decir si el modelo es significativo. Debes interpretar coeficientes:

$$
\\hat{Y}=\\hat{\\beta}_0+\\hat{\\beta}_1X
$$

- \\(\\hat{\\beta}\\_0\\): valor esperado de \\(Y\\) cuando \\(X=0\\), si tiene sentido.
- \\(\\hat{\\beta}\\_1\\): cambio esperado en \\(Y\\) por cada unidad adicional de \\(X\\).
- \\(R^2\\): proporción de variabilidad explicada por el modelo.

Si hay varios predictores, añade "manteniendo constantes las demás variables".

## Errores frecuentes

- Usar ANOVA con dos grupos cuando una t de Student sería suficiente, aunque ANOVA también puede dar resultado equivalente.
- Decir que ANOVA indica exactamente qué grupo difiere sin hacer comparaciones.
- Interpretar correlación o regresión como causalidad automática.
- Olvidar revisar supuestos.
- Informar solo \\(p\\) sin magnitud del efecto.

## Decisión rápida

Usa esta regla:

- Variable dependiente cuantitativa y predictor categórico con grupos: ANOVA.
- Variable dependiente cuantitativa y predictor cuantitativo: regresión.
- Varios predictores mixtos: modelo lineal/regresión con variables codificadas.

Para profundizar en regresión, lee [Econometría desde cero](/blog/econometria-desde-cero-interpretar-regresion/). Para decidir entre pruebas, revisa [qué prueba estadística utilizar](/blog/que-prueba-estadistica-utilizar-guia-test-correcto/).
`,mg=`---
title: Transición al sector IT en 6 meses: una ruta realista
date: 2026-06-04
updated: 2026-06-04
description: Una ruta de seis meses para entrar en tecnología con fundamentos, proyecto propio, portfolio y entrevistas preparadas.
tag: Carrera IT
category: Carrera tecnológica
relatedService: /clases-particulares/programacion-universidad/
relatedPosts: python-y-sql-para-empezar-en-datos,estadistica-desde-cero-para-elegir-contrastes
image: /favicon.svg
---

Cambiar de sector para entrar en tecnología es posible, pero no funciona acumulando cursos sin criterio. El error más habitual es estudiar un poco de Python, otro poco de SQL, algo de IA y varios tutoriales sueltos sin terminar nada defendible.

La diferencia entre avanzar y quedarse dando vueltas suele ser una ruta clara: un destino, fundamentos suficientes, un proyecto terminado y práctica para explicar decisiones.

## Elige una dirección

"Quiero entrar en IT" es demasiado amplio. Para seis meses necesitas foco:

- **Datos y analytics:** SQL, Python, limpieza de datos, visualización y comunicación.
- **Desarrollo:** fundamentos de programación, Git, web básica, pruebas y despliegue.
- **Cloud o DevOps inicial:** Linux, redes, automatización y un proveedor concreto.

No hace falta acertar para siempre. Hace falta elegir una dirección durante el tiempo suficiente para generar evidencia.

## La ruta de seis meses

1. **Meses 1 y 2: fundamentos.** Aprende lo mínimo que se repite en cualquier proyecto: control de flujo, estructuras, lectura de errores, Git y terminal.
2. **Meses 3 y 4: proyecto.** Construye algo pequeño pero completo. Debe tener objetivo, datos o entradas, código reproducible y README.
3. **Mes 5: perfil.** Ordena CV, LinkedIn, GitHub y relato profesional alrededor del proyecto.
4. **Mes 6: entrevistas.** Practica preguntas técnicas, explicación de decisiones y simulaciones.

Un proyecto terminado del que sabes hablar vale más que diez certificados que no conectan entre sí.

## Qué debe demostrar tu proyecto

Un primer proyecto no tiene que ser enorme. Tiene que ser claro:

- Qué problema resuelve.
- Qué decisiones tomaste.
- Cómo se ejecuta.
- Qué limitaciones tiene.
- Qué mejorarías en una segunda versión.

En una entrevista no basta con enseñar código. Tienes que explicar cómo pensaste.

## Errores frecuentes

- Aprender tres lenguajes a la vez.
- No terminar ningún proyecto.
- Subir repositorios sin README ni instrucciones.
- Preparar entrevistas leyendo preguntas sin responder en voz alta.
- Ocultar experiencia previa en vez de traducirla a valor.

## Cómo sostener el ritmo

La parte dura no es solo el temario. Es mantener continuidad cuando aparecen dudas, cansancio o comparación con perfiles más avanzados. Por eso conviene revisar progreso cada semana y cerrar entregables pequeños.

Si estás empezando desde cero, puedes leer [Python y SQL para empezar en datos](/blog/python-y-sql-para-empezar-en-datos/) o revisar [clases de programación universitaria y fundamentos](/clases-particulares/programacion-universidad/).
`,Qp=9;function fg(e){const a=/^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(e);if(!a)return{data:{},body:e.trim()};const t={};for(const n of a[1].split(`
`)){const r=n.indexOf(":");if(r===-1)continue;const i=n.slice(0,r).trim();let l=n.slice(r+1).trim();(l.startsWith('"')&&l.endsWith('"')||l.startsWith("'")&&l.endsWith("'"))&&(l=l.slice(1,-1)),i&&(t[i]=l)}return{data:t,body:e.slice(a[0].length).trim()}}function pg(e){const a=e.trim().split(/\s+/).filter(Boolean).length;return Math.max(1,Math.round(a/200))}const hg=Object.assign({"../content/blog/algebra-lineal-universidad-que-estudiar-primero-errores.md":R8,"../content/blog/circuitos-corriente-continua-problemas-resueltos-universidad.md":U8,"../content/blog/como-aprobar-calculo-i-ingenieria-seis-semanas.md":L8,"../content/blog/como-aprobar-estadistica-psicologia-sin-base-matematica.md":H8,"../content/blog/como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas.md":G8,"../content/blog/como-aprobar-matematicas-i-ade-economia.md":Q8,"../content/blog/como-estudiar-matematicas-sin-memorizar.md":Y8,"../content/blog/derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos.md":V8,"../content/blog/diagramas-cuerpo-libre-metodo-errores-frecuentes.md":X8,"../content/blog/econometria-desde-cero-interpretar-regresion.md":Z8,"../content/blog/economia-ade-matematicas-sin-perderse.md":F8,"../content/blog/ecuaciones-diferenciales-identificar-metodo-correcto.md":K8,"../content/blog/errores-comunes-inferencia-estadistica.md":J8,"../content/blog/estadistica-desde-cero-para-elegir-contrastes.md":P8,"../content/blog/estequiometria-universitaria-ejercicios-resueltos.md":I8,"../content/blog/fisica-y-quimica-como-plantear-problemas.md":W8,"../content/blog/ib-gcse-como-preparar-examenes-internacionales.md":eg,"../content/blog/matrices-determinantes-sistemas-ecuaciones-guia.md":ag,"../content/blog/microeconomia-i-tipos-problemas-examen.md":tg,"../content/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo.md":ng,"../content/blog/preparar-selectividad-con-calendario.md":rg,"../content/blog/probabilidad-condicionada-bayes-problemas-resueltos.md":ig,"../content/blog/python-y-sql-para-empezar-en-datos.md":lg,"../content/blog/que-prueba-estadistica-utilizar-guia-test-correcto.md":sg,"../content/blog/que-son-las-derivadas-y-para-que-se-utilizan.md":og,"../content/blog/que-son-las-integrales-y-para-que-se-utilizan.md":cg,"../content/blog/r-spss-jamovi-python-programa-estadistico-universidad.md":ug,"../content/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados.md":dg,"../content/blog/transicion-al-sector-it-en-6-meses.md":mg}),ps=Object.entries(hg).map(([e,a])=>{const t=e.split("/").pop().replace(/\.md$/,""),{data:n,body:r}=fg(a);return{slug:t,title:n.title??t,date:n.date??"",updated:n.updated??n.date??"",description:n.description??"",tag:n.tag??"Blog",category:n.category??n.tag??"Blog",image:n.image??"/favicon.svg",relatedService:n.relatedService??"/contacto/",relatedPosts:n.relatedPosts?n.relatedPosts.split(",").map(i=>i.trim()).filter(Boolean):[],readingMinutes:pg(r),body:r}}).sort((e,a)=>e.date<a.date?1:e.date>a.date?-1:0);function Yp(){return ps}function Vp(e,a=Qp){return Math.max(1,Math.ceil(e.length/a))}function Xp(e,a,t=Qp){const n=(a-1)*t;return e.slice(n,n+t)}function ud(e){return ps.find(a=>a.slug===e)}function vg(e){return ps.filter(a=>a.category===e)}function gg(e,a=3){const t=e.relatedPosts.map(r=>ud(r)).filter(r=>!!r),n=ps.filter(r=>r.slug!==e.slug&&!t.some(i=>i.slug===r.slug));return[...t,...n].slice(0,a)}function bg(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?e:a.toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}function Yi({data:e}){return o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}function dd({children:e}){return o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-spark/35 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-spark"}),e]})}function D0({post:e}){return o.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground",children:[o.jsx("span",{className:"rounded-full border border-spark/40 bg-spark/10 px-3 py-1 font-medium uppercase tracking-[0.18em] text-spark",children:e.category||e.tag}),e.date&&o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(m6,{className:"h-3.5 w-3.5"}),bg(e.date)]}),o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(E6,{className:"h-3.5 w-3.5"}),e.readingMinutes," min de lectura"]})]})}function Zp({currentPage:e,totalPages:a,pathForPage:t,label:n="Paginación del blog"}){if(a<=1)return null;const r=Array.from({length:a},(s,u)=>u+1),i="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 text-sm font-medium text-link transition-colors hover:border-action/35 hover:bg-action/5",l="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-action/50 bg-action px-3 text-sm font-semibold text-primary-foreground";return o.jsxs("nav",{className:"mt-12 flex flex-wrap items-center justify-center gap-2","aria-label":n,children:[e>1&&o.jsx(he,{to:t(e-1),className:i,rel:"prev",children:"Anterior"}),r.map(s=>s===e?o.jsx("span",{className:l,"aria-current":"page",children:s},s):o.jsx(he,{to:t(s),className:i,children:s},s)),e<a&&o.jsx(he,{to:t(e+1),className:i,rel:"next",children:"Siguiente"})]})}function R1({pageNumber:e=1}){const a=Yp(),t=Vp(a),n=Number.isInteger(e)?e:1;return n<1||n>t?o.jsx($0,{}):o.jsx(yg,{posts:a,currentPage:n,totalPages:t})}function yg({posts:e,currentPage:a,totalPages:t}){const n=ne.corePages.find(l=>l.kind==="blog"),r=Al(a),i=Xp(e,a);return Ja({title:a===1?n.title:`${n.h1}, página ${a} | ${ne.site.displayName}`,description:a===1?n.description:`Página ${a} del blog de Método Nebula: guías académicas, problemas resueltos y estrategias de estudio.`,path:r,prevPath:a>1?Al(a-1):void 0,nextPath:a<t?Al(a+1):void 0}),o.jsxs(mt,{children:[o.jsx(Yi,{data:{"@context":"https://schema.org","@type":"Blog",name:n.h1,description:n.description,url:De(r),publisher:{"@type":"EducationalOrganization",name:ne.site.displayName}}}),o.jsxs("section",{className:"relative overflow-hidden border-b border-white/5",children:[o.jsx("div",{className:"nebula-aurora pointer-events-none absolute inset-0 opacity-60"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70"}),o.jsx("div",{className:"relative mx-auto max-w-7xl px-6 pt-16 pb-14 md:pt-24 md:pb-16",children:o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(dd,{children:"Blog"}),o.jsx("h1",{className:"mt-5 font-display text-4xl font-bold leading-[1.05] nebula-gradient-text md:text-6xl",children:n.h1}),o.jsx("p",{className:"mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",children:a===1?n.intro:`Página ${a} de ${t} del archivo del blog.`})]})})]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[a===1&&o.jsxs("div",{className:"mb-12",children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"Categorías"}),o.jsx("div",{className:"mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",children:ne.blogCategories.map(l=>o.jsxs(he,{to:Xu(l.slug),className:"rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-action/35 hover:bg-action/5",children:[o.jsx("span",{className:"text-sm font-semibold text-link",children:l.name}),o.jsx("span",{className:"mt-1 block text-xs text-muted-foreground",children:l.description})]},l.slug))})]}),e.length===0?o.jsx("p",{className:"text-muted-foreground",children:"Todavía no hay entradas publicadas."}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"grid gap-5 md:grid-cols-2 lg:grid-cols-3",children:i.map(l=>o.jsxs(he,{to:`/blog/${l.slug}/`,className:"nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1",children:[o.jsx(D0,{post:l}),o.jsx("h2",{className:"mt-5 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-spark",children:l.title}),o.jsx("p",{className:"mt-3 grow text-sm leading-relaxed text-muted-foreground",children:l.description}),o.jsxs("span",{className:"mt-6 inline-flex items-center gap-2 text-sm font-medium text-link",children:["Leer entrada",o.jsx(bn,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]})]},l.slug))}),o.jsx(Zp,{currentPage:a,totalPages:t,pathForPage:Al})]})]})})]})}function xg({slug:e,pageNumber:a=1}){const t=i7(e);if(!t)return o.jsx($0,{});const n=vg(t.name),r=Vp(n),i=Number.isInteger(a)?a:1;return i<1||i>r?o.jsx($0,{}):o.jsx(Sg,{category:t,posts:n,currentPage:i,totalPages:r})}function Sg({category:e,posts:a,currentPage:t,totalPages:n}){var u;const r=Nl(e.slug,t),i=Xp(a,t),l=t===1?`${e.name}: artículos y guías | ${ne.site.displayName}`:`${e.name}: artículos y guías, página ${t} | ${ne.site.displayName}`,s=t===1?`${e.description} Artículos prácticos de Método Nebula para estudiar con más estructura.`:`Página ${t} de la categoría ${e.name}: artículos prácticos de Método Nebula para estudiar con más estructura.`;return Ja({title:l,description:s,path:r,prevPath:t>1?Nl(e.slug,t-1):void 0,nextPath:t<n?Nl(e.slug,t+1):void 0}),o.jsxs(mt,{children:[o.jsx(Yi,{data:{"@context":"https://schema.org","@type":"CollectionPage",name:l,description:s,url:De(r),isPartOf:{"@type":"Blog",name:(u=ne.corePages.find(m=>m.kind==="blog"))==null?void 0:u.h1}}}),o.jsx(Yi,{data:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:De("/")},{"@type":"ListItem",position:2,name:"Blog",item:De("/blog/")},{"@type":"ListItem",position:3,name:e.name,item:De(r)}]}}),o.jsxs("section",{className:"relative overflow-hidden border-b border-white/5",children:[o.jsx("div",{className:"nebula-aurora pointer-events-none absolute inset-0 opacity-50"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70"}),o.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 pt-12 pb-12 md:pt-16",children:[o.jsxs(he,{to:"/blog/",className:"inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-link",children:[o.jsx(Lu,{className:"h-4 w-4"}),"Todas las categorías"]}),o.jsx("div",{className:"mt-8",children:o.jsx(dd,{children:"Categoría"})}),o.jsx("h1",{className:"mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl",children:e.name}),o.jsx("p",{className:"mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",children:t===1?e.description:`Página ${t} de ${n} de esta categoría.`})]})]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsx("div",{className:"mx-auto max-w-7xl px-6",children:a.length===0?o.jsx("p",{className:"text-muted-foreground",children:"Todavía no hay entradas en esta categoría."}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"grid gap-5 md:grid-cols-2 lg:grid-cols-3",children:i.map(m=>o.jsxs(he,{to:`/blog/${m.slug}/`,className:"nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1",children:[o.jsx(D0,{post:m}),o.jsx("h2",{className:"mt-5 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-spark",children:m.title}),o.jsx("p",{className:"mt-3 grow text-sm leading-relaxed text-muted-foreground",children:m.description}),o.jsxs("span",{className:"mt-6 inline-flex items-center gap-2 text-sm font-medium text-link",children:["Leer entrada",o.jsx(bn,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]})]},m.slug))}),o.jsx(Zp,{currentPage:t,totalPages:n,pathForPage:m=>Nl(e.slug,m),label:`Paginación de ${e.name}`})]})})})]})}function zg({slug:e}){const a=ud(e);return a?o.jsx(wg,{post:a}):o.jsx($0,{})}function wg({post:e}){const a=`/blog/${e.slug}/`,t=gg(e,3);return Ja({title:`${e.title} | ${ne.site.displayName}`,description:e.description,path:a,type:"article",image:e.image}),o.jsxs(mt,{children:[o.jsx(Yi,{data:{"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,author:{"@type":"EducationalOrganization",name:ne.site.displayName,url:De("/")},datePublished:e.date,dateModified:e.updated,mainEntityOfPage:De(a),image:De(e.image),publisher:{"@type":"EducationalOrganization",name:ne.site.displayName,logo:{"@type":"ImageObject",url:De(ne.site.logo)}}}}),o.jsx(Yi,{data:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:De("/")},{"@type":"ListItem",position:2,name:"Blog",item:De("/blog/")},{"@type":"ListItem",position:3,name:e.title,item:De(a)}]}}),o.jsxs("article",{children:[o.jsxs("header",{className:"relative overflow-hidden border-b border-white/5",children:[o.jsx("div",{className:"nebula-aurora pointer-events-none absolute inset-0 opacity-50"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70"}),o.jsxs("div",{className:"relative mx-auto max-w-3xl px-6 pt-12 pb-12 md:pt-16",children:[o.jsxs(he,{to:"/blog/",className:"inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-link",children:[o.jsx(Lu,{className:"h-4 w-4"}),"Todas las entradas"]}),o.jsx("div",{className:"mt-8",children:o.jsx(D0,{post:e})}),o.jsx("h1",{className:"mt-5 font-display text-3xl font-bold leading-[1.1] text-foreground md:text-5xl",children:e.title}),e.description&&o.jsx("p",{className:"mt-5 text-lg text-muted-foreground",children:e.description})]})]}),o.jsxs("div",{className:"mx-auto max-w-3xl px-6 py-14 text-[1.05rem]",children:[o.jsx(B8,{markdown:e.body}),o.jsxs("div",{className:"mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center",children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"¿Quieres aplicar esto a tu caso?"}),o.jsx("p",{className:"mx-auto mt-3 max-w-xl text-sm text-muted-foreground",children:"Empezamos con una llamada de diagnóstico para entender tu objetivo, tu punto de partida y tu fecha. Sin compromiso."}),o.jsx("div",{className:"mt-6 flex justify-center",children:o.jsx(ct,{href:e.relatedService,children:"Ver apoyo relacionado"})})]})]})]}),t.length>0&&o.jsx("section",{className:"border-t border-white/5 py-16",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"Seguir leyendo"}),o.jsx("div",{className:"mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3",children:t.map(n=>o.jsxs(he,{to:`/blog/${n.slug}/`,className:"nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1",children:[o.jsx(D0,{post:n}),o.jsx("h3",{className:"mt-4 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-spark",children:n.title}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:n.description})]},n.slug))})]})})]})}function $0(){return Ja({title:`Entrada no encontrada | ${ne.site.displayName}`,description:"No encontramos esta entrada del blog de Método Nebula.",path:"/blog/",robots:"noindex,follow"}),o.jsx(mt,{children:o.jsxs("section",{className:"mx-auto max-w-3xl px-6 py-28 text-center",children:[o.jsx(dd,{children:"Blog"}),o.jsx("h1",{className:"mt-5 font-display text-3xl font-bold md:text-4xl",children:"No encontramos esta entrada"}),o.jsx("p",{className:"mt-4 text-muted-foreground",children:"Puede que el enlace haya cambiado o que la entrada ya no exista."}),o.jsx("div",{className:"mt-8 flex justify-center",children:o.jsxs(he,{to:"/blog/",className:"inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/[0.05]",children:[o.jsx(Lu,{className:"h-4 w-4"}),"Volver al blog"]})})]})})}function Eg({items:e}){return o.jsx("nav",{"aria-label":"Migas de pan",className:"text-xs text-muted-foreground",children:o.jsxs("ol",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("li",{children:o.jsx(he,{to:"/",className:"text-link transition-colors hover:text-link",children:"Inicio"})}),e.map((a,t)=>o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx("span",{"aria-hidden":"true",children:"/"}),t===e.length-1?o.jsx("span",{className:"text-foreground/80",children:a.label}):o.jsx(he,{to:a.href,className:"text-link transition-colors hover:text-link",children:a.label})]},a.href))]})})}function Jr({label:e,page:a,breadcrumbs:t}){return o.jsxs("header",{className:"relative overflow-hidden border-b border-white/5",children:[o.jsx("div",{className:"nebula-aurora pointer-events-none absolute inset-0 opacity-60"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-px nebula-title-line opacity-70"}),o.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 pt-12 pb-14 md:pt-20 md:pb-18",children:[o.jsx(Eg,{items:t}),o.jsxs("div",{className:"mt-8 max-w-4xl",children:[o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-spark/30 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark",children:[o.jsx(Hu,{className:"h-3.5 w-3.5"}),e]}),o.jsx("h1",{className:"mt-5 font-display text-4xl font-bold leading-[1.08] nebula-gradient-text md:text-6xl",children:a.h1}),o.jsx("p",{className:"mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",children:a.intro})]})]})]})}function k0({data:e}){return o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}function va({children:e,className:a="text-3xl"}){return o.jsxs("div",{children:[o.jsx("span",{className:"block h-1 w-14 rounded-full nebula-title-line"}),o.jsx("h2",{className:`mt-3 font-display font-semibold nebula-heading-text ${a}`,children:e})]})}function jg(){const e=ne.serviceOverview;return Ja({title:e.title,description:e.description,path:e.path}),o.jsxs(mt,{children:[o.jsx(k0,{data:{"@context":"https://schema.org","@type":"Service",name:e.h1,provider:{"@type":"EducationalOrganization",name:ne.site.displayName},areaServed:"España",url:De(e.path)}}),o.jsx(Jr,{label:"Clases desde ESO",page:e,breadcrumbs:[{label:"Clases desde ESO",href:e.path}]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[0.9fr_1.1fr]",children:[o.jsxs("div",{children:[o.jsx(va,{children:"Un mapa para cada etapa"}),o.jsx("p",{className:"mt-4 text-muted-foreground",children:"Trabajamos desde ESO y Bachillerato hasta Selectividad, programas internacionales, FP, Universidad y perfiles técnicos. Matemáticas, estadística, programación, física, química y economía se adaptan al temario real del alumno, a su etapa y a la fecha de examen."})]}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:ne.servicePages.map(a=>o.jsxs(he,{to:a.path,className:"nebula-card group rounded-2xl p-5 transition-transform hover:-translate-y-1",children:[o.jsx("h3",{className:"font-display text-lg font-semibold group-hover:text-link",children:a.h1}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:a.description}),o.jsxs("span",{className:"mt-4 inline-flex items-center gap-2 text-sm text-link",children:["Ver programa ",o.jsx(bn,{className:"h-4 w-4"})]})]},a.path))})]})})]})}function Ag({page:e}){Ja({title:e.title,description:e.description,path:e.path});const a=e.relatedPosts.map(t=>ud(t)).filter(Boolean);return o.jsxs(mt,{children:[o.jsx(k0,{data:{"@context":"https://schema.org","@type":"Service",name:e.h1,description:e.description,provider:{"@type":"EducationalOrganization",name:ne.site.displayName},url:De(e.path)}}),o.jsx(k0,{data:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:De("/")},{"@type":"ListItem",position:2,name:"Clases desde ESO",item:De(ne.serviceOverview.path)},{"@type":"ListItem",position:3,name:e.h1,item:De(e.path)}]}}),o.jsx(Jr,{label:"Servicio",page:{h1:e.h1,intro:e.audience},breadcrumbs:[{label:"Clases desde ESO",href:ne.serviceOverview.path},{label:e.h1,href:e.path}]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.75fr]",children:[o.jsxs("div",{className:"space-y-10",children:[o.jsx(So,{title:"Problemas habituales",items:e.problems}),o.jsx(So,{title:"Bloques que podemos trabajar",items:e.topics}),o.jsx(So,{title:"Cómo funciona el método",items:e.method,ordered:!0}),o.jsxs("section",{children:[o.jsx(va,{className:"text-2xl",children:"Perfil docente"}),o.jsx("p",{className:"mt-3 leading-relaxed text-muted-foreground",children:e.profile})]}),o.jsxs("section",{children:[o.jsx(va,{className:"text-2xl",children:"Preguntas frecuentes"}),o.jsx("div",{className:"mt-5 divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]",children:e.faq.map(t=>o.jsxs("div",{className:"p-5",children:[o.jsx("h3",{className:"font-semibold",children:t.q}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:t.a})]},t.q))})]})]}),o.jsxs("aside",{className:"space-y-5",children:[o.jsxs("div",{className:"nebula-card rounded-3xl p-6",children:[o.jsx(va,{className:"text-xl",children:"Diagnóstico inicial"}),o.jsx("p",{className:"mt-3 text-sm text-muted-foreground",children:"Cuéntanos asignatura, etapa, curso, centro o universidad, fecha y punto de partida. Te devolvemos una propuesta de trabajo ajustada al caso."}),o.jsx(ct,{href:"/contacto/",className:"mt-5 w-full",children:"Contactar"})]}),a.length>0&&o.jsxs("div",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(va,{className:"text-xl",children:"Lecturas relacionadas"}),o.jsx("div",{className:"mt-4 space-y-3",children:a.map(t=>t?o.jsxs(he,{to:`/blog/${t.slug}/`,className:"block rounded-2xl border border-white/8 p-4 text-sm hover:border-white/20",children:[o.jsx("span",{className:"inline-flex rounded-full border border-spark/35 bg-spark/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.16em] text-spark",children:t.category}),o.jsx("span",{className:"mt-1 block font-medium",children:t.title})]},t.slug):null)})]})]})]})})]})}function So({title:e,items:a,ordered:t}){const n=t?"ol":"ul";return o.jsxs("section",{children:[o.jsx(va,{className:"text-2xl",children:e}),o.jsx(n,{className:"mt-5 grid gap-3 sm:grid-cols-2",children:a.map((r,i)=>o.jsxs("li",{className:"flex items-start gap-3 rounded-2xl border border-white/8 p-4",children:[t?o.jsxs("span",{className:"font-display text-sm font-semibold text-action",children:[i+1,"."]}):o.jsx(nl,{className:"mt-0.5 h-4 w-4 shrink-0 text-action"}),o.jsx("span",{className:"text-sm text-foreground/85",children:r})]},r))})]})}function Ng(){const e=ne.corePages.find(n=>n.kind==="about"),a=["Graduado en Matemáticas.","Máster en Big Data e Inteligencia Artificial.","Experiencia profesional en tecnología.","Más de 6 años dando clases.","Trabajo desde ESO y Bachillerato hasta Universidad, exámenes internacionales y perfiles técnicos."],t=[{title:"Primero entiendo el bloqueo",text:"Antes de llenar una clase de ejercicios, reviso qué falta: base matemática, método de estudio, lectura del enunciado, práctica real o calendario."},{title:"Después ordeno el camino",text:"Cada sesión tiene una función dentro del plan: explicar, practicar, corregir errores, preparar examen o construir autonomía."},{title:"Finalmente medimos progreso",text:"No basta con salir de clase con buena sensación. El objetivo es que puedas resolver, justificar y repetir el razonamiento sin depender de una solución delante."}];return Ja({title:e.title,description:e.description,path:e.path}),o.jsxs(mt,{children:[o.jsx(k0,{data:{"@context":"https://schema.org","@type":"AboutPage",name:e.h1,description:e.description,about:{"@type":"EducationalOrganization",name:ne.site.displayName,knowsAbout:ne.site.author.knowsAbout},url:De(e.path)}}),o.jsx(Jr,{label:"Sobre Nebula",page:e,breadcrumbs:[{label:"Sobre Nebula",href:e.path}]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr]",children:[o.jsxs("div",{className:"space-y-8",children:[o.jsxs("section",{children:[o.jsx(va,{children:"Quién soy"}),o.jsxs("div",{className:"mt-4 space-y-4 leading-relaxed text-muted-foreground",children:[o.jsx("p",{children:"Método Nebula es un proyecto de mentoría académica y profesional. El trabajo está en la intersección entre la matemática, la ciencia, la programación y la forma en que una persona aprende cuando tiene una fecha, un examen o una decisión importante delante."}),o.jsx("p",{children:"Método Nebula nace de una idea sencilla: muchas veces el alumno no necesita solo más horas, sino un diagnóstico honesto, una explicación clara y una estructura que convierta el esfuerzo en progreso."})]})]}),o.jsxs("section",{children:[o.jsx(va,{children:"Cómo entiendo la enseñanza"}),o.jsx("p",{className:"mt-4 leading-relaxed text-muted-foreground",children:"Enseñar no es resolver por el alumno. Es ayudarle a ver el mapa: qué pregunta plantea el problema, qué herramientas sirven, por qué aparece cada paso y cómo comprobar si el resultado tiene sentido."}),o.jsx("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:t.map(n=>o.jsxs("article",{className:"rounded-2xl border border-white/8 bg-white/[0.02] p-5",children:[o.jsx("h3",{className:"font-semibold nebula-subheading-text",children:n.title}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:n.text})]},n.title))})]})]}),o.jsxs("aside",{className:"space-y-5",children:[o.jsxs("div",{className:"nebula-card rounded-3xl p-6",children:[o.jsx(va,{className:"text-2xl",children:"En pocas líneas"}),o.jsx("ul",{className:"mt-5 space-y-3",children:a.map(n=>o.jsxs("li",{className:"flex items-start gap-3 text-sm",children:[o.jsx(nl,{className:"mt-0.5 h-4 w-4 shrink-0 text-action"}),o.jsx("span",{className:"text-foreground/90",children:n})]},n))})]}),o.jsxs("div",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(va,{className:"text-xl",children:"Áreas de trabajo"}),o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:ne.site.author.knowsAbout.map(n=>o.jsx("span",{className:"rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/80",children:n},n))}),o.jsx(ct,{href:"/contacto/",className:"mt-6 w-full",children:"Contar mi caso"})]})]})]})})]})}function qg(){const e=ne.corePages.find(a=>a.kind==="method");return Ja({title:e.title,description:e.description,path:e.path}),o.jsxs(mt,{children:[o.jsx(Jr,{label:"Método",page:e,breadcrumbs:[{label:"Metodología",href:e.path}]}),o.jsx(Cg,{sections:[{title:"1. Diagnóstico",text:"Antes de proponer clases se revisan nivel, asignatura, fecha, temario, materiales y tipo de examen. El objetivo es detectar el cuello de botella real."},{title:"2. Plan",text:"El trabajo se ordena en bloques semanales. Cada bloque tiene una prioridad, una práctica y una evidencia de progreso."},{title:"3. Clase y material",text:"La sesión combina explicación, resolución guiada y práctica. El material se adapta al objetivo, evitando PDFs genéricos sin conexión con el examen."},{title:"4. Seguimiento",text:"El plan se revisa cuando aparecen errores repetidos, retrasos o cambios de calendario. La personalización ocurre durante todo el proceso."}]})]})}function Mg(){const e=ne.corePages.find(n=>n.kind==="contact"),{copied:a,copy:t}=ts();return Ja({title:e.title,description:e.description,path:e.path}),o.jsxs(mt,{children:[o.jsx(Jr,{label:"Contacto",page:e,breadcrumbs:[{label:"Contacto",href:e.path}]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto max-w-3xl px-6",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("button",{onClick:t,className:"flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors hover:border-white/25",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsx(es,{className:"h-5 w-5 text-action"}),o.jsxs("span",{children:[o.jsx("span",{className:"block font-semibold",children:"WhatsApp"}),o.jsx("span",{className:"text-sm text-muted-foreground",children:Yu})]})]}),o.jsx("span",{className:"text-sm text-action",children:a?"Copiado":"Copiar"})]}),o.jsxs("a",{href:Vu,className:"flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsx(Qu,{className:"h-5 w-5 text-action"}),o.jsxs("span",{children:[o.jsx("span",{className:"block font-semibold",children:"Email"}),o.jsx("span",{className:"text-sm text-muted-foreground",children:as})]})]}),o.jsx(bn,{className:"h-4 w-4"})]})]}),o.jsx("p",{className:"mt-8 text-sm leading-relaxed text-muted-foreground",children:"Cuéntanos asignatura, fecha de examen, temario y punto de partida. Con esa información revisamos si Nebula encaja y qué plan tendría más sentido."})]})})]})}function Tg(){const e=Yp(),a={h1:"Mapa del sitio",intro:"Todas las páginas principales de Método Nebula organizadas para encontrar servicios, categorías y artículos."};return Ja({title:`Mapa del sitio | ${ne.site.displayName}`,description:"Mapa HTML de Método Nebula con enlaces a servicios, categorías del blog y artículos publicados.",path:"/mapa-del-sitio/"}),o.jsxs(mt,{children:[o.jsx(Jr,{label:"Índice",page:a,breadcrumbs:[{label:"Mapa del sitio",href:"/mapa-del-sitio/"}]}),o.jsxs("section",{className:"py-16 md:py-20",children:[o.jsxs("div",{className:"mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3",children:[o.jsxs("section",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(va,{className:"text-2xl",children:"Páginas principales"}),o.jsxs("ul",{className:"mt-5 space-y-3 text-sm",children:[o.jsx("li",{children:o.jsx(he,{to:"/",className:"text-link transition-colors hover:text-link",children:"Inicio"})}),o.jsx("li",{children:o.jsx(he,{to:"/clases-particulares/universidad/",className:"text-link transition-colors hover:text-link",children:"Clases desde ESO"})}),o.jsx("li",{children:o.jsx(he,{to:"/metodologia/",className:"text-link transition-colors hover:text-link",children:"Metodología"})}),o.jsx("li",{children:o.jsx(he,{to:"/sobre-nebula/",className:"text-link transition-colors hover:text-link",children:"Sobre Nebula"})}),o.jsx("li",{children:o.jsx(he,{to:"/contacto/",className:"text-link transition-colors hover:text-link",children:"Contacto"})})]})]}),o.jsxs("section",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(va,{className:"text-2xl",children:"Servicios"}),o.jsx("ul",{className:"mt-5 space-y-3 text-sm",children:ne.servicePages.map(t=>o.jsx("li",{children:o.jsx(he,{to:t.path,className:"text-link transition-colors hover:text-link",children:t.h1})},t.path))})]}),o.jsxs("section",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(va,{className:"text-2xl",children:"Categorías"}),o.jsxs("ul",{className:"mt-5 space-y-3 text-sm",children:[o.jsx("li",{children:o.jsx(he,{to:"/blog/",className:"text-link transition-colors hover:text-link",children:"Blog"})}),ne.blogCategories.map(t=>o.jsx("li",{children:o.jsx(he,{to:Xu(t.slug),className:"text-link transition-colors hover:text-link",children:t.name})},t.slug))]})]})]}),o.jsx("div",{className:"mx-auto mt-8 max-w-7xl px-6",children:o.jsxs("section",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(va,{className:"text-2xl",children:"Artículos publicados"}),o.jsx("div",{className:"mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3",children:e.map(t=>o.jsxs(he,{to:`/blog/${t.slug}/`,className:"rounded-2xl border border-white/8 p-4 text-sm transition-colors hover:border-action/35 hover:bg-action/5",children:[o.jsx("span",{className:"block font-medium text-link",children:t.title}),o.jsx("span",{className:"mt-1 block text-xs text-muted-foreground",children:t.category})]},t.slug))})]})})]})]})}function Cg({sections:e}){return o.jsx("section",{className:"py-16 md:py-20",children:o.jsx("div",{className:"mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2",children:e.map((a,t)=>o.jsxs("article",{className:"nebula-card relative overflow-hidden rounded-3xl p-7",children:[o.jsx("span",{className:"absolute inset-x-0 top-0 h-1 nebula-title-line"}),o.jsx("span",{className:"font-display text-sm font-semibold text-violet-soft",children:String(t+1).padStart(2,"0")}),o.jsx("h2",{className:"mt-3 font-display text-2xl font-semibold nebula-heading-text",children:a.title.replace(/^\d+\.\s*/,"")}),o.jsx("p",{className:"mt-3 leading-relaxed text-muted-foreground",children:a.text})]},a.title))})})}function Ol(){return Ja({title:"Página no encontrada | Método Nebula",description:"La página solicitada no existe. Vuelve al inicio, consulta el blog o contacta con Método Nebula.",path:"/404/",robots:"noindex,follow"}),o.jsxs("div",{className:"min-h-screen bg-background text-foreground antialiased",children:[o.jsxs("main",{className:"mx-auto max-w-3xl px-6 py-28 text-center",children:[o.jsx(at,{children:"404"}),o.jsx("h1",{className:"mt-5 font-display text-4xl font-bold",children:"Página no encontrada"}),o.jsx("p",{className:"mt-4 text-muted-foreground",children:"El enlace puede haber cambiado. Puedes volver al inicio, revisar las clases desde ESO o contactar para explicar tu caso."}),o.jsxs("div",{className:"mt-8 flex flex-wrap justify-center gap-3",children:[o.jsx(ct,{href:"/",children:"Inicio"}),o.jsx("a",{href:"/blog/",className:"inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium",children:"Blog"}),o.jsx("a",{href:"/clases-particulares/universidad/",className:"inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium",children:"Clases desde ESO"}),o.jsx("a",{href:"/contacto/",className:"inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium",children:"Contacto"})]})]}),o.jsx(Fu,{})]})}function Dg(){const a=c7().replace(/\/+$/,"")||"/";if(a==="/blog")return o.jsx(R1,{});if(a.startsWith("/blog/pagina/")){const n=/^\/blog\/pagina\/(\d+)$/.exec(a);if(!n)return o.jsx(Ol,{});const r=Number.parseInt(n[1],10);return o.jsx(R1,{pageNumber:r})}if(a.startsWith("/blog/categoria/")){const n=a.slice(16),r=/^([^/]+)(?:\/pagina\/(\d+))?$/.exec(n);return r?o.jsx(xg,{slug:decodeURIComponent(r[1]),pageNumber:r[2]?Number.parseInt(r[2],10):1}):o.jsx(Ol,{})}if(a.startsWith("/blog/"))return o.jsx(zg,{slug:decodeURIComponent(a.slice(6))});if(a==="/clases-particulares/universidad")return o.jsx(jg,{});const t=l7(a);return t?o.jsx(Ag,{page:t}):a==="/sobre-nebula"?o.jsx(Ng,{}):a==="/metodologia"?o.jsx(qg,{}):a==="/contacto"?o.jsx(Mg,{}):a==="/mapa-del-sitio"?o.jsx(Tg,{}):a==="/"?o.jsx(m7,{}):a==="/404"?o.jsx(Ol,{}):o.jsx(Ol,{})}const Fp=document.getElementById("root");if(!Fp)throw new Error("Root element #root not found");W3.createRoot(Fp).render(o.jsx(ja.StrictMode,{children:o.jsx(Dg,{})}));
