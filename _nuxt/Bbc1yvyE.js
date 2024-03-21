import{ab as p,ac as f,a4 as l}from"./XTiWLC6H.js";import{i as n,a as g}from"./5Fa0wVOV.js";import{i as x}from"./C3n5Z7S0.js";function s(){return l.getLogger("esri.geometry.Mesh")}function d(r){const{vertexSpace:e}=r;if(e.origin!=null)return r.clone();const{anchor:c}=r,i=c.clone(),a=new n({origin:[i.x,i.y,i.z]}),o=r.cloneWithVertexSpace(a),{position:t}=o.vertexAttributes;return o.vertexAttributes.position=x(new Float64Array(t.length),t,[-i.x,-i.y,-(i.z??0)]),o.vertexAttributesChanged(),o}function u(r){return r.origin!=null}function m(r){return u(r.vertexSpace)}function S(r,e){if(!u(r))return null;const[c,i,a]=r.origin;return new p({x:c,y:i,z:a,spatialReference:e})}function b(r,e){const{x:c,y:i,z:a,spatialReference:o}=r,t=[c,i,a??0];if((e==null?void 0:e.geographic)!==void 0){if(f(s(),"option: geographic",{replacement:"use vertexSpace option instead",version:"4.29",warnOnce:!0}),!(e!=null&&e.vertexSpace))return e!=null&&e.geographic?new g({origin:t}):new n({origin:t});s().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")}if(!(e!=null&&e.vertexSpace))return o.isGeographic||o.isWebMercator?new g({origin:t}):new n({origin:t});switch(e.vertexSpace){case"local":return new g({origin:t});case"georeferenced":return new n({origin:t});case"georeferenced-absolute":return new n}}function y(r){return r.isGeographic||r.isWebMercator?"local":"georeferenced"}function $(r,e){return r==="local"?new g({origin:e}):new n({origin:e})}export{d as a,b as f,u as g,$ as h,y as l,m as p,S as u};
