(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function g(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=window,fr=ut.ShadowRoot&&(ut.ShadyCSS===void 0||ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dr=Symbol(),Rr=new WeakMap;let wn=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==dr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(fr&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Rr.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Rr.set(r,e))}return e}toString(){return this.cssText}};const ki=t=>new wn(typeof t=="string"?t:t+"",void 0,dr),te=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new wn(r,t,dr)},Ii=(t,e)=>{fr?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),i=ut.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)})},Cr=fr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return ki(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vt;const pt=window,Tr=pt.trustedTypes,Vi=Tr?Tr.emptyScript:"",jr=pt.reactiveElementPolyfillSupport,Qt={toAttribute(t,e){switch(e){case Boolean:t=t?Vi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},An=(t,e)=>e!==t&&(e==e||t==t),Ht={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:An},er="finalized";let me=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,r=Ht){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(i){const o=this[e];this[r]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ht}static finalize(){if(this.hasOwnProperty(er))return!1;this[er]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(Cr(i))}else e!==void 0&&r.push(Cr(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ii(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=Ht){var i;const o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:Qt).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,r){var n;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const s=i.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Qt;this._$El=o,this[o]=l.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||An)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};me[er]=!0,me.elementProperties=new Map,me.elementStyles=[],me.shadowRootOptions={mode:"open"},jr==null||jr({ReactiveElement:me}),((Vt=pt.reactiveElementVersions)!==null&&Vt!==void 0?Vt:pt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;const vt=window,xe=vt.trustedTypes,Dr=xe?xe.createPolicy("lit-html",{createHTML:t=>t}):void 0,tr="$lit$",Y=`lit$${(Math.random()+"").slice(9)}$`,On="?"+Y,Hi=`<${On}>`,ae=document,Ie=()=>ae.createComment(""),Ve=t=>t===null||typeof t!="object"&&typeof t!="function",xn=Array.isArray,Fi=t=>xn(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Gt=`[ 	
\f\r]`,Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nr=/-->/g,Mr=/>/g,ie=RegExp(`>|${Gt}(?:([^\\s"'>=/]+)(${Gt}*=${Gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Br=/'/g,Lr=/"/g,En=/^(?:script|style|textarea|title)$/i,Gi=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),C=Gi(1),Ee=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Ur=new WeakMap,oe=ae.createTreeWalker(ae,129,null,!1);function Sn(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dr!==void 0?Dr.createHTML(e):e}const zi=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":"",s=Be;for(let l=0;l<r;l++){const a=t[l];let u,c,f=-1,h=0;for(;h<a.length&&(s.lastIndex=h,c=s.exec(a),c!==null);)h=s.lastIndex,s===Be?c[1]==="!--"?s=Nr:c[1]!==void 0?s=Mr:c[2]!==void 0?(En.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=ie):c[3]!==void 0&&(s=ie):s===ie?c[0]===">"?(s=i??Be,f=-1):c[1]===void 0?f=-2:(f=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?ie:c[3]==='"'?Lr:Br):s===Lr||s===Br?s=ie:s===Nr||s===Mr?s=Be:(s=ie,i=void 0);const p=s===ie&&t[l+1].startsWith("/>")?" ":"";o+=s===Be?a+Hi:f>=0?(n.push(u),a.slice(0,f)+tr+a.slice(f)+Y+p):a+Y+(f===-2?(n.push(void 0),l):p)}return[Sn(t,o+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class He{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const l=e.length-1,a=this.parts,[u,c]=zi(e,r);if(this.el=He.createElement(u,n),oe.currentNode=this.el.content,r===2){const f=this.el.content,h=f.firstChild;h.remove(),f.append(...h.childNodes)}for(;(i=oe.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const f=[];for(const h of i.getAttributeNames())if(h.endsWith(tr)||h.startsWith(Y)){const p=c[s++];if(f.push(h),p!==void 0){const T=i.getAttribute(p.toLowerCase()+tr).split(Y),w=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:w[2],strings:T,ctor:w[1]==="."?qi:w[1]==="?"?Yi:w[1]==="@"?Xi:jt})}else a.push({type:6,index:o})}for(const h of f)i.removeAttribute(h)}if(En.test(i.tagName)){const f=i.textContent.split(Y),h=f.length-1;if(h>0){i.textContent=xe?xe.emptyScript:"";for(let p=0;p<h;p++)i.append(f[p],Ie()),oe.nextNode(),a.push({type:2,index:++o});i.append(f[h],Ie())}}}else if(i.nodeType===8)if(i.data===On)a.push({type:2,index:o});else{let f=-1;for(;(f=i.data.indexOf(Y,f+1))!==-1;)a.push({type:7,index:o}),f+=Y.length-1}o++}}static createElement(e,r){const n=ae.createElement("template");return n.innerHTML=e,n}}function Se(t,e,r=t,n){var i,o,s,l;if(e===Ee)return e;let a=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const u=Ve(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==u&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),u===void 0?a=void 0:(a=new u(t),a._$AT(t,r,n)),n!==void 0?((s=(l=r)._$Co)!==null&&s!==void 0?s:l._$Co=[])[n]=a:r._$Cl=a),a!==void 0&&(e=Se(t,a._$AS(t,e.values),a,n)),e}class Ki{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:n},parts:i}=this._$AD,o=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:ae).importNode(n,!0);oe.currentNode=o;let s=oe.nextNode(),l=0,a=0,u=i[0];for(;u!==void 0;){if(l===u.index){let c;u.type===2?c=new Qe(s,s.nextSibling,this,e):u.type===1?c=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(c=new Ji(s,this,e)),this._$AV.push(c),u=i[++a]}l!==(u==null?void 0:u.index)&&(s=oe.nextNode(),l++)}return oe.currentNode=ae,o}v(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class Qe{constructor(e,r,n,i){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Se(this,e,r),Ve(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Ee&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Fi(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&Ve(this._$AH)?this._$AA.nextSibling.data=e:this.$(ae.createTextNode(e)),this._$AH=e}g(e){var r;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=He.createElement(Sn(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.v(n);else{const s=new Ki(o,this),l=s.u(this.options);s.v(n),this.$(l),this._$AH=s}}_$AC(e){let r=Ur.get(e.strings);return r===void 0&&Ur.set(e.strings,r=new He(e)),r}T(e){xn(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new Qe(this.k(Ie()),this.k(Ie()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}}class jt{constructor(e,r,n,i,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=Se(this,e,r,0),s=!Ve(e)||e!==this._$AH&&e!==Ee,s&&(this._$AH=e);else{const l=e;let a,u;for(e=o[0],a=0;a<o.length-1;a++)u=Se(this,l[n+a],r,a),u===Ee&&(u=this._$AH[a]),s||(s=!Ve(u)||u!==this._$AH[a]),u===b?e=b:e!==b&&(e+=(u??"")+o[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class qi extends jt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}const Wi=xe?xe.emptyScript:"";class Yi extends jt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,Wi):this.element.removeAttribute(this.name)}}class Xi extends jt{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){var n;if((e=(n=Se(this,e,r,0))!==null&&n!==void 0?n:b)===Ee)return;const i=this._$AH,o=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==b&&(i===b||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ji{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}}const kr=vt.litHtmlPolyfillSupport;kr==null||kr(He,Qe),((Ft=vt.litHtmlVersions)!==null&&Ft!==void 0?Ft:vt.litHtmlVersions=[]).push("2.8.0");const Zi=(t,e,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=o._$litPart$;if(s===void 0){const l=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new Qe(e.insertBefore(Ie(),l),l,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zt,Kt;class se extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zi(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ee}}se.finalized=!0,se._$litElement$=!0,(zt=globalThis.litElementHydrateSupport)===null||zt===void 0||zt.call(globalThis,{LitElement:se});const Ir=globalThis.litElementPolyfillSupport;Ir==null||Ir({LitElement:se});((Kt=globalThis.litElementVersions)!==null&&Kt!==void 0?Kt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=t=>e=>typeof e=="function"?((r,n)=>(customElements.define(r,n),n))(t,e):((r,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(s){customElements.define(r,s)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qi=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},eo=(t,e,r)=>{e.constructor.createProperty(r,t)};function x(t){return(e,r)=>r!==void 0?eo(t,e,r):Qi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(t){return x({...t,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qt;((qt=window.HTMLSlotElement)===null||qt===void 0?void 0:qt.prototype.assignedElements)!=null;const to=te`
  :host {
    --primary-bg-color: #fcfcf4;
    height: 100%;
    display: block;
    margin: 0;
    position: relative;
  }

  main {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }

  #outlet {
    width: 100%;
  }

  /** Transition Effect */
  .right-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: auto;
    left: 100%;
    bottom: auto;
    right: auto;
    background: #7f4a88;
    transition: all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .right-layer.active {
    left: -100%;
  }
  .right-layer--2 {
    background: #c79ecf;
    transition-delay: 0.3s;
  }
  .right-layer--3 {
    background: #fe9191;
    transition-delay: 0.2s;
  }

  /**
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
   */
  @media (min-width: 768px) and (max-width: 1024px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  /**
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }

  /**
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (max-width: 480px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }
`;globalThis.process={...globalThis.process,env:{NODE_ENV:"development"}};const ve=Symbol("LitMobxRenderReaction"),Vr=Symbol("LitMobxRequestUpdate");function ro(t,e){var r,n;return n=class extends t{constructor(){super(...arguments),this[r]=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback();const o=this.constructor.name||this.nodeName;this[ve]=new e(`${o}.update()`,this[Vr]),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this[ve]&&(this[ve].dispose(),this[ve]=void 0)}update(o){this[ve]?this[ve].track(super.update.bind(this,o)):super.update(o)}},r=Vr,n}function m(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw new Error(typeof t=="number"?"[MobX] minified error nr: "+t+(r.length?" "+r.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+t)}var no={};function $n(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:no}var Pn=Object.assign,_t=Object.getOwnPropertyDescriptor,k=Object.defineProperty,Nt=Object.prototype,rr=[];Object.freeze(rr);var Rn={};Object.freeze(Rn);var io=typeof Proxy<"u",oo=Object.toString();function Cn(){io||m("Proxy not available")}function Tn(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}var ge=function(){};function L(t){return typeof t=="function"}function le(t){var e=typeof t;switch(e){case"string":case"symbol":case"number":return!0}return!1}function Mt(t){return t!==null&&typeof t=="object"}function Q(t){if(!Mt(t))return!1;var e=Object.getPrototypeOf(t);if(e==null)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return typeof r=="function"&&r.toString()===oo}function jn(t){var e=t==null?void 0:t.constructor;return e?e.name==="GeneratorFunction"||e.displayName==="GeneratorFunction":!1}function pr(t,e,r){k(t,e,{enumerable:!1,writable:!0,configurable:!0,value:r})}function Dn(t,e,r){k(t,e,{enumerable:!1,writable:!1,configurable:!0,value:r})}function he(t,e){var r="isMobX"+t;return e.prototype[r]=!0,function(n){return Mt(n)&&n[r]===!0}}function Ce(t){return t instanceof Map}function et(t){return t instanceof Set}var Nn=typeof Object.getOwnPropertySymbols<"u";function so(t){var e=Object.keys(t);if(!Nn)return e;var r=Object.getOwnPropertySymbols(t);return r.length?[].concat(e,r.filter(function(n){return Nt.propertyIsEnumerable.call(t,n)})):e}var vr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Nn?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames;function Mn(t){return t===null?null:typeof t=="object"?""+t:t}function Z(t,e){return Nt.hasOwnProperty.call(t,e)}var ao=Object.getOwnPropertyDescriptors||function(e){var r={};return vr(e).forEach(function(n){r[n]=_t(e,n)}),r};function Hr(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,co(n.key),n)}}function _r(t,e,r){return e&&Hr(t.prototype,e),r&&Hr(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Fe.apply(this,arguments)}function Bn(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,nr(t,e)}function nr(t,e){return nr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},nr(t,e)}function Wt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lo(t,e){if(t){if(typeof t=="string")return Fr(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Fr(t,e)}}function Fr(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function be(t,e){var r=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=lo(t))||e&&t&&typeof t.length=="number"){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uo(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function co(t){var e=uo(t,"string");return typeof e=="symbol"?e:String(e)}var ye=Symbol("mobx-stored-annotations");function I(t){function e(r,n){tt(r,n,t)}return Object.assign(e,t)}function tt(t,e,r){Z(t,ye)||pr(t,ye,Fe({},t[ye])),bo(r)||(t[ye][e]=r)}var v=Symbol("mobx administration"),rt=function(){function t(r){r===void 0&&(r="Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.batchId_=void 0,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=_.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=r,this.batchId_=d.inBatch?d.batchId:NaN}var e=t.prototype;return e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(n){return n()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(n){return n()})},e.reportObserved=function(){return ti(this)},e.reportChanged=function(){(!d.inBatch||this.batchId_!==d.batchId)&&(d.stateVersion=d.stateVersion<Number.MAX_SAFE_INTEGER?d.stateVersion+1:Number.MIN_SAFE_INTEGER,this.batchId_=NaN),P(),ri(this),R()},e.toString=function(){return this.name_},t}(),mr=he("Atom",rt);function Ln(t,e,r){e===void 0&&(e=ge),r===void 0&&(r=ge);var n=new rt(t);return e!==ge&&ms(n,e),r!==ge&&ui(n,r),n}function ho(t,e){return t===e}function fo(t,e){return Sr(t,e)}function po(t,e){return Sr(t,e,1)}function vo(t,e){return Object.is?Object.is(t,e):t===e?t!==0||1/t===1/e:t!==t&&e!==e}var mt={identity:ho,structural:fo,default:vo,shallow:po};function $e(t,e,r){return fi(t)?t:Array.isArray(t)?A.array(t,{name:r}):Q(t)?A.object(t,void 0,{name:r}):Ce(t)?A.map(t,{name:r}):et(t)?A.set(t,{name:r}):typeof t=="function"&&!Ar(t)&&!Ot(t)?jn(t)?Ke(t):ze(r,t):t}function _o(t,e,r){if(t==null||qe(t)||It(t)||de(t)||Te(t))return t;if(Array.isArray(t))return A.array(t,{name:r,deep:!1});if(Q(t))return A.object(t,void 0,{name:r,deep:!1});if(Ce(t))return A.map(t,{name:r,deep:!1});if(et(t))return A.set(t,{name:r,deep:!1})}function Bt(t){return t}function mo(t,e){return Sr(t,e)?e:t}var go="override";function bo(t){return t.annotationType_===go}function nt(t,e){return{annotationType_:t,options_:e,make_:yo,extend_:wo}}function yo(t,e,r,n){var i;if((i=this.options_)!=null&&i.bound)return this.extend_(t,e,r,!1)===null?0:1;if(n===t.target_)return this.extend_(t,e,r,!1)===null?0:2;if(Ar(r.value))return 1;var o=Un(t,this,e,r,!1);return k(n,e,o),2}function wo(t,e,r,n){var i=Un(t,this,e,r);return t.defineProperty_(e,i,n)}function Ao(t,e,r,n){e.annotationType_,n.value}function Un(t,e,r,n,i){var o,s,l,a,u,c,f;i===void 0&&(i=d.safeDescriptors),Ao(t,e,r,n);var h=n.value;if((o=e.options_)!=null&&o.bound){var p;h=h.bind((p=t.proxy_)!=null?p:t.target_)}return{value:Pe((s=(l=e.options_)==null?void 0:l.name)!=null?s:r.toString(),h,(a=(u=e.options_)==null?void 0:u.autoAction)!=null?a:!1,(c=e.options_)!=null&&c.bound?(f=t.proxy_)!=null?f:t.target_:void 0),configurable:i?t.isPlainObject_:!0,enumerable:!1,writable:!i}}function kn(t,e){return{annotationType_:t,options_:e,make_:Oo,extend_:xo}}function Oo(t,e,r,n){var i;if(n===t.target_)return this.extend_(t,e,r,!1)===null?0:2;if((i=this.options_)!=null&&i.bound&&(!Z(t.target_,e)||!Ot(t.target_[e]))&&this.extend_(t,e,r,!1)===null)return 0;if(Ot(r.value))return 1;var o=In(t,this,e,r,!1,!1);return k(n,e,o),2}function xo(t,e,r,n){var i,o=In(t,this,e,r,(i=this.options_)==null?void 0:i.bound);return t.defineProperty_(e,o,n)}function Eo(t,e,r,n){e.annotationType_,n.value}function In(t,e,r,n,i,o){o===void 0&&(o=d.safeDescriptors),Eo(t,e,r,n);var s=n.value;if(Ot(s)||(s=Ke(s)),i){var l;s=s.bind((l=t.proxy_)!=null?l:t.target_),s.isMobXFlow=!0}return{value:s,configurable:o?t.isPlainObject_:!0,enumerable:!1,writable:!o}}function gr(t,e){return{annotationType_:t,options_:e,make_:So,extend_:$o}}function So(t,e,r){return this.extend_(t,e,r,!1)===null?0:1}function $o(t,e,r,n){return Po(t,this,e,r),t.defineComputedProperty_(e,Fe({},this.options_,{get:r.get,set:r.set}),n)}function Po(t,e,r,n){e.annotationType_,n.get}function Lt(t,e){return{annotationType_:t,options_:e,make_:Ro,extend_:Co}}function Ro(t,e,r){return this.extend_(t,e,r,!1)===null?0:1}function Co(t,e,r,n){var i,o;return To(t,this),t.defineObservableProperty_(e,r.value,(i=(o=this.options_)==null?void 0:o.enhancer)!=null?i:$e,n)}function To(t,e,r,n){e.annotationType_}var jo="true",Do=Vn();function Vn(t){return{annotationType_:jo,options_:t,make_:No,extend_:Mo}}function No(t,e,r,n){var i,o;if(r.get)return Ut.make_(t,e,r,n);if(r.set){var s=Pe(e.toString(),r.set);return n===t.target_?t.defineProperty_(e,{configurable:d.safeDescriptors?t.isPlainObject_:!0,set:s})===null?0:2:(k(n,e,{configurable:!0,set:s}),2)}if(n!==t.target_&&typeof r.value=="function"){var l;if(jn(r.value)){var a,u=(a=this.options_)!=null&&a.autoBind?Ke.bound:Ke;return u.make_(t,e,r,n)}var c=(l=this.options_)!=null&&l.autoBind?ze.bound:ze;return c.make_(t,e,r,n)}var f=((i=this.options_)==null?void 0:i.deep)===!1?A.ref:A;if(typeof r.value=="function"&&(o=this.options_)!=null&&o.autoBind){var h;r.value=r.value.bind((h=t.proxy_)!=null?h:t.target_)}return f.make_(t,e,r,n)}function Mo(t,e,r,n){var i,o;if(r.get)return Ut.extend_(t,e,r,n);if(r.set)return t.defineProperty_(e,{configurable:d.safeDescriptors?t.isPlainObject_:!0,set:Pe(e.toString(),r.set)},n);if(typeof r.value=="function"&&(i=this.options_)!=null&&i.autoBind){var s;r.value=r.value.bind((s=t.proxy_)!=null?s:t.target_)}var l=((o=this.options_)==null?void 0:o.deep)===!1?A.ref:A;return l.extend_(t,e,r,n)}var Bo="observable",Lo="observable.ref",Uo="observable.shallow",ko="observable.struct",Hn={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(Hn);function st(t){return t||Hn}var Fn=Lt(Bo),Io=Lt(Lo,{enhancer:Bt}),Vo=Lt(Uo,{enhancer:_o}),Ho=Lt(ko,{enhancer:mo}),Gn=I(Fn);function at(t){return t.deep===!0?$e:t.deep===!1?Bt:Go(t.defaultDecorator)}function Fo(t){var e;return t?(e=t.defaultDecorator)!=null?e:Vn(t):void 0}function Go(t){var e,r;return t&&(e=(r=t.options_)==null?void 0:r.enhancer)!=null?e:$e}function zn(t,e,r){if(le(e)){tt(t,e,Fn);return}return fi(t)?t:Q(t)?A.object(t,e,r):Array.isArray(t)?A.array(t,e):Ce(t)?A.map(t,e):et(t)?A.set(t,e):typeof t=="object"&&t!==null?t:A.box(t,e)}Pn(zn,Gn);var zo={box:function(e,r){var n=st(r);return new Oe(e,at(n),n.name,!0,n.equals)},array:function(e,r){var n=st(r);return(d.useProxies===!1||n.proxy===!1?Bs:Ss)(e,at(n),n.name)},map:function(e,r){var n=st(r);return new _i(e,at(n),n.name)},set:function(e,r){var n=st(r);return new bi(e,at(n),n.name)},object:function(e,r,n){return je(function(){return gs(d.useProxies===!1||(n==null?void 0:n.proxy)===!1?xr({},n):Os({},n),e,r)})},ref:I(Io),shallow:I(Vo),deep:Gn,struct:I(Ho)},A=Pn(zn,zo),Kn="computed",Ko="computed.struct",qn=gr(Kn),qo=gr(Ko,{equals:mt.structural}),Ut=function(e,r){if(le(r))return tt(e,r,qn);if(Q(e))return I(gr(Kn,e));var n=Q(r)?r:{};return n.get=e,n.name||(n.name=e.name||""),new Ge(n)};Object.assign(Ut,qn);Ut.struct=I(qo);var Gr,zr,gt=0,Wo=1,Yo=(Gr=(zr=_t(function(){},"name"))==null?void 0:zr.configurable)!=null?Gr:!1,Kr={value:"action",configurable:!0,writable:!1,enumerable:!1};function Pe(t,e,r,n){r===void 0&&(r=!1);function i(){return Xo(t,r,e,n||this,arguments)}return i.isMobxAction=!0,Yo&&(Kr.value=t,k(i,"name",Kr)),i}function Xo(t,e,r,n,i){var o=Jo(t,e);try{return r.apply(n,i)}catch(s){throw o.error_=s,s}finally{Zo(o)}}function Jo(t,e,r,n){var i=!1,o=0,s=d.trackingDerivation,l=!e||!s;P();var a=d.allowStateChanges;l&&(fe(),a=br(!0));var u=wr(!0),c={runAsAction_:l,prevDerivation_:s,prevAllowStateChanges_:a,prevAllowStateReads_:u,notifySpy_:i,startTime_:o,actionId_:Wo++,parentActionId_:gt};return gt=c.actionId_,c}function Zo(t){gt!==t.actionId_&&m(30),gt=t.parentActionId_,t.error_!==void 0&&(d.suppressReactionErrors=!0),yr(t.prevAllowStateChanges_),Le(t.prevAllowStateReads_),R(),t.runAsAction_&&z(t.prevDerivation_),d.suppressReactionErrors=!1}function br(t){var e=d.allowStateChanges;return d.allowStateChanges=t,e}function yr(t){d.allowStateChanges=t}var Wn;Wn=Symbol.toPrimitive;var Oe=function(t){Bn(e,t);function e(n,i,o,s,l){var a;return o===void 0&&(o="ObservableValue"),l===void 0&&(l=mt.default),a=t.call(this,o)||this,a.enhancer=void 0,a.name_=void 0,a.equals=void 0,a.hasUnreportedChange_=!1,a.interceptors_=void 0,a.changeListeners_=void 0,a.value_=void 0,a.dehancer=void 0,a.enhancer=i,a.name_=o,a.equals=l,a.value_=i(n,void 0,o),a}var r=e.prototype;return r.dehanceValue=function(i){return this.dehancer!==void 0?this.dehancer(i):i},r.set=function(i){this.value_,i=this.prepareNewValue_(i),i!==d.UNCHANGED&&this.setNewValue_(i)},r.prepareNewValue_=function(i){if(S(this)){var o=$(this,{object:this,type:V,newValue:i});if(!o)return d.UNCHANGED;i=o.newValue}return i=this.enhancer(i,this.value_,this.name_),this.equals(this.value_,i)?d.UNCHANGED:i},r.setNewValue_=function(i){var o=this.value_;this.value_=i,this.reportChanged(),M(this)&&B(this,{type:V,object:this,newValue:i,oldValue:o})},r.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},r.intercept_=function(i){return it(this,i)},r.observe_=function(i,o){return o&&i({observableKind:"value",debugObjectName:this.name_,object:this,type:V,newValue:this.value_,oldValue:void 0}),ot(this,i)},r.raw=function(){return this.value_},r.toJSON=function(){return this.get()},r.toString=function(){return this.name_+"["+this.value_+"]"},r.valueOf=function(){return Mn(this.get())},r[Wn]=function(){return this.valueOf()},e}(rt),Yn;Yn=Symbol.toPrimitive;var Ge=function(){function t(r){this.dependenciesState_=_.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=_.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new yt(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=bt.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,r.get||m(31),this.derivation=r.get,this.name_=r.name||"ComputedValue",r.set&&(this.setter_=Pe("ComputedValue-setter",r.set)),this.equals_=r.equals||(r.compareStructural||r.struct?mt.structural:mt.default),this.scope_=r.context,this.requiresReaction_=r.requiresReaction,this.keepAlive_=!!r.keepAlive}var e=t.prototype;return e.onBecomeStale_=function(){rs(this)},e.onBO=function(){this.onBOL&&this.onBOL.forEach(function(n){return n()})},e.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(n){return n()})},e.get=function(){if(this.isComputing_&&m(32,this.name_,this.derivation),d.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)ir(this)&&(this.warnAboutUntrackedRead_(),P(),this.value_=this.computeValue_(!1),R());else if(ti(this),ir(this)){var n=d.trackingContext;this.keepAlive_&&!n&&(d.trackingContext=this),this.trackAndCompute()&&ts(this),d.trackingContext=n}var i=this.value_;if(ct(i))throw i.cause;return i},e.set=function(n){if(this.setter_){this.isRunningSetter_&&m(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,n)}finally{this.isRunningSetter_=!1}}else m(34,this.name_)},e.trackAndCompute=function(){var n=this.value_,i=this.dependenciesState_===_.NOT_TRACKING_,o=this.computeValue_(!0),s=i||ct(n)||ct(o)||!this.equals_(n,o);return s&&(this.value_=o),s},e.computeValue_=function(n){this.isComputing_=!0;var i=br(!1),o;if(n)o=Xn(this,this.derivation,this.scope_);else if(d.disableErrorBoundaries===!0)o=this.derivation.call(this.scope_);else try{o=this.derivation.call(this.scope_)}catch(s){o=new yt(s)}return yr(i),this.isComputing_=!1,o},e.suspend_=function(){this.keepAlive_||(or(this),this.value_=void 0)},e.observe_=function(n,i){var o=this,s=!0,l=void 0;return fs(function(){var a=o.get();if(!s||i){var u=fe();n({observableKind:"computed",debugObjectName:o.name_,type:V,object:o,newValue:a,oldValue:l}),z(u)}s=!1,l=a})},e.warnAboutUntrackedRead_=function(){},e.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},e.valueOf=function(){return Mn(this.get())},e[Yn]=function(){return this.valueOf()},t}(),kt=he("ComputedValue",Ge),_;(function(t){t[t.NOT_TRACKING_=-1]="NOT_TRACKING_",t[t.UP_TO_DATE_=0]="UP_TO_DATE_",t[t.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",t[t.STALE_=2]="STALE_"})(_||(_={}));var bt;(function(t){t[t.NONE=0]="NONE",t[t.LOG=1]="LOG",t[t.BREAK=2]="BREAK"})(bt||(bt={}));var yt=function(e){this.cause=void 0,this.cause=e};function ct(t){return t instanceof yt}function ir(t){switch(t.dependenciesState_){case _.UP_TO_DATE_:return!1;case _.NOT_TRACKING_:case _.STALE_:return!0;case _.POSSIBLY_STALE_:{for(var e=wr(!0),r=fe(),n=t.observing_,i=n.length,o=0;o<i;o++){var s=n[o];if(kt(s)){if(d.disableErrorBoundaries)s.get();else try{s.get()}catch{return z(r),Le(e),!0}if(t.dependenciesState_===_.STALE_)return z(r),Le(e),!0}}return Zn(t),z(r),Le(e),!1}}}function Xn(t,e,r){var n=wr(!0);Zn(t),t.newObserving_=new Array(t.observing_.length+100),t.unboundDepsCount_=0,t.runId_=++d.runId;var i=d.trackingDerivation;d.trackingDerivation=t,d.inBatch++;var o;if(d.disableErrorBoundaries===!0)o=e.call(r);else try{o=e.call(r)}catch(s){o=new yt(s)}return d.inBatch--,d.trackingDerivation=i,Qo(t),Le(n),o}function Qo(t){for(var e=t.observing_,r=t.observing_=t.newObserving_,n=_.UP_TO_DATE_,i=0,o=t.unboundDepsCount_,s=0;s<o;s++){var l=r[s];l.diffValue_===0&&(l.diffValue_=1,i!==s&&(r[i]=l),i++),l.dependenciesState_>n&&(n=l.dependenciesState_)}for(r.length=i,t.newObserving_=null,o=e.length;o--;){var a=e[o];a.diffValue_===0&&Qn(a,t),a.diffValue_=0}for(;i--;){var u=r[i];u.diffValue_===1&&(u.diffValue_=0,es(u,t))}n!==_.UP_TO_DATE_&&(t.dependenciesState_=n,t.onBecomeStale_())}function or(t){var e=t.observing_;t.observing_=[];for(var r=e.length;r--;)Qn(e[r],t);t.dependenciesState_=_.NOT_TRACKING_}function Jn(t){var e=fe();try{return t()}finally{z(e)}}function fe(){var t=d.trackingDerivation;return d.trackingDerivation=null,t}function z(t){d.trackingDerivation=t}function wr(t){var e=d.allowStateReads;return d.allowStateReads=t,e}function Le(t){d.allowStateReads=t}function Zn(t){if(t.dependenciesState_!==_.UP_TO_DATE_){t.dependenciesState_=_.UP_TO_DATE_;for(var e=t.observing_,r=e.length;r--;)e[r].lowestObserverState_=_.UP_TO_DATE_}}var Yt=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.batchId=Number.MIN_SAFE_INTEGER,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},Xt=!0,d=function(){var t=$n();return t.__mobxInstanceCount>0&&!t.__mobxGlobals&&(Xt=!1),t.__mobxGlobals&&t.__mobxGlobals.version!==new Yt().version&&(Xt=!1),Xt?t.__mobxGlobals?(t.__mobxInstanceCount+=1,t.__mobxGlobals.UNCHANGED||(t.__mobxGlobals.UNCHANGED={}),t.__mobxGlobals):(t.__mobxInstanceCount=1,t.__mobxGlobals=new Yt):(setTimeout(function(){m(35)},1),new Yt)}();function es(t,e){t.observers_.add(e),t.lowestObserverState_>e.dependenciesState_&&(t.lowestObserverState_=e.dependenciesState_)}function Qn(t,e){t.observers_.delete(e),t.observers_.size===0&&ei(t)}function ei(t){t.isPendingUnobservation_===!1&&(t.isPendingUnobservation_=!0,d.pendingUnobservations.push(t))}function P(){d.inBatch===0&&(d.batchId=d.batchId<Number.MAX_SAFE_INTEGER?d.batchId+1:Number.MIN_SAFE_INTEGER),d.inBatch++}function R(){if(--d.inBatch===0){ni();for(var t=d.pendingUnobservations,e=0;e<t.length;e++){var r=t[e];r.isPendingUnobservation_=!1,r.observers_.size===0&&(r.isBeingObserved_&&(r.isBeingObserved_=!1,r.onBUO()),r instanceof Ge&&r.suspend_())}d.pendingUnobservations=[]}}function ti(t){var e=d.trackingDerivation;return e!==null?(e.runId_!==t.lastAccessedBy_&&(t.lastAccessedBy_=e.runId_,e.newObserving_[e.unboundDepsCount_++]=t,!t.isBeingObserved_&&d.trackingContext&&(t.isBeingObserved_=!0,t.onBO())),t.isBeingObserved_):(t.observers_.size===0&&d.inBatch>0&&ei(t),!1)}function ri(t){t.lowestObserverState_!==_.STALE_&&(t.lowestObserverState_=_.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===_.UP_TO_DATE_&&e.onBecomeStale_(),e.dependenciesState_=_.STALE_}))}function ts(t){t.lowestObserverState_!==_.STALE_&&(t.lowestObserverState_=_.STALE_,t.observers_.forEach(function(e){e.dependenciesState_===_.POSSIBLY_STALE_?e.dependenciesState_=_.STALE_:e.dependenciesState_===_.UP_TO_DATE_&&(t.lowestObserverState_=_.UP_TO_DATE_)}))}function rs(t){t.lowestObserverState_===_.UP_TO_DATE_&&(t.lowestObserverState_=_.POSSIBLY_STALE_,t.observers_.forEach(function(e){e.dependenciesState_===_.UP_TO_DATE_&&(e.dependenciesState_=_.POSSIBLY_STALE_,e.onBecomeStale_())}))}var wt=function(){function t(r,n,i,o){r===void 0&&(r="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=_.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=bt.NONE,this.name_=r,this.onInvalidate_=n,this.errorHandler_=i,this.requiresObservable_=o}var e=t.prototype;return e.onBecomeStale_=function(){this.schedule_()},e.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,d.pendingReactions.push(this),ni())},e.isScheduled=function(){return this.isScheduled_},e.runReaction_=function(){if(!this.isDisposed_){P(),this.isScheduled_=!1;var n=d.trackingContext;if(d.trackingContext=this,ir(this)){this.isTrackPending_=!0;try{this.onInvalidate_()}catch(i){this.reportExceptionInDerivation_(i)}}d.trackingContext=n,R()}},e.track=function(n){if(!this.isDisposed_){P(),this.isRunning_=!0;var i=d.trackingContext;d.trackingContext=this;var o=Xn(this,n,void 0);d.trackingContext=i,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&or(this),ct(o)&&this.reportExceptionInDerivation_(o.cause),R()}},e.reportExceptionInDerivation_=function(n){var i=this;if(this.errorHandler_){this.errorHandler_(n,this);return}if(d.disableErrorBoundaries)throw n;var o="[mobx] uncaught error in '"+this+"'";d.suppressReactionErrors||console.error(o,n),d.globalReactionErrorHandlers.forEach(function(s){return s(n,i)})},e.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(P(),or(this),R()))},e.getDisposer_=function(n){var i=this,o=function s(){i.dispose(),n==null||n.removeEventListener==null||n.removeEventListener("abort",s)};return n==null||n.addEventListener==null||n.addEventListener("abort",o),o[v]=this,o},e.toString=function(){return"Reaction["+this.name_+"]"},e.trace=function(n){},t}(),ns=100,is=function(e){return e()};function ni(){d.inBatch>0||d.isRunningReactions||is(os)}function os(){d.isRunningReactions=!0;for(var t=d.pendingReactions,e=0;t.length>0;){++e===ns&&(console.error("[mobx] cycle in reaction: "+t[0]),t.splice(0));for(var r=t.splice(0),n=0,i=r.length;n<i;n++)r[n].runReaction_()}d.isRunningReactions=!1}var At=he("Reaction",wt);function Ue(){return!1}function ss(t){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var ii="action",as="action.bound",oi="autoAction",ls="autoAction.bound",us="<unnamed action>",si=nt(ii),cs=nt(as,{bound:!0}),ai=nt(oi,{autoAction:!0}),hs=nt(ls,{autoAction:!0,bound:!0});function li(t){var e=function(n,i){if(L(n))return Pe(n.name||us,n,t);if(L(i))return Pe(n,i,t);if(le(i))return tt(n,i,t?ai:si);if(le(n))return I(nt(t?oi:ii,{name:n,autoAction:t}))};return e}var we=li(!1);Object.assign(we,si);var ze=li(!0);Object.assign(ze,ai);we.bound=I(cs);ze.bound=I(hs);function Ar(t){return L(t)&&t.isMobxAction===!0}function fs(t,e){var r,n,i,o,s;e===void 0&&(e=Rn);var l=(r=(n=e)==null?void 0:n.name)!=null?r:"Autorun",a=!e.scheduler&&!e.delay,u;if(a)u=new wt(l,function(){this.track(h)},e.onError,e.requiresObservable);else{var c=ps(e),f=!1;u=new wt(l,function(){f||(f=!0,c(function(){f=!1,u.isDisposed_||u.track(h)}))},e.onError,e.requiresObservable)}function h(){t(u)}return(i=e)!=null&&(o=i.signal)!=null&&o.aborted||u.schedule_(),u.getDisposer_((s=e)==null?void 0:s.signal)}var ds=function(e){return e()};function ps(t){return t.scheduler?t.scheduler:t.delay?function(e){return setTimeout(e,t.delay)}:ds}var vs="onBO",_s="onBUO";function ms(t,e,r){return ci(vs,t,e,r)}function ui(t,e,r){return ci(_s,t,e,r)}function ci(t,e,r,n){var i=typeof n=="function"?We(e,r):We(e),o=L(n)?n:r,s=t+"L";return i[s]?i[s].add(o):i[s]=new Set([o]),function(){var l=i[s];l&&(l.delete(o),l.size===0&&delete i[s])}}function gs(t,e,r,n){var i=ao(e);return je(function(){var o=xr(t,n)[v];vr(i).forEach(function(s){o.extend_(s,i[s],r&&s in r?r[s]:!0)})}),t}var bs=0;function hi(){this.message="FLOW_CANCELLED"}hi.prototype=Object.create(Error.prototype);var qr=kn("flow"),ys=kn("flow.bound",{bound:!0}),Ke=Object.assign(function(e,r){if(le(r))return tt(e,r,qr);var n=e,i=n.name||"<unnamed flow>",o=function(){var l=this,a=arguments,u=++bs,c=we(i+" - runid: "+u+" - init",n).apply(l,a),f,h=void 0,p=new Promise(function(T,w){var E=0;f=w;function pe(O){h=void 0;var U;try{U=we(i+" - runid: "+u+" - yield "+E++,c.next).call(c,O)}catch(F){return w(F)}H(U)}function q(O){h=void 0;var U;try{U=we(i+" - runid: "+u+" - yield "+E++,c.throw).call(c,O)}catch(F){return w(F)}H(U)}function H(O){if(L(O==null?void 0:O.then)){O.then(H,w);return}return O.done?T(O.value):(h=Promise.resolve(O.value),h.then(pe,q))}pe(void 0)});return p.cancel=we(i+" - runid: "+u+" - cancel",function(){try{h&&Wr(h);var T=c.return(void 0),w=Promise.resolve(T.value);w.then(ge,ge),Wr(w),f(new hi)}catch(E){f(E)}}),p};return o.isMobXFlow=!0,o},qr);Ke.bound=I(ys);function Wr(t){L(t.cancel)&&t.cancel()}function Ot(t){return(t==null?void 0:t.isMobXFlow)===!0}function ws(t,e){return t?e!==void 0?qe(t)?t[v].values_.has(e):!1:qe(t)||!!t[v]||mr(t)||At(t)||kt(t):!1}function fi(t){return ws(t)}function G(t,e){e===void 0&&(e=void 0),P();try{return t.apply(e)}finally{R()}}function _e(t){return t[v]}var As={has:function(e,r){return _e(e).has_(r)},get:function(e,r){return _e(e).get_(r)},set:function(e,r,n){var i;return le(r)?(i=_e(e).set_(r,n,!0))!=null?i:!0:!1},deleteProperty:function(e,r){var n;return le(r)?(n=_e(e).delete_(r,!0))!=null?n:!0:!1},defineProperty:function(e,r,n){var i;return(i=_e(e).defineProperty_(r,n))!=null?i:!0},ownKeys:function(e){return _e(e).ownKeys_()},preventExtensions:function(e){m(13)}};function Os(t,e){var r,n;return Cn(),t=xr(t,e),(n=(r=t[v]).proxy_)!=null?n:r.proxy_=new Proxy(t,As)}function S(t){return t.interceptors_!==void 0&&t.interceptors_.length>0}function it(t,e){var r=t.interceptors_||(t.interceptors_=[]);return r.push(e),Tn(function(){var n=r.indexOf(e);n!==-1&&r.splice(n,1)})}function $(t,e){var r=fe();try{for(var n=[].concat(t.interceptors_||[]),i=0,o=n.length;i<o&&(e=n[i](e),e&&!e.type&&m(14),!!e);i++);return e}finally{z(r)}}function M(t){return t.changeListeners_!==void 0&&t.changeListeners_.length>0}function ot(t,e){var r=t.changeListeners_||(t.changeListeners_=[]);return r.push(e),Tn(function(){var n=r.indexOf(e);n!==-1&&r.splice(n,1)})}function B(t,e){var r=fe(),n=t.changeListeners_;if(n){n=n.slice();for(var i=0,o=n.length;i<o;i++)n[i](e);z(r)}}var Yr="splice",V="update",xs=1e4,Es={get:function(e,r){var n=e[v];return r===v?n:r==="length"?n.getArrayLength_():typeof r=="string"&&!isNaN(r)?n.get_(parseInt(r)):Z(xt,r)?xt[r]:e[r]},set:function(e,r,n){var i=e[v];return r==="length"&&i.setArrayLength_(n),typeof r=="symbol"||isNaN(r)?e[r]=n:i.set_(parseInt(r),n),!0},preventExtensions:function(){m(15)}},Or=function(){function t(r,n,i,o){r===void 0&&(r="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=i,this.legacyMode_=o,this.atom_=new rt(r),this.enhancer_=function(s,l){return n(s,l,"ObservableArray[..]")}}var e=t.prototype;return e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.dehanceValues_=function(n){return this.dehancer!==void 0&&n.length>0?n.map(this.dehancer):n},e.intercept_=function(n){return it(this,n)},e.observe_=function(n,i){return i===void 0&&(i=!1),i&&n({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),ot(this,n)},e.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},e.setArrayLength_=function(n){(typeof n!="number"||isNaN(n)||n<0)&&m("Out of range: "+n);var i=this.values_.length;if(n!==i)if(n>i){for(var o=new Array(n-i),s=0;s<n-i;s++)o[s]=void 0;this.spliceWithArray_(i,0,o)}else this.spliceWithArray_(n,i-n)},e.updateArrayLength_=function(n,i){n!==this.lastKnownLength_&&m(16),this.lastKnownLength_+=i,this.legacyMode_&&i>0&&Oi(n+i+1)},e.spliceWithArray_=function(n,i,o){var s=this;this.atom_;var l=this.values_.length;if(n===void 0?n=0:n>l?n=l:n<0&&(n=Math.max(0,l+n)),arguments.length===1?i=l-n:i==null?i=0:i=Math.max(0,Math.min(i,l-n)),o===void 0&&(o=rr),S(this)){var a=$(this,{object:this.proxy_,type:Yr,index:n,removedCount:i,added:o});if(!a)return rr;i=a.removedCount,o=a.added}if(o=o.length===0?o:o.map(function(f){return s.enhancer_(f,void 0)}),this.legacyMode_){var u=o.length-i;this.updateArrayLength_(l,u)}var c=this.spliceItemsIntoValues_(n,i,o);return(i!==0||o.length!==0)&&this.notifyArraySplice_(n,o,c),this.dehanceValues_(c)},e.spliceItemsIntoValues_=function(n,i,o){if(o.length<xs){var s;return(s=this.values_).splice.apply(s,[n,i].concat(o))}else{var l=this.values_.slice(n,n+i),a=this.values_.slice(n+i);this.values_.length+=o.length-i;for(var u=0;u<o.length;u++)this.values_[n+u]=o[u];for(var c=0;c<a.length;c++)this.values_[n+o.length+c]=a[c];return l}},e.notifyArrayChildUpdate_=function(n,i,o){var s=!this.owned_&&Ue(),l=M(this),a=l||s?{observableKind:"array",object:this.proxy_,type:V,debugObjectName:this.atom_.name_,index:n,newValue:i,oldValue:o}:null;this.atom_.reportChanged(),l&&B(this,a)},e.notifyArraySplice_=function(n,i,o){var s=!this.owned_&&Ue(),l=M(this),a=l||s?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:Yr,index:n,removed:o,added:i,removedCount:o.length,addedCount:i.length}:null;this.atom_.reportChanged(),l&&B(this,a)},e.get_=function(n){if(this.legacyMode_&&n>=this.values_.length){console.warn("[mobx] Out of bounds read: "+n);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[n])},e.set_=function(n,i){var o=this.values_;if(this.legacyMode_&&n>o.length&&m(17,n,o.length),n<o.length){this.atom_;var s=o[n];if(S(this)){var l=$(this,{type:V,object:this.proxy_,index:n,newValue:i});if(!l)return;i=l.newValue}i=this.enhancer_(i,s);var a=i!==s;a&&(o[n]=i,this.notifyArrayChildUpdate_(n,i,s))}else{for(var u=new Array(n+1-o.length),c=0;c<u.length-1;c++)u[c]=void 0;u[u.length-1]=i,this.spliceWithArray_(o.length,0,u)}},t}();function Ss(t,e,r,n){return r===void 0&&(r="ObservableArray"),n===void 0&&(n=!1),Cn(),je(function(){var i=new Or(r,e,n,!1);Dn(i.values_,v,i);var o=new Proxy(i.values_,Es);return i.proxy_=o,t&&t.length&&i.spliceWithArray_(0,0,t),o})}var xt={clear:function(){return this.splice(0)},replace:function(e){var r=this[v];return r.spliceWithArray_(0,r.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var s=this[v];switch(arguments.length){case 0:return[];case 1:return s.spliceWithArray_(e);case 2:return s.spliceWithArray_(e,r)}return s.spliceWithArray_(e,r,i)},spliceWithArray:function(e,r,n){return this[v].spliceWithArray_(e,r,n)},push:function(){for(var e=this[v],r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e.spliceWithArray_(e.values_.length,0,n),e.values_.length},pop:function(){return this.splice(Math.max(this[v].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[v],r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e.spliceWithArray_(0,0,n),e.values_.length},reverse:function(){return d.trackingDerivation&&m(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){d.trackingDerivation&&m(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var r=this[v],n=r.dehanceValues_(r.values_).indexOf(e);return n>-1?(this.splice(n,1),!0):!1}};y("concat",K);y("flat",K);y("includes",K);y("indexOf",K);y("join",K);y("lastIndexOf",K);y("slice",K);y("toString",K);y("toLocaleString",K);y("every",ne);y("filter",ne);y("find",ne);y("findIndex",ne);y("flatMap",ne);y("forEach",ne);y("map",ne);y("some",ne);y("reduce",di);y("reduceRight",di);function y(t,e){typeof Array.prototype[t]=="function"&&(xt[t]=e(t))}function K(t){return function(){var e=this[v];e.atom_.reportObserved();var r=e.dehanceValues_(e.values_);return r[t].apply(r,arguments)}}function ne(t){return function(e,r){var n=this,i=this[v];i.atom_.reportObserved();var o=i.dehanceValues_(i.values_);return o[t](function(s,l){return e.call(r,s,l,n)})}}function di(t){return function(){var e=this,r=this[v];r.atom_.reportObserved();var n=r.dehanceValues_(r.values_),i=arguments[0];return arguments[0]=function(o,s,l){return i(o,s,l,e)},n[t].apply(n,arguments)}}var $s=he("ObservableArrayAdministration",Or);function It(t){return Mt(t)&&$s(t[v])}var pi,vi,Ps={},X="add",Et="delete";pi=Symbol.iterator;vi=Symbol.toStringTag;var _i=function(){function t(r,n,i){var o=this;n===void 0&&(n=$e),i===void 0&&(i="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[v]=Ps,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=n,this.name_=i,L(Map)||m(18),je(function(){o.keysAtom_=Ln("ObservableMap.keys()"),o.data_=new Map,o.hasMap_=new Map,r&&o.merge(r)})}var e=t.prototype;return e.has_=function(n){return this.data_.has(n)},e.has=function(n){var i=this;if(!d.trackingDerivation)return this.has_(n);var o=this.hasMap_.get(n);if(!o){var s=o=new Oe(this.has_(n),Bt,"ObservableMap.key?",!1);this.hasMap_.set(n,s),ui(s,function(){return i.hasMap_.delete(n)})}return o.get()},e.set=function(n,i){var o=this.has_(n);if(S(this)){var s=$(this,{type:o?V:X,object:this,newValue:i,name:n});if(!s)return this;i=s.newValue}return o?this.updateValue_(n,i):this.addValue_(n,i),this},e.delete=function(n){var i=this;if(this.keysAtom_,S(this)){var o=$(this,{type:Et,object:this,name:n});if(!o)return!1}if(this.has_(n)){var s=Ue(),l=M(this),a=l||s?{observableKind:"map",debugObjectName:this.name_,type:Et,object:this,oldValue:this.data_.get(n).value_,name:n}:null;return G(function(){var u;i.keysAtom_.reportChanged(),(u=i.hasMap_.get(n))==null||u.setNewValue_(!1);var c=i.data_.get(n);c.setNewValue_(void 0),i.data_.delete(n)}),l&&B(this,a),!0}return!1},e.updateValue_=function(n,i){var o=this.data_.get(n);if(i=o.prepareNewValue_(i),i!==d.UNCHANGED){var s=Ue(),l=M(this),a=l||s?{observableKind:"map",debugObjectName:this.name_,type:V,object:this,oldValue:o.value_,name:n,newValue:i}:null;o.setNewValue_(i),l&&B(this,a)}},e.addValue_=function(n,i){var o=this;this.keysAtom_,G(function(){var u,c=new Oe(i,o.enhancer_,"ObservableMap.key",!1);o.data_.set(n,c),i=c.value_,(u=o.hasMap_.get(n))==null||u.setNewValue_(!0),o.keysAtom_.reportChanged()});var s=Ue(),l=M(this),a=l||s?{observableKind:"map",debugObjectName:this.name_,type:X,object:this,name:n,newValue:i}:null;l&&B(this,a)},e.get=function(n){return this.has(n)?this.dehanceValue_(this.data_.get(n).get()):this.dehanceValue_(void 0)},e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},e.values=function(){var n=this,i=this.keys();return Ye({next:function(){var s=i.next(),l=s.done,a=s.value;return{done:l,value:l?void 0:n.get(a)}}})},e.entries=function(){var n=this,i=this.keys();return Ye({next:function(){var s=i.next(),l=s.done,a=s.value;return{done:l,value:l?void 0:[a,n.get(a)]}}})},e[pi]=function(){return this.entries()},e.forEach=function(n,i){for(var o=be(this),s;!(s=o()).done;){var l=s.value,a=l[0],u=l[1];n.call(i,u,a,this)}},e.merge=function(n){var i=this;return de(n)&&(n=new Map(n)),G(function(){Q(n)?so(n).forEach(function(o){return i.set(o,n[o])}):Array.isArray(n)?n.forEach(function(o){var s=o[0],l=o[1];return i.set(s,l)}):Ce(n)?(n.constructor!==Map&&m(19,n),n.forEach(function(o,s){return i.set(s,o)})):n!=null&&m(20,n)}),this},e.clear=function(){var n=this;G(function(){Jn(function(){for(var i=be(n.keys()),o;!(o=i()).done;){var s=o.value;n.delete(s)}})})},e.replace=function(n){var i=this;return G(function(){for(var o=Rs(n),s=new Map,l=!1,a=be(i.data_.keys()),u;!(u=a()).done;){var c=u.value;if(!o.has(c)){var f=i.delete(c);if(f)l=!0;else{var h=i.data_.get(c);s.set(c,h)}}}for(var p=be(o.entries()),T;!(T=p()).done;){var w=T.value,E=w[0],pe=w[1],q=i.data_.has(E);if(i.set(E,pe),i.data_.has(E)){var H=i.data_.get(E);s.set(E,H),q||(l=!0)}}if(!l)if(i.data_.size!==s.size)i.keysAtom_.reportChanged();else for(var O=i.data_.keys(),U=s.keys(),F=O.next(),Me=U.next();!F.done;){if(F.value!==Me.value){i.keysAtom_.reportChanged();break}F=O.next(),Me=U.next()}i.data_=s}),this},e.toString=function(){return"[object ObservableMap]"},e.toJSON=function(){return Array.from(this)},e.observe_=function(n,i){return ot(this,n)},e.intercept_=function(n){return it(this,n)},_r(t,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:vi,get:function(){return"Map"}}]),t}(),de=he("ObservableMap",_i);function Rs(t){if(Ce(t)||de(t))return t;if(Array.isArray(t))return new Map(t);if(Q(t)){var e=new Map;for(var r in t)e.set(r,t[r]);return e}else return m(21,t)}var mi,gi,Cs={};mi=Symbol.iterator;gi=Symbol.toStringTag;var bi=function(){function t(r,n,i){var o=this;n===void 0&&(n=$e),i===void 0&&(i="ObservableSet"),this.name_=void 0,this[v]=Cs,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=i,L(Set)||m(22),this.enhancer_=function(s,l){return n(s,l,i)},je(function(){o.atom_=Ln(o.name_),r&&o.replace(r)})}var e=t.prototype;return e.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},e.clear=function(){var n=this;G(function(){Jn(function(){for(var i=be(n.data_.values()),o;!(o=i()).done;){var s=o.value;n.delete(s)}})})},e.forEach=function(n,i){for(var o=be(this),s;!(s=o()).done;){var l=s.value;n.call(i,l,l,this)}},e.add=function(n){var i=this;if(this.atom_,S(this)){var o=$(this,{type:X,object:this,newValue:n});if(!o)return this}if(!this.has(n)){G(function(){i.data_.add(i.enhancer_(n,void 0)),i.atom_.reportChanged()});var s=!1,l=M(this),a=l||s?{observableKind:"set",debugObjectName:this.name_,type:X,object:this,newValue:n}:null;l&&B(this,a)}return this},e.delete=function(n){var i=this;if(S(this)){var o=$(this,{type:Et,object:this,oldValue:n});if(!o)return!1}if(this.has(n)){var s=!1,l=M(this),a=l||s?{observableKind:"set",debugObjectName:this.name_,type:Et,object:this,oldValue:n}:null;return G(function(){i.atom_.reportChanged(),i.data_.delete(n)}),l&&B(this,a),!0}return!1},e.has=function(n){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(n))},e.entries=function(){var n=0,i=Array.from(this.keys()),o=Array.from(this.values());return Ye({next:function(){var l=n;return n+=1,l<o.length?{value:[i[l],o[l]],done:!1}:{done:!0}}})},e.keys=function(){return this.values()},e.values=function(){this.atom_.reportObserved();var n=this,i=0,o=Array.from(this.data_.values());return Ye({next:function(){return i<o.length?{value:n.dehanceValue_(o[i++]),done:!1}:{done:!0}}})},e.replace=function(n){var i=this;return Te(n)&&(n=new Set(n)),G(function(){Array.isArray(n)?(i.clear(),n.forEach(function(o){return i.add(o)})):et(n)?(i.clear(),n.forEach(function(o){return i.add(o)})):n!=null&&m("Cannot initialize set from "+n)}),this},e.observe_=function(n,i){return ot(this,n)},e.intercept_=function(n){return it(this,n)},e.toJSON=function(){return Array.from(this)},e.toString=function(){return"[object ObservableSet]"},e[mi]=function(){return this.values()},_r(t,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:gi,get:function(){return"Set"}}]),t}(),Te=he("ObservableSet",bi),Xr=Object.create(null),Jr="remove",yi=function(){function t(r,n,i,o){n===void 0&&(n=new Map),o===void 0&&(o=Do),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=r,this.values_=n,this.name_=i,this.defaultAnnotation_=o,this.keysAtom_=new rt("ObservableObject.keys"),this.isPlainObject_=Q(this.target_)}var e=t.prototype;return e.getObservablePropValue_=function(n){return this.values_.get(n).get()},e.setObservablePropValue_=function(n,i){var o=this.values_.get(n);if(o instanceof Ge)return o.set(i),!0;if(S(this)){var s=$(this,{type:V,object:this.proxy_||this.target_,name:n,newValue:i});if(!s)return null;i=s.newValue}if(i=o.prepareNewValue_(i),i!==d.UNCHANGED){var l=M(this),a=!1,u=l||a?{type:V,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:o.value_,name:n,newValue:i}:null;o.setNewValue_(i),l&&B(this,u)}return!0},e.get_=function(n){return d.trackingDerivation&&!Z(this.target_,n)&&this.has_(n),this.target_[n]},e.set_=function(n,i,o){return o===void 0&&(o=!1),Z(this.target_,n)?this.values_.has(n)?this.setObservablePropValue_(n,i):o?Reflect.set(this.target_,n,i):(this.target_[n]=i,!0):this.extend_(n,{value:i,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,o)},e.has_=function(n){if(!d.trackingDerivation)return n in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var i=this.pendingKeys_.get(n);return i||(i=new Oe(n in this.target_,Bt,"ObservableObject.key?",!1),this.pendingKeys_.set(n,i)),i.get()},e.make_=function(n,i){if(i===!0&&(i=this.defaultAnnotation_),i!==!1){if(!(n in this.target_)){var o;if((o=this.target_[ye])!=null&&o[n])return;m(1,i.annotationType_,this.name_+"."+n.toString())}for(var s=this.target_;s&&s!==Nt;){var l=_t(s,n);if(l){var a=i.make_(this,n,l,s);if(a===0)return;if(a===1)break}s=Object.getPrototypeOf(s)}Qr(this,i,n)}},e.extend_=function(n,i,o,s){if(s===void 0&&(s=!1),o===!0&&(o=this.defaultAnnotation_),o===!1)return this.defineProperty_(n,i,s);var l=o.extend_(this,n,i,s);return l&&Qr(this,o,n),l},e.defineProperty_=function(n,i,o){o===void 0&&(o=!1),this.keysAtom_;try{P();var s=this.delete_(n);if(!s)return s;if(S(this)){var l=$(this,{object:this.proxy_||this.target_,name:n,type:X,newValue:i.value});if(!l)return null;var a=l.newValue;i.value!==a&&(i=Fe({},i,{value:a}))}if(o){if(!Reflect.defineProperty(this.target_,n,i))return!1}else k(this.target_,n,i);this.notifyPropertyAddition_(n,i.value)}finally{R()}return!0},e.defineObservableProperty_=function(n,i,o,s){s===void 0&&(s=!1),this.keysAtom_;try{P();var l=this.delete_(n);if(!l)return l;if(S(this)){var a=$(this,{object:this.proxy_||this.target_,name:n,type:X,newValue:i});if(!a)return null;i=a.newValue}var u=Zr(n),c={configurable:d.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:u.get,set:u.set};if(s){if(!Reflect.defineProperty(this.target_,n,c))return!1}else k(this.target_,n,c);var f=new Oe(i,o,"ObservableObject.key",!1);this.values_.set(n,f),this.notifyPropertyAddition_(n,f.value_)}finally{R()}return!0},e.defineComputedProperty_=function(n,i,o){o===void 0&&(o=!1),this.keysAtom_;try{P();var s=this.delete_(n);if(!s)return s;if(S(this)){var l=$(this,{object:this.proxy_||this.target_,name:n,type:X,newValue:void 0});if(!l)return null}i.name||(i.name="ObservableObject.key"),i.context=this.proxy_||this.target_;var a=Zr(n),u={configurable:d.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:a.get,set:a.set};if(o){if(!Reflect.defineProperty(this.target_,n,u))return!1}else k(this.target_,n,u);this.values_.set(n,new Ge(i)),this.notifyPropertyAddition_(n,void 0)}finally{R()}return!0},e.delete_=function(n,i){if(i===void 0&&(i=!1),this.keysAtom_,!Z(this.target_,n))return!0;if(S(this)){var o=$(this,{object:this.proxy_||this.target_,name:n,type:Jr});if(!o)return null}try{var s,l;P();var a=M(this),u=!1,c=this.values_.get(n),f=void 0;if(!c&&(a||u)){var h;f=(h=_t(this.target_,n))==null?void 0:h.value}if(i){if(!Reflect.deleteProperty(this.target_,n))return!1}else delete this.target_[n];if(c&&(this.values_.delete(n),c instanceof Oe&&(f=c.value_),ri(c)),this.keysAtom_.reportChanged(),(s=this.pendingKeys_)==null||(l=s.get(n))==null||l.set(n in this.target_),a||u){var p={type:Jr,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:f,name:n};a&&B(this,p)}}finally{R()}return!0},e.observe_=function(n,i){return ot(this,n)},e.intercept_=function(n){return it(this,n)},e.notifyPropertyAddition_=function(n,i){var o,s,l=M(this),a=!1;if(l||a){var u=l||a?{type:X,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:n,newValue:i}:null;l&&B(this,u)}(o=this.pendingKeys_)==null||(s=o.get(n))==null||s.set(!0),this.keysAtom_.reportChanged()},e.ownKeys_=function(){return this.keysAtom_.reportObserved(),vr(this.target_)},e.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},t}();function xr(t,e){var r;if(Z(t,v))return t;var n=(r=e==null?void 0:e.name)!=null?r:"ObservableObject",i=new yi(t,new Map,String(n),Fo(e));return pr(t,v,i),t}var Ts=he("ObservableObjectAdministration",yi);function Zr(t){return Xr[t]||(Xr[t]={get:function(){return this[v].getObservablePropValue_(t)},set:function(r){return this[v].setObservablePropValue_(t,r)}})}function qe(t){return Mt(t)?Ts(t[v]):!1}function Qr(t,e,r){var n;(n=t.target_[ye])==null||delete n[r]}var js=Ai(0),Ds=function(){var t=!1,e={};return Object.defineProperty(e,"0",{set:function(){t=!0}}),Object.create(e)[0]=1,t===!1}(),Jt=0,wi=function(){};function Ns(t,e){Object.setPrototypeOf?Object.setPrototypeOf(t.prototype,e):t.prototype.__proto__!==void 0?t.prototype.__proto__=e:t.prototype=e}Ns(wi,Array.prototype);var Er=function(t,e,r){Bn(n,t);function n(o,s,l,a){var u;return l===void 0&&(l="ObservableArray"),a===void 0&&(a=!1),u=t.call(this)||this,je(function(){var c=new Or(l,s,a,!0);c.proxy_=Wt(u),Dn(Wt(u),v,c),o&&o.length&&u.spliceWithArray(0,0,o),Ds&&Object.defineProperty(Wt(u),"0",js)}),u}var i=n.prototype;return i.concat=function(){this[v].atom_.reportObserved();for(var s=arguments.length,l=new Array(s),a=0;a<s;a++)l[a]=arguments[a];return Array.prototype.concat.apply(this.slice(),l.map(function(u){return It(u)?u.slice():u}))},i[r]=function(){var o=this,s=0;return Ye({next:function(){return s<o.length?{value:o[s++],done:!1}:{done:!0,value:void 0}}})},_r(n,[{key:"length",get:function(){return this[v].getArrayLength_()},set:function(s){this[v].setArrayLength_(s)}},{key:e,get:function(){return"Array"}}]),n}(wi,Symbol.toStringTag,Symbol.iterator);Object.entries(xt).forEach(function(t){var e=t[0],r=t[1];e!=="concat"&&pr(Er.prototype,e,r)});function Ai(t){return{enumerable:!1,configurable:!0,get:function(){return this[v].get_(t)},set:function(r){this[v].set_(t,r)}}}function Ms(t){k(Er.prototype,""+t,Ai(t))}function Oi(t){if(t>Jt){for(var e=Jt;e<t+100;e++)Ms(e);Jt=t}}Oi(1e3);function Bs(t,e,r){return new Er(t,e,r)}function We(t,e){if(typeof t=="object"&&t!==null){if(It(t))return e!==void 0&&m(23),t[v].atom_;if(Te(t))return t.atom_;if(de(t)){if(e===void 0)return t.keysAtom_;var r=t.data_.get(e)||t.hasMap_.get(e);return r||m(25,e,sr(t)),r}if(qe(t)){if(!e)return m(26);var n=t[v].values_.get(e);return n||m(27,e,sr(t)),n}if(mr(t)||kt(t)||At(t))return t}else if(L(t)&&At(t[v]))return t[v];m(28)}function xi(t,e){if(t||m(29),e!==void 0)return xi(We(t,e));if(mr(t)||kt(t)||At(t)||de(t)||Te(t))return t;if(t[v])return t[v];m(24,t)}function sr(t,e){var r;if(e!==void 0)r=We(t,e);else{if(Ar(t))return t.name;qe(t)||de(t)||Te(t)?r=xi(t):r=We(t)}return r.name_}function je(t){var e=fe(),r=br(!0);P();try{return t()}finally{R(),yr(r),z(e)}}var en=Nt.toString;function Sr(t,e,r){return r===void 0&&(r=-1),ar(t,e,r)}function ar(t,e,r,n,i){if(t===e)return t!==0||1/t===1/e;if(t==null||e==null)return!1;if(t!==t)return e!==e;var o=typeof t;if(o!=="function"&&o!=="object"&&typeof e!="object")return!1;var s=en.call(t);if(s!==en.call(e))return!1;switch(s){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!=+t?+e!=+e:+t==0?1/+t===1/e:+t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(t)===Symbol.valueOf.call(e);case"[object Map]":case"[object Set]":r>=0&&r++;break}t=tn(t),e=tn(e);var l=s==="[object Array]";if(!l){if(typeof t!="object"||typeof e!="object")return!1;var a=t.constructor,u=e.constructor;if(a!==u&&!(L(a)&&a instanceof a&&L(u)&&u instanceof u)&&"constructor"in t&&"constructor"in e)return!1}if(r===0)return!1;r<0&&(r=-1),n=n||[],i=i||[];for(var c=n.length;c--;)if(n[c]===t)return i[c]===e;if(n.push(t),i.push(e),l){if(c=t.length,c!==e.length)return!1;for(;c--;)if(!ar(t[c],e[c],r-1,n,i))return!1}else{var f=Object.keys(t),h;if(c=f.length,Object.keys(e).length!==c)return!1;for(;c--;)if(h=f[c],!(Z(e,h)&&ar(t[h],e[h],r-1,n,i)))return!1}return n.pop(),i.pop(),!0}function tn(t){return It(t)?t.slice():Ce(t)||de(t)||et(t)||Te(t)?Array.from(t.entries()):t}function Ye(t){return t[Symbol.iterator]=Ls,t}function Ls(){return this}["Symbol","Map","Set"].forEach(function(t){var e=$n();typeof e[t]>"u"&&m("MobX requires global '"+t+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:ss,extras:{getDebugName:sr},$mobx:v});function Us(t){return ro(t,wt)}class De extends Us(se){}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=t=>t??b,Ei=te`
  :host {
    --secondary-text-color: #ff0055;
    --hover-text-color: #00ffaf;
    color: var(--primary-text-color, #fcfcf4);
    display: block;
    width: 100%;
    display: flex;
  }

  .content {
    background-color: var(--primary-bg-color, #1a2c14);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    flex: 1 1;
    color: var(--primary-title-color, --primary-text-color);
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-family: "Inter", sans-serif;
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  hr.divider {
    border: 0.66px solid var(--primary-text-color, #fcfcf4);
    width: 100%;
  }

  .title,
  .author {
    display: inherit;
  }

  #map {
    overflow: hidden;
  }

  #fly {
    display: block;
    position: relative;
    margin: 0px auto;
    width: 50%;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background: #ee8a65;
  }

  .app-title-section {
    font-family: "Anonymous Pro", sans-serif;
    font-size: var(--header-font-size, 5rem);
    text-transform: uppercase;
    letter-spacing: 3px;
    line-height: 0.8;
  }

  a {
    color: var(--primary-link-color, --primary-text-color);
    text-decoration: none;
  }

  a:hover {
    color: var(--primary-link-hover-color, --hover-text-color);
    font-weight: 800;
  }

  img.placeholder-img {
    width: 100%;
  }

  .mapboxgl-canvas {
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;
  }

  /* 
  #map {
    width: 100%;
    height: 500px;
    display: block;
  }

  

  .mapboxgl-popup {
    max-width: 280px;
  }

  .mapboxgl-popup-content {
    background-color: white;
    color: black;
    padding: 2.2rem 2rem;
    box-sizing: border-box;
  }

  .mapboxgl-popup-close-button {
    position: absolute;
    top: 4px;
    left: 6px;
  }

  .mapboxgl-canvas-container {
    height: 100%;
  }
*/

  /**
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 768px) {
    .content {
      padding: 1rem;
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }

  /**
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (max-width: 480px) {
    .app-title-section {
      font-size: 4rem;
    }

    .content {
      padding: 1rem;
    }

    main {
      display: flex;
      flex-direction: column;
    }
  }

  /**
    ##Device = Really narrow smartphones (like Galaxy Fold)
    ##Screen = B/w 280px
  */
  @media (max-width: 280px) {
    .app-title-section {
      font-size: 2rem;
    }
  }
`;let Xe=class extends De{constructor(){super(...arguments),this.title="Discover Our Parks"}render(){return C`
      <div class="content">
        <div class="header">
          <div class="title">
            <a href="/discover-our-parks-app/">U.S. National Parks Discovery</a>
          </div>
          <div class="author">By Janessa</div>
        </div>
        <hr class="divider" />
        <div class="app-title-section">${this.title}</div>
        <hr class="divider" />
        ${St(this.contentTemplate)}
      </div>
    `}};Xe.styles=Ei;g([x()],Xe.prototype,"title",void 0);g([x({type:Object})],Xe.prototype,"contentTemplate",void 0);Xe=g([re("about-section")],Xe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ks(t,e,r){return t?e():r==null?void 0:r()}const Is=te`
  :host {
    --primary-text-color-dark: #1a2c14;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .image-container {
    width: 100%;
  }

  .image-container > img {
    height: 100%;
    object-fit: contain;
  }

  .content-container {
    margin: 1rem;
    font-family: "Inter", sans-serif;
    color: var(--primary-text-color-dark);
  }

  .nav-container {
    margin-block: 3rem;
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    /* CSS */
  }

  /**
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    .image-container > img {
      object-fit: cover;
      width: 100%;
    }
  }

  /**
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (max-width: 480px) {
    .image-container > img {
      object-fit: cover;
      width: 100%;
    }
  }
`,Vs=te`
  .pill-button {
    background-color: transparent;
    height: 2.2rem;
    width: max-content;
    border-radius: 30px;
    padding-inline: 1rem 0.5rem;
    border: 1px solid black;
    align-items: center;
    display: flex;
    text-transform: uppercase;
    font-weight: 700;
  }

  .pill-button:hover {
    background-color: #ffaab774;
  }

  span {
    margin-inline: 0.5rem;
    font-size: 1.2rem;
    box-sizing: border-box;
    margin-block: -4px 0;
  }

  a {
    text-decoration: none;
  }
`;let Re=class extends De{constructor(){super(...arguments),this.label="Button",this.openInNewTab=!1}render(){return C`
      <a
        href=${St(this.route)}
        target=${St(this.openInNewTab===!0?"_blank":"")}
      >
        <button class="pill-button" type="button">
          ${this.label}<span>&#10230;</span>
        </button>
      </a>
    `}};Re.styles=Vs;g([x()],Re.prototype,"label",void 0);g([x()],Re.prototype,"route",void 0);g([x({type:Boolean})],Re.prototype,"openInNewTab",void 0);Re=g([re("pill-button")],Re);let ee=class extends De{constructor(){super(...arguments),this.buttonLabel="Explore the map",this.openRouteInNewTab=!1}render(){return C`
      <div class="image-container">
        <slot name="photo-carousel-container"></slot>
      </div>
      <div class="content-container">
        <p class="text-content">${this.initialTextContent}</p>

        <p class="text-content">${this.secondaryTextContent}</p>

        ${ks(this.buttonRoute,()=>C`<div class="nav-container">
            <pill-button
              label=${this.buttonLabel}
              route=${St(this.buttonRoute)}
              .openInNewTab=${this.openRouteInNewTab}
            ></pill-button>
          </div>`)}
      </div>
    `}};ee.styles=Is;g([x()],ee.prototype,"initialTextContent",void 0);g([x()],ee.prototype,"secondaryTextContent",void 0);g([x()],ee.prototype,"buttonLabel",void 0);g([x()],ee.prototype,"buttonRoute",void 0);g([x({type:Boolean})],ee.prototype,"openRouteInNewTab",void 0);ee=g([re("info-card")],ee);const Hs=te`
  :host {
    display: inline-block;
    position: relative;
    /* Defaults */
    border-radius: 4px;
    background: var(--bg-color, gainsboro);
    cursor: pointer;
    width: 100%;
    font-family: "Inter", sans-serif;
  }

  .fit {
    position: relative;
    height: 100%;
    width: 100%;
  }

  ::slotted(*) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .menu-container {
    height: 2rem;
    border-block: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
  }

  .photo-container {
    width: 100%;
    height: 400px;
    cursor: default;
  }

  .buttons {
    display: flex;
    gap: 1.2rem;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    padding-inline-end: 2rem;
    padding-block-end: 0.2rem;
  }

  slot[name="count"] {
    display: inherit;
    flex: 1 1 0;
    padding-inline-start: 1.5rem;
    font-size: 0.6rem;
    cursor: default;
  }

  slot[name="name"] {
    display: inherit;
    justify-content: flex-end;
    padding-inline-end: 1.5rem;
    margin-inline-end: 1.5rem;
    border-right: 1px solid black;
    height: 100%;
    align-items: center;
    font-size: 0.7rem;
    text-transform: uppercase;
    cursor: default;
  }
`;let Je=class extends se{constructor(){super(...arguments),this.selectedInternal=0,this.left=0,this.previous=0,this.selected=0,this.name="",this.metadata=""}connectedCallback(){super.connectedCallback()}get maxSelected(){return console.log(this.childElementCount),this.childElementCount-1}hasValidSelected(){return this.selected>=0&&this.selected<=this.maxSelected}updated(e){e.has("selected")&&this.hasValidSelected()&&(this.updateSlots(),this.previous=this.selected)}updateSlots(){var e,r;(e=this.children[this.previous])===null||e===void 0||e.removeAttribute("slot"),(r=this.children[this.selected])===null||r===void 0||r.setAttribute("slot","selected")}handleForwardClick(e){const r=this.selected+(+!e.shiftKey||1);this.selected=r>this.maxSelected?0:r<0?this.maxSelected:r,this.dispatchChange(this.selected)}handleBackClick(e){const r=this.selected+(+!e.shiftKey||-1);this.selected=r>this.maxSelected?0:r<0?this.maxSelected:r,this.dispatchChange(this.selected)}dispatchChange(e){const r=new CustomEvent("change",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(r),this.updateData(e)}updateData(e){const r=this.children[e].getAttribute("id");r&&(this.name=r);const n=this.children[e].getAttribute("park-code");n&&(this.metadata=n),window.dispatchEvent(new CustomEvent("changed-photo-event",{detail:{name:this.name,metadata:this.metadata}}))}render(){this.hasValidSelected()&&(this.selectedInternal=this.selected);const e=this.maxSelected>0?`${this.selected} OF ${this.maxSelected}`:"...";return C`
      <div class="fit">
        <div class="photo-container">
          <slot name="selected"></slot>
        </div>
        <div class="menu-container">
          <slot name="count">${e}</slot>
          <slot name="name">${this.name}</slot>
          <div class="buttons">
            <!-- <div class="back-arrow" @click=${this.handleBackClick}>
              <span>&#10229;</span>
            </div> -->
            <div class="forward-arrow" @click=${this.handleForwardClick}>
              <span>&#10230;</span>
            </div>
          </div>
        </div>
      </div>
    `}};Je.styles=Hs;g([x({type:Number})],Je.prototype,"selected",void 0);g([x()],Je.prototype,"name",void 0);Je=g([re("photo-carousel")],Je);function Fs(){const t="mapbox://styles/mapbox/outdoors-v12";mapboxgl.accessToken="pk.eyJ1IjoiamFuZXNzYXRyYW4iLCJhIjoiY2xvYTVycjF4MGcxNTJrbW40b2N2c2xhdyJ9.QJVQiLIxywTBeSQoUHdwlg";const e=new mapboxgl.Map({container:"map",center:[-98,40],zoom:2,style:t,attributionControl:!1});return e.resize(),e.on("load",()=>{e.resize(),e.setFog({color:"rgb(242, 208, 208)","high-color":"rgb(186, 221, 222)","horizon-blend":.4}),e.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.terrain-rgb"}),e.setTerrain({source:"mapbox-dem",exaggeration:1.5})}),e}function rn(t,e){const r={center:[e.longitude,e.latitude],zoom:12.5,bearing:130,pitch:100};t.flyTo({...r,duration:500,essential:!0})}const Gs=te`
  :host {
    --bg-color: #97ac90;
    --primary-bg-color: #fcfcf4;
    --primary-title-color: #ff0055;
    --primary-link-color: #ff0055;
    --primary-link-hover-color: #005620;
    --primary-text-color: black;
    --header-font-size: 4rem;
    height: 100%;
    display: block;
    margin: 0;
    position: relative;
    width: 100%;
    background-color: var(--bg-color);
  }

  .mapboxgl-canvas {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`,Si=te`
  :host {
    --primary-bg-color: #1a2c14;
    --bg-color: #fcfcf4;

    height: 100%;
    display: block;
    margin: 0;
    position: relative;
    width: 100%;
  }

  .main-container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }

  .main-container > *:nth-child(1) {
    flex: 0 0 50%;
    border-inline-end: 1px solid black;
  }

  .main-container > *:nth-child(2) {
    flex-grow: 1; /* grow width automatically if needed */
    min-width: 0; /* allow shrinking below default width */
  }

  /**
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
   */
  @media (min-width: 768px) and (max-width: 1024px) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }

  /** 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }

  /**
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }

  /**
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  @media (max-width: 480px) {
    .main-container {
      display: flex;
      flex-direction: column;
    }

    .main-container:first-child {
      width: 100%;
    }
  }
`;let ue=class extends De{constructor(){super(...arguments),this.parks=[],this.ready=!1,this.parkCodeToDataMap=new Map,this.parkDescription="",this.parkUrl=""}connectedCallback(){super.connectedCallback(),window.addEventListener("changed-photo-event",this.handleChangePhotoEvent.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("changed-photo-event",this.handleChangePhotoEvent.bind(this))}repeatUntilMapReady(){if(!this.mapObj){console.log("repeating until map ready");const e=document.body.querySelector("#map");if(e)e.style.display="block",e.style.width="100%",e.style.minHeight="500px",this.mapElement=e,this.getMap(),this.requestUpdate();else{const r=document.body.querySelector(".map-wrapper"),n=document.createElement("div");n.id="map",n.style.height="400px",n.style.width="100%",r.appendChild(n)}setTimeout(()=>{this.repeatUntilMapReady()},1e3)}}repeatUntilImagesReady(){(!this.imagesForCarousel||!this.parks)&&(console.log("repeating until images/data ready"),this.getData(),this.requestUpdate()),setTimeout(()=>{this.repeatUntilImagesReady()},1e3)}getMap(){const e=Fs();return e&&(this.mapObj=e),!!this.mapObj}handleChangePhotoEvent(e){console.log(e);const r=e;if(this.parkCodeToDataMap){const n=this.parkCodeToDataMap.get(r.detail.metadata);n&&(this.parkDescription=n.description,this.parkUrl=n.url,rn(this.mapObj,n))}}firstUpdated(){this.repeatUntilMapReady(),this.mapElement&&this.repeatUntilImagesReady()}async getData(){await this.fetchParks(),this.imagesForCarousel=this.getImages()}async fetchWithTimeout(e,r){var n;const i=(n=r==null?void 0:r.timeout)!==null&&n!==void 0?n:8e3,o=new AbortController,s=setTimeout(()=>o.abort(),i),l=await fetch(e,{...r,signal:o.signal});return clearTimeout(s),l}async fetchParks(){const e=this.mapObj;let r;r=(await(await this.fetchWithTimeout("https://developer.nps.gov/api/v1/parks?limit=100000",{method:"GET",headers:{"X-Api-Key":"Y8Idz9Ba8lWUazAqUHNfxwE1RR97i3TSuoYiBsL7"},timeout:4e3})).json()).data,this.parks=r,r.forEach(o=>{this.parkCodeToDataMap.set(o.parkCode,o)}),r.slice(0,1).forEach(o=>{rn(e,o)})}getImages(){return this.parks.map(n=>{const i=n.images[0];if(i)return C` <img
          src="${i.url}"
          id=${n.fullName}
          park-code=${n.parkCode}
        />`}).filter(n=>n)}render(){const e=C`<img
      class="placeholder-img"
      src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />`,r="Beyond the towering trees and vast horizons lies a path to self-discovery. Nature's canvas becomes a mirror reflecting your innermost thoughts and aspirations. Wander the trails, traverse the meadows, and allow the whispers of the wilderness to guide you on a journey of self-reflection. Or, at least that's what nature evokes for me! Begin your exploration of the various parks by clicking the arrow above.";return C`
      <div class="main-container">
        <about-section
          title="Explore the map"
          .contentTemplate=${this.mapElement?this.mapElement:e}
        ></about-section>
        <info-card
          .initialTextContent=${this.parkDescription?this.parkDescription:r}
          .buttonLabel=${"Learn more"}
          .buttonRoute=${this.parkUrl}
          .openRouteInNewTab=${!0}
        >
          <photo-carousel
            slot="photo-carousel-container"
            .name=${"Click the arrow to begin exploring!"}
          >
            <img
              src="https://images.unsplash.com/photo-1592415251033-6d09541f9a23?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            ${this.imagesForCarousel}
          </photo-carousel>
        </info-card>
      </div>
    `}};ue.styles=[Si,Ei,Gs];g([Dt()],ue.prototype,"parks",void 0);g([Dt()],ue.prototype,"parkDescription",void 0);g([Dt()],ue.prototype,"parkUrl",void 0);g([Dt()],ue.prototype,"imagesForCarousel",void 0);ue=g([re("parks-map")],ue);const zs=te`
  .image-nav-container {
    display: flex;
    flex-direction: row;
    flex: 0 1;
    gap: 2rem;
    margin-block: 2rem;
  }

  .primary-nav-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .primary-nav-section > img {
    width: 100%;
    object-fit: cover;
    width: 300px;
    height: 300px;
  }

  .secondary-nav-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .secondary-nav-section > img {
    width: 100%;
    object-fit: cover;
    width: 230px;
    height: 230px;
  }

  a {
    font-family: "Lato", sans-serif;
    color: var(--primary-text-color);
    font-size: 0.8rem;
    text-transform: lowercase;
    font-weight: 400;
    text-decoration: none;
  }

  a:hover {
    color: var(--hover-text-color);
    font-weight: 800;
  }

  .link {
    margin-block-end: 0.5rem;
  }
`;let lr=class extends De{render(){return C`
      <div class="image-nav-container">
        <div class="primary-nav-section">
          <div class="link">
            <a href="#">first visit checklist</a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div class="secondary-nav-section">
          <div class="link">
            <a href="https://www.nps.gov/aboutus/index.htm" target="_blank"
              >Learn more about n.p.s.</a
            >
          </div>
          <img
            src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    `}};lr.styles=zs;lr=g([re("image-navigation")],lr);let ur=class extends De{render(){const e=C`<image-navigation></image-navigation>`;return C`<div class="main-container">
      <about-section
        title="Discover our parks"
        .contentTemplate=${e}
      ></about-section>
      <info-card
        initialTextContent="Welcome to Your Ultimate National Park Adventure Hub!"
        secondaryTextContent="From the rugged Rockies to the serene shores, we've got the lowdown on all your favorite national parks. Dive in, find your next adventure,  and let's make some memories!"
        .buttonLabel=${"Explore the map"}
        .buttonRoute=${"/discover-our-parks-app/parks-map"}
      >
        <photo-carousel slot="photo-carousel-container">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2842&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1605999212421-3f0bf43857ab?auto=format&fit=crop&q=80&w=2680&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=2752&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1604542031551-3fd943f1886f?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1577018925296-e908942c6851?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            src="https://images.unsplash.com/photo-1597777933704-61bde8bd8e02?auto=format&fit=crop&q=80&w=2728&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </photo-carousel>
      </info-card>
    </div>`}};ur.styles=Si;ur=g([re("main-layout")],ur);function $t(t){return t=t||[],Array.isArray(t)?t:[t]}function N(t){return`[Vaadin.Router] ${t}`}function Ks(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const Pt="module",Rt="nomodule",cr=[Pt,Rt];function nn(t){if(!t.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function $i(t){if(!t||!D(t.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,r=["component","redirect","bundle"];if(!ce(t.action)&&!Array.isArray(t.children)&&!ce(t.children)&&!Ct(e)&&!r.some(n=>D(t[n])))throw new Error(N(`Expected route config "${t.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(e)if(D(e))nn(e);else if(cr.some(n=>n in e))cr.forEach(n=>n in e&&nn(e[n]));else throw new Error(N('Expected route bundle to include either "'+Rt+'" or "'+Pt+'" keys, or both'));t.redirect&&["bundle","component"].forEach(n=>{n in t&&console.warn(N(`Route config "${t.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function on(t){$t(t).forEach(e=>$i(e))}function sn(t,e){let r=document.head.querySelector('script[src="'+t+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",t),e===Pt?r.setAttribute("type",Pt):e===Rt&&r.setAttribute(Rt,""),r.async=!0),new Promise((n,i)=>{r.onreadystatechange=r.onload=o=>{r.__dynamicImportLoaded=!0,n(o)},r.onerror=o=>{r.parentNode&&r.parentNode.removeChild(r),i(o)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&n()})}function qs(t){return D(t)?sn(t):Promise.race(cr.filter(e=>e in t).map(e=>sn(t[e],e)))}function ke(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function Ct(t){return typeof t=="object"&&!!t}function ce(t){return typeof t=="function"}function D(t){return typeof t=="string"}function Pi(t){const e=new Error(N(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const Ae=new class{};function Ws(t){const e=t.port,r=t.protocol,o=r==="http:"&&e==="80"||r==="https:"&&e==="443"?t.hostname:t.host;return`${r}//${o}`}function an(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const r=t.composedPath?t.composedPath():t.path||[];for(let l=0;l<r.length;l++){const a=r[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Ws(e))!==window.location.origin)return;const{pathname:i,search:o,hash:s}=e;ke("go",{pathname:i,search:o,hash:s})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const Ys={activate(){window.document.addEventListener("click",an)},inactivate(){window.document.removeEventListener("click",an)}},Xs=/Trident/.test(navigator.userAgent);Xs&&!ce(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var r=document.createEvent("Event");return r.initEvent(t,!!e.bubbles,!!e.cancelable),r.state=e.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function ln(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:r,hash:n}=window.location;ke("go",{pathname:e,search:r,hash:n})}const Js={activate(){window.addEventListener("popstate",ln)},inactivate(){window.removeEventListener("popstate",ln)}};var Ne=Ni,Zs=$r,Qs=na,ea=Ti,ta=Di,Ri="/",Ci="./",ra=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function $r(t,e){for(var r=[],n=0,i=0,o="",s=e&&e.delimiter||Ri,l=e&&e.delimiters||Ci,a=!1,u;(u=ra.exec(t))!==null;){var c=u[0],f=u[1],h=u.index;if(o+=t.slice(i,h),i=h+c.length,f){o+=f[1],a=!0;continue}var p="",T=t[i],w=u[2],E=u[3],pe=u[4],q=u[5];if(!a&&o.length){var H=o.length-1;l.indexOf(o[H])>-1&&(p=o[H],o=o.slice(0,H))}o&&(r.push(o),o="",a=!1);var O=p!==""&&T!==void 0&&T!==p,U=q==="+"||q==="*",F=q==="?"||q==="*",Me=p||s,Pr=E||pe;r.push({name:w||n++,prefix:p,delimiter:Me,optional:F,repeat:U,partial:O,pattern:Pr?ia(Pr):"[^"+W(Me)+"]+?"})}return(o||i<t.length)&&r.push(o+t.substr(i)),r}function na(t,e){return Ti($r(t,e))}function Ti(t){for(var e=new Array(t.length),r=0;r<t.length;r++)typeof t[r]=="object"&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(n,i){for(var o="",s=i&&i.encode||encodeURIComponent,l=0;l<t.length;l++){var a=t[l];if(typeof a=="string"){o+=a;continue}var u=n?n[a.name]:void 0,c;if(Array.isArray(u)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(u.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var f=0;f<u.length;f++){if(c=s(u[f],a),!e[l].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(f===0?a.prefix:a.delimiter)+c}continue}if(typeof u=="string"||typeof u=="number"||typeof u=="boolean"){if(c=s(String(u),a),!e[l].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');o+=a.prefix+c;continue}if(a.optional){a.partial&&(o+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return o}}function W(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ia(t){return t.replace(/([=!:$/()])/g,"\\$1")}function ji(t){return t&&t.sensitive?"":"i"}function oa(t,e){if(!e)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function sa(t,e,r){for(var n=[],i=0;i<t.length;i++)n.push(Ni(t[i],e,r).source);return new RegExp("(?:"+n.join("|")+")",ji(r))}function aa(t,e,r){return Di($r(t,r),e,r)}function Di(t,e,r){r=r||{};for(var n=r.strict,i=r.start!==!1,o=r.end!==!1,s=W(r.delimiter||Ri),l=r.delimiters||Ci,a=[].concat(r.endsWith||[]).map(W).concat("$").join("|"),u=i?"^":"",c=t.length===0,f=0;f<t.length;f++){var h=t[f];if(typeof h=="string")u+=W(h),c=f===t.length-1&&l.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+W(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?u+=W(h.prefix)+"("+p+")?":u+="(?:"+W(h.prefix)+"("+p+"))?":u+=W(h.prefix)+"("+p+")"}}return o?(n||(u+="(?:"+s+")?"),u+=a==="$"?"$":"(?="+a+")"):(n||(u+="(?:"+s+"(?="+a+"))?"),c||(u+="(?="+s+"|"+a+")")),new RegExp(u,ji(r))}function Ni(t,e,r){return t instanceof RegExp?oa(t,e):Array.isArray(t)?sa(t,e,r):aa(t,e,r)}Ne.parse=Zs;Ne.compile=Qs;Ne.tokensToFunction=ea;Ne.tokensToRegExp=ta;const{hasOwnProperty:la}=Object.prototype,hr=new Map;hr.set("|false",{keys:[],pattern:/(?:)/});function un(t){try{return decodeURIComponent(t)}catch{return t}}function ua(t,e,r,n,i){r=!!r;const o=`${t}|${r}`;let s=hr.get(o);if(!s){const u=[];s={keys:u,pattern:Ne(t,u,{end:r,strict:t===""})},hr.set(o,s)}const l=s.pattern.exec(e);if(!l)return null;const a=Object.assign({},i);for(let u=1;u<l.length;u++){const c=s.keys[u-1],f=c.name,h=l[u];(h!==void 0||!la.call(a,f))&&(c.repeat?a[f]=h?h.split(c.delimiter).map(un):[]:a[f]=h&&un(h))}return{path:l[0],keys:(n||[]).concat(s.keys),params:a}}function Mi(t,e,r,n,i){let o,s,l=0,a=t.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(u){if(t===u)return{done:!0};const c=t.__children=t.__children||t.children;if(!o&&(o=ua(a,e,!c,n,i),o))return{done:!1,value:{route:t,keys:o.keys,params:o.params,path:o.path}};if(o&&c)for(;l<c.length;){if(!s){const h=c[l];h.parent=t;let p=o.path.length;p>0&&e.charAt(p)==="/"&&(p+=1),s=Mi(h,e.substr(p),r,o.keys,o.params)}const f=s.next(u);if(!f.done)return{done:!1,value:f.value};s=null,l++}return{done:!0}}}}function ca(t){if(ce(t.route.action))return t.route.action(t)}function ha(t,e){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}function fa(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const r=(t.route||{}).path;return r&&(e+=` Resolution had failed on route: '${r}'`),e}function da(t,e){const{route:r,path:n}=e;if(r&&!r.__synthetic){const i={path:n,route:r};if(!t.chain)t.chain=[];else if(r.parent){let o=t.chain.length;for(;o--&&t.chain[o].route&&t.chain[o].route!==r.parent;)t.chain.pop()}t.chain.push(i)}}class Ze{constructor(e,r={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||ca,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){on(e);const r=[...$t(e)];this.root.__children=r}addRoutes(e){return on(e),this.root.__children.push(...$t(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const r=Object.assign({},this.context,D(e)?{pathname:e}:e),n=Mi(this.root,this.__normalizePathname(r.pathname),this.baseUrl),i=this.resolveRoute;let o=null,s=null,l=r;function a(u,c=o.value.route,f){const h=f===null&&o.value.route;return o=s||n.next(h),s=null,!u&&(o.done||!ha(c,o.value.route))?(s=o,Promise.resolve(Ae)):o.done?Promise.reject(Pi(r)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},r,o.value),da(l,o.value),Promise.resolve(i(l)).then(p=>p!=null&&p!==Ae?(l.result=p.result||p,l):a(u,c,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(u=>{const c=fa(l);if(u?console.warn(c):u=new Error(c),u.context=u.context||l,u instanceof DOMException||(u.code=u.code||500),this.errorHandler)return l.result=this.errorHandler(u),l;throw u})}static __createUrl(e,r){return new URL(e,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const r=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,r).href;if(n.slice(0,r.length)===r)return n.slice(r.length)}}Ze.pathToRegexp=Ne;const{pathToRegexp:cn}=Ze,hn=new Map;function Bi(t,e,r){const n=e.name||e.component;if(n&&(t.has(n)?t.get(n).push(e):t.set(n,[e])),Array.isArray(r))for(let i=0;i<r.length;i++){const o=r[i];o.parent=e,Bi(t,o,o.__children||o.children)}}function fn(t,e){const r=t.get(e);if(r&&r.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return r&&r[0]}function dn(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function pa(t,e={}){if(!(t instanceof Ze))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(n,i)=>{let o=fn(r,n);if(!o&&(r.clear(),Bi(r,t.root,t.root.__children),o=fn(r,n),!o))throw new Error(`Route "${n}" not found`);let s=hn.get(o.fullPath);if(!s){let a=dn(o),u=o.parent;for(;u;){const p=dn(u);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),u=u.parent}const c=cn.parse(a),f=cn.tokensToFunction(c),h=Object.create(null);for(let p=0;p<c.length;p++)D(c[p])||(h[c[p].name]=!0);s={toPath:f,keys:h},hn.set(a,s),o.fullPath=a}let l=s.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},u=Object.keys(i);for(let f=0;f<u.length;f++){const h=u[f];s.keys[h]||(a[h]=i[h])}const c=e.stringifyQueryParams(a);c&&(l+=c.charAt(0)==="?"?c:`?${c}`)}return l}}let pn=[];function va(t){pn.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),pn=t}const _a=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},ma=(t,e)=>{const r=()=>{t.removeEventListener("animationend",r),e()};t.addEventListener("animationend",r)};function vn(t,e){return t.classList.add(e),new Promise(r=>{if(_a(t)){const n=t.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${i}`),ma(t,()=>{t.classList.remove(e),t.removeAttribute("style"),r()})}else t.classList.remove(e),r()})}const ga=256;function Zt(t){return t!=null}function ba(t){const e=Object.assign({},t);return delete e.next,e}function j({pathname:t="",search:e="",hash:r="",chain:n=[],params:i={},redirectFrom:o,resolver:s},l){const a=n.map(u=>u.route);return{baseUrl:s&&s.baseUrl||"",pathname:t,search:e,hash:r,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:o,getUrl:(u={})=>ft(J.pathToRegexp.compile(Li(a))(Object.assign({},i,u)),s)}}function _n(t,e){const r=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:r}}}function ya(t,e){e.location=j(t);const r=t.chain.map(n=>n.route).indexOf(t.route);return t.chain[r].element=e,e}function ht(t,e,r){if(ce(t))return t.apply(r,e)}function mn(t,e,r){return n=>{if(n&&(n.cancel||n.redirect))return n;if(r)return ht(r[t],e,r)}}function wa(t,e){if(!Array.isArray(t)&&!Ct(t))throw new Error(N(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const r=$t(t);for(let n=0;n<r.length;n++)$i(r[n]),e.__children.push(r[n])}function lt(t){if(t&&t.length){const e=t[0].parentNode;for(let r=0;r<t.length;r++)e.removeChild(t[r])}}function ft(t,e){const r=e.__effectiveBaseUrl;return r?e.constructor.__createUrl(t.replace(/^\//,""),r).pathname:t}function Li(t){return t.map(e=>e.path).reduce((e,r)=>r.length?e.replace(/\/$/,"")+"/"+r.replace(/^\//,""):e,"")}class J extends Ze{constructor(e,r){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&Ze.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},r)),this.resolveRoute=s=>this.__resolveRoute(s);const o=J.NavigationTrigger;J.setTriggers.apply(J,Object.keys(o).map(s=>o[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=j({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const r=e.route;let n=Promise.resolve();ce(r.children)&&(n=n.then(()=>r.children(ba(e))).then(o=>{!Zt(o)&&!ce(r.children)&&(o=r.children),wa(o,r)}));const i={redirect:o=>_n(e,o),component:o=>{const s=document.createElement(o);return this.__createdByRouter.set(s,!0),s}};return n.then(()=>{if(this.__isLatestRender(e))return ht(r.action,[e,i],r)}).then(o=>{if(Zt(o)&&(o instanceof HTMLElement||o.redirect||o===Ae))return o;if(D(r.redirect))return i.redirect(r.redirect);if(r.bundle)return qs(r.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(o=>{if(Zt(o))return o;if(D(r.component))return i.component(r.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),r||this.__onNavigationEvent(),this.ready}render(e,r){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},D(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const s=this.__previousContext;if(o===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=j(o),r&&this.__updateBrowserHistory(o,n===1),ke("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,s),this.__previousContext=o,this.location;this.__addAppearingContent(o,s);const l=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,s),l.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(n===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(i),lt(this.__outlet&&this.__outlet.children),this.location=j(Object.assign(i,{resolver:this})),ke("error",Object.assign({router:this,error:o},i)),o}),this.ready}__fullyResolveChain(e,r=e){return this.__findComponentContextAfterAllRedirects(r).then(n=>{const o=n!==r?n:e,l=ft(Li(n.chain),n.resolver)===n.pathname,a=(u,c=u.route,f)=>u.next(void 0,c,f).then(h=>h===null||h===Ae?l?u:c.parent!==null?a(u,c.parent,h):h:h);return a(n).then(u=>{if(u===null||u===Ae)throw Pi(o);return u&&u!==Ae&&u!==n?this.__fullyResolveChain(o,u):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const r=e.result;return r instanceof HTMLElement?(ya(e,r),Promise.resolve(e)):r.redirect?this.__redirect(r.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(N(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Ks(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(r=>r===this.__previousContext||r===e?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(e){const r=this.__previousContext||{},n=r.chain||[],i=e.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),l=a=>_n(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,i.length)&&!(n[a].route!==i[a].route||n[a].path!==i[a].path&&n[a].element!==i[a].element||!this.__isReusableElement(n[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,r.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:s},n[a]);for(let a=0;a<i.length;a++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:s,redirect:l},i[a]),n[a].element.location=j(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:s},n[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=j(e,n[a].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:s,redirect:l},i[a]),i[a].element&&(i[a].element.location=j(e,i[a].route)));return o.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,r,n,i){const o=j(r);return e.then(s=>{if(this.__isLatestRender(r))return mn("onBeforeLeave",[o,n,this],i.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,r,n,i){const o=j(r,i.route);return e.then(s=>{if(this.__isLatestRender(r))return mn("onBeforeEnter",[o,n,this],i.element)(s)})}__isReusableElement(e,r){return e&&r?this.__createdByRouter.get(e)&&this.__createdByRouter.get(r)?e.localName===r.localName:e===r:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,r,n){if(r>ga)throw new Error(N(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(r||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:r="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==r||window.location.hash!==n){const o=i?"replaceState":"pushState";window.history[o](null,document.title,e+r+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,r){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const o=r&&r.chain[i].element;if(o)if(o.parentNode===n)e.chain[i].element=o,n=o;else break}return n}__addAppearingContent(e,r){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,r);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(o=>this.__addedByRouter.get(o)&&o!==e.result);let i=n;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const s=e.chain[o].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===n&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&lt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(lt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,r){if(r)for(let n=r.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=r.chain[n].element;if(i)try{const o=j(e);ht(i.onAfterLeave,[o,{},r.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&lt(i.children)}}}__runOnAfterEnterCallbacks(e){for(let r=e.__divergedChainIndex;r<e.chain.length&&this.__isLatestRender(e);r++){const n=e.chain[r].element||{},i=j(e,e.chain[r].route);ht(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const r=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],o=e.chain;let s;for(let l=o.length;l>0;l--)if(o[l-1].route.animate){s=o[l-1].route.animate;break}if(r&&n&&s){const l=Ct(s)&&s.leave||"leaving",a=Ct(s)&&s.enter||"entering";i.push(vn(r,l)),i.push(vn(n,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:r,search:n,hash:i}=e?e.detail:window.location;D(this.__normalizePathname(r))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:r,search:n,hash:i},!0))}static setTriggers(...e){va(e)}urlForName(e,r){return this.__urlForName||(this.__urlForName=pa(this)),ft(this.__urlForName(e,r),this)}urlForPath(e,r){return ft(J.pathToRegexp.compile(e)(r),this)}static go(e){const{pathname:r,search:n,hash:i}=D(e)?this.__createUrl(e,"http://a"):e;return ke("go",{pathname:r,search:n,hash:i})}}const Aa=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,dt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Oa(){function t(){return!0}return Ui(t)}function xa(){try{return Ea()?!0:Sa()?dt?!$a():!Oa():!1}catch{return!1}}function Ea(){return localStorage.getItem("vaadin.developmentmode.force")}function Sa(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function $a(){return!!(dt&&Object.keys(dt).map(e=>dt[e]).filter(e=>e.productionMode).length>0)}function Ui(t,e){if(typeof t!="function")return;const r=Aa.exec(t.toString());if(r)try{t=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return t(e)}window.Vaadin=window.Vaadin||{};const gn=function(t,e){if(window.Vaadin.developmentMode)return Ui(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=xa());function Pa(){}const Ra=function(){if(typeof gn=="function")return gn(Pa)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Ra();J.NavigationTrigger={POPSTATE:Js,CLICK:Ys};let bn,yn;const Ca=t=>{bn=t,yn=new J(bn),yn.setRoutes([{path:"/discover-our-parks-app/",component:"main-layout"},{path:"/discover-our-parks-app/parks-map",component:"parks-map",animate:!0},{path:"(.*)",redirect:"/discover-our-parks-app/"}])};let Tt=class extends se{constructor(){super(...arguments),this.header="Discover Our Parks!"}firstUpdated(){var e;const r=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("#outlet");r&&Ca(r)}render(){return C`
      <main>
        <div id="outlet"></div>
      </main>
    `}};Tt.styles=to;g([x({type:String})],Tt.prototype,"header",void 0);Tt=g([re("discover-our-parks-app")],Tt);
//# sourceMappingURL=index-Tu4upsdV.js.map
