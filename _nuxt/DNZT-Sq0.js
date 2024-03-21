import{et as X,gm as st,ej as it,ad as y,jh as rt,ai as D,jf as N,A as h,B as d,E as O,bI as P,aR as Y,cT as A,ji as M,f5 as j,iQ as z,jj as U,jk as nt,jl as $,iK as R,a as at,e$ as tt,a7 as ot,e9 as lt,ak as v,N as ut,b0 as ct,a4 as ht,a1 as dt,jm as pt,e4 as ft,jn as q,bW as w,jo as _t,jp as B,jq as et,fj as gt,cp as yt,an as k,h as S,bR as mt,a8 as V,w as Et,eq as Ft}from"./XTiWLC6H.js";import{m as Ct}from"./BCn7hiid.js";import{$ as Tt}from"./Beu7jz82.js";import{i as bt,c as St,g as vt}from"./B2el0YK5.js";import{a as It}from"./Bih7MQxJ.js";import{x as wt,f as Ot,c as xt,S as At}from"./CYEurO12.js";import{E as $t}from"./BsxeN7wM.js";import{o as Rt}from"./D8RFnVAz.js";import"./CEOtNdJQ.js";import"./BTzmF2w5.js";import"./CQuTPb9g.js";import"./Wa8cmqdu.js";import"./C1hAFvwY.js";import"./X3qNVaPx.js";import"./CTDe3LlQ.js";import"./DfcJZEKH.js";import"./CKM66pqS.js";import"./u1HLKWpv.js";import"./rcO5t3z4.js";import"./DaVlEYWY.js";import"./Blu9Ckm7.js";import"./Bm-X0Xz1.js";import"./ZQtVjY1n.js";function J(t=!1,e){if(t){const{elevationInfo:s,alignPointsInFeatures:i}=e;return new jt(s,i)}return new Ht}let Ht=class{async alignCandidates(e,s,i){return e}notifyElevationSourceChange(){}};const Pt=1024;let jt=class{constructor(e,s){this._elevationInfo=e,this._alignPointsInFeatures=s,this._alignmentsCache=new X(Pt),this._cacheVersion=0}async alignCandidates(e,s,i){const r=this._elevationInfo;return r==null||r.mode!=="absolute-height"||r.featureExpressionInfo?this._alignComputedElevationCandidates(e,s,i):(this._alignAbsoluteElevationCandidates(e,s,r),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(e,s,i){const{offset:r,unit:n}=i;if(r==null)return;const a=st(s),o=r*(rt(n??"meters")/a);for(const l of e)switch(l.type){case"edge":l.start.z+=o,l.end.z+=o;continue;case"vertex":l.target.z+=o;continue}}async _alignComputedElevationCandidates(e,s,i){const r=new Map;for(const g of e)it(r,g.objectId,Dt).push(g);const[n,a,o]=this._prepareQuery(r,s),l=await this._alignPointsInFeatures(n,i);if(y(i),o!==this._cacheVersion)return this._alignComputedElevationCandidates(e,s,i);this._applyCacheAndResponse(n,l,a);const{drapedObjectIds:c,failedObjectIds:f}=l,_=[];for(const g of e){const{objectId:m}=g;c.has(m)&&g.type==="edge"&&(g.draped=!0),f.has(m)||_.push(g)}return _}_prepareQuery(e,s){const i=[],r=[];for(const[n,a]of e){const o=[];for(const l of a)this._addToQueriesOrCachedResult(n,l.target,o,r),l.type==="edge"&&(this._addToQueriesOrCachedResult(n,l.start,o,r),this._addToQueriesOrCachedResult(n,l.end,o,r));o.length!==0&&i.push({objectId:n,points:o})}return[{spatialReference:s.toJSON(),pointsInFeatures:i},r,this._cacheVersion]}_addToQueriesOrCachedResult(e,s,i,r){const n=L(e,s),a=this._alignmentsCache.get(n);a==null?i.push(s):r.push(new zt(s,a))}_applyCacheAndResponse(e,{elevations:s,drapedObjectIds:i,failedObjectIds:r},n){for(const l of n)l.apply();let a=0;const o=this._alignmentsCache;for(const{objectId:l,points:c}of e.pointsInFeatures){if(r.has(l)){a+=c.length;continue}const f=!i.has(l);for(const _ of c){const g=L(l,_),m=s[a++];_.z=m,f&&o.put(g,m,1)}}}};class zt{constructor(e,s){this.point=e,this.z=s}apply(){this.point.z=this.z}}function L(t,{x:e,y:s,z:i,spatialReference:r}){return`${t}-${e}-${s}-${i??0}}-wkid:${r==null?void 0:r.wkid}`}function Dt(){return[]}let Nt=class{filter(e,s){return s}notifyElevationSourceChange(){}},Mt=class{filter(e,s){const{point:i,distance:r}=e,{z:n}=i;if(n==null||s.length===0)return s;const a=Vt(r),o=this._updateCandidatesTo3D(s,i,a).filter(Ut);return o.sort(Jt),o}_updateCandidatesTo3D(e,s,i){for(const r of e)switch(r.type){case"edge":qt(r,s,i);continue;case"vertex":kt(r,s,i);continue}return e}};function Ut(t){return t.distance<=1}function Q(t=!1){return t?new Mt:new Nt}function qt(t,e,{x:s,y:i,z:r}){const{start:n,end:a,target:o}=t;t.draped||Bt(o,e,n,a);const l=(e.x-o.x)/s,c=(e.y-o.y)/i,f=(e.z-o.z)/r;t.distance=Math.sqrt(l*l+c*c+f*f)}function Bt(t,e,s,i){const r=i.x-s.x,n=i.y-s.y,a=i.z-s.z,o=r*r+n*n+a*a,l=(e.x-s.x)*r+(e.y-s.y)*n+a*(e.z-s.z),c=Math.min(1,Math.max(0,l/o)),f=s.x+r*c,_=s.y+n*c,g=s.z+a*c;t.x=f,t.y=_,t.z=g}function kt(t,e,{x:s,y:i,z:r}){const{target:n}=t,a=(e.x-n.x)/s,o=(e.y-n.y)/i,l=(e.z-n.z)/r,c=Math.sqrt(a*a+o*o+l*l);t.distance=c}function Vt(t){return typeof t=="number"?{x:t,y:t,z:t}:t}function Jt(t,e){return t.distance-e.distance}function G(t=!1,e){return t?new Gt(e):new Lt}class Lt{async fetch(){return[]}notifySymbologyChange(){}}const Qt=1024;class Gt{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new X(Qt),this._cacheVersion=0}async fetch(e,s){if(e.length===0)return[];const i=[],r=[],n=this._candidatesCache;for(const _ of e){const g=W(_),m=n.get(g);if(m)for(const b of m)r.push(D(b));else i.push(_),n.put(g,[],1)}if(i.length===0)return r;const a=this._cacheVersion,{candidates:o,sourceCandidateIndices:l}=await this._getSymbologyCandidates(i,s);if(y(s),a!==this._cacheVersion)return this.fetch(e,s);const c=[],{length:f}=o;for(let _=0;_<f;++_){const g=o[_],m=W(i[l[_]]),b=n.get(m);b.push(g),n.put(m,b,b.length),c.push(D(g))}return r.concat(c)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function W(t){switch(t.type){case"vertex":{const{objectId:e,target:s}=t,i=`${e}-vertex-${s.x}-${s.y}-${s.z??0}`;return N(i).toString()}case"edge":{const{objectId:e,start:s,end:i}=t,r=`${e}-edge-${s.x}-${s.y}-${s.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return N(r).toString()}default:return""}}let I=class extends P{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(e,s){this._pending.push({promise:e,callback:s}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const e=this._pending[0];e.promise.then(s=>e.callback(s)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};h([d()],I.prototype,"updating",void 0),I=h([O("esri.core.AsyncSequence")],I);class Wt{constructor(e,s){this.data=e,this.resolution=s,this.state={type:u.CREATED},this.alive=!0}process(e){switch(this.state.type){case u.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case u.FETCH_COUNT:break;case u.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case u.FETCH_FEATURES:break;case u.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case u.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case u.CREATED:case u.FETCH_COUNT:return 0;case u.FETCHED_COUNT:return this.state.featureCount;case u.FETCH_FEATURES:return this.state.previous.featureCount;case u.FETCHED_FEATURES:return this.state.features.length;case u.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case u.CREATED:return"created";case u.FETCH_COUNT:return"fetch-count";case u.FETCHED_COUNT:return"fetched-count";case u.FETCH_FEATURES:return"fetch-features";case u.FETCHED_FEATURES:return"fetched-features";case u.DONE:return"done"}}_gotoFetchCount(e,s){return{type:u.FETCH_COUNT,previous:e,task:A(async i=>{const r=await M(s.fetchCount(this,i));this.state.type===u.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(e,s){return{type:u.FETCHED_COUNT,featureCount:s,previous:e}}_gotoFetchFeatures(e,s){return{type:u.FETCH_FEATURES,previous:e,task:A(async i=>{const r=await M(s.fetchFeatures(this,e.featureCount,i));this.state.type===u.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(e,s){return{type:u.FETCHED_FEATURES,previous:e,features:s}}_goToDone(e,s){return s.finish(this,e.features),{type:u.DONE,previous:e}}reset(){const e=this.state;switch(this.state={type:u.CREATED},e.type){case u.CREATED:case u.FETCHED_COUNT:case u.FETCHED_FEATURES:case u.DONE:break;case u.FETCH_COUNT:case u.FETCH_FEATURES:e.task.abort()}}intersects(e){return e==null||!this.data.extent||(j(e,Z),z(this.data.extent,Z))}}var u;(function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE"})(u||(u={}));const Z=Y();let p=class extends P{get _minimumVerticesPerFeature(){var t;switch((t=this.store)==null?void 0:t.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const t=new Set;return this.objectIdField&&t.add(this.objectIdField),this.globalIdField&&t.add(this.globalIdField),t}set outFields(t){const e=this._get("outFields"),s=U(t,this._mandatoryOutFields);nt(s,e)||(this._set("outFields",s),$(s,e)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(t){const e=this._get("filter"),s=this._filterProperties(t);JSON.stringify(e)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(t){const e=this._get("customParameters");JSON.stringify(e)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const e=this._get("tileInfo");e!==t&&(t!=null&&e!=null&&JSON.stringify(t)===JSON.stringify(e)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.suspended=!0,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new R,this._pendingEdits=new I,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,(t,e)=>{at(t,e,({id:s},{id:i})=>s===i)||this._process()},tt),this.addHandles(ot(()=>!this.suspended,()=>this._process()))}destroy(){this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(t=>this._deletePendingTile(t)),this._process()}applyEdits(t){this._pendingEdits.push(t,async e=>{if(e.addedFeatures.length===0&&e.updatedFeatures.length===0&&e.deletedFeatures.length===0)return;for(const[,i]of this._pendingTiles)i.reset();const s={...e,deletedFeatures:e.deletedFeatures.map(({objectId:i,globalId:r})=>i&&i!==-1?i:this._lookupObjectIdByGlobalId(r))};await this._updatingHandles.addPromise(this.store.processEdits(s,(i,r)=>this._queryFeaturesById(i,r),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!lt(this.url))return;const t=A(async e=>{var s;try{const i=await wt(this.url,new v({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:e});this.store.extent=ut.fromJSON((s=i.data)==null?void 0:s.extent)}catch(i){ct(i),ht.getLogger(this).warn("Failed to fetch data extent",i)}});this._updatingHandles.addPromise(t.promise.then(()=>this._process())),this.addHandles(dt(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(t=>t.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,t]of this._pendingTiles)t.alive=!1}_createPendingTiles(){if(this.suspended)return;const t=this._collectMissingTilesInfo();if(this._setAvailability(t==null?1:t.coveredArea/t.fullArea),t!=null)for(const{data:e,resolution:s}of t.missingTiles){const i=this._pendingTiles.get(e.id);i?(i.resolution=s,i.alive=!0):this._createPendingTile(e,s)}}_collectMissingTilesInfo(){let t=null;for(let e=this.tilesOfInterest.length-1;e>=0;e--){const s=this.tilesOfInterest[e],i=this.store.process(s,(r,n)=>this._verifyTileComplexity(r,n),this.outFields);t==null?t=i:t.prepend(i)}return t}_deletePendingTiles(){for(const[,t]of this._pendingTiles)t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(e,s)=>this._fetchCount(e,s),fetchFeatures:(e,s,i)=>this._fetchFeatures(e,s,i),finish:(e,s)=>this._finishPendingTile(e,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const[,e]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(e.data),e.resolution)&&this._updatingHandles.addPromise(e.process(t))}_verifyTileComplexity(t,e){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,e)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<Kt}_verifyFeatureDensity(t,e){if(this.tileInfo==null)return!1;const s=this.tileSize*e;return t*(Xt/(s*s))<Yt}_ensureFetchAllCounts(t){let e=!0;for(const[,s]of this._pendingTiles)s.state.type<u.FETCHED_COUNT&&this._updatingHandles.addPromise(s.process(t)),s.state.type<=u.FETCH_COUNT&&(e=!1);return e}_finishPendingTile(t,e){this.store.add(t.data,e),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(t==null?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,e){const s=new Wt(t,e);return this._pendingTiles.set(t.id,s),s}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,e){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:x,signal:e})}async _fetchFeatures(t,e,s){let i=0;const r=[];let n=0,a=e;for(;;){const o=this._createFeaturesQuery(t),l=this._setPagingParameters(o,i,a),{features:c,exceededTransferLimit:f}=await this._queryFeatures(o,s);l&&(i+=o.num),n+=c.length;for(const _ of c)r.push(_);if(a=e-n,!l||!f||a<=0)return r}}_filterProperties(t){return t==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const e=this.globalIdField,s=this.objectIdField;if(e==null)throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach(r=>{t===r.attributes[e]&&(i=r.objectId??r.attributes[s])}),i==null)throw new Error(`Expected to find a feature with globalId ${t}`);return i}_queryFeaturesById(t,e){const s=this._createFeaturesQuery();return s.objectIds=t,this._queryFeatures(s,e)}_queryFeatures(t,e){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,e):this._queryFeaturesJSON(t,e)}async _queryFeaturesPBF(t,e){const{sourceSpatialReference:s}=this,{data:i}=await Ot(this.url,t,new It({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:x,signal:e});return bt(i)}async _queryFeaturesJSON(t,e){const{sourceSpatialReference:s}=this,{data:i}=await xt(this.url,t,s,{query:this._configuration.customParameters,timeout:x,signal:e});return St(i,this.objectIdField)}_createCountQuery(t){const e=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0),e}_createFeaturesQuery(t=null){var r;const e=this._createBaseQuery(t),s=(t==null?void 0:t.data)!=null?this.store.getAttributesForTile((r=t==null?void 0:t.data)==null?void 0:r.id):null,i=U(pt(this.outFields,s??new Set),this._mandatoryOutFields);return e.outFields=Array.from(i),e.returnGeometry=!0,t!=null&&(this.capabilities.query.supportsResultType?e.resultType="tile":this.capabilities.query.supportsCacheHint&&(e.cacheHint=!0)),e}_createBaseQuery(t){const e=new v({returnZ:this.hasZ,returnM:!1,geometry:this.tileInfo!=null&&t!=null?ft(t.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return s!=null&&(e.where=s.where,e.gdbVersion=s.gdbVersion,e.timeExtent=s.timeExtent),e.outSpatialReference=this.spatialReference,e}_setPagingParameters(t,e,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:a,supportsResultType:o}=this.capabilities.query,l=i?v.MAX_MAX_RECORD_COUNT_FACTOR:1,c=l*((o||r)&&n?n:a||Zt);return t.start=e,i?(t.maxRecordCountFactor=Math.min(l,Math.ceil(s/c)),t.num=Math.min(s,t.maxRecordCountFactor*c)):t.num=Math.min(s,c),!0}};h([d({constructOnly:!0})],p.prototype,"url",void 0),h([d({constructOnly:!0})],p.prototype,"objectIdField",void 0),h([d({constructOnly:!0})],p.prototype,"globalIdField",void 0),h([d({constructOnly:!0})],p.prototype,"capabilities",void 0),h([d({constructOnly:!0})],p.prototype,"sourceSpatialReference",void 0),h([d({constructOnly:!0})],p.prototype,"spatialReference",void 0),h([d({constructOnly:!0})],p.prototype,"store",void 0),h([d({readOnly:!0})],p.prototype,"_minimumVerticesPerFeature",null),h([d()],p.prototype,"_mandatoryOutFields",null),h([d()],p.prototype,"outFields",null),h([d()],p.prototype,"suspended",void 0),h([d()],p.prototype,"filter",null),h([d()],p.prototype,"customParameters",null),h([d({readOnly:!0})],p.prototype,"_configuration",null),h([d()],p.prototype,"tileInfo",null),h([d()],p.prototype,"tileSize",null),h([d()],p.prototype,"tilesOfInterest",void 0),h([d({readOnly:!0})],p.prototype,"updating",null),h([d({readOnly:!0})],p.prototype,"updatingExcludingEdits",null),h([d({readOnly:!0})],p.prototype,"availability",void 0),h([d()],p.prototype,"hasZ",null),p=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],p);const Zt=2e3,x=6e5,Kt=1e6,Xt=25,Yt=1;class te{constructor(){this._store=new Map,this._byteSize=0}set(e,s){this.delete(e),this._store.set(e,s),this._byteSize+=s.byteSize}delete(e){const s=this._store.get(e);return!!this._store.delete(e)&&(s!=null&&(this._byteSize-=s.byteSize),!0)}get(e){return this._used(e),this._store.get(e)}has(e){return this._used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,s){for(const[i,r]of this._store){if(this._byteSize<=e)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(e){const s=this._store.get(e);s&&(this._store.delete(e),this._store.set(e,s))}}let F=class extends P{constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*$t.MEGABYTES,this._tileBounds=new Rt,this._tiles=new te,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=Y()}add(t,e){var r;for(const n of e)this._referenceFeature(n.objectId);const s=this.featureStore.upsertMany(e),i=s.map(n=>new Set(Object.keys(n.attributes))).reduce((n,a)=>q(n,a),new Set(Object.keys(((r=s[0])==null?void 0:r.attributes)??[])));this._addTileStorage(t,new Set(s.map(n=>n.objectId)),ee(s),i),this._tiles.applyByteSizeLimit(this.maximumByteSize,n=>this._removeTileStorage(n))}getAttributesForTile(t){var e;return t?(e=this._tiles.get(t))==null?void 0:e.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(t,e,s){return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),e,s)}_addTileStorage(t,e,s,i){const r=t.id;this._tiles.set(r,new re(t,e,s,i)),this._tileBounds.set(r,t.extent),this._tileFeatureCounts.set(r,e.size)}_remove({id:t}){const e=this._tiles.get(t);e&&this._removeTileStorage(e)}_removeTileStorage(t){const e=[];for(const i of t.objectIds)this._unreferenceFeature(i)===C.REMOVED&&e.push(i);this.featureStore.removeManyById(e);const s=t.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(t){this.featureStore.removeManyById(t);for(const[,e]of this._tiles){for(const s of t)e.objectIds.delete(s);this._tileFeatureCounts.set(e.data.id,e.objectIds.size)}for(const e of t)this._refCounts.delete(e)}async _processEditsRefetch(t,e,s){const i=(await e(t,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of i){const o=vt(this._tmpBoundingRect,a.geometry,r,n);o!=null&&this._tileBounds.forEachInBounds(o,l=>{const c=this._tiles.get(l);this.featureStore.add(a);const f=a.objectId;c.objectIds.has(f)||(c.objectIds.add(f),this._referenceFeature(f),this._tileFeatureCounts.set(c.data.id,c.objectIds.size))})}}process(t,e=()=>!0,s){if(this.tileInfo==null||!t.extent||this.extent!=null&&!z(j(this.extent,this._tmpBoundingRect),t.extent))return new H(t);const i=this.getAttributesForTile(t.id);if($(s,i))return new H(t);const r=this._createTileTree(t,this.tileInfo);return this._simplify(r,e,null,0,1),this._collectMissingTiles(t,r,this.tileInfo,s)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:t})=>({data:t,featureCount:this._tileFeatureCounts.get(t.id)||0}))}getFeatureCount(t){return this._tileFeatureCounts.get(t.id)??0}async fetchCount(t,e,s,i){const r=this._tileFeatureCounts.get(t.id);if(r!=null)return r;const n=await At(e,s,i);return this._tileFeatureCounts.set(t.id,n.data.count),n.data.count}_createTileTree(t,e){const s=new K(t.level,t.row,t.col);return e.updateTileInfo(s,w.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(t.extent,i=>{var n;const r=(n=this._tiles.get(i))==null?void 0:n.data;r&&this._tilesAreRelated(t,r)&&this._populateChildren(s,r,e,this._tileFeatureCounts.get(r.id)||0)}),s}_tilesAreRelated(t,e){if(!t||!e)return!1;if(t.level===e.level)return t.row===e.row&&t.col===e.col;const s=t.level<e.level,i=s?t:e,r=s?e:t,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}_populateChildren(t,e,s,i){const r=e.level-t.level-1;if(r<0)return void(t.isLeaf=!0);const n=e.row>>r,a=e.col>>r,o=t.row<<1,l=a-(t.col<<1)+(n-o<<1),c=t.children[l];if(c!=null)this._populateChildren(c,e,s,i);else{const f=new K(t.level+1,n,a);s.updateTileInfo(f,w.ExtrapolateOptions.POWER_OF_TWO),t.children[l]=f,this._populateChildren(f,e,s,i)}}_simplify(t,e,s,i,r){const n=r*r;if(t.isLeaf)return e(this.getFeatureCount(t),r)?0:(this._remove(t),s!=null&&(s.children[i]=null),n);const a=r/2,o=a*a;let l=0;for(let c=0;c<t.children.length;c++){const f=t.children[c];l+=f!=null?this._simplify(f,e,t,c,a):o}return l===0?this._mergeChildren(t):1-l/n<ae&&(this._purge(t),s!=null&&(s.children[i]=null),l=n),l}_mergeChildren(t){const e=new Set;let s,i=0;this._forEachLeaf(t,r=>{const n=this._tiles.get(r.id);if(n){s=s?q(s,n.attributeKeys):new Set(n.attributeKeys),i+=n.byteSize;for(const a of n.objectIds)e.has(a)||(e.add(a),this._referenceFeature(a));this._remove(r)}}),this._addTileStorage(t,e,i,s??new Set),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this._tileFeatureCounts.set(t.id,e.size)}_forEachLeaf(t,e){for(const s of t.children)s!=null&&(s.isLeaf?e(s):this._forEachLeaf(s,e))}_purge(t){if(t!=null)if(t.isLeaf)this._remove(t);else for(let e=0;e<t.children.length;e++){const s=t.children[e];this._purge(s),t.children[e]=null}}_collectMissingTiles(t,e,s,i){const r=new ne(s,t,this.extent);return this._collectMissingTilesRecurse(e,r,1,i),r.info}_collectMissingTilesRecurse(t,e,s,i){const r=this.getAttributesForTile(t.id),n=r&&!$(i,r);if(n&&e.addMissing(t.level,t.row,t.col,s),t.isLeaf)return;if(!t.hasChildren)return void(n||e.addMissing(t.level,t.row,t.col,s));const a=s/2;for(let o=0;o<t.children.length;o++){const l=t.children[o];l==null?e.addMissing(t.level+1,(t.row<<1)+((2&o)>>1),(t.col<<1)+(1&o),a):this._collectMissingTilesRecurse(l,e,a,i)}}_referenceFeature(t){const e=(this._refCounts.get(t)||0)+1;return this._refCounts.set(t,e),e===1?C.ADDED:C.UNCHANGED}_unreferenceFeature(t){const e=(this._refCounts.get(t)||0)-1;return e===0?(this._refCounts.delete(t),C.REMOVED):(e>0&&this._refCounts.set(t,e),C.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(t=>`${t.data.id}:[${Array.from(t.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(t=>`${t}:${this._refCounts.get(t)}`)}}};function ee(t){return t.reduce((e,s)=>e+se(s),0)}function se(t){return 32+ie(t.geometry)+_t(t.attributes)}function ie(t){if(t==null)return 0;const e=B(t.lengths,4);return 32+B(t.coords,8)+e}h([d({constructOnly:!0})],F.prototype,"featureStore",void 0),h([d()],F.prototype,"tileInfo",void 0),h([d()],F.prototype,"extent",void 0),h([d()],F.prototype,"maximumByteSize",void 0),F=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],F);class re{constructor(e,s,i,r){this.data=e,this.objectIds=s,this.byteSize=i,this.attributeKeys=r}}let K=class{constructor(e,s,i){this.level=e,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}};class H{constructor(e,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=et(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}let ne=class{constructor(e,s,i){this._tileInfo=e,this._extent=null,this.info=new H(s),i!=null&&(this._extent=j(i))}addMissing(e,s,i,r){const n=new gt(null,e,s,i);this._tileInfo.updateTileInfo(n,w.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!z(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=et(n.extent))}};const ae=.18751;var C;(function(t){t[t.ADDED=0]="ADDED",t[t.REMOVED=1]="REMOVED",t[t.UNCHANGED=2]="UNCHANGED"})(C||(C={}));let T=class extends yt.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=k(),this._elevationAligner=J(),this._elevationFilter=Q(),this._symbologyCandidatesFetcher=G(),this._updatingHandles=new R,this._editsUpdatingHandles=new R,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(t,e)=>{const s={query:t},i=await this.remoteClient.invoke("alignElevation",s,{signal:e});return y(e),i},this._getSymbologyCandidates=async(t,e)=>{const s={candidates:t,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:e});return y(e),i}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var t,e,s;(t=this._featureFetcher)==null||t.destroy(),(e=this._queryEngine)==null||e.destroy(),(s=this._featureStore)==null||s.clear()}async setup(t){if(this.destroyed)return{result:{}};const{geometryType:e,objectIdField:s,timeInfo:i,fieldsIndex:r}=t.serviceInfo,{hasZ:n}=t,a=S.fromJSON(t.spatialReference);this._spatialReference=a,this._featureStore=new Ct({...t.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new Tt({spatialReference:t.spatialReference,featureStore:this._featureStore,geometryType:e,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:s,timeInfo:i}),this._featureFetcher=new p({store:new F({featureStore:this._featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:S.fromJSON(t.serviceInfo.spatialReference),customParameters:t.configuration.customParameters});const o=t.configuration.viewType==="3d";return this._elevationAligner=J(o,{elevationInfo:t.elevationInfo!=null?mt.fromJSON(t.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=Q(o),this.addHandles([V(()=>this._featureFetcher.availability,l=>this.emit("notify-availability",{availability:l}),tt),V(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(t),E}async setSuspended(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(e),this._featureFetcher.suspended=t,E}async updateOutFields(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(e),this._featureFetcher.outFields=new Set(t??[]),E}async fetchCandidates(t,e){await this._whenSetup.promise,y(e);const s=oe(t),i=e==null?void 0:e.signal,r=await this._queryEngine.executeQueryForSnapping(s,i);y(i);const n=await this._elevationAligner.alignCandidates(r.candidates,S.fromJSON(t.point.spatialReference)??S.WGS84,i);y(i);const a=await this._symbologyCandidatesFetcher.fetch(n,i);y(i);const o=a.length===0?n:n.concat(a);return{result:{candidates:this._elevationFilter.filter(s,o)}}}async updateTiles(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(e),this._featureFetcher.tileSize=t.tileSize,this._featureFetcher.tilesOfInterest=t.tiles,this._featureFetcher.tileInfo=t.tileInfo!=null?w.fromJSON(t.tileInfo):null,E}async refresh(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(e),this._featureFetcher.refresh(),E}async whenNotUpdating(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(e),await Et(()=>!this.updatingExcludingEdits,e),y(e),E}async getDebugInfo(t,e){return y(e),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(t,e){this._updatingHandles.addPromise(this._whenSetup.promise),y(e);const s=k();return this._pendingApplyEdits.set(t.id,s),this._featureFetcher.applyEdits(s.promise),this._editsUpdatingHandles.addPromise(s.promise),E}async endApplyEdits(t,e){const s=this._pendingApplyEdits.get(t.id);return s&&s.resolve(t.edits),y(e),E}async notifyElevationSourceChange(t,e){return this._elevationAligner.notifyElevationSourceChange(),E}async notifySymbologyChange(t,e){return this._symbologyCandidatesFetcher.notifySymbologyChange(),E}async setSymbologySnappingSupported(t){return this._symbologyCandidatesFetcher=G(t,this._getSymbologyCandidates),E}_updateFeatureFetcherConfiguration(t){this._featureFetcher.filter=t.filter!=null?v.fromJSON(t.filter):null,this._featureFetcher.customParameters=t.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};h([d({readOnly:!0})],T.prototype,"updating",null),h([d({readOnly:!0})],T.prototype,"updatingExcludingEdits",null),h([d()],T.prototype,"_isInitializing",void 0),T=h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],T);const Ne=T;function oe(t){if(!t.filter)return{...t,query:{where:"1=1"}};const{distance:e,units:s,spatialRel:i,where:r,timeExtent:n,objectIds:a}=t.filter,o={geometry:t.filter.geometry?Ft(t.filter.geometry):void 0,distance:e,units:s,spatialRel:i,timeExtent:n,objectIds:a,where:r??"1=1"};return{...t,query:o}}const E={result:{}};export{Ne as default};
