import{bh as l}from"./XTiWLC6H.js";function s(e,r,i){return r.flatten(({sublayers:n})=>n).length!==e.length?!0:!!e.some(n=>n.originIdOf("minScale")>i||n.originIdOf("maxScale")>i||n.originIdOf("renderer")>i||n.originIdOf("labelingInfo")>i||n.originIdOf("opacity")>i||n.originIdOf("labelsVisible")>i||n.originIdOf("source")>i)||!f(e,r)}function g(e,r,i){return!!e.some(o=>{const n=o.source;return!(!n||n.type==="map-layer"&&n.mapLayerId===o.id&&(n.gdbVersion==null||n.gdbVersion===i))||o.originIdOf("renderer")>l.SERVICE||o.originIdOf("labelingInfo")>l.SERVICE||o.originIdOf("opacity")>l.SERVICE||o.originIdOf("labelsVisible")>l.SERVICE})||!f(e,r)}function f(e,r){if(!(e!=null&&e.length)||r==null)return!0;const i=r.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).map(t=>t.id).toArray();if(e.length>i.length)return!1;let o=0;const n=i.length;for(const{id:t}of e){for(;o<n&&i[o]!==t;)o++;if(o>=n)return!1}return!0}function u(e){return!!e&&e.some(r=>{var i;return r.minScale!=null||((i=r.layerDefinition)==null?void 0:i.minScale)!=null})}export{s as e,g as n,u as o};
