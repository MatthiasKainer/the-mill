var t=Object.freeze({__proto__:null,get knight(){return eo},get wagon(){return ro}}),e=Object.freeze({__proto__:null,get mill(){return xo},get castleSmall(){return Oo}});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,s=new RegExp(`${r}|${i}`);class a{constructor(t,e){this.parts=[],this.element=e;const o=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let a=0,c=-1,h=0;const{strings:p,values:{length:g}}=t;for(;h<g;){const t=i.nextNode();if(null!==t){if(c++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let n=0;for(let t=0;t<o;t++)l(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=p[h],o=u.exec(e)[2],n=o.toLowerCase()+"$lit$",r=t.getAttribute(n);t.removeAttribute(n);const i=r.split(s);this.parts.push({type:"attribute",index:c,name:o,strings:i}),h+=i.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const n=t.parentNode,r=e.split(s),i=r.length-1;for(let e=0;e<i;e++){let o,i=r[e];if(""===i)o=d();else{const t=u.exec(i);null!==t&&l(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),o=document.createTextNode(i)}n.insertBefore(o,t),this.parts.push({type:"node",index:++c})}""===r[i]?(n.insertBefore(d(),t),o.push(t)):t.data=r[i],h+=i}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&c!==a||(c++,e.insertBefore(d(),t)),a=c,this.parts.push({type:"node",index:c}),null===t.nextSibling?t.data="":(o.push(t),c--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),h++}}else i.currentNode=n.pop()}for(const t of o)t.parentNode.removeChild(t)}}const l=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},c=t=>-1!==t.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:o},parts:n}=t,r=document.createTreeWalker(o,133,null,!1);let i=g(n),s=n[i],a=-1,l=0;const c=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,i=g(n,i),s=n[i]}c.forEach((t=>t.parentNode.removeChild(t)))}const p=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},g=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(c(e))return o}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=t=>"function"==typeof t&&m.has(t),v={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class w{constructor(t,e,o){this.t=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.t)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let i,s=0,a=0,l=r.nextNode();for(;s<n.length;)if(i=n[s],c(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));s++}else this.t.push(void 0),s++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),x=` ${r} `;class k{constructor(t,e,o,n){this.strings=t,this.values=e,this.type=o,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let n=0;n<t;n++){const t=this.strings[n],s=t.lastIndexOf("\x3c!--");o=(s>-1||o)&&-1===t.indexOf("--\x3e",s+1);const a=u.exec(t);e+=null===a?t+(o?x:i):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==y&&(e=y.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=t=>null===t||!("object"==typeof t||"function"==typeof t),O=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class j{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,e=t.length-1,o=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=o[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!O(t))return t}let n="";for(let r=0;r<e;r++){n+=t[r];const e=o[r];if(void 0!==e){const t=e.value;if($(t)||!O(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||$(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.o=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=d()),t.i(this.endNode=d())}insertAfterPart(t){t.i(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.o=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.o);){const t=this.o;this.o=v,t(this)}const t=this.o;t!==v&&($(t)?t!==this.value&&this.l(t):t instanceof k?this.u(t):t instanceof Node?this.h(t):O(t)?this.p(t):t===b?(this.value=b,this.clear()):this.l(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}l(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.h(document.createTextNode(o)),this.value=t}u(t){const e=this.options.templateFactory(t);if(this.value instanceof w&&this.value.template===e)this.value.update(t.values);else{const o=new w(e,t.processor,this.options),n=o._clone();o.update(t.values),this.h(n),this.value=o}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,n=0;for(const r of t)o=e[n],void 0===o&&(o=new S(this.options),e.push(o),0===n?o.appendIntoPart(this):o.insertAfterPart(e[n-1])),o.setValue(r),o.commit(),n++;n<e.length&&(e.length=n,this.clear(o&&o.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class M{constructor(t,e,o){if(this.value=void 0,this.o=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.o=t}commit(){for(;f(this.o);){const t=this.o;this.o=v,t(this)}if(this.o===v)return;const t=!!this.o;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.o=v}}class E extends j{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends _{}let z=!1;(()=>{try{const t={get capture(){return z=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,o){this.value=void 0,this.o=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.g=t=>this.handleEvent(t)}setValue(t){this.o=t}commit(){for(;f(this.o);){const t=this.o;this.o=v,t(this)}if(this.o===v)return;const t=this.o,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.g,this.m),n&&(this.m=T(t),this.element.addEventListener(this.eventName,this.g,this.m)),this.value=t,this.o=v}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(z?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function H(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const n=t.strings.join(r);return o=e.keyString.get(n),void 0===o&&(o=new a(t,t.getTemplateElement()),e.keyString.set(n,o)),e.stringsArray.set(t.strings,o),o}const N=new Map,P=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,o,n){const r=e[0];if("."===r){return new E(t,e.slice(1),o).parts}if("@"===r)return[new A(t,e.slice(1),n.eventContext)];if("?"===r)return[new M(t,e.slice(1),o)];return new j(t,e,o).parts}handleTextExpression(t){return new S(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const U=(t,...e)=>new k(t,e,"html",R)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,W=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const D=t=>e=>{const o=W(e.type,t);let n=N.get(o);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},N.set(o,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(r);if(i=n.keyString.get(s),void 0===i){const o=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(o,t),i=new a(e,o),n.keyString.set(s,i)}return n.stringsArray.set(e.strings,i),i},L=["html","svg"],F=new Set,I=(t,e,o)=>{F.add(t);const n=o?o.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,t);const s=document.createElement("style");for(let t=0;t<i;t++){const e=r[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{L.forEach((e=>{const o=N.get(W(e,t));void 0!==o&&o.keyString.forEach((t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{o.add(t)})),h(t,o)}))}))})(t);const a=n.content;o?function(t,e,o=null){const{element:{content:n},parts:r}=t;if(null==o)return void n.appendChild(e);const i=document.createTreeWalker(n,133,null,!1);let s=g(r),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===o&&(a=p(e),o.parentNode.insertBefore(e,o));-1!==s&&r[s].index===l;){if(a>0){for(;-1!==s;)r[s].index+=a,s=g(r,s);return}s=g(r,s)}}(o,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(o){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),h(o,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const X={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Y=(t,e)=>e!==t&&(e==e||t==t),V={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y};class Z extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,o)=>{const n=this._attributeNameForProperty(o,e);void 0!==n&&(this._attributeToPropertyMap.set(n,o),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=V){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdateInternal(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||V}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=Y){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,n=e.converter||X,r="function"==typeof n?n:n.fromAttribute;return r?r(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,n=e.converter;return(n&&n.toAttribute||X.toAttribute)(t,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=V){const n=this.constructor,r=n._attributeNameForProperty(t,o);if(void 0!==r){const t=n._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,n=o._attributeToPropertyMap.get(t);if(void 0!==n){const t=o.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,o){let n=!0;if(void 0!==t){const r=this.constructor;o=o||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Z.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const B=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class G{constructor(t,e){if(e!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(B?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const K=(t,...e)=>{const o=e.reduce(((e,o,n)=>e+(t=>{if(t instanceof G)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[n+1]),t[0]);return new G(o,J)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Q={};class tt extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,o)=>t.reduceRight(((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t)),o),o=e(t,new Set),n=[];o.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!B){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new G(String(e),J)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?B?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Q}}tt.finalized=!0,tt.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const r=o.scopeName,i=P.has(e),s=q&&11===e.nodeType&&!!e.host,a=s&&!F.has(r),l=a?document.createDocumentFragment():e;if(((t,e,o)=>{let r=P.get(e);void 0===r&&(n(e,e.firstChild),P.set(e,r=new S(Object.assign({templateFactory:H},o))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:D(r)},o)),a){const t=P.get(l);P.delete(l);const o=t.value instanceof w?t.value.template:void 0;I(r,l,o),n(e,e.firstChild),e.appendChild(l),P.set(e,t)}!i&&s&&window.ShadyCSS.styleElement(e.host)};const et={};var ot;!function(t){t[t.SILENT=0]="SILENT",t[t.ERROR=1]="ERROR",t[t.INFO=80]="INFO",t[t.DEBUG=90]="DEBUG",t[t.TRACE=100]="TRACE"}(ot||(ot={}));let nt=ot.SILENT;const rt=t=>nt=t;let it=[];const st=(t,e,...o)=>{it.forEach((n=>n(ot.ERROR,t,e,...o))),nt>=ot.ERROR&&console.error(e,t,...o)},at=(t,e,...o)=>{it.forEach((n=>n(ot.INFO,t,e,...o))),nt>=ot.INFO&&(nt===ot.TRACE?console.trace:console.log)(e,t,...o)},lt=(t,e,...o)=>{it.forEach((n=>n(ot.DEBUG,t,e,...o))),nt>=ot.DEBUG&&(nt===ot.TRACE?console.trace:console.log)(e,t,...o)},ct={queue:{},list:{}};function dt(t){return t.reduce(((t,e)=>`${t};${e.name};`),"")}const ut=new class{constructor(){this.actionDictionary={}}on(t,e){if(Array.isArray(t)){const o=dt(t);if(ct.list[o])throw st("Hypothalamus.on",new Error("Cannot register the same list of hormones twice"),o),new Error("Cannot register the same list of hormones twice");at("[Hypothalamus.on] Adding new action when all in a list of hormones are released",o,t),ct.list[o]={hormones:[...t],callback:e}}else at("Hypothalamus.on","Adding new action when a hormone is released",t.name),this.actionDictionary[t.name]=this.actionDictionary[t.name]||[],this.actionDictionary[t.name].push(e)}drop(t){Array.isArray(t)?(lt("Hypothalamus.drop","Dropping a list of hormones",dt(t),t),delete ct.queue[dt(t)],delete ct.list[dt(t)]):(lt("Hypothalamus.drop","Dropping a hormone",t.name),this.actionDictionary[t.name]=[])}dropAll(){lt("Hypothalamus.dropAll","Dropping all hormones"),this.actionDictionary={},ct.queue={},ct.list={}}orchestrate(t,e){this.actionDictionary[t.name]&&this.actionDictionary[t.name].forEach((t=>t(e)));const o=Object.keys(ct.queue).filter((e=>e.indexOf(`;${t.name};`)>-1)),n=Object.keys(ct.list).filter((e=>e.indexOf(`;${t.name};`)>-1&&o.every((t=>t!==e))));n.forEach((t=>{ct.queue[t]={hormones:[...ct.list[t].hormones],values:{},callback:ct.list[t].callback}}));const r=[...new Set([...o,...n])];for(let o=0;o<r.length;o++){const n=r[o];ct.queue[n].hormones=ct.queue[n].hormones.filter((e=>e.name!==t.name)),ct.queue[n].values[t.name]=e,ct.queue[n].hormones.length<1&&(ct.queue[n].callback(ct.queue[n].values),delete ct.queue[n])}}};function ht(t,e={}){return pt(t,Object.assign(Object.assign({},e),{readOnce:!0}))}function pt(t,e={}){if(et[t]&&!e.loadIfExists)throw st("hormone.defineHormone",new Error("Hormone already created"),t),new Error("Hormone already created");if(et[t]&&e.loadIfExists)return lt("hormone.defineHormone","Hormone already created, reusing existing",t),{name:t};const{defaultValue:o,transformation:n,readOnce:r}=e;return et[t]={name:t,value:o,defaultValue:o,transformation:n,receptors:[],readOnce:null!=r&&r},{name:t}}async function gt(t,e){if(!t)throw st("hormone.releaseHormone",new Error("Hormone cannot be undefined")),new Error("Hormone cannot be undefined");const{name:o}=t;if(!et[o])throw st("hormone.releaseHormone",new Error("Hormone does not exist"),o),new Error("Hormone does not exist");var n;n=e,et[o].value=(void 0===n||n instanceof Function)&&e?e(et[o].value):e,at("hormone.releaseHormone","Releasing passed hormone",o,et[o].value);const{receptors:r,transformation:i}=et[o];i&&i(et[o].value);const s=et[o].value;return ut.orchestrate({name:o},s),await Promise.all(r.filter((t=>{const e=void 0===t.onlyIf||t.onlyIf(s);return lt("hormone.releaseHormone",e?"Keeping receptor because condition matched or no condition":"Filtered receptor from the triggers because condition not matched",t),e})).map((t=>(null==t?void 0:t.onTriggered)?null==t?void 0:t.onTriggered(s):s))),et[o].readOnce&&(lt("hormone.releaseHormone","Resetting hormone because it is readOnce",o),et[o].value=et[o].defaultValue),Object.assign({},et[o])}function mt(t,{name:e},o,n){const r=null!=n?n:o,i=n?o:void 0;if(!et[e])throw st("receptor.useReceptor",new Error("Hormone is not defined"),e),new Error(`Hormone "${e}" is not defined`);((t,e,o)=>{const n=(null==o?void 0:o.toString())||e;return!et[e].receptors.some((e=>e.parent===t&&e.key===n))})(t,e,i)?(at("receptor.useReceptor","Pushing new receptor to hormone",e,{parent:t}),et[e].receptors.push({key:(null==i?void 0:i.toString())||e,parent:t,onlyIf:i,onTriggered:r}),void 0!==et[e].value?r(et[e].value):void 0!==et[e].defaultValue&&r(et[e].defaultValue)):((t,e,...o)=>{it.forEach((n=>n(ot.TRACE,t,e,...o))),nt===ot.TRACE&&console.trace(e,t,...o)})("receptor.useReceptor","Receptor not pushed because already subscribed",e,{parent:t})}const ft=t=>Object.entries(t).reduce(((t,[e,o])=>(t[e]=function(t){return"boolean"==typeof t?{type:Boolean}:Array.isArray(t)?{type:Array}:"object"==typeof t?{type:Object}:{}}(o),t)),{}),vt=t=>{return(t=>void 0!==t&&void 0!==t.props)(t)?(t.props||[]).reduce(((t,e)=>(Object.entries(e).forEach((([e,o])=>t[e]=o)),t)),{}):(e=null==t?void 0:t.defaults,ft(e||{}));var e},bt={},wt=(t,e,o)=>{if(bt[t])return bt[t];customElements.define(t,class extends tt{static get properties(){return vt(o)}static get styles(){return null==o?void 0:o.styles}constructor(){super(),(t=>void 0!==t&&void 0!==t.defaults)(o)&&Object.entries(o.defaults).forEach((([t,e])=>{this[t]=e}))}render(){return e(this)}});const n=document.createElement(t);return bt[t]=n,n};function yt(t,e){return Array.from({length:e-t+1},((t,e)=>e))}class xt{constructor(t,e,o,n=1){this.x=t,this.y=e,this.z=o,this.costs=n}equals(t){return null!==t&&this.x===t.x&&this.y===t.y&&this.z===t.z}add(t){const{x:e,y:o,z:n}=this;return new xt(e+t.x,o+t.y,n+t.z)}remove(t){const{x:e,y:o,z:n}=this;return new xt(e-t.x,o-t.y,n-t.z)}vector(t){return new xt(t.x-this.x,t.y-this.y,t.z-this.z)}distance(t){return Math.max(Math.abs(this.x-t.x),Math.abs(this.y-t.y),Math.abs(this.z-t.z))}heuristic(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}range(t){const e=[];for(let o=-t;o<=t;o++)for(let n=Math.max(-t,-o-t);n<=Math.min(t,-o+t);n++)e.push(this.add(new xt(o,n,-o-n)));return e}direction(t){return kt[t]}directionTo(t){const e=yt(0,5).find((e=>this.neighbor(e).equals(t)));return void 0!==e&&e>=0?this.direction(e):null}neighbor(t){return this.add(this.direction(t))}neighbors(t){return yt(0,5).map((t=>this.neighbor(t))).filter((e=>t.some((t=>t.equals(e)))))}ring(t){const e=[],o=-1*t;for(const n of yt(o,t))for(const r of yt(Math.max(o,-1*n-o),Math.min(t,-1*n+t))){const t=-n-r;e.push(this.add(new xt(n,r,t)))}return e}cost(){return this.costs}toPosition(){const t=this.x+(this.z+(1&this.z))/2,e=this.z;return new jt(e,t)}toCoords(){return this.toPosition().toCoords()}toString(){return`${this.x}:${this.y}:${this.z}`}}const kt=[new xt(1,-1,0),new xt(1,0,-1),new xt(0,1,-1),new xt(-1,1,0),new xt(-1,0,1),new xt(0,-1,1)];const $t={manhattan:[{row:0,col:-1},{row:1,col:0},{row:0,col:1},{row:-1,col:0}],euclid:[{row:1,col:-1},{row:-1,col:1},{row:1,col:0},{row:0,col:1},{row:-1,col:0},{row:0,col:-1},{row:-1,col:-1},{row:1,col:1}]},Ot=(t,e)=>t.col.toString()===e.col.toString()&&t.row.toString()===e.row.toString();class jt{constructor(t,e,o="manhattan"){this.row=t,this.col=e,this.system=o}vector(t){return new jt(t.row-this.row,t.col-this.col)}toCube(){const t=this.col-(this.row+(1&this.row))/2,e=this.row;return new xt(t,-t-e,e)}toCoords(){const{row:t,col:e}=this;return{col:e,row:t}}neighbor(t){const e=_t($t[this.system][t]);return e.system=this.system,this.add(e)}neighbors(){return yt(0,$t[this.system].length-1).map((t=>this.neighbor(t)))}distance(t){return function(t,e){return Math.sqrt(Math.pow(e.col-t.col,2)+Math.pow(e.row-t.row,2))}(this,t)}manhattanDistance(t){return function(t,e){return Math.abs(Math.abs(t.col-e.col)+Math.abs(t.row-e.row))}(this,t)}add(t){const{col:e,row:o}=this;return new jt(o+t.row,e+t.col,this.system)}remove(t){const{col:e,row:o}=this;return new jt(o-t.row,e-t.col,this.system)}equals(t){return null!=t&&t.col.toString()===this.col.toString()&&t.row.toString()===this.row.toString()}toString(){return`${this.col}:${this.row}`}toEuclidPosition(){return new jt(this.row,this.col,"euclid")}toManhattanPosition(){return new jt(this.row,this.col,"manhattan")}static fromString(t){if(!t)return null;const[e,o]=t.split(":").map((t=>parseInt(t,10)));return new jt(o,e)}}const _t=({row:t,col:e})=>new jt(t,e);function St(){var t=(new Date).getTime(),e=performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(o){var n=16*Math.random();return t>0?(n=(t+n)%16|0,t=Math.floor(t/16)):(n=(e+n)%16|0,e=Math.floor(e/16)),("x"===o?n:3&n|8).toString(16)}))}const Mt={id:"building-castle-small",occurences:{min:1}},Et={green:t=>Math.max(.75*t.length,Math.round(Math.random()*(t.length-1))),red:t=>Math.min(.25*t.length,Math.round(Math.random()*(t.length-1)))},Ct={id:"building-mill",occurences:{min:1}};function zt(t){return void 0!==t&&t.max>0}const At=[Object.assign(Object.assign({},Ct),{min:0,max:2}),Object.assign(Object.assign({},Ct),{min:8,max:10})],Tt=({min:t,max:e},o,n)=>{const r=t=>o*n*(t/10);return Math.floor(Math.random()*(r(e)-r(t))+r(t))},Ht={gras:{sprite:{file:"hexagonTerrain_sheet",x:414,y:1906},movementCosts:1,defense:0},desert:{sprite:{file:"hexagonTerrain_sheet",x:902,y:627},movementCosts:4,defense:0},mud:{sprite:{file:"hexagonTerrain_sheet",x:658,y:912},movementCosts:4,defense:1},muddyHills:{sprite:{file:"hexagonTerrain_sheet",x:780,y:627},movementCosts:8,defense:3},forest:{sprite:{file:"hexagonTerrain_sheet",x:536,y:912},movementCosts:8,defense:3},mountain:{sprite:{file:"hexagonTerrain_sheet",x:414,y:1052},movementCosts:10,defense:9}},Nt=()=>{const t=Object.keys(Ht);return Ht[t[Math.floor(Math.random()*(t.length-1))]]},Pt=pt("game/world/worldLoaded"),Rt=pt("game/start"),Ut=pt("game/load/sidebar"),Wt=(t,{rows:e,cols:o})=>((t,e)=>{const o=new Array(e.rows*e.cols).map((()=>[]));return[Mt].forEach((e=>{var n;let r=e.occurences.factor?Math.max(e.occurences.min,o.length/e.occurences.factor):e.occurences.min;for(;r>0;){const i=Et[t](o);o[i]=[...null!==(n=o[i])&&void 0!==n?n:[],{name:e.id,team:t,id:St()}],r--}})),o})(t,{rows:e,cols:o}),qt=(t,e,o)=>{var n;return(null!==(n=t.pop())&&void 0!==n?n:[]).map((t=>Object.assign(Object.assign({},t),{row:e,col:o})))},Dt=async({rows:t,cols:e})=>{const o=(({rows:t,cols:e})=>(t=>{const e=new Array(t.rows*t.cols).map((()=>[]));return At.forEach((o=>{var n;let r=o.occurences.factor?Math.max(o.occurences.min,e.length/o.occurences.factor):o.occurences.min;for(;r>0;){const s=zt(o)?Tt(o,t.rows,t.cols):(i=e.length,Math.round(Math.random()*(i-1)));e[s]=[...null!==(n=e[s])&&void 0!==n?n:[],{name:o.id,id:St()}],r--}var i})),e})({rows:t,cols:e}))({rows:t,cols:e}),n=Wt("green",{rows:t,cols:e}),r=Wt("red",{rows:t,cols:e}),i=yt(0,t-1).map((t=>yt(0,e-1).map((e=>({position:new jt(t,e),terrain:Nt(),elements:[...qt(o,t,e),...qt(n,t,e),...qt(r,t,e)]})))));return await gt(Pt,{map:i,teams:["red","green"]}),i};function Lt(t){var e,o;return void 0!==t&&(null===(e=t)||void 0===e?void 0:e.row)>=0&&(null===(o=t)||void 0===o?void 0:o.col)>=0}function Ft(t){var e,o;return t&&(null===(o=null===(e=t)||void 0===e?void 0:e.actions)||void 0===o?void 0:o.max)>0}function It(t){var e,o;return t&&(null===(o=null===(e=t)||void 0===e?void 0:e.dices)||void 0===o?void 0:o.length)>0}class Xt{constructor(t=4086,e=Uint32Array){this.capacity=t,this.capacity=t,this._keys=[],this._priorities=new e(t+1),this.length=0}clear(){this.length=0}bubbleUp(t){const e=this._keys[t],o=this._priorities[t];for(;t>1;){const e=t>>>1;if(this._priorities[e]<=o)break;this._keys[t]=this._keys[e],this._priorities[t]=this._priorities[e],t=e}this._keys[t]=e,this._priorities[t]=o}bubbleDown(t){const e=this._keys[t],o=this._priorities[t],n=1+(this.length>>>1),r=this.length+1;for(;t<n;){const e=t<<1;if(e>=r)break;let n=this._priorities[e],i=this._keys[e],s=e;const a=e+1;if(a<r){const t=this._priorities[a];t<n&&(n=t,i=this._keys[a],s=a)}if(n>=o)break;this._keys[t]=i,this._priorities[t]=n,t=s}this._keys[t]=e,this._priorities[t]=o}push(t,e=0){if(this.length===this.capacity)throw new Error("Heap has reached capacity, can't push new items");const o=this.length+1;this._keys[o]=t,this._priorities[o]=e,this.bubbleUp(o),this.length++}pop(){const t=this._keys[1];return this.length--,this.length>0&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1)),t}peekPriority(){return this._priorities[1]}peek(){return this._keys[1]}toString(){if(0===this.length)return"(empty queue)";const t=Array(this.length-1);for(let e=0;e<this.length;e++)t[e]=this._priorities[e+1];return`[${t.join(" ")}]`}get[Symbol.toStringTag](){return"Heapify"}*[Symbol.iterator](){for(let t=0;t<this.length;t++){const e=this._priorities[t+1],o=this._keys[t+1];yield[o,e]}}*keys(){for(let t=0;t<this.length;t++)yield this._keys[t+1]}*priorities(){for(let t=0;t<this.length;t++)yield this._priorities[t+1]}}const Yt=t=>t.toPosition().toString(),Vt=ht("action/abort"),Zt=pt("player/update"),Bt=ht("player/request/select"),Jt=pt("player/buildings/item/selected"),Gt=pt("player/item/moved"),Kt=pt("player/knights/created"),Qt=pt("player/wagon/created"),te=pt("player/assets/loaded"),ee=pt("turn/player/actions/hasLeft"),oe=ht("turn/player/actions/none"),ne=ht("map/hexagon/updated",{readOnce:!0}),re=pt("modes/move/activate"),ie=pt("modes/move/deactivate"),se=pt("modes/move/hovered-target"),ae=pt("modes/move/end"),le=pt("modes/battle/activate"),ce=pt("modes/battle/active"),de=pt("modes/battle/end"),ue=pt("modes/battle/deactivate"),he=pt("battle/started"),pe=pt("battle/dice/thrown"),ge=pt("battle/player/attacked"),me=pt("mill/takeover"),fe=pt("modal/battle/open"),ve=pt("modal/dice-result/open"),be=pt("turn/world/started"),we=pt("turn/world/accepted"),ye=pt("turn/player/complete"),xe=pt("turn/world/complete");function ke(t){return t.reduce(((t,e)=>t+function(t){return t.sides[Math.floor(Math.random()*t.sides.length)].value}(e)),0)}const $e=()=>({grain:100,iron:200,hay:0,log:0,stone:0});function Oe(t,e){if(!t||!t.map)return[];const o=t=>e===t.team,n=[];for(const e of t.map)for(const t of e)n.push(...t.elements.filter(o));return n}function je(t){var e,o,n,r,i;if(!t)return;return[...null!==(i=null===(r=null===(n=null===(o=null===(e=null===document||void 0===document?void 0:document.querySelector("the-mill"))||void 0===e?void 0:e.shadowRoot)||void 0===o?void 0:o.querySelector("world-map"))||void 0===n?void 0:n.shadowRoot)||void 0===r?void 0:r.querySelectorAll("hexagon-element"))&&void 0!==i?i:[]].find((e=>{var o,n;return null===(n=null===(o=e.shadowRoot)||void 0===o?void 0:o.querySelector("sprite-set"))||void 0===n?void 0:n.querySelector(`[id="${t.id}"]`)}))}document.deepQuerySelector=je;const _e=()=>({grain:50,iron:0,hay:0,log:50,stone:0});let Se,Me={},Ee=[],Ce=[],ze={};const Ae=()=>ze[Se],Te=t=>t.actions.current>0,He=({team:t})=>t===Se;ut.on(Pt,(t=>{Ee=[],t.map.forEach(((t,e)=>{t.forEach(((t,o)=>{const n=new jt(e,o).toCube();t.terrain.movementCosts&&(n.costs=t.terrain.movementCosts),Ee.push(n)}))})),Me=t,["green","red"].forEach((t=>{ze[t]={resources:{hay:100,grain:200,iron:200,log:100,stone:100}}})),gt(Rt)})),ut.on(Vt,(async t=>{t&&(gt(ie),gt(ue))})),ut.on([Rt,Ut],(()=>{gt(be)})),ut.on(be,(()=>{Ce=[...Me.teams],Se=Ce.pop(),gt(we,Se)})),ut.on(we,(t=>{const e=Oe(Me,t);gt(te,e);const o=null==e?void 0:e.find((t=>t.name===ko));Lt(o)&&gt(Bt,{item:ko,row:o.row,col:o.col,payload:o}),setTimeout((()=>{var t;null===(t=je(o))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2),gt(Zt,(t=>Object.assign({},ze[t]))(t))})),ut.on(Bt,(async t=>{await gt(Jt,Object.assign({},t)),await gt(Jt,Object.assign(Object.assign({},t),{item:"hexagon"}))})),ut.on(ye,(()=>{Se=Ce.pop(),void 0===Se?gt(xe):gt(we,Se)})),ut.on(xe,(()=>{Me.map.forEach((t=>{t.forEach((({elements:t})=>{((...t)=>{t.forEach((t=>{t.actions.current=t.actions.max}))})(...t.filter(Ft))}))})),gt(be)}));const Ne=(t,e)=>{const o=Object.assign({},ze[t].resources);for(const[t,n]of Object.entries(e)){if(o[t]<n)return!1;o[t]-=n}return ze[t].resources=o,!0};ut.on(Kt,(({row:t,col:e,team:o})=>{if(!He({team:o}))return;if(!Ne(o,{grain:100,iron:200,hay:0,log:0,stone:0}))return;const n=(({team:t,row:e,col:o})=>({id:St(),name:Qe,team:t,row:e,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10},dices:[{name:"Standardwaffe",story:"Eine faire, ausgewogene Waffe die jeder Ritter haben sollte",sides:[{value:3},{value:3},{value:3},{value:4},{value:5},{value:6}]},{name:"Mächtiger Schlag des Betrugs",story:"Eine Waffe, die bis zu 12 Schaden verursachen kann, doch auch eine hohe Wahrscheinlichkeit hat gar keinen Schaden zu verursachen, oder sogar den Ritter selbst zu verletzen!",sides:[{value:-3},{value:0},{value:0},{value:6},{value:12}]}]}))({row:t,col:e,team:o});Me.map[t][e].elements.push(n),gt(ne,{row:t,col:e,elements:[...Me.map[t][e].elements]}),gt(te,Oe(Me,o)),gt(Zt,Ae())})),ut.on(Qt,(({row:t,col:e,team:o})=>{if(!He({team:o}))return;if(!Ne(o,{grain:50,iron:0,hay:0,log:50,stone:0}))return;const n=(({team:t,row:e,col:o})=>({id:St(),name:oo,team:t,row:e,col:o,movement:{points:10},actions:{current:2,max:2},health:{current:10,max:10}}))({row:t,col:e,team:o});Me.map[t][e].elements.push(n),gt(ne,{row:t,col:e,elements:[...Me.map[t][e].elements]}),gt(te,Oe(Me,o)),gt(Zt,Ae())})),ut.on(ee,(()=>{void 0===((t,e)=>{for(const o of t.map)for(const t of o){const o=t.elements.filter((t=>It(t))).map((t=>t)).find((t=>t.team===e&&t.actions.current>0));if(o)return o}})(Me,Se)&&gt(oe,!0)}));const Pe=t=>Number.parseInt(t.toString(),10);let Re,Ue;ut.on(re,(async t=>{Ue&&await gt(ue),He(t.asset)&&(Re=t)})),ut.on(ie,(()=>{Re=void 0})),ut.on(se,(async t=>{var e,o;if(!Re)return;const n=new jt(Pe(Re.start.row),Pe(Re.start.col)).toCube(),r=new jt(Pe(t.row),Pe(t.col)).toCube(),i=t=>{const{row:e,col:o}=t.toCoords();return Me.map[e][o].elements.filter((t=>t.team!==(null==Re?void 0:Re.asset.name))).some((t=>It(t)))},s=((t,e,o,n,r)=>{const i=new Xt;i.push(t,0);const s={},a={},l=[];let c=!1;if(s[Yt(t)]=Yt(t),a[Yt(t)]=0,t.equals(e))return{path:[]};if(n(e))return{path:[]};for(;i.length>0;){const t=i.pop();if(t.equals(e)){c=!0;break}if(i.length>1e3)throw new Error("No what kinda path are you searching for?!");l.push(t.toPosition().toString());for(const c of t.neighbors(o).filter((t=>!s[Yt(t)])).map((t=>{var e;return null!==(e=o.find((e=>e.equals(t))))&&void 0!==e?e:t}))){if(n(c))continue;l.some((t=>t===Yt(c)))||l.push(Yt(c));const o=a[Yt(t)]+c.cost();r<o||(!a[Yt(c)]||o<a[Yt(c)])&&(a[Yt(c)]=o,i.push(c,o+e.heuristic(c)),s[Yt(c)]=t.toPosition().toString())}}const d=t.toPosition();if(!c)return{path:[],visited:l};let u=e.toPosition();const h=[];do{h.push(u),u=jt.fromString(s[u.toString()])}while(null!==u&&!u.equals(d));return{path:h.reverse(),visited:l}})(n,r,Ee,i,Re.asset.movement.points).path;let a=t;i(r)&&(a=null!==(o=null===(e=[...s].pop())||void 0===e?void 0:e.toCoords())&&void 0!==o?o:Re.start),console.log("MoveModeTargetHovered",Object.assign(Object.assign({},Re),{trail:s,end:a})),await gt(re,Object.assign(Object.assign({},Re),{trail:s,end:a}))})),ut.on(ae,(async t=>{var e,o;if(!Re)return;if((null!==(o=null===(e=Re.trail)||void 0===e?void 0:e.length)&&void 0!==o?o:0)<1)return;const{start:n,asset:r}=Re;if(!He(r))return;if(void 0===r.actions&&console.error("asset.actions undefined",r),!Te(r))return;if(Ot(Re.start,t))return void gt(ie);r.actions.current-=1;const i=[...Me.map[n.row][n.col].elements];Me.map[n.row][n.col].elements=[],i.forEach((e=>{e.id!==r.id?Me.map[n.row][n.col].elements.push(Object.assign(Object.assign({},e),{row:n.row,col:n.col})):Me.map[t.row][t.col].elements.push(Object.assign(Object.assign({},e),{row:t.row,col:t.col}))})),await gt(ne,{row:n.row,col:n.col,elements:[...Me.map[n.row][n.col].elements]}),await gt(ne,{row:t.row,col:t.col,elements:[...Me.map[t.row][t.col].elements]}),await gt(ie),await gt(Gt,{asset:r,location:t}),await gt(ee)})),ut.on(le,(async t=>{He(t.asset)&&(Re&&await gt(ie),Ue=Object.assign(Object.assign({},t),{range:new jt(t.start.row,t.start.col).toCube().range(1).map((t=>t.toPosition().toCoords()))}),gt(ce,Ue))})),ut.on(de,(async t=>{if(!Ue||!He(Ue.asset))return;if(Ot(Ue.start,t))return void gt(ue);const{row:e,col:o}=t,{asset:n}=Ue,r=[...Me.map[e][o].elements].filter((t=>It(t)&&t.team!==n.team));Te(n)&&r.length>0&&(n.actions.current-=1,await gt(he,{location:t,attacker:[n],defender:[...r]})),gt(te,Oe(Me,n.team)),gt(ue),await gt(ee)})),ut.on(ue,(()=>Ue=void 0)),ut.on(Gt,(async({asset:t,location:e})=>{if(!He(t))return;const{row:o,col:n}=e,r=[...Me.map[o][n].elements].filter((e=>e.id!==t.id)).filter((e=>e.name===wo&&e.team!==t.team));if(r.length>0&&It(t)){const o={asset:r[0],transfered:{from:r[0].team,to:t.team},location:e,by:t,team:t.team};await gt(me,o)}else gt(te,Oe(Me,t.team)),await gt(ee)})),ut.on(me,(({location:t,team:e,asset:o})=>{if(!He({team:e}))return;const{row:n,col:r}=t,i=[...Me.map[n][r].elements];Me.map[n][r].elements=[],i.forEach((t=>{t.id!==o.id?Me.map[n][r].elements.push(t):Me.map[n][r].elements.push(Object.assign(Object.assign({},t),{team:e}))})),gt(te,Oe(Me,e))})),ut.on(he,(t=>{gt(fe,t)})),ut.on(pe,(t=>{if(!He(t.attacker.asset))return;const e=ke(t.attacker.dices);gt(ge,{attacker:t.attacker.asset,defender:t.defender,damage:e,location:t.location})})),ut.on(ge,(t=>{const{defender:e,damage:o,attacker:n}=t;o<0?n.health.current+=o:e.health.current-=o;const{row:r,col:i}=t.location,s=[...Me.map[r][i].elements];Me.map[r][i].elements=[],s.forEach((t=>{t.id===e.id?e.health.current>0&&Me.map[r][i].elements.push(e):t.id===n.id?n.health.current>0&&Me.map[r][i].elements.push(n):Me.map[r][i].elements.push(t)})),gt(ne,{row:r,col:i,elements:[...Me.map[r][i].elements]}),gt(fe,void 0),gt(ve,{attacker:[n],defender:[e],location:t.location,result:o})})),window.location.hash.indexOf("log")>=0&&rt(ot.INFO),window.location.hash.indexOf("trace")>=0&&rt(ot.TRACE);const We=K`
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
`,qe=K`
.inactive {
    opacity: 0.8;
    filter: grayscale(100%);
}`,De=K`
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
`,Le=t=>K`
     ${t} {
        scrollbar-color:  #888 #f1f1f1;
        scrollbar-width: thin;
     }
`;wt("button-image",(t=>{const e=t.height?`height:${t.height};`:"";return U`<button style="${e}; background-image: url('${t.src}'), url('/assets/sidebar/btn_1.png')">
        <slot></slot>
    </button>`}),{styles:K`
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
    `,defaults:{src:"",height:""}}),wt("button-pure",(()=>U`<button>
        <slot></slot>
    </button>`),{styles:K`
    
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
    `});const Fe=K`
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
`,Ie=K`
    header {
        position: relative;
        height: 2rem;
    }
    #close {
        position: absolute;
        right: 12px;
        font-size: 2rem;
    }
`,Xe=(t,e)=>{t.dispatchEvent(new CustomEvent(e))};wt("modal-window",(t=>t.open?U`
    <div id="background" @click="${()=>t.preventClose&&Xe(t,"close")}"></div>
    <div id="modal">
        <header>
            ${t.preventClose?U``:U`<button-pure id="close" @click="${()=>Xe(t,"close")}"><text-block size="large">X</text-block></button-pure>`}
            <slot name="header"></slot>
        </header>
        <div>
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
    `:U``),{styles:[Fe,Ie],defaults:{open:!1,preventClose:!1}});var Ye="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ve(t){var e={exports:{}};return t(e,e.exports),e.exports}var Ze=Ve((function(t,e){Object.defineProperty(e,"v",{value:!0}),e.shallowClone=void 0,e.shallowClone=function(t){return"object"!=typeof t||!t||t instanceof Date||t instanceof RegExp?t:Array.isArray(t)?[...t]:Object.assign({},t)}})),Be=Ve((function(t,e){function o(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}function n(t){const e=t;if(e.k)return e;const n=o(t),r=n.updated;return e.k={index:0,count:0,states:[],reducers:[]},n.updated=t=>(e.k.index=0,r(t)),e}Object.defineProperty(e,"v",{value:!0}),e.withReducer=e.withState=e.decorate=e.asUpdateableLitElement=void 0,e.asUpdateableLitElement=o,e.decorate=n,e.withState=function(t,e,o={}){const r=n(t),{index:i,count:s}=r.k;return i===s?(r.k.index++,r.k.count++,r.k.states.push(e),e):(r.k.index++,o.updateDefault&&r.k.states[i].inject(e.getState()),r.k.states[i])},e.withReducer=function(t,e){const o=n(t),{index:r,count:i,reducers:s}=o.k;return r!==i||s[r-1]?o.k.reducers[r-1]:(o.k.reducers[r-1]=e,e)}})),Je=Ve((function(t,e){var o=Ye&&Ye.$||function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function s(t){try{l(n.next(t))}catch(t){i(t)}}function a(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"v",{value:!0}),e.useState=void 0,e.useState=(t,e,n={})=>{let r=Ze.shallowClone(e);const i=[()=>t.requestUpdate()];return Be.withState(t,{publish:t=>o(void 0,void 0,void 0,(function*(){r!==t&&(r=Ze.shallowClone(t),i.forEach((t=>t(r))))})),subscribe:t=>i.push(t),getState:()=>r,inject:t=>{r=t}},n)}})),Ge=Ve((function(t,e){Object.defineProperty(e,"v",{value:!0}),e.useReducer=void 0,e.useReducer=(t,e,o,n={})=>{const{getState:r,publish:i}=Je.useState(t,o,n),s=[];return Be.withReducer(t,{getState:r,subscribe:t=>s.push(t),when:(t,e)=>s.push(((o,n)=>o===t&&e(n))),publish:(o,a)=>{const l=e(r());l[o]&&(i(l[o](a)),s.forEach((t=>t(o,r()))),n.dispatchEvent&&t.dispatchEvent(new CustomEvent(o,{detail:r()})))}})}})),Ke=Ve((function(t,e){Object.defineProperty(e,"v",{value:!0}),Object.defineProperty(e,"useState",{enumerable:!0,get:function(){return Je.useState}}),Object.defineProperty(e,"useReducer",{enumerable:!0,get:function(){return Ge.useReducer}})}));wt("modal-container",(t=>{const{getState:e,publish:o}=Ke.useState(t,!1);return U`
        <button-pure @click="${()=>o(!0)}"><slot></slot></button-pure>
        <modal-window .open=${e()} @close=${()=>o(!1)}>
            <slot slot="header" name="header"></slot>
            <slot name="body"></slot>
            <slot slot="footer" name="footer"></slot>
        </modal-window>
    `}));wt("text-block",(({size:t,type:e})=>U`<span class="${t} ${e}"><slot></slot></span>`),{styles:[K`
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
`,K`
    .inline {
        display: inline;
    }
    .paragraph {
        display: block;
    }
`],defaults:{size:"medium",type:"inline"}});wt("loading-bar",(({width:t})=>U`
    <div class="progress-bar">
        <span class="bar">
            ${"0%"===t?U``:U`<span class="progress" style="width: ${t};"></span>`}
        </span>
    </div>
    `),{styles:[K`
    
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
`],defaults:{width:"100%"}});wt("dice-roll",(({result:t})=>U`<div id="cube">
        <div id="side1"></div>
        <div id="side2"></div>
        <div id="side3">${t}</div>
        <div id="side4"></div>
        <div id="side5"></div>
        <div id="side6"></div>
    </div>`),{styles:K`
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
`,props:[{result:{type:Number}}]});const Qe="player-knight";var to=wt(Qe,(t=>{const{getState:e,publish:o}=Ke.useState(t,"");return mt(t,we,o),U`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/knight_${t.team}.png'"></div>`}),{styles:[We,qe,K`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),eo=Object.freeze({__proto__:null,name:Qe,default:to});const oo="player-wagon";var no=wt(oo,(t=>{const{getState:e,publish:o}=Ke.useState(t,"");return mt(t,we,o),U`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/wagon_${t.team}.png'"></div>`}),{styles:[We,qe,K`
        div {
            background-size: contain;
            opacity: 1;
        }
        `],defaults:{team:""}}),ro=Object.freeze({__proto__:null,name:oo,default:no});wt("dice-selector",(t=>{var e;return U`${null===(e=t.dices)||void 0===e?void 0:e.map((e=>U`<div>
        <input type="radio" 
            @click=${()=>t.dispatchEvent(new CustomEvent("select",{detail:e}))}
            id="${e.name}" 
            name="dice" 
            value="${e.name}">
        <label for="${e.name}">
            <strong>${e.name}</strong> - ${e.story}
            <div class="sides" style="grid-template-columns: 1fr ${e.sides.map((()=>"1fr")).join(" ")};">
                <h5>Würfelergebnisse</h5>
                ${e.sides.map((t=>U`<div class="side">${t.value}</div>`))}
            </div>
        </label>
    </div>`))}`}),{styles:K`
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
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const io=new WeakMap,so=(ao=t=>e=>{if(!(e instanceof S))throw new Error("unsafeHTML can only be used in text bindings");const o=io.get(e);if(void 0!==o&&$(t)&&t===o.value&&e.value===o.fragment)return;const n=document.createElement("template");n.innerHTML=t;const r=document.importNode(n.content,!0);e.setValue(r),io.set(e,{value:t,fragment:r})},(...t)=>{const e=ao(...t);return m.set(e,!0),e});var ao,lo=Ve((function(t,e){function o(t){if(!t.dispatchEvent||!t.requestUpdate)throw new Error("Element missing required functions (dispatchEvent/requestUpdate)");return t}function n(t){const e=t;if(e.O)return e;const n=o(t),r=n.updated;return e.O={index:0,count:0,effects:[]},n.updated=t=>(e.O.index=0,r(t)),e}Object.defineProperty(e,"v",{value:!0}),e.withEffect=e.decorate=e.asUpdateableLitElement=void 0,e.asUpdateableLitElement=o,e.decorate=n,e.withEffect=function(t,e){const o=n(t),{index:r,count:i}=o.O;return r===i?(o.O.index++,o.O.count++,o.O.effects.push(e),e):(o.O.index++,o.O.effects[r])}})),co=Ve((function(t,e){function o(t,e,o){const n=lo.withEffect(t,{on:e,observe:["__initial__dirty"]});n.observe.some(((t,e)=>o[e]!==t))&&n.on(),n.observe=o}Object.defineProperty(e,"v",{value:!0}),e.useOnce=e.useEffect=void 0,e.useEffect=o,e.useOnce=(t,e)=>o(t,e,[])})),uo=Ve((function(t,e){Object.defineProperty(e,"v",{value:!0}),Object.defineProperty(e,"useEffect",{enumerable:!0,get:function(){return co.useEffect}}),Object.defineProperty(e,"useOnce",{enumerable:!0,get:function(){return co.useOnce}})}));async function ho(t){for(const e of t)await e()}const po=(t,e)=>{var o,n;return[...null!==(o=e.none)&&void 0!==o?o:[],...null!==(n=e[t])&&void 0!==n?n:[]]};wt("sprite-set",(t=>{const{getState:e,publish:o}=Ke.useState(t,void 0),{getState:n,publish:r}=Ke.useState(t,void 0);return mt(t,ne,(e=>t.row.toString()===(null==e?void 0:e.row.toString())&&t.col.toString()===(null==e?void 0:e.col.toString())),o),mt(t,we,r),e()&&ho(po(n(),t.triggers)).then((()=>gt(Jt,{item:"hexagon",row:t.row,col:t.col}))),uo.useOnce(t,(()=>{t.addEventListener("click",(async()=>{ho(po(n(),t.triggers))}))})),U`<slot></slot>`}),{defaults:{row:0,col:0,triggers:{}}}),wt("sprite-player-elements-grid",(()=>U`<slot></slot>`),{styles:K`
    slot {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(6, 1fr);
    }
    `});const go=(o,n,r)=>{const i={},s=null==o?void 0:o.map((o=>{var s,a,l,c;const d=Object.entries(Object.assign(Object.assign({},e),t)).find((([t,e])=>e.name===o.name)),u=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([t,e])=>void 0!==e)).map((([t,e])=>`${t}="${e}"`)).join(" "),h=null!==(s=o.team)&&void 0!==s?s:"none";return i[h]=null!==(a=i[h])&&void 0!==a?a:[],i[h].push((()=>{var t;return gt(Jt,{item:null!==(t=null==d?void 0:d[1].name)&&void 0!==t?t:"",row:n,col:r,payload:Object.assign({},o)})})),U`${so(`<${null!==(l=null==d?void 0:d[1].name)&&void 0!==l?l:"span"} ${u}></${null!==(c=null==d?void 0:d[1].name)&&void 0!==c?c:"span"}>`)}`}));return U`<sprite-set .triggers=${i} col="${r}" row="${n}">${s}</sprite-set>`};wt("fighter-info",(({player:t,row:e,col:o})=>U`<div class="sprite ${(null==t?void 0:t.health.current)<1?"dead":"alive"}">
            ${go(t?[t]:[],e,o)}
        </div>
        <div class="info">
            <h3>Gesundheit</h3>
            <loading-bar width="${(null==t?void 0:t.health.current)/(null==t?void 0:t.health.max)*100}%"></loading-bar>
            <p>${null==t?void 0:t.health.current} von ${null==t?void 0:t.health.max}</p>
        </div>`),{styles:[K`
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
        `],props:[{player:{type:Object},row:{type:Number},col:{type:Number}}]});const mo=K`
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
}`,fo=K`
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
`,vo=(t,e,o)=>`${function(t,e){var o,n;return e?Ot(e.start,t)?"active start":e.end&&(null!==(n=null===(o=e.trail)||void 0===o?void 0:o.length)&&void 0!==n?n:0)<1&&Ot(e.end,t)?"active unreachable":e.end&&Ot(e.end,t)?"active end":e.trail&&e.trail.some((e=>Ot(e,t)))?"active trail":"inactive":""}(t,e)} ${function(t,e){return e?Ot(e.start,t)?"active start":e.end&&Ot(e.end,t)?"active end":e.range&&e.range.some((e=>Ot(e,t)))?"active trail":"inactive":""}(t,o)}`,bo=(t,e,o)=>{e&&e.end&&Ot(e.end,t)?function(t,e){e&&gt(ae,t)}(t,e):o&&function(t,e){e&&gt(de,t)}(t,o)};wt("hexagon-element",(t=>{var e,o,n;uo.useOnce(t,(()=>{t.addEventListener("click",(()=>gt(Jt,{item:"hexagon",row:t.row,col:t.col})))}));const{row:r,col:i}=t,{getState:s,publish:a}=Ke.useState(t,{elements:t.elements,row:r,col:i}),{getState:l,publish:c}=Ke.useState(t,void 0),{getState:d,publish:u}=Ke.useState(t,void 0);mt(t,ne,(t=>(null==t?void 0:t.row.toString())===r.toString()&&(null==t?void 0:t.col.toString())===i.toString()),a),mt(t,re,c),mt(t,ce,u),mt(t,ae,(()=>c(void 0))),mt(t,ie,(()=>c(void 0))),mt(t,ue,(()=>u(void 0)));const h=s();return U`<div 
      class="hexagon ${vo(t,l(),d())}" 
      @mouseover=${()=>{l()&&gt(se,{row:r,col:i})}}
      @click=${()=>(bo(t,l(),d()),document.dispatchEvent(new CustomEvent("hello-world",{detail:{hello:"world"}})))}
      style="background-image:url(/assets/${null===(e=t.background)||void 0===e?void 0:e.file}.png); background-position: ${null===(o=t.background)||void 0===o?void 0:o.x}px ${null===(n=t.background)||void 0===n?void 0:n.y}px;">
      ${go(h.elements,t.row,t.col)}</div>`}),{styles:[mo,fo],defaults:{background:void 0,elements:[],col:0,row:0}}),wt("world-map",(t=>{var e;const{getState:o,publish:n}=Ke.useState(t,void 0);return mt(t,Pt,n),U`<div id="globe">${null===(e=o())||void 0===e?void 0:e.map.map(((t,e)=>U`<div class="row ${e%2==0?"push":""}" style="width: calc(${120*t.length}px + 20rem)">
                ${t.map(((t,o)=>U`<hexagon-element 
                        .background=${t.terrain.sprite} 
                        .elements="${t.elements}" 
                        row="${e}" col="${o}">
                    </hexagon-element>`))}
            </div>
            `))}</div>`}),{styles:K`
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
    }`});const wo="building-mill";var yo=wt(wo,(({team:t})=>U`<div style="background-image:url('/assets/windmill_complete_${null!=t?t:"none"}.png'"></div>`),{styles:[We,K`
        div {
            width: 80%;
            height: 80%;
        }
        `],defaults:{team:void 0}}),xo=Object.freeze({__proto__:null,name:wo,default:yo});const ko="building-castle-small";var $o=wt(ko,(t=>{const{getState:e,publish:o}=Ke.useState(t,"");return mt(t,we,o),U`<div class="${e()===t.team?"active":"inactive"}" style="background-image:url('/assets/castle_small_${t.team}.png'"></div>`}),{styles:[We,qe,K`
        :host {
            filter: hue-rotate(0deg);
        }
        `],defaults:{team:"",row:void 0,col:void 0}}),Oo=Object.freeze({__proto__:null,name:ko,default:$o});const jo={hay:0,iron:0,grain:0,log:0,stone:0};var _o=_e,So=$e,Mo=()=>Object.assign(Object.assign({},jo),{stone:4,log:2,grain:1}),Eo=()=>Object.assign(Object.assign({},jo),{log:500,grain:500,stone:500}),Co=()=>Object.assign(Object.assign({},jo),{stone:1e3,iron:1e3,grain:1e3});const zo=K`
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
    margin: 15px;
  }
  building-castle-small {
    position: relative;
    display: block;
    width: 4em;
    height: 4em;
  }
  h3 {
    color: var(--colorMain);
    text-align: center;
    margin-top: 0;
  }
  resource-counter {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1rem;
  }
  .enough {
    color: var(--colorMain);
  }
  .lack {
    color: var(--colorHighlight);
  }
`,Ao=(t,e)=>U`
    ${e.hay>0?U`<resource-counter
          count="${e.hay}"
          class="${t.hay>=e.hay?"enough":"lack"}"
        >
          <resource-hay></resource-hay>
        </resource-counter>`:U``}
    ${e.grain>0?U`<resource-counter
          count="${e.grain}"
          class="${t.grain>=e.grain?"enough":"lack"}"
        >
          <resource-grain></resource-grain>
        </resource-counter>`:U``}
    ${e.log>0?U`<resource-counter
          count="${e.log}"
          class="${t.log>=e.log?"enough":"lack"}"
        >
          <resource-log></resource-log>
        </resource-counter>`:U``}
    ${e.stone>0?U`<resource-counter
          count="${e.stone}"
          class="${t.stone>=e.stone?"enough":"lack"}"
        >
          <resource-stone></resource-stone>
        </resource-counter>`:U``}
    ${e.iron>0?U`<resource-counter
          count="${e.iron}"
          class="${t.iron>=e.iron?"enough":"lack"}"
        >
          <resource-iron></resource-iron>
        </resource-counter>`:U``}
  `;wt("sidebar-castle",(t=>{var e;const{selected:{payload:{team:o},row:n,col:r}}=t,{getState:i,publish:s}=Ke.useState(t,void 0);mt(t,Zt,s);const{resources:a}=null!==(e=i())&&void 0!==e?e:{resources:{}};return U`<building-castle-small team="${o}"></building-castle-small>
      <h3>Bauen</h3>
      <div class="container">
        <button-image
          height="35px"
          src="/assets/knight_${o}.png"
          @click=${async()=>await gt(Kt,{team:o,row:n,col:r})}
        >
          ${Ao(a,So())}
        </button-image>
        <button-image
          height="35px"
          src="/assets/wagon_${o}.png"
          @click=${async()=>await gt(Qt,{team:o,row:n,col:r})}
        >
          ${Ao(a,_o())}
        </button-image>
        <button-image height="35px" src="/assets/resources/iron.png">
          ${Ao(a,Mo())}
        </button-image>
        <button-image height="35px" src="/assets/castle_medium_${o}.png">
          ${Ao(a,Eo())}
        </button-image>
        <button-image height="35px" src="/assets/castle_large_${o}.png">
          ${Ao(a,Co())}
        </button-image>
      </div>`}),{styles:[zo],defaults:{selected:{payload:{team:""},col:0,row:0}}});const To=t=>parseInt(t.toString(),10);wt("sidebar-knight",(t=>{const{selected:{payload:e,row:o,col:n}}=t,{health:r,actions:i}=e,s={row:To(o),col:To(n)};return U`
    <h3>Ritter</h3>
    <div class="container">
        <img id="knight" src="/assets/knight_${e.team}.png">
        <loading-bar id="health" width="${r.current/r.max*100}%"></loading-bar>
        <div id="stats">
            <strong>Leben</strong> ${r.current} von ${r.max} 
            <strong>Aktionen:</strong> ${i.current} von ${i.max}
        </div>
        <button ?disabled=${i.current<1} id="move" @click=${()=>gt(re,{asset:Object.assign({},e),start:s})}>🦵</button>
        <button ?disabled=${i.current<1} id="attack" @click=${()=>gt(le,{asset:Object.assign({},e),start:s})}">⚔</button>
        <button ?disabled=${i.current<1} id="fortify">🏰</button>
    </div>`}),{styles:[K`
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
            "knight knight health health health"
            "knight knight stats stats stats"
            "knight knight move attack fortify";
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
`],props:[{selected:{type:Object}}]});wt("sidebar-wagon",(t=>{const{selected:{payload:e,row:o,col:n}}=t,{health:r,actions:i}=e,s={row:To(o),col:To(n)};return U`
    <h3>Wagen</h3>
    <div class="container">
        <img id="wagon" src="/assets/wagon_${e.team}.png">
        <loading-bar id="health" width="${r.current/r.max*100}%"></loading-bar>
        <div id="stats">
            <strong>Leben</strong> ${r.current} von ${r.max} 
            <strong>Aktionen:</strong> ${i.current} von ${i.max}
        </div>
        <button ?disabled=${i.current<1} id="move" title="Move" @click=${()=>gt(re,{asset:Object.assign({},e),start:s})}>🦵</button>
        <button ?disabled=${i.current<1} id="load" title="Load/Unload">📦</button>
    </div>`}),{styles:[K`
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
`],props:[{selected:{type:Object}}]});const Ho=t=>({position:t?new jt(null==t?void 0:t.row,null==t?void 0:t.col):void 0,elements:t?[{item:t.item,payload:t.payload}]:[],dirty:!1});wt("controls-sidebar",(t=>{const{getState:e,publish:o}=Ke.useState(t,void 0);mt(t,Jt,o);const n=e(),{getState:r,publish:i}=Ke.useState(t,Ho(n)),s=r();return!s.dirty&&n&&new jt(n.row,n.col).equals(s.position)?i(Object.assign(Object.assign({},s),{elements:[...s.elements,{item:n.item,payload:n.payload}],dirty:"hexagon"===n.item})):i(Ho(n)),uo.useOnce(t,(()=>{setTimeout((()=>{gt(Ut)}),1)})),U`
        ${r().elements.map((t=>{var e,o,n,i,s,a;switch(t.item){case ko:return U`<sidebar-castle 
                        .selected="${{row:null===(e=r().position)||void 0===e?void 0:e.row,col:null===(o=r().position)||void 0===o?void 0:o.col,payload:t.payload}}">
                    </sidebar-castle>`;case Qe:return U`<sidebar-knight
                        .selected="${{row:null===(n=r().position)||void 0===n?void 0:n.row,col:null===(i=r().position)||void 0===i?void 0:i.col,payload:t.payload}}">
                    </sidebar-knight>`;case oo:return U`<sidebar-wagon
                        .selected="${{row:null===(s=r().position)||void 0===s?void 0:s.row,col:null===(a=r().position)||void 0===a?void 0:a.col,payload:t.payload}}">
                    </sidebar-wagon>`;default:case ko:return U``}}))}
    `}));const No=[];function Po(){No&&No.forEach((t=>{document.body.removeChild(t)})),No.length=0}function Ro(t,...e){const o=[],n=[];if(0===e.length)return U(t,...e);const r=t=>{n[n.length-1]=n[n.length-1]+t};return e.forEach(((i,s)=>{0===s&&n.push(t[0]);const a=e[s];(t=>t&&t.d&&"string"==typeof t.d&&1===Object.keys(t).length)(a)?(r(a.d),r(t[s+1])):(o.push(a),n.push(t[s+1]))})),U(n,...o)}Object.freeze({ELEMENT_NODE:1,TEXT_NODE:3,COMMENT_NODE:8,DOCUMENT_FRAGMENT_NODE:11});const Uo=new WeakMap;class Wo{constructor(t){this._parent=t,this._cache=new Map}has(t){return!!(this._cache.has(t)||this._parent&&this._parent._cache.has(t))}set(t,e){return this._cache.set(t,e),this}get(t){return this._cache.get(t)||this._parent&&this._parent._cache.get(t)}}let qo=Math.round(1e5*Math.random());const Do="-|\\.|[0-9]|[a-z]",Lo=new RegExp(`[a-z](${Do})*-(${Do})*`),Fo=(t,e)=>{const o=`${t}-${qo+=1}`;return((t,e)=>!!e.get(t))(o,e)?Fo(t,e):o};function Io(t,e=customElements){if(o=t,null===Lo.exec(o))throw new Error("tagName is invalid");var o;return Fo(t,e)}const Xo=new WeakMap,Yo=(t,e)=>Xo.set(e,t),Vo=(t,e,o=customElements)=>{Yo(t,e),o.define(t,class extends e{})},Zo=(t,e,o)=>{const n=customElements;if(!(t=>Object.prototype.isPrototypeOf.call(HTMLElement,t))(e))return((t,e,o)=>{const n=Io(t,e);if(!o)throw new Error("Lazy scoped elements requires the use of tags cache");return o.set(t,n),n})(t,n,o);if(e===customElements.get(t))return Yo(t,e),t;const r=Io(t,n);return Vo(r,e,n),r};function Bo(t,e,o){return(t=>Xo.get(t))(e)||o&&o.get(t)||Zo(t,e,o)}const Jo=new RegExp("<\\/?([a-z](-|\\.|[0-9]|[a-z])*-(-|\\.|[0-9]|[a-z])*)","g"),Go=new Wo,Ko=(t,e,o,n)=>{const r=t.map((t=>{let o=t;const r=(t=>{const e=[];let o;for(;null!==(o=Jo.exec(t));)e.push(o);return e})(t);for(let t=r.length-1;t>=0;t-=1){const i=r[t],[s,a]=i,l=Bo(a,e[a],n),c=i.index+s.length-a.length,d=c+a.length,u=0===s.indexOf("</");o=o.slice(0,c)+(u?l:`${l} data-tag-name="${a}"`)+o.slice(d)}return o}));return o.set(t,r),r};let Qo=!0;const{ShadyCSS:tn}=window;(void 0===tn||void 0===tn.prepareTemplateDom)&&(Qo=!1);const en=new WeakMap,on=new WeakMap,nn=t=>(on.has(t)||on.set(t,new Wo(on.get(t.constructor))),on.get(t)),rn=(t,e,o,n)=>t.map((t=>t instanceof k?sn(t,e,o,n):Array.isArray(t)?rn(t,e,o,n):t)),sn=(t,e,o,n)=>new k(function(t,e,o=Go,n){return o.get(t)||Ko(t,e,o,n)}(t.strings,e,o,n),rn(t.values,e,o,n),t.type,t.processor),an=(t,e,o,n)=>i=>{const s=sn(i,e,o,n);return(t=>e=>{const o=((t,e)=>`${t}--${e}`)(e.type,t);let n=N.get(o);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},N.set(o,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(r);if(i=n.keyString.get(s),void 0===i){const o=e.getTemplateElement();Qo&&tn.prepareTemplateDom(o,t),i=new a(e,o),n.keyString.set(s,i)}return n.stringsArray.set(e.strings,i),i})(t)(s)},ln=(cn=t=>class extends t{static get scopedElements(){return{}}static render(t,e,o){if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const{scopeName:n,eventContext:r}=o,i=(s=r,en.has(s)||en.set(s,new Wo(en.get(s.constructor))),en.get(s));var s;const a=nn(r),{scopedElements:l}=this;return super.render(t,e,{...o,templateFactory:an(n,l,i,a)})}defineScopedElement(t,e){return function(t,e,o){const n=o.get(t);n?void 0===customElements.get(n)&&Vo(n,e,customElements):o.set(t,Bo(t,e,o))}(t,e,nn(this))}static getScopedTagName(t){const e=this.scopedElements[t];return e?Bo(t,e,nn(this)):nn(this).get(t)}getScopedTagName(t){const e=this.constructor.scopedElements[t];return e?Bo(t,e,nn(this)):nn(this).get(t)}},t=>{if(function(t,e){let o=e;for(;o;){if(Uo.get(o)===t)return!0;o=Object.getPrototypeOf(o)}return!1}(cn,t))return t;const e=cn(t);return Uo.set(e,cn),e});var cn;const dn=t=>{return null!=(e=t)&&"function"==typeof e[Symbol.iterator]?[...t].map((t=>dn(t))):t instanceof k?U(t.strings,...t.values):t;var e};class un extends(ln(tt)){static get properties(){return{scopedElements:{type:Object},template:{type:Object}}}constructor(){super(),this.scopedElements={},this.template}firstUpdated(t){super.firstUpdated(t),Object.keys(this.scopedElements).forEach((t=>this.defineScopedElement(t,this.scopedElements[t])))}render(){return dn(this.template)}}const hn=(t=0)=>{const e=`scoped-elements-test-wrapper-${t}`;return void 0!==customElements.get(e)?hn(t+1):e},pn=hn();customElements.define(pn,un);try{"afterEach"in window&&afterEach((()=>{Po()})),"teardown"in window&&teardown((()=>{Po()}))}catch(t){}wt("modal-battle",(t=>{var e,o;const{getState:n,publish:r}=Ke.useState(t,void 0),{getState:i,publish:s}=Ke.useState(t,void 0);return mt(t,fe,r),Ro`
   <modal-window 
        .open=${!!n()} 
        preventClose>
        <h1 slot="header">Kampf beginnt!</h1>
        <div class="body">
        ${null===(e=n())||void 0===e?void 0:e.attacker.map((t=>{const e=t;return Ro`
                    <div>
                        <fighter-info 
                            .player=${e} 
                            row="${n().location.row}" 
                            col="${n().location.col}">
                        </fighter-info>
                        <h3>Wähle deine Waffe</h3>
                        <div class="dices">
                            <dice-selector .dices="${e.dices}" @select="${t=>s(t.detail)}"></dice-selector>
                        </div>
                    </div>
                `}))}${null===(o=n())||void 0===o?void 0:o.defender.map((t=>Ro`
                    <div>
                        <fighter-info 
                            .player=${t} 
                            row="${n().location.row}" 
                            col="${n().location.col}">
                        </fighter-info>
                    </div>
                `))}
        </div>
        <p slot="footer">
            <button @click="${()=>{var t,e;return gt(pe,{attacker:{asset:null===(t=n())||void 0===t?void 0:t.attacker[0],dices:[i()]},defender:null===(e=n())||void 0===e?void 0:e.defender[0],location:{row:n().location.row,col:n().location.col}})}}" ?disabled="${void 0===i()}">Würfeln</button>
        </p>
    </modal-window>`}),{styles:[K`
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
        `]}),wt("modal-dice-result",(t=>{var e,o;const{getState:n,publish:r}=Ke.useState(t,void 0);return mt(t,ve,r),Ro`
   <modal-window 
        .open=${!!n()} 
        @close=${()=>r(void 0)}>
        <h1 slot="header">Gewürfelt!</h1>
        <div class="body">
        ${null===(e=n())||void 0===e?void 0:e.attacker.map((t=>Ro`
                    <div class="attacker">
                        <fighter-info 
                            .player=${t} 
                            row="${n().location.row}" 
                            col="${n().location.col}">
                        </fighter-info>
                    </div>
                `))}${null===(o=n())||void 0===o?void 0:o.defender.map((t=>Ro`
                    <div class="defender">
                        <fighter-info 
                            .player=${t} 
                            row="${n().location.row}" 
                            col="${n().location.col}">
                        </fighter-info>
                    </div>
                `))}
        ${n()?Ro`<dice-roll class="dice" result="${n().result}"></dice-roll>`:Ro``}
        </div>

        <p slot="footer">
        </p>
    </modal-window>`}),{styles:[K`
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
        `]}),wt("modal-mill-taken",(t=>{var e,o,n,r,i;const{getState:s,publish:a}=Ke.useState(t,void 0);return mt(t,me,a),U`
    <modal-window 
         .open=${!!s()} 
         @close=${()=>a(void 0)}>
         <h1 slot="header">Mühle übernommen!</h1>
         <div class="body">
            <div class="by">
                <fighter-info 
                    .player=${null===(e=s())||void 0===e?void 0:e.by} 
                    .row="${null===(o=s())||void 0===o?void 0:o.location.row}" 
                    .col="${null===(n=s())||void 0===n?void 0:n.location.col}">
                </fighter-info>
            </div>
            <div class="mills">
                <building-mill .team="${null===(r=s())||void 0===r?void 0:r.transfered.to}" class="after"></building-mill>
                <building-mill .team="${null===(i=s())||void 0===i?void 0:i.transfered.from}" class="before"></building-mill>
            </div>
         </div>
         <p slot="footer">
         </p>
     </modal-window>`}),{styles:K`
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
    `}),wt("modal-no-more-turns",(t=>{const{getState:e,publish:o}=Ke.useState(t,void 0);return mt(t,oe,o),Ro`
   <modal-window 
        .open=${!!e()} 
        preventClose>
        <h1 slot="header">Keine Aktionen übrig.</h1>
        <div class="body">
            Du hast keine Aktionen mehr übrig. Willst du weiter geben, oder noch rum schauen?
        </div>
        <p slot="footer">
            <button @click="${()=>(gt(ye),o(!1))}">Zug beenden</button>
            <button @click="${()=>o(!1)}">Noch rumschauen</button>
        </p>
    </modal-window>`}),{styles:[K`
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
        `]}),wt("modals-all",(()=>U`
    <modal-no-more-turns></modal-no-more-turns>
    <modal-battle></modal-battle>
    <modal-dice-result></modal-dice-result>
    <modal-mill-taken></modal-mill-taken>`)),wt("footer-element",(o=>{const{getState:n,publish:r}=Ke.useState(o,void 0),{getState:i,publish:s}=Ke.useState(o,[]);return mt(o,we,r),mt(o,te,s),Ro`<footer class="${n()}">
    <div class="main ">
        ${((o,n="")=>{const r=null==o?void 0:o.map((o=>{var r,i;const s=Object.entries(Object.assign(Object.assign({},e),t)).find((([t,e])=>e.name===o.name)),a=Object.entries(Object.assign(Object.assign({},o),{name:void 0})).filter((([t,e])=>void 0!==e)).map((([t,e])=>`${t}="${e}"`)).join(" "),l=Lt(o)?{row:o.row,col:o.col}:{row:0,col:0};return U`<div
            @click="${()=>{gt(Bt,Object.assign(Object.assign({item:o.name},l),{payload:o})),setTimeout((()=>{var t;null===(t=je(o))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            @mouseover="${()=>{setTimeout((()=>{var t;null===(t=je(o))||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),2)}}"
            style="position:relative; cursor: pointer; width: 120px;${n};">
                ${so(`<${null!==(r=null==s?void 0:s[1].name)&&void 0!==r?r:"span"} ${a} style="${n};"></${null!==(i=null==s?void 0:s[1].name)&&void 0!==i?i:"span"}>`)}
        </div>`}));return U`<sprite-player-elements-grid>${r}</sprite-player-elements-grid>`})(i().sort(((t,e)=>t.name.localeCompare(e.name))).filter((t=>!Ft(t)||t.actions.current>0)),"width: 10vh; height: 10vh;")}
    </div>
    <div class="action">
        <button-pure @click="${()=>gt(ye)}">
            <text-block type="paragraph" size="x-large">⌛</text-block> Zug beenden
        </button-pure>
    </div>
</footer>`}),{styles:[De,Le(K`footer .main`),K`
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
    }`]});const gn=K`
  :host {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 3vh;
    height: 3vh;
  }
`;var mn;wt("resource-grain",(()=>U``),{styles:[K`
        :host {
          background-image: url("/assets/resources/grain.png");
        }
      `,gn]}),wt("resource-stone",(()=>U``),{styles:[K`
        :host {
          background-image: url("/assets/resources/stone.png");
        }
      `,gn]}),wt("resource-iron",(()=>U``),{styles:[K`
        :host {
          background-image: url("/assets/resources/iron.png");
        }
      `,gn]}),wt("resource-log",(()=>U``),{styles:[K`
        :host {
          background-image: url("/assets/resources/log.png");
        }
      `,gn]}),wt("resource-hay",(()=>U``),{styles:[K`
        :host {
          background-image: url("/assets/resources/hay.png");
        }
      `,gn]}),wt("resource-counter",(({count:t})=>U`
        <slot></slot>
        ${t}
    `),{styles:[K`
        :host {
            font-size: 4vh;
        }
        `],props:[{count:{type:Number}}]}),wt("header-element",(t=>{var e;const{getState:o,publish:n}=Ke.useState(t,void 0),{getState:r,publish:i}=Ke.useState(t,void 0);mt(t,we,n),mt(t,Zt,i);const s=null!==(e=r())&&void 0!==e?e:{resources:{}};return Ro`<header class="${o()}">
        <resource-counter count="${s.resources.hay}">
            <resource-hay></resource-hay>
        </resource-counter>
        <resource-counter count="${s.resources.grain}">
            <resource-grain></resource-grain>
        </resource-counter>
        <resource-counter count="${s.resources.stone}">
            <resource-stone></resource-stone>
        </resource-counter>
        <resource-counter count="${s.resources.iron}">
            <resource-iron></resource-iron>
        </resource-counter>
        <resource-counter count="${s.resources.log}">
            <resource-log></resource-log>
        </resource-counter>
    </header>`}),{styles:K`
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
    }`}),null===(mn=document.querySelector("body"))||void 0===mn||mn.addEventListener("keyup",(function(t){"Escape"===t.key&&gt(Vt,!0)})),wt("the-mill",(()=>(Dt({rows:10,cols:10}),U`
    <header-element>header</header-element>
    <world-map></world-map>
    <controls-sidebar>sidebar</controls-sidebar>
    <footer-element>
    </footer-element>
    <modals-all></modals-all>
    `)),{styles:[De,Le(K`world-map`),Le(K`controls-sidebar`),K`
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
    
    controls-sidebar {
        grid-area: sidebar;
        display: block;
        min-height: 85vh;
        max-height: 85vh;
        overflow-x: auto;
        padding: 0 1rem;
    }
    footer-element {
        grid-area: footer;
    }
    
    :host {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
            "header header header header header"
            "main main main main sidebar"
            "footer footer footer footer footer";
        }
    `]});export{e as buildings,eo as knight,t as player,ro as wagon};
//# sourceMappingURL=the-mill.js.map
