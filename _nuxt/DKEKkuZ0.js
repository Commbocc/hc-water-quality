import{O as p,T as v,P as y,V as c,c7 as S,s as f}from"./XTiWLC6H.js";import"./CEOtNdJQ.js";async function b(s,t,e){var l;const o=p(s),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n={...i,returnEdits:!0,f:"json"},r=v({...o.query,...n}),a=y(r,{...e,method:"post"}),m=`${o.path}/validateNetworkTopology`,{data:g}=await c(m,a),d=S.fromJSON(g);return d.serviceEdits=((l=d.serviceEdits)==null?void 0:l.map(u=>({layerId:u.id,editedFeatures:u.editedFeatures})))??[],d}async function J(s,t,e){if(!t.gdbVersion)throw new f("submit-validate-network-topology-job:missing-gdb-version","version is missing");const o=p(s),i=t.toJSON();t.validationSet&&(i.validationSet=JSON.stringify(t.validationSet));const n=y(o.query,{query:v({...i,returnEdits:!0,async:!0,f:"json"}),...e,method:"post"}),r=`${o.path}/validateNetworkTopology`,{data:a}=await c(r,n);return a?a.statusUrl:null}export{J as submitValidateNetworkTopologyJob,b as validateNetworkTopology};
