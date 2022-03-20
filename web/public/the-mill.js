var t=Object.freeze({__proto__:null,get knight(){return Ho},get wagon(){return Po}}),e=Object.freeze({__proto__:null,get mill(){return Ko},get castleSmall(){return tr}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=i.get(this.cssText);return o&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1]),t[0]);return new n(o,r)},a=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new n("string"==typeof t?t:t+"",r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window.trustedTypes,d=c?c.emptyScript:"",u=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:v};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const r=this._$Eh(o,e);void 0!==r&&(this._$Eu.set(r,o),t.push(r))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,o,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),r=window.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=g){var r,i;const n=this.constructor._$Eh(t,o);if(void 0!==n&&!0===o.reflect){const s=(null!==(i=null===(r=o.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:h.toAttribute)(e,o.type);this._$Ei=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(t,e){var o,r,i;const n=this.constructor,s=n._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=n.getPropertyOptions(s),a=t.converter,l=null!==(i=null!==(r=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==i?i:h.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let r=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:p}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.1");const f=globalThis.trustedTypes,b=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,y="?"+w,$=`<${y}>`,k=document,x=(t="")=>k.createComment(t),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,M=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,C=/"/g,z=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),R=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),U=new WeakMap,N=k.createTreeWalker(k,129,null,!1);class P{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,n=0;const s=t.length-1,a=this.parts,[l,c]=((t,e)=>{const o=t.length-1,r=[];let i,n=2===e?"<svg>":"",s=_;for(let e=0;e<o;e++){const o=t[e];let a,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,l=s.exec(o),null!==l);)d=s.lastIndex,s===_?"!--"===l[1]?s=S:void 0!==l[1]?s=M:void 0!==l[2]?(z.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=E):void 0!==l[3]&&(s=E):s===E?">"===l[0]?(s=null!=i?i:_,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?E:'"'===l[3]?C:A):s===C||s===A?s=E:s===S||s===M?s=_:(s=E,i=void 0);const u=s===E&&t[e+1].startsWith("/>")?" ":"";n+=s===_?o+$:c>=0?(r.push(a),o.slice(0,c)+"$lit$"+o.slice(c)+w+u):o+w+(-2===c?(r.push(void 0),e):u)}const a=n+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,r]})(t,e);if(this.el=P.createElement(l,o),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=N.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const o=c[n++];if(t.push(e),void 0!==o){const t=r.getAttribute(o.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?q:"@"===e[1]?I:L})}else a.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(z.test(r.tagName)){const t=r.textContent.split(w),e=t.length-1;if(e>0){r.textContent=f?f.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],x()),N.nextNode(),a.push({type:2,index:++i});r.append(t[e],x())}}}else if(8===r.nodeType)if(r.data===y)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(w,t+1));)a.push({type:7,index:i}),t+=w.length-1}i++}}static createElement(t,e){const o=k.createElement("template");return o.innerHTML=t,o}}function D(t,e,o=t,r){var i,n,s,a;if(e===R)return e;let l=void 0!==r?null===(i=o._$Cl)||void 0===i?void 0:i[r]:o._$Cu;const c=O(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,r)),void 0!==r?(null!==(s=(a=o)._$Cl)&&void 0!==s?s:a._$Cl=[])[r]=l:o._$Cu=l),void 0!==l&&(e=D(t,l._$AS(t,e.values),l,r)),e}class Z{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(o,!0);N.currentNode=i;let n=N.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Y(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new B(n,this,t)),this.v.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(n=N.nextNode(),s++)}return i}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Y{constructor(t,e,o,r){var i;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cg=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),O(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==R&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return j(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==H&&O(this._$AH)?this._$AA.nextSibling.data=t:this.k(k.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=P.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(o);else{const t=new Z(i,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new P(t)),e}S(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new Y(this.A(x()),this.A(x()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class L{constructor(t,e,o,r,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,r){const i=this.strings;let n=!1;if(void 0===i)t=D(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const r=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=D(this,r[o+s],e,s),a===R&&(a=this._$AH[s]),n||(n=!O(a)||a!==this._$AH[s]),a===H?t=H:t!==H&&(t+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}n&&!r&&this.C(t)}C(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends L{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===H?void 0:t}}const X=f?f.emptyScript:"";class q extends L{constructor(){super(...arguments),this.type=4}C(t){t&&t!==H?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class I extends L{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=D(this,t,e,0))&&void 0!==o?o:H)===R)return;const r=this._$AH,i=t===H&&r!==H||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==H&&(r===H||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class B{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const F=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,J;null==F||F(P,Y),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.2.1");class K extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var r,i;const n=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:e;let s=n._$litPart$;if(void 0===s){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;n._$litPart$=s=new Y(e.insertBefore(x(),t),t,void 0,null!=o?o:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return R}}K.finalized=!0,K._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:K});const V=globalThis.litElementPolyfillSupport;null==V||V({LitElement:K}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");const Q={};var tt;!function(t){t[t.SILENT=0]="SILENT",t[t.ERROR=1]="ERROR",t[t.INFO=80]="INFO",t[t.DEBUG=90]="DEBUG",t[t.TRACE=100]="TRACE"}(tt||(tt={}));let et=tt.SILENT;const ot=t=>et=t;let rt=[];const it=(t,e,...o)=>{rt.forEach((r=>r(tt.ERROR,t,e,...o))),et>=tt.ERROR&&console.error(e,t,...o)},nt=(t,e,...o)=>{rt.forEach((r=>r(tt.INFO,t,e,...o))),et>=tt.INFO&&(et===tt.TRACE?console.trace:console.log)(e,t,...o)},st=(t,e,...o)=>{rt.forEach((r=>r(tt.DEBUG,t,e,...o))),et>=tt.DEBUG&&(et===tt.TRACE?console.trace:console.log)(e,t,...o)},at={queue:{},list:{}};function lt(t){return t.reduce(((t,e)=>`${t};${e.name};`),"")}const ct=new class{constructor(){this.actionDictionary={}}on(t,e){if(Array.isArray(t)){const o=lt(t);if(at.list[o])throw it("Hypothalamus.on",new Error("Cannot register the same list of hormones twice"),o),new Error("Cannot register the same list of hormones twice");nt("[Hypothalamus.on] Adding new action when all in a list of hormones are released",o,t),at.list[o]={hormones:[...t],callback:e}}else nt("Hypothalamus.on","Adding new action when a hormone is released",t.name),this.actionDictionary[t.name]=this.actionDictionary[t.name]||[],this.actionDictionary[t.name].push(e)}drop(t){Array.isArray(t)?(st("Hypothalamus.drop","Dropping a list of hormones",lt(t),t),delete at.queue[lt(t)],delete at.list[lt(t)]):(st("Hypothalamus.drop","Dropping a hormone",t.name),this.actionDictionary[t.name]=[])}dropAll(){st("Hypothalamus.dropAll","Dropping all hormones"),this.actionDictionary={},at.queue={},at.list={}}collect(t,e,o){const r=`collect;;${t.name};${e.name};`;if(at.list[r])throw it("Hypothalamus.collect",new Error("Cannot register the same list of hormones twice"),r),new Error("Cannot register the same list of hormones twice");nt("[Hypothalamus.collect] Adding new action when collected hormones are released",r,t,e),at.list[r]={hormones:[e],callback:o}}orchestrate(t,e){this.actionDictionary[t.name]&&this.actionDictionary[t.name].forEach((t=>t(e)));const o=Object.keys(at.queue).filter((e=>e.includes(`;${t.name};`))),r=Object.keys(at.list).filter((e=>e.indexOf(`;${t.name};`)>-1&&o.every((t=>t!==e))));r.forEach((t=>{at.queue[t]={hormones:[...at.list[t].hormones],values:{},callback:at.list[t].callback}}));const i=[...new Set([...o,...r])];for(let o=0;o<i.length;o++){const r=i[o];if(r.startsWith("collect;;")){const[o]=r.replace("collect;;","").split(";");t.name===o?at.queue[r].values[t.name]=[...at.queue[r].values[t.name]||[],e]:(at.queue[r].values[t.name]=e,at.queue[r].callback(at.queue[r].values),delete at.queue[r])}else at.queue[r].hormones=at.queue[r].hormones.filter((e=>e.name!==t.name)),at.queue[r].values[t.name]=e,at.queue[r].hormones.length<1&&(at.queue[r].callback(at.queue[r].values),delete at.queue[r])}}};function dt(t,e={}){return ut(t,Object.assign(Object.assign({},e),{readOnce:!0}))}function ut(t,e={}){return ht(Q)(t,e)}const ht=t=>(e,o={})=>{if(t[e]&&!o.loadIfExists)throw it("hormone.defineHormone",new Error("Hormone already created"),e),new Error("Hormone already created");if(t[e]&&o.loadIfExists)return st("hormone.defineHormone","Hormone already created, reusing existing",e),{name:e};const{defaultValue:r,transformation:i,readOnce:n}=o;return t[e]={name:e,value:r,defaultValue:r,transformation:i,receptors:[],readOnce:null!=n&&n},{name:e}};async function vt(t,e){return gt(Q)(t,e)}const gt=t=>async(e,o)=>{if(!e)throw it("hormone.releaseHormone",new Error("Hormone cannot be undefined")),new Error("Hormone cannot be undefined");const{name:r}=e;if(!t[r])throw it("hormone.releaseHormone",new Error("Hormone does not exist"),r),new Error("Hormone does not exist");var i;i=o,t[r].value=(void 0===i||i instanceof Function)&&o?o(t[r].value):o,nt("hormone.releaseHormone","Releasing passed hormone",r,t[r].value);const{receptors:n,transformation:s}=t[r];s&&s(t[r].value);const a=t[r].value;return ct.orchestrate({name:r},a),await Promise.all(n.filter((t=>{const e=void 0===t.onlyIf||t.onlyIf(a);return st("hormone.releaseHormone",e?"Keeping receptor because condition matched or no condition":"Filtered receptor from the triggers because condition not matched",t),e})).map((t=>(null==t?void 0:t.onTriggered)?null==t?void 0:t.onTriggered(a):a))),t[r].readOnce&&(st("hormone.releaseHormone","Resetting hormone because it is readOnce",r),t[r].value=t[r].defaultValue),Object.assign({},t[r])};function pt(t,{name:e},o,r){return mt(Q)(t,{name:e},o,r)}const mt=t=>(e,{name:o},r,i)=>{const n=null!=i?i:r,s=i?r:void 0;if(!t[o])throw it("receptor.useReceptor",new Error("Hormone is not defined"),o),new Error(`Hormone "${o}" is not defined`);((t,e,o,r)=>{const i=(null==r?void 0:r.toString())||o;return!t[o].receptors.some((t=>t.parent===e&&t.key===i))})(t,e,o,s)?(nt("receptor.useReceptor","Pushing new receptor to hormone",o,{parent:e}),t[o].receptors.push({key:(null==s?void 0:s.toString())||o,parent:e,onlyIf:s,onTriggered:n}),void 0!==t[o].value?n(t[o].value):void 0!==t[o].defaultValue&&n(t[o].defaultValue)):((t,e,...o)=>{rt.forEach((r=>r(tt.TRACE,t,e,...o))),et===tt.TRACE&&console.trace(e,t,...o)})("receptor.useReceptor","Receptor not pushed because already subscribed",o,{parent:e})};function ft(t,[e,o]){return e.toLowerCase()!==e?t[e]=Object.assign(Object.assign({},o),{attribute:e.replace(/[A-Z]/g,"-$&").toLowerCase()}):t[e]=o,t}function bt(t){return"boolean"==typeof t?{type:Boolean}:Array.isArray(t)?{type:Array}:"object"==typeof t?{type:Object}:{}}const wt=t=>(t=>void 0!==t&&void 0!==t.props)(t)?(t.props||[]).reduce(((t,e)=>(Object.entries(e).forEach((e=>t=ft(t,e))),t)),{}):(t=>{return e=t||{},Object.entries(e).reduce(((t,[e,o])=>ft(t,[e,bt(o)])),{});var e})(null==t?void 0:t.defaults),yt={},$t=(t,e,o)=>{if(yt[t])return yt[t];customElements.define(t,class extends K{constructor(){super(),this.content=T``,(t=>void 0!==t&&void 0!==t.defaults)(o)&&Object.entries(o.defaults).forEach((([t,e])=>{this[t]=e}))}static get properties(){return wt(o)}static get styles(){return null==o?void 0:o.styles}async performUpdate(){return this.content=await Promise.resolve(e(this)).catch((t=>T`<slot name="error">${t}</slot>`)),super.performUpdate()}render(){return this.content}});const r=document.createElement(t);return yt[t]=r,r};var kt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},xt={},Ot={},jt={};Object.defineProperty(jt,"t",{value:!0}),jt.shallowClone=void 0,jt.shallowClone=function(t){return"object"!=typeof t||!t||t instanceof Date||t instanceof RegExp?t:Array.isArray(t)?[...t]:Object.assign({},t)};var _t={};function St(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}Object.defineProperty(_t,"t",{value:!0}),_t.withWorkflow=_t.withReducer=_t.withState=_t.decorate=_t.asUpdateableLitElement=void 0,_t.asUpdateableLitElement=St;const Mt="__registered_states";function Et(t){const e=t;if(e[Mt])return e;const o=St(t),r=o.updated;return e[Mt]={index:0,count:0,states:[],reducers:[],workflows:[]},o.updated=t=>(e[Mt].index=0,r(t)),e}_t.decorate=Et,_t.withState=function(t,e,o={}){const r=Et(t),{index:i,count:n}=r[Mt];return i===n?(r[Mt].index++,r[Mt].count++,r[Mt].states.push(e),e):(r[Mt].index++,o.updateDefault&&r[Mt].states[i].inject(e.get()),r[Mt].states[i])},_t.withReducer=function(t,e){const o=Et(t),{index:r,count:i,reducers:n}=o[Mt];return r!==i||n[r-1]?o[Mt].reducers[r-1]:(o[Mt].reducers[r-1]=e,e)},_t.withWorkflow=function(t,e){const o=Et(t),{index:r,count:i,workflows:n}=o[Mt];return r!==i||n[r-1]?o[Mt].workflows[r-1]:(o[Mt].workflows[r-1]=e,e)};var At=kt&&kt.o||function(t,e,o,r){return new(o||(o=Promise))((function(i,n){function s(t){try{l(r.next(t))}catch(t){n(t)}}function a(t){try{l(r.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))};Object.defineProperty(Ot,"t",{value:!0}),Ot.useState=void 0;const Ct=jt,zt=_t;Ot.useState=(t,e,o={})=>{let r=(0,Ct.shallowClone)(e);const i=[()=>At(void 0,void 0,void 0,(function*(){return t.requestUpdate(),yield t.updateComplete}))],n=t=>At(void 0,void 0,void 0,(function*(){r!==t&&(r=(0,Ct.shallowClone)(t),yield Promise.all(i.map((t=>t(r)))))}));return(0,zt.withState)(t,new class{set value(t){n(t)}get value(){return r}publish(t){n(t)}set(t){return At(this,void 0,void 0,(function*(){yield n(t)}))}subscribe(t){i.push(t)}inject(t){r=t}get(){return r}getState(){return r}},o)};var Tt={},Rt=kt&&kt.o||function(t,e,o,r){return new(o||(o=Promise))((function(i,n){function s(t){try{l(r.next(t))}catch(t){n(t)}}function a(t){try{l(r.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))};Object.defineProperty(Tt,"t",{value:!0}),Tt.useReducer=void 0;const Ht=Ot,Ut=_t;Tt.useReducer=(t,e,o,r={})=>{const{get:i,set:n}=(0,Ht.useState)(t,o,r),s=[],a=(o,a)=>Rt(void 0,void 0,void 0,(function*(){const l=e(i());return l[o]&&(yield n(yield l[o](a)),s.forEach((t=>t(o,i()))),r.dispatchEvent&&t.dispatchEvent(new CustomEvent(o,{detail:i()}))),i()}));return(0,Ut.withReducer)(t,{get:i,subscribe:t=>s.push(t),when:(t,e)=>s.push(((o,r)=>o===t&&e(r))),set:a,dispatch:a})};var Nt={},Pt=kt&&kt.o||function(t,e,o,r){return new(o||(o=Promise))((function(i,n){function s(t){try{l(r.next(t))}catch(t){n(t)}}function a(t){try{l(r.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))};Object.defineProperty(Nt,"t",{value:!0}),Nt.useWorkflow=void 0;const Dt=xt,Zt=_t;Nt.useWorkflow=(t,e)=>{const o=Object.entries(e).reduce(((e,[o,{reducer:r,initialState:i}])=>(e[o]=(0,Dt.useReducer)(t,r,i),e)),{}),r={},i={},n=[],s=t=>(n.push({type:"projections",args:[t]}),o[t]?o[t].get():void 0);return(0,Zt.withWorkflow)(t,{addActivity:(t,e)=>Pt(void 0,void 0,void 0,(function*(){var i,s;n.push({type:"addActivity",args:[t,e]}),yield Promise.all(null!==(s=null===(i=r[t])||void 0===i?void 0:i.map((t=>t(e))))&&void 0!==s?s:[]);for(const r of Object.values(o))yield r.dispatch(t,e)})),addSideeffect:(t,e)=>{n.push({type:"addSideeffect",args:[t,e]}),r[t]=[...r[t]||[],e]},projections:s,addCompensation:(t,e)=>{n.push({type:"addCompensation",args:[t,e]}),i[t]=[...i[t]||[],e]},compensate:()=>Pt(void 0,void 0,void 0,(function*(){n.push({type:"compensate",args:[]});for(const[t,e]of Object.entries(i))for(const r of e)for(const e of Object.values(o))yield e.dispatch(t,r)})),after:(t,e,o)=>{n.push({type:"after",args:[t,e,o]});const r=()=>Pt(void 0,void 0,void 0,(function*(){n.some((t=>((t,e)=>{if(t.type!==e.type)return!1;for(let o=0;o<e.args.length;o++)if(t.args[o]!==e.args[o])return!1;return!0})(t,e)))||(new Date(Date.now())>t?yield o():setTimeout(r,100))}));r()},plan:t=>Pt(void 0,void 0,void 0,(function*(){for(const[o,r]of Object.entries(t))if(e[o]&&JSON.stringify(s(o))===JSON.stringify(e[o].initialState))return yield r();return t[""]?yield t[""]():Promise.resolve(null)})),history:()=>[...n]})},function(t){Object.defineProperty(t,"t",{value:!0}),t.useWorkflow=t.useReducer=t.useState=void 0;var e=Ot;Object.defineProperty(t,"useState",{enumerable:!0,get:function(){return e.useState}});var o=Tt;Object.defineProperty(t,"useReducer",{enumerable:!0,get:function(){return o.useReducer}});var r=Nt;Object.defineProperty(t,"useWorkflow",{enumerable:!0,get:function(){return r.useWorkflow}})}(xt);var Yt={},Lt={},Wt={};function Xt(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}Object.defineProperty(Wt,"t",{value:!0}),Wt.withEffect=Wt.decorate=Wt.asUpdateableLitElement=void 0,Wt.asUpdateableLitElement=Xt;const qt="__registered_effects";function It(t){const e=t;if(e[qt])return e;const o=Xt(t),r=o.updated;return e[qt]={index:0,count:0,effects:[]},o.updated=t=>(e[qt].index=0,r(t)),e}Wt.decorate=It,Wt.withEffect=function(t,e){const o=It(t),{index:r,count:i}=o[qt];return r===i?(o[qt].index++,o[qt].count++,o[qt].effects.push(e),e):(o[qt].index++,o[qt].effects[r])},Object.defineProperty(Lt,"t",{value:!0}),Lt.useOnce=Lt.useEffect=void 0;const Bt=Wt;function Ft(t,e,o){const r=(0,Bt.withEffect)(t,{on:e,observe:["__initial__dirty"]});r.observe.some(((t,e)=>o[e]!==t))&&r.on(),r.observe=o}Lt.useEffect=Ft,Lt.useOnce=(t,e)=>Ft(t,e,[]),function(t){Object.defineProperty(t,"t",{value:!0}),t.useOnce=t.useEffect=void 0;var e=Lt;Object.defineProperty(t,"useEffect",{enumerable:!0,get:function(){return e.useEffect}}),Object.defineProperty(t,"useOnce",{enumerable:!0,get:function(){return e.useOnce}})}(Yt);var Gt=Yt.useOnce,Jt=xt.useState;function Kt(t,e){return Array.from({length:e-t+1},((t,e)=>e))}class Vt{constructor(t,e,o,r=1){this.x=t,this.y=e,this.z=o,this.costs=r}equals(t){return null!==t&&this.x===t.x&&this.y===t.y&&this.z===t.z}add(t){const{x:e,y:o,z:r}=this;return new Vt(e+t.x,o+t.y,r+t.z)}remove(t){const{x:e,y:o,z:r}=this;return new Vt(e-t.x,o-t.y,r-t.z)}vector(t){return new Vt(t.x-this.x,t.y-this.y,t.z-this.z)}distance(t){return Math.max(Math.abs(this.x-t.x),Math.abs(this.y-t.y),Math.abs(this.z-t.z))}heuristic(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}range(t){const e=[];for(let o=-t;o<=t;o++)for(let r=Math.max(-t,-o-t);r<=Math.min(t,-o+t);r++)e.push(this.add(new Vt(o,r,-o-r)));return e}direction(t){return Qt[t]}directionTo(t){const e=Kt(0,5).find((e=>this.neighbor(e).equals(t)));return void 0!==e&&e>=0?this.direction(e):null}neighbor(t){return this.add(this.direction(t))}neighbors(t){return Kt(0,5).map((t=>this.neighbor(t))).filter((e=>t.some((t=>t.equals(e)))))}ring(t){const e=[],o=-1*t;for(const r of Kt(o,t))for(const i of Kt(Math.max(o,-1*r-o),Math.min(t,-1*r+t))){const t=-r-i;e.push(this.add(new Vt(r,i,t)))}return e}cost(){return this.costs}toPosition(){const t=this.x+(this.z+(1&this.z))/2,e=this.z;return new oe(e,t)}toCoords(){return this.toPosition().toCoords()}toString(){return`${this.x}:${this.y}:${this.z}`}}const Qt=[new Vt(1,-1,0),new Vt(1,0,-1),new Vt(0,1,-1),new Vt(-1,1,0),new Vt(-1,0,1),new Vt(0,-1,1)];const te={manhattan:[{row:0,col:-1},{row:1,col:0},{row:0,col:1},{row:-1,col:0}],euclid:[{row:1,col:-1},{row:-1,col:1},{row:1,col:0},{row:0,col:1},{row:-1,col:0},{row:0,col:-1},{row:-1,col:-1},{row:1,col:1}]},ee=(t,e)=>t.col.toString()===e.col.toString()&&t.row.toString()===e.row.toString();class oe{constructor(t,e,o="manhattan"){this.row=t,this.col=e,this.system=o}vector(t){return new oe(t.row-this.row,t.col-this.col)}toCube(){const t=this.col-(this.row+(1&this.row))/2,e=this.row;return new Vt(t,-t-e,e)}toCoords(){const{row:t,col:e}=this;return{col:e,row:t}}neighbor(t){const e=re(te[this.system][t]);return e.system=this.system,this.add(e)}neighbors(){return Kt(0,te[this.system].length-1).map((t=>this.neighbor(t)))}distance(t){return function(t,e){return Math.sqrt(Math.pow(e.col-t.col,2)+Math.pow(e.row-t.row,2))}(this,t)}manhattanDistance(t){return function(t,e){return Math.abs(Math.abs(t.col-e.col)+Math.abs(t.row-e.row))}(this,t)}add(t){const{col:e,row:o}=this;return new oe(o+t.row,e+t.col,this.system)}remove(t){const{col:e,row:o}=this;return new oe(o-t.row,e-t.col,this.system)}equals(t){return null!=t&&t.col.toString()===this.col.toString()&&t.row.toString()===this.row.toString()}toString(){return`${this.col}:${this.row}`}toEuclidPosition(){return new oe(this.row,this.col,"euclid")}toManhattanPosition(){return new oe(this.row,this.col,"manhattan")}static fromString(t){if(!t)return null;const[e,o]=t.split(":").map((t=>parseInt(t,10)));return new oe(o,e)}}const re=({row:t,col:e})=>new oe(t,e);function ie(){var t=(new Date).getTime(),e=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(o){var r=16*Math.random();return t>0?(r=(t+r)%16|0,t=Math.floor(t/16)):(r=(e+r)%16|0,e=Math.floor(e/16)),("x"===o?r:3&r|8).toString(16)}))}const ne={id:"building-castle-small",name:"Small Castle",occurences:{min:1},resources:{grain:{generatedResource:10},hay:{generatedResource:10},stone:{generatedResource:10},iron:{generatedResource:10}}},se={green:t=>Math.max(.75*t.length,Math.round(Math.random()*(t.length-1))),red:t=>Math.min(.25*t.length,Math.round(Math.random()*(t.length-1)))};
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
function ae(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(o[r[i]]=t[r[i]])}return o}const le=["hay","grain","iron","wood","stone"];function ce(t){var e;return void 0!==t&&void 0!==(null===(e=t)||void 0===e?void 0:e.resources)}function de(t){var e,o;return void 0!==t&&(null===(e=t)||void 0===e?void 0:e.row)>=0&&(null===(o=t)||void 0===o?void 0:o.col)>=0}function ue(t){var e,o;return t&&(null===(o=null===(e=t)||void 0===e?void 0:e.actions)||void 0===o?void 0:o.max)>0}function he(t){var e,o;return t&&(null===(o=null===(e=t)||void 0===e?void 0:e.dices)||void 0===o?void 0:o.length)>0}const ve={id:"building-mill",name:"Mill",occurences:{min:1},resources:{grain:{hay:100,generatedResource:50},hay:{generatedResource:50}}};function ge(t){return void 0!==t&&t.max>0}const pe=[Object.assign(Object.assign({},ve),{min:0,max:2}),Object.assign(Object.assign({},ve),{min:8,max:10})],me=({min:t,max:e},o,r)=>{const i=t=>o*r*(t/10);return Math.floor(Math.random()*(i(e)-i(t))+i(t))},fe=(...t)=>t.reduce(((t,e)=>(t.push(...Object.entries(e.resources).map((t=>{var[o,r]=t,{generatedResource:i}=r,n=ae(r,["generatedResource"]);let s={};s[o]=Object.assign(Object.assign({},n),{generatedResource:i});return Object.assign(Object.assign({},e),{resources:s})}))),t)),[]).filter(Boolean),be={gras:{sprite:{file:"hexagonTerrain_sheet",x:414,y:1906},movementCosts:1,defense:0},desert:{sprite:{file:"hexagonTerrain_sheet",x:902,y:627},movementCosts:4,defense:0},mud:{sprite:{file:"hexagonTerrain_sheet",x:658,y:912},movementCosts:4,defense:1},muddyHills:{sprite:{file:"hexagonTerrain_sheet",x:780,y:627},movementCosts:8,defense:3},forest:{sprite:{file:"hexagonTerrain_sheet",x:536,y:912},movementCosts:8,defense:3},mountain:{sprite:{file:"hexagonTerrain_sheet",x:414,y:1052},movementCosts:10,defense:9}},we=()=>{const t=Object.keys(be);return be[t[Math.floor(Math.random()*(t.length-1))]]},ye=ut("game/world/worldLoaded"),$e=ut("game/start"),ke=ut("game/load/sidebar"),xe=({rows:t,cols:e})=>(t=>{const e=new Array(t.rows*t.cols).map((()=>[]));return pe.forEach((o=>{var r;let i=o.occurences.factor?Math.max(o.occurences.min,e.length/o.occurences.factor):o.occurences.min;for(;i>0;){const s=ge(o)?me(o,t.rows,t.cols):(n=e.length,Math.round(Math.random()*(n-1)));e[s]=[...null!==(r=e[s])&&void 0!==r?r:[],Object.assign(Object.assign({},o),{name:o.id,id:ie()})],i--}var n})),e})({rows:t,cols:e}),Oe=(t,{rows:e,cols:o})=>((t,e)=>{const o=new Array(e.rows*e.cols).map((()=>[]));return[ne].forEach((e=>{var r;let i=e.occurences.factor?Math.max(e.occurences.min,o.length/e.occurences.factor):e.occurences.min;for(;i>0;){const n=se[t](o);o[n]=[...null!==(r=o[n])&&void 0!==r?r:[],{name:e.id,team:t,id:ie(),resources:e.resources}],i--}})),o})(t,{rows:e,cols:o}),je=(t,e,o)=>{var r;return(null!==(r=t.pop())&&void 0!==r?r:[]).map((t=>Object.assign(Object.assign({},t),{row:e,col:o})))};class _e{constructor(t=4086,e=Uint32Array){this.capacity=t,this.capacity=t,this._keys=[],this._priorities=new e(t+1),this.length=0}clear(){this.length=0}bubbleUp(t){const e=this._keys[t],o=this._priorities[t];for(;t>1;){const e=t>>>1;if(this._priorities[e]<=o)break;this._keys[t]=this._keys[e],this._priorities[t]=this._priorities[e],t=e}this._keys[t]=e,this._priorities[t]=o}bubbleDown(t){const e=this._keys[t],o=this._priorities[t],r=1+(this.length>>>1),i=this.length+1;for(;t<r;){const e=t<<1;if(e>=i)break;let r=this._priorities[e],n=this._keys[e],s=e;const a=e+1;if(a<i){const t=this._priorities[a];t<r&&(r=t,n=this._keys[a],s=a)}if(r>=o)break;this._keys[t]=n,this._priorities[t]=r,t=s}this._keys[t]=e,this._priorities[t]=o}push(t,e=0){if(this.length===this.capacity)throw new Error("Heap has reached capacity, can't push new items");const o=this.length+1;this._keys[o]=t,this._priorities[o]=e,this.bubbleUp(o),this.length++}pop(){const t=this._keys[1];return this.length--,this.length>0&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1)),t}peekPriority(){return this._priorities[1]}peek(){return this._keys[1]}toString(){if(0===this.length)return"(empty queue)";const t=Array(this.length-1);for(let e=0;e<this.length;e++)t[e]=this._priorities[e+1];return`[${t.join(" ")}]`}get[Symbol.toStringTag](){return"Heapify"}*[Symbol.iterator](){for(let t=0;t<this.length;t++){const e=this._priorities[t+1],o=this._keys[t+1];yield[o,e]}}*keys(){for(let t=0;t<this.length;t++)yield this._keys[t+1]}*priorities(){for(let t=0;t<this.length;t++)yield this._priorities[t+1]}}const Se=t=>t.toPosition().toString(),Me=dt("action/abort"),Ee=ut("player/update"),Ae=dt("player/request/select"),Ce=ut("player/buildings/item/selected"),ze=ut("player/item/moved"),Te=ut("player/knights/created"),Re=ut("player/wagon/created"),He=ut("player/assets/loaded"),Ue=ut("turn/player/actions/hasLeft"),Ne=dt("turn/player/actions/none"),Pe=dt("map/hexagon/updated",{readOnce:!0}),De=ut("modes/move/activate"),Ze=ut("modes/move/deactivate"),Ye=ut("modes/move/hovered-target"),Le=ut("modes/move/end"),We=ut("modes/battle/activate"),Xe=ut("modes/battle/active"),qe=ut("modes/battle/end"),Ie=ut("modes/battle/deactivate"),Be=ut("battle/started"),Fe=ut("battle/dice/thrown"),Ge=ut("battle/player/attacked"),Je=ut("mill/takeover"),Ke=ut("modal/battle/open"),Ve=ut("modal/dice-result/open"),Qe=ut("turn/world/started"),to=ut("turn/world/accepted"),eo=ut("turn/player/complete"),oo=ut("turn/world/complete"),ro=ut("resources/generated"),io=ut("resources/generation/complete"),no=ut("resources/summary"),so=ut("resources/distribute");function ao(t){return t.reduce(((t,e)=>t+function(t){return t.sides[Math.floor(Math.random()*t.sides.length)].value}(e)),0)}const lo=()=>({grain:100,iron:200,hay:0,wood:0,stone:0});function co(t,e){if(!t||!t.map)return[];const o=t=>e===t.team,r=[];for(const e of t.map)for(const t of e)r.push(...t.elements.filter(o));return r}function uo(t){var e,o,r,i,n;if(!t)return;return[...null!==(n=null===(i=null===(r=null===(o=null===(e=null===document||void 0===document?void 0:document.querySelector("the-mill"))||void 0===e?void 0:e.shadowRoot)||void 0===o?void 0:o.querySelector("world-map"))||void 0===r?void 0:r.shadowRoot)||void 0===i?void 0:i.querySelectorAll("hexagon-element"))&&void 0!==n?n:[]].find((e=>{var o,r;return null===(r=null===(o=e.shadowRoot)||void 0===o?void 0:o.querySelector("sprite-set"))||void 0===r?void 0:r.querySelector(`[id="${t.id}"]`)}))}document.deepQuerySelector=uo;const ho=()=>({grain:50,iron:0,hay:0,wood:50,stone:0});let vo,go={},po=[],mo=[],fo={};const bo=t=>Object.assign({},fo[t]),wo=()=>fo[vo],yo=t=>t.actions.current>0,$o=({team:t})=>t===vo;ct.on(ye,(t=>{po=[],t.map.forEach(((t,e)=>{t.forEach(((t,o)=>{const r=new oe(e,o).toCube();t.terrain.movementCosts&&(r.costs=t.terrain.movementCosts),po.push(r)}))})),go=t,["green","red"].forEach((t=>{fo[t]={resources:{hay:100,grain:200,iron:200,wood:100,stone:100}}})),vt($e)})),ct.on(Me,(async t=>{t&&(vt(Ze),vt(Ie))})),ct.on([$e,ke],(()=>{vt(Qe)})),ct.on(Qe,(()=>{mo=[...go.teams],vo=mo.pop(),vt(to,vo)})),ct.on(so,(async({team:t,resourcesToGenerate:e})=>{var o;if(null===(o=bo(t))||void 0===o?void 0:o.resources){const o=Object.assign({},bo(t).resources);fo[t].resources=function(t,e){let o=Object.assign({},t),r=[...e],i=!0;for(;i;)i=!1,r=r.map((t=>{let e=t;return Object.entries(t.resources).forEach((r=>{var[n,s]=r,{generatedResource:a}=s,l=ae(s,["generatedResource"]);Object.entries(l).every((([t,e])=>o[t]<=e))&&(i=!0,e=void 0,Object.entries(l).forEach((([t,e])=>{o[t]-=e})),o[n]+=a,vt(ro,t))})),e})).filter(Boolean);return o}(fo[t].resources,e),vt(io,{team:t,before:o,after:fo[t].resources})}})),ct.collect(ro,io,(t=>{var e;vt(no,null===(e=t[ro.name])||void 0===e?void 0:e.map((t=>({name:t.name,from:Object.values(t.resources).map((t=>{var e=ae(t,["generatedResource"]);return Object.assign({},e)})),to:Object.keys(t.resources)}))))})),ct.on(to,(async t=>{const e=co(go,t);await vt(He,e);const o=null==e?void 0:e.find((t=>t.name===Vo));de(o)&&vt(Ae,{item:Vo,row:o.row,col:o.col,payload:o}),setTimeout((()=>{var t;null===(t=uo(o))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2),vt(Ee,bo(t));const r=((t,e)=>{var o;return null===(o=null==t?void 0:t.map)||void 0===o?void 0:o.reduce(((t,o)=>[...t,...o.reduce(((t,o)=>[...t,...o.elements.filter(ce).filter((t=>t.team===e))]),[])]),[])})(go,t).reduce(((t,e)=>[...t,...fe(e)]),[]);await vt(so,{team:t,resourcesToGenerate:r})})),ct.on(Ae,(async t=>{await vt(Ce,Object.assign({},t)),await vt(Ce,Object.assign(Object.assign({},t),{item:"hexagon"}))})),ct.on(eo,(()=>{vo=mo.pop(),void 0===vo?vt(oo):vt(to,vo)})),ct.on(oo,(()=>{go.map.forEach((t=>{t.forEach((({elements:t})=>{((...t)=>{t.forEach((t=>{t.actions.current=t.actions.max}))})(...t.filter(ue))}))})),vt(Qe)}));const ko=(t,e)=>{const o=Object.assign({},fo[t].resources);for(const[t,r]of Object.entries(e)){if(o[t]<r)return!1;o[t]-=r}return fo[t].resources=o,!0};ct.on(Te,(({row:t,col:e,team:o})=>{if(!$o({team:o}))return;if(!ko(o,{grain:100,iron:200,hay:0,wood:0,stone:0}))return;const r=(({team:t,row:e,col:o})=>({id:ie(),name:To,team:t,row:e,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10},dices:[{name:"Standardwaffe",story:"Eine faire, ausgewogene Waffe die jeder Ritter haben sollte",sides:[{value:3},{value:3},{value:3},{value:4},{value:5},{value:6}]},{name:"Mächtiger Schlag des Betrugs",story:"Eine Waffe, die bis zu 12 Schaden verursachen kann, doch auch eine hohe Wahrscheinlichkeit hat gar keinen Schaden zu verursachen, oder sogar den Ritter selbst zu verletzen!",sides:[{value:-3},{value:0},{value:0},{value:6},{value:12}]}]}))({row:t,col:e,team:o});go.map[t][e].elements.push(r),vt(Pe,{row:t,col:e,elements:[...go.map[t][e].elements]}),vt(He,co(go,o)),vt(Ee,wo())})),ct.on(Re,(({row:t,col:e,team:o})=>{if(!$o({team:o}))return;if(!ko(o,{grain:50,iron:0,hay:0,wood:50,stone:0}))return;const r=(({team:t,row:e,col:o})=>({id:ie(),name:Uo,team:t,row:e,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10}}))({row:t,col:e,team:o});go.map[t][e].elements.push(r),vt(Pe,{row:t,col:e,elements:[...go.map[t][e].elements]}),vt(He,co(go,o)),vt(Ee,wo())})),ct.on(Ue,(()=>{void 0===((t,e)=>{for(const o of t.map)for(const t of o){const o=t.elements.filter((t=>he(t))).map((t=>t)).find((t=>t.team===e&&t.actions.current>0));if(o)return o}})(go,vo)&&vt(Ne,!0)}));const xo=t=>Number.parseInt(t.toString(),10);let Oo,jo;ct.on(De,(async t=>{jo&&await vt(Ie),$o(t.asset)&&(Oo=t)})),ct.on(Ze,(()=>{Oo=void 0})),ct.on(Ye,(async t=>{var e,o;if(!Oo)return;const r=new oe(xo(Oo.start.row),xo(Oo.start.col)).toCube(),i=new oe(xo(t.row),xo(t.col)).toCube(),n=t=>{const{row:e,col:o}=t.toCoords();return go.map[e][o].elements.filter((t=>t.team!==(null==Oo?void 0:Oo.asset.name))).some((t=>he(t)))},s=((t,e,o,r,i)=>{const n=new _e;n.push(t,0);const s={},a={},l=[];let c=!1;if(s[Se(t)]=Se(t),a[Se(t)]=0,t.equals(e))return{path:[]};if(r(e))return{path:[]};for(;n.length>0;){const t=n.pop();if(t.equals(e)){c=!0;break}if(n.length>1e3)throw new Error("No what kinda path are you searching for?!");l.push(t.toPosition().toString());for(const c of t.neighbors(o).filter((t=>!s[Se(t)])).map((t=>{var e;return null!==(e=o.find((e=>e.equals(t))))&&void 0!==e?e:t}))){if(r(c))continue;l.some((t=>t===Se(c)))||l.push(Se(c));const o=a[Se(t)]+c.cost();i<o||(!a[Se(c)]||o<a[Se(c)])&&(a[Se(c)]=o,n.push(c,o+e.heuristic(c)),s[Se(c)]=t.toPosition().toString())}}const d=t.toPosition();if(!c)return{path:[],visited:l};let u=e.toPosition();const h=[];do{h.push(u),u=oe.fromString(s[u.toString()])}while(null!==u&&!u.equals(d));return{path:h.reverse(),visited:l}})(r,i,po,n,Oo.asset.movement.points).path;let a=t;n(i)&&(a=null!==(o=null===(e=[...s].pop())||void 0===e?void 0:e.toCoords())&&void 0!==o?o:Oo.start),console.log("MoveModeTargetHovered",Object.assign(Object.assign({},Oo),{trail:s,end:a})),await vt(De,Object.assign(Object.assign({},Oo),{trail:s,end:a}))})),ct.on(Le,(async t=>{var e,o;if(!Oo)return;if((null!==(o=null===(e=Oo.trail)||void 0===e?void 0:e.length)&&void 0!==o?o:0)<1)return;const{start:r,asset:i}=Oo;if(!$o(i))return;if(void 0===i.actions&&console.error("asset.actions undefined",i),!yo(i))return;if(ee(Oo.start,t))return void vt(Ze);i.actions.current-=1;const n=[...go.map[r.row][r.col].elements];go.map[r.row][r.col].elements=[],n.forEach((e=>{e.id!==i.id?go.map[r.row][r.col].elements.push(Object.assign(Object.assign({},e),{row:r.row,col:r.col})):go.map[t.row][t.col].elements.push(Object.assign(Object.assign({},e),{row:t.row,col:t.col}))})),await vt(Pe,{row:r.row,col:r.col,elements:[...go.map[r.row][r.col].elements]}),await vt(Pe,{row:t.row,col:t.col,elements:[...go.map[t.row][t.col].elements]}),await vt(Ze),await vt(ze,{asset:i,location:t}),await vt(Ue)})),ct.on(We,(async t=>{$o(t.asset)&&(Oo&&await vt(Ze),jo=Object.assign(Object.assign({},t),{range:new oe(t.start.row,t.start.col).toCube().range(1).map((t=>t.toPosition().toCoords()))}),vt(Xe,jo))})),ct.on(qe,(async t=>{if(!jo||!$o(jo.asset))return;if(ee(jo.start,t))return void vt(Ie);const{row:e,col:o}=t,{asset:r}=jo,i=[...go.map[e][o].elements].filter((t=>he(t)&&t.team!==r.team));yo(r)&&i.length>0&&(r.actions.current-=1,await vt(Be,{location:t,attacker:[r],defender:[...i]})),vt(He,co(go,r.team)),vt(Ie),await vt(Ue)})),ct.on(Ie,(()=>jo=void 0)),ct.on(ze,(async({asset:t,location:e})=>{if(!$o(t))return;const{row:o,col:r}=e,i=[...go.map[o][r].elements].filter((e=>e.id!==t.id)).filter((e=>e.name===Go&&e.team!==t.team));if(i.length>0&&he(t)){const o={asset:i[0],transfered:{from:i[0].team,to:t.team},location:e,by:t,team:t.team};await vt(Je,o)}else vt(He,co(go,t.team)),await vt(Ue)})),ct.on(Je,(({location:t,team:e,asset:o})=>{if(!$o({team:e}))return;const{row:r,col:i}=t,n=[...go.map[r][i].elements];go.map[r][i].elements=[],n.forEach((t=>{t.id!==o.id?go.map[r][i].elements.push(t):go.map[r][i].elements.push(Object.assign(Object.assign({},t),{team:e}))})),vt(He,co(go,e))})),ct.on(Be,(t=>{vt(Ke,t)})),ct.on(Fe,(t=>{if(!$o(t.attacker.asset))return;const e=ao(t.attacker.dices);vt(Ge,{attacker:t.attacker.asset,defender:t.defender,damage:e,location:t.location})})),ct.on(Ge,(t=>{const{defender:e,damage:o,attacker:r}=t;o<0?r.health.current+=o:e.health.current-=o;const{row:i,col:n}=t.location,s=[...go.map[i][n].elements];go.map[i][n].elements=[],s.forEach((t=>{t.id===e.id?e.health.current>0&&go.map[i][n].elements.push(e):t.id===r.id?r.health.current>0&&go.map[i][n].elements.push(r):go.map[i][n].elements.push(t)})),vt(Pe,{row:i,col:n,elements:[...go.map[i][n].elements]}),vt(Ke,void 0),vt(Ve,{attacker:[r],defender:[e],location:t.location,result:o})})),window.location.hash.indexOf("log")>=0&&ot(tt.INFO),window.location.hash.indexOf("trace")>=0&&ot(tt.TRACE);const _o=s`
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
`,So=s`
.inactive {
    opacity: 0.8;
    filter: grayscale(100%);
}`,Mo=s`
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
`,Eo=t=>s`
     ${t} {
        scrollbar-color:  #888 #f1f1f1;
        scrollbar-width: thin;
     }
`;$t("button-image",(t=>{const e=t.height?`height:${t.height};`:"";return T`<button style="${e}; background-image: url('${t.src}'), url('/assets/sidebar/btn_1.png')">
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
    `,defaults:{src:"",height:""}}),$t("button-pure",(()=>T`<button>
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
    `});const Ao=s`
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
`,Co=s`
    header {
        position: relative;
        height: 2rem;
    }
    #close {
        position: absolute;
        right: 12px;
        font-size: 2rem;
    }
`,zo=(t,e)=>{t.dispatchEvent(new CustomEvent(e))};$t("modal-window",(t=>t.open?T`
    <div id="background" @click="${()=>t.preventClose&&zo(t,"close")}"></div>
    <div id="modal">
        <header>
            ${t.preventClose?T``:T`<button-pure id="close" @click="${()=>zo(t,"close")}"><text-block size="large">X</text-block></button-pure>`}
            <slot name="header"></slot>
        </header>
        <div>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
    `:T``),{styles:[Ao,Co],defaults:{open:!1,preventClose:!1}}),$t("modal-container",(t=>{const{getState:e,publish:o}=Jt(t,!1);return T`
        <button-pure @click="${()=>o(!0)}"><slot></slot></button-pure>
        <modal-window .open=${e()} @close=${()=>o(!1)}>
            <slot slot="header" name="header"></slot>
            <slot name="body"></slot>
            <slot slot="footer" name="footer"></slot>
        </modal-window>
    `}));$t("text-block",(({size:t,type:e})=>T`<span class="${t} ${e}"><slot></slot></span>`),{styles:[s`
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
`],defaults:{size:"medium",type:"inline"}});$t("loading-bar",(({width:t})=>T`
    <div class="progress-bar">
        <span class="bar">
            ${"0%"===t?T``:T`<span class="progress" style="width: ${t};"></span>`}
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
`],defaults:{width:"100%"}});$t("dice-roll",(({result:t})=>T`<div id="cube">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3">${t}</div>
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
`,props:[{result:{type:Number}}]});const To="player-knight";var Ro=$t(To,(t=>{const{getState:e,publish:o}=Jt(t,"");return pt(t,to,o),T`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/knight_${t.team}.png'"></div>`}),{styles:[_o,So,s`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),Ho=Object.freeze({__proto__:null,name:To,default:Ro});const Uo="player-wagon";var No=$t(Uo,(t=>{const{getState:e,publish:o}=Jt(t,"");return pt(t,to,o),T`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/wagon_${t.team}.png'"></div>`}),{styles:[_o,So,s`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),Po=Object.freeze({__proto__:null,name:Uo,default:No});$t("dice-selector",(t=>{var e;return T`${null===(e=t.dices)||void 0===e?void 0:e.map((e=>T`<div>
        <input type="radio" 
            @click=${()=>t.dispatchEvent(new CustomEvent("select",{detail:e}))}
            id="${e.name}" 
            name="dice" 
            value="${e.name}">
        <label for="${e.name}">
            <strong>${e.name}</strong> - ${e.story}
            <div class="sides" style="grid-template-columns: 1fr ${e.sides.map((()=>"1fr")).join(" ")};">
                <h5>Würfelergebnisse</h5>
                ${e.sides.map((t=>T`<div class="side">${t.value}</div>`))}
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
const Do=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Zo extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=H,t.type!==Do)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===H||null==t)return this.ft=void 0,this.it=t;if(t===R)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Zo.directiveName="unsafeHTML",Zo.resultType=1;const Yo=(t=>(...e)=>({_$litDirective$:t,values:e}))(Zo);async function Lo(t){for(const e of t)await e()}const Wo=(t,e)=>{var o,r;return[...null!==(o=e.none)&&void 0!==o?o:[],...null!==(r=e[t])&&void 0!==r?r:[]]};$t("sprite-set",(t=>{const{getState:e,publish:o}=Jt(t,void 0),{getState:r,publish:i}=Jt(t,void 0);return pt(t,Pe,(e=>t.row.toString()===(null==e?void 0:e.row.toString())&&t.col.toString()===(null==e?void 0:e.col.toString())),o),pt(t,to,i),e()&&Lo(Wo(r(),t.triggers)).then((()=>vt(Ce,{item:"hexagon",row:t.row,col:t.col}))),Gt(t,(()=>{t.addEventListener("click",(async()=>{Lo(Wo(r(),t.triggers))}))})),T`<slot></slot>`}),{defaults:{row:0,col:0,triggers:{}}}),$t("sprite-player-elements-grid",(()=>T`<slot></slot>`),{styles:s`
    slot {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
    }
    `});const Xo=(o,r,i)=>{const n={},s=null==o?void 0:o.map((o=>{var s,a,l,c;const d=Object.entries(Object.assign(Object.assign({},e),t)).find((([t,e])=>e.name===o.name)),u=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([t,e])=>void 0!==e)).map((([t,e])=>`${t}="${e}"`)).join(" "),h=null!==(s=o.team)&&void 0!==s?s:"none";return n[h]=null!==(a=n[h])&&void 0!==a?a:[],n[h].push((()=>{var t;return vt(Ce,{item:null!==(t=null==d?void 0:d[1].name)&&void 0!==t?t:"",row:r,col:i,payload:Object.assign({},o)})})),T`${Yo(`<${null!==(l=null==d?void 0:d[1].name)&&void 0!==l?l:"span"} ${u}></${null!==(c=null==d?void 0:d[1].name)&&void 0!==c?c:"span"}>`)}`}));return T`<sprite-set .triggers=${n} col="${i}" row="${r}">${s}</sprite-set>`};$t("fighter-info",(({player:t,row:e,col:o})=>T`<div class="sprite ${(null==t?void 0:t.health.current)<1?"dead":"alive"}">
            ${Xo(t?[t]:[],e,o)}
        </div>
        <div class="info">
            <h3>Gesundheit</h3>
            <loading-bar width="${(null==t?void 0:t.health.current)/(null==t?void 0:t.health.max)*100}%"></loading-bar>
            <p>${null==t?void 0:t.health.current} von ${null==t?void 0:t.health.max}</p>
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
        `],props:[{player:{type:Object},row:{type:Number},col:{type:Number}}]});const qo=s`
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
}`,Io=s`
    .inactive {
        opacity: 0.3;
        cursor: not-allowed;
    }
    .active.start {
        filter: brightness(50%);
    }
    .active.end {
        filter: brightness(50%);
    }
    .active.unreachable {
        cursor: not-allowed;
        filter: brightness(50%) hue-rotate(332deg);
    }
`,Bo=(t,e,o)=>`${function(t,e){var o,r;return e?ee(e.start,t)?"active start":e.end&&(null!==(r=null===(o=e.trail)||void 0===o?void 0:o.length)&&void 0!==r?r:0)<1&&ee(e.end,t)?"active unreachable":e.end&&ee(e.end,t)?"active end":e.trail&&e.trail.some((e=>ee(e,t)))?"active trail":"inactive":""}(t,e)} ${function(t,e){return e?ee(e.start,t)?"active start":e.end&&ee(e.end,t)?"active end":e.range&&e.range.some((e=>ee(e,t)))?"active trail":"inactive":""}(t,o)}`,Fo=(t,e,o)=>{e&&e.end&&ee(e.end,t)?function(t,e){e&&vt(Le,t)}(t,e):o&&function(t,e){e&&vt(qe,t)}(t,o)};$t("hexagon-element",(t=>{var e,o,r;Gt(t,(()=>{t.addEventListener("click",(()=>vt(Ce,{item:"hexagon",row:t.row,col:t.col})))}));const{row:i,col:n}=t,{getState:s,publish:a}=Jt(t,{elements:t.elements,row:i,col:n}),{getState:l,publish:c}=Jt(t,void 0),{getState:d,publish:u}=Jt(t,void 0);pt(t,Pe,(t=>(null==t?void 0:t.row.toString())===i.toString()&&(null==t?void 0:t.col.toString())===n.toString()),a),pt(t,De,c),pt(t,Xe,u),pt(t,Le,(()=>c(void 0))),pt(t,Ze,(()=>c(void 0))),pt(t,Ie,(()=>u(void 0)));const h=s();return T`<div 
      class="hexagon ${Bo(t,l(),d())}" 
      @mouseover=${()=>{l()&&vt(Ye,{row:i,col:n})}}
      @click=${()=>(Fo(t,l(),d()),document.dispatchEvent(new CustomEvent("hello-world",{detail:{hello:"world"}})))}
      style="background-image:url(/assets/${null===(e=t.background)||void 0===e?void 0:e.file}.png); background-position: ${null===(o=t.background)||void 0===o?void 0:o.x}px ${null===(r=t.background)||void 0===r?void 0:r.y}px;">
      ${Xo(h.elements,t.row,t.col)}</div>`}),{styles:[qo,Io],defaults:{background:void 0,elements:[],col:0,row:0}}),$t("world-map",(t=>{var e;const{getState:o,publish:r}=Jt(t,void 0);return pt(t,ye,r),T`<div id="globe">${null===(e=o())||void 0===e?void 0:e.map.map(((t,e)=>T`<div class="row ${e%2==0?"push":""}" style="width: calc(${120*t.length}px + 20rem)">
                ${t.map(((t,o)=>T`<hexagon-element 
                        .background=${t.terrain.sprite} 
                        .elements="${t.elements}" 
                        row="${e}" col="${o}">
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
    }`});const Go="building-mill";var Jo=$t(Go,(({team:t})=>T`<div style="background-image:url('/assets/windmill_complete_${null!=t?t:"none"}.png'"></div>`),{styles:[_o,s`
        div {
            width: 80%;
            height: 80%;
        }
        `],defaults:{team:void 0}}),Ko=Object.freeze({__proto__:null,name:Go,default:Jo});const Vo="building-castle-small";var Qo=$t(Vo,(t=>{const{getState:e,publish:o}=Jt(t,"");return pt(t,to,o),T`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/castle_small_${t.team}.png'"></div>`}),{styles:[_o,So,s`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),tr=Object.freeze({__proto__:null,name:Vo,default:Qo});const er={hay:0,iron:0,grain:0,wood:0,stone:0};var or=ho,rr=lo,ir=()=>Object.assign(Object.assign({},er),{stone:4,wood:2,grain:1}),nr=()=>Object.assign(Object.assign({},er),{wood:500,grain:500,stone:500}),sr=()=>Object.assign(Object.assign({},er),{stone:1e3,iron:1e3,grain:1e3});const ar=s`
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
  `,lr=s`
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
`,cr=(t,e)=>T`
    ${e.hay>0?T`<resource-counter
          count="${e.hay}"
          class="${t.hay>=e.hay?"enough":"lack"}"
        >
          <resource-hay></resource-hay>
        </resource-counter>`:T``}
    ${e.grain>0?T`<resource-counter
          count="${e.grain}"
          class="${t.grain>=e.grain?"enough":"lack"}"
        >
          <resource-grain></resource-grain>
        </resource-counter>`:T``}
    ${e.wood>0?T`<resource-counter
          count="${e.wood}"
          class="${t.wood>=e.wood?"enough":"lack"}"
        >
          <resource-wood></resource-wood>
        </resource-counter>`:T``}
    ${e.stone>0?T`<resource-counter
          count="${e.stone}"
          class="${t.stone>=e.stone?"enough":"lack"}"
        >
          <resource-stone></resource-stone>
        </resource-counter>`:T``}
    ${e.iron>0?T`<resource-counter
          count="${e.iron}"
          class="${t.iron>=e.iron?"enough":"lack"}"
        >
          <resource-iron></resource-iron>
        </resource-counter>`:T``}
  `;$t("sidebar-castle",(t=>{var e;const{selected:{payload:{team:o},row:r,col:i}}=t,{getState:n,publish:s}=Jt(t,void 0);pt(t,Ee,s);const{resources:a}=null!==(e=n())&&void 0!==e?e:{resources:{}};return T`<building-castle-small team="${o}"></building-castle-small>
      <h3>Bauen</h3>
      <div class="container">
        <button-image
          height="35px"
          src="/assets/knight_${o}.png"
          @click=${async()=>await vt(Te,{team:o,row:r,col:i})}
        >
          ${cr(a,rr())}
        </button-image>
        <button-image
          height="35px"
          src="/assets/wagon_${o}.png"
          @click=${async()=>await vt(Re,{team:o,row:r,col:i})}
        >
          ${cr(a,or())}
        </button-image>
        <button-image height="35px" src="/assets/resources/iron.png">
          ${cr(a,ir())}
        </button-image>
        <button-image height="35px" src="/assets/castle_medium_${o}.png">
          ${cr(a,nr())}
        </button-image>
        <button-image height="35px" src="/assets/castle_large_${o}.png">
          ${cr(a,sr())}
        </button-image>
      </div>`}),{styles:[ar,lr],defaults:{selected:{payload:{team:""},col:0,row:0}}});const dr=t=>parseInt(t.toString(),10);$t("sidebar-knight",(t=>{const{selected:{payload:e,row:o,col:r}}=t,{health:i,actions:n}=e,s={row:dr(o),col:dr(r)};return T`
    <h3>Ritter</h3>
    <div class="container">
        <img id="knight" src="/assets/knight_${e.team}.png">
        <loading-bar id="health" width="${i.current/i.max*100}%"></loading-bar>
        <div id="stats">
            <strong>Leben</strong> ${i.current} von ${i.max} 
            <strong>Aktionen:</strong> ${n.current} von ${n.max}
        </div>
        <button ?disabled=${n.current<1} id="move" @click=${()=>vt(De,{asset:Object.assign({},e),start:s})}>🦵</button>
        <button ?disabled=${n.current<1} id="attack" @click=${()=>vt(We,{asset:Object.assign({},e),start:s})}">⚔</button>
        <button ?disabled=${n.current<1} id="fortify">🏰</button>
    </div>`}),{styles:[ar,s`
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
`],props:[{selected:{type:Object}}]});$t("sidebar-wagon",(t=>{const{selected:{payload:e,row:o,col:r}}=t,{health:i,actions:n}=e,s={row:dr(o),col:dr(r)};return T`
    <h3>Wagen</h3>
    <div class="container">
        <img id="wagon" src="/assets/wagon_${e.team}.png">
        <loading-bar id="health" width="${i.current/i.max*100}%"></loading-bar>
        <div id="stats">
            <strong>Leben</strong> ${i.current} von ${i.max} 
            <strong>Aktionen:</strong> ${n.current} von ${n.max}
        </div>
        <button ?disabled=${n.current<1} id="move" title="Move" @click=${()=>vt(De,{asset:Object.assign({},e),start:s})}>🦵</button>
        <button ?disabled=${n.current<1} id="load" title="Load/Unload">📦</button>
    </div>`}),{styles:[s`
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
            "wagon wagon move attack fortify";
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
    #attack {
        grid-area: attack;
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
`],props:[{selected:{type:Object}}]});const ur=t=>({position:t?new oe(null==t?void 0:t.row,null==t?void 0:t.col):void 0,elements:t?[{item:t.item,payload:t.payload}]:[],dirty:!1});$t("controls-sidebar",(t=>{const{get:e,set:o}=Jt(t,void 0);pt(t,Ce,o);const r=e(),{get:i,set:n}=Jt(t,ur(r)),s=i();return!s.dirty&&r&&new oe(r.row,r.col).equals(s.position)?n(Object.assign(Object.assign({},s),{elements:[...s.elements,{item:r.item,payload:r.payload}],dirty:"hexagon"===r.item})):n(ur(r)),Gt(t,(()=>{setTimeout((()=>{vt(ke)}),1)})),T`
        ${i().elements.map((t=>{var e,o,r,n,s,a;switch(t.item){case Vo:return T`<sidebar-castle 
                        .selected="${{row:null===(e=i().position)||void 0===e?void 0:e.row,col:null===(o=i().position)||void 0===o?void 0:o.col,payload:t.payload}}">
                    </sidebar-castle>`;case To:return T`<sidebar-knight
                        .selected="${{row:null===(r=i().position)||void 0===r?void 0:r.row,col:null===(n=i().position)||void 0===n?void 0:n.col,payload:t.payload}}">
                    </sidebar-knight>`;case Uo:return T`<sidebar-wagon
                        .selected="${{row:null===(s=i().position)||void 0===s?void 0:s.row,col:null===(a=i().position)||void 0===a?void 0:a.col,payload:t.payload}}">
                    </sidebar-wagon>`;default:case Vo:return T``}}))}
    `}),{styles:s`:host { 
        position: absolute;
        display: block;
        min-width: 200px;
        width: 20%;
        right: 20px;
        top: 20px;
        z-index: 2;
    }`}),$t("modal-battle",(t=>{var e,o;const{getState:r,publish:i}=Jt(t,void 0),{getState:n,publish:s}=Jt(t,void 0);return pt(t,Ke,i),T`
   <modal-window 
        .open=${!!r()} 
        preventClose>
        <h1 slot="header">Kampf beginnt!</h1>
        <div class="body">
        ${null===(e=r())||void 0===e?void 0:e.attacker.map((t=>{const e=t;return T`
                    <div>
                        <fighter-info 
                            .player=${e} 
                            row="${r().location.row}" 
                            col="${r().location.col}">
                        </fighter-info>
                        <h3>Wähle deine Waffe</h3>
                        <div class="dices">
                            <dice-selector .dices="${e.dices}" @select="${t=>s(t.detail)}"></dice-selector>
                        </div>
                    </div>
                `}))}${null===(o=r())||void 0===o?void 0:o.defender.map((t=>T`
                    <div>
                        <fighter-info 
                            .player=${t} 
                            row="${r().location.row}" 
                            col="${r().location.col}">
                        </fighter-info>
                    </div>
                `))}
        </div>
        <p slot="footer">
            <button @click="${()=>{var t,e;return vt(Fe,{attacker:{asset:null===(t=r())||void 0===t?void 0:t.attacker[0],dices:[n()]},defender:null===(e=r())||void 0===e?void 0:e.defender[0],location:{row:r().location.row,col:r().location.col}})}}" ?disabled="${void 0===n()}">Würfeln</button>
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
        `]}),$t("modal-dice-result",(t=>{var e,o;const{getState:r,publish:i}=Jt(t,void 0);return pt(t,Ve,i),T`
   <modal-window 
        .open=${!!r()} 
        @close=${()=>i(void 0)}>
        <h1 slot="header">Gewürfelt!</h1>
        <div class="body">
        ${null===(e=r())||void 0===e?void 0:e.attacker.map((t=>T`
                    <div class="attacker">
                        <fighter-info 
                            .player=${t} 
                            row="${r().location.row}" 
                            col="${r().location.col}">
                        </fighter-info>
                    </div>
                `))}${null===(o=r())||void 0===o?void 0:o.defender.map((t=>T`
                    <div class="defender">
                        <fighter-info 
                            .player=${t} 
                            row="${r().location.row}" 
                            col="${r().location.col}">
                        </fighter-info>
                    </div>
                `))}
        ${r()?T`<dice-roll class="dice" result="${r().result}"></dice-roll>`:T``}
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
        `]}),$t("modal-mill-taken",(t=>{var e,o,r,i,n;const{getState:s,publish:a}=Jt(t,void 0);return pt(t,Je,a),T`
    <modal-window 
         .open=${!!s()} 
         @close=${()=>a(void 0)}>
         <h1 slot="header">Mühle übernommen!</h1>
         <div class="body">
            <div class="by">
                <fighter-info 
                    .player=${null===(e=s())||void 0===e?void 0:e.by} 
                    .row="${null===(o=s())||void 0===o?void 0:o.location.row}" 
                    .col="${null===(r=s())||void 0===r?void 0:r.location.col}">
                </fighter-info>
            </div>
            <div class="mills">
                <building-mill .team="${null===(i=s())||void 0===i?void 0:i.transfered.to}" class="after"></building-mill>
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
    `}),$t("modal-no-more-turns",(t=>{const{getState:e,publish:o}=Jt(t,void 0);return pt(t,Ne,o),T`
   <modal-window 
        .open=${!!e()} 
        preventClose>
        <h1 slot="header">Keine Aktionen übrig.</h1>
        <div class="body">
            Du hast keine Aktionen mehr übrig. Willst du weiter geben, oder noch rum schauen?
        </div>
        <p slot="footer">
            <button @click="${()=>(vt(eo),o(!1))}">Zug beenden</button>
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
        `]}),$t("modals-all",(()=>T`
    <modal-no-more-turns></modal-no-more-turns>
    <modal-battle></modal-battle>
    <modal-dice-result></modal-dice-result>
    <modal-mill-taken></modal-mill-taken>`)),$t("footer-element",(o=>{const{getState:r,publish:i}=Jt(o,void 0),{getState:n,publish:s}=Jt(o,[]);return pt(o,to,i),pt(o,He,s),T`<footer class="${r()}">
    <div class="main ">
        ${((o,r="")=>{const i=null==o?void 0:o.map((o=>{var i,n;const s=Object.entries(Object.assign(Object.assign({},e),t)).find((([t,e])=>e.name===o.name)),a=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([t,e])=>void 0!==e)).map((([t,e])=>`${t}="${e}"`)).join(" "),l=de(o)?{row:o.row,col:o.col}:{row:0,col:0};return T`<div
            @click="${()=>{vt(Ae,Object.assign(Object.assign({item:o.name},l),{payload:o})),setTimeout((()=>{var t;null===(t=uo(o))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            @mouseover="${()=>{setTimeout((()=>{var t;null===(t=uo(o))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            style="position:relative; cursor: pointer; width: 120px;${r};">
                ${Yo(`<${null!==(i=null==s?void 0:s[1].name)&&void 0!==i?i:"span"} ${a} style="${r};"></${null!==(n=null==s?void 0:s[1].name)&&void 0!==n?n:"span"}>`)}
        </div>`}));return T`<sprite-player-elements-grid>${i}</sprite-player-elements-grid>`})(n().sort(((t,e)=>t.name.localeCompare(e.name))).filter((t=>!ue(t)||t.actions.current>0)),"width: 10vh; height: 10vh;")}
    </div>
    <div class="action">
        <button-pure @click="${()=>vt(eo)}">
            <text-block type="paragraph" size="x-large">⌛</text-block> Zug beenden
        </button-pure>
    </div>
</footer>`}),{styles:[Mo,Eo(s`footer .main`),s`
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
    }`]});const hr=s`
  :host {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 3vh;
    height: 3vh;
  }
`;var vr;$t("resource-grain",(()=>T``),{styles:[s`
        :host {
          background-image: url("/assets/resources/grain.png");
        }
      `,hr]}),$t("resource-stone",(()=>T``),{styles:[s`
        :host {
          background-image: url("/assets/resources/stone.png");
        }
      `,hr]}),$t("resource-iron",(()=>T``),{styles:[s`
        :host {
          background-image: url("/assets/resources/iron.png");
        }
      `,hr]}),$t("resource-wood",(()=>T``),{styles:[s`
        :host {
          background-image: url("/assets/resources/log.png");
        }
      `,hr]}),$t("resource-hay",(()=>T``),{styles:[s`
        :host {
          background-image: url("/assets/resources/hay.png");
        }
      `,hr]}),$t("resource-counter",(({count:t,collect:e})=>T`
        <slot></slot>
        ${t} ${e?T`<span>(+${e})</span>`:""}
    `),{styles:[s`
        :host {
            font-size: 4vh;
        }
        span {
            font-size: smaller;
        }
        `],defaults:{count:0,collect:void 0}}),$t("header-element",(t=>{var e,o,r,i,n,s,a,l;const{get:c,set:d}=Jt(t,void 0),{get:u,set:h}=Jt(t,void 0),{get:v,set:g}=Jt(t,void 0);pt(t,to,d),pt(t,Ee,h),pt(t,so,g);const p=null!==(e=u())&&void 0!==e?e:{resources:{}},m=(t,e,o)=>(t[e]=(t[e]||0)+o,t),f=null!==(r=null===(o=v())||void 0===o?void 0:o.resourcesToGenerate.reduce(((t,e)=>{var o,r;for(const i of le)t=m(t,i,null!==(r=null===(o=e.resources[i])||void 0===o?void 0:o.generatedResource)&&void 0!==r?r:0);return t}),{}))&&void 0!==r?r:{};return T`<header class="${c()}">
        <resource-counter title="hay" count="${p.resources.hay}" collect=${null!==(i=f.hay)&&void 0!==i?i:0}>
            <resource-hay></resource-hay>
        </resource-counter>
        <resource-counter title="grain" count="${p.resources.grain}" collect=${null!==(n=f.grain)&&void 0!==n?n:0}>
            <resource-grain></resource-grain>
        </resource-counter>
        <resource-counter title="stone" count="${p.resources.stone}" collect=${null!==(s=f.stone)&&void 0!==s?s:0}>
            <resource-stone></resource-stone>
        </resource-counter>
        <resource-counter title="iron" count="${p.resources.iron}" collect=${null!==(a=f.iron)&&void 0!==a?a:0}>
            <resource-iron></resource-iron>
        </resource-counter>
        <resource-counter title="wood" count="${p.resources.wood}" collect=${null!==(l=f.wood)&&void 0!==l?l:0}>
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
    }`}),null===(vr=document.querySelector("body"))||void 0===vr||vr.addEventListener("keyup",(function(t){"Escape"===t.key&&vt(Me,!0)})),$t("the-mill",(()=>((async({rows:t,cols:e})=>{const o=xe({rows:t,cols:e}),r=Oe("green",{rows:t,cols:e}),i=Oe("red",{rows:t,cols:e}),n=Kt(0,t-1).map((t=>Kt(0,e-1).map((e=>({position:new oe(t,e),terrain:we(),elements:[...je(o,t,e),...je(r,t,e),...je(i,t,e)]})))));await vt(ye,{map:n,teams:["red","green"]})})({rows:10,cols:10}),T`
    <controls-sidebar>sidebar</controls-sidebar>
    <map>
        <header-element>header</header-element>
        <world-map></world-map>
        <footer-element>
        </footer-element>
        <modals-all></modals-all>
    </map>

    `)),{styles:[Mo,Eo(s`world-map`),Eo(s`controls-sidebar`),s`
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
    `]});export{e as buildings,Ho as knight,t as player,Po as wagon};
//# sourceMappingURL=the-mill.js.map
