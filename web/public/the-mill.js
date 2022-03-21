var e=Object.freeze({__proto__:null,get knight(){return Yo},get wagon(){return Xo}}),t=Object.freeze({__proto__:null,get mill(){return si},get castleSmall(){return ci},get lumberjackSmall(){return hi}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new Map;class n{constructor(e,t){if(this._$cssResult$=!0,t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=r.get(this.cssText);return o&&void 0===e&&(r.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new n(o,i)},a=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new n("string"==typeof e?e:e+"",i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window.trustedTypes,d=c?c.emptyScript:"",u=window.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},v=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:v};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const i=this._$Eh(o,t);void 0!==i&&(this._$Eu.set(i,o),e.push(i))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eh(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{o?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ES(e,t,o=g){var i,r;const n=this.constructor._$Eh(e,o);if(void 0!==n&&!0===o.reflect){const s=(null!==(r=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:h.toAttribute)(t,o.type);this._$Ei=e,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(e,t){var o,i,r;const n=this.constructor,s=n._$Eu.get(e);if(void 0!==s&&this._$Ei!==s){const e=n.getPropertyOptions(s),a=e.converter,l=null!==(r=null!==(i=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==r?r:h.fromAttribute;this._$Ei=s,this[s]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,o){let i=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||v)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.1");const f=globalThis.trustedTypes,b=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,y="?"+w,$=`<${y}>`,k=document,x=(e="")=>k.createComment(e),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,M=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,C=/"/g,z=/^(?:script|style|textarea|title)$/i,T=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),R=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),U=new WeakMap,N=k.createTreeWalker(k,129,null,!1);class B{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,n=0;const s=e.length-1,a=this.parts,[l,c]=((e,t)=>{const o=e.length-1,i=[];let r,n=2===t?"<svg>":"",s=_;for(let t=0;t<o;t++){const o=e[t];let a,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,l=s.exec(o),null!==l);)d=s.lastIndex,s===_?"!--"===l[1]?s=S:void 0!==l[1]?s=M:void 0!==l[2]?(z.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=E):void 0!==l[3]&&(s=E):s===E?">"===l[0]?(s=null!=r?r:_,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?E:'"'===l[3]?C:A):s===C||s===A?s=E:s===S||s===M?s=_:(s=E,r=void 0);const u=s===E&&e[t+1].startsWith("/>")?" ":"";n+=s===_?o+$:c>=0?(i.push(a),o.slice(0,c)+"$lit$"+o.slice(c)+w+u):o+w+(-2===c?(i.push(void 0),t):u)}const a=n+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,i]})(e,t);if(this.el=B.createElement(l,o),N.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=N.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const o=c[n++];if(e.push(t),void 0!==o){const e=i.getAttribute(o.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?q:"@"===t[1]?I:W})}else a.push({type:6,index:r})}for(const t of e)i.removeAttribute(t)}if(z.test(i.tagName)){const e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=f?f.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],x()),N.nextNode(),a.push({type:2,index:++r});i.append(e[t],x())}}}else if(8===i.nodeType)if(i.data===y)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(w,e+1));)a.push({type:7,index:r}),e+=w.length-1}r++}}static createElement(e,t){const o=k.createElement("template");return o.innerHTML=e,o}}function P(e,t,o=e,i){var r,n,s,a;if(t===R)return t;let l=void 0!==i?null===(r=o._$Cl)||void 0===r?void 0:r[i]:o._$Cu;const c=j(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,o,i)),void 0!==i?(null!==(s=(a=o)._$Cl)&&void 0!==s?s:a._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(t=P(e,l._$AS(e,t.values),l,i)),t}class D{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:k).importNode(o,!0);N.currentNode=r;let n=N.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new L(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new X(n,this,e)),this.v.push(t),l=i[++a]}s!==(null==l?void 0:l.index)&&(n=N.nextNode(),s++)}return r}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class L{constructor(e,t,o,i){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),j(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==R&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return O(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==H&&j(this._$AH)?this._$AA.nextSibling.data=e:this.k(k.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.m(o);else{const e=new D(r,this),t=e.p(this.options);e.m(o),this.k(t),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new B(e)),t}S(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new L(this.A(x()),this.A(x()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class W{constructor(e,t,o,i,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const r=this.strings;let n=!1;if(void 0===r)e=P(this,e,t,0),n=!j(e)||e!==this._$AH&&e!==R,n&&(this._$AH=e);else{const i=e;let s,a;for(e=r[0],s=0;s<r.length-1;s++)a=P(this,i[o+s],t,s),a===R&&(a=this._$AH[s]),n||(n=!j(a)||a!==this._$AH[s]),a===H?e=H:e!==H&&(e+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}n&&!i&&this.C(e)}C(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Z extends W{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===H?void 0:e}}const Y=f?f.emptyScript:"";class q extends W{constructor(){super(...arguments),this.type=4}C(e){e&&e!==H?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class I extends W{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=P(this,e,t,0))&&void 0!==o?o:H)===R)return;const i=this._$AH,r=e===H&&i!==H||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==H&&(i===H||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const G=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,K;null==G||G(B,L),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.1");class J extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,o)=>{var i,r;const n=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:t;let s=n._$litPart$;if(void 0===s){const e=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;n._$litPart$=s=new L(t.insertBefore(x(),e),e,void 0,null!=o?o:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return R}}J.finalized=!0,J._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:J});const V=globalThis.litElementPolyfillSupport;null==V||V({LitElement:J}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.2.0");const Q={};var ee;!function(e){e[e.SILENT=0]="SILENT",e[e.ERROR=1]="ERROR",e[e.INFO=80]="INFO",e[e.DEBUG=90]="DEBUG",e[e.TRACE=100]="TRACE"}(ee||(ee={}));let te=ee.SILENT;const oe=e=>te=e;let ie=[];const re=(e,t,...o)=>{ie.forEach((i=>i(ee.ERROR,e,t,...o))),te>=ee.ERROR&&console.error(t,e,...o)},ne=(e,t,...o)=>{ie.forEach((i=>i(ee.INFO,e,t,...o))),te>=ee.INFO&&(te===ee.TRACE?console.trace:console.log)(t,e,...o)},se=(e,t,...o)=>{ie.forEach((i=>i(ee.DEBUG,e,t,...o))),te>=ee.DEBUG&&(te===ee.TRACE?console.trace:console.log)(t,e,...o)},ae={queue:{},list:{}};function le(e){return e.reduce(((e,t)=>`${e};${t.name};`),"")}const ce=new class{constructor(){this.actionDictionary={}}on(e,t){if(Array.isArray(e)){const o=le(e);if(ae.list[o])throw re("Hypothalamus.on",new Error("Cannot register the same list of hormones twice"),o),new Error("Cannot register the same list of hormones twice");ne("[Hypothalamus.on] Adding new action when all in a list of hormones are released",o,e),ae.list[o]={hormones:[...e],callback:t}}else ne("Hypothalamus.on","Adding new action when a hormone is released",e.name),this.actionDictionary[e.name]=this.actionDictionary[e.name]||[],this.actionDictionary[e.name].push(t)}drop(e){Array.isArray(e)?(se("Hypothalamus.drop","Dropping a list of hormones",le(e),e),delete ae.queue[le(e)],delete ae.list[le(e)]):(se("Hypothalamus.drop","Dropping a hormone",e.name),this.actionDictionary[e.name]=[])}dropAll(){se("Hypothalamus.dropAll","Dropping all hormones"),this.actionDictionary={},ae.queue={},ae.list={}}collect(e,t,o){const i=`collect;;${e.name};${t.name};`;if(ae.list[i])throw re("Hypothalamus.collect",new Error("Cannot register the same list of hormones twice"),i),new Error("Cannot register the same list of hormones twice");ne("[Hypothalamus.collect] Adding new action when collected hormones are released",i,e,t),ae.list[i]={hormones:[t],callback:o}}orchestrate(e,t){this.actionDictionary[e.name]&&this.actionDictionary[e.name].forEach((e=>e(t)));const o=Object.keys(ae.queue).filter((t=>t.includes(`;${e.name};`))),i=Object.keys(ae.list).filter((t=>t.indexOf(`;${e.name};`)>-1&&o.every((e=>e!==t))));i.forEach((e=>{ae.queue[e]={hormones:[...ae.list[e].hormones],values:{},callback:ae.list[e].callback}}));const r=[...new Set([...o,...i])];for(let o=0;o<r.length;o++){const i=r[o];if(i.startsWith("collect;;")){const[o]=i.replace("collect;;","").split(";");e.name===o?ae.queue[i].values[e.name]=[...ae.queue[i].values[e.name]||[],t]:(ae.queue[i].values[e.name]=t,ae.queue[i].callback(ae.queue[i].values),delete ae.queue[i])}else ae.queue[i].hormones=ae.queue[i].hormones.filter((t=>t.name!==e.name)),ae.queue[i].values[e.name]=t,ae.queue[i].hormones.length<1&&(ae.queue[i].callback(ae.queue[i].values),delete ae.queue[i])}}};function de(e,t={}){return ue(e,Object.assign(Object.assign({},t),{readOnce:!0}))}function ue(e,t={}){return he(Q)(e,t)}const he=e=>(t,o={})=>{if(e[t]&&!o.loadIfExists)throw re("hormone.defineHormone",new Error("Hormone already created"),t),new Error("Hormone already created");if(e[t]&&o.loadIfExists)return se("hormone.defineHormone","Hormone already created, reusing existing",t),{name:t};const{defaultValue:i,transformation:r,readOnce:n}=o;return e[t]={name:t,value:i,defaultValue:i,transformation:r,receptors:[],readOnce:null!=n&&n},{name:t}};async function ve(e,t){return ge(Q)(e,t)}const ge=e=>async(t,o)=>{if(!t)throw re("hormone.releaseHormone",new Error("Hormone cannot be undefined")),new Error("Hormone cannot be undefined");const{name:i}=t;if(!e[i])throw re("hormone.releaseHormone",new Error("Hormone does not exist"),i),new Error("Hormone does not exist");var r;r=o,e[i].value=(void 0===r||r instanceof Function)&&o?o(e[i].value):o,ne("hormone.releaseHormone","Releasing passed hormone",i,e[i].value);const{receptors:n,transformation:s}=e[i];s&&s(e[i].value);const a=e[i].value;return ce.orchestrate({name:i},a),await Promise.all(n.filter((e=>{const t=void 0===e.onlyIf||e.onlyIf(a);return se("hormone.releaseHormone",t?"Keeping receptor because condition matched or no condition":"Filtered receptor from the triggers because condition not matched",e),t})).map((e=>(null==e?void 0:e.onTriggered)?null==e?void 0:e.onTriggered(a):a))),e[i].readOnce&&(se("hormone.releaseHormone","Resetting hormone because it is readOnce",i),e[i].value=e[i].defaultValue),Object.assign({},e[i])};function me(e,{name:t},o,i){return pe(Q)(e,{name:t},o,i)}const pe=e=>(t,{name:o},i,r)=>{const n=null!=r?r:i,s=r?i:void 0;if(!e[o])throw re("receptor.useReceptor",new Error("Hormone is not defined"),o),new Error(`Hormone "${o}" is not defined`);((e,t,o,i)=>{const r=(null==i?void 0:i.toString())||o;return!e[o].receptors.some((e=>e.parent===t&&e.key===r))})(e,t,o,s)?(ne("receptor.useReceptor","Pushing new receptor to hormone",o,{parent:t}),e[o].receptors.push({key:(null==s?void 0:s.toString())||o,parent:t,onlyIf:s,onTriggered:n}),void 0!==e[o].value?n(e[o].value):void 0!==e[o].defaultValue&&n(e[o].defaultValue)):((e,t,...o)=>{ie.forEach((i=>i(ee.TRACE,e,t,...o))),te===ee.TRACE&&console.trace(t,e,...o)})("receptor.useReceptor","Receptor not pushed because already subscribed",o,{parent:t})};function fe(e,[t,o]){return t.toLowerCase()!==t?e[t]=Object.assign(Object.assign({},o),{attribute:t.replace(/[A-Z]/g,"-$&").toLowerCase()}):e[t]=o,e}function be(e){return"boolean"==typeof e?{type:Boolean}:Array.isArray(e)?{type:Array}:"object"==typeof e?{type:Object}:{}}const we=e=>(e=>void 0!==e&&void 0!==e.props)(e)?(e.props||[]).reduce(((e,t)=>(Object.entries(t).forEach((t=>e=fe(e,t))),e)),{}):(e=>{return t=e||{},Object.entries(t).reduce(((e,[t,o])=>fe(e,[t,be(o)])),{});var t})(null==e?void 0:e.defaults),ye={},$e=(e,t,o)=>{if(ye[e])return ye[e];customElements.define(e,class extends J{constructor(){super(),this.content=T``,(e=>void 0!==e&&void 0!==e.defaults)(o)&&Object.entries(o.defaults).forEach((([e,t])=>{this[e]=t}))}static get properties(){return we(o)}static get styles(){return null==o?void 0:o.styles}async performUpdate(){return this.content=await Promise.resolve(t(this)).catch((e=>T`<slot name="error">${e}</slot>`)),super.performUpdate()}render(){return this.content}});const i=document.createElement(e);return ye[e]=i,i};var ke="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},xe={},je={},Oe={};Object.defineProperty(Oe,"t",{value:!0}),Oe.shallowClone=void 0,Oe.shallowClone=function(e){return"object"!=typeof e||!e||e instanceof Date||e instanceof RegExp?e:Array.isArray(e)?[...e]:Object.assign({},e)};var _e={};function Se(e){if(!e.dispatchEvent||!e.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return e}Object.defineProperty(_e,"t",{value:!0}),_e.withWorkflow=_e.withReducer=_e.withState=_e.decorate=_e.asUpdateableLitElement=void 0,_e.asUpdateableLitElement=Se;const Me="__registered_states";function Ee(e){const t=e;if(t[Me])return t;const o=Se(e),i=o.updated;return t[Me]={index:0,count:0,states:[],reducers:[],workflows:[]},o.updated=e=>(t[Me].index=0,i(e)),t}_e.decorate=Ee,_e.withState=function(e,t,o={}){const i=Ee(e),{index:r,count:n}=i[Me];return r===n?(i[Me].index++,i[Me].count++,i[Me].states.push(t),t):(i[Me].index++,o.updateDefault&&i[Me].states[r].inject(t.get()),i[Me].states[r])},_e.withReducer=function(e,t){const o=Ee(e),{index:i,count:r,reducers:n}=o[Me];return i!==r||n[i-1]?o[Me].reducers[i-1]:(o[Me].reducers[i-1]=t,t)},_e.withWorkflow=function(e,t){const o=Ee(e),{index:i,count:r,workflows:n}=o[Me];return i!==r||n[i-1]?o[Me].workflows[i-1]:(o[Me].workflows[i-1]=t,t)};var Ae=ke&&ke.o||function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function s(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(je,"t",{value:!0}),je.useState=void 0;const Ce=Oe,ze=_e;je.useState=(e,t,o={})=>{let i=(0,Ce.shallowClone)(t);const r=[()=>Ae(void 0,void 0,void 0,(function*(){return e.requestUpdate(),yield e.updateComplete}))],n=e=>Ae(void 0,void 0,void 0,(function*(){i!==e&&(i=(0,Ce.shallowClone)(e),yield Promise.all(r.map((e=>e(i)))))}));return(0,ze.withState)(e,new class{set value(e){n(e)}get value(){return i}publish(e){n(e)}set(e){return Ae(this,void 0,void 0,(function*(){yield n(e)}))}subscribe(e){r.push(e)}inject(e){i=e}get(){return i}getState(){return i}},o)};var Te={},Re=ke&&ke.o||function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function s(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(Te,"t",{value:!0}),Te.useReducer=void 0;const He=je,Ue=_e;Te.useReducer=(e,t,o,i={})=>{const{get:r,set:n}=(0,He.useState)(e,o,i),s=[],a=(o,a)=>Re(void 0,void 0,void 0,(function*(){const l=t(r());return l[o]&&(yield n(yield l[o](a)),s.forEach((e=>e(o,r()))),i.dispatchEvent&&e.dispatchEvent(new CustomEvent(o,{detail:r()}))),r()}));return(0,Ue.withReducer)(e,{get:r,subscribe:e=>s.push(e),when:(e,t)=>s.push(((o,i)=>o===e&&t(i))),set:a,dispatch:a})};var Ne={},Be=ke&&ke.o||function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function s(e){try{l(i.next(e))}catch(e){n(e)}}function a(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(Ne,"t",{value:!0}),Ne.useWorkflow=void 0;const Pe=xe,De=_e;Ne.useWorkflow=(e,t)=>{const o=Object.entries(t).reduce(((t,[o,{reducer:i,initialState:r}])=>(t[o]=(0,Pe.useReducer)(e,i,r),t)),{}),i={},r={},n=[],s=e=>(n.push({type:"projections",args:[e]}),o[e]?o[e].get():void 0);return(0,De.withWorkflow)(e,{addActivity:(e,t)=>Be(void 0,void 0,void 0,(function*(){var r,s;n.push({type:"addActivity",args:[e,t]}),yield Promise.all(null!==(s=null===(r=i[e])||void 0===r?void 0:r.map((e=>e(t))))&&void 0!==s?s:[]);for(const i of Object.values(o))yield i.dispatch(e,t)})),addSideeffect:(e,t)=>{n.push({type:"addSideeffect",args:[e,t]}),i[e]=[...i[e]||[],t]},projections:s,addCompensation:(e,t)=>{n.push({type:"addCompensation",args:[e,t]}),r[e]=[...r[e]||[],t]},compensate:()=>Be(void 0,void 0,void 0,(function*(){n.push({type:"compensate",args:[]});for(const[e,t]of Object.entries(r))for(const i of t)for(const t of Object.values(o))yield t.dispatch(e,i)})),after:(e,t,o)=>{n.push({type:"after",args:[e,t,o]});const i=()=>Be(void 0,void 0,void 0,(function*(){n.some((e=>((e,t)=>{if(e.type!==t.type)return!1;for(let o=0;o<t.args.length;o++)if(e.args[o]!==t.args[o])return!1;return!0})(e,t)))||(new Date(Date.now())>e?yield o():setTimeout(i,100))}));i()},plan:e=>Be(void 0,void 0,void 0,(function*(){for(const[o,i]of Object.entries(e))if(t[o]&&JSON.stringify(s(o))===JSON.stringify(t[o].initialState))return yield i();return e[""]?yield e[""]():Promise.resolve(null)})),history:()=>[...n]})},function(e){Object.defineProperty(e,"t",{value:!0}),e.useWorkflow=e.useReducer=e.useState=void 0;var t=je;Object.defineProperty(e,"useState",{enumerable:!0,get:function(){return t.useState}});var o=Te;Object.defineProperty(e,"useReducer",{enumerable:!0,get:function(){return o.useReducer}});var i=Ne;Object.defineProperty(e,"useWorkflow",{enumerable:!0,get:function(){return i.useWorkflow}})}(xe);var Le={},We={},Ze={};function Ye(e){if(!e.dispatchEvent||!e.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return e}Object.defineProperty(Ze,"t",{value:!0}),Ze.withEffect=Ze.decorate=Ze.asUpdateableLitElement=void 0,Ze.asUpdateableLitElement=Ye;const qe="__registered_effects";function Ie(e){const t=e;if(t[qe])return t;const o=Ye(e),i=o.updated;return t[qe]={index:0,count:0,effects:[]},o.updated=e=>(t[qe].index=0,i(e)),t}Ze.decorate=Ie,Ze.withEffect=function(e,t){const o=Ie(e),{index:i,count:r}=o[qe];return i===r?(o[qe].index++,o[qe].count++,o[qe].effects.push(t),t):(o[qe].index++,o[qe].effects[i])},Object.defineProperty(We,"t",{value:!0}),We.useOnce=We.useEffect=void 0;const Xe=Ze;function Ge(e,t,o){const i=(0,Xe.withEffect)(e,{on:t,observe:["__initial__dirty"]});i.observe.some(((e,t)=>o[t]!==e))&&i.on(),i.observe=o}We.useEffect=Ge,We.useOnce=(e,t)=>Ge(e,t,[]),function(e){Object.defineProperty(e,"t",{value:!0}),e.useOnce=e.useEffect=void 0;var t=We;Object.defineProperty(e,"useEffect",{enumerable:!0,get:function(){return t.useEffect}}),Object.defineProperty(e,"useOnce",{enumerable:!0,get:function(){return t.useOnce}})}(Le);var Fe=Le.useOnce,Ke=xe.useState;function Je(e,t){return Array.from({length:t-e+1},((e,t)=>t))}class Ve{constructor(e,t,o,i=1){this.x=e,this.y=t,this.z=o,this.costs=i}equals(e){return null!==e&&this.x===e.x&&this.y===e.y&&this.z===e.z}add(e){const{x:t,y:o,z:i}=this;return new Ve(t+e.x,o+e.y,i+e.z)}remove(e){const{x:t,y:o,z:i}=this;return new Ve(t-e.x,o-e.y,i-e.z)}vector(e){return new Ve(e.x-this.x,e.y-this.y,e.z-this.z)}distance(e){return Math.max(Math.abs(this.x-e.x),Math.abs(this.y-e.y),Math.abs(this.z-e.z))}heuristic(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}range(e){const t=[];for(let o=-e;o<=e;o++)for(let i=Math.max(-e,-o-e);i<=Math.min(e,-o+e);i++)t.push(this.add(new Ve(o,i,-o-i)));return t}direction(e){return Qe[e]}directionTo(e){const t=Je(0,5).find((t=>this.neighbor(t).equals(e)));return void 0!==t&&t>=0?this.direction(t):null}neighbor(e){return this.add(this.direction(e))}neighbors(e){return Je(0,5).map((e=>this.neighbor(e))).filter((t=>e.some((e=>e.equals(t)))))}ring(e){const t=[],o=-1*e;for(const i of Je(o,e))for(const r of Je(Math.max(o,-1*i-o),Math.min(e,-1*i+e))){const e=-i-r;t.push(this.add(new Ve(i,r,e)))}return t}cost(){return this.costs}toPosition(){const e=this.x+(this.z+(1&this.z))/2,t=this.z;return new ot(t,e)}toCoords(){return this.toPosition().toCoords()}toString(){return`${this.x}:${this.y}:${this.z}`}}const Qe=[new Ve(1,-1,0),new Ve(1,0,-1),new Ve(0,1,-1),new Ve(-1,1,0),new Ve(-1,0,1),new Ve(0,-1,1)];const et={manhattan:[{row:0,col:-1},{row:1,col:0},{row:0,col:1},{row:-1,col:0}],euclid:[{row:1,col:-1},{row:-1,col:1},{row:1,col:0},{row:0,col:1},{row:-1,col:0},{row:0,col:-1},{row:-1,col:-1},{row:1,col:1}]},tt=(e,t)=>e.col.toString()===t.col.toString()&&e.row.toString()===t.row.toString();class ot{constructor(e,t,o="manhattan"){this.row=e,this.col=t,this.system=o}vector(e){return new ot(e.row-this.row,e.col-this.col)}toCube(){const e=this.col-(this.row+(1&this.row))/2,t=this.row;return new Ve(e,-e-t,t)}toCoords(){const{row:e,col:t}=this;return{col:t,row:e}}neighbor(e){const t=it(et[this.system][e]);return t.system=this.system,this.add(t)}neighbors(){return Je(0,et[this.system].length-1).map((e=>this.neighbor(e)))}distance(e){return function(e,t){return Math.sqrt(Math.pow(t.col-e.col,2)+Math.pow(t.row-e.row,2))}(this,e)}manhattanDistance(e){return function(e,t){return Math.abs(Math.abs(e.col-t.col)+Math.abs(e.row-t.row))}(this,e)}add(e){const{col:t,row:o}=this;return new ot(o+e.row,t+e.col,this.system)}remove(e){const{col:t,row:o}=this;return new ot(o-e.row,t-e.col,this.system)}equals(e){return null!=e&&e.col.toString()===this.col.toString()&&e.row.toString()===this.row.toString()}toString(){return`${this.col}:${this.row}`}toEuclidPosition(){return new ot(this.row,this.col,"euclid")}toManhattanPosition(){return new ot(this.row,this.col,"manhattan")}static fromString(e){if(!e)return null;const[t,o]=e.split(":").map((e=>parseInt(e,10)));return new ot(o,t)}}const it=({row:e,col:t})=>new ot(e,t);function rt(){var e=(new Date).getTime(),t=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(o){var i=16*Math.random();return e>0?(i=(e+i)%16|0,e=Math.floor(e/16)):(i=(t+i)%16|0,t=Math.floor(t/16)),("x"===o?i:3&i|8).toString(16)}))}const nt={id:"building-castle-small",name:"Small Castle",occurences:{min:1},resources:{grain:{generatedResource:10},hay:{generatedResource:10},stone:{generatedResource:10},iron:{generatedResource:10}}},st={green:e=>Math.max(.75*e.length,Math.round(Math.random()*(e.length-1))),red:e=>Math.min(.25*e.length,Math.round(Math.random()*(e.length-1)))};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function at(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(o[i[r]]=e[i[r]])}return o}const lt=["hay","grain","iron","wood","stone"];function ct(e){var t;return void 0!==e&&void 0!==(null===(t=e)||void 0===t?void 0:t.resources)}function dt(e){var t,o;return void 0!==e&&(null===(t=e)||void 0===t?void 0:t.row)>=0&&(null===(o=e)||void 0===o?void 0:o.col)>=0}function ut(e){var t,o;return e&&(null===(o=null===(t=e)||void 0===t?void 0:t.actions)||void 0===o?void 0:o.max)>0}function ht(e){var t,o;return e&&(null===(o=null===(t=e)||void 0===t?void 0:t.dices)||void 0===o?void 0:o.length)>0}const vt={id:"building-mill",name:"Mill",occurences:{min:1},resources:{grain:{hay:100,generatedResource:50},hay:{generatedResource:50}}};function gt(e){return void 0!==e&&e.max>0}const mt=[Object.assign(Object.assign({},vt),{min:0,max:2}),Object.assign(Object.assign({},vt),{min:8,max:10})],pt=({min:e,max:t},o,i)=>{const r=e=>o*i*(e/10);return Math.floor(Math.random()*(r(t)-r(e))+r(e))},ft=(e,t)=>{var o;return null===(o=null==e?void 0:e.map)||void 0===o?void 0:o.reduce(((e,o)=>[...e,...o.reduce(((e,o)=>[...e,...o.elements.filter(ct).filter((e=>e.team===t))]),[])]),[])},bt=(...e)=>e.reduce(((e,t)=>(e.push(...Object.entries(t.resources).map((e=>{var[o,i]=e,{generatedResource:r}=i,n=at(i,["generatedResource"]);let s={};s[o]=Object.assign(Object.assign({},n),{generatedResource:r});return Object.assign(Object.assign({},t),{resources:s})}))),e)),[]).filter(Boolean),wt={gras:{sprite:{name:"gras",file:"hexagonTerrain_sheet",x:414,y:1906},movementCosts:1,defense:0},desert:{sprite:{name:"desert",file:"hexagonTerrain_sheet",x:902,y:627},movementCosts:4,defense:0},mud:{sprite:{name:"mud",file:"hexagonTerrain_sheet",x:658,y:912},movementCosts:4,defense:1},muddyHills:{sprite:{name:"muddyHills",file:"hexagonTerrain_sheet",x:780,y:627},movementCosts:8,defense:3},forest:{sprite:{name:"forest",file:"hexagonTerrain_sheet",x:536,y:912},movementCosts:8,defense:3},mountain:{sprite:{name:"mountain",file:"hexagonTerrain_sheet",x:414,y:1052},movementCosts:10,defense:9}},yt=()=>{const e=Object.keys(wt);return wt[e[Math.floor(Math.random()*(e.length-1))]]},$t=ue("game/world/worldLoaded"),kt=ue("game/start"),xt=ue("game/load/sidebar"),jt=({rows:e,cols:t})=>(e=>{const t=new Array(e.rows*e.cols).map((()=>[]));return mt.forEach((o=>{var i;let r=o.occurences.factor?Math.max(o.occurences.min,t.length/o.occurences.factor):o.occurences.min;for(;r>0;){const s=gt(o)?pt(o,e.rows,e.cols):(n=t.length,Math.round(Math.random()*(n-1)));t[s]=[...null!==(i=t[s])&&void 0!==i?i:[],Object.assign(Object.assign({},o),{name:o.id,id:rt()})],r--}var n})),t})({rows:e,cols:t}),Ot=(e,{rows:t,cols:o})=>((e,t)=>{const o=new Array(t.rows*t.cols).map((()=>[]));return[nt].forEach((t=>{var i;let r=t.occurences.factor?Math.max(t.occurences.min,o.length/t.occurences.factor):t.occurences.min;for(;r>0;){const n=st[e](o);o[n]=[...null!==(i=o[n])&&void 0!==i?i:[],{name:t.id,team:e,id:rt(),resources:t.resources}],r--}})),o})(e,{rows:t,cols:o}),_t=(e,t,o)=>{var i;return(null!==(i=e.pop())&&void 0!==i?i:[]).map((e=>Object.assign(Object.assign({},e),{row:t,col:o})))};class St{constructor(e=4086,t=Uint32Array){this.capacity=e,this.capacity=e,this._keys=[],this._priorities=new t(e+1),this.length=0}clear(){this.length=0}bubbleUp(e){const t=this._keys[e],o=this._priorities[e];for(;e>1;){const t=e>>>1;if(this._priorities[t]<=o)break;this._keys[e]=this._keys[t],this._priorities[e]=this._priorities[t],e=t}this._keys[e]=t,this._priorities[e]=o}bubbleDown(e){const t=this._keys[e],o=this._priorities[e],i=1+(this.length>>>1),r=this.length+1;for(;e<i;){const t=e<<1;if(t>=r)break;let i=this._priorities[t],n=this._keys[t],s=t;const a=t+1;if(a<r){const e=this._priorities[a];e<i&&(i=e,n=this._keys[a],s=a)}if(i>=o)break;this._keys[e]=n,this._priorities[e]=i,e=s}this._keys[e]=t,this._priorities[e]=o}push(e,t=0){if(this.length===this.capacity)throw new Error("Heap has reached capacity, can't push new items");const o=this.length+1;this._keys[o]=e,this._priorities[o]=t,this.bubbleUp(o),this.length++}pop(){const e=this._keys[1];return this.length--,this.length>0&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1)),e}peekPriority(){return this._priorities[1]}peek(){return this._keys[1]}toString(){if(0===this.length)return"(empty queue)";const e=Array(this.length-1);for(let t=0;t<this.length;t++)e[t]=this._priorities[t+1];return`[${e.join(" ")}]`}get[Symbol.toStringTag](){return"Heapify"}*[Symbol.iterator](){for(let e=0;e<this.length;e++){const t=this._priorities[e+1],o=this._keys[e+1];yield[o,t]}}*keys(){for(let e=0;e<this.length;e++)yield this._keys[e+1]}*priorities(){for(let e=0;e<this.length;e++)yield this._priorities[e+1]}}const Mt=e=>e.toPosition().toString();const Et=(e,t,o,i,r)=>{const n=new St;n.push(e,0);const s={},a={},l=[];let c=!1;if(s[Mt(e)]=Mt(e),a[Mt(e)]=0,e.equals(t))return{path:[]};if(i(t))return{path:[]};for(;n.length>0;){const e=n.pop();if(e.equals(t)){c=!0;break}if(n.length>1e3)throw new Error("No what kinda path are you searching for?!");l.push(e.toPosition().toString());for(const c of e.neighbors(o).filter((e=>!s[Mt(e)])).map((e=>{var t;return null!==(t=o.find((t=>t.equals(e))))&&void 0!==t?t:e}))){if(i(c))continue;l.some((e=>e===Mt(c)))||l.push(Mt(c));const o=a[Mt(e)]+c.cost();r<o||(!a[Mt(c)]||o<a[Mt(c)])&&(a[Mt(c)]=o,n.push(c,o+t.heuristic(c)),s[Mt(c)]=e.toPosition().toString())}}const d=e.toPosition();if(!c)return{path:[],visited:l};let u=t.toPosition();const h=[];do{h.push(u),u=ot.fromString(s[u.toString()])}while(null!==u&&!u.equals(d));return{path:h.reverse(),visited:l}},At=de("action/abort"),Ct=ue("player/update"),zt=de("player/request/select"),Tt=ue("player/buildings/item/selected"),Rt=ue("player/item/moved"),Ht=ue("player/knights/created"),Ut=ue("player/wagon/created"),Nt=ue("player/assets/loaded"),Bt=ue("turn/player/actions/hasLeft"),Pt=de("turn/player/actions/none"),Dt=de("map/hexagon/updated",{readOnce:!0}),Lt=ue("modes/move/activate"),Wt=ue("modes/move/activated"),Zt=ue("modes/move/deactivate"),Yt=ue("modes/move/hovered-target"),qt=ue("modes/move/end"),It=ue("modes/build/lumberjack-small"),Xt=ue("modes/build/lumberjack-small/success"),Gt=ue("modes/build/lumberjack-small/failed"),Ft=ue("modes/battle/activate"),Kt=ue("modes/battle/active"),Jt=ue("modes/battle/end"),Vt=ue("modes/battle/deactivate"),Qt=ue("battle/started"),eo=ue("battle/dice/thrown"),to=ue("battle/player/attacked"),oo=ue("mill/takeover"),io=ue("modal/battle/open"),ro=ue("modal/dice-result/open"),no=ue("turn/world/started"),so=ue("turn/world/accepted"),ao=ue("turn/player/complete"),lo=ue("turn/world/complete"),co=ue("resources/generated"),uo=ue("resources/generation/complete"),ho=ue("resources/summary"),vo=ue("resources/distribute"),go=ue("resources/distribute/request"),mo=ue("resources/distribute/updated");function po(e){return e.reduce(((e,t)=>e+function(e){return e.sides[Math.floor(Math.random()*e.sides.length)].value}(t)),0)}const fo=()=>({grain:100,iron:200,hay:0,wood:0,stone:0});function bo(e,t){if(!e||!e.map)return[];const o=e=>t===e.team,i=[];for(const t of e.map)for(const e of t)i.push(...e.elements.filter(o));return i}function wo(e){var t,o,i,r,n;if(!e)return;return[...null!==(n=null===(r=null===(i=null===(o=null===(t=null===document||void 0===document?void 0:document.querySelector("the-mill"))||void 0===t?void 0:t.shadowRoot)||void 0===o?void 0:o.querySelector("world-map"))||void 0===i?void 0:i.shadowRoot)||void 0===r?void 0:r.querySelectorAll("hexagon-element"))&&void 0!==n?n:[]].find((t=>{var o,i;return null===(i=null===(o=t.shadowRoot)||void 0===o?void 0:o.querySelector("sprite-set"))||void 0===i?void 0:i.querySelector(`[id="${e.id}"]`)}))}document.deepQuerySelector=wo;const yo=()=>({grain:50,iron:0,hay:0,wood:50,stone:0});let $o,ko={},xo=[],jo=[],Oo={};const _o=e=>Object.assign({},Oo[e]),So=()=>Oo[$o],Mo=e=>e.actions.current>0,Eo=({team:e})=>e===$o;ce.on($t,(async e=>{xo=[],e.map.forEach(((e,t)=>{e.forEach(((e,o)=>{const i=new ot(t,o).toCube();e.terrain.movementCosts&&(i.costs=e.terrain.movementCosts),xo.push(i)}))})),ko=e,["green","red"].forEach((e=>{Oo[e]={resources:{hay:100,grain:200,iron:200,wood:100,stone:100}}})),await ve(kt)})),ce.on(At,(async e=>{e&&(ve(Zt),ve(Vt))})),ce.on([kt,xt],(async()=>{await ve(no)})),ce.on(no,(async()=>{jo=[...ko.teams],$o=jo.pop(),await ve(so,$o)})),ce.on(vo,(async({team:e,resourcesToGenerate:t})=>{var o;if(null===(o=_o(e))||void 0===o?void 0:o.resources){const o=Object.assign({},_o(e).resources);Oo[e].resources=function(e,t){let o=Object.assign({},e),i=[...t],r=!0;for(;r;)r=!1,i=i.map((e=>{let t=e;return Object.entries(e.resources).forEach((i=>{var[n,s]=i,{generatedResource:a}=s,l=at(s,["generatedResource"]);Object.entries(l).every((([e,t])=>o[e]<=t))&&(r=!0,t=void 0,Object.entries(l).forEach((([e,t])=>{o[e]-=t})),o[n]+=a,ve(co,e))})),t})).filter(Boolean);return o}(Oo[e].resources,t),ve(uo,{team:e,before:o,after:Oo[e].resources})}})),ce.collect(co,uo,(e=>{var t;ve(ho,null===(t=e[co.name])||void 0===t?void 0:t.map((e=>({name:e.name,from:Object.values(e.resources).map((e=>{var t=at(e,["generatedResource"]);return Object.assign({},t)})),to:Object.keys(e.resources)}))))})),ce.on(so,(async e=>{const t=bo(ko,e);await ve(Nt,t);const o=null==t?void 0:t.find((e=>e.name===ai));dt(o)&&ve(zt,{item:ai,row:o.row,col:o.col,payload:o}),setTimeout((()=>{var e;null===(e=wo(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2),ve(Ct,_o(e));const i=ft(ko,e).reduce(((e,t)=>[...e,...bt(t)]),[]);ve(mo,{team:e,resourcesToGenerate:i}),await ve(vo,{team:e,resourcesToGenerate:i})})),ce.on(go,(({team:e})=>{var t;const o=null===(t=ft(ko,e))||void 0===t?void 0:t.reduce(((e,t)=>[...e,...bt(t)]),[]);ve(mo,{team:e,resourcesToGenerate:o})})),ce.on(zt,(async e=>{await ve(Tt,Object.assign(Object.assign({},e),{item:"hexagon"})),await ve(Tt,Object.assign({},e))})),ce.on(ao,(()=>{$o=jo.pop(),void 0===$o?ve(lo):ve(so,$o)})),ce.on(lo,(()=>{ko.map.forEach((e=>{e.forEach((({elements:e})=>{((...e)=>{e.forEach((e=>{e.actions.current=e.actions.max}))})(...e.filter(ut))}))})),ve(no)}));const Ao=(e,t)=>{const o=Object.assign({},Oo[e].resources);for(const[e,i]of Object.entries(t)){if(o[e]<i)return!1;o[e]-=i}return Oo[e].resources=o,!0};ce.on(Ht,(async({row:e,col:t,team:o})=>{if(!Eo({team:o}))return;if(!Ao(o,{grain:100,iron:200,hay:0,wood:0,stone:0}))return;const i=(({team:e,row:t,col:o})=>({id:rt(),name:Wo,team:e,row:t,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10},dices:[{name:"Standardwaffe",story:"Eine faire, ausgewogene Waffe die jeder Ritter haben sollte",sides:[{value:3},{value:3},{value:3},{value:4},{value:5},{value:6}]},{name:"Mächtiger Schlag des Betrugs",story:"Eine Waffe, die bis zu 12 Schaden verursachen kann, doch auch eine hohe Wahrscheinlichkeit hat gar keinen Schaden zu verursachen, oder sogar den Ritter selbst zu verletzen!",sides:[{value:-3},{value:0},{value:0},{value:6},{value:12}]}]}))({row:e,col:t,team:o});ko.map[e][t].elements.push(i),await Promise.all([ve(Dt,{row:e,col:t,elements:[...ko.map[e][t].elements]}),ve(Nt,bo(ko,o)),ve(Ct,So())]),ve(zt,{item:i.name,row:e,col:t,payload:i})})),ce.on(Ut,(async({row:e,col:t,team:o})=>{if(!Eo({team:o}))return;if(!Ao(o,{grain:50,iron:0,hay:0,wood:50,stone:0}))return;const i=(({team:e,row:t,col:o})=>({id:rt(),name:qo,team:e,row:t,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10}}))({row:e,col:t,team:o});ko.map[e][t].elements.push(i),await Promise.all([ve(Dt,{row:e,col:t,elements:[...ko.map[e][t].elements]}),ve(Nt,bo(ko,o)),ve(Ct,So())]),ve(zt,{item:i.name,row:e,col:t,payload:i})})),ce.on(Bt,(()=>{void 0===((e,t)=>{for(const o of e.map)for(const e of o){const o=e.elements.filter(ut).map((e=>e)).find((e=>e.team===t&&e.actions.current>0));if(o)return o}})(ko,$o)&&ve(Pt,!0)})),ce.on(It,(async({position:e,asset:t})=>{const{elements:o,terrain:i}=ko.map[e.row][e.col],{team:r}=t,n=o.findIndex((e=>"player-wagon"===e.name));if(Eo({team:t.team}))if("player-wagon"!==t.name||n<0)await ve(Gt,{position:e,asset:t,reason:"No wagon on field"});else if(function(e,t){return e.sprite.name===t}(i,"forest"))if(o.some(ct))await ve(Gt,{position:e,asset:t,reason:"There is already a building on the field"});else{const i=(({position:e,asset:t})=>Object.assign(Object.assign({id:"lumberjack-small",name:"lumberjack-small",team:t.team},e),{occurences:{min:1},resources:{wood:{generatedResource:50}}}))({position:e,asset:t});o.splice(n,1),o.unshift(i),await Promise.all([ve(Dt,Object.assign(Object.assign({},e),{elements:[...o]})),ve(Nt,bo(ko,t.team)),ve(Ct,So()),ve(Xt,{position:e,asset:i})]),ve(go,{team:r})}else await ve(Gt,{position:e,asset:t,reason:`No wood on field but ${i.sprite.name}`});else await ve(Gt,{position:e,asset:t,reason:`Not the turn of the team ${t.team}`})}));const Co=e=>Number.parseInt(e.toString(),10),zo=e=>{const{row:t,col:o}=e.toCoords();return ko.map[t][o].elements.filter((e=>e.team!==(null==To?void 0:To.asset.name))).some((e=>ht(e)))};let To,Ro;ce.on(Lt,(async e=>{function t(t){return function(e,t,o,i,r){return Et(e,t,o,i,r).path.length>0}(new ot(Co(e.start.row),Co(e.start.col)).toCube(),new ot(Co(t.position.row),Co(t.position.col)).toCube(),xo,zo,e.asset.movement.points)}Ro&&await ve(Vt),Eo(e.asset)&&(To=Object.assign(Object.assign({},e),{inReach:ko.map.reduce(((e,o)=>[...e,...o.filter(t).map((e=>e.position))]),[])}),await ve(Wt,e))})),ce.on(Zt,(()=>{To=void 0})),ce.on(Yt,(async e=>{var t,o;if(!To)return;const i=new ot(Co(To.start.row),Co(To.start.col)).toCube(),r=new ot(Co(e.row),Co(e.col)).toCube(),n=Et(i,r,xo,zo,To.asset.movement.points).path;let s=e;zo(r)&&(s=null!==(o=null===(t=[...n].pop())||void 0===t?void 0:t.toCoords())&&void 0!==o?o:To.start),await ve(Lt,Object.assign(Object.assign({},To),{trail:n,end:s}))})),ce.on(qt,(async e=>{var t,o;if(!To)return;if((null!==(o=null===(t=To.trail)||void 0===t?void 0:t.length)&&void 0!==o?o:0)<1)return;const{start:i,asset:r}=To;if(!Eo(r))return;if(void 0===r.actions&&console.error("asset.actions undefined",r),!Mo(r))return;if(tt(To.start,e))return void ve(Zt);r.actions.current-=1;const n=[...ko.map[i.row][i.col].elements];ko.map[i.row][i.col].elements=[],n.forEach((t=>{t.id!==r.id?ko.map[i.row][i.col].elements.push(Object.assign(Object.assign({},t),{row:i.row,col:i.col})):ko.map[e.row][e.col].elements.push(Object.assign(Object.assign({},t),{row:e.row,col:e.col}))})),await ve(Dt,{row:i.row,col:i.col,elements:[...ko.map[i.row][i.col].elements]}),await ve(Dt,{row:e.row,col:e.col,elements:[...ko.map[e.row][e.col].elements]}),await ve(Zt),await ve(Rt,{asset:r,location:e}),await ve(Bt)})),ce.on(Ft,(async e=>{Eo(e.asset)&&(To&&await ve(Zt),Ro=Object.assign(Object.assign({},e),{range:new ot(e.start.row,e.start.col).toCube().range(1).map((e=>e.toPosition().toCoords()))}),ve(Kt,Ro))})),ce.on(Jt,(async e=>{if(!Ro||!Eo(Ro.asset))return;if(tt(Ro.start,e))return void ve(Vt);const{row:t,col:o}=e,{asset:i}=Ro,r=[...ko.map[t][o].elements].filter((e=>ht(e)&&e.team!==i.team));Mo(i)&&r.length>0&&(i.actions.current-=1,await ve(Qt,{location:e,attacker:[i],defender:[...r]})),ve(Nt,bo(ko,i.team)),ve(Vt),await ve(Bt)})),ce.on(Vt,(()=>Ro=void 0)),ce.on(Rt,(async({asset:e,location:t})=>{if(!Eo(e))return;const{row:o,col:i}=t,r=[...ko.map[o][i].elements].filter((t=>t.id!==e.id)).filter((t=>t.name===ri&&t.team!==e.team));if(r.length>0&&ht(e)){const o={asset:r[0],transfered:{from:r[0].team,to:e.team},location:t,by:e,team:e.team};await ve(oo,o)}else ve(Nt,bo(ko,e.team)),await ve(Bt)})),ce.on(oo,(({location:e,team:t,asset:o})=>{if(!Eo({team:t}))return;const{row:i,col:r}=e,n=[...ko.map[i][r].elements];ko.map[i][r].elements=[],n.forEach((e=>{e.id!==o.id?ko.map[i][r].elements.push(e):ko.map[i][r].elements.push(Object.assign(Object.assign({},e),{team:t}))})),ve(Nt,bo(ko,t)),ve(go,{team:t})})),ce.on(Qt,(e=>{ve(io,e)})),ce.on(eo,(e=>{if(!Eo(e.attacker.asset))return;const t=po(e.attacker.dices);ve(to,{attacker:e.attacker.asset,defender:e.defender,damage:t,location:e.location})})),ce.on(to,(e=>{const{defender:t,damage:o,attacker:i}=e;o<0?i.health.current+=o:t.health.current-=o;const{row:r,col:n}=e.location,s=[...ko.map[r][n].elements];ko.map[r][n].elements=[],s.forEach((e=>{e.id===t.id?t.health.current>0&&ko.map[r][n].elements.push(t):e.id===i.id?i.health.current>0&&ko.map[r][n].elements.push(i):ko.map[r][n].elements.push(e)})),ve(Dt,{row:r,col:n,elements:[...ko.map[r][n].elements]}),ve(io,void 0),ve(ro,{attacker:[i],defender:[t],location:e.location,result:o})})),window.location.hash.indexOf("log")>=0&&oe(ee.INFO),window.location.hash.indexOf("trace")>=0&&oe(ee.TRACE);const Ho=s`
    :host {
        position: absolute;
        width: 120px;
        height: 140px;
        background-repeat: no-repeat;
        background-position: center center;
    }
    div {
        width: 80%;
        height: 80%;
        margin: 10%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
`,Uo=s`
.inactive {
    opacity: 0.8;
    filter: grayscale(100%);
}`,No=s`
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
`,Bo=e=>s`
     ${e} {
        scrollbar-color:  #888 #f1f1f1;
        scrollbar-width: thin;
     }
`;$e("button-image",(e=>{const t=e.height?`height:${e.height};`:"";return T`<button style="${t}; background-image: url('${e.src}'), url('/assets/sidebar/btn_1.png')">
        <slot></slot>
    </button>`}),{styles:s`
    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        background-image: url('/assets/sidebar/btn_1.png');
        background-size: contain;
        height: 70px;
        background-repeat: no-repeat;
        cursor: pointer;
        padding-left: 33%; 
        width: 85%;
    }
    slot {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    `,defaults:{src:"",height:""}}),$e("button-pure",(()=>T`<button>
        <slot></slot>
    </button>`),{styles:s`
    
    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
     img {
        margin: 3px;
        width: 64px;
        height: 64px;
    }
    `});const Po=s`
#background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: var(--colorContrast);
    opacity: 0.7;
    z-index: 1000;
}
#modal {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
    padding: 12px;
    background-color: var(--colorMain);
    opacity: 1;
    z-index: 1001;
}
`,Do=s`
    header {
        position: relative;
        height: 2rem;
    }
    #close {
        position: absolute;
        right: 12px;
        font-size: 2rem;
    }
`,Lo=(e,t)=>{e.dispatchEvent(new CustomEvent(t))};$e("modal-window",(e=>e.open?T`
    <div id="background" @click="${()=>e.preventClose&&Lo(e,"close")}"></div>
    <div id="modal">
        <header>
            ${e.preventClose?T``:T`<button-pure id="close" @click="${()=>Lo(e,"close")}"><text-block size="large">X</text-block></button-pure>`}
            <slot name="header"></slot>
        </header>
        <div>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
    `:T``),{styles:[Po,Do],defaults:{open:!1,preventClose:!1}}),$e("modal-container",(e=>{const{getState:t,publish:o}=Ke(e,!1);return T`
        <button-pure @click="${()=>o(!0)}"><slot></slot></button-pure>
        <modal-window .open=${t()} @close=${()=>o(!1)}>
            <slot slot="header" name="header"></slot>
            <slot name="body"></slot>
            <slot slot="footer" name="footer"></slot>
        </modal-window>
    `}));$e("text-block",(({size:e,type:t})=>T`<span class="${e} ${t}"><slot></slot></span>`),{styles:[s`
    .small {
        font-size: 0.75rem;
    }
    .medium {
        font-size: 1rem;
    }
    .large {
        font-size: 1.5rem;
    }
    .x-large {
        font-size: 2rem;
    }
`,s`
    .inline {
        display: inline;
    }
    .paragraph {
        display: block;
    }
`],defaults:{size:"medium",type:"inline"}});$e("loading-bar",(({width:e})=>T`
    <div class="progress-bar">
        <span class="bar">
            ${"0%"===e?T``:T`<span class="progress" style="width: ${e};"></span>`}
        </span>
    </div>
    `),{styles:[s`
    
.progress-bar {
    border-radius: 60px;
    overflow: hidden;
    width: 100%;

}
.bar {
    background: rgba(0,0,0,0.075);
}

.progress {
    background: #75b800;
    color: #fff;
    padding: 5px;
    width: 0;
}


span {
    display: block;
}
`],defaults:{width:"100%"}});$e("dice-roll",(({result:e})=>T`<div id="cube">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3">${e}</div>
        <div id="side4"></div>
        <div id="side5"></div>
        <div id="side6"></div>
    </div>`),{styles:s`
:host {
    width: 250px;
    height: 213px;
    margin: 20px auto;
}
#cube {
    width: 112px;
    height: 112px;
    top: 50px;
    transform-style: preserve-3d;
    transform: rotateX(-22deg) rotateY(1083deg) rotateZ(0deg);
    margin: auto;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    animation: cubeRotation 5s 1;
    animation-fill-mode: forwards;
}
@keyframes cubeRotation {
    0%   {	transform: rotateX(-22deg) rotateY(1083deg) rotateZ(0deg);	}
    100%   {	transform: rotateX(-382deg) rotateY(3deg) rotateZ(1080deg);	}
}
@keyframes reveal {
    0%   {	color:white;	}
    80%   {	color:white;	}
    100%   {	color:black;	}  
}
#cube > div {
    position: absolute;
    transition: all 0.5s ease-in-out;
    width: 112px;
    height: 112px;
    float: left;
    overflow: hidden;
    background-color:white;
    
    line-height: 112px;
    text-align: center;
    font-size: 5rem;
}
#side1 {
  transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
	border:1px solid black;
}
#side2 {
    transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
	border:1px solid black;
}
#side3 {
    transform: translateX(0px) translateY(0px) translateZ(56px);
	border:1px solid black;
  color:white;
    animation: reveal 5s 1;
    animation-fill-mode: forwards;
}
#side4 {
    transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
	border:1px solid black;
}
#side5 {
    transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
	border:1px solid black;
}
#side6 {
    transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
	border:1px solid black;
}
`,props:[{result:{type:Number}}]});const Wo="player-knight";var Zo=$e(Wo,(e=>{const{getState:t,publish:o}=Ke(e,"");return me(e,so,o),T`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('/assets/knight_${e.team}.png'"></div>`}),{styles:[Ho,Uo,s`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),Yo=Object.freeze({__proto__:null,name:Wo,default:Zo});const qo="player-wagon";var Io=$e(qo,(e=>{const{getState:t,publish:o}=Ke(e,"");return me(e,so,o),T`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('/assets/wagon_${e.team}.png'"></div>`}),{styles:[Ho,Uo,s`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),Xo=Object.freeze({__proto__:null,name:qo,default:Io});$e("dice-selector",(e=>{var t;return T`${null===(t=e.dices)||void 0===t?void 0:t.map((t=>T`<div>
        <input type="radio" 
            @click=${()=>e.dispatchEvent(new CustomEvent("select",{detail:t}))}
            id="${t.name}" 
            name="dice" 
            value="${t.name}">
        <label for="${t.name}">
            <strong>${t.name}</strong> - ${t.story}
            <div class="sides" style="grid-template-columns: 1fr ${t.sides.map((()=>"1fr")).join(" ")};">
                <h5>Würfelergebnisse</h5>
                ${t.sides.map((e=>T`<div class="side">${e.value}</div>`))}
            </div>
        </label>
    </div>`))}`}),{styles:s`
        .sides {
            display: grid;
            padding: 0.5rem;
        }
        h5 {
            margin: 0;
        }
        .side {
            background-image: url("/assets/dice.png");
            background-size: contain;
            height: 1rem;
            background-repeat: no-repeat;
            background-position: center;
            text-align: center;
            padding-top: 0.25rem;
            font-size: 0.75rem;
        }
     `});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Go=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Fo extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=H,e.type!==Go)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===H||null==e)return this.ft=void 0,this.it=e;if(e===R)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Fo.directiveName="unsafeHTML",Fo.resultType=1;const Ko=(e=>(...t)=>({_$litDirective$:e,values:t}))(Fo);async function Jo(e){for(const t of e)await t()}const Vo=(e,t)=>{var o,i;return[...null!==(o=t.none)&&void 0!==o?o:[],...null!==(i=t[e])&&void 0!==i?i:[]]};$e("sprite-set",(e=>{const{getState:t,publish:o}=Ke(e,void 0),{getState:i,publish:r}=Ke(e,void 0);return me(e,Dt,(t=>e.row.toString()===(null==t?void 0:t.row.toString())&&e.col.toString()===(null==t?void 0:t.col.toString())),o),me(e,so,r),t()&&Jo(Vo(i(),e.triggers)).then((()=>ve(Tt,{item:"hexagon",row:e.row,col:e.col}))),Fe(e,(()=>{e.addEventListener("click",(async()=>{Jo(Vo(i(),e.triggers))}))})),T`<slot></slot>`}),{defaults:{row:0,col:0,triggers:{}}}),$e("sprite-player-elements-grid",(()=>T`<slot></slot>`),{styles:s`
    slot {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
    }
    `});const Qo=(o,i,r)=>{const n={},s=null==o?void 0:o.map((o=>{var s,a,l,c;const d=Object.entries(Object.assign(Object.assign({},t),e)).find((([e,t])=>t.name===o.name)),u=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([e,t])=>void 0!==t)).map((([e,t])=>`${e}="${t}"`)).join(" "),h=null!==(s=o.team)&&void 0!==s?s:"none";return n[h]=null!==(a=n[h])&&void 0!==a?a:[],n[h].push((()=>{var e;return ve(Tt,{item:null!==(e=null==d?void 0:d[1].name)&&void 0!==e?e:"",row:i,col:r,payload:Object.assign({},o)})})),T`${Ko(`<${null!==(l=null==d?void 0:d[1].name)&&void 0!==l?l:"span"} ${u}></${null!==(c=null==d?void 0:d[1].name)&&void 0!==c?c:"span"}>`)}`}));return T`<sprite-set .triggers=${n} col="${r}" row="${i}">${s}</sprite-set>`};$e("fighter-info",(({player:e,row:t,col:o})=>T`<div class="sprite ${(null==e?void 0:e.health.current)<1?"dead":"alive"}">
            ${Qo(e?[e]:[],t,o)}
        </div>
        <div class="info">
            <h3>Gesundheit</h3>
            <loading-bar width="${(null==e?void 0:e.health.current)/(null==e?void 0:e.health.max)*100}%"></loading-bar>
            <p>${null==e?void 0:e.health.current} von ${null==e?void 0:e.health.max}</p>
        </div>`),{styles:[s`
        :host {
            display: grid;
            grid-template-columns: 1fr 3fr;
        }
        .sprite {
            height: 140px;
        }
        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(-90deg);
            }
        }
        .dead {
            animation: rotation 5s 1;
            animation-fill-mode: forwards;
        }
        `],props:[{player:{type:Object},row:{type:Number},col:{type:Number}}]});const ei=s`
:host {
  display: inline-block;
}
.hexagon {
  position: relative;
  cursor: pointer;
  display: inline-block;
  background-color: var(--colorShow);
  width: ${120}px;
  height: 140px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 500ms linear;
  z-index: 1;
}
.hexagon:hover {
  background: var(--colorFocus);
}`,ti=s`
    .inactive {
        opacity: 0.8;
        cursor: not-allowed;
    }
    .active.start,
    .active.trail,
    .active.end {
        filter: brightness(1.5);
    }
    .unreachable {
        cursor: not-allowed;
        filter: saturate(0) hue-rotate(217deg);
    }
    .inactive.unreachable {
      opacity: 0.1;
    }
`,oi=(e,t,o)=>`${function(e,t){var o,i,r;return t?tt(t.start,e)?"active start":t.end&&(null!==(i=null===(o=t.trail)||void 0===o?void 0:o.length)&&void 0!==i?i:0)<1&&tt(t.end,e)?"active unreachable":t.end&&tt(t.end,e)?"active end":t.trail&&t.trail.some((t=>tt(t,e)))?"active trail":(console.log("Data in reach",e,t.inReach),(null===(r=t.inReach)||void 0===r?void 0:r.some((t=>tt(t,e))))?"inactive":"inactive unreachable"):""}(e,t)} ${function(e,t){return t?tt(t.start,e)?"active start":t.end&&tt(t.end,e)?"active end":t.range&&t.range.some((t=>tt(t,e)))?"active trail":"inactive":""}(e,o)}`,ii=(e,t,o)=>{t&&t.end&&tt(t.end,e)?function(e,t){t&&ve(qt,e)}(e,t):o&&function(e,t){t&&ve(Jt,e)}(e,o)};$e("hexagon-element",(e=>{var t,o,i;Fe(e,(()=>{e.addEventListener("click",(()=>ve(Tt,{item:"hexagon",row:e.row,col:e.col})))}));const{row:r,col:n}=e,{get:s,set:a}=Ke(e,{elements:e.elements,row:r,col:n}),{get:l,set:c}=Ke(e,void 0),{get:d,set:u}=Ke(e,void 0);me(e,Dt,(e=>(null==e?void 0:e.row.toString())===r.toString()&&(null==e?void 0:e.col.toString())===n.toString()),a),me(e,Wt,c),me(e,Kt,u),me(e,qt,(()=>c(void 0))),me(e,Zt,(()=>c(void 0))),me(e,Vt,(()=>u(void 0)));const h=s();return T`<div 
      class="hexagon ${oi(e,l(),d())}" 
      @mouseover=${()=>{l()&&ve(Yt,{row:r,col:n})}}
      @click=${()=>(ii(e,l(),d()),document.dispatchEvent(new CustomEvent("hello-world",{detail:{hello:"world"}})))}
      style="background-image:url(/assets/${null===(t=e.background)||void 0===t?void 0:t.file}.png); background-position: ${null===(o=e.background)||void 0===o?void 0:o.x}px ${null===(i=e.background)||void 0===i?void 0:i.y}px;">
      ${Qo(h.elements,e.row,e.col)}</div>`}),{styles:[ei,ti],defaults:{background:void 0,elements:[],col:0,row:0}}),$e("world-map",(e=>{var t;const{get:o,set:i}=Ke(e,void 0);return me(e,$t,i),T`<div id="globe">${null===(t=o())||void 0===t?void 0:t.map.map(((e,t)=>T`<div class="row ${t%2==0?"push":""}" style="width: calc(${120*e.length}px + 20rem)">
                ${e.map(((e,o)=>T`<hexagon-element 
                        .background=${e.terrain.sprite} 
                        .elements="${e.elements}" 
                        row="${t}" col="${o}">
                    </hexagon-element>`))}
            </div>
            `))}</div>`}),{styles:s`
    :host {
        display:block;
    }
    #globe {
        padding: 20rem;
    }
    .row {
        margin-bottom: -41px;
        white-space: nowrap;
    }
    .push {
        margin-left: 60px;
    }`});const ri="building-mill";var ni=$e(ri,(({team:e})=>T`<div style="background-image:url('/assets/windmill_complete_${null!=e?e:"none"}.png'"></div>`),{styles:[Ho,s`
        div {
            width: 80%;
            height: 80%;
        }
        `],defaults:{team:void 0}}),si=Object.freeze({__proto__:null,name:ri,default:ni});const ai="building-castle-small";var li=$e(ai,(e=>{const{getState:t,publish:o}=Ke(e,"");return me(e,so,o),T`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('/assets/castle_small_${e.team}.png'"></div>`}),{styles:[Ho,Uo,s`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),ci=Object.freeze({__proto__:null,name:ai,default:li});const di="lumberjack-small";var ui=$e(di,(e=>{const{get:t,set:o}=Ke(e,"");return me(e,so,o),T`<div class="${t()===e.team?"active":"inactive"}" style="margin: 0; background-image:url('/assets/lumberjack_small_${e.team}.png'); ackground-size: auto; width: 100%; height: 100%;"></div>`}),{styles:[Ho,Uo,s`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),hi=Object.freeze({__proto__:null,name:di,default:ui});const vi={hay:0,iron:0,grain:0,wood:0,stone:0};var gi=yo,mi=fo,pi=()=>Object.assign(Object.assign({},vi),{stone:4,wood:2,grain:1}),fi=()=>Object.assign(Object.assign({},vi),{wood:500,grain:500,stone:500}),bi=()=>Object.assign(Object.assign({},vi),{stone:1e3,iron:1e3,grain:1e3});const wi={stone:{default:"resources.stone",de:"Stein",en:"Stone"},log:{default:"resources.log",de:"Holz",en:"Wood"},grain:{default:"resources.grain",de:"Mehl",en:"Flour"},hay:{default:"resources.hay",de:"Getreide",en:"Hay"},iron:{default:"resources.iron",de:"Eisen",en:"Iron"}},yi={wagon:{default:"assets.wagon",de:"Wagen",en:"Wagon"},knight:{default:"assets.knight",de:"Ritter",en:"Knight"},castle:{build:{default:"assets.castle.build",de:"Bauen",en:"Build"}},properties:{life:{default:"assets.properties.life",de:"<strong>Leben</strong> ${0} von ${1}",en:"<strong>Life</strong> ${0} of ${1}"},actions:{default:"assets.properties.actions",de:"<strong>Aktionen</strong> ${0} von ${1}",en:"<strong>Actions</strong> ${0} of ${1}",move:{default:"assets.properties.actions.move",de:"Bewegen",en:"Move"},attack:{default:"assets.properties.actions.attack",de:"Angreifen",en:"Attack"},fortify:{default:"assets.properties.actions.fortify",de:"Verteidigen",en:"Fortify"},load:{default:"assets.properties.actions.load",de:"Laden/Entladen",en:"Load/Unload"},build:{knight:{default:"assets.properties.actions.build.knight",de:"Ritter bauen",en:"Build knight"},wagon:{default:"assets.properties.actions.build.wagon",de:"Wagen bauen",en:"Build wagon"},iron:{default:"assets.properties.actions.build.iron",de:"Eisen bauen",en:"Build iron"},castle_medium:{default:"assets.properties.actions.build.castle_medium",de:"Mittlere Burg bauen",en:"Build medium castle"},castle_large:{default:"assets.properties.actions.build.castle_large",de:"Große Burg bauen",en:"Build large castle"},lumberjack_small:{default:"assets.properties.actions.build.lumberjack_small",de:"Baue einen Holzfäller (klein)",en:"Build Lumberjack (small)"}}}}};function $i(e,...t){const o=e[document.documentElement.lang||"en"];return o?o.replace(/\$\{(\d+)\}/g,((e,o)=>t[o])):e.default}const ki=s`
  :host {
    display: block;
    background-image: url("/assets/sidebar/bg.png");
    background-repeat: no-repeat;
    padding: 15px;
    background-size: 100% 100%;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: 10px;
    row-gap: 15px;
    margin: 15px 15px 25px 15px;
  }
  button {
        cursor: pointer;
    }
    img {
        width: 100%;
    }
    h3 {
        color: var(--colorMain)
    }
  `,xi=s`
  building-castle-small {
    position: relative;
    display: block;
    width: 4em;
    height: 4em;
  }
  h3 {
    text-align: center;
    margin-top: 0;
  }
  resource-counter {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 0.7rem;
  }
  .enough {
    color: var(--colorMain);
  }
  .lack {
    color: var(--colorHighlight);
  }
`,ji=(e,t)=>T`
    ${t.hay>0?T`<resource-counter
          count="${t.hay}"
          class="${e.hay>=t.hay?"enough":"lack"}"
        >
          <resource-hay></resource-hay>
        </resource-counter>`:T``}
    ${t.grain>0?T`<resource-counter
          count="${t.grain}"
          class="${e.grain>=t.grain?"enough":"lack"}"
        >
          <resource-grain></resource-grain>
        </resource-counter>`:T``}
    ${t.wood>0?T`<resource-counter
          count="${t.wood}"
          class="${e.wood>=t.wood?"enough":"lack"}"
        >
          <resource-wood></resource-wood>
        </resource-counter>`:T``}
    ${t.stone>0?T`<resource-counter
          count="${t.stone}"
          class="${e.stone>=t.stone?"enough":"lack"}"
        >
          <resource-stone></resource-stone>
        </resource-counter>`:T``}
    ${t.iron>0?T`<resource-counter
          count="${t.iron}"
          class="${e.iron>=t.iron?"enough":"lack"}"
        >
          <resource-iron></resource-iron>
        </resource-counter>`:T``}
  `;$e("sidebar-castle",(e=>{var t;const{selected:{payload:{team:o},row:i,col:r}}=e,{getState:n,publish:s}=Ke(e,void 0);me(e,Ct,s);const{resources:a}=null!==(t=n())&&void 0!==t?t:{resources:{}};return T`<building-castle-small team="${o}"></building-castle-small>
      <h3>${$i(yi.castle.build)}</h3>
      <div class="container">
        <button-image
          height="35px"
          src="/assets/knight_${o}.png"
          title="${$i(yi.properties.actions.build.knight)}"
          @click=${async()=>await ve(Ht,{team:o,row:i,col:r})}
        >
          ${ji(a,mi())}
        </button-image>
        <button-image
          height="35px"
          src="/assets/wagon_${o}.png"
          title="${$i(yi.properties.actions.build.wagon)}"
          @click=${async()=>await ve(Ut,{team:o,row:i,col:r})}
        >
          ${ji(a,gi())}
        </button-image>
        <button-image height="35px" 
          title="${$i(yi.properties.actions.build.iron)}"
          src="/assets/resources/iron.png">
          ${ji(a,pi())}
        </button-image>
        <button-image height="35px" 
          title="${$i(yi.properties.actions.build.castle_medium)}"
          src="/assets/castle_medium_${o}.png">
          ${ji(a,fi())}
        </button-image>
        <button-image height="35px" 
          title="${$i(yi.properties.actions.build.castle_large)}"
          src="/assets/castle_large_${o}.png">
          ${ji(a,bi())}
        </button-image>
      </div>`}),{styles:[ki,xi],defaults:{selected:{payload:{team:""},col:0,row:0}}});const Oi=e=>parseInt(e.toString(),10);$e("sidebar-knight",(e=>{const{selected:{payload:t,row:o,col:i}}=e,{health:r,actions:n}=t,s={row:Oi(o),col:Oi(i)};return T`
    <h3>${$i(yi.knight)}</h3>
    <div class="container">
        <img id="knight" src="/assets/knight_${t.team}.png">
        <loading-bar id="health" width="${r.current/r.max*100}%"></loading-bar>
        <div id="stats">
            ${Ko($i(yi.properties.life,r.current,r.max))}<br>
            ${Ko($i(yi.properties.actions,n.current,n.max))}
        </div>
        <button ?disabled=${n.current<1} id="move" title="${$i(yi.properties.actions.move)}" @click=${()=>ve(Lt,{asset:Object.assign({},t),start:s})}>🦵</button>
        <button ?disabled=${n.current<1} id="attack" title="${$i(yi.properties.actions.attack)}" @click=${()=>ve(Ft,{asset:Object.assign({},t),start:s})}">⚔</button>
        <button ?disabled=${n.current<1} id="fortify" title="${$i(yi.properties.actions.fortify)}" >🏰</button>
    </div>`}),{styles:[ki,s`
    .container {
        grid-template-areas: 
            "knight knight health health health"
            "knight knight stats stats stats"
            "knight knight move attack fortify";
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    #knight {
        grid-area: knight;
    }
    #health {
        grid-area: health;
    }
    #attack {
        grid-area: attack;
    }
    #stats {
        grid-area: stats;
    }
`],props:[{selected:{type:Object}}]});const _i=s`
    :host {
        display: block;
        background-image: url('/assets/sidebar/bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 15px;
    }
    .container {
        display: grid;
        grid-template-areas: 
            "wagon wagon health health health"
            "wagon wagon stats stats stats"
            "move build_1 build_2 build_3 load";
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 15px;
        margin: 15px;
    }
    button {
        cursor: pointer;
    }
    #knight {
        grid-area: knight;
    }
    #health {
        grid-area: health;
    }
    #move {
        grid-area: move;
    }
    #load {
        grid-area: load;
    }
    #build_lumberjack {
        grid-area: build_1;
    }
    #stats {
        grid-area: stats;
    }
    img {
        width: 100%;
    }
    h3 {
        color: var(--colorMain)
    }
`;ce.on(Xt,((...e)=>console.log("BuildLumberjackSmallSuccess",...e))),ce.on(Gt,console.error),ce.on(It,((...e)=>console.log("BuildLumberjackSmall",...e))),$e("sidebar-wagon",(e=>{const{selected:{payload:t,row:o,col:i}}=e,{health:r,actions:n}=t,s={row:Oi(o),col:Oi(i)};return T`
    <h3>${$i(yi.wagon)}</h3>
    <div class="container">
        <img id="wagon" src="/assets/wagon_${t.team}.png">
        <loading-bar id="health" width="${r.current/r.max*100}%"></loading-bar>
        <div id="stats">
            ${Ko($i(yi.properties.life,r.current,r.max))}<br>
            ${Ko($i(yi.properties.actions,n.current,n.max))}
        </div>
        <button ?disabled=${n.current<1} id="move"  title="${$i(yi.properties.actions.move)}" @click=${()=>ve(Lt,{asset:Object.assign({},t),start:s})}>🦵</button>
        <button ?disabled=${n.current<1} id="build_lumberjack" title="${$i(yi.properties.actions.build.lumberjack_small)}" @click=${()=>ve(It,{asset:Object.assign({},t),position:s})}>
            <img id="build_lumberjack_small" src="/assets/lumberjack_small_${t.team}.png">
        </button>
        <button ?disabled=${n.current<1} id="load"  title="${$i(yi.properties.actions.load)}">📦</button>
    </div>`}),{styles:[_i],props:[{selected:{type:Object}}]});const Si=e=>({position:e?new ot(null==e?void 0:e.row,null==e?void 0:e.col):void 0,elements:e?[{item:e.item,payload:e.payload}]:[],dirty:!1});$e("controls-sidebar",(async e=>{const{get:t,set:o}=Ke(e,void 0);me(e,Tt,o);const i=t(),{get:r,set:n}=Ke(e,Si(i)),s=r();return!s.dirty&&i&&new ot(i.row,i.col).equals(s.position)?n(Object.assign(Object.assign({},s),{elements:[...s.elements,{item:i.item,payload:i.payload}],dirty:"hexagon"===i.item})):n(Si(i)),Fe(e,(()=>{setTimeout((()=>{ve(xt)}),1)})),T`
        ${r().elements.map((e=>{var t,o,i,n,s,a;switch(e.item){case ai:return T`<sidebar-castle 
                        .selected="${{row:null===(t=r().position)||void 0===t?void 0:t.row,col:null===(o=r().position)||void 0===o?void 0:o.col,payload:e.payload}}">
                    </sidebar-castle>`;case Wo:return T`<sidebar-knight
                        .selected="${{row:null===(i=r().position)||void 0===i?void 0:i.row,col:null===(n=r().position)||void 0===n?void 0:n.col,payload:e.payload}}">
                    </sidebar-knight>`;case qo:return T`<sidebar-wagon
                        .selected="${{row:null===(s=r().position)||void 0===s?void 0:s.row,col:null===(a=r().position)||void 0===a?void 0:a.col,payload:e.payload}}">
                    </sidebar-wagon>`;default:case ai:return T``}}))}
    `}),{styles:s`:host { 
        position: absolute;
        display: block;
        min-width: 200px;
        width: 20%;
        right: 20px;
        top: 20px;
        z-index: 2;
    }`}),$e("modal-battle",(e=>{var t,o;const{getState:i,publish:r}=Ke(e,void 0),{getState:n,publish:s}=Ke(e,void 0);return me(e,io,r),T`
   <modal-window 
        .open=${!!i()} 
        preventClose>
        <h1 slot="header">Kampf beginnt!</h1>
        <div class="body">
        ${null===(t=i())||void 0===t?void 0:t.attacker.map((e=>{const t=e;return T`
                    <div>
                        <fighter-info 
                            .player=${t} 
                            row="${i().location.row}" 
                            col="${i().location.col}">
                        </fighter-info>
                        <h3>Wähle deine Waffe</h3>
                        <div class="dices">
                            <dice-selector .dices="${t.dices}" @select="${e=>s(e.detail)}"></dice-selector>
                        </div>
                    </div>
                `}))}${null===(o=i())||void 0===o?void 0:o.defender.map((e=>T`
                    <div>
                        <fighter-info 
                            .player=${e} 
                            row="${i().location.row}" 
                            col="${i().location.col}">
                        </fighter-info>
                    </div>
                `))}
        </div>
        <p slot="footer">
            <button @click="${()=>{var e,t;return ve(eo,{attacker:{asset:null===(e=i())||void 0===e?void 0:e.attacker[0],dices:[n()]},defender:null===(t=i())||void 0===t?void 0:t.defender[0],location:{row:i().location.row,col:i().location.col}})}}" ?disabled="${void 0===n()}">Würfeln</button>
        </p>
    </modal-window>`}),{styles:[s`
        .body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
        .body > * {
            display: block;
        }
        .player-info {
            display: grid;
            grid-template-columns: 1fr 3fr;
        }
        .sprite {
            height: 140px;
        }
        .health-bar {
            background-image: url('/assets/knight/health-bg.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        .health-bar .current {
            background-image: url('/assets/knight/health.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        `]}),$e("modal-dice-result",(e=>{var t,o;const{getState:i,publish:r}=Ke(e,void 0);return me(e,ro,r),T`
   <modal-window 
        .open=${!!i()} 
        @close=${()=>r(void 0)}>
        <h1 slot="header">Gewürfelt!</h1>
        <div class="body">
        ${null===(t=i())||void 0===t?void 0:t.attacker.map((e=>T`
                    <div class="attacker">
                        <fighter-info 
                            .player=${e} 
                            row="${i().location.row}" 
                            col="${i().location.col}">
                        </fighter-info>
                    </div>
                `))}${null===(o=i())||void 0===o?void 0:o.defender.map((e=>T`
                    <div class="defender">
                        <fighter-info 
                            .player=${e} 
                            row="${i().location.row}" 
                            col="${i().location.col}">
                        </fighter-info>
                    </div>
                `))}
        ${i()?T`<dice-roll class="dice" result="${i().result}"></dice-roll>`:T``}
        </div>

        <p slot="footer">
        </p>
    </modal-window>`}),{styles:[s`
        .body {
            display: grid;
            grid-template-areas: 
                "attacker defender"
                "dice dice";
        }
        .body > * {
            display: block;
        }
        .attacker {
            grid-area: attacker;
        }
        .defender {
            grid-area: defender;
        }
        .dice {
            grid-area: dice;
        }
        `]}),$e("modal-mill-taken",(e=>{var t,o,i,r,n;const{getState:s,publish:a}=Ke(e,void 0);return me(e,oo,a),T`
    <modal-window 
         .open=${!!s()} 
         @close=${()=>a(void 0)}>
         <h1 slot="header">Mühle übernommen!</h1>
         <div class="body">
            <div class="by">
                <fighter-info 
                    .player=${null===(t=s())||void 0===t?void 0:t.by} 
                    .row="${null===(o=s())||void 0===o?void 0:o.location.row}" 
                    .col="${null===(i=s())||void 0===i?void 0:i.location.col}">
                </fighter-info>
            </div>
            <div class="mills">
                <building-mill .team="${null===(r=s())||void 0===r?void 0:r.transfered.to}" class="after"></building-mill>
                <building-mill .team="${null===(n=s())||void 0===n?void 0:n.transfered.from}" class="before"></building-mill>
            </div>
         </div>
         <p slot="footer">
         </p>
     </modal-window>`}),{styles:s`
    .body {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .mills {
        position: relative;
        justify-self: center;
    }
    .after {
        z-index: 1;
    }
    .before {
        z-index: 2;
        animation: fadeOut 5s 1;
        animation-fill-mode: forwards;
    }
    
    @keyframes fadeOut {
        0%   {	opacity: 1;	}
        100%   {	opacity: 0;	}
    }
    `}),$e("modal-no-more-turns",(e=>{const{getState:t,publish:o}=Ke(e,void 0);return me(e,Pt,o),T`
   <modal-window 
        .open=${!!t()} 
        preventClose>
        <h1 slot="header">Keine Aktionen übrig.</h1>
        <div class="body">
            Du hast keine Aktionen mehr übrig. Willst du weiter geben, oder noch rum schauen?
        </div>
        <p slot="footer">
            <button @click="${()=>(ve(ao),o(!1))}">Zug beenden</button>
            <button @click="${()=>o(!1)}">Noch rumschauen</button>
        </p>
    </modal-window>`}),{styles:[s`
        .body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
        .body > * {
            display: block;
        }
        .player-info {
            display: grid;
            grid-template-columns: 1fr 3fr;
        }
        .sprite {
            height: 140px;
        }
        .health-bar {
            background-image: url('/assets/knight/health-bg.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        .health-bar .current {
            background-image: url('/assets/knight/health.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        `]}),$e("modals-all",(()=>T`
    <modal-no-more-turns></modal-no-more-turns>
    <modal-battle></modal-battle>
    <modal-dice-result></modal-dice-result>
    <modal-mill-taken></modal-mill-taken>`)),$e("footer-element",(o=>{const{get:i,set:r}=Ke(o,void 0),{get:n,set:s}=Ke(o,[]);return me(o,so,r),me(o,Nt,s),T`<footer class="${i()}">
    <div class="main ">
        ${((o,i="")=>{const r=null==o?void 0:o.map((o=>{var r,n;const s=Object.entries(Object.assign(Object.assign({},t),e)).find((([e,t])=>t.name===o.name)),a=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([e,t])=>void 0!==t)).map((([e,t])=>`${e}="${t}"`)).join(" "),l=dt(o)?{row:o.row,col:o.col}:{row:0,col:0};return T`<div
            @click="${()=>{ve(zt,Object.assign(Object.assign({item:o.name},l),{payload:o})),setTimeout((()=>{var e;null===(e=wo(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            @mouseover="${()=>{setTimeout((()=>{var e;null===(e=wo(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            style="position:relative; cursor: pointer; width: 120px;${i};">
                ${Ko(`<${null!==(r=null==s?void 0:s[1].name)&&void 0!==r?r:"span"} ${a} style="${i};"></${null!==(n=null==s?void 0:s[1].name)&&void 0!==n?n:"span"}>`)}
        </div>`}));return T`<sprite-player-elements-grid>${r}</sprite-player-elements-grid>`})(n().sort(((e,t)=>e.name.localeCompare(t.name))).filter((e=>!ut(e)||e.actions.current>0)),"width: 10vh; height: 10vh;")}
    </div>
    <div class="action">
        <button-pure @click="${()=>ve(ao)}">
            <text-block type="paragraph" size="x-large">⌛</text-block> Zug beenden
        </button-pure>
    </div>
</footer>`}),{styles:[No,Bo(s`footer .main`),s`
    footer {
        min-height: 10vh;
        max-height: 10vh;
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "main action";
        padding-left: 5vw;
        padding-right: 5vw;
    }
    footer .main {
        grid-area: main;
        transition: background-color 2s;
        min-height: 10vh;
        max-height: 10vh;
        overflow-x: auto;
    }
    footer.red {
        background-color: #A95C44;
    }
    footer.green {
        background-color: #178044;
    }
    footer .action {
        grid-area: action;
        place-self: center;
    }`]});const Mi=s`
  :host {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 3vh;
    height: 3vh;
  }
  div {
    width: 100%;
    height: 100%;
  }
`;var Ei;$e("resource-grain",(()=>T`<div title="${$i(wi.grain)}"></div>`),{styles:[s`
        :host {
          background-image: url("/assets/resources/grain.png");
        }
      `,Mi]}),$e("resource-stone",(()=>T`<div title="${$i(wi.stone)}"></div>`),{styles:[s`
        :host {
          background-image: url("/assets/resources/stone.png");
        }
      `,Mi]}),$e("resource-iron",(()=>T`<div title="${$i(wi.iron)}"></div>`),{styles:[s`
        :host {
          background-image: url("/assets/resources/iron.png");
        }
      `,Mi]}),$e("resource-wood",(()=>T`<div title="${$i(wi.log)}"></div>`),{styles:[s`
        :host {
          background-image: url("/assets/resources/log.png");
        }
      `,Mi]}),$e("resource-hay",(()=>T`<div title="${$i(wi.hay)}"></div>`),{styles:[s`
        :host {
          background-image: url("/assets/resources/hay.png");
        }
      `,Mi]}),$e("resource-counter",(({count:e,collect:t})=>T`
        <slot></slot>
        ${e} ${t?T`<span>(+${t})</span>`:""}
    `),{styles:[s`
        :host {
            font-size: 4vh;
        }
        span {
            font-size: smaller;
        }
        `],defaults:{count:0,collect:void 0}}),$e("header-element",(e=>{var t,o,i,r,n,s,a,l;const{get:c,set:d}=Ke(e,void 0),{get:u,set:h}=Ke(e,void 0),{get:v,set:g}=Ke(e,void 0);me(e,so,d),me(e,Ct,h),me(e,mo,g);const m=null!==(t=u())&&void 0!==t?t:{resources:{}},p=(e,t,o)=>(e[t]=(e[t]||0)+o,e),f=null!==(i=null===(o=v())||void 0===o?void 0:o.resourcesToGenerate.reduce(((e,t)=>{var o,i;for(const r of lt)e=p(e,r,null!==(i=null===(o=t.resources[r])||void 0===o?void 0:o.generatedResource)&&void 0!==i?i:0);return e}),{}))&&void 0!==i?i:{};return T`<header class="${c()}">
        <resource-counter title="${$i(wi.hay)}" count="${m.resources.hay}" collect=${null!==(r=f.hay)&&void 0!==r?r:0}>
            <resource-hay></resource-hay>
        </resource-counter>
        <resource-counter title="${$i(wi.grain)}" count="${m.resources.grain}" collect=${null!==(n=f.grain)&&void 0!==n?n:0}>
            <resource-grain></resource-grain>
        </resource-counter>
        <resource-counter title="${$i(wi.stone)}" count="${m.resources.stone}" collect=${null!==(s=f.stone)&&void 0!==s?s:0}>
            <resource-stone></resource-stone>
        </resource-counter>
        <resource-counter title="${$i(wi.iron)}" count="${m.resources.iron}" collect=${null!==(a=f.iron)&&void 0!==a?a:0}>
            <resource-iron></resource-iron>
        </resource-counter>
        <resource-counter title="${$i(wi.log)}" count="${m.resources.wood}" collect=${null!==(l=f.wood)&&void 0!==l?l:0}>
            <resource-wood></resource-wood>
        </resource-counter>
    </header>`}),{styles:s`
    header {
        min-height: 5vh;
        max-height: 5vh;
        background-size: 200% 100%;
        transition: background-position 2s;
        background-image: 
            linear-gradient(to right, #178044 0%, white 50%, #A95C44 100%);
    }
    .green {
        background-position: 0% 0%;
    }
    .red {
        background-position: 100% 0%;
    }`}),null===(Ei=document.querySelector("body"))||void 0===Ei||Ei.addEventListener("keyup",(function(e){"Escape"===e.key&&ve(At,!0)})),$e("the-mill",(()=>((async({rows:e,cols:t})=>{const o=jt({rows:e,cols:t}),i=Ot("green",{rows:e,cols:t}),r=Ot("red",{rows:e,cols:t}),n=Je(0,e-1).map((e=>Je(0,t-1).map((t=>({position:new ot(e,t),terrain:yt(),elements:[..._t(o,e,t),..._t(i,e,t),..._t(r,e,t)]})))));await ve($t,{map:n,teams:["red","green"]})})({rows:10,cols:10}),T`
    <controls-sidebar>sidebar</controls-sidebar>
    <map>
        <header-element>header</header-element>
        <world-map></world-map>
        <footer-element>
        </footer-element>
        <modals-all></modals-all>
    </map>

    `)),{styles:[No,Bo(s`world-map`),Bo(s`controls-sidebar`),s`
    header-element {
        grid-area: header;
    }
    world-map {
        grid-area: main;
        min-height: 85vh;
        max-height: 85vh;
        overflow: auto;
        scroll-behavior: smooth;
        background-color: #87CEFA;
    }
    
    footer-element {
        grid-area: footer;
    }
    
    map {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "header header header header header"
            "main main main main main"
            "footer footer footer footer footer";
        }
    :host {
        position: relative;
        display: block;
    }
    `]});const Ai=window.location.search.substring(1).split("&").reduce(((e,t)=>{const[o,i]=t.split("=");return e[o]=i,e}),{});document.documentElement.lang=Ai.lang||"en";export{t as buildings,Yo as knight,e as player,Xo as wagon};
//# sourceMappingURL=the-mill.js.map
