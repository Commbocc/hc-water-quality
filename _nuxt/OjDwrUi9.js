function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./niRFBJSV.js","./Blrp8lZ5.js","./XTiWLC6H.js","./CEOtNdJQ.js","./entry.BQZMgYnx.css","./q3fE-ZOt.js","./CSKppSlJ.js","./BYLoma18.js","./C3n5Z7S0.js","./gbXlX5Ms.js","./CYMvjYBC.js","./DQQPK29i.js","./Bdb9ZJJK.js","./SlcXzInt.js","./GbxEOYtk.js","./CpqVPYDX.js","./DgiGbX8E.js","./CEXSh8YV.js","./C8uFuQw6.js","./CtdQHOes.js","./uFKJYJQh.js","./DXEkLiKp.js","./CRinw1aY.js","./BgVWCRiY.js","./aS7o9HR1.js","./BlT9lbVY.js","./DRxmnVba.js","./CFuCWUmS.js","./D0PSWh4d.js","./DBTo71j0.js","./COOs6mqz.js","./BmZEZMMh.js","./Dr8cEU8U.js","./B0owpBza.js","./DaVlEYWY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as v}from"./CEOtNdJQ.js";import{et as d,s as n,V as p,eu as c,bA as y,ev as b,cL as l}from"./XTiWLC6H.js";let s=m();function m(){return new d(50)}function T(){s=m()}async function $(r,o){var i,t;if((i=r.resource)!=null&&i.href)return w(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(r){return p(r,{responseType:"image"}).then(o=>o.data)}async function x(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:f}=await v(()=>import("./niRFBJSV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url),h=await f(e,{disableTextures:!0}),u=c(h.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=y(b(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,$ as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};
