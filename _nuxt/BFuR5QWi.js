import{A as a,B as h,bH as F,E as S,bm as E,s as f,ad as $,a2 as C,a4 as R,a8 as q,N as U}from"./DgBxOc6k.js";import{a as M}from"./Ehva2g7Z.js";import{m as V,u as L}from"./B1VZpmwc.js";import{v as W}from"./CgkEI___.js";import{i as A}from"./B0Q55Tai.js";import{a as H}from"./CgwNZVQD.js";import"./Cy1Z8e3S.js";import"./4YZRQ8Kr.js";import"./C14Q9bsB.js";import"./CqrNtETm.js";import"./CYMvjYBC.js";import"./BRqP_wXA.js";import"./BipfWLt3.js";import"./TgX2bD_5.js";import"./BOD-G50G.js";import"./gDn-Xq4E.js";import"./CXqKSaGN.js";import"./Dxtv7eRQ.js";import"./B6CTbX1X.js";import"./MDUrh2eL.js";import"./D_Hhz84A.js";import"./BCPhyR7L.js";import"./CQuTPb9g.js";import"./Blu9Ckm7.js";import"./CyvNmfNw.js";const N=e=>{let t=class extends e{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=E(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(r,o){const{layer:s}=this;if(!r)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(r);if(!i)return[];const{extent:p,width:n,height:m,x:c,y}=i;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return $(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h(F)],t.prototype,"timeExtent",void 0),t=a([S("esri.layers.mixins.WMSLayerView")],t),t};let u=class extends N(A(V(L))){constructor(){super(...arguments),this.bitmapContainer=new M}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||R.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new M,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=E(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:o,y:s}=e,{spatialReference:d}=t;let i,p=0,n=0;if(r.children.some(g=>{const{width:w,height:v,resolution:b,x:l,y:x}=g,I=l+b*w,P=x-b*v;return o>=l&&o<=I&&s<=x&&s>=P&&(i=new U({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:d}),p=w,n=v,!0)}),!i)return null;const m=i.width/p,c=Math.round((o-i.xmin)/m),y=Math.round((i.ymax-s)/m);return{extent:i,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,o){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([S("esri.views.2d.layers.WMSLayerView2D")],u);const ht=u;export{ht as default};