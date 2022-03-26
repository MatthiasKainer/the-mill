var e=Object.freeze({__proto__:null,get knight(){return ai},get wagon(){return di}}),t=Object.freeze({__proto__:null,get mill(){return xi},get castleSmall(){return _i},get lumberjackSmall(){return Ai},get mineSmall(){return Ci}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new Map;class r{constructor(e,t){if(this._$cssResult$=!0,t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=n.get(this.cssText);return o&&void 0===e&&(n.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=e=>new r("string"==typeof e?e:e+"",i),a=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new r(o,i)},l=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return s(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const d=window.trustedTypes,u=d?d.emptyScript:"",h=window.reactiveElementPolyfillSupport,v={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},m=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:m};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const i=this._$Eh(o,t);void 0!==i&&(this._$Eu.set(i,o),e.push(i))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eh(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{o?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ES(e,t,o=g){var i,n;const r=this.constructor._$Eh(e,o);if(void 0!==r&&!0===o.reflect){const s=(null!==(n=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:v.toAttribute)(t,o.type);this._$Ei=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Ei=null}}_$AK(e,t){var o,i,n;const r=this.constructor,s=r._$Eu.get(e);if(void 0!==s&&this._$Ei!==s){const e=r.getPropertyOptions(s),a=e.converter,l=null!==(n=null!==(i=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:v.fromAttribute;this._$Ei=s,this[s]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,o){let i=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.3.1");const b=globalThis.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,k=`<${$}>`,x=document,O=(e="")=>x.createComment(e),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,_=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,A=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,C=/"/g,z=/^(?:script|style|textarea|title)$/i,R=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),H=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),U=new WeakMap,B=x.createTreeWalker(x,129,null,!1);class P{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const s=e.length-1,a=this.parts,[l,c]=((e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",s=S;for(let t=0;t<o;t++){const o=e[t];let a,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,l=s.exec(o),null!==l);)d=s.lastIndex,s===S?"!--"===l[1]?s=E:void 0!==l[1]?s=A:void 0!==l[2]?(z.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=T):void 0!==l[3]&&(s=T):s===T?">"===l[0]?(s=null!=n?n:S,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?T:'"'===l[3]?C:M):s===C||s===M?s=T:s===E||s===A?s=S:(s=T,n=void 0);const u=s===T&&e[t+1].startsWith("/>")?" ":"";r+=s===S?o+k:c>=0?(i.push(a),o.slice(0,c)+"$lit$"+o.slice(c)+y+u):o+y+(-2===c?(i.push(void 0),t):u)}const a=r+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,i]})(e,t);if(this.el=P.createElement(l,o),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=B.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(y)){const o=c[r++];if(e.push(t),void 0!==o){const e=i.getAttribute(o.toLowerCase()+"$lit$").split(y),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?Z:"@"===t[1]?K:Y})}else a.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(z.test(i.tagName)){const e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],O()),B.nextNode(),a.push({type:2,index:++n});i.append(e[t],O())}}}else if(8===i.nodeType)if(i.data===$)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(y,e+1));)a.push({type:7,index:n}),e+=y.length-1}n++}}static createElement(e,t){const o=x.createElement("template");return o.innerHTML=e,o}}function D(e,t,o=e,i){var n,r,s,a;if(t===H)return t;let l=void 0!==i?null===(n=o._$Cl)||void 0===n?void 0:n[i]:o._$Cu;const c=j(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,o,i)),void 0!==i?(null!==(s=(a=o)._$Cl)&&void 0!==s?s:a._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(t=D(e,l._$AS(e,t.values),l,i)),t}class I{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(o,!0);B.currentNode=n;let r=B.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new L(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new V(r,this,e)),this.v.push(t),l=i[++a]}s!==(null==l?void 0:l.index)&&(r=B.nextNode(),s++)}return n}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class L{constructor(e,t,o,i){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),j(e)?e===N||null==e||""===e?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==H&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return _(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==N&&j(this._$AH)?this._$AA.nextSibling.data=e:this.k(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=P.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(o);else{const e=new I(n,this),t=e.p(this.options);e.m(o),this.k(t),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new P(e)),t}S(e){_(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new L(this.A(O()),this.A(O()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,o,i,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=D(this,e,t,0),r=!j(e)||e!==this._$AH&&e!==H,r&&(this._$AH=e);else{const i=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=D(this,i[o+s],t,s),a===H&&(a=this._$AH[s]),r||(r=!j(a)||a!==this._$AH[s]),a===N?e=N:e!==N&&(e+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}r&&!i&&this.C(e)}C(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends Y{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===N?void 0:e}}const W=b?b.emptyScript:"";class Z extends Y{constructor(){super(...arguments),this.type=4}C(e){e&&e!==N?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class K extends Y{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=D(this,e,t,0))&&void 0!==o?o:N)===H)return;const i=this._$AH,n=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==N&&(i===N||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class V{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,F;null==q||q(P,L),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.1");class J extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:t;let s=r._$litPart$;if(void 0===s){const e=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=s=new L(t.insertBefore(O(),e),e,void 0,null!=o?o:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return H}}J.finalized=!0,J._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:J});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:J}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.2.0");const ee={};var te;!function(e){e[e.SILENT=0]="SILENT",e[e.ERROR=1]="ERROR",e[e.INFO=80]="INFO",e[e.DEBUG=90]="DEBUG",e[e.TRACE=100]="TRACE"}(te||(te={}));let oe=te.SILENT;const ie=e=>oe=e;let ne=[];const re=(e,t,...o)=>{ne.forEach((i=>i(te.ERROR,e,t,...o))),oe>=te.ERROR&&console.error(t,e,...o)},se=(e,t,...o)=>{ne.forEach((i=>i(te.INFO,e,t,...o))),oe>=te.INFO&&(oe===te.TRACE?console.trace:console.log)(t,e,...o)},ae=(e,t,...o)=>{ne.forEach((i=>i(te.DEBUG,e,t,...o))),oe>=te.DEBUG&&(oe===te.TRACE?console.trace:console.log)(t,e,...o)},le={queue:{},list:{}};function ce(e){return e.reduce(((e,t)=>`${e};${t.name};`),"")}const de=new class{constructor(){this.actionDictionary={}}on(e,t){if(Array.isArray(e)){const o=ce(e);if(le.list[o])throw re("Hypothalamus.on",new Error("Cannot register the same list of hormones twice"),o),new Error("Cannot register the same list of hormones twice");se("[Hypothalamus.on] Adding new action when all in a list of hormones are released",o,e),le.list[o]={hormones:[...e],callback:t}}else se("Hypothalamus.on","Adding new action when a hormone is released",e.name),this.actionDictionary[e.name]=this.actionDictionary[e.name]||[],this.actionDictionary[e.name].push(t)}drop(e){Array.isArray(e)?(ae("Hypothalamus.drop","Dropping a list of hormones",ce(e),e),delete le.queue[ce(e)],delete le.list[ce(e)]):(ae("Hypothalamus.drop","Dropping a hormone",e.name),this.actionDictionary[e.name]=[])}dropAll(){ae("Hypothalamus.dropAll","Dropping all hormones"),this.actionDictionary={},le.queue={},le.list={}}collect(e,t,o){const i=`collect;;${e.name};${t.name};`;if(le.list[i])throw re("Hypothalamus.collect",new Error("Cannot register the same list of hormones twice"),i),new Error("Cannot register the same list of hormones twice");se("[Hypothalamus.collect] Adding new action when collected hormones are released",i,e,t),le.list[i]={hormones:[t],callback:o}}orchestrate(e,t){this.actionDictionary[e.name]&&this.actionDictionary[e.name].forEach((e=>e(t)));const o=Object.keys(le.queue).filter((t=>t.includes(`;${e.name};`))),i=Object.keys(le.list).filter((t=>t.indexOf(`;${e.name};`)>-1&&o.every((e=>e!==t))));i.forEach((e=>{le.queue[e]={hormones:[...le.list[e].hormones],values:{},callback:le.list[e].callback}}));const n=[...new Set([...o,...i])];for(let o=0;o<n.length;o++){const i=n[o];if(i.startsWith("collect;;")){const[o]=i.replace("collect;;","").split(";");e.name===o?le.queue[i].values[e.name]=[...le.queue[i].values[e.name]||[],t]:(le.queue[i].values[e.name]=t,le.queue[i].callback(le.queue[i].values),delete le.queue[i])}else le.queue[i].hormones=le.queue[i].hormones.filter((t=>t.name!==e.name)),le.queue[i].values[e.name]=t,le.queue[i].hormones.length<1&&(le.queue[i].callback(le.queue[i].values),delete le.queue[i])}}};function ue(e,t={}){return he(e,Object.assign(Object.assign({},t),{readOnce:!0}))}function he(e,t={}){return ve(ee)(e,t)}const ve=e=>(t,o={})=>{if(e[t]&&!o.loadIfExists)throw re("hormone.defineHormone",new Error("Hormone already created"),t),new Error("Hormone already created");if(e[t]&&o.loadIfExists)return ae("hormone.defineHormone","Hormone already created, reusing existing",t),{name:t};const{defaultValue:i,transformation:n,readOnce:r}=o;return e[t]={name:t,value:i,defaultValue:i,transformation:n,receptors:[],readOnce:null!=r&&r},{name:t}};async function me(e,t){return ge(ee)(e,t)}const ge=e=>async(t,o)=>{if(!t)throw re("hormone.releaseHormone",new Error("Hormone cannot be undefined")),new Error("Hormone cannot be undefined");const{name:i}=t;if(!e[i])throw re("hormone.releaseHormone",new Error("Hormone does not exist"),i),new Error("Hormone does not exist");var n;n=o,e[i].value=(void 0===n||n instanceof Function)&&o?o(e[i].value):o,se("hormone.releaseHormone","Releasing passed hormone",i,e[i].value);const{receptors:r,transformation:s}=e[i];s&&s(e[i].value);const a=e[i].value;return de.orchestrate({name:i},a),await Promise.all(r.filter((e=>{const t=void 0===e.onlyIf||e.onlyIf(a);return ae("hormone.releaseHormone",t?"Keeping receptor because condition matched or no condition":"Filtered receptor from the triggers because condition not matched",e),t})).map((e=>(null==e?void 0:e.onTriggered)?null==e?void 0:e.onTriggered(a):a))),e[i].readOnce&&(ae("hormone.releaseHormone","Resetting hormone because it is readOnce",i),e[i].value=e[i].defaultValue),Object.assign({},e[i])};function fe(e,{name:t},o,i){return pe(ee)(e,{name:t},o,i)}const pe=e=>(t,{name:o},i,n)=>{const r=null!=n?n:i,s=n?i:void 0;if(!e[o])throw re("receptor.useReceptor",new Error("Hormone is not defined"),o),new Error(`Hormone "${o}" is not defined`);((e,t,o,i)=>{const n=(null==i?void 0:i.toString())||o;return!e[o].receptors.some((e=>e.parent===t&&e.key===n))})(e,t,o,s)?(se("receptor.useReceptor","Pushing new receptor to hormone",o,{parent:t}),e[o].receptors.push({key:(null==s?void 0:s.toString())||o,parent:t,onlyIf:s,onTriggered:r}),void 0!==e[o].value?r(e[o].value):void 0!==e[o].defaultValue&&r(e[o].defaultValue)):((e,t,...o)=>{ne.forEach((i=>i(te.TRACE,e,t,...o))),oe===te.TRACE&&console.trace(t,e,...o)})("receptor.useReceptor","Receptor not pushed because already subscribed",o,{parent:t})};function be(e,[t,o]){return t.toLowerCase()!==t?e[t]=Object.assign(Object.assign({},o),{attribute:t.replace(/[A-Z]/g,"-$&").toLowerCase()}):e[t]=o,e}function we(e){return"boolean"==typeof e?{type:Boolean}:Array.isArray(e)?{type:Array}:"object"==typeof e?{type:Object}:{}}const ye=e=>(e=>void 0!==e&&void 0!==e.props)(e)?(e.props||[]).reduce(((e,t)=>(Object.entries(t).forEach((t=>e=be(e,t))),e)),{}):(e=>{return t=e||{},Object.entries(t).reduce(((e,[t,o])=>be(e,[t,we(o)])),{});var t})(null==e?void 0:e.defaults),$e={},ke=(e,t,o)=>{if($e[e])return $e[e];customElements.define(e,class extends J{constructor(){super(),this.content=R``,(e=>void 0!==e&&void 0!==e.defaults)(o)&&Object.entries(o.defaults).forEach((([e,t])=>{this[e]=t}))}static get properties(){return ye(o)}static get styles(){return null==o?void 0:o.styles}async performUpdate(){return this.content=await Promise.resolve(t(this)).catch((e=>R`<slot name="error">${e}</slot>`)),super.performUpdate()}render(){return this.content}});const i=document.createElement(e);return $e[e]=i,i};var xe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Oe={},je={},_e={};Object.defineProperty(_e,"t",{value:!0}),_e.shallowClone=void 0,_e.shallowClone=function(e){return"object"!=typeof e||!e||e instanceof Date||e instanceof RegExp?e:Array.isArray(e)?[...e]:Object.assign({},e)};var Se={};function Ee(e){if(!e.dispatchEvent||!e.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return e}Object.defineProperty(Se,"t",{value:!0}),Se.withWorkflow=Se.withReducer=Se.withState=Se.decorate=Se.asUpdateableLitElement=void 0,Se.asUpdateableLitElement=Ee;const Ae="__registered_states";function Te(e){const t=e;if(t[Ae])return t;const o=Ee(e),i=o.updated;return t[Ae]={index:0,count:0,states:[],reducers:[],workflows:[]},o.updated=e=>(t[Ae].index=0,i(e)),t}Se.decorate=Te,Se.withState=function(e,t,o={}){const i=Te(e),{index:n,count:r}=i[Ae];return n===r?(i[Ae].index++,i[Ae].count++,i[Ae].states.push(t),t):(i[Ae].index++,o.updateDefault&&i[Ae].states[n].inject(t.get()),i[Ae].states[n])},Se.withReducer=function(e,t){const o=Te(e),{index:i,count:n,reducers:r}=o[Ae];return i!==n||r[i-1]?o[Ae].reducers[i-1]:(o[Ae].reducers[i-1]=t,t)},Se.withWorkflow=function(e,t){const o=Te(e),{index:i,count:n,workflows:r}=o[Ae];return i!==n||r[i-1]?o[Ae].workflows[i-1]:(o[Ae].workflows[i-1]=t,t)};var Me=xe&&xe.o||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(je,"t",{value:!0}),je.useState=void 0;const Ce=_e,ze=Se;je.useState=(e,t,o={})=>{let i=(0,Ce.shallowClone)(t);const n=[()=>Me(void 0,void 0,void 0,(function*(){return e.requestUpdate(),yield e.updateComplete}))],r=e=>Me(void 0,void 0,void 0,(function*(){i!==e&&(i=(0,Ce.shallowClone)(e),yield Promise.all(n.map((e=>e(i)))))}));return(0,ze.withState)(e,new class{set value(e){r(e)}get value(){return i}publish(e){r(e)}set(e){return Me(this,void 0,void 0,(function*(){yield r(e)}))}subscribe(e){n.push(e)}inject(e){i=e}get(){return i}getState(){return i}},o)};var Re={},He=xe&&xe.o||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(Re,"t",{value:!0}),Re.useReducer=void 0;const Ne=je,Ue=Se;Re.useReducer=(e,t,o,i={})=>{const{get:n,set:r}=(0,Ne.useState)(e,o,i),s=[],a=(o,a)=>He(void 0,void 0,void 0,(function*(){const l=t(n());return l[o]&&(yield r(yield l[o](a)),s.forEach((e=>e(o,n()))),i.dispatchEvent&&e.dispatchEvent(new CustomEvent(o,{detail:n()}))),n()}));return(0,Ue.withReducer)(e,{get:n,subscribe:e=>s.push(e),when:(e,t)=>s.push(((o,i)=>o===e&&t(i))),set:a,dispatch:a})};var Be={},Pe=xe&&xe.o||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(Be,"t",{value:!0}),Be.useWorkflow=void 0;const De=Oe,Ie=Se;Be.useWorkflow=(e,t)=>{const o=Object.entries(t).reduce(((t,[o,{reducer:i,initialState:n}])=>(t[o]=(0,De.useReducer)(e,i,n),t)),{}),i={},n={},r=[],s=e=>(r.push({type:"projections",args:[e]}),o[e]?o[e].get():void 0);return(0,Ie.withWorkflow)(e,{addActivity:(e,t)=>Pe(void 0,void 0,void 0,(function*(){var n,s;r.push({type:"addActivity",args:[e,t]}),yield Promise.all(null!==(s=null===(n=i[e])||void 0===n?void 0:n.map((e=>e(t))))&&void 0!==s?s:[]);for(const i of Object.values(o))yield i.dispatch(e,t)})),addSideeffect:(e,t)=>{r.push({type:"addSideeffect",args:[e,t]}),i[e]=[...i[e]||[],t]},projections:s,addCompensation:(e,t)=>{r.push({type:"addCompensation",args:[e,t]}),n[e]=[...n[e]||[],t]},compensate:()=>Pe(void 0,void 0,void 0,(function*(){r.push({type:"compensate",args:[]});for(const[e,t]of Object.entries(n))for(const i of t)for(const t of Object.values(o))yield t.dispatch(e,i)})),after:(e,t,o)=>{r.push({type:"after",args:[e,t,o]});const i=()=>Pe(void 0,void 0,void 0,(function*(){r.some((e=>((e,t)=>{if(e.type!==t.type)return!1;for(let o=0;o<t.args.length;o++)if(e.args[o]!==t.args[o])return!1;return!0})(e,t)))||(new Date(Date.now())>e?yield o():setTimeout(i,100))}));i()},plan:e=>Pe(void 0,void 0,void 0,(function*(){for(const[o,i]of Object.entries(e))if(t[o]&&JSON.stringify(s(o))===JSON.stringify(t[o].initialState))return yield i();return e[""]?yield e[""]():Promise.resolve(null)})),history:()=>[...r]})},function(e){Object.defineProperty(e,"t",{value:!0}),e.useWorkflow=e.useReducer=e.useState=void 0;var t=je;Object.defineProperty(e,"useState",{enumerable:!0,get:function(){return t.useState}});var o=Re;Object.defineProperty(e,"useReducer",{enumerable:!0,get:function(){return o.useReducer}});var i=Be;Object.defineProperty(e,"useWorkflow",{enumerable:!0,get:function(){return i.useWorkflow}})}(Oe);var Le={},Ye={},Ge={};function We(e){if(!e.dispatchEvent||!e.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return e}Object.defineProperty(Ge,"t",{value:!0}),Ge.withEffect=Ge.decorate=Ge.asUpdateableLitElement=void 0,Ge.asUpdateableLitElement=We;const Ze="__registered_effects";function Ke(e){const t=e;if(t[Ze])return t;const o=We(e),i=o.updated;return t[Ze]={index:0,count:0,effects:[]},o.updated=e=>(t[Ze].index=0,i(e)),t}Ge.decorate=Ke,Ge.withEffect=function(e,t){const o=Ke(e),{index:i,count:n}=o[Ze];return i===n?(o[Ze].index++,o[Ze].count++,o[Ze].effects.push(t),t):(o[Ze].index++,o[Ze].effects[i])},Object.defineProperty(Ye,"t",{value:!0}),Ye.useOnce=Ye.useEffect=void 0;const Ve=Ge;function qe(e,t,o){const i=(0,Ve.withEffect)(e,{on:t,observe:["__initial__dirty"]});i.observe.some(((e,t)=>o[t]!==e))&&i.on(),i.observe=o}Ye.useEffect=qe,Ye.useOnce=(e,t)=>qe(e,t,[]),function(e){Object.defineProperty(e,"t",{value:!0}),e.useOnce=e.useEffect=void 0;var t=Ye;Object.defineProperty(e,"useEffect",{enumerable:!0,get:function(){return t.useEffect}}),Object.defineProperty(e,"useOnce",{enumerable:!0,get:function(){return t.useOnce}})}(Le);var Xe=Le.useOnce,Fe=Oe.useState;function Je(e,t){return Array.from({length:t-e+1},((e,t)=>t))}class Qe{constructor(e,t,o,i=1){this.x=e,this.y=t,this.z=o,this.costs=i}equals(e){return null!==e&&this.x===e.x&&this.y===e.y&&this.z===e.z}add(e){const{x:t,y:o,z:i}=this;return new Qe(t+e.x,o+e.y,i+e.z)}remove(e){const{x:t,y:o,z:i}=this;return new Qe(t-e.x,o-e.y,i-e.z)}vector(e){return new Qe(e.x-this.x,e.y-this.y,e.z-this.z)}distance(e){return Math.max(Math.abs(this.x-e.x),Math.abs(this.y-e.y),Math.abs(this.z-e.z))}heuristic(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}range(e){const t=[];for(let o=-e;o<=e;o++)for(let i=Math.max(-e,-o-e);i<=Math.min(e,-o+e);i++)t.push(this.add(new Qe(o,i,-o-i)));return t}direction(e){return et[e]}directionTo(e){const t=Je(0,5).find((t=>this.neighbor(t).equals(e)));return void 0!==t&&t>=0?this.direction(t):null}neighbor(e){return this.add(this.direction(e))}neighbors(e){return Je(0,5).map((e=>this.neighbor(e))).filter((t=>e.some((e=>e.equals(t)))))}ring(e){const t=[],o=-1*e;for(const i of Je(o,e))for(const n of Je(Math.max(o,-1*i-o),Math.min(e,-1*i+e))){const e=-i-n;t.push(this.add(new Qe(i,n,e)))}return t}cost(){return this.costs}toPosition(){const e=this.x+(this.z+(1&this.z))/2,t=this.z;return new it(t,e)}toCoords(){return this.toPosition().toCoords()}toString(){return`${this.x}:${this.y}:${this.z}`}}const et=[new Qe(1,-1,0),new Qe(1,0,-1),new Qe(0,1,-1),new Qe(-1,1,0),new Qe(-1,0,1),new Qe(0,-1,1)];const tt={manhattan:[{row:0,col:-1},{row:1,col:0},{row:0,col:1},{row:-1,col:0}],euclid:[{row:1,col:-1},{row:-1,col:1},{row:1,col:0},{row:0,col:1},{row:-1,col:0},{row:0,col:-1},{row:-1,col:-1},{row:1,col:1}]},ot=(e,t)=>e.col.toString()===t.col.toString()&&e.row.toString()===t.row.toString();class it{constructor(e,t,o="manhattan"){this.row=e,this.col=t,this.system=o}vector(e){return new it(e.row-this.row,e.col-this.col)}toCube(){const e=this.col-(this.row+(1&this.row))/2,t=this.row;return new Qe(e,-e-t,t)}toCoords(){const{row:e,col:t}=this;return{col:t,row:e}}neighbor(e){const t=nt(tt[this.system][e]);return t.system=this.system,this.add(t)}neighbors(){return Je(0,tt[this.system].length-1).map((e=>this.neighbor(e)))}distance(e){return function(e,t){return Math.sqrt(Math.pow(t.col-e.col,2)+Math.pow(t.row-e.row,2))}(this,e)}manhattanDistance(e){return function(e,t){return Math.abs(Math.abs(e.col-t.col)+Math.abs(e.row-t.row))}(this,e)}add(e){const{col:t,row:o}=this;return new it(o+e.row,t+e.col,this.system)}remove(e){const{col:t,row:o}=this;return new it(o-e.row,t-e.col,this.system)}equals(e){return null!=e&&e.col.toString()===this.col.toString()&&e.row.toString()===this.row.toString()}toString(){return`${this.col}:${this.row}`}toEuclidPosition(){return new it(this.row,this.col,"euclid")}toManhattanPosition(){return new it(this.row,this.col,"manhattan")}static fromString(e){if(!e)return null;const[t,o]=e.split(":").map((e=>parseInt(e,10)));return new it(o,t)}}const nt=({row:e,col:t})=>new it(e,t);function rt(){var e=(new Date).getTime(),t=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(o){var i=16*Math.random();return e>0?(i=(e+i)%16|0,e=Math.floor(e/16)):(i=(t+i)%16|0,t=Math.floor(t/16)),("x"===o?i:3&i|8).toString(16)}))}const st={stone:{default:"resources.stone",de:"Stein",en:"Stone"},log:{default:"resources.log",de:"Holz",en:"Wood"},grain:{default:"resources.grain",de:"Mehl",en:"Flour"},hay:{default:"resources.hay",de:"Getreide",en:"Hay"},iron:{default:"resources.iron",de:"Eisen",en:"Iron"}},at={wagon:{default:"assets.wagon",de:"Wagen",en:"Wagon"},knight:{default:"assets.knight",de:"Ritter",en:"Knight"},castle:{build:{default:"assets.castle.build",de:"Bauen",en:"Build"}},dices:{standard:{name:{default:"assets.dices.standard.name",de:"Standardwaffe",en:"Standardweapon"},story:{default:"assets.dices.standard.story",de:"Eine faire, ausgewogene Waffe die jeder Ritter haben sollte",en:"A fair, well-balanced weapon that every knight should have"}},mightyBlowOfBetrayal:{name:{default:"assets.dices.mightyBlowOfBetrayal.name",de:"Mächtiger Schlag des Betrugs",en:"Mighty blow of betrayal"},story:{default:"assets.dices.mightyBlowOfBetrayal.story",de:"Eine Waffe, die bis zu 12 Schaden verursachen kann, doch auch eine hohe Wahrscheinlichkeit hat gar keinen Schaden zu verursachen, oder sogar den Ritter selbst zu verletzen!",en:"A weapon that can inflict up to 12 damage, but also has a high chance of inflicting no damage, or even injuring the knight himself"}},smallCastleDefence:{name:{default:"assets.dices.smallCastleDefence.name",de:"Verteidigungswaffen der kleinen Burg",en:"Defensive weapons of the small castle"},story:{default:"assets.dices.smallCastleDefence.story",de:"Schon die kleine Burg hat mächtige Verteidigungswaffen, die viele Angriffe abwehren kann. Nur eine mächtige Armee wird es schaffen, diese Verteidigung zu überwinden.",en:"The small castle has mighty defensive weapons so that many attacks can be thwarted. Only a mighty army can defeat it."}}},properties:{life:{default:"assets.properties.life",de:"<strong>Leben</strong> ${0} von ${1}",en:"<strong>Life</strong> ${0} of ${1}"},actions:{default:"assets.properties.actions",de:"<strong>Aktionen</strong> ${0} von ${1}",en:"<strong>Actions</strong> ${0} of ${1}",move:{default:"assets.properties.actions.move",de:"Bewegen",en:"Move"},attack:{default:"assets.properties.actions.attack",de:"Angreifen",en:"Attack"},fortify:{default:"assets.properties.actions.fortify",de:"Verteidigen",en:"Fortify"},load:{default:"assets.properties.actions.load",de:"Laden/Entladen",en:"Load/Unload"},build:{knight:{default:"assets.properties.actions.build.knight",de:"Ritter bauen",en:"Build knight"},wagon:{default:"assets.properties.actions.build.wagon",de:"Wagen bauen",en:"Build wagon"},iron:{default:"assets.properties.actions.build.iron",de:"Eisen bauen",en:"Build iron"},castle_medium:{default:"assets.properties.actions.build.castle_medium",de:"Mittlere Burg bauen",en:"Build medium castle"},castle_large:{default:"assets.properties.actions.build.castle_large",de:"Große Burg bauen",en:"Build large castle"},lumberjack_small:{default:"assets.properties.actions.build.lumberjack_small",de:"Baue einen Holzfäller (klein)",en:"Build Lumberjack (small)"},mine_small:{default:"assets.properties.actions.build.mine_small",de:"Baue eine Mine (klein)",en:"Build Mine (small)"}}}}};function lt(e,...t){const o=e[document.documentElement.lang||"en"];return o?o.replace(/\$\{(\d+)\}/g,((e,o)=>t[o])):e.default}function ct(e){return{name:lt(e.name),story:lt(e.story)}}function dt(e){return e.reduce(((e,t)=>e+function(e){return e.sides[Math.floor(Math.random()*e.sides.length)].value}(t)),0)}const ut={id:"building-castle-small",name:"Small Castle",team:"",occurences:{min:1},dices:[Object.assign(Object.assign({},ct(at.dices.smallCastleDefence)),{sides:[{value:12},{value:12},{value:16},{value:16},{value:21}]})],health:{current:60,max:60},actions:{current:2,max:2},resources:{grain:{generatedResource:10},hay:{generatedResource:10},stone:{generatedResource:10},iron:{generatedResource:10}}},ht={green:e=>Math.max(.75*e.length,Math.round(Math.random()*(e.length-1))),red:e=>Math.min(.25*e.length,Math.round(Math.random()*(e.length-1)))};
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
function vt(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}const mt=["hay","grain","iron","wood","stone"];function gt(e){var t;return void 0!==e&&void 0!==(null===(t=e)||void 0===t?void 0:t.resources)}function ft(e){var t,o;return void 0!==e&&(null===(t=e)||void 0===t?void 0:t.row)>=0&&(null===(o=e)||void 0===o?void 0:o.col)>=0}function pt(e){var t,o;return e&&(null===(o=null===(t=e)||void 0===t?void 0:t.actions)||void 0===o?void 0:o.max)>0}function bt(e){var t,o;return e&&(null===(o=null===(t=e)||void 0===t?void 0:t.dices)||void 0===o?void 0:o.length)>0}function wt(e){var t,o;return e&&(null===(o=null===(t=e)||void 0===t?void 0:t.dices)||void 0===o?void 0:o.length)>0}const yt={id:"building-mill",name:"Mill",occurences:{min:1},resources:{grain:{hay:100,generatedResource:50},hay:{generatedResource:50}}};function $t(e){return void 0!==e&&e.max>0}const kt=[Object.assign(Object.assign({},yt),{min:0,max:2}),Object.assign(Object.assign({},yt),{min:8,max:10})],xt=({min:e,max:t},o,i)=>{const n=e=>o*i*(e/10);return Math.floor(Math.random()*(n(t)-n(e))+n(e))},Ot=(e,t)=>{var o;return null===(o=null==e?void 0:e.map)||void 0===o?void 0:o.reduce(((e,o)=>[...e,...o.reduce(((e,o)=>[...e,...o.elements.filter(gt).filter((e=>e.team===t))]),[])]),[])},jt=(...e)=>e.reduce(((e,t)=>(e.push(...Object.entries(t.resources).map((e=>{var[o,i]=e,{generatedResource:n}=i,r=vt(i,["generatedResource"]);let s={};s[o]=Object.assign(Object.assign({},r),{generatedResource:n});return Object.assign(Object.assign({},t),{resources:s})}))),e)),[]).filter(Boolean),_t={gras:{sprite:{name:"gras",file:"hexagonTerrain_sheet",x:414,y:1906},movementCosts:1,defense:0},desert:{sprite:{name:"desert",file:"hexagonTerrain_sheet",x:902,y:627},movementCosts:4,defense:0},mud:{sprite:{name:"mud",file:"hexagonTerrain_sheet",x:658,y:912},movementCosts:4,defense:1},muddyHills:{sprite:{name:"muddyHills",file:"hexagonTerrain_sheet",x:780,y:627},movementCosts:8,defense:3},forest:{sprite:{name:"forest",file:"hexagonTerrain_sheet",x:536,y:912},movementCosts:8,defense:3},mountain:{sprite:{name:"mountain",file:"hexagonTerrain_sheet",x:536,y:1195},movementCosts:10,defense:9}},St=()=>{var e;const t=Object.keys(_t);return null!==(e=_t[t[Math.floor(Math.random()*t.length)]])&&void 0!==e?e:_t.mountain},Et=he("game/world/worldLoaded"),At=he("game/start"),Tt=he("game/load/sidebar"),Mt=({rows:e,cols:t})=>(e=>{const t=new Array(e.rows*e.cols).map((()=>[]));return kt.forEach((o=>{var i;let n=o.occurences.factor?Math.max(o.occurences.min,t.length/o.occurences.factor):o.occurences.min;for(;n>0;){const s=$t(o)?xt(o,e.rows,e.cols):(r=t.length,Math.round(Math.random()*(r-1)));t[s]=[...null!==(i=t[s])&&void 0!==i?i:[],Object.assign(Object.assign({},o),{name:o.id,id:rt()})],n--}var r})),t})({rows:e,cols:t}),Ct=(e,{rows:t,cols:o})=>((e,t)=>{const o=new Array(t.rows*t.cols).map((()=>[]));return[ut].forEach((t=>{var i;let n=t.occurences.factor?Math.max(t.occurences.min,o.length/t.occurences.factor):t.occurences.min;for(;n>0;){const r=ht[e](o);o[r]=[...null!==(i=o[r])&&void 0!==i?i:[],Object.assign(Object.assign({},t),{name:t.id,team:e,id:rt()})],n--}})),o})(e,{rows:t,cols:o}),zt=(e,t,o)=>{var i;return(null!==(i=e.pop())&&void 0!==i?i:[]).map((e=>Object.assign(Object.assign({},e),{row:t,col:o})))};class Rt{constructor(e=4086,t=Uint32Array){this.capacity=e,this.capacity=e,this._keys=[],this._priorities=new t(e+1),this.length=0}clear(){this.length=0}bubbleUp(e){const t=this._keys[e],o=this._priorities[e];for(;e>1;){const t=e>>>1;if(this._priorities[t]<=o)break;this._keys[e]=this._keys[t],this._priorities[e]=this._priorities[t],e=t}this._keys[e]=t,this._priorities[e]=o}bubbleDown(e){const t=this._keys[e],o=this._priorities[e],i=1+(this.length>>>1),n=this.length+1;for(;e<i;){const t=e<<1;if(t>=n)break;let i=this._priorities[t],r=this._keys[t],s=t;const a=t+1;if(a<n){const e=this._priorities[a];e<i&&(i=e,r=this._keys[a],s=a)}if(i>=o)break;this._keys[e]=r,this._priorities[e]=i,e=s}this._keys[e]=t,this._priorities[e]=o}push(e,t=0){if(this.length===this.capacity)throw new Error("Heap has reached capacity, can't push new items");const o=this.length+1;this._keys[o]=e,this._priorities[o]=t,this.bubbleUp(o),this.length++}pop(){const e=this._keys[1];return this.length--,this.length>0&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1)),e}peekPriority(){return this._priorities[1]}peek(){return this._keys[1]}toString(){if(0===this.length)return"(empty queue)";const e=Array(this.length-1);for(let t=0;t<this.length;t++)e[t]=this._priorities[t+1];return`[${e.join(" ")}]`}get[Symbol.toStringTag](){return"Heapify"}*[Symbol.iterator](){for(let e=0;e<this.length;e++){const t=this._priorities[e+1],o=this._keys[e+1];yield[o,t]}}*keys(){for(let e=0;e<this.length;e++)yield this._keys[e+1]}*priorities(){for(let e=0;e<this.length;e++)yield this._priorities[e+1]}}const Ht=e=>e.toPosition().toString();const Nt=(e,t,o,i,n)=>{const r=new Rt;r.push(e,0);const s={},a={},l=[];let c=!1;if(s[Ht(e)]=Ht(e),a[Ht(e)]=0,e.equals(t))return{path:[]};if(i(t))return{path:[]};for(;r.length>0;){const e=r.pop();if(e.equals(t)){c=!0;break}if(r.length>1e3)throw new Error("No what kinda path are you searching for?!");l.push(e.toPosition().toString());for(const c of e.neighbors(o).filter((e=>!s[Ht(e)])).map((e=>{var t;return null!==(t=o.find((t=>t.equals(e))))&&void 0!==t?t:e}))){if(i(c))continue;l.some((e=>e===Ht(c)))||l.push(Ht(c));const o=a[Ht(e)]+c.cost();n<o||(!a[Ht(c)]||o<a[Ht(c)])&&(a[Ht(c)]=o,r.push(c,o+t.heuristic(c)),s[Ht(c)]=e.toPosition().toString())}}const d=e.toPosition();if(!c)return{path:[],visited:l};let u=t.toPosition();const h=[];do{h.push(u),u=it.fromString(s[u.toString()])}while(null!==u&&!u.equals(d));return{path:h.reverse(),visited:l}},Ut=ue("action/abort"),Bt=he("player/update"),Pt=ue("player/request/select"),Dt=he("player/buildings/item/selected"),It=he("player/item/moved"),Lt=he("player/knights/created"),Yt=he("player/wagon/created"),Gt=he("player/assets/loaded"),Wt=he("turn/player/actions/hasLeft"),Zt=ue("turn/player/actions/none"),Kt=ue("map/hexagon/updated",{readOnce:!0}),Vt=he("modes/move/activate"),qt=he("modes/move/activated"),Xt=he("modes/move/deactivate"),Ft=he("modes/move/hovered-target"),Jt=he("modes/move/end"),Qt=he("modes/build/lumberjack-small"),eo=he("modes/build/lumberjack-small/success"),to=he("modes/build/lumberjack-small/failed"),oo=he("modes/build/mine-small"),io=he("modes/build/mine-small/success"),no=he("modes/build/mine-small/failed"),ro=he("modes/battle/activate"),so=he("modes/battle/active"),ao=he("modes/battle/end"),lo=he("modes/battle/deactivate"),co=he("battle/started"),uo=he("battle/dice/thrown"),ho=he("battle/player/attacked"),vo=he("mill/takeover"),mo=he("lumberjack/takeover"),go=he("mine/takeover"),fo=he("modal/battle/open"),po=he("modal/dice-result/open"),bo=he("turn/world/started"),wo=he("turn/world/accepted"),yo=he("turn/player/complete"),$o=he("turn/world/complete"),ko=he("resources/generated"),xo=he("resources/generation/complete"),Oo=he("resources/summary"),jo=he("resources/distribute"),_o=he("resources/distribute/request"),So=he("resources/distribute/updated"),Eo=()=>({grain:100,iron:200,hay:0,wood:0,stone:0});function Ao(e,t){if(!e||!e.map)return[];const o=e=>t===e.team,i=[];for(const t of e.map)for(const e of t)i.push(...e.elements.filter(o));return i}function To(e){var t,o,i,n,r;if(!e)return;return[...null!==(r=null===(n=null===(i=null===(o=null===(t=null===document||void 0===document?void 0:document.querySelector("the-mill"))||void 0===t?void 0:t.shadowRoot)||void 0===o?void 0:o.querySelector("world-map"))||void 0===i?void 0:i.shadowRoot)||void 0===n?void 0:n.querySelectorAll("hexagon-element"))&&void 0!==r?r:[]].find((t=>{var o,i;return null===(i=null===(o=t.shadowRoot)||void 0===o?void 0:o.querySelector("sprite-set"))||void 0===i?void 0:i.querySelector(`[id="${e.id}"]`)}))}document.deepQuerySelector=To;const Mo=()=>({grain:50,iron:0,hay:0,wood:50,stone:0});function Co(e,t){return e.sprite.name===t}let zo,Ro={},Ho=[],No=[],Uo={};const Bo=e=>Object.assign({},Uo[e]),Po=()=>Uo[zo],Do=e=>e.actions.current>0,Io=({team:e})=>e===zo;de.on(Et,(async e=>{Ho=[],e.map.forEach(((e,t)=>{e.forEach(((e,o)=>{const i=new it(t,o).toCube();e.terrain.movementCosts&&(i.costs=e.terrain.movementCosts),Ho.push(i)}))})),Ro=e,["green","red"].forEach((e=>{Uo[e]={resources:{hay:100,grain:200,iron:200,wood:100,stone:100}}})),await me(At)})),de.on(Ut,(async e=>{e&&(me(Xt),me(lo))})),de.on([At,Tt],(async()=>{await me(bo)})),de.on(bo,(async()=>{No=[...Ro.teams],zo=No.pop(),await me(wo,zo)})),de.on(jo,(async({team:e,resourcesToGenerate:t})=>{var o;if(null===(o=Bo(e))||void 0===o?void 0:o.resources){const o=Object.assign({},Bo(e).resources);Uo[e].resources=function(e,t){let o=Object.assign({},e),i=[...t],n=!0;for(;n;)n=!1,i=i.map((e=>{let t=e;return Object.entries(e.resources).forEach((i=>{var[r,s]=i,{generatedResource:a}=s,l=vt(s,["generatedResource"]);Object.entries(l).every((([e,t])=>o[e]<=t))&&(n=!0,t=void 0,Object.entries(l).forEach((([e,t])=>{o[e]-=t})),o[r]+=a,me(ko,e))})),t})).filter(Boolean);return o}(Uo[e].resources,t),me(xo,{team:e,before:o,after:Uo[e].resources})}})),de.collect(ko,xo,(e=>{var t;me(Oo,null===(t=e[ko.name])||void 0===t?void 0:t.map((e=>({name:e.name,from:Object.values(e.resources).map((e=>{var t=vt(e,["generatedResource"]);return Object.assign({},t)})),to:Object.keys(e.resources)}))))})),de.on(wo,(async e=>{const t=Ao(Ro,e);await me(Gt,t);const o=null==t?void 0:t.find((e=>e.name===Oi));ft(o)&&me(Pt,{item:Oi,row:o.row,col:o.col,payload:o}),setTimeout((()=>{var e;null===(e=To(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2),me(Bt,Bo(e));const i=Ot(Ro,e).reduce(((e,t)=>[...e,...jt(t)]),[]);me(So,{team:e,resourcesToGenerate:i}),await me(jo,{team:e,resourcesToGenerate:i})})),de.on(_o,(({team:e})=>{var t;const o=null===(t=Ot(Ro,e))||void 0===t?void 0:t.reduce(((e,t)=>[...e,...jt(t)]),[]);me(So,{team:e,resourcesToGenerate:o})})),de.on(Pt,(async e=>{await me(Dt,Object.assign(Object.assign({},e),{item:"hexagon"})),await me(Dt,Object.assign({},e)),await me(Dt,Object.assign(Object.assign({},e),{item:"hexagon"}))})),de.on(yo,(()=>{zo=No.pop(),void 0===zo?me($o):me(wo,zo)})),de.on($o,(()=>{Ro.map.forEach((e=>{e.forEach((({elements:e})=>{((...e)=>{e.forEach((e=>{e.actions.current=e.actions.max}))})(...e.filter(pt))}))})),me(bo)}));const Lo=(e,t)=>{const o=Object.assign({},Uo[e].resources);for(const[e,i]of Object.entries(t)){if(o[e]<i)return!1;o[e]-=i}return Uo[e].resources=o,!0};de.on(Lt,(async({row:e,col:t,team:o})=>{if(!Io({team:o}))return;if(!Lo(o,{grain:100,iron:200,hay:0,wood:0,stone:0}))return;const i=(({team:e,row:t,col:o})=>({id:rt(),name:ri,team:e,row:t,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10},dices:[Object.assign(Object.assign({},ct(at.dices.standard)),{sides:[{value:3},{value:3},{value:3},{value:4},{value:5},{value:6}]}),Object.assign(Object.assign({},ct(at.dices.mightyBlowOfBetrayal)),{sides:[{value:-3},{value:0},{value:0},{value:6},{value:12}]})]}))({row:e,col:t,team:o});Ro.map[e][t].elements.push(i),await Promise.all([me(Kt,{row:e,col:t,elements:[...Ro.map[e][t].elements]}),me(Gt,Ao(Ro,o)),me(Bt,Po())]),me(Pt,{item:i.name,row:e,col:t,payload:i})})),de.on(Yt,(async({row:e,col:t,team:o})=>{if(!Io({team:o}))return;if(!Lo(o,{grain:50,iron:0,hay:0,wood:50,stone:0}))return;const i=(({team:e,row:t,col:o})=>({id:rt(),name:li,team:e,row:t,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10}}))({row:e,col:t,team:o});Ro.map[e][t].elements.push(i),await Promise.all([me(Kt,{row:e,col:t,elements:[...Ro.map[e][t].elements]}),me(Gt,Ao(Ro,o)),me(Bt,Po())]),me(Pt,{item:i.name,row:e,col:t,payload:i})})),de.on(Wt,(()=>{void 0===((e,t)=>{for(const o of e.map)for(const e of o){const o=e.elements.filter(pt).map((e=>e)).find((e=>e.team===t&&e.actions.current>0));if(o)return o}})(Ro,zo)&&me(Zt,!0)})),de.on(Qt,(async({position:e,asset:t})=>{const{elements:o,terrain:i}=Ro.map[e.row][e.col],{team:n}=t,r=o.findIndex((e=>"player-wagon"===e.name));if(Io({team:t.team}))if("player-wagon"!==t.name||r<0)await me(to,{position:e,asset:t,reason:"No wagon on field"});else if(Co(i,"forest"))if(o.some(gt))await me(to,{position:e,asset:t,reason:"There is already a building on the field"});else{const i=(({position:e,asset:t})=>Object.assign(Object.assign({id:"lumberjack-small",name:"lumberjack-small",team:t.team},e),{occurences:{min:1},resources:{wood:{generatedResource:50}}}))({position:e,asset:t});o.splice(r,1),o.unshift(i),await Promise.all([me(Kt,Object.assign(Object.assign({},e),{elements:[...o]})),me(Gt,Ao(Ro,t.team)),me(Bt,Po()),me(eo,{position:e,asset:i})]),me(_o,{team:n})}else await me(to,{position:e,asset:t,reason:`No wood on field but ${i.sprite.name}`});else await me(to,{position:e,asset:t,reason:`Not the turn of the team ${t.team}`})})),de.on(oo,(async({position:e,asset:t})=>{const{elements:o,terrain:i}=Ro.map[e.row][e.col],{team:n}=t,r=o.findIndex((e=>"player-wagon"===e.name));if(Io({team:t.team}))if("player-wagon"!==t.name||r<0)await me(no,{position:e,asset:t,reason:"No wagon on field"});else if(Co(i,"mountain"))if(o.some(gt))await me(no,{position:e,asset:t,reason:"There is already a building on the field"});else{const i=(({position:e,asset:t})=>Object.assign(Object.assign({id:"mine-small",name:"mine-small",team:t.team},e),{occurences:{min:1},resources:{stone:{generatedResource:50},iron:{generatedResource:50}}}))({position:e,asset:t});o.splice(r,1),o.unshift(i),await Promise.all([me(Kt,Object.assign(Object.assign({},e),{elements:[...o]})),me(Gt,Ao(Ro,t.team)),me(Bt,Po()),me(io,{position:e,asset:i})]),me(_o,{team:n})}else await me(no,{position:e,asset:t,reason:`No mountain on field but ${i.sprite.name}`});else await me(no,{position:e,asset:t,reason:`Not the turn of the team ${t.team}`})}));const Yo=e=>Number.parseInt(e.toString(),10),Go=e=>{const{row:t,col:o}=e.toCoords();return Ro.map[t][o].elements.filter((e=>e.team!==(null==Wo?void 0:Wo.asset.name))).some(wt)};let Wo,Zo;de.on(Vt,(async e=>{function t(t){return function(e,t,o,i,n){return Nt(e,t,o,i,n).path.length>0}(new it(Yo(e.start.row),Yo(e.start.col)).toCube(),new it(Yo(t.position.row),Yo(t.position.col)).toCube(),Ho,Go,e.asset.movement.points)}Zo&&await me(lo),Io(e.asset)&&(Wo=Object.assign(Object.assign({},e),{inReach:Ro.map.reduce(((e,o)=>[...e,...o.filter(t).map((e=>e.position))]),[])}),await me(qt,e))})),de.on(Xt,(()=>{Wo=void 0})),de.on(Ft,(async e=>{var t,o;if(!Wo)return;const i=new it(Yo(Wo.start.row),Yo(Wo.start.col)).toCube(),n=new it(Yo(e.row),Yo(e.col)).toCube(),r=Nt(i,n,Ho,Go,Wo.asset.movement.points).path;let s=e;Go(n)&&(s=null!==(o=null===(t=[...r].pop())||void 0===t?void 0:t.toCoords())&&void 0!==o?o:Wo.start),await me(Vt,Object.assign(Object.assign({},Wo),{trail:r,end:s}))})),de.on(Jt,(async e=>{var t,o;if(!Wo)return;if((null!==(o=null===(t=Wo.trail)||void 0===t?void 0:t.length)&&void 0!==o?o:0)<1)return;const{start:i,asset:n}=Wo;if(!Io(n))return;if(void 0===n.actions&&console.error("asset.actions undefined",n),!Do(n))return;if(ot(Wo.start,e))return void me(Xt);n.actions.current-=1;const r=[...Ro.map[i.row][i.col].elements];Ro.map[i.row][i.col].elements=[],r.forEach((t=>{t.id!==n.id?Ro.map[i.row][i.col].elements.push(Object.assign(Object.assign({},t),{row:i.row,col:i.col})):Ro.map[e.row][e.col].elements.push(Object.assign(Object.assign({},t),{row:e.row,col:e.col}))})),await me(Kt,{row:i.row,col:i.col,elements:[...Ro.map[i.row][i.col].elements]}),await me(Kt,{row:e.row,col:e.col,elements:[...Ro.map[e.row][e.col].elements]}),await me(Xt),await me(It,{asset:n,location:e}),await me(Wt)})),de.on(ro,(async e=>{Io(e.asset)&&(Wo&&await me(Xt),Zo=Object.assign(Object.assign({},e),{range:new it(e.start.row,e.start.col).toCube().range(1).map((e=>e.toPosition().toCoords()))}),me(so,Zo))})),de.on(ao,(async e=>{if(!Zo||!Io(Zo.asset))return;if(ot(Zo.start,e))return void me(lo);const{row:t,col:o}=e,{asset:i}=Zo,n=[...Ro.map[t][o].elements].filter((e=>bt(e)&&e.team!==i.team));Do(i)&&n.length>0&&(i.actions.current-=1,await me(co,{location:e,attacker:[i],defender:[...n]})),me(Gt,Ao(Ro,i.team)),me(lo),await me(Wt)})),de.on(lo,(()=>Zo=void 0)),de.on(It,(async({asset:e,location:t})=>{if(!Io(e))return;const{row:o,col:i}=t,n=[...Ro.map[o][i].elements].filter((t=>t.id!==e.id));for(const{building:o,hormone:i}of[{building:$i,hormone:vo},{building:Si,hormone:mo},{building:Ti,hormone:go}]){const r=n.filter((t=>t.name===o&&t.team!==e.team));if(r.length>0&&bt(e)){const o={asset:r[0],transfered:{from:r[0].team,to:e.team},location:t,by:e,team:e.team};await me(i,o)}}me(Gt,Ao(Ro,e.team)),await me(Wt)})),[vo,mo,go].forEach((e=>{de.on(e,(({location:e,team:t,asset:o})=>{if(!Io({team:t}))return;const{row:i,col:n}=e,r=[...Ro.map[i][n].elements];Ro.map[i][n].elements=[],r.forEach((e=>{e.id!==o.id?Ro.map[i][n].elements.push(e):Ro.map[i][n].elements.push(Object.assign(Object.assign({},e),{team:t}))})),me(Gt,Ao(Ro,t)),me(_o,{team:t})}))})),de.on(co,(e=>{me(fo,e)})),de.on(uo,(e=>{if(!Io(e.attacker.asset))return;const t=dt(e.attacker.dices);me(ho,{attacker:e.attacker.asset,defender:e.defender,damage:t,location:e.location})})),de.on(ho,(e=>{const{defender:t,damage:o,attacker:i}=e,n=Object.assign(Object.assign({},i),{health:Object.assign(Object.assign({},i.health),{current:o<0?i.health.current+o:i.health.current})}),r=Object.assign(Object.assign({},t),{health:Object.assign(Object.assign({},t.health),{current:o>0?t.health.current-o:t.health.current})}),{row:s,col:a}=e.location,l=[...Ro.map[s][a].elements];Ro.map[s][a].elements=[],l.forEach((e=>{e.id===r.id?r.health.current>0&&Ro.map[s][a].elements.push(r):e.id===n.id?n.health.current>0&&Ro.map[s][a].elements.push(n):Ro.map[s][a].elements.push(e)})),me(Kt,{row:s,col:a,elements:[...Ro.map[s][a].elements]}),me(fo,void 0),me(po,{attacker:[i],defender:[t],defender_after:[r],attacker_after:[n],location:e.location,result:o})})),window.location.hash.indexOf("log")>=0&&ie(te.INFO),window.location.hash.indexOf("trace")>=0&&ie(te.TRACE);const Ko=a`
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
`,Vo=a`
.inactive {
    opacity: 0.8;
    filter: grayscale(100%);
}`,qo=a`
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
`,Xo=e=>a`
     ${e} {
        scrollbar-color:  #888 #f1f1f1;
        scrollbar-width: thin;
     }
`;ke("button-image",(e=>{const t=e.height?`height:${e.height};`:"";return R`<button style="${t}; background-image: url('${e.src}'), url('/assets/sidebar/btn_1.png')">
        <slot></slot>
    </button>`}),{styles:a`
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
    `,defaults:{src:"",height:""}}),ke("button-pure",(()=>R`<button>
        <slot></slot>
    </button>`),{styles:a`
    
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
    `});const Fo=a`
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
`,Jo=a`
    header {
        position: relative;
        height: 2rem;
    }
    #close {
        position: absolute;
        right: 12px;
        font-size: 2rem;
    }
`,Qo=(e,t)=>{e.dispatchEvent(new CustomEvent(t))};ke("modal-window",(e=>e.open?R`
    <div id="background" @click="${()=>e.preventClose&&Qo(e,"close")}"></div>
    <div id="modal">
        <header>
            ${e.preventClose?R``:R`<button-pure id="close" @click="${()=>Qo(e,"close")}"><text-block size="large">X</text-block></button-pure>`}
            <slot name="header"></slot>
        </header>
        <div>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
    `:R``),{styles:[Fo,Jo],defaults:{open:!1,preventClose:!1}}),ke("modal-container",(e=>{const{getState:t,publish:o}=Fe(e,!1);return R`
        <button-pure @click="${()=>o(!0)}"><slot></slot></button-pure>
        <modal-window .open=${t()} @close=${()=>o(!1)}>
            <slot slot="header" name="header"></slot>
            <slot name="body"></slot>
            <slot slot="footer" name="footer"></slot>
        </modal-window>
    `}));ke("text-block",(({size:e,type:t})=>R`<span class="${e} ${t}"><slot></slot></span>`),{styles:[a`
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
`,a`
    .inline {
        display: inline;
    }
    .paragraph {
        display: block;
    }
`],defaults:{size:"medium",type:"inline"}});const ei=e=>"object"==typeof e&&null!==e,ti=(e,t=1)=>{const o=[];let i="";for(let n=0;n<e.length;n++){const r=e[n];if(";"===r)o.push(i.trim()),i="";else if("@"===r&&""===i.trim()){const{node:i,endIndex:r}=oi(e.substr(n),t+1);o.push(i),n+=r}else if("&"===r&&""===i.trim()){const{node:i,endIndex:r}=oi(e.substr(n),t+1);o.push(i),n+=r}else{if("}"===r)return""!==i.trim()&&o.push(i.trim()),{val:o,endIndex:n-1};i+=r}}return{val:o,endIndex:e.length-1}},oi=(e,t=0)=>{const o={};let i="STATE_KEY",n="STATE_KEY",r="",s=0;for(let l=0;l<e.length;l++){const c=e[l];if("}"===c&&t>0)return{node:o,endIndex:l};if("NODE_AT_GROUP_VALUE"===i||"}"!==c)switch("/"===c&&"*"===e[l+1]&&(n=i,i="COMMENT_START",l+=2),i){case"COMMENT_START":"*"===c&&"/"===e[l+1]&&(i=n,l+=2,s=l);break;case"STATE_KEY":if(""===r.trim()&&"@"===c.trim())i="NODE_AT_GROUP_KEY",r+=c.trim();else if("{"===c)i="STATE_VALUE",r=r.trim(),o[r]=o[r]||[];else{if(":"===c&&" "===e[l+1]){l=s;const{val:o,endIndex:i}=ti(e.substr(l),t+1);return{node:o,endIndex:l+i}}r+=c}break;case"STATE_VALUE":const{val:d,endIndex:u}=ti(e.substr(l),t+1);l+=u,o[r]=[...o[r],...d],i="STATE_KEY",r="",s=l;break;case"NODE_AT_GROUP_KEY":";"===c?(o[r]=void 0,r="",s=l,i="STATE_KEY"):"{"===c?(r=r.trim(),a(oi(e.substr(l+1),t+1)),i="NODE_AT_GROUP_VALUE"):r+=c;break;case"NODE_AT_GROUP_VALUE":if(""===c.trim())break;"}"!==c?a(oi(e.substr(l),t+1)):(r="",s=l,i="STATE_KEY")}function a(e){o[r.trim()]=[...o[r]||[],...Array.isArray(e.node)?e.node:[e.node]],l+=e.endIndex+1}}return{node:o,endIndex:e.length}};function ii(e){return((e,t="")=>{const o={},i=(e,t="")=>(t=t.indexOf(",")>-1&&0!==t.indexOf(":is")?`:is(${t})`:t,Object.entries(e).map((([e,n])=>0===(e=(e=e.replace(/\@nest/gi,"")).replace(/\&/gi,t)).indexOf("@media")?(o[e]=o[e]||"",o[e]+=n?n.filter(ei).reduce(((e,o)=>e+`${i(o,t)} `),""):null,""):0===e.indexOf("@")?` ${e} { ${n.filter((e=>!ei(e))).join(";")}${n.filter(ei).map((t=>i(t,e))).join(" ")} }`:n?`${e} { ${n.filter((e=>!ei(e))).join(";")} } ${n.filter(ei).map((t=>i(t,e))).join(" ")}`:`${e.trim()};`)).join("").trim());return i(e,t)+Object.entries(o).reduce(((e,[t,o])=>e+(o?`${t} { ${o.trimEnd()} }`:`${t};`))," ").trimEnd()})(oi(e).node)}const ni=(e,...t)=>a`${s(function(e,...t){let o=e[0];for(let i=0;i<t.length;i++)o+=t[i]+e[i+1];return console.log(ii(o)),ii(o)}(e,...t))}`;ke("loading-bar",(({width:e})=>R`
    <div class="progress-bar">
        <span class="bar">
            ${"0%"===e.trim()||0===e.trim().indexOf("-")?R`<span></span>`:R`<span class="progress" style="width: ${e};"></span>`}
        </span>
    </div>
    `),{styles:[ni`    
.progress-bar {
    border-radius: 60px;
    overflow: hidden;
    width: 100%;
    & .bar {
        background: rgba(0,0,0,0.075);
        & span {
            padding: 5px;
        }
        & .progress {
            background: #75b800;
            color: #fff;
            width: 0;
            transition: width 1s ease-in-out;
        }
    }
}

span {
    display: block;
}
`],defaults:{width:"100%"}});ke("dice-roll",(({result:e})=>R`<div id="cube">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3">${e}</div>
        <div id="side4"></div>
        <div id="side5"></div>
        <div id="side6"></div>
    </div>`),{styles:ni`
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
    & > div {
        position: absolute;
        transition: all 0.5s ease-in-out;
        width: 112px;
        height: 112px;
        float: left;
        overflow: hidden;
        background-color:white;
	    border:1px solid black;
        
        line-height: 112px;
        text-align: center;
        font-size: 5rem;
    }
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
#side1 {
  transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
}
#side2 {
    transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
}
#side3 {
    transform: translateX(0px) translateY(0px) translateZ(56px);
    color:white;
    animation: reveal 5s 1;
    animation-fill-mode: forwards;
}
#side4 {
    transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
}
#side5 {
    transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
}
#side6 {
    transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
}
`,props:[{result:{type:Number}}]});const ri="player-knight";var si=ke(ri,(e=>{const{get:t,set:o}=Fe(e,"");return fe(e,wo,o),R`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('/assets/knight_${e.team}.png'"></div>`}),{styles:[Ko,Vo,a`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),ai=Object.freeze({__proto__:null,name:ri,default:si});const li="player-wagon";var ci=ke(li,(e=>{const{getState:t,publish:o}=Fe(e,"");return fe(e,wo,o),R`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('/assets/wagon_${e.team}.png'"></div>`}),{styles:[Ko,Vo,a`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),di=Object.freeze({__proto__:null,name:li,default:ci});ke("dice-selector",(e=>{var t;return R`${null===(t=e.dices)||void 0===t?void 0:t.map((t=>R`<div>
        <input type="radio" 
            @click=${()=>e.dispatchEvent(new CustomEvent("select",{detail:t}))}
            id="${t.name}" 
            name="dice" 
            value="${t.name}">
        <label for="${t.name}">
            <strong>${t.name}</strong> - ${t.story}
            <div class="sides" style="grid-template-columns: 1fr ${t.sides.map((()=>"1fr")).join(" ")};">
                <h5>Würfelergebnisse</h5>
                ${t.sides.map((e=>R`<div class="side">${e.value}</div>`))}
            </div>
        </label>
    </div>`))}`}),{styles:a`
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
const ui=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class hi extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=N,e.type!==ui)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||null==e)return this.ft=void 0,this.it=e;if(e===H)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}hi.directiveName="unsafeHTML",hi.resultType=1;const vi=(e=>(...t)=>({_$litDirective$:e,values:t}))(hi);async function mi(e){for(const t of e)await t()}const gi=(e,t)=>{var o,i;return[...null!==(o=t.none)&&void 0!==o?o:[],...null!==(i=t[e])&&void 0!==i?i:[]]};ke("sprite-set",(e=>{const{getState:t,publish:o}=Fe(e,void 0),{getState:i,publish:n}=Fe(e,void 0);return fe(e,Kt,(t=>e.row.toString()===(null==t?void 0:t.row.toString())&&e.col.toString()===(null==t?void 0:t.col.toString())),o),fe(e,wo,n),t()&&mi(gi(i(),e.triggers)).then((()=>me(Dt,{item:"hexagon",row:e.row,col:e.col}))),Xe(e,(()=>{e.addEventListener("click",(async()=>{mi(gi(i(),e.triggers))}))})),R`<slot></slot>`}),{defaults:{row:0,col:0,triggers:{}}}),ke("sprite-player-elements-grid",(()=>R`<slot></slot>`),{styles:a`
    slot {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
    }
    `});const fi=(o,i,n)=>{const r={},s=null==o?void 0:o.map((o=>{var s,a,l,c;const d=Object.entries(Object.assign(Object.assign({},t),e)).find((([e,t])=>t.name===o.name)),u=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([e,t])=>void 0!==t)).map((([e,t])=>`${e}="${t}"`)).join(" "),h=null!==(s=o.team)&&void 0!==s?s:"none";return r[h]=null!==(a=r[h])&&void 0!==a?a:[],r[h].push((()=>{var e;return me(Dt,{item:null!==(e=null==d?void 0:d[1].name)&&void 0!==e?e:"",row:i,col:n,payload:Object.assign({},o)})})),R`${vi(`<${null!==(l=null==d?void 0:d[1].name)&&void 0!==l?l:"span"} ${u}></${null!==(c=null==d?void 0:d[1].name)&&void 0!==c?c:"span"}>`)}`}));return R`<sprite-set .triggers=${r} col="${n}" row="${i}">${s}</sprite-set>`};ke("fighter-info",(({player:e,row:t,col:o})=>R`<div class="sprite ${(null==e?void 0:e.health.current)<1?"dead":"alive"}">
            ${fi(e?[e]:[],t,o)}
        </div>
        <div class="info">
            <h3>Gesundheit</h3>
            <loading-bar width="${(null==e?void 0:e.health.current)/(null==e?void 0:e.health.max)*100}%"></loading-bar>
            <p>${null==e?void 0:e.health.current} von ${null==e?void 0:e.health.max}</p>
        </div>`),{styles:[a`
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
        `],props:[{player:{type:Object},row:{type:Number},col:{type:Number}}]});const pi=ni`
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
  &:hover {
    background: var(--colorFocus);
  }
}`,bi=ni`
    .inactive {
        opacity: 0.8;
        cursor: not-allowed;
    }
    .active {
      &.start, &,trail, &.end {
        filter: brightness(1.5);
      }
    }
    .unreachable {
        cursor: not-allowed;
        filter: saturate(0) hue-rotate(217deg);
    }
    .inactive.unreachable {
      opacity: 0.1;
    }
`,wi=(e,t,o)=>`${function(e,t){var o,i,n;return t?ot(t.start,e)?"active start":t.end&&(null!==(i=null===(o=t.trail)||void 0===o?void 0:o.length)&&void 0!==i?i:0)<1&&ot(t.end,e)?"active unreachable":t.end&&ot(t.end,e)?"active end":t.trail&&t.trail.some((t=>ot(t,e)))?"active trail":(null===(n=t.inReach)||void 0===n?void 0:n.some((t=>ot(t,e))))?"inactive":"inactive unreachable":""}(e,t)} ${function(e,t){return t?ot(t.start,e)?"active start":t.end&&ot(t.end,e)?"active end":t.range&&t.range.some((t=>ot(t,e)))?"active trail":"inactive":""}(e,o)}`,yi=(e,t,o)=>{t&&t.end&&ot(t.end,e)?function(e,t){t&&me(Jt,e)}(e,t):o&&function(e,t){t&&me(ao,e)}(e,o)};ke("hexagon-element",(e=>{var t,o,i;Xe(e,(()=>{e.addEventListener("click",(()=>me(Dt,{item:"hexagon",row:e.row,col:e.col})))}));const{row:n,col:r}=e,{get:s,set:a}=Fe(e,{elements:e.elements,row:n,col:r}),{get:l,set:c}=Fe(e,void 0),{get:d,set:u}=Fe(e,void 0);fe(e,Kt,(e=>(null==e?void 0:e.row.toString())===n.toString()&&(null==e?void 0:e.col.toString())===r.toString()),a),fe(e,qt,c),fe(e,so,u),fe(e,Jt,(()=>c(void 0))),fe(e,Xt,(()=>c(void 0))),fe(e,lo,(()=>u(void 0)));const h=s();return R`<div 
      class="hexagon ${wi(e,l(),d())}" 
      @mouseover=${()=>{l()&&me(Ft,{row:n,col:r})}}
      @click=${()=>(yi(e,l(),d()),document.dispatchEvent(new CustomEvent("hello-world",{detail:{hello:"world"}})))}
      style="background-image:url(/assets/${null===(t=e.background)||void 0===t?void 0:t.file}.png); background-position: ${null===(o=e.background)||void 0===o?void 0:o.x}px ${null===(i=e.background)||void 0===i?void 0:i.y}px;">
      ${fi(h.elements,e.row,e.col)}</div>`}),{styles:[pi,bi],defaults:{background:void 0,elements:[],col:0,row:0}}),ke("world-map",(e=>{var t;const{get:o,set:i}=Fe(e,void 0);return fe(e,Et,i),R`<div id="globe">${null===(t=o())||void 0===t?void 0:t.map.map(((e,t)=>R`<div class="row ${t%2==0?"push":""}" style="width: calc(${120*e.length}px + 20rem)">
                ${e.map(((e,o)=>R`<hexagon-element 
                        .background=${e.terrain.sprite} 
                        .elements="${e.elements}" 
                        row="${t}" col="${o}">
                    </hexagon-element>`))}
            </div>
            `))}</div>`}),{styles:a`
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
    }`});const $i="building-mill";var ki=ke($i,(({team:e})=>R`<div style="background-image:url('/assets/windmill_complete_${null!=e?e:"none"}.png'"></div>`),{styles:[Ko,a`
        div {
            width: 80%;
            height: 80%;
        }
        `],defaults:{team:void 0}}),xi=Object.freeze({__proto__:null,name:$i,default:ki});const Oi="building-castle-small";var ji=ke(Oi,(e=>{const{get:t,set:o}=Fe(e,"");return fe(e,wo,o),R`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('/assets/castle_small_${e.team}.png'"></div>`}),{styles:[Ko,Vo,a`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),_i=Object.freeze({__proto__:null,name:Oi,default:ji});const Si="lumberjack-small";var Ei=ke(Si,(e=>{const{get:t,set:o}=Fe(e,"");return fe(e,wo,o),R`<div class="${t()===e.team?"active":"inactive"}" style="margin: 0; background-image:url('/assets/lumberjack_small_${e.team}.png'); background-size: auto; width: 100%; height: 100%;"></div>`}),{styles:[Ko,Vo,a`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),Ai=Object.freeze({__proto__:null,name:Si,default:Ei});const Ti="mine-small";var Mi=ke(Ti,(e=>{const{get:t,set:o}=Fe(e,"");return fe(e,wo,o),R`<div class="${t()===e.team?"active":"inactive"}" style="margin: 0; background-image:url('/assets/mine_small_${e.team}.png'); background-size: auto; width: 100%; height: 100%;"></div>`}),{styles:[Ko,Vo,a`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),Ci=Object.freeze({__proto__:null,name:Ti,default:Mi});const zi={hay:0,iron:0,grain:0,wood:0,stone:0};var Ri=Mo,Hi=Eo,Ni=()=>Object.assign(Object.assign({},zi),{stone:4,wood:2,grain:1}),Ui=()=>Object.assign(Object.assign({},zi),{wood:500,grain:500,stone:500}),Bi=()=>Object.assign(Object.assign({},zi),{stone:1e3,iron:1e3,grain:1e3});const Pi=a`
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
  `;ke("health-bar",(({health:{current:e,max:t}})=>R`<loading-bar id="health" width="${e/t*100}%"></loading-bar>`));const Di=e=>parseInt(e.toString(),10),Ii=ni`
  header {
    display: grid;
    grid-template-areas: 
        "castle castle health health health"
        "castle castle stats stats stats"
        "castle castle attack none none";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    
    & #castle {
      grid-area: castle;
      position: relative;
      width: 4em;
      height: 4em;
    }
    & #health {
      grid-area: health;
    }
    & #stats {
      grid-area: stats;
    }
  }
  h3 {
    text-align: center;
    margin-top: 0;
  }
  resource-counter {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 0.7rem;
    
    &.enough {
      color: var(--colorMain);
    }
    &.lack {
      color: var(--colorHighlight);
    }
  }
`;console.log(Ii);const Li=(e,t)=>R`
    ${t.hay>0?R`<resource-counter
          count="${t.hay}"
          class="${e.hay>=t.hay?"enough":"lack"}"
        >
          <resource-hay></resource-hay>
        </resource-counter>`:R``}
    ${t.grain>0?R`<resource-counter
          count="${t.grain}"
          class="${e.grain>=t.grain?"enough":"lack"}"
        >
          <resource-grain></resource-grain>
        </resource-counter>`:R``}
    ${t.wood>0?R`<resource-counter
          count="${t.wood}"
          class="${e.wood>=t.wood?"enough":"lack"}"
        >
          <resource-wood></resource-wood>
        </resource-counter>`:R``}
    ${t.stone>0?R`<resource-counter
          count="${t.stone}"
          class="${e.stone>=t.stone?"enough":"lack"}"
        >
          <resource-stone></resource-stone>
        </resource-counter>`:R``}
    ${t.iron>0?R`<resource-counter
          count="${t.iron}"
          class="${e.iron>=t.iron?"enough":"lack"}"
        >
          <resource-iron></resource-iron>
        </resource-counter>`:R``}
  `;ke("sidebar-castle",(e=>{var t;const{selected:{payload:o,row:i,col:n}}=e,{team:r,health:s,actions:a}=o,l={row:Di(i),col:Di(n)},{get:c,set:d}=Fe(e,void 0);fe(e,Bt,d);const{resources:u}=null!==(t=c())&&void 0!==t?t:{resources:{}};return R`
      <header>
        <building-castle-small id="castle" team="${r}"></building-castle-small>
        <health-bar id="health" .health="${s}"></health-bar>
        <stats-bar id="stats" .health="${s}" .actions="${a}"></stats-bar>
        <button-attack id="attack" .actions="${a}" .asset="${o}" .position="${l}"></button-attack>
      </header>
      <h3>${lt(at.castle.build)}</h3>
      <div class="container">
        <button-image
          height="35px"
          src="/assets/knight_${r}.png"
          title="${lt(at.properties.actions.build.knight)}"
          @click=${async()=>await me(Lt,{team:r,row:i,col:n})}
        >
          ${Li(u,Hi())}
        </button-image>
        <button-image
          height="35px"
          src="/assets/wagon_${r}.png"
          title="${lt(at.properties.actions.build.wagon)}"
          @click=${async()=>await me(Yt,{team:r,row:i,col:n})}
        >
          ${Li(u,Ri())}
        </button-image>
        <button-image height="35px" 
          title="${lt(at.properties.actions.build.iron)}"
          src="/assets/resources/iron.png">
          ${Li(u,Ni())}
        </button-image>
        <button-image height="35px" 
          title="${lt(at.properties.actions.build.castle_medium)}"
          src="/assets/castle_medium_${r}.png">
          ${Li(u,Ui())}
        </button-image>
        <button-image height="35px" 
          title="${lt(at.properties.actions.build.castle_large)}"
          src="/assets/castle_large_${r}.png">
          ${Li(u,Bi())}
        </button-image>
      </div>`}),{styles:[Pi,Ii],defaults:{selected:{payload:{id:"",name:Oi,team:"",health:{current:0,max:0},actions:{current:0,max:0}},col:0,row:0}}});ke("sidebar-knight",(e=>{const{selected:{payload:t,row:o,col:i}}=e,{health:n,actions:r}=t,s={row:Di(o),col:Di(i)};return R`
    <h3>${lt(at.knight)}</h3>
    <div class="container">
        <img id="knight" src="/assets/knight_${t.team}.png">
        <health-bar id="health" .health="${n}"></health-bar>
        <stats-bar id="stats" .health="${n}" .actions="${r}"></stats-bar>
        <button ?disabled=${r.current<1} id="move" title="${lt(at.properties.actions.move)}" @click=${()=>me(Vt,{asset:Object.assign({},t),start:s})}>🦵</button>
        <button-attack id="attack" .actions="${r}" .asset="${t}" .position="${s}"></button-attack>
        <button ?disabled=${r.current<1} id="fortify" title="${lt(at.properties.actions.fortify)}" >🏰</button>
    </div>`}),{styles:[Pi,a`
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
`],props:[{selected:{type:Object}}]});const Yi=a`
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
    #build_mine {
        grid-area: build_2;
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
`;de.on(eo,((...e)=>console.log("BuildLumberjackSmallSuccess",...e))),de.on(to,console.error),de.on(Qt,((...e)=>console.log("BuildLumberjackSmall",...e))),ke("sidebar-wagon",(e=>{const{selected:{payload:t,row:o,col:i}}=e,{health:n,actions:r}=t,s={row:Di(o),col:Di(i)};return R`
    <h3>${lt(at.wagon)}</h3>
    <div class="container">
        <img id="wagon" src="/assets/wagon_${t.team}.png">
        <health-bar id="health" .health="${n}"></health-bar>
        <stats-bar id="stats" .health="${n}" .actions="${r}"></stats-bar>
        <button ?disabled=${r.current<1} id="move"  title="${lt(at.properties.actions.move)}" @click=${()=>me(Vt,{asset:Object.assign({},t),start:s})}>🦵</button>
        <button ?disabled=${r.current<1} id="build_lumberjack" title="${lt(at.properties.actions.build.lumberjack_small)}" @click=${()=>me(Qt,{asset:Object.assign({},t),position:s})}>
            <img id="build_lumberjack_small" src="/assets/lumberjack_small_${t.team}.png">
        </button>
        <button ?disabled=${r.current<1} id="build_mine" title="${lt(at.properties.actions.build.mine_small)}" @click=${()=>me(oo,{asset:Object.assign({},t),position:s})}>
            <img id="build_mine_small" src="/assets/mine_small_${t.team}.png">
        </button>
        <button ?disabled=${r.current<1} id="load"  title="${lt(at.properties.actions.load)}">📦</button>
    </div>`}),{styles:[Yi],props:[{selected:{type:Object}}]}),ke("stats-bar",(({health:e,actions:t})=>R`${vi(lt(at.properties.life,e.current,e.max))}<br>
    ${vi(lt(at.properties.actions,t.current,t.max))}`)),ke("button-attack",(({actions:e,asset:t,position:o})=>R`<button ?disabled=${e.current<1} id="attack" title="${lt(at.properties.actions.attack)}" @click=${()=>me(ro,{asset:Object.assign({},t),start:o})}>⚔</button>
    `));const Gi=e=>({position:e?new it(null==e?void 0:e.row,null==e?void 0:e.col):void 0,elements:e?[{item:e.item,payload:e.payload}]:[],dirty:!1});ke("controls-sidebar",(async e=>{const{get:t,set:o}=Fe(e,void 0);fe(e,Dt,o);const i=t(),{get:n,set:r}=Fe(e,Gi(i)),s=n();return!s.dirty&&i&&new it(i.row,i.col).equals(s.position)?r(Object.assign(Object.assign({},s),{elements:[...s.elements,{item:i.item,payload:i.payload}],dirty:"hexagon"===i.item})):r(Gi(i)),Xe(e,(()=>{setTimeout((()=>{me(Tt)}),1)})),R`
        ${n().elements.map((e=>{var t,o,i,r,s,a;switch(e.item){case Oi:return R`<sidebar-castle 
                        .selected="${{row:null===(t=n().position)||void 0===t?void 0:t.row,col:null===(o=n().position)||void 0===o?void 0:o.col,payload:e.payload}}">
                    </sidebar-castle>`;case ri:return R`<sidebar-knight
                        .selected="${{row:null===(i=n().position)||void 0===i?void 0:i.row,col:null===(r=n().position)||void 0===r?void 0:r.col,payload:e.payload}}">
                    </sidebar-knight>`;case li:return R`<sidebar-wagon
                        .selected="${{row:null===(s=n().position)||void 0===s?void 0:s.row,col:null===(a=n().position)||void 0===a?void 0:a.col,payload:e.payload}}">
                    </sidebar-wagon>`;default:case Oi:return R``}}))}
    `}),{styles:a`:host { 
        position: absolute;
        display: block;
        min-width: 200px;
        width: 20%;
        right: 20px;
        top: 20px;
        z-index: 2;
    }`}),ke("modal-battle",(e=>{var t,o;const{get:i,set:n}=Fe(e,void 0),{get:r,set:s}=Fe(e,void 0);return fe(e,fo,n),R`
   <modal-window 
        .open=${!!i()} 
        preventClose>
        <h1 slot="header">Kampf beginnt!</h1>
        <div class="body">
        ${null===(t=i())||void 0===t?void 0:t.attacker.map((e=>{const t=e;return R`
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
                `}))}${null===(o=i())||void 0===o?void 0:o.defender.map((e=>R`
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
            <button @click="${()=>{var e,t;return me(uo,{attacker:{asset:null===(e=i())||void 0===e?void 0:e.attacker[0],dices:[r()]},defender:null===(t=i())||void 0===t?void 0:t.defender[0],location:{row:i().location.row,col:i().location.col}})}}" ?disabled="${void 0===r()}">Würfeln</button>
        </p>
    </modal-window>`}),{styles:[ni`.body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            & > * {
                display: block;
            }
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
            & .current {
                background-image: url('/assets/knight/health.png');
                background-size: contain;
                background-repeat: no-repeat;
                height: 15px;
            }
        }
        `]}),ke("modal-dice-result",(e=>{const{get:t,set:o}=Fe(e,void 0),i=Fe(e,[]),n=Fe(e,[]);let r=setTimeout((()=>{}),1);return fe(e,po,(e=>{o(e),i.set(e.attacker),n.set(e.defender),clearTimeout(r),r=setTimeout((()=>{i.set(e.attacker_after),n.set(e.defender_after)}),5e3)})),R`
   <modal-window 
        .open=${!!t()} 
        @close=${()=>o(void 0)}>
        <h1 slot="header">Gewürfelt!</h1>
        <div class="body">
        ${i.get().map((e=>{var o,i,n,r;return R`
                    <div class="attacker">
                        <fighter-info 
                            .player=${e} 
                            row="${null!==(i=null===(o=t())||void 0===o?void 0:o.location.row)&&void 0!==i?i:0}" 
                            col="${null!==(r=null===(n=t())||void 0===n?void 0:n.location.col)&&void 0!==r?r:0}">
                        </fighter-info>
                    </div>
                `}))}${n.get().map((e=>{var o,i,n,r;return R`
                    <div class="defender">
                        <fighter-info 
                            .player=${e} 
                            row="${null!==(i=null===(o=t())||void 0===o?void 0:o.location.row)&&void 0!==i?i:0}" 
                            col="${null!==(r=null===(n=t())||void 0===n?void 0:n.location.col)&&void 0!==r?r:0}">
                        </fighter-info>
                    </div>
                `}))}
        ${t()?R`<dice-roll class="dice" result="${t().result}"></dice-roll>`:R``}
        </div>

        <p slot="footer">
        </p>
    </modal-window>`}),{styles:[a`
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
        `]}),ke("modal-mill-taken",(e=>{var t,o,i,n,r;const{get:s,set:a}=Fe(e,void 0);return fe(e,vo,a),R`
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
                <building-mill .team="${null===(n=s())||void 0===n?void 0:n.transfered.to}" class="after"></building-mill>
                <building-mill .team="${null===(r=s())||void 0===r?void 0:r.transfered.from}" class="before"></building-mill>
            </div>
         </div>
         <p slot="footer">
         </p>
     </modal-window>`}),{styles:a`
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
    `}),ke("modal-no-more-turns",(e=>{const{getState:t,publish:o}=Fe(e,void 0);return fe(e,Zt,o),R`
   <modal-window 
        .open=${!!t()} 
        preventClose>
        <h1 slot="header">Keine Aktionen übrig.</h1>
        <div class="body">
            Du hast keine Aktionen mehr übrig. Willst du weiter geben, oder noch rum schauen?
        </div>
        <p slot="footer">
            <button @click="${()=>(me(yo),o(!1))}">Zug beenden</button>
            <button @click="${()=>o(!1)}">Noch rumschauen</button>
        </p>
    </modal-window>`}),{styles:[a`
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
        `]}),ke("modals-all",(()=>R`
    <modal-no-more-turns></modal-no-more-turns>
    <modal-battle></modal-battle>
    <modal-dice-result></modal-dice-result>
    <modal-mill-taken></modal-mill-taken>`)),ke("footer-element",(o=>{const{get:i,set:n}=Fe(o,void 0),{get:r,set:s}=Fe(o,[]);return fe(o,wo,n),fe(o,Gt,s),R`<footer class="${i()}">
    <div class="main ">
        ${((o,i="")=>{const n=null==o?void 0:o.map((o=>{var n,r;const s=Object.entries(Object.assign(Object.assign({},t),e)).find((([e,t])=>t.name===o.name)),a=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([e,t])=>void 0!==t)).map((([e,t])=>`${e}="${t}"`)).join(" "),l=ft(o)?{row:o.row,col:o.col}:{row:0,col:0};return R`<div
            @click="${()=>{me(Pt,Object.assign(Object.assign({item:o.name},l),{payload:o})),setTimeout((()=>{var e;null===(e=To(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            @mouseover="${()=>{setTimeout((()=>{var e;null===(e=To(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            style="position:relative; cursor: pointer; width: 120px;${i};">
                ${vi(`<${null!==(n=null==s?void 0:s[1].name)&&void 0!==n?n:"span"} ${a} style="${i};"></${null!==(r=null==s?void 0:s[1].name)&&void 0!==r?r:"span"}>`)}
        </div>`}));return R`<sprite-player-elements-grid>${n}</sprite-player-elements-grid>`})(r().sort(((e,t)=>e.name.localeCompare(t.name))).filter((e=>pt(e)&&e.actions.current>0)),"width: 10vh; height: 10vh;")}
    </div>
    <div class="action">
        <button-pure @click="${()=>me(yo)}">
            <text-block type="paragraph" size="x-large">⌛</text-block> Zug beenden
        </button-pure>
    </div>
</footer>`}),{styles:[qo,Xo(a`footer .main`),a`
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
    }`]});const Wi=a`
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
`;var Zi;ke("resource-grain",(()=>R`<div title="${lt(st.grain)}"></div>`),{styles:[a`
        :host {
          background-image: url("/assets/resources/grain.png");
        }
      `,Wi]}),ke("resource-stone",(()=>R`<div title="${lt(st.stone)}"></div>`),{styles:[a`
        :host {
          background-image: url("/assets/resources/stone.png");
        }
      `,Wi]}),ke("resource-iron",(()=>R`<div title="${lt(st.iron)}"></div>`),{styles:[a`
        :host {
          background-image: url("/assets/resources/iron.png");
        }
      `,Wi]}),ke("resource-wood",(()=>R`<div title="${lt(st.log)}"></div>`),{styles:[a`
        :host {
          background-image: url("/assets/resources/log.png");
        }
      `,Wi]}),ke("resource-hay",(()=>R`<div title="${lt(st.hay)}"></div>`),{styles:[a`
        :host {
          background-image: url("/assets/resources/hay.png");
        }
      `,Wi]}),ke("resource-counter",(({count:e,collect:t})=>R`
        <slot></slot>
        ${e} ${t?R`<span>(+${t})</span>`:""}
    `),{styles:[a`
        :host {
            font-size: 4vh;
        }
        span {
            font-size: smaller;
        }
        `],defaults:{count:0,collect:void 0}}),ke("header-element",(e=>{var t,o,i,n,r,s,a,l;const{get:c,set:d}=Fe(e,void 0),{get:u,set:h}=Fe(e,void 0),{get:v,set:m}=Fe(e,void 0);fe(e,wo,d),fe(e,Bt,h),fe(e,So,m);const g=null!==(t=u())&&void 0!==t?t:{resources:{}},f=(e,t,o)=>(e[t]=(e[t]||0)+o,e),p=null!==(i=null===(o=v())||void 0===o?void 0:o.resourcesToGenerate.reduce(((e,t)=>{var o,i;for(const n of mt)e=f(e,n,null!==(i=null===(o=t.resources[n])||void 0===o?void 0:o.generatedResource)&&void 0!==i?i:0);return e}),{}))&&void 0!==i?i:{};return R`<header class="${c()}">
        <resource-counter title="${lt(st.hay)}" count="${g.resources.hay}" collect=${null!==(n=p.hay)&&void 0!==n?n:0}>
            <resource-hay></resource-hay>
        </resource-counter>
        <resource-counter title="${lt(st.grain)}" count="${g.resources.grain}" collect=${null!==(r=p.grain)&&void 0!==r?r:0}>
            <resource-grain></resource-grain>
        </resource-counter>
        <resource-counter title="${lt(st.stone)}" count="${g.resources.stone}" collect=${null!==(s=p.stone)&&void 0!==s?s:0}>
            <resource-stone></resource-stone>
        </resource-counter>
        <resource-counter title="${lt(st.iron)}" count="${g.resources.iron}" collect=${null!==(a=p.iron)&&void 0!==a?a:0}>
            <resource-iron></resource-iron>
        </resource-counter>
        <resource-counter title="${lt(st.log)}" count="${g.resources.wood}" collect=${null!==(l=p.wood)&&void 0!==l?l:0}>
            <resource-wood></resource-wood>
        </resource-counter>
    </header>`}),{styles:ni`
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
    }`}),null===(Zi=document.querySelector("body"))||void 0===Zi||Zi.addEventListener("keyup",(function(e){"Escape"===e.key&&me(Ut,!0)})),ke("the-mill",(()=>((async({rows:e,cols:t})=>{const o=Mt({rows:e,cols:t}),i=Ct("green",{rows:e,cols:t}),n=Ct("red",{rows:e,cols:t}),r=Je(0,e-1).map((e=>Je(0,t-1).map((t=>({position:new it(e,t),terrain:St(),elements:[...zt(o,e,t),...zt(i,e,t),...zt(n,e,t)]})))));await me(Et,{map:r,teams:["red","green"]})})({rows:10,cols:10}),R`
    <controls-sidebar>sidebar</controls-sidebar>
    <map>
        <header-element>header</header-element>
        <world-map></world-map>
        <footer-element>
        </footer-element>
        <modals-all></modals-all>
    </map>

    `)),{styles:[qo,Xo(a`world-map`),Xo(a`controls-sidebar`),a`
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
    `]});const Ki=window.location.search.substring(1).split("&").reduce(((e,t)=>{const[o,i]=t.split("=");return e[o]=i,e}),{});document.documentElement.lang=Ki.lang||"en";export{t as buildings,ai as knight,e as player,di as wagon};
//# sourceMappingURL=the-mill.js.map
