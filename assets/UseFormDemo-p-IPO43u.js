var p=(C,v,l)=>new Promise((g,b)=>{var D=f=>{try{c(l.next(f))}catch(u){b(u)}},$=f=>{try{c(l.throw(f))}catch(u){b(u)}},c=f=>f.done?g(f.value):Promise.resolve(f.value).then(D,$);c((l=l.apply(C,v)).next())});import{F as M}from"./Form-zBYpX0BC.js";import{_ as x}from"./ContentWrap.vue_vue_type_script_setup_true_lang-HIf3s-Dy.js";import{h as s,c as A,_ as G}from"./index-rIQ0jc2Y.js";import{u as N}from"./useForm-Z4SVEdn9.js";import{u as j}from"./useValidator-F_0BEAtX.js";import{g as q}from"./index-m-VUxfi6.js";import{i as J,b as K}from"./element-plus-JcYBt7P_.js";import{l as H,J as Q,O as a,V as i,a as X,m as Y,p as Z,R as m,u as e,U as n,P as ee}from"./vue-chunks-4Zb-T7Ga.js";/* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-p8ayqjIC.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-eDKPZwk7.js";import"./style.css_vue_type_style_index_0_src_true_lang-nApQPz8X.js";import"./wang-editor-DC7h5-7O.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-X82Z-eSO.js";import"./IconPicker-WEu0nftT.js";/* empty css                */const oe=H({__name:"UseFormDemo",setup(C){const{required:v}=j(),{t:l}=A(),g=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],b=()=>new Promise(o=>{setTimeout(()=>{o(g)},3e3)}),D=Q([{field:"field1",label:l("formDemo.input"),component:"Input",formItemProps:{rules:[v()]}},{field:"field2",label:l("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]},formItemProps:{rules:[v()]}},{field:"field3",label:l("formDemo.radio"),component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:l("formDemo.checkbox"),component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:l("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:l("formDemo.timeSelect")},{field:"field7",label:`${l("formDemo.treeSelect")}`,component:"TreeSelect",optionApi:()=>p(this,null,function*(){return yield b()})},{field:"field8",component:"Upload",label:`${l("formDemo.default")}`,componentProps:{limit:3,action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:!0,onPreview:o=>{},onRemove:o=>{},beforeRemove:o=>J.confirm(`Cancel the transfer of ${o.name} ?`).then(()=>!0,()=>!1),onExceed:(o,t)=>{K.warning(`The limit is 3, you selected ${o.length} files this time, add up to ${o.length+t.length} totally`)},slots:{default:()=>a(s,{type:"primary"},{default:()=>[i("Click to upload")]}),tip:()=>a("div",{class:"el-upload__tip"},[i("jpg/png files with a size less than 500KB.")])}}}]),{formRegister:$,formMethods:c}=N(),{setProps:f,delSchema:u,addSchema:h,setValues:F,setSchema:_,getComponentExpose:w,getFormItemExpose:R,getElFormExpose:k}=c,y=o=>{f({labelWidth:o})},P=o=>{f({size:o})},L=o=>{f({disabled:o})},S=o=>{o?u("field2"):!o&&D[1].field!=="field2"&&h({field:"field2",label:l("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},V=o=>p(this,null,function*(){const t=yield k();o?t==null||t.resetFields():F({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00",field8:[{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}]})}),d=X(7),I=()=>{_([{field:"field2",path:"label",value:`${l("formDemo.select")} ${d.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),d.value++},T=()=>{e(d)%2===0?h({field:`field${e(d)}`,label:`${l("formDemo.input")}${e(d)}`,component:"Input"}):h({field:`field${e(d)}`,label:`${l("formDemo.input")}${e(d)}`,component:"Input"},e(d)),d.value++},U=()=>p(this,null,function*(){const o=yield k();o==null||o.validate(t=>{})}),z=()=>p(this,null,function*(){const o=yield k();o==null||o.resetFields()}),B=()=>p(this,null,function*(){const o=yield q();o&&_([{field:"field2",path:"componentProps.options",value:o.data}])}),O=()=>p(this,null,function*(){const o=yield w("field1");o==null||o.focus()}),W=()=>p(this,null,function*(){const o=yield R("field1"),t=yield w("field1");t==null||t.focus(),o==null||o.validate("focus",r=>{})}),E=(o,t,r)=>{};return(o,t)=>(Y(),Z(ee,null,[a(e(x),{title:`UseForm ${e(l)("formDemo.operate")}`,style:{"margin-bottom":"20px"}},{default:m(()=>[a(e(s),{onClick:t[0]||(t[0]=r=>y(150))},{default:m(()=>[i(n(e(l)("formDemo.change"))+" labelWidth",1)]),_:1}),a(e(s),{onClick:t[1]||(t[1]=r=>y("auto"))},{default:m(()=>[i(n(e(l)("formDemo.restore"))+" labelWidth",1)]),_:1}),a(e(s),{onClick:t[2]||(t[2]=r=>P("large"))},{default:m(()=>[i(n(e(l)("formDemo.change"))+" size",1)]),_:1}),a(e(s),{onClick:t[3]||(t[3]=r=>P("default"))},{default:m(()=>[i(n(e(l)("formDemo.restore"))+" size",1)]),_:1}),a(e(s),{onClick:t[4]||(t[4]=r=>L(!0))},{default:m(()=>[i(n(e(l)("formDemo.disabled")),1)]),_:1}),a(e(s),{onClick:t[5]||(t[5]=r=>L(!1))},{default:m(()=>[i(n(e(l)("formDemo.disablement")),1)]),_:1}),a(e(s),{onClick:t[6]||(t[6]=r=>S(!0))},{default:m(()=>[i(n(e(l)("formDemo.delete"))+" "+n(e(l)("formDemo.select")),1)]),_:1}),a(e(s),{onClick:t[7]||(t[7]=r=>S(!1))},{default:m(()=>[i(n(e(l)("formDemo.add"))+" "+n(e(l)("formDemo.select")),1)]),_:1}),a(e(s),{onClick:t[8]||(t[8]=r=>V(!1))},{default:m(()=>[i(n(e(l)("formDemo.setValue")),1)]),_:1}),a(e(s),{onClick:t[9]||(t[9]=r=>V(!0))},{default:m(()=>[i(n(e(l)("formDemo.resetValue")),1)]),_:1}),a(e(s),{onClick:I},{default:m(()=>[i(n(e(l)("formDemo.set"))+" "+n(e(l)("formDemo.select"))+" label ",1)]),_:1}),a(e(s),{onClick:T},{default:m(()=>[i(n(e(l)("formDemo.add"))+" "+n(e(l)("formDemo.subitem")),1)]),_:1}),a(e(s),{onClick:U},{default:m(()=>[i(n(e(l)("formDemo.formValidation")),1)]),_:1}),a(e(s),{onClick:z},{default:m(()=>[i(n(e(l)("formDemo.verifyReset")),1)]),_:1}),a(e(s),{onClick:B},{default:m(()=>[i(n(`${e(l)("formDemo.select")} ${e(l)("searchDemo.dynamicOptions")}`),1)]),_:1}),a(e(s),{onClick:O},{default:m(()=>[i(n(`${e(l)("formDemo.input")} ${e(l)("formDemo.focus")}`),1)]),_:1}),a(e(s),{onClick:W},{default:m(()=>[i(n(`${e(l)("formDemo.input")} ${e(l)("formDemo.formValidation")}`),1)]),_:1})]),_:1},8,["title"]),a(e(x),{title:`UseForm ${e(l)("formDemo.example")}`},{default:m(()=>[a(e(M),{schema:D,onRegister:e($),onValidate:E},null,8,["schema","onRegister"])]),_:1},8,["title"])],64))}}),Le=G(oe,[["__scopeId","data-v-de3c9491"]]);export{Le as default};
