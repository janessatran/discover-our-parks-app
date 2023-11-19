function e(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s}"function"==typeof SuppressedError&&SuppressedError;const t=window,n=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;let o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=i.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}};const s=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new o(n,e,r)},a=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,r))(t)})(e):e;var c;const l=window,u=l.trustedTypes,d=u?u.emptyScript:"",h=l.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},f=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f},_="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const r=this._$Ep(n,t);void 0!==r&&(this._$Ev.set(r,n),e.push(r))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{n?e.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):r.forEach((n=>{const r=document.createElement("style"),i=t.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=v){var r;const i=this.constructor._$Ep(e,n);if(void 0!==i&&!0===n.reflect){const o=(void 0!==(null===(r=n.converter)||void 0===r?void 0:r.toAttribute)?n.converter:p).toAttribute(t,n.type);this._$El=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,i=r._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:p;this._$El=i,this[i]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||f)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};var b;m[_]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(c=l.reactiveElementVersions)&&void 0!==c?c:l.reactiveElementVersions=[]).push("1.6.3");const g=window,y=g.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,x="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,O="?"+E,A=`<${O}>`,N=document,S=()=>N.createComment(""),k=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,C="[ \t\n\f\r]",$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,V=/>/g,T=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,P=/"/g,M=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),L=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),I=new WeakMap,H=N.createTreeWalker(N,129,null,!1);function G(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(t):t}const z=(e,t)=>{const n=e.length-1,r=[];let i,o=2===t?"<svg>":"",s=$;for(let t=0;t<n;t++){const n=e[t];let a,c,l=-1,u=0;for(;u<n.length&&(s.lastIndex=u,c=s.exec(n),null!==c);)u=s.lastIndex,s===$?"!--"===c[1]?s=j:void 0!==c[1]?s=V:void 0!==c[2]?(M.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=T):void 0!==c[3]&&(s=T):s===T?">"===c[0]?(s=null!=i?i:$,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?T:'"'===c[3]?P:R):s===P||s===R?s=T:s===j||s===V?s=$:(s=T,i=void 0);const d=s===T&&e[t+1].startsWith("/>")?" ":"";o+=s===$?n+A:l>=0?(r.push(a),n.slice(0,l)+x+n.slice(l)+E+d):n+E+(-2===l?(r.push(void 0),t):d)}return[G(e,o+(e[n]||"<?>")+(2===t?"</svg>":"")),r]};class K{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,o=0;const s=e.length-1,a=this.parts,[c,l]=z(e,t);if(this.el=K.createElement(c,n),H.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=H.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith(x)||t.startsWith(E)){const n=l[o++];if(e.push(t),void 0!==n){const e=r.getAttribute(n.toLowerCase()+x).split(E),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?X:"?"===t[1]?Q:"@"===t[1]?Z:Y})}else a.push({type:6,index:i})}for(const t of e)r.removeAttribute(t)}if(M.test(r.tagName)){const e=r.textContent.split(E),t=e.length-1;if(t>0){r.textContent=y?y.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],S()),H.nextNode(),a.push({type:2,index:++i});r.append(e[t],S())}}}else if(8===r.nodeType)if(r.data===O)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(E,e+1));)a.push({type:7,index:i}),e+=E.length-1}i++}}static createElement(e,t){const n=N.createElement("template");return n.innerHTML=e,n}}function q(e,t,n=e,r){var i,o,s,a;if(t===L)return t;let c=void 0!==r?null===(i=n._$Co)||void 0===i?void 0:i[r]:n._$Cl;const l=k(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,n,r)),void 0!==r?(null!==(s=(a=n)._$Co)&&void 0!==s?s:a._$Co=[])[r]=c:n._$Cl=c),void 0!==c&&(t=q(e,c._$AS(e,t.values),c,r)),t}class F{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:N).importNode(n,!0);H.currentNode=i;let o=H.nextNode(),s=0,a=0,c=r[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new W(o,o.nextSibling,this,e):1===c.type?t=new c.ctor(o,c.name,c.strings,this,e):6===c.type&&(t=new ee(o,this,e)),this._$AV.push(t),c=r[++a]}s!==(null==c?void 0:c.index)&&(o=H.nextNode(),s++)}return H.currentNode=N,i}v(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class W{constructor(e,t,n,r){var i;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),k(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==L&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>D(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&k(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=K.createElement(G(r.h,r.h[0]),this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(n);else{const e=new F(i,this),t=e.u(this.options);e.v(n),this.$(t),this._$AH=e}}_$AC(e){let t=I.get(e.strings);return void 0===t&&I.set(e.strings,t=new K(e)),t}T(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new W(this.k(S()),this.k(S()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,n,r,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const i=this.strings;let o=!1;if(void 0===i)e=q(this,e,t,0),o=!k(e)||e!==this._$AH&&e!==L,o&&(this._$AH=e);else{const r=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=q(this,r[n+s],t,s),a===L&&(a=this._$AH[s]),o||(o=!k(a)||a!==this._$AH[s]),a===U?e=U:e!==U&&(e+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}o&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}const J=y?y.emptyScript:"";class Q extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends Y{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=q(this,e,t,0))&&void 0!==n?n:U)===L)return;const r=this._$AH,i=e===U&&r!==U||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==U&&(r===U||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class ee{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const te=g.litHtmlPolyfillSupport;null==te||te(K,W),(null!==(b=g.litHtmlVersions)&&void 0!==b?b:g.litHtmlVersions=[]).push("2.8.0");var ne,re;class ie extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{var r,i;const o=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t;let s=o._$litPart$;if(void 0===s){const e=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new W(t.insertBefore(S(),e),e,void 0,null!=n?n:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return L}}ie.finalized=!0,ie._$litElement$=!0,null===(ne=globalThis.litElementHydrateSupport)||void 0===ne||ne.call(globalThis,{LitElement:ie});const oe=globalThis.litElementPolyfillSupport;null==oe||oe({LitElement:ie}),(null!==(re=globalThis.litElementVersions)&&void 0!==re?re:globalThis.litElementVersions=[]).push("3.3.3");const se=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){customElements.define(e,t)}}})(e,t),ae=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},ce=(e,t,n)=>{t.constructor.createProperty(n,e)};function le(e){return(t,n)=>void 0!==n?ce(e,t,n):ae(e,t)}function ue(e){return le({...e,state:!0})}var de;null===(de=window.HTMLSlotElement)||void 0===de||de.prototype.assignedElements;const he=s`
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
`;globalThis.process={...globalThis.process,env:{NODE_ENV:"development"}};const pe=Symbol("LitMobxRenderReaction"),fe=Symbol("LitMobxRequestUpdate");var ve="production"!==process.env.NODE_ENV?{0:"Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",1:function(e,t){return"Cannot apply '"+e+"' to '"+t.toString()+"': Field not found."},5:"'keys()' can only be used on observable objects, arrays, sets and maps",6:"'values()' can only be used on observable objects, arrays, sets and maps",7:"'entries()' can only be used on observable objects, arrays and maps",8:"'set()' can only be used on observable objects, arrays and maps",9:"'remove()' can only be used on observable objects, arrays and maps",10:"'has()' can only be used on observable objects, arrays and maps",11:"'get()' can only be used on observable objects, arrays and maps",12:"Invalid annotation",13:"Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",14:"Intercept handlers should return nothing or a change object",15:"Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",16:"Modification exception: the internal structure of an observable array was changed.",17:function(e,t){return"[mobx.array] Index out of bounds, "+e+" is larger than "+t},18:"mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",19:function(e){return"Cannot initialize from classes that inherit from Map: "+e.constructor.name},20:function(e){return"Cannot initialize map from "+e},21:function(e){return"Cannot convert to map from '"+e+"'"},22:"mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",23:"It is not possible to get index atoms from arrays",24:function(e){return"Cannot obtain administration from "+e},25:function(e,t){return"the entry '"+e+"' does not exist in the observable map '"+t+"'"},26:"please specify a property",27:function(e,t){return"no observable property '"+e.toString()+"' found on the observable object '"+t+"'"},28:function(e){return"Cannot obtain atom from "+e},29:"Expecting some object",30:"invalid action stack. did you forget to finish an action?",31:"missing option for computed: get",32:function(e,t){return"Cycle detected in computation "+e+": "+t},33:function(e){return"The setter of computed value '"+e+"' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"},34:function(e){return"[ComputedValue '"+e+"'] It is not possible to assign a new value to a computed value."},35:"There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",36:"isolateGlobalState should be called before MobX is running any reactions",37:function(e){return"[mobx] `observableArray."+e+"()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()."+e+"()` instead"},38:"'ownKeys()' can only be used on observable objects",39:"'defineProperty()' can only be used on observable objects"}:{};function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if("production"!==process.env.NODE_ENV){var i="string"==typeof e?e:ve[e];throw"function"==typeof i&&(i=i.apply(null,n)),new Error("[MobX] "+i)}throw new Error("number"==typeof e?"[MobX] minified error nr: "+e+(n.length?" "+n.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+e)}var me={};function be(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:me}var ge=Object.assign,ye=Object.getOwnPropertyDescriptor,we=Object.defineProperty,xe=Object.prototype,Ee=[];Object.freeze(Ee);var Oe={};Object.freeze(Oe);var Ae="undefined"!=typeof Proxy,Ne=Object.toString();function Se(){Ae||_e("production"!==process.env.NODE_ENV?"`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`":"Proxy not available")}function ke(e){"production"!==process.env.NODE_ENV&&An.verifyProxies&&_e("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to "+e)}function De(){return++An.mobxGuid}function Ce(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}var $e=function(){};function je(e){return"function"==typeof e}function Ve(e){switch(typeof e){case"string":case"symbol":case"number":return!0}return!1}function Te(e){return null!==e&&"object"==typeof e}function Re(e){if(!Te(e))return!1;var t=Object.getPrototypeOf(e);if(null==t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n.toString()===Ne}function Pe(e){var t=null==e?void 0:e.constructor;return!!t&&("GeneratorFunction"===t.name||"GeneratorFunction"===t.displayName)}function Me(e,t,n){we(e,t,{enumerable:!1,writable:!0,configurable:!0,value:n})}function Be(e,t,n){we(e,t,{enumerable:!1,writable:!1,configurable:!0,value:n})}function Le(e,t){var n="isMobX"+e;return t.prototype[n]=!0,function(e){return Te(e)&&!0===e[n]}}function Ue(e){return e instanceof Map}function Ie(e){return e instanceof Set}var He=void 0!==Object.getOwnPropertySymbols;var Ge="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:He?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function ze(e){return"string"==typeof e?e:"symbol"==typeof e?e.toString():new String(e).toString()}function Ke(e){return null===e?null:"object"==typeof e?""+e:e}function qe(e,t){return xe.hasOwnProperty.call(e,t)}var Fe=Object.getOwnPropertyDescriptors||function(e){var t={};return Ge(e).forEach((function(n){t[n]=ye(e,n)})),t};function We(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?o:String(o)),r)}var i,o}function Ye(e,t,n){return t&&We(e.prototype,t),n&&We(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xe(){return Xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xe.apply(this,arguments)}function Je(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qe(e,t)}function Qe(e,t){return Qe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Qe(e,t)}function Ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function et(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tt(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return et(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var nt=Symbol("mobx-stored-annotations");function rt(e){return Object.assign((function(t,n){it(t,n,e)}),e)}function it(e,t,n){(qe(e,nt)||Me(e,nt,Xe({},e[nt])),"production"!==process.env.NODE_ENV&&pt(n)&&!qe(e[nt],t))&&_e("'"+(e.constructor.name+".prototype."+t.toString())+"' is decorated with 'override', but no such decorated member was found on prototype.");!function(e,t,n){if("production"!==process.env.NODE_ENV&&!pt(t)&&qe(e[nt],n)){var r=e.constructor.name+".prototype."+n.toString(),i=e[nt][n].annotationType_;_e("Cannot apply '@"+t.annotationType_+"' to '"+r+"':\nThe field is already decorated with '@"+i+"'.\nRe-decorating fields is not allowed.\nUse '@override' decorator for methods overridden by subclass.")}}(e,n,t),pt(n)||(e[nt][t]=n)}var ot=Symbol("mobx administration"),st=function(){function e(e){void 0===e&&(e="production"!==process.env.NODE_ENV?"Atom@"+De():"Atom"),this.name_=void 0,this.isPendingUnobservation_=!1,this.isBeingObserved_=!1,this.observers_=new Set,this.batchId_=void 0,this.diffValue_=0,this.lastAccessedBy_=0,this.lowestObserverState_=an.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=e,this.batchId_=An.inBatch?An.batchId:NaN}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach((function(e){return e()}))},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach((function(e){return e()}))},t.reportObserved=function(){return $n(this)},t.reportChanged=function(){An.inBatch&&this.batchId_===An.batchId||(An.stateVersion=An.stateVersion<Number.MAX_SAFE_INTEGER?An.stateVersion+1:Number.MIN_SAFE_INTEGER,this.batchId_=NaN),Dn(),jn(this),Cn()},t.toString=function(){return this.name_},e}(),at=Le("Atom",st);function ct(e,t,n){void 0===t&&(t=$e),void 0===n&&(n=$e);var r,i=new st(e);return t!==$e&&sr(rr,i,t,r),n!==$e&&or(i,n),i}var lt={identity:function(e,t){return e===t},structural:function(e,t){return yi(e,t)},default:function(e,t){return Object.is?Object.is(e,t):e===t?0!==e||1/e==1/t:e!=e&&t!=t},shallow:function(e,t){return yi(e,t,1)}};function ut(e,t,n){return vr(e)?e:Array.isArray(e)?Kt.array(e,{name:n}):Re(e)?Kt.object(e,void 0,{name:n}):Ue(e)?Kt.map(e,{name:n}):Ie(e)?Kt.set(e,{name:n}):"function"!=typeof e||tr(e)||fr(e)?e:Pe(e)?hr(e):er(n,e)}function dt(e){return e}var ht="override";function pt(e){return e.annotationType_===ht}function ft(e,t){return{annotationType_:e,options_:t,make_:vt,extend_:_t}}function vt(e,t,n,r){var i;if(null!=(i=this.options_)&&i.bound)return null===this.extend_(e,t,n,!1)?0:1;if(r===e.target_)return null===this.extend_(e,t,n,!1)?0:2;if(tr(n.value))return 1;var o=mt(e,this,t,n,!1);return we(r,t,o),2}function _t(e,t,n,r){var i=mt(e,this,t,n);return e.defineProperty_(t,i,r)}function mt(e,t,n,r,i){var o,s,a,c,l,u,d;void 0===i&&(i=An.safeDescriptors),function(e,t,n,r){var i=t.annotationType_,o=r.value;"production"===process.env.NODE_ENV||je(o)||_e("Cannot apply '"+i+"' to '"+e.name_+"."+n.toString()+"':\n'"+i+"' can only be used on properties with a function value.")}(e,t,n,r);var h,p=r.value;null!=(o=t.options_)&&o.bound&&(p=p.bind(null!=(h=e.proxy_)?h:e.target_));return{value:tn(null!=(s=null==(a=t.options_)?void 0:a.name)?s:n.toString(),p,null!=(c=null==(l=t.options_)?void 0:l.autoAction)&&c,null!=(u=t.options_)&&u.bound?null!=(d=e.proxy_)?d:e.target_:void 0),configurable:!i||e.isPlainObject_,enumerable:!1,writable:!i}}function bt(e,t){return{annotationType_:e,options_:t,make_:gt,extend_:yt}}function gt(e,t,n,r){var i;if(r===e.target_)return null===this.extend_(e,t,n,!1)?0:2;if(null!=(i=this.options_)&&i.bound&&(!qe(e.target_,t)||!fr(e.target_[t]))&&null===this.extend_(e,t,n,!1))return 0;if(fr(n.value))return 1;var o=wt(e,this,t,n,!1,!1);return we(r,t,o),2}function yt(e,t,n,r){var i,o=wt(e,this,t,n,null==(i=this.options_)?void 0:i.bound);return e.defineProperty_(t,o,r)}function wt(e,t,n,r,i,o){void 0===o&&(o=An.safeDescriptors),function(e,t,n,r){var i=t.annotationType_,o=r.value;"production"===process.env.NODE_ENV||je(o)||_e("Cannot apply '"+i+"' to '"+e.name_+"."+n.toString()+"':\n'"+i+"' can only be used on properties with a generator function value.")}(e,t,n,r);var s,a=r.value;(fr(a)||(a=hr(a)),i)&&((a=a.bind(null!=(s=e.proxy_)?s:e.target_)).isMobXFlow=!0);return{value:a,configurable:!o||e.isPlainObject_,enumerable:!1,writable:!o}}function xt(e,t){return{annotationType_:e,options_:t,make_:Et,extend_:Ot}}function Et(e,t,n){return null===this.extend_(e,t,n,!1)?0:1}function Ot(e,t,n,r){return function(e,t,n,r){var i=t.annotationType_,o=r.get;"production"===process.env.NODE_ENV||o||_e("Cannot apply '"+i+"' to '"+e.name_+"."+n.toString()+"':\n'"+i+"' can only be used on getter(+setter) properties.")}(e,this,t,n),e.defineComputedProperty_(t,Xe({},this.options_,{get:n.get,set:n.set}),r)}function At(e,t){return{annotationType_:e,options_:t,make_:Nt,extend_:St}}function Nt(e,t,n){return null===this.extend_(e,t,n,!1)?0:1}function St(e,t,n,r){var i,o;return function(e,t,n,r){var i=t.annotationType_;"production"===process.env.NODE_ENV||"value"in r||_e("Cannot apply '"+i+"' to '"+e.name_+"."+n.toString()+"':\n'"+i+"' cannot be used on getter/setter properties")}(e,this,t,n),e.defineObservableProperty_(t,n.value,null!=(i=null==(o=this.options_)?void 0:o.enhancer)?i:ut,r)}var kt="true",Dt=Ct();function Ct(e){return{annotationType_:kt,options_:e,make_:$t,extend_:jt}}function $t(e,t,n,r){var i,o,s,a;if(n.get)return Yt.make_(e,t,n,r);if(n.set){var c=tn(t.toString(),n.set);return r===e.target_?null===e.defineProperty_(t,{configurable:!An.safeDescriptors||e.isPlainObject_,set:c})?0:2:(we(r,t,{configurable:!0,set:c}),2)}if(r!==e.target_&&"function"==typeof n.value)return Pe(n.value)?(null!=(a=this.options_)&&a.autoBind?hr.bound:hr).make_(e,t,n,r):(null!=(s=this.options_)&&s.autoBind?er.bound:er).make_(e,t,n,r);var l,u=!1===(null==(i=this.options_)?void 0:i.deep)?Kt.ref:Kt;"function"==typeof n.value&&null!=(o=this.options_)&&o.autoBind&&(n.value=n.value.bind(null!=(l=e.proxy_)?l:e.target_));return u.make_(e,t,n,r)}function jt(e,t,n,r){var i,o,s;if(n.get)return Yt.extend_(e,t,n,r);if(n.set)return e.defineProperty_(t,{configurable:!An.safeDescriptors||e.isPlainObject_,set:tn(t.toString(),n.set)},r);"function"==typeof n.value&&null!=(i=this.options_)&&i.autoBind&&(n.value=n.value.bind(null!=(s=e.proxy_)?s:e.target_));return(!1===(null==(o=this.options_)?void 0:o.deep)?Kt.ref:Kt).extend_(e,t,n,r)}var Vt={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};function Tt(e){return e||Vt}Object.freeze(Vt);var Rt=At("observable"),Pt=At("observable.ref",{enhancer:dt}),Mt=At("observable.shallow",{enhancer:function(e,t,n){return null==e||ti(e)||Br(e)||Kr(e)||Wr(e)?e:Array.isArray(e)?Kt.array(e,{name:n,deep:!1}):Re(e)?Kt.object(e,void 0,{name:n,deep:!1}):Ue(e)?Kt.map(e,{name:n,deep:!1}):Ie(e)?Kt.set(e,{name:n,deep:!1}):void("production"!==process.env.NODE_ENV&&_e("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets"))}}),Bt=At("observable.struct",{enhancer:function(e,t){return"production"!==process.env.NODE_ENV&&vr(e)&&_e("observable.struct should not be used with observable values"),yi(e,t)?t:e}}),Lt=rt(Rt);function Ut(e){return!0===e.deep?ut:!1===e.deep?dt:(t=e.defaultDecorator)&&null!=(n=null==(r=t.options_)?void 0:r.enhancer)?n:ut;var t,n,r}function It(e,t,n){if(!Ve(t))return vr(e)?e:Re(e)?Kt.object(e,t,n):Array.isArray(e)?Kt.array(e,t):Ue(e)?Kt.map(e,t):Ie(e)?Kt.set(e,t):"object"==typeof e&&null!==e?e:Kt.box(e,t);it(e,t,Rt)}ge(It,Lt);var Ht,Gt,zt={box:function(e,t){var n=Tt(t);return new sn(e,Ut(n),n.name,!0,n.equals)},array:function(e,t){var n=Tt(t);return(!1===An.useProxies||!1===n.proxy?fi:Dr)(e,Ut(n),n.name)},map:function(e,t){var n=Tt(t);return new zr(e,Ut(n),n.name)},set:function(e,t){var n=Tt(t);return new Fr(e,Ut(n),n.name)},object:function(e,t,n){return bi((function(){return function(e,t,n,r){"production"!==process.env.NODE_ENV&&(arguments.length>4&&_e("'extendObservable' expected 2-4 arguments"),"object"!=typeof e&&_e("'extendObservable' expects an object as first argument"),Kr(e)&&_e("'extendObservable' should not be used on maps, use map.merge instead"),Re(t)||_e("'extendObservable' only accepts plain objects as second argument"),(vr(t)||vr(n))&&_e("Extending an object with another observable (object) is not supported"));var i=Fe(t);return bi((function(){var t=Qr(e,r)[ot];Ge(i).forEach((function(e){t.extend_(e,i[e],!n||(!(e in n)||n[e]))}))})),e}(!1===An.useProxies||!1===(null==n?void 0:n.proxy)?Qr({},n):function(e,t){var n,r;return Se(),e=Qr(e,t),null!=(r=(n=e[ot]).proxy_)?r:n.proxy_=new Proxy(e,br)}({},n),e,t)}))},ref:rt(Pt),shallow:rt(Mt),deep:Lt,struct:rt(Bt)},Kt=ge(It,zt),qt="computed",Ft=xt(qt),Wt=xt("computed.struct",{equals:lt.structural}),Yt=function(e,t){if(Ve(t))return it(e,t,Ft);if(Re(e))return rt(xt(qt,e));"production"!==process.env.NODE_ENV&&(je(e)||_e("First argument to `computed` should be an expression."),je(t)&&_e("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));var n=Re(t)?t:{};return n.get=e,n.name||(n.name=e.name||""),new ln(n)};Object.assign(Yt,Ft),Yt.struct=rt(Wt);var Xt,Jt=0,Qt=1,Zt=null!=(Ht=null==(Gt=ye((function(){}),"name"))?void 0:Gt.configurable)&&Ht,en={value:"action",configurable:!0,writable:!1,enumerable:!1};function tn(e,t,n,r){function i(){return function(e,t,n,r,i){var o=function(e,t,n,r){var i="production"!==process.env.NODE_ENV&&In()&&!!e,o=0;if("production"!==process.env.NODE_ENV&&i){o=Date.now();var s=r?Array.from(r):Ee;Gn({type:qn,name:e,object:n,arguments:s})}var a=An.trackingDerivation,c=!t||!a;Dn();var l=An.allowStateChanges;c&&(bn(),l=nn(!0));var u=yn(!0),d={runAsAction_:c,prevDerivation_:a,prevAllowStateChanges_:l,prevAllowStateReads_:u,notifySpy_:i,startTime_:o,actionId_:Qt++,parentActionId_:Jt};return Jt=d.actionId_,d}(e,t,r,i);try{return n.apply(r,i)}catch(e){throw o.error_=e,e}finally{!function(e){Jt!==e.actionId_&&_e(30);Jt=e.parentActionId_,void 0!==e.error_&&(An.suppressReactionErrors=!0);rn(e.prevAllowStateChanges_),wn(e.prevAllowStateReads_),Cn(),e.runAsAction_&&gn(e.prevDerivation_);"production"!==process.env.NODE_ENV&&e.notifySpy_&&Kn({time:Date.now()-e.startTime_});An.suppressReactionErrors=!1}(o)}}(e,n,t,r||this,arguments)}return void 0===n&&(n=!1),"production"!==process.env.NODE_ENV&&(je(t)||_e("`action` can only be invoked on functions"),"string"==typeof e&&e||_e("actions should have valid names, got: '"+e+"'")),i.isMobxAction=!0,Zt&&(en.value=e,we(i,"name",en)),i}function nn(e){var t=An.allowStateChanges;return An.allowStateChanges=e,t}function rn(e){An.allowStateChanges=e}Xt=Symbol.toPrimitive;var on,sn=function(e){function t(t,n,r,i,o){var s;return void 0===r&&(r="production"!==process.env.NODE_ENV?"ObservableValue@"+De():"ObservableValue"),void 0===i&&(i=!0),void 0===o&&(o=lt.default),(s=e.call(this,r)||this).enhancer=void 0,s.name_=void 0,s.equals=void 0,s.hasUnreportedChange_=!1,s.interceptors_=void 0,s.changeListeners_=void 0,s.value_=void 0,s.dehancer=void 0,s.enhancer=n,s.name_=r,s.equals=o,s.value_=n(t,void 0,r),"production"!==process.env.NODE_ENV&&i&&In()&&Hn({type:"create",object:Ze(s),observableKind:"value",debugObjectName:s.name_,newValue:""+s.value_}),s}Je(t,e);var n=t.prototype;return n.dehanceValue=function(e){return void 0!==this.dehancer?this.dehancer(e):e},n.set=function(e){var t=this.value_;if((e=this.prepareNewValue_(e))!==An.UNCHANGED){var n=In();"production"!==process.env.NODE_ENV&&n&&Gn({type:Nr,object:this,observableKind:"value",debugObjectName:this.name_,newValue:e,oldValue:t}),this.setNewValue_(e),"production"!==process.env.NODE_ENV&&n&&Kn()}},n.prepareNewValue_=function(e){if(fn(this),gr(this)){var t=wr(this,{object:this,type:Nr,newValue:e});if(!t)return An.UNCHANGED;e=t.newValue}return e=this.enhancer(e,this.value_,this.name_),this.equals(this.value_,e)?An.UNCHANGED:e},n.setNewValue_=function(e){var t=this.value_;this.value_=e,this.reportChanged(),xr(this)&&Or(this,{type:Nr,object:this,newValue:e,oldValue:t})},n.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},n.intercept_=function(e){return yr(this,e)},n.observe_=function(e,t){return t&&e({observableKind:"value",debugObjectName:this.name_,object:this,type:Nr,newValue:this.value_,oldValue:void 0}),Er(this,e)},n.raw=function(){return this.value_},n.toJSON=function(){return this.get()},n.toString=function(){return this.name_+"["+this.value_+"]"},n.valueOf=function(){return Ke(this.get())},n[Xt]=function(){return this.valueOf()},t}(st);on=Symbol.toPrimitive;var an,cn,ln=function(){function e(e){this.dependenciesState_=an.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.isBeingObserved_=!1,this.isPendingUnobservation_=!1,this.observers_=new Set,this.diffValue_=0,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=an.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new dn(null),this.name_=void 0,this.triggeredBy_=void 0,this.isComputing_=!1,this.isRunningSetter_=!1,this.derivation=void 0,this.setter_=void 0,this.isTracing_=cn.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,e.get||_e(31),this.derivation=e.get,this.name_=e.name||("production"!==process.env.NODE_ENV?"ComputedValue@"+De():"ComputedValue"),e.set&&(this.setter_=tn("production"!==process.env.NODE_ENV?this.name_+"-setter":"ComputedValue-setter",e.set)),this.equals_=e.equals||(e.compareStructural||e.struct?lt.structural:lt.default),this.scope_=e.context,this.requiresReaction_=e.requiresReaction,this.keepAlive_=!!e.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){!function(e){if(e.lowestObserverState_!==an.UP_TO_DATE_)return;e.lowestObserverState_=an.POSSIBLY_STALE_,e.observers_.forEach((function(e){e.dependenciesState_===an.UP_TO_DATE_&&(e.dependenciesState_=an.POSSIBLY_STALE_,e.onBecomeStale_())}))}(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach((function(e){return e()}))},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach((function(e){return e()}))},t.get=function(){if(this.isComputing_&&_e(32,this.name_,this.derivation),0!==An.inBatch||0!==this.observers_.size||this.keepAlive_){if($n(this),pn(this)){var e=An.trackingContext;this.keepAlive_&&!e&&(An.trackingContext=this),this.trackAndCompute()&&function(e){if(e.lowestObserverState_===an.STALE_)return;e.lowestObserverState_=an.STALE_,e.observers_.forEach((function(t){t.dependenciesState_===an.POSSIBLY_STALE_?(t.dependenciesState_=an.STALE_,"production"!==process.env.NODE_ENV&&t.isTracing_!==cn.NONE&&Vn(t,e)):t.dependenciesState_===an.UP_TO_DATE_&&(e.lowestObserverState_=an.UP_TO_DATE_)}))}(this),An.trackingContext=e}}else pn(this)&&(this.warnAboutUntrackedRead_(),Dn(),this.value_=this.computeValue_(!1),Cn());var t=this.value_;if(hn(t))throw t.cause;return t},t.set=function(e){if(this.setter_){this.isRunningSetter_&&_e(33,this.name_),this.isRunningSetter_=!0;try{this.setter_.call(this.scope_,e)}finally{this.isRunningSetter_=!1}}else _e(34,this.name_)},t.trackAndCompute=function(){var e=this.value_,t=this.dependenciesState_===an.NOT_TRACKING_,n=this.computeValue_(!0),r=t||hn(e)||hn(n)||!this.equals_(e,n);return r&&(this.value_=n,"production"!==process.env.NODE_ENV&&In()&&Hn({observableKind:"computed",debugObjectName:this.name_,object:this.scope_,type:"update",oldValue:e,newValue:n})),r},t.computeValue_=function(e){this.isComputing_=!0;var t,n=nn(!1);if(e)t=vn(this,this.derivation,this.scope_);else if(!0===An.disableErrorBoundaries)t=this.derivation.call(this.scope_);else try{t=this.derivation.call(this.scope_)}catch(e){t=new dn(e)}return rn(n),this.isComputing_=!1,t},t.suspend_=function(){this.keepAlive_||(_n(this),this.value_=void 0,"production"!==process.env.NODE_ENV&&this.isTracing_!==cn.NONE&&console.log("[mobx.trace] Computed value '"+this.name_+"' was suspended and it will recompute on the next access."))},t.observe_=function(e,t){var n=this,r=!0,i=void 0;return function(e,t){var n,r,i,o,s;void 0===t&&(t=Oe);"production"!==process.env.NODE_ENV&&(je(e)||_e("Autorun expects a function as first argument"),tr(e)&&_e("Autorun does not accept actions since actions are untrackable"));var a,c=null!=(n=null==(r=t)?void 0:r.name)?n:"production"!==process.env.NODE_ENV?e.name||"Autorun@"+De():"Autorun";if(t.scheduler||t.delay){var l=function(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:nr}(t),u=!1;a=new Rn(c,(function(){u||(u=!0,l((function(){u=!1,a.isDisposed_||a.track(d)})))}),t.onError,t.requiresObservable)}else a=new Rn(c,(function(){this.track(d)}),t.onError,t.requiresObservable);function d(){e(a)}null!=(i=t)&&null!=(o=i.signal)&&o.aborted||a.schedule_();return a.getDisposer_(null==(s=t)?void 0:s.signal)}((function(){var o=n.get();if(!r||t){var s=bn();e({observableKind:"computed",debugObjectName:n.name_,type:Nr,object:n,newValue:o,oldValue:i}),gn(s)}r=!1,i=o}))},t.warnAboutUntrackedRead_=function(){"production"!==process.env.NODE_ENV&&(this.isTracing_!==cn.NONE&&console.log("[mobx.trace] Computed value '"+this.name_+"' is being read outside a reactive context. Doing a full recompute."),("boolean"==typeof this.requiresReaction_?this.requiresReaction_:An.computedRequiresReaction)&&console.warn("[mobx] Computed value '"+this.name_+"' is being read outside a reactive context. Doing a full recompute."))},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return Ke(this.get())},t[on]=function(){return this.valueOf()},e}(),un=Le("ComputedValue",ln);!function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"}(an||(an={})),function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"}(cn||(cn={}));var dn=function(e){this.cause=void 0,this.cause=e};function hn(e){return e instanceof dn}function pn(e){switch(e.dependenciesState_){case an.UP_TO_DATE_:return!1;case an.NOT_TRACKING_:case an.STALE_:return!0;case an.POSSIBLY_STALE_:for(var t=yn(!0),n=bn(),r=e.observing_,i=r.length,o=0;o<i;o++){var s=r[o];if(un(s)){if(An.disableErrorBoundaries)s.get();else try{s.get()}catch(e){return gn(n),wn(t),!0}if(e.dependenciesState_===an.STALE_)return gn(n),wn(t),!0}}return xn(e),gn(n),wn(t),!1}}function fn(e){if("production"!==process.env.NODE_ENV){var t=e.observers_.size>0;An.allowStateChanges||!t&&"always"!==An.enforceActions||console.warn("[MobX] "+(An.enforceActions?"Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: ":"Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ")+e.name_)}}function vn(e,t,n){var r=yn(!0);xn(e),e.newObserving_=new Array(e.observing_.length+100),e.unboundDepsCount_=0,e.runId_=++An.runId;var i,o=An.trackingDerivation;if(An.trackingDerivation=e,An.inBatch++,!0===An.disableErrorBoundaries)i=t.call(n);else try{i=t.call(n)}catch(e){i=new dn(e)}return An.inBatch--,An.trackingDerivation=o,function(e){for(var t=e.observing_,n=e.observing_=e.newObserving_,r=an.UP_TO_DATE_,i=0,o=e.unboundDepsCount_,s=0;s<o;s++){var a=n[s];0===a.diffValue_&&(a.diffValue_=1,i!==s&&(n[i]=a),i++),a.dependenciesState_>r&&(r=a.dependenciesState_)}n.length=i,e.newObserving_=null,o=t.length;for(;o--;){var c=t[o];0===c.diffValue_&&Sn(c,e),c.diffValue_=0}for(;i--;){var l=n[i];1===l.diffValue_&&(l.diffValue_=0,Nn(l,e))}r!==an.UP_TO_DATE_&&(e.dependenciesState_=r,e.onBecomeStale_())}(e),function(e){if("production"===process.env.NODE_ENV)return;if(0!==e.observing_.length)return;("boolean"==typeof e.requiresObservable_?e.requiresObservable_:An.reactionRequiresObservable)&&console.warn("[mobx] Derivation '"+e.name_+"' is created/updated without reading any observable value.")}(e),wn(r),i}function _n(e){var t=e.observing_;e.observing_=[];for(var n=t.length;n--;)Sn(t[n],e);e.dependenciesState_=an.NOT_TRACKING_}function mn(e){var t=bn();try{return e()}finally{gn(t)}}function bn(){var e=An.trackingDerivation;return An.trackingDerivation=null,e}function gn(e){An.trackingDerivation=e}function yn(e){var t=An.allowStateReads;return An.allowStateReads=e,t}function wn(e){An.allowStateReads=e}function xn(e){if(e.dependenciesState_!==an.UP_TO_DATE_){e.dependenciesState_=an.UP_TO_DATE_;for(var t=e.observing_,n=t.length;n--;)t[n].lowestObserverState_=an.UP_TO_DATE_}}var En=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.batchId=Number.MIN_SAFE_INTEGER,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0,this.stateVersion=Number.MIN_SAFE_INTEGER},On=!0,An=function(){var e=be();return e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(On=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==(new En).version&&(On=!1),On?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new En):(setTimeout((function(){_e(35)}),1),new En)}();function Nn(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function Sn(e,t){e.observers_.delete(t),0===e.observers_.size&&kn(e)}function kn(e){!1===e.isPendingUnobservation_&&(e.isPendingUnobservation_=!0,An.pendingUnobservations.push(e))}function Dn(){0===An.inBatch&&(An.batchId=An.batchId<Number.MAX_SAFE_INTEGER?An.batchId+1:Number.MIN_SAFE_INTEGER),An.inBatch++}function Cn(){if(0==--An.inBatch){Bn();for(var e=An.pendingUnobservations,t=0;t<e.length;t++){var n=e[t];n.isPendingUnobservation_=!1,0===n.observers_.size&&(n.isBeingObserved_&&(n.isBeingObserved_=!1,n.onBUO()),n instanceof ln&&n.suspend_())}An.pendingUnobservations=[]}}function $n(e){!function(e){"production"!==process.env.NODE_ENV&&!An.allowStateReads&&An.observableRequiresReaction&&console.warn("[mobx] Observable '"+e.name_+"' being read outside a reactive context.")}(e);var t=An.trackingDerivation;return null!==t?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved_&&An.trackingContext&&(e.isBeingObserved_=!0,e.onBO())),e.isBeingObserved_):(0===e.observers_.size&&An.inBatch>0&&kn(e),!1)}function jn(e){e.lowestObserverState_!==an.STALE_&&(e.lowestObserverState_=an.STALE_,e.observers_.forEach((function(t){t.dependenciesState_===an.UP_TO_DATE_&&("production"!==process.env.NODE_ENV&&t.isTracing_!==cn.NONE&&Vn(t,e),t.onBecomeStale_()),t.dependenciesState_=an.STALE_})))}function Vn(e,t){if(console.log("[mobx.trace] '"+e.name_+"' is invalidated due to a change in: '"+t.name_+"'"),e.isTracing_===cn.BREAK){var n=[];Tn(ar(vi(e,r)),n,1),new Function("debugger;\n/*\nTracing '"+e.name_+"'\n\nYou are entering this break point because derivation '"+e.name_+"' is being traced and '"+t.name_+"' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n"+(e instanceof ln?e.derivation.toString().replace(/[*]\//g,"/"):"")+"\n\nThe dependencies for this derivation are:\n\n"+n.join("\n")+"\n*/\n    ")()}var r}function Tn(e,t,n){t.length>=1e3?t.push("(and many more)"):(t.push(""+"\t".repeat(n-1)+e.name),e.dependencies&&e.dependencies.forEach((function(e){return Tn(e,t,n+1)})))}var Rn=function(){function e(e,t,n,r){void 0===e&&(e="production"!==process.env.NODE_ENV?"Reaction@"+De():"Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=an.NOT_TRACKING_,this.diffValue_=0,this.runId_=0,this.unboundDepsCount_=0,this.isDisposed_=!1,this.isScheduled_=!1,this.isTrackPending_=!1,this.isRunning_=!1,this.isTracing_=cn.NONE,this.name_=e,this.onInvalidate_=t,this.errorHandler_=n,this.requiresObservable_=r}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled_||(this.isScheduled_=!0,An.pendingReactions.push(this),Bn())},t.isScheduled=function(){return this.isScheduled_},t.runReaction_=function(){if(!this.isDisposed_){Dn(),this.isScheduled_=!1;var e=An.trackingContext;if(An.trackingContext=this,pn(this)){this.isTrackPending_=!0;try{this.onInvalidate_(),"production"!==process.env.NODE_ENV&&this.isTrackPending_&&In()&&Hn({name:this.name_,type:"scheduled-reaction"})}catch(e){this.reportExceptionInDerivation_(e)}}An.trackingContext=e,Cn()}},t.track=function(e){if(!this.isDisposed_){Dn();var t,n=In();"production"!==process.env.NODE_ENV&&n&&(t=Date.now(),Gn({name:this.name_,type:"reaction"})),this.isRunning_=!0;var r=An.trackingContext;An.trackingContext=this;var i=vn(this,e,void 0);An.trackingContext=r,this.isRunning_=!1,this.isTrackPending_=!1,this.isDisposed_&&_n(this),hn(i)&&this.reportExceptionInDerivation_(i.cause),"production"!==process.env.NODE_ENV&&n&&Kn({time:Date.now()-t}),Cn()}},t.reportExceptionInDerivation_=function(e){var t=this;if(this.errorHandler_)this.errorHandler_(e,this);else{if(An.disableErrorBoundaries)throw e;var n="production"!==process.env.NODE_ENV?"[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '"+this+"'":"[mobx] uncaught error in '"+this+"'";An.suppressReactionErrors?"production"!==process.env.NODE_ENV&&console.warn("[mobx] (error in reaction '"+this.name_+"' suppressed, fix error of causing action below)"):console.error(n,e),"production"!==process.env.NODE_ENV&&In()&&Hn({type:"error",name:this.name_,message:n,error:""+e}),An.globalReactionErrorHandlers.forEach((function(n){return n(e,t)}))}},t.dispose=function(){this.isDisposed_||(this.isDisposed_=!0,this.isRunning_||(Dn(),_n(this),Cn()))},t.getDisposer_=function(e){var t=this,n=function n(){t.dispose(),null==e||null==e.removeEventListener||e.removeEventListener("abort",n)};return null==e||null==e.addEventListener||e.addEventListener("abort",n),n[ot]=this,n},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(e){void 0===e&&(e=!1),function(){if("production"===process.env.NODE_ENV)return;for(var e=!1,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"boolean"==typeof n[n.length-1]&&(e=n.pop());var i=function(e){switch(e.length){case 0:return An.trackingDerivation;case 1:return vi(e[0]);case 2:return vi(e[0],e[1])}}(n);if(!i)return _e("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");i.isTracing_===cn.NONE&&console.log("[mobx.trace] '"+i.name_+"' tracing enabled");i.isTracing_=e?cn.BREAK:cn.LOG}(this,e)},e}(),Pn=100,Mn=function(e){return e()};function Bn(){An.inBatch>0||An.isRunningReactions||Mn(Ln)}function Ln(){An.isRunningReactions=!0;for(var e=An.pendingReactions,t=0;e.length>0;){++t===Pn&&(console.error("production"!==process.env.NODE_ENV?"Reaction doesn't converge to a stable state after "+Pn+" iterations. Probably there is a cycle in the reactive function: "+e[0]:"[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var n=e.splice(0),r=0,i=n.length;r<i;r++)n[r].runReaction_()}An.isRunningReactions=!1}var Un=Le("Reaction",Rn);function In(){return"production"!==process.env.NODE_ENV&&!!An.spyListeners.length}function Hn(e){if("production"!==process.env.NODE_ENV&&An.spyListeners.length)for(var t=An.spyListeners,n=0,r=t.length;n<r;n++)t[n](e)}function Gn(e){"production"!==process.env.NODE_ENV&&Hn(Xe({},e,{spyReportStart:!0}))}var zn={type:"report-end",spyReportEnd:!0};function Kn(e){"production"!==process.env.NODE_ENV&&Hn(e?Xe({},e,{type:"report-end",spyReportEnd:!0}):zn)}var qn="action",Fn="autoAction",Wn=ft(qn),Yn=ft("action.bound",{bound:!0}),Xn=ft(Fn,{autoAction:!0}),Jn=ft("autoAction.bound",{autoAction:!0,bound:!0});function Qn(e){return function(t,n){return je(t)?tn(t.name||"<unnamed action>",t,e):je(n)?tn(t,n,e):Ve(n)?it(t,n,e?Xn:Wn):Ve(t)?rt(ft(e?Fn:qn,{name:t,autoAction:e})):void("production"!==process.env.NODE_ENV&&_e("Invalid arguments for `action`"))}}var Zn=Qn(!1);Object.assign(Zn,Wn);var er=Qn(!0);function tr(e){return je(e)&&!0===e.isMobxAction}Object.assign(er,Xn),Zn.bound=rt(Yn),er.bound=rt(Jn);var nr=function(e){return e()};var rr="onBO",ir="onBUO";function or(e,t,n){return sr(ir,e,t,n)}function sr(e,t,n,r){var i="function"==typeof r?vi(t,n):vi(t),o=je(r)?r:n,s=e+"L";return i[s]?i[s].add(o):i[s]=new Set([o]),function(){var e=i[s];e&&(e.delete(o),0===e.size&&delete i[s])}}function ar(e){var t,n={name:e.name_};return e.observing_&&e.observing_.length>0&&(n.dependencies=(t=e.observing_,Array.from(new Set(t))).map(ar)),n}var cr=0;function lr(){this.message="FLOW_CANCELLED"}lr.prototype=Object.create(Error.prototype);var ur=bt("flow"),dr=bt("flow.bound",{bound:!0}),hr=Object.assign((function(e,t){if(Ve(t))return it(e,t,ur);"production"!==process.env.NODE_ENV&&1!==arguments.length&&_e("Flow expects single argument with generator function");var n=e,r=n.name||"<unnamed flow>",i=function(){var e,t=arguments,i=++cr,o=Zn(r+" - runid: "+i+" - init",n).apply(this,t),s=void 0,a=new Promise((function(t,n){var a=0;function c(e){var t;s=void 0;try{t=Zn(r+" - runid: "+i+" - yield "+a++,o.next).call(o,e)}catch(e){return n(e)}u(t)}function l(e){var t;s=void 0;try{t=Zn(r+" - runid: "+i+" - yield "+a++,o.throw).call(o,e)}catch(e){return n(e)}u(t)}function u(e){if(!je(null==e?void 0:e.then))return e.done?t(e.value):(s=Promise.resolve(e.value)).then(c,l);e.then(u,n)}e=n,c(void 0)}));return a.cancel=Zn(r+" - runid: "+i+" - cancel",(function(){try{s&&pr(s);var t=o.return(void 0),n=Promise.resolve(t.value);n.then($e,$e),pr(n),e(new lr)}catch(t){e(t)}})),a};return i.isMobXFlow=!0,i}),ur);function pr(e){je(e.cancel)&&e.cancel()}function fr(e){return!0===(null==e?void 0:e.isMobXFlow)}function vr(e){return"production"!==process.env.NODE_ENV&&1!==arguments.length&&_e("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"),function(e,t){return!!e&&(void 0!==t?"production"!==process.env.NODE_ENV&&(Kr(e)||Br(e))?_e("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead."):!!ti(e)&&e[ot].values_.has(t):ti(e)||!!e[ot]||at(e)||Un(e)||un(e))}(e)}function _r(e,t){void 0===t&&(t=void 0),Dn();try{return e.apply(t)}finally{Cn()}}function mr(e){return e[ot]}hr.bound=rt(dr);var br={has:function(e,t){return"production"!==process.env.NODE_ENV&&An.trackingDerivation&&ke("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."),mr(e).has_(t)},get:function(e,t){return mr(e).get_(t)},set:function(e,t,n){var r;return!!Ve(t)&&("production"===process.env.NODE_ENV||mr(e).values_.has(t)||ke("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."),null==(r=mr(e).set_(t,n,!0))||r)},deleteProperty:function(e,t){var n;return"production"!==process.env.NODE_ENV&&ke("delete properties from an observable object. Use 'remove' from 'mobx' instead."),!!Ve(t)&&(null==(n=mr(e).delete_(t,!0))||n)},defineProperty:function(e,t,n){var r;return"production"!==process.env.NODE_ENV&&ke("define property on an observable object. Use 'defineProperty' from 'mobx' instead."),null==(r=mr(e).defineProperty_(t,n))||r},ownKeys:function(e){return"production"!==process.env.NODE_ENV&&An.trackingDerivation&&ke("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."),mr(e).ownKeys_()},preventExtensions:function(e){_e(13)}};function gr(e){return void 0!==e.interceptors_&&e.interceptors_.length>0}function yr(e,t){var n=e.interceptors_||(e.interceptors_=[]);return n.push(t),Ce((function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}))}function wr(e,t){var n=bn();try{for(var r=[].concat(e.interceptors_||[]),i=0,o=r.length;i<o&&((t=r[i](t))&&!t.type&&_e(14),t);i++);return t}finally{gn(n)}}function xr(e){return void 0!==e.changeListeners_&&e.changeListeners_.length>0}function Er(e,t){var n=e.changeListeners_||(e.changeListeners_=[]);return n.push(t),Ce((function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}))}function Or(e,t){var n=bn(),r=e.changeListeners_;if(r){for(var i=0,o=(r=r.slice()).length;i<o;i++)r[i](t);gn(n)}}var Ar="splice",Nr="update",Sr={get:function(e,t){var n=e[ot];return t===ot?n:"length"===t?n.getArrayLength_():"string"!=typeof t||isNaN(t)?qe(Cr,t)?Cr[t]:e[t]:n.get_(parseInt(t))},set:function(e,t,n){var r=e[ot];return"length"===t&&r.setArrayLength_(n),"symbol"==typeof t||isNaN(t)?e[t]=n:r.set_(parseInt(t),n),!0},preventExtensions:function(){_e(15)}},kr=function(){function e(e,t,n,r){void 0===e&&(e="production"!==process.env.NODE_ENV?"ObservableArray@"+De():"ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=n,this.legacyMode_=r,this.atom_=new st(e),this.enhancer_=function(n,r){return t(n,r,"production"!==process.env.NODE_ENV?e+"[..]":"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.dehanceValues_=function(e){return void 0!==this.dehancer&&e.length>0?e.map(this.dehancer):e},t.intercept_=function(e){return yr(this,e)},t.observe_=function(e,t){return void 0===t&&(t=!1),t&&e({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),Er(this,e)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(e){("number"!=typeof e||isNaN(e)||e<0)&&_e("Out of range: "+e);var t=this.values_.length;if(e!==t)if(e>t){for(var n=new Array(e-t),r=0;r<e-t;r++)n[r]=void 0;this.spliceWithArray_(t,0,n)}else this.spliceWithArray_(e,t-e)},t.updateArrayLength_=function(e,t){e!==this.lastKnownLength_&&_e(16),this.lastKnownLength_+=t,this.legacyMode_&&t>0&&pi(e+t+1)},t.spliceWithArray_=function(e,t,n){var r=this;fn(this.atom_);var i=this.values_.length;if(void 0===e?e=0:e>i?e=i:e<0&&(e=Math.max(0,i+e)),t=1===arguments.length?i-e:null==t?0:Math.max(0,Math.min(t,i-e)),void 0===n&&(n=Ee),gr(this)){var o=wr(this,{object:this.proxy_,type:Ar,index:e,removedCount:t,added:n});if(!o)return Ee;t=o.removedCount,n=o.added}if(n=0===n.length?n:n.map((function(e){return r.enhancer_(e,void 0)})),this.legacyMode_||"production"!==process.env.NODE_ENV){var s=n.length-t;this.updateArrayLength_(i,s)}var a=this.spliceItemsIntoValues_(e,t,n);return 0===t&&0===n.length||this.notifyArraySplice_(e,n,a),this.dehanceValues_(a)},t.spliceItemsIntoValues_=function(e,t,n){var r;if(n.length<1e4)return(r=this.values_).splice.apply(r,[e,t].concat(n));var i=this.values_.slice(e,e+t),o=this.values_.slice(e+t);this.values_.length+=n.length-t;for(var s=0;s<n.length;s++)this.values_[e+s]=n[s];for(var a=0;a<o.length;a++)this.values_[e+n.length+a]=o[a];return i},t.notifyArrayChildUpdate_=function(e,t,n){var r=!this.owned_&&In(),i=xr(this),o=i||r?{observableKind:"array",object:this.proxy_,type:Nr,debugObjectName:this.atom_.name_,index:e,newValue:t,oldValue:n}:null;"production"!==process.env.NODE_ENV&&r&&Gn(o),this.atom_.reportChanged(),i&&Or(this,o),"production"!==process.env.NODE_ENV&&r&&Kn()},t.notifyArraySplice_=function(e,t,n){var r=!this.owned_&&In(),i=xr(this),o=i||r?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:Ar,index:e,removed:n,added:t,removedCount:n.length,addedCount:t.length}:null;"production"!==process.env.NODE_ENV&&r&&Gn(o),this.atom_.reportChanged(),i&&Or(this,o),"production"!==process.env.NODE_ENV&&r&&Kn()},t.get_=function(e){if(!(this.legacyMode_&&e>=this.values_.length))return this.atom_.reportObserved(),this.dehanceValue_(this.values_[e]);console.warn("production"!==process.env.NODE_ENV?"[mobx.array] Attempt to read an array index ("+e+") that is out of bounds ("+this.values_.length+"). Please check length first. Out of bound indices will not be tracked by MobX":"[mobx] Out of bounds read: "+e)},t.set_=function(e,t){var n=this.values_;if(this.legacyMode_&&e>n.length&&_e(17,e,n.length),e<n.length){fn(this.atom_);var r=n[e];if(gr(this)){var i=wr(this,{type:Nr,object:this.proxy_,index:e,newValue:t});if(!i)return;t=i.newValue}(t=this.enhancer_(t,r))!==r&&(n[e]=t,this.notifyArrayChildUpdate_(e,t,r))}else{for(var o=new Array(e+1-n.length),s=0;s<o.length-1;s++)o[s]=void 0;o[o.length-1]=t,this.spliceWithArray_(n.length,0,o)}},e}();function Dr(e,t,n,r){return void 0===n&&(n="production"!==process.env.NODE_ENV?"ObservableArray@"+De():"ObservableArray"),void 0===r&&(r=!1),Se(),bi((function(){var i=new kr(n,t,r,!1);Be(i.values_,ot,i);var o=new Proxy(i.values_,Sr);return i.proxy_=o,e&&e.length&&i.spliceWithArray_(0,0,e),o}))}var Cr={clear:function(){return this.splice(0)},replace:function(e){var t=this[ot];return t.spliceWithArray_(0,t.values_.length,e)},toJSON:function(){return this.slice()},splice:function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=this[ot];switch(arguments.length){case 0:return[];case 1:return o.spliceWithArray_(e);case 2:return o.spliceWithArray_(e,t)}return o.spliceWithArray_(e,t,r)},spliceWithArray:function(e,t,n){return this[ot].spliceWithArray_(e,t,n)},push:function(){for(var e=this[ot],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.spliceWithArray_(e.values_.length,0,n),e.values_.length},pop:function(){return this.splice(Math.max(this[ot].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var e=this[ot],t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.spliceWithArray_(0,0,n),e.values_.length},reverse:function(){return An.trackingDerivation&&_e(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){An.trackingDerivation&&_e(37,"sort");var e=this.slice();return e.sort.apply(e,arguments),this.replace(e),this},remove:function(e){var t=this[ot],n=t.dehanceValues_(t.values_).indexOf(e);return n>-1&&(this.splice(n,1),!0)}};function $r(e,t){"function"==typeof Array.prototype[e]&&(Cr[e]=t(e))}function jr(e){return function(){var t=this[ot];t.atom_.reportObserved();var n=t.dehanceValues_(t.values_);return n[e].apply(n,arguments)}}function Vr(e){return function(t,n){var r=this,i=this[ot];return i.atom_.reportObserved(),i.dehanceValues_(i.values_)[e]((function(e,i){return t.call(n,e,i,r)}))}}function Tr(e){return function(){var t=this,n=this[ot];n.atom_.reportObserved();var r=n.dehanceValues_(n.values_),i=arguments[0];return arguments[0]=function(e,n,r){return i(e,n,r,t)},r[e].apply(r,arguments)}}$r("concat",jr),$r("flat",jr),$r("includes",jr),$r("indexOf",jr),$r("join",jr),$r("lastIndexOf",jr),$r("slice",jr),$r("toString",jr),$r("toLocaleString",jr),$r("every",Vr),$r("filter",Vr),$r("find",Vr),$r("findIndex",Vr),$r("flatMap",Vr),$r("forEach",Vr),$r("map",Vr),$r("some",Vr),$r("reduce",Tr),$r("reduceRight",Tr);var Rr,Pr,Mr=Le("ObservableArrayAdministration",kr);function Br(e){return Te(e)&&Mr(e[ot])}var Lr={},Ur="add",Ir="delete";Rr=Symbol.iterator,Pr=Symbol.toStringTag;var Hr,Gr,zr=function(){function e(e,t,n){var r=this;void 0===t&&(t=ut),void 0===n&&(n="production"!==process.env.NODE_ENV?"ObservableMap@"+De():"ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[ot]=Lr,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=t,this.name_=n,je(Map)||_e(18),bi((function(){r.keysAtom_=ct("production"!==process.env.NODE_ENV?r.name_+".keys()":"ObservableMap.keys()"),r.data_=new Map,r.hasMap_=new Map,e&&r.merge(e)}))}var t=e.prototype;return t.has_=function(e){return this.data_.has(e)},t.has=function(e){var t=this;if(!An.trackingDerivation)return this.has_(e);var n=this.hasMap_.get(e);if(!n){var r=n=new sn(this.has_(e),dt,"production"!==process.env.NODE_ENV?this.name_+"."+ze(e)+"?":"ObservableMap.key?",!1);this.hasMap_.set(e,r),or(r,(function(){return t.hasMap_.delete(e)}))}return n.get()},t.set=function(e,t){var n=this.has_(e);if(gr(this)){var r=wr(this,{type:n?Nr:Ur,object:this,newValue:t,name:e});if(!r)return this;t=r.newValue}return n?this.updateValue_(e,t):this.addValue_(e,t),this},t.delete=function(e){var t=this;if((fn(this.keysAtom_),gr(this))&&!wr(this,{type:Ir,object:this,name:e}))return!1;if(this.has_(e)){var n=In(),r=xr(this),i=r||n?{observableKind:"map",debugObjectName:this.name_,type:Ir,object:this,oldValue:this.data_.get(e).value_,name:e}:null;return"production"!==process.env.NODE_ENV&&n&&Gn(i),_r((function(){var n;t.keysAtom_.reportChanged(),null==(n=t.hasMap_.get(e))||n.setNewValue_(!1),t.data_.get(e).setNewValue_(void 0),t.data_.delete(e)})),r&&Or(this,i),"production"!==process.env.NODE_ENV&&n&&Kn(),!0}return!1},t.updateValue_=function(e,t){var n=this.data_.get(e);if((t=n.prepareNewValue_(t))!==An.UNCHANGED){var r=In(),i=xr(this),o=i||r?{observableKind:"map",debugObjectName:this.name_,type:Nr,object:this,oldValue:n.value_,name:e,newValue:t}:null;"production"!==process.env.NODE_ENV&&r&&Gn(o),n.setNewValue_(t),i&&Or(this,o),"production"!==process.env.NODE_ENV&&r&&Kn()}},t.addValue_=function(e,t){var n=this;fn(this.keysAtom_),_r((function(){var r,i=new sn(t,n.enhancer_,"production"!==process.env.NODE_ENV?n.name_+"."+ze(e):"ObservableMap.key",!1);n.data_.set(e,i),t=i.value_,null==(r=n.hasMap_.get(e))||r.setNewValue_(!0),n.keysAtom_.reportChanged()}));var r=In(),i=xr(this),o=i||r?{observableKind:"map",debugObjectName:this.name_,type:Ur,object:this,name:e,newValue:t}:null;"production"!==process.env.NODE_ENV&&r&&Gn(o),i&&Or(this,o),"production"!==process.env.NODE_ENV&&r&&Kn()},t.get=function(e){return this.has(e)?this.dehanceValue_(this.data_.get(e).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var e=this,t=this.keys();return Ei({next:function(){var n=t.next(),r=n.done,i=n.value;return{done:r,value:r?void 0:e.get(i)}}})},t.entries=function(){var e=this,t=this.keys();return Ei({next:function(){var n=t.next(),r=n.done,i=n.value;return{done:r,value:r?void 0:[i,e.get(i)]}}})},t[Rr]=function(){return this.entries()},t.forEach=function(e,t){for(var n,r=tt(this);!(n=r()).done;){var i=n.value,o=i[0],s=i[1];e.call(t,s,o,this)}},t.merge=function(e){var t=this;return Kr(e)&&(e=new Map(e)),_r((function(){Re(e)?function(e){var t=Object.keys(e);if(!He)return t;var n=Object.getOwnPropertySymbols(e);return n.length?[].concat(t,n.filter((function(t){return xe.propertyIsEnumerable.call(e,t)}))):t}(e).forEach((function(n){return t.set(n,e[n])})):Array.isArray(e)?e.forEach((function(e){var n=e[0],r=e[1];return t.set(n,r)})):Ue(e)?(e.constructor!==Map&&_e(19,e),e.forEach((function(e,n){return t.set(n,e)}))):null!=e&&_e(20,e)})),this},t.clear=function(){var e=this;_r((function(){mn((function(){for(var t,n=tt(e.keys());!(t=n()).done;){var r=t.value;e.delete(r)}}))}))},t.replace=function(e){var t=this;return _r((function(){for(var n,r=function(e){if(Ue(e)||Kr(e))return e;if(Array.isArray(e))return new Map(e);if(Re(e)){var t=new Map;for(var n in e)t.set(n,e[n]);return t}return _e(21,e)}(e),i=new Map,o=!1,s=tt(t.data_.keys());!(n=s()).done;){var a=n.value;if(!r.has(a))if(t.delete(a))o=!0;else{var c=t.data_.get(a);i.set(a,c)}}for(var l,u=tt(r.entries());!(l=u()).done;){var d=l.value,h=d[0],p=d[1],f=t.data_.has(h);if(t.set(h,p),t.data_.has(h)){var v=t.data_.get(h);i.set(h,v),f||(o=!0)}}if(!o)if(t.data_.size!==i.size)t.keysAtom_.reportChanged();else for(var _=t.data_.keys(),m=i.keys(),b=_.next(),g=m.next();!b.done;){if(b.value!==g.value){t.keysAtom_.reportChanged();break}b=_.next(),g=m.next()}t.data_=i})),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(e,t){return"production"!==process.env.NODE_ENV&&!0===t&&_e("`observe` doesn't support fireImmediately=true in combination with maps."),Er(this,e)},t.intercept_=function(e){return yr(this,e)},Ye(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Pr,get:function(){return"Map"}}]),e}(),Kr=Le("ObservableMap",zr);var qr={};Hr=Symbol.iterator,Gr=Symbol.toStringTag;var Fr=function(){function e(e,t,n){var r=this;void 0===t&&(t=ut),void 0===n&&(n="production"!==process.env.NODE_ENV?"ObservableSet@"+De():"ObservableSet"),this.name_=void 0,this[ot]=qr,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=n,je(Set)||_e(22),this.enhancer_=function(e,r){return t(e,r,n)},bi((function(){r.atom_=ct(r.name_),e&&r.replace(e)}))}var t=e.prototype;return t.dehanceValue_=function(e){return void 0!==this.dehancer?this.dehancer(e):e},t.clear=function(){var e=this;_r((function(){mn((function(){for(var t,n=tt(e.data_.values());!(t=n()).done;){var r=t.value;e.delete(r)}}))}))},t.forEach=function(e,t){for(var n,r=tt(this);!(n=r()).done;){var i=n.value;e.call(t,i,i,this)}},t.add=function(e){var t=this;if((fn(this.atom_),gr(this))&&!wr(this,{type:Ur,object:this,newValue:e}))return this;if(!this.has(e)){_r((function(){t.data_.add(t.enhancer_(e,void 0)),t.atom_.reportChanged()}));var n="production"!==process.env.NODE_ENV&&In(),r=xr(this),i=r||n?{observableKind:"set",debugObjectName:this.name_,type:Ur,object:this,newValue:e}:null;n&&"production"!==process.env.NODE_ENV&&Gn(i),r&&Or(this,i),n&&"production"!==process.env.NODE_ENV&&Kn()}return this},t.delete=function(e){var t=this;if(gr(this)&&!wr(this,{type:Ir,object:this,oldValue:e}))return!1;if(this.has(e)){var n="production"!==process.env.NODE_ENV&&In(),r=xr(this),i=r||n?{observableKind:"set",debugObjectName:this.name_,type:Ir,object:this,oldValue:e}:null;return n&&"production"!==process.env.NODE_ENV&&Gn(i),_r((function(){t.atom_.reportChanged(),t.data_.delete(e)})),r&&Or(this,i),n&&"production"!==process.env.NODE_ENV&&Kn(),!0}return!1},t.has=function(e){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(e))},t.entries=function(){var e=0,t=Array.from(this.keys()),n=Array.from(this.values());return Ei({next:function(){var r=e;return e+=1,r<n.length?{value:[t[r],n[r]],done:!1}:{done:!0}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var e=this,t=0,n=Array.from(this.data_.values());return Ei({next:function(){return t<n.length?{value:e.dehanceValue_(n[t++]),done:!1}:{done:!0}}})},t.replace=function(e){var t=this;return Wr(e)&&(e=new Set(e)),_r((function(){Array.isArray(e)||Ie(e)?(t.clear(),e.forEach((function(e){return t.add(e)}))):null!=e&&_e("Cannot initialize set from "+e)})),this},t.observe_=function(e,t){return"production"!==process.env.NODE_ENV&&!0===t&&_e("`observe` doesn't support fireImmediately=true in combination with sets."),Er(this,e)},t.intercept_=function(e){return yr(this,e)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[Hr]=function(){return this.values()},Ye(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:Gr,get:function(){return"Set"}}]),e}(),Wr=Le("ObservableSet",Fr),Yr=Object.create(null),Xr="remove",Jr=function(){function e(e,t,n,r){void 0===t&&(t=new Map),void 0===r&&(r=Dt),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=e,this.values_=t,this.name_=n,this.defaultAnnotation_=r,this.keysAtom_=new st("production"!==process.env.NODE_ENV?this.name_+".keys":"ObservableObject.keys"),this.isPlainObject_=Re(this.target_),"production"===process.env.NODE_ENV||Ai(this.defaultAnnotation_)||_e("defaultAnnotation must be valid annotation"),"production"!==process.env.NODE_ENV&&(this.appliedAnnotations_={})}var t=e.prototype;return t.getObservablePropValue_=function(e){return this.values_.get(e).get()},t.setObservablePropValue_=function(e,t){var n=this.values_.get(e);if(n instanceof ln)return n.set(t),!0;if(gr(this)){var r=wr(this,{type:Nr,object:this.proxy_||this.target_,name:e,newValue:t});if(!r)return null;t=r.newValue}if((t=n.prepareNewValue_(t))!==An.UNCHANGED){var i=xr(this),o="production"!==process.env.NODE_ENV&&In(),s=i||o?{type:Nr,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:n.value_,name:e,newValue:t}:null;"production"!==process.env.NODE_ENV&&o&&Gn(s),n.setNewValue_(t),i&&Or(this,s),"production"!==process.env.NODE_ENV&&o&&Kn()}return!0},t.get_=function(e){return An.trackingDerivation&&!qe(this.target_,e)&&this.has_(e),this.target_[e]},t.set_=function(e,t,n){return void 0===n&&(n=!1),qe(this.target_,e)?this.values_.has(e)?this.setObservablePropValue_(e,t):n?Reflect.set(this.target_,e,t):(this.target_[e]=t,!0):this.extend_(e,{value:t,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,n)},t.has_=function(e){if(!An.trackingDerivation)return e in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var t=this.pendingKeys_.get(e);return t||(t=new sn(e in this.target_,dt,"production"!==process.env.NODE_ENV?this.name_+"."+ze(e)+"?":"ObservableObject.key?",!1),this.pendingKeys_.set(e,t)),t.get()},t.make_=function(e,t){if(!0===t&&(t=this.defaultAnnotation_),!1!==t){if(ri(this,t,e),!(e in this.target_)){var n;if(null!=(n=this.target_[nt])&&n[e])return;_e(1,t.annotationType_,this.name_+"."+e.toString())}for(var r=this.target_;r&&r!==xe;){var i=ye(r,e);if(i){var o=t.make_(this,e,i,r);if(0===o)return;if(1===o)break}r=Object.getPrototypeOf(r)}ni(this,t,e)}},t.extend_=function(e,t,n,r){if(void 0===r&&(r=!1),!0===n&&(n=this.defaultAnnotation_),!1===n)return this.defineProperty_(e,t,r);ri(this,n,e);var i=n.extend_(this,e,t,r);return i&&ni(this,n,e),i},t.defineProperty_=function(e,t,n){void 0===n&&(n=!1),fn(this.keysAtom_);try{Dn();var r=this.delete_(e);if(!r)return r;if(gr(this)){var i=wr(this,{object:this.proxy_||this.target_,name:e,type:Ur,newValue:t.value});if(!i)return null;var o=i.newValue;t.value!==o&&(t=Xe({},t,{value:o}))}if(n){if(!Reflect.defineProperty(this.target_,e,t))return!1}else we(this.target_,e,t);this.notifyPropertyAddition_(e,t.value)}finally{Cn()}return!0},t.defineObservableProperty_=function(e,t,n,r){void 0===r&&(r=!1),fn(this.keysAtom_);try{Dn();var i=this.delete_(e);if(!i)return i;if(gr(this)){var o=wr(this,{object:this.proxy_||this.target_,name:e,type:Ur,newValue:t});if(!o)return null;t=o.newValue}var s=ei(e),a={configurable:!An.safeDescriptors||this.isPlainObject_,enumerable:!0,get:s.get,set:s.set};if(r){if(!Reflect.defineProperty(this.target_,e,a))return!1}else we(this.target_,e,a);var c=new sn(t,n,"production"!==process.env.NODE_ENV?this.name_+"."+e.toString():"ObservableObject.key",!1);this.values_.set(e,c),this.notifyPropertyAddition_(e,c.value_)}finally{Cn()}return!0},t.defineComputedProperty_=function(e,t,n){void 0===n&&(n=!1),fn(this.keysAtom_);try{Dn();var r=this.delete_(e);if(!r)return r;if(gr(this))if(!wr(this,{object:this.proxy_||this.target_,name:e,type:Ur,newValue:void 0}))return null;t.name||(t.name="production"!==process.env.NODE_ENV?this.name_+"."+e.toString():"ObservableObject.key"),t.context=this.proxy_||this.target_;var i=ei(e),o={configurable:!An.safeDescriptors||this.isPlainObject_,enumerable:!1,get:i.get,set:i.set};if(n){if(!Reflect.defineProperty(this.target_,e,o))return!1}else we(this.target_,e,o);this.values_.set(e,new ln(t)),this.notifyPropertyAddition_(e,void 0)}finally{Cn()}return!0},t.delete_=function(e,t){if(void 0===t&&(t=!1),fn(this.keysAtom_),!qe(this.target_,e))return!0;if(gr(this)&&!wr(this,{object:this.proxy_||this.target_,name:e,type:Xr}))return null;try{var n,r;Dn();var i,o=xr(this),s="production"!==process.env.NODE_ENV&&In(),a=this.values_.get(e),c=void 0;if(!a&&(o||s))c=null==(i=ye(this.target_,e))?void 0:i.value;if(t){if(!Reflect.deleteProperty(this.target_,e))return!1}else delete this.target_[e];if("production"!==process.env.NODE_ENV&&delete this.appliedAnnotations_[e],a&&(this.values_.delete(e),a instanceof sn&&(c=a.value_),jn(a)),this.keysAtom_.reportChanged(),null==(n=this.pendingKeys_)||null==(r=n.get(e))||r.set(e in this.target_),o||s){var l={type:Xr,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:c,name:e};"production"!==process.env.NODE_ENV&&s&&Gn(l),o&&Or(this,l),"production"!==process.env.NODE_ENV&&s&&Kn()}}finally{Cn()}return!0},t.observe_=function(e,t){return"production"!==process.env.NODE_ENV&&!0===t&&_e("`observe` doesn't support the fire immediately property for observable objects."),Er(this,e)},t.intercept_=function(e){return yr(this,e)},t.notifyPropertyAddition_=function(e,t){var n,r,i=xr(this),o="production"!==process.env.NODE_ENV&&In();if(i||o){var s=i||o?{type:Ur,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:e,newValue:t}:null;"production"!==process.env.NODE_ENV&&o&&Gn(s),i&&Or(this,s),"production"!==process.env.NODE_ENV&&o&&Kn()}null==(n=this.pendingKeys_)||null==(r=n.get(e))||r.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),Ge(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function Qr(e,t){var n;if("production"!==process.env.NODE_ENV&&t&&ti(e)&&_e("Options can't be provided for already observable objects."),qe(e,ot))return"production"===process.env.NODE_ENV||_i(e)instanceof Jr||_e("Cannot convert '"+mi(e)+"' into observable object:\nThe target is already observable of different type.\nExtending builtins is not supported."),e;"production"===process.env.NODE_ENV||Object.isExtensible(e)||_e("Cannot make the designated object observable; it is not extensible");var r=null!=(n=null==t?void 0:t.name)?n:"production"!==process.env.NODE_ENV?(Re(e)?"ObservableObject":e.constructor.name)+"@"+De():"ObservableObject",i=new Jr(e,new Map,String(r),function(e){var t;return e?null!=(t=e.defaultDecorator)?t:Ct(e):void 0}(t));return Me(e,ot,i),e}var Zr=Le("ObservableObjectAdministration",Jr);function ei(e){return Yr[e]||(Yr[e]={get:function(){return this[ot].getObservablePropValue_(e)},set:function(t){return this[ot].setObservablePropValue_(e,t)}})}function ti(e){return!!Te(e)&&Zr(e[ot])}function ni(e,t,n){var r;"production"!==process.env.NODE_ENV&&(e.appliedAnnotations_[n]=t),null==(r=e.target_[nt])||delete r[n]}function ri(e,t,n){if("production"===process.env.NODE_ENV||Ai(t)||_e("Cannot annotate '"+e.name_+"."+n.toString()+"': Invalid annotation."),"production"!==process.env.NODE_ENV&&!pt(t)&&qe(e.appliedAnnotations_,n)){var r=e.name_+"."+n.toString(),i=e.appliedAnnotations_[n].annotationType_;_e("Cannot apply '"+t.annotationType_+"' to '"+r+"':\nThe field is already annotated with '"+i+"'.\nRe-annotating fields is not allowed.\nUse 'override' annotation for methods overridden by subclass.")}}var ii,oi,si=di(0),ai=function(){var e=!1,t={};return Object.defineProperty(t,"0",{set:function(){e=!0}}),Object.create(t)[0]=1,!1===e}(),ci=0,li=function(){};ii=li,oi=Array.prototype,Object.setPrototypeOf?Object.setPrototypeOf(ii.prototype,oi):void 0!==ii.prototype.__proto__?ii.prototype.__proto__=oi:ii.prototype=oi;var ui=function(e,t,n){function r(t,n,r,i){var o;return void 0===r&&(r="production"!==process.env.NODE_ENV?"ObservableArray@"+De():"ObservableArray"),void 0===i&&(i=!1),o=e.call(this)||this,bi((function(){var e=new kr(r,n,i,!0);e.proxy_=Ze(o),Be(Ze(o),ot,e),t&&t.length&&o.spliceWithArray(0,0,t),ai&&Object.defineProperty(Ze(o),"0",si)})),o}Je(r,e);var i=r.prototype;return i.concat=function(){this[ot].atom_.reportObserved();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.prototype.concat.apply(this.slice(),t.map((function(e){return Br(e)?e.slice():e})))},i[n]=function(){var e=this,t=0;return Ei({next:function(){return t<e.length?{value:e[t++],done:!1}:{done:!0,value:void 0}}})},Ye(r,[{key:"length",get:function(){return this[ot].getArrayLength_()},set:function(e){this[ot].setArrayLength_(e)}},{key:t,get:function(){return"Array"}}]),r}(li,Symbol.toStringTag,Symbol.iterator);function di(e){return{enumerable:!1,configurable:!0,get:function(){return this[ot].get_(e)},set:function(t){this[ot].set_(e,t)}}}function hi(e){we(ui.prototype,""+e,di(e))}function pi(e){if(e>ci){for(var t=ci;t<e+100;t++)hi(t);ci=e}}function fi(e,t,n){return new ui(e,t,n)}function vi(e,t){if("object"==typeof e&&null!==e){if(Br(e))return void 0!==t&&_e(23),e[ot].atom_;if(Wr(e))return e.atom_;if(Kr(e)){if(void 0===t)return e.keysAtom_;var n=e.data_.get(t)||e.hasMap_.get(t);return n||_e(25,t,mi(e)),n}if(ti(e)){if(!t)return _e(26);var r=e[ot].values_.get(t);return r||_e(27,t,mi(e)),r}if(at(e)||un(e)||Un(e))return e}else if(je(e)&&Un(e[ot]))return e[ot];_e(28)}function _i(e,t){return e||_e(29),void 0!==t?_i(vi(e,t)):at(e)||un(e)||Un(e)||Kr(e)||Wr(e)?e:e[ot]?e[ot]:void _e(24,e)}function mi(e,t){var n;if(void 0!==t)n=vi(e,t);else{if(tr(e))return e.name;n=ti(e)||Kr(e)||Wr(e)?_i(e):vi(e)}return n.name_}function bi(e){var t=bn(),n=nn(!0);Dn();try{return e()}finally{Cn(),rn(n),gn(t)}}Object.entries(Cr).forEach((function(e){var t=e[0],n=e[1];"concat"!==t&&Me(ui.prototype,t,n)})),pi(1e3);var gi=xe.toString;function yi(e,t,n){return void 0===n&&(n=-1),wi(e,t,n)}function wi(e,t,n,r,i){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return!1;if(e!=e)return t!=t;var o=typeof e;if("function"!==o&&"object"!==o&&"object"!=typeof t)return!1;var s=gi.call(e);if(s!==gi.call(t))return!1;switch(s){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return"undefined"!=typeof Symbol&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":n>=0&&n++}e=xi(e),t=xi(t);var a="[object Array]"===s;if(!a){if("object"!=typeof e||"object"!=typeof t)return!1;var c=e.constructor,l=t.constructor;if(c!==l&&!(je(c)&&c instanceof c&&je(l)&&l instanceof l)&&"constructor"in e&&"constructor"in t)return!1}if(0===n)return!1;n<0&&(n=-1),i=i||[];for(var u=(r=r||[]).length;u--;)if(r[u]===e)return i[u]===t;if(r.push(e),i.push(t),a){if((u=e.length)!==t.length)return!1;for(;u--;)if(!wi(e[u],t[u],n-1,r,i))return!1}else{var d,h=Object.keys(e);if(u=h.length,Object.keys(t).length!==u)return!1;for(;u--;)if(!qe(t,d=h[u])||!wi(e[d],t[d],n-1,r,i))return!1}return r.pop(),i.pop(),!0}function xi(e){return Br(e)?e.slice():Ue(e)||Kr(e)||Ie(e)||Wr(e)?Array.from(e.entries()):e}function Ei(e){return e[Symbol.iterator]=Oi,e}function Oi(){return this}function Ai(e){return e instanceof Object&&"string"==typeof e.annotationType_&&je(e.make_)&&je(e.extend_)}function Ni(e){return function(e,t){var n,r;return r=class extends e{constructor(){super(...arguments),this[n]=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback();const e=this.constructor.name||this.nodeName;this[pe]=new t(`${e}.update()`,this[fe]),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this[pe]&&(this[pe].dispose(),this[pe]=void 0)}update(e){this[pe]?this[pe].track(super.update.bind(this,e)):super.update(e)}},n=fe,r}(e,Rn)}["Symbol","Map","Set"].forEach((function(e){void 0===be()[e]&&_e("MobX requires global '"+e+"' to be available or polyfilled")})),"object"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:function(e){return"production"===process.env.NODE_ENV?(console.warn("[mobx.spy] Is a no-op in production builds"),function(){}):(An.spyListeners.push(e),Ce((function(){An.spyListeners=An.spyListeners.filter((function(t){return t!==e}))})))},extras:{getDebugName:mi},$mobx:ot});class Si extends(Ni(ie)){}const ki=e=>null!=e?e:U,Di=s`
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
`;let Ci=class extends Si{constructor(){super(...arguments),this.title="Discover Our Parks"}render(){return B`
      <div class="content">
        <div class="header">
          <div class="title"><a href="/">U.S. National Parks Discovery</a></div>
          <div class="author">By Janessa</div>
        </div>
        <hr class="divider" />
        <div class="app-title-section">${this.title}</div>
        <hr class="divider" />
        ${ki(this.contentTemplate)}
      </div>
    `}};Ci.styles=Di,e([le()],Ci.prototype,"title",void 0),e([le({type:Object})],Ci.prototype,"contentTemplate",void 0),Ci=e([se("about-section")],Ci);const $i=s`
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
`,ji=s`
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
`;let Vi=class extends Si{constructor(){super(...arguments),this.label="Button"}render(){return B`
      <a href=${ki(this.route)}>
        <button class="pill-button" type="button">
          ${this.label}<span>&#10230;</span>
        </button>
      </a>
    `}};Vi.styles=ji,e([le()],Vi.prototype,"label",void 0),e([le()],Vi.prototype,"route",void 0),Vi=e([se("pill-button")],Vi);let Ti=class extends Si{constructor(){super(...arguments),this.buttonLabel="Explore the map"}render(){return B`
      <div class="image-container">
        <slot name="photo-carousel-container"></slot>
      </div>
      <div class="content-container">
        <p class="text-content">${this.initialTextContent}</p>

        <p class="text-content">${this.secondaryTextContent}</p>

        ${function(e,t,n){return e?t():null==n?void 0:n()}(this.buttonRoute,(()=>B`<div class="nav-container">
            <pill-button
              label=${this.buttonLabel}
              route=${this.buttonRoute}
            ></pill-button>
          </div>`))}
      </div>
    `}};Ti.styles=$i,e([le()],Ti.prototype,"initialTextContent",void 0),e([le()],Ti.prototype,"secondaryTextContent",void 0),e([le()],Ti.prototype,"buttonLabel",void 0),e([le()],Ti.prototype,"buttonRoute",void 0),Ti=e([se("info-card")],Ti);const Ri=s`
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
`;let Pi=class extends ie{constructor(){super(...arguments),this.selectedInternal=0,this.left=0,this.previous=0,this.selected=0,this.name="",this.metadata=""}connectedCallback(){super.connectedCallback()}get maxSelected(){return console.log(this.childElementCount),this.childElementCount-1}hasValidSelected(){return this.selected>=0&&this.selected<=this.maxSelected}updated(e){e.has("selected")&&this.hasValidSelected()&&(this.updateSlots(),this.previous=this.selected)}updateSlots(){var e,t;null===(e=this.children[this.previous])||void 0===e||e.removeAttribute("slot"),null===(t=this.children[this.selected])||void 0===t||t.setAttribute("slot","selected")}handleForwardClick(e){const t=this.selected+(Number(!e.shiftKey)||1);this.selected=t>this.maxSelected?0:t<0?this.maxSelected:t,this.dispatchChange(this.selected)}handleBackClick(e){const t=this.selected+(Number(!e.shiftKey)||-1);this.selected=t>this.maxSelected?0:t<0?this.maxSelected:t,this.dispatchChange(this.selected)}dispatchChange(e){const t=new CustomEvent("change",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t),this.updateData(e)}updateData(e){const t=this.children[e].getAttribute("id");t&&(this.name=t);const n=this.children[e].getAttribute("park-code");n&&(this.metadata=n),window.dispatchEvent(new CustomEvent("changed-photo-event",{detail:{name:this.name,metadata:this.metadata}}))}render(){this.hasValidSelected()&&(this.selectedInternal=this.selected);const e=this.maxSelected>0?`${this.selected} OF ${this.maxSelected}`:"...";return B`
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
    `}};function Mi(e,t){const n={center:[t.longitude,t.latitude],zoom:12.5,bearing:130,pitch:100};e.flyTo({...n,duration:500,essential:!0})}Pi.styles=Ri,e([le({type:Number})],Pi.prototype,"selected",void 0),e([le()],Pi.prototype,"name",void 0),Pi=e([se("photo-carousel")],Pi);const Bi=s`
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
`,Li=s`
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
`;let Ui=class extends Si{constructor(){super(...arguments),this.parks=[],this.ready=!1,this.parkCodeToDataMap=new Map,this.parkDescription="",this.parkUrl=""}connectedCallback(){super.connectedCallback(),window.addEventListener("changed-photo-event",this.handleChangePhotoEvent.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("changed-photo-event",this.handleChangePhotoEvent.bind(this))}repeatUntilMapReady(){if(!this.mapObj){console.log("repeating until map ready");const e=document.body.querySelector("#map");if(e)e.style.display="block",e.style.width="100%",e.style.minHeight="500px",this.mapElement=e,this.getMap(),this.requestUpdate();else{const e=document.body.querySelector(".map-wrapper"),t=document.createElement("div");t.id="map",t.style.height="400px",t.style.width="100%",e.appendChild(t)}setTimeout((()=>{this.repeatUntilMapReady()}),1e3)}}repeatUntilImagesReady(){this.imagesForCarousel&&this.parks||(console.log("repeating until images/data ready"),this.getData(),this.requestUpdate()),setTimeout((()=>{this.repeatUntilImagesReady()}),1e3)}getMap(){const e=function(){mapboxgl.accessToken="pk.eyJ1IjoiamFuZXNzYXRyYW4iLCJhIjoiY2xvYTVycjF4MGcxNTJrbW40b2N2c2xhdyJ9.QJVQiLIxywTBeSQoUHdwlg";const e=new mapboxgl.Map({container:"map",center:[-98,40],zoom:2,style:"mapbox://styles/mapbox/outdoors-v12",attributionControl:!1});return e.resize(),e.on("load",(()=>{e.resize(),e.setFog({color:"rgb(242, 208, 208)","high-color":"rgb(186, 221, 222)","horizon-blend":.4}),e.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.terrain-rgb"}),e.setTerrain({source:"mapbox-dem",exaggeration:1.5})})),e}();return e&&(this.mapObj=e),!!this.mapObj}handleChangePhotoEvent(e){console.log(e);const t=e;if(this.parkCodeToDataMap){const e=this.parkCodeToDataMap.get(t.detail.metadata);e&&(this.parkDescription=e.description,this.parkUrl=e.url,Mi(this.mapObj,e))}}firstUpdated(){this.repeatUntilMapReady(),this.mapElement&&this.repeatUntilImagesReady()}async getData(){await this.fetchParks(),this.imagesForCarousel=this.getImages()}async fetchWithTimeout(e,t){var n;const r=null!==(n=null==t?void 0:t.timeout)&&void 0!==n?n:8e3,i=new AbortController,o=setTimeout((()=>i.abort()),r),s=await fetch(e,{...t,signal:i.signal});return clearTimeout(o),s}async fetchParks(){const e=this.mapObj;let t;const n=await this.fetchWithTimeout("https://developer.nps.gov/api/v1/parks?limit=100000",{method:"GET",headers:{"X-Api-Key":"Y8Idz9Ba8lWUazAqUHNfxwE1RR97i3TSuoYiBsL7"},timeout:4e3});t=(await n.json()).data,this.parks=t,t.forEach((e=>{this.parkCodeToDataMap.set(e.parkCode,e)})),t.slice(0,1).forEach((t=>{Mi(e,t)}))}getImages(){return this.parks.map((e=>{const t=e.images[0];if(t)return B` <img
          src="${t.url}"
          id=${e.fullName}
          park-code=${e.parkCode}
        />`})).filter((e=>e))}render(){const e=B`<img
      class="placeholder-img"
      src="https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />`;return B`
      <div class="main-container">
        <about-section
          title="Explore the map"
          .contentTemplate=${this.mapElement?this.mapElement:e}
        ></about-section>
        <info-card
          .initialTextContent=${this.parkDescription?this.parkDescription:"Beyond the towering trees and vast horizons lies a path to self-discovery. Nature's canvas becomes a mirror reflecting your innermost thoughts and aspirations. Wander the trails, traverse the meadows, and allow the whispers of the wilderness to guide you on a journey of self-reflection. Or, at least that's what nature evokes for me! Begin your exploration of the various parks by clicking the arrow above."}
          .buttonLabel=${"Learn more"}
          .buttonRoute=${this.parkUrl}
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
    `}};Ui.styles=[Li,Di,Bi],e([ue()],Ui.prototype,"parks",void 0),e([ue()],Ui.prototype,"parkDescription",void 0),e([ue()],Ui.prototype,"parkUrl",void 0),e([ue()],Ui.prototype,"imagesForCarousel",void 0),Ui=e([se("parks-map")],Ui);const Ii=s`
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
`;let Hi=class extends Si{render(){return B`
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
    `}};Hi.styles=Ii,Hi=e([se("image-navigation")],Hi);let Gi=class extends Si{render(){const e=B`<image-navigation></image-navigation>`;return B`<div class="main-container">
      <about-section
        title="Discover our parks"
        .contentTemplate=${e}
      ></about-section>
      <info-card
        initialTextContent="Welcome to Your Ultimate National Park Adventure Hub!"
        secondaryTextContent="From the rugged Rockies to the serene shores, we've got the lowdown on all your favorite national parks. Dive in, find your next adventure,  and let's make some memories!"
        .buttonLabel=${"Explore the map"}
        .buttonRoute=${"/parks-map"}
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
    </div>`}};function zi(e){return e=e||[],Array.isArray(e)?e:[e]}function Ki(e){return`[Vaadin.Router] ${e}`}Gi.styles=Li,Gi=e([se("main-layout")],Gi);const qi="module",Fi="nomodule",Wi=[qi,Fi];function Yi(e){if(!e.match(/.+\.[m]?js$/))throw new Error(Ki(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function Xi(e){if(!e||!no(e.path))throw new Error(Ki('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(to(e.action)||Array.isArray(e.children)||to(e.children)||eo(t)||n.some((t=>no(e[t])))))throw new Error(Ki(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(no(t))Yi(t);else{if(!Wi.some((e=>e in t)))throw new Error(Ki('Expected route bundle to include either "'+Fi+'" or "'+qi+'" keys, or both'));Wi.forEach((e=>e in t&&Yi(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(Ki(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function Ji(e){zi(e).forEach((e=>Xi(e)))}function Qi(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===qi?n.setAttribute("type",qi):t===Fi&&n.setAttribute(Fi,""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function Zi(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function eo(e){return"object"==typeof e&&!!e}function to(e){return"function"==typeof e}function no(e){return"string"==typeof e}function ro(e){const t=new Error(Ki(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const io=new class{};function oo(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const r=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(r!==window.location.origin)return;const{pathname:i,search:o,hash:s}=t;Zi("go",{pathname:i,search:o,hash:s})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const so={activate(){window.document.addEventListener("click",oo)},inactivate(){window.document.removeEventListener("click",oo)}};function ao(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;Zi("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!to(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const co={activate(){window.addEventListener("popstate",ao)},inactivate(){window.removeEventListener("popstate",ao)}};var lo=Oo,uo=bo,ho=function(e,t){return go(bo(e,t))},po=go,fo=Eo,vo="/",_o="./",mo=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function bo(e,t){for(var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||vo,c=t&&t.delimiters||_o,l=!1;null!==(n=mo.exec(e));){var u=n[0],d=n[1],h=n.index;if(s+=e.slice(o,h),o=h+u.length,d)s+=d[1],l=!0;else{var p="",f=e[o],v=n[2],_=n[3],m=n[4],b=n[5];if(!l&&s.length){var g=s.length-1;c.indexOf(s[g])>-1&&(p=s[g],s=s.slice(0,g))}s&&(r.push(s),s="",l=!1);var y=""!==p&&void 0!==f&&f!==p,w="+"===b||"*"===b,x="?"===b||"*"===b,E=p||a,O=_||m;r.push({name:v||i++,prefix:p,delimiter:E,optional:x,repeat:w,partial:y,pattern:O?wo(O):"[^"+yo(E)+"]+?"})}}return(s||o<e.length)&&r.push(s+e.substr(o)),r}function go(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var i="",o=r&&r.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,l=n?n[a.name]:void 0;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(c=o(l[u],a),!t[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(0===u?a.prefix:a.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(i+=a.prefix)}else{if(c=o(String(l),a),!t[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');i+=a.prefix+c}}else i+=a}return i}}function yo(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function wo(e){return e.replace(/([=!:$/()])/g,"\\$1")}function xo(e){return e&&e.sensitive?"":"i"}function Eo(e,t,n){for(var r=(n=n||{}).strict,i=!1!==n.start,o=!1!==n.end,s=yo(n.delimiter||vo),a=n.delimiters||_o,c=[].concat(n.endsWith||[]).map(yo).concat("$").join("|"),l=i?"^":"",u=0===e.length,d=0;d<e.length;d++){var h=e[d];if("string"==typeof h)l+=yo(h),u=d===e.length-1&&a.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+yo(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?l+=yo(h.prefix)+"("+p+")?":l+="(?:"+yo(h.prefix)+"("+p+"))?":l+=yo(h.prefix)+"("+p+")"}}return o?(r||(l+="(?:"+s+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+s+"(?="+c+"))?"),u||(l+="(?="+s+"|"+c+")")),new RegExp(l,xo(n))}function Oo(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Oo(e[i],t,n).source);return new RegExp("(?:"+r.join("|")+")",xo(n))}(e,t,n):function(e,t,n){return Eo(bo(e,n),t,n)}(e,t,n)}lo.parse=uo,lo.compile=ho,lo.tokensToFunction=po,lo.tokensToRegExp=fo;const{hasOwnProperty:Ao}=Object.prototype,No=new Map;function So(e){try{return decodeURIComponent(e)}catch(t){return e}}function ko(e,t,n,r,i){let o,s,a=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const u=e.__children=e.__children||e.children;if(!o&&(o=function(e,t,n,r,i){const o=`${e}|${n=!!n}`;let s=No.get(o);if(!s){const t=[];s={keys:t,pattern:lo(e,t,{end:n,strict:""===e})},No.set(o,s)}const a=s.pattern.exec(t);if(!a)return null;const c=Object.assign({},i);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,r=a[e];void 0===r&&Ao.call(c,n)||(t.repeat?c[n]=r?r.split(t.delimiter).map(So):[]:c[n]=r?So(r):r)}return{path:a[0],keys:(r||[]).concat(s.keys),params:c}}(c,t,!u,r,i),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&u)for(;a<u.length;){if(!s){const r=u[a];r.parent=e;let i=o.path.length;i>0&&"/"===t.charAt(i)&&(i+=1),s=ko(r,t.substr(i),n,o.keys,o.params)}const r=s.next(l);if(!r.done)return{done:!1,value:r.value};s=null,a++}return{done:!0}}}}function Do(e){if(to(e.route.action))return e.route.action(e)}No.set("|false",{keys:[],pattern:/(?:)/});class Co{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Do,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Ji(e);const t=[...zi(e)];this.root.__children=t}addRoutes(e){return Ji(e),this.root.__children.push(...zi(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,no(e)?{pathname:e}:e),n=ko(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let i=null,o=null,s=t;function a(e,c=i.value.route,l){const u=null===l&&i.value.route;return i=o||n.next(u),o=null,e||!i.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(c,i.value.route)?i.done?Promise.reject(ro(t)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},t,i.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(s,i.value),Promise.resolve(r(s)).then((t=>null!=t&&t!==io?(s.result=t.result||t,s):a(e,c,t)))):(o=i,Promise.resolve(io))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}Co.pathToRegexp=lo;const{pathToRegexp:$o}=Co,jo=new Map;function Vo(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const i=n[r];i.parent=t,Vo(e,i,i.__children||i.children)}}function To(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function Ro(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function Po(e,t={}){if(!(e instanceof Co))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let o=To(n,r);if(!o&&(n.clear(),Vo(n,e.root,e.root.__children),o=To(n,r),!o))throw new Error(`Route "${r}" not found`);let s=jo.get(o.fullPath);if(!s){let e=Ro(o),t=o.parent;for(;t;){const n=Ro(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=$o.parse(e),r=$o.tokensToFunction(n),i=Object.create(null);for(let e=0;e<n.length;e++)no(n[e])||(i[n[e].name]=!0);s={toPath:r,keys:i},jo.set(e,s),o.fullPath=e}let a=s.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const e={},n=Object.keys(i);for(let t=0;t<n.length;t++){const r=n[t];s.keys[r]||(e[r]=i[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let Mo=[];function Bo(e){Mo.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),Mo=e}function Lo(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${i}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function Uo(e){return null!=e}function Io({pathname:e="",search:t="",hash:n="",chain:r=[],params:i={},redirectFrom:o,resolver:s},a){const c=r.map((e=>e.route));return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:a||c.length&&c[c.length-1]||null,params:i,redirectFrom:o,getUrl:(e={})=>qo(Wo.pathToRegexp.compile(Fo(c))(Object.assign({},i,e)),s)}}function Ho(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Go(e,t,n){if(to(e))return e.apply(n,t)}function zo(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?Go(n[e],t,n):void 0}function Ko(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function qo(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function Fo(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class Wo extends Co{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&Co.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const i=Wo.NavigationTrigger;Wo.setTriggers.apply(Wo,Object.keys(i).map((e=>i[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Io({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();to(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{Uo(e)||to(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!eo(e))throw new Error(Ki(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=zi(e);for(let e=0;e<n.length;e++)Xi(n[e]),t.__children.push(n[e])}(e,t)})));const r={redirect:t=>Ho(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return Go(t.action,[e,r],t)})).then((e=>{return Uo(e)&&(e instanceof HTMLElement||e.redirect||e===io)?e:no(t.redirect)?r.redirect(t.redirect):t.bundle?(n=t.bundle,no(n)?Qi(n):Promise.race(Wi.filter((e=>e in n)).map((e=>Qi(n[e],e))))).then((()=>{}),(()=>{throw new Error(Ki(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>Uo(e)?e:no(t.component)?r.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},no(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=Io(e),t&&this.__updateBrowserHistory(e,1===n),Zi("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const i=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),i.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Ko(this.__outlet&&this.__outlet.children),this.location=Io(Object.assign(r,{resolver:this})),Zi("error",Object.assign({router:this,error:e},r)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const r=n!==t?n:e,i=qo(Fo(n.chain),n.resolver)===n.pathname,o=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===io?i?e:null!==t.parent?o(e,t.parent,n):n:n));return o(n).then((e=>{if(null===e||e===io)throw ro(r);return e&&e!==io&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Io(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(Ki(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let i=Promise.resolve();const o=()=>({cancel:!0}),s=t=>Ho(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[t]);for(let t=0;t<r.length;t++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:s},r[t]),n[t].element.location=Io(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:o},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Io(e,n[t].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:o,redirect:s},r[t]),r[t].element&&(r[t].element.location=Io(e,r[t].route)));return i.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,r){const i=Io(t);return e.then((e=>{if(this.__isLatestRender(t)){return zo("onBeforeLeave",[i,n,this],r.element)(e)}})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,r){const i=Io(t,r.route);return e.then((e=>{if(this.__isLatestRender(t)){return zo("onBeforeEnter",[i,n,this],r.element)(e)}}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(Ki(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(Ki(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const i=r?"replaceState":"pushState";window.history[i](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const i=t&&t.chain[r].element;if(i){if(i.parentNode!==n)break;e.chain[r].element=i,n=i}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const i=e.chain[t].element;i&&(r.appendChild(i),this.__addedByRouter.set(i,!0),r===n&&this.__appearingContent.push(i),r=i)}}__removeDisappearingContent(){this.__disappearingContent&&Ko(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ko(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=Io(e);Go(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Ko(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=Io(e,e.chain[t].route);Go(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],i=e.chain;let o;for(let e=i.length;e>0;e--)if(i[e-1].route.animate){o=i[e-1].route.animate;break}if(t&&n&&o){const e=eo(o)&&o.leave||"leaving",i=eo(o)&&o.enter||"entering";r.push(Lo(t,e)),r.push(Lo(n,i))}return Promise.all(r).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;no(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){Bo(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Po(this)),qo(this.__urlForName(e,t),this)}urlForPath(e,t){return qo(Wo.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=no(e)?this.__createUrl(e,"http://a"):e;return Zi("go",{pathname:t,search:n,hash:r})}}const Yo=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Xo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Jo(e,t){if("function"!=typeof e)return;const n=Yo.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const Qo=function(e,t){if(window.Vaadin.developmentMode)return Jo(e,t)};function Zo(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Xo?!(Xo&&Object.keys(Xo).map((e=>Xo[e])).filter((e=>e.productionMode)).length>0):!Jo((function(){return!0})))}catch(e){return!1}}());let es,ts;window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),Qo(Zo),Wo.NavigationTrigger={POPSTATE:co,CLICK:so};const ns=e=>{es=e,ts=new Wo(es),ts.setRoutes([{path:"/",component:"main-layout"},{path:"/parks-map",component:"parks-map",animate:!0},{path:"(.*)",redirect:"/"}])};let rs=class extends ie{constructor(){super(...arguments),this.header="Discover Our Parks!"}firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#outlet");t&&ns(t)}render(){return B`
      <main>
        <div id="outlet"></div>
      </main>
    `}};rs.styles=he,e([le({type:String})],rs.prototype,"header",void 0),rs=e([se("discover-our-parks-app")],rs);
