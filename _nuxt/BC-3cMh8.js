import{d6 as c,cL as e,d7 as d,d8 as a,cH as g,d9 as p,da as b,aQ as h,db as j}from"./DgBxOc6k.js";import{s as w}from"./D6I-reLN.js";import{c as x}from"./gz51MNvJ.js";function s(r){return r?{origin:c(r.origin),vector:c(r.vector)}:{origin:e(),vector:e()}}function Q(r,n,o=s()){return d(o.origin,r),a(o.vector,n,r),o}function k(r,n,o){return A(r,n,0,1,o)}function A(r,n,o,u,i){const{vector:t,origin:v}=r,f=a(x.get(),n,v),m=g(t,f)/p(t);return b(i,t,h(m,o,u)),j(i,i,r.origin)}new w(()=>s());export{Q as b,k as j,s as v};