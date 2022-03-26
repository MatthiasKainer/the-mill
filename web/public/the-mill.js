var t=Object.freeze({__proto__:null,get knight(){return to},get wagon(){return oo}}),e=Object.freeze({__proto__:null,get mill(){return po},get castleSmall(){return yo},get lumberjackSmall(){return xo},get mineSmall(){return _o}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=s.get(this.cssText);return i&&void 0===t&&(s.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(i,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window.trustedTypes,d=c?c.emptyScript:"",u=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:v};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=g){var o,s;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(s=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==s?s:h.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,o,s;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),a=t.converter,l=null!==(s=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==s?s:h.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.1");const p=globalThis.trustedTypes,b=p?p.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,y="?"+w,$=`<${y}>`,k=document,x=(t="")=>k.createComment(t),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,A=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,C=/"/g,M=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),N=new WeakMap,H=k.createTreeWalker(k,129,null,!1);class B{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=_;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===_?"!--"===l[1]?r=S:void 0!==l[1]?r=A:void 0!==l[2]?(M.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=E):void 0!==l[3]&&(r=E):r===E?">"===l[0]?(r=null!=s?s:_,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?E:'"'===l[3]?C:T):r===C||r===T?r=E:r===S||r===A?r=_:(r=E,s=void 0);const u=r===E&&t[e+1].startsWith("/>")?" ":"";n+=r===_?i+$:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+w+u):i+w+(-2===c?(o.push(void 0),e):u)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,o]})(t,e);if(this.el=B.createElement(l,i),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=H.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=c[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?W:"@"===e[1]?G:L})}else a.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(M.test(o.tagName)){const t=o.textContent.split(w),e=t.length-1;if(e>0){o.textContent=p?p.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],x()),H.nextNode(),a.push({type:2,index:++s});o.append(t[e],x())}}}else if(8===o.nodeType)if(o.data===y)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(w,t+1));)a.push({type:7,index:s}),t+=w.length-1}s++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function P(t,e,i=t,o){var s,n,r,a;if(e===z)return e;let l=void 0!==o?null===(s=i._$Cl)||void 0===s?void 0:s[o]:i._$Cu;const c=O(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=P(t,l._$AS(t,e.values),l,o)),e}class D{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);H.currentNode=s;let n=H.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new I(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new K(n,this,t)),this.v.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(n=H.nextNode(),r++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,o){var s;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),O(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==z&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return j(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==U&&O(this._$AH)?this._$AA.nextSibling.data=t:this.k(k.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=B.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new D(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new B(t)),e}S(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new I(this.A(x()),this.A(x()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class L{constructor(t,e,i,o,s){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=P(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=P(this,o[i+r],e,r),a===z&&(a=this._$AH[r]),n||(n=!O(a)||a!==this._$AH[r]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.C(t)}C(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends L{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===U?void 0:t}}const Z=p?p.emptyScript:"";class W extends L{constructor(){super(...arguments),this.type=4}C(t){t&&t!==U?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class G extends L{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=P(this,t,e,0))&&void 0!==i?i:U)===z)return;const o=this._$AH,s=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==U&&(o===U||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const V=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q,X;null==V||V(B,I),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.1");class F extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new I(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return z}}F.finalized=!0,F._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:F});const J=globalThis.litElementPolyfillSupport;null==J||J({LitElement:F}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.0");const Q={};var tt;!function(t){t[t.SILENT=0]="SILENT",t[t.ERROR=1]="ERROR",t[t.INFO=80]="INFO",t[t.DEBUG=90]="DEBUG",t[t.TRACE=100]="TRACE"}(tt||(tt={}));let et=tt.SILENT;const it=t=>et=t;let ot=[];const st=(t,e,...i)=>{ot.forEach((o=>o(tt.ERROR,t,e,...i))),et>=tt.ERROR&&console.error(e,t,...i)},nt=(t,e,...i)=>{ot.forEach((o=>o(tt.INFO,t,e,...i))),et>=tt.INFO&&(et===tt.TRACE?console.trace:console.log)(e,t,...i)},rt=(t,e,...i)=>{ot.forEach((o=>o(tt.DEBUG,t,e,...i))),et>=tt.DEBUG&&(et===tt.TRACE?console.trace:console.log)(e,t,...i)},at={queue:{},list:{}};function lt(t){return t.reduce(((t,e)=>`${t};${e.name};`),"")}const ct=new class{constructor(){this.actionDictionary={}}on(t,e){if(Array.isArray(t)){const i=lt(t);if(at.list[i])throw st("Hypothalamus.on",new Error("Cannot register the same list of hormones twice"),i),new Error("Cannot register the same list of hormones twice");nt("[Hypothalamus.on] Adding new action when all in a list of hormones are released",i,t),at.list[i]={hormones:[...t],callback:e}}else nt("Hypothalamus.on","Adding new action when a hormone is released",t.name),this.actionDictionary[t.name]=this.actionDictionary[t.name]||[],this.actionDictionary[t.name].push(e)}drop(t){Array.isArray(t)?(rt("Hypothalamus.drop","Dropping a list of hormones",lt(t),t),delete at.queue[lt(t)],delete at.list[lt(t)]):(rt("Hypothalamus.drop","Dropping a hormone",t.name),this.actionDictionary[t.name]=[])}dropAll(){rt("Hypothalamus.dropAll","Dropping all hormones"),this.actionDictionary={},at.queue={},at.list={}}collect(t,e,i){const o=`collect;;${t.name};${e.name};`;if(at.list[o])throw st("Hypothalamus.collect",new Error("Cannot register the same list of hormones twice"),o),new Error("Cannot register the same list of hormones twice");nt("[Hypothalamus.collect] Adding new action when collected hormones are released",o,t,e),at.list[o]={hormones:[e],callback:i}}orchestrate(t,e){this.actionDictionary[t.name]&&this.actionDictionary[t.name].forEach((t=>t(e)));const i=Object.keys(at.queue).filter((e=>e.includes(`;${t.name};`))),o=Object.keys(at.list).filter((e=>e.indexOf(`;${t.name};`)>-1&&i.every((t=>t!==e))));o.forEach((t=>{at.queue[t]={hormones:[...at.list[t].hormones],values:{},callback:at.list[t].callback}}));const s=[...new Set([...i,...o])];for(let i=0;i<s.length;i++){const o=s[i];if(o.startsWith("collect;;")){const[i]=o.replace("collect;;","").split(";");t.name===i?at.queue[o].values[t.name]=[...at.queue[o].values[t.name]||[],e]:(at.queue[o].values[t.name]=e,at.queue[o].callback(at.queue[o].values),delete at.queue[o])}else at.queue[o].hormones=at.queue[o].hormones.filter((e=>e.name!==t.name)),at.queue[o].values[t.name]=e,at.queue[o].hormones.length<1&&(at.queue[o].callback(at.queue[o].values),delete at.queue[o])}}};function dt(t,e={}){return ut(t,Object.assign(Object.assign({},e),{readOnce:!0}))}function ut(t,e={}){return ht(Q)(t,e)}const ht=t=>(e,i={})=>{if(t[e]&&!i.loadIfExists)throw st("hormone.defineHormone",new Error("Hormone already created"),e),new Error("Hormone already created");if(t[e]&&i.loadIfExists)return rt("hormone.defineHormone","Hormone already created, reusing existing",e),{name:e};const{defaultValue:o,transformation:s,readOnce:n}=i;return t[e]={name:e,value:o,defaultValue:o,transformation:s,receptors:[],readOnce:null!=n&&n},{name:e}};async function vt(t,e){return gt(Q)(t,e)}const gt=t=>async(e,i)=>{if(!e)throw st("hormone.releaseHormone",new Error("Hormone cannot be undefined")),new Error("Hormone cannot be undefined");const{name:o}=e;if(!t[o])throw st("hormone.releaseHormone",new Error("Hormone does not exist"),o),new Error("Hormone does not exist");var s;s=i,t[o].value=(void 0===s||s instanceof Function)&&i?i(t[o].value):i,nt("hormone.releaseHormone","Releasing passed hormone",o,t[o].value);const{receptors:n,transformation:r}=t[o];r&&r(t[o].value);const a=t[o].value;return ct.orchestrate({name:o},a),await Promise.all(n.filter((t=>{const e=void 0===t.onlyIf||t.onlyIf(a);return rt("hormone.releaseHormone",e?"Keeping receptor because condition matched or no condition":"Filtered receptor from the triggers because condition not matched",t),e})).map((t=>(null==t?void 0:t.onTriggered)?null==t?void 0:t.onTriggered(a):a))),t[o].readOnce&&(rt("hormone.releaseHormone","Resetting hormone because it is readOnce",o),t[o].value=t[o].defaultValue),Object.assign({},t[o])};function mt(t,{name:e},i,o){return ft(Q)(t,{name:e},i,o)}const ft=t=>(e,{name:i},o,s)=>{const n=null!=s?s:o,r=s?o:void 0;if(!t[i])throw st("receptor.useReceptor",new Error("Hormone is not defined"),i),new Error(`Hormone "${i}" is not defined`);((t,e,i,o)=>{const s=(null==o?void 0:o.toString())||i;return!t[i].receptors.some((t=>t.parent===e&&t.key===s))})(t,e,i,r)?(nt("receptor.useReceptor","Pushing new receptor to hormone",i,{parent:e}),t[i].receptors.push({key:(null==r?void 0:r.toString())||i,parent:e,onlyIf:r,onTriggered:n}),void 0!==t[i].value?n(t[i].value):void 0!==t[i].defaultValue&&n(t[i].defaultValue)):((t,e,...i)=>{ot.forEach((o=>o(tt.TRACE,t,e,...i))),et===tt.TRACE&&console.trace(e,t,...i)})("receptor.useReceptor","Receptor not pushed because already subscribed",i,{parent:e})};function pt(t,[e,i]){return e.toLowerCase()!==e?t[e]=Object.assign(Object.assign({},i),{attribute:e.replace(/[A-Z]/g,"-$&").toLowerCase()}):t[e]=i,t}function bt(t){return"boolean"==typeof t?{type:Boolean}:Array.isArray(t)?{type:Array}:"object"==typeof t?{type:Object}:{}}const wt=t=>(t=>void 0!==t&&void 0!==t.props)(t)?(t.props||[]).reduce(((t,e)=>(Object.entries(e).forEach((e=>t=pt(t,e))),t)),{}):(t=>{return e=t||{},Object.entries(e).reduce(((t,[e,i])=>pt(t,[e,bt(i)])),{});var e})(null==t?void 0:t.defaults),yt={},$t=(t,e,i)=>{if(yt[t])return yt[t];customElements.define(t,class extends F{constructor(){super(),this.content=R``,(t=>void 0!==t&&void 0!==t.defaults)(i)&&Object.entries(i.defaults).forEach((([t,e])=>{this[t]=e}))}static get properties(){return wt(i)}static get styles(){return null==i?void 0:i.styles}async performUpdate(){return this.content=await Promise.resolve(e(this)).catch((t=>R`<slot name="error">${t}</slot>`)),super.performUpdate()}render(){return this.content}});const o=document.createElement(t);return yt[t]=o,o};var kt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},xt={},Ot={},jt={};Object.defineProperty(jt,"t",{value:!0}),jt.shallowClone=void 0,jt.shallowClone=function(t){return"object"!=typeof t||!t||t instanceof Date||t instanceof RegExp?t:Array.isArray(t)?[...t]:Object.assign({},t)};var _t={};function St(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}Object.defineProperty(_t,"t",{value:!0}),_t.withWorkflow=_t.withReducer=_t.withState=_t.decorate=_t.asUpdateableLitElement=void 0,_t.asUpdateableLitElement=St;const At="__registered_states";function Et(t){const e=t;if(e[At])return e;const i=St(t),o=i.updated;return e[At]={index:0,count:0,states:[],reducers:[],workflows:[]},i.updated=t=>(e[At].index=0,o(t)),e}_t.decorate=Et,_t.withState=function(t,e,i={}){const o=Et(t),{index:s,count:n}=o[At];return s===n?(o[At].index++,o[At].count++,o[At].states.push(e),e):(o[At].index++,i.updateDefault&&o[At].states[s].inject(e.get()),o[At].states[s])},_t.withReducer=function(t,e){const i=Et(t),{index:o,count:s,reducers:n}=i[At];return o!==s||n[o-1]?i[At].reducers[o-1]:(i[At].reducers[o-1]=e,e)},_t.withWorkflow=function(t,e){const i=Et(t),{index:o,count:s,workflows:n}=i[At];return o!==s||n[o-1]?i[At].workflows[o-1]:(i[At].workflows[o-1]=e,e)};var Tt=kt&&kt.o||function(t,e,i,o){return new(i||(i=Promise))((function(s,n){function r(t){try{l(o.next(t))}catch(t){n(t)}}function a(t){try{l(o.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(Ot,"t",{value:!0}),Ot.useState=void 0;const Ct=jt,Mt=_t;Ot.useState=(t,e,i={})=>{let o=(0,Ct.shallowClone)(e);const s=[()=>Tt(void 0,void 0,void 0,(function*(){return t.requestUpdate(),yield t.updateComplete}))],n=t=>Tt(void 0,void 0,void 0,(function*(){o!==t&&(o=(0,Ct.shallowClone)(t),yield Promise.all(s.map((t=>t(o)))))}));return(0,Mt.withState)(t,new class{set value(t){n(t)}get value(){return o}publish(t){n(t)}set(t){return Tt(this,void 0,void 0,(function*(){yield n(t)}))}subscribe(t){s.push(t)}inject(t){o=t}get(){return o}getState(){return o}},i)};var Rt={},zt=kt&&kt.o||function(t,e,i,o){return new(i||(i=Promise))((function(s,n){function r(t){try{l(o.next(t))}catch(t){n(t)}}function a(t){try{l(o.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(Rt,"t",{value:!0}),Rt.useReducer=void 0;const Ut=Ot,Nt=_t;Rt.useReducer=(t,e,i,o={})=>{const{get:s,set:n}=(0,Ut.useState)(t,i,o),r=[],a=(i,a)=>zt(void 0,void 0,void 0,(function*(){const l=e(s());return l[i]&&(yield n(yield l[i](a)),r.forEach((t=>t(i,s()))),o.dispatchEvent&&t.dispatchEvent(new CustomEvent(i,{detail:s()}))),s()}));return(0,Nt.withReducer)(t,{get:s,subscribe:t=>r.push(t),when:(t,e)=>r.push(((i,o)=>i===t&&e(o))),set:a,dispatch:a})};var Ht={},Bt=kt&&kt.o||function(t,e,i,o){return new(i||(i=Promise))((function(s,n){function r(t){try{l(o.next(t))}catch(t){n(t)}}function a(t){try{l(o.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))};Object.defineProperty(Ht,"t",{value:!0}),Ht.useWorkflow=void 0;const Pt=xt,Dt=_t;Ht.useWorkflow=(t,e)=>{const i=Object.entries(e).reduce(((e,[i,{reducer:o,initialState:s}])=>(e[i]=(0,Pt.useReducer)(t,o,s),e)),{}),o={},s={},n=[],r=t=>(n.push({type:"projections",args:[t]}),i[t]?i[t].get():void 0);return(0,Dt.withWorkflow)(t,{addActivity:(t,e)=>Bt(void 0,void 0,void 0,(function*(){var s,r;n.push({type:"addActivity",args:[t,e]}),yield Promise.all(null!==(r=null===(s=o[t])||void 0===s?void 0:s.map((t=>t(e))))&&void 0!==r?r:[]);for(const o of Object.values(i))yield o.dispatch(t,e)})),addSideeffect:(t,e)=>{n.push({type:"addSideeffect",args:[t,e]}),o[t]=[...o[t]||[],e]},projections:r,addCompensation:(t,e)=>{n.push({type:"addCompensation",args:[t,e]}),s[t]=[...s[t]||[],e]},compensate:()=>Bt(void 0,void 0,void 0,(function*(){n.push({type:"compensate",args:[]});for(const[t,e]of Object.entries(s))for(const o of e)for(const e of Object.values(i))yield e.dispatch(t,o)})),after:(t,e,i)=>{n.push({type:"after",args:[t,e,i]});const o=()=>Bt(void 0,void 0,void 0,(function*(){n.some((t=>((t,e)=>{if(t.type!==e.type)return!1;for(let i=0;i<e.args.length;i++)if(t.args[i]!==e.args[i])return!1;return!0})(t,e)))||(new Date(Date.now())>t?yield i():setTimeout(o,100))}));o()},plan:t=>Bt(void 0,void 0,void 0,(function*(){for(const[i,o]of Object.entries(t))if(e[i]&&JSON.stringify(r(i))===JSON.stringify(e[i].initialState))return yield o();return t[""]?yield t[""]():Promise.resolve(null)})),history:()=>[...n]})},function(t){Object.defineProperty(t,"t",{value:!0}),t.useWorkflow=t.useReducer=t.useState=void 0;var e=Ot;Object.defineProperty(t,"useState",{enumerable:!0,get:function(){return e.useState}});var i=Rt;Object.defineProperty(t,"useReducer",{enumerable:!0,get:function(){return i.useReducer}});var o=Ht;Object.defineProperty(t,"useWorkflow",{enumerable:!0,get:function(){return o.useWorkflow}})}(xt);var It={},Lt={},Yt={};function Zt(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}Object.defineProperty(Yt,"t",{value:!0}),Yt.withEffect=Yt.decorate=Yt.asUpdateableLitElement=void 0,Yt.asUpdateableLitElement=Zt;const Wt="__registered_effects";function Gt(t){const e=t;if(e[Wt])return e;const i=Zt(t),o=i.updated;return e[Wt]={index:0,count:0,effects:[]},i.updated=t=>(e[Wt].index=0,o(t)),e}Yt.decorate=Gt,Yt.withEffect=function(t,e){const i=Gt(t),{index:o,count:s}=i[Wt];return o===s?(i[Wt].index++,i[Wt].count++,i[Wt].effects.push(e),e):(i[Wt].index++,i[Wt].effects[o])},Object.defineProperty(Lt,"t",{value:!0}),Lt.useOnce=Lt.useEffect=void 0;const Kt=Yt;function Vt(t,e,i){const o=(0,Kt.withEffect)(t,{on:e,observe:["__initial__dirty"]});o.observe.some(((t,e)=>i[e]!==t))&&o.on(),o.observe=i}Lt.useEffect=Vt,Lt.useOnce=(t,e)=>Vt(t,e,[]),function(t){Object.defineProperty(t,"t",{value:!0}),t.useOnce=t.useEffect=void 0;var e=Lt;Object.defineProperty(t,"useEffect",{enumerable:!0,get:function(){return e.useEffect}}),Object.defineProperty(t,"useOnce",{enumerable:!0,get:function(){return e.useOnce}})}(It);var qt=It.useOnce,Xt=xt.useState;function Ft(t,e){return Array.from({length:e-t+1},((t,e)=>e))}class Jt{constructor(t,e,i,o=1){this.x=t,this.y=e,this.z=i,this.costs=o}equals(t){return null!==t&&this.x===t.x&&this.y===t.y&&this.z===t.z}add(t){const{x:e,y:i,z:o}=this;return new Jt(e+t.x,i+t.y,o+t.z)}remove(t){const{x:e,y:i,z:o}=this;return new Jt(e-t.x,i-t.y,o-t.z)}vector(t){return new Jt(t.x-this.x,t.y-this.y,t.z-this.z)}distance(t){return Math.max(Math.abs(this.x-t.x),Math.abs(this.y-t.y),Math.abs(this.z-t.z))}heuristic(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}range(t){const e=[];for(let i=-t;i<=t;i++)for(let o=Math.max(-t,-i-t);o<=Math.min(t,-i+t);o++)e.push(this.add(new Jt(i,o,-i-o)));return e}direction(t){return Qt[t]}directionTo(t){const e=Ft(0,5).find((e=>this.neighbor(e).equals(t)));return void 0!==e&&e>=0?this.direction(e):null}neighbor(t){return this.add(this.direction(t))}neighbors(t){return Ft(0,5).map((t=>this.neighbor(t))).filter((e=>t.some((t=>t.equals(e)))))}ring(t){const e=[],i=-1*t;for(const o of Ft(i,t))for(const s of Ft(Math.max(i,-1*o-i),Math.min(t,-1*o+t))){const t=-o-s;e.push(this.add(new Jt(o,s,t)))}return e}cost(){return this.costs}toPosition(){const t=this.x+(this.z+(1&this.z))/2,e=this.z;return new ie(e,t)}toCoords(){return this.toPosition().toCoords()}toString(){return`${this.x}:${this.y}:${this.z}`}}const Qt=[new Jt(1,-1,0),new Jt(1,0,-1),new Jt(0,1,-1),new Jt(-1,1,0),new Jt(-1,0,1),new Jt(0,-1,1)];const te={manhattan:[{row:0,col:-1},{row:1,col:0},{row:0,col:1},{row:-1,col:0}],euclid:[{row:1,col:-1},{row:-1,col:1},{row:1,col:0},{row:0,col:1},{row:-1,col:0},{row:0,col:-1},{row:-1,col:-1},{row:1,col:1}]},ee=(t,e)=>t.col.toString()===e.col.toString()&&t.row.toString()===e.row.toString();class ie{constructor(t,e,i="manhattan"){this.row=t,this.col=e,this.system=i}vector(t){return new ie(t.row-this.row,t.col-this.col)}toCube(){const t=this.col-(this.row+(1&this.row))/2,e=this.row;return new Jt(t,-t-e,e)}toCoords(){const{row:t,col:e}=this;return{col:e,row:t}}neighbor(t){const e=oe(te[this.system][t]);return e.system=this.system,this.add(e)}neighbors(){return Ft(0,te[this.system].length-1).map((t=>this.neighbor(t)))}distance(t){return function(t,e){return Math.sqrt(Math.pow(e.col-t.col,2)+Math.pow(e.row-t.row,2))}(this,t)}manhattanDistance(t){return function(t,e){return Math.abs(Math.abs(t.col-e.col)+Math.abs(t.row-e.row))}(this,t)}add(t){const{col:e,row:i}=this;return new ie(i+t.row,e+t.col,this.system)}remove(t){const{col:e,row:i}=this;return new ie(i-t.row,e-t.col,this.system)}equals(t){return null!=t&&t.col.toString()===this.col.toString()&&t.row.toString()===this.row.toString()}toString(){return`${this.col}:${this.row}`}toEuclidPosition(){return new ie(this.row,this.col,"euclid")}toManhattanPosition(){return new ie(this.row,this.col,"manhattan")}static fromString(t){if(!t)return null;const[e,i]=t.split(":").map((t=>parseInt(t,10)));return new ie(i,e)}}const oe=({row:t,col:e})=>new ie(t,e);function se(){var t=(new Date).getTime(),e=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(i){var o=16*Math.random();return t>0?(o=(t+o)%16|0,t=Math.floor(t/16)):(o=(e+o)%16|0,e=Math.floor(e/16)),("x"===i?o:3&o|8).toString(16)}))}const ne={stone:{default:"resources.stone",de:"Stein",en:"Stone"},log:{default:"resources.log",de:"Holz",en:"Wood"},grain:{default:"resources.grain",de:"Mehl",en:"Flour"},hay:{default:"resources.hay",de:"Getreide",en:"Hay"},iron:{default:"resources.iron",de:"Eisen",en:"Iron"}},re={wagon:{default:"assets.wagon",de:"Wagen",en:"Wagon"},knight:{default:"assets.knight",de:"Ritter",en:"Knight"},castle:{build:{default:"assets.castle.build",de:"Bauen",en:"Build"}},dices:{standard:{name:{default:"assets.dices.standard.name",de:"Standardwaffe",en:"Standardweapon"},story:{default:"assets.dices.standard.story",de:"Eine faire, ausgewogene Waffe die jeder Ritter haben sollte",en:"A fair, well-balanced weapon that every knight should have"}},mightyBlowOfBetrayal:{name:{default:"assets.dices.mightyBlowOfBetrayal.name",de:"Mächtiger Schlag des Betrugs",en:"Mighty blow of betrayal"},story:{default:"assets.dices.mightyBlowOfBetrayal.story",de:"Eine Waffe, die bis zu 12 Schaden verursachen kann, doch auch eine hohe Wahrscheinlichkeit hat gar keinen Schaden zu verursachen, oder sogar den Ritter selbst zu verletzen!",en:"A weapon that can inflict up to 12 damage, but also has a high chance of inflicting no damage, or even injuring the knight himself"}},smallCastleDefence:{name:{default:"assets.dices.smallCastleDefence.name",de:"Verteidigungswaffen der kleinen Burg",en:"Defensive weapons of the small castle"},story:{default:"assets.dices.smallCastleDefence.story",de:"Schon die kleine Burg hat mächtige Verteidigungswaffen, die viele Angriffe abwehren kann. Nur eine mächtige Armee wird es schaffen, diese Verteidigung zu überwinden.",en:"The small castle has mighty defensive weapons so that many attacks can be thwarted. Only a mighty army can defeat it."}}},properties:{life:{default:"assets.properties.life",de:"<strong>Leben</strong> ${0} von ${1}",en:"<strong>Life</strong> ${0} of ${1}"},actions:{default:"assets.properties.actions",de:"<strong>Aktionen</strong> ${0} von ${1}",en:"<strong>Actions</strong> ${0} of ${1}",move:{default:"assets.properties.actions.move",de:"Bewegen",en:"Move"},attack:{default:"assets.properties.actions.attack",de:"Angreifen",en:"Attack"},fortify:{default:"assets.properties.actions.fortify",de:"Verteidigen",en:"Fortify"},load:{default:"assets.properties.actions.load",de:"Laden/Entladen",en:"Load/Unload"},build:{knight:{default:"assets.properties.actions.build.knight",de:"Ritter bauen",en:"Build knight"},wagon:{default:"assets.properties.actions.build.wagon",de:"Wagen bauen",en:"Build wagon"},iron:{default:"assets.properties.actions.build.iron",de:"Eisen bauen",en:"Build iron"},castle_medium:{default:"assets.properties.actions.build.castle_medium",de:"Mittlere Burg bauen",en:"Build medium castle"},castle_large:{default:"assets.properties.actions.build.castle_large",de:"Große Burg bauen",en:"Build large castle"},lumberjack_small:{default:"assets.properties.actions.build.lumberjack_small",de:"Baue einen Holzfäller (klein)",en:"Build Lumberjack (small)"},mine_small:{default:"assets.properties.actions.build.mine_small",de:"Baue eine Mine (klein)",en:"Build Mine (small)"}}}}};function ae(t,...e){const i=t[document.documentElement.lang||"en"];return i?i.replace(/\$\{(\d+)\}/g,((t,i)=>e[i])):t.default}function le(t){return{name:ae(t.name),story:ae(t.story)}}function ce(t){return t.reduce(((t,e)=>t+function(t){return t.sides[Math.floor(Math.random()*t.sides.length)].value}(e)),0)}const de={id:"building-castle-small",name:"Small Castle",team:"",occurences:{min:1},dices:[Object.assign(Object.assign({},le(re.dices.smallCastleDefence)),{sides:[{value:12},{value:12},{value:16},{value:16},{value:21}]})],health:{current:60,max:60},actions:{current:2,max:2},resources:{grain:{generatedResource:10},hay:{generatedResource:10},stone:{generatedResource:10},iron:{generatedResource:10}}},ue={green:t=>Math.max(.75*t.length,Math.round(Math.random()*(t.length-1))),red:t=>Math.min(.25*t.length,Math.round(Math.random()*(t.length-1)))};
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
function he(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(i[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(t);s<o.length;s++)e.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(t,o[s])&&(i[o[s]]=t[o[s]])}return i}const ve=["hay","grain","iron","wood","stone"];function ge(t){var e;return void 0!==t&&void 0!==(null===(e=t)||void 0===e?void 0:e.resources)}function me(t){var e,i;return void 0!==t&&(null===(e=t)||void 0===e?void 0:e.row)>=0&&(null===(i=t)||void 0===i?void 0:i.col)>=0}function fe(t){var e,i;return t&&(null===(i=null===(e=t)||void 0===e?void 0:e.actions)||void 0===i?void 0:i.max)>0}function pe(t){var e,i;return t&&(null===(i=null===(e=t)||void 0===e?void 0:e.dices)||void 0===i?void 0:i.length)>0}function be(t){var e,i;return t&&(null===(i=null===(e=t)||void 0===e?void 0:e.dices)||void 0===i?void 0:i.length)>0}const we={id:"building-mill",name:"Mill",occurences:{min:1},resources:{grain:{hay:100,generatedResource:50},hay:{generatedResource:50}}};function ye(t){return void 0!==t&&t.max>0}const $e=[Object.assign(Object.assign({},we),{min:0,max:2}),Object.assign(Object.assign({},we),{min:8,max:10})],ke=({min:t,max:e},i,o)=>{const s=t=>i*o*(t/10);return Math.floor(Math.random()*(s(e)-s(t))+s(t))},xe=(t,e)=>{var i;return null===(i=null==t?void 0:t.map)||void 0===i?void 0:i.reduce(((t,i)=>[...t,...i.reduce(((t,i)=>[...t,...i.elements.filter(ge).filter((t=>t.team===e))]),[])]),[])},Oe=(...t)=>t.reduce(((t,e)=>(t.push(...Object.entries(e.resources).map((t=>{var[i,o]=t,{generatedResource:s}=o,n=he(o,["generatedResource"]);let r={};r[i]=Object.assign(Object.assign({},n),{generatedResource:s});return Object.assign(Object.assign({},e),{resources:r})}))),t)),[]).filter(Boolean),je={gras:{sprite:{name:"gras",file:"hexagonTerrain_sheet",x:414,y:1906},movementCosts:1,defense:0},desert:{sprite:{name:"desert",file:"hexagonTerrain_sheet",x:902,y:627},movementCosts:4,defense:0},mud:{sprite:{name:"mud",file:"hexagonTerrain_sheet",x:658,y:912},movementCosts:4,defense:1},muddyHills:{sprite:{name:"muddyHills",file:"hexagonTerrain_sheet",x:780,y:627},movementCosts:8,defense:3},forest:{sprite:{name:"forest",file:"hexagonTerrain_sheet",x:536,y:912},movementCosts:8,defense:3},mountain:{sprite:{name:"mountain",file:"hexagonTerrain_sheet",x:536,y:1195},movementCosts:10,defense:9}},_e=()=>{var t;const e=Object.keys(je);return null!==(t=je[e[Math.floor(Math.random()*e.length)]])&&void 0!==t?t:je.mountain},Se=ut("game/world/worldLoaded"),Ae=ut("game/start"),Ee=ut("game/load/sidebar"),Te=({rows:t,cols:e})=>(t=>{const e=new Array(t.rows*t.cols).map((()=>[]));return $e.forEach((i=>{var o;let s=i.occurences.factor?Math.max(i.occurences.min,e.length/i.occurences.factor):i.occurences.min;for(;s>0;){const r=ye(i)?ke(i,t.rows,t.cols):(n=e.length,Math.round(Math.random()*(n-1)));e[r]=[...null!==(o=e[r])&&void 0!==o?o:[],Object.assign(Object.assign({},i),{name:i.id,id:se()})],s--}var n})),e})({rows:t,cols:e}),Ce=(t,{rows:e,cols:i})=>((t,e)=>{const i=new Array(e.rows*e.cols).map((()=>[]));return[de].forEach((e=>{var o;let s=e.occurences.factor?Math.max(e.occurences.min,i.length/e.occurences.factor):e.occurences.min;for(;s>0;){const n=ue[t](i);i[n]=[...null!==(o=i[n])&&void 0!==o?o:[],Object.assign(Object.assign({},e),{name:e.id,team:t,id:se()})],s--}})),i})(t,{rows:e,cols:i}),Me=(t,e,i)=>{var o;return(null!==(o=t.pop())&&void 0!==o?o:[]).map((t=>Object.assign(Object.assign({},t),{row:e,col:i})))};class Re{constructor(t=4086,e=Uint32Array){this.capacity=t,this.capacity=t,this._keys=[],this._priorities=new e(t+1),this.length=0}clear(){this.length=0}bubbleUp(t){const e=this._keys[t],i=this._priorities[t];for(;t>1;){const e=t>>>1;if(this._priorities[e]<=i)break;this._keys[t]=this._keys[e],this._priorities[t]=this._priorities[e],t=e}this._keys[t]=e,this._priorities[t]=i}bubbleDown(t){const e=this._keys[t],i=this._priorities[t],o=1+(this.length>>>1),s=this.length+1;for(;t<o;){const e=t<<1;if(e>=s)break;let o=this._priorities[e],n=this._keys[e],r=e;const a=e+1;if(a<s){const t=this._priorities[a];t<o&&(o=t,n=this._keys[a],r=a)}if(o>=i)break;this._keys[t]=n,this._priorities[t]=o,t=r}this._keys[t]=e,this._priorities[t]=i}push(t,e=0){if(this.length===this.capacity)throw new Error("Heap has reached capacity, can't push new items");const i=this.length+1;this._keys[i]=t,this._priorities[i]=e,this.bubbleUp(i),this.length++}pop(){const t=this._keys[1];return this.length--,this.length>0&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1)),t}peekPriority(){return this._priorities[1]}peek(){return this._keys[1]}toString(){if(0===this.length)return"(empty queue)";const t=Array(this.length-1);for(let e=0;e<this.length;e++)t[e]=this._priorities[e+1];return`[${t.join(" ")}]`}get[Symbol.toStringTag](){return"Heapify"}*[Symbol.iterator](){for(let t=0;t<this.length;t++){const e=this._priorities[t+1],i=this._keys[t+1];yield[i,e]}}*keys(){for(let t=0;t<this.length;t++)yield this._keys[t+1]}*priorities(){for(let t=0;t<this.length;t++)yield this._priorities[t+1]}}const ze=t=>t.toPosition().toString();const Ue=(t,e,i,o,s)=>{const n=new Re;n.push(t,0);const r={},a={},l=[];let c=!1;if(r[ze(t)]=ze(t),a[ze(t)]=0,t.equals(e))return{path:[]};if(o(e))return{path:[]};for(;n.length>0;){const t=n.pop();if(t.equals(e)){c=!0;break}if(n.length>1e3)throw new Error("No what kinda path are you searching for?!");l.push(t.toPosition().toString());for(const c of t.neighbors(i).filter((t=>!r[ze(t)])).map((t=>{var e;return null!==(e=i.find((e=>e.equals(t))))&&void 0!==e?e:t}))){if(o(c))continue;l.some((t=>t===ze(c)))||l.push(ze(c));const i=a[ze(t)]+c.cost();s<i||(!a[ze(c)]||i<a[ze(c)])&&(a[ze(c)]=i,n.push(c,i+e.heuristic(c)),r[ze(c)]=t.toPosition().toString())}}const d=t.toPosition();if(!c)return{path:[],visited:l};let u=e.toPosition();const h=[];do{h.push(u),u=ie.fromString(r[u.toString()])}while(null!==u&&!u.equals(d));return{path:h.reverse(),visited:l}},Ne=dt("action/abort"),He=ut("player/update"),Be=dt("player/request/select"),Pe=ut("player/buildings/item/selected"),De=ut("player/item/moved"),Ie=ut("player/knights/created"),Le=ut("player/wagon/created"),Ye=ut("player/assets/loaded"),Ze=ut("turn/player/actions/hasLeft"),We=dt("turn/player/actions/none"),Ge=dt("map/hexagon/updated",{readOnce:!0}),Ke=ut("modes/move/activate"),Ve=ut("modes/move/activated"),qe=ut("modes/move/deactivate"),Xe=ut("modes/move/hovered-target"),Fe=ut("modes/move/end"),Je=ut("modes/build/lumberjack-small"),Qe=ut("modes/build/lumberjack-small/success"),ti=ut("modes/build/lumberjack-small/failed"),ei=ut("modes/build/mine-small"),ii=ut("modes/build/mine-small/success"),oi=ut("modes/build/mine-small/failed"),si=ut("modes/battle/activate"),ni=ut("modes/battle/active"),ri=ut("modes/battle/end"),ai=ut("modes/battle/deactivate"),li=ut("battle/started"),ci=ut("battle/dice/thrown"),di=ut("battle/player/attacked"),ui=ut("mill/takeover"),hi=ut("lumberjack/takeover"),vi=ut("mine/takeover"),gi=ut("modal/battle/open"),mi=ut("modal/dice-result/open"),fi=ut("turn/world/started"),pi=ut("turn/world/accepted"),bi=ut("turn/player/complete"),wi=ut("turn/world/complete"),yi=ut("resources/generated"),$i=ut("resources/generation/complete"),ki=ut("resources/summary"),xi=ut("resources/distribute"),Oi=ut("resources/distribute/request"),ji=ut("resources/distribute/updated"),_i=()=>({grain:100,iron:200,hay:0,wood:0,stone:0});function Si(t,e){if(!t||!t.map)return[];const i=t=>e===t.team,o=[];for(const e of t.map)for(const t of e)o.push(...t.elements.filter(i));return o}function Ai(t){var e,i,o,s,n;if(!t)return;return[...null!==(n=null===(s=null===(o=null===(i=null===(e=null===document||void 0===document?void 0:document.querySelector("the-mill"))||void 0===e?void 0:e.shadowRoot)||void 0===i?void 0:i.querySelector("world-map"))||void 0===o?void 0:o.shadowRoot)||void 0===s?void 0:s.querySelectorAll("hexagon-element"))&&void 0!==n?n:[]].find((e=>{var i,o;return null===(o=null===(i=e.shadowRoot)||void 0===i?void 0:i.querySelector("sprite-set"))||void 0===o?void 0:o.querySelector(`[id="${t.id}"]`)}))}document.deepQuerySelector=Ai;const Ei=()=>({grain:50,iron:0,hay:0,wood:50,stone:0});function Ti(t,e){return t.sprite.name===e}let Ci,Mi={},Ri=[],zi=[],Ui={};const Ni=t=>Object.assign({},Ui[t]),Hi=()=>Ui[Ci],Bi=t=>t.actions.current>0,Pi=({team:t})=>t===Ci;ct.on(Se,(async t=>{Ri=[],t.map.forEach(((t,e)=>{t.forEach(((t,i)=>{const o=new ie(e,i).toCube();t.terrain.movementCosts&&(o.costs=t.terrain.movementCosts),Ri.push(o)}))})),Mi=t,["green","red"].forEach((t=>{Ui[t]={resources:{hay:100,grain:200,iron:200,wood:100,stone:100}}})),await vt(Ae)})),ct.on(Ne,(async t=>{t&&(vt(qe),vt(ai))})),ct.on([Ae,Ee],(async()=>{await vt(fi)})),ct.on(fi,(async()=>{zi=[...Mi.teams],Ci=zi.pop(),await vt(pi,Ci)})),ct.on(xi,(async({team:t,resourcesToGenerate:e})=>{var i;if(null===(i=Ni(t))||void 0===i?void 0:i.resources){const i=Object.assign({},Ni(t).resources);Ui[t].resources=function(t,e){let i=Object.assign({},t),o=[...e],s=!0;for(;s;)s=!1,o=o.map((t=>{let e=t;return Object.entries(t.resources).forEach((o=>{var[n,r]=o,{generatedResource:a}=r,l=he(r,["generatedResource"]);Object.entries(l).every((([t,e])=>i[t]<=e))&&(s=!0,e=void 0,Object.entries(l).forEach((([t,e])=>{i[t]-=e})),i[n]+=a,vt(yi,t))})),e})).filter(Boolean);return i}(Ui[t].resources,e),vt($i,{team:t,before:i,after:Ui[t].resources})}})),ct.collect(yi,$i,(t=>{var e;vt(ki,null===(e=t[yi.name])||void 0===e?void 0:e.map((t=>({name:t.name,from:Object.values(t.resources).map((t=>{var e=he(t,["generatedResource"]);return Object.assign({},e)})),to:Object.keys(t.resources)}))))})),ct.on(pi,(async t=>{const e=Si(Mi,t);await vt(Ye,e);const i=null==e?void 0:e.find((t=>t.name===bo));me(i)&&vt(Be,{item:bo,row:i.row,col:i.col,payload:i}),setTimeout((()=>{var t;null===(t=Ai(i))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2),vt(He,Ni(t));const o=xe(Mi,t).reduce(((t,e)=>[...t,...Oe(e)]),[]);vt(ji,{team:t,resourcesToGenerate:o}),await vt(xi,{team:t,resourcesToGenerate:o})})),ct.on(Oi,(({team:t})=>{var e;const i=null===(e=xe(Mi,t))||void 0===e?void 0:e.reduce(((t,e)=>[...t,...Oe(e)]),[]);vt(ji,{team:t,resourcesToGenerate:i})})),ct.on(Be,(async t=>{await vt(Pe,Object.assign(Object.assign({},t),{item:"hexagon"})),await vt(Pe,Object.assign({},t)),await vt(Pe,Object.assign(Object.assign({},t),{item:"hexagon"}))})),ct.on(bi,(()=>{Ci=zi.pop(),void 0===Ci?vt(wi):vt(pi,Ci)})),ct.on(wi,(()=>{Mi.map.forEach((t=>{t.forEach((({elements:t})=>{((...t)=>{t.forEach((t=>{t.actions.current=t.actions.max}))})(...t.filter(fe))}))})),vt(fi)}));const Di=(t,e)=>{const i=Object.assign({},Ui[t].resources);for(const[t,o]of Object.entries(e)){if(i[t]<o)return!1;i[t]-=o}return Ui[t].resources=i,!0};ct.on(Ie,(async({row:t,col:e,team:i})=>{if(!Pi({team:i}))return;if(!Di(i,{grain:100,iron:200,hay:0,wood:0,stone:0}))return;const o=(({team:t,row:e,col:i})=>({id:se(),name:Ji,team:t,row:e,col:i,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10},dices:[Object.assign(Object.assign({},le(re.dices.standard)),{sides:[{value:3},{value:3},{value:3},{value:4},{value:5},{value:6}]}),Object.assign(Object.assign({},le(re.dices.mightyBlowOfBetrayal)),{sides:[{value:-3},{value:0},{value:0},{value:6},{value:12}]})]}))({row:t,col:e,team:i});Mi.map[t][e].elements.push(o),await Promise.all([vt(Ge,{row:t,col:e,elements:[...Mi.map[t][e].elements]}),vt(Ye,Si(Mi,i)),vt(He,Hi())]),vt(Be,{item:o.name,row:t,col:e,payload:o})})),ct.on(Le,(async({row:t,col:e,team:i})=>{if(!Pi({team:i}))return;if(!Di(i,{grain:50,iron:0,hay:0,wood:50,stone:0}))return;const o=(({team:t,row:e,col:i})=>({id:se(),name:eo,team:t,row:e,col:i,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10}}))({row:t,col:e,team:i});Mi.map[t][e].elements.push(o),await Promise.all([vt(Ge,{row:t,col:e,elements:[...Mi.map[t][e].elements]}),vt(Ye,Si(Mi,i)),vt(He,Hi())]),vt(Be,{item:o.name,row:t,col:e,payload:o})})),ct.on(Ze,(()=>{void 0===((t,e)=>{for(const i of t.map)for(const t of i){const i=t.elements.filter(fe).map((t=>t)).find((t=>t.team===e&&t.actions.current>0));if(i)return i}})(Mi,Ci)&&vt(We,!0)})),ct.on(Je,(async({position:t,asset:e})=>{const{elements:i,terrain:o}=Mi.map[t.row][t.col],{team:s}=e,n=i.findIndex((t=>"player-wagon"===t.name));if(Pi({team:e.team}))if("player-wagon"!==e.name||n<0)await vt(ti,{position:t,asset:e,reason:"No wagon on field"});else if(Ti(o,"forest"))if(i.some(ge))await vt(ti,{position:t,asset:e,reason:"There is already a building on the field"});else{const o=(({position:t,asset:e})=>Object.assign(Object.assign({id:"lumberjack-small",name:"lumberjack-small",team:e.team},t),{occurences:{min:1},resources:{wood:{generatedResource:50}}}))({position:t,asset:e});i.splice(n,1),i.unshift(o),await Promise.all([vt(Ge,Object.assign(Object.assign({},t),{elements:[...i]})),vt(Ye,Si(Mi,e.team)),vt(He,Hi()),vt(Qe,{position:t,asset:o})]),vt(Oi,{team:s})}else await vt(ti,{position:t,asset:e,reason:`No wood on field but ${o.sprite.name}`});else await vt(ti,{position:t,asset:e,reason:`Not the turn of the team ${e.team}`})})),ct.on(ei,(async({position:t,asset:e})=>{const{elements:i,terrain:o}=Mi.map[t.row][t.col],{team:s}=e,n=i.findIndex((t=>"player-wagon"===t.name));if(Pi({team:e.team}))if("player-wagon"!==e.name||n<0)await vt(oi,{position:t,asset:e,reason:"No wagon on field"});else if(Ti(o,"mountain"))if(i.some(ge))await vt(oi,{position:t,asset:e,reason:"There is already a building on the field"});else{const o=(({position:t,asset:e})=>Object.assign(Object.assign({id:"mine-small",name:"mine-small",team:e.team},t),{occurences:{min:1},resources:{stone:{generatedResource:50},iron:{generatedResource:50}}}))({position:t,asset:e});i.splice(n,1),i.unshift(o),await Promise.all([vt(Ge,Object.assign(Object.assign({},t),{elements:[...i]})),vt(Ye,Si(Mi,e.team)),vt(He,Hi()),vt(ii,{position:t,asset:o})]),vt(Oi,{team:s})}else await vt(oi,{position:t,asset:e,reason:`No mountain on field but ${o.sprite.name}`});else await vt(oi,{position:t,asset:e,reason:`Not the turn of the team ${e.team}`})}));const Ii=t=>Number.parseInt(t.toString(),10),Li=t=>{const{row:e,col:i}=t.toCoords();return Mi.map[e][i].elements.filter((t=>t.team!==(null==Yi?void 0:Yi.asset.name))).some(be)};let Yi,Zi;ct.on(Ke,(async t=>{function e(e){return function(t,e,i,o,s){return Ue(t,e,i,o,s).path.length>0}(new ie(Ii(t.start.row),Ii(t.start.col)).toCube(),new ie(Ii(e.position.row),Ii(e.position.col)).toCube(),Ri,Li,t.asset.movement.points)}Zi&&await vt(ai),Pi(t.asset)&&(Yi=Object.assign(Object.assign({},t),{inReach:Mi.map.reduce(((t,i)=>[...t,...i.filter(e).map((t=>t.position))]),[])}),await vt(Ve,t))})),ct.on(qe,(()=>{Yi=void 0})),ct.on(Xe,(async t=>{var e,i;if(!Yi)return;const o=new ie(Ii(Yi.start.row),Ii(Yi.start.col)).toCube(),s=new ie(Ii(t.row),Ii(t.col)).toCube(),n=Ue(o,s,Ri,Li,Yi.asset.movement.points).path;let r=t;Li(s)&&(r=null!==(i=null===(e=[...n].pop())||void 0===e?void 0:e.toCoords())&&void 0!==i?i:Yi.start),await vt(Ke,Object.assign(Object.assign({},Yi),{trail:n,end:r}))})),ct.on(Fe,(async t=>{var e,i;if(!Yi)return;if((null!==(i=null===(e=Yi.trail)||void 0===e?void 0:e.length)&&void 0!==i?i:0)<1)return;const{start:o,asset:s}=Yi;if(!Pi(s))return;if(void 0===s.actions&&console.error("asset.actions undefined",s),!Bi(s))return;if(ee(Yi.start,t))return void vt(qe);s.actions.current-=1;const n=[...Mi.map[o.row][o.col].elements];Mi.map[o.row][o.col].elements=[],n.forEach((e=>{e.id!==s.id?Mi.map[o.row][o.col].elements.push(Object.assign(Object.assign({},e),{row:o.row,col:o.col})):Mi.map[t.row][t.col].elements.push(Object.assign(Object.assign({},e),{row:t.row,col:t.col}))})),await vt(Ge,{row:o.row,col:o.col,elements:[...Mi.map[o.row][o.col].elements]}),await vt(Ge,{row:t.row,col:t.col,elements:[...Mi.map[t.row][t.col].elements]}),await vt(qe),await vt(De,{asset:s,location:t}),await vt(Ze)})),ct.on(si,(async t=>{Pi(t.asset)&&(Yi&&await vt(qe),Zi=Object.assign(Object.assign({},t),{range:new ie(t.start.row,t.start.col).toCube().range(1).map((t=>t.toPosition().toCoords()))}),vt(ni,Zi))})),ct.on(ri,(async t=>{if(!Zi||!Pi(Zi.asset))return;if(ee(Zi.start,t))return void vt(ai);const{row:e,col:i}=t,{asset:o}=Zi,s=[...Mi.map[e][i].elements].filter((t=>pe(t)&&t.team!==o.team));Bi(o)&&s.length>0&&(o.actions.current-=1,await vt(li,{location:t,attacker:[o],defender:[...s]})),vt(Ye,Si(Mi,o.team)),vt(ai),await vt(Ze)})),ct.on(ai,(()=>Zi=void 0)),ct.on(De,(async({asset:t,location:e})=>{if(!Pi(t))return;const{row:i,col:o}=e,s=[...Mi.map[i][o].elements].filter((e=>e.id!==t.id));for(const{building:i,hormone:o}of[{building:mo,hormone:ui},{building:$o,hormone:hi},{building:Oo,hormone:vi}]){const n=s.filter((e=>e.name===i&&e.team!==t.team));if(n.length>0&&pe(t)){const i={asset:n[0],transfered:{from:n[0].team,to:t.team},location:e,by:t,team:t.team};await vt(o,i)}}vt(Ye,Si(Mi,t.team)),await vt(Ze)})),[ui,hi,vi].forEach((t=>{ct.on(t,(({location:t,team:e,asset:i})=>{if(!Pi({team:e}))return;const{row:o,col:s}=t,n=[...Mi.map[o][s].elements];Mi.map[o][s].elements=[],n.forEach((t=>{t.id!==i.id?Mi.map[o][s].elements.push(t):Mi.map[o][s].elements.push(Object.assign(Object.assign({},t),{team:e}))})),vt(Ye,Si(Mi,e)),vt(Oi,{team:e})}))})),ct.on(li,(t=>{vt(gi,t)})),ct.on(ci,(t=>{if(!Pi(t.attacker.asset))return;const e=ce(t.attacker.dices);vt(di,{attacker:t.attacker.asset,defender:t.defender,damage:e,location:t.location})})),ct.on(di,(t=>{const{defender:e,damage:i,attacker:o}=t;i<0?o.health.current+=i:e.health.current-=i;const{row:s,col:n}=t.location,r=[...Mi.map[s][n].elements];Mi.map[s][n].elements=[],r.forEach((t=>{t.id===e.id?e.health.current>0&&Mi.map[s][n].elements.push(e):t.id===o.id?o.health.current>0&&Mi.map[s][n].elements.push(o):Mi.map[s][n].elements.push(t)})),vt(Ge,{row:s,col:n,elements:[...Mi.map[s][n].elements]}),vt(gi,void 0),vt(mi,{attacker:[o],defender:[e],location:t.location,result:i})})),window.location.hash.indexOf("log")>=0&&it(tt.INFO),window.location.hash.indexOf("trace")>=0&&it(tt.TRACE);const Wi=r`
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
`,Gi=r`
.inactive {
    opacity: 0.8;
    filter: grayscale(100%);
}`,Ki=r`
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
`,Vi=t=>r`
     ${t} {
        scrollbar-color:  #888 #f1f1f1;
        scrollbar-width: thin;
     }
`;$t("button-image",(t=>{const e=t.height?`height:${t.height};`:"";return R`<button style="${e}; background-image: url('${t.src}'), url('/assets/sidebar/btn_1.png')">
        <slot></slot>
    </button>`}),{styles:r`
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
    `,defaults:{src:"",height:""}}),$t("button-pure",(()=>R`<button>
        <slot></slot>
    </button>`),{styles:r`
    
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
    `});const qi=r`
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
`,Xi=r`
    header {
        position: relative;
        height: 2rem;
    }
    #close {
        position: absolute;
        right: 12px;
        font-size: 2rem;
    }
`,Fi=(t,e)=>{t.dispatchEvent(new CustomEvent(e))};$t("modal-window",(t=>t.open?R`
    <div id="background" @click="${()=>t.preventClose&&Fi(t,"close")}"></div>
    <div id="modal">
        <header>
            ${t.preventClose?R``:R`<button-pure id="close" @click="${()=>Fi(t,"close")}"><text-block size="large">X</text-block></button-pure>`}
            <slot name="header"></slot>
        </header>
        <div>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
    `:R``),{styles:[qi,Xi],defaults:{open:!1,preventClose:!1}}),$t("modal-container",(t=>{const{getState:e,publish:i}=Xt(t,!1);return R`
        <button-pure @click="${()=>i(!0)}"><slot></slot></button-pure>
        <modal-window .open=${e()} @close=${()=>i(!1)}>
            <slot slot="header" name="header"></slot>
            <slot name="body"></slot>
            <slot slot="footer" name="footer"></slot>
        </modal-window>
    `}));$t("text-block",(({size:t,type:e})=>R`<span class="${t} ${e}"><slot></slot></span>`),{styles:[r`
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
`,r`
    .inline {
        display: inline;
    }
    .paragraph {
        display: block;
    }
`],defaults:{size:"medium",type:"inline"}});$t("loading-bar",(({width:t})=>R`
    <div class="progress-bar">
        <span class="bar">
            ${"0%"===t?R``:R`<span class="progress" style="width: ${t};"></span>`}
        </span>
    </div>
    `),{styles:[r`
    
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
`],defaults:{width:"100%"}});$t("dice-roll",(({result:t})=>R`<div id="cube">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3">${t}</div>
        <div id="side4"></div>
        <div id="side5"></div>
        <div id="side6"></div>
    </div>`),{styles:r`
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
`,props:[{result:{type:Number}}]});const Ji="player-knight";var Qi=$t(Ji,(t=>{const{get:e,set:i}=Xt(t,"");return mt(t,pi,i),R`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/knight_${t.team}.png'"></div>`}),{styles:[Wi,Gi,r`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),to=Object.freeze({__proto__:null,name:Ji,default:Qi});const eo="player-wagon";var io=$t(eo,(t=>{const{getState:e,publish:i}=Xt(t,"");return mt(t,pi,i),R`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/wagon_${t.team}.png'"></div>`}),{styles:[Wi,Gi,r`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),oo=Object.freeze({__proto__:null,name:eo,default:io});$t("dice-selector",(t=>{var e;return R`${null===(e=t.dices)||void 0===e?void 0:e.map((e=>R`<div>
        <input type="radio" 
            @click=${()=>t.dispatchEvent(new CustomEvent("select",{detail:e}))}
            id="${e.name}" 
            name="dice" 
            value="${e.name}">
        <label for="${e.name}">
            <strong>${e.name}</strong> - ${e.story}
            <div class="sides" style="grid-template-columns: 1fr ${e.sides.map((()=>"1fr")).join(" ")};">
                <h5>Würfelergebnisse</h5>
                ${e.sides.map((t=>R`<div class="side">${t.value}</div>`))}
            </div>
        </label>
    </div>`))}`}),{styles:r`
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
const so=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class no extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.it=U,t.type!==so)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===U||null==t)return this.ft=void 0,this.it=t;if(t===z)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}no.directiveName="unsafeHTML",no.resultType=1;const ro=(t=>(...e)=>({_$litDirective$:t,values:e}))(no);async function ao(t){for(const e of t)await e()}const lo=(t,e)=>{var i,o;return[...null!==(i=e.none)&&void 0!==i?i:[],...null!==(o=e[t])&&void 0!==o?o:[]]};$t("sprite-set",(t=>{const{getState:e,publish:i}=Xt(t,void 0),{getState:o,publish:s}=Xt(t,void 0);return mt(t,Ge,(e=>t.row.toString()===(null==e?void 0:e.row.toString())&&t.col.toString()===(null==e?void 0:e.col.toString())),i),mt(t,pi,s),e()&&ao(lo(o(),t.triggers)).then((()=>vt(Pe,{item:"hexagon",row:t.row,col:t.col}))),qt(t,(()=>{t.addEventListener("click",(async()=>{ao(lo(o(),t.triggers))}))})),R`<slot></slot>`}),{defaults:{row:0,col:0,triggers:{}}}),$t("sprite-player-elements-grid",(()=>R`<slot></slot>`),{styles:r`
    slot {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
    }
    `});const co=(i,o,s)=>{const n={},r=null==i?void 0:i.map((i=>{var r,a,l,c;const d=Object.entries(Object.assign(Object.assign({},e),t)).find((([t,e])=>e.name===i.name)),u=Object.entries(Object.assign(Object.assign({},i),{name:void 0})).filter((([t,e])=>void 0!==e)).map((([t,e])=>`${t}="${e}"`)).join(" "),h=null!==(r=i.team)&&void 0!==r?r:"none";return n[h]=null!==(a=n[h])&&void 0!==a?a:[],n[h].push((()=>{var t;return vt(Pe,{item:null!==(t=null==d?void 0:d[1].name)&&void 0!==t?t:"",row:o,col:s,payload:Object.assign({},i)})})),R`${ro(`<${null!==(l=null==d?void 0:d[1].name)&&void 0!==l?l:"span"} ${u}></${null!==(c=null==d?void 0:d[1].name)&&void 0!==c?c:"span"}>`)}`}));return R`<sprite-set .triggers=${n} col="${s}" row="${o}">${r}</sprite-set>`};$t("fighter-info",(({player:t,row:e,col:i})=>R`<div class="sprite ${(null==t?void 0:t.health.current)<1?"dead":"alive"}">
            ${co(t?[t]:[],e,i)}
        </div>
        <div class="info">
            <h3>Gesundheit</h3>
            <loading-bar width="${(null==t?void 0:t.health.current)/(null==t?void 0:t.health.max)*100}%"></loading-bar>
            <p>${null==t?void 0:t.health.current} von ${null==t?void 0:t.health.max}</p>
        </div>`),{styles:[r`
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
        `],props:[{player:{type:Object},row:{type:Number},col:{type:Number}}]});const uo=r`
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
}`,ho=r`
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
`,vo=(t,e,i)=>`${function(t,e){var i,o,s;return e?ee(e.start,t)?"active start":e.end&&(null!==(o=null===(i=e.trail)||void 0===i?void 0:i.length)&&void 0!==o?o:0)<1&&ee(e.end,t)?"active unreachable":e.end&&ee(e.end,t)?"active end":e.trail&&e.trail.some((e=>ee(e,t)))?"active trail":(null===(s=e.inReach)||void 0===s?void 0:s.some((e=>ee(e,t))))?"inactive":"inactive unreachable":""}(t,e)} ${function(t,e){return e?ee(e.start,t)?"active start":e.end&&ee(e.end,t)?"active end":e.range&&e.range.some((e=>ee(e,t)))?"active trail":"inactive":""}(t,i)}`,go=(t,e,i)=>{e&&e.end&&ee(e.end,t)?function(t,e){e&&vt(Fe,t)}(t,e):i&&function(t,e){e&&vt(ri,t)}(t,i)};$t("hexagon-element",(t=>{var e,i,o;qt(t,(()=>{t.addEventListener("click",(()=>vt(Pe,{item:"hexagon",row:t.row,col:t.col})))}));const{row:s,col:n}=t,{get:r,set:a}=Xt(t,{elements:t.elements,row:s,col:n}),{get:l,set:c}=Xt(t,void 0),{get:d,set:u}=Xt(t,void 0);mt(t,Ge,(t=>(null==t?void 0:t.row.toString())===s.toString()&&(null==t?void 0:t.col.toString())===n.toString()),a),mt(t,Ve,c),mt(t,ni,u),mt(t,Fe,(()=>c(void 0))),mt(t,qe,(()=>c(void 0))),mt(t,ai,(()=>u(void 0)));const h=r();return R`<div 
      class="hexagon ${vo(t,l(),d())}" 
      @mouseover=${()=>{l()&&vt(Xe,{row:s,col:n})}}
      @click=${()=>(go(t,l(),d()),document.dispatchEvent(new CustomEvent("hello-world",{detail:{hello:"world"}})))}
      style="background-image:url(/assets/${null===(e=t.background)||void 0===e?void 0:e.file}.png); background-position: ${null===(i=t.background)||void 0===i?void 0:i.x}px ${null===(o=t.background)||void 0===o?void 0:o.y}px;">
      ${co(h.elements,t.row,t.col)}</div>`}),{styles:[uo,ho],defaults:{background:void 0,elements:[],col:0,row:0}}),$t("world-map",(t=>{var e;const{get:i,set:o}=Xt(t,void 0);return mt(t,Se,o),R`<div id="globe">${null===(e=i())||void 0===e?void 0:e.map.map(((t,e)=>R`<div class="row ${e%2==0?"push":""}" style="width: calc(${120*t.length}px + 20rem)">
                ${t.map(((t,i)=>R`<hexagon-element 
                        .background=${t.terrain.sprite} 
                        .elements="${t.elements}" 
                        row="${e}" col="${i}">
                    </hexagon-element>`))}
            </div>
            `))}</div>`}),{styles:r`
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
    }`});const mo="building-mill";var fo=$t(mo,(({team:t})=>R`<div style="background-image:url('/assets/windmill_complete_${null!=t?t:"none"}.png'"></div>`),{styles:[Wi,r`
        div {
            width: 80%;
            height: 80%;
        }
        `],defaults:{team:void 0}}),po=Object.freeze({__proto__:null,name:mo,default:fo});const bo="building-castle-small";var wo=$t(bo,(t=>{const{get:e,set:i}=Xt(t,"");return mt(t,pi,i),R`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/castle_small_${t.team}.png'"></div>`}),{styles:[Wi,Gi,r`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),yo=Object.freeze({__proto__:null,name:bo,default:wo});const $o="lumberjack-small";var ko=$t($o,(t=>{const{get:e,set:i}=Xt(t,"");return mt(t,pi,i),R`<div class="${e()===t.team?"active":"inactive"}" style="margin: 0; background-image:url('/assets/lumberjack_small_${t.team}.png'); background-size: auto; width: 100%; height: 100%;"></div>`}),{styles:[Wi,Gi,r`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),xo=Object.freeze({__proto__:null,name:$o,default:ko});const Oo="mine-small";var jo=$t(Oo,(t=>{const{get:e,set:i}=Xt(t,"");return mt(t,pi,i),R`<div class="${e()===t.team?"active":"inactive"}" style="margin: 0; background-image:url('/assets/mine_small_${t.team}.png'); background-size: auto; width: 100%; height: 100%;"></div>`}),{styles:[Wi,Gi,r`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),_o=Object.freeze({__proto__:null,name:Oo,default:jo});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const So=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ao=Symbol(),Eo=new Map;class To{constructor(t,e){if(this._$cssResult$=!0,e!==Ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Eo.get(this.cssText);return So&&void 0===t&&(Eo.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Co=t=>new To("string"==typeof t?t:t+"",Ao),Mo=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new To(i,Ao)},Ro=So?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Co(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var zo;const Uo=window.trustedTypes,No=Uo?Uo.emptyScript:"",Ho=window.reactiveElementPolyfillSupport,Bo={toAttribute(t,e){switch(e){case Boolean:t=t?No:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Po=(t,e)=>e!==t&&(e==e||t==t),Do={attribute:!0,type:String,converter:Bo,reflect:!1,hasChanged:Po};class Io extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=Do){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Do}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(Ro(t))}else void 0!==t&&e.push(Ro(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{So?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=Do){var o,s;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(s=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==s?s:Bo.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,o,s;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),a=t.converter,l=null!==(s=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==s?s:Bo.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Po)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Lo;Io.finalized=!0,Io.elementProperties=new Map,Io.elementStyles=[],Io.shadowRootOptions={mode:"open"},null==Ho||Ho({ReactiveElement:Io}),(null!==(zo=globalThis.reactiveElementVersions)&&void 0!==zo?zo:globalThis.reactiveElementVersions=[]).push("1.3.1");const Yo=globalThis.trustedTypes,Zo=Yo?Yo.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wo=`lit$${(Math.random()+"").slice(9)}$`,Go="?"+Wo,Ko=`<${Go}>`,Vo=document,qo=(t="")=>Vo.createComment(t),Xo=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Fo=Array.isArray,Jo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qo=/-->/g,ts=/>/g,es=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,is=/'/g,os=/"/g,ss=/^(?:script|style|textarea|title)$/i,ns=Symbol.for("lit-noChange"),rs=Symbol.for("lit-nothing"),as=new WeakMap,ls=Vo.createTreeWalker(Vo,129,null,!1),cs=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=Jo;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===Jo?"!--"===l[1]?r=Qo:void 0!==l[1]?r=ts:void 0!==l[2]?(ss.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=es):void 0!==l[3]&&(r=es):r===es?">"===l[0]?(r=null!=s?s:Jo,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?es:'"'===l[3]?os:is):r===os||r===is?r=es:r===Qo||r===ts?r=Jo:(r=es,s=void 0);const u=r===es&&t[e+1].startsWith("/>")?" ":"";n+=r===Jo?i+Ko:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+Wo+u):i+Wo+(-2===c?(o.push(void 0),e):u)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==Zo?Zo.createHTML(a):a,o]};class ds{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[l,c]=cs(t,e);if(this.el=ds.createElement(l,i),ls.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=ls.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(Wo)){const i=c[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(Wo),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?ms:"?"===e[1]?ps:"@"===e[1]?bs:gs})}else a.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(ss.test(o.tagName)){const t=o.textContent.split(Wo),e=t.length-1;if(e>0){o.textContent=Yo?Yo.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],qo()),ls.nextNode(),a.push({type:2,index:++s});o.append(t[e],qo())}}}else if(8===o.nodeType)if(o.data===Go)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(Wo,t+1));)a.push({type:7,index:s}),t+=Wo.length-1}s++}}static createElement(t,e){const i=Vo.createElement("template");return i.innerHTML=t,i}}function us(t,e,i=t,o){var s,n,r,a;if(e===ns)return e;let l=void 0!==o?null===(s=i._$Cl)||void 0===s?void 0:s[o]:i._$Cu;const c=Xo(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=us(t,l._$AS(t,e.values),l,o)),e}class hs{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Vo).importNode(i,!0);ls.currentNode=s;let n=ls.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new vs(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new ws(n,this,t)),this.v.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(n=ls.nextNode(),r++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class vs{constructor(t,e,i,o){var s;this.type=2,this._$AH=rs,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=us(this,t,e),Xo(t)?t===rs||null==t||""===t?(this._$AH!==rs&&this._$AR(),this._$AH=rs):t!==this._$AH&&t!==ns&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return Fo(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==rs&&Xo(this._$AH)?this._$AA.nextSibling.data=t:this.k(Vo.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=ds.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new hs(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=as.get(t.strings);return void 0===e&&as.set(t.strings,e=new ds(t)),e}S(t){Fo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new vs(this.A(qo()),this.A(qo()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class gs{constructor(t,e,i,o,s){this.type=1,this._$AH=rs,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=rs}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=us(this,t,e,0),n=!Xo(t)||t!==this._$AH&&t!==ns,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=us(this,o[i+r],e,r),a===ns&&(a=this._$AH[r]),n||(n=!Xo(a)||a!==this._$AH[r]),a===rs?t=rs:t!==rs&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.C(t)}C(t){t===rs?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ms extends gs{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===rs?void 0:t}}const fs=Yo?Yo.emptyScript:"";class ps extends gs{constructor(){super(...arguments),this.type=4}C(t){t&&t!==rs?this.element.setAttribute(this.name,fs):this.element.removeAttribute(this.name)}}class bs extends gs{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=us(this,t,e,0))&&void 0!==i?i:rs)===ns)return;const o=this._$AH,s=t===rs&&o!==rs||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==rs&&(o===rs||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ws{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){us(this,t)}}const ys=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $s,ks;null==ys||ys(ds,vs),(null!==(Lo=globalThis.litHtmlVersions)&&void 0!==Lo?Lo:globalThis.litHtmlVersions=[]).push("2.2.1");class xs extends Io{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new vs(e.insertBefore(qo(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return ns}}xs.finalized=!0,xs._$litElement$=!0,null===($s=globalThis.litElementHydrateSupport)||void 0===$s||$s.call(globalThis,{LitElement:xs});const Os=globalThis.litElementPolyfillSupport;null==Os||Os({LitElement:xs}),(null!==(ks=globalThis.litElementVersions)&&void 0!==ks?ks:globalThis.litElementVersions=[]).push("3.2.0");const js=t=>"object"==typeof t&&null!==t,_s=(t,e=1)=>{const i=[];let o="";for(let s=0;s<t.length;s++){const n=t[s];if(";"===n)i.push(o.trim()),o="";else if("@"===n&&""===o.trim()){const{node:o,endIndex:n}=Ss(t.substr(s),e+1);i.push(o),s+=n}else if("&"===n&&""===o.trim()){const{node:o,endIndex:n}=Ss(t.substr(s),e+1);i.push(o),s+=n}else{if("}"===n)return""!==o.trim()&&i.push(o.trim()),{val:i,endIndex:s-1};o+=n}}return{val:i,endIndex:t.length-1}},Ss=(t,e=0)=>{const i={};let o="STATE_KEY",s="STATE_KEY",n="",r=0;for(let l=0;l<t.length;l++){const c=t[l];if("}"===c&&e>0)return{node:i,endIndex:l};if("NODE_AT_GROUP_VALUE"===o||"}"!==c)switch("/"===c&&"*"===t[l+1]&&(s=o,o="COMMENT_START",l+=2),o){case"COMMENT_START":"*"===c&&"/"===t[l+1]&&(o=s,l+=2,r=l);break;case"STATE_KEY":if(""===n.trim()&&"@"===c.trim())o="NODE_AT_GROUP_KEY",n+=c.trim();else if("{"===c)o="STATE_VALUE",n=n.trim(),i[n]=i[n]||[];else{if(":"===c&&" "===t[l+1]){l=r;const{val:i,endIndex:o}=_s(t.substr(l),e+1);return{node:i,endIndex:l+o}}n+=c}break;case"STATE_VALUE":const{val:d,endIndex:u}=_s(t.substr(l),e+1);l+=u,i[n]=[...i[n],...d],o="STATE_KEY",n="",r=l;break;case"NODE_AT_GROUP_KEY":";"===c?(i[n]=void 0,n="",r=l,o="STATE_KEY"):"{"===c?(n=n.trim(),a(Ss(t.substr(l+1),e+1)),o="NODE_AT_GROUP_VALUE"):n+=c;break;case"NODE_AT_GROUP_VALUE":if(""===c.trim())break;"}"!==c?a(Ss(t.substr(l),e+1)):(n="",r=l,o="STATE_KEY")}function a(t){i[n.trim()]=[...i[n]||[],...Array.isArray(t.node)?t.node:[t.node]],l+=t.endIndex+1}}return{node:i,endIndex:t.length}};function As(t){return((t,e="")=>{const i={},o=(t,e="")=>(e=e.indexOf(",")>-1&&0!==e.indexOf(":is")?`:is(${e})`:e,Object.entries(t).map((([t,s])=>0===(t=(t=t.replace(/\@nest/gi,"")).replace(/\&/gi,e)).indexOf("@media")?(i[t]=i[t]||"",i[t]+=s?s.filter(js).reduce(((t,i)=>t+`${o(i,e)} `),""):null,""):0===t.indexOf("@")?` ${t} { ${s.filter((t=>!js(t))).join(";")}${s.filter(js).map((e=>o(e,t))).join(" ")} }`:s?`${t} { ${s.filter((t=>!js(t))).join(";")} } ${s.filter(js).map((e=>o(e,t))).join(" ")}`:`${t.trim()};`)).join("").trim());return o(t,e)+Object.entries(i).reduce(((t,[e,i])=>t+(i?`${e} { ${i.trimEnd()} }`:`${e};`))," ").trimEnd()})(Ss(t).node)}const Es=(t,...e)=>Mo`${Co(function(t,...e){let i=t[0];for(let o=0;o<e.length;o++)i+=e[o]+t[o+1];return console.log(As(i)),As(i)}(t,...e))}`,Ts={hay:0,iron:0,grain:0,wood:0,stone:0};var Cs=Ei,Ms=_i,Rs=()=>Object.assign(Object.assign({},Ts),{stone:4,wood:2,grain:1}),zs=()=>Object.assign(Object.assign({},Ts),{wood:500,grain:500,stone:500}),Us=()=>Object.assign(Object.assign({},Ts),{stone:1e3,iron:1e3,grain:1e3});const Ns=r`
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
  `;$t("health-bar",(({health:{current:t,max:e}})=>R`<loading-bar id="health" width="${t/e*100}%"></loading-bar>`));const Hs=t=>parseInt(t.toString(),10),Bs=Es`
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
`;console.log(Bs);const Ps=(t,e)=>R`
    ${e.hay>0?R`<resource-counter
          count="${e.hay}"
          class="${t.hay>=e.hay?"enough":"lack"}"
        >
          <resource-hay></resource-hay>
        </resource-counter>`:R``}
    ${e.grain>0?R`<resource-counter
          count="${e.grain}"
          class="${t.grain>=e.grain?"enough":"lack"}"
        >
          <resource-grain></resource-grain>
        </resource-counter>`:R``}
    ${e.wood>0?R`<resource-counter
          count="${e.wood}"
          class="${t.wood>=e.wood?"enough":"lack"}"
        >
          <resource-wood></resource-wood>
        </resource-counter>`:R``}
    ${e.stone>0?R`<resource-counter
          count="${e.stone}"
          class="${t.stone>=e.stone?"enough":"lack"}"
        >
          <resource-stone></resource-stone>
        </resource-counter>`:R``}
    ${e.iron>0?R`<resource-counter
          count="${e.iron}"
          class="${t.iron>=e.iron?"enough":"lack"}"
        >
          <resource-iron></resource-iron>
        </resource-counter>`:R``}
  `;$t("sidebar-castle",(t=>{var e;const{selected:{payload:i,row:o,col:s}}=t,{team:n,health:r,actions:a}=i,l={row:Hs(o),col:Hs(s)},{get:c,set:d}=Xt(t,void 0);mt(t,He,d);const{resources:u}=null!==(e=c())&&void 0!==e?e:{resources:{}};return R`
      <header>
        <building-castle-small id="castle" team="${n}"></building-castle-small>
        <health-bar id="health" .health="${r}"></health-bar>
        <stats-bar id="stats" .health="${r}" .actions="${a}"></stats-bar>
        <button-attack id="attack" .actions="${a}" .asset="${i}" .position="${l}"></button-attack>
      </header>
      <h3>${ae(re.castle.build)}</h3>
      <div class="container">
        <button-image
          height="35px"
          src="/assets/knight_${n}.png"
          title="${ae(re.properties.actions.build.knight)}"
          @click=${async()=>await vt(Ie,{team:n,row:o,col:s})}
        >
          ${Ps(u,Ms())}
        </button-image>
        <button-image
          height="35px"
          src="/assets/wagon_${n}.png"
          title="${ae(re.properties.actions.build.wagon)}"
          @click=${async()=>await vt(Le,{team:n,row:o,col:s})}
        >
          ${Ps(u,Cs())}
        </button-image>
        <button-image height="35px" 
          title="${ae(re.properties.actions.build.iron)}"
          src="/assets/resources/iron.png">
          ${Ps(u,Rs())}
        </button-image>
        <button-image height="35px" 
          title="${ae(re.properties.actions.build.castle_medium)}"
          src="/assets/castle_medium_${n}.png">
          ${Ps(u,zs())}
        </button-image>
        <button-image height="35px" 
          title="${ae(re.properties.actions.build.castle_large)}"
          src="/assets/castle_large_${n}.png">
          ${Ps(u,Us())}
        </button-image>
      </div>`}),{styles:[Ns,Bs],defaults:{selected:{payload:{id:"",name:bo,team:"",health:{current:0,max:0},actions:{current:0,max:0}},col:0,row:0}}});$t("sidebar-knight",(t=>{const{selected:{payload:e,row:i,col:o}}=t,{health:s,actions:n}=e,r={row:Hs(i),col:Hs(o)};return R`
    <h3>${ae(re.knight)}</h3>
    <div class="container">
        <img id="knight" src="/assets/knight_${e.team}.png">
        <health-bar id="health" .health="${s}"></health-bar>
        <stats-bar id="stats" .health="${s}" .actions="${n}"></stats-bar>
        <button ?disabled=${n.current<1} id="move" title="${ae(re.properties.actions.move)}" @click=${()=>vt(Ke,{asset:Object.assign({},e),start:r})}>🦵</button>
        <button-attack id="attack" .actions="${n}" .asset="${e}" .position="${r}"></button-attack>
        <button ?disabled=${n.current<1} id="fortify" title="${ae(re.properties.actions.fortify)}" >🏰</button>
    </div>`}),{styles:[Ns,r`
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
`],props:[{selected:{type:Object}}]});const Ds=r`
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
`;ct.on(Qe,((...t)=>console.log("BuildLumberjackSmallSuccess",...t))),ct.on(ti,console.error),ct.on(Je,((...t)=>console.log("BuildLumberjackSmall",...t))),$t("sidebar-wagon",(t=>{const{selected:{payload:e,row:i,col:o}}=t,{health:s,actions:n}=e,r={row:Hs(i),col:Hs(o)};return R`
    <h3>${ae(re.wagon)}</h3>
    <div class="container">
        <img id="wagon" src="/assets/wagon_${e.team}.png">
        <health-bar id="health" .health="${s}"></health-bar>
        <stats-bar id="stats" .health="${s}" .actions="${n}"></stats-bar>
        <button ?disabled=${n.current<1} id="move"  title="${ae(re.properties.actions.move)}" @click=${()=>vt(Ke,{asset:Object.assign({},e),start:r})}>🦵</button>
        <button ?disabled=${n.current<1} id="build_lumberjack" title="${ae(re.properties.actions.build.lumberjack_small)}" @click=${()=>vt(Je,{asset:Object.assign({},e),position:r})}>
            <img id="build_lumberjack_small" src="/assets/lumberjack_small_${e.team}.png">
        </button>
        <button ?disabled=${n.current<1} id="build_mine" title="${ae(re.properties.actions.build.mine_small)}" @click=${()=>vt(ei,{asset:Object.assign({},e),position:r})}>
            <img id="build_mine_small" src="/assets/mine_small_${e.team}.png">
        </button>
        <button ?disabled=${n.current<1} id="load"  title="${ae(re.properties.actions.load)}">📦</button>
    </div>`}),{styles:[Ds],props:[{selected:{type:Object}}]}),$t("stats-bar",(({health:t,actions:e})=>R`${ro(ae(re.properties.life,t.current,t.max))}<br>
    ${ro(ae(re.properties.actions,e.current,e.max))}`)),$t("button-attack",(({actions:t,asset:e,position:i})=>R`<button ?disabled=${t.current<1} id="attack" title="${ae(re.properties.actions.attack)}" @click=${()=>vt(si,{asset:Object.assign({},e),start:i})}>⚔</button>
    `));const Is=t=>({position:t?new ie(null==t?void 0:t.row,null==t?void 0:t.col):void 0,elements:t?[{item:t.item,payload:t.payload}]:[],dirty:!1});$t("controls-sidebar",(async t=>{const{get:e,set:i}=Xt(t,void 0);mt(t,Pe,i);const o=e(),{get:s,set:n}=Xt(t,Is(o)),r=s();return!r.dirty&&o&&new ie(o.row,o.col).equals(r.position)?n(Object.assign(Object.assign({},r),{elements:[...r.elements,{item:o.item,payload:o.payload}],dirty:"hexagon"===o.item})):n(Is(o)),qt(t,(()=>{setTimeout((()=>{vt(Ee)}),1)})),R`
        ${s().elements.map((t=>{var e,i,o,n,r,a;switch(t.item){case bo:return R`<sidebar-castle 
                        .selected="${{row:null===(e=s().position)||void 0===e?void 0:e.row,col:null===(i=s().position)||void 0===i?void 0:i.col,payload:t.payload}}">
                    </sidebar-castle>`;case Ji:return R`<sidebar-knight
                        .selected="${{row:null===(o=s().position)||void 0===o?void 0:o.row,col:null===(n=s().position)||void 0===n?void 0:n.col,payload:t.payload}}">
                    </sidebar-knight>`;case eo:return R`<sidebar-wagon
                        .selected="${{row:null===(r=s().position)||void 0===r?void 0:r.row,col:null===(a=s().position)||void 0===a?void 0:a.col,payload:t.payload}}">
                    </sidebar-wagon>`;default:case bo:return R``}}))}
    `}),{styles:r`:host { 
        position: absolute;
        display: block;
        min-width: 200px;
        width: 20%;
        right: 20px;
        top: 20px;
        z-index: 2;
    }`}),$t("modal-battle",(t=>{var e,i;const{get:o,set:s}=Xt(t,void 0),{get:n,set:r}=Xt(t,void 0);return mt(t,gi,s),R`
   <modal-window 
        .open=${!!o()} 
        preventClose>
        <h1 slot="header">Kampf beginnt!</h1>
        <div class="body">
        ${null===(e=o())||void 0===e?void 0:e.attacker.map((t=>{const e=t;return R`
                    <div>
                        <fighter-info 
                            .player=${e} 
                            row="${o().location.row}" 
                            col="${o().location.col}">
                        </fighter-info>
                        <h3>Wähle deine Waffe</h3>
                        <div class="dices">
                            <dice-selector .dices="${e.dices}" @select="${t=>r(t.detail)}"></dice-selector>
                        </div>
                    </div>
                `}))}${null===(i=o())||void 0===i?void 0:i.defender.map((t=>R`
                    <div>
                        <fighter-info 
                            .player=${t} 
                            row="${o().location.row}" 
                            col="${o().location.col}">
                        </fighter-info>
                    </div>
                `))}
        </div>
        <p slot="footer">
            <button @click="${()=>{var t,e;return vt(ci,{attacker:{asset:null===(t=o())||void 0===t?void 0:t.attacker[0],dices:[n()]},defender:null===(e=o())||void 0===e?void 0:e.defender[0],location:{row:o().location.row,col:o().location.col}})}}" ?disabled="${void 0===n()}">Würfeln</button>
        </p>
    </modal-window>`}),{styles:[Es`.body {
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
        `]}),$t("modal-dice-result",(t=>{var e,i;const{get:o,set:s}=Xt(t,void 0);return mt(t,mi,s),R`
   <modal-window 
        .open=${!!o()} 
        @close=${()=>s(void 0)}>
        <h1 slot="header">Gewürfelt!</h1>
        <div class="body">
        ${null===(e=o())||void 0===e?void 0:e.attacker.map((t=>R`
                    <div class="attacker">
                        <fighter-info 
                            .player=${t} 
                            row="${o().location.row}" 
                            col="${o().location.col}">
                        </fighter-info>
                    </div>
                `))}${null===(i=o())||void 0===i?void 0:i.defender.map((t=>R`
                    <div class="defender">
                        <fighter-info 
                            .player=${t} 
                            row="${o().location.row}" 
                            col="${o().location.col}">
                        </fighter-info>
                    </div>
                `))}
        ${o()?R`<dice-roll class="dice" result="${o().result}"></dice-roll>`:R``}
        </div>

        <p slot="footer">
        </p>
    </modal-window>`}),{styles:[r`
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
        `]}),$t("modal-mill-taken",(t=>{var e,i,o,s,n;const{get:r,set:a}=Xt(t,void 0);return mt(t,ui,a),R`
    <modal-window 
         .open=${!!r()} 
         @close=${()=>a(void 0)}>
         <h1 slot="header">Mühle übernommen!</h1>
         <div class="body">
            <div class="by">
                <fighter-info 
                    .player=${null===(e=r())||void 0===e?void 0:e.by} 
                    .row="${null===(i=r())||void 0===i?void 0:i.location.row}" 
                    .col="${null===(o=r())||void 0===o?void 0:o.location.col}">
                </fighter-info>
            </div>
            <div class="mills">
                <building-mill .team="${null===(s=r())||void 0===s?void 0:s.transfered.to}" class="after"></building-mill>
                <building-mill .team="${null===(n=r())||void 0===n?void 0:n.transfered.from}" class="before"></building-mill>
            </div>
         </div>
         <p slot="footer">
         </p>
     </modal-window>`}),{styles:r`
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
    `}),$t("modal-no-more-turns",(t=>{const{getState:e,publish:i}=Xt(t,void 0);return mt(t,We,i),R`
   <modal-window 
        .open=${!!e()} 
        preventClose>
        <h1 slot="header">Keine Aktionen übrig.</h1>
        <div class="body">
            Du hast keine Aktionen mehr übrig. Willst du weiter geben, oder noch rum schauen?
        </div>
        <p slot="footer">
            <button @click="${()=>(vt(bi),i(!1))}">Zug beenden</button>
            <button @click="${()=>i(!1)}">Noch rumschauen</button>
        </p>
    </modal-window>`}),{styles:[r`
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
        `]}),$t("modals-all",(()=>R`
    <modal-no-more-turns></modal-no-more-turns>
    <modal-battle></modal-battle>
    <modal-dice-result></modal-dice-result>
    <modal-mill-taken></modal-mill-taken>`)),$t("footer-element",(i=>{const{get:o,set:s}=Xt(i,void 0),{get:n,set:r}=Xt(i,[]);return mt(i,pi,s),mt(i,Ye,r),R`<footer class="${o()}">
    <div class="main ">
        ${((i,o="")=>{const s=null==i?void 0:i.map((i=>{var s,n;const r=Object.entries(Object.assign(Object.assign({},e),t)).find((([t,e])=>e.name===i.name)),a=Object.entries(Object.assign(Object.assign({},i),{name:void 0})).filter((([t,e])=>void 0!==e)).map((([t,e])=>`${t}="${e}"`)).join(" "),l=me(i)?{row:i.row,col:i.col}:{row:0,col:0};return R`<div
            @click="${()=>{vt(Be,Object.assign(Object.assign({item:i.name},l),{payload:i})),setTimeout((()=>{var t;null===(t=Ai(i))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            @mouseover="${()=>{setTimeout((()=>{var t;null===(t=Ai(i))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            style="position:relative; cursor: pointer; width: 120px;${o};">
                ${ro(`<${null!==(s=null==r?void 0:r[1].name)&&void 0!==s?s:"span"} ${a} style="${o};"></${null!==(n=null==r?void 0:r[1].name)&&void 0!==n?n:"span"}>`)}
        </div>`}));return R`<sprite-player-elements-grid>${s}</sprite-player-elements-grid>`})(n().sort(((t,e)=>t.name.localeCompare(e.name))).filter((t=>!fe(t)||t.actions.current>0)),"width: 10vh; height: 10vh;")}
    </div>
    <div class="action">
        <button-pure @click="${()=>vt(bi)}">
            <text-block type="paragraph" size="x-large">⌛</text-block> Zug beenden
        </button-pure>
    </div>
</footer>`}),{styles:[Ki,Vi(r`footer .main`),r`
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
    }`]});const Ls=r`
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
`;var Ys;$t("resource-grain",(()=>R`<div title="${ae(ne.grain)}"></div>`),{styles:[r`
        :host {
          background-image: url("/assets/resources/grain.png");
        }
      `,Ls]}),$t("resource-stone",(()=>R`<div title="${ae(ne.stone)}"></div>`),{styles:[r`
        :host {
          background-image: url("/assets/resources/stone.png");
        }
      `,Ls]}),$t("resource-iron",(()=>R`<div title="${ae(ne.iron)}"></div>`),{styles:[r`
        :host {
          background-image: url("/assets/resources/iron.png");
        }
      `,Ls]}),$t("resource-wood",(()=>R`<div title="${ae(ne.log)}"></div>`),{styles:[r`
        :host {
          background-image: url("/assets/resources/log.png");
        }
      `,Ls]}),$t("resource-hay",(()=>R`<div title="${ae(ne.hay)}"></div>`),{styles:[r`
        :host {
          background-image: url("/assets/resources/hay.png");
        }
      `,Ls]}),$t("resource-counter",(({count:t,collect:e})=>R`
        <slot></slot>
        ${t} ${e?R`<span>(+${e})</span>`:""}
    `),{styles:[r`
        :host {
            font-size: 4vh;
        }
        span {
            font-size: smaller;
        }
        `],defaults:{count:0,collect:void 0}}),$t("header-element",(t=>{var e,i,o,s,n,r,a,l;const{get:c,set:d}=Xt(t,void 0),{get:u,set:h}=Xt(t,void 0),{get:v,set:g}=Xt(t,void 0);mt(t,pi,d),mt(t,He,h),mt(t,ji,g);const m=null!==(e=u())&&void 0!==e?e:{resources:{}},f=(t,e,i)=>(t[e]=(t[e]||0)+i,t),p=null!==(o=null===(i=v())||void 0===i?void 0:i.resourcesToGenerate.reduce(((t,e)=>{var i,o;for(const s of ve)t=f(t,s,null!==(o=null===(i=e.resources[s])||void 0===i?void 0:i.generatedResource)&&void 0!==o?o:0);return t}),{}))&&void 0!==o?o:{};return R`<header class="${c()}">
        <resource-counter title="${ae(ne.hay)}" count="${m.resources.hay}" collect=${null!==(s=p.hay)&&void 0!==s?s:0}>
            <resource-hay></resource-hay>
        </resource-counter>
        <resource-counter title="${ae(ne.grain)}" count="${m.resources.grain}" collect=${null!==(n=p.grain)&&void 0!==n?n:0}>
            <resource-grain></resource-grain>
        </resource-counter>
        <resource-counter title="${ae(ne.stone)}" count="${m.resources.stone}" collect=${null!==(r=p.stone)&&void 0!==r?r:0}>
            <resource-stone></resource-stone>
        </resource-counter>
        <resource-counter title="${ae(ne.iron)}" count="${m.resources.iron}" collect=${null!==(a=p.iron)&&void 0!==a?a:0}>
            <resource-iron></resource-iron>
        </resource-counter>
        <resource-counter title="${ae(ne.log)}" count="${m.resources.wood}" collect=${null!==(l=p.wood)&&void 0!==l?l:0}>
            <resource-wood></resource-wood>
        </resource-counter>
    </header>`}),{styles:Es`
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
    }`}),null===(Ys=document.querySelector("body"))||void 0===Ys||Ys.addEventListener("keyup",(function(t){"Escape"===t.key&&vt(Ne,!0)})),$t("the-mill",(()=>((async({rows:t,cols:e})=>{const i=Te({rows:t,cols:e}),o=Ce("green",{rows:t,cols:e}),s=Ce("red",{rows:t,cols:e}),n=Ft(0,t-1).map((t=>Ft(0,e-1).map((e=>({position:new ie(t,e),terrain:_e(),elements:[...Me(i,t,e),...Me(o,t,e),...Me(s,t,e)]})))));await vt(Se,{map:n,teams:["red","green"]})})({rows:10,cols:10}),R`
    <controls-sidebar>sidebar</controls-sidebar>
    <map>
        <header-element>header</header-element>
        <world-map></world-map>
        <footer-element>
        </footer-element>
        <modals-all></modals-all>
    </map>

    `)),{styles:[Ki,Vi(r`world-map`),Vi(r`controls-sidebar`),r`
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
    `]});const Zs=window.location.search.substring(1).split("&").reduce(((t,e)=>{const[i,o]=e.split("=");return t[i]=o,t}),{});document.documentElement.lang=Zs.lang||"en";export{e as buildings,to as knight,t as player,oo as wagon};
//# sourceMappingURL=the-mill.js.map
