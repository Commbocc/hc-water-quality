function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./OjDwrUi9.js","./CEOtNdJQ.js","./entry.BQZMgYnx.css","./XTiWLC6H.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as d}from"./CEOtNdJQ.js";import{gr as g,aP as a,gs as S,gt as C,gu as M,gv as z,et as I,c2 as y,gw as m,gx as L,gy as x,gz as P}from"./XTiWLC6H.js";function _(t){const o=[];return b(g(t),o),o.length?new a(S(o[0])):null}function b(t,o){var e;if(!t)return;let n;n=t.type==="CIMTextSymbol"?t.symbol:t;const l=t.type==="CIMPolygonSymbol";if(n!=null&&n.symbolLayers){for(const r of n.symbolLayers)if(!(r.colorLocked||l&&(C(r)||M(r)&&r.markerPlacement&&z(r.markerPlacement))))switch(r.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":r.tintColor&&p(o,r.tintColor);break;case"CIMVectorMarker":(e=r.markerGraphics)==null||e.forEach(c=>{b(c.symbol,o)});break;case"CIMSolidStroke":case"CIMSolidFill":p(o,r.color);break;case"CIMHatchFill":b(r.lineSymbol,o)}}}function p(t,o){for(const n of t)if(n.join(".")===o.join("."))return;t.push(o)}new I(1e3);new a([128,128,128]);const j=new a("white");function U(t,o){if(!t)return null;let n=null;return y(t)?n=v(t):m(t)&&(n=t.type==="cim"?_(t):t.color?new a(t.color):null),n?h(n,o):null}function v(t){const o=t.symbolLayers;if(!o)return null;let n=null;return o.forEach(l=>{var e;l.type==="object"&&((e=l.resource)!=null&&e.href)||(n=l.type==="water"?l.color:l.material?l.material.color:null)}),n?new a(n):null}function h(t,o){if(o==null||t==null)return t;const n=t.toRgba();return n[3]=n[3]*o,new a(n)}function $(t,o,n){const l=t.symbolLayers;if(!l)return;const e=r=>h(o=o??r??(n!=null?j:null),n);l.forEach(r=>{var c,s;if(r.type!=="object"||!((c=r.resource)!=null&&c.href)||o)if(r.type==="water")r.color=e(r.color);else{const i=r.material!=null?r.material.color:null,u=e(i);r.material==null?r.material=new P({color:u}):r.material.color=u,n!=null&&"outline"in r&&((s=r.outline)==null?void 0:s.color)!=null&&(r.outline.color=h(r.outline.color,n))}})}function E(t,o,n){var l;(o=o??t.color)&&(t.color=h(o,n)),n!=null&&"outline"in t&&((l=t.outline)!=null&&l.color)&&(t.outline.color=h(t.outline.color,n))}function q(t,o,n){t&&(o||n!=null)&&(o&&(o=new a(o)),y(t)?$(t,o,n):m(t)&&E(t,o,n))}async function R(t,o){const n=t.symbolLayers;n&&await L(n,async l=>F(l,o))}async function F(t,o){switch(t.type){case"extrude":D(t,o);break;case"icon":case"line":case"text":O(t,o);break;case"path":V(t,o);break;case"object":await T(t,o)}}function O(t,o){const n=w(o);n!=null&&(t.size=n)}function w(t){for(const o of t)if(typeof o=="number")return o;return null}function D(t,o){t.size=typeof o[2]=="number"?o[2]:0}async function T(t,o){const{resourceSize:n,symbolSize:l}=await A(t),e=k(o,n,l);t.width=f(o[0],l[0],n[0],e),t.depth=f(o[1],l[1],n[1],e),t.height=f(o[2],l[2],n[2],e)}function V(t,o){const n=k(o,x,[t.width,void 0,t.height]);t.width=f(o[0],t.width,1,n),t.height=f(o[2],t.height,1,n)}function k(t,o,n){for(let l=0;l<3;l++){const e=t[l];switch(e){case"symbol-value":{const r=n[l];return r!=null?r/o[l]:1}case"proportional":break;default:if(e&&o[l])return e/o[l]}}return 1}async function A(t){const{computeObjectLayerResourceSize:o}=await d(()=>import("./OjDwrUi9.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),n=await o(t,10),{width:l,height:e,depth:r}=t,c=[l,r,e];let s=1;for(let i=0;i<3;i++){const u=c[i];if(u!=null){s=u/n[i];break}}for(let i=0;i<3;i++)c[i]==null&&(c[i]=n[i]*s);return{resourceSize:n,symbolSize:c}}function f(t,o,n,l){switch(t){case"proportional":return n*l;case"symbol-value":return o??n;default:return t}}function G(t,o){const n=w(o);if(n!=null)switch(t.type){case"simple-marker":t.size=n;break;case"picture-marker":{const l=t.width/t.height;l>1?(t.width=n,t.height=n*l):(t.width=n*l,t.height=n);break}case"simple-line":t.width=n;break;case"text":t.font.size=n}}async function B(t,o){if(t&&o)return y(t)?R(t,o):void(m(t)&&G(t,o))}function J(t,o,n){if(t&&o!=null)if(y(t)){const l=t.symbolLayers;l&&l.forEach(e=>{if(e&&e.type==="object")switch(n){case"tilt":e.tilt=(e.tilt??0)+o;break;case"roll":e.roll=(e.roll??0)+o;break;default:e.heading=(e.heading??0)+o}})}else m(t)&&(t.type!=="simple-marker"&&t.type!=="picture-marker"&&t.type!=="text"||(t.angle+=o))}async function K(t,o){return await t.fetchSymbol(o)||t.fetchCIMSymbol(o)}export{J as D,K as N,B as R,q as g,U as h};
