var pe=Object.defineProperty;var w=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var Y=(o,r,l)=>r in o?pe(o,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[r]=l,R=(o,r)=>{for(var l in r||(r={}))Z.call(r,l)&&Y(o,l,r[l]);if(w)for(var l of w(r))N.call(r,l)&&Y(o,l,r[l]);return o};var L=(o,r)=>{var l={};for(var t in o)Z.call(o,t)&&r.indexOf(t)<0&&(l[t]=o[t]);if(o!=null&&w)for(var t of w(o))r.indexOf(t)<0&&N.call(o,t)&&(l[t]=o[t]);return l};var m=(o,r,l)=>new Promise((t,s)=>{var b=f=>{try{E(l.next(f))}catch(d){s(d)}},u=f=>{try{E(l.throw(f))}catch(d){s(d)}},E=f=>f.done?t(f.value):Promise.resolve(f.value).then(b,u);E((l=l.apply(o,r)).next())});import{O as C,G as x,l as be,a as U,e as ee,d as Ee,u as i,b as Te,_ as Oe,$ as Ie,y as Se,P as Re}from"./vue-chunks-4Zb-T7Ga.js";import{c as Ce,z as Pe,A as oe,B as ve,p as O,b as _e,C as ge,_ as Ae}from"./index-rIQ0jc2Y.js";/* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import{g as De}from"./el-radio-button-p8ayqjIC.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import{I as he}from"./InputPassword-eDKPZwk7.js";import{_ as ke}from"./style.css_vue_type_style_index_0_src_true_lang-nApQPz8X.js";import{_ as xe}from"./JsonEditor.vue_vue_type_script_setup_true_lang-X82Z-eSO.js";import{I as ye}from"./IconPicker-WEu0nftT.js";import{I as le,J as te,x as Ue,K as Me,C as Be,L as we,M as Ge,D as Le,N as Fe,O as Ve,P as Ke,Q as je,R as We,S as He,n as Xe,T as $e,U as Je,V as qe,W as ze,X as V,s as K,r as Qe,q as Ye,t as Ze,u as Ne,v as me,w as eo,Y as oo,m as lo,j as to,z as ro}from"./element-plus-JcYBt7P_.js";const re={RadioGroup:le,RadioButton:le,CheckboxGroup:te,CheckboxButton:te,Input:Ue,Autocomplete:Me,InputNumber:Be,Select:we,Cascader:Ge,Switch:Le,Slider:Fe,TimePicker:Ve,DatePicker:Ke,Rate:je,ColorPicker:We,Transfer:He,Divider:Xe,TimeSelect:$e,SelectV2:Je,InputPassword:he,Editor:ke,TreeSelect:qe,Upload:ze,JsonEditor:xe,IconPicker:ye};var p=(o=>(o.RADIO_GROUP="RadioGroup",o.RADIO_BUTTON="RadioButton",o.CHECKBOX_GROUP="CheckboxGroup",o.CHECKBOX_BUTTON="CheckboxButton",o.INPUT="Input",o.AUTOCOMPLETE="Autocomplete",o.INPUT_NUMBER="InputNumber",o.SELECT="Select",o.CASCADER="Cascader",o.SWITCH="Switch",o.SLIDER="Slider",o.TIME_PICKER="TimePicker",o.DATE_PICKER="DatePicker",o.RATE="Rate",o.COLOR_PICKER="ColorPicker",o.TRANSFER="Transfer",o.DIVIDER="Divider",o.TIME_SELECT="TimeSelect",o.SELECT_V2="SelectV2",o.INPUT_PASSWORD="InputPassword",o.EDITOR="Editor",o.TREE_SELECT="TreeSelect",o.UPLOAD="Upload",o.JSON_EDITOR="JsonEditor",o.ICON_PICKER="IconPicker",o))(p||{});const{t:G}=Ce(),se=o=>{var t,s;const r=[p.INPUT,p.AUTOCOMPLETE,p.INPUT_NUMBER,p.INPUT_PASSWORD],l=[p.SELECT,p.TIME_PICKER,p.DATE_PICKER,p.TIME_SELECT,p.SELECT_V2];return r.includes(o==null?void 0:o.component)?{placeholder:G("common.inputText")}:l.includes(o==null?void 0:o.component)?["datetimerange","daterange","monthrange","datetimerange","daterange"].includes(((t=o==null?void 0:o.componentProps)==null?void 0:t.type)||((s=o==null?void 0:o.componentProps)==null?void 0:s.isRange))?{startPlaceholder:G("common.startTimeText"),endPlaceholder:G("common.endTimeText"),rangeSeparator:"-"}:{placeholder:G("common.selectText")}:{}},so=(o={})=>R(R({},o.span?{}:{xs:24,sm:12,md:12,lg:12,xl:12}),o),ae=o=>{var s;const r=((s=o==null?void 0:o.componentProps)==null?void 0:s.on)||{},l={};for(const b in r)r[b]&&(l[`on${ve(b)}`]=(...u)=>{r[b](...u)});const t=R(R({clearable:!0},o.componentProps),l);return t.slots&&delete t.slots,t.on&&delete t.on,t},ao=(o={})=>{const r={};for(const l in o)o[l]&&(Pe(o[l])?r[oe(l)]=(...t)=>{var s;return(s=o[l])==null?void 0:s.call(o,...t)}:r[oe(l)]=()=>o[l]);return r},no=(o,r)=>{const l=R({},r);return o.map(t=>{if(t.remove)delete l[t.field];else if(t.component!=="Divider"){const s=V(l,t.field);K(l,t.field,s!==void 0?V(l,t.field):t.value!==void 0?t.value:void 0)}}),l},co=()=>{const o=l=>{var E,f,d,I;const t=l==null?void 0:l.componentProps,s=(E=t==null?void 0:t.slots)==null?void 0:E.optionGroupDefault,b=(f=t==null?void 0:t.props)==null?void 0:f.label,u=(d=t==null?void 0:t.props)==null?void 0:d.key;return(I=t==null?void 0:t.options)==null?void 0:I.map(c=>{var v;return(v=c==null?void 0:c.options)!=null&&v.length?s?s(c):C(Qe,{label:c[b||"label"],key:c[u||"key"]},{default:()=>{var A;return(A=c==null?void 0:c.options)==null?void 0:A.map(P=>r(l,P))}}):r(l,c)})},r=(l,t)=>{var d,I,c,v;const s=l.componentProps,b=(d=s==null?void 0:s.props)==null?void 0:d.label,u=(I=s==null?void 0:s.props)==null?void 0:I.value,E=(c=s==null?void 0:s.props)==null?void 0:c.key,f=(v=s.slots)==null?void 0:v.optionDefault;return C(Ye,x(t,{key:t[E||"key"],label:t[b||"label"],value:t[u||"value"]}),{default:()=>f?f(t):void 0})};return{renderSelectOptions:o}},uo=()=>({renderRadioOptions:r=>{var E,f,d,I;const l=r==null?void 0:r.componentProps,t=((E=l==null?void 0:l.props)==null?void 0:E.value)||"value",s=((f=l==null?void 0:l.props)==null?void 0:f.label)||"label",b=((d=l==null?void 0:l.props)==null?void 0:d.disabled)||"disabled",u=r.component===p.RADIO_GROUP?Ze:Ne;return(I=l==null?void 0:l.options)==null?void 0:I.map(c=>{const P=c,{value:v}=P,A=L(P,["value"]);return C(u,x(A,{disabled:c[b||"disabled"],label:c[t||"value"]}),{default:()=>[c[s||"label"]]})})}}),fo=()=>({renderCheckboxOptions:r=>{var E,f,d,I;const l=r==null?void 0:r.componentProps,t=((E=l==null?void 0:l.props)==null?void 0:E.value)||"value",s=((f=l==null?void 0:l.props)==null?void 0:f.label)||"label",b=((d=l==null?void 0:l.props)==null?void 0:d.disabled)||"disabled",u=r.component===p.CHECKBOX_GROUP?me:eo;return(I=l==null?void 0:l.options)==null?void 0:I.map(c=>{const P=c,{value:v}=P,A=L(P,["value"]);return C(u,x(A,{disabled:c[b||"disabled"],label:c[t||"value"]}),{default:()=>[c[s||"label"]]})})}});function F(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!Se(o)}const{renderSelectOptions:io}=co(),{renderRadioOptions:po}=uo(),{renderCheckboxOptions:bo}=fo(),{getPrefixCls:Eo}=_e(),To=Eo("form"),Oo=be({name:"Form",props:{schema:{type:Array,default:()=>[]},isCol:O.bool.def(!0),model:{type:Object,default:()=>({})},autoSetPlaceholder:O.bool.def(!0),isCustom:O.bool.def(!1),labelWidth:O.oneOfType([String,Number]).def("auto"),rules:{type:Object,default:()=>({})},labelPosition:O.oneOf(["left","right","top"]).def("right"),labelSuffix:O.string.def(""),hideRequiredAsterisk:O.bool.def(!1),requireAsteriskPosition:O.oneOf(["left","right"]).def("left"),showMessage:O.bool.def(!0),inlineMessage:O.bool.def(!1),statusIcon:O.bool.def(!1),validateOnRuleChange:O.bool.def(!0),size:{type:String,default:void 0},disabled:O.bool.def(!1),scrollToError:O.bool.def(!1),scrollToErrorOffset:O.oneOfType([Boolean,Object]).def(void 0)},emits:["register"],setup(o,{slots:r,expose:l,emit:t}){const s=U(),b=U({}),u=ee(()=>{const e=R({},o);return Object.assign(e,i(b)),e}),E=U({}),f=U({}),d=U(o.model);Ee(()=>{var e;t("register",(e=i(s))==null?void 0:e.$parent,i(s))});const I=(e={})=>{d.value=Object.assign(i(d),e)},c=(e={})=>{b.value=Object.assign(i(b),e)},v=e=>{const{schema:a}=i(u),n=ge(a,S=>S.field===e);n>-1&&a.splice(n,1)},A=(e,a)=>{const{schema:n}=i(u);if(a!==void 0){n.splice(a,0,e);return}n.push(e)},P=e=>{const{schema:a}=i(u);for(const n of a)for(const S of e)n.field===S.field&&K(n,S.path,S.value)},ne=(e,a)=>m(this,null,function*(){const n=yield e();P([{field:a.field,path:a.component===p.TREE_SELECT?"componentProps.data":"componentProps.options",value:n}])}),de=e=>i(E)[e],ce=e=>i(f)[e],j=(e,a)=>{E.value[a]=e},ue=(e,a)=>{f.value[a]=e};l({setValues:I,formModel:d,setProps:c,delSchema:v,addSchema:A,setSchema:P,getComponentExpose:de,getFormItemExpose:ce}),Te(()=>i(u).schema,(e=[])=>{d.value=no(e,i(d))},{immediate:!0,deep:!0});const fe=()=>{let e;const{isCol:a}=i(u);return a?C(lo,{gutter:20},F(e=W())?e:{default:()=>[e]}):W()},W=()=>{const{schema:e=[],isCol:a}=i(u);return e.filter(n=>!n.remove).map(n=>{let S;const M=n.component==="Divider",B=re.Divider;return M?C(B,R({contentPosition:"left"},n.componentProps),{default:()=>[n==null?void 0:n.label]}):a?C(to,so(n.colProps),F(S=H(n))?S:{default:()=>[S]}):H(n)})},H=e=>{var n,S,M,B;e.optionApi&&ne(e.optionApi,e);const a={default:()=>{var D,h,k,X,$;if((h=(D=e==null?void 0:e.formItemProps)==null?void 0:D.slots)!=null&&h.default)return(X=(k=e==null?void 0:e.formItemProps)==null?void 0:k.slots)==null?void 0:X.default(d.value);{const J=re[e.component],{autoSetPlaceholder:q}=i(u),_=(($=e==null?void 0:e.componentProps)==null?void 0:$.slots)||{},y=R({},ao(_));return e.component===p.SELECT&&(y.default=_.default?()=>{var T;return _.default(i((T=e==null?void 0:e.componentProps)==null?void 0:T.options))}:()=>io(e)),e.component===p.SELECT_V2&&_.default&&(y.default=({item:T})=>_.default(T)),(e.component===p.RADIO_GROUP||e.component===p.RADIO_BUTTON)&&(y.default=_.default?()=>{var T;return _.default(i((T=e==null?void 0:e.componentProps)==null?void 0:T.options))}:()=>po(e)),(e.component===p.CHECKBOX_GROUP||e.component===p.CHECKBOX_BUTTON)&&(y.default=_.default?()=>{var T;return _.default(i((T=e==null?void 0:e.componentProps)==null?void 0:T.options))}:()=>bo(e)),C(Re,null,[(()=>{var z,Q;const T=ee({get:()=>V(d.value,e.field),set:g=>{K(d.value,e.field,g)}});return e.component===p.UPLOAD?C(J,x({"file-list":T.value,"onUpdate:file-list":g=>T.value=g,ref:g=>j(g,e.field)},q&&se(e),ae(e),{style:((z=e.componentProps)==null?void 0:z.style)||{width:"100%"}}),R({},y)):C(J,x({modelValue:T.value,"onUpdate:modelValue":g=>T.value=g,ref:g=>j(g,e.field)},q&&se(e),ae(e),{style:((Q=e.componentProps)==null?void 0:Q.style)||{width:"100%"}}),R({},y))})()])}}};return(S=(n=e==null?void 0:e.formItemProps)==null?void 0:n.slots)!=null&&S.label&&(a.label=(...D)=>{var h,k;return(k=(h=e==null?void 0:e.formItemProps)==null?void 0:h.slots)==null?void 0:k.label(...D)}),(B=(M=e==null?void 0:e.formItemProps)==null?void 0:M.slots)!=null&&B.error&&(a.error=(...D)=>{var h,k;return(k=(h=e==null?void 0:e.formItemProps)==null?void 0:h.slots)==null?void 0:k.error(...D)}),Oe(C(ro,x({ref:D=>ue(D,e.field)},e.formItemProps||{},{prop:e.field,label:e.label||""}),F(a)?a:{default:()=>[a]}),[[Ie,!e.hidden]])},ie=()=>{const e=["schema","isCol","autoSetPlaceholder","isCustom","model"],a=R({},i(u));for(const n in a)e.indexOf(n)!==-1&&delete a[n];return a};return()=>C(oo,x({ref:s},ie(),{model:i(u).isCustom?i(u).model:d,class:To,onSubmit:e=>{e.preventDefault()}}),{default:()=>{const{isCustom:e}=i(u);return e?De(r,"default"):fe()}})}}),Lo=Ae(Oo,[["__scopeId","data-v-f35ffe22"]]);export{Lo as F,no as i};
