import{A as a,E as n,a8 as d,bi as u,ah as l}from"./XTiWLC6H.js";import{X as g}from"./Cy5Jut4e.js";import"./CEOtNdJQ.js";import"./BJrdYiez.js";import"./B8aOuUUQ.js";import"./C14Q9bsB.js";import"./CYMvjYBC.js";import"./DRxmnVba.js";import"./Bsmtj8Vc.js";import"./DADy0Ah9.js";import"./pr6LxQGZ.js";import"./jGvcrHUe.js";import"./BRqP_wXA.js";import"./od7WerJ4.js";import"./CNJxOJMy.js";import"./CQuTPb9g.js";import"./CUzevAry.js";import"./B3V8uD9S.js";import"./23QGksl2.js";import"./BOD-G50G.js";import"./BmZEZMMh.js";import"./CRinw1aY.js";import"./D5zmR9t2.js";import"./xaZpqY9-.js";import"./BWp1R4u6.js";import"./B6g5p_bs.js";import"./B6CTbX1X.js";import"./MDUrh2eL.js";import"./B2el0YK5.js";import"./Blu9Ckm7.js";import"./B7X19rIS.js";import"./C5GYH_ud.js";import"./WLwdaT1u.js";import"./91QBcwsl.js";import"./B8eT36XF.js";import"./DZ5C6FQv.js";import"./DRTCDouZ.js";import"./Dazc5oy4.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._worker,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Y=i;export{Y as default};
