import{g as D}from"./Cgw_FQNn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 *//*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var T=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],b=T.join(","),C=typeof Element>"u",f=C?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,h=!C&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},g=function e(t,r){var a;r===void 0&&(r=!0);var n=t==null||(a=t.getAttribute)===null||a===void 0?void 0:a.call(t,"inert"),i=n===""||n==="true",u=i||r&&t&&e(t.parentNode);return u},B=function(t){var r,a=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"contenteditable");return a===""||a==="true"},A=function(t,r,a){if(g(t))return[];var n=Array.prototype.slice.apply(t.querySelectorAll(b));return r&&f.call(t,b)&&n.unshift(t),n=n.filter(a),n},E=function e(t,r,a){for(var n=[],i=Array.from(t);i.length;){var u=i.shift();if(!g(u,!1))if(u.tagName==="SLOT"){var l=u.assignedElements(),s=l.length?l:u.children,c=e(s,!0,a);a.flatten?n.push.apply(n,c):n.push({scopeParent:u,candidates:c})}else{var d=f.call(u,b);d&&a.filter(u)&&(r||!t.includes(u))&&n.push(u);var o=u.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(u),q=!g(o,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(u));if(o&&q){var m=e(o===!0?u.children:o.children,!0,a);a.flatten?n.push.apply(n,m):n.push({scopeParent:u,candidates:m})}else i.unshift.apply(i,u.children)}}return n},I=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},R=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||B(t))&&!I(t)?0:t.tabIndex},k=function(t,r){var a=R(t);return a<0&&r&&!I(t)?0:a},M=function(t,r){return t.tabIndex===r.tabIndex?t.documentOrder-r.documentOrder:t.tabIndex-r.tabIndex},p=function(t){return t.tagName==="INPUT"},P=function(t){return p(t)&&t.type==="hidden"},L=function(t){var r=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(a){return a.tagName==="SUMMARY"});return r},$=function(t,r){for(var a=0;a<t.length;a++)if(t[a].checked&&t[a].form===r)return t[a]},j=function(t){if(!t.name)return!0;var r=t.form||h(t),a=function(l){return r.querySelectorAll('input[type="radio"][name="'+l+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=a(window.CSS.escape(t.name));else try{n=a(t.name)}catch(u){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",u.message),!1}var i=$(n,t.form);return!i||i===t},U=function(t){return p(t)&&t.type==="radio"},G=function(t){return U(t)&&!j(t)},W=function(t){var r,a=t&&h(t),n=(r=a)===null||r===void 0?void 0:r.host,i=!1;if(a&&a!==t){var u,l,s;for(i=!!((u=n)!==null&&u!==void 0&&(l=u.ownerDocument)!==null&&l!==void 0&&l.contains(n)||t!=null&&(s=t.ownerDocument)!==null&&s!==void 0&&s.contains(t));!i&&n;){var c,d,o;a=h(n),n=(c=a)===null||c===void 0?void 0:c.host,i=!!((d=n)!==null&&d!==void 0&&(o=d.ownerDocument)!==null&&o!==void 0&&o.contains(n))}}return i},w=function(t){var r=t.getBoundingClientRect(),a=r.width,n=r.height;return a===0&&n===0},X=function(t,r){var a=r.displayCheck,n=r.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=f.call(t,"details>summary:first-of-type"),u=i?t.parentElement:t;if(f.call(u,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof n=="function"){for(var l=t;t;){var s=t.parentElement,c=h(t);if(s&&!s.shadowRoot&&n(s)===!0)return w(t);t.assignedSlot?t=t.assignedSlot:!s&&c!==t.ownerDocument?t=c.host:t=s}t=l}if(W(t))return!t.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return w(t);return!1},Z=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var r=t.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var a=0;a<r.children.length;a++){var n=r.children.item(a);if(n.tagName==="LEGEND")return f.call(r,"fieldset[disabled] *")?!0:!n.contains(t)}return!0}r=r.parentElement}return!1},y=function(t,r){return!(r.disabled||g(r)||P(r)||X(r,t)||L(r)||Z(r))},S=function(t,r){return!(G(r)||R(r)<0||!y(t,r))},z=function(t){var r=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(r)||r>=0)},H=function e(t){var r=[],a=[];return t.forEach(function(n,i){var u=!!n.scopeParent,l=u?n.scopeParent:n,s=k(l,u),c=u?e(n.candidates):l;s===0?u?r.push.apply(r,c):r.push(l):a.push({documentOrder:i,tabIndex:s,item:n,isScope:u,content:c})}),a.sort(M).reduce(function(n,i){return i.isScope?n.push.apply(n,i.content):n.push(i.content),n},[]).concat(r)},Y=function(t,r){r=r||{};var a;return r.getShadowRoot?a=E([t],r.includeContainer,{filter:S.bind(null,r),flatten:!1,getShadowRoot:r.getShadowRoot,shadowRootFilter:z}):a=A(t,r.includeContainer,S.bind(null,r)),H(a)},ct=function(t,r){r=r||{};var a;return r.getShadowRoot?a=E([t],r.includeContainer,{filter:y.bind(null,r),flatten:!0,getShadowRoot:r.getShadowRoot}):a=A(t,r.includeContainer,y.bind(null,r)),a},ot=function(t,r){if(r=r||{},!t)throw new Error("No node provided");return f.call(t,b)===!1?!1:S(r,t)},J=T.concat("iframe").join(","),ft=function(t,r){if(r=r||{},!t)throw new Error("No node provided");return f.call(t,J)===!1?!1:y(r,t)};const K={getShadowRoot:!0};function dt(e){return e?e.id=e.id||`${e.tagName.toLowerCase()}-${D()}`:""}function vt(e){const t="dir",r=`[${t}]`,a=Q(e,r);return a?a.getAttribute(t):"ltr"}function N(e){return e.getRootNode()}function x(e){return e.host||null}function bt(e,{selector:t,id:r}){function a(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);const i=N(n),u=r?"getElementById"in i?i.getElementById(r):null:t?i.querySelector(t):null,l=x(i);return u||(l?a(l):null)}return a(e)}function Q(e,t){function r(a){return a?a.closest(t)||r(x(N(a))):null}return r(e)}function V(e,t){return F(e,t)}function F(e,t){if(!e)return;const r=t(e);if(r!==void 0)return r;const{parentNode:a}=e;return F(a instanceof ShadowRoot?a.host:a,t)}function ht(e,t){return!!V(t,r=>r===e?!0:void 0)}function _(e){return typeof(e==null?void 0:e.setFocus)=="function"}async function gt(e){if(e)return _(e)?e.setFocus():e.focus()}function tt(e){if(e)return Y(e,K)[0]??e}function yt(e){var t;(t=tt(e))==null||t.focus()}const v=":not([slot])";function St(e,t,r){t&&!Array.isArray(t)&&typeof t!="string"&&(r=t,t=null);const a=t?Array.isArray(t)?t.map(n=>`[slot="${n}"]`).join(","):`[slot="${t}"]`:v;return r!=null&&r.all?rt(e,a,r):et(e,a,r)}function O(e,t){return e?Array.from(e.children||[]).filter(r=>r==null?void 0:r.matches(t)):[]}function rt(e,t,r){let a=t===v?O(e,v):Array.from(e.querySelectorAll(t));a=r&&r.direct===!1?a:a.filter(i=>i.parentElement===e),a=r!=null&&r.matches?a.filter(i=>i==null?void 0:i.matches(r.matches)):a;const n=r==null?void 0:r.selector;return n?a.map(i=>Array.from(i.querySelectorAll(n))).reduce((i,u)=>[...i,...u],[]).filter(i=>!!i):a}function et(e,t,r){let a=t===v?O(e,v)[0]||null:e.querySelector(t);a=r&&r.direct===!1||(a==null?void 0:a.parentElement)===e?a:null,a=r!=null&&r.matches?a!=null&&a.matches(r.matches)?a:null:a;const n=r==null?void 0:r.selector;return n?a==null?void 0:a.querySelector(n):a}function mt(e,t,r){if(typeof t=="string"&&t!=="")return t;if(t==="")return e[r]}function wt(e){return(!!e).toString()}function Tt(e){return ut(e)||nt(e)}function at(e){return it(e).filter(t=>t.nodeType===Node.TEXT_NODE).map(t=>t.textContent).join("").trim()}function nt(e){return!!at(e)}function it(e){return e.target.assignedNodes({flatten:!0})}function ut(e){return!!lt(e).length}function lt(e){return e.target.assignedElements({flatten:!0})}function Ct(e){return!!(e.isPrimary&&e.button===0)}function At(e,t){if(e.parentNode!==t.parentNode)return!1;const r=Array.from(e.parentNode.children);return r.indexOf(e)<r.indexOf(t)}export{St as a,gt as b,Q as c,K as d,dt as e,yt as f,vt as g,ft as h,At as i,Y as j,ct as k,ot as l,R as m,Tt as n,mt as o,lt as p,bt as q,tt as r,ut as s,wt as t,ht as u,Ct as v};
