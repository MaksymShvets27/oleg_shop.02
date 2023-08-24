var iA=Object.defineProperty;var sA=(t,e,n)=>e in t?iA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Io=(t,e,n)=>(sA(t,typeof e!="symbol"?e+"":e,n),n);function oA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pw={exports:{}},Mc={},Rw={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),aA=Symbol.for("react.portal"),lA=Symbol.for("react.fragment"),uA=Symbol.for("react.strict_mode"),cA=Symbol.for("react.profiler"),hA=Symbol.for("react.provider"),dA=Symbol.for("react.context"),fA=Symbol.for("react.forward_ref"),pA=Symbol.for("react.suspense"),mA=Symbol.for("react.memo"),gA=Symbol.for("react.lazy"),nv=Symbol.iterator;function yA(t){return t===null||typeof t!="object"?null:(t=nv&&t[nv]||t["@@iterator"],typeof t=="function"?t:null)}var bw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nw=Object.assign,Ow={};function ao(t,e,n){this.props=t,this.context=e,this.refs=Ow,this.updater=n||bw}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dw(){}Dw.prototype=ao.prototype;function im(t,e,n){this.props=t,this.context=e,this.refs=Ow,this.updater=n||bw}var sm=im.prototype=new Dw;sm.constructor=im;Nw(sm,ao.prototype);sm.isPureReactComponent=!0;var rv=Array.isArray,Lw=Object.prototype.hasOwnProperty,om={current:null},Mw={key:!0,ref:!0,__self:!0,__source:!0};function Vw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lw.call(e,r)&&!Mw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ka,type:t,key:s,ref:o,props:i,_owner:om.current}}function vA(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function am(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function _A(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iv=/\/+/g;function cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_A(""+t.key):e.toString(36)}function su(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case aA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cd(o,0):r,rv(i)?(n="",t!=null&&(n=t.replace(iv,"$&/")+"/"),su(i,e,n,"",function(u){return u})):i!=null&&(am(i)&&(i=vA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(iv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cd(s,a);o+=su(s,e,n,l,i)}else if(l=yA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cd(s,a++),o+=su(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(t,e,n){if(t==null)return t;var r=[],i=0;return su(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},ou={transition:null},EA={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:ou,ReactCurrentOwner:om};ue.Children={map:xl,forEach:function(t,e,n){xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xl(t,function(){e++}),e},toArray:function(t){return xl(t,function(e){return e})||[]},only:function(t){if(!am(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=ao;ue.Fragment=lA;ue.Profiler=cA;ue.PureComponent=im;ue.StrictMode=uA;ue.Suspense=pA;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EA;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Nw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=om.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Lw.call(e,l)&&!Mw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ka,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:dA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hA,_context:t},t.Consumer=t};ue.createElement=Vw;ue.createFactory=function(t){var e=Vw.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:fA,render:t}};ue.isValidElement=am;ue.lazy=function(t){return{$$typeof:gA,_payload:{_status:-1,_result:t},_init:wA}};ue.memo=function(t,e){return{$$typeof:mA,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=ou.transition;ou.transition={};try{t()}finally{ou.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ue.useContext=function(t){return Nt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ue.useId=function(){return Nt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ue.useRef=function(t){return Nt.current.useRef(t)};ue.useState=function(t){return Nt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Nt.current.useTransition()};ue.version="18.2.0";Rw.exports=ue;var I=Rw.exports;const $t=rm(I),IA=oA({__proto__:null,default:$t},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xA=I,TA=Symbol.for("react.element"),SA=Symbol.for("react.fragment"),AA=Object.prototype.hasOwnProperty,CA=xA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kA={key:!0,ref:!0,__self:!0,__source:!0};function $w(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)AA.call(e,r)&&!kA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TA,type:t,key:s,ref:o,props:i,_owner:CA.current}}Mc.Fragment=SA;Mc.jsx=$w;Mc.jsxs=$w;Pw.exports=Mc;var g=Pw.exports,vf={},jw={exports:{}},Yt={},Fw={exports:{}},Uw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,K){var Y=N.length;N.push(K);e:for(;0<Y;){var _e=Y-1>>>1,L=N[_e];if(0<i(L,K))N[_e]=K,N[Y]=L,Y=_e;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var K=N[0],Y=N.pop();if(Y!==K){N[0]=Y;e:for(var _e=0,L=N.length,j=L>>>1;_e<j;){var F=2*(_e+1)-1,X=N[F],x=F+1,ae=N[x];if(0>i(X,Y))x<L&&0>i(ae,X)?(N[_e]=ae,N[x]=Y,_e=x):(N[_e]=X,N[F]=Y,_e=F);else if(x<L&&0>i(ae,Y))N[_e]=ae,N[x]=Y,_e=x;else break e}}return K}function i(N,K){var Y=N.sortIndex-K.sortIndex;return Y!==0?Y:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=N)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function E(N){if(y=!1,_(N),!v)if(n(l)!==null)v=!0,oe(T);else{var K=n(u);K!==null&&ce(E,K.startTime-N)}}function T(N,K){v=!1,y&&(y=!1,m(P),P=-1),p=!0;var Y=d;try{for(_(K),h=n(l);h!==null&&(!(h.expirationTime>K)||N&&!z());){var _e=h.callback;if(typeof _e=="function"){h.callback=null,d=h.priorityLevel;var L=_e(h.expirationTime<=K);K=t.unstable_now(),typeof L=="function"?h.callback=L:h===n(l)&&r(l),_(K)}else r(l);h=n(l)}if(h!==null)var j=!0;else{var F=n(u);F!==null&&ce(E,F.startTime-K),j=!1}return j}finally{h=null,d=Y,p=!1}}var S=!1,b=null,P=-1,G=5,$=-1;function z(){return!(t.unstable_now()-$<G)}function fe(){if(b!==null){var N=t.unstable_now();$=N;var K=!0;try{K=b(!0,N)}finally{K?B():(S=!1,b=null)}}else S=!1}var B;if(typeof f=="function")B=function(){f(fe)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,J=W.port2;W.port1.onmessage=fe,B=function(){J.postMessage(null)}}else B=function(){w(fe,0)};function oe(N){b=N,S||(S=!0,B())}function ce(N,K){P=w(function(){N(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,oe(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var Y=d;d=K;try{return N()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Y=d;d=N;try{return K()}finally{d=Y}},t.unstable_scheduleCallback=function(N,K,Y){var _e=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_e+Y:_e):Y=_e,N){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,N={id:c++,callback:K,priorityLevel:N,startTime:Y,expirationTime:L,sortIndex:-1},Y>_e?(N.sortIndex=Y,e(u,N),n(l)===null&&N===n(u)&&(y?(m(P),P=-1):y=!0,ce(E,Y-_e))):(N.sortIndex=L,e(l,N),v||p||(v=!0,oe(T))),N},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(N){var K=d;return function(){var Y=d;d=K;try{return N.apply(this,arguments)}finally{d=Y}}}})(Uw);Fw.exports=Uw;var PA=Fw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zw=I,Gt=PA;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bw=new Set,ua={};function Hi(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(ua[t]=e,t=0;t<e.length;t++)Bw.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=Object.prototype.hasOwnProperty,RA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sv={},ov={};function bA(t){return _f.call(ov,t)?!0:_f.call(sv,t)?!1:RA.test(t)?ov[t]=!0:(sv[t]=!0,!1)}function NA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OA(t,e,n,r){if(e===null||typeof e>"u"||NA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var lm=/[\-:]([a-z])/g;function um(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lm,um);dt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lm,um);dt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lm,um);dt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function cm(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OA(e,n,i,r)&&(n=null),r||i===null?bA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),hm=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),Ww=Symbol.for("react.provider"),qw=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),fm=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),Hw=Symbol.for("react.offscreen"),av=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,hd;function Do(t){if(hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hd=e&&e[1]||""}return`
`+hd+t}var dd=!1;function fd(t,e){if(!t||dd)return"";dd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function DA(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=fd(t.type,!1),t;case 11:return t=fd(t.type.render,!1),t;case 1:return t=fd(t.type,!0),t;default:return""}}function xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case us:return"Portal";case wf:return"Profiler";case hm:return"StrictMode";case Ef:return"Suspense";case If:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qw:return(t.displayName||"Context")+".Consumer";case Ww:return(t._context.displayName||"Context")+".Provider";case dm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fm:return e=t.displayName||null,e!==null?e:xf(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return xf(t(e))}catch{}}return null}function LA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xf(e);case 8:return e===hm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MA(t){var e=Gw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=MA(t))}function Kw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tf(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qw(t,e){e=e.checked,e!=null&&cm(t,"checked",e,!1)}function Sf(t,e){Qw(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Af(t,e.type,n):e.hasOwnProperty("defaultValue")&&Af(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Af(t,e,n){(e!=="number"||Cu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Lo(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function Yw(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,Jw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VA=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){VA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function Zw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function e1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $A=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pf(t,e){if(e){if($A[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=null;function pm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nf=null,Ss=null,As=null;function dv(t){if(t=Xa(t)){if(typeof Nf!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Uc(e),Nf(t.stateNode,t.type,e))}}function t1(t){Ss?As?As.push(t):As=[t]:Ss=t}function n1(){if(Ss){var t=Ss,e=As;if(As=Ss=null,dv(t),e)for(t=0;t<e.length;t++)dv(e[t])}}function r1(t,e){return t(e)}function i1(){}var pd=!1;function s1(t,e,n){if(pd)return t(e,n);pd=!0;try{return r1(t,e,n)}finally{pd=!1,(Ss!==null||As!==null)&&(i1(),n1())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Of=!1;if(ar)try{var To={};Object.defineProperty(To,"passive",{get:function(){Of=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Of=!1}function jA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qo=!1,ku=null,Pu=!1,Df=null,FA={onError:function(t){Qo=!0,ku=t}};function UA(t,e,n,r,i,s,o,a,l){Qo=!1,ku=null,jA.apply(FA,arguments)}function zA(t,e,n,r,i,s,o,a,l){if(UA.apply(this,arguments),Qo){if(Qo){var u=ku;Qo=!1,ku=null}else throw Error(k(198));Pu||(Pu=!0,Df=u)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fv(t){if(Gi(t)!==t)throw Error(k(188))}function BA(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fv(i),t;if(s===r)return fv(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function a1(t){return t=BA(t),t!==null?l1(t):null}function l1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=l1(t);if(e!==null)return e;t=t.sibling}return null}var u1=Gt.unstable_scheduleCallback,pv=Gt.unstable_cancelCallback,WA=Gt.unstable_shouldYield,qA=Gt.unstable_requestPaint,ze=Gt.unstable_now,HA=Gt.unstable_getCurrentPriorityLevel,mm=Gt.unstable_ImmediatePriority,c1=Gt.unstable_UserBlockingPriority,Ru=Gt.unstable_NormalPriority,GA=Gt.unstable_LowPriority,h1=Gt.unstable_IdlePriority,Vc=null,Ln=null;function KA(t){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:XA,QA=Math.log,YA=Math.LN2;function XA(t){return t>>>=0,t===0?32:31-(QA(t)/YA|0)|0}var Cl=64,kl=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mo(a):(s&=o,s!==0&&(r=Mo(s)))}else o=n&~i,o!==0?r=Mo(o):s!==0&&(r=Mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function JA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d1(){var t=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),t}function md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function eC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ee=0;function f1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p1,ym,m1,g1,y1,Mf=!1,Pl=[],Fr=null,Ur=null,zr=null,da=new Map,fa=new Map,kr=[],tC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mv(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function So(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nC(t,e,n,r,i){switch(e){case"focusin":return Fr=So(Fr,t,e,n,r,i),!0;case"dragenter":return Ur=So(Ur,t,e,n,r,i),!0;case"mouseover":return zr=So(zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return da.set(s,So(da.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fa.set(s,So(fa.get(s)||null,t,e,n,r,i)),!0}return!1}function v1(t){var e=Ei(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=o1(n),e!==null){t.blockedOn=e,y1(t.priority,function(){m1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bf=r,n.target.dispatchEvent(r),bf=null}else return e=Xa(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function gv(t,e,n){au(t)&&n.delete(e)}function rC(){Mf=!1,Fr!==null&&au(Fr)&&(Fr=null),Ur!==null&&au(Ur)&&(Ur=null),zr!==null&&au(zr)&&(zr=null),da.forEach(gv),fa.forEach(gv)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,rC)))}function pa(t){function e(i){return Ao(i,t)}if(0<Pl.length){Ao(Pl[0],t);for(var n=1;n<Pl.length;n++){var r=Pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&Ao(Fr,t),Ur!==null&&Ao(Ur,t),zr!==null&&Ao(zr,t),da.forEach(e),fa.forEach(e),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)v1(n),n.blockedOn===null&&kr.shift()}var Cs=vr.ReactCurrentBatchConfig,Nu=!0;function iC(t,e,n,r){var i=Ee,s=Cs.transition;Cs.transition=null;try{Ee=1,vm(t,e,n,r)}finally{Ee=i,Cs.transition=s}}function sC(t,e,n,r){var i=Ee,s=Cs.transition;Cs.transition=null;try{Ee=4,vm(t,e,n,r)}finally{Ee=i,Cs.transition=s}}function vm(t,e,n,r){if(Nu){var i=Vf(t,e,n,r);if(i===null)Sd(t,e,r,Ou,n),mv(t,r);else if(nC(i,t,e,n,r))r.stopPropagation();else if(mv(t,r),e&4&&-1<tC.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&p1(s),s=Vf(t,e,n,r),s===null&&Sd(t,e,r,Ou,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var Ou=null;function Vf(t,e,n,r){if(Ou=null,t=pm(r),t=Ei(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ou=t,null}function _1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HA()){case mm:return 1;case c1:return 4;case Ru:case GA:return 16;case h1:return 536870912;default:return 16}default:return 16}}var Lr=null,_m=null,lu=null;function w1(){if(lu)return lu;var t,e=_m,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lu=i.slice(t,1<r?1-r:void 0)}function uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function yv(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:yv,this.isPropagationStopped=yv,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wm=Xt(lo),Ya=Me({},lo,{view:0,detail:0}),oC=Xt(Ya),gd,yd,Co,$c=Me({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Em,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(gd=t.screenX-Co.screenX,yd=t.screenY-Co.screenY):yd=gd=0,Co=t),gd)},movementY:function(t){return"movementY"in t?t.movementY:yd}}),vv=Xt($c),aC=Me({},$c,{dataTransfer:0}),lC=Xt(aC),uC=Me({},Ya,{relatedTarget:0}),vd=Xt(uC),cC=Me({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),hC=Xt(cC),dC=Me({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fC=Xt(dC),pC=Me({},lo,{data:0}),_v=Xt(pC),mC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yC[t])?!!e[t]:!1}function Em(){return vC}var _C=Me({},Ya,{key:function(t){if(t.key){var e=mC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Em,charCode:function(t){return t.type==="keypress"?uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wC=Xt(_C),EC=Me({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=Xt(EC),IC=Me({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Em}),xC=Xt(IC),TC=Me({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),SC=Xt(TC),AC=Me({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CC=Xt(AC),kC=[9,13,27,32],Im=ar&&"CompositionEvent"in window,Yo=null;ar&&"documentMode"in document&&(Yo=document.documentMode);var PC=ar&&"TextEvent"in window&&!Yo,E1=ar&&(!Im||Yo&&8<Yo&&11>=Yo),Ev=String.fromCharCode(32),Iv=!1;function I1(t,e){switch(t){case"keyup":return kC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function RC(t,e){switch(t){case"compositionend":return x1(e);case"keypress":return e.which!==32?null:(Iv=!0,Ev);case"textInput":return t=e.data,t===Ev&&Iv?null:t;default:return null}}function bC(t,e){if(hs)return t==="compositionend"||!Im&&I1(t,e)?(t=w1(),lu=_m=Lr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E1&&e.locale!=="ko"?null:e.data;default:return null}}var NC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NC[t.type]:e==="textarea"}function T1(t,e,n,r){t1(r),e=Du(e,"onChange"),0<e.length&&(n=new wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xo=null,ma=null;function OC(t){L1(t,0)}function jc(t){var e=ps(t);if(Kw(e))return t}function DC(t,e){if(t==="change")return e}var S1=!1;if(ar){var _d;if(ar){var wd="oninput"in document;if(!wd){var Tv=document.createElement("div");Tv.setAttribute("oninput","return;"),wd=typeof Tv.oninput=="function"}_d=wd}else _d=!1;S1=_d&&(!document.documentMode||9<document.documentMode)}function Sv(){Xo&&(Xo.detachEvent("onpropertychange",A1),ma=Xo=null)}function A1(t){if(t.propertyName==="value"&&jc(ma)){var e=[];T1(e,ma,t,pm(t)),s1(OC,e)}}function LC(t,e,n){t==="focusin"?(Sv(),Xo=e,ma=n,Xo.attachEvent("onpropertychange",A1)):t==="focusout"&&Sv()}function MC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(ma)}function VC(t,e){if(t==="click")return jc(e)}function $C(t,e){if(t==="input"||t==="change")return jc(e)}function jC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:jC;function ga(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_f.call(e,i)||!In(t[i],e[i]))return!1}return!0}function Av(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cv(t,e){var n=Av(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Av(n)}}function C1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k1(){for(var t=window,e=Cu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cu(t.document)}return e}function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FC(t){var e=k1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C1(n.ownerDocument.documentElement,n)){if(r!==null&&xm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cv(n,s);var o=Cv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UC=ar&&"documentMode"in document&&11>=document.documentMode,ds=null,$f=null,Jo=null,jf=!1;function kv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||ds==null||ds!==Cu(r)||(r=ds,"selectionStart"in r&&xm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&ga(Jo,r)||(Jo=r,r=Du($f,"onSelect"),0<r.length&&(e=new wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ds)))}function bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Ed={},P1={};ar&&(P1=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Fc(t){if(Ed[t])return Ed[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P1)return Ed[t]=e[n];return t}var R1=Fc("animationend"),b1=Fc("animationiteration"),N1=Fc("animationstart"),O1=Fc("transitionend"),D1=new Map,Pv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(t,e){D1.set(t,e),Hi(e,[t])}for(var Id=0;Id<Pv.length;Id++){var xd=Pv[Id],zC=xd.toLowerCase(),BC=xd[0].toUpperCase()+xd.slice(1);ci(zC,"on"+BC)}ci(R1,"onAnimationEnd");ci(b1,"onAnimationIteration");ci(N1,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(O1,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Rv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zA(r,e,void 0,t),t.currentTarget=null}function L1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rv(i,a,u),s=l}}}if(Pu)throw t=Df,Pu=!1,Df=null,t}function Ce(t,e){var n=e[Wf];n===void 0&&(n=e[Wf]=new Set);var r=t+"__bubble";n.has(r)||(M1(e,t,2,!1),n.add(r))}function Td(t,e,n){var r=0;e&&(r|=4),M1(n,t,r,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Nl]){t[Nl]=!0,Bw.forEach(function(n){n!=="selectionchange"&&(WC.has(n)||Td(n,!1,t),Td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,Td("selectionchange",!1,e))}}function M1(t,e,n,r){switch(_1(e)){case 1:var i=iC;break;case 4:i=sC;break;default:i=vm}n=i.bind(null,e,n,t),i=void 0,!Of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ei(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}s1(function(){var u=s,c=pm(n),h=[];e:{var d=D1.get(t);if(d!==void 0){var p=wm,v=t;switch(t){case"keypress":if(uu(n)===0)break e;case"keydown":case"keyup":p=wC;break;case"focusin":v="focus",p=vd;break;case"focusout":v="blur",p=vd;break;case"beforeblur":case"afterblur":p=vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xC;break;case R1:case b1:case N1:p=hC;break;case O1:p=SC;break;case"scroll":p=oC;break;case"wheel":p=CC;break;case"copy":case"cut":case"paste":p=fC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wv}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,_;f!==null;){_=f;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,m!==null&&(E=ha(f,m),E!=null&&y.push(va(f,E,_)))),w)break;f=f.return}0<y.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==bf&&(v=n.relatedTarget||n.fromElement)&&(Ei(v)||v[lr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Ei(v):null,v!==null&&(w=Gi(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(y=vv,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=wv,E="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?d:ps(p),_=v==null?d:ps(v),d=new y(E,f+"leave",p,n,c),d.target=w,d.relatedTarget=_,E=null,Ei(c)===u&&(y=new y(m,f+"enter",v,n,c),y.target=_,y.relatedTarget=w,E=y),w=E,p&&v)t:{for(y=p,m=v,f=0,_=y;_;_=rs(_))f++;for(_=0,E=m;E;E=rs(E))_++;for(;0<f-_;)y=rs(y),f--;for(;0<_-f;)m=rs(m),_--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=rs(y),m=rs(m)}y=null}else y=null;p!==null&&bv(h,d,p,y,!1),v!==null&&w!==null&&bv(h,w,v,y,!0)}}e:{if(d=u?ps(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=DC;else if(xv(d))if(S1)T=$C;else{T=MC;var S=LC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=VC);if(T&&(T=T(t,u))){T1(h,T,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Af(d,"number",d.value)}switch(S=u?ps(u):window,t){case"focusin":(xv(S)||S.contentEditable==="true")&&(ds=S,$f=u,Jo=null);break;case"focusout":Jo=$f=ds=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,kv(h,n,c);break;case"selectionchange":if(UC)break;case"keydown":case"keyup":kv(h,n,c)}var b;if(Im)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else hs?I1(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(E1&&n.locale!=="ko"&&(hs||P!=="onCompositionStart"?P==="onCompositionEnd"&&hs&&(b=w1()):(Lr=c,_m="value"in Lr?Lr.value:Lr.textContent,hs=!0)),S=Du(u,P),0<S.length&&(P=new _v(P,t,null,n,c),h.push({event:P,listeners:S}),b?P.data=b:(b=x1(n),b!==null&&(P.data=b)))),(b=PC?RC(t,n):bC(t,n))&&(u=Du(u,"onBeforeInput"),0<u.length&&(c=new _v("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=b))}L1(h,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Du(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ha(t,n),s!=null&&r.unshift(va(t,s,i)),s=ha(t,e),s!=null&&r.push(va(t,s,i))),t=t.return}return r}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ha(n,s),l!=null&&o.unshift(va(n,l,a))):i||(l=ha(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qC=/\r\n?/g,HC=/\u0000|\uFFFD/g;function Nv(t){return(typeof t=="string"?t:""+t).replace(qC,`
`).replace(HC,"")}function Ol(t,e,n){if(e=Nv(e),Nv(t)!==e&&n)throw Error(k(425))}function Lu(){}var Ff=null,Uf=null;function zf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bf=typeof setTimeout=="function"?setTimeout:void 0,GC=typeof clearTimeout=="function"?clearTimeout:void 0,Ov=typeof Promise=="function"?Promise:void 0,KC=typeof queueMicrotask=="function"?queueMicrotask:typeof Ov<"u"?function(t){return Ov.resolve(null).then(t).catch(QC)}:Bf;function QC(t){setTimeout(function(){throw t})}function Ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),bn="__reactFiber$"+uo,_a="__reactProps$"+uo,lr="__reactContainer$"+uo,Wf="__reactEvents$"+uo,YC="__reactListeners$"+uo,XC="__reactHandles$"+uo;function Ei(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dv(t);t!==null;){if(n=t[bn])return n;t=Dv(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[bn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Uc(t){return t[_a]||null}var qf=[],ms=-1;function hi(t){return{current:t}}function Pe(t){0>ms||(t.current=qf[ms],qf[ms]=null,ms--)}function Ae(t,e){ms++,qf[ms]=t.current,t.current=e}var ri={},At=hi(ri),jt=hi(!1),Oi=ri;function Us(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Mu(){Pe(jt),Pe(At)}function Lv(t,e,n){if(At.current!==ri)throw Error(k(168));Ae(At,e),Ae(jt,n)}function V1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,LA(t)||"Unknown",i));return Me({},n,r)}function Vu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,Oi=At.current,Ae(At,t),Ae(jt,jt.current),!0}function Mv(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=V1(t,e,Oi),r.__reactInternalMemoizedMergedChildContext=t,Pe(jt),Pe(At),Ae(At,t)):Pe(jt),Ae(jt,n)}var Xn=null,zc=!1,Cd=!1;function $1(t){Xn===null?Xn=[t]:Xn.push(t)}function JC(t){zc=!0,$1(t)}function di(){if(!Cd&&Xn!==null){Cd=!0;var t=0,e=Ee;try{var n=Xn;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,zc=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),u1(mm,di),i}finally{Ee=e,Cd=!1}}return null}var gs=[],ys=0,$u=null,ju=0,Zt=[],en=0,Di=null,Zn=1,er="";function yi(t,e){gs[ys++]=ju,gs[ys++]=$u,$u=t,ju=e}function j1(t,e,n){Zt[en++]=Zn,Zt[en++]=er,Zt[en++]=Di,Di=t;var r=Zn;t=er;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zn=1<<32-wn(e)+i|n<<i|r,er=s+t}else Zn=1<<s|n<<i|r,er=t}function Tm(t){t.return!==null&&(yi(t,1),j1(t,1,0))}function Sm(t){for(;t===$u;)$u=gs[--ys],gs[ys]=null,ju=gs[--ys],gs[ys]=null;for(;t===Di;)Di=Zt[--en],Zt[en]=null,er=Zt[--en],Zt[en]=null,Zn=Zt[--en],Zt[en]=null}var Ht=null,Wt=null,Oe=!1,yn=null;function F1(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Wt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Di!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Wt=null,!0):!1;default:return!1}}function Hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gf(t){if(Oe){var e=Wt;if(e){var n=e;if(!Vv(t,e)){if(Hf(t))throw Error(k(418));e=Br(n.nextSibling);var r=Ht;e&&Vv(t,e)?F1(r,n):(t.flags=t.flags&-4097|2,Oe=!1,Ht=t)}}else{if(Hf(t))throw Error(k(418));t.flags=t.flags&-4097|2,Oe=!1,Ht=t}}}function $v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Dl(t){if(t!==Ht)return!1;if(!Oe)return $v(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zf(t.type,t.memoizedProps)),e&&(e=Wt)){if(Hf(t))throw U1(),Error(k(418));for(;e;)F1(t,e),e=Br(e.nextSibling)}if($v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Ht?Br(t.stateNode.nextSibling):null;return!0}function U1(){for(var t=Wt;t;)t=Br(t.nextSibling)}function zs(){Wt=Ht=null,Oe=!1}function Am(t){yn===null?yn=[t]:yn.push(t)}var ZC=vr.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fu=hi(null),Uu=null,vs=null,Cm=null;function km(){Cm=vs=Uu=null}function Pm(t){var e=Fu.current;Pe(Fu),t._currentValue=e}function Kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Uu=t,Cm=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Cm!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Uu===null)throw Error(k(308));vs=t,Uu.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Ii=null;function Rm(t){Ii===null?Ii=[t]:Ii.push(t)}function z1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,Rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gm(t,n)}}function jv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zu(t,e,n,r){var i=t.updateQueue;Cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=Me({},h,d);break e;case 2:Cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mi|=o,t.lanes=o,t.memoizedState=h}}function Fv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var W1=new zw.Component().refs;function Qf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bc={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Hr(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(En(e,t,i,r),cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Hr(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(En(e,t,i,r),cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Hr(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wr(t,i,r),e!==null&&(En(e,t,r,n),cu(e,t,r))}};function Uv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(i,s):!0}function q1(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Ft(e)?Oi:At.current,r=e.contextTypes,s=(r=r!=null)?Us(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bc.enqueueReplaceState(e,e.state,null)}function Yf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=W1,bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Ft(e)?Oi:At.current,i.context=Us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bc.enqueueReplaceState(i,i.state,null),zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===W1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Ll(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bv(t){var e=t._init;return e(t._payload)}function H1(t){function e(m,f){if(t){var _=m.deletions;_===null?(m.deletions=[f],m.flags|=16):_.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Gr(m,f),m.index=0,m.sibling=null,m}function s(m,f,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<f?(m.flags|=2,f):_):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,_,E){return f===null||f.tag!==6?(f=Dd(_,m.mode,E),f.return=m,f):(f=i(f,_),f.return=m,f)}function l(m,f,_,E){var T=_.type;return T===cs?c(m,f,_.props.children,E,_.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&Bv(T)===f.type)?(E=i(f,_.props),E.ref=ko(m,f,_),E.return=m,E):(E=gu(_.type,_.key,_.props,null,m.mode,E),E.ref=ko(m,f,_),E.return=m,E)}function u(m,f,_,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==_.containerInfo||f.stateNode.implementation!==_.implementation?(f=Ld(_,m.mode,E),f.return=m,f):(f=i(f,_.children||[]),f.return=m,f)}function c(m,f,_,E,T){return f===null||f.tag!==7?(f=Pi(_,m.mode,E,T),f.return=m,f):(f=i(f,_),f.return=m,f)}function h(m,f,_){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Dd(""+f,m.mode,_),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Tl:return _=gu(f.type,f.key,f.props,null,m.mode,_),_.ref=ko(m,null,f),_.return=m,_;case us:return f=Ld(f,m.mode,_),f.return=m,f;case Ar:var E=f._init;return h(m,E(f._payload),_)}if(Lo(f)||xo(f))return f=Pi(f,m.mode,_,null),f.return=m,f;Ll(m,f)}return null}function d(m,f,_,E){var T=f!==null?f.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:a(m,f,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Tl:return _.key===T?l(m,f,_,E):null;case us:return _.key===T?u(m,f,_,E):null;case Ar:return T=_._init,d(m,f,T(_._payload),E)}if(Lo(_)||xo(_))return T!==null?null:c(m,f,_,E,null);Ll(m,_)}return null}function p(m,f,_,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(_)||null,a(f,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Tl:return m=m.get(E.key===null?_:E.key)||null,l(f,m,E,T);case us:return m=m.get(E.key===null?_:E.key)||null,u(f,m,E,T);case Ar:var S=E._init;return p(m,f,_,S(E._payload),T)}if(Lo(E)||xo(E))return m=m.get(_)||null,c(f,m,E,T,null);Ll(f,E)}return null}function v(m,f,_,E){for(var T=null,S=null,b=f,P=f=0,G=null;b!==null&&P<_.length;P++){b.index>P?(G=b,b=null):G=b.sibling;var $=d(m,b,_[P],E);if($===null){b===null&&(b=G);break}t&&b&&$.alternate===null&&e(m,b),f=s($,f,P),S===null?T=$:S.sibling=$,S=$,b=G}if(P===_.length)return n(m,b),Oe&&yi(m,P),T;if(b===null){for(;P<_.length;P++)b=h(m,_[P],E),b!==null&&(f=s(b,f,P),S===null?T=b:S.sibling=b,S=b);return Oe&&yi(m,P),T}for(b=r(m,b);P<_.length;P++)G=p(b,m,P,_[P],E),G!==null&&(t&&G.alternate!==null&&b.delete(G.key===null?P:G.key),f=s(G,f,P),S===null?T=G:S.sibling=G,S=G);return t&&b.forEach(function(z){return e(m,z)}),Oe&&yi(m,P),T}function y(m,f,_,E){var T=xo(_);if(typeof T!="function")throw Error(k(150));if(_=T.call(_),_==null)throw Error(k(151));for(var S=T=null,b=f,P=f=0,G=null,$=_.next();b!==null&&!$.done;P++,$=_.next()){b.index>P?(G=b,b=null):G=b.sibling;var z=d(m,b,$.value,E);if(z===null){b===null&&(b=G);break}t&&b&&z.alternate===null&&e(m,b),f=s(z,f,P),S===null?T=z:S.sibling=z,S=z,b=G}if($.done)return n(m,b),Oe&&yi(m,P),T;if(b===null){for(;!$.done;P++,$=_.next())$=h(m,$.value,E),$!==null&&(f=s($,f,P),S===null?T=$:S.sibling=$,S=$);return Oe&&yi(m,P),T}for(b=r(m,b);!$.done;P++,$=_.next())$=p(b,m,P,$.value,E),$!==null&&(t&&$.alternate!==null&&b.delete($.key===null?P:$.key),f=s($,f,P),S===null?T=$:S.sibling=$,S=$);return t&&b.forEach(function(fe){return e(m,fe)}),Oe&&yi(m,P),T}function w(m,f,_,E){if(typeof _=="object"&&_!==null&&_.type===cs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Tl:e:{for(var T=_.key,S=f;S!==null;){if(S.key===T){if(T=_.type,T===cs){if(S.tag===7){n(m,S.sibling),f=i(S,_.props.children),f.return=m,m=f;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ar&&Bv(T)===S.type){n(m,S.sibling),f=i(S,_.props),f.ref=ko(m,S,_),f.return=m,m=f;break e}n(m,S);break}else e(m,S);S=S.sibling}_.type===cs?(f=Pi(_.props.children,m.mode,E,_.key),f.return=m,m=f):(E=gu(_.type,_.key,_.props,null,m.mode,E),E.ref=ko(m,f,_),E.return=m,m=E)}return o(m);case us:e:{for(S=_.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===_.containerInfo&&f.stateNode.implementation===_.implementation){n(m,f.sibling),f=i(f,_.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Ld(_,m.mode,E),f.return=m,m=f}return o(m);case Ar:return S=_._init,w(m,f,S(_._payload),E)}if(Lo(_))return v(m,f,_,E);if(xo(_))return y(m,f,_,E);Ll(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,_),f.return=m,m=f):(n(m,f),f=Dd(_,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return w}var Bs=H1(!0),G1=H1(!1),Ja={},Mn=hi(Ja),wa=hi(Ja),Ea=hi(Ja);function xi(t){if(t===Ja)throw Error(k(174));return t}function Nm(t,e){switch(Ae(Ea,e),Ae(wa,t),Ae(Mn,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}Pe(Mn),Ae(Mn,e)}function Ws(){Pe(Mn),Pe(wa),Pe(Ea)}function K1(t){xi(Ea.current);var e=xi(Mn.current),n=kf(e,t.type);e!==n&&(Ae(wa,t),Ae(Mn,n))}function Om(t){wa.current===t&&(Pe(Mn),Pe(wa))}var De=hi(0);function Bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Dm(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var hu=vr.ReactCurrentDispatcher,Pd=vr.ReactCurrentBatchConfig,Li=0,Le=null,Ye=null,et=null,Wu=!1,Zo=!1,Ia=0,ek=0;function ft(){throw Error(k(321))}function Lm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Mm(t,e,n,r,i,s){if(Li=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hu.current=t===null||t.memoizedState===null?ik:sk,t=n(r,i),Zo){s=0;do{if(Zo=!1,Ia=0,25<=s)throw Error(k(301));s+=1,et=Ye=null,e.updateQueue=null,hu.current=ok,t=n(r,i)}while(Zo)}if(hu.current=qu,e=Ye!==null&&Ye.next!==null,Li=0,et=Ye=Le=null,Wu=!1,e)throw Error(k(300));return t}function Vm(){var t=Ia!==0;return Ia=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Le.memoizedState=et=t:et=et.next=t,et}function an(){if(Ye===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=et===null?Le.memoizedState:et.next;if(e!==null)et=e,Ye=t;else{if(t===null)throw Error(k(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},et===null?Le.memoizedState=et=t:et=et.next=t}return et}function xa(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=an(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Li&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Le.lanes|=c,Mi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,In(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,Mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bd(t){var e=an(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Q1(){}function Y1(t,e){var n=Le,r=an(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,$m(Z1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Ta(9,J1.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(k(349));Li&30||X1(n,e,i)}return i}function X1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function J1(t,e,n,r){e.value=n,e.getSnapshot=r,eE(e)&&tE(t)}function Z1(t,e,n){return n(function(){eE(e)&&tE(t)})}function eE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function tE(t){var e=ur(t,1);e!==null&&En(e,t,1,-1)}function Wv(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=rk.bind(null,Le,t),[e.memoizedState,t]}function Ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nE(){return an().memoizedState}function du(t,e,n,r){var i=kn();Le.flags|=t,i.memoizedState=Ta(1|e,n,void 0,r===void 0?null:r)}function Wc(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&Lm(r,o.deps)){i.memoizedState=Ta(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ta(1|e,n,s,r)}function qv(t,e){return du(8390656,8,t,e)}function $m(t,e){return Wc(2048,8,t,e)}function rE(t,e){return Wc(4,2,t,e)}function iE(t,e){return Wc(4,4,t,e)}function sE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oE(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,sE.bind(null,e,t),n)}function jm(){}function aE(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lE(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uE(t,e,n){return Li&21?(In(n,e)||(n=d1(),Le.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function tk(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{Ee=n,Pd.transition=r}}function cE(){return an().memoizedState}function nk(t,e,n){var r=Hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hE(t))dE(e,n);else if(n=z1(t,e,n,r),n!==null){var i=bt();En(n,t,r,i),fE(n,e,r)}}function rk(t,e,n){var r=Hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hE(t))dE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,In(a,o)){var l=e.interleaved;l===null?(i.next=i,Rm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=z1(t,e,i,r),n!==null&&(i=bt(),En(n,t,r,i),fE(n,e,r))}}function hE(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function dE(t,e){Zo=Wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gm(t,n)}}var qu={readContext:on,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},ik={readContext:on,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:qv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,du(4194308,4,sE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return du(4194308,4,t,e)},useInsertionEffect:function(t,e){return du(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nk.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Wv,useDebugValue:jm,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Wv(!1),e=t[0];return t=tk.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=kn();if(Oe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),tt===null)throw Error(k(349));Li&30||X1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qv(Z1.bind(null,r,s,t),[t]),r.flags|=2048,Ta(9,J1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=tt.identifierPrefix;if(Oe){var n=er,r=Zn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ek++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sk={readContext:on,useCallback:aE,useContext:on,useEffect:$m,useImperativeHandle:oE,useInsertionEffect:rE,useLayoutEffect:iE,useMemo:lE,useReducer:Rd,useRef:nE,useState:function(){return Rd(xa)},useDebugValue:jm,useDeferredValue:function(t){var e=an();return uE(e,Ye.memoizedState,t)},useTransition:function(){var t=Rd(xa)[0],e=an().memoizedState;return[t,e]},useMutableSource:Q1,useSyncExternalStore:Y1,useId:cE,unstable_isNewReconciler:!1},ok={readContext:on,useCallback:aE,useContext:on,useEffect:$m,useImperativeHandle:oE,useInsertionEffect:rE,useLayoutEffect:iE,useMemo:lE,useReducer:bd,useRef:nE,useState:function(){return bd(xa)},useDebugValue:jm,useDeferredValue:function(t){var e=an();return Ye===null?e.memoizedState=t:uE(e,Ye.memoizedState,t)},useTransition:function(){var t=bd(xa)[0],e=an().memoizedState;return[t,e]},useMutableSource:Q1,useSyncExternalStore:Y1,useId:cE,unstable_isNewReconciler:!1};function qs(t,e){try{var n="",r=e;do n+=DA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ak=typeof WeakMap=="function"?WeakMap:Map;function pE(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gu||(Gu=!0,ap=r),Xf(t,e)},n}function mE(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xf(t,e),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ak;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Ek.bind(null,t,e,n),e.then(t,t))}function Gv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var lk=vr.ReactCurrentOwner,Vt=!1;function Pt(t,e,n,r){e.child=t===null?G1(e,null,n,r):Bs(e,t.child,n,r)}function Qv(t,e,n,r,i){n=n.render;var s=e.ref;return ks(e,i),r=Mm(t,e,n,r,s,i),n=Vm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Oe&&n&&Tm(e),e.flags|=1,Pt(t,e,r,i),e.child)}function Yv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gE(t,e,s,r,i)):(t=gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=Gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function gE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ga(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,cr(t,e,i)}return Jf(t,e,n,r,i)}function yE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(ws,Bt),Bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ae(ws,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ae(ws,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ae(ws,Bt),Bt|=r;return Pt(t,e,i,n),e.child}function vE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jf(t,e,n,r,i){var s=Ft(n)?Oi:At.current;return s=Us(e,s),ks(e,i),n=Mm(t,e,n,r,s,i),r=Vm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(Oe&&r&&Tm(e),e.flags|=1,Pt(t,e,n,i),e.child)}function Xv(t,e,n,r,i){if(Ft(n)){var s=!0;Vu(e)}else s=!1;if(ks(e,i),e.stateNode===null)fu(t,e),q1(e,n,r),Yf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Ft(n)?Oi:At.current,u=Us(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&zv(e,o,r,u),Cr=!1;var d=e.memoizedState;o.state=d,zu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||jt.current||Cr?(typeof c=="function"&&(Qf(e,n,c,r),l=e.memoizedState),(a=Cr||Uv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,B1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:fn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Ft(n)?Oi:At.current,l=Us(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&zv(e,o,r,l),Cr=!1,d=e.memoizedState,o.state=d,zu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||jt.current||Cr?(typeof p=="function"&&(Qf(e,n,p,r),v=e.memoizedState),(u=Cr||Uv(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Zf(t,e,n,r,s,i)}function Zf(t,e,n,r,i,s){vE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mv(e,n,!1),cr(t,e,s);r=e.stateNode,lk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&Mv(e,n,!0),e.child}function _E(t){var e=t.stateNode;e.pendingContext?Lv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lv(t,e.context,!1),Nm(t,e.containerInfo)}function Jv(t,e,n,r,i){return zs(),Am(i),e.flags|=256,Pt(t,e,n,r),e.child}var ep={dehydrated:null,treeContext:null,retryLane:0};function tp(t){return{baseLanes:t,cachePool:null,transitions:null}}function wE(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ae(De,i&1),t===null)return Gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,r,0,null),t=Pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tp(n),e.memoizedState=ep,t):Fm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=Pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ep,r}return s=t.child,t=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fm(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ml(t,e,n,r){return r!==null&&Am(r),Bs(e,t.child,null,n),t=Fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nd(Error(k(422))),Ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gc({mode:"visible",children:r.children},i,0,null),s=Pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=tp(o),e.memoizedState=ep,s);if(!(e.mode&1))return Ml(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Nd(s,r,void 0),Ml(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),En(r,t,i,-1))}return Hm(),r=Nd(Error(k(421))),Ml(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ik.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Br(i.nextSibling),Ht=e,Oe=!0,yn=null,t!==null&&(Zt[en++]=Zn,Zt[en++]=er,Zt[en++]=Di,Zn=t.id,er=t.overflow,Di=e),e=Fm(e,r.children),e.flags|=4096,e)}function Zv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kf(t.return,e,n)}function Od(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function EE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zv(t,n,e);else if(t.tag===19)Zv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ae(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Od(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Od(e,!0,n,null,s);break;case"together":Od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ck(t,e,n){switch(e.tag){case 3:_E(e),zs();break;case 5:K1(e);break;case 1:Ft(e.type)&&Vu(e);break;case 4:Nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ae(Fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ae(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?wE(t,e,n):(Ae(De,De.current&1),t=cr(t,e,n),t!==null?t.sibling:null);Ae(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return EE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,yE(t,e,n)}return cr(t,e,n)}var IE,np,xE,TE;IE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};np=function(){};xE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xi(Mn.current);var s=null;switch(n){case"input":i=Tf(t,i),r=Tf(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Cf(t,i),r=Cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lu)}Pf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ce("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};TE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Po(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hk(t,e,n){var r=e.pendingProps;switch(Sm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Ft(e.type)&&Mu(),pt(e),null;case 3:return r=e.stateNode,Ws(),Pe(jt),Pe(At),Dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(cp(yn),yn=null))),np(t,e),pt(e),null;case 5:Om(e);var i=xi(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)xE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return pt(e),null}if(t=xi(Mn.current),Dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bn]=e,r[_a]=s,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)Ce(Vo[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":lv(r,s),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ce("invalid",r);break;case"textarea":cv(r,s),Ce("invalid",r)}Pf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ol(r.textContent,a,t),i=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":Sl(r),uv(r,s,!0);break;case"textarea":Sl(r),hv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Lu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[_a]=r,IE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rf(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),i=r;break;case"iframe":case"object":case"embed":Ce("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)Ce(Vo[i],t);i=r;break;case"source":Ce("error",t),i=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),i=r;break;case"details":Ce("toggle",t),i=r;break;case"input":lv(t,r),i=Tf(t,r),Ce("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":cv(t,r),i=Cf(t,r),Ce("invalid",t);break;default:i=r}Pf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?e1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ce("scroll",t):l!=null&&cm(t,s,l,o))}switch(n){case"input":Sl(t),uv(t,r,!1);break;case"textarea":Sl(t),hv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)TE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=xi(Ea.current),xi(Mn.current),Dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return pt(e),null;case 13:if(Pe(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Wt!==null&&e.mode&1&&!(e.flags&128))U1(),zs(),e.flags|=98560,s=!1;else if(s=Dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[bn]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else yn!==null&&(cp(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Xe===0&&(Xe=3):Hm())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Ws(),np(t,e),t===null&&ya(e.stateNode.containerInfo),pt(e),null;case 10:return Pm(e.type._context),pt(e),null;case 17:return Ft(e.type)&&Mu(),pt(e),null;case 19:if(Pe(De),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Po(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bu(t),o!==null){for(e.flags|=128,Po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ae(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Hs&&(e.flags|=128,r=!0,Po(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Oe)return pt(e),null}else 2*ze()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,r=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=De.current,Ae(De,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return qm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function dk(t,e){switch(Sm(e),e.tag){case 1:return Ft(e.type)&&Mu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),Pe(jt),Pe(At),Dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Om(e),null;case 13:if(Pe(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(De),null;case 4:return Ws(),null;case 10:return Pm(e.type._context),null;case 22:case 23:return qm(),null;case 24:return null;default:return null}}var Vl=!1,vt=!1,fk=typeof WeakSet=="function"?WeakSet:Set,U=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function rp(t,e,n){try{n()}catch(r){je(t,e,r)}}var e0=!1;function pk(t,e){if(Ff=Nu,t=k1(),xm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},Nu=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:fn(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){je(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return v=e0,e0=!1,v}function ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rp(e,n,s)}i=i.next}while(i!==r)}}function qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ip(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function SE(t){var e=t.alternate;e!==null&&(t.alternate=null,SE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[_a],delete e[Wf],delete e[YC],delete e[XC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function AE(t){return t.tag===5||t.tag===3||t.tag===4}function t0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||AE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lu));else if(r!==4&&(t=t.child,t!==null))for(sp(t,e,n),t=t.sibling;t!==null;)sp(t,e,n),t=t.sibling}function op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(op(t,e,n),t=t.sibling;t!==null;)op(t,e,n),t=t.sibling}var at=null,gn=!1;function Tr(t,e,n){for(n=n.child;n!==null;)CE(t,e,n),n=n.sibling}function CE(t,e,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:vt||_s(n,e);case 6:var r=at,i=gn;at=null,Tr(t,e,n),at=r,gn=i,at!==null&&(gn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(gn?(t=at,n=n.stateNode,t.nodeType===8?Ad(t.parentNode,n):t.nodeType===1&&Ad(t,n),pa(t)):Ad(at,n.stateNode));break;case 4:r=at,i=gn,at=n.stateNode.containerInfo,gn=!0,Tr(t,e,n),at=r,gn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rp(n,e,o),i=i.next}while(i!==r)}Tr(t,e,n);break;case 1:if(!vt&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Tr(t,e,n),vt=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function n0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fk),e.forEach(function(r){var i=xk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,gn=!1;break e;case 3:at=a.stateNode.containerInfo,gn=!0;break e;case 4:at=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(at===null)throw Error(k(160));CE(s,o,i),at=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kE(e,t),e=e.sibling}function kE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),An(t),r&4){try{ea(3,t,t.return),qc(3,t)}catch(y){je(t,t.return,y)}try{ea(5,t,t.return)}catch(y){je(t,t.return,y)}}break;case 1:dn(e,t),An(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(dn(e,t),An(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{ca(i,"")}catch(y){je(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Qw(i,s),Rf(a,o);var u=Rf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?e1(i,h):c==="dangerouslySetInnerHTML"?Jw(i,h):c==="children"?ca(i,h):cm(i,c,h,u)}switch(a){case"input":Sf(i,s);break;case"textarea":Yw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[_a]=s}catch(y){je(t,t.return,y)}}break;case 6:if(dn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){je(t,t.return,y)}}break;case 3:if(dn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(y){je(t,t.return,y)}break;case 4:dn(e,t),An(t);break;case 13:dn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bm=ze())),r&4&&n0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||c,dn(e,t),vt=u):dn(e,t),An(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(h=U=c;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:_s(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){je(r,n,y)}}break;case 5:_s(d,d.return);break;case 22:if(d.memoizedState!==null){i0(h);continue}}p!==null?(p.return=d,U=p):i0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zw("display",o))}catch(y){je(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){je(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:dn(e,t),An(t),r&4&&n0(t);break;case 21:break;default:dn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(AE(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ca(i,""),r.flags&=-33);var s=t0(t);op(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=t0(t);sp(t,a,o);break;default:throw Error(k(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mk(t,e,n){U=t,PE(t)}function PE(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=Vl;var u=vt;if(Vl=o,(vt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?s0(i):l!==null?(l.return=o,U=l):s0(i);for(;s!==null;)U=s,PE(s),s=s.sibling;U=i,Vl=a,vt=u}r0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):r0(t)}}function r0(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}vt||e.flags&512&&ip(e)}catch(d){je(e,e.return,d)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function i0(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function s0(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qc(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{ip(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{ip(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var gk=Math.ceil,Hu=vr.ReactCurrentDispatcher,Um=vr.ReactCurrentOwner,rn=vr.ReactCurrentBatchConfig,pe=0,tt=null,Ge=null,ct=0,Bt=0,ws=hi(0),Xe=0,Sa=null,Mi=0,Hc=0,zm=0,ta=null,Lt=null,Bm=0,Hs=1/0,Yn=null,Gu=!1,ap=null,qr=null,$l=!1,Mr=null,Ku=0,na=0,lp=null,pu=-1,mu=0;function bt(){return pe&6?ze():pu!==-1?pu:pu=ze()}function Hr(t){return t.mode&1?pe&2&&ct!==0?ct&-ct:ZC.transition!==null?(mu===0&&(mu=d1()),mu):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:_1(t.type)),t):1}function En(t,e,n,r){if(50<na)throw na=0,lp=null,Error(k(185));Qa(t,n,r),(!(pe&2)||t!==tt)&&(t===tt&&(!(pe&2)&&(Hc|=n),Xe===4&&Pr(t,ct)),Ut(t,r),n===1&&pe===0&&!(e.mode&1)&&(Hs=ze()+500,zc&&di()))}function Ut(t,e){var n=t.callbackNode;ZA(t,e);var r=bu(t,t===tt?ct:0);if(r===0)n!==null&&pv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pv(n),e===1)t.tag===0?JC(o0.bind(null,t)):$1(o0.bind(null,t)),KC(function(){!(pe&6)&&di()}),n=null;else{switch(f1(r)){case 1:n=mm;break;case 4:n=c1;break;case 16:n=Ru;break;case 536870912:n=h1;break;default:n=Ru}n=VE(n,RE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function RE(t,e){if(pu=-1,mu=0,pe&6)throw Error(k(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var r=bu(t,t===tt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Qu(t,r);else{e=r;var i=pe;pe|=2;var s=NE();(tt!==t||ct!==e)&&(Yn=null,Hs=ze()+500,ki(t,e));do try{_k();break}catch(a){bE(t,a)}while(1);km(),Hu.current=s,pe=i,Ge!==null?e=0:(tt=null,ct=0,e=Xe)}if(e!==0){if(e===2&&(i=Lf(t),i!==0&&(r=i,e=up(t,i))),e===1)throw n=Sa,ki(t,0),Pr(t,r),Ut(t,ze()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!yk(i)&&(e=Qu(t,r),e===2&&(s=Lf(t),s!==0&&(r=s,e=up(t,s))),e===1))throw n=Sa,ki(t,0),Pr(t,r),Ut(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:vi(t,Lt,Yn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=Bm+500-ze(),10<e)){if(bu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bf(vi.bind(null,t,Lt,Yn),e);break}vi(t,Lt,Yn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gk(r/1960))-r,10<r){t.timeoutHandle=Bf(vi.bind(null,t,Lt,Yn),r);break}vi(t,Lt,Yn);break;case 5:vi(t,Lt,Yn);break;default:throw Error(k(329))}}}return Ut(t,ze()),t.callbackNode===n?RE.bind(null,t):null}function up(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(ki(t,e).flags|=256),t=Qu(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&cp(e)),t}function cp(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function yk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~zm,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function o0(t){if(pe&6)throw Error(k(327));Ps();var e=bu(t,0);if(!(e&1))return Ut(t,ze()),null;var n=Qu(t,e);if(t.tag!==0&&n===2){var r=Lf(t);r!==0&&(e=r,n=up(t,r))}if(n===1)throw n=Sa,ki(t,0),Pr(t,e),Ut(t,ze()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vi(t,Lt,Yn),Ut(t,ze()),null}function Wm(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Hs=ze()+500,zc&&di())}}function Vi(t){Mr!==null&&Mr.tag===0&&!(pe&6)&&Ps();var e=pe;pe|=1;var n=rn.transition,r=Ee;try{if(rn.transition=null,Ee=1,t)return t()}finally{Ee=r,rn.transition=n,pe=e,!(pe&6)&&di()}}function qm(){Bt=ws.current,Pe(ws)}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GC(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Sm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mu();break;case 3:Ws(),Pe(jt),Pe(At),Dm();break;case 5:Om(r);break;case 4:Ws();break;case 13:Pe(De);break;case 19:Pe(De);break;case 10:Pm(r.type._context);break;case 22:case 23:qm()}n=n.return}if(tt=t,Ge=t=Gr(t.current,null),ct=Bt=e,Xe=0,Sa=null,zm=Hc=Mi=0,Lt=ta=null,Ii!==null){for(e=0;e<Ii.length;e++)if(n=Ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ii=null}return t}function bE(t,e){do{var n=Ge;try{if(km(),hu.current=qu,Wu){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(Li=0,et=Ye=Le=null,Zo=!1,Ia=0,Um.current=null,n===null||n.return===null){Xe=1,Sa=e,Ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Gv(o);if(p!==null){p.flags&=-257,Kv(p,o,a,s,e),p.mode&1&&Hv(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Hv(s,u,e),Hm();break e}l=Error(k(426))}}else if(Oe&&a.mode&1){var w=Gv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Kv(w,o,a,s,e),Am(qs(l,a));break e}}s=l=qs(l,a),Xe!==4&&(Xe=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=pE(s,l,e);jv(s,m);break e;case 1:a=l;var f=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(qr===null||!qr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=mE(s,a,e);jv(s,E);break e}}s=s.return}while(s!==null)}DE(n)}catch(T){e=T,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function NE(){var t=Hu.current;return Hu.current=qu,t===null?qu:t}function Hm(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(Mi&268435455)&&!(Hc&268435455)||Pr(tt,ct)}function Qu(t,e){var n=pe;pe|=2;var r=NE();(tt!==t||ct!==e)&&(Yn=null,ki(t,e));do try{vk();break}catch(i){bE(t,i)}while(1);if(km(),pe=n,Hu.current=r,Ge!==null)throw Error(k(261));return tt=null,ct=0,Xe}function vk(){for(;Ge!==null;)OE(Ge)}function _k(){for(;Ge!==null&&!WA();)OE(Ge)}function OE(t){var e=ME(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?DE(t):Ge=e,Um.current=null}function DE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dk(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Ge=null;return}}else if(n=hk(n,e,Bt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Xe===0&&(Xe=5)}function vi(t,e,n){var r=Ee,i=rn.transition;try{rn.transition=null,Ee=1,wk(t,e,n,r)}finally{rn.transition=i,Ee=r}return null}function wk(t,e,n,r){do Ps();while(Mr!==null);if(pe&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eC(t,s),t===tt&&(Ge=tt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$l||($l=!0,VE(Ru,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=Ee;Ee=1;var a=pe;pe|=4,Um.current=null,pk(t,n),kE(n,t),FC(Uf),Nu=!!Ff,Uf=Ff=null,t.current=n,mk(n),qA(),pe=a,Ee=o,rn.transition=s}else t.current=n;if($l&&($l=!1,Mr=t,Ku=i),s=t.pendingLanes,s===0&&(qr=null),KA(n.stateNode),Ut(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gu)throw Gu=!1,t=ap,ap=null,t;return Ku&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===lp?na++:(na=0,lp=t):na=0,di(),null}function Ps(){if(Mr!==null){var t=f1(Ku),e=rn.transition,n=Ee;try{if(rn.transition=null,Ee=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,Ku=0,pe&6)throw Error(k(331));var i=pe;for(pe|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:ea(8,c,s)}var h=c.child;if(h!==null)h.return=c,U=h;else for(;U!==null;){c=U;var d=c.sibling,p=c.return;if(SE(c),c===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,U=m;break e}U=s.return}}var f=t.current;for(U=f;U!==null;){o=U;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,U=_;else e:for(o=f;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qc(9,a)}}catch(T){je(a,a.return,T)}if(a===o){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(pe=i,di(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Vc,t)}catch{}r=!0}return r}finally{Ee=n,rn.transition=e}}return!1}function a0(t,e,n){e=qs(n,e),e=pE(t,e,1),t=Wr(t,e,1),e=bt(),t!==null&&(Qa(t,1,e),Ut(t,e))}function je(t,e,n){if(t.tag===3)a0(t,t,n);else for(;e!==null;){if(e.tag===3){a0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){t=qs(n,t),t=mE(e,t,1),e=Wr(e,t,1),t=bt(),e!==null&&(Qa(e,1,t),Ut(e,t));break}}e=e.return}}function Ek(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ct&n)===n&&(Xe===4||Xe===3&&(ct&130023424)===ct&&500>ze()-Bm?ki(t,0):zm|=n),Ut(t,e)}function LE(t,e){e===0&&(t.mode&1?(e=kl,kl<<=1,!(kl&130023424)&&(kl=4194304)):e=1);var n=bt();t=ur(t,e),t!==null&&(Qa(t,e,n),Ut(t,n))}function Ik(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LE(t,n)}function xk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),LE(t,n)}var ME;ME=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||jt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,ck(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Oe&&e.flags&1048576&&j1(e,ju,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fu(t,e),t=e.pendingProps;var i=Us(e,At.current);ks(e,n),i=Mm(null,e,r,t,i,n);var s=Vm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,Vu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bm(e),i.updater=Bc,e.stateNode=i,i._reactInternals=e,Yf(e,r,t,n),e=Zf(null,e,r,!0,s,n)):(e.tag=0,Oe&&s&&Tm(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Sk(r),t=fn(r,t),i){case 0:e=Jf(null,e,r,t,n);break e;case 1:e=Xv(null,e,r,t,n);break e;case 11:e=Qv(null,e,r,t,n);break e;case 14:e=Yv(null,e,r,fn(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Jf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Xv(t,e,r,i,n);case 3:e:{if(_E(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,B1(t,e),zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qs(Error(k(423)),e),e=Jv(t,e,r,n,i);break e}else if(r!==i){i=qs(Error(k(424)),e),e=Jv(t,e,r,n,i);break e}else for(Wt=Br(e.stateNode.containerInfo.firstChild),Ht=e,Oe=!0,yn=null,n=G1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),r===i){e=cr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return K1(e),t===null&&Gf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zf(r,i)?o=null:s!==null&&zf(r,s)&&(e.flags|=32),vE(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Gf(e),null;case 13:return wE(t,e,n);case 4:return Nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Qv(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ae(Fu,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!jt.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ks(e,n),i=on(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),Yv(t,e,r,i,n);case 15:return gE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),fu(t,e),e.tag=1,Ft(r)?(t=!0,Vu(e)):t=!1,ks(e,n),q1(e,r,i),Yf(e,r,i,n),Zf(null,e,r,!0,t,n);case 19:return EE(t,e,n);case 22:return yE(t,e,n)}throw Error(k(156,e.tag))};function VE(t,e){return u1(t,e)}function Tk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new Tk(t,e,n,r)}function Gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sk(t){if(typeof t=="function")return Gm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dm)return 11;if(t===fm)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Pi(n.children,i,s,e);case hm:o=8,i|=8;break;case wf:return t=nn(12,n,e,i|2),t.elementType=wf,t.lanes=s,t;case Ef:return t=nn(13,n,e,i),t.elementType=Ef,t.lanes=s,t;case If:return t=nn(19,n,e,i),t.elementType=If,t.lanes=s,t;case Hw:return Gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ww:o=10;break e;case qw:o=9;break e;case dm:o=11;break e;case fm:o=14;break e;case Ar:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Pi(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=nn(22,t,r,e),t.elementType=Hw,t.lanes=n,t.stateNode={isHidden:!1},t}function Dd(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ak(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=md(0),this.expirationTimes=md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Km(t,e,n,r,i,s,o,a,l){return t=new Ak(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bm(s),t}function Ck(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $E(t){if(!t)return ri;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ft(n))return V1(t,n,e)}return e}function jE(t,e,n,r,i,s,o,a,l){return t=Km(n,r,!0,t,i,s,o,a,l),t.context=$E(null),n=t.current,r=bt(),i=Hr(n),s=sr(r,i),s.callback=e??null,Wr(n,s,i),t.current.lanes=i,Qa(t,i,r),Ut(t,r),t}function Kc(t,e,n,r){var i=e.current,s=bt(),o=Hr(i);return n=$E(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(i,e,o),t!==null&&(En(t,i,o,s),cu(t,i,o)),o}function Yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qm(t,e){l0(t,e),(t=t.alternate)&&l0(t,e)}function kk(){return null}var FE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ym(t){this._internalRoot=t}Qc.prototype.render=Ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));Kc(t,e,null,null)};Qc.prototype.unmount=Ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){Kc(null,t,null,null)}),e[lr]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=g1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&v1(t)}};function Xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u0(){}function Pk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Yu(o);s.call(u)}}var o=jE(e,r,t,0,null,!1,!1,"",u0);return t._reactRootContainer=o,t[lr]=o.current,ya(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Yu(l);a.call(u)}}var l=Km(t,0,!1,null,null,!1,!1,"",u0);return t._reactRootContainer=l,t[lr]=l.current,ya(t.nodeType===8?t.parentNode:t),Vi(function(){Kc(e,l,n,r)}),l}function Xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Yu(o);a.call(l)}}Kc(e,o,t,i)}else o=Pk(n,e,t,i,r);return Yu(o)}p1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(gm(e,n|1),Ut(e,ze()),!(pe&6)&&(Hs=ze()+500,di()))}break;case 13:Vi(function(){var r=ur(t,1);if(r!==null){var i=bt();En(r,t,1,i)}}),Qm(t,1)}};ym=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=bt();En(e,t,134217728,n)}Qm(t,134217728)}};m1=function(t){if(t.tag===13){var e=Hr(t),n=ur(t,e);if(n!==null){var r=bt();En(n,t,e,r)}Qm(t,e)}};g1=function(){return Ee};y1=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Nf=function(t,e,n){switch(e){case"input":if(Sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uc(r);if(!i)throw Error(k(90));Kw(r),Sf(r,i)}}}break;case"textarea":Yw(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};r1=Wm;i1=Vi;var Rk={usingClientEntryPoint:!1,Events:[Xa,ps,Uc,t1,n1,Wm]},Ro={findFiberByHostInstance:Ei,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bk={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a1(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||kk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Vc=jl.inject(bk),Ln=jl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rk;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xm(e))throw Error(k(200));return Ck(t,e,null,n)};Yt.createRoot=function(t,e){if(!Xm(t))throw Error(k(299));var n=!1,r="",i=FE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Km(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,ya(t.nodeType===8?t.parentNode:t),new Ym(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=a1(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Vi(t)};Yt.hydrate=function(t,e,n){if(!Yc(e))throw Error(k(200));return Xc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Xm(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=FE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jE(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qc(e)};Yt.render=function(t,e,n){if(!Yc(e))throw Error(k(200));return Xc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(k(40));return t._reactRootContainer?(Vi(function(){Xc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Wm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Xc(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function UE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UE)}catch(t){console.error(t)}}UE(),jw.exports=Yt;var zE=jw.exports,c0=zE;vf.createRoot=c0.createRoot,vf.hydrateRoot=c0.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Aa.apply(this,arguments)}var Vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vr||(Vr={}));const h0="popstate";function Nk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return hp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xu(i)}return Dk(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ok(){return Math.random().toString(36).substr(2,8)}function d0(t,e){return{usr:t.state,key:t.key,idx:e}}function hp(t,e,n,r){return n===void 0&&(n=null),Aa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?co(e):e,{state:n,key:e&&e.key||r||Ok()})}function Xu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function co(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Dk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Aa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Vr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:m})}function d(w,m){a=Vr.Push;let f=hp(y.location,w,m);n&&n(f,w),u=c()+1;let _=d0(f,u),E=y.createHref(f);try{o.pushState(_,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function p(w,m){a=Vr.Replace;let f=hp(y.location,w,m);n&&n(f,w),u=c();let _=d0(f,u),E=y.createHref(f);o.replaceState(_,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Xu(w);return Be(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(h0,h),l=w,()=>{i.removeEventListener(h0,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(w){return o.go(w)}};return y}var f0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(f0||(f0={}));function Lk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?co(e):e,i=Zm(r.pathname||"/",n);if(i==null)return null;let s=BE(t);Mk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=qk(s[a],Kk(i));return o}function BE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),BE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Bk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of WE(s.path))i(s,o,l)}),e}function WE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Mk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Wk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vk=/^:\w+$/,$k=3,jk=2,Fk=1,Uk=10,zk=-2,p0=t=>t==="*";function Bk(t,e){let n=t.split("/"),r=n.length;return n.some(p0)&&(r+=zk),e&&(r+=jk),n.filter(i=>!p0(i)).reduce((i,s)=>i+(Vk.test(s)?$k:s===""?Fk:Uk),r)}function Wk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Hk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kr([i,c.pathname]),pathnameBase:Jk(Kr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kr([i,c.pathnameBase]))}return s}function Hk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Gk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Qk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Gk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Kk(t){try{return decodeURI(t)}catch(e){return Jm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qk(t,e){try{return decodeURIComponent(t)}catch(n){return Jm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Yk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?co(t):t;return{pathname:n?n.startsWith("/")?n:Xk(n,e):e,search:Zk(r),hash:eP(i)}}function Xk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Md(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=co(t):(i=Aa({},t),Be(!i.pathname||!i.pathname.includes("?"),Md("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Md("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Md("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Yk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kr=t=>t.join("/").replace(/\/\/+/g,"/"),Jk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Zk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const qE=["post","put","patch","delete"];new Set(qE);const nP=["get",...qE];new Set(nP);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ju(){return Ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ju.apply(this,arguments)}const ng=I.createContext(null),HE=I.createContext(null),Ki=I.createContext(null),Jc=I.createContext(null),_r=I.createContext({outlet:null,matches:[],isDataRoute:!1}),GE=I.createContext(null);function rP(t,e){let{relative:n}=e===void 0?{}:e;ho()||Be(!1);let{basename:r,navigator:i}=I.useContext(Ki),{hash:s,pathname:o,search:a}=rg(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ho(){return I.useContext(Jc)!=null}function wr(){return ho()||Be(!1),I.useContext(Jc).location}function KE(t){I.useContext(Ki).static||I.useLayoutEffect(t)}function Er(){let{isDataRoute:t}=I.useContext(_r);return t?vP():iP()}function iP(){ho()||Be(!1);let t=I.useContext(ng),{basename:e,navigator:n}=I.useContext(Ki),{matches:r}=I.useContext(_r),{pathname:i}=wr(),s=JSON.stringify(eg(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return KE(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=tg(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Kr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const sP=I.createContext(null);function oP(t){let e=I.useContext(_r).outlet;return e&&I.createElement(sP.Provider,{value:t},e)}function rg(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(_r),{pathname:i}=wr(),s=JSON.stringify(eg(r).map(o=>o.pathnameBase));return I.useMemo(()=>tg(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function aP(t,e){return lP(t,e)}function lP(t,e,n){ho()||Be(!1);let{navigator:r}=I.useContext(Ki),{matches:i}=I.useContext(_r),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=wr(),u;if(e){var c;let y=typeof e=="string"?co(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Be(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=Lk(t,{pathname:d}),v=fP(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Kr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Kr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?I.createElement(Jc.Provider,{value:{location:Ju({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Vr.Pop}},v):v}function uP(){let t=yP(),e=tP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const cP=I.createElement(uP,null);class hP extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(_r.Provider,{value:this.props.routeContext},I.createElement(GE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dP(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(ng);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(_r.Provider,{value:e},r)}function fP(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Be(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||cP);let d=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=I.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,I.createElement(dP,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(hP,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var QE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(QE||{}),Zu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zu||{});function pP(t){let e=I.useContext(ng);return e||Be(!1),e}function mP(t){let e=I.useContext(HE);return e||Be(!1),e}function gP(t){let e=I.useContext(_r);return e||Be(!1),e}function YE(t){let e=gP(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function yP(){var t;let e=I.useContext(GE),n=mP(Zu.UseRouteError),r=YE(Zu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function vP(){let{router:t}=pP(QE.UseNavigateStable),e=YE(Zu.UseNavigateStable),n=I.useRef(!1);return KE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ju({fromRouteId:e},s)))},[t,e])}function _P(t){let{to:e,replace:n,state:r,relative:i}=t;ho()||Be(!1);let{matches:s}=I.useContext(_r),{pathname:o}=wr(),a=Er(),l=tg(e,eg(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function wP(t){return oP(t.context)}function Qn(t){Be(!1)}function EP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vr.Pop,navigator:s,static:o=!1}=t;ho()&&Be(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=co(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=I.useMemo(()=>{let y=Zm(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:I.createElement(Ki.Provider,{value:l},I.createElement(Jc.Provider,{children:n,value:v}))}function IP(t){let{children:e,location:n}=t;return aP(dp(e),n)}new Promise(()=>{});function dp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,dp(r.props.children,s));return}r.type!==Qn&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ec.apply(this,arguments)}function XE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TP(t,e){return t.button===0&&(!e||e==="_self")&&!xP(t)}const SP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],AP=["aria-current","caseSensitive","className","end","style","to","children"],CP="startTransition",m0=IA[CP];function kP(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=Nk({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&m0?m0(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(EP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const PP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",RP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bP=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=XE(e,SP),{basename:d}=I.useContext(Ki),p,v=!1;if(typeof u=="string"&&RP.test(u)&&(p=u,PP))try{let f=new URL(window.location.href),_=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Zm(_.pathname,d);_.origin===f.origin&&E!=null?u=E+_.search+_.hash:v=!0}catch{}let y=rP(u,{relative:i}),w=OP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||w(f)}return I.createElement("a",ec({},h,{href:p||y,onClick:v||s?r:m,ref:n,target:l}))}),NP=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=XE(e,AP),h=rg(l,{relative:c.relative}),d=wr(),p=I.useContext(HE),{navigator:v}=I.useContext(Ki),y=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,w=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),m=m?m.toLowerCase():null,y=y.toLowerCase());let f=w===y||!o&&w.startsWith(y)&&w.charAt(y.length)==="/",_=m!=null&&(m===y||!o&&m.startsWith(y)&&m.charAt(y.length)==="/"),E=f?r:void 0,T;typeof s=="function"?T=s({isActive:f,isPending:_}):T=[s,f?"active":null,_?"pending":null].filter(Boolean).join(" ");let S=typeof a=="function"?a({isActive:f,isPending:_}):a;return I.createElement(bP,ec({},c,{"aria-current":E,className:T,ref:n,style:S,to:l}),typeof u=="function"?u({isActive:f,isPending:_}):u)});var g0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(g0||(g0={}));var y0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(y0||(y0={}));function OP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Er(),l=wr(),u=rg(t,{relative:o});return I.useCallback(c=>{if(TP(c,n)){c.preventDefault();let h=r!==void 0?r:Xu(l)===Xu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var JE={exports:{}},ZE={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=I;function DP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var LP=typeof Object.is=="function"?Object.is:DP,MP=Gs.useState,VP=Gs.useEffect,$P=Gs.useLayoutEffect,jP=Gs.useDebugValue;function FP(t,e){var n=e(),r=MP({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return $P(function(){i.value=n,i.getSnapshot=e,Vd(i)&&s({inst:i})},[t,n,e]),VP(function(){return Vd(i)&&s({inst:i}),t(function(){Vd(i)&&s({inst:i})})},[t]),jP(n),n}function Vd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!LP(t,n)}catch{return!0}}function UP(t,e){return e()}var zP=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?UP:FP;ZE.useSyncExternalStore=Gs.useSyncExternalStore!==void 0?Gs.useSyncExternalStore:zP;JE.exports=ZE;var BP=JE.exports,eI={exports:{}},tI={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=I,WP=BP;function qP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var HP=typeof Object.is=="function"?Object.is:qP,GP=WP.useSyncExternalStore,KP=Zc.useRef,QP=Zc.useEffect,YP=Zc.useMemo,XP=Zc.useDebugValue;tI.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=KP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=YP(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var v=o.value;if(i(v,p))return h=v}return h=p}if(v=h,HP(c,p))return v;var y=r(p);return i!==void 0&&i(v,y)?v:(c=p,h=y)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=GP(t,s[0],s[1]);return QP(function(){o.hasValue=!0,o.value=a},[a]),XP(a),a};eI.exports=tI;var JP=eI.exports;function ZP(t){t()}let nI=ZP;const eR=t=>nI=t,tR=()=>nI,v0=Symbol.for("react-redux-context"),_0=typeof globalThis<"u"?globalThis:{};function nR(){var t;if(!I.createContext)return{};const e=(t=_0[v0])!=null?t:_0[v0]=new Map;let n=e.get(I.createContext);return n||(n=I.createContext(null),e.set(I.createContext,n)),n}const ii=nR();function ig(t=ii){return function(){return I.useContext(t)}}const rI=ig(),rR=()=>{throw new Error("uSES not initialized!")};let iI=rR;const iR=t=>{iI=t},sR=(t,e)=>t===e;function oR(t=ii){const e=t===ii?rI:ig(t);return function(r,i={}){const{equalityFn:s=sR,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:h,noopCheck:d}=e();I.useRef(!0);const p=I.useCallback({[r.name](y){return r(y)}}[r.name],[r,h,o]),v=iI(u.addNestedSub,l.getState,c||l.getState,p,s);return I.useDebugValue(v),v}}const ln=oR();var sI={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,sg=rt?Symbol.for("react.element"):60103,og=rt?Symbol.for("react.portal"):60106,eh=rt?Symbol.for("react.fragment"):60107,th=rt?Symbol.for("react.strict_mode"):60108,nh=rt?Symbol.for("react.profiler"):60114,rh=rt?Symbol.for("react.provider"):60109,ih=rt?Symbol.for("react.context"):60110,ag=rt?Symbol.for("react.async_mode"):60111,sh=rt?Symbol.for("react.concurrent_mode"):60111,oh=rt?Symbol.for("react.forward_ref"):60112,ah=rt?Symbol.for("react.suspense"):60113,aR=rt?Symbol.for("react.suspense_list"):60120,lh=rt?Symbol.for("react.memo"):60115,uh=rt?Symbol.for("react.lazy"):60116,lR=rt?Symbol.for("react.block"):60121,uR=rt?Symbol.for("react.fundamental"):60117,cR=rt?Symbol.for("react.responder"):60118,hR=rt?Symbol.for("react.scope"):60119;function Jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case sg:switch(t=t.type,t){case ag:case sh:case eh:case nh:case th:case ah:return t;default:switch(t=t&&t.$$typeof,t){case ih:case oh:case uh:case lh:case rh:return t;default:return e}}case og:return e}}}function oI(t){return Jt(t)===sh}xe.AsyncMode=ag;xe.ConcurrentMode=sh;xe.ContextConsumer=ih;xe.ContextProvider=rh;xe.Element=sg;xe.ForwardRef=oh;xe.Fragment=eh;xe.Lazy=uh;xe.Memo=lh;xe.Portal=og;xe.Profiler=nh;xe.StrictMode=th;xe.Suspense=ah;xe.isAsyncMode=function(t){return oI(t)||Jt(t)===ag};xe.isConcurrentMode=oI;xe.isContextConsumer=function(t){return Jt(t)===ih};xe.isContextProvider=function(t){return Jt(t)===rh};xe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===sg};xe.isForwardRef=function(t){return Jt(t)===oh};xe.isFragment=function(t){return Jt(t)===eh};xe.isLazy=function(t){return Jt(t)===uh};xe.isMemo=function(t){return Jt(t)===lh};xe.isPortal=function(t){return Jt(t)===og};xe.isProfiler=function(t){return Jt(t)===nh};xe.isStrictMode=function(t){return Jt(t)===th};xe.isSuspense=function(t){return Jt(t)===ah};xe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===eh||t===sh||t===nh||t===th||t===ah||t===aR||typeof t=="object"&&t!==null&&(t.$$typeof===uh||t.$$typeof===lh||t.$$typeof===rh||t.$$typeof===ih||t.$$typeof===oh||t.$$typeof===uR||t.$$typeof===cR||t.$$typeof===hR||t.$$typeof===lR)};xe.typeOf=Jt;sI.exports=xe;var lg=sI.exports,ug=lg,dR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pR={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},aI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cg={};cg[ug.ForwardRef]=pR;cg[ug.Memo]=aI;function w0(t){return ug.isMemo(t)?aI:cg[t.$$typeof]||dR}var mR=Object.defineProperty,gR=Object.getOwnPropertyNames,E0=Object.getOwnPropertySymbols,yR=Object.getOwnPropertyDescriptor,vR=Object.getPrototypeOf,I0=Object.prototype;function lI(t,e,n){if(typeof e!="string"){if(I0){var r=vR(e);r&&r!==I0&&lI(t,r,n)}var i=gR(e);E0&&(i=i.concat(E0(e)));for(var s=w0(t),o=w0(e),a=0;a<i.length;++a){var l=i[a];if(!fR[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=yR(e,l);try{mR(t,l,u)}catch{}}}}return t}var _R=lI;const wR=rm(_R);var Te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg=Symbol.for("react.element"),dg=Symbol.for("react.portal"),ch=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),ph=Symbol.for("react.context"),ER=Symbol.for("react.server_context"),mh=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),_h=Symbol.for("react.lazy"),IR=Symbol.for("react.offscreen"),uI;uI=Symbol.for("react.module.reference");function un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case hg:switch(t=t.type,t){case ch:case dh:case hh:case gh:case yh:return t;default:switch(t=t&&t.$$typeof,t){case ER:case ph:case mh:case _h:case vh:case fh:return t;default:return e}}case dg:return e}}}Te.ContextConsumer=ph;Te.ContextProvider=fh;Te.Element=hg;Te.ForwardRef=mh;Te.Fragment=ch;Te.Lazy=_h;Te.Memo=vh;Te.Portal=dg;Te.Profiler=dh;Te.StrictMode=hh;Te.Suspense=gh;Te.SuspenseList=yh;Te.isAsyncMode=function(){return!1};Te.isConcurrentMode=function(){return!1};Te.isContextConsumer=function(t){return un(t)===ph};Te.isContextProvider=function(t){return un(t)===fh};Te.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===hg};Te.isForwardRef=function(t){return un(t)===mh};Te.isFragment=function(t){return un(t)===ch};Te.isLazy=function(t){return un(t)===_h};Te.isMemo=function(t){return un(t)===vh};Te.isPortal=function(t){return un(t)===dg};Te.isProfiler=function(t){return un(t)===dh};Te.isStrictMode=function(t){return un(t)===hh};Te.isSuspense=function(t){return un(t)===gh};Te.isSuspenseList=function(t){return un(t)===yh};Te.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ch||t===dh||t===hh||t===gh||t===yh||t===IR||typeof t=="object"&&t!==null&&(t.$$typeof===_h||t.$$typeof===vh||t.$$typeof===fh||t.$$typeof===ph||t.$$typeof===mh||t.$$typeof===uI||t.getModuleId!==void 0)};Te.typeOf=un;function xR(){const t=tR();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const x0={notify(){},get:()=>[]};function TR(t,e){let n,r=x0;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=xR())}function u(){n&&(n(),n=void 0,r.clear(),r=x0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const SR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AR=SR?I.useLayoutEffect:I.useEffect;function CR({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=I.useMemo(()=>{const u=TR(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=I.useMemo(()=>t.getState(),[t]);AR(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||ii;return I.createElement(l.Provider,{value:o},n)}function cI(t=ii){const e=t===ii?rI:ig(t);return function(){const{store:r}=e();return r}}const kR=cI();function PR(t=ii){const e=t===ii?kR:cI(t);return function(){return e().dispatch}}const Qi=PR();iR(JP.useSyncExternalStoreWithSelector);eR(zE.unstable_batchedUpdates);const cn=t=>t.auth;function RR(t){function e(L,j,F,X,x){for(var ae=0,D=0,be=0,me=0,ye,ie,Qe=0,O=0,Q,$e=Q=ye=0,he=0,st=0,wo=0,ot=0,Il=F.length,Eo=Il-1,hn,ne="",Ue="",ld="",ud="",xr;he<Il;){if(ie=F.charCodeAt(he),he===Eo&&D+me+be+ae!==0&&(D!==0&&(ie=D===47?10:47),me=be=ae=0,Il++,Eo++),D+me+be+ae===0){if(he===Eo&&(0<st&&(ne=ne.replace(d,"")),0<ne.trim().length)){switch(ie){case 32:case 9:case 59:case 13:case 10:break;default:ne+=F.charAt(he)}ie=59}switch(ie){case 123:for(ne=ne.trim(),ye=ne.charCodeAt(0),Q=1,ot=++he;he<Il;){switch(ie=F.charCodeAt(he)){case 123:Q++;break;case 125:Q--;break;case 47:switch(ie=F.charCodeAt(he+1)){case 42:case 47:e:{for($e=he+1;$e<Eo;++$e)switch(F.charCodeAt($e)){case 47:if(ie===42&&F.charCodeAt($e-1)===42&&he+2!==$e){he=$e+1;break e}break;case 10:if(ie===47){he=$e+1;break e}}he=$e}}break;case 91:ie++;case 40:ie++;case 34:case 39:for(;he++<Eo&&F.charCodeAt(he)!==ie;);}if(Q===0)break;he++}switch(Q=F.substring(ot,he),ye===0&&(ye=(ne=ne.replace(h,"").trim()).charCodeAt(0)),ye){case 64:switch(0<st&&(ne=ne.replace(d,"")),ie=ne.charCodeAt(1),ie){case 100:case 109:case 115:case 45:st=j;break;default:st=oe}if(Q=e(j,st,Q,ie,x+1),ot=Q.length,0<N&&(st=n(oe,ne,wo),xr=a(3,Q,st,j,B,fe,ot,ie,x,X),ne=st.join(""),xr!==void 0&&(ot=(Q=xr.trim()).length)===0&&(ie=0,Q="")),0<ot)switch(ie){case 115:ne=ne.replace(S,o);case 100:case 109:case 45:Q=ne+"{"+Q+"}";break;case 107:ne=ne.replace(f,"$1 $2"),Q=ne+"{"+Q+"}",Q=J===1||J===2&&s("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=ne+Q,X===112&&(Q=(Ue+=Q,""))}else Q="";break;default:Q=e(j,n(j,ne,wo),Q,X,x+1)}ld+=Q,Q=wo=st=$e=ye=0,ne="",ie=F.charCodeAt(++he);break;case 125:case 59:if(ne=(0<st?ne.replace(d,""):ne).trim(),1<(ot=ne.length))switch($e===0&&(ye=ne.charCodeAt(0),ye===45||96<ye&&123>ye)&&(ot=(ne=ne.replace(" ",":")).length),0<N&&(xr=a(1,ne,j,L,B,fe,Ue.length,X,x,X))!==void 0&&(ot=(ne=xr.trim()).length)===0&&(ne="\0\0"),ye=ne.charCodeAt(0),ie=ne.charCodeAt(1),ye){case 0:break;case 64:if(ie===105||ie===99){ud+=ne+F.charAt(he);break}default:ne.charCodeAt(ot-1)!==58&&(Ue+=i(ne,ye,ie,ne.charCodeAt(2)))}wo=st=$e=ye=0,ne="",ie=F.charCodeAt(++he)}}switch(ie){case 13:case 10:D===47?D=0:1+ye===0&&X!==107&&0<ne.length&&(st=1,ne+="\0"),0<N*Y&&a(0,ne,j,L,B,fe,Ue.length,X,x,X),fe=1,B++;break;case 59:case 125:if(D+me+be+ae===0){fe++;break}default:switch(fe++,hn=F.charAt(he),ie){case 9:case 32:if(me+ae+D===0)switch(Qe){case 44:case 58:case 9:case 32:hn="";break;default:ie!==32&&(hn=" ")}break;case 0:hn="\\0";break;case 12:hn="\\f";break;case 11:hn="\\v";break;case 38:me+D+ae===0&&(st=wo=1,hn="\f"+hn);break;case 108:if(me+D+ae+W===0&&0<$e)switch(he-$e){case 2:Qe===112&&F.charCodeAt(he-3)===58&&(W=Qe);case 8:O===111&&(W=O)}break;case 58:me+D+ae===0&&($e=he);break;case 44:D+be+me+ae===0&&(st=1,hn+="\r");break;case 34:case 39:D===0&&(me=me===ie?0:me===0?ie:me);break;case 91:me+D+be===0&&ae++;break;case 93:me+D+be===0&&ae--;break;case 41:me+D+ae===0&&be--;break;case 40:if(me+D+ae===0){if(ye===0)switch(2*Qe+3*O){case 533:break;default:ye=1}be++}break;case 64:D+be+me+ae+$e+Q===0&&(Q=1);break;case 42:case 47:if(!(0<me+ae+be))switch(D){case 0:switch(2*ie+3*F.charCodeAt(he+1)){case 235:D=47;break;case 220:ot=he,D=42}break;case 42:ie===47&&Qe===42&&ot+2!==he&&(F.charCodeAt(ot+2)===33&&(Ue+=F.substring(ot,he+1)),hn="",D=0)}}D===0&&(ne+=hn)}O=Qe,Qe=ie,he++}if(ot=Ue.length,0<ot){if(st=j,0<N&&(xr=a(2,Ue,st,L,B,fe,ot,X,x,X),xr!==void 0&&(Ue=xr).length===0))return ud+Ue+ld;if(Ue=st.join(",")+"{"+Ue+"}",J*W!==0){switch(J!==2||s(Ue,2)||(W=0),W){case 111:Ue=Ue.replace(E,":-moz-$1")+Ue;break;case 112:Ue=Ue.replace(_,"::-webkit-input-$1")+Ue.replace(_,"::-moz-$1")+Ue.replace(_,":-ms-input-$1")+Ue}W=0}}return ud+Ue+ld}function n(L,j,F){var X=j.trim().split(w);j=X;var x=X.length,ae=L.length;switch(ae){case 0:case 1:var D=0;for(L=ae===0?"":L[0]+" ";D<x;++D)j[D]=r(L,j[D],F).trim();break;default:var be=D=0;for(j=[];D<x;++D)for(var me=0;me<ae;++me)j[be++]=r(L[me]+" ",X[D],F).trim()}return j}function r(L,j,F){var X=j.charCodeAt(0);switch(33>X&&(X=(j=j.trim()).charCodeAt(0)),X){case 38:return j.replace(m,"$1"+L.trim());case 58:return L.trim()+j.replace(m,"$1"+L.trim());default:if(0<1*F&&0<j.indexOf("\f"))return j.replace(m,(L.charCodeAt(0)===58?"":"$1")+L.trim())}return L+j}function i(L,j,F,X){var x=L+";",ae=2*j+3*F+4*X;if(ae===944){L=x.indexOf(":",9)+1;var D=x.substring(L,x.length-1).trim();return D=x.substring(0,L).trim()+D+";",J===1||J===2&&s(D,1)?"-webkit-"+D+D:D}if(J===0||J===2&&!s(x,1))return x;switch(ae){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(z,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return D=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+D+"-webkit-"+x+"-ms-flex-pack"+D+x;case 1005:return v.test(x)?x.replace(p,":-webkit-")+x.replace(p,":-moz-")+x:x;case 1e3:switch(D=x.substring(13).trim(),j=D.indexOf("-")+1,D.charCodeAt(0)+D.charCodeAt(j)){case 226:D=x.replace(T,"tb");break;case 232:D=x.replace(T,"tb-rl");break;case 220:D=x.replace(T,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+D+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(j=(x=L).length-10,D=(x.charCodeAt(j)===33?x.substring(0,j):x).substring(L.indexOf(":",7)+1).trim(),ae=D.charCodeAt(0)+(D.charCodeAt(7)|0)){case 203:if(111>D.charCodeAt(8))break;case 115:x=x.replace(D,"-webkit-"+D)+";"+x;break;case 207:case 102:x=x.replace(D,"-webkit-"+(102<ae?"inline-":"")+"box")+";"+x.replace(D,"-webkit-"+D)+";"+x.replace(D,"-ms-"+D+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return D=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+D+"-ms-flex-"+D+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(P,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(P,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if($.test(L)===!0)return(D=L.substring(L.indexOf(":")+1)).charCodeAt(0)===115?i(L.replace("stretch","fill-available"),j,F,X).replace(":fill-available",":stretch"):x.replace(D,"-webkit-"+D)+x.replace(D,"-moz-"+D.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,F+X===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+x}return x}function s(L,j){var F=L.indexOf(j===1?":":"{"),X=L.substring(0,j!==3?F:10);return F=L.substring(F+1,L.length-1),K(j!==2?X:X.replace(G,"$1"),F,j)}function o(L,j){var F=i(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return F!==j+";"?F.replace(b," or ($1)").substring(4):"("+j+")"}function a(L,j,F,X,x,ae,D,be,me,ye){for(var ie=0,Qe=j,O;ie<N;++ie)switch(O=ce[ie].call(c,L,Qe,F,X,x,ae,D,be,me,ye)){case void 0:case!1:case!0:case null:break;default:Qe=O}if(Qe!==j)return Qe}function l(L){switch(L){case void 0:case null:N=ce.length=0;break;default:if(typeof L=="function")ce[N++]=L;else if(typeof L=="object")for(var j=0,F=L.length;j<F;++j)l(L[j]);else Y=!!L|0}return l}function u(L){return L=L.prefix,L!==void 0&&(K=null,L?typeof L!="function"?J=1:(J=2,K=L):J=0),u}function c(L,j){var F=L;if(33>F.charCodeAt(0)&&(F=F.trim()),_e=F,F=[_e],0<N){var X=a(-1,j,F,F,B,fe,0,0,0,0);X!==void 0&&typeof X=="string"&&(j=X)}var x=e(oe,F,j,0,0);return 0<N&&(X=a(-2,x,F,F,B,fe,x.length,0,0,0),X!==void 0&&(x=X)),_e="",W=0,fe=B=1,x}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,v=/zoo|gra/,y=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,_=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,b=/([\s\S]*?);/g,P=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,fe=1,B=1,W=0,J=1,oe=[],ce=[],N=0,K=null,Y=0,_e="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var bR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NR(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var OR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,T0=NR(function(t){return OR.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function tr(){return(tr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var S0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},fp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!lg.typeOf(t)},tc=Object.freeze([]),Qr=Object.freeze({});function Ca(t){return typeof t=="function"}function A0(t){return t.displayName||t.name||"Component"}function fg(t){return t&&typeof t.styledComponentId=="string"}var Ks=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",pg=typeof window<"u"&&"HTMLElement"in window,DR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Za(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var LR=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Za(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),yu=new Map,nc=new Map,ra=1,Fl=function(t){if(yu.has(t))return yu.get(t);for(;nc.has(ra);)ra++;var e=ra++;return yu.set(t,e),nc.set(e,t),e},MR=function(t){return nc.get(t)},VR=function(t,e){e>=ra&&(ra=e+1),yu.set(t,e),nc.set(e,t)},$R="style["+Ks+'][data-styled-version="5.3.11"]',jR=new RegExp("^"+Ks+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),FR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},UR=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(jR);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(VR(u,l),FR(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},zR=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},hI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ks))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ks,"active"),r.setAttribute("data-styled-version","5.3.11");var o=zR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},BR=function(){function t(n){var r=this.element=hI(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Za(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),WR=function(){function t(n){var r=this.element=hI(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),qR=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),C0=pg,HR={isServer:!pg,useCSSOMInjection:!DR},dI=function(){function t(n,r,i){n===void 0&&(n=Qr),r===void 0&&(r={}),this.options=tr({},HR,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&pg&&C0&&(C0=!1,function(s){for(var o=document.querySelectorAll($R),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ks)!=="active"&&(UR(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Fl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(tr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new qR(o):s?new BR(o):new WR(o),new LR(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Fl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Fl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Fl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=MR(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ks+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),GR=/(a)(d)/gi,k0=function(t){return String.fromCharCode(t+(t>25?39:97))};function pp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=k0(e%52)+n;return(k0(e%52)+n).replace(GR,"$1-$2")}var Es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},fI=function(t){return Es(5381,t)};function KR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ca(n)&&!fg(n))return!1}return!0}var QR=fI("5.3.11"),YR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KR(e),this.componentId=n,this.baseHash=Es(QR,n),this.baseStyle=r,dI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Qs(this.rules,e,n,r).join(""),a=pp(Es(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Es(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var v=Qs(p,e,n,r),y=Array.isArray(v)?v.join(""):v;c=Es(c,y+d),h+=y}}if(h){var w=pp(c>>>0);if(!n.hasNameForId(i,w)){var m=r(h,"."+w,void 0,i);n.insertRules(i,w,m)}s.push(w)}}return s.join(" ")},t}(),XR=/^\s*\/\/.*$/gm,JR=[":","[",".","#"];function ZR(t){var e,n,r,i,s=t===void 0?Qr:t,o=s.options,a=o===void 0?Qr:o,l=s.plugins,u=l===void 0?tc:l,c=new RR(a),h=[],d=function(y){function w(m){if(m)try{y(m+"}")}catch{}}return function(m,f,_,E,T,S,b,P,G,$){switch(m){case 1:if(G===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return y(_[0]+f),"";default:return f+($===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(y){h.push(y)}),p=function(y,w,m){return w===0&&JR.indexOf(m[n.length])!==-1||m.match(i)?y:"."+e};function v(y,w,m,f){f===void 0&&(f="&");var _=y.replace(XR,""),E=w&&m?m+" "+w+" { "+_+" }":_;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!w?"":w,E)}return c.use([].concat(u,[function(y,w,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(y){if(y===-2){var w=h;return h=[],w}}])),v.hash=u.length?u.reduce(function(y,w){return w.name||Za(15),Es(y,w.name)},5381).toString():"",v}var pI=$t.createContext();pI.Consumer;var mI=$t.createContext(),e2=(mI.Consumer,new dI),mp=ZR();function t2(){return I.useContext(pI)||e2}function n2(){return I.useContext(mI)||mp}var r2=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=mp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Za(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=mp),this.name+e.hash},t}(),i2=/([A-Z])/,s2=/([A-Z])/g,o2=/^ms-/,a2=function(t){return"-"+t.toLowerCase()};function P0(t){return i2.test(t)?t.replace(s2,a2).replace(o2,"-ms-"):t}var R0=function(t){return t==null||t===!1||t===""};function Qs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Qs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(R0(t))return"";if(fg(t))return"."+t.styledComponentId;if(Ca(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Qs(l,e,n,r)}var u;return t instanceof r2?n?(t.inject(n,r),t.getName(r)):t:fp(t)?function c(h,d){var p,v,y=[];for(var w in h)h.hasOwnProperty(w)&&!R0(h[w])&&(Array.isArray(h[w])&&h[w].isCss||Ca(h[w])?y.push(P0(w)+":",h[w],";"):fp(h[w])?y.push.apply(y,c(h[w],w)):y.push(P0(w)+": "+(p=w,(v=h[w])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||p in bR||p.startsWith("--")?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(y,["}"]):y}(t):t.toString()}var b0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function l2(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Ca(t)||fp(t)?b0(Qs(S0(tc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:b0(Qs(S0(t,n)))}var u2=function(t,e,n){return n===void 0&&(n=Qr),t.theme!==n.theme&&t.theme||e||n.theme},c2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,h2=/(^-|-$)/g;function $d(t){return t.replace(c2,"-").replace(h2,"")}var d2=function(t){return pp(fI(t)>>>0)};function Ul(t){return typeof t=="string"&&!0}var gp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},f2=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function p2(t,e,n){var r=t[n];gp(e)&&gp(r)?gI(r,e):t[n]=e}function gI(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(gp(o))for(var a in o)f2(a)&&p2(t,o[a],a)}return t}var yI=$t.createContext();yI.Consumer;var jd={};function vI(t,e,n){var r=fg(t),i=!Ul(t),s=e.attrs,o=s===void 0?tc:s,a=e.componentId,l=a===void 0?function(f,_){var E=typeof f!="string"?"sc":$d(f);jd[E]=(jd[E]||0)+1;var T=E+"-"+d2("5.3.11"+E+jd[E]);return _?_+"-"+T:T}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Ul(f)?"styled."+f:"Styled("+A0(f)+")"}(t):u,h=e.displayName&&e.componentId?$d(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,_,E){return t.shouldForwardProp(f,_,E)&&e.shouldForwardProp(f,_,E)}:t.shouldForwardProp);var v,y=new YR(n,h,r?t.componentStyle:void 0),w=y.isStatic&&o.length===0,m=function(f,_){return function(E,T,S,b){var P=E.attrs,G=E.componentStyle,$=E.defaultProps,z=E.foldedComponentIds,fe=E.shouldForwardProp,B=E.styledComponentId,W=E.target,J=function(X,x,ae){X===void 0&&(X=Qr);var D=tr({},x,{theme:X}),be={};return ae.forEach(function(me){var ye,ie,Qe,O=me;for(ye in Ca(O)&&(O=O(D)),O)D[ye]=be[ye]=ye==="className"?(ie=be[ye],Qe=O[ye],ie&&Qe?ie+" "+Qe:ie||Qe):O[ye]}),[D,be]}(u2(T,I.useContext(yI),$)||Qr,T,P),oe=J[0],ce=J[1],N=function(X,x,ae,D){var be=t2(),me=n2(),ye=x?X.generateAndInjectStyles(Qr,be,me):X.generateAndInjectStyles(ae,be,me);return ye}(G,b,oe),K=S,Y=ce.$as||T.$as||ce.as||T.as||W,_e=Ul(Y),L=ce!==T?tr({},T,{},ce):T,j={};for(var F in L)F[0]!=="$"&&F!=="as"&&(F==="forwardedAs"?j.as=L[F]:(fe?fe(F,T0,Y):!_e||T0(F))&&(j[F]=L[F]));return T.style&&ce.style!==T.style&&(j.style=tr({},T.style,{},ce.style)),j.className=Array.prototype.concat(z,B,N!==B?N:null,T.className,ce.className).filter(Boolean).join(" "),j.ref=K,I.createElement(Y,j)}(v,f,_,w)};return m.displayName=c,(v=$t.forwardRef(m)).attrs=d,v.componentStyle=y,v.displayName=c,v.shouldForwardProp=p,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):tc,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var _=e.componentId,E=function(S,b){if(S==null)return{};var P,G,$={},z=Object.keys(S);for(G=0;G<z.length;G++)P=z[G],b.indexOf(P)>=0||($[P]=S[P]);return $}(e,["componentId"]),T=_&&_+"-"+(Ul(f)?f:$d(A0(f)));return vI(f,tr({},E,{attrs:d,componentId:T}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?gI({},t.defaultProps,f):f}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&wR(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var yp=function(t){return function e(n,r,i){if(i===void 0&&(i=Qr),!lg.isValidElementType(r))return Za(1,String(r));var s=function(){return n(r,i,l2.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,tr({},i,{},o))},s.attrs=function(o){return e(n,r,tr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(vI,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){yp[t]=yp(t)});const C=yp;var _I={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N0=$t.createContext&&$t.createContext(_I),Yr=globalThis&&globalThis.__assign||function(){return Yr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Yr.apply(this,arguments)},m2=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function wI(t){return t&&t.map(function(e,n){return $t.createElement(e.tag,Yr({key:n},e.attr),wI(e.child))})}function Ir(t){return function(e){return $t.createElement(g2,Yr({attr:Yr({},t.attr)},e),wI(t.child))}}function g2(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=m2(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),$t.createElement("svg",Yr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Yr(Yr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&$t.createElement("title",null,s),t.children)};return N0!==void 0?$t.createElement(N0.Consumer,null,function(n){return e(n)}):e(_I)}function y2(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"}},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"}},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"}}]})(t)}const v2=C.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`,_2=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-direction: column;
  margin-top: 18px;
  padding: 0px 16px;
  gap: 20px;
  @media (min-width: 686px) {
    flex-direction: row;
  }
`,w2=C(y2)`
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
`,E2=C.div`
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
`,I2=C.div`
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
`,x2=C.div`
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
`,T2=()=>{const t=Er();return g.jsx(x2,{onClick:()=>{t("/")}})},S2=C.nav`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,O0=C(NP)`
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
`,A2=[{to:"/",title:"Головна"},{to:"/category",title:"Категорії"},{to:"/search",title:"Пошук"}],C2=()=>{const t=ln(cn);return g.jsxs(S2,{children:[A2.map((e,n)=>g.jsx(O0,{to:`${e.to}`,children:e.title},n)),t.role==="admin"&&g.jsx(O0,{to:"/admin",children:"Адмін"},"admin")]})},Fd=C.p`
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

    font-size: 38px;`,k2=C.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,P2=C.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,R2=C.div`
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
`,b2=C.div`
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
`,N2=C.div`
  gap: 10px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,zl=C.button`
  font-size: 7px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Bl=C.h4`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,O2=C.div`
  display: flex;
  flex-direction: column;
`,Wl=C.p`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,D2=C.div`
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`,D0=C.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`,L2=C.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`,M2=C.div`
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
`,Gn=C.p`
  @media (min-width: 768px) {
    font-size: 7px;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
`,ql=C.div`
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
`,is=C.h3`
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
`,Cn=C.input`
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
`,Hl=C.button`
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
`,Kn=C.div`
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
`,V2=C.div`
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
`,$2=C.ul`
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
`,j2=C.li`
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
 */const EI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},F2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},II={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(EI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):F2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new U2;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class U2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z2=function(t){const e=EI(t);return II.encodeByteArray(e,!0)},rc=function(t){return z2(t).replace(/\./g,"")},xI=function(t){try{return II.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function B2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W2=()=>B2().__FIREBASE_DEFAULTS__,q2=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},H2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xI(t[1]);return e&&JSON.parse(e)},mg=()=>{try{return W2()||q2()||H2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TI=t=>{var e,n;return(n=(e=mg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},SI=t=>{const e=TI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},AI=()=>{var t;return(t=mg())===null||t===void 0?void 0:t.config},CI=t=>{var e;return(e=mg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class G2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function kI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),a].join(".")}/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Q2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Y2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X2(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function J2(){try{return typeof indexedDB=="object"}catch{return!1}}function Z2(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const eb="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eb,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,a,r)}}function tb(t,e){return t.replace(nb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nb=/\{\$([^}]+)}/g;function rb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ic(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(L0(s)&&L0(o)){if(!ic(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L0(t){return t!==null&&typeof t=="object"}/**
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
 */function tl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function jo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ib(t,e){const n=new sb(t,e);return n.subscribe.bind(n)}class sb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ob(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ud),i.error===void 0&&(i.error=Ud),i.complete===void 0&&(i.complete=Ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ob(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ud(){}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _i="[DEFAULT]";/**
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
 */class ab{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new G2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ub(e))try{this.getOrInitializeService({instanceIdentifier:_i})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_i){return this.instances.has(e)}getOptions(e=_i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_i){return this.component?this.component.multipleInstances?e:_i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lb(t){return t===_i?void 0:t}function ub(t){return t.instantiationMode==="EAGER"}/**
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
 */class cb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ab(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const hb={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},db=ge.INFO,fb={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},pb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gg{constructor(e){this.name=e,this._logLevel=db,this._logHandler=pb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const mb=(t,e)=>e.some(n=>t instanceof n);let M0,V0;function gb(){return M0||(M0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yb(){return V0||(V0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PI=new WeakMap,vp=new WeakMap,RI=new WeakMap,zd=new WeakMap,yg=new WeakMap;function vb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&PI.set(n,t)}).catch(()=>{}),yg.set(e,t),e}function _b(t){if(vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vp.set(t,e)}let _p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wb(t){_p=t(_p)}function Eb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bd(this),e,...n);return RI.set(r,e.sort?e.sort():[e]),Xr(r)}:yb().includes(t)?function(...e){return t.apply(Bd(this),e),Xr(PI.get(this))}:function(...e){return Xr(t.apply(Bd(this),e))}}function Ib(t){return typeof t=="function"?Eb(t):(t instanceof IDBTransaction&&_b(t),mb(t,gb())?new Proxy(t,_p):t)}function Xr(t){if(t instanceof IDBRequest)return vb(t);if(zd.has(t))return zd.get(t);const e=Ib(t);return e!==t&&(zd.set(t,e),yg.set(e,t)),e}const Bd=t=>yg.get(t);function xb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xr(o.result),l.oldVersion,l.newVersion,Xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Tb=["get","getKey","getAll","getAllKeys","count"],Sb=["put","add","delete","clear"],Wd=new Map;function $0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wd.get(e))return Wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Sb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Tb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Wd.set(e,s),s}wb(t=>({...t,get:(e,n,r)=>$0(e,n)||t.get(e,n,r),has:(e,n)=>!!$0(e,n)||t.has(e,n)}));/**
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
 */class Ab{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wp="@firebase/app",j0="0.9.17";/**
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
 */const $i=new gg("@firebase/app"),kb="@firebase/app-compat",Pb="@firebase/analytics-compat",Rb="@firebase/analytics",bb="@firebase/app-check-compat",Nb="@firebase/app-check",Ob="@firebase/auth",Db="@firebase/auth-compat",Lb="@firebase/database",Mb="@firebase/database-compat",Vb="@firebase/functions",$b="@firebase/functions-compat",jb="@firebase/installations",Fb="@firebase/installations-compat",Ub="@firebase/messaging",zb="@firebase/messaging-compat",Bb="@firebase/performance",Wb="@firebase/performance-compat",qb="@firebase/remote-config",Hb="@firebase/remote-config-compat",Gb="@firebase/storage",Kb="@firebase/storage-compat",Qb="@firebase/firestore",Yb="@firebase/firestore-compat",Xb="firebase",Jb="10.3.0";/**
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
 */const Ep="[DEFAULT]",Zb={[wp]:"fire-core",[kb]:"fire-core-compat",[Rb]:"fire-analytics",[Pb]:"fire-analytics-compat",[Nb]:"fire-app-check",[bb]:"fire-app-check-compat",[Ob]:"fire-auth",[Db]:"fire-auth-compat",[Lb]:"fire-rtdb",[Mb]:"fire-rtdb-compat",[Vb]:"fire-fn",[$b]:"fire-fn-compat",[jb]:"fire-iid",[Fb]:"fire-iid-compat",[Ub]:"fire-fcm",[zb]:"fire-fcm-compat",[Bb]:"fire-perf",[Wb]:"fire-perf-compat",[qb]:"fire-rc",[Hb]:"fire-rc-compat",[Gb]:"fire-gcs",[Kb]:"fire-gcs-compat",[Qb]:"fire-fst",[Yb]:"fire-fst-compat","fire-js":"fire-js",[Xb]:"fire-js-all"};/**
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
 */const sc=new Map,Ip=new Map;function eN(t,e){try{t.container.addComponent(e)}catch(n){$i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ji(t){const e=t.name;if(Ip.has(e))return $i.debug(`There were multiple attempts to register component ${e}.`),!1;Ip.set(e,t);for(const n of sc.values())eN(n,t);return!0}function wh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jr=new el("app","Firebase",tN);/**
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
 */class nN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yi=Jb;function bI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ep,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jr.create("bad-app-name",{appName:String(i)});if(n||(n=AI()),!n)throw Jr.create("no-options");const s=sc.get(i);if(s){if(ic(n,s.options)&&ic(r,s.config))return s;throw Jr.create("duplicate-app",{appName:i})}const o=new cb(i);for(const l of Ip.values())o.addComponent(l);const a=new nN(n,r,o);return sc.set(i,a),a}function vg(t=Ep){const e=sc.get(t);if(!e&&t===Ep&&AI())return bI();if(!e)throw Jr.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let i=(r=Zb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$i.warn(a.join(" "));return}ji(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const rN="firebase-heartbeat-database",iN=1,ka="firebase-heartbeat-store";let qd=null;function NI(){return qd||(qd=xb(rN,iN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ka)}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),qd}async function sN(t){try{return await(await NI()).transaction(ka).objectStore(ka).get(OI(t))}catch(e){if(e instanceof Wn)$i.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$i.warn(n.message)}}}async function F0(t,e){try{const r=(await NI()).transaction(ka,"readwrite");await r.objectStore(ka).put(e,OI(t)),await r.done}catch(n){if(n instanceof Wn)$i.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$i.warn(r.message)}}}function OI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oN=1024,aN=30*24*60*60*1e3;class lN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=U0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=aN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=U0(),{heartbeatsToSend:n,unsentEntries:r}=uN(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function U0(){return new Date().toISOString().substring(0,10)}function uN(t,e=oN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),z0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),z0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J2()?Z2().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return F0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return F0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function z0(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hN(t){ji(new si("platform-logger",e=>new Ab(e),"PRIVATE")),ji(new si("heartbeat",e=>new lN(e),"PRIVATE")),Vn(wp,j0,t),Vn(wp,j0,"esm2017"),Vn("fire-js","")}hN("");function _g(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function B0(t){return t!==void 0&&t.enterprise!==void 0}class dN{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function DI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fN=DI,LI=new el("auth","Firebase",DI());/**
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
 */const oc=new gg("@firebase/auth");function pN(t,...e){oc.logLevel<=ge.WARN&&oc.warn(`Auth (${Yi}): ${t}`,...e)}function vu(t,...e){oc.logLevel<=ge.ERROR&&oc.error(`Auth (${Yi}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw wg(t,...e)}function $n(t,...e){return wg(t,...e)}function mN(t,e,n){const r=Object.assign(Object.assign({},fN()),{[e]:n});return new el("auth","Firebase",r).create(e,{appName:t.name})}function wg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return LI.create(t,...e)}function Z(t,e,...n){if(!t)throw wg(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function hr(t,e){t||nr(e)}/**
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
 */function xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gN(){return W0()==="http:"||W0()==="https:"}function W0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gN()||Q2()||"connection"in navigator)?navigator.onLine:!0}function vN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class nl{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=K2()||Y2()}get(){return yN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eg(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class MI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wN=new nl(3e4,6e4);function Xi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fi(t,e,n,r,i={}){return VI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=tl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),MI.fetch()($I(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function VI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_N),e);try{const i=new EN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mN(t,c,u);xn(t,c)}}catch(i){if(i instanceof Wn)throw i;xn(t,"network-request-failed",{message:String(i)})}}async function rl(t,e,n,r,i={}){const s=await fi(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $I(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Eg(t.config,i):`${t.config.apiScheme}://${i}`}class EN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),wN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(t,e,r);return i.customData._tokenResponse=n,i}async function IN(t,e){return fi(t,"GET","/v2/recaptchaConfig",Xi(t,e))}/**
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
 */async function xN(t,e){return fi(t,"POST","/v1/accounts:delete",e)}async function TN(t,e){return fi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ia(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SN(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Ig(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ia(Hd(i.auth_time)),issuedAtTime:ia(Hd(i.iat)),expirationTime:ia(Hd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hd(t){return Number(t)*1e3}function Ig(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=xI(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function AN(t){const e=Ig(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&CN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ia(this.lastLoginAt),this.creationTime=ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ac(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ys(t,TN(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bN(s.providerUserInfo):[],a=RN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function PN(t){const e=We(t);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bN(t){return t.map(e=>{var{providerId:n}=e,r=_g(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NN(t,e){const n=await VI(t,{},async()=>{const r=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$I(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",MI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await NN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pa;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pa,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function Sr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SN(this,e)}reload(){return PN(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ys(this,xN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:E,isAnonymous:T,providerData:S,stsTokenManager:b}=n;Z(_&&b,e,"internal-error");const P=Pa.fromJSON(this.name,b);Z(typeof _=="string",e,"internal-error"),Sr(h,e.name),Sr(d,e.name),Z(typeof E=="boolean",e,"internal-error"),Z(typeof T=="boolean",e,"internal-error"),Sr(p,e.name),Sr(v,e.name),Sr(y,e.name),Sr(w,e.name),Sr(m,e.name),Sr(f,e.name);const G=new Ri({uid:_,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:y,stsTokenManager:P,createdAt:m,lastLoginAt:f});return S&&Array.isArray(S)&&(G.providerData=S.map($=>Object.assign({},$))),w&&(G._redirectEventId=w),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pa;i.updateFromServerResponse(n);const s=new Ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ac(s),s}}/**
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
 */const q0=new Map;function rr(t){hr(t instanceof Function,"Expected a class definition");let e=q0.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,q0.set(t,e),e)}/**
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
 */class FI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FI.type="NONE";const H0=FI;/**
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
 */function _u(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_u(this.userKey,i.apiKey,s),this.fullPersistenceKey=_u("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(rr(H0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rr(H0);const o=_u(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ri._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Rs(s,e,r))}}/**
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
 */function G0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qI(e))return"Blackberry";if(HI(e))return"Webos";if(xg(e))return"Safari";if((e.includes("chrome/")||zI(e))&&!e.includes("edge/"))return"Chrome";if(WI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UI(t=Ct()){return/firefox\//i.test(t)}function xg(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zI(t=Ct()){return/crios\//i.test(t)}function BI(t=Ct()){return/iemobile/i.test(t)}function WI(t=Ct()){return/android/i.test(t)}function qI(t=Ct()){return/blackberry/i.test(t)}function HI(t=Ct()){return/webos/i.test(t)}function Eh(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ON(t=Ct()){var e;return Eh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DN(){return X2()&&document.documentMode===10}function GI(t=Ct()){return Eh(t)||WI(t)||HI(t)||qI(t)||/windows phone/i.test(t)||BI(t)}function LN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function KI(t,e=[]){let n;switch(t){case"Browser":n=G0(Ct());break;case"Worker":n=`${G0(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
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
 */class MN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VN(t,e={}){return fi(t,"GET","/v2/passwordPolicy",Xi(t,e))}/**
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
 */const $N=6;class jN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$N,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class FN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new K0(this),this.idTokenSubscription=new K0(this),this.beforeStateQueue=new MN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VN(this),n=new jN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ji(t){return We(t)}class K0{constructor(e){this.auth=e,this.observer=null,this.addObserver=ib(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function UN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function QI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",UN().appendChild(r)})}function zN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BN="https://www.google.com/recaptcha/enterprise.js?render=",WN="recaptcha-enterprise",qN="NO_RECAPTCHA";class HN{constructor(e){this.type=WN,this.auth=Ji(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{IN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new dN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;B0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(qN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&B0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}QI(BN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function lc(t,e,n,r=!1){const i=new HN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function GN(t,e){const n=wh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ic(s,e??{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function KN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QN(t,e,n){const r=Ji(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=YI(e),{host:o,port:a}=YN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||XN()}function YI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YN(t){const e=YI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Q0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Q0(o)}}}function Q0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function JN(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Gd(t,e){return rl(t,"POST","/v1/accounts:signInWithPassword",Xi(t,e))}/**
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
 */async function ZN(t,e){return rl(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}async function eO(t,e){return rl(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}/**
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
 */class Ra extends Tg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await lc(e,r,"signInWithPassword");return Gd(e,i)}else return Gd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await lc(e,r,"signInWithPassword");return Gd(e,s)}else return Promise.reject(i)});case"emailLink":return ZN(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return JN(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return eO(e,{idToken:n,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bs(t,e){return rl(t,"POST","/v1/accounts:signInWithIdp",Xi(t,e))}/**
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
 */const tO="http://localhost";class Fi extends Tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_g(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:tO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tl(n)}return e}}/**
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
 */function nO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rO(t){const e=$o(jo(t)).link,n=e?$o(jo(e)).deep_link_id:null,r=$o(jo(t)).deep_link_id;return(r?$o(jo(r)).link:null)||r||n||e||t}class Sg{constructor(e){var n,r,i,s,o,a;const l=$o(jo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=nO((i=l.mode)!==null&&i!==void 0?i:null);Z(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rO(e);try{return new Sg(n)}catch{return null}}}/**
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
 */class fo{constructor(){this.providerId=fo.PROVIDER_ID}static credential(e,n){return Ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sg.parseLink(n);return Z(r,"argument-error"),Ra._fromEmailAndCode(e,r.code,r.tenantId)}}fo.PROVIDER_ID="password";fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class XI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class il extends XI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rr extends il{constructor(){super("facebook.com")}static credential(e){return Fi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
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
 */class br extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Nr extends il{constructor(){super("github.com")}static credential(e){return Fi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.GITHUB_SIGN_IN_METHOD="github.com";Nr.PROVIDER_ID="github.com";/**
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
 */class Or extends il{constructor(){super("twitter.com")}static credential(e,n){return Fi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Or.credential(n,r)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
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
 */async function Kd(t,e){return rl(t,"POST","/v1/accounts:signUp",Xi(t,e))}/**
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
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ri._fromIdTokenResponse(e,r,i),o=Y0(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Y0(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Y0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class uc extends Wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uc(e,n,r,i)}}function JI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(t,s,e,r):s})}async function iO(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
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
 */async function sO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ys(t,JI(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Ig(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),s}}/**
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
 */async function ZI(t,e,n=!1){const r="signIn",i=await JI(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function oO(t,e){return ZI(Ji(t),e)}/**
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
 */async function ex(t){const e=Ji(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aO(t,e,n){var r;const i=Ji(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await lc(i,s,"signUpPassword");o=Kd(i,u)}else o=Kd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await lc(i,s,"signUpPassword");return Kd(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ex(t),u}),l=await Ui._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function lO(t,e,n){return oO(We(t),fo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ex(t),r})}/**
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
 */async function uO(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function cO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ys(r,uO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function hO(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function dO(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function fO(t){return We(t).signOut()}const cc="__sak";/**
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
 */class tx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pO(){const t=Ct();return xg(t)||Eh(t)}const mO=1e3,gO=10;class nx extends tx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pO()&&LN(),this.fallbackToPolling=GI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);DN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nx.type="LOCAL";const yO=nx;/**
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
 */class rx extends tx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rx.type="SESSION";const ix=rx;/**
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
 */function vO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await vO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
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
 */function Ag(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _O{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ag("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jn(){return window}function wO(t){jn().location.href=t}/**
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
 */function sx(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function EO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xO(){return sx()?self:null}/**
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
 */const ox="firebaseLocalStorageDb",TO=1,hc="firebaseLocalStorage",ax="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xh(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function SO(){const t=indexedDB.deleteDatabase(ox);return new sl(t).toPromise()}function Tp(){const t=indexedDB.open(ox,TO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:ax})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await SO(),e(await Tp()))})})}async function X0(t,e,n){const r=xh(t,!0).put({[ax]:e,value:n});return new sl(r).toPromise()}async function AO(t,e){const n=xh(t,!1).get(e),r=await new sl(n).toPromise();return r===void 0?null:r.value}function J0(t,e){const n=xh(t,!0).delete(e);return new sl(n).toPromise()}const CO=800,kO=3;class lx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(xO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EO(),!this.activeServiceWorker)return;this.sender=new _O(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tp();return await X0(e,cc,"1"),await J0(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>X0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>J0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xh(i,!1).getAll();return new sl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lx.type="LOCAL";const PO=lx;new nl(3e4,6e4);/**
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
 */function RO(t,e){return e?rr(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cg extends Tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bO(t){return ZI(t.auth,new Cg(t),t.bypassAuthState)}function NO(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),sO(n,new Cg(t),t.bypassAuthState)}async function OO(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),iO(n,new Cg(t),t.bypassAuthState)}/**
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
 */class ux{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bO;case"linkViaPopup":case"linkViaRedirect":return OO;case"reauthViaPopup":case"reauthViaRedirect":return NO;default:xn(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DO=new nl(2e3,1e4);class Is extends ux{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=Ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DO.get())};e()}}Is.currentPopupAction=null;/**
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
 */const LO="pendingRedirect",wu=new Map;class MO extends ux{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const r=await VO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VO(t,e){const n=FO(e),r=jO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $O(t,e){wu.set(t._key(),e)}function jO(t){return rr(t._redirectPersistence)}function FO(t){return _u(LO,t.config.apiKey,t.name)}async function UO(t,e,n=!1){const r=Ji(t),i=RO(r,e),o=await new MO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zO=10*60*1e3;class BO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Z0(e))}saveEventToCache(e){this.cachedEventUids.add(Z0(e)),this.lastProcessedEventTime=Date.now()}}function Z0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cx(t);default:return!1}}/**
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
 */async function qO(t,e={}){return fi(t,"GET","/v1/projects",e)}/**
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
 */const HO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GO=/^https?/;async function KO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qO(t);for(const n of e)try{if(QO(n))return}catch{}xn(t,"unauthorized-domain")}function QO(t){const e=xp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GO.test(n))return!1;if(HO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const YO=new nl(3e4,6e4);function e_(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XO(t){return new Promise((e,n)=>{var r,i,s;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n($n(t,"network-request-failed"))},timeout:YO.get()})}if(!((i=(r=jn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jn().gapi)===null||s===void 0)&&s.load)o();else{const a=zN("iframefcb");return jn()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},QI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function JO(t){return Eu=Eu||XO(t),Eu}/**
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
 */const ZO=new nl(5e3,15e3),eD="__/auth/iframe",tD="emulator/auth/iframe",nD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iD(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eg(e,tD):`https://${t.config.authDomain}/${eD}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=rD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${tl(r).slice(1)}`}async function sD(t){const e=await JO(t),n=jn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:iD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=jn().setTimeout(()=>{s(o)},ZO.get());function l(){jn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const oD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aD=500,lD=600,uD="_blank",cD="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hD(t,e,n,r=aD,i=lD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},oD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ct().toLowerCase();n&&(a=zI(u)?uD:n),UI(u)&&(e=e||cD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(ON(u)&&a!=="_self")return dD(e||"",a),new t_(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new t_(h)}function dD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fD="__/auth/handler",pD="emulator/auth/handler",mD=encodeURIComponent("fac");async function n_(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof XI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof il){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${mD}=${encodeURIComponent(l)}`:"";return`${gD(t)}?${tl(a).slice(1)}${u}`}function gD({config:t}){return t.emulator?Eg(t,pD):`https://${t.authDomain}/${fD}`}/**
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
 */const Qd="webStorageSupport";class yD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ix,this._completeRedirectFn=UO,this._overrideRedirectResult=$O}async _openPopup(e,n,r,i){var s;hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,xp(),i);return hD(e,o,Ag())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await n_(e,n,r,xp(),i);return wO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sD(e),r=new BO(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qd,{type:Qd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qd];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GI()||xg()||Eh()}}const vD=yD;var r_="@firebase/auth",i_="1.3.0";/**
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
 */class _D{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ED(t){ji(new si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KI(t)},u=new FN(r,i,s,l);return KN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ji(new si("auth-internal",e=>{const n=Ji(e.getProvider("auth").getImmediate());return(r=>new _D(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(r_,i_,wD(t)),Vn(r_,i_,"esm2017")}/**
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
 */const ID=5*60,xD=CI("authIdTokenMaxAge")||ID;let s_=null;const TD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xD)return;const i=n==null?void 0:n.token;s_!==i&&(s_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SD(t=vg()){const e=wh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GN(t,{popupRedirectResolver:vD,persistence:[PO,yO,ix]}),r=CI("authTokenSyncURL");if(r){const s=TD(r);dO(n,s,()=>s(n.currentUser)),hO(n,o=>s(o))}const i=TI("auth");return i&&QN(n,`http://${i}`),n}ED("Browser");var AD="firebase",CD="10.3.0";/**
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
 */Vn(AD,CD,"app");/**
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
 */const hx="firebasestorage.googleapis.com",kD="storageBucket",PD=2*60*1e3,RD=10*60*1e3;/**
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
 */class qn extends Wn{constructor(e,n,r=0){super(Yd(e),`Firebase Storage: ${n} (${Yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zn||(zn={}));function Yd(t){return"storage/"+t}function bD(){const t="An unknown error occurred, please check the error payload for server response.";return new qn(zn.UNKNOWN,t)}function ND(){return new qn(zn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OD(){return new qn(zn.CANCELED,"User canceled the upload/download.")}function DD(t){return new qn(zn.INVALID_URL,"Invalid URL '"+t+"'.")}function LD(t){return new qn(zn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function o_(t){return new qn(zn.INVALID_ARGUMENT,t)}function dx(){return new qn(zn.APP_DELETED,"The Firebase app was deleted.")}function MD(t){return new qn(zn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(r.path==="")return r;throw LD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},y=n===hx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${w}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<_.length;E++){const T=_[E],S=T.regex.exec(e);if(S){const b=S[T.indices.bucket];let P=S[T.indices.path];P||(P=""),r=new _n(b,P),T.postModify(r);break}}if(r==null)throw DD(e);return r}}class VD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function $D(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let v=!1;function y(w){v||(v=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function jD(t){t(!1)}/**
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
 */function FD(t){return t!==void 0}function a_(t,e,n,r){if(r<e)throw o_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw o_(`Invalid value for '${t}'. Expected ${n} or less.`)}function UD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var dc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(dc||(dc={}));/**
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
 */function zD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class BD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Kl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===dc.NO_ERROR,l=s.getStatus();if(!a||zD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===dc.ABORT;r(!1,new Kl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Kl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());FD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=bD();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?dx():OD();o(l)}else{const l=ND();o(l)}};this.canceled_?n(!1,new Kl(!1,null,!0)):this.backoffId_=$D(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function WD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KD(t,e,n,r,i,s,o=!0){const a=UD(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return HD(u,e),WD(u,n),qD(u,s),GD(u,r),new BD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function QD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function YD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class fc{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fc(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YD(this._location.path)}get storage(){return this._service}get parent(){const e=QD(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new fc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw MD(e)}}function l_(t,e){const n=e==null?void 0:e[kD];return n==null?null:_n.makeFromBucketSpec(n,t)}function XD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:kI(i,t.app.options.projectId))}class JD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=hx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PD,this._maxUploadRetryTime=RD,this._requests=new Set,i!=null?this._bucket=_n.makeFromBucketSpec(i,this._host):this._bucket=l_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=l_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new VD(dx());{const o=KD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const u_="@firebase/storage",c_="0.11.2";/**
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
 */const fx="storage";function ZD(t=vg(),e){t=We(t);const r=wh(t,fx).getImmediate({identifier:e}),i=SI("storage");return i&&eL(r,...i),r}function eL(t,e,n,r={}){XD(t,e,n,r)}function tL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new JD(n,r,i,e,Yi)}function nL(){ji(new si(fx,tL,"PUBLIC").setMultipleInstances(!0)),Vn(u_,c_,""),Vn(u_,c_,"esm2017")}nL();var rL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,kg=kg||{},te=rL||self;function Th(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ol(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iL(t){return Object.prototype.hasOwnProperty.call(t,Xd)&&t[Xd]||(t[Xd]=++sL)}var Xd="closure_uid_"+(1e9*Math.random()>>>0),sL=0;function oL(t,e,n){return t.call.apply(t.bind,arguments)}function aL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=oL:It=aL,It.apply(null,arguments)}function Ql(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pi(){this.s=this.s,this.o=this.o}var lL=0;pi.prototype.s=!1;pi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lL!=0)&&iL(this)};pi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const px=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Pg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function h_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Th(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var uL=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function ba(t){return/^[\s\xa0]*$/.test(t)}function Sh(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Sh().indexOf(t)!=-1}function Rg(t){return Rg[" "](t),t}Rg[" "]=function(){};function cL(t,e){var n=nM;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var hL=Nn("Opera"),Xs=Nn("Trident")||Nn("MSIE"),mx=Nn("Edge"),Sp=mx||Xs,gx=Nn("Gecko")&&!(Sh().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),dL=Sh().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function yx(){var t=te.document;return t?t.documentMode:void 0}var Ap;e:{var Jd="",Zd=function(){var t=Sh();if(gx)return/rv:([^\);]+)(\)|;)/.exec(t);if(mx)return/Edge\/([\d\.]+)/.exec(t);if(Xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(dL)return/WebKit\/(\S+)/.exec(t);if(hL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zd&&(Jd=Zd?Zd[1]:""),Xs){var ef=yx();if(ef!=null&&ef>parseFloat(Jd)){Ap=String(ef);break e}}Ap=Jd}var Cp;if(te.document&&Xs){var d_=yx();Cp=d_||parseInt(Ap,10)||void 0}else Cp=void 0;var fL=Cp;function Na(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gx){e:{try{Rg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Na.$.h.call(this)}}it(Na,xt);var pL={2:"touch",3:"pen",4:"mouse"};Na.prototype.h=function(){Na.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var al="closure_listenable_"+(1e6*Math.random()|0),mL=0;function gL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++mL,this.fa=this.ia=!1}function Ah(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function yL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function vx(t){const e={};for(const n in t)e[n]=t[n];return e}const f_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _x(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<f_.length;s++)n=f_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ch(t){this.src=t,this.g={},this.h=0}Ch.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Pp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gL(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function kp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=px(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ah(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ng="closure_lm_"+(1e6*Math.random()|0),tf={};function wx(t,e,n,r,i){if(r&&r.once)return Ix(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wx(t,e[s],n,r,i);return null}return n=Lg(n),t&&t[al]?t.O(e,n,ol(r)?!!r.capture:!!r,i):Ex(t,e,n,!1,r,i)}function Ex(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ol(i)?!!i.capture:!!i,a=Dg(t);if(a||(t[Ng]=a=new Ch(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)uL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Tx(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vL(){function t(n){return e.call(t.src,t.listener,n)}const e=_L;return t}function Ix(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ix(t,e[s],n,r,i);return null}return n=Lg(n),t&&t[al]?t.P(e,n,ol(r)?!!r.capture:!!r,i):Ex(t,e,n,!0,r,i)}function xx(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xx(t,e[s],n,r,i);else r=ol(r)?!!r.capture:!!r,n=Lg(n),t&&t[al]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Pp(s,n,r,i),-1<n&&(Ah(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Dg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pp(e,n,r,i)),(n=-1<t?e[t]:null)&&Og(n))}function Og(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[al])kp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Tx(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Dg(e))?(kp(n,t),n.h==0&&(n.src=null,e[Ng]=null)):Ah(t)}}}function Tx(t){return t in tf?tf[t]:tf[t]="on"+t}function _L(t,e){if(t.fa)t=!0;else{e=new Na(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Og(t),t=n.call(r,e)}return t}function Dg(t){return t=t[Ng],t instanceof Ch?t:null}var nf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lg(t){return typeof t=="function"?t:(t[nf]||(t[nf]=function(e){return t.handleEvent(e)}),t[nf])}function nt(){pi.call(this),this.i=new Ch(this),this.S=this,this.J=null}it(nt,pi);nt.prototype[al]=!0;nt.prototype.removeEventListener=function(t,e,n,r){xx(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(r,t),_x(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Yl(o,r,!0,e)&&i}if(o=e.g=t,i=Yl(o,r,!0,e)&&i,i=Yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Yl(o,r,!1,e)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ah(n[r]);delete t.g[e],t.h--}}this.J=null};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&kp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mg=te.JSON.stringify;class wL{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function EL(){var t=Vg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class IL{constructor(){this.h=this.g=null}add(e,n){const r=Sx.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Sx=new wL(()=>new xL,t=>t.reset());class xL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function SL(t){te.setTimeout(()=>{throw t},0)}let Oa,Da=!1,Vg=new IL,Ax=()=>{const t=te.Promise.resolve(void 0);Oa=()=>{t.then(AL)}};var AL=()=>{for(var t;t=EL();){try{t.h.call(t.g)}catch(n){SL(n)}var e=Sx;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Da=!1};function kh(t,e){nt.call(this),this.h=t||1,this.g=e||te,this.j=It(this.qb,this),this.l=Date.now()}it(kh,nt);V=kh.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&($g(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $g(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){kh.$.N.call(this),$g(this),delete this.g};function jg(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Cx(t){t.g=jg(()=>{t.g=null,t.i&&(t.i=!1,Cx(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CL extends pi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cx(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function La(t){pi.call(this),this.h=t,this.g={}}it(La,pi);var p_=[];function kx(t,e,n,r){Array.isArray(n)||(n&&(p_[0]=n.toString()),n=p_);for(var i=0;i<n.length;i++){var s=wx(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Px(t){bg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Og(e)},t),t.g={}}La.prototype.N=function(){La.$.N.call(this),Px(this)};La.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ph(){this.g=!0}Ph.prototype.Ea=function(){this.g=!1};function kL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function xs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+bL(t,n)+(r?" "+r:"")})}function RL(t,e){t.info(function(){return"TIMEOUT: "+e})}Ph.prototype.info=function(){};function bL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mg(n)}catch{return e}}var Zi={},m_=null;function Rh(){return m_=m_||new nt}Zi.Ta="serverreachability";function Rx(t){xt.call(this,Zi.Ta,t)}it(Rx,xt);function Ma(t){const e=Rh();ht(e,new Rx(e))}Zi.STAT_EVENT="statevent";function bx(t,e){xt.call(this,Zi.STAT_EVENT,t),this.stat=e}it(bx,xt);function Rt(t){const e=Rh();ht(e,new bx(e,t))}Zi.Ua="timingevent";function Nx(t,e){xt.call(this,Zi.Ua,t),this.size=e}it(Nx,xt);function ll(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var bh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ox={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fg(){}Fg.prototype.h=null;function g_(t){return t.h||(t.h=t.i())}function Dx(){}var ul={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ug(){xt.call(this,"d")}it(Ug,xt);function zg(){xt.call(this,"c")}it(zg,xt);var Rp;function Nh(){}it(Nh,Fg);Nh.prototype.g=function(){return new XMLHttpRequest};Nh.prototype.i=function(){return{}};Rp=new Nh;function cl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new La(this),this.P=NL,t=Sp?125:void 0,this.V=new kh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Lx}function Lx(){this.i=null,this.g="",this.h=!1}var NL=45e3,bp={},pc={};V=cl.prototype;V.setTimeout=function(t){this.P=t};function Np(t,e,n){t.L=1,t.v=Dh(dr(e)),t.s=n,t.S=!0,Mx(t,null)}function Mx(t,e){t.G=Date.now(),hl(t),t.A=dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Wx(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Lx,t.g=hT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new CL(It(t.Pa,t,t.g),t.O)),kx(t.U,t.g,"readystatechange",t.nb),e=t.I?vx(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ma(),kL(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&On(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const c=On(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Sp||this.g&&(this.h.h||this.g.ja()||w_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ma(3):Ma(2)),Oh(this);var n=this.g.da();this.ca=n;t:if(Vx(this)){var r=w_(this.g);t="";var i=r.length,s=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ti(this),sa(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,PL(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ba(a)){var u=a;break t}}u=null}if(n=u)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Op(this,n);else{this.i=!1,this.o=3,Rt(12),Ti(this),sa(this);break e}}this.S?($x(this,c,o),Sp&&this.i&&c==3&&(kx(this.U,this.V,"tick",this.mb),this.V.start())):(xs(this.j,this.m,o,null),Op(this,o)),c==4&&Ti(this),this.i&&!this.J&&(c==4?aT(this.l,this):(this.i=!1,hl(this)))}else ZL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),Ti(this),sa(this)}}}catch{}finally{}};function Vx(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function $x(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=OL(t,n),i==pc){e==4&&(t.o=4,Rt(14),r=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bp){t.o=4,Rt(15),xs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xs(t.j,t.m,i,null),Op(t,i);Vx(t)&&i!=pc&&i!=bp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kg(e),e.M=!0,Rt(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),Ti(t),sa(t))}V.mb=function(){if(this.g){var t=On(this.g),e=this.g.ja();this.C<e.length&&(Oh(this),$x(this,t,e),this.i&&t!=4&&hl(this))}};function OL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pc:(n=Number(e.substring(n,r)),isNaN(n)?bp:(r+=1,r+n>e.length?pc:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,Ti(this)};function hl(t){t.Y=Date.now()+t.P,jx(t,t.P)}function jx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ll(It(t.lb,t),e)}function Oh(t){t.B&&(te.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(RL(this.j,this.A),this.L!=2&&(Ma(),Rt(17)),Ti(this),this.o=2,sa(this)):jx(this,this.Y-t)};function sa(t){t.l.H==0||t.J||aT(t.l,t)}function Ti(t){Oh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,$g(t.V),Px(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Op(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dp(n.i,t))){if(!t.K&&Dp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yc(n),$h(n);else break e;Gg(n),Rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ll(It(n.ib,n),6e3));if(1>=Gx(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Si(n,11)}else if((t.K||n.g==t)&&yc(n),!ba(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bg(s,s.h),s.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,ke(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cT(r,r.J?r.pa:null,r.Y),o.K){Kx(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Oh(a),hl(a)),r.g=o}else sT(r);0<n.j.length&&jh(n)}else u[0]!="stop"&&u[0]!="close"||Si(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Si(n,7):Hg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ma(4)}catch{}}function DL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Th(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function LL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Th(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fx(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Th(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LL(t),r=DL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Ux=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ML(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bi){this.h=t.h,mc(this,t.j),this.s=t.s,this.g=t.g,gc(this,t.m),this.l=t.l;var e=t.i,n=new Va;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),y_(this,n),this.o=t.o}else t&&(e=String(t).match(Ux))?(this.h=!1,mc(this,e[1]||"",!0),this.s=Fo(e[2]||""),this.g=Fo(e[3]||"",!0),gc(this,e[4]),this.l=Fo(e[5]||"",!0),y_(this,e[6]||"",!0),this.o=Fo(e[7]||"")):(this.h=!1,this.i=new Va(null,this.h))}bi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Uo(e,v_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Uo(e,v_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Uo(n,n.charAt(0)=="/"?jL:$L,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Uo(n,UL)),t.join("")};function dr(t){return new bi(t)}function mc(t,e,n){t.j=n?Fo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function y_(t,e,n){e instanceof Va?(t.i=e,zL(t.i,t.h)):(n||(e=Uo(e,FL)),t.i=new Va(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function Dh(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Uo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var v_=/[#\/\?@]/g,$L=/[#\?:]/g,jL=/[#\?]/g,FL=/[#\?@]/g,UL=/#/g;function Va(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mi(t){t.g||(t.g=new Map,t.h=0,t.i&&ML(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Va.prototype;V.add=function(t,e){mi(this),this.i=null,t=po(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zx(t,e){mi(t),e=po(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bx(t,e){return mi(t),e=po(t,e),t.g.has(e)}V.forEach=function(t,e){mi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.ta=function(){mi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.Z=function(t){mi(this);let e=[];if(typeof t=="string")Bx(this,t)&&(e=e.concat(this.g.get(po(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return mi(this),this.i=null,t=po(this,t),Bx(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Wx(t,e,n){zx(t,e),0<n.length&&(t.i=null,t.g.set(po(t,e),Pg(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function po(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zL(t,e){e&&!t.j&&(mi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(zx(this,r),Wx(this,i,n))},t)),t.j=e}var BL=class{constructor(t,e){this.g=t,this.map=e}};function qx(t){this.l=t||WL,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WL=10;function Hx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gx(t){return t.h?1:t.g?t.g.size:0}function Dp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bg(t,e){t.g?t.g.add(e):t.h=e}function Kx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qx.prototype.cancel=function(){if(this.i=Qx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qx(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Pg(t.i)}var qL=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function HL(){this.g=new qL}function GL(t,e,n){const r=n||"";try{Fx(t,function(i,s){let o=i;ol(i)&&(o=Mg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KL(t,e){const n=new Ph;if(te.Image){const r=new Image;r.onload=Ql(Xl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ql(Xl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ql(Xl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ql(Xl,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Lh(t){this.l=t.fc||null,this.j=t.ob||!1}it(Lh,Fg);Lh.prototype.g=function(){return new Mh(this.l,this.j)};Lh.prototype.i=function(t){return function(){return t}}({});function Mh(t,e){nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Wg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Mh,nt);var Wg=0;V=Mh.prototype;V.open=function(t,e){if(this.readyState!=Wg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$a(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dl(this)),this.readyState=Wg};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$a(this)),this.g&&(this.readyState=3,$a(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yx(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Yx(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?dl(this):$a(this),this.readyState==3&&Yx(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,dl(this))};V.Ya=function(t){this.g&&(this.response=t,dl(this))};V.ka=function(){this.g&&dl(this)};function dl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$a(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $a(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var QL=te.JSON.parse;function Fe(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xx,this.L=this.M=!1}it(Fe,nt);var Xx="",YL=/^https?$/i,XL=["POST","PUT"];V=Fe.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rp.g(),this.C=this.u?g_(this.u):g_(Rp),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){__(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=te.FormData&&t instanceof te.FormData,!(0<=px(XL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{eT(this),0<this.B&&((this.L=JL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=jg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){__(this,s)}};function JL(t){return Xs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof kg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function __(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jx(t),Vh(t)}function Jx(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Vh(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vh(this,!0)),Fe.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Zx(this):this.kb())};V.kb=function(){Zx(this)};function Zx(t){if(t.h&&typeof kg<"u"&&(!t.C[1]||On(t)!=4||t.da()!=2)){if(t.v&&On(t)==4)jg(t.La,0,t);else if(ht(t,"readystatechange"),On(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Ux)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!YL.test(i?i.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var s=2<On(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Jx(t)}}finally{Vh(t)}}}}function Vh(t,e){if(t.g){eT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function eT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function On(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),QL(e)}};function w_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Xx:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ZL(t){const e={};t=(t.g&&2<=On(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ba(t[r]))continue;var n=TL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}yL(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tT(t){let e="";return bg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function bo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nT(t){this.Ga=0,this.j=[],this.l=new Ph,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bo("baseRetryDelayMs",5e3,t),this.hb=bo("retryDelaySeedMs",1e4,t),this.eb=bo("forwardChannelMaxRetries",2,t),this.xa=bo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qx(t&&t.concurrentRequestLimit),this.Ja=new HL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=nT.prototype;V.ra=8;V.H=1;function Hg(t){if(rT(t),t.H==3){var e=t.W++,n=dr(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),fl(t,n),e=new cl(t,t.l,e),e.L=2,e.v=Dh(dr(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=hT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),hl(e)}uT(t)}function $h(t){t.g&&(Kg(t),t.g.cancel(),t.g=null)}function rT(t){$h(t),t.u&&(te.clearTimeout(t.u),t.u=null),yc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function jh(t){if(!Hx(t.i)&&!t.m){t.m=!0;var e=t.Na;Oa||Ax(),Da||(Oa(),Da=!0),Vg.add(e,t),t.C=0}}function eM(t,e){return Gx(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ll(It(t.Na,t,e),lT(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new cl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=vx(s),_x(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=iT(this,i,e),n=dr(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),fl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(tT(s)))+"&"+e:this.o&&qg(n,this.o,s)),Bg(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,Np(i,n,null)):Np(i,n,e),this.H=2}}else this.H==3&&(t?E_(this,t):this.j.length==0||Hx(this.i)||E_(this))};function E_(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);ke(r,"SID",t.K),ke(r,"RID",n),ke(r,"AID",t.V),fl(t,r),t.o&&t.s&&qg(r,t.o,t.s),n=new cl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=iT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Bg(t.i,n),Np(n,r,e)}function fl(t,e){t.na&&bg(t.na,function(n,r){ke(e,r,n)}),t.h&&Fx({},function(n,r){ke(e,r,n)})}function iT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?It(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{GL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function sT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Oa||Ax(),Da||(Oa(),Da=!0),Vg.add(e,t),t.A=0}}function Gg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ll(It(t.Ma,t),lT(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,oT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ll(It(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),$h(this),oT(this))};function Kg(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function oT(t){t.g=new cl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),fl(t,e),t.o&&t.s&&qg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Dh(dr(e)),n.s=null,n.S=!0,Mx(n,t)}V.ib=function(){this.v!=null&&(this.v=null,$h(this),Gg(this),Rt(19))};function yc(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function aT(t,e){var n=null;if(t.g==e){yc(t),Kg(t),t.g=null;var r=2}else if(Dp(t.i,e))n=e.F,Kx(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Rh(),ht(r,new Nx(r,n)),jh(t)}else sT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&eM(t,e)||r==2&&Gg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Si(t,5);break;case 4:Si(t,10);break;case 3:Si(t,6);break;default:Si(t,2)}}}function lT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Si(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=It(t.pb,t);n||(n=new bi("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||mc(n,"https"),Dh(n)),KL(n.toString(),r)}else Rt(2);t.H=0,t.h&&t.h.za(e),uT(t),rT(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function uT(t){if(t.H=0,t.ma=[],t.h){const e=Qx(t.i);(e.length!=0||t.j.length!=0)&&(h_(t.ma,e),h_(t.ma,t.j),t.i.i.length=0,Pg(t.j),t.j.length=0),t.h.ya()}}function cT(t,e,n){var r=n instanceof bi?dr(n):new bi(n);if(r.g!="")e&&(r.g=e+"."+r.g),gc(r,r.m);else{var i=te.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new bi(null);r&&mc(s,r),e&&(s.g=e),i&&gc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ke(r,n,e),ke(r,"VER",t.ra),fl(t,r),r}function hT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Fe(new Lh({ob:!0})):new Fe(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function dT(){}V=dT.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function vc(){if(Xs&&!(10<=Number(fL)))throw Error("Environmental error: no available transport.")}vc.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){nt.call(this),this.g=new nT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ba(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ba(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mo(this)}it(Kt,nt);Kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cT(t,null,t.Y),jh(t)};Kt.prototype.close=function(){Hg(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mg(t),t=n);e.j.push(new BL(e.fb++,t)),e.H==3&&jh(e)};Kt.prototype.N=function(){this.g.h=null,delete this.j,Hg(this.g),delete this.g,Kt.$.N.call(this)};function fT(t){Ug.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(fT,Ug);function pT(){zg.call(this),this.status=1}it(pT,zg);function mo(t){this.g=t}it(mo,dT);mo.prototype.Ba=function(){ht(this.g,"a")};mo.prototype.Aa=function(t){ht(this.g,new fT(t))};mo.prototype.za=function(t){ht(this.g,new pT)};mo.prototype.ya=function(){ht(this.g,"b")};function tM(){this.blockSize=-1}function Tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(Tn,tM);Tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)rf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){rf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){rf(this,r),i=0;break}}this.h=i,this.i+=e};Tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var nM={};function Qg(t){return-128<=t&&128>t?cL(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function Dn(t){if(isNaN(t)||!isFinite(t))return Ns;if(0>t)return ut(Dn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lp;return new Ie(e,0)}function mT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(mT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Dn(Math.pow(e,8)),r=Ns,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Dn(Math.pow(e,s)),r=r.R(s).add(Dn(o))):(r=r.R(n),r=r.add(Dn(o)))}return r}var Lp=4294967296,Ns=Qg(0),Mp=Qg(1),I_=Qg(16777216);V=Ie.prototype;V.ea=function(){if(tn(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lp+r)*e,e*=Lp}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ir(this))return"0";if(tn(this))return"-"+ut(this).toString(t);for(var e=Dn(Math.pow(t,6)),n=this,r="";;){var i=wc(n,e).g;n=_c(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ir(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tn(t){return t.h==-1}V.X=function(t){return t=_c(this,t),tn(t)?-1:ir(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(Mp)}V.abs=function(){return tn(this)?ut(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function _c(t,e){return t.add(ut(e))}V.R=function(t){if(ir(this)||ir(t))return Ns;if(tn(this))return tn(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(tn(t))return ut(this.R(ut(t)));if(0>this.X(I_)&&0>t.X(I_))return Dn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Jl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Jl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Jl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Jl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function Jl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function No(t,e){this.g=t,this.h=e}function wc(t,e){if(ir(e))throw Error("division by zero");if(ir(t))return new No(Ns,Ns);if(tn(t))return e=wc(ut(t),e),new No(ut(e.g),ut(e.h));if(tn(e))return e=wc(t,ut(e)),new No(ut(e.g),e.h);if(30<t.g.length){if(tn(t)||tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Mp,r=e;0>=r.X(t);)n=x_(n),r=x_(r);var i=ss(n,1),s=ss(r,1);for(r=ss(r,2),n=ss(n,2);!ir(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ss(r,1),n=ss(n,1)}return e=_c(t,i.R(e)),new No(i,e)}for(i=Ns;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Dn(n),o=s.R(e);tn(o)||0<o.X(t);)n-=r,s=Dn(n),o=s.R(e);ir(s)&&(s=Mp),i=i.add(s),t=_c(t,o)}return new No(i,t)}V.gb=function(t){return wc(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function x_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ie(i,t.h)}vc.prototype.createWebChannel=vc.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;bh.NO_ERROR=0;bh.TIMEOUT=8;bh.HTTP_ERROR=6;Ox.COMPLETE="complete";Dx.EventType=ul;ul.OPEN="a";ul.CLOSE="b";ul.ERROR="c";ul.MESSAGE="d";nt.prototype.listen=nt.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;Tn.prototype.digest=Tn.prototype.l;Tn.prototype.reset=Tn.prototype.reset;Tn.prototype.update=Tn.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=Dn;Ie.fromString=mT;var rM=function(){return new vc},iM=function(){return Rh()},sf=bh,sM=Ox,oM=Zi,T_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Zl=Dx,aM=Fe,lM=Tn,Os=Ie;const S_="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let go="10.3.0";/**
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
 */const zi=new gg("@firebase/firestore");function A_(){return zi.logLevel}function q(t,...e){if(zi.logLevel<=ge.DEBUG){const n=e.map(Yg);zi.debug(`Firestore (${go}): ${t}`,...n)}}function fr(t,...e){if(zi.logLevel<=ge.ERROR){const n=e.map(Yg);zi.error(`Firestore (${go}): ${t}`,...n)}}function Js(t,...e){if(zi.logLevel<=ge.WARN){const n=e.map(Yg);zi.warn(`Firestore (${go}): ${t}`,...n)}}function Yg(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Re(t,e){t||ee()}function se(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class cM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hM{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new gT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new yt(e)}}class dM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new pM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function gM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Je(0,0))}static max(){return new re(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ja{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const yM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends ja{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return yM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Se.fromString(e))}static fromName(e){return new H(Se.fromString(e).popFirst(5))}static empty(){return new H(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Se(e.slice()))}}function vM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new oi(i,H.empty(),e)}function _M(t){return new oi(t.readTime,t.key,-1)}class oi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new oi(re.min(),H.empty(),-1)}static max(){return new oi(re.max(),H.empty(),-1)}}function wM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const EM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pl(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==EM)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ml(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Xg.ae=-1;function Fh(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}function xM(t){return typeof t=="number"&&Number.isInteger(t)&&!Ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function C_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Tt{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new k_(this.data.getIterator())}getIteratorFrom(e){return new k_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class k_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new Tt(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _T extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _T("Invalid base64 string: "+s):s}}(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const TM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(t){if(Re(!!t),typeof t=="string"){let e=0;const n=TM.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */function Uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jg(t){const e=t.mapValue.fields.__previous_value__;return Uh(e)?Jg(e):e}function Fa(t){const e=ai(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class SM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ua{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ua&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uh(t)?4:AM(t)?9007199254740991:10:ee()}function Bn(t,e){if(t===e)return!0;const n=Wi(t);if(n!==Wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ai(i.timestampValue),a=ai(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return He(i.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return He(i.integerValue)===He(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=He(i.doubleValue),a=He(s.doubleValue);return o===a?Ec(o)===Ec(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(C_(o)!==C_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Bn(o[l],a[l])))return!1;return!0}(t,e);default:return ee()}}function za(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function eo(t,e){if(t===e)return 0;const n=Wi(t),r=Wi(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=He(s.integerValue||s.doubleValue),l=He(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return P_(t.timestampValue,e.timestampValue);case 4:return P_(Fa(t),Fa(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bi(s),l=Bi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ve(a[u],l[u]);if(c!==0)return c}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ve(He(s.latitude),He(o.latitude));return a!==0?a:ve(He(s.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=eo(a[u],l[u]);if(c)return c}return ve(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===tu.mapValue&&o===tu.mapValue)return 0;if(s===tu.mapValue)return 1;if(o===tu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ve(l[h],c[h]);if(d!==0)return d;const p=eo(a[l[h]],u[c[h]]);if(p!==0)return p}return ve(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ee()}}function P_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=ai(t),r=ai(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function to(t){return Vp(t)}function Vp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vp(n.fields[o])}`;return i+"}"}(t.mapValue):ee()}function Ic(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $p(t){return!!t&&"integerValue"in t}function Zg(t){return!!t&&"arrayValue"in t}function R_(t){return!!t&&"nullValue"in t}function b_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function oa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=oa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(oa(this.value))}}function wT(t){const e=[];return es(t.fields,(n,r)=>{const i=new wt([n]);if(Iu(r)){const s=wT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,re.min(),re.min(),re.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,re.min(),re.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,re.min(),re.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class no{constructor(e,n){this.position=e,this.inclusive=n}}function N_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=eo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function O_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ds{constructor(e,n="asc"){this.field=e,this.dir=n}}function CM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ET{}class Ke extends ET{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PM(e,n,r):n==="array-contains"?new NM(e,r):n==="in"?new OM(e,r):n==="not-in"?new DM(e,r):n==="array-contains-any"?new LM(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RM(e,r):new bM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(eo(n,this.value)):n!==null&&Wi(this.value)===Wi(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sn extends ET{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Sn(e,n)}matches(e){return IT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function IT(t){return t.op==="and"}function xT(t){return kM(t)&&IT(t)}function kM(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function jp(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+to(t.value);if(xT(t))return t.filters.map(e=>jp(e)).join(",");{const e=t.filters.map(n=>jp(n)).join(",");return`${t.op}(${e})`}}function TT(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Bn(r.value,i.value)}(t,e):t instanceof Sn?function(r,i){return i instanceof Sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&TT(o,i.filters[a]),!0):!1}(t,e):void ee()}function ST(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(ST).join(" ,")+"}"}(t):"Filter"}class PM extends Ke{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class RM extends Ke{constructor(e,n){super(e,"in",n),this.keys=AT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bM extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=AT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function AT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class NM extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zg(n)&&za(n.arrayValue,this.value)}}class OM extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&za(this.value.arrayValue,n)}}class DM extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!za(this.value.arrayValue,n)}}class LM extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>za(this.value.arrayValue,r))}}/**
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
 */class MM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function D_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MM(t,e,n,r,i,s,o)}function ey(t){const e=se(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>to(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>to(r)).join(",")),e.he=n}return e.he}function ty(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!TT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!O_(t.startAt,e.startAt)&&O_(t.endAt,e.endAt)}function Fp(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ts{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function VM(t,e,n,r,i,s,o,a){return new ts(t,e,n,r,i,s,o,a)}function zh(t){return new ts(t)}function L_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ny(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ry(t){return t.collectionGroup!==null}function Ls(t){const e=se(t);if(e.Pe===null){e.Pe=[];const n=Bh(e),r=ny(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ds(n)),e.Pe.push(new Ds(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ds(wt.keyField(),s))}}}return e.Pe}function pr(t){const e=se(t);return e.Ie||(e.Ie=$M(e,Ls(t))),e.Ie}function $M(t,e){if(t.limitType==="F")return D_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ds(i.field,s)});const n=t.endAt?new no(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new no(t.startAt.position,t.startAt.inclusive):null;return D_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Up(t,e){e.getFirstInequalityField(),Bh(t);const n=t.filters.concat([e]);return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xc(t,e,n){return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wh(t,e){return ty(pr(t),pr(e))&&t.limitType===e.limitType}function CT(t){return`${ey(pr(t))}|lt:${t.limitType}`}function zp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ST(i)).join(", ")}]`),Fh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>to(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>to(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function qh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=N_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ls(r),i)||r.endAt&&!function(o,a,l){const u=N_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ls(r),i))}(t,e)}function jM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kT(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=FM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function FM(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?eo(l,u):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class yo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return vT(this.inner)}size(){return this.innerSize}}/**
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
 */const UM=new Ve(H.comparator);function mr(){return UM}const PT=new Ve(H.comparator);function zo(...t){let e=PT;for(const n of t)e=e.insert(n.key,n);return e}function RT(t){let e=PT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ai(){return aa()}function bT(){return aa()}function aa(){return new yo(t=>t.toString(),(t,e)=>t.isEqual(e))}const zM=new Ve(H.comparator),BM=new Tt(H.comparator);function le(...t){let e=BM;for(const n of t)e=e.add(n);return e}const WM=new Tt(ve);function qM(){return WM}/**
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
 */function NT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function OT(t){return{integerValue:""+t}}function HM(t,e){return xM(e)?OT(e):NT(t,e)}/**
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
 */class Hh{constructor(){this._=void 0}}function GM(t,e,n){return t instanceof Tc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uh(s)&&(s=Jg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ba?LT(t,e):t instanceof Wa?MT(t,e):function(i,s){const o=DT(i,s),a=M_(o)+M_(i.Ee);return $p(o)&&$p(i.Ee)?OT(a):NT(i.serializer,a)}(t,e)}function KM(t,e,n){return t instanceof Ba?LT(t,e):t instanceof Wa?MT(t,e):n}function DT(t,e){return t instanceof Sc?function(r){return $p(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Tc extends Hh{}class Ba extends Hh{constructor(e){super(),this.elements=e}}function LT(t,e){const n=VT(e);for(const r of t.elements)n.some(i=>Bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wa extends Hh{constructor(e){super(),this.elements=e}}function MT(t,e){let n=VT(e);for(const r of t.elements)n=n.filter(i=>!Bn(i,r));return{arrayValue:{values:n}}}class Sc extends Hh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function M_(t){return He(t.integerValue||t.doubleValue)}function VT(t){return Zg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function QM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ba&&i instanceof Ba||r instanceof Wa&&i instanceof Wa?Zs(r.elements,i.elements,Bn):r instanceof Sc&&i instanceof Sc?Bn(r.Ee,i.Ee):r instanceof Tc&&i instanceof Tc}(t.transform,e.transform)}class YM{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gh{}function $T(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iy(t.key,sn.none()):new gl(t.key,t.data,sn.none());{const n=t.data,r=Mt.empty();let i=new Tt(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gi(t.key,r,new qt(i.toArray()),sn.none())}}function XM(t,e,n){t instanceof gl?function(i,s,o){const a=i.value.clone(),l=$_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof gi?function(i,s,o){if(!xu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=$_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function la(t,e,n,r){return t instanceof gl?function(s,o,a,l){if(!xu(s.precondition,o))return a;const u=s.value.clone(),c=j_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof gi?function(s,o,a,l){if(!xu(s.precondition,o))return a;const u=j_(s.fieldTransforms,l,o),c=o.data;return c.setAll(jT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return xu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function JM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DT(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function V_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zs(r,i,(s,o)=>QM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gl extends Gh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gi extends Gh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $_(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,KM(o,a,n[i]))}return r}function j_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,GM(s,o,e))}return r}class iy extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZM extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eV{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&XM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=$T(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>V_(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>V_(n,r))}}class sy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return zM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sy(e,n,r,i)}}/**
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
 */class tV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,de;function rV(t){switch(t){default:return ee();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function FT(t){if(t===void 0)return fr("GRPC error has no .code"),A.UNKNOWN;switch(t){case qe.OK:return A.OK;case qe.CANCELLED:return A.CANCELLED;case qe.UNKNOWN:return A.UNKNOWN;case qe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case qe.INTERNAL:return A.INTERNAL;case qe.UNAVAILABLE:return A.UNAVAILABLE;case qe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case qe.NOT_FOUND:return A.NOT_FOUND;case qe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case qe.ABORTED:return A.ABORTED;case qe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case qe.DATA_LOSS:return A.DATA_LOSS;default:return ee()}}(de=qe||(qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iV(){return new TextEncoder}/**
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
 */const sV=new Os([4294967295,4294967295],0);function F_(t){const e=iV().encode(t),n=new lM;return n.update(e),new Uint8Array(n.digest())}function U_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Os([n,r],0),new Os([i,s],0)]}class oy{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bo(`Invalid padding: ${n}`);if(r<0)throw new Bo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bo(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Os.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Os.fromNumber(r)));return i.compare(sV)===1&&(i=new Os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=F_(e),[r,i]=U_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new oy(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=F_(e),[r,i]=U_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,yl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kh(re.min(),i,new Ve(ve),mr(),le())}}class yl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yl(r,n,le(),le(),le())}}/**
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
 */class Tu{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class UT{constructor(e,n){this.targetId=e,this.ye=n}}class zT{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class z_{constructor(){this.we=0,this.Se=W_(),this.be=kt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=le(),n=le(),r=le();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new yl(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=W_()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class oV{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=mr(),this.Ue=B_(),this.We=new Ve(ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Fp(s))if(r===0){const o=new H(s.path);this.je(n,o,_t.newNoDocument(o,re.min()))}else Re(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Bi(r).toUint8Array()}catch(l){if(l instanceof _T)return Js("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new oy(o,i,s)}catch(l){return Js(l instanceof Bo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Fp(a.target)){const l=new H(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,_t.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=le();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Kh(e,n,this.We,this.$e,r);return this.$e=mr(),this.Ue=B_(),this.We=new Ve(ve),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new z_,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Tt(ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new z_),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function B_(){return new Ve(H.comparator)}function W_(){return new Ve(H.comparator)}const aV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uV=(()=>({and:"AND",or:"OR"}))();class cV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bp(t,e){return t.useProto3Json||Fh(e)?e:{value:e}}function Ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hV(t,e){return Ac(t,e.toTimestamp())}function Fn(t){return Re(!!t),re.fromTimestamp(function(n){const r=ai(n);return new Je(r.seconds,r.nanos)}(t))}function ay(t,e){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function WT(t){const e=Se.fromString(t);return Re(KT(e)),e}function Wp(t,e){return ay(t.databaseId,e.path)}function of(t,e){const n=WT(e);if(n.get(1)!==t.databaseId.projectId)throw new M(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(qT(n))}function qp(t,e){return ay(t.databaseId,e)}function dV(t){const e=WT(t);return e.length===4?Se.emptyPath():qT(e)}function Hp(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qT(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function q_(t,e,n){return{name:Wp(t,e),fields:n.value.mapValue.fields}}function fV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Re(c===void 0||typeof c=="string"),kt.fromBase64String(c||"")):(Re(c===void 0||c instanceof Uint8Array),kt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:FT(u.code);return new M(c,u.message||"")}(o);n=new zT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=of(t,r.document.name),s=Fn(r.document.updateTime),o=r.document.createTime?Fn(r.document.createTime):re.min(),a=new Mt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Tu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=of(t,r.document),s=r.readTime?Fn(r.readTime):re.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=of(t,r.document),s=r.removedTargetIds||[];n=new Tu([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nV(i,s),a=r.targetId;n=new UT(a,o)}}return n}function pV(t,e){let n;if(e instanceof gl)n={update:q_(t,e.key,e.value)};else if(e instanceof iy)n={delete:Wp(t,e.key)};else if(e instanceof gi)n={update:q_(t,e.key,e.data),updateMask:xV(e.fieldMask)};else{if(!(e instanceof ZM))return ee();n={verify:Wp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Tc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ba)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee()}(t,e.precondition)),n}function mV(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Fn(i.updateTime):Fn(s);return o.isEqual(re.min())&&(o=Fn(s)),new YM(o,i.transformResults||[])}(n,e))):[]}function gV(t,e){return{documents:[qp(t,e.path)]}}function yV(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=qp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return GT(Sn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:as(h.field),direction:wV(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Bp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function vV(t){let e=dV(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=HT(h);return d instanceof Sn&&xT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Ds(ls(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Fh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new no(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new no(p,d)}(n.endAt)),VM(e,i,o,s,a,"F",l,u)}function _V(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ls(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ls(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>HT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function wV(t){return aV[t]}function EV(t){return lV[t]}function IV(t){return uV[t]}function as(t){return{fieldPath:t.canonicalString()}}function ls(t){return wt.fromServerFormat(t.fieldPath)}function GT(t){return t instanceof Ke?function(n){if(n.op==="=="){if(b_(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(R_(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(b_(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(R_(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:EV(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(i=>GT(i));return r.length===1?r[0]:{compositeFilter:{op:IV(n.op),filters:r}}}(t):ee()}function xV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $r{constructor(e,n,r,i,s=re.min(),o=re.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TV{constructor(e){this.ht=e}}function SV(t){const e=vV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
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
 */class AV{constructor(){this._n=new CV}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(oi.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(oi.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class CV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(Se.comparator)).toArray()}}/**
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
 */class ro{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ro(0)}static Bn(){return new ro(-1)}}/**
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
 */class kV{constructor(){this.changes=new yo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&la(r.mutation,i,qt.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Ai();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ai();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=mr();const o=aa(),a=function(){return aa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof gi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),la(c.mutation,u,c.mutation.getFieldMask(),Je.now())):o.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new PV(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=aa();let i=new Ve((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||qt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=bT();c.forEach(d=>{if(!s.has(d)){const p=$T(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ry(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Ai());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,le())).next(c=>({batchId:a,changes:RT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zo();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(c,h){return new ts(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,_t.newInvalidDocument(u)))});let o=zo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&la(u.mutation,l,qt.empty(),Je.now()),qh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class bV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Fn(i.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:SV(i.bundledQuery),readTime:Fn(i.readTime)}}(n)),R.resolve()}}/**
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
 */class NV{constructor(){this.overlays=new Ve(H.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ai();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Ai(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ai(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ai(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tV(n,r));let s=this.hr.get(n);s===void 0&&(s=le(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class ly{constructor(){this.Pr=new Tt(Ze.Ir),this.Tr=new Tt(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new H(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new H(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=le();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return H.comparator(e.key,n.key)||ve(e.pr,n.pr)}static Er(e,n){return ve(e.pr,n.pr)||H.comparator(e.key,n.key)}}/**
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
 */class OV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Tt(Ze.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eV(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(ve);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new H(s),0);let a=new Tt(ve);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.wr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DV{constructor(e){this.Cr=e,this.docs=function(){return new Ve(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=mr();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wM(_M(c),r)<=0||(i.has(c.key)||qh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee()}Fr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LV(this)}getSize(e){return R.resolve(this.size)}}class LV extends kV{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class MV{constructor(e){this.persistence=e,this.Mr=new yo(n=>ey(n),ty),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ly,this.targetCount=0,this.Br=ro.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
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
 */class VV{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Xg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new MV(this),this.indexManager=new AV,this.remoteDocumentCache=function(i){return new DV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new TV(n),this.$r=new bV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new OV(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new $V(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return R.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class $V extends IM{constructor(e){super(),this.currentSequenceNumber=e}}class uy{constructor(e){this.persistence=e,this.zr=new ly,this.jr=null}static Hr(e){return new uy(e)}get Jr(){if(this.jr)return this.jr;throw ee()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const i=H.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,re.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class cy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cy(e,n.fromCache,r,i)}}/**
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
 */class jV{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(L_(n))return R.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xc(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.Hi(n,u,o,l.readTime)?this.Wi(e,xc(n,null,"F")):this.Ji(e,u,n,l)}))})))}Gi(e,n,r,i){return L_(n)||i.isEqual(re.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(A_()<=ge.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zp(n)),this.Ji(e,o,n,vM(i,-1)))})}ji(e,n){let r=new Tt(kT(e));return n.forEach((i,s)=>{qh(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return A_()<=ge.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",zp(n)),this.Ui.getDocumentsMatchingQuery(e,n,oi.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class FV{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new Ve(ve),this.Xi=new yo(s=>ey(s),ty),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RV(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function UV(t,e,n,r){return new FV(t,e,n,r)}async function QT(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=le();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function zV(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=R.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(y=>{const w=u.docVersions.get(v);Re(w!==null),y.version.compareTo(w)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=le();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YT(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function BV(t,e){const n=se(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(kt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,w,m){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.Qr.updateTargetData(s,p))});let l=mr(),u=le();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(WV(s,o,e.documentUpdates).next(c=>{l=c.ss,u=c.os})),!r.isEqual(re.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Zi=i,s))}function WV(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=mr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ss:o,os:i}})}function qV(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HV(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Gp(t,e,n){const r=se(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ml(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function H_(t,e,n){const r=se(t);let i=re.min(),s=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=se(l),d=h.Xi.get(c);return d!==void 0?R.resolve(h.Zi.get(d)):h.Qr.getTargetData(u,c)}(r,o,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:re.min(),n?s:le())).next(a=>(GV(r,jM(e),a),{documents:a,_s:s})))}function GV(t,e,n){let r=t.es.get(e)||re.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class G_{constructor(){this.activeTargetIds=qM()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KV{constructor(){this.Ys=new G_,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new G_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QV{Xs(e){}shutdown(){}}/**
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
 */class K_{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nu=null;function af(){return nu===null?nu=function(){return 268435456+Math.round(2147483648*Math.random())}():nu++,"0x"+nu.toString(16)}/**
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
 */const YV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XV{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
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
 */const mt="WebChannelConnection";class JV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=af(),l=this.po(n,r);q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(u,s,o),this.wo(n,l,u,i).then(c=>(q("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=YV[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=af();return new Promise((o,a)=>{const l=new aM;l.setWithCredentials(!0),l.listenOnce(sM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sf.NO_ERROR:const c=l.getResponseJson();q(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case sf.TIMEOUT:q(mt,`RPC '${e}' ${s} timed out`),a(new M(A.DEADLINE_EXCEEDED,"Request time out"));break;case sf.HTTP_ERROR:const h=l.getStatus();if(q(mt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(m)>=0?m:A.UNKNOWN}(p.status);a(new M(v,p.message))}else a(new M(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(A.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{q(mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);q(mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}bo(e,n,r){const i=af(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rM(),a=iM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");q(mt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const v=new XV({_o:w=>{p?q(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(q(mt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),q(mt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},ao:()=>h.close()}),y=(w,m,f)=>{w.listen(m,_=>{try{f(_)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,Zl.EventType.OPEN,()=>{p||q(mt,`RPC '${e}' stream ${i} transport opened.`)}),y(h,Zl.EventType.CLOSE,()=>{p||(p=!0,q(mt,`RPC '${e}' stream ${i} transport closed`),v.To())}),y(h,Zl.EventType.ERROR,w=>{p||(p=!0,Js(mt,`RPC '${e}' stream ${i} transport errored:`,w),v.To(new M(A.UNAVAILABLE,"The operation could not be completed")))}),y(h,Zl.EventType.MESSAGE,w=>{var m;if(!p){const f=w.data[0];Re(!!f);const _=f,E=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(E){q(mt,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let S=function(G){const $=qe[G];if($!==void 0)return FT($)}(T),b=E.message;S===void 0&&(S=A.INTERNAL,b="Unknown error status: "+T+" with message "+E.message),p=!0,v.To(new M(S,b)),h.close()}else q(mt,`RPC '${e}' stream ${i} received:`,f),v.Eo(f)}}),y(a,oM.STAT_EVENT,w=>{w.stat===T_.PROXY?q(mt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===T_.NOPROXY&&q(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Io()},0),v}}function lf(){return typeof document<"u"?document:null}/**
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
 */function Qh(t){return new cV(t,!0)}/**
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
 */class XT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class JT{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new XT(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new M(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZV extends JT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=fV(this.serializer,e),r=function(s){if(!("targetChange"in s))return re.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Fn(o.readTime):re.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Hp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Fp(l)?{documents:gV(s,l)}:{query:yV(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=BT(s,o.resumeToken);const u=Bp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(re.min())>0){a.readTime=Ac(s,o.snapshotVersion.toTimestamp());const u=Bp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=_V(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Hp(this.serializer),n.removeTarget=e,this.Yo(n)}}class e4 extends JT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=mV(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.l_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Hp(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pV(this.serializer,r))};this.Yo(n)}}/**
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
 */class t4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new M(A.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(A.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(A.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class n4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(fr(n),this.R_=!1):q("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class r4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{ns(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=se(l);u.S_.add(4),await vl(u),u.v_.set("Unknown"),u.S_.delete(4),await Yh(u)}(this))})}),this.v_=new n4(r,i)}}async function Yh(t){if(ns(t))for(const e of t.b_)await e(!0)}async function vl(t){for(const e of t.b_)await e(!1)}function ZT(t,e){const n=se(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),fy(n)?dy(n):vo(n).Go()&&hy(n,e))}function eS(t,e){const n=se(t),r=vo(n);n.w_.delete(e),r.Go()&&tS(n,e),n.w_.size===0&&(r.Go()?r.Ho():ns(n)&&n.v_.set("Unknown"))}function hy(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vo(t).o_(e)}function tS(t,e){t.C_.Le(e),vo(t).__(e)}function dy(t){t.C_=new oV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),vo(t).start(),t.v_.V_()}function fy(t){return ns(t)&&!vo(t).Wo()&&t.w_.size>0}function ns(t){return se(t).S_.size===0}function nS(t){t.C_=void 0}async function i4(t){t.w_.forEach((e,n)=>{hy(t,e)})}async function s4(t,e){nS(t),fy(t)?(t.v_.g_(e),dy(t)):t.v_.set("Unknown")}async function o4(t,e,n){if(t.v_.set("Online"),e instanceof zT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cc(t,r)}else if(e instanceof Tu?t.C_.Ge(e):e instanceof UT?t.C_.Xe(e):t.C_.He(e),!n.isEqual(re.min()))try{const r=await YT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.w_.get(u);c&&s.w_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.w_.get(l);if(!c)return;s.w_.set(l,c.withResumeToken(kt.EMPTY_BYTE_STRING,c.snapshotVersion)),tS(s,l);const h=new $r(c.target,l,u,c.sequenceNumber);hy(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Cc(t,r)}}async function Cc(t,e,n){if(!ml(e))throw e;t.S_.add(1),await vl(t),t.v_.set("Offline"),n||(n=()=>YT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Yh(t)})}function rS(t,e){return e().catch(n=>Cc(t,n,e))}async function Xh(t){const e=se(t),n=li(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;a4(e);)try{const i=await qV(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,l4(e,i)}catch(i){await Cc(e,i)}iS(e)&&sS(e)}function a4(t){return ns(t)&&t.y_.length<10}function l4(t,e){t.y_.push(e);const n=li(t);n.Go()&&n.u_&&n.c_(e.mutations)}function iS(t){return ns(t)&&!li(t).Wo()&&t.y_.length>0}function sS(t){li(t).start()}async function u4(t){li(t).P_()}async function c4(t){const e=li(t);for(const n of t.y_)e.c_(n.mutations)}async function h4(t,e,n){const r=t.y_.shift(),i=sy.from(r,e,n);await rS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xh(t)}async function d4(t,e){e&&li(t).u_&&await async function(r,i){if(function(o){return rV(o)&&o!==A.ABORTED}(i.code)){const s=r.y_.shift();li(r).jo(),await rS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xh(r)}}(t,e),iS(t)&&sS(t)}async function Q_(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ns(n);n.S_.add(3),await vl(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Yh(n)}async function f4(t,e){const n=se(t);e?(n.S_.delete(2),await Yh(n)):e||(n.S_.add(2),await vl(n),n.v_.set("Unknown"))}function vo(t){return t.F_||(t.F_=function(n,r,i){const s=se(n);return s.T_(),new ZV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:i4.bind(null,t),lo:s4.bind(null,t),s_:o4.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),fy(t)?dy(t):t.v_.set("Unknown")):(await t.F_.stop(),nS(t))})),t.F_}function li(t){return t.M_||(t.M_=function(n,r,i){const s=se(n);return s.T_(),new e4(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:u4.bind(null,t),lo:d4.bind(null,t),h_:c4.bind(null,t),l_:h4.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await Xh(t)):(await t.M_.stop(),t.y_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
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
 */class py{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new py(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function my(t,e){if(fr("AsyncQueue",`${e}: ${t}`),ml(t))return new M(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=zo(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Y_{constructor(){this.x_=new Ve(H.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):ee():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,Ms.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class p4{constructor(){this.N_=void 0,this.listeners=[]}}class m4{constructor(){this.queries=new yo(e=>CT(e),Wh),this.onlineState="Unknown",this.B_=new Set}}async function gy(t,e){const n=se(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new p4),i)try{s.N_=await n.onListen(r)}catch(o){const a=my(o,`Initialization of query '${zp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&vy(n)}async function yy(t,e){const n=se(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function g4(t,e){const n=se(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&vy(n)}function y4(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vy(t){t.B_.forEach(e=>{e.next()})}class _y{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
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
 */class oS{constructor(e){this.key=e}}class aS{constructor(e){this.key=e}}class v4{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=le(),this.mutatedKeys=le(),this.ia=kT(e),this.sa=new Ms(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new Y_,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=qh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?v!==y&&(r.track({type:3,doc:p}),w=!0):this.ua(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.ia(p,l)>0||u&&this.ia(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((u,c)=>function(d,p){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return v(d)-v(p)}(u.type,c.type)||this.ia(u.doc,c.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,l=a!==this.na;return this.na=a,s.length!==0||l?{snapshot:new io(this.query,e.sa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Y_,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=le(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new aS(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new oS(r))}),n}Ia(e){this.ta=e._s,this.ra=le();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return io.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class _4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class w4{constructor(e){this.key=e,this.Ea=!1}}class E4{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new yo(a=>CT(a),Wh),this.Ra=new Map,this.Va=new Set,this.ma=new Ve(H.comparator),this.fa=new Map,this.ga=new ly,this.pa={},this.ya=new Map,this.wa=ro.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function I4(t,e){const n=N4(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await HV(n.localStore,pr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await x4(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ZT(n.remoteStore,o)}return i}async function x4(t,e,n,r,i){t.ba=(h,d,p)=>async function(y,w,m,f){let _=w.view._a(m);_.Hi&&(_=await H_(y.localStore,w.query,!1).then(({documents:S})=>w.view._a(S,_)));const E=f&&f.targetChanges.get(w.targetId),T=w.view.applyChanges(_,y.isPrimaryClient,E);return J_(y,w.targetId,T.ha),T.snapshot}(t,h,d,p);const s=await H_(t.localStore,e,!0),o=new v4(e,s._s),a=o._a(s.documents),l=yl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);J_(t,n,u.ha);const c=new _4(e,n,o);return t.Aa.set(e,c),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),u.snapshot}async function T4(t,e){const n=se(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!Wh(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),eS(n.remoteStore,r.targetId),Kp(n,r.targetId)}).catch(pl)):(Kp(n,r.targetId),await Gp(n.localStore,r.targetId,!0))}async function S4(t,e,n){const r=O4(t);try{const i=await function(o,a){const l=se(o),u=Je.now(),c=a.reduce((p,v)=>p.add(v.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=mr(),y=le();return l.ts.getEntries(p,c).next(w=>{v=w,v.forEach((m,f)=>{f.isValidDocument()||(y=y.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{h=w;const m=[];for(const f of a){const _=JM(f,h.get(f.key).overlayedDocument);_!=null&&m.push(new gi(f.key,_,wT(_.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(p,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:RT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.pa[o.currentUser.toKey()];u||(u=new Ve(ve)),u=u.insert(a,l),o.pa[o.currentUser.toKey()]=u}(r,i.batchId,n),await _l(r,i.changes),await Xh(r.remoteStore)}catch(i){const s=my(i,"Failed to persist write");n.reject(s)}}async function lS(t,e){const n=se(t);try{const r=await BV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?Re(o.Ea):i.removedDocuments.size>0&&(Re(o.Ea),o.Ea=!1))}),await _l(n,r,e)}catch(r){await pl(r)}}function X_(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=se(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.L_(a)&&(u=!0)}),u&&vy(l)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A4(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new Ve(H.comparator);o=o.insert(s,_t.newNoDocument(s,re.min()));const a=le().add(s),l=new Kh(re.min(),new Map,new Ve(ve),o,a);await lS(r,l),r.ma=r.ma.remove(s),r.fa.delete(e),wy(r)}else await Gp(r.localStore,e,!1).then(()=>Kp(r,e,n)).catch(pl)}async function C4(t,e){const n=se(t),r=e.batch.batchId;try{const i=await zV(n.localStore,e);cS(n,r,null),uS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _l(n,i)}catch(i){await pl(i)}}async function k4(t,e,n){const r=se(t);try{const i=await function(o,a){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Re(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);cS(r,e,n),uS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _l(r,i)}catch(i){await pl(i)}}function uS(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function cS(t,e,n){const r=se(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function Kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||hS(t,r)})}function hS(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(eS(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),wy(t))}function J_(t,e,n){for(const r of n)r instanceof oS?(t.ga.addReference(r.key,e),P4(t,r)):r instanceof aS?(q("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||hS(t,r.key)):ee()}function P4(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(q("SyncEngine","New document in limbo: "+n),t.Va.add(r),wy(t))}function wy(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new H(Se.fromString(e)),r=t.wa.next();t.fa.set(r,new w4(n)),t.ma=t.ma.insert(n,r),ZT(t.remoteStore,new $r(pr(zh(n.path)),r,"TargetPurposeLimboResolution",Xg.ae))}}async function _l(t,e,n){const r=se(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,l)=>{o.push(r.ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=cy.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.da.s_(i),await async function(l,u){const c=se(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,d=>R.forEach(d.qi,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.Qi,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ml(h))throw h;q("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Zi.get(d),v=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(v);c.Zi=c.Zi.insert(d,y)}}}(r.localStore,s))}async function R4(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(l=>{l.reject(new M(A.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _l(n,r.rs)}}function b4(t,e){const n=se(t),r=n.fa.get(e);if(r&&r.Ea)return le().add(r.key);{let i=le();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function N4(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A4.bind(null,e),e.da.s_=g4.bind(null,e.eventManager),e.da.Da=y4.bind(null,e.eventManager),e}function O4(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=C4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k4.bind(null,e),e}class Z_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return UV(this.persistence,new jV,e.initialUser,this.serializer)}createPersistence(e){return new VV(uy.Hr,this.serializer)}createSharedClientState(e){return new KV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class D4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>X_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R4.bind(null,this.syncEngine),await f4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new m4}()}createDatastore(e){const n=Qh(e.databaseInfo.databaseId),r=function(s){return new JV(s)}(e.databaseInfo);return function(s,o,a,l){return new t4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new r4(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>X_(this.syncEngine,n,0),function(){return K_.v()?new K_:new QV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new E4(i,s,o,a,l,u);return c&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=se(n);q("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await vl(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class L4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=yT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=my(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uf(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ew(t,e){t.asyncQueue.verifyOperationInProgress();const n=await V4(t);q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Q_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Q_(e.remoteStore,s)),t._onlineComponents=e}function M4(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function V4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!M4(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await uf(t,new Z_)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await uf(t,new Z_);return t._offlineComponents}async function dS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await ew(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await ew(t,new D4))),t._onlineComponents}function $4(t){return dS(t).then(e=>e.syncEngine)}async function kc(t){const e=await dS(t),n=e.eventManager;return n.onListen=I4.bind(null,e.syncEngine),n.onUnlisten=T4.bind(null,e.syncEngine),n}function j4(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Ey({next:d=>{o.enqueueAndForget(()=>yy(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new M(A.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new M(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new _y(zh(a.path),c,{includeMetadataChanges:!0,z_:!0});return gy(s,h)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}function F4(t,e,n={}){const r=new or;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Ey({next:d=>{o.enqueueAndForget(()=>yy(s,h)),d.fromCache&&l.source==="server"?u.reject(new M(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new _y(a,c,{includeMetadataChanges:!0,z_:!0});return gy(s,h)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function fS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const tw=new Map;/**
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
 */function pS(t,e,n){if(!n)throw new M(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function U4(t,e,n,r){if(e===!0&&r===!0)throw new M(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nw(t){if(!H.isDocumentKey(t))throw new M(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rw(t){if(H.isDocumentKey(t))throw new M(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new M(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function z4(t,e){if(e<=0)throw new M(A.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class iw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iw(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uM;switch(r.type){case"firstParty":return new fM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tw.get(n);r&&(q("ComponentProvider","Removing Datastore"),tw.delete(n),r.terminate())}(this),Promise.resolve()}}function B4(t,e,n,r={}){var i;const s=(t=zt(t,Zh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=kI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new M(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new cM(new gT(a,l))}}/**
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
 */class Hn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hn(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Zr extends Hn{constructor(e,n,r){super(e,n,zh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new H(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function Dt(t,e,...n){if(t=We(t),pS("collection","path",e),t instanceof Zh){const r=Se.fromString(e,...n);return rw(r),new Zr(t,null,r)}{if(!(t instanceof St||t instanceof Zr))throw new M(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return rw(r),new Zr(t.firestore,null,r)}}function Et(t,e,...n){if(t=We(t),arguments.length===1&&(e=yT.V()),pS("doc","path",e),t instanceof Zh){const r=Se.fromString(e,...n);return nw(r),new St(t,null,new H(r))}{if(!(t instanceof St||t instanceof Zr))throw new M(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return nw(r),new St(t.firestore,t instanceof Zr?t.converter:null,new H(r))}}/**
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
 */class W4{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new XT(this,"async_queue_retry"),this.tu=()=>{const n=lf();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=lf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new or;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!ml(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=py.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&ee()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function sw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class gr extends Zh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new W4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mS(this),this._firestoreClient.terminate()}}function q4(t,e){const n=typeof t=="object"?t:vg(),r=typeof t=="string"?t:e||"(default)",i=wh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=SI("firestore");s&&B4(i,...s)}return i}function ed(t){return t._firestoreClient||mS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new SM(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,fS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new L4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(kt.fromBase64String(e))}catch(n){throw new M(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new so(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class td{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Iy{constructor(e){this._methodName=e}}/**
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
 */class xy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const H4=/^__.*__$/;class G4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gi(e,this.data,this.fieldMask,n,this.fieldTransforms):new gl(e,this.data,n,this.fieldTransforms)}}class gS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Ty{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new Ty(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return Pc(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(yS(this.lu)&&H4.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class K4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qh(e)}mu(e,n,r,i=!1){return new Ty({lu:e,methodName:n,Vu:r,path:wt.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wl(t){const e=t._freezeSettings(),n=Qh(t._databaseId);return new K4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vS(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);Sy("Data must be an object, but it was:",o,r);const a=wS(r,o);let l,u;if(s.merge)l=new qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Qp(e,h,n);if(!o.contains(d))throw new M(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);IS(c,d)||c.push(d)}l=new qt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new G4(new Mt(a),l,u)}class nd extends Iy{_toFieldTransform(e){if(e.lu!==2)throw e.lu===1?e.Au(`${this._methodName}() can only appear at the top level of your update data`):e.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nd}}function Q4(t,e,n,r){const i=t.mu(1,e,n);Sy("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();es(r,(l,u)=>{const c=Ay(e,l,n);u=We(u);const h=i.Eu(c);if(u instanceof nd)s.push(c);else{const d=El(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new qt(s);return new gS(o,a,i.fieldTransforms)}function Y4(t,e,n,r,i,s){const o=t.mu(1,e,n),a=[Qp(e,r,n)],l=[i];if(s.length%2!=0)throw new M(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Qp(e,s[d])),l.push(s[d+1]);const u=[],c=Mt.empty();for(let d=a.length-1;d>=0;--d)if(!IS(u,a[d])){const p=a[d];let v=l[d];v=We(v);const y=o.Eu(p);if(v instanceof nd)u.push(p);else{const w=El(v,y);w!=null&&(u.push(p),c.set(p,w))}}const h=new qt(u);return new gS(c,h,o.fieldTransforms)}function _S(t,e,n,r=!1){return El(n,t.mu(r?4:3,e))}function El(t,e){if(ES(t=We(t)))return Sy("Unsupported field value:",e,t),wS(t,e);if(t instanceof Iy)return function(r,i){if(!yS(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=El(a,i.du(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Je.fromDate(r);return{timestampValue:Ac(i.serializer,s)}}if(r instanceof Je){const s=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ac(i.serializer,s)}}if(r instanceof xy)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof so)return{bytesValue:BT(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ay(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${Jh(r)}`)}(t,e)}function wS(t,e){const n={};return vT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,i)=>{const s=El(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ES(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof xy||t instanceof so||t instanceof St||t instanceof Iy)}function Sy(t,e,n){if(!ES(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jh(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function Qp(t,e,n){if((e=We(e))instanceof td)return e._internalPath;if(typeof e=="string")return Ay(t,e);throw Pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const X4=new RegExp("[~\\*/\\[\\]]");function Ay(t,e,n){if(e.search(X4)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new td(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(A.INVALID_ARGUMENT,a+t+l)}function IS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Cy{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class J4 extends Cy{data(){return super.data()}}function rd(t,e){return typeof e=="string"?Ay(t,e):e instanceof td?e._internalPath:e._delegate._internalPath}/**
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
 */function xS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ky{}class id extends ky{}function pn(t,e,...n){let r=[];e instanceof ky&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Py).length,a=s.filter(l=>l instanceof sd).length;if(o>1||o>0&&a>0)throw new M(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class sd extends id{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sd(e,n,r)}_apply(e){const n=this._parse(e);return TS(e._query,n),new Hn(e.firestore,e.converter,Up(e._query,n))}_parse(e){const n=wl(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new M(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){aw(h,c);const p=[];for(const v of h)p.push(ow(l,s,v));d={arrayValue:{values:p}}}else d=ow(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||aw(h,c),d=_S(a,o,h,c==="in"||c==="not-in");return Ke.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Wo(t,e,n){const r=e,i=rd("where",t);return sd._create(i,r,n)}class Py extends ky{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Py(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)TS(o,l),o=Up(o,l)}(e._query,n),new Hn(e.firestore,e.converter,Up(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ry extends id{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ry(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new M(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new M(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ds(s,o);return function(u,c){if(ny(u)===null){const h=Bh(u);h!==null&&SS(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new Hn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ts(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Pn(t,e="asc"){const n=e,r=rd("orderBy",t);return Ry._create(r,n)}class by extends id{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new by(e,n,r)}_apply(e){return new Hn(e.firestore,e.converter,xc(e._query,this._limit,this._limitType))}}function Rn(t){return z4("limit",t),by._create("limit",t,"F")}class Ny extends id{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ny(e,n,r)}_apply(e){const n=Z4(e,this.type,this._docOrFields,this._inclusive);return new Hn(e.firestore,e.converter,function(i,s){return new ts(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function qo(...t){return Ny._create("startAfter",t,!1)}function Z4(t,e,n,r){if(n[0]=We(n[0]),n[0]instanceof Cy)return function(s,o,a,l,u){if(!l)throw new M(A.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of Ls(s))if(h.field.isKeyField())c.push(Ic(o,l.key));else{const d=l.data.field(h.field);if(Uh(d))throw new M(A.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const p=h.field.canonicalString();throw new M(A.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}c.push(d)}return new no(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=wl(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new M(A.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let v=0;v<c.length;v++){const y=c[v];if(d[v].field.isKeyField()){if(typeof y!="string")throw new M(A.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!ry(o)&&y.indexOf("/")!==-1)throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const w=o.path.child(Se.fromString(y));if(!H.isDocumentKey(w))throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const m=new H(w);p.push(Ic(a,m))}else{const w=_S(l,u,y);p.push(w)}}return new no(p,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function ow(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new M(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ry(e)&&n.indexOf("/")!==-1)throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!H.isDocumentKey(r))throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ic(t,new H(r))}if(n instanceof St)return Ic(t,n._key);throw new M(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jh(n)}.`)}function aw(t,e){if(!Array.isArray(t)||t.length===0)throw new M(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TS(t,e){if(e.isInequality()){const r=Bh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new M(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ny(t);s!==null&&SS(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function SS(t,e,n){if(!n.isEqual(e))throw new M(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class e${convertValue(e,n="none"){switch(Wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new xy(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const n=ai(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Re(KT(r));const i=new Ua(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function AS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CS extends Cy{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Su extends CS{data(e={}){return super.data(e)}}class kS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Su(this._firestore,this._userDataWriter,r.key,r,new Ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:t$(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function t$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function Oy(t){t=zt(t,St);const e=zt(t.firestore,gr);return j4(ed(e),t._key).then(n=>bS(e,t,n))}class Dy extends e${constructor(e){super(),this.firestore=e}convertBytes(e){return new so(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function mn(t){t=zt(t,Hn);const e=zt(t.firestore,gr),n=ed(e),r=new Dy(e);return xS(t._query),F4(n,t._query).then(i=>new kS(e,r,t,i))}function Ly(t,e,n){t=zt(t,St);const r=zt(t.firestore,gr),i=AS(t.converter,e,n);return od(r,[vS(wl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function Ni(t,e,n,...r){t=zt(t,St);const i=zt(t.firestore,gr),s=wl(i);let o;return o=typeof(e=We(e))=="string"||e instanceof td?Y4(s,"updateDoc",t._key,e,n,r):Q4(s,"updateDoc",t._key,e),od(i,[o.toMutation(t._key,sn.exists(!0))])}function PS(t){return od(zt(t.firestore,gr),[new iy(t._key,sn.none())])}function n$(t,e){const n=zt(t.firestore,gr),r=Et(t),i=AS(t.converter,e);return od(n,[vS(wl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function RS(t,...e){var n,r,i;t=We(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||sw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(sw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof St)u=zt(t.firestore,gr),c=zh(t._key.path),l={next:h=>{e[o]&&e[o](bS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=zt(t,Hn);u=zt(h.firestore,gr),c=h._query;const d=new Dy(u);l={next:p=>{e[o]&&e[o](new kS(u,d,h,p))},error:e[o+1],complete:e[o+2]},xS(t._query)}return function(d,p,v,y){const w=new Ey(y),m=new _y(p,w,v);return d.asyncQueue.enqueueAndForget(async()=>gy(await kc(d),m)),()=>{w.Ma(),d.asyncQueue.enqueueAndForget(async()=>yy(await kc(d),m))}}(ed(u),c,a,l)}function od(t,e){return function(r,i){const s=new or;return r.asyncQueue.enqueueAndForget(async()=>S4(await $4(r),i,s)),s.promise}(ed(t),e)}function bS(t,e,n){const r=n.docs.get(e._key),i=new Dy(t);return new CS(t,i,e._key,r,new Ho(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){go=i})(Yi),ji(new si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new gr(new hM(r.getProvider("auth-internal")),new mM(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new M(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ua(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Vn(S_,"4.1.2",e),Vn(S_,"4.1.2","esm2017")})();const r$={apiKey:"AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",authDomain:"oleg-shop-da014.firebaseapp.com",projectId:"oleg-shop-da014",storageBucket:"oleg-shop-da014.appspot.com",messagingSenderId:"289803579666",appId:"1:289803579666:web:6f92cb960eed0ea061c3cb",measurementId:"G-TXR6LBVXR3"},My=bI(r$);ZD(My);const Vs=SD(My),we=q4(My);function vn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ui(t){return!!t&&!!t[Ne]}function yr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===d$}(t)||Array.isArray(t)||!!t[pw]||!!(!((e=t.constructor)===null||e===void 0)&&e[pw])||Vy(t)||$y(t))}function qi(t,e,n){n===void 0&&(n=!1),_o(t)===0?(n?Object.keys:js)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function _o(t){var e=t[Ne];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Vy(t)?2:$y(t)?3:0}function $s(t,e){return _o(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function i$(t,e){return _o(t)===2?t.get(e):t[e]}function NS(t,e,n){var r=_o(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function OS(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Vy(t){return c$&&t instanceof Map}function $y(t){return h$&&t instanceof Set}function wi(t){return t.o||t.t}function jy(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=LS(t);delete e[Ne];for(var n=js(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Fy(t,e){return e===void 0&&(e=!1),Uy(t)||ui(t)||!yr(t)||(_o(t)>1&&(t.set=t.add=t.clear=t.delete=s$),Object.freeze(t),e&&qi(t,function(n,r){return Fy(r,!0)},!0)),t}function s$(){vn(2)}function Uy(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Un(t){var e=Zp[t];return e||vn(18,t),e}function o$(t,e){Zp[t]||(Zp[t]=e)}function Yp(){return qa}function cf(t,e){e&&(Un("Patches"),t.u=[],t.s=[],t.v=e)}function Rc(t){Xp(t),t.p.forEach(a$),t.p=null}function Xp(t){t===qa&&(qa=t.l)}function lw(t){return qa={p:[],l:qa,h:t,m:!0,_:0}}function a$(t){var e=t[Ne];e.i===0||e.i===1?e.j():e.g=!0}function hf(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Un("ES5").S(e,t,r),r?(n[Ne].P&&(Rc(e),vn(4)),yr(t)&&(t=bc(e,t),e.l||Nc(e,t)),e.u&&Un("Patches").M(n[Ne].t,t,e.u,e.s)):t=bc(e,n,[]),Rc(e),e.u&&e.v(e.u,e.s),t!==DS?t:void 0}function bc(t,e,n){if(Uy(e))return e;var r=e[Ne];if(!r)return qi(e,function(a,l){return uw(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Nc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=jy(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),qi(s,function(a,l){return uw(t,r,i,a,l,n,o)}),Nc(t,i,!1),n&&t.u&&Un("Patches").N(r,n,t.u,t.s)}return r.o}function uw(t,e,n,r,i,s,o){if(ui(i)){var a=bc(t,i,s&&e&&e.i!==3&&!$s(e.R,r)?s.concat(r):void 0);if(NS(n,r,a),!ui(a))return;t.m=!1}else o&&n.add(i);if(yr(i)&&!Uy(i)){if(!t.h.D&&t._<1)return;bc(t,i),e&&e.A.l||Nc(t,i)}}function Nc(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Fy(e,n)}function df(t,e){var n=t[Ne];return(n?wi(n):t)[e]}function cw(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Dr(t){t.P||(t.P=!0,t.l&&Dr(t.l))}function ff(t){t.o||(t.o=jy(t.t))}function Jp(t,e,n){var r=Vy(e)?Un("MapSet").F(e,n):$y(e)?Un("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Yp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=Ha;o&&(l=[a],u=Go);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Un("ES5").J(e,n);return(n?n.A:Yp()).p.push(r),r}function l$(t){return ui(t)||vn(22,t),function e(n){if(!yr(n))return n;var r,i=n[Ne],s=_o(n);if(i){if(!i.P&&(i.i<4||!Un("ES5").K(i)))return i.t;i.I=!0,r=hw(n,s),i.I=!1}else r=hw(n,s);return qi(r,function(o,a){i&&i$(i.t,o)===a||NS(r,o,e(a))}),s===3?new Set(r):r}(t)}function hw(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return jy(t)}function u$(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Ne];return Ha.get(l,s)},set:function(l){var u=this[Ne];Ha.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Ne];if(!a.P)switch(a.i){case 5:r(a)&&Dr(a);break;case 4:n(a)&&Dr(a)}}}function n(s){for(var o=s.t,a=s.k,l=js(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Ne){var h=o[c];if(h===void 0&&!$s(o,c))return!0;var d=a[c],p=d&&d[Ne];if(p?p.t!==h:!OS(d,h))return!0}}var v=!!o[Ne];return l.length!==js(o).length+(v?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};o$("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var v=LS(h);delete v[Ne];for(var y=js(v),w=0;w<y.length;w++){var m=y[w];v[m]=t(m,c||!!v[m].enumerable)}return Object.create(Object.getPrototypeOf(h),v)}(a,s),u={i:a?5:4,A:o?o.A:Yp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ne,{value:u,writable:!0}),l},S:function(s,o,a){a?ui(o)&&o[Ne].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Ne];if(c){var h=c.t,d=c.k,p=c.R,v=c.i;if(v===4)qi(d,function(_){_!==Ne&&(h[_]!==void 0||$s(h,_)?p[_]||l(d[_]):(p[_]=!0,Dr(c)))}),qi(h,function(_){d[_]!==void 0||$s(d,_)||(p[_]=!1,Dr(c))});else if(v===5){if(r(c)&&(Dr(c),p.length=!0),d.length<h.length)for(var y=d.length;y<h.length;y++)p[y]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var m=Math.min(d.length,h.length),f=0;f<m;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var dw,qa,zy=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",c$=typeof Map<"u",h$=typeof Set<"u",fw=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",DS=zy?Symbol.for("immer-nothing"):((dw={})["immer-nothing"]=!0,dw),pw=zy?Symbol.for("immer-draftable"):"__$immer_draftable",Ne=zy?Symbol.for("immer-state"):"__$immer_state",d$=""+Object.prototype.constructor,js=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,LS=Object.getOwnPropertyDescriptors||function(t){var e={};return js(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Zp={},Ha={get:function(t,e){if(e===Ne)return t;var n=wi(t);if(!$s(n,e))return function(i,s,o){var a,l=cw(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!yr(r)?r:r===df(t.t,e)?(ff(t),t.o[e]=Jp(t.A.h,r,t)):r},has:function(t,e){return e in wi(t)},ownKeys:function(t){return Reflect.ownKeys(wi(t))},set:function(t,e,n){var r=cw(wi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=df(wi(t),e),s=i==null?void 0:i[Ne];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(OS(n,i)&&(n!==void 0||$s(t.t,e)))return!0;ff(t),Dr(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return df(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,ff(t),Dr(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=wi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){vn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){vn(12)}},Go={};qi(Ha,function(t,e){Go[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Go.deleteProperty=function(t,e){return Go.set.call(this,t,e,void 0)},Go.set=function(t,e,n){return Ha.set.call(this,t[0],e,n,t[0])};var f$=function(){function t(n){var r=this;this.O=fw,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(y){var w=this;y===void 0&&(y=a);for(var m=arguments.length,f=Array(m>1?m-1:0),_=1;_<m;_++)f[_-1]=arguments[_];return l.produce(y,function(E){var T;return(T=s).call.apply(T,[w,E].concat(f))})}}var u;if(typeof s!="function"&&vn(6),o!==void 0&&typeof o!="function"&&vn(7),yr(i)){var c=lw(r),h=Jp(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?Rc(c):Xp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return cf(c,o),hf(y,c)},function(y){throw Rc(c),y}):(cf(c,o),hf(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===DS&&(u=void 0),r.D&&Fy(u,!0),o){var p=[],v=[];Un("Patches").M(i,u,p,v),o(p,v)}return u}vn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){yr(n)||vn(8),ui(n)&&(n=l$(n));var r=lw(this),i=Jp(this,n,void 0);return i[Ne].C=!0,Xp(r),i},e.finishDraft=function(n,r){var i=n&&n[Ne],s=i.A;return cf(s,r),hf(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!fw&&vn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Un("Patches").$;return ui(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Qt=new f$,MS=Qt.produce;Qt.produceWithPatches.bind(Qt);Qt.setAutoFreeze.bind(Qt);Qt.setUseProxies.bind(Qt);Qt.applyPatches.bind(Qt);Qt.createDraft.bind(Qt);Qt.finishDraft.bind(Qt);function Ga(t){"@babel/helpers - typeof";return Ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ga(t)}function p$(t,e){if(Ga(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ga(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function m$(t){var e=p$(t,"string");return Ga(e)==="symbol"?e:String(e)}function g$(t,e,n){return e=m$(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function gw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mw(Object(n),!0).forEach(function(r){g$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var yw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),pf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Oc={INIT:"@@redux/INIT"+pf(),REPLACE:"@@redux/REPLACE"+pf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+pf()}};function y$(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function By(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(gt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(gt(1));return n(By)(t,e)}if(typeof t!="function")throw new Error(gt(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(gt(3));return s}function h(y){if(typeof y!="function")throw new Error(gt(4));if(l)throw new Error(gt(5));var w=!0;return u(),a.push(y),function(){if(w){if(l)throw new Error(gt(6));w=!1,u();var f=a.indexOf(y);a.splice(f,1),o=null}}}function d(y){if(!y$(y))throw new Error(gt(7));if(typeof y.type>"u")throw new Error(gt(8));if(l)throw new Error(gt(9));try{l=!0,s=i(s,y)}finally{l=!1}for(var w=o=a,m=0;m<w.length;m++){var f=w[m];f()}return y}function p(y){if(typeof y!="function")throw new Error(gt(10));i=y,d({type:Oc.REPLACE})}function v(){var y,w=h;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(gt(11));function _(){f.next&&f.next(c())}_();var E=w(_);return{unsubscribe:E}}},y[yw]=function(){return this},y}return d({type:Oc.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[yw]=v,r}function v$(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Oc.INIT});if(typeof r>"u")throw new Error(gt(12));if(typeof n(void 0,{type:Oc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(gt(13))})}function VS(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{v$(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],v=n[p],y=l[p],w=v(y,u);if(typeof w>"u")throw u&&u.type,new Error(gt(14));h[p]=w,c=c||w!==y}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Dc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function _$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(gt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Dc.apply(void 0,a)(i.dispatch),gw(gw({},i),{},{dispatch:s})}}}function $S(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var jS=$S();jS.withExtraArgument=$S;const vw=jS;var FS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),w$=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},oo=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},E$=Object.defineProperty,I$=Object.defineProperties,x$=Object.getOwnPropertyDescriptors,_w=Object.getOwnPropertySymbols,T$=Object.prototype.hasOwnProperty,S$=Object.prototype.propertyIsEnumerable,ww=function(t,e,n){return e in t?E$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},ei=function(t,e){for(var n in e||(e={}))T$.call(e,n)&&ww(t,n,e[n]);if(_w)for(var r=0,i=_w(e);r<i.length;r++){var n=i[r];S$.call(e,n)&&ww(t,n,e[n])}return t},mf=function(t,e){return I$(t,x$(e))},A$=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},C$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Dc:Dc.apply(null,arguments)};function k$(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var P$=function(t){FS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,oo([void 0],n[0].concat(this)))):new(e.bind.apply(e,oo([void 0],n.concat(this))))},e}(Array),R$=function(t){FS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,oo([void 0],n[0].concat(this)))):new(e.bind.apply(e,oo([void 0],n.concat(this))))},e}(Array);function em(t){return yr(t)?MS(t,function(){}):t}function b$(t){return typeof t=="boolean"}function N$(){return function(e){return O$(e)}}function O$(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new P$;return n&&(b$(n)?r.push(vw):r.push(vw.withExtraArgument(n.extraArgument))),r}var D$=!0;function L$(t){var e=N$(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(k$(i))p=VS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=o;typeof v=="function"&&(v=v(e));var y=_$.apply(void 0,v),w=Dc;l&&(w=C$(ei({trace:!D$},typeof l=="object"&&l)));var m=new R$(y),f=m;Array.isArray(d)?f=oo([y],d):typeof d=="function"&&(f=d(m));var _=w.apply(void 0,f);return By(p,c,_)}function ti(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return ei(ei({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function US(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function M$(t){return typeof t=="function"}function V$(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?US(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(M$(t))l=function(){return em(t())};else{var u=em(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=oo([s[d.type]],o.filter(function(v){var y=v.matcher;return y(d)}).map(function(v){var y=v.reducer;return y}));return p.filter(function(v){return!!v}).length===0&&(p=[a]),p.reduce(function(v,y){if(y)if(ui(v)){var w=v,m=y(w,d);return m===void 0?v:m}else{if(yr(v))return MS(v,function(f){return y(f,d)});var m=y(v,d);if(m===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return v},h)}return c.getInitialState=l,c}function $$(t,e){return t+"/"+e}function j$(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:em(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=$$(e,c),p,v;"reducer"in h?(p=h.reducer,v=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=v?ti(d,v):ti(d)});function l(){var c=typeof t.extraReducers=="function"?US(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],v=p===void 0?[]:p,y=c[2],w=y===void 0?void 0:y,m=ei(ei({},d),o);return V$(n,function(f){for(var _ in m)f.addCase(_,m[_]);for(var E=0,T=v;E<T.length;E++){var S=T[E];f.addMatcher(S.matcher,S.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var F$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",U$=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=F$[Math.random()*64|0];return e},z$=["name","message","stack","code"],gf=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),Ew=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),B$=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=z$;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=ti(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:mf(ei({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=ti(e+"/pending",function(u,c,h){return{payload:void 0,meta:mf(ei({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=ti(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||B$)(u||"Rejected"),meta:mf(ei({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):U$(),v=new a,y;function w(f){y=f,v.abort()}var m=function(){return A$(this,null,function(){var f,_,E,T,S,b,P;return w$(this,function(G){switch(G.label){case 0:return G.trys.push([0,4,,5]),T=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),q$(T)?[4,T]:[3,2];case 1:T=G.sent(),G.label=2;case 2:if(T===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return S=new Promise(function($,z){return v.signal.addEventListener("abort",function(){return z({name:"AbortError",message:y||"Aborted"})})}),c(s(p,u,(_=r==null?void 0:r.getPendingMeta)==null?void 0:_.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([S,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:v.signal,abort:w,rejectWithValue:function($,z){return new gf($,z)},fulfillWithValue:function($,z){return new Ew($,z)}})).then(function($){if($ instanceof gf)throw $;return $ instanceof Ew?i($.payload,p,u,$.meta):i($,p,u)})])];case 3:return E=G.sent(),[3,5];case 4:return b=G.sent(),E=b instanceof gf?o(null,p,u,b.payload,b.meta):o(b,p,u),[3,5];case 5:return P=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,P||c(E),[2,E]}})})}();return Object.assign(m,{abort:w,requestId:p,arg:u,unwrap:function(){return m.then(W$)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function W$(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function q$(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Wy="listenerMiddleware";ti(Wy+"/add");ti(Wy+"/removeAll");ti(Wy+"/remove");var Iw;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);u$();const xw={userId:null,userName:null,email:null,isLogIn:!1,role:"user",cashList:[],favoriteList:[]},Lc=j$({name:"auth",initialState:xw,reducers:{updateUserProfile:(t,{payload:e})=>({...t,userId:e.userId,userName:e.userName,email:e.email,isLogIn:!!e.isLogIn}),authStateChange:(t,{payload:e})=>({...t,stateChange:e.stateChange}),authSignOut:()=>xw,adminRole:(t,{payload:e})=>({...t,role:"admin"}),addGoodToCashList:(t,{payload:e})=>({...t,cashList:[...t.cashList,e]}),removeGoodFromCashList:(t,{payload:e})=>({...t,cashList:e}),clearCashList:(t,{payload:e})=>({...t,cashList:[]}),setFavoriteList:(t,{payload:e})=>({...t,favoriteList:e}),addToFavoriteList:(t,{payload:e})=>({...t,favoriteList:[...t.favoriteList,e]}),deleteFromFavoriteList:(t,{payload:e})=>({...t,favoriteList:e})}}),{updateUserProfile:zS,authStateChange:WF,authSignOut:H$,adminRole:G$,clearCashList:K$,addToFavoriteList:Q$,setFavoriteList:Y$,deleteFromFavoriteList:X$}=Lc.actions,J$=({email:t,password:e,userName:n})=>async(r,i)=>{await aO(Vs,t,e).catch(a=>{const l=a.code,u=a.message;console.log(`${l},${u}`)}),await cO(Vs.currentUser,{displayName:`${n}`});const{uid:s,displayName:o}=Vs.currentUser;r(zS({userId:s,userName:o}))},qy=({email:t,password:e})=>async(n,r)=>{lO(Vs,t,e).then(async i=>{const{uid:s,displayName:o,email:a}=Vs.currentUser;n(zS({userId:s,userName:o,isLogIn:!0,email:a})),a==="msshopua@gmail.com"&&n(G$())}).catch(i=>{const s=i.code,o=i.message;console.log(`${s},${o}`)})},Z$=()=>async(t,e)=>{fO(Vs).catch(n=>{const r=n.code,i=n.message;console.log(`${r},${i}`)}),t(H$())},ej=()=>(t,e)=>{t(K$())},tj=t=>(e,n)=>{e(Q$(t))},Hy=t=>async(e,n)=>{const r=await Oy(Et(we,"users",`${t}`));if(r.exists()){const{favoriteList:i}=r.data();e(Y$(i))}else console.log("No such document!")},nj=t=>(e,n)=>{const s=n().auth.favoriteList.filter(o=>{if(o.name!==t.name)return o});e(X$(s))};function rj(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22"}}]})(t)}function ij(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22",transform:"matrix(-1 0 0 1 24 0)"}}]})(t)}function sj(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}function oj(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(t)}function aj(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(t)}function Gy(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(t)}function lj(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(t)}function uj(t){return Ir({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fillRule:"evenodd",points:"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(t)}const cj=C.ul`
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
`,hj=C.li`
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
    font-size: 8px;
    border-radius: 20px;
    padding: 20px;
  }
`,dj=C.div`
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
`,fj=C.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`,pj=C(Gy)`
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
`,mj=C(sj)`
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
`,gj=C(lj)`
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
`,yj=C.ul`
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
`,vj=C.li`
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
`,_j=C.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,wj=C.p`
  width: 90%;
`;C.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`;const Ej=C.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,Ij=C.div`
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
`,xj=C.div`
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
`,Tj=C.h3``,Sj=C.div`
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
`,BS=C(rj)`
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
  }`,WS=C(ij)`
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
`,Aj=C.div`
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
`,Tw=C.button`
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
`,Cj=C.button`
  width: 100%;
  &.active {
    background: red;
  }

  &:hover {
    background: red;
  }
`,kj=C.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,Pj=C.div`
  display: flex;
`,Rj=C(oj)`
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
`,bj=C(Gy)`
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
`,Nj=C(aj)`
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
`,Oj=C.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,{addGoodToCashList:Dj,removeGoodFromCashList:Lj}=Lc.actions,Mj=({id:t,name:e,image:n,price:r})=>(i,s)=>{i(Dj({id:t,name:e,image:n,price:r}))},Vj=t=>(e,n)=>{const s=n().auth.cashList.filter((o,a)=>{if(a!==t)return o});e(Lj(s))};var qS={exports:{}},$j="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jj=$j,Fj=jj;function HS(){}function GS(){}GS.resetWarningCache=HS;var Uj=function(){function t(r,i,s,o,a,l){if(l!==Fj){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:GS,resetWarningCache:HS};return n.PropTypes=n,n};qS.exports=Uj();var zj=qS.exports;const os=rm(zj),Bj=C.div`
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
`,Wj=C.div`
  position: relative;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  border: 2px solid black;
  cursor: pointer;
  background-position: 50% 50%;
  background-size: cover;
  @media (min-width: 768px) {
    width: 40%;
  }
`,qj=C(BS)`
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
    right: 20%;
  }

  @media (min-width: 1440px) {
    padding: 15px;
    width: 105px;
    height: 105px;
  }
`,Hj=C(WS)`
  background: black;
  border: 1px solid black;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: 35%;
  left: 10%;
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
    left: 20%;
  }
  @media (min-width: 1440px) {
    padding: 15px;
    width: 105px;
    height: 105px;
  }
`;class KS extends $t.Component{constructor(){super(...arguments);Io(this,"nextImage",()=>{this.props.nextImage()});Io(this,"previousImage",()=>{this.props.previousImage()});Io(this,"keydown",n=>{n.keyCode===27&&this.props.onCloseModal()})}componentDidMount(){document.addEventListener("keydown",this.keydown)}componentWillUnmount(){document.removeEventListener("keydown",this.keydown)}render(){return g.jsxs(g.Fragment,{children:[this.props.currentImageIndex!==this.props.currentImageUrl.length-1&&typeof this.props.currentImageUrl!="string"&&g.jsx(qj,{onClick:this.nextImage}),g.jsx(Bj,{onClick:this.props.onCloseModal,children:g.jsx(Wj,{style:{backgroundImage:`url(${typeof this.props.currentImageUrl=="string"?this.props.currentImageUrl:this.props.currentImageUrl[this.props.currentImageIndex]})`}})}),this.props.currentImageIndex!==0&&typeof this.props.currentImageUrl!="string"&&g.jsx(Hj,{onClick:this.previousImage})]})}}Io(KS,"propTypes",{onCloseModal:os.func.isRequired,currentImageUrl:os.string.isRequired||os.array.isRequired,nextImage:os.func.isRequired,previousImage:os.func.isRequired,currentImageIndex:os.number.isRequired});const ad=({card:t,closeModal:e})=>{const n=Er(),r=Qi(),[i,s]=I.useState(!1),o=ln(cn),[a,l]=I.useState(0);let u=o.favoriteList,c=u.length>0?o.favoriteList.map(S=>S.name):[];const h=S=>{S.currentTarget===S.target&&e()},d=S=>{(S.charCode||S.keyCode)===27&&e()},p=async()=>{await PS(Et(we,"goods",`${t.id}`)),e()},v=()=>{r(Mj(t))},y=async()=>{try{await Ni(Et(we,"users",`${o.email}`),{favoriteList:[...u,t]})}catch(S){console.log(S)}},w=()=>{r(tj(t)),y()},m=async()=>{try{const S=u.filter(b=>{if(b.name!==t.name)return b});await Ni(Et(we,"users",`${o.email}`),{favoriteList:S})}catch(S){console.log(S)}},f=()=>{m(),r(nj(t))};I.useEffect(()=>(document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}),[]);const _=()=>{l(S=>S+1)},E=()=>{l(S=>S-1)},T=()=>{s(!1)};return g.jsx(Ej,{onClick:h,children:g.jsxs(Ij,{onClick:h,children:[g.jsxs(xj,{children:[g.jsxs(Pj,{children:[g.jsxs(kj,{children:[a!==0&&typeof t.image!="string"&&g.jsx(WS,{onClick:E}),g.jsx(Sj,{style:{backgroundImage:`url(${typeof t.image=="string"?t.image:t.image[a]})`},onClick:()=>{s(!0)}}),a!==t.image.length-1&&typeof t.image!="string"&&g.jsx(BS,{onClick:_}),g.jsx(Tw,{onClick:v,children:"Добавити до покупок"}),o.isLogIn&&(c.includes(t.name)?g.jsx(Cj,{onClick:f,children:"Видалити з обранного"}):g.jsx(Tw,{onClick:w,children:"Добавити до обранного"}))]}),g.jsxs(Aj,{children:[g.jsx(Tj,{children:t.name}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Ціна: "}),t.price," грн."]})}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Категорія: "}),t.category]})}),t.sex&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Рід: "}),t.sex]})}),t.producent&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Виробник: "}),t.producent]})}),t.size&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Розмір: "}),t.size]})}),g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Додаткова інформація:"}),g.jsx(Oj,{children:t.otherInfo})]})]})]}),g.jsx(Rj,{onClick:()=>e()}),o.role==="admin"&&g.jsxs(g.Fragment,{children:[g.jsx(bj,{onClick:()=>{p()}}),g.jsx(Nj,{onClick:()=>{n("/admin",{state:t})}})]})]}),i&&g.jsx(KS,{onCloseModal:T,currentImageIndex:a,currentImageUrl:t.image,nextImage:_,previousImage:E})]})})},Gj=()=>{const t=ln(cn),[e,n]=I.useState(!1),[r,i]=I.useState(),s=a=>{i(a),n(!0)},o=()=>{n(!1)};return g.jsxs(g.Fragment,{children:[g.jsx(yj,{id:"card",children:t.favoriteList.length>0?t.favoriteList.map((a,l)=>g.jsx(g.Fragment,{children:g.jsx(vj,{onClick:()=>s(a),style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`},children:g.jsxs(_j,{children:[g.jsx(wj,{children:a.name}),g.jsxs("p",{children:[a.price," грн."]})]})},a.id)})):g.jsx("div",{children:"Список обранного пустий"})}),e&&g.jsx(ad,{card:r,closeModal:o})]})};function Au(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Au=function(n){return typeof n}:Au=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Au(t)}function yf(){}var Kj={getItem:yf,setItem:yf,removeItem:yf};function Qj(t){if((typeof self>"u"?"undefined":Au(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function Yj(t){var e="".concat(t,"Storage");return Qj(e)?self[e]:Kj}function Xj(t){var e=Yj(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}const jr=Xj("local"),Jj=({closeUserModal:t,typeModal:e})=>{const[n,r]=I.useState(e),[i,s]=I.useState(!1),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,h]=I.useState(""),[d,p]=I.useState(""),[v,y]=I.useState(""),[w,m]=I.useState(""),[f,_]=I.useState(""),[E,T]=I.useState(""),[S,b]=I.useState(""),[P,G]=I.useState(""),[$,z]=I.useState(""),[fe,B]=I.useState([]),[W,J]=I.useState("info"),[oe,ce]=I.useState(""),N=ln(cn),K=Qi(),Y=O=>{O.currentTarget===O.target&&t()},_e=O=>{(O.charCode||O.keyCode)===27&&t()};I.useEffect(()=>(document.body.addEventListener("keydown",_e),function(){document.body.removeEventListener("keydown",_e)}),[]);const L=O=>{a(O.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(O.target.value).toLowerCase())?u(""):u("Введіть повнe призвіще, ім'я, побатькові")},j=O=>{h(O.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(O.target.value).toLowerCase())?p(""):p("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},F=O=>{y(O.target.value),O.target.value.length<6?_("Довжина пароля повина бути від 6 символів"):_("")},X=O=>{m(O.target.value),O.target.value!==v?T("Введені паролі нe співпадають"):T("")},x=O=>{b(O.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(O.target.value))?G(""):G("Номер невірного формату (наприклад '043*******')")},ae=()=>{!l&&!d&&!f&&!E&&!P&&w&&o&&c&&v&&S&&$?(K(J$({email:c,password:v,userName:o})),D({name:o,email:c,password:v,userNumber:S,userPostAdress:$,favoriteList:[]}),s(!1),r("LogIn")):s(!0)},D=async O=>{try{await Ly(Et(we,"users",`${O.email}`),O)}catch(Q){console.error("Error adding user: ",Q)}},be=async()=>{try{K(qy({email:c,password:v})),K(Hy(c)),await Ni(Et(we,"users",`${c}`),{isLogIn:!0}),jr.setItem("userEmail",c),jr.setItem("userPassword",v),t()}catch(O){ce("Email не зареестрований або невіний пароль"),console.error("Error adding user: ",O)}},me=async()=>{t(),K(Z$()),jr.removeItem("userEmail"),jr.removeItem("userPassword");try{await Ni(Et(we,"users",`${N.email}`),{isLogIn:!1})}catch(O){console.error("Error adding user: ",O)}},ye=async()=>{const O=await Oy(Et(we,"users",`${N.email}`));if(O.exists()){const{name:Q,userPostAdress:$e,userNumber:he}=O.data();a(Q),b(he),z($e)}};I.useEffect(()=>{N.email&&(ye(),G(""))},[W,K]);const ie=async()=>{if(!P)try{await Ni(Et(we,"users",`${N.email}`),{userNumber:S,userPostAdress:$}),J("info")}catch(O){console.error("Error change user: ",O)}},Qe=async()=>{try{(await mn(pn(Dt(we,"orders"),Wo("userEmail","==",`${N.email}`)))).forEach(Q=>{B($e=>[...$e,{id:Q.id,...Q.data()}])}),B(Q=>Q.sort(($e,he)=>$e.postDate>he.postDate?-1:1))}catch(O){console.error("Error take orders: ",O)}};return I.useEffect(()=>{Qe()},[K]),g.jsx(P2,{onClick:Y,children:g.jsx(R2,{onClick:Y,children:g.jsxs(b2,{children:[n==="SignIn"&&g.jsxs(ql,{id:"userFormSignIn",children:[g.jsx(is,{children:"Контактні дані"}),g.jsx(Cn,{required:!0,name:"name",value:o,onChange:O=>{L(O)},placeholder:"Введіть ПІБ",style:l?{borderColor:"red"}:{}}),l&&g.jsx(Kn,{children:l}),g.jsx(Cn,{required:!0,name:"email",value:c,onChange:O=>{j(O)},placeholder:"Введіть контактну електронну адресу",style:d?{borderColor:"red"}:{}}),d&&g.jsx(Kn,{children:d}),g.jsx(Cn,{required:!0,name:"password",value:v,onChange:O=>{F(O)},placeholder:"Введіть пароль",autoComplete:"on",minlength:"5",style:f?{borderColor:"red"}:{}}),f&&g.jsx(Kn,{children:f}),g.jsx(Cn,{required:!0,name:"passwordDublicate",value:w,onChange:O=>{X(O)},placeholder:"Повторіть пароль",style:E?{borderColor:"red"}:{}}),E&&g.jsx(Kn,{children:E}),g.jsx(Cn,{value:S,type:"number",onChange:O=>{x(O)},placeholder:"Введіть контактний номер телефону",style:P?{borderColor:"red"}:{}}),P&&g.jsx(Kn,{children:P}),g.jsx(Cn,{value:$,onChange:O=>{z(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(Kn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Hl,{style:i?{backgroundColor:"red"}:{},onClick:ae,children:"Зареєструватись"})]}),n==="LogIn"&&g.jsxs(ql,{id:"userFormLogIn",children:[g.jsx(is,{children:"E-mail:"}),g.jsx(Cn,{required:!0,name:"email",value:c,onChange:O=>{h(O.target.value)}}),g.jsx(is,{children:"Пароль:"}),g.jsx(Cn,{required:!0,name:"password",value:v,onChange:O=>{y(O.target.value)}}),oe&&g.jsx(Kn,{children:oe}),g.jsx(Hl,{onClick:be,children:"Увійти"})]}),n==="Config"&&g.jsxs(g.Fragment,{children:[g.jsxs(N2,{children:[g.jsx(zl,{onClick:()=>{J("info")},children:"Користувач"}),g.jsx(zl,{onClick:()=>{J("change")},children:"Зміна данних"}),g.jsx(zl,{onClick:()=>{J("favorite")},children:"Обране"}),g.jsx(zl,{onClick:()=>{J("history")},children:"Історія покупок"})]}),W==="info"&&g.jsxs(ql,{id:"userFormConfig",children:[g.jsx(is,{children:"Інформація користувача"}),g.jsxs(O2,{children:[g.jsx(Bl,{children:"Призвіще, ім'я, по батькові:"}),g.jsx(Wl,{children:o}),g.jsx(Bl,{children:"E-mail:"}),g.jsx(Wl,{children:N.email}),g.jsx(Bl,{children:"Номер телефону:"}),g.jsxs(Wl,{children:[" ",S]}),g.jsx(Bl,{children:'Відділення "Нова пошти":'}),g.jsx(Wl,{children:$})]}),g.jsx(Hl,{onClick:me,children:"Вийти з аккаунта"})]}),W==="change"&&g.jsxs(ql,{id:"userFormConfig",children:[g.jsx(is,{children:"Зміна данних"}),g.jsx(Cn,{value:S,type:"number",onChange:O=>{x(O)},placeholder:"Введіть контактний номер телефону",style:P?{borderColor:"red"}:{}}),P&&g.jsx(Kn,{children:P}),g.jsx(Cn,{value:$,onChange:O=>{z(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(Kn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Hl,{onClick:ie,children:"Змінити дані"})]}),W==="favorite"&&g.jsx(Gj,{}),W==="history"&&g.jsxs(L2,{children:[g.jsx(is,{children:"Історія покупок"}),g.jsx(D0,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(D0,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx($2,{children:fe.map(O=>g.jsxs(j2,{children:[g.jsx(D2,{style:O.status==="take"?{backgroundColor:"yellow"}:O.status==="send"?{backgroundColor:"green"}:{}}),g.jsxs(Gn,{children:[g.jsxs(Gn,{children:["Статус:",O.status==="create"&&" Замовлення оформлене",O.status==="take"&&" Прийняте",O.status==="send"&&" Відправлене"]}),"Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(O.postDate.seconds)]}),g.jsxs(Gn,{children:["ФІП: ",O.userFullName]}),g.jsxs(Gn,{children:["Email: ",O.userEmail]}),g.jsxs(Gn,{children:["Номер телефону: ",O.userNumber]}),g.jsxs(Gn,{children:["Адрес Нової почти: ",O.userPostAdress]}),g.jsx(Gn,{children:"Список замовлення:"}),O.cashList.map(Q=>g.jsxs(M2,{children:[g.jsx(V2,{style:{backgroundImage:`url(${typeof Q.image=="string"?Q.image:Q.image[0]})`}}),g.jsxs(Gn,{children:["Назва: ",Q.name]}),g.jsxs(Gn,{children:["Ціна: ",Q.price]})]}))]}))})]})]})]})})})},Zj=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(""),s=ln(cn).isLogIn,o=()=>{e(!1)};return g.jsxs(g.Fragment,{children:[s?g.jsx(g.Fragment,{children:g.jsx(Fd,{onClick:()=>{r("Config"),e(!0)},children:"Меню користувача"})}):g.jsxs(k2,{children:[g.jsx(Fd,{onClick:()=>{r("LogIn"),e(!0)},children:"Увійти"}),g.jsx(Fd,{onClick:()=>{r("SignIn"),e(!0)},children:"Зареєструватись"})]}),t&&g.jsx(Jj,{closeUserModal:o,typeModal:n})]})},eF=()=>{const{cashList:t}=ln(cn),e=Er(),n=wr().pathname,r=Qi();I.useEffect(()=>{localStorage.getItem("userEmail")&&localStorage.getItem("userPassword")&&i()},[]);const i=async()=>{const s=await localStorage.getItem("userEmail"),o=await localStorage.getItem("userPassword");r(qy({email:s,password:o})),r(Hy(s))};return g.jsxs(v2,{children:[g.jsxs(_2,{children:[g.jsx(T2,{}),n!=="/checkout"&&g.jsxs(g.Fragment,{children:[g.jsx(C2,{}),g.jsx(Zj,{})]})]}),!(n==="/cashList"||n==="/admin"||n==="/checkout")&&g.jsxs(E2,{children:[g.jsx(w2,{onClick:()=>{e("/cashList")}}),g.jsx(I2,{children:t.length})]})]})},tF=()=>g.jsxs(g.Fragment,{children:[g.jsx(eF,{}),g.jsx(I.Suspense,{fallback:g.jsx("div",{children:"Loading..."}),children:g.jsx(wP,{})})]}),Ky=C.ul`
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
`,Qy=C.li`
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
`,Yy=C.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Xy=C.p`
  width: 90%;
`,Jy=C.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`,Zy=C(uj)`
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
`,QS=C.button`
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
`,nF=C.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`,tm=C.select`
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
`,Jn=C.option``,ru=C.input`
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
`,Sw=C.textarea`
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
`,YS=C.button`
  transition: background 0.5s;

  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }
`,rF=C(Ky)`
  flex-direction: column;
`,iF=C.h4`
  cursor: default;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`,sF=C.li`
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
`,oF=C.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,aF=C(YS)`
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
`,lF=()=>{const[t,e]=I.useState([]),n=ln(cn),r=[],i=Er(),[s,o]=I.useState(!1),[a,l]=I.useState(),[u,c]=I.useState("");let h=new Date().getTime()/1e3;const d=y=>{l(y),o(!0)},p=()=>{o(!1)},v=async()=>{RS(Dt(we,"goods"),y=>{e(y.docs.map(w=>({...w.data(),id:w.id})).sort((w,m)=>w.createTime.seconds>m.createTime.seconds?-1:1))})};return I.useEffect(()=>{v()},[]),t.map(y=>{r.includes(y.category)||r.push(y.category)}),r.sort(),I.useEffect(()=>{function y(){console.log(window.innerWidth),c(window.innerWidth)}return window.addEventListener("resize",y),y(),()=>{window.removeEventListener("resize",y)}},[c]),g.jsxs(g.Fragment,{children:[g.jsx(rF,{children:r.map(y=>{let w=0;return g.jsxs(sF,{children:[g.jsx(iF,{children:y}),g.jsx(oF,{children:t.map((m,f)=>{if(m.category===y)return w++,window.innerWidth===2160&&w>8||window.innerWidth===1152&&w>6||window.innerWidth===480&&w>4?void 0:g.jsxs(Qy,{onClick:()=>d(m),style:{backgroundImage:`url(${typeof m.image=="string"?m.image:m.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(_=>{if(_.name===m.name)return g.jsx(Zy,{})}),h-m.createTime.seconds<259200&&g.jsx(Jy,{children:"Новинка!"}),g.jsxs(Yy,{children:[g.jsx(Xy,{children:m.name}),g.jsxs("p",{children:[m.price," грн."]})]})]},f)})}),g.jsx(aF,{onClick:()=>i("/search",{state:{category:y}}),children:"Побачити більше"})]})})}),s&&g.jsx(ad,{card:a,closeModal:p})]})},uF=C.div`
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
`,cF=C.input`
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
`,hF=C(tm)`
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
`,dF=C.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,XS=[{name:"Одяг",category:["Сукні","Сарафани","Спідниці","Нічний та домашній одяг","Термобілизна","Гірськолижний одяг","Шкарпетки","Панчохи","Колготки","Комбінезони та напівкомбінезони","Кофти","Светри","Кардигани","Костюми","Жакети","Спортивний одяг","Футболки","Майки","Шорти","Бриджі","Капрі","Джинси","Брюки","Легінси","Верхній одяг","Блузи","Сорочки","Для вагітних","Купальники","Пляжний одяг","Капрі","Штани","Піджаки","Гетри","Сліди","Спідня білизна","Пляжні шорти та плавки"]},{name:"Взуття",category:["Кросівки","Кеди","Снікери","Босоніжки","Сандалі","Туфлі","Балетки","Сліпони","Еспадрильї","Сабо","В'єтнамки","Шльопанці","Чоботи","Черевики","Уги","Ботильйони","Мокасини","Топсайдери","Лофери","Сандалі"]},{name:"Сумки та аксесуари",category:["Сумки","Рюкзаки","Валізи","Аксесуари для волосся","Годинники","Рукавички та рукавиці","Біжутерія","Головні убори","Ремені та пояси","Гаманці","Портмоне","Ремені","Пояси","Хустки","Шарфи","Краватки","Підтяжки","Прикраси","Парасолі","Сонцезахисні окуляри","Дорожні сумки"]},{name:"Товари для дому",category:["Пледи","Засоби для збирання","Господарські товари","Термоси та пляшки","Чашки","Кухлі","Рушники","Домашній текстиль","Аромати для дому"]},{name:"Іграшки для дітей"},{name:"Інструменти/обладнання"},{name:"Зоотовари"},{name:"Ювелірні вироби"},{name:"Велосипеди та аксесуари",category:["Велоаксесуари","Велокомп'ютери","Велошоломи","Велосумки","Велоодяг","Велоперчатки","Фляги та флягоутримувачі"]},{name:"Аксесуари для телефонів"},{name:"Спорт та захоплення",category:["Трекінгові палиці","Гірськолижні маски","Гірськолижні шоломи","Гірськолижні рукавички","Лижні палиці","Активний відпочинок","Bуризм та хобі","Газові та мультипаливні туристичні системи","Складні меблі","Посуд для відпочинку та туризму","Спальні мішки","Намети та аксесуари","Черевики для сноубордів","Кріплення для сноуборду","Черевики для лиж","Туристичні килимки","Зимові види спорту"]},{name:"Краса та здоров'я"},{name:"Електронні сигарети"},{name:"Кальяни та аксесуари"},{name:"Товари для бізнесу"}];let Ci=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const fF=()=>{const e=wr().state,n=ln(cn),[r,i]=I.useState([]),[s,o]=I.useState(r),[a,l]=I.useState(!1),[u,c]=I.useState(),[h,d]=I.useState(""),[p,v]=I.useState(""),[y,w]=I.useState(e&&e.category?e.category:"");let m=new Date().getTime()/1e3;const f=B=>{c(B),l(!0)},_=()=>{l(!1)},E=async()=>{o([]);const B=pn(Dt(we,"goods"),Pn("createTime","desc"),Rn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{o(ce=>[...ce,{...oe.data(),id:oe.id}])})},T=async()=>{const B=pn(Dt(we,"goods"),Pn("createTime","desc"),qo(h),Rn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{o(ce=>[...ce,{...oe.data(),id:oe.id}])})},S=async()=>{o([]);const B=pn(Dt(we,"goods"),Wo("category","==",y),Pn("createTime","desc"),Rn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{o(ce=>[...ce,{...oe.data(),id:oe.id}])})},b=async()=>{const B=pn(Dt(we,"goods"),Wo("category","==",y),Pn("createTime","desc"),qo(h),Rn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{o(ce=>[...ce,{...oe.data(),id:oe.id}])})},P=async()=>{o([]);const B=pn(Dt(we,"goods"),Pn("name"),Rn(25)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{oe.data().name.toLowerCase().includes(p.toLowerCase())&&o(ce=>[...ce,{...oe.data(),id:oe.id}])})},G=async()=>{const B=pn(Dt(we,"goods"),Pn("name"),qo(h),Rn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{oe.data().name.toLowerCase().includes(p.toLowerCase())&&o(ce=>[...ce,{...oe.data(),id:oe.id}])})},$=async()=>{o([]);const B=pn(Dt(we,"goods"),Wo("category","==",y),Pn("createTime","desc"),Rn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J);let oe=[];W.docs.map(ce=>{ce.data().name.toLowerCase().includes(p.toLowerCase())&&oe.push({...ce.data(),id:ce.id})}),o(oe)},z=async()=>{const B=pn(Dt(we,"goods"),Wo("category","==",y),Pn("createTime","desc"),qo(h),Rn(24)),W=await mn(B),J=W.docs[W.docs.length-1];d(J),W.docs.map(oe=>{oe.data().name.toLowerCase().includes(p.toLowerCase())&&o(ce=>[...ce,{...oe.data(),id:oe.id}])})};I.useEffect(()=>{!(p.length>0)&&!y?E():!(p.length>0)&&y?S():p.length>0&&!y?P():$()},[p,y]);const fe=()=>{!(p.length>0)&&!y?T():!(p.length>0)&&y?b():p.length>0&&!y?G():z()};return g.jsxs(uF,{children:[g.jsx(cF,{placeholder:"Назва товару",onChange:B=>{v(B.target.value)}}),g.jsxs(hF,{id:"category",name:"category",value:y,onChange:B=>{w(B.target.value)},children:[g.jsx(Jn,{value:"",selected:!(e&&e.category)&&"selected"||null,children:"Без категорії"},Ci()),XS.map((B,W)=>B.category?g.jsx("optgroup",{label:`${B.name}`,children:B.category&&B.category.map(J=>g.jsx(Jn,{value:`${J}`,selected:y===J&&"selected"||null,children:J},Ci()))},Ci()):g.jsx(Jn,{value:`${B.name}`,style:{fontWeight:"bolder"},selected:y===B.name&&"selected"||null,children:B.name},Ci()))]}),g.jsx(Ky,{children:s.length>0?s.map((B,W)=>g.jsx(g.Fragment,{children:g.jsxs(Qy,{onClick:()=>f(B),style:{backgroundImage:`url(${typeof B.image=="string"?B.image:B.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(J=>{if(J.name===B.name)return g.jsx(Zy,{})}),m-B.createTime.seconds<259200&&g.jsx(Jy,{children:"Новинка!"}),g.jsxs(Yy,{children:[g.jsx(Xy,{children:B.name}),g.jsxs("p",{children:[B.price," грн."]})]})]},W)})):g.jsxs(dF,{children:[g.jsx("p",{children:"Нічого не знайдено"}),g.jsx("p",{children:" (використайте фільтр пошуку)"})]})}),g.jsx(QS,{onClick:fe,children:"Побачити більше"}),a&&g.jsx(ad,{card:u,closeModal:_})]})},pF=()=>{const[t,e]=I.useState([]),n=()=>{RS(Dt(we,"orders"),o=>{e(o.docs.map(a=>({...a.data(),id:a.id})).sort((a,l)=>a.postDate.seconds>l.postDate.seconds?-1:1))})},r=async o=>{await PS(Et(we,"orders",`${o}`))},i=async o=>{await Ni(Et(we,"orders",`${o}`),{status:"take"})},s=async o=>{await Ni(Et(we,"orders",`${o}`),{status:"send"})};return I.useEffect(()=>{n()}),g.jsx(cj,{children:t.map(o=>g.jsxs(hj,{style:o.status==="take"?{backgroundColor:"yellow"}:o.status==="send"?{backgroundColor:"green"}:{},children:[g.jsxs("p",{children:["Статус: ",o.status==="create"&&"Нове"," ",o.status==="take"&&"Прийняте",o.status==="send"&&"Відправлене"]}),g.jsxs("p",{children:["Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(o.postDate.seconds)]}),g.jsxs("p",{children:["ФІП: ",o.userFullName]}),g.jsxs("p",{children:["Email: ",o.userEmail]}),g.jsxs("p",{children:["Номер телефону:",o.userNumber]}),g.jsxs("p",{children:["Адрес Нової почти: ",o.userPostAdress]}),g.jsx("p",{children:"Список замовлення:"}),o.cashList.map(a=>g.jsxs(g.Fragment,{children:[g.jsx(dj,{style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`}}),g.jsxs("p",{children:["Id товару: ",a.id]}),g.jsxs("p",{children:["Назва: ",a.name]}),g.jsxs("p",{children:["Ціна: ",a.price]})]})),g.jsxs(fj,{children:[g.jsx(pj,{onClick:()=>r(o.id)}),g.jsx(mj,{onClick:()=>i(o.id)}),g.jsx(gj,{onClick:()=>s(o.id)})]})]}))})},mF=()=>{const{role:t}=ln(cn),e=Er(),r=wr().state,i=Qi(),[s,o]=I.useState(r?r.image:""),[a,l]=I.useState(r?r.name:""),[u,c]=I.useState(r?r.price:""),[h,d]=I.useState(r?r.producent:""),[p,v]=I.useState(r?r.size:""),[y,w]=I.useState(r?r.otherInfo:""),m=async f=>{try{r?(await Ly(Et(we,"goods",`${f.id}`),f),alert("Change success")):(await n$(Dt(we,"goods"),f),alert("Add success"))}catch(_){console.error("Error adding document: ",_)}};return I.useEffect(()=>{document.getElementById("form").addEventListener("submit",function(_){_.preventDefault();const{image:E,name:T,price:S,sex:b,producent:P,category:G,size:$,otherInfo:z}=this.elements,B={image:E.value.split(" ").filter(W=>{if(W)return W}),name:T.value,price:S.value,sex:b.value||"",producent:P.value||"",category:G.value,size:$.value||"",otherInfo:z.value||"",createTime:new Date};m(B),this.reset()})},[i]),I.useEffect(()=>{t!="admin"&&e("/")}),g.jsxs(g.Fragment,{children:[g.jsxs(nF,{id:"form",children:[g.jsx("p",{children:"Малюнок"}),g.jsx(Sw,{required:!0,name:"image",placeholder:"Додати ссилку на картинку",value:s,onChange:f=>o(f.target.value)}),g.jsx("p",{children:"Назва"}),g.jsx(ru,{required:!0,name:"name",placeholder:"Додати назву",value:a,onChange:f=>l(f.target.value)}),g.jsx("p",{children:"Ціна в гривнях"}),g.jsx(ru,{required:!0,name:"price",placeholder:"Додати ціну",value:u,onChange:f=>c(f.target.value)}),g.jsx("p",{children:"Категорія"}),g.jsxs(tm,{id:"category",name:"category",children:[g.jsx(Jn,{value:"",children:"Вкажіть категорію"}),XS.map((f,_)=>f.category?g.jsx("optgroup",{label:`${f.name}`,children:f.category&&f.category.map(E=>g.jsx(Jn,{value:`${E}`,selected:r&&r.category===E&&"selected"||null,children:E},Ci()))},Ci()):g.jsx(Jn,{value:`${f.name}`,style:{fontWeight:"bolder"},selected:r&&r.category===f.name&&"selected"||null,children:f.name},Ci()))]}),g.jsx("p",{children:"Рід"}),g.jsxs(tm,{id:"sex",name:"sex",placeholder:"Вибрати рід",children:[g.jsx(Jn,{value:"",children:"Без роду"}),g.jsx(Jn,{value:"Чоловік",selected:r&&r.sex==="Чоловік"&&"selected"||null,children:"Чоловік"}),g.jsx(Jn,{value:"Жінка",selected:r&&r.sex==="Жінка"&&"selected"||null,children:"Жінка"})]}),g.jsx("p",{children:"Розмір"}),g.jsx(ru,{name:"size",placeholder:"Додати розмір",value:p,onChange:f=>v(f.target.value)}),g.jsx("p",{children:"Виробник"}),g.jsx(ru,{name:"producent",placeholder:"Додати виробника",value:h,onChange:f=>d(f.target.value)}),g.jsx("p",{children:"Додаткова інформація"}),g.jsx(Sw,{name:"otherInfo",placeholder:"Додати додаткову інформацію",value:y,onChange:f=>w(f.target.value)}),g.jsx(YS,{children:r?"Зілити зміни":"Залити новий товар"})]}),g.jsx("h3",{children:"Замовлення"}),g.jsx(pF,{})]})},gF=()=>{const[t,e]=I.useState([]),[n,r]=I.useState(!1),[i,s]=I.useState(),[o,a]=I.useState(""),l=ln(cn),u=Qi();let c=new Date().getTime()/1e3;I.useEffect(()=>{jr.getItem("userEmail")&&jr.getItem("userPassword")&&h()},[]);const h=async()=>{const w=await jr.getItem("userEmail"),m=await jr.getItem("userPassword");u(qy({email:w,password:m})),u(Hy(w))},d=w=>{s(w),r(!0)},p=()=>{r(!1)},v=async()=>{const w=pn(Dt(we,"goods"),Pn("createTime","desc"),Rn(24)),m=await mn(w);console.log(m.docs.map(_=>console.log(_.data())));const f=m.docs[m.docs.length-1];a(f),m.docs.map(_=>{e(E=>[...E,{..._.data(),id:_.id}])})},y=async()=>{const w=pn(Dt(we,"goods"),Pn("createTime","desc"),qo(o),Rn(24)),m=await mn(w),f=m.docs[m.docs.length-1];a(f),m.docs.map(_=>{e(E=>[...E,{..._.data(),id:_.id}])})};return I.useEffect(()=>{v()},[]),g.jsxs(g.Fragment,{children:[g.jsx(Ky,{id:"cardList",children:t.length>0&&t.map((w,m)=>g.jsx(g.Fragment,{children:g.jsxs(Qy,{onClick:()=>d(w),style:{backgroundImage:`url(${typeof w.image=="string"?w.image:w.image[0]})`},children:[l.favoriteList&&l.favoriteList.map(f=>{if(f.name===w.name)return g.jsx(Zy,{})}),c-w.createTime.seconds<259200&&g.jsx(Jy,{children:"Новинка!"}),g.jsxs(Yy,{children:[g.jsx(Xy,{children:w.name}),g.jsxs("p",{children:[w.price," грн."]})]})]},w.id)}))}),g.jsx(QS,{onClick:y,children:"Завантажити більше"}),n&&g.jsx(ad,{card:i,closeModal:p})]})},yF=C.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,vF=C.div`
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
`,_F=C.div`
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
`,wF=C.li`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 50px;
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
    height: 100px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,EF=C.div`
  width: 50%;
`,IF=C.h3``,xF=C.p``,TF=C.button`
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
`,SF=C(Gy)`
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
`,AF=C.button`
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
`,CF=()=>{const{cashList:t}=ln(cn),e=Qi(),n=Er();return g.jsxs(vF,{children:[g.jsx(yF,{children:"Список товарів"}),t.length>0?g.jsxs(g.Fragment,{children:[t.map((r,i)=>g.jsxs(wF,{children:[g.jsx(_F,{style:{backgroundImage:`url(${typeof r.image=="string"?r.image:r.image[0]})`}}),g.jsxs(EF,{children:[g.jsx(IF,{children:r.name}),g.jsxs(xF,{children:[r.price," грн."]})]}),g.jsx(TF,{onClick:()=>e(Vj(i)),children:g.jsx(SF,{})})]})),g.jsx(AF,{onClick:()=>n("/checkout"),children:"Перейти до оформлення відправки"})]}):"Корзина пуста"]})},kF=C.div`
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
`,PF=C.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 42px;
  }
`,iu=C.input`
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
`,Oo=C.div`
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
`,RF=C.button`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,Aw=C.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,bF=()=>{const t=ln(cn),[e,n]=I.useState(""),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(""),[u,c]=I.useState(""),[h,d]=I.useState(""),[p,v]=I.useState(""),[y,w]=I.useState(""),[m,f]=I.useState(!1),_=Qi(),E=Er(),T=async()=>{const z=await Oy(Et(we,"users",`${t.email}`));if(z.exists()){const{name:fe,userPostAdress:B,userNumber:W,email:J}=z.data();o(J),n(fe),i(W),l(B)}else console.log("No such document!")};I.useEffect(()=>{t.email&&T()},[t]);const S=z=>{n(z.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(z.target.value).toLowerCase())?c(""):c("Введіть повнe призвіще, ім'я, побатькові")},b=z=>{o(z.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(z.target.value).toLowerCase())?d(""):d("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},P=z=>{i(z.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(z.target.value))?v(""):v("Номер невірного формату (наприклад: '043*******')")},G=z=>{l(z.target.value),z.target.value.length>0?w(""):w("Адрес відділення пошти пустий")},$=async()=>{if(s&&e&&r&&a&&!h&&!p&&!u&&!y)try{const z=new Date,fe=z.getFullYear()+"-"+(z.getMonth()+1)+"-"+z.getDate()+" "+z.getHours()+":"+z.getMinutes()+":"+z.getSeconds();await Ly(Et(we,"orders",`${fe}`),{userFullName:e,userNumber:r,userEmail:s,userPostAdress:a,postDate:fe,id:`${s}${fe}`,status:"create",cashList:t.cashList}),_(ej()),E("/")}catch(z){console.log(z)}else f(!0)};return I.useEffect(()=>{!h&&!p&&!u&&!y&&f(!1)}),g.jsxs(kF,{id:"CheckoutForm",children:[g.jsx(PF,{children:"Контактні дані"}),g.jsx(iu,{required:!0,name:"name",value:e,onChange:z=>{S(z)},placeholder:"Введіть ПІБ",style:u?{borderColor:"red"}:{}}),u&&g.jsx(Oo,{children:u}),g.jsx(iu,{value:r,onChange:z=>{P(z)},placeholder:"Введіть контактний номер телефону",style:p?{borderColor:"red"}:{}}),p&&g.jsx(Oo,{children:p}),g.jsx(iu,{required:!0,name:"email",value:s,onChange:z=>{b(z)},placeholder:"Введіть контактну електронну адресу",style:h?{borderColor:"red"}:{}}),h&&g.jsx(Oo,{children:h}),g.jsx(iu,{value:a,onChange:z=>{G(z)},placeholder:"Введіть адресу відділення пошти",style:y?{borderColor:"red"}:{}}),y&&g.jsx(Oo,{children:y}),g.jsx(Oo,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Aw,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(Aw,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(RF,{onClick:$,style:m?{background:"red"}:{},children:m?"Невірно заповнена форма":"Завершити оформлення замовлення"})]})};function NF(){return g.jsxs(IP,{children:[g.jsxs(Qn,{path:"/",element:g.jsx(tF,{}),children:[g.jsx(Qn,{index:!0,element:g.jsx(gF,{})}),g.jsx(Qn,{path:"category",element:g.jsx(lF,{})}),g.jsx(Qn,{path:"search",element:g.jsx(fF,{})}),g.jsx(Qn,{path:"admin",element:g.jsx(mF,{})}),g.jsx(Qn,{path:"cashList",element:g.jsx(CF,{})}),g.jsx(Qn,{path:"checkout",element:g.jsx(bF,{})})]}),g.jsx(Qn,{path:"*",element:g.jsx(_P,{to:"/"})})]})}var JS="persist/FLUSH",ev="persist/REHYDRATE",ZS="persist/PAUSE",eA="persist/PERSIST",tA="persist/PURGE",tv="persist/REGISTER";function Cw(t){return LF(t)||DF(t)||OF()}function OF(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function DF(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function LF(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function kw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nm(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kw(n,!0).forEach(function(r){MF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kw(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function MF(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nA={registry:[],bootstrapped:!1},VF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:nA,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case tv:return nm({},e,{registry:[].concat(Cw(e.registry),[n.key])});case ev:var r=e.registry.indexOf(n.key),i=Cw(e.registry);return i.splice(r,1),nm({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function $F(t,e,n){var r=n||!1,i=By(VF,nA,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:tv,key:u})},o=function(u,c,h){var d={type:ev,payload:c,err:h,key:u};t.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=nm({},i,{purge:function(){var u=[];return t.dispatch({type:tA,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:JS,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:ZS})},persist:function(){t.dispatch({type:eA,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const jF=VS({[Lc.name]:Lc.reducer}),rA=L$({reducer:jF,middleware:t=>t({serializableCheck:{ignoredActions:[JS,ev,ZS,eA,tA,tv]}})});$F(rA);vf.createRoot(document.getElementById("root")).render(g.jsx($t.StrictMode,{children:g.jsx(kP,{basename:"oleg_shop.02",children:g.jsx(CR,{store:rA,children:g.jsx(NF,{})})})}));
