var l=(s,m,e)=>new Promise((n,c)=>{var i=t=>{try{r(e.next(t))}catch(o){c(o)}},u=t=>{try{r(e.throw(t))}catch(o){c(o)}},r=t=>t.done?n(t.value):Promise.resolve(t.value).then(i,u);r((e=e.apply(s,m)).next())});import{F as g}from"./Form-zBYpX0BC.js";import{u as w}from"./useForm-Z4SVEdn9.js";import{u as _}from"./useValidator-F_0BEAtX.js";import{l as v,J as y,b as x,m as F,W as R,u as p}from"./vue-chunks-4Zb-T7Ga.js";const S=v({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(s,{expose:m}){const{required:e}=_(),n=s,c=y({title:[e()],author:[e()],importance:[e()],pageviews:[e()],display_time:[e()],content:[e()]}),{formRegister:i,formMethods:u}=w(),{setValues:r,getFormData:t,getElFormExpose:o}=u,f=()=>l(this,null,function*(){const a=yield o();if(yield a==null?void 0:a.validate().catch(h=>{}))return yield t()});return x(()=>n.currentRow,a=>{a&&r(a)},{deep:!0,immediate:!0}),m({submit:f}),(a,d)=>(F(),R(p(g),{rules:c,onRegister:p(i),schema:s.formSchema},null,8,["rules","onRegister","schema"]))}});export{S as _};
