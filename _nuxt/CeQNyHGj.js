import{V as P,ej as R,aP as w,hT as B,hU as C,hi as F,cM as z,d1 as D}from"./XTiWLC6H.js";import{e as S}from"./q3fE-ZOt.js";import{l as L,m as N,a as U,h as V,c as G}from"./B8c6r5BO.js";import{c as O,x as I,L as q,O as A,i as j,E as K,T as Q,u as k}from"./BYLoma18.js";import{e as H,f as J,a as W,o as E}from"./C3n5Z7S0.js";import{n as X,l as Y,o as Z,f as ee,r as te,a as re,b,c as ne,d as oe,e as M,g as se,h as le,i as ae}from"./gbXlX5Ms.js";import{e as ie}from"./D0PSWh4d.js";import{V as ue}from"./CyxLhv5A.js";import{r as ce}from"./SlcXzInt.js";import{D as v}from"./CYMvjYBC.js";import"./CEOtNdJQ.js";import"./BoXVIBy2.js";import"./5Fa0wVOV.js";import"./Bbc1yvyE.js";import"./od7WerJ4.js";import"./jHyXLYee.js";import"./CpqVPYDX.js";import"./B7dFfoWJ.js";import"./uFKJYJQh.js";import"./CSKppSlJ.js";import"./Bdb9ZJJK.js";import"./DXEkLiKp.js";import"./CRinw1aY.js";import"./BgVWCRiY.js";import"./aS7o9HR1.js";import"./GbxEOYtk.js";import"./BlT9lbVY.js";import"./HPZJvW79.js";import"./DsOdlPuA.js";import"./DQQPK29i.js";import"./CtdQHOes.js";function fe(e,t,r){const u=e.typedBuffer,o=e.typedBufferStride,l=t.typedBuffer,c=t.typedBufferStride,a=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*o,m=((r==null?void 0:r.srcIndex)??0)*c;for(let i=0;i<a;++i){for(let n=0;n<9;++n)u[s+n]=l[m+n];s+=o,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:fe},Symbol.toStringTag,{value:"Module"}));function me(e,t,r){const u=e.typedBuffer,o=e.typedBufferStride,l=t.typedBuffer,c=t.typedBufferStride,a=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*o,m=((r==null?void 0:r.srcIndex)??0)*c;for(let i=0;i<a;++i){for(let n=0;n<16;++n)u[s+n]=l[m+n];s+=o,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function y(e,t){return new e(new ArrayBuffer(t*e.ElementCount*ie(e.ElementType)))}async function tt(e,t,r){const u=new X(pe(r)),o=(await Y(u,t,r,!0)).model,l=o.lods.shift(),c=new Map,a=new Map;o.textures.forEach(($,h)=>c.set(h,ge($))),o.materials.forEach(($,h)=>a.set(h,$e($,c)));const s=xe(l);for(const $ of s.parts)ye(s,$,a);const{position:m,normal:i,tangent:n,color:f,texCoord0:p}=s.vertexAttributes,x={position:m.typedBuffer,normal:i!=null?i.typedBuffer:null,tangent:n!=null?n.typedBuffer:null,uv:p!=null?p.typedBuffer:null,color:f!=null?f.typedBuffer:null},g=ue(x,e,r);return{transform:g.transform,vertexSpace:g.vertexSpace,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new L({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function pe(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(r,u,o)=>{const l=(t==null?void 0:t(r))??r;return(await P(l,{responseType:u==="image"?"image":u==="binary"?"array-buffer":"json",signal:o!=null?o.signal:null})).data}}:null}function T(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${R(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function de(e){return e!=null?e.toString():"-"}function xe(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,o=new Map,l=[];for(const c of e.parts){const{attributes:{position:a,normal:s,color:m,tangent:i,texCoord0:n}}=c,f=`
      ${T(a,u)}/
      ${T(s,u)}/
      ${T(m,u)}/
      ${T(i,u)}/
      ${T(n,u)}/
      ${de(c.transform)}
    `;let p=!1;const x=R(o,f,()=>(p=!0,{start:t,length:a.count}));p&&(t+=a.count),s&&(r.normal=!0),m&&(r.color=!0),i&&(r.tangent=!0),n&&(r.texCoord0=!0),l.push({gltf:c,writeVertices:p,region:x})}return{vertexAttributes:{position:y(Q,t),normal:r.normal?y(j,t):null,tangent:r.tangent?y(O,t):null,color:r.color?y(I,t):null,texCoord0:r.texCoord0?y(k,t):null},parts:l,components:[]}}function ge(e){return new N({data:(ce(e.data),e.data),wrap:be(e.parameters.wrap)})}function $e(e,t){const r=new w(ve(e.color,e.opacity)),u=e.emissiveFactor?new w(we(e.emissiveFactor)):null,o=l=>l?new G({scale:l.scale?[l.scale[0],l.scale[1]]:[1,1],rotation:D(l.rotation??0),offset:l.offset?[l.offset[0],l.offset[1]]:[0,0]}):null;return new U({color:r,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:u,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:he(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:o(e.colorTextureTransform),normalTextureTransform:o(e.normalTextureTransform),occlusionTextureTransform:o(e.occlusionTextureTransform),emissiveTextureTransform:o(e.emissiveTextureTransform),metallicRoughnessTextureTransform:o(e.metallicRoughnessTextureTransform)})}function ye(e,t,r){t.writeVertices&&Te(e,t);const{indices:u,attributes:o,primitiveType:l,material:c}=t.gltf;let a=Z(u||o.position.count,l);const s=t.region.start;if(s){const m=new Uint32Array(a);for(let i=0;i<a.length;i++)m[i]+=s;a=m}e.components.push(new V({name:t.gltf.name,faces:a,material:r.get(c),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function Te(e,t){const{position:r,normal:u,tangent:o,color:l,texCoord0:c}=e.vertexAttributes,a=t.region.start,{attributes:s,transform:m}=t.gltf,i=s.position.count;if(H(r.slice(a,i),s.position,m),s.normal!=null&&u!=null){const n=B(S(),m),f=u.slice(a,i);J(f,s.normal,n),C(n)&&W(f,f)}else u!=null&&ee(u,0,0,1,{dstIndex:a,count:i});if(s.tangent!=null&&o!=null){const n=B(S(),m),f=o.slice(a,i);te(f,s.tangent,n),C(n)&&re(f,f)}else o!=null&&b(o,0,0,1,1,{dstIndex:a,count:i});if(s.texCoord0!=null&&c!=null?ne(c.slice(a,i),s.texCoord0):c!=null&&oe(c,0,0,{dstIndex:a,count:i}),s.color!=null&&l!=null){const n=s.color,f=l.slice(a,i);if(n.elementCount===4)n instanceof O?M(f,n,255):n instanceof I?se(f,n):n instanceof q&&M(f,n,1/256);else{b(f,255,255,255,255);const p=A.fromTypedArray(f.typedBuffer,f.typedBufferStride);n instanceof j?E(p,n,255):n instanceof A?le(p,n):n instanceof K&&E(p,n,1/256)}}else l!=null&&b(l.slice(a,i),255,255,255,255)}function he(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function be(e){return{horizontal:_(e.s),vertical:_(e.t)}}function _(e){switch(e){case v.CLAMP_TO_EDGE:return"clamp";case v.MIRRORED_REPEAT:return"mirror";case v.REPEAT:return"repeat"}}function d(e){return e**(1/ae)*255}function ve(e,t){return F(d(e[0]),d(e[1]),d(e[2]),t)}function we(e){return z(d(e[0]),d(e[1]),d(e[2]))}export{tt as loadGLTFMesh};
