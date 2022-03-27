var e=Object.freeze({__proto__:null,get knight(){return di},get wagon(){return vi}}),t=Object.freeze({__proto__:null,get mill(){return _i},get castleSmall(){return Ai},get lumberjackSmall(){return Ci},get mineSmall(){return Hi}});
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
 */;var c;const d=window.trustedTypes,u=d?d.emptyScript:"",h=window.reactiveElementPolyfillSupport,v={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},g=(e,t)=>t!==e&&(t==t||e==e),m={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:g};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const i=this._$Eh(o,t);void 0!==i&&(this._$Eu.set(i,o),e.push(i))})),e}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eh(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{o?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ES(e,t,o=m){var i,n;const r=this.constructor._$Eh(e,o);if(void 0!==r&&!0===o.reflect){const s=(null!==(n=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:v.toAttribute)(t,o.type);this._$Ei=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Ei=null}}_$AK(e,t){var o,i,n;const r=this.constructor,s=r._$Eu.get(e);if(void 0!==s&&this._$Ei!==s){const e=r.getPropertyOptions(s),a=e.converter,l=null!==(n=null!==(i=null===(o=a)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:v.fromAttribute;this._$Ei=s,this[s]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,o){let i=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:f}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.3.1");const b=globalThis.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,k=`<${$}>`,x=document,O=(e="")=>x.createComment(e),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,_=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,A=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,C=/"/g,z=/^(?:script|style|textarea|title)$/i,R=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),H=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),U=new WeakMap,B=x.createTreeWalker(x,129,null,!1);class P{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let n=0,r=0;const s=e.length-1,a=this.parts,[l,c]=((e,t)=>{const o=e.length-1,i=[];let n,r=2===t?"<svg>":"",s=E;for(let t=0;t<o;t++){const o=e[t];let a,l,c=-1,d=0;for(;d<o.length&&(s.lastIndex=d,l=s.exec(o),null!==l);)d=s.lastIndex,s===E?"!--"===l[1]?s=S:void 0!==l[1]?s=A:void 0!==l[2]?(z.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=T):void 0!==l[3]&&(s=T):s===T?">"===l[0]?(s=null!=n?n:E,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?T:'"'===l[3]?C:M):s===C||s===M?s=T:s===S||s===A?s=E:(s=T,n=void 0);const u=s===T&&e[t+1].startsWith("/>")?" ":"";r+=s===E?o+k:c>=0?(i.push(a),o.slice(0,c)+"$lit$"+o.slice(c)+y+u):o+y+(-2===c?(i.push(void 0),t):u)}const a=r+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,i]})(e,t);if(this.el=P.createElement(l,o),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=B.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(y)){const o=c[r++];if(e.push(t),void 0!==o){const e=i.getAttribute(o.toLowerCase()+"$lit$").split(y),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?Z:"@"===t[1]?K:L})}else a.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(z.test(i.tagName)){const e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=b?b.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],O()),B.nextNode(),a.push({type:2,index:++n});i.append(e[t],O())}}}else if(8===i.nodeType)if(i.data===$)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(y,e+1));)a.push({type:7,index:n}),e+=y.length-1}n++}}static createElement(e,t){const o=x.createElement("template");return o.innerHTML=e,o}}function D(e,t,o=e,i){var n,r,s,a;if(t===H)return t;let l=void 0!==i?null===(n=o._$Cl)||void 0===n?void 0:n[i]:o._$Cu;const c=j(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,o,i)),void 0!==i?(null!==(s=(a=o)._$Cl)&&void 0!==s?s:a._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(t=D(e,l._$AS(e,t.values),l,i)),t}class I{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(o,!0);B.currentNode=n;let r=B.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new Y(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new V(r,this,e)),this.v.push(t),l=i[++a]}s!==(null==l?void 0:l.index)&&(r=B.nextNode(),s++)}return n}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Y{constructor(e,t,o,i){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),j(e)?e===N||null==e||""===e?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==H&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return _(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==N&&j(this._$AH)?this._$AA.nextSibling.data=e:this.k(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=P.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(o);else{const e=new I(n,this),t=e.p(this.options);e.m(o),this.k(t),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new P(e)),t}S(e){_(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new Y(this.A(O()),this.A(O()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class L{constructor(e,t,o,i,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=D(this,e,t,0),r=!j(e)||e!==this._$AH&&e!==H,r&&(this._$AH=e);else{const i=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=D(this,i[o+s],t,s),a===H&&(a=this._$AH[s]),r||(r=!j(a)||a!==this._$AH[s]),a===N?e=N:e!==N&&(e+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}r&&!i&&this.C(e)}C(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends L{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===N?void 0:e}}const W=b?b.emptyScript:"";class Z extends L{constructor(){super(...arguments),this.type=4}C(e){e&&e!==N?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class K extends L{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=D(this,e,t,0))&&void 0!==o?o:N)===H)return;const i=this._$AH,n=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==N&&(i===N||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class V{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var X,F;null==q||q(P,Y),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push("2.2.1");class J extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:t;let s=r._$litPart$;if(void 0===s){const e=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=s=new Y(t.insertBefore(O(),e),e,void 0,null!=o?o:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return H}}J.finalized=!0,J._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:J});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:J}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.2.0");const ee=e=>"object"==typeof e&&null!==e,te=(e,t=1)=>{const o=[];let i="";for(let n=0;n<e.length;n++){const r=e[n];if(";"===r)o.push(i.trim()),i="";else if("@"===r&&""===i.trim()){const{node:i,endIndex:r}=oe(e.substr(n),t+1);o.push(i),n+=r}else if("&"===r&&""===i.trim()){const{node:i,endIndex:r}=oe(e.substr(n),t+1);o.push(i),n+=r}else{if("}"===r)return""!==i.trim()&&o.push(i.trim()),{val:o,endIndex:n-1};i+=r}}return{val:o,endIndex:e.length-1}},oe=(e,t=0)=>{const o={};let i="STATE_KEY",n="STATE_KEY",r="",s=0;for(let l=0;l<e.length;l++){const c=e[l];if("}"===c&&t>0)return{node:o,endIndex:l};if("NODE_AT_GROUP_VALUE"===i||"}"!==c)switch("/"===c&&"*"===e[l+1]&&(n=i,i="COMMENT_START",l+=2),i){case"COMMENT_START":"*"===c&&"/"===e[l+1]&&(i=n,l+=2,s=l);break;case"STATE_KEY":if(""===r.trim()&&"@"===c.trim())i="NODE_AT_GROUP_KEY",r+=c.trim();else if("{"===c)i="STATE_VALUE",r=r.trim(),o[r]=o[r]||[];else{if(":"===c&&" "===e[l+1]){l=s;const{val:o,endIndex:i}=te(e.substr(l),t+1);return{node:o,endIndex:l+i}}r+=c}break;case"STATE_VALUE":const{val:d,endIndex:u}=te(e.substr(l),t+1);l+=u,o[r]=[...o[r],...d],i="STATE_KEY",r="",s=l;break;case"NODE_AT_GROUP_KEY":";"===c?(o[r]=void 0,r="",s=l,i="STATE_KEY"):"{"===c?(r=r.trim(),a(oe(e.substr(l+1),t+1)),i="NODE_AT_GROUP_VALUE"):r+=c;break;case"NODE_AT_GROUP_VALUE":if(""===c.trim())break;"}"!==c?a(oe(e.substr(l),t+1)):(r="",s=l,i="STATE_KEY")}function a(e){o[r.trim()]=[...o[r]||[],...Array.isArray(e.node)?e.node:[e.node]],l+=e.endIndex+1}}return{node:o,endIndex:e.length}};function ie(e){return((e,t="")=>{const o={},i=(e,t="")=>(t=t.indexOf(",")>-1&&0!==t.indexOf(":is")?`:is(${t})`:t,Object.entries(e).map((([e,n])=>0===(e=(e=e.replace(/\@nest/gi,"")).replace(/\&/gi,t)).indexOf("@media")?(o[e]=o[e]||"",o[e]+=n?n.filter(ee).reduce(((e,o)=>e+`${i(o,t)} `),""):null,""):0===e.indexOf("@")?` ${e} { ${n.filter((e=>!ee(e))).join(";")}${n.filter(ee).map((t=>i(t,e))).join(" ")} }`:n?`${e} { ${n.filter((e=>!ee(e))).join(";")} } ${n.filter(ee).map((t=>i(t,e))).join(" ")}`:`${e.trim()};`)).join("").trim());return i(e,t)+Object.entries(o).reduce(((e,[t,o])=>e+(o?`${t} { ${o.trimEnd()} }`:`${t};`))," ").trimEnd()})(oe(e).node)}const ne=(e,...t)=>a`${s(function(e,...t){let o=e[0];for(let i=0;i<t.length;i++)o+=t[i]+e[i+1];return ie(o)}(e,...t))}`,re={};var se;!function(e){e[e.SILENT=0]="SILENT",e[e.ERROR=1]="ERROR",e[e.INFO=80]="INFO",e[e.DEBUG=90]="DEBUG",e[e.TRACE=100]="TRACE"}(se||(se={}));let ae=se.SILENT;const le=e=>ae=e;let ce=[];const de=(e,t,...o)=>{ce.forEach((i=>i(se.ERROR,e,t,...o))),ae>=se.ERROR&&console.error(t,e,...o)},ue=(e,t,...o)=>{ce.forEach((i=>i(se.INFO,e,t,...o))),ae>=se.INFO&&(ae===se.TRACE?console.trace:console.log)(t,e,...o)},he=(e,t,...o)=>{ce.forEach((i=>i(se.DEBUG,e,t,...o))),ae>=se.DEBUG&&(ae===se.TRACE?console.trace:console.log)(t,e,...o)},ve={queue:{},list:{}};function ge(e){return e.reduce(((e,t)=>`${e};${t.name};`),"")}const me=new class{constructor(){this.actionDictionary={}}on(e,t){if(Array.isArray(e)){const o=ge(e);if(ve.list[o])throw de("Hypothalamus.on",new Error("Cannot register the same list of hormones twice"),o),new Error("Cannot register the same list of hormones twice");ue("[Hypothalamus.on] Adding new action when all in a list of hormones are released",o,e),ve.list[o]={hormones:[...e],callback:t}}else ue("Hypothalamus.on","Adding new action when a hormone is released",e.name),this.actionDictionary[e.name]=this.actionDictionary[e.name]||[],this.actionDictionary[e.name].push(t)}drop(e){Array.isArray(e)?(he("Hypothalamus.drop","Dropping a list of hormones",ge(e),e),delete ve.queue[ge(e)],delete ve.list[ge(e)]):(he("Hypothalamus.drop","Dropping a hormone",e.name),this.actionDictionary[e.name]=[])}dropAll(){he("Hypothalamus.dropAll","Dropping all hormones"),this.actionDictionary={},ve.queue={},ve.list={}}collect(e,t,o){const i=`collect;;${e.name};${t.name};`;if(ve.list[i])throw de("Hypothalamus.collect",new Error("Cannot register the same list of hormones twice"),i),new Error("Cannot register the same list of hormones twice");ue("[Hypothalamus.collect] Adding new action when collected hormones are released",i,e,t),ve.list[i]={hormones:[t],callback:o}}orchestrate(e,t){this.actionDictionary[e.name]&&this.actionDictionary[e.name].forEach((e=>e(t)));const o=Object.keys(ve.queue).filter((t=>t.includes(`;${e.name};`))),i=Object.keys(ve.list).filter((t=>t.indexOf(`;${e.name};`)>-1&&o.every((e=>e!==t))));i.forEach((e=>{ve.queue[e]={hormones:[...ve.list[e].hormones],values:{},callback:ve.list[e].callback}}));const n=[...new Set([...o,...i])];for(let o=0;o<n.length;o++){const i=n[o];if(i.startsWith("collect;;")){const[o]=i.replace("collect;;","").split(";");e.name===o?ve.queue[i].values[e.name]=[...ve.queue[i].values[e.name]||[],t]:(ve.queue[i].values[e.name]=t,ve.queue[i].callback(ve.queue[i].values),delete ve.queue[i])}else ve.queue[i].hormones=ve.queue[i].hormones.filter((t=>t.name!==e.name)),ve.queue[i].values[e.name]=t,ve.queue[i].hormones.length<1&&(ve.queue[i].callback(ve.queue[i].values),delete ve.queue[i])}}};function fe(e,t={}){return pe(e,Object.assign(Object.assign({},t),{readOnce:!0}))}function pe(e,t={}){return be(re)(e,t)}const be=e=>(t,o={})=>{if(e[t]&&!o.loadIfExists)throw de("hormone.defineHormone",new Error("Hormone already created"),t),new Error("Hormone already created");if(e[t]&&o.loadIfExists)return he("hormone.defineHormone","Hormone already created, reusing existing",t),{name:t};const{defaultValue:i,transformation:n,readOnce:r}=o;return e[t]={name:t,value:i,defaultValue:i,transformation:n,receptors:[],readOnce:null!=r&&r},{name:t}};async function we(e,t){return ye(re)(e,t)}const ye=e=>async(t,o)=>{if(!t)throw de("hormone.releaseHormone",new Error("Hormone cannot be undefined")),new Error("Hormone cannot be undefined");const{name:i}=t;if(!e[i])throw de("hormone.releaseHormone",new Error("Hormone does not exist"),i),new Error("Hormone does not exist");var n;n=o,e[i].value=(void 0===n||n instanceof Function)&&o?o(e[i].value):o,ue("hormone.releaseHormone","Releasing passed hormone",i,e[i].value);const{receptors:r,transformation:s}=e[i];s&&s(e[i].value);const a=e[i].value;return me.orchestrate({name:i},a),await Promise.all(r.filter((e=>{const t=void 0===e.onlyIf||e.onlyIf(a);return he("hormone.releaseHormone",t?"Keeping receptor because condition matched or no condition":"Filtered receptor from the triggers because condition not matched",e),t})).map((e=>(null==e?void 0:e.onTriggered)?null==e?void 0:e.onTriggered(a):a))),e[i].readOnce&&(he("hormone.releaseHormone","Resetting hormone because it is readOnce",i),e[i].value=e[i].defaultValue),Object.assign({},e[i])};function $e(e,{name:t},o,i){return ke(re)(e,{name:t},o,i)}const ke=e=>(t,{name:o},i,n)=>{const r=null!=n?n:i,s=n?i:void 0;if(!e[o])throw de("receptor.useReceptor",new Error("Hormone is not defined"),o),new Error(`Hormone "${o}" is not defined`);((e,t,o,i)=>{const n=(null==i?void 0:i.toString())||o;return!e[o].receptors.some((e=>e.parent===t&&e.key===n))})(e,t,o,s)?(ue("receptor.useReceptor","Pushing new receptor to hormone",o,{parent:t}),e[o].receptors.push({key:(null==s?void 0:s.toString())||o,parent:t,onlyIf:s,onTriggered:r}),void 0!==e[o].value?r(e[o].value):void 0!==e[o].defaultValue&&r(e[o].defaultValue)):((e,t,...o)=>{ce.forEach((i=>i(se.TRACE,e,t,...o))),ae===se.TRACE&&console.trace(t,e,...o)})("receptor.useReceptor","Receptor not pushed because already subscribed",o,{parent:t})};function xe(e,[t,o]){return t.toLowerCase()!==t?e[t]=Object.assign(Object.assign({},o),{attribute:t.replace(/[A-Z]/g,"-$&").toLowerCase()}):e[t]=o,e}function Oe(e){return"boolean"==typeof e?{type:Boolean}:Array.isArray(e)?{type:Array}:"object"==typeof e?{type:Object}:{}}const je=e=>(e=>void 0!==e&&void 0!==e.props)(e)?(e.props||[]).reduce(((e,t)=>(Object.entries(t).forEach((t=>e=xe(e,t))),e)),{}):(e=>{return t=e||{},Object.entries(t).reduce(((e,[t,o])=>xe(e,[t,Oe(o)])),{});var t})(null==e?void 0:e.defaults),_e={},Ee=(e,t,o)=>{if(_e[e])return _e[e];customElements.define(e,class extends J{constructor(){super(),this.content=R``,(e=>void 0!==e&&void 0!==e.defaults)(o)&&Object.entries(o.defaults).forEach((([e,t])=>{this[e]=t}))}static get properties(){return je(o)}static get styles(){return null==o?void 0:o.styles}async performUpdate(){return this.content=await Promise.resolve(t(this)).catch((e=>R`<slot name="error">${e}</slot>`)),super.performUpdate()}render(){return this.content}});const i=document.createElement(e);return _e[e]=i,i};var Se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ae={},Te={},Me={};Object.defineProperty(Me,"t",{value:!0}),Me.shallowClone=void 0,Me.shallowClone=function(e){return"object"!=typeof e||!e||e instanceof Date||e instanceof RegExp?e:Array.isArray(e)?[...e]:Object.assign({},e)};var Ce={};function ze(e){if(!e.dispatchEvent||!e.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return e}Object.defineProperty(Ce,"t",{value:!0}),Ce.withWorkflow=Ce.withReducer=Ce.withState=Ce.decorate=Ce.asUpdateableLitElement=void 0,Ce.asUpdateableLitElement=ze;const Re="__registered_states";function He(e){const t=e;if(t[Re])return t;const o=ze(e),i=o.updated;return t[Re]={index:0,count:0,states:[],reducers:[],workflows:[]},o.updated=e=>(t[Re].index=0,i(e)),t}Ce.decorate=He,Ce.withState=function(e,t,o={}){const i=He(e),{index:n,count:r}=i[Re];return n===r?(i[Re].index++,i[Re].count++,i[Re].states.push(t),t):(i[Re].index++,o.updateDefault&&i[Re].states[n].inject(t.get()),i[Re].states[n])},Ce.withReducer=function(e,t){const o=He(e),{index:i,count:n,reducers:r}=o[Re];return i!==n||r[i-1]?o[Re].reducers[i-1]:(o[Re].reducers[i-1]=t,t)},Ce.withWorkflow=function(e,t){const o=He(e),{index:i,count:n,workflows:r}=o[Re];return i!==n||r[i-1]?o[Re].workflows[i-1]:(o[Re].workflows[i-1]=t,t)};var Ne=Se&&Se.o||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(Te,"t",{value:!0}),Te.useState=void 0;const Ue=Me,Be=Ce;Te.useState=(e,t,o={})=>{let i=(0,Ue.shallowClone)(t);const n=[()=>Ne(void 0,void 0,void 0,(function*(){return e.requestUpdate(),yield e.updateComplete}))],r=e=>Ne(void 0,void 0,void 0,(function*(){i!==e&&(i=(0,Ue.shallowClone)(e),yield Promise.all(n.map((e=>e(i)))))}));return(0,Be.withState)(e,new class{set value(e){r(e)}get value(){return i}publish(e){r(e)}set(e){return Ne(this,void 0,void 0,(function*(){yield r(e)}))}subscribe(e){n.push(e)}inject(e){i=e}get(){return i}getState(){return i}},o)};var Pe={},De=Se&&Se.o||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(Pe,"t",{value:!0}),Pe.useReducer=void 0;const Ie=Te,Ye=Ce;Pe.useReducer=(e,t,o,i={})=>{const{get:n,set:r}=(0,Ie.useState)(e,o,i),s=[],a=(o,a)=>De(void 0,void 0,void 0,(function*(){const l=t(n());return l[o]&&(yield r(yield l[o](a)),s.forEach((e=>e(o,n()))),i.dispatchEvent&&e.dispatchEvent(new CustomEvent(o,{detail:n()}))),n()}));return(0,Ye.withReducer)(e,{get:n,subscribe:e=>s.push(e),when:(e,t)=>s.push(((o,i)=>o===e&&t(i))),set:a,dispatch:a})};var Le={},Ge=Se&&Se.o||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(Le,"t",{value:!0}),Le.useWorkflow=void 0;const We=Ae,Ze=Ce;Le.useWorkflow=(e,t)=>{const o=Object.entries(t).reduce(((t,[o,{reducer:i,initialState:n}])=>(t[o]=(0,We.useReducer)(e,i,n),t)),{}),i={},n={},r=[],s=e=>(r.push({type:"projections",args:[e]}),o[e]?o[e].get():void 0);return(0,Ze.withWorkflow)(e,{addActivity:(e,t)=>Ge(void 0,void 0,void 0,(function*(){var n,s;r.push({type:"addActivity",args:[e,t]}),yield Promise.all(null!==(s=null===(n=i[e])||void 0===n?void 0:n.map((e=>e(t))))&&void 0!==s?s:[]);for(const i of Object.values(o))yield i.dispatch(e,t)})),addSideeffect:(e,t)=>{r.push({type:"addSideeffect",args:[e,t]}),i[e]=[...i[e]||[],t]},projections:s,addCompensation:(e,t)=>{r.push({type:"addCompensation",args:[e,t]}),n[e]=[...n[e]||[],t]},compensate:()=>Ge(void 0,void 0,void 0,(function*(){r.push({type:"compensate",args:[]});for(const[e,t]of Object.entries(n))for(const i of t)for(const t of Object.values(o))yield t.dispatch(e,i)})),after:(e,t,o)=>{r.push({type:"after",args:[e,t,o]});const i=()=>Ge(void 0,void 0,void 0,(function*(){r.some((e=>((e,t)=>{if(e.type!==t.type)return!1;for(let o=0;o<t.args.length;o++)if(e.args[o]!==t.args[o])return!1;return!0})(e,t)))||(new Date(Date.now())>e?yield o():setTimeout(i,100))}));i()},plan:e=>Ge(void 0,void 0,void 0,(function*(){for(const[o,i]of Object.entries(e))if(t[o]&&JSON.stringify(s(o))===JSON.stringify(t[o].initialState))return yield i();return e[""]?yield e[""]():Promise.resolve(null)})),history:()=>[...r]})},function(e){Object.defineProperty(e,"t",{value:!0}),e.useWorkflow=e.useReducer=e.useState=void 0;var t=Te;Object.defineProperty(e,"useState",{enumerable:!0,get:function(){return t.useState}});var o=Pe;Object.defineProperty(e,"useReducer",{enumerable:!0,get:function(){return o.useReducer}});var i=Le;Object.defineProperty(e,"useWorkflow",{enumerable:!0,get:function(){return i.useWorkflow}})}(Ae);var Ke={},Ve={},qe={};function Xe(e){if(!e.dispatchEvent||!e.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return e}Object.defineProperty(qe,"t",{value:!0}),qe.withEffect=qe.decorate=qe.asUpdateableLitElement=void 0,qe.asUpdateableLitElement=Xe;const Fe="__registered_effects";function Je(e){const t=e;if(t[Fe])return t;const o=Xe(e),i=o.updated;return t[Fe]={index:0,count:0,effects:[]},o.updated=e=>(t[Fe].index=0,i(e)),t}qe.decorate=Je,qe.withEffect=function(e,t){const o=Je(e),{index:i,count:n}=o[Fe];return i===n?(o[Fe].index++,o[Fe].count++,o[Fe].effects.push(t),t):(o[Fe].index++,o[Fe].effects[i])},Object.defineProperty(Ve,"t",{value:!0}),Ve.useOnce=Ve.useEffect=void 0;const Qe=qe;function et(e,t,o){const i=(0,Qe.withEffect)(e,{on:t,observe:["__initial__dirty"]});i.observe.some(((e,t)=>o[t]!==e))&&i.on(),i.observe=o}Ve.useEffect=et,Ve.useOnce=(e,t)=>et(e,t,[]),function(e){Object.defineProperty(e,"t",{value:!0}),e.useOnce=e.useEffect=void 0;var t=Ve;Object.defineProperty(e,"useEffect",{enumerable:!0,get:function(){return t.useEffect}}),Object.defineProperty(e,"useOnce",{enumerable:!0,get:function(){return t.useOnce}})}(Ke);var tt=Ke.useOnce,ot=Ae.useState;function it(e,t){return Array.from({length:t-e+1},((e,t)=>t))}class nt{constructor(e,t,o,i=1){this.x=e,this.y=t,this.z=o,this.costs=i}equals(e){return null!==e&&this.x===e.x&&this.y===e.y&&this.z===e.z}add(e){const{x:t,y:o,z:i}=this;return new nt(t+e.x,o+e.y,i+e.z)}remove(e){const{x:t,y:o,z:i}=this;return new nt(t-e.x,o-e.y,i-e.z)}vector(e){return new nt(e.x-this.x,e.y-this.y,e.z-this.z)}distance(e){return Math.max(Math.abs(this.x-e.x),Math.abs(this.y-e.y),Math.abs(this.z-e.z))}heuristic(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}range(e){const t=[];for(let o=-e;o<=e;o++)for(let i=Math.max(-e,-o-e);i<=Math.min(e,-o+e);i++)t.push(this.add(new nt(o,i,-o-i)));return t}direction(e){return rt[e]}directionTo(e){const t=it(0,5).find((t=>this.neighbor(t).equals(e)));return void 0!==t&&t>=0?this.direction(t):null}neighbor(e){return this.add(this.direction(e))}neighbors(e){return it(0,5).map((e=>this.neighbor(e))).filter((t=>e.some((e=>e.equals(t)))))}ring(e){const t=[],o=-1*e;for(const i of it(o,e))for(const n of it(Math.max(o,-1*i-o),Math.min(e,-1*i+e))){const e=-i-n;t.push(this.add(new nt(i,n,e)))}return t}cost(){return this.costs}toPosition(){const e=this.x+(this.z+(1&this.z))/2,t=this.z;return new lt(t,e)}toCoords(){return this.toPosition().toCoords()}toString(){return`${this.x}:${this.y}:${this.z}`}}const rt=[new nt(1,-1,0),new nt(1,0,-1),new nt(0,1,-1),new nt(-1,1,0),new nt(-1,0,1),new nt(0,-1,1)];const st={manhattan:[{row:0,col:-1},{row:1,col:0},{row:0,col:1},{row:-1,col:0}],euclid:[{row:1,col:-1},{row:-1,col:1},{row:1,col:0},{row:0,col:1},{row:-1,col:0},{row:0,col:-1},{row:-1,col:-1},{row:1,col:1}]},at=(e,t)=>e.col.toString()===t.col.toString()&&e.row.toString()===t.row.toString();class lt{constructor(e,t,o="manhattan"){this.row=e,this.col=t,this.system=o}vector(e){return new lt(e.row-this.row,e.col-this.col)}toCube(){const e=this.col-(this.row+(1&this.row))/2,t=this.row;return new nt(e,-e-t,t)}toCoords(){const{row:e,col:t}=this;return{col:t,row:e}}neighbor(e){const t=ct(st[this.system][e]);return t.system=this.system,this.add(t)}neighbors(){return it(0,st[this.system].length-1).map((e=>this.neighbor(e)))}distance(e){return function(e,t){return Math.sqrt(Math.pow(t.col-e.col,2)+Math.pow(t.row-e.row,2))}(this,e)}manhattanDistance(e){return function(e,t){return Math.abs(Math.abs(e.col-t.col)+Math.abs(e.row-t.row))}(this,e)}add(e){const{col:t,row:o}=this;return new lt(o+e.row,t+e.col,this.system)}remove(e){const{col:t,row:o}=this;return new lt(o-e.row,t-e.col,this.system)}equals(e){return null!=e&&e.col.toString()===this.col.toString()&&e.row.toString()===this.row.toString()}toString(){return`${this.col}:${this.row}`}toEuclidPosition(){return new lt(this.row,this.col,"euclid")}toManhattanPosition(){return new lt(this.row,this.col,"manhattan")}static fromString(e){if(!e)return null;const[t,o]=e.split(":").map((e=>parseInt(e,10)));return new lt(o,t)}}const ct=({row:e,col:t})=>new lt(e,t);function dt(){var e=(new Date).getTime(),t=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(o){var i=16*Math.random();return e>0?(i=(e+i)%16|0,e=Math.floor(e/16)):(i=(t+i)%16|0,t=Math.floor(t/16)),("x"===o?i:3&i|8).toString(16)}))}const ut={stone:{default:"resources.stone",de:"Stein",en:"Stone"},log:{default:"resources.log",de:"Holz",en:"Wood"},grain:{default:"resources.grain",de:"Mehl",en:"Flour"},hay:{default:"resources.hay",de:"Getreide",en:"Hay"},iron:{default:"resources.iron",de:"Eisen",en:"Iron"}},ht={wagon:{default:"assets.wagon",de:"Wagen",en:"Wagon"},knight:{default:"assets.knight",de:"Ritter",en:"Knight"},castle:{build:{default:"assets.castle.build",de:"Bauen",en:"Build"}},dices:{standard:{name:{default:"assets.dices.standard.name",de:"Standardwaffe",en:"Standardweapon"},story:{default:"assets.dices.standard.story",de:"Eine faire, ausgewogene Waffe die jeder Ritter haben sollte",en:"A fair, well-balanced weapon that every knight should have"}},mightyBlowOfBetrayal:{name:{default:"assets.dices.mightyBlowOfBetrayal.name",de:"Mächtiger Schlag des Betrugs",en:"Mighty blow of betrayal"},story:{default:"assets.dices.mightyBlowOfBetrayal.story",de:"Eine Waffe, die bis zu 12 Schaden verursachen kann, doch auch eine hohe Wahrscheinlichkeit hat gar keinen Schaden zu verursachen, oder sogar den Ritter selbst zu verletzen!",en:"A weapon that can inflict up to 12 damage, but also has a high chance of inflicting no damage, or even injuring the knight himself"}},smallCastleDefence:{name:{default:"assets.dices.smallCastleDefence.name",de:"Verteidigungswaffen der kleinen Burg",en:"Defensive weapons of the small castle"},story:{default:"assets.dices.smallCastleDefence.story",de:"Schon die kleine Burg hat mächtige Verteidigungswaffen, die viele Angriffe abwehren kann. Nur eine mächtige Armee wird es schaffen, diese Verteidigung zu überwinden.",en:"The small castle has mighty defensive weapons so that many attacks can be thwarted. Only a mighty army can defeat it."}}},properties:{life:{default:"assets.properties.life",de:"<strong>Leben</strong> ${0} von ${1}",en:"<strong>Life</strong> ${0} of ${1}"},actions:{default:"assets.properties.actions",de:"<strong>Aktionen</strong> ${0} von ${1}",en:"<strong>Actions</strong> ${0} of ${1}",move:{default:"assets.properties.actions.move",de:"Bewegen",en:"Move"},attack:{default:"assets.properties.actions.attack",de:"Angreifen",en:"Attack"},fortify:{default:"assets.properties.actions.fortify",de:"Verteidigen",en:"Fortify"},load:{default:"assets.properties.actions.load",de:"Laden/Entladen",en:"Load/Unload"},build:{knight:{default:"assets.properties.actions.build.knight",de:"Ritter bauen",en:"Build knight"},wagon:{default:"assets.properties.actions.build.wagon",de:"Wagen bauen",en:"Build wagon"},iron:{default:"assets.properties.actions.build.iron",de:"Eisen bauen",en:"Build iron"},castle_medium:{default:"assets.properties.actions.build.castle_medium",de:"Mittlere Burg bauen",en:"Build medium castle"},castle_large:{default:"assets.properties.actions.build.castle_large",de:"Große Burg bauen",en:"Build large castle"},lumberjack_small:{default:"assets.properties.actions.build.lumberjack_small",de:"Baue einen Holzfäller (klein)",en:"Build Lumberjack (small)"},mine_small:{default:"assets.properties.actions.build.mine_small",de:"Baue eine Mine (klein)",en:"Build Mine (small)"}}}}};function vt(e,...t){const o=e[document.documentElement.lang||"en"];return o?o.replace(/\$\{(\d+)\}/g,((e,o)=>t[o])):e.default}function gt(e){return{name:vt(e.name),story:vt(e.story)}}function mt(e){return e.reduce(((e,t)=>e+function(e){return e.sides[Math.floor(Math.random()*e.sides.length)].value}(t)),0)}const ft={id:"building-castle-small",name:"Small Castle",team:"",occurences:{min:1},dices:[Object.assign(Object.assign({},gt(ht.dices.smallCastleDefence)),{sides:[{value:12},{value:12},{value:16},{value:16},{value:21}]})],health:{current:60,max:60},actions:{current:2,max:2},resources:{grain:{generatedResource:10},hay:{generatedResource:10},stone:{generatedResource:10},iron:{generatedResource:10}}},pt={green:e=>Math.max(.75*e.length,Math.round(Math.random()*(e.length-1))),red:e=>Math.min(.25*e.length,Math.round(Math.random()*(e.length-1)))};
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
function bt(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}const wt=["hay","grain","iron","wood","stone"];function yt(e){var t;return void 0!==e&&void 0!==(null===(t=e)||void 0===t?void 0:t.resources)}function $t(e){var t,o;return void 0!==e&&(null===(t=e)||void 0===t?void 0:t.row)>=0&&(null===(o=e)||void 0===o?void 0:o.col)>=0}function kt(e){var t;return void 0!==e&&void 0!==(null===(t=e)||void 0===t?void 0:t.actions)}function xt(e){var t,o;return e&&(null===(o=null===(t=e)||void 0===t?void 0:t.actions)||void 0===o?void 0:o.max)>0}function Ot(e){var t,o;return e&&(null===(o=null===(t=e)||void 0===t?void 0:t.dices)||void 0===o?void 0:o.length)>0}function jt(e){var t,o;return e&&(null===(o=null===(t=e)||void 0===t?void 0:t.dices)||void 0===o?void 0:o.length)>0}const _t={id:"building-mill",name:"Mill",occurences:{min:1},resources:{grain:{hay:100,generatedResource:50},hay:{generatedResource:50}}};function Et(e){return void 0!==e&&e.max>0}const St=[Object.assign(Object.assign({},_t),{min:0,max:2}),Object.assign(Object.assign({},_t),{min:8,max:10})],At=({min:e,max:t},o,i)=>{const n=e=>o*i*(e/10);return Math.floor(Math.random()*(n(t)-n(e))+n(e))},Tt=(e,t)=>{var o;return null===(o=null==e?void 0:e.map)||void 0===o?void 0:o.reduce(((e,o)=>[...e,...o.reduce(((e,o)=>[...e,...o.elements.filter(yt).filter((e=>e.team===t))]),[])]),[])},Mt=(...e)=>e.reduce(((e,t)=>(e.push(...Object.entries(t.resources).map((e=>{var[o,i]=e,{generatedResource:n}=i,r=bt(i,["generatedResource"]);let s={};s[o]=Object.assign(Object.assign({},r),{generatedResource:n});return Object.assign(Object.assign({},t),{resources:s})}))),e)),[]).filter(Boolean),Ct={gras:{sprite:{name:"gras",file:"hexagonTerrain_sheet",x:414,y:1906},movementCosts:1,defense:0},desert:{sprite:{name:"desert",file:"hexagonTerrain_sheet",x:902,y:627},movementCosts:4,defense:0},mud:{sprite:{name:"mud",file:"hexagonTerrain_sheet",x:658,y:912},movementCosts:4,defense:1},muddyHills:{sprite:{name:"muddyHills",file:"hexagonTerrain_sheet",x:780,y:627},movementCosts:8,defense:3},forest:{sprite:{name:"forest",file:"hexagonTerrain_sheet",x:536,y:912},movementCosts:8,defense:3},mountain:{sprite:{name:"mountain",file:"hexagonTerrain_sheet",x:536,y:1195},movementCosts:10,defense:9}},zt=()=>{var e;const t=Object.keys(Ct);return null!==(e=Ct[t[Math.floor(Math.random()*t.length)]])&&void 0!==e?e:Ct.mountain},Rt=pe("game/world/worldLoaded"),Ht=pe("game/start"),Nt=pe("game/load/sidebar"),Ut=({rows:e,cols:t})=>(e=>{const t=new Array(e.rows*e.cols).map((()=>[]));return St.forEach((o=>{var i;let n=o.occurences.factor?Math.max(o.occurences.min,t.length/o.occurences.factor):o.occurences.min;for(;n>0;){const s=Et(o)?At(o,e.rows,e.cols):(r=t.length,Math.round(Math.random()*(r-1)));t[s]=[...null!==(i=t[s])&&void 0!==i?i:[],Object.assign(Object.assign({},o),{name:o.id,id:dt()})],n--}var r})),t})({rows:e,cols:t}),Bt=(e,{rows:t,cols:o})=>((e,t)=>{const o=new Array(t.rows*t.cols).map((()=>[]));return[ft].forEach((t=>{var i;let n=t.occurences.factor?Math.max(t.occurences.min,o.length/t.occurences.factor):t.occurences.min;for(;n>0;){const r=pt[e](o);o[r]=[...null!==(i=o[r])&&void 0!==i?i:[],Object.assign(Object.assign({},t),{name:t.id,team:e,id:dt()})],n--}})),o})(e,{rows:t,cols:o}),Pt=(e,t,o)=>{var i;return(null!==(i=e.pop())&&void 0!==i?i:[]).map((e=>Object.assign(Object.assign({},e),{row:t,col:o})))},Dt=e=>`player-${e}`,It={knight:Dt("knight"),wagon:Dt("wagon")};class Yt{constructor(e=4086,t=Uint32Array){this.capacity=e,this.capacity=e,this._keys=[],this._priorities=new t(e+1),this.length=0}clear(){this.length=0}bubbleUp(e){const t=this._keys[e],o=this._priorities[e];for(;e>1;){const t=e>>>1;if(this._priorities[t]<=o)break;this._keys[e]=this._keys[t],this._priorities[e]=this._priorities[t],e=t}this._keys[e]=t,this._priorities[e]=o}bubbleDown(e){const t=this._keys[e],o=this._priorities[e],i=1+(this.length>>>1),n=this.length+1;for(;e<i;){const t=e<<1;if(t>=n)break;let i=this._priorities[t],r=this._keys[t],s=t;const a=t+1;if(a<n){const e=this._priorities[a];e<i&&(i=e,r=this._keys[a],s=a)}if(i>=o)break;this._keys[e]=r,this._priorities[e]=i,e=s}this._keys[e]=t,this._priorities[e]=o}push(e,t=0){if(this.length===this.capacity)throw new Error("Heap has reached capacity, can't push new items");const o=this.length+1;this._keys[o]=e,this._priorities[o]=t,this.bubbleUp(o),this.length++}pop(){const e=this._keys[1];return this.length--,this.length>0&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1)),e}peekPriority(){return this._priorities[1]}peek(){return this._keys[1]}toString(){if(0===this.length)return"(empty queue)";const e=Array(this.length-1);for(let t=0;t<this.length;t++)e[t]=this._priorities[t+1];return`[${e.join(" ")}]`}get[Symbol.toStringTag](){return"Heapify"}*[Symbol.iterator](){for(let e=0;e<this.length;e++){const t=this._priorities[e+1],o=this._keys[e+1];yield[o,t]}}*keys(){for(let e=0;e<this.length;e++)yield this._keys[e+1]}*priorities(){for(let e=0;e<this.length;e++)yield this._priorities[e+1]}}const Lt=e=>e.toPosition().toString();const Gt=(e,t,o,i,n)=>{const r=new Yt;r.push(e,0);const s={},a={},l=[];let c=!1;if(s[Lt(e)]=Lt(e),a[Lt(e)]=0,e.equals(t))return{path:[]};if(i(t))return{path:[]};for(;r.length>0;){const e=r.pop();if(e.equals(t)){c=!0;break}if(r.length>1e3)throw new Error("No what kinda path are you searching for?!");l.push(e.toPosition().toString());for(const c of e.neighbors(o).filter((e=>!s[Lt(e)])).map((e=>{var t;return null!==(t=o.find((t=>t.equals(e))))&&void 0!==t?t:e}))){if(i(c))continue;l.some((e=>e===Lt(c)))||l.push(Lt(c));const o=a[Lt(e)]+c.cost();n<o||(!a[Lt(c)]||o<a[Lt(c)])&&(a[Lt(c)]=o,r.push(c,o+t.heuristic(c)),s[Lt(c)]=e.toPosition().toString())}}const d=e.toPosition();if(!c)return{path:[],visited:l};let u=t.toPosition();const h=[];do{h.push(u),u=lt.fromString(s[u.toString()])}while(null!==u&&!u.equals(d));return{path:h.reverse(),visited:l}},Wt=fe("action/abort"),Zt=pe("player/update"),Kt=fe("player/request/select"),Vt=pe("player/buildings/item/selected"),qt=pe("player/item/moved"),Xt=pe("player/knights/created"),Ft=pe("player/wagon/created"),Jt=pe("player/assets/loaded"),Qt=pe("player/action/performed"),eo=pe("turn/player/actions/hasLeft"),to=fe("turn/player/actions/none"),oo=fe("map/hexagon/updated",{readOnce:!0}),io=pe("modes/move/activate"),no=pe("modes/move/activated"),ro=pe("modes/move/deactivate"),so=pe("modes/move/hovered-target"),ao=pe("modes/move/end"),lo=pe("modes/build/lumberjack-small"),co=pe("modes/build/lumberjack-small/success"),uo=pe("modes/build/lumberjack-small/failed"),ho=pe("modes/build/mine-small"),vo=pe("modes/build/mine-small/success"),go=pe("modes/build/mine-small/failed"),mo=pe("modes/battle/activate"),fo=pe("modes/battle/active"),po=pe("modes/battle/end"),bo=pe("modes/battle/deactivate"),wo=pe("battle/started"),yo=pe("battle/dice/thrown"),$o=pe("battle/player/attacked"),ko=pe("mill/takeover"),xo=pe("lumberjack/takeover"),Oo=pe("mine/takeover"),jo=pe("modal/battle/open"),_o=pe("modal/dice-result/open"),Eo=pe("turn/world/started"),So=pe("turn/world/accepted"),Ao=pe("turn/player/complete"),To=pe("turn/world/complete"),Mo=pe("resources/generated"),Co=pe("resources/generation/complete"),zo=pe("resources/summary"),Ro=pe("resources/distribute"),Ho=pe("resources/distribute/request"),No=pe("resources/distribute/updated"),Uo=()=>({grain:100,iron:200,hay:0,wood:0,stone:0});function Bo(e,t){if(!e||!e.map)return[];const o=e=>t===e.team,i=[];for(const t of e.map)for(const e of t)i.push(...e.elements.filter(o));return i}function Po(e){var t,o,i,n,r;if(!e)return;return[...null!==(r=null===(n=null===(i=null===(o=null===(t=null===document||void 0===document?void 0:document.querySelector("the-mill"))||void 0===t?void 0:t.shadowRoot)||void 0===o?void 0:o.querySelector("world-map"))||void 0===i?void 0:i.shadowRoot)||void 0===n?void 0:n.querySelectorAll("hexagon-element"))&&void 0!==r?r:[]].find((t=>{var o,i;return null===(i=null===(o=t.shadowRoot)||void 0===o?void 0:o.querySelector("sprite-set"))||void 0===i?void 0:i.querySelector(`[id="${e.id}"]`)}))}document.deepQuerySelector=Po;const Do=()=>({grain:50,iron:0,hay:0,wood:50,stone:0});function Io(e,t){return e.sprite.name===t}let Yo,Lo={},Go=[],Wo=[],Zo={};const Ko=e=>Object.assign({},Zo[e]),Vo=()=>Zo[Yo],qo=e=>e.actions.current>0,Xo=({team:e})=>e===Yo;me.on(Rt,(async e=>{Go=[],e.map.forEach(((e,t)=>{e.forEach(((e,o)=>{const i=new lt(t,o).toCube();e.terrain.movementCosts&&(i.costs=e.terrain.movementCosts),Go.push(i)}))})),Lo=e,["green","red"].forEach((e=>{Zo[e]={resources:{hay:100,grain:200,iron:200,wood:100,stone:100}}})),await we(Ht)})),me.on(Wt,(async e=>{e&&(we(ro),we(bo))})),me.on([Ht,Nt],(async()=>{await we(Eo)})),me.on(Eo,(async()=>{Wo=[...Lo.teams],Yo=Wo.pop(),await we(So,Yo)})),me.on(Ro,(async({team:e,resourcesToGenerate:t})=>{var o;if(null===(o=Ko(e))||void 0===o?void 0:o.resources){const o=Object.assign({},Ko(e).resources);Zo[e].resources=function(e,t){let o=Object.assign({},e),i=[...t],n=!0;for(;n;)n=!1,i=i.map((e=>{let t=e;return Object.entries(e.resources).forEach((i=>{var[r,s]=i,{generatedResource:a}=s,l=bt(s,["generatedResource"]);Object.entries(l).every((([e,t])=>o[e]<=t))&&(n=!0,t=void 0,Object.entries(l).forEach((([e,t])=>{o[e]-=t})),o[r]+=a,we(Mo,e))})),t})).filter(Boolean);return console.log(e,"=>",o),o}(Zo[e].resources,t),we(Co,{team:e,before:o,after:Zo[e].resources}),await we(No,{team:e,resourcesToGenerate:t})}})),me.collect(Mo,Co,(e=>{var t;we(zo,null===(t=e[Mo.name])||void 0===t?void 0:t.map((e=>({name:e.name,from:Object.values(e.resources).map((e=>{var t=bt(e,["generatedResource"]);return Object.assign({},t)})),to:Object.keys(e.resources)}))))})),me.on(So,(async e=>{const t=Bo(Lo,e);await we(Jt,t);const o=null==t?void 0:t.find((e=>e.name===Ei));$t(o)&&we(Kt,{item:Ei,row:o.row,col:o.col,payload:o}),setTimeout((()=>{var e;null===(e=Po(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2);const i=Tt(Lo,e).reduce(((e,t)=>[...e,...Mt(t)]),[]).filter(((e,t,o)=>o.indexOf(e)===t));await we(Ro,{team:e,resourcesToGenerate:i}),await we(Zt,Ko(e))})),me.on(Ho,(({team:e})=>{var t;const o=null===(t=Tt(Lo,e))||void 0===t?void 0:t.reduce(((e,t)=>[...e,...Mt(t)]),[]);we(No,{team:e,resourcesToGenerate:o})})),me.on(Kt,(async e=>{await we(Vt,Object.assign(Object.assign({},e),{item:"hexagon"})),await we(Vt,Object.assign({},e)),await we(Vt,Object.assign(Object.assign({},e),{item:"hexagon"}))})),me.on(Ao,(()=>{Yo=Wo.pop(),void 0===Yo?we(To):we(So,Yo)})),me.on(To,(()=>{Lo.map.forEach((e=>{e.forEach((({elements:e})=>{((...e)=>{e.forEach((e=>{e.actions.current=e.actions.max}))})(...e.filter(xt))}))})),we(Eo)}));[{name:It.knight,hormone:Xt,costs:{grain:100,iron:200,hay:0,wood:0,stone:0},create:({team:e,row:t,col:o})=>({id:dt(),name:li,team:e,row:t,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10},dices:[Object.assign(Object.assign({},gt(ht.dices.standard)),{sides:[{value:3},{value:3},{value:3},{value:4},{value:5},{value:6}]}),Object.assign(Object.assign({},gt(ht.dices.mightyBlowOfBetrayal)),{sides:[{value:-3},{value:0},{value:0},{value:6},{value:12}]})]})},{name:It.wagon,hormone:Ft,costs:{grain:50,iron:0,hay:0,wood:50,stone:0},create:({team:e,row:t,col:o})=>({id:dt(),name:ui,team:e,row:t,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10}})}].forEach((({name:e,hormone:t,costs:o,create:i})=>{me.on(t,(async({row:t,col:n,team:r,origin:s})=>{if(!Xo({team:r}))return;if(!((e,t)=>{const o=Object.assign({},Zo[e].resources);for(const[e,i]of Object.entries(t)){if(o[e]<i)return!1;o[e]-=i}return Zo[e].resources=o,!0})(r,o))return;if(s.actions.current<1)return;const a=i({row:t,col:n,team:r});Lo.map[t][n].elements.push(a),await Promise.all([we(Qt,{item:s}),we(oo,{row:t,col:n,elements:[...Lo.map[t][n].elements]}),we(Jt,Bo(Lo,r)),we(Zt,Vo())]),we(Kt,{item:e,row:t,col:n,payload:a})}))})),me.on(Qt,(({item:e})=>{Lo.map[e.row][e.col].elements.filter((t=>t.id===e.id)).filter(kt).forEach((e=>e.actions.current--))})),me.on(eo,(()=>{void 0===((e,t)=>{for(const o of e.map)for(const e of o){const o=e.elements.filter(xt).map((e=>e)).find((e=>e.team===t&&e.actions.current>0));if(o)return o}})(Lo,Yo)&&we(to,!0)})),me.on(lo,(async({position:e,asset:t})=>{const{elements:o,terrain:i}=Lo.map[e.row][e.col],{team:n}=t,r=o.findIndex((e=>"player-wagon"===e.name));if(Xo({team:t.team}))if("player-wagon"!==t.name||r<0)await we(uo,{position:e,asset:t,reason:"No wagon on field"});else if(Io(i,"forest"))if(o.some(yt))await we(uo,{position:e,asset:t,reason:"There is already a building on the field"});else{const i=(({position:e,asset:t})=>Object.assign(Object.assign({id:dt(),name:"lumberjack-small",team:t.team},e),{occurences:{min:1},resources:{wood:{generatedResource:50}}}))({position:e,asset:t});o.splice(r,1),o.unshift(i),await Promise.all([we(oo,Object.assign(Object.assign({},e),{elements:[...o]})),we(Jt,Bo(Lo,t.team)),we(Zt,Vo()),we(co,{position:e,asset:i})]),we(Ho,{team:n})}else await we(uo,{position:e,asset:t,reason:`No wood on field but ${i.sprite.name}`});else await we(uo,{position:e,asset:t,reason:`Not the turn of the team ${t.team}`})})),me.on(ho,(async({position:e,asset:t})=>{const{elements:o,terrain:i}=Lo.map[e.row][e.col],{team:n}=t,r=o.findIndex((e=>"player-wagon"===e.name));if(Xo({team:t.team}))if("player-wagon"!==t.name||r<0)await we(go,{position:e,asset:t,reason:"No wagon on field"});else if(Io(i,"mountain"))if(o.some(yt))await we(go,{position:e,asset:t,reason:"There is already a building on the field"});else{const i=(({position:e,asset:t})=>Object.assign(Object.assign({id:dt(),name:"mine-small",team:t.team},e),{occurences:{min:1},resources:{stone:{generatedResource:50},iron:{generatedResource:50}}}))({position:e,asset:t});o.splice(r,1),o.unshift(i),await Promise.all([we(oo,Object.assign(Object.assign({},e),{elements:[...o]})),we(Jt,Bo(Lo,t.team)),we(Zt,Vo()),we(vo,{position:e,asset:i})]),we(Ho,{team:n})}else await we(go,{position:e,asset:t,reason:`No mountain on field but ${i.sprite.name}`});else await we(go,{position:e,asset:t,reason:`Not the turn of the team ${t.team}`})}));const Fo=e=>Number.parseInt(e.toString(),10),Jo=e=>{const{row:t,col:o}=e.toCoords();return Lo.map[t][o].elements.filter((e=>e.team!==(null==Qo?void 0:Qo.asset.name))).some(jt)};let Qo,ei;me.on(io,(async e=>{function t(t){return function(e,t,o,i,n){return Gt(e,t,o,i,n).path.length>0}(new lt(Fo(e.start.row),Fo(e.start.col)).toCube(),new lt(Fo(t.position.row),Fo(t.position.col)).toCube(),Go,Jo,e.asset.movement.points)}ei&&await we(bo),Xo(e.asset)&&(Qo=Object.assign(Object.assign({},e),{inReach:Lo.map.reduce(((e,o)=>[...e,...o.filter(t).map((e=>e.position))]),[])}),await we(no,e))})),me.on(ro,(()=>{Qo=void 0})),me.on(so,(async e=>{var t,o;if(!Qo)return;const i=new lt(Fo(Qo.start.row),Fo(Qo.start.col)).toCube(),n=new lt(Fo(e.row),Fo(e.col)).toCube(),r=Gt(i,n,Go,Jo,Qo.asset.movement.points).path;let s=e;Jo(n)&&(s=null!==(o=null===(t=[...r].pop())||void 0===t?void 0:t.toCoords())&&void 0!==o?o:Qo.start),await we(io,Object.assign(Object.assign({},Qo),{trail:r,end:s}))})),me.on(ao,(async e=>{var t,o;if(!Qo)return;if((null!==(o=null===(t=Qo.trail)||void 0===t?void 0:t.length)&&void 0!==o?o:0)<1)return;const{start:i,asset:n}=Qo;if(!Xo(n))return;if(void 0===n.actions&&console.error("asset.actions undefined",n),!qo(n))return;if(at(Qo.start,e))return void we(ro);n.actions.current-=1;const r=[...Lo.map[i.row][i.col].elements];Lo.map[i.row][i.col].elements=[],r.forEach((t=>{t.id!==n.id?Lo.map[i.row][i.col].elements.push(Object.assign(Object.assign({},t),{row:i.row,col:i.col})):Lo.map[e.row][e.col].elements.push(Object.assign(Object.assign({},t),{row:e.row,col:e.col}))})),await we(oo,{row:i.row,col:i.col,elements:[...Lo.map[i.row][i.col].elements]}),await we(oo,{row:e.row,col:e.col,elements:[...Lo.map[e.row][e.col].elements]}),await we(ro),await we(qt,{asset:n,location:e}),await we(eo)})),me.on(mo,(async e=>{Xo(e.asset)&&(Qo&&await we(ro),ei=Object.assign(Object.assign({},e),{range:new lt(e.start.row,e.start.col).toCube().range(1).map((e=>e.toPosition().toCoords()))}),we(fo,ei))})),me.on(po,(async e=>{if(!ei||!Xo(ei.asset))return;if(at(ei.start,e))return void we(bo);const{row:t,col:o}=e,{asset:i}=ei,n=[...Lo.map[t][o].elements].filter((e=>Ot(e)&&e.team!==i.team));qo(i)&&n.length>0&&(i.actions.current-=1,await we(wo,{location:e,attacker:[i],defender:[...n]})),we(Jt,Bo(Lo,i.team)),we(bo),await we(eo)})),me.on(bo,(()=>ei=void 0)),me.on(qt,(async({asset:e,location:t})=>{if(!Xo(e))return;const{row:o,col:i}=t,n=[...Lo.map[o][i].elements].filter((t=>t.id!==e.id));for(const{building:o,hormone:i}of[{building:Oi,hormone:ko},{building:Ti,hormone:xo},{building:zi,hormone:Oo}]){const r=n.filter((t=>t.name===o&&t.team!==e.team));if(r.length>0&&Ot(e)){const o={asset:r[0],transfered:{from:r[0].team,to:e.team},location:t,by:e,team:e.team};await we(i,o)}}we(Jt,Bo(Lo,e.team)),await we(eo)})),[ko,xo,Oo].forEach((e=>{me.on(e,(({location:e,team:t,asset:o})=>{if(!Xo({team:t}))return;const{row:i,col:n}=e,r=[...Lo.map[i][n].elements];Lo.map[i][n].elements=[],r.forEach((e=>{e.id!==o.id?Lo.map[i][n].elements.push(e):Lo.map[i][n].elements.push(Object.assign(Object.assign({},e),{team:t}))})),we(Jt,Bo(Lo,t)),we(Ho,{team:t})}))})),me.on(wo,(e=>{we(jo,e)})),me.on(yo,(e=>{if(!Xo(e.attacker.asset))return;const t=mt(e.attacker.dices);we($o,{attacker:e.attacker.asset,defender:e.defender,damage:t,location:e.location})})),me.on($o,(e=>{const{defender:t,damage:o,attacker:i}=e,n=Object.assign(Object.assign({},i),{health:Object.assign(Object.assign({},i.health),{current:o<0?i.health.current+o:i.health.current})}),r=Object.assign(Object.assign({},t),{health:Object.assign(Object.assign({},t.health),{current:o>0?t.health.current-o:t.health.current})}),{row:s,col:a}=e.location,l=[...Lo.map[s][a].elements];Lo.map[s][a].elements=[],l.forEach((e=>{e.id===r.id?r.health.current>0&&Lo.map[s][a].elements.push(r):e.id===n.id?n.health.current>0&&Lo.map[s][a].elements.push(n):Lo.map[s][a].elements.push(e)})),we(oo,{row:s,col:a,elements:[...Lo.map[s][a].elements]}),we(jo,void 0),we(_o,{attacker:[i],defender:[t],defender_after:[r],attacker_after:[n],location:e.location,result:o})})),window.location.hash.indexOf("log")>=0&&le(se.INFO),window.location.hash.indexOf("trace")>=0&&le(se.TRACE);const ti=ne`
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
`,oi=ne`
.inactive {
    opacity: 0.8;
    filter: grayscale(100%);
}`,ii=ne`
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
`,ni=e=>ne`
     ${e} {
        scrollbar-color:  #888 #f1f1f1;
        scrollbar-width: thin;
     }
`;Ee("button-image",(e=>{const t=e.height?`height:${e.height};`:"";return R`<button style="${t}; background-image: url('${e.src}'), url('assets/sidebar/btn_1.png')">
        <slot></slot>
    </button>`}),{styles:a`
    button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        background-image: url('assets/sidebar/btn_1.png');
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
    `,defaults:{src:"",height:""}}),Ee("button-pure",(()=>R`<button>
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
    `});const ri=a`
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
`,si=a`
    header {
        position: relative;
        height: 2rem;
    }
    #close {
        position: absolute;
        right: 12px;
        font-size: 2rem;
    }
`,ai=(e,t)=>{e.dispatchEvent(new CustomEvent(t))};Ee("modal-window",(e=>e.open?R`
    <div id="background" @click="${()=>e.preventClose&&ai(e,"close")}"></div>
    <div id="modal">
        <header>
            ${e.preventClose?R``:R`<button-pure id="close" @click="${()=>ai(e,"close")}"><text-block size="large">X</text-block></button-pure>`}
            <slot name="header"></slot>
        </header>
        <div>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
    `:R``),{styles:[ri,si],defaults:{open:!1,preventClose:!1}}),Ee("modal-container",(e=>{const{getState:t,publish:o}=ot(e,!1);return R`
        <button-pure @click="${()=>o(!0)}"><slot></slot></button-pure>
        <modal-window .open=${t()} @close=${()=>o(!1)}>
            <slot slot="header" name="header"></slot>
            <slot name="body"></slot>
            <slot slot="footer" name="footer"></slot>
        </modal-window>
    `}));Ee("text-block",(({size:e,type:t})=>R`<span class="${e} ${t}"><slot></slot></span>`),{styles:[a`
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
`],defaults:{size:"medium",type:"inline"}});Ee("loading-bar",(({width:e})=>R`
    <div class="progress-bar">
        <span class="bar">
            ${"0%"===e.trim()||0===e.trim().indexOf("-")?R`<span></span>`:R`<span class="progress" style="width: ${e};"></span>`}
        </span>
    </div>
    `),{styles:[ne`    
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
`],defaults:{width:"100%"}});Ee("dice-roll",(({result:e})=>R`<div id="cube">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3">${e}</div>
        <div id="side4"></div>
        <div id="side5"></div>
        <div id="side6"></div>
    </div>`),{styles:ne`
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
`,props:[{result:{type:Number}}]});const li=It.knight;var ci=Ee(li,(e=>{const{get:t,set:o}=ot(e,"");return $e(e,So,o),R`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('assets/knight_${e.team}.png'"></div>`}),{styles:[ti,oi,a`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),di=Object.freeze({__proto__:null,name:li,default:ci});const ui=It.wagon;var hi=Ee(ui,(e=>{const{getState:t,publish:o}=ot(e,"");return $e(e,So,o),R`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('assets/wagon_${e.team}.png'"></div>`}),{styles:[ti,oi,a`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),vi=Object.freeze({__proto__:null,name:ui,default:hi});Ee("dice-selector",(e=>{var t;return R`${null===(t=e.dices)||void 0===t?void 0:t.map((t=>R`<div>
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
            background-image: url("assets/dice.png");
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
const gi=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class mi extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=N,e.type!==gi)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===N||null==e)return this.ft=void 0,this.it=e;if(e===H)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}mi.directiveName="unsafeHTML",mi.resultType=1;const fi=(e=>(...t)=>({_$litDirective$:e,values:t}))(mi);async function pi(e){for(const t of e)await t()}const bi=(e,t)=>{var o,i;return[...null!==(o=t.none)&&void 0!==o?o:[],...null!==(i=t[e])&&void 0!==i?i:[]]};Ee("sprite-set",(e=>{const{getState:t,publish:o}=ot(e,void 0),{getState:i,publish:n}=ot(e,void 0);return $e(e,oo,(t=>e.row.toString()===(null==t?void 0:t.row.toString())&&e.col.toString()===(null==t?void 0:t.col.toString())),o),$e(e,So,n),t()&&pi(bi(i(),e.triggers)).then((()=>we(Vt,{item:"hexagon",row:e.row,col:e.col}))),tt(e,(()=>{e.addEventListener("click",(async()=>{pi(bi(i(),e.triggers))}))})),R`<slot></slot>`}),{defaults:{row:0,col:0,triggers:{}}}),Ee("sprite-player-elements-grid",(()=>R`<slot></slot>`),{styles:a`
    slot {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
    }
    `});const wi=(o,i,n)=>{const r={},s=null==o?void 0:o.map((o=>{var s,a,l,c;const d=Object.entries(Object.assign(Object.assign({},t),e)).find((([e,t])=>t.name===o.name)),u=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([e,t])=>void 0!==t)).map((([e,t])=>`${e}="${t}"`)).join(" "),h=null!==(s=o.team)&&void 0!==s?s:"none";return r[h]=null!==(a=r[h])&&void 0!==a?a:[],r[h].push((()=>{var e;return we(Vt,{item:null!==(e=null==d?void 0:d[1].name)&&void 0!==e?e:"",row:i,col:n,payload:Object.assign({},o)})})),R`${fi(`<${null!==(l=null==d?void 0:d[1].name)&&void 0!==l?l:"span"} ${u}></${null!==(c=null==d?void 0:d[1].name)&&void 0!==c?c:"span"}>`)}`}));return R`<sprite-set .triggers=${r} col="${n}" row="${i}">${s}</sprite-set>`};Ee("fighter-info",(({player:e,row:t,col:o})=>R`<div class="sprite ${(null==e?void 0:e.health.current)<1?"dead":"alive"}">
            ${wi(e?[e]:[],t,o)}
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
        `],props:[{player:{type:Object},row:{type:Number},col:{type:Number}}]});const yi=ne`
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
}`,$i=ne`
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
`,ki=(e,t,o)=>`${function(e,t){var o,i,n;return t?at(t.start,e)?"active start":t.end&&(null!==(i=null===(o=t.trail)||void 0===o?void 0:o.length)&&void 0!==i?i:0)<1&&at(t.end,e)?"active unreachable":t.end&&at(t.end,e)?"active end":t.trail&&t.trail.some((t=>at(t,e)))?"active trail":(null===(n=t.inReach)||void 0===n?void 0:n.some((t=>at(t,e))))?"inactive":"inactive unreachable":""}(e,t)} ${function(e,t){return t?at(t.start,e)?"active start":t.end&&at(t.end,e)?"active end":t.range&&t.range.some((t=>at(t,e)))?"active trail":"inactive":""}(e,o)}`,xi=(e,t,o)=>{t&&t.end&&at(t.end,e)?function(e,t){t&&we(ao,e)}(e,t):o&&function(e,t){t&&we(po,e)}(e,o)};Ee("hexagon-element",(e=>{var t,o,i;tt(e,(()=>{e.addEventListener("click",(()=>we(Vt,{item:"hexagon",row:e.row,col:e.col})))}));const{row:n,col:r}=e,{get:s,set:a}=ot(e,{elements:e.elements,row:n,col:r}),{get:l,set:c}=ot(e,void 0),{get:d,set:u}=ot(e,void 0);$e(e,oo,(e=>(null==e?void 0:e.row.toString())===n.toString()&&(null==e?void 0:e.col.toString())===r.toString()),a),$e(e,no,c),$e(e,fo,u),$e(e,ao,(()=>c(void 0))),$e(e,ro,(()=>c(void 0))),$e(e,bo,(()=>u(void 0)));const h=s();return R`<div 
      class="hexagon ${ki(e,l(),d())}" 
      @mouseover=${()=>{l()&&we(so,{row:n,col:r})}}
      @click=${()=>(xi(e,l(),d()),document.dispatchEvent(new CustomEvent("hello-world",{detail:{hello:"world"}})))}
      style="background-image:url(assets/${null===(t=e.background)||void 0===t?void 0:t.file}.png); background-position: ${null===(o=e.background)||void 0===o?void 0:o.x}px ${null===(i=e.background)||void 0===i?void 0:i.y}px;">
      ${wi(h.elements,e.row,e.col)}</div>`}),{styles:[yi,$i],defaults:{background:void 0,elements:[],col:0,row:0}}),Ee("world-map",(e=>{var t;const{get:o,set:i}=ot(e,void 0);return $e(e,Rt,i),R`<div id="globe">${null===(t=o())||void 0===t?void 0:t.map.map(((e,t)=>R`<div class="row ${t%2==0?"push":""}" style="width: calc(${120*e.length}px + 20rem)">
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
    }`});const Oi="building-mill";var ji=Ee(Oi,(({team:e})=>R`<div style="background-image:url('assets/windmill_complete_${null!=e?e:"none"}.png'"></div>`),{styles:[ti,a`
        div {
            width: 80%;
            height: 80%;
        }
        `],defaults:{team:void 0}}),_i=Object.freeze({__proto__:null,name:Oi,default:ji});const Ei="building-castle-small";var Si=Ee(Ei,(e=>{const{get:t,set:o}=ot(e,"");return $e(e,So,o),R`<div class="${t()===e.team?"active":"inactive"}" style="background-image:url('assets/castle_small_${e.team}.png'"></div>`}),{styles:[ti,oi,a`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),Ai=Object.freeze({__proto__:null,name:Ei,default:Si});const Ti="lumberjack-small";var Mi=Ee(Ti,(e=>{const{get:t,set:o}=ot(e,"");return $e(e,So,o),R`<div class="${t()===e.team?"active":"inactive"}" style="margin: 0; background-image:url('assets/lumberjack_small_${e.team}.png'); background-size: auto; width: 100%; height: 100%;"></div>`}),{styles:[ti,oi,a`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),Ci=Object.freeze({__proto__:null,name:Ti,default:Mi});const zi="mine-small";var Ri=Ee(zi,(e=>{const{get:t,set:o}=ot(e,"");return $e(e,So,o),R`<div class="${t()===e.team?"active":"inactive"}" style="margin: 0; background-image:url('assets/mine_small_${e.team}.png'); background-size: auto; width: 100%; height: 100%;"></div>`}),{styles:[ti,oi,a`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),Hi=Object.freeze({__proto__:null,name:zi,default:Ri});const Ni={hay:0,iron:0,grain:0,wood:0,stone:0};var Ui=Do,Bi=Uo,Pi=()=>Object.assign(Object.assign({},Ni),{stone:4,wood:2,grain:1}),Di=()=>Object.assign(Object.assign({},Ni),{wood:500,grain:500,stone:500}),Ii=()=>Object.assign(Object.assign({},Ni),{stone:1e3,iron:1e3,grain:1e3});const Yi=a`
  :host {
    display: block;
    background-image: url("assets/sidebar/bg.png");
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
  `;Ee("health-bar",(({health:{current:e,max:t}})=>R`<loading-bar id="health" width="${e/t*100}%"></loading-bar>`));const Li=e=>parseInt(e.toString(),10),Gi=ne`
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
`,Wi=(e,t)=>R`
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
  `;Ee("sidebar-castle",(e=>{var t;const{selected:{payload:o,row:i,col:n}}=e,{team:r,health:s,actions:a}=o,l={row:Li(i),col:Li(n)},{get:c,set:d}=ot(e,void 0);$e(e,Zt,d);const{resources:u}=null!==(t=c())&&void 0!==t?t:{resources:{}};return R`
      <header>
        <building-castle-small id="castle" team="${r}"></building-castle-small>
        <health-bar id="health" .health="${s}"></health-bar>
        <stats-bar id="stats" .health="${s}" .actions="${a}"></stats-bar>
        <button-attack id="attack" .actions="${a}" .asset="${o}" .position="${l}"></button-attack>
      </header>
      <h3>${vt(ht.castle.build)}</h3>
      <div class="container">
        <button-image
          height="35px"
          src="assets/knight_${r}.png"
          title="${vt(ht.properties.actions.build.knight)}"
          @click=${async()=>await we(Xt,{team:r,row:i,col:n,origin:o})}
        >
          ${Wi(u,Bi())}
        </button-image>
        <button-image
          height="35px"
          src="assets/wagon_${r}.png"
          title="${vt(ht.properties.actions.build.wagon)}"
          @click=${async()=>await we(Ft,{team:r,row:i,col:n,origin:o})}
        >
          ${Wi(u,Ui())}
        </button-image>
        <button-image height="35px" 
          title="${vt(ht.properties.actions.build.iron)}"
          src="assets/resources/iron.png">
          ${Wi(u,Pi())}
        </button-image>
        <button-image height="35px" 
          title="${vt(ht.properties.actions.build.castle_medium)}"
          src="assets/castle_medium_${r}.png">
          ${Wi(u,Di())}
        </button-image>
        <button-image height="35px" 
          title="${vt(ht.properties.actions.build.castle_large)}"
          src="assets/castle_large_${r}.png">
          ${Wi(u,Ii())}
        </button-image>
      </div>`}),{styles:[Yi,Gi],defaults:{selected:{payload:{id:"",name:Ei,team:"",health:{current:0,max:0},actions:{current:0,max:0}},col:0,row:0}}});Ee("sidebar-knight",(e=>{const{selected:{payload:t,row:o,col:i}}=e,{health:n,actions:r}=t,s={row:Li(o),col:Li(i)};return R`
    <h3>${vt(ht.knight)}</h3>
    <div class="container">
        <img id="knight" src="assets/knight_${t.team}.png">
        <health-bar id="health" .health="${n}"></health-bar>
        <stats-bar id="stats" .health="${n}" .actions="${r}"></stats-bar>
        <button ?disabled=${r.current<1} id="move" title="${vt(ht.properties.actions.move)}" @click=${()=>we(io,{asset:Object.assign({},t),start:s})}>🦵</button>
        <button-attack id="attack" .actions="${r}" .asset="${t}" .position="${s}"></button-attack>
        <button ?disabled=${r.current<1} id="fortify" title="${vt(ht.properties.actions.fortify)}" >🏰</button>
    </div>`}),{styles:[Yi,a`
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
`],props:[{selected:{type:Object}}]});Ee("sidebar-wagon",(e=>{const{selected:{payload:t,row:o,col:i}}=e,{health:n,actions:r}=t,s={row:Li(o),col:Li(i)};return R`
    <h3>${vt(ht.wagon)}</h3>
    <div class="container">
        <img id="wagon" src="assets/wagon_${t.team}.png">
        <health-bar id="health" .health="${n}"></health-bar>
        <stats-bar id="stats" .health="${n}" .actions="${r}"></stats-bar>
        <button ?disabled=${r.current<1} id="move"  title="${vt(ht.properties.actions.move)}" @click=${()=>we(io,{asset:Object.assign({},t),start:s})}>🦵</button>
        <button ?disabled=${r.current<1} id="build_lumberjack" title="${vt(ht.properties.actions.build.lumberjack_small)}" @click=${()=>we(lo,{asset:Object.assign({},t),position:s})}>
            <img id="build_lumberjack_small" src="assets/lumberjack_small_${t.team}.png">
        </button>
        <button ?disabled=${r.current<1} id="build_mine" title="${vt(ht.properties.actions.build.mine_small)}" @click=${()=>we(ho,{asset:Object.assign({},t),position:s})}>
            <img id="build_mine_small" src="assets/mine_small_${t.team}.png">
        </button>
        <button ?disabled=${r.current<1} id="load"  title="${vt(ht.properties.actions.load)}">📦</button>
    </div>`}),{styles:[a`
    :host {
        display: block;
        background-image: url('assets/sidebar/bg.png');
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
`],props:[{selected:{type:Object}}]}),Ee("stats-bar",(({health:e,actions:t})=>R`${fi(vt(ht.properties.life,e.current,e.max))}<br>
    ${fi(vt(ht.properties.actions,t.current,t.max))}`)),Ee("button-attack",(({actions:e,asset:t,position:o})=>R`<button ?disabled=${e.current<1} id="attack" title="${vt(ht.properties.actions.attack)}" @click=${()=>we(mo,{asset:Object.assign({},t),start:o})}>⚔</button>
    `));const Zi=e=>({position:e?new lt(null==e?void 0:e.row,null==e?void 0:e.col):void 0,elements:e?[{item:e.item,payload:e.payload}]:[],dirty:!1});Ee("controls-sidebar",(async e=>{const{get:t,set:o}=ot(e,void 0);$e(e,Vt,o);const i=t(),{get:n,set:r}=ot(e,Zi(i)),s=n();return!s.dirty&&i&&new lt(i.row,i.col).equals(s.position)?r(Object.assign(Object.assign({},s),{elements:[...s.elements,{item:i.item,payload:i.payload}],dirty:"hexagon"===i.item})):r(Zi(i)),tt(e,(()=>{setTimeout((()=>{we(Nt)}),1)})),R`
        ${n().elements.map((e=>{var t,o,i,r,s,a;switch(e.item){case Ei:return R`<sidebar-castle 
                        .selected="${{row:null===(t=n().position)||void 0===t?void 0:t.row,col:null===(o=n().position)||void 0===o?void 0:o.col,payload:e.payload}}">
                    </sidebar-castle>`;case li:return R`<sidebar-knight
                        .selected="${{row:null===(i=n().position)||void 0===i?void 0:i.row,col:null===(r=n().position)||void 0===r?void 0:r.col,payload:e.payload}}">
                    </sidebar-knight>`;case ui:return R`<sidebar-wagon
                        .selected="${{row:null===(s=n().position)||void 0===s?void 0:s.row,col:null===(a=n().position)||void 0===a?void 0:a.col,payload:e.payload}}">
                    </sidebar-wagon>`;default:case Ei:return R``}}))}
    `}),{styles:a`:host { 
        position: absolute;
        display: block;
        min-width: 200px;
        width: 20%;
        right: 20px;
        top: 20px;
        z-index: 2;
    }`}),Ee("modal-battle",(e=>{var t,o;const{get:i,set:n}=ot(e,void 0),{get:r,set:s}=ot(e,void 0);return $e(e,jo,n),R`
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
            <button @click="${()=>{var e,t;return we(yo,{attacker:{asset:null===(e=i())||void 0===e?void 0:e.attacker[0],dices:[r()]},defender:null===(t=i())||void 0===t?void 0:t.defender[0],location:{row:i().location.row,col:i().location.col}})}}" ?disabled="${void 0===r()}">Würfeln</button>
        </p>
    </modal-window>`}),{styles:[ne`.body {
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
            background-image: url('assets/knight/health-bg.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
            & .current {
                background-image: url('assets/knight/health.png');
                background-size: contain;
                background-repeat: no-repeat;
                height: 15px;
            }
        }
        `]}),Ee("modal-dice-result",(e=>{const{get:t,set:o}=ot(e,void 0),i=ot(e,[]),n=ot(e,[]);let r=setTimeout((()=>{}),1);return $e(e,_o,(e=>{o(e),i.set(e.attacker),n.set(e.defender),clearTimeout(r),r=setTimeout((()=>{i.set(e.attacker_after),n.set(e.defender_after)}),5e3)})),R`
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
        `]}),Ee("modal-mill-taken",(e=>{var t,o,i,n,r;const{get:s,set:a}=ot(e,void 0);return $e(e,ko,a),R`
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
    `}),Ee("modal-no-more-turns",(e=>{const{getState:t,publish:o}=ot(e,void 0);return $e(e,to,o),R`
   <modal-window 
        .open=${!!t()} 
        preventClose>
        <h1 slot="header">Keine Aktionen übrig.</h1>
        <div class="body">
            Du hast keine Aktionen mehr übrig. Willst du weiter geben, oder noch rum schauen?
        </div>
        <p slot="footer">
            <button @click="${()=>(we(Ao),o(!1))}">Zug beenden</button>
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
            background-image: url('assets/knight/health-bg.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        .health-bar .current {
            background-image: url('assets/knight/health.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 15px;
        }
        `]}),Ee("modals-all",(()=>R`
    <modal-no-more-turns></modal-no-more-turns>
    <modal-battle></modal-battle>
    <modal-dice-result></modal-dice-result>
    <modal-mill-taken></modal-mill-taken>`)),Ee("footer-element",(o=>{const{get:i,set:n}=ot(o,void 0),{get:r,set:s}=ot(o,[]);return $e(o,So,n),$e(o,Jt,s),R`<footer class="${i()}">
    <div class="main ">
        ${((o,i="")=>{const n=null==o?void 0:o.map((o=>{var n,r;const s=Object.entries(Object.assign(Object.assign({},t),e)).find((([e,t])=>t.name===o.name)),a=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([e,t])=>void 0!==t)).map((([e,t])=>`${e}="${t}"`)).join(" "),l=$t(o)?{row:o.row,col:o.col}:{row:0,col:0};return R`<div
            @click="${()=>{we(Kt,Object.assign(Object.assign({item:o.name},l),{payload:o})),setTimeout((()=>{var e;null===(e=Po(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            @mouseover="${()=>{setTimeout((()=>{var e;null===(e=Po(o))||void 0===e||e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            style="position:relative; cursor: pointer; width: 120px;${i};">
                ${fi(`<${null!==(n=null==s?void 0:s[1].name)&&void 0!==n?n:"span"} ${a} style="${i};"></${null!==(r=null==s?void 0:s[1].name)&&void 0!==r?r:"span"}>`)}
        </div>`}));return R`<sprite-player-elements-grid>${n}</sprite-player-elements-grid>`})(r().sort(((e,t)=>e.name.localeCompare(t.name))).filter((e=>xt(e)&&e.actions.current>0)),"width: 10vh; height: 10vh;")}
    </div>
    <div class="action">
        <button-pure @click="${()=>we(Ao)}">
            <text-block type="paragraph" size="x-large">⌛</text-block> Zug beenden
        </button-pure>
    </div>
</footer>`}),{styles:[ii,ni("footer .main"),ne`
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
        & .main {
            grid-area: main;
            transition: background-color 2s;
            min-height: 10vh;
            max-height: 10vh;
            overflow-x: auto;
        }        
        &.red {
            background-color: #A95C44;
        }
        &.green {
            background-color: #178044;
        }
        & .action {
            grid-area: action;
            place-self: center;
        }
    }`]});const Ki=a`
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
`;var Vi;Ee("resource-grain",(()=>R`<div title="${vt(ut.grain)}"></div>`),{styles:[a`
        :host {
          background-image: url("assets/resources/grain.png");
        }
      `,Ki]}),Ee("resource-stone",(()=>R`<div title="${vt(ut.stone)}"></div>`),{styles:[a`
        :host {
          background-image: url("assets/resources/stone.png");
        }
      `,Ki]}),Ee("resource-iron",(()=>R`<div title="${vt(ut.iron)}"></div>`),{styles:[a`
        :host {
          background-image: url("assets/resources/iron.png");
        }
      `,Ki]}),Ee("resource-wood",(()=>R`<div title="${vt(ut.log)}"></div>`),{styles:[a`
        :host {
          background-image: url("assets/resources/log.png");
        }
      `,Ki]}),Ee("resource-hay",(()=>R`<div title="${vt(ut.hay)}"></div>`),{styles:[a`
        :host {
          background-image: url("assets/resources/hay.png");
        }
      `,Ki]}),Ee("resource-counter",(({count:e,collect:t})=>R`
        <slot></slot>
        ${e} ${t?R`<span>(+${t})</span>`:""}
    `),{styles:[a`
        :host {
            font-size: 4vh;
        }
        span {
            font-size: smaller;
        }
        `],defaults:{count:0,collect:void 0}}),Ee("header-element",(e=>{var t,o,i,n,r,s,a,l;const{get:c,set:d}=ot(e,void 0),{get:u,set:h}=ot(e,void 0),{get:v,set:g}=ot(e,void 0);$e(e,So,d),$e(e,Zt,h),$e(e,No,g);const m=null!==(t=u())&&void 0!==t?t:{resources:{}},f=(e,t,o)=>(e[t]=(e[t]||0)+o,e),p=null!==(i=null===(o=v())||void 0===o?void 0:o.resourcesToGenerate.reduce(((e,t)=>{var o,i;for(const n of wt)e=f(e,n,null!==(i=null===(o=t.resources[n])||void 0===o?void 0:o.generatedResource)&&void 0!==i?i:0);return e}),{}))&&void 0!==i?i:{};return R`<header class="${c()}">
        <resource-counter title="${vt(ut.hay)}" count="${m.resources.hay}" collect=${null!==(n=p.hay)&&void 0!==n?n:0}>
            <resource-hay></resource-hay>
        </resource-counter>
        <resource-counter title="${vt(ut.grain)}" count="${m.resources.grain}" collect=${null!==(r=p.grain)&&void 0!==r?r:0}>
            <resource-grain></resource-grain>
        </resource-counter>
        <resource-counter title="${vt(ut.stone)}" count="${m.resources.stone}" collect=${null!==(s=p.stone)&&void 0!==s?s:0}>
            <resource-stone></resource-stone>
        </resource-counter>
        <resource-counter title="${vt(ut.iron)}" count="${m.resources.iron}" collect=${null!==(a=p.iron)&&void 0!==a?a:0}>
            <resource-iron></resource-iron>
        </resource-counter>
        <resource-counter title="${vt(ut.log)}" count="${m.resources.wood}" collect=${null!==(l=p.wood)&&void 0!==l?l:0}>
            <resource-wood></resource-wood>
        </resource-counter>
    </header>`}),{styles:ne`
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
    }`}),null===(Vi=document.querySelector("body"))||void 0===Vi||Vi.addEventListener("keyup",(function(e){"Escape"===e.key&&we(Wt,!0)})),Ee("the-mill",(()=>((async({rows:e,cols:t})=>{const o=Ut({rows:e,cols:t}),i=Bt("green",{rows:e,cols:t}),n=Bt("red",{rows:e,cols:t}),r=it(0,e-1).map((e=>it(0,t-1).map((t=>({position:new lt(e,t),terrain:zt(),elements:[...Pt(o,e,t),...Pt(i,e,t),...Pt(n,e,t)]})))));await we(Rt,{map:r,teams:["red","green"]})})({rows:10,cols:10}),R`
    <controls-sidebar>sidebar</controls-sidebar>
    <map>
        <header-element>header</header-element>
        <world-map></world-map>
        <footer-element>
        </footer-element>
        <modals-all></modals-all>
    </map>

    `)),{styles:[ii,ni("world-map"),ni("controls-sidebar"),ne`
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
    `]});const qi=window.location.search.substring(1).split("&").reduce(((e,t)=>{const[o,i]=t.split("=");return e[o]=i,e}),{});document.documentElement.lang=qi.lang||"en";export{t as buildings,di as knight,e as player,vi as wagon};
//# sourceMappingURL=the-mill.js.map
