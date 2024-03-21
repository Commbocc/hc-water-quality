import{dD as j,dE as N,dF as P,dG as v,dH as x,dI as b,dJ as S,dK as A,dL as w,dM as O,s as R,dN as F,aH as K,aK as H,dO as J,aL as L,dP as z}from"./XTiWLC6H.js";import{i as C}from"./C0wm8_Yw.js";import{p as y}from"./B0fEJItM.js";function B(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=D(e,t,n);for(const a of o){const i=j(t,a,n);for(const r in s)i[r]=s[r]}}}function D(e,o,t){if((e==null?void 0:e.type)==="resource")return E(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=z;return{read:n,write:s}}}}function E(e,o,t){const n=N(o,t);return{type:String,read:(s,a,i)=>{const r=P(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!(r!=null&&r.resources))return typeof s=="string"?void(a[i]=v(s,r)):void(a[i]=s.write({},r));const c=V(s),d=v(c,{...r,verifyItemRelativeUrls:r!=null&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},x.NO),l=n.type!==String&&(!C(this)||(r==null?void 0:r.origin)&&this.originIdOf(t)>b(r.origin)),p={object:this,propertyName:t,value:s,targetUrl:d,dest:a,targetPropertyName:i,context:r,params:e};r!=null&&r.portalItem&&d&&!S(d)?l&&(e!=null&&e.contentAddressed)?g(p):l?G(p):M(p):r!=null&&r.portalItem&&(d==null||A(d)!=null||w(d)||l)?g(p):a[i]=d}}}}function g(e){var h;const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=O(o),c=I(n,o,s);if(t!=null&&t.contentAddressed&&c.type!=="json")return void((h=s.messages)==null?void 0:h.push(new R("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const d=t!=null&&t.contentAddressed&&c.type==="json"?F(c.jsonString):(r==null?void 0:r.filename)??K(),l=H((t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),d),p=`${l}.${y(c)}`;if(t!=null&&t.contentAddressed&&s.resources&&c.type==="json"){const m=s.resources.toKeep.find(({resource:f})=>f.path===p)??s.resources.toAdd.find(({resource:f})=>f.path===p);if(m)return void(a[i]=m.resource.itemRelativeUrl)}const u=s.portalItem.resourceFromPath(p);w(o)&&s.resources&&s.resources.pendingOperations.push(J(o).then(m=>{u.path=`${l}.${y({type:"blob",blob:m})}`,a[i]=u.itemRelativeUrl}).catch(()=>{}));const $=(t==null?void 0:t.compress)??!1;s.resources&&U({...e,resource:u,content:c,compress:$,updates:s.resources.toAdd}),a[i]=u.itemRelativeUrl}function G(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),c=I(s,t,o),d=y(c),l=L(r.path),p=(n==null?void 0:n.compress)??!1;d===l?(o.resources&&U({...e,resource:r,content:c,compress:p,updates:o.resources.toUpdate}),a[i]=t):g(e)}function M({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function U({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){const i=r=>{Y(e,o,r)};t.push({resource:n,content:s,compress:a,finish:i})}function I(e,o,t){return typeof e=="string"?{type:"url",url:o}:{type:"json",jsonString:JSON.stringify(e.toJSON(t))}}function V(e){return e==null?null:typeof e=="string"?e:e.url}function Y(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{B as j};
