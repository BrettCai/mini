var b=(n,c,i)=>new Promise((d,p)=>{var f=e=>{try{l(i.next(e))}catch(m){p(m)}},s=e=>{try{l(i.throw(e))}catch(m){p(m)}},l=e=>e.done?d(e.value):Promise.resolve(e.value).then(f,s);l((i=i.apply(n,c)).next())});import{_ as y}from"./ContentWrap.vue_vue_type_script_setup_true_lang-HIf3s-Dy.js";import{h as D,c as T,_ as x}from"./index-rIQ0jc2Y.js";import{_ as S}from"./Table.vue_vue_type_script_lang-IlPDfrWQ.js";import{a as v}from"./index-AYOpV6sj.js";/* empty css               */import{u as w}from"./useTable-P2RasHAG.js";import{y as z}from"./element-plus-JcYBt7P_.js";import{l as P,J as R,O as u,m as $,W as h,R as k,u as t,B as g,y as j}from"./vue-chunks-4Zb-T7Ga.js";/* empty css                *//* empty css                  *//* empty css                    *//* empty css                      *//* empty css                        */import"./el-radio-button-p8ayqjIC.js";/* empty css                         *//* empty css                  */import"./index-heSmZLB8.js";function B(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!j(n)}const C=P({__name:"TreeTable",setup(n){const{tableRegister:c,tableState:i}=w({fetchDataApi:()=>b(this,null,function*(){const{currentPage:r,pageSize:a}=i,o=yield v({pageIndex:t(r),pageSize:t(a)});return{list:o.data.list,total:o.data.total}})}),{loading:d,dataList:p,total:f,currentPage:s,pageSize:l}=i,{t:e}=T(),m=R([{field:"selection",type:"selection"},{field:"index",label:e("tableDemo.index"),type:"index"},{field:"content",label:e("tableDemo.header"),children:[{field:"title",label:e("tableDemo.title")},{field:"author",label:e("tableDemo.author")},{field:"display_time",label:e("tableDemo.displayTime")},{field:"importance",label:e("tableDemo.importance"),formatter:(r,a,o)=>u(z,{type:o===1?"success":o===2?"warning":"danger"},{default:()=>[e(o===1?"tableDemo.important":o===2?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:e("tableDemo.pageviews")}]},{field:"action",label:e("tableDemo.action"),slots:{default:r=>{let a;return u(D,{type:"primary",onClick:()=>_(r)},B(a=e("tableDemo.action"))?a:{default:()=>[a]})}}}]),_=r=>{};return(r,a)=>($(),h(t(y),{title:`${t(e)("router.treeTable")} ${t(e)("tableDemo.example")}`},{default:k(()=>[u(t(S),{pageSize:t(l),"onUpdate:pageSize":a[0]||(a[0]=o=>g(l)?l.value=o:null),currentPage:t(s),"onUpdate:currentPage":a[1]||(a[1]=o=>g(s)?s.value=o:null),columns:m,data:t(p),"row-key":"id",loading:t(d),sortable:"",pagination:{total:t(f)},onRegister:t(c)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])]),_:1},8,["title"]))}}),Z=x(C,[["__scopeId","data-v-d267d264"]]);export{Z as default};
