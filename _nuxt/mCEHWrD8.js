import{A as a,E as n,a8 as d,bi as u,ah as l}from"./DgBxOc6k.js";import{X as g}from"./BcNOfreo.js";import"./Cy1Z8e3S.js";import"./CXqKSaGN.js";import"./Dxtv7eRQ.js";import"./C14Q9bsB.js";import"./CYMvjYBC.js";import"./BipfWLt3.js";import"./B1VZpmwc.js";import"./BOWbz4lP.js";import"./DHN3oS5t.js";import"./BPTfGz5F.js";import"./BRqP_wXA.js";import"./D_Hhz84A.js";import"./asPOQ_ZQ.js";import"./CQuTPb9g.js";import"./CUzevAry.js";import"./CqrNtETm.js";import"./TgX2bD_5.js";import"./BOD-G50G.js";import"./BmZEZMMh.js";import"./D53i908L.js";import"./D5zmR9t2.js";import"./yYKP6GX_.js";import"./4YZRQ8Kr.js";import"./gDn-Xq4E.js";import"./B6CTbX1X.js";import"./MDUrh2eL.js";import"./BCPhyR7L.js";import"./Blu9Ckm7.js";import"./B7X19rIS.js";import"./Dh9IPv1h.js";import"./COths7rC.js";import"./DmRz6nou.js";import"./rmKzd6cm.js";import"./DZ5C6FQv.js";import"./DxuDDFFS.js";import"./B0Q55Tai.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Y=i;export{Y as default};