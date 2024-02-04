var uC=Object.defineProperty;var cC=(t,e,n)=>e in t?uC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var So=(t,e,n)=>(cC(t,typeof e!="symbol"?e+"":e,n),n);function dC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L1={exports:{}},Vc={},M1={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),hC=Symbol.for("react.portal"),fC=Symbol.for("react.fragment"),pC=Symbol.for("react.strict_mode"),mC=Symbol.for("react.profiler"),gC=Symbol.for("react.provider"),yC=Symbol.for("react.context"),vC=Symbol.for("react.forward_ref"),_C=Symbol.for("react.suspense"),wC=Symbol.for("react.memo"),EC=Symbol.for("react.lazy"),i0=Symbol.iterator;function xC(t){return t===null||typeof t!="object"?null:(t=i0&&t[i0]||t["@@iterator"],typeof t=="function"?t:null)}var V1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$1=Object.assign,j1={};function fo(t,e,n){this.props=t,this.context=e,this.refs=j1,this.updater=n||V1}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function F1(){}F1.prototype=fo.prototype;function om(t,e,n){this.props=t,this.context=e,this.refs=j1,this.updater=n||V1}var am=om.prototype=new F1;am.constructor=om;$1(am,fo.prototype);am.isPureReactComponent=!0;var s0=Array.isArray,U1=Object.prototype.hasOwnProperty,lm={current:null},z1={key:!0,ref:!0,__self:!0,__source:!0};function B1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)U1.call(e,r)&&!z1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ya,type:t,key:s,ref:o,props:i,_owner:lm.current}}function IC(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function um(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function TC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var o0=/\/+/g;function dh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TC(""+t.key):e.toString(36)}function ou(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ya:case hC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+dh(o,0):r,s0(i)?(n="",t!=null&&(n=t.replace(o0,"$&/")+"/"),ou(i,e,n,"",function(u){return u})):i!=null&&(um(i)&&(i=IC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(o0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",s0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+dh(s,a);o+=ou(s,e,n,l,i)}else if(l=xC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+dh(s,a++),o+=ou(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tl(t,e,n){if(t==null)return t;var r=[],i=0;return ou(t,r,"","",function(s){return e.call(n,s,i++)}),r}function SC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},au={transition:null},CC={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:au,ReactCurrentOwner:lm};he.Children={map:Tl,forEach:function(t,e,n){Tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tl(t,function(){e++}),e},toArray:function(t){return Tl(t,function(e){return e})||[]},only:function(t){if(!um(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=fo;he.Fragment=fC;he.Profiler=mC;he.PureComponent=om;he.StrictMode=pC;he.Suspense=_C;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CC;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)U1.call(e,l)&&!z1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ya,type:t.type,key:i,ref:s,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:yC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gC,_context:t},t.Consumer=t};he.createElement=B1;he.createFactory=function(t){var e=B1.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:vC,render:t}};he.isValidElement=um;he.lazy=function(t){return{$$typeof:EC,_payload:{_status:-1,_result:t},_init:SC}};he.memo=function(t,e){return{$$typeof:wC,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=au.transition;au.transition={};try{t()}finally{au.transition=e}};he.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};he.useCallback=function(t,e){return Ut.current.useCallback(t,e)};he.useContext=function(t){return Ut.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};he.useEffect=function(t,e){return Ut.current.useEffect(t,e)};he.useId=function(){return Ut.current.useId()};he.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Ut.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};he.useRef=function(t){return Ut.current.useRef(t)};he.useState=function(t){return Ut.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Ut.current.useTransition()};he.version="18.2.0";M1.exports=he;var I=M1.exports;const Gt=sm(I),AC=dC({__proto__:null,default:Gt},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kC=I,PC=Symbol.for("react.element"),RC=Symbol.for("react.fragment"),bC=Object.prototype.hasOwnProperty,NC=kC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OC={key:!0,ref:!0,__self:!0,__source:!0};function W1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bC.call(e,r)&&!OC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:PC,type:t,key:s,ref:o,props:i,_owner:NC.current}}Vc.Fragment=RC;Vc.jsx=W1;Vc.jsxs=W1;L1.exports=Vc;var p=L1.exports,wf={},q1={exports:{}},an={},H1={exports:{}},G1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,Q){var Z=M.length;M.push(Q);e:for(;0<Z;){var _e=Z-1>>>1,$=M[_e];if(0<i($,Q))M[_e]=Q,M[Z]=$,Z=_e;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var Q=M[0],Z=M.pop();if(Z!==Q){M[0]=Z;e:for(var _e=0,$=M.length,z=$>>>1;_e<z;){var B=2*(_e+1)-1,ee=M[B],T=B+1,ce=M[T];if(0>i(ee,Z))T<$&&0>i(ce,ee)?(M[_e]=ce,M[T]=Z,_e=T):(M[_e]=ee,M[B]=Z,_e=B);else if(T<$&&0>i(ce,Z))M[_e]=ce,M[T]=Z,_e=T;else break e}}return Q}function i(M,Q){var Z=M.sortIndex-Q.sortIndex;return Z!==0?Z:M.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,_=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=M)r(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(u)}}function E(M){if(y=!1,v(M),!_)if(n(l)!==null)_=!0,ut(x);else{var Q=n(u);Q!==null&&Fe(E,Q.startTime-M)}}function x(M,Q){_=!1,y&&(y=!1,f(O),O=-1),g=!0;var Z=h;try{for(v(Q),d=n(l);d!==null&&(!(d.expirationTime>Q)||M&&!fe());){var _e=d.callback;if(typeof _e=="function"){d.callback=null,h=d.priorityLevel;var $=_e(d.expirationTime<=Q);Q=t.unstable_now(),typeof $=="function"?d.callback=$:d===n(l)&&r(l),v(Q)}else r(l);d=n(l)}if(d!==null)var z=!0;else{var B=n(u);B!==null&&Fe(E,B.startTime-Q),z=!1}return z}finally{d=null,h=Z,g=!1}}var C=!1,b=null,O=-1,X=5,U=-1;function fe(){return!(t.unstable_now()-U<X)}function ke(){if(b!==null){var M=t.unstable_now();U=M;var Q=!0;try{Q=b(!0,M)}finally{Q?K():(C=!1,b=null)}}else C=!1}var K;if(typeof m=="function")K=function(){m(ke)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Ce=ve.port2;ve.port1.onmessage=ke,K=function(){Ce.postMessage(null)}}else K=function(){w(ke,0)};function ut(M){b=M,C||(C=!0,K())}function Fe(M,Q){O=w(function(){M(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,ut(x))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(h){case 1:case 2:case 3:var Q=3;break;default:Q=h}var Z=h;h=Q;try{return M()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Z=h;h=M;try{return Q()}finally{h=Z}},t.unstable_scheduleCallback=function(M,Q,Z){var _e=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?_e+Z:_e):Z=_e,M){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=Z+$,M={id:c++,callback:Q,priorityLevel:M,startTime:Z,expirationTime:$,sortIndex:-1},Z>_e?(M.sortIndex=Z,e(u,M),n(l)===null&&M===n(u)&&(y?(f(O),O=-1):y=!0,Fe(E,Z-_e))):(M.sortIndex=$,e(l,M),_||g||(_=!0,ut(x))),M},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(M){var Q=h;return function(){var Z=h;h=Q;try{return M.apply(this,arguments)}finally{h=Z}}}})(G1);H1.exports=G1;var DC=H1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1=I,rn=DC;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q1=new Set,da={};function Xi(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(da[t]=e,t=0;t<e.length;t++)Q1.add(e[t])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=Object.prototype.hasOwnProperty,LC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,a0={},l0={};function MC(t){return Ef.call(l0,t)?!0:Ef.call(a0,t)?!1:LC.test(t)?l0[t]=!0:(a0[t]=!0,!1)}function VC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $C(t,e,n,r){if(e===null||typeof e>"u"||VC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var cm=/[\-:]([a-z])/g;function dm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cm,dm);Et[e]=new zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cm,dm);Et[e]=new zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cm,dm);Et[e]=new zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hm(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($C(e,n,i,r)&&(n=null),r||i===null?MC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cr=K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),fm=Symbol.for("react.strict_mode"),xf=Symbol.for("react.profiler"),Y1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),If=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),mm=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy"),J1=Symbol.for("react.offscreen"),u0=Symbol.iterator;function Co(t){return t===null||typeof t!="object"?null:(t=u0&&t[u0]||t["@@iterator"],typeof t=="function"?t:null)}var Ge=Object.assign,hh;function Vo(t){if(hh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hh=e&&e[1]||""}return`
`+hh+t}var fh=!1;function ph(t,e){if(!t||fh)return"";fh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function jC(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=ph(t.type,!1),t;case 11:return t=ph(t.type.render,!1),t;case 1:return t=ph(t.type,!0),t;default:return""}}function Sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case xf:return"Profiler";case fm:return"StrictMode";case If:return"Suspense";case Tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X1:return(t.displayName||"Context")+".Consumer";case Y1:return(t._context.displayName||"Context")+".Provider";case pm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mm:return e=t.displayName||null,e!==null?e:Sf(t.type)||"Memo";case Nr:e=t._payload,t=t._init;try{return Sf(t(e))}catch{}}return null}function FC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sf(e);case 8:return e===fm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UC(t){var e=Z1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cl(t){t._valueTracker||(t._valueTracker=UC(t))}function ew(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Z1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cf(t,e){var n=e.checked;return Ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function c0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tw(t,e){e=e.checked,e!=null&&hm(t,"checked",e,!1)}function Af(t,e){tw(t,e);var n=li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&kf(t,e.type,li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function d0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kf(t,e,n){(e!=="number"||ku(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function h0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if($o(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:li(n)}}function nw(t,e){var n=li(e.value),r=li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function f0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,iw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zC=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){zC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function sw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function ow(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var BC=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bf(t,e){if(e){if(BC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Of=null;function gm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Df=null,Rs=null,bs=null;function p0(t){if(t=Za(t)){if(typeof Df!="function")throw Error(N(280));var e=t.stateNode;e&&(e=zc(e),Df(t.stateNode,t.type,e))}}function aw(t){Rs?bs?bs.push(t):bs=[t]:Rs=t}function lw(){if(Rs){var t=Rs,e=bs;if(bs=Rs=null,p0(t),e)for(t=0;t<e.length;t++)p0(e[t])}}function uw(t,e){return t(e)}function cw(){}var mh=!1;function dw(t,e,n){if(mh)return t(e,n);mh=!0;try{return uw(t,e,n)}finally{mh=!1,(Rs!==null||bs!==null)&&(cw(),lw())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var r=zc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Lf=!1;if(mr)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Lf=!1}function WC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Yo=!1,Pu=null,Ru=!1,Mf=null,qC={onError:function(t){Yo=!0,Pu=t}};function HC(t,e,n,r,i,s,o,a,l){Yo=!1,Pu=null,WC.apply(qC,arguments)}function GC(t,e,n,r,i,s,o,a,l){if(HC.apply(this,arguments),Yo){if(Yo){var u=Pu;Yo=!1,Pu=null}else throw Error(N(198));Ru||(Ru=!0,Mf=u)}}function Ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m0(t){if(Ji(t)!==t)throw Error(N(188))}function KC(t){var e=t.alternate;if(!e){if(e=Ji(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return m0(i),t;if(s===r)return m0(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function fw(t){return t=KC(t),t!==null?pw(t):null}function pw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pw(t);if(e!==null)return e;t=t.sibling}return null}var mw=rn.unstable_scheduleCallback,g0=rn.unstable_cancelCallback,QC=rn.unstable_shouldYield,YC=rn.unstable_requestPaint,Ze=rn.unstable_now,XC=rn.unstable_getCurrentPriorityLevel,ym=rn.unstable_ImmediatePriority,gw=rn.unstable_UserBlockingPriority,bu=rn.unstable_NormalPriority,JC=rn.unstable_LowPriority,yw=rn.unstable_IdlePriority,$c=null,Wn=null;function ZC(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:n2,e2=Math.log,t2=Math.LN2;function n2(t){return t>>>=0,t===0?32:31-(e2(t)/t2|0)|0}var kl=64,Pl=4194304;function jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=jo(a):(s&=o,s!==0&&(r=jo(s)))}else o=n&~i,o!==0?r=jo(o):s!==0&&(r=jo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),i=1<<n,r|=t[n],e&=~i;return r}function r2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i2(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=r2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vw(){var t=kl;return kl<<=1,!(kl&4194240)&&(kl=64),t}function gh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function s2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function _w(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ww,_m,Ew,xw,Iw,$f=!1,Rl=[],Hr=null,Gr=null,Kr=null,pa=new Map,ma=new Map,Dr=[],o2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function y0(t,e){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function ko(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Za(e),e!==null&&_m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function a2(t,e,n,r,i){switch(e){case"focusin":return Hr=ko(Hr,t,e,n,r,i),!0;case"dragenter":return Gr=ko(Gr,t,e,n,r,i),!0;case"mouseover":return Kr=ko(Kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return pa.set(s,ko(pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ma.set(s,ko(ma.get(s)||null,t,e,n,r,i)),!0}return!1}function Tw(t){var e=Ai(t.target);if(e!==null){var n=Ji(e);if(n!==null){if(e=n.tag,e===13){if(e=hw(n),e!==null){t.blockedOn=e,Iw(t.priority,function(){Ew(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Of=r,n.target.dispatchEvent(r),Of=null}else return e=Za(n),e!==null&&_m(e),t.blockedOn=n,!1;e.shift()}return!0}function v0(t,e,n){lu(t)&&n.delete(e)}function l2(){$f=!1,Hr!==null&&lu(Hr)&&(Hr=null),Gr!==null&&lu(Gr)&&(Gr=null),Kr!==null&&lu(Kr)&&(Kr=null),pa.forEach(v0),ma.forEach(v0)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,$f||($f=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,l2)))}function ga(t){function e(i){return Po(i,t)}if(0<Rl.length){Po(Rl[0],t);for(var n=1;n<Rl.length;n++){var r=Rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hr!==null&&Po(Hr,t),Gr!==null&&Po(Gr,t),Kr!==null&&Po(Kr,t),pa.forEach(e),ma.forEach(e),n=0;n<Dr.length;n++)r=Dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dr.length&&(n=Dr[0],n.blockedOn===null);)Tw(n),n.blockedOn===null&&Dr.shift()}var Ns=Cr.ReactCurrentBatchConfig,Ou=!0;function u2(t,e,n,r){var i=Ie,s=Ns.transition;Ns.transition=null;try{Ie=1,wm(t,e,n,r)}finally{Ie=i,Ns.transition=s}}function c2(t,e,n,r){var i=Ie,s=Ns.transition;Ns.transition=null;try{Ie=4,wm(t,e,n,r)}finally{Ie=i,Ns.transition=s}}function wm(t,e,n,r){if(Ou){var i=jf(t,e,n,r);if(i===null)Ch(t,e,r,Du,n),y0(t,r);else if(a2(i,t,e,n,r))r.stopPropagation();else if(y0(t,r),e&4&&-1<o2.indexOf(t)){for(;i!==null;){var s=Za(i);if(s!==null&&ww(s),s=jf(t,e,n,r),s===null&&Ch(t,e,r,Du,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ch(t,e,r,null,n)}}var Du=null;function jf(t,e,n,r){if(Du=null,t=gm(r),t=Ai(t),t!==null)if(e=Ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Du=t,null}function Sw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XC()){case ym:return 1;case gw:return 4;case bu:case JC:return 16;case yw:return 536870912;default:return 16}default:return 16}}var Ur=null,Em=null,uu=null;function Cw(){if(uu)return uu;var t,e=Em,n=e.length,r,i="value"in Ur?Ur.value:Ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uu=i.slice(t,1<r?1-r:void 0)}function cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function _0(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:_0,this.isPropagationStopped=_0,this}return Ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xm=ln(po),Ja=Ge({},po,{view:0,detail:0}),d2=ln(Ja),yh,vh,Ro,jc=Ge({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Im,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(yh=t.screenX-Ro.screenX,vh=t.screenY-Ro.screenY):vh=yh=0,Ro=t),yh)},movementY:function(t){return"movementY"in t?t.movementY:vh}}),w0=ln(jc),h2=Ge({},jc,{dataTransfer:0}),f2=ln(h2),p2=Ge({},Ja,{relatedTarget:0}),_h=ln(p2),m2=Ge({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),g2=ln(m2),y2=Ge({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v2=ln(y2),_2=Ge({},po,{data:0}),E0=ln(_2),w2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=x2[t])?!!e[t]:!1}function Im(){return I2}var T2=Ge({},Ja,{key:function(t){if(t.key){var e=w2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Im,charCode:function(t){return t.type==="keypress"?cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S2=ln(T2),C2=Ge({},jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=ln(C2),A2=Ge({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Im}),k2=ln(A2),P2=Ge({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),R2=ln(P2),b2=Ge({},jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N2=ln(b2),O2=[9,13,27,32],Tm=mr&&"CompositionEvent"in window,Xo=null;mr&&"documentMode"in document&&(Xo=document.documentMode);var D2=mr&&"TextEvent"in window&&!Xo,Aw=mr&&(!Tm||Xo&&8<Xo&&11>=Xo),I0=String.fromCharCode(32),T0=!1;function kw(t,e){switch(t){case"keyup":return O2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function L2(t,e){switch(t){case"compositionend":return Pw(e);case"keypress":return e.which!==32?null:(T0=!0,I0);case"textInput":return t=e.data,t===I0&&T0?null:t;default:return null}}function M2(t,e){if(gs)return t==="compositionend"||!Tm&&kw(t,e)?(t=Cw(),uu=Em=Ur=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Aw&&e.locale!=="ko"?null:e.data;default:return null}}var V2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V2[t.type]:e==="textarea"}function Rw(t,e,n,r){aw(r),e=Lu(e,"onChange"),0<e.length&&(n=new xm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Jo=null,ya=null;function $2(t){Uw(t,0)}function Fc(t){var e=_s(t);if(ew(e))return t}function j2(t,e){if(t==="change")return e}var bw=!1;if(mr){var wh;if(mr){var Eh="oninput"in document;if(!Eh){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),Eh=typeof C0.oninput=="function"}wh=Eh}else wh=!1;bw=wh&&(!document.documentMode||9<document.documentMode)}function A0(){Jo&&(Jo.detachEvent("onpropertychange",Nw),ya=Jo=null)}function Nw(t){if(t.propertyName==="value"&&Fc(ya)){var e=[];Rw(e,ya,t,gm(t)),dw($2,e)}}function F2(t,e,n){t==="focusin"?(A0(),Jo=e,ya=n,Jo.attachEvent("onpropertychange",Nw)):t==="focusout"&&A0()}function U2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(ya)}function z2(t,e){if(t==="click")return Fc(e)}function B2(t,e){if(t==="input"||t==="change")return Fc(e)}function W2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:W2;function va(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ef.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function k0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function P0(t,e){var n=k0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=k0(n)}}function Ow(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ow(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dw(){for(var t=window,e=ku();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ku(t.document)}return e}function Sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q2(t){var e=Dw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ow(n.ownerDocument.documentElement,n)){if(r!==null&&Sm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=P0(n,s);var o=P0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var H2=mr&&"documentMode"in document&&11>=document.documentMode,ys=null,Ff=null,Zo=null,Uf=!1;function R0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uf||ys==null||ys!==ku(r)||(r=ys,"selectionStart"in r&&Sm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&va(Zo,r)||(Zo=r,r=Lu(Ff,"onSelect"),0<r.length&&(e=new xm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},xh={},Lw={};mr&&(Lw=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Uc(t){if(xh[t])return xh[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lw)return xh[t]=e[n];return t}var Mw=Uc("animationend"),Vw=Uc("animationiteration"),$w=Uc("animationstart"),jw=Uc("transitionend"),Fw=new Map,b0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gi(t,e){Fw.set(t,e),Xi(e,[t])}for(var Ih=0;Ih<b0.length;Ih++){var Th=b0[Ih],G2=Th.toLowerCase(),K2=Th[0].toUpperCase()+Th.slice(1);gi(G2,"on"+K2)}gi(Mw,"onAnimationEnd");gi(Vw,"onAnimationIteration");gi($w,"onAnimationStart");gi("dblclick","onDoubleClick");gi("focusin","onFocus");gi("focusout","onBlur");gi(jw,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function N0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GC(r,e,void 0,t),t.currentTarget=null}function Uw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;N0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;N0(i,a,u),s=l}}}if(Ru)throw t=Mf,Ru=!1,Mf=null,t}function Me(t,e){var n=e[Hf];n===void 0&&(n=e[Hf]=new Set);var r=t+"__bubble";n.has(r)||(zw(e,t,2,!1),n.add(r))}function Sh(t,e,n){var r=0;e&&(r|=4),zw(n,t,r,e)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[Ol]){t[Ol]=!0,Q1.forEach(function(n){n!=="selectionchange"&&(Q2.has(n)||Sh(n,!1,t),Sh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ol]||(e[Ol]=!0,Sh("selectionchange",!1,e))}}function zw(t,e,n,r){switch(Sw(e)){case 1:var i=u2;break;case 4:i=c2;break;default:i=wm}n=i.bind(null,e,n,t),i=void 0,!Lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ch(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ai(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}dw(function(){var u=s,c=gm(n),d=[];e:{var h=Fw.get(t);if(h!==void 0){var g=xm,_=t;switch(t){case"keypress":if(cu(n)===0)break e;case"keydown":case"keyup":g=S2;break;case"focusin":_="focus",g=_h;break;case"focusout":_="blur",g=_h;break;case"beforeblur":case"afterblur":g=_h;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=w0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=f2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=k2;break;case Mw:case Vw:case $w:g=g2;break;case jw:g=R2;break;case"scroll":g=d2;break;case"wheel":g=N2;break;case"copy":case"cut":case"paste":g=v2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=x0}var y=(e&4)!==0,w=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,f!==null&&(E=fa(m,f),E!=null&&y.push(wa(m,E,v)))),w)break;m=m.return}0<y.length&&(h=new g(h,_,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Of&&(_=n.relatedTarget||n.fromElement)&&(Ai(_)||_[gr]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Ai(_):null,_!==null&&(w=Ji(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(y=w0,E="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=x0,E="onPointerLeave",f="onPointerEnter",m="pointer"),w=g==null?h:_s(g),v=_==null?h:_s(_),h=new y(E,m+"leave",g,n,c),h.target=w,h.relatedTarget=v,E=null,Ai(c)===u&&(y=new y(f,m+"enter",_,n,c),y.target=v,y.relatedTarget=w,E=y),w=E,g&&_)t:{for(y=g,f=_,m=0,v=y;v;v=ls(v))m++;for(v=0,E=f;E;E=ls(E))v++;for(;0<m-v;)y=ls(y),m--;for(;0<v-m;)f=ls(f),v--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break t;y=ls(y),f=ls(f)}y=null}else y=null;g!==null&&O0(d,h,g,y,!1),_!==null&&w!==null&&O0(d,w,_,y,!0)}}e:{if(h=u?_s(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var x=j2;else if(S0(h))if(bw)x=B2;else{x=U2;var C=F2}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=z2);if(x&&(x=x(t,u))){Rw(d,x,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&kf(h,"number",h.value)}switch(C=u?_s(u):window,t){case"focusin":(S0(C)||C.contentEditable==="true")&&(ys=C,Ff=u,Zo=null);break;case"focusout":Zo=Ff=ys=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,R0(d,n,c);break;case"selectionchange":if(H2)break;case"keydown":case"keyup":R0(d,n,c)}var b;if(Tm)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else gs?kw(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Aw&&n.locale!=="ko"&&(gs||O!=="onCompositionStart"?O==="onCompositionEnd"&&gs&&(b=Cw()):(Ur=c,Em="value"in Ur?Ur.value:Ur.textContent,gs=!0)),C=Lu(u,O),0<C.length&&(O=new E0(O,t,null,n,c),d.push({event:O,listeners:C}),b?O.data=b:(b=Pw(n),b!==null&&(O.data=b)))),(b=D2?L2(t,n):M2(t,n))&&(u=Lu(u,"onBeforeInput"),0<u.length&&(c=new E0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}Uw(d,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fa(t,n),s!=null&&r.unshift(wa(t,s,i)),s=fa(t,e),s!=null&&r.push(wa(t,s,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function O0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fa(n,s),l!=null&&o.unshift(wa(n,l,a))):i||(l=fa(n,s),l!=null&&o.push(wa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Y2=/\r\n?/g,X2=/\u0000|\uFFFD/g;function D0(t){return(typeof t=="string"?t:""+t).replace(Y2,`
`).replace(X2,"")}function Dl(t,e,n){if(e=D0(e),D0(t)!==e&&n)throw Error(N(425))}function Mu(){}var zf=null,Bf=null;function Wf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,J2=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,Z2=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(eA)}:qf;function eA(t){setTimeout(function(){throw t})}function Ah(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ga(e)}function Qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function M0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),Fn="__reactFiber$"+mo,Ea="__reactProps$"+mo,gr="__reactContainer$"+mo,Hf="__reactEvents$"+mo,tA="__reactListeners$"+mo,nA="__reactHandles$"+mo;function Ai(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gr]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=M0(t);t!==null;){if(n=t[Fn])return n;t=M0(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[Fn]||t[gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function zc(t){return t[Ea]||null}var Gf=[],ws=-1;function yi(t){return{current:t}}function $e(t){0>ws||(t.current=Gf[ws],Gf[ws]=null,ws--)}function De(t,e){ws++,Gf[ws]=t.current,t.current=e}var ui={},Lt=yi(ui),Kt=yi(!1),$i=ui;function Hs(t,e){var n=t.type.contextTypes;if(!n)return ui;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(t){return t=t.childContextTypes,t!=null}function Vu(){$e(Kt),$e(Lt)}function V0(t,e,n){if(Lt.current!==ui)throw Error(N(168));De(Lt,e),De(Kt,n)}function Bw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,FC(t)||"Unknown",i));return Ge({},n,r)}function $u(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ui,$i=Lt.current,De(Lt,t),De(Kt,Kt.current),!0}function $0(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=Bw(t,e,$i),r.__reactInternalMemoizedMergedChildContext=t,$e(Kt),$e(Lt),De(Lt,t)):$e(Kt),De(Kt,n)}var or=null,Bc=!1,kh=!1;function Ww(t){or===null?or=[t]:or.push(t)}function rA(t){Bc=!0,Ww(t)}function vi(){if(!kh&&or!==null){kh=!0;var t=0,e=Ie;try{var n=or;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}or=null,Bc=!1}catch(i){throw or!==null&&(or=or.slice(t+1)),mw(ym,vi),i}finally{Ie=e,kh=!1}}return null}var Es=[],xs=0,ju=null,Fu=0,cn=[],dn=0,ji=null,ar=1,lr="";function Ii(t,e){Es[xs++]=Fu,Es[xs++]=ju,ju=t,Fu=e}function qw(t,e,n){cn[dn++]=ar,cn[dn++]=lr,cn[dn++]=ji,ji=t;var r=ar;t=lr;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ar=1<<32-Rn(e)+i|n<<i|r,lr=s+t}else ar=1<<s|n<<i|r,lr=t}function Cm(t){t.return!==null&&(Ii(t,1),qw(t,1,0))}function Am(t){for(;t===ju;)ju=Es[--xs],Es[xs]=null,Fu=Es[--xs],Es[xs]=null;for(;t===ji;)ji=cn[--dn],cn[dn]=null,lr=cn[--dn],cn[dn]=null,ar=cn[--dn],cn[dn]=null}var nn=null,en=null,We=!1,An=null;function Hw(t,e){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function j0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,en=Qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ji!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,en=null,!0):!1;default:return!1}}function Kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qf(t){if(We){var e=en;if(e){var n=e;if(!j0(t,e)){if(Kf(t))throw Error(N(418));e=Qr(n.nextSibling);var r=nn;e&&j0(t,e)?Hw(r,n):(t.flags=t.flags&-4097|2,We=!1,nn=t)}}else{if(Kf(t))throw Error(N(418));t.flags=t.flags&-4097|2,We=!1,nn=t}}}function F0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function Ll(t){if(t!==nn)return!1;if(!We)return F0(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wf(t.type,t.memoizedProps)),e&&(e=en)){if(Kf(t))throw Gw(),Error(N(418));for(;e;)Hw(t,e),e=Qr(e.nextSibling)}if(F0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=Qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=nn?Qr(t.stateNode.nextSibling):null;return!0}function Gw(){for(var t=en;t;)t=Qr(t.nextSibling)}function Gs(){en=nn=null,We=!1}function km(t){An===null?An=[t]:An.push(t)}var iA=Cr.ReactCurrentBatchConfig;function Tn(t,e){if(t&&t.defaultProps){e=Ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Uu=yi(null),zu=null,Is=null,Pm=null;function Rm(){Pm=Is=zu=null}function bm(t){var e=Uu.current;$e(Uu),t._currentValue=e}function Yf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){zu=t,Pm=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ht=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(Pm!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(zu===null)throw Error(N(308));Is=t,zu.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var ki=null;function Nm(t){ki===null?ki=[t]:ki.push(t)}function Kw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nm(e)):(n.next=i.next,i.next=n),e.interleaved=n,yr(t,r)}function yr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Or=!1;function Om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yr(t,n)}return i=r.interleaved,i===null?(e.next=e,Nm(r)):(e.next=i.next,i.next=e),r.interleaved=e,yr(t,n)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}function U0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bu(t,e,n,r){var i=t.updateQueue;Or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=Ge({},d,h);break e;case 2:Or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ui|=o,t.lanes=o,t.memoizedState=d}}function z0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Yw=new K1.Component().refs;function Xf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?Ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=Jr(t),s=fr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yr(t,s,i),e!==null&&(bn(e,t,i,r),du(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=Jr(t),s=fr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yr(t,s,i),e!==null&&(bn(e,t,i,r),du(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ft(),r=Jr(t),i=fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yr(t,i,r),e!==null&&(bn(e,t,r,n),du(e,t,r))}};function B0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!va(n,r)||!va(i,s):!0}function Xw(t,e,n){var r=!1,i=ui,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(i=Qt(e)?$i:Lt.current,r=e.contextTypes,s=(r=r!=null)?Hs(t,i):ui),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function W0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function Jf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Yw,Om(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gn(s):(s=Qt(e)?$i:Lt.current,i.context=Hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wc.enqueueReplaceState(i,i.state,null),Bu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Yw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function q0(t){var e=t._init;return e(t._payload)}function Jw(t){function e(f,m){if(t){var v=f.deletions;v===null?(f.deletions=[m],f.flags|=16):v.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=Zr(f,m),f.index=0,f.sibling=null,f}function s(f,m,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<m?(f.flags|=2,m):v):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,v,E){return m===null||m.tag!==6?(m=Lh(v,f.mode,E),m.return=f,m):(m=i(m,v),m.return=f,m)}function l(f,m,v,E){var x=v.type;return x===ms?c(f,m,v.props.children,E,v.key):m!==null&&(m.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Nr&&q0(x)===m.type)?(E=i(m,v.props),E.ref=bo(f,m,v),E.return=f,E):(E=yu(v.type,v.key,v.props,null,f.mode,E),E.ref=bo(f,m,v),E.return=f,E)}function u(f,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Mh(v,f.mode,E),m.return=f,m):(m=i(m,v.children||[]),m.return=f,m)}function c(f,m,v,E,x){return m===null||m.tag!==7?(m=Di(v,f.mode,E,x),m.return=f,m):(m=i(m,v),m.return=f,m)}function d(f,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Lh(""+m,f.mode,v),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Sl:return v=yu(m.type,m.key,m.props,null,f.mode,v),v.ref=bo(f,null,m),v.return=f,v;case ps:return m=Mh(m,f.mode,v),m.return=f,m;case Nr:var E=m._init;return d(f,E(m._payload),v)}if($o(m)||Co(m))return m=Di(m,f.mode,v,null),m.return=f,m;Ml(f,m)}return null}function h(f,m,v,E){var x=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:a(f,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sl:return v.key===x?l(f,m,v,E):null;case ps:return v.key===x?u(f,m,v,E):null;case Nr:return x=v._init,h(f,m,x(v._payload),E)}if($o(v)||Co(v))return x!==null?null:c(f,m,v,E,null);Ml(f,v)}return null}function g(f,m,v,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(v)||null,a(m,f,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Sl:return f=f.get(E.key===null?v:E.key)||null,l(m,f,E,x);case ps:return f=f.get(E.key===null?v:E.key)||null,u(m,f,E,x);case Nr:var C=E._init;return g(f,m,v,C(E._payload),x)}if($o(E)||Co(E))return f=f.get(v)||null,c(m,f,E,x,null);Ml(m,E)}return null}function _(f,m,v,E){for(var x=null,C=null,b=m,O=m=0,X=null;b!==null&&O<v.length;O++){b.index>O?(X=b,b=null):X=b.sibling;var U=h(f,b,v[O],E);if(U===null){b===null&&(b=X);break}t&&b&&U.alternate===null&&e(f,b),m=s(U,m,O),C===null?x=U:C.sibling=U,C=U,b=X}if(O===v.length)return n(f,b),We&&Ii(f,O),x;if(b===null){for(;O<v.length;O++)b=d(f,v[O],E),b!==null&&(m=s(b,m,O),C===null?x=b:C.sibling=b,C=b);return We&&Ii(f,O),x}for(b=r(f,b);O<v.length;O++)X=g(b,f,O,v[O],E),X!==null&&(t&&X.alternate!==null&&b.delete(X.key===null?O:X.key),m=s(X,m,O),C===null?x=X:C.sibling=X,C=X);return t&&b.forEach(function(fe){return e(f,fe)}),We&&Ii(f,O),x}function y(f,m,v,E){var x=Co(v);if(typeof x!="function")throw Error(N(150));if(v=x.call(v),v==null)throw Error(N(151));for(var C=x=null,b=m,O=m=0,X=null,U=v.next();b!==null&&!U.done;O++,U=v.next()){b.index>O?(X=b,b=null):X=b.sibling;var fe=h(f,b,U.value,E);if(fe===null){b===null&&(b=X);break}t&&b&&fe.alternate===null&&e(f,b),m=s(fe,m,O),C===null?x=fe:C.sibling=fe,C=fe,b=X}if(U.done)return n(f,b),We&&Ii(f,O),x;if(b===null){for(;!U.done;O++,U=v.next())U=d(f,U.value,E),U!==null&&(m=s(U,m,O),C===null?x=U:C.sibling=U,C=U);return We&&Ii(f,O),x}for(b=r(f,b);!U.done;O++,U=v.next())U=g(b,f,O,U.value,E),U!==null&&(t&&U.alternate!==null&&b.delete(U.key===null?O:U.key),m=s(U,m,O),C===null?x=U:C.sibling=U,C=U);return t&&b.forEach(function(ke){return e(f,ke)}),We&&Ii(f,O),x}function w(f,m,v,E){if(typeof v=="object"&&v!==null&&v.type===ms&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Sl:e:{for(var x=v.key,C=m;C!==null;){if(C.key===x){if(x=v.type,x===ms){if(C.tag===7){n(f,C.sibling),m=i(C,v.props.children),m.return=f,f=m;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Nr&&q0(x)===C.type){n(f,C.sibling),m=i(C,v.props),m.ref=bo(f,C,v),m.return=f,f=m;break e}n(f,C);break}else e(f,C);C=C.sibling}v.type===ms?(m=Di(v.props.children,f.mode,E,v.key),m.return=f,f=m):(E=yu(v.type,v.key,v.props,null,f.mode,E),E.ref=bo(f,m,v),E.return=f,f=E)}return o(f);case ps:e:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(f,m.sibling),m=i(m,v.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=Mh(v,f.mode,E),m.return=f,f=m}return o(f);case Nr:return C=v._init,w(f,m,C(v._payload),E)}if($o(v))return _(f,m,v,E);if(Co(v))return y(f,m,v,E);Ml(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(f,m.sibling),m=i(m,v),m.return=f,f=m):(n(f,m),m=Lh(v,f.mode,E),m.return=f,f=m),o(f)):n(f,m)}return w}var Ks=Jw(!0),Zw=Jw(!1),el={},qn=yi(el),xa=yi(el),Ia=yi(el);function Pi(t){if(t===el)throw Error(N(174));return t}function Dm(t,e){switch(De(Ia,e),De(xa,t),De(qn,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rf(e,t)}$e(qn),De(qn,e)}function Qs(){$e(qn),$e(xa),$e(Ia)}function eE(t){Pi(Ia.current);var e=Pi(qn.current),n=Rf(e,t.type);e!==n&&(De(xa,t),De(qn,n))}function Lm(t){xa.current===t&&($e(qn),$e(xa))}var qe=yi(0);function Wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ph=[];function Mm(){for(var t=0;t<Ph.length;t++)Ph[t]._workInProgressVersionPrimary=null;Ph.length=0}var hu=Cr.ReactCurrentDispatcher,Rh=Cr.ReactCurrentBatchConfig,Fi=0,He=null,ot=null,dt=null,qu=!1,ea=!1,Ta=0,sA=0;function xt(){throw Error(N(321))}function Vm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function $m(t,e,n,r,i,s){if(Fi=s,He=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hu.current=t===null||t.memoizedState===null?uA:cA,t=n(r,i),ea){s=0;do{if(ea=!1,Ta=0,25<=s)throw Error(N(301));s+=1,dt=ot=null,e.updateQueue=null,hu.current=dA,t=n(r,i)}while(ea)}if(hu.current=Hu,e=ot!==null&&ot.next!==null,Fi=0,dt=ot=He=null,qu=!1,e)throw Error(N(300));return t}function jm(){var t=Ta!==0;return Ta=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?He.memoizedState=dt=t:dt=dt.next=t,dt}function yn(){if(ot===null){var t=He.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=dt===null?He.memoizedState:dt.next;if(e!==null)dt=e,ot=t;else{if(t===null)throw Error(N(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?He.memoizedState=dt=t:dt=dt.next=t}return dt}function Sa(t,e){return typeof e=="function"?e(t):e}function bh(t){var e=yn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=ot,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Fi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,He.lanes|=c,Ui|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nn(r,e.memoizedState)||(Ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,He.lanes|=s,Ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nh(t){var e=yn(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(Ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tE(){}function nE(t,e){var n=He,r=yn(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ht=!0),r=r.queue,Fm(sE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,Ca(9,iE.bind(null,n,r,i,e),void 0,null),ht===null)throw Error(N(349));Fi&30||rE(n,e,i)}return i}function rE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=He.updateQueue,e===null?(e={lastEffect:null,stores:null},He.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iE(t,e,n,r){e.value=n,e.getSnapshot=r,oE(e)&&aE(t)}function sE(t,e,n){return n(function(){oE(e)&&aE(t)})}function oE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function aE(t){var e=yr(t,1);e!==null&&bn(e,t,1,-1)}function H0(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e.queue=t,t=t.dispatch=lA.bind(null,He,t),[e.memoizedState,t]}function Ca(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=He.updateQueue,e===null?(e={lastEffect:null,stores:null},He.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lE(){return yn().memoizedState}function fu(t,e,n,r){var i=jn();He.flags|=t,i.memoizedState=Ca(1|e,n,void 0,r===void 0?null:r)}function qc(t,e,n,r){var i=yn();r=r===void 0?null:r;var s=void 0;if(ot!==null){var o=ot.memoizedState;if(s=o.destroy,r!==null&&Vm(r,o.deps)){i.memoizedState=Ca(e,n,s,r);return}}He.flags|=t,i.memoizedState=Ca(1|e,n,s,r)}function G0(t,e){return fu(8390656,8,t,e)}function Fm(t,e){return qc(2048,8,t,e)}function uE(t,e){return qc(4,2,t,e)}function cE(t,e){return qc(4,4,t,e)}function dE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hE(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,dE.bind(null,e,t),n)}function Um(){}function fE(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pE(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mE(t,e,n){return Fi&21?(Nn(n,e)||(n=vw(),He.lanes|=n,Ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=n)}function oA(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=Rh.transition;Rh.transition={};try{t(!1),e()}finally{Ie=n,Rh.transition=r}}function gE(){return yn().memoizedState}function aA(t,e,n){var r=Jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yE(t))vE(e,n);else if(n=Kw(t,e,n,r),n!==null){var i=Ft();bn(n,t,r,i),_E(n,e,r)}}function lA(t,e,n){var r=Jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yE(t))vE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nn(a,o)){var l=e.interleaved;l===null?(i.next=i,Nm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Kw(t,e,i,r),n!==null&&(i=Ft(),bn(n,t,r,i),_E(n,e,r))}}function yE(t){var e=t.alternate;return t===He||e!==null&&e===He}function vE(t,e){ea=qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _E(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vm(t,n)}}var Hu={readContext:gn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},uA={readContext:gn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:G0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fu(4194308,4,dE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return fu(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aA.bind(null,He,t),[r.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:H0,useDebugValue:Um,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=H0(!1),e=t[0];return t=oA.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=He,i=jn();if(We){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),ht===null)throw Error(N(349));Fi&30||rE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,G0(sE.bind(null,r,s,t),[t]),r.flags|=2048,Ca(9,iE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=ht.identifierPrefix;if(We){var n=lr,r=ar;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cA={readContext:gn,useCallback:fE,useContext:gn,useEffect:Fm,useImperativeHandle:hE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:bh,useRef:lE,useState:function(){return bh(Sa)},useDebugValue:Um,useDeferredValue:function(t){var e=yn();return mE(e,ot.memoizedState,t)},useTransition:function(){var t=bh(Sa)[0],e=yn().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1},dA={readContext:gn,useCallback:fE,useContext:gn,useEffect:Fm,useImperativeHandle:hE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:Nh,useRef:lE,useState:function(){return Nh(Sa)},useDebugValue:Um,useDeferredValue:function(t){var e=yn();return ot===null?e.memoizedState=t:mE(e,ot.memoizedState,t)},useTransition:function(){var t=Nh(Sa)[0],e=yn().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1};function Ys(t,e){try{var n="",r=e;do n+=jC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Oh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hA=typeof WeakMap=="function"?WeakMap:Map;function wE(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ku||(Ku=!0,up=r),Zf(t,e)},n}function EE(t,e,n){n=fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zf(t,e),typeof r!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function K0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CA.bind(null,t,e,n),e.then(t,t))}function Q0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Y0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,Yr(n,e,1))),n.lanes|=1),t)}var fA=Cr.ReactCurrentOwner,Ht=!1;function $t(t,e,n,r){e.child=t===null?Zw(e,null,n,r):Ks(e,t.child,n,r)}function X0(t,e,n,r,i){n=n.render;var s=e.ref;return Os(e,i),r=$m(t,e,n,r,s,i),n=jm(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(We&&n&&Cm(e),e.flags|=1,$t(t,e,r,i),e.child)}function J0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Qm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xE(t,e,s,r,i)):(t=yu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,r)&&t.ref===e.ref)return vr(t,e,i)}return e.flags|=1,t=Zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function xE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(va(s,r)&&t.ref===e.ref)if(Ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ht=!0);else return e.lanes=t.lanes,vr(t,e,i)}return ep(t,e,n,r,i)}function IE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Ss,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,De(Ss,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,De(Ss,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,De(Ss,Zt),Zt|=r;return $t(t,e,i,n),e.child}function TE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ep(t,e,n,r,i){var s=Qt(n)?$i:Lt.current;return s=Hs(e,s),Os(e,i),n=$m(t,e,n,r,s,i),r=jm(),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(We&&r&&Cm(e),e.flags|=1,$t(t,e,n,i),e.child)}function Z0(t,e,n,r,i){if(Qt(n)){var s=!0;$u(e)}else s=!1;if(Os(e,i),e.stateNode===null)pu(t,e),Xw(e,n,r),Jf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Qt(n)?$i:Lt.current,u=Hs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&W0(e,o,r,u),Or=!1;var h=e.memoizedState;o.state=h,Bu(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Kt.current||Or?(typeof c=="function"&&(Xf(e,n,c,r),l=e.memoizedState),(a=Or||B0(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Tn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=Qt(n)?$i:Lt.current,l=Hs(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&W0(e,o,r,l),Or=!1,h=e.memoizedState,o.state=h,Bu(e,r,o,i);var _=e.memoizedState;a!==d||h!==_||Kt.current||Or?(typeof g=="function"&&(Xf(e,n,g,r),_=e.memoizedState),(u=Or||B0(e,n,u,r,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return tp(t,e,n,r,s,i)}function tp(t,e,n,r,i,s){TE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$0(e,n,!1),vr(t,e,s);r=e.stateNode,fA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):$t(t,e,a,s),e.memoizedState=r.state,i&&$0(e,n,!0),e.child}function SE(t){var e=t.stateNode;e.pendingContext?V0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&V0(t,e.context,!1),Dm(t,e.containerInfo)}function ev(t,e,n,r,i){return Gs(),km(i),e.flags|=256,$t(t,e,n,r),e.child}var np={dehydrated:null,treeContext:null,retryLane:0};function rp(t){return{baseLanes:t,cachePool:null,transitions:null}}function CE(t,e,n){var r=e.pendingProps,i=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),De(qe,i&1),t===null)return Qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kc(o,r,0,null),t=Di(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rp(n),e.memoizedState=np,t):zm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zr(a,s):(s=Di(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=np,r}return s=t.child,t=s.sibling,r=Zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zm(t,e){return e=Kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vl(t,e,n,r){return r!==null&&km(r),Ks(e,t.child,null,n),t=zm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Oh(Error(N(422))),Vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Kc({mode:"visible",children:r.children},i,0,null),s=Di(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=rp(o),e.memoizedState=np,s);if(!(e.mode&1))return Vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=Oh(s,r,void 0),Vl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ht||a){if(r=ht,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yr(t,i),bn(r,t,i,-1))}return Km(),r=Oh(Error(N(421))),Vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,en=Qr(i.nextSibling),nn=e,We=!0,An=null,t!==null&&(cn[dn++]=ar,cn[dn++]=lr,cn[dn++]=ji,ar=t.id,lr=t.overflow,ji=e),e=zm(e,r.children),e.flags|=4096,e)}function tv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yf(t.return,e,n)}function Dh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if($t(t,e,r.children,n),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tv(t,n,e);else if(t.tag===19)tv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(De(qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dh(e,!0,n,null,s);break;case"together":Dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=Zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mA(t,e,n){switch(e.tag){case 3:SE(e),Gs();break;case 5:eE(e);break;case 1:Qt(e.type)&&$u(e);break;case 4:Dm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;De(Uu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(De(qe,qe.current&1),e.flags|=128,null):n&e.child.childLanes?CE(t,e,n):(De(qe,qe.current&1),t=vr(t,e,n),t!==null?t.sibling:null);De(qe,qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return AE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,IE(t,e,n)}return vr(t,e,n)}var kE,ip,PE,RE;kE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ip=function(){};PE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pi(qn.current);var s=null;switch(n){case"input":i=Cf(t,i),r=Cf(t,r),s=[];break;case"select":i=Ge({},i,{value:void 0}),r=Ge({},r,{value:void 0}),s=[];break;case"textarea":i=Pf(t,i),r=Pf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Mu)}bf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};RE=function(t,e,n,r){n!==r&&(e.flags|=4)};function No(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gA(t,e,n){var r=e.pendingProps;switch(Am(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Qt(e.type)&&Vu(),It(e),null;case 3:return r=e.stateNode,Qs(),$e(Kt),$e(Lt),Mm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(hp(An),An=null))),ip(t,e),It(e),null;case 5:Lm(e);var i=Pi(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)PE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return It(e),null}if(t=Pi(qn.current),Ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Fn]=e,r[Ea]=s,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<Fo.length;i++)Me(Fo[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":c0(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":h0(r,s),Me("invalid",r)}bf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dl(r.textContent,a,t),i=["children",""+a]):da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Me("scroll",r)}switch(n){case"input":Cl(r),d0(r,s,!0);break;case"textarea":Cl(r),f0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Fn]=e,t[Ea]=r,kE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fo.length;i++)Me(Fo[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":c0(t,r),i=Cf(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ge({},r,{value:void 0}),Me("invalid",t);break;case"textarea":h0(t,r),i=Pf(t,r),Me("invalid",t);break;default:i=r}bf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ow(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&iw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(t,l):typeof l=="number"&&ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Me("scroll",t):l!=null&&hm(t,s,l,o))}switch(n){case"input":Cl(t),d0(t,r,!1);break;case"textarea":Cl(t),f0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ps(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)RE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=Pi(Ia.current),Pi(qn.current),Ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,(s=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:Dl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r}return It(e),null;case 13:if($e(qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&en!==null&&e.mode&1&&!(e.flags&128))Gw(),Gs(),e.flags|=98560,s=!1;else if(s=Ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Fn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else An!==null&&(hp(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||qe.current&1?at===0&&(at=3):Km())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return Qs(),ip(t,e),t===null&&_a(e.stateNode.containerInfo),It(e),null;case 10:return bm(e.type._context),It(e),null;case 17:return Qt(e.type)&&Vu(),It(e),null;case 19:if($e(qe),s=e.memoizedState,s===null)return It(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)No(s,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wu(t),o!==null){for(e.flags|=128,No(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return De(qe,qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>Xs&&(e.flags|=128,r=!0,No(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!We)return It(e),null}else 2*Ze()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,r=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=qe.current,De(qe,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return Gm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function yA(t,e){switch(Am(e),e.tag){case 1:return Qt(e.type)&&Vu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),$e(Kt),$e(Lt),Mm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lm(e),null;case 13:if($e(qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $e(qe),null;case 4:return Qs(),null;case 10:return bm(e.type._context),null;case 22:case 23:return Gm(),null;case 24:return null;default:return null}}var $l=!1,At=!1,vA=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function sp(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var nv=!1;function _A(t,e){if(zf=Ou,t=Dw(),Sm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bf={focusedElem:t,selectionRange:n},Ou=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,w=_.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Tn(e.type,y),w);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(E){Qe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return _=nv,nv=!1,_}function ta(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&sp(e,n,s)}i=i.next}while(i!==r)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function op(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bE(t){var e=t.alternate;e!==null&&(t.alternate=null,bE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[Ea],delete e[Hf],delete e[tA],delete e[nA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function NE(t){return t.tag===5||t.tag===3||t.tag===4}function rv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||NE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Mu));else if(r!==4&&(t=t.child,t!==null))for(ap(t,e,n),t=t.sibling;t!==null;)ap(t,e,n),t=t.sibling}function lp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(lp(t,e,n),t=t.sibling;t!==null;)lp(t,e,n),t=t.sibling}var gt=null,Cn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)OE(t,e,n),n=n.sibling}function OE(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:At||Ts(n,e);case 6:var r=gt,i=Cn;gt=null,Rr(t,e,n),gt=r,Cn=i,gt!==null&&(Cn?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(Cn?(t=gt,n=n.stateNode,t.nodeType===8?Ah(t.parentNode,n):t.nodeType===1&&Ah(t,n),ga(t)):Ah(gt,n.stateNode));break;case 4:r=gt,i=Cn,gt=n.stateNode.containerInfo,Cn=!0,Rr(t,e,n),gt=r,Cn=i;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sp(n,e,o),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!At&&(Ts(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Qe(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Rr(t,e,n),At=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function iv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vA),e.forEach(function(r){var i=kA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,Cn=!1;break e;case 3:gt=a.stateNode.containerInfo,Cn=!0;break e;case 4:gt=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(gt===null)throw Error(N(160));OE(s,o,i),gt=null,Cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Qe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)DE(e,t),e=e.sibling}function DE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Mn(t),r&4){try{ta(3,t,t.return),Hc(3,t)}catch(y){Qe(t,t.return,y)}try{ta(5,t,t.return)}catch(y){Qe(t,t.return,y)}}break;case 1:In(e,t),Mn(t),r&512&&n!==null&&Ts(n,n.return);break;case 5:if(In(e,t),Mn(t),r&512&&n!==null&&Ts(n,n.return),t.flags&32){var i=t.stateNode;try{ha(i,"")}catch(y){Qe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tw(i,s),Nf(a,o);var u=Nf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?ow(i,d):c==="dangerouslySetInnerHTML"?iw(i,d):c==="children"?ha(i,d):hm(i,c,d,u)}switch(a){case"input":Af(i,s);break;case"textarea":nw(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ps(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ps(i,!!s.multiple,s.defaultValue,!0):Ps(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ea]=s}catch(y){Qe(t,t.return,y)}}break;case 6:if(In(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Qe(t,t.return,y)}}break;case 3:if(In(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(y){Qe(t,t.return,y)}break;case 4:In(e,t),Mn(t);break;case 13:In(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qm=Ze())),r&4&&iv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(At=(u=At)||c,In(e,t),At=u):In(e,t),Mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(q=t,c=t.child;c!==null;){for(d=q=c;q!==null;){switch(h=q,g=h.child,h.tag){case 0:case 11:case 14:case 15:ta(4,h,h.return);break;case 1:Ts(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Qe(r,n,y)}}break;case 5:Ts(h,h.return);break;case 22:if(h.memoizedState!==null){ov(d);continue}}g!==null?(g.return=h,q=g):ov(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sw("display",o))}catch(y){Qe(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){Qe(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:In(e,t),Mn(t),r&4&&iv(t);break;case 21:break;default:In(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(NE(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var s=rv(t);lp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=rv(t);ap(t,a,o);break;default:throw Error(N(161))}}catch(l){Qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wA(t,e,n){q=t,LE(t)}function LE(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$l;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||At;a=$l;var u=At;if($l=o,(At=l)&&!u)for(q=i;q!==null;)o=q,l=o.child,o.tag===22&&o.memoizedState!==null?av(i):l!==null?(l.return=o,q=l):av(i);for(;s!==null;)q=s,LE(s),s=s.sibling;q=i,$l=a,At=u}sv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):sv(t)}}function sv(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:At||Hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!At)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&z0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}z0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ga(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}At||e.flags&512&&op(e)}catch(h){Qe(e,e.return,h)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function ov(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function av(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(l){Qe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Qe(e,i,l)}}var s=e.return;try{op(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{op(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var EA=Math.ceil,Gu=Cr.ReactCurrentDispatcher,Bm=Cr.ReactCurrentOwner,pn=Cr.ReactCurrentBatchConfig,ye=0,ht=null,it=null,_t=0,Zt=0,Ss=yi(0),at=0,Aa=null,Ui=0,Gc=0,Wm=0,na=null,Wt=null,qm=0,Xs=1/0,sr=null,Ku=!1,up=null,Xr=null,jl=!1,zr=null,Qu=0,ra=0,cp=null,mu=-1,gu=0;function Ft(){return ye&6?Ze():mu!==-1?mu:mu=Ze()}function Jr(t){return t.mode&1?ye&2&&_t!==0?_t&-_t:iA.transition!==null?(gu===0&&(gu=vw()),gu):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:Sw(t.type)),t):1}function bn(t,e,n,r){if(50<ra)throw ra=0,cp=null,Error(N(185));Xa(t,n,r),(!(ye&2)||t!==ht)&&(t===ht&&(!(ye&2)&&(Gc|=n),at===4&&Lr(t,_t)),Yt(t,r),n===1&&ye===0&&!(e.mode&1)&&(Xs=Ze()+500,Bc&&vi()))}function Yt(t,e){var n=t.callbackNode;i2(t,e);var r=Nu(t,t===ht?_t:0);if(r===0)n!==null&&g0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&g0(n),e===1)t.tag===0?rA(lv.bind(null,t)):Ww(lv.bind(null,t)),Z2(function(){!(ye&6)&&vi()}),n=null;else{switch(_w(r)){case 1:n=ym;break;case 4:n=gw;break;case 16:n=bu;break;case 536870912:n=yw;break;default:n=bu}n=BE(n,ME.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ME(t,e){if(mu=-1,gu=0,ye&6)throw Error(N(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var r=Nu(t,t===ht?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yu(t,r);else{e=r;var i=ye;ye|=2;var s=$E();(ht!==t||_t!==e)&&(sr=null,Xs=Ze()+500,Oi(t,e));do try{TA();break}catch(a){VE(t,a)}while(1);Rm(),Gu.current=s,ye=i,it!==null?e=0:(ht=null,_t=0,e=at)}if(e!==0){if(e===2&&(i=Vf(t),i!==0&&(r=i,e=dp(t,i))),e===1)throw n=Aa,Oi(t,0),Lr(t,r),Yt(t,Ze()),n;if(e===6)Lr(t,r);else{if(i=t.current.alternate,!(r&30)&&!xA(i)&&(e=Yu(t,r),e===2&&(s=Vf(t),s!==0&&(r=s,e=dp(t,s))),e===1))throw n=Aa,Oi(t,0),Lr(t,r),Yt(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:Ti(t,Wt,sr);break;case 3:if(Lr(t,r),(r&130023424)===r&&(e=qm+500-Ze(),10<e)){if(Nu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qf(Ti.bind(null,t,Wt,sr),e);break}Ti(t,Wt,sr);break;case 4:if(Lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EA(r/1960))-r,10<r){t.timeoutHandle=qf(Ti.bind(null,t,Wt,sr),r);break}Ti(t,Wt,sr);break;case 5:Ti(t,Wt,sr);break;default:throw Error(N(329))}}}return Yt(t,Ze()),t.callbackNode===n?ME.bind(null,t):null}function dp(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(Oi(t,e).flags|=256),t=Yu(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&hp(e)),t}function hp(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function xA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~Wm,e&=~Gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function lv(t){if(ye&6)throw Error(N(327));Ds();var e=Nu(t,0);if(!(e&1))return Yt(t,Ze()),null;var n=Yu(t,e);if(t.tag!==0&&n===2){var r=Vf(t);r!==0&&(e=r,n=dp(t,r))}if(n===1)throw n=Aa,Oi(t,0),Lr(t,e),Yt(t,Ze()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ti(t,Wt,sr),Yt(t,Ze()),null}function Hm(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(Xs=Ze()+500,Bc&&vi())}}function zi(t){zr!==null&&zr.tag===0&&!(ye&6)&&Ds();var e=ye;ye|=1;var n=pn.transition,r=Ie;try{if(pn.transition=null,Ie=1,t)return t()}finally{Ie=r,pn.transition=n,ye=e,!(ye&6)&&vi()}}function Gm(){Zt=Ss.current,$e(Ss)}function Oi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,J2(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(Am(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vu();break;case 3:Qs(),$e(Kt),$e(Lt),Mm();break;case 5:Lm(r);break;case 4:Qs();break;case 13:$e(qe);break;case 19:$e(qe);break;case 10:bm(r.type._context);break;case 22:case 23:Gm()}n=n.return}if(ht=t,it=t=Zr(t.current,null),_t=Zt=e,at=0,Aa=null,Wm=Gc=Ui=0,Wt=na=null,ki!==null){for(e=0;e<ki.length;e++)if(n=ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ki=null}return t}function VE(t,e){do{var n=it;try{if(Rm(),hu.current=Hu,qu){for(var r=He.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qu=!1}if(Fi=0,dt=ot=He=null,ea=!1,Ta=0,Bm.current=null,n===null||n.return===null){at=1,Aa=e,it=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=_t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Q0(o);if(g!==null){g.flags&=-257,Y0(g,o,a,s,e),g.mode&1&&K0(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){K0(s,u,e),Km();break e}l=Error(N(426))}}else if(We&&a.mode&1){var w=Q0(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Y0(w,o,a,s,e),km(Ys(l,a));break e}}s=l=Ys(l,a),at!==4&&(at=2),na===null?na=[s]:na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=wE(s,l,e);U0(s,f);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Xr===null||!Xr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=EE(s,a,e);U0(s,E);break e}}s=s.return}while(s!==null)}FE(n)}catch(x){e=x,it===n&&n!==null&&(it=n=n.return);continue}break}while(1)}function $E(){var t=Gu.current;return Gu.current=Hu,t===null?Hu:t}function Km(){(at===0||at===3||at===2)&&(at=4),ht===null||!(Ui&268435455)&&!(Gc&268435455)||Lr(ht,_t)}function Yu(t,e){var n=ye;ye|=2;var r=$E();(ht!==t||_t!==e)&&(sr=null,Oi(t,e));do try{IA();break}catch(i){VE(t,i)}while(1);if(Rm(),ye=n,Gu.current=r,it!==null)throw Error(N(261));return ht=null,_t=0,at}function IA(){for(;it!==null;)jE(it)}function TA(){for(;it!==null&&!QC();)jE(it)}function jE(t){var e=zE(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?FE(t):it=e,Bm.current=null}function FE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yA(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,it=null;return}}else if(n=gA(n,e,Zt),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);at===0&&(at=5)}function Ti(t,e,n){var r=Ie,i=pn.transition;try{pn.transition=null,Ie=1,SA(t,e,n,r)}finally{pn.transition=i,Ie=r}return null}function SA(t,e,n,r){do Ds();while(zr!==null);if(ye&6)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(s2(t,s),t===ht&&(it=ht=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,BE(bu,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var o=Ie;Ie=1;var a=ye;ye|=4,Bm.current=null,_A(t,n),DE(n,t),q2(Bf),Ou=!!zf,Bf=zf=null,t.current=n,wA(n),YC(),ye=a,Ie=o,pn.transition=s}else t.current=n;if(jl&&(jl=!1,zr=t,Qu=i),s=t.pendingLanes,s===0&&(Xr=null),ZC(n.stateNode),Yt(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ku)throw Ku=!1,t=up,up=null,t;return Qu&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===cp?ra++:(ra=0,cp=t):ra=0,vi(),null}function Ds(){if(zr!==null){var t=_w(Qu),e=pn.transition,n=Ie;try{if(pn.transition=null,Ie=16>t?16:t,zr===null)var r=!1;else{if(t=zr,zr=null,Qu=0,ye&6)throw Error(N(331));var i=ye;for(ye|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:ta(8,c,s)}var d=c.child;if(d!==null)d.return=c,q=d;else for(;q!==null;){c=q;var h=c.sibling,g=c.return;if(bE(c),c===u){q=null;break}if(h!==null){h.return=g,q=h;break}q=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,q=f;break e}q=s.return}}var m=t.current;for(q=m;q!==null;){o=q;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,q=v;else e:for(o=m;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(x){Qe(a,a.return,x)}if(a===o){q=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,q=E;break e}q=a.return}}if(ye=i,vi(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot($c,t)}catch{}r=!0}return r}finally{Ie=n,pn.transition=e}}return!1}function uv(t,e,n){e=Ys(n,e),e=wE(t,e,1),t=Yr(t,e,1),e=Ft(),t!==null&&(Xa(t,1,e),Yt(t,e))}function Qe(t,e,n){if(t.tag===3)uv(t,t,n);else for(;e!==null;){if(e.tag===3){uv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xr===null||!Xr.has(r))){t=Ys(n,t),t=EE(e,t,1),e=Yr(e,t,1),t=Ft(),e!==null&&(Xa(e,1,t),Yt(e,t));break}}e=e.return}}function CA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ft(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(_t&n)===n&&(at===4||at===3&&(_t&130023424)===_t&&500>Ze()-qm?Oi(t,0):Wm|=n),Yt(t,e)}function UE(t,e){e===0&&(t.mode&1?(e=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):e=1);var n=Ft();t=yr(t,e),t!==null&&(Xa(t,e,n),Yt(t,n))}function AA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),UE(t,n)}function kA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),UE(t,n)}var zE;zE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)Ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ht=!1,mA(t,e,n);Ht=!!(t.flags&131072)}else Ht=!1,We&&e.flags&1048576&&qw(e,Fu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pu(t,e),t=e.pendingProps;var i=Hs(e,Lt.current);Os(e,n),i=$m(null,e,r,t,i,n);var s=jm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(r)?(s=!0,$u(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Om(e),i.updater=Wc,e.stateNode=i,i._reactInternals=e,Jf(e,r,t,n),e=tp(null,e,r,!0,s,n)):(e.tag=0,We&&s&&Cm(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RA(r),t=Tn(r,t),i){case 0:e=ep(null,e,r,t,n);break e;case 1:e=Z0(null,e,r,t,n);break e;case 11:e=X0(null,e,r,t,n);break e;case 14:e=J0(null,e,r,Tn(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),ep(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),Z0(t,e,r,i,n);case 3:e:{if(SE(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qw(t,e),Bu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ys(Error(N(423)),e),e=ev(t,e,r,n,i);break e}else if(r!==i){i=Ys(Error(N(424)),e),e=ev(t,e,r,n,i);break e}else for(en=Qr(e.stateNode.containerInfo.firstChild),nn=e,We=!0,An=null,n=Zw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===i){e=vr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return eE(e),t===null&&Qf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wf(r,i)?o=null:s!==null&&Wf(r,s)&&(e.flags|=32),TE(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Qf(e),null;case 13:return CE(t,e,n);case 4:return Dm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ks(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),X0(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,De(Uu,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!Kt.current){e=vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=fr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Os(e,n),i=gn(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=Tn(r,e.pendingProps),i=Tn(r.type,i),J0(t,e,r,i,n);case 15:return xE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),pu(t,e),e.tag=1,Qt(r)?(t=!0,$u(e)):t=!1,Os(e,n),Xw(e,r,i),Jf(e,r,i,n),tp(null,e,r,!0,t,n);case 19:return AE(t,e,n);case 22:return IE(t,e,n)}throw Error(N(156,e.tag))};function BE(t,e){return mw(t,e)}function PA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,e,n,r){return new PA(t,e,n,r)}function Qm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RA(t){if(typeof t=="function")return Qm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pm)return 11;if(t===mm)return 14}return 2}function Zr(t,e){var n=t.alternate;return n===null?(n=fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Qm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Di(n.children,i,s,e);case fm:o=8,i|=8;break;case xf:return t=fn(12,n,e,i|2),t.elementType=xf,t.lanes=s,t;case If:return t=fn(13,n,e,i),t.elementType=If,t.lanes=s,t;case Tf:return t=fn(19,n,e,i),t.elementType=Tf,t.lanes=s,t;case J1:return Kc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y1:o=10;break e;case X1:o=9;break e;case pm:o=11;break e;case mm:o=14;break e;case Nr:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=fn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Di(t,e,n,r){return t=fn(7,t,r,e),t.lanes=n,t}function Kc(t,e,n,r){return t=fn(22,t,r,e),t.elementType=J1,t.lanes=n,t.stateNode={isHidden:!1},t}function Lh(t,e,n){return t=fn(6,t,null,e),t.lanes=n,t}function Mh(t,e,n){return e=fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gh(0),this.expirationTimes=gh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ym(t,e,n,r,i,s,o,a,l){return t=new bA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Om(s),t}function NA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function WE(t){if(!t)return ui;t=t._reactInternals;e:{if(Ji(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(Qt(n))return Bw(t,n,e)}return e}function qE(t,e,n,r,i,s,o,a,l){return t=Ym(n,r,!0,t,i,s,o,a,l),t.context=WE(null),n=t.current,r=Ft(),i=Jr(n),s=fr(r,i),s.callback=e??null,Yr(n,s,i),t.current.lanes=i,Xa(t,i,r),Yt(t,r),t}function Qc(t,e,n,r){var i=e.current,s=Ft(),o=Jr(i);return n=WE(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yr(i,e,o),t!==null&&(bn(t,i,o,s),du(t,i,o)),o}function Xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xm(t,e){cv(t,e),(t=t.alternate)&&cv(t,e)}function OA(){return null}var HE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jm(t){this._internalRoot=t}Yc.prototype.render=Jm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Qc(t,e,null,null)};Yc.prototype.unmount=Jm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zi(function(){Qc(null,t,null,null)}),e[gr]=null}};function Yc(t){this._internalRoot=t}Yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=xw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dr.length&&e!==0&&e<Dr[n].priority;n++);Dr.splice(n,0,t),n===0&&Tw(t)}};function Zm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dv(){}function DA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xu(o);s.call(u)}}var o=qE(e,r,t,0,null,!1,!1,"",dv);return t._reactRootContainer=o,t[gr]=o.current,_a(t.nodeType===8?t.parentNode:t),zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xu(l);a.call(u)}}var l=Ym(t,0,!1,null,null,!1,!1,"",dv);return t._reactRootContainer=l,t[gr]=l.current,_a(t.nodeType===8?t.parentNode:t),zi(function(){Qc(e,l,n,r)}),l}function Jc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Xu(o);a.call(l)}}Qc(e,o,t,i)}else o=DA(n,e,t,i,r);return Xu(o)}ww=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jo(e.pendingLanes);n!==0&&(vm(e,n|1),Yt(e,Ze()),!(ye&6)&&(Xs=Ze()+500,vi()))}break;case 13:zi(function(){var r=yr(t,1);if(r!==null){var i=Ft();bn(r,t,1,i)}}),Xm(t,1)}};_m=function(t){if(t.tag===13){var e=yr(t,134217728);if(e!==null){var n=Ft();bn(e,t,134217728,n)}Xm(t,134217728)}};Ew=function(t){if(t.tag===13){var e=Jr(t),n=yr(t,e);if(n!==null){var r=Ft();bn(n,t,e,r)}Xm(t,e)}};xw=function(){return Ie};Iw=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};Df=function(t,e,n){switch(e){case"input":if(Af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zc(r);if(!i)throw Error(N(90));ew(r),Af(r,i)}}}break;case"textarea":nw(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};uw=Hm;cw=zi;var LA={usingClientEntryPoint:!1,Events:[Za,_s,zc,aw,lw,Hm]},Oo={findFiberByHostInstance:Ai,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},MA={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fw(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||OA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{$c=Fl.inject(MA),Wn=Fl}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LA;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zm(e))throw Error(N(200));return NA(t,e,null,n)};an.createRoot=function(t,e){if(!Zm(t))throw Error(N(299));var n=!1,r="",i=HE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ym(t,1,!1,null,null,n,!1,r,i),t[gr]=e.current,_a(t.nodeType===8?t.parentNode:t),new Jm(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=fw(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return zi(t)};an.hydrate=function(t,e,n){if(!Xc(e))throw Error(N(200));return Jc(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Zm(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=HE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qE(e,null,t,1,n??null,i,!1,s,o),t[gr]=e.current,_a(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yc(e)};an.render=function(t,e,n){if(!Xc(e))throw Error(N(200));return Jc(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!Xc(t))throw Error(N(40));return t._reactRootContainer?(zi(function(){Jc(null,null,t,!1,function(){t._reactRootContainer=null,t[gr]=null})}),!0):!1};an.unstable_batchedUpdates=Hm;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xc(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Jc(t,e,n,!1,r)};an.version="18.2.0-next-9e3b772b8-20220608";function GE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(GE)}catch(t){console.error(t)}}GE(),q1.exports=an;var KE=q1.exports,hv=KE;wf.createRoot=hv.createRoot,wf.hydrateRoot=hv.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ka.apply(this,arguments)}var Br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Br||(Br={}));const fv="popstate";function VA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return fp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ju(i)}return jA(e,n,null,t)}function et(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $A(){return Math.random().toString(36).substr(2,8)}function pv(t,e){return{usr:t.state,key:t.key,idx:e}}function fp(t,e,n,r){return n===void 0&&(n=null),ka({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?go(e):e,{state:n,key:e&&e.key||r||$A()})}function Ju(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function go(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Br.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ka({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Br.Pop;let w=c(),f=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:f})}function h(w,f){a=Br.Push;let m=fp(y.location,w,f);n&&n(m,w),u=c()+1;let v=pv(m,u),E=y.createHref(m);try{o.pushState(v,"",E)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function g(w,f){a=Br.Replace;let m=fp(y.location,w,f);n&&n(m,w),u=c();let v=pv(m,u),E=y.createHref(m);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function _(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Ju(w);return et(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(fv,d),l=w,()=>{i.removeEventListener(fv,d),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let f=_(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:g,go(w){return o.go(w)}};return y}var mv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mv||(mv={}));function FA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?go(e):e,i=tg(r.pathname||"/",n);if(i==null)return null;let s=QE(t);UA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=YA(s[a],ZA(i));return o}function QE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(et(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ei([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(et(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),QE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:KA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of YE(s.path))i(s,o,l)}),e}function YE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=YE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function UA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:QA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zA=/^:\w+$/,BA=3,WA=2,qA=1,HA=10,GA=-2,gv=t=>t==="*";function KA(t,e){let n=t.split("/"),r=n.length;return n.some(gv)&&(r+=GA),e&&(r+=WA),n.filter(i=>!gv(i)).reduce((i,s)=>i+(zA.test(s)?BA:s===""?qA:HA),r)}function QA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function YA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=XA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:ei([i,c.pathname]),pathnameBase:rk(ei([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=ei([i,c.pathnameBase]))}return s}function XA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=JA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=ek(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function JA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ZA(t){try{return decodeURI(t)}catch(e){return eg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ek(t,e){try{return decodeURIComponent(t)}catch(n){return eg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function tg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function tk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?go(t):t;return{pathname:n?n.startsWith("/")?n:nk(n,e):e,search:ik(r),hash:sk(i)}}function nk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ng(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=go(t):(i=ka({},t),et(!i.pathname||!i.pathname.includes("?"),Vh("?","pathname","search",i)),et(!i.pathname||!i.pathname.includes("#"),Vh("#","pathname","hash",i)),et(!i.search||!i.search.includes("#"),Vh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=tk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ei=t=>t.join("/").replace(/\/\/+/g,"/"),rk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ik=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ok(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const XE=["post","put","patch","delete"];new Set(XE);const ak=["get",...XE];new Set(ak);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zu(){return Zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zu.apply(this,arguments)}const ig=I.createContext(null),JE=I.createContext(null),Zi=I.createContext(null),Zc=I.createContext(null),Ar=I.createContext({outlet:null,matches:[],isDataRoute:!1}),ZE=I.createContext(null);function lk(t,e){let{relative:n}=e===void 0?{}:e;yo()||et(!1);let{basename:r,navigator:i}=I.useContext(Zi),{hash:s,pathname:o,search:a}=sg(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ei([r,o])),i.createHref({pathname:l,search:a,hash:s})}function yo(){return I.useContext(Zc)!=null}function Zn(){return yo()||et(!1),I.useContext(Zc).location}function ex(t){I.useContext(Zi).static||I.useLayoutEffect(t)}function kr(){let{isDataRoute:t}=I.useContext(Ar);return t?Ik():uk()}function uk(){yo()||et(!1);let t=I.useContext(ig),{basename:e,navigator:n}=I.useContext(Zi),{matches:r}=I.useContext(Ar),{pathname:i}=Zn(),s=JSON.stringify(ng(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return ex(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=rg(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ei([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const ck=I.createContext(null);function dk(t){let e=I.useContext(Ar).outlet;return e&&I.createElement(ck.Provider,{value:t},e)}function sg(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(Ar),{pathname:i}=Zn(),s=JSON.stringify(ng(r).map(o=>o.pathnameBase));return I.useMemo(()=>rg(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function hk(t,e){return fk(t,e)}function fk(t,e,n){yo()||et(!1);let{navigator:r}=I.useContext(Zi),{matches:i}=I.useContext(Ar),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Zn(),u;if(e){var c;let y=typeof e=="string"?go(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||et(!1),u=y}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",g=FA(t,{pathname:h}),_=vk(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:ei([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:ei([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&_?I.createElement(Zc.Provider,{value:{location:Zu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Br.Pop}},_):_}function pk(){let t=xk(),e=ok(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const mk=I.createElement(pk,null);class gk extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(Ar.Provider,{value:this.props.routeContext},I.createElement(ZE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yk(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(ig);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Ar.Provider,{value:e},r)}function vk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||et(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||mk);let h=e.concat(s.slice(0,u+1)),g=()=>{let _;return c?_=d:l.route.Component?_=I.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,I.createElement(yk,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(gk,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var tx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tx||{}),ec=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ec||{});function _k(t){let e=I.useContext(ig);return e||et(!1),e}function wk(t){let e=I.useContext(JE);return e||et(!1),e}function Ek(t){let e=I.useContext(Ar);return e||et(!1),e}function nx(t){let e=Ek(),n=e.matches[e.matches.length-1];return n.route.id||et(!1),n.route.id}function xk(){var t;let e=I.useContext(ZE),n=wk(ec.UseRouteError),r=nx(ec.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Ik(){let{router:t}=_k(tx.UseNavigateStable),e=nx(ec.UseNavigateStable),n=I.useRef(!1);return ex(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Zu({fromRouteId:e},s)))},[t,e])}function Tk(t){let{to:e,replace:n,state:r,relative:i}=t;yo()||et(!1);let{matches:s}=I.useContext(Ar),{pathname:o}=Zn(),a=kr(),l=rg(e,ng(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function Sk(t){return dk(t.context)}function ir(t){et(!1)}function Ck(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Br.Pop,navigator:s,static:o=!1}=t;yo()&&et(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=go(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:g="default"}=r,_=I.useMemo(()=>{let y=tg(u,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:g},navigationType:i}},[a,u,c,d,h,g,i]);return _==null?null:I.createElement(Zi.Provider,{value:l},I.createElement(Zc.Provider,{children:n,value:_}))}function Ak(t){let{children:e,location:n}=t;return hk(pp(e),n)}new Promise(()=>{});function pp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,pp(r.props.children,s));return}r.type!==ir&&et(!1),!r.props.index||!r.props.children||et(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=pp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(this,arguments)}function rx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Pk(t,e){return t.button===0&&(!e||e==="_self")&&!kk(t)}const Rk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],bk=["aria-current","caseSensitive","className","end","style","to","children"],Nk="startTransition",yv=AC[Nk];function Ok(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=VA({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(d=>{u&&yv?yv(()=>l(d)):l(d)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(Ck,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mk=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=rx(e,Rk),{basename:h}=I.useContext(Zi),g,_=!1;if(typeof u=="string"&&Lk.test(u)&&(g=u,Dk))try{let m=new URL(window.location.href),v=u.startsWith("//")?new URL(m.protocol+u):new URL(u),E=tg(v.pathname,h);v.origin===m.origin&&E!=null?u=E+v.search+v.hash:_=!0}catch{}let y=lk(u,{relative:i}),w=$k(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function f(m){r&&r(m),m.defaultPrevented||w(m)}return I.createElement("a",tc({},d,{href:g||y,onClick:_||s?r:f,ref:n,target:l}))}),Vk=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=rx(e,bk),d=sg(l,{relative:c.relative}),h=Zn(),g=I.useContext(JE),{navigator:_}=I.useContext(Zi),y=_.encodeLocation?_.encodeLocation(d).pathname:d.pathname,w=h.pathname,f=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(w=w.toLowerCase(),f=f?f.toLowerCase():null,y=y.toLowerCase());let m=w===y||!o&&w.startsWith(y)&&w.charAt(y.length)==="/",v=f!=null&&(f===y||!o&&f.startsWith(y)&&f.charAt(y.length)==="/"),E=m?r:void 0,x;typeof s=="function"?x=s({isActive:m,isPending:v}):x=[s,m?"active":null,v?"pending":null].filter(Boolean).join(" ");let C=typeof a=="function"?a({isActive:m,isPending:v}):a;return I.createElement(Mk,tc({},c,{"aria-current":E,className:x,ref:n,style:C,to:l}),typeof u=="function"?u({isActive:m,isPending:v}):u)});var vv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(vv||(vv={}));var _v;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_v||(_v={}));function $k(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=kr(),l=Zn(),u=sg(t,{relative:o});return I.useCallback(c=>{if(Pk(c,n)){c.preventDefault();let d=r!==void 0?r:Ju(l)===Ju(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var ix={exports:{}},sx={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=I;function jk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fk=typeof Object.is=="function"?Object.is:jk,Uk=Js.useState,zk=Js.useEffect,Bk=Js.useLayoutEffect,Wk=Js.useDebugValue;function qk(t,e){var n=e(),r=Uk({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return Bk(function(){i.value=n,i.getSnapshot=e,$h(i)&&s({inst:i})},[t,n,e]),zk(function(){return $h(i)&&s({inst:i}),t(function(){$h(i)&&s({inst:i})})},[t]),Wk(n),n}function $h(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fk(t,n)}catch{return!0}}function Hk(t,e){return e()}var Gk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Hk:qk;sx.useSyncExternalStore=Js.useSyncExternalStore!==void 0?Js.useSyncExternalStore:Gk;ix.exports=sx;var Kk=ix.exports,ox={exports:{}},ax={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=I,Qk=Kk;function Yk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xk=typeof Object.is=="function"?Object.is:Yk,Jk=Qk.useSyncExternalStore,Zk=ed.useRef,eP=ed.useEffect,tP=ed.useMemo,nP=ed.useDebugValue;ax.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=Zk(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=tP(function(){function l(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&o.hasValue){var _=o.value;if(i(_,g))return d=_}return d=g}if(_=d,Xk(c,g))return _;var y=r(g);return i!==void 0&&i(_,y)?_:(c=g,d=y)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=Jk(t,s[0],s[1]);return eP(function(){o.hasValue=!0,o.value=a},[a]),nP(a),a};ox.exports=ax;var rP=ox.exports;function iP(t){t()}let lx=iP;const sP=t=>lx=t,oP=()=>lx,wv=Symbol.for("react-redux-context"),Ev=typeof globalThis<"u"?globalThis:{};function aP(){var t;if(!I.createContext)return{};const e=(t=Ev[wv])!=null?t:Ev[wv]=new Map;let n=e.get(I.createContext);return n||(n=I.createContext(null),e.set(I.createContext,n)),n}const ci=aP();function og(t=ci){return function(){return I.useContext(t)}}const ux=og(),lP=()=>{throw new Error("uSES not initialized!")};let cx=lP;const uP=t=>{cx=t},cP=(t,e)=>t===e;function dP(t=ci){const e=t===ci?ux:og(t);return function(r,i={}){const{equalityFn:s=cP,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:d,noopCheck:h}=e();I.useRef(!0);const g=I.useCallback({[r.name](y){return r(y)}}[r.name],[r,d,o]),_=cx(u.addNestedSub,l.getState,c||l.getState,g,s);return I.useDebugValue(_),_}}const vn=dP();var dx={exports:{}},Se={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pt=typeof Symbol=="function"&&Symbol.for,ag=pt?Symbol.for("react.element"):60103,lg=pt?Symbol.for("react.portal"):60106,td=pt?Symbol.for("react.fragment"):60107,nd=pt?Symbol.for("react.strict_mode"):60108,rd=pt?Symbol.for("react.profiler"):60114,id=pt?Symbol.for("react.provider"):60109,sd=pt?Symbol.for("react.context"):60110,ug=pt?Symbol.for("react.async_mode"):60111,od=pt?Symbol.for("react.concurrent_mode"):60111,ad=pt?Symbol.for("react.forward_ref"):60112,ld=pt?Symbol.for("react.suspense"):60113,hP=pt?Symbol.for("react.suspense_list"):60120,ud=pt?Symbol.for("react.memo"):60115,cd=pt?Symbol.for("react.lazy"):60116,fP=pt?Symbol.for("react.block"):60121,pP=pt?Symbol.for("react.fundamental"):60117,mP=pt?Symbol.for("react.responder"):60118,gP=pt?Symbol.for("react.scope"):60119;function un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ag:switch(t=t.type,t){case ug:case od:case td:case rd:case nd:case ld:return t;default:switch(t=t&&t.$$typeof,t){case sd:case ad:case cd:case ud:case id:return t;default:return e}}case lg:return e}}}function hx(t){return un(t)===od}Se.AsyncMode=ug;Se.ConcurrentMode=od;Se.ContextConsumer=sd;Se.ContextProvider=id;Se.Element=ag;Se.ForwardRef=ad;Se.Fragment=td;Se.Lazy=cd;Se.Memo=ud;Se.Portal=lg;Se.Profiler=rd;Se.StrictMode=nd;Se.Suspense=ld;Se.isAsyncMode=function(t){return hx(t)||un(t)===ug};Se.isConcurrentMode=hx;Se.isContextConsumer=function(t){return un(t)===sd};Se.isContextProvider=function(t){return un(t)===id};Se.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ag};Se.isForwardRef=function(t){return un(t)===ad};Se.isFragment=function(t){return un(t)===td};Se.isLazy=function(t){return un(t)===cd};Se.isMemo=function(t){return un(t)===ud};Se.isPortal=function(t){return un(t)===lg};Se.isProfiler=function(t){return un(t)===rd};Se.isStrictMode=function(t){return un(t)===nd};Se.isSuspense=function(t){return un(t)===ld};Se.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===td||t===od||t===rd||t===nd||t===ld||t===hP||typeof t=="object"&&t!==null&&(t.$$typeof===cd||t.$$typeof===ud||t.$$typeof===id||t.$$typeof===sd||t.$$typeof===ad||t.$$typeof===pP||t.$$typeof===mP||t.$$typeof===gP||t.$$typeof===fP)};Se.typeOf=un;dx.exports=Se;var cg=dx.exports,dg=cg,yP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_P={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hg={};hg[dg.ForwardRef]=_P;hg[dg.Memo]=fx;function xv(t){return dg.isMemo(t)?fx:hg[t.$$typeof]||yP}var wP=Object.defineProperty,EP=Object.getOwnPropertyNames,Iv=Object.getOwnPropertySymbols,xP=Object.getOwnPropertyDescriptor,IP=Object.getPrototypeOf,Tv=Object.prototype;function px(t,e,n){if(typeof e!="string"){if(Tv){var r=IP(e);r&&r!==Tv&&px(t,r,n)}var i=EP(e);Iv&&(i=i.concat(Iv(e)));for(var s=xv(t),o=xv(e),a=0;a<i.length;++a){var l=i[a];if(!vP[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=xP(e,l);try{wP(t,l,u)}catch{}}}}return t}var TP=px;const SP=sm(TP);var Ae={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg=Symbol.for("react.element"),pg=Symbol.for("react.portal"),dd=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),pd=Symbol.for("react.provider"),md=Symbol.for("react.context"),CP=Symbol.for("react.server_context"),gd=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),wd=Symbol.for("react.lazy"),AP=Symbol.for("react.offscreen"),mx;mx=Symbol.for("react.module.reference");function _n(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case fg:switch(t=t.type,t){case dd:case fd:case hd:case yd:case vd:return t;default:switch(t=t&&t.$$typeof,t){case CP:case md:case gd:case wd:case _d:case pd:return t;default:return e}}case pg:return e}}}Ae.ContextConsumer=md;Ae.ContextProvider=pd;Ae.Element=fg;Ae.ForwardRef=gd;Ae.Fragment=dd;Ae.Lazy=wd;Ae.Memo=_d;Ae.Portal=pg;Ae.Profiler=fd;Ae.StrictMode=hd;Ae.Suspense=yd;Ae.SuspenseList=vd;Ae.isAsyncMode=function(){return!1};Ae.isConcurrentMode=function(){return!1};Ae.isContextConsumer=function(t){return _n(t)===md};Ae.isContextProvider=function(t){return _n(t)===pd};Ae.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===fg};Ae.isForwardRef=function(t){return _n(t)===gd};Ae.isFragment=function(t){return _n(t)===dd};Ae.isLazy=function(t){return _n(t)===wd};Ae.isMemo=function(t){return _n(t)===_d};Ae.isPortal=function(t){return _n(t)===pg};Ae.isProfiler=function(t){return _n(t)===fd};Ae.isStrictMode=function(t){return _n(t)===hd};Ae.isSuspense=function(t){return _n(t)===yd};Ae.isSuspenseList=function(t){return _n(t)===vd};Ae.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===dd||t===fd||t===hd||t===yd||t===vd||t===AP||typeof t=="object"&&t!==null&&(t.$$typeof===wd||t.$$typeof===_d||t.$$typeof===pd||t.$$typeof===md||t.$$typeof===gd||t.$$typeof===mx||t.getModuleId!==void 0)};Ae.typeOf=_n;function kP(){const t=oP();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const Sv={notify(){},get:()=>[]};function PP(t,e){let n,r=Sv;function i(d){return l(),r.subscribe(d)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=kP())}function u(){n&&(n(),n=void 0,r.clear(),r=Sv)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const RP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bP=RP?I.useLayoutEffect:I.useEffect;function NP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=I.useMemo(()=>{const u=PP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=I.useMemo(()=>t.getState(),[t]);bP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||ci;return I.createElement(l.Provider,{value:o},n)}function gx(t=ci){const e=t===ci?ux:og(t);return function(){const{store:r}=e();return r}}const OP=gx();function DP(t=ci){const e=t===ci?OP:gx(t);return function(){return e().dispatch}}const es=DP();uP(rP.useSyncExternalStoreWithSelector);sP(KE.unstable_batchedUpdates);const wn=t=>t.auth;function LP(t){function e($,z,B,ee,T){for(var ce=0,V=0,be=0,pe=0,ge,re,Xe=0,L=0,J,Le=J=ge=0,A=0,S=0,W=0,P=0,G=B.length,Ue=G-1,xn,oe="",Je="",uh="",ch="",Pr;A<G;){if(re=B.charCodeAt(A),A===Ue&&V+pe+be+ce!==0&&(V!==0&&(re=V===47?10:47),pe=be=ce=0,G++,Ue++),V+pe+be+ce===0){if(A===Ue&&(0<S&&(oe=oe.replace(h,"")),0<oe.trim().length)){switch(re){case 32:case 9:case 59:case 13:case 10:break;default:oe+=B.charAt(A)}re=59}switch(re){case 123:for(oe=oe.trim(),ge=oe.charCodeAt(0),J=1,P=++A;A<G;){switch(re=B.charCodeAt(A)){case 123:J++;break;case 125:J--;break;case 47:switch(re=B.charCodeAt(A+1)){case 42:case 47:e:{for(Le=A+1;Le<Ue;++Le)switch(B.charCodeAt(Le)){case 47:if(re===42&&B.charCodeAt(Le-1)===42&&A+2!==Le){A=Le+1;break e}break;case 10:if(re===47){A=Le+1;break e}}A=Le}}break;case 91:re++;case 40:re++;case 34:case 39:for(;A++<Ue&&B.charCodeAt(A)!==re;);}if(J===0)break;A++}switch(J=B.substring(P,A),ge===0&&(ge=(oe=oe.replace(d,"").trim()).charCodeAt(0)),ge){case 64:switch(0<S&&(oe=oe.replace(h,"")),re=oe.charCodeAt(1),re){case 100:case 109:case 115:case 45:S=z;break;default:S=ut}if(J=e(z,S,J,re,T+1),P=J.length,0<M&&(S=n(ut,oe,W),Pr=a(3,J,S,z,K,ke,P,re,T,ee),oe=S.join(""),Pr!==void 0&&(P=(J=Pr.trim()).length)===0&&(re=0,J="")),0<P)switch(re){case 115:oe=oe.replace(C,o);case 100:case 109:case 45:J=oe+"{"+J+"}";break;case 107:oe=oe.replace(m,"$1 $2"),J=oe+"{"+J+"}",J=Ce===1||Ce===2&&s("@"+J,3)?"@-webkit-"+J+"@"+J:"@"+J;break;default:J=oe+J,ee===112&&(J=(Je+=J,""))}else J="";break;default:J=e(z,n(z,oe,W),J,ee,T+1)}uh+=J,J=W=S=Le=ge=0,oe="",re=B.charCodeAt(++A);break;case 125:case 59:if(oe=(0<S?oe.replace(h,""):oe).trim(),1<(P=oe.length))switch(Le===0&&(ge=oe.charCodeAt(0),ge===45||96<ge&&123>ge)&&(P=(oe=oe.replace(" ",":")).length),0<M&&(Pr=a(1,oe,z,$,K,ke,Je.length,ee,T,ee))!==void 0&&(P=(oe=Pr.trim()).length)===0&&(oe="\0\0"),ge=oe.charCodeAt(0),re=oe.charCodeAt(1),ge){case 0:break;case 64:if(re===105||re===99){ch+=oe+B.charAt(A);break}default:oe.charCodeAt(P-1)!==58&&(Je+=i(oe,ge,re,oe.charCodeAt(2)))}W=S=Le=ge=0,oe="",re=B.charCodeAt(++A)}}switch(re){case 13:case 10:V===47?V=0:1+ge===0&&ee!==107&&0<oe.length&&(S=1,oe+="\0"),0<M*Z&&a(0,oe,z,$,K,ke,Je.length,ee,T,ee),ke=1,K++;break;case 59:case 125:if(V+pe+be+ce===0){ke++;break}default:switch(ke++,xn=B.charAt(A),re){case 9:case 32:if(pe+ce+V===0)switch(Xe){case 44:case 58:case 9:case 32:xn="";break;default:re!==32&&(xn=" ")}break;case 0:xn="\\0";break;case 12:xn="\\f";break;case 11:xn="\\v";break;case 38:pe+V+ce===0&&(S=W=1,xn="\f"+xn);break;case 108:if(pe+V+ce+ve===0&&0<Le)switch(A-Le){case 2:Xe===112&&B.charCodeAt(A-3)===58&&(ve=Xe);case 8:L===111&&(ve=L)}break;case 58:pe+V+ce===0&&(Le=A);break;case 44:V+be+pe+ce===0&&(S=1,xn+="\r");break;case 34:case 39:V===0&&(pe=pe===re?0:pe===0?re:pe);break;case 91:pe+V+be===0&&ce++;break;case 93:pe+V+be===0&&ce--;break;case 41:pe+V+ce===0&&be--;break;case 40:if(pe+V+ce===0){if(ge===0)switch(2*Xe+3*L){case 533:break;default:ge=1}be++}break;case 64:V+be+pe+ce+Le+J===0&&(J=1);break;case 42:case 47:if(!(0<pe+ce+be))switch(V){case 0:switch(2*re+3*B.charCodeAt(A+1)){case 235:V=47;break;case 220:P=A,V=42}break;case 42:re===47&&Xe===42&&P+2!==A&&(B.charCodeAt(P+2)===33&&(Je+=B.substring(P,A+1)),xn="",V=0)}}V===0&&(oe+=xn)}L=Xe,Xe=re,A++}if(P=Je.length,0<P){if(S=z,0<M&&(Pr=a(2,Je,S,$,K,ke,P,ee,T,ee),Pr!==void 0&&(Je=Pr).length===0))return ch+Je+uh;if(Je=S.join(",")+"{"+Je+"}",Ce*ve!==0){switch(Ce!==2||s(Je,2)||(ve=0),ve){case 111:Je=Je.replace(E,":-moz-$1")+Je;break;case 112:Je=Je.replace(v,"::-webkit-input-$1")+Je.replace(v,"::-moz-$1")+Je.replace(v,":-ms-input-$1")+Je}ve=0}}return ch+Je+uh}function n($,z,B){var ee=z.trim().split(w);z=ee;var T=ee.length,ce=$.length;switch(ce){case 0:case 1:var V=0;for($=ce===0?"":$[0]+" ";V<T;++V)z[V]=r($,z[V],B).trim();break;default:var be=V=0;for(z=[];V<T;++V)for(var pe=0;pe<ce;++pe)z[be++]=r($[pe]+" ",ee[V],B).trim()}return z}function r($,z,B){var ee=z.charCodeAt(0);switch(33>ee&&(ee=(z=z.trim()).charCodeAt(0)),ee){case 38:return z.replace(f,"$1"+$.trim());case 58:return $.trim()+z.replace(f,"$1"+$.trim());default:if(0<1*B&&0<z.indexOf("\f"))return z.replace(f,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+z}function i($,z,B,ee){var T=$+";",ce=2*z+3*B+4*ee;if(ce===944){$=T.indexOf(":",9)+1;var V=T.substring($,T.length-1).trim();return V=T.substring(0,$).trim()+V+";",Ce===1||Ce===2&&s(V,1)?"-webkit-"+V+V:V}if(Ce===0||Ce===2&&!s(T,1))return T;switch(ce){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(fe,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return V=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+V+"-webkit-"+T+"-ms-flex-pack"+V+T;case 1005:return _.test(T)?T.replace(g,":-webkit-")+T.replace(g,":-moz-")+T:T;case 1e3:switch(V=T.substring(13).trim(),z=V.indexOf("-")+1,V.charCodeAt(0)+V.charCodeAt(z)){case 226:V=T.replace(x,"tb");break;case 232:V=T.replace(x,"tb-rl");break;case 220:V=T.replace(x,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+V+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(z=(T=$).length-10,V=(T.charCodeAt(z)===33?T.substring(0,z):T).substring($.indexOf(":",7)+1).trim(),ce=V.charCodeAt(0)+(V.charCodeAt(7)|0)){case 203:if(111>V.charCodeAt(8))break;case 115:T=T.replace(V,"-webkit-"+V)+";"+T;break;case 207:case 102:T=T.replace(V,"-webkit-"+(102<ce?"inline-":"")+"box")+";"+T.replace(V,"-webkit-"+V)+";"+T.replace(V,"-ms-"+V+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return V=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+V+"-ms-flex-"+V+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(O,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(O,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(U.test($)===!0)return(V=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),z,B,ee).replace(":fill-available",":stretch"):T.replace(V,"-webkit-"+V)+T.replace(V,"-moz-"+V.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,B+ee===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+T}return T}function s($,z){var B=$.indexOf(z===1?":":"{"),ee=$.substring(0,z!==3?B:10);return B=$.substring(B+1,$.length-1),Q(z!==2?ee:ee.replace(X,"$1"),B,z)}function o($,z){var B=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return B!==z+";"?B.replace(b," or ($1)").substring(4):"("+z+")"}function a($,z,B,ee,T,ce,V,be,pe,ge){for(var re=0,Xe=z,L;re<M;++re)switch(L=Fe[re].call(c,$,Xe,B,ee,T,ce,V,be,pe,ge)){case void 0:case!1:case!0:case null:break;default:Xe=L}if(Xe!==z)return Xe}function l($){switch($){case void 0:case null:M=Fe.length=0;break;default:if(typeof $=="function")Fe[M++]=$;else if(typeof $=="object")for(var z=0,B=$.length;z<B;++z)l($[z]);else Z=!!$|0}return l}function u($){return $=$.prefix,$!==void 0&&(Q=null,$?typeof $!="function"?Ce=1:(Ce=2,Q=$):Ce=0),u}function c($,z){var B=$;if(33>B.charCodeAt(0)&&(B=B.trim()),_e=B,B=[_e],0<M){var ee=a(-1,z,B,B,K,ke,0,0,0,0);ee!==void 0&&typeof ee=="string"&&(z=ee)}var T=e(ut,B,z,0,0);return 0<M&&(ee=a(-2,T,B,B,K,ke,T.length,0,0,0),ee!==void 0&&(T=ee)),_e="",ve=0,ke=K=1,T}var d=/^\0+/g,h=/[\0\r\f]/g,g=/: */g,_=/zoo|gra/,y=/([,: ])(transform)/g,w=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,O=/-self|flex-/g,X=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,fe=/([^-])(image-set\()/,ke=1,K=1,ve=0,Ce=1,ut=[],Fe=[],M=0,Q=null,Z=0,_e="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var MP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function VP(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var $P=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cv=VP(function(t){return $P.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function ur(){return(ur=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Av=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},mp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!cg.typeOf(t)},nc=Object.freeze([]),ti=Object.freeze({});function Pa(t){return typeof t=="function"}function kv(t){return t.displayName||t.name||"Component"}function mg(t){return t&&typeof t.styledComponentId=="string"}var Zs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",gg=typeof window<"u"&&"HTMLElement"in window,jP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function tl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var FP=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&tl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),vu=new Map,rc=new Map,ia=1,Ul=function(t){if(vu.has(t))return vu.get(t);for(;rc.has(ia);)ia++;var e=ia++;return vu.set(t,e),rc.set(e,t),e},UP=function(t){return rc.get(t)},zP=function(t,e){e>=ia&&(ia=e+1),vu.set(t,e),rc.set(e,t)},BP="style["+Zs+'][data-styled-version="5.3.11"]',WP=new RegExp("^"+Zs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),qP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},HP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(WP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(zP(u,l),qP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},GP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},yx=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Zs))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Zs,"active"),r.setAttribute("data-styled-version","5.3.11");var o=GP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},KP=function(){function t(n){var r=this.element=yx(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}tl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),QP=function(){function t(n){var r=this.element=yx(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),YP=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Pv=gg,XP={isServer:!gg,useCSSOMInjection:!jP},vx=function(){function t(n,r,i){n===void 0&&(n=ti),r===void 0&&(r={}),this.options=ur({},XP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&gg&&Pv&&(Pv=!1,function(s){for(var o=document.querySelectorAll(BP),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Zs)!=="active"&&(HP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Ul(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(ur({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new YP(o):s?new KP(o):new QP(o),new FP(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Ul(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ul(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Ul(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=UP(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Zs+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),s+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},t}(),JP=/(a)(d)/gi,Rv=function(t){return String.fromCharCode(t+(t>25?39:97))};function gp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Rv(e%52)+n;return(Rv(e%52)+n).replace(JP,"$1-$2")}var Cs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},_x=function(t){return Cs(5381,t)};function ZP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Pa(n)&&!mg(n))return!1}return!0}var eR=_x("5.3.11"),tR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ZP(e),this.componentId=n,this.baseHash=Cs(eR,n),this.baseStyle=r,vx.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=eo(this.rules,e,n,r).join(""),a=gp(Cs(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Cs(this.baseHash,r.hash),d="",h=0;h<u;h++){var g=this.rules[h];if(typeof g=="string")d+=g;else if(g){var _=eo(g,e,n,r),y=Array.isArray(_)?_.join(""):_;c=Cs(c,y+h),d+=y}}if(d){var w=gp(c>>>0);if(!n.hasNameForId(i,w)){var f=r(d,"."+w,void 0,i);n.insertRules(i,w,f)}s.push(w)}}return s.join(" ")},t}(),nR=/^\s*\/\/.*$/gm,rR=[":","[",".","#"];function iR(t){var e,n,r,i,s=t===void 0?ti:t,o=s.options,a=o===void 0?ti:o,l=s.plugins,u=l===void 0?nc:l,c=new LP(a),d=[],h=function(y){function w(f){if(f)try{y(f+"}")}catch{}}return function(f,m,v,E,x,C,b,O,X,U){switch(f){case 1:if(X===0&&m.charCodeAt(0)===64)return y(m+";"),"";break;case 2:if(O===0)return m+"/*|*/";break;case 3:switch(O){case 102:case 112:return y(v[0]+m),"";default:return m+(U===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(w)}}}(function(y){d.push(y)}),g=function(y,w,f){return w===0&&rR.indexOf(f[n.length])!==-1||f.match(i)?y:"."+e};function _(y,w,f,m){m===void 0&&(m="&");var v=y.replace(nR,""),E=w&&f?f+" "+w+" { "+v+" }":v;return e=m,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(f||!w?"":w,E)}return c.use([].concat(u,[function(y,w,f){y===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,g))},h,function(y){if(y===-2){var w=d;return d=[],w}}])),_.hash=u.length?u.reduce(function(y,w){return w.name||tl(15),Cs(y,w.name)},5381).toString():"",_}var wx=Gt.createContext();wx.Consumer;var Ex=Gt.createContext(),sR=(Ex.Consumer,new vx),yp=iR();function oR(){return I.useContext(wx)||sR}function aR(){return I.useContext(Ex)||yp}var lR=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=yp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return tl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=yp),this.name+e.hash},t}(),uR=/([A-Z])/,cR=/([A-Z])/g,dR=/^ms-/,hR=function(t){return"-"+t.toLowerCase()};function bv(t){return uR.test(t)?t.replace(cR,hR).replace(dR,"-ms-"):t}var Nv=function(t){return t==null||t===!1||t===""};function eo(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=eo(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Nv(t))return"";if(mg(t))return"."+t.styledComponentId;if(Pa(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return eo(l,e,n,r)}var u;return t instanceof lR?n?(t.inject(n,r),t.getName(r)):t:mp(t)?function c(d,h){var g,_,y=[];for(var w in d)d.hasOwnProperty(w)&&!Nv(d[w])&&(Array.isArray(d[w])&&d[w].isCss||Pa(d[w])?y.push(bv(w)+":",d[w],";"):mp(d[w])?y.push.apply(y,c(d[w],w)):y.push(bv(w)+": "+(g=w,(_=d[w])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||g in MP||g.startsWith("--")?String(_).trim():_+"px")+";"));return h?[h+" {"].concat(y,["}"]):y}(t):t.toString()}var Ov=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function fR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Pa(t)||mp(t)?Ov(eo(Av(nc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Ov(eo(Av(t,n)))}var pR=function(t,e,n){return n===void 0&&(n=ti),t.theme!==n.theme&&t.theme||e||n.theme},mR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gR=/(^-|-$)/g;function jh(t){return t.replace(mR,"-").replace(gR,"")}var yR=function(t){return gp(_x(t)>>>0)};function zl(t){return typeof t=="string"&&!0}var vp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},vR=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function _R(t,e,n){var r=t[n];vp(e)&&vp(r)?xx(r,e):t[n]=e}function xx(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(vp(o))for(var a in o)vR(a)&&_R(t,o[a],a)}return t}var Ix=Gt.createContext();Ix.Consumer;var Fh={};function Tx(t,e,n){var r=mg(t),i=!zl(t),s=e.attrs,o=s===void 0?nc:s,a=e.componentId,l=a===void 0?function(m,v){var E=typeof m!="string"?"sc":jh(m);Fh[E]=(Fh[E]||0)+1;var x=E+"-"+yR("5.3.11"+E+Fh[E]);return v?v+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(m){return zl(m)?"styled."+m:"Styled("+kv(m)+")"}(t):u,d=e.displayName&&e.componentId?jh(e.displayName)+"-"+e.componentId:e.componentId||l,h=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(m,v,E){return t.shouldForwardProp(m,v,E)&&e.shouldForwardProp(m,v,E)}:t.shouldForwardProp);var _,y=new tR(n,d,r?t.componentStyle:void 0),w=y.isStatic&&o.length===0,f=function(m,v){return function(E,x,C,b){var O=E.attrs,X=E.componentStyle,U=E.defaultProps,fe=E.foldedComponentIds,ke=E.shouldForwardProp,K=E.styledComponentId,ve=E.target,Ce=function(ee,T,ce){ee===void 0&&(ee=ti);var V=ur({},T,{theme:ee}),be={};return ce.forEach(function(pe){var ge,re,Xe,L=pe;for(ge in Pa(L)&&(L=L(V)),L)V[ge]=be[ge]=ge==="className"?(re=be[ge],Xe=L[ge],re&&Xe?re+" "+Xe:re||Xe):L[ge]}),[V,be]}(pR(x,I.useContext(Ix),U)||ti,x,O),ut=Ce[0],Fe=Ce[1],M=function(ee,T,ce,V){var be=oR(),pe=aR(),ge=T?ee.generateAndInjectStyles(ti,be,pe):ee.generateAndInjectStyles(ce,be,pe);return ge}(X,b,ut),Q=C,Z=Fe.$as||x.$as||Fe.as||x.as||ve,_e=zl(Z),$=Fe!==x?ur({},x,{},Fe):x,z={};for(var B in $)B[0]!=="$"&&B!=="as"&&(B==="forwardedAs"?z.as=$[B]:(ke?ke(B,Cv,Z):!_e||Cv(B))&&(z[B]=$[B]));return x.style&&Fe.style!==x.style&&(z.style=ur({},x.style,{},Fe.style)),z.className=Array.prototype.concat(fe,K,M!==K?M:null,x.className,Fe.className).filter(Boolean).join(" "),z.ref=Q,I.createElement(Z,z)}(_,m,v,w)};return f.displayName=c,(_=Gt.forwardRef(f)).attrs=h,_.componentStyle=y,_.displayName=c,_.shouldForwardProp=g,_.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):nc,_.styledComponentId=d,_.target=r?t.target:t,_.withComponent=function(m){var v=e.componentId,E=function(C,b){if(C==null)return{};var O,X,U={},fe=Object.keys(C);for(X=0;X<fe.length;X++)O=fe[X],b.indexOf(O)>=0||(U[O]=C[O]);return U}(e,["componentId"]),x=v&&v+"-"+(zl(m)?m:jh(kv(m)));return Tx(m,ur({},E,{attrs:h,componentId:x}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?xx({},t.defaultProps,m):m}}),Object.defineProperty(_,"toString",{value:function(){return"."+_.styledComponentId}}),i&&SP(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var _p=function(t){return function e(n,r,i){if(i===void 0&&(i=ti),!cg.isValidElementType(r))return tl(1,String(r));var s=function(){return n(r,i,fR.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,ur({},i,{},o))},s.attrs=function(o){return e(n,r,ur({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Tx,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){_p[t]=_p(t)});const R=_p;var Sx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Dv=Gt.createContext&&Gt.createContext(Sx),ni=globalThis&&globalThis.__assign||function(){return ni=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ni.apply(this,arguments)},wR=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Cx(t){return t&&t.map(function(e,n){return Gt.createElement(e.tag,ni({key:n},e.attr),Cx(e.child))})}function En(t){return function(e){return Gt.createElement(ER,ni({attr:ni({},t.attr)},e),Cx(t.child))}}function ER(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=wR(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Gt.createElement("svg",ni({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ni(ni({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Gt.createElement("title",null,s),t.children)};return Dv!==void 0?Gt.createElement(Dv.Consumer,null,function(n){return e(n)}):e(Sx)}function xR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 4h12v2H6zm.707 11.707L11 11.414V20h2v-8.586l4.293 4.293 1.414-1.414L12 7.586l-6.707 6.707z"}}]})(t)}function IR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"}},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"}},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"}}]})(t)}const TR=R.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`,SR=R.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 18px;
  padding: 0px 16px;
  gap: 20px;
`,CR=R(IR)`
  width: 35px;
  height: 35px;
  color: white;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`,AR=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;
  background: green;

  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 1440px) {
    width: 120px;
    height: 120px;
  }
`,kR=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40%;
  min-height: 40%;

  font-size: 12px;
  padding: 1px;

  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  cursor: pointer;
  background: green;

  position: absolute;
  right: -3px;
  bottom: -3px;
  z-index: 1;

  background: black;
  color: white;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,PR=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;
  background: green;

  position: fixed;
  left: 5%;
  bottom: 5%;
  z-index: 1;

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 1440px) {
    width: 120px;
    height: 120px;
  }
`,RR=R(xR)`
  width: 35px;
  height: 35px;
  color: white;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`;function bR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22"}}]})(t)}function NR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22",transform:"matrix(-1 0 0 1 24 0)"}}]})(t)}function OR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"}}]})(t)}function DR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}function LR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(t)}function MR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(t)}function yg(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(t)}function VR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.3183118,0.0772036939 C18.5358869,0.132773211 19.3775594,0.311686093 20.156489,0.614412318 C20.9357539,0.917263935 21.5259307,1.30117806 22.1124276,1.88767349 C22.6988355,2.47414659 23.0827129,3.06422396 23.3856819,3.84361655 C23.688357,4.62263666 23.8672302,5.46418415 23.9227984,6.68172489 C23.9916356,8.19170553 24,8.72394829 24,11.9999742 C24,15.2760524 23.9916355,15.808302 23.9227954,17.3182896 C23.8672306,18.5358038 23.6883589,19.3773584 23.3855877,20.1566258 C23.0826716,20.9358162 22.6987642,21.5259396 22.1124276,22.1122749 C21.5259871,22.6987804 20.9357958,23.0827198 20.1563742,23.3856323 C19.3772192,23.6883583 18.5357324,23.8672318 17.3183209,23.9227442 C15.8086874,23.9916325 15.2765626,24 12,24 C8.72343739,24 8.19131258,23.9916325 6.68172382,23.9227463 C5.46426077,23.8672314 4.62270711,23.6883498 3.84342369,23.3855738 C3.0641689,23.0827004 2.47399369,22.6987612 1.88762592,22.1123283 C1.30117312,21.525877 0.91721975,20.9357071 0.614318116,20.1563835 C0.311643016,19.3773633 0.132769821,18.5358159 0.0772038909,17.3183251 C0.0083529426,15.8092887 0,15.2774634 0,11.9999742 C0,8.7225328 0.00835296697,8.19071076 0.0772047368,6.68165632 C0.132769821,5.46418415 0.311643016,4.62263666 0.614362729,3.84350174 C0.91719061,3.06430165 1.30113536,2.4741608 1.88757245,1.88772514 C2.47399369,1.30123879 3.0641689,0.917299613 3.84345255,0.614414972 C4.62236201,0.311696581 5.46409415,0.132773979 6.68163888,0.0772035898 C8.19074867,0.00835221992 8.72252573,0 12,0 C15.2774788,0 15.8092594,0.00835235053 17.3183118,0.0772036939 Z M12,2.66666667 C8.75959504,2.66666667 8.26400713,2.67445049 6.80319929,2.74109814 C5.87614637,2.78341009 5.31952221,2.90172878 4.80947575,3.09995521 C4.37397765,3.26922052 4.09725505,3.44924273 3.77324172,3.77329203 C3.44916209,4.09737087 3.26913181,4.37408574 3.09996253,4.80937168 C2.90169965,5.31965737 2.78340891,5.87618164 2.74109927,6.80321713 C2.67445122,8.26397158 2.66666667,8.75960374 2.66666667,11.9999742 C2.66666667,15.2403924 2.67445121,15.7360281 2.74109842,17.1967643 C2.78340891,18.1238184 2.90169965,18.6803426 3.09990404,19.1904778 C3.26914133,19.6259017 3.44919889,19.9026659 3.77329519,20.2267614 C4.09725505,20.5507573 4.37397765,20.7307795 4.80932525,20.8999863 C5.31971515,21.0982887 5.87621193,21.2165784 6.80323907,21.2588497 C8.26460439,21.3255353 8.76051223,21.3333333 12,21.3333333 C15.2394878,21.3333333 15.7353956,21.3255353 17.1968056,21.2588476 C18.123775,21.216579 18.6802056,21.0982995 19.1905083,20.9000309 C19.6260288,20.7307713 19.9027426,20.5507596 20.2267583,20.226708 C20.5507492,19.9027179 20.7308046,19.6259456 20.9000375,19.1906283 C21.0983009,18.6803412 21.2165908,18.1238118 21.2588986,17.196779 C21.3255376,15.7350718 21.3333333,15.2390126 21.3333333,11.9999742 C21.3333333,8.76098665 21.3255376,8.26493375 21.2589016,6.80323567 C21.2165911,5.87618164 21.0983004,5.31965737 20.9001178,4.80957831 C20.7308131,4.37403932 20.550774,4.09729207 20.2267583,3.77324038 C19.9027658,3.44924868 19.6260264,3.26922777 19.1905015,3.09996643 C18.6803988,2.90171817 18.1238378,2.78341062 17.1967608,2.74109868 C15.7359966,2.67445057 15.2404012,2.66666667 12,2.66666667 Z M12,18.2222222 C8.56356156,18.2222222 5.77777778,15.4364384 5.77777778,12 C5.77777778,8.56356156 8.56356156,5.77777778 12,5.77777778 C15.4364384,5.77777778 18.2222222,8.56356156 18.2222222,12 C18.2222222,15.4364384 15.4364384,18.2222222 12,18.2222222 Z M12,15.5555556 C13.9636791,15.5555556 15.5555556,13.9636791 15.5555556,12 C15.5555556,10.0363209 13.9636791,8.44444444 12,8.44444444 C10.0363209,8.44444444 8.44444444,10.0363209 8.44444444,12 C8.44444444,13.9636791 10.0363209,15.5555556 12,15.5555556 Z M18.2222222,7.11111111 C17.4858426,7.11111111 16.8888889,6.51415744 16.8888889,5.77777778 C16.8888889,5.04139811 17.4858426,4.44444444 18.2222222,4.44444444 C18.9586019,4.44444444 19.5555556,5.04139811 19.5555556,5.77777778 C19.5555556,6.51415744 18.9586019,7.11111111 18.2222222,7.11111111 Z"}}]})(t)}function $R(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(t)}function jR(t){return En({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fillRule:"evenodd",points:"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(t)}const FR=R.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  background-position: 50% 50%;
  background-size: cover;
  cursor: pointer;
  background-image: url("MS_SHOP_LOGO.jpg");
  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`,UR=R.div`
  position: relative;
`,zR=R(VR)`
  width: 15px;
  height: 15px;
  color: black;
  border-radius: 25%;
  position: absolute;
  bottom: 60%;

  right: calc(100% + 7px);

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1440px) {
    width: 25px;
    height: 25px;
    bottom: 55%;
  }
`,BR=R(OR)`
  width: 15px;
  height: 15px;
  color: black;
  border-radius: 25%;
  position: absolute;
  bottom: 0;
  right: calc(100% + 7px);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    bottom: 20%;
    right: calc(100% + 7px);
  }
  @media (min-width: 1440px) {
    width: 25px;
    height: 25px;
    bottom: 15%;
    girht: calc(100% + 7px);
  }
`,WR=()=>{const t=kr();return p.jsxs(UR,{children:[p.jsx(FR,{onClick:()=>{t("/")}}),p.jsx("a",{href:"https://www.instagram.com/msshopua2023/",class:"link",children:p.jsx(zR,{})}),p.jsx("a",{href:"https://www.facebook.com/profile.php?id=100091605982461",class:"link",children:p.jsx(BR,{})})]})},qR=R.nav`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,Lv=R(Vk)`
  color: black;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 20px 10px;

  transition: color 0.25s, border-color 0.25s;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &.active {
    color: green;
    border-color: green;
  }

  &:hover {
    color: green;
    border-color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    padding: 10px 10px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
    padding: 15px 15px;
  }
`,HR=[{to:"/",title:"Головна"},{to:"/category",title:"Категорії"},{to:"/search",title:"Пошук"}],GR=()=>{const t=vn(wn);return p.jsxs(qR,{children:[HR.map((e,n)=>p.jsx(Lv,{to:`${e.to}`,children:e.title},n)),t.role==="admin"&&p.jsx(Lv,{to:"/admin",children:"Адмін"},"admin")]})},Uh=R.p`
 color: black;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;

  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 20px 10px;
  
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  transition: border-color 0.25s;
  transition: color 0.25s;
  
  &:hover {
    color: green;
    border-color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    padding: 10px 10px;
  }
  @media (min-width: 1440px) {
    padding: 15px 15px;

    font-size: 38px;`,KR=R.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,QR=R.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,YR=R.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 10%;

  position: fixed;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`,XR=R.div`
  z-index: 100;
  display: flex;
  position: relative;
  border-radius: 15px;
  background: #f9f9f9;
  padding: 12px 12px;
  font-size: 9px;
  width: 50%;
  border: 2px solid #1a1a1a;
  flex-direction: column;
  @media (min-width: 768px) {
    font-size: 12px;
    min-height: 340px;
    border-radius: 30px;
    padding: 24px 24px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,JR=R.div`
  gap: 10px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,Bl=R.button`
  font-size: 7px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Wl=R.h4`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,ZR=R.div`
  display: flex;
  flex-direction: column;
`,ql=R.p`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,eb=R.div`
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`,Mv=R.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`,tb=R.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`,nb=R.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;

  @media (min-width: 768px) {
    padding: 5px 0;
    gap: 5px;
  }
  @media (min-width: 1440px) {
    gap: 10px;
    padding: 10px 20px;
  }
`,Vn=R.p`
  @media (min-width: 768px) {
    font-size: 7px;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
`,Hl=R.div`
  padding: 20px 22px;
  background: #f9f9f9;
  color: #1a1a1a;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;

  @media (min-width: 768px) {
    font-size: 24px;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
    padding: 30px;
    gap: 30px;
  }
`,us=R.h3`
  font-family: Poppins;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: 0px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`,$n=R.input`
  padding: 10px 10px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;

  font-family: Poppins;
  font-size: 10px;
  text-align: left;

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`,Gl=R.button`
  width: 100%;
  font-size: 15px;

  &.active {
    background: green;
  }
  &:hover {
    background: green;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`,rr=R.div`
  width: 80%;
  display: flex;
  font-size: 10px;
  color: red;

  align-self: center;
  @media (min-width: 768px) {
    width: 50%;
    font-size: 18px;
    line-height: 21px;
  }
  @media (min-width: 1440px) {
    width: 50%;
    font-size: 32px;
    line-height: 40px;
  }
`,rb=R.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`,ib=R.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,sb=R.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 6px;
  font-weight: bolder;
  flex-direction: column;
  padding: 10px;
  gap: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 150px;
    border-radius: 20px;
    padding: 20px;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ob=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},kx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ax(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ob(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new ab;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ab extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lb=function(t){const e=Ax(t);return kx.encodeByteArray(e,!0)},ic=function(t){return lb(t).replace(/\./g,"")},Px=function(t){try{return kx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=()=>ub().__FIREBASE_DEFAULTS__,db=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Px(t[1]);return e&&JSON.parse(e)},vg=()=>{try{return cb()||db()||hb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rx=t=>{var e,n;return(n=(e=vg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bx=t=>{const e=Rx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nx=()=>{var t;return(t=vg())===null||t===void 0?void 0:t.config},Ox=t=>{var e;return(e=vg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function mb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yb(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vb(){try{return typeof indexedDB=="object"}catch{return!1}}function _b(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wb,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Eb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new er(i,a,r)}}function Eb(t,e){return t.replace(xb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xb=/\{\$([^}]+)}/g;function Ib(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vv(s)&&Vv(o)){if(!sc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Tb(t,e){const n=new Sb(t,e);return n.subscribe.bind(n)}class Sb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=zh),i.error===void 0&&(i.error=zh),i.complete===void 0&&(i.complete=zh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class di{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pb(e))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Si){return this.instances.has(e)}getOptions(e=Si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Si){return this.component?this.component.multipleInstances?e:Si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kb(t){return t===Si?void 0:t}function Pb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ab(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const bb={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Nb=we.INFO,Ob={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},Db=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ob[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _g{constructor(e){this.name=e,this._logLevel=Nb,this._logHandler=Db,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const Lb=(t,e)=>e.some(n=>t instanceof n);let $v,jv;function Mb(){return $v||($v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vb(){return jv||(jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lx=new WeakMap,wp=new WeakMap,Mx=new WeakMap,Bh=new WeakMap,wg=new WeakMap;function $b(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ri(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lx.set(n,t)}).catch(()=>{}),wg.set(e,t),e}function jb(t){if(wp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wp.set(t,e)}let Ep={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ri(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fb(t){Ep=t(Ep)}function Ub(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wh(this),e,...n);return Mx.set(r,e.sort?e.sort():[e]),ri(r)}:Vb().includes(t)?function(...e){return t.apply(Wh(this),e),ri(Lx.get(this))}:function(...e){return ri(t.apply(Wh(this),e))}}function zb(t){return typeof t=="function"?Ub(t):(t instanceof IDBTransaction&&jb(t),Lb(t,Mb())?new Proxy(t,Ep):t)}function ri(t){if(t instanceof IDBRequest)return $b(t);if(Bh.has(t))return Bh.get(t);const e=zb(t);return e!==t&&(Bh.set(t,e),wg.set(e,t)),e}const Wh=t=>wg.get(t);function Bb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ri(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ri(o.result),l.oldVersion,l.newVersion,ri(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Wb=["get","getKey","getAll","getAllKeys","count"],qb=["put","add","delete","clear"],qh=new Map;function Fv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qh.get(e))return qh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qh.set(e,s),s}Fb(t=>({...t,get:(e,n,r)=>Fv(e,n)||t.get(e,n,r),has:(e,n)=>!!Fv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",Uv="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new _g("@firebase/app"),Kb="@firebase/app-compat",Qb="@firebase/analytics-compat",Yb="@firebase/analytics",Xb="@firebase/app-check-compat",Jb="@firebase/app-check",Zb="@firebase/auth",eN="@firebase/auth-compat",tN="@firebase/database",nN="@firebase/database-compat",rN="@firebase/functions",iN="@firebase/functions-compat",sN="@firebase/installations",oN="@firebase/installations-compat",aN="@firebase/messaging",lN="@firebase/messaging-compat",uN="@firebase/performance",cN="@firebase/performance-compat",dN="@firebase/remote-config",hN="@firebase/remote-config-compat",fN="@firebase/storage",pN="@firebase/storage-compat",mN="@firebase/firestore",gN="@firebase/firestore-compat",yN="firebase",vN="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="[DEFAULT]",_N={[xp]:"fire-core",[Kb]:"fire-core-compat",[Yb]:"fire-analytics",[Qb]:"fire-analytics-compat",[Jb]:"fire-app-check",[Xb]:"fire-app-check-compat",[Zb]:"fire-auth",[eN]:"fire-auth-compat",[tN]:"fire-rtdb",[nN]:"fire-rtdb-compat",[rN]:"fire-fn",[iN]:"fire-fn-compat",[sN]:"fire-iid",[oN]:"fire-iid-compat",[aN]:"fire-fcm",[lN]:"fire-fcm-compat",[uN]:"fire-perf",[cN]:"fire-perf-compat",[dN]:"fire-rc",[hN]:"fire-rc-compat",[fN]:"fire-gcs",[pN]:"fire-gcs-compat",[mN]:"fire-fst",[gN]:"fire-fst-compat","fire-js":"fire-js",[yN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map,Tp=new Map;function wN(t,e){try{t.container.addComponent(e)}catch(n){Bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wi(t){const e=t.name;if(Tp.has(e))return Bi.debug(`There were multiple attempts to register component ${e}.`),!1;Tp.set(e,t);for(const n of oc.values())wN(n,t);return!0}function Ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ii=new nl("app","Firebase",EN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new di("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=vN;function Vx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ip,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ii.create("bad-app-name",{appName:String(i)});if(n||(n=Nx()),!n)throw ii.create("no-options");const s=oc.get(i);if(s){if(sc(n,s.options)&&sc(r,s.config))return s;throw ii.create("duplicate-app",{appName:i})}const o=new Rb(i);for(const l of Tp.values())o.addComponent(l);const a=new xN(n,r,o);return oc.set(i,a),a}function Eg(t=Ip){const e=oc.get(t);if(!e&&t===Ip&&Nx())return Vx();if(!e)throw ii.create("no-app",{appName:t});return e}function Hn(t,e,n){var r;let i=(r=_N[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bi.warn(a.join(" "));return}Wi(new di(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="firebase-heartbeat-database",TN=1,Ra="firebase-heartbeat-store";let Hh=null;function $x(){return Hh||(Hh=Bb(IN,TN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ra)}}}).catch(t=>{throw ii.create("idb-open",{originalErrorMessage:t.message})})),Hh}async function SN(t){try{return await(await $x()).transaction(Ra).objectStore(Ra).get(jx(t))}catch(e){if(e instanceof er)Bi.warn(e.message);else{const n=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bi.warn(n.message)}}}async function zv(t,e){try{const r=(await $x()).transaction(Ra,"readwrite");await r.objectStore(Ra).put(e,jx(t)),await r.done}catch(n){if(n instanceof er)Bi.warn(n.message);else{const r=ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bi.warn(r.message)}}}function jx(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=1024,AN=30*24*60*60*1e3;class kN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=AN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bv(),{heartbeatsToSend:n,unsentEntries:r}=PN(this._heartbeatsCache.heartbeats),i=ic(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bv(){return new Date().toISOString().substring(0,10)}function PN(t,e=CN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vb()?_b().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await SN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wv(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){Wi(new di("platform-logger",e=>new Hb(e),"PRIVATE")),Wi(new di("heartbeat",e=>new kN(e),"PRIVATE")),Hn(xp,Uv,t),Hn(xp,Uv,"esm2017"),Hn("fire-js","")}bN("");function xg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function qv(t){return t!==void 0&&t.enterprise!==void 0}class NN{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Fx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ON=Fx,Ux=new nl("auth","Firebase",Fx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new _g("@firebase/auth");function DN(t,...e){ac.logLevel<=we.WARN&&ac.warn(`Auth (${ts}): ${t}`,...e)}function _u(t,...e){ac.logLevel<=we.ERROR&&ac.error(`Auth (${ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw Ig(t,...e)}function Gn(t,...e){return Ig(t,...e)}function LN(t,e,n){const r=Object.assign(Object.assign({},ON()),{[e]:n});return new nl("auth","Firebase",r).create(e,{appName:t.name})}function Ig(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ux.create(t,...e)}function te(t,e,...n){if(!t)throw Ig(e,...n)}function cr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _u(e),new Error(e)}function _r(t,e){t||cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MN(){return Hv()==="http:"||Hv()==="https:"}function Hv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MN()||mb()||"connection"in navigator)?navigator.onLine:!0}function $N(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.shortDelay=e,this.longDelay=n,_r(n>e,"Short delay should be less than long delay!"),this.isMobile=pb()||gb()}get(){return VN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){_r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new il(3e4,6e4);function ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _i(t,e,n,r,i={}){return Bx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=rl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zx.fetch()(Wx(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Bx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jN),e);try{const i=new UN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Kl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw LN(t,c,u);On(t,c)}}catch(i){if(i instanceof er)throw i;On(t,"network-request-failed",{message:String(i)})}}async function sl(t,e,n,r,i={}){const s=await _i(t,e,n,r,i);return"mfaPendingCredential"in s&&On(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Wx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tg(t.config,i):`${t.config.apiScheme}://${i}`}class UN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gn(this.auth,"network-request-failed")),FN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gn(t,e,r);return i.customData._tokenResponse=n,i}async function zN(t,e){return _i(t,"GET","/v2/recaptchaConfig",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function WN(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qN(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=Sg(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:sa(Gh(i.auth_time)),issuedAtTime:sa(Gh(i.iat)),expirationTime:sa(Gh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gh(t){return Number(t)*1e3}function Sg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _u("JWT malformed, contained fewer than 3 sections"),null;try{const i=Px(n);return i?JSON.parse(i):(_u("Failed to decode base64 JWT payload"),null)}catch(i){return _u("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function HN(t){const e=Sg(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&GN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sa(this.lastLoginAt),this.creationTime=sa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await to(t,WN(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?XN(s.providerUserInfo):[],a=YN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qx(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function QN(t){const e=tt(t);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function XN(t){return t.map(e=>{var{providerId:n}=e,r=xg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){const n=await Bx(t,{},async()=>{const r=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Wx(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ba;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ba,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Li{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qx(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await to(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qN(this,e)}reload(){return QN(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await to(this,BN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:x,providerData:C,stsTokenManager:b}=n;te(v&&b,e,"internal-error");const O=ba.fromJSON(this.name,b);te(typeof v=="string",e,"internal-error"),br(d,e.name),br(h,e.name),te(typeof E=="boolean",e,"internal-error"),te(typeof x=="boolean",e,"internal-error"),br(g,e.name),br(_,e.name),br(y,e.name),br(w,e.name),br(f,e.name),br(m,e.name);const X=new Li({uid:v,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:x,photoURL:_,phoneNumber:g,tenantId:y,stsTokenManager:O,createdAt:f,lastLoginAt:m});return C&&Array.isArray(C)&&(X.providerData=C.map(U=>Object.assign({},U))),w&&(X._redirectEventId=w),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new ba;i.updateFromServerResponse(n);const s=new Li({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new Map;function dr(t){_r(t instanceof Function,"Expected a class definition");let e=Gv.get(t);return e?(_r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hx.type="NONE";const Kv=Hx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wu(this.userKey,i.apiKey,s),this.fullPersistenceKey=wu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Li._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(dr(Kv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dr(Kv);const o=wu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Li._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ls(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ls(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xx(e))return"Blackberry";if(Jx(e))return"Webos";if(Cg(e))return"Safari";if((e.includes("chrome/")||Kx(e))&&!e.includes("edge/"))return"Chrome";if(Yx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gx(t=Mt()){return/firefox\//i.test(t)}function Cg(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kx(t=Mt()){return/crios\//i.test(t)}function Qx(t=Mt()){return/iemobile/i.test(t)}function Yx(t=Mt()){return/android/i.test(t)}function Xx(t=Mt()){return/blackberry/i.test(t)}function Jx(t=Mt()){return/webos/i.test(t)}function xd(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZN(t=Mt()){var e;return xd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eO(){return yb()&&document.documentMode===10}function Zx(t=Mt()){return xd(t)||Yx(t)||Jx(t)||Xx(t)||/windows phone/i.test(t)||Qx(t)}function tO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e=[]){let n;switch(t){case"Browser":n=Qv(Mt());break;case"Worker":n=`${Qv(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rO(t,e={}){return _i(t,"GET","/v2/passwordPolicy",ns(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=6;class sO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yv(this),this.idTokenSubscription=new Yv(this),this.beforeStateQueue=new nO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ux,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rO(this),n=new sO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rs(t){return tt(t)}class Yv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tb(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aO().appendChild(r)})}function lO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uO="https://www.google.com/recaptcha/enterprise.js?render=",cO="recaptcha-enterprise",dO="NO_RECAPTCHA";class hO{constructor(e){this.type=cO,this.auth=rs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new NN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;qv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(dO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&qv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}tI(uO+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function uc(t,e,n,r=!1){const i=new hO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(t,e){const n=Ed(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sc(s,e??{}))return i;On(i,"already-initialized")}return n.initialize({options:e})}function pO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mO(t,e,n){const r=rs(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nI(e),{host:o,port:a}=gO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yO()}function nI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gO(t){const e=nI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xv(o)}}}function Xv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cr("not implemented")}_getIdTokenResponse(e){return cr("not implemented")}_linkToIdToken(e,n){return cr("not implemented")}_getReauthenticationResolver(e){return cr("not implemented")}}async function vO(t,e){return _i(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(t,e){return sl(t,"POST","/v1/accounts:signInWithPassword",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}async function wO(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Ag{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Na(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Na(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await uc(e,r,"signInWithPassword");return Kh(e,i)}else return Kh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await uc(e,r,"signInWithPassword");return Kh(e,s)}else return Promise.reject(i)});case"emailLink":return _O(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vO(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wO(e,{idToken:n,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return sl(t,"POST","/v1/accounts:signInWithIdp",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="http://localhost";class qi extends Ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:EO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IO(t){const e=Uo(zo(t)).link,n=e?Uo(zo(e)).deep_link_id:null,r=Uo(zo(t)).deep_link_id;return(r?Uo(zo(r)).link:null)||r||n||e||t}class kg{constructor(e){var n,r,i,s,o,a;const l=Uo(zo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=xO((i=l.mode)!==null&&i!==void 0?i:null);te(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=IO(e);try{return new kg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.providerId=vo.PROVIDER_ID}static credential(e,n){return Na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kg.parseLink(n);return te(r,"argument-error"),Na._fromEmailAndCode(e,r.code,r.tenantId)}}vo.PROVIDER_ID="password";vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends rI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends ol{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qi._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.GOOGLE_SIGN_IN_METHOD="google.com";Vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends ol{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends ol{constructor(){super("twitter.com")}static credential(e,n){return qi._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(t,e){return sl(t,"POST","/v1/accounts:signUp",ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Li._fromIdTokenResponse(e,r,i),o=Jv(r);return new Hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jv(r);return new Hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cc(e,n,r,i)}}function iI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,s,e,r):s})}async function TO(t,e,n=!1){const r=await to(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await to(t,iI(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=Sg(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(t.uid===a,r,"user-mismatch"),Hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&On(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e,n=!1){const r="signIn",i=await iI(t,r,e),s=await Hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function CO(t,e){return sI(rs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t){const e=rs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AO(t,e,n){var r;const i=rs(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await uc(i,s,"signUpPassword");o=Qh(i,u)}else o=Qh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await uc(i,s,"signUpPassword");return Qh(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&oI(t),u}),l=await Hi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function kO(t,e,n){return CO(tt(t),vo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&oI(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(t,e){return _i(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=tt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await to(r,PO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function bO(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function NO(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function OO(t){return tt(t).signOut()}const dc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(){const t=Mt();return Cg(t)||xd(t)}const LO=1e3,MO=10;class lI extends aI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DO()&&tO(),this.fallbackToPolling=Zx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lI.type="LOCAL";const VO=lI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI extends aI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uI.type="SESSION";const cI=uI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Id(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await $O(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Id.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Pg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function FO(t){Kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function UO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BO(){return dI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="firebaseLocalStorageDb",WO=1,hc="firebaseLocalStorage",fI="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Td(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function qO(){const t=indexedDB.deleteDatabase(hI);return new al(t).toPromise()}function Cp(){const t=indexedDB.open(hI,WO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:fI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await qO(),e(await Cp()))})})}async function Zv(t,e,n){const r=Td(t,!0).put({[fI]:e,value:n});return new al(r).toPromise()}async function HO(t,e){const n=Td(t,!1).get(e),r=await new al(n).toPromise();return r===void 0?null:r.value}function e_(t,e){const n=Td(t,!0).delete(e);return new al(n).toPromise()}const GO=800,KO=3;class pI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Id._getInstance(BO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UO(),!this.activeServiceWorker)return;this.sender=new jO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cp();return await Zv(e,dc,"1"),await e_(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Td(i,!1).getAll();return new al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pI.type="LOCAL";const QO=pI;new il(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t,e){return e?dr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XO(t){return sI(t.auth,new Rg(t),t.bypassAuthState)}function JO(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),SO(n,new Rg(t),t.bypassAuthState)}async function ZO(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),TO(n,new Rg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XO;case"linkViaPopup":case"linkViaRedirect":return ZO;case"reauthViaPopup":case"reauthViaRedirect":return JO;default:On(this.auth,"internal-error")}}resolve(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=new il(2e3,1e4);class As extends mI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e4.get())};e()}}As.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t4="pendingRedirect",Eu=new Map;class n4 extends mI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eu.get(this.auth._key());if(!e){try{const r=await r4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eu.set(this.auth._key(),e)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r4(t,e){const n=o4(e),r=s4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function i4(t,e){Eu.set(t._key(),e)}function s4(t){return dr(t._redirectPersistence)}function o4(t){return wu(t4,t.config.apiKey,t.name)}async function a4(t,e,n=!1){const r=rs(t),i=YO(r,e),o=await new n4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=10*60*1e3;class u4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l4&&this.cachedEventUids.clear(),this.cachedEventUids.has(t_(e))}saveEventToCache(e){this.cachedEventUids.add(t_(e)),this.lastProcessedEventTime=Date.now()}}function t_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d4(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f4=/^https?/;async function p4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d4(t);for(const n of e)try{if(m4(n))return}catch{}On(t,"unauthorized-domain")}function m4(t){const e=Sp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!f4.test(n))return!1;if(h4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=new il(3e4,6e4);function n_(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function y4(t){return new Promise((e,n)=>{var r,i,s;function o(){n_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{n_(),n(Gn(t,"network-request-failed"))},timeout:g4.get()})}if(!((i=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kn().gapi)===null||s===void 0)&&s.load)o();else{const a=lO("iframefcb");return Kn()[a]=()=>{gapi.load?o():n(Gn(t,"network-request-failed"))},tI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xu=null,e})}let xu=null;function v4(t){return xu=xu||y4(t),xu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=new il(5e3,15e3),w4="__/auth/iframe",E4="emulator/auth/iframe",x4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T4(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tg(e,E4):`https://${t.config.authDomain}/${w4}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=I4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rl(r).slice(1)}`}async function S4(t){const e=await v4(t),n=Kn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:T4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gn(t,"network-request-failed"),a=Kn().setTimeout(()=>{s(o)},_4.get());function l(){Kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A4=500,k4=600,P4="_blank",R4="http://localhost";class r_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b4(t,e,n,r=A4,i=k4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},C4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Mt().toLowerCase();n&&(a=Kx(u)?P4:n),Gx(u)&&(e=e||R4,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(ZN(u)&&a!=="_self")return N4(e||"",a),new r_(null);const d=window.open(e||"",a,c);te(d,t,"popup-blocked");try{d.focus()}catch{}return new r_(d)}function N4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4="__/auth/handler",D4="emulator/auth/handler",L4=encodeURIComponent("fac");async function i_(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof rI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ib(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ol){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${L4}=${encodeURIComponent(l)}`:"";return`${M4(t)}?${rl(a).slice(1)}${u}`}function M4({config:t}){return t.emulator?Tg(t,D4):`https://${t.authDomain}/${O4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="webStorageSupport";class V4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cI,this._completeRedirectFn=a4,this._overrideRedirectResult=i4}async _openPopup(e,n,r,i){var s;_r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await i_(e,n,r,Sp(),i);return b4(e,o,Pg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await i_(e,n,r,Sp(),i);return FO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await S4(e),r=new u4(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yh,{type:Yh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yh];o!==void 0&&n(!!o),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zx()||Cg()||xd()}}const $4=V4;var s_="@firebase/auth",o_="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function U4(t){Wi(new di("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eI(t)},u=new oO(r,i,s,l);return pO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wi(new di("auth-internal",e=>{const n=rs(e.getProvider("auth").getImmediate());return(r=>new j4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(s_,o_,F4(t)),Hn(s_,o_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4=5*60,B4=Ox("authIdTokenMaxAge")||z4;let a_=null;const W4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>B4)return;const i=n==null?void 0:n.token;a_!==i&&(a_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function q4(t=Eg()){const e=Ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fO(t,{popupRedirectResolver:$4,persistence:[QO,VO,cI]}),r=Ox("authTokenSyncURL");if(r){const s=W4(r);NO(n,s,()=>s(n.currentUser)),bO(n,o=>s(o))}const i=Rx("auth");return i&&mO(n,`http://${i}`),n}U4("Browser");var H4="firebase",G4="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn(H4,G4,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="firebasestorage.googleapis.com",K4="storageBucket",Q4=2*60*1e3,Y4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends er{constructor(e,n,r=0){super(Xh(e),`Firebase Storage: ${n} (${Xh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xn||(Xn={}));function Xh(t){return"storage/"+t}function X4(){const t="An unknown error occurred, please check the error payload for server response.";return new tr(Xn.UNKNOWN,t)}function J4(){return new tr(Xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Z4(){return new tr(Xn.CANCELED,"User canceled the upload/download.")}function eD(t){return new tr(Xn.INVALID_URL,"Invalid URL '"+t+"'.")}function tD(t){return new tr(Xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function l_(t){return new tr(Xn.INVALID_ARGUMENT,t)}function vI(){return new tr(Xn.APP_DELETED,"The Firebase app was deleted.")}function nD(t){return new tr(Xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Pn.makeFromUrl(e,n)}catch{return new Pn(e,"")}if(r.path==="")return r;throw tD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),_={bucket:1,path:3},y=n===yI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",f=new RegExp(`^https?://${y}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:_,postModify:u},{regex:f,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const x=v[E],C=x.regex.exec(e);if(C){const b=C[x.indices.bucket];let O=C[x.indices.path];O||(O=""),r=new Pn(b,O),x.postModify(r);break}}if(r==null)throw eD(e);return r}}class rD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(g,l())},w)}function h(){s&&clearTimeout(s)}function g(w,...f){if(u){h();return}if(w){h(),c.call(null,w,...f);return}if(l()||o){h(),c.call(null,w,...f);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,d(v)}let _=!1;function y(w){_||(_=!0,h(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function sD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t){return t!==void 0}function u_(t,e,n,r){if(r<e)throw l_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw l_(`Invalid value for '${t}'. Expected ${n} or less.`)}function aD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fc||(fc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ql(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===fc.NO_ERROR,l=s.getStatus();if(!a||lD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===fc.ABORT;r(!1,new Ql(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ql(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());oD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=X4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?vI():Z4();o(l)}else{const l=J4();o(l)}};this.canceled_?n(!1,new Ql(!1,null,!0)):this.backoffId_=iD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ql{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function cD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function fD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pD(t,e,n,r,i,s,o=!0){const a=aD(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return hD(u,e),cD(u,n),dD(u,s),fD(u,r),new uD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this._service=e,n instanceof Pn?this._location=n:this._location=Pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pc(e,n)}get root(){const e=new Pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gD(this._location.path)}get storage(){return this._service}get parent(){const e=mD(this._location.path);if(e===null)return null;const n=new Pn(this._location.bucket,e);return new pc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nD(e)}}function c_(t,e){const n=e==null?void 0:e[K4];return n==null?null:Pn.makeFromBucketSpec(n,t)}function yD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Dx(i,t.app.options.projectId))}class vD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=yI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Q4,this._maxUploadRetryTime=Y4,this._requests=new Set,i!=null?this._bucket=Pn.makeFromBucketSpec(i,this._host):this._bucket=c_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pn.makeFromBucketSpec(this._url,e):this._bucket=c_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new rD(vI());{const o=pD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const d_="@firebase/storage",h_="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="storage";function _D(t=Eg(),e){t=tt(t);const r=Ed(t,_I).getImmediate({identifier:e}),i=bx("storage");return i&&wD(r,...i),r}function wD(t,e,n,r={}){yD(t,e,n,r)}function ED(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vD(n,r,i,e,ts)}function xD(){Wi(new di(_I,ED,"PUBLIC").setMultipleInstances(!0)),Hn(d_,h_,""),Hn(d_,h_,"esm2017")}xD();var ID=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,bg=bg||{},se=ID||self;function Sd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ll(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TD(t){return Object.prototype.hasOwnProperty.call(t,Jh)&&t[Jh]||(t[Jh]=++SD)}var Jh="closure_uid_"+(1e9*Math.random()>>>0),SD=0;function CD(t,e,n){return t.call.apply(t.bind,arguments)}function AD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function bt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?bt=CD:bt=AD,bt.apply(null,arguments)}function Yl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function wi(){this.s=this.s,this.o=this.o}var kD=0;wi.prototype.s=!1;wi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),kD!=0)&&TD(this)};wi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ng(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Sd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var PD=function(){if(!se.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{se.addEventListener("test",()=>{},e),se.removeEventListener("test",()=>{},e)}catch{}return t}();function Oa(t){return/^[\s\xa0]*$/.test(t)}function Cd(){var t=se.navigator;return t&&(t=t.userAgent)?t:""}function Un(t){return Cd().indexOf(t)!=-1}function Og(t){return Og[" "](t),t}Og[" "]=function(){};function RD(t,e){var n=xL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bD=Un("Opera"),no=Un("Trident")||Un("MSIE"),EI=Un("Edge"),Ap=EI||no,xI=Un("Gecko")&&!(Cd().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge"))&&!(Un("Trident")||Un("MSIE"))&&!Un("Edge"),ND=Cd().toLowerCase().indexOf("webkit")!=-1&&!Un("Edge");function II(){var t=se.document;return t?t.documentMode:void 0}var kp;e:{var Zh="",ef=function(){var t=Cd();if(xI)return/rv:([^\);]+)(\)|;)/.exec(t);if(EI)return/Edge\/([\d\.]+)/.exec(t);if(no)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ND)return/WebKit\/(\S+)/.exec(t);if(bD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ef&&(Zh=ef?ef[1]:""),no){var tf=II();if(tf!=null&&tf>parseFloat(Zh)){kp=String(tf);break e}}kp=Zh}var Pp;if(se.document&&no){var p_=II();Pp=p_||parseInt(kp,10)||void 0}else Pp=void 0;var OD=Pp;function Da(t,e){if(Nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xI){e:{try{Og(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:DD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Da.$.h.call(this)}}mt(Da,Nt);var DD={2:"touch",3:"pen",4:"mouse"};Da.prototype.h=function(){Da.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ul="closure_listenable_"+(1e6*Math.random()|0),LD=0;function MD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++LD,this.fa=this.ia=!1}function Ad(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Dg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function VD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function TI(t){const e={};for(const n in t)e[n]=t[n];return e}const m_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function SI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<m_.length;s++)n=m_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function kd(t){this.src=t,this.g={},this.h=0}kd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=bp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new MD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Rp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=wI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ad(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function bp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Lg="closure_lm_"+(1e6*Math.random()|0),nf={};function CI(t,e,n,r,i){if(r&&r.once)return kI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)CI(t,e[s],n,r,i);return null}return n=$g(n),t&&t[ul]?t.O(e,n,ll(r)?!!r.capture:!!r,i):AI(t,e,n,!1,r,i)}function AI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ll(i)?!!i.capture:!!i,a=Vg(t);if(a||(t[Lg]=a=new kd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=$D(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(RI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $D(){function t(n){return e.call(t.src,t.listener,n)}const e=jD;return t}function kI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)kI(t,e[s],n,r,i);return null}return n=$g(n),t&&t[ul]?t.P(e,n,ll(r)?!!r.capture:!!r,i):AI(t,e,n,!0,r,i)}function PI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)PI(t,e[s],n,r,i);else r=ll(r)?!!r.capture:!!r,n=$g(n),t&&t[ul]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=bp(s,n,r,i),-1<n&&(Ad(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=bp(e,n,r,i)),(n=-1<t?e[t]:null)&&Mg(n))}function Mg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ul])Rp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(RI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vg(e))?(Rp(n,t),n.h==0&&(n.src=null,e[Lg]=null)):Ad(t)}}}function RI(t){return t in nf?nf[t]:nf[t]="on"+t}function jD(t,e){if(t.fa)t=!0;else{e=new Da(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Mg(t),t=n.call(r,e)}return t}function Vg(t){return t=t[Lg],t instanceof kd?t:null}var rf="__closure_events_fn_"+(1e9*Math.random()>>>0);function $g(t){return typeof t=="function"?t:(t[rf]||(t[rf]=function(e){return t.handleEvent(e)}),t[rf])}function ft(){wi.call(this),this.i=new kd(this),this.S=this,this.J=null}mt(ft,wi);ft.prototype[ul]=!0;ft.prototype.removeEventListener=function(t,e,n,r){PI(this,t,e,n,r)};function wt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Nt(e,t);else if(e instanceof Nt)e.target=e.target||t;else{var i=e;e=new Nt(r,t),SI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Xl(o,r,!0,e)&&i}if(o=e.g=t,i=Xl(o,r,!0,e)&&i,i=Xl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Xl(o,r,!1,e)&&i}ft.prototype.N=function(){if(ft.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ad(n[r]);delete t.g[e],t.h--}}this.J=null};ft.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ft.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Xl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Rp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var jg=se.JSON.stringify;class FD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UD(){var t=Fg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zD{constructor(){this.h=this.g=null}add(e,n){const r=bI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bI=new FD(()=>new BD,t=>t.reset());class BD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qD(t){se.setTimeout(()=>{throw t},0)}let La,Ma=!1,Fg=new zD,NI=()=>{const t=se.Promise.resolve(void 0);La=()=>{t.then(HD)}};var HD=()=>{for(var t;t=UD();){try{t.h.call(t.g)}catch(n){qD(n)}var e=bI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ma=!1};function Pd(t,e){ft.call(this),this.h=t||1,this.g=e||se,this.j=bt(this.qb,this),this.l=Date.now()}mt(Pd,ft);F=Pd.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(Ug(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ug(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){Pd.$.N.call(this),Ug(this),delete this.g};function zg(t,e,n){if(typeof t=="function")n&&(t=bt(t,n));else if(t&&typeof t.handleEvent=="function")t=bt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:se.setTimeout(t,e||0)}function OI(t){t.g=zg(()=>{t.g=null,t.i&&(t.i=!1,OI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class GD extends wi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:OI(this)}N(){super.N(),this.g&&(se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Va(t){wi.call(this),this.h=t,this.g={}}mt(Va,wi);var g_=[];function DI(t,e,n,r){Array.isArray(n)||(n&&(g_[0]=n.toString()),n=g_);for(var i=0;i<n.length;i++){var s=CI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function LI(t){Dg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mg(e)},t),t.g={}}Va.prototype.N=function(){Va.$.N.call(this),LI(this)};Va.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rd(){this.g=!0}Rd.prototype.Ea=function(){this.g=!1};function KD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ks(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XD(t,n)+(r?" "+r:"")})}function YD(t,e){t.info(function(){return"TIMEOUT: "+e})}Rd.prototype.info=function(){};function XD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return jg(n)}catch{return e}}var is={},y_=null;function bd(){return y_=y_||new ft}is.Ta="serverreachability";function MI(t){Nt.call(this,is.Ta,t)}mt(MI,Nt);function $a(t){const e=bd();wt(e,new MI(e))}is.STAT_EVENT="statevent";function VI(t,e){Nt.call(this,is.STAT_EVENT,t),this.stat=e}mt(VI,Nt);function jt(t){const e=bd();wt(e,new VI(e,t))}is.Ua="timingevent";function $I(t,e){Nt.call(this,is.Ua,t),this.size=e}mt($I,Nt);function cl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return se.setTimeout(function(){t()},e)}var Nd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jI={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bg(){}Bg.prototype.h=null;function v_(t){return t.h||(t.h=t.i())}function FI(){}var dl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wg(){Nt.call(this,"d")}mt(Wg,Nt);function qg(){Nt.call(this,"c")}mt(qg,Nt);var Np;function Od(){}mt(Od,Bg);Od.prototype.g=function(){return new XMLHttpRequest};Od.prototype.i=function(){return{}};Np=new Od;function hl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Va(this),this.P=JD,t=Ap?125:void 0,this.V=new Pd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new UI}function UI(){this.i=null,this.g="",this.h=!1}var JD=45e3,Op={},mc={};F=hl.prototype;F.setTimeout=function(t){this.P=t};function Dp(t,e,n){t.L=1,t.v=Ld(wr(e)),t.s=n,t.S=!0,zI(t,null)}function zI(t,e){t.G=Date.now(),fl(t),t.A=wr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),YI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new UI,t.g=yT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new GD(bt(t.Pa,t,t.g),t.O)),DI(t.U,t.g,"readystatechange",t.nb),e=t.I?TI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),$a(),KD(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&zn(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const c=zn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Ap||this.g&&(this.h.h||this.g.ja()||x_(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?$a(3):$a(2)),Dd(this);var n=this.g.da();this.ca=n;t:if(BI(this)){var r=x_(this.g);t="";var i=r.length,s=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ri(this),oa(this);var o="";break t}this.h.i=new se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,QD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oa(a)){var u=a;break t}}u=null}if(n=u)ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lp(this,n);else{this.i=!1,this.o=3,jt(12),Ri(this),oa(this);break e}}this.S?(WI(this,c,o),Ap&&this.i&&c==3&&(DI(this.U,this.V,"tick",this.mb),this.V.start())):(ks(this.j,this.m,o,null),Lp(this,o)),c==4&&Ri(this),this.i&&!this.J&&(c==4?fT(this.l,this):(this.i=!1,fl(this)))}else _L(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,jt(12)):(this.o=0,jt(13)),Ri(this),oa(this)}}}catch{}finally{}};function BI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function WI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=ZD(t,n),i==mc){e==4&&(t.o=4,jt(14),r=!1),ks(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Op){t.o=4,jt(15),ks(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ks(t.j,t.m,i,null),Lp(t,i);BI(t)&&i!=mc&&i!=Op&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,jt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xg(e),e.M=!0,jt(11))):(ks(t.j,t.m,n,"[Invalid Chunked Response]"),Ri(t),oa(t))}F.mb=function(){if(this.g){var t=zn(this.g),e=this.g.ja();this.C<e.length&&(Dd(this),WI(this,t,e),this.i&&t!=4&&fl(this))}};function ZD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?mc:(n=Number(e.substring(n,r)),isNaN(n)?Op:(r+=1,r+n>e.length?mc:(e=e.slice(r,r+n),t.C=r+n,e)))}F.cancel=function(){this.J=!0,Ri(this)};function fl(t){t.Y=Date.now()+t.P,qI(t,t.P)}function qI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=cl(bt(t.lb,t),e)}function Dd(t){t.B&&(se.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(YD(this.j,this.A),this.L!=2&&($a(),jt(17)),Ri(this),this.o=2,oa(this)):qI(this,this.Y-t)};function oa(t){t.l.H==0||t.J||fT(t.l,t)}function Ri(t){Dd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ug(t.V),LI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Lp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Mp(n.i,t))){if(!t.K&&Mp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)vc(n),jd(n);else break e;Yg(n),jt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=cl(bt(n.ib,n),6e3));if(1>=ZI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else bi(n,11)}else if((t.K||n.g==t)&&vc(n),!Oa(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Hg(s,s.h),s.h=null))}if(r.F){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Ve(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=gT(r,r.J?r.pa:null,r.Y),o.K){eT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Dd(a),fl(a)),r.g=o}else dT(r);0<n.j.length&&Fd(n)}else u[0]!="stop"&&u[0]!="close"||bi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?bi(n,7):Qg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}$a(4)}catch{}}function eL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function HI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tL(t),r=eL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var GI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Mi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Mi){this.h=t.h,gc(this,t.j),this.s=t.s,this.g=t.g,yc(this,t.m),this.l=t.l;var e=t.i,n=new ja;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),__(this,n),this.o=t.o}else t&&(e=String(t).match(GI))?(this.h=!1,gc(this,e[1]||"",!0),this.s=Bo(e[2]||""),this.g=Bo(e[3]||"",!0),yc(this,e[4]),this.l=Bo(e[5]||"",!0),__(this,e[6]||"",!0),this.o=Bo(e[7]||"")):(this.h=!1,this.i=new ja(null,this.h))}Mi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wo(e,w_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wo(e,w_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wo(n,n.charAt(0)=="/"?sL:iL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wo(n,aL)),t.join("")};function wr(t){return new Mi(t)}function gc(t,e,n){t.j=n?Bo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function yc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function __(t,e,n){e instanceof ja?(t.i=e,lL(t.i,t.h)):(n||(e=Wo(e,oL)),t.i=new ja(e,t.h))}function Ve(t,e,n){t.i.set(e,n)}function Ld(t){return Ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var w_=/[#\/\?@]/g,iL=/[#\?:]/g,sL=/[#\?]/g,oL=/[#\?@]/g,aL=/#/g;function ja(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ei(t){t.g||(t.g=new Map,t.h=0,t.i&&nL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=ja.prototype;F.add=function(t,e){Ei(this),this.i=null,t=_o(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function KI(t,e){Ei(t),e=_o(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function QI(t,e){return Ei(t),e=_o(t,e),t.g.has(e)}F.forEach=function(t,e){Ei(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){Ei(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){Ei(this);let e=[];if(typeof t=="string")QI(this,t)&&(e=e.concat(this.g.get(_o(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Ei(this),this.i=null,t=_o(this,t),QI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function YI(t,e,n){KI(t,e),0<n.length&&(t.i=null,t.g.set(_o(t,e),Ng(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function _o(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lL(t,e){e&&!t.j&&(Ei(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(KI(this,r),YI(this,i,n))},t)),t.j=e}var uL=class{constructor(t,e){this.g=t,this.map=e}};function XI(t){this.l=t||cL,se.PerformanceNavigationTiming?(t=se.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(se.g&&se.g.Ka&&se.g.Ka()&&se.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cL=10;function JI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ZI(t){return t.h?1:t.g?t.g.size:0}function Mp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hg(t,e){t.g?t.g.add(e):t.h=e}function eT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}XI.prototype.cancel=function(){if(this.i=tT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function tT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ng(t.i)}var dL=class{stringify(t){return se.JSON.stringify(t,void 0)}parse(t){return se.JSON.parse(t,void 0)}};function hL(){this.g=new dL}function fL(t,e,n){const r=n||"";try{HI(t,function(i,s){let o=i;ll(i)&&(o=jg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function pL(t,e){const n=new Rd;if(se.Image){const r=new Image;r.onload=Yl(Jl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Yl(Jl,n,r,"TestLoadImage: error",!1,e),r.onabort=Yl(Jl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yl(Jl,n,r,"TestLoadImage: timeout",!1,e),se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Jl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Md(t){this.l=t.fc||null,this.j=t.ob||!1}mt(Md,Bg);Md.prototype.g=function(){return new Vd(this.l,this.j)};Md.prototype.i=function(t){return function(){return t}}({});function Vd(t,e){ft.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(Vd,ft);var Gg=0;F=Vd.prototype;F.open=function(t,e){if(this.readyState!=Gg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fa(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pl(this)),this.readyState=Gg};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fa(this)),this.g&&(this.readyState=3,Fa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof se.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function nT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pl(this):Fa(this),this.readyState==3&&nT(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,pl(this))};F.Ya=function(t){this.g&&(this.response=t,pl(this))};F.ka=function(){this.g&&pl(this)};function pl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fa(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mL=se.JSON.parse;function Ye(t){ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=rT,this.L=this.M=!1}mt(Ye,ft);var rT="",gL=/^https?$/i,yL=["POST","PUT"];F=Ye.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Np.g(),this.C=this.u?v_(this.u):v_(Np),this.g.onreadystatechange=bt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){E_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=se.FormData&&t instanceof se.FormData,!(0<=wI(yL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{oT(this),0<this.B&&((this.L=vL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bt(this.ua,this)):this.A=zg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){E_(this,s)}};function vL(t){return no&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof bg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function E_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,iT(t),$d(t)}function iT(t){t.F||(t.F=!0,wt(t,"complete"),wt(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),$d(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$d(this,!0)),Ye.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?sT(this):this.kb())};F.kb=function(){sT(this)};function sT(t){if(t.h&&typeof bg<"u"&&(!t.C[1]||zn(t)!=4||t.da()!=2)){if(t.v&&zn(t)==4)zg(t.La,0,t);else if(wt(t,"readystatechange"),zn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(GI)[1]||null;!i&&se.self&&se.self.location&&(i=se.self.location.protocol.slice(0,-1)),r=!gL.test(i?i.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var s=2<zn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",iT(t)}}finally{$d(t)}}}}function $d(t,e){if(t.g){oT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch{}}}function oT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(se.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function zn(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mL(e)}};function x_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case rT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _L(t){const e={};t=(t.g&&2<=zn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Oa(t[r]))continue;var n=WD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}VD(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function aT(t){let e="";return Dg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Kg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=aT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ve(t,e,n))}function Do(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function lT(t){this.Ga=0,this.j=[],this.l=new Rd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Do("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Do("baseRetryDelayMs",5e3,t),this.hb=Do("retryDelaySeedMs",1e4,t),this.eb=Do("forwardChannelMaxRetries",2,t),this.xa=Do("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new XI(t&&t.concurrentRequestLimit),this.Ja=new hL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=lT.prototype;F.ra=8;F.H=1;function Qg(t){if(uT(t),t.H==3){var e=t.W++,n=wr(t.I);if(Ve(n,"SID",t.K),Ve(n,"RID",e),Ve(n,"TYPE","terminate"),ml(t,n),e=new hl(t,t.l,e),e.L=2,e.v=Ld(wr(n)),n=!1,se.navigator&&se.navigator.sendBeacon)try{n=se.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&se.Image&&(new Image().src=e.v,n=!0),n||(e.g=yT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),fl(e)}mT(t)}function jd(t){t.g&&(Xg(t),t.g.cancel(),t.g=null)}function uT(t){jd(t),t.u&&(se.clearTimeout(t.u),t.u=null),vc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&se.clearTimeout(t.m),t.m=null)}function Fd(t){if(!JI(t.i)&&!t.m){t.m=!0;var e=t.Na;La||NI(),Ma||(La(),Ma=!0),Fg.add(e,t),t.C=0}}function wL(t,e){return ZI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=cl(bt(t.Na,t,e),pT(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new hl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=TI(s),SI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cT(this,i,e),n=wr(this.I),Ve(n,"RID",t),Ve(n,"CVER",22),this.F&&Ve(n,"X-HTTP-Session-Id",this.F),ml(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(aT(s)))+"&"+e:this.o&&Kg(n,this.o,s)),Hg(this.i,i),this.bb&&Ve(n,"TYPE","init"),this.P?(Ve(n,"$req",e),Ve(n,"SID","null"),i.aa=!0,Dp(i,n,null)):Dp(i,n,e),this.H=2}}else this.H==3&&(t?I_(this,t):this.j.length==0||JI(this.i)||I_(this))};function I_(t,e){var n;e?n=e.m:n=t.W++;const r=wr(t.I);Ve(r,"SID",t.K),Ve(r,"RID",n),Ve(r,"AID",t.V),ml(t,r),t.o&&t.s&&Kg(r,t.o,t.s),n=new hl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=cT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Hg(t.i,n),Dp(n,r,e)}function ml(t,e){t.na&&Dg(t.na,function(n,r){Ve(e,r,n)}),t.h&&HI({},function(n,r){Ve(e,r,n)})}function cT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?bt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{fL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function dT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;La||NI(),Ma||(La(),Ma=!0),Fg.add(e,t),t.A=0}}function Yg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=cl(bt(t.Ma,t),pT(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,hT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=cl(bt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,jt(10),jd(this),hT(this))};function Xg(t){t.B!=null&&(se.clearTimeout(t.B),t.B=null)}function hT(t){t.g=new hl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wr(t.wa);Ve(e,"RID","rpc"),Ve(e,"SID",t.K),Ve(e,"AID",t.V),Ve(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ve(e,"TO",t.qa),Ve(e,"TYPE","xmlhttp"),ml(t,e),t.o&&t.s&&Kg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ld(wr(e)),n.s=null,n.S=!0,zI(n,t)}F.ib=function(){this.v!=null&&(this.v=null,jd(this),Yg(this),jt(19))};function vc(t){t.v!=null&&(se.clearTimeout(t.v),t.v=null)}function fT(t,e){var n=null;if(t.g==e){vc(t),Xg(t),t.g=null;var r=2}else if(Mp(t.i,e))n=e.F,eT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=bd(),wt(r,new $I(r,n)),Fd(t)}else dT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&wL(t,e)||r==2&&Yg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:bi(t,5);break;case 4:bi(t,10);break;case 3:bi(t,6);break;default:bi(t,2)}}}function pT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function bi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=bt(t.pb,t);n||(n=new Mi("//www.google.com/images/cleardot.gif"),se.location&&se.location.protocol=="http"||gc(n,"https"),Ld(n)),pL(n.toString(),r)}else jt(2);t.H=0,t.h&&t.h.za(e),mT(t),uT(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),jt(2)):(this.l.info("Failed to ping google.com"),jt(1))};function mT(t){if(t.H=0,t.ma=[],t.h){const e=tT(t.i);(e.length!=0||t.j.length!=0)&&(f_(t.ma,e),f_(t.ma,t.j),t.i.i.length=0,Ng(t.j),t.j.length=0),t.h.ya()}}function gT(t,e,n){var r=n instanceof Mi?wr(n):new Mi(n);if(r.g!="")e&&(r.g=e+"."+r.g),yc(r,r.m);else{var i=se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Mi(null);r&&gc(s,r),e&&(s.g=e),i&&yc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ve(r,n,e),Ve(r,"VER",t.ra),ml(t,r),r}function yT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ye(new Md({ob:!0})):new Ye(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function vT(){}F=vT.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function _c(){if(no&&!(10<=Number(OD)))throw Error("Environmental error: no available transport.")}_c.prototype.g=function(t,e){return new sn(t,e)};function sn(t,e){ft.call(this),this.g=new lT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Oa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new wo(this)}mt(sn,ft);sn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;jt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=gT(t,null,t.Y),Fd(t)};sn.prototype.close=function(){Qg(this.g)};sn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jg(t),t=n);e.j.push(new uL(e.fb++,t)),e.H==3&&Fd(e)};sn.prototype.N=function(){this.g.h=null,delete this.j,Qg(this.g),delete this.g,sn.$.N.call(this)};function _T(t){Wg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(_T,Wg);function wT(){qg.call(this),this.status=1}mt(wT,qg);function wo(t){this.g=t}mt(wo,vT);wo.prototype.Ba=function(){wt(this.g,"a")};wo.prototype.Aa=function(t){wt(this.g,new _T(t))};wo.prototype.za=function(t){wt(this.g,new wT)};wo.prototype.ya=function(){wt(this.g,"b")};function EL(){this.blockSize=-1}function Dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}mt(Dn,EL);Dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function sf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Dn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)sf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){sf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){sf(this,r),i=0;break}}this.h=i,this.i+=e};Dn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var xL={};function Jg(t){return-128<=t&&128>t?RD(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Bn(t){if(isNaN(t)||!isFinite(t))return Vs;if(0>t)return vt(Bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Vp;return new Te(e,0)}function ET(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return vt(ET(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bn(Math.pow(e,8)),r=Vs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Bn(Math.pow(e,s)),r=r.R(s).add(Bn(o))):(r=r.R(n),r=r.add(Bn(o)))}return r}var Vp=4294967296,Vs=Jg(0),$p=Jg(1),T_=Jg(16777216);F=Te.prototype;F.ea=function(){if(hn(this))return-vt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Vp+r)*e,e*=Vp}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(hr(this))return"0";if(hn(this))return"-"+vt(this).toString(t);for(var e=Bn(Math.pow(t,6)),n=this,r="";;){var i=Ec(n,e).g;n=wc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,hr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function hr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function hn(t){return t.h==-1}F.X=function(t){return t=wc(this,t),hn(t)?-1:hr(t)?0:1};function vt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add($p)}F.abs=function(){return hn(this)?vt(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function wc(t,e){return t.add(vt(e))}F.R=function(t){if(hr(this)||hr(t))return Vs;if(hn(this))return hn(t)?vt(this).R(vt(t)):vt(vt(this).R(t));if(hn(t))return vt(this.R(vt(t)));if(0>this.X(T_)&&0>t.X(T_))return Bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Zl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Zl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Zl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Zl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function Zl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Lo(t,e){this.g=t,this.h=e}function Ec(t,e){if(hr(e))throw Error("division by zero");if(hr(t))return new Lo(Vs,Vs);if(hn(t))return e=Ec(vt(t),e),new Lo(vt(e.g),vt(e.h));if(hn(e))return e=Ec(t,vt(e)),new Lo(vt(e.g),e.h);if(30<t.g.length){if(hn(t)||hn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$p,r=e;0>=r.X(t);)n=S_(n),r=S_(r);var i=cs(n,1),s=cs(r,1);for(r=cs(r,2),n=cs(n,2);!hr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=cs(r,1),n=cs(n,1)}return e=wc(t,i.R(e)),new Lo(i,e)}for(i=Vs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Bn(n),o=s.R(e);hn(o)||0<o.X(t);)n-=r,s=Bn(n),o=s.R(e);hr(s)&&(s=$p),i=i.add(s),t=wc(t,o)}return new Lo(i,t)}F.gb=function(t){return Ec(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function S_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function cs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Te(i,t.h)}_c.prototype.createWebChannel=_c.prototype.g;sn.prototype.send=sn.prototype.u;sn.prototype.open=sn.prototype.m;sn.prototype.close=sn.prototype.close;Nd.NO_ERROR=0;Nd.TIMEOUT=8;Nd.HTTP_ERROR=6;jI.COMPLETE="complete";FI.EventType=dl;dl.OPEN="a";dl.CLOSE="b";dl.ERROR="c";dl.MESSAGE="d";ft.prototype.listen=ft.prototype.O;Ye.prototype.listenOnce=Ye.prototype.P;Ye.prototype.getLastError=Ye.prototype.Sa;Ye.prototype.getLastErrorCode=Ye.prototype.Ia;Ye.prototype.getStatus=Ye.prototype.da;Ye.prototype.getResponseJson=Ye.prototype.Wa;Ye.prototype.getResponseText=Ye.prototype.ja;Ye.prototype.send=Ye.prototype.ha;Ye.prototype.setWithCredentials=Ye.prototype.Oa;Dn.prototype.digest=Dn.prototype.l;Dn.prototype.reset=Dn.prototype.reset;Dn.prototype.update=Dn.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Bn;Te.fromString=ET;var IL=function(){return new _c},TL=function(){return bd()},of=Nd,SL=jI,CL=is,C_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},eu=FI,AL=Ye,kL=Dn,$s=Te;const A_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new _g("@firebase/firestore");function k_(){return Gi.logLevel}function H(t,...e){if(Gi.logLevel<=we.DEBUG){const n=e.map(Zg);Gi.debug(`Firestore (${Eo}): ${t}`,...n)}}function Er(t,...e){if(Gi.logLevel<=we.ERROR){const n=e.map(Zg);Gi.error(`Firestore (${Eo}): ${t}`,...n)}}function ro(t,...e){if(Gi.logLevel<=we.WARN){const n=e.map(Zg);Gi.warn(`Firestore (${Eo}): ${t}`,...n)}}function Zg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+t;throw Er(e),new Error(e)}function je(t,e){t||ne()}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class RL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bL{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(je(typeof r.accessToken=="string"),new xT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new Ct(e)}}class NL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class OL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new NL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(je(typeof n.token=="string"),this.R=n.token,new DL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ML(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function io(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new lt(0,0))}static max(){return new ae(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Ua{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const VL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Ua{construct(e,n,r){return new Pt(e,n,r)}static isValidIdentifier(e){return VL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(n)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Oe.fromString(e))}static fromName(e){return new Y(Oe.fromString(e).popFirst(5))}static empty(){return new Y(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Oe(e.slice()))}}function $L(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new hi(i,Y.empty(),e)}function jL(t){return new hi(t.readTime,t.key,-1)}class hi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hi(ae.min(),Y.empty(),-1)}static max(){return new hi(ae.max(),Y.empty(),-1)}}function FL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==UL)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ey.ae=-1;function Ud(t){return t==null}function xc(t){return t===0&&1/t==-1/0}function BL(t){return typeof t=="number"&&Number.isInteger(t)&&!xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tu(this.root,e,this.comparator,!1)}getReverseIterator(){return new tu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tu(this.root,e,this.comparator,!0)}}class tu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=s??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new R_(this.data.getIterator())}getIteratorFrom(e){return new R_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class R_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new tn([])}unionWith(e){let n=new Ot(Pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ST("Invalid base64 string: "+s):s}}(e);return new Vt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const WL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(t){if(je(!!t),typeof t=="string"){let e=0;const n=WL.exec(t);if(je(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ki(t){return typeof t=="string"?Vt.fromBase64String(t):Vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ty(t){const e=t.mapValue.fields.__previous_value__;return zd(e)?ty(e):e}function za(t){const e=fi(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ba{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zd(t)?4:HL(t)?9007199254740991:10:ne()}function Jn(t,e){if(t===e)return!0;const n=Qi(t);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return za(t).isEqual(za(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=fi(i.timestampValue),a=fi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ki(i.bytesValue).isEqual(Ki(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return rt(i.geoPointValue.latitude)===rt(s.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return rt(i.integerValue)===rt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=rt(i.doubleValue),a=rt(s.doubleValue);return o===a?xc(o)===xc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return io(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(P_(o)!==P_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jn(o[l],a[l])))return!1;return!0}(t,e);default:return ne()}}function Wa(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function so(t,e){if(t===e)return 0;const n=Qi(t),r=Qi(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=rt(s.integerValue||s.doubleValue),l=rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return b_(t.timestampValue,e.timestampValue);case 4:return b_(za(t),za(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ki(s),l=Ki(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Ee(a[u],l[u]);if(c!==0)return c}return Ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Ee(rt(s.latitude),rt(o.latitude));return a!==0?a:Ee(rt(s.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=so(a[u],l[u]);if(c)return c}return Ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===nu.mapValue&&o===nu.mapValue)return 0;if(s===nu.mapValue)return 1;if(o===nu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=Ee(l[d],c[d]);if(h!==0)return h;const g=so(a[l[d]],u[c[d]]);if(g!==0)return g}return Ee(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ne()}}function b_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=fi(t),r=fi(e),i=Ee(n.seconds,r.seconds);return i!==0?i:Ee(n.nanos,r.nanos)}function oo(t){return jp(t)}function jp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ki(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=jp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${jp(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function Ic(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fp(t){return!!t&&"integerValue"in t}function ny(t){return!!t&&"arrayValue"in t}function N_(t){return!!t&&"nullValue"in t}function O_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=aa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=aa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function HL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=aa(n)}setAll(e){let n=Pt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=aa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ss(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new qt(aa(this.value))}}function CT(t){const e=[];return ss(t.fields,(n,r)=>{const i=new Pt([n]);if(Iu(r)){const s=CT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,ae.min(),ae.min(),ae.min(),qt.empty(),0)}static newFoundDocument(e,n,r,i){return new kt(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new kt(e,2,n,ae.min(),ae.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,ae.min(),ae.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.position=e,this.inclusive=n}}function D_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=so(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function L_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n="asc"){this.field=e,this.dir=n}}function GL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{}class st extends AT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QL(e,n,r):n==="array-contains"?new JL(e,r):n==="in"?new ZL(e,r):n==="not-in"?new e5(e,r):n==="array-contains-any"?new t5(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YL(e,r):new XL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(so(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ln extends AT{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ln(e,n)}matches(e){return kT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function kT(t){return t.op==="and"}function PT(t){return KL(t)&&kT(t)}function KL(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function Up(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+oo(t.value);if(PT(t))return t.filters.map(e=>Up(e)).join(",");{const e=t.filters.map(n=>Up(n)).join(",");return`${t.op}(${e})`}}function RT(t,e){return t instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&Jn(r.value,i.value)}(t,e):t instanceof Ln?function(r,i){return i instanceof Ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&RT(o,i.filters[a]),!0):!1}(t,e):void ne()}function bT(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(bT).join(" ,")+"}"}(t):"Filter"}class QL extends st{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class YL extends st{constructor(e,n){super(e,"in",n),this.keys=NT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XL extends st{constructor(e,n){super(e,"not-in",n),this.keys=NT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class JL extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ny(n)&&Wa(n.arrayValue,this.value)}}class ZL extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wa(this.value.arrayValue,n)}}class e5 extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wa(this.value.arrayValue,n)}}class t5 extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ny(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function M_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new n5(t,e,n,r,i,s,o)}function ry(t){const e=le(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Up(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ud(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oo(r)).join(",")),e.he=n}return e.he}function iy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!RT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!L_(t.startAt,e.startAt)&&L_(t.endAt,e.endAt)}function zp(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function r5(t,e,n,r,i,s,o,a){return new os(t,e,n,r,i,s,o,a)}function Bd(t){return new os(t)}function V_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wd(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function oy(t){return t.collectionGroup!==null}function Fs(t){const e=le(t);if(e.Pe===null){e.Pe=[];const n=Wd(e),r=sy(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new js(n)),e.Pe.push(new js(Pt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new js(Pt.keyField(),s))}}}return e.Pe}function xr(t){const e=le(t);return e.Ie||(e.Ie=i5(e,Fs(t))),e.Ie}function i5(t,e){if(t.limitType==="F")return M_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new js(i.field,s)});const n=t.endAt?new ao(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ao(t.startAt.position,t.startAt.inclusive):null;return M_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bp(t,e){e.getFirstInequalityField(),Wd(t);const n=t.filters.concat([e]);return new os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tc(t,e,n){return new os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qd(t,e){return iy(xr(t),xr(e))&&t.limitType===e.limitType}function OT(t){return`${ry(xr(t))}|lt:${t.limitType}`}function Wp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>bT(i)).join(", ")}]`),Ud(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oo(i)).join(",")),`Target(${r})`}(xr(t))}; limitType=${t.limitType})`}function Hd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Fs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=D_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Fs(r),i)||r.endAt&&!function(o,a,l){const u=D_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Fs(r),i))}(t,e)}function s5(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function DT(t){return(e,n)=>{let r=!1;for(const i of Fs(t)){const s=o5(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function o5(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?so(l,u):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return TT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a5=new Ke(Y.comparator);function Ir(){return a5}const LT=new Ke(Y.comparator);function qo(...t){let e=LT;for(const n of t)e=e.insert(n.key,n);return e}function MT(t){let e=LT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ni(){return la()}function VT(){return la()}function la(){return new xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const l5=new Ke(Y.comparator),u5=new Ot(Y.comparator);function de(...t){let e=u5;for(const n of t)e=e.add(n);return e}const c5=new Ot(Ee);function d5(){return c5}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function jT(t){return{integerValue:""+t}}function h5(t,e){return BL(e)?jT(e):$T(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this._=void 0}}function f5(t,e,n){return t instanceof Sc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zd(s)&&(s=ty(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof qa?UT(t,e):t instanceof Ha?zT(t,e):function(i,s){const o=FT(i,s),a=$_(o)+$_(i.Ee);return Fp(o)&&Fp(i.Ee)?jT(a):$T(i.serializer,a)}(t,e)}function p5(t,e,n){return t instanceof qa?UT(t,e):t instanceof Ha?zT(t,e):n}function FT(t,e){return t instanceof Cc?function(r){return Fp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Sc extends Gd{}class qa extends Gd{constructor(e){super(),this.elements=e}}function UT(t,e){const n=BT(e);for(const r of t.elements)n.some(i=>Jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ha extends Gd{constructor(e){super(),this.elements=e}}function zT(t,e){let n=BT(e);for(const r of t.elements)n=n.filter(i=>!Jn(i,r));return{arrayValue:{values:n}}}class Cc extends Gd{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function $_(t){return rt(t.integerValue||t.doubleValue)}function BT(t){return ny(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function m5(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qa&&i instanceof qa||r instanceof Ha&&i instanceof Ha?io(r.elements,i.elements,Jn):r instanceof Cc&&i instanceof Cc?Jn(r.Ee,i.Ee):r instanceof Sc&&i instanceof Sc}(t.transform,e.transform)}class g5{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kd{}function WT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ay(t.key,mn.none()):new vl(t.key,t.data,mn.none());{const n=t.data,r=qt.empty();let i=new Ot(Pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new tn(i.toArray()),mn.none())}}function y5(t,e,n){t instanceof vl?function(i,s,o){const a=i.value.clone(),l=F_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(i,s,o){if(!Tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=F_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(qT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ua(t,e,n,r){return t instanceof vl?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const u=s.value.clone(),c=U_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const u=U_(s.fieldTransforms,l,o),c=o.data;return c.setAll(qT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function v5(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=FT(r.transform,i||null);s!=null&&(n===null&&(n=qt.empty()),n.set(r.field,s))}return n||null}function j_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&io(r,i,(s,o)=>m5(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vl extends Kd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends Kd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function F_(t,e,n){const r=new Map;je(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,p5(o,a,n[i]))}return r}function U_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,f5(s,o,e))}return r}class ay extends Kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _5 extends Kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&y5(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ua(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=VT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=WT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&io(this.mutations,e.mutations,(n,r)=>j_(n,r))&&io(this.baseMutations,e.baseMutations,(n,r)=>j_(n,r))}}class ly{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){je(e.mutations.length===r.length);let i=function(){return l5}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ly(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,me;function I5(t){switch(t){default:return ne();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function HT(t){if(t===void 0)return Er("GRPC error has no .code"),k.UNKNOWN;switch(t){case nt.OK:return k.OK;case nt.CANCELLED:return k.CANCELLED;case nt.UNKNOWN:return k.UNKNOWN;case nt.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case nt.INTERNAL:return k.INTERNAL;case nt.UNAVAILABLE:return k.UNAVAILABLE;case nt.UNAUTHENTICATED:return k.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case nt.NOT_FOUND:return k.NOT_FOUND;case nt.ALREADY_EXISTS:return k.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return k.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case nt.ABORTED:return k.ABORTED;case nt.OUT_OF_RANGE:return k.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return k.UNIMPLEMENTED;case nt.DATA_LOSS:return k.DATA_LOSS;default:return ne()}}(me=nt||(nt={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T5(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S5=new $s([4294967295,4294967295],0);function z_(t){const e=T5().encode(t),n=new kL;return n.update(e),new Uint8Array(n.digest())}function B_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $s([n,r],0),new $s([i,s],0)]}class uy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ho(`Invalid padding: ${n}`);if(r<0)throw new Ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=$s.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply($s.fromNumber(r)));return i.compare(S5)===1&&(i=new $s([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=z_(e),[r,i]=B_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new uy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=z_(e),[r,i]=B_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_l.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qd(ae.min(),i,new Ke(Ee),Ir(),de())}}class _l{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _l(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class GT{constructor(e,n){this.targetId=e,this.ye=n}}class KT{constructor(e,n,r=Vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class W_{constructor(){this.we=0,this.Se=H_(),this.be=Vt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=de(),n=de(),r=de();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new _l(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=H_()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class C5{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Ir(),this.Ue=q_(),this.We=new Ke(Ee)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(zp(s))if(r===0){const o=new Y(s.path);this.je(n,o,kt.newNoDocument(o,ae.min()))}else je(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ki(r).toUint8Array()}catch(l){if(l instanceof ST)return ro("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new uy(o,i,s)}catch(l){return ro(l instanceof Ho?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&zp(a.target)){const l=new Y(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,kt.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=de();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Qd(e,n,this.We,this.$e,r);return this.$e=Ir(),this.Ue=q_(),this.We=new Ke(Ee),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new W_,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Ot(Ee),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new W_),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function q_(){return new Ke(Y.comparator)}function H_(){return new Ke(Y.comparator)}const A5=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),k5=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),P5=(()=>({and:"AND",or:"OR"}))();class R5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qp(t,e){return t.useProto3Json||Ud(e)?e:{value:e}}function Ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b5(t,e){return Ac(t,e.toTimestamp())}function Qn(t){return je(!!t),ae.fromTimestamp(function(n){const r=fi(n);return new lt(r.seconds,r.nanos)}(t))}function cy(t,e){return function(r){return new Oe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function YT(t){const e=Oe.fromString(t);return je(eS(e)),e}function Hp(t,e){return cy(t.databaseId,e.path)}function af(t,e){const n=YT(e);if(n.get(1)!==t.databaseId.projectId)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(XT(n))}function Gp(t,e){return cy(t.databaseId,e)}function N5(t){const e=YT(t);return e.length===4?Oe.emptyPath():XT(e)}function Kp(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XT(t){return je(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function G_(t,e,n){return{name:Hp(t,e),fields:n.value.mapValue.fields}}function O5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(je(c===void 0||typeof c=="string"),Vt.fromBase64String(c||"")):(je(c===void 0||c instanceof Uint8Array),Vt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:HT(u.code);return new j(c,u.message||"")}(o);n=new KT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=af(t,r.document.name),s=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):ae.min(),a=new qt({mapValue:{fields:r.document.fields}}),l=kt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Su(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=af(t,r.document),s=r.readTime?Qn(r.readTime):ae.min(),o=kt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Su([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=af(t,r.document),s=r.removedTargetIds||[];n=new Su([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new x5(i,s),a=r.targetId;n=new GT(a,o)}}return n}function D5(t,e){let n;if(e instanceof vl)n={update:G_(t,e.key,e.value)};else if(e instanceof ay)n={delete:Hp(t,e.key)};else if(e instanceof xi)n={update:G_(t,e.key,e.data),updateMask:B5(e.fieldMask)};else{if(!(e instanceof _5))return ne();n={verify:Hp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cc)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b5(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function L5(t,e){return t&&t.length>0?(je(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Qn(i.updateTime):Qn(s);return o.isEqual(ae.min())&&(o=Qn(s)),new g5(o,i.transformResults||[])}(n,e))):[]}function M5(t,e){return{documents:[Gp(t,e.path)]}}function V5(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return ZT(Ln.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:hs(d.field),direction:F5(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=qp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function $5(t){let e=N5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){je(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=JT(d);return h instanceof Ln&&PT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(_){return new js(fs(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,Ud(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,g=d.values||[];return new ao(g,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,g=d.values||[];return new ao(g,h)}(n.endAt)),r5(e,i,o,s,a,"F",l,u)}function j5(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function JT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fs(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fs(n.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fs(n.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fs(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return st.create(fs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>JT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function F5(t){return A5[t]}function U5(t){return k5[t]}function z5(t){return P5[t]}function hs(t){return{fieldPath:t.canonicalString()}}function fs(t){return Pt.fromServerFormat(t.fieldPath)}function ZT(t){return t instanceof st?function(n){if(n.op==="=="){if(O_(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NAN"}};if(N_(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(O_(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NAN"}};if(N_(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(n.field),op:U5(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const r=n.getFilters().map(i=>ZT(i));return r.length===1?r[0]:{compositeFilter:{op:z5(n.op),filters:r}}}(t):ne()}function B5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=Vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W5{constructor(e){this.ht=e}}function q5(t){const e=$5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(){this._n=new G5}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(hi.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class G5{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ot(Oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ot(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new lo(0)}static Bn(){return new lo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K5{constructor(){this.changes=new xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ua(r.mutation,i,tn.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=Ni();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=qo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ni();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ir();const o=la(),a=function(){return la()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof xi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ua(c.mutation,u,c.mutation.getFieldMask(),lt.now())):o.set(u.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new Q5(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=la();let i=new Ke((o,a)=>o-a),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||tn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||de()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=VT();c.forEach(h=>{if(!s.has(h)){const g=WT(n.get(h),r.get(h));g!==null&&d.set(h,g),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return Y.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(Ni());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,de())).next(c=>({batchId:a,changes:MT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=qo();return this.indexManager.getCollectionParents(e,i).next(o=>D.forEach(o,a=>{const l=function(c,d){return new os(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,kt.newInvalidDocument(u)))});let o=qo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ua(u.mutation,l,tn.empty(),lt.now()),Hd(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X5{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Qn(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:q5(i.bundledQuery),readTime:Qn(i.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J5{constructor(){this.overlays=new Ke(Y.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ni();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=Ni(),s=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ke((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ni(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ni(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new E5(n,r));let s=this.hr.get(n);s===void 0&&(s=de(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.Pr=new Ot(ct.Ir),this.Tr=new Ot(ct.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ct(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Y(new Oe([])),r=new ct(n,e),i=new ct(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Y(new Oe([])),r=new ct(n,e),i=new ct(n,e+1);let s=de();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ct(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Y.comparator(e.key,n.key)||Ee(e.pr,n.pr)}static Er(e,n){return Ee(e.pr,n.pr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ot(ct.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new w5(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(Ee);return n.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new ct(new Y(s),0);let a=new Ot(Ee);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){je(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ct(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e){this.Cr=e,this.docs=function(){return new Ke(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=Ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():kt.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ir();const o=n.path,a=new Y(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||FL(jL(c),r)<=0||(i.has(c.key)||Hd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new t3(this)}getSize(e){return D.resolve(this.size)}}class t3 extends K5{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(e){this.persistence=e,this.Mr=new xo(n=>ry(n),iy),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Or=0,this.Nr=new dy,this.targetCount=0,this.Br=lo.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new lo(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,n){this.Lr={},this.overlays={},this.kr=new ey(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new n3(this),this.indexManager=new H5,this.remoteDocumentCache=function(i){return new e3(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new W5(n),this.$r=new X5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new J5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Z5(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new i3(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class i3 extends zL{constructor(e){super(),this.currentSequenceNumber=e}}class hy{constructor(e){this.persistence=e,this.zr=new dy,this.jr=null}static Hr(e){return new hy(e)}get Jr(){if(this.jr)return this.jr;throw ne()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=Y.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new fy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(V_(n))return D.resolve(null);let r=xr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Tc(n,null,"F"),r=xr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.Hi(n,u,o,l.readTime)?this.Wi(e,Tc(n,null,"F")):this.Ji(e,u,n,l)}))})))}Gi(e,n,r,i){return V_(n)||i.isEqual(ae.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(k_()<=we.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wp(n)),this.Ji(e,o,n,$L(i,-1)))})}ji(e,n){let r=new Ot(DT(e));return n.forEach((i,s)=>{Hd(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return k_()<=we.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Wp(n)),this.Ui.getDocumentsMatchingQuery(e,n,hi.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new Ke(Ee),this.Xi=new xo(s=>ry(s),iy),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Y5(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function a3(t,e,n,r){return new o3(t,e,n,r)}async function tS(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=de();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function l3(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let g=D.resolve();return h.forEach(_=>{g=g.next(()=>c.getEntry(l,_)).next(y=>{const w=u.docVersions.get(_);je(w!==null),y.version.compareTo(w)<0&&(d.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=de();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function nS(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function u3(t,e){const n=le(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,d)));let g=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Vt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(d,g),function(y,w,f){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(h,g,c)&&a.push(n.Qr.updateTargetData(s,g))});let l=Ir(),u=de();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(c3(s,o,e.documentUpdates).next(c=>{l=c.ss,u=c.os})),!r.isEqual(ae.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Zi=i,s))}function c3(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ir();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ss:o,os:i}})}function d3(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function h3(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Qp(t,e,n){const r=le(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yl(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function K_(t,e,n){const r=le(t);let i=ae.min(),s=de();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const d=le(l),h=d.Xi.get(c);return h!==void 0?D.resolve(d.Zi.get(h)):d.Qr.getTargetData(u,c)}(r,o,xr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:de())).next(a=>(f3(r,s5(e),a),{documents:a,_s:s})))}function f3(t,e,n){let r=t.es.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class Q_{constructor(){this.activeTargetIds=d5()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p3{constructor(){this.Ys=new Q_,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new Q_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{Xs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru=null;function lf(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection";class v3 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=lf(),l=this.po(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(u,s,o),this.wo(n,l,u,i).then(c=>(H("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ro("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Eo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=g3[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=lf();return new Promise((o,a)=>{const l=new AL;l.setWithCredentials(!0),l.listenOnce(SL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case of.NO_ERROR:const c=l.getResponseJson();H(Tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case of.TIMEOUT:H(Tt,`RPC '${e}' ${s} timed out`),a(new j(k.DEADLINE_EXCEEDED,"Request time out"));break;case of.HTTP_ERROR:const d=l.getStatus();if(H(Tt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const g=h==null?void 0:h.error;if(g&&g.status&&g.message){const _=function(w){const f=w.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(f)>=0?f:k.UNKNOWN}(g.status);a(new j(_,g.message))}else a(new j(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(k.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{H(Tt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);H(Tt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}bo(e,n,r){const i=lf(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IL(),a=TL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");H(Tt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,g=!1;const _=new y3({_o:w=>{g?H(Tt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(H(Tt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),H(Tt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},ao:()=>d.close()}),y=(w,f,m)=>{w.listen(f,v=>{try{m(v)}catch(E){setTimeout(()=>{throw E},0)}})};return y(d,eu.EventType.OPEN,()=>{g||H(Tt,`RPC '${e}' stream ${i} transport opened.`)}),y(d,eu.EventType.CLOSE,()=>{g||(g=!0,H(Tt,`RPC '${e}' stream ${i} transport closed`),_.To())}),y(d,eu.EventType.ERROR,w=>{g||(g=!0,ro(Tt,`RPC '${e}' stream ${i} transport errored:`,w),_.To(new j(k.UNAVAILABLE,"The operation could not be completed")))}),y(d,eu.EventType.MESSAGE,w=>{var f;if(!g){const m=w.data[0];je(!!m);const v=m,E=v.error||((f=v[0])===null||f===void 0?void 0:f.error);if(E){H(Tt,`RPC '${e}' stream ${i} received error:`,E);const x=E.status;let C=function(X){const U=nt[X];if(U!==void 0)return HT(U)}(x),b=E.message;C===void 0&&(C=k.INTERNAL,b="Unknown error status: "+x+" with message "+E.message),g=!0,_.To(new j(C,b)),d.close()}else H(Tt,`RPC '${e}' stream ${i} received:`,m),_.Eo(m)}}),y(a,CL.STAT_EVENT,w=>{w.stat===C_.PROXY?H(Tt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===C_.NOPROXY&&H(Tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Io()},0),_}}function uf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){return new R5(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new rS(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new j(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _3 extends iS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=O5(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Qn(o.readTime):ae.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Kp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=zp(l)?{documents:M5(s,l)}:{query:V5(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=QT(s,o.resumeToken);const u=qp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=Ac(s,o.snapshotVersion.toTimestamp());const u=qp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=j5(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Kp(this.serializer),n.removeTarget=e,this.Yo(n)}}class w3 extends iS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=L5(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.l_(r,n)}return je(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Kp(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>D5(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E3 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(k.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(k.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class x3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Er(n),this.R_=!1):H("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{as(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=le(l);u.S_.add(4),await wl(u),u.v_.set("Unknown"),u.S_.delete(4),await Xd(u)}(this))})}),this.v_=new x3(r,i)}}async function Xd(t){if(as(t))for(const e of t.b_)await e(!0)}async function wl(t){for(const e of t.b_)await e(!1)}function sS(t,e){const n=le(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),gy(n)?my(n):Io(n).Go()&&py(n,e))}function oS(t,e){const n=le(t),r=Io(n);n.w_.delete(e),r.Go()&&aS(n,e),n.w_.size===0&&(r.Go()?r.Ho():as(n)&&n.v_.set("Unknown"))}function py(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Io(t).o_(e)}function aS(t,e){t.C_.Le(e),Io(t).__(e)}function my(t){t.C_=new C5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Io(t).start(),t.v_.V_()}function gy(t){return as(t)&&!Io(t).Wo()&&t.w_.size>0}function as(t){return le(t).S_.size===0}function lS(t){t.C_=void 0}async function T3(t){t.w_.forEach((e,n)=>{py(t,e)})}async function S3(t,e){lS(t),gy(t)?(t.v_.g_(e),my(t)):t.v_.set("Unknown")}async function C3(t,e,n){if(t.v_.set("Online"),e instanceof KT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kc(t,r)}else if(e instanceof Su?t.C_.Ge(e):e instanceof GT?t.C_.Xe(e):t.C_.He(e),!n.isEqual(ae.min()))try{const r=await nS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.w_.get(u);c&&s.w_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.w_.get(l);if(!c)return;s.w_.set(l,c.withResumeToken(Vt.EMPTY_BYTE_STRING,c.snapshotVersion)),aS(s,l);const d=new Wr(c.target,l,u,c.sequenceNumber);py(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await kc(t,r)}}async function kc(t,e,n){if(!yl(e))throw e;t.S_.add(1),await wl(t),t.v_.set("Offline"),n||(n=()=>nS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Xd(t)})}function uS(t,e){return e().catch(n=>kc(t,n,e))}async function Jd(t){const e=le(t),n=pi(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;A3(e);)try{const i=await d3(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,k3(e,i)}catch(i){await kc(e,i)}cS(e)&&dS(e)}function A3(t){return as(t)&&t.y_.length<10}function k3(t,e){t.y_.push(e);const n=pi(t);n.Go()&&n.u_&&n.c_(e.mutations)}function cS(t){return as(t)&&!pi(t).Wo()&&t.y_.length>0}function dS(t){pi(t).start()}async function P3(t){pi(t).P_()}async function R3(t){const e=pi(t);for(const n of t.y_)e.c_(n.mutations)}async function b3(t,e,n){const r=t.y_.shift(),i=ly.from(r,e,n);await uS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Jd(t)}async function N3(t,e){e&&pi(t).u_&&await async function(r,i){if(function(o){return I5(o)&&o!==k.ABORTED}(i.code)){const s=r.y_.shift();pi(r).jo(),await uS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Jd(r)}}(t,e),cS(t)&&dS(t)}async function X_(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=as(n);n.S_.add(3),await wl(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Xd(n)}async function O3(t,e){const n=le(t);e?(n.S_.delete(2),await Xd(n)):e||(n.S_.add(2),await wl(n),n.v_.set("Unknown"))}function Io(t){return t.F_||(t.F_=function(n,r,i){const s=le(n);return s.T_(),new _3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:T3.bind(null,t),lo:S3.bind(null,t),s_:C3.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),gy(t)?my(t):t.v_.set("Unknown")):(await t.F_.stop(),lS(t))})),t.F_}function pi(t){return t.M_||(t.M_=function(n,r,i){const s=le(n);return s.T_(),new w3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:P3.bind(null,t),lo:N3.bind(null,t),h_:R3.bind(null,t),l_:b3.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await Jd(t)):(await t.M_.stop(),t.y_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new yy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vy(t,e){if(Er("AsyncQueue",`${e}: ${t}`),yl(t))return new j(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=qo(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.x_=new Ke(Y.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):ne():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class uo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new uo(e,n,Us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(){this.N_=void 0,this.listeners=[]}}class L3{constructor(){this.queries=new xo(e=>OT(e),qd),this.onlineState="Unknown",this.B_=new Set}}async function _y(t,e){const n=le(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new D3),i)try{s.N_=await n.onListen(r)}catch(o){const a=vy(o,`Initialization of query '${Wp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&Ey(n)}async function wy(t,e){const n=le(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function M3(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&Ey(n)}function V3(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ey(t){t.B_.forEach(e=>{e.next()})}class xy{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.key=e}}class fS{constructor(e){this.key=e}}class $3{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=de(),this.mutatedKeys=de(),this.ia=DT(e),this.sa=new Us(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new J_,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),g=Hd(this.query,d)?d:null,_=!!h&&this.mutatedKeys.has(h.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;h&&g?h.data.isEqual(g.data)?_!==y&&(r.track({type:3,doc:g}),w=!0):this.ua(h,g)||(r.track({type:2,doc:g}),w=!0,(l&&this.ia(g,l)>0||u&&this.ia(g,u)<0)&&(a=!0)):!h&&g?(r.track({type:0,doc:g}),w=!0):h&&!g&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(g?(o=o.add(g),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((u,c)=>function(h,g){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return _(h)-_(g)}(u.type,c.type)||this.ia(u.doc,c.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,l=a!==this.na;return this.na=a,s.length!==0||l?{snapshot:new uo(this.query,e.sa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new J_,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=de(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new fS(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new hS(r))}),n}Ia(e){this.ta=e._s,this.ra=de();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return uo.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class j3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class F3{constructor(e){this.key=e,this.Ea=!1}}class U3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new xo(a=>OT(a),qd),this.Ra=new Map,this.Va=new Set,this.ma=new Ke(Y.comparator),this.fa=new Map,this.ga=new dy,this.pa={},this.ya=new Map,this.wa=lo.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function z3(t,e){const n=J3(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await h3(n.localStore,xr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await B3(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&sS(n.remoteStore,o)}return i}async function B3(t,e,n,r,i){t.ba=(d,h,g)=>async function(y,w,f,m){let v=w.view._a(f);v.Hi&&(v=await K_(y.localStore,w.query,!1).then(({documents:C})=>w.view._a(C,v)));const E=m&&m.targetChanges.get(w.targetId),x=w.view.applyChanges(v,y.isPrimaryClient,E);return e1(y,w.targetId,x.ha),x.snapshot}(t,d,h,g);const s=await K_(t.localStore,e,!0),o=new $3(e,s._s),a=o._a(s.documents),l=_l.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);e1(t,n,u.ha);const c=new j3(e,n,o);return t.Aa.set(e,c),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),u.snapshot}async function W3(t,e){const n=le(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!qd(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Qp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),oS(n.remoteStore,r.targetId),Yp(n,r.targetId)}).catch(gl)):(Yp(n,r.targetId),await Qp(n.localStore,r.targetId,!0))}async function q3(t,e,n){const r=Z3(t);try{const i=await function(o,a){const l=le(o),u=lt.now(),c=a.reduce((g,_)=>g.add(_.key),de());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=Ir(),y=de();return l.ts.getEntries(g,c).next(w=>{_=w,_.forEach((f,m)=>{m.isValidDocument()||(y=y.add(f))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(w=>{d=w;const f=[];for(const m of a){const v=v5(m,d.get(m.key).overlayedDocument);v!=null&&f.push(new xi(m.key,v,CT(v.value.mapValue),mn.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,f,a)}).next(w=>{h=w;const f=w.applyToLocalDocumentSet(d,y);return l.documentOverlayCache.saveOverlays(g,w.batchId,f)})}).then(()=>({batchId:h.batchId,changes:MT(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.pa[o.currentUser.toKey()];u||(u=new Ke(Ee)),u=u.insert(a,l),o.pa[o.currentUser.toKey()]=u}(r,i.batchId,n),await El(r,i.changes),await Jd(r.remoteStore)}catch(i){const s=vy(i,"Failed to persist write");n.reject(s)}}async function pS(t,e){const n=le(t);try{const r=await u3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(je(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?je(o.Ea):i.removedDocuments.size>0&&(je(o.Ea),o.Ea=!1))}),await El(n,r,e)}catch(r){await gl(r)}}function Z_(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=le(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.listeners)h.L_(a)&&(u=!0)}),u&&Ey(l)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function H3(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new Ke(Y.comparator);o=o.insert(s,kt.newNoDocument(s,ae.min()));const a=de().add(s),l=new Qd(ae.min(),new Map,new Ke(Ee),o,a);await pS(r,l),r.ma=r.ma.remove(s),r.fa.delete(e),Iy(r)}else await Qp(r.localStore,e,!1).then(()=>Yp(r,e,n)).catch(gl)}async function G3(t,e){const n=le(t),r=e.batch.batchId;try{const i=await l3(n.localStore,e);gS(n,r,null),mS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await El(n,i)}catch(i){await gl(i)}}async function K3(t,e,n){const r=le(t);try{const i=await function(o,a){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(je(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);gS(r,e,n),mS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await El(r,i)}catch(i){await gl(i)}}function mS(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function gS(t,e,n){const r=le(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function Yp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||yS(t,r)})}function yS(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(oS(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),Iy(t))}function e1(t,e,n){for(const r of n)r instanceof hS?(t.ga.addReference(r.key,e),Q3(t,r)):r instanceof fS?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||yS(t,r.key)):ne()}function Q3(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Va.add(r),Iy(t))}function Iy(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new Y(Oe.fromString(e)),r=t.wa.next();t.fa.set(r,new F3(n)),t.ma=t.ma.insert(n,r),sS(t.remoteStore,new Wr(xr(Bd(n.path)),r,"TargetPurposeLimboResolution",ey.ae))}}async function El(t,e,n){const r=le(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,l)=>{o.push(r.ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=fy.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.da.s_(i),await async function(l,u){const c=le(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(u,h=>D.forEach(h.qi,g=>c.persistence.referenceDelegate.addReference(d,h.targetId,g)).next(()=>D.forEach(h.Qi,g=>c.persistence.referenceDelegate.removeReference(d,h.targetId,g)))))}catch(d){if(!yl(d))throw d;H("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const g=c.Zi.get(h),_=g.snapshotVersion,y=g.withLastLimboFreeSnapshotVersion(_);c.Zi=c.Zi.insert(h,y)}}}(r.localStore,s))}async function Y3(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await tS(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(l=>{l.reject(new j(k.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await El(n,r.rs)}}function X3(t,e){const n=le(t),r=n.fa.get(e);if(r&&r.Ea)return de().add(r.key);{let i=de();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function J3(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=H3.bind(null,e),e.da.s_=M3.bind(null,e.eventManager),e.da.Da=V3.bind(null,e.eventManager),e}function Z3(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=K3.bind(null,e),e}class t1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Yd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return a3(this.persistence,new s3,e.initialUser,this.serializer)}createPersistence(e){return new r3(hy.Hr,this.serializer)}createSharedClientState(e){return new p3}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Z_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y3.bind(null,this.syncEngine),await O3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new L3}()}createDatastore(e){const n=Yd(e.databaseInfo.databaseId),r=function(s){return new v3(s)}(e.databaseInfo);return function(s,o,a,l){return new E3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new I3(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Z_(this.syncEngine,n,0),function(){return Y_.v()?new Y_:new m3}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new U3(i,s,o,a,l,u);return c&&(d.Sa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=le(n);H("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await wl(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=IT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cf(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function n1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rM(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>X_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>X_(e.remoteStore,s)),t._onlineComponents=e}function nM(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function rM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await cf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!nM(n))throw n;ro("Error using user provided cache. Falling back to memory cache: "+n),await cf(t,new t1)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await cf(t,new t1);return t._offlineComponents}async function vS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await n1(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await n1(t,new eM))),t._onlineComponents}function iM(t){return vS(t).then(e=>e.syncEngine)}async function Pc(t){const e=await vS(t),n=e.eventManager;return n.onListen=z3.bind(null,e.syncEngine),n.onUnlisten=W3.bind(null,e.syncEngine),n}function sM(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Ty({next:h=>{o.enqueueAndForget(()=>wy(s,d));const g=h.docs.has(a);!g&&h.fromCache?u.reject(new j(k.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&h.fromCache&&l&&l.source==="server"?u.reject(new j(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new xy(Bd(a.path),c,{includeMetadataChanges:!0,z_:!0});return _y(s,d)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}function oM(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Ty({next:h=>{o.enqueueAndForget(()=>wy(s,d)),h.fromCache&&l.source==="server"?u.reject(new j(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new xy(a,c,{includeMetadataChanges:!0,z_:!0});return _y(s,d)}(await Pc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t,e,n){if(!n)throw new j(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aM(t,e,n,r){if(e===!0&&r===!0)throw new j(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function i1(t){if(!Y.isDocumentKey(t))throw new j(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function s1(t){if(Y.isDocumentKey(t))throw new j(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zd(t);throw new j(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lM(t,e){if(e<=0)throw new j(k.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_S((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class eh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PL;switch(r.type){case"firstParty":return new OL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=r1.get(n);r&&(H("ComponentProvider","Removing Datastore"),r1.delete(n),r.terminate())}(this),Promise.resolve()}}function uM(t,e,n,r={}){var i;const s=(t=Xt(t,eh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ro("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ct.MOCK_USER;else{a=Dx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new j(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ct(u)}t._authCredentials=new RL(new xT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class si extends nr{constructor(e,n,r){super(e,n,Bd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new Y(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function xe(t,e,...n){if(t=tt(t),wS("collection","path",e),t instanceof eh){const r=Oe.fromString(e,...n);return s1(r),new si(t,null,r)}{if(!(t instanceof Dt||t instanceof si))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return s1(r),new si(t.firestore,null,r)}}function Rt(t,e,...n){if(t=tt(t),arguments.length===1&&(e=IT.V()),wS("doc","path",e),t instanceof eh){const r=Oe.fromString(e,...n);return i1(r),new Dt(t,null,new Y(r))}{if(!(t instanceof Dt||t instanceof si))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return i1(r),new Dt(t.firestore,t instanceof si?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new rS(this,"async_queue_retry"),this.tu=()=>{const n=uf();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=uf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=uf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new pr;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!yl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Er("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=yy.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&ne()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function a1(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Tr extends eh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new cM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ES(this),this._firestoreClient.terminate()}}function dM(t,e){const n=typeof t=="object"?t:Eg(),r=typeof t=="string"?t:e||"(default)",i=Ed(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bx("firestore");s&&uM(i,...s)}return i}function th(t){return t._firestoreClient||ES(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ES(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new qL(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,_S(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new tM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new co(Vt.fromBase64String(e))}catch(n){throw new j(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new co(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=/^__.*__$/;class fM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new vl(e,this.data,n,this.fieldTransforms)}}class xS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Ay{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new Ay(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return Rc(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(IS(this.lu)&&hM.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class pM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yd(e)}mu(e,n,r,i=!1){return new Ay({lu:e,methodName:n,Vu:r,path:Pt.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xl(t){const e=t._freezeSettings(),n=Yd(t._databaseId);return new pM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TS(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);ky("Data must be an object, but it was:",o,r);const a=CS(r,o);let l,u;if(s.merge)l=new tn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Xp(e,d,n);if(!o.contains(h))throw new j(k.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);kS(c,h)||c.push(h)}l=new tn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new fM(new qt(a),l,u)}class rh extends Sy{_toFieldTransform(e){if(e.lu!==2)throw e.lu===1?e.Au(`${this._methodName}() can only appear at the top level of your update data`):e.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rh}}function mM(t,e,n,r){const i=t.mu(1,e,n);ky("Data must be an object, but it was:",i,r);const s=[],o=qt.empty();ss(r,(l,u)=>{const c=Py(e,l,n);u=tt(u);const d=i.Eu(c);if(u instanceof rh)s.push(c);else{const h=Il(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new tn(s);return new xS(o,a,i.fieldTransforms)}function gM(t,e,n,r,i,s){const o=t.mu(1,e,n),a=[Xp(e,r,n)],l=[i];if(s.length%2!=0)throw new j(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Xp(e,s[h])),l.push(s[h+1]);const u=[],c=qt.empty();for(let h=a.length-1;h>=0;--h)if(!kS(u,a[h])){const g=a[h];let _=l[h];_=tt(_);const y=o.Eu(g);if(_ instanceof rh)u.push(g);else{const w=Il(_,y);w!=null&&(u.push(g),c.set(g,w))}}const d=new tn(u);return new xS(c,d,o.fieldTransforms)}function SS(t,e,n,r=!1){return Il(n,t.mu(r?4:3,e))}function Il(t,e){if(AS(t=tt(t)))return ky("Unsupported field value:",e,t),CS(t,e);if(t instanceof Sy)return function(r,i){if(!IS(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Il(a,i.du(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return h5(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=lt.fromDate(r);return{timestampValue:Ac(i.serializer,s)}}if(r instanceof lt){const s=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ac(i.serializer,s)}}if(r instanceof Cy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof co)return{bytesValue:QT(i.serializer,r._byteString)};if(r instanceof Dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${Zd(r)}`)}(t,e)}function CS(t,e){const n={};return TT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(r,i)=>{const s=Il(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function AS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof Cy||t instanceof co||t instanceof Dt||t instanceof Sy)}function ky(t,e,n){if(!AS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Zd(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function Xp(t,e,n){if((e=tt(e))instanceof nh)return e._internalPath;if(typeof e=="string")return Py(t,e);throw Rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const yM=new RegExp("[~\\*/\\[\\]]");function Py(t,e,n){if(e.search(yM)>=0)throw Rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nh(...e.split("."))._internalPath}catch{throw Rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(k.INVALID_ARGUMENT,a+t+l)}function kS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ih("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vM extends Ry{data(){return super.data()}}function ih(t,e){return typeof e=="string"?Py(t,e):e instanceof nh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class by{}class sh extends by{}function Pe(t,e,...n){let r=[];e instanceof by&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ny).length,a=s.filter(l=>l instanceof oh).length;if(o>1||o>0&&a>0)throw new j(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class oh extends sh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new oh(e,n,r)}_apply(e){const n=this._parse(e);return RS(e._query,n),new nr(e.firestore,e.converter,Bp(e._query,n))}_parse(e){const n=xl(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new j(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){u1(d,c);const g=[];for(const _ of d)g.push(l1(l,s,_));h={arrayValue:{values:g}}}else h=l1(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||u1(d,c),h=SS(a,o,d,c==="in"||c==="not-in");return st.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ue(t,e,n){const r=e,i=ih("where",t);return oh._create(i,r,n)}class Ny extends by{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ny(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)RS(o,l),o=Bp(o,l)}(e._query,n),new nr(e.firestore,e.converter,Bp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Oy extends sh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Oy(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new j(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new js(s,o);return function(u,c){if(sy(u)===null){const d=Wd(u);d!==null&&bS(u,d,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new nr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new os(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function ze(t,e="asc"){const n=e,r=ih("orderBy",t);return Oy._create(r,n)}class Dy extends sh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Dy(e,n,r)}_apply(e){return new nr(e.firestore,e.converter,Tc(e._query,this._limit,this._limitType))}}function Ne(t){return lM("limit",t),Dy._create("limit",t,"F")}class Ly extends sh{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ly(e,n,r)}_apply(e){const n=_M(e,this.type,this._docOrFields,this._inclusive);return new nr(e.firestore,e.converter,function(i,s){return new os(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Jt(...t){return Ly._create("startAfter",t,!1)}function _M(t,e,n,r){if(n[0]=tt(n[0]),n[0]instanceof Ry)return function(s,o,a,l,u){if(!l)throw new j(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of Fs(s))if(d.field.isKeyField())c.push(Ic(o,l.key));else{const h=l.data.field(d.field);if(zd(h))throw new j(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const g=d.field.canonicalString();throw new j(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}c.push(h)}return new ao(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=xl(t.firestore);return function(o,a,l,u,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new j(k.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let _=0;_<c.length;_++){const y=c[_];if(h[_].field.isKeyField()){if(typeof y!="string")throw new j(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!oy(o)&&y.indexOf("/")!==-1)throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const w=o.path.child(Oe.fromString(y));if(!Y.isDocumentKey(w))throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const f=new Y(w);g.push(Ic(a,f))}else{const w=SS(l,u,y);g.push(w)}}return new ao(g,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function l1(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new j(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oy(e)&&n.indexOf("/")!==-1)throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!Y.isDocumentKey(r))throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ic(t,new Y(r))}if(n instanceof Dt)return Ic(t,n._key);throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zd(n)}.`)}function u1(t,e){if(!Array.isArray(t)||t.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RS(t,e){if(e.isInequality()){const r=Wd(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new j(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=sy(t);s!==null&&bS(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function bS(t,e,n){if(!n.isEqual(e))throw new j(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class wM{convertValue(e,n="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ss(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Cy(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ty(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const n=fi(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);je(eS(r));const i=new Ba(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||Er(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OS extends Ry{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ih("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Cu extends OS{data(e={}){return super.data(e)}}class DS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Go(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cu(this._firestore,this._userDataWriter,r.key,r,new Go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Go(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Go(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:EM(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){t=Xt(t,Dt);const e=Xt(t.firestore,Tr);return sM(th(e),t._key).then(n=>VS(e,t,n))}class Vy extends wM{constructor(e){super(),this.firestore=e}convertBytes(e){return new co(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function Re(t){t=Xt(t,nr);const e=Xt(t.firestore,Tr),n=th(e),r=new Vy(e);return PS(t._query),oM(n,t._query).then(i=>new DS(e,r,t,i))}function $y(t,e,n){t=Xt(t,Dt);const r=Xt(t.firestore,Tr),i=NS(t.converter,e,n);return ah(r,[TS(xl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mn.none())])}function Vi(t,e,n,...r){t=Xt(t,Dt);const i=Xt(t.firestore,Tr),s=xl(i);let o;return o=typeof(e=tt(e))=="string"||e instanceof nh?gM(s,"updateDoc",t._key,e,n,r):mM(s,"updateDoc",t._key,e),ah(i,[o.toMutation(t._key,mn.exists(!0))])}function LS(t){return ah(Xt(t.firestore,Tr),[new ay(t._key,mn.none())])}function xM(t,e){const n=Xt(t.firestore,Tr),r=Rt(t),i=NS(t.converter,e);return ah(n,[TS(xl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function MS(t,...e){var n,r,i;t=tt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||a1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(a1(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Dt)u=Xt(t.firestore,Tr),c=Bd(t._key.path),l={next:d=>{e[o]&&e[o](VS(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Xt(t,nr);u=Xt(d.firestore,Tr),c=d._query;const h=new Vy(u);l={next:g=>{e[o]&&e[o](new DS(u,h,d,g))},error:e[o+1],complete:e[o+2]},PS(t._query)}return function(h,g,_,y){const w=new Ty(y),f=new xy(g,w,_);return h.asyncQueue.enqueueAndForget(async()=>_y(await Pc(h),f)),()=>{w.Ma(),h.asyncQueue.enqueueAndForget(async()=>wy(await Pc(h),f))}}(th(u),c,a,l)}function ah(t,e){return function(r,i){const s=new pr;return r.asyncQueue.enqueueAndForget(async()=>q3(await iM(r),i,s)),s.promise}(th(t),e)}function VS(t,e,n){const r=n.docs.get(e._key),i=new Vy(t);return new OS(t,i,e._key,r,new Go(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Eo=i})(ts),Wi(new di("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Tr(new bL(r.getProvider("auth-internal")),new LL(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new j(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Hn(A_,"4.1.2",e),Hn(A_,"4.1.2","esm2017")})();const IM={apiKey:"AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",authDomain:"oleg-shop-da014.firebaseapp.com",projectId:"oleg-shop-da014",storageBucket:"oleg-shop-da014.appspot.com",messagingSenderId:"289803579666",appId:"1:289803579666:web:6f92cb960eed0ea061c3cb",measurementId:"G-TXR6LBVXR3"},jy=Vx(IM);_D(jy);const zs=q4(jy),ie=dM(jy);function kn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function mi(t){return!!t&&!!t[Be]}function Sr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===NM}(t)||Array.isArray(t)||!!t[g1]||!!(!((e=t.constructor)===null||e===void 0)&&e[g1])||Fy(t)||Uy(t))}function Yi(t,e,n){n===void 0&&(n=!1),To(t)===0?(n?Object.keys:Ws)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function To(t){var e=t[Be];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Fy(t)?2:Uy(t)?3:0}function Bs(t,e){return To(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function TM(t,e){return To(t)===2?t.get(e):t[e]}function $S(t,e,n){var r=To(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function jS(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Fy(t){return RM&&t instanceof Map}function Uy(t){return bM&&t instanceof Set}function Ci(t){return t.o||t.t}function zy(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=US(t);delete e[Be];for(var n=Ws(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function By(t,e){return e===void 0&&(e=!1),Wy(t)||mi(t)||!Sr(t)||(To(t)>1&&(t.set=t.add=t.clear=t.delete=SM),Object.freeze(t),e&&Yi(t,function(n,r){return By(r,!0)},!0)),t}function SM(){kn(2)}function Wy(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Yn(t){var e=tm[t];return e||kn(18,t),e}function CM(t,e){tm[t]||(tm[t]=e)}function Jp(){return Ga}function df(t,e){e&&(Yn("Patches"),t.u=[],t.s=[],t.v=e)}function bc(t){Zp(t),t.p.forEach(AM),t.p=null}function Zp(t){t===Ga&&(Ga=t.l)}function c1(t){return Ga={p:[],l:Ga,h:t,m:!0,_:0}}function AM(t){var e=t[Be];e.i===0||e.i===1?e.j():e.g=!0}function hf(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Yn("ES5").S(e,t,r),r?(n[Be].P&&(bc(e),kn(4)),Sr(t)&&(t=Nc(e,t),e.l||Oc(e,t)),e.u&&Yn("Patches").M(n[Be].t,t,e.u,e.s)):t=Nc(e,n,[]),bc(e),e.u&&e.v(e.u,e.s),t!==FS?t:void 0}function Nc(t,e,n){if(Wy(e))return e;var r=e[Be];if(!r)return Yi(e,function(a,l){return d1(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Oc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=zy(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Yi(s,function(a,l){return d1(t,r,i,a,l,n,o)}),Oc(t,i,!1),n&&t.u&&Yn("Patches").N(r,n,t.u,t.s)}return r.o}function d1(t,e,n,r,i,s,o){if(mi(i)){var a=Nc(t,i,s&&e&&e.i!==3&&!Bs(e.R,r)?s.concat(r):void 0);if($S(n,r,a),!mi(a))return;t.m=!1}else o&&n.add(i);if(Sr(i)&&!Wy(i)){if(!t.h.D&&t._<1)return;Nc(t,i),e&&e.A.l||Oc(t,i)}}function Oc(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&By(e,n)}function ff(t,e){var n=t[Be];return(n?Ci(n):t)[e]}function h1(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Fr(t){t.P||(t.P=!0,t.l&&Fr(t.l))}function pf(t){t.o||(t.o=zy(t.t))}function em(t,e,n){var r=Fy(e)?Yn("MapSet").F(e,n):Uy(e)?Yn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Jp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=Ka;o&&(l=[a],u=Ko);var c=Proxy.revocable(l,u),d=c.revoke,h=c.proxy;return a.k=h,a.j=d,h}(e,n):Yn("ES5").J(e,n);return(n?n.A:Jp()).p.push(r),r}function kM(t){return mi(t)||kn(22,t),function e(n){if(!Sr(n))return n;var r,i=n[Be],s=To(n);if(i){if(!i.P&&(i.i<4||!Yn("ES5").K(i)))return i.t;i.I=!0,r=f1(n,s),i.I=!1}else r=f1(n,s);return Yi(r,function(o,a){i&&TM(i.t,o)===a||$S(r,o,e(a))}),s===3?new Set(r):r}(t)}function f1(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return zy(t)}function PM(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Be];return Ka.get(l,s)},set:function(l){var u=this[Be];Ka.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Be];if(!a.P)switch(a.i){case 5:r(a)&&Fr(a);break;case 4:n(a)&&Fr(a)}}}function n(s){for(var o=s.t,a=s.k,l=Ws(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Be){var d=o[c];if(d===void 0&&!Bs(o,c))return!0;var h=a[c],g=h&&h[Be];if(g?g.t!==d:!jS(h,d))return!0}}var _=!!o[Be];return l.length!==Ws(o).length+(_?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};CM("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,d){if(c){for(var h=Array(d.length),g=0;g<d.length;g++)Object.defineProperty(h,""+g,t(g,!0));return h}var _=US(d);delete _[Be];for(var y=Ws(_),w=0;w<y.length;w++){var f=y[w];_[f]=t(f,c||!!_[f].enumerable)}return Object.create(Object.getPrototypeOf(d),_)}(a,s),u={i:a?5:4,A:o?o.A:Jp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Be,{value:u,writable:!0}),l},S:function(s,o,a){a?mi(o)&&o[Be].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Be];if(c){var d=c.t,h=c.k,g=c.R,_=c.i;if(_===4)Yi(h,function(v){v!==Be&&(d[v]!==void 0||Bs(d,v)?g[v]||l(h[v]):(g[v]=!0,Fr(c)))}),Yi(d,function(v){h[v]!==void 0||Bs(h,v)||(g[v]=!1,Fr(c))});else if(_===5){if(r(c)&&(Fr(c),g.length=!0),h.length<d.length)for(var y=h.length;y<d.length;y++)g[y]=!1;else for(var w=d.length;w<h.length;w++)g[w]=!0;for(var f=Math.min(h.length,d.length),m=0;m<f;m++)h.hasOwnProperty(m)||(g[m]=!0),g[m]===void 0&&l(h[m])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var p1,Ga,qy=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",RM=typeof Map<"u",bM=typeof Set<"u",m1=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",FS=qy?Symbol.for("immer-nothing"):((p1={})["immer-nothing"]=!0,p1),g1=qy?Symbol.for("immer-draftable"):"__$immer_draftable",Be=qy?Symbol.for("immer-state"):"__$immer_state",NM=""+Object.prototype.constructor,Ws=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,US=Object.getOwnPropertyDescriptors||function(t){var e={};return Ws(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},tm={},Ka={get:function(t,e){if(e===Be)return t;var n=Ci(t);if(!Bs(n,e))return function(i,s,o){var a,l=h1(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Sr(r)?r:r===ff(t.t,e)?(pf(t),t.o[e]=em(t.A.h,r,t)):r},has:function(t,e){return e in Ci(t)},ownKeys:function(t){return Reflect.ownKeys(Ci(t))},set:function(t,e,n){var r=h1(Ci(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=ff(Ci(t),e),s=i==null?void 0:i[Be];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(jS(n,i)&&(n!==void 0||Bs(t.t,e)))return!0;pf(t),Fr(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return ff(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,pf(t),Fr(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Ci(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){kn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){kn(12)}},Ko={};Yi(Ka,function(t,e){Ko[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ko.deleteProperty=function(t,e){return Ko.set.call(this,t,e,void 0)},Ko.set=function(t,e,n){return Ka.set.call(this,t[0],e,n,t[0])};var OM=function(){function t(n){var r=this;this.O=m1,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(y){var w=this;y===void 0&&(y=a);for(var f=arguments.length,m=Array(f>1?f-1:0),v=1;v<f;v++)m[v-1]=arguments[v];return l.produce(y,function(E){var x;return(x=s).call.apply(x,[w,E].concat(m))})}}var u;if(typeof s!="function"&&kn(6),o!==void 0&&typeof o!="function"&&kn(7),Sr(i)){var c=c1(r),d=em(r,i,void 0),h=!0;try{u=s(d),h=!1}finally{h?bc(c):Zp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return df(c,o),hf(y,c)},function(y){throw bc(c),y}):(df(c,o),hf(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===FS&&(u=void 0),r.D&&By(u,!0),o){var g=[],_=[];Yn("Patches").M(i,u,g,_),o(g,_)}return u}kn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(d))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Sr(n)||kn(8),mi(n)&&(n=kM(n));var r=c1(this),i=em(this,n,void 0);return i[Be].C=!0,Zp(r),i},e.finishDraft=function(n,r){var i=n&&n[Be],s=i.A;return df(s,r),hf(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!m1&&kn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Yn("Patches").$;return mi(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),on=new OM,zS=on.produce;on.produceWithPatches.bind(on);on.setAutoFreeze.bind(on);on.setUseProxies.bind(on);on.applyPatches.bind(on);on.createDraft.bind(on);on.finishDraft.bind(on);function Qa(t){"@babel/helpers - typeof";return Qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qa(t)}function DM(t,e){if(Qa(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Qa(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function LM(t){var e=DM(t,"string");return Qa(e)==="symbol"?e:String(e)}function MM(t,e,n){return e=LM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function v1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?y1(Object(n),!0).forEach(function(r){MM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function St(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var _1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),mf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Dc={INIT:"@@redux/INIT"+mf(),REPLACE:"@@redux/REPLACE"+mf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+mf()}};function VM(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Hy(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(St(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(St(1));return n(Hy)(t,e)}if(typeof t!="function")throw new Error(St(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(St(3));return s}function d(y){if(typeof y!="function")throw new Error(St(4));if(l)throw new Error(St(5));var w=!0;return u(),a.push(y),function(){if(w){if(l)throw new Error(St(6));w=!1,u();var m=a.indexOf(y);a.splice(m,1),o=null}}}function h(y){if(!VM(y))throw new Error(St(7));if(typeof y.type>"u")throw new Error(St(8));if(l)throw new Error(St(9));try{l=!0,s=i(s,y)}finally{l=!1}for(var w=o=a,f=0;f<w.length;f++){var m=w[f];m()}return y}function g(y){if(typeof y!="function")throw new Error(St(10));i=y,h({type:Dc.REPLACE})}function _(){var y,w=d;return y={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(St(11));function v(){m.next&&m.next(c())}v();var E=w(v);return{unsubscribe:E}}},y[_1]=function(){return this},y}return h({type:Dc.INIT}),r={dispatch:h,subscribe:d,getState:c,replaceReducer:g},r[_1]=_,r}function $M(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Dc.INIT});if(typeof r>"u")throw new Error(St(12));if(typeof n(void 0,{type:Dc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(St(13))})}function BS(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{$M(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,d={},h=0;h<s.length;h++){var g=s[h],_=n[g],y=l[g],w=_(y,u);if(typeof w>"u")throw u&&u.type,new Error(St(14));d[g]=w,c=c||w!==y}return c=c||s.length!==Object.keys(l).length,c?d:l}}function Lc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function jM(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(St(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Lc.apply(void 0,a)(i.dispatch),v1(v1({},i),{},{dispatch:s})}}}function WS(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var qS=WS();qS.withExtraArgument=WS;const w1=qS;var HS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),FM=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},ho=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},UM=Object.defineProperty,zM=Object.defineProperties,BM=Object.getOwnPropertyDescriptors,E1=Object.getOwnPropertySymbols,WM=Object.prototype.hasOwnProperty,qM=Object.prototype.propertyIsEnumerable,x1=function(t,e,n){return e in t?UM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},oi=function(t,e){for(var n in e||(e={}))WM.call(e,n)&&x1(t,n,e[n]);if(E1)for(var r=0,i=E1(e);r<i.length;r++){var n=i[r];qM.call(e,n)&&x1(t,n,e[n])}return t},gf=function(t,e){return zM(t,BM(e))},HM=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},GM=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Lc:Lc.apply(null,arguments)};function KM(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var QM=function(t){HS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,ho([void 0],n[0].concat(this)))):new(e.bind.apply(e,ho([void 0],n.concat(this))))},e}(Array),YM=function(t){HS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,ho([void 0],n[0].concat(this)))):new(e.bind.apply(e,ho([void 0],n.concat(this))))},e}(Array);function nm(t){return Sr(t)?zS(t,function(){}):t}function XM(t){return typeof t=="boolean"}function JM(){return function(e){return ZM(e)}}function ZM(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new QM;return n&&(XM(n)?r.push(w1):r.push(w1.withExtraArgument(n.extraArgument))),r}var eV=!0;function tV(t){var e=JM(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,h=d===void 0?void 0:d,g;if(typeof i=="function")g=i;else if(KM(i))g=BS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(e));var y=jM.apply(void 0,_),w=Lc;l&&(w=GM(oi({trace:!eV},typeof l=="object"&&l)));var f=new YM(y),m=f;Array.isArray(h)?m=ho([y],h):typeof h=="function"&&(m=h(f));var v=w.apply(void 0,m);return Hy(g,c,v)}function ai(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return oi(oi({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function GS(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function nV(t){return typeof t=="function"}function rV(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?GS(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(nV(t))l=function(){return nm(t())};else{var u=nm(t);l=function(){return u}}function c(d,h){d===void 0&&(d=l());var g=ho([s[h.type]],o.filter(function(_){var y=_.matcher;return y(h)}).map(function(_){var y=_.reducer;return y}));return g.filter(function(_){return!!_}).length===0&&(g=[a]),g.reduce(function(_,y){if(y)if(mi(_)){var w=_,f=y(w,h);return f===void 0?_:f}else{if(Sr(_))return zS(_,function(m){return y(m,h)});var f=y(_,h);if(f===void 0){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return f}return _},d)}return c.getInitialState=l,c}function iV(t,e){return t+"/"+e}function sV(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:nm(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var d=r[c],h=iV(e,c),g,_;"reducer"in d?(g=d.reducer,_=d.prepare):g=d,s[c]=g,o[h]=g,a[c]=_?ai(h,_):ai(h)});function l(){var c=typeof t.extraReducers=="function"?GS(t.extraReducers):[t.extraReducers],d=c[0],h=d===void 0?{}:d,g=c[1],_=g===void 0?[]:g,y=c[2],w=y===void 0?void 0:y,f=oi(oi({},h),o);return rV(n,function(m){for(var v in f)m.addCase(v,f[v]);for(var E=0,x=_;E<x.length;E++){var C=x[E];m.addMatcher(C.matcher,C.reducer)}w&&m.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var oV="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",aV=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=oV[Math.random()*64|0];return e},lV=["name","message","stack","code"],yf=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),I1=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),uV=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=lV;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=ai(e+"/fulfilled",function(u,c,d,h){return{payload:u,meta:gf(oi({},h||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),s=ai(e+"/pending",function(u,c,d){return{payload:void 0,meta:gf(oi({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=ai(e+"/rejected",function(u,c,d,h,g){return{payload:h,error:(r&&r.serializeError||uV)(u||"Rejected"),meta:gf(oi({},g||{}),{arg:d,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,h){var g=r!=null&&r.idGenerator?r.idGenerator(u):aV(),_=new a,y;function w(m){y=m,_.abort()}var f=function(){return HM(this,null,function(){var m,v,E,x,C,b,O;return FM(this,function(X){switch(X.label){case 0:return X.trys.push([0,4,,5]),x=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,u,{getState:d,extra:h}),dV(x)?[4,x]:[3,2];case 1:x=X.sent(),X.label=2;case 2:if(x===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(U,fe){return _.signal.addEventListener("abort",function(){return fe({name:"AbortError",message:y||"Aborted"})})}),c(s(g,u,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:g,arg:u},{getState:d,extra:h}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:c,getState:d,extra:h,requestId:g,signal:_.signal,abort:w,rejectWithValue:function(U,fe){return new yf(U,fe)},fulfillWithValue:function(U,fe){return new I1(U,fe)}})).then(function(U){if(U instanceof yf)throw U;return U instanceof I1?i(U.payload,g,u,U.meta):i(U,g,u)})])];case 3:return E=X.sent(),[3,5];case 4:return b=X.sent(),E=b instanceof yf?o(null,g,u,b.payload,b.meta):o(b,g,u),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,O||c(E),[2,E]}})})}();return Object.assign(f,{abort:w,requestId:g,arg:u,unwrap:function(){return f.then(cV)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function cV(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function dV(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Gy="listenerMiddleware";ai(Gy+"/add");ai(Gy+"/removeAll");ai(Gy+"/remove");var T1;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);PM();const S1={userId:null,userName:null,email:null,isLogIn:!1,role:"user",cashList:[],favoriteList:[]},Mc=sV({name:"auth",initialState:S1,reducers:{updateUserProfile:(t,{payload:e})=>({...t,userId:e.userId,userName:e.userName,email:e.email,isLogIn:!!e.isLogIn}),authStateChange:(t,{payload:e})=>({...t,stateChange:e.stateChange}),authSignOut:()=>S1,adminRole:(t,{payload:e})=>({...t,role:"admin"}),addGoodToCashList:(t,{payload:e})=>({...t,cashList:[...t.cashList,e]}),removeGoodFromCashList:(t,{payload:e})=>({...t,cashList:e}),clearCashList:(t,{payload:e})=>({...t,cashList:[]}),setFavoriteList:(t,{payload:e})=>({...t,favoriteList:e}),addToFavoriteList:(t,{payload:e})=>({...t,favoriteList:[...t.favoriteList,e]}),deleteFromFavoriteList:(t,{payload:e})=>({...t,favoriteList:e})}}),{updateUserProfile:KS,authStateChange:s6,authSignOut:hV,adminRole:fV,clearCashList:pV,addToFavoriteList:mV,setFavoriteList:gV,deleteFromFavoriteList:yV}=Mc.actions,vV=({email:t,password:e,userName:n})=>async(r,i)=>{await AO(zs,t,e).catch(a=>{const l=a.code,u=a.message;console.log(`${l},${u}`)}),await RO(zs.currentUser,{displayName:`${n}`});const{uid:s,displayName:o}=zs.currentUser;r(KS({userId:s,userName:o}))},Ky=({email:t,password:e})=>async(n,r)=>{kO(zs,t,e).then(async i=>{const{uid:s,displayName:o,email:a}=zs.currentUser;n(KS({userId:s,userName:o,isLogIn:!0,email:a})),a==="msshopua@gmail.com"&&n(fV())}).catch(i=>{const s=i.code,o=i.message;console.log(`${s},${o}`)})},_V=()=>async(t,e)=>{OO(zs).catch(n=>{const r=n.code,i=n.message;console.log(`${r},${i}`)}),t(hV())},wV=()=>(t,e)=>{t(pV())},EV=t=>(e,n)=>{e(mV(t))},Qy=t=>async(e,n)=>{const r=await My(Rt(ie,"users",`${t}`));if(r.exists()){const{favoriteList:i}=r.data();e(gV(i))}else console.log("No such document!")},xV=t=>(e,n)=>{const s=n().auth.favoriteList.filter(o=>{if(o.name!==t.name)return o});e(yV(s))},IV=R.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,TV=R.li`
  width: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 6px;
  font-weight: bolder;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 12px;
    border-radius: 20px;
    padding: 20px;
    width: 25%;
  }
`,SV=R.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`,CV=R.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`,AV=R(yg)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  & path {
    stroke: black;
  }
  &:hover path {
    stroke: green !important;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`,kV=R(DR)`
  width: 15px;
  height: 15px;
  cursor: pointer;

  &:hover polyline {
    stroke: green !important;
  }

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`,PV=R($R)`
    width: 15px;
    height: 15px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }
   @media (min-width: 768px) {
  width: 20px;
  height: 20px;
  }
`,RV=R.ul`
  min-width: 260px;
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,bV=R.li`
  display: flex;
  justify-content: center;
  width: 110px;
  min-height: 110px;
  font-size: 6px;
  font-weight: bolder;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 13px;
    width: 250px;
    height: 250px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 23px;
    width: 400px;
    height: 400px;
  }
`,NV=R.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,OV=R.p`
  width: 90%;
`;R.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`;const DV=R.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,LV=R.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 10%;

  position: fixed;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`,MV=R.div`
  z-index: 100;
  display: flex;
  position: relative;
  border-radius: 15px;
  background: #f9f9f9;
  padding: 12px 12px;
  font-size: 9px;
  width: 300px;

  flex-direction: column;
  @media (min-width: 768px) {
    font-size: 12px;
    width: 700px;
    min-height: 340px;
    border-radius: 30px;
    padding: 24px 24px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    width: 1400px;
    min-height: 600px;
  }
`,VV=R.h3``,$V=R.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  border: 2px solid black;
  cursor: pointer;
  background-position: 50% 50%;
  background-size: cover;
  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,QS=R(bR)`
 background: black;
border:1px solid black;
border-radius: 50%;
padding:5px;
 position: absolute;
  top: 60px;
    left: 94px;
    width: 10px;
    height: 10px;
  cursor: pointer;
  z-index:5;

  transition: background 0.5s, border-color 0.5s;

  & polygon {
    stroke: white;
  }
  &:hover {
    background: green;
  }
 
  }

   @media (min-width: 768px) {
    top: 115px;
  left: 175px;
padding:10px;
  width: 30px;
  height: 30px;
  }
    @media (min-width: 1440px) {
    top: 205px;
    left: 345px;
    padding: 15px;
  width: 50px;
  height: 50px;
  }`,YS=R(NR)`
  background: black;
  border: 1px solid black;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  top: 60px;
  left: 13px;
  width: 10px;
  height: 10px;
  cursor: pointer;
  z-index: 5;
  transition: background 0.5s, border-color 0.5s;

  & polygon {
    stroke: white;
  }
  &:hover {
    background: green;
  }

  @media (min-width: 768px) {
    top: 115px;
    left: 25px;
    padding: 10px;
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1440px) {
    top: 205px;
    left: 25px;
    padding: 15px;
    width: 50px;
    height: 50px;
  }
`,jV=R.div`
  padding: 15px;
  cursor: default;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media (min-width: 768px) {
    padding: 30px;
  }
`,C1=R.button`
  width: 100%;
  background: black;
  color: white;
  transition: background 0.5s;

  &.active {
    background: green;
  }

  &:hover {
    background: green;
  }
`,FV=R.button`
  width: 100%;
  &.active {
    background: red;
  }

  &:hover {
    background: red;
  }
`,UV=R.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,zV=R.div`
  display: flex;
`,BV=R(LR)`
  position: absolute;
  top: 5px;
    right: 5px;
    width: 25px;
    height: 25px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }

   @media (min-width: 768px) {
    top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  }
`,WV=R(yg)`
  position: absolute;
  top: 5px;
    right: 25px;
    width: 25px;
    height: 25px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }

   @media (min-width: 768px) {
    top: 10px;
  right: 50px;
  width: 50px;
  height: 50px;
  }
`,qV=R(MR)`
  position: absolute;
  top: 5px;
    right: 45px;
    width: 25px;
    height: 25px;
  cursor: pointer;
  & path {
    stroke: black;
  }
    &:hover path{
      stroke: green !important;
    }
  }

   @media (min-width: 768px) {
    top: 10px;
  right: 90px;
  width: 50px;
  height: 50px;
  }
`,HV=R.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,{addGoodToCashList:GV,removeGoodFromCashList:KV}=Mc.actions,QV=({id:t,name:e,image:n,price:r,number:i})=>(s,o)=>{s(GV({id:t,name:e,image:n,price:r,number:i}))},YV=t=>(e,n)=>{const s=n().auth.cashList.filter((o,a)=>{if(a!==t)return o});e(KV(s))};var XS={exports:{}},XV="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",JV=XV,ZV=JV;function JS(){}function ZS(){}ZS.resetWarningCache=JS;var e9=function(){function t(r,i,s,o,a,l){if(l!==ZV){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ZS,resetWarningCache:JS};return n.PropTypes=n,n};XS.exports=e9();var t9=XS.exports;const ds=sm(t9),n9=R.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`,r9=R.div`
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  border: 2px solid black;
  cursor: pointer;
  background-position: 50% 50%;
  background-size: cover;
`,i9=R(QS)`
  background: black;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: 35%;
  right: 5%;
  left: auto;
  width: 55px;
  height: 55px;
  cursor: pointer;
  z-index: 1300;
  & polygon {
    stroke: white;
  }
  &:hover {
    background: green;
  }

  @media (min-width: 768px) {
    padding: 15px;
    width: 75px;
    height: 75px;
  }

  @media (min-width: 1440px) {
    padding: 15px;
    width: 105px;
    height: 105px;
  }
`,s9=R(YS)`
  background: black;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: 35%;
  left: 5%;
  width: 55px;
  height: 55px;
  cursor: pointer;
  z-index: 1300;
  & polygon {
    stroke: white;
  }
  &:hover {
    background: green;
  }

  @media (min-width: 768px) {
    padding: 15px;
    width: 75px;
    height: 75px;
  }
  @media (min-width: 1440px) {
    padding: 15px;
    width: 105px;
    height: 105px;
  }
`;class eC extends Gt.Component{constructor(){super(...arguments);So(this,"nextImage",()=>{this.props.nextImage()});So(this,"previousImage",()=>{this.props.previousImage()});So(this,"keydown",n=>{n.keyCode===27&&this.props.onCloseModal()})}componentDidMount(){document.addEventListener("keydown",this.keydown)}componentWillUnmount(){document.removeEventListener("keydown",this.keydown)}render(){return p.jsxs(p.Fragment,{children:[this.props.currentImageIndex!==this.props.currentImageUrl.length-1&&typeof this.props.currentImageUrl!="string"&&p.jsx(i9,{onClick:this.nextImage}),p.jsx(n9,{onClick:this.props.onCloseModal,children:p.jsx(r9,{style:{backgroundImage:`url(${typeof this.props.currentImageUrl=="string"?this.props.currentImageUrl:this.props.currentImageUrl[this.props.currentImageIndex]})`}})}),this.props.currentImageIndex!==0&&typeof this.props.currentImageUrl!="string"&&p.jsx(s9,{onClick:this.previousImage})]})}}So(eC,"propTypes",{onCloseModal:ds.func.isRequired,currentImageUrl:ds.string.isRequired||ds.array.isRequired,nextImage:ds.func.isRequired,previousImage:ds.func.isRequired,currentImageIndex:ds.number.isRequired});const lh=({card:t,closeModal:e})=>{const n=kr(),r=es(),[i,s]=I.useState(!1),o=vn(wn),[a,l]=I.useState(0);let u=o.favoriteList,c=u.length>0?o.favoriteList.map(C=>C.name):[];const d=C=>{C.currentTarget===C.target&&e()},h=C=>{(C.charCode||C.keyCode)===27&&e()},g=async()=>{await LS(Rt(ie,"goods",`${t.id}`)),e()},_=()=>{r(QV(t))},y=async()=>{try{await Vi(Rt(ie,"users",`${o.email}`),{favoriteList:[...u,t]})}catch(C){console.log(C)}},w=()=>{r(EV(t)),y()},f=async()=>{try{const C=u.filter(b=>{if(b.name!==t.name)return b});await Vi(Rt(ie,"users",`${o.email}`),{favoriteList:C})}catch(C){console.log(C)}},m=()=>{f(),r(xV(t))};I.useEffect(()=>(document.body.addEventListener("keydown",h),function(){document.body.removeEventListener("keydown",h)}),[]);const v=()=>{l(C=>C+1)},E=()=>{l(C=>C-1)},x=()=>{s(!1)};return p.jsx(DV,{onClick:d,children:p.jsxs(LV,{onClick:d,children:[p.jsxs(MV,{children:[p.jsxs(zV,{children:[p.jsxs(UV,{children:[a!==0&&typeof t.image!="string"&&p.jsx(YS,{onClick:E}),p.jsx($V,{style:{backgroundImage:`url(${typeof t.image=="string"?t.image:t.image[a]})`},onClick:()=>{s(!0)}}),a!==t.image.length-1&&typeof t.image!="string"&&p.jsx(QS,{onClick:v}),p.jsx(C1,{onClick:_,children:"Добавити до покупок"}),o.isLogIn&&(c.includes(t.name)?p.jsx(FV,{onClick:m,children:"Видалити з обранного"}):p.jsx(C1,{onClick:w,children:"Добавити до обранного"}))]}),p.jsxs(jV,{children:[p.jsx(VV,{children:t.name.join(" ")}),p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:[p.jsx("span",{style:{fontWeight:"bolder"},children:"Код продукту: "}),t.number]}),p.jsxs("p",{children:[p.jsx("span",{style:{fontWeight:"bolder"},children:"Ціна: "}),t.price," грн."]})]}),p.jsx(p.Fragment,{children:p.jsxs("p",{children:[p.jsx("span",{style:{fontWeight:"bolder"},children:"Категорія: "}),t.category]})}),t.sex&&p.jsx(p.Fragment,{children:p.jsxs("p",{children:[p.jsx("span",{style:{fontWeight:"bolder"},children:"Рід: "}),t.sex]})}),t.producent&&p.jsx(p.Fragment,{children:p.jsxs("p",{children:[p.jsx("span",{style:{fontWeight:"bolder"},children:"Виробник: "}),t.producent]})}),t.size&&p.jsx(p.Fragment,{children:p.jsxs("p",{children:[p.jsx("span",{style:{fontWeight:"bolder"},children:"Розмір: "}),typeof t.size!="string"?t.size.join("-"):t.size]})}),p.jsxs("div",{children:[p.jsx("span",{style:{fontWeight:"bolder"},children:"Додаткова інформація:"}),p.jsx(HV,{children:t.otherInfo})]})]})]}),p.jsx(BV,{onClick:()=>e()}),o.role==="admin"&&p.jsxs(p.Fragment,{children:[p.jsx(WV,{onClick:()=>{g()}}),p.jsx(qV,{onClick:()=>{n("/admin",{state:t})}})]})]}),i&&p.jsx(eC,{onCloseModal:x,currentImageIndex:a,currentImageUrl:t.image,nextImage:v,previousImage:E})]})})},o9=()=>{const t=vn(wn),[e,n]=I.useState(!1),[r,i]=I.useState(),s=a=>{i(a),n(!0)},o=()=>{n(!1)};return p.jsxs(p.Fragment,{children:[p.jsx(RV,{id:"card",children:t.favoriteList.length>0?t.favoriteList.map((a,l)=>p.jsx(p.Fragment,{children:p.jsx(bV,{onClick:()=>s(a),style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`},children:p.jsxs(NV,{children:[p.jsx(OV,{children:a.name.join(" ")}),p.jsxs("p",{children:[a.price," грн."]})]})},a.id)})):p.jsx("div",{children:"Список обранного пустий"})}),e&&p.jsx(lh,{card:r,closeModal:o})]})};function Au(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Au=function(n){return typeof n}:Au=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Au(t)}function vf(){}var a9={getItem:vf,setItem:vf,removeItem:vf};function l9(t){if((typeof self>"u"?"undefined":Au(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function u9(t){var e="".concat(t,"Storage");return l9(e)?self[e]:a9}function c9(t){var e=u9(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}const qr=c9("local"),d9=({closeUserModal:t,typeModal:e})=>{const[n,r]=I.useState(e),[i,s]=I.useState(!1),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,d]=I.useState(""),[h,g]=I.useState(""),[_,y]=I.useState(""),[w,f]=I.useState(""),[m,v]=I.useState(""),[E,x]=I.useState(""),[C,b]=I.useState(""),[O,X]=I.useState(""),[U,fe]=I.useState(""),[ke,K]=I.useState([]),[ve,Ce]=I.useState("info"),[ut,Fe]=I.useState(""),M=vn(wn),Q=es(),Z=L=>{L.currentTarget===L.target&&t()},_e=L=>{(L.charCode||L.keyCode)===27&&t()};I.useEffect(()=>(document.body.addEventListener("keydown",_e),function(){document.body.removeEventListener("keydown",_e)}),[]);const $=L=>{a(L.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(L.target.value).toLowerCase())?u(""):u("Введіть повнe призвіще, ім'я, побатькові")},z=L=>{d(L.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(L.target.value).toLowerCase())?g(""):g("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},B=L=>{y(L.target.value),L.target.value.length<6?v("Довжина пароля повина бути від 6 символів"):v("")},ee=L=>{f(L.target.value),L.target.value!==_?x("Введені паролі нe співпадають"):x("")},T=L=>{b(L.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(L.target.value))?X(""):X("Номер невірного формату (наприклад '043*******')")},ce=()=>{!l&&!h&&!m&&!E&&!O&&w&&o&&c&&_&&C&&U?(Q(vV({email:c,password:_,userName:o})),V({name:o,email:c,password:_,userNumber:C,userPostAdress:U,favoriteList:[]}),s(!1),r("LogIn")):s(!0)},V=async L=>{try{await $y(Rt(ie,"users",`${L.email}`),L)}catch(J){console.error("Error adding user: ",J)}},be=async()=>{try{Q(Ky({email:c,password:_})),Q(Qy(c)),await Vi(Rt(ie,"users",`${c}`),{isLogIn:!0}),qr.setItem("userEmail",c),qr.setItem("userPassword",_),t()}catch(L){Fe("Email не зареестрований або невіний пароль"),console.error("Error adding user: ",L)}},pe=async()=>{t(),Q(_V()),qr.removeItem("userEmail"),qr.removeItem("userPassword");try{await Vi(Rt(ie,"users",`${M.email}`),{isLogIn:!1})}catch(L){console.error("Error adding user: ",L)}},ge=async()=>{const L=await My(Rt(ie,"users",`${M.email}`));if(L.exists()){const{name:J,userPostAdress:Le,userNumber:A}=L.data();a(J),b(A),fe(Le)}};I.useEffect(()=>{M.email&&(ge(),X(""))},[ve,Q]);const re=async()=>{if(!O)try{await Vi(Rt(ie,"users",`${M.email}`),{userNumber:C,userPostAdress:U}),Ce("info")}catch(L){console.error("Error change user: ",L)}},Xe=async()=>{try{(await Re(Pe(xe(ie,"orders"),ue("userEmail","==",`${M.email}`)))).forEach(J=>{K(Le=>[...Le,{id:J.id,...J.data()}])}),K(J=>J.sort((Le,A)=>Le.postDate>A.postDate?-1:1))}catch(L){console.error("Error take orders: ",L)}};return I.useEffect(()=>{Xe()},[Q]),p.jsx(QR,{onClick:Z,children:p.jsx(YR,{onClick:Z,children:p.jsxs(XR,{children:[n==="SignIn"&&p.jsxs(Hl,{id:"userFormSignIn",children:[p.jsx(us,{children:"Контактні дані"}),p.jsx($n,{required:!0,name:"name",value:o,onChange:L=>{$(L)},placeholder:"Введіть ПІБ",style:l?{borderColor:"red"}:{}}),l&&p.jsx(rr,{children:l}),p.jsx($n,{required:!0,name:"email",value:c,onChange:L=>{z(L)},placeholder:"Введіть контактну електронну адресу",style:h?{borderColor:"red"}:{}}),h&&p.jsx(rr,{children:h}),p.jsx($n,{required:!0,name:"password",value:_,onChange:L=>{B(L)},placeholder:"Введіть пароль",autoComplete:"on",minlength:"5",style:m?{borderColor:"red"}:{}}),m&&p.jsx(rr,{children:m}),p.jsx($n,{required:!0,name:"passwordDublicate",value:w,onChange:L=>{ee(L)},placeholder:"Повторіть пароль",style:E?{borderColor:"red"}:{}}),E&&p.jsx(rr,{children:E}),p.jsx($n,{value:C,type:"number",onChange:L=>{T(L)},placeholder:"Введіть контактний номер телефону",style:O?{borderColor:"red"}:{}}),O&&p.jsx(rr,{children:O}),p.jsx($n,{value:U,onChange:L=>{fe(L.target.value)},placeholder:"Введіть адресу відділення пошти"}),p.jsx(rr,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),p.jsx(Gl,{style:i?{backgroundColor:"red"}:{},onClick:ce,children:"Зареєструватись"})]}),n==="LogIn"&&p.jsxs(Hl,{id:"userFormLogIn",children:[p.jsx(us,{children:"E-mail:"}),p.jsx($n,{required:!0,name:"email",value:c,onChange:L=>{d(L.target.value)}}),p.jsx(us,{children:"Пароль:"}),p.jsx($n,{required:!0,name:"password",value:_,onChange:L=>{y(L.target.value)}}),ut&&p.jsx(rr,{children:ut}),p.jsx(Gl,{onClick:be,children:"Увійти"})]}),n==="Config"&&p.jsxs(p.Fragment,{children:[p.jsxs(JR,{children:[p.jsx(Bl,{onClick:()=>{Ce("info")},children:"Користувач"}),p.jsx(Bl,{onClick:()=>{Ce("change")},children:"Зміна данних"}),p.jsx(Bl,{onClick:()=>{Ce("favorite")},children:"Обране"}),p.jsx(Bl,{onClick:()=>{Ce("history")},children:"Історія покупок"})]}),ve==="info"&&p.jsxs(Hl,{id:"userFormConfig",children:[p.jsx(us,{children:"Інформація користувача"}),p.jsxs(ZR,{children:[p.jsx(Wl,{children:"Призвіще, ім'я, по батькові:"}),p.jsx(ql,{children:o}),p.jsx(Wl,{children:"E-mail:"}),p.jsx(ql,{children:M.email}),p.jsx(Wl,{children:"Номер телефону:"}),p.jsxs(ql,{children:[" ",C]}),p.jsx(Wl,{children:'Відділення "Нова пошти":'}),p.jsx(ql,{children:U})]}),p.jsx(Gl,{onClick:pe,children:"Вийти з аккаунта"})]}),ve==="change"&&p.jsxs(Hl,{id:"userFormConfig",children:[p.jsx(us,{children:"Зміна данних"}),p.jsx($n,{value:C,type:"number",onChange:L=>{T(L)},placeholder:"Введіть контактний номер телефону",style:O?{borderColor:"red"}:{}}),O&&p.jsx(rr,{children:O}),p.jsx($n,{value:U,onChange:L=>{fe(L.target.value)},placeholder:"Введіть адресу відділення пошти"}),p.jsx(rr,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),p.jsx(Gl,{onClick:re,children:"Змінити дані"})]}),ve==="favorite"&&p.jsx(o9,{}),ve==="history"&&p.jsxs(tb,{children:[p.jsx(us,{children:"Історія покупок"}),p.jsx(Mv,{children:"Для додаткової інформації чи відказу від замовлення"}),p.jsx(Mv,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),p.jsx(ib,{children:ke.map(L=>p.jsxs(sb,{children:[p.jsx(eb,{style:L.status==="take"?{backgroundColor:"yellow"}:L.status==="send"?{backgroundColor:"green"}:{}}),p.jsxs(Vn,{children:[p.jsxs(Vn,{children:["Статус:",L.status==="create"&&" Замовлення оформлене",L.status==="take"&&" Прийняте",L.status==="send"&&" Відправлене"]}),"Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(L.postDate.seconds)]}),p.jsxs(Vn,{children:["ФІП: ",L.userFullName]}),p.jsxs(Vn,{children:["Email: ",L.userEmail]}),p.jsxs(Vn,{children:["Номер телефону: ",L.userNumber]}),p.jsxs(Vn,{children:["Адрес Нової почти: ",L.userPostAdress]}),p.jsx(Vn,{children:"Список замовлення:"}),L.cashList.map(J=>p.jsxs(nb,{children:[p.jsx(rb,{style:{backgroundImage:`url(${typeof J.image=="string"?J.image:J.image[0]})`}}),p.jsxs(Vn,{children:["Назва: ",J.name]}),p.jsxs(Vn,{children:["Ціна: ",J.price]})]})),p.jsxs(Vn,{children:["Додаткова інформація:"," ",L.userMessege?L.userMessege:"Без додаткової інформації"]})]}))})]})]})]})})})},h9=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(""),s=vn(wn).isLogIn,o=()=>{e(!1)};return p.jsxs(p.Fragment,{children:[s?p.jsx(p.Fragment,{children:p.jsx(Uh,{onClick:()=>{r("Config"),e(!0)},children:"Меню користувача"})}):p.jsxs(KR,{children:[p.jsx(Uh,{onClick:()=>{r("LogIn"),e(!0)},children:"Увійти"}),p.jsx(Uh,{onClick:()=>{r("SignIn"),e(!0)},children:"Зареєструватись"})]}),t&&p.jsx(d9,{closeUserModal:o,typeModal:n})]})},f9=()=>{const{cashList:t}=vn(wn),e=kr(),[n,r]=I.useState(0),i=Zn().pathname,s=es();I.useEffect(()=>{localStorage.getItem("userEmail")&&localStorage.getItem("userPassword")&&o()},[]);const o=async()=>{const l=await localStorage.getItem("userEmail"),u=await localStorage.getItem("userPassword");s(Ky({email:l,password:u})),s(Qy(l))},a=()=>{const l=window.scrollY;r(l)};return I.useEffect(()=>(window.addEventListener("scroll",a,{passive:!0}),()=>{window.removeEventListener("scroll",a)}),[]),p.jsxs(TR,{children:[p.jsxs(SR,{children:[p.jsx(WR,{}),i!=="/checkout"&&p.jsxs(p.Fragment,{children:[p.jsx(GR,{}),p.jsx(h9,{})]})]}),!(i==="/cashList"||i==="/admin"||i==="/checkout")&&p.jsxs(p.Fragment,{children:[n>=window.innerHeight&&p.jsx(PR,{children:p.jsx(RR,{onClick:()=>{window.scrollTo(0,0)}})}),p.jsxs(AR,{children:[p.jsx(CR,{onClick:()=>{e("/cashList")}}),p.jsx(kR,{children:t.length})]})]})]})},p9=()=>p.jsxs(p.Fragment,{children:[p.jsx(f9,{}),p.jsx(I.Suspense,{fallback:p.jsx("div",{children:"Loading..."}),children:p.jsx(Sk,{})})]}),Yy=R.ul`
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
  position: reletive;
  padding: 10px 0;

  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,Xy=R.li`
  display: flex;
  justify-content: center;
  width: 100px;
  min-height: 100px;
  font-size: 6px;
  font-weight: bolder;

  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 13px;
    width: 250px;
    height: 250px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 23px;
    width: 400px;
    height: 400px;
  }
`,Jy=R.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Zy=R.p`
  width: 90%;
`,e0=R.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`,t0=R(jR)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  color: yellow;
  border: 1px solid black;
  border-radius: 50%;
  background: black;

  @media (min-width: 768px) {
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`,tC=R.button`
  color: white;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 5px;
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 20px 10px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  transition: background-color 0.5s, border-color 0.5s;

  &:hover {
    background: green;
    border-color: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    padding: 10px 10px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
    padding: 35px;
    margin-bottom: 25px;
  }
`,m9=R.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`,rm=R.select`
  width: 230px;
  min-height: 60px;
  padding: 20px 22px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;

  outline: none;

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    width: 330px;
    font-size: 15px;
  }
`,Bt=R.option``,iu=R.input`
  width: 182px;
  max-height: 60px;
  padding: 20px 22px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    width: 282px;
    font-size: 24px;
  }
`,_f=R.textarea`
  width: 182px;
  min-height: 60px;
  margin-bottom: 32px;
  padding: 20px 22px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;

  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;

  outline: none;
  resize: vertical;
  scrollbar-width: thin;
  scrollbar-color: red green;

  &::-webkit-scrollbar {
    border-radius: 15px;
    width: 15px;
    background-color: #f5f5f5;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: green;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
  }

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }

  @media (min-width: 768px) {
    width: 282px;
    font-size: 24px;
  }
`,nC=R.button`
  transition: background 0.5s;

  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }
`,g9=R(Yy)`
  flex-direction: column;
`,y9=R.h4`
  cursor: default;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`,v9=R.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 30px;
    gap: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
    gap: 50px;
  }
`,_9=R.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,w9=R(nC)`
  font-size: 10px;
  display: flex;
  justify-content: center;
  width: 100px;
  padding: 5px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 240px;
    font-size: 24px;
    padding: 10px;
  }

  @media (min-width: 1440px) {
    width: 400px;
    font-size: 32px;
    padding: 15px;
  }
`,E9=["XS","S","M","L","XL","XXL","XXXL"],x9=["35","36","37","38","39","40","41","42","43","44","45","46","47","48"],ca=[{name:"Одяг",category:["Куртки і вітровки","Зимові куртки","Сукні","Сарафани","Спідниці","Нічний та домашній одяг","Термобілизна","Гірськолижний одяг","Шкарпетки","Панчохи","Колготки","Комбінезони та напівкомбінезони","Кофти","Светри","Кардигани","Костюми","Жакети","Спортивний одяг","Футболки","Майки","Шорти","Бриджі","Капрі","Джинси","Брюки","Легінси","Верхній одяг","Блузи","Сорочки","Для вагітних","Купальники","Пляжний одяг","Капрі","Штани","Піджаки","Гетри","Сліди","Спідня білизна","Пляжні шорти та плавки"]},{name:"Взуття",category:["Кросівки","Кеди","Снікери","Босоніжки","Сандалі","Туфлі","Балетки","Сліпони","Еспадрильї","Сабо","В'єтнамки","Шльопанці","Чоботи","Черевики","Угги","Ботильйони","Мокасини","Топсайдери","Лофери","Сандалі","Хайтопи"]},{name:"Сумки та аксесуари",category:["Сумки","Рюкзаки","Валізи","Аксесуари для волосся","Годинники","Рукавички та рукавиці","Біжутерія","Головні убори","Ремені та пояси","Гаманці","Портмоне","Ремені","Пояси","Хустки","Шарфи","Краватки","Підтяжки","Прикраси","Парасолі","Сонцезахисні окуляри","Дорожні сумки"]},{name:"Товари для дому та саду"},{name:`
Дитячий світ, дитячі товари`},{name:"Електроніка"},{name:"Зоотовари"},{name:"Автотовари та електроінструменти"},{name:"Все для кухні"},{name:"Спорт, здоров'я, туризм"},{name:"Подарунки та сувеніри"},{name:"Ліхтарі, прожектори, світильники"}],I9=()=>{const[t,e]=I.useState([]),n=vn(wn),r=[],i=kr(),s=[],[o,a]=I.useState(!1),[l,u]=I.useState();let c=new Date().getTime()/1e3;const d=_=>{u(_),a(!0)},h=()=>{a(!1)},g=async()=>{MS(xe(ie,"goods"),_=>{e(_.docs.map(y=>({...y.data(),id:y.id})).sort((y,w)=>y.createTime.seconds>w.createTime.seconds?-1:1))})};return I.useEffect(()=>{g()},[]),t.map(_=>{r.includes(_.category)||r.push(_.category)}),r.sort(),ca.map(_=>{_.category?_.category.map(y=>{s.push(y)}):s.push(_.name)}),p.jsxs(p.Fragment,{children:[p.jsx(g9,{children:r.map(_=>{if(s.includes(_)){let y=0;return p.jsxs(v9,{children:[p.jsx(y9,{children:_}),p.jsx(_9,{children:t.map((w,f)=>{if(w.category===_&&(y++,window.innerWidth>=2160&&y<=8||window.innerWidth>=1152&&y<=6||window.innerWidth<1152&&y<=4))return p.jsxs(Xy,{onClick:()=>d(w),style:{backgroundImage:`url(${typeof w.image=="string"?w.image:w.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(m=>{if(m.name===w.name)return p.jsx(t0,{})}),c-w.createTime.seconds<259200&&p.jsx(e0,{children:"Новинка!"}),p.jsxs(Jy,{children:[p.jsx(Zy,{children:w.name.join(" ")}),p.jsxs("p",{children:[w.price," грн."]})]})]},f)})}),p.jsx(w9,{onClick:()=>i("/search",{state:{category:_}}),children:"Побачити більше"})]})}})}),o&&p.jsx(lh,{card:l,closeModal:h})]})},T9=R.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;
  padding: 10px 0;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 30px 0;
    gap: 30px;
  }
`,S9=R.input`
  display: flex;
  background: inherit;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  color: black;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    width: 330px;
    font-size: 15px;
  }
`,A1=R(rm)`
  width: 180px;
  min-height: auto;
  border: 2px solid black;
  border-radius: 8px;
  padding: 5px;
  color: black;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    width: 340px;
    font-size: 15px;
  }
`,C9=R.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,k1=R.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: space-around;
`,P1=R.input``,R1=R.h4`
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 23px;
  }
`,b1=R.label`
  display: flex;
  background: inherit;
  border: 2px solid black;
  border-radius: 8px;
  padding: 3px 5px;
  color: black;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;let Sn=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const A9=()=>{const e=Zn().state,n=vn(wn),[r,i]=I.useState([]),[s,o]=I.useState(24),[a,l]=I.useState(r),[u,c]=I.useState(!1),[d,h]=I.useState(),[g,_]=I.useState(""),[y,w]=I.useState([]),[f,m]=I.useState(""),[v,E]=I.useState(e&&e.category?e.category:""),[x,C]=I.useState([]),b=["XS","S","M","L","XL","XXL","XXXL"];let O=new Date().getTime()/1e3;const X=A=>{h(A),c(!0)},U=()=>{c(!1)},fe=async()=>{l([]);const A=Pe(xe(ie,"goods"),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W);let P=[];S.docs.map(Ue=>{P.push({...Ue.data(),id:Ue.id})});const G=[...new Set(P)];P=[],l(G)},ke=async()=>{const A=Pe(xe(ie,"goods"),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},K=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("category","==",v),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},ve=async()=>{const A=Pe(xe(ie,"goods"),ue("category","==",v),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},Ce=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("name","array-contains-any",y),Ne(25)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},ut=async()=>{const A=Pe(xe(ie,"goods"),ue("name","array-contains-any",y),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},Fe=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("category","==",v),ue("name","array-contains-any",y),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W);let P=[];S.docs.map(G=>{P.push({...G.data(),id:G.id})}),l(P)},M=async()=>{const A=Pe(xe(ie,"goods"),ue("category","==",v),ue("name","array-contains-any",y),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},Q=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("category","==",v),ue("sex","==",f),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},Z=async()=>{const A=Pe(xe(ie,"goods"),ue("category","==",v),ue("sex","==",f),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},_e=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("name","array-contains-any",y),ue("sex","==",f),ze("name"),Ne(25)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},$=async()=>{const A=Pe(xe(ie,"goods"),ue("name","array-contains-any",y),ue("sex","==",f),ze("name"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},z=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("name","array-contains-any",y),ue("category","==",v),ue("sex","==",f),ze("createTime","desc"),Ne(24));console.log(y,v,f);const S=await Re(A),W=S.docs[S.docs.length-1];_(W);let P=[];S.docs.map(G=>{P.push({...G.data(),id:G.id})}),l(P)},B=async()=>{const A=Pe(xe(ie,"goods"),ue("category","==",v),ue("name","array-contains-any",y),ue("sex","==",f),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},ee=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("sex","==",f),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},T=async()=>{const A=Pe(xe(ie,"goods"),ue("sex","==",f),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{l(G=>[...G,{...P.data(),id:P.id}])})},ce=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("category","==",v),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{x.map(G=>{P.data().size.includes(G)&&l(Ue=>[...Ue,{...P.data(),id:P.id}])})})},V=async()=>{const A=Pe(xe(ie,"goods"),ue("category","==",v),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{x.map(G=>{P.data().size.includes(G)&&l(Ue=>[...Ue,{...P.data(),id:P.id}])})})},be=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("name","array-contains-any",y),ue("category","==",v),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{x.map(G=>{P.data().size.includes(G)&&l(Ue=>[...Ue,{...P.data(),id:P.id}])})})},pe=async()=>{const A=Pe(xe(ie,"goods"),ue("category","==",v),ue("name","array-contains-any",y),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{x.map(G=>{P.data().size.includes(G)&&l(Ue=>[...Ue,{...P.data(),id:P.id}])})})},ge=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("category","==",v),ue("sex","==",f),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{x.map(G=>{P.data().size.includes(G)&&l(Ue=>[...Ue,{...P.data(),id:P.id}])})})},re=async()=>{const A=Pe(xe(ie,"goods"),ue("category","==",v),ue("sex","==",f),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{x.map(G=>{P.data().size.includes(G)&&l(Ue=>[...Ue,{...P.data(),id:P.id}])})})},Xe=async()=>{l([]);const A=Pe(xe(ie,"goods"),ue("name","array-contains-any",y),ue("category","==",v),ue("sex","==",f),ze("createTime","desc"),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{x.map(G=>{P.data().size.includes(G)&&l(Ue=>[...Ue,{...P.data(),id:P.id}])})})},L=async()=>{const A=Pe(xe(ie,"goods"),ue("name","array-contains-any",y),ue("category","==",v),ue("sex","==",f),ze("createTime","desc"),Jt(g),Ne(24)),S=await Re(A),W=S.docs[S.docs.length-1];_(W),S.docs.map(P=>{x.map(G=>{P.data().size.includes(G)&&l(Ue=>[...Ue,{...P.data(),id:P.id}])})})},J=(A,S)=>{A&&!x.includes(S)&&C(W=>[...W,S].sort((P,G)=>b.indexOf(P)-b.indexOf(G))),A||C(W=>W.filter(P=>P!==S).sort((P,G)=>b.indexOf(P)-b.indexOf(G)))};I.useEffect(()=>{o(24),!(y.length>0)&&!v&&!f&&!x.length>0?fe():!(y.length>0)&&v&&!f&&!x.length>0?K():y.length>0&&!v&&!f&&!x.length>0?Ce():y.length>0&&v&&!f&&!x.length>0?Fe():!y.length>0&&v&&f&&!x.length>0?Q():y.length>0&&!v&&f&&!x.length>0?_e():y.length>0&&v&&f&&!x.length>0?z():!y.length>0&&!v&&f&&!x.length>0?ee():!(y.length>0)&&v&&!f&&x.length>0?ce():y.length>0&&v&&!f&&x.length>0?be():!(y.length>0)&&v&&f&&x.length>0?ge():y.length>0&&v&&f&&x.length>0&&Xe()},[y,v,f,x]),I.useEffect(()=>{if(document.getElementById("checkboxes"))for(var A=document.querySelectorAll("input[type='checkbox']"),S=0;S<A.length;S++)A[S].checked=!1;C([])},[y,v,f]);const Le=()=>{!(y.length>0)&&!v&&!f&&!(x.length>0)?ke():!(y.length>0)&&v&&!f&&!(x.length>0)?ve():y.length>0&&!v&&!f&&!(x.length>0)?ut():y.length>0&&v&&!f&&!(x.length>0)?M():!(y.length>0)&&v&&f&&!(x.length>0)?Z():y.length>0&&!v&&f&&!(x.length>0)?$():y.length>0&&v&&f&&!(x.length>0)?B():!(y.length>0)&&!v&&f&&!(x.length>0)?T():!(y.length>0)&&v&&!f&&x.length>0?V():y.length>0&&v&&!f&&x.length>0?pe():!(y.length>0)&&v&&f&&x.length>0?re():y.length>0&&v&&f&&x.length>0&&L()};return I.useEffect(()=>{a.length>0&&a.length<s&&Le()},[y,v,f,x]),p.jsxs(T9,{children:[p.jsx(S9,{placeholder:"Назва товару",onChange:A=>{if(A.target.value==="")w([]);else{let S=A.target.value.split(" "),W=[];S.map(P=>{W.push(P.toLowerCase()),W.push(P.toUpperCase()),W.push(P.substring(0,1).toUpperCase()+P.substring(1).toLowerCase())}),w(W.filter(P=>P!=""))}}}),p.jsxs(A1,{id:"category",name:"category",value:v,onChange:A=>{E(A.target.value)},children:[p.jsx(Bt,{value:"",selected:!(e&&e.category)&&"selected"||null,children:"Без категорії"},Sn()),ca.map((A,S)=>A.category?p.jsx("optgroup",{label:`${A.name}`,children:A.category&&A.category.map(W=>p.jsx(Bt,{value:`${W}`,selected:v===W&&"selected"||null,children:W},Sn()))},Sn()):p.jsx(Bt,{value:`${A.name}`,style:{fontWeight:"bolder"},selected:v===A.name&&"selected"||null,children:A.name},Sn()))]}),p.jsxs(A1,{id:"sexFilter",name:"sexFilter",value:f,onChange:A=>{m(A.target.value)},children:[p.jsx(Bt,{value:"",children:"Для всіх"},Sn()),p.jsx(Bt,{value:"Чоловік",children:"Для нього"},Sn()),p.jsx(Bt,{value:"Жінка",children:"Для неї"},Sn()),p.jsx(Bt,{value:"Унісекс",children:"Унісекс"},Sn())]}),ca[0].category.includes(v)&&p.jsxs(p.Fragment,{children:[p.jsx(R1,{children:"Розміри"}),p.jsx(k1,{id:"checkboxes",children:E9.map(A=>p.jsxs(b1,{for:A,children:[A.toUpperCase(),p.jsx(P1,{type:"checkbox",name:A,id:A,onChange:S=>{J(S.target.checked,S.target.name)}})]}))})]}),ca[1].category.includes(v)&&p.jsxs(p.Fragment,{children:[p.jsx(R1,{children:"Розміри"}),p.jsx(k1,{id:"checkboxes",children:x9.map(A=>p.jsxs(b1,{for:A,children:[A,p.jsx(P1,{type:"checkbox",name:A,id:A,onChange:S=>{J(S.target.checked,S.target.name)}})]}))})]}),p.jsx(Yy,{children:a.length>0?a.map((A,S)=>p.jsx(p.Fragment,{children:p.jsxs(Xy,{onClick:()=>X(A),style:{backgroundImage:`url(${typeof A.image=="string"?A.image:A.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(W=>{if(W.name===A.name)return p.jsx(t0,{})}),O-A.createTime.seconds<259200&&p.jsx(e0,{children:"Новинка!"}),p.jsxs(Jy,{children:[p.jsx(Zy,{children:A.name.join(" ")}),p.jsxs("p",{children:[A.price," грн."]})]})]},S)})):p.jsxs(C9,{children:[p.jsx("p",{children:"Нічого не знайдено"}),p.jsx("p",{children:" (використайте фільтр пошуку)"})]})}),p.jsx(tC,{onClick:()=>{Le(),o(s+24)},children:"Завантажити більше"}),u&&p.jsx(lh,{card:d,closeModal:U})]})},k9=()=>{const[t,e]=I.useState([]),n=()=>{MS(xe(ie,"orders"),o=>{e(o.docs.map(a=>({...a.data(),id:a.id})).sort((a,l)=>a.postDate.seconds>l.postDate.seconds?-1:1))})},r=async o=>{await LS(Rt(ie,"orders",`${o}`))},i=async o=>{await Vi(Rt(ie,"orders",`${o}`),{status:"take"})},s=async o=>{await Vi(Rt(ie,"orders",`${o}`),{status:"send"})};return I.useEffect(()=>{n()},[]),p.jsx(IV,{children:t.map(o=>p.jsxs(TV,{style:o.status==="take"?{backgroundColor:"yellow"}:o.status==="send"?{backgroundColor:"green"}:{},children:[p.jsxs("p",{children:["Статус: ",o.status==="create"&&"Нове"," ",o.status==="take"&&"Прийняте",o.status==="send"&&"Відправлене"]}),p.jsxs("p",{children:["Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(o.postDate.seconds)]}),p.jsxs("p",{children:["ФІП: ",o.userFullName]}),p.jsxs("p",{children:["Email: ",o.userEmail]}),p.jsxs("p",{children:["Номер телефону:",o.userNumber]}),p.jsxs("p",{children:["Адрес Нової почти: ",o.userPostAdress]}),p.jsx("p",{children:"Список замовлення:"}),o.cashList.map(a=>p.jsxs(p.Fragment,{children:[p.jsx(SV,{style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`}}),p.jsxs("p",{children:["Код товару: ",a.number?a.number:"відсутній"]}),p.jsxs("p",{children:["Назва: ",a.name]}),p.jsxs("p",{children:["Ціна: ",a.price]})]})),p.jsxs("p",{children:["Додаткова інформація:",o.userMessege?o.userMessege:"Без додаткової інформації"]}),p.jsxs(CV,{children:[p.jsx(AV,{onClick:()=>r(o.id)}),p.jsx(kV,{onClick:()=>i(o.id)}),p.jsx(PV,{onClick:()=>s(o.id)})]})]}))})},P9=()=>{const{role:t}=vn(wn),e=kr(),r=Zn().state,i=es();I.useState([]);const[s,o]=I.useState(r?r.number:""),[a,l]=I.useState(r?r.image:""),[u,c]=I.useState(r?r.name.join(" "):""),[d,h]=I.useState(r?r.price:""),[g,_]=I.useState(r?r.producent:""),[y,w]=I.useState(r?typeof r.size!="string"?r.size.join("-"):r.size:""),[f,m]=I.useState(r?r.otherInfo:""),v=async E=>{try{r?(await $y(Rt(ie,"goods",`${E.id}`),E),alert("Change success")):(await xM(xe(ie,"goods"),E),alert("Add success"))}catch(x){console.error("Error adding document: ",x)}};return I.useEffect(()=>{document.getElementById("form").addEventListener("submit",function(x){x.preventDefault();const{image:C,name:b,price:O,sex:X,producent:U,category:fe,size:ke,otherInfo:K,number:ve}=this.elements,Ce=C.value.split(" ").filter(Fe=>{if(Fe)return Fe}),ut={number:ve.value,image:Ce,name:b.value.split(" "),price:O.value,sex:X.value||"",producent:U.value||"",category:fe.value,size:ke.value.split("-")||"",otherInfo:K.value||"",createTime:new Date};v(ut),this.reset()})},[i]),I.useEffect(()=>{t!="admin"&&e("/")}),p.jsxs(p.Fragment,{children:[p.jsxs(m9,{id:"form",children:[p.jsx("p",{children:"Номер товару"}),p.jsx(_f,{required:!0,name:"number",placeholder:"Додати номер товару",value:s,onChange:E=>o(E.target.value)}),p.jsx("p",{children:"Малюнок"}),p.jsx(_f,{required:!0,name:"image",placeholder:"Додати ссилку на картинку",value:a,onChange:E=>l(E.target.value)}),p.jsx("p",{children:"Назва"}),p.jsx(iu,{required:!0,name:"name",placeholder:"Додати назву",value:u,onChange:E=>c(E.target.value)}),p.jsx("p",{children:"Ціна в гривнях"}),p.jsx(iu,{required:!0,name:"price",placeholder:"Додати ціну",value:d,onChange:E=>h(E.target.value)}),p.jsx("p",{children:"Категорія"}),p.jsxs(rm,{id:"category",name:"category",children:[p.jsx(Bt,{value:"",children:"Вкажіть категорію"}),ca.map((E,x)=>E.category?p.jsx("optgroup",{label:`${E.name}`,children:E.category&&E.category.map(C=>p.jsx(Bt,{value:`${C}`,selected:r&&r.category===C&&"selected"||null,children:C},Sn()))},Sn()):p.jsx(Bt,{value:`${E.name}`,style:{fontWeight:"bolder"},selected:r&&r.category===E.name&&"selected"||null,children:E.name},Sn()))]}),p.jsx("p",{children:"Рід"}),p.jsxs(rm,{id:"sex",name:"sex",placeholder:"Вибрати рід",children:[p.jsx(Bt,{value:"",children:"Без роду"}),p.jsx(Bt,{value:"Чоловік",selected:r&&r.sex==="Чоловік"&&"selected"||null,children:"Чоловік"}),p.jsx(Bt,{value:"Жінка",selected:r&&r.sex==="Жінка"&&"selected"||null,children:"Жінка"}),p.jsx(Bt,{value:"Унісекс",selected:r&&r.sex==="Унісекс"&&"selected"||null,children:"Унісекс"})]}),p.jsx("p",{children:"Розмір"}),p.jsx(iu,{name:"size",placeholder:"Додати розмір",value:y,onChange:E=>w(E.target.value)}),p.jsx("p",{children:"Виробник"}),p.jsx(iu,{name:"producent",placeholder:"Додати виробника",value:g,onChange:E=>_(E.target.value)}),p.jsx("p",{children:"Додаткова інформація"}),p.jsx(_f,{name:"otherInfo",placeholder:"Додати додаткову інформацію",value:f,onChange:E=>m(E.target.value)}),p.jsx(nC,{children:r?"Зілити зміни":"Залити новий товар"})]}),p.jsx("h3",{children:"Замовлення"}),p.jsx(k9,{})]})},R9=()=>{const[t,e]=I.useState([]),[n,r]=I.useState(!1),[i,s]=I.useState(),[o,a]=I.useState(""),l=vn(wn),u=es();let c=new Date().getTime()/1e3;I.useEffect(()=>{qr.getItem("userEmail")&&qr.getItem("userPassword")&&d()},[]);const d=async()=>{const w=await qr.getItem("userEmail"),f=await qr.getItem("userPassword");u(Ky({email:w,password:f})),u(Qy(w))},h=w=>{s(w),r(!0)},g=()=>{r(!1)},_=async()=>{const w=Pe(xe(ie,"goods"),ze("createTime","desc"),Ne(24)),f=await Re(w),m=f.docs[f.docs.length-1];a(m);let v=[];f.docs.map(x=>{v.push({...x.data(),id:x.id})});const E=[...new Set(v)];e(E)},y=async()=>{const w=Pe(xe(ie,"goods"),ze("createTime","desc"),Jt(o),Ne(24)),f=await Re(w),m=f.docs[f.docs.length-1];a(m),f.docs.map(v=>{e(E=>[...E,{...v.data(),id:v.id}])})};return I.useEffect(()=>{_()},[]),p.jsxs(p.Fragment,{children:[p.jsx(Yy,{id:"cardList",children:t.length>0&&t.map((w,f)=>p.jsx(p.Fragment,{children:p.jsxs(Xy,{onClick:()=>h(w),style:{backgroundImage:`url(${typeof w.image=="string"?w.image:w.image[0]})`},children:[l.favoriteList&&l.favoriteList.map(m=>{if(m.name===w.name)return p.jsx(t0,{})}),c-w.createTime.seconds<259200&&p.jsx(e0,{children:"Новинка!"}),p.jsxs(Jy,{children:[p.jsx(Zy,{children:w.name.join(" ")}),p.jsxs("p",{children:[w.price," грн."]})]})]},w.id)}))}),p.jsx(tC,{onClick:y,children:"Завантажити більше"}),n&&p.jsx(lh,{card:i,closeModal:g})]})},b9=R.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,N9=R.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
  position: reletive;
  padding: 10px 0;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 30px 0;
    row-gap: 30px;
  }
`,O9=R.div`
  width: 20%;
  height: 90%;
  border-radius: 20px;
  border: 2px solid black;

  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 1440px) {
    width: 360px;
    height: 360px;
  }
  @media (min-width: 1440px) {
    width: 90px;
    height: 90px;
  }
`,D9=R.li`
  display: flex;
  justify-content: center;
  width: 90%;
  font-size: 8px;
  font-weight: bolder;
  justify-content: space-around;
  align-items: center;

  padding: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  background-position: 50% 50%;
  background-size: cover;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    font-size: 12px;
    width: 50%;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,L9=R.div`
  width: 50%;
`,M9=R.h3``,V9=R.p``,$9=R.button`
  height: 90%;
  width: 10%;
  background: black;
  border-radius: 28px;
  padding: 0;

  transition: background 0.25s;

  &:hover {
    background: red;
  }
  &:focus {
    background: red;
  }
`,j9=R(yg)`
  width: 15px;
  height: 15px;
  cursor: pointer;
  & path {
    stroke: white;
  }
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`,F9=R.button`
  display: flex;
  padding: 10px;
  transition: background 0.25s;
  font-size: 10px;

  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`,U9=R.textarea`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 50px;
  font-size: 8px;
  font-weight: bolder;
  justify-content: space-around;
  align-items: center;
  background: white;
  color: black;
  padding: 5px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #1a1a1a;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (min-width: 768px) {
    font-size: 12px;
    width: 50%;
    height: 100px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
    padding: 10px;
  }
`,z9=()=>{const{cashList:t}=vn(wn),e=es(),n=kr(),[r,i]=I.useState("");return p.jsxs(N9,{children:[p.jsx(b9,{children:"Список товарів"}),t.length>0?p.jsxs(p.Fragment,{children:[t.map((s,o)=>p.jsxs(D9,{children:[p.jsx(O9,{style:{backgroundImage:`url(${typeof s.image=="string"?s.image:s.image[0]})`}}),p.jsxs(L9,{children:[p.jsx(M9,{children:s.name.join(" ")}),p.jsxs(V9,{children:[s.price," грн."]})]}),p.jsx($9,{onClick:()=>e(YV(o)),children:p.jsx(j9,{})})]})),p.jsx(U9,{placeholder:"Додаткова інформація. Наприклад: колір, розмір.",onChange:s=>i(s.target.value)}),p.jsx(F9,{onClick:()=>n("/checkout",{state:{userMessege:r}}),children:"Перейти до оформлення відправки"})]}):"Корзина пуста"]})},B9=R.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    gap: 15px;
    margin-top: 15px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    margin-top: 15px;
  }
`,W9=R.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 42px;
  }
`,su=R.input`
  display: flex;
  width: 70%;
  max-height: 60px;
  padding: 5px;
  border-radius: 10px;
  background: #f9f9f9;
  color: #1a1a1a;
  cursor: pointer;
  padding: 10px;

  font-size: 10px;

  border: 2px solid #1a1a1a;
  &:hover {
    border-color: green;
  }
  &:focus {
    border-color: green;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    width: 50%;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
    width: 50%;
  }
`,Mo=R.div`
  width: 80%;
  display: flex;
  font-size: 10px;
  color: red;
  @media (min-width: 768px) {
    width: 50%;
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    width: 50%;
    font-size: 32px;
  }
`,q9=R.button`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,N1=R.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,H9=()=>{const{state:t}=Zn(),e=t.userMessege,n=vn(wn),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(""),[u,c]=I.useState(""),[d,h]=I.useState(""),[g,_]=I.useState(""),[y,w]=I.useState(""),[f,m]=I.useState(""),[v,E]=I.useState(!1),x=es(),C=kr(),b=async()=>{const K=await My(Rt(ie,"users",`${n.email}`));if(K.exists()){const{name:ve,userPostAdress:Ce,userNumber:ut,email:Fe}=K.data();l(Fe),i(ve),o(ut),c(Ce)}else console.log("No such document!")};I.useEffect(()=>{n.email&&b()},[n]);const O=K=>{i(K.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(K.target.value).toLowerCase())?h(""):h("Введіть повнe призвіще, ім'я, побатькові")},X=K=>{l(K.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(K.target.value).toLowerCase())?_(""):_("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},U=K=>{o(K.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(K.target.value))?w(""):w("Номер невірного формату (наприклад: '043*******')")},fe=K=>{c(K.target.value),K.target.value.length>0?m(""):m("Адрес відділення пошти пустий")},ke=async()=>{if(a&&r&&s&&u&&!g&&!y&&!d&&!f)try{const K=new Date,ve=K.getFullYear()+"-"+(K.getMonth()+1)+"-"+K.getDate()+" "+K.getHours()+":"+K.getMinutes()+":"+K.getSeconds();await $y(Rt(ie,"orders",`${ve}`),{userFullName:r,userNumber:s,userEmail:a,userPostAdress:u,postDate:ve,id:`${a}${ve}`,status:"create",cashList:n.cashList,userMessege:e}),x(wV()),C("/")}catch(K){console.log(K)}else E(!0)};return I.useEffect(()=>{!g&&!y&&!d&&!f&&E(!1)}),p.jsxs(B9,{id:"CheckoutForm",children:[p.jsx(W9,{children:"Контактні дані"}),p.jsx(su,{required:!0,name:"name",value:r,onChange:K=>{O(K)},placeholder:"Введіть ПІБ",style:d?{borderColor:"red"}:{}}),d&&p.jsx(Mo,{children:d}),p.jsx(su,{value:s,onChange:K=>{U(K)},placeholder:"Введіть контактний номер телефону",style:y?{borderColor:"red"}:{}}),y&&p.jsx(Mo,{children:y}),p.jsx(su,{required:!0,name:"email",value:a,onChange:K=>{X(K)},placeholder:"Введіть контактну електронну адресу",style:g?{borderColor:"red"}:{}}),g&&p.jsx(Mo,{children:g}),p.jsx(su,{value:u,onChange:K=>{fe(K)},placeholder:"Введіть адресу відділення пошти",style:f?{borderColor:"red"}:{}}),f&&p.jsx(Mo,{children:f}),p.jsx(Mo,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),p.jsx(N1,{children:"Для додаткової інформації чи відказу від замовлення"}),p.jsx(N1,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),p.jsx(q9,{onClick:ke,style:v?{background:"red"}:{},children:v?"Невірно заповнена форма":"Завершити оформлення замовлення"})]})};function G9(){return p.jsxs(Ak,{children:[p.jsxs(ir,{path:"/",element:p.jsx(p9,{}),children:[p.jsx(ir,{index:!0,element:p.jsx(R9,{})}),p.jsx(ir,{path:"category",element:p.jsx(I9,{})}),p.jsx(ir,{path:"search",element:p.jsx(A9,{})}),p.jsx(ir,{path:"admin",element:p.jsx(P9,{})}),p.jsx(ir,{path:"cashList",element:p.jsx(z9,{})}),p.jsx(ir,{path:"checkout",element:p.jsx(H9,{})})]}),p.jsx(ir,{path:"*",element:p.jsx(Tk,{to:"/"})})]})}var rC="persist/FLUSH",n0="persist/REHYDRATE",iC="persist/PAUSE",sC="persist/PERSIST",oC="persist/PURGE",r0="persist/REGISTER";function O1(t){return Y9(t)||Q9(t)||K9()}function K9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Q9(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function Y9(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function D1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function im(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?D1(n,!0).forEach(function(r){X9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function X9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var aC={registry:[],bootstrapped:!1},J9=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:aC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r0:return im({},e,{registry:[].concat(O1(e.registry),[n.key])});case n0:var r=e.registry.indexOf(n.key),i=O1(e.registry);return i.splice(r,1),im({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function Z9(t,e,n){var r=n||!1,i=Hy(J9,aC,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:r0,key:u})},o=function(u,c,d){var h={type:n0,payload:c,err:d,key:u};t.dispatch(h),i.dispatch(h),r&&a.getState().bootstrapped&&(r(),r=!1)},a=im({},i,{purge:function(){var u=[];return t.dispatch({type:oC,result:function(d){u.push(d)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:rC,result:function(d){u.push(d)}}),Promise.all(u)},pause:function(){t.dispatch({type:iC})},persist:function(){t.dispatch({type:sC,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const e6=BS({[Mc.name]:Mc.reducer}),lC=tV({reducer:e6,middleware:t=>t({serializableCheck:{ignoredActions:[rC,n0,iC,sC,oC,r0]}})});Z9(lC);wf.createRoot(document.getElementById("root")).render(p.jsx(Gt.StrictMode,{children:p.jsx(Ok,{children:p.jsx(NP,{store:lC,children:p.jsx(G9,{})})})}));
