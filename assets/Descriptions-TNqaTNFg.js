var O=Object.defineProperty;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var y=(e,o,r)=>o in e?O(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,n=(e,o)=>{for(var r in o||(o={}))z.call(o,r)&&y(e,r,o[r]);if(h)for(var r of h(o))D.call(o,r)&&y(e,r,o[r]);return e};import{e as k,l as S,a as $,O as t,_ as A,$ as E,u,G as p,y as I}from"./vue-chunks-4Zb-T7Ga.js";import{u as V,p as s,I as _,b as N,_ as T}from"./index-rIQ0jc2Y.js";/* empty css                  *//* empty css               */import{a1 as B,a9 as P,m as q,j as G,X as w}from"./element-plus-JcYBt7P_.js";function M(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!I(e)}const R=V(),X=k(()=>R.getMobile),{getPrefixCls:F}=N(),d=F("descriptions"),j="-",H=S({name:"Descriptions",props:{title:s.string.def(""),message:s.string.def(""),collapse:s.bool.def(!0),border:s.bool.def(!0),column:s.number.def(2),size:s.oneOf(["large","default","small"]).def("default"),direction:s.oneOf(["horizontal","vertical"]).def("horizontal"),extra:s.string.def(""),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(e,{attrs:o}){const r=k(()=>{const i=["title","message","collapse","schema","data","class"],l=n(n({},o),e);for(const a in l)i.indexOf(a)!==-1&&delete l[a];return u(X)&&(l.direction="vertical"),l}),x=i=>{const l=["field"],a=n({},i);for(const c in a)l.indexOf(c)!==-1&&delete a[c];return n({labelClassName:`${d}-label`},a)},f=$(!0),C=()=>{e.collapse&&(f.value=!u(f))};return()=>{let i;return t("div",{class:[d,"bg-[var(--el-color-white)] dark:bg-[var(--el-bg-color)] dark:border-[var(--el-border-color)] dark:border-1px"]},[e.title?t("div",{class:[`${d}-header`,"relative h-50px flex justify-between items-center layout-border__bottom px-10px cursor-pointer"],onClick:C},[t("div",{class:[`${d}-header__title`,"relative font-18px font-bold ml-10px"]},[t("div",{class:"flex items-center"},[e.title,e.message?t(B,{content:e.message,placement:"right"},{default:()=>[t(_,{icon:"bi:question-circle-fill",class:"ml-5px",size:14},null)]}):null])]),e.collapse?t(_,{icon:f.value?"ep:arrow-down":"ep:arrow-up"},null):null]):null,t(P,null,{default:()=>[A(t("div",{class:[`${d}-content`,"p-20px"]},[t(q,p({gutter:0},u(r),{class:"outline-1px outline-[var(--el-border-color-lighter)] outline-solid"}),M(i=e.schema.map(l=>t(G,{key:l.field,span:l.span||24/e.column,class:"flex items-stretch"},{default:()=>{var a,c,b,g,v,m;return[e.direction==="horizontal"?t("div",{class:"flex items-stretch bg-[var(--el-fill-color-light)] outline-1px outline-[var(--el-border-color-lighter)] outline-solid flex-1"},[t("div",p(x(l),{class:"w-120px text-left px-8px py-11px font-700 color-[var(--el-text-color-regular)] border-r-1px border-r-[var(--el-border-color-lighter)] border-r-solid "}),[l.label]),t("div",{class:"flex-1 px-8px py-11px bg-[var(--el-bg-color)] color-[var(--el-text-color-primary)] text-size-14px"},[(a=l.slots)!=null&&a.default?(c=l.slots)==null?void 0:c.default(e.data):(b=w(e.data,l.field))!=null?b:j])]):t("div",{class:"bg-[var(--el-fill-color-light)] outline-1px outline-[var(--el-border-color-lighter)] outline-solid flex-1"},[t("div",p(x(l),{class:"text-left px-8px py-11px font-700 color-[var(--el-text-color-regular)] border-b-1px border-b-[var(--el-border-color-lighter)] border-b-solid"}),[l.label]),t("div",{class:"flex-1 px-8px py-11px bg-[var(--el-bg-color)] color-[var(--el-text-color-primary)] text-size-14px"},[(g=l.slots)!=null&&g.default?(v=l.slots)==null?void 0:v.default(e.data):(m=w(e.data,l.field))!=null?m:j])])]}})))?i:{default:()=>[i]})]),[[E,u(f)]])]})])}}}),Y=T(H,[["__scopeId","data-v-d660866a"]]);export{Y as D};
