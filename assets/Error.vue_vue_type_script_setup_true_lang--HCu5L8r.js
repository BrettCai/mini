import{p as m,c as p}from"./index-rIQ0jc2Y.js";import{l as u,ah as d,m as x,p as v,q as r,U as o,O as _,R as g,V as y}from"./vue-chunks-4Zb-T7Ga.js";const f="/vue-element-plus-admin/assets/404-dycj3xGl.svg",h="/vue-element-plus-admin/assets/500-ARrvH3Ug.svg",T="/vue-element-plus-admin/assets/403-EanqjtfQ.svg",k={class:"flex justify-center"},B={class:"text-center"},C=["src"],E={class:"text-14px text-[var(--el-color-info)]"},b={class:"mt-20px"},N=u({__name:"Error",props:{type:m.string.validate(e=>["404","500","403"].includes(e)).def("404")},emits:["errorClick"],setup(e,{emit:n}){const{t}=p(),s={404:{url:f,message:t("error.pageError"),buttonText:t("error.returnToHome")},500:{url:h,message:t("error.networkError"),buttonText:t("error.returnToHome")},403:{url:T,message:t("error.noPermission"),buttonText:t("error.returnToHome")}},a=e,c=n,i=()=>{c("errorClick",a.type)};return(w,H)=>{const l=d("BaseButton");return x(),v("div",k,[r("div",B,[r("img",{width:"350",src:s[e.type].url,alt:""},null,8,C),r("div",E,o(s[e.type].message),1),r("div",b,[_(l,{type:"primary",onClick:i},{default:g(()=>[y(o(s[e.type].buttonText),1)]),_:1})])])])}}});export{N as _};
