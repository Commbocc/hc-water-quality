import{A as s,E as i}from"./XTiWLC6H.js";import{E as a,a as h,R as o}from"./BJrdYiez.js";import{i as n}from"./59rHZqqE.js";let t=class extends n{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===a.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),h(e,!0,r=>{this._renderChildren(r,o.All)}))}};t=s([i("esri.views.2d.layers.support.HighlightGraphicContainer")],t);const m=t;export{m as h};
