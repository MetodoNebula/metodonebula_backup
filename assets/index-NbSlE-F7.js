(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var G1={exports:{}},Os={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh=Symbol.for("react.transitional.element"),ch=Symbol.for("react.fragment");function Q1(e,a,t){var n=null;if(t!==void 0&&(n=""+t),a.key!==void 0&&(n=""+a.key),"key"in a){t={};for(var i in a)i!=="key"&&(t[i]=a[i])}else t=a;return a=t.ref,{$$typeof:oh,type:e,key:n,ref:a!==void 0?a:null,props:t}}Os.Fragment=ch;Os.jsx=Q1;Os.jsxs=Q1;G1.exports=Os;var o=G1.exports,Y1={exports:{}},P={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc=Symbol.for("react.transitional.element"),uh=Symbol.for("react.portal"),dh=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),ph=Symbol.for("react.consumer"),hh=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),bh=Symbol.for("react.memo"),V1=Symbol.for("react.lazy"),yh=Symbol.for("react.activity"),Sd=Symbol.iterator;function xh(e){return e===null||typeof e!="object"?null:(e=Sd&&e[Sd]||e["@@iterator"],typeof e=="function"?e:null)}var X1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z1=Object.assign,F1={};function Li(e,a,t){this.props=e,this.context=a,this.refs=F1,this.updater=t||X1}Li.prototype.isReactComponent={};Li.prototype.setState=function(e,a){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,a,"setState")};Li.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function K1(){}K1.prototype=Li.prototype;function Qc(e,a,t){this.props=e,this.context=a,this.refs=F1,this.updater=t||X1}var Yc=Qc.prototype=new K1;Yc.constructor=Qc;Z1(Yc,Li.prototype);Yc.isPureReactComponent=!0;var zd=Array.isArray;function jo(){}var ze={H:null,A:null,T:null,S:null},P1=Object.prototype.hasOwnProperty;function Vc(e,a,t){var n=t.ref;return{$$typeof:Gc,type:e,key:a,ref:n!==void 0?n:null,props:t}}function Sh(e,a){return Vc(e.type,a,e.props)}function Xc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gc}function zh(e){var a={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return a[t]})}var wd=/\/+/g;function b0(e,a){return typeof e=="object"&&e!==null&&e.key!=null?zh(""+e.key):a.toString(36)}function wh(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(jo,jo):(e.status="pending",e.then(function(a){e.status==="pending"&&(e.status="fulfilled",e.value=a)},function(a){e.status==="pending"&&(e.status="rejected",e.reason=a)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ti(e,a,t,n,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gc:case uh:l=!0;break;case V1:return l=e._init,ti(l(e._payload),a,t,n,i)}}if(l)return i=i(e),l=n===""?"."+b0(e,0):n,zd(i)?(t="",l!=null&&(t=l.replace(wd,"$&/")+"/"),ti(i,a,t,"",function(m){return m})):i!=null&&(Xc(i)&&(i=Sh(i,t+(i.key==null||e&&e.key===i.key?"":(""+i.key).replace(wd,"$&/")+"/")+l)),a.push(i)),1;l=0;var s=n===""?".":n+":";if(zd(e))for(var u=0;u<e.length;u++)n=e[u],r=s+b0(n,u),l+=ti(n,a,t,r,i);else if(u=xh(e),typeof u=="function")for(e=u.call(e),u=0;!(n=e.next()).done;)n=n.value,r=s+b0(n,u++),l+=ti(n,a,t,r,i);else if(r==="object"){if(typeof e.then=="function")return ti(wh(e),a,t,n,i);throw a=String(e),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return l}function ml(e,a,t){if(e==null)return e;var n=[],i=0;return ti(e,n,"","",function(r){return a.call(t,r,i++)}),n}function jh(e){if(e._status===-1){var a=e._result;a=a(),a.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=a)}if(e._status===1)return e._result.default;throw e._result}var jd=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Eh={map:ml,forEach:function(e,a,t){ml(e,function(){a.apply(this,arguments)},t)},count:function(e){var a=0;return ml(e,function(){a++}),a},toArray:function(e){return ml(e,function(a){return a})||[]},only:function(e){if(!Xc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Activity=yh;P.Children=Eh;P.Component=Li;P.Fragment=dh;P.Profiler=fh;P.PureComponent=Qc;P.StrictMode=mh;P.Suspense=gh;P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ze;P.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ze.H.useMemoCache(e)}};P.cache=function(e){return function(){return e.apply(null,arguments)}};P.cacheSignal=function(){return null};P.cloneElement=function(e,a,t){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=Z1({},e.props),i=e.key;if(a!=null)for(r in a.key!==void 0&&(i=""+a.key),a)!P1.call(a,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&a.ref===void 0||(n[r]=a[r]);var r=arguments.length-2;if(r===1)n.children=t;else if(1<r){for(var l=Array(r),s=0;s<r;s++)l[s]=arguments[s+2];n.children=l}return Vc(e.type,i,n)};P.createContext=function(e){return e={$$typeof:hh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ph,_context:e},e};P.createElement=function(e,a,t){var n,i={},r=null;if(a!=null)for(n in a.key!==void 0&&(r=""+a.key),a)P1.call(a,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=a[n]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return Vc(e,r,i)};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:vh,render:e}};P.isValidElement=Xc;P.lazy=function(e){return{$$typeof:V1,_payload:{_status:-1,_result:e},_init:jh}};P.memo=function(e,a){return{$$typeof:bh,type:e,compare:a===void 0?null:a}};P.startTransition=function(e){var a=ze.T,t={};ze.T=t;try{var n=e(),i=ze.S;i!==null&&i(t,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(jo,jd)}catch(r){jd(r)}finally{a!==null&&t.types!==null&&(a.types=t.types),ze.T=a}};P.unstable_useCacheRefresh=function(){return ze.H.useCacheRefresh()};P.use=function(e){return ze.H.use(e)};P.useActionState=function(e,a,t){return ze.H.useActionState(e,a,t)};P.useCallback=function(e,a){return ze.H.useCallback(e,a)};P.useContext=function(e){return ze.H.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e,a){return ze.H.useDeferredValue(e,a)};P.useEffect=function(e,a){return ze.H.useEffect(e,a)};P.useEffectEvent=function(e){return ze.H.useEffectEvent(e)};P.useId=function(){return ze.H.useId()};P.useImperativeHandle=function(e,a,t){return ze.H.useImperativeHandle(e,a,t)};P.useInsertionEffect=function(e,a){return ze.H.useInsertionEffect(e,a)};P.useLayoutEffect=function(e,a){return ze.H.useLayoutEffect(e,a)};P.useMemo=function(e,a){return ze.H.useMemo(e,a)};P.useOptimistic=function(e,a){return ze.H.useOptimistic(e,a)};P.useReducer=function(e,a,t){return ze.H.useReducer(e,a,t)};P.useRef=function(e){return ze.H.useRef(e)};P.useState=function(e){return ze.H.useState(e)};P.useSyncExternalStore=function(e,a,t){return ze.H.useSyncExternalStore(e,a,t)};P.useTransition=function(){return ze.H.useTransition()};P.version="19.2.0";Y1.exports=P;var ga=Y1.exports,J1={exports:{}},Bs={},I1={exports:{}},W1={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function a(R,K){var Z=R.length;R.push(K);e:for(;0<Z;){var ye=Z-1>>>1,pe=R[ye];if(0<i(pe,K))R[ye]=K,R[Z]=pe,Z=ye;else break e}}function t(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var K=R[0],Z=R.pop();if(Z!==K){R[0]=Z;e:for(var ye=0,pe=R.length,Sa=pe>>>1;ye<Sa;){var nt=2*(ye+1)-1,ia=R[nt],Ba=nt+1,Nn=R[Ba];if(0>i(ia,Z))Ba<pe&&0>i(Nn,ia)?(R[ye]=Nn,R[Ba]=Z,ye=Ba):(R[ye]=ia,R[nt]=Z,ye=nt);else if(Ba<pe&&0>i(Nn,Z))R[ye]=Nn,R[Ba]=Z,ye=Ba;else break e}}return K}function i(R,K){var Z=R.sortIndex-K.sortIndex;return Z!==0?Z:R.id-K.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],m=[],p=1,g=null,v=3,b=!1,N=!1,A=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function E(R){for(var K=t(m);K!==null;){if(K.callback===null)n(m);else if(K.startTime<=R)n(m),K.sortIndex=K.expirationTime,a(u,K);else break;K=t(m)}}function $(R){if(A=!1,E(R),!N)if(t(u)!==null)N=!0,B||(B=!0,oe());else{var K=t(m);K!==null&&na($,K.startTime-R)}}var B=!1,C=-1,U=5,L=-1;function Y(){return M?!0:!(e.unstable_now()-L<U)}function ge(){if(M=!1,B){var R=e.unstable_now();L=R;var K=!0;try{e:{N=!1,A&&(A=!1,y(C),C=-1),b=!0;var Z=v;try{a:{for(E(R),g=t(u);g!==null&&!(g.expirationTime>R&&Y());){var ye=g.callback;if(typeof ye=="function"){g.callback=null,v=g.priorityLevel;var pe=ye(g.expirationTime<=R);if(R=e.unstable_now(),typeof pe=="function"){g.callback=pe,E(R),K=!0;break a}g===t(u)&&n(u),E(R)}else n(u);g=t(u)}if(g!==null)K=!0;else{var Sa=t(m);Sa!==null&&na($,Sa.startTime-R),K=!1}}break e}finally{g=null,v=Z,b=!1}K=void 0}}finally{K?oe():B=!1}}}var oe;if(typeof w=="function")oe=function(){w(ge)};else if(typeof MessageChannel<"u"){var Qt=new MessageChannel,Oa=Qt.port2;Qt.port1.onmessage=ge,oe=function(){Oa.postMessage(null)}}else oe=function(){x(ge,0)};function na(R,K){C=x(function(){R(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(R){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var Z=v;v=K;try{return R()}finally{v=Z}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(R,K){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var Z=v;v=R;try{return K()}finally{v=Z}},e.unstable_scheduleCallback=function(R,K,Z){var ye=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ye+Z:ye):Z=ye,R){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Z+pe,R={id:p++,callback:K,priorityLevel:R,startTime:Z,expirationTime:pe,sortIndex:-1},Z>ye?(R.sortIndex=Z,a(m,R),t(u)===null&&R===t(m)&&(A?(y(C),C=-1):A=!0,na($,Z-ye))):(R.sortIndex=pe,a(u,R),N||b||(N=!0,B||(B=!0,oe()))),R},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(R){var K=v;return function(){var Z=v;v=K;try{return R.apply(this,arguments)}finally{v=Z}}}})(W1);I1.exports=W1;var Nh=I1.exports,ef={exports:{}},ua={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah=ga;function af(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Yt(){}var oa={d:{f:Yt,r:function(){throw Error(af(522))},D:Yt,C:Yt,L:Yt,m:Yt,X:Yt,S:Yt,M:Yt},p:0,findDOMNode:null},qh=Symbol.for("react.portal");function Mh(e,a,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qh,key:n==null?null:""+n,children:e,containerInfo:a,implementation:t}}var fr=Ah.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Rs(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}ua.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oa;ua.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(af(299));return Mh(e,a,null,t)};ua.flushSync=function(e){var a=fr.T,t=oa.p;try{if(fr.T=null,oa.p=2,e)return e()}finally{fr.T=a,oa.p=t,oa.d.f()}};ua.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,oa.d.C(e,a))};ua.prefetchDNS=function(e){typeof e=="string"&&oa.d.D(e)};ua.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var t=a.as,n=Rs(t,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,r=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;t==="style"?oa.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:r}):t==="script"&&oa.d.X(e,{crossOrigin:n,integrity:i,fetchPriority:r,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};ua.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var t=Rs(a.as,a.crossOrigin);oa.d.M(e,{crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&oa.d.M(e)};ua.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var t=a.as,n=Rs(t,a.crossOrigin);oa.d.L(e,t,{crossOrigin:n,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};ua.preloadModule=function(e,a){if(typeof e=="string")if(a){var t=Rs(a.as,a.crossOrigin);oa.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else oa.d.m(e)};ua.requestFormReset=function(e){oa.d.r(e)};ua.unstable_batchedUpdates=function(e,a){return e(a)};ua.useFormState=function(e,a,t){return fr.H.useFormState(e,a,t)};ua.useFormStatus=function(){return fr.H.useHostTransitionStatus()};ua.version="19.2.0";function tf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tf)}catch(e){console.error(e)}}tf(),ef.exports=ua;var Th=ef.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ve=Nh,nf=ga,Ch=Th;function q(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function rf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fr(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,a.flags&4098&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function lf(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function sf(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Ed(e){if(Fr(e)!==e)throw Error(q(188))}function Dh(e){var a=e.alternate;if(!a){if(a=Fr(e),a===null)throw Error(q(188));return a!==e?null:e}for(var t=e,n=a;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return Ed(i),e;if(r===n)return Ed(i),a;r=r.sibling}throw Error(q(188))}if(t.return!==n.return)t=i,n=r;else{for(var l=!1,s=i.child;s;){if(s===t){l=!0,t=i,n=r;break}if(s===n){l=!0,n=i,t=r;break}s=s.sibling}if(!l){for(s=r.child;s;){if(s===t){l=!0,t=r,n=i;break}if(s===n){l=!0,n=r,t=i;break}s=s.sibling}if(!l)throw Error(q(189))}}if(t.alternate!==n)throw Error(q(190))}if(t.tag!==3)throw Error(q(188));return t.stateNode.current===t?e:a}function of(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=of(e),a!==null)return a;e=e.sibling}return null}var we=Object.assign,$h=Symbol.for("react.element"),fl=Symbol.for("react.transitional.element"),sr=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),Eo=Symbol.for("react.profiler"),uf=Symbol.for("react.consumer"),Et=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),Ao=Symbol.for("react.suspense_list"),Fc=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),qo=Symbol.for("react.activity"),kh=Symbol.for("react.memo_cache_sentinel"),Nd=Symbol.iterator;function Wi(e){return e===null||typeof e!="object"?null:(e=Nd&&e[Nd]||e["@@iterator"],typeof e=="function"?e:null)}var _h=Symbol.for("react.client.reference");function Mo(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===_h?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ri:return"Fragment";case Eo:return"Profiler";case cf:return"StrictMode";case No:return"Suspense";case Ao:return"SuspenseList";case qo:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case sr:return"Portal";case Et:return e.displayName||"Context";case uf:return(e._context.displayName||"Context")+".Consumer";case Zc:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fc:return a=e.displayName||null,a!==null?a:Mo(e.type)||"Memo";case Zt:a=e._payload,e=e._init;try{return Mo(e(a))}catch{}}return null}var or=Array.isArray,X=nf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=Ch.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_n={pending:!1,data:null,method:null,action:null},To=[],li=-1;function ut(e){return{current:e}}function Ke(e){0>li||(e.current=To[li],To[li]=null,li--)}function be(e,a){li++,To[li]=e.current,e.current=a}var ct=ut(null),Mr=ut(null),ln=ut(null),ts=ut(null);function ns(e,a){switch(be(ln,a),be(Mr,e),be(ct,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Dm(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Dm(a),e=Tp(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ke(ct),be(ct,e)}function Ei(){Ke(ct),Ke(Mr),Ke(ln)}function Co(e){e.memoizedState!==null&&be(ts,e);var a=ct.current,t=Tp(a,e.type);a!==t&&(be(Mr,e),be(ct,t))}function is(e){Mr.current===e&&(Ke(ct),Ke(Mr)),ts.current===e&&(Ke(ts),Lr._currentValue=_n)}var y0,Ad;function Tn(e){if(y0===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);y0=a&&a[1]||"",Ad=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y0+e+Ad}var x0=!1;function S0(e,a){if(!e||x0)return"";x0=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(a){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(b){var v=b}Reflect.construct(e,[],g)}else{try{g.call()}catch(b){v=b}e.call(g.prototype)}}else{try{throw Error()}catch(b){v=b}(g=e())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(b){if(b&&v&&typeof b.stack=="string")return[b.stack,v.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),l=r[0],s=r[1];if(l&&s){var u=l.split(`
`),m=s.split(`
`);for(i=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;if(n===u.length||i===m.length)for(n=u.length-1,i=m.length-1;1<=n&&0<=i&&u[n]!==m[i];)i--;for(;1<=n&&0<=i;n--,i--)if(u[n]!==m[i]){if(n!==1||i!==1)do if(n--,i--,0>i||u[n]!==m[i]){var p=`
`+u[n].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=n&&0<=i);break}}}finally{x0=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Tn(t):""}function Oh(e,a){switch(e.tag){case 26:case 27:case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return e.child!==a&&a!==null?Tn("Suspense Fallback"):Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 15:return S0(e.type,!1);case 11:return S0(e.type.render,!1);case 1:return S0(e.type,!0);case 31:return Tn("Activity");default:return""}}function qd(e){try{var a="",t=null;do a+=Oh(e,t),t=e,e=e.return;while(e);return a}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Do=Object.prototype.hasOwnProperty,Kc=Ve.unstable_scheduleCallback,z0=Ve.unstable_cancelCallback,Bh=Ve.unstable_shouldYield,Rh=Ve.unstable_requestPaint,Na=Ve.unstable_now,Uh=Ve.unstable_getCurrentPriorityLevel,df=Ve.unstable_ImmediatePriority,mf=Ve.unstable_UserBlockingPriority,rs=Ve.unstable_NormalPriority,Lh=Ve.unstable_LowPriority,ff=Ve.unstable_IdlePriority,Hh=Ve.log,Gh=Ve.unstable_setDisableYieldValue,Kr=null,Aa=null;function Wt(e){if(typeof Hh=="function"&&Gh(e),Aa&&typeof Aa.setStrictMode=="function")try{Aa.setStrictMode(Kr,e)}catch{}}var qa=Math.clz32?Math.clz32:Vh,Qh=Math.log,Yh=Math.LN2;function Vh(e){return e>>>=0,e===0?32:31-(Qh(e)/Yh|0)|0}var pl=256,hl=262144,vl=4194304;function Cn(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Us(e,a,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~r,n!==0?i=Cn(n):(l&=s,l!==0?i=Cn(l):t||(t=s&~e,t!==0&&(i=Cn(t))))):(s=n&~r,s!==0?i=Cn(s):l!==0?i=Cn(l):t||(t=n&~e,t!==0&&(i=Cn(t)))),i===0?0:a!==0&&a!==i&&!(a&r)&&(r=i&-i,t=a&-a,r>=t||r===32&&(t&4194048)!==0)?a:i}function Pr(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Xh(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(){var e=vl;return vl<<=1,!(vl&62914560)&&(vl=4194304),e}function w0(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Jr(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zh(e,a,t,n,i,r){var l=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var s=e.entanglements,u=e.expirationTimes,m=e.hiddenUpdates;for(t=l&~t;0<t;){var p=31-qa(t),g=1<<p;s[p]=0,u[p]=-1;var v=m[p];if(v!==null)for(m[p]=null,p=0;p<v.length;p++){var b=v[p];b!==null&&(b.lane&=-536870913)}t&=~g}n!==0&&hf(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(l&~a))}function hf(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var n=31-qa(a);e.entangledLanes|=a,e.entanglements[n]=e.entanglements[n]|1073741824|t&261930}function vf(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var n=31-qa(t),i=1<<n;i&a|e[n]&a&&(e[n]|=a),t&=~i}}function gf(e,a){var t=a&-a;return t=t&42?1:Pc(t),t&(e.suspendedLanes|a)?0:t}function Pc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jc(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function bf(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:Hp(e.type))}function Md(e,a){var t=le.p;try{return le.p=e,a()}finally{le.p=t}}var wn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+wn,ya="__reactProps$"+wn,Hi="__reactContainer$"+wn,$o="__reactEvents$"+wn,Fh="__reactListeners$"+wn,Kh="__reactHandles$"+wn,Td="__reactResources$"+wn,Ir="__reactMarker$"+wn;function Ic(e){delete e[Ie],delete e[ya],delete e[$o],delete e[Fh],delete e[Kh]}function si(e){var a=e[Ie];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Hi]||t[Ie]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Bm(e);e!==null;){if(t=e[Ie])return t;e=Bm(e)}return a}e=t,t=e.parentNode}return null}function Gi(e){if(e=e[Ie]||e[Hi]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function cr(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(q(33))}function gi(e){var a=e[Td];return a||(a=e[Td]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Fe(e){e[Ir]=!0}var yf=new Set,xf={};function Vn(e,a){Ni(e,a),Ni(e+"Capture",a)}function Ni(e,a){for(xf[e]=a,e=0;e<a.length;e++)yf.add(a[e])}var Ph=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cd={},Dd={};function Jh(e){return Do.call(Dd,e)?!0:Do.call(Cd,e)?!1:Ph.test(e)?Dd[e]=!0:(Cd[e]=!0,!1)}function Ul(e,a,t){if(Jh(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var n=a.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function gl(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function vt(e,a,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+n)}}function Ua(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sf(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ih(e,a,t){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(l){t=""+l,r.call(this,l)}}),Object.defineProperty(e,a,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function ko(e){if(!e._valueTracker){var a=Sf(e)?"checked":"value";e._valueTracker=Ih(e,a,""+e[a])}}function zf(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),n="";return e&&(n=Sf(e)?e.checked?"true":"false":e.value),e=n,e!==t?(a.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wh=/[\n"\\]/g;function Ga(e){return e.replace(Wh,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function _o(e,a,t,n,i,r,l,s){e.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.type=l:e.removeAttribute("type"),a!=null?l==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ua(a)):e.value!==""+Ua(a)&&(e.value=""+Ua(a)):l!=="submit"&&l!=="reset"||e.removeAttribute("value"),a!=null?Oo(e,l,Ua(a)):t!=null?Oo(e,l,Ua(t)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+Ua(s):e.removeAttribute("name")}function wf(e,a,t,n,i,r,l,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),a!=null||t!=null){if(!(r!=="submit"&&r!=="reset"||a!=null)){ko(e);return}t=t!=null?""+Ua(t):"",a=a!=null?""+Ua(a):t,s||a===e.value||(e.value=a),e.defaultValue=a}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.name=l),ko(e)}function Oo(e,a,t){a==="number"&&ls(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function bi(e,a,t,n){if(e=e.options,a){a={};for(var i=0;i<t.length;i++)a["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=a.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&n&&(e[t].defaultSelected=!0)}else{for(t=""+Ua(t),a=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function jf(e,a,t){if(a!=null&&(a=""+Ua(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+Ua(t):""}function Ef(e,a,t,n){if(a==null){if(n!=null){if(t!=null)throw Error(q(92));if(or(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),a=t}t=Ua(a),e.defaultValue=t,n=e.textContent,n===t&&n!==""&&n!==null&&(e.value=n),ko(e)}function Ai(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var e5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $d(e,a,t){var n=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":n?e.setProperty(a,t):typeof t!="number"||t===0||e5.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Nf(e,a,t){if(a!=null&&typeof a!="object")throw Error(q(62));if(e=e.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||a!=null&&a.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in a)n=a[i],a.hasOwnProperty(i)&&t[i]!==n&&$d(e,i,n)}else for(var r in a)a.hasOwnProperty(r)&&$d(e,r,a[r])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var a5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),t5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return t5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Nt(){}var Bo=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,yi=null;function kd(e){var a=Gi(e);if(a&&(e=a.stateNode)){var t=e[ya]||null;e:switch(e=a.stateNode,a.type){case"input":if(_o(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ga(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var n=t[a];if(n!==e&&n.form===e.form){var i=n[ya]||null;if(!i)throw Error(q(90));_o(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<t.length;a++)n=t[a],n.form===e.form&&zf(n)}break e;case"textarea":jf(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&bi(e,!!t.multiple,a,!1)}}}var j0=!1;function Af(e,a,t){if(j0)return e(a,t);j0=!0;try{var n=e(a);return n}finally{if(j0=!1,(oi!==null||yi!==null)&&(Js(),oi&&(a=oi,e=yi,yi=oi=null,kd(a),e)))for(a=0;a<e.length;a++)kd(e[a])}}function Tr(e,a){var t=e.stateNode;if(t===null)return null;var n=t[ya]||null;if(n===null)return null;t=n[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(q(231,a,typeof t));return t}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=!1;if(Dt)try{var er={};Object.defineProperty(er,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Ro=!1}var en=null,au=null,Hl=null;function qf(){if(Hl)return Hl;var e,a=au,t=a.length,n,i="value"in en?en.value:en.textContent,r=i.length;for(e=0;e<t&&a[e]===i[e];e++);var l=t-e;for(n=1;n<=l&&a[t-n]===i[r-n];n++);return Hl=i.slice(e,1<n?1-n:void 0)}function Gl(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function _d(){return!1}function xa(e){function a(t,n,i,r,l){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?bl:_d,this.isPropagationStopped=_d,this}return we(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),a}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=xa(Xn),Wr=we({},Xn,{view:0,detail:0}),n5=xa(Wr),E0,N0,ar,Hs=we({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(E0=e.screenX-ar.screenX,N0=e.screenY-ar.screenY):N0=E0=0,ar=e),E0)},movementY:function(e){return"movementY"in e?e.movementY:N0}}),Od=xa(Hs),i5=we({},Hs,{dataTransfer:0}),r5=xa(i5),l5=we({},Wr,{relatedTarget:0}),A0=xa(l5),s5=we({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),o5=xa(s5),c5=we({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u5=xa(c5),d5=we({},Xn,{data:0}),Bd=xa(d5),m5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h5(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=p5[e])?!!a[e]:!1}function tu(){return h5}var v5=we({},Wr,{key:function(e){if(e.key){var a=m5[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g5=xa(v5),b5=we({},Hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=xa(b5),y5=we({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),x5=xa(y5),S5=we({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),z5=xa(S5),w5=we({},Hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j5=xa(w5),E5=we({},Xn,{newState:0,oldState:0}),N5=xa(E5),A5=[9,13,27,32],nu=Dt&&"CompositionEvent"in window,pr=null;Dt&&"documentMode"in document&&(pr=document.documentMode);var q5=Dt&&"TextEvent"in window&&!pr,Mf=Dt&&(!nu||pr&&8<pr&&11>=pr),Ud=" ",Ld=!1;function Tf(e,a){switch(e){case"keyup":return A5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function M5(e,a){switch(e){case"compositionend":return Cf(a);case"keypress":return a.which!==32?null:(Ld=!0,Ud);case"textInput":return e=a.data,e===Ud&&Ld?null:e;default:return null}}function T5(e,a){if(ci)return e==="compositionend"||!nu&&Tf(e,a)?(e=qf(),Hl=au=en=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Mf&&a.locale!=="ko"?null:a.data;default:return null}}var C5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!C5[e.type]:a==="textarea"}function Df(e,a,t,n){oi?yi?yi.push(n):yi=[n]:oi=n,a=js(a,"onChange"),0<a.length&&(t=new Ls("onChange","change",null,t,n),e.push({event:t,listeners:a}))}var hr=null,Cr=null;function D5(e){Ap(e,0)}function Gs(e){var a=cr(e);if(zf(a))return e}function Gd(e,a){if(e==="change")return a}var $f=!1;if(Dt){var q0;if(Dt){var M0="oninput"in document;if(!M0){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),M0=typeof Qd.oninput=="function"}q0=M0}else q0=!1;$f=q0&&(!document.documentMode||9<document.documentMode)}function Yd(){hr&&(hr.detachEvent("onpropertychange",kf),Cr=hr=null)}function kf(e){if(e.propertyName==="value"&&Gs(Cr)){var a=[];Df(a,Cr,e,eu(e)),Af(D5,a)}}function $5(e,a,t){e==="focusin"?(Yd(),hr=a,Cr=t,hr.attachEvent("onpropertychange",kf)):e==="focusout"&&Yd()}function k5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(Cr)}function _5(e,a){if(e==="click")return Gs(a)}function O5(e,a){if(e==="input"||e==="change")return Gs(a)}function B5(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var Ca=typeof Object.is=="function"?Object.is:B5;function Dr(e,a){if(Ca(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),n=Object.keys(a);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var i=t[n];if(!Do.call(a,i)||!Ca(e[i],a[i]))return!1}return!0}function Vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xd(e,a){var t=Vd(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=a&&n>=a)return{node:t,offset:a-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Vd(t)}}function _f(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?_f(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Of(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=ls(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=ls(e.document)}return a}function iu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var R5=Dt&&"documentMode"in document&&11>=document.documentMode,ui=null,Uo=null,vr=null,Lo=!1;function Zd(e,a,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Lo||ui==null||ui!==ls(n)||(n=ui,"selectionStart"in n&&iu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),vr&&Dr(vr,n)||(vr=n,n=js(Uo,"onSelect"),0<n.length&&(a=new Ls("onSelect","select",null,a,t),e.push({event:a,listeners:n}),a.target=ui)))}function An(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var di={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionrun:An("Transition","TransitionRun"),transitionstart:An("Transition","TransitionStart"),transitioncancel:An("Transition","TransitionCancel"),transitionend:An("Transition","TransitionEnd")},T0={},Bf={};Dt&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Zn(e){if(T0[e])return T0[e];if(!di[e])return e;var a=di[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in Bf)return T0[e]=a[t];return e}var Rf=Zn("animationend"),Uf=Zn("animationiteration"),Lf=Zn("animationstart"),U5=Zn("transitionrun"),L5=Zn("transitionstart"),H5=Zn("transitioncancel"),Hf=Zn("transitionend"),Gf=new Map,Ho="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ho.push("scrollEnd");function at(e,a){Gf.set(e,a),Vn(a,[e])}var ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ra=[],mi=0,ru=0;function Qs(){for(var e=mi,a=ru=mi=0;a<e;){var t=Ra[a];Ra[a++]=null;var n=Ra[a];Ra[a++]=null;var i=Ra[a];Ra[a++]=null;var r=Ra[a];if(Ra[a++]=null,n!==null&&i!==null){var l=n.pending;l===null?i.next=i:(i.next=l.next,l.next=i),n.pending=i}r!==0&&Qf(t,i,r)}}function Ys(e,a,t,n){Ra[mi++]=e,Ra[mi++]=a,Ra[mi++]=t,Ra[mi++]=n,ru|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function lu(e,a,t,n){return Ys(e,a,t,n),os(e)}function Fn(e,a){return Ys(e,null,null,a),os(e)}function Qf(e,a,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t);for(var i=!1,r=e.return;r!==null;)r.childLanes|=t,n=r.alternate,n!==null&&(n.childLanes|=t),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&a!==null&&(i=31-qa(t),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[a]:n.push(a),a.lane=t|536870912),r):null}function os(e){if(50<Er)throw Er=0,oc=null,Error(q(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var fi={};function G5(e,a,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ja(e,a,t,n){return new G5(e,a,t,n)}function su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qt(e,a){var t=e.alternate;return t===null?(t=ja(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Yf(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ql(e,a,t,n,i,r){var l=0;if(n=e,typeof e=="function")su(e)&&(l=1);else if(typeof e=="string")l=Z3(e,t,ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case qo:return e=ja(31,t,a,i),e.elementType=qo,e.lanes=r,e;case ri:return On(t.children,i,r,a);case cf:l=8,i|=24;break;case Eo:return e=ja(12,t,a,i|2),e.elementType=Eo,e.lanes=r,e;case No:return e=ja(13,t,a,i),e.elementType=No,e.lanes=r,e;case Ao:return e=ja(19,t,a,i),e.elementType=Ao,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Et:l=10;break e;case uf:l=9;break e;case Zc:l=11;break e;case Fc:l=14;break e;case Zt:l=16,n=null;break e}l=29,t=Error(q(130,e===null?"null":typeof e,"")),n=null}return a=ja(l,t,a,i),a.elementType=e,a.type=n,a.lanes=r,a}function On(e,a,t,n){return e=ja(7,e,n,a),e.lanes=t,e}function C0(e,a,t){return e=ja(6,e,null,a),e.lanes=t,e}function Vf(e){var a=ja(18,null,null,0);return a.stateNode=e,a}function D0(e,a,t){return a=ja(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Fd=new WeakMap;function Qa(e,a){if(typeof e=="object"&&e!==null){var t=Fd.get(e);return t!==void 0?t:(a={value:e,source:a,stack:qd(a)},Fd.set(e,a),a)}return{value:e,source:a,stack:qd(a)}}var pi=[],hi=0,cs=null,$r=0,La=[],Ha=0,hn=null,rt=1,lt="";function zt(e,a){pi[hi++]=$r,pi[hi++]=cs,cs=e,$r=a}function Xf(e,a,t){La[Ha++]=rt,La[Ha++]=lt,La[Ha++]=hn,hn=e;var n=rt;e=lt;var i=32-qa(n)-1;n&=~(1<<i),t+=1;var r=32-qa(a)+i;if(30<r){var l=i-i%5;r=(n&(1<<l)-1).toString(32),n>>=l,i-=l,rt=1<<32-qa(a)+i|t<<i|n,lt=r+e}else rt=1<<r|t<<i|n,lt=e}function ou(e){e.return!==null&&(zt(e,1),Xf(e,1,0))}function cu(e){for(;e===cs;)cs=pi[--hi],pi[hi]=null,$r=pi[--hi],pi[hi]=null;for(;e===hn;)hn=La[--Ha],La[Ha]=null,lt=La[--Ha],La[Ha]=null,rt=La[--Ha],La[Ha]=null}function Zf(e,a){La[Ha++]=rt,La[Ha++]=lt,La[Ha++]=hn,rt=a.id,lt=a.overflow,hn=e}var We=null,Se=null,ne=!1,sn=null,Ya=!1,Go=Error(q(519));function vn(e){var a=Error(q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kr(Qa(a,e)),Go}function Kd(e){var a=e.stateNode,t=e.type,n=e.memoizedProps;switch(a[Ie]=e,a[ya]=n,t){case"dialog":ee("cancel",a),ee("close",a);break;case"iframe":case"object":case"embed":ee("load",a);break;case"video":case"audio":for(t=0;t<Rr.length;t++)ee(Rr[t],a);break;case"source":ee("error",a);break;case"img":case"image":case"link":ee("error",a),ee("load",a);break;case"details":ee("toggle",a);break;case"input":ee("invalid",a),wf(a,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ee("invalid",a);break;case"textarea":ee("invalid",a),Ef(a,n.value,n.defaultValue,n.children)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||n.suppressHydrationWarning===!0||Mp(a.textContent,t)?(n.popover!=null&&(ee("beforetoggle",a),ee("toggle",a)),n.onScroll!=null&&ee("scroll",a),n.onScrollEnd!=null&&ee("scrollend",a),n.onClick!=null&&(a.onclick=Nt),a=!0):a=!1,a||vn(e,!0)}function Pd(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:Ya=!1;return;case 27:case 3:Ya=!0;return;default:We=We.return}}function Wn(e){if(e!==We)return!1;if(!ne)return Pd(e),ne=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||fc(e.type,e.memoizedProps)),t=!t),t&&Se&&vn(e),Pd(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));Se=Om(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));Se=Om(e)}else a===27?(a=Se,jn(e.type)?(e=gc,gc=null,Se=e):Se=a):Se=We?Za(e.stateNode.nextSibling):null;return!0}function Ln(){Se=We=null,ne=!1}function $0(){var e=sn;return e!==null&&(ha===null?ha=e:ha.push.apply(ha,e),sn=null),e}function kr(e){sn===null?sn=[e]:sn.push(e)}var Qo=ut(null),Kn=null,At=null;function Kt(e,a,t){be(Qo,a._currentValue),a._currentValue=t}function Mt(e){e._currentValue=Qo.current,Ke(Qo)}function Yo(e,a,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,n!==null&&(n.childLanes|=a)):n!==null&&(n.childLanes&a)!==a&&(n.childLanes|=a),e===t)break;e=e.return}}function Vo(e,a,t,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var l=i.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=i;for(var u=0;u<a.length;u++)if(s.context===a[u]){r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),Yo(r.return,t,e),n||(l=null);break e}r=s.next}}else if(i.tag===18){if(l=i.return,l===null)throw Error(q(341));l.lanes|=t,r=l.alternate,r!==null&&(r.lanes|=t),Yo(l,t,e),l=null}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===e){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}}function Qi(e,a,t,n){e=null;for(var i=a,r=!1;i!==null;){if(!r){if(i.flags&524288)r=!0;else if(i.flags&262144)break}if(i.tag===10){var l=i.alternate;if(l===null)throw Error(q(387));if(l=l.memoizedProps,l!==null){var s=i.type;Ca(i.pendingProps.value,l.value)||(e!==null?e.push(s):e=[s])}}else if(i===ts.current){if(l=i.alternate,l===null)throw Error(q(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Lr):e=[Lr])}i=i.return}e!==null&&Vo(a,e,t,n),a.flags|=262144}function us(e){for(e=e.firstContext;e!==null;){if(!Ca(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hn(e){Kn=e,At=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ea(e){return Ff(Kn,e)}function yl(e,a){return Kn===null&&Hn(e),Ff(e,a)}function Ff(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},At===null){if(e===null)throw Error(q(308));At=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else At=At.next=a;return t}var Q5=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Y5=Ve.unstable_scheduleCallback,V5=Ve.unstable_NormalPriority,Re={$$typeof:Et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new Q5,data:new Map,refCount:0}}function el(e){e.refCount--,e.refCount===0&&Y5(V5,function(){e.controller.abort()})}var gr=null,Xo=0,qi=0,xi=null;function X5(e,a){if(gr===null){var t=gr=[];Xo=0,qi=_u(),xi={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Xo++,a.then(Jd,Jd),a}function Jd(){if(--Xo===0&&gr!==null){xi!==null&&(xi.status="fulfilled");var e=gr;gr=null,qi=0,xi=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Z5(e,a){var t=[],n={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){n.status="fulfilled",n.value=a;for(var i=0;i<t.length;i++)(0,t[i])(a)},function(i){for(n.status="rejected",n.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),n}var Id=X.S;X.S=function(e,a){op=Na(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&X5(e,a),Id!==null&&Id(e,a)};var Bn=ut(null);function du(){var e=Bn.current;return e!==null?e:he.pooledCache}function Yl(e,a){a===null?be(Bn,Bn.current):be(Bn,a.pool)}function Kf(){var e=du();return e===null?null:{parent:Re._currentValue,pool:e}}var Yi=Error(q(460)),mu=Error(q(474)),Vs=Error(q(542)),ds={then:function(){}};function Wd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pf(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Nt,Nt),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,am(e),e;default:if(typeof a.status=="string")a.then(Nt,Nt);else{if(e=he,e!==null&&100<e.shellSuspendCounter)throw Error(q(482));e=a,e.status="pending",e.then(function(n){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=n}},function(n){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=n}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,am(e),e}throw Rn=a,Yi}}function Dn(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Rn=t,Yi):t}}var Rn=null;function em(){if(Rn===null)throw Error(q(459));var e=Rn;return Rn=null,e}function am(e){if(e===Yi||e===Vs)throw Error(q(483))}var Si=null,_r=0;function xl(e){var a=_r;return _r+=1,Si===null&&(Si=[]),Pf(Si,e,a)}function tr(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Sl(e,a){throw a.$$typeof===$h?Error(q(525)):(e=Object.prototype.toString.call(a),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Jf(e){function a(x,y){if(e){var w=x.deletions;w===null?(x.deletions=[y],x.flags|=16):w.push(y)}}function t(x,y){if(!e)return null;for(;y!==null;)a(x,y),y=y.sibling;return null}function n(x){for(var y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function i(x,y){return x=qt(x,y),x.index=0,x.sibling=null,x}function r(x,y,w){return x.index=w,e?(w=x.alternate,w!==null?(w=w.index,w<y?(x.flags|=67108866,y):w):(x.flags|=67108866,y)):(x.flags|=1048576,y)}function l(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function s(x,y,w,E){return y===null||y.tag!==6?(y=C0(w,x.mode,E),y.return=x,y):(y=i(y,w),y.return=x,y)}function u(x,y,w,E){var $=w.type;return $===ri?p(x,y,w.props.children,E,w.key):y!==null&&(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Zt&&Dn($)===y.type)?(y=i(y,w.props),tr(y,w),y.return=x,y):(y=Ql(w.type,w.key,w.props,null,x.mode,E),tr(y,w),y.return=x,y)}function m(x,y,w,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=D0(w,x.mode,E),y.return=x,y):(y=i(y,w.children||[]),y.return=x,y)}function p(x,y,w,E,$){return y===null||y.tag!==7?(y=On(w,x.mode,E,$),y.return=x,y):(y=i(y,w),y.return=x,y)}function g(x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=C0(""+y,x.mode,w),y.return=x,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:return w=Ql(y.type,y.key,y.props,null,x.mode,w),tr(w,y),w.return=x,w;case sr:return y=D0(y,x.mode,w),y.return=x,y;case Zt:return y=Dn(y),g(x,y,w)}if(or(y)||Wi(y))return y=On(y,x.mode,w,null),y.return=x,y;if(typeof y.then=="function")return g(x,xl(y),w);if(y.$$typeof===Et)return g(x,yl(x,y),w);Sl(x,y)}return null}function v(x,y,w,E){var $=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return $!==null?null:s(x,y,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fl:return w.key===$?u(x,y,w,E):null;case sr:return w.key===$?m(x,y,w,E):null;case Zt:return w=Dn(w),v(x,y,w,E)}if(or(w)||Wi(w))return $!==null?null:p(x,y,w,E,null);if(typeof w.then=="function")return v(x,y,xl(w),E);if(w.$$typeof===Et)return v(x,y,yl(x,w),E);Sl(x,w)}return null}function b(x,y,w,E,$){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return x=x.get(w)||null,s(y,x,""+E,$);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case fl:return x=x.get(E.key===null?w:E.key)||null,u(y,x,E,$);case sr:return x=x.get(E.key===null?w:E.key)||null,m(y,x,E,$);case Zt:return E=Dn(E),b(x,y,w,E,$)}if(or(E)||Wi(E))return x=x.get(w)||null,p(y,x,E,$,null);if(typeof E.then=="function")return b(x,y,w,xl(E),$);if(E.$$typeof===Et)return b(x,y,w,yl(y,E),$);Sl(y,E)}return null}function N(x,y,w,E){for(var $=null,B=null,C=y,U=y=0,L=null;C!==null&&U<w.length;U++){C.index>U?(L=C,C=null):L=C.sibling;var Y=v(x,C,w[U],E);if(Y===null){C===null&&(C=L);break}e&&C&&Y.alternate===null&&a(x,C),y=r(Y,y,U),B===null?$=Y:B.sibling=Y,B=Y,C=L}if(U===w.length)return t(x,C),ne&&zt(x,U),$;if(C===null){for(;U<w.length;U++)C=g(x,w[U],E),C!==null&&(y=r(C,y,U),B===null?$=C:B.sibling=C,B=C);return ne&&zt(x,U),$}for(C=n(C);U<w.length;U++)L=b(C,x,U,w[U],E),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?U:L.key),y=r(L,y,U),B===null?$=L:B.sibling=L,B=L);return e&&C.forEach(function(ge){return a(x,ge)}),ne&&zt(x,U),$}function A(x,y,w,E){if(w==null)throw Error(q(151));for(var $=null,B=null,C=y,U=y=0,L=null,Y=w.next();C!==null&&!Y.done;U++,Y=w.next()){C.index>U?(L=C,C=null):L=C.sibling;var ge=v(x,C,Y.value,E);if(ge===null){C===null&&(C=L);break}e&&C&&ge.alternate===null&&a(x,C),y=r(ge,y,U),B===null?$=ge:B.sibling=ge,B=ge,C=L}if(Y.done)return t(x,C),ne&&zt(x,U),$;if(C===null){for(;!Y.done;U++,Y=w.next())Y=g(x,Y.value,E),Y!==null&&(y=r(Y,y,U),B===null?$=Y:B.sibling=Y,B=Y);return ne&&zt(x,U),$}for(C=n(C);!Y.done;U++,Y=w.next())Y=b(C,x,U,Y.value,E),Y!==null&&(e&&Y.alternate!==null&&C.delete(Y.key===null?U:Y.key),y=r(Y,y,U),B===null?$=Y:B.sibling=Y,B=Y);return e&&C.forEach(function(oe){return a(x,oe)}),ne&&zt(x,U),$}function M(x,y,w,E){if(typeof w=="object"&&w!==null&&w.type===ri&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case fl:e:{for(var $=w.key;y!==null;){if(y.key===$){if($=w.type,$===ri){if(y.tag===7){t(x,y.sibling),E=i(y,w.props.children),E.return=x,x=E;break e}}else if(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Zt&&Dn($)===y.type){t(x,y.sibling),E=i(y,w.props),tr(E,w),E.return=x,x=E;break e}t(x,y);break}else a(x,y);y=y.sibling}w.type===ri?(E=On(w.props.children,x.mode,E,w.key),E.return=x,x=E):(E=Ql(w.type,w.key,w.props,null,x.mode,E),tr(E,w),E.return=x,x=E)}return l(x);case sr:e:{for($=w.key;y!==null;){if(y.key===$)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){t(x,y.sibling),E=i(y,w.children||[]),E.return=x,x=E;break e}else{t(x,y);break}else a(x,y);y=y.sibling}E=D0(w,x.mode,E),E.return=x,x=E}return l(x);case Zt:return w=Dn(w),M(x,y,w,E)}if(or(w))return N(x,y,w,E);if(Wi(w)){if($=Wi(w),typeof $!="function")throw Error(q(150));return w=$.call(w),A(x,y,w,E)}if(typeof w.then=="function")return M(x,y,xl(w),E);if(w.$$typeof===Et)return M(x,y,yl(x,w),E);Sl(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,y!==null&&y.tag===6?(t(x,y.sibling),E=i(y,w),E.return=x,x=E):(t(x,y),E=C0(w,x.mode,E),E.return=x,x=E),l(x)):t(x,y)}return function(x,y,w,E){try{_r=0;var $=M(x,y,w,E);return Si=null,$}catch(C){if(C===Yi||C===Vs)throw C;var B=ja(29,C,null,x.mode);return B.lanes=E,B.return=x,B}finally{}}}var Gn=Jf(!0),If=Jf(!1),Ft=!1;function fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zo(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function on(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cn(e,a,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ie&2){var i=n.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),n.pending=a,a=os(e),Qf(e,null,t),a}return Ys(e,n,a,t),os(e)}function br(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,vf(e,t)}}function k0(e,a){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var l={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};r===null?i=r=l:r=r.next=l,t=t.next}while(t!==null);r===null?i=r=a:r=r.next=a}else i=r=a;t={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Fo=!1;function yr(){if(Fo){var e=xi;if(e!==null)throw e}}function xr(e,a,t,n){Fo=!1;var i=e.updateQueue;Ft=!1;var r=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,m=u.next;u.next=null,l===null?r=m:l.next=m,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=m:s.next=m,p.lastBaseUpdate=u))}if(r!==null){var g=i.baseState;l=0,p=m=u=null,s=r;do{var v=s.lane&-536870913,b=v!==s.lane;if(b?(te&v)===v:(n&v)===v){v!==0&&v===qi&&(Fo=!0),p!==null&&(p=p.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var N=e,A=s;v=a;var M=t;switch(A.tag){case 1:if(N=A.payload,typeof N=="function"){g=N.call(M,g,v);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=A.payload,v=typeof N=="function"?N.call(M,g,v):N,v==null)break e;g=we({},g,v);break e;case 2:Ft=!0}}v=s.callback,v!==null&&(e.flags|=64,b&&(e.flags|=8192),b=i.callbacks,b===null?i.callbacks=[v]:b.push(v))}else b={lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(m=p=b,u=g):p=p.next=b,l|=v;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;b=s,s=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);p===null&&(u=g),i.baseState=u,i.firstBaseUpdate=m,i.lastBaseUpdate=p,r===null&&(i.shared.lanes=0),bn|=l,e.lanes=l,e.memoizedState=g}}function Wf(e,a){if(typeof e!="function")throw Error(q(191,e));e.call(a)}function e4(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Wf(t[e],a)}var Mi=ut(null),ms=ut(0);function tm(e,a){e=Ot,be(ms,e),be(Mi,a),Ot=e|a.baseLanes}function Ko(){be(ms,Ot),be(Mi,Mi.current)}function pu(){Ot=ms.current,Ke(Mi),Ke(ms)}var Da=ut(null),Xa=null;function Pt(e){var a=e.alternate;be(ke,ke.current&1),be(Da,e),Xa===null&&(a===null||Mi.current!==null||a.memoizedState!==null)&&(Xa=e)}function Po(e){be(ke,ke.current),be(Da,e),Xa===null&&(Xa=e)}function a4(e){e.tag===22?(be(ke,ke.current),be(Da,e),Xa===null&&(Xa=e)):Jt()}function Jt(){be(ke,ke.current),be(Da,Da.current)}function wa(e){Ke(Da),Xa===e&&(Xa=null),Ke(ke)}var ke=ut(0);function fs(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||hc(t)||vc(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var $t=0,J=null,fe=null,Oe=null,ps=!1,zi=!1,Qn=!1,hs=0,Or=0,wi=null,F5=0;function Ce(){throw Error(q(321))}function hu(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!Ca(e[t],a[t]))return!1;return!0}function vu(e,a,t,n,i,r){return $t=r,J=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,X.H=e===null||e.memoizedState===null?D4:Au,Qn=!1,r=t(n,i),Qn=!1,zi&&(r=n4(a,t,n,i)),t4(e),r}function t4(e){X.H=Br;var a=fe!==null&&fe.next!==null;if($t=0,Oe=fe=J=null,ps=!1,Or=0,wi=null,a)throw Error(q(300));e===null||Ue||(e=e.dependencies,e!==null&&us(e)&&(Ue=!0))}function n4(e,a,t,n){J=e;var i=0;do{if(zi&&(wi=null),Or=0,zi=!1,25<=i)throw Error(q(301));if(i+=1,Oe=fe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}X.H=$4,r=a(t,n)}while(zi);return r}function K5(){var e=X.H,a=e.useState()[0];return a=typeof a.then=="function"?al(a):a,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(J.flags|=1024),a}function gu(){var e=hs!==0;return hs=0,e}function bu(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function yu(e){if(ps){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ps=!1}$t=0,Oe=fe=J=null,zi=!1,Or=hs=0,wi=null}function la(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?J.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function _e(){if(fe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var a=Oe===null?J.memoizedState:Oe.next;if(a!==null)Oe=a,fe=e;else{if(e===null)throw J.alternate===null?Error(q(467)):Error(q(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Oe===null?J.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Xs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var a=Or;return Or+=1,wi===null&&(wi=[]),e=Pf(wi,e,a),a=J,(Oe===null?a.memoizedState:Oe.next)===null&&(a=a.alternate,X.H=a===null||a.memoizedState===null?D4:Au),e}function Zs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===Et)return ea(e)}throw Error(q(438,String(e)))}function xu(e){var a=null,t=J.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var n=J.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(a={data:n.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=Xs(),J.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),n=0;n<e;n++)t[n]=kh;return a.index++,t}function kt(e,a){return typeof a=="function"?a(e):a}function Vl(e){var a=_e();return Su(a,fe,e)}function Su(e,a,t){var n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var l=i.next;i.next=r.next,r.next=l}a.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{a=i.next;var s=l=null,u=null,m=a,p=!1;do{var g=m.lane&-536870913;if(g!==m.lane?(te&g)===g:($t&g)===g){var v=m.revertLane;if(v===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),g===qi&&(p=!0);else if(($t&v)===v){m=m.next,v===qi&&(p=!0);continue}else g={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=g,l=r):u=u.next=g,J.lanes|=v,bn|=v;g=m.action,Qn&&t(r,g),r=m.hasEagerState?m.eagerState:t(r,g)}else v={lane:g,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=v,l=r):u=u.next=v,J.lanes|=g,bn|=g;m=m.next}while(m!==null&&m!==a);if(u===null?l=r:u.next=s,!Ca(r,e.memoizedState)&&(Ue=!0,p&&(t=xi,t!==null)))throw t;e.memoizedState=r,e.baseState=l,e.baseQueue=u,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function _0(e){var a=_e(),t=a.queue;if(t===null)throw Error(q(311));t.lastRenderedReducer=e;var n=t.dispatch,i=t.pending,r=a.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do r=e(r,l.action),l=l.next;while(l!==i);Ca(r,a.memoizedState)||(Ue=!0),a.memoizedState=r,a.baseQueue===null&&(a.baseState=r),t.lastRenderedState=r}return[r,n]}function i4(e,a,t){var n=J,i=_e(),r=ne;if(r){if(t===void 0)throw Error(q(407));t=t()}else t=a();var l=!Ca((fe||i).memoizedState,t);if(l&&(i.memoizedState=t,Ue=!0),i=i.queue,zu(s4.bind(null,n,i,e),[e]),i.getSnapshot!==a||l||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Ti(9,{destroy:void 0},l4.bind(null,n,i,t,a),null),he===null)throw Error(q(349));r||$t&127||r4(n,a,t)}return t}function r4(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=J.updateQueue,a===null?(a=Xs(),J.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function l4(e,a,t,n){a.value=t,a.getSnapshot=n,o4(a)&&c4(e)}function s4(e,a,t){return t(function(){o4(a)&&c4(e)})}function o4(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!Ca(e,t)}catch{return!0}}function c4(e){var a=Fn(e,2);a!==null&&ba(a,e,2)}function Jo(e){var a=la();if(typeof e=="function"){var t=e;if(e=t(),Qn){Wt(!0);try{t()}finally{Wt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},a}function u4(e,a,t,n){return e.baseState=t,Su(e,fe,typeof n=="function"?n:kt)}function P5(e,a,t,n,i){if(Ks(e))throw Error(q(485));if(e=a.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){r.listeners.push(l)}};X.T!==null?t(!0):r.isTransition=!1,n(r),t=a.pending,t===null?(r.next=a.pending=r,d4(a,r)):(r.next=t.next,a.pending=t.next=r)}}function d4(e,a){var t=a.action,n=a.payload,i=e.state;if(a.isTransition){var r=X.T,l={};X.T=l;try{var s=t(i,n),u=X.S;u!==null&&u(l,s),nm(e,a,s)}catch(m){Io(e,a,m)}finally{r!==null&&l.types!==null&&(r.types=l.types),X.T=r}}else try{r=t(i,n),nm(e,a,r)}catch(m){Io(e,a,m)}}function nm(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){im(e,a,n)},function(n){return Io(e,a,n)}):im(e,a,t)}function im(e,a,t){a.status="fulfilled",a.value=t,m4(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,d4(e,t)))}function Io(e,a,t){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do a.status="rejected",a.reason=t,m4(a),a=a.next;while(a!==n)}e.action=null}function m4(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function f4(e,a){return a}function rm(e,a){if(ne){var t=he.formState;if(t!==null){e:{var n=J;if(ne){if(Se){a:{for(var i=Se,r=Ya;i.nodeType!==8;){if(!r){i=null;break a}if(i=Za(i.nextSibling),i===null){i=null;break a}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Se=Za(i.nextSibling),n=i.data==="F!";break e}}vn(n)}n=!1}n&&(a=t[0])}}return t=la(),t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:f4,lastRenderedState:a},t.queue=n,t=M4.bind(null,J,n),n.dispatch=t,n=Jo(!1),r=Nu.bind(null,J,!1,n.queue),n=la(),i={state:a,dispatch:null,action:e,pending:null},n.queue=i,t=P5.bind(null,J,i,r,t),i.dispatch=t,n.memoizedState=e,[a,t,!1]}function lm(e){var a=_e();return p4(a,fe,e)}function p4(e,a,t){if(a=Su(e,a,f4)[0],e=Vl(kt)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var n=al(a)}catch(l){throw l===Yi?Vs:l}else n=a;a=_e();var i=a.queue,r=i.dispatch;return t!==a.memoizedState&&(J.flags|=2048,Ti(9,{destroy:void 0},J5.bind(null,i,t),null)),[n,r,e]}function J5(e,a){e.action=a}function sm(e){var a=_e(),t=fe;if(t!==null)return p4(a,t,e);_e(),a=a.memoizedState,t=_e();var n=t.queue.dispatch;return t.memoizedState=e,[a,n,!1]}function Ti(e,a,t,n){return e={tag:e,create:t,deps:n,inst:a,next:null},a=J.updateQueue,a===null&&(a=Xs(),J.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,a.lastEffect=e),e}function h4(){return _e().memoizedState}function Xl(e,a,t,n){var i=la();J.flags|=e,i.memoizedState=Ti(1|a,{destroy:void 0},t,n===void 0?null:n)}function Fs(e,a,t,n){var i=_e();n=n===void 0?null:n;var r=i.memoizedState.inst;fe!==null&&n!==null&&hu(n,fe.memoizedState.deps)?i.memoizedState=Ti(a,r,t,n):(J.flags|=e,i.memoizedState=Ti(1|a,r,t,n))}function om(e,a){Xl(8390656,8,e,a)}function zu(e,a){Fs(2048,8,e,a)}function I5(e){J.flags|=4;var a=J.updateQueue;if(a===null)a=Xs(),J.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function v4(e){var a=_e().memoizedState;return I5({ref:a,nextImpl:e}),function(){if(ie&2)throw Error(q(440));return a.impl.apply(void 0,arguments)}}function g4(e,a){return Fs(4,2,e,a)}function b4(e,a){return Fs(4,4,e,a)}function y4(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function x4(e,a,t){t=t!=null?t.concat([e]):null,Fs(4,4,y4.bind(null,a,e),t)}function wu(){}function S4(e,a){var t=_e();a=a===void 0?null:a;var n=t.memoizedState;return a!==null&&hu(a,n[1])?n[0]:(t.memoizedState=[e,a],e)}function z4(e,a){var t=_e();a=a===void 0?null:a;var n=t.memoizedState;if(a!==null&&hu(a,n[1]))return n[0];if(n=e(),Qn){Wt(!0);try{e()}finally{Wt(!1)}}return t.memoizedState=[n,a],n}function ju(e,a,t){return t===void 0||$t&1073741824&&!(te&261930)?e.memoizedState=a:(e.memoizedState=t,e=up(),J.lanes|=e,bn|=e,t)}function w4(e,a,t,n){return Ca(t,a)?t:Mi.current!==null?(e=ju(e,t,n),Ca(e,a)||(Ue=!0),e):!($t&42)||$t&1073741824&&!(te&261930)?(Ue=!0,e.memoizedState=t):(e=up(),J.lanes|=e,bn|=e,a)}function j4(e,a,t,n,i){var r=le.p;le.p=r!==0&&8>r?r:8;var l=X.T,s={};X.T=s,Nu(e,!1,a,t);try{var u=i(),m=X.S;if(m!==null&&m(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=Z5(u,n);Sr(e,a,p,Ma(e))}else Sr(e,a,n,Ma(e))}catch(g){Sr(e,a,{then:function(){},status:"rejected",reason:g},Ma())}finally{le.p=r,l!==null&&s.types!==null&&(l.types=s.types),X.T=l}}function W5(){}function Wo(e,a,t,n){if(e.tag!==5)throw Error(q(476));var i=E4(e).queue;j4(e,i,a,_n,t===null?W5:function(){return N4(e),t(n)})}function E4(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:_n,baseState:_n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:_n},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function N4(e){var a=E4(e);a.next===null&&(a=e.alternate.memoizedState),Sr(e,a.next.queue,{},Ma())}function Eu(){return ea(Lr)}function A4(){return _e().memoizedState}function q4(){return _e().memoizedState}function e3(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=Ma();e=on(t);var n=cn(a,e,t);n!==null&&(ba(n,a,t),br(n,a,t)),a={cache:uu()},e.payload=a;return}a=a.return}}function a3(e,a,t){var n=Ma();t={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ks(e)?T4(a,t):(t=lu(e,a,t,n),t!==null&&(ba(t,e,n),C4(t,a,n)))}function M4(e,a,t){var n=Ma();Sr(e,a,t,n)}function Sr(e,a,t,n){var i={lane:n,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ks(e))T4(a,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=a.lastRenderedReducer,r!==null))try{var l=a.lastRenderedState,s=r(l,t);if(i.hasEagerState=!0,i.eagerState=s,Ca(s,l))return Ys(e,a,i,0),he===null&&Qs(),!1}catch{}finally{}if(t=lu(e,a,i,n),t!==null)return ba(t,e,n),C4(t,a,n),!0}return!1}function Nu(e,a,t,n){if(n={lane:2,revertLane:_u(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ks(e)){if(a)throw Error(q(479))}else a=lu(e,t,n,2),a!==null&&ba(a,e,2)}function Ks(e){var a=e.alternate;return e===J||a!==null&&a===J}function T4(e,a){zi=ps=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function C4(e,a,t){if(t&4194048){var n=a.lanes;n&=e.pendingLanes,t|=n,a.lanes=t,vf(e,t)}}var Br={readContext:ea,use:Zs,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce};Br.useEffectEvent=Ce;var D4={readContext:ea,use:Zs,useCallback:function(e,a){return la().memoizedState=[e,a===void 0?null:a],e},useContext:ea,useEffect:om,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Xl(4194308,4,y4.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Xl(4194308,4,e,a)},useInsertionEffect:function(e,a){Xl(4,2,e,a)},useMemo:function(e,a){var t=la();a=a===void 0?null:a;var n=e();if(Qn){Wt(!0);try{e()}finally{Wt(!1)}}return t.memoizedState=[n,a],n},useReducer:function(e,a,t){var n=la();if(t!==void 0){var i=t(a);if(Qn){Wt(!0);try{t(a)}finally{Wt(!1)}}}else i=a;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=a3.bind(null,J,e),[n.memoizedState,e]},useRef:function(e){var a=la();return e={current:e},a.memoizedState=e},useState:function(e){e=Jo(e);var a=e.queue,t=M4.bind(null,J,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:wu,useDeferredValue:function(e,a){var t=la();return ju(t,e,a)},useTransition:function(){var e=Jo(!1);return e=j4.bind(null,J,e.queue,!0,!1),la().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var n=J,i=la();if(ne){if(t===void 0)throw Error(q(407));t=t()}else{if(t=a(),he===null)throw Error(q(349));te&127||r4(n,a,t)}i.memoizedState=t;var r={value:t,getSnapshot:a};return i.queue=r,om(s4.bind(null,n,r,e),[e]),n.flags|=2048,Ti(9,{destroy:void 0},l4.bind(null,n,r,t,a),null),t},useId:function(){var e=la(),a=he.identifierPrefix;if(ne){var t=lt,n=rt;t=(n&~(1<<32-qa(n)-1)).toString(32)+t,a="_"+a+"R_"+t,t=hs++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=F5++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Eu,useFormState:rm,useActionState:rm,useOptimistic:function(e){var a=la();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=Nu.bind(null,J,!0,t),t.dispatch=a,[e,a]},useMemoCache:xu,useCacheRefresh:function(){return la().memoizedState=e3.bind(null,J)},useEffectEvent:function(e){var a=la(),t={impl:e};return a.memoizedState=t,function(){if(ie&2)throw Error(q(440));return t.impl.apply(void 0,arguments)}}},Au={readContext:ea,use:Zs,useCallback:S4,useContext:ea,useEffect:zu,useImperativeHandle:x4,useInsertionEffect:g4,useLayoutEffect:b4,useMemo:z4,useReducer:Vl,useRef:h4,useState:function(){return Vl(kt)},useDebugValue:wu,useDeferredValue:function(e,a){var t=_e();return w4(t,fe.memoizedState,e,a)},useTransition:function(){var e=Vl(kt)[0],a=_e().memoizedState;return[typeof e=="boolean"?e:al(e),a]},useSyncExternalStore:i4,useId:A4,useHostTransitionStatus:Eu,useFormState:lm,useActionState:lm,useOptimistic:function(e,a){var t=_e();return u4(t,fe,e,a)},useMemoCache:xu,useCacheRefresh:q4};Au.useEffectEvent=v4;var $4={readContext:ea,use:Zs,useCallback:S4,useContext:ea,useEffect:zu,useImperativeHandle:x4,useInsertionEffect:g4,useLayoutEffect:b4,useMemo:z4,useReducer:_0,useRef:h4,useState:function(){return _0(kt)},useDebugValue:wu,useDeferredValue:function(e,a){var t=_e();return fe===null?ju(t,e,a):w4(t,fe.memoizedState,e,a)},useTransition:function(){var e=_0(kt)[0],a=_e().memoizedState;return[typeof e=="boolean"?e:al(e),a]},useSyncExternalStore:i4,useId:A4,useHostTransitionStatus:Eu,useFormState:sm,useActionState:sm,useOptimistic:function(e,a){var t=_e();return fe!==null?u4(t,fe,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:xu,useCacheRefresh:q4};$4.useEffectEvent=v4;function O0(e,a,t,n){a=e.memoizedState,t=t(n,a),t=t==null?a:we({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ec={enqueueSetState:function(e,a,t){e=e._reactInternals;var n=Ma(),i=on(n);i.payload=a,t!=null&&(i.callback=t),a=cn(e,i,n),a!==null&&(ba(a,e,n),br(a,e,n))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var n=Ma(),i=on(n);i.tag=1,i.payload=a,t!=null&&(i.callback=t),a=cn(e,i,n),a!==null&&(ba(a,e,n),br(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=Ma(),n=on(t);n.tag=2,a!=null&&(n.callback=a),a=cn(e,n,t),a!==null&&(ba(a,e,t),br(a,e,t))}};function cm(e,a,t,n,i,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,l):a.prototype&&a.prototype.isPureReactComponent?!Dr(t,n)||!Dr(i,r):!0}function um(e,a,t,n){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,n),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,n),a.state!==e&&ec.enqueueReplaceState(a,a.state,null)}function Yn(e,a){var t=a;if("ref"in a){t={};for(var n in a)n!=="ref"&&(t[n]=a[n])}if(e=e.defaultProps){t===a&&(t=we({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function k4(e){ss(e)}function _4(e){console.error(e)}function O4(e){ss(e)}function vs(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(n){setTimeout(function(){throw n})}}function dm(e,a,t){try{var n=e.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ac(e,a,t){return t=on(t),t.tag=3,t.payload={element:null},t.callback=function(){vs(e,a)},t}function B4(e){return e=on(e),e.tag=3,e}function R4(e,a,t,n){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){dm(a,t,n)}}var l=t.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(e.callback=function(){dm(a,t,n),typeof i!="function"&&(un===null?un=new Set([this]):un.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function t3(e,a,t,n,i){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(a=t.alternate,a!==null&&Qi(a,t,i,!0),t=Da.current,t!==null){switch(t.tag){case 31:case 13:return Xa===null?Ss():t.alternate===null&&$e===0&&($e=3),t.flags&=-257,t.flags|=65536,t.lanes=i,n===ds?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([n]):a.add(n),Z0(e,n,i)),!1;case 22:return t.flags|=65536,n===ds?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([n]):t.add(n)),Z0(e,n,i)),!1}throw Error(q(435,t.tag))}return Z0(e,n,i),Ss(),!1}if(ne)return a=Da.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=i,n!==Go&&(e=Error(q(422),{cause:n}),kr(Qa(e,t)))):(n!==Go&&(a=Error(q(423),{cause:n}),kr(Qa(a,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Qa(n,t),i=ac(e.stateNode,n,i),k0(e,i),$e!==4&&($e=2)),!1;var r=Error(q(520),{cause:n});if(r=Qa(r,t),jr===null?jr=[r]:jr.push(r),$e!==4&&($e=2),a===null)return!0;n=Qa(n,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=ac(t.stateNode,n,e),k0(t,e),!1;case 1:if(a=t.type,r=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))))return t.flags|=65536,i&=-i,t.lanes|=i,i=B4(i),R4(i,e,t,n),k0(t,i),!1}t=t.return}while(t!==null);return!1}var qu=Error(q(461)),Ue=!1;function Pe(e,a,t,n){a.child=e===null?If(a,null,t,n):Gn(a,e.child,t,n)}function mm(e,a,t,n,i){t=t.render;var r=a.ref;if("ref"in n){var l={};for(var s in n)s!=="ref"&&(l[s]=n[s])}else l=n;return Hn(a),n=vu(e,a,t,l,r,i),s=gu(),e!==null&&!Ue?(bu(e,a,i),_t(e,a,i)):(ne&&s&&ou(a),a.flags|=1,Pe(e,a,n,i),a.child)}function fm(e,a,t,n,i){if(e===null){var r=t.type;return typeof r=="function"&&!su(r)&&r.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=r,U4(e,a,r,n,i)):(e=Ql(t.type,null,n,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(r=e.child,!Mu(e,i)){var l=r.memoizedProps;if(t=t.compare,t=t!==null?t:Dr,t(l,n)&&e.ref===a.ref)return _t(e,a,i)}return a.flags|=1,e=qt(r,n),e.ref=a.ref,e.return=a,a.child=e}function U4(e,a,t,n,i){if(e!==null){var r=e.memoizedProps;if(Dr(r,n)&&e.ref===a.ref)if(Ue=!1,a.pendingProps=n=r,Mu(e,i))e.flags&131072&&(Ue=!0);else return a.lanes=e.lanes,_t(e,a,i)}return tc(e,a,t,n,i)}function L4(e,a,t,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(a.flags&128){if(r=r!==null?r.baseLanes|t:t,e!==null){for(n=a.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,a.child=null;return pm(e,a,r,t,n)}if(t&536870912)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yl(a,r!==null?r.cachePool:null),r!==null?tm(a,r):Ko(),a4(a);else return n=a.lanes=536870912,pm(e,a,r!==null?r.baseLanes|t:t,t,n)}else r!==null?(Yl(a,r.cachePool),tm(a,r),Jt(),a.memoizedState=null):(e!==null&&Yl(a,null),Ko(),Jt());return Pe(e,a,i,t),a.child}function ur(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function pm(e,a,t,n,i){var r=du();return r=r===null?null:{parent:Re._currentValue,pool:r},a.memoizedState={baseLanes:t,cachePool:r},e!==null&&Yl(a,null),Ko(),a4(a),e!==null&&Qi(e,a,n,!0),a.childLanes=i,null}function Zl(e,a){return a=gs({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function hm(e,a,t){return Gn(a,e.child,null,t),e=Zl(a,a.pendingProps),e.flags|=2,wa(a),a.memoizedState=null,e}function n3(e,a,t){var n=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ne){if(n.mode==="hidden")return e=Zl(a,n),a.lanes=536870912,ur(null,e);if(Po(a),(e=Se)?(e=Dp(e,Ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:hn!==null?{id:rt,overflow:lt}:null,retryLane:536870912,hydrationErrors:null},t=Vf(e),t.return=a,a.child=t,We=a,Se=null)):e=null,e===null)throw vn(a);return a.lanes=536870912,null}return Zl(a,n)}var r=e.memoizedState;if(r!==null){var l=r.dehydrated;if(Po(a),i)if(a.flags&256)a.flags&=-257,a=hm(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(q(558));else if(Ue||Qi(e,a,t,!1),i=(t&e.childLanes)!==0,Ue||i){if(n=he,n!==null&&(l=gf(n,t),l!==0&&l!==r.retryLane))throw r.retryLane=l,Fn(e,l),ba(n,e,l),qu;Ss(),a=hm(e,a,t)}else e=r.treeContext,Se=Za(l.nextSibling),We=a,ne=!0,sn=null,Ya=!1,e!==null&&Zf(a,e),a=Zl(a,n),a.flags|=4096;return a}return e=qt(e.child,{mode:n.mode,children:n.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Fl(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(q(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function tc(e,a,t,n,i){return Hn(a),t=vu(e,a,t,n,void 0,i),n=gu(),e!==null&&!Ue?(bu(e,a,i),_t(e,a,i)):(ne&&n&&ou(a),a.flags|=1,Pe(e,a,t,i),a.child)}function vm(e,a,t,n,i,r){return Hn(a),a.updateQueue=null,t=n4(a,n,t,i),t4(e),n=gu(),e!==null&&!Ue?(bu(e,a,r),_t(e,a,r)):(ne&&n&&ou(a),a.flags|=1,Pe(e,a,t,r),a.child)}function gm(e,a,t,n,i){if(Hn(a),a.stateNode===null){var r=fi,l=t.contextType;typeof l=="object"&&l!==null&&(r=ea(l)),r=new t(n,r),a.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ec,a.stateNode=r,r._reactInternals=a,r=a.stateNode,r.props=n,r.state=a.memoizedState,r.refs={},fu(a),l=t.contextType,r.context=typeof l=="object"&&l!==null?ea(l):fi,r.state=a.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(O0(a,t,l,n),r.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(l=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),l!==r.state&&ec.enqueueReplaceState(r,r.state,null),xr(a,n,r,i),yr(),r.state=a.memoizedState),typeof r.componentDidMount=="function"&&(a.flags|=4194308),n=!0}else if(e===null){r=a.stateNode;var s=a.memoizedProps,u=Yn(t,s);r.props=u;var m=r.context,p=t.contextType;l=fi,typeof p=="object"&&p!==null&&(l=ea(p));var g=t.getDerivedStateFromProps;p=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=a.pendingProps!==s,p||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||m!==l)&&um(a,r,n,l),Ft=!1;var v=a.memoizedState;r.state=v,xr(a,n,r,i),yr(),m=a.memoizedState,s||v!==m||Ft?(typeof g=="function"&&(O0(a,t,g,n),m=a.memoizedState),(u=Ft||cm(a,t,u,n,v,m,l))?(p||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(a.flags|=4194308)):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=n,a.memoizedState=m),r.props=n,r.state=m,r.context=l,n=u):(typeof r.componentDidMount=="function"&&(a.flags|=4194308),n=!1)}else{r=a.stateNode,Zo(e,a),l=a.memoizedProps,p=Yn(t,l),r.props=p,g=a.pendingProps,v=r.context,m=t.contextType,u=fi,typeof m=="object"&&m!==null&&(u=ea(m)),s=t.getDerivedStateFromProps,(m=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==g||v!==u)&&um(a,r,n,u),Ft=!1,v=a.memoizedState,r.state=v,xr(a,n,r,i),yr();var b=a.memoizedState;l!==g||v!==b||Ft||e!==null&&e.dependencies!==null&&us(e.dependencies)?(typeof s=="function"&&(O0(a,t,s,n),b=a.memoizedState),(p=Ft||cm(a,t,p,n,v,b,u)||e!==null&&e.dependencies!==null&&us(e.dependencies))?(m||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,b,u),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,b,u)),typeof r.componentDidUpdate=="function"&&(a.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),a.memoizedProps=n,a.memoizedState=b),r.props=n,r.state=b,r.context=u,n=p):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(a.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(a.flags|=1024),n=!1)}return r=n,Fl(e,a),n=(a.flags&128)!==0,r||n?(r=a.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:r.render(),a.flags|=1,e!==null&&n?(a.child=Gn(a,e.child,null,i),a.child=Gn(a,null,t,i)):Pe(e,a,t,i),a.memoizedState=r.state,e=a.child):e=_t(e,a,i),e}function bm(e,a,t,n){return Ln(),a.flags|=256,Pe(e,a,t,n),a.child}var B0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function R0(e){return{baseLanes:e,cachePool:Kf()}}function U0(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=Ea),e}function H4(e,a,t){var n=a.pendingProps,i=!1,r=(a.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(ke.current&2)!==0),l&&(i=!0,a.flags&=-129),l=(a.flags&32)!==0,a.flags&=-33,e===null){if(ne){if(i?Pt(a):Jt(),(e=Se)?(e=Dp(e,Ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:hn!==null?{id:rt,overflow:lt}:null,retryLane:536870912,hydrationErrors:null},t=Vf(e),t.return=a,a.child=t,We=a,Se=null)):e=null,e===null)throw vn(a);return vc(e)?a.lanes=32:a.lanes=536870912,null}var s=n.children;return n=n.fallback,i?(Jt(),i=a.mode,s=gs({mode:"hidden",children:s},i),n=On(n,i,t,null),s.return=a,n.return=a,s.sibling=n,a.child=s,n=a.child,n.memoizedState=R0(t),n.childLanes=U0(e,l,t),a.memoizedState=B0,ur(null,n)):(Pt(a),nc(a,s))}var u=e.memoizedState;if(u!==null&&(s=u.dehydrated,s!==null)){if(r)a.flags&256?(Pt(a),a.flags&=-257,a=L0(e,a,t)):a.memoizedState!==null?(Jt(),a.child=e.child,a.flags|=128,a=null):(Jt(),s=n.fallback,i=a.mode,n=gs({mode:"visible",children:n.children},i),s=On(s,i,t,null),s.flags|=2,n.return=a,s.return=a,n.sibling=s,a.child=n,Gn(a,e.child,null,t),n=a.child,n.memoizedState=R0(t),n.childLanes=U0(e,l,t),a.memoizedState=B0,a=ur(null,n));else if(Pt(a),vc(s)){if(l=s.nextSibling&&s.nextSibling.dataset,l)var m=l.dgst;l=m,n=Error(q(419)),n.stack="",n.digest=l,kr({value:n,source:null,stack:null}),a=L0(e,a,t)}else if(Ue||Qi(e,a,t,!1),l=(t&e.childLanes)!==0,Ue||l){if(l=he,l!==null&&(n=gf(l,t),n!==0&&n!==u.retryLane))throw u.retryLane=n,Fn(e,n),ba(l,e,n),qu;hc(s)||Ss(),a=L0(e,a,t)}else hc(s)?(a.flags|=192,a.child=e.child,a=null):(e=u.treeContext,Se=Za(s.nextSibling),We=a,ne=!0,sn=null,Ya=!1,e!==null&&Zf(a,e),a=nc(a,n.children),a.flags|=4096);return a}return i?(Jt(),s=n.fallback,i=a.mode,u=e.child,m=u.sibling,n=qt(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,m!==null?s=qt(m,s):(s=On(s,i,t,null),s.flags|=2),s.return=a,n.return=a,n.sibling=s,a.child=n,ur(null,n),n=a.child,s=e.child.memoizedState,s===null?s=R0(t):(i=s.cachePool,i!==null?(u=Re._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=Kf(),s={baseLanes:s.baseLanes|t,cachePool:i}),n.memoizedState=s,n.childLanes=U0(e,l,t),a.memoizedState=B0,ur(e.child,n)):(Pt(a),t=e.child,e=t.sibling,t=qt(t,{mode:"visible",children:n.children}),t.return=a,t.sibling=null,e!==null&&(l=a.deletions,l===null?(a.deletions=[e],a.flags|=16):l.push(e)),a.child=t,a.memoizedState=null,t)}function nc(e,a){return a=gs({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function gs(e,a){return e=ja(22,e,null,a),e.lanes=0,e}function L0(e,a,t){return Gn(a,e.child,null,t),e=nc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function ym(e,a,t){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a),Yo(e.return,a,t)}function H0(e,a,t,n,i,r){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:i,treeForkCount:r}:(l.isBackwards=a,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=i,l.treeForkCount=r)}function G4(e,a,t){var n=a.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var l=ke.current,s=(l&2)!==0;if(s?(l=l&1|2,a.flags|=128):l&=1,be(ke,l),Pe(e,a,n,t),n=ne?$r:0,!s&&e!==null&&e.flags&128)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ym(e,t,a);else if(e.tag===19)ym(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=a.child,i=null;t!==null;)e=t.alternate,e!==null&&fs(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=a.child,a.child=null):(i=t.sibling,t.sibling=null),H0(a,!1,i,t,r,n);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&fs(e)===null){a.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}H0(a,!0,t,null,r,n);break;case"together":H0(a,!1,null,null,void 0,n);break;default:a.memoizedState=null}return a.child}function _t(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),bn|=a.lanes,!(t&a.childLanes))if(e!==null){if(Qi(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(q(153));if(a.child!==null){for(e=a.child,t=qt(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=qt(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Mu(e,a){return e.lanes&a?!0:(e=e.dependencies,!!(e!==null&&us(e)))}function i3(e,a,t){switch(a.tag){case 3:ns(a,a.stateNode.containerInfo),Kt(a,Re,e.memoizedState.cache),Ln();break;case 27:case 5:Co(a);break;case 4:ns(a,a.stateNode.containerInfo);break;case 10:Kt(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Po(a),null;break;case 13:var n=a.memoizedState;if(n!==null)return n.dehydrated!==null?(Pt(a),a.flags|=128,null):t&a.child.childLanes?H4(e,a,t):(Pt(a),e=_t(e,a,t),e!==null?e.sibling:null);Pt(a);break;case 19:var i=(e.flags&128)!==0;if(n=(t&a.childLanes)!==0,n||(Qi(e,a,t,!1),n=(t&a.childLanes)!==0),i){if(n)return G4(e,a,t);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(ke,ke.current),n)break;return null;case 22:return a.lanes=0,L4(e,a,t,a.pendingProps);case 24:Kt(a,Re,e.memoizedState.cache)}return _t(e,a,t)}function Q4(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ue=!0;else{if(!Mu(e,t)&&!(a.flags&128))return Ue=!1,i3(e,a,t);Ue=!!(e.flags&131072)}else Ue=!1,ne&&a.flags&1048576&&Xf(a,$r,a.index);switch(a.lanes=0,a.tag){case 16:e:{var n=a.pendingProps;if(e=Dn(a.elementType),a.type=e,typeof e=="function")su(e)?(n=Yn(e,n),a.tag=1,a=gm(null,a,e,n,t)):(a.tag=0,a=tc(null,a,e,n,t));else{if(e!=null){var i=e.$$typeof;if(i===Zc){a.tag=11,a=mm(null,a,e,n,t);break e}else if(i===Fc){a.tag=14,a=fm(null,a,e,n,t);break e}}throw a=Mo(e)||e,Error(q(306,a,""))}}return a;case 0:return tc(e,a,a.type,a.pendingProps,t);case 1:return n=a.type,i=Yn(n,a.pendingProps),gm(e,a,n,i,t);case 3:e:{if(ns(a,a.stateNode.containerInfo),e===null)throw Error(q(387));n=a.pendingProps;var r=a.memoizedState;i=r.element,Zo(e,a),xr(a,n,null,t);var l=a.memoizedState;if(n=l.cache,Kt(a,Re,n),n!==r.cache&&Vo(a,[Re],t,!0),yr(),n=l.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:l.cache},a.updateQueue.baseState=r,a.memoizedState=r,a.flags&256){a=bm(e,a,n,t);break e}else if(n!==i){i=Qa(Error(q(424)),a),kr(i),a=bm(e,a,n,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Se=Za(e.firstChild),We=a,ne=!0,sn=null,Ya=!0,t=If(a,null,n,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ln(),n===i){a=_t(e,a,t);break e}Pe(e,a,n,t)}a=a.child}return a;case 26:return Fl(e,a),e===null?(t=Um(a.type,null,a.pendingProps,null))?a.memoizedState=t:ne||(t=a.type,e=a.pendingProps,n=Es(ln.current).createElement(t),n[Ie]=a,n[ya]=e,aa(n,t,e),Fe(n),a.stateNode=n):a.memoizedState=Um(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Co(a),e===null&&ne&&(n=a.stateNode=$p(a.type,a.pendingProps,ln.current),We=a,Ya=!0,i=Se,jn(a.type)?(gc=i,Se=Za(n.firstChild)):Se=i),Pe(e,a,a.pendingProps.children,t),Fl(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ne&&((i=n=Se)&&(n=k3(n,a.type,a.pendingProps,Ya),n!==null?(a.stateNode=n,We=a,Se=Za(n.firstChild),Ya=!1,i=!0):i=!1),i||vn(a)),Co(a),i=a.type,r=a.pendingProps,l=e!==null?e.memoizedProps:null,n=r.children,fc(i,r)?n=null:l!==null&&fc(i,l)&&(a.flags|=32),a.memoizedState!==null&&(i=vu(e,a,K5,null,null,t),Lr._currentValue=i),Fl(e,a),Pe(e,a,n,t),a.child;case 6:return e===null&&ne&&((e=t=Se)&&(t=_3(t,a.pendingProps,Ya),t!==null?(a.stateNode=t,We=a,Se=null,e=!0):e=!1),e||vn(a)),null;case 13:return H4(e,a,t);case 4:return ns(a,a.stateNode.containerInfo),n=a.pendingProps,e===null?a.child=Gn(a,null,n,t):Pe(e,a,n,t),a.child;case 11:return mm(e,a,a.type,a.pendingProps,t);case 7:return Pe(e,a,a.pendingProps,t),a.child;case 8:return Pe(e,a,a.pendingProps.children,t),a.child;case 12:return Pe(e,a,a.pendingProps.children,t),a.child;case 10:return n=a.pendingProps,Kt(a,a.type,n.value),Pe(e,a,n.children,t),a.child;case 9:return i=a.type._context,n=a.pendingProps.children,Hn(a),i=ea(i),n=n(i),a.flags|=1,Pe(e,a,n,t),a.child;case 14:return fm(e,a,a.type,a.pendingProps,t);case 15:return U4(e,a,a.type,a.pendingProps,t);case 19:return G4(e,a,t);case 31:return n3(e,a,t);case 22:return L4(e,a,t,a.pendingProps);case 24:return Hn(a),n=ea(Re),e===null?(i=du(),i===null&&(i=he,r=uu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=t),i=r),a.memoizedState={parent:n,cache:i},fu(a),Kt(a,Re,i)):(e.lanes&t&&(Zo(e,a),xr(a,null,null,t),yr()),i=e.memoizedState,r=a.memoizedState,i.parent!==n?(i={parent:n,cache:n},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),Kt(a,Re,n)):(n=r.cache,Kt(a,Re,n),n!==i.cache&&Vo(a,[Re],t,!0))),Pe(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(q(156,a.tag))}function gt(e){e.flags|=4}function G0(e,a,t,n,i){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(fp())e.flags|=8192;else throw Rn=ds,mu}else e.flags&=-16777217}function xm(e,a){if(a.type!=="stylesheet"||a.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Op(a))if(fp())e.flags|=8192;else throw Rn=ds,mu}function zl(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?pf():536870912,e.lanes|=a,Ci|=a)}function nr(e,a){if(!ne)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function xe(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(a)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=t,a}function r3(e,a,t){var n=a.pendingProps;switch(cu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(a),null;case 1:return xe(a),null;case 3:return t=a.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Mt(Re),Ei(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Wn(a)?gt(a):e===null||e.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,$0())),xe(a),null;case 26:var i=a.type,r=a.memoizedState;return e===null?(gt(a),r!==null?(xe(a),xm(a,r)):(xe(a),G0(a,i,null,n,t))):r?r!==e.memoizedState?(gt(a),xe(a),xm(a,r)):(xe(a),a.flags&=-16777217):(e=e.memoizedProps,e!==n&&gt(a),xe(a),G0(a,i,e,n,t)),null;case 27:if(is(a),t=ln.current,i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&gt(a);else{if(!n){if(a.stateNode===null)throw Error(q(166));return xe(a),null}e=ct.current,Wn(a)?Kd(a):(e=$p(i,n,t),a.stateNode=e,gt(a))}return xe(a),null;case 5:if(is(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==n&&gt(a);else{if(!n){if(a.stateNode===null)throw Error(q(166));return xe(a),null}if(r=ct.current,Wn(a))Kd(a);else{var l=Es(ln.current);switch(r){case 1:r=l.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=l.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=l.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?l.createElement(i,{is:n.is}):l.createElement(i)}}r[Ie]=a,r[ya]=n;e:for(l=a.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}a.stateNode=r;e:switch(aa(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&gt(a)}}return xe(a),G0(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==n&&gt(a);else{if(typeof n!="string"&&a.stateNode===null)throw Error(q(166));if(e=ln.current,Wn(a)){if(e=a.stateNode,t=a.memoizedProps,n=null,i=We,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[Ie]=a,e=!!(e.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||Mp(e.nodeValue,t)),e||vn(a,!0)}else e=Es(e).createTextNode(n),e[Ie]=a,a.stateNode=e}return xe(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(n=Wn(a),t!==null){if(e===null){if(!n)throw Error(q(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(557));e[Ie]=a}else Ln(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;xe(a),e=!1}else t=$0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(wa(a),a):(wa(a),null);if(a.flags&128)throw Error(q(558))}return xe(a),null;case 13:if(n=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Wn(a),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(q(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(q(317));i[Ie]=a}else Ln(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;xe(a),i=!1}else i=$0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(wa(a),a):(wa(a),null)}return wa(a),a.flags&128?(a.lanes=t,a):(t=n!==null,e=e!==null&&e.memoizedState!==null,t&&(n=a.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),zl(a,a.updateQueue),xe(a),null);case 4:return Ei(),e===null&&Ou(a.stateNode.containerInfo),xe(a),null;case 10:return Mt(a.type),xe(a),null;case 19:if(Ke(ke),n=a.memoizedState,n===null)return xe(a),null;if(i=(a.flags&128)!==0,r=n.rendering,r===null)if(i)nr(n,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=a.child;e!==null;){if(r=fs(e),r!==null){for(a.flags|=128,nr(n,!1),e=r.updateQueue,a.updateQueue=e,zl(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Yf(t,e),t=t.sibling;return be(ke,ke.current&1|2),ne&&zt(a,n.treeForkCount),a.child}e=e.sibling}n.tail!==null&&Na()>ys&&(a.flags|=128,i=!0,nr(n,!1),a.lanes=4194304)}else{if(!i)if(e=fs(r),e!==null){if(a.flags|=128,i=!0,e=e.updateQueue,a.updateQueue=e,zl(a,e),nr(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!ne)return xe(a),null}else 2*Na()-n.renderingStartTime>ys&&t!==536870912&&(a.flags|=128,i=!0,nr(n,!1),a.lanes=4194304);n.isBackwards?(r.sibling=a.child,a.child=r):(e=n.last,e!==null?e.sibling=r:a.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Na(),e.sibling=null,t=ke.current,be(ke,i?t&1|2:t&1),ne&&zt(a,n.treeForkCount),e):(xe(a),null);case 22:case 23:return wa(a),pu(),n=a.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(a.flags|=8192):n&&(a.flags|=8192),n?t&536870912&&!(a.flags&128)&&(xe(a),a.subtreeFlags&6&&(a.flags|=8192)):xe(a),t=a.updateQueue,t!==null&&zl(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==t&&(a.flags|=2048),e!==null&&Ke(Bn),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Mt(Re),xe(a),null;case 25:return null;case 30:return null}throw Error(q(156,a.tag))}function l3(e,a){switch(cu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Mt(Re),Ei(),e=a.flags,e&65536&&!(e&128)?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return is(a),null;case 31:if(a.memoizedState!==null){if(wa(a),a.alternate===null)throw Error(q(340));Ln()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(wa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(q(340));Ln()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Ke(ke),null;case 4:return Ei(),null;case 10:return Mt(a.type),null;case 22:case 23:return wa(a),pu(),e!==null&&Ke(Bn),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Mt(Re),null;case 25:return null;default:return null}}function Y4(e,a){switch(cu(a),a.tag){case 3:Mt(Re),Ei();break;case 26:case 27:case 5:is(a);break;case 4:Ei();break;case 31:a.memoizedState!==null&&wa(a);break;case 13:wa(a);break;case 19:Ke(ke);break;case 10:Mt(a.type);break;case 22:case 23:wa(a),pu(),e!==null&&Ke(Bn);break;case 24:Mt(Re)}}function tl(e,a){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var i=n.next;t=i;do{if((t.tag&e)===e){n=void 0;var r=t.create,l=t.inst;n=r(),l.destroy=n}t=t.next}while(t!==i)}}catch(s){de(a,a.return,s)}}function gn(e,a,t){try{var n=a.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var l=n.inst,s=l.destroy;if(s!==void 0){l.destroy=void 0,i=a;var u=t,m=s;try{m()}catch(p){de(i,u,p)}}}n=n.next}while(n!==r)}}catch(p){de(a,a.return,p)}}function V4(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{e4(a,t)}catch(n){de(e,e.return,n)}}}function X4(e,a,t){t.props=Yn(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(n){de(e,a,n)}}function zr(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof t=="function"?e.refCleanup=t(n):t.current=n}}catch(i){de(e,a,i)}}function st(e,a){var t=e.ref,n=e.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(i){de(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){de(e,a,i)}else t.current=null}function Z4(e){var a=e.type,t=e.memoizedProps,n=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break e;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(i){de(e,e.return,i)}}function Q0(e,a,t){try{var n=e.stateNode;q3(n,e.type,t,a),n[ya]=a}catch(i){de(e,e.return,i)}}function F4(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jn(e.type)||e.tag===4}function Y0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||F4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Nt));else if(n!==4&&(n===27&&jn(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(ic(e,a,t),e=e.sibling;e!==null;)ic(e,a,t),e=e.sibling}function bs(e,a,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(n!==4&&(n===27&&jn(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(bs(e,a,t),e=e.sibling;e!==null;)bs(e,a,t),e=e.sibling}function K4(e){var a=e.stateNode,t=e.memoizedProps;try{for(var n=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);aa(a,n,t),a[Ie]=e,a[ya]=t}catch(r){de(e,e.return,r)}}var jt=!1,Be=!1,V0=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function s3(e,a){if(e=e.containerInfo,dc=Ms,e=Of(e),iu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var l=0,s=-1,u=-1,m=0,p=0,g=e,v=null;a:for(;;){for(var b;g!==t||i!==0&&g.nodeType!==3||(s=l+i),g!==r||n!==0&&g.nodeType!==3||(u=l+n),g.nodeType===3&&(l+=g.nodeValue.length),(b=g.firstChild)!==null;)v=g,g=b;for(;;){if(g===e)break a;if(v===t&&++m===i&&(s=l),v===r&&++p===n&&(u=l),(b=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=b}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(mc={focusedElem:e,selectionRange:t},Ms=!1,Ze=a;Ze!==null;)if(a=Ze,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ze=e;else for(;Ze!==null;){switch(a=Ze,r=a.alternate,e=a.flags,a.tag){case 0:if(e&4&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,t=a,i=r.memoizedProps,r=r.memoizedState,n=t.stateNode;try{var N=Yn(t.type,i);e=n.getSnapshotBeforeUpdate(N,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(A){de(t,t.return,A)}}break;case 3:if(e&1024){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)pc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(q(163))}if(e=a.sibling,e!==null){e.return=a.return,Ze=e;break}Ze=a.return}}function P4(e,a,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:yt(e,t),n&4&&tl(5,t);break;case 1:if(yt(e,t),n&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(l){de(t,t.return,l)}else{var i=Yn(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(l){de(t,t.return,l)}}n&64&&V4(t),n&512&&zr(t,t.return);break;case 3:if(yt(e,t),n&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{e4(e,a)}catch(l){de(t,t.return,l)}}break;case 27:a===null&&n&4&&K4(t);case 26:case 5:yt(e,t),a===null&&n&4&&Z4(t),n&512&&zr(t,t.return);break;case 12:yt(e,t);break;case 31:yt(e,t),n&4&&W4(e,t);break;case 13:yt(e,t),n&4&&ep(e,t),n&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=v3.bind(null,t),O3(e,t))));break;case 22:if(n=t.memoizedState!==null||jt,!n){a=a!==null&&a.memoizedState!==null||Be,i=jt;var r=Be;jt=n,(Be=a)&&!r?St(e,t,(t.subtreeFlags&8772)!==0):yt(e,t),jt=i,Be=r}break;case 30:break;default:yt(e,t)}}function J4(e){var a=e.alternate;a!==null&&(e.alternate=null,J4(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Ic(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,pa=!1;function bt(e,a,t){for(t=t.child;t!==null;)I4(e,a,t),t=t.sibling}function I4(e,a,t){if(Aa&&typeof Aa.onCommitFiberUnmount=="function")try{Aa.onCommitFiberUnmount(Kr,t)}catch{}switch(t.tag){case 26:Be||st(t,a),bt(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Be||st(t,a);var n=Ee,i=pa;jn(t.type)&&(Ee=t.stateNode,pa=!1),bt(e,a,t),Nr(t.stateNode),Ee=n,pa=i;break;case 5:Be||st(t,a);case 6:if(n=Ee,i=pa,Ee=null,bt(e,a,t),Ee=n,pa=i,Ee!==null)if(pa)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(t.stateNode)}catch(r){de(t,a,r)}else try{Ee.removeChild(t.stateNode)}catch(r){de(t,a,r)}break;case 18:Ee!==null&&(pa?(e=Ee,km(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),_i(e)):km(Ee,t.stateNode));break;case 4:n=Ee,i=pa,Ee=t.stateNode.containerInfo,pa=!0,bt(e,a,t),Ee=n,pa=i;break;case 0:case 11:case 14:case 15:gn(2,t,a),Be||gn(4,t,a),bt(e,a,t);break;case 1:Be||(st(t,a),n=t.stateNode,typeof n.componentWillUnmount=="function"&&X4(t,a,n)),bt(e,a,t);break;case 21:bt(e,a,t);break;case 22:Be=(n=Be)||t.memoizedState!==null,bt(e,a,t),Be=n;break;default:bt(e,a,t)}}function W4(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_i(e)}catch(t){de(a,a.return,t)}}}function ep(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_i(e)}catch(t){de(a,a.return,t)}}function o3(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Sm),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Sm),a;default:throw Error(q(435,e.tag))}}function wl(e,a){var t=o3(e);a.forEach(function(n){if(!t.has(n)){t.add(n);var i=g3.bind(null,e,n);n.then(i,i)}})}function ma(e,a){var t=a.deletions;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n],r=e,l=a,s=l;e:for(;s!==null;){switch(s.tag){case 27:if(jn(s.type)){Ee=s.stateNode,pa=!1;break e}break;case 5:Ee=s.stateNode,pa=!1;break e;case 3:case 4:Ee=s.stateNode.containerInfo,pa=!0;break e}s=s.return}if(Ee===null)throw Error(q(160));I4(r,l,i),Ee=null,pa=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)ap(a,e),a=a.sibling}var Wa=null;function ap(e,a){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ma(a,e),fa(e),n&4&&(gn(3,e,e.return),tl(3,e),gn(5,e,e.return));break;case 1:ma(a,e),fa(e),n&512&&(Be||t===null||st(t,t.return)),n&64&&jt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var i=Wa;if(ma(a,e),fa(e),n&512&&(Be||t===null||st(t,t.return)),n&4){var r=t!==null?t.memoizedState:null;if(n=e.memoizedState,t===null)if(n===null)if(e.stateNode===null){e:{n=e.type,t=e.memoizedProps,i=i.ownerDocument||i;a:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Ir]||r[Ie]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),aa(r,n,t),r[Ie]=e,Fe(r),n=r;break e;case"link":var l=Hm("link","href",i).get(n+(t.href||""));if(l){for(var s=0;s<l.length;s++)if(r=l[s],r.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&r.getAttribute("rel")===(t.rel==null?null:t.rel)&&r.getAttribute("title")===(t.title==null?null:t.title)&&r.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){l.splice(s,1);break a}}r=i.createElement(n),aa(r,n,t),i.head.appendChild(r);break;case"meta":if(l=Hm("meta","content",i).get(n+(t.content||""))){for(s=0;s<l.length;s++)if(r=l[s],r.getAttribute("content")===(t.content==null?null:""+t.content)&&r.getAttribute("name")===(t.name==null?null:t.name)&&r.getAttribute("property")===(t.property==null?null:t.property)&&r.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&r.getAttribute("charset")===(t.charSet==null?null:t.charSet)){l.splice(s,1);break a}}r=i.createElement(n),aa(r,n,t),i.head.appendChild(r);break;default:throw Error(q(468,n))}r[Ie]=e,Fe(r),n=r}e.stateNode=n}else Gm(i,e.type,e.stateNode);else e.stateNode=Lm(i,n,e.memoizedProps);else r!==n?(r===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):r.count--,n===null?Gm(i,e.type,e.stateNode):Lm(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Q0(e,e.memoizedProps,t.memoizedProps)}break;case 27:ma(a,e),fa(e),n&512&&(Be||t===null||st(t,t.return)),t!==null&&n&4&&Q0(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ma(a,e),fa(e),n&512&&(Be||t===null||st(t,t.return)),e.flags&32){i=e.stateNode;try{Ai(i,"")}catch(N){de(e,e.return,N)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Q0(e,i,t!==null?t.memoizedProps:i)),n&1024&&(V0=!0);break;case 6:if(ma(a,e),fa(e),n&4){if(e.stateNode===null)throw Error(q(162));n=e.memoizedProps,t=e.stateNode;try{t.nodeValue=n}catch(N){de(e,e.return,N)}}break;case 3:if(Jl=null,i=Wa,Wa=Ns(a.containerInfo),ma(a,e),Wa=i,fa(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{_i(a.containerInfo)}catch(N){de(e,e.return,N)}V0&&(V0=!1,tp(e));break;case 4:n=Wa,Wa=Ns(e.stateNode.containerInfo),ma(a,e),fa(e),Wa=n;break;case 12:ma(a,e),fa(e);break;case 31:ma(a,e),fa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wl(e,n)));break;case 13:ma(a,e),fa(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ps=Na()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wl(e,n)));break;case 22:i=e.memoizedState!==null;var u=t!==null&&t.memoizedState!==null,m=jt,p=Be;if(jt=m||i,Be=p||u,ma(a,e),Be=p,jt=m,fa(e),n&8192)e:for(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(t===null||u||jt||Be||$n(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){u=t=a;try{if(r=u.stateNode,i)l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{s=u.stateNode;var g=u.memoizedProps.style,v=g!=null&&g.hasOwnProperty("display")?g.display:null;s.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(N){de(u,u.return,N)}}}else if(a.tag===6){if(t===null){u=a;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(N){de(u,u.return,N)}}}else if(a.tag===18){if(t===null){u=a;try{var b=u.stateNode;i?_m(b,!0):_m(u.stateNode,!1)}catch(N){de(u,u.return,N)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}n&4&&(n=e.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,wl(e,t))));break;case 19:ma(a,e),fa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wl(e,n)));break;case 30:break;case 21:break;default:ma(a,e),fa(e)}}function fa(e){var a=e.flags;if(a&2){try{for(var t,n=e.return;n!==null;){if(F4(n)){t=n;break}n=n.return}if(t==null)throw Error(q(160));switch(t.tag){case 27:var i=t.stateNode,r=Y0(e);bs(e,r,i);break;case 5:var l=t.stateNode;t.flags&32&&(Ai(l,""),t.flags&=-33);var s=Y0(e);bs(e,s,l);break;case 3:case 4:var u=t.stateNode.containerInfo,m=Y0(e);ic(e,m,u);break;default:throw Error(q(161))}}catch(p){de(e,e.return,p)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function tp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;tp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function yt(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)P4(e,a.alternate,a),a=a.sibling}function $n(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:gn(4,a,a.return),$n(a);break;case 1:st(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&X4(a,a.return,t),$n(a);break;case 27:Nr(a.stateNode);case 26:case 5:st(a,a.return),$n(a);break;case 22:a.memoizedState===null&&$n(a);break;case 30:$n(a);break;default:$n(a)}e=e.sibling}}function St(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var n=a.alternate,i=e,r=a,l=r.flags;switch(r.tag){case 0:case 11:case 15:St(i,r,t),tl(4,r);break;case 1:if(St(i,r,t),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(m){de(n,n.return,m)}if(n=r,i=n.updateQueue,i!==null){var s=n.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)Wf(u[i],s)}catch(m){de(n,n.return,m)}}t&&l&64&&V4(r),zr(r,r.return);break;case 27:K4(r);case 26:case 5:St(i,r,t),t&&n===null&&l&4&&Z4(r),zr(r,r.return);break;case 12:St(i,r,t);break;case 31:St(i,r,t),t&&l&4&&W4(i,r);break;case 13:St(i,r,t),t&&l&4&&ep(i,r);break;case 22:r.memoizedState===null&&St(i,r,t),zr(r,r.return);break;case 30:break;default:St(i,r,t)}a=a.sibling}}function Tu(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&el(t))}function Cu(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&el(e))}function Ja(e,a,t,n){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)np(e,a,t,n),a=a.sibling}function np(e,a,t,n){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ja(e,a,t,n),i&2048&&tl(9,a);break;case 1:Ja(e,a,t,n);break;case 3:Ja(e,a,t,n),i&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&el(e)));break;case 12:if(i&2048){Ja(e,a,t,n),e=a.stateNode;try{var r=a.memoizedProps,l=r.id,s=r.onPostCommit;typeof s=="function"&&s(l,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){de(a,a.return,u)}}else Ja(e,a,t,n);break;case 31:Ja(e,a,t,n);break;case 13:Ja(e,a,t,n);break;case 23:break;case 22:r=a.stateNode,l=a.alternate,a.memoizedState!==null?r._visibility&2?Ja(e,a,t,n):wr(e,a):r._visibility&2?Ja(e,a,t,n):(r._visibility|=2,ni(e,a,t,n,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Tu(l,a);break;case 24:Ja(e,a,t,n),i&2048&&Cu(a.alternate,a);break;default:Ja(e,a,t,n)}}function ni(e,a,t,n,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var r=e,l=a,s=t,u=n,m=l.flags;switch(l.tag){case 0:case 11:case 15:ni(r,l,s,u,i),tl(8,l);break;case 23:break;case 22:var p=l.stateNode;l.memoizedState!==null?p._visibility&2?ni(r,l,s,u,i):wr(r,l):(p._visibility|=2,ni(r,l,s,u,i)),i&&m&2048&&Tu(l.alternate,l);break;case 24:ni(r,l,s,u,i),i&&m&2048&&Cu(l.alternate,l);break;default:ni(r,l,s,u,i)}a=a.sibling}}function wr(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,n=a,i=n.flags;switch(n.tag){case 22:wr(t,n),i&2048&&Tu(n.alternate,n);break;case 24:wr(t,n),i&2048&&Cu(n.alternate,n);break;default:wr(t,n)}a=a.sibling}}var dr=8192;function ei(e,a,t){if(e.subtreeFlags&dr)for(e=e.child;e!==null;)ip(e,a,t),e=e.sibling}function ip(e,a,t){switch(e.tag){case 26:ei(e,a,t),e.flags&dr&&e.memoizedState!==null&&F3(t,Wa,e.memoizedState,e.memoizedProps);break;case 5:ei(e,a,t);break;case 3:case 4:var n=Wa;Wa=Ns(e.stateNode.containerInfo),ei(e,a,t),Wa=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=dr,dr=16777216,ei(e,a,t),dr=n):ei(e,a,t));break;default:ei(e,a,t)}}function rp(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function ir(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ze=n,sp(n,e)}rp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lp(e),e=e.sibling}function lp(e){switch(e.tag){case 0:case 11:case 15:ir(e),e.flags&2048&&gn(9,e,e.return);break;case 3:ir(e);break;case 12:ir(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Kl(e)):ir(e);break;default:ir(e)}}function Kl(e){var a=e.deletions;if(e.flags&16){if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];Ze=n,sp(n,e)}rp(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:gn(8,a,a.return),Kl(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Kl(a));break;default:Kl(a)}e=e.sibling}}function sp(e,a){for(;Ze!==null;){var t=Ze;switch(t.tag){case 0:case 11:case 15:gn(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:el(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Ze=n;else e:for(t=e;Ze!==null;){n=Ze;var i=n.sibling,r=n.return;if(J4(n),n===t){Ze=null;break e}if(i!==null){i.return=r,Ze=i;break e}Ze=r}}}var c3={getCacheForType:function(e){var a=ea(Re),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return ea(Re).controller.signal}},u3=typeof WeakMap=="function"?WeakMap:Map,ie=0,he=null,ae=null,te=0,ue=0,za=null,an=!1,Vi=!1,Du=!1,Ot=0,$e=0,bn=0,Un=0,$u=0,Ea=0,Ci=0,jr=null,ha=null,rc=!1,Ps=0,op=0,ys=1/0,xs=null,un=null,Ye=0,dn=null,Di=null,Tt=0,lc=0,sc=null,cp=null,Er=0,oc=null;function Ma(){return ie&2&&te!==0?te&-te:X.T!==null?_u():bf()}function up(){if(Ea===0)if(!(te&536870912)||ne){var e=hl;hl<<=1,!(hl&3932160)&&(hl=262144),Ea=e}else Ea=536870912;return e=Da.current,e!==null&&(e.flags|=32),Ea}function ba(e,a,t){(e===he&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&($i(e,0),tn(e,te,Ea,!1)),Jr(e,t),(!(ie&2)||e!==he)&&(e===he&&(!(ie&2)&&(Un|=t),$e===4&&tn(e,te,Ea,!1)),dt(e))}function dp(e,a,t){if(ie&6)throw Error(q(327));var n=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Pr(e,a),i=n?f3(e,a):X0(e,a,!0),r=n;do{if(i===0){Vi&&!n&&tn(e,a,0,!1);break}else{if(t=e.current.alternate,r&&!d3(t)){i=X0(e,a,!1),r=!1;continue}if(i===2){if(r=a,e.errorRecoveryDisabledLanes&r)var l=0;else l=e.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){a=l;e:{var s=e;i=jr;var u=s.current.memoizedState.isDehydrated;if(u&&($i(s,l).flags|=256),l=X0(s,l,!1),l!==2){if(Du&&!u){s.errorRecoveryDisabledLanes|=r,Un|=r,i=4;break e}r=ha,ha=i,r!==null&&(ha===null?ha=r:ha.push.apply(ha,r))}i=l}if(r=!1,i!==2)continue}}if(i===1){$i(e,0),tn(e,a,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(q(345));case 4:if((a&4194048)!==a)break;case 6:tn(n,a,Ea,!an);break e;case 2:ha=null;break;case 3:case 5:break;default:throw Error(q(329))}if((a&62914560)===a&&(i=Ps+300-Na(),10<i)){if(tn(n,a,Ea,!an),Us(n,0,!0)!==0)break e;Tt=a,n.timeoutHandle=Cp(zm.bind(null,n,t,ha,xs,rc,a,Ea,Un,Ci,an,r,"Throttled",-0,0),i);break e}zm(n,t,ha,xs,rc,a,Ea,Un,Ci,an,r,null,-0,0)}}break}while(!0);dt(e)}function zm(e,a,t,n,i,r,l,s,u,m,p,g,v,b){if(e.timeoutHandle=-1,g=a.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Nt},ip(a,r,g);var N=(r&62914560)===r?Ps-Na():(r&4194048)===r?op-Na():0;if(N=K3(g,N),N!==null){Tt=r,e.cancelPendingCommit=N(jm.bind(null,e,a,r,t,n,i,l,s,u,p,g,null,v,b)),tn(e,r,l,!m);return}}jm(e,a,r,t,n,i,l,s,u)}function d3(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var i=t[n],r=i.getSnapshot;i=i.value;try{if(!Ca(r(),i))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function tn(e,a,t,n){a&=~$u,a&=~Un,e.suspendedLanes|=a,e.pingedLanes&=~a,n&&(e.warmLanes|=a),n=e.expirationTimes;for(var i=a;0<i;){var r=31-qa(i),l=1<<r;n[r]=-1,i&=~l}t!==0&&hf(e,t,a)}function Js(){return ie&6?!0:(nl(0),!1)}function ku(){if(ae!==null){if(ue===0)var e=ae.return;else e=ae,At=Kn=null,yu(e),Si=null,_r=0,e=ae;for(;e!==null;)Y4(e.alternate,e),e=e.return;ae=null}}function $i(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,C3(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Tt=0,ku(),he=e,ae=t=qt(e.current,null),te=a,ue=0,za=null,an=!1,Vi=Pr(e,a),Du=!1,Ci=Ea=$u=Un=bn=$e=0,ha=jr=null,rc=!1,a&8&&(a|=a&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=a;0<n;){var i=31-qa(n),r=1<<i;a|=e[i],n&=~r}return Ot=a,Qs(),t}function mp(e,a){J=null,X.H=Br,a===Yi||a===Vs?(a=em(),ue=3):a===mu?(a=em(),ue=4):ue=a===qu?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,za=a,ae===null&&($e=1,vs(e,Qa(a,e.current)))}function fp(){var e=Da.current;return e===null?!0:(te&4194048)===te?Xa===null:(te&62914560)===te||te&536870912?e===Xa:!1}function pp(){var e=X.H;return X.H=Br,e===null?Br:e}function hp(){var e=X.A;return X.A=c3,e}function Ss(){$e=4,an||(te&4194048)!==te&&Da.current!==null||(Vi=!0),!(bn&134217727)&&!(Un&134217727)||he===null||tn(he,te,Ea,!1)}function X0(e,a,t){var n=ie;ie|=2;var i=pp(),r=hp();(he!==e||te!==a)&&(xs=null,$i(e,a)),a=!1;var l=$e;e:do try{if(ue!==0&&ae!==null){var s=ae,u=za;switch(ue){case 8:ku(),l=6;break e;case 3:case 2:case 9:case 6:Da.current===null&&(a=!0);var m=ue;if(ue=0,za=null,vi(e,s,u,m),t&&Vi){l=0;break e}break;default:m=ue,ue=0,za=null,vi(e,s,u,m)}}m3(),l=$e;break}catch(p){mp(e,p)}while(!0);return a&&e.shellSuspendCounter++,At=Kn=null,ie=n,X.H=i,X.A=r,ae===null&&(he=null,te=0,Qs()),l}function m3(){for(;ae!==null;)vp(ae)}function f3(e,a){var t=ie;ie|=2;var n=pp(),i=hp();he!==e||te!==a?(xs=null,ys=Na()+500,$i(e,a)):Vi=Pr(e,a);e:do try{if(ue!==0&&ae!==null){a=ae;var r=za;a:switch(ue){case 1:ue=0,za=null,vi(e,a,r,1);break;case 2:case 9:if(Wd(r)){ue=0,za=null,wm(a);break}a=function(){ue!==2&&ue!==9||he!==e||(ue=7),dt(e)},r.then(a,a);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:Wd(r)?(ue=0,za=null,wm(a)):(ue=0,za=null,vi(e,a,r,7));break;case 5:var l=null;switch(ae.tag){case 26:l=ae.memoizedState;case 5:case 27:var s=ae;if(l?Op(l):s.stateNode.complete){ue=0,za=null;var u=s.sibling;if(u!==null)ae=u;else{var m=s.return;m!==null?(ae=m,Is(m)):ae=null}break a}}ue=0,za=null,vi(e,a,r,5);break;case 6:ue=0,za=null,vi(e,a,r,6);break;case 8:ku(),$e=6;break e;default:throw Error(q(462))}}p3();break}catch(p){mp(e,p)}while(!0);return At=Kn=null,X.H=n,X.A=i,ie=t,ae!==null?0:(he=null,te=0,Qs(),$e)}function p3(){for(;ae!==null&&!Bh();)vp(ae)}function vp(e){var a=Q4(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,a===null?Is(e):ae=a}function wm(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=vm(t,a,a.pendingProps,a.type,void 0,te);break;case 11:a=vm(t,a,a.pendingProps,a.type.render,a.ref,te);break;case 5:yu(a);default:Y4(t,a),a=ae=Yf(a,Ot),a=Q4(t,a,Ot)}e.memoizedProps=e.pendingProps,a===null?Is(e):ae=a}function vi(e,a,t,n){At=Kn=null,yu(a),Si=null,_r=0;var i=a.return;try{if(t3(e,i,a,t,te)){$e=1,vs(e,Qa(t,e.current)),ae=null;return}}catch(r){if(i!==null)throw ae=i,r;$e=1,vs(e,Qa(t,e.current)),ae=null;return}a.flags&32768?(ne||n===1?e=!0:Vi||te&536870912?e=!1:(an=e=!0,(n===2||n===9||n===3||n===6)&&(n=Da.current,n!==null&&n.tag===13&&(n.flags|=16384))),gp(a,e)):Is(a)}function Is(e){var a=e;do{if(a.flags&32768){gp(a,an);return}e=a.return;var t=r3(a.alternate,a,Ot);if(t!==null){ae=t;return}if(a=a.sibling,a!==null){ae=a;return}ae=a=e}while(a!==null);$e===0&&($e=5)}function gp(e,a){do{var t=l3(e.alternate,e);if(t!==null){t.flags&=32767,ae=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){ae=e;return}ae=e=t}while(e!==null);$e=6,ae=null}function jm(e,a,t,n,i,r,l,s,u){e.cancelPendingCommit=null;do Ws();while(Ye!==0);if(ie&6)throw Error(q(327));if(a!==null){if(a===e.current)throw Error(q(177));if(r=a.lanes|a.childLanes,r|=ru,Zh(e,t,r,l,s,u),e===he&&(ae=he=null,te=0),Di=a,dn=e,Tt=t,lc=r,sc=i,cp=n,a.subtreeFlags&10256||a.flags&10256?(e.callbackNode=null,e.callbackPriority=0,b3(rs,function(){return zp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(a.flags&13878)!==0,a.subtreeFlags&13878||n){n=X.T,X.T=null,i=le.p,le.p=2,l=ie,ie|=4;try{s3(e,a,t)}finally{ie=l,le.p=i,X.T=n}}Ye=1,bp(),yp(),xp()}}function bp(){if(Ye===1){Ye=0;var e=dn,a=Di,t=(a.flags&13878)!==0;if(a.subtreeFlags&13878||t){t=X.T,X.T=null;var n=le.p;le.p=2;var i=ie;ie|=4;try{ap(a,e);var r=mc,l=Of(e.containerInfo),s=r.focusedElem,u=r.selectionRange;if(l!==s&&s&&s.ownerDocument&&_f(s.ownerDocument.documentElement,s)){if(u!==null&&iu(s)){var m=u.start,p=u.end;if(p===void 0&&(p=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(p,s.value.length);else{var g=s.ownerDocument||document,v=g&&g.defaultView||window;if(v.getSelection){var b=v.getSelection(),N=s.textContent.length,A=Math.min(u.start,N),M=u.end===void 0?A:Math.min(u.end,N);!b.extend&&A>M&&(l=M,M=A,A=l);var x=Xd(s,A),y=Xd(s,M);if(x&&y&&(b.rangeCount!==1||b.anchorNode!==x.node||b.anchorOffset!==x.offset||b.focusNode!==y.node||b.focusOffset!==y.offset)){var w=g.createRange();w.setStart(x.node,x.offset),b.removeAllRanges(),A>M?(b.addRange(w),b.extend(y.node,y.offset)):(w.setEnd(y.node,y.offset),b.addRange(w))}}}}for(g=[],b=s;b=b.parentNode;)b.nodeType===1&&g.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<g.length;s++){var E=g[s];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}Ms=!!dc,mc=dc=null}finally{ie=i,le.p=n,X.T=t}}e.current=a,Ye=2}}function yp(){if(Ye===2){Ye=0;var e=dn,a=Di,t=(a.flags&8772)!==0;if(a.subtreeFlags&8772||t){t=X.T,X.T=null;var n=le.p;le.p=2;var i=ie;ie|=4;try{P4(e,a.alternate,a)}finally{ie=i,le.p=n,X.T=t}}Ye=3}}function xp(){if(Ye===4||Ye===3){Ye=0,Rh();var e=dn,a=Di,t=Tt,n=cp;a.subtreeFlags&10256||a.flags&10256?Ye=5:(Ye=0,Di=dn=null,Sp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(un=null),Jc(t),a=a.stateNode,Aa&&typeof Aa.onCommitFiberRoot=="function")try{Aa.onCommitFiberRoot(Kr,a,void 0,(a.current.flags&128)===128)}catch{}if(n!==null){a=X.T,i=le.p,le.p=2,X.T=null;try{for(var r=e.onRecoverableError,l=0;l<n.length;l++){var s=n[l];r(s.value,{componentStack:s.stack})}}finally{X.T=a,le.p=i}}Tt&3&&Ws(),dt(e),i=e.pendingLanes,t&261930&&i&42?e===oc?Er++:(Er=0,oc=e):Er=0,nl(0)}}function Sp(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,el(a)))}function Ws(){return bp(),yp(),xp(),zp()}function zp(){if(Ye!==5)return!1;var e=dn,a=lc;lc=0;var t=Jc(Tt),n=X.T,i=le.p;try{le.p=32>t?32:t,X.T=null,t=sc,sc=null;var r=dn,l=Tt;if(Ye=0,Di=dn=null,Tt=0,ie&6)throw Error(q(331));var s=ie;if(ie|=4,lp(r.current),np(r,r.current,l,t),ie=s,nl(0,!1),Aa&&typeof Aa.onPostCommitFiberRoot=="function")try{Aa.onPostCommitFiberRoot(Kr,r)}catch{}return!0}finally{le.p=i,X.T=n,Sp(e,a)}}function Em(e,a,t){a=Qa(t,a),a=ac(e.stateNode,a,2),e=cn(e,a,2),e!==null&&(Jr(e,2),dt(e))}function de(e,a,t){if(e.tag===3)Em(e,e,t);else for(;a!==null;){if(a.tag===3){Em(a,e,t);break}else if(a.tag===1){var n=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(un===null||!un.has(n))){e=Qa(t,e),t=B4(2),n=cn(a,t,2),n!==null&&(R4(t,n,a,e),Jr(n,2),dt(n));break}}a=a.return}}function Z0(e,a,t){var n=e.pingCache;if(n===null){n=e.pingCache=new u3;var i=new Set;n.set(a,i)}else i=n.get(a),i===void 0&&(i=new Set,n.set(a,i));i.has(t)||(Du=!0,i.add(t),e=h3.bind(null,e,a,t),a.then(e,e))}function h3(e,a,t){var n=e.pingCache;n!==null&&n.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,he===e&&(te&t)===t&&($e===4||$e===3&&(te&62914560)===te&&300>Na()-Ps?!(ie&2)&&$i(e,0):$u|=t,Ci===te&&(Ci=0)),dt(e)}function wp(e,a){a===0&&(a=pf()),e=Fn(e,a),e!==null&&(Jr(e,a),dt(e))}function v3(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),wp(e,t)}function g3(e,a){var t=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(q(314))}n!==null&&n.delete(a),wp(e,t)}function b3(e,a){return Kc(e,a)}var zs=null,ii=null,cc=!1,ws=!1,F0=!1,nn=0;function dt(e){e!==ii&&e.next===null&&(ii===null?zs=ii=e:ii=ii.next=e),ws=!0,cc||(cc=!0,x3())}function nl(e,a){if(!F0&&ws){F0=!0;do for(var t=!1,n=zs;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var l=n.suspendedLanes,s=n.pingedLanes;r=(1<<31-qa(42|e)+1)-1,r&=i&~(l&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(t=!0,Nm(n,r))}else r=te,r=Us(n,n===he?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(r&3)||Pr(n,r)||(t=!0,Nm(n,r));n=n.next}while(t);F0=!1}}function y3(){jp()}function jp(){ws=cc=!1;var e=0;nn!==0&&T3()&&(e=nn);for(var a=Na(),t=null,n=zs;n!==null;){var i=n.next,r=Ep(n,a);r===0?(n.next=null,t===null?zs=i:t.next=i,i===null&&(ii=t)):(t=n,(e!==0||r&3)&&(ws=!0)),n=i}Ye!==0&&Ye!==5||nl(e),nn!==0&&(nn=0)}function Ep(e,a){for(var t=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var l=31-qa(r),s=1<<l,u=i[l];u===-1?(!(s&t)||s&n)&&(i[l]=Xh(s,a)):u<=a&&(e.expiredLanes|=s),r&=~s}if(a=he,t=te,t=Us(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,t===0||e===a&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&z0(n),e.callbackNode=null,e.callbackPriority=0;if(!(t&3)||Pr(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(n!==null&&z0(n),Jc(t)){case 2:case 8:t=mf;break;case 32:t=rs;break;case 268435456:t=ff;break;default:t=rs}return n=Np.bind(null,e),t=Kc(t,n),e.callbackPriority=a,e.callbackNode=t,a}return n!==null&&n!==null&&z0(n),e.callbackPriority=2,e.callbackNode=null,2}function Np(e,a){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ws()&&e.callbackNode!==t)return null;var n=te;return n=Us(e,e===he?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(dp(e,n,a),Ep(e,Na()),e.callbackNode!=null&&e.callbackNode===t?Np.bind(null,e):null)}function Nm(e,a){if(Ws())return null;dp(e,a,!0)}function x3(){D3(function(){ie&6?Kc(df,y3):jp()})}function _u(){if(nn===0){var e=qi;e===0&&(e=pl,pl<<=1,!(pl&261888)&&(pl=256)),nn=e}return nn}function Am(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(""+e)}function qm(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function S3(e,a,t,n,i){if(a==="submit"&&t&&t.stateNode===i){var r=Am((i[ya]||null).action),l=n.submitter;l&&(a=(a=l[ya]||null)?Am(a.formAction):l.getAttribute("formAction"),a!==null&&(r=a,l=null));var s=new Ls("action","action",null,n,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(nn!==0){var u=l?qm(i,l):new FormData(i);Wo(t,{pending:!0,data:u,method:i.method,action:r},null,u)}}else typeof r=="function"&&(s.preventDefault(),u=l?qm(i,l):new FormData(i),Wo(t,{pending:!0,data:u,method:i.method,action:r},r,u))},currentTarget:i}]})}}for(var K0=0;K0<Ho.length;K0++){var P0=Ho[K0],z3=P0.toLowerCase(),w3=P0[0].toUpperCase()+P0.slice(1);at(z3,"on"+w3)}at(Rf,"onAnimationEnd");at(Uf,"onAnimationIteration");at(Lf,"onAnimationStart");at("dblclick","onDoubleClick");at("focusin","onFocus");at("focusout","onBlur");at(U5,"onTransitionRun");at(L5,"onTransitionStart");at(H5,"onTransitionCancel");at(Hf,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j3=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rr));function Ap(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],i=n.event;n=n.listeners;e:{var r=void 0;if(a)for(var l=n.length-1;0<=l;l--){var s=n[l],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==r&&i.isPropagationStopped())break e;r=s,i.currentTarget=m;try{r(i)}catch(p){ss(p)}i.currentTarget=null,r=u}else for(l=0;l<n.length;l++){if(s=n[l],u=s.instance,m=s.currentTarget,s=s.listener,u!==r&&i.isPropagationStopped())break e;r=s,i.currentTarget=m;try{r(i)}catch(p){ss(p)}i.currentTarget=null,r=u}}}}function ee(e,a){var t=a[$o];t===void 0&&(t=a[$o]=new Set);var n=e+"__bubble";t.has(n)||(qp(a,e,2,!1),t.add(n))}function J0(e,a,t){var n=0;a&&(n|=4),qp(t,e,n,a)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Ou(e){if(!e[jl]){e[jl]=!0,yf.forEach(function(t){t!=="selectionchange"&&(j3.has(t)||J0(t,!1,e),J0(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[jl]||(a[jl]=!0,J0("selectionchange",!1,a))}}function qp(e,a,t,n){switch(Hp(a)){case 2:var i=I3;break;case 8:i=W3;break;default:i=Lu}t=i.bind(null,a,t,e),i=void 0,!Ro||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(a,t,{capture:!0,passive:i}):e.addEventListener(a,t,!0):i!==void 0?e.addEventListener(a,t,{passive:i}):e.addEventListener(a,t,!1)}function I0(e,a,t,n,i){var r=n;if(!(a&1)&&!(a&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===i)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&l.stateNode.containerInfo===i)return;l=l.return}for(;s!==null;){if(l=si(s),l===null)return;if(u=l.tag,u===5||u===6||u===26||u===27){n=r=l;continue e}s=s.parentNode}}n=n.return}Af(function(){var m=r,p=eu(t),g=[];e:{var v=Gf.get(e);if(v!==void 0){var b=Ls,N=e;switch(e){case"keypress":if(Gl(t)===0)break e;case"keydown":case"keyup":b=g5;break;case"focusin":N="focus",b=A0;break;case"focusout":N="blur",b=A0;break;case"beforeblur":case"afterblur":b=A0;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=r5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=x5;break;case Rf:case Uf:case Lf:b=o5;break;case Hf:b=z5;break;case"scroll":case"scrollend":b=n5;break;case"wheel":b=j5;break;case"copy":case"cut":case"paste":b=u5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Rd;break;case"toggle":case"beforetoggle":b=N5}var A=(a&4)!==0,M=!A&&(e==="scroll"||e==="scrollend"),x=A?v!==null?v+"Capture":null:v;A=[];for(var y=m,w;y!==null;){var E=y;if(w=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||w===null||x===null||(E=Tr(y,x),E!=null&&A.push(Ur(y,E,w))),M)break;y=y.return}0<A.length&&(v=new b(v,N,null,t,p),g.push({event:v,listeners:A}))}}if(!(a&7)){e:{if(v=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",v&&t!==Bo&&(N=t.relatedTarget||t.fromElement)&&(si(N)||N[Hi]))break e;if((b||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,b?(N=t.relatedTarget||t.toElement,b=m,N=N?si(N):null,N!==null&&(M=Fr(N),A=N.tag,N!==M||A!==5&&A!==27&&A!==6)&&(N=null)):(b=null,N=m),b!==N)){if(A=Od,E="onMouseLeave",x="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(A=Rd,E="onPointerLeave",x="onPointerEnter",y="pointer"),M=b==null?v:cr(b),w=N==null?v:cr(N),v=new A(E,y+"leave",b,t,p),v.target=M,v.relatedTarget=w,E=null,si(p)===m&&(A=new A(x,y+"enter",N,t,p),A.target=w,A.relatedTarget=M,E=A),M=E,b&&N)a:{for(A=E3,x=b,y=N,w=0,E=x;E;E=A(E))w++;E=0;for(var $=y;$;$=A($))E++;for(;0<w-E;)x=A(x),w--;for(;0<E-w;)y=A(y),E--;for(;w--;){if(x===y||y!==null&&x===y.alternate){A=x;break a}x=A(x),y=A(y)}A=null}else A=null;b!==null&&Mm(g,v,b,A,!1),N!==null&&M!==null&&Mm(g,M,N,A,!0)}}e:{if(v=m?cr(m):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var B=Gd;else if(Hd(v))if($f)B=O5;else{B=k5;var C=$5}else b=v.nodeName,!b||b.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?m&&Wc(m.elementType)&&(B=Gd):B=_5;if(B&&(B=B(e,m))){Df(g,B,t,p);break e}C&&C(e,v,m),e==="focusout"&&m&&v.type==="number"&&m.memoizedProps.value!=null&&Oo(v,"number",v.value)}switch(C=m?cr(m):window,e){case"focusin":(Hd(C)||C.contentEditable==="true")&&(ui=C,Uo=m,vr=null);break;case"focusout":vr=Uo=ui=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,Zd(g,t,p);break;case"selectionchange":if(R5)break;case"keydown":case"keyup":Zd(g,t,p)}var U;if(nu)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ci?Tf(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Mf&&t.locale!=="ko"&&(ci||L!=="onCompositionStart"?L==="onCompositionEnd"&&ci&&(U=qf()):(en=p,au="value"in en?en.value:en.textContent,ci=!0)),C=js(m,L),0<C.length&&(L=new Bd(L,e,null,t,p),g.push({event:L,listeners:C}),U?L.data=U:(U=Cf(t),U!==null&&(L.data=U)))),(U=q5?M5(e,t):T5(e,t))&&(L=js(m,"onBeforeInput"),0<L.length&&(C=new Bd("onBeforeInput","beforeinput",null,t,p),g.push({event:C,listeners:L}),C.data=U)),S3(g,e,m,t,p)}Ap(g,a)})}function Ur(e,a,t){return{instance:e,listener:a,currentTarget:t}}function js(e,a){for(var t=a+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=Tr(e,t),i!=null&&n.unshift(Ur(e,i,r)),i=Tr(e,a),i!=null&&n.push(Ur(e,i,r))),e.tag===3)return n;e=e.return}return[]}function E3(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mm(e,a,t,n,i){for(var r=a._reactName,l=[];t!==null&&t!==n;){var s=t,u=s.alternate,m=s.stateNode;if(s=s.tag,u!==null&&u===n)break;s!==5&&s!==26&&s!==27||m===null||(u=m,i?(m=Tr(t,r),m!=null&&l.unshift(Ur(t,m,u))):i||(m=Tr(t,r),m!=null&&l.push(Ur(t,m,u)))),t=t.return}l.length!==0&&e.push({event:a,listeners:l})}var N3=/\r\n?/g,A3=/\u0000|\uFFFD/g;function Tm(e){return(typeof e=="string"?e:""+e).replace(N3,`
`).replace(A3,"")}function Mp(e,a){return a=Tm(a),Tm(e)===a}function me(e,a,t,n,i,r){switch(t){case"children":typeof n=="string"?a==="body"||a==="textarea"&&n===""||Ai(e,n):(typeof n=="number"||typeof n=="bigint")&&a!=="body"&&Ai(e,""+n);break;case"className":gl(e,"class",n);break;case"tabIndex":gl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(e,t,n);break;case"style":Nf(e,n,r);break;case"data":if(a!=="object"){gl(e,"data",n);break}case"src":case"href":if(n===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Ll(""+n),e.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(t==="formAction"?(a!=="input"&&me(e,a,"name",i.name,i,null),me(e,a,"formEncType",i.formEncType,i,null),me(e,a,"formMethod",i.formMethod,i,null),me(e,a,"formTarget",i.formTarget,i,null)):(me(e,a,"encType",i.encType,i,null),me(e,a,"method",i.method,i,null),me(e,a,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(t);break}n=Ll(""+n),e.setAttribute(t,n);break;case"onClick":n!=null&&(e.onclick=Nt);break;case"onScroll":n!=null&&ee("scroll",e);break;case"onScrollEnd":n!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(q(61));if(t=n.__html,t!=null){if(i.children!=null)throw Error(q(60));e.innerHTML=t}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}t=Ll(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""+n):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":n===!0?e.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(t,n):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(t,n):e.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(t):e.setAttribute(t,n);break;case"popover":ee("beforetoggle",e),ee("toggle",e),Ul(e,"popover",n);break;case"xlinkActuate":vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":vt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":vt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":vt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":vt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ul(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=a5.get(t)||t,Ul(e,t,n))}}function uc(e,a,t,n,i,r){switch(t){case"style":Nf(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(q(61));if(t=n.__html,t!=null){if(i.children!=null)throw Error(q(60));e.innerHTML=t}}break;case"children":typeof n=="string"?Ai(e,n):(typeof n=="number"||typeof n=="bigint")&&Ai(e,""+n);break;case"onScroll":n!=null&&ee("scroll",e);break;case"onScrollEnd":n!=null&&ee("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Nt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xf.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),a=t.slice(2,i?t.length-7:void 0),r=e[ya]||null,r=r!=null?r[t]:null,typeof r=="function"&&e.removeEventListener(a,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,n,i);break e}t in e?e[t]=n:n===!0?e.setAttribute(t,""):Ul(e,t,n)}}}function aa(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var n=!1,i=!1,r;for(r in t)if(t.hasOwnProperty(r)){var l=t[r];if(l!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(q(137,a));default:me(e,a,r,l,t,null)}}i&&me(e,a,"srcSet",t.srcSet,t,null),n&&me(e,a,"src",t.src,t,null);return;case"input":ee("invalid",e);var s=r=l=i=null,u=null,m=null;for(n in t)if(t.hasOwnProperty(n)){var p=t[n];if(p!=null)switch(n){case"name":i=p;break;case"type":l=p;break;case"checked":u=p;break;case"defaultChecked":m=p;break;case"value":r=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(q(137,a));break;default:me(e,a,n,p,t,null)}}wf(e,r,s,u,m,l,i,!1);return;case"select":ee("invalid",e),n=l=r=null;for(i in t)if(t.hasOwnProperty(i)&&(s=t[i],s!=null))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":n=s;default:me(e,a,i,s,t,null)}a=r,t=l,e.multiple=!!n,a!=null?bi(e,!!n,a,!1):t!=null&&bi(e,!!n,t,!0);return;case"textarea":ee("invalid",e),r=i=n=null;for(l in t)if(t.hasOwnProperty(l)&&(s=t[l],s!=null))switch(l){case"value":n=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(q(91));break;default:me(e,a,l,s,t,null)}Ef(e,n,i,r);return;case"option":for(u in t)if(t.hasOwnProperty(u)&&(n=t[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:me(e,a,u,n,t,null)}return;case"dialog":ee("beforetoggle",e),ee("toggle",e),ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(n=0;n<Rr.length;n++)ee(Rr[n],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in t)if(t.hasOwnProperty(m)&&(n=t[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(q(137,a));default:me(e,a,m,n,t,null)}return;default:if(Wc(a)){for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!==void 0&&uc(e,a,p,n,t,void 0));return}}for(s in t)t.hasOwnProperty(s)&&(n=t[s],n!=null&&me(e,a,s,n,t,null))}function q3(e,a,t,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,l=null,s=null,u=null,m=null,p=null;for(b in t){var g=t[b];if(t.hasOwnProperty(b)&&g!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":u=g;default:n.hasOwnProperty(b)||me(e,a,b,null,n,g)}}for(var v in n){var b=n[v];if(g=t[v],n.hasOwnProperty(v)&&(b!=null||g!=null))switch(v){case"type":r=b;break;case"name":i=b;break;case"checked":m=b;break;case"defaultChecked":p=b;break;case"value":l=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(q(137,a));break;default:b!==g&&me(e,a,v,b,n,g)}}_o(e,l,s,u,m,p,r,i);return;case"select":b=l=s=v=null;for(r in t)if(u=t[r],t.hasOwnProperty(r)&&u!=null)switch(r){case"value":break;case"multiple":b=u;default:n.hasOwnProperty(r)||me(e,a,r,null,n,u)}for(i in n)if(r=n[i],u=t[i],n.hasOwnProperty(i)&&(r!=null||u!=null))switch(i){case"value":v=r;break;case"defaultValue":s=r;break;case"multiple":l=r;default:r!==u&&me(e,a,i,r,n,u)}a=s,t=l,n=b,v!=null?bi(e,!!t,v,!1):!!n!=!!t&&(a!=null?bi(e,!!t,a,!0):bi(e,!!t,t?[]:"",!1));return;case"textarea":b=v=null;for(s in t)if(i=t[s],t.hasOwnProperty(s)&&i!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:me(e,a,s,null,n,i)}for(l in n)if(i=n[l],r=t[l],n.hasOwnProperty(l)&&(i!=null||r!=null))switch(l){case"value":v=i;break;case"defaultValue":b=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(q(91));break;default:i!==r&&me(e,a,l,i,n,r)}jf(e,v,b);return;case"option":for(var N in t)if(v=t[N],t.hasOwnProperty(N)&&v!=null&&!n.hasOwnProperty(N))switch(N){case"selected":e.selected=!1;break;default:me(e,a,N,null,n,v)}for(u in n)if(v=n[u],b=t[u],n.hasOwnProperty(u)&&v!==b&&(v!=null||b!=null))switch(u){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:me(e,a,u,v,n,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var A in t)v=t[A],t.hasOwnProperty(A)&&v!=null&&!n.hasOwnProperty(A)&&me(e,a,A,null,n,v);for(m in n)if(v=n[m],b=t[m],n.hasOwnProperty(m)&&v!==b&&(v!=null||b!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(q(137,a));break;default:me(e,a,m,v,n,b)}return;default:if(Wc(a)){for(var M in t)v=t[M],t.hasOwnProperty(M)&&v!==void 0&&!n.hasOwnProperty(M)&&uc(e,a,M,void 0,n,v);for(p in n)v=n[p],b=t[p],!n.hasOwnProperty(p)||v===b||v===void 0&&b===void 0||uc(e,a,p,v,n,b);return}}for(var x in t)v=t[x],t.hasOwnProperty(x)&&v!=null&&!n.hasOwnProperty(x)&&me(e,a,x,null,n,v);for(g in n)v=n[g],b=t[g],!n.hasOwnProperty(g)||v===b||v==null&&b==null||me(e,a,g,v,n,b)}function Cm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M3(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),n=0;n<t.length;n++){var i=t[n],r=i.transferSize,l=i.initiatorType,s=i.duration;if(r&&s&&Cm(l)){for(l=0,s=i.responseEnd,n+=1;n<t.length;n++){var u=t[n],m=u.startTime;if(m>s)break;var p=u.transferSize,g=u.initiatorType;p&&Cm(g)&&(u=u.responseEnd,l+=p*(u<s?1:(s-m)/(u-m)))}if(--n,a+=8*(r+l)/(i.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dc=null,mc=null;function Es(e){return e.nodeType===9?e:e.ownerDocument}function Dm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tp(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function fc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var W0=null;function T3(){var e=window.event;return e&&e.type==="popstate"?e===W0?!1:(W0=e,!0):(W0=null,!1)}var Cp=typeof setTimeout=="function"?setTimeout:void 0,C3=typeof clearTimeout=="function"?clearTimeout:void 0,$m=typeof Promise=="function"?Promise:void 0,D3=typeof queueMicrotask=="function"?queueMicrotask:typeof $m<"u"?function(e){return $m.resolve(null).then(e).catch($3)}:Cp;function $3(e){setTimeout(function(){throw e})}function jn(e){return e==="head"}function km(e,a){var t=a,n=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(n===0){e.removeChild(i),_i(a);return}n--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")n++;else if(t==="html")Nr(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Nr(t);for(var r=t.firstChild;r;){var l=r.nextSibling,s=r.nodeName;r[Ir]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||t.removeChild(r),r=l}}else t==="body"&&Nr(e.ownerDocument.body);t=i}while(t);_i(a)}function _m(e,a){var t=e;e=0;do{var n=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),n&&n.nodeType===8)if(t=n.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=n}while(t)}function pc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":pc(t),Ic(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function k3(e,a,t,n){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Ir])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Za(e.nextSibling),e===null)break}return null}function _3(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Za(e.nextSibling),e===null))return null;return e}function Dp(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Za(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$?"||e.data==="$~"}function vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function O3(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var n=function(){a(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Za(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var gc=null;function Om(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Za(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Bm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function $p(e,a,t){switch(a=Es(t),e){case"html":if(e=a.documentElement,!e)throw Error(q(452));return e;case"head":if(e=a.head,!e)throw Error(q(453));return e;case"body":if(e=a.body,!e)throw Error(q(454));return e;default:throw Error(q(451))}}function Nr(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Ic(e)}var Fa=new Map,Rm=new Set;function Ns(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ut=le.d;le.d={f:B3,r:R3,D:U3,C:L3,L:H3,m:G3,X:Y3,S:Q3,M:V3};function B3(){var e=Ut.f(),a=Js();return e||a}function R3(e){var a=Gi(e);a!==null&&a.tag===5&&a.type==="form"?N4(a):Ut.r(e)}var Xi=typeof document>"u"?null:document;function kp(e,a,t){var n=Xi;if(n&&typeof a=="string"&&a){var i=Ga(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Rm.has(i)||(Rm.add(i),e={rel:e,crossOrigin:t,href:a},n.querySelector(i)===null&&(a=n.createElement("link"),aa(a,"link",e),Fe(a),n.head.appendChild(a)))}}function U3(e){Ut.D(e),kp("dns-prefetch",e,null)}function L3(e,a){Ut.C(e,a),kp("preconnect",e,a)}function H3(e,a,t){Ut.L(e,a,t);var n=Xi;if(n&&e&&a){var i='link[rel="preload"][as="'+Ga(a)+'"]';a==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Ga(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Ga(t.imageSizes)+'"]')):i+='[href="'+Ga(e)+'"]';var r=i;switch(a){case"style":r=ki(e);break;case"script":r=Zi(e)}Fa.has(r)||(e=we({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Fa.set(r,e),n.querySelector(i)!==null||a==="style"&&n.querySelector(il(r))||a==="script"&&n.querySelector(rl(r))||(a=n.createElement("link"),aa(a,"link",e),Fe(a),n.head.appendChild(a)))}}function G3(e,a){Ut.m(e,a);var t=Xi;if(t&&e){var n=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+Ga(n)+'"][href="'+Ga(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Zi(e)}if(!Fa.has(r)&&(e=we({rel:"modulepreload",href:e},a),Fa.set(r,e),t.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(rl(r)))return}n=t.createElement("link"),aa(n,"link",e),Fe(n),t.head.appendChild(n)}}}function Q3(e,a,t){Ut.S(e,a,t);var n=Xi;if(n&&e){var i=gi(n).hoistableStyles,r=ki(e);a=a||"default";var l=i.get(r);if(!l){var s={loading:0,preload:null};if(l=n.querySelector(il(r)))s.loading=5;else{e=we({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Fa.get(r))&&Bu(e,t);var u=l=n.createElement("link");Fe(u),aa(u,"link",e),u._p=new Promise(function(m,p){u.onload=m,u.onerror=p}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Pl(l,a,n)}l={type:"stylesheet",instance:l,count:1,state:s},i.set(r,l)}}}function Y3(e,a){Ut.X(e,a);var t=Xi;if(t&&e){var n=gi(t).hoistableScripts,i=Zi(e),r=n.get(i);r||(r=t.querySelector(rl(i)),r||(e=we({src:e,async:!0},a),(a=Fa.get(i))&&Ru(e,a),r=t.createElement("script"),Fe(r),aa(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function V3(e,a){Ut.M(e,a);var t=Xi;if(t&&e){var n=gi(t).hoistableScripts,i=Zi(e),r=n.get(i);r||(r=t.querySelector(rl(i)),r||(e=we({src:e,async:!0,type:"module"},a),(a=Fa.get(i))&&Ru(e,a),r=t.createElement("script"),Fe(r),aa(r,"link",e),t.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function Um(e,a,t,n){var i=(i=ln.current)?Ns(i):null;if(!i)throw Error(q(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=ki(t.href),t=gi(i).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ki(t.href);var r=gi(i).hoistableStyles,l=r.get(e);if(l||(i=i.ownerDocument||i,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,l),(r=i.querySelector(il(e)))&&!r._p&&(l.instance=r,l.state.loading=5),Fa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Fa.set(e,t),r||X3(i,e,t,l.state))),a&&n===null)throw Error(q(528,""));return l}if(a&&n!==null)throw Error(q(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Zi(t),t=gi(i).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(q(444,e))}}function ki(e){return'href="'+Ga(e)+'"'}function il(e){return'link[rel="stylesheet"]['+e+"]"}function _p(e){return we({},e,{"data-precedence":e.precedence,precedence:null})}function X3(e,a,t,n){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?n.loading=1:(a=e.createElement("link"),n.preload=a,a.addEventListener("load",function(){return n.loading|=1}),a.addEventListener("error",function(){return n.loading|=2}),aa(a,"link",t),Fe(a),e.head.appendChild(a))}function Zi(e){return'[src="'+Ga(e)+'"]'}function rl(e){return"script[async]"+e}function Lm(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var n=e.querySelector('style[data-href~="'+Ga(t.href)+'"]');if(n)return a.instance=n,Fe(n),n;var i=we({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Fe(n),aa(n,"style",i),Pl(n,t.precedence,e),a.instance=n;case"stylesheet":i=ki(t.href);var r=e.querySelector(il(i));if(r)return a.state.loading|=4,a.instance=r,Fe(r),r;n=_p(t),(i=Fa.get(i))&&Bu(n,i),r=(e.ownerDocument||e).createElement("link"),Fe(r);var l=r;return l._p=new Promise(function(s,u){l.onload=s,l.onerror=u}),aa(r,"link",n),a.state.loading|=4,Pl(r,t.precedence,e),a.instance=r;case"script":return r=Zi(t.src),(i=e.querySelector(rl(r)))?(a.instance=i,Fe(i),i):(n=t,(i=Fa.get(r))&&(n=we({},t),Ru(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Fe(i),aa(i,"link",n),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(q(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(n=a.instance,a.state.loading|=4,Pl(n,t.precedence,e));return a.instance}function Pl(e,a,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,l=0;l<n.length;l++){var s=n[l];if(s.dataset.precedence===a)r=s;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Bu(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Ru(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Jl=null;function Hm(e,a,t){if(Jl===null){var n=new Map,i=Jl=new Map;i.set(t,n)}else i=Jl,n=i.get(t),n||(n=new Map,i.set(t,n));if(n.has(e))return n;for(n.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var r=t[i];if(!(r[Ir]||r[Ie]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var l=r.getAttribute(a)||"";l=e+l;var s=n.get(l);s?s.push(r):n.set(l,[r])}}return n}function Gm(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Z3(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Op(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function F3(e,a,t,n){if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var i=ki(n.href),r=a.querySelector(il(i));if(r){a=r._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=As.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=r,Fe(r);return}r=a.ownerDocument||a,n=_p(n),(i=Fa.get(i))&&Bu(n,i),r=r.createElement("link"),Fe(r);var l=r;l._p=new Promise(function(s,u){l.onload=s,l.onerror=u}),aa(r,"link",n),t.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&!(t.state.loading&3)&&(e.count++,t=As.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var eo=0;function K3(e,a){return e.stylesheets&&e.count===0&&Il(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var n=setTimeout(function(){if(e.stylesheets&&Il(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+a);0<e.imgBytes&&eo===0&&(eo=62500*M3());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Il(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>eo?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function As(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Il(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qs=null;function Il(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qs=new Map,a.forEach(P3,e),qs=null,As.call(e))}function P3(e,a){if(!(a.state.loading&4)){var t=qs.get(e);if(t)var n=t.get(null);else{t=new Map,qs.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var l=i[r];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(t.set(l.dataset.precedence,l),n=l)}n&&t.set(null,n)}i=a.instance,l=i.getAttribute("data-precedence"),r=t.get(l)||n,r===n&&t.set(null,i),t.set(l,i),this.count++,n=As.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var Lr={$$typeof:Et,Provider:null,Consumer:null,_currentValue:_n,_currentValue2:_n,_threadCount:0};function J3(e,a,t,n,i,r,l,s,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=w0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=w0(0),this.hiddenUpdates=w0(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Bp(e,a,t,n,i,r,l,s,u,m,p,g){return e=new J3(e,a,t,l,u,m,p,g,s),a=1,r===!0&&(a|=24),r=ja(3,null,null,a),e.current=r,r.stateNode=e,a=uu(),a.refCount++,e.pooledCache=a,a.refCount++,r.memoizedState={element:n,isDehydrated:t,cache:a},fu(r),e}function Rp(e){return e?(e=fi,e):fi}function Up(e,a,t,n,i,r){i=Rp(i),n.context===null?n.context=i:n.pendingContext=i,n=on(a),n.payload={element:t},r=r===void 0?null:r,r!==null&&(n.callback=r),t=cn(e,n,a),t!==null&&(ba(t,e,a),br(t,e,a))}function Qm(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Uu(e,a){Qm(e,a),(e=e.alternate)&&Qm(e,a)}function Lp(e){if(e.tag===13||e.tag===31){var a=Fn(e,67108864);a!==null&&ba(a,e,67108864),Uu(e,67108864)}}function Ym(e){if(e.tag===13||e.tag===31){var a=Ma();a=Pc(a);var t=Fn(e,a);t!==null&&ba(t,e,a),Uu(e,a)}}var Ms=!0;function I3(e,a,t,n){var i=X.T;X.T=null;var r=le.p;try{le.p=2,Lu(e,a,t,n)}finally{le.p=r,X.T=i}}function W3(e,a,t,n){var i=X.T;X.T=null;var r=le.p;try{le.p=8,Lu(e,a,t,n)}finally{le.p=r,X.T=i}}function Lu(e,a,t,n){if(Ms){var i=bc(n);if(i===null)I0(e,a,n,Ts,t),Vm(e,n);else if(a6(i,e,a,t,n))n.stopPropagation();else if(Vm(e,n),a&4&&-1<e6.indexOf(e)){for(;i!==null;){var r=Gi(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var l=Cn(r.pendingLanes);if(l!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;l;){var u=1<<31-qa(l);s.entanglements[1]|=u,l&=~u}dt(r),!(ie&6)&&(ys=Na()+500,nl(0))}}break;case 31:case 13:s=Fn(r,2),s!==null&&ba(s,r,2),Js(),Uu(r,2)}if(r=bc(n),r===null&&I0(e,a,n,Ts,t),r===i)break;i=r}i!==null&&n.stopPropagation()}else I0(e,a,n,null,t)}}function bc(e){return e=eu(e),Hu(e)}var Ts=null;function Hu(e){if(Ts=null,e=si(e),e!==null){var a=Fr(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=lf(a),e!==null)return e;e=null}else if(t===31){if(e=sf(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Ts=e,null}function Hp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Uh()){case df:return 2;case mf:return 8;case rs:case Lh:return 32;case ff:return 268435456;default:return 32}default:return 32}}var yc=!1,mn=null,fn=null,pn=null,Hr=new Map,Gr=new Map,It=[],e6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vm(e,a){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":Hr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(a.pointerId)}}function rr(e,a,t,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:a,domEventName:t,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},a!==null&&(a=Gi(a),a!==null&&Lp(a)),e):(e.eventSystemFlags|=n,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function a6(e,a,t,n,i){switch(a){case"focusin":return mn=rr(mn,e,a,t,n,i),!0;case"dragenter":return fn=rr(fn,e,a,t,n,i),!0;case"mouseover":return pn=rr(pn,e,a,t,n,i),!0;case"pointerover":var r=i.pointerId;return Hr.set(r,rr(Hr.get(r)||null,e,a,t,n,i)),!0;case"gotpointercapture":return r=i.pointerId,Gr.set(r,rr(Gr.get(r)||null,e,a,t,n,i)),!0}return!1}function Gp(e){var a=si(e.target);if(a!==null){var t=Fr(a);if(t!==null){if(a=t.tag,a===13){if(a=lf(t),a!==null){e.blockedOn=a,Md(e.priority,function(){Ym(t)});return}}else if(a===31){if(a=sf(t),a!==null){e.blockedOn=a,Md(e.priority,function(){Ym(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=bc(e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Bo=n,t.target.dispatchEvent(n),Bo=null}else return a=Gi(t),a!==null&&Lp(a),e.blockedOn=t,!1;a.shift()}return!0}function Xm(e,a,t){Wl(e)&&t.delete(a)}function t6(){yc=!1,mn!==null&&Wl(mn)&&(mn=null),fn!==null&&Wl(fn)&&(fn=null),pn!==null&&Wl(pn)&&(pn=null),Hr.forEach(Xm),Gr.forEach(Xm)}function El(e,a){e.blockedOn===a&&(e.blockedOn=null,yc||(yc=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,t6)))}var Nl=null;function Zm(e){Nl!==e&&(Nl=e,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,function(){Nl===e&&(Nl=null);for(var a=0;a<e.length;a+=3){var t=e[a],n=e[a+1],i=e[a+2];if(typeof n!="function"){if(Hu(n||t)===null)continue;break}var r=Gi(t);r!==null&&(e.splice(a,3),a-=3,Wo(r,{pending:!0,data:i,method:t.method,action:n},n,i))}}))}function _i(e){function a(u){return El(u,e)}mn!==null&&El(mn,e),fn!==null&&El(fn,e),pn!==null&&El(pn,e),Hr.forEach(a),Gr.forEach(a);for(var t=0;t<It.length;t++){var n=It[t];n.blockedOn===e&&(n.blockedOn=null)}for(;0<It.length&&(t=It[0],t.blockedOn===null);)Gp(t),t.blockedOn===null&&It.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=i[ya]||null;if(typeof r=="function")l||Zm(t);else if(l){var s=null;if(r&&r.hasAttribute("formAction")){if(i=r,l=r[ya]||null)s=l.formAction;else if(Hu(i)!==null)continue}else s=l.action;typeof s=="function"?t[n+1]=s:(t.splice(n,3),n-=3),Zm(t)}}}function Qp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(l){return i=l})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),n||setTimeout(t,20)}function t(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Gu(e){this._internalRoot=e}e0.prototype.render=Gu.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(q(409));var t=a.current,n=Ma();Up(t,n,e,a,null,null)};e0.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Up(e.current,2,null,e,null,null),Js(),a[Hi]=null}};function e0(e){this._internalRoot=e}e0.prototype.unstable_scheduleHydration=function(e){if(e){var a=bf();e={blockedOn:null,target:e,priority:a};for(var t=0;t<It.length&&a!==0&&a<It[t].priority;t++);It.splice(t,0,e),t===0&&Gp(e)}};var Fm=nf.version;if(Fm!=="19.2.0")throw Error(q(527,Fm,"19.2.0"));le.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=Dh(a),e=e!==null?of(e):null,e=e===null?null:e.stateNode,e};var n6={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Kr=Al.inject(n6),Aa=Al}catch{}}Bs.createRoot=function(e,a){if(!rf(e))throw Error(q(299));var t=!1,n="",i=k4,r=_4,l=O4;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),a=Bp(e,1,!1,null,null,t,n,null,i,r,l,Qp),e[Hi]=a.current,Ou(e),new Gu(a)};Bs.hydrateRoot=function(e,a,t){if(!rf(e))throw Error(q(299));var n=!1,i="",r=k4,l=_4,s=O4,u=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.formState!==void 0&&(u=t.formState)),a=Bp(e,1,!0,a,t??null,n,i,u,r,l,s,Qp),a.context=Rp(null),t=a.current,n=Ma(),n=Pc(n),i=on(n),i.callback=null,cn(t,i,n),t=n,a.current.lanes=t,Jr(a,t),dt(a),e[Hi]=a.current,Ou(e),new e0(a)};Bs.version="19.2.0";function Yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)}catch(e){console.error(e)}}Yp(),J1.exports=Bs;var i6=J1.exports;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=(...e)=>e.filter((a,t,n)=>!!a&&a.trim()!==""&&n.indexOf(a)===t).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,t,n)=>n?n.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=e=>{const a=l6(e);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=ga.forwardRef(({color:e="currentColor",size:a=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:i="",children:r,iconNode:l,...s},u)=>ga.createElement("svg",{ref:u,...s6,width:a,height:a,stroke:e,strokeWidth:n?Number(t)*24/Number(a):t,className:Vp("lucide",i),...!r&&!o6(s)&&{"aria-hidden":"true"},...s},[...l.map(([m,p])=>ga.createElement(m,p)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(e,a)=>{const t=ga.forwardRef(({className:n,...i},r)=>ga.createElement(c6,{ref:r,iconNode:a,className:Vp(`lucide-${r6(Km(e))}`,`lucide-${e}`,n),...i}));return t.displayName=Km(e),t};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Qu=je("arrow-left",u6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Bt=je("arrow-right",d6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],f6=je("atom",m6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Yu=je("book-open",p6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],Xp=je("brain-circuit",h6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],g6=je("calendar-days",v6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Vu=je("calendar",b6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],x6=je("chart-line",y6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],z6=je("check",S6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],j6=je("chevron-down",w6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Fi=je("circle-check",E6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Zp=je("clipboard-list",N6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],q6=je("clock",A6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],T6=je("code-xml",M6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],Fp=je("compass",C6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$6=je("copy",D6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],_6=je("flask-conical",k6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],B6=je("graduation-cap",O6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Kp=je("instagram",R6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Xu=je("mail",U6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],a0=je("message-circle",L6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],Pp=je("repeat",H6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Q6=je("shield-check",G6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],V6=je("star",Y6);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Z6=je("target",X6),Zu="+34 684 73 17 62",F6="+34684731762",t0="admisionesnebula@gmail.com",Fu=`mailto:${t0}?subject=${encodeURIComponent("Solicitud de diagnóstico - Método Nebula")}`,Jp="https://instagram.com/nebula.lambda";function n0(){const[e,a]=ga.useState(!1);return{copied:e,copy:async()=>{try{await navigator.clipboard.writeText(F6),a(!0),setTimeout(()=>a(!1),2e3)}catch{}}}}const K6={displayName:"Método Nebula",url:"https://metodonebula.es",language:"es-ES",logo:"/favicon.svg",author:{knowsAbout:["Matemáticas","Física","Química","ESO","Bachillerato","Estadística","Programación","Economía","Inteligencia Artificial"]}},P6=[{path:"/",kind:"home",title:"Clases particulares desde ESO hasta Universidad | Método Nebula",description:"Clases particulares premium desde ESO, Bachillerato y Selectividad hasta universidad, IB, GCSE y transición IT con diagnóstico, plan y seguimiento.",h1:"Cuando la asignatura, el examen o la entrevista no admite improvisación.",intro:"Enseñanza privada desde ESO y Bachillerato hasta Universidad, exámenes internacionales, Selectividad y transición al sector IT. Diagnóstico claro, plan de trabajo con fechas y un mentor que sostiene el proceso de principio a fin.",priority:"1.0"},{path:"/blog/",kind:"blog",title:"Blog académico de Matemáticas, Estadística y Física | Método Nebula",description:"Guías principales y artículos de apoyo sobre Matemáticas, Estadística, Física, Selectividad, programación académica y carrera tecnológica.",h1:"Guías académicas de Matemáticas, Estadística, Física y estudio",intro:"Un archivo editorial organizado por áreas: guías pilar, artículos prácticos y contenidos de apoyo para estudiar con método y elegir el siguiente paso.",priority:"0.8"},{path:"/sobre-nebula/",kind:"about",title:"Sobre Método Nebula | Mentoría académica y profesional",description:"Conoce el enfoque de Método Nebula: enseñanza privada con formación matemática, experiencia tecnológica y acompañamiento académico personalizado.",h1:"Sobre Método Nebula",intro:"Ayudamos a estudiantes y profesionales a ordenar asignaturas exigentes, entender el razonamiento de fondo y avanzar con un plan claro.",priority:"0.6"},{path:"/metodologia/",kind:"method",title:"Método de estudio, diagnóstico y seguimiento | Método Nebula",description:"El método de enseñanza privada de Método Nebula ordena el estudio en diagnóstico, objetivo, plan por bloques, práctica guiada y seguimiento.",h1:"Método de diagnóstico, planificación y seguimiento",intro:"El objetivo no es sumar horas, sino convertir cada sesión en una decisión dentro de un plan medible.",priority:"0.6"},{path:"/contacto/",kind:"contact",title:"Contacto y diagnóstico académico | Método Nebula",description:"Solicita un diagnóstico académico en Método Nebula para explicar asignatura, examen, calendario y recibir una propuesta de trabajo personalizada.",h1:"Contacto y diagnóstico",intro:"El primer paso es una conversación breve para entender objetivo, punto de partida, calendario y encaje real del acompañamiento.",priority:"0.6"}],J6=[{name:"Matemáticas universitarias",slug:"matematicas-universitarias",description:"Cálculo, álgebra, demostraciones y estrategias para estudiar asignaturas cuantitativas con método.",relatedService:"/clases-particulares/matematicas-universidad/",pillarPost:"como-aprobar-calculo-i-ingenieria-seis-semanas"},{name:"Estadística",slug:"estadistica",description:"Inferencia, probabilidad, modelos, TFG y TFM con lectura crítica de resultados.",relatedService:"/clases-particulares/estadistica-universidad/",pillarPost:"que-prueba-estadistica-utilizar-guia-test-correcto"},{name:"Programación y datos",slug:"programacion-y-datos",description:"Python, SQL, proyectos, fundamentos de software y preparación técnica.",relatedService:"/clases-particulares/programacion-universidad/",pillarPost:"python-y-sql-para-empezar-en-datos"},{name:"Física y Química",slug:"fisica-y-quimica",description:"Problemas tipo, unidades, razonamiento físico y química para exámenes.",relatedService:"/clases-particulares/fisica-ingenieria/",pillarPost:"fisica-y-quimica-como-plantear-problemas"},{name:"Economía y ADE",slug:"economia-y-ade",description:"Matemáticas, estadística, microeconomía y modelos aplicados a grados de empresa.",relatedService:"/clases-particulares/economia-ade/",pillarPost:"economia-ade-matematicas-sin-perderse"},{name:"Selectividad",slug:"selectividad",description:"Calendarios, simulacros y estrategia para PAU y pruebas de acceso.",relatedService:"/clases-particulares/selectividad/",pillarPost:"preparar-selectividad-con-calendario"},{name:"Exámenes internacionales",slug:"examenes-internacionales",description:"IB, GCSE e IGCSE con foco en rúbricas, práctica y gestión del tiempo.",relatedService:"/clases-particulares/gcse-ib/",pillarPost:"ib-gcse-como-preparar-examenes-internacionales"},{name:"Carrera tecnológica",slug:"carrera-tecnologica",description:"Rutas de aprendizaje, portfolio, entrevistas y transición profesional a tecnología.",relatedService:"/clases-particulares/programacion-universidad/",pillarPost:"transicion-al-sector-it-en-6-meses"}],I6={path:"/clases-particulares/universidad/",kind:"service-overview",title:"Clases particulares y preparación académica | Método Nebula",description:"Servicios de enseñanza privada para Matemáticas, Física, Estadística, Química, Economía, Programación, Selectividad, IB y GCSE.",h1:"Clases particulares, preparación de exámenes y formación tecnológica",intro:"Tres líneas de trabajo diferenciadas: apoyo académico en asignaturas, preparación con fecha cerrada y formación tecnológica para perfiles que necesitan una ruta propia.",priority:"0.8"},W6=[{path:"/clases-particulares/matematicas-universidad/",title:"Clases particulares de Matemáticas desde ESO hasta Universidad | Método Nebula",description:"Clases de matemáticas para ESO, Bachillerato, Selectividad y Universidad: base, problemas, Cálculo, Álgebra y asignaturas cuantitativas.",h1:"Clases particulares de Matemáticas desde ESO hasta Universidad",audience:"Para alumnos de ESO, Bachillerato, Selectividad y Universidad que entienden partes sueltas del temario, pero se bloquean al resolver ejercicios nuevos.",problems:["Memorizar fórmulas sin saber cuándo aplicarlas.","Perderse en los cambios de variable, límites, derivadas o integrales.","No reconocer el método adecuado ante un problema de examen.","Llegar a prácticas o parciales sin mapa de temas."],topics:["Matemáticas de ESO y Bachillerato","Matemáticas II y aplicadas a Ciencias Sociales","Cálculo diferencial e integral","Álgebra lineal","Ecuaciones diferenciales","Optimización","Problemas tipo de examen"],method:["Diagnóstico de lagunas por bloques.","Mapa de métodos y condiciones de uso.","Resolución guiada de problemas representativos.","Ejercicios propios para repetir el razonamiento sin copiar soluciones.","Seguimiento semanal hasta ganar autonomía."],profile:"En Método Nebula trabajamos las matemáticas desde el razonamiento: entender por qué aparece cada paso antes de automatizarlo.",differentiator:"No se limita a resolver ejercicios delante del alumno. Cada bloque conecta teoría, método de elección, práctica guiada y repetición autónoma para que el alumno pueda defender el procedimiento sin depender de una solución modelo.",studentInput:"Temario, ejercicios de clase, fechas de evaluación y muestras de errores recientes. Con eso se prioriza qué base reforzar y qué tipos de problema entrenar primero.",reasonableOutcomes:"Un mapa claro de la asignatura, más seguridad al elegir método y una rutina de práctica orientada a examen. El resultado depende del calendario disponible, la base inicial y la constancia entre sesiones.",nextStep:"Solicitar diagnóstico con curso, asignatura, fecha de examen y dos o tres ejercicios que representen el bloqueo actual.",faq:[{q:"¿Sirve si empiezo desde muy bajo?",a:"Sí, siempre que haya calendario suficiente. El diagnóstico separa lo urgente de lo estructural."},{q:"¿Preparáis exámenes concretos?",a:"Se trabaja con el temario, ejercicios tipo y formato de examen que aporte el alumno."}],relatedPosts:["como-estudiar-matematicas-sin-memorizar","que-son-las-derivadas-y-para-que-se-utilizan","que-son-las-integrales-y-para-que-se-utilizan"],priority:"0.75"},{path:"/clases-particulares/estadistica-universidad/",title:"Clases particulares de Estadística y Probabilidad | Método Nebula",description:"Clases de estadística y probabilidad para Bachillerato, Universidad, ADE, Psicología, TFG, TFM y análisis de datos con interpretación rigurosa.",h1:"Clases particulares de Estadística y Probabilidad",audience:"Para alumnos de Bachillerato, Universidad o trabajos cuantitativos que necesitan entender qué prueba utilizar, cómo interpretar resultados y cómo evitar aplicar recetas sin criterio.",problems:["Confundir probabilidad, inferencia y descriptiva.","Elegir contrastes sin comprobar supuestos.","Interpretar p-valores o intervalos de confianza de forma mecánica.","No saber traducir un enunciado a hipótesis y variables."],topics:["Probabilidad","Variables aleatorias","Estimación e intervalos","Contrastes de hipótesis","Regresión","Estadística para TFG y TFM"],method:["Diagnóstico de notación, conceptos y software.","Árbol de decisión para elegir técnicas.","Ejemplos con interpretación verbal.","Práctica con ejercicios y resultados.","Revisión de errores frecuentes antes de examen."],profile:"El enfoque prioriza entender qué pregunta responde cada técnica y qué conclusiones se pueden defender.",differentiator:"La prioridad no es memorizar fórmulas ni menús de software, sino construir criterio: variable, hipótesis, supuesto, prueba, interpretación y límite de la conclusión.",studentInput:"Guía docente, prácticas, software exigido, enunciados de examen o borrador del análisis. No se sustituye el trabajo académico del alumno.",reasonableOutcomes:"Mejor elección de técnicas, interpretación más defendible de resultados y menos errores de supuesto o lectura. En TFG y TFM, el objetivo es orientar el razonamiento y la revisión.",nextStep:"Solicitar diagnóstico indicando carrera, tema estadístico, herramienta usada y fecha de entrega o examen.",faq:[{q:"¿Ayudáis con software estadístico?",a:"Se puede trabajar la lógica del análisis y el uso de herramientas cuando el alumno aporta el entorno de la asignatura."},{q:"¿Hacéis trabajos por el alumno?",a:"No. Se orienta, explica y revisa el razonamiento, sin sustituir el trabajo académico del estudiante."}],relatedPosts:["estadistica-desde-cero-para-elegir-contrastes"],priority:"0.7"},{path:"/clases-particulares/programacion-universidad/",title:"Clases particulares de Programación desde cero | Método Nebula",description:"Clases de programación desde cero para ESO, Bachillerato, FP, Universidad, Python, SQL, fundamentos, proyectos y asignaturas de informática.",h1:"Clases particulares de Programación desde cero",audience:"Para alumnos de ESO, Bachillerato, FP o Universidad que se atascan al pasar de ver ejemplos a escribir código propio, depurar errores y explicar decisiones técnicas.",problems:["Copiar código sin entender el flujo.","Bloquearse ante errores de compilación o ejecución.","No saber dividir un problema en funciones.","Llegar a prácticas sin hábito de depuración."],topics:["Python y fundamentos","SQL","Estructuras de datos","APIs y Git","Proyectos pequeños completos","Preparación de entrevistas básicas"],method:["Diagnóstico de nivel y lenguaje.","Problemas pequeños con feedback inmediato.","Lectura de errores y depuración guiada.","Refactorización para mejorar claridad.","Proyecto o práctica defendible por el alumno."],profile:"La programación se trabaja como pensamiento estructurado, no como colección de sintaxis.",differentiator:"Se trabaja leyendo errores, separando problemas en piezas pequeñas y justificando decisiones. La línea tecnológica se presenta como itinerario propio, no mezclada con las clases académicas principales.",studentInput:"Lenguaje, entorno, enunciado de práctica, errores reproducibles y objetivo: aprobar asignatura, construir base o preparar una transición profesional.",reasonableOutcomes:"Más autonomía para escribir, depurar y explicar código sencillo. En perfiles profesionales, una ruta técnica realista y un proyecto defendible si el alcance lo permite.",nextStep:"Solicitar diagnóstico con lenguaje, nivel actual, práctica o proyecto y objetivo concreto.",faq:[{q:"¿Puedo empezar sin base?",a:"Sí. Se empieza por variables, control de flujo, funciones y lectura de errores."},{q:"¿Preparáis prácticas o proyectos?",a:"Se explica el enfoque y se revisan dudas, pero no se entrega trabajo que deba realizar el alumno."}],relatedPosts:["python-y-sql-para-empezar-en-datos","transicion-al-sector-it-en-6-meses"],priority:"0.7"},{path:"/clases-particulares/fisica-ingenieria/",title:"Clases particulares de Física para Bachillerato e Ingeniería | Método Nebula",description:"Clases de física para ESO, Bachillerato, Selectividad e Ingeniería con foco en problemas, unidades, modelos y preparación de exámenes.",h1:"Clases particulares de Física para Bachillerato e Ingeniería",audience:"Para alumnos de ESO, Bachillerato, Selectividad o primeros cursos de Ingeniería que necesitan pasar de fórmulas aisladas a modelos físicos claros.",problems:["No identificar fuerzas, sistema o energía relevante.","Mezclar unidades o signos sin control.","Aprender fórmulas sin interpretar el fenómeno.","No saber plantear el diagrama inicial."],topics:["Mecánica","Electricidad y magnetismo","Ondas","Termodinámica","Física general","Problemas de examen"],method:["Diagnóstico de conceptos y herramientas matemáticas.","Planteamiento gráfico antes de calcular.","Control de unidades y órdenes de magnitud.","Práctica guiada con variantes.","Simulacros parciales."],profile:"El trabajo busca que el alumno sepa justificar el modelo antes de operar.",differentiator:"Antes de aplicar fórmulas se trabaja el modelo físico: sistema, diagrama, magnitudes, unidades y orden de magnitud. La cuenta llega después del planteamiento.",studentInput:"Lista de temas, fórmulas permitidas, ejercicios resueltos por el profesor y problemas donde aparece el bloqueo.",reasonableOutcomes:"Mejor planteamiento inicial, menos errores de unidades y más capacidad para reconocer variantes de un mismo problema. La mejora exige práctica entre sesiones.",nextStep:"Solicitar diagnóstico con curso, bloque de Física y fecha del próximo parcial o examen.",faq:[{q:"¿Se trabaja desde apuntes de mi centro o universidad?",a:"Sí, se parte del temario, libro, apuntes y formato de ejercicios de la asignatura."},{q:"¿La física requiere reforzar matemáticas?",a:"A menudo sí. Se integran las herramientas necesarias sin convertirlo en otra asignatura."}],relatedPosts:["fisica-y-quimica-como-plantear-problemas"],priority:"0.68"},{path:"/clases-particulares/economia-ade/",title:"Clases particulares de Economía y ADE | Método Nebula",description:"Apoyo en Economía de Bachillerato, ADE, matemáticas financieras, estadística, microeconomía y asignaturas cuantitativas de empresa.",h1:"Clases particulares de Economía y ADE",audience:"Para alumnos de Bachillerato, ADE, Economía o dobles grados que necesitan ordenar la parte cuantitativa y entender modelos.",problems:["Ver las matemáticas como obstáculo separado de la economía.","No entender gráficas, derivadas o elasticidades.","Confundir procedimientos de estadística aplicada.","Estudiar teoría sin practicar problemas representativos."],topics:["Matemáticas para ADE","Microeconomía","Estadística aplicada","Econometría introductoria","Matemática financiera","Optimización"],method:["Diagnóstico de base matematica.","Conexión entre modelo, gráfica y cálculo.","Problemas tipo con interpretación económica.","Material de repaso por bloques.","Plan de examen con prioridades."],profile:"Se busca que el alumno entienda qué representa cada fórmula dentro del problema económico.",differentiator:"La parte cuantitativa se conecta con interpretación económica: gráfica, fórmula, supuesto y decisión. No se estudian matemáticas como si fueran un obstáculo aislado.",studentInput:"Programa de la asignatura, colección de problemas, tipo de calculadora o software y criterios del profesor.",reasonableOutcomes:"Más claridad al traducir enunciados, interpretar gráficas y priorizar problemas de alto impacto. Las recuperaciones se enfocan por bloques si el tiempo es corto.",nextStep:"Solicitar diagnóstico con asignatura, grado, temas más débiles y fecha de evaluación.",faq:[{q:"¿Sirve para grados no técnicos?",a:"Sí, especialmente cuando la dificultad está en traducir matemáticas a decisiones económicas."},{q:"¿Preparáis recuperaciones?",a:"Si el calendario lo permite, se priorizan los bloques con mayor impacto en examen."}],relatedPosts:["economia-ade-matematicas-sin-perderse"],priority:"0.68"},{path:"/clases-particulares/quimica/",title:"Clases particulares de Química | Método Nebula",description:"Clases de química para ESO, Bachillerato, Selectividad, universidad inicial y preparación de exámenes con razonamiento, ejercicios y seguimiento.",h1:"Clases particulares de Química",audience:"Para alumnos de ESO, Bachillerato, Selectividad o universidad inicial que necesitan entender reacciones, equilibrio, cálculos y teoría antes de memorizar procedimientos.",problems:["Confundir fórmulas con significado quimico.","No controlar estequiometria o unidades.","Perderse en equilibrio, ácido-base o redox.","Estudiar teoría sin suficientes problemas corregidos."],topics:["Estequiometria","Enlace y estructura","Equilibrio quimico","Ácido-base","Redox","Química para exámenes"],method:["Diagnóstico de conceptos básicos.","Traducción del enunciado a datos y reacción.","Ejercicios graduados.","Corrección de pasos y unidades.","Repaso final con problemas mixtos."],profile:"El enfoque evita memorizar reacciones sin entender condiciones, magnitudes y conservación.",differentiator:"Cada ejercicio se descompone en datos, reacción, proporciones, unidades y sentido químico. El objetivo es reducir el aprendizaje mecánico.",studentInput:"Temario, tabla de formulación o apuntes, problemas tipo y errores corregidos si existen.",reasonableOutcomes:"Más control sobre estequiometría, equilibrio y problemas mixtos, con una pauta de revisión antes de examen. No se prometen resultados sin calendario y práctica.",nextStep:"Solicitar diagnóstico indicando nivel, bloque de Química y materiales de referencia.",faq:[{q:"¿Se prepara Selectividad de Química?",a:"Sí, cuando se trabaja con calendario, ejercicios de examen y revisión de errores."},{q:"¿También universidad?",a:"Se atienden asignaturas introductorias si encajan con el temario y calendario."}],relatedPosts:["fisica-y-quimica-como-plantear-problemas"],priority:"0.65"},{path:"/clases-particulares/selectividad/",title:"Clases particulares para Selectividad y PAU | Método Nebula",description:"Preparación de Selectividad y PAU con calendario, simulacros, bloques de estudio y seguimiento hasta el examen.",h1:"Clases particulares para Selectividad y PAU",audience:"Para alumnos que necesitan convertir el temario de bachillerato en un plan semanal realista hasta el examen.",problems:["Estudiar lo cómodo y evitar lo que baja nota.","No saber repartir asignaturas por semanas.","Dejar simulacros para el final.","Llegar al examen sin estrategia de tiempo."],topics:["Matemáticas II","Matemáticas aplicadas","Física","Química","Calendario PAU","Simulacros y corrección"],method:["Diagnóstico de asignaturas y nota objetivo.","Calendario inverso desde las fechas de examen.","Bloques de contenido y ejercicios tipo.","Simulacros cronometrados.","Ajustes semanales según progreso."],profile:"El acompañamiento se centra en convertir presión y temario en decisiones semanales concretas.",differentiator:"Se organiza el estudio hacia una fecha real: calendario inverso, bloques prioritarios, simulacros y revisión de errores. No es una sucesión de repasos sueltos.",studentInput:"Comunidad autónoma o prueba concreta, asignaturas, nota objetivo, calendario oficial y exámenes de años anteriores si se usan en clase.",reasonableOutcomes:"Una planificación semanal más realista, criterios de prioridad y práctica cronometrada. La nota final depende del punto de partida, tiempo disponible y trabajo propio.",nextStep:"Solicitar diagnóstico con asignaturas, fechas y nota objetivo aproximada.",faq:[{q:"¿Cuánto antes conviene empezar?",a:"Cuanto antes, más margen para consolidar. Con poco tiempo se prioriza lo que más impacto tiene."},{q:"¿Se trabaja con exámenes de años anteriores?",a:"Sí, como entrenamiento y diagnóstico, no solo como repaso final."}],relatedPosts:["preparar-selectividad-con-calendario"],priority:"0.75"},{path:"/clases-particulares/gcse-ib/",title:"Clases particulares para GCSE, IGCSE e IB | Método Nebula",description:"Preparación personalizada para GCSE, IGCSE e IB en asignaturas cuantitativas con rúbrica, calendario y práctica guiada.",h1:"Clases particulares para GCSE, IGCSE e IB",audience:"For students who need structured academic support in international programmes while keeping explanations clear in Spanish or English when needed.",problems:["No entender la rúbrica o el tipo de respuesta esperado.","Practicar ejercicios sin medir tiempo ni criterio.","Cambiar entre currículos y terminología.","Llegar a mocks sin revisión de errores acumulados."],topics:["Mathematics","Physics","Chemistry","Exam technique","Internal assessment support","Revisión planning"],method:["Diagnostic review of syllabus, level and exam board.","Calendar aligned with mocks and final exams.","Worked examples and independent practice.","Rubric-aware feedback.","Progress tracking until exam week."],profile:"El enfoque combina estructura académica y claridad bilingüe cuando el programa lo requiere.",differentiator:"El trabajo se adapta al syllabus y a la rúbrica, con práctica de contenido, timing y forma de justificar respuestas. La explicación puede alternar español e inglés cuando aporte claridad.",studentInput:"Programa, exam board, nivel, calendario de mocks, rúbricas y ejemplos de respuestas corregidas si existen.",reasonableOutcomes:"Más alineación con la rúbrica, mejor gestión del tiempo y práctica enfocada a examen. Las expectativas se ajustan al calendario y al nivel inicial.",nextStep:"Solicitar diagnóstico con programa, asignatura, exam board y fecha de mock o examen final.",faq:[{q:"¿Las clases pueden adaptarse al temario internacional?",a:"Sí, siempre partiendo del syllabus y materiales concretos que aporte el alumno."},{q:"¿Se trabaja técnica de examen?",a:"Sí. Se práctica contenido, tiempo, rúbrica y forma de justificar respuestas."}],relatedPosts:["ib-gcse-como-preparar-examenes-internacionales"],priority:"0.65"}],e7={site:K6,corePages:P6,blogCategories:J6,serviceOverview:I6,servicePages:W6},W=e7,Pm=W.site.url;function xc(e){if(e==="/")return"/";const[a,t=""]=e.split("#"),n=`${a.replace(/\/+$/,"")}/`;return t?`${n}#${t}`:n}function De(e){if(/^https?:\/\//.test(e))return e;const a=e.startsWith("/")?e:`/${e}`;return/\/[^/?#]+\.[^/?#]+(?:[?#].*)?$/.test(a)?`${Pm}${a}`:`${Pm}${xc(a)==="/"?"/":xc(a)}`}function i0(e){return`/blog/categoria/${e}/`}function ql(e){return e<=1?"/blog/":`/blog/pagina/${e}/`}function Ml(e,a){return a<=1?i0(e):`/blog/categoria/${e}/pagina/${a}/`}function a7(e){return W.blogCategories.find(a=>a.slug===e)}function t7(e){const a=xc(e);return W.servicePages.find(t=>t.path===a)}function Ia(e,a){let t=document.head.querySelector(e);t||(t=document.createElement("meta"),document.head.appendChild(t));for(const[n,i]of Object.entries(a))t.setAttribute(n,i)}function Jm(e){var a;(a=document.head.querySelector(e))==null||a.remove()}function Ip(e,a){let t=document.head.querySelector(`link[rel="${e}"]`);t||(t=document.createElement("link"),t.setAttribute("rel",e),document.head.appendChild(t)),t.setAttribute("href",a)}function Im(e,a){const t=document.head.querySelector(`link[rel="${e}"]`);if(!a){t==null||t.remove();return}Ip(e,a)}function Pa({title:e,description:a,path:t,type:n="website",image:i,robots:r="index,follow",prevPath:l,nextPath:s}){ga.useEffect(()=>{const u=De(t),m=i&&i!==W.site.logo?De(i):void 0;document.title=e,document.documentElement.lang=W.site.language,Ia('meta[name="description"]',{name:"description",content:a}),Ia('meta[name="robots"]',{name:"robots",content:r}),Ia('meta[property="og:title"]',{property:"og:title",content:e}),Ia('meta[property="og:description"]',{property:"og:description",content:a}),Ia('meta[property="og:url"]',{property:"og:url",content:u}),Ia('meta[property="og:type"]',{property:"og:type",content:n}),m?Ia('meta[property="og:image"]',{property:"og:image",content:m}):Jm('meta[property="og:image"]'),Ia('meta[name="twitter:card"]',{name:"twitter:card",content:m?"summary_large_image":"summary"}),Ia('meta[name="twitter:title"]',{name:"twitter:title",content:e}),Ia('meta[name="twitter:description"]',{name:"twitter:description",content:a}),m?Ia('meta[name="twitter:image"]',{name:"twitter:image",content:m}):Jm('meta[name="twitter:image"]'),Ip("canonical",u),Im("prev",l?De(l):void 0),Im("next",s?De(s):void 0)},[a,i,s,t,l,r,e,n])}function n7(e){return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}function i7(){return window.location.pathname}function r7(){return ga.useSyncExternalStore(n7,i7,()=>"/")}function l7(e){e!==window.location.pathname+window.location.hash&&(window.history.pushState(null,"",e),window.dispatchEvent(new PopStateEvent("popstate")),window.scrollTo({top:0,left:0}))}function ce({to:e,children:a,onClick:t,...n}){const i=r=>{t==null||t(r),!(r.defaultPrevented||r.button!==0||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey)&&(!e.startsWith("/")||e.includes("#")||(r.preventDefault(),l7(e)))};return o.jsx("a",{href:e,onClick:i,...n,children:a})}function tt({children:e}){return o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-spark/30 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-spark"}),e]})}function et({href:e,children:a,className:t=""}){return o.jsxs("a",{href:e,className:`group inline-flex items-center justify-center gap-2 rounded-full bg-action px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.7)] transition-all hover:translate-y-[-1px] hover:bg-action/90 ${t}`,children:[a,o.jsx(Bt,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]})}function s7({href:e,children:a,className:t=""}){return o.jsx("a",{href:e,className:`inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-white/30 hover:bg-white/[0.05] ${t}`,children:a})}function Ku({className:e=""}){return o.jsxs("svg",{viewBox:"0 0 32 32",className:e,"aria-hidden":"true",children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:"ng",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#2F6BFF"}),o.jsx("stop",{offset:"60%",stopColor:"#7C5CFF"}),o.jsx("stop",{offset:"100%",stopColor:"#D6B15E"})]})}),o.jsx("circle",{cx:"16",cy:"16",r:"14",fill:"none",stroke:"url(#ng)",strokeWidth:"1.2"}),o.jsx("circle",{cx:"16",cy:"16",r:"3",fill:"url(#ng)"}),o.jsx("circle",{cx:"26",cy:"10",r:"1.5",fill:"#D6B15E"}),o.jsx("circle",{cx:"6",cy:"22",r:"1",fill:"#2CEBFF"})]})}const Wm=[{href:"/",label:"Inicio"},{href:"/clases-particulares/universidad/",label:"Clases"},{href:"/clases-particulares/selectividad/",label:"Exámenes"},{href:"/metodologia/",label:"Método"},{href:"/sobre-nebula/",label:"Sobre Nebula"},{href:"/blog/",label:"Blog"},{href:"/contacto/",label:"Contacto"}];function mt({children:e}){return o.jsxs("div",{className:"min-h-screen bg-background text-foreground antialiased",children:[o.jsx("a",{href:"#contenido",className:"skip-link",children:"Saltar al contenido"}),o.jsx(Wp,{}),o.jsx("main",{id:"contenido",children:e}),o.jsx(Pu,{}),o.jsx(e2,{})]})}function Wp(){const[e,a]=ga.useState(!1);return ga.useEffect(()=>{const t=n=>{n.key==="Escape"&&a(!1)};return window.addEventListener("keydown",t),document.body.style.overflow=e?"hidden":"",()=>{window.removeEventListener("keydown",t),document.body.style.overflow=""}},[e]),o.jsxs("header",{className:"sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl",children:[o.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-6 py-4",children:[o.jsxs(ce,{to:"/",className:"flex min-h-11 items-center gap-2",children:[o.jsx(Ku,{className:"h-7 w-7"}),o.jsx("span",{className:"font-display text-lg font-semibold tracking-tight",children:"Método Nebula"})]}),o.jsx("nav",{className:"hidden items-center gap-8 lg:flex",children:Wm.map(t=>o.jsx(ce,{to:t.href,className:"text-sm text-muted-foreground transition-colors hover:text-link",children:t.label},t.href))}),o.jsx("div",{className:"hidden lg:block",children:o.jsx(et,{href:"/contacto/",children:"Solicitar diagnóstico"})}),o.jsxs("button",{type:"button",onClick:()=>a(t=>!t),className:"flex min-h-11 min-w-11 flex-col items-center justify-center rounded-md border border-white/10 p-2 lg:hidden","aria-label":e?"Cerrar menú":"Abrir menú","aria-expanded":e,"aria-controls":"mobile-navigation",children:[o.jsx("div",{className:"h-0.5 w-5 bg-foreground"}),o.jsx("div",{className:"mt-1 h-0.5 w-5 bg-foreground"}),o.jsx("div",{className:"mt-1 h-0.5 w-5 bg-foreground"})]})]}),e&&o.jsx("div",{id:"mobile-navigation",className:"border-t border-white/5 bg-background/95 lg:hidden",children:o.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4",children:[Wm.map(t=>o.jsx(ce,{to:t.href,onClick:()=>a(!1),className:"text-sm text-muted-foreground transition-colors hover:text-link",children:t.label},t.href)),o.jsx(et,{href:"/contacto/",className:"w-full",children:"Solicitar diagnóstico"})]})})]})}function Pu(){const{copy:e}=n0();return o.jsx("footer",{className:"border-t border-white/5 bg-background py-16",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Ku,{className:"h-7 w-7"}),o.jsx("span",{className:"font-display text-lg font-semibold",children:"Método Nebula"})]}),o.jsx("p",{className:"mt-4 max-w-sm text-sm text-muted-foreground",children:"Enseñanza privada con diagnóstico, planificación, materiales y seguimiento desde ESO hasta Universidad."}),o.jsx("p",{className:"mt-6 text-xs text-muted-foreground",children:"Rigor académico con visión tecnológica."})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Navegación"}),o.jsx("ul",{className:"mt-4 space-y-2 text-sm",children:[["/metodologia/","Método"],["/clases-particulares/universidad/","Clases"],["/clases-particulares/selectividad/","Exámenes"],["/sobre-nebula/","Sobre Nebula"],["/blog/","Blog"],["/mapa-del-sitio/","Mapa del sitio"],["/contacto/","Contacto"]].map(([a,t])=>o.jsx("li",{children:o.jsx(ce,{to:a,className:"text-link transition-colors hover:text-link",children:t})},a))})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Contacto"}),o.jsxs("ul",{className:"mt-4 space-y-2 text-sm",children:[o.jsx("li",{children:o.jsxs("a",{href:Jp,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 text-link transition-colors hover:text-link",children:[o.jsx(Kp,{className:"h-4 w-4 text-action"}),"@nebula.lambda"]})}),o.jsx("li",{children:o.jsxs("button",{onClick:e,className:"inline-flex items-center gap-2 text-link transition-colors hover:text-link",children:[o.jsx(a0,{className:"h-4 w-4 text-action"}),Zu]})}),o.jsx("li",{children:o.jsxs("a",{href:Fu,className:"inline-flex items-center gap-2 text-link transition-colors hover:text-link",children:[o.jsx(Xu,{className:"h-4 w-4 text-action"}),t0]})})]})]})]}),o.jsxs("div",{className:"mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center",children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," Método Nebula. Todos los derechos reservados."]}),o.jsxs("div",{className:"flex gap-5",children:[o.jsx("a",{href:"/contacto/",className:"text-link transition-colors hover:text-link",children:"Aviso legal"}),o.jsx("a",{href:"/contacto/",className:"text-link transition-colors hover:text-link",children:"Privacidad"}),o.jsx("a",{href:"/contacto/",className:"text-link transition-colors hover:text-link",children:"Cookies"})]})]})]})})}function e2(){const{copied:e,copy:a}=n0();return o.jsxs("button",{type:"button",onClick:a,"aria-label":"Copiar número de WhatsApp",className:"fixed bottom-6 right-6 z-40 hidden cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-background/80 px-4 py-3 text-sm font-medium shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.8)] backdrop-blur-md transition-all hover:translate-y-[-1px] hover:border-white/30 md:inline-flex",children:[o.jsx(a0,{className:"h-4 w-4 text-action"}),e?"Copiado":"Copiar teléfono"]})}function o7(){const e=W.corePages.find(a=>a.kind==="home");return Pa({title:e.title,description:e.description,path:e.path}),o.jsxs("div",{className:"min-h-screen bg-background text-foreground antialiased",children:[o.jsx("a",{href:"#contenido",className:"skip-link",children:"Saltar al contenido"}),o.jsx(Wp,{}),o.jsxs("main",{id:"contenido",children:[o.jsx(c7,{}),o.jsx(u7,{}),o.jsx(d7,{}),o.jsx(f7,{}),o.jsx(p7,{}),o.jsx(h7,{}),o.jsx(v7,{}),o.jsx(g7,{}),o.jsx(b7,{}),o.jsx(y7,{})]}),o.jsx(Pu,{}),o.jsx(e2,{})]})}function c7(){return o.jsxs("section",{id:"top",className:"relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 nebula-aurora pointer-events-none"}),o.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-14 md:pb-24",children:[o.jsxs("div",{className:"mx-auto max-w-5xl text-center",children:[o.jsx(tt,{children:"Bienvenido a Nebula"}),o.jsxs("h1",{className:"mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl",children:["Cuando la asignatura, el examen o la entrevista"," ",o.jsx("span",{className:"block nebula-gradient-text",children:"no admite improvisación."})]}),o.jsx("p",{className:"mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",children:"Enseñanza privada desde ESO y Bachillerato hasta Universidad, exámenes internacionales, Selectividad y transición al sector IT. Diagnóstico claro, plan de trabajo con fechas y un mentor que sostiene el proceso de principio a fin."}),o.jsxs("div",{className:"mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",children:[o.jsx(et,{href:"/contacto/",children:"Reservar diagnóstico"}),o.jsx(s7,{href:"/clases-particulares/universidad/",children:"Ver programas"})]}),o.jsxs("div",{className:"mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground",children:[o.jsx(ao,{label:"Matemático"}),o.jsx("span",{"aria-hidden":"true",className:"opacity-30",children:"·"}),o.jsx(ao,{label:"+6 años enseñando"}),o.jsx("span",{"aria-hidden":"true",className:"opacity-30",children:"·"}),o.jsx(ao,{label:"Profesional del sector tecnológico"})]})]}),o.jsx("div",{className:"mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4",children:[{icon:Yu,label:"ESO · Bachillerato"},{icon:Vu,label:"PAU · IB · GCSE"},{icon:B6,label:"Universidad"},{icon:T6,label:"Programación · IA"}].map(e=>o.jsxs("div",{className:"nebula-card flex items-center gap-3 rounded-2xl px-4 py-3",children:[o.jsx(e.icon,{className:"h-5 w-5 text-action"}),o.jsx("span",{className:"text-sm text-foreground/90",children:e.label})]},e.label))})]})]})}function ao({label:e}){return o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(Q6,{className:"h-3.5 w-3.5 text-action"}),e]})}function u7(){const e=[{icon:Fp,title:"Diagnóstico antes de empezar",text:"Antes de la primera clase entendemos tu nivel real, tus lagunas y la distancia exacta hasta el objetivo. Nada de empezar a ciegas."},{icon:Zp,title:"Plan con fechas",text:"Cada sesión tiene un porqué dentro de un calendario claro: aprobar, subir nota, llegar al examen o cerrar un cambio profesional."},{icon:Pp,title:"Seguimiento que sostiene",text:"Material propio, ejercicios, simulacros y revisión semanal de progreso. No te quedas solo entre clase y clase."}];return o.jsx("section",{className:"relative border-y border-white/5 bg-background py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(tt,{children:"Diferencia de Método Nebula"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["No vendemos horas. ",o.jsx("span",{className:"nebula-gradient-text",children:"Diseñamos planes."})]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"El acompañamiento empieza entendiendo el punto de partida, continúa con un calendario y se revisa con evidencias de progreso. La clase no es una hora aislada: es una decisión dentro de un plan."})]}),o.jsx("div",{className:"mt-12 grid gap-5 md:grid-cols-3",children:e.map(a=>o.jsxs("div",{className:"nebula-card group rounded-3xl p-7 transition-transform hover:-translate-y-1",children:[o.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-action/15 ring-1 ring-action/30",children:o.jsx(a.icon,{className:"h-5 w-5 text-action"})}),o.jsx("h3",{className:"mt-5 text-lg font-semibold",children:a.title}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:a.text})]},a.title))})]})})}function d7(){const e=[{tag:"Línea principal",icon:f6,title:"Clases particulares",subtitle:"Para alumnos que necesitan ordenar una asignatura concreta y ganar criterio al resolver problemas.",href:"/clases-particulares/universidad/",list:{label:"Asignaturas",items:["Matemáticas","Física","Estadística","Química","Economía","Programación"]},pain:["El alumno entiende partes sueltas, pero no sabe elegir el método.","Los ejercicios cambian un poco y aparece el bloqueo.","La asignatura necesita práctica corregida, no solo más teoría."],promise:"Se construye un mapa de la asignatura: qué entra, cómo se razona y qué tipos de problema conviene dominar primero.",cta:"Solicitar diagnóstico",accent:"primary"},{tag:"Con fecha cerrada",icon:Vu,title:"Preparación con calendario",subtitle:"Para Selectividad, recuperaciones, exámenes universitarios e internacionales con una fecha que condiciona el plan.",href:"/clases-particulares/selectividad/",list:{label:"Procesos",items:["Selectividad / PAU","Exámenes universitarios","Recuperaciones","IB","GCSE / IGCSE","Pruebas de acceso"]},pain:["Hay mucho temario y pocas semanas reales.","Faltan simulacros, prioridades y revisión de errores.","El alumno necesita saber qué estudiar esta semana y qué dejar para después."],promise:"El calendario se convierte en una hoja de ruta con bloques, simulacros y ajustes semanales según progreso.",mini:["Diagnóstico","Calendario","Bloques de contenido","Simulacros","Revisión","Ajuste final"],cta:"Solicitar diagnóstico",accent:"gold"},{tag:"Línea independiente",icon:Xp,title:"Formación tecnológica",subtitle:"Para programación académica, Python, SQL, datos, IA y transición IT con una ruta diferenciada.",href:"/clases-particulares/programacion-universidad/",list:{label:"Áreas",items:["Python","SQL","Datos","Inteligencia Artificial","Git y APIs","Proyectos","Entrevistas técnicas"]},pain:["Hay demasiados cursos y poca secuencia.","El código se copia, pero cuesta depurar y explicarlo.","La transición profesional necesita proyecto, criterio y defensa técnica."],promise:"La formación tecnológica queda separada del apoyo académico general y se trabaja como ruta técnica con objetivos propios.",cta:"Solicitar diagnóstico",accent:"electric"}];return o.jsx("section",{id:"servicios",className:"relative py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",children:[o.jsxs("div",{className:"max-w-2xl",children:[o.jsx(tt,{children:"Oferta organizada"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Tres entradas para no mezclar"," ",o.jsx("span",{className:"nebula-gradient-text",children:"objetivos distintos"})]})]}),o.jsx("p",{className:"max-w-md text-sm text-muted-foreground",children:"La formación académica mantiene prioridad visual. La línea tecnológica aparece como una ruta independiente cuando el objetivo es programación, datos o transición profesional."})]}),o.jsx("div",{className:"mt-14 space-y-6",children:e.map(a=>o.jsx(m7,{service:a},a.title))})]})})}function a2(e){switch(e){case"gold":return{dot:"bg-action",text:"text-action",ring:"ring-action/30",soft:"bg-action/10"};case"electric":return{dot:"bg-action",text:"text-action",ring:"ring-action/30",soft:"bg-action/10"};default:return{dot:"bg-action",text:"text-action",ring:"ring-action/30",soft:"bg-action/10"}}}function m7({service:e}){const a=a2(e.accent),t=e.icon;return o.jsxs("article",{className:"nebula-card relative overflow-hidden rounded-3xl p-7 md:p-10",children:[o.jsx("div",{className:"absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-primary/20 via-violet/10 to-transparent blur-3xl"}),o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[1.1fr_1fr]",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",children:e.tag}),o.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${a.dot}`})]}),o.jsxs("div",{className:"mt-4 flex items-start gap-4",children:[o.jsx("div",{className:`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${a.soft} ring-1 ${a.ring}`,children:o.jsx(t,{className:`h-6 w-6 ${a.text}`})}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("h3",{className:"font-display text-2xl font-semibold md:text-3xl",children:e.title}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground md:text-base",children:e.subtitle})]})]}),o.jsxs("div",{className:"mt-7",children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",children:e.list.label}),o.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:e.list.items.map(n=>o.jsx("span",{className:"rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/85",children:n},n))})]}),e.mini&&o.jsxs("div",{className:"mt-7",children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",children:"Proceso"}),o.jsx("ol",{className:"mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",children:e.mini.map((n,i)=>o.jsxs("li",{className:"flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2 text-xs",children:[o.jsxs("span",{className:`font-display text-sm font-semibold ${a.text}`,children:["0",i+1]}),o.jsx("span",{className:"text-foreground/85",children:n})]},n))})]})]}),o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",children:"Encaje típico"}),o.jsx("ul",{className:"mt-3 space-y-2",children:e.pain.map(n=>o.jsxs("li",{className:"flex items-start gap-2 text-sm text-foreground/80",children:[o.jsx(Fi,{className:`mt-0.5 h-4 w-4 shrink-0 ${a.text}`}),o.jsx("span",{children:n})]},n))})]}),o.jsxs("div",{className:"rounded-2xl border border-white/10 bg-white/[0.02] p-5",children:[o.jsx("p",{className:"text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",children:"Cómo trabajamos contigo"}),o.jsx("p",{className:"mt-2 text-base text-foreground",children:e.promise})]}),o.jsxs("div",{className:"mt-auto",children:[o.jsx(et,{href:"/contacto/",children:e.cta}),o.jsxs("a",{href:e.href,className:"ml-4 inline-flex items-center gap-2 text-sm font-medium text-link underline-offset-4 hover:underline",children:["Ver detalle",o.jsx(Bt,{className:"h-4 w-4"})]})]})]})]})]})}function f7(){const e=[{n:"01",icon:Fp,title:"Diagnóstico",text:"Revisión de nivel, temario, materiales, fecha y tipo de evaluación."},{n:"02",icon:Z6,title:"Objetivo",text:"Definición de prioridad: aprobar, subir nota, recuperar base o preparar una prueba."},{n:"03",icon:Zp,title:"Plan por bloques",text:"Orden semanal de contenidos, práctica y evidencias de progreso."},{n:"04",icon:Yu,title:"Trabajo guiado",text:"Explicación, resolución acompañada y lectura de errores frecuentes."},{n:"05",icon:x6,title:"Práctica y seguimiento",text:"Ejercicios, simulacros o tareas revisables entre sesiones."},{n:"06",icon:Pp,title:"Revisión",text:"Ajuste del plan cuando aparecen errores repetidos o cambios de calendario."}];return o.jsxs("section",{id:"metodo",className:"relative border-y border-white/5 py-24",children:[o.jsx("div",{className:"absolute inset-0 nebula-aurora opacity-60 pointer-events-none"}),o.jsxs("div",{className:"relative mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(tt,{children:"Cómo trabajamos"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["El método de ",o.jsx("span",{className:"nebula-gradient-text",children:"Método Nebula"})]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"El proceso se mantiene estable para que el alumno sepa qué se está trabajando y por qué. Lo que cambia es la intensidad, la materia y el calendario."})]}),o.jsx("ol",{className:"mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3",children:e.map(a=>o.jsxs("li",{className:"nebula-card group relative rounded-3xl p-7",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"font-display text-3xl font-bold text-action/80",children:a.n}),o.jsx(a.icon,{className:"h-5 w-5 text-action"})]}),o.jsx("h3",{className:"mt-4 text-lg font-semibold",children:a.title}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:a.text}),o.jsx("div",{className:"mt-6 nebula-hairline h-px w-full"})]},a.n))}),o.jsxs("div",{className:"mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:flex-row md:items-center",children:[o.jsxs("p",{className:"text-sm text-muted-foreground",children:[o.jsx("span",{className:"text-foreground",children:"Preparación sin improvisación."})," Método, calendario y seguimiento."]}),o.jsx(et,{href:"/contacto/",children:"Solicitar diagnóstico"})]})]})]})}function p7(){const e=["Graduado en Matemáticas.","Máster en Big Data e Inteligencia Artificial.","Experiencia profesional en tecnología.","Más de 6 años dando clases.","Alumnos desde ESO y Bachillerato hasta Universidad, exámenes internacionales y perfiles técnicos.","Especialización en asignaturas difíciles y procesos exigentes."];return o.jsx("section",{className:"py-24",children:o.jsx("div",{className:"mx-auto max-w-7xl px-6",children:o.jsxs("div",{className:"grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16",children:[o.jsxs("div",{children:[o.jsx(tt,{children:"Perfil de Método Nebula"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Formación con ",o.jsx("span",{className:"nebula-gradient-text",children:"rigor académico"})," y visión real del sector tecnológico"]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"No es lo mismo aprender con alguien que solo explica la asignatura que con alguien que la usa todos los días en el trabajo. Aquí entran la matemática, la ciencia, la programación y cómo se aplican de verdad fuera del aula."})]}),o.jsxs("div",{className:"nebula-card nebula-glow relative overflow-hidden rounded-3xl p-8 md:p-10",children:[o.jsx("div",{className:"absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-primary/30 via-violet/20 to-transparent blur-3xl"}),o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet ring-1 ring-white/20",children:o.jsx("span",{className:"font-display text-xl font-bold text-white",children:"N"})}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Perfil"}),o.jsx("p",{className:"font-display text-lg font-semibold",children:"Mentor académico & profesional"})]})]}),o.jsx("ul",{className:"mt-8 grid gap-3 sm:grid-cols-2",children:e.map(a=>o.jsxs("li",{className:"flex items-start gap-2 text-sm",children:[o.jsx(Fi,{className:"mt-0.5 h-4 w-4 shrink-0 text-action"}),o.jsx("span",{className:"text-foreground/90",children:a})]},a))}),o.jsx("div",{className:"mt-8 flex flex-wrap gap-2",children:["Matemáticas","Física","Química","Python","IA","Cloud","GMAT","IB"].map(a=>o.jsx("span",{className:"rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/80",children:a},a))})]})]})]})})})}function h7(){const e=["Grupos grandes","Ritmo estándar","Mismo material para todos","Poca personalización","Foco en cubrir temario","Difícil seguimiento individual"],a=["Enseñanza privada","Diagnóstico individual","Plan adaptado","Material personalizado","Foco en el objetivo","Seguimiento y calendario","Explicación profunda y práctica"];return o.jsx("section",{className:"border-y border-white/5 bg-background py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(tt,{children:"Método Nebula vs lo habitual"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["¿Por qué Método Nebula no funciona como una"," ",o.jsx("span",{className:"text-muted-foreground line-through decoration-action/40",children:"academia"}),"?"]})]}),o.jsxs("div",{className:"mt-12 grid gap-5 md:grid-cols-2",children:[o.jsxs("div",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-7",children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Academia tradicional"}),o.jsx("h3",{className:"mt-2 font-display text-xl font-semibold text-foreground/70",children:"Modelo de masas"}),o.jsx("ul",{className:"mt-6 space-y-3",children:e.map(t=>o.jsxs("li",{className:"flex items-start gap-3 text-sm text-muted-foreground",children:[o.jsx("span",{className:"mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40"}),t]},t))})]}),o.jsxs("div",{className:"nebula-card nebula-glow rounded-3xl p-7",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Ku,{className:"h-5 w-5"}),o.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-spark",children:"Modelo Método Nebula"})]}),o.jsx("h3",{className:"mt-2 font-display text-xl font-semibold",children:"Enseñanza privada premium"}),o.jsx("ul",{className:"mt-6 space-y-3",children:a.map(t=>o.jsxs("li",{className:"flex items-start gap-3 text-sm text-foreground/90",children:[o.jsx(Fi,{className:"mt-0.5 h-4 w-4 shrink-0 text-action"}),t]},t))})]})]})]})})}function v7(){const e=[{quote:"Contactamos con Nebula para ayudar a nuestro hijo Igor. Empezó ingeniería informática y no lo llevaba nada bien. Nos presentaron un método para aprender desde cero y han conseguido que Igor se interese mucho en la carrera. Contaremos con ellos para este curso y el siguiente. 100% recomendable.",name:"Luis",date:"Junio de 2026",meta:"Padre de alumno · Ingeniería Informática"},{quote:"Muy buen profesor, da muy buenos apuntes y su modelo de trabajo a largo plazo me ha servido mucho más que clases sueltas.",name:"Iván",date:"Junio de 2026",meta:"Alumno universitario"},{quote:"Contacté con Nebula para repaso de matemáticas de mi hija; la experiencia ha sido muy muy satisfactoria. Mi hija ha mejorado mucho con la asignatura y ahora disfruta y le gusta la materia. Saben transmitir bien al alumno, aportan los recursos necesarios y explican con paciencia los contenidos hasta asegurar su comprensión. Se preocupan por sus resultados. Lo recomiendo 100%.",name:"Cristina H L",date:"Junio de 2026",meta:"Madre de alumna · Matemáticas"},{quote:"Muy buena experiencia con Nebula. Explican los conceptos de forma clara y ordenada, incluso los temas más complejos. Hay paciencia para resolver dudas y se nota el dominio de la materia. Sus clases y material me han ayudado para preparar los exámenes de la uni y he ganado más confianza al hacer ejercicios y proyectos. Recomiendo totalmente sus clases.",name:"Álvaro Cebrián Sierra",date:"Junio de 2026",meta:"Alumno universitario"}];return o.jsx("section",{className:"py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",children:[o.jsxs("div",{className:"max-w-2xl",children:[o.jsx(tt,{children:"Resultados reales"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Historias de ",o.jsx("span",{className:"nebula-gradient-text",children:"progreso"})]})]}),o.jsx("a",{href:"https://www.tusclasesparticulares.com/profesores/nebula-lambda.htm",target:"_blank",rel:"noreferrer",className:"text-xs uppercase tracking-[0.18em] text-muted-foreground underline-offset-4 transition-colors hover:text-link hover:underline",children:"Opiniones verificadas en TusClasesParticulares"})]}),o.jsx("div",{className:"mt-12 grid gap-5 md:grid-cols-2",children:e.map(a=>o.jsxs("figure",{className:"nebula-card flex h-full flex-col justify-between rounded-3xl p-7",children:[o.jsxs("div",{children:[o.jsx("div",{className:"flex items-center gap-1 text-spark",children:Array.from({length:5}).map((t,n)=>o.jsx(V6,{className:"h-4 w-4 fill-current"},n))}),o.jsxs("blockquote",{className:"mt-4 text-sm leading-relaxed text-foreground/90",children:['"',a.quote,'"']})]}),o.jsxs("figcaption",{className:"mt-6 flex items-center justify-between gap-4",children:[o.jsx("span",{className:"font-display text-sm font-semibold",children:a.name}),o.jsxs("span",{className:"text-xs text-muted-foreground",children:[a.date," · ",a.meta]})]})]},a.name))})]})})}function g7(){const e=[{name:"Plan Asignatura",tagline:"Para dejar de ir a remolque de una asignatura y llegar al examen con criterio propio.",icon:_6,items:["Diagnóstico inicial de la asignatura","Clases semanales con objetivo claro","Material y ejercicios propios","Repaso de problemas tipo de examen","Revisión final antes de la prueba"],accent:"primary"},{name:"Plan Examen",tagline:"Para IB, GCSE, Selectividad, GMAT o TFG/TFM cuando la fecha ya no se mueve.",icon:Vu,items:["Calendario realista hasta el día del examen","Simulacros con corrección","Seguimiento semanal escrito","Priorización de temario por impacto","Estrategia final y gestión del día D"],accent:"gold",featured:!0},{name:"Plan Tecnología",tagline:"Para programación académica, datos o transición IT con una ruta ordenada.",icon:Xp,items:["Ruta personalizada a 3-6 meses","Formación técnica enfocada (Python, SQL, Data, IA)","Proyecto real para GitHub y portfolio","Revisión de CV y LinkedIn","Simulacros de entrevistas técnicas","Soft skills y storytelling profesional"],accent:"electric"}];return o.jsx("section",{id:"programas",className:"border-y border-white/5 py-24",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(tt,{children:"Elige tu camino"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Planes personalizados según"," ",o.jsx("span",{className:"nebula-gradient-text",children:"objetivo, nivel y calendario"})]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"Tres marcos de trabajo. Uno se elige tras la llamada de diagnóstico, no antes: primero entendemos tu caso, luego proponemos el plan."})]}),o.jsx("div",{className:"mt-14 grid gap-5 lg:grid-cols-3",children:e.map(a=>{const t=a2(a.accent);return o.jsxs("article",{className:`nebula-card relative flex h-full flex-col overflow-hidden rounded-3xl p-8 ${a.featured?"nebula-glow ring-1 ring-action/30":""}`,children:[a.featured&&o.jsx("span",{className:"absolute right-5 top-5 rounded-full border border-spark/40 bg-spark/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-spark",children:"Con fecha"}),o.jsx("div",{className:`flex h-12 w-12 items-center justify-center rounded-2xl ${t.soft} ring-1 ${t.ring}`,children:o.jsx(a.icon,{className:`h-6 w-6 ${t.text}`})}),o.jsx("h3",{className:"mt-6 font-display text-2xl font-semibold",children:a.name}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:a.tagline}),o.jsx("ul",{className:"mt-6 grow space-y-2.5",children:a.items.map(n=>o.jsxs("li",{className:"flex items-start gap-2 text-sm text-foreground/90",children:[o.jsx(Fi,{className:`mt-0.5 h-4 w-4 shrink-0 ${t.text}`}),n]},n))}),o.jsxs("div",{className:"mt-auto border-t border-white/8 pt-6",children:[o.jsx("p",{className:"text-xs text-muted-foreground",children:"Planes personalizados según objetivo, nivel y calendario."}),o.jsxs("a",{href:"/contacto/",className:"mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/[0.06]",children:["Solicitar diagnóstico",o.jsx(Bt,{className:"h-4 w-4"})]})]})]},a.name)})})]})})}function b7(){const{copied:e,copy:a}=n0();return o.jsxs("section",{id:"contacto",className:"relative py-24",children:[o.jsx("div",{className:"absolute inset-0 nebula-aurora opacity-60 pointer-events-none"}),o.jsx("div",{className:"relative mx-auto max-w-7xl px-6",children:o.jsxs("div",{className:"mx-auto max-w-3xl",children:[o.jsx(tt,{children:"Hablemos"}),o.jsxs("h2",{className:"mt-5 text-3xl font-semibold leading-tight md:text-5xl",children:["Empieza con una ",o.jsx("span",{className:"nebula-gradient-text",children:"llamada de diagnóstico"})]}),o.jsx("p",{className:"mt-5 text-base text-muted-foreground md:text-lg",children:"Una conversación corta para entender tu objetivo, tu punto de partida y tu fecha. Si Método Nebula encaja, te enviamos una propuesta concreta. Si no, te decimos qué haríamos en tu lugar."}),o.jsxs("div",{className:"mt-8 space-y-3",children:[o.jsxs("button",{type:"button",onClick:a,className:"flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors hover:border-white/25 hover:bg-white/[0.06]",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(a0,{className:"h-5 w-5 text-action"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-semibold",children:"Copiar número de WhatsApp"}),o.jsxs("p",{className:"text-xs text-muted-foreground",children:[Zu," · respuesta el mismo día"]})]})]}),e?o.jsx(z6,{className:"h-4 w-4 text-green-400"}):o.jsx($6,{className:"h-4 w-4 text-muted-foreground"})]}),o.jsxs("a",{href:Fu,className:"flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(Xu,{className:"h-5 w-5 text-action"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-semibold",children:"Email de admisiones"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:t0})]})]}),o.jsx(Bt,{className:"h-4 w-4 text-muted-foreground"})]}),o.jsxs("a",{href:Jp,target:"_blank",rel:"noreferrer",className:"flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(Kp,{className:"h-5 w-5 text-action"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-semibold",children:"@nebula.lambda"}),o.jsx("p",{className:"text-xs text-muted-foreground",children:"Instagram"})]})]}),o.jsx(Bt,{className:"h-4 w-4 text-muted-foreground"})]})]})]})})]})}function y7(){const e=[{q:"¿Das clases online o presenciales?",a:"Trabajamos principalmente online para flexibilidad y eficiencia. Sesiones presenciales puntuales según ubicación y necesidad."},{q:"¿Desde qué curso das clase?",a:"Trabajamos desde ESO en adelante: ESO, Bachillerato, Selectividad, programas internacionales, FP, Universidad y perfiles técnicos."},{q:"¿Puedo preparar un examen con poco tiempo?",a:"Sí, pero el diagnóstico decide qué es realista. Diseñamos un plan honesto según fecha, nivel y temario."},{q:"¿Ayudas con TFG/TFM?",a:"Sí, especialmente en TFG/TFM de áreas cuantitativas, data, IA, ingeniería o economía aplicada."},{q:"¿Preparas entrevistas técnicas?",a:"Sí. Algoritmos, SQL, system design, casos de data/IA, comportamiento y simulacros completos."},{q:"¿Las clases incluyen material?",a:"Sí. Apuntes, ejercicios, esquemas, simulacros y guías adaptadas a tu objetivo."},{q:"¿Cómo sé qué plan necesito?",a:"La llamada de diagnóstico lo resuelve. Te proponemos el plan tras entender tu contexto."},{q:"¿Cuánto cuesta?",a:"Los planes se personalizan según objetivo, alcance y calendario. Te enviamos una propuesta tras el diagnóstico."},{q:"¿Puedo hacer una primera llamada de diagnóstico?",a:"Sí. Es el punto de partida. Es donde definimos si Método Nebula encaja con tu objetivo."}];return o.jsx("section",{className:"border-t border-white/5 py-24",children:o.jsxs("div",{className:"mx-auto max-w-4xl px-6",children:[o.jsxs("div",{className:"text-center",children:[o.jsx(tt,{children:"FAQ"}),o.jsx("h2",{className:"mt-5 text-3xl font-semibold md:text-5xl",children:"Preguntas frecuentes"})]}),o.jsx("div",{className:"mt-12 divide-y divide-white/8 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02]",children:e.map((a,t)=>o.jsx(x7,{q:a.q,a:a.a,defaultOpen:t===0},a.q))}),o.jsx("div",{className:"mt-10 text-center",children:o.jsx(et,{href:"/contacto/",children:"Solicitar diagnóstico"})})]})})}function x7({q:e,a,defaultOpen:t}){const[n,i]=ga.useState(!!t);return o.jsxs("div",{children:[o.jsxs("button",{onClick:()=>i(r=>!r),className:"flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]",children:[o.jsx("span",{className:"text-base font-medium text-foreground",children:e}),o.jsx(j6,{className:`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${n?"rotate-180":""}`})]}),n&&o.jsx("div",{className:"px-6 pb-6 text-sm leading-relaxed text-muted-foreground",children:a})]})}class k extends Error{constructor(a,t){var n="KaTeX parse error: "+a,i,r,l=t&&t.loc;if(l&&l.start<=l.end){var s=l.lexer.input;i=l.start,r=l.end,i===s.length?n+=" at end of input: ":n+=" at position "+(i+1)+": ";var u=s.slice(i,r).replace(/[^]/g,"$&̲"),m;i>15?m="…"+s.slice(i-15,i):m=s.slice(0,i);var p;r+15<s.length?p=s.slice(r,r+15)+"…":p=s.slice(r),n+=m+u+p}super(n),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,k.prototype),this.position=i,i!=null&&r!=null&&(this.length=r-i),this.rawMessage=a}}var S7=/([A-Z])/g,z7=e=>e.replace(S7,"-$1").toLowerCase(),w7={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},j7=/[&><"']/g,ta=e=>String(e).replace(j7,a=>w7[a]),es=e=>e.type==="ordgroup"||e.type==="color"?e.body.length===1?es(e.body[0]):e:e.type==="font"?es(e.body):e,E7=new Set(["mathord","textord","atom"]),Lt=e=>E7.has(es(e).type),N7=e=>{var a=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return a?a[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(a[1])?null:a[1].toLowerCase():"_relative"},Sc={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,a)=>(a.push(e),a)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function A7(e){if(typeof e!="string")return e.enum[0];switch(e){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function q7(e){if(e.default!==void 0)return e.default;var a=Array.isArray(e.type)?e.type[0]:e.type;return A7(a)}function M7(e,a,t,n){var i=t[a];e[a]=i!==void 0?n.processor?n.processor(i):i:q7(n)}class Ju{constructor(a){a===void 0&&(a={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,a=a||{};for(var t of Object.keys(Sc)){var n=Sc[t];n&&M7(this,t,a,n)}}reportNonstrict(a,t,n){var i=this.strict;if(typeof i=="function"&&(i=i(a,t,n)),!(!i||i==="ignore")){if(i===!0||i==="error")throw new k("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+a+"]"),n);i==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+a+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+t+" ["+a+"]"))}}useStrictBehavior(a,t,n){var i=this.strict;if(typeof i=="function")try{i=i(a,t,n)}catch{i="error"}return!i||i==="ignore"?!1:i===!0||i==="error"?!0:i==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+a+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+t+" ["+a+"]")),!1)}isTrusted(a){if("url"in a&&a.url&&!a.protocol){var t=N7(a.url);if(t==null)return!1;a.protocol=t}var n=typeof this.trust=="function"?this.trust(a):this.trust;return!!n}}class Vt{constructor(a,t,n){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=a,this.size=t,this.cramped=n}sup(){return it[T7[this.id]]}sub(){return it[C7[this.id]]}fracNum(){return it[D7[this.id]]}fracDen(){return it[$7[this.id]]}cramp(){return it[k7[this.id]]}text(){return it[_7[this.id]]}isTight(){return this.size>=2}}var Iu=0,Cs=1,ji=2,Ct=3,Qr=4,Va=5,Oi=6,ca=7,it=[new Vt(Iu,0,!1),new Vt(Cs,0,!0),new Vt(ji,1,!1),new Vt(Ct,1,!0),new Vt(Qr,2,!1),new Vt(Va,2,!0),new Vt(Oi,3,!1),new Vt(ca,3,!0)],T7=[Qr,Va,Qr,Va,Oi,ca,Oi,ca],C7=[Va,Va,Va,Va,ca,ca,ca,ca],D7=[ji,Ct,Qr,Va,Oi,ca,Oi,ca],$7=[Ct,Ct,Va,Va,ca,ca,ca,ca],k7=[Cs,Cs,Ct,Ct,Va,Va,ca,ca],_7=[Iu,Cs,ji,Ct,ji,Ct,ji,Ct],F={DISPLAY:it[Iu],TEXT:it[ji],SCRIPT:it[Qr],SCRIPTSCRIPT:it[Oi]},zc=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function O7(e){for(var a=0;a<zc.length;a++)for(var t=zc[a],n=0;n<t.blocks.length;n++){var i=t.blocks[n];if(e>=i[0]&&e<=i[1])return t.name}return null}var as=[];zc.forEach(e=>e.blocks.forEach(a=>as.push(...a)));function t2(e){for(var a=0;a<as.length;a+=2)if(e>=as[a]&&e<=as[a+1])return!0;return!1}var Qe=e=>e+" "+e,ai=80,B7=function(a,t){return"M95,"+(622+a+t)+`
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
M`+(834+a)+" "+t+"h400000v"+(40+a)+"h-400000z"},R7=function(a,t){return"M263,"+(601+a+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+a/2.084+" -"+a+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+a)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+a)+" "+t+"h400000v"+(40+a)+"h-400000z"},U7=function(a,t){return"M983 "+(10+a+t)+`
l`+a/3.13+" -"+a+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+a)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+a)+" "+t+"h400000v"+(40+a)+"h-400000z"},L7=function(a,t){return"M424,"+(2398+a+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+a/4.223+" -"+a+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+a)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+a)+" "+t+`
h400000v`+(40+a)+"h-400000z"},H7=function(a,t){return"M473,"+(2713+a+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+a/5.298+" -"+a+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+a)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+a)+" "+t+"h400000v"+(40+a)+"H1017.7z"},G7=function(a){var t=a/2;return"M400000 "+a+" H0 L"+t+" 0 l65 45 L145 "+(a-80)+" H400000z"},Q7=function(a,t,n){var i=n-54-t-a;return"M702 "+(a+t)+"H400000"+(40+a)+`
H742v`+i+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+a)+"H742z"},Y7=function(a,t,n){t=1e3*t;var i="";switch(a){case"sqrtMain":i=B7(t,ai);break;case"sqrtSize1":i=R7(t,ai);break;case"sqrtSize2":i=U7(t,ai);break;case"sqrtSize3":i=L7(t,ai);break;case"sqrtSize4":i=H7(t,ai);break;case"sqrtTall":i=Q7(t,ai,n)}return i},V7=function(a,t){switch(a){case"⎜":return Qe("M291 0 H417 V"+t+" H291z");case"∣":return Qe("M145 0 H188 V"+t+" H145z");case"∥":return Qe("M145 0 H188 V"+t+" H145z")+Qe("M367 0 H410 V"+t+" H367z");case"⎟":return Qe("M457 0 H583 V"+t+" H457z");case"⎢":return Qe("M319 0 H403 V"+t+" H319z");case"⎥":return Qe("M263 0 H347 V"+t+" H263z");case"⎪":return Qe("M384 0 H504 V"+t+" H384z");case"⏐":return Qe("M312 0 H355 V"+t+" H312z");case"‖":return Qe("M257 0 H300 V"+t+" H257z")+Qe("M478 0 H521 V"+t+" H478z");default:return""}},e1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},X7=function(a,t){switch(a){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 v84 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function Z7(e){return"toText"in e}class Ki{constructor(a){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=a,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(a){return this.classes.includes(a)}toNode(){for(var a=document.createDocumentFragment(),t=0;t<this.children.length;t++)a.appendChild(this.children[t].toNode());return a}toMarkup(){for(var a="",t=0;t<this.children.length;t++)a+=this.children[t].toMarkup();return a}toText(){return this.children.map(a=>{if(Z7(a))return a.toText();throw new Error("Expected MathDomNode with toText, got "+a.constructor.name)}).join("")}}var wc={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},F7={ex:!0,em:!0,mu:!0},n2=function(a){return typeof a!="string"&&(a=a.unit),a in wc||a in F7||a==="ex"},Me=function(a,t){var n;if(a.unit in wc)n=wc[a.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(a.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var i;if(t.style.isTight()?i=t.havingStyle(t.style.text()):i=t,a.unit==="ex")n=i.fontMetrics().xHeight;else if(a.unit==="em")n=i.fontMetrics().quad;else throw new k("Invalid unit: '"+a.unit+"'");i!==t&&(n*=i.sizeMultiplier/t.sizeMultiplier)}return Math.min(a.number*n,t.maxSize)},O=function(a){return+a.toFixed(4)+"em"},yn=function(a){return a.filter(t=>t).join(" ")},Wu=function(a){var t="";for(var n of Object.keys(a)){var i=a[n];i!==void 0&&(t+=z7(n)+":"+i+";")}return t},i2=function(a,t,n){if(this.classes=a||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var i=t.getColor();i&&(this.style.color=i)}},r2=function(a){var t=document.createElement(a);t.className=yn(this.classes),Object.assign(t.style,this.style);for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var i=0;i<this.children.length;i++)t.appendChild(this.children[i].toNode());return t},K7=/[\s"'>/=\x00-\x1f]/,l2=function(a){var t="<"+a;this.classes.length&&(t+=' class="'+ta(yn(this.classes))+'"');var n=Wu(this.style);n&&(t+=' style="'+ta(n)+'"');for(var i of Object.keys(this.attributes)){if(K7.test(i))throw new k("Invalid attribute name '"+i+"'");t+=" "+i+'="'+ta(this.attributes[i])+'"'}t+=">";for(var r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t+="</"+a+">",t};class Pi{constructor(a,t,n,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,i2.call(this,a,n,i),this.children=t||[]}setAttribute(a,t){this.attributes[a]=t}hasClass(a){return this.classes.includes(a)}toNode(){return r2.call(this,"span")}toMarkup(){return l2.call(this,"span")}}class r0{constructor(a,t,n,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,i2.call(this,t,i),this.children=n||[],this.setAttribute("href",a)}setAttribute(a,t){this.attributes[a]=t}hasClass(a){return this.classes.includes(a)}toNode(){return r2.call(this,"a")}toMarkup(){return l2.call(this,"a")}}class P7{constructor(a,t,n){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=a,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(a){return this.classes.includes(a)}toNode(){var a=document.createElement("img");return a.src=this.src,a.alt=this.alt,a.className="mord",Object.assign(a.style,this.style),a}toMarkup(){var a='<img src="'+ta(this.src)+'"'+(' alt="'+ta(this.alt)+'"'),t=Wu(this.style);return t&&(a+=' style="'+ta(t)+'"'),a+="'/>",a}}var J7={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class $a{constructor(a,t,n,i,r,l,s,u){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=a,this.height=t||0,this.depth=n||0,this.italic=i||0,this.skew=r||0,this.width=l||0,this.classes=s||[],this.style=u||{},this.maxFontSize=0;var m=O7(this.text.charCodeAt(0));m&&this.classes.push(m+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=J7[this.text])}hasClass(a){return this.classes.includes(a)}toNode(){var a=document.createTextNode(this.text),t=null;return this.italic>0&&(t=document.createElement("span"),t.style.marginRight=O(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=yn(this.classes)),Object.keys(this.style).length>0&&(t=t||document.createElement("span"),Object.assign(t.style,this.style)),t?(t.appendChild(a),t):a}toMarkup(){var a=!1,t="<span";this.classes.length&&(a=!0,t+=' class="',t+=ta(yn(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+O(this.italic)+";"),n+=Wu(this.style),n&&(a=!0,t+=' style="'+ta(n)+'"');var i=ta(this.text);return a?(t+=">",t+=i,t+="</span>",t):i}}class Rt{constructor(a,t){this.children=void 0,this.attributes=void 0,this.children=a||[],this.attributes=t||{}}toNode(){var a="http://www.w3.org/2000/svg",t=document.createElementNS(a,"svg");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var i=0;i<this.children.length;i++)t.appendChild(this.children[i].toNode());return t}toMarkup(){var a='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))a+=" "+t+'="'+ta(this.attributes[t])+'"';a+=">";for(var n=0;n<this.children.length;n++)a+=this.children[n].toMarkup();return a+="</svg>",a}}class xn{constructor(a,t){this.pathName=void 0,this.alternate=void 0,this.pathName=a,this.alternate=t}toNode(){var a="http://www.w3.org/2000/svg",t=document.createElementNS(a,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",e1[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+ta(this.alternate)+'"/>':'<path d="'+ta(e1[this.pathName])+'"/>'}}class jc{constructor(a){this.attributes=void 0,this.attributes=a||{}}toNode(){var a="http://www.w3.org/2000/svg",t=document.createElementNS(a,"line");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var a="<line";for(var t of Object.keys(this.attributes))a+=" "+t+'="'+ta(this.attributes[t])+'"';return a+="/>",a}}function I7(e){if(e instanceof $a)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function W7(e){if(e instanceof Pi)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var ev=e=>e instanceof Pi||e instanceof r0||e instanceof Ki,ot={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Tl={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},a1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function av(e,a){ot[e]=a}function ed(e,a,t){if(!ot[a])throw new Error("Font metrics not found for font: "+a+".");var n=e.charCodeAt(0),i=ot[a][n];if(!i&&e[0]in a1&&(n=a1[e[0]].charCodeAt(0),i=ot[a][n]),!i&&t==="text"&&t2(n)&&(i=ot[a][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var to={};function tv(e){var a;if(e>=5?a=0:e>=3?a=1:a=2,!to[a]){var t=to[a]={cssEmPerMu:Tl.quad[a]/18};for(var n in Tl)Tl.hasOwnProperty(n)&&(t[n]=Tl[n][a])}return to[a]}var Ne={math:{},text:{}};function c(e,a,t,n,i,r){Ne[e][i]={font:a,group:t,replace:n},r&&n&&(Ne[e][n]=Ne[e][i])}var d="math",T="text",f="main",S="ams",Ae="accent-token",G="bin",da="close",Ji="inner",Q="mathord",Ge="op-token",ka="open",ll="punct",z="rel",Ht="spacing",j="textord";c(d,f,z,"≡","\\equiv",!0);c(d,f,z,"≺","\\prec",!0);c(d,f,z,"≻","\\succ",!0);c(d,f,z,"∼","\\sim",!0);c(d,f,z,"⊥","\\perp");c(d,f,z,"⪯","\\preceq",!0);c(d,f,z,"⪰","\\succeq",!0);c(d,f,z,"≃","\\simeq",!0);c(d,f,z,"∣","\\mid",!0);c(d,f,z,"≪","\\ll",!0);c(d,f,z,"≫","\\gg",!0);c(d,f,z,"≍","\\asymp",!0);c(d,f,z,"∥","\\parallel");c(d,f,z,"⋈","\\bowtie",!0);c(d,f,z,"⌣","\\smile",!0);c(d,f,z,"⊑","\\sqsubseteq",!0);c(d,f,z,"⊒","\\sqsupseteq",!0);c(d,f,z,"≐","\\doteq",!0);c(d,f,z,"⌢","\\frown",!0);c(d,f,z,"∋","\\ni",!0);c(d,f,z,"∝","\\propto",!0);c(d,f,z,"⊢","\\vdash",!0);c(d,f,z,"⊣","\\dashv",!0);c(d,f,z,"∋","\\owns");c(d,f,ll,".","\\ldotp");c(d,f,ll,"⋅","\\cdotp");c(d,f,ll,"⋅","·");c(T,f,j,"⋅","·");c(d,f,j,"#","\\#");c(T,f,j,"#","\\#");c(d,f,j,"&","\\&");c(T,f,j,"&","\\&");c(d,f,j,"ℵ","\\aleph",!0);c(d,f,j,"∀","\\forall",!0);c(d,f,j,"ℏ","\\hbar",!0);c(d,f,j,"∃","\\exists",!0);c(d,f,j,"∇","\\nabla",!0);c(d,f,j,"♭","\\flat",!0);c(d,f,j,"ℓ","\\ell",!0);c(d,f,j,"♮","\\natural",!0);c(d,f,j,"♣","\\clubsuit",!0);c(d,f,j,"℘","\\wp",!0);c(d,f,j,"♯","\\sharp",!0);c(d,f,j,"♢","\\diamondsuit",!0);c(d,f,j,"ℜ","\\Re",!0);c(d,f,j,"♡","\\heartsuit",!0);c(d,f,j,"ℑ","\\Im",!0);c(d,f,j,"♠","\\spadesuit",!0);c(d,f,j,"§","\\S",!0);c(T,f,j,"§","\\S");c(d,f,j,"¶","\\P",!0);c(T,f,j,"¶","\\P");c(d,f,j,"†","\\dag");c(T,f,j,"†","\\dag");c(T,f,j,"†","\\textdagger");c(d,f,j,"‡","\\ddag");c(T,f,j,"‡","\\ddag");c(T,f,j,"‡","\\textdaggerdbl");c(d,f,da,"⎱","\\rmoustache",!0);c(d,f,ka,"⎰","\\lmoustache",!0);c(d,f,da,"⟯","\\rgroup",!0);c(d,f,ka,"⟮","\\lgroup",!0);c(d,f,G,"∓","\\mp",!0);c(d,f,G,"⊖","\\ominus",!0);c(d,f,G,"⊎","\\uplus",!0);c(d,f,G,"⊓","\\sqcap",!0);c(d,f,G,"∗","\\ast");c(d,f,G,"⊔","\\sqcup",!0);c(d,f,G,"◯","\\bigcirc",!0);c(d,f,G,"∙","\\bullet",!0);c(d,f,G,"‡","\\ddagger");c(d,f,G,"≀","\\wr",!0);c(d,f,G,"⨿","\\amalg");c(d,f,G,"&","\\And");c(d,f,z,"⟵","\\longleftarrow",!0);c(d,f,z,"⇐","\\Leftarrow",!0);c(d,f,z,"⟸","\\Longleftarrow",!0);c(d,f,z,"⟶","\\longrightarrow",!0);c(d,f,z,"⇒","\\Rightarrow",!0);c(d,f,z,"⟹","\\Longrightarrow",!0);c(d,f,z,"↔","\\leftrightarrow",!0);c(d,f,z,"⟷","\\longleftrightarrow",!0);c(d,f,z,"⇔","\\Leftrightarrow",!0);c(d,f,z,"⟺","\\Longleftrightarrow",!0);c(d,f,z,"↦","\\mapsto",!0);c(d,f,z,"⟼","\\longmapsto",!0);c(d,f,z,"↗","\\nearrow",!0);c(d,f,z,"↩","\\hookleftarrow",!0);c(d,f,z,"↪","\\hookrightarrow",!0);c(d,f,z,"↘","\\searrow",!0);c(d,f,z,"↼","\\leftharpoonup",!0);c(d,f,z,"⇀","\\rightharpoonup",!0);c(d,f,z,"↙","\\swarrow",!0);c(d,f,z,"↽","\\leftharpoondown",!0);c(d,f,z,"⇁","\\rightharpoondown",!0);c(d,f,z,"↖","\\nwarrow",!0);c(d,f,z,"⇌","\\rightleftharpoons",!0);c(d,S,z,"≮","\\nless",!0);c(d,S,z,"","\\@nleqslant");c(d,S,z,"","\\@nleqq");c(d,S,z,"⪇","\\lneq",!0);c(d,S,z,"≨","\\lneqq",!0);c(d,S,z,"","\\@lvertneqq");c(d,S,z,"⋦","\\lnsim",!0);c(d,S,z,"⪉","\\lnapprox",!0);c(d,S,z,"⊀","\\nprec",!0);c(d,S,z,"⋠","\\npreceq",!0);c(d,S,z,"⋨","\\precnsim",!0);c(d,S,z,"⪹","\\precnapprox",!0);c(d,S,z,"≁","\\nsim",!0);c(d,S,z,"","\\@nshortmid");c(d,S,z,"∤","\\nmid",!0);c(d,S,z,"⊬","\\nvdash",!0);c(d,S,z,"⊭","\\nvDash",!0);c(d,S,z,"⋪","\\ntriangleleft");c(d,S,z,"⋬","\\ntrianglelefteq",!0);c(d,S,z,"⊊","\\subsetneq",!0);c(d,S,z,"","\\@varsubsetneq");c(d,S,z,"⫋","\\subsetneqq",!0);c(d,S,z,"","\\@varsubsetneqq");c(d,S,z,"≯","\\ngtr",!0);c(d,S,z,"","\\@ngeqslant");c(d,S,z,"","\\@ngeqq");c(d,S,z,"⪈","\\gneq",!0);c(d,S,z,"≩","\\gneqq",!0);c(d,S,z,"","\\@gvertneqq");c(d,S,z,"⋧","\\gnsim",!0);c(d,S,z,"⪊","\\gnapprox",!0);c(d,S,z,"⊁","\\nsucc",!0);c(d,S,z,"⋡","\\nsucceq",!0);c(d,S,z,"⋩","\\succnsim",!0);c(d,S,z,"⪺","\\succnapprox",!0);c(d,S,z,"≆","\\ncong",!0);c(d,S,z,"","\\@nshortparallel");c(d,S,z,"∦","\\nparallel",!0);c(d,S,z,"⊯","\\nVDash",!0);c(d,S,z,"⋫","\\ntriangleright");c(d,S,z,"⋭","\\ntrianglerighteq",!0);c(d,S,z,"","\\@nsupseteqq");c(d,S,z,"⊋","\\supsetneq",!0);c(d,S,z,"","\\@varsupsetneq");c(d,S,z,"⫌","\\supsetneqq",!0);c(d,S,z,"","\\@varsupsetneqq");c(d,S,z,"⊮","\\nVdash",!0);c(d,S,z,"⪵","\\precneqq",!0);c(d,S,z,"⪶","\\succneqq",!0);c(d,S,z,"","\\@nsubseteqq");c(d,S,G,"⊴","\\unlhd");c(d,S,G,"⊵","\\unrhd");c(d,S,z,"↚","\\nleftarrow",!0);c(d,S,z,"↛","\\nrightarrow",!0);c(d,S,z,"⇍","\\nLeftarrow",!0);c(d,S,z,"⇏","\\nRightarrow",!0);c(d,S,z,"↮","\\nleftrightarrow",!0);c(d,S,z,"⇎","\\nLeftrightarrow",!0);c(d,S,z,"△","\\vartriangle");c(d,S,j,"ℏ","\\hslash");c(d,S,j,"▽","\\triangledown");c(d,S,j,"◊","\\lozenge");c(d,S,j,"Ⓢ","\\circledS");c(d,S,j,"®","\\circledR");c(T,S,j,"®","\\circledR");c(d,S,j,"∡","\\measuredangle",!0);c(d,S,j,"∄","\\nexists");c(d,S,j,"℧","\\mho");c(d,S,j,"Ⅎ","\\Finv",!0);c(d,S,j,"⅁","\\Game",!0);c(d,S,j,"‵","\\backprime");c(d,S,j,"▲","\\blacktriangle");c(d,S,j,"▼","\\blacktriangledown");c(d,S,j,"■","\\blacksquare");c(d,S,j,"⧫","\\blacklozenge");c(d,S,j,"★","\\bigstar");c(d,S,j,"∢","\\sphericalangle",!0);c(d,S,j,"∁","\\complement",!0);c(d,S,j,"ð","\\eth",!0);c(T,f,j,"ð","ð");c(d,S,j,"╱","\\diagup");c(d,S,j,"╲","\\diagdown");c(d,S,j,"□","\\square");c(d,S,j,"□","\\Box");c(d,S,j,"◊","\\Diamond");c(d,S,j,"¥","\\yen",!0);c(T,S,j,"¥","\\yen",!0);c(d,S,j,"✓","\\checkmark",!0);c(T,S,j,"✓","\\checkmark");c(d,S,j,"ℶ","\\beth",!0);c(d,S,j,"ℸ","\\daleth",!0);c(d,S,j,"ℷ","\\gimel",!0);c(d,S,j,"ϝ","\\digamma",!0);c(d,S,j,"ϰ","\\varkappa");c(d,S,ka,"┌","\\@ulcorner",!0);c(d,S,da,"┐","\\@urcorner",!0);c(d,S,ka,"└","\\@llcorner",!0);c(d,S,da,"┘","\\@lrcorner",!0);c(d,S,z,"≦","\\leqq",!0);c(d,S,z,"⩽","\\leqslant",!0);c(d,S,z,"⪕","\\eqslantless",!0);c(d,S,z,"≲","\\lesssim",!0);c(d,S,z,"⪅","\\lessapprox",!0);c(d,S,z,"≊","\\approxeq",!0);c(d,S,G,"⋖","\\lessdot");c(d,S,z,"⋘","\\lll",!0);c(d,S,z,"≶","\\lessgtr",!0);c(d,S,z,"⋚","\\lesseqgtr",!0);c(d,S,z,"⪋","\\lesseqqgtr",!0);c(d,S,z,"≑","\\doteqdot");c(d,S,z,"≓","\\risingdotseq",!0);c(d,S,z,"≒","\\fallingdotseq",!0);c(d,S,z,"∽","\\backsim",!0);c(d,S,z,"⋍","\\backsimeq",!0);c(d,S,z,"⫅","\\subseteqq",!0);c(d,S,z,"⋐","\\Subset",!0);c(d,S,z,"⊏","\\sqsubset",!0);c(d,S,z,"≼","\\preccurlyeq",!0);c(d,S,z,"⋞","\\curlyeqprec",!0);c(d,S,z,"≾","\\precsim",!0);c(d,S,z,"⪷","\\precapprox",!0);c(d,S,z,"⊲","\\vartriangleleft");c(d,S,z,"⊴","\\trianglelefteq");c(d,S,z,"⊨","\\vDash",!0);c(d,S,z,"⊪","\\Vvdash",!0);c(d,S,z,"⌣","\\smallsmile");c(d,S,z,"⌢","\\smallfrown");c(d,S,z,"≏","\\bumpeq",!0);c(d,S,z,"≎","\\Bumpeq",!0);c(d,S,z,"≧","\\geqq",!0);c(d,S,z,"⩾","\\geqslant",!0);c(d,S,z,"⪖","\\eqslantgtr",!0);c(d,S,z,"≳","\\gtrsim",!0);c(d,S,z,"⪆","\\gtrapprox",!0);c(d,S,G,"⋗","\\gtrdot");c(d,S,z,"⋙","\\ggg",!0);c(d,S,z,"≷","\\gtrless",!0);c(d,S,z,"⋛","\\gtreqless",!0);c(d,S,z,"⪌","\\gtreqqless",!0);c(d,S,z,"≖","\\eqcirc",!0);c(d,S,z,"≗","\\circeq",!0);c(d,S,z,"≜","\\triangleq",!0);c(d,S,z,"∼","\\thicksim");c(d,S,z,"≈","\\thickapprox");c(d,S,z,"⫆","\\supseteqq",!0);c(d,S,z,"⋑","\\Supset",!0);c(d,S,z,"⊐","\\sqsupset",!0);c(d,S,z,"≽","\\succcurlyeq",!0);c(d,S,z,"⋟","\\curlyeqsucc",!0);c(d,S,z,"≿","\\succsim",!0);c(d,S,z,"⪸","\\succapprox",!0);c(d,S,z,"⊳","\\vartriangleright");c(d,S,z,"⊵","\\trianglerighteq");c(d,S,z,"⊩","\\Vdash",!0);c(d,S,z,"∣","\\shortmid");c(d,S,z,"∥","\\shortparallel");c(d,S,z,"≬","\\between",!0);c(d,S,z,"⋔","\\pitchfork",!0);c(d,S,z,"∝","\\varpropto");c(d,S,z,"◀","\\blacktriangleleft");c(d,S,z,"∴","\\therefore",!0);c(d,S,z,"∍","\\backepsilon");c(d,S,z,"▶","\\blacktriangleright");c(d,S,z,"∵","\\because",!0);c(d,S,z,"⋘","\\llless");c(d,S,z,"⋙","\\gggtr");c(d,S,G,"⊲","\\lhd");c(d,S,G,"⊳","\\rhd");c(d,S,z,"≂","\\eqsim",!0);c(d,f,z,"⋈","\\Join");c(d,S,z,"≑","\\Doteq",!0);c(d,S,G,"∔","\\dotplus",!0);c(d,S,G,"∖","\\smallsetminus");c(d,S,G,"⋒","\\Cap",!0);c(d,S,G,"⋓","\\Cup",!0);c(d,S,G,"⩞","\\doublebarwedge",!0);c(d,S,G,"⊟","\\boxminus",!0);c(d,S,G,"⊞","\\boxplus",!0);c(d,S,G,"⋇","\\divideontimes",!0);c(d,S,G,"⋉","\\ltimes",!0);c(d,S,G,"⋊","\\rtimes",!0);c(d,S,G,"⋋","\\leftthreetimes",!0);c(d,S,G,"⋌","\\rightthreetimes",!0);c(d,S,G,"⋏","\\curlywedge",!0);c(d,S,G,"⋎","\\curlyvee",!0);c(d,S,G,"⊝","\\circleddash",!0);c(d,S,G,"⊛","\\circledast",!0);c(d,S,G,"⋅","\\centerdot");c(d,S,G,"⊺","\\intercal",!0);c(d,S,G,"⋒","\\doublecap");c(d,S,G,"⋓","\\doublecup");c(d,S,G,"⊠","\\boxtimes",!0);c(d,S,z,"⇢","\\dashrightarrow",!0);c(d,S,z,"⇠","\\dashleftarrow",!0);c(d,S,z,"⇇","\\leftleftarrows",!0);c(d,S,z,"⇆","\\leftrightarrows",!0);c(d,S,z,"⇚","\\Lleftarrow",!0);c(d,S,z,"↞","\\twoheadleftarrow",!0);c(d,S,z,"↢","\\leftarrowtail",!0);c(d,S,z,"↫","\\looparrowleft",!0);c(d,S,z,"⇋","\\leftrightharpoons",!0);c(d,S,z,"↶","\\curvearrowleft",!0);c(d,S,z,"↺","\\circlearrowleft",!0);c(d,S,z,"↰","\\Lsh",!0);c(d,S,z,"⇈","\\upuparrows",!0);c(d,S,z,"↿","\\upharpoonleft",!0);c(d,S,z,"⇃","\\downharpoonleft",!0);c(d,f,z,"⊶","\\origof",!0);c(d,f,z,"⊷","\\imageof",!0);c(d,S,z,"⊸","\\multimap",!0);c(d,S,z,"↭","\\leftrightsquigarrow",!0);c(d,S,z,"⇉","\\rightrightarrows",!0);c(d,S,z,"⇄","\\rightleftarrows",!0);c(d,S,z,"↠","\\twoheadrightarrow",!0);c(d,S,z,"↣","\\rightarrowtail",!0);c(d,S,z,"↬","\\looparrowright",!0);c(d,S,z,"↷","\\curvearrowright",!0);c(d,S,z,"↻","\\circlearrowright",!0);c(d,S,z,"↱","\\Rsh",!0);c(d,S,z,"⇊","\\downdownarrows",!0);c(d,S,z,"↾","\\upharpoonright",!0);c(d,S,z,"⇂","\\downharpoonright",!0);c(d,S,z,"⇝","\\rightsquigarrow",!0);c(d,S,z,"⇝","\\leadsto");c(d,S,z,"⇛","\\Rrightarrow",!0);c(d,S,z,"↾","\\restriction");c(d,f,j,"‘","`");c(d,f,j,"$","\\$");c(T,f,j,"$","\\$");c(T,f,j,"$","\\textdollar");c(d,f,j,"%","\\%");c(T,f,j,"%","\\%");c(d,f,j,"_","\\_");c(T,f,j,"_","\\_");c(T,f,j,"_","\\textunderscore");c(d,f,j,"∠","\\angle",!0);c(d,f,j,"∞","\\infty",!0);c(d,f,j,"′","\\prime");c(d,f,j,"△","\\triangle");c(d,f,j,"Γ","\\Gamma",!0);c(d,f,j,"Δ","\\Delta",!0);c(d,f,j,"Θ","\\Theta",!0);c(d,f,j,"Λ","\\Lambda",!0);c(d,f,j,"Ξ","\\Xi",!0);c(d,f,j,"Π","\\Pi",!0);c(d,f,j,"Σ","\\Sigma",!0);c(d,f,j,"Υ","\\Upsilon",!0);c(d,f,j,"Φ","\\Phi",!0);c(d,f,j,"Ψ","\\Psi",!0);c(d,f,j,"Ω","\\Omega",!0);c(d,f,j,"A","Α");c(d,f,j,"B","Β");c(d,f,j,"E","Ε");c(d,f,j,"Z","Ζ");c(d,f,j,"H","Η");c(d,f,j,"I","Ι");c(d,f,j,"K","Κ");c(d,f,j,"M","Μ");c(d,f,j,"N","Ν");c(d,f,j,"O","Ο");c(d,f,j,"P","Ρ");c(d,f,j,"T","Τ");c(d,f,j,"X","Χ");c(d,f,j,"¬","\\neg",!0);c(d,f,j,"¬","\\lnot");c(d,f,j,"⊤","\\top");c(d,f,j,"⊥","\\bot");c(d,f,j,"∅","\\emptyset");c(d,S,j,"∅","\\varnothing");c(d,f,Q,"α","\\alpha",!0);c(d,f,Q,"β","\\beta",!0);c(d,f,Q,"γ","\\gamma",!0);c(d,f,Q,"δ","\\delta",!0);c(d,f,Q,"ϵ","\\epsilon",!0);c(d,f,Q,"ζ","\\zeta",!0);c(d,f,Q,"η","\\eta",!0);c(d,f,Q,"θ","\\theta",!0);c(d,f,Q,"ι","\\iota",!0);c(d,f,Q,"κ","\\kappa",!0);c(d,f,Q,"λ","\\lambda",!0);c(d,f,Q,"μ","\\mu",!0);c(d,f,Q,"ν","\\nu",!0);c(d,f,Q,"ξ","\\xi",!0);c(d,f,Q,"ο","\\omicron",!0);c(d,f,Q,"π","\\pi",!0);c(d,f,Q,"ρ","\\rho",!0);c(d,f,Q,"σ","\\sigma",!0);c(d,f,Q,"τ","\\tau",!0);c(d,f,Q,"υ","\\upsilon",!0);c(d,f,Q,"ϕ","\\phi",!0);c(d,f,Q,"χ","\\chi",!0);c(d,f,Q,"ψ","\\psi",!0);c(d,f,Q,"ω","\\omega",!0);c(d,f,Q,"ε","\\varepsilon",!0);c(d,f,Q,"ϑ","\\vartheta",!0);c(d,f,Q,"ϖ","\\varpi",!0);c(d,f,Q,"ϱ","\\varrho",!0);c(d,f,Q,"ς","\\varsigma",!0);c(d,f,Q,"φ","\\varphi",!0);c(d,f,G,"∗","*",!0);c(d,f,G,"+","+");c(d,f,G,"−","-",!0);c(d,f,G,"⋅","\\cdot",!0);c(d,f,G,"∘","\\circ",!0);c(d,f,G,"÷","\\div",!0);c(d,f,G,"±","\\pm",!0);c(d,f,G,"×","\\times",!0);c(d,f,G,"∩","\\cap",!0);c(d,f,G,"∪","\\cup",!0);c(d,f,G,"∖","\\setminus",!0);c(d,f,G,"∧","\\land");c(d,f,G,"∨","\\lor");c(d,f,G,"∧","\\wedge",!0);c(d,f,G,"∨","\\vee",!0);c(d,f,j,"√","\\surd");c(d,f,ka,"⟨","\\langle",!0);c(d,f,ka,"∣","\\lvert");c(d,f,ka,"∥","\\lVert");c(d,f,da,"?","?");c(d,f,da,"!","!");c(d,f,da,"⟩","\\rangle",!0);c(d,f,da,"∣","\\rvert");c(d,f,da,"∥","\\rVert");c(d,f,z,"=","=");c(d,f,z,":",":");c(d,f,z,"≈","\\approx",!0);c(d,f,z,"≅","\\cong",!0);c(d,f,z,"≥","\\ge");c(d,f,z,"≥","\\geq",!0);c(d,f,z,"←","\\gets");c(d,f,z,">","\\gt",!0);c(d,f,z,"∈","\\in",!0);c(d,f,z,"","\\@not");c(d,f,z,"⊂","\\subset",!0);c(d,f,z,"⊃","\\supset",!0);c(d,f,z,"⊆","\\subseteq",!0);c(d,f,z,"⊇","\\supseteq",!0);c(d,S,z,"⊈","\\nsubseteq",!0);c(d,S,z,"⊉","\\nsupseteq",!0);c(d,f,z,"⊨","\\models");c(d,f,z,"←","\\leftarrow",!0);c(d,f,z,"≤","\\le");c(d,f,z,"≤","\\leq",!0);c(d,f,z,"<","\\lt",!0);c(d,f,z,"→","\\rightarrow",!0);c(d,f,z,"→","\\to");c(d,S,z,"≱","\\ngeq",!0);c(d,S,z,"≰","\\nleq",!0);c(d,f,Ht," ","\\ ");c(d,f,Ht," ","\\space");c(d,f,Ht," ","\\nobreakspace");c(T,f,Ht," ","\\ ");c(T,f,Ht," "," ");c(T,f,Ht," ","\\space");c(T,f,Ht," ","\\nobreakspace");c(d,f,Ht,"","\\nobreak");c(d,f,Ht,"","\\allowbreak");c(d,f,ll,",",",");c(d,f,ll,";",";");c(d,S,G,"⊼","\\barwedge",!0);c(d,S,G,"⊻","\\veebar",!0);c(d,f,G,"⊙","\\odot",!0);c(d,f,G,"⊕","\\oplus",!0);c(d,f,G,"⊗","\\otimes",!0);c(d,f,j,"∂","\\partial",!0);c(d,f,G,"⊘","\\oslash",!0);c(d,S,G,"⊚","\\circledcirc",!0);c(d,S,G,"⊡","\\boxdot",!0);c(d,f,G,"△","\\bigtriangleup");c(d,f,G,"▽","\\bigtriangledown");c(d,f,G,"†","\\dagger");c(d,f,G,"⋄","\\diamond");c(d,f,G,"⋆","\\star");c(d,f,G,"◃","\\triangleleft");c(d,f,G,"▹","\\triangleright");c(d,f,ka,"{","\\{");c(T,f,j,"{","\\{");c(T,f,j,"{","\\textbraceleft");c(d,f,da,"}","\\}");c(T,f,j,"}","\\}");c(T,f,j,"}","\\textbraceright");c(d,f,ka,"{","\\lbrace");c(d,f,da,"}","\\rbrace");c(d,f,ka,"[","\\lbrack",!0);c(T,f,j,"[","\\lbrack",!0);c(d,f,da,"]","\\rbrack",!0);c(T,f,j,"]","\\rbrack",!0);c(d,f,ka,"(","\\lparen",!0);c(d,f,da,")","\\rparen",!0);c(T,f,j,"<","\\textless",!0);c(T,f,j,">","\\textgreater",!0);c(d,f,ka,"⌊","\\lfloor",!0);c(d,f,da,"⌋","\\rfloor",!0);c(d,f,ka,"⌈","\\lceil",!0);c(d,f,da,"⌉","\\rceil",!0);c(d,f,j,"\\","\\backslash");c(d,f,j,"∣","|");c(d,f,j,"∣","\\vert");c(T,f,j,"|","\\textbar",!0);c(d,f,j,"∥","\\|");c(d,f,j,"∥","\\Vert");c(T,f,j,"∥","\\textbardbl");c(T,f,j,"~","\\textasciitilde");c(T,f,j,"\\","\\textbackslash");c(T,f,j,"^","\\textasciicircum");c(d,f,z,"↑","\\uparrow",!0);c(d,f,z,"⇑","\\Uparrow",!0);c(d,f,z,"↓","\\downarrow",!0);c(d,f,z,"⇓","\\Downarrow",!0);c(d,f,z,"↕","\\updownarrow",!0);c(d,f,z,"⇕","\\Updownarrow",!0);c(d,f,Ge,"∐","\\coprod");c(d,f,Ge,"⋁","\\bigvee");c(d,f,Ge,"⋀","\\bigwedge");c(d,f,Ge,"⨄","\\biguplus");c(d,f,Ge,"⋂","\\bigcap");c(d,f,Ge,"⋃","\\bigcup");c(d,f,Ge,"∫","\\int");c(d,f,Ge,"∫","\\intop");c(d,f,Ge,"∬","\\iint");c(d,f,Ge,"∭","\\iiint");c(d,f,Ge,"∏","\\prod");c(d,f,Ge,"∑","\\sum");c(d,f,Ge,"⨂","\\bigotimes");c(d,f,Ge,"⨁","\\bigoplus");c(d,f,Ge,"⨀","\\bigodot");c(d,f,Ge,"∮","\\oint");c(d,f,Ge,"∯","\\oiint");c(d,f,Ge,"∰","\\oiiint");c(d,f,Ge,"⨆","\\bigsqcup");c(d,f,Ge,"∫","\\smallint");c(T,f,Ji,"…","\\textellipsis");c(d,f,Ji,"…","\\mathellipsis");c(T,f,Ji,"…","\\ldots",!0);c(d,f,Ji,"…","\\ldots",!0);c(d,f,Ji,"⋯","\\@cdots",!0);c(d,f,Ji,"⋱","\\ddots",!0);c(d,f,j,"⋮","\\varvdots");c(T,f,j,"⋮","\\varvdots");c(d,f,Ae,"ˊ","\\acute");c(d,f,Ae,"ˋ","\\grave");c(d,f,Ae,"¨","\\ddot");c(d,f,Ae,"~","\\tilde");c(d,f,Ae,"ˉ","\\bar");c(d,f,Ae,"˘","\\breve");c(d,f,Ae,"ˇ","\\check");c(d,f,Ae,"^","\\hat");c(d,f,Ae,"⃗","\\vec");c(d,f,Ae,"˙","\\dot");c(d,f,Ae,"˚","\\mathring");c(d,f,Q,"","\\@imath");c(d,f,Q,"","\\@jmath");c(d,f,j,"ı","ı");c(d,f,j,"ȷ","ȷ");c(T,f,j,"ı","\\i",!0);c(T,f,j,"ȷ","\\j",!0);c(T,f,j,"ß","\\ss",!0);c(T,f,j,"æ","\\ae",!0);c(T,f,j,"œ","\\oe",!0);c(T,f,j,"ø","\\o",!0);c(T,f,j,"Æ","\\AE",!0);c(T,f,j,"Œ","\\OE",!0);c(T,f,j,"Ø","\\O",!0);c(T,f,Ae,"ˊ","\\'");c(T,f,Ae,"ˋ","\\`");c(T,f,Ae,"ˆ","\\^");c(T,f,Ae,"˜","\\~");c(T,f,Ae,"ˉ","\\=");c(T,f,Ae,"˘","\\u");c(T,f,Ae,"˙","\\.");c(T,f,Ae,"¸","\\c");c(T,f,Ae,"˚","\\r");c(T,f,Ae,"ˇ","\\v");c(T,f,Ae,"¨",'\\"');c(T,f,Ae,"˝","\\H");c(T,f,Ae,"◯","\\textcircled");var s2={"--":!0,"---":!0,"``":!0,"''":!0};c(T,f,j,"–","--",!0);c(T,f,j,"–","\\textendash");c(T,f,j,"—","---",!0);c(T,f,j,"—","\\textemdash");c(T,f,j,"‘","`",!0);c(T,f,j,"‘","\\textquoteleft");c(T,f,j,"’","'",!0);c(T,f,j,"’","\\textquoteright");c(T,f,j,"“","``",!0);c(T,f,j,"“","\\textquotedblleft");c(T,f,j,"”","''",!0);c(T,f,j,"”","\\textquotedblright");c(d,f,j,"°","\\degree",!0);c(T,f,j,"°","\\degree");c(T,f,j,"°","\\textdegree",!0);c(d,f,j,"£","\\pounds");c(d,f,j,"£","\\mathsterling",!0);c(T,f,j,"£","\\pounds");c(T,f,j,"£","\\textsterling",!0);c(d,S,j,"✠","\\maltese");c(T,S,j,"✠","\\maltese");var t1='0123456789/@."';for(var no=0;no<t1.length;no++){var n1=t1.charAt(no);c(d,f,j,n1,n1)}var i1='0123456789!@*()-=+";:?/.,';for(var io=0;io<i1.length;io++){var r1=i1.charAt(io);c(T,f,j,r1,r1)}var Ds="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var ro=0;ro<Ds.length;ro++){var Cl=Ds.charAt(ro);c(d,f,Q,Cl,Cl),c(T,f,j,Cl,Cl)}c(d,S,j,"C","ℂ");c(T,S,j,"C","ℂ");c(d,S,j,"H","ℍ");c(T,S,j,"H","ℍ");c(d,S,j,"N","ℕ");c(T,S,j,"N","ℕ");c(d,S,j,"P","ℙ");c(T,S,j,"P","ℙ");c(d,S,j,"Q","ℚ");c(T,S,j,"Q","ℚ");c(d,S,j,"R","ℝ");c(T,S,j,"R","ℝ");c(d,S,j,"Z","ℤ");c(T,S,j,"Z","ℤ");c(d,f,Q,"h","ℎ");c(T,f,Q,"h","ℎ");var V;for(var ra=0;ra<Ds.length;ra++){var Te=Ds.charAt(ra);V=String.fromCharCode(55349,56320+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56372+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56424+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56580+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56684+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56736+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56788+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56840+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56944+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),ra<26&&(V=String.fromCharCode(55349,56632+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V),V=String.fromCharCode(55349,56476+ra),c(d,f,Q,Te,V),c(T,f,j,Te,V))}V="𝕜";c(d,f,Q,"k",V);c(T,f,j,"k",V);for(var qn=0;qn<10;qn++){var Xt=qn.toString();V=String.fromCharCode(55349,57294+qn),c(d,f,Q,Xt,V),c(T,f,j,Xt,V),V=String.fromCharCode(55349,57314+qn),c(d,f,Q,Xt,V),c(T,f,j,Xt,V),V=String.fromCharCode(55349,57324+qn),c(d,f,Q,Xt,V),c(T,f,j,Xt,V),V=String.fromCharCode(55349,57334+qn),c(d,f,Q,Xt,V),c(T,f,j,Xt,V)}var Ec="ÐÞþ";for(var lo=0;lo<Ec.length;lo++){var Dl=Ec.charAt(lo);c(d,f,Q,Dl,Dl),c(T,f,j,Dl,Dl)}var Nc={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},l1={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},s1={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},nv={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},kn={mathClass:"",textClass:"",font:""},o1={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},c1={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},u1={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},Ac={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},qc={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},d1={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},Mc={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},m1=[Nc,Nc,l1,l1,s1,s1,nv,kn,kn,kn,o1,o1,c1,c1,u1,u1,Ac,Ac,qc,qc,d1,d1,kn,kn,Mc,Mc],iv=[Nc,kn,Ac,qc,Mc],rv=e=>{var a=e.charCodeAt(0),t=e.charCodeAt(1),n=(a-55296)*1024+(t-56320)+65536;if(119808<=n&&n<120484){var i=Math.floor((n-119808)/26);return m1[i]}else if(120782<=n&&n<=120831){var r=Math.floor((n-120782)/10);return iv[r]}else{if(n===120485||n===120486)return m1[0];if(120486<n&&n<120782)return kn;throw new k("Unsupported character: "+e)}},l0=function(a,t,n){if(Ne[n][a]){var i=Ne[n][a].replace;i&&(a=i)}return{value:a,metrics:ed(a,t,n)}},sa=function(a,t,n,i,r){var l=l0(a,t,n),s=l.metrics;a=l.value;var u;if(s){var m=s.italic;(n==="text"||i&&i.font==="mathit")&&(m=0),u=new $a(a,s.height,s.depth,m,s.skew,s.width,r)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+a+"' in style '"+t+"' and mode '"+n+"'")),u=new $a(a,0,0,0,0,0,r);if(i){u.maxFontSize=i.sizeMultiplier,i.style.isTight()&&u.classes.push("mtight");var p=i.getColor();p&&(u.style.color=p)}return u},ad=function(a,t,n,i){return i===void 0&&(i=[]),n.font==="boldsymbol"&&l0(a,"Main-Bold",t).metrics?sa(a,"Main-Bold",t,n,i.concat(["mathbf"])):a==="\\"||Ne[t][a].font==="main"?sa(a,"Main-Regular",t,n,i):sa(a,"AMS-Regular",t,n,i.concat(["amsrm"]))},lv=function(a,t,n){return n!=="textord"&&l0(a,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},s0=function(a,t){var n=a.type==="mathord"?"mathord":"textord",i=a.mode,r=a.text,l=["mord"],{font:s,fontFamily:u,fontWeight:m,fontShape:p}=t,g=i==="math"||i==="text"&&!!s,v=g?s:u,b="",N="";if(r.charCodeAt(0)===55349){var A=rv(r);b=A.font,N=A[i+"Class"]}if(b)return sa(r,b,i,t,l.concat(N));if(v){var M,x;if(v==="boldsymbol"){var y=lv(r,i,n);M=y.fontName,x=[y.fontClass]}else g?(M=Tc[s].fontName,x=[s]):(M=$l(u,m,p),x=[u,m,p]);if(l0(r,M,i).metrics)return sa(r,M,i,t,l.concat(x));if(s2.hasOwnProperty(r)&&M.slice(0,10)==="Typewriter"){for(var w=[],E=0;E<r.length;E++)w.push(sa(r[E],M,i,t,l.concat(x)));return Gt(w)}}if(n==="mathord")return sa(r,"Math-Italic",i,t,l.concat(["mathnormal"]));if(n==="textord"){var $=Ne[i][r]&&Ne[i][r].font;if($==="ams"){var B=$l("amsrm",m,p);return sa(r,B,i,t,l.concat("amsrm",m,p))}else if($==="main"||!$){var C=$l("textrm",m,p);return sa(r,C,i,t,l.concat(m,p))}else{var U=$l($,m,p);return sa(r,U,i,t,l.concat(U,m,p))}}else throw new Error("unexpected type: "+n+" in makeOrd")},sv=(e,a)=>{if(yn(e.classes)!==yn(a.classes)||e.skew!==a.skew||e.maxFontSize!==a.maxFontSize||e.italic!==0&&e.hasClass("mathnormal"))return!1;if(e.classes.length===1){var t=e.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n of Object.keys(e.style))if(e.style[n]!==a.style[n])return!1;for(var i of Object.keys(a.style))if(e.style[i]!==a.style[i])return!1;return!0},o2=e=>{for(var a=0;a<e.length-1;a++){var t=e[a],n=e[a+1];t instanceof $a&&n instanceof $a&&sv(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,e.splice(a+1,1),a--)}return e},td=function(a){for(var t=0,n=0,i=0,r=0;r<a.children.length;r++){var l=a.children[r];l.height>t&&(t=l.height),l.depth>n&&(n=l.depth),l.maxFontSize>i&&(i=l.maxFontSize)}a.height=t,a.depth=n,a.maxFontSize=i},D=function(a,t,n,i){var r=new Pi(a,t,n,i);return td(r),r},Sn=(e,a,t,n)=>new Pi(e,a,t,n),Bi=function(a,t,n){var i=D([a],[],t);return i.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),i.style.borderBottomWidth=O(i.height),i.maxFontSize=1,i},ov=function(a,t,n,i){var r=new r0(a,t,n,i);return td(r),r},Gt=function(a){var t=new Ki(a);return td(t),t},Ri=function(a,t){return a instanceof Ki?D([],[a],t):a},cv=function(a){if(a.positionType==="individualShift"){for(var t=a.children,n=[t[0]],i=-t[0].shift-t[0].elem.depth,r=i,l=1;l<t.length;l++){var s=-t[l].shift-r-t[l].elem.depth,u=s-(t[l-1].elem.height+t[l-1].elem.depth);r=r+s,n.push({type:"kern",size:u}),n.push(t[l])}return{children:n,depth:i}}var m;if(a.positionType==="top"){for(var p=a.positionData,g=0;g<a.children.length;g++){var v=a.children[g];p-=v.type==="kern"?v.size:v.elem.height+v.elem.depth}m=p}else if(a.positionType==="bottom")m=-a.positionData;else{var b=a.children[0];if(b.type!=="elem")throw new Error('First child must have type "elem".');if(a.positionType==="shift")m=-b.elem.depth-a.positionData;else if(a.positionType==="firstBaseline")m=-b.elem.depth;else throw new Error("Invalid positionType "+a.positionType+".")}return{children:a.children,depth:m}},re=function(a,t){for(var{children:n,depth:i}=cv(a),r=0,l=0;l<n.length;l++){var s=n[l];if(s.type==="elem"){var u=s.elem;r=Math.max(r,u.maxFontSize,u.height)}}r+=2;var m=D(["pstrut"],[]);m.style.height=O(r);for(var p=[],g=i,v=i,b=i,N=0;N<n.length;N++){var A=n[N];if(A.type==="kern")b+=A.size;else{var M=A.elem,x=A.wrapperClasses||[],y=A.wrapperStyle||{},w=D(x,[m,M],void 0,y);w.style.top=O(-r-b-M.depth),A.marginLeft&&(w.style.marginLeft=A.marginLeft),A.marginRight&&(w.style.marginRight=A.marginRight),p.push(w),b+=M.height+M.depth}g=Math.min(g,b),v=Math.max(v,b)}var E=D(["vlist"],p);E.style.height=O(v);var $;if(g<0){var B=D([],[]),C=D(["vlist"],[B]);C.style.height=O(-g);var U=D(["vlist-s"],[new $a("​")]);$=[D(["vlist-r"],[E,U]),D(["vlist-r"],[C])]}else $=[D(["vlist-r"],[E])];var L=D(["vlist-t"],$);return $.length===2&&L.classes.push("vlist-t2"),L.height=v,L.depth=-g,L},c2=(e,a)=>{var t=D(["mspace"],[],a),n=Me(e,a);return t.style.marginRight=O(n),t},$l=(e,a,t)=>{var n,i;switch(e){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=e}return a==="textbf"&&t==="textit"?i="BoldItalic":a==="textbf"?i="Bold":t==="textit"?i="Italic":i="Regular",n+"-"+i},Tc={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},u2={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},d2=function(a,t){var[n,i,r]=u2[a],l=new xn(n),s=new Rt([l],{width:O(i),height:O(r),style:"width:"+O(i),viewBox:"0 0 "+1e3*i+" "+1e3*r,preserveAspectRatio:"xMinYMin"}),u=Sn(["overlay"],[s],t);return u.height=r,u.style.height=O(r),u.style.width=O(i),u},qe={number:3,unit:"mu"},Mn={number:4,unit:"mu"},xt={number:5,unit:"mu"},uv={mord:{mop:qe,mbin:Mn,mrel:xt,minner:qe},mop:{mord:qe,mop:qe,mrel:xt,minner:qe},mbin:{mord:Mn,mop:Mn,mopen:Mn,minner:Mn},mrel:{mord:xt,mop:xt,mopen:xt,minner:xt},mopen:{},mclose:{mop:qe,mbin:Mn,mrel:xt,minner:qe},mpunct:{mord:qe,mop:qe,mrel:xt,mopen:qe,mclose:qe,mpunct:qe,minner:qe},minner:{mord:qe,mop:qe,mbin:Mn,mrel:xt,mopen:qe,mpunct:qe,minner:qe}},dv={mord:{mop:qe},mop:{mord:qe,mop:qe},mbin:{},mrel:{},mopen:{},mclose:{mop:qe},mpunct:{},minner:{mop:qe}},m2={},Yr={},Vr={};function H(e){for(var{type:a,names:t,htmlBuilder:n,mathmlBuilder:i}=e,r=0;r<t.length;++r)m2[t[r]]=e;a&&(n&&(Yr[a]=n),i&&(Vr[a]=i))}function Pn(e){var{type:a,htmlBuilder:t,mathmlBuilder:n}=e;t&&(Yr[a]=t),n&&(Vr[a]=n)}var $s=function(a){return a.type==="ordgroup"&&a.body.length===1?a.body[0]:a},Le=function(a){return a.type==="ordgroup"?a.body:[a]},mv=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),fv=new Set(["rightmost","mrel","mclose","mpunct"]),pv={display:F.DISPLAY,text:F.TEXT,script:F.SCRIPT,scriptscript:F.SCRIPTSCRIPT},hv={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Xe=function(a,t,n,i){i===void 0&&(i=[null,null]);for(var r=[],l=0;l<a.length;l++){var s=se(a[l],t);if(s instanceof Ki){var u=s.children;r.push(...u)}else r.push(s)}if(o2(r),!n)return r;var m=t;if(a.length===1){var p=a[0];p.type==="sizing"?m=t.havingSize(p.size):p.type==="styling"&&(m=t.havingStyle(pv[p.style]))}var g=D([i[0]||"leftmost"],[],t),v=D([i[1]||"rightmost"],[],t),b=n==="root";return Cc(r,(N,A)=>{var M=A.classes[0],x=N.classes[0];M==="mbin"&&fv.has(x)?A.classes[0]="mord":x==="mbin"&&mv.has(M)&&(N.classes[0]="mord")},{node:g},v,b),Cc(r,(N,A)=>{var M,x,y=$c(A),w=$c(N),E=y&&w?N.hasClass("mtight")?(M=dv[y])==null?void 0:M[w]:(x=uv[y])==null?void 0:x[w]:null;if(E)return c2(E,m)},{node:g},v,b),r},Cc=function(a,t,n,i,r){i&&a.push(i);for(var l=0;l<a.length;l++){var s=a[l],u=f2(s);if(u){Cc(u.children,t,n,null,r);continue}var m=!s.hasClass("mspace");if(m){var p=t(s,n.node);p&&(n.insertAfter?n.insertAfter(p):(a.unshift(p),l++))}m?n.node=s:r&&s.hasClass("newline")&&(n.node=D(["leftmost"])),n.insertAfter=(g=>v=>{a.splice(g+1,0,v),l++})(l)}i&&a.pop()},f2=function(a){return a instanceof Ki||a instanceof r0||a instanceof Pi&&a.hasClass("enclosing")?a:null},Dc=function(a,t){var n=f2(a);if(n){var i=n.children;if(i.length){if(t==="right")return Dc(i[i.length-1],"right");if(t==="left")return Dc(i[0],"left")}}return a},$c=function(a,t){if(!a)return null;t&&(a=Dc(a,t));var n=a.classes[0];return hv[n]||null},Xr=function(a,t){var n=["nulldelimiter"].concat(a.baseSizingClasses());return D(t.concat(n))},se=function(a,t,n){if(!a)return D();if(Yr[a.type]){var i=Yr[a.type](a,t);if(n&&t.size!==n.size){i=D(t.sizingClasses(n),[i],t);var r=t.sizeMultiplier/n.sizeMultiplier;i.height*=r,i.depth*=r}return i}else throw new k("Got group of unknown type: '"+a.type+"'")};function kl(e,a){var t=D(["base"],e,a),n=D(["strut"]);return n.style.height=O(t.height+t.depth),t.depth&&(n.style.verticalAlign=O(-t.depth)),t.children.unshift(n),t}function kc(e,a){var t=null;e.length===1&&e[0].type==="tag"&&(t=e[0].tag,e=e[0].body);var n=Xe(e,a,"root"),i;n.length===2&&n[1].hasClass("tag")&&(i=n.pop());for(var r=[],l=[],s=0;s<n.length;s++)if(l.push(n[s]),n[s].hasClass("mbin")||n[s].hasClass("mrel")||n[s].hasClass("allowbreak")){for(var u=!1;s<n.length-1&&n[s+1].hasClass("mspace")&&!n[s+1].hasClass("newline");)s++,l.push(n[s]),n[s].hasClass("nobreak")&&(u=!0);u||(r.push(kl(l,a)),l=[])}else n[s].hasClass("newline")&&(l.pop(),l.length>0&&(r.push(kl(l,a)),l=[]),r.push(n[s]));l.length>0&&r.push(kl(l,a));var m;t?(m=kl(Xe(t,a,!0),a),m.classes=["tag"],r.push(m)):i&&r.push(i);var p=D(["katex-html"],r);if(p.setAttribute("aria-hidden","true"),m){var g=m.children[0];g.style.height=O(p.height+p.depth),p.depth&&(g.style.verticalAlign=O(-p.depth))}return p}function p2(e){return new Ki(e)}class _{constructor(a,t,n){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=a,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(a,t){this.attributes[a]=t}getAttribute(a){return this.attributes[a]}toNode(){var a=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&a.setAttribute(t,this.attributes[t]);this.classes.length>0&&(a.className=yn(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof He&&this.children[n+1]instanceof He){for(var i=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof He;)i+=this.children[++n].toText();a.appendChild(new He(i).toNode())}else a.appendChild(this.children[n].toNode());return a}toMarkup(){var a="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(a+=" "+t+'="',a+=ta(this.attributes[t]),a+='"');this.classes.length>0&&(a+=' class ="'+ta(yn(this.classes))+'"'),a+=">";for(var n=0;n<this.children.length;n++)a+=this.children[n].toMarkup();return a+="</"+this.type+">",a}toText(){return this.children.map(a=>a.toText()).join("")}}class He{constructor(a){this.text=void 0,this.text=a}toNode(){return document.createTextNode(this.text)}toMarkup(){return ta(this.toText())}toText(){return this.text}}class h2{constructor(a){this.width=void 0,this.character=void 0,this.width=a,a>=.05555&&a<=.05556?this.character=" ":a>=.1666&&a<=.1667?this.character=" ":a>=.2222&&a<=.2223?this.character=" ":a>=.2777&&a<=.2778?this.character="  ":a>=-.05556&&a<=-.05555?this.character=" ⁣":a>=-.1667&&a<=-.1666?this.character=" ⁣":a>=-.2223&&a<=-.2222?this.character=" ⁣":a>=-.2778&&a<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var a=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return a.setAttribute("width",O(this.width)),a}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+O(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var vv=new Set(["\\imath","\\jmath"]),gv=new Set(["mrow","mtable"]),Ka=function(a,t,n){return Ne[t][a]&&Ne[t][a].replace&&a.charCodeAt(0)!==55349&&!(s2.hasOwnProperty(a)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(a=Ne[t][a].replace),new He(a)},nd=function(a){return a.length===1?a[0]:new _("mrow",a)},bv={mathit:"italic",boldsymbol:e=>e.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},id=(e,a)=>{if(e.mode==="text"){if(a.fontFamily==="texttt")return"monospace";if(a.fontFamily==="textsf")return a.fontShape==="textit"&&a.fontWeight==="textbf"?"sans-serif-bold-italic":a.fontShape==="textit"?"sans-serif-italic":a.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(a.fontShape==="textit"&&a.fontWeight==="textbf")return"bold-italic";if(a.fontShape==="textit")return"italic";if(a.fontWeight==="textbf")return"bold"}var t=a.font;if(!t||t==="mathnormal")return null;var n=e.mode,i=bv[t];if(i)return typeof i=="function"?i(e):i;var r=e.text;if(vv.has(r))return null;if(Ne[n][r]){var l=Ne[n][r].replace;l&&(r=l)}var s=Tc[t].fontName;return ed(r,s,n)?Tc[t].variant:null};function so(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var a=e.children[0];return a instanceof He&&a.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var t=e.children[0];return t instanceof He&&t.text===","}else return!1}var _a=function(a,t,n){if(a.length===1){var i=ve(a[0],t);return n&&i instanceof _&&i.type==="mo"&&(i.setAttribute("lspace","0em"),i.setAttribute("rspace","0em")),[i]}for(var r=[],l,s=0;s<a.length;s++){var u=ve(a[s],t);if(u instanceof _&&l instanceof _){if(u.type==="mtext"&&l.type==="mtext"&&u.getAttribute("mathvariant")===l.getAttribute("mathvariant")){l.children.push(...u.children);continue}else if(u.type==="mn"&&l.type==="mn"){l.children.push(...u.children);continue}else if(so(u)&&l.type==="mn"){l.children.push(...u.children);continue}else if(u.type==="mn"&&so(l))u.children=[...l.children,...u.children],r.pop();else if((u.type==="msup"||u.type==="msub")&&u.children.length>=1&&(l.type==="mn"||so(l))){var m=u.children[0];m instanceof _&&m.type==="mn"&&(m.children=[...l.children,...m.children],r.pop())}else if(l.type==="mi"&&l.children.length===1){var p=l.children[0];if(p instanceof He&&p.text==="̸"&&(u.type==="mo"||u.type==="mi"||u.type==="mn")){var g=u.children[0];g instanceof He&&g.text.length>0&&(g.text=g.text.slice(0,1)+"̸"+g.text.slice(1),r.pop())}}}r.push(u),l=u}return r},zn=function(a,t,n){return nd(_a(a,t,n))},ve=function(a,t){if(!a)return new _("mrow");if(Vr[a.type])return Vr[a.type](a,t);throw new k("Got group of unknown type: '"+a.type+"'")};function f1(e,a,t,n,i){var r=_a(e,t),l;r.length===1&&r[0]instanceof _&&gv.has(r[0].type)?l=r[0]:l=new _("mrow",r);var s=new _("annotation",[new He(a)]);s.setAttribute("encoding","application/x-tex");var u=new _("semantics",[l,s]),m=new _("math",[u]);m.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&m.setAttribute("display","block");var p=i?"katex":"katex-mathml";return D([p],[m])}var yv=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],p1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],h1=function(a,t){return t.size<2?a:yv[a-1][t.size-1]};class wt{constructor(a){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=a.style,this.color=a.color,this.size=a.size||wt.BASESIZE,this.textSize=a.textSize||this.size,this.phantom=!!a.phantom,this.font=a.font||"",this.fontFamily=a.fontFamily||"",this.fontWeight=a.fontWeight||"",this.fontShape=a.fontShape||"",this.sizeMultiplier=p1[this.size-1],this.maxSize=a.maxSize,this.minRuleThickness=a.minRuleThickness,this._fontMetrics=void 0}extend(a){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(t,a),new wt(t)}havingStyle(a){return this.style===a?this:this.extend({style:a,size:h1(this.textSize,a)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(a){return this.size===a&&this.textSize===a?this:this.extend({style:this.style.text(),size:a,textSize:a,sizeMultiplier:p1[a-1]})}havingBaseStyle(a){a=a||this.style.text();var t=h1(wt.BASESIZE,a);return this.size===t&&this.textSize===wt.BASESIZE&&this.style===a?this:this.extend({style:a,size:t})}havingBaseSizing(){var a;switch(this.style.id){case 4:case 5:a=3;break;case 6:case 7:a=1;break;default:a=6}return this.extend({style:this.style.text(),size:a})}withColor(a){return this.extend({color:a})}withPhantom(){return this.extend({phantom:!0})}withFont(a){return this.extend({font:a})}withTextFontFamily(a){return this.extend({fontFamily:a,font:""})}withTextFontWeight(a){return this.extend({fontWeight:a,font:""})}withTextFontShape(a){return this.extend({fontShape:a,font:""})}sizingClasses(a){return a.size!==this.size?["sizing","reset-size"+a.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==wt.BASESIZE?["sizing","reset-size"+this.size,"size"+wt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=tv(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}wt.BASESIZE=6;var v2=function(a){return new wt({style:a.displayMode?F.DISPLAY:F.TEXT,maxSize:a.maxSize,minRuleThickness:a.minRuleThickness})},g2=function(a,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),a=D(n,[a])}return a},xv=function(a,t,n){var i=v2(n),r;if(n.output==="mathml")return f1(a,t,i,n.displayMode,!0);if(n.output==="html"){var l=kc(a,i);r=D(["katex"],[l])}else{var s=f1(a,t,i,n.displayMode,!1),u=kc(a,i);r=D(["katex"],[s,u])}return g2(r,n)},Sv=function(a,t,n){var i=v2(n),r=kc(a,i),l=D(["katex"],[r]);return g2(l,n)},zv={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},o0=function(a){var t=new _("mo",[new He(zv[a.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},wv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},jv=new Set(["widehat","widecheck","widetilde","utilde"]),c0=function(a,t){function n(){var s=4e5,u=a.label.slice(1);if(jv.has(u)&&"base"in a){var m=a.base.type==="ordgroup"?a.base.body.length:1,p,g,v;if(m>5)u==="widehat"||u==="widecheck"?(p=420,s=2364,v=.42,g=u+"4"):(p=312,s=2340,v=.34,g="tilde4");else{var b=[1,1,2,2,3,3][m];u==="widehat"||u==="widecheck"?(s=[0,1062,2364,2364,2364][b],p=[0,239,300,360,420][b],v=[0,.24,.3,.3,.36,.42][b],g=u+b):(s=[0,600,1033,2339,2340][b],p=[0,260,286,306,312][b],v=[0,.26,.286,.3,.306,.34][b],g="tilde"+b)}var N=new xn(g),A=new Rt([N],{width:"100%",height:O(v),viewBox:"0 0 "+s+" "+p,preserveAspectRatio:"none"});return{span:Sn([],[A],t),minWidth:0,height:v}}else{var M=[],x=wv[u];if(!x)throw new Error('No SVG data for "'+u+'".');var[y,w,E]=x,$=E/1e3,B=y.length,C,U;if(B===1){if(x.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+u+'".');C=["hide-tail"],U=[x[3]]}else if(B===2)C=["halfarrow-left","halfarrow-right"],U=["xMinYMin","xMaxYMin"];else if(B===3)C=["brace-left","brace-center","brace-right"],U=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+B+" children.");for(var L=0;L<B;L++){var Y=new xn(y[L]),ge=new Rt([Y],{width:"400em",height:O($),viewBox:"0 0 "+s+" "+E,preserveAspectRatio:U[L]+" slice"}),oe=Sn([C[L]],[ge],t);if(B===1)return{span:oe,minWidth:w,height:$};oe.style.height=O($),M.push(oe)}return{span:D(["stretchy"],M,t),minWidth:w,height:$}}}var{span:i,minWidth:r,height:l}=n();return i.height=l,i.style.height=O(l),r>0&&(i.style.minWidth=O(r)),i},Ev=function(a,t,n,i,r){var l,s=a.height+a.depth+n+i;if(/fbox|color|angl/.test(t)){if(l=D(["stretchy",t],[],r),t==="fbox"){var u=r.color&&r.getColor();u&&(l.style.borderColor=u)}}else{var m=[];/^[bx]cancel$/.test(t)&&m.push(new jc({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&m.push(new jc({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var p=new Rt(m,{width:"100%",height:O(s)});l=Sn([],[p],r)}return l.height=s,l.style.height=O(s),l},Nv={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Av={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1};function qv(e){return e in Nv}function I(e,a){if(!e||e.type!==a)throw new Error("Expected node of type "+a+", but got "+(e?"node of type "+e.type:String(e)));return e}function u0(e){var a=d0(e);if(!a)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return a}function d0(e){return e&&(e.type==="atom"||Av.hasOwnProperty(e.type))?e:null}var b2=e=>{if(e instanceof $a)return e;if(ev(e)&&e.children.length===1)return b2(e.children[0])},y2=(e,a)=>{var t,n,i;e&&e.type==="supsub"?(n=I(e.base,"accent"),t=n.base,e.base=t,i=W7(se(e,a)),e.base=n):(n=I(e,"accent"),t=n.base);var r=se(t,a.havingCrampedStyle()),l=n.isShifty&&Lt(t),s=0;if(l){var u,m;s=(u=(m=b2(r))==null?void 0:m.skew)!=null?u:0}var p=n.label==="\\c",g=p?r.height+r.depth:Math.min(r.height,a.fontMetrics().xHeight),v;if(n.isStretchy)v=c0(n,a),v=re({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"elem",elem:v,wrapperClasses:["svg-align"],wrapperStyle:s>0?{width:"calc(100% - "+O(2*s)+")",marginLeft:O(2*s)}:void 0}]});else{var b,N;n.label==="\\vec"?(b=d2("vec",a),N=u2.vec[1]):(b=s0({type:"textord",mode:n.mode,text:n.label},a),b=I7(b),b.italic=0,N=b.width,p&&(g+=b.depth)),v=D(["accent-body"],[b]);var A=n.label==="\\textcircled";A&&(v.classes.push("accent-full"),g=r.height);var M=s;A||(M-=N/2),v.style.left=O(M),n.label==="\\textcircled"&&(v.style.top=".2em"),v=re({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:-g},{type:"elem",elem:v}]})}var x=D(["mord","accent"],[v],a);return i?(i.children[0]=x,i.height=Math.max(x.height,i.height),i.classes[0]="mord",i):x},Mv=(e,a)=>{var t=e.isStretchy?o0(e.label):new _("mo",[Ka(e.label,e.mode)]),n=new _("mover",[ve(e.base,a),t]);return n.setAttribute("accent","true"),n},Tv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));H({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],numArgs:1,handler:(e,a)=>{var t=$s(a[0]),n=!Tv.test(e.funcName),i=!n||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:n,isShifty:i,base:t}},htmlBuilder:y2,mathmlBuilder:Mv});H({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"],handler:(e,a)=>{var t=a[0],n=e.parser.mode;return n==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:e.funcName,isStretchy:!1,isShifty:!0,base:t}}});H({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],numArgs:1,handler:(e,a)=>{var{parser:t,funcName:n}=e,i=a[0];return{type:"accentUnder",mode:t.mode,label:n,base:i}},htmlBuilder:(e,a)=>{var t=se(e.base,a),n=c0(e,a),i=e.label==="\\utilde"?.12:0,r=re({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:i},{type:"elem",elem:t}]});return D(["mord","accentunder"],[r],a)},mathmlBuilder:(e,a)=>{var t=o0(e.label),n=new _("munder",[ve(e.base,a),t]);return n.setAttribute("accentunder","true"),n}});var _l=e=>{var a=new _("mpadded",e?[e]:[]);return a.setAttribute("width","+0.6em"),a.setAttribute("lspace","0.3em"),a};H({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],numArgs:1,numOptionalArgs:1,handler(e,a,t){var{parser:n,funcName:i}=e;return{type:"xArrow",mode:n.mode,label:i,body:a[0],below:t[0]}},htmlBuilder(e,a){var t=a.style,n=a.havingStyle(t.sup()),i=Ri(se(e.body,n,a),a),r=e.label.slice(0,2)==="\\x"?"x":"cd";i.classes.push(r+"-arrow-pad");var l;e.below&&(n=a.havingStyle(t.sub()),l=Ri(se(e.below,n,a),a),l.classes.push(r+"-arrow-pad"));var s=c0(e,a),u=-a.fontMetrics().axisHeight+.5*s.height,m=-a.fontMetrics().axisHeight-.5*s.height-.111;(i.depth>.25||e.label==="\\xleftequilibrium")&&(m-=i.depth);var p;if(l){var g=-a.fontMetrics().axisHeight+l.height+.5*s.height+.111;p=re({positionType:"individualShift",children:[{type:"elem",elem:i,shift:m},{type:"elem",elem:s,shift:u,wrapperClasses:["svg-align"]},{type:"elem",elem:l,shift:g}]})}else p=re({positionType:"individualShift",children:[{type:"elem",elem:i,shift:m},{type:"elem",elem:s,shift:u,wrapperClasses:["svg-align"]}]});return D(["mrel","x-arrow"],[p],a)},mathmlBuilder(e,a){var t=o0(e.label);t.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(e.body){var i=_l(ve(e.body,a));if(e.below){var r=_l(ve(e.below,a));n=new _("munderover",[t,r,i])}else n=new _("mover",[t,i])}else if(e.below){var l=_l(ve(e.below,a));n=new _("munder",[t,l])}else n=_l(),n=new _("mover",[t,n]);return n}});function Cv(e,a){var t=Xe(e.body,a,!0);return D([e.mclass],t,a)}function Dv(e,a){var t,n=_a(e.body,a);return e.mclass==="minner"?t=new _("mpadded",n):e.mclass==="mord"?e.isCharacterBox?(t=n[0],t.type="mi"):t=new _("mi",n):(e.isCharacterBox?(t=n[0],t.type="mo"):t=new _("mo",n),e.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):e.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):(e.mclass==="mopen"||e.mclass==="mclose")&&(t.attributes.lspace="0em",t.attributes.rspace="0em")),t}H({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],numArgs:1,primitive:!0,handler(e,a){var{parser:t,funcName:n}=e,i=a[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:Le(i),isCharacterBox:Lt(i)}},htmlBuilder:Cv,mathmlBuilder:Dv});var m0=e=>{var a=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return a.type==="atom"&&(a.family==="bin"||a.family==="rel")?"m"+a.family:"mord"};H({type:"mclass",names:["\\@binrel"],numArgs:2,handler(e,a){var{parser:t}=e;return{type:"mclass",mode:t.mode,mclass:m0(a[0]),body:Le(a[1]),isCharacterBox:Lt(a[1])}}});H({type:"mclass",names:["\\stackrel","\\overset","\\underset"],numArgs:2,handler(e,a){var{parser:t,funcName:n}=e,i=a[1],r=a[0],l;n!=="\\stackrel"?l=m0(i):l="mrel";var s={type:"op",mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Le(i)},u=n==="\\underset"?{type:"supsub",mode:r.mode,base:s,sub:r}:{type:"supsub",mode:r.mode,base:s,sup:r};return{type:"mclass",mode:t.mode,mclass:l,body:[u],isCharacterBox:Lt(u)}}});H({type:"pmb",names:["\\pmb"],numArgs:1,allowedInText:!0,handler(e,a){var{parser:t}=e;return{type:"pmb",mode:t.mode,mclass:m0(a[0]),body:Le(a[0])}},htmlBuilder(e,a){var t=Xe(e.body,a,!0),n=D([e.mclass],t,a);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(e,a){var t=_a(e.body,a),n=new _("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var $v={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},v1=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),g1=e=>e.type==="textord"&&e.text==="@",kv=(e,a)=>(e.type==="mathord"||e.type==="atom")&&e.text===a;function _v(e,a,t){var n=$v[e];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[a[0]],[a[1]]);case"\\uparrow":case"\\downarrow":{var i=t.callFunction("\\\\cdleft",[a[0]],[]),r={type:"atom",text:n,mode:"math",family:"rel"},l=t.callFunction("\\Big",[r],[]),s=t.callFunction("\\\\cdright",[a[1]],[]),u={type:"ordgroup",mode:"math",body:[i,l,s]};return t.callFunction("\\\\cdparent",[u],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var m={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[m],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Ov(e){var a=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){a.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var t=e.fetch().text;if(t==="&"||t==="\\\\")e.consume();else if(t==="\\end"){a[a.length-1].length===0&&a.pop();break}else throw new k("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var n=[],i=[n],r=0;r<a.length;r++){for(var l=a[r],s=v1(),u=0;u<l.length;u++)if(!g1(l[u]))s.body.push(l[u]);else{n.push(s),u+=1;var m=u0(l[u]).text,p=new Array(2);if(p[0]={type:"ordgroup",mode:"math",body:[]},p[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(m))if("<>AV".includes(m))for(var g=0;g<2;g++){for(var v=!0,b=u+1;b<l.length;b++){if(kv(l[b],m)){v=!1,u=b;break}if(g1(l[b]))throw new k("Missing a "+m+" character to complete a CD arrow.",l[b]);p[g].body.push(l[b])}if(v)throw new k("Missing a "+m+" character to complete a CD arrow.",l[u])}else throw new k('Expected one of "<>AV=|." after @',l[u]);var N=_v(m,p,e),A={type:"styling",body:[N],mode:"math",style:"display",resetFont:!0};n.push(A),s=v1()}r%2===0?n.push(s):n.shift(),n=[],i.push(n)}e.gullet.endGroup(),e.gullet.endGroup();var M=new Array(i[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:M,colSeparationType:"CD",hLinesBeforeRow:new Array(i.length+1).fill([])}}H({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],numArgs:1,handler(e,a){var{parser:t,funcName:n}=e;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:a[0]}},htmlBuilder(e,a){var t=a.havingStyle(a.style.sup()),n=Ri(se(e.label,t,a),a);return n.classes.push("cd-label-"+e.side),n.style.bottom=O(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(e,a){var t=new _("mrow",[ve(e.label,a)]);return t=new _("mpadded",[t]),t.setAttribute("width","0"),e.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new _("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});H({type:"cdlabelparent",names:["\\\\cdparent"],numArgs:1,handler(e,a){var{parser:t}=e;return{type:"cdlabelparent",mode:t.mode,fragment:a[0]}},htmlBuilder(e,a){var t=Ri(se(e.fragment,a),a);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(e,a){return new _("mrow",[ve(e.fragment,a)])}});H({type:"textord",names:["\\@char"],numArgs:1,allowedInText:!0,handler(e,a){for(var{parser:t}=e,n=I(a[0],"ordgroup"),i=n.body,r="",l=0;l<i.length;l++){var s=I(i[l],"textord");r+=s.text}var u=parseInt(r),m;if(isNaN(u))throw new k("\\@char has non-numeric argument "+r);if(u<0||u>=1114111)throw new k("\\@char with invalid code point "+r);return u<=65535?m=String.fromCharCode(u):(u-=65536,m=String.fromCharCode((u>>10)+55296,(u&1023)+56320)),{type:"textord",mode:t.mode,text:m}}});var Bv=(e,a)=>{var t=Xe(e.body,a.withColor(e.color),!1);return Gt(t)},Rv=(e,a)=>{var t=_a(e.body,a.withColor(e.color)),n=new _("mstyle",t);return n.setAttribute("mathcolor",e.color),n};H({type:"color",names:["\\textcolor"],numArgs:2,allowedInText:!0,argTypes:["color","original"],handler(e,a){var{parser:t}=e,n=I(a[0],"color-token").color,i=a[1];return{type:"color",mode:t.mode,color:n,body:Le(i)}},htmlBuilder:Bv,mathmlBuilder:Rv});H({type:"color",names:["\\color"],numArgs:1,allowedInText:!0,argTypes:["color"],handler(e,a){var{parser:t,breakOnTokenText:n}=e,i=I(a[0],"color-token").color;t.gullet.macros.set("\\current@color",i);var r=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:i,body:r}}});H({type:"cr",names:["\\\\"],numArgs:0,numOptionalArgs:0,allowedInText:!0,handler(e,a,t){var{parser:n}=e,i=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,r=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:r,size:i&&I(i,"size").value}},htmlBuilder(e,a){var t=D(["mspace"],[],a);return e.newLine&&(t.classes.push("newline"),e.size&&(t.style.marginTop=O(Me(e.size,a)))),t},mathmlBuilder(e,a){var t=new _("mspace");return e.newLine&&(t.setAttribute("linebreak","newline"),e.size&&t.setAttribute("height",O(Me(e.size,a)))),t}});var _c={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},x2=e=>{var a=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new k("Expected a control sequence",e);return a},Uv=e=>{var a=e.gullet.popToken();return a.text==="="&&(a=e.gullet.popToken(),a.text===" "&&(a=e.gullet.popToken())),a},S2=(e,a,t,n)=>{var i=e.gullet.macros.get(t.text);i==null&&(t.noexpand=!0,i={tokens:[t],numArgs:0,unexpandable:!e.gullet.isExpandable(t.text)}),e.gullet.macros.set(a,i,n)};H({type:"internal",names:["\\global","\\long","\\\\globallong"],numArgs:0,allowedInText:!0,handler(e){var{parser:a,funcName:t}=e;a.consumeSpaces();var n=a.fetch();if(_c[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=_c[n.text]),I(a.parseFunction(),"internal");throw new k("Invalid token after macro prefix",n)}});H({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var{parser:a,funcName:t}=e,n=a.gullet.popToken(),i=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new k("Expected a control sequence",n);for(var r=0,l,s=[[]];a.gullet.future().text!=="{";)if(n=a.gullet.popToken(),n.text==="#"){if(a.gullet.future().text==="{"){l=a.gullet.future(),s[r].push("{");break}if(n=a.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new k('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==r+1)throw new k('Argument number "'+n.text+'" out of order');r++,s.push([])}else{if(n.text==="EOF")throw new k("Expected a macro definition");s[r].push(n.text)}var{tokens:u}=a.gullet.consumeArg();return l&&u.unshift(l),(t==="\\edef"||t==="\\xdef")&&(u=a.gullet.expandTokens(u),u.reverse()),a.gullet.macros.set(i,{tokens:u,numArgs:r,delimiters:s},t===_c[t]),{type:"internal",mode:a.mode}}});H({type:"internal",names:["\\let","\\\\globallet"],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var{parser:a,funcName:t}=e,n=x2(a.gullet.popToken());a.gullet.consumeSpaces();var i=Uv(a);return S2(a,n,i,t==="\\\\globallet"),{type:"internal",mode:a.mode}}});H({type:"internal",names:["\\futurelet","\\\\globalfuture"],numArgs:0,allowedInText:!0,primitive:!0,handler(e){var{parser:a,funcName:t}=e,n=x2(a.gullet.popToken()),i=a.gullet.popToken(),r=a.gullet.popToken();return S2(a,n,r,t==="\\\\globalfuture"),a.gullet.pushToken(r),a.gullet.pushToken(i),{type:"internal",mode:a.mode}}});var mr=function(a,t,n){var i=Ne.math[a]&&Ne.math[a].replace,r=ed(i||a,t,n);if(!r)throw new Error("Unsupported symbol "+a+" and font size "+t+".");return r},rd=function(a,t,n,i){var r=n.havingBaseStyle(t),l=D(i.concat(r.sizingClasses(n)),[a],n),s=r.sizeMultiplier/n.sizeMultiplier;return l.height*=s,l.depth*=s,l.maxFontSize=r.sizeMultiplier,l},z2=function(a,t,n){var i=t.havingBaseStyle(n),r=(1-t.sizeMultiplier/i.sizeMultiplier)*t.fontMetrics().axisHeight;a.classes.push("delimcenter"),a.style.top=O(r),a.height-=r,a.depth+=r},Lv=function(a,t,n,i,r,l){var s=sa(a,"Main-Regular",r,i),u=rd(s,t,i,l);return z2(u,i,t),u},Hv=function(a,t,n,i){return sa(a,"Size"+t+"-Regular",n,i)},w2=function(a,t,n,i,r,l){var s=Hv(a,t,r,i),u=rd(D(["delimsizing","size"+t],[s],i),F.TEXT,i,l);return n&&z2(u,i,F.TEXT),u},oo=function(a,t,n){var i;t==="Size1-Regular"?i="delim-size1":i="delim-size4";var r=D(["delimsizinginner",i],[D([],[sa(a,t,n)])]);return{type:"elem",elem:r}},co=function(a,t,n){var i=ot["Size4-Regular"][a.charCodeAt(0)]?ot["Size4-Regular"][a.charCodeAt(0)][4]:ot["Size1-Regular"][a.charCodeAt(0)][4],r=new xn("inner",V7(a,Math.round(1e3*t))),l=new Rt([r],{width:O(i),height:O(t),style:"width:"+O(i),viewBox:"0 0 "+1e3*i+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),s=Sn([],[l],n);return s.height=t,s.style.height=O(t),s.style.width=O(i),{type:"elem",elem:s}},Oc=.008,Ol={type:"kern",size:-1*Oc},Gv=new Set(["|","\\lvert","\\rvert","\\vert"]),Qv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),j2=function(a,t,n,i,r,l){var s,u,m,p,g="",v=0;s=m=p=a,u=null;var b="Size1-Regular";a==="\\uparrow"?m=p="⏐":a==="\\Uparrow"?m=p="‖":a==="\\downarrow"?s=m="⏐":a==="\\Downarrow"?s=m="‖":a==="\\updownarrow"?(s="\\uparrow",m="⏐",p="\\downarrow"):a==="\\Updownarrow"?(s="\\Uparrow",m="‖",p="\\Downarrow"):Gv.has(a)?(m="∣",g="vert",v=333):Qv.has(a)?(m="∥",g="doublevert",v=556):a==="["||a==="\\lbrack"?(s="⎡",m="⎢",p="⎣",b="Size4-Regular",g="lbrack",v=667):a==="]"||a==="\\rbrack"?(s="⎤",m="⎥",p="⎦",b="Size4-Regular",g="rbrack",v=667):a==="\\lfloor"||a==="⌊"?(m=s="⎢",p="⎣",b="Size4-Regular",g="lfloor",v=667):a==="\\lceil"||a==="⌈"?(s="⎡",m=p="⎢",b="Size4-Regular",g="lceil",v=667):a==="\\rfloor"||a==="⌋"?(m=s="⎥",p="⎦",b="Size4-Regular",g="rfloor",v=667):a==="\\rceil"||a==="⌉"?(s="⎤",m=p="⎥",b="Size4-Regular",g="rceil",v=667):a==="("||a==="\\lparen"?(s="⎛",m="⎜",p="⎝",b="Size4-Regular",g="lparen",v=875):a===")"||a==="\\rparen"?(s="⎞",m="⎟",p="⎠",b="Size4-Regular",g="rparen",v=875):a==="\\{"||a==="\\lbrace"?(s="⎧",u="⎨",p="⎩",m="⎪",b="Size4-Regular"):a==="\\}"||a==="\\rbrace"?(s="⎫",u="⎬",p="⎭",m="⎪",b="Size4-Regular"):a==="\\lgroup"||a==="⟮"?(s="⎧",p="⎩",m="⎪",b="Size4-Regular"):a==="\\rgroup"||a==="⟯"?(s="⎫",p="⎭",m="⎪",b="Size4-Regular"):a==="\\lmoustache"||a==="⎰"?(s="⎧",p="⎭",m="⎪",b="Size4-Regular"):(a==="\\rmoustache"||a==="⎱")&&(s="⎫",p="⎩",m="⎪",b="Size4-Regular");var N=mr(s,b,r),A=N.height+N.depth,M=mr(m,b,r),x=M.height+M.depth,y=mr(p,b,r),w=y.height+y.depth,E=0,$=1;if(u!==null){var B=mr(u,b,r);E=B.height+B.depth,$=2}var C=A+w+E,U=Math.max(0,Math.ceil((t-C)/($*x))),L=C+U*$*x,Y=i.fontMetrics().axisHeight;n&&(Y*=i.sizeMultiplier);var ge=L/2-Y,oe=[];if(g.length>0){var Qt=L-A-w,Oa=Math.round(L*1e3),na=X7(g,Math.round(Qt*1e3)),R=new xn(g,na),K=O(v/1e3),Z=O(Oa/1e3),ye=new Rt([R],{width:K,height:Z,viewBox:"0 0 "+v+" "+Oa}),pe=Sn([],[ye],i);pe.height=Oa/1e3,pe.style.width=K,pe.style.height=Z,oe.push({type:"elem",elem:pe})}else{if(oe.push(oo(p,b,r)),oe.push(Ol),u===null){var Sa=L-A-w+2*Oc;oe.push(co(m,Sa,i))}else{var nt=(L-A-w-E)/2+2*Oc;oe.push(co(m,nt,i)),oe.push(Ol),oe.push(oo(u,b,r)),oe.push(Ol),oe.push(co(m,nt,i))}oe.push(Ol),oe.push(oo(s,b,r))}var ia=i.havingBaseStyle(F.TEXT),Ba=re({positionType:"bottom",positionData:ge,children:oe});return rd(D(["delimsizing","mult"],[Ba],ia),F.TEXT,i,l)},uo=80,mo=.08,fo=function(a,t,n,i,r){var l=Y7(a,i,n),s=new xn(a,l),u=new Rt([s],{width:"400em",height:O(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return Sn(["hide-tail"],[u],r)},Yv=function(a,t){var n=t.havingBaseSizing(),i=M2("\\surd",a*n.sizeMultiplier,q2,n),r=n.sizeMultiplier,l=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),s,u,m,p,g;return i.type==="small"?(p=1e3+1e3*l+uo,a<1?r=1:a<1.4&&(r=.7),u=(1+l+mo)/r,m=(1+l)/r,s=fo("sqrtMain",u,p,l,t),s.style.minWidth="0.853em",g=.833/r):i.type==="large"?(p=(1e3+uo)*Ar[i.size],m=(Ar[i.size]+l)/r,u=(Ar[i.size]+l+mo)/r,s=fo("sqrtSize"+i.size,u,p,l,t),s.style.minWidth="1.02em",g=1/r):(u=a+l+mo,m=a+l,p=Math.floor(1e3*a+l)+uo,s=fo("sqrtTall",u,p,l,t),s.style.minWidth="0.742em",g=1.056),s.height=m,s.style.height=O(u),{span:s,advanceWidth:g,ruleWidth:(t.fontMetrics().sqrtRuleThickness+l)*r}},E2=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),Vv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),N2=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Ar=[0,1.2,1.8,2.4,3],A2=function(a,t,n,i,r){if(a==="<"||a==="\\lt"||a==="⟨"?a="\\langle":(a===">"||a==="\\gt"||a==="⟩")&&(a="\\rangle"),E2.has(a)||N2.has(a))return w2(a,t,!1,n,i,r);if(Vv.has(a))return j2(a,Ar[t],!1,n,i,r);throw new k("Illegal delimiter: '"+a+"'")},Xv=[{type:"small",style:F.SCRIPTSCRIPT},{type:"small",style:F.SCRIPT},{type:"small",style:F.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Zv=[{type:"small",style:F.SCRIPTSCRIPT},{type:"small",style:F.SCRIPT},{type:"small",style:F.TEXT},{type:"stack"}],q2=[{type:"small",style:F.SCRIPTSCRIPT},{type:"small",style:F.SCRIPT},{type:"small",style:F.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Fv=function(a){if(a.type==="small")return"Main-Regular";if(a.type==="large")return"Size"+a.size+"-Regular";if(a.type==="stack")return"Size4-Regular";var t=a.type;throw new Error("Add support for delim type '"+t+"' here.")},M2=function(a,t,n,i){for(var r=Math.min(2,3-i.style.size),l=r;l<n.length;l++){var s=n[l];if(s.type==="stack")break;var u=mr(a,Fv(s),"math"),m=u.height+u.depth;if(s.type==="small"){var p=i.havingBaseStyle(s.style);m*=p.sizeMultiplier}if(m>t)return s}return n[n.length-1]},Bc=function(a,t,n,i,r,l){a==="<"||a==="\\lt"||a==="⟨"?a="\\langle":(a===">"||a==="\\gt"||a==="⟩")&&(a="\\rangle");var s;N2.has(a)?s=Xv:E2.has(a)?s=q2:s=Zv;var u=M2(a,t,s,i);return u.type==="small"?Lv(a,u.style,n,i,r,l):u.type==="large"?w2(a,u.size,n,i,r,l):j2(a,t,n,i,r,l)},po=function(a,t,n,i,r,l){var s=i.fontMetrics().axisHeight*i.sizeMultiplier,u=901,m=5/i.fontMetrics().ptPerEm,p=Math.max(t-s,n+s),g=Math.max(p/500*u,2*p-m);return Bc(a,g,!0,i,r,l)},b1={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},Kv=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function y1(e){return"isMiddle"in e}function f0(e,a){var t=d0(e);if(t&&Kv.has(t.text))return t;throw t?new k("Invalid delimiter '"+t.text+"' after '"+a.funcName+"'",e):new k("Invalid delimiter type '"+e.type+"'",e)}H({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],numArgs:1,argTypes:["primitive"],handler:(e,a)=>{var t=f0(a[0],e);return{type:"delimsizing",mode:e.parser.mode,size:b1[e.funcName].size,mclass:b1[e.funcName].mclass,delim:t.text}},htmlBuilder:(e,a)=>e.delim==="."?D([e.mclass]):A2(e.delim,e.size,a,e.mode,[e.mclass]),mathmlBuilder:e=>{var a=[];e.delim!=="."&&a.push(Ka(e.delim,e.mode));var t=new _("mo",a);e.mclass==="mopen"||e.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=O(Ar[e.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function x1(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}H({type:"leftright-right",names:["\\right"],numArgs:1,primitive:!0,handler:(e,a)=>{var t=e.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new k("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:f0(a[0],e).text,color:t}}});H({type:"leftright",names:["\\left"],numArgs:1,primitive:!0,handler:(e,a)=>{var t=f0(a[0],e),n=e.parser;++n.leftrightDepth;var i=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var r=I(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:i,left:t.text,right:r.delim,rightColor:r.color}},htmlBuilder:(e,a)=>{x1(e);for(var t=Xe(e.body,a,!0,["mopen","mclose"]),n=0,i=0,r=!1,l=0;l<t.length;l++){var s=t[l];y1(s)?r=!0:(n=Math.max(t[l].height,n),i=Math.max(t[l].depth,i))}n*=a.sizeMultiplier,i*=a.sizeMultiplier;var u;if(e.left==="."?u=Xr(a,["mopen"]):u=po(e.left,n,i,a,e.mode,["mopen"]),t.unshift(u),r)for(var m=1;m<t.length;m++){var p=t[m];if(y1(p)){var g=p.isMiddle;t[m]=po(g.delim,n,i,g.options,e.mode,[])}}var v;if(e.right===".")v=Xr(a,["mclose"]);else{var b=e.rightColor?a.withColor(e.rightColor):a;v=po(e.right,n,i,b,e.mode,["mclose"])}return t.push(v),D(["minner"],t,a)},mathmlBuilder:(e,a)=>{x1(e);var t=_a(e.body,a);if(e.left!=="."){var n=new _("mo",[Ka(e.left,e.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(e.right!=="."){var i=new _("mo",[Ka(e.right,e.mode)]);i.setAttribute("fence","true"),e.rightColor&&i.setAttribute("mathcolor",e.rightColor),t.push(i)}return nd(t)}});H({type:"middle",names:["\\middle"],numArgs:1,primitive:!0,handler:(e,a)=>{var t=f0(a[0],e);if(!e.parser.leftrightDepth)throw new k("\\middle without preceding \\left",t);return{type:"middle",mode:e.parser.mode,delim:t.text}},htmlBuilder:(e,a)=>{var t;return e.delim==="."?t=Xr(a,[]):(t=A2(e.delim,1,a,e.mode,[]),t.isMiddle={delim:e.delim,options:a}),t},mathmlBuilder:(e,a)=>{var t=e.delim==="\\vert"||e.delim==="|"?Ka("|","text"):Ka(e.delim,e.mode),n=new _("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var Pv=(e,a)=>{var t=Ri(se(e.body,a),a),n=e.label.slice(1),i=a.sizeMultiplier,r,l,s=Lt(e.body);if(n==="sout")r=D(["stretchy","sout"]),r.height=a.fontMetrics().defaultRuleThickness/i,l=-.5*a.fontMetrics().xHeight;else if(n==="phase"){var u=Me({number:.6,unit:"pt"},a),m=Me({number:.35,unit:"ex"},a),p=a.havingBaseSizing();i=i/p.sizeMultiplier;var g=t.height+t.depth+u+m;t.style.paddingLeft=O(g/2+u);var v=Math.floor(1e3*g*i),b=G7(v),N=new Rt([new xn("phase",b)],{width:"400em",height:O(v/1e3),viewBox:"0 0 400000 "+v,preserveAspectRatio:"xMinYMin slice"});r=Sn(["hide-tail"],[N],a),r.style.height=O(g),l=t.depth+u+m}else{/cancel/.test(n)?s||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var A,M,x=0;/box/.test(n)?(x=Math.max(a.fontMetrics().fboxrule,a.minRuleThickness),A=a.fontMetrics().fboxsep+(n==="colorbox"?0:x),M=A):n==="angl"?(x=Math.max(a.fontMetrics().defaultRuleThickness,a.minRuleThickness),A=4*x,M=Math.max(0,.25-t.depth)):(A=s?.2:0,M=A),r=Ev(t,n,A,M,a),/fbox|boxed|fcolorbox/.test(n)?(r.style.borderStyle="solid",r.style.borderWidth=O(x)):n==="angl"&&x!==.049&&(r.style.borderTopWidth=O(x),r.style.borderRightWidth=O(x)),l=t.depth+M,e.backgroundColor&&(r.style.backgroundColor=e.backgroundColor,e.borderColor&&(r.style.borderColor=e.borderColor))}var y;if(e.backgroundColor)y=re({positionType:"individualShift",children:[{type:"elem",elem:r,shift:l},{type:"elem",elem:t,shift:0}]});else{var w=/cancel|phase/.test(n)?["svg-align"]:[];y=re({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:r,shift:l,wrapperClasses:w}]})}return/cancel/.test(n)&&(y.height=t.height,y.depth=t.depth),/cancel/.test(n)&&!s?D(["mord","cancel-lap"],[y],a):D(["mord"],[y],a)},Jv=(e,a)=>{var t,n=new _(e.label.includes("colorbox")?"mpadded":"menclose",[ve(e.body,a)]);switch(e.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=a.fontMetrics().fboxsep*a.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),e.label==="\\fcolorbox"){var i=Math.max(a.fontMetrics().fboxrule,a.minRuleThickness);n.setAttribute("style","border: "+O(i)+" solid "+e.borderColor)}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&n.setAttribute("mathbackground",e.backgroundColor),n};H({type:"enclose",names:["\\colorbox"],numArgs:2,allowedInText:!0,argTypes:["color","hbox"],handler(e,a,t){var{parser:n,funcName:i}=e,r=I(a[0],"color-token").color,l=a[1];return{type:"enclose",mode:n.mode,label:i,backgroundColor:r,body:l}},htmlBuilder:Pv,mathmlBuilder:Jv});H({type:"enclose",names:["\\fcolorbox"],numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"],handler(e,a,t){var{parser:n,funcName:i}=e,r=I(a[0],"color-token").color,l=I(a[1],"color-token").color,s=a[2];return{type:"enclose",mode:n.mode,label:i,backgroundColor:l,borderColor:r,body:s}}});H({type:"enclose",names:["\\fbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler(e,a){var{parser:t}=e;return{type:"enclose",mode:t.mode,label:"\\fbox",body:a[0]}}});H({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],numArgs:1,handler(e,a){var{parser:t,funcName:n}=e,i=a[0];return{type:"enclose",mode:t.mode,label:n,body:i}}});H({type:"enclose",names:["\\sout"],numArgs:1,allowedInText:!0,handler(e,a){var{parser:t,funcName:n}=e;t.mode==="math"&&t.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var i=a[0];return{type:"enclose",mode:t.mode,label:n,body:i}}});H({type:"enclose",names:["\\angl"],numArgs:1,argTypes:["hbox"],allowedInText:!1,handler(e,a){var{parser:t}=e;return{type:"enclose",mode:t.mode,label:"\\angl",body:a[0]}}});var T2={};function ft(e){for(var{type:a,names:t,props:n,handler:i,htmlBuilder:r,mathmlBuilder:l}=e,s={type:a,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},u=0;u<t.length;++u)T2[t[u]]=s;r&&(Yr[a]=r),l&&(Vr[a]=l)}var C2={};function h(e,a){C2[e]=a}class va{constructor(a,t,n){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=a,this.start=t,this.end=n}static range(a,t){return t?!a||!a.loc||!t.loc||a.loc.lexer!==t.loc.lexer?null:new va(a.loc.lexer,a.loc.start,t.loc.end):a&&a.loc}}class Ta{constructor(a,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=a,this.loc=t}range(a,t){return new Ta(t,va.range(this,a))}}function S1(e){var a=[];e.consumeSpaces();var t=e.fetch().text;for(t==="\\relax"&&(e.consume(),e.consumeSpaces(),t=e.fetch().text);t==="\\hline"||t==="\\hdashline";)e.consume(),a.push(t==="\\hdashline"),e.consumeSpaces(),t=e.fetch().text;return a}var p0=e=>{var a=e.parser.settings;if(!a.displayMode)throw new k("{"+e.envName+"} can be used only in display mode.")},Iv=new Set(["gather","gather*"]);function ld(e){if(!e.includes("ed"))return!e.includes("*")}function En(e,a,t){var{hskipBeforeAndAfter:n,addJot:i,cols:r,arraystretch:l,colSeparationType:s,autoTag:u,singleRow:m,emptySingleRow:p,maxNumCols:g,leqno:v}=a;if(e.gullet.beginGroup(),m||e.gullet.macros.set("\\cr","\\\\\\relax"),!l){var b=e.gullet.expandMacroAsText("\\arraystretch");if(b==null)l=1;else if(l=parseFloat(b),!l||l<0)throw new k("Invalid \\arraystretch: "+b)}e.gullet.beginGroup();var N=[],A=[N],M=[],x=[],y=u!=null?[]:void 0;function w(){u&&e.gullet.macros.set("\\@eqnsw","1",!0)}function E(){y&&(e.gullet.macros.get("\\df@tag")?(y.push(e.subparse([new Ta("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):y.push(!!u&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(w(),x.push(S1(e));;){var $=e.parseExpression(!1,m?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup();var B={type:"ordgroup",mode:e.mode,body:$};t&&(B={type:"styling",mode:e.mode,style:t,resetFont:!0,body:[B]}),N.push(B);var C=e.fetch().text;if(C==="&"){if(g&&N.length===g){if(m||s)throw new k("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(C==="\\end"){E(),N.length===1&&B.type==="styling"&&B.body.length===1&&B.body[0].type==="ordgroup"&&B.body[0].body.length===0&&(A.length>1||!p)&&A.pop(),x.length<A.length+1&&x.push([]);break}else if(C==="\\\\"){e.consume();var U=void 0;e.gullet.future().text!==" "&&(U=e.parseSizeGroup(!0)),M.push(U?U.value:null),E(),x.push(S1(e)),N=[],A.push(N),w()}else throw new k("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:i,arraystretch:l,body:A,cols:r,rowGaps:M,hskipBeforeAndAfter:n,hLinesBeforeRow:x,colSeparationType:s,tags:y,leqno:v}}function sd(e){return e.slice(0,1)==="d"?"display":"text"}var pt=function(a,t){var n,i,r=a.body.length,l=a.hLinesBeforeRow,s=0,u=new Array(r),m=[],p=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),g=1/t.fontMetrics().ptPerEm,v=5*g;if(a.colSeparationType&&a.colSeparationType==="small"){var b=t.havingStyle(F.SCRIPT).sizeMultiplier;v=.2778*(b/t.sizeMultiplier)}var N=a.colSeparationType==="CD"?Me({number:3,unit:"ex"},t):12*g,A=3*g,M=a.arraystretch*N,x=.7*M,y=.3*M,w=0;function E(ul){for(var dl=0;dl<ul.length;++dl)dl>0&&(w+=.25),m.push({pos:w,isDashed:ul[dl]})}for(E(l[0]),n=0;n<a.body.length;++n){var $=a.body[n],B=x,C=y;s<$.length&&(s=$.length);var U={cells:new Array($.length),height:0,depth:0,pos:0};for(i=0;i<$.length;++i){var L=se($[i],t);C<L.depth&&(C=L.depth),B<L.height&&(B=L.height),U.cells[i]=L}var Y=a.rowGaps[n],ge=0;Y&&(ge=Me(Y,t),ge>0&&(ge+=y,C<ge&&(C=ge),ge=0)),a.addJot&&n<a.body.length-1&&(C+=A),U.height=B,U.depth=C,w+=B,U.pos=w,w+=C+ge,u[n]=U,E(l[n+1])}var oe=w/2+t.fontMetrics().axisHeight,Qt=a.cols||[],Oa=[],na,R,K=[];if(a.tags&&a.tags.some(ul=>ul))for(n=0;n<r;++n){var Z=u[n],ye=Z.pos-oe,pe=a.tags[n],Sa=void 0;pe===!0?Sa=D(["eqn-num"],[],t):pe===!1?Sa=D([],[],t):Sa=D([],Xe(pe,t,!0),t),Sa.depth=Z.depth,Sa.height=Z.height,K.push({type:"elem",elem:Sa,shift:ye})}for(i=0,R=0;i<s||R<Qt.length;++i,++R){for(var nt,ia=Qt[R],Ba=!0;((Nn=ia)==null?void 0:Nn.type)==="separator";){var Nn;if(Ba||(na=D(["arraycolsep"],[]),na.style.width=O(t.fontMetrics().doubleRuleSep),Oa.push(na)),ia.separator==="|"||ia.separator===":"){var eh=ia.separator==="|"?"solid":"dashed",Jn=D(["vertical-separator"],[],t);Jn.style.height=O(w),Jn.style.borderRightWidth=O(p),Jn.style.borderRightStyle=eh,Jn.style.margin="0 "+O(-p/2);var fd=w-oe;fd&&(Jn.style.verticalAlign=O(-fd)),Oa.push(Jn)}else throw new k("Invalid separator type: "+ia.separator);R++,ia=Qt[R],Ba=!1}if(!(i>=s)){var In=void 0;if(i>0||a.hskipBeforeAndAfter){var pd,hd;In=(pd=(hd=ia)==null?void 0:hd.pregap)!=null?pd:v,In!==0&&(na=D(["arraycolsep"],[]),na.style.width=O(In),Oa.push(na))}var vd=[];for(n=0;n<r;++n){var sl=u[n],ol=sl.cells[i];if(ol){var ah=sl.pos-oe;ol.depth=sl.depth,ol.height=sl.height,vd.push({type:"elem",elem:ol,shift:ah})}}var th=re({positionType:"individualShift",children:vd}),nh=D(["col-align-"+(((nt=ia)==null?void 0:nt.align)||"c")],[th]);if(Oa.push(nh),i<s-1||a.hskipBeforeAndAfter){var gd,bd;In=(gd=(bd=ia)==null?void 0:bd.postgap)!=null?gd:v,In!==0&&(na=D(["arraycolsep"],[]),na.style.width=O(In),Oa.push(na))}}}var cl=D(["mtable"],Oa);if(m.length>0){for(var ih=Bi("hline",t,p),rh=Bi("hdashline",t,p),g0=[{type:"elem",elem:cl,shift:0}];m.length>0;){var yd=m.pop(),xd=yd.pos-oe;yd.isDashed?g0.push({type:"elem",elem:rh,shift:xd}):g0.push({type:"elem",elem:ih,shift:xd})}cl=re({positionType:"individualShift",children:g0})}if(K.length===0)return D(["mord"],[cl],t);var lh=re({positionType:"individualShift",children:K}),sh=D(["tag"],[lh],t);return Gt([cl,sh])},Wv={c:"center ",l:"left ",r:"right "},ht=function(a,t){for(var n=[],i=new _("mtd",[],["mtr-glue"]),r=new _("mtd",[],["mml-eqn-num"]),l=0;l<a.body.length;l++){for(var s=a.body[l],u=[],m=0;m<s.length;m++)u.push(new _("mtd",[ve(s[m],t)]));a.tags&&a.tags[l]&&(u.unshift(i),u.push(i),a.leqno?u.unshift(r):u.push(r)),n.push(new _("mtr",u))}var p=new _("mtable",n),g=a.arraystretch===.5?.1:.16+a.arraystretch-1+(a.addJot?.09:0);p.setAttribute("rowspacing",O(g));var v="",b="";if(a.cols&&a.cols.length>0){var N=a.cols,A="",M=!1,x=0,y=N.length;N[0].type==="separator"&&(v+="top ",x=1),N[N.length-1].type==="separator"&&(v+="bottom ",y-=1);for(var w=x;w<y;w++){var E=N[w];E.type==="align"?(b+=Wv[E.align],M&&(A+="none "),M=!0):E.type==="separator"&&M&&(A+=E.separator==="|"?"solid ":"dashed ",M=!1)}p.setAttribute("columnalign",b.trim()),/[sd]/.test(A)&&p.setAttribute("columnlines",A.trim())}if(a.colSeparationType==="align"){for(var $=a.cols||[],B="",C=1;C<$.length;C++)B+=C%2?"0em ":"1em ";p.setAttribute("columnspacing",B.trim())}else a.colSeparationType==="alignat"||a.colSeparationType==="gather"?p.setAttribute("columnspacing","0em"):a.colSeparationType==="small"?p.setAttribute("columnspacing","0.2778em"):a.colSeparationType==="CD"?p.setAttribute("columnspacing","0.5em"):p.setAttribute("columnspacing","1em");var U="",L=a.hLinesBeforeRow;v+=L[0].length>0?"left ":"",v+=L[L.length-1].length>0?"right ":"";for(var Y=1;Y<L.length-1;Y++)U+=L[Y].length===0?"none ":L[Y][0]?"dashed ":"solid ";return/[sd]/.test(U)&&p.setAttribute("rowlines",U.trim()),v!==""&&(p=new _("menclose",[p]),p.setAttribute("notation",v.trim())),a.arraystretch&&a.arraystretch<1&&(p=new _("mstyle",[p]),p.setAttribute("scriptlevel","1")),p},D2=function(a,t){a.envName.includes("ed")||p0(a);var n=[],i=a.envName==="split",r=En(a.parser,{cols:n,addJot:!0,autoTag:i?void 0:ld(a.envName),emptySingleRow:!0,colSeparationType:a.envName.includes("at")?"alignat":"align",maxNumCols:i?2:void 0,leqno:a.parser.settings.leqno},"display"),l=0,s=0,u={type:"ordgroup",mode:a.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var m="",p=0;p<t[0].body.length;p++){var g=I(t[0].body[p],"textord");m+=g.text}l=Number(m),s=l*2}var v=!s;r.body.forEach(function(M){for(var x=1;x<M.length;x+=2){var y=I(M[x],"styling"),w=I(y.body[0],"ordgroup");w.body.unshift(u)}if(v)s<M.length&&(s=M.length);else{var E=M.length/2;if(l<E)throw new k("Too many math in a row: "+("expected "+l+", but got "+E),M[0])}});for(var b=0;b<s;++b){var N="r",A=0;b%2===1?N="l":b>0&&v&&(A=1),n[b]={type:"align",align:N,pregap:A,postgap:0}}return r.colSeparationType=v?"align":"alignat",r};ft({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,a){var t=d0(a[0]),n=t?[a[0]]:I(a[0],"ordgroup").body,i=n.map(function(l){var s=u0(l),u=s.text;if("lcr".includes(u))return{type:"align",align:u};if(u==="|")return{type:"separator",separator:"|"};if(u===":")return{type:"separator",separator:":"};throw new k("Unknown column alignment: "+u,l)}),r={cols:i,hskipBeforeAndAfter:!0,maxNumCols:i.length};return En(e.parser,r,sd(e.envName))},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var a={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(e.envName.charAt(e.envName.length-1)==="*"){var i=e.parser;if(i.consumeSpaces(),i.fetch().text==="["){if(i.consume(),i.consumeSpaces(),t=i.fetch().text,!"lcr".includes(t))throw new k("Expected l or c or r",i.nextToken);i.consume(),i.consumeSpaces(),i.expect("]"),i.consume(),n.cols=[{type:"align",align:t}]}}var r=En(e.parser,n,sd(e.envName)),l=Math.max(0,...r.body.map(s=>s.length));return r.cols=new Array(l).fill({type:"align",align:t}),a?{type:"leftright",mode:e.mode,body:[r],left:a[0],right:a[1],rightColor:void 0}:r},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var a={arraystretch:.5},t=En(e.parser,a,"script");return t.colSeparationType="small",t},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["subarray"],props:{numArgs:1},handler(e,a){var t=d0(a[0]),n=t?[a[0]]:I(a[0],"ordgroup").body,i=n.map(function(s){var u=u0(s),m=u.text;if("lc".includes(m))return{type:"align",align:m};throw new k("Unknown column alignment: "+m,s)});if(i.length>1)throw new k("{subarray} can contain only one column");var r={cols:i,hskipBeforeAndAfter:!1,arraystretch:.5},l=En(e.parser,r,"script");if(l.body.length>0&&l.body[0].length>1)throw new k("{subarray} can contain only one column");return l},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var a={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=En(e.parser,a,sd(e.envName));return{type:"leftright",mode:e.mode,body:[t],left:e.envName.includes("r")?".":"\\{",right:e.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:D2,htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){Iv.has(e.envName)&&p0(e);var a={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:ld(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return En(e.parser,a,"display")},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:D2,htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){p0(e);var a={autoTag:ld(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return En(e.parser,a,"display")},htmlBuilder:pt,mathmlBuilder:ht});ft({type:"array",names:["CD"],props:{numArgs:0},handler(e){return p0(e),Ov(e.parser)},htmlBuilder:pt,mathmlBuilder:ht});h("\\nonumber","\\gdef\\@eqnsw{0}");h("\\notag","\\nonumber");H({type:"text",names:["\\hline","\\hdashline"],numArgs:0,allowedInText:!0,allowedInMath:!0,handler(e,a){throw new k(e.funcName+" valid only within array environment")}});var z1=T2;H({type:"environment",names:["\\begin","\\end"],numArgs:1,argTypes:["text"],handler(e,a){var{parser:t,funcName:n}=e,i=a[0];if(i.type!=="ordgroup")throw new k("Invalid environment name",i);for(var r="",l=0;l<i.body.length;++l)r+=I(i.body[l],"textord").text;if(n==="\\begin"){if(!z1.hasOwnProperty(r))throw new k("No such environment: "+r,i);var s=z1[r],{args:u,optArgs:m}=t.parseArguments("\\begin{"+r+"}",s),p={mode:t.mode,envName:r,parser:t},g=s.handler(p,u,m);t.expect("\\end",!1);var v=t.nextToken,b=I(t.parseFunction(),"environment");if(b.name!==r)throw new k("Mismatch: \\begin{"+r+"} matched by \\end{"+b.name+"}",v);return g}return{type:"environment",mode:t.mode,name:r,nameGroup:i}}});var e8=(e,a)=>{var t=e.font,n=a.withFont(t);return se(e.body,n)},a8=(e,a)=>{var t=e.font,n=a.withFont(t);return ve(e.body,n)},w1={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};H({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],numArgs:1,allowedInArgument:!0,handler:(e,a)=>{var{parser:t,funcName:n}=e,i=$s(a[0]),r=n in w1?w1[n]:n;return{type:"font",mode:t.mode,font:r.slice(1),body:i}},htmlBuilder:e8,mathmlBuilder:a8});H({type:"mclass",names:["\\boldsymbol","\\bm"],numArgs:1,handler:(e,a)=>{var{parser:t}=e,n=a[0];return{type:"mclass",mode:t.mode,mclass:m0(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:Lt(n)}}});H({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],numArgs:0,allowedInText:!0,handler:(e,a)=>{var{parser:t,funcName:n,breakOnTokenText:i}=e,{mode:r}=t,l=t.parseExpression(!0,i);return{type:"font",mode:r,font:"math"+n.slice(1),body:{type:"ordgroup",mode:t.mode,body:l}}}});var t8=(e,a)=>{var t=a.style,n=t.fracNum(),i=t.fracDen(),r;r=a.havingStyle(n);var l=se(e.numer,r,a);if(e.continued){var s=8.5/a.fontMetrics().ptPerEm,u=3.5/a.fontMetrics().ptPerEm;l.height=l.height<s?s:l.height,l.depth=l.depth<u?u:l.depth}r=a.havingStyle(i);var m=se(e.denom,r,a),p,g,v;e.hasBarLine?(e.barSize?(g=Me(e.barSize,a),p=Bi("frac-line",a,g)):p=Bi("frac-line",a),g=p.height,v=p.height):(p=null,g=0,v=a.fontMetrics().defaultRuleThickness);var b,N,A;t.size===F.DISPLAY.size?(b=a.fontMetrics().num1,g>0?N=3*v:N=7*v,A=a.fontMetrics().denom1):(g>0?(b=a.fontMetrics().num2,N=v):(b=a.fontMetrics().num3,N=3*v),A=a.fontMetrics().denom2);var M;if(p){var y=a.fontMetrics().axisHeight;b-l.depth-(y+.5*g)<N&&(b+=N-(b-l.depth-(y+.5*g))),y-.5*g-(m.height-A)<N&&(A+=N-(y-.5*g-(m.height-A)));var w=-(y-.5*g);M=re({positionType:"individualShift",children:[{type:"elem",elem:m,shift:A},{type:"elem",elem:p,shift:w},{type:"elem",elem:l,shift:-b}]})}else{var x=b-l.depth-(m.height-A);x<N&&(b+=.5*(N-x),A+=.5*(N-x)),M=re({positionType:"individualShift",children:[{type:"elem",elem:m,shift:A},{type:"elem",elem:l,shift:-b}]})}r=a.havingStyle(t),M.height*=r.sizeMultiplier/a.sizeMultiplier,M.depth*=r.sizeMultiplier/a.sizeMultiplier;var E;t.size===F.DISPLAY.size?E=a.fontMetrics().delim1:t.size===F.SCRIPTSCRIPT.size?E=a.havingStyle(F.SCRIPT).fontMetrics().delim2:E=a.fontMetrics().delim2;var $,B;return e.leftDelim==null?$=Xr(a,["mopen"]):$=Bc(e.leftDelim,E,!0,a.havingStyle(t),e.mode,["mopen"]),e.continued?B=D([]):e.rightDelim==null?B=Xr(a,["mclose"]):B=Bc(e.rightDelim,E,!0,a.havingStyle(t),e.mode,["mclose"]),D(["mord"].concat(r.sizingClasses(a)),[$,D(["mfrac"],[M]),B],a)},n8=(e,a)=>{var t=new _("mfrac",[ve(e.numer,a),ve(e.denom,a)]);if(!e.hasBarLine)t.setAttribute("linethickness","0px");else if(e.barSize){var n=Me(e.barSize,a);t.setAttribute("linethickness",O(n))}if(e.leftDelim!=null||e.rightDelim!=null){var i=[];if(e.leftDelim!=null){var r=new _("mo",[new He(e.leftDelim.replace("\\",""))]);r.setAttribute("fence","true"),i.push(r)}if(i.push(t),e.rightDelim!=null){var l=new _("mo",[new He(e.rightDelim.replace("\\",""))]);l.setAttribute("fence","true"),i.push(l)}return nd(i)}return t},$2=(e,a)=>{if(!a)return e;var t={type:"styling",mode:e.mode,style:a,body:[e]};return t};H({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],numArgs:2,allowedInArgument:!0,handler:(e,a)=>{var{parser:t,funcName:n}=e,i=a[0],r=a[1],l,s=null,u=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":l=!0;break;case"\\\\atopfrac":l=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":l=!1,s="(",u=")";break;case"\\\\bracefrac":l=!1,s="\\{",u="\\}";break;case"\\\\brackfrac":l=!1,s="[",u="]";break;default:throw new Error("Unrecognized genfrac command")}var m=n==="\\cfrac",p=null;return m||n.startsWith("\\d")?p="display":n.startsWith("\\t")&&(p="text"),$2({type:"genfrac",mode:t.mode,numer:i,denom:r,continued:m,hasBarLine:l,leftDelim:s,rightDelim:u,barSize:null},p)},htmlBuilder:t8,mathmlBuilder:n8});H({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],numArgs:0,infix:!0,handler(e){var{parser:a,funcName:t,token:n}=e,i;switch(t){case"\\over":i="\\frac";break;case"\\choose":i="\\binom";break;case"\\atop":i="\\\\atopfrac";break;case"\\brace":i="\\\\bracefrac";break;case"\\brack":i="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:a.mode,replaceWith:i,token:n}}});var j1=["display","text","script","scriptscript"],E1=function(a){var t=null;return a.length>0&&(t=a,t=t==="."?null:t),t};H({type:"genfrac",names:["\\genfrac"],numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"],handler(e,a){var{parser:t}=e,n=a[4],i=a[5],r=$s(a[0]),l=r.type==="atom"&&r.family==="open"?E1(r.text):null,s=$s(a[1]),u=s.type==="atom"&&s.family==="close"?E1(s.text):null,m=I(a[2],"size"),p,g=null;m.isBlank?p=!0:(g=m.value,p=g.number>0);var v=null,b=a[3];if(b.type==="ordgroup"){if(b.body.length>0){var N=I(b.body[0],"textord");v=j1[Number(N.text)]}}else b=I(b,"textord"),v=j1[Number(b.text)];return $2({type:"genfrac",mode:t.mode,numer:n,denom:i,continued:!1,hasBarLine:p,barSize:g,leftDelim:l,rightDelim:u},v)}});H({type:"infix",names:["\\above"],numArgs:1,argTypes:["size"],infix:!0,handler(e,a){var{parser:t,funcName:n,token:i}=e;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:I(a[0],"size").value,token:i}}});H({type:"genfrac",names:["\\\\abovefrac"],numArgs:3,argTypes:["math","size","math"],handler:(e,a)=>{var{parser:t,funcName:n}=e,i=a[0],r=I(a[1],"infix").size;if(!r)throw new Error("\\\\abovefrac expected size, but got "+String(r));var l=a[2],s=r.number>0;return{type:"genfrac",mode:t.mode,numer:i,denom:l,continued:!1,hasBarLine:s,barSize:r,leftDelim:null,rightDelim:null}}});var k2=(e,a)=>{var t=a.style,n,i;e.type==="supsub"?(n=e.sup?se(e.sup,a.havingStyle(t.sup()),a):se(e.sub,a.havingStyle(t.sub()),a),i=I(e.base,"horizBrace")):i=I(e,"horizBrace");var r=se(i.base,a.havingBaseStyle(F.DISPLAY)),l=c0(i,a),s;if(i.isOver?s=re({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:.1},{type:"elem",elem:l,wrapperClasses:["svg-align"]}]}):s=re({positionType:"bottom",positionData:r.depth+.1+l.height,children:[{type:"elem",elem:l,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:r}]}),n){var u=D(["minner",i.isOver?"mover":"munder"],[s],a);i.isOver?s=re({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.2},{type:"elem",elem:n}]}):s=re({positionType:"bottom",positionData:u.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:u}]})}return D(["minner",i.isOver?"mover":"munder"],[s],a)},i8=(e,a)=>{var t=o0(e.label);return new _(e.isOver?"mover":"munder",[ve(e.base,a),t])};H({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],numArgs:1,handler(e,a){var{parser:t,funcName:n}=e;return{type:"horizBrace",mode:t.mode,label:n,isOver:n.includes("\\over"),base:a[0]}},htmlBuilder:k2,mathmlBuilder:i8});H({type:"href",names:["\\href"],numArgs:2,argTypes:["url","original"],allowedInText:!0,handler:(e,a)=>{var{parser:t}=e,n=a[1],i=I(a[0],"url").url;return t.settings.isTrusted({command:"\\href",url:i})?{type:"href",mode:t.mode,href:i,body:Le(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(e,a)=>{var t=Xe(e.body,a,!1);return ov(e.href,[],t,a)},mathmlBuilder:(e,a)=>{var t=zn(e.body,a);return t instanceof _||(t=new _("mrow",[t])),t.setAttribute("href",e.href),t}});H({type:"href",names:["\\url"],numArgs:1,argTypes:["url"],allowedInText:!0,handler:(e,a)=>{var{parser:t}=e,n=I(a[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var i=[],r=0;r<n.length;r++){var l=n[r];l==="~"&&(l="\\textasciitilde"),i.push({type:"textord",mode:"text",text:l})}var s={type:"text",mode:t.mode,font:"\\texttt",body:i};return{type:"href",mode:t.mode,href:n,body:Le(s)}}});H({type:"hbox",names:["\\hbox"],numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0,handler(e,a){var{parser:t}=e;return{type:"hbox",mode:t.mode,body:Le(a[0])}},htmlBuilder(e,a){var t=Xe(e.body,a.withFont(""),!1);return Gt(t)},mathmlBuilder(e,a){return new _("mrow",_a(e.body,a.withFont("")))}});H({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],numArgs:2,argTypes:["raw","original"],allowedInText:!0,handler:(e,a)=>{var{parser:t,funcName:n,token:i}=e,r=I(a[0],"raw").string,l=a[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var s,u={};switch(n){case"\\htmlClass":u.class=r,s={command:"\\htmlClass",class:r};break;case"\\htmlId":u.id=r,s={command:"\\htmlId",id:r};break;case"\\htmlStyle":u.style=r,s={command:"\\htmlStyle",style:r};break;case"\\htmlData":{for(var m=r.split(","),p=0;p<m.length;p++){var g=m[p],v=g.indexOf("=");if(v<0)throw new k("\\htmlData key/value '"+g+"' missing equals sign");var b=g.slice(0,v),N=g.slice(v+1);u["data-"+b.trim()]=N}s={command:"\\htmlData",attributes:u};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(s)?{type:"html",mode:t.mode,attributes:u,body:Le(l)}:t.formatUnsupportedCmd(n)},htmlBuilder:(e,a)=>{var t=Xe(e.body,a,!1),n=["enclosing"];e.attributes.class&&n.push(...e.attributes.class.trim().split(/\s+/));var i=D(n,t,a);for(var r in e.attributes)r!=="class"&&e.attributes.hasOwnProperty(r)&&i.setAttribute(r,e.attributes[r]);return i},mathmlBuilder:(e,a)=>zn(e.body,a)});H({type:"htmlmathml",names:["\\html@mathml"],numArgs:2,allowedInArgument:!0,allowedInText:!0,handler:(e,a)=>{var{parser:t}=e;return{type:"htmlmathml",mode:t.mode,html:Le(a[0]),mathml:Le(a[1])}},htmlBuilder:(e,a)=>{var t=Xe(e.html,a,!1);return Gt(t)},mathmlBuilder:(e,a)=>zn(e.mathml,a)});var ho=function(a){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(a))return{number:+a,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(a);if(!t)throw new k("Invalid size: '"+a+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!n2(n))throw new k("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};H({type:"includegraphics",names:["\\includegraphics"],numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1,handler:(e,a,t)=>{var{parser:n}=e,i={number:0,unit:"em"},r={number:.9,unit:"em"},l={number:0,unit:"em"},s="";if(t[0])for(var u=I(t[0],"raw").string,m=u.split(","),p=0;p<m.length;p++){var g=m[p].split("=");if(g.length===2){var v=g[1].trim();switch(g[0].trim()){case"alt":s=v;break;case"width":i=ho(v);break;case"height":r=ho(v);break;case"totalheight":l=ho(v);break;default:throw new k("Invalid key: '"+g[0]+"' in \\includegraphics.")}}}var b=I(a[0],"url").url;return s===""&&(s=b,s=s.replace(/^.*[\\/]/,""),s=s.substring(0,s.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:b})?{type:"includegraphics",mode:n.mode,alt:s,width:i,height:r,totalheight:l,src:b}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,a)=>{var t=Me(e.height,a),n=0;e.totalheight.number>0&&(n=Me(e.totalheight,a)-t);var i=0;e.width.number>0&&(i=Me(e.width,a));var r={height:O(t+n)};i>0&&(r.width=O(i)),n>0&&(r.verticalAlign=O(-n));var l=new P7(e.src,e.alt,r);return l.height=t,l.depth=n,l},mathmlBuilder:(e,a)=>{var t=new _("mglyph",[]);t.setAttribute("alt",e.alt);var n=Me(e.height,a),i=0;if(e.totalheight.number>0&&(i=Me(e.totalheight,a)-n,t.setAttribute("valign",O(-i))),t.setAttribute("height",O(n+i)),e.width.number>0){var r=Me(e.width,a);t.setAttribute("width",O(r))}return t.setAttribute("src",e.src),t}});H({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0,handler(e,a){var{parser:t,funcName:n}=e,i=I(a[0],"size");if(t.settings.strict){var r=n[1]==="m",l=i.value.unit==="mu";r?(l||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+i.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):l&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:i.value}},htmlBuilder(e,a){return c2(e.dimension,a)},mathmlBuilder(e,a){var t=Me(e.dimension,a);return new h2(t)}});H({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],numArgs:1,allowedInText:!0,handler:(e,a)=>{var{parser:t,funcName:n}=e,i=a[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:i}},htmlBuilder:(e,a)=>{var t;e.alignment==="clap"?(t=D([],[se(e.body,a)]),t=D(["inner"],[t],a)):t=D(["inner"],[se(e.body,a)]);var n=D(["fix"],[]),i=D([e.alignment],[t,n],a),r=D(["strut"]);return r.style.height=O(i.height+i.depth),i.depth&&(r.style.verticalAlign=O(-i.depth)),i.children.unshift(r),i=D(["thinbox"],[i],a),D(["mord","vbox"],[i],a)},mathmlBuilder:(e,a)=>{var t=new _("mpadded",[ve(e.body,a)]);if(e.alignment!=="rlap"){var n=e.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});H({type:"styling",names:["\\(","$"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(e,a){var{funcName:t,parser:n}=e,i=n.mode;n.switchMode("math");var r=t==="\\("?"\\)":"$",l=n.parseExpression(!1,r);return n.expect(r),n.switchMode(i),{type:"styling",mode:n.mode,style:"text",resetFont:!0,body:l}}});H({type:"text",names:["\\)","\\]"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(e,a){throw new k("Mismatched "+e.funcName)}});var N1=(e,a)=>{switch(a.style.size){case F.DISPLAY.size:return e.display;case F.TEXT.size:return e.text;case F.SCRIPT.size:return e.script;case F.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};H({type:"mathchoice",names:["\\mathchoice"],numArgs:4,primitive:!0,handler:(e,a)=>{var{parser:t}=e;return{type:"mathchoice",mode:t.mode,display:Le(a[0]),text:Le(a[1]),script:Le(a[2]),scriptscript:Le(a[3])}},htmlBuilder:(e,a)=>{var t=N1(e,a),n=Xe(t,a,!1);return Gt(n)},mathmlBuilder:(e,a)=>{var t=N1(e,a);return zn(t,a)}});var _2=(e,a,t,n,i,r,l)=>{e=D([],[e]);var s=t&&Lt(t),u,m;if(a){var p=se(a,n.havingStyle(i.sup()),n);m={elem:p,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-p.depth)}}if(t){var g=se(t,n.havingStyle(i.sub()),n);u={elem:g,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-g.height)}}var v;if(m&&u){var b=n.fontMetrics().bigOpSpacing5+u.elem.height+u.elem.depth+u.kern+e.depth+l;v=re({positionType:"bottom",positionData:b,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:u.elem,marginLeft:O(-r)},{type:"kern",size:u.kern},{type:"elem",elem:e},{type:"kern",size:m.kern},{type:"elem",elem:m.elem,marginLeft:O(r)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(u){var N=e.height-l;v=re({positionType:"top",positionData:N,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:u.elem,marginLeft:O(-r)},{type:"kern",size:u.kern},{type:"elem",elem:e}]})}else if(m){var A=e.depth+l;v=re({positionType:"bottom",positionData:A,children:[{type:"elem",elem:e},{type:"kern",size:m.kern},{type:"elem",elem:m.elem,marginLeft:O(r)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return e;var M=[v];if(u&&r!==0&&!s){var x=D(["mspace"],[],n);x.style.marginRight=O(r),M.unshift(x)}return D(["mop","op-limits"],M,n)},O2=new Set(["\\smallint"]),B2=(e,a)=>{var t,n,i=!1,r;e.type==="supsub"?(t=e.sup,n=e.sub,r=I(e.base,"op"),i=!0):r=I(e,"op");var l=a.style,s=!1;l.size===F.DISPLAY.size&&r.symbol&&!O2.has(r.name)&&(s=!0);var u,m;if(r.symbol){var p=s?"Size2-Regular":"Size1-Regular",g="";if((r.name==="\\oiint"||r.name==="\\oiiint")&&(g=r.name.slice(1),r.name=g==="oiint"?"\\iint":"\\iiint"),u=sa(r.name,p,"math",a,["mop","op-symbol",s?"large-op":"small-op"]),m=u.italic,g.length>0){var v=d2(g+"Size"+(s?"2":"1"),a);u=re({positionType:"individualShift",children:[{type:"elem",elem:u,shift:0},{type:"elem",elem:v,shift:s?.08:0}]}),r.name="\\"+g,u.classes.unshift("mop"),u.italic=m}}else if(r.body){var b=Xe(r.body,a,!0);b.length===1&&b[0]instanceof $a?(u=b[0],u.classes[0]="mop"):u=D(["mop"],b,a)}else{for(var N=[],A=1;A<r.name.length;A++)N.push(ad(r.name[A],r.mode,a));u=D(["mop"],N,a)}var M=0,x=0;if((u instanceof $a||r.name==="\\oiint"||r.name==="\\oiiint")&&!r.suppressBaseShift){var y;M=(u.height-u.depth)/2-a.fontMetrics().axisHeight,x=(y=u.italic)!=null?y:0}return i?_2(u,t,n,a,l,x,M):(M&&(u.style.position="relative",u.style.top=O(M)),u)},r8=(e,a)=>{var t;if(e.symbol)t=new _("mo",[Ka(e.name,e.mode)]),O2.has(e.name)&&t.setAttribute("largeop","false");else if(e.body)t=new _("mo",_a(e.body,a));else{t=new _("mi",[new He(e.name.slice(1))]);var n=new _("mo",[Ka("⁡","text")]);e.parentIsSupSub?t=new _("mrow",[t,n]):t=p2([t,n])}return t},l8={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};H({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],numArgs:0,handler:(e,a)=>{var{parser:t,funcName:n}=e,i=n;return i.length===1&&(i=l8[i]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:B2,mathmlBuilder:r8});H({type:"op",names:["\\mathop"],numArgs:1,primitive:!0,handler:(e,a)=>{var{parser:t}=e,n=a[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Le(n)}}});var s8={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};H({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],numArgs:0,handler(e){var{parser:a,funcName:t}=e;return{type:"op",mode:a.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}}});H({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],numArgs:0,handler(e){var{parser:a,funcName:t}=e;return{type:"op",mode:a.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}}});H({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],numArgs:0,allowedInArgument:!0,handler(e){var{parser:a,funcName:t}=e,n=t;return n.length===1&&(n=s8[n]),{type:"op",mode:a.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}}});var R2=(e,a)=>{var t,n,i=!1,r;e.type==="supsub"?(t=e.sup,n=e.sub,r=I(e.base,"operatorname"),i=!0):r=I(e,"operatorname");var l;if(r.body.length>0){for(var s=r.body.map(g=>{var v="text"in g?g.text:void 0;return typeof v=="string"?{type:"textord",mode:g.mode,text:v}:g}),u=Xe(s,a.withFont("mathrm"),!0),m=0;m<u.length;m++){var p=u[m];p instanceof $a&&(p.text=p.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}l=D(["mop"],u,a)}else l=D(["mop"],[],a);return i?_2(l,t,n,a,a.style,0,0):l},o8=(e,a)=>{for(var t=_a(e.body,a.withFont("mathrm")),n=!0,i=0;i<t.length;i++){var r=t[i];if(!(r instanceof h2))if(r instanceof _)switch(r.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var l=r.children[0];r.children.length===1&&l instanceof He?l.text=l.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var s=t.map(p=>p.toText()).join("");t=[new He(s)]}var u=new _("mi",t);u.setAttribute("mathvariant","normal");var m=new _("mo",[Ka("⁡","text")]);return e.parentIsSupSub?new _("mrow",[u,m]):p2([u,m])};H({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],numArgs:1,handler:(e,a)=>{var{parser:t,funcName:n}=e,i=a[0];return{type:"operatorname",mode:t.mode,body:Le(i),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:R2,mathmlBuilder:o8});h("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Pn({type:"ordgroup",htmlBuilder(e,a){return e.semisimple?Gt(Xe(e.body,a,!1)):D(["mord"],Xe(e.body,a,!0),a)},mathmlBuilder(e,a){return zn(e.body,a,!0)}});H({type:"overline",names:["\\overline"],numArgs:1,handler(e,a){var{parser:t}=e,n=a[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(e,a){var t=se(e.body,a.havingCrampedStyle()),n=Bi("overline-line",a),i=a.fontMetrics().defaultRuleThickness,r=re({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*i},{type:"elem",elem:n},{type:"kern",size:i}]});return D(["mord","overline"],[r],a)},mathmlBuilder(e,a){var t=new _("mo",[new He("‾")]);t.setAttribute("stretchy","true");var n=new _("mover",[ve(e.body,a),t]);return n.setAttribute("accent","true"),n}});H({type:"phantom",names:["\\phantom"],numArgs:1,allowedInText:!0,handler:(e,a)=>{var{parser:t}=e,n=a[0];return{type:"phantom",mode:t.mode,body:Le(n)}},htmlBuilder:(e,a)=>{var t=Xe(e.body,a.withPhantom(),!1);return Gt(t)},mathmlBuilder:(e,a)=>{var t=_a(e.body,a);return new _("mphantom",t)}});h("\\hphantom","\\smash{\\phantom{#1}}");H({type:"vphantom",names:["\\vphantom"],numArgs:1,allowedInText:!0,handler:(e,a)=>{var{parser:t}=e,n=a[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(e,a)=>{var t=D(["inner"],[se(e.body,a.withPhantom())]),n=D(["fix"],[]);return D(["mord","rlap"],[t,n],a)},mathmlBuilder:(e,a)=>{var t=_a(Le(e.body),a),n=new _("mphantom",t),i=new _("mpadded",[n]);return i.setAttribute("width","0px"),i}});H({type:"raisebox",names:["\\raisebox"],numArgs:2,argTypes:["size","hbox"],allowedInText:!0,handler(e,a){var{parser:t}=e,n=I(a[0],"size").value,i=a[1];return{type:"raisebox",mode:t.mode,dy:n,body:i}},htmlBuilder(e,a){var t=se(e.body,a),n=Me(e.dy,a);return re({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]})},mathmlBuilder(e,a){var t=new _("mpadded",[ve(e.body,a)]),n=e.dy.number+e.dy.unit;return t.setAttribute("voffset",n),t}});H({type:"internal",names:["\\relax"],numArgs:0,allowedInText:!0,allowedInArgument:!0,handler(e){var{parser:a}=e;return{type:"internal",mode:a.mode}}});H({type:"rule",names:["\\rule"],numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"],handler(e,a,t){var{parser:n}=e,i=t[0],r=I(a[0],"size"),l=I(a[1],"size");return{type:"rule",mode:n.mode,shift:i&&I(i,"size").value,width:r.value,height:l.value}},htmlBuilder(e,a){var t=D(["mord","rule"],[],a),n=Me(e.width,a),i=Me(e.height,a),r=e.shift?Me(e.shift,a):0;return t.style.borderRightWidth=O(n),t.style.borderTopWidth=O(i),t.style.bottom=O(r),t.width=n,t.height=i+r,t.depth=-r,t.maxFontSize=i*1.125*a.sizeMultiplier,t},mathmlBuilder(e,a){var t=Me(e.width,a),n=Me(e.height,a),i=e.shift?Me(e.shift,a):0,r=a.color&&a.getColor()||"black",l=new _("mspace");l.setAttribute("mathbackground",r),l.setAttribute("width",O(t)),l.setAttribute("height",O(n));var s=new _("mpadded",[l]);return i>=0?s.setAttribute("height",O(i)):(s.setAttribute("height",O(i)),s.setAttribute("depth",O(-i))),s.setAttribute("voffset",O(i)),s}});function U2(e,a,t){for(var n=Xe(e,a,!1),i=a.sizeMultiplier/t.sizeMultiplier,r=0;r<n.length;r++){var l=n[r].classes.indexOf("sizing");l<0?Array.prototype.push.apply(n[r].classes,a.sizingClasses(t)):n[r].classes[l+1]==="reset-size"+a.size&&(n[r].classes[l+1]="reset-size"+t.size),n[r].height*=i,n[r].depth*=i}return Gt(n)}var A1=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],c8=(e,a)=>{var t=a.havingSize(e.size);return U2(e.body,t,a)};H({type:"sizing",names:A1,numArgs:0,allowedInText:!0,handler:(e,a)=>{var{breakOnTokenText:t,funcName:n,parser:i}=e,r=i.parseExpression(!1,t);return{type:"sizing",mode:i.mode,size:A1.indexOf(n)+1,body:r}},htmlBuilder:c8,mathmlBuilder:(e,a)=>{var t=a.havingSize(e.size),n=_a(e.body,t),i=new _("mstyle",n);return i.setAttribute("mathsize",O(t.sizeMultiplier)),i}});H({type:"smash",names:["\\smash"],numArgs:1,numOptionalArgs:1,allowedInText:!0,handler:(e,a,t)=>{var{parser:n}=e,i=!1,r=!1,l=t[0]&&I(t[0],"ordgroup");if(l)for(var s,u=0;u<l.body.length;++u){var m=l.body[u];if(s=u0(m).text,s==="t")i=!0;else if(s==="b")r=!0;else{i=!1,r=!1;break}}else i=!0,r=!0;var p=a[0];return{type:"smash",mode:n.mode,body:p,smashHeight:i,smashDepth:r}},htmlBuilder:(e,a)=>{var t=D([],[se(e.body,a)]);if(!e.smashHeight&&!e.smashDepth)return t;if(e.smashHeight&&(t.height=0),e.smashDepth&&(t.depth=0),e.smashHeight&&e.smashDepth)return D(["mord","smash"],[t],a);if(t.children)for(var n=0;n<t.children.length;n++)e.smashHeight&&(t.children[n].height=0),e.smashDepth&&(t.children[n].depth=0);var i=re({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return D(["mord"],[i],a)},mathmlBuilder:(e,a)=>{var t=new _("mpadded",[ve(e.body,a)]);return e.smashHeight&&t.setAttribute("height","0px"),e.smashDepth&&t.setAttribute("depth","0px"),t}});H({type:"sqrt",names:["\\sqrt"],numArgs:1,numOptionalArgs:1,handler(e,a,t){var{parser:n}=e,i=t[0],r=a[0];return{type:"sqrt",mode:n.mode,body:r,index:i}},htmlBuilder(e,a){var t=se(e.body,a.havingCrampedStyle());t.height===0&&(t.height=a.fontMetrics().xHeight),t=Ri(t,a);var n=a.fontMetrics(),i=n.defaultRuleThickness,r=i;a.style.id<F.TEXT.id&&(r=a.fontMetrics().xHeight);var l=i+r/4,s=t.height+t.depth+l+i,{span:u,ruleWidth:m,advanceWidth:p}=Yv(s,a),g=u.height-m;g>t.height+t.depth+l&&(l=(l+g-t.height-t.depth)/2);var v=u.height-t.height-l-m;t.style.paddingLeft=O(p);var b=re({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+v)},{type:"elem",elem:u},{type:"kern",size:m}]});if(e.index){var N=a.havingStyle(F.SCRIPTSCRIPT),A=se(e.index,N,a),M=.6*(b.height-b.depth),x=re({positionType:"shift",positionData:-M,children:[{type:"elem",elem:A}]}),y=D(["root"],[x]);return D(["mord","sqrt"],[y,b],a)}else return D(["mord","sqrt"],[b],a)},mathmlBuilder(e,a){var{body:t,index:n}=e;return n?new _("mroot",[ve(t,a),ve(n,a)]):new _("msqrt",[ve(t,a)])}});var Rc={display:F.DISPLAY,text:F.TEXT,script:F.SCRIPT,scriptscript:F.SCRIPTSCRIPT};function u8(e){return e in Rc}H({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],numArgs:0,allowedInText:!0,primitive:!0,handler(e,a){var{breakOnTokenText:t,funcName:n,parser:i}=e,r=i.parseExpression(!0,t),l=n.slice(1,n.length-5);if(!u8(l))throw new Error("Unknown style: "+l);return{type:"styling",mode:i.mode,style:l,body:r}},htmlBuilder(e,a){var t=Rc[e.style],n=a.havingStyle(t);return e.resetFont&&(n=n.withFont("")),U2(e.body,n,a)},mathmlBuilder(e,a){var t=Rc[e.style],n=a.havingStyle(t);e.resetFont&&(n=n.withFont(""));var i=_a(e.body,n),r=new _("mstyle",i),l={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},s=l[e.style];return r.setAttribute("scriptlevel",s[0]),r.setAttribute("displaystyle",s[1]),r}});var d8=function(a,t){var n=a.base;if(n)if(n.type==="op"){var i=n.limits&&(t.style.size===F.DISPLAY.size||n.alwaysHandleSupSub);return i?B2:null}else if(n.type==="operatorname"){var r=n.alwaysHandleSupSub&&(t.style.size===F.DISPLAY.size||n.limits);return r?R2:null}else{if(n.type==="accent")return Lt(n.base)?y2:null;if(n.type==="horizBrace"){var l=!a.sub;return l===n.isOver?k2:null}else return null}else return null};Pn({type:"supsub",htmlBuilder(e,a){var t=d8(e,a);if(t)return t(e,a);var{base:n,sup:i,sub:r}=e,l=se(n,a),s,u,m=a.fontMetrics(),p=0,g=0,v=n&&Lt(n);if(i){var b=a.havingStyle(a.style.sup());s=se(i,b,a),v||(p=l.height-b.fontMetrics().supDrop*b.sizeMultiplier/a.sizeMultiplier)}if(r){var N=a.havingStyle(a.style.sub());u=se(r,N,a),v||(g=l.depth+N.fontMetrics().subDrop*N.sizeMultiplier/a.sizeMultiplier)}var A;a.style===F.DISPLAY?A=m.sup1:a.style.cramped?A=m.sup3:A=m.sup2;var M=a.sizeMultiplier,x=O(.5/m.ptPerEm/M),y=null;if(u){var w=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");if(l instanceof $a||w){var E;y=O(-((E=l.italic)!=null?E:0))}}var $;if(s&&u){p=Math.max(p,A,s.depth+.25*m.xHeight),g=Math.max(g,m.sub2);var B=m.defaultRuleThickness,C=4*B;if(p-s.depth-(u.height-g)<C){g=C-(p-s.depth)+u.height;var U=.8*m.xHeight-(p-s.depth);U>0&&(p+=U,g-=U)}var L=[{type:"elem",elem:u,shift:g,marginRight:x,marginLeft:y},{type:"elem",elem:s,shift:-p,marginRight:x}];$=re({positionType:"individualShift",children:L})}else if(u){g=Math.max(g,m.sub1,u.height-.8*m.xHeight);var Y=[{type:"elem",elem:u,marginLeft:y,marginRight:x}];$=re({positionType:"shift",positionData:g,children:Y})}else if(s)p=Math.max(p,A,s.depth+.25*m.xHeight),$=re({positionType:"shift",positionData:-p,children:[{type:"elem",elem:s,marginRight:x}]});else throw new Error("supsub must have either sup or sub.");var ge=$c(l,"right")||"mord";return D([ge],[l,D(["msupsub"],[$])],a)},mathmlBuilder(e,a){var t=!1,n,i;e.base&&e.base.type==="horizBrace"&&(i=!!e.sup,i===e.base.isOver&&(t=!0,n=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var r=[ve(e.base,a)];e.sub&&r.push(ve(e.sub,a)),e.sup&&r.push(ve(e.sup,a));var l;if(t)l=n?"mover":"munder";else if(e.sub)if(e.sup){var m=e.base;m&&m.type==="op"&&m.limits&&a.style===F.DISPLAY||m&&m.type==="operatorname"&&m.alwaysHandleSupSub&&(a.style===F.DISPLAY||m.limits)?l="munderover":l="msubsup"}else{var u=e.base;u&&u.type==="op"&&u.limits&&(a.style===F.DISPLAY||u.alwaysHandleSupSub)||u&&u.type==="operatorname"&&u.alwaysHandleSupSub&&(u.limits||a.style===F.DISPLAY)?l="munder":l="msub"}else{var s=e.base;s&&s.type==="op"&&s.limits&&(a.style===F.DISPLAY||s.alwaysHandleSupSub)||s&&s.type==="operatorname"&&s.alwaysHandleSupSub&&(s.limits||a.style===F.DISPLAY)?l="mover":l="msup"}return new _(l,r)}});Pn({type:"atom",htmlBuilder(e,a){return ad(e.text,e.mode,a,["m"+e.family])},mathmlBuilder(e,a){var t=new _("mo",[Ka(e.text,e.mode)]);if(e.family==="bin"){var n=id(e,a);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else e.family==="punct"?t.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&t.setAttribute("stretchy","false");return t}});var L2={mi:"italic",mn:"normal",mtext:"normal"};Pn({type:"mathord",htmlBuilder(e,a){return s0(e,a)},mathmlBuilder(e,a){var t=new _("mi",[Ka(e.text,e.mode,a)]),n=id(e,a)||"italic";return n!==L2[t.type]&&t.setAttribute("mathvariant",n),t}});Pn({type:"textord",htmlBuilder(e,a){return s0(e,a)},mathmlBuilder(e,a){var t=Ka(e.text,e.mode,a),n=id(e,a)||"normal",i;return e.mode==="text"?i=new _("mtext",[t]):/[0-9]/.test(e.text)?i=new _("mn",[t]):e.text==="\\prime"?i=new _("mo",[t]):i=new _("mi",[t]),n!==L2[i.type]&&i.setAttribute("mathvariant",n),i}});var vo={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},go={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Pn({type:"spacing",htmlBuilder(e,a){if(go.hasOwnProperty(e.text)){var t=go[e.text].className||"";if(e.mode==="text"){var n=s0(e,a);return n.classes.push(t),n}else return D(["mspace",t],[ad(e.text,e.mode,a)],a)}else{if(vo.hasOwnProperty(e.text))return D(["mspace",vo[e.text]],[],a);throw new k('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,a){var t;if(go.hasOwnProperty(e.text))t=new _("mtext",[new He(" ")]);else{if(vo.hasOwnProperty(e.text))return new _("mspace");throw new k('Unknown type of space "'+e.text+'"')}return t}});var q1=()=>{var e=new _("mtd",[]);return e.setAttribute("width","50%"),e};Pn({type:"tag",mathmlBuilder(e,a){var t=new _("mtable",[new _("mtr",[q1(),new _("mtd",[zn(e.body,a)]),q1(),new _("mtd",[zn(e.tag,a)])])]);return t.setAttribute("width","100%"),t}});var M1={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},T1={"\\textbf":"textbf","\\textmd":"textmd"},m8={"\\textit":"textit","\\textup":"textup"},C1=(e,a)=>{var t=e.font;if(t){if(M1[t])return a.withTextFontFamily(M1[t]);if(T1[t])return a.withTextFontWeight(T1[t]);if(t==="\\emph")return a.fontShape==="textit"?a.withTextFontShape("textup"):a.withTextFontShape("textit")}else return a;return a.withTextFontShape(m8[t])};H({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0,handler(e,a){var{parser:t,funcName:n}=e,i=a[0];return{type:"text",mode:t.mode,body:Le(i),font:n}},htmlBuilder(e,a){var t=C1(e,a),n=Xe(e.body,t,!0);return D(["mord","text"],n,t)},mathmlBuilder(e,a){var t=C1(e,a);return zn(e.body,t)}});H({type:"underline",names:["\\underline"],numArgs:1,allowedInText:!0,handler(e,a){var{parser:t}=e;return{type:"underline",mode:t.mode,body:a[0]}},htmlBuilder(e,a){var t=se(e.body,a),n=Bi("underline-line",a),i=a.fontMetrics().defaultRuleThickness,r=re({positionType:"top",positionData:t.height,children:[{type:"kern",size:i},{type:"elem",elem:n},{type:"kern",size:3*i},{type:"elem",elem:t}]});return D(["mord","underline"],[r],a)},mathmlBuilder(e,a){var t=new _("mo",[new He("‾")]);t.setAttribute("stretchy","true");var n=new _("munder",[ve(e.body,a),t]);return n.setAttribute("accentunder","true"),n}});H({type:"vcenter",names:["\\vcenter"],numArgs:1,argTypes:["original"],allowedInText:!1,handler(e,a){var{parser:t}=e;return{type:"vcenter",mode:t.mode,body:a[0]}},htmlBuilder(e,a){var t=se(e.body,a),n=a.fontMetrics().axisHeight,i=.5*(t.height-n-(t.depth+n));return re({positionType:"shift",positionData:i,children:[{type:"elem",elem:t}]})},mathmlBuilder(e,a){var t=new _("mpadded",[ve(e.body,a)],["vcenter"]);return new _("mrow",[t])}});H({type:"verb",names:["\\verb"],numArgs:0,allowedInText:!0,handler(e,a,t){throw new k("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,a){for(var t=D1(e),n=[],i=a.havingStyle(a.style.text()),r=0;r<t.length;r++){var l=t[r];l==="~"&&(l="\\textasciitilde"),n.push(sa(l,"Typewriter-Regular",e.mode,i,["mord","texttt"]))}return D(["mord","text"].concat(i.sizingClasses(a)),o2(n),i)},mathmlBuilder(e,a){var t=new He(D1(e)),n=new _("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var D1=e=>e.body.replace(/ /g,e.star?"␣":" "),rn=m2,H2=`[ \r
	]`,f8="\\\\[a-zA-Z@]+",p8="\\\\[^\uD800-\uDFFF]",h8="("+f8+")"+H2+"*",v8=`\\\\(
|[ \r	]+
?)[ \r	]*`,Uc="[̀-ͯ]",g8=new RegExp(Uc+"+$"),b8="("+H2+"+)|"+(v8+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Uc+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Uc+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+h8)+("|"+p8+")");class $1{constructor(a,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=a,this.settings=t,this.tokenRegex=new RegExp(b8,"g"),this.catcodes={"%":14,"~":13}}setCatcode(a,t){this.catcodes[a]=t}lex(){var a=this.input,t=this.tokenRegex.lastIndex;if(t===a.length)return new Ta("EOF",new va(this,t,t));var n=this.tokenRegex.exec(a);if(n===null||n.index!==t)throw new k("Unexpected character: '"+a[t]+"'",new Ta(a[t],new va(this,t,t+1)));var i=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[i]===14){var r=a.indexOf(`
`,this.tokenRegex.lastIndex);return r===-1?(this.tokenRegex.lastIndex=a.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=r+1,this.lex()}return new Ta(i,new va(this,t,this.tokenRegex.lastIndex))}}class y8{constructor(a,t){a===void 0&&(a={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=a,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new k("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var a=this.undefStack.pop();for(var t in a)a.hasOwnProperty(t)&&(a[t]==null?delete this.current[t]:this.current[t]=a[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(a){return this.current.hasOwnProperty(a)||this.builtins.hasOwnProperty(a)}get(a){return this.current.hasOwnProperty(a)?this.current[a]:this.builtins[a]}set(a,t,n){if(n===void 0&&(n=!1),n){for(var i=0;i<this.undefStack.length;i++)delete this.undefStack[i][a];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][a]=t)}else{var r=this.undefStack[this.undefStack.length-1];r&&!r.hasOwnProperty(a)&&(r[a]=this.current[a])}t==null?delete this.current[a]:this.current[a]=t}}var x8=C2;h("\\noexpand",function(e){var a=e.popToken();return e.isExpandable(a.text)&&(a.noexpand=!0,a.treatAsRelax=!0),{tokens:[a],numArgs:0}});h("\\expandafter",function(e){var a=e.popToken();return e.expandOnce(!0),{tokens:[a],numArgs:0}});h("\\@firstoftwo",function(e){var a=e.consumeArgs(2);return{tokens:a[0],numArgs:0}});h("\\@secondoftwo",function(e){var a=e.consumeArgs(2);return{tokens:a[1],numArgs:0}});h("\\@ifnextchar",function(e){var a=e.consumeArgs(3);e.consumeSpaces();var t=e.future();return a[0].length===1&&a[0][0].text===t.text?{tokens:a[1],numArgs:0}:{tokens:a[2],numArgs:0}});h("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");h("\\TextOrMath",function(e){var a=e.consumeArgs(2);return e.mode==="text"?{tokens:a[0],numArgs:0}:{tokens:a[1],numArgs:0}});var k1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};h("\\char",function(e){var a=e.popToken(),t,n=0;if(a.text==="'")t=8,a=e.popToken();else if(a.text==='"')t=16,a=e.popToken();else if(a.text==="`")if(a=e.popToken(),a.text[0]==="\\")n=a.text.charCodeAt(1);else{if(a.text==="EOF")throw new k("\\char` missing argument");n=a.text.charCodeAt(0)}else t=10;if(t){if(n=k1[a.text],n==null||n>=t)throw new k("Invalid base-"+t+" digit "+a.text);for(var i;(i=k1[e.future().text])!=null&&i<t;)n*=t,n+=i,e.popToken()}return"\\@char{"+n+"}"});var od=(e,a,t,n)=>{var i=e.consumeArg().tokens;if(i.length!==1)throw new k("\\newcommand's first argument must be a macro name");var r=i[0].text,l=e.isDefined(r);if(l&&!a)throw new k("\\newcommand{"+r+"} attempting to redefine "+(r+"; use \\renewcommand"));if(!l&&!t)throw new k("\\renewcommand{"+r+"} when command "+r+" does not yet exist; use \\newcommand");var s=0;if(i=e.consumeArg().tokens,i.length===1&&i[0].text==="["){for(var u="",m=e.expandNextToken();m.text!=="]"&&m.text!=="EOF";)u+=m.text,m=e.expandNextToken();if(!u.match(/^\s*[0-9]+\s*$/))throw new k("Invalid number of arguments: "+u);s=parseInt(u),i=e.consumeArg().tokens}return l&&n||e.macros.set(r,{tokens:i,numArgs:s}),""};h("\\newcommand",e=>od(e,!1,!0,!1));h("\\renewcommand",e=>od(e,!0,!1,!1));h("\\providecommand",e=>od(e,!0,!0,!0));h("\\message",e=>{var a=e.consumeArgs(1)[0];return console.log(a.reverse().map(t=>t.text).join("")),""});h("\\errmessage",e=>{var a=e.consumeArgs(1)[0];return console.error(a.reverse().map(t=>t.text).join("")),""});h("\\show",e=>{var a=e.popToken(),t=a.text;return console.log(a,e.macros.get(t),rn[t],Ne.math[t],Ne.text[t]),""});h("\\bgroup","{");h("\\egroup","}");h("~","\\nobreakspace");h("\\lq","`");h("\\rq","'");h("\\aa","\\r a");h("\\AA","\\r A");h("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");h("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");h("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");h("ℬ","\\mathscr{B}");h("ℰ","\\mathscr{E}");h("ℱ","\\mathscr{F}");h("ℋ","\\mathscr{H}");h("ℐ","\\mathscr{I}");h("ℒ","\\mathscr{L}");h("ℳ","\\mathscr{M}");h("ℛ","\\mathscr{R}");h("ℭ","\\mathfrak{C}");h("ℌ","\\mathfrak{H}");h("ℨ","\\mathfrak{Z}");h("\\Bbbk","\\Bbb{k}");h("\\llap","\\mathllap{\\textrm{#1}}");h("\\rlap","\\mathrlap{\\textrm{#1}}");h("\\clap","\\mathclap{\\textrm{#1}}");h("\\mathstrut","\\vphantom{(}");h("\\underbar","\\underline{\\text{#1}}");h("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');h("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");h("\\ne","\\neq");h("≠","\\neq");h("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");h("∉","\\notin");h("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");h("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");h("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");h("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");h("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");h("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");h("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");h("⟂","\\perp");h("‼","\\mathclose{!\\mkern-0.8mu!}");h("∌","\\notni");h("⌜","\\ulcorner");h("⌝","\\urcorner");h("⌞","\\llcorner");h("⌟","\\lrcorner");h("©","\\copyright");h("®","\\textregistered");h("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');h("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');h("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');h("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');h("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");h("⋮","\\vdots");h("\\varGamma","\\mathit{\\Gamma}");h("\\varDelta","\\mathit{\\Delta}");h("\\varTheta","\\mathit{\\Theta}");h("\\varLambda","\\mathit{\\Lambda}");h("\\varXi","\\mathit{\\Xi}");h("\\varPi","\\mathit{\\Pi}");h("\\varSigma","\\mathit{\\Sigma}");h("\\varUpsilon","\\mathit{\\Upsilon}");h("\\varPhi","\\mathit{\\Phi}");h("\\varPsi","\\mathit{\\Psi}");h("\\varOmega","\\mathit{\\Omega}");h("\\substack","\\begin{subarray}{c}#1\\end{subarray}");h("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");h("\\boxed","\\fbox{$\\displaystyle{#1}$}");h("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");h("\\implies","\\DOTSB\\;\\Longrightarrow\\;");h("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");h("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");h("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var _1={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},S8=new Set(["bin","rel"]);h("\\dots",function(e){var a="\\dotso",t=e.expandAfterFuture().text;return t in _1?a=_1[t]:(t.slice(0,4)==="\\not"||t in Ne.math&&S8.has(Ne.math[t].group))&&(a="\\dotsb"),a});var cd={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};h("\\dotso",function(e){var a=e.future().text;return a in cd?"\\ldots\\,":"\\ldots"});h("\\dotsc",function(e){var a=e.future().text;return a in cd&&a!==","?"\\ldots\\,":"\\ldots"});h("\\cdots",function(e){var a=e.future().text;return a in cd?"\\@cdots\\,":"\\@cdots"});h("\\dotsb","\\cdots");h("\\dotsm","\\cdots");h("\\dotsi","\\!\\cdots");h("\\dotsx","\\ldots\\,");h("\\DOTSI","\\relax");h("\\DOTSB","\\relax");h("\\DOTSX","\\relax");h("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");h("\\,","\\tmspace+{3mu}{.1667em}");h("\\thinspace","\\,");h("\\>","\\mskip{4mu}");h("\\:","\\tmspace+{4mu}{.2222em}");h("\\medspace","\\:");h("\\;","\\tmspace+{5mu}{.2777em}");h("\\thickspace","\\;");h("\\!","\\tmspace-{3mu}{.1667em}");h("\\negthinspace","\\!");h("\\negmedspace","\\tmspace-{4mu}{.2222em}");h("\\negthickspace","\\tmspace-{5mu}{.277em}");h("\\enspace","\\kern.5em ");h("\\enskip","\\hskip.5em\\relax");h("\\quad","\\hskip1em\\relax");h("\\qquad","\\hskip2em\\relax");h("\\tag","\\@ifstar\\tag@literal\\tag@paren");h("\\tag@paren","\\tag@literal{({#1})}");h("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new k("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});h("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");h("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");h("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");h("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");h("\\newline","\\\\\\relax");h("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var G2=O(ot["Main-Regular"][84][1]-.7*ot["Main-Regular"][65][1]);h("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+G2+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");h("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+G2+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");h("\\hspace","\\@ifstar\\@hspacer\\@hspace");h("\\@hspace","\\hskip #1\\relax");h("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");h("\\ordinarycolon",":");h("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");h("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');h("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');h("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');h("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');h("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');h("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');h("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');h("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');h("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');h("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');h("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');h("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');h("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');h("∷","\\dblcolon");h("∹","\\eqcolon");h("≔","\\coloneqq");h("≕","\\eqqcolon");h("⩴","\\Coloneqq");h("\\ratio","\\vcentcolon");h("\\coloncolon","\\dblcolon");h("\\colonequals","\\coloneqq");h("\\coloncolonequals","\\Coloneqq");h("\\equalscolon","\\eqqcolon");h("\\equalscoloncolon","\\Eqqcolon");h("\\colonminus","\\coloneq");h("\\coloncolonminus","\\Coloneq");h("\\minuscolon","\\eqcolon");h("\\minuscoloncolon","\\Eqcolon");h("\\coloncolonapprox","\\Colonapprox");h("\\coloncolonsim","\\Colonsim");h("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");h("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");h("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");h("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");h("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");h("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");h("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");h("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");h("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");h("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");h("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");h("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");h("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");h("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");h("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");h("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");h("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");h("\\nleqq","\\html@mathml{\\@nleqq}{≰}");h("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");h("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");h("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");h("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");h("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");h("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");h("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");h("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");h("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");h("\\imath","\\html@mathml{\\@imath}{ı}");h("\\jmath","\\html@mathml{\\@jmath}{ȷ}");h("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");h("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");h("⟦","\\llbracket");h("⟧","\\rrbracket");h("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");h("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");h("⦃","\\lBrace");h("⦄","\\rBrace");h("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");h("⦵","\\minuso");h("\\darr","\\downarrow");h("\\dArr","\\Downarrow");h("\\Darr","\\Downarrow");h("\\lang","\\langle");h("\\rang","\\rangle");h("\\uarr","\\uparrow");h("\\uArr","\\Uparrow");h("\\Uarr","\\Uparrow");h("\\N","\\mathbb{N}");h("\\R","\\mathbb{R}");h("\\Z","\\mathbb{Z}");h("\\alef","\\aleph");h("\\alefsym","\\aleph");h("\\Alpha","\\mathrm{A}");h("\\Beta","\\mathrm{B}");h("\\bull","\\bullet");h("\\Chi","\\mathrm{X}");h("\\clubs","\\clubsuit");h("\\cnums","\\mathbb{C}");h("\\Complex","\\mathbb{C}");h("\\Dagger","\\ddagger");h("\\diamonds","\\diamondsuit");h("\\empty","\\emptyset");h("\\Epsilon","\\mathrm{E}");h("\\Eta","\\mathrm{H}");h("\\exist","\\exists");h("\\harr","\\leftrightarrow");h("\\hArr","\\Leftrightarrow");h("\\Harr","\\Leftrightarrow");h("\\hearts","\\heartsuit");h("\\image","\\Im");h("\\infin","\\infty");h("\\Iota","\\mathrm{I}");h("\\isin","\\in");h("\\Kappa","\\mathrm{K}");h("\\larr","\\leftarrow");h("\\lArr","\\Leftarrow");h("\\Larr","\\Leftarrow");h("\\lrarr","\\leftrightarrow");h("\\lrArr","\\Leftrightarrow");h("\\Lrarr","\\Leftrightarrow");h("\\Mu","\\mathrm{M}");h("\\natnums","\\mathbb{N}");h("\\Nu","\\mathrm{N}");h("\\Omicron","\\mathrm{O}");h("\\plusmn","\\pm");h("\\rarr","\\rightarrow");h("\\rArr","\\Rightarrow");h("\\Rarr","\\Rightarrow");h("\\real","\\Re");h("\\reals","\\mathbb{R}");h("\\Reals","\\mathbb{R}");h("\\Rho","\\mathrm{P}");h("\\sdot","\\cdot");h("\\sect","\\S");h("\\spades","\\spadesuit");h("\\sub","\\subset");h("\\sube","\\subseteq");h("\\supe","\\supseteq");h("\\Tau","\\mathrm{T}");h("\\thetasym","\\vartheta");h("\\weierp","\\wp");h("\\Zeta","\\mathrm{Z}");h("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");h("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");h("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");h("\\bra","\\mathinner{\\langle{#1}|}");h("\\ket","\\mathinner{|{#1}\\rangle}");h("\\braket","\\mathinner{\\langle{#1}\\rangle}");h("\\Bra","\\left\\langle#1\\right|");h("\\Ket","\\left|#1\\right\\rangle");var Q2=e=>a=>{var t=a.consumeArg().tokens,n=a.consumeArg().tokens,i=a.consumeArg().tokens,r=a.consumeArg().tokens,l=a.macros.get("|"),s=a.macros.get("\\|");a.macros.beginGroup();var u=g=>v=>{e&&(v.macros.set("|",l),i.length&&v.macros.set("\\|",s));var b=g;if(!g&&i.length){var N=v.future();N.text==="|"&&(v.popToken(),b=!0)}return{tokens:b?i:n,numArgs:0}};a.macros.set("|",u(!1)),i.length&&a.macros.set("\\|",u(!0));var m=a.consumeArg().tokens,p=a.expandTokens([...r,...m,...t]);return a.macros.endGroup(),{tokens:p.reverse(),numArgs:0}};h("\\bra@ket",Q2(!1));h("\\bra@set",Q2(!0));h("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");h("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");h("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");h("\\angln","{\\angl n}");h("\\blue","\\textcolor{##6495ed}{#1}");h("\\orange","\\textcolor{##ffa500}{#1}");h("\\pink","\\textcolor{##ff00af}{#1}");h("\\red","\\textcolor{##df0030}{#1}");h("\\green","\\textcolor{##28ae7b}{#1}");h("\\gray","\\textcolor{gray}{#1}");h("\\purple","\\textcolor{##9d38bd}{#1}");h("\\blueA","\\textcolor{##ccfaff}{#1}");h("\\blueB","\\textcolor{##80f6ff}{#1}");h("\\blueC","\\textcolor{##63d9ea}{#1}");h("\\blueD","\\textcolor{##11accd}{#1}");h("\\blueE","\\textcolor{##0c7f99}{#1}");h("\\tealA","\\textcolor{##94fff5}{#1}");h("\\tealB","\\textcolor{##26edd5}{#1}");h("\\tealC","\\textcolor{##01d1c1}{#1}");h("\\tealD","\\textcolor{##01a995}{#1}");h("\\tealE","\\textcolor{##208170}{#1}");h("\\greenA","\\textcolor{##b6ffb0}{#1}");h("\\greenB","\\textcolor{##8af281}{#1}");h("\\greenC","\\textcolor{##74cf70}{#1}");h("\\greenD","\\textcolor{##1fab54}{#1}");h("\\greenE","\\textcolor{##0d923f}{#1}");h("\\goldA","\\textcolor{##ffd0a9}{#1}");h("\\goldB","\\textcolor{##ffbb71}{#1}");h("\\goldC","\\textcolor{##ff9c39}{#1}");h("\\goldD","\\textcolor{##e07d10}{#1}");h("\\goldE","\\textcolor{##a75a05}{#1}");h("\\redA","\\textcolor{##fca9a9}{#1}");h("\\redB","\\textcolor{##ff8482}{#1}");h("\\redC","\\textcolor{##f9685d}{#1}");h("\\redD","\\textcolor{##e84d39}{#1}");h("\\redE","\\textcolor{##bc2612}{#1}");h("\\maroonA","\\textcolor{##ffbde0}{#1}");h("\\maroonB","\\textcolor{##ff92c6}{#1}");h("\\maroonC","\\textcolor{##ed5fa6}{#1}");h("\\maroonD","\\textcolor{##ca337c}{#1}");h("\\maroonE","\\textcolor{##9e034e}{#1}");h("\\purpleA","\\textcolor{##ddd7ff}{#1}");h("\\purpleB","\\textcolor{##c6b9fc}{#1}");h("\\purpleC","\\textcolor{##aa87ff}{#1}");h("\\purpleD","\\textcolor{##7854ab}{#1}");h("\\purpleE","\\textcolor{##543b78}{#1}");h("\\mintA","\\textcolor{##f5f9e8}{#1}");h("\\mintB","\\textcolor{##edf2df}{#1}");h("\\mintC","\\textcolor{##e0e5cc}{#1}");h("\\grayA","\\textcolor{##f6f7f7}{#1}");h("\\grayB","\\textcolor{##f0f1f2}{#1}");h("\\grayC","\\textcolor{##e3e5e6}{#1}");h("\\grayD","\\textcolor{##d6d8da}{#1}");h("\\grayE","\\textcolor{##babec2}{#1}");h("\\grayF","\\textcolor{##888d93}{#1}");h("\\grayG","\\textcolor{##626569}{#1}");h("\\grayH","\\textcolor{##3b3e40}{#1}");h("\\grayI","\\textcolor{##21242c}{#1}");h("\\kaBlue","\\textcolor{##314453}{#1}");h("\\kaGreen","\\textcolor{##71B307}{#1}");var Y2={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class z8{constructor(a,t,n){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(a),this.macros=new y8(x8,t.macros),this.mode=n,this.stack=[]}feed(a){this.lexer=new $1(a,this.settings)}switchMode(a){this.mode=a}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(a){this.stack.push(a)}pushTokens(a){this.stack.push(...a)}scanArgument(a){var t,n,i;if(a){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:i,end:n}=this.consumeArg(["]"])}else({tokens:i,start:t,end:n}=this.consumeArg());return this.pushToken(new Ta("EOF",n.loc)),this.pushTokens(i),new Ta("",va.range(t,n))}consumeSpaces(){for(;;){var a=this.future();if(a.text===" ")this.stack.pop();else break}}consumeArg(a){var t=[],n=a&&a.length>0;n||this.consumeSpaces();var i=this.future(),r,l=0,s=0;do{if(r=this.popToken(),t.push(r),r.text==="{")++l;else if(r.text==="}"){if(--l,l===-1)throw new k("Extra }",r)}else if(r.text==="EOF")throw new k("Unexpected end of input in a macro argument, expected '"+(a&&n?a[s]:"}")+"'",r);if(a&&n)if((l===0||l===1&&a[s]==="{")&&r.text===a[s]){if(++s,s===a.length){t.splice(-s,s);break}}else s=0}while(l!==0||n);return i.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:i,end:r}}consumeArgs(a,t){if(t){if(t.length!==a+1)throw new k("The length of delimiters doesn't match the number of args!");for(var n=t[0],i=0;i<n.length;i++){var r=this.popToken();if(n[i]!==r.text)throw new k("Use of the macro doesn't match its definition",r)}}for(var l=[],s=0;s<a;s++)l.push(this.consumeArg(t&&t[s+1]).tokens);return l}countExpansion(a){if(this.expansionCount+=a,this.expansionCount>this.settings.maxExpand)throw new k("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(a){var t=this.popToken(),n=t.text,i=t.noexpand?null:this._getExpansion(n);if(i==null||a&&i.unexpandable){if(a&&i==null&&n[0]==="\\"&&!this.isDefined(n))throw new k("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var r=i.tokens,l=this.consumeArgs(i.numArgs,i.delimiters);if(i.numArgs){r=r.slice();for(var s=r.length-1;s>=0;--s){var u=r[s];if(u.text==="#"){if(s===0)throw new k("Incomplete placeholder at end of macro body",u);if(u=r[--s],u.text==="#")r.splice(s+1,1);else if(/^[1-9]$/.test(u.text))r.splice(s,2,...l[+u.text-1]);else throw new k("Not a valid argument number",u)}}}return this.pushTokens(r),r.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var a=this.stack.pop();return a.treatAsRelax&&(a.text="\\relax"),a}}expandMacro(a){return this.macros.has(a)?this.expandTokens([new Ta(a)]):void 0}expandTokens(a){var t=[],n=this.stack.length;for(this.pushTokens(a);this.stack.length>n;)if(this.expandOnce(!0)===!1){var i=this.stack.pop();i.treatAsRelax&&(i.noexpand=!1,i.treatAsRelax=!1),t.push(i)}return this.countExpansion(t.length),t}expandMacroAsText(a){var t=this.expandMacro(a);return t&&t.map(n=>n.text).join("")}_getExpansion(a){var t=this.macros.get(a);if(t==null)return t;if(a.length===1){var n=this.lexer.catcodes[a];if(n!=null&&n!==13)return}var i=typeof t=="function"?t(this):t;if(typeof i=="string"){var r=0;if(i.includes("#"))for(var l=i.replace(/##/g,"");l.includes("#"+(r+1));)++r;for(var s=new $1(i,this.settings),u=[],m=s.lex();m.text!=="EOF";)u.push(m),m=s.lex();u.reverse();var p={tokens:u,numArgs:r};return p}return i}isDefined(a){return this.macros.has(a)||rn.hasOwnProperty(a)||Ne.math.hasOwnProperty(a)||Ne.text.hasOwnProperty(a)||Y2.hasOwnProperty(a)}isExpandable(a){var t=this.macros.get(a);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:rn.hasOwnProperty(a)&&!rn[a].primitive}}var O1=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Bl=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),bo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},B1={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class h0{constructor(a,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new z8(a,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(a,t){if(t===void 0&&(t=!0),this.fetch().text!==a)throw new k("Expected '"+a+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(a){this.mode=a,this.gullet.switchMode(a)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var a=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),a}finally{this.gullet.endGroups()}}subparse(a){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Ta("}")),this.gullet.pushTokens(a);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(a,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var i=this.fetch();if(h0.endOfExpression.has(i.text)||t&&i.text===t||a&&rn[i.text]&&rn[i.text].infix)break;var r=this.parseAtom(t);if(r){if(r.type==="internal")continue}else break;n.push(r)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(a){for(var t=-1,n,i=0;i<a.length;i++){var r=a[i];if(r.type==="infix"){if(t!==-1)throw new k("only one infix operator per group",r.token);t=i,n=r.replaceWith}}if(t!==-1&&n){var l,s,u=a.slice(0,t),m=a.slice(t+1);u.length===1&&u[0].type==="ordgroup"?l=u[0]:l={type:"ordgroup",mode:this.mode,body:u},m.length===1&&m[0].type==="ordgroup"?s=m[0]:s={type:"ordgroup",mode:this.mode,body:m};var p;return n==="\\\\abovefrac"?p=this.callFunction(n,[l,a[t],s],[]):p=this.callFunction(n,[l,s],[]),[p]}else return a}handleSupSubscript(a){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var i;do{var r;i=this.parseGroup(a)}while(((r=i)==null?void 0:r.type)==="internal");if(!i)throw new k("Expected group after '"+n+"'",t);return i}formatUnsupportedCmd(a){for(var t=[],n=0;n<a.length;n++)t.push({type:"textord",mode:"text",text:a[n]});var i={type:"text",mode:this.mode,body:t},r={type:"color",mode:this.mode,color:this.settings.errorColor,body:[i]};return r}parseAtom(a){var t=this.parseGroup("atom",a);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var n,i;;){this.consumeSpaces();var r=this.fetch();if(r.text==="\\limits"||r.text==="\\nolimits"){if(t&&t.type==="op")t.limits=r.text==="\\limits",t.alwaysHandleSupSub=!0;else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=r.text==="\\limits");else throw new k("Limit controls must follow a math operator",r);this.consume()}else if(r.text==="^"){if(n)throw new k("Double superscript",r);n=this.handleSupSubscript("superscript")}else if(r.text==="_"){if(i)throw new k("Double subscript",r);i=this.handleSupSubscript("subscript")}else if(r.text==="'"){if(n)throw new k("Double superscript",r);var l={type:"textord",mode:this.mode,text:"\\prime"},s=[l];for(this.consume();this.fetch().text==="'";)s.push(l),this.consume();this.fetch().text==="^"&&s.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:s}}else if(Bl[r.text]){var u=O1.test(r.text),m=[];for(m.push(new Ta(Bl[r.text])),this.consume();;){var p=this.fetch().text;if(!Bl[p]||O1.test(p)!==u)break;m.unshift(new Ta(Bl[p])),this.consume()}var g=this.subparse(m);u?i={type:"ordgroup",mode:"math",body:g}:n={type:"ordgroup",mode:"math",body:g}}else break}return n&&i?{type:"supsub",mode:this.mode,base:t,sup:n,sub:i}:n?{type:"supsub",mode:this.mode,base:t,sup:n}:i?{type:"supsub",mode:this.mode,base:t,sub:i}:t}parseFunction(a,t){var n=this.fetch(),i=n.text,r=rn[i];if(!r)return null;if(this.consume(),t&&t!=="atom"&&!r.allowedInArgument)throw new k("Got function '"+i+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!r.allowedInText)throw new k("Can't use function '"+i+"' in text mode",n);if(this.mode==="math"&&r.allowedInMath===!1)throw new k("Can't use function '"+i+"' in math mode",n);var{args:l,optArgs:s}=this.parseArguments(i,r);return this.callFunction(i,l,s,n,a)}callFunction(a,t,n,i,r){var l={funcName:a,parser:this,token:i,breakOnTokenText:r},s=rn[a];if(s&&s.handler)return s.handler(l,t,n);throw new k("No function handler for "+a)}parseArguments(a,t){var n,i=(n=t.numOptionalArgs)!=null?n:0,r=t.numArgs+i;if(r===0)return{args:[],optArgs:[]};for(var l=[],s=[],u=0;u<r;u++){var m,p=(m=t.argTypes)==null?void 0:m[u],g=u<i;("primitive"in t&&t.primitive&&p==null||t.type==="sqrt"&&u===1&&s[0]==null)&&(p="primitive");var v=this.parseGroupOfType("argument to '"+a+"'",p,g);if(g)s.push(v);else if(v!=null)l.push(v);else throw new k("Null argument, please report this as a bug")}return{args:l,optArgs:s}}parseGroupOfType(a,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var i=this.parseArgumentGroup(n,"text");return i!=null?{type:"styling",mode:i.mode,body:[i],style:"text",resetFont:!0}:null}case"raw":{var r=this.parseStringGroup(n);return r!=null?{type:"raw",mode:"text",string:r.text}:null}case"primitive":{if(n)throw new k("A primitive argument cannot be optional");var l=this.parseGroup(a);if(l==null)throw new k("Expected group as "+a,this.fetch());return l}case"original":case void 0:return this.parseArgumentGroup(n);default:throw new k("Unknown group type as "+a,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(a){var t=this.gullet.scanArgument(a);if(t==null)return null;for(var n="",i;(i=this.fetch()).text!=="EOF";)n+=i.text,this.consume();return this.consume(),t.text=n,t}parseRegexGroup(a,t){for(var n=this.fetch(),i=n,r="",l;(l=this.fetch()).text!=="EOF"&&a.test(r+l.text);)i=l,r+=i.text,this.consume();if(r==="")throw new k("Invalid "+t+": '"+n.text+"'",n);return n.range(i,r)}parseColorGroup(a){var t=this.parseStringGroup(a);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new k("Invalid color: '"+t.text+"'",t);var i=n[0];return/^[0-9a-f]{6}$/i.test(i)&&(i="#"+i),{type:"color-token",mode:this.mode,color:i}}parseSizeGroup(a){var t,n=!1;if(this.gullet.consumeSpaces(),!a&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup(a),!t)return null;!a&&t.text.length===0&&(t.text="0pt",n=!0);var i=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!i)throw new k("Invalid size: '"+t.text+"'",t);var r={number:+(i[1]+i[2]),unit:i[3]};if(!n2(r))throw new k("Invalid unit: '"+r.unit+"'",t);return{type:"size",mode:this.mode,value:r,isBlank:n}}parseUrlGroup(a){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup(a);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(a,t){var n=this.gullet.scanArgument(a);if(n==null)return null;var i=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var r=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var l={type:"ordgroup",mode:this.mode,loc:n.loc,body:r};return t&&this.switchMode(i),l}parseGroup(a,t){var n=this.fetch(),i=n.text,r;if(i==="{"||i==="\\begingroup"){this.consume();var l=i==="{"?"}":"\\endgroup";this.gullet.beginGroup();var s=this.parseExpression(!1,l),u=this.fetch();this.expect(l),this.gullet.endGroup(),r={type:"ordgroup",mode:this.mode,loc:va.range(n,u),body:s,semisimple:i==="\\begingroup"||void 0}}else if(r=this.parseFunction(t,a)||this.parseSymbol(),r==null&&i[0]==="\\"&&!Y2.hasOwnProperty(i)){if(this.settings.throwOnError)throw new k("Undefined control sequence: "+i,n);r=this.formatUnsupportedCmd(i),this.consume()}return r}formLigatures(a){for(var t=a.length-1,n=0;n<t;++n){var i=a[n];if(i.type==="textord"){var r=i.text,l=a[n+1];if(!(!l||l.type!=="textord")){if(r==="-"&&l.text==="-"){var s=a[n+2];n+1<t&&s&&s.type==="textord"&&s.text==="-"?(a.splice(n,3,{type:"textord",mode:"text",loc:va.range(i,s),text:"---"}),t-=2):(a.splice(n,2,{type:"textord",mode:"text",loc:va.range(i,l),text:"--"}),t-=1)}(r==="'"||r==="`")&&l.text===r&&(a.splice(n,2,{type:"textord",mode:"text",loc:va.range(i,l),text:r+r}),t-=1)}}}}parseSymbol(){var a=this.fetch(),t=a.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),i=n.charAt(0)==="*";if(i&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new k(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:i}}B1.hasOwnProperty(t[0])&&!Ne[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',a),t=B1[t[0]]+t.slice(1));var r=g8.exec(t);r&&(t=t.substring(0,r.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var l;if(Ne[this.mode][t]){this.settings.strict&&this.mode==="math"&&Ec.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',a);var s=Ne[this.mode][t].group,u=va.range(a),m;qv(s)?m={type:"atom",mode:this.mode,family:s,loc:u,text:t}:m={type:s,mode:this.mode,loc:u,text:t},l=m}else if(t.charCodeAt(0)>=128)this.settings.strict&&(t2(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',a):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),a)),l={type:"textord",mode:"text",loc:va.range(a),text:t};else return null;if(this.consume(),r)for(var p=0;p<r[0].length;p++){var g=r[0][p];if(!bo[g])throw new k("Unknown accent ' "+g+"'",a);var v=bo[g][this.mode]||bo[g].text;if(!v)throw new k("Accent "+g+" unsupported in "+this.mode+" mode",a);l={type:"accent",mode:this.mode,loc:va.range(a),label:v,isStretchy:!1,isShifty:!0,base:l}}return l}}h0.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var ud=function(a,t){if(!(typeof a=="string"||a instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new h0(a,t);delete n.gullet.macros.current["\\df@tag"];var i=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new k("\\tag works only in display equations");i=[{type:"tag",mode:"text",body:i,tag:n.subparse([new Ta("\\df@tag")])}]}return i},V2=function(a,t,n){t.textContent="";var i=dd(a,n).toNode();t.appendChild(i)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),V2=function(){throw new k("KaTeX doesn't work in quirks mode.")});var w8=function(a,t){var n=dd(a,t).toMarkup();return n},j8=function(a,t){var n=new Ju(t);return ud(a,n)},X2=function(a,t,n){if(n.throwOnError||!(a instanceof k))throw a;var i=D(["katex-error"],[new $a(t)]);return i.setAttribute("title",a.toString()),i.setAttribute("style","color:"+n.errorColor),i},dd=function(a,t){var n=new Ju(t);try{var i=ud(a,n);return xv(i,a,n)}catch(r){return X2(r,a,n)}},E8=function(a,t){var n=new Ju(t);try{var i=ud(a,n);return Sv(i,a,n)}catch(r){return X2(r,a,n)}},N8="0.17.0",A8={Span:Pi,Anchor:r0,SymbolNode:$a,SvgNode:Rt,PathNode:xn,LineNode:jc},q8={version:N8,render:V2,renderToString:w8,ParseError:k,SETTINGS_SCHEMA:Sc,__parse:j8,__renderToDomTree:dd,__renderToHTMLTree:E8,__setFontMetrics:av,__defineSymbol:c,__defineFunction:H,__defineMacro:h,__domTree:A8};const R1=/(\\\([\s\S]+?\\\))|(\$[^$\n]+\$)|(!\[[^\]]*\]\([^)]+\))|(\[[^\]]+\]\([^)]+\))|(`[^`]+`)|(\*\*[^*]+\*\*)|(__[^_]+__)|(\*[^*]+\*)|(_[^_]+_)/g;function M8(e,a=!1){return q8.renderToString(e,{displayMode:a,throwOnError:!1,strict:!1,trust:!1})}function Lc({tex:e,displayMode:a=!1}){const t=M8(e,a);return a?o.jsx("div",{className:"nebula-math my-7 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center",dangerouslySetInnerHTML:{__html:t}}):o.jsx("span",{className:"mx-0.5 whitespace-nowrap align-baseline",dangerouslySetInnerHTML:{__html:t}})}function T8(e){return e.startsWith("/assets/latex/")&&e.endsWith(".svg")}function Z2({src:e,alt:a}){return T8(e)?o.jsxs("figure",{"data-graph":"latex",className:"mx-auto my-8 max-w-2xl rounded-2xl border border-white/10 bg-white p-4 shadow-[0_10px_40px_-10px_oklch(0.62_0.22_265/0.35)]",children:[o.jsx("img",{src:e,alt:a,loading:"lazy",className:"mx-auto max-h-[420px] w-full object-contain"}),a&&o.jsx("figcaption",{className:"mt-3 text-center text-xs leading-relaxed text-slate-700",children:a})]}):o.jsx("img",{src:e,alt:a,loading:"lazy",className:"my-6 w-full rounded-2xl border border-white/10"})}function lr(e){const a=[];let t=0,n=0,i;for(;(i=R1.exec(e))!==null;){i.index>t&&a.push(e.slice(t,i.index));const r=i[0];if(r.startsWith("\\("))a.push(o.jsx(Lc,{tex:r.slice(2,-2)},n));else if(r.startsWith("$"))a.push(o.jsx(Lc,{tex:r.slice(1,-1)},n));else if(r.startsWith("![")){const l=/!\[([^\]]*)\]\(([^)]+)\)/.exec(r);a.push(o.jsx(Z2,{src:l[2],alt:l[1]},n))}else if(r.startsWith("[")){const l=/\[([^\]]+)\]\(([^)]+)\)/.exec(r),s=l[2],u=/^https?:\/\//.test(s);a.push(o.jsx("a",{href:s,className:"font-medium text-link underline underline-offset-4 transition-colors hover:text-link",...u?{target:"_blank",rel:"noreferrer"}:{},children:l[1]},n))}else r.startsWith("`")?a.push(o.jsx("code",{className:"rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground",children:r.slice(1,-1)},n)):r.startsWith("**")||r.startsWith("__")?a.push(o.jsx("strong",{className:"font-semibold text-foreground",children:r.slice(2,-2)},n)):a.push(o.jsx("em",{children:r.slice(1,-1)},n));t=R1.lastIndex,n++}return t<e.length&&a.push(e.slice(t)),a}const U1=e=>e.trim()==="",C8=e=>/^#{1,6}\s+/.test(e),yo=e=>e.trim().startsWith("```"),xo=e=>e.trim().startsWith(">"),So=e=>/^\s*[-*]\s+/.test(e),zo=e=>/^\s*\d+\.\s+/.test(e),L1=e=>/^(-{3,}|\*{3,}|_{3,})$/.test(e.trim());function D8(e){return e.replace(/[*_`]/g,"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function $8(e){const a=e.replace(/\r\n/g,`
`).split(`
`),t=[];let n=0,i=0;for(;n<a.length;){const r=a[n];if(U1(r)){n++;continue}if(r.trim().startsWith("$$")||r.trim().startsWith("\\[")){const m=r.trim().startsWith("$$")?"$$":"\\[",p=m==="$$"?"$$":"\\]",g=[];let v=r.trim().slice(m.length);if(v.endsWith(p)&&v.length>p.length)g.push(v.slice(0,-p.length)),n++;else for(v&&g.push(v),n++;n<a.length;){if(v=a[n].trim(),v.endsWith(p)){g.push(v.slice(0,-p.length)),n++;break}g.push(a[n]),n++}t.push(o.jsx(Lc,{tex:g.join(`
`).trim(),displayMode:!0},i++));continue}const l=/^!\[([^\]]*)\]\(([^)]+)\)\s*$/.exec(r.trim());if(l){t.push(o.jsx(Z2,{src:l[2],alt:l[1]},i++)),n++;continue}if(yo(r)){const m=[];for(n++;n<a.length&&!yo(a[n]);)m.push(a[n]),n++;n++,t.push(o.jsx("pre",{className:"my-6 w-full max-w-full overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm",children:o.jsx("code",{className:"block min-w-0 whitespace-pre-wrap break-words font-mono text-foreground/90",children:m.join(`
`)})},i++));continue}const s=/^(#{1,6})\s+(.*)$/.exec(r);if(s){const m=s[1].length,p=s[2].trim(),g=lr(p),v=D8(p);m<=2?t.push(o.jsx("h2",{id:v,className:"mt-12 mb-4 border-l-2 border-action pl-4 font-display text-2xl font-semibold nebula-heading-text md:text-3xl",children:g},i++)):m===3?t.push(o.jsx("h3",{id:v,className:"mt-10 mb-3 font-display text-xl font-semibold nebula-subheading-text",children:g},i++)):t.push(o.jsx("h4",{className:"mt-8 mb-2 font-display text-lg font-semibold text-muted-foreground",children:g},i++)),n++;continue}if(L1(r)){t.push(o.jsx("hr",{className:"my-10 border-white/10"},i++)),n++;continue}if(xo(r)){const m=[];for(;n<a.length&&xo(a[n]);)m.push(a[n].replace(/^\s*>\s?/,"")),n++;t.push(o.jsx("blockquote",{className:"my-6 border-l-2 border-action/70 bg-white/[0.02] py-2 pr-4 pl-5 text-foreground/80 italic",children:lr(m.join(" "))},i++));continue}if(So(r)){const m=[];for(;n<a.length&&So(a[n]);)m.push(a[n].replace(/^\s*[-*]\s+/,"")),n++;t.push(o.jsx("ul",{className:"my-5 space-y-2 pl-1",children:m.map((p,g)=>o.jsxs("li",{className:"flex items-start gap-3 text-foreground/85",children:[o.jsx("span",{className:"mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-action"}),o.jsx("span",{children:lr(p)})]},g))},i++));continue}if(zo(r)){const m=[];for(;n<a.length&&zo(a[n]);)m.push(a[n].replace(/^\s*\d+\.\s+/,"")),n++;t.push(o.jsx("ol",{className:"my-5 space-y-2",children:m.map((p,g)=>o.jsxs("li",{className:"flex items-start gap-3 text-foreground/85",children:[o.jsxs("span",{className:"font-display text-sm font-semibold text-action",children:[g+1,"."]}),o.jsx("span",{children:lr(p)})]},g))},i++));continue}const u=[];for(;n<a.length&&!U1(a[n])&&!C8(a[n])&&!yo(a[n])&&!xo(a[n])&&!So(a[n])&&!zo(a[n])&&!L1(a[n]);)u.push(a[n]),n++;t.push(o.jsx("p",{className:"my-5 leading-relaxed text-foreground/85",children:lr(u.join(" "))},i++))}return t}function k8({markdown:e}){return o.jsx(o.Fragment,{children:$8(e)})}const _8=`---
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
`,O8=`---
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
`,B8=`---
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
`,R8=`---
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
`,U8=`---
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
`,L8=`---
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
`,H8=`---
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
`,G8=`---
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
`,Q8=`---
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
`,Y8=`---
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
`,V8=`---
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
`,X8=`---
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
`,Z8=`---
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
`,F8=`---
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
`,K8=`---
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
`,P8=`---
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
`,J8=`---
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
`,I8=`---
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
`,W8=`---
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
`,eg=`---
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
`,ag=`---
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
`,tg=`---
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
`,ng=`---
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
`,ig=`---
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
`,rg=`---
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
`,lg=`---
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
`,sg=`---
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
`,og=`---
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
`,cg=`---
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
`,F2=9;function ug(e){const a=/^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(e);if(!a)return{data:{},body:e.trim()};const t={};for(const n of a[1].split(`
`)){const i=n.indexOf(":");if(i===-1)continue;const r=n.slice(0,i).trim();let l=n.slice(i+1).trim();(l.startsWith('"')&&l.endsWith('"')||l.startsWith("'")&&l.endsWith("'"))&&(l=l.slice(1,-1)),r&&(t[r]=l)}return{data:t,body:e.slice(a[0].length).trim()}}function dg(e){const a=e.trim().split(/\s+/).filter(Boolean).length;return Math.max(1,Math.round(a/200))}const mg=Object.assign({"../content/blog/algebra-lineal-universidad-que-estudiar-primero-errores.md":_8,"../content/blog/circuitos-corriente-continua-problemas-resueltos-universidad.md":O8,"../content/blog/como-aprobar-calculo-i-ingenieria-seis-semanas.md":B8,"../content/blog/como-aprobar-estadistica-psicologia-sin-base-matematica.md":R8,"../content/blog/como-aprobar-fisica-i-ingenieria-sin-memorizar-formulas.md":U8,"../content/blog/como-aprobar-matematicas-i-ade-economia.md":L8,"../content/blog/como-estudiar-matematicas-sin-memorizar.md":H8,"../content/blog/derivadas-integrales-universitarias-prueba-nivel-ejercicios-resueltos.md":G8,"../content/blog/diagramas-cuerpo-libre-metodo-errores-frecuentes.md":Q8,"../content/blog/econometria-desde-cero-interpretar-regresion.md":Y8,"../content/blog/economia-ade-matematicas-sin-perderse.md":V8,"../content/blog/ecuaciones-diferenciales-identificar-metodo-correcto.md":X8,"../content/blog/errores-comunes-inferencia-estadistica.md":Z8,"../content/blog/estadistica-desde-cero-para-elegir-contrastes.md":F8,"../content/blog/estequiometria-universitaria-ejercicios-resueltos.md":K8,"../content/blog/fisica-y-quimica-como-plantear-problemas.md":P8,"../content/blog/ib-gcse-como-preparar-examenes-internacionales.md":J8,"../content/blog/matrices-determinantes-sistemas-ecuaciones-guia.md":I8,"../content/blog/microeconomia-i-tipos-problemas-examen.md":W8,"../content/blog/p-valor-intervalo-confianza-tamano-efecto-ejemplo.md":eg,"../content/blog/preparar-selectividad-con-calendario.md":ag,"../content/blog/probabilidad-condicionada-bayes-problemas-resueltos.md":tg,"../content/blog/python-y-sql-para-empezar-en-datos.md":ng,"../content/blog/que-prueba-estadistica-utilizar-guia-test-correcto.md":ig,"../content/blog/que-son-las-derivadas-y-para-que-se-utilizan.md":rg,"../content/blog/que-son-las-integrales-y-para-que-se-utilizan.md":lg,"../content/blog/r-spss-jamovi-python-programa-estadistico-universidad.md":sg,"../content/blog/regresion-lineal-anova-cuando-utilizar-interpretar-resultados.md":og,"../content/blog/transicion-al-sector-it-en-6-meses.md":cg}),v0=Object.entries(mg).map(([e,a])=>{const t=e.split("/").pop().replace(/\.md$/,""),{data:n,body:i}=ug(a);return{slug:t,title:n.title??t,date:n.date??"",updated:n.updated??n.date??"",description:n.description??"",tag:n.tag??"Blog",category:n.category??n.tag??"Blog",image:n.image??"/favicon.svg",relatedService:n.relatedService??"/contacto/",relatedPosts:n.relatedPosts?n.relatedPosts.split(",").map(r=>r.trim()).filter(Boolean):[],readingMinutes:dg(i),body:i}}).sort((e,a)=>e.date<a.date?1:e.date>a.date?-1:0);function K2(){return v0}function P2(e,a=F2){return Math.max(1,Math.ceil(e.length/a))}function J2(e,a,t=F2){const n=(a-1)*t;return e.slice(n,n+t)}function Ui(e){return v0.find(a=>a.slug===e)}function fg(e){return v0.filter(a=>a.category===e)}function pg(e,a=3){const t=e.relatedPosts.map(i=>Ui(i)).filter(i=>!!i),n=v0.filter(i=>i.slug!==e.slug&&!t.some(r=>r.slug===i.slug));return[...t,...n].slice(0,a)}function hg(e){if(!e)return"";const a=new Date(e);return Number.isNaN(a.getTime())?e:a.toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}const vg=["que-prueba-estadistica-utilizar-guia-test-correcto","como-aprobar-calculo-i-ingenieria-seis-semanas","preparar-selectividad-con-calendario"];function Zr({data:e}){return o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}function md({children:e}){return o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-spark/35 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-spark"}),e]})}function Hc({post:e}){return o.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground",children:[o.jsx("span",{className:"rounded-full border border-spark/40 bg-spark/10 px-3 py-1 font-medium uppercase tracking-[0.18em] text-spark",children:e.category||e.tag}),e.date&&o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(g6,{className:"h-3.5 w-3.5"}),hg(e.date)]}),o.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[o.jsx(q6,{className:"h-3.5 w-3.5"}),e.readingMinutes," min de lectura"]})]})}function qr({post:e,headingLevel:a=2}){const t=`h${a}`;return o.jsxs(ce,{to:`/blog/${e.slug}/`,className:"nebula-card group flex h-full flex-col rounded-3xl p-7 transition-colors hover:border-action/35 hover:bg-action/5",children:[o.jsx(Hc,{post:e}),o.jsx(t,{className:"mt-5 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-spark",children:e.title}),o.jsx("p",{className:"mt-3 grow text-sm leading-relaxed text-muted-foreground",children:e.description}),o.jsxs("span",{className:"mt-6 inline-flex items-center gap-2 text-sm font-medium text-link",children:["Leer entrada",o.jsx(Bt,{className:"h-4 w-4 transition-transform group-hover:translate-x-0.5"})]})]})}function gg(e){return Array.from(e.matchAll(/^##\s+(.+)$/gm)).slice(0,8).map(a=>{const t=a[1].replace(/\*\*/g,"").trim();return{id:t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),text:t}})}function I2({currentPage:e,totalPages:a,pathForPage:t,label:n="Paginación del blog"}){if(a<=1)return null;const i=Array.from({length:a},(s,u)=>u+1),r="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 px-3 text-sm font-medium text-link transition-colors hover:border-action/35 hover:bg-action/5",l="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-action/50 bg-action px-3 text-sm font-semibold text-primary-foreground";return o.jsxs("nav",{className:"mt-12 flex flex-wrap items-center justify-center gap-2","aria-label":n,children:[e>1&&o.jsx(ce,{to:t(e-1),className:r,rel:"prev",children:"Anterior"}),i.map(s=>s===e?o.jsx("span",{className:l,"aria-current":"page",children:s},s):o.jsx(ce,{to:t(s),className:r,children:s},s)),e<a&&o.jsx(ce,{to:t(e+1),className:r,rel:"next",children:"Siguiente"})]})}function H1({pageNumber:e=1}){const a=K2(),t=P2(a),n=Number.isInteger(e)?e:1;return n<1||n>t?o.jsx(ks,{}):o.jsx(bg,{posts:a,currentPage:n,totalPages:t})}function bg({posts:e,currentPage:a,totalPages:t}){const n=W.corePages.find(u=>u.kind==="blog"),i=ql(a),r=J2(e,a),l=vg.map(u=>Ui(u)).filter(u=>!!u),s=W.blogCategories.map(u=>Ui(u.pillarPost)).filter(u=>!!u);return Pa({title:a===1?n.title:`${n.h1}, página ${a} | ${W.site.displayName}`,description:a===1?n.description:`Página ${a} del blog de Método Nebula: guías académicas, problemas resueltos y estrategias de estudio.`,path:i,prevPath:a>1?ql(a-1):void 0,nextPath:a<t?ql(a+1):void 0}),o.jsxs(mt,{children:[o.jsx(Zr,{data:{"@context":"https://schema.org","@type":"Blog",name:n.h1,description:n.description,url:De(i),publisher:{"@type":"EducationalOrganization",name:W.site.displayName}}}),o.jsxs("section",{className:"relative overflow-hidden border-b border-white/5",children:[o.jsx("div",{className:"nebula-aurora pointer-events-none absolute inset-0 opacity-60"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70"}),o.jsx("div",{className:"relative mx-auto max-w-7xl px-6 pt-16 pb-14 md:pt-24 md:pb-16",children:o.jsxs("div",{className:"max-w-3xl",children:[o.jsx(md,{children:"Blog"}),o.jsx("h1",{className:"mt-5 font-display text-4xl font-bold leading-[1.05] nebula-gradient-text md:text-6xl",children:n.h1}),o.jsx("p",{className:"mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",children:a===1?n.intro:`Página ${a} de ${t} del archivo del blog.`})]})})]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[a===1&&o.jsxs("div",{className:"mb-14 space-y-14",children:[o.jsxs("section",{children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"Contenidos destacados"}),o.jsx("div",{className:"mt-6 grid gap-5 lg:grid-cols-3",children:l.map(u=>o.jsx(qr,{post:u},u.slug))})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"Guías principales"}),o.jsx("div",{className:"mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4",children:s.map(u=>o.jsx(qr,{post:u,headingLevel:3},u.slug))})]}),o.jsxs("section",{children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"Categorías"}),o.jsx("div",{className:"mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",children:W.blogCategories.map(u=>o.jsxs(ce,{to:i0(u.slug),className:"rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-action/35 hover:bg-action/5",children:[o.jsx("span",{className:"text-sm font-semibold text-link",children:u.name}),o.jsx("span",{className:"mt-1 block text-xs text-muted-foreground",children:u.description})]},u.slug))})]})]}),e.length===0?o.jsx("p",{className:"text-muted-foreground",children:"Todavía no hay entradas publicadas."}):o.jsxs(o.Fragment,{children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:a===1?"Artículos recientes":`Archivo, página ${a}`}),o.jsx("div",{className:"mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3",children:r.map(u=>o.jsx(qr,{post:u},u.slug))}),o.jsx(I2,{currentPage:a,totalPages:t,pathForPage:ql})]})]})})]})}function yg({slug:e,pageNumber:a=1}){const t=a7(e);if(!t)return o.jsx(ks,{});const n=fg(t.name),i=P2(n),r=Number.isInteger(a)?a:1;return r<1||r>i?o.jsx(ks,{}):o.jsx(xg,{category:t,posts:n,currentPage:r,totalPages:i})}function xg({category:e,posts:a,currentPage:t,totalPages:n}){var p;const i=Ml(e.slug,t),r=J2(a,t),l=Ui(e.pillarPost),s=W.servicePages.find(g=>g.path===e.relatedService),u=t===1?`${e.name}: artículos y guías | ${W.site.displayName}`:`${e.name}: artículos y guías, página ${t} | ${W.site.displayName}`,m=t===1?`${e.description} Artículos prácticos de Método Nebula para estudiar con más estructura.`:`Página ${t} de la categoría ${e.name}: artículos prácticos de Método Nebula para estudiar con más estructura.`;return Pa({title:u,description:m,path:i,prevPath:t>1?Ml(e.slug,t-1):void 0,nextPath:t<n?Ml(e.slug,t+1):void 0}),o.jsxs(mt,{children:[o.jsx(Zr,{data:{"@context":"https://schema.org","@type":"CollectionPage",name:u,description:m,url:De(i),isPartOf:{"@type":"Blog",name:(p=W.corePages.find(g=>g.kind==="blog"))==null?void 0:p.h1}}}),o.jsx(Zr,{data:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:De("/")},{"@type":"ListItem",position:2,name:"Blog",item:De("/blog/")},{"@type":"ListItem",position:3,name:e.name,item:De(i)}]}}),o.jsxs("section",{className:"relative overflow-hidden border-b border-white/5",children:[o.jsx("div",{className:"nebula-aurora pointer-events-none absolute inset-0 opacity-50"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70"}),o.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 pt-12 pb-12 md:pt-16",children:[o.jsxs(ce,{to:"/blog/",className:"inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-link",children:[o.jsx(Qu,{className:"h-4 w-4"}),"Todas las categorías"]}),o.jsx("div",{className:"mt-8",children:o.jsx(md,{children:"Categoría"})}),o.jsx("h1",{className:"mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl",children:e.name}),o.jsx("p",{className:"mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",children:t===1?e.description:`Página ${t} de ${n} de esta categoría.`})]})]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[t===1&&o.jsxs("div",{className:"mb-12 grid gap-5 lg:grid-cols-[1fr_0.8fr]",children:[l&&o.jsxs("section",{children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"Guía principal"}),o.jsx("div",{className:"mt-5",children:o.jsx(qr,{post:l})})]}),s&&o.jsxs("aside",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-7",children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"Apoyo relacionado"}),o.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:"Si esta categoría conecta con una asignatura o examen real, la página de servicio explica el acompañamiento, los contenidos y el siguiente paso."}),o.jsxs(ce,{to:s.path,className:"mt-6 inline-flex items-center gap-2 text-sm font-medium text-link underline-offset-4 hover:underline",children:[s.h1,o.jsx(Bt,{className:"h-4 w-4"})]})]})]}),a.length===0?o.jsx("p",{className:"text-muted-foreground",children:"Todavía no hay entradas en esta categoría."}):o.jsxs(o.Fragment,{children:[o.jsxs("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:["Artículos de ",e.name]}),o.jsx("div",{className:"mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3",children:r.map(g=>o.jsx(qr,{post:g},g.slug))}),o.jsx(I2,{currentPage:t,totalPages:n,pathForPage:g=>Ml(e.slug,g),label:`Paginación de ${e.name}`})]})]})})]})}function Sg({slug:e}){const a=Ui(e);return a?o.jsx(zg,{post:a}):o.jsx(ks,{})}function zg({post:e}){const a=`/blog/${e.slug}/`,t=pg(e,3),n=W.blogCategories.find(s=>s.name===e.category),i=W.servicePages.find(s=>s.path===e.relatedService),r=gg(e.body),l={"@context":"https://schema.org","@type":"BlogPosting",headline:e.title,description:e.description,author:{"@type":"EducationalOrganization",name:W.site.displayName,url:De("/")},datePublished:e.date,dateModified:e.updated,mainEntityOfPage:De(a),publisher:{"@type":"EducationalOrganization",name:W.site.displayName,logo:{"@type":"ImageObject",url:De(W.site.logo)}},...e.image&&e.image!==W.site.logo?{image:De(e.image)}:{}};return Pa({title:`${e.title} | ${W.site.displayName}`,description:e.description,path:a,type:"article",image:e.image}),o.jsxs(mt,{children:[o.jsx(Zr,{data:l}),o.jsx(Zr,{data:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:De("/")},{"@type":"ListItem",position:2,name:"Blog",item:De("/blog/")},{"@type":"ListItem",position:3,name:e.title,item:De(a)}]}}),o.jsxs("article",{children:[o.jsxs("header",{className:"relative overflow-hidden border-b border-white/5",children:[o.jsx("div",{className:"nebula-aurora pointer-events-none absolute inset-0 opacity-50"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-px blog-title-line opacity-70"}),o.jsxs("div",{className:"relative mx-auto max-w-3xl px-6 pt-12 pb-12 md:pt-16",children:[o.jsxs(ce,{to:"/blog/",className:"inline-flex items-center gap-2 text-sm text-link transition-colors hover:text-link",children:[o.jsx(Qu,{className:"h-4 w-4"}),"Todas las entradas"]}),o.jsx("div",{className:"mt-8",children:o.jsx(Hc,{post:e})}),o.jsx("h1",{className:"mt-5 font-display text-3xl font-bold leading-[1.1] text-foreground md:text-5xl",children:e.title}),e.description&&o.jsx("p",{className:"mt-5 text-lg text-muted-foreground",children:e.description})]})]}),o.jsxs("div",{className:"mx-auto max-w-3xl px-6 py-14 text-[1.05rem]",children:[r.length>=4&&o.jsxs("nav",{"aria-label":"Índice del artículo",className:"mb-10 rounded-3xl border border-white/8 bg-white/[0.02] p-6 text-sm",children:[o.jsx("p",{className:"font-display font-semibold text-foreground",children:"Índice"}),o.jsx("ol",{className:"mt-4 space-y-2",children:r.map(s=>o.jsx("li",{children:o.jsx("a",{href:`#${s.id}`,className:"text-link underline-offset-4 hover:underline",children:s.text})},s.id))})]}),o.jsx(k8,{markdown:e.body}),o.jsxs("div",{className:"mt-14 rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center",children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"¿Quieres aplicar esto a tu asignatura o examen?"}),o.jsx("p",{className:"mx-auto mt-3 max-w-xl text-sm text-muted-foreground",children:"Empezamos con una llamada de diagnóstico para entender tu objetivo, tu punto de partida y tu fecha. El servicio relacionado ayuda a aterrizarlo en un plan concreto."}),o.jsxs("div",{className:"mt-6 flex flex-col justify-center gap-3 sm:flex-row",children:[o.jsx(et,{href:"/contacto/",children:"Solicitar diagnóstico"}),i&&o.jsx(ce,{to:i.path,className:"inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-link transition-colors hover:border-white/30 hover:bg-white/[0.05]",children:"Ver apoyo relacionado"})]})]})]})]}),n&&o.jsx("section",{className:"border-t border-white/5 py-12",children:o.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between",children:[o.jsxs("p",{className:"text-sm text-muted-foreground",children:["Este artículo forma parte del clúster de"," ",o.jsx(ce,{to:i0(n.slug),className:"text-link hover:underline",children:n.name}),"."]}),i&&o.jsxs(ce,{to:i.path,className:"text-sm font-medium text-link underline-offset-4 hover:underline",children:["Servicio relacionado: ",i.h1]})]})}),t.length>0&&o.jsx("section",{className:"border-t border-white/5 py-16",children:o.jsxs("div",{className:"mx-auto max-w-7xl px-6",children:[o.jsx("h2",{className:"font-display text-2xl font-semibold nebula-heading-text",children:"Seguir leyendo"}),o.jsx("div",{className:"mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3",children:t.map(s=>o.jsxs(ce,{to:`/blog/${s.slug}/`,className:"nebula-card group flex h-full flex-col rounded-3xl p-7 transition-transform hover:-translate-y-1",children:[o.jsx(Hc,{post:s}),o.jsx("h3",{className:"mt-4 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-spark",children:s.title}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:s.description})]},s.slug))})]})})]})}function ks(){return Pa({title:`Entrada no encontrada | ${W.site.displayName}`,description:"No encontramos esta entrada del blog de Método Nebula.",path:"/blog/",robots:"noindex,follow"}),o.jsx(mt,{children:o.jsxs("section",{className:"mx-auto max-w-3xl px-6 py-28 text-center",children:[o.jsx(md,{children:"Blog"}),o.jsx("h1",{className:"mt-5 font-display text-3xl font-bold md:text-4xl",children:"No encontramos esta entrada"}),o.jsx("p",{className:"mt-4 text-muted-foreground",children:"Puede que el enlace haya cambiado o que la entrada ya no exista."}),o.jsx("div",{className:"mt-8 flex justify-center",children:o.jsxs(ce,{to:"/blog/",className:"inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/[0.05]",children:[o.jsx(Qu,{className:"h-4 w-4"}),"Volver al blog"]})})]})})}function wg({items:e}){return o.jsx("nav",{"aria-label":"Migas de pan",className:"text-xs text-muted-foreground",children:o.jsxs("ol",{className:"flex flex-wrap items-center gap-2",children:[o.jsx("li",{children:o.jsx(ce,{to:"/",className:"text-link transition-colors hover:text-link",children:"Inicio"})}),e.map((a,t)=>o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx("span",{"aria-hidden":"true",children:"/"}),t===e.length-1?o.jsx("span",{className:"text-foreground/80",children:a.label}):o.jsx(ce,{to:a.href,className:"text-link transition-colors hover:text-link",children:a.label})]},a.href))]})})}function Ii({label:e,page:a,breadcrumbs:t}){return o.jsxs("header",{className:"relative overflow-hidden border-b border-white/5",children:[o.jsx("div",{className:"nebula-aurora pointer-events-none absolute inset-0 opacity-60"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-px nebula-title-line opacity-70"}),o.jsxs("div",{className:"relative mx-auto max-w-7xl px-6 pt-12 pb-14 md:pt-20 md:pb-18",children:[o.jsx(wg,{items:t}),o.jsxs("div",{className:"mt-8 max-w-4xl",children:[o.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-spark/30 bg-spark/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-spark",children:[o.jsx(Yu,{className:"h-3.5 w-3.5"}),e]}),o.jsx("h1",{className:"mt-5 font-display text-4xl font-bold leading-[1.08] nebula-gradient-text md:text-6xl",children:a.h1}),o.jsx("p",{className:"mt-5 max-w-2xl text-base text-muted-foreground md:text-lg",children:a.intro})]})]})]})}function _s({data:e}){return o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}function Je({children:e,className:a="text-3xl"}){return o.jsxs("div",{children:[o.jsx("span",{className:"block h-1 w-14 rounded-full nebula-title-line"}),o.jsx("h2",{className:`mt-3 font-display font-semibold nebula-heading-text ${a}`,children:e})]})}function jg(){const e=W.serviceOverview;Pa({title:e.title,description:e.description,path:e.path});const a=[{title:"Clases particulares",text:"Asignaturas concretas con diagnóstico, práctica guiada y seguimiento.",paths:["/clases-particulares/matematicas-universidad/","/clases-particulares/fisica-ingenieria/","/clases-particulares/estadistica-universidad/","/clases-particulares/quimica/","/clases-particulares/economia-ade/"]},{title:"Preparación con fecha",text:"Selectividad, recuperaciones y programas internacionales con calendario inverso.",paths:["/clases-particulares/selectividad/","/clases-particulares/gcse-ib/"]},{title:"Formación tecnológica",text:"Programación académica, Python, SQL, datos e itinerarios técnicos diferenciados.",paths:["/clases-particulares/programacion-universidad/"]}];return o.jsxs(mt,{children:[o.jsx(_s,{data:{"@context":"https://schema.org","@type":"Service",name:e.h1,provider:{"@type":"EducationalOrganization",name:W.site.displayName},areaServed:"España",url:De(e.path)}}),o.jsx(Ii,{label:"Clases desde ESO",page:e,breadcrumbs:[{label:"Clases desde ESO",href:e.path}]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.75fr_1.25fr]",children:[o.jsxs("div",{children:[o.jsx(Je,{children:"Un mapa para cada objetivo"}),o.jsx("p",{className:"mt-4 text-muted-foreground",children:"La oferta se separa para que un alumno de asignatura, una preparación con fecha y una ruta tecnológica no compitan por la misma atención. Cada entrada conserva diagnóstico, plan y seguimiento."}),o.jsx(et,{href:"/contacto/",className:"mt-6",children:"Solicitar diagnóstico"})]}),o.jsx("div",{className:"space-y-5",children:a.map(t=>o.jsxs("section",{className:"border-t border-white/8 pt-6 first:border-t-0 first:pt-0",children:[o.jsx("h2",{className:"font-display text-xl font-semibold nebula-heading-text",children:t.title}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.text}),o.jsx("div",{className:"mt-5 grid gap-4 sm:grid-cols-2",children:t.paths.map(n=>{const i=W.servicePages.find(r=>r.path===n);return i?o.jsxs(ce,{to:i.path,className:"group rounded-2xl border border-white/8 p-5 transition-colors hover:border-action/35 hover:bg-action/5",children:[o.jsx("h3",{className:"font-display text-lg font-semibold group-hover:text-link",children:i.h1}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:i.description}),o.jsxs("span",{className:"mt-4 inline-flex items-center gap-2 text-sm text-link",children:["Ver programa ",o.jsx(Bt,{className:"h-4 w-4"})]})]},i.path):null})})]},t.title))})]})})]})}function Eg({page:e}){Pa({title:e.title,description:e.description,path:e.path});const a=e.relatedPosts.map(t=>Ui(t)).filter(Boolean);return o.jsxs(mt,{children:[o.jsx(_s,{data:{"@context":"https://schema.org","@type":"Service",name:e.h1,description:e.description,provider:{"@type":"EducationalOrganization",name:W.site.displayName},url:De(e.path)}}),o.jsx(_s,{data:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:De("/")},{"@type":"ListItem",position:2,name:"Clases desde ESO",item:De(W.serviceOverview.path)},{"@type":"ListItem",position:3,name:e.h1,item:De(e.path)}]}}),o.jsx(Ii,{label:"Servicio",page:{h1:e.h1,intro:e.audience},breadcrumbs:[{label:"Clases desde ESO",href:W.serviceOverview.path},{label:e.h1,href:e.path}]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.75fr]",children:[o.jsxs("div",{className:"space-y-10",children:[o.jsx(wo,{title:"Problemas habituales",items:e.problems}),o.jsx(wo,{title:"Bloques que podemos trabajar",items:e.topics}),o.jsx(wo,{title:"Cómo funciona el método",items:e.method,ordered:!0}),o.jsxs("section",{children:[o.jsx(Je,{className:"text-2xl",children:"Qué diferencia este acompañamiento"}),o.jsx("p",{className:"mt-3 leading-relaxed text-muted-foreground",children:e.differentiator})]}),o.jsxs("div",{className:"grid gap-5 md:grid-cols-2",children:[o.jsxs("section",{className:"rounded-2xl border border-white/8 bg-white/[0.02] p-5",children:[o.jsx(Je,{className:"text-xl",children:"Qué debe aportar el alumno"}),o.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:e.studentInput})]}),o.jsxs("section",{className:"rounded-2xl border border-white/8 bg-white/[0.02] p-5",children:[o.jsx(Je,{className:"text-xl",children:"Resultados razonables"}),o.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:e.reasonableOutcomes})]})]}),o.jsxs("section",{children:[o.jsx(Je,{className:"text-2xl",children:"Perfil docente"}),o.jsx("p",{className:"mt-3 leading-relaxed text-muted-foreground",children:e.profile})]}),o.jsxs("section",{children:[o.jsx(Je,{className:"text-2xl",children:"Preguntas frecuentes"}),o.jsx("div",{className:"mt-5 divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]",children:e.faq.map(t=>o.jsxs("div",{className:"p-5",children:[o.jsx("h3",{className:"font-semibold",children:t.q}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:t.a})]},t.q))})]})]}),o.jsxs("aside",{className:"space-y-5",children:[o.jsxs("div",{className:"nebula-card rounded-3xl p-6",children:[o.jsx(Je,{className:"text-xl",children:"Diagnóstico inicial"}),o.jsx("p",{className:"mt-3 text-sm text-muted-foreground",children:e.nextStep}),o.jsx(et,{href:"/contacto/",className:"mt-5 w-full",children:"Solicitar diagnóstico"})]}),a.length>0&&o.jsxs("div",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(Je,{className:"text-xl",children:"Lecturas relacionadas"}),o.jsx("div",{className:"mt-4 space-y-3",children:a.map(t=>t?o.jsxs(ce,{to:`/blog/${t.slug}/`,className:"block rounded-2xl border border-white/8 p-4 text-sm hover:border-white/20",children:[o.jsx("span",{className:"inline-flex rounded-full border border-spark/35 bg-spark/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.16em] text-spark",children:t.category}),o.jsx("span",{className:"mt-1 block font-medium",children:t.title})]},t.slug):null)})]})]})]})})]})}function wo({title:e,items:a,ordered:t}){const n=t?"ol":"ul";return o.jsxs("section",{children:[o.jsx(Je,{className:"text-2xl",children:e}),o.jsx(n,{className:"mt-5 grid gap-3 sm:grid-cols-2",children:a.map((i,r)=>o.jsxs("li",{className:"flex items-start gap-3 rounded-2xl border border-white/8 p-4",children:[t?o.jsxs("span",{className:"font-display text-sm font-semibold text-action",children:[r+1,"."]}):o.jsx(Fi,{className:"mt-0.5 h-4 w-4 shrink-0 text-action"}),o.jsx("span",{className:"text-sm text-foreground/85",children:i})]},i))})]})}function Ng(){const e=W.corePages.find(n=>n.kind==="about"),a=["Graduado en Matemáticas.","Máster en Big Data e Inteligencia Artificial.","Experiencia profesional en tecnología.","Más de 6 años dando clases.","Trabajo desde ESO y Bachillerato hasta Universidad, exámenes internacionales y perfiles técnicos."],t=[{title:"Primero entiendo el bloqueo",text:"Antes de llenar una clase de ejercicios, reviso qué falta: base matemática, método de estudio, lectura del enunciado, práctica real o calendario."},{title:"Después ordeno el camino",text:"Cada sesión tiene una función dentro del plan: explicar, practicar, corregir errores, preparar examen o construir autonomía."},{title:"Finalmente medimos progreso",text:"No basta con salir de clase con buena sensación. El objetivo es que puedas resolver, justificar y repetir el razonamiento sin depender de una solución delante."}];return Pa({title:e.title,description:e.description,path:e.path}),o.jsxs(mt,{children:[o.jsx(_s,{data:{"@context":"https://schema.org","@type":"AboutPage",name:e.h1,description:e.description,about:{"@type":"EducationalOrganization",name:W.site.displayName,knowsAbout:W.site.author.knowsAbout},url:De(e.path)}}),o.jsx(Ii,{label:"Sobre Método Nebula",page:e,breadcrumbs:[{label:"Sobre Nebula",href:e.path}]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr]",children:[o.jsxs("div",{className:"space-y-8",children:[o.jsxs("section",{children:[o.jsx(Je,{children:"Quién soy"}),o.jsxs("div",{className:"mt-4 space-y-4 leading-relaxed text-muted-foreground",children:[o.jsx("p",{children:"Método Nebula es un proyecto de mentoría académica y profesional. El trabajo está en la intersección entre la matemática, la ciencia, la programación y la forma en que una persona aprende cuando tiene una fecha, un examen o una decisión importante delante."}),o.jsx("p",{children:"Método Nebula nace de una idea sencilla: muchas veces el alumno no necesita solo más horas, sino un diagnóstico honesto, una explicación clara y una estructura que convierta el esfuerzo en progreso."})]})]}),o.jsxs("section",{children:[o.jsx(Je,{children:"Cómo entiendo la enseñanza"}),o.jsx("p",{className:"mt-4 leading-relaxed text-muted-foreground",children:"Enseñar no es resolver por el alumno. Es ayudarle a ver el mapa: qué pregunta plantea el problema, qué herramientas sirven, por qué aparece cada paso y cómo comprobar si el resultado tiene sentido."}),o.jsx("div",{className:"mt-6 grid gap-4 md:grid-cols-3",children:t.map(n=>o.jsxs("article",{className:"rounded-2xl border border-white/8 bg-white/[0.02] p-5",children:[o.jsx("h3",{className:"font-semibold nebula-subheading-text",children:n.title}),o.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:n.text})]},n.title))})]})]}),o.jsxs("aside",{className:"space-y-5",children:[o.jsxs("div",{className:"nebula-card rounded-3xl p-6",children:[o.jsx(Je,{className:"text-2xl",children:"En pocas líneas"}),o.jsx("ul",{className:"mt-5 space-y-3",children:a.map(n=>o.jsxs("li",{className:"flex items-start gap-3 text-sm",children:[o.jsx(Fi,{className:"mt-0.5 h-4 w-4 shrink-0 text-action"}),o.jsx("span",{className:"text-foreground/90",children:n})]},n))})]}),o.jsxs("div",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(Je,{className:"text-xl",children:"Áreas de trabajo"}),o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:W.site.author.knowsAbout.map(n=>o.jsx("span",{className:"rounded-full border border-white/10 px-3 py-1 text-xs text-foreground/80",children:n},n))}),o.jsx(et,{href:"/contacto/",className:"mt-6 w-full",children:"Solicitar diagnóstico"})]})]})]})})]})}function Ag(){const e=W.corePages.find(a=>a.kind==="method");return Pa({title:e.title,description:e.description,path:e.path}),o.jsxs(mt,{children:[o.jsx(Ii,{label:"Método",page:e,breadcrumbs:[{label:"Metodología",href:e.path}]}),o.jsx(Tg,{sections:[{title:"1. Diagnóstico",text:"Antes de proponer clases se revisan nivel, asignatura, fecha, temario, materiales y tipo de examen. El objetivo es detectar el cuello de botella real."},{title:"2. Plan",text:"El trabajo se ordena en bloques semanales. Cada bloque tiene una prioridad, una práctica y una evidencia de progreso."},{title:"3. Clase y material",text:"La sesión combina explicación, resolución guiada y práctica. El material se adapta al objetivo, evitando PDFs genéricos sin conexión con el examen."},{title:"4. Seguimiento",text:"El plan se revisa cuando aparecen errores repetidos, retrasos o cambios de calendario. La personalización ocurre durante todo el proceso."}]})]})}function qg(){const e=W.corePages.find(n=>n.kind==="contact"),{copied:a,copy:t}=n0();return Pa({title:e.title,description:e.description,path:e.path}),o.jsxs(mt,{children:[o.jsx(Ii,{label:"Contacto",page:e,breadcrumbs:[{label:"Contacto",href:e.path}]}),o.jsx("section",{className:"py-16 md:py-20",children:o.jsxs("div",{className:"mx-auto max-w-3xl px-6",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("button",{type:"button",onClick:t,className:"flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors hover:border-white/25",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsx(a0,{className:"h-5 w-5 text-action"}),o.jsxs("span",{children:[o.jsx("span",{className:"block font-semibold",children:"WhatsApp"}),o.jsx("span",{className:"text-sm text-muted-foreground",children:Zu})]})]}),o.jsx("span",{className:"text-sm text-action",children:a?"Copiado":"Copiar"})]}),o.jsxs("a",{href:Fu,className:"flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsx(Xu,{className:"h-5 w-5 text-action"}),o.jsxs("span",{children:[o.jsx("span",{className:"block font-semibold",children:"Email"}),o.jsx("span",{className:"text-sm text-muted-foreground",children:t0})]})]}),o.jsx(Bt,{className:"h-4 w-4"})]})]}),o.jsx("p",{className:"mt-8 text-sm leading-relaxed text-muted-foreground",children:"Cuéntanos asignatura, fecha de examen, temario y punto de partida. Con esa información revisamos si Método Nebula encaja y qué plan tendría más sentido."})]})})]})}function Mg(){const e=K2(),a=W.blogCategories.map(n=>({category:n,posts:e.filter(i=>i.category===n.name)})),t={h1:"Mapa del sitio",intro:"Todas las páginas principales de Método Nebula organizadas para encontrar servicios, categorías y artículos."};return Pa({title:`Mapa del sitio | ${W.site.displayName}`,description:"Mapa HTML de Método Nebula con enlaces a servicios, categorías del blog y artículos publicados.",path:"/mapa-del-sitio/"}),o.jsxs(mt,{children:[o.jsx(Ii,{label:"Índice",page:t,breadcrumbs:[{label:"Mapa del sitio",href:"/mapa-del-sitio/"}]}),o.jsxs("section",{className:"py-16 md:py-20",children:[o.jsxs("div",{className:"mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3",children:[o.jsxs("section",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(Je,{className:"text-2xl",children:"Páginas principales"}),o.jsxs("ul",{className:"mt-5 space-y-3 text-sm",children:[o.jsx("li",{children:o.jsx(ce,{to:"/",className:"text-link transition-colors hover:text-link",children:"Inicio"})}),o.jsx("li",{children:o.jsx(ce,{to:"/clases-particulares/universidad/",className:"text-link transition-colors hover:text-link",children:"Clases desde ESO"})}),o.jsx("li",{children:o.jsx(ce,{to:"/metodologia/",className:"text-link transition-colors hover:text-link",children:"Metodología"})}),o.jsx("li",{children:o.jsx(ce,{to:"/sobre-nebula/",className:"text-link transition-colors hover:text-link",children:"Sobre Nebula"})}),o.jsx("li",{children:o.jsx(ce,{to:"/contacto/",className:"text-link transition-colors hover:text-link",children:"Contacto"})})]})]}),o.jsxs("section",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(Je,{className:"text-2xl",children:"Servicios"}),o.jsx("ul",{className:"mt-5 space-y-3 text-sm",children:W.servicePages.map(n=>o.jsx("li",{children:o.jsx(ce,{to:n.path,className:"text-link transition-colors hover:text-link",children:n.h1})},n.path))})]}),o.jsxs("section",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(Je,{className:"text-2xl",children:"Categorías"}),o.jsxs("ul",{className:"mt-5 space-y-3 text-sm",children:[o.jsx("li",{children:o.jsx(ce,{to:"/blog/",className:"text-link transition-colors hover:text-link",children:"Blog"})}),W.blogCategories.map(n=>o.jsx("li",{children:o.jsx(ce,{to:i0(n.slug),className:"text-link transition-colors hover:text-link",children:n.name})},n.slug))]})]})]}),o.jsx("div",{className:"mx-auto mt-8 max-w-7xl px-6",children:o.jsxs("section",{className:"rounded-3xl border border-white/8 bg-white/[0.02] p-6",children:[o.jsx(Je,{className:"text-2xl",children:"Artículos por categoría"}),o.jsx("div",{className:"mt-6 grid gap-6 lg:grid-cols-2",children:a.map(({category:n,posts:i})=>o.jsxs("section",{className:"border-t border-white/8 pt-5 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-5",children:[o.jsx("h3",{className:"font-display text-lg font-semibold nebula-subheading-text",children:n.name}),o.jsx("ul",{className:"mt-3 space-y-2 text-sm",children:i.map(r=>o.jsx("li",{children:o.jsx(ce,{to:`/blog/${r.slug}/`,className:"text-link underline-offset-4 hover:underline",children:r.title})},r.slug))})]},n.slug))})]})})]})]})}function Tg({sections:e}){return o.jsx("section",{className:"py-16 md:py-20",children:o.jsx("div",{className:"mx-auto grid max-w-5xl gap-5 px-6 md:grid-cols-2",children:e.map((a,t)=>o.jsxs("article",{className:"nebula-card relative overflow-hidden rounded-3xl p-7",children:[o.jsx("span",{className:"absolute inset-x-0 top-0 h-1 nebula-title-line"}),o.jsx("span",{className:"font-display text-sm font-semibold text-violet-soft",children:String(t+1).padStart(2,"0")}),o.jsx("h2",{className:"mt-3 font-display text-2xl font-semibold nebula-heading-text",children:a.title.replace(/^\d+\.\s*/,"")}),o.jsx("p",{className:"mt-3 leading-relaxed text-muted-foreground",children:a.text})]},a.title))})})}function Rl(){return Pa({title:"Página no encontrada | Método Nebula",description:"La página solicitada no existe. Vuelve al inicio, consulta el blog o contacta con Método Nebula.",path:"/404/",robots:"noindex,follow"}),o.jsxs("div",{className:"min-h-screen bg-background text-foreground antialiased",children:[o.jsxs("main",{className:"mx-auto max-w-3xl px-6 py-28 text-center",children:[o.jsx(tt,{children:"404"}),o.jsx("h1",{className:"mt-5 font-display text-4xl font-bold",children:"Página no encontrada"}),o.jsx("p",{className:"mt-4 text-muted-foreground",children:"El enlace puede haber cambiado. Puedes volver al inicio, revisar las clases desde ESO o contactar para explicar tu caso."}),o.jsxs("div",{className:"mt-8 flex flex-wrap justify-center gap-3",children:[o.jsx(et,{href:"/",children:"Inicio"}),o.jsx("a",{href:"/blog/",className:"inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium",children:"Blog"}),o.jsx("a",{href:"/clases-particulares/universidad/",className:"inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium",children:"Clases desde ESO"}),o.jsx("a",{href:"/contacto/",className:"inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium",children:"Contacto"})]})]}),o.jsx(Pu,{})]})}function Cg(){const a=r7().replace(/\/+$/,"")||"/";if(a==="/blog")return o.jsx(H1,{});if(a.startsWith("/blog/pagina/")){const n=/^\/blog\/pagina\/(\d+)$/.exec(a);if(!n)return o.jsx(Rl,{});const i=Number.parseInt(n[1],10);return o.jsx(H1,{pageNumber:i})}if(a.startsWith("/blog/categoria/")){const n=a.slice(16),i=/^([^/]+)(?:\/pagina\/(\d+))?$/.exec(n);return i?o.jsx(yg,{slug:decodeURIComponent(i[1]),pageNumber:i[2]?Number.parseInt(i[2],10):1}):o.jsx(Rl,{})}if(a.startsWith("/blog/"))return o.jsx(Sg,{slug:decodeURIComponent(a.slice(6))});if(a==="/clases-particulares/universidad")return o.jsx(jg,{});const t=t7(a);return t?o.jsx(Eg,{page:t}):a==="/sobre-nebula"?o.jsx(Ng,{}):a==="/metodologia"?o.jsx(Ag,{}):a==="/contacto"?o.jsx(qg,{}):a==="/mapa-del-sitio"?o.jsx(Mg,{}):a==="/"?o.jsx(o7,{}):a==="/404"?o.jsx(Rl,{}):o.jsx(Rl,{})}const W2=document.getElementById("root");if(!W2)throw new Error("Root element #root not found");i6.createRoot(W2).render(o.jsx(ga.StrictMode,{children:o.jsx(Cg,{})}));
