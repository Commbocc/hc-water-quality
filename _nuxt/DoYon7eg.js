import{O as r,em as e,N as s}from"./XTiWLC6H.js";import{d as p}from"./BaEkUq14.js";import"./CEOtNdJQ.js";import"./CYEurO12.js";import"./Bih7MQxJ.js";import"./Bm-X0Xz1.js";import"./CQuTPb9g.js";import"./Blu9Ckm7.js";async function O(a,i,m){const n=r(a),o=await p(n,e.from(i),{...m}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:s.fromJSON(t)}}export{O as executeForTopExtents};
