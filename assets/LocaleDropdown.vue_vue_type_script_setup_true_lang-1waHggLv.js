var v=(n,a,s)=>new Promise((t,i)=>{var m=e=>{try{o(s.next(e))}catch(r){i(r)}},p=e=>{try{o(s.throw(e))}catch(r){i(r)}},o=e=>e.done?t(e.value):Promise.resolve(e.value).then(m,p);o((s=s.apply(n,a)).next())});import{u as x,b,_ as E,s as d,v as V,w as C,e as y,x as P,p as T,y as M}from"./index-rIQ0jc2Y.js";import"./Form-zBYpX0BC.js";import{u as w}from"./useIcon-hs7H8qhW.js";import{D as O,F as R,G as j,H as z}from"./element-plus-JcYBt7P_.js";import{l as S,a as A,m as g,W as f,L as h,u as c,e as D,ah as B,R as u,O as I,p as H,a7 as N,V as $,U as F,P as U}from"./vue-chunks-4Zb-T7Ga.js";/* empty css                         *//* empty css                  */const _="var(--el-color-black)",W=S({__name:"ThemeSwitch",emits:["change"],setup(n,{emit:a}){const{getPrefixCls:s}=b(),t=a,i=s("theme-switch"),m=w({icon:"emojione-monotone:sun",color:"#fde047"}),p=w({icon:"emojione-monotone:crescent-moon",color:"#fde047"}),o=x(),e=A(o.getIsDark),r=l=>{o.setIsDark(l),t("change",l)};return(l,L)=>(g(),f(c(O),{class:h(c(i)),modelValue:e.value,"onUpdate:modelValue":L[0]||(L[0]=k=>e.value=k),"inline-prompt":"","border-color":_,"inactive-color":_,"active-color":_,"active-icon":c(m),"inactive-icon":c(p),onChange:r},null,8,["class","modelValue","active-icon","inactive-icon"]))}}),ae=E(W,[["__scopeId","data-v-31b4ac8f"]]),G=n=>{const a=y();d.mode==="legacy"?d.global.locale=n:d.global.locale.value=n,a.setCurrentLocale({lang:n}),P(n)},q=()=>({changeLocale:a=>v(void 0,null,function*(){const s=d.global,t=yield V(Object.assign({"../../locales/en.ts":()=>C(()=>import("./en-y0Csw1Qf.js"),__vite__mapDeps([])),"../../locales/zh-CN.ts":()=>C(()=>import("./zh-CN-IvV4hgf6.js"),__vite__mapDeps([]))}),`../../locales/${a}.ts`);s.setLocaleMessage(a,t.default),G(a)})}),ne=S({__name:"LocaleDropdown",props:{color:T.string.def("")},setup(n){const{getPrefixCls:a}=b(),s=a("locale-dropdown"),t=M(),i=D(()=>t.getLocaleMap),m=D(()=>t.getCurrentLocale),p=o=>{if(o===c(m).lang)return;window.location.reload(),t.setCurrentLocale({lang:o});const{changeLocale:e}=q();e(o)};return(o,e)=>{const r=B("Icon");return g(),f(c(z),{class:h(c(s)),trigger:"click",onCommand:p},{dropdown:u(()=>[I(c(j),null,{default:u(()=>[(g(!0),H(U,null,N(i.value,l=>(g(),f(c(R),{key:l.lang,command:l.lang},{default:u(()=>[$(F(l.name),1)]),_:2},1032,["command"]))),128))]),_:1})]),default:u(()=>[I(r,{size:18,icon:"ion:language-sharp",class:h(["cursor-pointer !p-0",o.$attrs.class]),color:n.color},null,8,["class","color"])]),_:1},8,["class"])}}});export{ae as T,ne as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}