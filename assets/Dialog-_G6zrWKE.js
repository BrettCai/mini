var b=(k,g,e)=>new Promise((n,m)=>{var v=i=>{try{p(e.next(i))}catch(d){m(d)}},D=i=>{try{p(e.throw(i))}catch(d){m(d)}},p=i=>i.done?n(i.value):Promise.resolve(i.value).then(v,D);p((e=e.apply(k,g)).next())});import{_ as C}from"./ContentWrap.vue_vue_type_script_setup_true_lang-HIf3s-Dy.js";import{_ as V}from"./Dialog.vue_vue_type_style_index_0_lang-kG2IyXq8.js";import{c as B}from"./index-rIQ0jc2Y.js";import{F as P}from"./Form-zBYpX0BC.js";import{u as x}from"./useValidator-F_0BEAtX.js";import{g as $}from"./index-m-VUxfi6.js";import{u as F}from"./useForm-Z4SVEdn9.js";import{l as R,a as _,J as S,ah as w,m as y,W as I,R as a,O as r,V as c,U as s,u as o,p as N,a7 as U,q,P as A}from"./vue-chunks-4Zb-T7Ga.js";/* empty css                *//* empty css                  */import"./element-plus-JcYBt7P_.js";/* empty css               *//* empty css               *//* empty css                    */import"./el-radio-button-p8ayqjIC.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-eDKPZwk7.js";import"./style.css_vue_type_style_index_0_src_true_lang-nApQPz8X.js";import"./wang-editor-DC7h5-7O.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-X82Z-eSO.js";import"./IconPicker-WEu0nftT.js";const se=R({__name:"Dialog",setup(k){const{required:g}=x(),{t:e}=B(),n=_(!1),m=_(!1),{formRegister:v,formMethods:D}=F(),{getElFormExpose:p}=D,i=S([{field:"field1",label:e("formDemo.input"),component:"Input",formItemProps:{rules:[g()]}},{field:"field2",label:e("formDemo.select"),component:"Select",optionApi:()=>b(this,null,function*(){return(yield $()).data})},{field:"field3",label:e("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:e("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:e("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:e("formDemo.timeSelect")}]),d=()=>b(this,null,function*(){const u=yield p();u==null||u.validate(t=>{})});return(u,t)=>{const f=w("BaseButton");return y(),I(o(C),{title:o(e)("dialogDemo.dialog"),message:o(e)("dialogDemo.dialogDes")},{default:a(()=>[r(f,{type:"primary",onClick:t[0]||(t[0]=l=>n.value=!n.value)},{default:a(()=>[c(s(o(e)("dialogDemo.open")),1)]),_:1}),r(f,{type:"primary",onClick:t[1]||(t[1]=l=>m.value=!m.value)},{default:a(()=>[c(s(o(e)("dialogDemo.combineWithForm")),1)]),_:1}),r(o(V),{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=l=>n.value=l),title:o(e)("dialogDemo.dialog")},{footer:a(()=>[r(f,{onClick:t[2]||(t[2]=l=>n.value=!1)},{default:a(()=>[c(s(o(e)("dialogDemo.close")),1)]),_:1})]),default:a(()=>[(y(),N(A,null,U(1e4,l=>q("div",{key:l},s(l),1)),64))]),_:1},8,["modelValue","title"]),r(o(V),{modelValue:m.value,"onUpdate:modelValue":t[5]||(t[5]=l=>m.value=l),title:o(e)("dialogDemo.dialog")},{footer:a(()=>[r(f,{type:"primary",onClick:d},{default:a(()=>[c(s(o(e)("dialogDemo.submit")),1)]),_:1}),r(f,{onClick:t[4]||(t[4]=l=>m.value=!1)},{default:a(()=>[c(s(o(e)("dialogDemo.close")),1)]),_:1})]),default:a(()=>[r(o(P),{schema:i,onRegister:o(v)},null,8,["schema","onRegister"])]),_:1},8,["modelValue","title"])]),_:1},8,["title","message"])}}});export{se as default};
