var d=(u,n,o)=>new Promise((l,r)=>{var i=t=>{try{s(o.next(t))}catch(e){r(e)}},m=t=>{try{s(o.throw(t))}catch(e){r(e)}},s=t=>t.done?l(t.value):Promise.resolve(t.value).then(i,m);s((o=o.apply(u,n)).next())});import{_ as B}from"./Write.vue_vue_type_script_setup_true_lang-QyfR41O8.js";import{_ as k}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-mJHeOpyu.js";import{c as y}from"./index-rIQ0jc2Y.js";import{l as C,aC as w,a as _,ah as D,m as R,W as $,R as p,O as c,V as x,U as v,u as a}from"./vue-chunks-4Zb-T7Ga.js";import{s as b}from"./index-AYOpV6sj.js";import{u as V}from"./useEventBus-XRV-n3Qn.js";import"./Form-zBYpX0BC.js";/* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-p8ayqjIC.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-eDKPZwk7.js";import"./element-plus-JcYBt7P_.js";import"./style.css_vue_type_style_index_0_src_true_lang-nApQPz8X.js";import"./wang-editor-DC7h5-7O.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-X82Z-eSO.js";import"./IconPicker-WEu0nftT.js";import"./useForm-Z4SVEdn9.js";import"./useValidator-F_0BEAtX.js";/* empty css                */const ot=C({__name:"ExampleAdd",setup(u){const{emit:n}=V(),{push:o,go:l}=w(),{t:r}=y(),i=_(),m=_(!1),s=()=>d(this,null,function*(){const t=a(i),e=yield t==null?void 0:t.submit();e&&(m.value=!0,(yield b(e).catch(()=>{}).finally(()=>{m.value=!1}))&&(n("getList","add"),o("/example/example-page")))});return(t,e)=>{const f=D("BaseButton");return R(),$(a(k),{title:a(r)("exampleDemo.add"),onBack:e[1]||(e[1]=g=>a(o)("/example/example-page"))},{header:p(()=>[c(f,{onClick:e[0]||(e[0]=g=>a(l)(-1))},{default:p(()=>[x(v(a(r)("common.back")),1)]),_:1}),c(f,{type:"primary",loading:m.value,onClick:s},{default:p(()=>[x(v(a(r)("exampleDemo.save")),1)]),_:1},8,["loading"])]),default:p(()=>[c(B,{ref_key:"writeRef",ref:i},null,512)]),_:1},8,["title"])}}});export{ot as default};
