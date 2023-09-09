var iC=Object.defineProperty;var sC=(t,e,n)=>e in t?iC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Io=(t,e,n)=>(sC(t,typeof e!="symbol"?e+"":e,n),n);function oC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var P1={exports:{}},Mc={},R1={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),aC=Symbol.for("react.portal"),lC=Symbol.for("react.fragment"),uC=Symbol.for("react.strict_mode"),cC=Symbol.for("react.profiler"),hC=Symbol.for("react.provider"),dC=Symbol.for("react.context"),fC=Symbol.for("react.forward_ref"),pC=Symbol.for("react.suspense"),mC=Symbol.for("react.memo"),gC=Symbol.for("react.lazy"),nv=Symbol.iterator;function yC(t){return t===null||typeof t!="object"?null:(t=nv&&t[nv]||t["@@iterator"],typeof t=="function"?t:null)}var b1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N1=Object.assign,O1={};function ao(t,e,n){this.props=t,this.context=e,this.refs=O1,this.updater=n||b1}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D1(){}D1.prototype=ao.prototype;function im(t,e,n){this.props=t,this.context=e,this.refs=O1,this.updater=n||b1}var sm=im.prototype=new D1;sm.constructor=im;N1(sm,ao.prototype);sm.isPureReactComponent=!0;var rv=Array.isArray,L1=Object.prototype.hasOwnProperty,om={current:null},M1={key:!0,ref:!0,__self:!0,__source:!0};function V1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)L1.call(e,r)&&!M1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ka,type:t,key:s,ref:o,props:i,_owner:om.current}}function vC(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function am(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function _C(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iv=/\/+/g;function cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_C(""+t.key):e.toString(36)}function su(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ka:case aC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cd(o,0):r,rv(i)?(n="",t!=null&&(n=t.replace(iv,"$&/")+"/"),su(i,e,n,"",function(u){return u})):i!=null&&(am(i)&&(i=vC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(iv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cd(s,a);o+=su(s,e,n,l,i)}else if(l=yC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cd(s,a++),o+=su(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(t,e,n){if(t==null)return t;var r=[],i=0;return su(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},ou={transition:null},EC={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:ou,ReactCurrentOwner:om};ue.Children={map:xl,forEach:function(t,e,n){xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xl(t,function(){e++}),e},toArray:function(t){return xl(t,function(e){return e})||[]},only:function(t){if(!am(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=ao;ue.Fragment=lC;ue.Profiler=cC;ue.PureComponent=im;ue.StrictMode=uC;ue.Suspense=pC;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EC;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=N1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=om.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)L1.call(e,l)&&!M1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ka,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:dC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hC,_context:t},t.Consumer=t};ue.createElement=V1;ue.createFactory=function(t){var e=V1.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:fC,render:t}};ue.isValidElement=am;ue.lazy=function(t){return{$$typeof:gC,_payload:{_status:-1,_result:t},_init:wC}};ue.memo=function(t,e){return{$$typeof:mC,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=ou.transition;ou.transition={};try{t()}finally{ou.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ue.useContext=function(t){return Nt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ue.useId=function(){return Nt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ue.useRef=function(t){return Nt.current.useRef(t)};ue.useState=function(t){return Nt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Nt.current.useTransition()};ue.version="18.2.0";R1.exports=ue;var I=R1.exports;const $t=rm(I),IC=oC({__proto__:null,default:$t},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xC=I,TC=Symbol.for("react.element"),SC=Symbol.for("react.fragment"),CC=Object.prototype.hasOwnProperty,AC=xC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kC={key:!0,ref:!0,__self:!0,__source:!0};function $1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)CC.call(e,r)&&!kC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:TC,type:t,key:s,ref:o,props:i,_owner:AC.current}}Mc.Fragment=SC;Mc.jsx=$1;Mc.jsxs=$1;P1.exports=Mc;var g=P1.exports,vf={},j1={exports:{}},Yt={},F1={exports:{}},U1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,G){var Q=D.length;D.push(G);e:for(;0<Q;){var ve=Q-1>>>1,M=D[ve];if(0<i(M,G))D[ve]=G,D[Q]=M,Q=ve;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var G=D[0],Q=D.pop();if(Q!==G){D[0]=Q;e:for(var ve=0,M=D.length,F=M>>>1;ve<F;){var U=2*(ve+1)-1,Y=D[U],x=U+1,ae=D[x];if(0>i(Y,Q))x<M&&0>i(ae,Y)?(D[ve]=ae,D[x]=Q,ve=x):(D[ve]=Y,D[U]=Q,ve=U);else if(x<M&&0>i(ae,Q))D[ve]=ae,D[x]=Q,ve=x;else break e}}return G}function i(D,G){var Q=D.sortIndex-G.sortIndex;return Q!==0?Q:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,_=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=D)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function E(D){if(y=!1,v(D),!_)if(n(l)!==null)_=!0,se(T);else{var G=n(u);G!==null&&oe(E,G.startTime-D)}}function T(D,G){_=!1,y&&(y=!1,m(R),R=-1),p=!0;var Q=d;try{for(v(G),h=n(l);h!==null&&(!(h.expirationTime>G)||D&&!ce());){var ve=h.callback;if(typeof ve=="function"){h.callback=null,d=h.priorityLevel;var M=ve(h.expirationTime<=G);G=t.unstable_now(),typeof M=="function"?h.callback=M:h===n(l)&&r(l),v(G)}else r(l);h=n(l)}if(h!==null)var F=!0;else{var U=n(u);U!==null&&oe(E,U.startTime-G),F=!1}return F}finally{h=null,d=Q,p=!1}}var S=!1,N=null,R=-1,H=5,j=-1;function ce(){return!(t.unstable_now()-j<H)}function Te(){if(N!==null){var D=t.unstable_now();j=D;var G=!0;try{G=N(!0,D)}finally{G?k():(S=!1,N=null)}}else S=!1}var k;if(typeof f=="function")k=function(){f(Te)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,X=z.port2;z.port1.onmessage=Te,k=function(){X.postMessage(null)}}else k=function(){w(Te,0)};function se(D){N=D,S||(S=!0,k())}function oe(D,G){R=w(function(){D(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,se(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var Q=d;d=G;try{return D()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=d;d=D;try{return G()}finally{d=Q}},t.unstable_scheduleCallback=function(D,G,Q){var ve=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ve+Q:ve):Q=ve,D){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=Q+M,D={id:c++,callback:G,priorityLevel:D,startTime:Q,expirationTime:M,sortIndex:-1},Q>ve?(D.sortIndex=Q,e(u,D),n(l)===null&&D===n(u)&&(y?(m(R),R=-1):y=!0,oe(E,Q-ve))):(D.sortIndex=M,e(l,D),_||p||(_=!0,se(T))),D},t.unstable_shouldYield=ce,t.unstable_wrapCallback=function(D){var G=d;return function(){var Q=d;d=G;try{return D.apply(this,arguments)}finally{d=Q}}}})(U1);F1.exports=U1;var PC=F1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=I,Gt=PC;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var B1=new Set,ua={};function Hi(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(ua[t]=e,t=0;t<e.length;t++)B1.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=Object.prototype.hasOwnProperty,RC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sv={},ov={};function bC(t){return _f.call(ov,t)?!0:_f.call(sv,t)?!1:RC.test(t)?ov[t]=!0:(sv[t]=!0,!1)}function NC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OC(t,e,n,r){if(e===null||typeof e>"u"||NC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var lm=/[\-:]([a-z])/g;function um(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lm,um);dt[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lm,um);dt[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lm,um);dt[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function cm(t,e,n,r){var i=dt.hasOwnProperty(e)?dt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OC(e,n,i,r)&&(n=null),r||i===null?bC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wr=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),hm=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),W1=Symbol.for("react.provider"),q1=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),fm=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),H1=Symbol.for("react.offscreen"),av=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,hd;function Do(t){if(hd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hd=e&&e[1]||""}return`
`+hd+t}var dd=!1;function fd(t,e){if(!t||dd)return"";dd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{dd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function DC(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=fd(t.type,!1),t;case 11:return t=fd(t.type.render,!1),t;case 1:return t=fd(t.type,!0),t;default:return""}}function xf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case us:return"Portal";case wf:return"Profiler";case hm:return"StrictMode";case Ef:return"Suspense";case If:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q1:return(t.displayName||"Context")+".Consumer";case W1:return(t._context.displayName||"Context")+".Provider";case dm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fm:return e=t.displayName||null,e!==null?e:xf(t.type)||"Memo";case Cr:e=t._payload,t=t._init;try{return xf(t(e))}catch{}}return null}function LC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xf(e);case 8:return e===hm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ni(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function MC(t){var e=G1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=MC(t))}function K1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=G1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tf(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ni(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Q1(t,e){e=e.checked,e!=null&&cm(t,"checked",e,!1)}function Sf(t,e){Q1(t,e);var n=ni(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,ni(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||Au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ni(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Lo(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ni(n)}}function Y1(t,e){var n=ni(e.value),r=ni(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cl,J1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cl=Cl||document.createElement("div"),Cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VC=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){VC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function Z1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function ew(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $C=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pf(t,e){if(e){if($C[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=null;function pm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nf=null,Ss=null,Cs=null;function dv(t){if(t=Xa(t)){if(typeof Nf!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Uc(e),Nf(t.stateNode,t.type,e))}}function tw(t){Ss?Cs?Cs.push(t):Cs=[t]:Ss=t}function nw(){if(Ss){var t=Ss,e=Cs;if(Cs=Ss=null,dv(t),e)for(t=0;t<e.length;t++)dv(e[t])}}function rw(t,e){return t(e)}function iw(){}var pd=!1;function sw(t,e,n){if(pd)return t(e,n);pd=!0;try{return rw(t,e,n)}finally{pd=!1,(Ss!==null||Cs!==null)&&(iw(),nw())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var Of=!1;if(ur)try{var To={};Object.defineProperty(To,"passive",{get:function(){Of=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Of=!1}function jC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Qo=!1,ku=null,Pu=!1,Df=null,FC={onError:function(t){Qo=!0,ku=t}};function UC(t,e,n,r,i,s,o,a,l){Qo=!1,ku=null,jC.apply(FC,arguments)}function zC(t,e,n,r,i,s,o,a,l){if(UC.apply(this,arguments),Qo){if(Qo){var u=ku;Qo=!1,ku=null}else throw Error(P(198));Pu||(Pu=!0,Df=u)}}function Gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ow(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fv(t){if(Gi(t)!==t)throw Error(P(188))}function BC(t){var e=t.alternate;if(!e){if(e=Gi(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fv(i),t;if(s===r)return fv(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function aw(t){return t=BC(t),t!==null?lw(t):null}function lw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lw(t);if(e!==null)return e;t=t.sibling}return null}var uw=Gt.unstable_scheduleCallback,pv=Gt.unstable_cancelCallback,WC=Gt.unstable_shouldYield,qC=Gt.unstable_requestPaint,ze=Gt.unstable_now,HC=Gt.unstable_getCurrentPriorityLevel,mm=Gt.unstable_ImmediatePriority,cw=Gt.unstable_UserBlockingPriority,Ru=Gt.unstable_NormalPriority,GC=Gt.unstable_LowPriority,hw=Gt.unstable_IdlePriority,Vc=null,Vn=null;function KC(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:XC,QC=Math.log,YC=Math.LN2;function XC(t){return t>>>=0,t===0?32:31-(QC(t)/YC|0)|0}var Al=64,kl=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mo(a):(s&=o,s!==0&&(r=Mo(s)))}else o=n&~i,o!==0?r=Mo(o):s!==0&&(r=Mo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function JC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ZC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=JC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dw(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function md(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function e2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function fw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pw,ym,mw,gw,yw,Mf=!1,Pl=[],Fr=null,Ur=null,zr=null,da=new Map,fa=new Map,kr=[],t2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mv(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function So(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&ym(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function n2(t,e,n,r,i){switch(e){case"focusin":return Fr=So(Fr,t,e,n,r,i),!0;case"dragenter":return Ur=So(Ur,t,e,n,r,i),!0;case"mouseover":return zr=So(zr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return da.set(s,So(da.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fa.set(s,So(fa.get(s)||null,t,e,n,r,i)),!0}return!1}function vw(t){var e=Ei(t.target);if(e!==null){var n=Gi(e);if(n!==null){if(e=n.tag,e===13){if(e=ow(n),e!==null){t.blockedOn=e,yw(t.priority,function(){mw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bf=r,n.target.dispatchEvent(r),bf=null}else return e=Xa(n),e!==null&&ym(e),t.blockedOn=n,!1;e.shift()}return!0}function gv(t,e,n){au(t)&&n.delete(e)}function r2(){Mf=!1,Fr!==null&&au(Fr)&&(Fr=null),Ur!==null&&au(Ur)&&(Ur=null),zr!==null&&au(zr)&&(zr=null),da.forEach(gv),fa.forEach(gv)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,r2)))}function pa(t){function e(i){return Co(i,t)}if(0<Pl.length){Co(Pl[0],t);for(var n=1;n<Pl.length;n++){var r=Pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&Co(Fr,t),Ur!==null&&Co(Ur,t),zr!==null&&Co(zr,t),da.forEach(e),fa.forEach(e),n=0;n<kr.length;n++)r=kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kr.length&&(n=kr[0],n.blockedOn===null);)vw(n),n.blockedOn===null&&kr.shift()}var As=wr.ReactCurrentBatchConfig,Nu=!0;function i2(t,e,n,r){var i=we,s=As.transition;As.transition=null;try{we=1,vm(t,e,n,r)}finally{we=i,As.transition=s}}function s2(t,e,n,r){var i=we,s=As.transition;As.transition=null;try{we=4,vm(t,e,n,r)}finally{we=i,As.transition=s}}function vm(t,e,n,r){if(Nu){var i=Vf(t,e,n,r);if(i===null)Sd(t,e,r,Ou,n),mv(t,r);else if(n2(i,t,e,n,r))r.stopPropagation();else if(mv(t,r),e&4&&-1<t2.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&pw(s),s=Vf(t,e,n,r),s===null&&Sd(t,e,r,Ou,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var Ou=null;function Vf(t,e,n,r){if(Ou=null,t=pm(r),t=Ei(t),t!==null)if(e=Gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ow(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ou=t,null}function _w(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HC()){case mm:return 1;case cw:return 4;case Ru:case GC:return 16;case hw:return 536870912;default:return 16}default:return 16}}var Lr=null,_m=null,lu=null;function ww(){if(lu)return lu;var t,e=_m,n=e.length,r,i="value"in Lr?Lr.value:Lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lu=i.slice(t,1<r?1-r:void 0)}function uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function yv(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:yv,this.isPropagationStopped=yv,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wm=Xt(lo),Ya=Me({},lo,{view:0,detail:0}),o2=Xt(Ya),gd,yd,Ao,$c=Me({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Em,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(gd=t.screenX-Ao.screenX,yd=t.screenY-Ao.screenY):yd=gd=0,Ao=t),gd)},movementY:function(t){return"movementY"in t?t.movementY:yd}}),vv=Xt($c),a2=Me({},$c,{dataTransfer:0}),l2=Xt(a2),u2=Me({},Ya,{relatedTarget:0}),vd=Xt(u2),c2=Me({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),h2=Xt(c2),d2=Me({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f2=Xt(d2),p2=Me({},lo,{data:0}),_v=Xt(p2),m2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y2[t])?!!e[t]:!1}function Em(){return v2}var _2=Me({},Ya,{key:function(t){if(t.key){var e=m2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Em,charCode:function(t){return t.type==="keypress"?uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w2=Xt(_2),E2=Me({},$c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=Xt(E2),I2=Me({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Em}),x2=Xt(I2),T2=Me({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),S2=Xt(T2),C2=Me({},$c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A2=Xt(C2),k2=[9,13,27,32],Im=ur&&"CompositionEvent"in window,Yo=null;ur&&"documentMode"in document&&(Yo=document.documentMode);var P2=ur&&"TextEvent"in window&&!Yo,Ew=ur&&(!Im||Yo&&8<Yo&&11>=Yo),Ev=String.fromCharCode(32),Iv=!1;function Iw(t,e){switch(t){case"keyup":return k2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function R2(t,e){switch(t){case"compositionend":return xw(e);case"keypress":return e.which!==32?null:(Iv=!0,Ev);case"textInput":return t=e.data,t===Ev&&Iv?null:t;default:return null}}function b2(t,e){if(hs)return t==="compositionend"||!Im&&Iw(t,e)?(t=ww(),lu=_m=Lr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ew&&e.locale!=="ko"?null:e.data;default:return null}}var N2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N2[t.type]:e==="textarea"}function Tw(t,e,n,r){tw(r),e=Du(e,"onChange"),0<e.length&&(n=new wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xo=null,ma=null;function O2(t){Lw(t,0)}function jc(t){var e=ps(t);if(K1(e))return t}function D2(t,e){if(t==="change")return e}var Sw=!1;if(ur){var _d;if(ur){var wd="oninput"in document;if(!wd){var Tv=document.createElement("div");Tv.setAttribute("oninput","return;"),wd=typeof Tv.oninput=="function"}_d=wd}else _d=!1;Sw=_d&&(!document.documentMode||9<document.documentMode)}function Sv(){Xo&&(Xo.detachEvent("onpropertychange",Cw),ma=Xo=null)}function Cw(t){if(t.propertyName==="value"&&jc(ma)){var e=[];Tw(e,ma,t,pm(t)),sw(O2,e)}}function L2(t,e,n){t==="focusin"?(Sv(),Xo=e,ma=n,Xo.attachEvent("onpropertychange",Cw)):t==="focusout"&&Sv()}function M2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(ma)}function V2(t,e){if(t==="click")return jc(e)}function $2(t,e){if(t==="input"||t==="change")return jc(e)}function j2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:j2;function ga(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_f.call(e,i)||!In(t[i],e[i]))return!1}return!0}function Cv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Av(t,e){var n=Cv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cv(n)}}function Aw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Aw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kw(){for(var t=window,e=Au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Au(t.document)}return e}function xm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F2(t){var e=kw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Aw(n.ownerDocument.documentElement,n)){if(r!==null&&xm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Av(n,s);var o=Av(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U2=ur&&"documentMode"in document&&11>=document.documentMode,ds=null,$f=null,Jo=null,jf=!1;function kv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jf||ds==null||ds!==Au(r)||(r=ds,"selectionStart"in r&&xm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jo&&ga(Jo,r)||(Jo=r,r=Du($f,"onSelect"),0<r.length&&(e=new wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ds)))}function bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},Ed={},Pw={};ur&&(Pw=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Fc(t){if(Ed[t])return Ed[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pw)return Ed[t]=e[n];return t}var Rw=Fc("animationend"),bw=Fc("animationiteration"),Nw=Fc("animationstart"),Ow=Fc("transitionend"),Dw=new Map,Pv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(t,e){Dw.set(t,e),Hi(e,[t])}for(var Id=0;Id<Pv.length;Id++){var xd=Pv[Id],z2=xd.toLowerCase(),B2=xd[0].toUpperCase()+xd.slice(1);ci(z2,"on"+B2)}ci(Rw,"onAnimationEnd");ci(bw,"onAnimationIteration");ci(Nw,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(Ow,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Rv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,zC(r,e,void 0,t),t.currentTarget=null}function Lw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Rv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Rv(i,a,u),s=l}}}if(Pu)throw t=Df,Pu=!1,Df=null,t}function Ae(t,e){var n=e[Wf];n===void 0&&(n=e[Wf]=new Set);var r=t+"__bubble";n.has(r)||(Mw(e,t,2,!1),n.add(r))}function Td(t,e,n){var r=0;e&&(r|=4),Mw(n,t,r,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Nl]){t[Nl]=!0,B1.forEach(function(n){n!=="selectionchange"&&(W2.has(n)||Td(n,!1,t),Td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,Td("selectionchange",!1,e))}}function Mw(t,e,n,r){switch(_w(e)){case 1:var i=i2;break;case 4:i=s2;break;default:i=vm}n=i.bind(null,e,n,t),i=void 0,!Of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ei(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}sw(function(){var u=s,c=pm(n),h=[];e:{var d=Dw.get(t);if(d!==void 0){var p=wm,_=t;switch(t){case"keypress":if(uu(n)===0)break e;case"keydown":case"keyup":p=w2;break;case"focusin":_="focus",p=vd;break;case"focusout":_="blur",p=vd;break;case"beforeblur":case"afterblur":p=vd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=l2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=x2;break;case Rw:case bw:case Nw:p=h2;break;case Ow:p=S2;break;case"scroll":p=o2;break;case"wheel":p=A2;break;case"copy":case"cut":case"paste":p=f2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wv}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,v;f!==null;){v=f;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,m!==null&&(E=ha(f,m),E!=null&&y.push(va(f,E,v)))),w)break;f=f.return}0<y.length&&(d=new p(d,_,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==bf&&(_=n.relatedTarget||n.fromElement)&&(Ei(_)||_[cr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Ei(_):null,_!==null&&(w=Gi(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=vv,E="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=wv,E="onPointerLeave",m="onPointerEnter",f="pointer"),w=p==null?d:ps(p),v=_==null?d:ps(_),d=new y(E,f+"leave",p,n,c),d.target=w,d.relatedTarget=v,E=null,Ei(c)===u&&(y=new y(m,f+"enter",_,n,c),y.target=v,y.relatedTarget=w,E=y),w=E,p&&_)t:{for(y=p,m=_,f=0,v=y;v;v=rs(v))f++;for(v=0,E=m;E;E=rs(E))v++;for(;0<f-v;)y=rs(y),f--;for(;0<v-f;)m=rs(m),v--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=rs(y),m=rs(m)}y=null}else y=null;p!==null&&bv(h,d,p,y,!1),_!==null&&w!==null&&bv(h,w,_,y,!0)}}e:{if(d=u?ps(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=D2;else if(xv(d))if(Sw)T=$2;else{T=M2;var S=L2}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=V2);if(T&&(T=T(t,u))){Tw(h,T,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Cf(d,"number",d.value)}switch(S=u?ps(u):window,t){case"focusin":(xv(S)||S.contentEditable==="true")&&(ds=S,$f=u,Jo=null);break;case"focusout":Jo=$f=ds=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,kv(h,n,c);break;case"selectionchange":if(U2)break;case"keydown":case"keyup":kv(h,n,c)}var N;if(Im)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else hs?Iw(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ew&&n.locale!=="ko"&&(hs||R!=="onCompositionStart"?R==="onCompositionEnd"&&hs&&(N=ww()):(Lr=c,_m="value"in Lr?Lr.value:Lr.textContent,hs=!0)),S=Du(u,R),0<S.length&&(R=new _v(R,t,null,n,c),h.push({event:R,listeners:S}),N?R.data=N:(N=xw(n),N!==null&&(R.data=N)))),(N=P2?R2(t,n):b2(t,n))&&(u=Du(u,"onBeforeInput"),0<u.length&&(c=new _v("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Lw(h,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Du(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ha(t,n),s!=null&&r.unshift(va(t,s,i)),s=ha(t,e),s!=null&&r.push(va(t,s,i))),t=t.return}return r}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ha(n,s),l!=null&&o.unshift(va(n,l,a))):i||(l=ha(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var q2=/\r\n?/g,H2=/\u0000|\uFFFD/g;function Nv(t){return(typeof t=="string"?t:""+t).replace(q2,`
`).replace(H2,"")}function Ol(t,e,n){if(e=Nv(e),Nv(t)!==e&&n)throw Error(P(425))}function Lu(){}var Ff=null,Uf=null;function zf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bf=typeof setTimeout=="function"?setTimeout:void 0,G2=typeof clearTimeout=="function"?clearTimeout:void 0,Ov=typeof Promise=="function"?Promise:void 0,K2=typeof queueMicrotask=="function"?queueMicrotask:typeof Ov<"u"?function(t){return Ov.resolve(null).then(t).catch(Q2)}:Bf;function Q2(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),pa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pa(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),On="__reactFiber$"+uo,_a="__reactProps$"+uo,cr="__reactContainer$"+uo,Wf="__reactEvents$"+uo,Y2="__reactListeners$"+uo,X2="__reactHandles$"+uo;function Ei(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dv(t);t!==null;){if(n=t[On])return n;t=Dv(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[On]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Uc(t){return t[_a]||null}var qf=[],ms=-1;function hi(t){return{current:t}}function Pe(t){0>ms||(t.current=qf[ms],qf[ms]=null,ms--)}function Ce(t,e){ms++,qf[ms]=t.current,t.current=e}var ri={},Ct=hi(ri),jt=hi(!1),Oi=ri;function Us(t,e){var n=t.type.contextTypes;if(!n)return ri;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Mu(){Pe(jt),Pe(Ct)}function Lv(t,e,n){if(Ct.current!==ri)throw Error(P(168));Ce(Ct,e),Ce(jt,n)}function Vw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,LC(t)||"Unknown",i));return Me({},n,r)}function Vu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ri,Oi=Ct.current,Ce(Ct,t),Ce(jt,jt.current),!0}function Mv(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=Vw(t,e,Oi),r.__reactInternalMemoizedMergedChildContext=t,Pe(jt),Pe(Ct),Ce(Ct,t)):Pe(jt),Ce(jt,n)}var Zn=null,zc=!1,Ad=!1;function $w(t){Zn===null?Zn=[t]:Zn.push(t)}function J2(t){zc=!0,$w(t)}function di(){if(!Ad&&Zn!==null){Ad=!0;var t=0,e=we;try{var n=Zn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zn=null,zc=!1}catch(i){throw Zn!==null&&(Zn=Zn.slice(t+1)),uw(mm,di),i}finally{we=e,Ad=!1}}return null}var gs=[],ys=0,$u=null,ju=0,Zt=[],en=0,Di=null,tr=1,nr="";function yi(t,e){gs[ys++]=ju,gs[ys++]=$u,$u=t,ju=e}function jw(t,e,n){Zt[en++]=tr,Zt[en++]=nr,Zt[en++]=Di,Di=t;var r=tr;t=nr;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,tr=1<<32-wn(e)+i|n<<i|r,nr=s+t}else tr=1<<s|n<<i|r,nr=t}function Tm(t){t.return!==null&&(yi(t,1),jw(t,1,0))}function Sm(t){for(;t===$u;)$u=gs[--ys],gs[ys]=null,ju=gs[--ys],gs[ys]=null;for(;t===Di;)Di=Zt[--en],Zt[en]=null,nr=Zt[--en],Zt[en]=null,tr=Zt[--en],Zt[en]=null}var Ht=null,Wt=null,Oe=!1,yn=null;function Fw(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Wt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Di!==null?{id:tr,overflow:nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Wt=null,!0):!1;default:return!1}}function Hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gf(t){if(Oe){var e=Wt;if(e){var n=e;if(!Vv(t,e)){if(Hf(t))throw Error(P(418));e=Br(n.nextSibling);var r=Ht;e&&Vv(t,e)?Fw(r,n):(t.flags=t.flags&-4097|2,Oe=!1,Ht=t)}}else{if(Hf(t))throw Error(P(418));t.flags=t.flags&-4097|2,Oe=!1,Ht=t}}}function $v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Dl(t){if(t!==Ht)return!1;if(!Oe)return $v(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zf(t.type,t.memoizedProps)),e&&(e=Wt)){if(Hf(t))throw Uw(),Error(P(418));for(;e;)Fw(t,e),e=Br(e.nextSibling)}if($v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Ht?Br(t.stateNode.nextSibling):null;return!0}function Uw(){for(var t=Wt;t;)t=Br(t.nextSibling)}function zs(){Wt=Ht=null,Oe=!1}function Cm(t){yn===null?yn=[t]:yn.push(t)}var Z2=wr.ReactCurrentBatchConfig;function fn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fu=hi(null),Uu=null,vs=null,Am=null;function km(){Am=vs=Uu=null}function Pm(t){var e=Fu.current;Pe(Fu),t._currentValue=e}function Kf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Uu=t,Am=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Am!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Uu===null)throw Error(P(308));vs=t,Uu.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Ii=null;function Rm(t){Ii===null?Ii=[t]:Ii.push(t)}function zw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rm(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,Rm(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gm(t,n)}}function jv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zu(t,e,n,r){var i=t.updateQueue;Ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=Me({},h,d);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mi|=o,t.lanes=o,t.memoizedState=h}}function Fv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Ww=new z1.Component().refs;function Qf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bc={isMounted:function(t){return(t=t._reactInternals)?Gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Hr(t),s=ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(En(e,t,i,r),cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),i=Hr(t),s=ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wr(t,s,i),e!==null&&(En(e,t,i,r),cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Hr(t),i=ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=Wr(t,i,r),e!==null&&(En(e,t,r,n),cu(e,t,r))}};function Uv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,r)||!ga(i,s):!0}function qw(t,e,n){var r=!1,i=ri,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Ft(e)?Oi:Ct.current,r=e.contextTypes,s=(r=r!=null)?Us(t,i):ri),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bc.enqueueReplaceState(e,e.state,null)}function Yf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ww,bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Ft(e)?Oi:Ct.current,i.context=Us(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bc.enqueueReplaceState(i,i.state,null),zu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Ww&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function Ll(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bv(t){var e=t._init;return e(t._payload)}function Hw(t){function e(m,f){if(t){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Gr(m,f),m.index=0,m.sibling=null,m}function s(m,f,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,v,E){return f===null||f.tag!==6?(f=Dd(v,m.mode,E),f.return=m,f):(f=i(f,v),f.return=m,f)}function l(m,f,v,E){var T=v.type;return T===cs?c(m,f,v.props.children,E,v.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cr&&Bv(T)===f.type)?(E=i(f,v.props),E.ref=ko(m,f,v),E.return=m,E):(E=gu(v.type,v.key,v.props,null,m.mode,E),E.ref=ko(m,f,v),E.return=m,E)}function u(m,f,v,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Ld(v,m.mode,E),f.return=m,f):(f=i(f,v.children||[]),f.return=m,f)}function c(m,f,v,E,T){return f===null||f.tag!==7?(f=Pi(v,m.mode,E,T),f.return=m,f):(f=i(f,v),f.return=m,f)}function h(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Dd(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Tl:return v=gu(f.type,f.key,f.props,null,m.mode,v),v.ref=ko(m,null,f),v.return=m,v;case us:return f=Ld(f,m.mode,v),f.return=m,f;case Cr:var E=f._init;return h(m,E(f._payload),v)}if(Lo(f)||xo(f))return f=Pi(f,m.mode,v,null),f.return=m,f;Ll(m,f)}return null}function d(m,f,v,E){var T=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(m,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Tl:return v.key===T?l(m,f,v,E):null;case us:return v.key===T?u(m,f,v,E):null;case Cr:return T=v._init,d(m,f,T(v._payload),E)}if(Lo(v)||xo(v))return T!==null?null:c(m,f,v,E,null);Ll(m,v)}return null}function p(m,f,v,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(v)||null,a(f,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Tl:return m=m.get(E.key===null?v:E.key)||null,l(f,m,E,T);case us:return m=m.get(E.key===null?v:E.key)||null,u(f,m,E,T);case Cr:var S=E._init;return p(m,f,v,S(E._payload),T)}if(Lo(E)||xo(E))return m=m.get(v)||null,c(f,m,E,T,null);Ll(f,E)}return null}function _(m,f,v,E){for(var T=null,S=null,N=f,R=f=0,H=null;N!==null&&R<v.length;R++){N.index>R?(H=N,N=null):H=N.sibling;var j=d(m,N,v[R],E);if(j===null){N===null&&(N=H);break}t&&N&&j.alternate===null&&e(m,N),f=s(j,f,R),S===null?T=j:S.sibling=j,S=j,N=H}if(R===v.length)return n(m,N),Oe&&yi(m,R),T;if(N===null){for(;R<v.length;R++)N=h(m,v[R],E),N!==null&&(f=s(N,f,R),S===null?T=N:S.sibling=N,S=N);return Oe&&yi(m,R),T}for(N=r(m,N);R<v.length;R++)H=p(N,m,R,v[R],E),H!==null&&(t&&H.alternate!==null&&N.delete(H.key===null?R:H.key),f=s(H,f,R),S===null?T=H:S.sibling=H,S=H);return t&&N.forEach(function(ce){return e(m,ce)}),Oe&&yi(m,R),T}function y(m,f,v,E){var T=xo(v);if(typeof T!="function")throw Error(P(150));if(v=T.call(v),v==null)throw Error(P(151));for(var S=T=null,N=f,R=f=0,H=null,j=v.next();N!==null&&!j.done;R++,j=v.next()){N.index>R?(H=N,N=null):H=N.sibling;var ce=d(m,N,j.value,E);if(ce===null){N===null&&(N=H);break}t&&N&&ce.alternate===null&&e(m,N),f=s(ce,f,R),S===null?T=ce:S.sibling=ce,S=ce,N=H}if(j.done)return n(m,N),Oe&&yi(m,R),T;if(N===null){for(;!j.done;R++,j=v.next())j=h(m,j.value,E),j!==null&&(f=s(j,f,R),S===null?T=j:S.sibling=j,S=j);return Oe&&yi(m,R),T}for(N=r(m,N);!j.done;R++,j=v.next())j=p(N,m,R,j.value,E),j!==null&&(t&&j.alternate!==null&&N.delete(j.key===null?R:j.key),f=s(j,f,R),S===null?T=j:S.sibling=j,S=j);return t&&N.forEach(function(Te){return e(m,Te)}),Oe&&yi(m,R),T}function w(m,f,v,E){if(typeof v=="object"&&v!==null&&v.type===cs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Tl:e:{for(var T=v.key,S=f;S!==null;){if(S.key===T){if(T=v.type,T===cs){if(S.tag===7){n(m,S.sibling),f=i(S,v.props.children),f.return=m,m=f;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cr&&Bv(T)===S.type){n(m,S.sibling),f=i(S,v.props),f.ref=ko(m,S,v),f.return=m,m=f;break e}n(m,S);break}else e(m,S);S=S.sibling}v.type===cs?(f=Pi(v.props.children,m.mode,E,v.key),f.return=m,m=f):(E=gu(v.type,v.key,v.props,null,m.mode,E),E.ref=ko(m,f,v),E.return=m,m=E)}return o(m);case us:e:{for(S=v.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=i(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Ld(v,m.mode,E),f.return=m,m=f}return o(m);case Cr:return S=v._init,w(m,f,S(v._payload),E)}if(Lo(v))return _(m,f,v,E);if(xo(v))return y(m,f,v,E);Ll(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,v),f.return=m,m=f):(n(m,f),f=Dd(v,m.mode,E),f.return=m,m=f),o(m)):n(m,f)}return w}var Bs=Hw(!0),Gw=Hw(!1),Ja={},$n=hi(Ja),wa=hi(Ja),Ea=hi(Ja);function xi(t){if(t===Ja)throw Error(P(174));return t}function Nm(t,e){switch(Ce(Ea,e),Ce(wa,t),Ce($n,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}Pe($n),Ce($n,e)}function Ws(){Pe($n),Pe(wa),Pe(Ea)}function Kw(t){xi(Ea.current);var e=xi($n.current),n=kf(e,t.type);e!==n&&(Ce(wa,t),Ce($n,n))}function Om(t){wa.current===t&&(Pe($n),Pe(wa))}var De=hi(0);function Bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Dm(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var hu=wr.ReactCurrentDispatcher,Pd=wr.ReactCurrentBatchConfig,Li=0,Le=null,Ye=null,et=null,Wu=!1,Zo=!1,Ia=0,eA=0;function ft(){throw Error(P(321))}function Lm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Mm(t,e,n,r,i,s){if(Li=s,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hu.current=t===null||t.memoizedState===null?iA:sA,t=n(r,i),Zo){s=0;do{if(Zo=!1,Ia=0,25<=s)throw Error(P(301));s+=1,et=Ye=null,e.updateQueue=null,hu.current=oA,t=n(r,i)}while(Zo)}if(hu.current=qu,e=Ye!==null&&Ye.next!==null,Li=0,et=Ye=Le=null,Wu=!1,e)throw Error(P(300));return t}function Vm(){var t=Ia!==0;return Ia=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Le.memoizedState=et=t:et=et.next=t,et}function an(){if(Ye===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=et===null?Le.memoizedState:et.next;if(e!==null)et=e,Ye=t;else{if(t===null)throw Error(P(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},et===null?Le.memoizedState=et=t:et=et.next=t}return et}function xa(t,e){return typeof e=="function"?e(t):e}function Rd(t){var e=an(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Li&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Le.lanes|=c,Mi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,In(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Le.lanes|=s,Mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bd(t){var e=an(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Qw(){}function Yw(t,e){var n=Le,r=an(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,Vt=!0),r=r.queue,$m(Zw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Ta(9,Jw.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(P(349));Li&30||Xw(n,e,i)}return i}function Xw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jw(t,e,n,r){e.value=n,e.getSnapshot=r,eE(e)&&tE(t)}function Zw(t,e,n){return n(function(){eE(e)&&tE(t)})}function eE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function tE(t){var e=hr(t,1);e!==null&&En(e,t,1,-1)}function Wv(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=rA.bind(null,Le,t),[e.memoizedState,t]}function Ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function nE(){return an().memoizedState}function du(t,e,n,r){var i=Rn();Le.flags|=t,i.memoizedState=Ta(1|e,n,void 0,r===void 0?null:r)}function Wc(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&Lm(r,o.deps)){i.memoizedState=Ta(e,n,s,r);return}}Le.flags|=t,i.memoizedState=Ta(1|e,n,s,r)}function qv(t,e){return du(8390656,8,t,e)}function $m(t,e){return Wc(2048,8,t,e)}function rE(t,e){return Wc(4,2,t,e)}function iE(t,e){return Wc(4,4,t,e)}function sE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function oE(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,sE.bind(null,e,t),n)}function jm(){}function aE(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lE(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uE(t,e,n){return Li&21?(In(n,e)||(n=dw(),Le.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function tA(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{we=n,Pd.transition=r}}function cE(){return an().memoizedState}function nA(t,e,n){var r=Hr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hE(t))dE(e,n);else if(n=zw(t,e,n,r),n!==null){var i=bt();En(n,t,r,i),fE(n,e,r)}}function rA(t,e,n){var r=Hr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hE(t))dE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,In(a,o)){var l=e.interleaved;l===null?(i.next=i,Rm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=zw(t,e,i,r),n!==null&&(i=bt(),En(n,t,r,i),fE(n,e,r))}}function hE(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function dE(t,e){Zo=Wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gm(t,n)}}var qu={readContext:on,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},iA={readContext:on,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:qv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,du(4194308,4,sE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return du(4194308,4,t,e)},useInsertionEffect:function(t,e){return du(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nA.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:Wv,useDebugValue:jm,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=Wv(!1),e=t[0];return t=tA.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,i=Rn();if(Oe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),tt===null)throw Error(P(349));Li&30||Xw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qv(Zw.bind(null,r,s,t),[t]),r.flags|=2048,Ta(9,Jw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rn(),e=tt.identifierPrefix;if(Oe){var n=nr,r=tr;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sA={readContext:on,useCallback:aE,useContext:on,useEffect:$m,useImperativeHandle:oE,useInsertionEffect:rE,useLayoutEffect:iE,useMemo:lE,useReducer:Rd,useRef:nE,useState:function(){return Rd(xa)},useDebugValue:jm,useDeferredValue:function(t){var e=an();return uE(e,Ye.memoizedState,t)},useTransition:function(){var t=Rd(xa)[0],e=an().memoizedState;return[t,e]},useMutableSource:Qw,useSyncExternalStore:Yw,useId:cE,unstable_isNewReconciler:!1},oA={readContext:on,useCallback:aE,useContext:on,useEffect:$m,useImperativeHandle:oE,useInsertionEffect:rE,useLayoutEffect:iE,useMemo:lE,useReducer:bd,useRef:nE,useState:function(){return bd(xa)},useDebugValue:jm,useDeferredValue:function(t){var e=an();return Ye===null?e.memoizedState=t:uE(e,Ye.memoizedState,t)},useTransition:function(){var t=bd(xa)[0],e=an().memoizedState;return[t,e]},useMutableSource:Qw,useSyncExternalStore:Yw,useId:cE,unstable_isNewReconciler:!1};function qs(t,e){try{var n="",r=e;do n+=DC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aA=typeof WeakMap=="function"?WeakMap:Map;function pE(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gu||(Gu=!0,ap=r),Xf(t,e)},n}function mE(t,e,n){n=ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xf(t,e),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=EA.bind(null,t,e,n),e.then(t,t))}function Gv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Wr(n,e,1))),n.lanes|=1),t)}var lA=wr.ReactCurrentOwner,Vt=!1;function Pt(t,e,n,r){e.child=t===null?Gw(e,null,n,r):Bs(e,t.child,n,r)}function Qv(t,e,n,r,i){n=n.render;var s=e.ref;return ks(e,i),r=Mm(t,e,n,r,s,i),n=Vm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Oe&&n&&Tm(e),e.flags|=1,Pt(t,e,r,i),e.child)}function Yv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gE(t,e,s,r,i)):(t=gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function gE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ga(s,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,dr(t,e,i)}return Jf(t,e,n,r,i)}function yE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ws,Bt),Bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(ws,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(ws,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ce(ws,Bt),Bt|=r;return Pt(t,e,i,n),e.child}function vE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jf(t,e,n,r,i){var s=Ft(n)?Oi:Ct.current;return s=Us(e,s),ks(e,i),n=Mm(t,e,n,r,s,i),r=Vm(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Oe&&r&&Tm(e),e.flags|=1,Pt(t,e,n,i),e.child)}function Xv(t,e,n,r,i){if(Ft(n)){var s=!0;Vu(e)}else s=!1;if(ks(e,i),e.stateNode===null)fu(t,e),qw(e,n,r),Yf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=on(u):(u=Ft(n)?Oi:Ct.current,u=Us(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&zv(e,o,r,u),Ar=!1;var d=e.memoizedState;o.state=d,zu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||jt.current||Ar?(typeof c=="function"&&(Qf(e,n,c,r),l=e.memoizedState),(a=Ar||Uv(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Bw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:fn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Ft(n)?Oi:Ct.current,l=Us(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&zv(e,o,r,l),Ar=!1,d=e.memoizedState,o.state=d,zu(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||jt.current||Ar?(typeof p=="function"&&(Qf(e,n,p,r),_=e.memoizedState),(u=Ar||Uv(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Zf(t,e,n,r,s,i)}function Zf(t,e,n,r,i,s){vE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mv(e,n,!1),dr(t,e,s);r=e.stateNode,lA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&Mv(e,n,!0),e.child}function _E(t){var e=t.stateNode;e.pendingContext?Lv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lv(t,e.context,!1),Nm(t,e.containerInfo)}function Jv(t,e,n,r,i){return zs(),Cm(i),e.flags|=256,Pt(t,e,n,r),e.child}var ep={dehydrated:null,treeContext:null,retryLane:0};function tp(t){return{baseLanes:t,cachePool:null,transitions:null}}function wE(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(De,i&1),t===null)return Gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,r,0,null),t=Pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tp(n),e.memoizedState=ep,t):Fm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=Pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ep,r}return s=t.child,t=s.sibling,r=Gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fm(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ml(t,e,n,r){return r!==null&&Cm(r),Bs(e,t.child,null,n),t=Fm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function uA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nd(Error(P(422))),Ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gc({mode:"visible",children:r.children},i,0,null),s=Pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=tp(o),e.memoizedState=ep,s);if(!(e.mode&1))return Ml(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=Nd(s,r,void 0),Ml(t,e,o,r)}if(a=(o&t.childLanes)!==0,Vt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),En(r,t,i,-1))}return Hm(),r=Nd(Error(P(421))),Ml(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=IA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Wt=Br(i.nextSibling),Ht=e,Oe=!0,yn=null,t!==null&&(Zt[en++]=tr,Zt[en++]=nr,Zt[en++]=Di,tr=t.id,nr=t.overflow,Di=e),e=Fm(e,r.children),e.flags|=4096,e)}function Zv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kf(t.return,e,n)}function Od(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function EE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zv(t,n,e);else if(t.tag===19)Zv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(De,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Od(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Od(e,!0,n,null,s);break;case"together":Od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cA(t,e,n){switch(e.tag){case 3:_E(e),zs();break;case 5:Kw(e);break;case 1:Ft(e.type)&&Vu(e);break;case 4:Nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(Fu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?wE(t,e,n):(Ce(De,De.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Ce(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return EE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,yE(t,e,n)}return dr(t,e,n)}var IE,np,xE,TE;IE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};np=function(){};xE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xi($n.current);var s=null;switch(n){case"input":i=Tf(t,i),r=Tf(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Af(t,i),r=Af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lu)}Pf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};TE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Po(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hA(t,e,n){var r=e.pendingProps;switch(Sm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Ft(e.type)&&Mu(),pt(e),null;case 3:return r=e.stateNode,Ws(),Pe(jt),Pe(Ct),Dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(cp(yn),yn=null))),np(t,e),pt(e),null;case 5:Om(e);var i=xi(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)xE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return pt(e),null}if(t=xi($n.current),Dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[_a]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<Vo.length;i++)Ae(Vo[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":lv(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":cv(r,s),Ae("invalid",r)}Pf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ol(r.textContent,a,t),i=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Sl(r),uv(r,s,!0);break;case"textarea":Sl(r),hv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Lu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[_a]=r,IE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rf(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vo.length;i++)Ae(Vo[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":lv(t,r),i=Tf(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":cv(t,r),i=Af(t,r),Ae("invalid",t);break;default:i=r}Pf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ew(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&J1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ae("scroll",t):l!=null&&cm(t,s,l,o))}switch(n){case"input":Sl(t),uv(t,r,!1);break;case"textarea":Sl(t),hv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ni(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)TE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=xi(Ea.current),xi($n.current),Dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return pt(e),null;case 13:if(Pe(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Wt!==null&&e.mode&1&&!(e.flags&128))Uw(),zs(),e.flags|=98560,s=!1;else if(s=Dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[On]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),s=!1}else yn!==null&&(cp(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Xe===0&&(Xe=3):Hm())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Ws(),np(t,e),t===null&&ya(e.stateNode.containerInfo),pt(e),null;case 10:return Pm(e.type._context),pt(e),null;case 17:return Ft(e.type)&&Mu(),pt(e),null;case 19:if(Pe(De),s=e.memoizedState,s===null)return pt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Po(s,!1);else{if(Xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bu(t),o!==null){for(e.flags|=128,Po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Hs&&(e.flags|=128,r=!0,Po(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Oe)return pt(e),null}else 2*ze()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,r=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=De.current,Ce(De,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return qm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function dA(t,e){switch(Sm(e),e.tag){case 1:return Ft(e.type)&&Mu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),Pe(jt),Pe(Ct),Dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Om(e),null;case 13:if(Pe(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(De),null;case 4:return Ws(),null;case 10:return Pm(e.type._context),null;case 22:case 23:return qm(),null;case 24:return null;default:return null}}var Vl=!1,vt=!1,fA=typeof WeakSet=="function"?WeakSet:Set,B=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function rp(t,e,n){try{n()}catch(r){je(t,e,r)}}var e0=!1;function pA(t,e){if(Ff=Nu,t=kw(),xm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},Nu=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,w=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:fn(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){je(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return _=e0,e0=!1,_}function ea(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rp(e,n,s)}i=i.next}while(i!==r)}}function qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ip(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function SE(t){var e=t.alternate;e!==null&&(t.alternate=null,SE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[_a],delete e[Wf],delete e[Y2],delete e[X2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function CE(t){return t.tag===5||t.tag===3||t.tag===4}function t0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||CE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lu));else if(r!==4&&(t=t.child,t!==null))for(sp(t,e,n),t=t.sibling;t!==null;)sp(t,e,n),t=t.sibling}function op(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(op(t,e,n),t=t.sibling;t!==null;)op(t,e,n),t=t.sibling}var at=null,gn=!1;function Tr(t,e,n){for(n=n.child;n!==null;)AE(t,e,n),n=n.sibling}function AE(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:vt||_s(n,e);case 6:var r=at,i=gn;at=null,Tr(t,e,n),at=r,gn=i,at!==null&&(gn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(gn?(t=at,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),pa(t)):Cd(at,n.stateNode));break;case 4:r=at,i=gn,at=n.stateNode.containerInfo,gn=!0,Tr(t,e,n),at=r,gn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rp(n,e,o),i=i.next}while(i!==r)}Tr(t,e,n);break;case 1:if(!vt&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,e,a)}Tr(t,e,n);break;case 21:Tr(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Tr(t,e,n),vt=r):Tr(t,e,n);break;default:Tr(t,e,n)}}function n0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fA),e.forEach(function(r){var i=xA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,gn=!1;break e;case 3:at=a.stateNode.containerInfo,gn=!0;break e;case 4:at=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(at===null)throw Error(P(160));AE(s,o,i),at=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kE(e,t),e=e.sibling}function kE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),An(t),r&4){try{ea(3,t,t.return),qc(3,t)}catch(y){je(t,t.return,y)}try{ea(5,t,t.return)}catch(y){je(t,t.return,y)}}break;case 1:dn(e,t),An(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(dn(e,t),An(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{ca(i,"")}catch(y){je(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Q1(i,s),Rf(a,o);var u=Rf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ew(i,h):c==="dangerouslySetInnerHTML"?J1(i,h):c==="children"?ca(i,h):cm(i,c,h,u)}switch(a){case"input":Sf(i,s);break;case"textarea":Y1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ts(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[_a]=s}catch(y){je(t,t.return,y)}}break;case 6:if(dn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){je(t,t.return,y)}}break;case 3:if(dn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(y){je(t,t.return,y)}break;case 4:dn(e,t),An(t);break;case 13:dn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bm=ze())),r&4&&n0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||c,dn(e,t),vt=u):dn(e,t),An(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(B=t,c=t.child;c!==null;){for(h=B=c;B!==null;){switch(d=B,p=d.child,d.tag){case 0:case 11:case 14:case 15:ea(4,d,d.return);break;case 1:_s(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){je(r,n,y)}}break;case 5:_s(d,d.return);break;case 22:if(d.memoizedState!==null){i0(h);continue}}p!==null?(p.return=d,B=p):i0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Z1("display",o))}catch(y){je(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){je(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:dn(e,t),An(t),r&4&&n0(t);break;case 21:break;default:dn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(CE(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ca(i,""),r.flags&=-33);var s=t0(t);op(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=t0(t);sp(t,a,o);break;default:throw Error(P(161))}}catch(l){je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mA(t,e,n){B=t,PE(t)}function PE(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Vl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=Vl;var u=vt;if(Vl=o,(vt=l)&&!u)for(B=i;B!==null;)o=B,l=o.child,o.tag===22&&o.memoizedState!==null?s0(i):l!==null?(l.return=o,B=l):s0(i);for(;s!==null;)B=s,PE(s),s=s.sibling;B=i,Vl=a,vt=u}r0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):r0(t)}}function r0(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:fn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}vt||e.flags&512&&ip(e)}catch(d){je(e,e.return,d)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function i0(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function s0(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qc(4,e)}catch(l){je(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){je(e,i,l)}}var s=e.return;try{ip(e)}catch(l){je(e,s,l)}break;case 5:var o=e.return;try{ip(e)}catch(l){je(e,o,l)}}}catch(l){je(e,e.return,l)}if(e===t){B=null;break}var a=e.sibling;if(a!==null){a.return=e.return,B=a;break}B=e.return}}var gA=Math.ceil,Hu=wr.ReactCurrentDispatcher,Um=wr.ReactCurrentOwner,rn=wr.ReactCurrentBatchConfig,fe=0,tt=null,Ge=null,ct=0,Bt=0,ws=hi(0),Xe=0,Sa=null,Mi=0,Hc=0,zm=0,ta=null,Lt=null,Bm=0,Hs=1/0,Jn=null,Gu=!1,ap=null,qr=null,$l=!1,Mr=null,Ku=0,na=0,lp=null,pu=-1,mu=0;function bt(){return fe&6?ze():pu!==-1?pu:pu=ze()}function Hr(t){return t.mode&1?fe&2&&ct!==0?ct&-ct:Z2.transition!==null?(mu===0&&(mu=dw()),mu):(t=we,t!==0||(t=window.event,t=t===void 0?16:_w(t.type)),t):1}function En(t,e,n,r){if(50<na)throw na=0,lp=null,Error(P(185));Qa(t,n,r),(!(fe&2)||t!==tt)&&(t===tt&&(!(fe&2)&&(Hc|=n),Xe===4&&Pr(t,ct)),Ut(t,r),n===1&&fe===0&&!(e.mode&1)&&(Hs=ze()+500,zc&&di()))}function Ut(t,e){var n=t.callbackNode;ZC(t,e);var r=bu(t,t===tt?ct:0);if(r===0)n!==null&&pv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pv(n),e===1)t.tag===0?J2(o0.bind(null,t)):$w(o0.bind(null,t)),K2(function(){!(fe&6)&&di()}),n=null;else{switch(fw(r)){case 1:n=mm;break;case 4:n=cw;break;case 16:n=Ru;break;case 536870912:n=hw;break;default:n=Ru}n=VE(n,RE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function RE(t,e){if(pu=-1,mu=0,fe&6)throw Error(P(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var r=bu(t,t===tt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Qu(t,r);else{e=r;var i=fe;fe|=2;var s=NE();(tt!==t||ct!==e)&&(Jn=null,Hs=ze()+500,ki(t,e));do try{_A();break}catch(a){bE(t,a)}while(1);km(),Hu.current=s,fe=i,Ge!==null?e=0:(tt=null,ct=0,e=Xe)}if(e!==0){if(e===2&&(i=Lf(t),i!==0&&(r=i,e=up(t,i))),e===1)throw n=Sa,ki(t,0),Pr(t,r),Ut(t,ze()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!yA(i)&&(e=Qu(t,r),e===2&&(s=Lf(t),s!==0&&(r=s,e=up(t,s))),e===1))throw n=Sa,ki(t,0),Pr(t,r),Ut(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:vi(t,Lt,Jn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=Bm+500-ze(),10<e)){if(bu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bf(vi.bind(null,t,Lt,Jn),e);break}vi(t,Lt,Jn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gA(r/1960))-r,10<r){t.timeoutHandle=Bf(vi.bind(null,t,Lt,Jn),r);break}vi(t,Lt,Jn);break;case 5:vi(t,Lt,Jn);break;default:throw Error(P(329))}}}return Ut(t,ze()),t.callbackNode===n?RE.bind(null,t):null}function up(t,e){var n=ta;return t.current.memoizedState.isDehydrated&&(ki(t,e).flags|=256),t=Qu(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&cp(e)),t}function cp(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function yA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~zm,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function o0(t){if(fe&6)throw Error(P(327));Ps();var e=bu(t,0);if(!(e&1))return Ut(t,ze()),null;var n=Qu(t,e);if(t.tag!==0&&n===2){var r=Lf(t);r!==0&&(e=r,n=up(t,r))}if(n===1)throw n=Sa,ki(t,0),Pr(t,e),Ut(t,ze()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vi(t,Lt,Jn),Ut(t,ze()),null}function Wm(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(Hs=ze()+500,zc&&di())}}function Vi(t){Mr!==null&&Mr.tag===0&&!(fe&6)&&Ps();var e=fe;fe|=1;var n=rn.transition,r=we;try{if(rn.transition=null,we=1,t)return t()}finally{we=r,rn.transition=n,fe=e,!(fe&6)&&di()}}function qm(){Bt=ws.current,Pe(ws)}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G2(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Sm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mu();break;case 3:Ws(),Pe(jt),Pe(Ct),Dm();break;case 5:Om(r);break;case 4:Ws();break;case 13:Pe(De);break;case 19:Pe(De);break;case 10:Pm(r.type._context);break;case 22:case 23:qm()}n=n.return}if(tt=t,Ge=t=Gr(t.current,null),ct=Bt=e,Xe=0,Sa=null,zm=Hc=Mi=0,Lt=ta=null,Ii!==null){for(e=0;e<Ii.length;e++)if(n=Ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ii=null}return t}function bE(t,e){do{var n=Ge;try{if(km(),hu.current=qu,Wu){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(Li=0,et=Ye=Le=null,Zo=!1,Ia=0,Um.current=null,n===null||n.return===null){Xe=1,Sa=e,Ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Gv(o);if(p!==null){p.flags&=-257,Kv(p,o,a,s,e),p.mode&1&&Hv(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Hv(s,u,e),Hm();break e}l=Error(P(426))}}else if(Oe&&a.mode&1){var w=Gv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Kv(w,o,a,s,e),Cm(qs(l,a));break e}}s=l=qs(l,a),Xe!==4&&(Xe=2),ta===null?ta=[s]:ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=pE(s,l,e);jv(s,m);break e;case 1:a=l;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qr===null||!qr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=mE(s,a,e);jv(s,E);break e}}s=s.return}while(s!==null)}DE(n)}catch(T){e=T,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function NE(){var t=Hu.current;return Hu.current=qu,t===null?qu:t}function Hm(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(Mi&268435455)&&!(Hc&268435455)||Pr(tt,ct)}function Qu(t,e){var n=fe;fe|=2;var r=NE();(tt!==t||ct!==e)&&(Jn=null,ki(t,e));do try{vA();break}catch(i){bE(t,i)}while(1);if(km(),fe=n,Hu.current=r,Ge!==null)throw Error(P(261));return tt=null,ct=0,Xe}function vA(){for(;Ge!==null;)OE(Ge)}function _A(){for(;Ge!==null&&!WC();)OE(Ge)}function OE(t){var e=ME(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?DE(t):Ge=e,Um.current=null}function DE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dA(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xe=6,Ge=null;return}}else if(n=hA(n,e,Bt),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Xe===0&&(Xe=5)}function vi(t,e,n){var r=we,i=rn.transition;try{rn.transition=null,we=1,wA(t,e,n,r)}finally{rn.transition=i,we=r}return null}function wA(t,e,n,r){do Ps();while(Mr!==null);if(fe&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(e2(t,s),t===tt&&(Ge=tt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$l||($l=!0,VE(Ru,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=we;we=1;var a=fe;fe|=4,Um.current=null,pA(t,n),kE(n,t),F2(Uf),Nu=!!Ff,Uf=Ff=null,t.current=n,mA(n),qC(),fe=a,we=o,rn.transition=s}else t.current=n;if($l&&($l=!1,Mr=t,Ku=i),s=t.pendingLanes,s===0&&(qr=null),KC(n.stateNode),Ut(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gu)throw Gu=!1,t=ap,ap=null,t;return Ku&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===lp?na++:(na=0,lp=t):na=0,di(),null}function Ps(){if(Mr!==null){var t=fw(Ku),e=rn.transition,n=we;try{if(rn.transition=null,we=16>t?16:t,Mr===null)var r=!1;else{if(t=Mr,Mr=null,Ku=0,fe&6)throw Error(P(331));var i=fe;for(fe|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(B=u;B!==null;){var c=B;switch(c.tag){case 0:case 11:case 15:ea(8,c,s)}var h=c.child;if(h!==null)h.return=c,B=h;else for(;B!==null;){c=B;var d=c.sibling,p=c.return;if(SE(c),c===u){B=null;break}if(d!==null){d.return=p,B=d;break}B=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ea(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,B=m;break e}B=s.return}}var f=t.current;for(B=f;B!==null;){o=B;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,B=v;else e:for(o=f;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qc(9,a)}}catch(T){je(a,a.return,T)}if(a===o){B=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,B=E;break e}B=a.return}}if(fe=i,di(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(Vc,t)}catch{}r=!0}return r}finally{we=n,rn.transition=e}}return!1}function a0(t,e,n){e=qs(n,e),e=pE(t,e,1),t=Wr(t,e,1),e=bt(),t!==null&&(Qa(t,1,e),Ut(t,e))}function je(t,e,n){if(t.tag===3)a0(t,t,n);else for(;e!==null;){if(e.tag===3){a0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){t=qs(n,t),t=mE(e,t,1),e=Wr(e,t,1),t=bt(),e!==null&&(Qa(e,1,t),Ut(e,t));break}}e=e.return}}function EA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ct&n)===n&&(Xe===4||Xe===3&&(ct&130023424)===ct&&500>ze()-Bm?ki(t,0):zm|=n),Ut(t,e)}function LE(t,e){e===0&&(t.mode&1?(e=kl,kl<<=1,!(kl&130023424)&&(kl=4194304)):e=1);var n=bt();t=hr(t,e),t!==null&&(Qa(t,e,n),Ut(t,n))}function IA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),LE(t,n)}function xA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),LE(t,n)}var ME;ME=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||jt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,cA(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,Oe&&e.flags&1048576&&jw(e,ju,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fu(t,e),t=e.pendingProps;var i=Us(e,Ct.current);ks(e,n),i=Mm(null,e,r,t,i,n);var s=Vm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(s=!0,Vu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bm(e),i.updater=Bc,e.stateNode=i,i._reactInternals=e,Yf(e,r,t,n),e=Zf(null,e,r,!0,s,n)):(e.tag=0,Oe&&s&&Tm(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SA(r),t=fn(r,t),i){case 0:e=Jf(null,e,r,t,n);break e;case 1:e=Xv(null,e,r,t,n);break e;case 11:e=Qv(null,e,r,t,n);break e;case 14:e=Yv(null,e,r,fn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Jf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Xv(t,e,r,i,n);case 3:e:{if(_E(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Bw(t,e),zu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qs(Error(P(423)),e),e=Jv(t,e,r,n,i);break e}else if(r!==i){i=qs(Error(P(424)),e),e=Jv(t,e,r,n,i);break e}else for(Wt=Br(e.stateNode.containerInfo.firstChild),Ht=e,Oe=!0,yn=null,n=Gw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),r===i){e=dr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return Kw(e),t===null&&Gf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zf(r,i)?o=null:s!==null&&zf(r,s)&&(e.flags|=32),vE(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Gf(e),null;case 13:return wE(t,e,n);case 4:return Nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),Qv(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ce(Fu,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!jt.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ar(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Kf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Kf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ks(e,n),i=on(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=fn(r,e.pendingProps),i=fn(r.type,i),Yv(t,e,r,i,n);case 15:return gE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:fn(r,i),fu(t,e),e.tag=1,Ft(r)?(t=!0,Vu(e)):t=!1,ks(e,n),qw(e,r,i),Yf(e,r,i,n),Zf(null,e,r,!0,t,n);case 19:return EE(t,e,n);case 22:return yE(t,e,n)}throw Error(P(156,e.tag))};function VE(t,e){return uw(t,e)}function TA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new TA(t,e,n,r)}function Gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SA(t){if(typeof t=="function")return Gm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dm)return 11;if(t===fm)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Pi(n.children,i,s,e);case hm:o=8,i|=8;break;case wf:return t=nn(12,n,e,i|2),t.elementType=wf,t.lanes=s,t;case Ef:return t=nn(13,n,e,i),t.elementType=Ef,t.lanes=s,t;case If:return t=nn(19,n,e,i),t.elementType=If,t.lanes=s,t;case H1:return Gc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W1:o=10;break e;case q1:o=9;break e;case dm:o=11;break e;case fm:o=14;break e;case Cr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Pi(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Gc(t,e,n,r){return t=nn(22,t,r,e),t.elementType=H1,t.lanes=n,t.stateNode={isHidden:!1},t}function Dd(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=md(0),this.expirationTimes=md(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=md(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Km(t,e,n,r,i,s,o,a,l){return t=new CA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bm(s),t}function AA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $E(t){if(!t)return ri;t=t._reactInternals;e:{if(Gi(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Ft(n))return Vw(t,n,e)}return e}function jE(t,e,n,r,i,s,o,a,l){return t=Km(n,r,!0,t,i,s,o,a,l),t.context=$E(null),n=t.current,r=bt(),i=Hr(n),s=ar(r,i),s.callback=e??null,Wr(n,s,i),t.current.lanes=i,Qa(t,i,r),Ut(t,r),t}function Kc(t,e,n,r){var i=e.current,s=bt(),o=Hr(i);return n=$E(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wr(i,e,o),t!==null&&(En(t,i,o,s),cu(t,i,o)),o}function Yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qm(t,e){l0(t,e),(t=t.alternate)&&l0(t,e)}function kA(){return null}var FE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ym(t){this._internalRoot=t}Qc.prototype.render=Ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Kc(t,e,null,null)};Qc.prototype.unmount=Ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){Kc(null,t,null,null)}),e[cr]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=gw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<kr.length&&e!==0&&e<kr[n].priority;n++);kr.splice(n,0,t),n===0&&vw(t)}};function Xm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u0(){}function PA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Yu(o);s.call(u)}}var o=jE(e,r,t,0,null,!1,!1,"",u0);return t._reactRootContainer=o,t[cr]=o.current,ya(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Yu(l);a.call(u)}}var l=Km(t,0,!1,null,null,!1,!1,"",u0);return t._reactRootContainer=l,t[cr]=l.current,ya(t.nodeType===8?t.parentNode:t),Vi(function(){Kc(e,l,n,r)}),l}function Xc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Yu(o);a.call(l)}}Kc(e,o,t,i)}else o=PA(n,e,t,i,r);return Yu(o)}pw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(gm(e,n|1),Ut(e,ze()),!(fe&6)&&(Hs=ze()+500,di()))}break;case 13:Vi(function(){var r=hr(t,1);if(r!==null){var i=bt();En(r,t,1,i)}}),Qm(t,1)}};ym=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=bt();En(e,t,134217728,n)}Qm(t,134217728)}};mw=function(t){if(t.tag===13){var e=Hr(t),n=hr(t,e);if(n!==null){var r=bt();En(n,t,e,r)}Qm(t,e)}};gw=function(){return we};yw=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};Nf=function(t,e,n){switch(e){case"input":if(Sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uc(r);if(!i)throw Error(P(90));K1(r),Sf(r,i)}}}break;case"textarea":Y1(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};rw=Wm;iw=Vi;var RA={usingClientEntryPoint:!1,Events:[Xa,ps,Uc,tw,nw,Wm]},Ro={findFiberByHostInstance:Ei,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bA={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=aw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||kA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Vc=jl.inject(bA),Vn=jl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RA;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xm(e))throw Error(P(200));return AA(t,e,null,n)};Yt.createRoot=function(t,e){if(!Xm(t))throw Error(P(299));var n=!1,r="",i=FE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Km(t,1,!1,null,null,n,!1,r,i),t[cr]=e.current,ya(t.nodeType===8?t.parentNode:t),new Ym(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=aw(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Vi(t)};Yt.hydrate=function(t,e,n){if(!Yc(e))throw Error(P(200));return Xc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Xm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=FE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jE(e,null,t,1,n??null,i,!1,s,o),t[cr]=e.current,ya(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qc(e)};Yt.render=function(t,e,n){if(!Yc(e))throw Error(P(200));return Xc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(P(40));return t._reactRootContainer?(Vi(function(){Xc(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Wm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Xc(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function UE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UE)}catch(t){console.error(t)}}UE(),j1.exports=Yt;var zE=j1.exports,c0=zE;vf.createRoot=c0.createRoot,vf.hydrateRoot=c0.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ca.apply(this,arguments)}var Vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vr||(Vr={}));const h0="popstate";function NA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return hp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xu(i)}return DA(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OA(){return Math.random().toString(36).substr(2,8)}function d0(t,e){return{usr:t.state,key:t.key,idx:e}}function hp(t,e,n,r){return n===void 0&&(n=null),Ca({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?co(e):e,{state:n,key:e&&e.key||r||OA()})}function Xu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function co(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ca({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Vr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:m})}function d(w,m){a=Vr.Push;let f=hp(y.location,w,m);n&&n(f,w),u=c()+1;let v=d0(f,u),E=y.createHref(f);try{o.pushState(v,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function p(w,m){a=Vr.Replace;let f=hp(y.location,w,m);n&&n(f,w),u=c();let v=d0(f,u),E=y.createHref(f);o.replaceState(v,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function _(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Xu(w);return Be(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(h0,h),l=w,()=>{i.removeEventListener(h0,h),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let m=_(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(w){return o.go(w)}};return y}var f0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(f0||(f0={}));function LA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?co(e):e,i=Zm(r.pathname||"/",n);if(i==null)return null;let s=BE(t);MA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=qA(s[a],KA(i));return o}function BE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Kr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),BE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:BA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of WE(s.path))i(s,o,l)}),e}function WE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function MA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:WA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VA=/^:\w+$/,$A=3,jA=2,FA=1,UA=10,zA=-2,p0=t=>t==="*";function BA(t,e){let n=t.split("/"),r=n.length;return n.some(p0)&&(r+=zA),e&&(r+=jA),n.filter(i=>!p0(i)).reduce((i,s)=>i+(VA.test(s)?$A:s===""?FA:UA),r)}function WA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=HA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Kr([i,c.pathname]),pathnameBase:JA(Kr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Kr([i,c.pathnameBase]))}return s}function HA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=GA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=QA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function GA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function KA(t){try{return decodeURI(t)}catch(e){return Jm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function QA(t,e){try{return decodeURIComponent(t)}catch(n){return Jm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function YA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?co(t):t;return{pathname:n?n.startsWith("/")?n:XA(n,e):e,search:ZA(r),hash:ek(i)}}function XA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Md(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=co(t):(i=Ca({},t),Be(!i.pathname||!i.pathname.includes("?"),Md("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Md("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Md("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=YA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Kr=t=>t.join("/").replace(/\/\/+/g,"/"),JA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ZA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ek=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function tk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const qE=["post","put","patch","delete"];new Set(qE);const nk=["get",...qE];new Set(nk);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ju(){return Ju=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ju.apply(this,arguments)}const ng=I.createContext(null),HE=I.createContext(null),Ki=I.createContext(null),Jc=I.createContext(null),Er=I.createContext({outlet:null,matches:[],isDataRoute:!1}),GE=I.createContext(null);function rk(t,e){let{relative:n}=e===void 0?{}:e;ho()||Be(!1);let{basename:r,navigator:i}=I.useContext(Ki),{hash:s,pathname:o,search:a}=rg(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ho(){return I.useContext(Jc)!=null}function Hn(){return ho()||Be(!1),I.useContext(Jc).location}function KE(t){I.useContext(Ki).static||I.useLayoutEffect(t)}function Ir(){let{isDataRoute:t}=I.useContext(Er);return t?vk():ik()}function ik(){ho()||Be(!1);let t=I.useContext(ng),{basename:e,navigator:n}=I.useContext(Ki),{matches:r}=I.useContext(Er),{pathname:i}=Hn(),s=JSON.stringify(eg(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return KE(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=tg(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Kr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const sk=I.createContext(null);function ok(t){let e=I.useContext(Er).outlet;return e&&I.createElement(sk.Provider,{value:t},e)}function rg(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(Er),{pathname:i}=Hn(),s=JSON.stringify(eg(r).map(o=>o.pathnameBase));return I.useMemo(()=>tg(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function ak(t,e){return lk(t,e)}function lk(t,e,n){ho()||Be(!1);let{navigator:r}=I.useContext(Ki),{matches:i}=I.useContext(Er),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Hn(),u;if(e){var c;let y=typeof e=="string"?co(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Be(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=LA(t,{pathname:d}),_=fk(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Kr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Kr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&_?I.createElement(Jc.Provider,{value:{location:Ju({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Vr.Pop}},_):_}function uk(){let t=yk(),e=tk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const ck=I.createElement(uk,null);class hk extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(Er.Provider,{value:this.props.routeContext},I.createElement(GE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dk(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(ng);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Er.Provider,{value:e},r)}function fk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Be(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||ck);let d=e.concat(s.slice(0,u+1)),p=()=>{let _;return c?_=h:l.route.Component?_=I.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,I.createElement(dk,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(hk,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var QE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(QE||{}),Zu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zu||{});function pk(t){let e=I.useContext(ng);return e||Be(!1),e}function mk(t){let e=I.useContext(HE);return e||Be(!1),e}function gk(t){let e=I.useContext(Er);return e||Be(!1),e}function YE(t){let e=gk(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function yk(){var t;let e=I.useContext(GE),n=mk(Zu.UseRouteError),r=YE(Zu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function vk(){let{router:t}=pk(QE.UseNavigateStable),e=YE(Zu.UseNavigateStable),n=I.useRef(!1);return KE(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ju({fromRouteId:e},s)))},[t,e])}function _k(t){let{to:e,replace:n,state:r,relative:i}=t;ho()||Be(!1);let{matches:s}=I.useContext(Er),{pathname:o}=Hn(),a=Ir(),l=tg(e,eg(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return I.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function wk(t){return ok(t.context)}function Xn(t){Be(!1)}function Ek(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vr.Pop,navigator:s,static:o=!1}=t;ho()&&Be(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=co(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,_=I.useMemo(()=>{let y=Zm(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return _==null?null:I.createElement(Ki.Provider,{value:l},I.createElement(Jc.Provider,{children:n,value:_}))}function Ik(t){let{children:e,location:n}=t;return ak(dp(e),n)}new Promise(()=>{});function dp(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,dp(r.props.children,s));return}r.type!==Xn&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ec.apply(this,arguments)}function XE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Tk(t,e){return t.button===0&&(!e||e==="_self")&&!xk(t)}const Sk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ck=["aria-current","caseSensitive","className","end","style","to","children"],Ak="startTransition",m0=IC[Ak];function kk(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=NA({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&m0?m0(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(Ek,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const Pk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bk=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=XE(e,Sk),{basename:d}=I.useContext(Ki),p,_=!1;if(typeof u=="string"&&Rk.test(u)&&(p=u,Pk))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=Zm(v.pathname,d);v.origin===f.origin&&E!=null?u=E+v.search+v.hash:_=!0}catch{}let y=rk(u,{relative:i}),w=Ok(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(f){r&&r(f),f.defaultPrevented||w(f)}return I.createElement("a",ec({},h,{href:p||y,onClick:_||s?r:m,ref:n,target:l}))}),Nk=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=XE(e,Ck),h=rg(l,{relative:c.relative}),d=Hn(),p=I.useContext(HE),{navigator:_}=I.useContext(Ki),y=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,w=d.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(w=w.toLowerCase(),m=m?m.toLowerCase():null,y=y.toLowerCase());let f=w===y||!o&&w.startsWith(y)&&w.charAt(y.length)==="/",v=m!=null&&(m===y||!o&&m.startsWith(y)&&m.charAt(y.length)==="/"),E=f?r:void 0,T;typeof s=="function"?T=s({isActive:f,isPending:v}):T=[s,f?"active":null,v?"pending":null].filter(Boolean).join(" ");let S=typeof a=="function"?a({isActive:f,isPending:v}):a;return I.createElement(bk,ec({},c,{"aria-current":E,className:T,ref:n,style:S,to:l}),typeof u=="function"?u({isActive:f,isPending:v}):u)});var g0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(g0||(g0={}));var y0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(y0||(y0={}));function Ok(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ir(),l=Hn(),u=rg(t,{relative:o});return I.useCallback(c=>{if(Tk(c,n)){c.preventDefault();let h=r!==void 0?r:Xu(l)===Xu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var JE={exports:{}},ZE={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=I;function Dk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Lk=typeof Object.is=="function"?Object.is:Dk,Mk=Gs.useState,Vk=Gs.useEffect,$k=Gs.useLayoutEffect,jk=Gs.useDebugValue;function Fk(t,e){var n=e(),r=Mk({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return $k(function(){i.value=n,i.getSnapshot=e,Vd(i)&&s({inst:i})},[t,n,e]),Vk(function(){return Vd(i)&&s({inst:i}),t(function(){Vd(i)&&s({inst:i})})},[t]),jk(n),n}function Vd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Lk(t,n)}catch{return!0}}function Uk(t,e){return e()}var zk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Uk:Fk;ZE.useSyncExternalStore=Gs.useSyncExternalStore!==void 0?Gs.useSyncExternalStore:zk;JE.exports=ZE;var Bk=JE.exports,eI={exports:{}},tI={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zc=I,Wk=Bk;function qk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hk=typeof Object.is=="function"?Object.is:qk,Gk=Wk.useSyncExternalStore,Kk=Zc.useRef,Qk=Zc.useEffect,Yk=Zc.useMemo,Xk=Zc.useDebugValue;tI.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=Kk(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Yk(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var _=o.value;if(i(_,p))return h=_}return h=p}if(_=h,Hk(c,p))return _;var y=r(p);return i!==void 0&&i(_,y)?_:(c=p,h=y)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=Gk(t,s[0],s[1]);return Qk(function(){o.hasValue=!0,o.value=a},[a]),Xk(a),a};eI.exports=tI;var Jk=eI.exports;function Zk(t){t()}let nI=Zk;const eP=t=>nI=t,tP=()=>nI,v0=Symbol.for("react-redux-context"),_0=typeof globalThis<"u"?globalThis:{};function nP(){var t;if(!I.createContext)return{};const e=(t=_0[v0])!=null?t:_0[v0]=new Map;let n=e.get(I.createContext);return n||(n=I.createContext(null),e.set(I.createContext,n)),n}const ii=nP();function ig(t=ii){return function(){return I.useContext(t)}}const rI=ig(),rP=()=>{throw new Error("uSES not initialized!")};let iI=rP;const iP=t=>{iI=t},sP=(t,e)=>t===e;function oP(t=ii){const e=t===ii?rI:ig(t);return function(r,i={}){const{equalityFn:s=sP,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:h,noopCheck:d}=e();I.useRef(!0);const p=I.useCallback({[r.name](y){return r(y)}}[r.name],[r,h,o]),_=iI(u.addNestedSub,l.getState,c||l.getState,p,s);return I.useDebugValue(_),_}}const ln=oP();var sI={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,sg=rt?Symbol.for("react.element"):60103,og=rt?Symbol.for("react.portal"):60106,eh=rt?Symbol.for("react.fragment"):60107,th=rt?Symbol.for("react.strict_mode"):60108,nh=rt?Symbol.for("react.profiler"):60114,rh=rt?Symbol.for("react.provider"):60109,ih=rt?Symbol.for("react.context"):60110,ag=rt?Symbol.for("react.async_mode"):60111,sh=rt?Symbol.for("react.concurrent_mode"):60111,oh=rt?Symbol.for("react.forward_ref"):60112,ah=rt?Symbol.for("react.suspense"):60113,aP=rt?Symbol.for("react.suspense_list"):60120,lh=rt?Symbol.for("react.memo"):60115,uh=rt?Symbol.for("react.lazy"):60116,lP=rt?Symbol.for("react.block"):60121,uP=rt?Symbol.for("react.fundamental"):60117,cP=rt?Symbol.for("react.responder"):60118,hP=rt?Symbol.for("react.scope"):60119;function Jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case sg:switch(t=t.type,t){case ag:case sh:case eh:case nh:case th:case ah:return t;default:switch(t=t&&t.$$typeof,t){case ih:case oh:case uh:case lh:case rh:return t;default:return e}}case og:return e}}}function oI(t){return Jt(t)===sh}Ie.AsyncMode=ag;Ie.ConcurrentMode=sh;Ie.ContextConsumer=ih;Ie.ContextProvider=rh;Ie.Element=sg;Ie.ForwardRef=oh;Ie.Fragment=eh;Ie.Lazy=uh;Ie.Memo=lh;Ie.Portal=og;Ie.Profiler=nh;Ie.StrictMode=th;Ie.Suspense=ah;Ie.isAsyncMode=function(t){return oI(t)||Jt(t)===ag};Ie.isConcurrentMode=oI;Ie.isContextConsumer=function(t){return Jt(t)===ih};Ie.isContextProvider=function(t){return Jt(t)===rh};Ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===sg};Ie.isForwardRef=function(t){return Jt(t)===oh};Ie.isFragment=function(t){return Jt(t)===eh};Ie.isLazy=function(t){return Jt(t)===uh};Ie.isMemo=function(t){return Jt(t)===lh};Ie.isPortal=function(t){return Jt(t)===og};Ie.isProfiler=function(t){return Jt(t)===nh};Ie.isStrictMode=function(t){return Jt(t)===th};Ie.isSuspense=function(t){return Jt(t)===ah};Ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===eh||t===sh||t===nh||t===th||t===ah||t===aP||typeof t=="object"&&t!==null&&(t.$$typeof===uh||t.$$typeof===lh||t.$$typeof===rh||t.$$typeof===ih||t.$$typeof===oh||t.$$typeof===uP||t.$$typeof===cP||t.$$typeof===hP||t.$$typeof===lP)};Ie.typeOf=Jt;sI.exports=Ie;var lg=sI.exports,ug=lg,dP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},aI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cg={};cg[ug.ForwardRef]=pP;cg[ug.Memo]=aI;function w0(t){return ug.isMemo(t)?aI:cg[t.$$typeof]||dP}var mP=Object.defineProperty,gP=Object.getOwnPropertyNames,E0=Object.getOwnPropertySymbols,yP=Object.getOwnPropertyDescriptor,vP=Object.getPrototypeOf,I0=Object.prototype;function lI(t,e,n){if(typeof e!="string"){if(I0){var r=vP(e);r&&r!==I0&&lI(t,r,n)}var i=gP(e);E0&&(i=i.concat(E0(e)));for(var s=w0(t),o=w0(e),a=0;a<i.length;++a){var l=i[a];if(!fP[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=yP(e,l);try{mP(t,l,u)}catch{}}}}return t}var _P=lI;const wP=rm(_P);var xe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg=Symbol.for("react.element"),dg=Symbol.for("react.portal"),ch=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),ph=Symbol.for("react.context"),EP=Symbol.for("react.server_context"),mh=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),vh=Symbol.for("react.memo"),_h=Symbol.for("react.lazy"),IP=Symbol.for("react.offscreen"),uI;uI=Symbol.for("react.module.reference");function un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case hg:switch(t=t.type,t){case ch:case dh:case hh:case gh:case yh:return t;default:switch(t=t&&t.$$typeof,t){case EP:case ph:case mh:case _h:case vh:case fh:return t;default:return e}}case dg:return e}}}xe.ContextConsumer=ph;xe.ContextProvider=fh;xe.Element=hg;xe.ForwardRef=mh;xe.Fragment=ch;xe.Lazy=_h;xe.Memo=vh;xe.Portal=dg;xe.Profiler=dh;xe.StrictMode=hh;xe.Suspense=gh;xe.SuspenseList=yh;xe.isAsyncMode=function(){return!1};xe.isConcurrentMode=function(){return!1};xe.isContextConsumer=function(t){return un(t)===ph};xe.isContextProvider=function(t){return un(t)===fh};xe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===hg};xe.isForwardRef=function(t){return un(t)===mh};xe.isFragment=function(t){return un(t)===ch};xe.isLazy=function(t){return un(t)===_h};xe.isMemo=function(t){return un(t)===vh};xe.isPortal=function(t){return un(t)===dg};xe.isProfiler=function(t){return un(t)===dh};xe.isStrictMode=function(t){return un(t)===hh};xe.isSuspense=function(t){return un(t)===gh};xe.isSuspenseList=function(t){return un(t)===yh};xe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ch||t===dh||t===hh||t===gh||t===yh||t===IP||typeof t=="object"&&t!==null&&(t.$$typeof===_h||t.$$typeof===vh||t.$$typeof===fh||t.$$typeof===ph||t.$$typeof===mh||t.$$typeof===uI||t.getModuleId!==void 0)};xe.typeOf=un;function xP(){const t=tP();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const x0={notify(){},get:()=>[]};function TP(t,e){let n,r=x0;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=xP())}function u(){n&&(n(),n=void 0,r.clear(),r=x0)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const SP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CP=SP?I.useLayoutEffect:I.useEffect;function AP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=I.useMemo(()=>{const u=TP(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=I.useMemo(()=>t.getState(),[t]);CP(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||ii;return I.createElement(l.Provider,{value:o},n)}function cI(t=ii){const e=t===ii?rI:ig(t);return function(){const{store:r}=e();return r}}const kP=cI();function PP(t=ii){const e=t===ii?kP:cI(t);return function(){return e().dispatch}}const Qi=PP();iP(Jk.useSyncExternalStoreWithSelector);eP(zE.unstable_batchedUpdates);const cn=t=>t.auth;function RP(t){function e(M,F,U,Y,x){for(var ae=0,L=0,be=0,pe=0,ge,re,Qe=0,O=0,K,$e=K=ge=0,he=0,st=0,wo=0,ot=0,Il=U.length,Eo=Il-1,hn,te="",Ue="",ld="",ud="",xr;he<Il;){if(re=U.charCodeAt(he),he===Eo&&L+pe+be+ae!==0&&(L!==0&&(re=L===47?10:47),pe=be=ae=0,Il++,Eo++),L+pe+be+ae===0){if(he===Eo&&(0<st&&(te=te.replace(d,"")),0<te.trim().length)){switch(re){case 32:case 9:case 59:case 13:case 10:break;default:te+=U.charAt(he)}re=59}switch(re){case 123:for(te=te.trim(),ge=te.charCodeAt(0),K=1,ot=++he;he<Il;){switch(re=U.charCodeAt(he)){case 123:K++;break;case 125:K--;break;case 47:switch(re=U.charCodeAt(he+1)){case 42:case 47:e:{for($e=he+1;$e<Eo;++$e)switch(U.charCodeAt($e)){case 47:if(re===42&&U.charCodeAt($e-1)===42&&he+2!==$e){he=$e+1;break e}break;case 10:if(re===47){he=$e+1;break e}}he=$e}}break;case 91:re++;case 40:re++;case 34:case 39:for(;he++<Eo&&U.charCodeAt(he)!==re;);}if(K===0)break;he++}switch(K=U.substring(ot,he),ge===0&&(ge=(te=te.replace(h,"").trim()).charCodeAt(0)),ge){case 64:switch(0<st&&(te=te.replace(d,"")),re=te.charCodeAt(1),re){case 100:case 109:case 115:case 45:st=F;break;default:st=se}if(K=e(F,st,K,re,x+1),ot=K.length,0<D&&(st=n(se,te,wo),xr=a(3,K,st,F,k,Te,ot,re,x,Y),te=st.join(""),xr!==void 0&&(ot=(K=xr.trim()).length)===0&&(re=0,K="")),0<ot)switch(re){case 115:te=te.replace(S,o);case 100:case 109:case 45:K=te+"{"+K+"}";break;case 107:te=te.replace(f,"$1 $2"),K=te+"{"+K+"}",K=X===1||X===2&&s("@"+K,3)?"@-webkit-"+K+"@"+K:"@"+K;break;default:K=te+K,Y===112&&(K=(Ue+=K,""))}else K="";break;default:K=e(F,n(F,te,wo),K,Y,x+1)}ld+=K,K=wo=st=$e=ge=0,te="",re=U.charCodeAt(++he);break;case 125:case 59:if(te=(0<st?te.replace(d,""):te).trim(),1<(ot=te.length))switch($e===0&&(ge=te.charCodeAt(0),ge===45||96<ge&&123>ge)&&(ot=(te=te.replace(" ",":")).length),0<D&&(xr=a(1,te,F,M,k,Te,Ue.length,Y,x,Y))!==void 0&&(ot=(te=xr.trim()).length)===0&&(te="\0\0"),ge=te.charCodeAt(0),re=te.charCodeAt(1),ge){case 0:break;case 64:if(re===105||re===99){ud+=te+U.charAt(he);break}default:te.charCodeAt(ot-1)!==58&&(Ue+=i(te,ge,re,te.charCodeAt(2)))}wo=st=$e=ge=0,te="",re=U.charCodeAt(++he)}}switch(re){case 13:case 10:L===47?L=0:1+ge===0&&Y!==107&&0<te.length&&(st=1,te+="\0"),0<D*Q&&a(0,te,F,M,k,Te,Ue.length,Y,x,Y),Te=1,k++;break;case 59:case 125:if(L+pe+be+ae===0){Te++;break}default:switch(Te++,hn=U.charAt(he),re){case 9:case 32:if(pe+ae+L===0)switch(Qe){case 44:case 58:case 9:case 32:hn="";break;default:re!==32&&(hn=" ")}break;case 0:hn="\\0";break;case 12:hn="\\f";break;case 11:hn="\\v";break;case 38:pe+L+ae===0&&(st=wo=1,hn="\f"+hn);break;case 108:if(pe+L+ae+z===0&&0<$e)switch(he-$e){case 2:Qe===112&&U.charCodeAt(he-3)===58&&(z=Qe);case 8:O===111&&(z=O)}break;case 58:pe+L+ae===0&&($e=he);break;case 44:L+be+pe+ae===0&&(st=1,hn+="\r");break;case 34:case 39:L===0&&(pe=pe===re?0:pe===0?re:pe);break;case 91:pe+L+be===0&&ae++;break;case 93:pe+L+be===0&&ae--;break;case 41:pe+L+ae===0&&be--;break;case 40:if(pe+L+ae===0){if(ge===0)switch(2*Qe+3*O){case 533:break;default:ge=1}be++}break;case 64:L+be+pe+ae+$e+K===0&&(K=1);break;case 42:case 47:if(!(0<pe+ae+be))switch(L){case 0:switch(2*re+3*U.charCodeAt(he+1)){case 235:L=47;break;case 220:ot=he,L=42}break;case 42:re===47&&Qe===42&&ot+2!==he&&(U.charCodeAt(ot+2)===33&&(Ue+=U.substring(ot,he+1)),hn="",L=0)}}L===0&&(te+=hn)}O=Qe,Qe=re,he++}if(ot=Ue.length,0<ot){if(st=F,0<D&&(xr=a(2,Ue,st,M,k,Te,ot,Y,x,Y),xr!==void 0&&(Ue=xr).length===0))return ud+Ue+ld;if(Ue=st.join(",")+"{"+Ue+"}",X*z!==0){switch(X!==2||s(Ue,2)||(z=0),z){case 111:Ue=Ue.replace(E,":-moz-$1")+Ue;break;case 112:Ue=Ue.replace(v,"::-webkit-input-$1")+Ue.replace(v,"::-moz-$1")+Ue.replace(v,":-ms-input-$1")+Ue}z=0}}return ud+Ue+ld}function n(M,F,U){var Y=F.trim().split(w);F=Y;var x=Y.length,ae=M.length;switch(ae){case 0:case 1:var L=0;for(M=ae===0?"":M[0]+" ";L<x;++L)F[L]=r(M,F[L],U).trim();break;default:var be=L=0;for(F=[];L<x;++L)for(var pe=0;pe<ae;++pe)F[be++]=r(M[pe]+" ",Y[L],U).trim()}return F}function r(M,F,U){var Y=F.charCodeAt(0);switch(33>Y&&(Y=(F=F.trim()).charCodeAt(0)),Y){case 38:return F.replace(m,"$1"+M.trim());case 58:return M.trim()+F.replace(m,"$1"+M.trim());default:if(0<1*U&&0<F.indexOf("\f"))return F.replace(m,(M.charCodeAt(0)===58?"":"$1")+M.trim())}return M+F}function i(M,F,U,Y){var x=M+";",ae=2*F+3*U+4*Y;if(ae===944){M=x.indexOf(":",9)+1;var L=x.substring(M,x.length-1).trim();return L=x.substring(0,M).trim()+L+";",X===1||X===2&&s(L,1)?"-webkit-"+L+L:L}if(X===0||X===2&&!s(x,1))return x;switch(ae){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(ce,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return L=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+x+"-ms-flex-pack"+L+x;case 1005:return _.test(x)?x.replace(p,":-webkit-")+x.replace(p,":-moz-")+x:x;case 1e3:switch(L=x.substring(13).trim(),F=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(F)){case 226:L=x.replace(T,"tb");break;case 232:L=x.replace(T,"tb-rl");break;case 220:L=x.replace(T,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+L+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(F=(x=M).length-10,L=(x.charCodeAt(F)===33?x.substring(0,F):x).substring(M.indexOf(":",7)+1).trim(),ae=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:x=x.replace(L,"-webkit-"+L)+";"+x;break;case 207:case 102:x=x.replace(L,"-webkit-"+(102<ae?"inline-":"")+"box")+";"+x.replace(L,"-webkit-"+L)+";"+x.replace(L,"-ms-"+L+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return L=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+L+"-ms-flex-"+L+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace(R,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace(R,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(j.test(M)===!0)return(L=M.substring(M.indexOf(":")+1)).charCodeAt(0)===115?i(M.replace("stretch","fill-available"),F,U,Y).replace(":fill-available",":stretch"):x.replace(L,"-webkit-"+L)+x.replace(L,"-moz-"+L.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,U+Y===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+x}return x}function s(M,F){var U=M.indexOf(F===1?":":"{"),Y=M.substring(0,F!==3?U:10);return U=M.substring(U+1,M.length-1),G(F!==2?Y:Y.replace(H,"$1"),U,F)}function o(M,F){var U=i(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return U!==F+";"?U.replace(N," or ($1)").substring(4):"("+F+")"}function a(M,F,U,Y,x,ae,L,be,pe,ge){for(var re=0,Qe=F,O;re<D;++re)switch(O=oe[re].call(c,M,Qe,U,Y,x,ae,L,be,pe,ge)){case void 0:case!1:case!0:case null:break;default:Qe=O}if(Qe!==F)return Qe}function l(M){switch(M){case void 0:case null:D=oe.length=0;break;default:if(typeof M=="function")oe[D++]=M;else if(typeof M=="object")for(var F=0,U=M.length;F<U;++F)l(M[F]);else Q=!!M|0}return l}function u(M){return M=M.prefix,M!==void 0&&(G=null,M?typeof M!="function"?X=1:(X=2,G=M):X=0),u}function c(M,F){var U=M;if(33>U.charCodeAt(0)&&(U=U.trim()),ve=U,U=[ve],0<D){var Y=a(-1,F,U,U,k,Te,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(F=Y)}var x=e(se,U,F,0,0);return 0<D&&(Y=a(-2,x,U,U,k,Te,x.length,0,0,0),Y!==void 0&&(x=Y)),ve="",z=0,Te=k=1,x}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,_=/zoo|gra/,y=/([,: ])(transform)/g,w=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,E=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,R=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,Te=1,k=1,z=0,X=1,se=[],oe=[],D=0,G=null,Q=0,ve="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var bP={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function NP(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var OP=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,T0=NP(function(t){return OP.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function rr(){return(rr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var S0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},fp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!lg.typeOf(t)},tc=Object.freeze([]),Qr=Object.freeze({});function Aa(t){return typeof t=="function"}function C0(t){return t.displayName||t.name||"Component"}function fg(t){return t&&typeof t.styledComponentId=="string"}var Ks=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",pg=typeof window<"u"&&"HTMLElement"in window,DP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Za(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var LP=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Za(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),yu=new Map,nc=new Map,ra=1,Fl=function(t){if(yu.has(t))return yu.get(t);for(;nc.has(ra);)ra++;var e=ra++;return yu.set(t,e),nc.set(e,t),e},MP=function(t){return nc.get(t)},VP=function(t,e){e>=ra&&(ra=e+1),yu.set(t,e),nc.set(e,t)},$P="style["+Ks+'][data-styled-version="5.3.11"]',jP=new RegExp("^"+Ks+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),FP=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},UP=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(jP);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(VP(u,l),FP(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},zP=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},hI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Ks))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ks,"active"),r.setAttribute("data-styled-version","5.3.11");var o=zP();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},BP=function(){function t(n){var r=this.element=hI(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Za(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),WP=function(){function t(n){var r=this.element=hI(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),qP=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),A0=pg,HP={isServer:!pg,useCSSOMInjection:!DP},dI=function(){function t(n,r,i){n===void 0&&(n=Qr),r===void 0&&(r={}),this.options=rr({},HP,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&pg&&A0&&(A0=!1,function(s){for(var o=document.querySelectorAll($P),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ks)!=="active"&&(UP(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Fl(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(rr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new qP(o):s?new BP(o):new WP(o),new LP(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Fl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Fl(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Fl(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=MP(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=Ks+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),GP=/(a)(d)/gi,k0=function(t){return String.fromCharCode(t+(t>25?39:97))};function pp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=k0(e%52)+n;return(k0(e%52)+n).replace(GP,"$1-$2")}var Es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},fI=function(t){return Es(5381,t)};function KP(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Aa(n)&&!fg(n))return!1}return!0}var QP=fI("5.3.11"),YP=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&KP(e),this.componentId=n,this.baseHash=Es(QP,n),this.baseStyle=r,dI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Qs(this.rules,e,n,r).join(""),a=pp(Es(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Es(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var _=Qs(p,e,n,r),y=Array.isArray(_)?_.join(""):_;c=Es(c,y+d),h+=y}}if(h){var w=pp(c>>>0);if(!n.hasNameForId(i,w)){var m=r(h,"."+w,void 0,i);n.insertRules(i,w,m)}s.push(w)}}return s.join(" ")},t}(),XP=/^\s*\/\/.*$/gm,JP=[":","[",".","#"];function ZP(t){var e,n,r,i,s=t===void 0?Qr:t,o=s.options,a=o===void 0?Qr:o,l=s.plugins,u=l===void 0?tc:l,c=new RP(a),h=[],d=function(y){function w(m){if(m)try{y(m+"}")}catch{}}return function(m,f,v,E,T,S,N,R,H,j){switch(m){case 1:if(H===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(R===0)return f+"/*|*/";break;case 3:switch(R){case 102:case 112:return y(v[0]+f),"";default:return f+(j===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(w)}}}(function(y){h.push(y)}),p=function(y,w,m){return w===0&&JP.indexOf(m[n.length])!==-1||m.match(i)?y:"."+e};function _(y,w,m,f){f===void 0&&(f="&");var v=y.replace(XP,""),E=w&&m?m+" "+w+" { "+v+" }":v;return e=f,n=w,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!w?"":w,E)}return c.use([].concat(u,[function(y,w,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(y){if(y===-2){var w=h;return h=[],w}}])),_.hash=u.length?u.reduce(function(y,w){return w.name||Za(15),Es(y,w.name)},5381).toString():"",_}var pI=$t.createContext();pI.Consumer;var mI=$t.createContext(),eR=(mI.Consumer,new dI),mp=ZP();function tR(){return I.useContext(pI)||eR}function nR(){return I.useContext(mI)||mp}var rR=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=mp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Za(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=mp),this.name+e.hash},t}(),iR=/([A-Z])/,sR=/([A-Z])/g,oR=/^ms-/,aR=function(t){return"-"+t.toLowerCase()};function P0(t){return iR.test(t)?t.replace(sR,aR).replace(oR,"-ms-"):t}var R0=function(t){return t==null||t===!1||t===""};function Qs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Qs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(R0(t))return"";if(fg(t))return"."+t.styledComponentId;if(Aa(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return Qs(l,e,n,r)}var u;return t instanceof rR?n?(t.inject(n,r),t.getName(r)):t:fp(t)?function c(h,d){var p,_,y=[];for(var w in h)h.hasOwnProperty(w)&&!R0(h[w])&&(Array.isArray(h[w])&&h[w].isCss||Aa(h[w])?y.push(P0(w)+":",h[w],";"):fp(h[w])?y.push.apply(y,c(h[w],w)):y.push(P0(w)+": "+(p=w,(_=h[w])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||p in bP||p.startsWith("--")?String(_).trim():_+"px")+";"));return d?[d+" {"].concat(y,["}"]):y}(t):t.toString()}var b0=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function lR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Aa(t)||fp(t)?b0(Qs(S0(tc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:b0(Qs(S0(t,n)))}var uR=function(t,e,n){return n===void 0&&(n=Qr),t.theme!==n.theme&&t.theme||e||n.theme},cR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hR=/(^-|-$)/g;function $d(t){return t.replace(cR,"-").replace(hR,"")}var dR=function(t){return pp(fI(t)>>>0)};function Ul(t){return typeof t=="string"&&!0}var gp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},fR=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function pR(t,e,n){var r=t[n];gp(e)&&gp(r)?gI(r,e):t[n]=e}function gI(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(gp(o))for(var a in o)fR(a)&&pR(t,o[a],a)}return t}var yI=$t.createContext();yI.Consumer;var jd={};function vI(t,e,n){var r=fg(t),i=!Ul(t),s=e.attrs,o=s===void 0?tc:s,a=e.componentId,l=a===void 0?function(f,v){var E=typeof f!="string"?"sc":$d(f);jd[E]=(jd[E]||0)+1;var T=E+"-"+dR("5.3.11"+E+jd[E]);return v?v+"-"+T:T}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return Ul(f)?"styled."+f:"Styled("+C0(f)+")"}(t):u,h=e.displayName&&e.componentId?$d(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,v,E){return t.shouldForwardProp(f,v,E)&&e.shouldForwardProp(f,v,E)}:t.shouldForwardProp);var _,y=new YP(n,h,r?t.componentStyle:void 0),w=y.isStatic&&o.length===0,m=function(f,v){return function(E,T,S,N){var R=E.attrs,H=E.componentStyle,j=E.defaultProps,ce=E.foldedComponentIds,Te=E.shouldForwardProp,k=E.styledComponentId,z=E.target,X=function(Y,x,ae){Y===void 0&&(Y=Qr);var L=rr({},x,{theme:Y}),be={};return ae.forEach(function(pe){var ge,re,Qe,O=pe;for(ge in Aa(O)&&(O=O(L)),O)L[ge]=be[ge]=ge==="className"?(re=be[ge],Qe=O[ge],re&&Qe?re+" "+Qe:re||Qe):O[ge]}),[L,be]}(uR(T,I.useContext(yI),j)||Qr,T,R),se=X[0],oe=X[1],D=function(Y,x,ae,L){var be=tR(),pe=nR(),ge=x?Y.generateAndInjectStyles(Qr,be,pe):Y.generateAndInjectStyles(ae,be,pe);return ge}(H,N,se),G=S,Q=oe.$as||T.$as||oe.as||T.as||z,ve=Ul(Q),M=oe!==T?rr({},T,{},oe):T,F={};for(var U in M)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?F.as=M[U]:(Te?Te(U,T0,Q):!ve||T0(U))&&(F[U]=M[U]));return T.style&&oe.style!==T.style&&(F.style=rr({},T.style,{},oe.style)),F.className=Array.prototype.concat(ce,k,D!==k?D:null,T.className,oe.className).filter(Boolean).join(" "),F.ref=G,I.createElement(Q,F)}(_,f,v,w)};return m.displayName=c,(_=$t.forwardRef(m)).attrs=d,_.componentStyle=y,_.displayName=c,_.shouldForwardProp=p,_.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):tc,_.styledComponentId=h,_.target=r?t.target:t,_.withComponent=function(f){var v=e.componentId,E=function(S,N){if(S==null)return{};var R,H,j={},ce=Object.keys(S);for(H=0;H<ce.length;H++)R=ce[H],N.indexOf(R)>=0||(j[R]=S[R]);return j}(e,["componentId"]),T=v&&v+"-"+(Ul(f)?f:$d(C0(f)));return vI(f,rr({},E,{attrs:d,componentId:T}),n)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?gI({},t.defaultProps,f):f}}),Object.defineProperty(_,"toString",{value:function(){return"."+_.styledComponentId}}),i&&wP(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var yp=function(t){return function e(n,r,i){if(i===void 0&&(i=Qr),!lg.isValidElementType(r))return Za(1,String(r));var s=function(){return n(r,i,lR.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,rr({},i,{},o))},s.attrs=function(o){return e(n,r,rr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(vI,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){yp[t]=yp(t)});const A=yp;var _I={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N0=$t.createContext&&$t.createContext(_I),Yr=globalThis&&globalThis.__assign||function(){return Yr=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Yr.apply(this,arguments)},mR=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function wI(t){return t&&t.map(function(e,n){return $t.createElement(e.tag,Yr({key:n},e.attr),wI(e.child))})}function Cn(t){return function(e){return $t.createElement(gR,Yr({attr:Yr({},t.attr)},e),wI(t.child))}}function gR(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=mR(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),$t.createElement("svg",Yr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Yr(Yr({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&$t.createElement("title",null,s),t.children)};return N0!==void 0?$t.createElement(N0.Consumer,null,function(n){return e(n)}):e(_I)}function yR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"}},{tag:"circle",attr:{cx:"10.5",cy:"19.5",r:"1.5"}},{tag:"circle",attr:{cx:"17.5",cy:"19.5",r:"1.5"}}]})(t)}const vR=A.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 10;
`,_R=A.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 18px;
  padding: 0px 16px;
  gap: 20px;
`,wR=A(yR)`
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
`,ER=A.div`
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
`,IR=A.div`
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
`;function xR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22"}}]})(t)}function TR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22",transform:"matrix(-1 0 0 1 24 0)"}}]})(t)}function SR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"}}]})(t)}function CR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polyline",attr:{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 13 10.2 16.6 18 7"}}]})(t)}function AR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7,7 L17,17 M7,17 L17,7"}}]})(t)}function kR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M11.9955241,8.33576576 L15.4932862,11.8335278 L11.9955241,8.33576576 Z M17.5365751,7.79609426 C17.9262629,8.18578207 17.9321949,8.81165877 17.5321697,9.21168397 L10.0807224,16.6631313 L6,17.829052 L7.16592069,13.7483296 L14.617368,6.29688224 C15.0094888,5.90476144 15.6393004,5.89881957 16.0329577,6.29247691 L17.5365751,7.79609426 Z"}}]})(t)}function mg(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17"}}]})(t)}function PR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.3183118,0.0772036939 C18.5358869,0.132773211 19.3775594,0.311686093 20.156489,0.614412318 C20.9357539,0.917263935 21.5259307,1.30117806 22.1124276,1.88767349 C22.6988355,2.47414659 23.0827129,3.06422396 23.3856819,3.84361655 C23.688357,4.62263666 23.8672302,5.46418415 23.9227984,6.68172489 C23.9916356,8.19170553 24,8.72394829 24,11.9999742 C24,15.2760524 23.9916355,15.808302 23.9227954,17.3182896 C23.8672306,18.5358038 23.6883589,19.3773584 23.3855877,20.1566258 C23.0826716,20.9358162 22.6987642,21.5259396 22.1124276,22.1122749 C21.5259871,22.6987804 20.9357958,23.0827198 20.1563742,23.3856323 C19.3772192,23.6883583 18.5357324,23.8672318 17.3183209,23.9227442 C15.8086874,23.9916325 15.2765626,24 12,24 C8.72343739,24 8.19131258,23.9916325 6.68172382,23.9227463 C5.46426077,23.8672314 4.62270711,23.6883498 3.84342369,23.3855738 C3.0641689,23.0827004 2.47399369,22.6987612 1.88762592,22.1123283 C1.30117312,21.525877 0.91721975,20.9357071 0.614318116,20.1563835 C0.311643016,19.3773633 0.132769821,18.5358159 0.0772038909,17.3183251 C0.0083529426,15.8092887 0,15.2774634 0,11.9999742 C0,8.7225328 0.00835296697,8.19071076 0.0772047368,6.68165632 C0.132769821,5.46418415 0.311643016,4.62263666 0.614362729,3.84350174 C0.91719061,3.06430165 1.30113536,2.4741608 1.88757245,1.88772514 C2.47399369,1.30123879 3.0641689,0.917299613 3.84345255,0.614414972 C4.62236201,0.311696581 5.46409415,0.132773979 6.68163888,0.0772035898 C8.19074867,0.00835221992 8.72252573,0 12,0 C15.2774788,0 15.8092594,0.00835235053 17.3183118,0.0772036939 Z M12,2.66666667 C8.75959504,2.66666667 8.26400713,2.67445049 6.80319929,2.74109814 C5.87614637,2.78341009 5.31952221,2.90172878 4.80947575,3.09995521 C4.37397765,3.26922052 4.09725505,3.44924273 3.77324172,3.77329203 C3.44916209,4.09737087 3.26913181,4.37408574 3.09996253,4.80937168 C2.90169965,5.31965737 2.78340891,5.87618164 2.74109927,6.80321713 C2.67445122,8.26397158 2.66666667,8.75960374 2.66666667,11.9999742 C2.66666667,15.2403924 2.67445121,15.7360281 2.74109842,17.1967643 C2.78340891,18.1238184 2.90169965,18.6803426 3.09990404,19.1904778 C3.26914133,19.6259017 3.44919889,19.9026659 3.77329519,20.2267614 C4.09725505,20.5507573 4.37397765,20.7307795 4.80932525,20.8999863 C5.31971515,21.0982887 5.87621193,21.2165784 6.80323907,21.2588497 C8.26460439,21.3255353 8.76051223,21.3333333 12,21.3333333 C15.2394878,21.3333333 15.7353956,21.3255353 17.1968056,21.2588476 C18.123775,21.216579 18.6802056,21.0982995 19.1905083,20.9000309 C19.6260288,20.7307713 19.9027426,20.5507596 20.2267583,20.226708 C20.5507492,19.9027179 20.7308046,19.6259456 20.9000375,19.1906283 C21.0983009,18.6803412 21.2165908,18.1238118 21.2588986,17.196779 C21.3255376,15.7350718 21.3333333,15.2390126 21.3333333,11.9999742 C21.3333333,8.76098665 21.3255376,8.26493375 21.2589016,6.80323567 C21.2165911,5.87618164 21.0983004,5.31965737 20.9001178,4.80957831 C20.7308131,4.37403932 20.550774,4.09729207 20.2267583,3.77324038 C19.9027658,3.44924868 19.6260264,3.26922777 19.1905015,3.09996643 C18.6803988,2.90171817 18.1238378,2.78341062 17.1967608,2.74109868 C15.7359966,2.67445057 15.2404012,2.66666667 12,2.66666667 Z M12,18.2222222 C8.56356156,18.2222222 5.77777778,15.4364384 5.77777778,12 C5.77777778,8.56356156 8.56356156,5.77777778 12,5.77777778 C15.4364384,5.77777778 18.2222222,8.56356156 18.2222222,12 C18.2222222,15.4364384 15.4364384,18.2222222 12,18.2222222 Z M12,15.5555556 C13.9636791,15.5555556 15.5555556,13.9636791 15.5555556,12 C15.5555556,10.0363209 13.9636791,8.44444444 12,8.44444444 C10.0363209,8.44444444 8.44444444,10.0363209 8.44444444,12 C8.44444444,13.9636791 10.0363209,15.5555556 12,15.5555556 Z M18.2222222,7.11111111 C17.4858426,7.11111111 16.8888889,6.51415744 16.8888889,5.77777778 C16.8888889,5.04139811 17.4858426,4.44444444 18.2222222,4.44444444 C18.9586019,4.44444444 19.5555556,5.04139811 19.5555556,5.77777778 C19.5555556,6.51415744 18.9586019,7.11111111 18.2222222,7.11111111 Z"}}]})(t)}function RR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"}}]})(t)}function bR(t){return Cn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"polygon",attr:{fillRule:"evenodd",points:"12 16.667 5 22 8 14 2 9.5 9.5 9.5 12 2 14.5 9.5 22 9.5 16 14 19 22"}}]})(t)}const NR=A.div`
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
`,OR=A.div`
  position: relative;
`,DR=A(PR)`
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
`,LR=A(SR)`
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
`,MR=()=>{const t=Ir();return g.jsxs(OR,{children:[g.jsx(NR,{onClick:()=>{t("/")}}),g.jsx("a",{href:"https://www.instagram.com/msshopua2023/",class:"link",children:g.jsx(DR,{})}),g.jsx("a",{href:"https://www.facebook.com/profile.php?id=100091605982461",class:"link",children:g.jsx(LR,{})})]})},VR=A.nav`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,O0=A(Nk)`
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
`,$R=[{to:"/",title:"Головна"},{to:"/category",title:"Категорії"},{to:"/search",title:"Пошук"}],jR=()=>{const t=ln(cn);return g.jsxs(VR,{children:[$R.map((e,n)=>g.jsx(O0,{to:`${e.to}`,children:e.title},n)),t.role==="admin"&&g.jsx(O0,{to:"/admin",children:"Адмін"},"admin")]})},Fd=A.p`
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

    font-size: 38px;`,FR=A.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 15px;
  }
`,UR=A.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,zR=A.div`
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
`,BR=A.div`
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
`,WR=A.div`
  gap: 10px;
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,zl=A.button`
  font-size: 7px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,Bl=A.h4`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,qR=A.div`
  display: flex;
  flex-direction: column;
`,Wl=A.p`
  font-size: 11px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }
`,HR=A.div`
  width: 10px;
  height: 10px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
`,D0=A.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`,GR=A.div`
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  align-items: center;
`,KR=A.div`
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
`,kn=A.p`
  @media (min-width: 768px) {
    font-size: 7px;
  }
  @media (min-width: 1440px) {
    font-size: 7px;
  }
`,ql=A.div`
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
`,is=A.h3`
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
`,Pn=A.input`
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
`,Hl=A.button`
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
`,Yn=A.div`
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
`,QR=A.div`
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
`,YR=A.ul`
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
`,XR=A.li`
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
 */const EI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},II={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(EI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new ZR;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eb=function(t){const e=EI(t);return II.encodeByteArray(e,!0)},rc=function(t){return eb(t).replace(/\./g,"")},xI=function(t){try{return II.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nb=()=>tb().__FIREBASE_DEFAULTS__,rb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ib=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xI(t[1]);return e&&JSON.parse(e)},gg=()=>{try{return nb()||rb()||ib()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TI=t=>{var e,n;return(n=(e=gg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},SI=t=>{const e=TI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},CI=()=>{var t;return(t=gg())===null||t===void 0?void 0:t.config},AI=t=>{var e;return(e=gg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ob(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function ab(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ub(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cb(){try{return typeof indexedDB=="object"}catch{return!1}}function hb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const db="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=db,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,a,r)}}function fb(t,e){return t.replace(pb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pb=/\{\$([^}]+)}/g;function mb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ic(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(L0(s)&&L0(o)){if(!ic(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L0(t){return t!==null&&typeof t=="object"}/**
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
 */function tl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function jo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gb(t,e){const n=new yb(t,e);return n.subscribe.bind(n)}class yb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ud),i.error===void 0&&(i.error=Ud),i.complete===void 0&&(i.complete=Ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ud(){}/**
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
 */class _b{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eb(e))try{this.getOrInitializeService({instanceIdentifier:_i})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=_i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_i){return this.instances.has(e)}getOptions(e=_i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_i){return this.component?this.component.multipleInstances?e:_i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wb(t){return t===_i?void 0:t}function Eb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ib{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _b(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const xb={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Tb=me.INFO,Sb={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Cb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Sb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yg{constructor(e){this.name=e,this._logLevel=Tb,this._logHandler=Cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Ab=(t,e)=>e.some(n=>t instanceof n);let M0,V0;function kb(){return M0||(M0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pb(){return V0||(V0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PI=new WeakMap,vp=new WeakMap,RI=new WeakMap,zd=new WeakMap,vg=new WeakMap;function Rb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&PI.set(n,t)}).catch(()=>{}),vg.set(e,t),e}function bb(t){if(vp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vp.set(t,e)}let _p={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||RI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nb(t){_p=t(_p)}function Ob(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bd(this),e,...n);return RI.set(r,e.sort?e.sort():[e]),Xr(r)}:Pb().includes(t)?function(...e){return t.apply(Bd(this),e),Xr(PI.get(this))}:function(...e){return Xr(t.apply(Bd(this),e))}}function Db(t){return typeof t=="function"?Ob(t):(t instanceof IDBTransaction&&bb(t),Ab(t,kb())?new Proxy(t,_p):t)}function Xr(t){if(t instanceof IDBRequest)return Rb(t);if(zd.has(t))return zd.get(t);const e=Db(t);return e!==t&&(zd.set(t,e),vg.set(e,t)),e}const Bd=t=>vg.get(t);function Lb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xr(o.result),l.oldVersion,l.newVersion,Xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Mb=["get","getKey","getAll","getAllKeys","count"],Vb=["put","add","delete","clear"],Wd=new Map;function $0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wd.get(e))return Wd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Wd.set(e,s),s}Nb(t=>({...t,get:(e,n,r)=>$0(e,n)||t.get(e,n,r),has:(e,n)=>!!$0(e,n)||t.has(e,n)}));/**
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
 */class $b{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wp="@firebase/app",j0="0.9.17";/**
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
 */const $i=new yg("@firebase/app"),Fb="@firebase/app-compat",Ub="@firebase/analytics-compat",zb="@firebase/analytics",Bb="@firebase/app-check-compat",Wb="@firebase/app-check",qb="@firebase/auth",Hb="@firebase/auth-compat",Gb="@firebase/database",Kb="@firebase/database-compat",Qb="@firebase/functions",Yb="@firebase/functions-compat",Xb="@firebase/installations",Jb="@firebase/installations-compat",Zb="@firebase/messaging",eN="@firebase/messaging-compat",tN="@firebase/performance",nN="@firebase/performance-compat",rN="@firebase/remote-config",iN="@firebase/remote-config-compat",sN="@firebase/storage",oN="@firebase/storage-compat",aN="@firebase/firestore",lN="@firebase/firestore-compat",uN="firebase",cN="10.3.0";/**
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
 */const Ep="[DEFAULT]",hN={[wp]:"fire-core",[Fb]:"fire-core-compat",[zb]:"fire-analytics",[Ub]:"fire-analytics-compat",[Wb]:"fire-app-check",[Bb]:"fire-app-check-compat",[qb]:"fire-auth",[Hb]:"fire-auth-compat",[Gb]:"fire-rtdb",[Kb]:"fire-rtdb-compat",[Qb]:"fire-fn",[Yb]:"fire-fn-compat",[Xb]:"fire-iid",[Jb]:"fire-iid-compat",[Zb]:"fire-fcm",[eN]:"fire-fcm-compat",[tN]:"fire-perf",[nN]:"fire-perf-compat",[rN]:"fire-rc",[iN]:"fire-rc-compat",[sN]:"fire-gcs",[oN]:"fire-gcs-compat",[aN]:"fire-fst",[lN]:"fire-fst-compat","fire-js":"fire-js",[uN]:"fire-js-all"};/**
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
 */const sc=new Map,Ip=new Map;function dN(t,e){try{t.container.addComponent(e)}catch(n){$i.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ji(t){const e=t.name;if(Ip.has(e))return $i.debug(`There were multiple attempts to register component ${e}.`),!1;Ip.set(e,t);for(const n of sc.values())dN(n,t);return!0}function wh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const fN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jr=new el("app","Firebase",fN);/**
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
 */class pN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Yi=cN;function bI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ep,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Jr.create("bad-app-name",{appName:String(i)});if(n||(n=CI()),!n)throw Jr.create("no-options");const s=sc.get(i);if(s){if(ic(n,s.options)&&ic(r,s.config))return s;throw Jr.create("duplicate-app",{appName:i})}const o=new Ib(i);for(const l of Ip.values())o.addComponent(l);const a=new pN(n,r,o);return sc.set(i,a),a}function _g(t=Ep){const e=sc.get(t);if(!e&&t===Ep&&CI())return bI();if(!e)throw Jr.create("no-app",{appName:t});return e}function jn(t,e,n){var r;let i=(r=hN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$i.warn(a.join(" "));return}ji(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mN="firebase-heartbeat-database",gN=1,ka="firebase-heartbeat-store";let qd=null;function NI(){return qd||(qd=Lb(mN,gN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ka)}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),qd}async function yN(t){try{return await(await NI()).transaction(ka).objectStore(ka).get(OI(t))}catch(e){if(e instanceof Gn)$i.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$i.warn(n.message)}}}async function F0(t,e){try{const r=(await NI()).transaction(ka,"readwrite");await r.objectStore(ka).put(e,OI(t)),await r.done}catch(n){if(n instanceof Gn)$i.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$i.warn(r.message)}}}function OI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vN=1024,_N=30*24*60*60*1e3;class wN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=U0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=_N}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=U0(),{heartbeatsToSend:n,unsentEntries:r}=EN(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function U0(){return new Date().toISOString().substring(0,10)}function EN(t,e=vN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),z0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),z0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class IN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cb()?hb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return F0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return F0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function z0(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xN(t){ji(new si("platform-logger",e=>new $b(e),"PRIVATE")),ji(new si("heartbeat",e=>new wN(e),"PRIVATE")),jn(wp,j0,t),jn(wp,j0,"esm2017"),jn("fire-js","")}xN("");function wg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function B0(t){return t!==void 0&&t.enterprise!==void 0}class TN{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function DI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SN=DI,LI=new el("auth","Firebase",DI());/**
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
 */const oc=new yg("@firebase/auth");function CN(t,...e){oc.logLevel<=me.WARN&&oc.warn(`Auth (${Yi}): ${t}`,...e)}function vu(t,...e){oc.logLevel<=me.ERROR&&oc.error(`Auth (${Yi}): ${t}`,...e)}/**
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
 */function xn(t,...e){throw Eg(t,...e)}function Fn(t,...e){return Eg(t,...e)}function AN(t,e,n){const r=Object.assign(Object.assign({},SN()),{[e]:n});return new el("auth","Firebase",r).create(e,{appName:t.name})}function Eg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return LI.create(t,...e)}function J(t,e,...n){if(!t)throw Eg(e,...n)}function ir(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function fr(t,e){t||ir(e)}/**
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
 */function xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kN(){return W0()==="http:"||W0()==="https:"}function W0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kN()||ab()||"connection"in navigator)?navigator.onLine:!0}function RN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class nl{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=ob()||lb()}get(){return PN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ig(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class MI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NN=new nl(3e4,6e4);function Xi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fi(t,e,n,r,i={}){return VI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=tl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),MI.fetch()($I(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function VI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bN),e);try{const i=new ON(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw AN(t,c,u);xn(t,c)}}catch(i){if(i instanceof Gn)throw i;xn(t,"network-request-failed",{message:String(i)})}}async function rl(t,e,n,r,i={}){const s=await fi(t,e,n,r,i);return"mfaPendingCredential"in s&&xn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $I(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ig(t.config,i):`${t.config.apiScheme}://${i}`}class ON{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fn(this.auth,"network-request-failed")),NN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Fn(t,e,r);return i.customData._tokenResponse=n,i}async function DN(t,e){return fi(t,"GET","/v2/recaptchaConfig",Xi(t,e))}/**
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
 */async function LN(t,e){return fi(t,"POST","/v1/accounts:delete",e)}async function MN(t,e){return fi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ia(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VN(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=xg(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ia(Hd(i.auth_time)),issuedAtTime:ia(Hd(i.iat)),expirationTime:ia(Hd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hd(t){return Number(t)*1e3}function xg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=xI(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $N(t){const e=xg(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&jN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function ac(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ys(t,MN(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BN(s.providerUserInfo):[],a=zN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function UN(t){const e=We(t);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BN(t){return t.map(e=>{var{providerId:n}=e,r=wg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WN(t,e){const n=await VI(t,{},async()=>{const r=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$I(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",MI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$N(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pa;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pa,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function Sr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VN(this,e)}reload(){return UN(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ys(this,LN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:T,providerData:S,stsTokenManager:N}=n;J(v&&N,e,"internal-error");const R=Pa.fromJSON(this.name,N);J(typeof v=="string",e,"internal-error"),Sr(h,e.name),Sr(d,e.name),J(typeof E=="boolean",e,"internal-error"),J(typeof T=="boolean",e,"internal-error"),Sr(p,e.name),Sr(_,e.name),Sr(y,e.name),Sr(w,e.name),Sr(m,e.name),Sr(f,e.name);const H=new Ri({uid:v,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:T,photoURL:_,phoneNumber:p,tenantId:y,stsTokenManager:R,createdAt:m,lastLoginAt:f});return S&&Array.isArray(S)&&(H.providerData=S.map(j=>Object.assign({},j))),w&&(H._redirectEventId=w),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pa;i.updateFromServerResponse(n);const s=new Ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ac(s),s}}/**
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
 */const q0=new Map;function sr(t){fr(t instanceof Function,"Expected a class definition");let e=q0.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,q0.set(t,e),e)}/**
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
 */function _u(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_u(this.userKey,i.apiKey,s),this.fullPersistenceKey=_u("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(sr(H0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||sr(H0);const o=_u(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ri._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Rs(s,e,r))}}/**
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
 */function G0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qI(e))return"Blackberry";if(HI(e))return"Webos";if(Tg(e))return"Safari";if((e.includes("chrome/")||zI(e))&&!e.includes("edge/"))return"Chrome";if(WI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UI(t=At()){return/firefox\//i.test(t)}function Tg(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zI(t=At()){return/crios\//i.test(t)}function BI(t=At()){return/iemobile/i.test(t)}function WI(t=At()){return/android/i.test(t)}function qI(t=At()){return/blackberry/i.test(t)}function HI(t=At()){return/webos/i.test(t)}function Eh(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qN(t=At()){var e;return Eh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HN(){return ub()&&document.documentMode===10}function GI(t=At()){return Eh(t)||WI(t)||HI(t)||qI(t)||/windows phone/i.test(t)||BI(t)}function GN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function KI(t,e=[]){let n;switch(t){case"Browser":n=G0(At());break;case"Worker":n=`${G0(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yi}/${r}`}/**
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
 */class KN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function QN(t,e={}){return fi(t,"GET","/v2/passwordPolicy",Xi(t,e))}/**
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
 */const YN=6;class XN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class JN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new K0(this),this.idTokenSubscription=new K0(this),this.beforeStateQueue=new KN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QN(this),n=new XN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ji(t){return We(t)}class K0{constructor(e){this.auth=e,this.observer=null,this.addObserver=gb(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ZN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function QI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ZN().appendChild(r)})}function eO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tO="https://www.google.com/recaptcha/enterprise.js?render=",nO="recaptcha-enterprise",rO="NO_RECAPTCHA";class iO{constructor(e){this.type=nO,this.auth=Ji(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{DN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new TN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;B0(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(rO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&B0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}QI(tO+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function lc(t,e,n,r=!1){const i=new iO(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function sO(t,e){const n=wh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ic(s,e??{}))return i;xn(i,"already-initialized")}return n.initialize({options:e})}function oO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aO(t,e,n){const r=Ji(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=YI(e),{host:o,port:a}=lO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||uO()}function YI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lO(t){const e=YI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Q0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Q0(o)}}}function Q0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}async function cO(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function hO(t,e){return rl(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}async function dO(t,e){return rl(t,"POST","/v1/accounts:signInWithEmailLink",Xi(t,e))}/**
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
 */class Ra extends Sg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await lc(e,r,"signInWithPassword");return Gd(e,i)}else return Gd(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await lc(e,r,"signInWithPassword");return Gd(e,s)}else return Promise.reject(i)});case"emailLink":return hO(e,{email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cO(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dO(e,{idToken:n,email:this._email,oobCode:this._password});default:xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const fO="http://localhost";class Fi extends Sg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:fO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tl(n)}return e}}/**
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
 */function pO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mO(t){const e=$o(jo(t)).link,n=e?$o(jo(e)).deep_link_id:null,r=$o(jo(t)).deep_link_id;return(r?$o(jo(r)).link:null)||r||n||e||t}class Cg{constructor(e){var n,r,i,s,o,a;const l=$o(jo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=pO((i=l.mode)!==null&&i!==void 0?i:null);J(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mO(e);try{return new Cg(n)}catch{return null}}}/**
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
 */class fo{constructor(){this.providerId=fo.PROVIDER_ID}static credential(e,n){return Ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cg.parseLink(n);return J(r,"argument-error"),Ra._fromEmailAndCode(e,r.code,r.tenantId)}}fo.PROVIDER_ID="password";fo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uc extends Gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uc(e,n,r,i)}}function JI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(t,s,e,r):s})}async function gO(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
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
 */async function yO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ys(t,JI(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=xg(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Ui._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xn(r,"user-mismatch"),s}}/**
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
 */async function ZI(t,e,n=!1){const r="signIn",i=await JI(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vO(t,e){return ZI(Ji(t),e)}/**
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
 */async function ex(t){const e=Ji(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _O(t,e,n){var r;const i=Ji(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await lc(i,s,"signUpPassword");o=Kd(i,u)}else o=Kd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await lc(i,s,"signUpPassword");return Kd(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ex(t),u}),l=await Ui._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function wO(t,e,n){return vO(We(t),fo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ex(t),r})}/**
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
 */async function EO(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function IO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ys(r,EO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xO(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function TO(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function SO(t){return We(t).signOut()}const cc="__sak";/**
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
 */function CO(){const t=At();return Tg(t)||Eh(t)}const AO=1e3,kO=10;class nx extends tx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CO()&&GN(),this.fallbackToPolling=GI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nx.type="LOCAL";const PO=nx;/**
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
 */function RO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await RO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
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
 */class bO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ag("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Un(){return window}function NO(t){Un().location.href=t}/**
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
 */function sx(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function OO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LO(){return sx()?self:null}/**
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
 */const ox="firebaseLocalStorageDb",MO=1,hc="firebaseLocalStorage",ax="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xh(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function VO(){const t=indexedDB.deleteDatabase(ox);return new sl(t).toPromise()}function Tp(){const t=indexedDB.open(ox,MO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:ax})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await VO(),e(await Tp()))})})}async function X0(t,e,n){const r=xh(t,!0).put({[ax]:e,value:n});return new sl(r).toPromise()}async function $O(t,e){const n=xh(t,!1).get(e),r=await new sl(n).toPromise();return r===void 0?null:r.value}function J0(t,e){const n=xh(t,!0).delete(e);return new sl(n).toPromise()}const jO=800,FO=3;class lx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sx()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance(LO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OO(),!this.activeServiceWorker)return;this.sender=new bO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tp();return await X0(e,cc,"1"),await J0(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>X0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$O(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>J0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xh(i,!1).getAll();return new sl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lx.type="LOCAL";const UO=lx;new nl(3e4,6e4);/**
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
 */function zO(t,e){return e?sr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kg extends Sg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BO(t){return ZI(t.auth,new kg(t),t.bypassAuthState)}function WO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),yO(n,new kg(t),t.bypassAuthState)}async function qO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),gO(n,new kg(t),t.bypassAuthState)}/**
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
 */class ux{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BO;case"linkViaPopup":case"linkViaRedirect":return qO;case"reauthViaPopup":case"reauthViaRedirect":return WO;default:xn(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const HO=new nl(2e3,1e4);class Is extends ux{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=Ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HO.get())};e()}}Is.currentPopupAction=null;/**
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
 */const GO="pendingRedirect",wu=new Map;class KO extends ux{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const r=await QO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QO(t,e){const n=JO(e),r=XO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function YO(t,e){wu.set(t._key(),e)}function XO(t){return sr(t._redirectPersistence)}function JO(t){return _u(GO,t.config.apiKey,t.name)}async function ZO(t,e,n=!1){const r=Ji(t),i=zO(r,e),o=await new KO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const e4=10*60*1e3;class t4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!n4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=e4&&this.cachedEventUids.clear(),this.cachedEventUids.has(Z0(e))}saveEventToCache(e){this.cachedEventUids.add(Z0(e)),this.lastProcessedEventTime=Date.now()}}function Z0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function n4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cx(t);default:return!1}}/**
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
 */async function r4(t,e={}){return fi(t,"GET","/v1/projects",e)}/**
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
 */const i4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,s4=/^https?/;async function o4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await r4(t);for(const n of e)try{if(a4(n))return}catch{}xn(t,"unauthorized-domain")}function a4(t){const e=xp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!s4.test(n))return!1;if(i4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const l4=new nl(3e4,6e4);function e_(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function u4(t){return new Promise((e,n)=>{var r,i,s;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(Fn(t,"network-request-failed"))},timeout:l4.get()})}if(!((i=(r=Un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Un().gapi)===null||s===void 0)&&s.load)o();else{const a=eO("iframefcb");return Un()[a]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},QI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function c4(t){return Eu=Eu||u4(t),Eu}/**
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
 */const h4=new nl(5e3,15e3),d4="__/auth/iframe",f4="emulator/auth/iframe",p4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},m4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g4(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ig(e,f4):`https://${t.config.authDomain}/${d4}`,r={apiKey:e.apiKey,appName:t.name,v:Yi},i=m4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${tl(r).slice(1)}`}async function y4(t){const e=await c4(t),n=Un().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:g4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:p4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),a=Un().setTimeout(()=>{s(o)},h4.get());function l(){Un().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const v4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_4=500,w4=600,E4="_blank",I4="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function x4(t,e,n,r=_4,i=w4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},v4),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=zI(u)?E4:n),UI(u)&&(e=e||I4,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(qN(u)&&a!=="_self")return T4(e||"",a),new t_(null);const h=window.open(e||"",a,c);J(h,t,"popup-blocked");try{h.focus()}catch{}return new t_(h)}function T4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const S4="__/auth/handler",C4="emulator/auth/handler",A4=encodeURIComponent("fac");async function n_(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yi,eventId:i};if(e instanceof XI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof il){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${A4}=${encodeURIComponent(l)}`:"";return`${k4(t)}?${tl(a).slice(1)}${u}`}function k4({config:t}){return t.emulator?Ig(t,C4):`https://${t.authDomain}/${S4}`}/**
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
 */const Qd="webStorageSupport";class P4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ix,this._completeRedirectFn=ZO,this._overrideRedirectResult=YO}async _openPopup(e,n,r,i){var s;fr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,xp(),i);return x4(e,o,Ag())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await n_(e,n,r,xp(),i);return NO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await y4(e),r=new t4(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qd,{type:Qd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qd];o!==void 0&&n(!!o),xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=o4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GI()||Tg()||Eh()}}const R4=P4;var r_="@firebase/auth",i_="1.3.0";/**
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
 */class b4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function N4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function O4(t){ji(new si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KI(t)},u=new JN(r,i,s,l);return oO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ji(new si("auth-internal",e=>{const n=Ji(e.getProvider("auth").getImmediate());return(r=>new b4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(r_,i_,N4(t)),jn(r_,i_,"esm2017")}/**
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
 */const D4=5*60,L4=AI("authIdTokenMaxAge")||D4;let s_=null;const M4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>L4)return;const i=n==null?void 0:n.token;s_!==i&&(s_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function V4(t=_g()){const e=wh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sO(t,{popupRedirectResolver:R4,persistence:[UO,PO,ix]}),r=AI("authTokenSyncURL");if(r){const s=M4(r);TO(n,s,()=>s(n.currentUser)),xO(n,o=>s(o))}const i=TI("auth");return i&&aO(n,`http://${i}`),n}O4("Browser");var $4="firebase",j4="10.3.0";/**
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
 */jn($4,j4,"app");/**
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
 */const hx="firebasestorage.googleapis.com",F4="storageBucket",U4=2*60*1e3,z4=10*60*1e3;/**
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
 */class Kn extends Gn{constructor(e,n,r=0){super(Yd(e),`Firebase Storage: ${n} (${Yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Kn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Wn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Wn||(Wn={}));function Yd(t){return"storage/"+t}function B4(){const t="An unknown error occurred, please check the error payload for server response.";return new Kn(Wn.UNKNOWN,t)}function W4(){return new Kn(Wn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function q4(){return new Kn(Wn.CANCELED,"User canceled the upload/download.")}function H4(t){return new Kn(Wn.INVALID_URL,"Invalid URL '"+t+"'.")}function G4(t){return new Kn(Wn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function o_(t){return new Kn(Wn.INVALID_ARGUMENT,t)}function dx(){return new Kn(Wn.APP_DELETED,"The Firebase app was deleted.")}function K4(t){return new Kn(Wn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(r.path==="")return r;throw G4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),_={bucket:1,path:3},y=n===hx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${w}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:p,indices:_,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<v.length;E++){const T=v[E],S=T.regex.exec(e);if(S){const N=S[T.indices.bucket];let R=S[T.indices.path];R||(R=""),r=new _n(N,R),T.postModify(r);break}}if(r==null)throw H4(e);return r}}class Q4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Y4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...m){if(u){d();return}if(w){d(),c.call(null,w,...m);return}if(l()||o){d(),c.call(null,w,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let _=!1;function y(w){_||(_=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function X4(t){t(!1)}/**
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
 */function J4(t){return t!==void 0}function a_(t,e,n,r){if(r<e)throw o_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw o_(`Invalid value for '${t}'. Expected ${n} or less.`)}function Z4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function eD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class tD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,_)=>{this.resolve_=p,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Kl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===dc.NO_ERROR,l=s.getStatus();if(!a||eD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===dc.ABORT;r(!1,new Kl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Kl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());J4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=B4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?dx():q4();o(l)}else{const l=W4();o(l)}};this.canceled_?n(!1,new Kl(!1,null,!0)):this.backoffId_=Y4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&X4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function oD(t,e,n,r,i,s,o=!0){const a=Z4(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return iD(u,e),nD(u,n),rD(u,s),sD(u,r),new tD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function aD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class fc{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fc(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lD(this._location.path)}get storage(){return this._service}get parent(){const e=aD(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new fc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw K4(e)}}function l_(t,e){const n=e==null?void 0:e[F4];return n==null?null:_n.makeFromBucketSpec(n,t)}function uD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:kI(i,t.app.options.projectId))}class cD{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=hx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=U4,this._maxUploadRetryTime=z4,this._requests=new Set,i!=null?this._bucket=_n.makeFromBucketSpec(i,this._host):this._bucket=l_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=l_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){a_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Q4(dx());{const o=oD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const u_="@firebase/storage",c_="0.11.2";/**
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
 */const fx="storage";function hD(t=_g(),e){t=We(t);const r=wh(t,fx).getImmediate({identifier:e}),i=SI("storage");return i&&dD(r,...i),r}function dD(t,e,n,r={}){uD(t,e,n,r)}function fD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new cD(n,r,i,e,Yi)}function pD(){ji(new si(fx,fD,"PUBLIC").setMultipleInstances(!0)),jn(u_,c_,""),jn(u_,c_,"esm2017")}pD();var mD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Pg=Pg||{},ee=mD||self;function Th(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ol(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gD(t){return Object.prototype.hasOwnProperty.call(t,Xd)&&t[Xd]||(t[Xd]=++yD)}var Xd="closure_uid_"+(1e9*Math.random()>>>0),yD=0;function vD(t,e,n){return t.call.apply(t.bind,arguments)}function _D(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function It(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?It=vD:It=_D,It.apply(null,arguments)}function Ql(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pi(){this.s=this.s,this.o=this.o}var wD=0;pi.prototype.s=!1;pi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),wD!=0)&&gD(this)};pi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const px=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function h_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Th(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var ED=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",()=>{},e),ee.removeEventListener("test",()=>{},e)}catch{}return t}();function ba(t){return/^[\s\xa0]*$/.test(t)}function Sh(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function Dn(t){return Sh().indexOf(t)!=-1}function bg(t){return bg[" "](t),t}bg[" "]=function(){};function ID(t,e){var n=pL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xD=Dn("Opera"),Xs=Dn("Trident")||Dn("MSIE"),mx=Dn("Edge"),Sp=mx||Xs,gx=Dn("Gecko")&&!(Sh().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge"))&&!(Dn("Trident")||Dn("MSIE"))&&!Dn("Edge"),TD=Sh().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge");function yx(){var t=ee.document;return t?t.documentMode:void 0}var Cp;e:{var Jd="",Zd=function(){var t=Sh();if(gx)return/rv:([^\);]+)(\)|;)/.exec(t);if(mx)return/Edge\/([\d\.]+)/.exec(t);if(Xs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(TD)return/WebKit\/(\S+)/.exec(t);if(xD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zd&&(Jd=Zd?Zd[1]:""),Xs){var ef=yx();if(ef!=null&&ef>parseFloat(Jd)){Cp=String(ef);break e}}Cp=Jd}var Ap;if(ee.document&&Xs){var d_=yx();Ap=d_||parseInt(Cp,10)||void 0}else Ap=void 0;var SD=Ap;function Na(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gx){e:{try{bg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Na.$.h.call(this)}}it(Na,xt);var CD={2:"touch",3:"pen",4:"mouse"};Na.prototype.h=function(){Na.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var al="closure_listenable_"+(1e6*Math.random()|0),AD=0;function kD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++AD,this.fa=this.ia=!1}function Ch(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ng(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function vx(t){const e={};for(const n in t)e[n]=t[n];return e}const f_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _x(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<f_.length;s++)n=f_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ah(t){this.src=t,this.g={},this.h=0}Ah.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Pp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new kD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function kp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=px(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ch(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Og="closure_lm_"+(1e6*Math.random()|0),tf={};function wx(t,e,n,r,i){if(r&&r.once)return Ix(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wx(t,e[s],n,r,i);return null}return n=Mg(n),t&&t[al]?t.O(e,n,ol(r)?!!r.capture:!!r,i):Ex(t,e,n,!1,r,i)}function Ex(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ol(i)?!!i.capture:!!i,a=Lg(t);if(a||(t[Og]=a=new Ah(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=RD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ED||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Tx(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RD(){function t(n){return e.call(t.src,t.listener,n)}const e=bD;return t}function Ix(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ix(t,e[s],n,r,i);return null}return n=Mg(n),t&&t[al]?t.P(e,n,ol(r)?!!r.capture:!!r,i):Ex(t,e,n,!0,r,i)}function xx(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)xx(t,e[s],n,r,i);else r=ol(r)?!!r.capture:!!r,n=Mg(n),t&&t[al]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Pp(s,n,r,i),-1<n&&(Ch(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pp(e,n,r,i)),(n=-1<t?e[t]:null)&&Dg(n))}function Dg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[al])kp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Tx(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Lg(e))?(kp(n,t),n.h==0&&(n.src=null,e[Og]=null)):Ch(t)}}}function Tx(t){return t in tf?tf[t]:tf[t]="on"+t}function bD(t,e){if(t.fa)t=!0;else{e=new Na(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Dg(t),t=n.call(r,e)}return t}function Lg(t){return t=t[Og],t instanceof Ah?t:null}var nf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mg(t){return typeof t=="function"?t:(t[nf]||(t[nf]=function(e){return t.handleEvent(e)}),t[nf])}function nt(){pi.call(this),this.i=new Ah(this),this.S=this,this.J=null}it(nt,pi);nt.prototype[al]=!0;nt.prototype.removeEventListener=function(t,e,n,r){xx(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var i=e;e=new xt(r,t),_x(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Yl(o,r,!0,e)&&i}if(o=e.g=t,i=Yl(o,r,!0,e)&&i,i=Yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Yl(o,r,!1,e)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ch(n[r]);delete t.g[e],t.h--}}this.J=null};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&kp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vg=ee.JSON.stringify;class ND{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function OD(){var t=$g;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DD{constructor(){this.h=this.g=null}add(e,n){const r=Sx.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Sx=new ND(()=>new LD,t=>t.reset());class LD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function VD(t){ee.setTimeout(()=>{throw t},0)}let Oa,Da=!1,$g=new DD,Cx=()=>{const t=ee.Promise.resolve(void 0);Oa=()=>{t.then($D)}};var $D=()=>{for(var t;t=OD();){try{t.h.call(t.g)}catch(n){VD(n)}var e=Sx;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Da=!1};function kh(t,e){nt.call(this),this.h=t||1,this.g=e||ee,this.j=It(this.qb,this),this.l=Date.now()}it(kh,nt);$=kh.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(jg(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){kh.$.N.call(this),jg(this),delete this.g};function Fg(t,e,n){if(typeof t=="function")n&&(t=It(t,n));else if(t&&typeof t.handleEvent=="function")t=It(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function Ax(t){t.g=Fg(()=>{t.g=null,t.i&&(t.i=!1,Ax(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jD extends pi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ax(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function La(t){pi.call(this),this.h=t,this.g={}}it(La,pi);var p_=[];function kx(t,e,n,r){Array.isArray(n)||(n&&(p_[0]=n.toString()),n=p_);for(var i=0;i<n.length;i++){var s=wx(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Px(t){Ng(t.g,function(e,n){this.g.hasOwnProperty(n)&&Dg(e)},t),t.g={}}La.prototype.N=function(){La.$.N.call(this),Px(this)};La.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ph(){this.g=!0}Ph.prototype.Ea=function(){this.g=!1};function FD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function UD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function xs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BD(t,n)+(r?" "+r:"")})}function zD(t,e){t.info(function(){return"TIMEOUT: "+e})}Ph.prototype.info=function(){};function BD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vg(n)}catch{return e}}var Zi={},m_=null;function Rh(){return m_=m_||new nt}Zi.Ta="serverreachability";function Rx(t){xt.call(this,Zi.Ta,t)}it(Rx,xt);function Ma(t){const e=Rh();ht(e,new Rx(e))}Zi.STAT_EVENT="statevent";function bx(t,e){xt.call(this,Zi.STAT_EVENT,t),this.stat=e}it(bx,xt);function Rt(t){const e=Rh();ht(e,new bx(e,t))}Zi.Ua="timingevent";function Nx(t,e){xt.call(this,Zi.Ua,t),this.size=e}it(Nx,xt);function ll(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var bh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ox={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ug(){}Ug.prototype.h=null;function g_(t){return t.h||(t.h=t.i())}function Dx(){}var ul={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zg(){xt.call(this,"d")}it(zg,xt);function Bg(){xt.call(this,"c")}it(Bg,xt);var Rp;function Nh(){}it(Nh,Ug);Nh.prototype.g=function(){return new XMLHttpRequest};Nh.prototype.i=function(){return{}};Rp=new Nh;function cl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new La(this),this.P=WD,t=Sp?125:void 0,this.V=new kh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Lx}function Lx(){this.i=null,this.g="",this.h=!1}var WD=45e3,bp={},pc={};$=cl.prototype;$.setTimeout=function(t){this.P=t};function Np(t,e,n){t.L=1,t.v=Dh(pr(e)),t.s=n,t.S=!0,Mx(t,null)}function Mx(t,e){t.G=Date.now(),hl(t),t.A=pr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Wx(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Lx,t.g=hT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jD(It(t.Pa,t,t.g),t.O)),kx(t.U,t.g,"readystatechange",t.nb),e=t.I?vx(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ma(),FD(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&Ln(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const c=Ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Sp||this.g&&(this.h.h||this.g.ja()||w_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ma(3):Ma(2)),Oh(this);var n=this.g.da();this.ca=n;t:if(Vx(this)){var r=w_(this.g);t="";var i=r.length,s=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ti(this),sa(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,UD(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ba(a)){var u=a;break t}}u=null}if(n=u)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Op(this,n);else{this.i=!1,this.o=3,Rt(12),Ti(this),sa(this);break e}}this.S?($x(this,c,o),Sp&&this.i&&c==3&&(kx(this.U,this.V,"tick",this.mb),this.V.start())):(xs(this.j,this.m,o,null),Op(this,o)),c==4&&Ti(this),this.i&&!this.J&&(c==4?aT(this.l,this):(this.i=!1,hl(this)))}else hL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),Ti(this),sa(this)}}}catch{}finally{}};function Vx(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function $x(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=qD(t,n),i==pc){e==4&&(t.o=4,Rt(14),r=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==bp){t.o=4,Rt(15),xs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xs(t.j,t.m,i,null),Op(t,i);Vx(t)&&i!=pc&&i!=bp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qg(e),e.M=!0,Rt(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),Ti(t),sa(t))}$.mb=function(){if(this.g){var t=Ln(this.g),e=this.g.ja();this.C<e.length&&(Oh(this),$x(this,t,e),this.i&&t!=4&&hl(this))}};function qD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pc:(n=Number(e.substring(n,r)),isNaN(n)?bp:(r+=1,r+n>e.length?pc:(e=e.slice(r,r+n),t.C=r+n,e)))}$.cancel=function(){this.J=!0,Ti(this)};function hl(t){t.Y=Date.now()+t.P,jx(t,t.P)}function jx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ll(It(t.lb,t),e)}function Oh(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zD(this.j,this.A),this.L!=2&&(Ma(),Rt(17)),Ti(this),this.o=2,sa(this)):jx(this,this.Y-t)};function sa(t){t.l.H==0||t.J||aT(t.l,t)}function Ti(t){Oh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,jg(t.V),Px(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Op(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Dp(n.i,t))){if(!t.K&&Dp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)yc(n),$h(n);else break e;Kg(n),Rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ll(It(n.ib,n),6e3));if(1>=Gx(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Si(n,11)}else if((t.K||n.g==t)&&yc(n),!ba(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wg(s,s.h),s.h=null))}if(r.F){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,ke(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cT(r,r.J?r.pa:null,r.Y),o.K){Kx(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Oh(a),hl(a)),r.g=o}else sT(r);0<n.j.length&&jh(n)}else u[0]!="stop"&&u[0]!="close"||Si(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Si(n,7):Gg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ma(4)}catch{}}function HD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Th(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Th(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Fx(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Th(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GD(t),r=HD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Ux=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bi){this.h=t.h,mc(this,t.j),this.s=t.s,this.g=t.g,gc(this,t.m),this.l=t.l;var e=t.i,n=new Va;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),y_(this,n),this.o=t.o}else t&&(e=String(t).match(Ux))?(this.h=!1,mc(this,e[1]||"",!0),this.s=Fo(e[2]||""),this.g=Fo(e[3]||"",!0),gc(this,e[4]),this.l=Fo(e[5]||"",!0),y_(this,e[6]||"",!0),this.o=Fo(e[7]||"")):(this.h=!1,this.i=new Va(null,this.h))}bi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Uo(e,v_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Uo(e,v_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Uo(n,n.charAt(0)=="/"?XD:YD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Uo(n,ZD)),t.join("")};function pr(t){return new bi(t)}function mc(t,e,n){t.j=n?Fo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function y_(t,e,n){e instanceof Va?(t.i=e,eL(t.i,t.h)):(n||(e=Uo(e,JD)),t.i=new Va(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function Dh(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Uo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var v_=/[#\/\?@]/g,YD=/[#\?:]/g,XD=/[#\?]/g,JD=/[#\?@]/g,ZD=/#/g;function Va(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mi(t){t.g||(t.g=new Map,t.h=0,t.i&&KD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Va.prototype;$.add=function(t,e){mi(this),this.i=null,t=po(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function zx(t,e){mi(t),e=po(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Bx(t,e){return mi(t),e=po(t,e),t.g.has(e)}$.forEach=function(t,e){mi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.ta=function(){mi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.Z=function(t){mi(this);let e=[];if(typeof t=="string")Bx(this,t)&&(e=e.concat(this.g.get(po(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return mi(this),this.i=null,t=po(this,t),Bx(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Wx(t,e,n){zx(t,e),0<n.length&&(t.i=null,t.g.set(po(t,e),Rg(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function po(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function eL(t,e){e&&!t.j&&(mi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(zx(this,r),Wx(this,i,n))},t)),t.j=e}var tL=class{constructor(t,e){this.g=t,this.map=e}};function qx(t){this.l=t||nL,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nL=10;function Hx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gx(t){return t.h?1:t.g?t.g.size:0}function Dp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wg(t,e){t.g?t.g.add(e):t.h=e}function Kx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qx.prototype.cancel=function(){if(this.i=Qx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qx(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Rg(t.i)}var rL=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function iL(){this.g=new rL}function sL(t,e,n){const r=n||"";try{Fx(t,function(i,s){let o=i;ol(i)&&(o=Vg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oL(t,e){const n=new Ph;if(ee.Image){const r=new Image;r.onload=Ql(Xl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ql(Xl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ql(Xl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ql(Xl,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Lh(t){this.l=t.fc||null,this.j=t.ob||!1}it(Lh,Ug);Lh.prototype.g=function(){return new Mh(this.l,this.j)};Lh.prototype.i=function(t){return function(){return t}}({});function Mh(t,e){nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=qg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(Mh,nt);var qg=0;$=Mh.prototype;$.open=function(t,e){if(this.readyState!=qg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$a(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dl(this)),this.readyState=qg};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$a(this)),this.g&&(this.readyState=3,$a(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yx(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Yx(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?dl(this):$a(this),this.readyState==3&&Yx(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,dl(this))};$.Ya=function(t){this.g&&(this.response=t,dl(this))};$.ka=function(){this.g&&dl(this)};function dl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$a(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $a(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aL=ee.JSON.parse;function Fe(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xx,this.L=this.M=!1}it(Fe,nt);var Xx="",lL=/^https?$/i,uL=["POST","PUT"];$=Fe.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Rp.g(),this.C=this.u?g_(this.u):g_(Rp),this.g.onreadystatechange=It(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){__(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ee.FormData&&t instanceof ee.FormData,!(0<=px(uL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{eT(this),0<this.B&&((this.L=cL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=It(this.ua,this)):this.A=Fg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){__(this,s)}};function cL(t){return Xs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Pg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function __(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jx(t),Vh(t)}function Jx(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),Vh(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vh(this,!0)),Fe.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?Zx(this):this.kb())};$.kb=function(){Zx(this)};function Zx(t){if(t.h&&typeof Pg<"u"&&(!t.C[1]||Ln(t)!=4||t.da()!=2)){if(t.v&&Ln(t)==4)Fg(t.La,0,t);else if(ht(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Ux)[1]||null;!i&&ee.self&&ee.self.location&&(i=ee.self.location.protocol.slice(0,-1)),r=!lL.test(i?i.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var s=2<Ln(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Jx(t)}}finally{Vh(t)}}}}function Vh(t,e){if(t.g){eT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function eT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function Ln(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aL(e)}};function w_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Xx:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hL(t){const e={};t=(t.g&&2<=Ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ba(t[r]))continue;var n=MD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}PD(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tT(t){let e="";return Ng(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function bo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nT(t){this.Ga=0,this.j=[],this.l=new Ph,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bo("baseRetryDelayMs",5e3,t),this.hb=bo("retryDelaySeedMs",1e4,t),this.eb=bo("forwardChannelMaxRetries",2,t),this.xa=bo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qx(t&&t.concurrentRequestLimit),this.Ja=new iL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=nT.prototype;$.ra=8;$.H=1;function Gg(t){if(rT(t),t.H==3){var e=t.W++,n=pr(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),fl(t,n),e=new cl(t,t.l,e),e.L=2,e.v=Dh(pr(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=hT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),hl(e)}uT(t)}function $h(t){t.g&&(Qg(t),t.g.cancel(),t.g=null)}function rT(t){$h(t),t.u&&(ee.clearTimeout(t.u),t.u=null),yc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function jh(t){if(!Hx(t.i)&&!t.m){t.m=!0;var e=t.Na;Oa||Cx(),Da||(Oa(),Da=!0),$g.add(e,t),t.C=0}}function dL(t,e){return Gx(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ll(It(t.Na,t,e),lT(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new cl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=vx(s),_x(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=iT(this,i,e),n=pr(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),fl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(tT(s)))+"&"+e:this.o&&Hg(n,this.o,s)),Wg(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,Np(i,n,null)):Np(i,n,e),this.H=2}}else this.H==3&&(t?E_(this,t):this.j.length==0||Hx(this.i)||E_(this))};function E_(t,e){var n;e?n=e.m:n=t.W++;const r=pr(t.I);ke(r,"SID",t.K),ke(r,"RID",n),ke(r,"AID",t.V),fl(t,r),t.o&&t.s&&Hg(r,t.o,t.s),n=new cl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=iT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wg(t.i,n),Np(n,r,e)}function fl(t,e){t.na&&Ng(t.na,function(n,r){ke(e,r,n)}),t.h&&Fx({},function(n,r){ke(e,r,n)})}function iT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?It(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{sL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function sT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Oa||Cx(),Da||(Oa(),Da=!0),$g.add(e,t),t.A=0}}function Kg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ll(It(t.Ma,t),lT(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,oT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ll(It(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Rt(10),$h(this),oT(this))};function Qg(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function oT(t){t.g=new cl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=pr(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),fl(t,e),t.o&&t.s&&Hg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Dh(pr(e)),n.s=null,n.S=!0,Mx(n,t)}$.ib=function(){this.v!=null&&(this.v=null,$h(this),Kg(this),Rt(19))};function yc(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function aT(t,e){var n=null;if(t.g==e){yc(t),Qg(t),t.g=null;var r=2}else if(Dp(t.i,e))n=e.F,Kx(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Rh(),ht(r,new Nx(r,n)),jh(t)}else sT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&dL(t,e)||r==2&&Kg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Si(t,5);break;case 4:Si(t,10);break;case 3:Si(t,6);break;default:Si(t,2)}}}function lT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Si(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=It(t.pb,t);n||(n=new bi("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||mc(n,"https"),Dh(n)),oL(n.toString(),r)}else Rt(2);t.H=0,t.h&&t.h.za(e),uT(t),rT(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Rt(2)):(this.l.info("Failed to ping google.com"),Rt(1))};function uT(t){if(t.H=0,t.ma=[],t.h){const e=Qx(t.i);(e.length!=0||t.j.length!=0)&&(h_(t.ma,e),h_(t.ma,t.j),t.i.i.length=0,Rg(t.j),t.j.length=0),t.h.ya()}}function cT(t,e,n){var r=n instanceof bi?pr(n):new bi(n);if(r.g!="")e&&(r.g=e+"."+r.g),gc(r,r.m);else{var i=ee.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new bi(null);r&&mc(s,r),e&&(s.g=e),i&&gc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ke(r,n,e),ke(r,"VER",t.ra),fl(t,r),r}function hT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Fe(new Lh({ob:!0})):new Fe(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function dT(){}$=dT.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function vc(){if(Xs&&!(10<=Number(SD)))throw Error("Environmental error: no available transport.")}vc.prototype.g=function(t,e){return new Kt(t,e)};function Kt(t,e){nt.call(this),this.g=new nT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ba(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ba(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mo(this)}it(Kt,nt);Kt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cT(t,null,t.Y),jh(t)};Kt.prototype.close=function(){Gg(this.g)};Kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vg(t),t=n);e.j.push(new tL(e.fb++,t)),e.H==3&&jh(e)};Kt.prototype.N=function(){this.g.h=null,delete this.j,Gg(this.g),delete this.g,Kt.$.N.call(this)};function fT(t){zg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(fT,zg);function pT(){Bg.call(this),this.status=1}it(pT,Bg);function mo(t){this.g=t}it(mo,dT);mo.prototype.Ba=function(){ht(this.g,"a")};mo.prototype.Aa=function(t){ht(this.g,new fT(t))};mo.prototype.za=function(t){ht(this.g,new pT)};mo.prototype.ya=function(){ht(this.g,"b")};function fL(){this.blockSize=-1}function Tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(Tn,fL);Tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)rf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){rf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){rf(this,r),i=0;break}}this.h=i,this.i+=e};Tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ee(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var pL={};function Yg(t){return-128<=t&&128>t?ID(t,function(e){return new Ee([e|0],0>e?-1:0)}):new Ee([t|0],0>t?-1:0)}function Mn(t){if(isNaN(t)||!isFinite(t))return Ns;if(0>t)return ut(Mn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lp;return new Ee(e,0)}function mT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ut(mT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Mn(Math.pow(e,8)),r=Ns,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Mn(Math.pow(e,s)),r=r.R(s).add(Mn(o))):(r=r.R(n),r=r.add(Mn(o)))}return r}var Lp=4294967296,Ns=Yg(0),Mp=Yg(1),I_=Yg(16777216);$=Ee.prototype;$.ea=function(){if(tn(this))return-ut(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lp+r)*e,e*=Lp}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(or(this))return"0";if(tn(this))return"-"+ut(this).toString(t);for(var e=Mn(Math.pow(t,6)),n=this,r="";;){var i=wc(n,e).g;n=_c(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,or(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function or(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tn(t){return t.h==-1}$.X=function(t){return t=_c(this,t),tn(t)?-1:or(t)?0:1};function ut(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ee(n,~t.h).add(Mp)}$.abs=function(){return tn(this)?ut(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Ee(n,n[n.length-1]&-2147483648?-1:0)};function _c(t,e){return t.add(ut(e))}$.R=function(t){if(or(this)||or(t))return Ns;if(tn(this))return tn(t)?ut(this).R(ut(t)):ut(ut(this).R(t));if(tn(t))return ut(this.R(ut(t)));if(0>this.X(I_)&&0>t.X(I_))return Mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Jl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Jl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Jl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Jl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ee(n,0)};function Jl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function No(t,e){this.g=t,this.h=e}function wc(t,e){if(or(e))throw Error("division by zero");if(or(t))return new No(Ns,Ns);if(tn(t))return e=wc(ut(t),e),new No(ut(e.g),ut(e.h));if(tn(e))return e=wc(t,ut(e)),new No(ut(e.g),e.h);if(30<t.g.length){if(tn(t)||tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Mp,r=e;0>=r.X(t);)n=x_(n),r=x_(r);var i=ss(n,1),s=ss(r,1);for(r=ss(r,2),n=ss(n,2);!or(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ss(r,1),n=ss(n,1)}return e=_c(t,i.R(e)),new No(i,e)}for(i=Ns;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Mn(n),o=s.R(e);tn(o)||0<o.X(t);)n-=r,s=Mn(n),o=s.R(e);or(s)&&(s=Mp),i=i.add(s),t=_c(t,o)}return new No(i,t)}$.gb=function(t){return wc(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ee(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ee(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ee(n,this.h^t.h)};function x_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ee(n,t.h)}function ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Ee(i,t.h)}vc.prototype.createWebChannel=vc.prototype.g;Kt.prototype.send=Kt.prototype.u;Kt.prototype.open=Kt.prototype.m;Kt.prototype.close=Kt.prototype.close;bh.NO_ERROR=0;bh.TIMEOUT=8;bh.HTTP_ERROR=6;Ox.COMPLETE="complete";Dx.EventType=ul;ul.OPEN="a";ul.CLOSE="b";ul.ERROR="c";ul.MESSAGE="d";nt.prototype.listen=nt.prototype.O;Fe.prototype.listenOnce=Fe.prototype.P;Fe.prototype.getLastError=Fe.prototype.Sa;Fe.prototype.getLastErrorCode=Fe.prototype.Ia;Fe.prototype.getStatus=Fe.prototype.da;Fe.prototype.getResponseJson=Fe.prototype.Wa;Fe.prototype.getResponseText=Fe.prototype.ja;Fe.prototype.send=Fe.prototype.ha;Fe.prototype.setWithCredentials=Fe.prototype.Oa;Tn.prototype.digest=Tn.prototype.l;Tn.prototype.reset=Tn.prototype.reset;Tn.prototype.update=Tn.prototype.j;Ee.prototype.add=Ee.prototype.add;Ee.prototype.multiply=Ee.prototype.R;Ee.prototype.modulo=Ee.prototype.gb;Ee.prototype.compare=Ee.prototype.X;Ee.prototype.toNumber=Ee.prototype.ea;Ee.prototype.toString=Ee.prototype.toString;Ee.prototype.getBits=Ee.prototype.D;Ee.fromNumber=Mn;Ee.fromString=mT;var mL=function(){return new vc},gL=function(){return Rh()},sf=bh,yL=Ox,vL=Zi,T_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Zl=Dx,_L=Fe,wL=Tn,Os=Ee;const S_="@firebase/firestore";/**
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
 */const zi=new yg("@firebase/firestore");function C_(){return zi.logLevel}function W(t,...e){if(zi.logLevel<=me.DEBUG){const n=e.map(Xg);zi.debug(`Firestore (${go}): ${t}`,...n)}}function mr(t,...e){if(zi.logLevel<=me.ERROR){const n=e.map(Xg);zi.error(`Firestore (${go}): ${t}`,...n)}}function Js(t,...e){if(zi.logLevel<=me.WARN){const n=e.map(Xg);zi.warn(`Firestore (${go}): ${t}`,...n)}}function Xg(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${go}) INTERNAL ASSERTION FAILED: `+t;throw mr(e),new Error(e)}function Re(t,e){t||Z()}function ie(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class IL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xL{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new gT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new yt(e)}}class TL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class AL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new CL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function kL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class yT{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Je(0,0))}static max(){return new ne(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ja{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const PL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends ja{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return PL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Se.fromString(e))}static fromName(e){return new q(Se.fromString(e).popFirst(5))}static empty(){return new q(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Se(e.slice()))}}function RL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new oi(i,q.empty(),e)}function bL(t){return new oi(t.readTime,t.key,-1)}class oi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new oi(ne.min(),q.empty(),-1)}static max(){return new oi(ne.max(),q.empty(),-1)}}function NL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const OL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pl(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==OL)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ml(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Jg.ae=-1;function Fh(t){return t==null}function Ec(t){return t===0&&1/t==-1/0}function LL(t){return typeof t=="number"&&Number.isInteger(t)&&!Ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function A_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new _T("Invalid base64 string: "+s):s}}(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const ML=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(t){if(Re(!!t),typeof t=="string"){let e=0;const n=ML.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */function Uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zg(t){const e=t.mapValue.fields.__previous_value__;return Uh(e)?Zg(e):e}function Fa(t){const e=ai(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class VL{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ua{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ua("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ua&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const tu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uh(t)?4:$L(t)?9007199254740991:10:Z()}function qn(t,e){if(t===e)return!0;const n=Wi(t);if(n!==Wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ai(i.timestampValue),a=ai(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Bi(i.bytesValue).isEqual(Bi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return He(i.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return He(i.integerValue)===He(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=He(i.doubleValue),a=He(s.doubleValue);return o===a?Ec(o)===Ec(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(A_(o)!==A_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!qn(o[l],a[l])))return!1;return!0}(t,e);default:return Z()}}function za(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function eo(t,e){if(t===e)return 0;const n=Wi(t),r=Wi(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=He(s.integerValue||s.doubleValue),l=He(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return P_(t.timestampValue,e.timestampValue);case 4:return P_(Fa(t),Fa(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Bi(s),l=Bi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ye(a[u],l[u]);if(c!==0)return c}return ye(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ye(He(s.latitude),He(o.latitude));return a!==0?a:ye(He(s.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=eo(a[u],l[u]);if(c)return c}return ye(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===tu.mapValue&&o===tu.mapValue)return 0;if(s===tu.mapValue)return 1;if(o===tu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ye(l[h],c[h]);if(d!==0)return d;const p=eo(a[l[h]],u[c[h]]);if(p!==0)return p}return ye(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Z()}}function P_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=ai(t),r=ai(e),i=ye(n.seconds,r.seconds);return i!==0?i:ye(n.nanos,r.nanos)}function to(t){return Vp(t)}function Vp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ai(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Bi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Vp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Vp(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Ic(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $p(t){return!!t&&"integerValue"in t}function ey(t){return!!t&&"arrayValue"in t}function R_(t){return!!t&&"nullValue"in t}function b_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function oa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $L(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oa(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=oa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){es(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(oa(this.value))}}function wT(t){const e=[];return es(t.fields,(n,r)=>{const i=new wt([n]);if(Iu(r)){const s=wT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
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
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,ne.min(),ne.min(),ne.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,ne.min(),ne.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,ne.min(),ne.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class no{constructor(e,n){this.position=e,this.inclusive=n}}function N_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=eo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function O_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ds{constructor(e,n="asc"){this.field=e,this.dir=n}}function jL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ET{}class Ke extends ET{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UL(e,n,r):n==="array-contains"?new WL(e,r):n==="in"?new qL(e,r):n==="not-in"?new HL(e,r):n==="array-contains-any"?new GL(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zL(e,r):new BL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(eo(n,this.value)):n!==null&&Wi(this.value)===Wi(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sn extends ET{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Sn(e,n)}matches(e){return IT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function IT(t){return t.op==="and"}function xT(t){return FL(t)&&IT(t)}function FL(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function jp(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+to(t.value);if(xT(t))return t.filters.map(e=>jp(e)).join(",");{const e=t.filters.map(n=>jp(n)).join(",");return`${t.op}(${e})`}}function TT(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&qn(r.value,i.value)}(t,e):t instanceof Sn?function(r,i){return i instanceof Sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&TT(o,i.filters[a]),!0):!1}(t,e):void Z()}function ST(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${to(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(ST).join(" ,")+"}"}(t):"Filter"}class UL extends Ke{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class zL extends Ke{constructor(e,n){super(e,"in",n),this.keys=CT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BL extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=CT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function CT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class WL extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ey(n)&&za(n.arrayValue,this.value)}}class qL extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&za(this.value.arrayValue,n)}}class HL extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!za(this.value.arrayValue,n)}}class GL extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ey(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>za(this.value.arrayValue,r))}}/**
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
 */class KL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function D_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KL(t,e,n,r,i,s,o)}function ty(t){const e=ie(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Fh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>to(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>to(r)).join(",")),e.he=n}return e.he}function ny(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!TT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!O_(t.startAt,e.startAt)&&O_(t.endAt,e.endAt)}function Fp(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ts{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function QL(t,e,n,r,i,s,o,a){return new ts(t,e,n,r,i,s,o,a)}function zh(t){return new ts(t)}function L_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ry(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function iy(t){return t.collectionGroup!==null}function Ls(t){const e=ie(t);if(e.Pe===null){e.Pe=[];const n=Bh(e),r=ry(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ds(n)),e.Pe.push(new Ds(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ds(wt.keyField(),s))}}}return e.Pe}function gr(t){const e=ie(t);return e.Ie||(e.Ie=YL(e,Ls(t))),e.Ie}function YL(t,e){if(t.limitType==="F")return D_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ds(i.field,s)});const n=t.endAt?new no(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new no(t.startAt.position,t.startAt.inclusive):null;return D_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Up(t,e){e.getFirstInequalityField(),Bh(t);const n=t.filters.concat([e]);return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xc(t,e,n){return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wh(t,e){return ny(gr(t),gr(e))&&t.limitType===e.limitType}function AT(t){return`${ty(gr(t))}|lt:${t.limitType}`}function zp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ST(i)).join(", ")}]`),Fh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>to(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>to(i)).join(",")),`Target(${r})`}(gr(t))}; limitType=${t.limitType})`}function qh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=N_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ls(r),i)||r.endAt&&!function(o,a,l){const u=N_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ls(r),i))}(t,e)}function XL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kT(t){return(e,n)=>{let r=!1;for(const i of Ls(t)){const s=JL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function JL(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?eo(l,u):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */const ZL=new Ve(q.comparator);function yr(){return ZL}const PT=new Ve(q.comparator);function zo(...t){let e=PT;for(const n of t)e=e.insert(n.key,n);return e}function RT(t){let e=PT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ci(){return aa()}function bT(){return aa()}function aa(){return new yo(t=>t.toString(),(t,e)=>t.isEqual(e))}const e5=new Ve(q.comparator),t5=new Tt(q.comparator);function le(...t){let e=t5;for(const n of t)e=e.add(n);return e}const n5=new Tt(ye);function r5(){return n5}/**
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
 */function NT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ec(e)?"-0":e}}function OT(t){return{integerValue:""+t}}function i5(t,e){return LL(e)?OT(e):NT(t,e)}/**
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
 */class Hh{constructor(){this._=void 0}}function s5(t,e,n){return t instanceof Tc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Uh(s)&&(s=Zg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ba?LT(t,e):t instanceof Wa?MT(t,e):function(i,s){const o=DT(i,s),a=M_(o)+M_(i.Ee);return $p(o)&&$p(i.Ee)?OT(a):NT(i.serializer,a)}(t,e)}function o5(t,e,n){return t instanceof Ba?LT(t,e):t instanceof Wa?MT(t,e):n}function DT(t,e){return t instanceof Sc?function(r){return $p(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Tc extends Hh{}class Ba extends Hh{constructor(e){super(),this.elements=e}}function LT(t,e){const n=VT(e);for(const r of t.elements)n.some(i=>qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Wa extends Hh{constructor(e){super(),this.elements=e}}function MT(t,e){let n=VT(e);for(const r of t.elements)n=n.filter(i=>!qn(i,r));return{arrayValue:{values:n}}}class Sc extends Hh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function M_(t){return He(t.integerValue||t.doubleValue)}function VT(t){return ey(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function a5(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ba&&i instanceof Ba||r instanceof Wa&&i instanceof Wa?Zs(r.elements,i.elements,qn):r instanceof Sc&&i instanceof Sc?qn(r.Ee,i.Ee):r instanceof Tc&&i instanceof Tc}(t.transform,e.transform)}class l5{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gh{}function $T(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sy(t.key,sn.none()):new gl(t.key,t.data,sn.none());{const n=t.data,r=Mt.empty();let i=new Tt(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gi(t.key,r,new qt(i.toArray()),sn.none())}}function u5(t,e,n){t instanceof gl?function(i,s,o){const a=i.value.clone(),l=$_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof gi?function(i,s,o){if(!xu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=$_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(jT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function la(t,e,n,r){return t instanceof gl?function(s,o,a,l){if(!xu(s.precondition,o))return a;const u=s.value.clone(),c=j_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof gi?function(s,o,a,l){if(!xu(s.precondition,o))return a;const u=j_(s.fieldTransforms,l,o),c=o.data;return c.setAll(jT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return xu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function c5(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=DT(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function V_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zs(r,i,(s,o)=>a5(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gl extends Gh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gi extends Gh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function jT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $_(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,o5(o,a,n[i]))}return r}function j_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,s5(s,o,e))}return r}class sy extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h5 extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class d5{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&u5(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=la(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=$T(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>V_(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>V_(n,r))}}class oy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Re(e.mutations.length===r.length);let i=function(){return e5}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new oy(e,n,r,i)}}/**
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
 */class f5{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class p5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,de;function m5(t){switch(t){default:return Z();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function FT(t){if(t===void 0)return mr("GRPC error has no .code"),C.UNKNOWN;switch(t){case qe.OK:return C.OK;case qe.CANCELLED:return C.CANCELLED;case qe.UNKNOWN:return C.UNKNOWN;case qe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case qe.INTERNAL:return C.INTERNAL;case qe.UNAVAILABLE:return C.UNAVAILABLE;case qe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case qe.NOT_FOUND:return C.NOT_FOUND;case qe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case qe.ABORTED:return C.ABORTED;case qe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case qe.DATA_LOSS:return C.DATA_LOSS;default:return Z()}}(de=qe||(qe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function g5(){return new TextEncoder}/**
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
 */const y5=new Os([4294967295,4294967295],0);function F_(t){const e=g5().encode(t),n=new wL;return n.update(e),new Uint8Array(n.digest())}function U_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Os([n,r],0),new Os([i,s],0)]}class ay{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bo(`Invalid padding: ${n}`);if(r<0)throw new Bo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bo(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Os.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Os.fromNumber(r)));return i.compare(y5)===1&&(i=new Os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=F_(e),[r,i]=U_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ay(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=F_(e),[r,i]=U_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,yl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kh(ne.min(),i,new Ve(ye),yr(),le())}}class yl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yl(r,n,le(),le(),le())}}/**
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
 */class Tu{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class UT{constructor(e,n){this.targetId=e,this.ye=n}}class zT{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class z_{constructor(){this.we=0,this.Se=W_(),this.be=kt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=le(),n=le(),r=le();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new yl(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=W_()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class v5{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=yr(),this.Ue=B_(),this.We=new Ve(ye)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Fp(s))if(r===0){const o=new q(s.path);this.je(n,o,_t.newNoDocument(o,ne.min()))}else Re(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Bi(r).toUint8Array()}catch(l){if(l instanceof _T)return Js("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ay(o,i,s)}catch(l){return Js(l instanceof Bo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Fp(a.target)){const l=new q(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,_t.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=le();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Kh(e,n,this.We,this.$e,r);return this.$e=yr(),this.Ue=B_(),this.We=new Ve(ye),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new z_,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Tt(ye),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new z_),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function B_(){return new Ve(q.comparator)}function W_(){return new Ve(q.comparator)}const _5=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),w5=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),E5=(()=>({and:"AND",or:"OR"}))();class I5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bp(t,e){return t.useProto3Json||Fh(e)?e:{value:e}}function Cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function x5(t,e){return Cc(t,e.toTimestamp())}function zn(t){return Re(!!t),ne.fromTimestamp(function(n){const r=ai(n);return new Je(r.seconds,r.nanos)}(t))}function ly(t,e){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function WT(t){const e=Se.fromString(t);return Re(KT(e)),e}function Wp(t,e){return ly(t.databaseId,e.path)}function of(t,e){const n=WT(e);if(n.get(1)!==t.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(qT(n))}function qp(t,e){return ly(t.databaseId,e)}function T5(t){const e=WT(t);return e.length===4?Se.emptyPath():qT(e)}function Hp(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qT(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function q_(t,e,n){return{name:Wp(t,e),fields:n.value.mapValue.fields}}function S5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Re(c===void 0||typeof c=="string"),kt.fromBase64String(c||"")):(Re(c===void 0||c instanceof Uint8Array),kt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?C.UNKNOWN:FT(u.code);return new V(c,u.message||"")}(o);n=new zT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=of(t,r.document.name),s=zn(r.document.updateTime),o=r.document.createTime?zn(r.document.createTime):ne.min(),a=new Mt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Tu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=of(t,r.document),s=r.readTime?zn(r.readTime):ne.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=of(t,r.document),s=r.removedTargetIds||[];n=new Tu([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new p5(i,s),a=r.targetId;n=new UT(a,o)}}return n}function C5(t,e){let n;if(e instanceof gl)n={update:q_(t,e.key,e.value)};else if(e instanceof sy)n={delete:Wp(t,e.key)};else if(e instanceof gi)n={update:q_(t,e.key,e.data),updateMask:L5(e.fieldMask)};else{if(!(e instanceof h5))return Z();n={verify:Wp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Tc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ba)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:x5(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function A5(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?zn(i.updateTime):zn(s);return o.isEqual(ne.min())&&(o=zn(s)),new l5(o,i.transformResults||[])}(n,e))):[]}function k5(t,e){return{documents:[qp(t,e.path)]}}function P5(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=qp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return GT(Sn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:as(h.field),direction:N5(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Bp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function R5(t){let e=T5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=HT(h);return d instanceof Sn&&xT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Ds(ls(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Fh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new no(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new no(p,d)}(n.endAt)),QL(e,i,o,s,a,"F",l,u)}function b5(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ls(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ls(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>HT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function N5(t){return _5[t]}function O5(t){return w5[t]}function D5(t){return E5[t]}function as(t){return{fieldPath:t.canonicalString()}}function ls(t){return wt.fromServerFormat(t.fieldPath)}function GT(t){return t instanceof Ke?function(n){if(n.op==="=="){if(b_(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(R_(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(b_(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(R_(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:O5(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(i=>GT(i));return r.length===1?r[0]:{compositeFilter:{op:D5(n.op),filters:r}}}(t):Z()}function L5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function KT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $r{constructor(e,n,r,i,s=ne.min(),o=ne.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class M5{constructor(e){this.ht=e}}function V5(t){const e=R5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
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
 */class $5{constructor(){this._n=new j5}addToCollectionParentIndex(e,n){return this._n.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(oi.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(oi.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class j5{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(Se.comparator)).toArray()}}/**
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
 */class F5{constructor(){this.changes=new yo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class U5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class z5{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&la(r.mutation,i,qt.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=yr();const o=aa(),a=function(){return aa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof gi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),la(c.mutation,u,c.mutation.getFieldMask(),Je.now())):o.set(u.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new U5(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=aa();let i=new Ve((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||qt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=bT();c.forEach(d=>{if(!s.has(d)){const p=$T(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Ci());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?b.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,le())).next(c=>({batchId:a,changes:RT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zo();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const l=function(c,h){return new ts(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,_t.newInvalidDocument(u)))});let o=zo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&la(u.mutation,l,qt.empty(),Je.now()),qh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class B5{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return b.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:zn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:V5(i.bundledQuery),readTime:zn(i.readTime)}}(n)),b.resolve()}}/**
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
 */class W5{constructor(){this.overlays=new Ve(q.comparator),this.hr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ci();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Ci(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ve((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ci(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ci(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f5(n,r));let s=this.hr.get(n);s===void 0&&(s=le(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class uy{constructor(){this.Pr=new Tt(Ze.Ir),this.Tr=new Tt(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new q(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new q(new Se([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=le();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return q.comparator(e.key,n.key)||ye(e.pr,n.pr)}static Er(e,n){return ye(e.pr,n.pr)||q.comparator(e.key,n.key)}}/**
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
 */class q5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Tt(Ze.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d5(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(ye);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new q(s),0);let a=new Tt(ye);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),b.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.wr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class H5{constructor(e){this.Cr=e,this.docs=function(){return new Ve(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=yr();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||NL(bL(c),r)<=0||(i.has(c.key)||qh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Fr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G5(this)}getSize(e){return b.resolve(this.size)}}class G5 extends F5{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class K5{constructor(e){this.persistence=e,this.Mr=new yo(n=>ty(n),ny),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Or=0,this.Nr=new uy,this.targetCount=0,this.Br=ro.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),b.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.qn(n),b.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Nr.containsKey(n))}}/**
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
 */class Q5{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Jg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new K5(this),this.indexManager=new $5,this.remoteDocumentCache=function(i){return new H5(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new M5(n),this.$r=new B5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new q5(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new Y5(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return b.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Y5 extends DL{constructor(e){super(),this.currentSequenceNumber=e}}class cy{constructor(e){this.persistence=e,this.zr=new uy,this.jr=null}static Hr(e){return new cy(e)}get Jr(){if(this.jr)return this.jr;throw Z()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),b.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{const i=q.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return b.or([()=>b.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class hy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hy(e,n.fromCache,r,i)}}/**
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
 */class X5{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(L_(n))return b.resolve(null);let r=gr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xc(n,null,"F"),r=gr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.Hi(n,u,o,l.readTime)?this.Wi(e,xc(n,null,"F")):this.Ji(e,u,n,l)}))})))}Gi(e,n,r,i){return L_(n)||i.isEqual(ne.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(C_()<=me.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zp(n)),this.Ji(e,o,n,RL(i,-1)))})}ji(e,n){let r=new Tt(kT(e));return n.forEach((i,s)=>{qh(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return C_()<=me.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",zp(n)),this.Ui.getDocumentsMatchingQuery(e,n,oi.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class J5{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new Ve(ye),this.Xi=new yo(s=>ty(s),ny),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z5(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function Z5(t,e,n,r){return new J5(t,e,n,r)}async function QT(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=le();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function e3(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=b.resolve();return d.forEach(_=>{p=p.next(()=>c.getEntry(l,_)).next(y=>{const w=u.docVersions.get(_);Re(w!==null),y.version.compareTo(w)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=le();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function YT(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function t3(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(kt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(y,w,m){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.Qr.updateTargetData(s,p))});let l=yr(),u=le();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(n3(s,o,e.documentUpdates).next(c=>{l=c.ss,u=c.os})),!r.isEqual(ne.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Zi=i,s))}function n3(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=yr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ss:o,os:i}})}function r3(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function i3(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Gp(t,e,n){const r=ie(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ml(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function H_(t,e,n){const r=ie(t);let i=ne.min(),s=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=ie(l),d=h.Xi.get(c);return d!==void 0?b.resolve(h.Zi.get(d)):h.Qr.getTargetData(u,c)}(r,o,gr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:le())).next(a=>(s3(r,XL(e),a),{documents:a,_s:s})))}function s3(t,e,n){let r=t.es.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}class G_{constructor(){this.activeTargetIds=r5()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o3{constructor(){this.Ys=new G_,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new G_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class a3{Xs(e){}shutdown(){}}/**
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
 */class K_{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const l3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class u3{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
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
 */const mt="WebChannelConnection";class c3 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=af(),l=this.po(n,r);W("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(u,s,o),this.wo(n,l,u,i).then(c=>(W("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+go}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=l3[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=af();return new Promise((o,a)=>{const l=new _L;l.setWithCredentials(!0),l.listenOnce(yL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sf.NO_ERROR:const c=l.getResponseJson();W(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case sf.TIMEOUT:W(mt,`RPC '${e}' ${s} timed out`),a(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case sf.HTTP_ERROR:const h=l.getStatus();if(W(mt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const _=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(m)>=0?m:C.UNKNOWN}(p.status);a(new V(_,p.message))}else a(new V(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(C.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{W(mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);W(mt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}bo(e,n,r){const i=af(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=mL(),a=gL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");W(mt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const _=new u3({_o:w=>{p?W(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(W(mt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),W(mt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},ao:()=>h.close()}),y=(w,m,f)=>{w.listen(m,v=>{try{f(v)}catch(E){setTimeout(()=>{throw E},0)}})};return y(h,Zl.EventType.OPEN,()=>{p||W(mt,`RPC '${e}' stream ${i} transport opened.`)}),y(h,Zl.EventType.CLOSE,()=>{p||(p=!0,W(mt,`RPC '${e}' stream ${i} transport closed`),_.To())}),y(h,Zl.EventType.ERROR,w=>{p||(p=!0,Js(mt,`RPC '${e}' stream ${i} transport errored:`,w),_.To(new V(C.UNAVAILABLE,"The operation could not be completed")))}),y(h,Zl.EventType.MESSAGE,w=>{var m;if(!p){const f=w.data[0];Re(!!f);const v=f,E=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(E){W(mt,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let S=function(H){const j=qe[H];if(j!==void 0)return FT(j)}(T),N=E.message;S===void 0&&(S=C.INTERNAL,N="Unknown error status: "+T+" with message "+E.message),p=!0,_.To(new V(S,N)),h.close()}else W(mt,`RPC '${e}' stream ${i} received:`,f),_.Eo(f)}}),y(a,vL.STAT_EVENT,w=>{w.stat===T_.PROXY?W(mt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===T_.NOPROXY&&W(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Io()},0),_}}function lf(){return typeof document<"u"?document:null}/**
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
 */function Qh(t){return new I5(t,!0)}/**
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
 */class XT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
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
 */class JT{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new XT(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h3 extends JT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=S5(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?zn(o.readTime):ne.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Hp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Fp(l)?{documents:k5(s,l)}:{query:P5(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=BT(s,o.resumeToken);const u=Bp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=Cc(s,o.snapshotVersion.toTimestamp());const u=Bp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=b5(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Hp(this.serializer),n.removeTarget=e,this.Yo(n)}}class d3 extends JT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=A5(e.writeResults,e.commitTime),r=zn(e.commitTime);return this.listener.l_(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Hp(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>C5(this.serializer,r))};this.Yo(n)}}/**
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
 */class f3 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(C.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(C.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class p3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(mr(n),this.R_=!1):W("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
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
 */class m3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{ns(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ie(l);u.S_.add(4),await vl(u),u.v_.set("Unknown"),u.S_.delete(4),await Yh(u)}(this))})}),this.v_=new p3(r,i)}}async function Yh(t){if(ns(t))for(const e of t.b_)await e(!0)}async function vl(t){for(const e of t.b_)await e(!1)}function ZT(t,e){const n=ie(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),py(n)?fy(n):vo(n).Go()&&dy(n,e))}function eS(t,e){const n=ie(t),r=vo(n);n.w_.delete(e),r.Go()&&tS(n,e),n.w_.size===0&&(r.Go()?r.Ho():ns(n)&&n.v_.set("Unknown"))}function dy(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vo(t).o_(e)}function tS(t,e){t.C_.Le(e),vo(t).__(e)}function fy(t){t.C_=new v5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),vo(t).start(),t.v_.V_()}function py(t){return ns(t)&&!vo(t).Wo()&&t.w_.size>0}function ns(t){return ie(t).S_.size===0}function nS(t){t.C_=void 0}async function g3(t){t.w_.forEach((e,n)=>{dy(t,e)})}async function y3(t,e){nS(t),py(t)?(t.v_.g_(e),fy(t)):t.v_.set("Unknown")}async function v3(t,e,n){if(t.v_.set("Online"),e instanceof zT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ac(t,r)}else if(e instanceof Tu?t.C_.Ge(e):e instanceof UT?t.C_.Xe(e):t.C_.He(e),!n.isEqual(ne.min()))try{const r=await YT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.w_.get(u);c&&s.w_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.w_.get(l);if(!c)return;s.w_.set(l,c.withResumeToken(kt.EMPTY_BYTE_STRING,c.snapshotVersion)),tS(s,l);const h=new $r(c.target,l,u,c.sequenceNumber);dy(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Ac(t,r)}}async function Ac(t,e,n){if(!ml(e))throw e;t.S_.add(1),await vl(t),t.v_.set("Offline"),n||(n=()=>YT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await Yh(t)})}function rS(t,e){return e().catch(n=>Ac(t,n,e))}async function Xh(t){const e=ie(t),n=li(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;_3(e);)try{const i=await r3(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,w3(e,i)}catch(i){await Ac(e,i)}iS(e)&&sS(e)}function _3(t){return ns(t)&&t.y_.length<10}function w3(t,e){t.y_.push(e);const n=li(t);n.Go()&&n.u_&&n.c_(e.mutations)}function iS(t){return ns(t)&&!li(t).Wo()&&t.y_.length>0}function sS(t){li(t).start()}async function E3(t){li(t).P_()}async function I3(t){const e=li(t);for(const n of t.y_)e.c_(n.mutations)}async function x3(t,e,n){const r=t.y_.shift(),i=oy.from(r,e,n);await rS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xh(t)}async function T3(t,e){e&&li(t).u_&&await async function(r,i){if(function(o){return m5(o)&&o!==C.ABORTED}(i.code)){const s=r.y_.shift();li(r).jo(),await rS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xh(r)}}(t,e),iS(t)&&sS(t)}async function Q_(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ns(n);n.S_.add(3),await vl(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await Yh(n)}async function S3(t,e){const n=ie(t);e?(n.S_.delete(2),await Yh(n)):e||(n.S_.add(2),await vl(n),n.v_.set("Unknown"))}function vo(t){return t.F_||(t.F_=function(n,r,i){const s=ie(n);return s.T_(),new h3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:g3.bind(null,t),lo:y3.bind(null,t),s_:v3.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),py(t)?fy(t):t.v_.set("Unknown")):(await t.F_.stop(),nS(t))})),t.F_}function li(t){return t.M_||(t.M_=function(n,r,i){const s=ie(n);return s.T_(),new d3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:E3.bind(null,t),lo:T3.bind(null,t),h_:I3.bind(null,t),l_:x3.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await Xh(t)):(await t.M_.stop(),t.y_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
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
 */class my{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new my(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gy(t,e){if(mr("AsyncQueue",`${e}: ${t}`),ml(t))return new V(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=zo(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Y_{constructor(){this.x_=new Ve(q.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):Z():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,Ms.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class C3{constructor(){this.N_=void 0,this.listeners=[]}}class A3{constructor(){this.queries=new yo(e=>AT(e),Wh),this.onlineState="Unknown",this.B_=new Set}}async function yy(t,e){const n=ie(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new C3),i)try{s.N_=await n.onListen(r)}catch(o){const a=gy(o,`Initialization of query '${zp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&_y(n)}async function vy(t,e){const n=ie(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function k3(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&_y(n)}function P3(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function _y(t){t.B_.forEach(e=>{e.next()})}class wy{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
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
 */class oS{constructor(e){this.key=e}}class aS{constructor(e){this.key=e}}class R3{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=le(),this.mutatedKeys=le(),this.ia=kT(e),this.sa=new Ms(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new Y_,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=qh(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?_!==y&&(r.track({type:3,doc:p}),w=!0):this.ua(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.ia(p,l)>0||u&&this.ia(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((u,c)=>function(d,p){const _=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return _(d)-_(p)}(u.type,c.type)||this.ia(u.doc,c.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,l=a!==this.na;return this.na=a,s.length!==0||l?{snapshot:new io(this.query,e.sa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new Y_,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=le(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new aS(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new oS(r))}),n}Ia(e){this.ta=e._s,this.ra=le();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return io.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class b3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class N3{constructor(e){this.key=e,this.Ea=!1}}class O3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new yo(a=>AT(a),Wh),this.Ra=new Map,this.Va=new Set,this.ma=new Ve(q.comparator),this.fa=new Map,this.ga=new uy,this.pa={},this.ya=new Map,this.wa=ro.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function D3(t,e){const n=W3(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await i3(n.localStore,gr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await L3(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ZT(n.remoteStore,o)}return i}async function L3(t,e,n,r,i){t.ba=(h,d,p)=>async function(y,w,m,f){let v=w.view._a(m);v.Hi&&(v=await H_(y.localStore,w.query,!1).then(({documents:S})=>w.view._a(S,v)));const E=f&&f.targetChanges.get(w.targetId),T=w.view.applyChanges(v,y.isPrimaryClient,E);return J_(y,w.targetId,T.ha),T.snapshot}(t,h,d,p);const s=await H_(t.localStore,e,!0),o=new R3(e,s._s),a=o._a(s.documents),l=yl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);J_(t,n,u.ha);const c=new b3(e,n,o);return t.Aa.set(e,c),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),u.snapshot}async function M3(t,e){const n=ie(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!Wh(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),eS(n.remoteStore,r.targetId),Kp(n,r.targetId)}).catch(pl)):(Kp(n,r.targetId),await Gp(n.localStore,r.targetId,!0))}async function V3(t,e,n){const r=q3(t);try{const i=await function(o,a){const l=ie(o),u=Je.now(),c=a.reduce((p,_)=>p.add(_.key),le());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=yr(),y=le();return l.ts.getEntries(p,c).next(w=>{_=w,_.forEach((m,f)=>{f.isValidDocument()||(y=y.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,_)).next(w=>{h=w;const m=[];for(const f of a){const v=c5(f,h.get(f.key).overlayedDocument);v!=null&&m.push(new gi(f.key,v,wT(v.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(w=>{d=w;const m=w.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(p,w.batchId,m)})}).then(()=>({batchId:d.batchId,changes:RT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.pa[o.currentUser.toKey()];u||(u=new Ve(ye)),u=u.insert(a,l),o.pa[o.currentUser.toKey()]=u}(r,i.batchId,n),await _l(r,i.changes),await Xh(r.remoteStore)}catch(i){const s=gy(i,"Failed to persist write");n.reject(s)}}async function lS(t,e){const n=ie(t);try{const r=await t3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?Re(o.Ea):i.removedDocuments.size>0&&(Re(o.Ea),o.Ea=!1))}),await _l(n,r,e)}catch(r){await pl(r)}}function X_(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ie(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.L_(a)&&(u=!0)}),u&&_y(l)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $3(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new Ve(q.comparator);o=o.insert(s,_t.newNoDocument(s,ne.min()));const a=le().add(s),l=new Kh(ne.min(),new Map,new Ve(ye),o,a);await lS(r,l),r.ma=r.ma.remove(s),r.fa.delete(e),Ey(r)}else await Gp(r.localStore,e,!1).then(()=>Kp(r,e,n)).catch(pl)}async function j3(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await e3(n.localStore,e);cS(n,r,null),uS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _l(n,i)}catch(i){await pl(i)}}async function F3(t,e,n){const r=ie(t);try{const i=await function(o,a){const l=ie(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Re(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);cS(r,e,n),uS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _l(r,i)}catch(i){await pl(i)}}function uS(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function cS(t,e,n){const r=ie(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function Kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||hS(t,r)})}function hS(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(eS(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),Ey(t))}function J_(t,e,n){for(const r of n)r instanceof oS?(t.ga.addReference(r.key,e),U3(t,r)):r instanceof aS?(W("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||hS(t,r.key)):Z()}function U3(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Va.add(r),Ey(t))}function Ey(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new q(Se.fromString(e)),r=t.wa.next();t.fa.set(r,new N3(n)),t.ma=t.ma.insert(n,r),ZT(t.remoteStore,new $r(gr(zh(n.path)),r,"TargetPurposeLimboResolution",Jg.ae))}}async function _l(t,e,n){const r=ie(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,l)=>{o.push(r.ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=hy.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.da.s_(i),await async function(l,u){const c=ie(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(u,d=>b.forEach(d.qi,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>b.forEach(d.Qi,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!ml(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Zi.get(d),_=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(_);c.Zi=c.Zi.insert(d,y)}}}(r.localStore,s))}async function z3(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await QT(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(l=>{l.reject(new V(C.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _l(n,r.rs)}}function B3(t,e){const n=ie(t),r=n.fa.get(e);if(r&&r.Ea)return le().add(r.key);{let i=le();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}function W3(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=lS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=B3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$3.bind(null,e),e.da.s_=k3.bind(null,e.eventManager),e.da.Da=P3.bind(null,e.eventManager),e}function q3(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=F3.bind(null,e),e}class Z_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Z5(this.persistence,new X5,e.initialUser,this.serializer)}createPersistence(e){return new Q5(cy.Hr,this.serializer)}createSharedClientState(e){return new o3}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class H3{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>X_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=z3.bind(null,this.syncEngine),await S3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new A3}()}createDatastore(e){const n=Qh(e.databaseInfo.databaseId),r=function(s){return new c3(s)}(e.databaseInfo);return function(s,o,a,l){return new f3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new m3(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>X_(this.syncEngine,n,0),function(){return K_.v()?new K_:new a3}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new O3(i,s,o,a,l,u);return c&&(h.Sa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ie(n);W("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await vl(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Iy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class G3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=yT.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uf(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await QT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Q3(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Q_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Q_(e.remoteStore,s)),t._onlineComponents=e}function K3(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Q3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await uf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!K3(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await uf(t,new Z_)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await uf(t,new Z_);return t._offlineComponents}async function dS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await e1(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await e1(t,new H3))),t._onlineComponents}function Y3(t){return dS(t).then(e=>e.syncEngine)}async function kc(t){const e=await dS(t),n=e.eventManager;return n.onListen=D3.bind(null,e.syncEngine),n.onUnlisten=M3.bind(null,e.syncEngine),n}function X3(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Iy({next:d=>{o.enqueueAndForget(()=>vy(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new wy(zh(a.path),c,{includeMetadataChanges:!0,z_:!0});return yy(s,h)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}function J3(t,e,n={}){const r=new lr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Iy({next:d=>{o.enqueueAndForget(()=>vy(s,h)),d.fromCache&&l.source==="server"?u.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new wy(a,c,{includeMetadataChanges:!0,z_:!0});return yy(s,h)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const t1=new Map;/**
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
 */function pS(t,e,n){if(!n)throw new V(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Z3(t,e,n,r){if(e===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n1(t){if(!q.isDocumentKey(t))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function r1(t){if(q.isDocumentKey(t))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new V(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function eM(t,e){if(e<=0)throw new V(C.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class i1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Z3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new EL;switch(r.type){case"firstParty":return new SL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t1.get(n);r&&(W("ComponentProvider","Removing Datastore"),t1.delete(n),r.terminate())}(this),Promise.resolve()}}function tM(t,e,n,r={}){var i;const s=(t=zt(t,Zh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=kI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new IL(new gT(a,l))}}/**
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
 */class Qn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qn(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Zr extends Qn{constructor(e,n,r){super(e,n,zh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new q(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function Dt(t,e,...n){if(t=We(t),pS("collection","path",e),t instanceof Zh){const r=Se.fromString(e,...n);return r1(r),new Zr(t,null,r)}{if(!(t instanceof St||t instanceof Zr))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return r1(r),new Zr(t.firestore,null,r)}}function Et(t,e,...n){if(t=We(t),arguments.length===1&&(e=yT.V()),pS("doc","path",e),t instanceof Zh){const r=Se.fromString(e,...n);return n1(r),new St(t,null,new q(r))}{if(!(t instanceof St||t instanceof Zr))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return n1(r),new St(t.firestore,t instanceof Zr?t.converter:null,new q(r))}}/**
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
 */class nM{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new XT(this,"async_queue_retry"),this.tu=()=>{const n=lf();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=lf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new lr;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!ml(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=my.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&Z()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function s1(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class vr extends Zh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new nM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||mS(this),this._firestoreClient.terminate()}}function rM(t,e){const n=typeof t=="object"?t:_g(),r=typeof t=="string"?t:e||"(default)",i=wh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=SI("firestore");s&&tM(i,...s)}return i}function ed(t){return t._firestoreClient||mS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new VL(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,fS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new G3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class so{constructor(e){this._byteString=e}static fromBase64String(e){try{return new so(kt.fromBase64String(e))}catch(n){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new so(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class td{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xy{constructor(e){this._methodName=e}}/**
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
 */class Ty{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */const iM=/^__.*__$/;class sM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gi(e,this.data,this.fieldMask,n,this.fieldTransforms):new gl(e,this.data,n,this.fieldTransforms)}}class gS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Sy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new Sy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return Pc(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(yS(this.lu)&&iM.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class oM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qh(e)}mu(e,n,r,i=!1){return new Sy({lu:e,methodName:n,Vu:r,path:wt.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wl(t){const e=t._freezeSettings(),n=Qh(t._databaseId);return new oM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vS(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);Cy("Data must be an object, but it was:",o,r);const a=wS(r,o);let l,u;if(s.merge)l=new qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Qp(e,h,n);if(!o.contains(d))throw new V(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);IS(c,d)||c.push(d)}l=new qt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new sM(new Mt(a),l,u)}class nd extends xy{_toFieldTransform(e){if(e.lu!==2)throw e.lu===1?e.Au(`${this._methodName}() can only appear at the top level of your update data`):e.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nd}}function aM(t,e,n,r){const i=t.mu(1,e,n);Cy("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();es(r,(l,u)=>{const c=Ay(e,l,n);u=We(u);const h=i.Eu(c);if(u instanceof nd)s.push(c);else{const d=El(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new qt(s);return new gS(o,a,i.fieldTransforms)}function lM(t,e,n,r,i,s){const o=t.mu(1,e,n),a=[Qp(e,r,n)],l=[i];if(s.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Qp(e,s[d])),l.push(s[d+1]);const u=[],c=Mt.empty();for(let d=a.length-1;d>=0;--d)if(!IS(u,a[d])){const p=a[d];let _=l[d];_=We(_);const y=o.Eu(p);if(_ instanceof nd)u.push(p);else{const w=El(_,y);w!=null&&(u.push(p),c.set(p,w))}}const h=new qt(u);return new gS(c,h,o.fieldTransforms)}function _S(t,e,n,r=!1){return El(n,t.mu(r?4:3,e))}function El(t,e){if(ES(t=We(t)))return Cy("Unsupported field value:",e,t),wS(t,e);if(t instanceof xy)return function(r,i){if(!yS(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=El(a,i.du(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return i5(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Je.fromDate(r);return{timestampValue:Cc(i.serializer,s)}}if(r instanceof Je){const s=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cc(i.serializer,s)}}if(r instanceof Ty)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof so)return{bytesValue:BT(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ly(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${Jh(r)}`)}(t,e)}function wS(t,e){const n={};return vT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,i)=>{const s=El(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ES(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Ty||t instanceof so||t instanceof St||t instanceof xy)}function Cy(t,e,n){if(!ES(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jh(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function Qp(t,e,n){if((e=We(e))instanceof td)return e._internalPath;if(typeof e=="string")return Ay(t,e);throw Pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const uM=new RegExp("[~\\*/\\[\\]]");function Ay(t,e,n){if(e.search(uM)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new td(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(C.INVALID_ARGUMENT,a+t+l)}function IS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ky{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cM extends ky{data(){return super.data()}}function rd(t,e){return typeof e=="string"?Ay(t,e):e instanceof td?e._internalPath:e._delegate._internalPath}/**
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
 */function xS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Py{}class id extends Py{}function pn(t,e,...n){let r=[];e instanceof Py&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ry).length,a=s.filter(l=>l instanceof sd).length;if(o>1||o>0&&a>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class sd extends id{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sd(e,n,r)}_apply(e){const n=this._parse(e);return TS(e._query,n),new Qn(e.firestore,e.converter,Up(e._query,n))}_parse(e){const n=wl(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){a1(h,c);const p=[];for(const _ of h)p.push(o1(l,s,_));d={arrayValue:{values:p}}}else d=o1(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||a1(h,c),d=_S(a,o,h,c==="in"||c==="not-in");return Ke.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Wo(t,e,n){const r=e,i=rd("where",t);return sd._create(i,r,n)}class Ry extends Py{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ry(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)TS(o,l),o=Up(o,l)}(e._query,n),new Qn(e.firestore,e.converter,Up(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class by extends id{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new by(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ds(s,o);return function(u,c){if(ry(u)===null){const h=Bh(u);h!==null&&SS(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new Qn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ts(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function bn(t,e="asc"){const n=e,r=rd("orderBy",t);return by._create(r,n)}class Ny extends id{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ny(e,n,r)}_apply(e){return new Qn(e.firestore,e.converter,xc(e._query,this._limit,this._limitType))}}function Nn(t){return eM("limit",t),Ny._create("limit",t,"F")}class Oy extends id{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Oy(e,n,r)}_apply(e){const n=hM(e,this.type,this._docOrFields,this._inclusive);return new Qn(e.firestore,e.converter,function(i,s){return new ts(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function qo(...t){return Oy._create("startAfter",t,!1)}function hM(t,e,n,r){if(n[0]=We(n[0]),n[0]instanceof ky)return function(s,o,a,l,u){if(!l)throw new V(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const h of Ls(s))if(h.field.isKeyField())c.push(Ic(o,l.key));else{const d=l.data.field(h.field);if(Uh(d))throw new V(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const p=h.field.canonicalString();throw new V(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}c.push(d)}return new no(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=wl(t.firestore);return function(o,a,l,u,c,h){const d=o.explicitOrderBy;if(c.length>d.length)throw new V(C.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let _=0;_<c.length;_++){const y=c[_];if(d[_].field.isKeyField()){if(typeof y!="string")throw new V(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!iy(o)&&y.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const w=o.path.child(Se.fromString(y));if(!q.isDocumentKey(w))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const m=new q(w);p.push(Ic(a,m))}else{const w=_S(l,u,y);p.push(w)}}return new no(p,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function o1(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iy(e)&&n.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!q.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ic(t,new q(r))}if(n instanceof St)return Ic(t,n._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jh(n)}.`)}function a1(t,e){if(!Array.isArray(t)||t.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TS(t,e){if(e.isInequality()){const r=Bh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new V(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ry(t);s!==null&&SS(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function SS(t,e,n){if(!n.isEqual(e))throw new V(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dM{convertValue(e,n="none"){switch(Wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ty(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const n=ai(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Re(KT(r));const i=new Ua(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||mr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function CS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class AS extends ky{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Su extends AS{data(e={}){return super.data(e)}}class kS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Su(this._firestore,this._userDataWriter,r.key,r,new Ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ho(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:fM(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function Dy(t){t=zt(t,St);const e=zt(t.firestore,vr);return X3(ed(e),t._key).then(n=>bS(e,t,n))}class Ly extends dM{constructor(e){super(),this.firestore=e}convertBytes(e){return new so(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function mn(t){t=zt(t,Qn);const e=zt(t.firestore,vr),n=ed(e),r=new Ly(e);return xS(t._query),J3(n,t._query).then(i=>new kS(e,r,t,i))}function My(t,e,n){t=zt(t,St);const r=zt(t.firestore,vr),i=CS(t.converter,e,n);return od(r,[vS(wl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function Ni(t,e,n,...r){t=zt(t,St);const i=zt(t.firestore,vr),s=wl(i);let o;return o=typeof(e=We(e))=="string"||e instanceof td?lM(s,"updateDoc",t._key,e,n,r):aM(s,"updateDoc",t._key,e),od(i,[o.toMutation(t._key,sn.exists(!0))])}function PS(t){return od(zt(t.firestore,vr),[new sy(t._key,sn.none())])}function pM(t,e){const n=zt(t.firestore,vr),r=Et(t),i=CS(t.converter,e);return od(n,[vS(wl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function RS(t,...e){var n,r,i;t=We(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||s1(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(s1(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof St)u=zt(t.firestore,vr),c=zh(t._key.path),l={next:h=>{e[o]&&e[o](bS(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=zt(t,Qn);u=zt(h.firestore,vr),c=h._query;const d=new Ly(u);l={next:p=>{e[o]&&e[o](new kS(u,d,h,p))},error:e[o+1],complete:e[o+2]},xS(t._query)}return function(d,p,_,y){const w=new Iy(y),m=new wy(p,w,_);return d.asyncQueue.enqueueAndForget(async()=>yy(await kc(d),m)),()=>{w.Ma(),d.asyncQueue.enqueueAndForget(async()=>vy(await kc(d),m))}}(ed(u),c,a,l)}function od(t,e){return function(r,i){const s=new lr;return r.asyncQueue.enqueueAndForget(async()=>V3(await Y3(r),i,s)),s.promise}(ed(t),e)}function bS(t,e,n){const r=n.docs.get(e._key),i=new Ly(t);return new AS(t,i,e._key,r,new Ho(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){go=i})(Yi),ji(new si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new vr(new xL(r.getProvider("auth-internal")),new AL(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ua(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),jn(S_,"4.1.2",e),jn(S_,"4.1.2","esm2017")})();const mM={apiKey:"AIzaSyBmhSj68D2sMSrJIsS8Kz2I6_aoOMX8a88",authDomain:"oleg-shop-da014.firebaseapp.com",projectId:"oleg-shop-da014",storageBucket:"oleg-shop-da014.appspot.com",messagingSenderId:"289803579666",appId:"1:289803579666:web:6f92cb960eed0ea061c3cb",measurementId:"G-TXR6LBVXR3"},Vy=bI(mM);hD(Vy);const Vs=V4(Vy),_e=rM(Vy);function vn(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ui(t){return!!t&&!!t[Ne]}function _r(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===TM}(t)||Array.isArray(t)||!!t[p1]||!!(!((e=t.constructor)===null||e===void 0)&&e[p1])||$y(t)||jy(t))}function qi(t,e,n){n===void 0&&(n=!1),_o(t)===0?(n?Object.keys:js)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function _o(t){var e=t[Ne];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:$y(t)?2:jy(t)?3:0}function $s(t,e){return _o(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function gM(t,e){return _o(t)===2?t.get(e):t[e]}function NS(t,e,n){var r=_o(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function OS(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function $y(t){return IM&&t instanceof Map}function jy(t){return xM&&t instanceof Set}function wi(t){return t.o||t.t}function Fy(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=LS(t);delete e[Ne];for(var n=js(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Uy(t,e){return e===void 0&&(e=!1),zy(t)||ui(t)||!_r(t)||(_o(t)>1&&(t.set=t.add=t.clear=t.delete=yM),Object.freeze(t),e&&qi(t,function(n,r){return Uy(r,!0)},!0)),t}function yM(){vn(2)}function zy(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Bn(t){var e=Zp[t];return e||vn(18,t),e}function vM(t,e){Zp[t]||(Zp[t]=e)}function Yp(){return qa}function cf(t,e){e&&(Bn("Patches"),t.u=[],t.s=[],t.v=e)}function Rc(t){Xp(t),t.p.forEach(_M),t.p=null}function Xp(t){t===qa&&(qa=t.l)}function l1(t){return qa={p:[],l:qa,h:t,m:!0,_:0}}function _M(t){var e=t[Ne];e.i===0||e.i===1?e.j():e.g=!0}function hf(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||Bn("ES5").S(e,t,r),r?(n[Ne].P&&(Rc(e),vn(4)),_r(t)&&(t=bc(e,t),e.l||Nc(e,t)),e.u&&Bn("Patches").M(n[Ne].t,t,e.u,e.s)):t=bc(e,n,[]),Rc(e),e.u&&e.v(e.u,e.s),t!==DS?t:void 0}function bc(t,e,n){if(zy(e))return e;var r=e[Ne];if(!r)return qi(e,function(a,l){return u1(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Nc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Fy(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),qi(s,function(a,l){return u1(t,r,i,a,l,n,o)}),Nc(t,i,!1),n&&t.u&&Bn("Patches").N(r,n,t.u,t.s)}return r.o}function u1(t,e,n,r,i,s,o){if(ui(i)){var a=bc(t,i,s&&e&&e.i!==3&&!$s(e.R,r)?s.concat(r):void 0);if(NS(n,r,a),!ui(a))return;t.m=!1}else o&&n.add(i);if(_r(i)&&!zy(i)){if(!t.h.D&&t._<1)return;bc(t,i),e&&e.A.l||Nc(t,i)}}function Nc(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Uy(e,n)}function df(t,e){var n=t[Ne];return(n?wi(n):t)[e]}function c1(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Dr(t){t.P||(t.P=!0,t.l&&Dr(t.l))}function ff(t){t.o||(t.o=Fy(t.t))}function Jp(t,e,n){var r=$y(e)?Bn("MapSet").F(e,n):jy(e)?Bn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Yp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=Ha;o&&(l=[a],u=Go);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):Bn("ES5").J(e,n);return(n?n.A:Yp()).p.push(r),r}function wM(t){return ui(t)||vn(22,t),function e(n){if(!_r(n))return n;var r,i=n[Ne],s=_o(n);if(i){if(!i.P&&(i.i<4||!Bn("ES5").K(i)))return i.t;i.I=!0,r=h1(n,s),i.I=!1}else r=h1(n,s);return qi(r,function(o,a){i&&gM(i.t,o)===a||NS(r,o,e(a))}),s===3?new Set(r):r}(t)}function h1(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return Fy(t)}function EM(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Ne];return Ha.get(l,s)},set:function(l){var u=this[Ne];Ha.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Ne];if(!a.P)switch(a.i){case 5:r(a)&&Dr(a);break;case 4:n(a)&&Dr(a)}}}function n(s){for(var o=s.t,a=s.k,l=js(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Ne){var h=o[c];if(h===void 0&&!$s(o,c))return!0;var d=a[c],p=d&&d[Ne];if(p?p.t!==h:!OS(d,h))return!0}}var _=!!o[Ne];return l.length!==js(o).length+(_?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};vM("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var _=LS(h);delete _[Ne];for(var y=js(_),w=0;w<y.length;w++){var m=y[w];_[m]=t(m,c||!!_[m].enumerable)}return Object.create(Object.getPrototypeOf(h),_)}(a,s),u={i:a?5:4,A:o?o.A:Yp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,Ne,{value:u,writable:!0}),l},S:function(s,o,a){a?ui(o)&&o[Ne].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Ne];if(c){var h=c.t,d=c.k,p=c.R,_=c.i;if(_===4)qi(d,function(v){v!==Ne&&(h[v]!==void 0||$s(h,v)?p[v]||l(d[v]):(p[v]=!0,Dr(c)))}),qi(h,function(v){d[v]!==void 0||$s(d,v)||(p[v]=!1,Dr(c))});else if(_===5){if(r(c)&&(Dr(c),p.length=!0),d.length<h.length)for(var y=d.length;y<h.length;y++)p[y]=!1;else for(var w=h.length;w<d.length;w++)p[w]=!0;for(var m=Math.min(d.length,h.length),f=0;f<m;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var d1,qa,By=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",IM=typeof Map<"u",xM=typeof Set<"u",f1=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",DS=By?Symbol.for("immer-nothing"):((d1={})["immer-nothing"]=!0,d1),p1=By?Symbol.for("immer-draftable"):"__$immer_draftable",Ne=By?Symbol.for("immer-state"):"__$immer_state",TM=""+Object.prototype.constructor,js=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,LS=Object.getOwnPropertyDescriptors||function(t){var e={};return js(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Zp={},Ha={get:function(t,e){if(e===Ne)return t;var n=wi(t);if(!$s(n,e))return function(i,s,o){var a,l=c1(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!_r(r)?r:r===df(t.t,e)?(ff(t),t.o[e]=Jp(t.A.h,r,t)):r},has:function(t,e){return e in wi(t)},ownKeys:function(t){return Reflect.ownKeys(wi(t))},set:function(t,e,n){var r=c1(wi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=df(wi(t),e),s=i==null?void 0:i[Ne];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(OS(n,i)&&(n!==void 0||$s(t.t,e)))return!0;ff(t),Dr(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return df(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,ff(t),Dr(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=wi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){vn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){vn(12)}},Go={};qi(Ha,function(t,e){Go[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Go.deleteProperty=function(t,e){return Go.set.call(this,t,e,void 0)},Go.set=function(t,e,n){return Ha.set.call(this,t[0],e,n,t[0])};var SM=function(){function t(n){var r=this;this.O=f1,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(y){var w=this;y===void 0&&(y=a);for(var m=arguments.length,f=Array(m>1?m-1:0),v=1;v<m;v++)f[v-1]=arguments[v];return l.produce(y,function(E){var T;return(T=s).call.apply(T,[w,E].concat(f))})}}var u;if(typeof s!="function"&&vn(6),o!==void 0&&typeof o!="function"&&vn(7),_r(i)){var c=l1(r),h=Jp(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?Rc(c):Xp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return cf(c,o),hf(y,c)},function(y){throw Rc(c),y}):(cf(c,o),hf(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===DS&&(u=void 0),r.D&&Uy(u,!0),o){var p=[],_=[];Bn("Patches").M(i,u,p,_),o(p,_)}return u}vn(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){_r(n)||vn(8),ui(n)&&(n=wM(n));var r=l1(this),i=Jp(this,n,void 0);return i[Ne].C=!0,Xp(r),i},e.finishDraft=function(n,r){var i=n&&n[Ne],s=i.A;return cf(s,r),hf(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!f1&&vn(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=Bn("Patches").$;return ui(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Qt=new SM,MS=Qt.produce;Qt.produceWithPatches.bind(Qt);Qt.setAutoFreeze.bind(Qt);Qt.setUseProxies.bind(Qt);Qt.applyPatches.bind(Qt);Qt.createDraft.bind(Qt);Qt.finishDraft.bind(Qt);function Ga(t){"@babel/helpers - typeof";return Ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ga(t)}function CM(t,e){if(Ga(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Ga(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function AM(t){var e=CM(t,"string");return Ga(e)==="symbol"?e:String(e)}function kM(t,e,n){return e=AM(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function g1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?m1(Object(n),!0).forEach(function(r){kM(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function gt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var y1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),pf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Oc={INIT:"@@redux/INIT"+pf(),REPLACE:"@@redux/REPLACE"+pf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+pf()}};function PM(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Wy(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(gt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(gt(1));return n(Wy)(t,e)}if(typeof t!="function")throw new Error(gt(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(gt(3));return s}function h(y){if(typeof y!="function")throw new Error(gt(4));if(l)throw new Error(gt(5));var w=!0;return u(),a.push(y),function(){if(w){if(l)throw new Error(gt(6));w=!1,u();var f=a.indexOf(y);a.splice(f,1),o=null}}}function d(y){if(!PM(y))throw new Error(gt(7));if(typeof y.type>"u")throw new Error(gt(8));if(l)throw new Error(gt(9));try{l=!0,s=i(s,y)}finally{l=!1}for(var w=o=a,m=0;m<w.length;m++){var f=w[m];f()}return y}function p(y){if(typeof y!="function")throw new Error(gt(10));i=y,d({type:Oc.REPLACE})}function _(){var y,w=h;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(gt(11));function v(){f.next&&f.next(c())}v();var E=w(v);return{unsubscribe:E}}},y[y1]=function(){return this},y}return d({type:Oc.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[y1]=_,r}function RM(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Oc.INIT});if(typeof r>"u")throw new Error(gt(12));if(typeof n(void 0,{type:Oc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(gt(13))})}function VS(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{RM(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],_=n[p],y=l[p],w=_(y,u);if(typeof w>"u")throw u&&u.type,new Error(gt(14));h[p]=w,c=c||w!==y}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Dc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function bM(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(gt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Dc.apply(void 0,a)(i.dispatch),g1(g1({},i),{},{dispatch:s})}}}function $S(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var jS=$S();jS.withExtraArgument=$S;const v1=jS;var FS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),NM=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},oo=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},OM=Object.defineProperty,DM=Object.defineProperties,LM=Object.getOwnPropertyDescriptors,_1=Object.getOwnPropertySymbols,MM=Object.prototype.hasOwnProperty,VM=Object.prototype.propertyIsEnumerable,w1=function(t,e,n){return e in t?OM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},ei=function(t,e){for(var n in e||(e={}))MM.call(e,n)&&w1(t,n,e[n]);if(_1)for(var r=0,i=_1(e);r<i.length;r++){var n=i[r];VM.call(e,n)&&w1(t,n,e[n])}return t},mf=function(t,e){return DM(t,LM(e))},$M=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},jM=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Dc:Dc.apply(null,arguments)};function FM(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var UM=function(t){FS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,oo([void 0],n[0].concat(this)))):new(e.bind.apply(e,oo([void 0],n.concat(this))))},e}(Array),zM=function(t){FS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,oo([void 0],n[0].concat(this)))):new(e.bind.apply(e,oo([void 0],n.concat(this))))},e}(Array);function em(t){return _r(t)?MS(t,function(){}):t}function BM(t){return typeof t=="boolean"}function WM(){return function(e){return qM(e)}}function qM(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new UM;return n&&(BM(n)?r.push(v1):r.push(v1.withExtraArgument(n.extraArgument))),r}var HM=!0;function GM(t){var e=WM(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(FM(i))p=VS(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var _=o;typeof _=="function"&&(_=_(e));var y=bM.apply(void 0,_),w=Dc;l&&(w=jM(ei({trace:!HM},typeof l=="object"&&l)));var m=new zM(y),f=m;Array.isArray(d)?f=oo([y],d):typeof d=="function"&&(f=d(m));var v=w.apply(void 0,f);return Wy(p,c,v)}function ti(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return ei(ei({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function US(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function KM(t){return typeof t=="function"}function QM(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?US(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(KM(t))l=function(){return em(t())};else{var u=em(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=oo([s[d.type]],o.filter(function(_){var y=_.matcher;return y(d)}).map(function(_){var y=_.reducer;return y}));return p.filter(function(_){return!!_}).length===0&&(p=[a]),p.reduce(function(_,y){if(y)if(ui(_)){var w=_,m=y(w,d);return m===void 0?_:m}else{if(_r(_))return MS(_,function(f){return y(f,d)});var m=y(_,d);if(m===void 0){if(_===null)return _;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return _},h)}return c.getInitialState=l,c}function YM(t,e){return t+"/"+e}function XM(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:em(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=YM(e,c),p,_;"reducer"in h?(p=h.reducer,_=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=_?ti(d,_):ti(d)});function l(){var c=typeof t.extraReducers=="function"?US(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],_=p===void 0?[]:p,y=c[2],w=y===void 0?void 0:y,m=ei(ei({},d),o);return QM(n,function(f){for(var v in m)f.addCase(v,m[v]);for(var E=0,T=_;E<T.length;E++){var S=T[E];f.addMatcher(S.matcher,S.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var JM="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ZM=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=JM[Math.random()*64|0];return e},eV=["name","message","stack","code"],gf=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),E1=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),tV=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=eV;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=ti(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:mf(ei({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=ti(e+"/pending",function(u,c,h){return{payload:void 0,meta:mf(ei({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=ti(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||tV)(u||"Rejected"),meta:mf(ei({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):ZM(),_=new a,y;function w(f){y=f,_.abort()}var m=function(){return $M(this,null,function(){var f,v,E,T,S,N,R;return NM(this,function(H){switch(H.label){case 0:return H.trys.push([0,4,,5]),T=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),rV(T)?[4,T]:[3,2];case 1:T=H.sent(),H.label=2;case 2:if(T===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return S=new Promise(function(j,ce){return _.signal.addEventListener("abort",function(){return ce({name:"AbortError",message:y||"Aborted"})})}),c(s(p,u,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([S,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:_.signal,abort:w,rejectWithValue:function(j,ce){return new gf(j,ce)},fulfillWithValue:function(j,ce){return new E1(j,ce)}})).then(function(j){if(j instanceof gf)throw j;return j instanceof E1?i(j.payload,p,u,j.meta):i(j,p,u)})])];case 3:return E=H.sent(),[3,5];case 4:return N=H.sent(),E=N instanceof gf?o(null,p,u,N.payload,N.meta):o(N,p,u),[3,5];case 5:return R=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,R||c(E),[2,E]}})})}();return Object.assign(m,{abort:w,requestId:p,arg:u,unwrap:function(){return m.then(nV)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function nV(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function rV(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var qy="listenerMiddleware";ti(qy+"/add");ti(qy+"/removeAll");ti(qy+"/remove");var I1;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);EM();const x1={userId:null,userName:null,email:null,isLogIn:!1,role:"user",cashList:[],favoriteList:[]},Lc=XM({name:"auth",initialState:x1,reducers:{updateUserProfile:(t,{payload:e})=>({...t,userId:e.userId,userName:e.userName,email:e.email,isLogIn:!!e.isLogIn}),authStateChange:(t,{payload:e})=>({...t,stateChange:e.stateChange}),authSignOut:()=>x1,adminRole:(t,{payload:e})=>({...t,role:"admin"}),addGoodToCashList:(t,{payload:e})=>({...t,cashList:[...t.cashList,e]}),removeGoodFromCashList:(t,{payload:e})=>({...t,cashList:e}),clearCashList:(t,{payload:e})=>({...t,cashList:[]}),setFavoriteList:(t,{payload:e})=>({...t,favoriteList:e}),addToFavoriteList:(t,{payload:e})=>({...t,favoriteList:[...t.favoriteList,e]}),deleteFromFavoriteList:(t,{payload:e})=>({...t,favoriteList:e})}}),{updateUserProfile:zS,authStateChange:Y9,authSignOut:iV,adminRole:sV,clearCashList:oV,addToFavoriteList:aV,setFavoriteList:lV,deleteFromFavoriteList:uV}=Lc.actions,cV=({email:t,password:e,userName:n})=>async(r,i)=>{await _O(Vs,t,e).catch(a=>{const l=a.code,u=a.message;console.log(`${l},${u}`)}),await IO(Vs.currentUser,{displayName:`${n}`});const{uid:s,displayName:o}=Vs.currentUser;r(zS({userId:s,userName:o}))},Hy=({email:t,password:e})=>async(n,r)=>{wO(Vs,t,e).then(async i=>{const{uid:s,displayName:o,email:a}=Vs.currentUser;n(zS({userId:s,userName:o,isLogIn:!0,email:a})),a==="msshopua@gmail.com"&&n(sV())}).catch(i=>{const s=i.code,o=i.message;console.log(`${s},${o}`)})},hV=()=>async(t,e)=>{SO(Vs).catch(n=>{const r=n.code,i=n.message;console.log(`${r},${i}`)}),t(iV())},dV=()=>(t,e)=>{t(oV())},fV=t=>(e,n)=>{e(aV(t))},Gy=t=>async(e,n)=>{const r=await Dy(Et(_e,"users",`${t}`));if(r.exists()){const{favoriteList:i}=r.data();e(lV(i))}else console.log("No such document!")},pV=t=>(e,n)=>{const s=n().auth.favoriteList.filter(o=>{if(o.name!==t.name)return o});e(uV(s))},mV=A.ul`
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
`,gV=A.li`
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
`,yV=A.div`
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
`,vV=A.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`,_V=A(mg)`
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
`,wV=A(CR)`
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
`,EV=A(RR)`
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
`,IV=A.ul`
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
`,xV=A.li`
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
`,TV=A.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,SV=A.p`
  width: 90%;
`;A.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`;const CV=A.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`,AV=A.div`
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
`,kV=A.div`
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
`,PV=A.h3``,RV=A.div`
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
`,BS=A(xR)`
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
  }`,WS=A(TR)`
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
`,bV=A.div`
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
`,T1=A.button`
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
`,NV=A.button`
  width: 100%;
  &.active {
    background: red;
  }

  &:hover {
    background: red;
  }
`,OV=A.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  @media (min-width: 768px) {
    gap: 10px;
  }
`,DV=A.div`
  display: flex;
`,LV=A(AR)`
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
`,MV=A(mg)`
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
`,VV=A(kR)`
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
`,$V=A.p`
  font-size: 6px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,{addGoodToCashList:jV,removeGoodFromCashList:FV}=Lc.actions,UV=({id:t,name:e,image:n,price:r})=>(i,s)=>{i(jV({id:t,name:e,image:n,price:r}))},zV=t=>(e,n)=>{const s=n().auth.cashList.filter((o,a)=>{if(a!==t)return o});e(FV(s))};var qS={exports:{}},BV="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",WV=BV,qV=WV;function HS(){}function GS(){}GS.resetWarningCache=HS;var HV=function(){function t(r,i,s,o,a,l){if(l!==qV){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:GS,resetWarningCache:HS};return n.PropTypes=n,n};qS.exports=HV();var GV=qS.exports;const os=rm(GV),KV=A.div`
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
`,QV=A.div`
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
`,YV=A(BS)`
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
`,XV=A(WS)`
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
`;class KS extends $t.Component{constructor(){super(...arguments);Io(this,"nextImage",()=>{this.props.nextImage()});Io(this,"previousImage",()=>{this.props.previousImage()});Io(this,"keydown",n=>{n.keyCode===27&&this.props.onCloseModal()})}componentDidMount(){document.addEventListener("keydown",this.keydown)}componentWillUnmount(){document.removeEventListener("keydown",this.keydown)}render(){return g.jsxs(g.Fragment,{children:[this.props.currentImageIndex!==this.props.currentImageUrl.length-1&&typeof this.props.currentImageUrl!="string"&&g.jsx(YV,{onClick:this.nextImage}),g.jsx(KV,{onClick:this.props.onCloseModal,children:g.jsx(QV,{style:{backgroundImage:`url(${typeof this.props.currentImageUrl=="string"?this.props.currentImageUrl:this.props.currentImageUrl[this.props.currentImageIndex]})`}})}),this.props.currentImageIndex!==0&&typeof this.props.currentImageUrl!="string"&&g.jsx(XV,{onClick:this.previousImage})]})}}Io(KS,"propTypes",{onCloseModal:os.func.isRequired,currentImageUrl:os.string.isRequired||os.array.isRequired,nextImage:os.func.isRequired,previousImage:os.func.isRequired,currentImageIndex:os.number.isRequired});const ad=({card:t,closeModal:e})=>{const n=Ir(),r=Qi(),[i,s]=I.useState(!1),o=ln(cn),[a,l]=I.useState(0);let u=o.favoriteList,c=u.length>0?o.favoriteList.map(S=>S.name):[];const h=S=>{S.currentTarget===S.target&&e()},d=S=>{(S.charCode||S.keyCode)===27&&e()},p=async()=>{await PS(Et(_e,"goods",`${t.id}`)),e()},_=()=>{r(UV(t))},y=async()=>{try{await Ni(Et(_e,"users",`${o.email}`),{favoriteList:[...u,t]})}catch(S){console.log(S)}},w=()=>{r(fV(t)),y()},m=async()=>{try{const S=u.filter(N=>{if(N.name!==t.name)return N});await Ni(Et(_e,"users",`${o.email}`),{favoriteList:S})}catch(S){console.log(S)}},f=()=>{m(),r(pV(t))};I.useEffect(()=>(document.body.addEventListener("keydown",d),function(){document.body.removeEventListener("keydown",d)}),[]);const v=()=>{l(S=>S+1)},E=()=>{l(S=>S-1)},T=()=>{s(!1)};return g.jsx(CV,{onClick:h,children:g.jsxs(AV,{onClick:h,children:[g.jsxs(kV,{children:[g.jsxs(DV,{children:[g.jsxs(OV,{children:[a!==0&&typeof t.image!="string"&&g.jsx(WS,{onClick:E}),g.jsx(RV,{style:{backgroundImage:`url(${typeof t.image=="string"?t.image:t.image[a]})`},onClick:()=>{s(!0)}}),a!==t.image.length-1&&typeof t.image!="string"&&g.jsx(BS,{onClick:v}),g.jsx(T1,{onClick:_,children:"Добавити до покупок"}),o.isLogIn&&(c.includes(t.name)?g.jsx(NV,{onClick:f,children:"Видалити з обранного"}):g.jsx(T1,{onClick:w,children:"Добавити до обранного"}))]}),g.jsxs(bV,{children:[g.jsx(PV,{children:t.name}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Ціна: "}),t.price," грн."]})}),g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Категорія: "}),t.category]})}),t.sex&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Рід: "}),t.sex]})}),t.producent&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Виробник: "}),t.producent]})}),t.size&&g.jsx(g.Fragment,{children:g.jsxs("p",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Розмір: "}),t.size]})}),g.jsxs("div",{children:[g.jsx("span",{style:{fontWeight:"bolder"},children:"Додаткова інформація:"}),g.jsx($V,{children:t.otherInfo})]})]})]}),g.jsx(LV,{onClick:()=>e()}),o.role==="admin"&&g.jsxs(g.Fragment,{children:[g.jsx(MV,{onClick:()=>{p()}}),g.jsx(VV,{onClick:()=>{n("/admin",{state:t})}})]})]}),i&&g.jsx(KS,{onCloseModal:T,currentImageIndex:a,currentImageUrl:t.image,nextImage:v,previousImage:E})]})})},JV=()=>{const t=ln(cn),[e,n]=I.useState(!1),[r,i]=I.useState(),s=a=>{i(a),n(!0)},o=()=>{n(!1)};return g.jsxs(g.Fragment,{children:[g.jsx(IV,{id:"card",children:t.favoriteList.length>0?t.favoriteList.map((a,l)=>g.jsx(g.Fragment,{children:g.jsx(xV,{onClick:()=>s(a),style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`},children:g.jsxs(TV,{children:[g.jsx(SV,{children:a.name}),g.jsxs("p",{children:[a.price," грн."]})]})},a.id)})):g.jsx("div",{children:"Список обранного пустий"})}),e&&g.jsx(ad,{card:r,closeModal:o})]})};function Cu(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Cu=function(n){return typeof n}:Cu=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Cu(t)}function yf(){}var ZV={getItem:yf,setItem:yf,removeItem:yf};function e9(t){if((typeof self>"u"?"undefined":Cu(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function t9(t){var e="".concat(t,"Storage");return e9(e)?self[e]:ZV}function n9(t){var e=t9(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}const jr=n9("local"),r9=({closeUserModal:t,typeModal:e})=>{const[n,r]=I.useState(e),[i,s]=I.useState(!1),[o,a]=I.useState(""),[l,u]=I.useState(""),[c,h]=I.useState(""),[d,p]=I.useState(""),[_,y]=I.useState(""),[w,m]=I.useState(""),[f,v]=I.useState(""),[E,T]=I.useState(""),[S,N]=I.useState(""),[R,H]=I.useState(""),[j,ce]=I.useState(""),[Te,k]=I.useState([]),[z,X]=I.useState("info"),[se,oe]=I.useState(""),D=ln(cn),G=Qi(),Q=O=>{O.currentTarget===O.target&&t()},ve=O=>{(O.charCode||O.keyCode)===27&&t()};I.useEffect(()=>(document.body.addEventListener("keydown",ve),function(){document.body.removeEventListener("keydown",ve)}),[]);const M=O=>{a(O.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(O.target.value).toLowerCase())?u(""):u("Введіть повнe призвіще, ім'я, побатькові")},F=O=>{h(O.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(O.target.value).toLowerCase())?p(""):p("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},U=O=>{y(O.target.value),O.target.value.length<6?v("Довжина пароля повина бути від 6 символів"):v("")},Y=O=>{m(O.target.value),O.target.value!==_?T("Введені паролі нe співпадають"):T("")},x=O=>{N(O.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(O.target.value))?H(""):H("Номер невірного формату (наприклад '043*******')")},ae=()=>{!l&&!d&&!f&&!E&&!R&&w&&o&&c&&_&&S&&j?(G(cV({email:c,password:_,userName:o})),L({name:o,email:c,password:_,userNumber:S,userPostAdress:j,favoriteList:[]}),s(!1),r("LogIn")):s(!0)},L=async O=>{try{await My(Et(_e,"users",`${O.email}`),O)}catch(K){console.error("Error adding user: ",K)}},be=async()=>{try{G(Hy({email:c,password:_})),G(Gy(c)),await Ni(Et(_e,"users",`${c}`),{isLogIn:!0}),jr.setItem("userEmail",c),jr.setItem("userPassword",_),t()}catch(O){oe("Email не зареестрований або невіний пароль"),console.error("Error adding user: ",O)}},pe=async()=>{t(),G(hV()),jr.removeItem("userEmail"),jr.removeItem("userPassword");try{await Ni(Et(_e,"users",`${D.email}`),{isLogIn:!1})}catch(O){console.error("Error adding user: ",O)}},ge=async()=>{const O=await Dy(Et(_e,"users",`${D.email}`));if(O.exists()){const{name:K,userPostAdress:$e,userNumber:he}=O.data();a(K),N(he),ce($e)}};I.useEffect(()=>{D.email&&(ge(),H(""))},[z,G]);const re=async()=>{if(!R)try{await Ni(Et(_e,"users",`${D.email}`),{userNumber:S,userPostAdress:j}),X("info")}catch(O){console.error("Error change user: ",O)}},Qe=async()=>{try{(await mn(pn(Dt(_e,"orders"),Wo("userEmail","==",`${D.email}`)))).forEach(K=>{k($e=>[...$e,{id:K.id,...K.data()}])}),k(K=>K.sort(($e,he)=>$e.postDate>he.postDate?-1:1))}catch(O){console.error("Error take orders: ",O)}};return I.useEffect(()=>{Qe()},[G]),g.jsx(UR,{onClick:Q,children:g.jsx(zR,{onClick:Q,children:g.jsxs(BR,{children:[n==="SignIn"&&g.jsxs(ql,{id:"userFormSignIn",children:[g.jsx(is,{children:"Контактні дані"}),g.jsx(Pn,{required:!0,name:"name",value:o,onChange:O=>{M(O)},placeholder:"Введіть ПІБ",style:l?{borderColor:"red"}:{}}),l&&g.jsx(Yn,{children:l}),g.jsx(Pn,{required:!0,name:"email",value:c,onChange:O=>{F(O)},placeholder:"Введіть контактну електронну адресу",style:d?{borderColor:"red"}:{}}),d&&g.jsx(Yn,{children:d}),g.jsx(Pn,{required:!0,name:"password",value:_,onChange:O=>{U(O)},placeholder:"Введіть пароль",autoComplete:"on",minlength:"5",style:f?{borderColor:"red"}:{}}),f&&g.jsx(Yn,{children:f}),g.jsx(Pn,{required:!0,name:"passwordDublicate",value:w,onChange:O=>{Y(O)},placeholder:"Повторіть пароль",style:E?{borderColor:"red"}:{}}),E&&g.jsx(Yn,{children:E}),g.jsx(Pn,{value:S,type:"number",onChange:O=>{x(O)},placeholder:"Введіть контактний номер телефону",style:R?{borderColor:"red"}:{}}),R&&g.jsx(Yn,{children:R}),g.jsx(Pn,{value:j,onChange:O=>{ce(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(Yn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Hl,{style:i?{backgroundColor:"red"}:{},onClick:ae,children:"Зареєструватись"})]}),n==="LogIn"&&g.jsxs(ql,{id:"userFormLogIn",children:[g.jsx(is,{children:"E-mail:"}),g.jsx(Pn,{required:!0,name:"email",value:c,onChange:O=>{h(O.target.value)}}),g.jsx(is,{children:"Пароль:"}),g.jsx(Pn,{required:!0,name:"password",value:_,onChange:O=>{y(O.target.value)}}),se&&g.jsx(Yn,{children:se}),g.jsx(Hl,{onClick:be,children:"Увійти"})]}),n==="Config"&&g.jsxs(g.Fragment,{children:[g.jsxs(WR,{children:[g.jsx(zl,{onClick:()=>{X("info")},children:"Користувач"}),g.jsx(zl,{onClick:()=>{X("change")},children:"Зміна данних"}),g.jsx(zl,{onClick:()=>{X("favorite")},children:"Обране"}),g.jsx(zl,{onClick:()=>{X("history")},children:"Історія покупок"})]}),z==="info"&&g.jsxs(ql,{id:"userFormConfig",children:[g.jsx(is,{children:"Інформація користувача"}),g.jsxs(qR,{children:[g.jsx(Bl,{children:"Призвіще, ім'я, по батькові:"}),g.jsx(Wl,{children:o}),g.jsx(Bl,{children:"E-mail:"}),g.jsx(Wl,{children:D.email}),g.jsx(Bl,{children:"Номер телефону:"}),g.jsxs(Wl,{children:[" ",S]}),g.jsx(Bl,{children:'Відділення "Нова пошти":'}),g.jsx(Wl,{children:j})]}),g.jsx(Hl,{onClick:pe,children:"Вийти з аккаунта"})]}),z==="change"&&g.jsxs(ql,{id:"userFormConfig",children:[g.jsx(is,{children:"Зміна данних"}),g.jsx(Pn,{value:S,type:"number",onChange:O=>{x(O)},placeholder:"Введіть контактний номер телефону",style:R?{borderColor:"red"}:{}}),R&&g.jsx(Yn,{children:R}),g.jsx(Pn,{value:j,onChange:O=>{ce(O.target.value)},placeholder:"Введіть адресу відділення пошти"}),g.jsx(Yn,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(Hl,{onClick:re,children:"Змінити дані"})]}),z==="favorite"&&g.jsx(JV,{}),z==="history"&&g.jsxs(GR,{children:[g.jsx(is,{children:"Історія покупок"}),g.jsx(D0,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(D0,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(YR,{children:Te.map(O=>g.jsxs(XR,{children:[g.jsx(HR,{style:O.status==="take"?{backgroundColor:"yellow"}:O.status==="send"?{backgroundColor:"green"}:{}}),g.jsxs(kn,{children:[g.jsxs(kn,{children:["Статус:",O.status==="create"&&" Замовлення оформлене",O.status==="take"&&" Прийняте",O.status==="send"&&" Відправлене"]}),"Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(O.postDate.seconds)]}),g.jsxs(kn,{children:["ФІП: ",O.userFullName]}),g.jsxs(kn,{children:["Email: ",O.userEmail]}),g.jsxs(kn,{children:["Номер телефону: ",O.userNumber]}),g.jsxs(kn,{children:["Адрес Нової почти: ",O.userPostAdress]}),g.jsx(kn,{children:"Список замовлення:"}),O.cashList.map(K=>g.jsxs(KR,{children:[g.jsx(QR,{style:{backgroundImage:`url(${typeof K.image=="string"?K.image:K.image[0]})`}}),g.jsxs(kn,{children:["Назва: ",K.name]}),g.jsxs(kn,{children:["Ціна: ",K.price]})]})),g.jsxs(kn,{children:["Додаткова інформація:"," ",O.userMessege?O.userMessege:"Без додаткової інформації"]})]}))})]})]})]})})})},i9=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(""),s=ln(cn).isLogIn,o=()=>{e(!1)};return g.jsxs(g.Fragment,{children:[s?g.jsx(g.Fragment,{children:g.jsx(Fd,{onClick:()=>{r("Config"),e(!0)},children:"Меню користувача"})}):g.jsxs(FR,{children:[g.jsx(Fd,{onClick:()=>{r("LogIn"),e(!0)},children:"Увійти"}),g.jsx(Fd,{onClick:()=>{r("SignIn"),e(!0)},children:"Зареєструватись"})]}),t&&g.jsx(r9,{closeUserModal:o,typeModal:n})]})},s9=()=>{const{cashList:t}=ln(cn),e=Ir(),n=Hn().pathname,r=Qi();I.useEffect(()=>{localStorage.getItem("userEmail")&&localStorage.getItem("userPassword")&&i()},[]);const i=async()=>{const s=await localStorage.getItem("userEmail"),o=await localStorage.getItem("userPassword");r(Hy({email:s,password:o})),r(Gy(s))};return g.jsxs(vR,{children:[g.jsxs(_R,{children:[g.jsx(MR,{}),n!=="/checkout"&&g.jsxs(g.Fragment,{children:[g.jsx(jR,{}),g.jsx(i9,{})]})]}),!(n==="/cashList"||n==="/admin"||n==="/checkout")&&g.jsxs(ER,{children:[g.jsx(wR,{onClick:()=>{e("/cashList")}}),g.jsx(IR,{children:t.length})]})]})},o9=()=>g.jsxs(g.Fragment,{children:[g.jsx(s9,{}),g.jsx(I.Suspense,{fallback:g.jsx("div",{children:"Loading..."}),children:g.jsx(wk,{})})]}),Ky=A.ul`
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
`,Qy=A.li`
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
`,Yy=A.div`
  background: #ffffff9c;
  min-height: 25%;
  width: 100%;
  position: absolute;

  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Xy=A.p`
  width: 90%;
`,Jy=A.div`
  width: 50%;
  top: 10%;
  left: -10%;
  position: absolute;
  background: green;
  display: flex;
  rotate: -45deg;
  align-items: center;
  justify-content: center;
`,Zy=A(bR)`
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
`,QS=A.button`
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
`,a9=A.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
`,tm=A.select`
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
`,er=A.option``,ru=A.input`
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
`,S1=A.textarea`
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
`,YS=A.button`
  transition: background 0.5s;

  &:hover {
    background: green;
  }
  &:focus {
    background: green;
  }
`,l9=A(Ky)`
  flex-direction: column;
`,u9=A.h4`
  cursor: default;
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
    font-size: 50px;
  }
`,c9=A.li`
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
`,h9=A.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  position: reletive;

  @media (min-width: 768px) {
    gap: 30px;
  }
`,d9=A(YS)`
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
`,f9=()=>{const[t,e]=I.useState([]),n=ln(cn),r=[],i=Ir(),[s,o]=I.useState(!1),[a,l]=I.useState(),[u,c]=I.useState("");let h=new Date().getTime()/1e3;const d=y=>{l(y),o(!0)},p=()=>{o(!1)},_=async()=>{RS(Dt(_e,"goods"),y=>{e(y.docs.map(w=>({...w.data(),id:w.id})).sort((w,m)=>w.createTime.seconds>m.createTime.seconds?-1:1))})};return I.useEffect(()=>{_()},[]),t.map(y=>{r.includes(y.category)||r.push(y.category)}),r.sort(),I.useEffect(()=>{function y(){console.log(window.innerWidth),c(window.innerWidth)}return window.addEventListener("resize",y),y(),()=>{window.removeEventListener("resize",y)}},[c]),g.jsxs(g.Fragment,{children:[g.jsx(l9,{children:r.map(y=>{let w=0;return g.jsxs(c9,{children:[g.jsx(u9,{children:y}),g.jsx(h9,{children:t.map((m,f)=>{if(m.category===y&&(w++,window.innerWidth>=2160&&w<=8||window.innerWidth>=1152&&w<=6||window.innerWidth<1152&&w<=4))return g.jsxs(Qy,{onClick:()=>d(m),style:{backgroundImage:`url(${typeof m.image=="string"?m.image:m.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(v=>{if(v.name===m.name)return g.jsx(Zy,{})}),h-m.createTime.seconds<259200&&g.jsx(Jy,{children:"Новинка!"}),g.jsxs(Yy,{children:[g.jsx(Xy,{children:m.name}),g.jsxs("p",{children:[m.price," грн."]})]})]},f)})}),g.jsx(d9,{onClick:()=>i("/search",{state:{category:y}}),children:"Побачити більше"})]})})}),s&&g.jsx(ad,{card:a,closeModal:p})]})},p9=A.div`
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
`,m9=A.input`
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
`,g9=A(tm)`
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
`,y9=A.p`
  @media (min-width: 768px) {
    font-size: 40px;
  }
`,XS=[{name:"Одяг",category:["Сукні","Сарафани","Спідниці","Нічний та домашній одяг","Термобілизна","Гірськолижний одяг","Шкарпетки","Панчохи","Колготки","Комбінезони та напівкомбінезони","Кофти","Светри","Кардигани","Костюми","Жакети","Спортивний одяг","Футболки","Майки","Шорти","Бриджі","Капрі","Джинси","Брюки","Легінси","Верхній одяг","Блузи","Сорочки","Для вагітних","Купальники","Пляжний одяг","Капрі","Штани","Піджаки","Гетри","Сліди","Спідня білизна","Пляжні шорти та плавки"]},{name:"Взуття",category:["Кросівки","Кеди","Снікери","Босоніжки","Сандалі","Туфлі","Балетки","Сліпони","Еспадрильї","Сабо","В'єтнамки","Шльопанці","Чоботи","Черевики","Уги","Ботильйони","Мокасини","Топсайдери","Лофери","Сандалі"]},{name:"Сумки та аксесуари",category:["Сумки","Рюкзаки","Валізи","Аксесуари для волосся","Годинники","Рукавички та рукавиці","Біжутерія","Головні убори","Ремені та пояси","Гаманці","Портмоне","Ремені","Пояси","Хустки","Шарфи","Краватки","Підтяжки","Прикраси","Парасолі","Сонцезахисні окуляри","Дорожні сумки"]},{name:"Товари для дому",category:["Пледи","Засоби для збирання","Господарські товари","Термоси та пляшки","Чашки","Кухлі","Рушники","Домашній текстиль","Аромати для дому"]},{name:"Іграшки для дітей"},{name:"Інструменти/обладнання"},{name:"Зоотовари"},{name:"Ювелірні вироби"},{name:"Велосипеди та аксесуари",category:["Велоаксесуари","Велокомп'ютери","Велошоломи","Велосумки","Велоодяг","Велоперчатки","Фляги та флягоутримувачі"]},{name:"Аксесуари для телефонів"},{name:"Спорт та захоплення",category:["Трекінгові палиці","Гірськолижні маски","Гірськолижні шоломи","Гірськолижні рукавички","Лижні палиці","Активний відпочинок","Bуризм та хобі","Газові та мультипаливні туристичні системи","Складні меблі","Посуд для відпочинку та туризму","Спальні мішки","Намети та аксесуари","Черевики для сноубордів","Кріплення для сноуборду","Черевики для лиж","Туристичні килимки","Зимові види спорту"]},{name:"Краса та здоров'я"},{name:"Електронні сигарети"},{name:"Кальяни та аксесуари"},{name:"Товари для бізнесу"}];let Ai=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const v9=()=>{const e=Hn().state,n=ln(cn),[r,i]=I.useState([]),[s,o]=I.useState(r),[a,l]=I.useState(!1),[u,c]=I.useState(),[h,d]=I.useState(""),[p,_]=I.useState(""),[y,w]=I.useState(e&&e.category?e.category:"");let m=new Date().getTime()/1e3;const f=k=>{c(k),l(!0)},v=()=>{l(!1)},E=async()=>{o([]);const k=pn(Dt(_e,"goods"),bn("createTime","desc"),Nn(24)),z=await mn(k),X=z.docs[z.docs.length-1];d(X),z.docs.map(se=>{o(oe=>[...oe,{...se.data(),id:se.id}])})},T=async()=>{const k=pn(Dt(_e,"goods"),bn("createTime","desc"),qo(h),Nn(24)),z=await mn(k),X=z.docs[z.docs.length-1];d(X),z.docs.map(se=>{o(oe=>[...oe,{...se.data(),id:se.id}])})},S=async()=>{o([]);const k=pn(Dt(_e,"goods"),Wo("category","==",y),bn("createTime","desc"),Nn(24)),z=await mn(k),X=z.docs[z.docs.length-1];d(X),z.docs.map(se=>{o(oe=>[...oe,{...se.data(),id:se.id}])})},N=async()=>{const k=pn(Dt(_e,"goods"),Wo("category","==",y),bn("createTime","desc"),qo(h),Nn(24)),z=await mn(k),X=z.docs[z.docs.length-1];d(X),z.docs.map(se=>{o(oe=>[...oe,{...se.data(),id:se.id}])})},R=async()=>{o([]);const k=pn(Dt(_e,"goods"),bn("name"),Nn(25)),z=await mn(k),X=z.docs[z.docs.length-1];d(X),z.docs.map(se=>{se.data().name.toLowerCase().includes(p.toLowerCase())&&o(oe=>[...oe,{...se.data(),id:se.id}])})},H=async()=>{const k=pn(Dt(_e,"goods"),bn("name"),qo(h),Nn(24)),z=await mn(k),X=z.docs[z.docs.length-1];d(X),z.docs.map(se=>{se.data().name.toLowerCase().includes(p.toLowerCase())&&o(oe=>[...oe,{...se.data(),id:se.id}])})},j=async()=>{o([]);const k=pn(Dt(_e,"goods"),Wo("category","==",y),bn("createTime","desc"),Nn(24)),z=await mn(k),X=z.docs[z.docs.length-1];d(X);let se=[];z.docs.map(oe=>{oe.data().name.toLowerCase().includes(p.toLowerCase())&&se.push({...oe.data(),id:oe.id})}),o(se)},ce=async()=>{const k=pn(Dt(_e,"goods"),Wo("category","==",y),bn("createTime","desc"),qo(h),Nn(24)),z=await mn(k),X=z.docs[z.docs.length-1];d(X),z.docs.map(se=>{se.data().name.toLowerCase().includes(p.toLowerCase())&&o(oe=>[...oe,{...se.data(),id:se.id}])})};I.useEffect(()=>{!(p.length>0)&&!y?E():!(p.length>0)&&y?S():p.length>0&&!y?R():j()},[p,y]);const Te=()=>{!(p.length>0)&&!y?T():!(p.length>0)&&y?N():p.length>0&&!y?H():ce()};return g.jsxs(p9,{children:[g.jsx(m9,{placeholder:"Назва товару",onChange:k=>{_(k.target.value)}}),g.jsxs(g9,{id:"category",name:"category",value:y,onChange:k=>{w(k.target.value)},children:[g.jsx(er,{value:"",selected:!(e&&e.category)&&"selected"||null,children:"Без категорії"},Ai()),XS.map((k,z)=>k.category?g.jsx("optgroup",{label:`${k.name}`,children:k.category&&k.category.map(X=>g.jsx(er,{value:`${X}`,selected:y===X&&"selected"||null,children:X},Ai()))},Ai()):g.jsx(er,{value:`${k.name}`,style:{fontWeight:"bolder"},selected:y===k.name&&"selected"||null,children:k.name},Ai()))]}),g.jsx(Ky,{children:s.length>0?s.map((k,z)=>g.jsx(g.Fragment,{children:g.jsxs(Qy,{onClick:()=>f(k),style:{backgroundImage:`url(${typeof k.image=="string"?k.image:k.image[0]})`},children:[n.favoriteList&&n.favoriteList.map(X=>{if(X.name===k.name)return g.jsx(Zy,{})}),m-k.createTime.seconds<259200&&g.jsx(Jy,{children:"Новинка!"}),g.jsxs(Yy,{children:[g.jsx(Xy,{children:k.name}),g.jsxs("p",{children:[k.price," грн."]})]})]},z)})):g.jsxs(y9,{children:[g.jsx("p",{children:"Нічого не знайдено"}),g.jsx("p",{children:" (використайте фільтр пошуку)"})]})}),g.jsx(QS,{onClick:Te,children:"Побачити більше"}),a&&g.jsx(ad,{card:u,closeModal:v})]})},_9=()=>{const[t,e]=I.useState([]),n=()=>{RS(Dt(_e,"orders"),o=>{e(o.docs.map(a=>({...a.data(),id:a.id})).sort((a,l)=>a.postDate.seconds>l.postDate.seconds?-1:1))})},r=async o=>{await PS(Et(_e,"orders",`${o}`))},i=async o=>{await Ni(Et(_e,"orders",`${o}`),{status:"take"})},s=async o=>{await Ni(Et(_e,"orders",`${o}`),{status:"send"})};return I.useEffect(()=>{n()}),g.jsx(mV,{children:t.map(o=>g.jsxs(gV,{style:o.status==="take"?{backgroundColor:"yellow"}:o.status==="send"?{backgroundColor:"green"}:{},children:[g.jsxs("p",{children:["Статус: ",o.status==="create"&&"Нове"," ",o.status==="take"&&"Прийняте",o.status==="send"&&"Відправлене"]}),g.jsxs("p",{children:["Дата замовлення:"," ",new Intl.DateTimeFormat("en-US").format(o.postDate.seconds)]}),g.jsxs("p",{children:["ФІП: ",o.userFullName]}),g.jsxs("p",{children:["Email: ",o.userEmail]}),g.jsxs("p",{children:["Номер телефону:",o.userNumber]}),g.jsxs("p",{children:["Адрес Нової почти: ",o.userPostAdress]}),g.jsx("p",{children:"Список замовлення:"}),o.cashList.map(a=>g.jsxs(g.Fragment,{children:[g.jsx(yV,{style:{backgroundImage:`url(${typeof a.image=="string"?a.image:a.image[0]})`}}),g.jsxs("p",{children:["Id товару: ",a.id]}),g.jsxs("p",{children:["Назва: ",a.name]}),g.jsxs("p",{children:["Ціна: ",a.price]})]})),"order.userMessege &&"," ",g.jsxs("p",{children:["Додаткова інформація:"," ",o.userMessege?o.userMessege:"Без додаткової інформації"]}),g.jsxs(vV,{children:[g.jsx(_V,{onClick:()=>r(o.id)}),g.jsx(wV,{onClick:()=>i(o.id)}),g.jsx(EV,{onClick:()=>s(o.id)})]})]}))})},w9=()=>{const{role:t}=ln(cn),e=Ir(),r=Hn().state,i=Qi(),[s,o]=I.useState(r?r.image:""),[a,l]=I.useState(r?r.name:""),[u,c]=I.useState(r?r.price:""),[h,d]=I.useState(r?r.producent:""),[p,_]=I.useState(r?r.size:""),[y,w]=I.useState(r?r.otherInfo:""),m=async f=>{try{r?(await My(Et(_e,"goods",`${f.id}`),f),alert("Change success")):(await pM(Dt(_e,"goods"),f),alert("Add success"))}catch(v){console.error("Error adding document: ",v)}};return I.useEffect(()=>{document.getElementById("form").addEventListener("submit",function(v){v.preventDefault();const{image:E,name:T,price:S,sex:N,producent:R,category:H,size:j,otherInfo:ce}=this.elements,k={image:E.value.split(" ").filter(z=>{if(z)return z}),name:T.value,price:S.value,sex:N.value||"",producent:R.value||"",category:H.value,size:j.value||"",otherInfo:ce.value||"",createTime:new Date};m(k),this.reset()})},[i]),I.useEffect(()=>{t!="admin"&&e("/")}),g.jsxs(g.Fragment,{children:[g.jsxs(a9,{id:"form",children:[g.jsx("p",{children:"Малюнок"}),g.jsx(S1,{required:!0,name:"image",placeholder:"Додати ссилку на картинку",value:s,onChange:f=>o(f.target.value)}),g.jsx("p",{children:"Назва"}),g.jsx(ru,{required:!0,name:"name",placeholder:"Додати назву",value:a,onChange:f=>l(f.target.value)}),g.jsx("p",{children:"Ціна в гривнях"}),g.jsx(ru,{required:!0,name:"price",placeholder:"Додати ціну",value:u,onChange:f=>c(f.target.value)}),g.jsx("p",{children:"Категорія"}),g.jsxs(tm,{id:"category",name:"category",children:[g.jsx(er,{value:"",children:"Вкажіть категорію"}),XS.map((f,v)=>f.category?g.jsx("optgroup",{label:`${f.name}`,children:f.category&&f.category.map(E=>g.jsx(er,{value:`${E}`,selected:r&&r.category===E&&"selected"||null,children:E},Ai()))},Ai()):g.jsx(er,{value:`${f.name}`,style:{fontWeight:"bolder"},selected:r&&r.category===f.name&&"selected"||null,children:f.name},Ai()))]}),g.jsx("p",{children:"Рід"}),g.jsxs(tm,{id:"sex",name:"sex",placeholder:"Вибрати рід",children:[g.jsx(er,{value:"",children:"Без роду"}),g.jsx(er,{value:"Чоловік",selected:r&&r.sex==="Чоловік"&&"selected"||null,children:"Чоловік"}),g.jsx(er,{value:"Жінка",selected:r&&r.sex==="Жінка"&&"selected"||null,children:"Жінка"})]}),g.jsx("p",{children:"Розмір"}),g.jsx(ru,{name:"size",placeholder:"Додати розмір",value:p,onChange:f=>_(f.target.value)}),g.jsx("p",{children:"Виробник"}),g.jsx(ru,{name:"producent",placeholder:"Додати виробника",value:h,onChange:f=>d(f.target.value)}),g.jsx("p",{children:"Додаткова інформація"}),g.jsx(S1,{name:"otherInfo",placeholder:"Додати додаткову інформацію",value:y,onChange:f=>w(f.target.value)}),g.jsx(YS,{children:r?"Зілити зміни":"Залити новий товар"})]}),g.jsx("h3",{children:"Замовлення"}),g.jsx(_9,{})]})},E9=()=>{const[t,e]=I.useState([]),[n,r]=I.useState(!1),[i,s]=I.useState(),[o,a]=I.useState(""),l=ln(cn),u=Qi();let c=new Date().getTime()/1e3;I.useEffect(()=>{jr.getItem("userEmail")&&jr.getItem("userPassword")&&h()},[]);const h=async()=>{const w=await jr.getItem("userEmail"),m=await jr.getItem("userPassword");u(Hy({email:w,password:m})),u(Gy(w))},d=w=>{s(w),r(!0)},p=()=>{r(!1)},_=async()=>{const w=pn(Dt(_e,"goods"),bn("createTime","desc"),Nn(24)),m=await mn(w);console.log(m.docs.map(v=>console.log(v.data())));const f=m.docs[m.docs.length-1];a(f),m.docs.map(v=>{e(E=>[...E,{...v.data(),id:v.id}])})},y=async()=>{const w=pn(Dt(_e,"goods"),bn("createTime","desc"),qo(o),Nn(24)),m=await mn(w),f=m.docs[m.docs.length-1];a(f),m.docs.map(v=>{e(E=>[...E,{...v.data(),id:v.id}])})};return I.useEffect(()=>{_()},[]),g.jsxs(g.Fragment,{children:[g.jsx(Ky,{id:"cardList",children:t.length>0&&t.map((w,m)=>g.jsx(g.Fragment,{children:g.jsxs(Qy,{onClick:()=>d(w),style:{backgroundImage:`url(${typeof w.image=="string"?w.image:w.image[0]})`},children:[l.favoriteList&&l.favoriteList.map(f=>{if(f.name===w.name)return g.jsx(Zy,{})}),c-w.createTime.seconds<259200&&g.jsx(Jy,{children:"Новинка!"}),g.jsxs(Yy,{children:[g.jsx(Xy,{children:w.name}),g.jsxs("p",{children:[w.price," грн."]})]})]},w.id)}))}),g.jsx(QS,{onClick:y,children:"Завантажити більше"}),n&&g.jsx(ad,{card:i,closeModal:p})]})},I9=A.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,x9=A.div`
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
`,T9=A.div`
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
`,S9=A.li`
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
`,C9=A.div`
  width: 50%;
`,A9=A.h3``,k9=A.p``,P9=A.button`
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
`,R9=A(mg)`
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
`,b9=A.button`
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
`,N9=A.textarea`
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
`,O9=()=>{const{cashList:t}=ln(cn),e=Qi(),n=Ir(),[r,i]=I.useState("");return g.jsxs(x9,{children:[g.jsx(I9,{children:"Список товарів"}),t.length>0?g.jsxs(g.Fragment,{children:[t.map((s,o)=>g.jsxs(S9,{children:[g.jsx(T9,{style:{backgroundImage:`url(${typeof s.image=="string"?s.image:s.image[0]})`}}),g.jsxs(C9,{children:[g.jsx(A9,{children:s.name}),g.jsxs(k9,{children:[s.price," грн."]})]}),g.jsx(P9,{onClick:()=>e(zV(o)),children:g.jsx(R9,{})})]})),g.jsx(N9,{placeholder:"Додаткова інформація. Наприклад: колір, розмір.",onChange:s=>i(s.target.value)}),g.jsx(b9,{onClick:()=>n("/checkout",{state:{userMessege:r}}),children:"Перейти до оформлення відправки"})]}):"Корзина пуста"]})},D9=A.div`
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
`,L9=A.h2`
  font-size: 16px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 1440px) {
    font-size: 42px;
  }
`,iu=A.input`
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
`,Oo=A.div`
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
`,M9=A.button`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`,C1=A.p`
  font-size: 10px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`,V9=()=>{const{state:t}=Hn(),e=t.userMessege,n=ln(cn),[r,i]=I.useState(""),[s,o]=I.useState(""),[a,l]=I.useState(""),[u,c]=I.useState(""),[h,d]=I.useState(""),[p,_]=I.useState(""),[y,w]=I.useState(""),[m,f]=I.useState(""),[v,E]=I.useState(!1),T=Qi(),S=Ir(),N=async()=>{const k=await Dy(Et(_e,"users",`${n.email}`));if(k.exists()){const{name:z,userPostAdress:X,userNumber:se,email:oe}=k.data();l(oe),i(z),o(se),c(X)}else console.log("No such document!")};I.useEffect(()=>{n.email&&N()},[n]);const R=k=>{i(k.target.value),/^(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])\s+(\W+[^!@#$%^&*()_+~`/?\|=1234567890])$/.test(String(k.target.value).toLowerCase())?d(""):d("Введіть повнe призвіще, ім'я, побатькові")},H=k=>{l(k.target.value),/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(String(k.target.value).toLowerCase())?_(""):_("Електронний адрес повинен містити літери латинського алфавіту, символи '@' та '.'")},j=k=>{o(k.target.value),/^([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])$/.test(String(k.target.value))?w(""):w("Номер невірного формату (наприклад: '043*******')")},ce=k=>{c(k.target.value),k.target.value.length>0?f(""):f("Адрес відділення пошти пустий")},Te=async()=>{if(a&&r&&s&&u&&!p&&!y&&!h&&!m)try{const k=new Date,z=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate()+" "+k.getHours()+":"+k.getMinutes()+":"+k.getSeconds();await My(Et(_e,"orders",`${z}`),{userFullName:r,userNumber:s,userEmail:a,userPostAdress:u,postDate:z,id:`${a}${z}`,status:"create",cashList:n.cashList,userMessege:e}),T(dV()),S("/")}catch(k){console.log(k)}else E(!0)};return I.useEffect(()=>{!p&&!y&&!h&&!m&&E(!1)}),g.jsxs(D9,{id:"CheckoutForm",children:[g.jsx(L9,{children:"Контактні дані"}),g.jsx(iu,{required:!0,name:"name",value:r,onChange:k=>{R(k)},placeholder:"Введіть ПІБ",style:h?{borderColor:"red"}:{}}),h&&g.jsx(Oo,{children:h}),g.jsx(iu,{value:s,onChange:k=>{j(k)},placeholder:"Введіть контактний номер телефону",style:y?{borderColor:"red"}:{}}),y&&g.jsx(Oo,{children:y}),g.jsx(iu,{required:!0,name:"email",value:a,onChange:k=>{H(k)},placeholder:"Введіть контактну електронну адресу",style:p?{borderColor:"red"}:{}}),p&&g.jsx(Oo,{children:p}),g.jsx(iu,{value:u,onChange:k=>{ce(k)},placeholder:"Введіть адресу відділення пошти",style:m?{borderColor:"red"}:{}}),m&&g.jsx(Oo,{children:m}),g.jsx(Oo,{children:'Попередження, відправка куплених товарів відбувається виключно мережею відділень "Нова пошта", оплатою при отриманні !!!'}),g.jsx(C1,{children:"Для додаткової інформації чи відказу від замовлення"}),g.jsx(C1,{children:"сконтактуйтесь з адміністратором msshopua@gmail.com"}),g.jsx(M9,{onClick:Te,style:v?{background:"red"}:{},children:v?"Невірно заповнена форма":"Завершити оформлення замовлення"})]})};function $9(){return g.jsxs(Ik,{children:[g.jsxs(Xn,{path:"/",element:g.jsx(o9,{}),children:[g.jsx(Xn,{index:!0,element:g.jsx(E9,{})}),g.jsx(Xn,{path:"category",element:g.jsx(f9,{})}),g.jsx(Xn,{path:"search",element:g.jsx(v9,{})}),g.jsx(Xn,{path:"admin",element:g.jsx(w9,{})}),g.jsx(Xn,{path:"cashList",element:g.jsx(O9,{})}),g.jsx(Xn,{path:"checkout",element:g.jsx(V9,{})})]}),g.jsx(Xn,{path:"*",element:g.jsx(_k,{to:"/"})})]})}var JS="persist/FLUSH",ev="persist/REHYDRATE",ZS="persist/PAUSE",eC="persist/PERSIST",tC="persist/PURGE",tv="persist/REGISTER";function A1(t){return U9(t)||F9(t)||j9()}function j9(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function F9(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function U9(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function k1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nm(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?k1(n,!0).forEach(function(r){z9(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k1(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function z9(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nC={registry:[],bootstrapped:!1},B9=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:nC,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case tv:return nm({},e,{registry:[].concat(A1(e.registry),[n.key])});case ev:var r=e.registry.indexOf(n.key),i=A1(e.registry);return i.splice(r,1),nm({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function W9(t,e,n){var r=n||!1,i=Wy(B9,nC,e&&e.enhancer?e.enhancer:void 0),s=function(u){i.dispatch({type:tv,key:u})},o=function(u,c,h){var d={type:ev,payload:c,err:h,key:u};t.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=nm({},i,{purge:function(){var u=[];return t.dispatch({type:tC,result:function(h){u.push(h)}}),Promise.all(u)},flush:function(){var u=[];return t.dispatch({type:JS,result:function(h){u.push(h)}}),Promise.all(u)},pause:function(){t.dispatch({type:ZS})},persist:function(){t.dispatch({type:eC,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}const q9=VS({[Lc.name]:Lc.reducer}),rC=GM({reducer:q9,middleware:t=>t({serializableCheck:{ignoredActions:[JS,ev,ZS,eC,tC,tv]}})});W9(rC);vf.createRoot(document.getElementById("root")).render(g.jsx($t.StrictMode,{children:g.jsx(kk,{children:g.jsx(AP,{store:rC,children:g.jsx($9,{})})})}));
