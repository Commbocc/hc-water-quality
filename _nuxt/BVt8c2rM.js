import{r as c}from"./23QGksl2.js";import{h as y,x as j,s as E}from"./23QGksl2.js";import{t as m}from"./DgiGbX8E.js";import{a as O,o as P,e as v}from"./B6g5p_bs.js";import{m as w}from"./DRxmnVba.js";import{f1 as L}from"./XTiWLC6H.js";import"./CYMvjYBC.js";import"./CEOtNdJQ.js";let x=class{constructor(e){this._rctx=e,this._store=new m}dispose(){this._store.forEach(e=>e.forEach(t=>t.dispose())),this._store.clear()}acquire(e,t,r,n){const o=this._store.get(e,t);if(o!=null)return o.ref(),o;const s=new c(this._rctx,e,t,r,n);return s.ref(),this._store.set(e,t,s),s}get test(){let e=0;return this._store.forEach(t=>t.forEach(r=>e+=r.hasGLName?2:1)),{cachedWebGLProgramObjects:e}}};function p(f){const{options:e,value:t}=f;return typeof e[t]=="number"}function b(f){let e="";for(const t in f){const r=f[t];if(typeof r=="boolean")r&&(e+=`#define ${t}
`);else if(typeof r=="number")e+=`#define ${t} ${r.toFixed()}
`;else if(typeof r=="object")if(p(r)){const{value:n,options:o,namespace:s}=r,i=s?`${s}_`:"";for(const a in o)e+=`#define ${i}${a} ${o[a].toFixed()}
`;e+=`#define ${t} ${i}${n}
`}else{const n=r.options;let o=0;for(const s in n)e+=`#define ${n[s]} ${(o++).toFixed()}
`;e+=`#define ${t} ${n[r.value]}
`}}return e}export{y as BufferObject,j as FramebufferObject,c as Program,x as ProgramCache,E as Renderbuffer,O as ShaderCompiler,w as Texture,P as VertexArrayObject,L as createContext,v as createProgram,b as glslifyDefineMap};
