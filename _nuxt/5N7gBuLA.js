import{$ as l,j as y}from"./Drsw8e7I.js";import{c as f,o as v,b as d,f as s,i as I}from"./DgBxOc6k.js";import{p as i}from"./Bv7Kk8KQ.js";import"./CdaDTez3.js";import"./C0wm8_Yw.js";import"./BDgTkKgN.js";import"./Duf_7JYH.js";import"./Cy1Z8e3S.js";import"./DLwUr3pR.js";const n="Group Layer",g="group-layer-save",A="group-layer-save-as",o=s.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function P(e){return{isValid:f(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function u(e,r){return{...v(e,"web-map",!0),initiator:r}}function m(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||(r.title=e.title),d(r,s.METADATA),I(r,o)}async function $(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:P,createJSONContext:t=>u(t,e),createItemData:m,errorNamePrefix:g,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function D(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>u(a,e),createItemData:m,errorNamePrefix:A,newItem:r,setItemProperties:R,saveResources:(a,p)=>i(e.resourceReferences,p)},t)}export{$ as save,D as saveAs};